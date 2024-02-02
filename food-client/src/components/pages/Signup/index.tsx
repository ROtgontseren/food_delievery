"use client"
import { Container,Box, Typography, Stack } from '@mui/material';
import React, { useContext } from "react";
import {Input} from "@/components/core/input";
import {Button} from "@/components/core/button";
import * as yup from "yup";
import { useFormik } from "formik";
import { UserContext } from "@/context/Userprovider";


const validationSchema = yup.object({
  name: yup.string()
  .max(100)
  .required("Нэрээ заавал бичнэ үү"),
  email: yup.string()
  .max(100, "Имэйл хаяг 100 тэмдэгтээс хэтрэхгүй байна")
  .required("Имэйл хаягыг заавал бөглөнө үү")
  .email("")
  .matches(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@gmail[A-Za-z0-9.-]+$/),
  address: yup.string()
  .required("заавал хаягаа оруулна уу"),
  password: yup.string()
  .required("нууц үгээ заавал бөглөнө үү")
  .min(6, "нууц үг хамгийн багадаа 6 тэмдэгт байна"),
  rePassword : yup.string()
  .oneOf([yup.ref("password")], "Нууц үг хоорондоо таарахгүй байна")
  .required("нууц үгээ заавал бөглөнө үү")
  .min(6, "нууц үг хамгийн багадаа 6 тэмдэгт байна"),
})

const Signup = () => {
  const {user} = useContext(UserContext);
  
  const formik = useFormik({
    onSubmit: ({email,password}) => {
      console.log("email",email),
      console.log("password",password)},
    initialValues: {email: user.email, password: user.password , name: user.name, address: user.address, rePassword: user.rePassword},
    validateOnChange:false,
    validateOnBlur:false,
    validationSchema,
  });
  return (
   <Container>
      <Box sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"

      }}>
        <Typography sx={{
          fontSize: "28px",
          fontWeight: "700"
        }}>
          Бүртгүүлэх
        </Typography>
        <Stack>
            <Input label="Нэр"
                name="name" 
                value={formik.values.name} 
                onChange={formik.handleChange} 
                errorText={formik.errors.name}
            />
            <Input label="И-мэйл" 
                name="email"
                value={formik.values.email} 
                onChange={formik.handleChange} 
                errorText={formik.errors.email}/>
            <Input label="Хаяг" 
                name="address"
                value={formik.values.address} 
                onChange={formik.handleChange} 
                errorText={formik.errors.address}/>
            <Input label="Нууц үг" showPassword 
                name="password"
                value={formik.values.password as string} 
                onChange={formik.handleChange} 
                errorText={formik.errors.password}/>
            <Input label="Нууц үг давтах" showPassword 
                name="rePassword"
                value={formik.values.rePassword as string} 
                onChange={formik.handleChange} 
                errorText={formik.errors.rePassword}/>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
               <img src="Checkbox.png"/>
               <Typography>Үйлчилгээний нөхцөл зөвшөөрөх</Typography>
            </Box>
        </Stack>
        <Stack flex="row" width="28%" justifyContent="flex-end" >
          <Button label="Бүртгүүлэх" btnType='outlined' onClick={formik.handleSubmit}/>
        </Stack>
        
      </Box>
   </Container>
  )
}

export default Signup;