import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db.js";
const app = express();
app.use(express.json());
const MONGO_URL = 'mongodb+srv://shaikhnaufil2908_db_us:Hx7V0XIzr0UqqBkf@cluster0.1obmpoa.mongodb.net/?appName=Cluster0';
const JWT_PASSWORD = "Brainly2908";
if (!MONGO_URL) {
    throw new Error("MONGO_URL is not defined in .env file");
}
else {
    console.log("connected to mongodb");
}
await mongoose.connect(MONGO_URL);
app.post("/api/v1/signup", async (req, res) => {
    try {
        //zod validation
        const email = req.body.email;
        const password = req.body.password;
        await UserModel.create({
            email: email,
            password: password,
        });
        res.status(200).json({
            Msg: "User created successfully"
        });
    }
    catch (e) {
        console.log("email already exists");
    }
});
app.post("/api/v1/signin", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existingUser = await UserModel.findOne({
        email: email,
        password: password,
    });
    if (existingUser) {
        const token = jwt.sign({
            id: existingUser._id
        }, JWT_PASSWORD);
        res.status(201).json({
            token: token
        });
    }
    else {
        res.status(403).json({
            Msg: "Invalid credintials"
        });
    }
});
app.post("/api/v1/content", (req, res) => {
});
app.get("/api/v1/content", (req, res) => {
});
app.delete("/api/v1/content", (req, res) => {
});
app.post("/api/v1/brain/share", (req, res) => {
});
app.get("/api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000, () => {
    console.log("app listening on port:3000");
});
//# sourceMappingURL=index.js.map