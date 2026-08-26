import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Support — SeatsConnect™",
  description:
    "Help centre for SeatsConnect partners and suppliers. Find guidance on joining, accessing the platform, API connectivity and submitting requests.",
};

const helpAreas = [
  {
    title: "Join SeatsConnect",
    description: "Apply as a supply partner or distribution partner.",
    href: routes.join,
  },
  {
    title: "Partner Platform",
    description: "Existing partners can access the SeatsConnect platform directly.",
    href: siteConfig.portalUrl,
    external: true,
  },
  {
    title: "Submit a Request",
    description: "Ask the partner team for selected bespoke ticket or hospitality requirements.",
    href: routes.request,
  },
  {
    title: "API & Developers",
    description: "Review API capabilities and request developer access.",
    href: routes.developers,
  },
  {
    title: "Partner Resources",
    description: "Guides and reference pages for approved businesses.",
    href: routes.resources,
  },
  {
    title: "Contact the Team",
    description: "Speak with supply, partner or integration teams.",
    href: routes.contact,
  },
];

const faqs = [
  {
    question: "What is SeatsConnect?",
    answer:
      "SeatsConnect is API-powered B2B distribution infrastructure for tickets, hospitality and live experiences. It connects venues, promoters, hospitality providers and approved suppliers with a global network of professional B2B distribution partners.",
  },
  {
    question: "How do suppliers connect inventory?",
    answer:
      "Suppliers can apply through the supply partner form. Inventory can be connected through API, feed or supported integration, then made available according to agreed channels, markets, partner groups and commercial terms.",
  },
  {
    question: "How do distribution partners get access?",
    answer:
      "Approved travel, concierge, corporate, hotel, sports travel and white-label businesses can apply for partner access. Access may be provided through the SeatsConnect platform, API, white label or custom integration.",
  },
  {
    question: "Where do existing partners log in?",
    answer:
      "The public website Login button takes existing partners directly to the SeatsConnect platform. If you cannot access your account, contact the partner team.",
  },
  {
    question: "Where is the API documentation?",
    answer:
      "Detailed documentation, authentication, endpoints, schemas and sandbox information sit in a separate developer portal. Request developer access and our integration team will guide the next steps.",
  },
  {
    question: "Can partners request inventory that is not in live search?",
    answer:
      "Not every customer requirement will be available through live inventory. Approved partners can submit selected group, hospitality, VIP, quantity or multi-event requests to the partner team.",
  },
];

export default function SupportPage() {
  return (
    <>
      <PageHero
        image={siteImages.pages.support}
        title="Support."
        description="Guidance for businesses connecting supply, joining the distribution network or integrating with SeatsConnect."
      />

      <PageSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {helpAreas.map((area) =>
            area.external ? (
              <a
                key={area.title}
                href={area.href}
                className="rounded-xl border border-orange-100 bg-white p-5 glow-border hover:border-brand-orange/40 transition-colors"
              >
                <h3 className="font-tech font-bold text-brand-dark mb-2">{area.title}</h3>
                <p className="text-sm text-brand-gray-text">{area.description}</p>
              </a>
            ) : (
              <Link
                key={area.title}
                href={area.href}
                className="rounded-xl border border-orange-100 bg-white p-5 glow-border hover:border-brand-orange/40 transition-colors"
              >
                <h3 className="font-tech font-bold text-brand-dark mb-2">{area.title}</h3>
                <p className="text-sm text-brand-gray-text">{area.description}</p>
              </Link>
            )
          )}
        </div>
      </PageSection>

      <PageSection tinted>
        <SectionHeader title="Common Questions." align="center" />
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-xl border border-orange-100 bg-white p-5">
              <h3 className="font-tech font-bold text-brand-dark mb-2">{faq.question}</h3>
              <p className="text-sm text-brand-gray-text leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Still Need Help?"
          description="Our team can help with supply partnerships, partner access, integrations and general enquiries."
          align="center"
        />
        <div className="text-center">
          <Button href={routes.contact}>Talk to Our Team</Button>
        </div>
      </PageSection>
    </>
  );
}
