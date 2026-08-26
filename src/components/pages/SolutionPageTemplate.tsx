import { Button, ButtonGroup } from "@/components/ui/Button";
import {
  LiveConsole,
  FlowDiagram,
  HorizontalFlow,
  type ConsoleLine,
} from "@/components/ui/LiveConsole";
import { PageHero, PageSection, FinalCTA } from "@/components/ui/PageLayout";
import { SectionHeader } from "@/components/ui/SectionHeader";

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
    title: string;
    description: string;
    cta?: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
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
      <PageHero title={hero.title} description={hero.description} image={hero.image}>
        {hero.cta || hero.secondaryCta ? (
          <ButtonGroup className="justify-center">
            {hero.cta ? <Button href={hero.cta.href}>{hero.cta.label}</Button> : null}
            {hero.secondaryCta ? (
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            ) : null}
          </ButtonGroup>
        ) : null}
      </PageHero>

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
