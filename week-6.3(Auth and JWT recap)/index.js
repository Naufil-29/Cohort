const jwt = require('jsonwebtoken');
const JWT_SECRET = "nauweb";
const zod = require('zod');


const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

async function signjwt(username, password){ 
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success || !passwordResponse.success){ 
        return null;
    };

    const signature = jwt.sign({ 
        username
    }, JWT_SECRET);

    return signature;
};

const ans = signjwt("das@gmail.com", "181818");
console.log(ans);

async function verifyJwt(token){ 
    let ans = true;
    try{ 
         jwt.verify(token, JWT_SECRET);

    }catch(e){ 
        ans = false;
    };
    console.log(ans)
};

async function decodeJwt(token){ 
   const decoded = await jwt.decode(token);
   if(decoded){ 
    console.log(true)
   }
   else{ 
    console.log(false)
   }
};

decodeJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhc0BnbWFpbC5jb20iLCJpYXQiOjE3NjI0MjgwODd9.8xv99G0J7525fPp49X9AGRKbuzREPzhnxUrmaqkkFFw");
verifyJwt("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhc0BnbWFpbC5jb20iLCJpYXQiOjE3NjI0MjgwODd9.8xv99G0J7525fPp49X9AGRKbuzREPzhnxUrmaqkkFFw");

