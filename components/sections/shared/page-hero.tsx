"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  titleHighlight,
  description,
  primaryAction,
  className = "",
}: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsVisible(true);
    const onMove = (e: MouseEvent) =>
      setMouse({ x: (e.clientX / window.innerWidth) * 100, y: (e.clientY / window.innerHeight) * 100 });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className={`relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16 ${className}`}>

      {/* Background */}
      <div className="absolute inset-0 bg-background pointer-events-none">
        <div
          className="absolute inset-0 transition-all duration-1000 opacity-40 dark:opacity-20"
          style={{
            background: `radial-gradient(ellipse 60% 60% at ${mouse.x}% ${mouse.y}%, rgba(59,130,246,0.08), transparent 65%)`,
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-500/8 to-transparent rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-secondary-500/8 to-transparent rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.018] dark:opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-5">

          {/* Eyebrow */}
          {eyebrow && (
            <div className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                {eyebrow}
              </span>
            </div>
          )}

          {/* Headline */}
          <div className={`space-y-0 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
            <h1 className="font-extrabold leading-[1.08] tracking-tight text-4xl sm:text-5xl lg:text-[3.5rem]">
              <span className="text-foreground">{title} </span>
              {titleHighlight && (
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)" }}
                >
                  {titleHighlight}
                </span>
              )}
            </h1>

            {/* Accent rule */}
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="h-[2px] w-10 rounded-full" style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #a855f7)" }} />
              <div className="h-[2px] w-3 rounded-full bg-border" />
            </div>
          </div>

          {/* Description */}
          {description && (
            <p className={`text-base sm:text-lg text-muted-foreground font-light leading-relaxed max-w-xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {description}
            </p>
          )}

          {/* CTA */}
          {primaryAction && (
            <div className={`transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              {primaryAction.href ? (
                <Link href={primaryAction.href}>
                  <button
                    className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundImage: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                      boxShadow: "0 8px 24px rgba(59,130,246,0.22)",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 28px rgba(59,130,246,0.38)")}
                    onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,130,246,0.22)")}
                  >
                    {primaryAction.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </Link>
              ) : (
                <button
                  onClick={primaryAction.onClick}
                  className="group inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                    boxShadow: "0 8px 24px rgba(59,130,246,0.22)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 12px 28px rgba(59,130,246,0.38)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 8px 24px rgba(59,130,246,0.22)")}
                >
                  {primaryAction.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
