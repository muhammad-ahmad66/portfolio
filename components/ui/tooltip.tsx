"use client";

import * as React from "react";
import { useState } from "react";

interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
  className?: string;
}

export function Tooltip({
  content,
  children,
  position = "top",
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 -translate-y-2",
    bottom: "top-full left-1/2 -translate-x-1/2 translate-y-2",
    left: "right-full top-1/2 -translate-y-1/2 -translate-x-2",
    right: "left-full top-1/2 -translate-y-1/2 translate-x-2",
  };

  const arrows = {
    top: "top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-foreground",
    bottom:
      "bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-foreground",
    left: "left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-foreground",
    right:
      "right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-foreground",
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div
          className={`absolute z-50 ${positions[position]} pointer-events-none animate-in fade-in-0 zoom-in-95 duration-200`}
        >
          <div className="px-3 py-1.5 text-xs font-medium text-background bg-foreground rounded-lg shadow-lg whitespace-nowrap">
            {content}
          </div>
          <div
            className={`absolute w-0 h-0 border-4 ${arrows[position]}`}
            style={{ borderWidth: "4px" }}
          />
        </div>
      )}
    </div>
  );
}
