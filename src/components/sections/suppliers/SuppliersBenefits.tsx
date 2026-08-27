"use client";

import type { LucideIcon } from "lucide-react";
import {
  Globe2,
  Layers,
  Link2,
  RefreshCw,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const benefits: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "One connection",
    description:
      "Connect once to multiple approved distribution channels.",
    icon: Link2,
  },
  {
    title: "Automated availability",
    description:
      "Reduce manual updates through supported integrations.",
    icon: RefreshCw,
  },
  {
    title: "Structured B2B access",
    description:
      "Make inventory available through approved professional channels.",
    icon: ShieldCheck,
  },
  {
    title: "Reduced administration",
    description:
      "Centralise connectivity and reduce operational complexity.",
    icon: Workflow,
  },
  {
    title: "International reach",
    description:
      "Connect with businesses serving international customers.",
    icon: Globe2,
  },
  {
    title: "Connected booking information",
    description:
      "Structured flow of orders and fulfilment data.",
    icon: Layers,
  },
];

export function SuppliersBenefits() {
  return (
    <HomeFrame
      id="benefits"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>Operational Efficiency</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
              Reduce Manual{" "}
              <span className="text-brand-orange">Distribution.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Manual enquiries, spreadsheets, emails and individual feeds create
              additional work. SeatsConnect is designed to centralise
              connectivity and reduce unnecessary operational complexity.
            </p>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
            {benefits.map((item) => (
              <article
                key={item.title}
                className="group flex h-full flex-col rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)] sm:p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </span>
                <h3 className="mt-3.5 font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-brand-gray-text">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-orange-100/90 bg-[#faf7f3]/85 p-3 sm:grid-cols-3 sm:gap-0 sm:p-0 lg:rounded-full lg:px-2 lg:py-2.5">
            {[
              {
                label: "Before",
                value: "Multiple feeds & manual updates",
              },
              {
                label: "With SeatsConnect",
                value: "One controlled infrastructure layer",
              },
              {
                label: "Outcome",
                value: "Less admin, more structured reach",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className="relative flex flex-col gap-0.5 rounded-xl bg-white/70 px-3 py-2.5 sm:rounded-none sm:bg-transparent sm:px-4 lg:items-center lg:text-center"
              >
                {i > 0 ? (
                  <span
                    className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-orange-100 sm:block"
                    aria-hidden
                  />
                ) : null}
                <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
                  {item.label}
                </p>
                <p className="font-tech text-[13px] font-bold text-brand-dark sm:text-[14px]">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
