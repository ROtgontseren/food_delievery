import { NextFunction, Request, Response } from "express";
import Basket from "../model/basket";
import { IReq } from "../utils/interface";

export const addBasket = async (
  req: IReq,
  res: Response,
  next: NextFunction
) => {
  console.log("User", req.user);
  console.log("Body", req.body);

  try {
    // const findBasket = await Basket.findOne({ user: req.user._id });

    // if (!findBasket) {
      const basket = await Basket.create({
        // user: req.user._id,
        user: "",
        foods: [
          {
            food: req.body.foodId,
            qty: req.body.quantity,
          },
        ],
        totalPrice: req.body.totalPrice,
      });
      res.status(200).json({ message: "Сагсанд хоол амжилттай нэмлээ-1" });
//     }  else {
//       console.log("BFOODS", findBasket);
//       const findIndex = findBasket.foods.findIndex(
//         (el) => el.food === req.body.foodId
//       );
//       console.log("Find", findIndex);
//       console.log("Foods", findBasket.foods);

//       if (findIndex !== -1) {
//         findBasket.foods[findIndex].qty = Number(req.body.quantity);
//         findBasket.totalPrice = Number(req.body.totalPrice);
//       }

//       console.log("ChangedFoods", findBasket.foods);

//       await findBasket.save();
//       res.status(200).json({ message: "Сагсанд хоол амжилттай нэмлээ-2" });
    // }
  } catch (error) {
    next(error);
  }
};