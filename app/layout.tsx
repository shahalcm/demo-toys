import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site-config";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "ToyWorld Wholesale | Toys for Every Shelf",
  description:
    "Explore a wide variety of wholesale toys, from small pocket toys to big play essentials. Contact us for product enquiries and wholesale pricing.",
  keywords: [
    "wholesale toys",
    "bulk toy supplier",
    "toy distributor",
    "retail toy supplier",
    "pocket toys",
    "educational toys wholesale",
    "ride-on toys bulk",
  ],
  authors: [{ name: "ToyWorld Wholesale" }],
  openGraph: {
    title: "ToyWorld Wholesale | Toys for Every Shelf",
    description:
      "Explore a wide variety of wholesale toys, from small pocket toys to big play essentials. Contact us for product enquiries and wholesale pricing.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "/images/hero-toys.jpg",
        width: 1200,
        height: 630,
        alt: "ToyWorld Wholesale Toy Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToyWorld Wholesale | Toys for Every Shelf",
    description:
      "Explore a wide variety of wholesale toys, from small pocket toys to big play essentials. Contact us for product enquiries and wholesale pricing.",
    images: ["/images/hero-toys.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#635BFF",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#20202A] font-sans antialiased selection:bg-[#635BFF]/20 selection:text-[#635BFF]">
        {children}
      </body>
    </html>
  );
}
