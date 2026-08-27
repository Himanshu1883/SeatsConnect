import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageLayout";
import { ContactChannels } from "@/components/sections/contact/ContactChannels";
import { ContactFinalCTA } from "@/components/sections/contact/ContactFinalCTA";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Contact — SeatsConnect™",
  description:
    "Talk to SeatsConnect. Connect inventory, join our distribution network or discuss an integration.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        icon={heroIcons.contact}
        image={siteImages.pages.contact}
        title="Talk to"
        titleAccent="SeatsConnect."
        description="Whether you want to connect inventory, join our distribution network or discuss an integration, our team can help."
        primaryCta={{
          label: "Connect Your Inventory",
          href: routes.joinSupplier,
        }}
        secondaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        steps={heroWorkflow}
        features={[...heroFeatures.contact]}
      />

      <ContactChannels />
      <Suspense
        fallback={
          <div className="section-band bg-brand-orange-light px-4 py-16 sm:px-6 lg:px-8" />
        }
      >
        <ContactForm />
      </Suspense>
      <ContactFinalCTA />
    </>
  );
}
