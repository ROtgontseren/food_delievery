"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface ICreateCatContext {
  getCategories: () => void;
  categories: ICategory[];
}
interface ICategory {
  _id: string;
  name: string;
  description: string;
}
export const categoryContext = createContext<ICreateCatContext>(
  {} as ICreateCatContext
);
const CategoryProvider = ({ children }: PropsWithChildren) => {
  const [categories, setCatogories] = useState([]);

  const getCategories = async () => {
    try {
      const categoryData = await axios
        .get("http://localhost:8080/categories")
        .then((res) => res.data);
      setCatogories(categoryData.categories);
    } catch (error) {
      console.log("ERROR IN GET CATEGORIES", error);
    }
  };
  return (
    <categoryContext.Provider value={{ getCategories, categories }}>
      {children}
    </categoryContext.Provider>
  );
};
export default CategoryProvider;