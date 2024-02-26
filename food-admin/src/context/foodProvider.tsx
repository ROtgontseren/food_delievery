"use client"
import React, { PropsWithChildren, useContext, ChangeEvent,useState,createContext } from 'react';
import {Box} from "@mui/material"
import axios from 'axios';
import { Message } from '@mui/icons-material';

interface IFoodContext{
  foods : any;
  getFoods : () => void;
  createFood: () => void;
  deleteFood: (foodId: string) => void;
  handleFile: (e: ChangeEvent<HTMLInputElement>) => void;
  handleFoodForm: (e: any) => void;
  foodForm: {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
  };
}

export const foodContext = createContext({} as IFoodContext);

const FoodProvider = ({children} : PropsWithChildren) => {
  const [file, setFile] = useState<File | null>(null);
  const [foods, setFoods] = useState<any>();
  const [foodForm, setFoodForm] = useState<any>({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "",
  });
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.currentTarget.files![0]);
    console.log("image", e.target.files)
  };
  const handleFoodForm = (e: ChangeEvent<HTMLInputElement>) => {
    setFoodForm({ ...foodForm});
    console.log("description", foodForm.description)
  };
  const getFoods = async () => {
    try {
      const { foods } = await axios
        .get("http://localhost:8080/foods")
        .then((res) => res.data);
      setFoods(foods);
      console.log("foods",foods.image)
    } catch (error) {}
  };
  const deleteFoodFromArray = (id: string) => {
    setFoods((oldFoods: any) => {
      return oldFoods.filter((obj: any) => obj._id !== id);
    });
  };
  const deleteFood = async (foodId: string) => {
    try {
      const data = await axios.delete(`http://localhost:8080/foods/${foodId}`, {
      });
      deleteFoodFromArray(foodId);
    } catch (error) {}
  };
  const createFood = async () => {
    try {
      const formData = new FormData();
      formData.set("image", file!);
      formData.set("name", foodForm.name);
      formData.set("description", foodForm.description);
      formData.set("price", foodForm.price);
      formData.set("category", foodForm.category);
      console.log("formdata", formData)
      const {
        data: { food },
      } = (await axios.post("http://localhost:8080/foods", formData,)) as {
        data: { food: object };
      };
      console.log("food",food)
    } catch (error:any) {console.log("error",error)}
  };

  return (
    <foodContext.Provider
    value={{
      getFoods,
      deleteFood,
      handleFoodForm,
      handleFile,
      foods,
      foodForm,
      createFood,
    }}
  >
    {children}
  </foodContext.Provider>
  )
}


export default FoodProvider;