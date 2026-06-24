import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";
import VenzaAssistant from "./components/VenzaAssistant";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Venza Global Services",
  description:
    "AI Solutions, Machine Learning, Software Development, Cloud Services, IT Consulting and Digital Transformation.",
    icons: {
    icon: "/images/favicon-VGS.png",
    shortcut: "/images/favicon-VGS.png",
    apple: "/images/favicon-VGS.png",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-white">
        <div className="flex min-h-screen flex-col">
          <GlobalHeader />

          <main className="flex-1">{children}</main>

          <GlobalFooter />

          {/* Venza AI chat button and popup — available on every page */}
          <VenzaAssistant />
        </div>
      </body>
    </html>
  );
}