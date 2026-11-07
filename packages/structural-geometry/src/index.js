import {
  canonicalClone,
  canonicalize,
  deepFreeze,
  hashCanonical
} from "@onto2d/kernel/canonical";
import { EngineError } from "@onto2d/engine";
import { modelPackFilePaths, verifyModelPack } from "@onto2d/model-pack";
import { CANONICAL_ARISING_CAUSAL_POLICY, CANONICAL_RELATION_DIRECTED_POLICY, CANONICAL_TECHNICAL_DIRECTED_POLICY, SOURCE_PARENT_DIRECTED_POLICY, UNIT_METRIC_POLICY } from "./policies.js";
import { calculateDirectedUnitForman } from "./forman.js";
import { packFromEngineModel } from "./engine-model.js";

export { CANONICAL_ARISING_CAUSAL_POLICY, CANONICAL_RELATION_DIRECTED_POLICY, CANONICAL_TECHNICAL_DIRECTED_POLICY, SOURCE_PARENT_DIRECTED_POLICY, UNIT_METRIC_POLICY } from "./policies.js";

export const STRUCTURAL_GEOMETRY_ANALYSIS_ID = "structural-geometry";
export const STRUCTURAL_GEOMETRY_ANALYSIS_VERSION = "1";
export const STRUCTURAL_GEOMETRY_REQUEST_SCHEMA =
  "https://onto2d.dev/schemas/v1/structural-geometry-request.schema.json";
export const STRUCTURAL_GEOMETRY_ARTIFACT_SCHEMA =
  "https://onto2d.dev/schemas/v1/structural-geometry-artifact.schema.json";

const PROJECTION_POLICIES = new Map([SOURCE_PARENT_DIRECTED_POLICY, CANONICAL_RELATION_DIRECTED_POLICY, CANONICAL_ARISING_CAUSAL_POLICY, CANONICAL_TECHNICAL_DIRECTED_POLICY]
  .map((policy) => [policy.id, { policy, hash: hashCanonical("onto2d:structural-projection-policy:v1", policy) }]));
// Layered packs: each node layer has exactly one projection policy.
const LAYER_POLICY_IDS = new Map([...PROJECTION_POLICIES.values()].filter(({ policy }) => policy.nodeLayer).map(({ policy }) => [policy.nodeLayer, policy.id]));
const METRIC_POLICY_HASH = hashCanonical("onto2d:structural-metric-policy:v1", UNIT_METRIC_POLICY);
const PARAMETERS = Object.freeze({});
const PARAMETERS_HASH = hashCanonical("onto2d:structural-geometry-parameters:v1", PARAMETERS);

function fail(code, message, details = {}) {
  throw new EngineError(`STRUCTURAL_GEOMETRY_${code}`, message, details);
}

function normalizeRequest(input) {
  if (input === null || typeof input !== "object" || Array.isArray(input)) {
    fail("INPUT_INVALID", "The structural geometry request must be a plain object.");
  }
  const value = canonicalClone(input);
  const unknown = Object.keys(value).filter((key) => (
    !["projectionPolicyId", "metricPolicyId"].includes(key)
  ));
  if (unknown.length > 0) {
    fail("INPUT_INVALID", "The request contains unsupported fields.", { unknown });
  }
  if (Object.hasOwn(value, "projectionPolicyId") && !PROJECTION_POLICIES.has(value.projectionPolicyId)) {
    fail("POLICY_UNSUPPORTED", "The projection policy is unsupported.");
  }
  if (Object.hasOwn(value, "metricPolicyId") && value.metricPolicyId !== UNIT_METRIC_POLICY.id) {
    fail("POLICY_UNSUPPORTED", "The metric policy is unsupported.");
  }
  return value;
}

function attributes(record, fields) {
  return Object.fromEntries(fields
    .filter((field) => Object.hasOwn(record, field))
    .map((field) => [field, record[field]]));
}

function binding(manifest) {
  return {
    modelId: manifest.model.id,
    modelVersion: manifest.model.version,
    modelRootHash: manifest.rootHash,
    manifestHash: manifest.manifestHash
  };
}

function seal(body, field, domain) {
  return deepFreeze({ ...body, [field]: hashCanonical(domain, body) });
}

// Source-parent packs keep their original policy; canonical relation packs use the canonical policy;
// layered packs project their ontological layer of arisings unless a layer is requested.
function selectPolicy(sourceEdges, requestedId) {
  if (requestedId) return PROJECTION_POLICIES.get(requestedId);
  const layers = new Set(sourceEdges.map((edge) => edge.relationLayer));
  if (layers.has("causal")) return PROJECTION_POLICIES.get(CANONICAL_ARISING_CAUSAL_POLICY.id);
  const canonical = layers.size > 0 && [...layers].every((layer) => CANONICAL_RELATION_DIRECTED_POLICY.relationLayers.includes(layer));
  return PROJECTION_POLICIES.get(canonical ? CANONICAL_RELATION_DIRECTED_POLICY.id : SOURCE_PARENT_DIRECTED_POLICY.id);
}

function projectVerifiedPack(pack, request = {}) {
  const paths = modelPackFilePaths();
  const allNodes = pack.files[paths.nodes];
  const allEdges = pack.files[paths.edges];
  const { policy, hash: policyHash } = selectPolicy(allEdges, request.projectionPolicyId);
  const layers = policy.relationLayers ?? [policy.relationLayer];
  if (allNodes.length > policy.limits.maxNodes || allEdges.length > policy.limits.maxEdges) {
    fail("LIMIT_EXCEEDED", "The complete graph exceeds the projection count bounds.", {
      nodeCount: allNodes.length,
      edgeCount: allEdges.length,
      limits: policy.limits
    });
  }
  const layered = Object.hasOwn(policy, "nodeLayer");
  const sourceNodes = layered ? allNodes.filter((node) => node.layer === policy.nodeLayer) : allNodes;
  if (layered && allNodes.some((node) => !LAYER_POLICY_IDS.has(node.layer))) {
    fail("NODE_LAYER_UNSUPPORTED", "Every node of a layered pack must declare a known layer.", { policyId: policy.id, layers: [...LAYER_POLICY_IDS.keys()] });
  }
  const layerIds = new Set(sourceNodes.map((node) => node.id));
  const sourceEdges = layered ? allEdges.filter((edge) => !policy.excludedRelationLayers.includes(edge.relationLayer)) : allEdges;
  const pairs = new Map();
  for (const edge of sourceEdges) {
    if (layered && (!layerIds.has(edge.source) || !layerIds.has(edge.target))) {
      fail("LAYER_ENDPOINT_UNSUPPORTED", "A projected edge must join two nodes of the projected layer.", { edgeId: edge.id, policyId: policy.id });
    }
    if (!layers.includes(edge.relationLayer)) {
      fail("RELATION_LAYER_UNSUPPORTED", "Every projected edge must use a relation layer of the projection policy.", {
        edgeId: edge.id, policyId: policy.id
      });
    }
    if (edge.source === edge.target) {
      fail("SELF_LOOP_UNSUPPORTED", "The initial projection policy rejects self-loops.", {
        edgeId: edge.id
      });
    }
    if (!pairs.has(edge.source)) pairs.set(edge.source, new Set());
    const targets = pairs.get(edge.source);
    if (targets.has(edge.target)) {
      fail("PARALLEL_EDGE_UNSUPPORTED", "The initial projection policy rejects parallel directed edges.", {
        edgeId: edge.id, source: edge.source, target: edge.target
      });
    }
    targets.add(edge.target);
  }

  const nodes = sourceNodes.map((record) => ({
    id: record.id,
    sourceRecordHash: hashCanonical("onto2d:structural-source-record:v1", { kind: "node", record }),
    attributes: attributes(record, policy.nodeAttributes)
  }));
  const edges = sourceEdges.map((record) => ({
    id: record.id,
    source: record.source,
    target: record.target,
    sourceRecordHash: hashCanonical("onto2d:structural-source-record:v1", { kind: "edge", record }),
    attributes: attributes(record, policy.edgeAttributes)
  }));
  return seal({
    schemaVersion: "1",
    model: binding(pack.manifest),
    policy,
    policyHash,
    nodes,
    edges
  }, "projectionHash", "onto2d:structural-projection:v1");
}

// Unknown ids are left to the caller's scope validation, which reports them as unknown nodes.
function layerPolicyForVerifiedNodes(pack, nodeIds) {
  const nodes = pack.files[modelPackFilePaths().nodes];
  if (!nodes.some((node) => node.layer)) return null;
  const layer = new Map(nodes.map((node) => [node.id, node.layer]));
  const found = new Set([...nodeIds].filter((id) => layer.has(id)).map((id) => layer.get(id)));
  if (found.size === 0) return null;
  if (found.size !== 1 || !LAYER_POLICY_IDS.has([...found][0])) {
    fail("LAYER_SCOPE_UNSUPPORTED", "An induced scope must lie within one layer of a layered pack.", { layers: [...found] });
  }
  return LAYER_POLICY_IDS.get([...found][0]);
}

/** The projection policy of a layered pack that contains every requested node; null for unlayered packs. */
export function layerPolicyForNodes(pack, nodeIds) {
  return layerPolicyForVerifiedNodes(verifyModelPack(pack), nodeIds);
}

/**
 * The projection a full or induced scope reads, from one verification of the pack. An induced scope of a layered
 * pack is projected with the policy of its layer.
 */
export function projectStructuralGeometryForScope(pack, scope) {
  const verified = verifyModelPack(pack);
  const policyId = scope?.kind === "induced" ? layerPolicyForVerifiedNodes(verified, scope.nodeIds) : null;
  return projectVerifiedPack(verified, normalizeRequest(policyId ? { projectionPolicyId: policyId } : {}));
}

export function projectStructuralGeometry(pack, request = {}) {
  const value = normalizeRequest(request);
  return projectVerifiedPack(verifyModelPack(pack), value);
}

export function analyzeStructuralGeometry(pack, request = {}) {
  const projection = projectStructuralGeometry(pack, request);
  return seal({
    schemaVersion: "1",
    analysis: { id: STRUCTURAL_GEOMETRY_ANALYSIS_ID, version: STRUCTURAL_GEOMETRY_ANALYSIS_VERSION },
    model: projection.model,
    projectionPolicy: projection.policy,
    projectionPolicyHash: projection.policyHash,
    metricPolicy: UNIT_METRIC_POLICY,
    metricPolicyHash: METRIC_POLICY_HASH,
    projectionHash: projection.projectionHash,
    algorithm: { id: "forman-directed-unit", version: "1" },
    parameters: PARAMETERS,
    parametersHash: PARAMETERS_HASH,
    result: calculateDirectedUnitForman(projection)
  }, "artifactHash", "onto2d:structural-geometry-artifact:v1");
}

// A stored projection or artifact names its own policy, which verification replays unless the caller states one.
const ownPolicyRequest = (policy) => (PROJECTION_POLICIES.has(policy?.id) ? { projectionPolicyId: policy.id } : {});

export function verifyStructuralProjection(projection, pack, request = ownPolicyRequest(projection?.policy)) {
  const expected = projectStructuralGeometry(pack, request);
  if (canonicalize(projection) !== canonicalize(expected)) {
    fail("PROJECTION_VERIFICATION_FAILED", "The projection differs from exact source replay.");
  }
  return expected;
}

export function verifyStructuralGeometryArtifact(artifact, pack, request = ownPolicyRequest(artifact?.projectionPolicy)) {
  const expected = analyzeStructuralGeometry(pack, request);
  if (canonicalize(artifact) !== canonicalize(expected)) {
    fail("ARTIFACT_VERIFICATION_FAILED", "The geometry artifact differs from exact source replay.");
  }
  return expected;
}


export function createStructuralGeometryAnalysis() {
  return Object.freeze({
    id: STRUCTURAL_GEOMETRY_ANALYSIS_ID,
    version: STRUCTURAL_GEOMETRY_ANALYSIS_VERSION,
    requiredModelCapabilities: Object.freeze([]),
    requiredAdapterCapabilities: Object.freeze([]),
    inputSchema: STRUCTURAL_GEOMETRY_REQUEST_SCHEMA,
    outputArtifacts: Object.freeze([STRUCTURAL_GEOMETRY_ARTIFACT_SCHEMA]),
    run(context, input = {}) {
      normalizeRequest(input);
      return analyzeStructuralGeometry(packFromEngineModel(context?.model), input);
    }
  });
}

export const structuralGeometryAnalysis = createStructuralGeometryAnalysis();
