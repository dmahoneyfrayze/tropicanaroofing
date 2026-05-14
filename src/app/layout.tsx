import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Toronto's Trusted Roofing Experts`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Toronto's most trusted roofing company since 2004. Asphalt shingles, metal, and flat-roof specialists. Honest quotes, premium materials, lifetime workmanship warranty.",
  keywords: [
    "Toronto roofing",
    "roof replacement Toronto",
    "roofing company Toronto",
    "asphalt shingles Toronto",
    "flat roof Toronto",
    "emergency roof repair Toronto",
    "Scarborough roofing",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="font-body text-charcoal bg-white antialiased">
        <Nav />
        <main className="pb-16 md:pb-0">{children}</main>
        <Footer />
        <MobileBar />
      </body>
    </html>
  );
}
