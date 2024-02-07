import { NextFunction, Request,Response } from "express"
import User from "../model/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import MyError from "../utils/myError";
import { sendEmail } from "../utils/sendemail";

export const signup = async (req: Request, res: Response) => {
    console.log("Signup");
    try {
      const newUser = req.body;
      const user = await User.create({ ...newUser });
      const verifyToken = jwt.sign(
        { email: user.email },
        process.env.JWT_PRIVATE_KEY as string,
        {
          expiresIn: "5d",
        }
      );
    //   sendEmail({ email: user.email, token: verifyToken });
      res.status(201).json({
        message:
          "Шинэ хэрэглэгч амжилттай бүртгэгдлээ таны бүртгэлтэй имэйл хаяг руу баталгаажуулах email илгээсэн.",
      });
    } catch (error) {
      res
        .status(400)
        .json({ message: "Шинэ хэрэглэгч бүртгэх үед алдаа гарлаа.", error });
    }
  };
  export const login = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { userEmail, userPassword } = req.body;
      console.log("LOGIN", userEmail);
      console.log("req.body", req.body)
  
      const user = await User.findOne({ email: userEmail }).select("+password").lean();
  
      if (!user) {
        throw new MyError(`${userEmail}-тэй хэрэглэгч бүртгэлгүй байна.`, 403);
      }
  
      const isValid = await bcrypt.compare(userPassword, user.password);
  
      if (!isValid) {
        throw new MyError(`Имэйл эсвэл нууц үг буруу байна.`, 400);
      }
  
      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_PRIVATE_KEY as string,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
  
      const { password, ...otherParams } = user;
  
      res.status(201).json({
        message: "Хэрэглэгч амжилттай нэвтэрлээ",
        token,
        user: otherParams,
      });
    } catch (error) {
      next(error);
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