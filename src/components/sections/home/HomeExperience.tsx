"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CalendarDays,
  Globe2,
  Layers,
  UsersRound,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const pillars: {
  title: string;
  text: string;
  image: string;
}[] = [
  {
    title: "Ticketing & events",
    text: "Decades of work across live events, inventory and fulfilment.",
    image: exp.concert,
  },
  {
    title: "Hospitality",
    text: "Experience connecting premium hospitality with professional demand.",
    image: exp.hospitality,
  },
  {
    title: "B2B distribution",
    text: "A platform shaped by how supply and distribution actually work.",
    image: exp.corporate,
  },
];

const barItems: {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  numbered?: boolean;
}[] = [
  {
    title: "30+",
    subtitle: "Years of experience",
    icon: Globe2,
    numbered: true,
  },
  {
    title: "Live events",
    subtitle: "Ticketing and fulfilment experience",
    icon: CalendarDays,
  },
  {
    title: "Global markets",
    subtitle: "International professional distribution",
    icon: Building2,
  },
  {
    title: "B2B partners",
    subtitle: "Approved network channels",
    icon: UsersRound,
  },
];

function CountUp() {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(30);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / 900);
        setValue(Math.round(30 * progress));
        if (progress < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      observer.disconnect();
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tabular-nums tracking-tight"
    >
      {value}+
    </span>
  );
}

function ExperienceMap() {
  return (
    <svg
      className="w-full h-auto max-w-[500px]"
      viewBox="0 0 500 240"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <pattern
          id="exp-map-dots"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.35" cy="1.35" r="1.05" fill="#d4a574" />
        </pattern>
      </defs>
      <g fill="url(#exp-map-dots)" opacity="0.55">
        <polygon points="38,88 52,48 98,34 148,46 172,64 176,98 158,128 122,136 88,120 58,108 40,98" />
        <polygon points="172,30 196,16 214,34 200,54 174,50" />
        <polygon points="134,140 162,142 176,178 168,216 146,224 134,200 126,166" />
        <polygon points="212,56 236,40 258,48 266,72 250,84 224,82 208,68" />
        <polygon points="200,52 214,46 220,64 206,66" />
        <polygon points="222,94 252,88 272,118 268,168 248,194 226,188 212,150 214,112" />
        <polygon points="274,166 286,172 280,188 270,184" />
        <polygon points="262,48 304,30 368,36 418,56 432,80 402,98 362,110 326,100 292,86 268,70" />
        <polygon points="414,78 432,70 442,90 422,94" />
        <polygon points="352,114 392,120 386,138 352,130" />
        <polygon points="372,156 414,146 440,166 430,194 394,198 368,180" />
        <polygon points="444,176 460,182 452,200 438,194" />
      </g>
      <g
        className="exp-map-arcs"
        fill="none"
        stroke="#d4a574"
        strokeWidth="1.05"
        strokeLinecap="round"
      >
        <path d="M118 92 C 168 48, 198 48, 238 68" />
        <path d="M238 68 C 286 42, 328 48, 352 72" />
        <path d="M118 92 C 98 138, 122 168, 150 178" />
        <path d="M238 68 C 228 98, 232 122, 242 142" />
        <path d="M352 72 C 372 118, 388 142, 404 170" />
        <path d="M118 92 C 210 18, 300 22, 352 72" />
      </g>
      <g fill="#d4a574">
        <circle cx="118" cy="92" r="2.4" />
        <circle cx="238" cy="68" r="2.4" />
        <circle cx="352" cy="72" r="2.4" />
        <circle cx="150" cy="178" r="2.1" />
        <circle cx="242" cy="142" r="2.1" />
        <circle cx="404" cy="170" r="2.1" />
      </g>
    </svg>
  );
}

function TopoPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      viewBox="0 0 240 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <g
        fill="none"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1.15"
        strokeLinecap="round"
      >
        <path d="M-12 86 C 18 70, 46 96, 78 78 C 110 60, 136 94, 170 76 C 198 62, 222 86, 252 72" />
        <path d="M-12 74 C 22 56, 50 84, 82 66 C 114 48, 140 82, 174 64 C 202 50, 226 74, 252 60" />
        <path d="M-12 62 C 26 44, 54 72, 86 54 C 118 36, 144 70, 178 52 C 206 38, 228 62, 252 48" />
        <path d="M8 92 C 36 80, 58 98, 88 86 C 118 74, 142 96, 176 84 C 202 74, 222 90, 244 80" />
        <path d="M28 54 C 52 40, 74 62, 102 48 C 128 36, 148 58, 176 46" />
      </g>
    </svg>
  );
}

export function HomeExperience() {
  return (
    <HomeFrame tinted variant="grid" className="py-16 lg:py-24">
      <Reveal>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          <div>
            <HomeKicker>Experience</HomeKicker>
            <h2 className="mt-3 font-tech text-2xl sm:text-3xl lg:text-4xl font-bold leading-[1.14] tracking-tight text-brand-dark">
              Built on Decades of{" "}
              <span className="text-brand-orange">Ticketing & Distribution</span>{" "}
              Experience.
            </h2>
            <p className="mt-3 max-w-lg text-sm sm:text-base leading-relaxed text-brand-gray-text">
              SeatsConnect is built on more than 30 years of experience across
              ticketing, events, hospitality, distribution and B2B sales. That
              supply-and-distribution background shaped a platform for connected,
              controlled global event distribution.
            </p>
          </div>
          <div className="relative flex justify-center items-center" aria-hidden>
            <ExperienceMap />
            <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 p-2.5 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg border border-brand-orange/20">
              <Layers className="h-5 w-5 text-brand-orange" strokeWidth={1.65} />
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:mb-20">
          <article className="relative col-span-1 md:col-span-2 lg:col-span-1 bg-gradient-to-br from-brand-orange/90 to-orange-500/90 rounded-2xl p-8 overflow-hidden flex flex-col justify-center min-h-[220px] shadow-xl shadow-orange-500/20 hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500">
            <TopoPattern />
            <div className="relative z-10">
              <CountUp />
              <p className="mt-2 text-sm font-medium text-white/90">
                Years of experience
              </p>
              <p className="mt-1.5 text-xs text-white/70 max-w-[200px]">
                Across ticketing, events, hospitality and B2B sales.
              </p>
            </div>
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" />
          </article>

          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-400 border border-gray-100 hover:border-brand-orange/30 flex flex-col min-h-[220px]"
            >
              <CardMedia
                src={pillar.image}
                alt={pillar.title}
                heightClass="h-28 sm:h-32"
              />
              <div className="relative z-10 flex flex-1 flex-col justify-center p-6">
                <h3 className="font-tech text-lg font-bold leading-snug text-brand-dark group-hover:text-brand-orange transition-colors duration-300">
                  {pillar.title}
                </h3>
                <div className="mt-1.5 w-10 h-0.5 bg-brand-orange/30 group-hover:w-16 transition-all duration-500" />
                <p className="mt-3 text-sm leading-relaxed text-brand-gray-text">
                  {pillar.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={140}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-gray-100/80 shadow-lg shadow-gray-100/50">
          {barItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.subtitle}
                className="flex items-center gap-3 p-2 rounded-xl hover:bg-white/50 transition-colors duration-200"
              >
                <div className="flex-shrink-0 p-2 bg-gradient-to-br from-brand-orange/10 to-orange-100/30 rounded-lg">
                  <Icon
                    className="h-3.5 w-3.5 text-brand-orange"
                    strokeWidth={1.7}
                  />
                </div>
                <div className="min-w-0">
                  <span
                    className={cn(
                      "block text-sm font-semibold text-brand-dark",
                      item.numbered && "tabular-nums"
                    )}
                  >
                    {item.title}
                  </span>
                  <span className="block text-[11px] text-brand-gray-text truncate">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </HomeFrame>
  );
}
