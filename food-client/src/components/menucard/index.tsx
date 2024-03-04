"use client"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardMedia, Typography, Box, } from '@mui/material';
import CardModal from '../cardModal';


export default function menucard({food} : any) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Card sx={{width:"450px", position:"relative"}}>
        <CardMedia
          component="img"
          height="160"
          src={food.image} 
          onClick={() => handleOpen()}
        />
        {/* <Box sx={{width:"47px", height:"37px", backgroundColor:"#2AD644", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"16px",border:"1px" ,borderColor:"white", color:"white" ,position:"absolute" ,top:"12px", right:"12px"}}>20%</Box> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold", fontSize:"32px"}}>
            {food.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div" sx={{fontSize:"18px"}}>
            {food.description}
          </Typography>
          <Typography></Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:"flex", gap: "12px",}}>
           {/* <Box sx={{color:"#18BA51", fontSize:"18px", fontWeight: "bold"}}>14800₮</Box> */}
           <Box sx={{fontSize:"24px", fontWeight:"bold"}}>{food.price}₮</Box> 
          </Typography>
        </CardContent>
        {open && <CardModal handleClose={handleClose} open={open} food={food} />}
    </Card>
  );
}