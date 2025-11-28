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
} from "lucide-react";

export const serviceCatalog = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "WordPress Website Development",
    description: "Full business websites built clean and stable.",
    features: ["Responsive build", "SEO ready", "Fast load time"],
  },
  {
    icon: <ShoppingCart className="w-6 h-6" />,
    title: "WooCommerce Store Setup",
    description: "Online stores built for sales and smooth checkout.",
    features: ["Payment methods", "Order system", "Shipping setup"],
  },
  {
    icon: <PencilRuler className="w-6 h-6" />,
    title: "UI to WordPress Conversion",
    description: "Convert UI designs into live WordPress websites.",
    features: ["Figma to site", "Clean layout", "Mobile friendly"],
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Corporate and Business Websites",
    description: "Professional sites for companies and services.",
    features: ["Content sections", "Lead forms", "Brand focused"],
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: "Website Maintenance",
    description: "Monthly support to keep sites updated.",
    features: ["Updates", "Backup plan", "Fix issues"],
  },

  {
    icon: <FileCode className="w-6 h-6" />,
    title: "Next.js Web Apps",
    description: "Custom apps built using Next.js, React and TypeScript.",
    features: ["API based", "Reusable components", "High performance"],
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Complete Design and Build",
    description: "Branding, graphic work and full WordPress development.",
    features: ["Logo design", "Page graphics", "Website build"],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6" />,
    title: "Convert To WordPress",
    description: "Convert HTML, Wix, Webflow or Shopify to WordPress.",
    features: ["Clean migration", "Data mapping", "Stable rebuild"],
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Healthcare WordPress Sites",
    description: "Websites for clinics, hospitals and doctors.",
    features: ["Booking system", "Medical pages", "HIPAA aligned"],
  },

  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Speed Optimization",
    description: "Reduce load time for better ranking and usability.",
    features: ["Caching", "Asset optimization", "Code cleanup"],
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Security Hardening",
    description: "Protect websites from spam and attacks.",
    features: ["Malware scan", "Firewall rules", "Spam control"],
  },

  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Landing Page Development",
    description: "High converting single page builds.",
    features: ["Sales focused", "Fast sections", "Form tracking"],
  },
];

export const defaultServices = serviceCatalog.slice(0, 6);
