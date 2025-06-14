import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import CustomCursor from "@/components/CustomCursor";
import Logo from "./components/Logo";
import Script from "next/script";
import Analytics from "./components/Analytics";

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
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/icon1.png" },
    { rel: "icon", url: "/icon1.png", type: "image/png" }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T1P1MVB8H9"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T1P1MVB8H9');
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-outfit antialiased text-white overflow-x-hidden`}
      >
        <CustomCursor />
        <Header />
        <Toaster />
        <Logo />
        <Analytics />
        {children}
        <Footer />
      </body>
    </html>
  );
}
