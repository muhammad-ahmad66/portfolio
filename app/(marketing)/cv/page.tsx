import type { Metadata } from "next";
import { CVResume } from "@/components/CVResume";

export const metadata: Metadata = {
  title: "Resume / CV – Muhammad Ahmad | Full-Stack & WordPress Developer",
  description:
    "View and download the CV of Muhammad Ahmad — full-stack developer and WordPress specialist with 3+ years of experience building fast, SEO-optimised websites for global clients.",
  alternates: { canonical: "https://muhammadahmad.dev/cv" },
  openGraph: {
    title: "Resume / CV – Muhammad Ahmad | Full-Stack & WordPress Developer",
    description:
      "Full-stack developer & WordPress specialist. View CV, skills, experience and download as PDF.",
    url: "https://muhammadahmad.dev/cv",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "Resume / CV – Muhammad Ahmad | Full-Stack Developer",
    description: "View and download Muhammad Ahmad's developer CV/resume.",
  },
};

export default function CVPage() {
  return (
    <div className="relative overflow-hidden pt-20 pb-12 md:pt-28 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <CVResume />
      </div>
    </div>
  );
}
