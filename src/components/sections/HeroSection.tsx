"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { HeroBackgroundSlideshow } from "@/components/sections/hero/HeroBackgroundSlideshow";
import { HeroVisualPanel } from "@/components/sections/hero/HeroVisualPanel";
import { siteImages } from "@/lib/constants/images";
import { heroHighlights, heroStats } from "@/lib/constants/stats";

function HeroStatCard({
  value,
  label,
  accent,
  icon: Icon,
}: (typeof heroStats)[number]) {
  const isOrange = accent === "orange" || accent === "trusted";

  return (
    <div className="group relative overflow-hidden p-4 sm:p-5 rounded-2xl bg-white border border-orange-100 shadow-sm hover:shadow-xl hover:shadow-brand-orange/10 hover:border-brand-orange/35 hover:-translate-y-0.5 transition-all duration-300">
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-orange scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
      <div
        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
          isOrange ? "bg-brand-orange-light text-brand-orange" : "bg-gray-100 text-brand-dark"
        }`}
      >
        <Icon className="w-5 h-5" />
      </div>
      <p
        className={`font-tech text-lg sm:text-xl font-bold leading-tight ${
          isOrange ? "text-brand-orange" : "text-brand-dark"
        }`}
      >
        {value.includes("API") ? (
          <>
            Advanced <span className="text-brand-orange">API</span>
          </>
        ) : (
          value
        )}
      </p>
      <p className="text-[11px] text-brand-gray-text uppercase tracking-widest mt-1.5">
        {label}
      </p>
    </div>
  );
}

export function HeroSection() {
  return (
    <header className="border-b border-orange-100 bg-brand-dark overflow-hidden">
      <div className="relative overflow-hidden flex flex-col min-h-0 lg:h-[90vh] lg:max-h-[90vh]">
        <HeroBackgroundSlideshow images={siteImages.hero.backgrounds} />

        <div className="relative z-10 flex-1 flex items-center px-4 sm:px-6 py-8 sm:py-10 md:py-12 lg:py-10">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center w-full">
              <div className="text-center lg:text-left order-2 lg:order-1 min-w-0 w-full">
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/10 border border-white/15 text-brand-orange text-[10px] sm:text-[11px] font-semibold tracking-[0.12em] sm:tracking-[0.14em] uppercase font-tech mb-4 sm:mb-5 shadow-md backdrop-blur-sm max-w-full">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
                  </span>
                  The Premium Spin-Off of SeatsBrokers.com
                </div>

                <h1 className="font-tech text-[1.65rem] min-[480px]:text-[2rem] sm:text-4xl xl:text-[3.25rem] font-bold tracking-tight text-white mb-3 sm:mb-4 leading-[1.1]">
                  The Command Center
                  <br />
                  <span className="text-brand-orange">of Live Entertainment</span>
                </h1>

                <div className="flex items-center gap-3 mb-5 justify-center lg:justify-start">
                  <div className="hero-accent-bar h-1.5 w-14 rounded-full" />
                  <Sparkles className="w-4 h-4 text-brand-orange/70 hidden sm:block" />
                </div>

                <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-5 sm:mb-6 break-words">
                  The global B2B ticket distribution engine powering scalable,
                  risk-free inventory for the world&apos;s leading travel,
                  hospitality, and concierge partners.
                </p>

                <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-stretch sm:items-center gap-3 mb-6">
                  <Link
                    href="#contact"
                    className="group px-7 py-3.5 rounded-xl font-bold bg-brand-orange hover:bg-brand-orange-hover text-white transition-all shadow-lg shadow-brand-orange/30 hover:shadow-brand-orange/45 flex items-center justify-center gap-2.5 text-sm sm:text-base"
                  >
                    Become a Premium Partner
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href="#advantage"
                    className="px-7 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/15 border-2 border-white/20 hover:border-brand-orange text-white transition-all flex items-center justify-center gap-2 text-sm sm:text-base backdrop-blur-sm"
                  >
                    View Advantage
                  </Link>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {heroHighlights.map((item) => (
                    <span
                      key={item.label}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 border border-white/15 text-xs font-semibold text-white shadow-sm backdrop-blur-sm"
                    >
                      <item.icon className="w-3.5 h-3.5 text-brand-orange" />
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="order-1 lg:order-2 min-w-0 w-full">
                <HeroVisualPanel slides={siteImages.hero.panelSlides} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white px-4 sm:px-6 py-6 sm:py-8 md:py-10 border-t border-orange-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 min-[400px]:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {heroStats.map((stat) => (
            <HeroStatCard key={stat.label} {...stat} />
          ))}
        </div>
      </div>

    </header>
  );
}
