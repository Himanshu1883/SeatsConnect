"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CalendarDays,
  CheckCircle2,
  ConciergeBell,
  Globe2,
  Lock,
  Luggage,
  Monitor,
  Package,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  Trophy,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const { experiences: exp, sections } = siteImages;

const sidebarStats: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Approved Channels",
    value: "Controlled",
    note: "Professional access only",
    icon: ShieldCheck,
  },
  {
    label: "Active Partners",
    value: "Approved",
    note: "Trusted B2B network",
    icon: Globe2,
  },
  {
    label: "Inventory Distributed",
    value: "Live",
    note: "Across selected channels",
    icon: Package,
  },
  {
    label: "Fulfilment Success",
    value: "Connected",
    note: "End-to-end workflows",
    icon: CheckCircle2,
  },
];

const channels: {
  title: string;
  text: string;
  image: string;
  href: string;
  icon: LucideIcon;
  live?: boolean;
}[] = [
  {
    title: "Travel",
    text: "Agencies, tour operators and specialist travel businesses.",
    image: exp.travel,
    href: routes.solutionsTravel,
    icon: Luggage,
  },
  {
    title: "Concierge",
    text: "Lifestyle management and private-client services.",
    image: exp.concierge,
    href: routes.solutionsConcierge,
    icon: ConciergeBell,
  },
  {
    title: "Corporate",
    text: "Corporate travel, incentives and event agencies.",
    image: exp.corporate,
    href: routes.solutionsCorporate,
    icon: Briefcase,
  },
  {
    title: "Hotels",
    text: "Hotels and guest-service hospitality partners.",
    image: exp.hotel,
    href: routes.solutionsHotels,
    icon: Building2,
  },
  {
    title: "Sports Travel",
    text: "Specialist programmes around major sporting events.",
    image: exp.football,
    href: routes.solutionsSportsTravel,
    icon: Trophy,
  },
  {
    title: "Event Agencies",
    text: "Businesses creating event-led experiences.",
    image: exp.concert,
    href: routes.solutions,
    icon: CalendarDays,
  },
  {
    title: "White-Label Platforms",
    text: "Branded sites and apps powered by SeatsConnect.",
    image: sections.whiteLabel,
    href: routes.solutionsWhiteLabel,
    icon: Monitor,
  },
  {
    title: "Other Approved Partners",
    text: "Additional B2B channels under controlled rules.",
    image: exp.destination,
    href: routes.joinPartner,
    icon: Puzzle,
    live: true,
  },
];

const features: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Controlled Access",
    text: "Only approved partners get access.",
    icon: ShieldCheck,
  },
  {
    title: "Commercial Integrity",
    text: "Distribution governed by clear rules.",
    icon: Lock,
  },
  {
    title: "Real-time Availability",
    text: "Live inventory across selected channels.",
    icon: RefreshCw,
  },
  {
    title: "Scalable Network",
    text: "Infrastructure built to support growth.",
    icon: BarChart3,
  },
];

export function PlatformDistribution() {
  return (
    <HomeFrame
      id="distribution"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-8 xl:gap-10">
            {/* Left column */}
            <div className="flex flex-col gap-4 sm:gap-5">
              <div>
                <HomeKicker>Distribution Infrastructure</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Distribution{" "}
                  <span className="text-brand-orange">Infrastructure.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  Once connected, inventory can be made available through
                  approved professional channels according to the relevant
                  commercial arrangement.
                </p>
              </div>

              <div className="rounded-2xl border border-orange-100/90 bg-[#faf7f3]/90 p-3.5 sm:p-4">
                <ul className="space-y-3">
                  {sidebarStats.map((stat) => (
                    <li
                      key={stat.label}
                      className="flex items-center gap-3 rounded-xl bg-white/80 px-2.5 py-2.5 sm:px-3"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-orange/25 bg-brand-orange/5 text-brand-orange">
                        <stat.icon className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-brand-gray-text">
                          {stat.label}
                        </p>
                        <p className="font-tech text-[15px] font-bold text-brand-dark">
                          {stat.value}
                        </p>
                      </div>
                      <p className="hidden max-w-[7rem] text-right text-[10px] leading-snug text-brand-gray-text sm:block">
                        {stat.note}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-3.5 sm:px-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                  <Users className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <p className="text-[12px] leading-relaxed text-brand-dark sm:text-[13px]">
                  Professional channels. Controlled distribution. Built for
                  scale and trust.
                </p>
              </div>
            </div>

            {/* Channel grid */}
            <div className="grid gap-3.5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-3">
              {channels.map((channel, i) => (
                <ChannelCard key={channel.title} channel={channel} index={i} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom feature bar */}
        <Reveal delay={100}>
          <div className="grid grid-cols-1 gap-3 rounded-2xl border border-orange-100/90 bg-[#faf7f3]/70 p-3 sm:grid-cols-2 sm:gap-0 sm:p-0 lg:grid-cols-4 lg:rounded-full lg:px-2 lg:py-2.5">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className="flex items-start gap-2.5 rounded-xl bg-white/80 px-3 py-2.5 sm:rounded-none sm:bg-transparent lg:items-center"
              >
                {i > 0 ? (
                  <span
                    className="mr-1 hidden h-10 w-px shrink-0 bg-orange-100 lg:block"
                    aria-hidden
                  />
                ) : null}
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                  <feature.icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="font-tech text-[13px] font-bold text-brand-dark">
                    {feature.title}
                  </p>
                  <p className="mt-0.5 text-[11px] leading-snug text-brand-gray-text">
                    {feature.text}
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

function ChannelCard({
  channel,
  index,
}: {
  channel: (typeof channels)[number];
  index: number;
}) {
  return (
    <Reveal delay={40 + index * 35} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-orange-100/90 bg-white shadow-[0_6px_16px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_10px_24px_rgba(40,30,20,0.08)]">
        <div className="relative">
          <div className="relative h-[4.75rem] overflow-hidden sm:h-[5.25rem]">
            <Image
              src={channel.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 20vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"
            />
          </div>

          <span className="absolute -bottom-3.5 left-3 z-[1] flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.35)] ring-2 ring-white">
            <channel.icon className="h-3.5 w-3.5" strokeWidth={2.25} />
          </span>
        </div>

        <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
          <div className="flex flex-wrap items-center gap-1.5">
            <h3 className="font-tech text-[13px] font-bold leading-tight text-brand-dark">
              {channel.title}
            </h3>
            {channel.live ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-1.5 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wide text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            ) : null}
          </div>
          <p className="mt-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            Channel
          </p>
          <p className="mt-1.5 line-clamp-2 text-[11px] leading-snug text-brand-gray-text">
            {channel.text}
          </p>
          <Link
            href={channel.href}
            className="mt-auto inline-flex items-center gap-1 pt-2.5 text-[11px] font-semibold text-brand-dark transition-colors hover:text-brand-orange"
          >
            View details
            <ArrowRight
              className="h-3 w-3 text-brand-orange"
              strokeWidth={2.25}
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}
