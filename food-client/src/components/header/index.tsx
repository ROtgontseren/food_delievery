"use client";
import React from "react";
import { Button } from "@mui/material";
import { Palette } from "@mui/material";

const Header = () => { 
  
  return (
    <nav style={{ display: "flex", maxWidth: "100%", marginTop: 25, justifyContent: "space-between" }}>
      <div style={{ display: "flex", marginLeft: "200px" }}>
        <svg
          width="41"
          height="41"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.85906 9.53921L5.65393 17.41C5.12916 18.3951 4.86621 19.4762 4.86621 20.5587C4.86621 21.6414 5.12916 22.7224 5.65393 23.7074L9.85906 31.5784C10.6341 33.0322 12.1499 33.9402 13.7995 33.9402H18.2661V31.7105H18.2646C17.4406 31.7105 16.6827 31.2572 16.2951 30.5304L12.0916 22.6579C11.7403 22.0017 11.5652 21.281 11.5652 20.5587C11.5652 19.8364 11.7403 19.1158 12.0916 18.4597L16.2951 10.5873C16.6827 9.86028 17.4406 9.40709 18.2646 9.40709H18.2661V7.17725H13.7995C12.1499 7.17725 10.6341 8.08541 9.85906 9.53921Z"
            fill="black"
          />
          <path
            d="M35.3426 17.4101L31.1376 9.53927C30.3624 8.0853 28.8467 7.1773 27.1972 7.1773H22.7304V9.40698H22.732C23.5561 9.40698 24.314 9.86034 24.7014 10.5872L28.9049 18.4596C29.2564 19.1158 29.4312 19.8365 29.4312 20.5588C29.4312 21.2811 29.2564 22.0017 28.9049 22.658L24.7014 30.5303C24.314 31.2572 23.5561 31.7104 22.732 31.7104H22.7304V33.9403H27.1972C28.8467 33.9403 30.3624 33.0323 31.1376 31.5783L35.3426 23.7075C35.8672 22.7224 36.1303 21.6413 36.1303 20.5588C36.1303 19.4763 35.8672 18.3952 35.3426 17.4101Z"
            fill="black"
          />
        </svg>

        <Button variant="text" color="secondary">Нүүр</Button>

        <Button variant="text" color="secondary">Хоолны цэс</Button>

        <Button variant="text" color="secondary">Хүргэлтийн бүс</Button>
      </div>

      <div style={{ display: "flex" ,marginRight:"200px"}}>
        <input type="text" placeholder="Хайх" />

        <Button variant="text" color="secondary">Сагс</Button>

        <Button variant="text" color="secondary">Нэвтрэх</Button>
      </div>
    </nav>
  );
};

export default Header;