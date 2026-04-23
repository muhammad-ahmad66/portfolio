"use client";

import { cn } from "@/lib/utils";

interface LogoIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function LogoIcon({ size = 36, animated = true, className }: LogoIconProps) {
  const svgW = Math.round(size * 0.55);
  const svgH = Math.round(size * 0.39);

  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      {/* Breathing ambient glow */}
      {animated && (
        <div
          className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary-500/30 to-secondary-500/30 blur-lg animate-pulse"
          style={{ animationDuration: "3.5s" }}
        />
      )}

      {/* Outer dashed orbit ring */}
      <div
        className={cn(
          "absolute -inset-[3px] rounded-2xl border border-dashed border-primary-400/35",
          animated && "animate-[rotate-slow_10s_linear_infinite]"
        )}
      />

      {/* Blue orbiting dot */}
      {animated && (
        <div className="absolute -inset-[3px] animate-[rotate-slow_10s_linear_infinite]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[3px] w-[5px] h-[5px] rounded-full bg-primary-400 shadow-[0_0_6px_2px_rgba(59,130,246,0.7)]" />
        </div>
      )}

      {/* Purple orbiting dot */}
      {animated && (
        <div className="absolute -inset-[3px] animate-[rotate-slow_14s_linear_reverse_infinite]">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[3px] w-[4px] h-[4px] rounded-full bg-secondary-400 shadow-[0_0_5px_2px_rgba(168,85,247,0.7)]" />
        </div>
      )}

      {/* Main icon body */}
      <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-shadow duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-[#5b6ef5] to-secondary-600" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
        {animated && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width={svgW}
            height={svgH}
            viewBox="0 0 20 14"
            fill="none"
            aria-hidden="true"
          >
            <path d="M5.5 1.5L1.5 7L5.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14.5 1.5L18.5 7L14.5 12.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <line x1="12.5" y1="0.5" x2="7.5" y2="13.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}
