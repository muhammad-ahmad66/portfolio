// components/shared/tech-and-partners-section.tsx
"use client";

import { useState, useEffect } from "react";
import { TechStack } from "../../ui/tech-stack";
import { TrustedPartnersSection } from "../../ui/trusted-partners-section";

interface TechAndPartnersSectionProps {
  showTechStack?: boolean;
  showPartners?: boolean;
  className?: string;
}

export function TechAndPartnersSection({
  showTechStack = true,
  showPartners = true,
  className = "",
}: TechAndPartnersSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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
    <section className={`relative overflow-hidden py-6 ${className}`}>
      {/* Background with Interactive Gradient */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 space-y-4 lg:space-y-6">
        {showTechStack && (
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <TechStack isVisible={isVisible} />
          </div>
        )}

        {showPartners && (
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <TrustedPartnersSection />
          </div>
        )}
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
