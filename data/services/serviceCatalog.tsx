"use client";
import {
  Globe,
  ShoppingCart,
  PencilRuler,
  Laptop,
  Layers,
  Wrench,
  ShieldCheck,
  Rocket,
  FileCode,
  MonitorSmartphone,
  Database,
  Utensils,
} from "lucide-react";

export const serviceCatalog = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "WordPress Website Development",
    description:
      "Custom WordPress websites built for speed, SEO and long-term business growth. Every site is responsive, clean-coded and ready to rank.",
    features: ["Mobile responsive", "SEO optimized", "Fast load speed"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "WooCommerce Store Setup",
    description:
      "Full eCommerce stores built to sell more and convert better. From product listings to secure checkout, everything is set up right.",
    features: ["Secure payments", "Inventory management", "Mobile checkout"],
  },
  {
    icon: <PencilRuler className="w-6 h-6" />,
    title: "Figma to WordPress Conversion",
    description:
      "Turn your Figma designs into pixel-perfect, fully functional WordPress websites. Clean code, no templates, built exactly to your spec.",
    features: ["Pixel perfect build", "Clean semantic code", "Mobile friendly"],
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Corporate and Business Websites",
    description:
      "Professional WordPress websites for law firms, agencies, consultancies and growing businesses that want to win clients online.",
    features: ["Lead generation", "Brand focused", "Easy to manage"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance and Support",
    description:
      "Keep your WordPress site updated, secure and performing at its best every month. No more worrying about updates or broken pages.",
    features: ["Plugin updates", "Daily backups", "Bug fixes"],
  },
  {
    icon: <FileCode className="w-6 h-6" />,
    title: "Next.js Web Applications",
    description:
      "High performance web apps built with Next.js, React and TypeScript. Ideal for SaaS products, dashboards and content-heavy platforms.",
    features: ["Server side rendering", "API integration", "Lightning fast"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Complete Design and Build",
    description:
      "From brand identity to a live WordPress website, handled entirely in one project. Logo, UI design and full development all included.",
    features: ["Logo and branding", "UI design in Figma", "Full development"],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Platform Migration to WordPress",
    description:
      "Move from Wix, Webflow, Squarespace or plain HTML to WordPress without losing any content, SEO rankings or site structure.",
    features: ["Zero data loss", "SEO preserved", "Clean stable rebuild"],
  },
  {
    icon: <Utensils className="w-6 h-6" />,
    title: "Trending Business Websites",
    description:
      "Specialized WordPress sites for restaurants, real estate agencies, clinics, salons and other high-demand local businesses.",
    features: ["Booking systems", "Industry layouts", "Local SEO ready"],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "WordPress Speed Optimization",
    description:
      "Improve Core Web Vitals, boost your Google rankings and cut load time significantly. Faster sites rank higher and convert better.",
    features: ["Core Web Vitals fix", "Image optimization", "Caching setup"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "WordPress Security Hardening",
    description:
      "Protect your WordPress site from hackers, malware injections and brute force attacks before damage is done.",
    features: ["Malware removal", "Firewall setup", "Login protection"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "High Converting Landing Pages",
    description:
      "Sales focused landing pages built to turn ad traffic and organic clicks into real leads and paying customers.",
    features: ["Conversion focused", "A/B test ready", "Fast and lean"],
  },
];

export const defaultServices = serviceCatalog.slice(0, 6);
