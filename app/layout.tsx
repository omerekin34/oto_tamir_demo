import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

const display = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "OtoUsta | 7/24 Oto Tamir ve Yol Yardım",
  description:
    "7/24 acil yol yardım, garantili motor ve mekanik bakım. Çekici, periyodik bakım ve kaporta için OtoUsta.",
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${inter.variable} ${display.variable} h-full antialiased`}>
      <body className="min-h-full bg-zinc-950 font-sans text-zinc-300">{children}</body>
    </html>
  );
}
