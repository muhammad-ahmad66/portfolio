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
        title="Web Solutions That"
        titleHighlight="Deliver Results"
        description="From complete WordPress builds and E-commerce stores to modern Next.js applications, I craft websites that are fast, scalable, and visually engaging. Every project is designed to convert visitors, delight users, and achieve measurable outcomes."
        primaryAction={{
          label: "View All Services",
          href: "#services",
        }}
        indicators={[
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "WordPress Development & Customization",
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "E-commerce Stores & WooCommerce",
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: "Next.js & React Web Applications",
          },
        ]}
      />
      <ServicesSection variant="expanded" id="services" />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
