"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { CardMedia } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { solutionCards } from "@/lib/constants/solutions";

export function SolutionsGrid() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mb-8 text-center">
          <HomeKicker>Solutions</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Built Around{" "}
            <span className="text-brand-orange">Your Business.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {solutionCards.map((solution, i) => (
          <Reveal key={solution.href} delay={i * 40}>
            <Link
              href={solution.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-orange-100 bg-white transition hover:border-brand-orange/35 hover:shadow-[0_16px_40px_rgba(40,30,20,0.08)]"
            >
              <CardMedia
                src={solution.image}
                alt={solution.title}
                heightClass="h-36"
              />
              <div className="flex flex-1 flex-col p-5">
                <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-orange">
                  {solution.title}
                </p>
                <h3 className="mb-2 font-tech text-[15px] font-bold leading-snug text-brand-dark">
                  {solution.headline}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-gray-text">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:underline">
                  {solution.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </HomeFrame>
  );
}
