import { NextFunction, Request, Response } from "express"
import Food from "../model/food";
import MyError from "../utils/myError";
import cloudinary from "../utils/cloudinary";

export const createFood = async (req: Request ,res: Response , next: NextFunction) => {
     try {
       const newFood = {... req.body};
       if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        newFood.image = secure_url;
      }
       await Food.create({...req.body});
       res.status(201).json({message : "food amjilttai uuslee"})
     } catch (error) {
        next(error)
     }
};
export const getFood = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {foodId} = req.params;
        const food = Food.findById(foodId);
      if (!food){
        throw new MyError("${foodId}-tai food oldsongui",400)
      }   
      res.status(200).json({message : `${foodId}-tai food oldloo`,food}); 
    } catch (error) {
        next(error) 
    }
};
export const getAllfood = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const foods =  await Food.find().populate("category","_id name");
      if(!foods){
        throw new MyError(`${foods}-tai cate oldsongui`,400)
      }
        res.status(200).json({message : "foods amjilttai oldloo",foods}) 
    } catch (error) {
        next(error)
    }
};
export const updateFood = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {foodId} = req.params;
        const updateFood =req.body;
        const food = await Food.findByIdAndUpdate(
            foodId,updateFood
        );
        if (!food){
            throw new MyError("${foodId}-tai food oldsongui",400)
          }  
       
       res.status(200).json({message :`${foodId} -tai food shinechlegdlee`,updateFood})
    } catch (error) {
        next(error)
    }
};
export const deleteFood = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {foodId} = req.params;
        const food = Food.findByIdAndDelete(foodId);
      if (!food){
        throw new MyError("${foodId}-tai food oldsongui",400)
      }   
      res.status(200).json({message : `${foodId}-tai food ustlaa`,foodId}); 
    } catch (error) {
        next(error) 
    }
};