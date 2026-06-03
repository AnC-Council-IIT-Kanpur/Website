"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import Providers from "@/components/Providers";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        {/* GitHub ka naya secure Providers setup */}
        <Providers>
          <Lines />
          <Header />
          <Lines />
          
          {children}
          
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}