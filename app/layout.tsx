import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from './components/Header';
import Footer from './components/Footer';
import { AuthProvider } from '@/lib/auth-context'
import "./globals.css";
import { TooltipProvider } from '@/components/ui/tooltip';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "VoiceMate AI",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
           <Header />
           <AuthProvider>
            <TooltipProvider>
        {children}
        </TooltipProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
