// 'use client';

// import { useState, useEffect } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button-component';
// import { Typography } from '@/components/ui/typography';
// import { IconList } from '@/components/ui/icon-list';
// import { BadgeButton } from '@/components/ui/badge-button';
// import { ArrowRight, Sparkles } from 'lucide-react';
// import { BadgeHeading } from '@/components/ui/badge-heading';
// import { wordpressTech, devTech } from '@/data/home/tech-stack';
// import { trustIndicators } from '@/data/home/truest-indicators';

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const focusPoints = [
//     'Fractional partner for startups & studios',
//     'WordPress + Next.js ecosystems',
//     'Calm delivery, async friendly',
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Subtle Gradient Background */}
//       <div className="absolute inset-0 bg-background">
//         <div
//           className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
//           }}
//         />
//         <div
//           className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
//             backgroundSize: '40px 40px',
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-20">
//         <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
//           {/* Left Column */}
//           <div className="space-y-8">
//             <BadgeHeading
//               label="Trusted by 50+ businesses worldwide"
//               icon={<Sparkles className="w-4 h-4 text-primary-500" />}
//             />

//             <div
//               className={`space-y-4 transition-all duration-700 delay-100 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-4'
//               }`}
//             >
//               <Typography variant="h1" className="leading-tight">
//                 Build calm,
//                 <span className="relative inline-block px-2">
//                   <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                     high-performing
//                   </span>
//                   <span className="absolute bottom-1 left-1/4 right-1/4 h-2 bg-primary-500/15 rounded-full blur-sm" />
//                 </span>
//                 experiences that convert.
//               </Typography>

//               <Typography variant="lead" className="max-w-xl">
//                 Fractional partner for founders and teams who need modern
//                 WordPress + Next.js ecosystems, thoughtful brand systems, and
//                 clear communication every step of the way.
//               </Typography>

//               <div className="grid sm:grid-cols-3 gap-3">
//                 {focusPoints.map((point) => (
//                   <div
//                     key={point}
//                     className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3 text-sm text-muted-foreground"
//                   >
//                     {point}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div
//               className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-200 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-4'
//               }`}
//             >
//               <Link href="/contact">
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   className="group shadow-lg hover:shadow-xl"
//                 >
//                   <span>Start Your Project</span>
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//               <Link href="/portfolio">
//                 <Button variant="ghost" size="lg" className="group">
//                   <span>View Portfolio</span>
//                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//             </div>

//             <div
//               className={`flex justify-center transition-all duration-700 delay-300 ${
//                 isVisible
//                   ? 'opacity-100 translate-y-0'
//                   : 'opacity-0 translate-y-4'
//               }`}
//             >
//               <IconList items={trustIndicators} variant="custom" />
//             </div>
//           </div>

//           {/* Right Column */}
//           <div
//             className={`relative transition-all duration-700 delay-400 ${
//               isVisible
//                 ? 'opacity-100 translate-x-0'
//                 : 'opacity-0 translate-x-8'
//             }`}
//           >
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="col-span-2 relative rounded-[36px] overflow-hidden border border-border/70 bg-card/80 aspect-[4/3] shadow-2xl group">
//                   <Image
//                     src="/images/my-development-workspace-landscape.webp"
//                     alt="Modern workspace"
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="relative rounded-[30px] overflow-hidden border border-border shadow-2xl group h-64">
//                   <Image
//                     src="/images/my-development-workspace-potrait.webp"
//                     alt="Studio portrait"
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>

//                 <div className="relative rounded-[30px] overflow-hidden border border-border shadow-2xl group h-64">
//                   <Image
//                     src="/images/project-design-visual-landscape.webp"
//                     alt="Design board"
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                 </div>
//               </div>

//               <div className="absolute -bottom-8 lg:-bottom-10 left-6 right-6 rounded-3xl border border-border/70 bg-background/90 backdrop-blur-xl shadow-lg p-5 flex flex-col gap-2">
//                 <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
//                   Currently crafting
//                 </p>
//                 <p className="text-sm font-semibold text-foreground">
//                   WordPress + Next.js membership experience
//                 </p>
//                 <span className="text-xs text-muted-foreground">
//                   Live design systems, async sprints, performance budgets locked
//                   in.
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Tech Stack Section */}
//         <div
//           className={`mt-20 pt-12 border-t border-border/50 space-y-8 transition-all duration-700 delay-500 ${
//             isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//           }`}
//         >
//           {/* WordPress Technologies */}
//           <div className="space-y-4">
//             <Typography variant="small" className="text-center">
//               WordPress Expertise
//             </Typography>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//               {wordpressTech.map((tech) => (
//                 <BadgeButton
//                   key={tech.label}
//                   icon={tech.icon}
//                   label={tech.label}
//                   variant="card"
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Modern Development Stack */}
//           <div className="space-y-4">
//             <Typography variant="small" className="text-center">
//               Modern Tech and Tools
//             </Typography>
//             <div className="flex flex-wrap items-center justify-center gap-2">
//               {devTech.map((tech) => (
//                 <BadgeButton
//                   key={tech.label}
//                   icon={tech.icon}
//                   label={tech.label}
//                   variant="minimal"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Decorative Elements */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
//     </section>
//   );
// }

// -----------------
// -----------------
// -----------------
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button-component';
import { Typography } from '@/components/ui/typography';
import { IconList } from '@/components/ui/icon-list';
import { BadgeButton } from '@/components/ui/badge-button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { BadgeHeading } from '@/components/ui/badge-heading';
import { wordpressTech, devTech } from '@/data/home/tech-stack';
import { trustIndicators } from '@/data/home/truest-indicators';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const focusPoints = [
    'Fractional partner for startups & studios',
    'WordPress + Next.js ecosystems',
    'Calm delivery, async friendly',
  ];

  const stats = [
    { value: '5+', label: 'years shipping web platforms' },
    { value: '50+', label: 'multi-platform builds' },
    { value: '100%', label: 'launch readiness score' },
  ];

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 bg-background">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-6 lg:space-y-8">
            <BadgeHeading
              label="Trusted by 50+ businesses worldwide"
              icon={<Sparkles className="w-4 h-4 text-primary-500" />}
            />

            <div
              className={`space-y-4 transition-all duration-700 delay-100 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Typography variant="h1" className="leading-tight">
                Build
                <span className="relative inline-block px-2">
                  <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                    high-performing
                  </span>
                  <span className="absolute bottom-1 left-1/4 right-1/4 h-2 bg-primary-500/15 rounded-full blur-sm" />
                </span>
                experiences that convert.
              </Typography>

              <Typography variant="lead" className="max-w-xl">
                Fractional partner for founders and teams who need modern
                WordPress + Next.js ecosystems, thoughtful brand systems, and
                clear communication every step of the way.
              </Typography>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {focusPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-border/60 bg-card/70 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-muted-foreground"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-200 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  className="group shadow-lg hover:shadow-xl w-full sm:w-auto"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/portfolio" className="w-full sm:w-auto">
                <Button
                  variant="ghost"
                  size="lg"
                  className="group w-full sm:w-auto"
                >
                  <span>View Portfolio</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>

            <div
              className={`flex justify-center lg:justify-start transition-all duration-700 delay-300 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <IconList items={trustIndicators} variant="custom" />
            </div>
          </div>

          {/* Right Column - Image Gallery */}
          <div
            className={`relative transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] pb-24 sm:pb-28 lg:pb-32">
              {/* Animated Gradient Orbs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl animate-pulse" />
              <div
                className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse"
                style={{ animationDelay: '1s' }}
              />

              {/* Main Hero Image */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-[40px] sm:rounded-[60px] rotate-2 sm:rotate-3 scale-105 -z-10" />

                <div className="relative overflow-hidden group rounded-[32px] sm:rounded-[40px]">
                  <div className="relative h-[280px] sm:h-[350px] lg:h-[520px]">
                    <Image
                      src="/images/my-development-workspace-landscape.webp"
                      alt="Modern workspace"
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-secondary-500/20 opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>

              {/* Top Left Card - Portrait */}
              <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-12 w-28 h-36 sm:w-36 sm:h-48 lg:w-40 lg:h-52 -rotate-12 hover:-rotate-6 transition-all duration-500 group z-10">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 bg-primary-500/30 rounded-[20px] sm:rounded-[28px] translate-x-2 translate-y-2 blur-xl -z-10" />

                  <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[28px] shadow-2xl border border-white/10">
                    <Image
                      src="/images/my-development-workspace-potrait.webp"
                      alt="Creative workspace"
                      fill
                      className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-3"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>

              {/* Spinning Exclusive Badge - Grayscale */}
              <div className="absolute top-1/3 lg:top-1/4 -right-4 sm:-right-6 lg:-right-12 z-20">
                <div
                  className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
                  style={{ animation: 'spin 20s linear infinite' }}
                >
                  <Image
                    src="/images/exclusive.png"
                    alt="Exclusive"
                    fill
                    className="object-contain grayscale opacity-40"
                  />
                </div>
              </div>

              {/* Decorative Square - Mobile Hidden */}
              <div className="hidden sm:block absolute bottom-1/4 -left-4 w-12 h-12 sm:w-16 sm:h-16">
                <div className="w-full h-full bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-2xl rotate-45 animate-pulse" />
              </div>

              {/* SVG Circles - Desktop Only */}
              <svg
                className="hidden lg:block absolute top-12 right-1/4 w-24 h-24 xl:w-32 xl:h-32 opacity-20"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-primary-500"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="30"
                  stroke="currentColor"
                  strokeWidth="1"
                  fill="none"
                  className="text-secondary-500"
                />
              </svg>

              {/* Floating Dots - Desktop Only */}
              <div className="hidden lg:block absolute bottom-1/3 left-1/4 opacity-30">
                <div className="grid grid-cols-3 gap-2">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-primary-500"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div
          className={`mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-12 border-t border-border/50 space-y-6 sm:space-y-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              WordPress Expertise
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {wordpressTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="card"
                />
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Typography variant="small" className="text-center">
              Modern Tech and Tools
            </Typography>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {devTech.map((tech) => (
                <BadgeButton
                  key={tech.label}
                  icon={tech.icon}
                  label={tech.label}
                  variant="minimal"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
}
