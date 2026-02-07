import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import './globals.css';
import Footer from "@/components/Footer";

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
    title: 'Howell Dev',
    description: 'Building digital products that feel effortless.',
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