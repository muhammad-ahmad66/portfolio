import { PageHero } from "@/components/sections/shared/page-hero";
import { AboutSection } from "@/components/sections/shared/about-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { TechAndPartnersSection } from "@/components/sections/shared/tech-and-partners-section";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Developer Who Builds Websites"
        titleHighlight="That Work"
        description="5+ years of WordPress, WooCommerce and Next.js development for businesses worldwide."
      />
      <TechAndPartnersSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
