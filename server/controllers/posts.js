const mongoose = require("mongoose")
const PostMessage = require("../models/postMessage")

const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const getPostsBySearch = async (req, res) => {
    const { searchQuery, tags } = req.query;
    try {
        const title = new RegExp(searchQuery, "i")
        const posts = await PostMessage.find({ $or: [{ title }, { tags: { $in: tags.split(",") } }] })
        return res.status(200).json({ data: posts })
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

const createPost = async (req, res) => {
    const post = req.body
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() })
    try {
        await newPost.save();
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ msg: error.message })
    }
}

const updatePost = async (req, res) => {
    const { id: _id } = req.params
    const posts = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Posts found with this id")
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, posts, { new: true })
    return res.status(200).json(updatedPost)
}

const deletePost = async (req, res) => {
    const { id: _id } = req.params
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Posts found with this id")
    }

    await PostMessage.findByIdAndDelete(_id)
    return res.status(200).json({ msg: "Post Deleted" })
}

const likePost = async (req, res) => {
    const { id: _id } = req.params

    if (!req.userId) {
        return res.json({ msg: "Unauthenticated" })
    }

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("No Posts found with this id")
    }

    const post = await PostMessage.findById({ _id })

    const index = post.likes.findIndex((id) => id === String(req.userId))

    if (index === -1) {
        post.likes.push(req.userId)
    } else {
        post.likes = post.likes.filter((id) => id !== String(req.userId))
    }

    post.save();

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
    res.status(200).json(updatedPost)
}

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost,
    likePost,
    getPostsBySearch
}