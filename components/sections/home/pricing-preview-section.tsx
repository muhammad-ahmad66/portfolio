"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { pricingPlans } from "@/data/pricing/pricing-plans";
import { PricingCard } from "@/components/pricing/pricing-card";
import { CurrencySwitcher } from "@/components/ui/currency-switcher";

const WHATSAPP_URL =
  "https://wa.me/923129818199?text=" +
  encodeURIComponent(
    "Hi Muhammad, I have a custom project in mind. Can we discuss a tailored plan?"
  );

export function PricingPreviewSection() {
  const previewPlans = pricingPlans.slice(0, 3);

  return (
    <section className="relative overflow-hidden py-12 md:py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-25 dark:opacity-15"
          style={{
            background:
              "radial-gradient(circle at 60% 20%, rgba(99,102,241,0.12), transparent 55%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 relative">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Transparent Pricing
          </p>
          <h2 className="font-extrabold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl leading-tight tracking-tight">
            <span className="text-foreground">Honest Pricing for </span>
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)",
              }}
            >
              Every Budget
            </span>
          </h2>
          <p className="text-base text-muted-foreground font-light max-w-xl mx-auto">
            No hidden fees. Fixed prices, clear deliverables and a timeline you can count on — from simple business sites to full WooCommerce stores.
          </p>
          <div className="flex justify-center pt-1">
            <CurrencySwitcher />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {previewPlans.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>

        {/* Glassy CTA Box */}
        <div
          className="relative rounded-3xl border border-border/60 px-6 py-8 sm:px-10 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 8px 32px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Subtle gradient accent */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #3b82f6 0%, #818cf8 50%, #a855f7 100%)",
            }}
          />

          <div className="relative text-center sm:text-left space-y-1.5">
            <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full border border-border/60 bg-background/40 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <Sparkles className="w-3.5 h-3.5 text-primary-500" />
              Need Something Different?
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-foreground leading-snug">
              Get a custom quote tailored to your project.
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Every business is different. Tell me what you need and I will put together a plan that fits your goals and budget.
            </p>
          </div>

          <div className="relative flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            {/* WhatsApp CTA */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-300 hover:-translate-y-0.5"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)",
                boxShadow: "0 6px 20px rgba(59,130,246,0.25)",
              }}
            >
              <MessageCircle className="w-4 h-4" />
              Custom Plan on WhatsApp
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            {/* See all plans */}
            <Link
              href="/pricing"
              className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-border/70 hover:border-primary-500/40 bg-background/40 hover:bg-primary-500/5 text-foreground font-semibold text-sm transition-all duration-200"
            >
              See All Plans
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-500 transition-all group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-1/3 -right-16 w-72 h-72 bg-primary-500/8 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-64 h-64 bg-secondary-500/8 blur-3xl rounded-full pointer-events-none" />
    </section>
  );
}
