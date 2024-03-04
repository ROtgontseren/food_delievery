import { NextFunction, Response } from "express";
import { IReq } from "../utils/interface";
import MyError from "../utils/myError";
import User from "../model/user";
import { nanoid } from "nanoid";
import Basket from "../model/basket";

export const createOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { address, basket } = req.body;
    const { user } = req;
    console.log("USER", user);
    console.log("ADD", address);
    console.log("BASK", basket);

    if (!user || !address || !basket) {
      throw new MyError(`Хэрэглэгчийн мэдээлэл дутуу байна.`, 400);
    }

    const findUser = await User.findById(user._id);
    if (!findUser) {
      throw new MyError(`Хэрэглэгч олдсонгүй`, 400);
    }
    const newOrder = {
      orderNo: "#" + Math.floor(Math.random() * 100000), // generate
      products: basket.foods,
      payment: {
        paymentAmount: basket.totalPrice,
        status: "paid",
      },
      address: {
        ...address,
      },
      delivery: {
        status: "Progressing",
      },
    };
    console.log("ORDER", newOrder);

    // user.orders.push(newOrder);
    // await user.save();
    // await Basket.findByIdAndDelete(basket.id);

    res.status(201).json({ message: "Захиалга амжилттай үүслээ." });
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  try {
    const { orderId } = req.params;
    const findUser = User.findByIdAndUpdate({ orders: { $set: [] } });
    res.status(200).json({ message: "Захиалга амжилттай шинэчлэгдлээ." });
  } catch (error) {
    next(error);
  }
};