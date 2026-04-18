'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/ui/logo';
import { ThemeToggle } from '@/components/theme-toggle';
import { CurrencySwitcher } from '@/components/ui/currency-switcher';
import { navLinks } from '@/data/links/nav-links';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-2 sm:px-4 pt-2 sm:pt-4">
        <div
          ref={mobileMenuRef}
          className={`w-full max-w-6xl transition-all duration-500 ${
            isScrolled
              ? 'rounded-xl sm:rounded-2xl border border-border/50 bg-background/85 shadow-lg shadow-black/10'
              : 'rounded-none border-transparent bg-transparent'
          }`}
          style={
            isScrolled
              ? {
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.05)',
                }
              : {}
          }
        >
          <nav className="flex items-center justify-between h-14 sm:h-16 px-3 sm:px-5 lg:px-6">
            {/* Logo */}
            <Logo />

            {/* Desktop Nav — centered */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-3.5 py-2 rounded-xl text-sm font-medium transition-all duration-200 group ${
                      active
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {/* Active background pill */}
                    {active && (
                      <span className="absolute inset-0 rounded-xl bg-primary-500/10 border border-primary-500/20" />
                    )}
                    {/* Hover background */}
                    {!active && (
                      <span className="absolute inset-0 rounded-xl bg-muted/0 group-hover:bg-muted/60 transition-colors duration-200" />
                    )}
                    <span className="relative">{item.name}</span>
                    {/* Active dot */}
                    {active && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              <CurrencySwitcher compact />
              <ThemeToggle />

              {/* CTA — desktop */}
              <Link
                href="/contact"
                className="hidden md:inline-flex group items-center gap-1.5 h-9 px-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-px"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                  boxShadow: '0 4px 14px rgba(59,130,246,0.3)',
                }}
              >
                <span>Let&apos;s Talk</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>

              {/* Hamburger — mobile */}
              <button
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                className="md:hidden w-8 h-8 flex items-center justify-center rounded-lg border border-border/60 bg-card/60 hover:bg-muted transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile menu drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-72 md:hidden flex flex-col transition-transform duration-300 ease-in-out bg-background/95 border-l border-border/60 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '-8px 0 32px rgba(0,0,0,0.15)',
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-border/40 shrink-0">
          <Logo />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-xl border border-border/60 hover:bg-muted transition-colors"
            aria-label="Close menu"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  active
                    ? 'bg-primary-500/10 border border-primary-500/20 text-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
              >
                <span>{item.name}</span>
                {active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Drawer footer */}
        <div className="px-4 pb-8 pt-4 border-t border-border/40 shrink-0">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-300"
            style={{
              backgroundImage: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
              boxShadow: '0 4px 14px rgba(59,130,246,0.25)',
            }}
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
