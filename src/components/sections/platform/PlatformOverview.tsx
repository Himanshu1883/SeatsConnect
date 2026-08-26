"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarCheck,
  Gift,
  Layers,
  Network,
  Package,
  Share2,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { Reveal, useCycle } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const steps: {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Supply",
    text: "Venues, promoters, hospitality providers and suppliers connect inventory.",
    icon: Package,
    image: exp.stadium,
  },
  {
    title: "Connect",
    text: "SeatsConnect receives inventory through APIs, feeds and supported integrations.",
    icon: Network,
    image: exp.venue,
  },
  {
    title: "Structure",
    text: "Products, availability and distribution rules are organised within the platform.",
    icon: Layers,
    image: exp.hospitality,
  },
  {
    title: "Distribute",
    text: "Relevant inventory becomes available to approved B2B partners.",
    icon: Share2,
    image: exp.travel,
  },
  {
    title: "Book",
    text: "Partners search, quote and confirm customer requirements.",
    icon: CalendarCheck,
    image: exp.concert,
  },
  {
    title: "Fulfil",
    text: "Order and delivery information flows through the connected workflow.",
    icon: Gift,
    image: exp.tickets,
  },
];

export function PlatformOverview() {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useCycle(steps.length, 2600, paused);
  const current = steps[active];

  return (
    <HomeFrame variant="plain">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>Platform Overview</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            One Platform Connecting{" "}
            <span className="text-brand-orange">Both Sides.</span>
          </h2>
          <p className="mt-4 text-brand-gray-text leading-relaxed">
            From inventory connectivity through to booking and fulfilment,
            SeatsConnect brings fragmented workflows into one connected
            ecosystem.
          </p>
        </div>
      </Reveal>

      <div
        className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal>
          <ol className="space-y-2">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === active;
              return (
                <li key={step.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-2xl border px-3.5 py-3 text-left transition-all duration-300",
                      isActive
                        ? "border-brand-orange/50 bg-white shadow-[0_8px_28px_rgba(212,165,116,0.12)]"
                        : "border-transparent hover:border-orange-100 hover:bg-white/70"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors",
                        isActive
                          ? "border-brand-orange bg-brand-orange text-white"
                          : "border-brand-orange/50 bg-white text-brand-orange"
                      )}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="font-tech text-sm font-bold text-brand-dark">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-brand-gray-text leading-snug line-clamp-2">
                        {step.text}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "h-4 w-4 shrink-0 transition-opacity",
                        isActive
                          ? "text-brand-orange opacity-100"
                          : "opacity-0 group-hover:opacity-40"
                      )}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal delay={100}>
          <div className="space-y-4">
            <article className="group overflow-hidden rounded-[1.6rem] border border-orange-100 bg-white shadow-[0_16px_48px_rgba(26,26,26,0.05)]">
              <CardMedia
                src={current.image}
                alt={current.title}
                heightClass="h-44 sm:h-52"
              />
              <div className="p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-orange">
                  Step {String(active + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-1 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-2 text-sm text-brand-gray-text leading-relaxed">
                  {current.text}
                </p>
                <div className="mt-5 flex gap-1.5">
                  {steps.map((step, i) => (
                    <span
                      key={step.title}
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-colors duration-500",
                        i <= active
                          ? "bg-brand-orange"
                          : "bg-brand-orange-muted/45"
                      )}
                    />
                  ))}
                </div>
              </div>
            </article>

            <LiveConsole
              title="platform-flow"
              live={!paused}
              pipeline={steps.map((s) => s.title.toUpperCase())}
              feed={[
                "SUPPLY sync  venue hospitality allocation",
                "CONNECT ingest API · feed · integration",
                "STRUCTURE rules · markets · channels",
                "DISTRIBUTE approved partner · travel",
                "BOOK confirm connected workflow",
                "FULFIL pass order + delivery status",
              ]}
              statuses={[
                { label: "Layer", value: "ONLINE" },
                { label: "Flow", value: "ACTIVE" },
                { label: "Access", value: "APPROVED" },
              ]}
            />
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
