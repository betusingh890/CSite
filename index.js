import express from "express";

import connectDB from "./sourceFiles/connectdb.js";
import SignupFile from "./sourceFiles/signup.js";


var app = express();
connectDB();

app.get("/", (req,res)=>{
    res.send("main of backend");
});


app.use("/signup", SignupFile);




var PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})