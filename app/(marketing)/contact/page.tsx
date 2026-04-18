"use client";

import Image from "next/image";
import { PageHero } from "@/components/sections/shared/page-hero";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfoSection } from "@/components/sections/shared/contact-info-section";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let’s Start Your"
        titleHighlight="Next Project"
        description="Tell me what you need and I will get back to you within a few hours."
      />

      <section className="relative overflow-hidden py-10 sm:py-12 lg:py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              background:
                "radial-gradient(circle at 10% 20%, rgba(236,72,153,0.12), transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
            {/* FORM */}
            <div className="order-2 lg:order-1">
              <ContactForm />
            </div>

            {/* INFO + IMAGE */}
            <div className="space-y-8 order-1 lg:order-2">
              <ContactInfoSection />

              {/* Portrait Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 bg-card/80 backdrop-blur-xl shadow-xl sm:shadow-2xl group">
                <div className="relative h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px]">
                  <Image
                    src="/images/project-design-visual-landscape.webp"
                    alt="Muhammad Ahmad - Senior WordPress Developer and MERN Stack Developer available for freelance projects"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white text-sm sm:text-base font-medium">
                      Available for new projects and collaborations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
