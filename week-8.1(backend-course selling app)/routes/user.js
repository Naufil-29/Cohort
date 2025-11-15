const { Router } = require('express');
const { z } = require('zod');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_USER_SECRET } = require('../config');
const { userModel, purchaseModel } = require('../db');

const userRouter = Router();


userRouter.post("/signup", async (req, res) => { 
// const requiredBody = z.object({ 
//         email: z.string().min(3).max(20).email(),
//         password: z.string().min(3).max(20),
//         firstName: z.string().min(3).max(20),
//         lastName: z.min(3).max(20)
//     });

   // const parsedData = requiredBody.parse(req.body);
    // const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    
    // if(!parsedDataWithSuccess.success){ 
    //     res.json({ 
    //         Msg: "incorrect format",
    //         error: parsedDataWithSuccess.error
    //     });
    // };

    const email = req.body.email;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;

    const hashedPassword = await bcrypt.hash(password, 5);
    console.log(hashedPassword);

    await userModel.create({ 
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    });
    
    res.json({ 
        Msg: "you are signed in"
    });
});

userRouter.post("/login", async (req, res) => { 
    const email = req.body.email;
    const password = req.body.password;

   const user = await userModel.findOne({ 
        email:email
    });

    console.log(user);

    const matchPassword = bcrypt.compare(password, res.password);

    if(!user){ 
        res.status(403).json({ 
            Msg: "user not found in db."
        });
    };

    if(matchPassword){ 
        const token = jwt.sign({ 
            id: user._id.toString(),
        },JWT_USER_SECRET);

        res.json({ 
            token: token
        });
    }
    else{ 
        res.status(403).json({ 
            Msg: "invalid credintials"
        });
    };

});

userRouter.get("/purchases", async (req, res) => { 

    const userId = req.userId;

    const purchases = await purchaseModel.find({ 
        userId: userId
    });

    let purchasedCourseIds = [];

    for(let i = 0; i < purchases.length; i++){ 
        purchasedCourseIds.push(purchase[i].courseId)
    }

    const courseData = await courseModel.find({
         _id: { $in: purchasedCourseIds }
    })

    res.json({ 
       purchases,
       courseData
    })
});

module.exports = { 
    userRouter: userRouter
}