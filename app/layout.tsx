import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Devnfix | Web Development, Digital Services & SaaS Solutions",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  icons: { icon: "/brand/devnfix-mark.jpg", apple: "/brand/devnfix-mark.jpg" },
  openGraph: {
    title: "Devnfix | Digital Solutions Built for Growth",
    description: siteConfig.description,
    url: "/",
    siteName: "Devnfix",
    images: [{ url: "/brand/devnfix-og.jpg", width: 1200, height: 630, alt: "Devnfix" }],
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Devnfix | Digital Solutions Built for Growth", description: siteConfig.description, images: ["/brand/devnfix-og.jpg"] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#ffffff" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
