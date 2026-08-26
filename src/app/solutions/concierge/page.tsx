import type { Metadata } from "next";
import { SolutionPageTemplate } from "@/components/pages/SolutionPageTemplate";
import { siteImages } from "@/lib/constants/images";
import { routes } from "@/lib/constants/routes";

export const metadata: Metadata = {
  title: "Concierge & Lifestyle — SeatsConnect™",
  description:
    "Global event access for your clients through one professional B2B connection.",
};

export default function ConciergeSolutionPage() {
  return (
    <SolutionPageTemplate
      hero={{
        eyebrow: "Concierge & Lifestyle",
        title: "Global Event Access for",
        titleAccent: "Your Clients.",
        description:
          "Respond faster to ticket and hospitality requests through one professional B2B connection. SeatsConnect helps concierge and lifestyle management businesses access global event supply for their clients.",
        cta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Talk to Our Team", href: routes.contact },
        image: siteImages.pages.concierge,
      }}
      sections={[
        {
          title: "Your Clients Ask. SeatsConnect Helps You Source.",
          description:
            "From football and Formula 1 to concerts, tennis and premium hospitality, client requirements can span multiple countries and event categories. SeatsConnect brings connected supply into one professional environment.",
        },
        {
          title: "Built Around the Concierge Workflow.",
          verticalFlow: [
            "Receive Request",
            "Search Options",
            "Create Proposal",
            "Confirm Booking",
            "Manage Fulfilment",
          ],
          console: {
            title: "concierge-workflow",
            lines: [
              { text: "01  RECEIVE_REQUEST", type: "muted" },
              { text: "02  SEARCH_OPTIONS", type: "accent" },
              { text: "03  CREATE_PROPOSAL", type: "muted" },
              { text: "04  CONFIRM_BOOKING", type: "accent" },
              { text: "05  MANAGE_FULFILMENT", type: "muted" },
            ],
          },
        },
        {
          title: "Your Client Relationship Stays With You.",
          description:
            "SeatsConnect supports your business behind the scenes. Where supported, customer quotations and experiences can be presented using your own business identity.",
          cta: { label: "Talk to Our Team", href: routes.contact },
        },
      ]}
      finalCta={{
        title: "Respond to More Client Requests.",
        primaryCta: { label: "Join SeatsConnect", href: routes.joinPartner },
        secondaryCta: { label: "Talk to Our Team", href: routes.contact },
      }}
    />
  );
}
