"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SLIDE_DURATION_MS = 3000;
const FADE_DURATION_MS = 800;

type HeroBackgroundSlideshowProps = {
  images: readonly string[];
};

export function HeroBackgroundSlideshow({ images }: HeroBackgroundSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
      {images.map((src, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={src}
            className={cn(
              "absolute inset-0 ease-in-out",
              isActive ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
            style={{ transition: `opacity ${FADE_DURATION_MS}ms ease-in-out` }}
          >
            <div
              className={cn(
                "absolute inset-[-10%] w-[120%] h-[120%] max-w-none",
                isActive && "hero-bg-breathe"
              )}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        );
      })}

      <div className="absolute inset-0 z-30 bg-gradient-to-r from-brand-orange/30 via-brand-dark/88 to-brand-dark/35" />
      <div className="absolute inset-0 z-30 bg-gradient-to-r from-brand-dark/70 via-transparent to-transparent" />
      <div className="absolute inset-0 z-30 bg-gradient-to-t from-brand-dark/85 via-transparent to-brand-dark/25" />
      <div className="absolute inset-0 z-30 hero-dot-pattern opacity-[0.1] mix-blend-overlay" />
      <div className="absolute left-0 top-0 z-30 h-full w-1.5 bg-brand-orange hidden lg:block" />
    </div>
  );
}
