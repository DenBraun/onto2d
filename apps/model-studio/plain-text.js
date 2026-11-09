/**
 * Release text speaks the graph's bookkeeping: cell codes, study keys, slugs and check names.
 * Readers get names and words; the raw record, the URL and search keep the originals.
 */

const WORD_FORMS = new Map(Object.entries({
  a5: "A5", a7: "A7", arxiv: "arXiv", cx36: "Cx36", esm: "ESM", europe: "Europe", f8: "F8", frap: "FRAP",
  html: "HTML", krb: "KRb", l0: "Level 0", mea: "MEA", mef: "MEF", nih: "NIH", nist: "NIST", ocr: "OCR",
  pdf: "PDF", pmc: "PMC", rnai: "RNAi", s3: "S3", si: "SI", star: "STAR", stark: "Stark", t: "T", xml: "XML",
  // Abbreviations, proper names and joined words of study keys.
  atm: "ATM", atoh1: "Atoh1", bmdm: "BMDM", cd14: "CD14", cdk5rap2: "CDK5RAP2", cmv: "CMV", crh: "CRH", cyberball: "Cyberball",
  d1: "D1", day28: "day 28", democratic: "Democratic", erg: "ERG", exvivo: "ex vivo", factchecked: "fact-checked",
  framingham: "Framingham", germfree: "germ-free", gh: "GH", isc: "ISC", lcmv: "LCMV", lox: "LOX", lps: "LPS", maoa: "MAOA",
  mhc: "MHC", msc: "MSC", neu: "Neu", nlrp3: "NLRP3", paneth: "Paneth", phase2b: "phase 2b", phase3: "phase 3", plk: "PLK",
  reexposure: "re-exposure", reexposures: "re-exposures", reexpression: "re-expression", republican: "Republican",
  sfo: "SFO", thp: "THP-1", tnf: "TNF", umps: "UMPS", wnt: "Wnt", xct: "xCT",
  // Two parts of a slug that are one term.
  "acth-cort": "ACTH and corticosterone", "anti-tnf": "anti-TNF", "cell-free": "cell-free", "cell-mediated": "cell-mediated",
  "chapel-hill": "Chapel Hill", "crypt-derived": "crypt-derived", "east-london": "East London", "fixed-group": "fixed-group",
  "on-blockade": "On-pathway blockade", "resolvin-nprm": "resolvin-NPRM", "sanction-only": "sanction-only",
  "single-founder": "single-founder", "three-person": "three-person"
}));
// Whose study a record key opens with, where the key folds or shortens the name, and the leads a project key names without a year.
const STUDY_LEADS = new Map(Object.entries({
  alpert: "Alpert", arnold: "Arnold", baker: "Baker", camell: "Camell", cani: "Cani", cantos: "CANTOS", cinti: "Cinti", furman: "Furman",
  mandel: "Mandelblat-Cerf", mannick: "Mannick", mccombs: "McCombs", munoz: "Mu\u00f1oz-Planillo", pinter: "Pinter-Wollman", rivlin: "Rivlin-Etzion",
  schwab: "Schwab", thevar: "Thevaranjan", vandenbrink: "van den Brink", wang: "Wang", weisberg: "Weisberg", xu: "Xu"
}));
// Project prefixes of record keys: they mean nothing to a reader.
const PROJECT_PREFIXES = new Set(["orginfl"]);
const SLUG = /^[a-z0-9]+(?:-[A-Za-z0-9]+)+$/;
// Two numbers in a slug are a range, as in pages-1-7. Three or more short ones can only be a section number; a date opens with its year.
const SECTION_NUMBER = /(?<![^-])\d{1,3}(?:-\d{1,3}){2,}(?![^-])/g;
const YEAR = "(?:1[5-9]|20)\\d{2}";
// A lowercase author glued to a year, as study and source keys are written. A file name is not a key.
const STUDY_KEY = new RegExp(`(?<![\\w./:-])([a-z]{2,})(?:-([a-z]+))?(${YEAR})((?:-[a-z0-9]+)*)(?![\\w/-]|\\.\\w)`, "g");
const PUBLICATION_CLAIM = new RegExp(`\\bP-([a-z]+)(${YEAR})\\b`, "g");
const DOMAIN_CLAIM = /\bC-(?:bio|cell|cog|org|phys|soc)-([a-z0-9]+(?:-[a-z0-9]+)*)/g;
const PROTOCOL = /\bcomparison protocol ([a-z0-9]+(?:-[a-z0-9]+)+)/g;
const RECORD_KEY = /^([a-z][a-z0-9]*(?:-[a-z0-9]+)*)(?:: (.+))?$/s;
const DATED_LEAD = new RegExp(`^([a-z]{2,})(${YEAR})$`);
const RECORD_ID = /(?<![\w:/.-])[a-z][a-z0-9]*:[a-z0-9][a-z0-9-]*[a-z0-9](?![\w/-]|:[\w/])/g;

function capitalized(text) {
  return text.startsWith("arXiv") ? text : text.charAt(0).toUpperCase() + text.slice(1);
}

/** "selected-full-text-passages" -> "selected full text passages"; "pages-1-7" -> "pages 1-7"; "section-14-5-1" -> "section 14.5.1"; "grimes-mouse-0p5" -> "grimes mouse 0.5"; "three-person-trial" -> "three-person trial". */
export function slugWords(slug) {
  const parts = String(slug).replace(SECTION_NUMBER, (numbers) => numbers.replaceAll("-", ".")).split("-");
  let text = "";
  for (let index = 0; index < parts.length; index += 1) {
    const term = WORD_FORMS.get(`${parts[index]}-${parts[index + 1]}`);
    if (index > 0) text += /\d/.test(parts[index - 1]) && /\d/.test(parts[index]) ? "-" : " ";
    text += term ?? WORD_FORMS.get(parts[index]) ?? parts[index].replace(/^(\d+)p(\d+)$/, "$1.$2");
    if (term) index += 1;
  }
  return text;
}

/** A value written as slugs reads as words: "full-article; supplement-unread" -> "Full article; supplement unread". Prose stays as it is. */
export function plainSlug(value) {
  if (typeof value !== "string") return value;
  const parts = value.split("; ");
  if (!parts.some((part) => SLUG.test(part))) return value;
  const words = parts.map((part) => (SLUG.test(part) ? slugWords(part) : part));
  words[0] = capitalized(words[0]);
  return words.join("; ");
}

/**
 * A record named by a study key reads as the study: "albring2012-four-reexposures: acquisition context" ->
 * "Albring 2012, four re-exposures: acquisition context"; "orginfl-aged-peritonitis: acquisition context" ->
 * "Aged peritonitis: acquisition context". Every other name stays exactly as declared.
 */
export function recordDisplayName(name) {
  if (typeof name !== "string") return name;
  const match = name.match(RECORD_KEY);
  if (!match) return name;
  const [head, ...rest] = match[1].split("-");
  const dated = head.match(DATED_LEAD);
  const prefixed = PROJECT_PREFIXES.has(head) && rest.length > 0;
  // A lowercase word or compound before a colon is not a key without a year or a known prefix.
  if (!dated && !prefixed) return name;
  const words = (parts) => (parts.length ? slugWords(parts.join("-")) : "");
  let study;
  if (dated) {
    study = [`${STUDY_LEADS.get(dated[1]) ?? capitalized(dated[1])} ${dated[2]}`, words(rest)].filter(Boolean).join(", ");
  } else {
    study = STUDY_LEADS.has(rest[0])
      ? [STUDY_LEADS.get(rest[0]), words(rest.slice(1))].filter(Boolean).join(", ")
      : capitalized(words(rest));
  }
  return match[2] ? `${study}: ${match[2]}` : study;
}

/** A record as the flat list searches and orders it: under the name a reader sees, with its declared name still findable. */
export function recordCatalogEntry(node) {
  const name = recordDisplayName(node.name);
  if (name === node.name) return node;
  return { ...node, name, shortDescription: [node.shortDescription, node.name, name.replaceAll(",", "")].filter(Boolean).join(" ") };
}

/** How much of a source was read, ready to end a sentence. */
export function readingExtent(value) {
  return typeof value === "string" ? plainSlug(value).replace(/\.$/, "") : value;
}

/** The internal review numbers its findings: "F12" reads as "Finding 12". A spreadsheet cell or a longer code is not a finding. */
function namedFindings(text) {
  return text
    .replace(/(?<![\w!:,./-])F(\d{2})\u2013F(\d{2})(?![\w:])/g, (match, first, last) => `Findings ${Number(first)} to ${Number(last)}`)
    .replace(/(?<![\w!:,./-])F(0[1-9]|1[0-2])(?![\w:])/g, (match, number) => `Finding ${Number(number)}`);
}

/** Where in a source a claim was read. Page numbers and spreadsheet ranges stay exact; check names and document pointers read as words. */
export function plainLocator(locator) {
  if (typeof locator !== "string") return locator;
  const pointer = locator.match(/^\/([a-z]+)(?:\/(\d+))?$/);
  if (pointer) {
    return pointer[2] === undefined ? capitalized(pointer[1]) : `${capitalized(pointer[1].replace(/s$/, ""))} ${Number(pointer[2]) + 1}`;
  }
  if (/^[a-z_]+\(\)$/.test(locator)) return capitalized(locator.slice(0, -2).replaceAll("_", " "));
  const checked = locator.replace(/^(?:[a-z_]+\(\)(?:, | and )?)+: /, "");
  if (SLUG.test(checked)) return capitalized(slugWords(checked));
  return namedFindings(checked === locator ? locator : capitalized(checked));
}

/** Release prose by names: `nameOf(id)` names a record, and whatever it cannot name stays as written. */
export function plainProse(text, nameOf = () => null) {
  if (typeof text !== "string") return text;
  return namedFindings(text)
    .replace(/\b([Cc])ause (\d+\.\d+) > (\d+\.\d+)\b/g, (match, initial, from, to) => {
      const source = nameOf(`arising:${from}`);
      const target = nameOf(`arising:${to}`);
      return source && target ? `${initial === "C" ? "The" : "the"} cause from ${source} to ${target}` : match;
    })
    .replace(/\b[Aa]rising (\d+\.\d+)\b/g, (match, code) => nameOf(`arising:${code}`) ?? match)
    .replace(RECORD_ID, (id) => nameOf(id) ?? id)
    .replace(PUBLICATION_CLAIM, (match, author, year) => `the ${capitalized(author)} ${year} claim`)
    .replace(DOMAIN_CLAIM, (match, rest) => `the ${slugWords(rest)} claim`)
    .replace(PROTOCOL, (match, key) => `comparison protocol ${capitalized(slugWords(key))}`)
    .replace(STUDY_KEY, (match, author, qualifier, year, rest) => [
      capitalized(author), qualifier, year, rest ? slugWords(rest.slice(1)) : null
    ].filter(Boolean).join(" "));
}

/** A failed request in words for a reader. The console keeps the original. */
export function plainFailure(error) {
  const code = typeof error?.code === "string" ? error.code : "";
  // A browser words its own refusal: Chromium "Failed to fetch", Firefox "NetworkError ...", Safari "Load failed".
  const connection = error?.name === "TypeError" && /fetch|network|load failed/i.test(error.message)
    || /_(FETCH|HTTP|STREAM)_FAILED$|^STUDIO_BROWSE_RESPONSE_INVALID$/.test(code);
  if (connection) return "The server could not be reached or did not send the data.";
  if (/^(MODEL_PACK|STUDIO_BROWSE)_/.test(code) && !code.startsWith("MODEL_PACK_WORKER_")) return "The data that arrived does not match this release.";
  return "Something went wrong while opening it.";
}
