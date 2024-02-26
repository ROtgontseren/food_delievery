"use client";

import { useState,useContext, useEffect } from "react";

import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import {Button, Box} from "@mui/material";
import Iconify from "@/components/iconify"
import FoodCard from "./food-card";
import FoodSort from "./food-sort";
import { foodContext } from "@/context/foodProvider";
import FoodModal from "@/components/foodModal";
// import { redirect } from "next/navigation";


// ----------------------------------------------------------------------

export default function FoodView() {
  const [open, setOpen] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const { getFoods ,foods} = useContext(foodContext);
  useEffect(() => {
    getFoods()
  }, []);
 
  const handleOpen = () => {
    setOpen(true);
  };
  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Container>
      <Box sx={{display: "flex" , justifyContent: "space-between"}}>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Хоолны жагсаалт
      </Typography>
      <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
          onClick={() => {
            setOpenFilter(true)
          }}
        >
          Шинэ хоол
        </Button>
      </Box> 
      <Stack
        direction="row"
        alignItems="center"
        flexWrap="wrap-reverse"
        justifyContent="flex-end"
        sx={{ mb: 2 }}
      >
        <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
          {/* <ProductFilters
            openFilter={openFilter}
            onOpenFilter={handleOpenFilter}
            onCloseFilter={handleCloseFilter}
          /> */}
          <FoodSort />
        </Stack>
      </Stack>

      <Grid container spacing={3}>
        {foods?.map((food: any) => (
          <Grid key={food.id} xs={12} sm={6} md={3}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>
      <FoodModal
        openFilter={openFilter}
        handleCloseFilter={handleCloseFilter}
      />
      {/* <ProductCartWidget /> */}
    </Container>
  );
}
