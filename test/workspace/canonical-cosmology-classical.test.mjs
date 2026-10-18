import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";
import {
  COSMOLOGY_CLASSICAL_ADMISSION as admission,
  COSMOLOGY_CLASSICAL_CHECKS,
  COSMOLOGY_CLASSICAL_ANALYTICAL_SOURCES,
  validateCosmologyClassicalContracts
} from "../../models/causal-emergence/canonical/cosmology-classical.mjs";

const gaussian = "gaussian-cosmological-mode-statistics";
const classical = "cosmological-growing-mode-classical-limit";
let sourcePromise;
const source = () => sourcePromise ??= loadCanonicalSource();
const claim = (data, id) => data.graph.claims.find((record) => record.id === `D-phys-${id}`);
const entity = (data, id) => data.graph.entities.find((record) => record.id === `phys:${id}`);
const relation = (data, from, to) => data.graph.relations.find((record) => record.id === `physics:${from}-${to}`);

function context(data) {
  return Object.fromEntries([
    ...["sources", "claims", "entities", "relations"].map((key) => [key, new Map(data.graph[key].map((record) => [record.id, record]))]),
    ...["studies", "comparisons"].map((key) => [key, new Map(data.physics[key].map((record) => [record.id, record]))]),
    ["readiness", data.readiness]
  ]);
}

function replaceStatement(data, id, before, after) {
  const record = claim(data, id);
  assert.ok(record.statement.includes(before), `Reviewed statement contains ${before}`);
  record.statement = record.statement.replace(before, after);
  entity(data, id).description = record.statement;
}

function removeBoundary(data, id, fragment) {
  const record = claim(data, id), length = record.limitations.length;
  record.limitations = record.limitations.filter((limit) => !limit.includes(fragment));
  assert.equal(record.limitations.length, length - 1, `Unique boundary ${fragment}`);
  entity(data, id).openObligations = [...record.limitations];
}

async function rejects(mutations) {
  const original = await source();
  validateCosmologyClassicalContracts(context(original));
  for (const [name, mutate] of mutations) {
    const changed = structuredClone(original);
    mutate(changed);
    assert.throws(() => validateCanonicalSource(changed), undefined, name);
  }
}

test("cosmological classical interpretation is two formal definitions without an invented measurement or replay", async () => {
  assert.equal(COSMOLOGY_CLASSICAL_CHECKS.size, 0);
  assert.equal(COSMOLOGY_CLASSICAL_ANALYTICAL_SOURCES.size, 0);
  assert.deepEqual(admission.definitions, [
    [`phys:${gaussian}`, `D-phys-${gaussian}`],
    [`phys:${classical}`, `D-phys-${classical}`]
  ]);
  for (const key of ["contexts", "observations", "studyIds", "comparisonIds", "localStudySources", "inferenceSources"])
    assert.deepEqual(admission[key], []);
  const data = await source();
  validateCosmologyClassicalContracts(context(data));
  for (const id of [gaussian, classical]) {
    assert.equal(claim(data, id).status, "definition");
    assert.deepEqual(claim(data, id).checkIds, []);
    assert.deepEqual(claim(data, id).contextIds ?? [], []);
    assert.equal(entity(data, id).kind, "definition");
  }
  assert.equal(admission.formalDependencies.length, 3);
});

test("equal-time complex Gaussian amplitudes retain their normalization, reality relation and limited observables", async () => {
  await rejects([
    ["a real-variable Gaussian normalization is substituted for the complex-pair density", (data) =>
      replaceStatement(data, gaussian, "(pi |f_k|^2)", "(sqrt(2 pi) |f_k|)")],
    ["the complex variance is halved as though it were a single real component", (data) =>
      replaceStatement(data, gaussian, "<|y|^2>=|f_k|^2", "<|y|^2>=|f_k|^2/2")],
    ["the reality and nonzero-mode restrictions disappear from both claim and display", (data) =>
      removeBoundary(data, gaussian, "not independent complex samples")],
    ["an equal-time probability is promoted to a complete classical trajectory", (data) =>
      replaceStatement(data, gaussian, "it does not by itself determine a classical trajectory", "it uniquely determines a classical trajectory")],
    ["Gaussianity alone removes the finite-hbar commutator", (data) =>
      removeBoundary(data, gaussian, "canonical commutator remains nonzero")]
  ]);
});

test("the dominant-mode phase-space approximation keeps its phase convention, domain and second-solution conditions", async () => {
  await rejects([
    ["complex conjugation is removed from the phase correlation", (data) =>
      replaceStatement(data, classical, "F=Im(conj(f_k) g_k)", "F=Im(f_k g_k)")],
    ["the momentum correlation changes sign", (data) =>
      replaceStatement(data, classical, "p=(F/|f_k|^2)y", "p=-(F/|f_k|^2)y")],
    ["a singular retained mode is included in the phase-space ratio", (data) =>
      replaceStatement(data, classical, "Where |f_k|>0", "For every mode including f_k=0")],
    ["horizon crossing suffices even when the second solution is appreciable", (data) =>
      removeBoundary(data, classical, "Horizon crossing alone")],
    ["a time-dependent random process replaces the retained fixed amplitude", (data) =>
      replaceStatement(data, classical, "time-independent Gaussian e", "independently redrawn Gaussian e at every time")],
    ["coarse graining becomes exact canonical dynamics", (data) =>
      removeBoundary(data, classical, "approximate restricted-observable equivalence")]
  ]);
});

test("classical representation is distinct from environmental decoherence, particle populations and a unique observed origin", async () => {
  await rejects([
    ["an unspecified environment is required for any Gaussian probability", (data) => {
      const record = claim(data, classical);
      record.limitations = record.limitations.map((limit) => limit.startsWith("No environment is required")
        ? "Environmental interactions are universally necessary to write any equal-time field-amplitude probability." : limit);
      entity(data, classical).openObligations = [...record.limitations];
    }],
    ["a stochastic representation demonstrates the actual environmental channel", (data) =>
      removeBoundary(data, classical, "interaction, subsystem and coarse-graining prescription")],
    ["dominant modes certify stable virtual particles and the primordial vacuum", (data) =>
      removeBoundary(data, classical, "not a stable population of virtual particles")],
    ["the formal result acquires publication-supported observational status", (data) => {
      claim(data, classical).status = "publication-supported";
      entity(data, classical).status = "publication-supported";
    }]
  ]);
});

test("curvature transfer preserves the distinct variable, pump and conditional superhorizon inputs", async () => {
  await rejects([
    ["the spectator variable and curvature variable become identical", (data) =>
      removeBoundary(data, gaussian, "not automatically the gauge-invariant curvature variable")],
    ["the conceptual variable edge substitutes the free-scalar pump", (data) => {
      relation(data, "canonical-curvature-mode", gaussian).assertion =
        "The curvature variable is the same free scalar y, so a''/a universally replaces z''/z.";
    }],
    ["a Gaussian marginal alone establishes stochastic trajectories", (data) => {
      relation(data, gaussian, classical).assertion =
        "The equal-time marginal suffices to prove a classical trajectory at every time without phase or dominant-mode conditions.";
    }],
    ["superhorizon conservation input is replaced by the power-spectrum definition", (data) => {
      relation(data, "superhorizon-curvature-evolution", classical).source = "phys:primordial-curvature-spectrum";
    }],
    ["the reviewed conditional conservation dependency is omitted", (data) => {
      data.graph.relations = data.graph.relations.filter((record) =>
        record.id !== `physics:superhorizon-curvature-evolution-${classical}`);
    }]
  ]);
});

test("source reading, locators, display fields and readiness cannot expand the theoretical admission", async () => {
  await rejects([
    ["an unreviewed publisher comparison becomes a source fact", (data) => {
      data.graph.sources.find((record) => record.id === "polarski1996-classical").review.limit =
        "The published paper and all cited observations were independently replicated.";
    }],
    ["the reviewed v2 source silently changes to its withdrawn first version", (data) => {
      data.graph.sources.find((record) => record.id === "polarski1996-classical").url = "https://arxiv.org/abs/gr-qc/9504030v1";
    }],
    ["a real source locator is transferred to the wrong paper", (data) => {
      claim(data, gaussian).citations[0].sourceId = "mukhanov1988-perturbations";
    }],
    ["a display-only field asserts measured collapse", (data) => {
      entity(data, classical).description = "An observed collapse event produces the classical primordial perturbation.";
    }],
    ["an observation reading is inserted into readiness", (data) => {
      data.readiness.nodeRoles.find((record) => record.nodeId === `phys:${classical}`).denotes =
        "A measured universal quantum-to-classical transition.";
    }],
    ["display source coordinates add unreviewed observational support", (data) => {
      entity(data, gaussian).sourceCoordinates.push({ sourceId: "polarski1996-classical", locator: "Measured CMB collapse events" });
    }]
  ]);
});

test("the formal approximation cannot become an unadmitted constructive or empirical graph relation", async () => {
  await rejects([
    ["a new causal edge certifies the measured origin", (data) => {
      const edge = structuredClone(relation(data, gaussian, classical));
      edge.id = "physics:unreviewed-cosmological-collapse";
      edge.assertion = "The Gaussian definition physically produces every classical perturbation.";
      data.graph.relations.push(edge);
    }],
    ["a reviewed definition dependency becomes a construction relation", (data) => {
      relation(data, gaussian, classical).kind = "constructive";
    }],
    ["a physical construction rule bypasses the reviewed descriptive dependencies", (data) => {
      const rule = structuredClone(data.graph.rules[0]);
      rule.id = "phys:unreviewed-cosmological-classicalization";
      rule.outputEntityIds = [`phys:${classical}`];
      data.graph.rules.push(rule);
    }]
  ]);
});
