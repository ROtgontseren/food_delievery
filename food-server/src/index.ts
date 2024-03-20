// import express , {Application,Request,Response} from "express";
// import Color, { bgGreen }  from "colors";
// import mongoose from "mongoose";
// import { colors } from "@mui/material";
// import User from "./model/user";
// import {connectDB}  from "./config/db";
// import { configDotenv } from "dotenv";
// configDotenv();

// const MONGO_URI = process.env.MONGO_URI as string;
// const PORT = process.env.PORT;

// const app: Application = express();

// connectDB(MONGO_URI);

// // app.use("/auth")

// app.listen(PORT, ()=> console.log(Color.rainbow("server aslaa")));

import express, { Application } from "express";
import color from "colors";
import { connectDB } from "./config/db";
import authRouter from "./router/authRouter";
import userRouter from "./router/userRouter";
import cors from "cors";
// import "dotenv/config";
import dotenv from "dotenv";
import { Request,Response } from "express";
import verifyRouter from "./router/verifyRouter";
import categoryRouter from "./router/categoryRouter";
import foodRouter from "./router/foodRouter";
import uploadRouter from "./router/uploadRouter";
import errorHandler from "./middleware/errorHandler";
import basketRouter from "./router/basketRouter";
import orderRouter from "./router/orderRoutes"
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);

app.use(cors());
app.use(express.json());
app.use("api/v1/auth", authRouter);
app.use("/",userRouter);
app.use("/verify",verifyRouter);
app.use("/categories",categoryRouter);
app.use("/foods",foodRouter);
app.use("/upload",uploadRouter);
app.use("/basket",basketRouter);
app.use("/oder",orderRouter);

app.get("/", (req:Request, res:Response)=> {
    res.send("food delievery")
})
app.use(errorHandler)
app.listen(PORT, ()=> console.log(color.rainbow("server aslaa")));

