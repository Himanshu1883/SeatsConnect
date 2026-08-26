"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
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
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

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

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}[] = [
  {
    icon: Globe2,
    title: "Global Reach",
    description: "Connect event inventory with professional demand.",
    image: exp.stadium,
  },
  {
    icon: ShieldCheck,
    title: "Controlled Distribution",
    description:
      "Support distribution according to approved partners and markets.",
    image: exp.hospitality,
  },
  {
    icon: Code2,
    title: "API Connectivity",
    description: "Connect inventory directly into the infrastructure.",
    image: exp.venue,
  },
  {
    icon: Users,
    title: "Channel Expansion",
    description: "Reach travel, concierge, corporate, and other channels.",
    image: exp.travel,
  },
  {
    icon: FileText,
    title: "Reduced Administration",
    description: "Reduce reliance on manual requests and spreadsheets.",
    image: exp.corporate,
  },
  {
    icon: PieChart,
    title: "Distribution Visibility",
    description: "Create a structured view of inventory availability.",
    image: exp.concert,
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

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 60}>
            <article className="group home-card-lift h-full overflow-hidden rounded-2xl border border-orange-100 bg-white">
              <CardMedia
                src={feature.image}
                alt={feature.title}
                heightClass="h-32 sm:h-36"
              />
              <div className="p-5 sm:p-6">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-orange/15 font-mono text-[11px] font-semibold tracking-wide text-brand-orange">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <feature.icon
                    className="h-5 w-5 text-brand-orange"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-tech text-lg font-bold text-brand-dark mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-gray-text leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <Button href={routes.joinSupplier}>
          Become a Supply Partner
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Reveal>
    </HomeFrame>
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
