import { Button, ButtonGroup } from "@/components/ui/Button";
import { HeroBackgroundSlideshow } from "@/components/sections/hero/HeroBackgroundSlideshow";
import { CardMedia } from "@/components/ui/CardMedia";
import { SurfacePattern } from "@/components/ui/SectionBackground";
import { Reveal } from "@/components/ui/Reveal";
import { pageBanners } from "@/lib/constants/images";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  dark?: boolean;
  image?: string;
  images?: readonly string[];
};

export function PageHero({
  eyebrow,
  title,
  description,
  children,
  className,
  image,
  images,
}: PageHeroProps) {
  const bannerImages = images ?? pageBanners(image);

  return (
    <section
      className={cn(
        "hero-band px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 min-h-[52vh] flex items-center",
        className
      )}
    >
      <HeroBackgroundSlideshow images={bannerImages} overlay="light" />
      <div className="absolute inset-0 z-[1] surface-grid opacity-35" />
      <div className="relative z-10 mx-auto max-w-4xl text-center w-full">
        {eyebrow ? (
          <span className="mb-3 block font-tech text-xs uppercase tracking-widest text-brand-orange font-semibold">
            {eyebrow}
          </span>
        ) : null}
        <h1 className="font-tech text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 text-brand-dark">
          {title}
        </h1>
        {description ? (
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-8 text-brand-gray-text">
            {description}
          </p>
        ) : null}
        {children}
      </div>
    </section>
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
