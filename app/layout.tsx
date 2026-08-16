import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nohemi = localFont({
  src: [
    {
      path: "../public/assets/fonts/Web-PS/Nohemi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Web-PS/Nohemi-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/assets/fonts/Web-PS/Nohemi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nohemi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Clueso — The agentic video creation platform",
  description:
    "Clueso automates video production for sales, marketing, product, and training teams. All your teams get all their videos with one AI platform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${nohemi.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
