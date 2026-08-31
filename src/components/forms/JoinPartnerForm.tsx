"use client";

import { useState } from "react";
import { FormField, FormGrid, YesNoField } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { cn } from "@/lib/utils";

export function JoinPartnerForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess>
        Thank you for applying to SeatsConnect. Our partner team will review
        your application and contact you regarding the next steps.
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <FormGrid>
        <FormField label="Company Name" name="companyName" required />
        <FormField label="Website" name="website" type="url" />
        <FormField label="Country" name="country" required />
        <FormField label="Business Type" name="businessType" required />
        <FormField label="Contact Name" name="contactName" required />
        <FormField label="Job Title" name="jobTitle" />
        <FormField
          label="Business Email"
          name="email"
          type="email"
          required
        />
        <FormField label="Telephone" name="telephone" type="tel" />
        <FormField label="Years Trading" name="yearsTrading" />
        <FormField
          label="Primary Customer Markets"
          name="customerMarkets"
        />
      </FormGrid>
      <FormField label="Main Event Categories" name="eventCategories" />
      <FormField
        label="Estimated Annual Event Spend"
        name="annualSpend"
      />
      <FormField
        label="Existing Ticket / Hospitality Suppliers"
        name="existingSuppliers"
        as="textarea"
      />
      <YesNoField
        label="Interested in API Integration?"
        name="apiIntegration"
      />
      <YesNoField label="Interested in White Label?" name="whiteLabel" />
      <FormField
        label="Additional Information"
        name="additionalInfo"
        as="textarea"
      />
      <SubmitButton>Apply for Partner Access</SubmitButton>
    </form>
  );
}
