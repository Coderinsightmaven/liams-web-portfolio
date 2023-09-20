import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

const playfair_Display = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liam's Portfolio",
  description: "Created using NextJS 13.5.2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair_Display.className + " text-white"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
