'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path === '/archive' && pathname.startsWith('/episode'));
    if (isActive) {
      return "font-label uppercase tracking-widest text-xs text-primary border-b-2 border-primary pb-1";
    }
    return "font-label uppercase tracking-widest text-xs text-slate-400 hover:text-primary transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f1419]/70 backdrop-blur-xl flex justify-between items-center px-6 md:px-12 py-6 max-w-none">
      <Link href="/" className="flex items-center gap-4 group">
        <div className="w-10 h-10 relative overflow-hidden rounded-full transition-colors">
          <Image 
            src="/coi_logo_transparent.png" 
            alt="Chronicles of Innovation Logo" 
            fill 
            className="object-cover scale-[1.35]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }} 
          />
        </div>
        <div className="font-headline italic text-2xl text-primary hidden sm:block">Chronicles of Innovation</div>
      </Link>
      
      <div className="hidden md:flex items-center gap-10">
        <Link href="/" className={getLinkClass('/')}>Home</Link>
        <Link href="/archive" className={getLinkClass('/archive')}>Archive</Link>
        <Link href="/about" className={getLinkClass('/about')}>About</Link>
      </div>

      <div className="flex items-center gap-6">
        <form action="/archive" className="relative hidden lg:flex items-center">
          <Search className="text-primary absolute left-3 w-4 h-4" />
          <input 
            name="q"
            type="search" 
            placeholder="SEARCH ARCHIVE" 
            className="bg-surface-container-high/50 border-none rounded-none pl-10 pr-4 py-2 text-[10px] tracking-widest font-label focus:ring-1 focus:ring-primary/30 w-48 placeholder:text-slate-600 outline-none text-on-surface"
          />
        </form>
        <Link 
          href="https://www.youtube.com/@ChronicleofInnovation?sub_confirmation=1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 text-[10px] font-label font-bold tracking-[0.2em] uppercase rounded-sm hover:scale-95 transition-all duration-300">
            SUBSCRIBE
          </button>
        </Link>
        <button 
          className="md:hidden text-primary focus:outline-none ml-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f1419]/95 backdrop-blur-3xl border-t border-primary/20 flex flex-col items-center py-8 gap-8 md:hidden shadow-2xl h-screen">
          <Link href="/" className={getLinkClass('/')} onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link href="/archive" className={getLinkClass('/archive')} onClick={() => setIsMobileMenuOpen(false)}>Archive</Link>
          <Link href="/about" className={getLinkClass('/about')} onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          
          <form action="/archive" className="relative flex items-center w-3/4 max-w-sm mt-4">
            <Search className="text-primary absolute left-3 w-4 h-4" />
            <input 
              name="q"
              type="search" 
              placeholder="SEARCH ARCHIVE" 
              className="w-full bg-surface-container-high/50 border-none rounded-none pl-10 pr-4 py-3 text-[10px] tracking-widest font-label focus:ring-1 focus:ring-primary/30 placeholder:text-slate-600 outline-none text-on-surface"
            />
          </form>
        </div>
      )}
    </nav>
  );
}
