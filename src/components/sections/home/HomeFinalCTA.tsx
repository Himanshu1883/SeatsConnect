import { Button, ButtonGroup } from "@/components/ui/Button";
import { HomeFrame } from "@/components/sections/home/HomeFrame";
import { ExperienceStrip } from "@/components/ui/CardMedia";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { siteConfig } from "@/lib/constants/site";
import { routes } from "@/lib/constants/routes";

const { experiences: exp } = siteImages;

const ctaStrip = [
  { src: exp.stadium, label: "Stadiums" },
  { src: exp.formula1, label: "Motorsport" },
  { src: exp.hospitality, label: "Hospitality" },
  { src: exp.destination, label: "Travel" },
] as const;

export function HomeFinalCTA() {
  return (
    <HomeFrame variant="plain">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] p-px">
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#d4a574_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] bg-white px-6 py-14 sm:px-12 text-center border border-orange-100">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange mb-4">
              next step
            </p>
            <h2 className="font-tech text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-dark mb-4">
              One Connection. Global Opportunity.
            </h2>
            <p className="text-brand-gray-text max-w-2xl mx-auto mb-8">
              Whether you supply event inventory or distribute experiences to
              customers, SeatsConnect provides the infrastructure to connect both
              sides. Connect supply. Expand distribution. Reach new markets.
            </p>
            <ExperienceStrip items={ctaStrip} className="max-w-3xl mx-auto mb-10 text-left" />
            <ButtonGroup className="justify-center">
              <Button href={routes.joinSupplier}>Connect Your Inventory</Button>
              <Button href={routes.joinPartner} variant="outline">
                Join Our Network
              </Button>
              <Button href={routes.contact} variant="ghost">
                Talk to Our Team
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}

export function HomeLoginNote() {
  return (
    <div className="section-band bg-brand-orange-light text-center pt-14 pb-8">
      <div className="pointer-events-none absolute inset-0 surface-grid" />
      <p className="relative z-10 text-sm text-brand-gray-text">
        Already a Partner?{" "}
        <a
          href={siteConfig.portalUrl}
          className="text-brand-orange font-semibold hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Login
        </a>
      </p>
    </div>
  );
}
