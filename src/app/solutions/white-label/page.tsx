import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "White Label — SeatsConnect™",
  description: "Global event supply. Your customer experience.",
};

export default function WhiteLabelSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        title: "Global Event Supply. Your Customer Experience.",
        description:
          "Connect SeatsConnect inventory and booking infrastructure into your own brand. SeatsConnect supports approved partners that want event products integrated directly into their existing customer environment.",
        cta: { label: "Discuss White Label", href: routes.contact },
        image: siteImages.pages.whiteLabel,
      }}
      sections={[
        {
          title: "Your Brand. Our Infrastructure.",
          description:
            "White-label solutions can allow approved partners to provide an event discovery and booking experience under their own brand. Potential implementations include:",
          items: [
            "Branded event website",
            "Integrated search",
            "Customer portal",
            "Embedded inventory",
            "Mobile application",
            "Custom booking journey",
          ],
        },
        {
          title: "Built Around Your Business.",
          description:
            "Rather than forcing customers to leave your ecosystem, SeatsConnect can provide the infrastructure behind your own customer experience.",
          closing: "Your customer. Your brand. Connected global supply.",
        },
        {
          title: "API Powered.",
          description:
            "White-label solutions can be supported by SeatsConnect API infrastructure for event data, inventory, pricing, bookings and fulfilment information.",
          console: {
            title: "white-label-api",
            lines: [
              { text: "PARTNER BRAND", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "SeatsConnect API", type: "accent" },
              { text: "events · inventory · pricing", type: "muted" },
              { text: "bookings · fulfilment", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "CUSTOMER EXPERIENCE", type: "accent" },
            ],
          },
          cta: { label: "Talk to Our Integration Team", href: routes.contact },
        },
      ]}
      finalCta={{
        title: "Global Supply. Your Customer Experience.",
        primaryCta: { label: "Discuss White Label", href: routes.contact },
        secondaryCta: { label: "Explore API", href: routes.api },
      }}
    />
  );
}
