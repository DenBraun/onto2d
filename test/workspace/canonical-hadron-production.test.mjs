import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import test from "node:test";

function python(program) {
  return execFileSync("python3", ["-B", "-c", `
import importlib.util, json, tempfile
from decimal import Decimal as D
from fractions import Fraction as F
from itertools import product
spec = importlib.util.spec_from_file_location('production', 'models/causal-emergence/canonical/verify-hadron-production.py')
p = importlib.util.module_from_spec(spec)
spec.loader.exec_module(p)
${program}`], { cwd: new URL("../../", import.meta.url), encoding: "utf8", timeout: 10000 });
}

test("identified yield normalization recovers synthetic counts with branching once and the neutral factor separately", () => {
  python(`
for produced, detector, branching, width, exposure in product(map(D, ['.1','2.4']), map(D,['.2','.8']), map(D,['.3','.64']), map(D,['.01','.3']), map(D,['100','10000'])):
    for neutral_factor in map(D,['1','2']):
        # Independent forward count construction, not an experimental count.
        observed = produced * detector * branching * width * exposure / neutral_factor
        recovered = p.corrected_density(observed, detector * branching, exposure, width, neutral_factor)
        assert recovered == produced
        assert p.corrected_density(observed * 8, detector * branching, exposure * 8, width, neutral_factor) == produced
        # Applying an extra branching correction biases the result.
        assert recovered / branching != produced
        if neutral_factor == 2:
            assert p.corrected_density(observed, detector * branching, exposure, width) == produced / 2
assert p.corrected_density(D(0),D('.5'),D(10),D('.1')) == 0
`);
});

test("integrals retain bin widths, split invariance and multiplicity rather than probability", () => {
  python(`
rows=[['0.10','0.30','0.20','8.00','0.1','0.2'],['0.30','0.70','0.50','3.00','0.1','0.2']]
whole=p.integrate(rows)
assert F(whole) == (F('.3')-F('.1'))*8+(F('.7')-F('.3'))*3
assert whole > 1
split=[rows[0],['0.30','0.50','0.40','3.00','0.1','0.2'],['0.50','0.70','0.60','3.00','0.1','0.2']]
assert p.integrate(split)==whole
for scale in map(D,['.001','3','1000']):
    scaled=[r[:3]+[str(D(r[3])*scale)]+r[4:] for r in rows]
    assert p.integrate(scaled)==whole*scale
`);
});

test("coherent printed-rounding bounds match independent rational extrema with shared edges", () => {
  python(`
for values in [('2.00','5.00','3.00'),('5.00','2.00','4.00'),('3.00','3.00','3.00')]:
    rows=[['0.10','0.30','0.20',values[0],'0.1','0.1'],['0.30','0.60','0.45',values[1],'0.1','0.1'],['0.60','1.00','0.80',values[2],'0.1','0.1']]
    low, high=p.rounding_enclosure(rows)
    # Exhaustive independent rational corner construction. The shared middle
    # boundaries are drawn once, so adjacent widths cannot vary independently.
    intervals=[(F('.095'),F('.105')),(F('.295'),F('.305')),(F('.595'),F('.605')),(F('.995'),F(1))]
    densities=[(F(v)-F('.005'),F(v)+F('.005')) for v in values]
    candidates=[]
    for edges in product(*intervals):
        for density in product(*densities):
            candidates.append(sum((edges[i+1]-edges[i])*density[i] for i in range(3)))
    assert F(low)==min(candidates) and F(high)==max(candidates)
    assert low<=p.integrate(rows)<=high
    # Uncertainty-column changes cannot alter a display-rounding enclosure.
    changed=[r[:4]+['99','999'] for r in rows]
    assert p.rounding_enclosure(changed)==(low,high)
`);
});

test("common normalization does not average away and extrapolation retains measured acceptance", () => {
  python(`
for bins in [[D('.2')]*8,[D('.4'),D('.7'),D('2.1')]]:
    f=D('.034');shared=p.shared_normalization_error(bins,f)
    independent=sum((v*f)**2 for v in bins).sqrt()
    assert shared>independent
    assert shared==sum(bins)*f
    assert p.shared_normalization_error([sum(bins)],f)==shared
    for accepted in map(D,['.1','.5','.945','1']):
        full=p.extrapolated_total(sum(bins),accepted)
        assert abs(full*accepted-sum(bins))<D('1e-45')
        assert full>=sum(bins)
        assert p.extrapolated_total(sum(bins)*accepted,accepted)==sum(bins)
`);
});

test("hadron arithmetic rejects malformed domains, bin order and changed bound table bytes", () => {
  python(`
def rejects(fn):
    try: fn()
    except (AssertionError,ValueError): return
    raise AssertionError('Invalid input admitted')
for bad in [D('NaN'),D('Infinity'),D('-1'),True,1,'1']:
    rejects(lambda bad=bad:p.corrected_density(bad,D('.5'),D(1),D('.2')))
    rejects(lambda bad=bad:p.extrapolated_total(D(1),bad))
    rejects(lambda bad=bad:p.shared_normalization_error([D(1)],bad))
for bad in map(D,['0','1.1']):
    rejects(lambda bad=bad:p.corrected_density(D(1),bad,D(1),D('.2')))
    rejects(lambda bad=bad:p.extrapolated_total(D(1),bad))
rejects(lambda:p.corrected_density(D(1),D('.5'),D(0),D('.2')))
rejects(lambda:p.corrected_density(D(1),D('.5'),D(1),D('.2'),D(3)))
rejects(lambda:p.shared_normalization_error([],D('.1')))
rejects(lambda:p.integrate([]))
rows=[['0.10','0.30','0.20','2.00','0.1','0.1'],['0.30','0.60','0.45','3.00','0.1','0.1']]
for column,value in [(0,'0.31'),(2,'0.60'),(3,'NaN'),(4,'-1')]:
    changed=[r.copy() for r in rows];changed[1][column]=value
    rejects(lambda:p.integrate(changed))
changed=[r.copy() for r in rows];changed[1][0]='0.300'
rejects(lambda:p.rounding_enclosure(changed))
with tempfile.TemporaryDirectory() as directory:
    changed=json.loads(p.DATA.read_text(encoding='utf-8'))
    changed['species']['phi']['rows'][0][5]='0.049'
    path=p.Path(directory)/'changed.json';path.write_text(json.dumps(changed),encoding='utf-8')
    rejects(lambda:p.verify(path))
`);
});

test("hadron evidence distinguishes rounded arithmetic from every unperformed experimental replay", () => {
  const result = JSON.parse(python("print(json.dumps(p.verify()))"));
  assert.equal(result.binCount, 44);
  assert.equal(result.status, "passed");
  assert.deepEqual(Object.values(result.species).map((v) => v.bins), [17, 15, 6, 6]);
  for (const row of Object.values(result.species)) {
    assert.equal(row.reportedDisplayCompatible, true);
    assert.notEqual(Number(row.centralDifference), 0);
    assert.ok(Number(row.impliedAcceptedFractionDiagnostic) > 0);
    assert.ok(Number(row.impliedAcceptedFractionDiagnostic) < 1);
  }
  for (const value of Object.values(result.scope)) assert.equal(value, false);
  assert.match(result.limits.join(" "), /not measurement errors/);
  assert.match(result.limits.join(" "), /not an independently recovered Monte Carlo/);
});

let source;
async function rejectChanges(mutations) {
  const { loadCanonicalSource, validateCanonicalSource } = await import("../../models/causal-emergence/canonical/source.mjs");
  source ??= await loadCanonicalSource();
  for (const [name, change] of mutations) {
    const copy = structuredClone(source);
    change(copy);
    assert.throws(() => validateCanonicalSource(copy), undefined, name);
  }
}
function removeLimit(data, id, fragment) {
  const claim = data.graph.claims.find((x) => x.id === id);
  const before = claim.limitations.length;
  claim.limitations = claim.limitations.filter((x) => !x.includes(fragment));
  assert.ok(claim.limitations.length < before, "Mutation must remove an actual reviewed limit");
}

test("hadron admission preserves inclusive decay, neutral-kaon correction and correlated uncertainty boundaries", async () => {
  await rejectChanges([
    ["reconstructed yields become primary stable particles", (x) => removeLimit(x, "C-phys-sld1999-neutral-yields", "feed-down-subtracted")],
    ["unobserved K0L becomes directly detected", (x) => removeLimit(x, "C-phys-sld1999-neutral-yields", "doubles K0S")],
    ["normalization becomes independent bin error", (x) => removeLimit(x, "C-phys-sld1999-neutral-yields", "3.4 percent")],
    ["charged supersession boundary disappears", (x) => removeLimit(x, "C-phys-sld1999-neutral-yields", "supersedes")],
    ["production fixes old thresholds", (x) => removeLimit(x, "C-phys-sld1999-neutral-yields", "Nmin/Ncrit")]
  ]);
});

test("hadron extrapolation cannot become independent acquisition or a uniquely observed formation mechanism", async () => {
  await rejectChanges([
    ["model extrapolation loses conditions", (x) => removeLimit(x, "C-phys-sld1999-neutral-totals", "mean accepted fraction")],
    ["totals lose reused spectra", (x) => { x.graph.relations = x.graph.relations.filter((r) => r.id !== "physics:sld1999-neutral-yields-sld1999-neutral-totals"); }],
    ["QCD context becomes physical necessity", (x) => { x.graph.relations.find((r) => r.id === "physics:qcd-sld1999-neutral-totals").kind = "functional"; }],
    ["model context becomes new measurement", (x) => { x.readiness.nodeRoles.find((r) => r.nodeId === "phys:sld1999-extrapolation-context").role = "experimental-context"; }]
  ]);
});

test("hadron arithmetic retains local ownership, partial source review and non-replay scope", async () => {
  await rejectChanges([
    ["arithmetic becomes reported experiment", (x) => { x.graph.claims.find((c) => c.id === "C-phys-hadron-production-arithmetic").status = "publication-supported"; }],
    ["local study takes publication provenance", (x) => { x.physics.studies.find((s) => s.id === "hadron-production-replay").sourceId = "sld1999-neutral-production"; }],
    ["reported yields acquire local check", (x) => { x.graph.claims.find((c) => c.id === "C-phys-sld1999-neutral-yields").checkIds = ["hadron-production-printed-arithmetic"]; }],
    ["display interval becomes confidence interval", (x) => removeLimit(x, "C-phys-hadron-production-arithmetic", "display arithmetic bounds")],
    ["finite replay becomes experimental reconstruction", (x) => removeLimit(x, "C-phys-hadron-production-arithmetic", "does not replay acquisition")],
    ["selected source extent becomes full paper", (x) => { x.graph.sources.find((s) => s.id === "sld1999-neutral-production").review.extent = "full-primary-article"; }]
  ]);
});
