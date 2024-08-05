const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")

const signUp = async (req, res) => {
    const { email, password, firstName, lastName, confirmPassword } = req.body
    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ msg: "User already exist" })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ msg: "Passwords don't match" })
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await User.create(
            { email, password: hashedPassword, name: `${firstName} ${lastName}` }
        )
        const token = jwt.sign({ email: result.email, id: result._id }, "test", {
            expiresIn: "1h"
        })
        return res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" })
        console.log(error)
    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return res.status(404).json({ msg: "User doesn't exist" })
        }

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        if (!isPasswordCorrect) {
            return res.status(400).json({ msg: "Invalid credentials" })
        }

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, "test", {
            expiresIn: "1h"
        })

        return res.status(200).json({ result: existingUser, token })
    } catch (error) {
        res.status(500).json({ msg: "Something went wrong" })
        console.log(error)
    }
}

module.exports = {
    signUp,
    signIn
}