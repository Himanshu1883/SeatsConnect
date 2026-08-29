"use client";

import { useState } from "react";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building2,
  Code2,
  ConciergeBell,
  Globe2,
  LayoutTemplate,
  Plane,
  Plug,
  Search,
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

const { experiences: exp } = siteImages;

const audiences: {
  icon: LucideIcon;
  title: string;
  text: string;
  image: string;
}[] = [
  {
    icon: Plane,
    title: "Travel Partners",
    text: "Package live experiences into itineraries with controlled inventory access.",
    image: exp.travel,
  },
  {
    icon: ConciergeBell,
    title: "Concierge Services",
    text: "Fulfil guest requests with professional supply under approved terms.",
    image: exp.concierge,
  },
  {
    icon: Briefcase,
    title: "Corporate Clients",
    text: "Source tickets and hospitality for clients through one infrastructure layer.",
    image: exp.corporate,
  },
  {
    icon: Building2,
    title: "Hotels & Hospitality",
    text: "Add event inventory beside stay experiences without building supplier stacks.",
    image: exp.hotel,
  },
];

const accessModes: {
  id: "api" | "white-label" | "embedded" | "custom";
  icon: LucideIcon;
  title: string;
  text: string;
}[] = [
  {
    id: "api",
    icon: Code2,
    title: "API Integration",
    text: "Connect inventory and booking into your existing systems.",
  },
  {
    id: "white-label",
    icon: LayoutTemplate,
    title: "White Label",
    text: "Deliver discovery and booking under your own brand.",
  },
  {
    id: "embedded",
    icon: Ticket,
    title: "Embedded Inventory",
    text: "Surface live availability inside your customer workflows.",
  },
  {
    id: "custom",
    icon: Plug,
    title: "Custom Integration",
    text: "Tailor connectivity to your operational requirements.",
  },
];

const workflow: { icon: LucideIcon; step: string; title: string; text: string }[] =
  [
    {
      icon: Search,
      step: "01",
      title: "Search",
      text: "Find suitable ticket, hospitality and event inventory.",
    },
    {
      icon: BookOpen,
      step: "02",
      title: "Quote",
      text: "Build commercial quotes for your customers.",
    },
    {
      icon: Ticket,
      step: "03",
      title: "Book",
      text: "Confirm inventory through the infrastructure layer.",
    },
    {
      icon: BadgeCheck,
      step: "04",
      title: "Fulfil",
      text: "Complete delivery under approved partner workflows.",
    },
  ];

const highlights: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Globe2,
    title: "Global Coverage",
    text: "Access inventory across professional markets worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Approved Access",
    text: "Operate inside a trusted B2B distribution network.",
  },
  {
    icon: Users,
    title: "One Relationship",
    text: "Fewer supplier deals. One infrastructure connection.",
  },
];

export function HomePartner() {
  const [mode, setMode] = useState(0);
  const current = accessModes[mode] ?? accessModes[0];

  return (
    <HomeFrame id="partners" tinted variant="plain" className="overflow-hidden">
      {/* Intro */}
      <Reveal>
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
          <div>
            <HomeKicker>For Partners</HomeKicker>
            <h2 className="mt-3 max-w-2xl font-tech text-3xl font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.65rem]">
              Global Event Supply Through{" "}
              <span className="text-brand-orange">Approved Access.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-base">
              Approved B2B businesses access ticket, hospitality and event
              inventory through one platform — instead of maintaining separate
              supplier relationships and technology integrations.
            </p>
            <p className="mt-3 font-tech text-sm font-semibold text-brand-dark sm:text-base">
              More inventory. Fewer integrations. One relationship.
            </p>
          </div>
          <div className="lg:text-right">
            <Button
              href={routes.joinPartner}
              className="w-full rounded-full px-6 sm:w-auto"
            >
              <Users className="h-4 w-4" strokeWidth={1.75} />
              Join Our Network
              <ArrowRight className="h-4 w-4" />
            </Button>
            <p className="mt-3 text-xs text-brand-gray-text lg:ml-auto lg:max-w-[16rem]">
              For travel, concierge, corporate and hospitality distribution
              partners.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Audience mosaic */}
      <Reveal delay={80}>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-4">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-[1.35rem] border border-orange-100/80 bg-white shadow-[0_12px_32px_rgba(40,30,20,0.05)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-44 sm:h-48">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/75 via-brand-dark/20 to-transparent" />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 text-brand-orange shadow-sm">
                  <item.icon className="h-4 w-4" strokeWidth={1.7} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="font-tech text-sm font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[11px] leading-snug text-white/75">
                    {item.text}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>

      {/* Access modes — selector + visual, no console / lines */}
      <Reveal delay={120}>
        <div className="mt-14 lg:mt-16">
          <div className="mb-6 flex flex-col gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                How you connect
              </p>
              <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
                Choose the access model that fits
              </h3>
            </div>
            <p className="max-w-sm text-sm text-brand-gray-text sm:text-right">
              API, white label, embedded inventory or custom integration — same
              infrastructure layer.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-[1.75rem] border border-orange-100/90 bg-white shadow-[0_18px_50px_rgba(40,30,20,0.07)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="flex flex-col gap-1.5 bg-[#faf7f3] p-3 sm:p-4 lg:p-5">
              {accessModes.map((item, i) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setMode(i)}
                  aria-pressed={i === mode}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-2xl px-3.5 py-3 text-left transition-all sm:px-4 sm:py-3.5",
                    i === mode
                      ? "bg-white shadow-[0_10px_28px_rgba(40,30,20,0.08)] ring-1 ring-brand-orange/25"
                      : "hover:bg-white/70"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors",
                      i === mode
                        ? "bg-brand-orange text-white"
                        : "bg-brand-orange/10 text-brand-orange"
                    )}
                  >
                    <item.icon className="h-4 w-4" strokeWidth={1.7} />
                  </span>
                  <span className="min-w-0">
                    <span className="font-tech text-sm font-bold text-brand-dark">
                      {item.title}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 block text-xs leading-snug text-brand-gray-text",
                        i === mode ? "opacity-100" : "opacity-70"
                      )}
                    >
                      {item.text}
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <div className="relative flex min-h-[300px] flex-col bg-[#f3efe9] p-3 sm:min-h-[340px] sm:p-4 lg:min-h-[400px] lg:p-5">
              <AccessModeDashboard mode={current.id} title={current.title} />
            </div>
          </div>
        </div>
      </Reveal>

      {/* Workflow — typographic steps, no connecting lines */}
      {/* <Reveal delay={160}>
        <div className="mt-14 lg:mt-16">
          <div className="mb-6 sm:mb-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Partner workflow
            </p>
            <h3 className="mt-1.5 font-tech text-xl font-bold text-brand-dark sm:text-2xl">
              Search → Quote → Book → Fulfil
            </h3>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
            {workflow.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.35rem] border border-orange-100/90 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)]"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <item.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="font-mono text-[11px] font-semibold tracking-[0.16em] text-brand-orange/70">
                    {item.step}
                  </span>
                </div>
                <p className="mt-4 font-tech text-base font-bold text-brand-dark">
                  {item.title}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-text">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal> */}

      {/* Highlights + CTA */}
      {/* <Reveal delay={200}>
        <div className="mt-14 grid items-stretch gap-4 overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white lg:mt-16 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="grid gap-0 sm:grid-cols-3">
            {highlights.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "p-5 sm:p-6",
                  i < highlights.length - 1 &&
                    "border-b border-orange-100/80 sm:border-b-0 sm:border-r"
                )}
              >
                <item.icon
                  className="h-5 w-5 text-brand-orange"
                  strokeWidth={1.6}
                />
                <p className="mt-3 font-tech text-sm font-bold text-brand-dark">
                  {item.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-gray-text">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center bg-brand-dark p-6 text-white sm:p-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
              Ready to distribute
            </p>
            <p className="mt-2 font-tech text-xl font-bold tracking-tight sm:text-2xl">
              Join the approved partner network
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/65">
              Access connected supply through one infrastructure relationship —
              under your brand where supported.
            </p>
            <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
              <Button
                href={routes.joinPartner}
                className="rounded-full bg-brand-orange px-5 hover:bg-brand-orange-hover"
              >
                Join Our Network
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                href={routes.partners}
                variant="ghost"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Reveal> */}
    </HomeFrame>
  );
}

type AccessModeId = (typeof accessModes)[number]["id"];

function AccessModeDashboard({
  mode,
  title,
}: {
  mode: AccessModeId;
  title: string;
}) {
  return (
    <div
      key={mode}
      className="partner-mode-dash flex h-full min-h-[280px] flex-1 flex-col overflow-hidden rounded-2xl border border-orange-100/90 bg-white shadow-[0_12px_32px_rgba(40,30,20,0.08)]"
    >
      <div className="flex items-center justify-between gap-2 border-b border-orange-100 bg-[#fbf8f4] px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-[#e8d9cc]" />
            <span className="h-2 w-2 rounded-full bg-[#e8d9cc]" />
            <span className="h-2 w-2 rounded-full bg-[#e8d9cc]" />
          </span>
          <p className="truncate font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark/70">
            {title}
          </p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-emerald-700">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Demo
        </span>
      </div>

      <div className="flex-1 overflow-hidden p-3 sm:p-3.5">
        {mode === "api" ? <ApiDashboardMock /> : null}
        {mode === "white-label" ? <WhiteLabelDashboardMock /> : null}
        {mode === "embedded" ? <EmbeddedDashboardMock /> : null}
        {mode === "custom" ? <CustomDashboardMock /> : null}
      </div>
    </div>
  );
}

function DashLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text">
      {children}
    </p>
  );
}

function ApiDashboardMock() {
  const endpoints = [
    { method: "GET", path: "/v1/events", status: "OK" },
    { method: "GET", path: "/v1/inventory", status: "OK" },
    { method: "POST", path: "/v1/quotes", status: "OK" },
    { method: "POST", path: "/v1/orders", status: "OK" },
  ] as const;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "Environment", value: "Sandbox" },
          { label: "Auth", value: "API Key" },
          { label: "Scope", value: "Partner" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-orange-100 bg-[#faf7f3] px-2.5 py-2"
          >
            <DashLabel>{item.label}</DashLabel>
            <p className="mt-1 font-tech text-xs font-bold text-brand-dark">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-orange-100 bg-[#1a1a1a] p-3 font-mono text-[10px] leading-relaxed text-white/85">
        <p className="text-brand-orange">GET /v1/events?market=eu</p>
        <p className="mt-1 text-white/55">Authorization: Bearer ••••••••</p>
        <p className="mt-2 text-emerald-400">{`{ "status": "ok", "items": […] }`}</p>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-orange-100">
        <div className="border-b border-orange-100 bg-[#faf7f3] px-3 py-2">
          <DashLabel>Endpoint monitor</DashLabel>
        </div>
        <ul className="divide-y divide-orange-100">
          {endpoints.map((row) => (
            <li
              key={row.path}
              className="flex items-center gap-2 px-3 py-2 font-mono text-[10px]"
            >
              <span className="w-10 font-semibold text-brand-orange">
                {row.method}
              </span>
              <span className="min-w-0 flex-1 truncate text-brand-dark">
                {row.path}
              </span>
              <span className="rounded-full bg-emerald-50 px-1.5 py-0.5 text-[9px] font-semibold text-emerald-700">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function WhiteLabelDashboardMock() {
  const events = [
    { name: "Championship Final", meta: "Hospitality · City Arena", state: "Open" },
    { name: "Grand Prix Weekend", meta: "Packages · Circuit", state: "Open" },
    { name: "Summer Festival", meta: "Tickets · Main Stage", state: "Limited" },
  ] as const;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between rounded-xl border border-orange-100 bg-[#faf7f3] px-3 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-dark font-tech text-[10px] font-bold text-white">
            YB
          </span>
          <div>
            <p className="font-tech text-xs font-bold text-brand-dark">
              Your Brand Portal
            </p>
            <p className="font-mono text-[9px] text-brand-gray-text">
              White-label discovery
            </p>
          </div>
        </div>
        <span className="rounded-full border border-brand-orange/30 bg-brand-orange/10 px-2 py-0.5 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand-orange">
          Branded
        </span>
      </div>

      <div className="grid grid-cols-[1fr_auto] gap-2 rounded-xl border border-orange-100 bg-white p-2.5">
        <div className="rounded-lg bg-[#f3efe9] px-3 py-2 font-mono text-[10px] text-brand-gray-text">
          Search events, cities, packages…
        </div>
        <button
          type="button"
          className="rounded-lg bg-brand-orange px-3 py-2 font-tech text-[10px] font-semibold text-white"
          tabIndex={-1}
        >
          Search
        </button>
      </div>

      <ul className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {events.map((event) => (
          <li
            key={event.name}
            className="flex items-center gap-3 rounded-xl border border-orange-100 px-3 py-2.5"
          >
            <span className="h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br from-brand-orange/25 to-brand-orange/5" />
            <div className="min-w-0 flex-1">
              <p className="truncate font-tech text-xs font-bold text-brand-dark">
                {event.name}
              </p>
              <p className="truncate text-[10px] text-brand-gray-text">
                {event.meta}
              </p>
            </div>
            <span className="shrink-0 font-mono text-[9px] font-semibold uppercase tracking-wider text-brand-orange">
              {event.state}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function EmbeddedDashboardMock() {
  const rows = [
    { seat: "Cat A · Pair", avail: "Available", action: "Add" },
    { seat: "Hospitality Suite", avail: "Available", action: "Add" },
    { seat: "Cat B · Quad", avail: "Hold", action: "View" },
  ] as const;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="rounded-xl border border-dashed border-brand-orange/35 bg-[#faf7f3] p-3">
        <DashLabel>Host application</DashLabel>
        <p className="mt-1 font-tech text-xs font-bold text-brand-dark">
          Partner CRM · Booking workspace
        </p>
        <div className="mt-2 flex gap-1.5">
          {["Guests", "Itinerary", "Events"].map((tab, i) => (
            <span
              key={tab}
              className={cn(
                "rounded-md px-2 py-1 font-mono text-[9px] font-semibold uppercase tracking-wider",
                i === 2
                  ? "bg-brand-orange text-white"
                  : "bg-white text-brand-gray-text"
              )}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-brand-orange/25 bg-white shadow-[0_0_0_3px_rgba(255,107,0,0.06)]">
        <div className="flex items-center justify-between border-b border-orange-100 bg-brand-orange/5 px-3 py-2">
          <p className="font-tech text-[11px] font-bold text-brand-dark">
            Embedded inventory
          </p>
          <span className="font-mono text-[9px] text-brand-orange">Widget</span>
        </div>
        <ul className="divide-y divide-orange-100">
          {rows.map((row) => (
            <li
              key={row.seat}
              className="flex items-center gap-2 px-3 py-2.5 text-[11px]"
            >
              <Ticket className="h-3.5 w-3.5 shrink-0 text-brand-orange" strokeWidth={1.7} />
              <span className="min-w-0 flex-1 font-tech font-semibold text-brand-dark">
                {row.seat}
              </span>
              <span className="font-mono text-[9px] text-brand-gray-text">
                {row.avail}
              </span>
              <span className="rounded-md bg-brand-dark px-2 py-0.5 font-mono text-[9px] font-semibold text-white">
                {row.action}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function CustomDashboardMock() {
  const mappings = [
    { from: "Partner SKU", to: "SC Product ID", state: "Mapped" },
    { from: "Market code", to: "Channel rule", state: "Mapped" },
    { from: "Webhook URL", to: "Order events", state: "Live" },
    { from: "Fulfilment feed", to: "Partner OPS", state: "Ready" },
  ] as const;

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-orange-100 bg-[#faf7f3] p-3">
          <DashLabel>Integration profile</DashLabel>
          <p className="mt-1 font-tech text-xs font-bold text-brand-dark">
            Custom connector
          </p>
        </div>
        <div className="rounded-xl border border-orange-100 bg-[#faf7f3] p-3">
          <DashLabel>Sync mode</DashLabel>
          <p className="mt-1 font-tech text-xs font-bold text-brand-dark">
            Event-driven
          </p>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-orange-100">
        <div className="border-b border-orange-100 bg-[#faf7f3] px-3 py-2">
          <DashLabel>Field mapping</DashLabel>
        </div>
        <ul className="divide-y divide-orange-100">
          {mappings.map((row) => (
            <li
              key={row.from}
              className="grid grid-cols-[1fr_auto_1fr_auto] items-center gap-1.5 px-2.5 py-2.5 sm:gap-2 sm:px-3"
            >
              <span className="truncate rounded-md bg-[#f3efe9] px-2 py-1 font-mono text-[9px] text-brand-dark">
                {row.from}
              </span>
              <ArrowRight className="h-3 w-3 shrink-0 text-brand-orange" />
              <span className="truncate rounded-md bg-brand-orange/10 px-2 py-1 font-mono text-[9px] text-brand-dark">
                {row.to}
              </span>
              <span className="shrink-0 font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700 sm:text-[9px]">
                {row.state}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

