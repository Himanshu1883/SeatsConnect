"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BookOpen,
  Code2,
  ExternalLink,
  Headphones,
  LayoutDashboard,
  Send,
  Users,
} from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { supportHelpAreas } from "@/lib/constants/support";

const icons: Record<string, LucideIcon> = {
  "Join SeatsConnect": Users,
  "Partner Platform": LayoutDashboard,
  "Submit a Request": Send,
  "API & Developers": Code2,
  "Partner Resources": BookOpen,
  "Contact the Team": Headphones,
};

export function SupportHelp() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mb-8">
          <HomeKicker>Help centre</HomeKicker>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {supportHelpAreas.map((area, i) => {
          const Icon = icons[area.title] ?? BookOpen;
          const className =
            "group flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)] transition hover:border-brand-orange/35 hover:shadow-[0_16px_40px_rgba(40,30,20,0.08)]";

          const body = (
            <>
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                {area.title}
              </h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-gray-text">
                {area.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:underline">
                Open
                {"external" in area && area.external ? (
                  <ExternalLink className="h-3.5 w-3.5" />
                ) : (
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                )}
              </span>
            </>
          );

          return (
            <Reveal key={area.title} delay={i * 35}>
              {"external" in area && area.external ? (
                <a href={area.href} className={className}>
                  {body}
                </a>
              ) : (
                <Link href={area.href} className={className}>
                  {body}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </HomeFrame>
  );
}
