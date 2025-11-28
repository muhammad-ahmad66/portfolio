// components/layout/client-layout.tsx
"use client";

import { useState, useEffect } from "react";
import { LogoLoader } from "../ui/loading/logo-loader";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Check if user has visited before in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      // Skip loading animation for returning visitors in same session
      setShowLoader(false);
    } else {
      // Show loading animation for first visit
      sessionStorage.setItem("hasVisited", "true");

      // Hide loader after animation completes
      const timer = setTimeout(() => {
        setShowLoader(false);
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <>
      {showLoader && <LogoLoader />}
      {children}
    </>
  );
}
