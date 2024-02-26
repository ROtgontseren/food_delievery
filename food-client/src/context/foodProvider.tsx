"use client";
import axios from "axios";
import React, { PropsWithChildren, createContext, useState } from "react";

interface IFoodContext {
    foods: any;
    getFoods : () => void;
}

export const FoodContext = createContext<IFoodContext>({} as IFoodContext  );

const foodProvider = ({children}: PropsWithChildren) => {
    const [foods,setFoods]= useState()

    const getFoods = async () => {
      try {
        const { foods } = await axios
          .get("http://localhost:8080/foods")
          .then((res) => res.data);
        setFoods(foods);
        console.log("foodprovider",foods)
      } catch (error) {console.log("error" ,error)}
    };

  return (
    <FoodContext.Provider value={{ foods, getFoods}}>
      {children}
    </FoodContext.Provider>
  )
}

export default foodProvider;