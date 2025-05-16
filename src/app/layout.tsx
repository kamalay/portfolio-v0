import type { Metadata } from "next";
import React from "react";
import "../styles/globals.css";
import { poppins, caveat, crimsonPro, firaCode, firaSans } from "@/lib/fonts";
import NavBar from "@/components/sections/navBar";
import Footer from "@/components/sections/footer";

export const metadata: Metadata = {
  title: "Harshavardhan Kona",
  description: "Harshavardhan Kona's Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
          className={`${poppins.variable} ${caveat.variable} ${crimsonPro.variable} 
          ${firaCode.variable} ${firaSans.variable} antialiased`}>
      <body className="bg-bg-primary-dark text-text-primary-dark">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
