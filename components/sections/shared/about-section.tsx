'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BadgeHeading } from '@/components/ui/badge-heading';
import { Typography } from '@/components/ui/typography';
import { Button } from '@/components/ui/button-component';
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { highlights } from '@/data/about/highlights';
import { GreetingCard } from '@/components/ui/greeting-card';
import { SpinningCircularBadge } from '@/components/ui/spinning-circular-badge';

export function AboutSection() {
  const [isVisible] = useState(true);
  const [activeHighlight, setActiveHighlight] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHighlight((prev) => (prev + 1) % highlights.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden py-12 md:py-16 ">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            background:
              'radial-gradient(circle at 70% 30%, rgba(236,72,153,0.18), transparent 60%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
        <div
          className={`space-y-4 text-center sm:text-left transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
        >
          <BadgeHeading
            label="About Me"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Typography variant="h2" className="leading-tight">
              WordPress and Next.js Developer Who Builds Websites That Rank and
              Convert.
            </Typography>
            {/* <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 w-full sm:w-auto justify-center sm:justify-start"> */}
            {/* <div className="w-12 h-12 rounded-full bg-primary-500/10 flex items-center justify-center">
                <span className="text-primary-500 font-semibold tracking-wide">
                  3+
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Years
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Crafting Websites & Web Apps
                </p>
              </div> */}
            {/* <SpinningCircularBadge /> */}
            {/* </div> */}
          </div>
          <Typography variant="lead" className="">
            I’m Muhammad Ahmad, a full-stack web developer specializing in
            WordPress, WooCommerce and Next.js. I help businesses get online
            with websites that load fast, rank on Google and turn visitors into
            paying customers.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border px-5 py-4 bg-card/70 backdrop-blur-sm transition-all duration-300 ${
                    activeHighlight === index
                      ? 'border-primary-500/50 shadow-lg shadow-primary-500/10'
                      : 'border-border/70'
                  }`}
                >
                  <div className="flex items-center gap-3 text-sm font-semibold text-foreground">
                    <span className="w-9 h-9 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                      {item.icon}
                    </span>
                    {item.label}
                  </div>
                  <p className="text-sm text-muted-foreground mt-3">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <Typography variant="p" className="text-base">
                Whether you need a custom WordPress website, a WooCommerce store
                or a Next.js web application, I deliver clean code,
                pixel-perfect design and on-time results. Every project comes
                with structured updates so you always know where things stand.
              </Typography>
              <Typography variant="p" className="text-base">
                I have worked with startups, agencies and established businesses
                across e-commerce, healthcare, hospitality, real estate and
                more. My focus is simple: build websites that look great,
                perform fast and help your business grow.
              </Typography>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <Button
                  variant="primary"
                  size="lg"
                  className="group inline-flex items-center gap-2 shadow-md hover:shadow-xl w-full sm:w-auto"
                >
                  <span>Contact Me</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/cv">
                <Button
                  variant="outline"
                  size="lg"
                  className="group inline-flex items-center gap-2 w-full sm:w-auto"
                >
                  <span>View CV</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          <div
            className={`relative grid grid-cols-2 gap-4 transition-all duration-700 delay-150 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="relative col-span-2 lg:col-span-1 rounded-[32px] overflow-hidden border border-border shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/my-development-workspace-potrait.webp"
                alt="Professional workspace portrait"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>

            <div className="relative col-span-2 lg:col-span-1 rounded-[32px] overflow-hidden border border-border shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/website-development-responsive-layout.jpg"
                alt="WordPress UI/UX design and development work"
                width={600}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <Link
              href="/contact"
              className="col-span-2 rounded-[32px] border border-border/70 bg-background/70 backdrop-blur-lg p-6 flex flex-col sm:flex-row items-center gap-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="relative flex-shrink-0 w-16 h-16">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary-500/15 to-secondary-500/15 blur-lg" />
                <div className="absolute -inset-[2px] border border-dashed border-primary-400/35 animate-blob" />
                <div className="absolute -inset-[2px] animate-[rotate-slow_10s_linear_infinite]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[3px] w-[5px] h-[5px] rounded-full bg-primary-400 shadow-[0_0_6px_2px_rgba(59,130,246,0.7)]" />
                </div>
                <div className="absolute -inset-[2px] animate-[rotate-slow_14s_linear_reverse_infinite]">
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[3px] w-[4px] h-[4px] rounded-full bg-secondary-400 shadow-[0_0_5px_2px_rgba(168,85,247,0.7)]" />
                </div>
                <div
                  className="absolute inset-[5px] rounded-full overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)' }}
                >
                  <Image
                    src="/images/muhammad-ahmad-wordpress-developer.png"
                    alt="Muhammad Ahmad"
                    width={56}
                    height={56}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Always Available
                </p>
                <p className="text-sm text-foreground">
                  Regular progress updates via Slack, WhatsApp or Google Meet so
                  your project stays on time and on budget.
                </p>
              </div>
              <div className="w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:border-primary-500 transition-colors">
                <MessageCircle className="w-5 h-5 text-muted-foreground group-hover:text-primary-500 transition-colors" />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute top-1/4 right-0 w-72 h-72 bg-secondary-500/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-primary-500/10 blur-3xl pointer-events-none" />
    </section>
  );
}
