/**
 * What the compact browse graph carries about each arising, and the part of the arising vocabulary
 * that names its numbers: a reader sees "Cell" and "Neuroscience", never 8 and 5.
 */

const integers = (value) => (Array.isArray(value) ? value.filter((entry) => Number.isSafeInteger(entry)) : []);
const texts = (value) => (Array.isArray(value) ? value.filter((entry) => typeof entry === "string" && entry.length > 0) : []);

/** `{ [arisingId]: { disciplines, evidenceCoverage, openSlots, openObligations } }`, leaving out whatever is empty. */
export function arisingFactsFromNodes(nodes, layer) {
  const entries = [];
  if (typeof layer !== "string" || layer.length === 0) return {};
  for (const node of nodes) {
    if (node.layer !== layer) continue;
    const disciplines = integers(node.disciplines);
    const openSlots = integers(node.completeness?.openSlots);
    const openObligations = texts(node.openObligations);
    const fact = {
      ...(disciplines.length ? { disciplines } : {}),
      ...(typeof node.evidenceCoverage === "string" && node.evidenceCoverage.length > 0 ? { evidenceCoverage: node.evidenceCoverage } : {}),
      ...(openSlots.length ? { openSlots } : {}),
      ...(openObligations.length ? { openObligations } : {})
    };
    if (Object.keys(fact).length > 0) entries.push([node.id, fact]);
  }
  return Object.fromEntries(entries);
}

const definitionOf = (entry) => (typeof entry.Definition === "string" ? entry.Definition : null);

function terms(entries) {
  return (entries ?? []).map((entry) => ({ value: entry.Id, name: entry.Name, definition: definitionOf(entry) }));
}

/** The vocabulary as the Studio reads it: every carrier group and type, and only the disciplines in use. */
export function vocabularyProjection(vocabulary, usedDisciplineIds) {
  const used = new Set(usedDisciplineIds);
  return {
    carrierGroups: (vocabulary.carrierGroups ?? []).map((entry) => ({ value: entry.Id, name: entry.Name, definition: definitionOf(entry) })),
    carrierTypes: (vocabulary.carrierTypes ?? []).map((entry) => ({ value: entry.Id, name: entry.Name, group: entry.GroupId, definition: definitionOf(entry) })),
    disciplines: (vocabulary.disciplines ?? []).filter((entry) => used.has(entry.Id))
      .map((entry) => ({ value: entry.Id, name: entry.Name, type: entry.Type, definition: definitionOf(entry) })),
    typeRoles: terms(vocabulary.typeRoles),
    phases: terms(vocabulary.levelPhases),
    dependencyTypes: terms(vocabulary.dependencyTypes),
    causalDirections: terms(vocabulary.causalDirections),
    interactionModes: terms(vocabulary.interactionModes)
  };
}

/** What the vocabulary says a declared value means; null when it does not say. */
export function termDefinition(entries, value) {
  return entries?.find((entry) => entry.value === value)?.definition ?? null;
}

/** The definitions of several declared values, each under its name. Empty when the vocabulary defines none of them. */
export function termDefinitions(entries, values) {
  return (Array.isArray(values) ? values : []).map((value) => entries?.find((entry) => entry.value === value))
    .filter((entry) => entry?.definition).map((entry) => `${entry.name}: ${entry.definition}`).join("\n");
}

/** What an arising's type means: a node names it in lowercase, the vocabulary by its name. Technical record kinds are not in the vocabulary. */
export function typeRoleDefinition(vocabulary, typeRole) {
  return vocabulary?.typeRoles?.find((entry) => entry.name.toLowerCase() === typeRole)?.definition ?? null;
}

/** The discipline ids a set of facts mentions, in ascending order. */
export function factDisciplineIds(facts) {
  return [...new Set(Object.values(facts).flatMap((fact) => fact.disciplines ?? []))].sort((left, right) => left - right);
}

/** The disciplines arisings carry, by name, each with how many arisings it describes. A discipline the vocabulary cannot name is left out. */
export function usedDisciplines(facts, vocabulary) {
  const counts = new Map();
  for (const fact of Object.values(facts ?? {})) {
    for (const value of fact.disciplines ?? []) counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return (vocabulary?.disciplines ?? []).filter((entry) => counts.has(entry.value))
    .map((entry) => ({ ...entry, count: counts.get(entry.value) }))
    .sort((left, right) => (left.name < right.name ? -1 : left.name > right.name ? 1 : 0));
}

/** A cause's carrier by name, with its definitions; null when the release declares none or nothing can name it. A number alone never shows. */
export function carrierReading(carrier, vocabulary) {
  if (!carrier || !vocabulary) return null;
  const group = vocabulary.carrierGroups.find((entry) => entry.value === carrier.group);
  const type = vocabulary.carrierTypes.find((entry) => entry.value === carrier.type);
  const named = [group, type].filter(Boolean);
  if (named.length === 0) return null;
  return {
    label: named.map((entry) => entry.name).join(" \u00b7 "),
    definition: named.filter((entry) => entry.definition).map((entry) => `${entry.name}: ${entry.definition}`).join("\n")
  };
}
