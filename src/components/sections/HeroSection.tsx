"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroBackgroundSlideshow } from "@/components/sections/hero/HeroBackgroundSlideshow";
import { siteImages } from "@/lib/constants/images";
import { heroStats } from "@/lib/constants/stats";

export function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-brand-dark">
      <div className="relative flex h-[75vh] min-h-[75vh] flex-col overflow-hidden">
        <HeroBackgroundSlideshow images={siteImages.hero.backgrounds} />

        <div className="relative z-10 flex flex-1 items-center px-4 py-16 sm:px-6 sm:py-20 md:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-5xl text-center lg:max-w-6xl lg:text-left">
            <h1 className="hero-fade-up hero-fade-up-delay-2 mb-5 font-tech text-[2.15rem] font-bold leading-[1.02] tracking-[-0.03em] text-white min-[480px]:text-[2.65rem] sm:mb-6 sm:text-5xl xl:text-[3.85rem]">
              The Command Center
              <br />
              <span className="relative inline-block mt-1">
                <span className="bg-gradient-to-r from-brand-orange via-[#ff8a3d] to-brand-orange bg-clip-text text-transparent">
                  of Live Entertainment
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-brand-orange/0 via-brand-orange to-brand-orange/0 sm:-bottom-1.5 sm:h-[2px]" />
              </span>
            </h1>

            <p className="hero-fade-up hero-fade-up-delay-3 mx-auto mb-8 max-w-2xl text-base font-light leading-relaxed text-white/75 sm:mb-9 sm:text-lg md:text-xl lg:mx-0">
              The global B2B ticket distribution engine powering scalable,
              risk-free inventory for the world&apos;s leading travel,
              hospitality, and concierge partners.
            </p>

            <div className="hero-fade-up hero-fade-up-delay-4 mb-8 flex flex-col items-stretch justify-center gap-3.5 sm:mb-9 sm:flex-row sm:items-center lg:justify-start">
              <Link
                href="#contact"
                className="hero-cta-glow group relative flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-hover px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] sm:text-base"
              >
                <span className="pointer-events-none absolute inset-0 hero-shimmer opacity-50" />
                <span className="relative">Become a Premium Partner</span>
                <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="#advantage"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.04] px-8 py-4 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 hover:border-brand-orange/50 hover:bg-white/[0.08] sm:text-base"
              >
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-brand-orange/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative">View Advantage</span>
                <ArrowUpRight className="relative h-4 w-4 text-white/50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-orange" />
              </Link>
            </div>

            <div className="hero-fade-up hero-fade-up-delay-5 flex flex-wrap justify-center gap-2 sm:gap-2.5 lg:justify-start">
              {heroStats.map(({ label, icon: Icon }) => (
                <span
                  key={label}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/35 hover:bg-white/[0.1] hover:text-white sm:px-3.5 sm:py-2"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange/15 transition-colors group-hover:bg-brand-orange/25 sm:h-6 sm:w-6">
                    <Icon className="h-3 w-3 text-brand-orange" />
                  </span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
