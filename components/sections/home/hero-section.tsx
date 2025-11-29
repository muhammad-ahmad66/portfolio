// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Image from 'next/image';
// // import Link from 'next/link';
// // import { Button } from '@/components/ui/button-component';
// // import { Typography } from '@/components/ui/typography';
// // import { IconList } from '@/components/ui/icon-list';
// // import { ArrowRight, Sparkles } from 'lucide-react';
// // import { BadgeHeading } from '@/components/ui/badge-heading';
// // import { trustIndicators } from '@/data/home/truest-indicators';
// // import { TechStack } from '../shared/tech-stack';

// // export function HeroSection() {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //   useEffect(() => {
// //     setIsVisible(true);

// //     const handleMouseMove = (e: MouseEvent) => {
// //       setMousePosition({
// //         x: (e.clientX / window.innerWidth) * 100,
// //         y: (e.clientY / window.innerHeight) * 100,
// //       });
// //     };

// //     window.addEventListener('mousemove', handleMouseMove);
// //     return () => window.removeEventListener('mousemove', handleMouseMove);
// //   }, []);

// //   const focusPoints = [
// //     'Fractional partner for startups & studios',
// //     'WordPress + Next.js ecosystems',
// //     'Calm delivery, async friendly',
// //   ];

// //   return (
// //     <section className="relative flex items-center justify-center overflow-hidden pt-20">
// //       {/* Subtle Gradient Background */}
// //       <div className="absolute inset-0 bg-background">
// //         <div
// //           className="absolute inset-0 opacity-30 dark:opacity-20 transition-opacity duration-1000"
// //           style={{
// //             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.08), transparent 50%)`,
// //           }}
// //         />
// //         <div
// //           className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
// //           style={{
// //             backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
// //             backgroundSize: '40px 40px',
// //           }}
// //         />
// //       </div>

// //       {/* Content Container */}
// //       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
// //         <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 xl:gap-16 items-center">
// //           {/* Left Column */}
// //           <div className="space-y-6 lg:space-y-8">
// //             <BadgeHeading
// //               label="Trusted by 50+ businesses worldwide"
// //               icon={<Sparkles className="w-4 h-4 text-primary-500" />}
// //             />

// //             <div
// //               className={`space-y-4 transition-all duration-700 delay-100 ${
// //                 isVisible
// //                   ? 'opacity-100 translate-y-0'
// //                   : 'opacity-0 translate-y-4'
// //               }`}
// //             >
// //               <Typography variant="h1" className="leading-tight">
// //                 Build
// //                 <span className="relative inline-block px-2">
// //                   <span className="relative z-10 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
// //                     high-performing
// //                   </span>
// //                   <span className="absolute bottom-1 left-1/4 right-1/4 h-2 bg-primary-500/15 rounded-full blur-sm" />
// //                 </span>
// //                 experiences that convert.
// //               </Typography>

// //               <Typography variant="lead" className="max-w-xl">
// //                 Fractional partner for founders and teams who need modern
// //                 WordPress + Next.js ecosystems, thoughtful brand systems, and
// //                 clear communication every step of the way.
// //               </Typography>

// //               <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
// //                 {focusPoints.map((point) => (
// //                   <div
// //                     key={point}
// //                     className="rounded-2xl border border-border/60 bg-card/70 px-3 py-2.5 sm:px-4 sm:py-3 text-xs sm:text-sm text-muted-foreground"
// //                   >
// //                     {point}
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>

// //             <div
// //               className={`flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 delay-200 ${
// //                 isVisible
// //                   ? 'opacity-100 translate-y-0'
// //                   : 'opacity-0 translate-y-4'
// //               }`}
// //             >
// //               <Link href="/contact" className="w-full sm:w-auto">
// //                 <Button
// //                   variant="primary"
// //                   size="lg"
// //                   className="group shadow-lg hover:shadow-xl w-full sm:w-auto"
// //                 >
// //                   <span>Start Your Project</span>
// //                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
// //                 </Button>
// //               </Link>
// //               <Link href="/portfolio" className="w-full sm:w-auto">
// //                 <Button
// //                   variant="ghost"
// //                   size="lg"
// //                   className="group w-full sm:w-auto"
// //                 >
// //                   <span>View Portfolio</span>
// //                   <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
// //                 </Button>
// //               </Link>
// //             </div>

// //             <div
// //               className={`flex justify-center lg:justify-start transition-all duration-700 delay-300 ${
// //                 isVisible
// //                   ? 'opacity-100 translate-y-0'
// //                   : 'opacity-0 translate-y-4'
// //               }`}
// //             >
// //               <IconList items={trustIndicators} variant="custom" />
// //             </div>
// //           </div>

// //           {/* Right Column - Image Gallery */}
// //           <div
// //             className={`relative transition-all duration-700 delay-400 ${
// //               isVisible
// //                 ? 'opacity-100 translate-x-0'
// //                 : 'opacity-0 translate-x-8'
// //             }`}
// //           >
// //             <div className="relative min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] pb-24 sm:pb-28 lg:pb-32">
// //               {/* Animated Gradient Orbs */}
// //               <div className="absolute -top-10 -right-10 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-br from-primary-500/30 to-secondary-500/30 rounded-full blur-3xl animate-pulse" />
// //               <div
// //                 className="absolute -bottom-10 -left-10 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-tr from-secondary-500/20 to-primary-500/20 rounded-full blur-3xl animate-pulse"
// //                 style={{ animationDelay: '1s' }}
// //               />

// //               {/* Main Hero Image */}
// //               <div className="relative">
// //                 <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-secondary-500/5 rounded-[40px] sm:rounded-[60px] rotate-2 sm:rotate-3 scale-105 -z-10" />

// //                 <div className="relative overflow-hidden group rounded-[32px] sm:rounded-[40px]">
// //                   <div className="relative h-[280px] sm:h-[350px] lg:h-[520px]">
// //                     <Image
// //                       // src="/images/my-development-workspace-landscape.webp"
// //                       src="/images/my-development-workspace-potrait.webp"
// //                       // src="/images/me-sq.jpg"
// //                       alt="Modern workspace"
// //                       fill
// //                       className="object-cover transition-all duration-1000 group-hover:scale-110"
// //                       priority
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500/0 via-transparent to-secondary-500/20 opacity-60" />
// //                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Top Left Card - Portrait */}
// //               <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-12 w-28 h-36 sm:w-36 sm:h-48 lg:w-40 lg:h-52 -rotate-12 hover:-rotate-6 transition-all duration-500 group z-10">
// //                 <div className="relative w-full h-full">
// //                   <div className="absolute inset-0 bg-primary-500/30 rounded-[20px] sm:rounded-[28px] translate-x-2 translate-y-2 blur-xl -z-10" />

// //                   <div className="relative w-full h-full overflow-hidden rounded-[20px] sm:rounded-[28px] shadow-2xl border-4 border-primary/60">
// //                     <Image
// //                       // src="/images/my-development-workspace-potrait.webp"
// //                       src="/images/me-sq.jpg"
// //                       alt="Creative workspace"
// //                       fill
// //                       className="object-cover transition-all duration-1000 group-hover:scale-110 group-hover:-rotate-3"
// //                     />
// //                     <div className="absolute inset-0 bg-gradient-to-br from-primary-500/40 to-transparent mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Spinning Exclusive Badge - Grayscale */}
// //               <div className="absolute top-1/3 lg:top-1/4 -right-4 sm:-right-6 lg:-right-12 z-20">
// //                 <div
// //                   className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-36 lg:h-36"
// //                   style={{ animation: 'spin 20s linear infinite' }}
// //                 >
// //                   <Image
// //                     src="/images/exclusive.png"
// //                     alt="Exclusive"
// //                     fill
// //                     className="object-contain grayscale opacity-40"
// //                   />
// //                 </div>
// //               </div>

// //               {/* Decorative Square - Mobile Hidden */}
// //               <div className="hidden sm:block absolute bottom-1/4 -left-4 w-12 h-12 sm:w-16 sm:h-16">
// //                 <div className="w-full h-full bg-gradient-to-br from-secondary-500/20 to-primary-500/20 rounded-2xl rotate-45 animate-pulse" />
// //               </div>

// //               {/* SVG Circles - Desktop Only */}
// //               <svg
// //                 className="hidden lg:block absolute top-12 right-1/4 w-24 h-24 xl:w-32 xl:h-32 opacity-20"
// //                 viewBox="0 0 100 100"
// //               >
// //                 <circle
// //                   cx="50"
// //                   cy="50"
// //                   r="40"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   fill="none"
// //                   className="text-primary-500"
// //                 />
// //                 <circle
// //                   cx="50"
// //                   cy="50"
// //                   r="30"
// //                   stroke="currentColor"
// //                   strokeWidth="1"
// //                   fill="none"
// //                   className="text-secondary-500"
// //                 />
// //               </svg>

// //               {/* Floating Dots - Desktop Only */}
// //               <div className="hidden lg:block absolute bottom-1/3 left-1/4 opacity-30">
// //                 <div className="grid grid-cols-3 gap-2">
// //                   {[...Array(9)].map((_, i) => (
// //                     <div
// //                       key={i}
// //                       className="w-1.5 h-1.5 rounded-full bg-primary-500"
// //                     />
// //                   ))}
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Tech Stack Section */}
// //         <TechStack isVisible={isVisible} />
// //       </div>

// //       {/* Decorative Elements */}
// //       <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
// //       <div className="absolute bottom-1/4 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
// //     </section>
// //   );
// // }

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@/components/ui/button-component";
// import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";
// import { TechStack } from "../shared/tech-stack";
// import { GreetingCard } from "@/components/ui/greeting-card";
// import { Typography } from "@/components/ui/typography";
// import { BadgeHeading } from "@/components/ui/badge-heading";
// import { IconList } from "@/components/ui/icon-list";
// import { TrustedPartnersSection } from "../shared/trusted-partners-section";

// export function HeroSection() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

//   useEffect(() => {
//     setIsVisible(true);

//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth) * 100,
//         y: (e.clientY / window.innerHeight) * 100,
//       });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
//       {/* Subtle Interactive Background */}
//       <div className="absolute inset-0 bg-background">
//         <div
//           className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
//           }}
//         />
//       </div>

//       <div
//         className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
//         style={{
//           backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
//                       linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
//           backgroundSize: "40px 40px",
//         }}
//       />

//       {/* Content Container */}
//       <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-20">
//         <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
//           {/* Left Column - Content */}
//           <div className="space-y-4 sm:space-y-4 lg:space-y-6">
//             {/* Small Badge */}

//             <BadgeHeading
//               label="Trusted by 60+ businesses worldwide"
//               icon={<Sparkles className="w-4 h-4 text-primary-500" />}
//             />

//             <div
//               className={`space-y-2 sm:space-y-3 transition-all duration-700 delay-100 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//             >
//               <Typography variant="h1" className="text-foreground leading-[1]">
//                 <div className="font-bold text-zinc-600">Crafting</div>
//                 <div className="font-extrabold text-primary-500  uppercase leading-[1.4] md:leading-[1.1]">
//                   High-Performing Websites
//                 </div>
//                 <div className="text-muted-foreground text-xl md:text-2xl lg:text-3xl">
//                   That drive results and delight users.
//                 </div>
//               </Typography>
//             </div>

//             {/* Minimal Description */}
//             <p
//               className={`text-base sm:text-lg lg:text-xl text-muted-foreground font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//             >
//               Partnering with you to build fast, reliable, and user-focused
//               websites. <br />
//               Expert in WordPress, WooCommerce stores, and modern Next.js
//               applications that drive results.
//             </p>

//             {/* CTA Buttons */}
//             <div
//               className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
//                 isVisible
//                   ? "opacity-100 translate-y-0"
//                   : "opacity-0 translate-y-4"
//               }`}
//             >
//               <Link href="/contact" className="w-full sm:w-auto">
//                 <Button
//                   variant="primary"
//                   size="lg"
//                   className="group w-full sm:w-auto rounded-full"
//                 >
//                   <span>Start Project</span>
//                   <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//               <Link href="/portfolio" className="w-full sm:w-auto">
//                 <Button
//                   variant="ghost"
//                   size="lg"
//                   className="group w-full sm:w-auto rounded-full"
//                 >
//                   <span>View Work</span>
//                   <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
//                 </Button>
//               </Link>
//             </div>
//           </div>

//           {/* Right Column - Image with Overlay Cards */}
//           <div
//             className={`relative transition-all duration-1000 delay-400 ${
//               isVisible
//                 ? "opacity-100 translate-x-0"
//                 : "opacity-0 translate-x-8"
//             }`}
//           >
//             <div className="relative">
//               {/* Subtle Backdrop */}
//               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl rotate-3 scale-105 -z-10" />

//               {/* Main Image Container - Fixed Height */}
//               <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-foreground/5 dark:shadow-background/20 group border border-border/50">
//                 <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
//                   <Image
//                     src="/images/my-development-workspace-potrait.webp"
//                     alt="Modern workspace"
//                     fill
//                     className="object-cover transition-transform duration-700 group-hover:scale-105"
//                     priority
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
//                 </div>
//               </div>

//               {/* Premium Greeting Card Overlay */}
//               <GreetingCard
//                 title="Welcome Here"
//                 message="Building websites that look great and perform flawlessly."
//                 avatarText="Hi"
//                 avatarSpin={true}
//               />

//               {/* Professional Stats Card */}
//               <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-2xl border border-border/60 bg-background/80 dark:bg-background/70 backdrop-blur-xl px-5 sm:px-6 py-3 sm:py-4 shadow-lg">
//                 <div className="flex items-center gap-3 sm:gap-4">
//                   <div className="flex flex-col">
//                     <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
//                       50+
//                     </span>
//                     <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
//                       Projects
//                     </span>
//                   </div>
//                   <div className="h-10 sm:h-12 w-px bg-border/60" />
//                   <div className="flex flex-col">
//                     <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
//                       5+
//                     </span>
//                     <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
//                       Years
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Spinning Circular Badge */}
//               <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 lg:-right-12 z-20">
//                 <div
//                   className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
//                   style={{ animation: "spin 20s linear infinite" }}
//                 >
//                   <Image
//                     src="/images/exclusive.png"
//                     alt="Exclusive"
//                     fill
//                     className="object-contain grayscale opacity-30 dark:opacity-20"
//                   />
//                 </div>
//               </div>

//               {/* Minimal Decorative Element */}
//               <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-2xl -z-10" />
//             </div>
//           </div>
//         </div>

//         {/* Tech Stack Section */}
//         <div
//           className={`mt-9 sm:mt-20 lg:mt-24 transition-all duration-700 delay-500 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
//           }`}
//         >
//           <TechStack isVisible={isVisible} />
//           <TrustedPartnersSection />
//         </div>
//       </div>

//       {/* Subtle Background Elements */}
//       <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
//     </section>
//   );
// }

// components/home/hero-section.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button-component";
import { ArrowRight, Sparkles } from "lucide-react";
import { GreetingCard } from "@/components/ui/greeting-card";
import { Typography } from "@/components/ui/typography";
import { BadgeHeading } from "@/components/ui/badge-heading";
import { TechAndPartnersSection } from "../shared/tech-and-partners-section";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

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

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Subtle Interactive Background */}
        <div className="absolute inset-0 bg-background">
          <div
            className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
            }}
          />
        </div>

        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                      linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-20">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column - Content */}
            <div className="space-y-4 sm:space-y-4 lg:space-y-6">
              {/* Small Badge */}
              <BadgeHeading
                label="Trusted by 60+ businesses worldwide"
                icon={<Sparkles className="w-4 h-4 text-primary-500" />}
              />

              <div
                className={`space-y-2 sm:space-y-3 transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Typography
                  variant="h1"
                  className="text-foreground leading-[1]"
                >
                  <div className="font-bold text-zinc-600">Crafting</div>
                  <div className="font-extrabold text-primary-500 uppercase leading-[1.4] md:leading-[1.1]">
                    High-Performing Websites
                  </div>
                  <div className="text-muted-foreground text-xl md:text-2xl lg:text-3xl">
                    That drive results and delight users.
                  </div>
                </Typography>
              </div>

              {/* Minimal Description */}
              <p
                className={`text-base sm:text-lg lg:text-xl text-muted-foreground font-light max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                Partnering with you to build fast, reliable, and user-focused
                websites. <br />
                Expert in WordPress, WooCommerce stores, and modern Next.js
                applications that drive results.
              </p>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <Link href="/contact" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full sm:w-auto rounded-full"
                  >
                    <span>Start Project</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/portfolio" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="group w-full sm:w-auto rounded-full"
                  >
                    <span>View Work</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image with Overlay Cards */}
            <div
              className={`relative transition-all duration-1000 delay-400 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative">
                {/* Subtle Backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-3xl rotate-3 scale-105 -z-10" />

                {/* Main Image Container - Fixed Height */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-foreground/5 dark:shadow-background/20 group border border-border/50">
                  <div className="relative h-[400px] sm:h-[500px] lg:h-[600px]">
                    <Image
                      src="/images/my-development-workspace-potrait.webp"
                      alt="Modern workspace"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
                  </div>
                </div>

                {/* Premium Greeting Card Overlay */}
                <GreetingCard
                  title="Welcome Here"
                  message="Building websites that look great and perform flawlessly."
                  avatarText="Hi"
                  avatarSpin={true}
                />

                {/* Professional Stats Card */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 rounded-2xl border border-border/60 bg-background/80 dark:bg-background/70 backdrop-blur-xl px-5 sm:px-6 py-3 sm:py-4 shadow-lg">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
                        50+
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                        Projects
                      </span>
                    </div>
                    <div className="h-10 sm:h-12 w-px bg-border/60" />
                    <div className="flex flex-col">
                      <span className="text-2xl sm:text-3xl font-light text-foreground tracking-tight">
                        5+
                      </span>
                      <span className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                        Years
                      </span>
                    </div>
                  </div>
                </div>

                {/* Spinning Circular Badge */}
                <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 lg:-right-12 z-20">
                  <div
                    className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
                    style={{ animation: "spin 20s linear infinite" }}
                  >
                    <Image
                      src="/images/exclusive.png"
                      alt="Exclusive"
                      fill
                      className="object-contain grayscale opacity-30 dark:opacity-20"
                    />
                  </div>
                </div>

                {/* Minimal Decorative Element */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-2xl -z-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-20 w-64 h-64 sm:w-96 sm:h-96 bg-secondary/5 dark:bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Tech Stack and Partners Section - Separated with same background */}
      {/* <TechAndPartnersSection showTechStack={true} showPartners={true} /> */}
    </>
  );
}
