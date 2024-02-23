"use client"
import React, { PropsWithChildren, createContext, useState,useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import { clearScreenDown } from 'readline';

// interface ICategory {
//     name: string;
//     _id: string;
//   }
interface IcreateCategoryContext {
    categories: any;
    getCategory : () => void;
    createCategory : () => void;
    handleChange : (e: ChangeEvent<HTMLInputElement>) => void;
    handleFileChange : (e: ChangeEvent<HTMLInputElement>) => void;
}


export const CategoryContext = createContext({} as IcreateCategoryContext)


const CategoryProvider = ({children}: PropsWithChildren) => {
    const [categories, setCategories] = useState([]);
    const [file, setFile] = useState<File | null>(null);
    const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
 
    const getCategory = async () => {
        try {
          const data =await axios.get("http://localhost:8080/categories")
          console.log("RES", data.data.allCategories);
          setCategories(data.data.allCategories);
        } catch (error: any) {
          console.log("Error" + error.message);
        }
      };
   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("image", e.target.files)
     };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log("name" , e.target.value)

    setNewCategory({ ...newCategory, [name]: value });
  };
   const createCategory = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", newCategory.name);
      formData.set("description", newCategory.description);

      const {
        data: { category },
      } = (await axios.post("http://localhost:8080/categories", formData)) as {
        data: { category: object };
      };

      // setCategories(categories);
      console.log("Success Add Category");
    } catch (error: any) {
      console.log("Add Error - " + error.message);
    }
  };
  return (
    <CategoryContext.Provider value={{getCategory,categories,createCategory,handleChange,handleFileChange}}>
         {children}   
    </CategoryContext.Provider>
  )
} 
export default CategoryProvider;
