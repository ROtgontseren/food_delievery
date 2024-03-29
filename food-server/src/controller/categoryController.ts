import { NextFunction, Request, Response } from "express"
import Category from "../model/category";
import MyError from "../utils/myError";
import { IReq } from "../utils/interface";
import cloudinary from "../utils/cloudinary";

export const createCategory = async (req: Request ,res: Response , next: NextFunction) => {
     try {
       const newCategory = {...req.body};
       if (req.file) {
        const { secure_url } = await cloudinary.uploader.upload(req.file.path);
        newCategory.image = secure_url;
      }
       await Category.create(newCategory);
       res.status(201).json({message : "category amjilttai uuslee"})
       console.log("new category", newCategory)
     } catch (error) {
        next(error)
     }
};
export const getCategory = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {categoryId} = req.params;
        const category = Category.findById(categoryId);
      if (!category){
        throw new MyError("${categoryId}-tai category oldsongui",400)
      }   
      res.status(200).json({message : `${categoryId}-tai category oldloo`,category}); 
    } catch (error) {
        next(error) 
    }
};
export const getAllCategory = async (req: IReq ,res: Response, next: NextFunction) => {
    try {
        const allCategories =  await Category.find();
      if(!allCategories){
        throw new MyError(`${allCategories}-tai cate oldsongui`,400)
      }
        res.status(200).json({message : "categories amjilttai oldloo",allCategories}) 
    } catch (error) {
        next(error)
    }
};
export const updateCategory = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {categoryId} = req.params;
        const updateCategory =req.body;
        const category = await Category.findByIdAndUpdate(
            categoryId,updateCategory
        );
        if (!category){
            throw new MyError("${categoryId}-tai category oldsongui",400)
          }  
       
       res.status(200).json({message :`${categoryId} -tai category shinechlegdlee`,updateCategory})
    } catch (error) {
        next(error)
    }
};
export const deleteCategory = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const {categoryId} = req.params;
        const category = Category.findByIdAndDelete(categoryId);
      if (!category){
        throw new MyError("${categoryId}-tai category oldsongui",400)
      }   
      res.status(200).json({message : `${categoryId}-tai category ustlaa`,categoryId}); 
    } catch (error) {
        next(error) 
    }
};

// if(req.file){
//   const {secure_url } = await cloudinary.uploader.upload(req.file.path)
//   newCategory.image = secure_url;
// }