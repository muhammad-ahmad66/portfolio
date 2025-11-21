'use client';

import { PageHero } from '@/components/sections/shared/page-hero';
import { ProjectsSection } from '@/components/sections/shared/projects-section';
import { CtaSection } from '@/components/sections/shared/cta-section';
import { Briefcase } from 'lucide-react';
import { indicators } from '@/data/shared/indicators';

export default function WorkPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'My Work',
          icon: <Briefcase className="w-4 h-4 text-primary-500" />,
        }}
        title="Portfolio of"
        titleHighlight="digital excellence"
        description="Explore a curated collection of projects showcasing my expertise in WordPress development, custom web applications, and modern digital solutions. Each project represents a unique challenge solved with creativity and technical precision."
        indicators={indicators}
      />
      <ProjectsSection />
      <CtaSection />
    </>
  );
}
