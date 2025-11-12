const jwt = require('jsonwebtoken');
const JWT_SECRET = "nkweb";


async function decodeJwt(token){ 
   const decoded = await jwt.decode(token);
   if(decoded){ 
    return true;
    console.log(true)
   }
   else{ 
    return false;
    console.log(false)
   }
};

decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhc0BnbWFpbC5jb20iLCJpYXQiOjE3NjI0MjgwODd9.8xv99G0J7525fPp49X9AGRKbuzREPzhnxUrmaqkkFFw")