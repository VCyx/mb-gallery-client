import { Components } from "@mui/material/styles";
import { black1, grey1, grey2, primaryColor, primaryText } from "./colors";
import { Theme } from "@mui/material/styles/createThemeNoVars";
import { CssVarsTheme } from "@mui/material/styles/createThemeWithVars";
import { getTypography } from "@/data/styles/typography";
import DoneIcon from "../../../public/icons/done.svg";
import ArrowDown from "../../../public/icons/arrow-down.svg";
import Cross from "../../../public/icons/cross.svg";

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
    MuiCheckbox: {
      defaultProps: {
        disableRipple: true,
        checkedIcon: <DoneIcon style={{ color: primaryColor }} />,
      },
      styleOverrides: {
        root: {
          padding: 0,
          borderRadius: 2,

          "& .MuiSvgIcon-root": {
            fill: "none",
          },
          "&.Mui-checked": {
            color: grey1,
            border: `0.5px solid ${primaryColor}`,
          },
        },
        sizeSmall: {
          width: 16,
          height: 16,
        },
        colorPrimary: {
          color: primaryText,
          border: `0.5px solid ${primaryText}`,
        },
        colorSecondary: {
          color: black1,
          border: `0.5px solid ${black1}`,
        },
      },
    },
    MuiSwitch: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          width: 50,
          height: 24,
          padding: 0,

          ":hover": {
            "& .MuiSwitch-track": {
              borderColor: primaryColor,
            },
            "& .MuiSwitch-switchBase": {
              "&.Mui-checked": {
                "& + .MuiSwitch-track": {
                  backgroundColor: grey1,
                },

                "& .MuiSwitch-thumb": {
                  border: `0.5px solid ${primaryColor}`,
                },
              },
            },
          },

          "& .MuiSwitch-track": {
            border: `0.5px solid ${black1}`,
            borderRadius: 35,
            backgroundColor: grey1,
            opacity: 1,
            transition: {
              duration: 500,
            },
          },

          "& .MuiSwitch-switchBase": {
            padding: 0,
            margin: 2,
            transitionDuration: "300ms",
            "&.Mui-checked": {
              transform: `translateX(${50 - 24}px)`,
              "& + .MuiSwitch-track": {
                backgroundColor: primaryColor,
                opacity: 1,
                border: 0,
              },
              // "&.Mui-disabled + .MuiSwitch-track": {
              //   opacity: 0.5,
              // },
            },
            // "&.Mui-focusVisible .MuiSwitch-thumb": {
            //   color: "primaryColor",
            //   border: "6px solid #fff",
            // },
            // "&.Mui-disabled .MuiSwitch-thumb": {
            //   color: black1,
            // },
            // "&.Mui-disabled + .MuiSwitch-track": {
            //   opacity: 0.7,
            // },
          },
          "& .MuiSwitch-thumb": {
            boxSizing: "border-box",
            width: 20,
            height: 20,
            color: black1,
            border: `0.5px solid ${grey2}`,
          },
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <ArrowDown style={{ width: 24, height: 24 }} />,
        clearIcon: <Cross style={{ width: 24, height: 24 }} />,
      },
      styleOverrides: {
        root: {
          // color: primaryText,
          backgroundColor: black1,
          ...typography.button,

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 4,
            borderSize: 0.5,
            borderColor: primaryText,
          },

          "& .MuiOutlinedInput-root": {
            padding: "10.5px 16px",
          },

          "& .MuiFormLabel-root:not(.Mui-focused)": {
            // paddingLeft: 4,
            ...typography.button,
            opacity: "66%",
            overflow: "visible",

            "&.MuiFormLabel-filled": {
              fontSize: 15,
            },
          },

          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            ...typography.button,
          },
        },
      },
    },
  };
};
