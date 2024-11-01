"use client";

import { createTheme } from "@mui/material/styles";
import {
  bgColor,
  borderColor,
  grey,
  grey2,
  primaryColor,
  primaryText,
} from "./colors";

import { getOverridesComponent } from "./overridesComponent";
import { getTypography } from "./typography";

export const theme = createTheme({
  spacing: (x: number) => `${x * 8}px`,
  palette: {
    mode: "dark",
    primary: {
      main: primaryColor,
    },
    grey: {
      500: borderColor,
      600: grey,
      700: grey2,
    },
    text: {
      primary: primaryText,
    },
    background: {
      default: bgColor,
    },
  },
  components: getOverridesComponent(),
  typography: getTypography(),
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      ultra: 3840,
    },
  },
  cssVariables: true,
});
