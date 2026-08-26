import {
  ArrowRight,
  BarChart3,
  RefreshCw,
  Globe2,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { HeroBackgroundSlideshow } from "@/components/sections/hero/HeroBackgroundSlideshow";
import { HeroNetworkConsole } from "@/components/sections/hero/HeroNetworkConsole";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const features = [
  {
    icon: Globe2,
    title: "Global Network",
    text: "Reach verified B2B partners.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control",
    text: "You decide what, where and how.",
  },
  {
    icon: RefreshCw,
    title: "Live Inventory",
    text: "Real-time availability and updates.",
  },
  {
    icon: BarChart3,
    title: "Built for Scale",
    text: "Enterprise-grade reliability.",
  },
];

export function HomeHero() {
  return (
    <section className="hero-band flex items-center px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:h-[calc(100dvh-var(--site-header-height))] lg:max-h-[calc(100dvh-var(--site-header-height))] lg:min-h-0 lg:overflow-hidden lg:py-4 xl:py-6">
      <HeroBackgroundSlideshow images={siteImages.hero.backgrounds} overlay="warm" />
      <div className="pointer-events-none absolute inset-0 z-[1] surface-grid opacity-30" aria-hidden />
      <div className="relative z-10 mx-auto w-full min-h-0 max-w-7xl">
        <div className="grid min-h-0 items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-10">
          <div className="relative isolate">
            <div
              aria-hidden
              className="hero-copy-veil pointer-events-none absolute -inset-x-4 -inset-y-4 z-0 rounded-[1.75rem] sm:-inset-x-5 sm:-inset-y-5"
            />
            <div className="relative z-[1]">
              <span className="hero-fade-up mb-3 inline-flex rounded-md border border-brand-orange/30 bg-white/90 px-3 py-1.5 font-tech text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-orange shadow-[0_1px_0_rgba(255,255,255,0.8)] xl:mb-4">
                API-powered B2B distribution
              </span>
              <h1 className="hero-fade-up hero-fade-up-delay-1 hero-copy-legible mb-3 font-tech text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-[2.85rem] xl:mb-4 xl:text-[3.35rem] xl:leading-[1.05]">
                <span className="text-brand-dark">Connect Once.</span>
                <br />
                <span className="text-brand-orange">Distribute Globally.</span>
              </h1>
              <p className="hero-fade-up hero-fade-up-delay-2 hero-copy-legible mb-4 max-w-xl text-base leading-relaxed text-[#3f3f46] sm:text-lg lg:mb-3 lg:text-base lg:leading-snug xl:mb-5 xl:text-lg xl:leading-relaxed">
                API-powered B2B distribution infrastructure for tickets, hospitality
                and live experiences. Connect suppliers with approved partners —
                while keeping control over how inventory is made available.
              </p>
              <div className="hero-fade-up hero-fade-up-delay-3 mb-5 grid max-w-lg grid-cols-1 gap-x-5 gap-y-2 rounded-2xl bg-white/45 p-2.5 backdrop-blur-[3px] ring-1 ring-white/70 sm:grid-cols-2 sm:p-3 lg:mb-4 xl:mb-6 xl:p-3.5">
                {features.map((feature) => (
                  <div key={feature.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-orange-100 bg-white text-brand-orange shadow-sm">
                      <feature.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-tech text-sm font-bold text-brand-dark">
                        {feature.title}
                      </p>
                      <p className="text-xs leading-snug text-[#52525b]">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="hero-fade-up hero-fade-up-delay-4 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button
                  href={routes.joinSupplier}
                  className="rounded-full px-6 hero-cta-glow"
                >
                  Connect Your Inventory
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  href={routes.joinPartner}
                  variant="outline"
                  className="rounded-full bg-white/95"
                >
                  Join Our Network
                </Button>
                <Button
                  href={routes.contact}
                  variant="ghost"
                  className="rounded-full bg-white/70 px-3"
                >
                  Talk to Our Team
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </div>
              <div className="hero-fade-up hero-fade-up-delay-5 mt-4 inline-flex flex-wrap items-center gap-2 rounded-full border border-orange-100 bg-white/90 px-3 py-1.5 text-xs text-[#52525b] shadow-sm xl:mt-5">
                <span>Trusted by venues, promoters &amp; suppliers worldwide</span>
                <span className="rounded-full bg-brand-orange/15 px-2.5 py-0.5 font-tech font-semibold text-brand-orange">
                  Approved partner access
                </span>
              </div>
            </div>
          </div>

          <div className="hero-fade-up hero-fade-up-delay-3 hero-float min-h-0 lg:pl-2 xl:pl-4">
            <HeroNetworkConsole />
          </div>
        </div>
      </div>
    </section>
  );
}
