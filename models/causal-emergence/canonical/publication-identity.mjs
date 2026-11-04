import path from "node:path";

/** Publication identity is distinct from a viewing mode or a cited page locator. */
export function publicationIdentity(value) {
  if (!value) return null;
  let url;
  try { url = new URL(value); } catch { return null; }
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); } catch { pathname = url.pathname; }
  pathname = path.posix.normalize(pathname).replace(/\/+$/, "");
  if (["doi.org", "dx.doi.org"].includes(url.hostname)) return `doi:${pathname.slice(1).toLowerCase()}`;
  if (url.hostname === "journals.plos.org") {
    const doi = url.searchParams.get("id");
    if (/^10\.\d{4,9}\/\S+$/i.test(doi ?? "")) return `doi:${doi.toLowerCase()}`;
  }
  if (["books.google.com", "books.google.co.uk"].includes(url.hostname) && pathname.startsWith("/books")) {
    const volume = url.searchParams.get("id");
    if (volume) return `google-books:${volume}`;
  }
  if (["pmc.ncbi.nlm.nih.gov", "www.ncbi.nlm.nih.gov", "ncbi.nlm.nih.gov", "europepmc.org", "www.europepmc.org"].includes(url.hostname)) {
    const pmcid = pathname.match(/\/(?:pmc\/)?articles\/(PMC\d+)(?:\/|$)/i)?.[1];
    if (pmcid) return `pmc:${pmcid.toUpperCase()}`;
  }
  // Other catalogues can select different works using resource query fields.
  // Ignore known tracking fields while preserving those resource identities.
  for (const key of [...url.searchParams.keys()]) if (/^utm_/i.test(key) || /^(fbclid|gclid|msclkid)$/i.test(key)) url.searchParams.delete(key);
  url.searchParams.sort();
  return `${url.host}${pathname}${url.searchParams.size ? `?${url.searchParams}` : ""}`;
}
