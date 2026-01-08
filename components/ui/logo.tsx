"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center ${className}`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-primary-500/20 blur-2xl animate-shimmer"
          style={{ backgroundSize: "200% 100%" }}
        />
      </div>

      {/* Main container with glassmorphism effect on hover */}
      <div className="relative flex items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-500 group-hover:bg-gradient-to-br group-hover:from-primary-500/5 group-hover:via-secondary-500/5 group-hover:to-primary-500/5 group-hover:backdrop-blur-xl group-hover:border group-hover:border-primary-500/10 group-hover:shadow-lg group-hover:shadow-primary-500/10">
        {/* Stylized "M" with geometric accent */}
        <div className="relative flex items-center">
          {/* Geometric square behind M */}
          <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-8 h-8 rotate-45 bg-gradient-to-br from-primary-600 to-secondary-600 opacity-10 group-hover:opacity-20 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[50deg]" />

          {/* The M letter */}
          <span className="relative text-3xl font-black tracking-tighter transition-all duration-500">
            <span className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-secondary-600 bg-clip-text text-transparent group-hover:from-primary-500 group-hover:to-secondary-500">
              M
            </span>
            {/* Accent line through M */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-500 group-hover:scale-x-110" />
          </span>
        </div>

        {/* Sophisticated dot separator with 3D effect */}
        <div className="relative mx-1 flex items-center justify-center">
          {/* Outer glow ring */}
          <div className="absolute w-6 h-6 rounded-full bg-gradient-to-br from-primary-400/20 to-secondary-400/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse" />

          {/* Rotating ring */}
          <div className="absolute w-4 h-4">
            <div className="w-full h-full rounded-full border-2 border-dashed border-primary-500/30 group-hover:border-secondary-500/50 animate-[rotate-slow_20s_linear_infinite] transition-colors duration-500" />
          </div>

          {/* Inner rotating dots */}
          <div className="absolute w-3 h-3 animate-[rotate-slow_10s_linear_reverse_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary-500 opacity-60" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-secondary-500 opacity-60" />
          </div>

          {/* Center dot with gradient */}
          <div className="relative w-2 h-2 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 shadow-lg shadow-primary-500/50 group-hover:shadow-secondary-500/50 transition-all duration-500 group-hover:scale-125" />
        </div>

        {/* "ahmad" text with staggered reveal effect */}
        <div className="relative flex items-center overflow-hidden">
          <span className="text-2xl font-bold tracking-tight transition-all duration-500">
            {["a", "h", "m", "a", "d"].map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-all duration-500 group-hover:text-transparent group-hover:bg-gradient-to-br group-hover:from-foreground group-hover:via-primary-600 group-hover:to-secondary-600 group-hover:bg-clip-text"
                style={{
                  transitionDelay: `${i * 50}ms`,
                  transform: "translateY(0)",
                }}
              >
                {letter}
              </span>
            ))}
          </span>

          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-to-r from-primary-500 via-secondary-500 to-primary-600 group-hover:w-full transition-all duration-700 ease-out" />
        </div>

        {/* Corner accent marks */}
        <div className="absolute -top-1 -right-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="w-full h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
          <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent" />
        </div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <div className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-transparent to-secondary-500" />
          <div className="absolute right-0 w-0.5 h-full bg-gradient-to-t from-transparent to-secondary-500" />
        </div>
      </div>

      {/* Floating particles effect on hover */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400/40 rounded-full animate-float"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>
    </Link>
  );
}
