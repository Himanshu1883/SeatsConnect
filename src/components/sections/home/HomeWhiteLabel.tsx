import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  AppWindow,
  ArrowRight,
  Code2,
  Flag,
  Globe2,
  IdCard,
  Layers,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Smartphone,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";
import { cn } from "@/lib/utils";

function CustomerJourneyArt() {
  return (
    <div className="wl-browser" aria-hidden>
      <div className="wl-browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="wl-browser-body">
        <div className="wl-browser-hero" />
        <div className="wl-browser-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}

function BrandLayerArt() {
  return (
    <div className="wl-devices" aria-hidden>
      <div className="wl-browser wl-browser-compact">
        <div className="wl-browser-bar">
          <span />
          <span />
          <span />
        </div>
        <div className="wl-browser-stack">
          <span className="wl-browser-hero wl-browser-hero-wide" />
          <span />
          <span />
        </div>
      </div>
      <div className="wl-phone">
        <span className="wl-phone-notch" />
        <span className="wl-phone-screen" />
        <span />
        <span />
      </div>
    </div>
  );
}

function InfraArt() {
  return (
    <svg viewBox="0 0 132 92" className="wl-infra" aria-hidden>
      <g
        fill="none"
        stroke="#ff6b00"
        strokeWidth="1.2"
        strokeLinecap="round"
        className="wl-infra-line"
      >
        <path d="M36 22 58 38" />
        <path d="M96 22 74 38" />
        <path d="M36 72 58 56" />
        <path d="M96 72 74 56" />
      </g>
      <g fill="#faf6f2" stroke="#ff6b00" strokeWidth="1.25">
        <rect x="16" y="10" width="22" height="14" rx="2.5" />
        <path d="M20 14h8M20 17.5h5" stroke="#ff6b00" strokeWidth="1" />
        <rect x="94" y="8" width="20" height="18" rx="2.5" />
        <path d="M98 14h12M98 18h8" stroke="#ff6b00" strokeWidth="1" />
        <rect x="16" y="68" width="20" height="16" rx="2.5" />
        <path d="M20 74h12M20 78h8" stroke="#ff6b00" strokeWidth="1" />
        <rect x="96" y="68" width="18" height="16" rx="2" />
        <path d="M100 73h10M100 77h7" stroke="#ff6b00" strokeWidth="1" />
      </g>
      <ellipse
        cx="66"
        cy="38"
        rx="16"
        ry="6"
        fill="#faf6f2"
        stroke="#ff6b00"
        strokeWidth="1.3"
      />
      <path
        d="M50 38v18c0 3.4 7.2 6 16 6s16-2.6 16-6V38"
        fill="#f3e6d6"
        stroke="#ff6b00"
        strokeWidth="1.3"
      />
      <ellipse
        cx="66"
        cy="38"
        rx="16"
        ry="6"
        fill="#ffb380"
        stroke="#ff6b00"
        strokeWidth="1.3"
      />
      <ellipse
        cx="66"
        cy="44"
        rx="11"
        ry="3.2"
        fill="none"
        stroke="#e55f00"
        strokeWidth="0.9"
      />
    </svg>
  );
}

const solutions: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "White-label websites",
    description: "Deliver a seamless branded experience.",
    icon: AppWindow,
  },
  {
    title: "API-powered platforms",
    description: "Connect and scale with powerful APIs.",
    icon: Code2,
  },
  {
    title: "Embedded inventory",
    description: "Show live inventory directly in your platform.",
    icon: Layers,
  },
  {
    title: "Partner portals",
    description: "Give partners tools to search, book and manage.",
    icon: IdCard,
  },
  {
    title: "Mobile applications",
    description: "Bring live events to your mobile experience.",
    icon: Smartphone,
  },
  {
    title: "Custom booking journeys",
    description: "Create unique booking flows that fit your brand.",
    icon: Flag,
  },
];

const layers: {
  num: string;
  title: string;
  text: string;
  icon: LucideIcon;
  Art: () => ReactNode;
}[] = [
  {
    num: "01",
    title: "Your customer journey.",
    text: "The partner remains the brand the customer sees.",
    icon: User,
    Art: CustomerJourneyArt,
  },
  {
    num: "02",
    title: "Your brand layer.",
    text: "Websites, apps, portals and embedded booking flows stay yours.",
    icon: MonitorSmartphone,
    Art: BrandLayerArt,
  },
  {
    num: "03",
    title: "SeatsConnect infrastructure.",
    text: "Inventory, booking and fulfilment connect underneath.",
    icon: Server,
    Art: InfraArt,
  },
];

export function HomeWhiteLabel() {
  return (
    <HomeFrame tinted variant="plain">
      <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 xl:gap-14">
        <Reveal>
          <HomeKicker>White Label</HomeKicker>

          <div className="mt-3 flex gap-3.5 sm:gap-4">
            <span
              aria-hidden
              className="mt-1.5 hidden w-1 shrink-0 rounded-full bg-brand-orange sm:block sm:h-[4.6rem]"
            />
            <div className="min-w-0">
              <h2 className="font-tech text-3xl font-bold leading-[1.12] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.55rem]">
                Your Brand. Connected to{" "}
                <span className="text-brand-orange">Global Supply.</span>
              </h2>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-brand-gray-text sm:text-base">
                SeatsConnect can support approved partners who want event
                inventory connected directly into their own customer journey.
              </p>
            </div>
          </div>

          <p className="mt-8 font-mono text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text/80">
            Potential solutions include
          </p>

          <ul className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
            {solutions.map((item) => (
              <li key={item.title}>
                <div className="wl-feature home-card-lift flex h-full items-start gap-3 rounded-2xl border border-orange-100/90 bg-white px-3.5 py-3.5 shadow-[0_1px_4px_rgba(166,122,70,0.04)] sm:px-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand-orange/45 bg-brand-orange-light/70 text-brand-orange">
                    <item.icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="font-tech text-[13px] font-bold leading-snug text-brand-dark sm:text-sm">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-brand-gray-text">
                      {item.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange-light/80 px-4 py-3.5 sm:items-center sm:px-5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand-orange shadow-sm sm:mt-0">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.85} />
            </span>
            <p className="text-sm leading-relaxed text-brand-dark/90">
              <span className="font-semibold text-brand-dark">
                SeatsConnect provides the infrastructure
              </span>{" "}
              while the partner maintains the relationship with its customer.
            </p>
          </div>

          <Button href={routes.solutionsWhiteLabel} className="mt-6">
            Explore White Label
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <Reveal delay={120}>
          <div className="wl-panel rounded-[1.75rem] border border-brand-orange/20 bg-white p-5 shadow-[0_16px_48px_rgba(26,26,26,0.06)] sm:p-6 lg:p-7">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-gray-text/75">
              How it works
            </p>

            <div className="relative mt-5">
              <div
                aria-hidden
                className="pointer-events-none absolute top-5 bottom-5 left-[15px] w-px sm:left-[17px]"
              >
                <div className="wl-rail absolute inset-y-0 left-0" />
              </div>

              <ol className="relative space-y-5 sm:space-y-6">
                {layers.map((layer, i) => (
                  <li
                    key={layer.num}
                    className={cn(
                      "grid grid-cols-[32px_1fr] items-start gap-x-3.5 sm:grid-cols-[36px_1fr] sm:gap-x-4",
                      i === 0 && "wl-step-active"
                    )}
                  >
                    <span className="relative z-10 flex h-8 w-8 items-center justify-center sm:h-9 sm:w-9">
                      <span className="wl-step-num flex h-full w-full items-center justify-center rounded-full bg-brand-orange font-mono text-[10px] font-bold text-white shadow-[0_0_0_4px_rgba(255,107,0,0.12)] sm:text-[11px]">
                        {layer.num}
                      </span>
                    </span>

                    <div className="flex min-w-0 flex-col gap-3 min-[560px]:flex-row min-[560px]:items-center min-[560px]:gap-4">
                      <div className="flex min-w-0 flex-1 items-start gap-3">
                        <span className="wl-layer-icon shrink-0">
                          <layer.icon className="h-4 w-4" strokeWidth={1.7} />
                        </span>
                        <div className="min-w-0 pt-0.5">
                          <h3 className="font-tech text-sm font-bold leading-snug text-brand-dark sm:text-[15px]">
                            {layer.title}
                          </h3>
                          <p className="mt-1 text-[12px] leading-snug text-brand-gray-text sm:text-[13px]">
                            {layer.text}
                          </p>
                        </div>
                      </div>
                      <div className="wl-art shrink-0 self-start min-[560px]:self-center">
                        <layer.Art />
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 flex items-start gap-3.5 rounded-2xl border border-orange-100/90 bg-[#f7f1ea] px-4 py-4 sm:items-center sm:gap-4 sm:px-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_20px_rgba(255,107,0,0.28)]">
                <Globe2 className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="font-tech text-sm font-bold leading-snug text-brand-dark sm:text-[15px]">
                  One connection. Your brand. Global supply.
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-gray-text sm:text-[13px]">
                  Access inventory from around the world, delivered through your
                  brand to your customers.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
