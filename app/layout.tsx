import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["italic", "normal"],
  fallback: ["Helvetica Neue", "sans-serif"],
  subsets: ["latin-ext", "latin"],
});

export const metadata: Metadata = {
  title: "Desa Wisata Botolempangan",
  description: "Desa Wisata Botolempangan Website Made By KKN Unhas",
  icons: {
    icon: "/images/Logo_Maros.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
