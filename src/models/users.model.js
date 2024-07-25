const mongoose = require("mongoose");

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        requied:true,
        unique:true,
    },
    name:{
        type:String,
        required:true,

    },
    email:{
        type: String,
        requied:true,
        unique:true,
    },
    password:{
        type: String,
        requied:true,
        unique:true,
    }
    
});
const User = mongoose.model("User", userSchema);

module.exports = User;