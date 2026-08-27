"use client";

import { Button } from "@/components/ui/Button";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { routes } from "@/lib/constants/routes";

export function SupportCta() {
  return (
    <HomeFrame variant="plain" className="!py-10 sm:!py-12 lg:!py-14">
      <Reveal>
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-orange-100 bg-[#faf7f3] px-6 py-10 text-center sm:px-10 sm:py-12">
          <HomeKicker>Support</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Still Need{" "}
            <span className="text-brand-orange">Help?</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Our team can help with supply partnerships, partner access,
            integrations and general enquiries.
          </p>
          <div className="mt-7">
            <Button href={routes.contact}>Talk to Our Team</Button>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
