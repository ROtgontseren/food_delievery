"use client"
import React, { PropsWithChildren, createContext, useState,useEffect } from 'react';
import axios from 'axios';

// interface ICategory {
//     name: string;
//     _id: string;
//   }
interface IcreateCategoryContext {
    categories: any;
    getCategory : () => void;
}


export const CategoryContext = createContext({} as IcreateCategoryContext)


const CategoryProvider = ({children}: PropsWithChildren) => {
    const [categories, setCategories] = useState([]);
 
    const getCategory = async () => {
        try {
          const data = await axios.get("http://localhost:8080/categories")
          console.log("RES", categories);
          setCategories(categories);
        } catch (error: any) {
          alert("Error" + error.message);
        }
      };
  
  return (
    <CategoryContext.Provider value={{getCategory,categories}}>
         {children}   
    </CategoryContext.Provider>
  )
} 
export default CategoryProvider;
