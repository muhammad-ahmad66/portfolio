"use client";

import { PageHero } from "@/components/sections/shared/page-hero";
import { ProjectsSection } from "@/components/sections/shared/projects-section";
import { CtaSection } from "@/components/sections/shared/cta-section";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Projects Built to"
        titleHighlight="Perform and Convert"
        description="WordPress, WooCommerce and Next.js projects delivered for real businesses."
      />

      <ProjectsSection showHeader={false} />
      <CtaSection />
    </>
  );
}
