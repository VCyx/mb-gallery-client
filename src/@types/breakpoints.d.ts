import { Components } from "@mui/material";

declare module "@mui/material/styles" {
  interface Theme {
    components?: Components;
  }

  interface ThemeOptions {
    components?: Components;
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    ultra: true;
  }
}
