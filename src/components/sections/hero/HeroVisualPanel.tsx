"use client";

import Image from "next/image";
import {
  Activity,
  ArrowUpRight,
  Globe2,
  Radio,
  Ticket,
  TrendingUp,
  Zap,
} from "lucide-react";
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

const apiFeed = [
  { method: "GET", path: "/v2/inventory/live", status: 200, ms: 18 },
  { method: "POST", path: "/v2/orders/hold", status: 201, ms: 24 },
  { method: "GET", path: "/v2/events/search", status: 200, ms: 12 },
] as const;

const countries = [
  { code: "UK", pct: 92 },
  { code: "US", pct: 78 },
  { code: "DE", pct: 64 },
  { code: "AE", pct: 88 },
] as const;

function LiveTicker() {
  const loop = [...tickerEvents, ...tickerEvents];
  return (
    <div className="relative flex-1 min-w-0 overflow-hidden hero-ticker-mask">
      <div className="flex gap-10 whitespace-nowrap animate-[ticker_22s_linear_infinite] hover:[animation-play-state:paused]">
        {loop.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-[11px] sm:text-xs font-tech tracking-[0.12em] uppercase text-white/70"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inset-0 rounded-full bg-brand-orange/60 animate-ping" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
            </span>
            {item}
            <span className="text-white/20 font-light" aria-hidden>
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function RevenueSparkline() {
  return (
    <svg
      viewBox="0 0 120 36"
      className="h-9 w-full"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="heroSparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 L12 24 L24 26 L36 16 L48 20 L60 12 L72 14 L84 8 L96 11 L108 6 L120 9 L120 36 L0 36 Z"
        fill="url(#heroSparkFill)"
      />
      <path
        d="M0 28 L12 24 L24 26 L36 16 L48 20 L60 12 L72 14 L84 8 L96 11 L108 6 L120 9"
        stroke="#ff6b00"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="hero-sparkline"
      />
    </svg>
  );
}

function MetricBars() {
  const heights = [42, 68, 55, 88, 72, 95, 60];
  return (
    <div className="flex h-10 items-end gap-1" aria-hidden>
      {heights.map((h, i) => (
        <span
          key={i}
          className="hero-bar-rise w-1.5 rounded-full bg-gradient-to-t from-brand-orange/30 to-brand-orange"
          style={{
            height: `${h}%`,
            animationDelay: `${i * 0.08}s`,
          }}
        />
      ))}
    </div>
  );
}

type HeroVisualPanelProps = {
  slides: readonly PanelSlide[];
};

export function HeroVisualPanel({ slides }: HeroVisualPanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState<number | null>(null);
  const [apiIndex, setApiIndex] = useState(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setApiIndex((i) => (i + 1) % apiFeed.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const activeSlide = slides[activeIndex];
  const activeApi = apiFeed[apiIndex];

  return (
    <div className="relative mx-auto w-full max-w-full sm:max-w-lg lg:max-w-none lg:mx-0">
      {/* Ambient glow behind dashboard */}
      <div
        className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-brand-orange/20 blur-3xl hero-glow-pulse hidden sm:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 top-1/4 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl hidden lg:block"
        aria-hidden
      />

      {/* Floating: revenue card */}
      <div className="hero-float absolute -left-3 top-16 z-40 hidden w-[9.5rem] rounded-2xl hero-glass-strong p-3 lg:block xl:-left-8">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[9px] font-tech uppercase tracking-[0.14em] text-white/45">
            Revenue
          </span>
          <ArrowUpRight className="h-3 w-3 text-emerald-400" />
        </div>
        <p className="font-tech text-lg font-bold text-white leading-none">
          +24.8%
        </p>
        <p className="mt-1 text-[10px] text-white/40">vs last period</p>
        <div className="mt-2">
          <RevenueSparkline />
        </div>
      </div>

      {/* Floating: latency card */}
      <div className="hero-float-delay absolute -right-2 top-8 z-40 hidden w-[8.75rem] rounded-2xl hero-glass-strong p-3 xl:block xl:-right-6">
        <div className="mb-2 flex items-center gap-1.5">
          <Zap className="h-3 w-3 text-brand-orange" />
          <span className="text-[9px] font-tech uppercase tracking-[0.14em] text-white/45">
            API Latency
          </span>
        </div>
        <p className="font-tech text-2xl font-bold text-white leading-none">
          18<span className="text-sm text-brand-orange">ms</span>
        </p>
        <div className="mt-2.5">
          <MetricBars />
        </div>
      </div>

      {/* Floating: countries card */}
      <div className="hero-float-reverse absolute -left-2 bottom-28 z-40 hidden w-[10rem] rounded-2xl hero-glass-strong p-3 lg:block xl:-left-10">
        <div className="mb-2.5 flex items-center gap-1.5">
          <Globe2 className="h-3 w-3 text-brand-orange" />
          <span className="text-[9px] font-tech uppercase tracking-[0.14em] text-white/45">
            Live Markets
          </span>
        </div>
        <div className="space-y-1.5">
          {countries.map((c) => (
            <div key={c.code} className="flex items-center gap-2">
              <span className="w-5 text-[10px] font-tech font-semibold text-white/70">
                {c.code}
              </span>
              <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-brand-orange to-brand-orange-muted"
                  style={{ width: `${c.pct}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main dashboard shell */}
      <div className="relative overflow-hidden rounded-[1.35rem] sm:rounded-[1.65rem] border border-white/15 bg-[#121212]/90 shadow-2xl shadow-black/60 backdrop-blur-xl">
        {/* Top chrome */}
        <div className="relative flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.04] px-3.5 py-3 sm:px-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange shadow-[0_0_10px_rgba(255,107,0,0.7)]" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="flex items-center gap-2 min-w-0">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2.5 py-1 text-[10px] font-tech font-bold uppercase tracking-[0.14em] text-brand-orange">
              <Radio className="h-3 w-3" />
              <span className="truncate">Live Inventory Feed</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-tech text-white/40">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 hero-status-blink" />
            Online
          </div>
        </div>

        {/* Image stage — fixed aspect, no grow/shrink */}
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

          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#121212] via-[#121212]/25 to-transparent" />
          <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-brand-orange/15 via-transparent to-blue-500/10" />
          <div className="pointer-events-none absolute inset-0 z-20 hero-shimmer opacity-40 mix-blend-overlay" />

          {/* Status chips */}
          <div className="absolute top-3 left-3 z-30 flex flex-wrap gap-2 sm:top-4 sm:left-4">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange px-2.5 py-1.5 text-[10px] font-tech font-bold uppercase tracking-wider text-white shadow-lg shadow-brand-orange/40">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Live
            </span>
            <span className="inline-flex items-center gap-1 rounded-lg border border-white/15 bg-black/45 px-2.5 py-1.5 text-[10px] font-tech font-bold text-white backdrop-blur-md">
              <TrendingUp className="h-3 w-3 text-brand-orange" />
              API Ready
            </span>
          </div>

          {/* Inventory metric overlay */}
          <div className="absolute top-3 right-3 z-30 hidden rounded-xl border border-white/10 bg-black/50 px-3 py-2 backdrop-blur-md sm:block sm:top-4 sm:right-4">
            <p className="text-[9px] font-tech uppercase tracking-[0.12em] text-white/45">
              Tickets synced
            </p>
            <p className="font-tech text-sm font-bold text-white">2.4M+</p>
          </div>

          {/* Active event card */}
          <div className="absolute bottom-3 left-3 right-3 z-30 sm:bottom-4 sm:left-4 sm:right-4">
            <div className="rounded-2xl border border-white/12 bg-[#121212]/70 p-3.5 backdrop-blur-xl sm:p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-orange to-brand-orange-hover shadow-lg shadow-brand-orange/35">
                  <Ticket className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate font-tech text-sm font-bold text-white sm:text-base">
                    {activeSlide.label}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-white/55">
                    {activeSlide.sublabel}
                  </p>
                </div>
                <div className="hidden shrink-0 text-right sm:block">
                  <p className="text-[9px] font-tech uppercase tracking-wider text-white/35">
                    Status
                  </p>
                  <p className="text-xs font-semibold text-emerald-400">
                    Allocated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* API activity strip */}
        <div className="border-t border-white/10 bg-white/[0.03] px-3.5 py-2.5 sm:px-4">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15">
              <Activity className="h-3.5 w-3.5 text-brand-orange" />
            </div>
            <div className="min-w-0 flex-1 font-tech text-[11px] sm:text-xs">
              <span className="mr-2 rounded bg-white/10 px-1.5 py-0.5 font-bold text-brand-orange">
                {activeApi.method}
              </span>
              <span className="truncate text-white/55">{activeApi.path}</span>
            </div>
            <div className="shrink-0 text-right">
              <span className="text-[10px] font-semibold text-emerald-400">
                {activeApi.status}
              </span>
              <span className="ml-2 text-[10px] text-white/35">
                {activeApi.ms}ms
              </span>
            </div>
          </div>
        </div>

        {/* Live ticker */}
        <div className="flex items-center gap-2 overflow-hidden border-t border-white/10 bg-gradient-to-r from-brand-orange/10 via-white/[0.03] to-blue-500/10 px-3 py-3 sm:gap-3 sm:px-4">
          <span className="shrink-0 rounded-md bg-brand-orange/20 px-2 py-1 text-[9px] font-tech font-bold uppercase tracking-[0.16em] text-brand-orange">
            Feed
          </span>
          <LiveTicker />
        </div>
      </div>

      {/* Slide indicators */}
      <div className="mt-3 flex justify-center gap-1 sm:mt-4 sm:gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show ${slide.label}`}
            onClick={() => {
              setPreviousIndex(activeIndex);
              setActiveIndex(index);
            }}
            className="flex min-h-11 min-w-11 items-center justify-center p-2"
          >
            <span
              className={cn(
                "block h-1.5 rounded-full transition-all duration-300",
                index === activeIndex
                  ? "w-7 bg-brand-orange shadow-[0_0_12px_rgba(255,107,0,0.55)]"
                  : "w-2 bg-white/25 hover:bg-white/45"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
