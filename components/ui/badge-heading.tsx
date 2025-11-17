"use client";

import { Sparkles } from "lucide-react";

interface BadgeHeadingProps {
  label: string;
  icon: React.ReactNode;
}

export function BadgeHeading({ label, icon }: BadgeHeadingProps) {
  return (
    <div className="">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm">
        {icon}{" "}
        <span className="text-sm font-medium text-muted-foreground">
          {label}
        </span>
      </div>
    </div>
  );
}
