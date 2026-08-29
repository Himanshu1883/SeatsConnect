"use client";

import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import {
  legalHubCards,
  legalPages,
  type LegalPage,
} from "@/lib/constants/legal";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import Link from "next/link";

export function LegalPolicy({ slug }: { slug: LegalPage["slug"] }) {
  const page = legalPages[slug];
  const related = legalHubCards.filter((card) => card.slug !== slug);

  return (
    <HomeFrame variant="plain" className="!py-6 sm:!py-7 lg:!py-8">
      <Reveal>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <HomeKicker>{page.eyebrow}</HomeKicker>
          <p className="text-sm text-brand-gray-text">
            <Link
              href={routes.legal}
              className="font-semibold text-brand-orange hover:underline"
            >
              All legal pages
            </Link>
            {" · "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-brand-orange hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
        </div>
        <p className="mt-4 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-4 py-3 text-sm leading-relaxed text-brand-dark">
          {page.reviewNotice}
        </p>
      </Reveal>

      <Reveal delay={40}>
        <div className="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5">
          {page.sections.map((section, i) => (
            <article
              key={section.heading}
              className="rounded-2xl border border-orange-100 bg-white p-5 sm:p-6"
            >
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-1.5 font-tech text-lg font-bold text-brand-dark sm:text-xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 48)}
                  className="mt-3 text-sm leading-relaxed text-brand-gray-text"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
                  {section.bullets.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-sm leading-snug text-brand-gray-text"
                    >
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="mt-6 border-t border-orange-100 pt-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
            Related
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-3">
            {related.map((card) => (
              <Link
                key={card.slug}
                href={card.href}
                className="rounded-xl border border-orange-100 bg-[#faf7f3] px-4 py-3 text-sm font-semibold text-brand-dark transition hover:border-brand-orange/35 hover:text-brand-orange"
              >
                {card.title}
              </Link>
            ))}
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
