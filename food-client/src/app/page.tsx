import {Grid, Button, Typography, collapseClasses,} from "@mui/material";
import ItemCard from "../components/card";
import Delievery from "@/components/delievery";


export default function Home() {

  return (
    <main style={{display:"flex", justifyContent:"center" , alignItems:"center",height:"full" }}>
        <ItemCard/>
        <Delievery/>
    </main>
  )
}

// sx={{background:"teal"}}