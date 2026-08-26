import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  Globe,
  IdCard,
  Layers,
  MonitorSmartphone,
  Route,
  Server,
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

const solutions: { title: string; icon: LucideIcon }[] = [
  { title: "White-label websites", icon: Globe },
  { title: "API-powered platforms", icon: Code2 },
  { title: "Embedded inventory", icon: Layers },
  { title: "Partner portals", icon: IdCard },
  { title: "Mobile applications", icon: Smartphone },
  { title: "Custom booking journeys", icon: Route },
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
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-16">
        <Reveal>
          <HomeKicker>White Label</HomeKicker>
          <h2 className="mt-3 mb-4 font-tech text-3xl font-bold leading-[1.12] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.65rem]">
            Your Brand. Connected to{" "}
            <span className="wl-accent">Global Supply.</span>
          </h2>
          <p className="mb-6 max-w-xl leading-relaxed text-brand-gray-text">
            SeatsConnect can support approved partners who want event inventory
            connected directly into their own customer journey.
          </p>
          <ul className="mb-6 grid grid-cols-2 gap-2.5">
            {solutions.map((item) => (
              <li key={item.title}>
                <div className="wl-feature home-card-lift flex items-center gap-2.5 rounded-xl border border-orange-100 bg-white px-3 py-2.5">
                  <item.icon
                    className="h-4 w-4 shrink-0 text-brand-orange"
                    strokeWidth={1.7}
                  />
                  <span className="text-[13px] font-medium leading-snug text-brand-dark">
                    {item.title}
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <p className="mb-8 text-sm leading-relaxed text-brand-gray-text">
            SeatsConnect provides the infrastructure while the partner maintains
            the relationship with its customer.
          </p>
          <Button href={routes.solutionsWhiteLabel}>
            Explore White Label
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Reveal>

        <Reveal delay={140}>
          <div className="wl-panel rounded-[1.6rem] border border-brand-orange/20 bg-white p-3.5 sm:p-5">
            <div className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute top-8 bottom-8 left-3 w-6"
              >
                <div className="wl-rail absolute inset-y-0 left-1/2 -translate-x-1/2" />
              </div>

              <ul className="relative space-y-2">
                {layers.map((layer, i) => (
                  <li
                    key={layer.num}
                    className={cn(
                      "wl-layer grid grid-cols-[24px_1fr] items-center gap-x-3 px-3",
                      i === 0 && "is-active"
                    )}
                  >
                    <span className="relative z-10 flex h-6 w-6 items-center justify-center">
                      <span className="wl-node">
                        <span className="wl-node-dot" />
                      </span>
                    </span>
                    <div className="flex min-w-0 flex-col gap-3 min-[560px]:flex-row min-[560px]:items-center">
                      <span className="wl-layer-icon">
                        <layer.icon className="h-4 w-4" strokeWidth={1.6} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                          Layer {layer.num}
                        </p>
                        <h3 className="mt-0.5 font-tech text-sm font-bold leading-snug text-brand-dark sm:text-[15px]">
                          {layer.title}
                        </h3>
                        <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                          {layer.text}
                        </p>
                      </div>
                      <div className="wl-art shrink-0 self-start min-[560px]:self-center">
                        <layer.Art />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
