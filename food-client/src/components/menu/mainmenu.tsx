import React from 'react';
import { Box, Typography } from '@mui/material';
import Menucard from '../menucard';


const mainmenu = () => {
  return (
   <Box > 
    <Box sx={{display: "flex" ,justifyContent:"space-between", paddingX: "120px"}}>
       <Box sx={{display:"flex",alignItems:"center",gap: "4px"}}>
         <img src="Star.png"/>  
         <Typography sx={{fontSize: "22px", fontWeight: "bold"}}>Үндсэн хоол</Typography>
        </Box>
       <Box sx={{display: "flex", alignItems: "center",gap: "15px" ,}}>
          <Typography sx={{color: "#18BA51" , fontSize:"14px"}}>бүгдийг харах</Typography>
           <img src="sum.png"/>
       </Box>
    </Box> 
    <Box sx={{display:"flex", gap: "60px", paddingX:"120px",marginY:"60px"}}>
          
      </Box>
   </Box>
  )
}

export default mainmenu;
