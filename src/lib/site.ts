/**
 * The one public address of the site. Every canonical URL, hreflang link,
 * sitemap entry and structured-data URL is built from this, so they all agree.
 *
 * It must be the host visitors actually end up on. Set NEXT_PUBLIC_SITE_URL in
 * the hosting settings if the primary domain ever changes.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.chroniclesofinnovation.com').replace(/\/$/, '');

/** Dates used in the sitemap. Fixed, so crawlers only see a change when content really changes. */
export const CONTENT_UPDATED = {
  home: '2026-10-30',
  archive: '2026-10-30',
  timeline: '2026-10-30',
  about: '2026-11-27',
  legal: '2026-11-01',
};
