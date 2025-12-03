// app/testimonials/page.tsx

import { PageHero } from "@/components/sections/shared/page-hero";
import { TestimonialsSection } from "@/components/sections/shared/testimonials-section";
import { FileText } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials | M. Ahmad",
  description:
    "Read what my clients say about working with me. Real reviews from satisfied clients on Fiverr.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        badge={{
          label: "Testimonials",
          icon: <FileText className="w-4 h-4 text-primary-500" />,
        }}
        title="Trusted by"
        titleHighlight="real clients"
        description="Honest feedback from founders and businesses I've worked with across different projects. Every review reflects real collaboration, results, and long-term trust."
      />

      <TestimonialsSection />
    </>
  );
}
