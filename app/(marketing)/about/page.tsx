"use client";
import { PageHero } from "@/components/sections/shared/page-hero";
import { AboutSection } from "@/components/sections/shared/about-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { Sparkles } from "lucide-react";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { indicators } from "@/data/shared/indicators";
import { TechAndPartnersSection } from "@/components/sections/shared/tech-and-partners-section";

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={{
          label: "About Me",
          icon: <Sparkles className="w-4 h-4 text-primary-500" />,
        }}
        title="Crafting websites and products"
        titleHighlight="with intention"
        // description="I'm Muhammad Ahmad - a full-stack developer specializing in fast, scalable, and user-focused web experiences. Over 3+ years, I've helped startups, agencies, and founders bring ideas to life with clean engineering and thoughtful design."
        indicators={indicators}
      />
      <TechAndPartnersSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
