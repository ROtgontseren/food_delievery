"use client"
import { Container,Box, Typography, Stack } from '@mui/material';
import React from 'react';
import {Input} from "@/components/core/input";
import {Button} from "@/components/core/button";


const Signup = () => {
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
            <Input label="Нэр" />
            <Input label="И-мэйл" />
            <Input label="Хаяг" />
            <Input label="Нууц үг" showPassword />
            <Input label="Нууц үг давтах" showPassword />
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
          <Button label="Бүртгүүлэх" btnType='outlined'/>
        </Stack>
        
      </Box>
   </Container>
  )
}

export default Signup;