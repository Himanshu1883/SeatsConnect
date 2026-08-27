"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  Layers,
  Network,
  RefreshCw,
  Server,
  ShieldCheck,
  Store,
  UserRound,
  Workflow,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type FlowStep = {
  label: string;
  detail: string;
  icon: LucideIcon;
};

const supplierFlow: FlowStep[] = [
  {
    label: "Supplier System",
    detail: "Events, inventory and booking systems sync in automatically.",
    icon: Store,
  },
  {
    label: "SeatsConnect API",
    detail: "One structured connection instead of many buyer integrations.",
    icon: Server,
  },
  {
    label: "Infrastructure",
    detail: "Routing, pricing rules and controlled access enforced centrally.",
    icon: Layers,
  },
  {
    label: "Approved Distribution",
    detail: "Inventory only ever reaches vetted, professional B2B channels.",
    icon: Network,
  },
];

const partnerFlow: FlowStep[] = [
  {
    label: "Global Event Supply",
    detail: "Search connected inventory across markets and categories.",
    icon: Network,
  },
  {
    label: "SeatsConnect",
    detail: "Distribution infrastructure standardises every connection.",
    icon: Layers,
  },
  {
    label: "Partner API",
    detail: "Search, quote, book and fulfil through one consistent layer.",
    icon: Server,
  },
  {
    label: "Partner Platform",
    detail: "Presented inside your own systems and customer workflows.",
    icon: Building2,
  },
];

const CYCLE_MS = 2200;

export function ApiFlows() {
  return (
    <HomeFrame id="flows" variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>Connection Paths</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
              How the API <span className="text-brand-orange">Connects Both Sides.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Two live views into the same infrastructure — supply flowing in
              on one side, distribution flowing out on the other.
            </p>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-6">
            <FlowShowcase
              eyebrow="supplier-api"
              title="Connect your supply once."
              subtitle="Stop maintaining separate integrations for every buyer — connect inventory once and let SeatsConnect route it."
              steps={supplierFlow}
              ctaLabel="Explore Supplier API"
              consoles={<SupplierConsoles />}
            />
            <FlowShowcase
              eyebrow="partner-api"
              title="Distribute without the overhead."
              subtitle="Search, quote, book and fulfil connected inventory through one API — no per-supplier integration work."
              steps={partnerFlow}
              ctaLabel="Explore Partner API"
              consoles={<PartnerConsoles />}
            />
          </div>
        </Reveal>

        <Reveal delay={110}>
          <div className="flex flex-col gap-3 rounded-2xl border border-orange-100/90 bg-white/85 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
                <Workflow className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                  Search → Quote → Book → Fulfil
                </p>
                <p className="mt-0.5 text-[13px] text-brand-gray-text">
                  Partner workflows sit on the same API layer that suppliers
                  connect into.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Showcase column: feature list + two stacked consoles                */
/* ------------------------------------------------------------------ */

function FlowShowcase({
  eyebrow,
  title,
  subtitle,
  steps,
  ctaLabel,
  consoles,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: FlowStep[];
  ctaLabel: string;
  consoles: React.ReactNode;
}) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(id);
  }, [paused, steps.length]);

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_18px_50px_rgba(40,30,20,0.07)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="border-b border-orange-100/90 bg-gradient-to-r from-[#faf7f3] via-white to-[#fff7f0] px-5 py-4 sm:px-6 sm:py-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-brand-orange/10 px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-brand-orange">
            {eyebrow}
          </span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="sc-live-ping absolute inset-0 rounded-full bg-emerald-500 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Live
          </span>
        </div>
        <h3 className="mt-2 font-tech text-lg font-bold tracking-tight text-brand-dark sm:text-xl">
          {title}
        </h3>
        <p className="mt-1 max-w-md text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
          {subtitle}
        </p>
      </div>

      <div className="grid gap-5 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-4">
        {/* compact step list */}
        <div className="relative border-l border-orange-100 pl-4">
          <ul className="space-y-4">
            {steps.map((step, i) => {
              const isActive = i === active;
              return (
                <li key={step.label}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full items-start gap-2.5 text-left"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md transition-colors",
                        isActive
                          ? "bg-brand-orange text-white"
                          : "bg-brand-orange/10 text-brand-orange/70 group-hover:bg-brand-orange/20"
                      )}
                    >
                      <step.icon className="h-3 w-3" strokeWidth={2} />
                    </span>
                    <span className="min-w-0">
                      <span
                        className={cn(
                          "block font-tech text-[13px] font-bold tracking-tight transition-colors",
                          isActive ? "text-brand-orange" : "text-brand-dark"
                        )}
                      >
                        {step.label}
                      </span>
                      <span className="mt-0.5 block text-[11.5px] leading-snug text-brand-gray-text">
                        {step.detail}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <a
            href="#"
            className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-dark px-4 py-2 font-tech text-[12px] font-semibold text-white transition hover:bg-brand-dark/90"
          >
            {ctaLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* stacked consoles */}
        <div className="relative h-[260px] sm:h-[280px] lg:h-[300px]">{consoles}</div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-orange-100/90 bg-[#faf8f5] px-5 py-3 sm:px-6">
        <div className="flex items-center gap-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={cn(
                "h-1 rounded-full transition-all duration-300",
                i === active ? "w-5 bg-brand-orange" : "w-2.5 bg-orange-100"
              )}
            />
          ))}
        </div>
        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-gray-text">
          Controlled · Approved · B2B
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Console chrome shell                                                */
/* ------------------------------------------------------------------ */

function ConsoleShell({
  title,
  live,
  className,
  children,
}: {
  title: string;
  live?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-xl border border-orange-100 bg-white shadow-[0_16px_36px_rgba(40,30,20,0.12)]",
        className
      )}
    >
      <div className="flex items-center gap-2 border-b border-orange-100 bg-[#fbf8f4] px-3 py-2">
        <span className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-brand-dark/15" />
        </span>
        <p className="ml-1 truncate font-mono text-[9.5px] font-semibold text-brand-gray-text">
          {title}
        </p>
        {live ? (
          <span className="ml-auto flex items-center gap-1">
            <span className="relative flex h-1.5 w-1.5">
              <span className="sc-live-ping absolute inset-0 rounded-full bg-emerald-500 opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
          </span>
        ) : null}
      </div>
      <div className="p-2.5">{children}</div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Supplier side: inventory feed + distribution rules                  */
/* ------------------------------------------------------------------ */

function SupplierConsoles() {
  const rows = [
    { name: "Championship Final", venue: "AT&T Center · TX", status: "Synced" },
    { name: "Summer Festival Pass", venue: "Multiple venues", status: "Synced" },
    { name: "Grand Prix Weekend", venue: "Circuit Park", status: "Syncing" },
    { name: "Arena Hospitality Suite", venue: "The O2 · UK", status: "Synced" },
  ] as const;

  const rules = [
    { label: "Travel Partners", state: "Approved" },
    { label: "Corporate Clients", state: "Approved" },
    { label: "White-label Journeys", state: "Restricted" },
  ] as const;

  return (
    <>
      <ConsoleShell
        title="Distribution rules"
        className="right-0 top-0 z-10 w-[68%] -rotate-1 sm:w-[62%]"
      >
        <p className="mb-1.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
          Channel access
        </p>
        <ul className="space-y-1.5">
          {rules.map((rule) => (
            <li
              key={rule.label}
              className="flex items-center justify-between rounded-md bg-[#faf7f3] px-2 py-1.5"
            >
              <span className="flex items-center gap-1.5 text-[10px] font-medium text-brand-dark">
                <ShieldCheck className="h-3 w-3 text-brand-orange" strokeWidth={2} />
                {rule.label}
              </span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 font-mono text-[8px] font-semibold",
                  rule.state === "Approved"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-brand-dark/8 text-brand-gray-text"
                )}
              >
                {rule.state}
              </span>
            </li>
          ))}
        </ul>
      </ConsoleShell>

      <ConsoleShell
        title="Inventory feed"
        live
        className="bottom-0 left-0 z-20 w-[86%] rotate-[0.5deg] sm:w-[82%]"
      >
        <div className="mb-1.5 flex items-center gap-1.5">
          <RefreshCw className="h-3 w-3 text-brand-orange" strokeWidth={2} />
          <p className="font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
            Events · auto-synced
          </p>
        </div>
        <div className="space-y-1">
          {rows.map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between gap-2 rounded-md border border-orange-50 px-2 py-1.5"
            >
              <div className="min-w-0">
                <p className="truncate text-[10.5px] font-semibold text-brand-dark">{row.name}</p>
                <p className="truncate text-[9px] text-brand-gray-text">{row.venue}</p>
              </div>
              <span
                className={cn(
                  "flex shrink-0 items-center gap-1 rounded-full px-1.5 py-0.5 font-mono text-[8px] font-semibold",
                  row.status === "Synced"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-orange-50 text-brand-orange"
                )}
              >
                {row.status === "Synced" ? (
                  <CheckCircle2 className="h-2.5 w-2.5" />
                ) : (
                  <Clock3 className="sc-spin h-2.5 w-2.5" />
                )}
                {row.status}
              </span>
            </div>
          ))}
        </div>
      </ConsoleShell>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Partner side: marketplace search + booking tracker                  */
/* ------------------------------------------------------------------ */

function PartnerConsoles() {
  const results = [
    { name: "Championship Final — Hospitality", meta: "EU · Sport", price: "from €640" },
    { name: "West End Arena — Suite 12", meta: "UK · Premium", price: "from €1,240" },
    { name: "Grand Prix Weekend — Paddock", meta: "APAC · Motorsport", price: "from €980" },
  ] as const;

  const bookings = [
    { ref: "ord_5521", status: "Confirmed" },
    { ref: "ord_5519", status: "Pending" },
  ] as const;

  return (
    <>
      <ConsoleShell
        title="Booking tracker"
        className="right-0 top-0 z-10 w-[62%] -rotate-1 sm:w-[56%]"
      >
        <p className="mb-1.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
          Recent bookings
        </p>
        <ul className="space-y-1.5">
          {bookings.map((b) => (
            <li
              key={b.ref}
              className="flex items-center justify-between rounded-md bg-[#faf7f3] px-2 py-1.5"
            >
              <span className="font-mono text-[9.5px] font-medium text-brand-dark">{b.ref}</span>
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 font-mono text-[8px] font-semibold",
                  b.status === "Confirmed"
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-orange-50 text-brand-orange"
                )}
              >
                {b.status}
              </span>
            </li>
          ))}
        </ul>
      </ConsoleShell>

      <ConsoleShell
        title="Marketplace search"
        live
        className="bottom-0 left-0 z-20 w-[86%] rotate-[0.5deg] sm:w-[82%]"
      >
        <div className="mb-1.5 flex items-center gap-1.5 rounded-md border border-orange-100 bg-[#faf7f3] px-2 py-1">
          <UserRound className="h-3 w-3 text-brand-orange" strokeWidth={2} />
          <p className="font-mono text-[9px] text-brand-gray-text">connected inventory, all markets</p>
        </div>
        <div className="space-y-1">
          {results.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between gap-2 rounded-md border border-orange-50 px-2 py-1.5"
            >
              <div className="min-w-0">
                <p className="truncate text-[10.5px] font-semibold text-brand-dark">{r.name}</p>
                <p className="truncate text-[9px] text-brand-gray-text">{r.meta}</p>
              </div>
              <span className="shrink-0 font-mono text-[9.5px] font-semibold text-brand-orange">
                {r.price}
              </span>
            </div>
          ))}
        </div>
      </ConsoleShell>
    </>
  );
}

/* ------------------------------------------------------------------ */

function GlobalConsoleStyles() {
  return (
    <style jsx global>{`
      .sc-live-ping {
        animation: sc-live-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
      }
      @keyframes sc-live-ping {
        75%,
        100% {
          transform: scale(2.2);
          opacity: 0;
        }
      }
      .sc-spin {
        animation: sc-spin 1.6s linear infinite;
      }
      @keyframes sc-spin {
        to {
          transform: rotate(360deg);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .sc-live-ping,
        .sc-spin {
          animation: none !important;
        }
      }
    `}</style>
  );
}