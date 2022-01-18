import express from "express";
import bodyParser from "body-parser";

import Users from "../models/users.js";

var app = express();
var status = false;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.post("/", (req,res)=>{
    var data = req.body;
    console.log("data recieved");
    console.log(data);
    Users.findOne({email: data.email}, function(err, result){
        console.log(result);
        if(err){
            console.log(err);
        }
        if(result === null){
            res.send("Wrong Email");
        }
        else{
            if(result.password == data.password){
                res.send("Login Succesfull");
            }
            else{
                res.send("Password Error")
            }
        }
    })
})

export default app;