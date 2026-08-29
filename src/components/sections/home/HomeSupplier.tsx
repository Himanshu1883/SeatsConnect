"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Code2,
  ConciergeBell,
  FileText,
  Globe2,
  Lock,
  MapPinned,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp, sections: sec, pages } = siteImages;

/** Background collage — live events, venues, hospitality, professional ops */
const controlCollage: { src: string; className: string }[] = [
  { src: pages.suppliers, className: "col-span-7 row-span-6" },
  { src: exp.football, className: "col-span-5 row-span-2 col-start-8 row-start-1" },
  { src: exp.formula1, className: "col-span-3 row-span-2 col-start-8 row-start-3" },
  { src: sec.control, className: "col-span-2 row-span-2 col-start-11 row-start-3" },
  { src: exp.tickets, className: "col-span-3 row-span-2 col-start-8 row-start-5" },
  { src: exp.suite, className: "col-span-2 row-span-2 col-start-11 row-start-5" },
];

const capabilities: {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}[] = [
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Connect event inventory with professional demand across approved markets.",
    image: exp.destination,
  },
  {
    icon: ShieldCheck,
    title: "Controlled Distribution",
    text: "Decide which partners, markets and commercial terms apply to your inventory.",
    image: exp.corporate,
  },
  {
    icon: Code2,
    title: "API Connectivity",
    text: "Connect inventory systems directly into SeatsConnect infrastructure.",
    image: exp.api,
  },
  {
    icon: Users,
    title: "Channel Expansion",
    text: "Reach travel, concierge, corporate and other professional B2B channels.",
    image: exp.travel,
  },
  {
    icon: FileText,
    title: "Reduced Administration",
    text: "Spend less time on manual requests, spreadsheets and one-off deals.",
    image: exp.hospitality,
  },
  {
    icon: BarChart3,
    title: "Distribution Visibility",
    text: "Keep a structured view of how inventory is made available to partners.",
    image: exp.network,
  },
];

const supplyTypes: {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}[] = [
  {
    icon: Building2,
    title: "Venues",
    text: "Put stadium and arena inventory into controlled B2B distribution.",
    image: exp.stadium,
  },
  {
    icon: Ticket,
    title: "Promoters",
    text: "Extend event reach without opening inventory to everyone.",
    image: exp.concert,
  },
  {
    icon: ConciergeBell,
    title: "Hospitality Providers",
    text: "Distribute premium packages through approved professional channels.",
    image: exp.hospitality,
  },
  {
    icon: BadgeCheck,
    title: "Approved Suppliers",
    text: "Connect once and keep governance over access and fulfilment.",
    image: exp.suite,
  },
];

const controlPillars: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Lock,
    title: "Who can sell",
    text: "Approved partners only — not an open marketplace.",
  },
  {
    icon: MapPinned,
    title: "Where it goes",
    text: "Markets and channels you choose to enable.",
  },
  {
    icon: ShieldCheck,
    title: "On what terms",
    text: "Commercial rules stay under your control.",
  },
];

export function HomeSupplier() {
  const [active, setActive] = useState(0);
  const current = capabilities[active] ?? capabilities[0];

  return (
    <HomeFrame id="suppliers" variant="plain" className="overflow-hidden">
      {/* Intro */}
      <Reveal>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
          <div>
            <HomeKicker>For Suppliers</HomeKicker>
            <h2 className="mt-3 max-w-2xl font-tech text-3xl font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.65rem]">
              Expand Distribution{" "}
              <span className="text-brand-orange">Without Losing Control.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-base lg:ml-auto lg:text-right">
              Connect inventory once to SeatsConnect and make it available
              through approved professional channels — while keeping control of
              access, rules and commercial terms.
            </p>
            <div className="mt-5 lg:flex lg:justify-end">
              <Button href={routes.joinSupplier} className="rounded-full px-6">
                Connect Your Inventory
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Capability spotlight — unique interactive panel, not a console */}
      <Reveal delay={80}>
        <div className="mt-12 grid overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_18px_50px_rgba(40,30,20,0.07)] lg:mt-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[420px]">
            <Image
              key={current.image}
              src={current.image}
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover supplier-cap-image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-orange">
                Capability {String(active + 1).padStart(2, "0")}
              </p>
              <p className="mt-2 font-tech text-2xl font-bold text-white sm:text-3xl">
                {current.title}
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                {current.text}
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-1.5 bg-[#faf7f3] p-3 sm:p-4 lg:p-5">
            {capabilities.map((cap, i) => (
              <button
                key={cap.title}
                type="button"
                onClick={() => setActive(i)}
                aria-pressed={i === active}
                className={cn(
                  "group flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all sm:px-4 sm:py-3.5",
                  i === active
                    ? "bg-white shadow-[0_10px_28px_rgba(40,30,20,0.08)] ring-1 ring-brand-orange/25"
                    : "hover:bg-white/70"
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                    i === active
                      ? "bg-brand-orange text-white"
                      : "bg-brand-orange/10 text-brand-orange"
                  )}
                >
                  <cap.icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <span className="min-w-0">
                  <span className="font-tech text-sm font-bold text-brand-dark">
                    {cap.title}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 block text-xs leading-snug text-brand-gray-text transition-opacity",
                      i === active ? "opacity-100" : "opacity-70"
                    )}
                  >
                    {cap.text}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Supply types — photo tiles, no flow lines */}
      <Reveal delay={140}>
        <div className="mt-14 lg:mt-16">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                Who connects
              </p>
              <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                Built for professional supply
              </h3>
            </div>
            <p className="max-w-sm text-sm text-brand-gray-text sm:text-right">
              Venues, promoters, hospitality providers and approved suppliers —
              one infrastructure connection.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {supplyTypes.map((item, i) => (
              <article
                key={item.title}
                className={cn(
                  "group relative overflow-hidden rounded-[1.35rem] border border-orange-100/80 bg-white",
                  "shadow-[0_10px_30px_rgba(40,30,20,0.05)] transition-transform duration-300 hover:-translate-y-1"
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="relative h-36 sm:h-40">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-brand-dark/15 to-transparent" />
                  <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-brand-orange shadow-sm">
                    <item.icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-tech text-sm font-bold text-brand-dark">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-brand-gray-text">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Control pillars */}
      {/* <Reveal delay={180}>
        <div className="relative mt-14 overflow-hidden rounded-[1.75rem] px-5 py-8 text-white sm:px-8 sm:py-10 lg:mt-16 lg:px-10">
          <div
            className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-0.5"
            aria-hidden
          >
            {controlCollage.map((tile, i) => (
              <div
                key={i}
                className={cn("relative overflow-hidden", tile.className)}
              >
                <Image
                  src={tile.src}
                  alt=""
                  fill
                  sizes="(max-width: 1280px) 33vw, 400px"
                  className="object-cover scale-[1.03]"
                />
              </div>
            ))}
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#1a1512]/88 via-[#1a1512]/72 to-[#1a1512]/55"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#1a1512]/75 via-transparent to-[#1a1512]/35"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-brand-orange/[0.08]"
            aria-hidden
          />

          <div className="relative z-10">
            <div className="mb-8 max-w-xl">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                You stay in control
              </p>
              <h3 className="mt-2 font-tech text-2xl font-bold tracking-tight sm:text-3xl">
                Distribution on your terms
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                SeatsConnect is B2B distribution infrastructure — not an open
                marketplace. You decide who can sell, where inventory appears, and
                on what commercial terms.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {controlPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/15 bg-white/[0.08] p-5 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">
                    <pillar.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <p className="mt-4 font-tech text-base font-bold">{pillar.title}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/65">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={routes.joinSupplier}
                className="rounded-full bg-brand-orange px-6 hover:bg-brand-orange-hover"
              >
                Become a Supply Partner
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
              <Button
                href={routes.suppliers}
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                Learn more about suppliers
              </Button>
            </div>
          </div>
        </div>
      </Reveal> */}
    </HomeFrame>
  );
}
