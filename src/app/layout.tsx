import type { Metadata } from "next";
import "./globals.css";
import { M_PLUS_Rounded_1c } from "next/font/google";
import Script from "next/script";

const MroundedPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  variable: "--font-rounded",
});

export const metadata: Metadata = {
  title: "Howard Codes",
  description: "A Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M54VP9RLPC"
        ></Script>
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M54VP9RLPC');`,
          }}
        ></Script>
      </head>
      <body className={`${MroundedPlus.variable} font-sans overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
