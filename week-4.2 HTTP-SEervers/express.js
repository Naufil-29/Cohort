const express = require('express');
const app = express();

app.get('/', (req, res)=> { 
    res.send("<b>Hi there</b>")
});

app.listen(3000);