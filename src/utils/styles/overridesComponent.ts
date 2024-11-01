import { roboto, robotoBold } from "./fonts";
import { Components } from "@mui/material/styles";
import { bgColor, borderColor, primaryColor, secondaryText } from "./colors";
import { Theme } from "@mui/material/styles/createThemeNoVars";
import { CssVarsTheme } from "@mui/material/styles/createThemeWithVars";

// ${palatino}

export const getOverridesComponent = (): Components<
  Omit<Theme, "components" | "palette"> & CssVarsTheme
> => {
  return {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          height: 100%;
          scroll-behavior: smooth;
          font-size: 16px;
        }

        body {
          box-sizing: border-box;
          height: 100%;
          margin: 0;
          padding: 0;
          display: flex;
          overflow-x: hidden;
        }
        #__next {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        ${roboto}
        ${robotoBold}
        a {
          color: currentColor;
          text-decoration: none;
        },
        p, span {
          color: currentColor;
          margin: 0;
          padding: 0;
        },
        ::-moz-selection {
          color: ${bgColor};
          background-color: ${primaryColor};
        },
        ::selection {
          color: ${bgColor};
          background-color: ${primaryColor};
        },
        ::-webkit-scrollbar {
          width: 10px;
        },
        ::-webkit-scrollbar-thumb {
          background: ${borderColor};
          border-radius: 10px;
        },
      `,
    },
    MuiLink: {
      styleOverrides: {
        root: {
          // fontFamily: fontSourceSansPro,
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "18px",
          cursor: "pointer",
          textDecoration: "none",
          ...secondaryText,
        },
      },
    },
  };
};
