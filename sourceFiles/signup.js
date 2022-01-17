import express from "express";
import bodyParser from "body-parser";

import Users from "../models/users.js";

var app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());



app.post("/", function(req,res){
    var data = req.body;
    var {name, email, number, semester, dob, password} = data;
    var user = new Users({
        Name: name,
        email: email,
        number: number,
        semester: semester,
        dob: dob,
        password: password,
    });

    try{
        user.save();
    }catch(err){
        console.log("there was an error saving the user");
        console.log(err);
    }
    res.send("req recieved");
})

export default app;