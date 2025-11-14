const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId

const User = new Schema({ 
    email: String,
    password: {type:String, unique: true},
    name: String
});

const Todo = new Schema({ 
    title: String,
    done:{ 
        type: Boolean,
        default: false
    },
    userId: ObjectId
});

const UserModel = mongoose.model("Users", User);
const TodoModel = mongoose.model("todos", Todo);

module.exports = { 
    UserModel: UserModel,
    TodoModel: TodoModel
};

