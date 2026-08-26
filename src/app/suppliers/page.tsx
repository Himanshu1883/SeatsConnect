import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { PageHero, PageSection, FeatureGrid, FinalCTA } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { routes } from "@/lib/constants/routes";
import { siteImages } from "@/lib/constants/images";

export const metadata: Metadata = {
  title: "For Suppliers — SeatsConnect™",
  description:
    "Turn event inventory into global B2B distribution. Connect once and make your inventory available through approved professional channels.",
};

const channels = [
  "Travel agencies",
  "Tour operators",
  "Concierge businesses",
  "Corporate travel",
  "Hotels",
  "Event agencies",
  "Sports travel",
  "White-label platforms",
];

const controls = [
  "Partners",
  "Channels",
  "Markets",
  "Territories",
  "Events",
  "Products",
  "Allocations",
  "Commercial arrangements",
];

const integrationData = [
  "Event information",
  "Product information",
  "Inventory",
  "Availability",
  "Pricing",
  "Orders",
  "Booking status",
  "Fulfilment information",
];

const benefits = [
  { title: "One connection", description: "Connect once to multiple approved distribution channels." },
  { title: "Automated availability", description: "Reduce manual updates through supported integrations." },
  { title: "Structured B2B access", description: "Make inventory available through approved professional channels." },
  { title: "Reduced administration", description: "Centralise connectivity and reduce operational complexity." },
  { title: "International reach", description: "Connect with businesses serving international customers." },
  { title: "Connected booking information", description: "Structured flow of orders and fulfilment data." },
];

const supplyTypes = [
  { title: "Venues", description: "Connect available ticket and hospitality products with professional distribution." },
  { title: "Promoters", description: "Extend event reach through selected B2B channels." },
  { title: "Hospitality Providers", description: "Reach professional travel, corporate and concierge buyers." },
  { title: "Event Organisers", description: "Connect event products to an international distribution network." },
  { title: "Approved Suppliers", description: "Integrate professional inventory into the SeatsConnect infrastructure." },
];

export default function SuppliersPage() {
  return (
    <>
      <PageHero
        image={siteImages.pages.suppliers}
        title="Turn Event Inventory Into Global B2B Distribution."
        description="Connect once and make your inventory available through approved professional channels. SeatsConnect helps venues, promoters, hospitality providers and approved suppliers connect their inventory with professional B2B demand across international markets."
      >
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href={routes.joinSupplier}>Connect Your Inventory</Button>
          <Button href={routes.contact} variant="outline">Talk to Our Supply Team</Button>
        </div>
      </PageHero>

      <PageSection>
        <SectionHeader
          title="Expand Reach Without Building Multiple Connections."
          description="Connecting separately with every travel company, concierge provider, corporate agency or distribution platform creates additional technical and operational complexity. SeatsConnect provides one infrastructure layer between your inventory and multiple approved professional channels."
          align="center"
        />
        <p className="text-center font-tech font-semibold text-brand-dark">Connect once. Expand intelligently.</p>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Reach New Markets."
          description="Your customers may be local, but demand for major events is global. SeatsConnect helps connect supply with businesses already serving international customers. Potential channels include:"
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          {channels.map((ch) => (
            <span key={ch} className="rounded-lg border border-orange-100 bg-white px-3 py-2 text-xs">{ch}</span>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Maintain Greater Distribution Control."
          description="SeatsConnect is designed around controlled B2B distribution. Depending on your commercial and technical requirements, inventory can be structured for specific:"
          align="center"
        />
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto mb-6">
          {controls.map((c) => (
            <span key={c} className="rounded-full border border-orange-100 bg-brand-orange-light/50 px-4 py-2 text-xs font-tech font-semibold">{c}</span>
          ))}
        </div>
        <p className="text-center text-sm text-brand-gray-text">Expand distribution without simply opening inventory to everyone.</p>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Connect Through API."
          description="SeatsConnect can integrate with existing supplier systems to automate the movement of:"
          align="center"
        />
        <ul className="grid sm:grid-cols-2 gap-2 max-w-lg mx-auto mb-8">
          {integrationData.map((item) => (
            <li key={item} className="text-sm text-brand-gray-text flex items-center gap-2">
              <span className="text-brand-orange">→</span>{item}
            </li>
          ))}
        </ul>
        <div className="text-center">
          <Button href={routes.contact}>Discuss an Integration</Button>
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Reduce Manual Distribution."
          description="Manual enquiries, spreadsheets, emails and individual feeds create additional work. SeatsConnect is designed to centralise connectivity and reduce unnecessary operational complexity."
          align="center"
        />
        <FeatureGrid items={benefits} />
      </PageSection>

      <PageSection tinted>
        <SectionHeader title="Built for Different Types of Supply." align="center" />
        <FeatureGrid items={supplyTypes} />
      </PageSection>

      <FinalCTA
        title="Connect Your Inventory to Professional Demand."
        description="One integration can provide access to multiple approved distribution channels."
        primaryCta={{ label: "Become a Supply Partner", href: routes.joinSupplier }}
        secondaryCta={{ label: "Talk to Our Supply Team", href: routes.contact }}
      />
    </>
  );
}
