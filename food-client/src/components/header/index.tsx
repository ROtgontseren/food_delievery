"use client";
import { Button } from "@mui/material";
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";
import BasketDrawer from "../basketDrawer";



const Header = () => { 
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
 
  
  return (
    <Box style={{ display: "flex", maxWidth: "100%", marginTop: 25, justifyContent: "space-between" }}>
      <Box style={{ display: "flex", marginLeft: "200px" }}>
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

        <Link href={"./"}><Button variant="text" color="secondary">Нүүр</Button></Link>

        <Link href={"./menu"}><Button variant="text" color="secondary">Хоолны цэс</Button></Link>

        <Button variant="text" color="secondary">Хүргэлтийн бүс</Button>
      </Box>

      <Box sx={{display:"flex", alignItems:"center",marginRight: "200px"}}>
          <Search sx={{border:"2px",borderColor:"black"}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>       

        <Box sx={{display:"flex", alignItems:"center"}}>
            <BasketDrawer/>  
        </Box>
        <Box sx={{display:"flex", alignItems:"center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
               <path d="M8.99978 2.54145C10.1838 2.54145 11.1526 3.5102 11.1526 4.69423C11.1526 5.87825 10.1838 6.847 8.99978 6.847C7.81575 6.847 6.847 5.87825 6.847 4.69423C6.847 3.5102 7.81575 2.54145 8.99978 2.54145ZM8.99978 12.2289C11.906 12.2289 15.2428 13.6175 15.4581 14.3817V15.4581H2.54145V14.3925C2.75673 13.6175 6.09353 12.2289 8.99978 12.2289ZM8.99978 0.388672C6.62096 0.388672 4.69423 2.31541 4.69423 4.69423C4.69423 7.07305 6.62096 8.99978 8.99978 8.99978C11.3786 8.99978 13.3053 7.07305 13.3053 4.69423C13.3053 2.31541 11.3786 0.388672 8.99978 0.388672ZM8.99978 10.0762C6.12582 10.0762 0.388672 11.5185 0.388672 14.3817V17.6109H17.6109V14.3817C17.6109 11.5185 11.8737 10.0762 8.99978 10.0762Z" fill="black"/>
            </svg>
            <Link href={"/login"}><Button variant="text" color="secondary">Нэвтрэх</Button></Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;

