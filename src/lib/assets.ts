// Media pointers use host-relative "/__l5e/..." paths that only Lovable hosting serves.
// Prefix them with the Lovable origin so the site also works on other hosts (e.g. Netlify).
const ASSET_ORIGIN = "https://ai-cozy-nest.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/") ? `${ASSET_ORIGIN}${asset.url}` : asset.url;
}
