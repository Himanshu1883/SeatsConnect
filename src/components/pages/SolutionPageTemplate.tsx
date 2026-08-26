import { Button } from "@/components/ui/Button";
import {
  LiveConsole,
  FlowDiagram,
  HorizontalFlow,
  type ConsoleLine,
} from "@/components/ui/LiveConsole";
import { PageHero, PageSection, FinalCTA } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  heroFeatures,
  heroIcons,
  heroWorkflow,
} from "@/lib/constants/pageHero";

export type SolutionSection = {
  title?: string;
  description?: string;
  items?: string[];
  verticalFlow?: string[];
  horizontalFlow?: string[];
  console?: { title: string; lines: ConsoleLine[] };
  cta?: { label: string; href: string };
  closing?: string;
};

type SolutionPageTemplateProps = {
  hero: {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    description: string;
    cta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    tertiaryCta?: { label: string; href: string };
    image?: string;
  };
  sections: SolutionSection[];
  finalCta?: {
    title: string;
    description?: string;
    primaryCta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
  };
};

export function SolutionPageTemplate({
  hero,
  sections,
  finalCta,
}: SolutionPageTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow ?? "Solutions"}
        icon={heroIcons.solutions}
        title={hero.title}
        titleAccent={hero.titleAccent}
        description={hero.description}
        image={hero.image}
        primaryCta={hero.cta}
        secondaryCta={hero.secondaryCta}
        tertiaryCta={hero.tertiaryCta}
        steps={heroWorkflow}
        features={[...heroFeatures.solutions]}
      />

      {sections.map((section, index) => (
        <PageSection
          key={`${section.title ?? "section"}-${index}`}
          tinted={index % 2 === 1}
        >
          {section.title ? (
            <SectionHeader
              title={section.title}
              description={section.description}
              align="center"
            />
          ) : section.description ? (
            <p className="text-center text-brand-gray-text max-w-2xl mx-auto mb-6">
              {section.description}
            </p>
          ) : null}

          {section.items ? (
            <ul className="grid sm:grid-cols-2 gap-2 max-w-lg mx-auto">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="text-sm text-brand-gray-text flex items-center gap-2"
                >
                  <span className="text-brand-orange">→</span>
                  {item}
                </li>
              ))}
            </ul>
          ) : null}

          {section.verticalFlow ? (
            <FlowDiagram steps={section.verticalFlow} className="mt-6" />
          ) : null}

          {section.horizontalFlow ? (
            <HorizontalFlow steps={section.horizontalFlow} className="mt-6" />
          ) : null}

          {section.console ? (
            <LiveConsole
              title={section.console.title}
              lines={section.console.lines}
              className="max-w-xl mx-auto mt-8"
            />
          ) : null}

          {section.closing ? (
            <p className="text-center font-tech font-semibold text-brand-dark mt-8">
              {section.closing}
            </p>
          ) : null}

          {section.cta ? (
            <div className="text-center mt-8">
              <Button href={section.cta.href}>{section.cta.label}</Button>
            </div>
          ) : null}
        </PageSection>
      ))}

      {finalCta ? (
        <FinalCTA
          title={finalCta.title}
          description={finalCta.description}
          primaryCta={finalCta.primaryCta}
          secondaryCta={finalCta.secondaryCta}
        />
      ) : null}
    </>
  );
}
