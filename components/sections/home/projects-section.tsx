"use client";

import { useState, useEffect } from "react";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button-component";
import { ProjectCard } from "@/components/cards/project-card";
import { projects } from "@/data/projects";
import { ArrowRight, Sparkles } from "lucide-react";

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    "All",
    "WordPress Development",
    "Web Development",
    "E-commerce",
    "Portfolio",
    "Web Application",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 6, filteredProjects.length));
  };

  return (
    <section className="relative overflow-hidden py-14 lg:py-20">
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
          className={`text-center mb-16 space-y-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-muted-foreground">
                Recent Work
              </span>
            </div>
          </div>

          {/* Title */}
          <Typography variant="h2" className="leading-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Projects
            </span>
          </Typography>

          <Typography variant="lead" className="max-w-2xl mx-auto">
            A collection of websites and applications I've built for clients
            across various industries
          </Typography>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(6);
              }}
              className={`px-5 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-foreground text-background shadow-lg"
                  : "bg-background border border-border hover:border-foreground/30 text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid - Masonry Layout */}
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {displayedProjects.map((project) => (
            <div key={project.id} className="break-inside-avoid">
              <ProjectCard
                title={project.title}
                category={project.category}
                imageSrc={project.imageSrc}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <div className="flex justify-center mt-16">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              className="group"
            >
              <span>Load More Projects</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
