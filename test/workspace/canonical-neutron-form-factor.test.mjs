import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";
import {
  NEUTRON_FORM_FACTOR_ADMISSION,
  NEUTRON_FORM_FACTOR_ANALYTICAL_SOURCES,
  NEUTRON_FORM_FACTOR_CHECKS
} from "../../models/causal-emergence/canonical/neutron-form-factor.mjs";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util
spec=importlib.util.spec_from_file_location("neutron_ff", "models/causal-emergence/canonical/verify-neutron-form-factor.py")
n=importlib.util.module_from_spec(spec)
spec.loader.exec_module(n)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8" });
}

test("neutron response tables preserve version identity, rounding and unresolved errors", () => {
  const r = JSON.parse(python("print(n.json.dumps(n.verify()))"));
  assert.equal(r.clasRows, 26);
  assert.deepEqual(r.q2RangeGeV2, ["0.9848", "4.7727"]);
  assert.equal(r.figureIdentity.uniqueMarkers, 26);
  assert.equal(r.figureIdentity.drawingPasses, 2);
  assert.ok(Number(r.figureIdentity.maximumXError) < 1);
  assert.ok(Number(r.figureIdentity.maximumYError) < 1);
  assert.equal(r.figureIdentity.endpointBandHeight, 23);
  assert.equal(r.endpointSystematicProseDiscrepancy, true);
  assert.ok(r.endpointRelativeSystematicErrors.every((v) => Number(v) < 0.017));
  assert.deepEqual(r.riordanRows.map((v) => v.literalCentralRounded), ["0.0237", "0.0208", "0.0147"]);
  assert.deepEqual(r.riordanRows.map((v) => v.reportedGE), ["0.0236", "0.0208", "0.0147"]);
  assert.ok(r.riordanRows.every((v) => v.roundingCompatible));
  assert.equal(r.naiveTableIIRow2Matches, false);
  for (const key of ["tableIIDiscrepancyIsEstablishedSourceError", "interpolationAlgorithmReproduced",
    "signedMomentMeasured", "rawEventsReplayed", "acceptanceReplayed", "nuclearModelReplayed",
    "fullAsymmetryCorrectionReplayed", "fitReplayed", "fullCovarianceReproduced",
    "flavorSeparationAdmitted", "staticThreeDimensionalDensityInferred"]) assert.equal(r[key], false);
});

test("squared neutron response inverts to a magnitude and retains adopted inputs", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 ge,gm,tau,a,mott,proton=D('.03'),D('-.4'),D('.5'),D('1.001'),D(2),D(3)
 ratios=[]
 for tangent in [D(0),D('.1'),D(2)]:
  observed=n.quasielastic_ratio(ge,gm,tau,tangent,a,mott,proton)
  recovered=n.magnetic_magnitude(observed,ge,tau,tangent,a,mott,proton)
  assert abs(recovered-abs(gm))<D('1e-45')
  # The equation is invariant under independent sign reversals.
  assert n.quasielastic_ratio(-ge,-gm,tau,tangent,a,mott,proton)==observed
  assert n.quasielastic_ratio(ge,-gm,tau,tangent,a,mott,proton)==observed
  # Same-unit changes of both cross sections cancel; a different proton
  # response or angle does not cancel merely because Q2 is unchanged.
  assert n.quasielastic_ratio(ge,gm,tau,tangent,a,mott*1000,proton*1000)==observed
  assert n.quasielastic_ratio(ge,gm,tau,tangent,a,mott,proton*2)==observed/2
  assert n.magnetic_magnitude(observed,D(0),tau,tangent,a,mott,proton)>recovered
  ratios.append(observed)
 assert ratios[0]<ratios[1]<ratios[2]
 assert n.magnetic_magnitude(D(0),D(0),tau,D(0),a,mott,proton)==0
`);
});

test("magnetic normalization cancels consistently but does not commute with interpolation", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 assert n.dipole(D(0))==1 and n.dipole(D('.71'))==D('.25')
 q0,q1,q=D(1),D(3),D(2)
 y0,y1,gn=D('.98'),D('1.02'),D('.4')
 expected=gn*n.linear(q,q0,q1,y0*n.dipole(q0),y1*n.dipole(q1))
 for mu in [D('-1.913'),D('-2'),D(3)]:
  gm0=n.magnetic_from_reduced(q0,y0,mu)
  gm1=n.magnetic_from_reduced(q1,y1,mu)
  gm=n.linear(q,q0,q1,gm0,gm1)
  ge=gn*gm/mu
  assert abs(ge-expected)<D('1e-45')
  assert abs(n.normalized_sachs_ratio(ge,gm,mu)-gn)<D('1e-45')
 wrong=gn*n.linear(q,q0,q1,y0,y1)*n.dipole(q)
 assert abs(expected-wrong)>D('.001')
 assert n.linear(q0,q0,q1,D(-2),D(4))==D(-2)
 assert n.linear(q1,q0,q1,D(-2),D(4))==D(4)
 assert n.linear(q,q0,q1,D(-2),D(4))==1
 # Display-precision compatibility is a distinct test from central rounding.
 assert not n.rounded_overlap(D('.023656'),D('.000001'),D('.0236'),D('.00005'))
 assert n.rounded_overlap(D('.023656'),D('.000043'),D('.0236'),D('.00005'))
`);
});

test("selected source parsing rejects changed quantity, row coverage and plotted centers", () => {
  python(`
from decimal import Decimal as D
text=(n.DATA/'lachniet2009-e111m1.tsv').read_text(encoding='utf-8')
rows=n.parse_clas_table(text)
description=(n.DATA/'lachniet2009-e111m1-description.html').read_text(encoding='utf-8')
eps=(n.DATA/'lachniet2009-v2-figure3.eps').read_text(encoding='utf-8')
def rejects(call):
 try: call()
 except (AssertionError,ArithmeticError,ValueError): pass
 else: raise AssertionError('Corrupt source semantics were admitted')
rejects(lambda:n.parse_clas_table(text.replace('GMn_reduced','GMn')))
rejects(lambda:n.parse_clas_table(text.replace('0.9953','NaN')))
rejects(lambda:n.parse_clas_table(text.replace('1.1364','0.9848')))
rejects(lambda:n.parse_clas_table(text+'4.9\\t1\\t.1\\t.1\\n'))
rejects(lambda:n.parse_clas_table('\\n'.join(text.splitlines()[:-1])))
rejects(lambda:n.compare_metadata(rows,description.replace('divided by &mu;','multiplied by &mu;')))
rejects(lambda:n.compare_metadata(rows,description.replace('0.9953','0.9954')))
changed=rows.copy();changed[0]=(changed[0][0],changed[0][1]+D('.01'),*changed[0][2:])
rejects(lambda:n.compare_final_figure(changed,eps))
rejects(lambda:n.compare_final_figure(rows,eps.replace('57 X -1 -23 d','57 X -1 -24 d')))
`);
});

test("asymmetry correction and helper domains do not invent missing physics", () => {
  python(`
from decimal import Decimal as D, localcontext
with localcontext() as c:
 c.prec=50
 signal,background,fraction=D('-.2'),D('.1'),D('.8')
 observed=fraction*signal+(1-fraction)*background
 assert n.unmix_asymmetry(observed,fraction,background)==signal
 assert n.unmix_asymmetry(signal,D(1),background)==signal
 assert n.unmix_asymmetry(-observed,fraction,-background)==-signal
bad=[
 lambda:n.dipole(D(-1)),lambda:n.dipole(D('NaN')),lambda:n.dipole(True),
 lambda:n.magnetic_from_reduced(D(1),D(1),D(0)),
 lambda:n.normalized_sachs_ratio(D(1),D(0),D(1)),
 lambda:n.normalized_sachs_ratio(D(1),D(1),D('Infinity')),
 lambda:n.linear(D(0),D(1),D(2),D(3),D(4)),
 lambda:n.linear(D(1),D(1),D(1),D(3),D(4)),
 lambda:n.linear(D(1),D(2),D(1),D(3),D(4)),
 lambda:n.quasielastic_ratio(D(1),D(1),D(0),D(0),D(1),D(1),D(1)),
 lambda:n.quasielastic_ratio(D(1),D(1),D(1),D(-1),D(1),D(1),D(1)),
 lambda:n.quasielastic_ratio(D(1),D(1),D(1),D(0),D(1),D(1),D(0)),
 lambda:n.magnetic_magnitude(D('.01'),D(1),D(1),D(0),D(1),D(1),D(1)),
 lambda:n.magnetic_magnitude(D(-1),D(0),D(1),D(0),D(1),D(1),D(1)),
 lambda:n.unmix_asymmetry(D(1),D('.1'),D(-1)),
 lambda:n.unmix_asymmetry(D(0),D(0),D(0)),
 lambda:n.unmix_asymmetry(D(0),D('1.1'),D(0)),
 lambda:n.rounded_overlap(D(1),D(0),D(1),D('.1')),
 lambda:n.quasielastic_ratio(D('1e999999'),D(1),D(1),D(1),D(1),D(1),D(1)),
]
for call in bad:
 try: call()
 except (AssertionError,ArithmeticError): pass
 else: raise AssertionError('Invalid physical/helper input admitted')
`);
});

test("neutron form-factor topology separates measured and corrected outcomes", () => {
  const a = NEUTRON_FORM_FACTOR_ADMISSION;
  assert.equal(a.definitions.length, 1);
  assert.equal(a.contexts.length, 5);
  assert.equal(a.observations.length, 7);
  assert.equal(a.dependencies.length, 20);
  const edges = a.dependencies.map(([, source, target]) => `${source}>${target}`);
  assert.ok(edges.includes("riordan2010-asymmetries>riordan2010-corrected-asymmetries"));
  assert.ok(edges.includes("riordan2010-extraction-context>riordan2010-corrected-asymmetries"));
  assert.ok(edges.includes("riordan2010-corrected-asymmetries>riordan2010-normalized-ratio"));
  assert.ok(!edges.includes("riordan2010-asymmetries>riordan2010-normalized-ratio"));
  assert.ok(edges.includes("lachniet2009-magnetic-response>riordan2010-electric-response"));
  assert.ok(edges.includes("riordan2010-asymmetries>neutron-form-factor-arithmetic"));
  assert.ok(edges.includes("riordan2010-corrected-asymmetries>neutron-form-factor-arithmetic"));
  assert.deepEqual([...NEUTRON_FORM_FACTOR_CHECKS], [["neutron-form-factor-printed-arithmetic", "C-phys-neutron-form-factor-arithmetic"]]);
  assert.deepEqual([...NEUTRON_FORM_FACTOR_ANALYTICAL_SOURCES], [["C-phys-neutron-form-factor-arithmetic", "neutron-form-factor-verifier"]]);
  assert.deepEqual(a.localStudySources, [["neutron-form-factor-replay", "neutron-form-factor-verifier"]]);
});

test("canonical neutron form-factor contracts preserve experimental and inference boundaries", async () => {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  const data = await loadCanonicalSource();
  const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
  function drop(d, id, fragment) {
    const c = claim(d, id), before = c.limitations.length;
    c.limitations = c.limitations.filter((s) => !s.includes(fragment));
    assert.ok(c.limitations.length < before, "Mutation must remove an actual boundary");
  }
  for (const [name, mutate] of [
    ["corrected endpoint becomes an independent acquisition", (d) => { claim(d, "C-phys-riordan2010-corrected-asymmetries").contextIds = ["riordan2010-acquisition"]; }],
    ["measured and corrected values collapse", (d) => { d.graph.relations.find((r) => r.id === "physics:riordan-corrected-asymmetries-ratio").source = "phys:riordan2010-asymmetries"; }],
    ["external magnetic scale disappears", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:lachniet-magnetic-riordan-electric"); }],
    ["old abstract substitutes earlier GE", (d) => { claim(d, "C-phys-riordan2010-electric-response").statement = "GE=0.0225, 0.0200, 0.0142 are the v2 Table III results."; }],
    ["magnetic sign becomes measured", (d) => drop(d, "C-phys-lachniet2009-magnetic-response", "does not determine the sign")],
    ["systematic discrepancy silently resolves", (d) => drop(d, "C-phys-lachniet2009-magnetic-response", "last two released")],
    ["nuclear and acceptance corrections merge", (d) => drop(d, "C-phys-lachniet2009-magnetic-response", "0.9-1.3")],
    ["model dependence disappears", (d) => drop(d, "C-phys-riordan2010-normalized-ratio", "private communication")],
    ["interpolation compatibility becomes exact replay", (d) => drop(d, "C-phys-neutron-form-factor-arithmetic", "Literal interpolation")],
    ["new calculation borrows a publication", (d) => { d.physics.studies.find((s) => s.id === "neutron-form-factor-replay").sourceId = "riordan2010"; }],
    ["local arithmetic verifies acquired response", (d) => { claim(d, "C-phys-riordan2010-electric-response").checkIds = ["neutron-form-factor-printed-arithmetic"]; }],
  ]) {
    const copy = structuredClone(data);
    mutate(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
});
