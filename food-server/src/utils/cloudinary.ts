import {v2 as cloudinary} from "cloudinary";
import { configDotenv } from "dotenv";
configDotenv();


cloudinary.config({
    // cloud_name:"dgf2xl7vl",
    // api_key:"496979844395797",
    // api_secret:"jB0cfOoax5e05oBhk2vggQX6BzE",
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API_KEY,
    api_secret:process.env.CLOUD_API_SECRET,
})

export default cloudinary;