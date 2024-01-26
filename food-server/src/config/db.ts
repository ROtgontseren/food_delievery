// import mongoose from "mongoose";
// import Color from "colors";



// export const connectDB =  async (uri: string) => {
//     await mongoose.connect(uri);
//     console.log(Color.bgRed("database is connected"));
//  };

 import mongoose from "mongoose";
 import color from "colors";
 
 export const connectDB = async (uri: string) => {
   try {
     await mongoose.connect(uri);
     console.log(color.bgGreen("DataBase holbogdloo."));
   } catch (error) {
     console.log(
       color.bgRed(`DataBase holbogdsongui. ${error} aldaa garlaa`)
     );
   }
 };