"use client";

import { useEffect, useState } from "react";
import { ArrowDown, Network } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import {
  ConsolePanel,
  SolutionConsole,
} from "@/components/sections/solutions/SolutionConsole";
import { Reveal } from "@/components/ui/Reveal";
import { networkChannels } from "@/lib/constants/solutions";
import { cn } from "@/lib/utils";

export function SolutionsNetwork() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % networkChannels.length);
    }, 1600);
    return () => clearInterval(timer);
  }, []);

  return (
    <HomeFrame
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <Reveal>
        <div className="mb-8 text-center">
          <HomeKicker>Connectivity</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Global Event Supply.{" "}
            <span className="text-brand-orange">One Layer.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            SeatsConnect connects global event supply to businesses serving
            different types of customers around the world — travel, concierge,
            hospitality, corporate events and digital distribution.
          </p>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <SolutionConsole
          title="solutions-network"
          className="mx-auto max-w-2xl"
        >
          <div className="space-y-3">
            <ConsolePanel label="Demand channels">
              <div className="flex flex-wrap gap-1.5">
                {networkChannels.map((channel, i) => (
                  <span
                    key={channel}
                    className={cn(
                      "rounded-full px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide transition",
                      i === active
                        ? "bg-brand-orange text-white shadow-[0_6px_14px_rgba(255,107,0,0.28)]"
                        : "bg-white text-brand-dark border border-orange-100"
                    )}
                  >
                    {channel}
                  </span>
                ))}
              </div>
            </ConsolePanel>

            <div className="flex justify-center text-brand-orange">
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </div>

            <ConsolePanel className="bg-white border-orange-100">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                  <Network className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div className="min-w-0">
                  <p className="font-tech text-sm font-bold text-brand-dark">
                    SeatsConnect™
                  </p>
                  <p className="font-mono text-[10px] text-brand-gray-text">
                    Connectivity layer
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700">
                  Ready
                </span>
              </div>
            </ConsolePanel>

            <div className="flex justify-center text-brand-orange">
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </div>

            <ConsolePanel label="Supply">
              <p className="font-tech text-sm font-bold text-brand-dark">
                Global Event Supply
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-brand-gray-text">
                Tickets · Hospitality · Controlled distribution
              </p>
            </ConsolePanel>
          </div>
        </SolutionConsole>
      </Reveal>
    </HomeFrame>
  );
}
