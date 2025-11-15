const { Router } = require('express');
const { purchaseModel, courseModel } = require('../db');
const {userAuth }= require('../middlewares/userAuth');
const courseRouter = Router();

courseRouter.get("/purchase", userAuth, async (req, res) => { 

const userId = req.userId;
const courseId = req.body.courseId;

  await purchaseModel.create({ 
    userId: userId,
    courseId: courseId
  }) 

    res.json({ 
        Msg: "course purchased successfully"
    })
});

courseRouter.get("/preview", async(req, res) => { 

    const courses = await courseModel.find({});

    res.json({ 
       courses
    })
});

module.exports = { 
    courseRouter: courseRouter
};