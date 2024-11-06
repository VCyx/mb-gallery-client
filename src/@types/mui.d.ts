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

  interface TypographyVariants {
    button1: React.CSSProperties;
    button2: React.CSSProperties;
    overline1: React.CSSProperties;
    overline2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    button1?: React.CSSProperties;
    button2?: React.CSSProperties;
    overline1?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button1: true;
    button2: true;
    overline1: true;
    overline2: true;
  }
}
