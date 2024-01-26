import { Request,Response } from "express"
import User from "../model/user";
import {sendEmail} from "../utils/sendemail"


export const sendEmailToUser = async (req: Request , res: Response) => {
    // user model
    try {
        const {email} =req.body;
        console.log("email",email)
        await sendEmail(email,"verify food platform")
    
        res.status(201).json({message : "email ilgeesen"});
    } catch (error)
    {
        res.status(400).json({message : "email ilgeesengui",error});
    }
};