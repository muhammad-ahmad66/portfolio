"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button-component";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { IconList } from "@/components/ui/icon-list";
import { ArrowRight } from "lucide-react";

interface PageHeroProps {
  badge?: {
    label: string;
    icon?: React.ReactNode;
  };
  title: string;
  titleHighlight?: string;
  description?: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  indicators?: Array<{
    icon?: React.ReactNode;
    text: string;
  }>;
  className?: string;
}

export function PageHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryAction,
  secondaryAction,
  indicators,
  className = "",
}: PageHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      className={`relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 ${className}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {badge && (
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <BadgeHeading
                label={badge.label}
                icon={badge.icon}
              />
            </div>
          )}

          <div
            className={`space-y-4 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Typography variant="h1" className="leading-tight">
              {title}{" "}
              {titleHighlight && (
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    {titleHighlight}
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary-500/10 -rotate-1" />
                </span>
              )}
            </Typography>

            {description && (
              <Typography variant="lead" className="max-w-2xl mx-auto">
                {description}
              </Typography>
            )}
          </div>

          {(primaryAction || secondaryAction) && (
            <div
              className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              {primaryAction && (
                primaryAction.href ? (
                  <Link href={primaryAction.href}>
                    <Button
                      variant="primary"
                      size="lg"
                      className="group shadow-lg hover:shadow-xl"
                      onClick={primaryAction.onClick}
                    >
                      <span>{primaryAction.label}</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="primary"
                    size="lg"
                    className="group shadow-lg hover:shadow-xl"
                    onClick={primaryAction.onClick}
                  >
                    <span>{primaryAction.label}</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                )
              )}
              {secondaryAction && (
                secondaryAction.href ? (
                  <Link href={secondaryAction.href}>
                    <Button
                      variant="ghost"
                      size="lg"
                      onClick={secondaryAction.onClick}
                    >
                      {secondaryAction.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={secondaryAction.onClick}
                  >
                    {secondaryAction.label}
                  </Button>
                )
              )}
            </div>
          )}

          {indicators && indicators.length > 0 && (
            <div
              className={`transition-all duration-700 delay-400 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <IconList items={indicators} variant="custom" />
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}

