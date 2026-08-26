"use client";

import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  Gift,
  Globe2,
  Layers,
  Network,
  Package,
  Plug,
  Search,
  Send,
  Share2,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Users,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

type SubFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type Step = {
  num: string;
  title: string;
  short: string;
  detail: string;
  icon: LucideIcon;
  image: string;
  features: SubFeature[];
};

const { experiences: exp } = siteImages;

const steps: Step[] = [
  {
    num: "01",
    title: "Connect Supply",
    short: "Suppliers connect inventory to the infrastructure.",
    detail:
      "Venues, promoters, hospitality providers and approved suppliers connect inventory through API, feed or supported integration.",
    icon: Layers,
    image: exp.stadium,
    features: [
      {
        icon: Plug,
        title: "API & Feeds",
        description: "Connect inventory via API, feed or supported integration.",
      },
      {
        icon: Package,
        title: "Live Availability",
        description: "Keep tickets, hospitality and event stock in sync.",
      },
      {
        icon: ShieldCheck,
        title: "Approved Supply",
        description: "Onboard trusted supply sources into one layer.",
      },
      {
        icon: FileText,
        title: "Structured Data",
        description: "Normalise products, seats and terms for distribution.",
      },
    ],
  },
  {
    num: "02",
    title: "Structure Distribution",
    short: "Define rules, access and commercial terms.",
    detail:
      "Inventory is structured by channels, markets, partner groups and commercial terms so distribution stays controlled.",
    icon: Network,
    image: exp.network,
    features: [
      {
        icon: SlidersHorizontal,
        title: "Access Rules",
        description: "Define who can see and book which inventory.",
      },
      {
        icon: Globe2,
        title: "Market Mapping",
        description: "Align supply with approved markets and channels.",
      },
      {
        icon: FileText,
        title: "Commercial Terms",
        description: "Set pricing, allocation and fulfilment conditions.",
      },
      {
        icon: ShieldCheck,
        title: "Controlled Release",
        description: "Release inventory only through approved paths.",
      },
    ],
  },
  {
    num: "03",
    title: "Connect Partners",
    short: "Invite and activate approved B2B partners.",
    detail:
      "Invite and activate approved B2B businesses so they can access relevant inventory through the platform or API.",
    icon: Users,
    image: exp.travel,
    features: [
      {
        icon: Users,
        title: "Partner Onboarding",
        description: "Invite approved businesses into the network.",
      },
      {
        icon: ShieldCheck,
        title: "Access Control",
        description: "Activate partners against agreed inventory rules.",
      },
      {
        icon: Plug,
        title: "Platform or API",
        description: "Connect partners through UI workflows or API.",
      },
      {
        icon: Network,
        title: "Channel Fit",
        description: "Match inventory to travel, concierge and corporate demand.",
      },
    ],
  },
  {
    num: "04",
    title: "Search & Quote",
    short: "Partners identify products and create offers.",
    detail:
      "Partners identify suitable products and create offers for their customers.",
    icon: Search,
    image: exp.hospitality,
    features: [
      {
        icon: Search,
        title: "Search Inventory",
        description:
          "Real-time access to tickets, hospitality and event inventory.",
      },
      {
        icon: FileText,
        title: "Create Offer",
        description: "Build tailored offers with pricing, seats and terms.",
      },
      {
        icon: Users,
        title: "Customer Ready",
        description: "Prepare quotes and options ready for your customers.",
      },
      {
        icon: Share2,
        title: "Share Quote",
        description: "Generate professional quotes to share and confirm.",
      },
    ],
  },
  {
    num: "05",
    title: "Book",
    short: "Partners book inventory through the workflow.",
    detail:
      "Partners book inventory through the connected workflow once offers are confirmed.",
    icon: CalendarCheck,
    image: exp.concert,
    features: [
      {
        icon: CalendarCheck,
        title: "Confirm Booking",
        description: "Convert accepted quotes into structured bookings.",
      },
      {
        icon: ShieldCheck,
        title: "Allocation Hold",
        description: "Secure inventory against agreed commercial terms.",
      },
      {
        icon: FileText,
        title: "Order Record",
        description: "Capture booking details across the connected parties.",
      },
      {
        icon: Plug,
        title: "Workflow Sync",
        description: "Keep supplier and partner systems aligned on status.",
      },
    ],
  },
  {
    num: "06",
    title: "Fulfil",
    short: "Inventory is delivered through the network.",
    detail:
      "Booking, order and delivery information moves between supplier, SeatsConnect and the distribution partner.",
    icon: Gift,
    image: exp.tickets,
    features: [
      {
        icon: Gift,
        title: "Delivery Flow",
        description: "Move tickets and hospitality through fulfilment paths.",
      },
      {
        icon: Package,
        title: "Order Tracking",
        description: "Keep fulfilment status visible across the chain.",
      },
      {
        icon: Send,
        title: "Partner Handoff",
        description: "Deliver inventory to partners for their customers.",
      },
      {
        icon: FileText,
        title: "Closed Loop",
        description: "Complete the Search → Quote → Book → Fulfil cycle.",
      },
    ],
  },
];

const bottomFeatures: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Layers,
    title: "One Infrastructure",
    text: "One connection to reach global demand.",
  },
  {
    icon: ShieldCheck,
    title: "Full Control",
    text: "Maintain control over access, pricing and distribution.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "Access professional partners in multiple markets.",
  },
  {
    icon: TrendingUp,
    title: "More Demand",
    text: "Increase visibility and grow your business.",
  },
];

const DEFAULT_ACTIVE = 3;
const CYCLE_MS = 4200;

export function HomeHowItWorks() {
  const [active, setActive] = useState(DEFAULT_ACTIVE);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % steps.length);
    }, CYCLE_MS);
    return () => window.clearInterval(timer);
  }, [paused, reduceMotion]);

  const current = steps[active];

  return (
    <HomeFrame id="how-it-works" variant="plain">
      <Reveal>
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">
          <HomeKicker>How It Works</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-tight tracking-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            From Supply to{" "}
            <span className="text-brand-orange">Customer.</span>
          </h2>
          <div className="mx-auto mb-5 mt-4 h-0.5 w-12 rounded-full bg-brand-orange" />
          <p className="text-brand-gray-text leading-relaxed">
            A simple process. One connected infrastructure.
          </p>
        </div>
      </Reveal>

      <div
        className="mb-10 grid items-start gap-8 lg:mb-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setPaused(false);
          }
        }}
      >
        <Reveal>
          <ol className="how-stepper relative space-y-1.5">
            <span
              aria-hidden
              className="how-stepper-line pointer-events-none absolute left-[27px] top-7 bottom-7 w-px bg-orange-100/90"
            />
            {steps.map((step, i) => {
              const isActive = i === active;
              const Icon = step.icon;
              return (
                <li key={step.num} className="relative z-10">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-current={isActive ? "step" : undefined}
                    className={cn(
                      "group flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 sm:gap-3.5 sm:px-3.5",
                      isActive
                        ? "border-brand-orange/45 bg-white/80 shadow-[0_8px_28px_rgba(255,107,0,0.12)]"
                        : "border-transparent hover:border-orange-100/80 hover:bg-white/50"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300",
                        isActive
                          ? "border-brand-orange bg-brand-orange text-white"
                          : "border-brand-orange/55 bg-white text-brand-orange"
                      )}
                    >
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={cn(
                          "font-mono text-[11px] font-semibold tracking-wide",
                          isActive ? "text-brand-orange" : "text-brand-orange/55"
                        )}
                      >
                        {step.num}
                      </span>
                      <span className="mt-0.5 block font-tech text-[15px] font-bold leading-snug text-brand-dark sm:text-base">
                        {step.title}
                      </span>
                      <span className="mt-0.5 block text-xs leading-snug text-brand-gray-text sm:text-[13px]">
                        {step.short}
                      </span>
                    </span>
                    <ArrowRight
                      className={cn(
                        "mr-0.5 h-4 w-4 shrink-0 transition-opacity duration-300",
                        isActive
                          ? "text-brand-orange opacity-100"
                          : "opacity-0 group-hover:opacity-40"
                      )}
                      strokeWidth={2}
                    />
                  </button>
                </li>
              );
            })}
          </ol>
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <article className="how-detail-card relative flex h-[36rem] flex-col overflow-hidden rounded-[1.75rem] border border-orange-100/80 bg-white shadow-[0_16px_48px_rgba(26,26,26,0.06)] sm:h-[38rem] lg:h-[40rem]">
            <CardMedia
              src={current.image}
              alt={current.title}
              heightClass="h-32 shrink-0 sm:h-36"
              className="rounded-none"
            />
            <div className="relative z-10 grid min-h-0 flex-1 gap-5 p-5 sm:gap-6 sm:p-7 lg:grid-cols-[1fr_0.88fr] lg:gap-6 lg:p-8">
              <div className="flex h-full min-h-0 flex-col">
                <p className="shrink-0 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  STEP {current.num}
                </p>

                {/* Reserved block: keeps title→detail gap tight; absorbs 1 vs 2-line titles below the copy */}
                <div className="mt-2 flex min-h-[7.75rem] shrink-0 flex-col sm:min-h-[8.5rem]">
                  <h3 className="font-tech text-2xl font-bold leading-snug text-brand-dark sm:text-3xl">
                    {current.title}
                  </h3>
                  <p className="mt-2.5 max-w-md text-sm leading-relaxed text-brand-gray-text line-clamp-3 sm:text-[15px]">
                    {current.detail}
                  </p>
                </div>

                <div
                  className="mt-4 flex shrink-0 gap-1.5 sm:mt-5"
                  role="progressbar"
                  aria-valuenow={active + 1}
                  aria-valuemin={1}
                  aria-valuemax={steps.length}
                  aria-label={`Step ${active + 1} of ${steps.length}`}
                >
                  {steps.map((step, i) => (
                    <span
                      key={step.num}
                      className={cn(
                        "h-1.5 flex-1 rounded-full transition-colors duration-500",
                        i <= active ? "bg-brand-orange" : "bg-brand-orange-muted/45"
                      )}
                    />
                  ))}
                </div>

                <div className="mt-auto grid shrink-0 gap-3 pt-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-4 sm:pt-6">
                  {current.features.map((feature) => (
                    <div key={feature.title} className="flex min-h-[3.25rem] items-start gap-3">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-orange/50 bg-brand-orange-light/60 text-brand-orange">
                        <feature.icon
                          className="h-4 w-4"
                          strokeWidth={1.75}
                        />
                      </span>
                      <div className="min-w-0">
                        <p className="font-tech text-sm font-bold leading-snug text-brand-dark">
                          {feature.title}
                        </p>
                        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-brand-gray-text">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden min-h-0 lg:block">
                <HowQuoteGraphic />
              </div>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={160}>
        <div className="rounded-[1.5rem] border border-orange-100/80 bg-white px-5 py-6 shadow-[0_10px_36px_rgba(26,26,26,0.04)] sm:px-7 sm:py-7">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {bottomFeatures.map((item) => (
              <div key={item.title} className="flex items-start gap-3.5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-brand-orange/50 bg-brand-orange-light/50 text-brand-orange">
                  <item.icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-tech text-sm font-bold leading-snug text-brand-dark">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs leading-snug text-brand-gray-text sm:text-[13px]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}

function HowQuoteGraphic() {
  return (
    <div
      className="how-quote-graphic absolute inset-0 flex items-center justify-center"
      aria-hidden
    >
      <div className="relative w-full max-w-[17.5rem]">
        <div className="overflow-hidden rounded-2xl border border-orange-100 bg-[#f3ebe3] shadow-[0_12px_32px_rgba(255,107,0,0.14)]">
          <div className="flex items-center gap-1.5 border-b border-orange-100/80 bg-white/70 px-3 py-2.5">
            <span className="h-2 w-2 rounded-full bg-brand-orange/35" />
            <span className="h-2 w-2 rounded-full bg-brand-orange/25" />
            <span className="h-2 w-2 rounded-full bg-brand-orange/15" />
            <div className="ml-2 h-5 flex-1 rounded-md bg-white/90 px-2 text-[9px] leading-5 text-brand-gray-text/70">
              Search inventory…
            </div>
          </div>
          <div className="space-y-2.5 p-4">
            {[0.92, 0.78, 0.64, 0.86, 0.55].map((width, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="h-2 w-2 shrink-0 rounded-full bg-brand-orange/40" />
                <span
                  className="h-2 rounded-full bg-brand-orange/25"
                  style={{ width: `${width * 100}%` }}
                />
              </div>
            ))}
            <div className="mt-1 grid grid-cols-3 gap-2 pt-1">
              {[1, 2, 3].map((cell) => (
                <div
                  key={cell}
                  className="h-10 rounded-lg border border-orange-100/70 bg-white/50"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="how-quote-float absolute -bottom-2 -right-3 w-[11.5rem] rounded-2xl border border-orange-100 bg-white p-3.5 shadow-[0_14px_36px_rgba(26,26,26,0.1)]">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.16em] text-brand-orange">
            Customer Quote
          </p>
          <p className="mt-1.5 font-tech text-xl font-bold text-brand-dark">
            €2,450
          </p>
          <p className="mt-0.5 text-[10px] leading-snug text-brand-gray-text">
            Illustrative partner offer
          </p>
          <div className="mt-3 flex items-center justify-center gap-1.5 rounded-lg bg-brand-orange px-3 py-2 text-[11px] font-semibold text-white">
            Send Quote
            <Send className="h-3 w-3" strokeWidth={2} />
          </div>
        </div>
      </div>
    </div>
  );
}
