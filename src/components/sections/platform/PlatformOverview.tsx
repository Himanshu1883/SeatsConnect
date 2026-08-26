"use client";

import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  ConciergeBell,
  Globe2,
  Layers,
  Lock,
  MoreHorizontal,
  Package,
  ShieldCheck,
  Ticket,
  TrendingUp,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const highlights: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Unified",
    text: "One platform for supply and distribution.",
    icon: ShieldCheck,
  },
  {
    title: "Controlled",
    text: "Access and rules you can trust.",
    icon: Lock,
  },
  {
    title: "Global",
    text: "Reach professional buyers worldwide.",
    icon: Globe2,
  },
  {
    title: "Real-time",
    text: "Live inventory, quotes and updates.",
    icon: Activity,
  },
];

const steps: {
  id: string;
  title: string;
  text: string;
}[] = [
  {
    id: "supply",
    title: "Supply",
    text: "Venues, promoters, hospitality providers and suppliers connect inventory.",
  },
  {
    id: "connect",
    title: "Connect",
    text: "SeatsConnect receives inventory through APIs, feeds and supported integrations.",
  },
  {
    id: "structure",
    title: "Structure",
    text: "Products, availability and distribution rules are organised within the platform.",
  },
  {
    id: "distribute",
    title: "Distribute",
    text: "Relevant inventory becomes available to approved B2B partners.",
  },
  {
    id: "book",
    title: "Book",
    text: "Partners search, quote and confirm customer requirements.",
  },
  {
    id: "fulfil",
    title: "Fulfil",
    text: "Order and delivery information flows through the connected workflow.",
  },
];

const summaryKpis = [
  { label: "Inventory Connected", value: "Live feed", delta: "Synced" },
  { label: "Active Partners", value: "Approved", delta: "Network" },
  { label: "Bookings (This Week)", value: "Tracked", delta: "In flow" },
  { label: "Fulfilment Rate", value: "Connected", delta: "End-to-end" },
];

export function PlatformOverview() {
  return (
    <HomeFrame
      id="overview"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        {/* Header */}
        <Reveal>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-end lg:gap-8">
            <div className="max-w-xl">
              <HomeKicker>Platform Overview</HomeKicker>
              <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.35rem]">
                One Platform{" "}
                <span className="text-brand-orange">Connecting Both Sides.</span>
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                From inventory connection to fulfilment, SeatsConnect unifies
                supply and professional distribution through one intelligent
                infrastructure layer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-orange-100/90 bg-white p-3 shadow-[0_6px_18px_rgba(40,30,20,0.04)] sm:p-3.5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <item.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </span>
                  <p className="mt-2.5 font-tech text-[13px] font-bold text-brand-dark">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-brand-gray-text">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Six-step flow */}
        <Reveal delay={80}>
          <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
            <div className="platform-overview-track flex gap-3 overflow-x-auto pb-2 snap-x snap-mandatory lg:gap-3.5 xl:grid xl:grid-cols-6 xl:overflow-visible xl:pb-0">
              {steps.map((step, i) => (
                <div
                  key={step.id}
                  className="relative flex w-[min(78vw,17.5rem)] shrink-0 snap-start flex-col sm:w-[15.5rem] xl:w-auto"
                >
                  {i < steps.length - 1 ? (
                    <ArrowRight
                      className="pointer-events-none absolute -right-2 top-[1.15rem] z-[1] hidden h-3.5 w-3.5 text-brand-gray-text/35 xl:block"
                      strokeWidth={2}
                      aria-hidden
                    />
                  ) : null}

                  <div className="mb-3 flex items-start gap-2.5 pr-2">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange font-mono text-[11px] font-bold text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <p className="font-tech text-[14px] font-bold leading-tight text-brand-dark">
                        {step.title}
                      </p>
                      <p className="mt-1 text-[11px] leading-snug text-brand-gray-text line-clamp-3">
                        {step.text}
                      </p>
                    </div>
                  </div>

                  <StepCard stepId={step.id} />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom summary */}
        <Reveal delay={140}>
          <div className="flex flex-col gap-5 rounded-2xl border border-orange-100/90 bg-[#faf7f3]/80 px-4 py-4 sm:px-5 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:rounded-full lg:px-6 lg:py-3.5">
            <div className="flex min-w-0 items-start gap-3 sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_20px_rgba(255,107,0,0.28)]">
                <Layers className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[14px] font-bold leading-snug text-brand-dark sm:text-[15px]">
                  One connected platform. End-to-end visibility.
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                  Built for scale, security and seamless B2B distribution.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0 lg:shrink-0">
              {summaryKpis.map((kpi, i) => (
                <div
                  key={kpi.label}
                  className="flex items-start gap-3 px-1 sm:px-3 lg:px-4"
                >
                  {i > 0 ? (
                    <span
                      className="mr-1 hidden h-10 w-px shrink-0 bg-orange-100 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <div>
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-gray-text">
                      {kpi.label}
                    </p>
                    <p className="mt-0.5 font-tech text-[15px] font-bold text-brand-dark">
                      {kpi.value}
                    </p>
                    <p className="mt-0.5 inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                      <TrendingUp className="h-3 w-3" strokeWidth={2} />
                      {kpi.delta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function CardShell({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full min-h-[17.5rem] flex-col rounded-2xl border border-orange-100/90 bg-white p-3 shadow-[0_10px_28px_rgba(40,30,20,0.06)] sm:min-h-[18.5rem] sm:p-3.5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <p className="truncate font-tech text-[12px] font-bold text-brand-dark">
            {title}
          </p>
          {badge}
        </div>
        <MoreHorizontal
          className="h-3.5 w-3.5 shrink-0 text-brand-gray-text/50"
          strokeWidth={2}
          aria-hidden
        />
      </div>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

function StepCard({ stepId }: { stepId: string }) {
  switch (stepId) {
    case "supply":
      return <SupplyCard />;
    case "connect":
      return <ConnectCard />;
    case "structure":
      return <StructureCard />;
    case "distribute":
      return <DistributeCard />;
    case "book":
      return <BookCard />;
    case "fulfil":
      return <FulfilCard />;
    default:
      return null;
  }
}

function SupplyCard() {
  const sources = [
    { name: "Stadium Arena", meta: "Venue · Live feed", icon: Building2 },
    { name: "Event Promoters", meta: "Allocations · Synced", icon: Ticket },
    { name: "Hospitality Suites", meta: "Packages · Active", icon: ConciergeBell },
    { name: "Premium Suppliers", meta: "Approved · Connected", icon: Package },
  ] as const;

  return (
    <CardShell title="Inventory Sources">
      <ul className="space-y-2">
        {sources.map((source) => (
          <li key={source.name} className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
              <source.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate font-tech text-[11px] font-semibold text-brand-dark">
                {source.name}
              </span>
              <span className="block text-[10px] text-brand-gray-text">
                {source.meta}
              </span>
            </span>
            <CheckCircle2
              className="h-3.5 w-3.5 shrink-0 text-emerald-500"
              strokeWidth={2}
            />
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between border-t border-orange-50 pt-2.5">
        <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Connected
        </span>
        <span className="flex -space-x-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-brand-orange/15 text-[8px] font-bold text-brand-orange"
            >
              <Users className="h-2.5 w-2.5" strokeWidth={2} />
            </span>
          ))}
        </span>
      </div>
    </CardShell>
  );
}

function ConnectCard() {
  const rows = [
    { label: "API Connections", value: "Live" },
    { label: "Feed Integrations", value: "Synced" },
    { label: "Manual Uploads", value: "Supported" },
  ] as const;

  return (
    <CardShell
      title="Connection Overview"
      badge={
        <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
          Live
        </span>
      }
    >
      <div>
        <p className="font-mono text-[9px] font-semibold uppercase tracking-wide text-brand-gray-text">
          Active Connections
        </p>
        <p className="mt-0.5 font-tech text-[1.35rem] font-bold tracking-tight text-brand-dark">
          Always on
        </p>
      </div>

      <div className="relative mt-2 h-14 overflow-hidden rounded-lg bg-gradient-to-b from-brand-orange/5 to-transparent px-1 pt-2">
        <svg
          viewBox="0 0 120 40"
          className="h-full w-full overflow-visible"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="overview-line-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ff6b00" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#ff6b00" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0 30 C14 26, 22 18, 34 20 S52 32, 64 18 S86 6, 98 14 S112 24, 120 8 L120 40 L0 40 Z"
            fill="url(#overview-line-fill)"
          />
          <path
            d="M0 30 C14 26, 22 18, 34 20 S52 32, 64 18 S86 6, 98 14 S112 24, 120 8"
            fill="none"
            stroke="#ff6b00"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <circle cx="120" cy="8" r="2.6" fill="#ff6b00" />
        </svg>
      </div>

      <ul className="mt-auto space-y-1.5 border-t border-orange-50 pt-2.5">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-2 text-[11px]"
          >
            <span className="text-brand-gray-text">{row.label}</span>
            <span className="font-tech font-semibold text-brand-dark">
              {row.value}
            </span>
          </li>
        ))}
      </ul>
    </CardShell>
  );
}

function StructureCard() {
  const legend = [
    { label: "Tickets", color: "bg-brand-orange" },
    { label: "Hospitality", color: "bg-[#ffb070]" },
    { label: "Parking", color: "bg-[#7eb8d8]" },
    { label: "Experiences", color: "bg-[#5ec4b0]" },
  ] as const;

  return (
    <CardShell title="Inventory Structure">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Products", value: "Mapped" },
          { label: "Availability", value: "Live" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-orange-50 bg-[#faf7f3] px-2 py-1.5"
          >
            <p className="font-mono text-[8px] uppercase tracking-wide text-brand-gray-text">
              {stat.label}
            </p>
            <p className="font-tech text-[13px] font-bold text-brand-dark">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex flex-1 items-center gap-3">
        <div
          className="relative h-20 w-20 shrink-0 rounded-full"
          style={{
            background:
              "conic-gradient(#ff6b00 0 42%, #ffb070 42% 68%, #7eb8d8 68% 84%, #5ec4b0 84% 100%)",
          }}
          aria-hidden
        >
          <span className="absolute inset-[22%] rounded-full bg-white" />
        </div>
        <ul className="min-w-0 flex-1 space-y-1.5">
          {legend.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-2 text-[11px] text-brand-dark"
            >
              <span className={cn("h-2 w-2 rounded-full", item.color)} />
              <span className="font-tech font-semibold">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </CardShell>
  );
}

function DistributeCard() {
  const channels = [
    { name: "Travel Partners", width: "86%" },
    { name: "Concierge", width: "72%" },
    { name: "Corporate", width: "68%" },
    { name: "Hospitality", width: "63%" },
  ] as const;

  return (
    <CardShell title="Distribution Channels">
      <div className="grid grid-cols-2 gap-2">
        {[
          { label: "Partners", value: "Approved" },
          { label: "Active", value: "Live" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg border border-orange-50 bg-[#faf7f3] px-2 py-1.5"
          >
            <p className="font-mono text-[8px] uppercase tracking-wide text-brand-gray-text">
              {stat.label}
            </p>
            <p className="font-tech text-[13px] font-bold text-brand-dark">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-3 flex-1 space-y-2.5">
        {channels.map((ch) => (
          <li key={ch.name}>
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="text-[11px] font-medium text-brand-dark">
                {ch.name}
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-orange-50">
              <div
                className="h-full rounded-full bg-brand-orange"
                style={{ width: ch.width }}
              />
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-brand-orange">
        Controlled partner access
        <ArrowRight className="h-3 w-3" strokeWidth={2} />
      </p>
    </CardShell>
  );
}

function BookCard() {
  const metrics = [
    { label: "Searches", value: "Active" },
    { label: "Quotes", value: "Built" },
    { label: "Bookings", value: "Confirmed" },
    { label: "Workflow", value: "Connected" },
  ] as const;

  const bookings = [
    { name: "Travel Partner", status: "Confirmed" },
    { name: "Concierge Desk", status: "Confirmed" },
    { name: "Corporate Buyer", status: "Confirmed" },
  ] as const;

  return (
    <CardShell title="Partner Activity">
      <div className="grid grid-cols-2 gap-1.5">
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-lg border border-orange-50 bg-[#faf7f3] px-2 py-1.5"
          >
            <p className="font-mono text-[8px] uppercase tracking-wide text-brand-gray-text">
              {m.label}
            </p>
            <p className="font-tech text-[12px] font-bold text-brand-dark">
              {m.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-3 flex-1">
        <p className="mb-1.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
          Recent Bookings
        </p>
        <ul className="space-y-1.5">
          {bookings.map((b) => (
            <li
              key={b.name}
              className="flex items-center justify-between gap-2 rounded-lg border border-orange-50 px-2 py-1.5"
            >
              <span className="truncate text-[11px] font-medium text-brand-dark">
                {b.name}
              </span>
              <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
                {b.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </CardShell>
  );
}

function FulfilCard() {
  const boxes = [
    { label: "Orders in Progress", value: "Tracked" },
    { label: "Completed Today", value: "Delivered" },
  ] as const;

  const statuses = [
    { label: "Confirmed", tone: "ok" },
    { label: "In Progress", tone: "warn" },
    { label: "Delivered", tone: "ok" },
    { label: "Managed", tone: "neutral" },
  ] as const;

  return (
    <CardShell title="Fulfilment Overview">
      <div className="grid grid-cols-2 gap-1.5">
        {boxes.map((box) => (
          <div
            key={box.label}
            className="rounded-lg border border-brand-orange/20 bg-brand-orange/5 px-2 py-2"
          >
            <p className="font-mono text-[8px] uppercase tracking-wide text-brand-gray-text">
              {box.label}
            </p>
            <p className="mt-0.5 font-tech text-[13px] font-bold text-brand-dark">
              {box.value}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-3 flex-1 space-y-1.5">
        {statuses.map((s) => (
          <li
            key={s.label}
            className="flex items-center justify-between gap-2 text-[11px]"
          >
            <span className="inline-flex items-center gap-1.5 text-brand-dark">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  s.tone === "ok" && "bg-emerald-500",
                  s.tone === "warn" && "bg-brand-orange",
                  s.tone === "neutral" && "bg-brand-gray-text/40"
                )}
              />
              {s.label}
            </span>
            <CheckCircle2
              className={cn(
                "h-3 w-3",
                s.tone === "ok" ? "text-emerald-500" : "text-brand-gray-text/40"
              )}
              strokeWidth={2}
            />
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-between border-t border-orange-50 pt-2.5">
        <span className="text-[10px] text-brand-gray-text">
          Avg. fulfilment visibility
        </span>
        <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
          <TrendingUp className="h-3 w-3" strokeWidth={2} />
          Connected
        </span>
      </div>
    </CardShell>
  );
}
