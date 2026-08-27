"use client";

import { ExternalLink, LayoutDashboard, Search, ShoppingCart, FileText } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import {
  ConsolePanel,
  SolutionConsole,
} from "@/components/sections/solutions/SolutionConsole";
import { Reveal } from "@/components/ui/Reveal";
import { portalAccess } from "@/lib/constants/engage";
import { siteConfig } from "@/lib/constants/site";

const ops = [
  { icon: Search, label: "Live inventory" },
  { icon: FileText, label: "Quotations" },
  { icon: ShoppingCart, label: "Bookings" },
  { icon: LayoutDashboard, label: "Order management" },
] as const;

export function ResourcesPortal() {
  return (
    <HomeFrame tinted variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <Reveal>
          <div>
            <HomeKicker>Partner platform</HomeKicker>
            <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Platform{" "}
              <span className="text-brand-orange">Access.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              {portalAccess.description}
            </p>
            <a
              href={siteConfig.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-2.5 font-tech text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,107,0,0.24)] transition hover:bg-brand-orange-hover"
            >
              {portalAccess.label}
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <SolutionConsole
            title="partner-platform"
            className="mx-auto w-full max-w-xl"
          >
            <ConsolePanel label="After approval">
              <div className="grid grid-cols-2 gap-2">
                {ops.map((op) => (
                  <div
                    key={op.label}
                    className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-2.5 border border-orange-50"
                  >
                    <op.icon className="h-3.5 w-3.5 text-brand-orange" strokeWidth={1.9} />
                    <span className="font-tech text-[11px] font-semibold text-brand-dark">
                      {op.label}
                    </span>
                  </div>
                ))}
              </div>
            </ConsolePanel>
            <ConsolePanel className="mt-2.5 bg-white border-orange-100">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="font-tech text-[13px] font-bold text-brand-dark">
                    app.seatsconnect.com
                  </p>
                  <p className="mt-0.5 font-mono text-[10px] text-brand-gray-text">
                    Search → Quote → Book → Fulfil
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700">
                  Live
                </span>
              </div>
            </ConsolePanel>
          </SolutionConsole>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
