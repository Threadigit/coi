import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section: Cinematic Asymmetry */}
      <section className="px-6 md:px-12 pt-32 mb-32 relative overflow-hidden">
        <div className="blueprint-grid-radial absolute inset-0 -z-10 opacity-40"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-12 lg:gap-16">
          <div className="md:w-1/2 lg:w-5/12">
            <p className="font-label text-secondary uppercase tracking-[0.2em] text-xs mb-8">Volume I: The Manifesto</p>
            <h1 className="font-headline text-5xl md:text-7xl leading-tight tracking-tighter text-on-surface">Documenting the <span className="italic text-primary">Sparks</span> of Human Progress</h1>
          </div>
          <div className="md:w-1/2 lg:w-7/12 h-[500px] overflow-hidden rounded-xl bg-surface-container-low relative w-full">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKj3IxWHcvVkLbHXjkValIk3MmQyXm9SLL_Du7D8CEDtXlnRrZZ19sgUzR-IpI0ACm1PGQ7zTt02I9AFcGXmVbwjL1ebBG2YKFTZR7JNDDevUe5bHxY_TKFYXmyuX8IIjIg9yXDhbSOMElLPEmTE4SNR0xTD8eSZ7edobORptS6OP4LUvXtHuu-8AGW3BDQM1GxGHl-hzufeCGl5RdRx6Xy3w2fSSI3izkIJtkvte5Qb0kAV7Hdck8PcKdb2rRg2pe_0Fyihjcrw" 
              alt="Data particles" 
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-60" 
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="px-6 md:px-12 mb-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <h2 className="font-label uppercase tracking-widest text-xs text-outline mb-4">01 — Our Mission</h2>
            <div className="h-px bg-outline-variant/20 w-full"></div>
          </div>
          <div className="md:col-span-8">
            <p className="font-headline text-3xl italic leading-relaxed text-on-surface-variant mb-12">
              Innovation is not a destination, but a sequence of whispers, failures, and sudden illuminations. 
            </p>
            <div className="font-headline text-xl leading-loose text-on-surface/80 space-y-8">
              <p>
                At Chronicles of Innovation, we serve as the modern archivists of the human spirit. Our purpose transcends mere reporting; we exist to deconstruct the anatomy of progress. Every monumental shift in technology, culture, and science begins with a singular spark—an idea that defies the gravity of the status quo.
              </p>
              <p>
                We treat every story with the gravity of a historical artifact. By blending rigorous technical verification with cinematic storytelling, we create a record that doesn't just inform the present, but inspires the future. We believe that by understanding the "How" of the past, we can better navigate the "What" of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Research Process */}
      <section className="px-6 md:px-12 py-32 bg-surface-container-low mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="font-label uppercase tracking-[0.3em] text-xs text-secondary mb-4">Methodology</h2>
            <h3 className="font-headline text-5xl">The Research Process</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-10 bg-surface-container-high rounded-lg hover:bg-surface-bright/20 transition-all duration-500 relative">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 0"}}>archive</span>
                <span className="font-label text-xs text-outline-variant">STAGE 01</span>
              </div>
              <h4 className="font-headline text-2xl mb-4">Archival Excavation</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">We dig through blueprints, early patents, and forgotten journals to find the raw DNA of an invention.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
            
            <div className="group p-10 bg-surface-container-high rounded-lg hover:bg-surface-bright/20 transition-all duration-500 relative">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-secondary" style={{fontVariationSettings: "'FILL' 0"}}>verified</span>
                <span className="font-label text-xs text-outline-variant">STAGE 02</span>
              </div>
              <h4 className="font-headline text-2xl mb-4">Innovation Verification</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">Our team of researchers validates the feasibility and impact of the technology through rigorous peer review.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all duration-700"></div>
            </div>
            
            <div className="group p-10 bg-surface-container-high rounded-lg hover:bg-surface-bright/20 transition-all duration-500 relative">
              <div className="mb-12 flex justify-between items-start">
                <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 0"}}>movie</span>
                <span className="font-label text-xs text-outline-variant">STAGE 03</span>
              </div>
              <h4 className="font-headline text-2xl mb-4">Cinematic Rendering</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">Translating dry data into a visual narrative that captures the emotional weight of the breakthrough.</p>
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Minds Behind */}
      <section className="px-6 md:px-12 mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-headline text-5xl max-w-md">The Minds Behind the Archive</h2>
            <p className="font-label uppercase tracking-widest text-xs text-outline pb-2">Curators of Human Potential</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container-highest relative">
                <Image src="/avatar.png" alt="Director" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <span className="font-label text-[10px] text-secondary uppercase tracking-[0.2em]">The Visionary</span>
              <h4 className="font-headline text-2xl mt-2 mb-1">Tolu Adetuyi</h4>
              <p className="font-body text-xs text-outline uppercase tracking-widest">Executive Curator</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container-highest relative">
                <Image src="/isaiah.jpg" alt="Editorial Lead" fill className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <span className="font-label text-[10px] text-secondary uppercase tracking-[0.2em]">The Scribe</span>
              <h4 className="font-headline text-2xl mt-2 mb-1">Isaiah Emmanuel</h4>
              <p className="font-body text-xs text-outline uppercase tracking-widest">Editorial Lead</p>
            </div>
            <div className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-lg mb-6 bg-surface-container relative flex items-center justify-center group-hover:bg-surface-container-highest transition-colors duration-500 border border-transparent group-hover:border-primary/20">
                <span className="material-symbols-outlined text-8xl text-slate-700 group-hover:text-primary transition-colors duration-500" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
              </div>
              <span className="font-label text-[10px] text-secondary uppercase tracking-[0.2em]">The Lens</span>
              <h4 className="font-headline text-2xl mt-2 mb-1">John Terry</h4>
              <p className="font-body text-xs text-outline uppercase tracking-widest">Visual Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 md:px-12 py-32 border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl mb-8 leading-tight">Witness the evolution of the future.</h2>
          <p className="font-body text-on-surface-variant mb-12 text-lg">Join 50,000+ subscribers receiving our deep-dive dossiers on the world's most critical innovations.</p>
          <form className="flex flex-col md:flex-row gap-4 justify-center">
            <input className="bg-surface-container border-none text-xs font-label tracking-widest px-8 py-4 w-full md:w-80 rounded-sm focus:ring-1 focus:ring-primary outline-none text-on-surface placeholder:text-slate-500" placeholder="ENTER YOUR EMAIL" type="email" />
            <button type="button" className="bg-gradient-to-br from-primary to-primary-container text-on-primary font-label text-xs font-bold tracking-[0.2em] px-12 py-4 rounded-sm uppercase hover:scale-105 transition-transform">SUBSCRIBE</button>
          </form>
        </div>
      </section>
    </div>
  );
}
