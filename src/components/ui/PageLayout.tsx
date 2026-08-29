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
  /** right = photo sits in the right panel; bleed = full-width under the wash */
  imagePlacement?: "right" | "bleed";
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
  imagePlacement = "bleed",
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
        "hero-band relative flex flex-col overflow-hidden",
        // Always grow with content so steps + feature bar never collide.
        // Soft min-height on large screens for presence — no max-height crop.
        "h-auto min-h-0",
        "lg:min-h-[min(68vh,36rem)]",
        className
      )}
    >
      <PageHeroBackdrop image={heroImage} placement={imagePlacement} />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-6 sm:gap-7 sm:px-6 sm:py-8 lg:gap-8 lg:px-8 lg:py-8 xl:gap-9 xl:py-10">
        <div className="flex min-h-0 flex-col">
          <div className="platform-hero-fade mb-3 sm:mb-4">
            {/* Mobile: eyebrow only as a pill */}
            {eyebrow ? (
              <span className="inline-flex items-center gap-2 rounded-full border border-orange-100/90 bg-white/90 px-3 py-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange shadow-[0_4px_12px_rgba(40,30,20,0.04)] sm:hidden">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inset-0 rounded-full bg-brand-orange opacity-70 live-ping" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
                </span>
                {eyebrow}
              </span>
            ) : null}

            {/* sm+: eyebrow + SeatsConnect brand */}
            <div className="hidden flex-wrap items-center gap-x-2.5 gap-y-2 sm:flex">
              {eyebrow ? (
                <span className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-orange">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inset-0 rounded-full bg-brand-orange opacity-70 live-ping" />
                    <span className="relative h-1.5 w-1.5 rounded-full bg-brand-orange" />
                  </span>
                  {eyebrow}
                </span>
              ) : null}
              {eyebrow ? (
                <span className="h-4 w-px bg-orange-200/80" aria-hidden />
              ) : null}
              <span className="inline-flex items-center gap-2 font-tech text-sm font-semibold text-brand-dark">
                <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand-orange text-white shadow-[0_6px_16px_rgba(255,107,0,0.28)]">
                  <BrandIcon className="h-3.5 w-3.5" strokeWidth={2} />
                </span>
                <span>
                  Seats<span className="text-brand-orange">Connect</span>™
                </span>
              </span>
            </div>
          </div>

          <div className="relative max-w-xl lg:max-w-[32rem] xl:max-w-[36rem]">
            {/* Solid readable surface behind copy on small screens */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-x-3 -inset-y-2 rounded-2xl bg-[#f7f4f0]/95 sm:-inset-x-4 sm:bg-[#f7f4f0]/88 lg:hidden"
            />

            <div className="relative">
              <h1 className="platform-hero-fade platform-hero-fade-1 text-left font-tech text-[1.7rem] font-bold leading-[1.1] tracking-tight text-brand-dark sm:text-4xl lg:text-[2.55rem] xl:text-[2.8rem]">
                {title}
                {titleAccent ? (
                  <>
                    {" "}
                    <span className="text-brand-orange">{titleAccent}</span>
                  </>
                ) : null}
              </h1>
              {description ? (
                <p className="platform-hero-fade platform-hero-fade-2 mt-2.5 max-w-md text-left text-[13px] leading-relaxed text-brand-gray-text sm:mt-3 sm:text-[15px]">
                  {description}
                </p>
              ) : null}

              {hasCtas ? (
                <div className="platform-hero-fade platform-hero-fade-3 mt-4 flex w-full flex-col gap-2.5 sm:mt-5 sm:flex-row sm:flex-wrap sm:items-center">
                  {primaryCta ? (
                    <Button
                      href={primaryCta.href}
                      external={primaryCta.external}
                      className="w-full justify-center rounded-full px-5 py-2.5 shadow-[0_10px_24px_rgba(255,107,0,0.25)] sm:w-auto"
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
                      className="w-full justify-center rounded-full px-5 py-2.5 sm:w-auto"
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
          </div>

          {steps && steps.length > 0 ? (
            <div className="platform-hero-fade platform-hero-fade-4 relative mt-5 sm:mt-6 lg:mt-7">
              {/* Mobile: one-row pill */}
              <div className="relative flex w-full items-stretch overflow-hidden rounded-full border border-orange-100/90 bg-white/95 p-1 shadow-[0_8px_20px_rgba(40,30,20,0.05)] sm:hidden">
                {steps.map((step, i) => (
                  <div
                    key={step.title}
                    className={cn(
                      "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2 text-center",
                      i > 0 && "border-l border-orange-100/80"
                    )}
                  >
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange/12 text-brand-orange">
                      <step.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                    </span>
                    <p className="font-mono text-[8px] font-semibold uppercase tracking-[0.12em] text-brand-dark">
                      {step.title}
                    </p>
                  </div>
                ))}
              </div>

              {/* sm+: expanded workflow row */}
              <div className="relative hidden sm:block">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-x-2 -inset-y-2 rounded-2xl bg-[#f7f4f0]/92 lg:hidden"
                />
                <div className="relative grid max-w-2xl grid-cols-4 gap-2 sm:max-w-3xl lg:gap-3">
                  {steps.map((step, i) => (
                    <div key={step.title} className="relative flex flex-col gap-1.5 pb-0.5">
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
                          className="absolute -right-1 top-[1.05rem] hidden h-1.5 w-1.5 rounded-full bg-brand-orange/50 md:block lg:hidden"
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {features && features.length > 0 ? (
          <div className="platform-hero-fade platform-hero-fade-5 relative z-20 shrink-0">
            <div
              className={cn(
                "grid grid-cols-1 gap-2.5 rounded-2xl border border-orange-100/90 bg-white p-3 shadow-[0_12px_36px_rgba(40,30,20,0.07)] sm:grid-cols-2 sm:gap-0 sm:p-0 lg:rounded-full lg:bg-white/95 lg:px-2 lg:py-2.5 lg:backdrop-blur-sm",
                features.length > 4
                  ? "lg:grid-cols-3 xl:grid-cols-6"
                  : "lg:grid-cols-4"
              )}
            >
              {features.map((item, i) => (
                <div
                  key={item.title}
                  className="flex items-start gap-2.5 rounded-xl bg-[#faf7f3]/70 px-2.5 py-2 sm:rounded-none sm:bg-transparent sm:px-3 sm:py-2.5 lg:items-center"
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

function PageHeroBackdrop({
  image,
  placement = "bleed",
}: {
  image: string;
  placement?: "right" | "bleed";
}) {
  const right = placement === "right";

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[#f7f4f0]" />

      {/* Mobile / tablet: image band — soft cream into dark */}
      <div className="absolute inset-x-0 top-0 h-[11rem] overflow-hidden bg-[#f7f4f0] sm:h-[14rem] lg:hidden">
        <div className="page-hero-shot absolute inset-0">
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,8,7,0.4) 0%, rgba(10,8,7,0.18) 45%, #f7f4f0 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #f7f4f0 0%, rgba(247,244,240,0.85) 35%, rgba(247,244,240,0.25) 70%, transparent 100%)",
          }}
        />
      </div>

      {/* Desktop: photo on the right (or full-bleed under the wash) */}
      <div
        className={cn(
          "page-hero-shot absolute hidden lg:block",
          right ? "inset-y-0 right-0 left-[42%]" : "inset-0"
        )}
      >
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes={right ? "58vw" : "100vw"}
          className={
            right
              ? "object-cover object-center"
              : "object-cover object-[72%_center]"
          }
        />
      </div>

      {/*
        Continuous plain → dark dissolve (no hard center seam).
        Cream stays longer under copy so text stays readable, then softens into dark.
      */}
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, #f7f4f0 0%, #f7f4f0 42%, rgba(247,244,240,0.97) 52%, rgba(247,244,240,0.82) 60%, rgba(247,244,240,0.52) 68%, rgba(247,244,240,0.22) 76%, rgba(247,244,240,0.06) 84%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(to right, transparent 0%, transparent 48%, rgba(18,14,12,0.06) 58%, rgba(14,11,9,0.18) 68%, rgba(12,10,8,0.34) 78%, rgba(10,8,7,0.48) 88%, rgba(8,7,6,0.56) 100%)",
        }}
      />
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
