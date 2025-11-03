const express = require('express');

const app = express();

function hasEnoughAge(req, res, next){ 
    let age = req.query.age;
    if(age >= 14){ 
        next();
    }
    else{ 
        res.json({ 
            msg:"you are not old enough"
        });
    };
};

app.use(hasEnoughAge);// you dont have to attach function middleware  to every route just use this routes below this will automatically attach middleware.


app.get("/ride1", (req, res) => { 
        res.json({
             msg:"you have successfully ridden the ride"

    });
});

app.listen(3000);