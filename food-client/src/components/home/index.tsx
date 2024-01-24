import { Container, Box,Typography} from '@mui/material';
import React from 'react'

const index = () => {
  return (
    <Box sx={{width: "100%"}}>
        <Box sx={{width: "100%",height: "788px", backgroundColor: "#18BA51", display:"flex"}}>
             <Box>
                 <Typography>Pinecone Food delivery</Typography>
                 <Typography>Horem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
             </Box>
             <Box sx={{display:"flex", justifyContent: "center",alignItems:"center"}}>
                   <img src="13.png" style={{width: "443px", height:"438px", position:"relative"}}/>
                   <img src="14.png" style={{width: "313px", height:"313px", position:"absolute"}}/>
             </Box>
        </Box>
    </Box>
  )
}

export default index;