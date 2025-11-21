'use client';
import { PageHero } from '@/components/sections/shared/page-hero';
import { AboutSection } from '@/components/sections/shared/about-section';
import { CtaSection } from '@/components/sections/shared/cta-section';
import { Sparkles } from 'lucide-react';
import { ServicesSection } from '@/components/sections/shared/services-section';
import { ProcessSection } from '@/components/sections/home/process-section';
import { indicators } from '@/data/shared/indicators';

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'About Me',
          icon: <Sparkles className="w-4 h-4 text-primary-500" />,
        }}
        title="Building digital experiences"
        titleHighlight="that matter"
        description="I'm M. Ahmad, a full-stack developer with over 5 years of experience transforming ideas into powerful digital solutions. My journey has taken me through both freelancing and working with established companies."
        indicators={indicators}
      />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
