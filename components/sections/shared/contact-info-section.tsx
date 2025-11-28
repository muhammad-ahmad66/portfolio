"use client";

import { MessageCircle, ExternalLink } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { contactInfo } from "@/data/contact/contact-info";

export function ContactInfoSection() {
  return (
    <div className="rounded-2xl sm:rounded-3xl border border-border/60 bg-card/80 backdrop-blur-xl p-6 sm:p-8 lg:p-12 space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <Typography variant="h3" className="text-xl sm:text-2xl">
          Contact Information
        </Typography>
        <Typography
          variant="p"
          className="text-muted-foreground text-sm sm:text-base leading-relaxed"
        >
          Reach out through any channel below. I typically respond within 2
          hours.
        </Typography>
      </div>

      {/* Contact Tiles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {contactInfo.map((contact, index) => (
          <Link
            key={index}
            href={contact.href}
            target={contact.href.startsWith("http") ? "_blank" : undefined}
            rel={
              contact.href.startsWith("http")
                ? "noopener noreferrer"
                : undefined
            }
            className="group"
          >
            <div
              className="rounded-xl sm:rounded-2xl border border-border/60 bg-background/50 p-5 sm:p-6 
              hover:border-primary-500/50 hover:bg-card/80 transition-all duration-300 space-y-3"
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Icon */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center 
                  ${contact.bgColor} ${contact.color} 
                  transition-transform duration-300 group-hover:scale-110`}
                >
                  {contact.icon}
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <p className="text-sm sm:text-base font-semibold text-foreground truncate">
                    {contact.value}
                  </p>
                </div>

                {/* External icon */}
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Response Box */}
      <div className="pt-4 sm:pt-6 border-t border-border/60">
        <div className="rounded-xl sm:rounded-2xl border border-border/60 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 p-5 sm:p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>

            <div>
              <p className="text-sm sm:text-base font-semibold text-foreground">
                Quick Response Time
              </p>
              <p className="text-xs text-muted-foreground">
                Average response: 1-2 hours
              </p>
            </div>
          </div>

          <Typography
            variant="p"
            className="text-sm sm:text-base text-muted-foreground leading-relaxed"
          >
            For urgent matters, WhatsApp is the fastest way to reach me. For
            detailed project discussions, email works best.
          </Typography>
        </div>
      </div>
    </div>
  );
}
