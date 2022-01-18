import express from "express";
import path from "path";

import connectDB from "./sourceFiles/connectdb.js";
import SignupFile from "./sourceFiles/signup.js";
import LoginFile from "./sourceFiles/login.js";


var app = express();
connectDB();

app.use("/signup", SignupFile);
app.use("/login", LoginFile);


if(process.env.NODE_ENV === 'production'){
    app.use(express.static("frontend/build"));  
    app.get("*", (req,res) =>{
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })  
}

var PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})