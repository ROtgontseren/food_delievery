"use client"
import React from 'react';
import { Box } from '@mui/material';
import {Button} from "@/components/core/button";
import Menucard from '@/components/menucard';
import {FoodContext} from '@/context/foodProvider';
import { useContext,useEffect} from 'react';


const index = () => {
  const { foods, getFoods} = useContext(FoodContext);
  useEffect(() => {
    getFoods()
  }, []);
  return (
   <Box> 
    <Box sx={{display:"flex", justifyContent:"space-evenly",marginY:"40px" }}>
      <Button label="Main course" btnType='outlined'/>
      <Button label="Appetizers" btnType='outlined'/>
      <Button label="Beverage" btnType='outlined'/>
      <Button label="On sale" btnType='outlined'/>
    </Box>
    <Box sx={{display:"flex", gap: "60px", paddingX:"120px",marginY:"60px"}}>
        {foods?.map((food: any) => (
            <Menucard food={food} />
        ))}
      </Box>
   </Box>
  )
}

export default index
