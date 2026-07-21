"use client";

import Image from "next/image";
import { Activity, Radio, Ticket, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type PanelSlide = {
  src: string;
  alt: string;
  label: string;
  sublabel: string;
};

const SLIDE_DURATION_MS = 5000;
const FADE_DURATION_MS = 800;

const tickerEvents = [
  "F1 · Monaco GP · Paddock Club",
  "FIFA World Cup · Category 1",
  "Coldplay · Wembley Stadium",
  "Wimbledon · Centre Court",
  "Formula E · São Paulo",
];

function LiveTicker() {
  const loop = [...tickerEvents, ...tickerEvents];
  return (
    <div className="relative overflow-hidden flex-1 min-w-0">
      <div className="flex gap-8 whitespace-nowrap animate-[ticker_22s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-[11px] font-tech text-white/80 tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

type HeroVisualPanelProps = {
  slides: readonly PanelSlide[];
};

export function HeroVisualPanel({ slides }: HeroVisualPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => {
        setPreviousIndex(current);
        return (current + 1) % slides.length;
      });
    }, SLIDE_DURATION_MS);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (previousIndex === null) return;

    const timeout = setTimeout(() => setPreviousIndex(null), FADE_DURATION_MS);
    return () => clearTimeout(timeout);
  }, [previousIndex]);

  const activeSlide = slides[activeIndex];

  return (
    <div className="relative mx-auto w-full max-w-full sm:max-w-md md:max-w-lg lg:max-w-none lg:mx-0 overflow-hidden">
      <div
        className="absolute -inset-4 rounded-[2rem] bg-brand-orange/10 blur-2xl hidden sm:block"
        aria-hidden
      />
      <div
        className="absolute -inset-1 rounded-[1.65rem] border border-brand-orange/20 hidden sm:block"
        aria-hidden
      />

      <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/50 bg-brand-dark">
        <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-pulse" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-tech font-bold uppercase tracking-wider text-white/75">
            <Radio className="w-3 h-3 text-brand-orange" />
            Live Inventory Feed
          </span>
        </div>

        <div className="relative w-full aspect-[4/3] sm:aspect-[5/4] lg:aspect-[4/5] max-h-[min(42vh,360px)] sm:max-h-[min(48vh,400px)] lg:max-h-[min(52vh,420px)]">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            const isPrevious = index === previousIndex;
            const isVisible = isActive || isPrevious;

            if (!isVisible) return null;

            return (
              <div
                key={slide.src}
                className={cn(
                  "absolute inset-0 transition-opacity duration-[800ms] ease-in-out",
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </div>
            );
          })}

          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-brand-dark/80 via-brand-dark/5 to-brand-dark/15" />

          <div className="absolute top-4 left-4 z-30">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-orange text-white text-[10px] font-tech font-bold uppercase tracking-wider shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
          </div>

          <div className="absolute top-4 right-4 z-30">
            <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/95 text-brand-dark text-[10px] font-tech font-bold shadow-sm">
              <TrendingUp className="w-3 h-3 text-brand-orange" />
              API Ready
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 z-30">
            <div className="rounded-2xl border border-white/10 bg-brand-dark/55 backdrop-blur-md p-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-brand-orange flex items-center justify-center shrink-0 shadow-lg shadow-brand-orange/30">
                  <Ticket className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-tech font-bold text-sm sm:text-base truncate">
                    {activeSlide.label}
                  </p>
                  <p className="text-white/75 text-xs mt-0.5 truncate">
                    {activeSlide.sublabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-3 sm:px-4 py-3 bg-white/5 border-t border-white/10 flex items-center gap-2 sm:gap-3 overflow-hidden">
          <Activity className="w-3.5 h-3.5 text-brand-orange shrink-0" />
          <LiveTicker />
        </div>
      </div>

      <div className="flex justify-center gap-1 sm:gap-2 mt-3 sm:mt-4">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.label}`}
            onClick={() => {
              setPreviousIndex(activeIndex);
              setActiveIndex(index);
            }}
            className="min-h-11 min-w-11 flex items-center justify-center p-2"
          >
            <span
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 block",
                index === activeIndex
                  ? "w-7 bg-brand-orange"
                  : "w-2 bg-white/30 hover:bg-white/50"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
