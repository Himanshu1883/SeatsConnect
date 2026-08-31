"use client";

import { RequestEnquiryForm } from "@/components/forms/RequestEnquiryForm";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

export function RequestForm() {
  return (
    <HomeFrame
      id="form"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>Submit</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Submit a{" "}
            <span className="text-brand-orange">Request.</span>
          </h2>
        </div>
      </Reveal>

      <Reveal delay={70}>
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-orange-100 bg-white p-5 shadow-[0_16px_40px_rgba(40,30,20,0.06)] sm:p-8">
          <RequestEnquiryForm />
        </div>
      </Reveal>
    </HomeFrame>
  );
}
