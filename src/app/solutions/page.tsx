import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { LiveConsole } from "@/components/ui/LiveConsole";
import { CardMedia } from "@/components/ui/CardMedia";
import { PageHero, PageSection } from "@/components/ui/PageLayout";
import { Reveal } from "@/components/ui/Reveal";
import { SwipeableCards, SwipeCard } from "@/components/ui/SwipeableCards";
import { siteImages } from "@/lib/constants/images";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";
import { routes } from "@/lib/constants/routes";
import { solutionCards } from "@/lib/constants/solutions";

export const metadata: Metadata = {
  title: "Solutions — SeatsConnect™",
  description:
    "Built around your business. SeatsConnect connects global event supply to businesses serving different types of customers around the world.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        icon={heroIcons.solutions}
        image={siteImages.pages.solutions}
        title="Built Around"
        titleAccent="Your Business."
        description="SeatsConnect connects global event supply to businesses serving different types of customers around the world — travel, concierge, hospitality, corporate events and digital distribution."
        primaryCta={{ label: "Join Our Network", href: routes.joinPartner }}
        secondaryCta={{ label: "Talk to Our Team", href: routes.contact }}
        steps={heroWorkflow}
        features={[...heroFeatures.solutions]}
      />

      <PageSection>
        <SwipeableCards>
          {solutionCards.map((solution, i) => (
            <SwipeCard key={solution.href}>
              <Reveal delay={i * 50}>
                <div className="group h-full overflow-hidden rounded-xl border border-orange-100 bg-white glow-border flex flex-col">
                  <CardMedia
                    src={solution.image}
                    alt={solution.title}
                    heightClass="h-36"
                  />
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <p className="text-xs font-tech uppercase tracking-widest text-brand-orange mb-2">
                      {solution.title}
                    </p>
                    <h3 className="font-tech font-bold text-brand-dark mb-2">
                      {solution.headline}
                    </h3>
                    <p className="text-sm text-brand-gray-text mb-4 flex-1">
                      {solution.description}
                    </p>
                    <Link
                      href={solution.href}
                      className="inline-flex items-center gap-1 text-sm text-brand-orange font-semibold hover:underline"
                    >
                      {solution.cta} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </SwipeCard>
          ))}
        </SwipeableCards>
        <p className="md:hidden text-center text-xs text-brand-gray-text mt-3">
          Swipe to explore solutions
        </p>
      </PageSection>

      <PageSection tinted>
        <LiveConsole
          title="solutions-network"
          className="max-w-xl mx-auto"
          lines={[
            { text: "TRAVEL · CONCIERGE · CORPORATE", type: "muted" },
            { text: "HOTELS · SPORTS TRAVEL · WHITE LABEL", type: "muted" },
            { text: "↓", type: "arrow" },
            { text: "SeatsConnect™", type: "accent" },
            { text: "Connectivity layer", type: "muted" },
            { text: "↓", type: "arrow" },
            { text: "GLOBAL EVENT SUPPLY", type: "accent" },
          ]}
        />
      </PageSection>
    </>
  );
}
