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
  title: "Howard Codes | Full-Stack Developer & DevOps Engineer in Maryland DMV",
  description: "Seasoned full-stack developer based in the Maryland, Baltimore, Washington DC area specializing in cloud infrastructure, DevOps practices, and scalable web applications. Building solutions with Next.js, React, Python, and AWS.",
  keywords: [
    "full-stack developer DMV",
    "DevOps engineer Washington DC",
    "cloud engineer DMV",
    "web developer Baltimore",
    "Next.js developer",
    "React developer DMV",
    "Python developer",
    "AWS certified developer",
    "freelance web developer DMV",
    "software engineer Washington DC"
  ],
  authors: [{ name: "Howard" }],
  creator: "Howard",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://howard.codes",
    siteName: "Howard Codes",
    title: "Howard Codes | Full-Stack Developer & DevOps Engineer",
    description: "Seasoned full-stack developer in the DMV area specializing in cloud infrastructure, DevOps, and scalable web applications. From New Orleans, building solutions that last.",
    images: [
      {
        url: "https://howard.codes/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "Howard Codes - Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Howard Codes | Full-Stack Developer & DevOps Engineer",
    description: "Full-stack developer specializing in cloud infrastructure and DevOps practices. Building scalable solutions in the DMV area.",
    images: ["https://howard.codes/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://howard.codes",
  },
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
