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
import "dotenv/config";

const app: Application = express();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI as string;

connectDB(MONGO_URI);

app.use(express.json());
app.use("/auth", authRouter);

app.listen(PORT, ()=> console.log(color.rainbow("server aslaa")));