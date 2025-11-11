const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "jswbtkn";
const app = express();

app.use(express.json());

let users = [];

function logger(req, res, next){
    console.log(req.method + "request came");
    next();
 };

app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", logger, (req, res) => { 
    const username = req.body.username;
    const password = req.body.password;

    let user = {username, password}

    users.push(user);
    console.log(users);

    res.json({ 
        "msg": "congrats you are connected",
    });
});


app.post("/signin", logger, (req, res) => { 
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for(let i = 0; i < users.length; i++){ 
        if(users[i].username === username && users[i].password === password){ 
            foundUser = users[i];
        };
    };

    if(!foundUser){ 
        res.json({ 
            msg: "invalid credentials"
        });
    }
    else{ 
        let token = jwt.sign({ 
            username
        },JWT_SECRET);

        res.json({ 
            "token": token,
        });
    };
});

    function auth(req, res, next){ 
        const token = req.headers.token;
         decodedData = jwt.verify(token, JWT_SECRET);

        if(decodedData.username){ 
        req.username = decodedData.username;
        next()
        }
        else{ 
            res.json({ 
                msg: "you are not logged in"
            });
        };

    };

app.get("/me", logger, auth, (req, res) => { 
  let foundUser = null;

        for(let i = 0; i < users.length; i++){ 
            if(users[i].username === req.username){ 
                foundUser = users[i];
            };

        };

        res.json({ 
            username: foundUser.username,
            password: foundUser.password,
        });
    
})

app.listen(3000, console.log("app running on port = 3000"))
