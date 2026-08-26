import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Travel & Tour Operators — SeatsConnect™",
  description:
    "Add global events to your travel offering through one B2B connection.",
};

export default function TravelSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        title: "Add Global Events to Your Travel Offering.",
        description:
          "Give your customers access to tickets and hospitality alongside flights, hotels and travel services. SeatsConnect gives travel agencies and tour operators one B2B connection to event inventory across multiple markets.",
        cta: { label: "Join SeatsConnect", href: routes.joinPartner },
        image: siteImages.pages.travel,
      }}
      sections={[
        {
          title: "Turn Events Into Complete Travel Experiences.",
          description:
            "Your customers often travel because of the event. SeatsConnect allows travel businesses to complement existing services with access to sporting events, entertainment and hospitality. Potential combinations include:",
          items: [
            "Tickets + Flights",
            "Tickets + Hotels",
            "Tickets + Transfers",
            "Tickets + Hospitality",
            "Complete Travel Packages",
          ],
        },
        {
          title: "One Event Supply Connection.",
          description:
            "Reduce the need to maintain separate supplier relationships across different events and markets. SeatsConnect provides one professional infrastructure layer for accessing suitable ticket and hospitality products.",
          console: {
            title: "travel-supply",
            lines: [
              { text: "MULTIPLE EVENTS / MARKETS", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "SeatsConnect™", type: "accent" },
              { text: "One B2B connection", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "TRAVEL AGENCY / TOUR OPERATOR", type: "accent" },
            ],
          },
        },
        {
          title: "Built for B2B Travel Sales.",
          description:
            "Search inventory, build customer quotations, confirm products and manage orders through one connected environment.",
          horizontalFlow: ["SEARCH", "QUOTE", "BOOK", "MANAGE"],
          cta: { label: "Book a Demo", href: routes.contact },
        },
      ]}
      finalCta={{
        title: "Add Events to Your Travel Offering.",
        primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Book a Demo", href: routes.contact },
      }}
    />
  );
}
