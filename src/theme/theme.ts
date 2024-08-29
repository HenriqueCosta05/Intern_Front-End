import { createTheme } from "@mui/material";
import { colorPallete } from "./color-pallete";

const theme = createTheme({
  palette: {
    primary: {
      main: colorPallete.darkBrown,
    },
    secondary: {
      main: colorPallete.darkOrange,
    },
    background: {
      default: colorPallete.lowOrange,
      paper: colorPallete.brown,
    },
    text: {
      primary: '#ffffff', 
      secondary: colorPallete.lowDarkBrown,
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 400,
    },
    button: {
      fontFamily: 'Inter, Arial, sans-serif',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
});

export default theme;
