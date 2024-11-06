import { Components } from "@mui/material/styles";
import { black1, grey300, primaryColor, primaryText } from "./colors";
import { Theme } from "@mui/material/styles/createThemeNoVars";
import { CssVarsTheme } from "@mui/material/styles/createThemeWithVars";

export const getOverridesComponent = (): Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          height: "100%",
          scrollBehavior: "smooth",
          fontSize: "16px",
        },
        body: {
          boxSizing: "border-box",
          width: "100%",
          height: "100%",
          margin: 0,
          padding: 0,
          overflowX: "hidden",
        },
        a: {
          color: "currentColor",
          textDecoration: "none",
        },
        p: {
          color: "currentColor",
          margin: 0,
          padding: 0,
        },
        span: {
          color: "currentColor",
          margin: 0,
          padding: 0,
        },
        "::-moz-selection": {
          color: black1,
          backgroundColor: primaryColor,
        },
        "::selection": {
          color: black1,
          backgroundColor: primaryColor,
        },
        "::-webkit-scrollbar": {
          width: "10px",
        },
        "::-webkit-scrollbar-thumb": {
          // background: borderColor,
          borderRadius: "8px",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 3.5,
        },
        sizeSmall: {
          height: 40,
        },
        sizeMedium: {
          height: 48,
        },
        sizeLarge: {
          height: 56,
        },

        contained: {
          ":hover": {
            color: primaryColor,
            backgroundColor: black1,
            border: `0.5px solid ${primaryColor}`,
          },
          ":active": {
            opacity: 0.8,
            backgroundColor: grey300,
          },
          ":disabled": {
            backgroundColor: grey300,
          },
        },

        outlined: {
          color: primaryText,
          border: `0.5px solid ${primaryText}`,

          ":hover": {
            color: black1,
            backgroundColor: primaryColor,
            border: `0.5px solid ${primaryColor}`,
          },
          ":active": {
            filter: "brightness(0.65)",
          },
          ":disabled": {
            borderWidth: 0.5,
            backgroundColor: "transparent",
          },
        },
      },
    },
    // MuiLink: {
    //   styleOverrides: {
    //     root: {
    //       // fontFamily: fontSourceSansPro,
    //       fontStyle: "italic",
    //       fontWeight: 400,
    //       fontSize: 14,
    //       lineHeight: "18px",
    //       cursor: "pointer",
    //       textDecoration: "none",
    //     },
    //   },
    // },
  };
};
