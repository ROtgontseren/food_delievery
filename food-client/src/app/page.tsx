import {Grid, Button, Typography, collapseClasses,} from "@mui/material";
import Delievery from "@/components/delievery";
import HomePage from "@/components/home";
import Salemenu from "@/components/menu/salemenu";
import Mainmenu from "@/components/menu/mainmenu";
import Saladmenu from "@/components/menu/saladmenu";
import Desertmenu from "@/components/menu/desertmenu";


export default function Home() {

  return (
    <main>
        <HomePage/>
        <Delievery/>
        <Salemenu/>
        <Mainmenu/>
        <Saladmenu/>
        <Desertmenu/>
    </main>
  )
}

