"use client";

import {
  useCallback,
  useEffect,
  useId,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Activity,
  BadgeCheck,
  BarChart3,
  Bell,
  Briefcase,
  Building2,
  Code2,
  ConciergeBell,
  FileText,
  Globe2,
  Layers,
  Lock,
  PieChart,
  Plane,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe2,
    title: "One Infrastructure",
    text: "Connect once to reach multiple markets.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Channels",
    text: "Distribution through trusted professional partners only.",
  },
  {
    icon: BarChart3,
    title: "Full Visibility",
    text: "Real-time insights into distribution and inventory performance.",
  },
  {
    icon: Lock,
    title: "You Stay in Control",
    text: "Define access, rules and commercial terms.",
  },
];

const capabilities: {
  id: string;
  code: string;
  title: string;
  description: string;
  icon: LucideIcon;
  signal: string;
  status: string;
  feed: string;
}[] = [
  {
    id: "reach",
    code: "01",
    title: "Global Reach",
    description: "Connect event inventory with professional demand worldwide.",
    icon: Globe2,
    signal: "ROUTING",
    status: "ONLINE",
    feed: "ROUTE open  market · travel · concierge · corporate",
  },
  {
    id: "control",
    code: "02",
    title: "Controlled Distribution",
    description:
      "Distribute only through approved partners, markets and terms.",
    icon: ShieldCheck,
    signal: "ACCESS",
    status: "LOCKED",
    feed: "ACCESS apply approved partner · territory rules",
  },
  {
    id: "api",
    code: "03",
    title: "API Connectivity",
    description: "Connect inventory directly into the infrastructure layer.",
    icon: Code2,
    signal: "SYNC",
    status: "LIVE",
    feed: "API POST   /inventory/sync · hospitality allocation",
  },
  {
    id: "channels",
    code: "04",
    title: "Channel Expansion",
    description: "Reach travel, concierge, corporate and other B2B channels.",
    icon: Users,
    signal: "CHANNELS",
    status: "ACTIVE",
    feed: "CHANNEL map travel · hotels · sports travel · WL",
  },
  {
    id: "admin",
    code: "05",
    title: "Reduced Administration",
    description: "Replace manual requests and spreadsheets with connected flow.",
    icon: FileText,
    signal: "WORKFLOW",
    status: "READY",
    feed: "WORKFLOW Search → Quote → Book → Fulfil",
  },
  {
    id: "visibility",
    code: "06",
    title: "Distribution Visibility",
    description: "Structured view of inventory availability and performance.",
    icon: PieChart,
    signal: "INSIGHT",
    status: "STREAM",
    feed: "INSIGHT refresh availability · channel performance",
  },
];

const supplyNodes: { label: string; icon: LucideIcon; softPrefix?: string }[] =
  [
    { label: "Venues", icon: Building2 },
    { label: "Promoters", icon: Ticket },
    { label: "Hospitality", icon: ConciergeBell },
    { label: "Suppliers", icon: BadgeCheck, softPrefix: "Approved" },
  ];

const channelNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Travel", icon: Plane },
  { label: "Concierge", icon: Bell },
  { label: "Corporate", icon: Briefcase },
  { label: "Hospitality", icon: Building2 },
  { label: "Other B2B Channels", icon: Users },
];

const statusItems: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe2,
    title: "Global Markets",
    text: "Reach professional buyers worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Partners",
    text: "Distribution through trusted networks.",
  },
  {
    icon: BarChart3,
    title: "Real-time Control",
    text: "Manage access, rules and performance.",
  },
];

type FlowPath = {
  id: string;
  d: string;
  dir: "in" | "out";
  delay: number;
  mid: { x: number; y: number };
};

function cubicPoint(
  t: number,
  p0: { x: number; y: number },
  p1: { x: number; y: number },
  p2: { x: number; y: number },
  p3: { x: number; y: number }
) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  return {
    x: uu * u * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + tt * t * p3.x,
    y: uu * u * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + tt * t * p3.y,
  };
}

export function HomeSupplier() {
  return (
    <HomeFrame id="suppliers" variant="plain">
      <div className="mb-12 grid items-start gap-10 lg:mb-14 lg:grid-cols-2 lg:gap-12 xl:gap-14">
        <Reveal>
          <div>
            <HomeKicker>For Suppliers</HomeKicker>
            <h2 className="font-tech text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.12] tracking-tight mt-3 mb-3">
              <span className="text-brand-dark">Expand Distribution</span>{" "}
              <span className="text-brand-orange">Without Losing Control.</span>
            </h2>
            <div className="mb-5 h-0.5 w-16 rounded-full bg-brand-orange" />
            <p className="text-brand-gray-text leading-relaxed mb-3">
              SeatsConnect helps venues, promoters, hospitality providers and
              approved suppliers connect their inventory with professional B2B
              demand across international markets.
            </p>
            <p className="text-brand-gray-text leading-relaxed mb-8">
              Instead of managing individual connections with multiple
              distribution businesses, suppliers connect inventory to one
              infrastructure layer and make it available through approved
              professional channels — while keeping control of access, rules and
              commercial terms.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-5">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <item.icon
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand-orange"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                      {item.title}
                    </p>
                    <p className="text-xs text-brand-gray-text mt-0.5 leading-snug">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <InfrastructureConsole />
        </Reveal>
      </div>

      <Reveal delay={160}>
        <SupplierCapabilitiesConsole />
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-8">
          <Button href={routes.joinSupplier}>
            Become a Supply Partner
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>
    </HomeFrame>
  );
}

function stamp() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

function SupplierCapabilitiesConsole() {
  const uid = useId();
  const [clock, setClock] = useState("--:--:--");
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [log, setLog] = useState<{ id: string; text: string }[]>([]);
  const current = capabilities[active];

  useEffect(() => {
    setClock(stamp());
    const clockTimer = setInterval(() => setClock(stamp()), 1000);
    return () => clearInterval(clockTimer);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(
      () => setActive((i) => (i + 1) % capabilities.length),
      2800
    );
    return () => clearInterval(timer);
  }, [paused]);

  useEffect(() => {
    setLog(
      capabilities.slice(0, 4).map((cap, i) => ({
        id: `${uid}-seed-${i}`,
        text: `${stamp()}  ${cap.feed}`,
      }))
    );
    let index = 3;
    const feedTimer = setInterval(() => {
      index = (index + 1) % capabilities.length;
      const next = capabilities[index];
      setLog((rows) =>
        [
          {
            id: `${uid}-${Date.now()}-${index}`,
            text: `${stamp()}  ${next.feed}`,
          },
          ...rows,
        ].slice(0, 5)
      );
    }, 1600);
    return () => clearInterval(feedTimer);
  }, [uid]);

  return (
    <div
      className="supplier-cap-console relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.4rem] bg-[radial-gradient(ellipse_at_center,rgba(212,165,116,0.28),transparent_70%)] blur-2xl"
      />

      <div className="overflow-hidden rounded-[1.6rem] border border-orange-100/90 bg-[#fbf7f2]/95 shadow-[0_8px_18px_rgba(166,122,70,0.1),0_28px_64px_rgba(166,122,70,0.18)] backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-orange-100 bg-white/80 px-3 py-2 sm:px-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#e8b4a0]" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand-orange-muted" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.2em] text-brand-gray-text">
              seatsconnect.supplier · capabilities
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

        <div className="grid grid-cols-2 divide-x divide-orange-100 border-b border-orange-100 bg-white/55 sm:grid-cols-4">
          {[
            { label: "Layer", value: "CONNECTED" },
            { label: "Modules", value: "06 ACTIVE" },
            { label: "Routing", value: current.signal },
            { label: "Control", value: "SUPPLIER" },
          ].map((metric) => (
            <div key={metric.label} className="px-3 py-2 sm:px-4">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-brand-gray-text">
                {metric.label}
              </p>
              <p className="font-tech text-[12px] font-bold text-brand-orange">
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative border-b border-orange-100 p-3 sm:p-4 lg:border-b-0 lg:border-r">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div>
                <p className="font-tech text-sm font-bold text-brand-dark">
                  Capability mesh
                </p>
                <p className="text-[11px] text-brand-gray-text">
                  Six connected supplier modules on one layer
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-orange-100 bg-white px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-brand-orange">
                <Activity className="h-3 w-3" strokeWidth={2} />
                hub live
              </span>
            </div>

            <CapabilityMesh active={active} onSelect={setActive} />

            <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((cap, i) => {
                const Icon = cap.icon;
                const isActive = i === active;
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "supplier-cap-module group relative overflow-hidden rounded-xl border px-3 py-3 text-left transition-all duration-300",
                      isActive
                        ? "border-brand-orange/55 bg-white shadow-[0_10px_28px_rgba(212,165,116,0.16)]"
                        : "border-orange-100 bg-white/70 hover:border-brand-orange/35 hover:bg-white"
                    )}
                  >
                    <div className="mb-2 flex items-center justify-between gap-2">
                      <span className="font-mono text-[10px] font-semibold text-brand-orange">
                        {cap.code}
                      </span>
                      <span
                        className={cn(
                          "rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider",
                          isActive
                            ? "bg-emerald-500/15 text-emerald-700"
                            : "bg-brand-orange-light text-brand-gray-text"
                        )}
                      >
                        {cap.status}
                      </span>
                    </div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <span
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-lg transition-colors",
                          isActive
                            ? "bg-brand-orange text-white"
                            : "bg-brand-orange/12 text-brand-orange"
                        )}
                      >
                        <Icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                      </span>
                      <p className="font-tech text-[13px] font-bold leading-tight text-brand-dark">
                        {cap.title}
                      </p>
                    </div>
                    <p className="text-[11px] leading-snug text-brand-gray-text line-clamp-2">
                      {cap.description}
                    </p>
                    {isActive ? (
                      <span
                        aria-hidden
                        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-brand-orange to-transparent"
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col bg-white/40 p-3 sm:p-4">
            <div className="mb-3 rounded-xl border border-orange-100 bg-white p-4 shadow-[0_4px_16px_rgba(166,122,70,0.06)]">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-orange">
                    Active module · {current.code}
                  </p>
                  <h3 className="mt-1 font-tech text-lg font-bold text-brand-dark">
                    {current.title}
                  </h3>
                </div>
                <current.icon
                  className="h-5 w-5 shrink-0 text-brand-orange"
                  strokeWidth={1.6}
                />
              </div>
              <p className="text-sm leading-relaxed text-brand-gray-text">
                {current.description}
              </p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-lg border border-orange-100 bg-brand-orange-light/50 px-3 py-2">
                  <p className="font-mono text-[8px] uppercase tracking-wider text-brand-gray-text">
                    Signal
                  </p>
                  <p className="font-tech text-xs font-bold text-brand-dark">
                    {current.signal}
                  </p>
                </div>
                <div className="rounded-lg border border-orange-100 bg-brand-orange-light/50 px-3 py-2">
                  <p className="font-mono text-[8px] uppercase tracking-wider text-brand-gray-text">
                    Status
                  </p>
                  <p className="font-tech text-xs font-bold text-emerald-700">
                    {current.status}
                  </p>
                </div>
              </div>
              <div className="mt-3 flex gap-1">
                {capabilities.map((cap, i) => (
                  <span
                    key={cap.id}
                    className={cn(
                      "h-1 flex-1 rounded-full transition-colors duration-500",
                      i === active
                        ? "bg-brand-orange"
                        : i < active
                          ? "bg-brand-orange/45"
                          : "bg-brand-orange-muted/40"
                    )}
                  />
                ))}
              </div>
            </div>

            <div className="flex min-h-0 flex-1 flex-col rounded-xl border border-orange-100 bg-[#FFFBF7]">
              <div className="flex items-center justify-between border-b border-orange-100 px-3 py-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-brand-gray-text">
                  Connection feed
                </p>
                <span className="font-mono text-[9px] text-brand-orange">
                  stream
                </span>
              </div>
              <ul className="space-y-1.5 p-3 font-mono text-[11px] leading-relaxed">
                {log.map((row) => (
                  <li key={row.id} className="truncate text-brand-dark/85">
                    <span className="text-brand-orange/80">›</span> {row.text}
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-orange-100 px-3 py-2">
                <p className="font-mono text-[10px] text-brand-gray-text">
                  <span className="text-brand-orange">hub</span>
                  {" · "}
                  supply → infrastructure → approved channels
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type MeshLink = {
  id: string;
  d: string;
  index: number;
  dir: "in" | "out";
};

function CapabilityMesh({
  active,
  onSelect,
}: {
  active: number;
  onSelect: (index: number) => void;
}) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLElement | null)[]>([]);
  const rightRefs = useRef<(HTMLElement | null)[]>([]);
  const [paths, setPaths] = useState<MeshLink[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showLines, setShowLines] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const leftCaps = capabilities.slice(0, 3);
  const rightCaps = capabilities.slice(3);

  const measure = useCallback(() => {
    const diagram = diagramRef.current;
    const hub = hubRef.current;
    if (!diagram || !hub) return;

    const desktop = window.matchMedia("(min-width: 640px)").matches;
    setShowLines(desktop);
    if (!desktop) {
      setPaths([]);
      return;
    }

    const dRect = diagram.getBoundingClientRect();
    const hRect = hub.getBoundingClientRect();
    const w = dRect.width;
    const h = dRect.height;
    if (w < 8 || h < 8) return;
    setSize({ w, h });

    const hubLeftX = hRect.left - dRect.left;
    const hubRightX = hRect.right - dRect.left;
    const hubTop = hRect.top - dRect.top;
    const hubH = hRect.height;
    const next: MeshLink[] = [];

    leftRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const sx = r.right - dRect.left;
      const sy = r.top - dRect.top + r.height / 2;
      const t = (i + 1) / (leftCaps.length + 1);
      const hx = hubLeftX;
      const hy = hubTop + hubH * (0.22 + t * 0.56);
      const c1 = { x: sx + (hx - sx) * 0.4, y: sy };
      const c2 = { x: sx + (hx - sx) * 0.72, y: hy };
      next.push({
        id: `in-${i}`,
        index: i,
        dir: "in",
        d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${hx.toFixed(1)} ${hy.toFixed(1)}`,
      });
    });

    rightRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const ex = r.left - dRect.left;
      const ey = r.top - dRect.top + r.height / 2;
      const t = (i + 1) / (rightCaps.length + 1);
      const hx = hubRightX;
      const hy = hubTop + hubH * (0.22 + t * 0.56);
      const c1 = { x: hx + (ex - hx) * 0.28, y: hy };
      const c2 = { x: hx + (ex - hx) * 0.62, y: ey };
      next.push({
        id: `out-${i}`,
        index: i + 3,
        dir: "out",
        d: `M ${hx.toFixed(1)} ${hy.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`,
      });
    });

    setPaths(next);
  }, [leftCaps.length, rightCaps.length]);

  useLayoutEffect(() => {
    measure();
  }, [measure, active]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);

    const diagram = diagramRef.current;
    if (!diagram) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(diagram);
    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 60);
    const t2 = window.setTimeout(measure, 280);

    return () => {
      mq.removeEventListener("change", onMq);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  return (
    <div
      ref={diagramRef}
      className="relative overflow-hidden rounded-xl border border-orange-100 bg-white/80 px-3 py-4 sm:px-4 sm:py-5"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 supplier-console-map"
      />

      {showLines && size.w > 0 && paths.length > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full sm:block"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          {paths.map((p) => {
            const isActive = p.index === active;
            return (
              <g key={p.id}>
                <path
                  d={p.d}
                  stroke="#d4a574"
                  strokeWidth={isActive ? 2 : 1.35}
                  strokeLinecap="round"
                  opacity={isActive ? 0.95 : 0.32}
                  strokeDasharray={isActive ? "0" : "5 6"}
                  className="transition-[opacity,stroke-width] duration-300"
                />
                {isActive && !reduceMotion ? (
                  <circle r="3.4" fill="#d4a574" opacity="0.95">
                    <animateMotion
                      dur={p.dir === "in" ? "2.1s" : "1.9s"}
                      repeatCount="indefinite"
                      path={p.d}
                    />
                  </circle>
                ) : null}
              </g>
            );
          })}
        </svg>
      ) : null}

      <div className="relative z-10 grid grid-cols-1 items-center gap-4 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] sm:gap-3 md:gap-5">
        <div className="flex flex-col justify-center gap-2.5 sm:pr-1">
          {leftCaps.map((cap, i) => (
            <button
              key={cap.id}
              type="button"
              ref={(el) => {
                leftRefs.current[i] = el;
              }}
              onClick={() => onSelect(i)}
              aria-pressed={i === active}
              className={cn(
                "relative z-10 w-full rounded-lg border px-2.5 py-2 text-left font-mono text-[10px] font-semibold tracking-wide transition-all sm:text-[11px]",
                i === active
                  ? "border-brand-orange bg-brand-orange text-white shadow-sm"
                  : "border-orange-100 bg-white text-brand-dark hover:border-brand-orange/40"
              )}
            >
              <span className="tabular-nums opacity-80">{cap.code}</span>{" "}
              {cap.signal}
            </button>
          ))}
        </div>

        <div className="flex justify-center py-1 sm:px-1 sm:py-0">
          <div
            ref={hubRef}
            className="relative z-10 flex w-[8.25rem] flex-col items-center justify-center gap-1.5 rounded-2xl border border-brand-orange/45 bg-white px-3 py-4 text-center shadow-[0_10px_28px_rgba(166,122,70,0.12)] sm:w-[9rem]"
          >
            <Layers className="h-4 w-4 text-brand-orange" strokeWidth={1.6} />
            <p className="font-tech text-[11px] font-bold leading-tight text-brand-dark sm:text-xs">
              SeatsConnect
            </p>
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-brand-gray-text">
              infrastructure
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-2.5 sm:pl-1">
          {rightCaps.map((cap, i) => {
            const idx = i + 3;
            return (
              <button
                key={cap.id}
                type="button"
                ref={(el) => {
                  rightRefs.current[i] = el;
                }}
                onClick={() => onSelect(idx)}
                aria-pressed={idx === active}
                className={cn(
                  "relative z-10 w-full rounded-lg border px-2.5 py-2 text-left font-mono text-[10px] font-semibold tracking-wide transition-all sm:text-right sm:text-[11px]",
                  idx === active
                    ? "border-brand-orange bg-brand-orange text-white shadow-sm"
                    : "border-orange-100 bg-white text-brand-dark hover:border-brand-orange/40"
                )}
              >
                <span className="tabular-nums opacity-80">{cap.code}</span>{" "}
                {cap.signal}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function InfrastructureConsole() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const supplyRefs = useRef<(HTMLElement | null)[]>([]);
  const channelRefs = useRef<(HTMLElement | null)[]>([]);
  const [paths, setPaths] = useState<FlowPath[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showLines, setShowLines] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const measure = useCallback(() => {
    const diagram = diagramRef.current;
    const hub = hubRef.current;
    if (!diagram || !hub) return;

    const desktop = window.matchMedia("(min-width: 768px)").matches;
    setShowLines(desktop);
    if (!desktop) {
      setPaths([]);
      return;
    }

    const dRect = diagram.getBoundingClientRect();
    const hRect = hub.getBoundingClientRect();
    const w = dRect.width;
    const h = dRect.height;
    if (w < 8 || h < 8) return;

    setSize({ w, h });

    const hubLeftX = hRect.left - dRect.left;
    const hubRightX = hRect.right - dRect.left;
    const hubTop = hRect.top - dRect.top;
    const hubH = hRect.height;
    const next: FlowPath[] = [];

    const supplies = supplyRefs.current.filter(Boolean) as HTMLElement[];
    supplies.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const sx = r.right - dRect.left;
      const sy = r.top - dRect.top + r.height / 2;
      const t = (i + 1) / (supplies.length + 1);
      const hx = hubLeftX;
      const hy = hubTop + hubH * (0.18 + t * 0.64);
      const c1 = { x: sx + (hx - sx) * 0.42, y: sy };
      const c2 = { x: sx + (hx - sx) * 0.72, y: hy };
      const p0 = { x: sx, y: sy };
      const p3 = { x: hx, y: hy };
      next.push({
        id: `in-${i}`,
        dir: "in",
        delay: i * 0.18,
        d: `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${hx.toFixed(1)} ${hy.toFixed(1)}`,
        mid: cubicPoint(0.48, p0, c1, c2, p3),
      });
    });

    const channels = channelRefs.current.filter(Boolean) as HTMLElement[];
    channels.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const ex = r.left - dRect.left;
      const ey = r.top - dRect.top + r.height / 2;
      const t = (i + 1) / (channels.length + 1);
      const hx = hubRightX;
      const hy = hubTop + hubH * (0.12 + t * 0.76);
      const c1 = { x: hx + (ex - hx) * 0.28, y: hy };
      const c2 = { x: hx + (ex - hx) * 0.58, y: ey };
      const p0 = { x: hx, y: hy };
      const p3 = { x: ex, y: ey };
      next.push({
        id: `out-${i}`,
        dir: "out",
        delay: i * 0.14,
        d: `M ${hx.toFixed(1)} ${hy.toFixed(1)} C ${c1.x.toFixed(1)} ${c1.y.toFixed(1)}, ${c2.x.toFixed(1)} ${c2.y.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`,
        mid: cubicPoint(0.52, p0, c1, c2, p3),
      });
    });

    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const onMq = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onMq);

    const diagram = diagramRef.current;
    if (!diagram) return;

    const ro = new ResizeObserver(() => measure());
    ro.observe(diagram);
    window.addEventListener("resize", measure);
    // Fonts / late layout can shift pill edges
    const t1 = window.setTimeout(measure, 80);
    const t2 = window.setTimeout(measure, 320);

    return () => {
      mq.removeEventListener("change", onMq);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [measure]);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-[#FDF9F6]",
        "shadow-[0_8px_18px_rgba(166,122,70,0.08),0_24px_56px_rgba(166,122,70,0.12)]"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] supplier-console-map"
      />

      <div className="relative z-10 px-3 py-4 sm:px-4 sm:py-5 lg:px-5 lg:py-6">
        <div
          ref={diagramRef}
          className="relative grid grid-cols-1 gap-7 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center md:gap-2 lg:gap-3 xl:gap-4 md:min-h-[300px]"
        >
          {showLines && size.w > 0 && paths.length > 0 ? (
            <svg
              className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full md:block"
              width={size.w}
              height={size.h}
              viewBox={`0 0 ${size.w} ${size.h}`}
              preserveAspectRatio="none"
              fill="none"
              aria-hidden
            >
              {paths.map((p) => {
                const showStaticNode = [
                  "in-0",
                  "in-2",
                  "out-0",
                  "out-2",
                  "out-4",
                ].includes(p.id);
                return (
                <g key={p.id}>
                  <path
                    className={cn(
                      "supplier-flow-line",
                      p.dir === "in" ? "supplier-flow-in" : "supplier-flow-out"
                    )}
                    d={p.d}
                    stroke="#d4a574"
                    strokeWidth="1.65"
                    strokeLinecap="round"
                    opacity="0.85"
                    style={{ animationDelay: `${p.delay}s` }}
                  />
                  {showStaticNode ? (
                    <circle
                      className="supplier-flow-node"
                      cx={p.mid.x}
                      cy={p.mid.y}
                      r="3.2"
                      fill="#d4a574"
                      opacity="0.9"
                    />
                  ) : null}
                  {!reduceMotion ? (
                    <circle
                      r="3.4"
                      fill="#d4a574"
                      className="supplier-flow-travel"
                      opacity="0.95"
                    >
                      <animateMotion
                        dur={p.dir === "in" ? "2.4s" : "2.1s"}
                        begin={`${p.delay * 0.35}s`}
                        repeatCount="indefinite"
                        path={p.d}
                        keyPoints="0;1"
                        keyTimes="0;1"
                        calcMode="linear"
                      />
                    </circle>
                  ) : null}
                </g>
                );
              })}
            </svg>
          ) : null}

          {/* Suppliers — longer pills, left-aligned */}
          <div className="relative z-10 flex flex-col items-start gap-2.5 sm:gap-3 md:pr-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange font-semibold mb-0.5">
              Suppliers
            </p>
            {supplyNodes.map((node, i) => (
              <ConsolePill
                key={node.label + (node.softPrefix ?? "")}
                nodeRef={(el) => {
                  supplyRefs.current[i] = el;
                }}
                {...node}
                align="left"
              />
            ))}
          </div>

          {/* Hub */}
          <div className="relative z-10 flex flex-col items-center justify-center py-1 md:py-0 md:px-1">
            <div
              ref={hubRef}
              className="flex w-[8.5rem] sm:w-[9.5rem] flex-col items-center gap-2.5 rounded-2xl border border-orange-100 bg-white px-3 py-4 sm:px-4 sm:py-5 text-center shadow-[0_10px_28px_rgba(166,122,70,0.12)]"
            >
              <Layers
                className="h-6 w-6 text-brand-orange"
                strokeWidth={1.5}
              />
              <p className="font-tech text-[11px] sm:text-xs font-bold text-brand-dark leading-snug">
                SeatsConnect
                <br />
                Infrastructure
              </p>
            </div>
          </div>

          {/* Channels — shorter pills, right-aligned flush */}
          <div className="relative z-10 flex w-full flex-col items-stretch gap-2 sm:gap-2.5 md:items-end md:pl-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-orange font-semibold mb-0.5 text-left md:w-full md:text-right">
              Professional Channels
            </p>
            {channelNodes.map((node, i) => (
              <ConsolePill
                key={node.label}
                nodeRef={(el) => {
                  channelRefs.current[i] = el;
                }}
                {...node}
                align="right"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-4 mb-4 sm:mx-5 sm:mb-5 lg:mx-6 lg:mb-6">
        <div className="grid gap-4 rounded-2xl bg-[#F3EBE4]/px-4 py-4 sm:grid-cols-3 sm:gap-5 sm:px-5 sm:py-4">
          {statusItems.map((item) => (
            <div key={item.title} className="flex items-start gap-2.5">
              <item.icon
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                strokeWidth={1.5}
              />
              <div>
                <p className="font-tech text-xs font-bold text-brand-dark leading-tight">
                  {item.title}
                </p>
                <p className="text-[11px] text-brand-gray-text mt-0.5 leading-snug">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConsolePill({
  nodeRef,
  label,
  icon: Icon,
  softPrefix,
  align = "left",
}: {
  nodeRef?: (el: HTMLDivElement | null) => void;
  label: string;
  icon: LucideIcon;
  softPrefix?: string;
  align?: "left" | "right";
}) {
  return (
    <div
      ref={nodeRef}
      className={cn(
        "relative z-10 inline-flex items-center gap-2 rounded-full border border-orange-100/90 bg-white px-3.5 py-2.5 shadow-[0_1px_0_rgba(255,255,255,0.9),0_4px_14px_rgba(166,122,70,0.07)]",
        align === "left" &&
          "w-full max-w-[11.5rem] sm:max-w-[12.5rem] justify-start",
        align === "right" &&
          "w-fit max-w-[11rem] self-start md:ml-auto md:self-end md:flex-row-reverse"
      )}
    >
      <Icon
        className="h-3.5 w-3.5 shrink-0 text-brand-orange"
        strokeWidth={1.5}
      />
      <span className="truncate font-tech text-[11px] sm:text-xs font-semibold text-brand-dark">
        {softPrefix ? (
          <>
            <span className="font-medium text-brand-gray-text">{softPrefix}</span>{" "}
            {label}
          </>
        ) : (
          label
        )}
      </span>
    </div>
  );
}
