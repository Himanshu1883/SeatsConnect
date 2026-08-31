"use client";

import { useState } from "react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { contactEnquiryTypes } from "@/lib/constants/engage";
import { cn } from "@/lib/utils";

const enquiryValues = contactEnquiryTypes.map((item) => item.value);

export function isContactEnquiryType(
  value: string | null | undefined
): value is (typeof contactEnquiryTypes)[number]["value"] {
  return Boolean(value && enquiryValues.includes(value as never));
}

export function ContactEnquiryForm({
  defaultEnquiryType = "general",
  defaultEmail,
  className,
}: {
  defaultEnquiryType?: string;
  defaultEmail?: string;
  className?: string;
}) {
  const [submitted, setSubmitted] = useState(false);
  const enquiryType = isContactEnquiryType(defaultEnquiryType)
    ? defaultEnquiryType
    : "general";

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess>
        Thank you for your enquiry. Our team will be in touch shortly.
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <FormGrid>
        <FormField label="Name" name="name" required />
        <FormField label="Company" name="company" />
        <FormField
          label="Business Email"
          name="email"
          type="email"
          required
          defaultValue={defaultEmail}
        />
        <FormField label="Telephone" name="telephone" type="tel" />
        <FormField label="Country" name="country" />
        <FormField
          label="Enquiry Type"
          name="enquiryType"
          as="select"
          options={[...contactEnquiryTypes]}
          required
          defaultValue={enquiryType}
          key={enquiryType}
        />
      </FormGrid>
      <FormField label="Message" name="message" as="textarea" required />
      <SubmitButton>Send Enquiry</SubmitButton>
    </form>
  );
}
