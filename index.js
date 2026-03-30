const express = require("express");
const mongoose = require("mongoose");
const { userRouter } = require("./routes/user.js")
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/v1/", userRouter);


app.listen(3345, async function () {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("server is running")
})
