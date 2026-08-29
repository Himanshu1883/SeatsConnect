import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LegalPage = {
  slug: "terms" | "privacy" | "cookies" | "compliance";
  href: string;
  eyebrow: string;
  title: string;
  titleAccent: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  reviewNotice: string;
  sections: LegalSection[];
};

export const legalReviewNotice =
  "This page is a public placeholder. Final legal wording will be provided or reviewed separately by legal and compliance before launch. Nothing here is a contract, licence, or statement of legal rights.";

export const legalPages: Record<LegalPage["slug"], LegalPage> = {
  terms: {
    slug: "terms",
    href: routes.terms,
    eyebrow: "Terms of Service",
    title: "Terms of",
    titleAccent: "Service.",
    description:
      "How SeatsConnect is described for professional use until counsel supplies the final Terms of Service.",
    metaTitle: "Terms of Service — SeatsConnect™",
    metaDescription:
      "Placeholder Terms of Service for SeatsConnect B2B distribution infrastructure. Final wording will be reviewed by legal and compliance before launch.",
    reviewNotice: legalReviewNotice,
    sections: [
      {
        heading: "About this page",
        paragraphs: [
          `${siteConfig.trademark} is ${siteConfig.description} It is part of ${siteConfig.parentBrand}.`,
          "This document outlines the public positioning of the marketing website and partner-facing product. It is not the executed agreement between SeatsConnect and a supplier or distribution partner.",
        ],
      },
      {
        heading: "Who these terms will apply to",
        paragraphs: [
          "When counsel publishes the final Terms of Service, they are expected to cover professional use of SeatsConnect by approved businesses — not consumer ticket purchases.",
        ],
        bullets: [
          "Visitors to this marketing website",
          "Approved suppliers connecting inventory",
          "Approved distribution partners accessing inventory",
          "Existing partners using the partner platform",
        ],
      },
      {
        heading: "What SeatsConnect is",
        paragraphs: [
          `${siteConfig.tagline} SeatsConnect provides an infrastructure layer that connects professional event supply with professional B2B demand.`,
        ],
        bullets: [
          "Supply: venues, promoters, hospitality providers and approved suppliers",
          "Demand: travel, concierge, corporate, hotel, sports-travel and white-label businesses",
          "Workflow described on this site: Search → Quote → Book → Fulfil",
          "Access for existing partners: the partner platform at the published Login destination",
        ],
      },
      {
        heading: "What SeatsConnect is not",
        paragraphs: [
          "Public copy on this site must stay consistent with product positioning. SeatsConnect is not described as a consumer marketplace, a resale platform, a broker, or SeatsBrokers.",
        ],
      },
      {
        heading: "Access and approval",
        paragraphs: [
          "Inventory is made available through approved professional channels. Suppliers apply to connect inventory. Distribution partners apply to join the network. Access, channels, markets, partner groups and commercial terms are subject to separate agreements that legal will define — they are not stated on this page.",
        ],
      },
      {
        heading: "Related pages",
        paragraphs: [
          `Questions about joining, the platform, API access or inventory requests should use the published routes on this website, or email ${siteConfig.email}.`,
        ],
      },
    ],
  },
  privacy: {
    slug: "privacy",
    href: routes.privacy,
    eyebrow: "Privacy Policy",
    title: "Privacy",
    titleAccent: "Policy.",
    description:
      "How this marketing site refers to personal information until counsel supplies the final Privacy Policy.",
    metaTitle: "Privacy Policy — SeatsConnect™",
    metaDescription:
      "Placeholder Privacy Policy for the SeatsConnect marketing website. Final wording will be reviewed by legal and compliance before launch.",
    reviewNotice: legalReviewNotice,
    sections: [
      {
        heading: "About this page",
        paragraphs: [
          `This Privacy Policy placeholder applies to the public website at ${siteConfig.url}. The partner platform is a separate surface at ${siteConfig.portalUrl}.`,
          "Final processing details, legal bases, retention periods and data-subject rights will be set by legal and compliance. This page does not invent those terms.",
        ],
      },
      {
        heading: "Who we are",
        paragraphs: [
          `${siteConfig.trademark} is part of ${siteConfig.parentBrand}. For privacy questions about this website, use ${siteConfig.email} or the Contact page.`,
        ],
      },
      {
        heading: "Information you may send through this website",
        paragraphs: [
          "This marketing site includes forms for professional enquiries. Those forms collect only what the visitor chooses to submit. Typical fields already published on the site include name, company, email, role and message, depending on the form.",
        ],
        bullets: [
          "Contact — Talk to Our Team",
          "Join as a supply partner — Connect Your Inventory",
          "Join as a distribution partner — Join Our Network",
          "Submit a Request — selected inventory or hospitality requirements from approved partners",
          "Developers — request API / developer access",
        ],
      },
      {
        heading: "Partner platform login",
        paragraphs: [
          "The public Login control sends existing partners to the SeatsConnect platform. Account credentials and platform activity are not described on this marketing site. The final Privacy Policy should treat the marketing site and the partner platform as distinct, if counsel so decides.",
        ],
      },
      {
        heading: "What this page does not claim",
        paragraphs: [
          "This placeholder does not list processors, cookies as a processing activity, international transfers, or retention schedules. Those belong in the reviewed Privacy Policy.",
        ],
      },
    ],
  },
  cookies: {
    slug: "cookies",
    href: routes.cookies,
    eyebrow: "Cookie Policy",
    title: "Cookie",
    titleAccent: "Policy.",
    description:
      "A placeholder for how cookies may be described on this marketing website until counsel supplies the final Cookie Policy.",
    metaTitle: "Cookie Policy — SeatsConnect™",
    metaDescription:
      "Placeholder Cookie Policy for seatsconnect.com. Final wording and cookie inventory will be reviewed by legal and compliance before launch.",
    reviewNotice: legalReviewNotice,
    sections: [
      {
        heading: "About this page",
        paragraphs: [
          `This Cookie Policy placeholder is for the public website ${siteConfig.url}. It does not list a live cookie inventory or claim a consent mechanism that has not been reviewed.`,
        ],
      },
      {
        heading: "What a reviewed Cookie Policy should cover",
        paragraphs: [
          "When legal and compliance publish the final policy, it should describe cookies and similar technologies actually used on this site at launch — not a generic industry list invented for marketing.",
        ],
        bullets: [
          "Which cookies are strictly needed for the site to function",
          "Whether analytics or similar tools are used, and on what basis",
          "How visitors can control cookies in their browser",
          "How this policy relates to the Privacy Policy",
        ],
      },
      {
        heading: "This website’s role",
        paragraphs: [
          "seatsconnect.com is the public marketing site for B2B distribution infrastructure. Login for existing partners is on the partner platform. Cookie use on the partner platform, if any, should be documented separately if counsel requires it.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `Until the reviewed Cookie Policy is published, questions can be sent via the Contact page or ${siteConfig.email}.`,
        ],
      },
    ],
  },
  compliance: {
    slug: "compliance",
    href: routes.compliance,
    eyebrow: "Compliance Standards",
    title: "Compliance",
    titleAccent: "Standards.",
    description:
      "How SeatsConnect talks about responsible B2B distribution until counsel supplies the final compliance documentation.",
    metaTitle: "Compliance Standards — SeatsConnect™",
    metaDescription:
      "Placeholder compliance overview for SeatsConnect. Final standards and certifications will be reviewed by legal and compliance before launch.",
    reviewNotice: legalReviewNotice,
    sections: [
      {
        heading: "About this page",
        paragraphs: [
          "This page records the compliance themes already used in public product copy. It does not claim certifications, licences, or audit results that have not been confirmed.",
        ],
      },
      {
        heading: "Professional B2B use",
        paragraphs: [
          "SeatsConnect is described as distribution infrastructure for approved professional businesses. It is not a consumer ticket marketplace, open resale platform, or public ticket search for fans.",
        ],
      },
      {
        heading: "Controlled distribution",
        paragraphs: [
          "Public copy states that suppliers keep control of who can sell, where inventory is made available, and on what commercial terms. Partners access inventory through approved relationships — not an open marketplace.",
        ],
        bullets: [
          "Approved suppliers and partners only",
          "Channels, markets and partner groups as agreed",
          "Search → Quote → Book → Fulfil as the published workflow language",
        ],
      },
      {
        heading: "Parent brand",
        paragraphs: [
          `${siteConfig.trademark} is part of ${siteConfig.parentBrand}, described on this site as a technology group focused on infrastructure and distribution for ticketing, travel and hospitality.`,
        ],
      },
      {
        heading: "What is not listed here",
        paragraphs: [
          "This placeholder does not name ISO, SOC, PCI or similar standards, country-specific licensing, or data-protection attestations. Those belong in reviewed compliance documentation if and when they apply.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          `For compliance questions before launch, use the Contact page or ${siteConfig.email}.`,
        ],
      },
    ],
  },
};

export const legalHubCards = [
  {
    slug: "terms" as const,
    title: "Terms of Service",
    href: routes.terms,
    text: "Professional use of SeatsConnect as B2B distribution infrastructure.",
  },
  {
    slug: "privacy" as const,
    title: "Privacy Policy",
    href: routes.privacy,
    text: "How this marketing website refers to information you submit.",
  },
  {
    slug: "cookies" as const,
    title: "Cookie Policy",
    href: routes.cookies,
    text: "Placeholder for cookies on seatsconnect.com until counsel reviews.",
  },
  {
    slug: "compliance" as const,
    title: "Compliance Standards",
    href: routes.compliance,
    text: "B2B, approved access and controlled distribution — not a marketplace.",
  },
] as const;
