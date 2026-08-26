"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Calendar,
  Check,
  Clock,
  Eye,
  FileText,
  Globe2,
  Layers,
  Lock,
  MapPin,
  Package,
  Share2,
  Shield,
  ShieldCheck,
  SlidersHorizontal,
  Store,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const controlStrip = [
  { src: exp.suite, label: "Hospitality" },
  { src: exp.venue, label: "Venues" },
  { src: exp.football, label: "Sports" },
  { src: exp.corporate, label: "Corporate" },
] as const;

type Rule = { label: string; icon: LucideIcon };

const leftRules: Rule[] = [
  { label: "Approved partner", icon: BadgeCheck },
  { label: "Partner type", icon: Users },
  { label: "Territory", icon: MapPin },
  { label: "Market", icon: Store },
  { label: "Event", icon: Calendar },
];

const rightRules: Rule[] = [
  { label: "Product", icon: Package },
  { label: "Allocation", icon: Layers },
  { label: "Availability", icon: Clock },
  { label: "Commercial terms", icon: FileText },
  { label: "Distribution channel", icon: Share2 },
];

const features: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Shield,
    title: "Set Your Rules",
    text: "Define who can access your inventory and under what terms.",
  },
  {
    icon: SlidersHorizontal,
    title: "Control Access",
    text: "Manage partner access by market, channel or commercial terms.",
  },
  {
    icon: Eye,
    title: "Maintain Visibility",
    text: "Real-time visibility into how your inventory is distributed and performed.",
  },
  {
    icon: Lock,
    title: "Protect Value",
    text: "Ensure the right inventory reaches the right partners at the right time.",
  },
  {
    icon: Globe2,
    title: "Expand Confidently",
    text: "Grow your reach while keeping full control of your distribution strategy.",
  },
];

type FlowPath = {
  id: string;
  d: string;
  delay: number;
  dir: "in" | "out";
};

function curveToHub(
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  fromLeft: boolean
): string {
  const span = Math.abs(ex - sx);
  const pull = Math.max(span * 0.48, 28);
  const c1x = fromLeft ? sx + pull : sx - pull;
  const c2x = fromLeft ? ex - span * 0.16 : ex + span * 0.16;
  return `M ${sx.toFixed(1)} ${sy.toFixed(1)} C ${c1x.toFixed(1)} ${sy.toFixed(1)}, ${c2x.toFixed(1)} ${ey.toFixed(1)}, ${ex.toFixed(1)} ${ey.toFixed(1)}`;
}

export function HomeControlledDist() {
  return (
    <HomeFrame id="distribution" variant="plain">
      <div className="mb-8 grid items-start gap-10 lg:mb-10 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-12 xl:gap-14">
        <Reveal>
          <HomeKicker>Controlled Distribution</HomeKicker>
          <h2 className="font-tech text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem] font-bold leading-[1.12] tracking-tight mt-3 mb-3">
            <span className="text-brand-dark">Distribution</span>{" "}
            <span className="text-brand-orange">With Control.</span>
          </h2>
          <div className="mb-5 h-1 w-14 rounded-full bg-brand-orange" />
          <p className="text-brand-gray-text leading-relaxed mb-3">
            SeatsConnect is designed to help suppliers expand their reach while
            maintaining greater control over how inventory is made available.
          </p>
          <p className="text-brand-gray-text leading-relaxed mb-6">
            Depending on the individual supply agreement and technical
            configuration, distribution can be structured around access rules,
            approved partners, markets, channels and commercial terms.
          </p>
          <div className="flex items-start gap-3 rounded-2xl bg-[#F3EBE4] px-4 py-4">
            <ShieldCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
              strokeWidth={1.75}
            />
            <p className="font-tech text-sm font-semibold text-brand-dark leading-snug">
              Reach more customers without losing control of your distribution
              strategy.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <RulesConsole />
        </Reveal>
      </div>

      <Reveal delay={180}>
        <ExperienceStrip items={controlStrip} className="mb-6" />
        <div className="rounded-2xl bg-[#F3EBE4] px-5 py-5 sm:px-6 sm:py-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {features.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-brand-orange shadow-[0_1px_4px_rgba(166,122,70,0.08)]">
                  <item.icon className="h-4 w-4" strokeWidth={1.6} />
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

function RulesConsole() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);
  const leftRefs = useRef<(HTMLElement | null)[]>([]);
  const rightRefs = useRef<(HTMLElement | null)[]>([]);
  const [paths, setPaths] = useState<FlowPath[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showLines, setShowLines] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const measure = useCallback(() => {
    const diagram = diagramRef.current;
    const hub = hubRef.current;
    if (!diagram || !hub) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
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

    const hubCx = hRect.left - dRect.left + hRect.width / 2;
    const hubCy = hRect.top - dRect.top + hRect.height / 2;
    const hubR = hRect.width / 2 + 2;
    const next: FlowPath[] = [];

    const lefts = leftRefs.current.filter(Boolean) as HTMLElement[];
    lefts.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const sx = r.right - dRect.left;
      const sy = r.top - dRect.top + r.height / 2;
      const angle = Math.atan2(sy - hubCy, sx - hubCx);
      const ex = hubCx + Math.cos(angle) * hubR;
      const ey = hubCy + Math.sin(angle) * hubR;
      next.push({
        id: `l-${i}`,
        dir: "in",
        delay: i * 0.12,
        d: curveToHub(sx, sy, ex, ey, true),
      });
    });

    const rights = rightRefs.current.filter(Boolean) as HTMLElement[];
    rights.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const sx = r.left - dRect.left;
      const sy = r.top - dRect.top + r.height / 2;
      const angle = Math.atan2(sy - hubCy, sx - hubCx);
      const ex = hubCx + Math.cos(angle) * hubR;
      const ey = hubCy + Math.sin(angle) * hubR;
      next.push({
        id: `r-${i}`,
        dir: "out",
        delay: i * 0.12,
        d: curveToHub(sx, sy, ex, ey, false),
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
    if (hubRef.current) ro.observe(hubRef.current);
    leftRefs.current.forEach((el) => el && ro.observe(el));
    rightRefs.current.forEach((el) => el && ro.observe(el));

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
      className={cn(
        "relative rounded-[1.6rem] border border-orange-100/90 bg-white p-5 sm:p-6",
        "shadow-[0_8px_18px_rgba(166,122,70,0.08),0_24px_56px_rgba(166,122,70,0.12)]"
      )}
    >
      <div className="mb-5 flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
            <Lock className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-brand-orange font-semibold truncate">
            DISTRIBUTION.RULES
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 font-mono text-[10px] font-semibold text-emerald-700">
          <Check className="h-3 w-3" strokeWidth={2.5} />
          10 / 10 applied
        </span>
      </div>

      <div className="lg:hidden">
        <div className="mb-5 flex justify-center">
          <HubVisual />
        </div>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
          {[...leftRules, ...rightRules].map((rule) => (
            <RuleBadge key={rule.label} rule={rule} />
          ))}
        </div>
      </div>

      <div
        ref={diagramRef}
        className="relative hidden min-h-[22rem] grid-cols-[minmax(0,1fr)_minmax(10rem,12.5rem)_minmax(0,1fr)] items-center gap-x-2 xl:gap-x-3 lg:grid"
      >
        {showLines && size.w > 0 && paths.length > 0 ? (
          <svg
            className="pointer-events-none absolute inset-0 z-[1] h-full w-full overflow-visible"
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
                    "dist-flow-line",
                    p.dir === "in" ? "dist-flow-in" : "dist-flow-out"
                  )}
                  d={p.d}
                  stroke="#d4a574"
                  strokeWidth="1.55"
                  strokeLinecap="round"
                  opacity="0.72"
                  style={{ animationDelay: `${p.delay}s` }}
                />
                {!reduceMotion ? (
                  <circle
                    r="2.8"
                    fill="#d4a574"
                    className="dist-flow-travel"
                    opacity="0.9"
                  >
                    <animateMotion
                      dur="2.35s"
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
          </svg>
        ) : null}

        <div className="relative z-10 flex flex-col gap-2.5">
          {leftRules.map((rule, i) => (
            <RuleBadge
              key={rule.label}
              rule={rule}
              refCallback={(el) => {
                leftRefs.current[i] = el;
              }}
            />
          ))}
        </div>

        <div className="relative z-10 flex items-center justify-center">
          <HubVisual hubRef={hubRef} />
        </div>

        <div className="relative z-10 flex flex-col gap-2.5">
          {rightRules.map((rule, i) => (
            <RuleBadge
              key={rule.label}
              rule={rule}
              refCallback={(el) => {
                rightRefs.current[i] = el;
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function HubVisual({
  hubRef,
}: {
  hubRef?: RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className="relative flex aspect-square w-[min(100%,13.5rem)] items-center justify-center">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle
          className="dist-flow-ring"
          cx="100"
          cy="100"
          r="94"
          stroke="#d4a574"
          strokeWidth="1"
          opacity="0.22"
        />
        <circle
          className="dist-flow-ring dist-flow-ring-mid"
          cx="100"
          cy="100"
          r="70"
          stroke="#d4a574"
          strokeWidth="1"
          opacity="0.2"
        />
        <circle
          className="dist-flow-ring dist-flow-ring-inner"
          cx="100"
          cy="100"
          r="46"
          stroke="#d4a574"
          strokeWidth="1"
          opacity="0.28"
        />
      </svg>
      <div
        ref={hubRef}
        className="dist-flow-hub relative z-10 flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-brand-orange text-white"
        aria-hidden
      >
        <ShieldCheck className="h-7 w-7" strokeWidth={1.7} />
      </div>
    </div>
  );
}

function RuleBadge({
  rule,
  refCallback,
}: {
  rule: Rule;
  refCallback?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={refCallback}
      className="relative z-10 flex w-full items-center gap-2 rounded-xl border border-orange-100/90 bg-white px-2.5 py-2 shadow-[0_1px_2px_rgba(166,122,70,0.06),0_4px_12px_rgba(166,122,70,0.05)] sm:gap-2.5 sm:px-3 sm:py-2.5"
    >
      <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
        <rule.icon className="h-3.5 w-3.5" strokeWidth={1.75} />
      </span>
      <span className="min-w-0 flex-1 truncate font-tech text-[12px] sm:text-[13px] font-semibold text-brand-dark leading-none">
        {rule.label}
      </span>
      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
        <Check className="h-3 w-3" strokeWidth={2.75} />
      </span>
    </div>
  );
}
