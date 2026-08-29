"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRightLeft,
  Building2,
  Network,
  Plug,
  Store,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const sides: {
  title: string;
  accent: string;
  text: string;
  points: string[];
  icon: LucideIcon;
}[] = [
  {
    title: "Supplier Connectivity",
    accent: "Push inventory in.",
    text: "Connect event and inventory systems into SeatsConnect so supply reaches approved distribution channels through one integration.",
    points: [
      "Event, product and availability data",
      "Structured booking and status exchange",
      "One connection instead of many buyers",
    ],
    icon: Store,
  },
  {
    title: "Partner Connectivity",
    accent: "Pull inventory out.",
    text: "Access connected event inventory through the SeatsConnect API and serve customers from your own platform or workflow.",
    points: [
      "Search, quote, book and fulfil",
      "Approved B2B access only",
      "One connection instead of many suppliers",
    ],
    icon: Building2,
  },
];

export function ApiBothSides() {
  return (
    <HomeFrame
      id="both-sides"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>Distribution Infrastructure</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
              Built for Both Sides of{" "}
              <span className="text-brand-orange">Distribution.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              API infrastructure connecting global event supply with
              professional distribution — reducing the need for multiple
              individual integrations on both sides.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="relative grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-3">
            <SideCard side={sides[0]} index={0} />

            <div className="flex items-center justify-center py-1 lg:w-16">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-orange/25 bg-white text-brand-orange shadow-[0_10px_24px_rgba(255,107,0,0.16)]">
                <ArrowRightLeft className="h-5 w-5" strokeWidth={1.9} />
              </span>
            </div>

            <SideCard side={sides[1]} index={1} />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-5 py-4 text-center sm:flex-row sm:gap-4 sm:px-6 sm:text-left">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
              <Network className="h-5 w-5" strokeWidth={1.9} />
            </span>
            <p className="font-tech text-[15px] font-bold leading-snug text-brand-dark sm:text-base">
              Same infrastructure.{" "}
              <span className="text-brand-gray-text">
                Different connection paths for suppliers and partners.
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function SideCard({
  side,
  index,
}: {
  side: (typeof sides)[number];
  index: number;
}) {
  return (
    <article className="relative overflow-hidden rounded-[1.5rem] border border-orange-100/90 bg-white p-5 shadow-[0_14px_40px_rgba(40,30,20,0.06)] sm:p-6">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-brand-orange/8 blur-2xl"
      />
      <div className="relative">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_10px_22px_rgba(255,107,0,0.28)]">
          <side.icon className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <p className="mt-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
          {index === 0 ? "Supply side" : "Demand side"}
        </p>
        <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark">
          {side.title}
        </h3>
        <p className="mt-1 font-tech text-sm font-semibold text-brand-orange">
          {side.accent}
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-brand-gray-text">
          {side.text}
        </p>
        <ul className="mt-4 space-y-2">
          {side.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-2.5 rounded-xl border border-orange-100/80 bg-[#faf7f3] px-3 py-2.5"
            >
              <Plug
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange"
                strokeWidth={2}
              />
              <span className="text-[13px] font-medium text-brand-dark">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
