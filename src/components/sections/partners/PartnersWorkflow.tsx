"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowRightLeft,
  BadgeCheck,
  BookOpen,
  CheckCircle2,
  ClipboardList,
  Search,
  Ticket,
  Workflow,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const steps: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Search",
    text: "Find relevant events and available products.",
    icon: Search,
  },
  {
    title: "Compare",
    text: "Review available options side by side.",
    icon: ArrowRightLeft,
  },
  {
    title: "Quote",
    text: "Build a professional customer proposal.",
    icon: BookOpen,
  },
  {
    title: "Book",
    text: "Confirm suitable inventory.",
    icon: Ticket,
  },
  {
    title: "Manage",
    text: "Track order information.",
    icon: ClipboardList,
  },
  {
    title: "Fulfil",
    text: "Manage delivery through to completion.",
    icon: BadgeCheck,
  },
];

const summaryStats: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Inventory",
    value: "Connected",
    note: "Live search",
    icon: Search,
  },
  {
    label: "Quotes",
    value: "Built",
    note: "Customer-ready",
    icon: BookOpen,
  },
  {
    label: "Bookings",
    value: "Tracked",
    note: "In workflow",
    icon: Ticket,
  },
  {
    label: "Fulfilment",
    value: "Connected",
    note: "End-to-end",
    icon: BadgeCheck,
  },
];

const CYCLE_MS = 3200;

export function PartnersWorkflow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  return (
    <HomeFrame
      id="workflow"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-7 lg:gap-9">
        <Reveal>
          <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8">
            <div className="max-w-xl">
              <HomeKicker>Partner Workflow</HomeKicker>
              <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
                Search More.{" "}
                <span className="text-brand-orange">Manage Less.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                Instead of contacting multiple suppliers for every customer
                request, approved partners can search connected inventory
                through SeatsConnect and move through one professional workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 rounded-2xl border border-orange-100/90 bg-white p-2.5 shadow-[0_8px_24px_rgba(40,30,20,0.05)] sm:grid-cols-4 sm:gap-0 sm:p-2 lg:rounded-full lg:px-2 lg:py-2">
              {summaryStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="relative flex items-start gap-2 rounded-xl px-2 py-2 sm:rounded-none lg:items-center lg:px-2.5"
                >
                  {i > 0 ? (
                    <span
                      className="absolute left-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-orange-100 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                    <stat.icon className="h-3.5 w-3.5" strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
                      {stat.label}
                    </p>
                    <p className="font-tech text-[13px] font-bold text-brand-dark">
                      {stat.value}
                    </p>
                    <p className="text-[9px] text-brand-orange">{stat.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Connected horizontal flow — no numbers */}
        <Reveal delay={50}>
          <div
            className="relative overflow-hidden rounded-2xl border border-orange-100/90 bg-white px-3 py-5 shadow-[0_10px_28px_rgba(40,30,20,0.05)] sm:px-5 sm:py-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute left-[8%] right-[8%] top-[2.85rem] hidden h-px bg-gradient-to-r from-transparent via-brand-orange/35 to-transparent xl:block"
            />

            <div className="flex gap-2 overflow-x-auto pb-1 snap-x snap-mandatory xl:grid xl:grid-cols-6 xl:gap-3 xl:overflow-visible xl:pb-0">
              {steps.map((step, i) => {
                const isActive = i === active;
                const isDone = i < active;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className="relative flex w-[10.5rem] shrink-0 snap-start flex-col items-center px-1 text-center sm:w-[11.5rem] xl:w-auto"
                  >
                    {i < steps.length - 1 ? (
                      <ArrowRight
                        className={cn(
                          "pointer-events-none absolute -right-2 top-[1.35rem] z-[1] hidden h-4 w-4 xl:block",
                          isDone || isActive
                            ? "text-brand-orange"
                            : "text-brand-orange/30"
                        )}
                        strokeWidth={2.2}
                        aria-hidden
                      />
                    ) : null}

                    <span
                      className={cn(
                        "relative z-[1] flex h-11 w-11 items-center justify-center rounded-full border-2 bg-white transition-all duration-400",
                        isActive
                          ? "border-brand-orange text-brand-orange shadow-[0_0_0_6px_rgba(255,107,0,0.14)]"
                          : isDone
                            ? "border-brand-orange/50 text-brand-orange"
                            : "border-orange-100 text-brand-orange/55"
                      )}
                    >
                      {isActive ? (
                        <span className="absolute inset-0 animate-ping rounded-full bg-brand-orange/20" />
                      ) : null}
                      <step.icon
                        className="relative h-[1.1rem] w-[1.1rem]"
                        strokeWidth={2}
                      />
                    </span>

                    <p
                      className={cn(
                        "mt-2.5 font-tech text-[13px] font-bold tracking-tight transition-colors",
                        isActive ? "text-brand-orange" : "text-brand-dark"
                      )}
                    >
                      {step.title}
                    </p>
                    <p className="mt-1 line-clamp-2 text-[10px] leading-snug text-brand-gray-text">
                      {step.text}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Six connected consoles — consistent orange theme */}
        <Reveal delay={90}>
          <div
            className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <SearchConsole active={active === 0} onSelect={() => setActive(0)} />
            <CompareConsole
              active={active === 1}
              onSelect={() => setActive(1)}
            />
            <QuoteConsole active={active === 2} onSelect={() => setActive(2)} />
            <BookConsole active={active === 3} onSelect={() => setActive(3)} />
            <ManageConsole
              active={active === 4}
              onSelect={() => setActive(4)}
            />
            <FulfilConsole
              active={active === 5}
              onSelect={() => setActive(5)}
            />
          </div>
        </Reveal>

        <Reveal delay={130}>
          <div className="flex flex-col gap-4 rounded-2xl border border-orange-100/90 bg-white/80 px-4 py-3.5 sm:px-5 lg:flex-row lg:items-center lg:justify-between lg:rounded-full lg:gap-6 lg:px-6 lg:py-3.5">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.28)]">
                <Workflow className="h-5 w-5" strokeWidth={1.9} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[15px] font-bold text-brand-dark sm:text-base">
                  Search → Quote → Book → Fulfil
                </p>
                <p className="mt-0.5 text-[13px] text-brand-gray-text">
                  One professional workflow for customer-ready offers.
                </p>
              </div>
            </div>
            <p className="text-[12px] leading-relaxed text-brand-gray-text lg:max-w-xs lg:text-right">
              Capabilities depend on account access and onboarding requirements.
            </p>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function DashCard({
  title,
  badge,
  metricLabel,
  metricValue,
  metricNote,
  active,
  onSelect,
  children,
}: {
  title: string;
  badge?: "live" | "ready";
  metricLabel: string;
  metricValue: string;
  metricNote?: string;
  active?: boolean;
  onSelect?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex h-full min-h-[13.5rem] w-full flex-col overflow-hidden rounded-xl border bg-white text-left shadow-[0_8px_20px_rgba(40,30,20,0.04)] transition-all duration-300",
        active
          ? "border-brand-orange/50 shadow-[0_12px_28px_rgba(255,107,0,0.14)] ring-2 ring-brand-orange/15"
          : "border-orange-100/90 hover:border-brand-orange/30"
      )}
    >
      <span
        className={cn(
          "h-1 w-full transition-colors",
          active ? "bg-brand-orange" : "bg-brand-orange/35"
        )}
        aria-hidden
      />
      <div className="flex flex-1 flex-col p-3">
        <div className="mb-2 flex items-center justify-between gap-2">
          <p className="font-tech text-[12px] font-bold text-brand-dark">
            {title}
          </p>
          {badge === "live" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
              <span
                className={cn(
                  "h-1.5 w-1.5 rounded-full bg-emerald-500",
                  active && "animate-ping"
                )}
              />
              Live
            </span>
          ) : badge === "ready" ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/10 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-orange">
              Ready
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
          <p className="mt-0.5 text-[10px] font-semibold text-brand-orange">
            {metricNote}
          </p>
        ) : null}

        <div className="mt-2 min-h-0 flex-1">{children}</div>

        <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-brand-orange">
          View step
          <ArrowRight className="h-3 w-3" strokeWidth={2.25} />
        </span>
      </div>
    </button>
  );
}

function SearchConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const rows = [
    { label: "Premier fixtures", meta: "Sport" },
    { label: "Arena hospitality", meta: "Premium" },
    { label: "Concert packages", meta: "Live" },
  ] as const;

  return (
    <DashCard
      title="Search"
      badge="live"
      metricLabel="Connected inventory"
      metricValue="Available"
      metricNote="Approved inventory search"
      active={active}
      onSelect={onSelect}
    >
      <div className="mb-2 flex items-center gap-1.5 rounded-md border border-orange-100 bg-[#faf7f3] px-2 py-1.5">
        <Search className="h-3 w-3 shrink-0 text-brand-orange" strokeWidth={2} />
        <span className="truncate font-mono text-[9px] text-brand-gray-text">
          Search events, products…
        </span>
      </div>
      <ul className="space-y-1.5">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex items-center justify-between gap-2 rounded-md bg-brand-orange/5 px-2 py-1"
          >
            <span className="truncate text-[10px] font-medium text-brand-dark">
              {row.label}
            </span>
            <span className="font-mono text-[9px] text-brand-orange">
              {row.meta}
            </span>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function CompareConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const options = [
    { label: "Category A", width: "92%" },
    { label: "Category B", width: "78%" },
    { label: "Category C", width: "64%" },
  ] as const;

  return (
    <DashCard
      title="Compare"
      badge="ready"
      metricLabel="Options reviewed"
      metricValue="Side by side"
      metricNote="Structured review"
      active={active}
      onSelect={onSelect}
    >
      <ul className="space-y-2">
        {options.map((opt, i) => (
          <li key={opt.label}>
            <div className="mb-0.5 flex justify-between text-[9px]">
              <span className="font-medium text-brand-dark">{opt.label}</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-orange-50">
              <div
                className={cn(
                  "h-full rounded-full",
                  i === 0 ? "bg-brand-orange" : "bg-brand-orange/45"
                )}
                style={{ width: opt.width }}
              />
            </div>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function QuoteConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const lines = [
    { label: "Event package", value: "Included" },
    { label: "Hospitality tier", value: "Selected" },
    { label: "Customer total", value: "Ready" },
  ] as const;

  return (
    <DashCard
      title="Quote"
      badge="ready"
      metricLabel="Customer proposal"
      metricValue="Built"
      metricNote="Professional format"
      active={active}
      onSelect={onSelect}
    >
      <div className="rounded-md border border-orange-100 bg-[#faf7f3]/80 p-2">
        <p className="font-mono text-[8px] font-semibold uppercase tracking-wide text-brand-orange">
          Customer quote
        </p>
        <ul className="mt-1.5 space-y-1">
          {lines.map((line) => (
            <li
              key={line.label}
              className="flex items-center justify-between text-[10px]"
            >
              <span className="text-brand-dark">{line.label}</span>
              <span className="font-semibold text-brand-orange">
                {line.value}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-2 rounded-md bg-brand-orange px-2 py-1 text-center font-tech text-[10px] font-bold text-white">
          Send Quote
        </div>
      </div>
    </DashCard>
  );
}

function BookConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const bars = [
    { label: "Travel", width: "88%" },
    { label: "Concierge", width: "72%" },
    { label: "Corporate", width: "64%" },
  ] as const;

  return (
    <DashCard
      title="Book"
      badge="live"
      metricLabel="Booking status"
      metricValue="Confirmed"
      metricNote="Inventory secured"
      active={active}
      onSelect={onSelect}
    >
      <ul className="space-y-1.5">
        {bars.map((bar) => (
          <li key={bar.label}>
            <div className="mb-0.5 flex justify-between text-[9px] text-brand-gray-text">
              <span>{bar.label}</span>
              <CheckCircle2
                className="h-3 w-3 text-brand-orange"
                strokeWidth={2}
              />
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-orange-50">
              <div
                className="h-full rounded-full bg-brand-orange"
                style={{ width: bar.width }}
              />
            </div>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function ManageConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const orders = [
    { ref: "Order · Active", status: "Updated" },
    { ref: "Order · Tracked", status: "Synced" },
    { ref: "Order · Connected", status: "Open" },
  ] as const;

  return (
    <DashCard
      title="Manage"
      badge="live"
      metricLabel="Order tracking"
      metricValue="In progress"
      metricNote="Connected status"
      active={active}
      onSelect={onSelect}
    >
      <ul className="space-y-1.5">
        {orders.map((order) => (
          <li
            key={order.ref}
            className="flex items-center justify-between rounded-md border border-orange-50 px-2 py-1"
          >
            <span className="font-mono text-[9px] font-medium text-brand-dark">
              {order.ref}
            </span>
            <span className="rounded-full bg-brand-orange/10 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-brand-orange">
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </DashCard>
  );
}

function FulfilConsole({
  active,
  onSelect,
}: {
  active?: boolean;
  onSelect?: () => void;
}) {
  const stages = [
    { label: "Confirmed", done: true },
    { label: "Prepared", done: true },
    { label: "Delivered", done: false },
  ] as const;

  return (
    <DashCard
      title="Fulfil"
      badge="live"
      metricLabel="Delivery flow"
      metricValue="Connected"
      metricNote="Through to completion"
      active={active}
      onSelect={onSelect}
    >
      <div>
        <div className="mb-1 flex items-center justify-between text-[10px]">
          <span className="text-brand-gray-text">Fulfilment progress</span>
          <span className="font-semibold text-brand-orange">On track</span>
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-orange-50">
          <div className="h-full w-[72%] rounded-full bg-brand-orange" />
        </div>
        <ul className="mt-2 space-y-1">
          {stages.map((stage) => (
            <li
              key={stage.label}
              className="flex items-center gap-1.5 text-[10px] text-brand-dark"
            >
              <CheckCircle2
                className={cn(
                  "h-3 w-3",
                  stage.done ? "text-emerald-500" : "text-brand-orange/40"
                )}
                strokeWidth={2}
              />
              {stage.label}
            </li>
          ))}
        </ul>
      </div>
    </DashCard>
  );
}
