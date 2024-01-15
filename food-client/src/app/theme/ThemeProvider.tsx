"use client"
import React, {PropsWithChildren} from 'react';
import {ThemeProvider as MiuThemeProvider} from "@mui/material"
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import {theme} from "./theme";
import CssBaseline from '@mui/material/CssBaseline';

export const ThemeProvider = ({children}:PropsWithChildren) => {
  return (
    <AppRouterCacheProvider>
        <MiuThemeProvider theme={theme}>
            <CssBaseline>
            {children}
            </CssBaseline>
        </MiuThemeProvider>
    </AppRouterCacheProvider>
  )
}

