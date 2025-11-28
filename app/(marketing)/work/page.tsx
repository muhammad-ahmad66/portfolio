"use client";

import { PageHero } from "@/components/sections/shared/page-hero";
import { ProjectsSection } from "@/components/sections/shared/projects-section";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { Briefcase } from "lucide-react";
import { indicators } from "@/data/shared/indicators";

export default function WorkPage() {
  return (
    <>
      <PageHero
        badge={{
          label: "My Work",
          icon: <Briefcase className="w-4 h-4 text-primary-500" />,
        }}
        title="A showcase of"
        titleHighlight="my best work"
        description="Browse a selection of websites and builds crafted with clean code, performance in mind, and a focus on user experience. Each project reflects thoughtful execution and practical problem-solving."
        indicators={indicators}
      />

      <ProjectsSection />
      <CtaSection />
    </>
  );
}
