import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { topicPages } from "@/lib/constants/topics";

export const metadata: Metadata = {
  title: "Topics — SeatsConnect™",
  description:
    "B2B ticket distribution, hospitality infrastructure, event inventory APIs and white-label connectivity from SeatsConnect.",
};

export default function TopicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Topics"
        icon={heroIcons.topics}
        image={siteImages.pages.topics}
        title="Distribution Infrastructure"
        titleAccent="Topics."
        description="SeatsConnect pages covering B2B ticket distribution, APIs, hospitality, concierge, sports travel and white-label connectivity — written for professional supply and distribution businesses."
        primaryCta={{ label: "Join SeatsConnect", href: routes.join }}
        secondaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.infrastructure]}
      />
      <PageSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {topicPages.map((topic) => (
            <Link
              key={topic.slug}
              href={`${routes.topics}/${topic.slug}`}
              className="rounded-xl border border-orange-100 bg-white p-5 glow-border flex flex-col hover:border-brand-orange/40 transition-colors"
            >
              <h2 className="font-tech font-bold text-brand-dark mb-2">{topic.title}</h2>
              <p className="text-sm text-brand-gray-text mb-4 flex-1">{topic.description}</p>
              <span className="inline-flex items-center gap-1 text-sm text-brand-orange font-semibold">
                Read <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </PageSection>
    </>
  );
}
