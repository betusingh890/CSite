import express from "express";

var app = express();

app.get("/", (req,res)=>{
    res.send("main of backend");
})




var PORT = process.env.PORT || 8000;

app.listen(PORT, ()=>{
    console.log("backend running at port " + PORT);
})