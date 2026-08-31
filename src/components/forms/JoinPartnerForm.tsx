"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  FileText,
  Globe,
  Mail,
  Phone,
  User,
} from "lucide-react";
import { FormField, FormGrid, YesNoField } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { joinPartnerTypes } from "@/lib/constants/engage";
import { cn } from "@/lib/utils";

const businessTypes = joinPartnerTypes.map((type) => ({
  value: type,
  label: type,
}));

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
    <form onSubmit={handleSubmit} className={cn("space-y-2.5", className)}>
      <FormGrid>
        <FormField
          label="Company Name"
          name="companyName"
          required
          icon={Building2}
          placeholder="Your company name"
        />
        <FormField
          label="Website"
          name="website"
          type="url"
          icon={Globe}
          placeholder="https://"
        />
        <FormField
          label="Business Type"
          name="businessType"
          required
          as="select"
          icon={Briefcase}
          options={businessTypes}
          placeholder="Select type"
        />
        <FormField
          label="Contact Name"
          name="contactName"
          required
          icon={User}
          placeholder="Full name"
        />
        <FormField
          label="Business Email"
          name="email"
          type="email"
          required
          icon={Mail}
          placeholder="name@company.com"
        />
        <FormField
          label="Telephone"
          name="telephone"
          type="tel"
          icon={Phone}
          placeholder="+1 (555) 000-0000"
        />
      </FormGrid>
      <FormGrid>
        <YesNoField
          label="Interested in API Integration?"
          name="apiIntegration"
        />
        <YesNoField label="Interested in White Label?" name="whiteLabel" />
      </FormGrid>
      <FormField
        label="Additional Information"
        name="additionalInfo"
        as="textarea"
        icon={FileText}
        maxLength={500}
        placeholder="Anything else we should know..."
      />
      <SubmitButton arrow>Apply for Partner Access</SubmitButton>
    </form>
  );
}
