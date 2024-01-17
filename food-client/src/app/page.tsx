import {Grid, Button, Typography, collapseClasses} from "@mui/material";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { sizing } from '@mui/system';

export default function Home() {

  return (
    <main style={{display:"flex", flexDirection:"column", width:"2200px" ,height:"1025px", justifyContent:"space-between" }}>
          <Header/>
          <Footer/>
    </main>
  )
}

// sx={{background:"teal"}}