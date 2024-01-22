"use client";

import { Button} from "@/components/core/button";
import {Input} from "@/components/core/input"

import { Box, Container, Stack, Typography,Link} from "@mui/material";

import React from "react";

const LoginPage = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto ",
          px: "2.1rem",
          maxWidth: "450px",
          height: "calc(100vh - 90px)",
        }}
      >
        <Typography
          align="center"
          gutterBottom
          sx={{ fontSize: "28px", fontWeight: "700" }}
        >
          Нэвтрэх
        </Typography>
        <Stack width="100%" sx={{ mb: "2rem" }}>
          <Input label="Имэйл" />
          <Input label="Нууц үг" showPassword />
          {/* <Button label="Нууц үг сэргээх" btnType="text" /> */}
          <Link href={"./forget"}><Typography variant="button" align="right" color={"black"} sx={{display: "flex", justifyContent:"end"}}>
            Нууц үг сэргээх
          </Typography></Link>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" />
        </Stack>
        <Stack sx={{ my: "2rem" }}>
          <Typography>Эсвэл</Typography>
        </Stack>
        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Link href={"./signup"}><Button label="Бүртгүүлэх" btnType="outlined" /></Link>
        </Stack>
      </Box>
    </Container>
  );
};

export default LoginPage;