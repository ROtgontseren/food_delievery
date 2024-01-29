import { Request,Response } from "express"
import User from "../model/user";
import {sendEmail} from "../utils/sendemail";
import bcrypt from 'bcrypt';
import { configDotenv } from "dotenv";
configDotenv();

// export const sendEmailToUser = async (req: Request, res: Response) => {
//   try {
//     const { email } = req.body;

//     const otp = Math.round(Math.random() * 10000)
//       .toString()
//       .padStart(4, "0");

//     const findUser = await User.findOne({ email });

//     if (!findUser) {
//       return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
//     }
//     const salt = await bcrypt.genSalt(10);

//     findUser.otp = await bcrypt.hash(otp, salt);

//     await findUser.save();

//     await sendEmail(email, otp);

//     res.status(201).json({ message: "Email амжилттай илгээгдлээ." });
//     console.log("finduser", findUser)
//   } catch (error) {
//     console.log("ERR", error);
//     res.status(400).json({
//       message: "Email илгээх үед алдаа гарлаа.",
//       error,
//     });
//   }
// };

export const veriyOtp = async (req: Request , res: Response) => {
    try{
    const {email, otp} = req.body;
   
   
    const findUser = await User.findOne({email}).select("+resetToken");
    if(!findUser) {
        return res.status(400).json({message: "user not found"});
    }
   
   
    const validOtp = await bcrypt.compare(otp, findUser?.otp);

    if (!validOtp) {
      return res.status(400).json({ message: "Код буруу байна" });
    }
    console.log("valid", validOtp);
    res.status(200).json({ message: "OTP is validated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server is internal error" });
  }
  
};

export const sendEmailToUser = async (req: Request , res: Response) => {
  // user model
  try {
      const {email} =req.body;
      const otp = Math.round(Math.random() * 10000).toString().padStart(4,"0");


      await sendEmail(email,"verify food platform")
  
      res.status(201).json({message : "email ilgeesen"});
  // const findUser = await User.findOne({ email });

  // if (!findUser) {
  //   return res.status(400).json({ message: "Хэрэглэгч олдсонгүй" });
  // }

  // console.log("OTP", otp);
  // const salt = await bcrypt.genSalt(10);

  // findUser.otp = await bcrypt.hash(otp, salt);

  // await findUser.save();

  // await sendEmail(email, otp);

  res.status(201).json({ message: "Email амжилттай илгээгдлээ." });
  } catch (error)
  {
      res.status(400).json({message : "email ilgeesengui",error});
  }
};