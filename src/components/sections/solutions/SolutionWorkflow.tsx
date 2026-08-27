"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import {
  ConsolePanel,
  SolutionConsole,
} from "@/components/sections/solutions/SolutionConsole";
import { Reveal } from "@/components/ui/Reveal";
import type { SolutionPageContent } from "@/lib/constants/solutions";
import { cn } from "@/lib/utils";

type Props = {
  content: SolutionPageContent["workflow"];
};

export function SolutionWorkflow({ content }: Props) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (content.flow.length === 0) return;
    const timer = setInterval(() => {
      setStep((current) => (current + 1) % content.flow.length);
    }, 1400);
    return () => clearInterval(timer);
  }, [content.flow.length]);

  return (
    <HomeFrame tinted variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <Reveal>
          <div>
            <HomeKicker>{content.kicker}</HomeKicker>
            <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
              {content.title}{" "}
              <span className="text-brand-orange">{content.titleAccent}</span>
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
              {content.description}
            </p>
            {content.sideItems ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {content.sideItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-orange-100 bg-white px-3 py-1.5 text-[12px] font-medium text-brand-dark"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
            {content.closing ? (
              <p className="mt-5 font-tech text-sm font-semibold text-brand-dark">
                {content.closing}
              </p>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={90}>
          <SolutionConsole title={content.consoleTitle} className="mx-auto w-full max-w-xl">
            {content.variant === "pipeline" ? (
              <PipelineDash flow={content.flow} step={step} />
            ) : null}
            {content.variant === "request" ? (
              <RequestDash flow={content.flow} step={step} />
            ) : null}
            {content.variant === "concierge" ? (
              <ConciergeDash flow={content.flow} step={step} />
            ) : null}
            {content.variant === "combine" ? (
              <CombineDash flow={content.flow} step={step} />
            ) : null}
            {content.variant === "api" ? (
              <ApiDash flow={content.flow} step={step} />
            ) : null}
          </SolutionConsole>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function PipelineDash({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="space-y-3">
      <ConsolePanel label="Supply">
        <p className="font-tech text-[13px] font-bold text-brand-dark">
          Multiple Events / Markets
        </p>
      </ConsolePanel>
      <FlowRail flow={flow} step={step} />
      <ConsolePanel label="Partner" className="bg-white border-orange-100">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-tech text-[13px] font-bold text-brand-dark">
              Travel Agency / Tour Operator
            </p>
            <p className="mt-0.5 font-mono text-[10px] text-brand-gray-text">
              One B2B connection
            </p>
          </div>
          <ShieldCheck className="h-4 w-4 shrink-0 text-brand-orange" />
        </div>
      </ConsolePanel>
    </div>
  );
}

function RequestDash({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="space-y-3">
      <ConsolePanel label="Inbound">
        <p className="font-tech text-[13px] font-bold text-brand-dark">
          Requirement received
        </p>
        <p className="mt-1 text-[11px] text-brand-gray-text">
          Search · proposal · confirm through one workflow
        </p>
      </ConsolePanel>
      <FlowRail flow={flow} step={step} />
      <ConsolePanel className="bg-white border-orange-100">
        <div className="flex items-center justify-between">
          <p className="font-tech text-[13px] font-bold text-brand-dark">
            Confirmed booking
          </p>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-wider text-emerald-700">
            Ready
          </span>
        </div>
      </ConsolePanel>
    </div>
  );
}

function ConciergeDash({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="space-y-2">
      {flow.map((label, i) => (
        <div
          key={label}
          className={cn(
            "flex items-center gap-3 rounded-xl border px-3 py-2.5 transition",
            i === step
              ? "border-brand-orange/40 bg-brand-orange/8 shadow-[0_8px_20px_rgba(255,107,0,0.12)]"
              : "border-orange-50 bg-[#faf7f3]"
          )}
        >
          <span
            className={cn(
              "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-[10px] font-bold",
              i === step
                ? "bg-brand-orange text-white"
                : "bg-white text-brand-gray-text"
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <p
            className={cn(
              "font-tech text-[12px] font-semibold",
              i === step ? "text-brand-dark" : "text-brand-gray-text"
            )}
          >
            {label}
          </p>
          {i === step ? (
            <ArrowRight className="ml-auto h-3.5 w-3.5 text-brand-orange" />
          ) : null}
        </div>
      ))}
    </div>
  );
}

function CombineDash({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <ConsolePanel label="Inventory">
          <p className="font-tech text-[12px] font-bold text-brand-dark">
            Event inventory
          </p>
          <p className="mt-1 text-[10px] text-brand-gray-text">
            Tickets · Hospitality
          </p>
        </ConsolePanel>
        <ConsolePanel label="Your stack">
          <p className="font-tech text-[12px] font-bold text-brand-dark">
            Flights · Hotels · Transfers
          </p>
          <p className="mt-1 text-[10px] text-brand-gray-text">
            Tours · Destination services
          </p>
        </ConsolePanel>
      </div>
      <FlowRail flow={flow} step={step} />
      <ConsolePanel className="bg-white border-orange-100">
        <p className="font-tech text-[13px] font-bold text-brand-dark">
          Complete sporting experience
        </p>
      </ConsolePanel>
    </div>
  );
}

function ApiDash({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="space-y-3">
      <ConsolePanel label="Partner brand">
        <p className="font-tech text-[13px] font-bold text-brand-dark">
          Your customer experience
        </p>
      </ConsolePanel>
      <ConsolePanel className="bg-white border-orange-100">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange/12 text-brand-orange">
            <Layers className="h-4 w-4" strokeWidth={1.8} />
          </span>
          <div>
            <p className="font-tech text-[13px] font-bold text-brand-dark">
              SeatsConnect API
            </p>
            <p className="font-mono text-[9px] text-brand-gray-text">
              events · inventory · pricing · bookings · fulfilment
            </p>
          </div>
        </div>
      </ConsolePanel>
      <FlowRail flow={flow} step={step} />
    </div>
  );
}

function FlowRail({
  flow,
  step,
}: {
  flow: readonly string[];
  step: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
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
  );
}
