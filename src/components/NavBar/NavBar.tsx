'use client';

import { useState, useEffect } from 'react';

// ─── Types ───────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface NavBarProps {
  /** Visual theme. "dark" = glass/blur on dark bg. "light" = white/shadow on light bg. */
  theme?: 'dark' | 'light';
  /** Logo text displayed on the left. */
  logo?: string;
  /** Accent character appended to the logo (e.g. "."). */
  logoAccent?: string;
  /** Navigation links rendered in the centre. */
  links?: NavLink[];
  /** Label for the CTA button on the right. */
  ctaLabel?: string;
  /** href for the CTA button. */
  ctaHref?: string;
  /** Whether the nav background changes on scroll. */
  scrollEffect?: boolean;
  /** Scroll threshold in px before the effect triggers. Default 50. */
  scrollThreshold?: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

const DEFAULT_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// ─── Theme tokens ─────────────────────────────────────────────────────────────

const tokens = {
  dark: {
    nav: {
      base: 'bg-transparent',
      scrolled: 'bg-[#060912]/80 backdrop-blur-md border-b border-white/5',
    },
    logo: 'text-[#6366f1]',
    logoAccent: 'text-white/20',
    link: 'text-[#64748b] hover:text-[#e2e8f0]',
    cta: 'bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] hover:bg-[#6366f1] hover:text-white hover:border-[#6366f1]',
    menuToggle: 'text-[#64748b] hover:text-[#e2e8f0]',
    mobileMenu: 'bg-[#060912]/95 backdrop-blur-md border-t border-white/5',
    mobileLink: 'text-[#64748b] hover:text-[#e2e8f0]',
    mobileCta: 'bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1]',
  },
  light: {
    nav: {
      base: 'bg-transparent',
      scrolled: 'bg-[#f8f7f4]/90 backdrop-blur-md shadow-sm',
    },
    logo: 'text-[#0f0f0f]',
    logoAccent: 'text-[#5b50f0]',
    link: 'text-[#6b7280] hover:bg-black/5 hover:text-[#0f0f0f]',
    cta: '[background:linear-gradient(135deg,#5b50f0,#7c3aed)] text-white shadow-lg shadow-[#5b50f0]/25 hover:shadow-[#5b50f0]/40 hover:scale-[1.03]',
    menuToggle: 'text-[#6b7280] hover:text-[#0f0f0f]',
    mobileMenu: 'bg-[#f8f7f4]/95 backdrop-blur-md border-t border-black/5',
    mobileLink: 'text-[#6b7280] hover:text-[#0f0f0f]',
    mobileCta: '[background:linear-gradient(135deg,#5b50f0,#7c3aed)] text-white',
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export function NavBar({
  theme = 'light',
  logo = 'Fariha',
  logoAccent = '.',
  links = DEFAULT_LINKS,
  ctaLabel = 'Hire me',
  ctaHref = '#contact',
  scrollEffect = true,
  scrollThreshold = 50,
}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = tokens[theme];

  useEffect(() => {
    if (!scrollEffect) return;
    const handler = () => setScrolled(window.scrollY > scrollThreshold);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [scrollEffect, scrollThreshold]);

  const navPy = scrolled ? 'py-3' : 'py-5';
  const navBg = scrolled ? t.nav.scrolled : t.nav.base;

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${navPy} ${navBg}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className={`font-sans font-extrabold text-lg tracking-tight ${t.logo}`}>
          {logo}
          <span className={t.logoAccent}>{logoAccent}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1" role="list">
          {links.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`font-sans font-medium text-sm px-4 py-2 rounded-full transition-all duration-200 ${t.link}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={ctaHref}
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full font-sans font-bold text-sm transition-all duration-200 ${t.cta}`}
        >
          {ctaLabel}
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors ${t.menuToggle}`}
          onClick={() => setMenuOpen(prev => !prev)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M3 12h18M3 6h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className={`md:hidden mt-3 ${t.mobileMenu}`}>
          <ul className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4" role="list">
            {links.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-sans font-medium text-base transition-colors ${t.mobileLink}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={ctaHref}
                onClick={() => setMenuOpen(false)}
                className={`inline-block px-5 py-2.5 rounded-full font-sans font-bold text-sm ${t.mobileCta}`}
              >
                {ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
