"use client"
import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { Input } from '@/components/core/input';
import { Button } from '@/components/core/button'

const first = () => {
  return (
    <Box sx={{display: "flex", justifyContent:"center", alignItems: "center", height: "100%",marginTop: "180px"}}>
      <Box sx={{
        width: "25%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto",
        height: "100%"
      }}>
        <Typography sx={{fontSize:"28px", fontWeight:"700", margin: "auto"}}>Шинэ нууц үг зохиох </Typography>
         <Input label='Нууц үг' showPassword/>
         <Input label='Нууц үг давтах' showPassword/>
         <Button label='Үргэлжлүүлэх' btnType='contained'/>
      </Box>
    </Box>
  )
}

export default first;