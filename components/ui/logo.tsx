"use client";

import Link from "next/link";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <span className="text-2xl font-black tracking-tighter text-foreground transition-colors duration-300 group-hover:text-primary-500">
        M. Ahmad
      </span>
      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
    </Link>
  );
}
