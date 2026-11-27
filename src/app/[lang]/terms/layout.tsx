import type { Metadata } from "next";
import { getMessages } from "@/i18n/messages";
import { getLocale, pageAlternates } from "@/i18n/page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: m.termsTitle,
    description: m.termsDescription,
    alternates: pageAlternates(lang, "/terms"),
    robots: { index: true, follow: true },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
