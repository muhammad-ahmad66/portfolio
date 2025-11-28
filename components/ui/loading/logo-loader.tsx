// components/loading/logo-loader.tsx
"use client";

import { useEffect, useState } from "react";

// Fixed particle positions to avoid hydration mismatch
const particlePositions = [
  { left: 15, top: 20, delay: 0, duration: 3.5 },
  { left: 85, top: 15, delay: 0.2, duration: 4 },
  { left: 25, top: 80, delay: 0.4, duration: 3.2 },
  { left: 70, top: 70, delay: 0.6, duration: 3.8 },
  { left: 10, top: 50, delay: 0.8, duration: 4.2 },
  { left: 90, top: 40, delay: 1, duration: 3.6 },
  { left: 40, top: 10, delay: 1.2, duration: 4.5 },
  { left: 60, top: 85, delay: 1.4, duration: 3.9 },
];

export function LogoLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loader after animation completes
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background/95 backdrop-blur-sm animate-[fade-out_0.5s_ease-out_2s_forwards]">
      <div className="relative">
        {/* Outer rotating ring */}
        <div className="absolute inset-0 -m-20">
          <div className="w-full h-full rounded-full border-2 border-dashed border-primary-500/30 animate-[rotate-slow_3s_linear_infinite]" />
        </div>

        {/* Middle pulsing ring */}
        <div className="absolute inset-0 -m-12">
          <div className="w-full h-full rounded-full border border-secondary-500/20 animate-pulse" />
        </div>

        {/* Main logo container */}
        <div className="relative flex items-center gap-2 animate-[scale-in_0.6s_ease-out]">
          {/* Geometric square with reveal animation */}
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-16 h-16 rotate-45 bg-gradient-to-br from-primary-600 to-secondary-600 opacity-20 animate-[spin_2s_ease-in-out]" />

          {/* The M with gradient */}
          <div className="relative">
            <span
              className="text-6xl sm:text-6xl font-black tracking-tighter animate-[fade-in_0.8s_ease-out_0.3s_both]"
              style={{
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
                background:
                  "linear-gradient(to bottom right, #2563eb, #3b82f6, #9333ea)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              M
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 blur-2xl animate-pulse" />

            {/* Accent line through M */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-[slide-in_0.6s_ease-out_0.8s_both]" />
          </div>

          {/* Sophisticated dot separator with particles */}
          <div className="relative mx-2 flex items-center justify-center animate-[fade-in_0.8s_ease-out_0.5s_both]">
            {/* Outer glow ring */}
            <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/30 to-secondary-400/30 blur-xl animate-pulse" />

            {/* Rotating ring */}
            <div className="absolute w-8 h-8">
              <div className="w-full h-full rounded-full border-2 border-dashed border-primary-500/40 animate-[rotate-slow_4s_linear_infinite]" />
            </div>

            {/* Orbiting particles */}
            <div className="absolute w-6 h-6 animate-[rotate-slow_2s_linear_reverse_infinite]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-500" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary-500" />
            </div>

            {/* Center dot with pulse */}
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 shadow-lg shadow-primary-500/50 animate-pulse" />
          </div>

          {/* "ahmad" text with staggered animation */}
          <div className="relative flex items-center">
            {["a", "h", "m", "a", "d"].map((letter, i) => (
              <span
                key={i}
                className="text-5xl font-bold tracking-tight bg-gradient-to-br from-foreground via-primary-600 to-secondary-600 bg-clip-text text-transparent"
                style={{
                  animation: `fade-up 0.5s ease-out ${0.6 + i * 0.1}s both`,
                }}
              >
                {letter}
              </span>
            ))}

            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 animate-[expand-width_0.8s_ease-out_1.2s_both]" />
          </div>
        </div>

        {/* Floating particles with fixed positions */}
        <div className="absolute inset-0 pointer-events-none">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary-400/40 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Loading text */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap">
          <p className="text-sm font-medium text-muted-foreground animate-pulse">
            Loading Experience...
          </p>
        </div>
      </div>
    </div>
  );
}
