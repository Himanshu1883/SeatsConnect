"use client";

import { useState } from "react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { SubmitButton } from "@/components/ui/SubmitButton";

const roleOptions = [
  { value: "supplier", label: "Supplier / inventory system" },
  { value: "partner", label: "Distribution partner" },
  { value: "technology", label: "Technology / platform partner" },
  { value: "white-label", label: "White-label implementation" },
];

export function DeveloperAccessForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="max-w-xl mx-auto text-center rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8">
        <p className="text-brand-dark font-medium">
          Thank you. Our integration team will review your request for developer
          access and contact you regarding next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
      <FormGrid>
        <FormField label="Name" name="name" required />
        <FormField label="Company" name="company" required />
        <FormField label="Business Email" name="email" type="email" required />
        <FormField label="Job Title" name="jobTitle" />
        <FormField
          label="Integration Type"
          name="role"
          as="select"
          options={roleOptions}
          required
        />
        <FormField label="Current Systems" name="systems" />
      </FormGrid>
      <FormField
        label="What do you want to connect?"
        name="message"
        as="textarea"
        required
      />
      <SubmitButton>Request Developer Access</SubmitButton>
    </form>
  );
}
