"use client";

import * as React from "react";

interface IconListProps {
  items: Array<{
    icon?: React.ReactNode;
    text: string;
  }>;
  variant?: "check" | "dot" | "custom";
  className?: string;
}

export function IconList({
  items,
  variant = "check",
  className = "",
}: IconListProps) {
  const renderIcon = (item: { icon?: React.ReactNode; text: string }) => {
    if (item.icon) {
      return (
        <div className="w-5 h-5 flex items-center justify-center">
          {item.icon}
        </div>
      );
    }

    if (variant === "check") {
      return (
        <div className="w-5 h-5 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0">
          <svg
            className="w-3 h-3 text-primary-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
      );
    }

    return (
      <div className="w-2 h-2 rounded-full bg-primary-500 flex-shrink-0" />
    );
  };

  return (
    <div className={`flex flex-wrap items-center gap-6 ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 text-sm text-muted-foreground"
        >
          {renderIcon(item)}
          <span className="font-medium">{item.text}</span>
        </div>
      ))}
    </div>
  );
}
