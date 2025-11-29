"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeartHandshake } from "lucide-react";
import { Typography } from "./typography";

export function TrustedPartnersSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Generate client logos array
  const clientLogos = [
    ...Array.from({ length: 17 }, (_, i) => ({
      id: i + 1,
      src: `/images/client-logos/wordpress-website-client-logo-${i + 1}.png`,
      alt: `Client ${i + 1}`,
    })),
    {
      id: 18,
      src: "/images/client-logos/wordpress-website-client-logo-18.webp",
      alt: "Client 18",
    },
    {
      id: 21,
      src: "/images/client-logos/wordpress-website-client-logo-21.png",
      alt: "Client 21",
    },
    {
      id: 22,
      src: "/images/client-logos/wordpress-website-client-logo-22.webp",
      alt: "Client 22",
    },
    {
      id: 23,
      src: "/images/client-logos/wordpress-website-client-logo-23.webp",
      alt: "Client 23",
    },
    {
      id: 24,
      src: "/images/client-logos/wordpress-website-client-logo-24.webp",
      alt: "Client 24",
    },
    {
      id: 25,
      src: "/images/client-logos/wordpress-website-client-logo-25.png",
      alt: "Client 25",
    },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-2 lg:py-12">
      <div className="w-full max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Container Row */}
        <div
          className={`flex items-center rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm overflow-hidden transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          {/* Left: Label Box */}
          <div className="flex-shrink-0 flex items-center px-4 lg:px-8 py-4 lg:py-8 border-r border-border/60 bg-muted/30">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-2.5">
              <HeartHandshake
                className="w-4 h-4 text-primary-500"
                strokeWidth={2}
              />

              <Typography variant="small">Trusted Partners</Typography>
            </div>
          </div>

          {/* Right: Scrolling Logos */}
          <div className="flex-1 relative py-3 lg:py-3">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-card/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-card/50 to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-scroll">
                {[...clientLogos, ...clientLogos, ...clientLogos].map(
                  (logo, index) => (
                    <div
                      key={`${logo.id}-${index}`}
                      className="flex-shrink-0 w-20 h-12 md:w-24 md:h-14 lg:w-28 lg:h-14 mx-2 lg:mx-3"
                    >
                      {/* Logo Card */}
                      <div className="relative w-full h-full rounded-lg border border-border/40 bg-background/80 p-2.5 lg:p-3">
                        {/* Logo - grayscale to color on hover */}
                        <div className="relative w-full h-full grayscale brightness-90 contrast-100 hover:grayscale-0 hover:brightness-100 transition-all duration-500 cursor-pointer">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-scroll {
          animation: scroll 80s linear infinite;
        }
      `}</style>
    </section>
  );
}
