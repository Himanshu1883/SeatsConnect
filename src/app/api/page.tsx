import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "API — SeatsConnect™",
  description:
    "Connect your platform to SeatsConnect. One API infrastructure connecting global event supply with professional distribution.",
};

const capabilities = [
  { name: "Events", desc: "Access event and venue information." },
  { name: "Products", desc: "Retrieve ticket and hospitality product information." },
  { name: "Inventory", desc: "Access connected inventory." },
  { name: "Availability", desc: "View current availability." },
  { name: "Pricing", desc: "Access applicable pricing." },
  { name: "Orders", desc: "Create and retrieve booking information." },
  { name: "Booking Status", desc: "Monitor order progress." },
  { name: "Fulfilment", desc: "Exchange fulfilment and delivery information." },
  { name: "Webhooks", desc: "Receive relevant real-time updates." },
];

export default function ApiPage() {
  return (
    <>
      <PageHero
        eyebrow="API Infrastructure"
        icon={heroIcons.api}
        image={siteImages.pages.api}
        title="Connect Your Platform to"
        titleAccent="SeatsConnect."
        description="One API infrastructure connecting global event supply with professional distribution. Approved suppliers and partners connect existing technology directly into the network."
        primaryCta={{ label: "Request API Access", href: routes.contact }}
        secondaryCta={{ label: "Talk to Our Integration Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.api]}
      />

      <PageSection>
        <SectionHeader
          title="Built for Both Sides of Distribution."
          align="center"
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="rounded-xl border border-orange-100 p-6">
            <h3 className="font-tech font-bold text-brand-dark mb-2">Supplier Connectivity</h3>
            <p className="text-sm text-brand-gray-text">Connect event and inventory systems into SeatsConnect.</p>
          </div>
          <div className="rounded-xl border border-orange-100 p-6">
            <h3 className="font-tech font-bold text-brand-dark mb-2">Partner Connectivity</h3>
            <p className="text-sm text-brand-gray-text">Access connected event inventory through the SeatsConnect API.</p>
          </div>
        </div>
        <p className="text-center text-sm text-brand-gray-text mt-6">
          This reduces the need for multiple individual integrations on both sides.
        </p>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="API Capabilities."
          description="Depending on integration and access level, SeatsConnect APIs may support:"
          align="center"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {capabilities.map((cap) => (
            <div key={cap.name} className="rounded-lg border border-orange-100 bg-white p-4">
              <h4 className="font-tech font-bold text-brand-orange text-sm mb-1">{cap.name}</h4>
              <p className="text-xs text-brand-gray-text">{cap.desc}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader title="Supplier API Flow." align="center" />
        <LiveConsole
          title="supplier-api"
          animate={false}
          className="max-w-md mx-auto mb-10"
          lines={[
            { text: "SUPPLIER SYSTEM", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "SeatsConnect API", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "SeatsConnect Infrastructure", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "APPROVED B2B DISTRIBUTION", type: "accent" },
          ]}
        />
        <p className="text-center text-sm text-brand-gray-text mb-12">
          One connection instead of multiple individual buyer integrations.
        </p>

        <SectionHeader title="Distribution API Flow." align="center" />
        <LiveConsole
          title="partner-api"
          animate={false}
          className="max-w-md mx-auto"
          lines={[
            { text: "GLOBAL EVENT SUPPLY", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "SeatsConnect", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "Partner API", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "PARTNER PLATFORM", type: "accent" },
            { text: "↓", type: "arrow" },
            { text: "CUSTOMER", type: "accent" },
          ]}
        />
        <p className="text-center text-sm text-brand-gray-text mt-6">
          One connection instead of multiple individual supplier integrations.
        </p>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Technical Documentation."
          description="Detailed API documentation, authentication, endpoints, schemas and sandbox information sit in a separate developer portal. Request access and our integration team will guide the next steps."
          align="center"
        />
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={routes.developers}>Go to Developers</Button>
          <Button href={routes.contact} variant="outline">
            Request Developer Access
          </Button>
        </div>
      </PageSection>
    </>
  );
}
