"use client";

import { useId, useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Briefcase,
  Building2,
  ConciergeBell,
  Layers,
  Megaphone,
  Plane,
  Share2,
  Target,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const supplyNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Venues", icon: Building2 },
  { label: "Promoters", icon: Megaphone },
  { label: "Hospitality Providers", icon: ConciergeBell },
];

const channelNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Travel", icon: Plane },
  { label: "Concierge", icon: Bell },
  { label: "Corporate", icon: Briefcase },
];

const gallery = [
  { src: exp.football, alt: "Stadium" },
  { src: exp.concert, alt: "Concert" },
  { src: exp.hospitality, alt: "Hospitality" },
  { src: exp.formula1, alt: "Motorsport" },
  { src: exp.suite, alt: "Resort" },
  { src: exp.corporate, alt: "Corporate" },
] as const;

export function HomeProblem() {
  const [connected, setConnected] = useState(false);

  return (
    <HomeFrame variant="plain">
      <div className="grid items-start gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] xl:gap-12 2xl:gap-16">
        <Reveal>
          <HomeKicker>The Challenge</HomeKicker>
          <h2 className="mt-3 mb-5 font-tech text-3xl font-bold leading-[1.12] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            Global Event{" "}
            <span className="text-brand-orange">Distribution</span> Is Still
            Fragmented.
          </h2>
          <p className="mb-6 leading-relaxed text-brand-gray-text">
            Event inventory still moves through disconnected systems, one-off
            relationships and manual processes.
          </p>

          <div
            role="group"
            aria-label="Distribution graph state"
            className="inline-flex rounded-full border border-orange-100 bg-white p-1 shadow-[0_1px_0_rgba(255,255,255,0.8)]"
          >
            <button
              type="button"
              aria-pressed={!connected}
              onClick={() => setConnected(false)}
              className={cn(
                "rounded-full px-4 py-1.5 font-tech text-xs font-semibold transition-all",
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
                "rounded-full px-4 py-1.5 font-tech text-xs font-semibold transition-all",
                connected
                  ? "bg-brand-dark text-white shadow-sm"
                  : "text-brand-gray-text hover:text-brand-dark"
              )}
            >
              Connected
            </button>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <ChallengeNetwork />
        </Reveal>
      </div>

      <Reveal delay={140}>
        <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)]">
          <div className="flex items-center gap-3 rounded-2xl border border-orange-100/90 bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(40,30,20,0.05)] sm:px-5 sm:py-4">
            <Share2
              className="h-5 w-5 shrink-0 text-brand-orange"
              strokeWidth={1.5}
            />
            <p className="text-sm leading-snug">
              <span className="font-tech font-bold text-brand-dark">
                Connect Once. Distribute Globally.
              </span>{" "}
              <span className="text-brand-gray-text">
                Through approved channels.
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3 rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_10px_28px_rgba(40,30,20,0.05)] sm:p-4">
            <Target
              className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange"
              strokeWidth={1.5}
            />
            <div>
              <p className="font-tech text-sm font-bold leading-snug text-brand-dark">
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
      </Reveal>

      <Reveal delay={220}>
        <div className="problem-slant-strip mt-10 lg:mt-12">
          {gallery.map((item) => (
            <figure key={item.alt} className="problem-slant-card group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 45vw, 18vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </HomeFrame>
  );
}

function ChallengeNetwork() {
  const uid = useId();

  return (
    <div className="relative min-h-[300px] min-w-0 w-full overflow-hidden rounded-3xl sm:min-h-[340px] lg:min-h-[360px] xl:min-h-[380px]">
      {/* Static map backdrop — no motion */}
      <svg
        viewBox="0 0 720 400"
        className="pointer-events-none absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <pattern
            id={`${uid}-dots`}
            width="13"
            height="13"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="0.95" fill="#c5bbb0" />
          </pattern>
        </defs>
        <g fill={`url(#${uid}-dots)`} opacity="0.5">
          <ellipse cx="160" cy="175" rx="140" ry="105" />
          <ellipse cx="340" cy="150" rx="125" ry="95" />
          <ellipse cx="520" cy="185" rx="135" ry="100" />
          <ellipse cx="380" cy="270" rx="150" ry="80" />
        </g>
        {[
          "M90 210 C 200 110, 380 95, 580 185",
          "M110 260 C 250 170, 420 155, 610 230",
          "M140 130 C 280 155, 450 230, 600 250",
          "M180 290 C 300 220, 480 180, 640 160",
        ].map((d, i) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="#ff6b00"
            strokeWidth="1.15"
            opacity={0.22 + (i % 3) * 0.06}
            strokeDasharray="4 7"
          />
        ))}
        {[
          [130, 195],
          [250, 140],
          [380, 175],
          [500, 150],
          [580, 210],
          [320, 250],
          [460, 240],
        ].map(([cx, cy], i) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={i % 2 === 0 ? 3.4 : 2.5}
            fill="#ff6b00"
            opacity={0.5}
          />
        ))}
      </svg>

      <div className="relative z-10 flex h-full min-h-[300px] min-w-0 w-full flex-col items-stretch justify-center gap-4 px-3 py-6 sm:min-h-[340px] sm:flex-row sm:items-center sm:gap-2 sm:px-3 lg:min-h-[360px] lg:gap-3 lg:px-4 xl:min-h-[380px]">
        <SideCard title="Supply" items={supplyNodes} />

        {/* Static dashed connectors + hub */}
        <div className="relative z-20 flex min-w-0 shrink-0 items-center justify-center px-1 sm:px-1.5 lg:px-2">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center sm:flex"
            aria-hidden
          >
            <div className="mx-1 h-px w-full border-t border-dashed border-brand-orange/55" />
          </div>

          <div className="problem-hub relative flex h-[9.5rem] w-[9.5rem] shrink-0 flex-col items-center justify-center rounded-full border border-white bg-white px-4 text-center shadow-[0_0_0_10px_rgba(255,107,0,0.06),0_18px_42px_rgba(40,30,20,0.1)] sm:h-[10.25rem] sm:w-[10.25rem] lg:h-[10.75rem] lg:w-[10.75rem] xl:h-[11.25rem] xl:w-[11.25rem] xl:px-5 2xl:h-[12.5rem] 2xl:w-[12.5rem]">
            <span className="mb-2 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange text-white sm:mb-2.5 sm:h-10 sm:w-10 xl:h-11 xl:w-11">
              <Layers className="h-5 w-5 xl:h-6 xl:w-6" strokeWidth={1.5} />
            </span>
            <p className="font-tech text-[11px] font-bold tracking-[0.04em] text-brand-dark sm:text-xs xl:text-sm">
              SEATSCONNECT
            </p>
            <p className="mt-1 max-w-[8.5rem] text-[10px] leading-snug text-brand-gray-text sm:mt-1.5 sm:text-[11px]">
              Connect Once.
              <br />
              Distribute Globally.
            </p>
          </div>
        </div>

        <SideCard title="Professional B2B Channels" items={channelNodes} />
      </div>
    </div>
  );
}

function SideCard({
  title,
  items,
}: {
  title: string;
  items: { label: string; icon: LucideIcon }[];
}) {
  return (
    <article className="relative z-10 min-w-0 w-full rounded-2xl border border-orange-100/80 bg-white p-3.5 shadow-[0_14px_34px_rgba(40,30,20,0.07)] sm:w-auto sm:max-w-[12rem] sm:flex-1 sm:p-4 lg:max-w-[11.25rem] xl:max-w-[12rem] 2xl:max-w-[13rem] 2xl:p-[1.1rem]">
      <p className="mb-3 font-mono text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-orange sm:text-[10px]">
        {title}
      </p>
      <ul className="space-y-2.5">
        {items.map((item) => (
          <li key={item.label} className="flex min-w-0 items-center gap-2.5">
            <item.icon
              className="h-4 w-4 shrink-0 text-brand-dark/70"
              strokeWidth={1.6}
            />
            <span className="min-w-0 truncate font-tech text-xs font-semibold text-brand-dark sm:text-[13px]">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </article>
  );
}
