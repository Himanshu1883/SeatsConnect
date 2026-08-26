import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { TopAccentBar } from "@/components/layout/TopAccentBar";
import { siteConfig } from "@/lib/constants/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const monaSans = localFont({
  src: "./fonts/MonaSansVF.woff2",
  variable: "--font-mona",
  display: "swap",
  weight: "200 900",
  declarations: [{ prop: "font-stretch", value: "75% 125%" }],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    type: "website",
    url: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${monaSans.variable}`}
    >
      <body>
        <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
          <TopAccentBar />
          <Navbar />
        </header>
        <main className="pt-[var(--site-header-height)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
