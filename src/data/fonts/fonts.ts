import { Roboto } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const palatino = localFont({
  src: [
    {
      path: "./Palatino/pala.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Palatino/palai.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Palatino/palab.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Palatino/palabi.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-palatino",
});
