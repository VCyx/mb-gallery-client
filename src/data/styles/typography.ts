import { TypographyOptions } from "@mui/material/styles/createTypography";
import { primaryText } from "@/data/styles/colors";

export const getTypography = (): TypographyOptions => {
  return {
    h1: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 48,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      color: primaryText,
    },
    h2: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 32,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      color: primaryText,
    },
    h3: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      color: primaryText,
    },
    subtitle1: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      color: primaryText,
    },
    subtitle2: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 18,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      color: primaryText,
    },
    body1: {
      fontFamily: "var(--font-roboto)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "140%",
      letterSpacing: "0.2px",
      color: primaryText,
    },
    body2: {
      fontFamily: "var(--font-roboto)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "140%",
      letterSpacing: "0.2px",
      color: primaryText,
    },
    button: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 16,
      lineHeight: "120%",
      letterSpacing: "0.1px",
      textTransform: "none",
    },
    button2: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "120%",
      letterSpacing: "0.1px",
    },
    caption: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "140%",
      letterSpacing: "0.2px",
      color: primaryText,
    },
    caption2: {
      fontFamily: "var(--font-palatino)",
      fontStyle: "italic",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "140%",
      letterSpacing: "0.2px",
      color: primaryText,
    },
    overline: {
      fontFamily: "var(--font-roboto)",
      fontStyle: "normal",
      fontWeight: 500,
      fontSize: 12,
      lineHeight: "140%",
      letterSpacing: 0,
      textTransform: "uppercase",
      color: primaryText,
    },
    overline2: {
      fontFamily: "var(--font-roboto)",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 10,
      lineHeight: "140%",
      letterSpacing: 0,
      color: primaryText,
    },
  } as TypographyOptions;
};
