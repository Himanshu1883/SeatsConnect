"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";
import { topicPages } from "@/lib/constants/topics";

export function ResourcesTopics() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>Further reading</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Further{" "}
            <span className="text-brand-orange">Reading.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Indexable pages covering SeatsConnect as B2B distribution
            infrastructure.
          </p>
        </div>
      </Reveal>

      <div className="mx-auto grid max-w-4xl gap-2">
        {topicPages.map((topic, i) => (
          <Reveal key={topic.slug} delay={i * 30}>
            <Link
              href={`${routes.topics}/${topic.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl border border-orange-100 bg-white px-5 py-4 transition hover:border-brand-orange/35 hover:bg-[#faf7f3]"
            >
              <div className="min-w-0">
                <p className="font-tech text-[15px] font-bold text-brand-dark">
                  {topic.title}
                </p>
                <p className="mt-0.5 truncate text-sm text-brand-gray-text">
                  {topic.headline}
                </p>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-brand-orange transition group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        ))}
      </div>
    </HomeFrame>
  );
}
