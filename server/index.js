const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()
const postRouter=require("./routes/posts")
const userRouter=require("./routes/users")

const app = express()
const PORT=process.env.PORT || 5000

app.use(express.json({ limit: "30mb", extended: true }))
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())


app.use("/posts",postRouter)
app.use("/users",userRouter)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT || 5000, () => { console.log(`Server running on ${PORT}`) }))
    .catch((err) => console.log(err))
