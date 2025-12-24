import express from "express";
import { Client } from "pg";
const app = express();
app.use(express.json());
const pgClient = new Client('postgresql://neondb_owner:npg_GBCwXMnLQv64@ep-proud-leaf-ahnwyp4z-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
pgClient.connect();
app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const insertQuery = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}')`;
    const response = await pgClient.query(insertQuery);
    res.json({
        response,
        Msg: "you have signedUp"
    });
});
app.listen(3000);
//# sourceMappingURL=index.js.map