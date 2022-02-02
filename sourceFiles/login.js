import express from "express";
import bodyParser from "body-parser";
import bcrypt, { hash } from "bcrypt";

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
        if(err){
            console.log(err);
        }
        if(result === null){
            res.send("Wrong Email");
        }
        else{
            bcrypt.compare(data.password, result.password, function(err, result){
                if(err){
                    console.log(err);
                    console.log("there was an error with checking hashing password");
                }
                else{
                    if(result === true){
                        res.send("Login Succesfull");
                    }
                    else{
                        res.send("Password Error")
                    }
                }
            })
            
        }
    })
})

export default app;