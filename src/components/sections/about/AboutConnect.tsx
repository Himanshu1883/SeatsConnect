"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  CheckCircle2,
  Layers,
  Store,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const sides: {
  index: string;
  title: string;
  text: string;
  points: string[];
  icon: LucideIcon;
  image: string;
  status: string;
}[] = [
  {
    index: "01",
    title: "Professional supply",
    text: "Venues, promoters, hospitality providers and approved suppliers connecting inventory once.",
    points: ["Tickets", "Hospitality", "Allocations"],
    icon: Store,
    image: exp.stadium,
    status: "Connected",
  },
  {
    index: "02",
    title: "Professional demand",
    text: "Travel, concierge, corporate, hotel and sports-travel businesses already serving customers.",
    points: ["Travel", "Concierge", "Corporate"],
    icon: Users,
    image: exp.travel,
    status: "Distributing",
  },
];

const outcomes: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Connected",
    text: "One infrastructure layer between both sides of distribution.",
    icon: Layers,
  },
  {
    title: "Controlled",
    text: "Approved partners and structured commercial access only.",
    icon: CheckCircle2,
  },
  {
    title: "Efficient",
    text: "Fewer fragmented integrations across markets and channels.",
    icon: Building2,
  },
];

export function AboutConnect() {
  return (
    <HomeFrame id="connect" variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2">
              <HomeKicker>Infrastructure Layer</HomeKicker>
              <span className="inline-flex items-center gap-1.5 font-mono text-[9px] font-semibold uppercase tracking-wide text-emerald-700">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="sc-connect-ping absolute inset-0 rounded-full bg-emerald-500 opacity-60" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                Live
              </span>
            </span>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
              Connecting Supply and <span className="text-brand-orange">Demand.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Our platform connects venues, promoters, hospitality providers and
              approved suppliers with professional B2B distribution partners
              serving customers internationally — making event distribution more
              connected, controlled and efficient.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="grid gap-3 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-0">
            <SideCard side={sides[0]!} align="left" />
            <Connector />
            <SideCard side={sides[1]!} align="right" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <OutcomesStrip />
        </Reveal>
      </div>
    </HomeFrame>
  );
}

/* ------------------------------------------------------------------ */
/* Side card                                                           */
/* ------------------------------------------------------------------ */

function SideCard({
  side,
  align,
}: {
  side: (typeof sides)[number];
  align: "left" | "right";
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-orange-100/90 bg-white shadow-[0_14px_40px_rgba(40,30,20,0.06)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(40,30,20,0.1)]">
      <div className="relative h-40 overflow-hidden sm:h-44">
        <Image
          src={side.image}
          alt={side.title}
          fill
          sizes="(max-width: 1024px) 100vw, 40vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
        />

        <span className="absolute left-3.5 top-3.5 font-mono text-[10px] font-bold tracking-[0.14em] text-white/70">
          {side.index}
        </span>
        <span className="absolute right-3.5 top-3.5 flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 font-mono text-[9px] font-semibold text-brand-dark backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          {side.status}
        </span>

        <span className="absolute bottom-3.5 left-3.5 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.32)]">
          <side.icon className="h-5 w-5" strokeWidth={1.9} />
        </span>
      </div>

      <div className={cn("flex flex-1 flex-col p-5 sm:p-6", align === "right" && "lg:text-right")}>
        <h3 className="font-tech text-lg font-bold text-brand-dark">{side.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-brand-gray-text">{side.text}</p>
        <div
          className={cn(
            "mt-4 flex flex-wrap gap-1.5",
            align === "right" && "lg:justify-end"
          )}
        >
          {side.points.map((point) => (
            <span
              key={point}
              className="rounded-full border border-orange-100 bg-[#faf7f3] px-2.5 py-1 text-[11px] font-medium text-brand-dark"
            >
              {point}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Connector — animated link between supply and demand                 */
/* ------------------------------------------------------------------ */

function Connector() {
  return (
    <div className="relative flex items-center justify-center py-1 lg:w-20 lg:py-0">
      {/* track */}
      <div className="h-10 w-px bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent lg:h-px lg:w-full lg:bg-gradient-to-r" />

      {/* traveling pulse */}
      <span className="sc-connect-pulse absolute h-1.5 w-1.5 rounded-full bg-brand-orange shadow-[0_0_8px_2px_rgba(255,107,0,0.4)]" />

      {/* hub */}
      <span className="absolute flex h-11 w-11 items-center justify-center rounded-full border border-brand-orange/30 bg-white text-brand-orange shadow-[0_10px_24px_rgba(255,107,0,0.16)]">
        <Layers className="h-[18px] w-[18px]" strokeWidth={1.9} />
      </span>

      <style jsx>{`
        .sc-connect-pulse {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: sc-pulse-y 2.6s linear infinite;
        }
        @keyframes sc-pulse-y {
          0% {
            top: 0;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          45% {
            top: calc(50% - 22px);
            opacity: 1;
          }
          55% {
            top: calc(50% - 22px);
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @media (min-width: 1024px) {
          .sc-connect-pulse {
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            animation: sc-pulse-x 2.6s linear infinite;
          }
          @keyframes sc-pulse-x {
            0% {
              left: 0;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            45% {
              left: calc(50% - 22px);
              opacity: 1;
            }
            55% {
              left: calc(50% - 22px);
              opacity: 1;
            }
            90% {
              opacity: 1;
            }
            100% {
              left: 100%;
              opacity: 0;
            }
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-connect-pulse {
            animation: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Outcomes — console-style metrics strip instead of 3 loose cards     */
/* ------------------------------------------------------------------ */

function OutcomesStrip() {
  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_10px_28px_rgba(40,30,20,0.05)]">
      <div className="flex items-center gap-2 border-b border-orange-100 bg-[#fbf8f4] px-4 py-2.5 sm:px-5">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        <p className="font-mono text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
          Infrastructure outcomes
        </p>
      </div>

      <div className="grid divide-y divide-orange-100/80 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {outcomes.map((item) => (
          <div key={item.title} className="flex items-start gap-3.5 p-4 sm:p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.9} />
            </span>
            <div className="min-w-0">
              <h3 className="font-tech text-[15px] font-bold text-brand-dark">{item.title}</h3>
              <p className="mt-1 text-[13px] leading-snug text-brand-gray-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx global>{`
        .sc-connect-ping {
          animation: sc-connect-ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        @keyframes sc-connect-ping {
          75%,
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .sc-connect-ping {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}