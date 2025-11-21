'use client';

import { useEffect, useMemo, useState } from 'react';
import { BadgeHeading } from '@/components/ui/badge-heading';
import { Typography } from '@/components/ui/typography';
import { IconList } from '@/components/ui/icon-list';
import { Button } from '@/components/ui/button-component';
import {
  Compass,
  Layers,
  Brain,
  Rocket,
  ClipboardCheck,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import {
  processSteps,
  operatingPrinciples,
  valueProps,
} from '@/data/shared/process-data';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveStep((prev) => (prev + 1) % processSteps.length),
      6000
    );
    return () => clearInterval(interval);
  }, []);

  const activeArtifacts = useMemo(
    () => processSteps[activeStep]?.artifacts ?? [],
    [activeStep]
  );

  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background:
              'radial-gradient(circle at 70% 10%, rgba(14,165,233,0.15), transparent 55%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '46px 46px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <BadgeHeading
              label="Process"
              icon={<ClipboardCheck className="w-4 h-4 text-primary-500" />}
            />
            <Typography variant="h2" className="leading-tight">
              Lightweight sprints. Premium craft.
            </Typography>
            <Typography variant="lead" className="text-muted-foreground">
              Each phase feeds the next, so founders can follow progress at a
              glance while the build keeps moving.
            </Typography>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/70">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-muted-foreground">
                Weekly visibility, zero guesswork.
              </span>
            </div>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-5">
            <IconList items={operatingPrinciples} variant="custom" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {processSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <button
                  key={step.title}
                  type="button"
                  onMouseEnter={() => setActiveStep(index)}
                  onFocus={() => setActiveStep(index)}
                  className={`text-left rounded-3xl border px-6 py-5 transition-all duration-300 ${
                    isActive
                      ? 'border-primary-500/60 shadow-lg shadow-primary-500/10 bg-card'
                      : 'border-border bg-card/60 hover:border-border/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                    <span>{step.phase}</span>
                    <span className="flex items-center gap-2">
                      {step.icon}
                      Phase
                    </span>
                  </div>
                  <Typography variant="h3" className="text-xl mt-3 mb-2">
                    {step.title}
                  </Typography>
                  <Typography variant="p" className="text-sm">
                    {step.description}
                  </Typography>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {step.artifacts.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                          isActive
                            ? 'bg-primary-500/10 text-primary-500'
                            : 'bg-muted text-muted-foreground/80'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {step.artifacts.length > 2 && (
                      <span className="text-xs text-muted-foreground/70">
                        +{step.artifacts.length - 2}
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          <div className="space-y-6 rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-8 shadow-2xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground uppercase tracking-[0.2em]">
                  Current focus
                </p>
                <Typography variant="h3">
                  {processSteps[activeStep].title}
                </Typography>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 flex items-center justify-center text-primary-500">
                {processSteps[activeStep].icon}
              </div>
            </div>

            <div className="space-y-3">
              <Typography
                variant="small"
                className="uppercase tracking-[0.25em]"
              >
                Deliverables
              </Typography>
              <ul className="space-y-2">
                {activeArtifacts.map((artifact) => (
                  <li
                    key={artifact}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                    {artifact}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-border/50 bg-background/60 p-6 space-y-4">
              <Typography
                variant="small"
                className="uppercase tracking-[0.3em] text-primary-500"
              >
                Project Communication
              </Typography>
              <p className="text-base text-muted-foreground">
                We share progress via Loom, Figma, and Notion updates twice a
                week, so you never have to guess what is shipping next.
              </p>
              <Link href="/contact">
                <Button variant="ghost" size="sm" className="gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-6 flex flex-wrap gap-6 justify-between">
          {valueProps.map((stat) => (
            <div key={stat.label}>
              <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                {stat.label}
              </p>
              <p className="text-xl font-semibold text-foreground mt-1">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 -right-10 w-56 h-56 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary-500/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
