'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, Menu, X } from 'lucide-react';
import Image from 'next/image';

const links = [
  { href: '/', label: 'Home' },
  { href: '/timeline', label: 'Chronicle' },
  { href: '/archive', label: 'Archive' },
  { href: '/about', label: 'About' },
];

const SUBSCRIBE_URL = 'https://www.youtube.com/@ChronicleofInnovation?sub_confirmation=1';

export default function Header() {
  const pathname = usePathname();
  // The menu counts as open only on the route it was opened from, so any
  // navigation (links, back button) closes it without an effect.
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock page scroll and allow Escape while the mobile sheet is open.
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuPath(null);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const isActive = (path: string) =>
    pathname === path || (path === '/archive' && pathname.startsWith('/episode'));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 md:px-8 pt-[max(0.75rem,env(safe-area-inset-top))] md:pt-5 pointer-events-none">
      <nav
        aria-label="Primary"
        className={`pointer-events-auto mx-auto flex max-w-[1400px] items-center justify-between rounded-full py-2 pl-3 pr-2 md:pl-4 transition-[background,box-shadow,border-color,backdrop-filter] duration-500 ${
          scrolled || menuOpen
            ? 'glass-strong'
            : 'bg-transparent border border-transparent'
        }`}
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Chronicles of Innovation, home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15 transition-transform duration-500 group-hover:scale-105">
            <Image
              src="/coi_logo_transparent.png"
              alt="Chronicles of Innovation Logo"
              fill
              sizes="40px"
              className="object-cover scale-[1.35]"
            />
          </span>
          <span className="font-headline italic text-[1.35rem] leading-none text-primary hidden lg:block tracking-[-0.01em]">
            Chronicles of Innovation
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 rounded-full bg-white/[0.06] p-1 ring-1 ring-white/[0.07]">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`block rounded-full px-5 py-2 text-[13px] font-medium tracking-[0.01em] transition-all duration-300 ${
                  isActive(l.href)
                    ? 'bg-white/[0.14] text-on-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]'
                    : 'text-on-surface/60 hover:text-on-surface'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 md:gap-3">
          <form action="/archive" role="search" className="relative hidden lg:block group/search">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface/50 transition-colors group-focus-within/search:text-primary" />
            <input
              name="q"
              type="search"
              aria-label="Search the archive"
              placeholder="Search"
              className="h-10 w-36 rounded-full bg-white/[0.07] pl-10 pr-4 text-[13px] text-on-surface outline-none ring-1 ring-white/[0.07] transition-all duration-500 placeholder:text-on-surface/40 focus:w-60 focus:bg-white/[0.1] focus:ring-primary/50"
            />
          </form>
          <Link
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !py-2.5 !px-5 !text-[12px]"
          >
            Subscribe
          </Link>
          <button
            type="button"
            className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-white/[0.08] text-on-surface ring-1 ring-white/10 transition-colors hover:bg-white/15"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(menuOpen ? null : pathname)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile sheet */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="pointer-events-auto fixed inset-0 -z-10 md:hidden glass-strong !rounded-none !border-0 pt-28 px-8"
      >
        <ul className="flex flex-col">
          {links.map((l, i) => (
            <li key={l.href} className="border-b border-white/[0.08]">
              <Link
                href={l.href}
                onClick={() => setMenuPath(null)}
                aria-current={isActive(l.href) ? 'page' : undefined}
                style={{ animationDelay: `${i * 60}ms` }}
                className={`rise block py-5 font-headline text-4xl tracking-[-0.02em] ${
                  isActive(l.href) ? 'text-primary italic' : 'text-on-surface'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <form action="/archive" role="search" className="relative mt-8">
          <Search aria-hidden="true" className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface/50" />
          <input
            name="q"
            type="search"
            aria-label="Search the archive"
            placeholder="Search the archive"
            className="h-12 w-full rounded-full bg-white/[0.08] pl-11 pr-4 text-base text-on-surface outline-none ring-1 ring-white/10 placeholder:text-on-surface/40 focus:ring-primary/50"
          />
        </form>
      </div>
    </header>
  );
}
