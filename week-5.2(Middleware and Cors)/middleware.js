const express = require('express');
const app = express();
let requestCount = 0;

function requestIncreaser(){ 
    requestCount = requestCount + 1;
    console.log(`there are ${requestCount} requests handled by the server`);
};

function loggerMiddleware(req, res){ 
    console.log("The method is " + req.method);
    console.log("the host is " + req.hostname)
    console.log("the url is " + req.url);
    console.log(new Date())
}

app.use(loggerMiddleware);
app.use(express.json());

app.get("/sum", function(req, res){
    requestIncreaser();
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({ 
        ans: a + b
    })
});


app.listen(3000, console.log("app is running on port 3000"))