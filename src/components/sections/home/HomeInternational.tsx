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
  Box,
  Building2,
  CheckCircle2,
  ChevronRight,
  Compass,
  Globe2,
  Landmark,
  Layers,
  LayoutGrid,
  Mountain,
  Share2,
  ShieldCheck,
  Sun,
  Ticket,
  Truck,
  Users,
  Waves,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal, useCycle } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const regionStrip = [
  { src: exp.destination, label: "Destinations" },
  { src: exp.stadium, label: "Venues" },
  { src: exp.formula1, label: "Motorsport" },
  { src: exp.concert, label: "Concerts" },
] as const;

const FLOW_STROKE = "#d4a574";

type Region = {
  name: string;
  icon: LucideIcon;
};

type FlowPath = {
  id: string;
  d: string;
  delay: number;
};

type Highlight = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type WorkflowStep = {
  label: string;
  icon: LucideIcon;
};

const regions: Region[] = [
  { name: "Europe", icon: Landmark },
  { name: "Middle East", icon: Sun },
  { name: "Asia", icon: Building2 },
  { name: "Americas", icon: Mountain },
  { name: "Africa", icon: Compass },
  { name: "Australasia", icon: Waves },
];

const highlights: Highlight[] = [
  {
    icon: Globe2,
    title: "Global coverage",
    text: "Inventory connected across international markets",
  },
  {
    icon: Users,
    title: "Professional buyers",
    text: "Travel, concierge, corporate, hospitality, sports travel",
  },
  {
    icon: ShieldCheck,
    title: "Approved access",
    text: "Distribution through trusted partner channels",
  },
];

const workflow: WorkflowStep[] = [
  { label: "Inventory Connected", icon: Box },
  { label: "Distribution Active", icon: Share2 },
  { label: "Bookings Flowing", icon: Ticket },
  { label: "Fulfilment Delivered", icon: Truck },
];

function fmt(n: number) {
  return n.toFixed(1);
}

function project(lon: number, lat: number) {
  return {
    x: ((lon + 180) / 360) * 1000,
    y: ((90 - lat) / 180) * 500,
  };
}

function poly(points: [number, number][]) {
  return points
    .map(([lon, lat]) => {
      const { x, y } = project(lon, lat);
      return `${fmt(x)},${fmt(y)}`;
    })
    .join(" ");
}

const CONTINENTS: [number, number][][] = [
  // North America
  [
    [-168, 64],
    [-141, 70],
    [-107, 68],
    [-88, 74],
    [-56, 60],
    [-55, 51],
    [-68, 47],
    [-80, 25],
    [-97, 26],
    [-110, 23],
    [-117, 32],
    [-125, 49],
    [-153, 58],
    [-166, 60],
  ],
  // Greenland
  [
    [-73, 77],
    [-44, 83],
    [-20, 81],
    [-22, 70],
    [-44, 60],
    [-62, 67],
    [-73, 76],
  ],
  // Central America
  [
    [-92, 18],
    [-84, 22],
    [-77, 8],
    [-83, 8],
    [-92, 14],
  ],
  // South America
  [
    [-81, 12],
    [-70, 12],
    [-60, 8],
    [-50, 0],
    [-35, -7],
    [-40, -22],
    [-52, -34],
    [-68, -56],
    [-76, -50],
    [-73, -18],
    [-81, 0],
  ],
  // Europe
  [
    [-10, 36],
    [-9, 43],
    [-5, 48],
    [-6, 58],
    [5, 61],
    [12, 66],
    [24, 71],
    [31, 69],
    [40, 64],
    [36, 54],
    [29, 42],
    [19, 36],
    [12, 38],
    [3, 43],
    [-8, 43],
  ],
  // UK & Ireland
  [
    [-10, 51],
    [-6, 55],
    [-1, 58],
    [1, 52],
    [-5, 50],
  ],
  // Africa
  [
    [-17, 32],
    [-12, 28],
    [-16, 12],
    [8, 4],
    [12, -18],
    [19, -35],
    [32, -34],
    [40, -16],
    [51, 11],
    [43, 12],
    [33, 31],
    [25, 32],
    [10, 37],
    [-5, 36],
  ],
  // Madagascar
  [
    [43, -12],
    [50, -15],
    [47, -26],
    [43, -25],
  ],
  // Middle East
  [
    [27, 31],
    [36, 37],
    [48, 30],
    [59, 25],
    [57, 14],
    [44, 12],
    [32, 22],
  ],
  // Asia
  [
    [40, 42],
    [40, 60],
    [60, 70],
    [90, 72],
    [130, 71],
    [160, 66],
    [178, 62],
    [142, 50],
    [145, 42],
    [130, 32],
    [122, 21],
    [109, 14],
    [100, 8],
    [94, 20],
    [80, 9],
    [72, 8],
    [66, 24],
    [60, 25],
    [48, 36],
  ],
  // Japan
  [
    [130, 31],
    [140, 35],
    [145, 44],
    [140, 43],
    [131, 34],
  ],
  // Indonesia / SE islands
  [
    [95, 5],
    [120, 6],
    [140, -3],
    [131, -8],
    [115, -9],
    [95, -5],
  ],
  // Australia
  [
    [113, -22],
    [126, -12],
    [136, -11],
    [146, -15],
    [153, -25],
    [150, -38],
    [139, -38],
    [128, -34],
    [115, -35],
    [113, -26],
  ],
  // New Zealand
  [
    [166, -34],
    [178, -37],
    [176, -47],
    [166, -45],
  ],
];

function curveToHub(
  sx: number,
  sy: number,
  ex: number,
  ey: number,
  col: number
) {
  const dx = ex - sx;
  const dy = ey - sy;
  const bulge = (col - 1) * 32;
  const c1x = sx + dx * 0.28 + bulge;
  const c1y = sy + dy * 0.12;
  const c2x = sx + dx * 0.72 + bulge * 0.25;
  const c2y = sy + dy * 0.78;
  return `M ${fmt(sx)} ${fmt(sy)} C ${fmt(c1x)} ${fmt(c1y)}, ${fmt(c2x)} ${fmt(c2y)}, ${fmt(ex)} ${fmt(ey)}`;
}

function pointInPoly(lon: number, lat: number, pts: [number, number][]) {
  let inside = false;
  for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
    const [xi, yi] = pts[i];
    const [xj, yj] = pts[j];
    const intersect =
      yi > lat !== yj > lat &&
      lon < ((xj - xi) * (lat - yi)) / (yj - yi + Number.EPSILON) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
}

const GLOBE_LAND: { lon: number; lat: number }[] = (() => {
  const pts: { lon: number; lat: number }[] = [];
  for (let lat = -55; lat <= 78; lat += 3.2) {
    for (let lon = -180; lon < 180; lon += 3.2) {
      if (CONTINENTS.some((polyPts) => pointInPoly(lon, lat, polyPts))) {
        pts.push({ lon, lat });
      }
    }
  }
  return pts;
})();

function DottedWorldMap() {
  return (
    <svg
      className="intl-flow-map pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <pattern
          id="intl-flow-map-dots"
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.15" fill="#d4a574" />
        </pattern>
      </defs>
      {CONTINENTS.map((pts, i) => (
        <polygon
          key={i}
          points={poly(pts)}
          fill="url(#intl-flow-map-dots)"
        />
      ))}
    </svg>
  );
}

function AliveGlobe({ reduceMotion }: { reduceMotion: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let rot = 18;
    const tilt = 0.38;
    const cosT = Math.cos(tilt);
    const sinT = Math.sin(tilt);

    const paint = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      if (w < 8 || h < 8) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      if (canvas.width !== Math.round(w * dpr) || canvas.height !== Math.round(h * dpr)) {
        canvas.width = Math.round(w * dpr);
        canvas.height = Math.round(h * dpr);
      }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const R = Math.min(w, h) * 0.42;
      const rotRad = (rot * Math.PI) / 180;

      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(212,165,116,0.22)";
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      const project3 = (lonDeg: number, latDeg: number) => {
        const lon = (lonDeg * Math.PI) / 180 + rotRad;
        const lat = (latDeg * Math.PI) / 180;
        const x = Math.cos(lat) * Math.sin(lon);
        const y0 = Math.sin(lat);
        const z0 = Math.cos(lat) * Math.cos(lon);
        const y = y0 * cosT - z0 * sinT;
        const z = y0 * sinT + z0 * cosT;
        return { x, y, z };
      };

      ctx.lineWidth = 0.8;
      ctx.strokeStyle = "rgba(212,165,116,0.16)";
      for (let mer = -180; mer < 180; mer += 30) {
        ctx.beginPath();
        let started = false;
        for (let lat = -80; lat <= 80; lat += 4) {
          const p = project3(mer, lat);
          if (p.z < 0.02) {
            started = false;
            continue;
          }
          const px = cx + p.x * R;
          const py = cy - p.y * R;
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }
      for (let lat = -60; lat <= 60; lat += 30) {
        ctx.beginPath();
        let started = false;
        for (let lon = -180; lon <= 180; lon += 6) {
          const p = project3(lon, lat);
          if (p.z < 0.02) {
            started = false;
            continue;
          }
          const px = cx + p.x * R;
          const py = cy - p.y * R;
          if (!started) {
            ctx.moveTo(px, py);
            started = true;
          } else {
            ctx.lineTo(px, py);
          }
        }
        ctx.stroke();
      }

      for (const pt of GLOBE_LAND) {
        const p = project3(pt.lon, pt.lat);
        if (p.z < 0.04) continue;
        const alpha = 0.12 + p.z * 0.42;
        ctx.fillStyle = `rgba(212,165,116,${alpha})`;
        ctx.beginPath();
        ctx.arc(cx + p.x * R, cy - p.y * R, 1.05 + p.z * 0.55, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const loop = () => {
      paint();
      if (!reduceMotion) rot = (rot + 0.08) % 360;
      raf = window.requestAnimationFrame(loop);
    };

    const ro = new ResizeObserver(() => paint());
    ro.observe(canvas);
    paint();
    if (!reduceMotion) raf = window.requestAnimationFrame(loop);

    return () => {
      ro.disconnect();
      window.cancelAnimationFrame(raf);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="intl-flow-globe pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden
    />
  );
}

function HubNode({
  hubRef,
}: {
  hubRef: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div className="relative flex h-[9.25rem] w-[9.25rem] items-center justify-center sm:h-[10.5rem] sm:w-[10.5rem] lg:h-[11.5rem] lg:w-[11.5rem]">
      <svg
        className="pointer-events-none absolute inset-[12%] h-[76%] w-[76%]"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden
      >
        <circle
          className="intl-flow-ring"
          cx="100"
          cy="100"
          r="94"
          stroke="#d4a574"
          strokeWidth="1.1"
          opacity="0.28"
        />
        <circle
          className="intl-flow-ring intl-flow-ring-mid"
          cx="100"
          cy="100"
          r="70"
          stroke="#d4a574"
          strokeWidth="1"
          opacity="0.24"
        />
        <circle
          className="intl-flow-ring intl-flow-ring-inner"
          cx="100"
          cy="100"
          r="46"
          stroke="#d4a574"
          strokeWidth="1"
          opacity="0.32"
        />
      </svg>
      <div
        ref={hubRef}
        className="intl-flow-hub relative z-10 flex h-[3.65rem] w-[3.65rem] items-center justify-center rounded-full bg-white text-[#d4a574] sm:h-16 sm:w-16"
        aria-hidden
      >
        <Layers className="h-7 w-7" strokeWidth={1.6} />
      </div>
    </div>
  );
}

function RegionCard({
  region,
  routing,
  cardRef,
  onSelect,
}: {
  region: Region;
  routing: boolean;
  cardRef: (el: HTMLButtonElement | null) => void;
  onSelect: () => void;
}) {
  return (
    <button
      ref={cardRef}
      type="button"
      aria-pressed={routing}
      onClick={onSelect}
      className={cn(
        "relative z-10 flex w-full items-center gap-2 rounded-xl border bg-white px-2.5 py-2 text-left shadow-[0_2px_10px_rgba(166,122,70,0.07)] transition-colors sm:gap-2.5 sm:px-3 sm:py-2.5",
        routing
          ? "border-brand-orange/55"
          : "border-orange-100/90 hover:border-brand-orange/35"
      )}
    >
      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
        <region.icon className="h-4 w-4" strokeWidth={1.7} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate font-tech text-[12px] font-bold leading-tight text-brand-dark sm:text-[13px]">
          {region.name}
        </span>
        <span className="mt-0.5 flex items-center gap-1.5">
          <span
            className={cn(
              "font-mono text-[8px] font-semibold uppercase tracking-[0.14em]",
              routing ? "text-brand-orange" : "text-emerald-600"
            )}
          >
            {routing ? "Routing" : "Ready"}
          </span>
          <span className="flex items-center gap-[3px]" aria-hidden>
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-1 w-1 rounded-full",
                  routing
                    ? i < 3
                      ? "bg-brand-orange"
                      : "intl-flow-dot-pulse bg-brand-orange/35"
                    : "bg-emerald-500"
                )}
              />
            ))}
          </span>
        </span>
      </span>
      <ChevronRight
        className="h-3.5 w-3.5 shrink-0 text-slate-300"
        strokeWidth={2}
      />
    </button>
  );
}

function NetworkDashboard() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const hubEl = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [paths, setPaths] = useState<FlowPath[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [showLines, setShowLines] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [paused, setPaused] = useState(false);
  const [active, setActive] = useCycle(regions.length, 2200, paused);

  const measure = useCallback(() => {
    const diagram = diagramRef.current;
    const hub = hubEl.current;
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
    const hubR = hRect.width / 2 + 6;
    const next: FlowPath[] = [];

    cardRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const topRow = i < 3;
      const col = i % 3;
      const sx = r.left - dRect.left + r.width / 2;
      const sy = topRow
        ? r.bottom - dRect.top
        : r.top - dRect.top;
      const angle = Math.atan2(sy - hubCy, sx - hubCx);
      const ex = hubCx + Math.cos(angle) * hubR;
      const ey = hubCy + Math.sin(angle) * hubR;
      next.push({
        id: `r-${i}`,
        delay: i * 0.12,
        d: curveToHub(sx, sy, ex, ey, col),
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
    if (hubEl.current) ro.observe(hubEl.current);
    cardRefs.current.forEach((el) => el && ro.observe(el));

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
        "relative overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-[#FFFBF7]",
        "shadow-[0_8px_18px_rgba(166,122,70,0.08),0_24px_56px_rgba(166,122,70,0.12)]"
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <DottedWorldMap />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,251,247,0.12)_0%,rgba(255,251,247,0.48)_70%,#FFFBF7_100%)]"
      />

      <div className="relative z-10 p-3 sm:p-4 lg:p-5">
        <div ref={diagramRef} className="relative">
          <AliveGlobe reduceMotion={reduceMotion} />
          {showLines && size.w > 0 && paths.length > 0 ? (
            <svg
              className="pointer-events-none absolute inset-0 z-[1] hidden h-full w-full overflow-visible lg:block"
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
                    className="intl-flow-line"
                    d={p.d}
                    stroke={FLOW_STROKE}
                    strokeWidth="1.55"
                    strokeLinecap="round"
                    opacity="0.78"
                    style={{ animationDelay: `${p.delay}s` }}
                  />
                  {!reduceMotion ? (
                    <>
                      <circle
                        r="3.1"
                        fill={FLOW_STROKE}
                        className="intl-flow-travel"
                        opacity="0.95"
                      >
                        <animateMotion
                          dur="2.5s"
                          begin={`${p.delay * 0.35}s`}
                          repeatCount="indefinite"
                          path={p.d}
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                      <circle
                        r="2.2"
                        fill={FLOW_STROKE}
                        className="intl-flow-travel"
                        opacity="0.7"
                      >
                        <animateMotion
                          dur="2.5s"
                          begin={`${p.delay * 0.35 + 1.25}s`}
                          repeatCount="indefinite"
                          path={p.d}
                          keyPoints="0;1"
                          keyTimes="0;1"
                          calcMode="linear"
                        />
                      </circle>
                    </>
                  ) : null}
                </g>
              ))}
            </svg>
          ) : null}

          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3">
            {regions.slice(0, 3).map((region, i) => (
              <RegionCard
                key={region.name}
                region={region}
                routing={active === i}
                onSelect={() => setActive(i)}
                cardRef={(el) => {
                  cardRefs.current[i] = el;
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex items-center justify-center py-5 sm:py-6 lg:py-7">
            <HubNode
              hubRef={(el) => {
                hubEl.current = el;
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 lg:gap-3">
            {regions.slice(3).map((region, i) => (
              <RegionCard
                key={region.name}
                region={region}
                routing={active === i + 3}
                onSelect={() => setActive(i + 3)}
                cardRef={(el) => {
                  cardRefs.current[i + 3] = el;
                }}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-2 rounded-full border border-orange-100/80 bg-white/90 px-3 py-2 shadow-[0_1px_8px_rgba(166,122,70,0.06)] sm:gap-x-3 sm:px-4">
          {workflow.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2 sm:gap-3">
              {i > 0 ? (
                <span
                  className="font-mono text-[10px] font-semibold tracking-tight text-brand-orange/70"
                  aria-hidden
                >
                  &gt;&gt;
                </span>
              ) : null}
              <span className="inline-flex items-center gap-1.5">
                <step.icon
                  className="h-3.5 w-3.5 text-brand-orange"
                  strokeWidth={1.75}
                />
                <span className="font-tech text-[10px] font-semibold leading-none text-brand-dark sm:text-[11px]">
                  {step.label}
                </span>
                <CheckCircle2
                  className="h-3.5 w-3.5 text-emerald-500"
                  strokeWidth={2.2}
                />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HomeInternational() {
  return (
    <HomeFrame variant="plain">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 xl:gap-16">
        <Reveal>
          <HomeKicker>International Distribution</HomeKicker>
          <h2 className="mt-3 mb-4 font-tech text-3xl font-bold leading-[1.12] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.6rem]">
            Built for{" "}
            <span className="text-brand-orange">International</span>{" "}
            Distribution.
          </h2>
          <p className="mb-3 max-w-xl text-brand-gray-text leading-relaxed">
            Demand for major events extends far beyond the event&apos;s local
            market. SeatsConnect helps suppliers connect inventory with
            professional businesses that already serve customers
            internationally.
          </p>
          <p className="mb-7 max-w-xl text-brand-gray-text leading-relaxed">
            By bringing supply and professional distribution together through a
            connected infrastructure layer, SeatsConnect helps make global event
            distribution more efficient.
          </p>

          <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="flex items-start gap-2.5 sm:block">
                <span className="mb-2 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                  <item.icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div>
                  <p className="font-tech text-sm font-bold leading-tight text-brand-dark">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-brand-gray-text">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <ExperienceStrip items={regionStrip} className="mb-7" />

          <div className="mb-7 rounded-2xl border border-orange-100 bg-[#FFFBF7] px-4 py-3.5 sm:px-5">
            <div className="flex items-center justify-between gap-3">
              <p className="font-tech text-sm font-bold text-brand-dark">
                Global Infrastructure
              </p>
              <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="intl-flow-status-ping absolute inset-0 rounded-full bg-emerald-500" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Operational
              </span>
            </div>
            <p className="mt-1 text-[12px] text-brand-gray-text">
              Connected. Secure. Scalable.
            </p>
            <div className="mt-3 flex gap-1" aria-hidden>
              <span className="h-1.5 flex-1 rounded-full bg-brand-orange" />
              <span className="h-1.5 flex-1 rounded-full bg-brand-orange" />
              <span className="h-1.5 flex-1 rounded-full bg-brand-orange" />
            </div>
          </div>

          <Button href={routes.partners} variant="outline">
            <LayoutGrid className="h-4 w-4" strokeWidth={1.8} />
            Explore Distribution Network
            <ArrowRight className="h-4 w-4" strokeWidth={1.8} />
          </Button>
        </Reveal>

        <Reveal delay={120} className="min-w-0">
          <NetworkDashboard />
        </Reveal>
      </div>
    </HomeFrame>
  );
}
