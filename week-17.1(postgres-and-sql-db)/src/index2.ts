import express from "express"
import { Client } from "pg";

const app = express()
app.use(express.json())

const pgClient = new Client('postgresql://neondb_owner:npg_GBCwXMnLQv64@ep-proud-leaf-ahnwyp4z-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');
pgClient.connect();

app.post("/signup", async(req, res) => { 
    try{
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const street = req.body.street;
    const city = req.body.city;
    const pincode = req.body.pincode;
    const country = req.body.country;

    const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`
    const addressQuery = `INSERT INTO address (street, city, pincode, country, userId) VALUES ($1, $2, $3, $4, $5)`;


    await pgClient.query("BEGIN;");
    const response = await pgClient.query(insertQuery, [username, email, password]);
    const userId = response.rows[0].id; 
    const addressResponse = await pgClient.query(addressQuery, [street, city,  pincode, country, userId]);
    await pgClient.query("COMMIT;");
    
    res.json({ 
        response,
        addressResponse,
        Msg: "you have signedUp"
    })
}
catch(e){ 
    console.log(e);
    res.json({ 
        Msg: "signup error"
    })
}
})

app.listen(3000);