"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Headphones,
  Layers,
  Puzzle,
  Send,
  Users,
  Warehouse,
} from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { resourceGuides } from "@/lib/constants/engage";

const icons: Record<string, LucideIcon> = {
  "Platform Overview": Layers,
  "Supplier Guide": Warehouse,
  "Partner Guide": Users,
  "API Overview": Code2,
  "Developer Access": Code2,
  "White Label": Puzzle,
  "Submit a Request": Send,
  Support: Headphones,
};

const groups = ["Guides", "Technical", "Support"] as const;

export function ResourcesLibrary() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <HomeKicker>Library</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Partner{" "}
            <span className="text-brand-orange">Resources.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Reference pages for businesses connecting supply or distributing
            event inventory through SeatsConnect. Operational tools sit in the
            partner platform after access is approved.
          </p>
        </div>
      </Reveal>

      <div className="space-y-10">
        {groups.map((group) => {
          const items = resourceGuides.filter((r) => r.group === group);
          return (
            <div key={group}>
              <Reveal>
                <p className="mb-4 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  {group}
                </p>
              </Reveal>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((resource, i) => {
                  const Icon = icons[resource.title] ?? BookOpen;
                  return (
                    <Reveal key={resource.title} delay={i * 40}>
                      <Link
                        href={resource.href}
                        className="group flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)] transition hover:border-brand-orange/35 hover:shadow-[0_16px_40px_rgba(40,30,20,0.08)]"
                      >
                        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                          <Icon className="h-4 w-4" strokeWidth={1.8} />
                        </span>
                        <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                          {resource.title}
                        </h3>
                        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-gray-text">
                          {resource.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:underline">
                          Open
                          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </HomeFrame>
  );
}
