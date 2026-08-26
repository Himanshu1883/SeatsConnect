"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
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

const heroBanner = siteImages.hero.background;
const heroBannerRight = "/hero/stadium-night.jpg";

export function HomeHero() {
  return (
    <section className="hero-band relative flex h-[calc(100dvh-var(--site-header-height))] max-h-[calc(100dvh-var(--site-header-height))] min-h-0 flex-col overflow-hidden bg-[#1a1512]">
      <HeroBannerBackdrop />

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-5xl flex-1 flex-col justify-center px-4 py-2.5 sm:px-6 sm:py-5 lg:max-w-6xl lg:px-8 lg:py-4 xl:py-5">
        {/* ── Mobile hero — single-screen stack ── */}
        <div className="mx-auto flex w-full max-w-sm min-h-0 flex-1 flex-col justify-center gap-3 text-center sm:max-w-md sm:gap-4 lg:hidden [@media(max-height:720px)]:gap-2.5 [@media(max-height:640px)]:gap-2">
          <div className="shrink-0">
            <p className="hero-fade-up mb-1.5 inline-flex items-center gap-1.5 font-tech text-[11px] font-semibold tracking-tight text-white sm:mb-2 sm:text-[12px]">
              <span className="flex h-5 w-5 items-center justify-center rounded-md bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)] sm:h-6 sm:w-6">
                <Layers className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={2} />
              </span>
              <span>
                Seats<span className="text-brand-orange">Connect</span>™
              </span>
            </p>

            <h1 className="hero-fade-up hero-fade-up-delay-1 font-tech text-[1.45rem] font-bold leading-[1.1] tracking-tight text-white sm:text-[1.85rem] [@media(max-height:640px)]:text-[1.3rem]">
              Connect Once.
              <br />
              <span className="text-brand-orange">Distribute Globally.</span>
            </h1>

            <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-1.5 max-w-[17.5rem] text-[11px] leading-snug text-white/75 line-clamp-2 sm:mt-2 sm:max-w-[20rem] sm:text-[12px] [@media(max-height:640px)]:mt-1 [@media(max-height:640px)]:line-clamp-1">
              {siteConfig.description}
            </p>

            <div className="hero-fade-up hero-fade-up-delay-3 mt-2.5 flex w-full flex-col gap-1.5 sm:mt-3 sm:gap-2">
              <Link
                href={routes.joinSupplier}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-brand-orange px-4 py-2.5 font-tech text-[12px] font-semibold text-white shadow-[0_10px_22px_rgba(255,107,0,0.3)] transition hover:bg-brand-orange-hover sm:text-[13px] [@media(max-height:640px)]:py-2"
              >
                Connect Your Inventory
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={routes.joinPartner}
                className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-brand-orange/50 bg-white/95 px-4 py-2.5 font-tech text-[12px] font-semibold text-brand-orange transition hover:border-brand-orange hover:bg-white sm:text-[13px] [@media(max-height:640px)]:py-2"
              >
                Join Our Network
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={routes.contact}
                className="inline-flex items-center justify-center gap-1 py-0.5 font-tech text-[11px] font-semibold text-brand-orange transition hover:text-brand-orange-hover sm:text-[12px]"
              >
                Talk to Our Team
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          <div className="hero-fade-up hero-fade-up-delay-5 min-h-0 w-full shrink">
            <MobileArchitectureFlow />
          </div>
        </div>

        {/* ── Desktop / tablet hero composition ── */}
        <div className="mx-auto hidden max-w-3xl text-center lg:block">
          <p className="hero-fade-up mb-2.5 inline-flex items-center gap-2 font-tech text-sm font-semibold tracking-tight text-white">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-orange text-white">
              <Layers className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
            <span>
              Seats<span className="text-brand-orange">Connect</span>™
            </span>
          </p>

          <h1 className="hero-fade-up hero-fade-up-delay-1 font-tech text-[2.75rem] font-bold leading-[1.05] tracking-tight text-white xl:text-[3.15rem]">
            Connect Once.
            <br />
            <span className="text-brand-orange">Distribute Globally.</span>
          </h1>

          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-white/90">
            {siteConfig.description}
          </p>
          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-2 max-w-2xl text-[15px] leading-relaxed text-white/80">
            SeatsConnect connects venues, promoters, hospitality providers and
            approved suppliers with a global network of professional B2B
            distribution partners.
          </p>
          <p className="hero-fade-up hero-fade-up-delay-2 mx-auto mt-1.5 max-w-2xl text-[15px] leading-relaxed text-white/70">
            Expand your reach while maintaining control over how and where your
            inventory is distributed.
          </p>

          <div className="hero-fade-up hero-fade-up-delay-3 mt-5 flex flex-row justify-center gap-3">
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
            className="hero-fade-up hero-fade-up-delay-4 mt-3 inline-flex items-center gap-1.5 font-tech text-sm font-semibold text-brand-orange transition hover:text-brand-orange-hover"
          >
            Talk to Our Team
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="hero-fade-up hero-fade-up-delay-5 mt-5 hidden lg:mt-4 lg:block xl:mt-5">
          <DesktopArchitectureFlow />
        </div>
      </div>

      {/* Feature strip */}
      <div className="relative z-10 shrink-0 border-t border-white/10 bg-[#1a1512]/92 backdrop-blur-md">
        <div className="mx-auto hidden max-w-6xl grid-cols-4 gap-0 lg:grid">
          {featureBar.map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-2.5 px-4 py-2.5 xl:px-5"
            >
              <item.icon
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange"
                strokeWidth={1.7}
              />
              <div className="min-w-0">
                <p className="font-tech text-xs font-semibold text-white">
                  {item.label}
                </p>
                <p className="hero-feature-desc mt-0.5 text-[11px] leading-snug text-white/75">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-md gap-1.5 overflow-x-auto px-3 py-2 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden [@media(max-height:700px)]:hidden">
          {featureBar.map((item) => (
            <div
              key={item.label}
              className="flex min-w-0 shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1.5"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange">
                <item.icon className="h-3 w-3" strokeWidth={1.8} />
              </span>
              <p className="whitespace-nowrap font-tech text-[10px] font-semibold leading-tight text-white">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MobileArchitectureFlow() {
  return (
    <div className="relative mx-auto flex w-full flex-col items-stretch gap-2 sm:gap-2.5 [@media(max-height:640px)]:gap-1.5">
      <div className="text-left">
        <p className="mb-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.18em] text-brand-orange sm:text-[9px]">
          Supply
        </p>
        <ul className="grid grid-cols-2 gap-1.5">
          {supplyItems.map((item) => (
            <li key={item.label}>
              <MobileFlowChip icon={item.icon} label={item.label} />
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col items-center gap-0.5 py-0.5 sm:gap-1">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-brand-orange backdrop-blur-md sm:h-8 sm:w-8">
          <Layers className="h-3.5 w-3.5" strokeWidth={1.8} />
        </span>
        <p className="font-tech text-[10px] font-bold tracking-wide text-white sm:text-[11px]">
          SEATSCONNECT
        </p>
        <p className="text-[9px] leading-tight text-white/70 sm:text-[10px]">
          One Connection. Total Control.
        </p>
        <ArrowDown
          className="h-3 w-3 text-brand-orange/70"
          strokeWidth={2.4}
        />
      </div>

      <div className="text-left">
        <p className="mb-1.5 font-mono text-[8px] font-semibold uppercase tracking-[0.14em] text-brand-orange sm:text-[9px]">
          Global B2B Distribution
        </p>
        <ul className="grid grid-cols-2 gap-1.5">
          {channelItems.map((item, i) => (
            <li
              key={item.label}
              className={i === channelItems.length - 1 ? "col-span-2" : undefined}
            >
              <MobileFlowChip
                icon={item.icon}
                label={item.label}
                wide={i === channelItems.length - 1}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MobileFlowChip({
  icon: Icon,
  label,
  wide = false,
}: {
  icon: LucideIcon;
  label: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`flex min-h-[2.35rem] items-center gap-1.5 rounded-xl border border-white/20 bg-white/12 px-2 py-1.5 backdrop-blur-md sm:min-h-[2.5rem] sm:gap-2 sm:px-2.5 ${
        wide ? "justify-center" : ""
      }`}
    >
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-brand-orange/25 text-brand-orange">
        <Icon className="h-2.5 w-2.5" strokeWidth={1.85} />
      </span>
      <span className="min-w-0 text-left font-tech text-[10px] font-semibold leading-[1.2] text-white sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

function DesktopArchitectureFlow() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="flex flex-row items-center gap-0">
        <div className="relative flex-1 text-left">
          <p className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Supply
          </p>
          <ul className="space-y-2">
            {supplyItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/12 px-2.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/25 text-brand-orange">
                  <item.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
                <span className="font-tech text-xs font-semibold text-white">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <FlowConnector icon={Layers} />

        <div className="relative z-10 flex min-w-[11.5rem] max-w-[12.5rem] flex-col items-center justify-center px-3 py-2 text-center">
          <span className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-brand-orange text-white shadow-[0_10px_28px_rgba(255,107,0,0.35)]">
            <Layers className="h-6 w-6" strokeWidth={1.5} />
          </span>
          <p className="rounded-lg border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
            <span className="block font-tech text-sm font-bold tracking-wide text-white">
              SEATSCONNECT
            </span>
            <span className="mt-0.5 block text-[11px] leading-snug text-white/70">
              One Connection.
              <br />
              Total Control.
            </span>
          </p>
        </div>

        <FlowConnector icon={Globe2} />

        <div className="relative flex-1 text-left">
          <p className="mb-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
            Global B2B Distribution
          </p>
          <ul className="space-y-1.5">
            {channelItems.map((item) => (
              <li
                key={item.label}
                className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/12 px-2.5 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.12)] backdrop-blur-md"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-brand-orange/25 text-brand-orange">
                  <item.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                </span>
                <span className="font-tech text-xs font-semibold text-white">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FlowConnector({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <div className="relative mx-1.5 flex w-16 shrink-0 items-center justify-center xl:mx-2 xl:w-20">
      <div className="h-0 w-full border-t border-brand-orange/40" />
      <span className="absolute left-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-orange/80" />
      <span className="absolute right-0 h-1.5 w-1.5 translate-x-1/2 rounded-full bg-brand-orange/80" />
      <span className="absolute flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-white/15 shadow-[0_6px_16px_rgba(0,0,0,0.2)] backdrop-blur-md">
        <Icon className="h-4 w-4 text-brand-orange" strokeWidth={1.7} />
      </span>
    </div>
  );
}

function HeroBannerBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[#1a1512]" />

      {/* Left banner — soft fade toward center */}
      <div className="absolute inset-y-0 left-0 w-[58%] sm:w-[54%] lg:w-[52%]">
        <Image
          src={heroBanner}
          alt=""
          fill
          priority
          sizes="55vw"
          className="object-cover object-[22%_center]"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-y-0 right-0 w-[70%] bg-gradient-to-r from-transparent via-black/40 to-[#1a1512]" />
      </div>

      {/* Right banner — stadium night */}
      <div className="absolute inset-y-0 right-0 w-[58%] sm:w-[54%] lg:w-[52%]">
        <Image
          src={heroBannerRight}
          alt=""
          fill
          priority
          sizes="55vw"
          className="object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-l from-transparent via-black/40 to-[#1a1512]" />
      </div>

      {/* Cinematic center veil — stronger on mobile for copy legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/55 to-transparent lg:via-black/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(0,0,0,0.42)_0%,rgba(0,0,0,0.18)_48%,transparent_74%)] lg:bg-[radial-gradient(ellipse_at_50%_48%,rgba(0,0,0,0.28)_0%,rgba(0,0,0,0.12)_42%,transparent_72%)]" />

      {/* Dark vignette on both ends — no bright edge wash */}
      <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-black/75 via-black/35 to-transparent sm:w-[24%] lg:w-[22%]" />
      <div className="absolute inset-y-0 right-0 w-[28%] bg-gradient-to-l from-black/75 via-black/35 to-transparent sm:w-[24%] lg:w-[22%]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.45)_100%)]" />

      {/* Bottom only */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1a1512]/95 to-transparent" />
    </div>
  );
}
