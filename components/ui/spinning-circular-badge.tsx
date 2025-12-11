import Image from "next/image";

export function SpinningCircularBadge() {
  return (
    <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 lg:-right-12 z-20">
      <div
        className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32"
        style={{ animation: "spin 20s linear infinite" }}
      >
        <Image
          src="/images/rotating-image.png"
          alt="Exclusive"
          fill
          className="object-contain grayscale opacity-30 dark:opacity-20"
        />
      </div>
    </div>
  );
}
