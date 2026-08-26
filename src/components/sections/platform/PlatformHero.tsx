import {
  ArrowRight,
  Layers,
  Network,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackgroundSlideshow } from "@/components/sections/hero/HeroBackgroundSlideshow";
import { HeroNetworkConsole } from "@/components/sections/hero/HeroNetworkConsole";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const highlights = [
  {
    icon: Layers,
    title: "One Layer",
    text: "Connect supply and demand once.",
  },
  {
    icon: Network,
    title: "Global Routes",
    text: "Reach approved B2B channels worldwide.",
  },
  {
    icon: ShieldCheck,
    title: "Controlled Access",
    text: "You define rules, partners and terms.",
  },
];

export function PlatformHero() {
  return (
    <section className="hero-band flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:min-h-[calc(100dvh-var(--site-header-height))] lg:py-8">
      <HeroBackgroundSlideshow
        images={siteImages.hero.backgrounds}
        overlay="warm"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1] surface-grid opacity-30"
        aria-hidden
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-12">
          <div className="relative isolate">
            <div
              aria-hidden
              className="hero-copy-veil pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 rounded-[1.75rem] sm:-inset-x-5 sm:-inset-y-5"
            />
            <div className="relative z-[1]">
              <span className="hero-fade-up mb-3 inline-flex rounded-md border border-brand-orange/30 bg-white/90 px-3 py-1.5 font-tech text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange shadow-[0_1px_0_rgba(255,255,255,0.8)]">
                Platform infrastructure
              </span>
              <h1 className="hero-fade-up hero-fade-up-delay-1 hero-copy-legible mb-4 font-tech text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[2.75rem] xl:text-[3.15rem]">
                <span className="text-brand-dark">The Infrastructure Behind</span>
                <br />
                <span className="text-brand-orange">B2B Event Distribution.</span>
              </h1>
              <p className="hero-fade-up hero-fade-up-delay-2 hero-copy-legible mb-6 max-w-xl text-base leading-relaxed text-[#3f3f46] sm:text-lg">
                Connect supply, technology and professional distribution through
                one B2B infrastructure layer — from inventory connectivity through
                booking and fulfilment.
              </p>
              <div className="hero-fade-up hero-fade-up-delay-3 mb-7 grid max-w-lg grid-cols-1 gap-3 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-orange-100/80 bg-white/70 px-3 py-3 backdrop-blur-[2px]"
                  >
                    <item.icon
                      className="mb-2 h-4 w-4 text-brand-orange"
                      strokeWidth={1.7}
                    />
                    <p className="font-tech text-sm font-bold text-brand-dark">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[11px] leading-snug text-[#52525b]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
              <div className="hero-fade-up hero-fade-up-delay-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={routes.contact}>
                  Talk to Our Team
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button href={routes.api} variant="outline">
                  Explore API
                </Button>
                <Button href={routes.joinSupplier} variant="ghost">
                  Connect Inventory
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-fade-up hero-fade-up-delay-3 min-w-0">
            <HeroNetworkConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
