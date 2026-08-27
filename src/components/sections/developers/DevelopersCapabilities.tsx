"use client";

import type { LucideIcon } from "lucide-react";
import {
  Code2,
  FileJson,
  KeyRound,
  Lock,
  ShieldCheck,
  Webhook,
} from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

const portalItems: {
  title: string;
  description: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Authentication",
    description:
      "Access credentials and authentication methods for approved integrations.",
    icon: KeyRound,
  },
  {
    title: "Endpoints",
    description:
      "Events, products, inventory, availability, pricing, orders and fulfilment.",
    icon: Code2,
  },
  {
    title: "Schemas",
    description:
      "Request and response structures for supported API capabilities.",
    icon: FileJson,
  },
  {
    title: "Sandbox",
    description:
      "A separate environment for approved development and testing.",
    icon: ShieldCheck,
  },
  {
    title: "Webhooks",
    description: "Receive relevant real-time updates where supported.",
    icon: Webhook,
  },
  {
    title: "Access Control",
    description:
      "Capabilities depend on integration type and approved access level.",
    icon: Lock,
  },
];

export function DevelopersCapabilities() {
  return (
    <HomeFrame tinted variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>Portal scope</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            What the Portal{" "}
            <span className="text-brand-orange">Is For.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            The developer portal is intended for approved suppliers,
            distribution partners and technology teams connecting into
            SeatsConnect.
          </p>
        </div>
      </Reveal>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portalItems.map((item, i) => (
          <Reveal key={item.title} delay={i * 40}>
            <div className="h-full rounded-2xl border border-orange-100 bg-white p-5 shadow-[0_10px_28px_rgba(40,30,20,0.04)]">
              <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                <item.icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-brand-gray-text">
                {item.description}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </HomeFrame>
  );
}
