import assert from "node:assert/strict";
import { LEVEL_TWO_ADMISSION } from "./level-two.mjs";

// Reused acquisition contexts retain their original preparations and reading limits.
const reviewedStudies = [
  {
    "id": "hanssen2001",
    "sourceId": "hanssen2001",
    "studyType": "primary-experiment",
    "doi": "10.1364/ao.40.003196",
    "pmid": "11958259",
    "journal": "Applied Optics",
    "volume": "40",
    "issue": "19",
    "pages": "3196-3204",
    "organism": "Not applicable: Specified Si, ZnSe, KRS-5 and MgF2 windows; Au mirror",
    "preparation": "FTIR integrating-sphere measurements with the declared incident and collection geometry",
    "observable": "Spectral reflectance and transmittance; absorptance inferred from balance",
    "finding": "Reported aggregate reflection and transmission depend on the specified sample and measurement conditions.",
    "limitations": [
      "The source discusses instrumental structure and contaminants; spectra are not digitized here.",
      "No full BRDF, microscopic necessity or matched retinal transfer is established."
    ],
    "readExtent": "selected-full-text-passages",
    "reviewedLocators": [
      "Abstract",
      "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
      "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
      "Section 7, pp. 3203-3204: discussion and scope"
    ],
    "metadataCheckedAt": "2026-09-13",
    "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/11958259/",
    "correctionCheck": "NIST publication record, publisher PDF and PubMed metadata checked; no exhaustive correction/retraction search."
  },
  {
    "id": "pope1997",
    "sourceId": "pope1997",
    "studyType": "primary-experiment",
    "doi": "10.1364/ao.36.008710",
    "pmid": "18264420",
    "journal": "Applied Optics",
    "volume": "36",
    "issue": "33",
    "pages": "8710-8723",
    "organism": "Not applicable: Pure liquid water as reported in the abstract",
    "preparation": "Integrating-cavity technique; detailed preparation not yet reviewed",
    "observable": "Reported wavelength-dependent absorption coefficient in the visible range",
    "finding": "The paper reports an absorption spectrum from 380 to 700 nm.",
    "limitations": [
      "Only the abstract was reviewed; coefficient values and uncertainty are not admitted.",
      "Quickenden et al. (2000) criticize uncertainty/purification and Fry (2000) replies; full adjudication remains open."
    ],
    "readExtent": "abstract-and-bibliographic-metadata",
    "reviewedLocators": [
      "Abstract"
    ],
    "metadataCheckedAt": "2026-09-13",
    "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/18264420/",
    "correctionCheck": "Located criticism DOI 10.1364/ao.39.002740 and reply DOI 10.1364/ao.39.005843; read abstracts and metadata. Not an exhaustive correction/retraction search."
  }
];

export function validateOpticalReview({ graph, optics }, { sources, claims, entities, relations }) {
  assert.deepEqual(optics.studies, reviewedStudies,
    "Optical source reuse must preserve the complete reviewed preparations and reading limits");
  for (const target of ["specular-response", "material-transmission"]) {
    const relation = relations.get(`optical:measurement-context-${target}`);
    assert.equal(relation?.source, "opt:measurement-context", "Optical measurement boundary changed");
    assert.equal(relation.target, `opt:${target}`, "Optical readout changed");
    assert.deepEqual(relation.claimIds, [`C-optical-measurement-context-${target}`]);
  }
  const expectedRelations = ["optical:measurement-context-specular-response", "optical:measurement-context-material-transmission", "optical:distribution-observation", "optical:coefficient-observation"];
  // These exact descriptive references reuse the original optical evidence;
  // their endpoints, methods and complete contexts are checked by physics.
  const reusedRelations = LEVEL_TWO_ADMISSION.dependencies
    .filter(([, source]) => source.startsWith("opt:"))
    .map(([id]) => `physics:${id}`);
  const opticalRelations = graph.relations.filter((r) => r.id.startsWith("optical:") || r.source.startsWith("opt:") || r.target.startsWith("opt:"));
  assert.deepEqual(opticalRelations.map((r) => r.id), [...expectedRelations, ...reusedRelations], "Unreviewed optical relation or cross-domain bridge");
  for (const r of opticalRelations.filter((r) => expectedRelations.includes(r.id))) {
    assert.ok(r.source.startsWith("opt:") && r.target.startsWith("opt:"), "No matched optical-to-retinal bridge is admitted");
    assert.equal(r.kind, "descriptive");
    assert.ok(r.claimIds.some((id) => ["definition", "method-contract"].includes(claims.get(id).status)));
  }
  for (const [id, source, target, claimId] of [
    ["optical:distribution-observation", "opt:brdf", "opt:specular-response", "O-brdf"],
    ["optical:coefficient-observation", "opt:absorption-coefficient", "opt:water-absorption", "O-coefficient"]
  ]) {
    const r = relations.get(id);
    assert.equal(r.source, source); assert.equal(r.target, target); assert.deepEqual(r.claimIds, [claimId]);
    assert.equal(r.contextIds, undefined);
  }
  for (const e of graph.entities.filter((e) => e.id.startsWith("opt:"))) {
    assert.equal(e.level, 2);
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => claims.get(id).status === "publication-supported"), "Missing optical observation evidence");
    for (const id of e.claimIds) for (const c of claims.get(id).citations) {
      const source = sources.get(c.sourceId);
      if (source.kind === "research-publication" || c.sourceId === "optical-witnesses") assert.ok(source.review.locators.includes(c.locator), "Unreviewed optical source locator");
    }
  }
  for (const id of ["quickenden2000", "fry2000-reply"]) assert.ok(claims.get("O-water").citations.some((c) => c.sourceId === id && c.role === "limits"), "Water-precision dispute was lost or promoted to supporting evidence");
  for (const c of optics.comparisons) {
    assert.equal(c.result, "not-tested", "No empirical optical graph-ranking experiment has been performed");
    assert.deepEqual(c.sourceIds, []);
  }

  assert.deepEqual(sources.get("optical-witnesses").review.locators, optics.checkIds);
}
