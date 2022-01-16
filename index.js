import express from "express";

var app = express();

app.get("/", (req,res)=>{
    res.send("main of backend");
})




var PORT = 3000;

app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})