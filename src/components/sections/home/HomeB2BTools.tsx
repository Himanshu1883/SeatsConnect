"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  CalendarCheck,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FilePenLine,
  FileText,
  Package,
  Percent,
  Receipt,
  Search,
  SlidersHorizontal,
  Truck,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const toolsStrip = [
  { src: exp.football, label: "Football" },
  { src: exp.tennis, label: "Tennis" },
  { src: exp.suite, label: "Suites" },
  { src: exp.hotel, label: "Hotels" },
] as const;

const steps: { title: string; text: string; icon: LucideIcon }[] = [
  { title: "Search", text: "Find inventory in seconds", icon: Search },
  { title: "Quote", text: "Build and compare offers", icon: Receipt },
  { title: "Book", text: "Confirm and secure", icon: CalendarCheck },
  { title: "Fulfil", text: "Deliver and manage fulfilment", icon: Package },
];

const features: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Search inventory",
    text: "Find the right events, tickets and hospitality in real time.",
    icon: Search,
  },
  {
    title: "Compare available options",
    text: "View and compare seats, hospitality and pricing.",
    icon: SlidersHorizontal,
  },
  {
    title: "Build quotations",
    text: "Create accurate, professional quotations in minutes.",
    icon: FileText,
  },
  {
    title: "Apply agreed commercial terms or margins",
    text: "Automatically apply contracted rates or margins where applicable.",
    icon: Percent,
  },
  {
    title: "Create branded customer proposals",
    text: "Present offers with your branding and messaging.",
    icon: FilePenLine,
  },
  {
    title: "Confirm bookings",
    text: "Convert proposals into confirmed bookings.",
    icon: CheckCircle2,
  },
  {
    title: "Track orders",
    text: "Monitor orders and stay up to date in real time.",
    icon: ClipboardList,
  },
  {
    title: "Manage fulfilment",
    text: "Ensure smooth delivery of tickets and hospitality.",
    icon: Truck,
  },
];

export function HomeB2BTools() {
  const [active, setActive] = useState(1);

  return (
    <HomeFrame variant="plain">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <HomeKicker>B2B Sales Tools</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.12] tracking-tight mt-3">
            <span className="text-brand-dark">Built for</span>
            <br />
            <span className="text-brand-orange">Professional B2B Sales.</span>
          </h2>
          <div className="mt-4 mb-5 h-[3px] w-11 rounded-full bg-brand-orange" />
          <p className="text-brand-gray-text leading-relaxed mb-8 max-w-xl">
            Distribution partners can use SeatsConnect to turn event inventory
            into customer-ready offers. Depending on their account permissions
            and integration, partners can search, quote, book and fulfil through
            one professional workflow.
          </p>

          <div className="relative">
            <div
              role="list"
              aria-label="Search, Quote, Book, Fulfil"
              className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3"
            >
              {steps.map((step, i) => (
                <button
                  key={step.title}
                  type="button"
                  role="listitem"
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                  className={cn(
                    "tools-flow-step relative flex min-h-[6.5rem] flex-col items-center justify-center rounded-xl border bg-white px-2 py-3 text-center",
                    i === active && "is-active"
                  )}
                >
                  <step.icon
                    className="h-5 w-5 text-brand-orange mb-2"
                    strokeWidth={1.6}
                  />
                  <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                    {step.title}
                  </p>
                  <p className="text-[11px] text-brand-gray-text mt-0.5 leading-snug">
                    {step.text}
                  </p>
                </button>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0 hidden sm:block" aria-hidden>
              {[1, 2, 3].map((n) => (
                <span
                  key={n}
                  className="tools-flow-arrow"
                  style={{ left: `${(n / 4) * 100}%` }}
                >
                  <span className="tools-flow-arrow-dash" />
                  <ChevronRight className="h-3 w-3 shrink-0" strokeWidth={2.4} />
                </span>
              ))}
            </div>
          </div>

          <div className="tools-flow-track-wrap relative mt-5 h-4" aria-hidden>
            <div className="tools-flow-track" />
            <div className="grid grid-cols-4 h-full">
              {steps.map((step, i) => (
                <span
                  key={step.title}
                  className="flex items-center justify-center"
                >
                  <span
                    className={cn(
                      "tools-flow-track-node",
                      i === active && "is-active"
                    )}
                  />
                </span>
              ))}
            </div>
          </div>

          <ExperienceStrip items={toolsStrip} className="mt-8" />
        </Reveal>

        <Reveal delay={120}>
          <div className="tools-flow-panel rounded-[1.6rem] border border-brand-orange/25 bg-white p-4 sm:p-5 lg:p-6">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-[1.875rem] bottom-[1.875rem] w-6"
              >
                <div className="tools-flow-line absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2" />
              </div>

              <ul className="relative space-y-2.5">
                {features.map((feature) => (
                  <li
                    key={feature.title}
                    className="relative grid grid-cols-[24px_1fr] items-center gap-x-3.5"
                  >
                    <span className="relative z-10 flex h-6 w-6 items-center justify-center">
                      <span className="tools-flow-node">
                        <span className="tools-flow-node-dot" />
                      </span>
                    </span>
                    <div className="flex min-w-0 items-center gap-3 rounded-xl border border-orange-100 bg-white px-3.5 py-2.5 shadow-[0_1px_4px_rgba(166,122,70,0.04)]">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
                        <feature.icon className="h-4 w-4" strokeWidth={1.6} />
                      </div>
                      <div className="min-w-0">
                        <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                          {feature.title}
                        </p>
                        <p className="text-[12px] text-brand-gray-text mt-0.5 leading-snug">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
