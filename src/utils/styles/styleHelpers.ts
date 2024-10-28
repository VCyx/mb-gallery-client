import { CSSProperties } from "react";

export const fullHeightSection: CSSProperties = {
  width: "100%",
  maxWidth: "100vw",
  minHeight: "100vh",
  flex: "1 0 auto",

  display: "flex",
  flexDirection: "column",
};

export const fullHeightFlex: CSSProperties = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
};

const screen2k = "@media screen and (min-width: 2560px)";
const screen4k = "@media screen and (min-width: 3840px)";

export const contentZoom = {
  [screen2k]: {
    zoom: 1.5,
  },
  [screen4k]: {
    zoom: 2,
  },
};

export const hideScrollbar = {
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  ["&::-webkit-scrollbar"]: {
    display: "none",
  },
};
