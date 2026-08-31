"use client";

import { useState } from "react";
import { Building2, Cable, FileText, Mail, User } from "lucide-react";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { FormSuccess } from "@/components/ui/FormSuccess";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { cn } from "@/lib/utils";

const roleOptions = [
  { value: "supplier", label: "Supplier / inventory system" },
  { value: "partner", label: "Distribution partner" },
  { value: "technology", label: "Technology / platform partner" },
  { value: "white-label", label: "White-label implementation" },
];

export function DeveloperAccessForm({ className }: { className?: string }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <FormSuccess>
        Thank you. Our integration team will review your request for developer
        access and contact you regarding next steps.
      </FormSuccess>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-2", className)}>
      <FormGrid>
        <FormField
          label="Name"
          name="name"
          required
          icon={User}
          placeholder="Full name"
        />
        <FormField
          label="Company"
          name="company"
          required
          icon={Building2}
          placeholder="Your company name"
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
          label="Integration Type"
          name="role"
          as="select"
          icon={Cable}
          options={roleOptions}
          required
          placeholder="Select type"
        />
      </FormGrid>
      <FormField
        label="What do you want to connect?"
        name="message"
        as="textarea"
        required
        icon={FileText}
        maxLength={500}
        placeholder="Tell us what you want to connect..."
      />
      <SubmitButton arrow>Request Developer Access</SubmitButton>
    </form>
  );
}
