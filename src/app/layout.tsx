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
    default: "Chronicles of Innovation | The Premium Documentary Series for Innovation Stories",
    template: "%s | Chronicles of Innovation",
  },
  description: "The premium documentary series for innovation stories across the world. Exploring groundbreaking innovations that shaped humanity from the Industrial Revolution to the Digital Age.",
  keywords: ["innovation", "innovation stories", "innovation in the world", "world innovation", "innovation documentary", "history of innovation", "technology innovation", "human innovation", "industrial revolution", "digital age", "chronicles of innovation", "innovation series", "documentary series"],
  authors: [{ name: "Chronicles of Innovation Team" }],
  creator: "Tolu Adetuyi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chroniclesofinnovation.com",
    siteName: "Chronicles of Innovation",
    title: "Chronicles of Innovation | The Premium Documentary Series for Innovation Stories",
    description: "The premium documentary series for innovation stories across the world. Exploring the breakthroughs that shaped humanity.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chronicles of Innovation | Innovation Documentary Series",
    description: "The premium documentary series for innovation stories across the world.",
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
