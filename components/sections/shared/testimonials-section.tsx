"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  Star,
  ExternalLink,
  MessageCircle,
  ArrowRight,
  Sparkles,
  ChevronsDown,
  Rocket,
} from "lucide-react";
import {
  testimonials,
  fiverrProfileLink,
} from "@/data/testimonials/testimonials-data";
import { Button } from "@/components/ui/button-component";

export function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set([...prev, id]));
  };

  const openLightbox = (imagePath: string) => {
    setLightboxImage(imagePath);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "unset";
  };

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, testimonials.length));
  };

  const visibleTestimonials = testimonials.slice(0, visibleCount);
  const hasMore = visibleCount < testimonials.length;

  return (
    <>
      <section className="relative py-4 pb-12 lg:py-12 lg:pb-16">
        {/* Background with Interactive Gradient */}
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
            }}
          />

          {/* Grid Pattern */}
          <div
            className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Two Column Layout - 2:1 ratio */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left Column - Reviews */}
            <div className="flex-[2] space-y-6">
              {visibleTestimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="group relative rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm overflow-hidden">
                    {/* Rating - Above Image - SMALLER */}
                    <div className="absolute top-2 right-2 z-10 px-2 py-1 rounded-md bg-background/95 backdrop-blur-sm border border-border/50 flex items-center gap-1 shadow-sm">
                      <Star className="w-3 h-3 text-primary-500 fill-primary-500" />
                      <span className="text-xs font-bold text-foreground">
                        {testimonial.rating.toFixed(1)}
                      </span>
                    </div>

                    {/* Review Image */}
                    <div
                      className="relative cursor-pointer"
                      onClick={() => openLightbox(testimonial.imagePath)}
                    >
                      {/* Loading Indicator */}
                      {!loadedImages.has(testimonial.id) && (
                        <div className="absolute inset-0 flex items-center justify-center bg-muted/50 backdrop-blur-sm z-10 min-h-[300px]">
                          <div className="flex flex-col items-center gap-3">
                            <div className="w-10 h-10 border-3 border-primary-500/30 border-t-primary-500 rounded-full animate-spin" />
                            <span className="text-xs text-muted-foreground font-medium">
                              Loading...
                            </span>
                          </div>
                        </div>
                      )}

                      <Image
                        src={testimonial.imagePath}
                        alt={`Client review ${testimonial.id}`}
                        width={1200}
                        height={800}
                        className="w-full h-auto"
                        onLoad={() => handleImageLoad(testimonial.id)}
                        loading="lazy"
                      />

                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/5 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              ))}

              {/* Load More Button */}
              {hasMore && (
                <div className="flex justify-center pt-4">
                  <Button
                    onClick={loadMore}
                    className=""
                    variant="outline"
                    size="lg"
                  >
                    <span className="text-sm font-semibold text-foreground">
                      Show More Reviews
                    </span>
                    <ChevronsDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
                  </Button>
                </div>
              )}
            </div>

            {/* Right Column - CTA (Sticky) */}
            <aside className="flex-[1]">
              <div className="lg:sticky lg:top-24">
                <div
                  className={`rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm p-8 space-y-6 transition-all duration-700 delay-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center">
                    <Rocket
                      className="w-8 h-8 text-background"
                      strokeWidth={2}
                    />
                  </div>

                  {/* Heading */}
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
                      Ready to Launch Your Project?
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      Join clients who've trusted me to design and deliver
                      reliable, high-quality digital products from day one.
                      <em> Let's create something amazing together.</em>
                    </p>
                  </div>

                  {/* Stats - ENHANCED DESIGN */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="relative p-5 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 border border-border/40 overflow-hidden group hover:border-border/60 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500" />
                      <div className="relative">
                        <div className="text-3xl font-bold text-foreground mb-1">
                          60+
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">
                          Happy Clients
                        </div>
                      </div>
                    </div>
                    <div className="relative p-5 rounded-xl bg-gradient-to-br from-muted/40 to-muted/20 border border-border/40 overflow-hidden group hover:border-border/60 transition-all duration-300">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5 rounded-full blur-2xl group-hover:bg-primary-500/10 transition-all duration-500" />
                      <div className="relative">
                        <div className="flex items-baseline gap-1 mb-1">
                          <div className="text-3xl font-bold text-foreground">
                            4.9
                          </div>
                          <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">
                          Avg Rating
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-2">
                    <Link href="/contact" className="block">
                      <button className="w-full px-6 py-4 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all duration-300 flex items-center justify-center gap-2 group">
                        <MessageCircle className="w-5 h-5" />
                        <span>Start Your Project</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>

                    <a
                      href={fiverrProfileLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <button className="w-full px-6 py-4 rounded-full border border-border/60 bg-background/50 hover:bg-card transition-all duration-300 flex items-center justify-center gap-2 group">
                        <Star className="w-5 h-5 text-foreground fill-foreground" />
                        <span className="font-semibold text-foreground">
                          View Fiverr Profile
                        </span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </button>
                    </a>
                  </div>

                  {/* Trust Badge - WITH CLIENT IMAGES */}
                  <div className="pt-6 border-t border-border/40">
                    <div className="flex items-center gap-3">
                      <div className="flex -space-x-3">
                        <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden ring-1 ring-border/20">
                          <Image
                            src="/images/clients/img1.webp"
                            alt="Client"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden ring-1 ring-border/20">
                          <Image
                            src="/images/clients/img2.webp"
                            alt="Client"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-10 h-10 rounded-full border-2 border-card overflow-hidden ring-1 ring-border/20">
                          <Image
                            src="/images/clients/img3.webp"
                            alt="Client"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Trusted by businesses worldwide
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-background/98 backdrop-blur-lg flex items-center justify-center p-4 animate-[fade-in_0.2s_ease-out]"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-card/90 backdrop-blur-sm border border-border/60 flex items-center justify-center hover:bg-card transition-all duration-200 z-50"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>

          <div className="relative max-w-7xl max-h-[95vh] w-full">
            <Image
              src={lightboxImage}
              alt="Review screenshot"
              width={2000}
              height={1500}
              className="w-full h-auto max-h-[95vh] object-contain rounded-xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
