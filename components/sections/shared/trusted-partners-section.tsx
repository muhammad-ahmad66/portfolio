'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography } from '@/components/ui/typography';
import { Sparkles } from 'lucide-react';

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
      src: '/images/client-logos/wordpress-website-client-logo-18.webp',
      alt: 'Client 18',
    },
    // {
    //   id: 19,
    //   src: '/images/client-logos/wordpress-website-client-logo-19.svg',
    //   alt: 'Client 19',
    // },
    // {
    //   id: 20,
    //   src: '/images/client-logos/wordpress-website-client-logo-20.svg',
    //   alt: 'Client 20',
    // },
    {
      id: 21,
      src: '/images/client-logos/wordpress-website-client-logo-21.png',
      alt: 'Client 21',
    },
    {
      id: 22,
      src: '/images/client-logos/wordpress-website-client-logo-22.webp',
      alt: 'Client 22',
    },
    {
      id: 23,
      src: '/images/client-logos/wordpress-website-client-logo-23.webp',
      alt: 'Client 23',
    },
    {
      id: 24,
      src: '/images/client-logos/wordpress-website-client-logo-24.webp',
      alt: 'Client 24',
    },
    {
      id: 25,
      src: '/images/client-logos/wordpress-website-client-logo-25.png',
      alt: 'Client 25',
    },
    {
      id: 26,
      src: '/images/client-logos/wordpress-website-client-logo-26.webp',
      alt: 'Client 26',
    },
  ];

  // Split logos into two rows
  const firstRow = clientLogos.slice(0, 13);
  const secondRow = clientLogos.slice(13);

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-12 space-y-4 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-muted-foreground">
                Trusted Partners
              </span>
            </div>
          </div>

          <Typography variant="h2" className="leading-tight">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </Typography>

          <Typography
            variant="lead"
            className="max-w-2xl mx-auto text-muted-foreground"
          >
            Partnering with innovative companies to deliver exceptional digital
            experiences
          </Typography>
        </div>

        {/* Scrolling Logos */}
        <div
          className={`space-y-6 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* First Row - Left to Right */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-scroll-left">
                {[...firstRow, ...firstRow].map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-shrink-0 w-20 h-12 md:w-28 md:h-14 mx-2 md:mx-3 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Right to Left */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

            <div className="overflow-hidden">
              <div className="flex animate-scroll-right">
                {[...secondRow, ...secondRow].map((logo, index) => (
                  <div
                    key={`${logo.id}-${index}`}
                    className="flex-shrink-0 w-20 h-12 md:w-28 md:h-14 mx-2 md:mx-3 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
                  >
                    <div className="relative w-full h-full p-2">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        /* Removed hover pause */
      `}</style>
    </section>
  );
}
