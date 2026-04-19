"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { Typography } from "@/components/ui/typography";
import { ServiceCard } from "@/components/cards/home/service-card";
import { IconList } from "@/components/ui/icon-list";
import { Button } from "@/components/ui/button-component";
import { ArrowRight, LineChart, Sparkles } from "lucide-react";
import {
  serviceCatalog,
  defaultServices,
} from "../../../data/services/serviceCatalog";
import {
  processHighlights,
  valueProps,
} from "../../../data/services/processHighlights";

interface ServicesSectionProps {
  variant?: "default" | "expanded";
  id?: string;
}

export function ServicesSection({
  variant = "default",
  id,
}: ServicesSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const servicesToRender =
    variant === "expanded" ? serviceCatalog : defaultServices;

  return (
    <section id={id} className="relative overflow-hidden py-9 md:py-16">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.12), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
        {variant !== "expanded" && (
          <div
            className={`text-center space-y-3 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              What I Do
            </p>
            <h2 className="font-extrabold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight">
              <span className="text-foreground">Services Built to </span>
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)" }}
              >
                Grow Your Business
              </span>
            </h2>
            <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
              Fast, clean and scalable websites — WordPress, WooCommerce and Next.js.
            </p>
          </div>
        )}

        {variant === "default" ? (
          <>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-8 items-start">
              {/* Service Cards */}
              <div
                className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {servicesToRender.map((service) => (
                  <ServiceCard
                    key={service.title}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>

              {/* Sidebar */}
              <div
                className={`rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-7 space-y-6 transition-all duration-700 delay-150 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                {/* Header */}
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/15 flex items-center justify-center mb-4">
                    <LineChart className="w-5 h-5 text-primary-500" />
                  </div>
                  <h3 className="font-bold text-base text-foreground leading-snug">
                    How I Work With You
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    A clear, structured process from day one to launch.
                  </p>
                </div>

                {/* Process steps */}
                <div className="space-y-3">
                  {processHighlights.map((item, i) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary-500/10 text-primary-500 flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-muted-foreground leading-snug">{item.text}</p>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 py-4 border-y border-border/50">
                  {valueProps.map((item) => (
                    <div key={item.label} className="text-center">
                      <p className="font-bold text-base text-foreground leading-none">{item.value.split(" ")[0]}</p>
                      <p className="text-[10px] text-muted-foreground mt-1 leading-tight">{item.label}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="space-y-2.5">
                  <a href="/contact" className="w-full block">
                    <button
                      className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        backgroundImage: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                        boxShadow: "0 6px 20px rgba(59,130,246,0.2)",
                      }}
                    >
                      Start Your Project
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </a>
                  <a href="/services" className="w-full block">
                    <button className="group w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/70 hover:border-primary-500/40 bg-transparent hover:bg-primary-500/5 text-foreground font-semibold text-sm transition-all duration-200">
                      View All Services
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-all group-hover:translate-x-1" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-12">
            <div
              className={`grid md:grid-cols-2 xl:grid-cols-3 gap-5 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              {servicesToRender.map((service) => (
                <div
                  key={service.title}
                  className="relative h-full rounded-3xl border border-border/70 bg-card/80 backdrop-blur-xl p-6 hover:border-primary-500/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 flex flex-col group/card overflow-hidden"
                >
                  {/* Top gradient accent line on hover */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                    style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #818cf8, #a855f7)" }}
                  />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/15 to-secondary-500/10 text-primary-500 flex items-center justify-center shrink-0 group-hover/card:from-primary-500/25 group-hover/card:to-secondary-500/20 transition-all duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <Typography variant="h4" className="mb-1">
                        {service.title}
                      </Typography>
                      <Typography variant="p" className="text-sm text-muted-foreground leading-relaxed">
                        {service.description}
                      </Typography>
                    </div>
                  </div>

                  {service.features && service.features.length > 0 && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 text-xs font-medium rounded-full border border-border/60 bg-background/60 text-muted-foreground group-hover/card:border-primary-500/20 group-hover/card:text-foreground transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto pt-5">
                    <a href="/contact" className="block">
                      <button className="w-full group/btn inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-border/70 hover:border-primary-500/40 bg-background/50 hover:bg-primary-500/5 text-sm font-medium text-foreground transition-all duration-200">
                        <span>Get a Free Quote</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/btn:text-primary-500 transition-all duration-200 group-hover/btn:translate-x-1" />
                      </button>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid lg:grid-cols-[2.5fr_1fr] gap-6 items-stretch">
              <div className="rounded-3xl border border-border bg-card/70 p-8 flex flex-col gap-6 h-full">
                <div className="flex flex-wrap items-center gap-6">
                  {valueProps.map((item) => (
                    <div key={item.label} className="space-y-1 min-w-[160px]">
                      <Typography
                        variant="small"
                        className="uppercase tracking-wide text-muted-foreground"
                      >
                        {item.label}
                      </Typography>
                      <Typography variant="h4">{item.value}</Typography>
                    </div>
                  ))}
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {processHighlights.map((highlight) => (
                    <div
                      key={highlight.text}
                      className="rounded-2xl border border-border/60 bg-background/70 p-4"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <p className="text-sm font-medium text-foreground">
                          {highlight.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="relative mt-auto rounded-2xl overflow-hidden border border-border/60 min-h-[220px]">
                  <Image
                    src="/images/wordpress-website-development-service-muhammad-ahmad.jpg"
                    alt="Creative workspace moodboard showcasing premium website projects"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-gradient-to-br from-primary-500/15 via-background/40 to-secondary-500/10 p-8 flex flex-col justify-between gap-6 h-full">
                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/60 bg-background/60 text-xs uppercase tracking-[0.2em]">
                    <Sparkles className="w-3.5 h-3.5 text-primary-500" />
                    Limited Spots Open
                  </div>

                  <Typography variant="h4" className="leading-tight">
                    Got a project in mind? Let us build it together.
                  </Typography>

                  <Typography variant="p" className="text-muted-foreground">
                    I work with a small number of clients at a time so every project gets my full attention. Tell me what you need and I will help you turn it into a fast, professional website that works.
                  </Typography>
                </div>

                <div className="space-y-4">
                  <IconList
                    items={processHighlights}
                    variant="custom"
                    className="flex-col gap-3"
                  />
                  <a href="/contact" className="w-full block">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group"
                    >
                      <span>Let's Work Together</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute top-1/3 -right-16 w-80 h-80 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-secondary-500/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
