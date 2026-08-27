"use client";

import { DeveloperAccessForm } from "@/components/forms/DeveloperAccessForm";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

export function DevelopersAccess() {
  return (
    <HomeFrame
      id="access"
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>Get started</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Request Developer{" "}
            <span className="text-brand-orange">Access.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Tell us what you want to connect. Our integration team will review
            the request and contact you regarding documentation and next steps.
          </p>
        </div>
      </Reveal>

      <Reveal delay={70}>
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-orange-100 bg-[#faf7f3] p-5 sm:p-8">
          <DeveloperAccessForm />
        </div>
      </Reveal>
    </HomeFrame>
  );
}
