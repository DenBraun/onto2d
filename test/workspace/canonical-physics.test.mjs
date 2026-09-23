import assert from "node:assert/strict";
import test from "node:test";
import { loadCanonicalSource, validateCanonicalSource } from "../../models/causal-emergence/canonical/source.mjs";

const data = await loadCanonicalSource();
const claim = (d, id) => d.graph.claims.find((c) => c.id === id);
const entity = (d, id) => d.graph.entities.find((e) => e.id === id);

test("LIONTRAP reanalysis preserves shared acquisition and distinct controls", () => {
  rejects([
    ["reanalysis becomes a new primary experiment", (d) => { d.physics.studies.find((s) => s.id === "liontrap2019-reanalysis").studyType = "primary-experiment"; }],
    ["original acquisition disappears from the revised result", (d) => { claim(d, "C-phys-liontrap2019-proton").contextIds = ["liontrap2019-reanalysis"]; }],
    ["double-dip agreement becomes independent replication", (d) => { dropPhysicsLimit(d, "C-phys-liontrap-double-dip", "same cycles"); }],
    ["carbon control borrows proton production preparation", (d) => { d.physics.studies.find((s) => s.id === "liontrap2019-carbon-control").preparation = d.physics.studies.find((s) => s.id === "liontrap2017-pna").preparation; }],
    ["original and revised mass values become independently averageable", (d) => { dropPhysicsLimit(d, "M-phys-liontrap2019-proton", "averaged as independent"); }]
  ]);
});

test("LIONTRAP mass conversion preserves charge and upstream inputs", () => {
  rejects([
    ["sixfold nuclear charge is omitted", (d) => { const c = claim(d, "D-phys-liontrap-carbon-reference"); c.statement = c.statement.replace("R*m_C/6", "R*m_C"); }],
    ["oxygen loses its proton-mass dependency", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:liontrap2019-proton-liontrap-oxygen"); }],
    ["oxygen independently confirms its own input", (d) => { d.physics.comparisons.find((c) => c.id === "liontrap-oxygen").result = "conditional-support"; }],
    ["carbon reference loses its uncertainty discrepancy", (d) => { dropPhysicsLimit(d, "D-phys-liontrap-carbon-reference", "0.00667 ppt"); }],
    ["electron-proton covariance assumption becomes proved independence", (d) => { dropPhysicsLimit(d, "C-phys-liontrap2019-proton", "assumes zero covariance"); }]
  ]);
});

test("LIONTRAP corrections retain thermal motion and unresolved conventions", () => {
  rejects([
    ["zero driven excitation removes thermal corrections", (d) => { dropPhysicsLimit(d, "D-phys-penning-pna-fit", "Thermal axial"); }],
    ["pair-specific correction becomes a reproducible global sum", (d) => { d.physics.comparisons.find((c) => c.id === "liontrap-correction-budget").result = "conditional-support"; }],
    ["table sign conflict is concealed", (d) => { dropPhysicsLimit(d, "C-phys-liontrap-correction-budget", "printed sign convention"); }],
    ["dimensionless expression becomes a frequency shift", (d) => { dropPhysicsLimit(d, "D-phys-penning-image-charge", "dimensionless right side"); }],
    ["proposal becomes realized simultaneous readout", (d) => { dropPhysicsLimit(d, "M-phys-liontrap2019-reanalysis-context", "were not used"); }],
    ["later tuning becomes the mass-campaign preparation", (d) => { dropPhysicsLimit(d, "C-phys-liontrap2019-proton", "improved Table VI"); }]
  ]);
});

test("image-charge extraction retains observable and correlated errors", () => {
  rejects([
    ["total magnetron difference becomes image charge alone", (d) => { const c = claim(d, "C-phys-schuh-image-charge"); c.statement = c.statement.replace("2.291(61)(111)", "393.258(61)(77)"); }],
    ["tilt correction errors become independent quadrature terms", (d) => { dropPhysicsLimit(d, "M-phys-schuh-image-charge", "add to 110"); }],
    ["variance inflation disappears", (d) => { dropPhysicsLimit(d, "C-phys-schuh-magnetron-difference", "sqrt(2)"); }],
    ["magnetron ratio replaces axial calibration", (d) => { dropPhysicsLimit(d, "D-phys-penning-magnetron-control", "using nu_z"); }],
    ["calibration drops its earlier proton input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:liontrap2017-proton-schuh-image-charge"); }],
    ["table conversion becomes exact without resolving the mismatch", (d) => { dropPhysicsLimit(d, "C-phys-schuh-ics-comparison", "458.2"); }]
  ]);
});

test("electrode geometry retains numerical scope and shared calibration", () => {
  assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:schuh2019-geometry-context").role, "model-context");
  rejects([
    ["electrostatic model becomes a physical experiment", (d) => { d.physics.studies.find((s) => s.id === "schuh2019-geometry").studyType = "primary-experiment"; }],
    ["simplified geometry substitutes for manufactured electrodes", (d) => { dropPhysicsLimit(d, "C-phys-schuh-geometry-response", "same simplified geometry"); }],
    ["numerical agreement removes manufacturing uncertainty", (d) => { dropPhysicsLimit(d, "D-phys-penning-image-charge-geometry", "10 micrometers"); }],
    ["image-field convention loses the sign distinction", (d) => { dropPhysicsLimit(d, "D-phys-penning-image-charge", "footnote 2"); }],
    ["image-charge result borrows an unrelated data replay", (d) => { claim(d, "C-phys-schuh-ics-comparison").checkIds = ["bell-event-table-2015"]; }],
    ["geometry comparison becomes physical generation", (d) => { d.graph.relations.find((r) => r.id === "physics:schuh-geometry-response-schuh-ics-comparison").kind = "functional-support"; }],
    ["shared mass input loses its primary publication", (d) => { const c = claim(d, "M-phys-schuh-image-charge"); c.citations = c.citations.filter((r) => r.sourceId !== "heisse2017"); }]
  ]);
});

test("Penning controls preserve voltage, charge state and classical readout", () => {
  rejects([
    ["common-voltage experiment borrows unequal-voltage preparation", (d) => { d.physics.studies.find((s) => s.id === "natarajan1993-sof").preparation = d.physics.studies.find((s) => s.id === "natarajan1993-pnp").preparation; }],
    ["control comparison loses the unequal-voltage arm", (d) => { claim(d, "C-phys-natarajan-voltage-control").contextIds = ["natarajan1993-sof"]; }],
    ["double charge is interpreted as twice the ionic mass", (d) => { dropPhysicsLimit(d, "C-phys-natarajan-frequency-ratios", "Ar+/Ar++ entry requires the charge factor"); }],
    ["classical amplitude is treated as a quantum state", (d) => { dropPhysicsLimit(d, "D-phys-penning-sof-protocol", "classical cyclotron amplitude"); }],
    ["trap mode is used as the free cyclotron frequency", (d) => { dropPhysicsLimit(d, "D-phys-penning-cyclotron-ratio", "trap cyclotron mode alone"); }]
  ]);
});

test("atomic masses retain carbon reference and electronic corrections", () => {
  rejects([
    ["carbon ion becomes exactly twelve atomic mass units", (d) => { dropPhysicsLimit(d, "C-phys-difilippo-hydrogen-masses", "carbon ion differs"); }],
    ["neutral atoms become bare nuclei", (d) => { dropPhysicsLimit(d, "C-phys-natarajan-hydrogen-masses", "not a bare proton"); }],
    ["chemical mass correction is disconnected", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:ion-atom-mass-correction-difilippo-hydrogen-masses"); }],
    ["nano atomic mass units are silently treated as atomic mass units", (d) => { dropPhysicsLimit(d, "C-phys-natarajan-hydrogen-masses", "1e-9 u"); }],
    ["published isotope mass changes sign", (d) => { const c = claim(d, "C-phys-difilippo-hydrogen-masses"); c.statement = c.statement.replace("1.0078250316(5)", "-1.0078250316(5)"); }]
  ]);
});

test("isotope difference retains covariance and publication dependence", () => {
  rejects([
    ["marginal errors become sufficient for a mass difference", (d) => { dropPhysicsLimit(d, "D-phys-atomic-mass-covariance", "Cov(D,H)"); }],
    ["unprinted covariance becomes reproduced data", (d) => { dropPhysicsLimit(d, "M-phys-difilippo-capture-input", "missing mass-fit covariance"); }],
    ["overlapping reports become independent replications", (d) => { dropPhysicsLimit(d, "M-phys-difilippo-hydrogen-masses", "same MIT measurement program"); }],
    ["internal consistency excludes every systematic", (d) => { dropPhysicsLimit(d, "C-phys-difilippo-hydrogen-masses", "every possible common systematic"); }],
    ["mass fit acquires unrelated numerical reproduction", (d) => { claim(d, "C-phys-difilippo-hydrogen-masses").checkIds = ["bell-null-tail-2015"]; }]
  ]);
});

test("capture mass input remains connected without circular confirmation", () => {
  rejects([
    ["capture inference loses its reviewed mass-spectrometry input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:difilippo-capture-input-kessler-neutron-mass"); }],
    ["mass-input trace becomes an independent neutron experiment", (d) => { d.physics.comparisons.find((c) => c.id === "difilippo-capture-input").result = "conditional-support"; }],
    ["older neutron value loses its binding-energy input", (d) => { dropPhysicsLimit(d, "C-phys-difilippo-capture-input", "Greene1986"); }],
    ["capture inference loses its primary isotope citation", (d) => { const c = claim(d, "M-phys-kessler-neutron-mass"); c.citations = c.citations.filter((x) => x.sourceId !== "difilippo1994"); }],
    ["input dependency becomes physical formation", (d) => { d.graph.relations.find((r) => r.id === "physics:difilippo-capture-input-kessler-neutron-mass").kind = "functional-support"; }]
  ]);
});

test("capture campaigns preserve their angle groups and correlated calibrations", () => {
  for (const id of ["kessler1995-context", "kessler1998-context"]) {
    assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:" + id).role, "experimental-context");
  }
  rejects([
    ["1995 data acquire the 1998 preparation", (d) => { d.physics.studies.find((s) => s.id === "kessler1995").preparation = d.physics.studies.find((s) => s.id === "kessler1998").preparation; }],
    ["campaign settings become independent experiments", (d) => { dropPhysicsLimit(d, "C-phys-kessler1995-angle", "not five independent"); }],
    ["pooled angle omits the first campaign", (d) => { claim(d, "C-phys-kessler-combined-angle").contextIds = ["kessler1998"]; }],
    ["combined result drops calibration covariance", (d) => { dropPhysicsLimit(d, "M-phys-kessler-combined-angle", "Within each campaign"); }],
    ["table year inconsistency is concealed", (d) => { dropPhysicsLimit(d, "C-phys-kessler1998-angle", "final March 1995 result"); }]
  ]);
});

test("capture photon and binding energy cannot lose recoil, units or crystal inputs", () => {
  rejects([
    ["wavelength loses lattice calibration", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:ill25-calibration-kessler-capture-wavelength"); }],
    ["pressure correction vanishes", (d) => { dropPhysicsLimit(d, "C-phys-kessler-capture-wavelength", "factor 1-epsilon*p"); }],
    ["binding energy loses nuclear recoil", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:capture-recoil-energy-kessler-binding-energy"); }],
    ["atomic or molecular mass replaces nuclear recoil mass", (d) => { dropPhysicsLimit(d, "C-phys-kessler-binding-energy", "deuteron nuclear mass"); }],
    ["published mass equivalent becomes energy without conversion", (d) => { const c = claim(d, "C-phys-kessler-binding-energy"); c.statement = c.statement.replace("2.38817007(42)e-3 u", "2.38817007(42)e-3 eV"); }],
    ["modern constants silently replace the reported inputs", (d) => { dropPhysicsLimit(d, "D-phys-binding-unit-conversion", "modern SI constants"); }]
  ]);
});

test("neutron mass retains upstream mass input and inference limits", () => {
  rejects([
    ["neutron mass loses external isotope masses", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:hydrogen-isotope-mass-input-kessler-neutron-mass"); }],
    ["relative atomic mass acquires kilograms", (d) => { const c = claim(d, "D-phys-hydrogen-isotope-mass-input"); c.statement = c.statement.replace("dimensionless", "kilogram-valued"); }],
    ["unreviewed mass spectrometry becomes verified", (d) => { dropPhysicsLimit(d, "C-phys-kessler-neutron-mass", "DiFilippo"); }],
    ["capture becomes direct neutral-particle weighing", (d) => { dropPhysicsLimit(d, "C-phys-kessler-neutron-mass", "direct Penning-trap"); }],
    ["mass inference proves stability or formation", (d) => { dropPhysicsLimit(d, "C-phys-kessler-neutron-mass", "free-neutron lifetime"); }],
    ["Bell table reproduction certifies capture data", (d) => { claim(d, "C-phys-kessler-neutron-mass").checkIds = ["bell-event-table-2015"]; }]
  ]);
});

test("capture recalibration preserves reused data and selected-source boundaries", () => {
  rejects([
    ["recalculation becomes independent replication", (d) => { d.physics.comparisons.find((c) => c.id === "kessler-recalibrated-wavelength").result = "conditional-support"; }],
    ["selected adjustment becomes a fully read primary experiment", (d) => { d.graph.sources.find((s) => s.id === "mohr2025-neutron").review.extent = "full-primary-article"; }],
    ["recalibration loses its author source", (d) => { const c = claim(d, "C-phys-kessler-recalibrated-wavelength"); c.citations = c.citations.filter((r) => r.sourceId !== "dewey2006-capture"); }],
    ["adjusted result borrows original crystal calibration", (d) => { d.graph.relations.find((r) => r.id === "physics:ill25-adjusted-calibration-kessler-recalibrated-wavelength").source = "phys:ill25-calibration"; }],
    ["dimensionless input loses printed unit conflict", (d) => { dropPhysicsLimit(d, "D-phys-ill25-adjusted-calibration", "Table XXV D14"); }],
    ["calibration edge becomes physical generation", (d) => { d.graph.relations.find((r) => r.id === "physics:ill25-adjusted-calibration-kessler-recalibrated-wavelength").kind = "functional-support"; }]
  ]);
});

function dropPhysicsLimit(d, id, fragment) {
  const limits = claim(d, id).limitations;
  const index = limits.findIndex((text) => text.includes(fragment));
  assert.ok(index >= 0, `Missing mutation target: ${fragment}`);
  limits.splice(index, 1);
}

test("isospin production and volume diagnostics retain their computational populations", () => {
  for (const id of ["borsanyi2015-context", "borsanyi-volume-context"]) {
    assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:" + id).role, "model-context");
  }
  rejects([
    ["simulation becomes a detector experiment", (d) => { d.physics.studies.find((s) => s.id === "borsanyi2015").studyType = "primary-experiment"; }],
    ["volume subset becomes the production population", (d) => { d.physics.studies.find((s) => s.id === "borsanyi2015").preparation = d.physics.studies.find((s) => s.id === "borsanyi2015-volume").preparation; }],
    ["charged ensemble coverage gains a fourth spacing", (d) => { dropPhysicsLimit(d, "M-phys-borsanyi2015-context", "beta=3.4 is represented only"); }],
    ["bare coupling census loses the table discrepancy", (d) => { dropPhysicsLimit(d, "C-phys-borsanyi-lattice-splittings", "additional 0.71 row"); }],
    ["correlated gauge samples become independent sources", (d) => { dropPhysicsLimit(d, "M-phys-borsanyi2015-context", "50 trajectories"); }]
  ]);
});

test("isospin predictions preserve calibration inputs and experimental reuse", () => {
  rejects([
    ["input masses become predicted masses", (d) => { dropPhysicsLimit(d, "C-phys-borsanyi-isospin-spectrum", "primary physical-point inputs"); }],
    ["kaon squared-mass difference becomes a pure QCD parameter", (d) => { dropPhysicsLimit(d, "D-phys-qcd-qed-calibration", "not a pure strong contribution"); }],
    ["spectrum omits mass and charge calibration", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:qcd-qed-calibration-borsanyi-isospin-spectrum"); }],
    ["calibrated ratio becomes an independent prediction", (d) => { dropPhysicsLimit(d, "C-phys-borsanyi-calibrated-ratio", "additionally uses the experimental"); }],
    ["ratio independently tests its experimental input", (d) => { d.physics.comparisons.find((c) => c.id === "borsanyi-calibrated-ratio").result = "conditional-support"; }],
    ["ratio loses its additional experimental input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:extra-mass-ratio-calibration"); }],
    ["fit variants become independent replications", (d) => { dropPhysicsLimit(d, "M-phys-borsanyi-isospin-spectrum", "About 500 fit variants"); }]
  ]);
});

test("mass components retain units, sign, correlation and separation convention", () => {
  rejects([
    ["neutron-proton mass ordering is reversed", (d) => { const c = claim(d, "C-phys-borsanyi-isospin-spectrum"); c.statement = c.statement.replace("n-p 1.51", "n-p -1.51"); }],
    ["kaon squared-mass contribution becomes a mass", (d) => { const c = claim(d, "C-phys-borsanyi-qcd-qed-components"); c.statement = c.statement.replace("MeV^2", "MeV"); }],
    ["Sigma electromagnetic zero becomes a measured null", (d) => { dropPhysicsLimit(d, "D-phys-qcd-qed-separation", "zero is a definition"); }],
    ["rounded marginal components become independent exact sums", (d) => { dropPhysicsLimit(d, "C-phys-borsanyi-qcd-qed-components", "separately rounded and correlated"); }],
    ["auxiliary assumed relation independently verifies itself", (d) => { dropPhysicsLimit(d, "M-phys-borsanyi-isospin-spectrum", "auxiliary cross-check assumes"); }],
    ["published fits borrow Bell reproduction status", (d) => { claim(d, "C-phys-borsanyi-isospin-spectrum").checkIds = ["bell-null-tail-2015"]; }]
  ]);
});

test("QED volume corrections cannot become universal physical generation rules", () => {
  rejects([
    ["enhanced-coupling volume response becomes a physical-point result", (d) => { claim(d, "C-phys-borsanyi-kaon-volume").contextIds = ["borsanyi2015"]; }],
    ["neutral leading null erases all finite-volume effects", (d) => { dropPhysicsLimit(d, "D-phys-qedl-volume-correction", "absence of all finite-volume effects"); }],
    ["QED cutoff extrapolation becomes an exact zero-cutoff construction", (d) => { dropPhysicsLimit(d, "M-phys-borsanyi-kaon-volume", "QED triviality"); }],
    ["mass calculation proves weak-decay stability", (d) => { dropPhysicsLimit(d, "C-phys-borsanyi-isospin-spectrum", "Weak decays"); }],
    ["diagnostic relation becomes measured physical causation", (d) => { d.graph.relations.find((r) => r.id === "physics:borsanyi-kaon-volume-borsanyi-isospin-spectrum").kind = "functional-support"; }],
    ["unreviewed draft replaces the reviewed article", (d) => { d.graph.sources.find((s) => s.id === "borsanyi2015").url = "https://arxiv.org/abs/1406.4088v1"; }]
  ]);
});

test("neutron production and diagnostic preparations cannot be merged", () => {
  for (const id of ["ucn2017-context", "ucn2018-context", "ucn-al-control-context", "ucn2018-uncleaned-context", "ucn2020-context", "ucn2021-context", "ucn2022-context", "ucn2022-uncleaned-context"]) {
    assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:" + id).role, "experimental-context");
  }
  rejects([
    ["2017 inherits later loading preparation", (d) => { d.physics.studies.find((s) => s.id === "gonzalez2021-2017").preparation = d.physics.studies.find((s) => s.id === "gonzalez2021-2018").preparation; }],
    ["covered-block diagnostic becomes production", (d) => { claim(d, "C-phys-ucn-al-loss").contextIds = ["gonzalez2021-2017"]; }],
    ["uncleaned diagnostic becomes nominal cleaning", (d) => { claim(d, "C-phys-ucn2022-cleaning-tail").contextIds = ["musedinovic2025-2022"]; }],
    ["experiment becomes simulated detector data", (d) => { d.physics.studies.find((s) => s.id === "musedinovic2025-2021").studyType = "computational-analysis"; }],
    ["earlier campaign borrows the new article", (d) => { d.physics.studies.find((s) => s.id === "gonzalez2021-2018").sourceId = "musedinovic2025"; }]
  ]);
});

test("storage survival, unloading and intrinsic lifetime keep distinct meanings", () => {
  rejects([
    ["mean lifetime becomes half-life", (d) => { claim(d, "D-phys-exponential-survival").limitations.splice(1, 1); }],
    ["capture detector becomes a beta-product counter", (d) => { claim(d, "D-phys-ucn-storage-loss-model").limitations.splice(1, 1); }],
    ["material control changes intrinsic decay", (d) => { claim(d, "C-phys-ucn-al-loss").limitations.shift(); }],
    ["cleaning is an intrinsic decay intervention", (d) => { claim(d, "C-phys-ucn2018-uncleaned-loss").limitations.pop(); }],
    ["tail ratio becomes a survival fraction", (d) => { claim(d, "M-phys-ucn2022-cleaning-tail").limitations.shift(); }],
    ["unloading time replaces lifetime", (d) => { claim(d, "C-phys-ucn2022-segment-response").limitations.splice(3, 1); }],
    ["apparatus interval becomes a carrier minimum", (d) => { d.graph.relations.find((r) => r.id === "physics:loss-ucn2020").carrier = structuredClone(d.graph.relations.find((r) => r.carrier).carrier); }]
  ]);
});

test("neutron combinations preserve reused years and publication-specific error rules", () => {
  rejects([
    ["original largest-error rule disappears", (d) => { claim(d, "M-phys-ucn2017-2018-lifetime").limitations.splice(4, 1); }],
    ["new analyses become independent replications", (d) => { claim(d, "C-phys-ucn2021-fits").limitations.shift(); }],
    ["global result loses earlier production", (d) => { claim(d, "C-phys-ucntau-global-lifetime").contextIds = ["musedinovic2025-2020", "musedinovic2025-2021", "musedinovic2025-2022"]; }],
    ["current result absorbs older years", (d) => { claim(d, "C-phys-ucn2020-2022-lifetime").contextIds.unshift("gonzalez2021-2017"); }],
    ["global combination loses old systematic scope", (d) => { claim(d, "M-phys-ucntau-global-lifetime").limitations = claim(d, "M-phys-ucntau-global-lifetime").limitations.filter((x) => !x.includes("cross-year covariance")); }],
    ["year-consistency probability becomes new physics evidence", (d) => { d.physics.comparisons.find((c) => c.id === "ucntau-global-lifetime").result = "specified-alternative-disfavored"; }]
  ]);
});

test("neutron correction evidence retains blinding limits, source conflicts and final numbers", () => {
  rejects([
    ["final selection described as entirely blinded", (d) => { claim(d, "M-phys-ucn2020-context").limitations.splice(4, 1); }],
    ["scaled fit errors become exact Poisson errors", (d) => { claim(d, "M-phys-ucn2022-context").limitations.splice(5, 1); }],
    ["uniformity average sign silently corrected", (d) => { claim(d, "C-phys-ucn2020-2022-lifetime").limitations = claim(d, "C-phys-ucn2020-2022-lifetime").limitations.filter((x) => !x.includes("conventional signed average")); }],
    ["published result replaced with preprint value", (d) => { const c = claim(d, "C-phys-ucntau-global-lifetime"); c.statement = c.statement.replace("877.83", "877.82"); }],
    ["new-year final value replaced with abstract draft", (d) => { const c = claim(d, "C-phys-ucn2020-2022-lifetime"); c.statement = c.statement.replace("877.96", "877.94"); }],
    ["Bell arithmetic certifies neutron fit", (d) => { claim(d, "C-phys-ucntau-global-lifetime").checkIds = ["bell-null-tail-2015"]; }]
  ]);
});

test("neutron inferences cannot omit diagnostic or calibration inputs", () => {
  rejects([
    ["old result loses material-loss diagnostic", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:ucn-al-loss-ucn2017-2018-lifetime"); }],
    ["new bias model loses the prior calibration", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:ucn2017-2018-lifetime-ucn2020-2022-lifetime"); }],
    ["global result loses one old campaign", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:ucn2018-fits-global"); }],
    ["diagnostic fit becomes physical generative necessity", (d) => { d.graph.relations.find((r) => r.id === "physics:survival-ucn-al-loss").kind = "functional-support"; }],
    ["gain sensitivity proves a unique phase-space mechanism", (d) => { d.physics.comparisons.find((c) => c.id === "ucn2022-segment-response").assumptions.splice(2, 1); }]
  ]);
});

test("hadron simulation retains its theory, calibration and sampling scope", () => {
  assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:durr2008-context").role, "model-context");
  rejects([
    ["lattice spectrum becomes detector evidence", (d) => { d.physics.studies.find((s) => s.id === "durr2008").studyType = "primary-experiment"; }],
    ["extrapolation becomes a physical-mass ensemble", (d) => { claim(d, "M-phys-durr2008-context").limitations.shift(); }],
    ["auxiliary runs collapse into fourteen ensembles", (d) => { claim(d, "M-phys-durr2008-context").limitations.splice(1, 1); }],
    ["source timeslices become independent replications", (d) => { claim(d, "C-phys-durr-lattice-masses").limitations.splice(2, 1); }],
    ["three fitted masses become predictions", (d) => { claim(d, "D-phys-hadron-mass-calibration").limitations.shift(); }],
    ["finite-mass correlator borrows a static-source preparation", (d) => { claim(d, "C-phys-durr-lattice-masses").contextIds = ["bali2005"]; }]
  ]);
});

test("hadron spectrum preserves numerical inputs, error meanings and interpretation dependencies", () => {
  rejects([
    ["input Xi mass relabeled as prediction", (d) => { const c = claim(d, "C-phys-durr-hadron-spectrum"); c.statement = c.statement.replace("1.318 (input)", "1.318 (prediction)"); }],
    ["nucleon systematic error disappears", (d) => { const c = claim(d, "C-phys-durr-hadron-spectrum"); c.statement = c.statement.replace("0.022 (systematic)", "0.000 (systematic)"); }],
    ["analysis variants become independent experiments", (d) => { claim(d, "M-phys-durr-hadron-spectrum").limitations.splice(1, 1); }],
    ["correlated error fractions become probabilities", (d) => { claim(d, "C-phys-durr-hadron-spectrum").limitations.splice(6, 1); }],
    ["spectrum claims neutron lifetime", (d) => { d.physics.comparisons.find((c) => c.id === "durr-hadron-spectrum").assumptions.splice(8, 1); }],
    ["spectrum loses its input calibration", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:calibration-durr-spectrum"); }],
    ["mass inference becomes a confinement necessity", (d) => { d.graph.relations.find((r) => r.id === "physics:continuum-durr-spectrum").kind = "functional-support"; }]
  ]);
});

test("unresolved resonance masses cannot become absence tests or reproduced widths", () => {
  rejects([
    ["discrete level becomes a physical lifetime", (d) => { claim(d, "D-phys-finite-volume-hadron-resonance").limitations.splice(1, 1); }],
    ["weak mass sensitivity becomes resonance absence", (d) => { claim(d, "C-phys-durr-resonance-exclusion").limitations.shift(); }],
    ["excluded mass extraction becomes an alternative rejection", (d) => { d.physics.comparisons.find((c) => c.id === "durr-resonance-exclusion").result = "specified-alternative-disfavored"; }],
    ["width input restriction disappears", (d) => { claim(d, "M-phys-durr-resonance-exclusion").limitations.splice(1, 1); }],
    ["published spectrum becomes Bell-data reproduction", (d) => { claim(d, "C-phys-durr-hadron-spectrum").checkIds = ["bell-null-tail-2015"]; }],
    ["embargo-delayed deposit changes publication year", (d) => { d.graph.sources.find((s) => s.id === "durr2008").year = 2009; }]
  ]);
});

test("dynamical string breaking keeps its ensemble and operator-only null", () => {
  assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:bali2005-context").role, "model-context");
  rejects([
    ["computational spectrum becomes an experiment", (d) => { d.physics.studies.find((s) => s.id === "bali2005").studyType = "primary-experiment"; }],
    ["heavy sea ensemble becomes physical masses", (d) => { claim(d, "M-phys-bali2005-context").limitations.shift(); }],
    ["correlated configuration counts become independent", (d) => { claim(d, "C-phys-bali-correlator-matrix").limitations.splice(1, 1); }],
    ["loop null loses its sensitivity boundary", (d) => { claim(d, "C-phys-bali-wilson-loop-null").limitations.shift(); }],
    ["SU(2) loop replaces the SU(3) operator basis", (d) => { d.graph.relations.find((r) => r.id === "physics:basis-bali-matrix").source = "phys:wilson-loop"; }],
    ["simulation borrows a charge-search preparation", (d) => { claim(d, "C-phys-bali-correlator-matrix").contextIds = ["lee2002"]; }]
  ]);
});

test("string spectral inference retains conventions, fit uncertainty and real-time limits", () => {
  rejects([
    ["summary swaps basis coefficients", (d) => { claim(d, "D-phys-two-state-string-mixing").limitations.shift(); }],
    ["fit midpoint is exact equal mixing", (d) => { claim(d, "D-phys-two-state-string-mixing").limitations.splice(2, 1); }],
    ["statistical errors become total errors", (d) => { claim(d, "C-phys-bali-avoided-crossing").limitations.splice(3, 1); }],
    ["speculative bands become physical-point data", (d) => { d.physics.comparisons.find((c) => c.id === "bali-avoided-crossing").assumptions.pop(); }],
    ["Euclidean coupling becomes a decay rate", (d) => { claim(d, "M-phys-bali-mixing-coupling").limitations.shift(); }],
    ["shared-data check becomes independent support", (d) => { d.physics.comparisons.find((c) => c.id === "bali-mixing-coupling").result = "conditional-support"; }],
    ["unreviewed source version", (d) => { d.graph.sources.find((s) => s.id === "bali2005").url = "https://arxiv.org/abs/hep-lat/0505012v1"; }]
  ]);
});

test("electric-charge search keeps residual convention, selected mass and overlapping cuts", () => {
  assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:lee2002-context").role, "experimental-context");
  rejects([
    ["electric charge becomes color charge", (d) => { claim(d, "D-phys-fractional-charge-residual").limitations.shift(); }],
    ["centered residual replaces modulo-one residual", (d) => { claim(d, "D-phys-fractional-charge-residual").limitations.splice(1, 1); }],
    ["selected mass is subjected to cuts again", (d) => { claim(d, "M-phys-lee2002-context").limitations.splice(2, 1); }],
    ["individual rejection fractions are added", (d) => { claim(d, "C-phys-lee-charge-null").limitations.splice(3, 1); }],
    ["null borrows a lattice observable", (d) => { d.graph.relations.find((r) => r.id === "physics:residual-lee-charge").source = "phys:static-light-string-basis"; }]
  ]);
});

test("null abundance limit retains unresolved normalization and material scope", () => {
  rejects([
    ["bound loses charge-window discrepancy", (d) => { claim(d, "C-phys-lee-abundance-limit").limitations.splice(1, 1); }],
    ["reported confidence becomes reproduced arithmetic", (d) => { claim(d, "M-phys-lee-abundance-limit").limitations.splice(2, 1); }],
    ["processed-oil restriction disappears", (d) => { d.physics.comparisons.find((c) => c.id === "lee-abundance-limit").assumptions.pop(); }],
    ["scoped bound becomes universal absence test", (d) => { d.physics.comparisons.find((c) => c.id === "lee-abundance-limit").result = "specified-alternative-disfavored"; }],
    ["Bell replay certifies charge confidence", (d) => { claim(d, "C-phys-lee-abundance-limit").checkIds = ["bell-null-tail-2015"]; }],
    ["reported bound loses its measured input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:lee-null-bound"); }]
  ]);
});

test("lattice definitions retain regulator, representation and continuum boundaries", () => {
  rejects([
    ["regulator becomes physical granularity", (d) => { claim(d, "D-phys-lattice-gauge-formulation").limitations.shift(); }],
    ["geometric loop becomes a persistent object", (d) => { claim(d, "D-phys-wilson-loop").limitations.splice(1, 1); }],
    ["strong coupling becomes continuum proof", (d) => { claim(d, "D-phys-lattice-strong-coupling").limitations.splice(2, 1); }],
    ["area law loses screening scope", (d) => { claim(d, "D-phys-static-string-tension").limitations.shift(); }],
    ["classical matching becomes quantum completion", (d) => { claim(d, "D-phys-lattice-continuum-limit").limitations.shift(); }]
  ]);
});

test("pure SU(2) computation cannot become a QCD experiment or physical construction", () => {
  assert.equal(data.physics.studies.find((s) => s.id === "creutz1980").studyType, "computational-analysis");
  assert.equal(data.readiness.nodeRoles.find((r) => r.nodeId === "phys:creutz1980-context").role, "model-context");
  rejects([
    ["simulation relabeled as experiment", (d) => { d.physics.studies.find((s) => s.id === "creutz1980").studyType = "primary-experiment"; }],
    ["different gauge theory", (d) => { d.physics.studies.find((s) => s.id === "creutz1980").system = "Physical SU(3) QCD"; }],
    ["model context relabeled as experiment", (d) => { d.readiness.nodeRoles.find((r) => r.nodeId === "phys:creutz1980-context").role = "experimental-context"; }],
    ["loop output borrows detector data", (d) => { claim(d, "C-phys-creutz-wilson-loops").contextIds = ["cms2013-r32"]; }],
    ["sampling becomes physical maintenance", (d) => { d.graph.relations.find((r) => r.id === "physics:creutz-computation").role = "scoped-operating-support"; }],
    ["fluctuations lose sampling qualification", (d) => { claim(d, "M-phys-creutz1980-context").limitations.splice(2, 1); }]
  ]);
});

test("lattice tension and scaling retain fit restrictions and conditional inference", () => {
  rejects([
    ["finite loop fit becomes independent test", (d) => { d.physics.comparisons.find((c) => c.id === "creutz-string-fit").result = "conditional-support"; }],
    ["low beta fit assumptions disappear", (d) => { claim(d, "M-phys-creutz-string-fit").limitations.splice(1, 1); }],
    ["unresolved area coefficient becomes precise", (d) => { claim(d, "C-phys-creutz-string-fit").limitations.splice(2, 1); }],
    ["normalization uncertainty disappears", (d) => { d.physics.comparisons.find((c) => c.id === "creutz-scaling").assumptions.splice(1, 1); }],
    ["conditional scaling becomes proof", (d) => { d.physics.comparisons.find((c) => c.id === "creutz-scaling").result = "specified-alternative-disfavored"; }],
    ["reading becomes numerical reproduction", (d) => { claim(d, "C-phys-creutz-scaling").checkIds = ["bell-null-tail-2015"]; }]
  ]);
});

test("QCD running retains scale convention, matter content and perturbative limits", () => {
  rejects([
    ["scale derivative convention omitted", (d) => { claim(d, "D-phys-qcd-beta-function").limitations.shift(); }],
    ["pure Yang-Mills counterexample omitted", (d) => { claim(d, "D-phys-qcd-beta-function").limitations = claim(d, "D-phys-qcd-beta-function").limitations.filter((x) => !x.includes("n_f=0")); }],
    ["infrared extrapolation promoted to confinement", (d) => { claim(d, "D-phys-asymptotic-freedom").limitations = claim(d, "D-phys-asymptotic-freedom").limitations.filter((x) => !x.includes("proof of confinement")); }],
    ["unmatched flavor thresholds", (d) => { claim(d, "D-phys-qcd-flavor-matching").limitations.splice(1, 1); }],
    ["quarks become an occurrence prerequisite", (d) => { d.graph.relations.find((r) => r.id === "physics:beta-asymptotic-freedom").source = "phys:quark-fields"; }],
    ["renormalization scale becomes elapsed time", (d) => { d.graph.relations.find((r) => r.id === "physics:scale-beta").role = "scoped-operating-support"; }]
  ]);
});

test("CMS coupling inference keeps final uncertainty, preparation and published text", () => {
  rejects([
    ["one-sided scale envelope replaces final theory error", (d) => { claim(d, "M-phys-cms-alpha-mz").limitations = claim(d, "M-phys-cms-alpha-mz").limitations.filter((x) => !x.includes("Equation 6")); }],
    ["fit becomes independent proof of its model", (d) => { d.physics.comparisons.find((c) => c.id === "cms-alpha-mz").result = "conditional-support"; }],
    ["result borrows the TASSO preparation", (d) => { claim(d, "C-phys-cms-r32").contextIds = ["tasso1979"]; }],
    ["unreviewed author version", (d) => { d.graph.sources.find((s) => s.id === "cms2013-r32").url = "https://arxiv.org/abs/1304.7498v1"; }],
    ["theory paper replaces measured ratio", (d) => { d.physics.studies.find((s) => s.id === "cms2013-r32").sourceId = "gross1973"; }]
  ]);
});

test("CMS running comparison retains correlated data and conditional RGE conversion", () => {
  rejects([
    ["shared data called independent replications", (d) => { d.physics.comparisons.find((c) => c.id === "cms-running-consistency").assumptions.splice(2, 1); }],
    ["converted points called direct beta measurement", (d) => { claim(d, "M-phys-cms-running-consistency").limitations.splice(3, 1); }],
    ["constant coupling declared statistically rejected", (d) => { d.physics.comparisons.find((c) => c.id === "cms-running-consistency").result = "specified-alternative-disfavored"; }],
    ["ratio input omitted", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:cms-ratio-running"); }],
    ["reading becomes fit reproduction", (d) => { claim(d, "C-phys-cms-running-consistency").checkIds = ["bell-null-tail-2015"]; }]
  ]);
});

test("vacuum dispersion retains its state definition without a particle-creation or carrier edge", () => {
  rejects([
    ["variance as a measured occurrence", (d) => { entity(d, "phys:vacuum-observable-variance").kind = "scoped-process"; }],
    ["Casimir experiment substituted for vacuum definition", (d) => { claim(d, "D-phys-free-field-vacuum").contextIds = ["bressi2002"]; }],
    ["vacuum definition as ongoing maintenance", (d) => { d.graph.relations.find((r) => r.id === "physics:vacuum-variance").role = "scoped-operating-support"; }],
    ["particle count inferred from variance", (d) => { d.graph.relations.find((r) => r.id === "physics:vacuum-variance").carrier = structuredClone(d.graph.relations.find((r) => r.carrier).carrier); }],
    ["real scalar vacuum supplies an electromagnetic boundary model", (d) => { d.graph.relations.find((r) => r.id === "physics:vacuum-correlations").target = "phys:ideal-plate-casimir"; }]
  ]);
});

test("Casimir results preserve accepted corrections, selected fit range and calibration uncertainty", () => {
  rejects([
    ["uncorrected optical response", (d) => { claim(d, "C-phys-lamoreaux-casimir").citations = claim(d, "C-phys-lamoreaux-casimir").citations.filter((c) => c.sourceId !== "lambrecht2000"); }],
    ["reply counted as another experiment", (d) => { d.physics.studies.find((s) => s.id === "lamoreaux1997").sourceId = "lamoreaux2000-reply"; }],
    ["published correction substituted for original", (d) => { d.graph.sources.find((s) => s.id === "lamoreaux1998-note").doi = "10.1103/PhysRevLett.78.5"; }],
    ["nine-point fit loses selection", (d) => { d.physics.comparisons.find((c) => c.id === "bressi-coefficient").assumptions.shift(); }],
    ["voltage-sign conflict silently resolved", (d) => { claim(d, "M-phys-bressi-coefficient").limitations = claim(d, "M-phys-bressi-coefficient").limitations.filter((x) => !x.includes("sign remains unresolved")); }],
    ["sphere-plane force borrows parallel-plate preparation", (d) => { claim(d, "C-phys-lamoreaux-force").contextIds = ["bressi2002"]; }]
  ]);
});

test("hydrogen resonance, level separation and approximate theory remain distinct", () => {
  rejects([
    ["Bethe calculation as measured spectrum", (d) => { claim(d, "C-phys-lamb-resonance").citations[0].sourceId = "bethe1947"; }],
    ["theory replaces measurement input", (d) => { d.graph.relations.find((r) => r.id === "physics:lamb-resonance-lamb-separation").source = "phys:bethe-radiative-shift"; }],
    ["cutoff assumption omitted", (d) => { claim(d, "M-phys-lamb-radiative-interpretation").limitations = claim(d, "M-phys-lamb-radiative-interpretation").limitations.filter((x) => !x.includes("cutoff")); }],
    ["theoretical comparison loses its model", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:bethe-radiative-shift-lamb-radiative-interpretation"); }],
    ["approximate agreement becomes mechanism identification", (d) => { d.physics.comparisons.find((c) => c.id === "lamb-radiative-interpretation").result = "specified-alternative-disfavored"; }]
  ]);
});

function rejects(mutations) {
  for (const [label, mutate] of mutations) {
    const d = structuredClone(data);
    mutate(d);
    assert.throws(() => validateCanonicalSource(d), undefined, label);
  }
}

test("physical definitions cannot be promoted to measured occurrences or experiments", () => {
  rejects([
    ["theory as an observation", (d) => { claim(d, "D-phys-qcd").status = "publication-supported"; }],
    ["borrowed biological cohort", (d) => { claim(d, "D-phys-quark").contextIds = ["hanssen2001"]; }],
    ["field as a stable occurrence", (d) => { entity(d, "phys:quark-fields").kind = "scoped-structure"; }],
    ["reading as a checked proof", (d) => { claim(d, "D-phys-free-scalar").checkIds = ["operator-sign"]; }]
  ]);
});

test("physical classifications retain reviewed formal sources and cannot borrow unread passages", () => {
  rejects([
    ["catalogue as the only support", (d) => { claim(d, "D-phys-sm").citations = [{ sourceId: "legacy-1", locator: "/0", role: "supports", note: "Original assertion" }]; }],
    ["unread chapter", (d) => { claim(d, "D-phys-gluon").citations[0].locator = "Unreviewed experimental section"; }]
  ]);
});

test("representation dimensions do not become carrier counts or cross-domain causal edges", () => {
  rejects([
    ["experimental carrier copied to a gauge definition", (d) => {
      const r = d.graph.relations.find((r) => r.id === "physics:qcd-gluons");
      r.carrier = structuredClone(d.graph.relations.find((r) => r.carrier).carrier);
    }],
    ["classification as causation", (d) => { d.graph.relations.find((r) => r.id === "physics:qcd-quarks").kind = "functional-support"; }],
    ["unproved Level-0 bridge", (d) => { d.graph.relations.find((r) => r.id === "physics:framework-standard-model").source = "l0:carrier-promotion"; }]
  ]);
});

test("the proposed Level-0 origin keeps its unresolved status and source attribution", () => {
  rejects([
    ["derivation asserted", (d) => { claim(d, "C-phys-l0-bridge").status = "definition"; }],
    ["proposal as affirmative evidence", (d) => { claim(d, "C-phys-l0-bridge").citations[0].role = "supports"; }],
    ["carrier loses the quantum construction obligation", (d) => {
      const e = entity(d, "l0:carrier-promotion");
      e.claimIds = e.claimIds.filter((id) => id !== "C-phys-l0-bridge");
    }]
  ]);
});

test("particle results preserve the target preparation and the two-run lifetime combination", () => {
  rejects([
    ["AK-3 result assigned to quartz", (d) => { claim(d, "C-phys-mulan-r06").contextIds = ["webber2011-r07"]; }],
    ["combined lifetime loses one run", (d) => { claim(d, "C-phys-muon-lifetime").contextIds = ["webber2011-r06"]; }],
    ["two-run coupling relabelled as one experiment", (d) => { claim(d, "C-phys-mulan-fermi").status = "publication-supported"; }],
    ["jet result borrows scattering data", (d) => { claim(d, "C-phys-tasso-planarity").contextIds = ["breidenbach1969"]; }],
    ["quartz preparation replaces AK-3", (d) => { d.physics.studies[2].preparation = d.physics.studies[3].preparation; }]
  ]);
});

test("conditional physics interpretations cannot discard their measurement or theory assumptions", () => {
  rejects([
    ["scaling loses transverse dominance", (d) => { d.physics.comparisons[0].assumptions.pop(); }],
    ["graph coupling loses universality", (d) => { claim(d, "M-phys-mulan-fermi").limitations = ["Lifetime alone proves a universal coupling."]; }],
    ["universality asserted from its own conversion", (d) => { d.physics.comparisons[2].result = "conditional-support"; }],
    ["jet model loses its evidence claim", (d) => { d.physics.comparisons[1].claimIds = ["D-phys-gluon"]; }]
  ]);
});

test("physical measurement and interpretation connections cannot become generative necessities", () => {
  rejects([
    ["measurement as physical causation", (d) => { d.graph.relations.find((r) => r.id === "physics:slac-readout").kind = "functional-support"; }],
    ["QCD model becomes a temporal parent", (d) => { d.graph.relations.find((r) => r.id === "physics:qcd-jet-interpretation").role = "scoped-operating-support"; }],
    ["jets prove a Level-0 minimum", (d) => { d.graph.relations.find((r) => r.id === "physics:tasso-jets-inference").target = "l0:triad-configuration"; }],
    ["jet count becomes a carrier minimum", (d) => { d.graph.relations.find((r) => r.id === "physics:tasso-jets-readout").carrier = structuredClone(d.graph.relations.find((r) => r.carrier).carrier); }],
    ["combined result loses an input", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:mulan-r07-combination"); }]
  ]);
});

test("particle publication identity distinguishes reports, corrections and independent reproduction", () => {
  rejects([
    ["author report called the journal PDF", (d) => { d.physics.studies[1].readExtent = "full-primary-article"; }],
    ["correction treated as an independent measurement", (d) => { d.physics.studies[2].sourceId = "webber2011-note"; }],
    ["lecture replaces measured spectrum", (d) => { claim(d, "C-phys-slac-spectrum").citations[0].sourceId = "tong-qft-free-fields"; }],
    ["unread passage supports jets", (d) => { claim(d, "C-phys-tasso-three-jets").citations[0].locator = "Unreviewed spin measurement"; }],
    ["reading becomes numerical reproduction", (d) => { claim(d, "C-phys-mulan-r07").checkIds = ["operator-sign"]; }]
  ]);
});

test("bipartite definitions retain their partition and reviewed mathematical dependencies", () => {
  rejects([
    ["entanglement becomes a measured occurrence", (d) => { entity(d, "phys:bipartite-entanglement").kind = "scoped-structure"; }],
    ["mathematical partition borrows an experiment", (d) => { claim(d, "D-phys-bipartite-state").contextIds = ["hensen2015"]; }],
    ["unread POVM extension", (d) => { claim(d, "D-phys-werner-counterexample").citations[0].locator = "Proof for arbitrary positive-operator measurements"; }],
    ["QFT substituted as the entanglement premise", (d) => { d.graph.relations.find((r) => r.id === "physics:state-entanglement").source = "phys:quantum-field-framework"; }],
    ["partition dependency omitted", (d) => { d.graph.relations = d.graph.relations.filter((r) => r.id !== "physics:state-entanglement"); }],
    ["extra unreviewed formal dependency", (d) => {
      const r = structuredClone(d.graph.relations.find((r) => r.id === "physics:state-entanglement"));
      r.id = "physics:qft-entanglement";
      r.source = "phys:quantum-field-framework";
      d.graph.relations.push(r);
    }]
  ]);
});

test("Delft runs retain separate contexts, null-test outcomes and stopping assumptions", () => {
  rejects([
    ["second-run result assigned to the first run", (d) => { claim(d, "C-phys-hensen2016-correlations").contextIds = ["hensen2015"]; }],
    ["runs pooled into the second result", (d) => { claim(d, "C-phys-hensen2016-bell-test").contextIds.push("hensen2015"); }],
    ["nonrejection promoted to significant rejection", (d) => { d.physics.comparisons.find((c) => c.id === "hensen2016-bell").result = "specified-alternative-disfavored"; }],
    ["test loses independent stopping", (d) => { d.physics.comparisons.find((c) => c.id === "hensen2015-bell").assumptions.splice(2, 1); }],
    ["graph method loses independent stopping", (d) => { claim(d, "M-phys-hensen2016-bell-test").limitations.splice(2, 1); }],
    ["null definition becomes physical cause", (d) => { d.graph.relations.find((r) => r.id === "physics:hensen2015-null").kind = "functional-support"; }],
    ["published readout becomes raw-data reproduction", (d) => { claim(d, "C-phys-hensen2015-correlations").checkIds = ["operator-sign"]; }]
  ]);
});

test("Bell evidence cannot borrow a funding notice or unread supplementary proof", () => {
  rejects([
    ["funding notice replaces experiment", (d) => {
      const c = claim(d, "C-phys-hensen2015-bell-test");
      c.citations[0].sourceId = "chsh1970-note";
      c.citations[0].locator = d.graph.sources.find((s) => s.id === "chsh1970-note").review.locators[0];
    }],
    ["selected supplement represented as fully read", (d) => { d.physics.studies.find((s) => s.id === "hensen2015").readExtent = "full-primary-article-and-supplement"; }],
    ["second-run protocol uses first-run score", (d) => { d.graph.relations.find((r) => r.id === "physics:hensen2016-score").claimIds = ["M-phys-hensen2015-bell-test"]; }]
  ]);
});

test("deposited Bell arithmetic remains bound to its own data, claim and executable scope", () => {
  rejects([
    ["first run borrows second dataset", (d) => { claim(d, "C-phys-hensen2015-correlations").citations.find((c) => c.sourceId === "hensen2015-data").sourceId = "hensen2016-data"; }],
    ["null-tail check becomes a preparation check", (d) => { claim(d, "M-phys-hensen2015-readout").checkIds = ["bell-null-tail-2015"]; }],
    ["counting check becomes an entanglement proof", (d) => { claim(d, "D-phys-entanglement").checkIds = ["bell-event-table-2015"]; }],
    ["replay loses executable evidence", (d) => { const c = claim(d, "C-phys-hensen2016-bell-test"); c.citations = c.citations.filter((r) => r.sourceId !== "bell-data-verifier"); }],
    ["table replay claims complete acquisition", (d) => { d.graph.sources.find((s) => s.id === "hensen2016-data").review.extent = "complete-raw-acquisition-replay"; }]
  ]);
});
