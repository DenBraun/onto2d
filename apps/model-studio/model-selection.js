function requireSelection(value, subject = "model selection") {
  if (
    value === null
    || typeof value !== "object"
    || Array.isArray(value)
    || typeof value.modelId !== "string"
    || value.modelId.length === 0
    || typeof value.version !== "string"
    || value.version.length === 0
  ) {
    throw new TypeError(`${subject} requires a modelId and version.`);
  }
  return value;
}

function requireEntries(entries) {
  if (!Array.isArray(entries) || entries.length === 0) {
    throw new TypeError("The verified model registry must contain at least one release.");
  }
  entries.forEach((entry, index) => requireSelection(entry, `registry entry ${index}`));
  return entries;
}

export function modelSelectionKey(selection) {
  const normalized = requireSelection(selection);
  return JSON.stringify([normalized.modelId, normalized.version]);
}

export function modelSelectionLabel(selection) {
  const normalized = requireSelection(selection);
  const name = normalized.modelId
    .split(/[-_.]+/u)
    .filter(Boolean)
    .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
    .join(" ");
  return `${name} - ${normalized.version}`;
}

export function registryEntryForKey(entries, key) {
  return requireEntries(entries).find((entry) => modelSelectionKey(entry) === key) ?? null;
}

export function requestedRegistryEntry(entries, parameters, preferredSelection = null) {
  const verifiedEntries = requireEntries(entries);
  if (!(parameters instanceof URLSearchParams)) {
    throw new TypeError("Model selection parameters must be URLSearchParams.");
  }
  const modelId = parameters.get("model");
  const version = parameters.get("version");
  if (preferredSelection !== null) requireSelection(preferredSelection, "preferred model selection");
  // A model is updated in place: an address with no version, or an earlier one, opens the release it has now.
  const ofModel = verifiedEntries.filter((entry) => entry.modelId === modelId);
  return ofModel.find((entry) => entry.version === version)
    ?? ofModel.find((entry) => entry.version === preferredSelection?.version)
    ?? ofModel.at(-1)
    ?? verifiedEntries.find((entry) => (
      entry.modelId === preferredSelection?.modelId && entry.version === preferredSelection?.version
    ))
    ?? verifiedEntries[0];
}

/** An address that names a model the registry does not hold: the default view opens instead, and the reader has to be told. An empty model parameter names nothing. */
export function namesUnknownModel(entries, parameters) {
  const modelId = parameters.get("model");
  return Boolean(modelId) && !requireEntries(entries).some((entry) => entry.modelId === modelId);
}

/** The name of a registered model is enough for its address. A version is written where it is not: a local import, or a model with several releases. */
export function addressNeedsVersion(entries, selection) {
  const normalized = requireSelection(selection);
  return requireEntries(entries).filter((entry) => entry.modelId === normalized.modelId).length !== 1;
}

export function requestedWorkspaceState(parameters, selection, hasNode, defaultFocusId) {
  if (!(parameters instanceof URLSearchParams)) {
    throw new TypeError("Workspace parameters must be URLSearchParams.");
  }
  const normalized = requireSelection(selection);
  if (typeof hasNode !== "function" || typeof defaultFocusId !== "string" || defaultFocusId === "") {
    throw new TypeError("Workspace selection requires a node predicate and default focus ID.");
  }
  const sameModel = parameters.get("model") === normalized.modelId;
  const candidate = sameModel ? parameters.get("node") : null;
  const depth = sameModel ? Number(parameters.get("depth")) : 1;
  const direction = sameModel ? parameters.get("direction") : "both";
  return Object.freeze({
    focusId: candidate && hasNode(candidate) ? candidate : defaultFocusId,
    depth: [1, 2, 3].includes(depth) ? depth : 1,
    direction: ["parents", "both", "children"].includes(direction) ? direction : "both"
  });
}
