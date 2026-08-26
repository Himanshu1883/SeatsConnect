import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Sports Travel — SeatsConnect™",
  description:
    "Build complete sporting event experiences through one B2B connection.",
};

export default function SportsTravelSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        eyebrow: "Sports Travel",
        title: "Build Complete Sporting",
        titleAccent: "Event Experiences.",
        description:
          "Connect event tickets and hospitality with your existing sports travel operation. SeatsConnect gives sports travel businesses access to event inventory through one B2B connection.",
        cta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Talk to Our Team", href: routes.contact },
        image: siteImages.pages.sportsTravel,
      }}
      sections={[
        {
          title: "Event Supply for Your Travel Programmes.",
          description: "Potential categories include:",
          items: [
            "Football",
            "Formula 1",
            "Tennis",
            "Motorsport",
            "Boxing",
            "UFC",
            "Golf",
            "Major tournaments",
            "Premium hospitality",
          ],
        },
        {
          title: "Combine With Your Existing Services.",
          description:
            "SeatsConnect can provide the event inventory layer while your business manages:",
          items: [
            "Flights",
            "Hotels",
            "Transfers",
            "Tours",
            "Destination services",
            "Customer packages",
          ],
          console: {
            title: "sports-travel",
            lines: [
              { text: "EVENT INVENTORY", type: "accent" },
              { text: "+  FLIGHTS · HOTELS · TRANSFERS", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "COMPLETE SPORTING EXPERIENCE", type: "accent" },
            ],
          },
          closing: "Your travel product. Connected event supply.",
        },
      ]}
      finalCta={{
        title: "Build Complete Event Experiences.",
        primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Talk to Our Team", href: routes.contact },
      }}
    />
  );
}
