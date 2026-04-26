import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The HQ Consulting | Property Advisory in Madinah",
  description: "Independent, expert-led guidance for optimal property investment in the blessed city of Madinah. Discover flagship opportunities in Knowledge Economic City (KEC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${plusJakarta.variable} ${dmSans.variable} font-body antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}