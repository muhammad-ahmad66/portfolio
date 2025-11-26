// src/components/sections/projects-cta-sidebar.tsx
'use client';

import { Typography } from '@/components/ui/typography';
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Star,
  Briefcase,
  Mail,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function ProjectsCtaSidebar() {
  const benefits = [
    'Custom web solutions',
    'Modern & responsive design',
    'SEO optimized',
    'Ongoing support',
  ];

  return (
    <div className="space-y-6 lg:sticky lg:top-24">
      {/* Main CTA Card */}
      <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl overflow-hidden shadow-2xl">
        {/* Premium Image */}
        <div className="relative h-56 overflow-hidden">
          <Image
            src="/images/project-design-visual-landscape.webp"
            alt="Premium web design showcase"
            fill
            className="object-cover"
            sizes="400px"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />

          {/* Floating Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg">
            <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            <span className="text-xs font-semibold text-gray-900">
              Premium Work
            </span>
          </div>

          {/* Bottom Info Badge */}
          <div className="absolute bottom-4 left-4 right-4">
            <div className="rounded-xl bg-black/40 backdrop-blur-md border border-white/10 p-3">
              <div className="flex items-center gap-2 text-white">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-medium">
                  50+ Projects Delivered
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 flex items-center justify-center text-primary-500">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <Typography variant="h3" className="text-xl">
                  Ready to Start?
                </Typography>
                <p className="text-xs text-muted-foreground">
                  Let's build something amazing
                </p>
              </div>
            </div>

            <Typography variant="p" className="text-sm text-muted-foreground">
              Whether you need a custom WordPress site, a modern web
              application, or a complete digital transformation, I'm here to
              help bring your vision to life.
            </Typography>
          </div>

          {/* Benefits List */}
          <div className="space-y-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3 pt-4 border-t border-border/50">
            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg group"
            >
              <Mail className="mr-2 h-4 w-4" />
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/work"
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl border-2 border-border/60 hover:border-foreground/50 hover:bg-accent transition-all duration-300 bg-background/50 text-foreground group"
            >
              <Briefcase className="mr-2 h-4 w-4" />
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Trust Info */}
          <div className="pt-4 border-t border-border/50">
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="text-center p-2 rounded-lg bg-muted/50">
                <div className="font-bold text-foreground mb-1">100%</div>
                <div className="text-muted-foreground">Satisfaction</div>
              </div>
              <div className="text-center p-2 rounded-lg bg-muted/50">
                <div className="font-bold text-foreground mb-1">&lt;24h</div>
                <div className="text-muted-foreground">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
