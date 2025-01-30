"use client";
import { useState } from "react";
import { Outfit } from "next/font/google";
import Sidebar from "@/_components/sidebar";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex`}>
        {/* Sidebar (Fixed on the left) */}
        <Sidebar />

        {/* Main Content (Right Side) */}
        <div className="ml-[80px] flex-1 p-6">  
          {children} {/* MusicApp will load here */}
        </div>
      </body>
    </html>
  );
}
