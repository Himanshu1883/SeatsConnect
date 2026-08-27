"use client";

import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Box,
  Calendar,
  CheckCircle2,
  Package,
  Receipt,
  RefreshCw,
  Tag,
  Truck,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const capabilities: {
  name: string;
  desc: string;
  icon: LucideIcon;
}[] = [
  {
    name: "Events",
    desc: "Access event and venue information.",
    icon: Calendar,
  },
  {
    name: "Products",
    desc: "Retrieve ticket and hospitality product information.",
    icon: Package,
  },
  {
    name: "Inventory",
    desc: "Access connected inventory.",
    icon: Box,
  },
  {
    name: "Availability",
    desc: "View current availability.",
    icon: RefreshCw,
  },
  {
    name: "Pricing",
    desc: "Access applicable pricing.",
    icon: Tag,
  },
  {
    name: "Orders",
    desc: "Create and retrieve booking information.",
    icon: Receipt,
  },
  {
    name: "Booking Status",
    desc: "Monitor order progress.",
    icon: CheckCircle2,
  },
  {
    name: "Fulfilment",
    desc: "Exchange fulfilment and delivery information.",
    icon: Truck,
  },
  {
    name: "Webhooks",
    desc: "Receive relevant real-time updates.",
    icon: Bell,
  },
];

export function ApiCapabilities() {
  return (
    <HomeFrame
      id="capabilities"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <div className="flex w-full flex-col gap-8 lg:gap-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <HomeKicker>API Surface</HomeKicker>
            <h2 className="mt-3 font-tech text-[1.75rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-3xl lg:text-[2.25rem]">
              API <span className="text-brand-orange">Capabilities.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Depending on integration and access level, SeatsConnect APIs may
              support the following capabilities across supply and distribution.
            </p>
          </div>
        </Reveal>

        <Reveal delay={70}>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <article
                key={cap.name}
                className="group flex items-start gap-3.5 rounded-2xl border border-orange-100/90 bg-white p-4 shadow-[0_8px_24px_rgba(40,30,20,0.04)] transition-shadow duration-300 hover:shadow-[0_14px_32px_rgba(40,30,20,0.08)] sm:p-5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                  <cap.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                    {cap.name}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-brand-gray-text">
                    {cap.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
