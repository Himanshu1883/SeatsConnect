"use client";

import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Briefcase,
  Building2,
  Check,
  ConciergeBell,
  Globe2,
  Layers,
  Plane,
  Share2,
  ShieldCheck,
  Signal,
  Target,
  Ticket,
  X,
  Zap,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const features: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Globe2, title: "1 Network", text: "Unified infrastructure" },
  { icon: ShieldCheck, title: "100% Approved", text: "Trusted partners" },
  { icon: Zap, title: "Real-time", text: "Inventory access" },
  { icon: Signal, title: "Global", text: "Distribution reach" },
];

const supplyNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Venues", icon: Building2 },
  { label: "Promoters", icon: Ticket },
  { label: "Hospitality", icon: ConciergeBell },
];

const demandNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Travel", icon: Plane },
  { label: "Concierge", icon: Bell },
  { label: "Corporate", icon: Briefcase },
];

export function HomeProblem() {
  const [connected, setConnected] = useState(false);

  return (
    <HomeFrame tinted variant="grid">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <HomeKicker>The Challenge</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-brand-dark leading-[1.12] tracking-tight mt-3 mb-5">
            Global Event{" "}
            <span className="text-brand-orange">Distribution</span> Is Still
            Fragmented.
          </h2>
          <p className="text-brand-gray-text leading-relaxed mb-3">
            Event inventory is often distributed through disconnected systems,
            individual commercial relationships and manual processes.
          </p>
          <p className="text-brand-gray-text leading-relaxed mb-6">
            Professional businesses still need tickets, hospitality and live
            experiences for their customers. SeatsConnect provides unified B2B
            distribution infrastructure between supply and approved partners.
          </p>

          <div
            role="group"
            aria-label="Distribution graph state"
            className="inline-flex rounded-full border border-orange-100 bg-white p-1 mb-7 shadow-[0_1px_0_rgba(255,255,255,0.8)]"
          >
            <button
              type="button"
              aria-pressed={!connected}
              onClick={() => setConnected(false)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-tech font-semibold transition-all",
                !connected
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-brand-gray-text hover:text-brand-dark"
              )}
            >
              Fragmented
            </button>
            <button
              type="button"
              aria-pressed={connected}
              onClick={() => setConnected(true)}
              className={cn(
                "rounded-full px-4 py-1.5 text-xs font-tech font-semibold transition-all",
                connected
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-brand-gray-text hover:text-brand-dark"
              )}
            >
              Connected
            </button>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <feature.icon
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-orange"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                    {feature.title}
                  </p>
                  <p className="text-xs text-brand-gray-text mt-0.5 leading-snug">
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-orange-100 bg-brand-orange-light px-4 py-3.5">
            <Share2
              className="h-5 w-5 shrink-0 text-brand-orange"
              strokeWidth={1.5}
            />
            <p className="text-sm leading-snug">
              <span className="font-tech font-bold text-brand-dark">
                One connection for supply.
              </span>{" "}
              <span className="text-brand-gray-text">
                Multiple approved channels for distribution.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:py-4">
          <div className="problem-console-scene">
            <ProblemGraph connected={connected} />
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function ProblemGraph({ connected }: { connected: boolean }) {
  return (
    <div
      className={cn(
        "problem-console-3d relative rounded-[1.6rem] border border-orange-100/90 bg-white p-5 sm:p-6",
        "shadow-[0_8px_18px_rgba(166,122,70,0.08),0_24px_56px_rgba(166,122,70,0.14)]"
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
          <p className="truncate font-mono text-[10px] uppercase tracking-[0.2em] text-brand-dark/70">
            {connected ? "Connected. Graph" : "Disconnected. Graph"}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-gray-text">
            Status
          </span>
          <span
            className={cn(
              "rounded-full px-2.5 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-[0.14em]",
              connected
                ? "bg-emerald-50 text-emerald-700"
                : "bg-brand-orange/20 text-brand-orange-hover"
            )}
          >
            {connected ? "Connected" : "Fragmented"}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {supplyNodes.map((node) => (
          <GraphNode key={node.label} {...node} />
        ))}
      </div>

      <GraphLinks connected={connected} direction="in" />

      <div
        className={cn(
          "relative z-10 mx-auto flex w-[92%] items-center gap-3 rounded-2xl px-4 py-3.5 text-white transition-shadow duration-500",
          "bg-brand-dark",
          connected && "shadow-[0_0_0_1px_rgba(212,165,116,0.45),0_0_24px_rgba(212,165,116,0.18)]"
        )}
      >
        <Layers
          className="h-5 w-5 shrink-0 text-brand-orange"
          strokeWidth={1.5}
        />
        <div className="min-w-0">
          <p className="font-tech text-sm font-bold leading-tight">
            {connected ? "SeatsConnect layer" : "No common layer"}
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-white/65">
            {connected
              ? "Search → Quote → Book → Fulfil"
              : "Manual routes · Separate deals"}
          </p>
        </div>
      </div>

      <GraphLinks connected={connected} direction="out" showMarkers />

      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {demandNodes.map((node) => (
          <GraphNode key={node.label} {...node} />
        ))}
      </div>

      <div className="mt-5 flex items-start gap-3 rounded-xl border border-orange-100 bg-brand-orange-light/70 p-4">
        <Target
          className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
          strokeWidth={1.5}
        />
        <div>
          <p className="font-tech text-sm font-bold text-brand-dark leading-snug">
            {connected
              ? "Connected today. Controlled distribution."
              : "Disconnected today. Connected tomorrow."}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-brand-gray-text">
            {connected
              ? "Approved partners search, quote, book and fulfil through one infrastructure layer and multiple approved channels."
              : "SeatsConnect unifies supply and distribution with one infrastructure layer and multiple approved channels."}
          </p>
        </div>
      </div>
    </div>
  );
}

function GraphNode({ label, icon: Icon }: { label: string; icon: LucideIcon }) {
  return (
    <div className="flex flex-col items-center gap-1.5 rounded-xl border border-orange-100 bg-white px-2 py-3 shadow-[0_1px_0_rgba(255,255,255,0.9)]">
      <Icon className="h-4 w-4 text-brand-dark/70" strokeWidth={1.5} />
      <span className="font-tech text-[11px] font-semibold text-brand-dark">
        {label}
      </span>
    </div>
  );
}

function GraphLinks({
  connected,
  direction,
  showMarkers = false,
}: {
  connected: boolean;
  direction: "in" | "out";
  showMarkers?: boolean;
}) {
  const stroke = connected ? "#d4a574" : "#c4bbb3";
  const paths =
    direction === "in"
      ? [
          "M 100 4 C 100 40, 300 28, 300 76",
          "M 300 4 C 300 28, 300 52, 300 76",
          "M 500 4 C 500 40, 300 28, 300 76",
        ]
      : [
          "M 300 4 C 300 28, 100 36, 100 76",
          "M 300 4 C 300 28, 300 52, 300 76",
          "M 300 4 C 300 28, 500 36, 500 76",
        ];

  return (
    <div className="relative h-16 sm:h-[4.5rem]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 80"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden
      >
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            stroke={stroke}
            strokeWidth={connected ? 1.7 : 1.4}
            strokeLinecap="round"
            strokeDasharray={connected ? undefined : "6 5"}
            className={cn(!connected && "problem-graph-dash")}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
      {showMarkers
        ? ["left-[16.5%]", "left-1/2 -translate-x-1/2", "right-[16.5%]"].map(
            (pos) => (
              <span
                key={pos}
                className={cn(
                  "absolute top-[42%] z-10 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange",
                  pos
                )}
                aria-hidden
              >
                {connected ? (
                  <Check className="h-3 w-3 text-white" strokeWidth={2.5} />
                ) : (
                  <X className="h-3 w-3 text-white" strokeWidth={2.5} />
                )}
              </span>
            )
          )
        : null}
    </div>
  );
}
