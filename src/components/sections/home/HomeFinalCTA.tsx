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
          <div className="pointer-events-none absolute -inset-20 home-border-spin opacity-70 bg-[conic-gradient(from_90deg,transparent_0%,#ff6b00_20%,transparent_40%)]" />
          <div className="relative rounded-[1.95rem] border border-orange-100 bg-white px-6 py-14 text-center sm:px-12">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-orange">
              next step
            </p>
            <h2 className="mb-4 font-tech text-3xl font-bold text-brand-dark sm:text-4xl lg:text-5xl">
              One Connection. Global Opportunity.
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-brand-gray-text">
              Whether you supply event inventory or distribute experiences to
              customers, SeatsConnect provides the infrastructure to connect both
              sides. Connect supply. Expand distribution. Reach new markets.
            </p>
            <ExperienceStrip
              items={ctaStrip}
              className="mx-auto mb-10 max-w-3xl text-left"
            />
            <ButtonGroup className="justify-center">
              <Button href={routes.joinSupplier}>Connect Your Inventory</Button>
              <Button href={routes.joinPartner} variant="outline">
                Join Our Network
              </Button>
              <Button href={routes.contact} variant="ghost">
                Talk to Our Team
              </Button>
            </ButtonGroup>
            <p className="mt-8 text-sm text-brand-gray-text">
              Already a Partner?{" "}
              <a
                href={siteConfig.portalUrl}
                className="font-semibold text-brand-orange hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </Reveal>
    </HomeFrame>
  );
}
