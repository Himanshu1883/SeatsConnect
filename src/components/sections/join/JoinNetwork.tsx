"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Network } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import {
  ConsolePanel,
  SolutionConsole,
} from "@/components/sections/solutions/SolutionConsole";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const flow = ["SEARCH", "QUOTE", "BOOK", "FULFIL"] as const;

export function JoinNetwork() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((current) => (current + 1) % flow.length);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  return (
    <HomeFrame tinted variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
        <Reveal>
          <div>
            <HomeKicker>One network</HomeKicker>
            <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              Supply and Distribution.{" "}
              <span className="text-brand-orange">One Infrastructure.</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              Whether you connect inventory or distribute to customers,
              SeatsConnect provides controlled B2B access through Search → Quote
              → Book → Fulfil.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <SolutionConsole title="join-network" className="mx-auto w-full max-w-xl">
            <div className="grid gap-2 sm:grid-cols-2">
              <ConsolePanel label="Supply">
                <p className="font-tech text-[12px] font-bold text-brand-dark">
                  Venues · Promoters · Hospitality
                </p>
              </ConsolePanel>
              <ConsolePanel label="Demand">
                <p className="font-tech text-[12px] font-bold text-brand-dark">
                  Travel · Concierge · Corporate
                </p>
              </ConsolePanel>
            </div>

            <ConsolePanel className="mt-2.5 bg-white border-orange-100">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
                  <Network className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="font-tech text-[13px] font-bold text-brand-dark">
                    SeatsConnect™
                  </p>
                  <p className="font-mono text-[10px] text-brand-gray-text">
                    Approved professional network
                  </p>
                </div>
              </div>
            </ConsolePanel>

            <div className="mt-3 flex flex-wrap items-center gap-1.5">
              {flow.map((label, i) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-wide transition",
                      i === step
                        ? "bg-brand-orange text-white"
                        : "border border-orange-100 bg-white text-brand-dark"
                    )}
                  >
                    {label}
                  </span>
                  {i < flow.length - 1 ? (
                    <ArrowRight className="h-3 w-3 text-brand-orange/50" />
                  ) : null}
                </div>
              ))}
            </div>
          </SolutionConsole>
        </Reveal>
      </div>
    </HomeFrame>
  );
}
