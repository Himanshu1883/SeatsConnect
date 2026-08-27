"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Code2,
  Package,
  Receipt,
  RefreshCw,
  Tag,
  Ticket,
  Truck,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";

const integrationData: {
  label: string;
  icon: LucideIcon;
}[] = [
  { label: "Event information", icon: CalendarDays },
  { label: "Product information", icon: Package },
  { label: "Inventory", icon: Ticket },
  { label: "Availability", icon: RefreshCw },
  { label: "Pricing", icon: Tag },
  { label: "Orders", icon: Receipt },
  { label: "Booking status", icon: CheckCircle2 },
  { label: "Fulfilment information", icon: Truck },
];

const flowSteps = [
  "Supplier system",
  "SeatsConnect API",
  "Infrastructure",
  "Approved channels",
] as const;

export function SuppliersApi() {
  return (
    <HomeFrame
      id="api"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 xl:gap-10">
            <ApiFlowDash />

            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>API Connectivity</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Connect Through{" "}
                  <span className="text-brand-orange">API.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect can integrate with existing supplier systems to
                  automate the movement of structured event, inventory and
                  booking data — reducing manual updates across your distribution
                  network.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                {integrationData.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 rounded-xl border border-orange-100/90 bg-white/85 px-3 py-2.5"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <item.icon className="h-3.5 w-3.5" strokeWidth={1.85} />
                    </span>
                    <span className="text-[13px] font-medium text-brand-dark">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href={routes.contact}
                className="inline-flex w-fit items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
              >
                Discuss an Integration
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-col gap-4 rounded-2xl border border-orange-100/90 bg-white/80 px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:gap-6 lg:py-3.5 lg:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
                <Code2 className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                  One connection instead of many integrations.
                </p>
                <p className="mt-0.5 text-[13px] text-brand-gray-text">
                  Connect existing systems into one controlled distribution layer.
                </p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed text-brand-gray-text lg:max-w-xs lg:text-right">
              Supported connectivity depends on your technical environment and
              onboarding requirements.
            </p>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function ApiFlowDash() {
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
            supplier-api · data flow
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Syncing
        </span>
      </div>

      <div className="bg-[#faf7f3]/50 p-3.5 sm:p-4">
        <div className="mb-3 flex flex-col gap-2">
          {flowSteps.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <div className="flex w-full items-center gap-2.5 rounded-xl border border-orange-100/90 bg-white px-3 py-2.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 font-mono text-[10px] font-bold text-brand-orange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-tech text-[13px] font-bold text-brand-dark sm:text-[14px]">
                  {step}
                </span>
                {i < flowSteps.length - 1 ? (
                  <span className="ml-auto font-mono text-[9px] font-semibold text-emerald-700">
                    Live
                  </span>
                ) : (
                  <span className="ml-auto font-mono text-[9px] font-semibold text-brand-orange">
                    Controlled
                  </span>
                )}
              </div>
              {i < flowSteps.length - 1 ? (
                <span className="my-0.5 font-mono text-[11px] text-brand-orange/70">
                  ↓
                </span>
              ) : null}
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-orange-100/90 bg-white">
          <div className="border-b border-orange-50 px-3 py-2">
            <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
              Automated data objects
            </span>
          </div>
          <ul className="divide-y divide-orange-50">
            {integrationData.slice(0, 5).map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 px-3 py-2"
              >
                <item.icon
                  className="h-3.5 w-3.5 shrink-0 text-brand-orange"
                  strokeWidth={1.9}
                />
                <span className="text-[12px] font-medium text-brand-dark">
                  {item.label}
                </span>
                <CheckCircle2
                  className="ml-auto h-3.5 w-3.5 text-emerald-500"
                  strokeWidth={2}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
