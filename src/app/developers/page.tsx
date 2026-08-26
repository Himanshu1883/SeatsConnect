import type { Metadata } from "next";
import { DeveloperAccessForm } from "@/components/forms/DeveloperAccessForm";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { PageHero, PageSection, FeatureGrid } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { launchFlags } from "@/lib/constants/features";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Developers — SeatsConnect™",
  description:
    "Connect your systems to SeatsConnect. Detailed API documentation, authentication, endpoints, schemas and sandbox access sit in the SeatsConnect developer portal.",
};

const portalItems = [
  { title: "Authentication", description: "Access credentials and authentication methods for approved integrations." },
  { title: "Endpoints", description: "Events, products, inventory, availability, pricing, orders and fulfilment." },
  { title: "Schemas", description: "Request and response structures for supported API capabilities." },
  { title: "Sandbox", description: "A separate environment for approved development and testing." },
  { title: "Webhooks", description: "Receive relevant real-time updates where supported." },
  { title: "Access Control", description: "Capabilities depend on integration type and approved access level." },
];

export default function DevelopersPage() {
  return (
    <>
      <PageHero
        eyebrow="Developers"
        icon={heroIcons.developers}
        image={siteImages.pages.developers}
        title="Connect Your Systems to"
        titleAccent="SeatsConnect."
        description="Detailed API documentation, authentication, endpoints, schemas and sandbox information sit in a separate developer portal. The public website explains the infrastructure. The portal is where approved teams build."
        primaryCta={
          launchFlags.developerPortal
            ? {
                label: "Open Developer Portal",
                href: siteConfig.developersUrl,
                external: true,
              }
            : { label: "Request Developer Access", href: "#access" }
        }
        secondaryCta={{ label: "View API Overview", href: routes.api }}
        steps={heroWorkflow}
        features={[...heroFeatures.api]}
      />

      <PageSection>
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionHeader
              title="Documentation Lives in the Developer Portal."
              description="Recommended locations for technical documentation are developers.seatsconnect.com or api.seatsconnect.com/docs. Until the portal is opened for an approved team, the public API page remains the overview of what SeatsConnect can connect."
              align="left"
            />
          </div>
          <LiveConsole
            title="developer-portal"
            lines={[
              { text: "docs.authentication", type: "muted" },
              { text: "docs.endpoints.events", type: "accent" },
              { text: "docs.endpoints.inventory", type: "muted" },
              { text: "docs.endpoints.orders", type: "accent" },
              { text: "docs.webhooks", type: "muted" },
              { text: "sandbox.seatsconnect.com", type: "accent" },
            ]}
          />
        </div>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="What the Portal Is For."
          description="The developer portal is intended for approved suppliers, distribution partners and technology teams connecting into SeatsConnect."
          align="center"
        />
        <FeatureGrid items={portalItems} />
      </PageSection>

      <PageSection id="access">
        <SectionHeader
          title="Request Developer Access."
          description="Tell us what you want to connect. Our integration team will review the request and contact you regarding documentation and next steps."
          align="center"
        />
        <DeveloperAccessForm />
      </PageSection>
    </>
  );
}
