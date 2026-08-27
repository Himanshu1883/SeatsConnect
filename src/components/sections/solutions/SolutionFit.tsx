"use client";

import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import type { SolutionPageContent } from "@/lib/constants/solutions";

type Props = {
  content: SolutionPageContent["fit"];
};

export function SolutionFit({ content }: Props) {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <HomeKicker>{content.kicker}</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            {content.title}{" "}
            <span className="text-brand-orange">{content.titleAccent}</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            {content.description}
          </p>
        </div>
      </Reveal>

      {content.items && content.items.length > 0 ? (
        <Reveal delay={70}>
          <ul className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {content.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-orange-100 bg-[#faf7f3] px-3.5 py-2 text-[12px] font-medium text-brand-dark sm:text-[13px]"
              >
                <span className="mr-1.5 text-brand-orange">→</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      ) : null}

      {content.closing ? (
        <Reveal delay={110}>
          <p className="mx-auto mt-7 max-w-xl text-center font-tech text-sm font-semibold text-brand-dark">
            {content.closing}
          </p>
        </Reveal>
      ) : null}
    </HomeFrame>
  );
}
