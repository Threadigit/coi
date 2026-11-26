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
  const [hidden, setHidden] = useState(false);
  const menuOpen = menuPath === pathname;

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > last && y > 240);
      last = y;
    };
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
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border-color,transform] duration-500 ${hidden && !menuOpen ? '-translate-y-full' : ''} ${
        scrolled || menuOpen
          ? 'bg-[#0f1419]/90 backdrop-blur-md border-b border-white/10'
          : 'bg-gradient-to-b from-black/60 to-transparent border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-[4.25rem] md:h-20 max-w-[1600px] items-center justify-between gap-6 px-5 md:px-12 pt-[env(safe-area-inset-top)] box-content"
      >
        <Link href="/" className="group flex items-center gap-3.5" aria-label="Chronicles of Innovation, home">
          <span className="relative block h-10 w-10 overflow-hidden rounded-full ring-1 ring-white/15">
            <Image
              src="/coi_logo_transparent.png"
              alt="Chronicles of Innovation Logo"
              fill
              sizes="40px"
              className="object-cover scale-[1.35]"
            />
          </span>
          <span className="font-headline italic text-[1.35rem] leading-none text-primary hidden sm:block tracking-[-0.01em]">
            Chronicles of Innovation
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-9 ml-auto">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                aria-current={isActive(l.href) ? 'page' : undefined}
                className={`relative block py-3 text-[12px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-primary after:transition-transform after:duration-500 ${
                  isActive(l.href)
                    ? 'text-on-surface after:scale-x-100'
                    : 'text-on-surface/60 hover:text-on-surface after:scale-x-0 hover:after:scale-x-100'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:gap-5">
          <form action="/archive" role="search" className="relative hidden lg:block group/search">
            <Search aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface/60 transition-colors group-focus-within/search:text-primary" />
            <input
              name="q"
              type="search"
              aria-label="Search the archive"
              placeholder="Search"
              className="h-10 w-28 border-b border-white/25 bg-transparent pl-7 pr-2 text-[13px] text-on-surface outline-none transition-all duration-500 placeholder:text-on-surface/50 focus:w-52 focus:border-primary"
            />
          </form>
          <Link
            href={SUBSCRIBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary !min-h-[2.75rem] !py-2.5 !px-5 !text-[11px]"
          >
            Subscribe
          </Link>
          <button
            type="button"
            className="md:hidden grid h-11 w-11 place-items-center text-on-surface"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(menuOpen ? null : pathname)}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

    </header>

    {/* Mobile menu: a sibling of the header, so the header's slide transform can never become its containing block */}
    <div
      id="mobile-menu"
      hidden={!menuOpen}
      className="fixed inset-0 z-40 md:hidden overflow-y-auto bg-[#0a0f14] pt-[calc(6.5rem+env(safe-area-inset-top))] px-6 pb-[max(2rem,env(safe-area-inset-bottom))]"
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
        <Search aria-hidden="true" className="pointer-events-none absolute left-0 top-1/2 h-4 w-4 -translate-y-1/2 text-on-surface/60" />
        <input
          name="q"
          type="search"
          aria-label="Search the archive"
          placeholder="Search the archive"
          className="h-12 w-full border-b border-white/25 bg-transparent pl-9 pr-4 text-base text-on-surface outline-none placeholder:text-on-surface/50 focus:border-primary"
        />
      </form>
    </div>
    </>
  );
}
