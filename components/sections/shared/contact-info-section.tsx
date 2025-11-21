'use client';

import { MessageCircle, ExternalLink } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import Link from 'next/link';
import { contactInfo } from '@/data/contact/contact-info';

export function ContactInfoSection() {
  return (
    <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-8 lg:p-12 space-y-8">
      <div className="space-y-2">
        <Typography variant="h3">Contact Information</Typography>
        <Typography variant="p" className="text-muted-foreground">
          Reach out through any of these channels. I typically respond within 24
          hours.
        </Typography>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {contactInfo.map((contact, index) => (
          <Link
            key={index}
            href={contact.href}
            target={contact.href.startsWith('http') ? '_blank' : undefined}
            rel={
              contact.href.startsWith('http')
                ? 'noopener noreferrer'
                : undefined
            }
            className="group"
          >
            <div className="rounded-2xl border border-border/60 bg-background/50 p-6 hover:border-primary-500/50 hover:bg-card/80 transition-all duration-300 space-y-3">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${contact.bgColor} ${contact.color} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                >
                  {contact.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm font-semibold text-foreground truncate">
                    {contact.value}
                  </p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-6 border-t border-border/60">
        <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Quick Response Time
              </p>
              <p className="text-xs text-muted-foreground">
                Average response: 4-6 hours
              </p>
            </div>
          </div>
          <Typography variant="p" className="text-sm text-muted-foreground">
            For urgent matters, WhatsApp is the fastest way to reach me. For
            detailed project discussions, email works best.
          </Typography>
        </div>
      </div>
    </div>
  );
}
