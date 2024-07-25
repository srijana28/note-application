const mongoose=require('mongoose');

MONGODB_URI="mongodb+srv://srijanagautam595:Myfamily123@cluster0.wpzqucg.mongodb.net/"

mongoose.connect(MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MONGODB")
}).catch((error) => 
console.log("Error connecting to MONGODB",error));