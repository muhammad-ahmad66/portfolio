import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/shared/about-section";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { PricingPreviewSection } from "@/components/sections/home/pricing-preview-section";
import { ProjectsSection } from "@/components/sections/shared/projects-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { TechAndPartnersSection } from "@/components/sections/shared/tech-and-partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechAndPartnersSection />
      <ServicesSection />
      <ProjectsSection showLoadMore={false} />
      <PricingPreviewSection />
      <AboutSection />
      <CtaSection />
    </>
  );
}
