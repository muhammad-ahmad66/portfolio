'use client';

import { PageHero } from '@/components/sections/shared/page-hero';
import { indicators } from '@/data/shared/indicators';
import { Briefcase } from 'lucide-react';

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        badge={{
          label: 'My Work',
          icon: <Briefcase className="w-4 h-4 text-primary-500" />,
        }}
        title="Projects that"
        titleHighlight="speak for themselves"
        description="A curated collection of websites and applications I've built for clients across various industries. Each project represents a unique challenge solved with creativity and technical expertise."
        primaryAction={{
          label: 'View All Projects',
          href: '#projects',
        }}
        indicators={indicators}
      />
    </>
  );
}
