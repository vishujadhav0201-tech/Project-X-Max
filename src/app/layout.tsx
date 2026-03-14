import type { Metadata } from "next";
import "./globals.css";
import FloatingNavbar from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "LinkFlow — Download Link Simulator",
  description:
    "A research and educational demo to study user behavior and redirection flows on download aggregator websites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6277640240780585" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6277640240780585" crossOrigin="anonymous"></script>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <FloatingNavbar />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
