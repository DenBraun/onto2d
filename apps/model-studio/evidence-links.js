/** Links are optional presentation of declared evidence, never proof of support. */
export function citationLinks(citation, repositoryBase) {
  const source = citation?.source;
  if (!source || typeof source !== "object") return [];
  const links = [];
  if (typeof source.doi === "string" && /^10\.\d{4,9}\/\S+$/.test(source.doi)) {
    const url = new URL("https://doi.org/");
    url.pathname = `/${source.doi}`;
    links.push({ label: `DOI ${source.doi}`, href: url.href });
  }
  if (typeof source.url === "string") {
    try {
      const url = new URL(source.url);
      if (url.protocol === "https:" && !url.username && !url.password
          && !links.some((link) => link.href === url.href)) {
        links.push({ label: "Publication / source", href: url.href });
      }
    } catch { /* An invalid optional link leaves the declared text visible. */ }
  }
  if (typeof source.path === "string"
      && /^(?:references|models|cases)\/[\p{L}\p{N}_./-]+$/u.test(source.path)
      && !source.path.split("/").some((part) => part === ".." || part === "." || part === "")) {
    const url = new URL(source.path, repositoryBase);
    links.push({ label: "Repository copy", href: url.href });
  }
  return links;
}
