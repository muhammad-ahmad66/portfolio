// // components/shared/not-found-content.tsx
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { Home, ArrowLeft, Search, Compass } from "lucide-react";
// import { Button } from "@/components/ui/button-component";

// export function NotFoundContent() {
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
//     <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
//       {/* Background with Interactive Gradient */}
//       <div className="absolute inset-0 bg-background">
//         <div
//           className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08] transition-opacity duration-1000"
//           style={{
//             background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.06), transparent 60%)`,
//           }}
//         />

//         {/* Grid Pattern */}
//         <div
//           className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
//           style={{
//             backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
//             backgroundSize: "40px 40px",
//           }}
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center space-y-8">
//           {/* 404 Number with Animation */}
//           <div
//             className={`transition-all duration-1000 ${
//               isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
//             }`}
//           >
//             <div className="relative inline-block">
//               {/* Glowing background */}
//               <div className="absolute inset-0 blur-3xl opacity-30">
//                 <span className="text-[9rem] sm:text-[16rem] lg:text-[20rem] font-black bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                   404
//                 </span>
//               </div>

//               {/* Main number */}
//               <span className="relative text-[9rem] sm:text-[16rem] lg:text-[20rem] font-black leading-none bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
//                 404
//               </span>
//             </div>
//           </div>

//           {/* Icon */}
//           <div
//             className={`flex justify-center transition-all duration-700 delay-200 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <div className="relative">
//               <div className="absolute inset-0 bg-primary-500/20 blur-2xl rounded-full" />
//               <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary-500/10 to-secondary-500/10 border border-border/40 flex items-center justify-center backdrop-blur-sm">
//                 <Compass
//                   className="w-10 h-10 sm:w-12 sm:h-12 text-foreground"
//                   strokeWidth={1.5}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div
//             className={`space-y-4 transition-all duration-700 delay-300 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
//               Page Not Found
//             </h1>
//             <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
//               The page you're looking for doesn't exist or has been moved. Let's
//               get you back on track.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div
//             className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <Link href="/" className="w-full sm:w-auto">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 className="w-full sm:w-auto group rounded-full flex items-center justify-center gap-2"
//               >
//                 <Home className="w-5 h-5" />
//                 <span>Go to Homepage</span>
//               </Button>
//             </Link>

//             <button
//               onClick={() => window.history.back()}
//               className="w-full sm:w-auto px-6 py-3 rounded-full border border-border/60 bg-card/50 hover:bg-card transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm"
//             >
//               <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors group-hover:-translate-x-1 duration-300" />
//               <span className="font-semibold text-foreground">Go Back</span>
//             </button>
//           </div>

//           {/* Popular Pages */}
//           <div
//             className={`pt-8 transition-all duration-700 delay-500 ${
//               isVisible
//                 ? "opacity-100 translate-y-0"
//                 : "opacity-0 translate-y-4"
//             }`}
//           >
//             <p className="text-sm text-muted-foreground mb-4">
//               Or explore these pages:
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-3">
//               {[
//                 { label: "Portfolio", href: "/portfolio" },
//                 { label: "Services", href: "/services" },
//                 { label: "About", href: "/about" },
//                 { label: "Contact", href: "/contact" },
//               ].map((link) => (
//                 <Link
//                   key={link.href}
//                   href={link.href}
//                   className="px-4 py-2 rounded-full border border-border/40 bg-card/30 hover:bg-card hover:border-border/60 transition-all duration-300 text-sm font-medium text-foreground backdrop-blur-sm"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Subtle Background Elements */}
//       <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
//       <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
//     </div>
//   );
// }

// components/shared/not-found-content.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button-component";

export function NotFoundContent() {
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
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

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* 404 Number with Animation */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="relative inline-block">
              {/* Glowing background */}
              <div className="absolute inset-0 blur-3xl opacity-30">
                <span className="text-[9rem] sm:text-[16rem] lg:text-[20rem] font-black bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                  404
                </span>
              </div>

              {/* Main number */}
              <span className="relative text-[9rem] sm:text-[16rem] lg:text-[20rem] font-black leading-none bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                404
              </span>
            </div>
          </div>

          {/* Spinning Logo Dot - Replaces Icon */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <div className="relative w-24 h-24 sm:w-28 sm:h-28">
              {/* Outer rotating ring */}
              <div className="absolute w-full h-full rounded-full border-2 border-dashed border-primary-500/40 animate-[rotate-slow_4s_linear_infinite]" />

              {/* Middle ring - counter rotation */}
              <div className="absolute inset-2 rounded-full border border-secondary-500/30 animate-[rotate-slow_6s_linear_reverse_infinite]" />

              {/* Orbiting particles */}
              <div className="absolute inset-4 animate-[rotate-slow_2s_linear_reverse_infinite]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-500" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-secondary-500" />
              </div>

              {/* Center dot with pulse and glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-12 h-12 rounded-full bg-gradient-to-br from-primary-400/30 to-secondary-400/30 blur-xl animate-pulse" />
                <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 via-secondary-500 to-primary-600 shadow-lg shadow-primary-500/50 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`space-y-4 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Page Not Found
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved. Let's
              get you back on track.
            </p>
          </div>

          {/* Quick Links */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                className="w-full sm:w-auto group rounded-full flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                <span>Go to Homepage</span>
              </Button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-border/60 bg-card/50 hover:bg-card transition-all duration-300 flex items-center justify-center gap-2 group backdrop-blur-sm"
            >
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors group-hover:-translate-x-1 duration-300" />
              <span className="font-semibold text-foreground">Go Back</span>
            </button>
          </div>

          {/* Popular Pages */}
          <div
            className={`pt-8 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <p className="text-sm text-muted-foreground mb-4">
              Or explore these pages:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Portfolio", href: "/portfolio" },
                { label: "Services", href: "/services" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full border border-border/40 bg-card/30 hover:bg-card hover:border-border/60 transition-all duration-300 text-sm font-medium text-foreground backdrop-blur-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl pointer-events-none" />
    </div>
  );
}
