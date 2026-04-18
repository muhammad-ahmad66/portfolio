"use client";

import { PageHero } from "@/components/sections/shared/page-hero";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { ProcessSection } from "@/components/sections/home/process-section";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Web Development Services"
        title="Services That Help Your"
        titleHighlight="Business Grow Online"
        description="Figma to WordPress, WooCommerce stores, Next.js apps and more. Built to rank, convert and last."
        primaryAction={{
          label: "Explore All Services",
          href: "#services",
        }}
      />
      <ServicesSection variant="expanded" id="services" />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
