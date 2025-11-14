const jwt = require('jsonwebtoken');
const JWT_SECRET = "JSWBTK";

function auth (req, res, next){ 
    const token = req.headers.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){ 
        req.userId = decodedData.id;
        next()
    }else{ 
        res.status(403).json({ 
            Msg: "Invalid Credentials"
        });
    };
}

module.exports = {
    auth,
    JWT_SECRET
}