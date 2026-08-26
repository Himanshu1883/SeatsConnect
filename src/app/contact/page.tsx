"use client";

import { useState } from "react";
import Link from "next/link";
import { FormField, FormGrid } from "@/components/ui/FormFields";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

const enquiryTypes = [
  { value: "supply", label: "Supply Partnership" },
  { value: "distribution", label: "Distribution Partnership" },
  { value: "api", label: "API & Integrations" },
  { value: "general", label: "General Enquiry" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        image={siteImages.pages.contact}
        title="Talk to SeatsConnect."
        description="Whether you want to connect inventory, join our distribution network or discuss an integration, our team can help."
      />

      <PageSection>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {[
            {
              title: "Supply Partnerships",
              desc: "For venues, promoters, hospitality providers and suppliers interested in connecting inventory.",
              cta: "Contact Supply Team",
              href: `${routes.contact}?type=supply`,
            },
            {
              title: "Distribution Partnerships",
              desc: "For travel, concierge, corporate, hospitality and other B2B businesses interested in accessing SeatsConnect.",
              cta: "Contact Partner Team",
              href: `${routes.contact}?type=distribution`,
            },
            {
              title: "API & Integrations",
              desc: "For technical integrations, APIs, white-label and custom connectivity.",
              cta: "Contact Integration Team",
              href: `${routes.contact}?type=api`,
            },
            {
              title: "General Enquiries",
              desc: "For all other SeatsConnect enquiries.",
              cta: "Contact Us",
              href: routes.contact,
            },
          ].map((opt) => (
            <div key={opt.title} className="rounded-xl border border-orange-100 p-5">
              <h3 className="font-tech font-bold text-brand-dark mb-2">{opt.title}</h3>
              <p className="text-sm text-brand-gray-text mb-3">{opt.desc}</p>
              <Link href={opt.href} className="text-sm text-brand-orange font-semibold hover:underline">
                {opt.cta}
              </Link>
            </div>
          ))}
        </div>

        {submitted ? (
          <div className="max-w-xl mx-auto text-center rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8">
            <p className="text-brand-dark font-medium">
              Thank you for your enquiry. Our team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <h3 className="font-tech font-bold text-brand-dark text-lg text-center mb-2">Contact Form</h3>
            <FormGrid>
              <FormField label="Name" name="name" required />
              <FormField label="Company" name="company" />
              <FormField label="Business Email" name="email" type="email" required />
              <FormField label="Telephone" name="telephone" type="tel" />
              <FormField label="Country" name="country" />
              <FormField
                label="Enquiry Type"
                name="enquiryType"
                as="select"
                options={enquiryTypes}
                required
              />
            </FormGrid>
            <FormField label="Message" name="message" as="textarea" required />
            <SubmitButton>Send Enquiry</SubmitButton>
          </form>
        )}
      </PageSection>
    </>
  );
}
