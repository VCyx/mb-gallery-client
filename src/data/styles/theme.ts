"use client";

import { createTheme } from "@mui/material/styles";
import { bgColor, primaryColor, primaryText } from "./colors";

import { getOverridesComponent } from "./overridesComponent";
import { getTypography } from "./typography";

export const theme = createTheme({
  spacing: (x: number) => `${x * 8}px`,
  palette: {
    mode: "dark",
    primary: {
      main: primaryColor,
    },
    grey: {},
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
