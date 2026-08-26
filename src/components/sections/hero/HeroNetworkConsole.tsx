"use client";

import { useEffect, useId, useState, type CSSProperties } from "react";
import {
  Activity,
  Bell,
  Globe2,
  LayoutGrid,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

const pipeline = ["SUPPLY", "CONNECT", "ROUTE", "DISTRIBUTE", "BOOK", "FULFIL"];

const architecture = [
  {
    n: "01",
    label: "SUPPLY",
    detail: "Venues · Promoters · Hospitality · Official suppliers",
  },
  {
    n: "02",
    label: "INFRASTRUCTURE",
    detail: "SeatsConnect API layer · Search → Quote → Book → Fulfil",
  },
  {
    n: "03",
    label: "DISTRIBUTE",
    detail: "Travel · Concierge · Corporate · Hotels · Sports travel",
  },
];

const feed = [
  "API GET      /events",
  "API GET      /availability",
  "SEARCH query concierge · live event",
  "QUOTE build  branded proposal",
  "BOOK confirm connected workflow",
  "FULFIL pass  order + delivery status",
  "ROUTE apply  approved partner · travel",
  "SUPPLY sync  venue hospitality allocation",
];

const metrics = [
  { label: "Layer", value: "ONLINE" },
  { label: "Routing", value: "ACTIVE" },
  { label: "Access", value: "APPROVED" },
];

const channels = [
  { name: "Travel", fill: "78%" },
  { name: "Concierge", fill: "64%" },
  { name: "Corporate", fill: "71%" },
  { name: "Hotels", fill: "58%" },
];

const bars = [42, 68, 54, 86, 73, 61, 79];

function stamp() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

export function HeroNetworkConsole() {
  const uid = useId();
  const svgId = uid.replace(/:/g, "");
  const [clock, setClock] = useState("--:--:--");
  const [step, setStep] = useState(4);
  const [log, setLog] = useState<{ id: string; text: string }[]>([]);

  useEffect(() => {
    setClock(stamp());
    const clockTimer = setInterval(() => setClock(stamp()), 1000);
    const stepTimer = setInterval(
      () => setStep((current) => (current + 1) % pipeline.length),
      1600
    );
    setLog(
      feed.slice(0, 4).map((row, i) => ({
        id: `${uid}-seed-${i}`,
        text: `${stamp()}  ${row}`,
      }))
    );
    let index = 3;
    const feedTimer = setInterval(() => {
      index = (index + 1) % feed.length;
      const next = index;
      setLog((rows) =>
        [
          {
            id: `${uid}-${Date.now()}-${next}`,
            text: `${stamp()}  ${feed[next]}`,
          },
          ...rows,
        ].slice(0, 4)
      );
    }, 1400);
    return () => {
      clearInterval(clockTimer);
      clearInterval(stepTimer);
      clearInterval(feedTimer);
    };
  }, [uid]);

  return (
    <div className="hero-console-scene relative">
      <svg
        className="pointer-events-none absolute -right-6 -top-8 z-20 hidden h-24 w-32 text-brand-orange/45 xl:block"
        viewBox="0 0 128 96"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 84 C 40 84, 64 24, 116 18"
          stroke="currentColor"
          strokeDasharray="4 5"
          strokeWidth="1.2"
        />
        <circle cx="116" cy="18" r="5" fill="#d4a574" className="node-pulse" />
        <circle cx="8" cy="84" r="3" fill="#d4a574" />
      </svg>
      <svg
        className="pointer-events-none absolute -bottom-6 -left-8 z-20 hidden h-20 w-28 text-brand-orange/35 xl:block"
        viewBox="0 0 112 80"
        fill="none"
        aria-hidden
      >
        <path
          d="M104 8 C 72 12, 36 52, 10 68"
          stroke="currentColor"
          strokeDasharray="4 5"
          strokeWidth="1.2"
        />
        <circle cx="10" cy="68" r="4" fill="#d4a574" className="node-pulse" />
      </svg>

      <div
        aria-hidden
        className="hero-console-glow pointer-events-none absolute -inset-8 -z-10 rounded-[2.4rem] bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.38),transparent_68%)] blur-2xl"
      />

      <div className="hero-console-3d relative">
        <div aria-hidden className="hero-console-plate" />
        <div className="hero-console-face relative overflow-hidden rounded-[1.45rem] border border-orange-100/90 bg-[#fbf7f2]/95 shadow-[0_8px_18px_rgba(166,122,70,0.1),0_28px_64px_rgba(166,122,70,0.22),0_48px_90px_rgba(26,26,26,0.08)] backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-orange-100 bg-white/75 px-3 py-1.5 sm:px-4 xl:py-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8b4a0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.22em] text-brand-gray-text">
              seatsconnect.network
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-70 live-ping" />
              <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[10px] font-semibold text-emerald-700">
              LIVE
            </span>
            <span className="font-mono text-[10px] tabular-nums text-brand-gray-text">
              {clock}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 divide-x divide-orange-100 border-b border-orange-100 bg-white/55">
          {metrics.map((metric) => (
            <div key={metric.label} className="px-3 py-1.5 xl:py-2">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-gray-text">
                {metric.label}
              </p>
              <p className="font-tech text-[12px] font-bold text-brand-orange">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="flex min-h-0 lg:min-h-[260px] xl:min-h-[300px]">
          <aside className="hidden w-11 shrink-0 flex-col items-center gap-4 border-r border-orange-100 bg-white/45 py-3 sm:flex xl:py-4">
            <Globe2 className="h-4 w-4 text-brand-orange" />
            <ShieldCheck className="h-4 w-4 text-brand-orange/75" />
            <Activity className="h-4 w-4 text-brand-orange/50" />
            <Settings className="mt-auto h-4 w-4 text-brand-gray-text/70" />
          </aside>

          <div className="relative min-h-0 min-w-0 flex-1 p-2.5 sm:p-3 xl:p-4">
            <div className="mb-2 flex items-center justify-between xl:mb-3">
              <p className="font-tech text-xs font-semibold text-brand-dark">
                Distribution layer
              </p>
              <div className="flex items-center gap-2.5 text-brand-gray-text">
                <Search className="h-3.5 w-3.5" />
                <span className="relative">
                  <Bell className="h-3.5 w-3.5" />
                  <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-brand-orange" />
                </span>
                <LayoutGrid className="h-3.5 w-3.5" />
              </div>
            </div>

            <div className="relative mb-2 pt-1 xl:mb-3 xl:pt-2">
              <div className="home-card-lift absolute left-0 top-0 z-20 hidden w-[158px] rounded-xl border border-orange-100 bg-white/95 p-3 shadow-[0_16px_40px_rgba(212,165,116,0.28),0_1px_0_rgba(255,255,255,0.9)_inset] xl:block">
                <div className="mb-1 flex h-6 w-6 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <Globe2 className="h-3.5 w-3.5" />
                </div>
                <p className="font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
                  Infrastructure
                </p>
                <p className="font-tech text-lg font-bold leading-tight text-brand-dark">
                  Connected
                </p>
                <p className="text-[10px] text-emerald-700">Approved partners only</p>
              </div>

              <div className="grid gap-2 sm:grid-cols-5 xl:pl-[5.4rem] xl:pt-5">
                <div className="home-card-lift hero-console-widget rounded-xl border border-orange-100 p-2.5 sm:col-span-3 xl:p-3">
                  <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
                    Pipeline flow
                  </p>
                  <div className="flex h-14 items-end gap-1.5 xl:h-[4.5rem]">
                    {bars.map((height, i) => (
                      <span
                        key={`${uid}-bar-${i}`}
                        className={cn(
                          "hero-bar-grow flex-1 rounded-t-md bg-gradient-to-t from-brand-orange/30 to-brand-orange",
                          i === step % bars.length &&
                            "shadow-[0_0_14px_rgba(212,165,116,0.55)]"
                        )}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${i * 80}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="home-card-lift hero-console-widget relative rounded-xl border border-orange-100 p-2.5 sm:col-span-2 xl:p-3">
                  <p className="mb-1 font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
                    Channel mix
                  </p>
                  <svg viewBox="0 0 160 72" className="h-12 w-full xl:h-16" aria-hidden>
                    <defs>
                      <linearGradient id={`${svgId}-fill`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#d4a574" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#d4a574" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0 52 C 20 48, 28 22, 46 28 C 64 34, 72 12, 90 18 C 108 24, 118 40, 136 28 C 148 20, 154 30, 160 24 L 160 72 L 0 72 Z"
                      fill={`url(#${svgId}-fill)`}
                    />
                    <path
                      className="hero-area-draw"
                      d="M0 52 C 20 48, 28 22, 46 28 C 64 34, 72 12, 90 18 C 108 24, 118 40, 136 28 C 148 20, 154 30, 160 24"
                      fill="none"
                      stroke="#d4a574"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mb-2 flex flex-wrap gap-1.5 xl:mb-3">
              {pipeline.map((item, i) => (
                <span
                  key={item}
                  className={cn(
                    "rounded-md px-2 py-1 font-tech text-[10px] font-semibold tracking-wide transition-all duration-300",
                    i === step
                      ? "bg-brand-orange text-white shadow-sm"
                      : "border border-orange-100 bg-white text-brand-dark"
                  )}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="hero-console-widget mb-2 hidden rounded-xl border border-orange-100 px-3 py-2.5 font-mono text-[11px] leading-relaxed xl:mb-3 xl:[@media(min-height:52rem)]:block">
              {architecture.map((row) => (
                <div key={row.n} className="flex gap-2">
                  <span className="text-brand-orange/80">{row.n}</span>
                  <span className="font-semibold text-brand-orange">{row.label}</span>
                  <span className="truncate text-brand-dark/80">{row.detail}</span>
                </div>
              ))}
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <div className="home-card-lift hero-console-widget hidden rounded-xl border border-orange-100 p-3 xl:[@media(min-height:52rem)]:block">
                <p className="mb-2 font-mono text-[9px] uppercase tracking-widest text-brand-gray-text">
                  Connected channels
                </p>
                <div className="space-y-2">
                  {channels.map((channel) => (
                    <div key={channel.name} className="flex items-center gap-2">
                      <span className="w-16 shrink-0 font-tech text-[11px] text-brand-dark">
                        {channel.name}
                      </span>
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-orange-100">
                        <span
                          className="hero-fill-in block h-full rounded-full bg-brand-orange"
                          style={{ ["--fill"]: channel.fill } as CSSProperties}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-console-widget rounded-xl border border-orange-100 p-2.5 font-mono text-[10px] leading-relaxed text-brand-dark/85 sm:col-span-2 xl:col-span-1 xl:p-3">
                {log.map((row) => (
                  <div key={row.id} className="flex gap-1.5">
                    <span className="text-brand-orange">›</span>
                    <span className="truncate">{row.text}</span>
                  </div>
                ))}
                <span className="mt-1 inline-block h-3 w-1.5 align-middle bg-brand-orange console-cursor" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
