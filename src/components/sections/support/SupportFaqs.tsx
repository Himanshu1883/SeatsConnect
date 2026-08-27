"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { supportFaqs } from "@/lib/constants/support";
import { cn } from "@/lib/utils";

export function SupportFaqs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <HomeFrame tinted variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>FAQ</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Common{" "}
            <span className="text-brand-orange">Questions.</span>
          </h2>
        </div>
      </Reveal>

      <div className="mx-auto max-w-3xl space-y-2">
        {supportFaqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={faq.question} delay={i * 30}>
              <div className="overflow-hidden rounded-2xl border border-orange-100 bg-white">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <h3 className="font-tech text-[15px] font-bold text-brand-dark">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-brand-orange transition",
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                {isOpen ? (
                  <p className="border-t border-orange-50 px-5 pb-5 pt-3 text-sm leading-relaxed text-brand-gray-text">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </HomeFrame>
  );
}
