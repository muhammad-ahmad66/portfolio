"use client";

import { PageHero } from "@/components/sections/shared/page-hero";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { Sparkles } from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge={{
          label: "What I Offer",
          icon: <Sparkles className="w-4 h-4 text-primary-500" />,
        }}
        title="Services that drive"
        titleHighlight="real results"
        description="From custom WordPress development to modern Next.js applications, I provide end-to-end solutions that combine technical excellence with strategic thinking."
        primaryAction={{
          label: "View All Services",
          href: "#services",
        }}
        indicators={[
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "WordPress Development",
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "E-commerce Solutions",
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "Custom Web Applications",
          },
        ]}
      />
      <ServicesSection variant="expanded" id="services" />
      <ProcessSection />
      <CtaSection />
    </>
  );
}

