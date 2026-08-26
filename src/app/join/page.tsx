import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Join SeatsConnect — SeatsConnect™",
  description:
    "Join SeatsConnect. Connect professional event supply and professional distribution through one connected B2B infrastructure.",
};

const supplyTypes = [
  "Venues",
  "Promoters",
  "Hospitality Providers",
  "Event Organisers",
  "Rights Holders",
  "Approved Ticket Suppliers",
];

const partnerTypes = [
  "Travel Agencies",
  "Tour Operators",
  "Concierge Companies",
  "Corporate Travel",
  "Event Agencies",
  "Hotels",
  "Sports Travel",
  "Lifestyle Management",
  "White-Label Businesses",
];

export default function JoinPage() {
  return (
    <>
      <PageHero
        image={siteImages.pages.join}
        title="Join SeatsConnect."
        description="SeatsConnect brings professional event supply and professional distribution together through one connected B2B infrastructure. Choose the option that best describes your business."
      />

      <PageSection>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="rounded-2xl border border-orange-100 p-6 sm:p-8 bg-white glow-border">
            <h2 className="font-tech text-xl font-bold text-brand-dark mb-2">
              I Supply Tickets or Hospitality.
            </h2>
            <p className="text-xs font-tech uppercase tracking-widest text-brand-gray-text mb-4">For:</p>
            <ul className="space-y-1.5 mb-6">
              {supplyTypes.map((t) => (
                <li key={t} className="text-sm text-brand-gray-text flex items-center gap-2">
                  <span className="text-brand-orange">→</span>{t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-gray-text mb-6">
              Connect inventory with professional distribution channels.
            </p>
            <Link
              href={routes.joinSupplier}
              className="inline-flex items-center gap-2 text-brand-orange font-tech font-semibold hover:underline"
            >
              Become a Supply Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="rounded-2xl border border-orange-100 p-6 sm:p-8 bg-brand-orange-light/30 glow-border">
            <h2 className="font-tech text-xl font-bold text-brand-dark mb-2">
              I Distribute to Customers.
            </h2>
            <p className="text-xs font-tech uppercase tracking-widest text-brand-gray-text mb-4">For:</p>
            <ul className="space-y-1.5 mb-6">
              {partnerTypes.map((t) => (
                <li key={t} className="text-sm text-brand-gray-text flex items-center gap-2">
                  <span className="text-brand-orange">→</span>{t}
                </li>
              ))}
            </ul>
            <p className="text-sm text-brand-gray-text mb-6">
              Access global event inventory through one B2B connection.
            </p>
            <Link
              href={routes.joinPartner}
              className="inline-flex items-center gap-2 text-brand-orange font-tech font-semibold hover:underline"
            >
              Become a Distribution Partner <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </PageSection>
    </>
  );
}
