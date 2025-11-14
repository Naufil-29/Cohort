const express = require('express');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { z } = require("zod");
const {UserModel, TodoModel} = require("./db");
const {auth, JWT_SECRET} = require("./auth")
const app = express();

app.use(express.json());
mongoose.connect("mongodb+srv://shaikhnaufil2908_db_user:iBbcpa0Q107w6xQT@cluster0.5lhkbpi.mongodb.net/new-todo-app")

app.post("/signup", async (req, res) => { 
    const requiredBody =z.object({ 
        email: z.string().min(3).max(20).email(),
        password: z.string().min(3).max(20),
        name: z.string().min(3).max(20)
    });

   // const parsedData = requiredBody.parse(req.body);
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    
    if(!parsedDataWithSuccess.success){ 
        res.json({ 
            Msg: "incorrect format",
            error: parsedDataWithSuccess.error
        })
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    let ErrorThrown = false;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await UserModel.create({ 
        email: email,
        password: hashedPassword,
        name: name
    });

    res.json({ 
        Msg: "you are signed Up"
    });
});


app.post("/signin", async (req, res) => { 
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({ 
        email: email,
    });

    console.log(user);

    const matchPassword = await bcrypt.compare(password, res.password);

    if(!user){ 
        res.status(403).json({ 
            Msg: "user not found in db"
        })
    }

    if(matchPassword){ 
        const token = jwt.sign({ 
            id: user._id.toString()
        },JWT_SECRET);
        res.json({ 
            token: token
        })
    }
    else{ 
        res.status(403).json({ 
            Msg: "Invalid Credentials"
        });
    };
});

app.post("/todo", auth, async (req, res) => { 
    const userId = req.userId;
    const title = req.body.title;

    const todo = await TodoModel.create({ 
        title:title,
        userId:userId
    })
    

    res.json({ 
        Msg: "your todo is created",
        userId: userId,
    })
});
app.get("/todos", auth, async (req, res) => { 
   const userId = req.userId;

   const todos = await TodoModel.find({ 
    userId:userId
   });

   res.json({ 
    todos: todos
   });
});

;

app.listen(3005, console.log("app running on 3000"))