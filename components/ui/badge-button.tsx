"use client";

import * as React from "react";
import { Tooltip } from "./tooltip";

interface BadgeButtonProps {
  href?: string;
  icon: React.ReactNode;
  label: string;
  variant?: "minimal" | "card";
  onClick?: () => void;
  className?: string;
}

export function BadgeButton({
  href,
  icon,
  label,
  variant = "minimal",
  onClick,
  className = "",
}: BadgeButtonProps) {
  const content = (
    <>
      {variant === "card" ? (
        <div className="group flex items-center gap-3 p-3 rounded-xl border border-border hover:border-primary-500/30 hover:bg-accent transition-all duration-300">
          <div className="text-muted-foreground group-hover:text-primary-500 transition-colors duration-300">
            {icon}
          </div>
          <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
            {label}
          </span>
        </div>
      ) : (
        <Tooltip content={label} position="top">
          <div className="group p-3 rounded-lg hover:bg-accent transition-all duration-300">
            <div className="text-muted-foreground group-hover:text-primary-500 transition-colors duration-300 flex items-center justify-center">
              {icon}
            </div>
          </div>
        </Tooltip>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        aria-label={label}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={className} aria-label={label} onClick={onClick}>
      {content}
    </button>
  );
}
