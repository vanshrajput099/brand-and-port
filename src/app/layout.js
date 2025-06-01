import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner"
import CustomCursor from "@/components/CustomCursor";
import Logo from "./components/Logo";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Brand And Port",
  description: "A Canada-based agency helping brands source globally, build strong identities, and go to market with impact.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <Header />
        <Toaster />
        <Logo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
