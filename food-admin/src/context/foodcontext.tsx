import React, { useContext } from 'react';
import {Box} from "@mui/material"
import { createContext } from 'vm';

interface IFoodContext{
  
}

export const foodContext = createContext({} as IFoodContext)

const FoodProvider = () => {
  return (
    <div>foodcontext</div>
  )
}

export default FoodProvider;