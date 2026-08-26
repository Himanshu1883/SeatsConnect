import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Layers } from "lucide-react";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { CardMedia } from "@/components/ui/CardMedia";
import { SurfacePattern } from "@/components/ui/SectionBackground";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

export type PageHeroCta = {
  label: string;
  href: string;
  external?: boolean;
};

export type PageHeroItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  titleAccent?: string;
  description?: string;
  icon?: LucideIcon;
  image?: string;
  primaryCta?: PageHeroCta;
  secondaryCta?: PageHeroCta;
  tertiaryCta?: PageHeroCta;
  steps?: PageHeroItem[];
  features?: PageHeroItem[];
  children?: React.ReactNode;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  icon: BrandIcon = Layers,
  image,
  primaryCta,
  secondaryCta,
  tertiaryCta,
  steps,
  features,
  children,
  className,
}: PageHeroProps) {
  const heroImage = image ?? siteImages.experiences.football;
  const hasCtas = Boolean(primaryCta || secondaryCta || tertiaryCta || children);

  return (
    <section
      className={cn(
        "hero-band relative flex h-[70vh] max-h-[70vh] min-h-[22rem] flex-col overflow-hidden",
        className
      )}
    >
      <PageHeroBackdrop image={heroImage} />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col justify-between px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
        <div className="flex min-h-0 flex-1 flex-col justify-center">
          <div className="platform-hero-fade mb-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 sm:mb-4">
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-orange sm:text-[11px]">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-brand-orange opacity-70 live-ping" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
                </span>
                {eyebrow}
              </span>
            ) : null}
            {eyebrow ? (
              <span
                className="hidden h-4 w-px bg-orange-200/80 sm:block"
                aria-hidden
              />
            ) : null}
            <span className="inline-flex items-center gap-2 font-tech text-sm font-semibold text-brand-dark">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-orange text-white shadow-[0_6px_16px_rgba(255,107,0,0.28)]">
                <BrandIcon className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              Seats<span className="text-brand-orange">Connect</span>™
            </span>
          </div>

          <div className="max-w-xl lg:max-w-[32rem] xl:max-w-[36rem]">
            <h1 className="platform-hero-fade platform-hero-fade-1 text-left font-tech text-[1.85rem] font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.55rem] xl:text-[2.8rem]">
              {title}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="text-brand-orange">{titleAccent}</span>
                </>
              ) : null}
            </h1>
            {description ? (
              <p className="platform-hero-fade platform-hero-fade-2 mt-2.5 max-w-md text-left text-sm leading-relaxed text-brand-gray-text sm:mt-3 sm:text-[15px]">
                {description}
              </p>
            ) : null}

            {hasCtas ? (
              <div className="platform-hero-fade platform-hero-fade-3 mt-4 flex flex-col items-start gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
                {primaryCta ? (
                  <Button
                    href={primaryCta.href}
                    external={primaryCta.external}
                    className="rounded-full px-5 py-2.5 shadow-[0_10px_24px_rgba(255,107,0,0.25)]"
                  >
                    {primaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button
                    href={secondaryCta.href}
                    external={secondaryCta.external}
                    variant="outline"
                    className="rounded-full px-5 py-2.5"
                  >
                    {secondaryCta.label}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : null}
                {tertiaryCta ? (
                  <Button
                    href={tertiaryCta.href}
                    external={tertiaryCta.external}
                    variant="ghost"
                    className="rounded-none px-1 py-2 text-brand-orange underline decoration-brand-orange/40 underline-offset-4 hover:bg-transparent hover:decoration-brand-orange"
                  >
                    {tertiaryCta.label}
                  </Button>
                ) : null}
                {children}
              </div>
            ) : null}
          </div>

          {steps && steps.length > 0 ? (
            <div className="platform-hero-fade platform-hero-fade-4 mt-5 sm:mt-6">
              <div className="relative grid max-w-2xl grid-cols-2 gap-3 sm:max-w-3xl sm:grid-cols-4 sm:gap-2">
                {steps.map((step, i) => (
                  <div key={step.title} className="relative flex flex-col gap-1.5">
                    <span className="relative z-[1] flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange ring-4 ring-[#f7f4f0]">
                      <step.icon className="h-4 w-4" strokeWidth={1.7} />
                    </span>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-dark">
                      {step.title}
                    </p>
                    <p className="max-w-[9.5rem] text-[11px] leading-snug text-brand-gray-text">
                      {step.text}
                    </p>
                    {i < steps.length - 1 ? (
                      <span
                        className="absolute -right-1 top-[1.05rem] h-1.5 w-1.5 rounded-full bg-brand-orange/50 sm:hidden"
                        aria-hidden
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {features && features.length > 0 ? (
          <div className="platform-hero-fade platform-hero-fade-5 mt-4 shrink-0 sm:mt-5">
            <div className="grid grid-cols-1 gap-3 rounded-2xl border border-orange-100/90 bg-white/95 p-3 shadow-[0_12px_36px_rgba(40,30,20,0.07)] backdrop-blur-sm sm:grid-cols-2 sm:gap-0 sm:p-0 lg:grid-cols-4 lg:rounded-full lg:px-2 lg:py-2.5">
              {features.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 px-2 py-1 sm:px-3 sm:py-2.5 lg:items-center"
                >
                  {i > 0 ? (
                    <span
                      className="mr-1 hidden h-8 w-px shrink-0 bg-orange-100 lg:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/12 text-brand-orange">
                    <item.icon className="h-3.5 w-3.5" strokeWidth={1.7} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-tech text-[12px] font-bold leading-tight text-brand-dark sm:text-[13px]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[10px] leading-snug text-brand-gray-text sm:text-[11px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function PageHeroBackdrop({ image }: { image: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="absolute inset-0 bg-[#f7f4f0]" />
      <div className="absolute inset-y-0 right-0 w-full sm:w-[70%] lg:w-[58%] xl:w-[54%]">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="(max-width: 640px) 100vw, 58vw"
          className="object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f4f0] via-[#f7f4f0]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f4f0]/55 via-transparent to-[#f7f4f0]/25" />
      </div>
      <div className="absolute inset-y-0 left-0 w-[48%] bg-gradient-to-r from-[#f7f4f0] via-[#f7f4f0]/90 to-transparent sm:w-[42%] lg:w-[38%]" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#f7f4f0] to-transparent" />
    </div>
  );
}

type PageSectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  tinted?: boolean;
};

export function PageSection({
  id,
  children,
  className,
  tinted = false,
}: PageSectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-band px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20",
        tinted ? "bg-brand-orange-light" : "bg-white",
        className
      )}
    >
      <SurfacePattern variant={tinted ? "grid" : "plain"} wash={tinted} />
      <div className="relative z-10 mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

type FeatureCardProps = {
  title: string;
  description: string;
  image?: string;
};

export function FeatureGrid({ items }: { items: FeatureCardProps[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 60}>
          <div className="group h-full overflow-hidden rounded-xl border border-orange-100 bg-white">
            {item.image ? (
              <CardMedia
                src={item.image}
                alt={item.title}
                heightClass="h-36 sm:h-40"
              />
            ) : null}
            <div className="p-5 sm:p-6">
              <h3 className="font-tech font-bold text-brand-dark mb-2 text-base sm:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-brand-gray-text leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

type FinalCTAProps = {
  title: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tertiaryCta?: { label: string; href: string };
};

export function FinalCTA({
  title,
  description,
  primaryCta,
  secondaryCta,
  tertiaryCta,
}: FinalCTAProps) {
  return (
    <section className="section-band px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-brand-orange-light">
      <SurfacePattern variant="grid" wash />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <h2 className="font-tech text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-brand-dark">
          {title}
        </h2>
        {description ? (
          <p className="text-brand-gray-text mb-8 text-sm sm:text-base">
            {description}
          </p>
        ) : null}
        <ButtonGroup className="justify-center">
          {primaryCta ? (
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
          ) : null}
          {secondaryCta ? (
            <Button href={secondaryCta.href} variant="outline">
              {secondaryCta.label}
            </Button>
          ) : null}
          {tertiaryCta ? (
            <Button href={tertiaryCta.href} variant="ghost">
              {tertiaryCta.label}
            </Button>
          ) : null}
        </ButtonGroup>
      </div>
    </section>
  );
}
