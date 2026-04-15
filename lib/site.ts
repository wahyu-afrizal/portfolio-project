const DEFAULT_SITE_URL = "http://127.0.0.1:3000";

export function getBaseUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    DEFAULT_SITE_URL;

  return siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
}
