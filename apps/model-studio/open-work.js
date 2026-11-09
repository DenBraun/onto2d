/**
 * What an ontology does not know yet, computed from its causes and arising facts. Nothing here is
 * stored in the release as a list: every count follows from the records themselves.
 */

const STATUS_ORDER = Object.freeze(["established", "well-supported", "hypothesized", "speculative", "methodological-placeholder"]);

/** A cause cites evidence when a published finding or a specified model stands behind it. */
export function citesEvidence(edge) {
  return edge?.status === "supported" || edge?.status === "model-supported";
}

/** Items in groups, in the order the keys are compared; each group keeps its items' order. */
function grouped(entries, compareKeys) {
  const groups = new Map();
  for (const [key, item] of entries) {
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
  }
  return [...groups].map(([key, items]) => ({ key, items })).sort((left, right) => compareKeys(left, right));
}

const statusRank = (status) => {
  const rank = STATUS_ORDER.indexOf(status);
  return rank === -1 ? STATUS_ORDER.length : rank;
};

/**
 * The evidence by level and the four sections of open work.
 * `level` and `domain` narrow everything by the arising a record belongs to (a cause belongs to its
 * dependent). The bars keep every level so that they do not jump: only `domain` narrows them.
 */
export function openWork({ arisings, causesOf, factsOf, level = null, domain = null, compareCauses = null }) {
  const levelTotals = new Map();
  const causes = [];
  const categories = [];
  const unsupported = [];
  const obligations = [];
  const owners = new Set();
  let slotCount = 0;
  let supported = 0;
  let total = 0;
  for (const arising of arisings) {
    const edges = causesOf(arising.id) ?? [];
    const cited = edges.filter(citesEvidence).length;
    const inDomain = domain === null || arising.domain === domain;
    if (!levelTotals.has(arising.level)) levelTotals.set(arising.level, { level: arising.level, supported: 0, total: 0 });
    if (inDomain) {
      levelTotals.get(arising.level).supported += cited;
      levelTotals.get(arising.level).total += edges.length;
    }
    if (!inDomain || (level !== null && arising.level !== level)) continue;
    supported += cited;
    total += edges.length;
    const open = edges.filter((edge) => !citesEvidence(edge));
    for (const edge of compareCauses ? [...open].sort(compareCauses) : open) causes.push([arising.level, edge]);
    const facts = factsOf(arising.id);
    if (facts?.openSlots?.length) {
      categories.push([arising.level, { arising, slots: facts.openSlots }]);
      slotCount += facts.openSlots.length;
    }
    if (edges.length > 0 && cited === 0) unsupported.push([arising.scientificStatus, { arising, supported: cited, total: edges.length }]);
    for (const text of facts?.openObligations ?? []) {
      obligations.push([text, arising]);
      owners.add(arising.id);
    }
  }
  const byKey = (left, right) => left.key - right.key;
  return {
    evidence: { supported, total, levels: [...levelTotals.values()].sort((left, right) => left.level - right.level) },
    counts: { causes: causes.length, categories: slotCount, categoryArisings: categories.length, unsupported: unsupported.length, obligations: obligations.length, obligationArisings: owners.size },
    sections: {
      causes: grouped(causes, byKey),
      categories: grouped(categories, byKey),
      unsupported: grouped(unsupported, (left, right) => statusRank(left.key) - statusRank(right.key)),
      obligations: grouped(obligations, (left, right) => right.items.length - left.items.length || String(left.key).localeCompare(String(right.key)))
    }
  };
}
