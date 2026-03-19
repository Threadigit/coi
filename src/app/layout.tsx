import type { Metadata } from "next";
import { Noto_Serif, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chroniclesofinnovation.com"),
  title: {
    default: "Chronicles of Innovation",
    template: "%s | Chronicles of Innovation",
  },
  description: "Curating the Spark of Progress. Documenting the historical innovations of humanity.",
  keywords: ["technology", "history", "innovation", "documentary", "archive", "silicon chip", "industrial era", "atomic era", "digital era"],
  authors: [{ name: "Chronicles of Innovation Team" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chroniclesofinnovation.com",
    siteName: "Chronicles of Innovation",
    title: "Chronicles of Innovation",
    description: "Documenting the historical sparks of human progress across the Industrial, Atomic, and Digital eras.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronicles of Innovation",
    description: "Documenting the historical sparks of human progress.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${spaceGrotesk.variable} antialiased selection:bg-primary/30 selection:text-primary min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
