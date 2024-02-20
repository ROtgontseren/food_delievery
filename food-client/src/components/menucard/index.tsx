import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {CardMedia, Typography, Box, } from '@mui/material';


export default function menucard() {
  return (
    <Card sx={{width:"600px", position:"relative"}}>
        <CardMedia
          component="img"
          height="160"
          image="egg.jpeg"
        />
        <Box sx={{width:"47px", height:"37px", backgroundColor:"#2AD644", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"16px",border:"1px" ,borderColor:"white", color:"white" ,position:"absolute" ,top:"12px", right:"12px"}}>20%</Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold", fontSize:"18px"}}>
            Өглөөний хоол
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:"flex", gap: "12px",}}>
           <Box sx={{color:"#18BA51", fontSize:"18px", fontWeight: "bold"}}>14800₮</Box>
           <Box sx={{textDecoration:"line-through" ,fontSize:"18px", fontWeight:"bold"}}>16800₮</Box> 
          </Typography>
        </CardContent>
    </Card>
  );
}