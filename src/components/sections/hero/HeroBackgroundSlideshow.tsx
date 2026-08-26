"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SLIDE_MS = 4200;
const FADE_MS = 900;

type HeroBackgroundSlideshowProps = {
  images: readonly string[];
  overlay?: "light" | "dark" | "warm";
};

export function HeroBackgroundSlideshow({
  images,
  overlay = "light",
}: HeroBackgroundSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, SLIDE_MS);
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
              "absolute inset-0",
              isActive ? "opacity-100 z-20" : "opacity-0 z-10"
            )}
            style={{ transition: `opacity ${FADE_MS}ms ease-in-out` }}
          >
            <div
              className={cn(
                "absolute inset-[-8%] w-[116%] h-[116%] max-w-none",
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

      {overlay === "dark" ? (
        <>
          <div className="absolute inset-0 z-30 bg-black/50" />
          <div className="absolute inset-0 z-30 bg-gradient-to-t from-brand-dark/70 via-transparent to-black/30" />
        </>
      ) : overlay === "warm" ? (
        <>
          <div className="absolute inset-0 z-30 bg-[#e8d4bc]/18" />
          <div className="hero-overlay-warm-copy absolute inset-0 z-30" />
          <div className="hero-overlay-warm-top absolute inset-0 z-30" />
          <div className="absolute inset-0 z-30 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 z-30 bg-white/55" />
          <div className="absolute inset-0 z-30 bg-gradient-to-r from-white via-brand-orange-light/80 to-white/35" />
          <div className="absolute inset-0 z-30 bg-gradient-to-t from-white/90 via-transparent to-white/40" />
        </>
      )}
    </div>
  );
}
