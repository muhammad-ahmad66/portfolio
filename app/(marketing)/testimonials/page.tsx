// app/testimonials/page.tsx

import { PageHero } from "@/components/sections/shared/page-hero";
import { TestimonialsSection } from "@/components/sections/shared/testimonials-section";
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
        eyebrow="Client Reviews"
        title="Real Results From"
        titleHighlight="Real Clients"
      />

      <TestimonialsSection />
    </>
  );
}
