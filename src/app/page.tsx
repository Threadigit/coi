import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import HeroCinematicPreview from "@/components/HeroCinematicPreview";
import Shelf from "@/components/Shelf";
import EpisodeScene from "@/components/EpisodeScene";
import CuratorQuote from "@/components/CuratorQuote";
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

      {/* Scene 1: the opening title card */}
      <section className="scene cinema flex min-h-[100svh] items-end">
        <div className="absolute inset-0">
          <HeroCinematicPreview
            videoId="otqgociwb3o"
            image="/edison-machine-shop.jpg"
            alt="Thomas Edison's machine shop, lit by early electric lamps"
          />
          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-x-0 top-0 h-44 scrim-top" />
          <div className="absolute inset-x-0 bottom-0 h-[85%] scrim-bottom" />
        </div>
        <div className="lb-bar lb-top" aria-hidden="true" />
        <div className="lb-bar lb-bot" aria-hidden="true" />
        <div className="relative z-10 w-full mx-auto max-w-[1600px] px-5 md:px-12 pt-40 pb-[max(2.25rem,env(safe-area-inset-bottom))] md:pb-24 text-center md:text-left">
          <div className="rise kicker mb-6 md:mb-8" style={{ ['--d' as string]: 0 }}>Era I: The Age of Electricity</div>
          <h1
            className="rise title-card text-[2.3rem] sm:text-6xl md:text-7xl lg:text-[5.4rem] text-on-surface max-w-6xl mx-auto md:mx-0"
            style={{ ['--d' as string]: 1 }}
          >
            Light Bulb &amp; Electricity: <br className="hidden md:block" />Edison vs Tesla&apos;s <span className="text-primary italic pr-2">Hidden Battle</span>
          </h1>
          <div className="mt-6 md:mt-10 grid md:grid-cols-[1fr_auto] gap-8 md:gap-16 items-end">
            <p
              className="rise max-w-xl mx-auto md:mx-0 text-[15px] md:text-xl leading-relaxed text-on-surface/80"
              style={{ ['--d' as string]: 2 }}
            >
              The current that powers your world was decided by war. Explore the bitter rivalry between Thomas Edison and Nikola Tesla, the battle to light humanity and own the future.
            </p>
            <div className="rise flex flex-col sm:flex-row gap-3 md:gap-4 md:justify-end" style={{ ['--d' as string]: 3 }}>
              <Link href="/episode/edison-vs-tesla" className="btn btn-primary w-full sm:w-auto sm:min-w-[17rem]">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                Watch Feature Documentary
              </Link>
              <Link href="/archive" className="btn btn-glass w-full sm:w-auto">
                View Full Series
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 z-10 hidden md:block h-14 w-px -translate-x-1/2 overflow-hidden" aria-hidden="true">
          <div className="scroll-cue h-full w-full bg-white/70" />
        </div>
      </section>

      {/* Scene 2: the series reel */}
      <section className="relative bg-[#05070a] pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-12">
          <div className="mb-10 md:mb-16 text-center" data-reveal>
            <div className="kicker mb-5">Chronicles of Innovation</div>
            <h2 className="title-card text-5xl md:text-8xl text-on-surface">The <span className="italic text-primary">Series</span></h2>
          </div>
          <Shelf label="Episodes">
            {episodes.map((e) => (
              <EpisodeScene
                key={e.slug}
                episode={e}
                number={String(episodes.length - episodes.indexOf(e)).padStart(3, '0')}
                className="w-[88vw] lg:w-[72vw] max-w-[1200px]"
              />
            ))}
          </Shelf>
          <div className="mt-12 md:mt-16 text-center">
            <Link href="/archive" className="link-arrow">
              View Full Series
              <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Scene 3: the curator's statement */}
      <CuratorQuote />

      {/* Scene 4: current spotlight */}
      <section className="scene">
        <Link
          href="/episode/shipping-container"
          aria-label="Watch The Shipping Container"
          className="group relative flex min-h-[100svh] items-end overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/container-hero.jpg"
              alt="A container ship being loaded by cranes at a port terminal at sunset"
              fill
              sizes="100vw"
              className="parallax object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/35 lg:via-black/45 lg:to-black/30" />
          <div className="absolute inset-0 scrim-side" />
          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-5 md:px-12 pb-14 md:pb-24 pt-32">
            <div className="kicker mb-6" data-reveal>Current Spotlight</div>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-24 items-end">
              <div data-reveal style={{ ['--d' as string]: 1 }}>
                <h2 className="title-card text-[2.8rem] md:text-8xl lg:text-[7.5rem] text-on-surface mb-6 md:mb-8">The Shipping Container</h2>
                <p className="text-on-surface/85 text-base md:text-xl leading-relaxed max-w-xl mb-8">
                  How a North Carolina trucker turned a simple steel box into the shipping container, the deceptively plain invention that rewired global trade and built the modern economy.
                </p>
                <span className="btn btn-primary">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1", fontSize: 22 }}>play_arrow</span>
                  Watch Now
                </span>
              </div>
              <div data-reveal style={{ ['--d' as string]: 2 }}>
                <div className="kicker !text-secondary mb-5">The Container Revolution | 1956–Present</div>
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
        </Link>
      </section>

      {/* Closing scene: the inner circle */}
      <section className="scene cinema flex min-h-[90svh] items-center justify-center px-5 md:px-12 py-24 text-center">
        <div className="relative z-10 w-full max-w-3xl" data-reveal>
          <div className="kicker mb-8 !text-primary">The Inner Circle</div>
          <h2 className="title-card text-[2.5rem] md:text-7xl lg:text-8xl text-on-surface mb-8">Join the Vanguard of Thought</h2>
          <p className="text-on-surface/65 mb-10 text-base md:text-xl leading-relaxed max-w-xl mx-auto">Receive exclusive director&apos;s cuts, archival scans, and invitations to private screenings. No noise, just pure signal.</p>
          <div className="flex justify-center"><NewsletterForm /></div>
        </div>
      </section>
    </div>
  );
}
