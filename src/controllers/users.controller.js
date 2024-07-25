const User = require("../models/users.model");
const bcrypt=require("bcryptjs");

async function signup(req,res){
    const userDetails = req.body;
    try{
        if(!userDetails) throw Error("UserDetails is missing!");
        const {username, name,email,password} =userDetails;
        const salt=await bcrypt.genSalt(process.env.SALT);
       const passwordHash = await bcrypt.hash(userDetails.password,salt);
       console.log({passwordHash});
       
       const newUser=new User({
        username,
        name,
        email,
        password:passwordHash
       })
       await newUser.save();
       res.status(201).json({message:'User sucessfully registered'})

    }
catch(error){
    res.status(500).json({message:'Error in signup'})

}
}

async function login(req,res){
    //login
}
module.exports={
    signup,
    login
}