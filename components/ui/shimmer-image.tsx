"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type ShimmerImageProps = Omit<ImageProps, "onLoad"> & {
  onLoad?: (e: React.SyntheticEvent<HTMLImageElement>) => void;
};

export function ShimmerImage({ className, onLoad, ...props }: ShimmerImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div className="absolute inset-0 z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-muted/90 via-muted/50 to-muted/90 bg-[length:200%_100%] animate-shimmer" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-2 sm:gap-3">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-foreground/5 border border-border/50 flex items-center justify-center">
                <ImageIcon className="w-5 h-5 sm:w-7 sm:h-7 text-muted-foreground/40" />
              </div>
              <div className="flex gap-1 sm:gap-1.5">
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500/40 animate-bounce [animation-delay:0ms]" />
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500/40 animate-bounce [animation-delay:150ms]" />
                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary-500/40 animate-bounce [animation-delay:300ms]" />
              </div>
            </div>
          </div>
        </div>
      )}
      <Image
        className={cn(isLoaded ? "opacity-100" : "opacity-0", className)}
        onLoad={(e) => {
          setIsLoaded(true);
          onLoad?.(e);
        }}
        {...props}
      />
    </>
  );
}
