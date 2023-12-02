import express from "express"
//we need to install @types/express and @types/node
// before that TS dont know what is the type of the express
// we instal them as dev dependencies because when we deploy the disc folder is deployed So we need this in just development 

import userRoute from "./routes/user.js" 
import { getAllUser } from "./controllers/userController.js";

const app = express();
app.use("/user" ,getAllUser);

app.listen(4000, ()=>{
    console.log("Server 2 is working");
})


app.get("/" , (req,res)=>{
    res.send("Welcome");
})