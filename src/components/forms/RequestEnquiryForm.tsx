"use client";

import { useState } from "react";
import {
  Building2,
  CalendarDays,
  FileText,
  ListFilter,
  Mail,
  Phone,
  User,
} from "lucide-react";
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
          label="Telephone"
          name="telephone"
          type="tel"
          icon={Phone}
          placeholder="+1 (555) 000-0000"
        />
        <FormField
          label="Request Type"
          name="requestType"
          as="select"
          icon={ListFilter}
          options={[...requestTypes]}
          required
          placeholder="Select type"
        />
        <FormField
          label="Event / Requirement"
          name="event"
          required
          icon={CalendarDays}
          placeholder="Event or requirement"
        />
      </FormGrid>
      <FormField
        label="Additional Details"
        name="details"
        as="textarea"
        icon={FileText}
        maxLength={500}
        placeholder="Anything else we should know..."
      />
      <SubmitButton arrow>Submit a Request</SubmitButton>
    </form>
  );
}
