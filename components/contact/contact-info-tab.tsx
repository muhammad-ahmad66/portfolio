// src/components/contact/contact-info-tab.tsx
"use client";

import { contactInfo } from "@/data/contact/contact-info";
import { Clock, MapPin, Briefcase, FileText } from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button-component";

export function ContactInfoTab() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <Typography variant="h4">Contact Information</Typography>
        <Typography variant="p" className="text-muted-foreground text-sm">
          All the ways you can reach me
        </Typography>
      </div>

      {/* Contact Methods */}
      <div className="space-y-3">
        {contactInfo.map((method, index) => {
          return (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-3 rounded-xl border border-border hover:bg-muted/50 transition-all"
            >
              <div
                className={`w-10 h-10 rounded-lg ${method.bgColor} ${method.color} flex items-center justify-center shrink-0`}
              >
                {method.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium">{method.label}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {method.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <a href="/cv" rel="noopener noreferrer">
          <Button variant="outline" size="md" className="w-full group">
            <FileText className="w-4 h-4 mr-2" />
            <span className="text-sm">View CV</span>
          </Button>
        </a>

        <a href="/portfolio" rel="noopener noreferrer">
          <Button variant="outline" size="md" className="w-full group">
            <Briefcase className="w-4 h-4 mr-2" />
            <span className="text-sm">Portfolio</span>
          </Button>
        </a>
      </div>

      {/* Availability Info */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary-500/5 to-secondary-500/5 p-5 space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary-500/10 text-primary-500 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1">Business Hours</p>
            <p className="text-xs text-muted-foreground">
              Monday - Friday: 10:00 AM - 11:00 PM (PKT)
            </p>
            <p className="text-xs text-muted-foreground">
              Saturday: 11:00 AM - 10:00 PM (PKT)
            </p>
            <p className="text-xs text-muted-foreground">Sunday: Closed</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-secondary-500/10 text-secondary-500 flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1">Location</p>
            <p className="text-xs text-muted-foreground">
              Based in Islamabad, Pakistan
            </p>
            <p className="text-xs text-muted-foreground">
              Available for remote work worldwide
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 text-green-500 flex items-center justify-center shrink-0">
            <Briefcase className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1">Current Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-xs text-muted-foreground">
                Available for new projects
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Response Time */}
      <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
        <p className="text-xs font-medium mb-2">⚡ Average Response Time</p>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Email</span>
            <span className="font-medium">1 hour</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">WhatsApp</span>
            <span className="font-medium">Instant - 1 hours</span>
          </div>
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground">Fiverr</span>
            <span className="font-medium">Instant - 30 mins</span>
          </div>
        </div>
      </div>
    </div>
  );
}
