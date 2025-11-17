"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button-component";
import { Typography } from "@/components/ui/typography";
import { IconList } from "@/components/ui/icon-list";
import { ServiceCard } from "@/components/cards/service-card";
import { BadgeButton } from "@/components/ui/badge-button";
import {
  ArrowRight,
  Sparkles,
  Globe,
  ShoppingCart,
  Zap,
  Settings,
} from "lucide-react";
import {
  SiWordpress,
  SiWoocommerce,
  SiElementor,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSass,
} from "react-icons/si";
import { BadgeHeading } from "@/components/ui/badge-heading";

export function HeroSection() {
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

  const trustIndicators = [
    { text: "5+ Years Experience" },
    { text: "50+ Projects Delivered" },
    { text: "100% Client Satisfaction" },
  ];

  const services = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "WordPress Development",
      description: "Custom themes & plugins",
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "E-commerce Solutions",
      description: "WooCommerce & custom stores",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Custom Web Applications",
      description: "Modern & scalable apps",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Speed & SEO improvements",
    },
  ];

  const wordpressTech = [
    {
      label: "WordPress",
      icon: <SiWordpress className="w-5 h-5" />,
    },
    {
      label: "WooCommerce",
      icon: <SiWoocommerce className="w-5 h-5" />,
    },
    {
      label: "Elementor",
      icon: <SiElementor className="w-5 h-5" />,
    },
  ];

  const devTech = [
    { label: "Next.js", icon: <SiNextdotjs className="w-5 h-5" /> },
    { label: "TypeScript", icon: <SiTypescript className="w-5 h-5" /> },
    { label: "React", icon: <SiReact className="w-5 h-5" /> },
    { label: "Redux", icon: <SiRedux className="w-5 h-5" /> },
    { label: "Tailwind", icon: <SiTailwindcss className="w-5 h-5" /> },
    { label: "MUI", icon: <SiMui className="w-5 h-5" /> },
    { label: "Node.js", icon: <SiNodedotjs className="w-5 h-5" /> },
    { label: "Express", icon: <SiExpress className="w-5 h-5" /> },
    { label: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
    { label: "SCSS", icon: <SiSass className="w-5 h-5" /> },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Gradient Background */}
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <BadgeHeading
              label="Trusted by 50+ businesses worldwide"
              icon={<Sparkles className="w-4 h-4 text-primary-500" />}
            />

            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Typography variant="h1" className="leading-tight">
                Build{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    Powerful
                  </span>
                  <span className="absolute bottom-2 left-0 right-0 h-3 bg-primary-500/10 -rotate-1" />
                </span>{" "}
                Websites That Drive Results
              </Typography>

              <Typography variant="lead" className="max-w-xl">
                Transform your vision into reality with custom web solutions
                that are fast, scalable, and built to convert.
              </Typography>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Button
                variant="primary"
                size="lg"
                className="group shadow-lg hover:shadow-xl"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="ghost" size="lg">
                View Case Studies
              </Button>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <IconList items={trustIndicators} variant="check" />
            </div>
          </div>

          {/* Right Column - Service Cards */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 relative z-10">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  style={
                    {
                      animationDelay: `${400 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div
          className={`mt-20 pt-12 border-t border-border/50 space-y-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* WordPress Technologies */}
          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              WordPress Expertise
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {wordpressTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="card"
                />
              ))}
            </div>
          </div>

          {/* Modern Development Stack */}
          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              Modern Development Stack
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {devTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="minimal"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
