"use client";

import { useState } from "react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { SubmitButton } from "@/components/ui/SubmitButton";
import {
  HomeFrame,
  HomeKicker,
} from "@/components/sections/home/HomeFrame";
import { Reveal } from "@/components/ui/Reveal";
import { requestTypes } from "@/lib/constants/support";

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

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
          {submitted ? (
            <div className="rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8 text-center">
              <p className="font-medium text-brand-dark">
                Thank you. Our partner team will review your request and contact
                you regarding next steps.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <FormGrid>
                <FormField label="Name" name="name" required />
                <FormField label="Company" name="company" required />
                <FormField
                  label="Business Email"
                  name="email"
                  type="email"
                  required
                />
                <FormField label="Telephone" name="telephone" type="tel" />
                <FormField
                  label="Request Type"
                  name="requestType"
                  as="select"
                  options={[...requestTypes]}
                  required
                />
                <FormField label="Quantity" name="quantity" />
              </FormGrid>
              <FormField label="Event / Requirement" name="event" required />
              <FormField
                label="Additional Details"
                name="details"
                as="textarea"
              />
              <SubmitButton>Submit a Request</SubmitButton>
            </form>
          )}
        </div>
      </Reveal>
    </HomeFrame>
  );
}
