import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Check,
  Globe2,
  Layers,
  Network,
  ShieldCheck,
  X,
} from "lucide-react";
import { HomeFrame, HomeKicker } from "@/components/sections/home/HomeFrame";
import { Button, ButtonGroup } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

const { experiences: exp, pages } = siteImages;

const pillars: {
  index: string;
  title: string;
  text: string;
  icon: LucideIcon;
}[] = [
  {
    index: "01",
    title: "Global supply",
    text: "Venues, promoters, hospitality providers and approved suppliers connect inventory once — tickets, hospitality and allocations, through API, feed or supported integration.",
    icon: Globe2,
  },
  {
    index: "02",
    title: "Controlled access",
    text: "Inventory is structured by channels, markets, partner groups and commercial terms. Who can sell, where it goes, and on what terms stays with the supplier.",
    icon: ShieldCheck,
  },
  {
    index: "03",
    title: "Professional demand",
    text: "Travel, concierge, corporate, hotel and sports-travel businesses reach that inventory through the platform or API — one relationship, not a separate stack per supplier.",
    icon: Network,
  },
];

const clarityIs = [
  {
    title: "Connectivity infrastructure",
    text: "One layer between both sides of distribution — inventory, availability and fulfilment in a single connection.",
  },
  {
    title: "Approved B2B only",
    text: "Partners are invited and activated against agreed rules. Access stays inside professional channels.",
  },
  {
    title: "Search → Quote → Book → Fulfil",
    text: "How inventory moves from supply to the partner’s customer — not a public checkout.",
  },
] as const;

const clarityNot = [
  { title: "Consumer marketplace", text: "Not a public place to browse or buy tickets." },
  { title: "Open resale platform", text: "Inventory is not opened to everyone." },
  { title: "Public ticket search", text: "Discovery stays inside approved partner access." },
] as const;

const workflow = [
  { title: "Search", text: "Find events and inventory through approved access." },
  { title: "Quote", text: "Build commercial quotes with pricing, seats and terms." },
  { title: "Book", text: "Confirm inventory against agreed commercial rules." },
  { title: "Fulfil", text: "Deliver through the connected supplier–partner workflow." },
] as const;

const collage = [
  { src: pages.platform, alt: "Live experiences", label: "Live experiences" },
  { src: exp.hospitality, alt: "Hospitality", label: "Hospitality" },
  { src: exp.destination, alt: "Travel", label: "Travel" },
] as const;

export function HomeWhatIs() {
  return (
    <HomeFrame id="what-it-is" tinted variant="plain">
      <div className="flex flex-col gap-6 lg:gap-7">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-8 xl:gap-10">
          <div className="flex min-w-0 flex-col gap-6 lg:gap-7">
            <Reveal>
              <HomeKicker>What SeatsConnect is</HomeKicker>
              <h2 className="mt-2.5 max-w-2xl font-tech text-3xl font-bold leading-[1.08] tracking-tight text-brand-dark sm:text-[2.35rem] lg:text-[2.55rem]">
                B2B distribution{" "}
                <span className="text-brand-orange">infrastructure</span> for
                tickets, hospitality and live experiences.
              </h2>
              <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-brand-gray-text">
                {siteConfig.description} {siteConfig.brandStatement} Professional
                supply to approved professional demand — one layer, not an open
                marketplace.
              </p>
            </Reveal>

            <Reveal delay={40}>
              <div className="overflow-hidden rounded-[1.45rem] border border-orange-100/90 bg-white shadow-[0_14px_36px_rgba(40,30,20,0.05)]">
                <div className="flex items-center gap-3 border-b border-orange-100/80 px-4 py-3 sm:px-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange text-white shadow-[0_8px_16px_rgba(255,107,0,0.28)]">
                    <Layers className="h-4 w-4" strokeWidth={1.8} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                      The layer
                    </p>
                    <p className="font-tech text-[13px] font-bold text-brand-dark">
                      {siteConfig.tagline}
                    </p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3">
                  {pillars.map((item, i) => (
                    <article
                      key={item.title}
                      className={cn(
                        "px-4 py-4 sm:px-5 sm:py-5",
                        i < pillars.length - 1 &&
                          "border-b border-orange-100/80 sm:border-b-0 sm:border-r"
                      )}
                    >
                      <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-brand-orange/75">
                        {item.index}
                      </p>
                      <h3 className="mt-1.5 flex items-center gap-2 font-tech text-[14.5px] font-bold text-brand-dark">
                        <item.icon
                          className="h-3.5 w-3.5 text-brand-orange"
                          strokeWidth={1.9}
                        />
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-brand-gray-text">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={50}>
            <EndCollage />
          </Reveal>
        </div>

        <Reveal delay={70}>
          <div className="grid overflow-hidden rounded-[1.45rem] border border-orange-100/90 bg-white shadow-[0_14px_36px_rgba(40,30,20,0.05)] sm:grid-cols-2">
            <div className="bg-gradient-to-br from-brand-orange/[0.07] via-white to-white p-4 sm:p-5 lg:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-orange text-white">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.6} />
                </span>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-orange">
                  Is
                </p>
              </div>
              <ul className="space-y-3">
                {clarityIs.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <Check
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-orange"
                      strokeWidth={2.6}
                    />
                    <div>
                      <p className="text-[13px] font-semibold leading-snug text-brand-dark">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t border-orange-100 bg-[#faf7f3]/80 p-4 sm:border-l sm:border-t-0 sm:p-5 lg:p-6">
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-dark/8 text-brand-gray-text">
                  <X className="h-3.5 w-3.5" strokeWidth={2.4} />
                </span>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gray-text">
                  Not
                </p>
              </div>
              <ul className="space-y-3">
                {clarityNot.map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5">
                    <X
                      className="mt-0.5 h-3.5 w-3.5 shrink-0 text-brand-gray-text/45"
                      strokeWidth={2.5}
                    />
                    <div>
                      <p className="text-[13px] font-semibold leading-snug text-brand-dark/70">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[12px] leading-snug text-brand-gray-text">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* <Reveal delay={95}>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
            {workflow.map((step, i) => (
              <div
                key={step.title}
                className="rounded-xl border border-orange-100/90 bg-white px-3 py-3 sm:px-4 sm:py-4"
              >
                <p className="font-mono text-[9px] font-semibold tracking-[0.16em] text-brand-orange/80">
                  0{i + 1} {step.title}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-brand-gray-text">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </Reveal> */}

        <Reveal delay={120}>
          <ButtonGroup>
            <Button href={routes.joinSupplier} className="rounded-full px-6">
              Connect Your Inventory
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href={routes.joinPartner} variant="outline">
              Join Our Network
            </Button>
            <Button href={routes.contact} variant="ghost">
              Talk to Our Team
            </Button>
          </ButtonGroup>
        </Reveal>
      </div>
    </HomeFrame>
  );
}

function EndCollage() {
  const [hero, mid, last] = collage;

  return (
    <div className="relative mx-auto w-full max-w-md lg:ml-auto lg:max-w-none">
      <div className="grid h-[20.5rem] grid-cols-2 grid-rows-2 gap-2.5 sm:h-[22rem] lg:h-[26rem] xl:h-[28rem]">
        <figure className="group relative col-span-1 row-span-2 overflow-hidden rounded-[1.35rem]">
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            sizes="(max-width: 1024px) 50vw, 22vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3.5 font-tech text-[12px] font-semibold text-white">
            <span
              aria-hidden
              className="h-3.5 w-0.5 shrink-0 rounded-full bg-brand-orange"
            />
            {hero.label}
          </figcaption>
        </figure>
        <figure className="group relative overflow-hidden rounded-[1.2rem]">
          <Image
            src={mid.src}
            alt={mid.alt}
            fill
            sizes="(max-width: 1024px) 45vw, 18vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 font-tech text-[11px] font-semibold text-white">
            <span
              aria-hidden
              className="h-3.5 w-0.5 shrink-0 rounded-full bg-brand-orange"
            />
            {mid.label}
          </figcaption>
        </figure>
        <figure className="group relative overflow-hidden rounded-[1.2rem]">
          <Image
            src={last.src}
            alt={last.alt}
            fill
            sizes="(max-width: 1024px) 45vw, 18vw"
            className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-brand-dark/65 via-transparent to-transparent"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-2 p-3 font-tech text-[11px] font-semibold text-white">
            <span
              aria-hidden
              className="h-3.5 w-0.5 shrink-0 rounded-full bg-brand-orange"
            />
            {last.label}
          </figcaption>
        </figure>
      </div>
      <p className="mt-3 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-brand-gray-text lg:text-center">
        Tickets · Hospitality · Live experiences
      </p>
    </div>
  );
}
