"use client";

import { useEffect, useState } from "react";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { Typography } from "@/components/ui/typography";
import { ServiceCard } from "@/components/cards/home/service-card";
import { IconList } from "@/components/ui/icon-list";
import { Button } from "@/components/ui/button-component";
import {
  ArrowRight,
  Code2,
  LayoutPanelTop,
  LineChart,
  Palette,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Custom Web Apps",
    description: "Next.js & React solutions tailored to your workflows.",
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "E-commerce Builds",
    description: "WooCommerce stores engineered to convert and scale.",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "Brand Websites",
    description: "Marketing experiences with pixel-perfect execution.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Site Rescues",
    description: "Audits, hardening, and fixes for underperforming builds.",
  },
  {
    icon: <LayoutPanelTop className="w-6 h-6" />,
    title: "Headless CMS",
    description: "Composable architectures powered by WordPress or Sanity.",
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Ongoing Care",
    description: "Retainers for growth experiments and product support.",
  },
];

const processHighlights = [
  { text: "Discovery & Strategy Sessions" },
  { text: "Weekly async progress drops" },
  { text: "Launch, QA & performance reports" },
];

const valueProps = [
  { label: "Avg. time-to-value", value: "3 — 4 weeks" },
  { label: "Retention rate", value: "92% renew" },
  { label: "Launch confidence", value: "Zero surprise releases" },
];

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden py-20">
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
        <div
          className={`text-center space-y-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <BadgeHeading
            label="Services"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />
          <Typography variant="h2" className="leading-tight">
            Services built to launch, grow, and optimize your product.
          </Typography>
          <Typography variant="lead" className="max-w-3xl mx-auto">
            From foundational builds to rescue missions, I partner with founders
            and teams to ship high-performing experiences backed by measurable
            outcomes.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-10 items-start">
          <div
            className={`grid sm:grid-cols-2 gap-4 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
                className="min-h-[190px]"
              />
            ))}
          </div>

          <div
            className={`p-8 rounded-3xl border border-border bg-card/80 backdrop-blur-xl shadow-2xl space-y-6 transition-all duration-700 delay-150 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
                <LineChart className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <Typography variant="h4" className="mb-0">
                  Partnership-first delivery
                </Typography>
                <Typography variant="small">
                  Clear touchpoints from kickoff to optimization.
                </Typography>
              </div>
            </div>

            <IconList
              items={processHighlights}
              variant="custom"
              className="flex-col items-start gap-4"
            />

            <div className="rounded-2xl border border-border/60 bg-background/70 p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-primary-500" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Ready when you are
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Limited build slots open quarterly.
                  </p>
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full group"
              >
                <span>Book a free strategy call</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`rounded-3xl border border-border/60 bg-card/70 px-6 py-6 flex flex-wrap gap-6 justify-between transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {valueProps.map((item) => (
            <div key={item.label} className="space-y-1">
              <Typography variant="small" className="uppercase tracking-wide">
                {item.label}
              </Typography>
              <Typography variant="h4" className="text-foreground">
                {item.value}
              </Typography>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-1/3 -right-16 w-80 h-80 bg-primary-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-72 h-72 bg-secondary-500/10 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}

