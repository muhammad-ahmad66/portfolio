"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Share2 } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ShareMenu } from "@/components/ui/share-menu";
import { navLinks } from "@/data/links/nav-links";
import { socialLinks } from "@/data/links/social-links";
import { legalLinks } from "@/data/links/legal-links";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main row */}
        <div className="py-12 flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-16">

          {/* Brand */}
          <div className="shrink-0 space-y-4 max-w-xs">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-stack developer &amp; WordPress specialist building fast,
              clean digital products.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary-500 hover:text-primary-400 transition-colors"
            >
              Start a project
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Nav links */}
          <div className="flex-1 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="shrink-0 space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Connect
            </p>
            <div className="flex items-center flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  title={s.name}
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-border/60 text-muted-foreground hover:text-primary-500 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
              <div className="relative">
                <button
                  onClick={() => setShowShareMenu(!showShareMenu)}
                  aria-label="Share portfolio"
                  className="w-9 h-9 rounded-xl flex items-center justify-center border border-border/60 text-muted-foreground hover:text-primary-500 hover:border-primary-500/40 hover:bg-primary-500/5 transition-all duration-200"
                >
                  <Share2 className="w-4 h-4" />
                </button>
                <ShareMenu isOpen={showShareMenu} onClose={() => setShowShareMenu(false)} />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Muhammad Ahmad · All rights reserved.
          </p>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/8 border border-primary-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            <span className="text-xs font-medium text-primary-500">Available for work</span>
          </div>

          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
