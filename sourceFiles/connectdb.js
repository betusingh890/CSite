import mongoose from "mongoose";

const URI = "mongodb+srv://Prasoon:prasoontan1@cluster0.wcl6o.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

async function connectDB(){
   try{
       await mongoose.connect(URI);
       console.log("succesfully coneected to db");
   }
   catch(err){
        console.log("there was an error with mongodb connection ");
        console.log(err);
   }

}

export default connectDB;