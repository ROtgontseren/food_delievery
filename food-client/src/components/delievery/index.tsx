import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function Delievery() {
  return (
   <Box sx={{display:"flex", gap:"60px", marginTop:"60px",marginBottom: "60px",justifyContent: "center", alignItems: "center"}}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
            <img src="book.png"/>
        </Box>
        <Typography variant="h5" component="div">
          Хүргэлтийн төлөв хянах
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Захиалга бэлтгэл явцыг хянах
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
            <img src="time.png"/>
        </Box>
        <Typography variant="h5" component="div">
        Шуурхай хүргэлт
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
            <img src="plate.png"/>
        </Box>
        <Typography variant="h5" component="div">
        Эрүүл, баталгаат орц
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
            <img src="book.png"/>
        </Box>
        <Typography variant="h5" component="div">
        Хоолны өргөн сонголт
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
           Захиалга бэлтгэлийн явцыг хянах
        </Typography>
      </CardContent>
    </Card>
   </Box>
  );
}