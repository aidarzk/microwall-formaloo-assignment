import { ThemeOptions } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import { colorPalette } from "../colorPalette";

const theme = createTheme();

const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: colorPalette.primary,
      contrastText: colorPalette.white,
    },
    secondary: {
      main: colorPalette.secondary,
      contrastText: colorPalette.white,
    },
    error: {
      main: colorPalette.error,
    },
  },
  typography: {
    h1: {
      fontSize: "48px",
      fontWeight: 500,
      lineHeight: "80px",
      [theme.breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "40px",
      },
    },
    h2: {
      fontSize: "44px",
      lineHeight: "72px",
      fontWeight: 500,
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
        lineHeight: "40px",
      },
    },
    h3: {
      fontWeight: 400,
      fontSize: "40px",
      lineHeight: "64px",
      letterSpacing: "0%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "20px",
        fontWeight: 500,
        lineHeight: "32px",
      },
    },
    h4: {
      fontWeight: 400,
      fontSize: "32px",
      lineHeight: "56px",
      letterSpacing: "0.1%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
    h5: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "40px",
      letterSpacing: "0%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
    h6: {
      fontWeight: 500,
      fontSize: "18px",
      lineHeight: "32px",
      letterSpacing: "0.15%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: "24px",
      },
    },
    subtitle1: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        lineHeight: "16px",
      },
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "-0.5%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "10px",
        lineHeight: "16px",
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "14px",
        lineHeight: "24px",
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0%",
      [theme.breakpoints.down("sm")]: {
        fontSize: "12px",
        fontWeight: 500,
        lineHeight: "24px",
      },
    },
    button: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: "0%",
    },
    caption: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "-0.5%",
    },
    overline: {
      fontWeight: 400,
      fontSize: "10px",
      lineHeight: "16px",
      letterSpacing: "-0.5%",
    },
  },
});

export default lightTheme;
