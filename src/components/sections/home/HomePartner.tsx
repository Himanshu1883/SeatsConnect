"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Code2,
  Globe2,
  Layers,
  LayoutTemplate,
  Plug,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const experienceStrip = [
  { src: exp.travel, label: "Travel" },
  { src: exp.concert, label: "Events" },
  { src: exp.hospitality, label: "Hospitality" },
  { src: exp.stadium, label: "Venues" },
] as const;

const featureCards: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Layers,
    title: "One Platform",
    text: "Single access layer",
  },
  {
    icon: Plug,
    title: "Fewer Integrations",
    text: "One relationship",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Professional markets",
  },
  {
    icon: ShieldCheck,
    title: "Approved Access",
    text: "Trusted network",
  },
];

const integrations: {
  icon: LucideIcon;
  title: string;
  text: string;
  status: "ACTIVE" | "READY";
}[] = [
  {
    icon: Code2,
    title: "API Integration",
    text: "Connect inventory and booking into your existing systems.",
    status: "ACTIVE",
  },
  {
    icon: LayoutTemplate,
    title: "White Label",
    text: "Deliver discovery and booking under your own brand.",
    status: "ACTIVE",
  },
  {
    icon: Ticket,
    title: "Embedded Inventory",
    text: "Surface live availability inside your customer workflows.",
    status: "READY",
  },
  {
    icon: Plug,
    title: "Custom Integration",
    text: "Tailor connectivity to your operational requirements.",
    status: "READY",
  },
];

const trustItems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe2,
    title: "Global Coverage",
    text: "Inventory across professional markets worldwide",
  },
  {
    icon: Ticket,
    title: "Live Events",
    text: "Connected event supply across channels",
  },
  {
    icon: Layers,
    title: "Live Inventory",
    text: "Real-time availability through the layer",
  },
  {
    icon: BadgeCheck,
    title: "100% Approved",
    text: "Trusted network of approved suppliers",
  },
];

export function HomePartner() {
  return (
    <HomeFrame id="partners" tinted variant="grid">
      <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-14 items-start mb-12 lg:mb-16">
        <Reveal>
          <HomeKicker>For Partners</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight mt-3 mb-5">
            <span className="text-brand-dark">One Connection to </span>
            <span className="text-brand-orange">Global Event Supply.</span>
          </h2>
          <p className="text-brand-gray-text leading-relaxed mb-3">
            SeatsConnect gives approved B2B businesses access to ticket,
            hospitality and event inventory through one connected platform and
            infrastructure layer. Instead of maintaining separate supplier
            relationships and technology integrations, partners can access
            suitable inventory through SeatsConnect.
          </p>
          <p className="font-tech font-semibold text-brand-dark mb-8">
            More inventory. Fewer integrations. One relationship.
          </p>

          <Button
            href={routes.joinPartner}
            className="mb-8 w-full sm:w-auto px-6 py-3"
          >
            <Users className="h-4 w-4" strokeWidth={1.75} />
            Join the Distribution Network
            <ArrowRight className="h-4 w-4" />
          </Button>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-orange-100 bg-white px-3.5 py-3.5 shadow-[0_2px_10px_rgba(166,122,70,0.06)]"
              >
                <card.icon
                  className="h-4 w-4 text-brand-orange mb-2.5"
                  strokeWidth={1.5}
                />
                <p className="font-tech text-xs font-bold text-brand-dark leading-tight">
                  {card.title}
                </p>
                <p className="text-[11px] text-brand-gray-text mt-0.5 leading-snug">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <AccessLayerConsole />
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="pt-2 border-t border-orange-100/80">
          <ExperienceStrip items={experienceStrip} className="mb-8 pt-6" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <item.icon
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-brand-gray-text mt-1 leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}

function AccessLayerConsole() {
  return (
    <div
      className={cn(
        "relative rounded-[1.6rem] border border-orange-100/90 bg-white p-5 sm:p-6",
        "shadow-[0_8px_18px_rgba(166,122,70,0.08),0_24px_56px_rgba(166,122,70,0.14)]"
      )}
    >
      <div className="flex items-center gap-2 mb-5">
        <Layers className="h-4 w-4 text-brand-orange" strokeWidth={1.75} />
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-dark font-semibold">
          ACCESS.LAYER
        </p>
      </div>

      <div className="flex items-center gap-3.5 rounded-2xl border border-orange-100/80 bg-[#fbf6f0] p-4 mb-5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
          <Layers className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
            SeatsConnect Platform
          </p>
          <p className="text-xs text-brand-gray-text mt-0.5 leading-snug">
            Your single connection to global event supply infrastructure.
          </p>
        </div>
        <StatusBadge status="ACTIVE" />
      </div>

      <div className="relative">
        {/* Single continuous dashed rail — nodes sit on this column’s center */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-[1.875rem] bottom-[1.875rem] w-5"
        >
          <svg
            className="absolute inset-0 h-full w-full overflow-visible"
            width="20"
            height="100%"
          >
            <line
              className="partner-flow-line"
              x1="10"
              y1="0"
              x2="10"
              y2="100%"
              stroke="#d4a574"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
          <div className="partner-flow-pulse absolute left-1/2 top-0 h-10 w-1.5 -translate-x-1/2 rounded-full" />
        </div>

        <ul className="relative space-y-3">
          {integrations.map((item, i) => (
            <li
              key={item.title}
              className="relative grid grid-cols-[20px_1fr] items-center gap-x-3"
            >
              <span
                aria-hidden
                className="relative z-10 flex h-5 w-5 items-center justify-center"
              >
                {/* Short stem from node toward card */}
                <span className="absolute left-1/2 top-1/2 h-px w-3 -translate-y-1/2 bg-[#d4a574]/55" />
                <span
                  className="partner-flow-node relative flex h-[11px] w-[11px] items-center justify-center rounded-full bg-brand-orange ring-[3px] ring-white"
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
                </span>
              </span>

              <div className="flex min-w-0 items-center gap-3 rounded-xl border border-orange-100 bg-white px-3.5 py-3 shadow-[0_1px_4px_rgba(166,122,70,0.04)]">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange-light text-brand-orange">
                  <item.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-brand-gray-text mt-0.5 leading-snug line-clamp-2">
                    {item.text}
                  </p>
                </div>
                <StatusBadge status={item.status} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "ACTIVE" | "READY" }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
      <Check className="h-2.5 w-2.5" strokeWidth={2.5} />
      {status}
    </span>
  );
}
