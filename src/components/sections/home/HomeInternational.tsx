"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Box,
  Building2,
  Compass,
  Globe2,
  Landmark,
  LayoutGrid,
  Mountain,
  Share2,
  ShieldCheck,
  Sun,
  Ticket,
  Truck,
  Users,
  Waves,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { Reveal, useCycle } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const strip = [
  { src: exp.destination, label: "Destinations" },
  { src: exp.stadium, label: "Venues" },
  { src: exp.formula1, label: "Motorsport" },
  { src: exp.concert, label: "Concerts" },
] as const;

const regions: {
  name: string;
  icon: LucideIcon;
  image: string;
}[] = [
  { name: "Europe", icon: Landmark, image: exp.regionEurope },
  { name: "Middle East", icon: Sun, image: exp.regionMiddleEast },
  { name: "Asia", icon: Building2, image: exp.regionAsia },
  { name: "Americas", icon: Mountain, image: exp.regionAmericas },
  { name: "Africa", icon: Compass, image: exp.regionAfrica },
  { name: "Australasia", icon: Waves, image: exp.regionAustralasia },
];

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe2,
    title: "Global coverage",
    text: "Inventory connected across international markets.",
  },
  {
    icon: Users,
    title: "Professional buyers",
    text: "Travel, concierge, corporate, hospitality, sports travel.",
  },
  {
    icon: ShieldCheck,
    title: "Approved access",
    text: "Distribution through trusted partner channels.",
  },
];

const pipeline: { icon: LucideIcon; label: string }[] = [
  { icon: Box, label: "Inventory Connected" },
  { icon: Share2, label: "Distribution Active" },
  { icon: Ticket, label: "Bookings Flowing" },
  { icon: Truck, label: "Fulfilment Delivered" },
];

export function HomeInternational() {
  const [paused, setPaused] = useState(false);
  const [routing, setRouting] = useCycle(regions.length, 2400, paused);

  return (
    <HomeFrame
      id="international"
      variant="plain"
      className="!py-8 sm:!py-10 lg:!flex lg:!h-[calc(100dvh-var(--site-header-height))] lg:!max-h-[calc(100dvh-var(--site-header-height))] lg:!flex-col lg:!justify-center lg:!overflow-hidden lg:!py-8 xl:!py-9"
    >
      <div className="flex w-full flex-1 flex-col justify-center">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 xl:gap-10">
          {/* Left column */}
          <Reveal className="flex flex-col gap-3.5 sm:gap-4">
            <div>
              <HomeKicker>International Distribution</HomeKicker>
              <h2 className="mt-2 font-tech text-[1.7rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.05rem] xl:text-[2.25rem]">
                Built for{" "}
                <span className="text-brand-orange">
                  International Distribution.
                </span>
              </h2>
              <p className="mt-2 max-w-lg text-[13px] leading-relaxed text-brand-gray-text sm:text-sm">
                Demand for major events extends far beyond the event&apos;s
                local market. SeatsConnect helps suppliers connect inventory
                with professional businesses that already serve customers
                internationally.
              </p>
              <p className="mt-1.5 hidden max-w-lg text-[13px] leading-relaxed text-brand-gray-text xl:block">
                By bringing supply and professional distribution together
                through one infrastructure layer, global event distribution
                becomes more efficient — and controlled.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-3">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-2">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
                    <item.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-tech text-[12px] font-bold leading-tight text-brand-dark sm:text-[13px]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text lg:line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
              {strip.map((item) => (
                <figure
                  key={item.label}
                  className="group relative overflow-hidden rounded-xl border border-orange-100"
                >
                  <div className="relative h-[3.75rem] sm:h-[4.25rem]">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="160px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
                  </div>
                  <figcaption className="absolute inset-x-0 bottom-0 px-2 py-1.5 font-tech text-[9px] font-semibold uppercase tracking-wider text-white">
                    {item.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="rounded-2xl border border-orange-100/80 bg-[#F3EBE4] px-3.5 py-3 sm:px-4 sm:py-3.5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-tech text-sm font-bold text-brand-dark">
                    Global Infrastructure
                  </p>
                  <p className="mt-0.5 text-[11px] text-brand-gray-text">
                    Connected. Secure. Scalable.
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-70 live-ping" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Operational
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-2.5">
                {pipeline.map((step) => (
                  <div key={step.label} className="flex items-center gap-1.5">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
                      <step.icon className="h-3 w-3" strokeWidth={1.7} />
                    </span>
                    <span className="font-tech text-[10px] font-semibold leading-tight text-brand-dark sm:text-[11px]">
                      {step.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Button
                href={routes.partners}
                variant="outline"
                className="rounded-full bg-[#F3EBE4] px-5"
              >
                <LayoutGrid className="h-4 w-4" strokeWidth={1.8} />
                Explore Distribution Network
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Reveal>

          {/* Right column — region cards + trust footer */}
          <Reveal delay={100} className="flex flex-col gap-3 sm:gap-3.5">
            <div
              className="grid grid-cols-3 gap-2.5 sm:gap-3"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {regions.map((region, i) => {
                const isRouting = i === routing;
                return (
                  <button
                    key={region.name}
                    type="button"
                    onClick={() => {
                      setRouting(i);
                      setPaused(true);
                    }}
                    className="group relative h-[9.75rem] w-full overflow-hidden rounded-2xl border border-orange-100/50 text-left shadow-[0_8px_22px_rgba(40,30,20,0.08)] sm:h-[11rem] lg:h-[11.5rem] lg:rounded-[1.25rem] xl:h-[12.25rem]"
                  >
                    <Image
                      src={region.image}
                      alt={region.name}
                      fill
                      sizes="(max-width: 1024px) 33vw, 18vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-2.5 sm:p-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm sm:h-8 sm:w-8">
                        <region.icon
                          className="h-3.5 w-3.5"
                          strokeWidth={1.7}
                        />
                      </span>
                      <p className="font-tech text-[12px] font-bold leading-tight text-white sm:text-sm">
                        {region.name}
                      </p>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={cn(
                            "font-mono text-[8px] font-semibold uppercase tracking-[0.14em] sm:text-[9px]",
                            isRouting
                              ? "text-brand-orange"
                              : "text-emerald-400"
                          )}
                        >
                          {isRouting ? "Routing" : "Ready"}
                        </span>
                        <span className="flex gap-0.5" aria-hidden>
                          {Array.from({ length: 5 }).map((_, d) => (
                            <span
                              key={d}
                              className={cn(
                                "h-1 w-1 rounded-full",
                                isRouting
                                  ? d <= 2
                                    ? "bg-brand-orange"
                                    : "bg-brand-orange/30"
                                  : "bg-emerald-400"
                              )}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-orange-100/80 bg-[#faf7f3] px-4 py-3 sm:px-5 sm:py-3.5">
              <DottedMapWash />
              <div className="relative z-10">
                <p className="font-tech text-sm font-bold text-brand-dark sm:text-base">
                  Global opportunities. Connected through{" "}
                  <span className="text-brand-orange">trust.</span>
                </p>
                <p className="mt-1 text-[11px] text-brand-gray-text sm:text-xs">
                  One infrastructure layer. Multiple markets. Controlled
                  access.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </HomeFrame>
  );
}

function DottedMapWash() {
  const uid = useId();
  return (
    <svg
      viewBox="0 0 640 160"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-50"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern
          id={`${uid}-dots`}
          width="12"
          height="12"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="0.9" fill="#c5bbb0" />
        </pattern>
      </defs>
      <ellipse cx="160" cy="80" rx="110" ry="55" fill={`url(#${uid}-dots)`} />
      <ellipse cx="320" cy="70" rx="100" ry="50" fill={`url(#${uid}-dots)`} />
      <ellipse cx="480" cy="85" rx="115" ry="52" fill={`url(#${uid}-dots)`} />
    </svg>
  );
}
