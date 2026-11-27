import type { Metadata } from "next";
import { getMessages } from "@/i18n/messages";
import { localeMeta, localizedPath } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales, socialImages } from "@/i18n/page";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: m.privacyTitle,
    description: m.privacyDescription,
    alternates: pageAlternates(lang, "/privacy"),
    robots: { index: true, follow: true },
    openGraph: { ...ogLocales(lang), type: "website", url: localizedPath(lang, "/privacy"), title: m.privacyTitle, description: m.privacyDescription, siteName: "Chronicles of Innovation", images: socialImages(lang).openGraph },
    twitter: { card: "summary_large_image", title: m.privacyTitle, description: m.privacyDescription, images: socialImages(lang).twitter },
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
        "@id": `${absoluteUrl(lang, "/privacy")}#webpage`,
        "url": absoluteUrl(lang, "/privacy"),
        "name": m.meta.privacyTitle,
        "description": m.meta.privacyDescription,
        "inLanguage": localeMeta[lang].htmlLang,
        "isPartOf": { "@id": `${SITE}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(lang, "/privacy")}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": m.nav.home, "item": absoluteUrl(lang, "/") },
          { "@type": "ListItem", "position": 2, "name": m.meta.privacyTitle, "item": absoluteUrl(lang, "/privacy") },
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
