// ============================================
// FILE: components/sections/home/about-section.tsx
// ============================================
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button-component";
import { Typography } from "@/components/ui/typography";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { BadgeHeading } from "@/components/ui/badge-heading";

export function AboutSection() {
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
    <section className="relative  flex items-center justify-center overflow-hidden py-10">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(168, 85, 247, 0.08), transparent 50%)`,
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

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Row 1 - Badge & Heading (65% width) */}
        <div
          className={`space-y-6 mb-4 md:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Badge */}
          <BadgeHeading
            label="About Me"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />

          {/* Heading */}
          <div>
            <Typography variant="h2" className="leading-tight mb-0 flex gap-3">
              <span>Building</span>
              <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Digital Dreams
              </span>
            </Typography>
          </div>
        </div>

        {/* Row 2 - Description & Images Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Description Text */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-4">
              <Typography variant="lead">
                I'm M. Ahmad, a passionate full-stack developer with over 5
                years of experience transforming ideas into powerful digital
                solutions. My journey has taken me through both freelancing and
                working with established companies, giving me a unique
                perspective on what truly makes projects successful.
              </Typography>

              <Typography variant="p">
                Specializing in WordPress development and modern web
                technologies like React and Next.js, I bridge the gap between
                design and functionality. I believe great websites aren't just
                about beautiful interfaces—they're about creating seamless
                experiences that drive real business results.
              </Typography>

              <Typography variant="p">
                What sets me apart is my commitment to clear communication,
                realistic timelines, and building solutions that don't just meet
                expectations—they exceed them. Your success is my success, and I
                bring that mindset to every project.
              </Typography>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                variant="primary"
                size="lg"
                className="group shadow-lg hover:shadow-xl"
              >
                <span>Let's Work Together</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right - Images */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-12 gap-4">
              {/* Portrait Image */}
              <div className="col-span-5">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] border border-border shadow-2xl group">
                  <Image
                    src="/images/my-development-workspace-potrait.webp"
                    alt="Development workspace portrait"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Floating Stats Card - Fixed Z-index */}
                <div
                  className="absolute -bottom-8 -left-8 hidden xl:block z-0"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                >
                  <div className="p-6 rounded-2xl border border-border bg-background/80 backdrop-blur-xl shadow-2xl">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-xl">
                          98%
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">
                          Client Satisfaction
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Based on 50+ reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Landscape Images */}
              <div className="col-span-7 space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-video border border-border shadow-2xl group">
                  <Image
                    src="/images/my-development-workspace-landscape.webp"
                    alt="Development workspace"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="relative rounded-3xl overflow-hidden aspect-video border border-border shadow-2xl group">
                  <Image
                    src="/images/project-design-visual-landscape.webp"
                    alt="Project design"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>

            {/* Rotating Contact Button */}
            <div className="absolute -top-8 -right-8 hidden lg:block">
              <button className="group relative w-28 h-28">
                {/* Spinning Border Ring */}
                <div
                  className="absolute inset-0 rounded-full border-2 border-transparent bg-gradient-to-r from-primary-500 to-secondary-500 animate-spin"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="absolute inset-[2px] rounded-full bg-background" />
                </div>

                {/* Inner Button */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex flex-col items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-7 h-7 text-white mb-1" />
                  <span className="text-white text-xs font-semibold">
                    Let's Talk
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
