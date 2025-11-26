'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Logo } from '@/components/ui/logo';
import { Button } from '@/components/ui/button-component';
import { TextButton } from '@/components/ui/text-button';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks } from '@/data/links/nav-links';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = navLinks;

  return (
    <header
      ref={mobileMenuRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/40'
          : 'bg-transparent'
      }`}
      style={{
        boxShadow: isScrolled
          ? '0 1px 3px 0 rgb(0 0 0 / 0.02), 0 1px 2px -1px rgb(0 0 0 / 0.02)'
          : 'none',
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <TextButton key={item.name} href={item.href} variant="underline">
                {item.name}
              </TextButton>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <a href="/contact">
                <button className="group flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-medium text-sm shadow-sm hover:shadow-md">
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Let&apos;s Talk</span>
                </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 pointer-events-none'
        } overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name} onClick={handleNavClick}>
              <TextButton
                href={item.href}
                variant="default"
                className="block text-lg"
              >
                {item.name}
              </TextButton>
            </div>
          ))}

          <div className="pt-4" onClick={handleNavClick}>
            <a href="/contact" className="w-full block">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 font-medium shadow-md">
                <MessageCircle className="w-5 h-5" />
                <span>Let&apos;s Talk</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
