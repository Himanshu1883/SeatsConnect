import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Hotels & Hospitality — SeatsConnect™",
  description:
    "Extend the guest experience beyond the hotel through one B2B platform.",
};

export default function HotelsSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        eyebrow: "Hotels & Hospitality",
        title: "Extend the Guest Experience",
        titleAccent: "Beyond the Hotel.",
        description:
          "Give your concierge and guest-service teams access to global events through one B2B platform. SeatsConnect helps hotels respond to guest requests for tickets, hospitality and live experiences.",
        cta: { label: "Talk to Our Team", href: routes.contact },
        secondaryCta: { label: "Join Our Network", href: routes.joinPartner },
        image: siteImages.pages.hotels,
      }}
      sections={[
        {
          title: "Help Guests Experience More.",
          description: "Guests often rely on hotels for access to:",
          items: [
            "Sporting events",
            "Concerts",
            "Premium hospitality",
            "Shows",
            "Major local events",
            "International events",
          ],
          closing:
            "SeatsConnect provides a professional route for sourcing suitable products.",
        },
        {
          title: "Simple for Your Team.",
          description: "One connected workflow for guest requirements.",
          horizontalFlow: ["SEARCH", "QUOTE", "CONFIRM", "MANAGE", "FULFIL"],
          console: {
            title: "hotel-concierge",
            lines: [
              { text: "GUEST REQUEST", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "SEARCH · QUOTE · CONFIRM", type: "accent" },
              { text: "↓", type: "arrow" },
              { text: "MANAGE · FULFIL", type: "accent" },
            ],
          },
        },
      ]}
      finalCta={{
        title: "Extend the Guest Experience.",
        primaryCta: { label: "Talk to Our Team", href: routes.contact },
        secondaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
      }}
    />
  );
}
