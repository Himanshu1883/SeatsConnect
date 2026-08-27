"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Globe2,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const pillars: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Global supply",
    text: "Inventory from venues, promoters and approved suppliers.",
    icon: Globe2,
  },
  {
    title: "Controlled access",
    text: "Distribution kept inside approved B2B relationships.",
    icon: ShieldCheck,
  },
  {
    title: "Professional demand",
    text: "Served through travel, concierge and corporate businesses.",
    icon: Network,
  },
];

const clarity = [
  { label: "Consumer marketplace" },
  { label: "Open resale platform" },
  { label: "Public ticket search" },
] as const;

const clarityIs = [
  { label: "Connectivity infrastructure" },
  { label: "Approved B2B relationships only" },
  { label: "Search → Quote → Book → Fulfil" },
] as const;

export function AboutMission() {
  return (
    <HomeFrame id="mission" variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="relative flex w-full flex-col gap-9 lg:gap-11">
        {/* Soft ambient glow behind the manifesto */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-8 h-56 w-full max-w-5xl -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,0,0.08),transparent_70%)]"
        />

        <Reveal>
          <div className="relative w-full text-center">
            <HomeKicker>Mission</HomeKicker>
            <p className="mx-auto mt-2.5 max-w-2xl text-sm text-brand-gray-text sm:text-[15px]">
              What SeatsConnect exists to build — and what it is not.
            </p>
          </div>
        </Reveal>

        {/* Manifesto */}
        <Reveal delay={20}>
          <div className="relative mx-auto w-full max-w-5xl text-center">
            <span
              aria-hidden
              className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2 select-none font-tech text-[5.5rem] font-bold leading-none text-brand-orange/[0.12] sm:-top-8 sm:text-[7rem]"
            >
              &ldquo;
            </span>
            <p className="relative font-tech text-[1.55rem] font-bold leading-[1.18] tracking-tight text-brand-dark sm:text-[2rem] lg:text-[2.4rem]">
              To create the technology infrastructure that connects global
              event supply with{" "}
              <span className="relative inline-block text-brand-orange">
                professional B2B demand.
                <span
                  aria-hidden
                  className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-gradient-to-r from-brand-orange/0 via-brand-orange/45 to-brand-orange/0"
                />
              </span>
            </p>
          </div>
        </Reveal>

        {/* Not / Is positioning board */}
        <Reveal delay={50}>
          <div className="w-full overflow-hidden rounded-[1.6rem] border border-orange-100/90 bg-white shadow-[0_18px_48px_rgba(40,30,20,0.07)]">
            <div className="grid sm:grid-cols-2">
              <div className="relative flex flex-col gap-4 bg-[#faf7f3]/80 p-5 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-dark/8 text-brand-gray-text">
                    <X className="h-3.5 w-3.5" strokeWidth={2.4} />
                  </span>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray-text">
                    Not
                  </p>
                </div>
                <ul className="space-y-3">
                  {clarity.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-dark/[0.05] text-brand-gray-text/55">
                        <X className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                      <span className="text-[13px] leading-snug text-brand-gray-text/75 line-through decoration-brand-gray-text/35 sm:text-[14px]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative flex flex-col gap-4 border-t border-orange-100 bg-gradient-to-br from-brand-orange/[0.06] via-white to-white p-5 sm:border-l sm:border-t-0 sm:p-6 lg:p-8">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.3)]">
                    <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                  </span>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                    Is
                  </p>
                </div>
                <ul className="space-y-3">
                  {clarityIs.map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_4px_10px_rgba(255,107,0,0.25)]">
                        <Check className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      <span className="text-[13px] font-semibold leading-snug text-brand-dark sm:text-[14px]">
                        {item.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pillar chain */}
        <Reveal delay={90}>
          <div className="w-full">
            <p className="mb-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray-text">
              How the mission lands
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-0">
              {pillars.map((item, i) => (
                <div key={item.title} className="flex flex-1 items-stretch">
                  <article
                    className={cn(
                      "group relative flex flex-1 flex-col items-center gap-3 rounded-2xl border border-orange-100/90 bg-white px-4 py-6 text-center shadow-[0_10px_28px_rgba(40,30,20,0.045)] transition-shadow duration-300 hover:shadow-[0_16px_36px_rgba(40,30,20,0.08)] sm:rounded-2xl sm:px-5 lg:px-6 lg:py-7",
                      i === 1 && "sm:z-[1] sm:scale-[1.02] sm:border-brand-orange/25 sm:shadow-[0_14px_36px_rgba(255,107,0,0.1)]"
                    )}
                  >
                    <span className="font-mono text-[9px] font-semibold tracking-[0.16em] text-brand-orange/70">
                      0{i + 1}
                    </span>
                    <span
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-translate-y-0.5",
                        i === 1
                          ? "bg-brand-orange text-white shadow-[0_10px_22px_rgba(255,107,0,0.32)]"
                          : "bg-brand-orange/10 text-brand-orange"
                      )}
                    >
                      <item.icon className="h-5 w-5" strokeWidth={1.85} />
                    </span>
                    <div>
                      <p className="font-tech text-[15px] font-bold text-brand-dark">
                        {item.title}
                      </p>
                      <p className="mx-auto mt-1.5 max-w-[14rem] text-[12.5px] leading-snug text-brand-gray-text lg:max-w-[16rem]">
                        {item.text}
                      </p>
                    </div>
                  </article>

                  {i < pillars.length - 1 ? (
                    <div className="hidden w-9 shrink-0 items-center justify-center sm:flex lg:w-12">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-orange-100 bg-[#faf7f3] text-brand-orange shadow-sm">
                        <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
                      </span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
