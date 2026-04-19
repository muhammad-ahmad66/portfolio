"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkles, ArrowRight } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import {
  portfolioItems,
  categoryColors,
  type PortfolioCategory,
} from "@/data/work/portfolio";

export function PortfolioWindow() {
  return (
    <section className="w-full">
      <div
        id="portfolio-window"
        className="relative overflow-hidden rounded-[32px] border border-border/50 dark:border-white/8 bg-card/40 dark:bg-[#0d0d10] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:shadow-[0_24px_80px_rgba(0,0,0,0.6)] sm:p-10 mt-6 md:mt-12"
      >
        {/* Light mode top sheen */}
        <div className="pointer-events-none absolute inset-0 dark:hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.55),_transparent_60%)]" />
          <div className="absolute inset-y-0 left-1/4 w-1/2 bg-gradient-to-b from-primary/8 via-transparent to-secondary/8 blur-3xl" />
        </div>
        {/* Dark mode ambient glows */}
        <div className="pointer-events-none absolute inset-0 hidden dark:block">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-48 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary-500/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-500/6 rounded-full blur-3xl" />
        </div>

        <div className="relative flex flex-col gap-10">
          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 dark:border-primary-500/30 bg-background/60 dark:bg-primary-500/8 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-foreground/70 dark:text-primary-400 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary-400" />
              Portfolio
            </div>
            <Typography variant="h2" className="text-foreground">
              My Portfolio - Recent Work Highlights
            </Typography>
            <Typography
              variant="lead"
              className="max-w-3xl text-muted-foreground"
            >
              A curated window into the bespoke digital products, brand
              websites, and immersive experiences crafted for ambitious teams
              worldwide.
            </Typography>
          </header>

          <div className="space-y-10">
            {/* Launched Experiences */}
            <div className="space-y-6">
              <div className="flex flex-col gap-1">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground/80">
                  Launched Experiences
                </p>
                <p className="text-sm text-muted-foreground">
                  Live builds deployed for hospitality, tech, lifestyle, and
                  wellness brands.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {portfolioItems
                  .filter((item) => !item.inProgress)
                  .map((item, index) => (
                    <PortfolioLinkCard
                      key={`live-${item.url}`}
                      url={item.url}
                      categories={item.categories}
                      inProgress={false}
                      index={index + 1}
                    />
                  ))}
              </div>
            </div>

            {/* In Refinement */}
            {portfolioItems.some((item) => item.inProgress) && (
              <div className="space-y-6">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground/80">
                    In Refinement
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Currently in design polish, QA, or pre-launch collaboration.
                  </p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  {portfolioItems
                    .filter((item) => item.inProgress)
                    .map((item, index) => (
                      <PortfolioLinkCard
                        key={`progress-${item.url}`}
                        url={item.url}
                        categories={item.categories}
                        inProgress={true}
                        index={index + 1}
                      />
                    ))}
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 border-t border-border/50 dark:border-white/8 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground/80">
                Ready to collaborate?
              </p>
              <p className="text-base text-muted-foreground">
                Let&apos;s discuss your next launch and craft something
                remarkable together.
              </p>
            </div>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg shadow-primary/40 group"
            >
              <span>Contact Me</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

type PortfolioLinkCardProps = {
  url: string;
  categories: PortfolioCategory[];
  inProgress: boolean;
  index: number;
};

function PortfolioLinkCard({
  url,
  categories,
  inProgress,
  index,
}: PortfolioLinkCardProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      prefetch={false}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-2xl border px-5 py-4 transition-all duration-300 sm:px-6 sm:py-5",
        inProgress
          ? "border-border/40 dark:border-white/6 bg-muted/20 dark:bg-white/[0.02] hover:border-border dark:hover:border-white/15 hover:bg-muted/40 dark:hover:bg-white/[0.05]"
          : "border-border/60 dark:border-white/10 bg-card/60 dark:bg-white/[0.04] hover:border-foreground/30 dark:hover:border-primary-500/40 hover:bg-card dark:hover:bg-white/[0.07] dark:hover:shadow-[0_0_20px_rgba(61,94,255,0.08)]"
      )}
      aria-label={`Open ${url}`}
    >
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground/70">
          {inProgress ? "In Progress" : "Live"} •{" "}
          {String(index).padStart(2, "0")}
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 dark:border-white/8 bg-background/50 dark:bg-white/[0.04] text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground dark:group-hover:border-primary-500/40 dark:group-hover:text-primary-400">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
      <div className="space-y-3">
        <div className="space-y-1">
          <p className="text-lg font-medium text-foreground">
            {formatLinkLabel(url)}
          </p>
          <p className="text-sm text-muted-foreground/80">{url}</p>
        </div>
        {/* Category Badges */}
        <div className="flex flex-wrap gap-1.5">
          {categories.map((category) => (
            <span
              key={category}
              className={cn(
                "px-2 py-0.5 text-[10px] font-medium rounded-full border",
                categoryColors[category]
              )}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

function formatLinkLabel(url: string) {
  try {
    const parsed = new URL(url);
    const domain = parsed.hostname.replace(/^www\./, "");
    const path =
      parsed.pathname === "/" ? "" : parsed.pathname.replace(/\/$/, "");
    return `${domain}${path}`;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}
