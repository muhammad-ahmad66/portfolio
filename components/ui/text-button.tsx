"use client";

import Link from "next/link";
import * as React from "react";

interface TextButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "default" | "underline" | "arrow";
  className?: string;
}

export function TextButton({ 
  href, 
  children, 
  variant = "default",
  className = "" 
}: TextButtonProps) {
  const variants = {
    default: "text-muted-foreground hover:text-foreground",
    underline: "group relative text-muted-foreground hover:text-foreground",
    arrow: "group inline-flex items-center gap-2 text-foreground hover:text-primary-500",
  };

  return (
    <Link href={href} className={`text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`}>
      {variant === "underline" && (
        <>
          <span className="relative z-10">{children}</span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary-500 to-secondary-500 group-hover:w-full transition-all duration-300" />
        </>
      )}
      {variant === "arrow" && (
        <>
          <span>{children}</span>
          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </>
      )}
      {variant === "default" && children}
    </Link>
  );
}