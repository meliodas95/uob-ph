import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://uobkayhian.com.ph"),
  title: {
    default: "UOB Kay Hian Philippines | Online Stock Trading",
    template: "%s | UOB Kay Hian Philippines",
  },
  description:
    "UOB Kay Hian Securities (Philippines) Inc. - Your trusted partner for online stock trading in the Philippine Stock Exchange. Trade with UTRADE, our award-winning platform.",
  keywords: [
    "UOB Kay Hian",
    "Philippines",
    "stock trading",
    "UTRADE",
    "PSE",
    "Philippine Stock Exchange",
    "online trading",
    "securities",
  ],
  authors: [{ name: "UOB Kay Hian Securities (Philippines) Inc." }],
  openGraph: {
    type: "website",
    locale: "en_PH",
    url: "https://uobkayhian.com.ph",
    siteName: "UOB Kay Hian Philippines",
    title: "UOB Kay Hian Philippines | Online Stock Trading",
    description:
      "Your trusted partner for online stock trading in the Philippine Stock Exchange.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "UOB Kay Hian Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UOB Kay Hian Philippines | Online Stock Trading",
    description:
      "Your trusted partner for online stock trading in the Philippine Stock Exchange.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
