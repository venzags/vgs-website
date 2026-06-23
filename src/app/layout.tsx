import VenzaChatAgent from "./components/VenzaChatAgent";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";

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
          <VenzaChatAgent />
        </div>
      </body>
    </html>
  );
}