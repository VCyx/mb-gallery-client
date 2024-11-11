import { Components } from "@mui/material/styles";
import { black1, grey1, grey2, primaryColor, primaryText } from "./colors";
import { Theme } from "@mui/material/styles/createThemeNoVars";
import { CssVarsTheme } from "@mui/material/styles/createThemeWithVars";
import { getTypography } from "@/data/styles/typography";

export const getOverridesComponent = (): Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> => {
  const typography = getTypography();

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
            backgroundColor: grey1,
          },
          ":disabled": {
            backgroundColor: grey1,
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
    MuiChip: {
      styleOverrides: {
        outlined: {
          color: primaryText,
          ...typography.caption,
          border: `0.5px solid ${primaryText}`,
          borderRadius: 16,
          ":hover": {
            backgroundColor: grey2,
          },
        },
        icon: {
          width: 16,
          height: 16,
        },
        deleteIcon: {
          width: 16,
          height: 16,
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
