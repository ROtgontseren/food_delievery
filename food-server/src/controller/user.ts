import { Request,Response } from "express"
import User from "../model/user";

const signup = async (req: Request , res: Response) => {
    const newUser = {
        name : "user",
        email: "user@gmail.com",
        password: "user123",
    };

    // user model
    const user = await User.create(newUser);

    res.json({message : "Шинэ хэрэглэгч үүслээ",user})
}