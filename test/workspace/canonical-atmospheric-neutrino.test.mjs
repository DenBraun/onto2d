import assert from "node:assert/strict";
import test from "node:test";
import {
  ATMOSPHERIC_NEUTRINO_ADMISSION,
  ATMOSPHERIC_NEUTRINO_CHECKS,
  ATMOSPHERIC_NEUTRINO_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/atmospheric-neutrino.mjs";

test("atmospheric publication evidence has no borrowed local calculation",()=>{
  assert.equal(ATMOSPHERIC_NEUTRINO_CHECKS.size,0);
  assert.equal(ATMOSPHERIC_NEUTRINO_ANALYTICAL_SOURCES.size,0);
  assert.deepEqual(ATMOSPHERIC_NEUTRINO_ADMISSION.localStudySources,[]);
  assert.ok(ATMOSPHERIC_NEUTRINO_ADMISSION.dependencies.some(([,from,to])=>
    from==="neutrino-vacuum-phase"&&to==="superk1998-oscillation-fit"));
  assert.ok(!ATMOSPHERIC_NEUTRINO_ADMISSION.dependencies.some(([,from])=>
    from==="neutrino-arithmetic"));
});

let source;
async function rejectChanges(mutations){
  const {loadCanonicalSource,validateCanonicalSource}=await import("../../models/causal-emergence/canonical/source.mjs");
  source??=await loadCanonicalSource();
  for(const [name,change] of mutations){
    const copy=structuredClone(source);change(copy);
    assert.throws(()=>validateCanonicalSource(copy),undefined,name);
  }
}
function removeLimit(data,id,part){
  const claim=data.graph.claims.find(x=>x.id===id);const before=claim.limitations.length;
  claim.limitations=claim.limitations.filter(x=>!x.includes(part));
  assert.ok(claim.limitations.length<before,"Mutation must remove a reviewed limit");
}
function removeEdge(data,id){
  const before=data.graph.relations.length;
  data.graph.relations=data.graph.relations.filter(r=>r.id!==`physics:${id}`);
  assert.equal(data.graph.relations.length,before-1,"Mutation must remove the intended dependency");
}

test("atmospheric admission preserves corrected source, FC/PC selection and modeled flavor response",async()=>{
  await rejectChanges([
    ["corrected source replaced by version one",x=>{x.graph.sources.find(s=>s.id==="superk1998-atmospheric").url="https://arxiv.org/pdf/hep-ex/9807003v1";}],
    ["all FC and PC events acquire a single-ring cut",x=>removeLimit(x,"C-phys-superk1998-selected-samples","no single-ring requirement")],
    ["visible energy becomes incoming neutrino energy",x=>removeLimit(x,"C-phys-superk1998-selected-samples","E_vis")],
    ["simulation becomes a measured pure flavor sample",x=>removeLimit(x,"C-phys-superk1998-unoscillated-response","flavor purities")],
    ["double ratio becomes absolute survival",x=>removeLimit(x,"C-phys-superk1998-flavor-ratios","absolute flux")],
    ["ratio loses its modeled denominator",x=>removeEdge(x,"superk1998-unoscillated-response-superk1998-flavor-ratios")]
  ]);
});

test("atmospheric admission preserves reconstructed zenith observables and same-acquisition reuse",async()=>{
  await rejectChanges([
    ["up/down boundary and normalization conventions disappear",x=>removeLimit(x,"C-phys-superk1998-zenith-asymmetry","near-horizontal")],
    ["lepton direction becomes a true neutrino trajectory",x=>removeLimit(x,"C-phys-superk1998-zenith-asymmetry","imperfect proxies")],
    ["L/E cross-check becomes a resolved independent oscillation",x=>removeLimit(x,"C-phys-superk1998-zenith-asymmetry","resolved oscillation dip")],
    ["two analysis groups become independent exposures",x=>removeLimit(x,"C-phys-superk1998-zenith-asymmetry","two analysis groups")],
    ["asymmetry loses selected events",x=>removeEdge(x,"superk1998-selected-samples-superk1998-zenith-asymmetry")],
    ["response is promoted to a universal functional cause",x=>{x.graph.relations.find(r=>r.id==="physics:superk1998-response-context-superk1998-zenith-asymmetry").kind="functional";}]
  ]);
});

test("atmospheric fit cannot turn conditional disappearance into measured tau appearance or checked likelihood",async()=>{
  await rejectChanges([
    ["physical boundary and outside minimum are collapsed",x=>removeLimit(x,"C-phys-superk1998-oscillation-fit","unconstrained minimum")],
    ["free normalization becomes an implicit Gaussian prior",x=>removeLimit(x,"C-phys-superk1998-oscillation-fit","alpha floats freely")],
    ["tau disappearance becomes direct tau appearance",x=>removeLimit(x,"C-phys-superk1998-oscillation-fit","cannot distinguish")],
    ["same selected fit becomes independent evidence",x=>removeEdge(x,"superk1998-selected-samples-superk1998-oscillation-fit")],
    ["fit loses its phase convention",x=>removeEdge(x,"neutrino-vacuum-phase-superk1998-oscillation-fit")],
    ["experimental fit borrows KamLAND arithmetic",x=>{const c=x.graph.claims.find(c=>c.id==="C-phys-superk1998-oscillation-fit");c.status="analytically-checked";c.checkIds=["neutrino-phase-data-algebra"];}],
    ["same-acquisition fit becomes a new primary experiment",x=>{x.physics.studies.find(s=>s.id==="superk1998-oscillation-fit").studyType="primary-experiment";}]
  ]);
});
