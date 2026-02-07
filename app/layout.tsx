import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const fontVariables = `${geistSans.variable} ${geistMono.variable}`;

export const metadata: Metadata = {
  title: {
    default: 'Howell Dev',
    template: '%s | Howell Dev',
  },
  description: 'Founder-led development studio building modern digital products.',
  metadataBase: new URL('https://howelldev.com'),
  openGraph: {
    title: 'Howell Dev',
    description: 'Designing and building modern digital products.',
    url: 'https://howelldev.com',
    siteName: 'Howell Dev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Howell Dev',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Howell Dev',
    description: 'Founder-led development studio.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${fontVariables} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        </body>
        </html>
    );
}