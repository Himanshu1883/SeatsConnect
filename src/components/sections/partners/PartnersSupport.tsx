"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Crown,
  Headphones,
  Layers,
  MessageCircle,
  MessageSquare,
  Package,
  Puzzle,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  Star,
  Ticket,
  Users,
  UserRound,
  Zap,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

const supportTypes: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Group enquiries",
    text: "Coordinated handling for larger party requests.",
    icon: Users,
  },
  {
    title: "Hospitality requests",
    text: "Suites, packages and premium hospitality needs.",
    icon: Crown,
  },
  {
    title: "VIP requirements",
    text: "Elevated service for high-touch client requests.",
    icon: UserRound,
  },
  {
    title: "Premium event requests",
    text: "Support around high-demand live experiences.",
    icon: Star,
  },
  {
    title: "Larger quantities",
    text: "Structured help when allocations need extra care.",
    icon: Package,
  },
  {
    title: "Complex requirements",
    text: "Multi-step itineraries and specialised sourcing.",
    icon: Puzzle,
  },
];

const trustItems: { label: string; icon: LucideIcon }[] = [
  { label: "Secure", icon: ShieldCheck },
  { label: "Fast", icon: Zap },
  { label: "Reliable", icon: CheckCircle2 },
];

const queueStats: {
  label: string;
  value: string;
  note: string;
  icon: LucideIcon;
  soft: string;
  accent: string;
}[] = [
  {
    label: "Queue",
    value: "Open",
    note: "Requests",
    icon: Layers,
    soft: "rgba(16,185,129,0.12)",
    accent: "#059669",
  },
  {
    label: "Team",
    value: "Partner",
    note: "Support desk",
    icon: Users,
    soft: "rgba(59,130,246,0.12)",
    accent: "#2563eb",
  },
  {
    label: "Handling",
    value: "Selected",
    note: "In progress",
    icon: BadgeCheck,
    soft: "rgba(139,92,246,0.12)",
    accent: "#7c3aed",
  },
];

const requestRows: {
  title: string;
  subtitle: string;
  priority: "Standard" | "Priority";
  status: string;
  statusTone: "green" | "blue" | "violet" | "orange";
  icon: LucideIcon;
  iconSoft: string;
  iconAccent: string;
  spark: string;
}[] = [
  {
    title: "Group enquiry",
    subtitle: "Standard handling",
    priority: "Standard",
    status: "In review",
    statusTone: "green",
    icon: Users,
    iconSoft: "rgba(16,185,129,0.12)",
    iconAccent: "#059669",
    spark: "M2 14 C8 10, 14 16, 20 9 S32 4, 40 8",
  },
  {
    title: "VIP hospitality",
    subtitle: "Priority handling",
    priority: "Priority",
    status: "Assigned",
    statusTone: "blue",
    icon: Crown,
    iconSoft: "rgba(245,158,11,0.14)",
    iconAccent: "#d97706",
    spark: "M2 12 C10 16, 16 6, 24 10 S34 4, 40 7",
  },
  {
    title: "Premium event",
    subtitle: "Priority handling",
    priority: "Priority",
    status: "In progress",
    statusTone: "violet",
    icon: Star,
    iconSoft: "rgba(139,92,246,0.12)",
    iconAccent: "#7c3aed",
    spark: "M2 15 C8 8, 14 14, 22 7 S32 10, 40 5",
  },
  {
    title: "Complex itinerary",
    subtitle: "Standard handling",
    priority: "Standard",
    status: "Queued",
    statusTone: "orange",
    icon: Ticket,
    iconSoft: "rgba(255,107,0,0.12)",
    iconAccent: "#ff6b00",
    spark: "M2 10 C10 14, 18 8, 26 12 S34 6, 40 9",
  },
];

const howSteps: {
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Submit Request",
    text: "Share the customer requirement.",
    icon: Send,
  },
  {
    title: "Partner Review",
    text: "Our team assesses the request.",
    icon: Search,
  },
  {
    title: "Coordination",
    text: "We align supply and options.",
    icon: MessageSquare,
  },
  {
    title: "Update Flow",
    text: "Status stays connected.",
    icon: RefreshCw,
  },
  {
    title: "Resolution",
    text: "Request moves to completion.",
    icon: CheckCircle2,
  },
];

const statusClasses = {
  green: "bg-emerald-50 text-emerald-700",
  blue: "bg-blue-50 text-blue-700",
  violet: "bg-violet-50 text-violet-700",
  orange: "bg-brand-orange/10 text-brand-orange",
} as const;

export function PartnersSupport() {
  return (
    <HomeFrame
      id="support"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10 xl:gap-12">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div>
                <HomeKicker>Partner Support</HomeKicker>
                <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.2rem]">
                  Professional Support{" "}
                  <span className="text-brand-orange">When You Need It.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                  Not every customer request fits neatly into live inventory.
                  Our partner team can support approved businesses with selected
                  enquiries that need additional handling.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {supportTypes.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start gap-2.5 rounded-xl border border-orange-100/90 bg-white px-3 py-3 shadow-[0_4px_12px_rgba(40,30,20,0.03)]"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <item.icon className="h-4 w-4" strokeWidth={1.85} />
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

              <div>
                <Link
                  href={routes.request}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 font-tech text-sm font-semibold text-white shadow-[0_12px_28px_rgba(255,107,0,0.28)] transition hover:bg-brand-orange-hover"
                >
                  <Send className="h-4 w-4" strokeWidth={2} />
                  Submit a Request
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <div className="mt-4 flex flex-wrap items-center gap-4">
                  {trustItems.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 text-[12px] font-medium text-brand-gray-text"
                    >
                      <item.icon
                        className="h-3.5 w-3.5 text-brand-orange"
                        strokeWidth={1.9}
                      />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right dashboard */}
            <SupportDashboard />
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function SupportDashboard() {
  return (
    <div className="flex flex-col gap-3.5 rounded-[1.5rem] border border-orange-100/90 bg-white p-3.5 shadow-[0_16px_40px_rgba(40,30,20,0.06)] sm:p-4 lg:p-5">
      {/* Queue stats */}
      <div className="rounded-2xl border border-orange-50 bg-[#faf7f3]/60 p-3.5 sm:p-4">
        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark">
            Partner Support Request Queue
          </p>
          <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold text-emerald-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-50" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Active
          </span>
        </div>

        <div className="grid gap-2.5 sm:grid-cols-3">
          {queueStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-orange-50 bg-white px-3 py-3"
            >
              <div className="flex items-start gap-2.5">
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: stat.soft, color: stat.accent }}
                >
                  <stat.icon className="h-4 w-4" strokeWidth={1.9} />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[9px] font-semibold uppercase tracking-wide text-brand-gray-text">
                    {stat.label}
                  </p>
                  <p className="mt-0.5 font-tech text-[15px] font-bold text-brand-dark">
                    {stat.value}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-medium"
                    style={{ color: stat.accent }}
                  >
                    {stat.note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request types */}
      <div className="overflow-hidden rounded-2xl border border-orange-50 bg-white">
        <div className="border-b border-orange-50 px-3.5 py-2.5 sm:px-4">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-dark">
            Selected Request Types
          </p>
        </div>
        <ul className="divide-y divide-orange-50">
          {requestRows.map((row) => (
            <li
              key={row.title}
              className="flex flex-wrap items-center gap-2.5 px-3.5 py-2.5 sm:flex-nowrap sm:gap-3 sm:px-4"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: row.iconSoft,
                  color: row.iconAccent,
                }}
              >
                <row.icon className="h-4 w-4" strokeWidth={1.9} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-semibold text-brand-dark">
                  {row.title}
                </span>
                <span className="block truncate text-[11px] text-brand-gray-text">
                  {row.subtitle}
                </span>
              </span>

              <svg
                viewBox="0 0 42 18"
                className="hidden h-4 w-10 shrink-0 sm:block"
                aria-hidden
              >
                <path
                  d={row.spark}
                  fill="none"
                  stroke={row.iconAccent}
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>

              <span className="rounded-md bg-brand-orange/10 px-2 py-0.5 font-mono text-[9px] font-semibold text-brand-orange">
                {row.priority}
              </span>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 font-mono text-[9px] font-semibold",
                  statusClasses[row.statusTone]
                )}
              >
                {row.status}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* How it works */}
      <div className="rounded-2xl border border-orange-50 bg-[#faf7f3]/50 px-3 py-4 sm:px-4 sm:py-5">
        <p className="mb-4 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-dark">
          How It Works
        </p>

        <div className="relative">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[10%] right-[10%] top-5 hidden h-px border-t border-dashed border-orange-200 sm:block"
          />
          <ol className="grid grid-cols-2 gap-4 sm:grid-cols-5 sm:gap-2">
            {howSteps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-[1] mb-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange font-mono text-[9px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="relative z-[1] flex h-10 w-10 items-center justify-center rounded-full border border-brand-orange/25 bg-white text-brand-orange shadow-[0_4px_12px_rgba(255,107,0,0.12)]">
                  <step.icon className="h-4 w-4" strokeWidth={1.85} />
                </span>
                <p className="mt-2 font-tech text-[12px] font-bold text-brand-dark">
                  {step.title}
                </p>
                <p className="mt-0.5 text-[10px] leading-snug text-brand-gray-text">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-5 flex flex-col gap-3 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-3.5 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4">
          <div className="flex items-start gap-2.5 sm:items-center">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.9} />
            </span>
            <p className="text-[12px] leading-snug text-brand-dark sm:text-[13px]">
              A dedicated partner support path for approved businesses when live
              inventory alone is not enough.
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center gap-2 sm:pr-1">
            {[Headphones, MessageCircle, Users].map((Icon, i) => (
              <span key={i} className="relative flex items-center">
                {i > 0 ? (
                  <span
                    aria-hidden
                    className="mr-2 h-px w-4 border-t border-dashed border-brand-orange/40"
                  />
                ) : null}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-brand-orange/25 bg-white text-brand-orange shadow-sm">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.9} />
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
