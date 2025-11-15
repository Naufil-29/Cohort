const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
// console.log(process.env.MONGO_URL);

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin")

const app = express();
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;


app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);


async function main(){ 
    await mongoose.connect(MONGO_URL);
    app.listen(3001, console.log("app running on 3001"));
    console.log("db connected, app is listening on 3001")
};

main();
