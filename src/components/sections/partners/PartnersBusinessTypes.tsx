"use client";

import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  CheckCircle2,
  ConciergeBell,
  Hotel,
  Plane,
  Trophy,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";

const { experiences: exp } = siteImages;

const points = [
  "Professional businesses with existing customer relationships",
  "Approved B2B access to connected event supply",
  "One platform instead of many supplier relationships",
];

const businessTypes: {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
}[] = [
  {
    title: "Travel Agencies",
    description:
      "Add ticket and hospitality products to existing travel services.",
    icon: Plane,
    image: exp.travel,
  },
  {
    title: "Tour Operators",
    description: "Build event-led travel programmes and packages.",
    icon: Users,
    image: exp.destination,
  },
  {
    title: "Concierge Companies",
    description:
      "Respond to client requirements through one professional sourcing platform.",
    icon: ConciergeBell,
    image: exp.concierge,
  },
  {
    title: "Corporate & Event Agencies",
    description:
      "Source products for corporate entertainment, incentives and events.",
    icon: Briefcase,
    image: exp.corporate,
  },
  {
    title: "Hotels",
    description:
      "Give concierge and guest-service teams access to event inventory.",
    icon: Hotel,
    image: exp.hotel,
  },
  {
    title: "Sports Travel",
    description:
      "Combine tickets and hospitality with specialist travel products.",
    icon: Trophy,
    image: exp.sportsTravel,
  },
];

export function PartnersBusinessTypes() {
  return (
    <HomeFrame
      id="business-types"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>Partner Businesses</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Built for Businesses Serving{" "}
                  <span className="text-brand-orange">Customers.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  SeatsConnect is designed for professional businesses that
                  already have customer relationships and want access to event
                  inventory through one controlled B2B layer.
                </p>
              </div>

              <ul className="space-y-2.5">
                {points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 rounded-xl border border-orange-100/90 bg-white/80 px-3.5 py-2.5"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                      strokeWidth={2}
                    />
                    <span className="text-[13px] font-medium text-brand-dark sm:text-[14px]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-3.5 sm:px-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <Building2 className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="text-[12px] leading-relaxed text-brand-dark sm:text-[13px]">
                  Access tickets, hospitality and live experiences without
                  separate relationships with every supplier.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="overflow-hidden rounded-2xl border border-orange-100/90 shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
                <CardMedia
                  src={exp.network}
                  alt="Professional partner network"
                  heightClass="h-36 sm:h-40"
                  className="rounded-none"
                />
              </div>
              <PartnerNetworkDash />
            </div>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3.5">
            {businessTypes.map((item) => (
              <BusinessTypeCard key={item.title} item={item} />
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function BusinessTypeCard({
  item,
}: {
  item: (typeof businessTypes)[number];
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)]">
      <div className="relative h-28 overflow-hidden sm:h-32">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
        />
      </div>
      <div className="relative flex flex-1 flex-col p-3.5 sm:p-4">
        <span className="absolute -top-5 left-3.5 flex h-9 w-9 items-center justify-center rounded-lg border-2 border-white bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
          <item.icon className="h-4 w-4" strokeWidth={2.1} />
        </span>
        <h3 className="mt-2 font-tech text-[14px] font-bold text-brand-dark sm:text-[15px]">
          {item.title}
        </h3>
        <p className="mt-1 flex-1 text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function PartnerNetworkDash() {
  const rows = [
    { label: "Travel agencies", type: "Distribution", status: "Approved" },
    { label: "Concierge desks", type: "Sourcing", status: "Approved" },
    { label: "Corporate buyers", type: "Events", status: "Approved" },
    { label: "Hotels & guests", type: "Hospitality", status: "Approved" },
    { label: "Sports travel", type: "Programmes", status: "Mapped" },
    { label: "Event agencies", type: "Packages", status: "Ready" },
  ] as const;

  return (
    <div className="overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_12px_32px_rgba(40,30,20,0.06)]">
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 bg-[#f7f4f0] px-3.5 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#e8b4a0]" />
            <span className="h-2 w-2 rounded-full bg-[#f0d9a8]" />
            <span className="h-2 w-2 rounded-full bg-[#b8d4b8]" />
          </span>
          <span className="truncate font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
            partners · approved access
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Active
        </span>
      </div>

      <div className="bg-[#faf7f3]/50 p-3.5 sm:p-4">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: "Access", value: "Approved" },
            { label: "Supply", value: "Connected" },
            { label: "Workflow", value: "B2B" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-orange-50 bg-white px-2.5 py-2"
            >
              <p className="font-mono text-[9px] uppercase tracking-wide text-brand-gray-text">
                {stat.label}
              </p>
              <p className="mt-0.5 font-tech text-[13px] font-bold text-brand-dark sm:text-[14px]">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="overflow-hidden rounded-xl border border-orange-100/90 bg-white">
          <div className="flex items-center justify-between border-b border-orange-50 px-3 py-2">
            <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-brand-gray-text">
              <Users className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.9} />
              Partner business types
            </span>
            <span className="font-mono text-[9px] font-semibold text-brand-orange">
              Professional
            </span>
          </div>
          <ul className="divide-y divide-orange-50">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center gap-2.5 px-3 py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange">
                  <Briefcase className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px] font-semibold text-brand-dark sm:text-[13px]">
                    {row.label}
                  </span>
                  <span className="block truncate font-mono text-[9px] text-brand-gray-text">
                    {row.type}
                  </span>
                </span>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase text-emerald-700">
                  {row.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
