import Image from "next/image";
import NewsletterForm from "@/components/NewsletterForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Tolu Adetuyi, Executive Curator & Founder | Chronicles of Innovation" },
  description:
    "Meet Tolu Adetuyi, Executive Curator and founder of Chronicles of Innovation, the premium documentary series chronicling the innovations that shaped the modern world.",
  keywords: [
    "Tolu Adetuyi",
    "Tolu Adetuyi Chronicles of Innovation",
    "Executive Curator",
    "Chronicles of Innovation founder",
    "innovation documentary curator",
    "Chronicles of Innovation about",
  ],
  authors: [{ name: "Tolu Adetuyi", url: "https://chroniclesofinnovation.com/about" }],
  creator: "Tolu Adetuyi",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    type: "profile",
    firstName: "Tolu",
    lastName: "Adetuyi",
    title: "Tolu Adetuyi, Executive Curator & Founder, Chronicles of Innovation",
    description:
      "Executive Curator and founder of Chronicles of Innovation, the premium documentary series on the breakthroughs that shaped the modern world.",
    url: "/about",
    siteName: "Chronicles of Innovation",
  },
};

export default function About() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": "https://chroniclesofinnovation.com/about#profilepage",
        "url": "https://chroniclesofinnovation.com/about",
        "name": "Tolu Adetuyi, Executive Curator & Founder",
        "mainEntity": {
          "@type": "Person",
          "@id": "https://chroniclesofinnovation.com/#toluadetuyi",
          "name": "Tolu Adetuyi",
          "url": "https://chroniclesofinnovation.com/about",
          "jobTitle": "Executive Curator & Founder",
          "description":
            "Tolu Adetuyi is the Executive Curator and founder of Chronicles of Innovation, a premium documentary series chronicling the innovations that shaped the modern world.",
          "worksFor": {
            "@type": "Organization",
            "name": "Chronicles of Innovation",
            "url": "https://chroniclesofinnovation.com",
          },
          "image": "https://chroniclesofinnovation.com/avatar.png",
          "knowsAbout": [
            "History of innovation",
            "History of science and technology",
            "Industrial history",
            "Documentary filmmaking",
          ],
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
        "@id": "https://chroniclesofinnovation.com/about#breadcrumb",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://chroniclesofinnovation.com" },
          { "@type": "ListItem", "position": 2, "name": "About", "item": "https://chroniclesofinnovation.com/about" },
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
      <section className="px-5 md:px-12 pt-32 md:pt-48 mb-24 md:mb-44 relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[40rem] spotlight-gold pointer-events-none" aria-hidden="true"></div>
        <div className="blueprint-grid-radial absolute inset-0 -z-10 opacity-60"></div>
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-end gap-12 lg:gap-16">
          <div className="md:w-1/2 lg:w-5/12">
            <p className="kicker rise mb-8">Volume I: The Manifesto</p>
            <h1 className="rise title-card text-[2.6rem] md:text-7xl lg:text-[6rem] text-on-surface" style={{ ["--d" as string]: 1 }}>Documenting the <span className="italic text-primary pr-2">Sparks</span> of Human Progress</h1>
          </div>
          <div className="md:w-1/2 lg:w-7/12 h-[340px] md:h-[560px] overflow-hidden rounded-sm md:rounded-sm ring-1 ring-white/10  bg-surface-container-low relative w-full">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKj3IxWHcvVkLbHXjkValIk3MmQyXm9SLL_Du7D8CEDtXlnRrZZ19sgUzR-IpI0ACm1PGQ7zTt02I9AFcGXmVbwjL1ebBG2YKFTZR7JNDDevUe5bHxY_TKFYXmyuX8IIjIg9yXDhbSOMElLPEmTE4SNR0xTD8eSZ7edobORptS6OP4LUvXtHuu-8AGW3BDQM1GxGHl-hzufeCGl5RdRx6Xy3w2fSSI3izkIJtkvte5Qb0kAV7Hdck8PcKdb2rRg2pe_0Fyihjcrw" 
              alt="Data particles" 
              fill
              className="object-cover saturate-[.5] hover:saturate-100 hover:scale-[1.03] transition-all duration-[1200ms] ease-[var(--ease-spring)] opacity-80" 
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-5 md:px-12 mb-24 md:mb-44">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-12 gap-10 md:gap-16" data-reveal>
          <div className="md:col-span-4">
            <h2 className="eyebrow !text-primary mb-5">01. Our Mission</h2>
            <div className="hairline w-full"></div>
          </div>
          <div className="md:col-span-8">
            <p className="font-headline text-[1.6rem] md:text-5xl italic leading-[1.25] tracking-[-0.025em] text-on-surface mb-12">
              Innovation is not a destination, but a sequence of whispers, failures, and sudden illuminations. 
            </p>
            <div className="font-headline text-lg md:text-xl leading-[1.75] text-on-surface/70 space-y-8">
              <p>
                At Chronicles of Innovation, we serve as the modern archivists of the human spirit, so the next generation knows what it is capable of. Our purpose transcends mere reporting; we exist to deconstruct the anatomy of progress. Every monumental shift in technology, culture, and science begins with a singular spark, an idea that defies the gravity of the status quo.
              </p>
              <p>
                Because here is what we know to be true: human ingenuity has never belonged to one place, one century, or one kind of person. It never did. The breakthroughs that built the modern world came from everywhere. Some you already know. Many you don't. Yet.
              </p>
              <p>
                We treat these stories with the gravity of a historical artifact. By blending rigorous technical verification with cinematic storytelling, we create a record that doesn't just inform the present, but inspires the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Research Process */}
      <section className="px-5 md:px-12 py-20 md:py-40 bg-surface-container-low mb-24 md:mb-44">
        <div className="max-w-[1400px] mx-auto" data-reveal>
          <div className="mb-20 text-center">
            <h2 className="eyebrow mb-5">Methodology</h2>
            <h3 className="font-headline text-4xl md:text-7xl tracking-[-0.035em]">The Research Process</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 card-glass rounded-sm relative overflow-hidden">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 0"}}>archive</span>
                <span className="font-label text-[11px] tracking-[0.18em] text-on-surface/40">STAGE 01</span>
              </div>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mb-4">Archival Excavation</h4>
              <p className="text-on-surface/60 text-[17px] leading-relaxed">We dig through blueprints, early patents, and forgotten journals to find the raw DNA of an invention.</p>
            </div>
            
            <div className="group p-10 card-glass rounded-sm relative overflow-hidden">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{fontVariationSettings: "'FILL' 0"}}>verified</span>
                <span className="font-label text-[11px] tracking-[0.18em] text-on-surface/40">STAGE 02</span>
              </div>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mb-4">Innovation Verification</h4>
              <p className="text-on-surface/60 text-[17px] leading-relaxed">Our team of researchers validates the feasibility and impact of the technology through rigorous peer review.</p>
            </div>
            
            <div className="group p-10 card-glass rounded-sm relative overflow-hidden">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 0"}}>movie</span>
                <span className="font-label text-[11px] tracking-[0.18em] text-on-surface/40">STAGE 03</span>
              </div>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mb-4">Cinematic Rendering</h4>
              <p className="text-on-surface/60 text-[17px] leading-relaxed">Translating dry data into a visual narrative that captures the emotional weight of the breakthrough.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Minds Behind */}
      <section className="px-5 md:px-12 mb-24 md:mb-44">
        <div className="max-w-[1400px] mx-auto" data-reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <h2 className="font-headline text-5xl md:text-6xl tracking-[-0.035em] max-w-md leading-[1.05]">The Minds Behind the Archive</h2>
            <p className="eyebrow !text-on-surface/50 pb-2">Curators of Human Potential</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-surface-container-highest relative ring-1 ring-white/10 ">
                <Image src="/avatar.png" alt="Portrait of Tolu Adetuyi, Executive Curator" fill className="object-cover saturate-[.5] group-hover:saturate-100 group-hover:scale-105 transition-all duration-[900ms] ease-[var(--ease-spring)]" />
              </div>
              <span className="eyebrow !text-[10px]">The Visionary</span>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mt-2 mb-1">Tolu Adetuyi</h4>
              <p className="text-sm text-on-surface/50">Executive Curator</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-surface-container-highest relative ring-1 ring-white/10 ">
                <Image src="/isaiah_matchbg.png" alt="Portrait of Isaiah Emmanuel, Editorial Lead" fill className="object-cover object-top saturate-[.5] group-hover:saturate-100 group-hover:scale-105 transition-all duration-[900ms] ease-[var(--ease-spring)]" />
              </div>
              <span className="eyebrow !text-[10px]">The Scribe</span>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mt-2 mb-1">Isaiah Emmanuel</h4>
              <p className="text-sm text-on-surface/50">Editorial Lead</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-6 bg-surface-container-highest relative ring-1 ring-white/10 ">
                <Image src="/john_bassey.png" alt="Portrait of John Bassey, Visual Director" fill className="object-cover saturate-[.5] group-hover:saturate-100 group-hover:scale-105 transition-all duration-[900ms] ease-[var(--ease-spring)]" />
              </div>
              <span className="eyebrow !text-[10px]">The Lens</span>
              <h4 className="font-headline text-3xl tracking-[-0.02em] mt-2 mb-1">John Bassey</h4>
              <p className="text-sm text-on-surface/50">Visual Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 md:px-12 py-32 md:py-44 overflow-hidden">
        <div className="absolute inset-0 spotlight-gold pointer-events-none" aria-hidden="true"></div>
        <div className="relative max-w-4xl mx-auto text-center" data-reveal>
          <h2 className="font-headline text-4xl md:text-6xl tracking-[-0.035em] mb-8 leading-[1.05]">Witness the evolution of the future.</h2>
          <p className="text-on-surface/60 mb-12 text-lg md:text-xl">Be among the first inside the archive receiving our deep-dive dossiers on the world's most critical innovations.</p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
