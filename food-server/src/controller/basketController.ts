import { NextFunction, Response} from "express";
import Basket from "../model/basket"
import { IReq } from "../utils/interface";

export const addBasket = async (req: IReq, res: Response , next : NextFunction) => {
    res.send("hello")
    try {
    } catch (error) {
        next(error)
    }
    //    const basket = Basket.create({
    // user: req.user._id,
    // foods : [{
    //     food: req.body.foodId,
    //     qty: req.body.quantity,
    // }],
    // totalPrice: 10000,
//    });
}