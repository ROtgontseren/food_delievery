import { NextFunction, Request,Response } from "express"
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";

export const signup = async (req: Request , res: Response , next : NextFunction) => {
    // user model
    try {
        const newUser =req.body;
        const user = await User.create(req.body);
        res.status(201).json({message : "Шинэ хэрэглэгч амжилттай үүслээ",user});
        console.log("email",req.body.ea)
    } catch (error)
    {
        next(error)
        // res.status(400).json({message : "Шинэ хэрэглэгч бүртгэх үед алдаа үүслээ",error});
    }
};
export const login = async (req: Request , res: Response , next: NextFunction) => {
    // user model
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email}).select("+password");
        console.log("user", user)
        if(!user){
            throw new MyError(`${email}-хэрэглэгч бүртгэлгүй байна`,403)
            // return res.status(400)
            // .json({message : `${email}-хэрэглэгч бүртгэлгүй байна`})
        }

        const isValid = await bcrypt.compare(password, user.password);
       
        if(!isValid){
            throw new MyError(`${email} И мэйл эсвэл нууц үг буруу байна`,401)
            // return res.status(400)
            // .json({message : `И мэйл эсвэл нууц үг буруу байна`})
        }
        
        const token = jwt.sign({
            id: user._id,
        },process.env.JWT_PRIVATE_KEY as string,{expiresIn: process.env.JWT_EXPIRE_IN});

        res.status(201).json({message : "хэрэглэгч амжилттай нэвтэрлээ",token});
    } catch (error)
    {
        next(error)
    }
};





























// import { Request, Response } from "express";
// import User from "../model/user";
// import hashSync from "bcrypt";
// import compareSync from "bcrypt";

// export const signup = async (req: Request, res: Response) => {
//   const { name, email, password } = req.body;
//   console.log("BODY", req.body);
//   const hashPass = hashSync(password, 10);
//   const newUser = {
//     name: name,
//     email: email,
//     password: hashPass,
//   };

//   const user = await User.create(newUser);

//   res.json({ message: "New user created", user });
// };

// export const login = async (req: Request, res: Response) => {
//   try {
//     const { email, password } = req.body;
//     const findUser = await User.findOne({ email: email }).lean();
//     if (!findUser)
//       return res.status(400).send({ message: "Invalid user email address" });
//     const validPass = compareSync(password, findUser.password as string);
//     if (!validPass) return res.status(400).send({ message: "Invalid pass" });
//     else {
//       const { password, ...user } = findUser;
//       res.status(201).send({ message: "success", user });
//     }
//   } catch (error) {
//     res.status(500).send({ message: `${error}-iim aldaa garlaa` });
//   }
// };

// https://mongoosejs.com/docs/queries.html