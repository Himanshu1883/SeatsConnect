"use client";

import { useState } from "react";
import {
  Building2,
  FileText,
  ListFilter,
  Mail,
  Phone,
  User,
} from "lucide-react";
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
          defaultValue={defaultEmail}
        />
        <FormField
          label="Telephone"
          name="telephone"
          type="tel"
          icon={Phone}
          placeholder="+1 (555) 000-0000"
        />
        <FormField
          label="Enquiry Type"
          name="enquiryType"
          as="select"
          icon={ListFilter}
          options={[...contactEnquiryTypes]}
          required
          defaultValue={enquiryType}
          key={enquiryType}
          className="sm:col-span-2"
          placeholder="Select type"
        />
      </FormGrid>
      <FormField
        label="Message"
        name="message"
        as="textarea"
        required
        icon={FileText}
        maxLength={500}
        placeholder="How can we help?"
      />
      <SubmitButton arrow>Send Enquiry</SubmitButton>
    </form>
  );
}
