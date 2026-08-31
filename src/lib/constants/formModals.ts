import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";

export type FormModalKind =
  | "join"
  | "joinSupplier"
  | "joinPartner"
  | "contact"
  | "request"
  | "developers"
  | "login";

export type FormModalTarget = {
  kind: FormModalKind;
  params: Record<string, string>;
};

export type FormModalRelatedLink = {
  label: string;
  href: string;
  external?: boolean;
};

export const formModalCopy: Record<
  FormModalKind,
  {
    eyebrow: string;
    title: string;
    description: string;
    size: "wide" | "form" | "narrow";
    pageHref: string;
    pageLabel: string;
    related: FormModalRelatedLink[];
    aside: string;
    asideCta: string;
    asideHref: string;
  }
> = {
  join: {
    eyebrow: "Join the network",
    title: "How do you want to connect?",
    description: `${siteConfig.brandStatement} Choose the option that best describes your business.`,
    size: "wide",
    pageHref: routes.join,
    pageLabel: "View Join page",
    related: [
      { label: "For Suppliers", href: routes.suppliers },
      { label: "For Partners", href: routes.partners },
    ],
    aside: "Not sure which path fits?",
    asideCta: "Talk to Our Team",
    asideHref: routes.contact,
  },
  joinSupplier: {
    eyebrow: "Supply partners",
    title: "Connect Your Inventory.",
    description:
      "Share a few details. Our supply team will review and get in touch.",
    size: "form",
    pageHref: routes.joinSupplier,
    pageLabel: "View supply page",
    related: [
      { label: "For Suppliers", href: routes.suppliers },
      { label: "Join SeatsConnect", href: routes.join },
    ],
    aside: "Already working with us?",
    asideCta: "Contact our team",
    asideHref: routes.contact,
  },
  joinPartner: {
    eyebrow: "Distribution partners",
    title: "Join Our Network.",
    description:
      "Share a few details so we can understand your business and access needs.",
    size: "form",
    pageHref: routes.joinPartner,
    pageLabel: "View partner page",
    related: [
      { label: "For Partners", href: routes.partners },
      { label: "Join SeatsConnect", href: routes.join },
    ],
    aside: "Already a partner?",
    asideCta: "Contact our team",
    asideHref: routes.contact,
  },
  contact: {
    eyebrow: "Contact",
    title: "Talk to Our Team.",
    description: "Tell us how you want to work with SeatsConnect.",
    size: "form",
    pageHref: routes.contact,
    pageLabel: "View contact page",
    related: [
      { label: "Support", href: routes.support },
      { label: "Join SeatsConnect", href: routes.join },
    ],
    aside: "Need help first?",
    asideCta: "Visit Support",
    asideHref: routes.support,
  },
  request: {
    eyebrow: "Partner requests",
    title: "Submit a Request.",
    description:
      "Ask the partner team for selected group, hospitality or complex requirements.",
    size: "form",
    pageHref: routes.request,
    pageLabel: "View request page",
    related: [
      { label: "For Partners", href: routes.partners },
      { label: "Contact", href: routes.contact },
    ],
    aside: "Need something else?",
    asideCta: "Contact our team",
    asideHref: routes.contact,
  },
  developers: {
    eyebrow: "Developers",
    title: "Request Developer Access.",
    description:
      "Tell us what you want to connect. Our integration team will follow up.",
    size: "form",
    pageHref: routes.developers,
    pageLabel: "View developers page",
    related: [
      { label: "API Overview", href: routes.api },
      { label: "Contact", href: routes.contact },
    ],
    aside: "Need an overview first?",
    asideCta: "View API",
    asideHref: routes.api,
  },
  login: {
    eyebrow: "Partner login",
    title: "Welcome Back.",
    description:
      "Access your SeatsConnect account for live inventory, quotations, bookings and order management.",
    size: "narrow",
    pageHref: routes.login,
    pageLabel: "View login page",
    related: [
      { label: "Support", href: routes.support },
      { label: "Go to platform", href: siteConfig.portalUrl, external: true },
    ],
    aside: "Need help signing in?",
    asideCta: "Visit Support",
    asideHref: routes.support,
  },
};

export const FORM_MODAL_PAGE_SKIP_KEY = "seatsconnect:form-page";
export const FORM_MODAL_OPEN_EVENT = "seatsconnect:open-form-modal";

const pathKinds: Array<[string, FormModalKind]> = [
  [routes.joinSupplier, "joinSupplier"],
  [routes.joinPartner, "joinPartner"],
  [routes.join, "join"],
  [routes.contact, "contact"],
  [routes.request, "request"],
  [routes.login, "login"],
];

export function matchFormModalPath(pathname: string): FormModalKind | null {
  const path = pathname.replace(/\/$/, "") || "/";
  for (const [route, kind] of pathKinds) {
    if (path === route) return kind;
  }
  return null;
}

export function parseFormModalUrl(
  href: string,
  currentHref: string
): FormModalTarget | null {
  let url: URL;
  try {
    url = new URL(href, currentHref);
  } catch {
    return null;
  }

  if (url.origin !== new URL(currentHref).origin) return null;

  if (url.hash === "#access") {
    return { kind: "developers", params: {} };
  }

  const kind = matchFormModalPath(url.pathname);
  if (!kind) return null;

  const params: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    if (value) params[key] = value;
  });
  return { kind, params };
}
