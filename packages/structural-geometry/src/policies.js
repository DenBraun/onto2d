import { deepFreeze } from "@onto2d/kernel/canonical";

export const SOURCE_PARENT_DIRECTED_POLICY = deepFreeze({
  "id": "source-parent-directed-v1",
  "version": "1",
  "scope": "full-model",
  "direction": "native",
  "relationLayer": "source-parent",
  "includedOntologicalRoles": "all",
  "includedNecessities": "all",
  "includedDependencyTypes": "all",
  "includeQuantization": true,
  "higherOrderPolicy": "none",
  "selfLoops": "reject",
  "parallelEdges": "reject",
  "nodeAttributes": [
    "level",
    "phase",
    "phaseId",
    "typeRole",
    "typeRoleId",
    "scienceIds",
    "scientificStatus",
    "requirements"
  ],
  "edgeAttributes": [
    "relationLayer",
    "causalDirections",
    "causalDirectionIds",
    "interactionModes",
    "interactionModeIds",
    "weight",
    "necessity",
    "dependencyType",
    "dependencyTypeId",
    "ontologicalRole",
    "quantization"
  ],
  "limits": {
    "maxNodes": 4096,
    "maxEdges": 16384
  }
});

// Canonical premise-to-dependent relations: descriptive and functional-support layers projected pairwise.
// Joint rule premises remain pairwise incidences here; no higher-order semantics is inferred.
export const CANONICAL_RELATION_DIRECTED_POLICY = deepFreeze({
  "id": "canonical-relation-directed-v1",
  "version": "1",
  "scope": "full-model",
  "direction": "native",
  "relationLayers": [
    "descriptive",
    "functional-support"
  ],
  "higherOrderPolicy": "none",
  "selfLoops": "reject",
  "parallelEdges": "reject",
  "nodeAttributes": [
    "level",
    "typeRole",
    "scientificStatus"
  ],
  "edgeAttributes": [
    "relationLayer",
    "role"
  ],
  "limits": {
    "maxNodes": 4096,
    "maxEdges": 16384
  }
});

// Layered canonical packs: the ontological layer of arisings joined by causes.
export const CANONICAL_ARISING_CAUSAL_POLICY = deepFreeze({
  "id": "canonical-arising-causal-v1",
  "version": "1",
  "scope": "arising-layer",
  "direction": "native",
  "nodeLayer": "arising",
  "relationLayers": [
    "causal"
  ],
  "excludedRelationLayers": [
    "descriptive",
    "functional-support"
  ],
  "higherOrderPolicy": "none",
  "selfLoops": "reject",
  "parallelEdges": "reject",
  "nodeAttributes": [
    "level",
    "phase",
    "typeRole",
    "scientificStatus"
  ],
  "edgeAttributes": [
    "relationLayer",
    "dependencyType",
    "necessity",
    "ontologicalRole",
    "status"
  ],
  "limits": {
    "maxNodes": 4096,
    "maxEdges": 16384
  }
});

// Layered canonical packs: the technical layer of evidence records inside arisings.
export const CANONICAL_TECHNICAL_DIRECTED_POLICY = deepFreeze({
  "id": "canonical-technical-directed-v1",
  "version": "1",
  "scope": "technical-layer",
  "direction": "native",
  "nodeLayer": "technical",
  "relationLayers": [
    "descriptive",
    "functional-support"
  ],
  "excludedRelationLayers": [
    "causal"
  ],
  "higherOrderPolicy": "none",
  "selfLoops": "reject",
  "parallelEdges": "reject",
  "nodeAttributes": [
    "level",
    "typeRole",
    "scientificStatus"
  ],
  "edgeAttributes": [
    "relationLayer",
    "role"
  ],
  "limits": {
    "maxNodes": 4096,
    "maxEdges": 16384
  }
});

export const UNIT_METRIC_POLICY = deepFreeze({
  "id": "unit-v1",
  "version": "1",
  "vertexWeight": 1,
  "edgeWeight": 1,
  "edgeLength": 1,
  "sourceWeightUsage": "provenance-only"
});
