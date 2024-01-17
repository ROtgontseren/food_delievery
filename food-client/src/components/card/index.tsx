import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea ,Box} from '@mui/material';

const ItemCard = () => {
  return (
    <Card sx={{width:"400px", position:"relative"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image="egg.jpeg"
        />
        <Box sx={{width:"47px", height:"37px", backgroundColor:"#2AD644", display:"flex", justifyContent:"center", alignItems:"center", borderRadius:"16px",border:"1px" ,borderColor:"white", color:"white" ,position:"absolute" ,top:"12px", right:"12px"}}>20%</Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Өглөөний хоол
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{display:"flex", gap: "16px",}}>
           <Box sx={{color:"green"}}>4800₮</Box>
           <Box sx={{textDecoration:"line-through"}}>6800₮</Box> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ItemCard;
