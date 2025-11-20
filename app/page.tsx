import { HeroSection } from "@/components/sections/home/hero-section";
import { AboutSection } from "@/components/sections/shared/about-section";
import { ServicesSection } from "@/components/sections/shared/services-section";
import { ProcessSection } from "@/components/sections/home/process-section";
import { ProjectsSection } from "@/components/sections/shared/projects-section";
import { CtaSection } from "@/components/sections/shared/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
