// src/components/contact/quick-contact-tab.tsx
'use client';

import { contactInfo } from '@/data/contact/contact-info';
import { ArrowUpRight, Sparkles, FileText, Briefcase } from 'lucide-react';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button-component';

export function QuickContactTab() {
  const handleContactClick = (method: (typeof contactInfo)[0]) => {
    window.open(method.href, '_blank', 'noopener,noreferrer');
  };

  // Filter out GitHub, LinkedIn, and Location
  const filteredContactInfo = contactInfo.filter(
    (method) => !['GitHub', 'LinkedIn', 'Location'].includes(method.label)
  );

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-500" />
          <Typography variant="h4">Choose Your Way to Connect</Typography>
        </div>
        <Typography variant="p" className="text-muted-foreground text-sm">
          Pick your preferred method and I'll respond as soon as possible
        </Typography>
      </div>

      {/* Contact Methods */}
      <div className="grid gap-3">
        {filteredContactInfo.map((method, index) => {
          return (
            <button
              key={index}
              onClick={() => handleContactClick(method)}
              className="group relative w-full p-4 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${method.bgColor} ${method.color} flex items-center justify-center shrink-0 transition-transform group-hover:scale-110`}
                >
                  {method.icon}
                </div>

                <div className="flex-1 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm">
                      {method.label}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-0.5">
                    {method.value}
                  </p>
                  {method.description && (
                    <p className="text-xs text-muted-foreground/70 mt-1">
                      {method.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </button>
          );
        })}
      </div>

      {/* Additional Actions */}
      <div className="grid grid-cols-2 gap-3">
        <a href="/cv" rel="noopener noreferrer">
          <Button variant="outline" size="md" className="w-full group">
            <FileText className="w-4 h-4 mr-2" />
            <span className="text-sm">View CV</span>
          </Button>
        </a>

        <a href="/portfolio" rel="noopener noreferrer">
          <Button variant="outline" size="md" className="w-full group">
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm">Portfolio</span>
          </Button>
        </a>
      </div>

      {/* Availability */}
      <div className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium">Available Now</span>
        </div>
        <p className="text-xs text-muted-foreground">
          I typically respond within 2-4 hours during business days
        </p>
      </div>
    </div>
  );
}
