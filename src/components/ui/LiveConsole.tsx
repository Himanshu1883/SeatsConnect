"use client";

import { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

export type ConsoleLine = {
  text: string;
  type?: "default" | "accent" | "muted" | "arrow" | "success";
};

type LiveStatus = {
  label: string;
  value: string;
};

type LogRow = {
  id: string;
  text: string;
};

type LiveConsoleProps = {
  title?: string;
  lines?: ConsoleLine[];
  feed?: string[];
  pipeline?: string[];
  statuses?: LiveStatus[];
  className?: string;
  live?: boolean;
  animate?: boolean;
};

const lineColors: Record<NonNullable<ConsoleLine["type"]>, string> = {
  default: "text-brand-dark",
  accent: "text-brand-orange",
  muted: "text-brand-gray-text",
  arrow: "text-brand-orange/80",
  success: "text-emerald-700",
};

const defaultFeed = [
  "SUPPLY sync  venue hospitality allocation",
  "ROUTE apply  approved partner · travel",
  "SEARCH query concierge · live event",
  "QUOTE build  branded proposal",
  "BOOK confirm connected workflow",
  "FULFIL pass  order + delivery status",
  "API GET      /events",
  "API GET      /availability",
  "API POST     /quotes",
  "API POST     /bookings",
];

function stamp() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

export function LiveConsole({
  title = "seatsconnect.ops",
  lines = [],
  feed = defaultFeed,
  pipeline = ["SUPPLY", "ROUTE", "SEARCH", "QUOTE", "BOOK", "FULFIL"],
  statuses = [
    { label: "Network", value: "CONNECTED" },
    { label: "Routing", value: "ACTIVE" },
    { label: "Access", value: "APPROVED" },
  ],
  className,
  live = true,
  animate = true,
}: LiveConsoleProps) {
  const uid = useId();
  const [visibleCount, setVisibleCount] = useState(animate ? 0 : lines.length);
  const [log, setLog] = useState<LogRow[]>([]);
  const [clock, setClock] = useState("--:--:--");
  const [step, setStep] = useState(0);
  const feedKey = feed.join("\n");

  useEffect(() => {
    if (!animate) {
      setVisibleCount(lines.length);
      return;
    }
    setVisibleCount(0);
    const timers: ReturnType<typeof setTimeout>[] = [];
    lines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleCount(i + 1), (i + 1) * 180));
    });
    return () => timers.forEach(clearTimeout);
  }, [lines, animate]);

  useEffect(() => {
    if (!animate) return;
    setClock(stamp());
    const clockTimer = setInterval(() => setClock(stamp()), 1000);
    if (!pipeline.length) {
      return () => clearInterval(clockTimer);
    }
    const stepTimer = setInterval(
      () => setStep((current) => (current + 1) % pipeline.length),
      1400
    );
    return () => {
      clearInterval(clockTimer);
      clearInterval(stepTimer);
    };
  }, [animate, pipeline.length]);

  useEffect(() => {
    if (!live || !feed.length) return;
    setLog(
      feed.slice(0, 4).map((row, i) => ({
        id: `${uid}-seed-${i}`,
        text: `${stamp()}  ${row}`,
      }))
    );
    let index = 3 % feed.length;
    const feedTimer = setInterval(() => {
      index = (index + 1) % feed.length;
      const next = index;
      setLog((rows) =>
        [
          { id: `${uid}-${Date.now()}-${next}`, text: `${stamp()}  ${feed[next]}` },
          ...rows,
        ].slice(0, 7)
      );
    }, 1300);
    return () => clearInterval(feedTimer);
  }, [live, feed, feedKey, uid]);

  return (
    <div
      className={cn(
        "relative rounded-2xl border border-orange-100/90 bg-white/92 backdrop-blur-md text-left overflow-hidden shadow-[0_22px_60px_rgba(212,165,116,0.18)]",
        className
      )}
    >
      <span className="pointer-events-none absolute top-2.5 left-2.5 z-20 h-3 w-3 border-t-2 border-l-2 border-brand-orange/55" />
      <span className="pointer-events-none absolute top-2.5 right-2.5 z-20 h-3 w-3 border-t-2 border-r-2 border-brand-orange/55" />
      <span className="pointer-events-none absolute bottom-2.5 left-2.5 z-20 h-3 w-3 border-b-2 border-l-2 border-brand-orange/55" />
      <span className="pointer-events-none absolute bottom-2.5 right-2.5 z-20 h-3 w-3 border-b-2 border-r-2 border-brand-orange/55" />
      <div className="pointer-events-none absolute inset-0 console-grid opacity-40" />
      <div className="pointer-events-none absolute inset-0 console-scan" />

      <div className="relative z-10 flex items-center justify-between gap-3 border-b border-orange-100 bg-brand-orange-light/80 px-4 py-2.5">
        <div className="flex items-center gap-2 min-w-0">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange-muted" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-gray-text truncate">
            {title}
          </span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-70 live-ping" />
            <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          <span className="font-mono text-[10px] text-emerald-700 font-semibold">
            LIVE
          </span>
          <span className="font-mono text-[10px] text-brand-gray-text tabular-nums">
            {clock}
          </span>
        </div>
      </div>

      <div className="relative z-10 grid grid-cols-3 border-b border-orange-100">
        {statuses.map((status) => (
          <div
            key={status.label}
            className="px-3 py-2.5 border-r border-orange-100 last:border-r-0"
          >
            <p className="font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
              {status.label}
            </p>
            <p className="font-mono text-[11px] font-semibold text-brand-orange mt-0.5">
              {status.value}
            </p>
          </div>
        ))}
      </div>

      {pipeline.length ? (
        <div className="relative z-10 flex flex-wrap gap-1.5 px-3 py-3 border-b border-orange-100 bg-brand-orange-light/40">
          {pipeline.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className={cn(
                "rounded-md px-2 py-1 text-[10px] font-tech font-semibold tracking-wide transition-all duration-300",
                i === step
                  ? "bg-brand-orange text-white shadow-sm scale-[1.04]"
                  : "bg-white border border-orange-100 text-brand-dark"
              )}
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      {lines.length ? (
        <div className="relative z-10 space-y-1 px-4 pt-4 font-mono text-xs sm:text-[13px] leading-relaxed">
          {lines.slice(0, visibleCount).map((line, i) => (
            <div key={`${line.text}-${i}`} className="flex gap-2">
              <span className="text-brand-orange/40 select-none shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className={lineColors[line.type ?? "default"]}>{line.text}</span>
            </div>
          ))}
        </div>
      ) : null}

      {live ? (
        <div className="relative z-10 px-4 py-3 font-mono text-[11px] sm:text-xs leading-relaxed space-y-1.5 min-h-[168px]">
          {log.map((row) => (
            <div key={row.id} className="flex gap-2 text-brand-dark/85">
              <span className="text-brand-orange shrink-0">›</span>
              <span>{row.text}</span>
            </div>
          ))}
          <span className="inline-block h-3.5 w-1.5 bg-brand-orange console-cursor align-middle" />
        </div>
      ) : null}

      <div className="relative z-10 flex items-end gap-[3px] h-8 px-4 pb-3">
        {Array.from({ length: 18 }, (_, i) => (
          <span
            key={`${uid}-eq-${i}`}
            className="console-eq-bar flex-1 rounded-sm bg-brand-orange/70"
            style={{ animationDelay: `${(i % 6) * 120}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

type FlowDiagramProps = {
  steps: string[];
  className?: string;
};

export function FlowDiagram({ steps, className }: FlowDiagramProps) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center w-full">
          <div className="w-full max-w-xs rounded-lg border border-orange-100 bg-white px-4 py-3 text-center text-sm font-tech font-semibold text-brand-dark shadow-sm">
            {step}
          </div>
          {i < steps.length - 1 ? (
            <span className="my-1 text-brand-orange text-lg leading-none">↓</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

type HorizontalFlowProps = {
  steps: string[];
  className?: string;
};

export function HorizontalFlow({ steps, className }: HorizontalFlowProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-2 sm:gap-3",
        className
      )}
    >
      {steps.map((step, i) => (
        <div key={step} className="flex items-center gap-2 sm:gap-3">
          <span className="rounded-md border border-orange-100 bg-brand-orange-light/60 px-3 py-1.5 text-xs font-tech font-semibold text-brand-dark">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="text-brand-orange text-sm">→</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

type PulseChipsProps = {
  items: string[];
  className?: string;
};

export function PulseChips({ items, className }: PulseChipsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (items.length < 2) return;
    const timer = setInterval(
      () => setActive((current) => (current + 1) % items.length),
      1500
    );
    return () => clearInterval(timer);
  }, [items.length]);

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item, i) => (
        <span
          key={item}
          className={cn(
            "rounded-lg border px-3 py-2 text-xs font-tech font-semibold transition-all duration-300",
            i === active
              ? "border-brand-orange bg-brand-orange text-white shadow-sm"
              : "border-orange-100 bg-white/85 text-brand-dark"
          )}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

type OpsTickerProps = {
  items: string[];
  className?: string;
};

export function OpsTicker({ items, className }: OpsTickerProps) {
  const loop = [...items, ...items];
  return (
    <div className={cn("hero-ticker-mask overflow-hidden", className)}>
      <div className="flex w-max gap-8 animate-[ticker_24s_linear_infinite]">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-brand-orange whitespace-nowrap"
          >
            ● {item}
          </span>
        ))}
      </div>
    </div>
  );
}
