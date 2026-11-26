import type { Metadata, Viewport } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0f1419",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://chroniclesofinnovation.com"),
  title: {
    default: "Chronicles of Innovation | The Premium Documentary Series for Innovation Stories",
    template: "%s | Chronicles of Innovation",
  },
  description: "The premium documentary series for innovation stories across the world. Exploring groundbreaking innovations that shaped humanity from the Industrial Revolution to the Digital Age.",
  keywords: ["innovation", "innovation stories", "innovation in the world", "world innovation", "innovation documentary", "history of innovation", "technology innovation", "human innovation", "industrial revolution", "digital age", "chronicles of innovation", "innovation series", "documentary series"],
  authors: [{ name: "Tolu Adetuyi", url: "https://chroniclesofinnovation.com/about" }],
  creator: "Tolu Adetuyi",
  publisher: "Tolu Adetuyi",
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
    creator: "@AdetuyiTolu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
