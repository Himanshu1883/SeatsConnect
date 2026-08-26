"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bell,
  CalendarDays,
  Code2,
  Expand,
  Home,
  LayoutGrid,
  LayoutTemplate,
  Layers,
  Plug,
  Puzzle,
  Search,
  Settings2,
  ShieldCheck,
  Timer,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

type Tone = {
  accent: string;
  soft: string;
  text: string;
  ring: string;
};

const tones = {
  orange: {
    accent: "#ff6b00",
    soft: "rgba(255,107,0,0.12)",
    text: "text-brand-orange",
    ring: "ring-brand-orange/20",
  },
  teal: {
    accent: "#0d9488",
    soft: "rgba(13,148,136,0.12)",
    text: "text-teal-700",
    ring: "ring-teal-600/20",
  },
  purple: {
    accent: "#7c3aed",
    soft: "rgba(124,58,237,0.12)",
    text: "text-violet-700",
    ring: "ring-violet-600/20",
  },
  blue: {
    accent: "#2563eb",
    soft: "rgba(37,99,235,0.12)",
    text: "text-blue-600",
    ring: "ring-blue-600/20",
  },
} as const satisfies Record<string, Tone>;

const trustItems: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Secure by Design",
    text: "Security and controlled access at every layer.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Infrastructure",
    text: "Built for continuous monitoring and resilience.",
    icon: Timer,
  },
  {
    title: "Built to Scale",
    text: "Infrastructure that grows with demand.",
    icon: Expand,
  },
  {
    title: "Developer Friendly",
    text: "Clear docs, structured APIs and partner support.",
    icon: Settings2,
  },
];

export function PlatformTechnology() {
  return (
    <HomeFrame
      id="technology"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <HomeKicker>Technology</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.85rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.5rem]">
              Technology That Works{" "}
              <span className="text-brand-orange">in the Background.</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              SeatsConnect provides infrastructure without forcing every
              business to operate in the same way. Partners can connect through
              the access method that fits their model.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="grid gap-3 lg:grid-cols-12 lg:gap-3.5">
            <BentoCard
              className="lg:col-span-6"
              number="01"
              title="Platform"
              text="Use SeatsConnect workflows to search, quote, book and fulfil."
              href={routes.joinPartner}
              cta="Learn more"
              tone={tones.orange}
              icon={LayoutGrid}
              visual={<PlatformVisual />}
            />
            <BentoCard
              className="lg:col-span-3"
              number="02"
              title="API"
              text="Connect inventory and booking into your existing systems."
              href={routes.api}
              cta="Explore API"
              tone={tones.teal}
              icon={Code2}
              visual={<ApiVisual />}
              stack
            />
            <BentoCard
              className="lg:col-span-3"
              number="03"
              title="White Label"
              text="Deliver discovery and booking under your own brand."
              href={routes.solutionsWhiteLabel}
              cta="View options"
              tone={tones.purple}
              icon={LayoutTemplate}
              visual={<WhiteLabelVisual />}
              stack
            />
            <BentoCard
              className="lg:col-span-6"
              number="04"
              title="Embedded Solutions"
              text="Surface live availability inside customer-facing journeys."
              href={routes.contact}
              cta="See solutions"
              tone={tones.blue}
              icon={Puzzle}
              visual={<EmbeddedVisual />}
            />
            <BentoCard
              className="lg:col-span-6"
              number="05"
              title="Custom Integrations"
              text="Tailor connectivity to specialised operational requirements."
              href={routes.contact}
              cta="Discuss needs"
              tone={tones.orange}
              icon={Plug}
              visual={<CustomVisual />}
            />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,18rem)] lg:items-stretch">
            <div className="grid grid-cols-1 gap-3 rounded-2xl border border-orange-100/90 bg-[#faf7f3]/70 p-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-2">
              {trustItems.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-xl bg-white/80 px-3 py-3 lg:rounded-none lg:bg-transparent"
                >
                  {i > 0 ? (
                    <span
                      className="mr-1 hidden h-11 w-px shrink-0 bg-orange-100 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <item.icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-tech text-[13px] font-bold text-brand-dark">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={routes.api}
              className="group flex items-center gap-3 rounded-2xl bg-brand-dark px-4 py-4 text-white shadow-[0_12px_28px_rgba(26,26,26,0.18)] transition-transform hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                <Code2 className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-tech text-[15px] font-bold">Explore API</p>
                <p className="mt-0.5 text-[11px] leading-snug text-white/65">
                  Everything you need to integrate with SeatsConnect.
                </p>
              </div>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" strokeWidth={2.2} />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function BentoCard({
  number,
  title,
  text,
  href,
  cta,
  tone,
  icon: Icon,
  visual,
  className,
  stack = false,
}: {
  number: string;
  title: string;
  text: string;
  href: string;
  cta: string;
  tone: Tone;
  icon: LucideIcon;
  visual: React.ReactNode;
  className?: string;
  stack?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_10px_28px_rgba(40,30,20,0.05)]",
        className
      )}
    >
      {/* Compact copy header — always top, no wasted side space */}
      <div className="flex flex-col gap-1.5 border-b border-orange-50 px-3.5 py-2.5 sm:px-4 sm:py-3">
        <div className="flex items-center gap-2">
          <span
            className="font-mono text-[10px] font-bold"
            style={{ color: tone.accent }}
          >
            {number}
          </span>
          <span
            className={cn(
              "flex h-7 w-7 items-center justify-center rounded-lg ring-4",
              tone.ring
            )}
            style={{ backgroundColor: tone.soft, color: tone.accent }}
          >
            <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          </span>
          <h3 className="font-tech text-[15px] font-bold text-brand-dark sm:text-base">
            {title}
          </h3>
        </div>
        <div
          className={cn(
            "flex flex-col gap-1.5 sm:flex-row sm:items-end sm:justify-between",
            stack && "sm:flex-col sm:items-start"
          )}
        >
          <p className="max-w-xl text-[11px] leading-snug text-brand-gray-text sm:text-[12px]">
            {text}
          </p>
          <Link
            href={href}
            className={cn(
              "inline-flex shrink-0 items-center gap-1 text-[11px] font-semibold sm:text-[12px]",
              tone.text
            )}
          >
            {cta}
            <ArrowRight className="h-3 w-3" strokeWidth={2.2} />
          </Link>
        </div>
      </div>

      {/* Dashboard fills the rest of the card */}
      <div className="min-h-0 flex-1 bg-[#f3efe9]/70 p-2 sm:p-2.5">{visual}</div>
    </article>
  );
}

function ShotFrame({
  children,
  className,
  dark = false,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  title?: string;
}) {
  return (
    <div
      className={cn(
        "flex h-full min-h-[12rem] flex-col overflow-hidden rounded-xl border shadow-[0_8px_22px_rgba(40,30,20,0.08)]",
        dark ? "border-white/10 bg-[#111]" : "border-orange-100/90 bg-white",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center justify-between gap-2 border-b px-2.5 py-1.5",
          dark
            ? "border-white/10 bg-white/[0.04]"
            : "border-orange-100 bg-[#f7f4f0]"
        )}
      >
        <div className="flex min-w-0 items-center gap-1.5">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8b4a0]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f0d9a8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#b8d4b8]" />
          </span>
          {title ? (
            <span
              className={cn(
                "truncate font-mono text-[8px] font-semibold uppercase tracking-wide",
                dark ? "text-white/45" : "text-brand-gray-text"
              )}
            >
              {title}
            </span>
          ) : null}
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1 font-mono text-[8px] font-semibold",
            dark ? "text-emerald-400/80" : "text-emerald-700"
          )}
        >
          <span className="h-1 w-1 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>
      <div className="min-h-0 flex-1">{children}</div>
    </div>
  );
}

function PlatformVisual() {
  const rows = [
    {
      name: "Concert · London",
      meta: "O2 Arena · Hospitality",
      status: "Available",
      img: exp.concert,
    },
    {
      name: "VIP Hospitality",
      meta: "Club suite · Dinner",
      status: "Quoted",
      img: exp.hospitality,
    },
    {
      name: "Premier Fixture",
      meta: "Category 1 · Pair",
      status: "Hold",
      img: exp.football,
    },
  ] as const;

  return (
    <ShotFrame title="app.seatsconnect.com · Search" className="min-h-[12.5rem]">
      <div className="grid h-full min-h-[12.5rem] grid-cols-[2rem_minmax(0,1fr)_7rem] sm:grid-cols-[2.25rem_minmax(0,1fr)_7.75rem]">
        <div className="flex flex-col items-center gap-1.5 border-r border-orange-100 bg-[#faf7f3] py-2">
          {[Home, Search, CalendarDays, Users, Bell].map((Icon, i) => (
            <span
              key={i}
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded-md",
                i === 1
                  ? "bg-brand-orange text-white"
                  : "bg-white text-brand-gray-text"
              )}
            >
              <Icon className="h-2.5 w-2.5" strokeWidth={2} />
            </span>
          ))}
        </div>

        <div className="flex min-w-0 flex-col p-2">
          <div className="mb-1.5 flex items-center justify-between gap-2">
            <p className="font-tech text-[10px] font-bold text-brand-dark">
              Search Events
            </p>
            <span className="rounded-full bg-brand-orange/10 px-1.5 py-0.5 font-mono text-[7px] font-semibold text-brand-orange">
              3 results
            </span>
          </div>
          <div className="mb-1.5 flex items-center gap-1.5 rounded-md border border-orange-100 bg-[#faf7f3] px-1.5 py-1">
            <Search className="h-2.5 w-2.5 text-brand-orange" strokeWidth={2} />
            <span className="font-mono text-[8px] text-brand-gray-text">
              London · Hospitality · Sep
            </span>
          </div>
          <div className="mb-1.5 flex flex-wrap gap-1">
            {["Sport", "Concert", "Hospitality"].map((f, i) => (
              <span
                key={f}
                className={cn(
                  "rounded-full px-1.5 py-0.5 font-mono text-[7px] font-semibold",
                  i === 0
                    ? "bg-brand-orange text-white"
                    : "bg-orange-50 text-brand-gray-text"
                )}
              >
                {f}
              </span>
            ))}
          </div>
          <ul className="min-h-0 flex-1 space-y-1 overflow-hidden">
            {rows.map((row) => (
              <li
                key={row.name}
                className="flex items-center gap-1.5 rounded-md border border-orange-50 bg-white px-1.5 py-1"
              >
                <span className="relative h-7 w-7 shrink-0 overflow-hidden rounded">
                  <Image
                    src={row.img}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="28px"
                  />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[9px] font-semibold text-brand-dark">
                    {row.name}
                  </span>
                  <span className="block truncate text-[7px] text-brand-gray-text">
                    {row.meta}
                  </span>
                </span>
                <span className="rounded-full bg-emerald-50 px-1 py-0.5 font-mono text-[7px] font-semibold uppercase text-emerald-700">
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col border-l border-orange-100 bg-[#faf7f3] p-2">
          <p className="font-mono text-[7px] uppercase tracking-wide text-brand-gray-text">
            Quote summary
          </p>
          <p className="mt-0.5 font-tech text-[11px] font-bold text-brand-dark">
            Selected items
          </p>
          <ul className="mt-1.5 flex-1 space-y-1">
            {[
              { label: "VIP suite ×2", value: "Hold" },
              { label: "Dinner package", value: "Added" },
              { label: "Transfers", value: "Optional" },
            ].map((line) => (
              <li
                key={line.label}
                className="rounded-md border border-orange-100/80 bg-white px-1.5 py-1"
              >
                <p className="text-[8px] font-medium text-brand-dark">
                  {line.label}
                </p>
                <p className="text-[7px] text-brand-orange">{line.value}</p>
              </li>
            ))}
          </ul>
          <div className="mt-1.5 border-t border-orange-100 pt-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[8px] text-brand-gray-text">Status</span>
              <span className="font-tech text-[10px] font-bold text-brand-dark">
                Ready
              </span>
            </div>
            <span className="mt-1.5 inline-flex w-full items-center justify-center rounded-md bg-brand-orange px-2 py-1 font-mono text-[8px] font-bold text-white">
              View Quote
            </span>
          </div>
        </div>
      </div>
    </ShotFrame>
  );
}

function ApiVisual() {
  return (
    <ShotFrame dark title="api.seatsconnect.com" className="min-h-[12.5rem]">
      <div className="flex h-full min-h-[12.5rem] flex-col">
        <div className="flex items-center gap-1.5 border-b border-white/10 px-2.5 py-1.5">
          <span className="rounded bg-brand-orange/25 px-1.5 py-0.5 font-mono text-[8px] font-bold text-brand-orange">
            POST
          </span>
          <span className="truncate font-mono text-[9px] text-white/70">
            /v1/inventory/search
          </span>
          <span className="ml-auto rounded bg-emerald-500/15 px-1.5 py-0.5 font-mono text-[8px] font-semibold text-emerald-400">
            200 OK
          </span>
        </div>
        <div className="flex gap-1 border-b border-white/10 px-2 py-1">
          {["Request", "Response", "Headers"].map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "rounded px-2 py-0.5 font-mono text-[8px] font-semibold",
                i === 1 ? "bg-white/15 text-white" : "text-white/40"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
        <div className="min-h-0 flex-1 space-y-0.5 overflow-hidden p-2.5 font-mono text-[9px] leading-[1.55]">
          <p className="text-white/35">{"{"}</p>
          <p className="pl-2 text-emerald-400/90">
            &quot;status&quot;: <span className="text-white/80">&quot;ok&quot;</span>,
          </p>
          <p className="pl-2 text-emerald-400/90">
            &quot;eventId&quot;:{" "}
            <span className="text-white/80">&quot;EVT-2201&quot;</span>,
          </p>
          <p className="pl-2 text-emerald-400/90">
            &quot;venue&quot;:{" "}
            <span className="text-white/80">&quot;O2 Arena&quot;</span>,
          </p>
          <p className="pl-2 text-emerald-400/90">
            &quot;date&quot;:{" "}
            <span className="text-white/80">&quot;2026-09-12&quot;</span>,
          </p>
          <p className="pl-2 text-emerald-400/90">
            &quot;currency&quot;: <span className="text-white/80">&quot;GBP&quot;</span>,
          </p>
          <p className="pl-2 text-emerald-400/90">
            &quot;items&quot;: <span className="text-white/80">[</span>
          </p>
          <p className="pl-4 text-white/65">
            {"{"} &quot;section&quot;: &quot;VIP&quot;, &quot;qty&quot;: 4,
            &quot;status&quot;: &quot;live&quot; {"}"},
          </p>
          <p className="pl-4 text-white/65">
            {"{"} &quot;section&quot;: &quot;Cat1&quot;, &quot;qty&quot;: 12,
            &quot;status&quot;: &quot;live&quot; {"}"}
          </p>
          <p className="pl-2 text-white/80">],</p>
          <p className="pl-2 text-emerald-400/90">
            &quot;fulfilment&quot;:{" "}
            <span className="text-white/80">&quot;connected&quot;</span>
          </p>
          <p className="text-white/35">{"}"}</p>
        </div>
        <div className="flex items-center justify-between border-t border-white/10 px-2.5 py-1.5 font-mono text-[8px] text-white/40">
          <span>latency · 42ms</span>
          <span>schema · v1</span>
        </div>
      </div>
    </ShotFrame>
  );
}

function WhiteLabelVisual() {
  return (
    <ShotFrame title="yourbrand.com · Events" className="min-h-[12.5rem]">
      <div className="flex h-full min-h-[12.5rem] flex-col">
        <div className="relative h-[5rem] shrink-0 overflow-hidden sm:h-[5.5rem]">
          <Image
            src={exp.destination}
            alt=""
            fill
            className="object-cover"
            sizes="320px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1028]/90 via-[#1a1028]/45 to-[#1a1028]/20" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between px-2.5 py-1.5">
            <span className="font-tech text-[10px] font-bold text-white">
              Your Brand
            </span>
            <span className="rounded bg-white/15 px-1.5 py-0.5 font-mono text-[7px] text-white/80">
              White label
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-2.5">
            <p className="font-tech text-[12px] font-bold text-white">
              Discover live events
            </p>
            <div className="mt-1.5 flex items-center gap-1.5 rounded-md border border-white/25 bg-white/15 px-2 py-1.5 backdrop-blur-sm">
              <Search className="h-3 w-3 text-white/80" strokeWidth={2} />
              <span className="font-mono text-[9px] text-white/70">
                Search city, event, date…
              </span>
            </div>
          </div>
        </div>
        <div className="flex min-h-0 flex-1 flex-col p-2.5">
          <div className="mb-2 flex items-center justify-between">
            <p className="font-mono text-[9px] font-semibold uppercase tracking-wide text-violet-700">
              Popular Events
            </p>
            <span className="text-[9px] font-semibold text-brand-gray-text">
              View all
            </span>
          </div>
          <div className="grid min-h-0 flex-1 grid-cols-3 gap-1.5">
            {[
              { src: exp.concert, label: "Concerts" },
              { src: exp.football, label: "Sport" },
              { src: exp.hospitality, label: "VIP" },
            ].map((card) => (
              <div
                key={card.label}
                className="flex min-h-0 flex-col overflow-hidden rounded-lg border border-orange-50"
              >
                <span className="relative h-11 shrink-0 overflow-hidden sm:h-12">
                  <Image
                    src={card.src}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </span>
                <div className="bg-white px-1.5 py-1.5">
                  <p className="font-tech text-[9px] font-bold text-brand-dark">
                    {card.label}
                  </p>
                  <p className="text-[8px] text-brand-gray-text">Book now</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShotFrame>
  );
}

function EmbeddedVisual() {
  return (
    <div className="grid h-full min-h-[12.5rem] gap-2.5 sm:grid-cols-2">
      <div className="flex h-full min-h-[12.5rem] flex-col overflow-hidden rounded-xl border border-blue-100 bg-white shadow-[0_8px_18px_rgba(37,99,235,0.08)]">
        <div className="flex items-center justify-between border-b border-blue-50 px-3 py-2">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-wide text-blue-600">
            Upcoming Match
          </p>
          <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[7px] font-semibold text-emerald-700">
            Live
          </span>
        </div>
        <div className="relative h-16 shrink-0 overflow-hidden sm:h-[4.5rem]">
          <Image
            src={exp.stadium}
            alt=""
            fill
            className="object-cover"
            sizes="240px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-2 left-2 font-tech text-[12px] font-bold text-white">
            Stadium Night
          </p>
        </div>
        <div className="flex flex-1 flex-col p-3">
          <ul className="space-y-1.5">
            {[
              { seat: "Category 1", note: "Available" },
              { seat: "Hospitality", note: "Limited" },
              { seat: "VIP Lounge", note: "Available" },
            ].map((row) => (
              <li
                key={row.seat}
                className="flex items-center justify-between rounded-md border border-blue-50 px-2 py-1.5"
              >
                <span className="text-[10px] font-medium text-brand-dark">
                  {row.seat}
                </span>
                <span className="font-mono text-[8px] font-semibold text-blue-600">
                  {row.note}
                </span>
              </li>
            ))}
          </ul>
          <span className="mt-auto inline-flex w-full items-center justify-center rounded-md bg-blue-600 px-2 py-2 font-mono text-[10px] font-bold text-white">
            Book Now
          </span>
        </div>
      </div>

      <ShotFrame dark title="embed snippet" className="min-h-[12.5rem]">
        <div className="flex h-full min-h-[12.5rem] flex-col p-3 font-mono text-[9px] leading-[1.6] text-white/70">
          <p className="text-white/35">{"// drop into your journey"}</p>
          <p className="mt-1 text-blue-300">&lt;div</p>
          <p className="pl-3">
            id=<span className="text-emerald-300">&quot;sc-widget&quot;</span>
          </p>
          <p className="pl-3">
            data-event=
            <span className="text-emerald-300">&quot;EVT-8841&quot;</span>
          </p>
          <p className="pl-3">
            data-theme=
            <span className="text-emerald-300">&quot;light&quot;</span>
          </p>
          <p className="pl-3">
            data-locale=
            <span className="text-emerald-300">&quot;en-GB&quot;</span>
          </p>
          <p className="text-blue-300">&gt;&lt;/div&gt;</p>
          <p className="mt-3 text-white/35">{"// load connector"}</p>
          <p className="text-violet-300">
            &lt;script src=
            <span className="text-emerald-300">
              &quot;cdn.seatsconnect.com/embed.js&quot;
            </span>
            &gt;
          </p>
          <p className="text-violet-300">&lt;/script&gt;</p>
          <div className="mt-auto rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 text-[8px] text-white/45">
            Widget sync · live availability
          </div>
        </div>
      </ShotFrame>
    </div>
  );
}

function CustomVisual() {
  const left = [
    { label: "ERP", note: "Orders" },
    { label: "CRM", note: "Accounts" },
    { label: "PMS", note: "Inventory" },
  ] as const;
  const right = [
    { label: "Finance", note: "Settlements" },
    { label: "BI Tools", note: "Reporting" },
    { label: "Custom DB", note: "Data sync" },
  ] as const;

  return (
    <ShotFrame title="integration map" className="min-h-[12.5rem]">
      <div className="flex h-full min-h-[12.5rem] flex-col bg-[#faf7f3] p-2.5 sm:p-3">
        <div className="mb-3 flex items-center justify-between">
          <p className="font-tech text-[11px] font-bold text-brand-dark">
            Connected systems
          </p>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] font-semibold text-emerald-700">
            6 active bridges
          </span>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4">
          <div className="flex h-full flex-col justify-center gap-2">
            {left.map((node) => (
              <div
                key={node.label}
                className="rounded-lg border border-orange-100 bg-white px-2.5 py-2 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] font-bold text-brand-dark">
                    {node.label}
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-0.5 text-[9px] text-brand-gray-text">
                  {node.note}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-2 px-1">
            <span className="h-6 w-px border-l border-dashed border-brand-orange/45" />
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_18px_rgba(255,107,0,0.3)] ring-4 ring-brand-orange/15">
              <Layers className="h-5 w-5" strokeWidth={1.8} />
            </span>
            <p className="text-center font-tech text-[11px] font-bold text-brand-dark">
              Seats<span className="text-brand-orange">Connect</span>
            </p>
            <p className="text-center font-mono text-[8px] text-brand-gray-text">
              Secure bridge
            </p>
            <span className="h-6 w-px border-l border-dashed border-brand-orange/45" />
          </div>

          <div className="flex h-full flex-col justify-center gap-2">
            {right.map((node) => (
              <div
                key={node.label}
                className="rounded-lg border border-orange-100 bg-white px-2.5 py-2 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="font-mono text-[11px] font-bold text-brand-dark">
                    {node.label}
                  </p>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="mt-0.5 text-[9px] text-brand-gray-text">
                  {node.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ShotFrame>
  );
}
