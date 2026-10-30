import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import HeroCinematicPreview from "@/components/HeroCinematicPreview";
import InnovationTimeline from "@/components/InnovationTimeline";
import { episodes } from "@/lib/episodes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chronicles of Innovation | The Premium Documentary Series for Innovation Stories",
  description: "The premium documentary series for innovation stories across the world. From the Industrial Revolution to the Digital Era, we document the groundbreaking innovations that shaped humanity.",
  alternates: {
    canonical: "/",
  },
};
export default function Home() {
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
        "name": "Chronicles of Innovation — Episodes",
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
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Hero Section: Cinematic Steam Engine */}
      <section className="relative min-h-screen flex items-end pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HeroCinematicPreview
            videoId="otqgociwb3o"
            image="/edison-machine-shop.jpg"
            alt="Thomas Edison's machine shop, lit by early electric lamps"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent"></div>
        </div>
        <div className="relative z-10 px-6 md:px-12 pb-24 w-full max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-4 mb-6">
            <span className="text-secondary font-label uppercase tracking-[0.3em] text-xs">Era I: The Age of Electricity</span>
            <div className="h-px w-24 bg-outline-variant/30 hidden md:block"></div>
          </div>
          <h1 className="serif-display text-5xl md:text-7xl lg:text-8xl text-on-surface leading-tight tracking-tighter max-w-4xl">
            Light Bulb & Electricity: <br className="hidden md:block"/>Edison vs Tesla&apos;s <span className="text-primary italic">Hidden Battle</span>
          </h1>
          <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
            <p className="font-body text-slate-400 max-w-md text-lg leading-relaxed">
              The current that powers your world was decided by war. Explore the bitter rivalry between Thomas Edison and Nikola Tesla — the battle to light humanity and own the future.
            </p>
            <Link href="/episode/edison-vs-tesla" className="flex items-center gap-4 group cursor-pointer mt-4 md:mt-0">
              <div className="w-16 h-16 rounded-full border border-primary/40 flex items-center justify-center group-hover:bg-primary transition-all duration-500">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
              </div>
              <span className="font-label uppercase tracking-widest text-xs font-bold text-primary">Watch Feature Documentary</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy of Innovation Section */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low relative">
        <div className="absolute inset-0 blueprint-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24 items-center relative z-10">
          <div className="w-full md:w-1/3">
            <div className="aspect-[3/4] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative">
              <Image 
                src="/avatar.png"
                alt="Executive Curator Portrait" 
                fill
                className="object-cover" 
              />
            </div>
            <Link href="/about" className="mt-6 inline-block group">
              <div className="text-primary serif-display italic text-lg group-hover:underline underline-offset-4 decoration-primary/40">Tolu Adetuyi</div>
              <div className="text-slate-500 font-label uppercase tracking-widest text-[10px]">Executive Curator</div>
            </Link>
          </div>
          <div className="w-full md:w-2/3">
            <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-8 block">Philosophy of Progress</span>
            <blockquote className="serif-display text-4xl md:text-5xl lg:text-6xl text-on-surface leading-tight mb-12">
              "Innovation is not merely a sequence of <span className="italic text-primary-container">inventions</span>, but the enduring narrative of human curiosity refusing to stay silent."
            </blockquote>
            <p className="font-body text-slate-400 text-lg max-w-xl">
              Our mission at Chronicles of Innovation is to archive the sparks that ignited entire eras. We don't just show you what was built; we show you why it mattered to the soul of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Documentary: The Shipping Container */}
      <section className="py-32 px-6 md:px-12 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-4 block">Current Spotlight</span>
              <h2 className="serif-display text-5xl text-on-surface">The Shipping Container</h2>
            </div>
            <Link href="/archive" className="font-label uppercase tracking-widest text-[10px] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all">
              View Full Series
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <Link href="/episode/shipping-container" className="md:col-span-8 group relative overflow-hidden rounded-sm shadow-2xl block aspect-video">
              <Image
                src="/container-hero.jpg"
                alt="A container ship being loaded by cranes at a port terminal at sunset"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="material-symbols-outlined text-primary text-6xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              </div>
            </Link>

            <div className="md:col-span-4 space-y-8">
              <div>
                <div className="bg-surface-container-highest px-3 py-1 inline-block rounded-full mb-4">
                  <span className="text-secondary font-label uppercase text-[9px] tracking-widest">The Container Revolution | 1956–Present</span>
                </div>
                <p className="font-body text-slate-300 leading-relaxed">
                  How a North Carolina trucker turned a simple steel box into the shipping container — the deceptively plain invention that rewired global trade and built the modern economy.
                </p>
              </div>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">01.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">The Voyage of the Ideal X</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">02.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">The Battle for the Standard</span>
                </li>
                <li className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-primary serif-display italic">03.</span>
                  <span className="text-on-surface font-body text-sm tracking-wide group-hover:text-primary transition-colors">The World in a Box</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* The Chronicle: Innovation Timeline */}
      <section className="py-32 px-6 md:px-12 bg-surface-container-low relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
            <div>
              <span className="text-secondary font-label uppercase tracking-[0.2em] text-[10px] mb-4 block">The Chronicle</span>
              <h3 className="serif-display text-4xl md:text-6xl text-on-surface leading-tight">A Timeline of <span className="italic text-primary">Innovation</span></h3>
            </div>
            <Link href="/timeline" className="font-label uppercase tracking-widest text-[10px] text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all whitespace-nowrap">
              Open Full Chronicle
            </Link>
          </div>
          <InnovationTimeline />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 blueprint-grid pointer-events-none opacity-10"></div>
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-primary serif-display italic text-2xl mb-4 block">The Inner Circle</span>
          <h2 className="serif-display text-4xl md:text-5xl lg:text-6xl text-on-surface mb-8">Join the Vanguard of Thought</h2>
          <p className="font-body text-slate-400 mb-12 text-lg">Receive exclusive director's cuts, archival scans, and invitations to private screenings. No noise, just pure signal.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
