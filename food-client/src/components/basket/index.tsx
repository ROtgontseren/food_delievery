"use client"
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import { Button } from '@mui/material';

export default function Basket() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', justifyContent:"center"}}>
        <CardMedia
        component="img"
        sx={{ width: 180 }}
        image="pizza.png"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingY:"20px" }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5" sx={{fontWeight: "bold"}}>
            Main Pizza
          </Typography>
          <Typography variant="subtitle1" component="div" sx={{color: "green"}}>
            34,800₮
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Орц
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
             Хулуу, төмс, лууван , сонгино, <br /> цөцгийн тос, самрын үр  
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Тоо
          </Typography>

        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1,justifyContent:"space-evenly" ,paddingX:"12px" }}>
             <Button variant="contained" color="success" sx={{color:"white" ,fontSize: "16px" , fontWeight: "bold"}}>-</Button>
             <Typography sx={{fontSize:"16px", fontWeight:"bold"}}>1</Typography>
             <Button variant="contained" color="success" sx={{color:"white" ,fontSize: "16px" , fontWeight: "bold"}}>+</Button>
        </Box>
      </Box>
    </Card>
  );
}
