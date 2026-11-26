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
        <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-12 pb-[max(2rem,env(safe-area-inset-bottom))] md:pb-24 lg:grid lg:grid-cols-[1fr_auto] lg:items-end lg:gap-20">
          <div>
            <div className="rise flex items-center gap-4 mb-5 md:mb-7" style={{ ['--d' as string]: 0 }}>
              <span className="h-px w-10 bg-primary" aria-hidden="true" />
              <span className="eyebrow !text-on-surface/80">Era I: The Age of Electricity</span>
            </div>
            <h1
              className="rise serif-display text-[2.15rem] sm:text-6xl md:text-7xl lg:text-[5.25rem] text-on-surface leading-[1.02] tracking-[-0.03em] max-w-5xl"
              style={{ ['--d' as string]: 1 }}
            >
              Light Bulb &amp; Electricity: <br className="hidden md:block" />Edison vs Tesla&apos;s <span className="text-primary italic pr-2">Hidden Battle</span>
            </h1>
            <p
              className="rise mt-5 md:mt-8 max-w-xl text-[15px] md:text-xl leading-relaxed text-on-surface/75"
              style={{ ['--d' as string]: 2 }}
            >
              The current that powers your world was decided by war. Explore the bitter rivalry between Thomas Edison and Nikola Tesla, the battle to light humanity and own the future.
            </p>
            <div className="rise mt-6 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 md:gap-4" style={{ ['--d' as string]: 3 }}>
              <Link href="/episode/edison-vs-tesla" className="btn btn-primary w-full sm:w-auto sm:min-w-[17rem]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                Watch Feature Documentary
              </Link>
              <Link href="/archive" className="btn btn-glass w-full sm:w-auto">
                View Full Series
              </Link>
            </div>
          </div>
          <div className="rise lg:pb-1" style={{ ['--d' as string]: 4 }}>
            <HeroIndex episodes={episodes} />
          </div>
        </div>
      </section>

      {/* The Series shelf */}
      <section className="relative z-10 pt-16 md:pt-28 pb-16 md:pb-28 px-5 md:px-12">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex items-end justify-between gap-6 border-t border-white/[0.14] pt-6 mb-10 md:mb-14" data-reveal>
            <div>
              <div className="eyebrow mb-4">Chronicles of Innovation</div>
              <h2 className="serif-display text-4xl md:text-6xl tracking-[-0.025em] text-on-surface leading-none">The <span className="italic text-primary">Series</span></h2>
            </div>
            <Link href="/archive" className="link-arrow hidden sm:inline-flex">
              View Full Series
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
          <div data-reveal style={{ ['--d' as string]: 1 }}>
            <Shelf label="Episodes">
              {episodes.map((e) => (
                <EpisodeCard key={e.slug} episode={e} eyebrow={`Episode ${String(episodes.length - episodes.indexOf(e)).padStart(3, '0')}`} className="w-[80vw] sm:w-[26rem] lg:w-[30rem]" />
              ))}
            </Shelf>
          </div>
        </div>
      </section>

      {/* Philosophy of Innovation */}
      <section className="relative px-5 md:px-12 pb-20 md:pb-36">
        <div className="max-w-[1600px] mx-auto border-t border-white/[0.14] pt-6">
          <div className="eyebrow mb-12 md:mb-20" data-reveal>Philosophy of Progress</div>
          <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-4 lg:col-span-3" data-reveal>
              <div className="aspect-[3/4] overflow-hidden relative group">
                <Image
                  src="/avatar.png"
                  alt="Executive Curator Portrait"
                  fill
                  sizes="(max-width: 768px) 80vw, 24rem"
                  className="object-cover saturate-[.7] transition-all duration-[1200ms] ease-[var(--ease-spring)] group-hover:saturate-100"
                />
              </div>
              <Link href="/about" className="mt-6 block group">
                <div className="text-primary serif-display italic text-xl">Tolu Adetuyi</div>
                <div className="eyebrow !text-on-surface/50 mt-1.5">Executive Curator</div>
              </Link>
            </div>
            <div className="md:col-span-8 lg:col-span-9 lg:pl-12" data-reveal style={{ ['--d' as string]: 1 }}>
              <blockquote className="serif-display text-[1.85rem] sm:text-5xl lg:text-[4rem] text-on-surface leading-[1.1] tracking-[-0.03em] mb-10 md:mb-14">
                &ldquo;Innovation is not merely a sequence of <span className="italic text-primary pr-1">inventions</span>, but the enduring narrative of human curiosity refusing to stay silent.&rdquo;
              </blockquote>
              <p className="text-on-surface/60 text-lg md:text-xl leading-relaxed max-w-xl">
                Our mission at Chronicles of Innovation is to archive the sparks that ignited entire eras. We don&apos;t just show you what was built; we show you why it mattered to the soul of humanity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Spotlight: The Shipping Container (full-bleed) */}
      <section className="relative">
        <Link
          href="/episode/shipping-container"
          aria-label="Watch The Shipping Container"
          className="group relative block min-h-[40rem] md:min-h-[44rem] lg:min-h-[48rem] overflow-hidden"
        >
          <Image
            src="/container-hero.jpg"
            alt="A container ship being loaded by cranes at a port terminal at sunset"
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-[2000ms] ease-[var(--ease-spring)] group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 scrim-side" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/25" />
          <div className="absolute inset-y-0 right-0 hidden lg:block w-1/2 bg-gradient-to-l from-black/60 to-transparent" />
          <div className="relative z-10 flex min-h-[40rem] md:min-h-[44rem] lg:min-h-[48rem] items-end">
            <div className="w-full max-w-[1600px] mx-auto px-5 md:px-12 pb-10 md:pb-20 pt-28">
              <div className="flex items-center gap-4 mb-6" data-reveal>
                <span className="h-px w-10 bg-primary" aria-hidden="true" />
                <span className="eyebrow !text-on-surface/80">Current Spotlight</span>
              </div>
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-24 items-end">
                <div data-reveal style={{ ['--d' as string]: 1 }}>
                  <h2 className="serif-display text-[2.6rem] md:text-7xl lg:text-8xl tracking-[-0.03em] text-on-surface leading-[1.02] mb-6 md:mb-8">The Shipping Container</h2>
                  <p className="text-on-surface/85 text-base md:text-xl leading-relaxed max-w-xl mb-8">
                    How a North Carolina trucker turned a simple steel box into the shipping container, the deceptively plain invention that rewired global trade and built the modern economy.
                  </p>
                  <span className="btn btn-primary">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                    Watch Now
                  </span>
                </div>
                <div data-reveal style={{ ['--d' as string]: 2 }}>
                  <div className="eyebrow !text-secondary mb-5">The Container Revolution | 1956–Present</div>
                  <dl className="font-mono-label mb-6 grid grid-cols-[auto_1fr] gap-x-6 gap-y-3 border-t border-white/[0.2] pt-5 text-[11px] uppercase tracking-[0.14em]">
                    <dt className="text-on-surface/50">Era</dt>
                    <dd className="text-right text-on-surface">{eras.find((e) => e.id === spotlight.era)?.label}</dd>
                    <dt className="text-on-surface/50">Year</dt>
                    <dd className="text-right text-on-surface">{spotlight.year}</dd>
                    <dt className="text-on-surface/50">Episode</dt>
                    <dd className="text-right text-on-surface">{String(episodes.length - episodes.indexOf(spotlight)).padStart(3, '0')}</dd>
                  </dl>
                  <ul className="border-t border-white/[0.2]">
                    {['The Voyage of the Ideal X', 'The Battle for the Standard', 'The World in a Box'].map((t, i) => (
                      <li key={t} className="flex items-baseline gap-5 border-b border-white/[0.2] py-4">
                        <span className="text-primary serif-display italic text-lg w-8 shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                        <span className="text-on-surface text-[15px]">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Newsletter Signup */}
      <section className="px-5 md:px-12 py-20 md:py-36">
        <div className="max-w-[1600px] mx-auto border-t border-white/[0.14] pt-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-end" data-reveal>
            <div>
              <span className="eyebrow block mb-8">The Inner Circle</span>
              <h2 className="serif-display text-[2.4rem] md:text-6xl lg:text-7xl tracking-[-0.03em] text-on-surface leading-[1.04]">Join the Vanguard of Thought</h2>
            </div>
            <div>
              <p className="text-on-surface/60 mb-8 text-lg leading-relaxed max-w-lg">Receive exclusive director&apos;s cuts, archival scans, and invitations to private screenings. No noise, just pure signal.</p>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
