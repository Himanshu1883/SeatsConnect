import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Corporate & Events — SeatsConnect™",
  description:
    "Event access for corporate customers through one connected platform.",
};

export default function CorporateSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        title: "Event Access for Corporate Customers.",
        description:
          "Source tickets and hospitality for client entertainment, incentives and corporate events. SeatsConnect gives corporate travel and event businesses access to professional event supply through one connected platform.",
        cta: { label: "Join SeatsConnect", href: routes.joinPartner },
        image: siteImages.pages.corporate,
      }}
      sections={[
        {
          title: "Experiences That Build Relationships.",
          description: "Use SeatsConnect to support customer requirements including:",
          items: [
            "Client entertainment",
            "Incentive programmes",
            "Corporate hospitality",
            "Employee rewards",
            "Group attendance",
            "Business events",
            "Premium experiences",
          ],
        },
        {
          title: "From Requirement to Confirmed Booking.",
          description:
            "Search suitable options, prepare a customer proposal and manage confirmed orders through one professional workflow. For more complex requirements, partners can also submit bespoke requests.",
          horizontalFlow: ["SEARCH", "PROPOSAL", "BOOK", "MANAGE"],
          console: {
            title: "corporate-workflow",
            lines: [
              { text: "REQUIREMENT", type: "muted" },
              { text: "↓", type: "arrow" },
              { text: "SEARCH · PROPOSAL · BOOK", type: "accent" },
              { text: "↓", type: "arrow" },
              { text: "CONFIRMED BOOKING", type: "accent" },
            ],
          },
          cta: { label: "Submit a Corporate Request", href: routes.request },
        },
      ]}
      finalCta={{
        title: "Access Events for Corporate Customers.",
        primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Submit a Corporate Request", href: routes.request },
      }}
    />
  );
}
