"use client"
import React, { PropsWithChildren, createContext, useState } from 'react';
import axios from 'axios';

interface IcreateCategoryContext {
    allCategory: any
    getCategories : () => void
}


export const CategoryContext = createContext({} as IcreateCategoryContext)


const CategoryProvider = ({children}: PropsWithChildren) => {
    const [allCategory,setAllcategory]=useState();

const getCategories = () => {
    try {
        const data = axios.get("http://localhost:8080/categories")
    } catch (error) {
        console.log("categories not found")
    }
}    
  return (
    <CategoryContext.Provider value={{getCategories,allCategory}}>
         {children}   
    </CategoryContext.Provider>
  )
} 
export default CategoryProvider;
