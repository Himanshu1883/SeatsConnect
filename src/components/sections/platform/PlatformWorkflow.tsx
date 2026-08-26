"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  CheckCircle2,
  FileText,
  Package,
  Search,
  Truck,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { Reveal, useCycle } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const flow: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Inventory",
    text: "Live availability enters the connected layer.",
    icon: Package,
  },
  {
    title: "Search",
    text: "Partners find events, tickets and hospitality.",
    icon: Search,
  },
  {
    title: "Quote",
    text: "Build offers with seats, terms and pricing.",
    icon: FileText,
  },
  {
    title: "Book",
    text: "Confirm requirements through the workflow.",
    icon: CalendarCheck,
  },
  {
    title: "Confirm",
    text: "Secure bookings against agreed commercial rules.",
    icon: CheckCircle2,
  },
  {
    title: "Fulfil",
    text: "Order and delivery status move through the chain.",
    icon: Truck,
  },
];

const strip = [
  { src: exp.football, label: "Football" },
  { src: exp.tennis, label: "Tennis" },
  { src: exp.formula1, label: "Motorsport" },
  { src: exp.suite, label: "Hospitality" },
] as const;

export function PlatformWorkflow() {
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useCycle(flow.length, 2000, paused);

  return (
    <HomeFrame tinted variant="grid">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>Workflow</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            One Connected{" "}
            <span className="text-brand-orange">Booking Workflow.</span>
          </h2>
          <p className="mt-4 text-brand-gray-text leading-relaxed">
            SeatsConnect supports the flow of booking information from initial
            availability through to final fulfilment — creating a more structured
            environment for suppliers and professional partners.
          </p>
        </div>
      </Reveal>

      <div
        className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <Reveal>
          <div className="rounded-[1.6rem] border border-orange-100 bg-white p-4 sm:p-5 shadow-[0_12px_40px_rgba(26,26,26,0.04)]">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {flow.map((step, i) => {
                const Icon = step.icon;
                const isActive = i === active;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "rounded-xl border px-3 py-3.5 text-left transition-all",
                      isActive
                        ? "border-brand-orange/55 bg-brand-orange-light/70 shadow-sm"
                        : "border-orange-100 bg-white hover:border-brand-orange/30"
                    )}
                  >
                    <Icon
                      className="mb-2 h-4 w-4 text-brand-orange"
                      strokeWidth={1.7}
                    />
                    <p className="font-tech text-sm font-bold text-brand-dark">
                      {step.title}
                    </p>
                    <p className="mt-0.5 text-[11px] text-brand-gray-text leading-snug">
                      {step.text}
                    </p>
                  </button>
                );
              })}
            </div>

            <div className="mt-5 overflow-hidden rounded-xl border border-orange-100 bg-[#FFFBF7] px-4 py-3">
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {flow.map((step, i) => (
                  <div key={step.title} className="flex items-center gap-2">
                    <span
                      className={cn(
                        "whitespace-nowrap rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider transition-colors",
                        i === active
                          ? "bg-brand-orange text-white"
                          : "bg-white text-brand-gray-text border border-orange-100"
                      )}
                    >
                      {step.title}
                    </span>
                    {i < flow.length - 1 ? (
                      <span className="text-brand-orange/50" aria-hidden>
                        →
                      </span>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <LiveConsole
            title="booking-workflow"
            live={!paused}
            pipeline={flow.map((s) => s.title.toUpperCase())}
            feed={[
              "INVENTORY sync live availability",
              "SEARCH query event · hospitality",
              "QUOTE build branded proposal",
              "BOOK confirm connected workflow",
              "CONFIRM hold against commercial terms",
              "FULFIL pass order + delivery status",
            ]}
            statuses={[
              { label: "Workflow", value: "CONNECTED" },
              { label: "Stage", value: flow[active].title.toUpperCase() },
              { label: "Status", value: "LIVE" },
            ]}
          />
        </Reveal>
      </div>

      <Reveal delay={180}>
        <ExperienceStrip items={strip} className="mt-10" />
      </Reveal>
    </HomeFrame>
  );
}
