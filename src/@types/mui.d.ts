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
    button2: React.CSSProperties;
    caption2: React.CSSProperties;
    overline2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    button2?: React.CSSProperties;
    caption2?: React.CSSProperties;
    overline2?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    button2: true;
    caption2: true;
    overline2: true;
  }
}
