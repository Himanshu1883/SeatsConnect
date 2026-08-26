"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Box,
  Calendar,
  ConciergeBell,
  Database,
  Layers,
  MessageSquare,
  Plane,
  Puzzle,
  Shield,
  ShoppingCart,
  Tag,
  Ticket,
  Truck,
  User,
  Users,
  Zap,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

type Pill = { label: string; icon: LucideIcon };

type HubFeature = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
};

type FlowPath = {
  id: string;
  d: string;
  delay: number;
  dir: "in" | "bridge" | "out";
};

type FlowDot = {
  id: string;
  x: number;
  y: number;
  r: number;
};

const FLOW_STROKE = "#d4a574";
const HUB_SIZE = 48;

function fmt(n: number) {
  return n.toFixed(1);
}

/**
 * Organic curly-brace / sideways-Y cubic.
 * flattenAt "end"  = merge into hub (leave pill, sweep, long flatten into node)
 * flattenAt "start" = fan from hub (long flatten out of node, then sweep to pill)
 */
function braceCurve(
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  flattenAt: "start" | "end"
): string {
  const dx = ex - sx;
  const adx = Math.abs(dx);
  const ady = Math.abs(ey - sy);
  const dir = Math.sign(dx || 1);
  const stay = 0.16 + Math.min(0.2, (ady / Math.max(adx, 1)) * 0.24);
  const pad = Math.min(22, Math.max(12, adx * 0.2));

  if (flattenAt === "end") {
    const c1x = sx + dx * stay;
    const c2x = sx + dx * 0.4;
    const fx = ex - dir * pad;
    return `M ${fmt(sx)} ${fmt(sy)} C ${fmt(c1x)} ${fmt(sy)}, ${fmt(c2x)} ${fmt(ey)}, ${fmt(fx)} ${fmt(ey)} L ${fmt(ex)} ${fmt(ey)}`;
  }

  const fx = sx + dir * pad;
  const c1x = sx + dx * 0.6;
  const c2x = sx + dx * (1 - stay);
  return `M ${fmt(sx)} ${fmt(sy)} L ${fmt(fx)} ${fmt(sy)} C ${fmt(c1x)} ${fmt(sy)}, ${fmt(c2x)} ${fmt(ey)}, ${fmt(ex)} ${fmt(ey)}`;
}

const supplyPills: Pill[] = [
  { label: "Ticketing systems", icon: Ticket },
  { label: "Inventory feeds", icon: Database },
  { label: "Hospitality platforms", icon: ConciergeBell },
];

const hubFeatures: HubFeature[] = [
  {
    title: "Events",
    subtitle: "All events in one place",
    icon: Calendar,
  },
  {
    title: "Inventory",
    subtitle: "Unified live inventory",
    icon: Box,
  },
  {
    title: "Availability",
    subtitle: "Real-time availability",
    icon: BarChart3,
  },
  {
    title: "Quotes",
    subtitle: "Create and manage quotes",
    icon: MessageSquare,
  },
  {
    title: "Orders",
    subtitle: "Manage and track all orders",
    icon: ShoppingCart,
  },
  {
    title: "Fulfilment",
    subtitle: "Seamless fulfilment",
    icon: Truck,
  },
];

const demandPills: Pill[] = [
  { label: "Travel platforms", icon: Plane },
  { label: "Concierge systems", icon: Bell },
  { label: "White-label journeys", icon: Tag },
];

const footerFeatures: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: "Standardised",
    text: "Consistent API standards across all integrations",
  },
  {
    icon: Zap,
    title: "Secure",
    text: "Enterprise-grade security and data protection",
  },
  {
    icon: Puzzle,
    title: "Flexible",
    text: "Built to adapt to your systems and workflows",
  },
  {
    icon: BarChart3,
    title: "Scalable",
    text: "Infrastructure that grows with your business",
  },
];

function ApiPill({
  pill,
  className,
  refCallback,
}: {
  pill: Pill;
  className?: string;
  refCallback?: (el: HTMLElement | null) => void;
}) {
  return (
    <div
      ref={refCallback}
      className={cn(
        "flex items-center gap-2.5 rounded-full border border-orange-100/90 bg-white px-3 py-2 shadow-[0_1px_2px_rgba(166,122,70,0.06)]",
        className
      )}
    >
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-orange/12">
        <pill.icon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.75} />
      </span>
      <span className="font-tech text-[13px] font-semibold text-brand-dark leading-none truncate">
        {pill.label}
      </span>
    </div>
  );
}

function HubFeatureCell({ feature }: { feature: HubFeature }) {
  return (
    <div className="flex items-start gap-2.5 min-w-0">
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-orange/12 mt-0.5">
        <feature.icon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.75} />
      </span>
      <div className="min-w-0">
        <p className="font-tech text-[13px] font-bold text-brand-dark leading-tight">
          {feature.title}
        </p>
        <p className="text-[11px] text-brand-gray-text mt-0.5 leading-snug">
          {feature.subtitle}
        </p>
      </div>
    </div>
  );
}

function CardHeader({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange/15">
        <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.6} />
      </span>
      <div className="min-w-0 pt-0.5">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-orange font-semibold">
          {title}
        </p>
        <p className="text-sm text-brand-gray-text mt-0.5 leading-snug">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

function HubNode({
  refCallback,
  className,
  style,
}: {
  refCallback?: (el: HTMLDivElement | null) => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      ref={refCallback}
      className={cn(
        "api-flow-hub relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#d4a574]",
        className
      )}
      style={style}
      aria-hidden
    >
      <Layers className="h-5 w-5" strokeWidth={1.7} />
    </div>
  );
}

function ConnectivityDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const supplyGutterRef = useRef<HTMLDivElement | null>(null);
  const demandGutterRef = useRef<HTMLDivElement | null>(null);
  const centerRef = useRef<HTMLDivElement | null>(null);
  const supplyRefs = useRef<(HTMLElement | null)[]>([]);
  const demandRefs = useRef<(HTMLElement | null)[]>([]);
  const [paths, setPaths] = useState<FlowPath[]>([]);
  const [dots, setDots] = useState<FlowDot[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showLines, setShowLines] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hubTop, setHubTop] = useState({ supply: "50%", demand: "50%" });

  const measure = useCallback(() => {
    const diagram = diagramRef.current;
    const supplyGutter = supplyGutterRef.current;
    const demandGutter = demandGutterRef.current;
    const center = centerRef.current;
    if (!diagram || !supplyGutter || !demandGutter || !center) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    setShowLines(desktop);
    if (!desktop) {
      setPaths([]);
      setDots([]);
      return;
    }

    const dRect = diagram.getBoundingClientRect();
    const w = dRect.width;
    const h = dRect.height;
    if (w < 8 || h < 8) return;
    setSize({ w, h });

    const supplies = supplyRefs.current.filter(Boolean) as HTMLElement[];
    const demands = demandRefs.current.filter(Boolean) as HTMLElement[];
    if (supplies.length === 0 || demands.length === 0) return;

    const sg = supplyGutter.getBoundingClientRect();
    const dg = demandGutter.getBoundingClientRect();
    const cRect = center.getBoundingClientRect();
    const hubR = HUB_SIZE / 2;

    const supplyPts = supplies.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.right - dRect.left,
        y: r.top - dRect.top + r.height / 2,
      };
    });
    const demandPts = demands.map((el) => {
      const r = el.getBoundingClientRect();
      return {
        x: r.left - dRect.left,
        y: r.top - dRect.top + r.height / 2,
      };
    });

    const sCy =
      (supplyPts[0].y + supplyPts[supplyPts.length - 1].y) / 2;
    const dCy =
      (demandPts[0].y + demandPts[demandPts.length - 1].y) / 2;
    const sCx = sg.left - dRect.left + sg.width / 2;
    const dCx = dg.left - dRect.left + dg.width / 2;

    setHubTop({
      supply: `${sCy - (sg.top - dRect.top)}px`,
      demand: `${dCy - (dg.top - dRect.top)}px`,
    });

    const sHubLeft = sCx - hubR;
    const sHubRight = sCx + hubR;
    const dHubLeft = dCx - hubR;
    const dHubRight = dCx + hubR;

    const cLeftX = cRect.left - dRect.left;
    const cRightX = cRect.right - dRect.left;

    const next: FlowPath[] = [];
    const nextDots: FlowDot[] = [];

    supplyPts.forEach((pt, i) => {
      next.push({
        id: `in-${i}`,
        dir: "in",
        delay: i * 0.14,
        d: braceCurve(pt.x, pt.y, sHubLeft, sCy, "end"),
      });
      nextDots.push({ id: `in-dot-${i}`, x: pt.x, y: pt.y, r: 3 });
    });

    next.push({
      id: "bridge-l",
      dir: "bridge",
      delay: 0.08,
      d: `M ${fmt(sHubRight)} ${fmt(sCy)} L ${fmt(cLeftX)} ${fmt(sCy)}`,
    });
    nextDots.push({
      id: "trunk-l",
      x: sHubRight + 18,
      y: sCy,
      r: 2.6,
    });

    next.push({
      id: "bridge-r",
      dir: "bridge",
      delay: 0.16,
      d: `M ${fmt(cRightX)} ${fmt(dCy)} L ${fmt(dHubLeft)} ${fmt(dCy)}`,
    });
    nextDots.push({
      id: "trunk-r",
      x: dHubLeft - 18,
      y: dCy,
      r: 2.6,
    });

    demandPts.forEach((pt, i) => {
      next.push({
        id: `out-${i}`,
        dir: "out",
        delay: i * 0.14,
        d: braceCurve(dHubRight, dCy, pt.x, pt.y, "start"),
      });
      nextDots.push({ id: `out-dot-${i}`, x: pt.x, y: pt.y, r: 3 });
    });

    setPaths(next);
    setDots(nextDots);
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
    if (centerRef.current) ro.observe(centerRef.current);
    if (supplyGutterRef.current) ro.observe(supplyGutterRef.current);
    if (demandGutterRef.current) ro.observe(demandGutterRef.current);
    supplyRefs.current.forEach((el) => el && ro.observe(el));
    demandRefs.current.forEach((el) => el && ro.observe(el));

    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 80);
    const t2 = window.setTimeout(measure, 320);
    const t3 = window.setTimeout(measure, 700);

    return () => {
      mq.removeEventListener("change", onMq);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [measure]);

  return (
    <div
      ref={diagramRef}
      className="relative grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,0.95fr)_3.25rem_minmax(0,1.2fr)_3.25rem_minmax(0,0.95fr)] lg:items-stretch lg:gap-x-3 xl:gap-x-5"
    >
      {showLines && size.w > 0 && paths.length > 0 ? (
        <svg
          className="pointer-events-none absolute inset-0 z-[5] hidden h-full w-full overflow-visible lg:block"
          width={size.w}
          height={size.h}
          viewBox={`0 0 ${size.w} ${size.h}`}
          preserveAspectRatio="none"
          fill="none"
          aria-hidden
        >
          {paths.map((p) => (
            <g key={p.id}>
              <path
                className={cn(
                  "api-flow-line",
                  p.dir === "in" && "api-flow-in",
                  p.dir === "out" && "api-flow-out",
                  p.dir === "bridge" && "api-flow-bridge"
                )}
                d={p.d}
                stroke={FLOW_STROKE}
                strokeWidth="1.65"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.92"
                style={{ animationDelay: `${p.delay}s` }}
              />
              {!reduceMotion ? (
                <circle
                  r="2.6"
                  fill={FLOW_STROKE}
                  className="api-flow-travel"
                  opacity="0.95"
                >
                  <animateMotion
                    dur={p.dir === "bridge" ? "1.85s" : "2.4s"}
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
          ))}
          {dots.map((dot) => (
            <circle
              key={dot.id}
              cx={dot.x}
              cy={dot.y}
              r={dot.r}
              fill={FLOW_STROKE}
              className="api-flow-endpoint"
            />
          ))}
        </svg>
      ) : null}

      {/* SUPPLY */}
      <article className="relative z-10 flex h-full flex-col rounded-xl border border-orange-100/90 bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(166,122,70,0.08)]">
        <CardHeader
          icon={Box}
          title="Supply"
          subtitle="Connect inventory from multiple sources."
        />
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-2.5">
          {supplyPills.map((pill, i) => (
            <ApiPill
              key={pill.label}
              pill={pill}
              refCallback={(el) => {
                supplyRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </article>

      {/* Supply → SeatsConnect hub */}
      <div
        ref={supplyGutterRef}
        className="relative z-20 hidden self-stretch lg:block"
        aria-hidden
      >
        <HubNode
          className="absolute left-1/2"
          style={{ top: hubTop.supply, transform: "translate(-50%, -50%)" }}
        />
      </div>

      <div className="flex lg:hidden justify-center -my-1" aria-hidden>
        <HubNode className="h-9 w-9" />
      </div>

      {/* SEATSCONNECT */}
      <article
        ref={centerRef}
        className="api-flow-center relative z-10 rounded-xl border border-brand-orange/45 bg-white p-5 sm:p-6 shadow-[0_0_0_1px_rgba(212,165,116,0.12),0_6px_28px_rgba(166,122,70,0.14)]"
      >
        <CardHeader
          icon={Layers}
          title="SeatsConnect"
          subtitle="One infrastructure layer. Multiple capabilities."
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-4">
          {hubFeatures.map((feature) => (
            <HubFeatureCell key={feature.title} feature={feature} />
          ))}
        </div>
      </article>

      {/* SeatsConnect → Demand hub */}
      <div
        ref={demandGutterRef}
        className="relative z-20 hidden self-stretch lg:block"
        aria-hidden
      >
        <HubNode
          className="absolute left-1/2"
          style={{ top: hubTop.demand, transform: "translate(-50%, -50%)" }}
        />
      </div>

      <div className="flex lg:hidden justify-center -my-1" aria-hidden>
        <HubNode className="h-9 w-9" />
      </div>

      {/* DEMAND */}
      <article className="relative z-10 flex h-full flex-col rounded-xl border border-orange-100/90 bg-white p-5 sm:p-6 shadow-[0_4px_18px_rgba(166,122,70,0.08)]">
        <CardHeader
          icon={Users}
          title="Demand"
          subtitle="Distribute inventory through professional channels."
        />
        <div className="flex min-h-0 flex-1 flex-col justify-center gap-2.5">
          {demandPills.map((pill, i) => (
            <ApiPill
              key={pill.label}
              pill={pill}
              refCallback={(el) => {
                demandRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </article>
    </div>
  );
}

export function HomeApi() {
  return (
    <HomeFrame id="api" tinted variant="grid">
      <Reveal>
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-14">
          <HomeKicker>API Infrastructure</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark leading-tight mt-3 mb-4">
            Built to <span className="text-brand-orange">Connect.</span>
          </h2>
          <p className="text-brand-gray-text leading-relaxed">
            SeatsConnect is built around API connectivity. Our infrastructure is
            designed to connect ticketing systems, inventory feeds, hospitality
            systems and professional distribution platforms through one B2B
            network.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <ConnectivityDiagram />
      </Reveal>

      <Reveal delay={160}>
        <div className="text-center mt-10 lg:mt-12">
          <Button href={routes.api}>
            <User className="h-4 w-4" strokeWidth={1.75} />
            Explore API Connectivity
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Reveal>

      <Reveal delay={220}>
        <div className="mt-10 lg:mt-12 rounded-2xl border border-orange-100/80 bg-white/70 px-5 py-5 sm:px-7 sm:py-6 shadow-[0_2px_12px_rgba(166,122,70,0.05)]">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
            {footerFeatures.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12">
                  <item.icon
                    className="h-4 w-4 text-brand-orange"
                    strokeWidth={1.6}
                  />
                </span>
                <div className="min-w-0">
                  <p className="font-tech text-sm font-bold text-brand-dark leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-brand-gray-text mt-1 leading-snug">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
