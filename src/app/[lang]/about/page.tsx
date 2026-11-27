import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import { getMessages, format } from "@/i18n/messages";
import { localeMeta, localizedPath } from "@/i18n/config";
import { getLocale, pageAlternates, absoluteUrl, SITE, ogLocales } from "@/i18n/page";
import { rich } from "@/i18n/rich";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = await getLocale(params);
  const m = getMessages(lang).meta;
  return {
    title: { absolute: m.aboutTitle },
    description: m.aboutDescription,
    keywords: ["Tolu Adetuyi", "Tolu Adetuyi Chronicles of Innovation", "Executive Curator", "Chronicles of Innovation founder", "innovation documentary curator", "Chronicles of Innovation about"],
    authors: [{ name: "Tolu Adetuyi", url: `${SITE}/about` }],
    creator: "Tolu Adetuyi",
    alternates: pageAlternates(lang, "/about"),
    openGraph: { ...ogLocales(lang), type: "profile", title: m.aboutTitle, description: m.aboutDescription, url: localizedPath(lang, "/about"), siteName: "Chronicles of Innovation", images: [{ url: "/opengraph-image", width: 1200, height: 630 }] },
  };
}

const stageIcons = [
  { icon: "archive", color: "text-primary" },
  { icon: "verified", color: "text-secondary" },
  { icon: "movie", color: "text-primary" },
];
const teamImages = [
  { src: "/avatar.png", cls: "" },
  { src: "/isaiah_matchbg.png", cls: "object-top" },
  { src: "/john_bassey.png", cls: "" },
];

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
  const lang = await getLocale(params);
  const m = getMessages(lang);
  const t = m.about;
  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${absoluteUrl(lang, "/about")}#profilepage`,
        "url": absoluteUrl(lang, "/about"),
        "inLanguage": localeMeta[lang].htmlLang,
        "name": `Tolu Adetuyi, ${m.episodeUi.jobTitle}`,
        "mainEntity": {
          "@type": "Person",
          "@id": `${SITE}/#toluadetuyi`,
          "name": "Tolu Adetuyi",
          "url": absoluteUrl(lang, "/about"),
          "jobTitle": m.episodeUi.jobTitle,
          "description": m.meta.aboutDescription,
          "worksFor": { "@type": "Organization", "name": "Chronicles of Innovation", "url": SITE },
          "image": `${SITE}/avatar.png`,
          "knowsAbout": ["History of innovation", "History of science and technology", "Industrial history", "Documentary filmmaking"],
          "sameAs": [
            "https://www.adetuyi.com",
            "https://www.linkedin.com/in/adetuyitolu/",
            "https://x.com/AdetuyiTolu",
            "https://www.youtube.com/@adetuyitolu",
          ],
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${absoluteUrl(lang, "/about")}#breadcrumb`,
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": m.nav.home, "item": absoluteUrl(lang, "/") },
          { "@type": "ListItem", "position": 2, "name": m.nav.about, "item": absoluteUrl(lang, "/about") },
        ],
      },
    ],
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      {/* Hero Section: Cinematic Asymmetry */}
      <section className="px-5 md:px-12 pt-32 md:pt-48 pb-10 md:pb-16 mb-16 md:mb-32 relative overflow-hidden">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row items-end gap-12 lg:gap-16">
          <div className="md:w-1/2 min-w-0">
            <p className="kicker rise mb-8">{t.volume}</p>
            <h1 className="rise title-card text-[2.6rem] md:text-[clamp(2.4rem,5.2vw,5.5rem)] text-on-surface" style={{ ["--d" as string]: 1 }}>{rich(t.title, "italic text-primary pr-2")}</h1>
          </div>
          <div className="md:w-1/2 h-[340px] md:h-[560px] overflow-hidden rounded-sm ring-1 ring-white/10 bg-surface-container-low relative w-full">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKj3IxWHcvVkLbHXjkValIk3MmQyXm9SLL_Du7D8CEDtXlnRrZZ19sgUzR-IpI0ACm1PGQ7zTt02I9AFcGXmVbwjL1ebBG2YKFTZR7JNDDevUe5bHxY_TKFYXmyuX8IIjIg9yXDhbSOMElLPEmTE4SNR0xTD8eSZ7edobORptS6OP4LUvXtHuu-8AGW3BDQM1GxGHl-hzufeCGl5RdRx6Xy3w2fSSI3izkIJtkvte5Qb0kAV7Hdck8PcKdb2rRg2pe_0Fyihjcrw"
              alt={t.imageAlt}
              fill
              className="object-cover saturate-[.5] hover:saturate-100 hover:scale-[1.03] transition-all duration-[1200ms] ease-[var(--ease-spring)] opacity-80"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-5 md:px-12 mb-24 md:mb-44">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16" data-reveal>
          <div className="md:col-span-4">
            <h2 className="eyebrow !text-primary mb-5">{t.missionLabel}</h2>
            <div className="hairline w-full"></div>
          </div>
          <div className="md:col-span-8 max-w-3xl">
            <p className="font-headline text-[1.6rem] md:text-5xl italic leading-[1.25] tracking-[-0.025em] text-on-surface mb-12">
              {t.missionLead}
            </p>
            <div className="font-headline text-lg md:text-xl leading-[1.75] text-on-surface/70 space-y-8">
              <p>{t.missionP1}</p>
              <p>{t.missionP2}</p>
              <p>{t.missionP3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Research Process */}
      <section className="px-5 md:px-12 py-20 md:py-40 bg-surface-container-low mb-24 md:mb-44">
        <div className="max-w-[1600px] mx-auto" data-reveal>
          <div className="mb-20 text-center">
            <h2 className="eyebrow mb-5">{t.methodKicker}</h2>
            <h3 className="font-headline text-4xl md:text-7xl tracking-[-0.035em]">{t.methodTitle}</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {t.stages.map((st, i) => (
              <div key={st.title} className="group p-10 card-glass rounded-sm relative overflow-hidden">
                <div className="mb-12 flex justify-between items-start">
                  <span className={`material-symbols-outlined text-4xl ${stageIcons[i].color}`} style={{ fontVariationSettings: "'FILL' 0" }}>{stageIcons[i].icon}</span>
                  <span className="font-label text-[11px] tracking-[0.18em] uppercase text-on-surface/40">{format(t.stage, { n: String(i + 1).padStart(2, "0") })}</span>
                </div>
                <h4 className="font-headline text-3xl tracking-[-0.02em] mb-4">{st.title}</h4>
                <p className="text-on-surface/60 text-[17px] leading-relaxed">{st.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Minds Behind */}
      <section className="px-5 md:px-12 mb-24 md:mb-44">
        <div className="max-w-[1600px] mx-auto" data-reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="font-headline text-5xl md:text-6xl tracking-[-0.035em] max-w-md leading-[1.05]">{t.teamTitle}</h2>
            <p className="eyebrow !text-on-surface/50 pb-2">{t.teamKicker}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {t.team.map((person, i) => (
              <div key={person.name} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-surface-container-highest relative ring-1 ring-white/10">
                  <Image src={teamImages[i].src} alt={person.alt} fill className={`object-cover ${teamImages[i].cls} saturate-[.5] group-hover:saturate-100 group-hover:scale-105 transition-all duration-[900ms] ease-[var(--ease-spring)]`} />
                </div>
                <span className="eyebrow !text-[10px]">{person.tag}</span>
                <h4 className="font-headline text-3xl tracking-[-0.02em] mt-2 mb-1">{person.name}</h4>
                <p className="text-sm text-on-surface/50">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-5 md:px-12 py-32 md:py-44 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center" data-reveal>
          <h2 className="font-headline text-4xl md:text-6xl tracking-[-0.035em] mb-8 leading-[1.05]">{t.ctaTitle}</h2>
          <p className="text-on-surface/60 mb-12 text-lg md:text-xl">{t.ctaText}</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
