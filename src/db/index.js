const mongoose=require('mongoose');



mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MONGODB")
}).catch((error) => 
console.log("Error connecting to MONGODB",error));
