"use client";

import { createTheme } from "@mui/material/styles";
import {
  grey1,
  black1,
  black2,
  primaryColor,
  primaryText,
  grey2,
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
    secondary: {
      main: primaryText,
    },
    grey: {
      "200": grey2,
      "300": grey1,
      "400": black1,
    },
    text: {
      primary: primaryText,
    },
    background: {
      default: black2,
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
