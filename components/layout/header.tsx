"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button-component";
import { TextButton } from "@/components/ui/text-button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Work", href: "/work" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : "bg-transparent"
      }`}
      style={{
        boxShadow: isScrolled
          ? "0 1px 3px 0 rgb(0 0 0 / 0.02), 0 1px 2px -1px rgb(0 0 0 / 0.02)"
          : "none",
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
              <Button variant="outline" size="md">
                Let's Talk
              </Button>
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
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/40`}
      >
        <div className="px-6 py-6 space-y-4">
          {navItems.map((item, index) => (
            <TextButton
              key={item.name}
              href={item.href}
              variant="default"
              className="block text-lg"
            >
              {item.name}
            </TextButton>
          ))}

          <div className="pt-4">
            <Button variant="primary" size="lg" className="w-full">
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
