"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ConciergeBell,
  Hotel,
  Layers,
  Link2,
  Package,
  Plane,
  Puzzle,
  ShieldCheck,
  Ticket,
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
    title: "One connection",
    text: "Reach multiple approved channels without rebuilding every time.",
    icon: Link2,
  },
  {
    title: "Controlled access",
    text: "Inventory stays under professional B2B distribution rules.",
    icon: ShieldCheck,
  },
  {
    title: "Scalable layer",
    text: "Expand distribution through one infrastructure connection.",
    icon: Puzzle,
  },
];

const journey: {
  step: string;
  title: string;
  text: string;
  points: string[];
  dash: "inventory" | "infrastructure" | "channels";
}[] = [
  {
    step: "01",
    title: "Your inventory",
    text: "Venues, promoters and suppliers connect once.",
    points: ["Tickets", "Hospitality", "Allocations"],
    dash: "inventory",
  },
  {
    step: "02",
    title: "One infrastructure",
    text: "SeatsConnect organises supply for controlled distribution.",
    points: ["Rules", "Markets", "Access"],
    dash: "infrastructure",
  },
  {
    step: "03",
    title: "Approved channels",
    text: "Reach professional buyers already serving customers.",
    points: ["Travel", "Concierge", "Corporate", "Hotels"],
    dash: "channels",
  },
];

const channels: { label: string; icon: LucideIcon }[] = [
  { label: "Travel", icon: Plane },
  { label: "Concierge", icon: ConciergeBell },
  { label: "Corporate", icon: Building2 },
  { label: "Hotels", icon: Hotel },
];

export function SuppliersExpand() {
  return (
    <HomeFrame
      id="expand"
      variant="plain"
      className="!py-8 sm:!py-10 lg:!flex lg:!h-[calc(100dvh-var(--site-header-height))] lg:!max-h-[calc(100dvh-var(--site-header-height))] lg:!flex-col lg:!justify-center lg:!overflow-hidden lg:!py-7 xl:!py-8"
    >
      <div className="flex w-full min-h-0 flex-1 flex-col justify-center gap-5 lg:gap-6">
        <Reveal>
          <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
            <div className="max-w-xl">
              <HomeKicker>Supply Advantage</HomeKicker>
              <h2 className="mt-3 font-tech text-[1.95rem] font-bold leading-[1.06] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.55rem]">
                Expand Reach Without Building{" "}
                <span className="text-brand-orange">Multiple Connections.</span>
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-brand-gray-text sm:text-base lg:text-[17px]">
                Connecting separately with every travel company, concierge
                provider, corporate agency or distribution platform creates
                additional complexity. SeatsConnect provides one infrastructure
                layer between your inventory and approved professional channels.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-orange-100/90 bg-white p-3.5 shadow-[0_6px_16px_rgba(40,30,20,0.04)] sm:p-4"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <item.icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <p className="mt-2.5 font-tech text-[14px] font-bold text-brand-dark sm:text-[15px]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid min-h-0 gap-3 sm:grid-cols-3 lg:gap-4">
            {journey.map((card, i) => (
              <article
                key={card.step}
                className="group relative flex min-h-0 flex-col overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_10px_28px_rgba(40,30,20,0.05)]"
              >
                {i < journey.length - 1 ? (
                  <ArrowRight
                    className="pointer-events-none absolute -right-2 top-[38%] z-[2] hidden h-5 w-5 text-brand-orange/50 sm:block lg:-right-2.5"
                    strokeWidth={2.2}
                    aria-hidden
                  />
                ) : null}

                <div className="relative bg-[#f3efe9]/80 p-2 sm:p-2.5">
                  <span className="absolute left-3 top-3 z-[1] rounded-full bg-white px-2.5 py-1 font-mono text-[11px] font-bold text-brand-orange shadow-sm">
                    {card.step}
                  </span>
                  <JourneyDash type={card.dash} />
                </div>

                <div className="flex flex-1 flex-col px-3.5 py-3.5 sm:px-4 sm:py-4">
                  <h3 className="font-tech text-lg font-bold text-brand-dark sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-snug text-brand-gray-text sm:text-[14px]">
                    {card.text}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {card.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-orange-100 bg-[#faf7f3] px-2.5 py-1 text-[11px] font-medium text-brand-dark sm:text-[12px]"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex flex-col gap-4 rounded-2xl border border-orange-100/90 bg-[#faf7f3]/85 px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:gap-6 lg:px-6 lg:py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
                <Layers className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                  Connect once. Expand intelligently.
                </p>
                <p className="mt-0.5 text-[13px] text-brand-gray-text">
                  One infrastructure layer for approved professional distribution.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {channels.map((ch) => (
                <span
                  key={ch.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-orange-100 bg-white px-3 py-1.5 text-[12px] font-semibold text-brand-dark"
                >
                  <ch.icon
                    className="h-3.5 w-3.5 text-brand-orange"
                    strokeWidth={1.9}
                  />
                  {ch.label}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function ShotShell({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-[0_6px_16px_rgba(40,30,20,0.06)]">
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 bg-[#f7f4f0] px-2.5 py-1.5">
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8b4a0]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0d9a8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8d4b8]" />
          </span>
          <span className="truncate font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-gray-text">
            {title}
          </span>
        </div>
        <span className="inline-flex items-center gap-1 font-mono text-[8px] font-semibold text-emerald-700">
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>
      <div className="h-[9.5rem] p-2 sm:h-[10.25rem] sm:p-2.5">{children}</div>
    </div>
  );
}

function JourneyDash({
  type,
}: {
  type: "inventory" | "infrastructure" | "channels";
}) {
  if (type === "inventory") return <InventoryDash />;
  if (type === "infrastructure") return <InfrastructureDash />;
  return <ChannelsDash />;
}

function InventoryDash() {
  const rows = [
    { name: "Stadium tickets", meta: "Venue feed", icon: Ticket },
    { name: "Hospitality suites", meta: "Package sync", icon: Package },
    { name: "Promoter allocation", meta: "Event hold", icon: Building2 },
  ] as const;

  return (
    <ShotShell title="supply · inventory sources">
      <div className="flex h-full flex-col">
        <div className="mb-2 grid grid-cols-3 gap-1.5">
          {[
            { label: "Sources", value: "Linked" },
            { label: "Sync", value: "Live" },
            { label: "Control", value: "On" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-md border border-orange-50 bg-[#faf7f3] px-1.5 py-1"
            >
              <p className="font-mono text-[7px] uppercase tracking-wide text-brand-gray-text">
                {stat.label}
              </p>
              <p className="font-tech text-[10px] font-bold text-brand-dark">
                {stat.value}
              </p>
            </div>
          ))}
        </div>
        <ul className="min-h-0 flex-1 space-y-1 overflow-hidden">
          {rows.map((row) => (
            <li
              key={row.name}
              className="flex items-center gap-1.5 rounded-md border border-orange-50 px-1.5 py-1"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-orange/10 text-brand-orange">
                <row.icon className="h-3 w-3" strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[10px] font-semibold text-brand-dark">
                  {row.name}
                </span>
                <span className="block truncate text-[8px] text-brand-gray-text">
                  {row.meta}
                </span>
              </span>
              <CheckCircle2
                className="h-3 w-3 shrink-0 text-emerald-500"
                strokeWidth={2}
              />
            </li>
          ))}
        </ul>
      </div>
    </ShotShell>
  );
}

function InfrastructureDash() {
  return (
    <ShotShell title="seatsconnect · control layer">
      <div className="flex h-full flex-col">
        <div className="mb-2 flex items-center justify-between rounded-md border border-brand-orange/20 bg-brand-orange/5 px-2 py-1.5">
          <div className="flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.9} />
            <span className="font-tech text-[10px] font-bold text-brand-dark">
              Distribution rules
            </span>
          </div>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] font-semibold text-emerald-700">
            Active
          </span>
        </div>
        <ul className="min-h-0 flex-1 space-y-1">
          {[
            { label: "Partners", value: "Approved only" },
            { label: "Markets", value: "Controlled" },
            { label: "Allocations", value: "Structured" },
            { label: "Commercial", value: "Mapped" },
          ].map((row) => (
            <li
              key={row.label}
              className="flex items-center justify-between rounded-md border border-orange-50 px-2 py-1"
            >
              <span className="text-[10px] font-medium text-brand-dark">
                {row.label}
              </span>
              <span className="font-mono text-[8px] font-semibold text-brand-orange">
                {row.value}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-1.5 flex items-center gap-1 border-t border-orange-50 pt-1.5">
          {["Rules", "Access", "Fulfil"].map((chip, i) => (
            <span
              key={chip}
              className={cn(
                "rounded-full px-1.5 py-0.5 font-mono text-[7px] font-semibold",
                i === 0
                  ? "bg-brand-orange text-white"
                  : "bg-orange-50 text-brand-gray-text"
              )}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </ShotShell>
  );
}

function ChannelsDash() {
  const rows = [
    { label: "Travel partners", icon: Plane, status: "Live" },
    { label: "Concierge desks", icon: ConciergeBell, status: "Live" },
    { label: "Corporate buyers", icon: Building2, status: "Live" },
    { label: "Hotel teams", icon: Hotel, status: "Live" },
  ] as const;

  return (
    <ShotShell title="network · approved channels">
      <div className="flex h-full flex-col">
        <div className="mb-2 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 font-mono text-[8px] font-semibold text-brand-gray-text">
            <Users className="h-3 w-3 text-brand-orange" strokeWidth={1.9} />
            Partner access
          </span>
          <span className="font-mono text-[8px] font-semibold text-emerald-700">
            Controlled
          </span>
        </div>
        <ul className="min-h-0 flex-1 space-y-1">
          {rows.map((row) => (
            <li
              key={row.label}
              className="flex items-center gap-1.5 rounded-md border border-orange-50 px-1.5 py-1"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-brand-orange/10 text-brand-orange">
                <row.icon className="h-3 w-3" strokeWidth={1.9} />
              </span>
              <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-brand-dark">
                {row.label}
              </span>
              <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] font-semibold uppercase text-emerald-700">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </ShotShell>
  );
}
