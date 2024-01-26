import { Request,Response } from "express"
import User from "../model/user";


export const getUsers = async (req: Request , res: Response) => {
    // user model
    try {
        const user = await User.find();
        res.status(201).json({message : "бүх хэрэглэгчийг авлаа",user});
    } catch (error)
    {
        res.status(400).json({message : "бүх хэрэглэгч олдсонгүй",error});
    }
};