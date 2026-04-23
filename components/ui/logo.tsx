"use client";

import Link from "next/link";
import { LogoIcon } from "@/components/ui/logo-icon";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center gap-2.5 ${className}`}
    >
      {/* ── Icon Mark ── */}
      <LogoIcon size={36} animated />

      {/* ── Wordmark ── */}
      <div className="flex flex-col gap-[3px]">
      <div className="flex items-baseline gap-px">
        {/* "M" — gradient */}
        <span className="text-[20px] font-bold tracking-wide leading-none bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent uppercase">
          M
        </span>

        {/* Middle dot — pulses */}
        <span
          className="mx-0.5 text-lg font-bold leading-none bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent animate-pulse"
          style={{ animationDuration: "2.8s" }}
        >
          ·
        </span>

        {/* "AHMAD" — letter-by-letter hover reveal */}
        <span className="flex items-baseline text-[17px] font-medium tracking-wide leading-none uppercase">
          {["A", "H", "M", "A", "D"].map((letter, i) => (
            <span
              key={i}
              className="inline-block transition-all duration-300 text-foreground/85 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-primary-500 group-hover:to-secondary-500 group-hover:bg-clip-text group-hover:-translate-y-0.5"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {letter}
            </span>
          ))}
        </span>
      </div>

        {/* Animated underline — growing business indicator */}
        <div className="relative h-[2px] rounded-full overflow-hidden">
          {/* Base dim track */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/15 via-secondary-500/20 to-primary-500/15 rounded-full" />
          {/* Primary traveling spark */}
          <div
            className="absolute inset-0 rounded-full animate-shimmer bg-gradient-to-r from-transparent via-primary-400 to-transparent"
            style={{ backgroundSize: "55% 100%" }}
          />
          {/* Secondary spark — offset, purple tint */}
          <div
            className="absolute inset-0 rounded-full animate-shimmer bg-gradient-to-r from-transparent via-secondary-400/70 to-transparent"
            style={{ backgroundSize: "40% 100%", animationDelay: "1.4s" }}
          />
        </div>
      </div>
    </Link>
  );
}
