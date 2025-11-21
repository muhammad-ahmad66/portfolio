'use client';

import { Logo } from '@/components/ui/logo';
import { TextButton } from '@/components/ui/text-button';
import { BadgeButton } from '@/components/ui/badge-button';
import { Typography } from '@/components/ui/typography';
import { navLinks } from '@/data/links/nav-links';
import { socialLinks } from '@/data/links/social-links';
import { legalLinks } from '@/data/links/legal-links';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <Logo />

            <Typography variant="p" className="max-w-sm">
              Crafting exceptional digital experiences through innovative design
              and cutting-edge technology.
            </Typography>

            <TextButton href="/contact" variant="arrow">
              Start a project
            </TextButton>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-3">
            <Typography
              variant="h4"
              className="text-sm font-semibold mb-6 text-foreground"
            >
              Navigation
            </Typography>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <TextButton href={link.href} variant="default">
                    {link.name}
                  </TextButton>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="lg:col-span-4">
            <Typography
              variant="h4"
              className="text-sm font-semibold mb-6 text-foreground"
            >
              Connect
            </Typography>
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((social) => (
                <BadgeButton
                  key={social.name}
                  href={social.href}
                  icon={social.icon}
                  label={social.name}
                  variant="card"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Typography variant="small">
            © {currentYear} M. Ahmad. All rights reserved.
          </Typography>

          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <TextButton key={link.name} href={link.href} variant="default">
                {link.name}
              </TextButton>
            ))}
          </div>

          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-500/10 border border-primary-500/20">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse" />
            <Typography
              variant="small"
              className="text-xs font-medium text-primary-500"
            >
              Available for work
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
}
