import type { Metadata } from "next";
import { getMessages } from "@/i18n/messages";
import { localeMeta, localizedPath } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales, socialImages } from "@/i18n/page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: m.termsTitle,
    description: m.termsDescription,
    alternates: pageAlternates(lang, "/terms"),
    robots: { index: true, follow: true },
    openGraph: { ...ogLocales(lang), type: "website", url: localizedPath(lang, "/terms"), title: m.termsTitle, description: m.termsDescription, siteName: "Chronicles of Innovation", images: socialImages(lang).openGraph },
    twitter: { card: "summary_large_image", title: m.termsTitle, description: m.termsDescription, images: socialImages(lang).twitter },
  };
}

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = await getLocale(params);
  const m = getMessages(lang);
  const structured = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl(lang, "/terms")}#webpage`,
        "url": absoluteUrl(lang, "/terms"),
        "name": m.meta.termsTitle,
        "description": m.meta.termsDescription,
        "inLanguage": localeMeta[lang].htmlLang,
        "isPartOf": { "@id": `${SITE}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(lang, "/terms")}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": m.nav.home, "item": absoluteUrl(lang, "/") },
          { "@type": "ListItem", "position": 2, "name": m.meta.termsTitle, "item": absoluteUrl(lang, "/terms") },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }} />
      {children}
    </>
  );
}
