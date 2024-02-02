"use client";

import { Button} from "@/components/core/button";
import {Input} from "@/components/core/input"
import { UserContext } from "@/context/Userprovider";
import { Box, Container, Stack, Typography,Link} from "@mui/material";
import React, { useContext } from "react";
import * as yup from "yup";
import { useFormik } from "formik";

const validationSchema = yup.object({
      email: yup.string()
      .max(100, "Имэйл хаяг 100 тэмдэгтээс хэтрэхгүй байна")
      .required("Имэйл хаягыг заавал бөглөнө үү")
      .email("")
      .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/),
      password: yup.string()
      .required("нууц үгээ заавал бөглөнө үү")
      .min(6, "нууц үг хамгийн багадаа 6 тэмдэгт байна")
    })

const LoginPage = () => {
  const {user} = useContext(UserContext);
  
  const formik = useFormik({
    onSubmit: ({email,password}) => {
      console.log("email",email),
      console.log("password",password)},
    initialValues: {email: user.email, password: user.password},
    validateOnChange:false,
    validateOnBlur:false,
    validationSchema,
  });

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
          <Input 
               errorText={formik.errors.email}      
               label="Имэйл" 
               name="email" 
               value={formik.values.email}
               onChange={formik.handleChange}
               />
          <Input 
               label="Нууц үг" 
               showPassword 
               name="password"
               value={formik.values.password as string}
               onChange={formik.handleChange}
               errorText={formik.errors.password}
               />
          <Link href={"./forget"}><Typography variant="button" align="right" color={"black"} sx={{display: "flex", justifyContent:"end"}}>
            Нууц үг сэргээх
          </Typography></Link>
        </Stack>

        <Stack flex="row" width="100%" justifyContent="flex-end">
          <Button label="Нэвтрэх" onClick={formik.handleSubmit} />
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