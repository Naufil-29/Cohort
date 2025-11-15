
const { Router } = require('express');
const { adminModel } = require("../db");
const { courseModel } = require("../db")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_SECRET } = require("../config");
const { adminAuth } = require("../middlewares/adminAuth")
const adminRouter = Router();


adminRouter.post("/signup", async(req, res) => { 
     const { email, password, firstName, lastName } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log(hashedPassword);

    await adminModel.create({ 
        email: email,
        password: hashedPassword,
        firstName: firstName,
        lastName: lastName
    });
    
    res.json({ 
        Msg: "you are signed in"
    });
})

adminRouter.post("/signin", async(req, res) => { 
   const { email, password } = req.body;

   const admin = await adminModel.findOne({ 
        email:email
    });

    console.log(admin);

    if(!admin){ 
        res.status(400).json({ 
            Msg: "user not found in db."
        });
    };
   
    const matchPassword = await bcrypt.compare(password, admin.password);


    if(matchPassword){ 
        const token = jwt.sign({ 
            id: admin._id
        },JWT_ADMIN_SECRET);

        res.status(200).json({ 
            token: token
        });
    }
    else{ 
        res.status(403).json({ 
            Msg: "invalid credintials"
        });
    };
})

adminRouter.post("/course", adminAuth, async (req, res) => { 
    const adminId = req.userId;

    const { title, description, price, imageUrl } = req.body;

    const course = await courseModel.create({ 
        title, 
        description,
        price,
        imageUrl,
        creatorId: adminId,
    });

    res.status(201).json({ 
        Msg: "course created successfully",
        courseId: course._id
    })
})

adminRouter.delete("/deletecourse", (req, res) => { 

})

adminRouter.put("/course", adminAuth, async (req, res) => { 
    
    const adminId = req.adminId;
    
    const { title, description, price, imageUrl, courseId } = req.body;
    
    const course = await courseModel.findOne({ 
        _id: courseId,
        creatorId: adminId
    });

    if(!course){ 
        return res.status(404).json({ 
            Msg: "course not found"
        })
    }
    
    const updatecourse = await courseModel.updateOne({ 
        _id: courseId,
        creatorId: adminId
    },{ 
        title, 
        description,
        price,
        imageUrl,
    });

    res.json({ 
        Msg: "course updated successfully",
        updatecourse
    })
})

adminRouter.get("/course/bulk", adminAuth, async (req, res) => { 
    
    const adminId = req.adminId;
    const courses = await courseModel.find({ 
        creatorId: adminId
    });

    res.json({ 
        Msg: "All courses",
        courses: courses
    })
})

module.exports = { 
    adminRouter: adminRouter
}
