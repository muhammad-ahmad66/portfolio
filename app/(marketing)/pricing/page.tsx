// src/app/(marketing)/pricing/page.tsx
"use client";

import { useState, useEffect } from "react";
import { pricingPlans } from "@/data/pricing/pricing-plans";
import { PricingCard } from "@/components/pricing/pricing-card";
import { PageHero } from "@/components/sections/shared/page-hero";
import { CtaSection } from "@/components/sections/shared/cta-section";
import { Sparkles } from "lucide-react";

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <PageHero
          badge={{
            label: "Pricing Plans",
            icon: <Sparkles className="w-4 h-4 text-primary-500" />,
          }}
          title="Transparent pricing for"
          titleHighlight="every project"
          description="No hidden fees, no surprises. Choose the plan that fits your needs and budget. All plans include responsive design, clean code, and professional support."
          primaryAction={{
            label: "View All Plans",
            href: "#pricing-plans",
          }}
          secondaryAction={{
            label: "Contact Us",
            href: "/contact",
          }}
        />

        {/* Pricing Cards Section */}
        <section id="pricing-plans" className="relative lg:py-20 py-9">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-6 auto-rows-fr">
                {pricingPlans.map((plan, index) => (
                  <PricingCard key={plan.id} plan={plan} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </div>
    </div>
  );
}
