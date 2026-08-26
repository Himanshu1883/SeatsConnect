"use client";

import { useState } from "react";
import { FormField, FormGrid, YesNoField } from "@/components/ui/FormFields";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SubmitButton } from "@/components/ui/SubmitButton";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export default function JoinPartnerPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Distribution Partners"
        icon={heroIcons.partner}
        image={siteImages.pages.partners}
        title="Become a SeatsConnect"
        titleAccent="Distribution Partner."
        description="Access global ticket, hospitality and event supply through one professional B2B connection. Complete the application below so we can understand your business and distribution requirements."
        primaryCta={{ label: "Talk to Our Partner Team", href: routes.contact }}
        secondaryCta={{ label: "Explore For Partners", href: routes.partners }}
        steps={heroWorkflow}
        features={[...heroFeatures.partner]}
      />

      <PageSection>
        {submitted ? (
          <div className="max-w-xl mx-auto text-center rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8">
            <p className="text-brand-dark font-medium">
              Thank you for applying to SeatsConnect. Our partner team will review your application and contact you regarding the next steps.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
            <FormGrid>
              <FormField label="Company Name" name="companyName" required />
              <FormField label="Website" name="website" type="url" />
              <FormField label="Country" name="country" required />
              <FormField label="Business Type" name="businessType" required />
              <FormField label="Contact Name" name="contactName" required />
              <FormField label="Job Title" name="jobTitle" />
              <FormField label="Business Email" name="email" type="email" required />
              <FormField label="Telephone" name="telephone" type="tel" />
              <FormField label="Years Trading" name="yearsTrading" />
              <FormField label="Primary Customer Markets" name="customerMarkets" />
            </FormGrid>
            <FormField label="Main Event Categories" name="eventCategories" />
            <FormField label="Estimated Annual Event Spend" name="annualSpend" />
            <FormField label="Existing Ticket / Hospitality Suppliers" name="existingSuppliers" as="textarea" />
            <YesNoField label="Interested in API Integration?" name="apiIntegration" />
            <YesNoField label="Interested in White Label?" name="whiteLabel" />
            <FormField label="Additional Information" name="additionalInfo" as="textarea" />
            <SubmitButton>Apply for Partner Access</SubmitButton>
          </form>
        )}
      </PageSection>
    </>
  );
}
