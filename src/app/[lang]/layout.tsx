import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import {
  Noto_Serif,
  Noto_Serif_SC,
  Noto_Serif_Devanagari,
  Inter,
  Geist_Mono,
} from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LocaleProvider } from "@/i18n/context";
import { isLocale, locales, localeMeta, localizedPath, type Locale } from "@/i18n/config";
import { getMessages, getUiMessages } from "@/i18n/messages";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-noto-serif",
});

// Chinese and Devanagari headlines. They sit after Noto Serif in the font
// stack, so each glyph picks the first font that has it. The browser only
// downloads the slices a page actually uses, so English pages pay nothing.
const notoSerifSC = Noto_Serif_SC({
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-serif-sc",
});
const notoSerifDeva = Noto_Serif_Devanagari({
  weight: ["400", "700"],
  preload: false,
  variable: "--font-noto-serif-deva",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0f1419",
  viewportFit: "cover",
  colorScheme: "dark",
};

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const m = getMessages(lang).meta;
  return {
    metadataBase: new URL("https://chroniclesofinnovation.com"),
    title: { default: m.defaultTitle, template: m.titleTemplate },
    description: m.description,
    keywords: ["innovation", "innovation stories", "innovation in the world", "world innovation", "innovation documentary", "history of innovation", "technology innovation", "human innovation", "industrial revolution", "digital age", "chronicles of innovation", "innovation series", "documentary series"],
    authors: [{ name: "Tolu Adetuyi", url: "https://chroniclesofinnovation.com/about" }],
    creator: "Tolu Adetuyi",
    publisher: "Tolu Adetuyi",
    openGraph: {
      type: "website",
      locale: localeMeta[lang].og,
      alternateLocale: locales.filter((l) => l !== lang).map((l) => localeMeta[l].og),
      url: localizedPath(lang, "/"),
      siteName: "Chronicles of Innovation",
      title: m.defaultTitle,
      description: m.ogDescription,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: m.twitterTitle,
      description: m.twitterDescription,
      creator: "@AdetuyiTolu",
      images: ["/twitter-image"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const m = getMessages(locale);

  return (
    <html lang={localeMeta[locale].htmlLang} className="dark scroll-smooth" style={{ colorScheme: "dark" }}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${notoSerif.variable} ${notoSerifSC.variable} ${notoSerifDeva.variable} ${inter.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <LocaleProvider lang={locale} ui={getUiMessages(locale)}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer lang={locale} t={{ nav: m.nav, footer: m.footer, common: m.common }} />
        </LocaleProvider>
      </body>
    </html>
  );
}
