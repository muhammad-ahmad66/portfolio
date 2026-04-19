import type { Metadata } from "next";
import { PortfolioWindow } from "@/components/PortfolioWindow";

export const metadata: Metadata = {
  title: "Portfolio – All Websites Built by Muhammad Ahmad",
  description:
    "Browse 60+ live websites built by Muhammad Ahmad — WordPress, WooCommerce & Next.js developer. Projects across e-commerce, healthcare, hospitality, real estate and more.",
  alternates: { canonical: "https://muhammadahmad.dev/portfolio" },
  openGraph: {
    title: "Portfolio – All Websites Built by Muhammad Ahmad",
    description:
      "60+ live client websites across e-commerce, healthcare, hospitality and real estate. WordPress, WooCommerce & Next.js specialist.",
    url: "https://muhammadahmad.dev/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio – All Websites Built by Muhammad Ahmad",
    description:
      "60+ live client websites — WordPress, WooCommerce & Next.js developer.",
  },
};

export default function PortfolioPage() {
  return (
    <div className="relative overflow-hidden pt-20 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <PortfolioWindow />
      </div>
    </div>
  );
}
