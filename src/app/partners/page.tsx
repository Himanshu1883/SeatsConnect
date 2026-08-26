import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero, PageSection, FeatureGrid, FinalCTA } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/constants/routes";
import { siteImages } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "For Partners — SeatsConnect™",
  description:
    "One connection to global event supply. Access tickets, hospitality and live experiences through one professional B2B platform.",
};

const businessTypes = [
  { title: "Travel Agencies", description: "Add ticket and hospitality products to existing travel services." },
  { title: "Tour Operators", description: "Build event-led travel programmes and packages." },
  { title: "Concierge Companies", description: "Respond to client requirements through one professional sourcing platform." },
  { title: "Corporate & Event Agencies", description: "Source products for corporate entertainment, incentives and events." },
  { title: "Hotels", description: "Give concierge and guest-service teams access to event inventory." },
  { title: "Sports Travel", description: "Combine tickets and hospitality with specialist travel products." },
];

const capabilities = [
  { title: "Search", description: "Find relevant events and available products." },
  { title: "Compare", description: "Review available options." },
  { title: "Quote", description: "Build a professional customer proposal." },
  { title: "Book", description: "Confirm suitable inventory." },
  { title: "Manage", description: "Track order information." },
  { title: "Fulfil", description: "Manage delivery through to completion." },
];

const accessMethods = [
  { title: "Platform", description: "Use the SeatsConnect B2B platform directly." },
  { title: "API", description: "Connect inventory and booking capabilities into your existing technology." },
  { title: "White Label", description: "Create a customer-facing solution using your own branding." },
  { title: "Custom Integration", description: "Develop a workflow suited to your business requirements." },
];

const supportTypes = [
  "Group enquiries",
  "Hospitality requests",
  "VIP requirements",
  "Premium event requests",
  "Larger quantities",
  "Complex requirements",
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        image={siteImages.pages.partners}
        title="One Connection to Global Event Supply."
        description="Access tickets, hospitality and live experiences through one professional B2B platform. SeatsConnect gives approved businesses access to event supply without requiring separate relationships and integrations with every individual supplier."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={routes.joinPartner}>Apply for Partner Access</Button>
          <Button href={routes.contact} variant="outline">Book a Demo</Button>
        </div>
      </PageHero>

      <PageSection>
        <SectionHeader
          title="Built for Businesses Serving Customers."
          description="SeatsConnect is designed for professional businesses that already have customer relationships and want access to event inventory."
          align="center"
        />
        <FeatureGrid items={businessTypes} />
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Search More. Manage Less."
          description="Instead of contacting multiple suppliers for every customer request, approved partners can search connected inventory through SeatsConnect. Depending on account access, partners can:"
          align="center"
        />
        <FeatureGrid items={capabilities} />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Your Customer Relationship Remains Yours."
          description="SeatsConnect is designed to support professional distribution partners rather than compete with them for their customers. Where applicable, partners can create customer-facing quotations and experiences under their own brand."
          align="center"
        />
        <p className="text-center font-tech font-semibold text-brand-dark">
          SeatsConnect provides the infrastructure. You manage the customer relationship.
        </p>
      </PageSection>

      <PageSection tinted>
        <SectionHeader title="Access SeatsConnect Your Way." align="center" />
        <FeatureGrid items={accessMethods} />
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Professional Support When You Need It."
          description="Not every customer request fits neatly into live inventory. Our partner team can support approved businesses with selected:"
          align="center"
        />
        <ul className="grid sm:grid-cols-2 gap-2 max-w-lg mx-auto mb-8">
          {supportTypes.map((item) => (
            <li key={item} className="text-sm text-brand-gray-text flex items-center gap-2">
              <span className="text-brand-orange">→</span>{item}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button href={routes.request}>Submit a Request</Button>
        </div>
      </PageSection>

      <FinalCTA
        title="Give Your Customers Access to More."
        description="Connect your business to global ticket and hospitality supply through SeatsConnect."
        primaryCta={{ label: "Join SeatsConnect", href: routes.joinPartner }}
        secondaryCta={{ label: "Book a Demo", href: routes.contact }}
      />
    </>
  );
}
