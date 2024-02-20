import { Container, Box,Typography} from '@mui/material';
import React from 'react'

const index = () => {
  return (
    <Box sx={{width: "100%",display:"flex", justifyContent: "center",gap:"200px", backgroundColor: "#18BA51"}}>
             <Box sx={{display:"flex", justifyContent:"center", alignItems: "center", flexDirection:"column" }}>
                 <Typography sx={{
                  color: "white" , fontFamily: "600", fontSize: "55px",lineHeight: "49px", borderBottom: 1, borderColor: "white", height: "114px"
                 }}>Pinecone <br/> Food delivery</Typography>
                 <Typography sx={{
                  color: "white" , fontSize: "22px" ,marginTop: "15px" ,marginLeft: "-40px"
                 }}>Horem ipsum dolor sit amet ,<br/> consectetur adipiscing elit.</Typography>
             </Box>
             <Box sx={{display:"flex", justifyContent: "center",alignItems:"center",position:"relative",}}>
                   <img src="13.png" style={{width: "443px", height:"438px"}}/>
                   <img src="14.png" style={{width: "313px", height:"313px", position:"absolute", right: "-140px", top: "100px"}}/>
             </Box>
        </Box>
  )
}

export default index;