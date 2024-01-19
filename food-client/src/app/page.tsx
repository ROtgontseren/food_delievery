import {Grid, Button, Typography, collapseClasses,} from "@mui/material";
import ItemCard from "../components/card";
import Delievery from "@/components/delievery";
import Basket from "@/components/basket";


export default function Home() {

  return (
    <main style={{display:"flex", justifyContent:"center" , alignItems:"center",height:"full" }}>
        {/* <ItemCard/>
        <Delievery/> */}
        {/* <Basket/> */}
        <Grid>
          <Grid item xs={12}>
             <div className="wrapper">
               <div className="wrapper-top">
                <h1>hello</h1>
               </div>
               <div className="wrapper-bottom"> 
                <h1>hello-2</h1>
               </div> 
             </div>
          </Grid>
        </Grid>
    </main>
  )
}

// sx={{background:"teal"}}