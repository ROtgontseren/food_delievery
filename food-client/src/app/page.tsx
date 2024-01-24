import {Grid, Button, Typography, collapseClasses,} from "@mui/material";
import ItemCard from "../components/card";
import Delievery from "@/components/delievery";
import Basket from "@/components/basket";
import HomePage from "@/components/home";


export default function Home() {

  return (
    <main>
        <HomePage/>
        {/* <Grid>
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
        </Grid> */}
    </main>
  )
}

// sx={{background:"teal"}}
