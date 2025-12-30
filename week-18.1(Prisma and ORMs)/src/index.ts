import express from "express"
import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import { PrismaClient } from "./generated/prisma/client.js"

const app = express();
express.json();
const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({ connectionString })
const client = new PrismaClient({ adapter });

app.get("/users", async(req, res) => { 
    const users = await client.user.findMany(); 
    res.json({ 
        users
    })
})

async function createUser(){ 

    await client.user.create({
        data:{ 
            username: "Naufil",
            password: "naufil1234",
            age: 20,
            city: "amd"
        } 
    })
}

createUser();

app.listen(3000);