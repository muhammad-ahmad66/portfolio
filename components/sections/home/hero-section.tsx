'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button-component';
import { Typography } from '@/components/ui/typography';
import { IconList } from '@/components/ui/icon-list';
import { BadgeButton } from '@/components/ui/badge-button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BadgeHeading } from '@/components/ui/badge-heading';
import { wordpressTech, devTech } from '@/data/home/tech-stack';
import { trustIndicators } from '@/data/home/truest-indicators';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const focusPoints = [
    'Fractional partner for startups & studios',
    'WordPress + Next.js ecosystems',
    'Calm delivery, async friendly',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <BadgeHeading
              label="Trusted by 50+ businesses worldwide"
              icon={<Sparkles className="w-4 h-4 text-primary-500" />}
            />

            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Typography variant="h1" className="leading-tight">
                Build calm,
                <span className="relative inline-block px-2">
                  <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    high-performing
                  </span>
                  <span className="absolute bottom-1 left-1/4 right-1/4 h-2 bg-primary-500/15 rounded-full blur-sm" />
                </span>
                experiences that convert.
              </Typography>

              <Typography variant="lead" className="max-w-xl">
                Fractional partner for founders and teams who need modern
                WordPress + Next.js ecosystems, thoughtful brand systems, and
                clear communication every step of the way.
              </Typography>

              <div className="grid sm:grid-cols-3 gap-3">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3 text-sm text-muted-foreground"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="ghost" size="lg" className="group">
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div
              className={`flex justify-center transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <IconList items={trustIndicators} variant="custom" />
            </div>
          </div>

          {/* Right Column */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative rounded-[36px] overflow-hidden border border-border/70 bg-card/80 aspect-[4/3] shadow-2xl group">
                  <Image
                    src="/images/my-development-workspace-landscape.webp"
                    alt="Modern workspace"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative rounded-[30px] overflow-hidden border border-border shadow-2xl group h-64">
                  <Image
                    src="/images/my-development-workspace-potrait.webp"
                    alt="Studio portrait"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="relative rounded-[30px] overflow-hidden border border-border shadow-2xl group h-64">
                  <Image
                    src="/images/project-design-visual-landscape.webp"
                    alt="Design board"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="absolute -bottom-8 lg:-bottom-10 left-6 right-6 rounded-3xl border border-border/70 bg-background/90 backdrop-blur-xl shadow-lg p-5 flex flex-col gap-2">
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Currently crafting
                </p>
                <p className="text-sm font-semibold text-foreground">
                  WordPress + Next.js membership experience
                </p>
                <span className="text-xs text-muted-foreground">
                  Live design systems, async sprints, performance budgets locked
                  in.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div
          className={`mt-20 pt-12 border-t border-border/50 space-y-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          {/* WordPress Technologies */}
          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              WordPress Expertise
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {wordpressTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="card"
                />
              ))}
            </div>
          </div>

          {/* Modern Development Stack */}
          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              Modern Development Stack
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {devTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="minimal"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
