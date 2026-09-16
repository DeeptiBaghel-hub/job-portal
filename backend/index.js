//const express=require(express) //old
import dns from "node:dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import comapnyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";


dotenv.config({});

const app=express();
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http://localhost:5173',
    credentials:true,

}
app.use(cors(corsOptions));

const PORT=process.env.PORT || 3000;

//apis
app.use("/api/v1/user",userRoute);
/*"http://localhost8000/api/v1/user/register"
"http://localhost8000/api/v1/user/login"
"http://localhost8000/api/v1/user/profile/update"*/


app.use("/api/v1/comapany",comapnyRoute);
app.use("/api/v1/comapany",jobRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`server running at port ${PORT}`)
})