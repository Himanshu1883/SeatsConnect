export const launchFlags = {
  /**
   * Display venue, league, supplier or partner logos.
   * Keep false until SeatsConnect has the commercial relationship
   * and permission to publish each logo.
   */
  partnerLogos: false,
  /**
   * Link out to the standalone developer portal.
   * Keep false until developers.seatsconnect.com is live.
   */
  developerPortal: false,
  /**
   * Temporary home-hero Dark/Light preview toggle for design approval.
   * Keep false while shipping Dark. Light hero code remains for later review.
   */
  heroThemePreview: false,
} as const;
