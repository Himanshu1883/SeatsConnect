"use client";

import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Code2,
  Handshake,
  Headphones,
  Package,
} from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { contactChannels } from "@/lib/constants/engage";

const icons: Record<string, LucideIcon> = {
  supply: Package,
  distribution: Handshake,
  api: Code2,
  general: Headphones,
};

export function ContactChannels() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>How can we help</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Reach the Right{" "}
            <span className="text-brand-orange">Team.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Whether you want to connect inventory, join our distribution network
            or discuss an integration, our team can help.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2">
        {contactChannels.map((channel, i) => {
          const Icon = icons[channel.id] ?? Headphones;
          return (
            <Reveal key={channel.id} delay={i * 40}>
              <Link
                href={channel.href}
                className="group flex h-full flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)] transition hover:border-brand-orange/35 hover:shadow-[0_16px_40px_rgba(40,30,20,0.08)] sm:p-6"
              >
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                  <Icon className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                  {channel.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-brand-gray-text">
                  {channel.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-orange group-hover:underline">
                  {channel.cta}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </HomeFrame>
  );
}
