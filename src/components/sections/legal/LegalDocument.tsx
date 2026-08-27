"use client";

import { useEffect } from "react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { legalSections } from "@/lib/constants/support";
import { cn } from "@/lib/utils";

export function LegalDocument() {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, []);

  return (
    <>
      <HomeFrame variant="plain" className="!py-8 sm:!py-10 lg:!py-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <HomeKicker>Legal</HomeKicker>
            <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Legal{" "}
              <span className="text-brand-orange">Policies.</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={50}>
          <nav
            aria-label="Legal sections"
            className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2"
          >
            {legalSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-orange-100 bg-white px-3.5 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-dark transition hover:border-brand-orange/40 hover:text-brand-orange"
              >
                {section.title}
              </a>
            ))}
          </nav>
        </Reveal>
      </HomeFrame>

      {legalSections.map((section, i) => (
        <HomeFrame
          key={section.id}
          id={section.id}
          tinted={i % 2 === 1}
          variant="plain"
          className="!scroll-mt-24 !py-10 sm:!py-12 lg:!py-14"
        >
          <Reveal>
            <article
              className={cn(
                "mx-auto max-w-3xl rounded-[1.75rem] border border-orange-100 bg-white p-6 shadow-[0_12px_36px_rgba(40,30,20,0.05)] sm:p-8"
              )}
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 font-tech text-2xl font-bold text-brand-dark sm:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
                {section.body}
              </p>
            </article>
          </Reveal>
        </HomeFrame>
      ))}
    </>
  );
}
