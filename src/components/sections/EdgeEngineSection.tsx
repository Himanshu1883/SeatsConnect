"use client";

import { ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SectionBackground } from "@/components/ui/SectionBackground";
import { edgeSteps } from "@/lib/constants/edge-steps";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

export function EdgeEngineSection() {
  const [activeStep, setActiveStep] = useState(1);
  const current = edgeSteps.find((step) => step.id === activeStep) ?? edgeSteps[0];
  const DiagramIcon = current.diagramIcon;

  return (
    <SectionBackground
      id="engine"
      image={siteImages.engine}
      alt="Technology and global connectivity"
      tint="soft"
      className="border-y border-orange-50"
      contentClassName="py-12 sm:py-16 md:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="System Architecture"
          title="The Seamless Engine: Patented EDGE Technology"
          description="Our proprietary pipeline powers clean data ingestion all the way through to zero-intervention automated fulfillment."
        />

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 items-start lg:items-center">
          <div className="lg:col-span-4 space-y-4">
            {edgeSteps.map((step) => {
              const isActive = step.id === activeStep;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStep(step.id)}
                  className={cn(
                    "w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between backdrop-blur-sm min-h-[4.5rem]",
                    isActive
                      ? "bg-white border-brand-orange/50 glow-border"
                      : "bg-white/85 border-orange-100 hover:border-brand-orange/30"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "font-tech text-lg font-bold px-3 py-1 rounded",
                        isActive
                          ? "bg-brand-orange-light text-brand-orange"
                          : "bg-gray-100 text-brand-gray-text"
                      )}
                    >
                      {String(step.id).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="font-bold text-brand-dark font-tech">
                        {step.code}
                      </h4>
                      <p className="text-xs text-brand-gray-text">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronRight
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-brand-orange" : "text-brand-gray-text"
                    )}
                  />
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 bg-white/95 backdrop-blur-sm p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-orange-100 min-h-0 sm:min-h-[360px] lg:min-h-[400px] flex flex-col justify-between shadow-xl relative">
            <div className="relative z-10">
              <span className="text-brand-orange uppercase text-xs tracking-widest font-tech font-bold block mb-1">
                {current.stepLabel}
              </span>
              <h3 className="font-tech text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-brand-dark">
                {current.title}
              </h3>
              <p className="text-brand-gray-text leading-relaxed">
                {current.description}
              </p>
            </div>

            <div className="relative z-10 my-6 sm:my-8 py-3 sm:py-4 bg-brand-orange-light/60 border border-orange-100 rounded-xl p-3 sm:p-4 flex flex-col items-center justify-center overflow-hidden">
              <div className="w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 px-2 sm:px-4 text-[10px] sm:text-xs font-mono text-brand-gray-text mb-3 sm:mb-4">
                <span>
                  INPUT STATUS: <span className="text-brand-orange font-semibold">ACTIVE</span>
                </span>
                <span>
                  latency:{" "}
                  <span className="text-brand-orange">{current.latency}</span>
                </span>
              </div>
              <div className="w-full flex items-center justify-around py-4 flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-full border flex items-center justify-center",
                      current.diagramBorderClass,
                      current.diagramIconClass
                    )}
                  >
                    <DiagramIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs text-brand-gray-text block">
                      {current.diagramLabel}
                    </span>
                    <span className="font-tech font-bold text-brand-dark">
                      {current.diagramValue}
                    </span>
                  </div>
                </div>
                <div className={cn("h-0.5 w-12 sm:w-24", current.connectorClass)} />
                <div className="w-12 h-12 rounded-lg bg-white border border-orange-200 flex items-center justify-center text-brand-dark font-mono text-xs">
                  {current.endpointLabel}
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-orange-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-brand-gray-text">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>White-Label API Ready Integration</span>
              </div>
              <span className="text-xs bg-brand-orange-light text-brand-orange px-3 py-1 rounded font-tech">
                Patented EDGE Framework
              </span>
            </div>
          </div>
        </div>
      </div>
    </SectionBackground>
  );
}
