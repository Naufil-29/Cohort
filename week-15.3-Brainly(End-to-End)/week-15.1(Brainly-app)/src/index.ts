
import express from "express"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import { userMiddleware } from "./middleware.js";
import { ContentModel, LinkModel, UserModel } from "./db.js";
import { random } from "./utils.js"

const app = express();
app.use(express.json());
const MONGO_URL = 'mongodb+srv://shaikhnaufil2908_db_us:Hx7V0XIzr0UqqBkf@cluster0.1obmpoa.mongodb.net/?appName=Cluster0';
const JWT_PASSWORD = "Brainly2908"

if(!MONGO_URL){ 
    throw new Error("MONGO_URL is not defined in .env file")
}else{ 
    console.log("connected to mongodb")
}

await mongoose.connect(MONGO_URL)

app.post("/api/v1/signup", async (req,res) => { 
    try{ 
        //zod validation
    const email = req.body.email;
    const password = req.body.password;

    await UserModel.create({ 
        email: email,
        password: password,
    })

    res.status(200).json({ 
        Msg: "User created successfully"
    })
    }
    catch(e){ 
        console.log("email already exists")
    }
});

app.post("/api/v1/signin", async (req,res) => { 

    const email = req.body.email;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({ 
        email: email,
        password: password,
    });

    if(existingUser){ 
        const token = jwt.sign({ 
            id: existingUser._id
        }, JWT_PASSWORD);

        res.status(201).json({ 
            token: token
        })
    }
    else{ 
        res.status(403).json({ 
            Msg: "Invalid credintials"
        })
    }

});

app.post("/api/v1/content", userMiddleware, async (req,res) => { 
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({ 
        link: link,
        type: type,
        //@ts-ignore
        userId: req.userId,
        tags:[]

    })

    return res.json({ 
        Msg: "content created"
    })
});

app.get("/api/v1/content", userMiddleware, async(req,res) => { 
   // @ts-ignore
    const userId = req.userId;

    const content = await ContentModel.find({ 
        userId: userId
    }).populate("userId", "username");

    return res.json({ 
        content: content
    })

});

app.delete("/api/v1/content", async(req,res) => { 

    const contentId = req.body.contentId;

    await ContentModel.deleteMany({ 
        contentId:contentId,
        //@ts-ignore
        userId: userId
    })

    res.json({ 
        Msg: "Deleted"
    })

});

app.post("/api/v1/brain/share", userMiddleware, async (req,res) => { 

    const share = req.body.share;
    //@ts-ignore
    if(share){ 

        const existingLink = await LinkModel.findOne({ 
            userId: req.userId
        })
        if(existingLink){ 
            res.json({ 
                hash: existingLink.hash
            })
        }
        const hash: random(10);
        LinkModel.create({ 
            //@ts-ignore
            userId: req.userId,
            hash: hash
        })

        res.json({ 
            Msg: "/share/" + hash
        })
    }
    else{ 
       await LinkModel.deleteOne({ 
        //@ts-ignore
            userId: req.userId
        })

        res.json({ 
            Msg: "link deleted"
        })
    }

    res.json({ 
        Msg: "Updated share Link"
    })

});

app.get("/api/v1/brain/:shareLink", userMiddleware, async(req,res) => { 
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({ 
        hash: hash ?? " "
    })

    if(!link){ 
        res.status(411).json({ 
            Msg: "incorrect input"
        })
    }
    else{
    const content = await ContentModel.find({ 
        userId: link.userId
    })

    const user = await UserModel.findOne({ 
        userId: link.userId
    })

    if(!user){ 
        res.status(411).json({ 
            Msg: "user not found"
        })
    }
    res.json({ 
        username: user.email,
        content: content
    })
}

});

app.listen(3000, () => { 
    console.log("app listening on port:3000")
})
