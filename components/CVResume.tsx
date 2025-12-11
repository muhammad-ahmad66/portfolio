// ============================================
// FILE: components/cv/cv-resume.tsx (FIXED MOBILE LAYOUT)
// ============================================
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Download,
  Loader2,
  Award,
  Star,
} from "lucide-react";
import { Typography } from "@/components/ui/typography";
import { generateAndDownloadPDF } from "@/lib/pdf-helpers";

export function CVResume() {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generateAndDownloadPDF("cv-resume", "Muhammad_Ahmad_CV", {
        format: [210, 297], // A4
        orientation: "portrait",
        quality: 0.98,
        scale: 2,
      });
    } catch (error) {
      console.error("Failed to generate PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  return (
    <div id="cv-resume" className="w-full max-w-4xl mx-auto">
      <div className="mt-6 bg-background rounded-[32px] border border-border/60 p-6 md:mt-12 sm:p-8 lg:p-12 shadow-lg">
        {/* Header */}
        <div className="mb-8 pb-8 border-b border-border/60">
          <div className="mb-6">
            <Typography
              variant="h1"
              className="text-xl sm:text-4xl lg:text-5xl mb-2"
            >
              Muhammad Ahmad
            </Typography>
            <Typography
              variant="lead"
              className="text-sm sm:text-lg text-muted-foreground"
            >
              Senior WordPress Developer | MERN Full-Stack Developer
            </Typography>
          </div>

          {/* Fiverr Badge - FIXED MOBILE LAYOUT */}
          <div className="mb-6">
            <a
              href="https://www.fiverr.com/muhammad_ugv"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-4 rounded-2xl border border-border bg-accent/50 hover:bg-accent hover:border-primary-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20">
                  <Award className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-sm font-semibold text-foreground">
                      Fiverr Level 2 Seller
                    </h4>
                    <ExternalLink className="h-3 w-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1 whitespace-nowrap">
                      <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 flex-shrink-0" />
                      <span>4.9 Rating</span>
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span className="whitespace-nowrap">50+ Clients</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="whitespace-nowrap">80+ Projects</span>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 flex-shrink-0 text-primary-500" />
              <span>Rawalpindi, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone className="h-4 w-4 flex-shrink-0 text-primary-500" />
              <span>(+92) 355 5374466</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="h-4 w-4 flex-shrink-0 text-primary-500" />
              <a
                href="mailto:muhammadugv66@gmail.com"
                className="hover:text-foreground transition-colors truncate"
              >
                muhammadugv66@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Professional Summary
          </Typography>
          <div className="space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              I build websites that are simple to use, fast, and reliable. With
              over 3 years of experience in WordPress, I've worked on a wide
              range of projects from business sites to e-commerce stores.
            </p>
            <p>
              Alongside WordPress, I'm learning and practicing full-stack
              development with the MERN stack. I enjoy creating web apps that
              are clear, practical, and user-friendly.
            </p>
            <p>
              My focus is always on clean code, smooth design, and giving people
              websites that work the way they need.
            </p>
          </div>
        </section>

        {/* Professional Skills */}
        <section className="mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Professional Skills
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                WordPress
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>Custom websites, UI/UX</li>
                <li>Elementor, Divi, WpBakery, LMS</li>
                <li>WooCommerce, ACF/CPT etc.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                Frontend
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>HTML, CSS, SCSS, JavaScript, TypeScript</li>
                <li>React, Next.js, Tailwind, Bootstrap</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                Backend
              </h4>
              <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>Node.js, Express.js, MongoDB</li>
                <li>Mongoose, REST APIs, PUG</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
              Other
            </h4>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Git/GitHub, JWT authentication, MVC architecture, Postman
            </p>
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Work Experience
          </Typography>
          <div className="space-y-6">
            {/* Software Engineer - 31 Green */}
            <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <Typography
                    variant="h4"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Software Engineer
                  </Typography>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      31 Green, Remote
                    </p>
                    <a
                      href="https://www.linkedin.com/company/31green/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  Jan 2025 - Present
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Developing modern web applications using React, TypeScript,
                    Next.js, Sass, and Tailwind CSS.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Building responsive, performant user interfaces with
                    component-driven architecture.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Collaborating with cross-functional teams to deliver
                    high-quality software solutions.
                  </span>
                </li>
              </ul>
            </div>

            {/* Senior WordPress Developer */}
            <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <Typography
                    variant="h4"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Senior WordPress Developer
                  </Typography>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      KiwiLogics, Rawalpindi
                    </p>
                    <a
                      href="https://www.linkedin.com/company/kiwilogics"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  2024 - 2025
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Designed and delivered 100+ websites using WordPress,
                    Elementor, Divi, and ACF.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Built e-commerce stores, landing pages, and business sites
                    with hosting and speed optimization.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Supported clients with updates, redesigns, and ongoing
                    maintenance.
                  </span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary-500 hover:text-primary-600 transition-colors"
                >
                  <span>View Portfolio</span>
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
            </div>

            {/* Front-End Developer */}
            <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <Typography
                    variant="h4"
                    className="text-lg sm:text-xl font-semibold"
                  >
                    Front-End Developer
                  </Typography>
                  <div className="flex items-center gap-2">
                    <p className="text-muted-foreground text-sm sm:text-base">
                      SMEK Software Agency
                    </p>
                    <a
                      href="https://www.linkedin.com/company/smekagency/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      <Linkedin className="h-3 w-3" />
                    </a>
                  </div>
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                  2022 - 2023
                </span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground mt-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Developed websites and web pages using HTML, CSS, SCSS,
                    JavaScript, and Bootstrap.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Translated UI/UX designs into responsive, mobile-friendly
                    layouts.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-500 mt-1.5">•</span>
                  <span>
                    Worked closely with designers to create interactive features
                    and smooth interfaces.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Education
          </Typography>
          <div className="border-l-2 border-primary-500 pl-4 sm:pl-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div>
                <Typography
                  variant="h4"
                  className="text-lg sm:text-xl font-semibold"
                >
                  BS in Computer Science
                </Typography>
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground font-medium">
                2020 - 2024
              </span>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Projects
          </Typography>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">
                WordPress Projects
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                In this document, you can find my recent WordPress websites with
                live links:
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-xs sm:text-sm text-primary-500 hover:text-primary-600 transition-colors"
              >
                <span>View Portfolio</span>
                <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </section>

        {/* Online Presence */}
        <section className="pt-6 border-t border-border/60 mb-8">
          <Typography
            variant="h3"
            className="text-xl sm:text-2xl mb-4 font-semibold"
          >
            Online Presence
          </Typography>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.fiverr.com/muhammad_ugv"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Award className="h-4 w-4 text-green-500" />
              <span>Fiverr Profile</span>
            </a>
            <a
              href="https://github.com/muhammad-ahmad66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>@muhammad-ahmad66</span>
            </a>
            <a
              href="https://linkedin.com/in/m-ahmad66"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>@m-ahmad66</span>
            </a>
            <a
              href="https://wa.me/923129819819"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>+92 3129818199</span>
            </a>
          </div>
        </section>

        {/* Download CV Button at Bottom */}
        <div className="pt-6 border-t border-border/60 flex justify-center">
          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF}
            className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-xl border-2 border-border/60 hover:border-foreground/50 hover:bg-accent transition-all duration-300 bg-background/50 text-foreground disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isGeneratingPDF ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                <span className="text-sm sm:text-base">Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Download CV</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
