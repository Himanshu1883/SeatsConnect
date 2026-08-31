"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ContactEnquiryForm } from "@/components/forms/ContactEnquiryForm";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";

export function ContactForm() {
  const searchParams = useSearchParams();
  const [enquiryType, setEnquiryType] = useState("general");
  const email = searchParams.get("email") ?? undefined;

  useEffect(() => {
    const type = searchParams.get("type");
    if (
      type === "supply" ||
      type === "distribution" ||
      type === "api" ||
      type === "general"
    ) {
      setEnquiryType(type);
    }
  }, [searchParams]);

  return (
    <HomeFrame
      id="form"
      tinted
      variant="plain"
      className="!py-10 sm:!py-12 lg:!py-14"
    >
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <HomeKicker>Contact form</HomeKicker>
          <h2 className="mt-3 font-tech text-3xl font-bold leading-[1.08] text-brand-dark sm:text-4xl">
            Send an{" "}
            <span className="text-brand-orange">Enquiry.</span>
          </h2>
          <p className="mx-auto mt-3 text-sm leading-relaxed text-brand-gray-text sm:text-[15px]">
            Tell us about your business and how you want to work with
            SeatsConnect. Our team will be in touch shortly.
          </p>
        </div>
      </Reveal>

      <Reveal delay={70}>
        <div className="mx-auto max-w-2xl rounded-[1.75rem] border border-orange-100 bg-white p-5 shadow-[0_16px_40px_rgba(40,30,20,0.06)] sm:p-8">
          <ContactEnquiryForm
            defaultEnquiryType={enquiryType}
            defaultEmail={email}
          />
        </div>
      </Reveal>
    </HomeFrame>
  );
}
