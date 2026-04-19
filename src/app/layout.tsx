import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Joe John - Portfolio",
    template: "%s | Joe John Portfolio",
  },
  description:
    "Frontend Developer & UI/UX Enthusiast specializing in Next.js, React, TypeScript, and modern web development. View my projects and get in touch.",
  keywords: [
    "frontend developer",
    "react developer",
    "typescript",
    "next.js",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "Joe John" }],
  creator: "Joe John",
  generator: "Next.js",
  metadataBase: new URL("https://mydomain.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourdomain.com",
    siteName: "Joe John Portfolio",
    title: "Joe John - Portfolio",
    description:
      "Frontend Developer & UI/UX Enthusiast specializing in Next.js, React, TypeScript, and modern web development.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Joe John Portfolio",
      },
    ],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
