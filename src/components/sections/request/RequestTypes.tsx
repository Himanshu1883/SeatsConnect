"use client";

import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { requestTypes } from "@/lib/constants/support";

export function RequestTypes() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-10">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <HomeKicker>Partner requests</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Potential requests may{" "}
            <span className="text-brand-orange">include:</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
          {requestTypes.map((item) => (
            <li
              key={item.value}
              className="rounded-full border border-orange-100 bg-[#faf7f3] px-3.5 py-2 text-[12px] font-medium text-brand-dark sm:text-[13px]"
            >
              <span className="mr-1.5 text-brand-orange">→</span>
              {item.label}
            </li>
          ))}
        </ul>
      </Reveal>
    </HomeFrame>
  );
}
