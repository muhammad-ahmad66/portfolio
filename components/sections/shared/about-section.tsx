"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button-component";
import {
  ArrowRight,
  Briefcase,
  Globe,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const highlights = [
  {
    icon: <Briefcase className="w-4 h-4" />,
    label: "Freelance + Private",
    description: "5 years shipping web products across both worlds.",
  },
  {
    icon: <Globe className="w-4 h-4" />,
    label: "Global Teams",
    description: "Collaborated with founders across 6 time zones.",
  },
];

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
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            background:
              "radial-gradient(circle at 70% 30%, rgba(236,72,153,0.18), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 space-y-12">
        <div
          className={`space-y-4 text-center sm:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
        >
          <BadgeHeading
            label="About Me"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Typography variant="h2" className="leading-tight">
              Crafting calm, high-performing digital experiences.
            </Typography>
            <div className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/80 px-4 py-3 w-full sm:w-auto justify-center sm:justify-start">
              <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center">
                <span className="text-primary-500 font-semibold tracking-wide">
                  5
                </span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
                  Years
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Hands-on building
                </p>
              </div>
            </div>
          </div>
          <Typography variant="lead" className="max-w-3xl">
            I&apos;m M. Ahmad, a full-stack developer blending freelancing
            freedom with private-company rigor. I focus on building dependable,
            conversion-ready products with React, Next.js, and WordPress—always
            with transparency, structured check-ins, and a calm delivery rhythm.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div
            className={`space-y-8 transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border px-5 py-4 bg-card/70 backdrop-blur-sm transition-all duration-300 ${
                    activeHighlight === index
                      ? "border-primary-500/50 shadow-lg shadow-primary-500/10"
                      : "border-border/70"
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
                Whether it&apos;s a freelance MVP sprint or iterating with an
                in-house team, I bring the same toolkit—clear roadmaps,
                component-driven design systems, and measurable outcomes.
              </Typography>
              <Typography variant="p" className="text-base">
                I obsess over the small touches: micro-interactions, purposeful
                typography, and resilient performance budgets. The result? Calm,
                premium experiences that feel effortless to use and easy to
                scale.
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
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="col-span-2 rounded-[32px] border border-border/70 bg-card/80 p-6 flex items-center gap-4 shadow-lg">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-xl font-semibold">
                50+
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Projects
                </p>
                <p className="text-lg font-semibold text-foreground">
                  Delivered with intention
                </p>
              </div>
            </div>

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
                src="/images/my-development-workspace-landscape.webp"
                alt="Product design board"
                width={600}
                height={480}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <Link
              href="/contact"
              className="col-span-2 rounded-[32px] border border-border/70 bg-background/70 backdrop-blur-lg p-6 flex flex-col sm:flex-row items-center gap-4 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="relative">
                <div
                  className="w-16 h-16 rounded-full border-2 border-primary-500 flex items-center justify-center animate-spin"
                  style={{ animationDuration: "6s" }}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white text-sm font-semibold">
                    Hi
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
                  Always in touch
                </p>
                <p className="text-base text-foreground">
                  Async updates via Loom, Notion, and Slack—twice a week.
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

