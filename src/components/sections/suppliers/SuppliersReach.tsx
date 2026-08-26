"use client";

import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ConciergeBell,
  Globe2,
  Hotel,
  Luggage,
  Monitor,
  Plane,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const points = [
  "Local customers, international demand",
  "Approved professional buyers only",
  "One connection across selected channels",
];

const channels: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Travel agencies",
    text: "Agencies packaging events into travel programmes.",
    icon: Luggage,
  },
  {
    title: "Tour operators",
    text: "Operators building destination and event itineraries.",
    icon: Plane,
  },
  {
    title: "Concierge businesses",
    text: "Lifestyle desks serving private and VIP clients.",
    icon: ConciergeBell,
  },
  {
    title: "Corporate travel",
    text: "Corporate buyers, incentives and client entertainment.",
    icon: Briefcase,
  },
  {
    title: "Hotels",
    text: "Guest-service teams adding events to stays.",
    icon: Hotel,
  },
  {
    title: "Event agencies",
    text: "Agencies creating event-led experiences.",
    icon: CalendarDays,
  },
  {
    title: "Sports travel",
    text: "Specialist programmes around major sporting events.",
    icon: Trophy,
  },
  {
    title: "White-label platforms",
    text: "Branded sites and apps powered by SeatsConnect.",
    icon: Monitor,
  },
];

const bottomNotes: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Global demand",
    text: "Reach buyers already serving international customers.",
    icon: Globe2,
  },
  {
    title: "Approved only",
    text: "Inventory stays inside controlled B2B channels.",
    icon: ShieldCheck,
  },
  {
    title: "Professional network",
    text: "Connect once with businesses ready to sell.",
    icon: Users,
  },
];

export function SuppliersReach() {
  return (
    <HomeFrame
      id="reach"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 xl:gap-10">
            <div className="flex flex-col gap-5">
              <div>
                <HomeKicker>New Markets</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Reach New{" "}
                  <span className="text-brand-orange">Markets.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  Your customers may be local, but demand for major events is
                  global. SeatsConnect helps connect supply with businesses
                  already serving international customers.
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
                  Potential channels include travel, concierge, corporate,
                  hotels, event agencies, sports travel and white-label
                  platforms — under controlled distribution rules.
                </p>
              </div>
            </div>

            <MarketsDash />
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-3.5">
            {channels.map((channel) => (
              <article
                key={channel.title}
                className="group flex h-full flex-col rounded-xl border border-orange-100/90 bg-white p-3.5 shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)] sm:p-4"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]">
                  <channel.icon className="h-4 w-4" strokeWidth={2.1} />
                </span>
                <h3 className="mt-3 font-tech text-[14px] font-bold text-brand-dark sm:text-[15px]">
                  {channel.title}
                </h3>
                <p className="mt-1 text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
                  {channel.text}
                </p>
              </article>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-orange-100/90 bg-white/80 p-3 sm:grid-cols-3 sm:gap-0 sm:p-0 lg:rounded-full lg:px-2 lg:py-2.5">
            {bottomNotes.map((note, i) => (
              <div
                key={note.title}
                className="flex items-start gap-2.5 rounded-xl bg-[#faf7f3]/70 px-3 py-2.5 sm:rounded-none sm:bg-transparent lg:items-center"
              >
                {i > 0 ? (
                  <span
                    className="mr-1 hidden h-10 w-px shrink-0 bg-orange-100 lg:block"
                    aria-hidden
                  />
                ) : null}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <note.icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="font-tech text-[13px] font-bold text-brand-dark">
                    {note.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text">
                    {note.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function MarketsDash() {
  const rows = [
    { label: "Travel agencies", region: "EU · US · APAC", status: "Live" },
    { label: "Concierge desks", region: "Private clients", status: "Live" },
    { label: "Corporate buyers", region: "Incentives", status: "Live" },
    { label: "Hotels & guests", region: "Hospitality", status: "Live" },
    { label: "Sports travel", region: "Event programmes", status: "Mapped" },
    { label: "White-label apps", region: "Branded access", status: "Ready" },
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
            markets · channel reach
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Live
        </span>
      </div>

      <div className="bg-[#faf7f3]/50 p-3.5 sm:p-4">
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { label: "Channels", value: "Selected" },
            { label: "Access", value: "Approved" },
            { label: "Demand", value: "Global" },
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
              <Globe2 className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.9} />
              Active market routes
            </span>
            <span className="font-mono text-[9px] font-semibold text-brand-orange">
              Controlled
            </span>
          </div>
          <ul className="divide-y divide-orange-50">
            {rows.map((row) => (
              <li
                key={row.label}
                className="flex items-center gap-2.5 px-3 py-2"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange">
                  <Users className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px] font-semibold text-brand-dark sm:text-[13px]">
                    {row.label}
                  </span>
                  <span className="block truncate font-mono text-[9px] text-brand-gray-text">
                    {row.region}
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
