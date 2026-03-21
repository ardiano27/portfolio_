import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

// ── Font Loading via next/font (zero layout shift, self-hosted) ────────────
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

// ── SEO Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Revi Ardiano — Portfolio",
  description:
    "Full Stack Developer & Graphic Designer crafting robust digital solutions and compelling visual stories.",
  openGraph: {
    title: "Revi Ardiano — Portfolio",
    description: "Full Stack Developer & Graphic Designer",
    type: "website",
  },
  icons: {
    icon: "/assets/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}