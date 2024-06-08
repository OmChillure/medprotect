import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header"
import AI from "../components/AI";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "MedProtect",
    template: "%s | Medprotect",
  },
  description: "A onestop solution for healtcare problems",
  icons: [{ rel: "icon", url: "" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable}`}>
        <Header />
        {/* <SiteHeader /> */}
        {children}
        < AI />
      </body>
    </html>
  );
}
