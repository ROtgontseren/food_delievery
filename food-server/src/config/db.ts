import mongoose from "mongoose";
import Color from "colors";



export const connectDB =  async (uri: string) => {
    await mongoose.connect(uri);
    console.log(Color.bgRed("database is connected"));
 };

