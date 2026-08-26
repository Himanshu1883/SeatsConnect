"use client";

import { useState } from "react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { siteImages } from "@/lib/constants/images";

const requestTypes = [
  { value: "group", label: "Group bookings" },
  { value: "hospitality", label: "Premium hospitality" },
  { value: "vip", label: "VIP requirements" },
  { value: "quantity", label: "Larger quantities" },
  { value: "programme", label: "Complex event programmes" },
  { value: "corporate", label: "Corporate requirements" },
  { value: "multi", label: "Multi-event requests" },
];

export default function RequestPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        image={siteImages.pages.request}
        title="Need Something Specific?"
        description="Not every customer requirement will be available through live inventory. Our partner team can assist approved SeatsConnect partners with selected bespoke ticket and hospitality requirements."
      />

      <PageSection>
        <p className="text-center text-sm text-brand-gray-text mb-6">
          Potential requests may include:
        </p>
        <ul className="grid sm:grid-cols-2 gap-2 max-w-lg mx-auto mb-10">
          {requestTypes.map((item) => (
            <li
              key={item.value}
              className="text-sm text-brand-gray-text flex items-center gap-2"
            >
              <span className="text-brand-orange">→</span>
              {item.label}
            </li>
          ))}
        </ul>

        {submitted ? (
          <div className="max-w-xl mx-auto text-center rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8">
            <p className="text-brand-dark font-medium">
              Thank you. Our partner team will review your request and contact you
              regarding next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <FormGrid>
              <FormField label="Name" name="name" required />
              <FormField label="Company" name="company" required />
              <FormField label="Business Email" name="email" type="email" required />
              <FormField label="Telephone" name="telephone" type="tel" />
              <FormField
                label="Request Type"
                name="requestType"
                as="select"
                options={requestTypes}
                required
              />
              <FormField label="Quantity" name="quantity" />
            </FormGrid>
            <FormField label="Event / Requirement" name="event" required />
            <FormField label="Additional Details" name="details" as="textarea" />
            <SubmitButton>Submit a Request</SubmitButton>
          </form>
        )}
      </PageSection>
    </>
  );
}
