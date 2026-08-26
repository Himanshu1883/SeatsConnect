import type { MetadataRoute } from "next";
import { routes } from "@/lib/constants/routes";
import { siteConfig } from "@/lib/constants/site";
import { topicPages } from "@/lib/constants/topics";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticPaths = [
    routes.home,
    routes.platform,
    routes.suppliers,
    routes.partners,
    routes.solutions,
    routes.solutionsTravel,
    routes.solutionsConcierge,
    routes.solutionsCorporate,
    routes.solutionsHotels,
    routes.solutionsSportsTravel,
    routes.solutionsWhiteLabel,
    routes.api,
    routes.about,
    routes.join,
    routes.joinSupplier,
    routes.joinPartner,
    routes.contact,
    routes.request,
    routes.developers,
    routes.support,
    routes.resources,
    routes.login,
    routes.topics,
    routes.terms,
    routes.privacy,
    routes.cookies,
    routes.compliance,
  ];

  return [
    ...staticPaths.map((path) => ({
      url: `${siteConfig.url}${path === "/" ? "" : path}`,
      lastModified,
    })),
    ...topicPages.map((topic) => ({
      url: `${siteConfig.url}${routes.topics}/${topic.slug}`,
      lastModified,
    })),
  ];
}
