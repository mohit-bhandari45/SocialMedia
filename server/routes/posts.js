const express = require("express");
const { getPosts, getPostsBySearch, createPost, updatePost, deletePost, likePost } = require("../controllers/posts");
const { auth } = require("../middleware/auth");

const router = express.Router();

router.get("/", getPosts)
router.get("/search", getPostsBySearch)
router.post("/", auth, createPost)
router.patch("/:id", auth, updatePost)
router.delete("/:id", auth, deletePost)
router.patch("/likePost/:id", auth, likePost)

module.exports = router