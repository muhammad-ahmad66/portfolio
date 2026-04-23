"use client";

import { useEffect, useState } from "react";
import { LogoIcon } from "@/components/ui/logo-icon";

export function LogoLoader() {
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2000);
    const hideTimer = setTimeout(() => setIsVisible(false), 2500);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-primary-500/8 blur-[100px]" />
        <div className="absolute -bottom-32 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary-500/8 blur-[100px]" />
      </div>

      {/* Center content */}
      <div className="relative flex flex-col items-center gap-8">

        {/* ── Large Icon Mark ── */}
        <div style={{ animation: "fade-up 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s both" }}>
          <LogoIcon size={80} animated />
        </div>

        {/* ── Wordmark ── */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-baseline gap-1">
            {/* M */}
            <span
              className="text-4xl font-bold tracking-widest uppercase bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent"
              style={{ animation: "fade-up 0.4s ease-out 0.4s both" }}
            >
              M
            </span>
            {/* dot */}
            <span
              className="mx-1 text-2xl font-bold bg-gradient-to-br from-primary-400 to-secondary-400 bg-clip-text text-transparent animate-pulse"
              style={{ animationDuration: "2.5s", animation: "fade-up 0.4s ease-out 0.5s both" }}
            >
              ·
            </span>
            {/* AHMAD letters */}
            {["A", "H", "M", "A", "D"].map((letter, i) => (
              <span
                key={i}
                className="text-3xl font-medium tracking-widest uppercase text-foreground/80"
                style={{ animation: `fade-up 0.4s ease-out ${0.55 + i * 0.07}s both` }}
              >
                {letter}
              </span>
            ))}
          </div>

          {/* Shimmer underline — growing business indicator */}
          <div
            className="relative w-full h-[2px] rounded-full overflow-hidden"
            style={{ animation: "fade-in 0.5s ease-out 1.1s both" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/15 via-secondary-500/25 to-primary-500/15" />
            <div
              className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-primary-400 to-transparent"
              style={{ backgroundSize: "55% 100%" }}
            />
            <div
              className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-secondary-400/60 to-transparent"
              style={{ backgroundSize: "40% 100%", animationDelay: "1.4s" }}
            />
          </div>
        </div>

        {/* ── Tagline ── */}
        <p
          className="text-[11px] font-medium uppercase tracking-[0.4em] text-muted-foreground/50"
          style={{ animation: "fade-in 0.5s ease-out 1.3s both" }}
        >
          WordPress · WooCommerce · Next.js
        </p>
      </div>
    </div>
  );
}
