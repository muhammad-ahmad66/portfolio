// components/home/hero-section.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button-component";
import { ArrowRight, Sparkles } from "lucide-react";
import { GreetingCard } from "@/components/ui/greeting-card";
import { Typography } from "@/components/ui/typography";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { TechAndPartnersSection } from "../shared/tech-and-partners-section";
import { SpinningCircularBadge } from "@/components/ui/spinning-circular-badge";

export function HeroSection() {
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
    <>
      <section className="relative flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle Interactive Background */}
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
            }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-4 lg:space-y-6">
              {/* Small Badge */}
              <BadgeHeading
                label="Trusted by 60+ businesses worldwide"
                icon={<Sparkles className="w-4 h-4 text-primary-500" />}
              />

              <div
                className={`space-y-2 sm:space-y-3 transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Typography
                  variant="h1"
                  className="text-foreground leading-[1]"
                >
                  <div className="font-bold  text-secondary-500 mb-1.5">
                    Crafting
                  </div>
                  <div className="font-extrabold text-primary-500 uppercase leading-[1.4] md:leading-[1.1]">
                    High-Performing Websites
                  </div>
                  <div className="text-muted-foreground text-xl md:text-2xl lg:text-3xl">
                    that drive results and delight users.
                  </div>
                </Typography>
              </div>

              {/* Minimal Description */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-muted-foreground font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Partnering with you to build fast, reliable, and user-focused
                websites. <br />
                Expert in WordPress, WooCommerce stores, and modern Next.js
                applications that drive results.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full sm:w-auto rounded-full"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/work" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="group w-full sm:w-auto rounded-full"
                  >
                    <span>View Work</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image with Overlay Cards */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                {/* Subtle Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl rotate-3 scale-105 -z-10" />

                {/* Main Image Container - Fixed Height */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-foreground/5 dark:shadow-background/20 group border border-border/50">
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                    <Image
                      src="/images/my-development-workspace-potrait.webp"
                      alt="Modern workspace"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>

                {/* Premium Greeting Card Overlay */}
                <GreetingCard
                  title="Welcome Here"
                  message="Building websites that look great and perform flawlessly."
                  avatarText="Hi"
                  avatarSpin={true}
                />

                {/* Professional Stats Card */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-2xl border border-border/60 bg-background/80 dark:bg-background/70 backdrop-blur-xl px-5 sm:px-6 py-3 sm:py-4 shadow-lg">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
                        50+
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                        Projects
                      </span>
                    </div>
                    <div className="h-10 sm:h-12 w-px bg-border/60" />
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
                        5+
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                        Years
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spinning Circular Badge */}
                {/* <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 lg:-right-12 z-20">
                  <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
                    style={{ animation: "spin 20s linear infinite" }}
                  >
                    <Image
                      src="/images/exclusive.png"
                      alt="Exclusive"
                      fill
                      className="object-contain grayscale opacity-30 dark:opacity-20"
                    />
                  </div>
                </div> */}
                <SpinningCircularBadge />

                {/* Minimal Decorative Element */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      </section>
    </>
  );
}
