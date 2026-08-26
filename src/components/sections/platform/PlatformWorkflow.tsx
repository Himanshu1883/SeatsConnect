"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  FileText,
  Handshake,
  Package,
  Search,
  ShoppingCart,
  TrendingUp,
  Truck,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

type StepTone = {
  accent: string;
  soft: string;
  text: string;
  ring: string;
  bar: string;
};

const tones: StepTone[] = [
  {
    accent: "#ff6b00",
    soft: "rgba(255,107,0,0.12)",
    text: "text-[#ff6b00]",
    ring: "ring-[#ff6b00]/25",
    bar: "bg-[#ff6b00]",
  },
  {
    accent: "#10b981",
    soft: "rgba(16,185,129,0.12)",
    text: "text-emerald-600",
    ring: "ring-emerald-500/25",
    bar: "bg-emerald-500",
  },
  {
    accent: "#3b82f6",
    soft: "rgba(59,130,246,0.12)",
    text: "text-blue-600",
    ring: "ring-blue-500/25",
    bar: "bg-blue-500",
  },
  {
    accent: "#8b5cf6",
    soft: "rgba(139,92,246,0.12)",
    text: "text-violet-600",
    ring: "ring-violet-500/25",
    bar: "bg-violet-500",
  },
  {
    accent: "#0d9488",
    soft: "rgba(13,148,136,0.12)",
    text: "text-teal-700",
    ring: "ring-teal-600/25",
    bar: "bg-teal-600",
  },
  {
    accent: "#ef4444",
    soft: "rgba(239,68,68,0.12)",
    text: "text-red-500",
    ring: "ring-red-500/25",
    bar: "bg-red-500",
  },
];

const steps: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Inventory",
    text: "Inventory is connected and made available in the system.",
    icon: Package,
  },
  {
    title: "Search",
    text: "Partners search events, products and availability in real time.",
    icon: Search,
  },
  {
    title: "Quote",
    text: "Create accurate quotes with pricing and availability.",
    icon: FileText,
  },
  {
    title: "Book",
    text: "Partners book inventory based on customer requirements.",
    icon: ShoppingCart,
  },
  {
    title: "Confirm",
    text: "Booking is confirmed and inventory is secured.",
    icon: CheckCircle2,
  },
  {
    title: "Fulfil",
    text: "Order and delivery information flows through to fulfilment.",
    icon: Truck,
  },
];

const summaryStats: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  soft: string;
  accent: string;
}[] = [
  {
    label: "Active Bookings",
    value: "Live",
    note: "In workflow",
    icon: BarChart3,
    soft: "rgba(255,107,0,0.12)",
    accent: "#ff6b00",
  },
  {
    label: "Orders Confirmed",
    value: "Tracked",
    note: "Connected status",
    icon: CalendarCheck,
    soft: "rgba(16,185,129,0.12)",
    accent: "#10b981",
  },
  {
    label: "Fulfilment Rate",
    value: "Connected",
    note: "End-to-end",
    icon: TrendingUp,
    soft: "rgba(139,92,246,0.12)",
    accent: "#8b5cf6",
  },
  {
    label: "Active Partners",
    value: "Approved",
    note: "Professional access",
    icon: Users,
    soft: "rgba(59,130,246,0.12)",
    accent: "#3b82f6",
  },
];

const features: {
  title: string;
  text: string;
  icon: LucideIcon;
  soft: string;
  accent: string;
}[] = [
  {
    title: "Unified Workflow",
    text: "Seamless flow across the booking lifecycle.",
    icon: Workflow,
    soft: "rgba(255,107,0,0.12)",
    accent: "#ff6b00",
  },
  {
    title: "Structured Process",
    text: "Consistent steps that improve control.",
    icon: CheckCircle2,
    soft: "rgba(16,185,129,0.12)",
    accent: "#10b981",
  },
  {
    title: "Real-time Visibility",
    text: "Live updates at every stage.",
    icon: Zap,
    soft: "rgba(59,130,246,0.12)",
    accent: "#3b82f6",
  },
  {
    title: "Partner Friendly",
    text: "Built for professional partner teams.",
    icon: Handshake,
    soft: "rgba(139,92,246,0.12)",
    accent: "#8b5cf6",
  },
  {
    title: "Operational Efficiency",
    text: "Connected flow through to fulfilment.",
    icon: Truck,
    soft: "rgba(239,68,68,0.12)",
    accent: "#ef4444",
  },
];

export function PlatformWorkflow() {
  return (
    <HomeFrame
      id="workflow"
      tinted
      variant=""
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-7 lg:gap-9">
        {/* Header */}
        <Reveal>
          <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
            <div className="max-w-xl">
              <HomeKicker>Workflow</HomeKicker>
              <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
                One Connected{" "}
                <span className="text-brand-orange">Booking</span> Workflow.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                SeatsConnect can support the flow of booking information from
                initial availability through to final fulfilment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-orange-100/90 bg-white p-2.5 shadow-[0_8px_24px_rgba(40,30,20,0.05)] sm:grid-cols-4 sm:gap-0 sm:p-2 lg:rounded-full lg:px-2 lg:py-2">
              {summaryStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-2 rounded-xl px-2 py-2 sm:rounded-none lg:items-center lg:px-2.5"
                >
                  {i > 0 ? (
                    <span
                      className="mr-1 hidden h-10 w-px shrink-0 bg-orange-100 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                    style={{ backgroundColor: stat.soft, color: stat.accent }}
                  >
                    <stat.icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
                      {stat.label}
                    </p>
                    <p className="font-tech text-[13px] font-bold text-brand-dark">
                      {stat.value}
                    </p>
                    <p className="text-[9px] text-emerald-600">{stat.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Step strip */}
        <Reveal delay={60}>
          <div className="platform-overview-track flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory xl:grid xl:grid-cols-6 xl:gap-2 xl:overflow-visible xl:pb-0">
            {steps.map((step, i) => {
              const tone = tones[i];
              return (
                <div
                  key={step.title}
                  className="relative flex w-[11.5rem] shrink-0 snap-start flex-col items-center px-1 text-center sm:w-[12.5rem] xl:w-auto"
                >
                  {i < steps.length - 1 ? (
                    <ChevronRight
                      className="pointer-events-none absolute -right-1.5 top-5 z-[1] hidden h-4 w-4 text-brand-gray-text/35 xl:block"
                      strokeWidth={2}
                      aria-hidden
                    />
                  ) : null}
                  <span
                    className={cn(
                      "mb-1.5 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[9px] font-bold text-white",
                      tone.bar
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-[0_6px_16px_rgba(40,30,20,0.08)] ring-4",
                      tone.ring
                    )}
                    style={{ color: tone.accent }}
                  >
                    <step.icon className="h-[1.1rem] w-[1.1rem]" strokeWidth={2} />
                  </span>
                  <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-brand-dark">
                    {step.title}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-brand-gray-text">
                    {step.text}
                  </p>
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Dashboard cards */}
        <Reveal delay={100}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            <InventoryCard />
            <SearchCard />
            <QuotesCard />
            <BookingsCard />
            <ConfirmCard />
            <FulfilCard />
          </div>
        </Reveal>

        {/* Features */}
        <Reveal delay={140}>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex items-start gap-2.5 rounded-xl border border-orange-100/80 bg-white/90 px-3 py-2.5"
              >
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: feature.soft,
                    color: feature.accent,
                  }}
                >
                  <feature.icon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <div className="min-w-0">
                  <p className="font-tech text-[12px] font-bold text-brand-dark">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-[10px] leading-snug text-brand-gray-text">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function DashCard({
  title,
  tone,
  badge,
  metricLabel,
  metricValue,
  metricNote,
  children,
}: {
  title: string;
  tone: StepTone;
  badge?: "live" | "today" | "week";
  metricLabel: string;
  metricValue: string;
  metricNote?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="flex h-full min-h-[13.5rem] flex-col overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-[0_8px_20px_rgba(40,30,20,0.04)]">
      <span className={cn("h-1 w-full", tone.bar)} aria-hidden />
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="font-tech text-[12px] font-bold text-brand-dark">
            {title}
          </p>
          {badge === "live" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          ) : badge ? (
            <span className="inline-flex items-center gap-0.5 rounded-md border border-orange-100 bg-[#faf7f3] px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
              {badge === "today" ? "Today" : "This Week"}
              <ChevronDown className="h-2.5 w-2.5" strokeWidth={2} />
            </span>
          ) : null}
        </div>

        <p className="font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
          {metricLabel}
        </p>
        <p className="font-tech text-lg font-bold leading-tight text-brand-dark">
          {metricValue}
        </p>
        {metricNote ? (
          <p className="mt-0.5 text-[10px] font-semibold text-emerald-600">
            {metricNote}
          </p>
        ) : null}

        <div className="mt-2 min-h-0 flex-1">{children}</div>

        <button
          type="button"
          className={cn(
            "mt-2 inline-flex items-center gap-1 text-[11px] font-semibold",
            tone.text
          )}
        >
          View details
          <ArrowRight className="h-3 w-3" strokeWidth={2.25} />
        </button>
      </div>
    </article>
  );
}

function InventoryCard() {
  const tone = tones[0];
  return (
    <DashCard
      title="Inventory Overview"
      tone={tone}
      badge="live"
      metricLabel="Total Inventory"
      metricValue="Connected"
      metricNote="Live availability"
    >
      <svg viewBox="0 0 140 48" className="h-12 w-full" aria-hidden>
        <defs>
          <linearGradient id="wf-inv-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 34 C18 30, 28 18, 42 22 S68 40, 82 24 S110 8, 140 14 L140 48 L0 48 Z"
          fill="url(#wf-inv-fill)"
        />
        <path
          d="M0 34 C18 30, 28 18, 42 22 S68 40, 82 24 S110 8, 140 14"
          fill="none"
          stroke="#ff6b00"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    </DashCard>
  );
}

function SearchCard() {
  const tone = tones[1];
  const rows = [
    { label: "Premier fixtures", meta: "Sport" },
    { label: "Arena hospitality", meta: "Premium" },
    { label: "Concert packages", meta: "Live" },
  ] as const;

  return (
    <DashCard
      title="Search Activity"
      tone={tone}
      badge="today"
      metricLabel="Total Searches"
      metricValue="Active"
      metricNote="Partner demand"
    >
      <ul className="space-y-1.5">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-2 rounded-md bg-emerald-50/60 px-2 py-1"
          >
            <span className="truncate text-[10px] font-medium text-brand-dark">
              {row.label}
            </span>
            <span className="font-mono text-[9px] text-emerald-700">
              {row.meta}
            </span>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function QuotesCard() {
  const tone = tones[2];
  const legend = [
    { label: "Travel", color: "#3b82f6" },
    { label: "Concierge", color: "#60a5fa" },
    { label: "Corporate", color: "#93c5fd" },
    { label: "Other", color: "#dbeafe" },
  ] as const;

  return (
    <DashCard
      title="Quotes Overview"
      tone={tone}
      badge="week"
      metricLabel="Quotes Created"
      metricValue="Built"
      metricNote="Commercial flow"
    >
      <div className="flex items-center gap-2.5">
        <div
          className="relative h-14 w-14 shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(#3b82f6 0 38%, #60a5fa 38% 62%, #93c5fd 62% 82%, #dbeafe 82% 100%)",
          }}
          aria-hidden
        >
          <span className="absolute inset-[28%] flex items-center justify-center rounded-full bg-white">
            <span className="font-mono text-[8px] font-bold text-blue-600">
              Live
            </span>
          </span>
        </div>
        <ul className="min-w-0 flex-1 space-y-1">
          {legend.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-1.5 text-[10px] text-brand-dark"
            >
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </DashCard>
  );
}

function BookingsCard() {
  const tone = tones[3];
  const bars = [
    { label: "Travel", width: "88%" },
    { label: "Concierge", width: "72%" },
    { label: "Corporate", width: "64%" },
    { label: "Hotels", width: "58%" },
  ] as const;

  return (
    <DashCard
      title="Bookings Overview"
      tone={tone}
      badge="week"
      metricLabel="Bookings Confirmed"
      metricValue="Tracked"
      metricNote="By channel"
    >
      <ul className="space-y-1.5">
        {bars.map((bar) => (
          <li key={bar.label}>
            <div className="mb-0.5 flex justify-between text-[9px] text-brand-gray-text">
              <span>{bar.label}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-violet-50">
              <div
                className="h-full rounded-full bg-violet-500"
                style={{ width: bar.width }}
              />
            </div>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function ConfirmCard() {
  const tone = tones[4];
  const statuses = [
    { label: "Confirmed", color: "#0d9488" },
    { label: "Pending", color: "#f59e0b" },
    { label: "On Hold", color: "#64748b" },
    { label: "Cancelled", color: "#ef4444" },
  ] as const;

  return (
    <DashCard
      title="Confirmation Status"
      tone={tone}
      badge="live"
      metricLabel="Confirmation Rate"
      metricValue="Secured"
      metricNote="Inventory held"
    >
      <ul className="space-y-1.5">
        {statuses.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between gap-2 text-[10px]"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-dark">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
            <CheckCircle2
              className="h-3 w-3 text-teal-600/70"
              strokeWidth={2}
            />
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function FulfilCard() {
  const tone = tones[5];
  return (
    <DashCard
      title="Fulfilment Overview"
      tone={tone}
      badge="live"
      metricLabel="Orders in Progress"
      metricValue="In flow"
      metricNote="Delivery connected"
    >
      <div>
        <div className="mb-1 flex items-center justify-between text-[10px]">
          <span className="text-brand-gray-text">Fulfilment progress</span>
          <span className="font-semibold text-red-500">On track</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-red-50">
          <div className="h-full w-[78%] rounded-full bg-red-500" />
        </div>
        <p className="mt-2 text-[10px] text-brand-gray-text">
          Completed today ·{" "}
          <span className="font-semibold text-brand-dark">Tracked</span>
        </p>
      </div>
    </DashCard>
  );
}
