"use client";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";

import Iconify from "@/components/iconify";

import CategoryCard from "./category-card";
import CategorySort from "./category-sort";
import CategorySearch from "./category-search";

// ----------------------------------------------------------------------
import { faker } from "@faker-js/faker";

// ----------------------------------------------------------------------

const CATEGORY_TITLES = [
  "Whiteboard Templates",
  "Tesla Cybertruck-inspired",
  "Designify Agency",
  "✨What is Done is Done ✨",
  "Fresh Prince",
  "Six Socks Studio",
  "vincenzo de cotiis",
];

export const categories = [...Array(CATEGORY_TITLES.length)].map(
  (_, index) => ({
    id: faker.string.uuid(),
    cover: `/assets/images/covers/cover_${index + 1}.jpg`,
    title: CATEGORY_TITLES[index + 1],
    createdAt: faker.date.past(),
  })
);

// ----------------------------------------------------------------------

export default function CategoryView() {
  return (
    <Container>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={5}
      >
        <Typography variant="h4">Ангилалын жагсаалт</Typography>

        <Button
          variant="contained"
          color="inherit"
          startIcon={<Iconify icon="eva:plus-fill" />}
        >
          Шинэ ангилал
        </Button>
      </Stack>

      <Stack
        mb={5}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <CategorySearch categories={categories} />
        <CategorySort
          options={[
            { value: "latest", label: "Cүүлийнх" },
            { value: "popular", label: "Түгээмэл" },
            { value: "oldest", label: "Өмнөх" },
          ]}
        />
      </Stack>

      <Grid container spacing={3}>
        {categories.map((categories: any) => (
          <CategoryCard key={categories.id} categories={categories} />
        ))}
      </Grid>
    </Container>
  );
}
