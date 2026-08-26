import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { PageHero, PageSection, FinalCTA } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { getTopicBySlug, topicPages } from "@/lib/constants/topics";

type TopicRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return topicPages.map((topic) => ({ slug: topic.slug }));
}

export async function generateMetadata({
  params,
}: TopicRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) {
    return { title: "Topic — SeatsConnect™" };
  }
  return {
    title: `${topic.title} — SeatsConnect™`,
    description: topic.description,
  };
}

export default async function TopicPage({ params }: TopicRouteProps) {
  const { slug } = await params;
  const topic = getTopicBySlug(slug);
  if (!topic) notFound();

  return (
    <>
      <PageHero
        image={siteImages.pages.topics}
        title={topic.headline}
        description={topic.description}
      >
        <ButtonGroup className="justify-center">
          <Button href={routes.join}>Join SeatsConnect</Button>
          <Button href={routes.contact} variant="outline">
            Talk to Our Team
          </Button>
        </ButtonGroup>
      </PageHero>

      <PageSection>
        <SectionHeader title={topic.title} description={topic.summary} align="center" />
        <ul className="max-w-2xl mx-auto space-y-3">
          {topic.points.map((point) => (
            <li key={point} className="text-sm text-brand-gray-text flex items-start gap-2">
              <span className="text-brand-orange mt-0.5">→</span>
              {point}
            </li>
          ))}
        </ul>
      </PageSection>

      <PageSection tinted>
        <LiveConsole
          title={slug}
          className="max-w-xl mx-auto"
          lines={[
            { text: "SUPPLY", type: "muted" },
            { text: "↓", type: "arrow" },
            { text: "SeatsConnect™", type: "accent" },
            { text: topic.title, type: "muted" },
            { text: "↓", type: "arrow" },
            { text: "APPROVED B2B DISTRIBUTION", type: "accent" },
          ]}
        />
      </PageSection>

      <PageSection>
        <SectionHeader title="Related Pages." align="center" />
        <div className="flex flex-wrap justify-center gap-3">
          {topic.related.map((item) => (
            <Button key={item.href} href={item.href} variant="outline">
              {item.label}
            </Button>
          ))}
        </div>
      </PageSection>

      <FinalCTA
        title="One Connection. Global Opportunity."
        description="Connect supply. Expand distribution. Reach new markets."
        primaryCta={{ label: "Connect Your Inventory", href: routes.joinSupplier }}
        secondaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
      />
    </>
  );
}
