"use client";

import { useState } from "react";
import {
  Briefcase,
  Building2,
  FileText,
  Globe,
  Mail,
  Package,
  Phone,
  User,
} from "lucide-react";
import { FormField, FormGrid, YesNoField } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { joinSupplyTypes } from "@/lib/constants/engage";
import { cn } from "@/lib/utils";

const businessTypes = joinSupplyTypes.map((type) => ({
  value: type,
  label: type,
}));

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
          label="Type of Inventory"
          name="inventoryType"
          required
          icon={Package}
          placeholder="Tickets, hospitality..."
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
        <YesNoField label="API Available?" name="apiAvailable" />
      </FormGrid>
      <FormField
        label="Additional Information"
        name="additionalInfo"
        as="textarea"
        icon={FileText}
        maxLength={500}
        placeholder="Anything else we should know..."
      />
      <SubmitButton arrow>Submit Supply Enquiry</SubmitButton>
    </form>
  );
}
