'use client';

import { PageHero } from '@/components/sections/shared/page-hero';
import { AboutSection } from '@/components/sections/shared/about-section';
import { CtaSection } from '@/components/sections/shared/cta-section';
import { Sparkles } from 'lucide-react';
import { ServicesSection } from '@/components/sections/shared/services-section';
import { ProcessSection } from '@/components/sections/home/process-section';

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
        indicators={[
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: '5+ Years Experience',
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: '50+ Projects Delivered',
          },
          {
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
            text: '100% Client Satisfaction',
          },
        ]}
      />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
