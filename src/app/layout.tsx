// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite – AI-Powered Marketing Tool",
  description:
    "Elevate your marketing strategy with ADmyBRAND AI Suite – automate campaigns, optimize performance, and grow your brand effortlessly.",
  keywords: [
    "AI marketing",
    "SaaS tool",
    "digital advertising",
    "automated campaigns",
    "branding software",
    "ADmyBRAND",
  ],
  robots: "index, follow",
  themeColor: "#0f172a",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0f172a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
