"use client";

import { useState } from "react";
import { FormField, FormGrid, YesNoField } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { cn } from "@/lib/utils";

export function JoinSupplierForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess>
        Thank you for your interest in SeatsConnect. Our supply team will review
        your information and contact you regarding the next steps.
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
      </FormGrid>
      <FormField label="Type of Inventory" name="inventoryType" required />
      <FormField
        label="Events / Venues Represented"
        name="eventsVenues"
        as="textarea"
      />
      <FormField label="Current Inventory System" name="inventorySystem" />
      <YesNoField label="API Available?" name="apiAvailable" />
      <FormField
        label="Current Distribution Markets"
        name="currentMarkets"
      />
      <FormField label="Target Markets" name="targetMarkets" />
      <FormField
        label="Estimated Inventory Volume"
        name="inventoryVolume"
      />
      <FormField
        label="Additional Information"
        name="additionalInfo"
        as="textarea"
      />
      <SubmitButton>Submit Supply Enquiry</SubmitButton>
    </form>
  );
}
