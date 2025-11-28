"use client";

import { useState } from "react";
import Link from "next/link";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button-component";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export function CtaSection() {
  const [isVisible] = useState(true);

  return (
    <section className="relative overflow-hidden py-12 md:py-24">
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.25), transparent 60%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div
          className={`rounded-[40px] border border-border/60 bg-card/80 backdrop-blur-xl shadow-2xl p-8 sm:p-12 flex flex-col lg:flex-row gap-6 md:gap-10 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="space-y-4 text-center lg:text-left flex-1">
            <div className="space-y-2 md:space-y-4 text-center lg:text-left flex-1">
              <BadgeHeading
                label="Get Started"
                icon={<Sparkles className="w-4 h-4 text-primary-500" />}
              />
              <Typography variant="h3" className="leading-tight">
                Ready to launch a website that performs and delights users?
              </Typography>
              <Typography
                variant="p"
                className="text-sm md:text-base max-w-2xl mx-auto lg:mx-0"
              >
                Work with a fractional partner who combines WordPress and
                Next.js expertise, smooth delivery, and clear, asynchronous
                collaboration. Limited availability for new builds this quarter.
              </Typography>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 w-full max-w-xs">
            <Link href="/contact" className="w-full">
              <Button
                variant="primary"
                size="lg"
                className="group w-full shadow-lg hover:shadow-xl"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <a
              href="https://wa.me/923129819819"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                variant="ghost"
                size="lg"
                className="w-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp Us</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
