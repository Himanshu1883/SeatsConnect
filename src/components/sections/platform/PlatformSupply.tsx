"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  Code2,
  ConciergeBell,
  Database,
  Hotel,
  Layers,
  Link2,
  Plane,
  Puzzle,
  ShoppingCart,
  Ticket,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp, sections } = siteImages;

const connectivity: {
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Ticketing Systems",
    text: "Connect live ticket inventory into one distribution layer.",
    icon: Ticket,
    image: exp.stadium,
  },
  {
    title: "Hospitality Platforms",
    text: "Surface suites, packages and premium hospitality products.",
    icon: ConciergeBell,
    image: exp.hospitality,
  },
  {
    title: "Inventory Feeds",
    text: "Keep availability structured and continuously updated.",
    icon: Database,
    image: exp.venue,
  },
  {
    title: "Supplier APIs",
    text: "Integrate directly through supported API connectivity.",
    icon: Code2,
    image: sections.api,
  },
  {
    title: "Reservation Systems",
    text: "Align booking workflows with existing operational systems.",
    icon: CalendarDays,
    image: exp.corporate,
  },
  {
    title: "Custom Technology",
    text: "Extend connectivity for specialised supplier environments.",
    icon: Puzzle,
    image: exp.network,
  },
];

const supplyNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Ticketing", icon: Ticket },
  { label: "Hospitality", icon: ConciergeBell },
  { label: "Feeds", icon: Database },
  { label: "APIs", icon: Code2 },
];

const partnerNodes: { label: string; icon: LucideIcon }[] = [
  { label: "Travel", icon: Plane },
  { label: "Concierge", icon: ConciergeBell },
  { label: "Corporate", icon: Building2 },
  { label: "Hotels", icon: Hotel },
];

const summaryStats: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Connected Sources",
    value: "Linked",
    note: "APIs, feeds & systems",
    icon: Link2,
  },
  {
    label: "Inventory Updated",
    value: "Live",
    note: "Structured availability",
    icon: CheckCircle2,
  },
  {
    label: "Active Partners",
    value: "Approved",
    note: "Controlled distribution",
    icon: Users,
  },
  {
    label: "Orders Enabled",
    value: "Connected",
    note: "Booking & fulfilment",
    icon: ShoppingCart,
  },
];

export function PlatformSupply() {
  return (
    <HomeFrame
      id="supply"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        {/* Header + diagram */}
        <Reveal>
          <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-10">
            <div className="max-w-lg">
              <HomeKicker>Supply Connectivity</HomeKicker>
              <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.35rem]">
                Supply <span className="text-brand-orange">Connectivity.</span>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                Connect inventory through supported APIs, data feeds and custom
                integrations — without maintaining separate connections to every
                distribution partner.
              </p>
            </div>

            <SupplyInfrastructureDiagram />
          </div>
        </Reveal>

        {/* Six connectivity cards */}
        <Reveal delay={80}>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-3">
            {connectivity.map((item) => (
              <ConnectivityCard key={item.title} item={item} />
            ))}
          </div>
        </Reveal>

        {/* Bottom summary */}
        <Reveal delay={140}>
          <div className="flex flex-col gap-5 rounded-2xl border border-orange-100/90 bg-white px-4 py-4 shadow-[0_10px_28px_rgba(40,30,20,0.05)] sm:px-5 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:rounded-[1.75rem] lg:px-6 lg:py-4">
            <div className="flex min-w-0 items-start gap-3 sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_20px_rgba(255,107,0,0.28)]">
                <Layers className="h-5 w-5" strokeWidth={1.8} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-[14px] font-bold leading-snug text-brand-dark sm:text-[15px]">
                  Connect Once. Distribute Globally.
                </p>
                <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                  Connect once and reach a global network of approved
                  distribution partners.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-0 lg:shrink-0">
              {summaryStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="flex items-start gap-2.5 px-1 sm:px-3 lg:px-3.5"
                >
                  {i > 0 ? (
                    <span
                      className="mr-1 hidden h-12 w-px shrink-0 bg-orange-100 sm:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                    <stat.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
                      {stat.label}
                    </p>
                    <p className="mt-0.5 font-tech text-[15px] font-bold text-brand-dark">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] text-brand-gray-text">
                      {stat.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function ConnectivityCard({
  item,
}: {
  item: (typeof connectivity)[number];
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_8px_24px_rgba(40,30,20,0.05)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(40,30,20,0.08)]">
      <div className="relative h-28 overflow-hidden sm:h-32 xl:h-[7.25rem]">
        <Image
          src={item.image}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
        />
      </div>

      <div className="relative flex flex-1 flex-col px-3.5 pb-3.5 pt-6 sm:px-4 sm:pb-4 sm:pt-7">
        <span className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-2 border-white bg-white text-brand-orange shadow-[0_6px_16px_rgba(40,30,20,0.12)]">
          <item.icon className="h-4 w-4" strokeWidth={1.8} />
        </span>

        <h3 className="text-center font-tech text-[13px] font-bold leading-snug text-brand-dark sm:text-[14px]">
          {item.title}
        </h3>
        <p className="mt-1.5 flex-1 text-center text-[11px] leading-snug text-brand-gray-text sm:text-[12px]">
          {item.text}
        </p>

        <Link
          href={routes.joinSupplier}
          className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border border-orange-100 bg-[#faf7f3] px-3 py-2 text-[12px] font-semibold text-brand-dark transition-colors hover:border-brand-orange/35 hover:bg-brand-orange/5"
        >
          Connect
          <ArrowRight
            className="h-3.5 w-3.5 text-brand-orange"
            strokeWidth={2}
          />
        </Link>
      </div>
    </article>
  );
}

function SupplyInfrastructureDiagram() {
  return (
    <div className="overflow-hidden rounded-[1.35rem] border border-orange-100/90 bg-white p-4 shadow-[0_12px_36px_rgba(40,30,20,0.06)] sm:p-5 lg:p-6">
      <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:gap-2 lg:gap-3">
        {/* Supply */}
        <div>
          <p className="mb-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text sm:mb-3">
            Supply
          </p>
          <p className="mb-2.5 hidden text-center text-[10px] text-brand-gray-text sm:block">
            Inventory Sources
          </p>
          <div className="grid grid-cols-2 gap-2">
            {supplyNodes.map((node) => (
              <DiagramNode key={node.label} {...node} />
            ))}
          </div>
        </div>

        <FlowArrow className="mx-auto rotate-90 sm:rotate-0" />

        {/* Hub */}
        <div className="flex flex-col items-center text-center">
          <div className="relative flex h-[4.75rem] w-[4.75rem] items-center justify-center sm:h-[5.25rem] sm:w-[5.25rem]">
            <span
              className="absolute inset-0 rounded-full bg-brand-orange/15 blur-[2px]"
              aria-hidden
            />
            <span
              className="absolute inset-1 rounded-full border border-brand-orange/25 bg-brand-orange/10"
              aria-hidden
            />
            <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand-orange shadow-[0_10px_28px_rgba(255,107,0,0.28)] ring-4 ring-brand-orange/15 sm:h-16 sm:w-16">
              <Layers className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.7} />
            </span>
          </div>
          <p className="mt-2.5 font-tech text-[13px] font-bold text-brand-dark sm:text-sm">
            Seats<span className="text-brand-orange">Connect</span>™
          </p>
          <p className="mt-0.5 text-[10px] text-brand-gray-text">
            Infrastructure layer
          </p>
        </div>

        <FlowArrow className="mx-auto rotate-90 sm:rotate-0" />

        {/* Partners */}
        <div>
          <p className="mb-2 text-center font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text sm:mb-3">
            Approved Partners
          </p>
          <p className="mb-2.5 hidden text-center text-[10px] text-brand-gray-text sm:block">
            B2B Distribution Network
          </p>
          <div className="grid grid-cols-2 gap-2">
            {partnerNodes.map((node) => (
              <DiagramNode key={node.label} {...node} />
            ))}
          </div>
        </div>
      </div>

      {/* Dotted connector hint on larger screens */}
      <div
        className="mt-4 hidden items-center justify-center gap-2 border-t border-dashed border-orange-100 pt-3 sm:flex"
        aria-hidden
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange/50" />
        <span className="h-px w-10 border-t border-dashed border-brand-orange/40" />
        <span className="font-mono text-[9px] font-semibold uppercase tracking-wider text-brand-orange">
          One infrastructure layer
        </span>
        <span className="h-px w-10 border-t border-dashed border-brand-orange/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange/50" />
      </div>
    </div>
  );
}

function DiagramNode({
  label,
  icon: Icon,
}: {
  label: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border border-orange-100 bg-[#faf7f3]/80 px-2 py-2 sm:px-2.5">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange">
        <Icon className="h-3 w-3" strokeWidth={1.8} />
      </span>
      <span className="truncate font-tech text-[10px] font-semibold text-brand-dark sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]",
        className
      )}
      aria-hidden
    >
      <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.2} />
    </span>
  );
}
