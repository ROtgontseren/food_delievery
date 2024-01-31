import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        danger: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        danger?: string;
      };
    }
  }
  
export const theme = createTheme({
    spacing:4,
    palette: {
        mode: "light",
        secondary: {
            main: "#00000"
        },   
        primary:{
          main: "#ffffff"
        },
        error : {
          main: "#C0392B"
        }
    }
});