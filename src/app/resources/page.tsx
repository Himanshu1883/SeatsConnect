import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { topicPages } from "@/lib/constants/topics";

export const metadata: Metadata = {
  title: "Partner Resources — SeatsConnect™",
  description:
    "Resources for SeatsConnect supply and distribution partners, including platform guidance, API connectivity, white-label options and support.",
};

const resources = [
  {
    title: "Platform Overview",
    description: "How SeatsConnect connects supply, structures distribution, and supports booking and fulfilment.",
    href: routes.platform,
  },
  {
    title: "Supplier Guide",
    description: "Connect inventory once and make it available through approved professional channels.",
    href: routes.suppliers,
  },
  {
    title: "Partner Guide",
    description: "Search, quote, book and fulfil through one professional B2B connection.",
    href: routes.partners,
  },
  {
    title: "API Overview",
    description: "Understand supplier and partner connectivity before requesting developer access.",
    href: routes.api,
  },
  {
    title: "Developer Access",
    description: "Request documentation, sandbox information and integration support.",
    href: routes.developers,
  },
  {
    title: "White Label",
    description: "Connect inventory and booking infrastructure into your own customer experience.",
    href: routes.solutionsWhiteLabel,
  },
  {
    title: "Submit a Request",
    description: "Ask the partner team for selected group, hospitality or complex requirements.",
    href: routes.request,
  },
  {
    title: "Support",
    description: "Help centre for joining, login, API access and partner questions.",
    href: routes.support,
  },
];

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        icon={heroIcons.resources}
        image={siteImages.pages.resources}
        title="Partner"
        titleAccent="Resources."
        description="Reference pages for businesses connecting supply or distributing event inventory through SeatsConnect. Operational tools sit in the partner platform after access is approved."
        primaryCta={{ label: "Explore Platform", href: routes.platform }}
        secondaryCta={{ label: "View API Overview", href: routes.api }}
        steps={heroWorkflow}
        features={[...heroFeatures.resources]}
      />

      <PageSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="rounded-xl border border-orange-100 bg-white p-5 glow-border flex flex-col hover:border-brand-orange/40 transition-colors"
            >
              <h3 className="font-tech font-bold text-brand-dark mb-2">{resource.title}</h3>
              <p className="text-sm text-brand-gray-text mb-4 flex-1">{resource.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-brand-orange font-semibold">
                Open <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </PageSection>

      <PageSection tinted>
        <SectionHeader
          title="Platform Access."
          description="Existing partners can log in to the SeatsConnect platform for live inventory, quotations, bookings and order management."
          align="center"
        />
        <p className="text-center">
          <a
            href={siteConfig.portalUrl}
            className="text-brand-orange font-tech font-semibold hover:underline"
          >
            Go to Partner Platform
          </a>
        </p>
      </PageSection>

      <PageSection>
        <SectionHeader
          title="Further Reading."
          description="Indexable pages covering SeatsConnect as B2B distribution infrastructure."
          align="center"
        />
        <ul className="max-w-2xl mx-auto space-y-2">
          {topicPages.map((topic) => (
            <li key={topic.slug}>
              <Link
                href={`${routes.topics}/${topic.slug}`}
                className="text-sm text-brand-dark hover:text-brand-orange"
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>
      </PageSection>
    </>
  );
}
