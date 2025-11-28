"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button-component";
import { featuredProjects } from "@/data/work/featured-projects";
import { categoryColors, type PortfolioCategory } from "@/data/work/portfolio";
import {
  ArrowRight,
  Sparkles,
  Mail,
  Briefcase,
  ExternalLink,
  ChevronsDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Get projects to display (initially 6, then more on load more)
  const displayedProjects = featuredProjects.slice(0, visibleProjects);
  const hasMore = visibleProjects < featuredProjects.length;

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, featuredProjects.length));
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden pt-9 pb-12 lg:py-20"
    >
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-9 md:mb-16 space-y-3 md:space-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Badge */}
          <BadgeHeading
            label="Recent Work"
            icon={<Sparkles className="w-4 h-4 text-primary-500" />}
          />

          {/* Title */}
          <Typography variant="h2" className="font-semibold leading-tight">
            Featured Projects
          </Typography>

          <Typography variant="lead" className="max-w-2xl mx-auto">
            A curated showcase of websites and web applications I&apos;ve
            crafted for clients, demonstrating design quality, technical
            excellence, and measurable results across multiple industries.
          </Typography>
        </div>

        {/* 4:2 Column Layout */}
        <div
          className={`grid lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Left Column: 3 columns grid (2 rows on desktop) */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {displayedProjects.map((project) => (
                <FeaturedProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="flex justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={loadMore}
                  className="group"
                >
                  <span>Load More Projects</span>
                  <ChevronsDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                </Button>
              </div>
            )}
          </div>

          {/* Right Column: CTA Box */}
          <div className="space-y-6 rounded-3xl border border-border/60 bg-card/70 backdrop-blur-xl p-8 shadow-2xl self-start sticky top-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 flex items-center justify-center text-primary-500">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <Typography variant="h3" className="text-xl">
                    Ready to Start?
                  </Typography>
                  <p className="text-sm text-muted-foreground">
                    Let&apos;s build something amazing together
                  </p>
                </div>
              </div>

              <Typography variant="p" className="text-sm text-muted-foreground">
                Whether you need a custom WordPress site, a modern web
                application, or a complete digital transformation, I'm here to
                help bring your vision to life.
              </Typography>
            </div>

            <div className="space-y-3 pt-4 border-t border-border/50">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 shadow-lg shadow-primary/40 group"
              >
                <Mail className="mr-2 h-4 w-4" />
                <span>Contact Us</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/portfolio"
                className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-xl border-2 border-border/60 hover:border-foreground/50 hover:bg-accent transition-all duration-300 bg-background/50 text-foreground group"
              >
                <Briefcase className="mr-2 h-4 w-4" />
                <span>View Full Portfolio</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeaturedProjectCardProps {
  project: {
    id: string;
    name: string;
    liveUrl: string;
    imageUrl: string;
    imageAlt: string;
    categories: PortfolioCategory[];
  };
}

import { Eye } from "lucide-react";
import { Tooltip } from "@/components/ui/tooltip";
import { BadgeHeading } from "@/components/ui/badge-heading";

function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={project.liveUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-500 block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative h-[170px] md:h-[300px] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.imageAlt}
          fill
          className={`object-cover transition-transform duration-700 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Clean Minimal Eye Icon */}
        <div
          className="
            absolute top-3 right-3
            p-1 md:p-2 rounded-full
            bg-black/40
            text-white
            backdrop-blur-[1px]
            border border-white/10
            flex items-center justify-center
            shadow-sm
            transition-all duration-300
            group-hover:bg-black/60
          "
        >
          {" "}
          <Tooltip content="Live Preview" position="left">
            <Eye className="w-4 h-4" />
          </Tooltip>
        </div>
      </div>

      {/* Text Content */}
      <div className="p-2 pb-3 md:p-4 space-y-2">
        <h3 className="text-sm md:text-lg font-semibold text-foreground">
          {project.name}
        </h3>

        <div className="flex flex-wrap gap-1 md:gap-1.5">
          {project.categories.map((category) => (
            <span
              key={category}
              className={cn(
                "px-2 py-0.5 text-[8px] md:text-[10px] font-medium rounded-full border",
                categoryColors[category]
              )}
            >
              {category}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
