"use client";

import type { LucideIcon } from "lucide-react";
import {
  CalendarDays,
  CheckCircle2,
  Globe2,
  Handshake,
  Layers,
  MapPin,
  Package,
  ShieldCheck,
  SlidersHorizontal,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const controls: {
  label: string;
  icon: LucideIcon;
}[] = [
  { label: "Partners", icon: Handshake },
  { label: "Channels", icon: Layers },
  { label: "Markets", icon: Globe2 },
  { label: "Territories", icon: MapPin },
  { label: "Events", icon: CalendarDays },
  { label: "Products", icon: Package },
  { label: "Allocations", icon: SlidersHorizontal },
  { label: "Commercial arrangements", icon: Users },
];

const rules = [
  { label: "Partner access", value: "Approved only" },
  { label: "Channel release", value: "Controlled" },
  { label: "Market mapping", value: "Structured" },
  { label: "Allocation rules", value: "Mapped" },
] as const;

export function SuppliersControl() {
  return (
    <HomeFrame
      id="control"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Distribution Control</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Maintain Greater{" "}
                  <span className="text-brand-orange">Distribution Control.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is designed around controlled B2B distribution.
                  Depending on your commercial and technical requirements,
                  inventory can be structured for specific partners, channels,
                  markets and commercial terms.
                </p>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Define who can access your inventory",
                  "Structure release by channel and market",
                  "Keep distribution professional and approved",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-orange-100/90 bg-white/80 px-3.5 py-2.5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      strokeWidth={2}
                    />
                    <span className="text-[13px] font-medium text-brand-dark sm:text-[14px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-3.5 sm:px-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="text-[12px] leading-relaxed text-brand-dark sm:text-[13px]">
                  Expand distribution without simply opening inventory to
                  everyone.
                </p>
              </div>
            </div>

            <ControlDash />
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3 lg:gap-3.5">
            {controls.map((item) => (
              <article
                key={item.label}
                className="flex items-center gap-2.5 rounded-xl border border-orange-100/90 bg-white px-3 py-2.5 shadow-[0_4px_14px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_8px_22px_rgba(40,30,20,0.07)] sm:gap-3 sm:px-3.5 sm:py-3"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange sm:h-9 sm:w-9">
                  <item.icon className="h-4 w-4" strokeWidth={1.85} />
                </span>
                <span className="font-tech text-[12px] font-bold leading-snug text-brand-dark sm:text-[13px]">
                  {item.label}
                </span>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function ControlDash() {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 bg-[#f7f4f0] px-3.5 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#e8b4a0]" />
            <span className="h-2 w-2 rounded-full bg-[#f0d9a8]" />
            <span className="h-2 w-2 rounded-full bg-[#b8d4b8]" />
          </span>
          <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
            distribution · access rules
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Controlled
        </span>
      </div>

      <div className="bg-[#faf7f3]/50 p-3.5 sm:p-4">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: "Partners", value: "Approved" },
            { label: "Channels", value: "Selected" },
            { label: "Markets", value: "Mapped" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-orange-50 bg-white px-2.5 py-2"
            >
              <p className="font-mono text-[9px] uppercase tracking-wide text-brand-gray-text">
                {stat.label}
              </p>
              <p className="mt-0.5 font-tech text-[13px] font-bold text-brand-dark sm:text-[14px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-orange-100/90 bg-white">
          <div className="flex items-center justify-between border-b border-orange-50 px-3 py-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
              <SlidersHorizontal
                className="h-3.5 w-3.5 text-brand-orange"
                strokeWidth={1.9}
              />
              Active distribution rules
            </span>
            <span className="font-mono text-[9px] font-semibold text-brand-orange">
              Live
            </span>
          </div>
          <ul className="divide-y divide-orange-50">
            {rules.map((row) => (
              <li
                key={row.label}
                className="flex items-center justify-between gap-2 px-3 py-2"
              >
                <span className="text-[12px] font-semibold text-brand-dark sm:text-[13px]">
                  {row.label}
                </span>
                <span className="rounded-full bg-brand-orange/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand-orange">
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
