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

export default function JoinSupplierPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Supply Partners"
        icon={heroIcons.supply}
        image={siteImages.pages.join}
        title="Become a SeatsConnect"
        titleAccent="Supply Partner."
        description="Connect your event inventory with approved B2B distribution channels through SeatsConnect. Complete the form below and our supply team will review your requirements."
        primaryCta={{ label: "Talk to Our Supply Team", href: routes.contact }}
        secondaryCta={{ label: "Explore For Suppliers", href: routes.suppliers }}
        steps={heroWorkflow}
        features={[...heroFeatures.supply]}
      />

      <PageSection>
        {submitted ? (
          <div className="max-w-xl mx-auto text-center rounded-xl border border-orange-100 bg-brand-orange-light/40 p-8">
            <p className="text-brand-dark font-medium">
              Thank you for your interest in SeatsConnect. Our supply team will review your information and contact you regarding the next steps.
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
            </FormGrid>
            <FormField label="Type of Inventory" name="inventoryType" required />
            <FormField label="Events / Venues Represented" name="eventsVenues" as="textarea" />
            <FormField label="Current Inventory System" name="inventorySystem" />
            <YesNoField label="API Available?" name="apiAvailable" />
            <FormField label="Current Distribution Markets" name="currentMarkets" />
            <FormField label="Target Markets" name="targetMarkets" />
            <FormField label="Estimated Inventory Volume" name="inventoryVolume" />
            <FormField label="Additional Information" name="additionalInfo" as="textarea" />
            <SubmitButton>Submit Supply Enquiry</SubmitButton>
          </form>
        )}
      </PageSection>
    </>
  );
}
