"use client";

import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { legalHubCards, legalReviewNotice } from "@/lib/constants/legal";
import { routes } from "@/lib/constants/routes";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LegalDocument() {
  return (
    <HomeFrame variant="plain" className="!py-6 sm:!py-7 lg:!py-8">
      <Reveal>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <HomeKicker>Legal Pages</HomeKicker>
            <h2 className="mt-2 font-tech text-2xl font-bold leading-[1.08] text-brand-dark sm:text-3xl">
              Policies{" "}
              <span className="text-brand-orange">and Standards.</span>
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-brand-gray-text lg:text-right">
            {legalReviewNotice}
          </p>
        </div>
      </Reveal>

      <Reveal delay={50}>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {legalHubCards.map((card, i) => (
            <Link
              key={card.slug}
              href={card.href}
              className="group flex flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_8px_24px_rgba(40,30,20,0.04)] transition hover:-translate-y-0.5 hover:border-brand-orange/30"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-2 font-tech text-lg font-bold text-brand-dark">
                {card.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-snug text-brand-gray-text">
                {card.text}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 font-tech text-sm font-semibold text-brand-orange">
                Read this page
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <p className="mt-6 text-sm text-brand-gray-text">
          Need to speak with the team?{" "}
          <Link
            href={routes.contact}
            className="font-semibold text-brand-orange hover:underline"
          >
            Talk to Our Team
          </Link>
          .
        </p>
      </Reveal>
    </HomeFrame>
  );
}
