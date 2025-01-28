import { Outfit } from "next/font/google";
import Sidebar from "@/_components/sidebar"
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={outfit.className}>
          <Sidebar />
        {children}
      </body>
    </html>
  );
}
