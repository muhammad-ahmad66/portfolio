"use client";

import { cn } from "@/lib/utils";
import type { TechItem } from "@/data/home/tech-stack";

interface TechCarouselProps {
  items: TechItem[];
  direction?: "left" | "right";
  duration?: number;
  label?: string;
  className?: string;
}

export function TechCarousel({
  items,
  direction = "left",
  duration = 30,
  label,
  className,
}: TechCarouselProps) {
  const duplicated = [...items, ...items];

  return (
    <div className={cn("space-y-3", className)}>
      {label && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground/60 text-center">
          {label}
        </p>
      )}
      <div className="group relative overflow-hidden max-w-2xl mx-auto">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 z-10 bg-gradient-to-l from-background to-transparent" />

        <div
          className={cn(
            "flex gap-2.5 w-max",
            direction === "left" ? "animate-scroll" : "animate-scroll-reverse",
            "group-hover:[animation-play-state:paused]"
          )}
          style={{ animationDuration: `${duration}s` }}
        >
          {duplicated.map((tech, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border/60 dark:border-white/8 bg-card/60 dark:bg-white/[0.03] backdrop-blur-sm text-muted-foreground hover:text-foreground hover:border-primary-500/40 dark:hover:border-primary-500/30 hover:bg-accent/60 dark:hover:bg-white/[0.06] transition-colors duration-300 shrink-0 cursor-default select-none"
            >
              <span className="text-primary-500/70 group-hover:text-primary-500 transition-colors duration-300">
                {tech.icon}
              </span>
              <span className="text-xs font-medium whitespace-nowrap">
                {tech.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
