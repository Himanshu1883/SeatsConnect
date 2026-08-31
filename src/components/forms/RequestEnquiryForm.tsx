"use client";

import { useState } from "react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { requestTypes } from "@/lib/constants/support";
import { cn } from "@/lib/utils";

export function RequestEnquiryForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess>
        Thank you. Our partner team will review your request and contact you
        regarding next steps.
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
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
  );
}
