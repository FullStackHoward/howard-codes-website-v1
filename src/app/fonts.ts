import localFont from "next/font/local";

export const mrounded = localFont({
  src: [
    {
      path: "../../public/fonts/M_PLUS_Rounded_1c-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/M_PLUS_Rounded_1c-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-rounded",
  display: "swap",
});
