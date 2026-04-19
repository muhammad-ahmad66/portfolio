"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button-component";
import { ShimmerImage } from "@/components/ui/shimmer-image";

interface ProjectCardProps {
  title: string;
  category: string;
  imageSrc: string;
  liveUrl: string;
  className?: string;
}

export function ProjectCard({
  title,
  category,
  imageSrc,
  liveUrl,
  className = "",
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl transition-all duration-500 ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full overflow-hidden rounded-2xl">
        <div className="relative h-[300px] overflow-hidden rounded-2xl">
          <ShimmerImage
            src={imageSrc}
            alt={title}
            width={800}
            height={1200}
            className="w-full object-cover transition-opacity duration-500"
            onLoad={(e) => setImageHeight((e.target as HTMLImageElement).naturalHeight)}
            style={{
              transform: isHovered
                ? `translateY(-${Math.max(imageHeight - 300, 0)}px)`
                : "translateY(0)",
              transition: isHovered ? "transform 8s ease-in-out" : "transform 0.6s ease-out",
            }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-3 w-fit">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
            <span className="text-xs font-medium text-white">{category}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-foreground w-full"
            >
              <span>View Live</span>
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
