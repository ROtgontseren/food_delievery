import React from 'react';
import { Box } from '@mui/material';
import {Button} from "@/components/core/button";
import Menucard from '@/components/menucard';

const index = () => {
  return (
   <Box> 
    <Box sx={{display:"flex", justifyContent:"space-evenly",marginY:"40px" }}>
      <Button label="Main course" btnType='outlined'/>
      <Button label="Appetizers" btnType='outlined'/>
      <Button label="Beverage" btnType='outlined'/>
      <Button label="On sale" btnType='outlined'/>
    </Box>
    <Box sx={{display:"flex", gap: "60px", paddingX:"120px",marginY:"60px"}}>
          <Menucard/>
          <Menucard/>
          <Menucard/>
          <Menucard/>
    </Box>
    <Box sx={{display:"flex", gap: "60px", paddingX:"120px",marginY:"60px"}}>
          <Menucard/>
          <Menucard/>
          <Menucard/>
          <Menucard/>
    </Box>
   </Box>
  )
}

export default index
