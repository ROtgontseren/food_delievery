import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {CardMedia, Typography, Box, } from '@mui/material';
import { useContext } from 'react';
import { CategoryContext } from '@/context/categoryContext';



export default function menucard() {
  const {allCategory} = useContext(CategoryContext);
  return (
    <Card sx={{width:"200px", position:"relative"}}>
        <CardMedia
          component="img"
          height="160"
          image="egg.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:"bold", fontSize:"18px"}}>{}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:"flex", gap: "12px",}}>
           <Box sx={{color:"#18BA51", fontSize:"18px", fontWeight: "bold"}}></Box>
           {/* <Box sx={{textDecoration:"line-through" ,fontSize:"18px", fontWeight:"bold"}}>16800₮</Box>  */}
          </Typography>
        </CardContent>
    </Card>
  );
}