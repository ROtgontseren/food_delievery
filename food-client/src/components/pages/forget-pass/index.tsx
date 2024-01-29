"use client";

import { ChangeEvent, useState } from "react";
import { Container, Stack } from "@mui/material";
import axios from "axios";
import { toast } from "react-toastify";

import StepOne from "./stepOne";
import StepTwo from "./stepTwo";
import StepThree from "./stepthree";

const MyStepper = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [user, setUser] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const handleNext = async () => {
    console.log("Email", user.email)
    try {
      const data = await axios.post("http://localhost:8080/verify/send-email", {
        email: user.email,
      });
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      toast.error("Email илгэээхэд алдаа гарлаа.");
    }
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("handle", e.target.name)
  };
 
  return (
    <Container>
      {activeStep === 1 && (
        <StepOne
          email={user.email}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 2 && (
        <StepTwo
          email={user.email}
          otp={user.otp}
          handleNext={handleNext}
          handleChangeInput={handleChangeInput}
        />
      )}
      {activeStep === 3 && <StepThree />}
    </Container>
  );
};

export default MyStepper;
