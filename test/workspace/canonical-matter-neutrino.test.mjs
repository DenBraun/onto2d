import assert from "node:assert/strict";
import test from "node:test";
import {
  MATTER_NEUTRINO_ADMISSION,
  MATTER_NEUTRINO_CHECKS,
  MATTER_NEUTRINO_ANALYTICAL_SOURCES
} from "../../models/causal-emergence/canonical/matter-neutrino.mjs";

test("matter propagation remains a formal contract without an experimental or numerical replay",()=>{
  assert.equal(MATTER_NEUTRINO_CHECKS.size,0);
  assert.equal(MATTER_NEUTRINO_ANALYTICAL_SOURCES.size,0);
  for(const key of ["contexts","observations","studyIds","comparisonIds","localStudySources"])
    assert.deepEqual(MATTER_NEUTRINO_ADMISSION[key],[],key);
  const endpoints=MATTER_NEUTRINO_ADMISSION.formalDependencies.map(([,pair])=>pair);
  assert.ok(endpoints.some(([from,to])=>from==="phys:neutrino-flavor-mixing"&&to==="phys:neutrino-matter-evolution"));
  assert.ok(endpoints.some(([from,to])=>from==="phys:neutrino-vacuum-phase"&&to==="phys:neutrino-matter-evolution"));
  assert.ok(endpoints.some(([from,to])=>from==="phys:neutrino-matter-evolution"&&to==="phys:neutrino-matter-mixing"));
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
const claim=(data,id)=>data.graph.claims.find(x=>x.id===`D-phys-neutrino-matter-${id}`);
function removeLimit(data,id,part){
  const c=claim(data,id);const before=c.limitations.length;
  c.limitations=c.limitations.filter(x=>!x.includes(part));
  assert.ok(c.limitations.length<before,"Mutation must remove a reviewed limit");
}
function replaceStatement(data,id,from,to){
  const c=claim(data,id);
  assert.ok(c.statement.includes(from),"Mutation must alter the intended formula or convention");
  c.statement=c.statement.replace(from,to);
}
function removeEdge(data,id){
  const before=data.graph.relations.length;
  data.graph.relations=data.graph.relations.filter(r=>r.id!==`physics:${id}`);
  assert.equal(data.graph.relations.length,before-1,"Mutation must remove the intended dependency");
}

test("matter Hamiltonian preserves basis, weak-potential sign and active-medium assumptions",async()=>{
  await rejectChanges([
    ["flavor Hamiltonian loses its adjoint",x=>replaceStatement(x,"evolution","U-dagger/(2E)","U/(2E)")],
    ["neutrino neutral-current sign is reversed",x=>replaceStatement(x,"evolution","-G_F*n_n(x)/sqrt(2)","+G_F*n_n(x)/sqrt(2)")],
    ["active neutral matter becomes arbitrary sterile or absorbing medium",x=>removeLimit(x,"evolution","three-active-neutrino")],
    ["every diagonal potential becomes an unobservable phase",x=>removeLimit(x,"evolution","merely diagonal")],
    ["effective matter eigenvalues become generated vacuum masses",x=>removeLimit(x,"evolution","supplied inputs")],
    ["potential loses its declared flavor basis",x=>removeEdge(x,"neutrino-flavor-mixing-neutrino-matter-evolution")],
    ["matter evolution loses the vacuum phase convention",x=>removeEdge(x,"neutrino-vacuum-phase-neutrino-matter-evolution")]
  ]);
});

test("instantaneous matter mixing does not imply adiabatic conversion or constant-density propagation",async()=>{
  await rejectChanges([
    ["instantaneous gap loses the energy denominator",x=>replaceStatement(x,"mixing","Delta_m/(2E)","Delta_m")],
    ["eigenbasis derivative connection gets the opposite sign",x=>replaceStatement(x,"mixing","-i*R-dagger*dR/dx","+i*R-dagger*dR/dx")],
    ["two-flavor angle loses its branch and nondegeneracy domain",x=>removeLimit(x,"mixing","tan(2 theta_m) alone")],
    ["resonance becomes complete measured conversion",x=>removeLimit(x,"mixing","Resonance by itself")],
    ["adiabatic following loses the gap comparison",x=>removeLimit(x,"mixing","off-diagonal derivative coupling")],
    ["variable-density evolution becomes a single vacuum phase",x=>removeLimit(x,"mixing","noncommuting Hamiltonians")],
    ["two-flavor mixing loses its parent evolution model",x=>removeEdge(x,"neutrino-matter-evolution-neutrino-matter-mixing")]
  ]);
});

test("matter definitions cannot borrow KamLAND checks or become empirical formation rules",async()=>{
  await rejectChanges([
    ["matter model borrows a vacuum data verifier",x=>{const c=claim(x,"evolution");c.status="analytically-checked";c.checkIds=["neutrino-phase-data-algebra"];}],
    ["formal mixing becomes a published solar observation",x=>{const c=claim(x,"mixing");c.status="publication-supported";c.contextIds=["kamland2005-oscillation-fit"];}],
    ["definition dependency becomes a functional formation law",x=>{x.graph.relations.find(r=>r.id==="physics:neutrino-matter-evolution-neutrino-matter-mixing").kind="functional";}],
    ["reviewed formal source expands silently to a global solar fit",x=>{x.graph.sources.find(s=>s.id==="pdg2025-neutrino-mixing").review.extent="complete-experimental-global-fit";}],
    ["matter-state definition becomes an admitted observed instance",x=>{x.readiness.nodeRoles.find(r=>r.nodeId==="phys:neutrino-matter-evolution").instanceAdmission="empirical-instance";}]
  ]);
});
