"use client";

import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Bell,
  Briefcase,
  Building2,
  ConciergeBell,
  Globe2,
  Layers,
  Plane,
  ShieldCheck,
  Ticket,
  Users,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const { experiences: exp } = siteImages;

const supplyItems: { label: string; icon: LucideIcon }[] = [
  { label: "Venues", icon: Building2 },
  { label: "Promoters", icon: Ticket },
  { label: "Hospitality Providers", icon: ConciergeBell },
  { label: "Approved Suppliers", icon: BadgeCheck },
];

const channelItems: { label: string; icon: LucideIcon }[] = [
  { label: "Travel Partners", icon: Plane },
  { label: "Concierge Services", icon: Bell },
  { label: "Corporate Clients", icon: Briefcase },
  { label: "Hospitality Partners", icon: Building2 },
  { label: "Other B2B Channels", icon: Users },
];

const featureBar: {
  label: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    label: "Global Reach",
    description: "Access professional demand across international markets.",
    icon: Globe2,
  },
  {
    label: "Controlled Distribution",
    description: "Decide who can sell, where and on what terms.",
    icon: ShieldCheck,
  },
  {
    label: "Real-time Connectivity",
    description: "API-powered infrastructure built for live inventory.",
    icon: Zap,
  },
  {
    label: "Built for the Industry",
    description: "Purpose-built for venues, promoters, hospitality and suppliers.",
    icon: Building2,
  },
];

const leftPanels = [exp.stadium, exp.hospitality, exp.concert] as const;
const rightPanels = [exp.hotel, exp.suite, exp.formula1] as const;

export function HomeHero() {
  return (
    <section className="hero-band hero-light relative flex h-auto min-h-0 flex-col overflow-hidden lg:h-[calc(100dvh-var(--site-header-height))] lg:max-h-[calc(100dvh-var(--site-header-height))]">
      <HeroLightBackdrop />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-4 py-7 sm:px-6 sm:py-8 lg:max-w-6xl lg:px-8 lg:py-4 xl:py-5">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-fade-up mb-2 inline-flex items-center gap-2 font-tech text-[11px] font-semibold tracking-tight text-brand-dark sm:mb-2.5 sm:text-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-orange text-white sm:h-6 sm:w-6">
              <Layers className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
            </span>
            <span>
              Seats<span className="text-brand-orange">Connect</span>™
            </span>
          </p>

          <h1 className="hero-fade-up hero-fade-up-delay-1 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-4xl md:text-[2.6rem] lg:text-[2.75rem] xl:text-[3.15rem] lg:leading-[1.05]">
            Connect Once.
            <br />
            <span className="text-brand-orange">Distribute Globally.</span>
          </h1>

          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-2.5 max-w-2xl text-[13px] leading-snug text-brand-gray-text sm:mt-3 sm:text-sm md:text-[15px] md:leading-relaxed">
            {siteConfig.description}
          </p>
          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-1.5 hidden max-w-2xl text-[13px] leading-snug text-brand-gray-text/90 sm:mt-2 sm:block sm:text-sm md:text-[15px] md:leading-relaxed">
            SeatsConnect connects venues, promoters, hospitality providers and
            approved suppliers with a global network of professional B2B
            distribution partners.
          </p>
          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-1.5 hidden max-w-2xl text-[13px] leading-snug text-brand-gray-text/80 sm:mt-1.5 sm:block sm:text-sm md:text-[15px] md:leading-relaxed">
            Expand your reach while maintaining control over how and where
            your inventory is distributed.
          </p>

          <div className="hero-fade-up hero-fade-up-delay-3 mt-4 flex flex-col items-center gap-2.5 sm:mt-5 sm:flex-row sm:justify-center sm:gap-3">
            <Link
              href={routes.joinSupplier}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_28px_rgba(255,107,0,0.28)] transition hover:bg-brand-orange-hover"
            >
              Connect Your Inventory
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={routes.joinPartner}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-orange/45 bg-white px-5 py-2.5 font-tech text-sm font-semibold text-brand-orange transition hover:border-brand-orange hover:bg-brand-orange/5"
            >
              Join Our Network
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Link
            href={routes.contact}
            className="hero-fade-up hero-fade-up-delay-4 mt-2.5 inline-flex items-center gap-1.5 font-tech text-xs font-semibold text-brand-orange transition hover:text-brand-orange-hover sm:mt-3 sm:text-sm"
          >
            Talk to Our Team
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="hero-fade-up hero-fade-up-delay-5 mt-5 sm:mt-6 lg:mt-4 xl:mt-5">
          <ArchitectureFlow />
        </div>
      </div>

      <div className="relative z-10 shrink-0 border-t border-brand-dark/8 bg-white/75 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 sm:grid-cols-4">
          {featureBar.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-2 border-brand-dark/6 px-3 py-2.5 sm:gap-2.5 sm:px-4 sm:py-3 lg:py-2.5 xl:px-5"
            >
              <item.icon
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange sm:h-4 sm:w-4"
                strokeWidth={1.7}
              />
              <div className="min-w-0">
                <p className="font-tech text-[11px] font-semibold text-brand-dark sm:text-xs">
                  {item.label}
                </p>
                <p className="hero-feature-desc mt-0.5 text-[10px] leading-snug text-brand-gray-text sm:text-[11px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroLightBackdrop() {
  const uid = useId();

  return (
    <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
      <div className="absolute inset-0 bg-[#f7f4f0]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(255,255,255,0.9),transparent_58%)]" />

      {/* World-map dots + connecting arcs */}
      <svg
        viewBox="0 0 1200 700"
        className="absolute inset-0 h-full w-full opacity-80"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`${uid}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1.2" cy="1.2" r="1.05" fill="#c4b8ae" />
          </pattern>
        </defs>
        <g fill={`url(#${uid}-dots)`} opacity="0.5">
          <ellipse cx="600" cy="270" rx="260" ry="150" />
          <ellipse cx="600" cy="470" rx="220" ry="110" />
        </g>
        <g fill="none" stroke="#FF6B00" strokeWidth="1.1" opacity="0.28">
          <path d="M 380 90 Q 600 20 820 100" />
          <path d="M 350 260 Q 600 340 850 250" />
        </g>
        <g fill="#FF6B00">
          <circle cx="380" cy="90" r="3" opacity="0.5" />
          <circle cx="820" cy="100" r="3" opacity="0.5" />
          <circle cx="350" cy="260" r="3" opacity="0.45" />
          <circle cx="850" cy="250" r="3" opacity="0.45" />
        </g>
      </svg>

      {/* Left diagonal image column — fixed narrow width, no overflow into center */}
      <div className="absolute inset-y-0 left-0 hidden w-[19%] lg:block xl:w-[20%]">
        <div className="relative flex h-full flex-col">
          {leftPanels.map((src, i) => (
            <div
              key={src}
              className="relative min-h-0 flex-1"
              style={{
                clipPath:
                  i === 0
                    ? "polygon(0 0, 100% 0, 100% 88%, 0 100%)"
                    : i === leftPanels.length - 1
                      ? "polygon(0 0, 100% 12%, 100% 100%, 0 100%)"
                      : "polygon(0 0, 100% 12%, 100% 88%, 0 100%)",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
                sizes="20vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
        {/* soft fade toward center so it doesn't fight the text */}
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-r from-transparent to-[#f7f4f0]" />
      </div>

      {/* Right diagonal image column */}
      <div className="absolute inset-y-0 right-0 hidden w-[19%] lg:block xl:w-[20%]">
        <div className="relative flex h-full flex-col">
          {rightPanels.map((src, i) => (
            <div
              key={src}
              className="relative min-h-0 flex-1"
              style={{
                clipPath:
                  i === 0
                    ? "polygon(0 0, 100% 0, 100% 100%, 0 88%)"
                    : i === rightPanels.length - 1
                      ? "polygon(0 12%, 100% 0, 100% 100%, 0 100%)"
                      : "polygon(0 12%, 100% 0, 100% 100%, 0 88%)",
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                priority={i === 0}
                className="object-cover"
                sizes="20vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-l from-transparent to-[#f7f4f0]" />
      </div>

      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#f7f4f0] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f7f4f0] to-transparent" />
    </div>
  );
}

function ArchitectureFlow() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="flex flex-col items-stretch gap-3 sm:gap-4 lg:flex-row lg:items-center lg:gap-0">
        <article className="hero-arch-card relative flex-1 rounded-2xl border border-brand-dark/8 bg-white/95 p-3 text-left shadow-[0_12px_32px_rgba(40,30,20,0.06)] sm:p-3.5 lg:p-3">
          <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-brand-orange sm:mb-2.5 sm:text-[10px]">
            Supply
          </p>
          <ul className="space-y-1.5 sm:space-y-2">
            {supplyItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange sm:h-7 sm:w-7">
                  <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.7} />
                </span>
                <span className="font-tech text-[11px] font-semibold text-brand-dark sm:text-xs">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </article>

        <FlowConnector icon={Layers} />

        <article className="hero-arch-hub relative z-10 mx-auto flex w-full max-w-[14rem] flex-col items-center justify-center rounded-2xl border border-brand-orange/35 bg-white px-4 py-4 text-center shadow-[0_14px_36px_rgba(255,107,0,0.12)] sm:px-5 sm:py-5 lg:mx-0 lg:min-w-[11.5rem] lg:max-w-[12.5rem] lg:py-4">
          <span className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white sm:mb-2.5 sm:h-11 sm:w-11 sm:rounded-2xl">
            <Layers className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
          </span>
          <p className="font-tech text-xs font-bold tracking-wide text-brand-dark sm:text-sm">
            SEATSCONNECT
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-brand-gray-text sm:text-[11px]">
            One Connection.
            <br />
            Total Control.
          </p>
        </article>

        <FlowConnector icon={Globe2} />

        <article className="hero-arch-card relative flex-1 rounded-2xl border border-brand-dark/8 bg-white/95 p-3 text-left shadow-[0_12px_32px_rgba(40,30,20,0.06)] sm:p-3.5 lg:p-3">
          <p className="mb-2 font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-brand-orange sm:mb-2.5 sm:text-[10px]">
            Global B2B Distribution
          </p>
          <ul className="space-y-1.5">
            {channelItems.map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-orange/10 text-brand-orange sm:h-7 sm:w-7">
                  <item.icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.7} />
                </span>
                <span className="font-tech text-[11px] font-semibold text-brand-dark sm:text-xs">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  );
}

function FlowConnector({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative hidden shrink-0 items-center justify-center lg:mx-1.5 lg:flex lg:w-16 xl:mx-2 xl:w-20">
      <div className="h-0 w-full border-t-2 border-dashed border-brand-orange/35" />
      <span className="absolute left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-orange/70" />
      <span className="absolute right-0 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-brand-orange/70" />
      <span className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-brand-orange/30 bg-white shadow-[0_6px_16px_rgba(255,107,0,0.15)]">
        <Icon className="h-4 w-4 text-brand-orange" strokeWidth={1.7} />
      </span>
    </div>
  );
}