const express= require('express');
const app=express();
require('dotenv');
require('./db');

const userRouter = require("./routers/users.router");
const authRouter = require("./routers/auth.router");
const notesRouter = require("./routers/notes.router");

app.get('/',(req,res) => {
    res.send('Hello CipherSchools!')
});
app.use('/api/notes',notesRouter);
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);
const PORT=process.env.PORT || 8000;


app.listen(PORT,()=> {
    console.log("Server is running at 3001 port");
});