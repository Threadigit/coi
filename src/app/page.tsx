import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import HeroCinematicPreview from "@/components/HeroCinematicPreview";
import Shelf from "@/components/Shelf";
import EpisodeCard from "@/components/EpisodeCard";
import HeroIndex from "@/components/HeroIndex";
import { episodes, eras } from "@/lib/episodes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronicles of Innovation | The Premium Documentary Series for Innovation Stories",
  description: "The premium documentary series for innovation stories across the world. From the Industrial Revolution to the Digital Era, we document the groundbreaking innovations that shaped humanity.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
  const spotlight = episodes.find((e) => e.slug === "shipping-container")!;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://chroniclesofinnovation.com/#organization",
        "name": "Chronicles of Innovation",
        "url": "https://chroniclesofinnovation.com",
        "logo": "https://chroniclesofinnovation.com/coi_logo_transparent.png",
        "description": "The premium documentary series for innovation stories across the world. Documenting how groundbreaking innovations shaped humanity across the Industrial, Atomic, and Digital eras.",
        "foundingDate": "2026",
        "founder": {
          "@id": "https://chroniclesofinnovation.com/#toluadetuyi"
        },
        "sameAs": [
          "https://www.youtube.com/@ChronicleofInnovation",
          "https://www.facebook.com/Chronicleofinnovation/",
          "https://www.instagram.com/chronicleofinnovation",
          "https://www.threads.com/@chronicleofinnovation",
          "https://www.tiktok.com/@chronicleofinnovation"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://chroniclesofinnovation.com/#toluadetuyi",
        "name": "Tolu Adetuyi",
        "url": "https://chroniclesofinnovation.com/about",
        "jobTitle": "Executive Curator & Founder",
        "worksFor": {
          "@id": "https://chroniclesofinnovation.com/#organization"
        },
        "sameAs": [
          "https://www.adetuyi.com",
          "https://www.linkedin.com/in/adetuyitolu/",
          "https://x.com/AdetuyiTolu",
          "https://www.youtube.com/@adetuyitolu"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Chronicles of Innovation",
        "url": "https://chroniclesofinnovation.com",
        "description": "The premium documentary series for innovation stories across the world.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://chroniclesofinnovation.com/archive?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "CreativeWorkSeries",
        "@id": "https://chroniclesofinnovation.com/#series",
        "name": "Chronicles of Innovation",
        "url": "https://chroniclesofinnovation.com",
        "description": "A premium documentary series exploring the people, ideas, experiments, failures and breakthroughs that changed the world.",
        "publisher": { "@id": "https://chroniclesofinnovation.com/#organization" },
        "author": { "@id": "https://chroniclesofinnovation.com/#toluadetuyi" }
      },
      {
        "@type": "ItemList",
        "@id": "https://chroniclesofinnovation.com/#episodes",
        "name": "Chronicles of Innovation: Episodes",
        "itemListElement": episodes.map((episode, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "url": `https://chroniclesofinnovation.com${episode.href}`,
          "name": episode.title
        }))
      }
    ]
  };

  return (
    <div className="w-full overflow-x-clip">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero: full-bleed cinematic feature */}
      <section className="cinema relative isolate flex min-h-[100svh] items-end overflow-hidden pt-40 md:pt-32">
        <div className="absolute inset-0">
          <HeroCinematicPreview
            videoId="otqgociwb3o"
            image="/edison-machine-shop.jpg"
            alt="Thomas Edison's machine shop, lit by early electric lamps"
          />
          <div className="absolute inset-0 scrim-side" />
          <div className="absolute inset-x-0 top-0 h-40 scrim-top" />
          <div className="absolute inset-x-0 bottom-0 h-[88%] md:h-[70%] scrim-bottom" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-12 pb-[max(1.75rem,env(safe-area-inset-bottom))] md:pb-36 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <div>
          <div className="rise flex items-center gap-4 mb-5 md:mb-7" style={{ ['--d' as string]: 0 }}>
            <span className="glass rounded-full px-4 py-1.5 eyebrow !text-secondary">Era I: The Age of Electricity</span>
          </div>
          <h1
            className="rise serif-display text-[2.15rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-on-surface leading-[1.02] tracking-[-0.035em] max-w-5xl"
            style={{ ['--d' as string]: 1 }}
          >
            Light Bulb &amp; Electricity: <br className="hidden md:block" />Edison vs Tesla&apos;s <span className="text-gradient-gold italic pr-2">Hidden Battle</span>
          </h1>
          <p
            className="rise mt-5 md:mt-8 max-w-xl text-[15px] md:text-xl leading-relaxed text-on-surface/75"
            style={{ ['--d' as string]: 2 }}
          >
            The current that powers your world was decided by war. Explore the bitter rivalry between Thomas Edison and Nikola Tesla, the battle to light humanity and own the future.
          </p>
          <div className="rise mt-6 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 md:gap-4" style={{ ['--d' as string]: 3 }}>
            <Link href="/episode/edison-vs-tesla" className="btn btn-primary !px-8 !py-4 !text-[14px] w-full sm:w-auto">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
              Watch Feature Documentary
            </Link>
            <Link href="/archive" className="btn btn-glass !px-8 !py-4 !text-[14px] w-full sm:w-auto">
              View Full Series
            </Link>
          </div>
          </div>
          <div className="rise lg:pb-2" style={{ ['--d' as string]: 4 }}>
            <HeroIndex episodes={episodes} />
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 hidden xl:block" aria-hidden="true">
          <span className="material-symbols-outlined text-on-surface/40 animate-bounce">keyboard_arrow_down</span>
        </div>
      </section>

      {/* The Series shelf */}
      <section className="relative z-10 pt-14 md:pt-20 pb-8 md:pb-12 px-5 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow mb-8 md:mb-10">Chronicles of Innovation</div>
          <div className="flex items-end justify-between mb-8" data-reveal>
            <div>
              <h2 className="serif-display text-3xl md:text-5xl tracking-[-0.025em] text-on-surface">The <span className="italic text-primary">Series</span></h2>
            </div>
            <Link href="/archive" className="link-arrow hidden sm:inline-flex">
              View Full Series
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
            </Link>
          </div>
          <div data-reveal style={{ ['--d' as string]: 1 }}>
            <Shelf label="Episodes">
              {episodes.map((e) => (
                <EpisodeCard key={e.slug} episode={e} eyebrow={`Episode ${String(episodes.length - episodes.indexOf(e)).padStart(3, '0')}`} className="w-[78vw] sm:w-[26rem] lg:w-[30rem]" />
              ))}
            </Shelf>
          </div>
        </div>
      </section>

      {/* Philosophy of Innovation */}
      <section className="relative py-20 md:py-40 px-5 md:px-12 overflow-hidden">
        <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="eyebrow mb-12 md:mb-16">Philosophy of Progress</div>
          <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          <div className="w-full md:w-[34%] max-w-sm" data-reveal>
            <div className="aspect-[3/4] overflow-hidden rounded-[2rem] ring-1 ring-white/10 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.9)] relative group">
              <Image
                src="/avatar.png"
                alt="Executive Curator Portrait"
                fill
                sizes="(max-width: 768px) 80vw, 28rem"
                className="object-cover saturate-[.6] transition-all duration-[1200ms] ease-[var(--ease-spring)] group-hover:saturate-100 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            <Link href="/about" className="mt-7 inline-block group">
              <div className="text-primary serif-display italic text-xl transition-colors group-hover:text-[#ffe3b0]">Tolu Adetuyi</div>
              <div className="text-on-surface/50 text-[13px] mt-0.5">Executive Curator</div>
            </Link>
          </div>
          <div className="w-full md:w-2/3" data-reveal style={{ ['--d' as string]: 1 }}>
            <blockquote className="serif-display text-[1.85rem] sm:text-5xl lg:text-[3.75rem] text-on-surface leading-[1.1] tracking-[-0.03em] mb-12">
              &ldquo;Innovation is not merely a sequence of <span className="italic text-gradient-gold pr-1">inventions</span>, but the enduring narrative of human curiosity refusing to stay silent.&rdquo;
            </blockquote>
            <p className="text-on-surface/60 text-lg md:text-xl leading-relaxed max-w-xl">
              Our mission at Chronicles of Innovation is to archive the sparks that ignited entire eras. We don&apos;t just show you what was built; we show you why it mattered to the soul of humanity.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Current Spotlight: The Shipping Container */}
      <section className="relative px-5 md:px-12 py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="eyebrow mb-8 md:mb-10">Current Spotlight</div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-5" data-reveal>
            <div>
              <h2 className="serif-display text-[2.4rem] md:text-6xl tracking-[-0.03em] text-on-surface leading-[1.05]">The Shipping Container</h2>
            </div>
            <Link href="/archive" className="link-arrow">
              View Full Series
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>chevron_right</span>
            </Link>
          </div>

          <div
            className="group relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem] ring-1 ring-white/10 shadow-[0_50px_120px_-40px_rgba(0,0,0,1)]"
            data-reveal
            style={{ ['--d' as string]: 1 }}
          >
            <Link href="/episode/shipping-container" aria-label="Watch The Shipping Container" className="relative flex flex-col lg:block lg:aspect-[21/9]">
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src="/container-hero.jpg"
                  alt="A container ship being loaded by cranes at a port terminal at sunset"
                  fill
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover transition-transform duration-[1400ms] ease-[var(--ease-spring)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 hidden lg:block scrim-side" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-black/20 lg:from-black/80 lg:via-black/10 lg:to-transparent" />
                <div className="absolute left-4 top-4 md:left-8 md:top-8 max-w-[calc(100%-2rem)] glass rounded-2xl sm:rounded-full px-4 py-1.5">
                  <span className="eyebrow !text-secondary !text-[10px] block !tracking-[0.12em] sm:!tracking-[0.2em]">The Container Revolution | 1956–Present</span>
                </div>
                <div className="absolute right-6 top-6 md:right-10 md:top-10 hidden lg:grid h-16 w-16 place-items-center rounded-full bg-white/90 text-black opacity-0 scale-75 transition-all duration-500 ease-[var(--ease-spring)] group-hover:opacity-100 group-hover:scale-100">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 32 }}>play_arrow</span>
                </div>
              </div>
              <div className="relative bg-surface p-6 md:p-10 lg:bg-transparent lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-12 grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8 items-end">
                <div className="min-w-0">
                <dl className="font-mono-label mb-5 grid max-w-md grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-white/[0.12] pt-4 text-[11px] uppercase tracking-[0.14em]">
                  <dt className="text-on-surface/45">Era</dt>
                  <dd className="text-right text-on-surface">{eras.find((e) => e.id === spotlight.era)?.label}</dd>
                  <dt className="text-on-surface/45">Year</dt>
                  <dd className="text-right text-on-surface">{spotlight.year}</dd>
                  <dt className="text-on-surface/45">Episode</dt>
                  <dd className="text-right text-on-surface">{String(episodes.length - episodes.indexOf(spotlight)).padStart(3, '0')}</dd>
                </dl>
                <p className="min-w-0 text-on-surface/85 text-base md:text-lg lg:text-xl leading-relaxed max-w-xl">
                  How a North Carolina trucker turned a simple steel box into the shipping container, the deceptively plain invention that rewired global trade and built the modern economy.
                </p>
                </div>
                <ul className="min-w-0 glass rounded-3xl divide-y divide-white/[0.08] overflow-hidden self-end">
                  {['The Voyage of the Ideal X', 'The Battle for the Standard', 'The World in a Box'].map((t, i) => (
                    <li key={t} className="flex items-center gap-4 px-5 py-4">
                      <span className="text-primary serif-display italic text-lg w-8 shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                      <span className="text-on-surface text-sm md:text-[15px] tracking-[0.005em]">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-5 md:px-12 pt-20 md:pt-32 pb-10">
        <div
          className="relative max-w-5xl mx-auto overflow-hidden rounded-[2rem] md:rounded-[2.75rem] glass px-5 py-16 md:px-20 md:py-28 text-center"
          data-reveal
        >
          <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-primary serif-display italic text-2xl mb-5 block">The Inner Circle</span>
            <h2 className="serif-display text-[2.1rem] md:text-6xl tracking-[-0.03em] text-on-surface mb-6 leading-[1.08]">Join the Vanguard of Thought</h2>
            <p className="text-on-surface/60 mb-12 text-lg leading-relaxed">Receive exclusive director&apos;s cuts, archival scans, and invitations to private screenings. No noise, just pure signal.</p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
