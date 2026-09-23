import assert from "node:assert/strict";
import { MASS_CONSTRAINT_CHECKS, validateMassConstraintContracts } from "./mass-constraints.mjs";
import { DEUTERON_CHECKS, validateDeuteronContracts } from "./deuteron.mjs";

export const BELL_CHECKS = new Map([2015, 2016].flatMap((year) => [
  [`bell-event-table-${year}`, `C-phys-hensen${year}-correlations`],
  [`bell-null-tail-${year}`, `C-phys-hensen${year}-bell-test`]
]));

const definitions = new Map([
  ["phys:quantum-field-framework", "D-phys-qft"],
  ["phys:free-scalar-quantization", "D-phys-free-scalar"],
  ["phys:standard-model", "D-phys-sm"],
  ["phys:qcd", "D-phys-qcd"],
  ["phys:quark-fields", "D-phys-quark"],
  ["phys:lepton-fields", "D-phys-lepton"],
  ["phys:gluon-fields", "D-phys-gluon"],
  ["phys:bipartite-state", "D-phys-bipartite-state"],
  ["phys:bipartite-entanglement", "D-phys-entanglement"],
  ["phys:chsh-local-model", "D-phys-chsh-local"],
  ["phys:local-quantum-marginals", "D-phys-local-marginals"],
  ["phys:projective-bell-local-entanglement", "D-phys-werner-counterexample"],
  ["phys:free-field-vacuum", "D-phys-free-field-vacuum"],
  ["phys:vacuum-observable-variance", "D-phys-vacuum-observable-variance"],
  ["phys:vacuum-two-point-function", "D-phys-vacuum-two-point-function"],
  ["phys:ideal-plate-casimir", "D-phys-ideal-plate-casimir"],
  ["phys:casimir-material-model", "D-phys-casimir-material-model"],
  ["phys:bethe-radiative-shift", "D-phys-bethe-radiative-shift"],
  ["phys:qcd-renormalization-scale", "D-phys-qcd-renormalization-scale"],
  ["phys:qcd-beta-function", "D-phys-qcd-beta-function"],
  ["phys:asymptotic-freedom", "D-phys-asymptotic-freedom"],
  ["phys:qcd-flavor-matching", "D-phys-qcd-flavor-matching"],
  ["phys:lattice-gauge-formulation", "D-phys-lattice-gauge-formulation"],
  ["phys:wilson-loop", "D-phys-wilson-loop"],
  ["phys:static-string-tension", "D-phys-static-string-tension"],
  ["phys:lattice-continuum-limit", "D-phys-lattice-continuum-limit"],
  ["phys:lattice-strong-coupling", "D-phys-lattice-strong-coupling"],
  ["phys:static-light-string-basis", "D-phys-static-light-string-basis"],
  ["phys:two-state-string-mixing", "D-phys-two-state-string-mixing"],
  ["phys:fractional-charge-residual", "D-phys-fractional-charge-residual"],
  ["phys:hadron-correlator-mass", "D-phys-hadron-correlator-mass"],
  ["phys:hadron-mass-calibration", "D-phys-hadron-mass-calibration"],
  ["phys:finite-volume-hadron-resonance", "D-phys-finite-volume-hadron-resonance"],
  ["phys:exponential-survival", "D-phys-exponential-survival"],
  ["phys:ucn-storage-loss-model", "D-phys-ucn-storage-loss-model"],
  ["phys:qcd-qed-hadron-theory", "D-phys-qcd-qed-hadron-theory"],
  ["phys:isospin-mass-splitting", "D-phys-isospin-mass-splitting"],
  ["phys:qcd-qed-calibration", "D-phys-qcd-qed-calibration"],
  ["phys:qedl-volume-correction", "D-phys-qedl-volume-correction"],
  ["phys:qcd-qed-separation", "D-phys-qcd-qed-separation"],
  ["phys:nucleon-ratio-calibration", "D-phys-nucleon-ratio-calibration"],
  ["phys:bragg-wavelength", "D-phys-bragg-wavelength"],
  ["phys:ill25-calibration", "D-phys-ill25-calibration"],
  ["phys:capture-recoil-energy", "D-phys-capture-recoil-energy"],
  ["phys:binding-unit-conversion", "D-phys-binding-unit-conversion"],
  ["phys:hydrogen-isotope-mass-input", "D-phys-hydrogen-isotope-mass-input"],
  ["phys:neutron-mass-balance", "D-phys-neutron-mass-balance"],
  ["phys:ill25-adjusted-calibration", "D-phys-ill25-adjusted-calibration"],
  ["phys:penning-cyclotron-ratio", "D-phys-penning-cyclotron-ratio"],
  ["phys:penning-sof-protocol", "D-phys-penning-sof-protocol"],
  ["phys:ion-atom-mass-correction", "D-phys-ion-atom-mass-correction"],
  ["phys:atomic-mass-covariance", "D-phys-atomic-mass-covariance"],
  ["phys:liontrap-carbon-reference", "D-phys-liontrap-carbon-reference"],
  ["phys:penning-pna-fit", "D-phys-penning-pna-fit"],
  ["phys:penning-image-charge", "D-phys-penning-image-charge"],
  ["phys:penning-image-charge-geometry", "D-phys-penning-image-charge-geometry"],
  ["phys:penning-magnetron-control", "D-phys-penning-magnetron-control"],
  ["phys:rau-carbon-reference", "D-phys-rau-carbon-reference"],
  ["phys:molecular-ion-mass-balance", "D-phys-molecular-ion-mass-balance"],
  ["phys:rovibrational-state-boundary", "D-phys-rovibrational-state-boundary"],
  ["phys:silicon-lattice-transfer", "D-phys-silicon-lattice-transfer"],
  ["phys:coupled-cyclotron-readout", "D-phys-coupled-cyclotron-readout"],
  ["phys:state-conditional-mass", "D-phys-state-conditional-mass"],
  ["phys:mass-adjustment-constraint", "D-phys-mass-adjustment-constraint"]
]);

const formalDependencies = new Map([
  ["framework-scalar", ["quantum-field-framework", "free-scalar-quantization"]],
  ["framework-standard-model", ["quantum-field-framework", "standard-model"]],
  ["standard-model-qcd", ["standard-model", "qcd"]],
  ["qcd-quarks", ["qcd", "quark-fields"]],
  ["qcd-gluons", ["qcd", "gluon-fields"]],
  ["standard-model-leptons", ["standard-model", "lepton-fields"]],
  ["state-entanglement", ["bipartite-state", "bipartite-entanglement"]],
  ["state-marginals", ["bipartite-state", "local-quantum-marginals"]],
  ["entanglement-local-example", ["bipartite-entanglement", "projective-bell-local-entanglement"]],
  ["bell-local-example", ["chsh-local-model", "projective-bell-local-entanglement"]],
  ["scalar-vacuum", ["free-scalar-quantization", "free-field-vacuum"]],
  ["vacuum-variance", ["free-field-vacuum", "vacuum-observable-variance"]],
  ["vacuum-correlations", ["free-field-vacuum", "vacuum-two-point-function"]],
  ["qcd-scale", ["qcd", "qcd-renormalization-scale"]],
  ["scale-beta", ["qcd-renormalization-scale", "qcd-beta-function"]],
  ["beta-asymptotic-freedom", ["qcd-beta-function", "asymptotic-freedom"]],
  ["beta-flavor-matching", ["qcd-beta-function", "qcd-flavor-matching"]],
  ["quarks-flavor-matching", ["quark-fields", "qcd-flavor-matching"]],
  ["framework-lattice", ["quantum-field-framework", "lattice-gauge-formulation"]],
  ["lattice-wilson-loop", ["lattice-gauge-formulation", "wilson-loop"]],
  ["wilson-loop-string-tension", ["wilson-loop", "static-string-tension"]],
  ["lattice-continuum", ["lattice-gauge-formulation", "lattice-continuum-limit"]],
  ["lattice-strong-expansion", ["lattice-gauge-formulation", "lattice-strong-coupling"]],
  ["qcd-static-basis", ["qcd", "static-light-string-basis"]],
  ["lattice-static-basis", ["lattice-gauge-formulation", "static-light-string-basis"]],
  ["basis-string-mixing", ["static-light-string-basis", "two-state-string-mixing"]],
  ["qcd-hadron-correlator", ["qcd", "hadron-correlator-mass"]],
  ["lattice-hadron-correlator", ["lattice-gauge-formulation", "hadron-correlator-mass"]],
  ["qcd-hadron-calibration", ["qcd", "hadron-mass-calibration"]],
  ["correlator-hadron-resonance", ["hadron-correlator-mass", "finite-volume-hadron-resonance"]],
  ["survival-storage-loss", ["exponential-survival", "ucn-storage-loss-model"]],
  ["qcd-qcd-qed-hadron-theory", ["qcd", "qcd-qed-hadron-theory"]],
  ["standard-model-qcd-qed-hadron-theory", ["standard-model", "qcd-qed-hadron-theory"]],
  ["qcd-qed-hadron-theory-isospin-mass-splitting", ["qcd-qed-hadron-theory", "isospin-mass-splitting"]],
  ["qcd-qed-hadron-theory-qcd-qed-calibration", ["qcd-qed-hadron-theory", "qcd-qed-calibration"]],
  ["lattice-gauge-formulation-qedl-volume-correction", ["lattice-gauge-formulation", "qedl-volume-correction"]],
  ["qcd-qed-hadron-theory-qedl-volume-correction", ["qcd-qed-hadron-theory", "qedl-volume-correction"]],
  ["isospin-mass-splitting-qcd-qed-separation", ["isospin-mass-splitting", "qcd-qed-separation"]],
  ["isospin-ratio-calibration", ["isospin-mass-splitting", "nucleon-ratio-calibration"]],
  ["capture-recoil-energy-neutron-mass-balance", ["capture-recoil-energy", "neutron-mass-balance"]],
  ["binding-unit-conversion-neutron-mass-balance", ["binding-unit-conversion", "neutron-mass-balance"]],
  ["hydrogen-isotope-mass-input-neutron-mass-balance", ["hydrogen-isotope-mass-input", "neutron-mass-balance"]],
  ["penning-cyclotron-ratio-penning-sof-protocol", ["penning-cyclotron-ratio", "penning-sof-protocol"]],
  ["penning-cyclotron-ratio-ion-atom-mass-correction", ["penning-cyclotron-ratio", "ion-atom-mass-correction"]],
  ["ion-atom-mass-correction-atomic-mass-covariance", ["ion-atom-mass-correction", "atomic-mass-covariance"]],
  ["penning-cyclotron-ratio-liontrap-carbon-reference", ["penning-cyclotron-ratio", "liontrap-carbon-reference"]],
  ["ion-atom-mass-correction-liontrap-carbon-reference", ["ion-atom-mass-correction", "liontrap-carbon-reference"]],
  ["penning-cyclotron-ratio-penning-pna-fit", ["penning-cyclotron-ratio", "penning-pna-fit"]],
  ["penning-cyclotron-ratio-penning-image-charge", ["penning-cyclotron-ratio", "penning-image-charge"]],
  ["penning-image-charge-penning-image-charge-geometry", ["penning-image-charge", "penning-image-charge-geometry"]],
  ["penning-cyclotron-ratio-penning-magnetron-control", ["penning-cyclotron-ratio", "penning-magnetron-control"]],
  ["penning-cyclotron-ratio-rau-carbon-reference", ["penning-cyclotron-ratio", "rau-carbon-reference"]],
  ["ion-atom-mass-correction-molecular-ion-mass-balance", ["ion-atom-mass-correction", "molecular-ion-mass-balance"]],
  ["molecular-ion-mass-balance-rovibrational-state-boundary", ["molecular-ion-mass-balance", "rovibrational-state-boundary"]],
  ["bragg-wavelength-silicon-lattice-transfer", ["bragg-wavelength", "silicon-lattice-transfer"]],
  ["penning-cyclotron-ratio-coupled-cyclotron-readout", ["penning-cyclotron-ratio", "coupled-cyclotron-readout"]],
  ["rovibrational-state-boundary-state-conditional-mass", ["rovibrational-state-boundary", "state-conditional-mass"]],
  ["atomic-mass-covariance-mass-adjustment-constraint", ["atomic-mass-covariance", "mass-adjustment-constraint"]]
].map(([id, endpoints]) => [`physics:${id}`, endpoints.map((id) => `phys:${id}`)]));
const bellAssumptions = [
  "Use the declared event-ready selection, complete binary readout and spacetime timing conditions.",
  "Condition on the prior trial sequence; require local responses, independent setting generators and independence of the herald from those settings within the stated predictability bounds.",
  "Choose the sample stopping rule independently of observed outcomes; do not optimize the filter or significance after inspecting Bell results.",
  "Interpret P as a null-tail bound, not the probability that local realism is true."
];

const observations = [
  ["slac-spectrum", "C-phys-slac-spectrum", ["breidenbach1969"]],
  ["slac-scaling", "C-phys-slac-scaling", ["breidenbach1969"]],
  ["tasso-planarity", "C-phys-tasso-planarity", ["tasso1979"]],
  ["tasso-three-jets", "C-phys-tasso-three-jets", ["tasso1979"]],
  ["tasso-gluon-interpretation", "C-phys-tasso-gluon", ["tasso1979"]],
  ["mulan-lifetime-r06", "C-phys-mulan-r06", ["webber2011-r06"]],
  ["mulan-lifetime-r07", "C-phys-mulan-r07", ["webber2011-r07"]],
  ["muon-lifetime", "C-phys-muon-lifetime", ["webber2011-r06", "webber2011-r07"]],
  ["mulan-fermi-coupling", "C-phys-mulan-fermi", ["webber2011-r06", "webber2011-r07"]],
  ["hensen2015-correlations", "C-phys-hensen2015-correlations", ["hensen2015"]],
  ["hensen2015-bell-test", "C-phys-hensen2015-bell-test", ["hensen2015"]],
  ["hensen2016-correlations", "C-phys-hensen2016-correlations", ["hensen2016"]],
  ["hensen2016-bell-test", "C-phys-hensen2016-bell-test", ["hensen2016"]],
  ["lamoreaux-force", "C-phys-lamoreaux-force", ["lamoreaux1997"]],
  ["lamoreaux-casimir", "C-phys-lamoreaux-casimir", ["lamoreaux1997"]],
  ["bressi-frequency", "C-phys-bressi-frequency", ["bressi2002"]],
  ["bressi-coefficient", "C-phys-bressi-coefficient", ["bressi2002"]],
  ["lamb-resonance", "C-phys-lamb-resonance", ["lamb1947"]],
  ["lamb-separation", "C-phys-lamb-separation", ["lamb1947"]],
  ["lamb-radiative-interpretation", "C-phys-lamb-radiative-interpretation", ["lamb1947"]],
  ["cms-r32", "C-phys-cms-r32", ["cms2013-r32"]],
  ["cms-alpha-mz", "C-phys-cms-alpha-mz", ["cms2013-r32"]],
  ["cms-running-consistency", "C-phys-cms-running-consistency", ["cms2013-r32"]],
  ["creutz-wilson-loops", "C-phys-creutz-wilson-loops", ["creutz1980"]],
  ["creutz-string-fit", "C-phys-creutz-string-fit", ["creutz1980"]],
  ["creutz-scaling", "C-phys-creutz-scaling", ["creutz1980"]],
  ["bali-correlator-matrix", "C-phys-bali-correlator-matrix", ["bali2005"]],
  ["bali-wilson-loop-null", "C-phys-bali-wilson-loop-null", ["bali2005"]],
  ["bali-avoided-crossing", "C-phys-bali-avoided-crossing", ["bali2005"]],
  ["bali-mixing-coupling", "C-phys-bali-mixing-coupling", ["bali2005"]],
  ["lee-charge-null", "C-phys-lee-charge-null", ["lee2002"]],
  ["lee-abundance-limit", "C-phys-lee-abundance-limit", ["lee2002"]],
  ["durr-lattice-masses", "C-phys-durr-lattice-masses", ["durr2008"]],
  ["durr-hadron-spectrum", "C-phys-durr-hadron-spectrum", ["durr2008"]],
  ["durr-resonance-exclusion", "C-phys-durr-resonance-exclusion", ["durr2008"]],
  ["ucn2017-fits", "C-phys-ucn2017-fits", ["gonzalez2021-2017"]],
  ["ucn2018-fits", "C-phys-ucn2018-fits", ["gonzalez2021-2018"]],
  ["ucn2020-fits", "C-phys-ucn2020-fits", ["musedinovic2025-2020"]],
  ["ucn2021-fits", "C-phys-ucn2021-fits", ["musedinovic2025-2021"]],
  ["ucn2022-fits", "C-phys-ucn2022-fits", ["musedinovic2025-2022"]],
  ["ucn-al-loss", "C-phys-ucn-al-loss", ["gonzalez2021-al-control"]],
  ["ucn2018-uncleaned-loss", "C-phys-ucn2018-uncleaned-loss", ["gonzalez2021-uncleaned"]],
  ["ucn2022-cleaning-tail", "C-phys-ucn2022-cleaning-tail", ["musedinovic2025-uncleaned"]],
  ["ucn2022-segment-response", "C-phys-ucn2022-segment-response", ["musedinovic2025-2022"]],
  ["ucn2017-2018-lifetime", "C-phys-ucn2017-2018-lifetime", ["gonzalez2021-2017", "gonzalez2021-2018"]],
  ["ucn2020-2022-lifetime", "C-phys-ucn2020-2022-lifetime", ["musedinovic2025-2020", "musedinovic2025-2021", "musedinovic2025-2022"]],
  ["ucntau-global-lifetime", "C-phys-ucntau-global-lifetime", ["gonzalez2021-2017", "gonzalez2021-2018", "musedinovic2025-2020", "musedinovic2025-2021", "musedinovic2025-2022"]],
  ["borsanyi-lattice-splittings", "C-phys-borsanyi-lattice-splittings", ["borsanyi2015"]],
  ["borsanyi-kaon-volume", "C-phys-borsanyi-kaon-volume", ["borsanyi2015-volume"]],
  ["borsanyi-isospin-spectrum", "C-phys-borsanyi-isospin-spectrum", ["borsanyi2015"]],
  ["borsanyi-qcd-qed-components", "C-phys-borsanyi-qcd-qed-components", ["borsanyi2015"]],
  ["borsanyi-calibrated-ratio", "C-phys-borsanyi-calibrated-ratio", ["borsanyi2015"]],
  ["kessler1995-angle", "C-phys-kessler1995-angle", ["kessler1995"]],
  ["kessler1998-angle", "C-phys-kessler1998-angle", ["kessler1998"]],
  ["kessler-combined-angle", "C-phys-kessler-combined-angle", ["kessler1995", "kessler1998"]],
  ["kessler-capture-wavelength", "C-phys-kessler-capture-wavelength", ["kessler1995", "kessler1998"]],
  ["kessler-binding-energy", "C-phys-kessler-binding-energy", ["kessler1995", "kessler1998"]],
  ["kessler-neutron-mass", "C-phys-kessler-neutron-mass", ["kessler1995", "kessler1998"]],
  ["kessler-recalibrated-wavelength", "C-phys-kessler-recalibrated-wavelength", ["kessler1995", "kessler1998"]],
  ["natarajan-voltage-control", "C-phys-natarajan-voltage-control", ["natarajan1993-sof", "natarajan1993-pnp"]],
  ["natarajan-frequency-ratios", "C-phys-natarajan-frequency-ratios", ["natarajan1993-sof"]],
  ["natarajan-hydrogen-masses", "C-phys-natarajan-hydrogen-masses", ["natarajan1993-sof"]],
  ["difilippo-example-ratio", "C-phys-difilippo-example-ratio", ["difilippo1994"]],
  ["difilippo-hydrogen-masses", "C-phys-difilippo-hydrogen-masses", ["difilippo1994"]],
  ["difilippo-capture-input", "C-phys-difilippo-capture-input", ["difilippo1994", "kessler1995", "kessler1998"]],
  ["liontrap2017-proton", "C-phys-liontrap2017-proton", ["liontrap2017-pna"]],
  ["liontrap2019-proton", "C-phys-liontrap2019-proton", ["liontrap2017-pna", "liontrap2019-reanalysis"]],
  ["liontrap-correction-budget", "C-phys-liontrap-correction-budget", ["liontrap2017-pna", "liontrap2019-reanalysis"]],
  ["liontrap-double-dip", "C-phys-liontrap-double-dip", ["liontrap2019-double-dip", "liontrap2019-reanalysis"]],
  ["liontrap-oxygen", "C-phys-liontrap-oxygen", ["liontrap2019-oxygen", "liontrap2019-reanalysis"]],
  ["liontrap-carbon-control", "C-phys-liontrap-carbon-control", ["liontrap2019-carbon-control"]],
  ["schuh-magnetron-difference", "C-phys-schuh-magnetron-difference", ["schuh2019-magnetron"]],
  ["schuh-image-charge", "C-phys-schuh-image-charge", ["schuh2019-magnetron"]],
  ["schuh-geometry-response", "C-phys-schuh-geometry-response", ["schuh2019-geometry"]],
  ["schuh-ics-comparison", "C-phys-schuh-ics-comparison", ["schuh2019-magnetron", "schuh2019-geometry"]],
  ["rau-deuteron", "C-phys-rau-deuteron", ["rau2020-awg1", "rau2020-awg2"]],
  ["rau-hd-mass", "C-phys-rau-hd-mass", ["rau2020-hd"]],
  ["korobov-hd-energy", "C-phys-korobov-hd-energy", ["korobov2017-hd"]],
  ["rau-hd-closure", "C-phys-rau-hd-closure", ["rau2020-awg1", "rau2020-awg2", "rau2020-hd"]],
  ["rau-local-adjustment", "C-phys-rau-local-adjustment", ["rau2020-local-fit"]],
  ["rau-joint-adjustment", "C-phys-rau-joint-adjustment", ["rau2020-joint-fit"]],
  ["ill2017-spacing", "C-phys-ill2017-spacing", ["kessler2017-ill"]],
  ["rau-capture-binding", "C-phys-rau-capture-binding", ["rau2020-capture-recalibration"]],
  ["rau-neutron-mass", "C-phys-rau-neutron-mass", ["rau2020-joint-fit"]],
  ["fink-deuteron-ratio", "C-phys-fink-deuteron-ratio", ["fink2020-ratio"]],
  ["fink-proton-referenced-mass", "C-phys-fink-proton-referenced-mass", ["fink2020-ratio"]],
  ["rau-grouped-replay", "C-phys-rau-grouped-replay", ["rau2020-figure-replay"]],
  ["rau-printed-arithmetic", "C-phys-rau-printed-arithmetic", ["rau2020-figure-replay"]],
  ["fink2021-state-branches", "C-phys-fink2021-state-branches", ["fink2021-state-fit"]],
  ["fink2021-drive-extrapolation", "C-phys-fink2021-drive-extrapolation", ["fink2021-drive-control"]],
  ["fink2021-ground-ratio", "C-phys-fink2021-ground-ratio", ["fink2021-state-fit", "fink2021-drive-control"]],
  ["korobov-h2-energy", "C-phys-korobov-h2-energy", ["korobov2017-h2"]],
  ["fink2021-deuteron-ratio", "C-phys-fink2021-deuteron-ratio", ["fink2021-state-fit"]],
  ["fink2021-proton-mass", "C-phys-fink2021-proton-mass", ["fink2021-state-fit"]],
  ["codata2022-frequency-inputs", "C-phys-codata2022-frequency-inputs", ["codata2022-mass-inputs"]],
  ["codata2022-ion-covariance", "C-phys-codata2022-ion-covariance", ["codata2022-mass-inputs"]],
  ["codata2022-capture-equation", "C-phys-codata2022-capture-equation", ["codata2022-lattice"]],
  ["codata2022-ill-input", "C-phys-codata2022-ill-input", ["codata2022-lattice", "kessler2017-ill"]],
  ["mass-constraint-arithmetic", "C-phys-mass-constraint-arithmetic", ["mass-constraint-replay"]]
];
const contexts = [
  ["slac-context", "M-phys-slac-readout", ["breidenbach1969"]],
  ["tasso-context", "M-phys-tasso-readout", ["tasso1979"]],
  ["mulan-r06-context", "M-phys-mulan-r06", ["webber2011-r06"]],
  ["mulan-r07-context", "M-phys-mulan-r07", ["webber2011-r07"]],
  ["hensen2015-context", "M-phys-hensen2015-readout", ["hensen2015"]],
  ["hensen2016-context", "M-phys-hensen2016-readout", ["hensen2016"]],
  ["lamoreaux1997-context", "M-phys-lamoreaux1997-context", ["lamoreaux1997"]],
  ["bressi2002-context", "M-phys-bressi2002-context", ["bressi2002"]],
  ["lamb1947-context", "M-phys-lamb1947-context", ["lamb1947"]],
  ["cms2013-r32-context", "M-phys-cms2013-r32-context", ["cms2013-r32"]],
  ["creutz1980-context", "M-phys-creutz1980-context", ["creutz1980"]],
  ["bali2005-context", "M-phys-bali2005-context", ["bali2005"]],
  ["lee2002-context", "M-phys-lee2002-context", ["lee2002"]],
  ["durr2008-context", "M-phys-durr2008-context", ["durr2008"]],
  ["ucn2017-context", "M-phys-ucn2017-context", ["gonzalez2021-2017"]],
  ["ucn2018-context", "M-phys-ucn2018-context", ["gonzalez2021-2018"]],
  ["ucn-al-control-context", "M-phys-ucn-al-control-context", ["gonzalez2021-al-control"]],
  ["ucn2018-uncleaned-context", "M-phys-ucn2018-uncleaned-context", ["gonzalez2021-uncleaned"]],
  ["ucn2020-context", "M-phys-ucn2020-context", ["musedinovic2025-2020"]],
  ["ucn2021-context", "M-phys-ucn2021-context", ["musedinovic2025-2021"]],
  ["ucn2022-context", "M-phys-ucn2022-context", ["musedinovic2025-2022"]],
  ["ucn2022-uncleaned-context", "M-phys-ucn2022-uncleaned-context", ["musedinovic2025-uncleaned"]],
  ["borsanyi2015-context", "M-phys-borsanyi2015-context", ["borsanyi2015"]],
  ["borsanyi-volume-context", "M-phys-borsanyi-volume-context", ["borsanyi2015-volume"]],
  ["kessler1995-context", "M-phys-kessler1995-context", ["kessler1995"]],
  ["kessler1998-context", "M-phys-kessler1998-context", ["kessler1998"]],
  ["natarajan1993-sof-context", "M-phys-natarajan1993-sof-context", ["natarajan1993-sof"]],
  ["natarajan1993-pnp-context", "M-phys-natarajan1993-pnp-context", ["natarajan1993-pnp"]],
  ["difilippo1994-context", "M-phys-difilippo1994-context", ["difilippo1994"]],
  ["liontrap2017-pna-context", "M-phys-liontrap2017-pna-context", ["liontrap2017-pna"]],
  ["liontrap2019-reanalysis-context", "M-phys-liontrap2019-reanalysis-context", ["liontrap2019-reanalysis"]],
  ["liontrap2019-double-dip-context", "M-phys-liontrap2019-double-dip-context", ["liontrap2019-double-dip"]],
  ["liontrap2019-oxygen-context", "M-phys-liontrap2019-oxygen-context", ["liontrap2019-oxygen"]],
  ["liontrap2019-carbon-control-context", "M-phys-liontrap2019-carbon-control-context", ["liontrap2019-carbon-control"]],
  ["schuh2019-magnetron-context", "M-phys-schuh2019-magnetron-context", ["schuh2019-magnetron"]],
  ["schuh2019-geometry-context", "M-phys-schuh2019-geometry-context", ["schuh2019-geometry"]],
  ["rau2020-awg1-context", "M-phys-rau2020-awg1-context", ["rau2020-awg1"]],
  ["rau2020-awg2-context", "M-phys-rau2020-awg2-context", ["rau2020-awg2"]],
  ["rau2020-hd-context", "M-phys-rau2020-hd-context", ["rau2020-hd"]],
  ["rau2020-local-fit-context", "M-phys-rau2020-local-fit-context", ["rau2020-local-fit"]],
  ["rau2020-joint-fit-context", "M-phys-rau2020-joint-fit-context", ["rau2020-joint-fit"]],
  ["korobov2017-hd-context", "M-phys-korobov2017-hd-context", ["korobov2017-hd"]],
  ["kessler2017-ill-context", "M-phys-kessler2017-ill-context", ["kessler2017-ill"]],
  ["fink2020-ratio-context", "M-phys-fink2020-ratio-context", ["fink2020-ratio"]],
  ["rau2020-figure-replay-context", "M-phys-rau2020-figure-replay-context", ["rau2020-figure-replay"]],
  ["rau2020-capture-recalibration-context", "M-phys-rau2020-capture-recalibration-context", ["rau2020-capture-recalibration"]],
  ["fink2021-simultaneous-context", "M-phys-fink2021-simultaneous-context", ["fink2021-simultaneous"]],
  ["fink2021-state-fit-context", "M-phys-fink2021-state-fit-context", ["fink2021-state-fit"]],
  ["fink2021-drive-control-context", "M-phys-fink2021-drive-control-context", ["fink2021-drive-control"]],
  ["korobov2017-h2-context", "M-phys-korobov2017-h2-context", ["korobov2017-h2"]],
  ["codata2022-mass-inputs-context", "M-phys-codata2022-mass-inputs-context", ["codata2022-mass-inputs"]],
  ["codata2022-lattice-context", "M-phys-codata2022-lattice-context", ["codata2022-lattice"]],
  ["mass-constraint-replay-context", "M-phys-mass-constraint-replay-context", ["mass-constraint-replay"]]
];
const dependencies = [
  ["slac-readout", "slac-context", "slac-spectrum", "M-phys-slac-readout", "measurement-context"],
  ["tasso-planarity-readout", "tasso-context", "tasso-planarity", "M-phys-tasso-readout", "measurement-context"],
  ["tasso-jets-readout", "tasso-context", "tasso-three-jets", "M-phys-tasso-readout", "measurement-context"],
  ["mulan-r06-readout", "mulan-r06-context", "mulan-lifetime-r06", "M-phys-mulan-r06", "measurement-context"],
  ["mulan-r07-readout", "mulan-r07-context", "mulan-lifetime-r07", "M-phys-mulan-r07", "measurement-context"],
  ["slac-scaling", "slac-spectrum", "slac-scaling", "M-phys-slac-scaling", "interpretation-dependency"],
  ["tasso-planar-inference", "tasso-planarity", "tasso-gluon-interpretation", "M-phys-tasso-gluon", "interpretation-dependency"],
  ["tasso-jets-inference", "tasso-three-jets", "tasso-gluon-interpretation", "M-phys-tasso-gluon", "interpretation-dependency"],
  ["qcd-jet-interpretation", "qcd", "tasso-gluon-interpretation", "M-phys-tasso-gluon", "interpretation-dependency"],
  ["mulan-r06-combination", "mulan-lifetime-r06", "muon-lifetime", "M-phys-mulan-combination", "interpretation-dependency"],
  ["mulan-r07-combination", "mulan-lifetime-r07", "muon-lifetime", "M-phys-mulan-combination", "interpretation-dependency"],
  ["mulan-lifetime-coupling", "muon-lifetime", "mulan-fermi-coupling", "M-phys-mulan-fermi", "interpretation-dependency"],
  ["standard-model-muon-coupling", "standard-model", "mulan-fermi-coupling", "M-phys-mulan-fermi", "interpretation-dependency"],
  ...["hensen2015", "hensen2016"].flatMap((id) => [
    [`${id}-readout`, `${id}-context`, `${id}-correlations`, `M-phys-${id}-readout`, "measurement-context"],
    [`${id}-score`, `${id}-correlations`, `${id}-bell-test`, `M-phys-${id}-bell-test`, "interpretation-dependency"],
    [`${id}-null`, "chsh-local-model", `${id}-bell-test`, `M-phys-${id}-bell-test`, "interpretation-dependency"]
  ]),
  ["lamoreaux1997-readout", "lamoreaux1997-context", "lamoreaux-force", "M-phys-lamoreaux1997-context", "measurement-context"],
  ["bressi2002-readout", "bressi2002-context", "bressi-frequency", "M-phys-bressi2002-context", "measurement-context"],
  ["lamb1947-readout", "lamb1947-context", "lamb-resonance", "M-phys-lamb1947-context", "measurement-context"],
  ["lamoreaux-force-lamoreaux-casimir", "lamoreaux-force", "lamoreaux-casimir", "M-phys-lamoreaux-casimir", "interpretation-dependency"],
  ["casimir-material-model-lamoreaux-casimir", "casimir-material-model", "lamoreaux-casimir", "M-phys-lamoreaux-casimir", "interpretation-dependency"],
  ["bressi-frequency-bressi-coefficient", "bressi-frequency", "bressi-coefficient", "M-phys-bressi-coefficient", "interpretation-dependency"],
  ["ideal-plate-casimir-bressi-coefficient", "ideal-plate-casimir", "bressi-coefficient", "M-phys-bressi-coefficient", "interpretation-dependency"],
  ["lamb-resonance-lamb-separation", "lamb-resonance", "lamb-separation", "M-phys-lamb-separation", "interpretation-dependency"],
  ["lamb-separation-lamb-radiative-interpretation", "lamb-separation", "lamb-radiative-interpretation", "M-phys-lamb-radiative-interpretation", "interpretation-dependency"],
  ["bethe-radiative-shift-lamb-radiative-interpretation", "bethe-radiative-shift", "lamb-radiative-interpretation", "M-phys-lamb-radiative-interpretation", "interpretation-dependency"],
  ["cms-r32-readout", "cms2013-r32-context", "cms-r32", "M-phys-cms2013-r32-context", "measurement-context"],
  ["cms-ratio-coupling", "cms-r32", "cms-alpha-mz", "M-phys-cms-alpha-mz", "interpretation-dependency"],
  ["qcd-cms-coupling", "qcd", "cms-alpha-mz", "M-phys-cms-alpha-mz", "interpretation-dependency"],
  ["cms-ratio-running", "cms-r32", "cms-running-consistency", "M-phys-cms-running-consistency", "interpretation-dependency"],
  ["beta-cms-running", "qcd-beta-function", "cms-running-consistency", "M-phys-cms-running-consistency", "interpretation-dependency"],
  ["cms-coupling-reference", "cms-alpha-mz", "cms-running-consistency", "M-phys-cms-running-consistency", "interpretation-dependency"],
  ["creutz-computation", "creutz1980-context", "creutz-wilson-loops", "M-phys-creutz1980-context", "computation-context"],
  ["wilson-loop-creutz", "wilson-loop", "creutz-wilson-loops", "M-phys-creutz1980-context", "computation-context"],
  ["creutz-loop-fit", "creutz-wilson-loops", "creutz-string-fit", "M-phys-creutz-string-fit", "interpretation-dependency"],
  ["static-tension-creutz", "static-string-tension", "creutz-string-fit", "M-phys-creutz-string-fit", "interpretation-dependency"],
  ["creutz-fit-scaling", "creutz-string-fit", "creutz-scaling", "M-phys-creutz-scaling", "interpretation-dependency"],
  ["continuum-creutz", "lattice-continuum-limit", "creutz-scaling", "M-phys-creutz-scaling", "interpretation-dependency"],
  ["asymptotic-freedom-creutz", "asymptotic-freedom", "creutz-scaling", "M-phys-creutz-scaling", "interpretation-dependency"],
  ["bali-matrix", "bali2005-context", "bali-correlator-matrix", "M-phys-bali2005-context", "computation-context"],
  ["basis-bali-matrix", "static-light-string-basis", "bali-correlator-matrix", "M-phys-bali2005-context", "computation-context"],
  ["bali-loop-readout", "bali2005-context", "bali-wilson-loop-null", "M-phys-bali2005-context", "computation-context"],
  ["bali-matrix-spectrum", "bali-correlator-matrix", "bali-avoided-crossing", "M-phys-bali-avoided-crossing", "interpretation-dependency"],
  ["mixing-bali-spectrum", "two-state-string-mixing", "bali-avoided-crossing", "M-phys-bali-avoided-crossing", "interpretation-dependency"],
  ["bali-spectrum-coupling", "bali-avoided-crossing", "bali-mixing-coupling", "M-phys-bali-mixing-coupling", "interpretation-dependency"],
  ["mixing-bali-coupling", "two-state-string-mixing", "bali-mixing-coupling", "M-phys-bali-mixing-coupling", "interpretation-dependency"],
  ["lee-charge-readout", "lee2002-context", "lee-charge-null", "M-phys-lee2002-context", "measurement-context"],
  ["residual-lee-charge", "fractional-charge-residual", "lee-charge-null", "M-phys-lee2002-context", "measurement-context"],
  ["lee-null-bound", "lee-charge-null", "lee-abundance-limit", "M-phys-lee-abundance-limit", "interpretation-dependency"],
  ["durr-lattice-readout", "durr2008-context", "durr-lattice-masses", "M-phys-durr2008-context", "computation-context"],
  ["correlator-durr-readout", "hadron-correlator-mass", "durr-lattice-masses", "M-phys-durr2008-context", "computation-context"],
  ["durr-resonance-readout", "durr2008-context", "durr-resonance-exclusion", "M-phys-durr2008-context", "computation-context"],
  ["durr-masses-spectrum", "durr-lattice-masses", "durr-hadron-spectrum", "M-phys-durr-hadron-spectrum", "interpretation-dependency"],
  ["calibration-durr-spectrum", "hadron-mass-calibration", "durr-hadron-spectrum", "M-phys-durr-hadron-spectrum", "interpretation-dependency"],
  ["resonance-durr-spectrum", "finite-volume-hadron-resonance", "durr-hadron-spectrum", "M-phys-durr-hadron-spectrum", "interpretation-dependency"],
  ["continuum-durr-spectrum", "lattice-continuum-limit", "durr-hadron-spectrum", "M-phys-durr-hadron-spectrum", "interpretation-dependency"],
  ["resonance-durr-exclusion", "finite-volume-hadron-resonance", "durr-resonance-exclusion", "M-phys-durr-resonance-exclusion", "interpretation-dependency"],
  ["ucn2017-fits-readout", "ucn2017-context", "ucn2017-fits", "M-phys-ucn2017-context", "measurement-context"],
  ["ucn2018-fits-readout", "ucn2018-context", "ucn2018-fits", "M-phys-ucn2018-context", "measurement-context"],
  ["ucn2020-fits-readout", "ucn2020-context", "ucn2020-fits", "M-phys-ucn2020-context", "measurement-context"],
  ["ucn2021-fits-readout", "ucn2021-context", "ucn2021-fits", "M-phys-ucn2021-context", "measurement-context"],
  ["ucn2022-fits-readout", "ucn2022-context", "ucn2022-fits", "M-phys-ucn2022-context", "measurement-context"],
  ["ucn-al-loss-readout", "ucn-al-control-context", "ucn-al-loss", "M-phys-ucn-al-control-context", "measurement-context"],
  ["ucn2018-uncleaned-loss-readout", "ucn2018-uncleaned-context", "ucn2018-uncleaned-loss", "M-phys-ucn2018-uncleaned-context", "measurement-context"],
  ["ucn2022-cleaning-tail-readout", "ucn2022-uncleaned-context", "ucn2022-cleaning-tail", "M-phys-ucn2022-uncleaned-context", "measurement-context"],
  ["ucn2022-segment-response-readout", "ucn2022-context", "ucn2022-segment-response", "M-phys-ucn2022-context", "measurement-context"],
  ["loss-ucn2017", "ucn-storage-loss-model", "ucn2017-fits", "M-phys-ucn2017-context", "interpretation-dependency"],
  ["loss-ucn2018", "ucn-storage-loss-model", "ucn2018-fits", "M-phys-ucn2018-context", "interpretation-dependency"],
  ["loss-ucn2020", "ucn-storage-loss-model", "ucn2020-fits", "M-phys-ucn2020-context", "interpretation-dependency"],
  ["loss-ucn2021", "ucn-storage-loss-model", "ucn2021-fits", "M-phys-ucn2021-context", "interpretation-dependency"],
  ["loss-ucn2022", "ucn-storage-loss-model", "ucn2022-fits", "M-phys-ucn2022-context", "interpretation-dependency"],
  ["ucn2017-combination", "ucn2017-fits", "ucn2017-2018-lifetime", "M-phys-ucn2017-2018-lifetime", "interpretation-dependency"],
  ["ucn2018-combination", "ucn2018-fits", "ucn2017-2018-lifetime", "M-phys-ucn2017-2018-lifetime", "interpretation-dependency"],
  ["ucn2020-combination", "ucn2020-fits", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn2021-combination", "ucn2021-fits", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn2022-combination", "ucn2022-fits", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn-al-loss-ucn2017-2018-lifetime", "ucn-al-loss", "ucn2017-2018-lifetime", "M-phys-ucn2017-2018-lifetime", "interpretation-dependency"],
  ["ucn2018-uncleaned-loss-ucn2017-2018-lifetime", "ucn2018-uncleaned-loss", "ucn2017-2018-lifetime", "M-phys-ucn2017-2018-lifetime", "interpretation-dependency"],
  ["ucn2022-cleaning-tail-ucn2020-2022-lifetime", "ucn2022-cleaning-tail", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn2022-segment-response-ucn2020-2022-lifetime", "ucn2022-segment-response", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn2017-2018-lifetime-ucn2020-2022-lifetime", "ucn2017-2018-lifetime", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["ucn2017-fits-global", "ucn2017-fits", "ucntau-global-lifetime", "M-phys-ucntau-global-lifetime", "interpretation-dependency"],
  ["ucn2018-fits-global", "ucn2018-fits", "ucntau-global-lifetime", "M-phys-ucntau-global-lifetime", "interpretation-dependency"],
  ["ucn2020-2022-lifetime-global", "ucn2020-2022-lifetime", "ucntau-global-lifetime", "M-phys-ucntau-global-lifetime", "interpretation-dependency"],
  ["survival-ucn-al-loss", "ucn-storage-loss-model", "ucn-al-loss", "M-phys-ucn-al-loss", "interpretation-dependency"],
  ["survival-ucn2018-uncleaned-loss", "ucn-storage-loss-model", "ucn2018-uncleaned-loss", "M-phys-ucn2018-uncleaned-loss", "interpretation-dependency"],
  ["survival-ucn2022-segment-response", "ucn-storage-loss-model", "ucn2022-segment-response", "M-phys-ucn2022-segment-response", "interpretation-dependency"],
  ["survival-ucn2017-2018-lifetime", "ucn-storage-loss-model", "ucn2017-2018-lifetime", "M-phys-ucn2017-2018-lifetime", "interpretation-dependency"],
  ["survival-ucn2020-2022-lifetime", "ucn-storage-loss-model", "ucn2020-2022-lifetime", "M-phys-ucn2020-2022-lifetime", "interpretation-dependency"],
  ["survival-ucntau-global-lifetime", "ucn-storage-loss-model", "ucntau-global-lifetime", "M-phys-ucntau-global-lifetime", "interpretation-dependency"],
  ["borsanyi2015-context-borsanyi-lattice-splittings", "borsanyi2015-context", "borsanyi-lattice-splittings", "M-phys-borsanyi2015-context", "computation-context"],
  ["isospin-mass-splitting-borsanyi-lattice-splittings", "isospin-mass-splitting", "borsanyi-lattice-splittings", "M-phys-borsanyi2015-context", "computation-context"],
  ["borsanyi-volume-context-borsanyi-kaon-volume", "borsanyi-volume-context", "borsanyi-kaon-volume", "M-phys-borsanyi-volume-context", "computation-context"],
  ["qedl-volume-correction-borsanyi-kaon-volume", "qedl-volume-correction", "borsanyi-kaon-volume", "M-phys-borsanyi-kaon-volume", "interpretation-dependency"],
  ["borsanyi-lattice-splittings-borsanyi-isospin-spectrum", "borsanyi-lattice-splittings", "borsanyi-isospin-spectrum", "M-phys-borsanyi-isospin-spectrum", "interpretation-dependency"],
  ["qcd-qed-calibration-borsanyi-isospin-spectrum", "qcd-qed-calibration", "borsanyi-isospin-spectrum", "M-phys-borsanyi-isospin-spectrum", "interpretation-dependency"],
  ["qedl-volume-correction-borsanyi-isospin-spectrum", "qedl-volume-correction", "borsanyi-isospin-spectrum", "M-phys-borsanyi-isospin-spectrum", "interpretation-dependency"],
  ["borsanyi-kaon-volume-borsanyi-isospin-spectrum", "borsanyi-kaon-volume", "borsanyi-isospin-spectrum", "M-phys-borsanyi-isospin-spectrum", "interpretation-dependency"],
  ["isospin-mass-splitting-borsanyi-isospin-spectrum", "isospin-mass-splitting", "borsanyi-isospin-spectrum", "M-phys-borsanyi-isospin-spectrum", "interpretation-dependency"],
  ["borsanyi-isospin-spectrum-borsanyi-qcd-qed-components", "borsanyi-isospin-spectrum", "borsanyi-qcd-qed-components", "M-phys-borsanyi-qcd-qed-components", "interpretation-dependency"],
  ["qcd-qed-separation-borsanyi-qcd-qed-components", "qcd-qed-separation", "borsanyi-qcd-qed-components", "M-phys-borsanyi-qcd-qed-components", "interpretation-dependency"],
  ["qcd-qed-calibration-borsanyi-qcd-qed-components", "qcd-qed-calibration", "borsanyi-qcd-qed-components", "M-phys-borsanyi-qcd-qed-components", "interpretation-dependency"],
  ["borsanyi-qcd-qed-components-borsanyi-calibrated-ratio", "borsanyi-qcd-qed-components", "borsanyi-calibrated-ratio", "M-phys-borsanyi-calibrated-ratio", "interpretation-dependency"],
  ["qcd-qed-calibration-borsanyi-calibrated-ratio", "qcd-qed-calibration", "borsanyi-calibrated-ratio", "M-phys-borsanyi-calibrated-ratio", "interpretation-dependency"],
  ["extra-mass-ratio-calibration", "nucleon-ratio-calibration", "borsanyi-calibrated-ratio", "M-phys-borsanyi-calibrated-ratio", "interpretation-dependency"],
  ["kessler1995-context-kessler1995-angle", "kessler1995-context", "kessler1995-angle", "M-phys-kessler1995-context", "measurement-context"],
  ["kessler1998-context-kessler1998-angle", "kessler1998-context", "kessler1998-angle", "M-phys-kessler1998-context", "measurement-context"],
  ["kessler1995-angle-kessler-combined-angle", "kessler1995-angle", "kessler-combined-angle", "M-phys-kessler-combined-angle", "interpretation-dependency"],
  ["kessler1998-angle-kessler-combined-angle", "kessler1998-angle", "kessler-combined-angle", "M-phys-kessler-combined-angle", "interpretation-dependency"],
  ["bragg-wavelength-kessler-capture-wavelength", "bragg-wavelength", "kessler-capture-wavelength", "M-phys-kessler-capture-wavelength", "interpretation-dependency"],
  ["ill25-calibration-kessler-capture-wavelength", "ill25-calibration", "kessler-capture-wavelength", "M-phys-kessler-capture-wavelength", "interpretation-dependency"],
  ["kessler-combined-angle-kessler-capture-wavelength", "kessler-combined-angle", "kessler-capture-wavelength", "M-phys-kessler-capture-wavelength", "interpretation-dependency"],
  ["kessler-capture-wavelength-kessler-binding-energy", "kessler-capture-wavelength", "kessler-binding-energy", "M-phys-kessler-binding-energy", "interpretation-dependency"],
  ["capture-recoil-energy-kessler-binding-energy", "capture-recoil-energy", "kessler-binding-energy", "M-phys-kessler-binding-energy", "interpretation-dependency"],
  ["binding-unit-conversion-kessler-binding-energy", "binding-unit-conversion", "kessler-binding-energy", "M-phys-kessler-binding-energy", "interpretation-dependency"],
  ["kessler-binding-energy-kessler-neutron-mass", "kessler-binding-energy", "kessler-neutron-mass", "M-phys-kessler-neutron-mass", "interpretation-dependency"],
  ["hydrogen-isotope-mass-input-kessler-neutron-mass", "hydrogen-isotope-mass-input", "kessler-neutron-mass", "M-phys-kessler-neutron-mass", "interpretation-dependency"],
  ["neutron-mass-balance-kessler-neutron-mass", "neutron-mass-balance", "kessler-neutron-mass", "M-phys-kessler-neutron-mass", "interpretation-dependency"],
  ["bragg-wavelength-kessler-recalibrated-wavelength", "bragg-wavelength", "kessler-recalibrated-wavelength", "M-phys-kessler-recalibrated-wavelength", "interpretation-dependency"],
  ["ill25-adjusted-calibration-kessler-recalibrated-wavelength", "ill25-adjusted-calibration", "kessler-recalibrated-wavelength", "M-phys-kessler-recalibrated-wavelength", "interpretation-dependency"],
  ["kessler-combined-angle-kessler-recalibrated-wavelength", "kessler-combined-angle", "kessler-recalibrated-wavelength", "M-phys-kessler-recalibrated-wavelength", "interpretation-dependency"],
  ["natarajan1993-sof-context-natarajan-frequency-ratios", "natarajan1993-sof-context", "natarajan-frequency-ratios", "M-phys-natarajan1993-sof-context", "measurement-context"],
  ["difilippo1994-context-difilippo-example-ratio", "difilippo1994-context", "difilippo-example-ratio", "M-phys-difilippo1994-context", "measurement-context"],
  ["natarajan1993-sof-context-natarajan-voltage-control", "natarajan1993-sof-context", "natarajan-voltage-control", "M-phys-natarajan-voltage-control", "interpretation-dependency"],
  ["natarajan1993-pnp-context-natarajan-voltage-control", "natarajan1993-pnp-context", "natarajan-voltage-control", "M-phys-natarajan-voltage-control", "interpretation-dependency"],
  ["penning-cyclotron-ratio-natarajan-voltage-control", "penning-cyclotron-ratio", "natarajan-voltage-control", "M-phys-natarajan-voltage-control", "interpretation-dependency"],
  ["penning-sof-protocol-natarajan-voltage-control", "penning-sof-protocol", "natarajan-voltage-control", "M-phys-natarajan-voltage-control", "interpretation-dependency"],
  ["natarajan-frequency-ratios-natarajan-hydrogen-masses", "natarajan-frequency-ratios", "natarajan-hydrogen-masses", "M-phys-natarajan-hydrogen-masses", "interpretation-dependency"],
  ["ion-atom-mass-correction-natarajan-hydrogen-masses", "ion-atom-mass-correction", "natarajan-hydrogen-masses", "M-phys-natarajan-hydrogen-masses", "interpretation-dependency"],
  ["difilippo1994-context-difilippo-hydrogen-masses", "difilippo1994-context", "difilippo-hydrogen-masses", "M-phys-difilippo-hydrogen-masses", "interpretation-dependency"],
  ["ion-atom-mass-correction-difilippo-hydrogen-masses", "ion-atom-mass-correction", "difilippo-hydrogen-masses", "M-phys-difilippo-hydrogen-masses", "interpretation-dependency"],
  ["atomic-mass-covariance-difilippo-hydrogen-masses", "atomic-mass-covariance", "difilippo-hydrogen-masses", "M-phys-difilippo-hydrogen-masses", "interpretation-dependency"],
  ["difilippo-hydrogen-masses-difilippo-capture-input", "difilippo-hydrogen-masses", "difilippo-capture-input", "M-phys-difilippo-capture-input", "interpretation-dependency"],
  ["atomic-mass-covariance-difilippo-capture-input", "atomic-mass-covariance", "difilippo-capture-input", "M-phys-difilippo-capture-input", "interpretation-dependency"],
  ["hydrogen-isotope-mass-input-difilippo-capture-input", "hydrogen-isotope-mass-input", "difilippo-capture-input", "M-phys-difilippo-capture-input", "interpretation-dependency"],
  ["difilippo-capture-input-kessler-neutron-mass", "difilippo-capture-input", "kessler-neutron-mass", "M-phys-kessler-neutron-mass", "interpretation-dependency"],
  ["liontrap2017-pna-context-liontrap2017-proton", "liontrap2017-pna-context", "liontrap2017-proton", "M-phys-liontrap2017-proton", "interpretation-dependency"],
  ["liontrap-carbon-reference-liontrap2017-proton", "liontrap-carbon-reference", "liontrap2017-proton", "M-phys-liontrap2017-proton", "interpretation-dependency"],
  ["penning-pna-fit-liontrap2017-proton", "penning-pna-fit", "liontrap2017-proton", "M-phys-liontrap2017-proton", "interpretation-dependency"],
  ["penning-image-charge-liontrap2017-proton", "penning-image-charge", "liontrap2017-proton", "M-phys-liontrap2017-proton", "interpretation-dependency"],
  ["liontrap2017-pna-context-liontrap2019-proton", "liontrap2017-pna-context", "liontrap2019-proton", "M-phys-liontrap2019-proton", "interpretation-dependency"],
  ["liontrap2019-reanalysis-context-liontrap2019-proton", "liontrap2019-reanalysis-context", "liontrap2019-proton", "M-phys-liontrap2019-proton", "interpretation-dependency"],
  ["liontrap-carbon-reference-liontrap2019-proton", "liontrap-carbon-reference", "liontrap2019-proton", "M-phys-liontrap2019-proton", "interpretation-dependency"],
  ["penning-pna-fit-liontrap2019-proton", "penning-pna-fit", "liontrap2019-proton", "M-phys-liontrap2019-proton", "interpretation-dependency"],
  ["liontrap-correction-budget-liontrap2019-proton", "liontrap-correction-budget", "liontrap2019-proton", "M-phys-liontrap2019-proton", "interpretation-dependency"],
  ["liontrap2017-pna-context-liontrap-correction-budget", "liontrap2017-pna-context", "liontrap-correction-budget", "M-phys-liontrap-correction-budget", "interpretation-dependency"],
  ["liontrap2019-reanalysis-context-liontrap-correction-budget", "liontrap2019-reanalysis-context", "liontrap-correction-budget", "M-phys-liontrap-correction-budget", "interpretation-dependency"],
  ["penning-image-charge-liontrap-correction-budget", "penning-image-charge", "liontrap-correction-budget", "M-phys-liontrap-correction-budget", "interpretation-dependency"],
  ["liontrap2019-double-dip-context-liontrap-double-dip", "liontrap2019-double-dip-context", "liontrap-double-dip", "M-phys-liontrap-double-dip", "interpretation-dependency"],
  ["liontrap2019-proton-liontrap-double-dip", "liontrap2019-proton", "liontrap-double-dip", "M-phys-liontrap-double-dip", "interpretation-dependency"],
  ["liontrap-carbon-reference-liontrap-double-dip", "liontrap-carbon-reference", "liontrap-double-dip", "M-phys-liontrap-double-dip", "interpretation-dependency"],
  ["liontrap2019-oxygen-context-liontrap-oxygen", "liontrap2019-oxygen-context", "liontrap-oxygen", "M-phys-liontrap-oxygen", "interpretation-dependency"],
  ["liontrap2019-proton-liontrap-oxygen", "liontrap2019-proton", "liontrap-oxygen", "M-phys-liontrap-oxygen", "interpretation-dependency"],
  ["ion-atom-mass-correction-liontrap-oxygen", "ion-atom-mass-correction", "liontrap-oxygen", "M-phys-liontrap-oxygen", "interpretation-dependency"],
  ["liontrap2019-carbon-control-context-liontrap-carbon-control", "liontrap2019-carbon-control-context", "liontrap-carbon-control", "M-phys-liontrap-carbon-control", "interpretation-dependency"],
  ["liontrap-carbon-reference-liontrap-carbon-control", "liontrap-carbon-reference", "liontrap-carbon-control", "M-phys-liontrap-carbon-control", "interpretation-dependency"],
  ["schuh2019-magnetron-context-schuh-magnetron-difference", "schuh2019-magnetron-context", "schuh-magnetron-difference", "M-phys-schuh-magnetron-difference", "interpretation-dependency"],
  ["penning-magnetron-control-schuh-magnetron-difference", "penning-magnetron-control", "schuh-magnetron-difference", "M-phys-schuh-magnetron-difference", "interpretation-dependency"],
  ["schuh-magnetron-difference-schuh-image-charge", "schuh-magnetron-difference", "schuh-image-charge", "M-phys-schuh-image-charge", "interpretation-dependency"],
  ["penning-image-charge-schuh-image-charge", "penning-image-charge", "schuh-image-charge", "M-phys-schuh-image-charge", "interpretation-dependency"],
  ["liontrap2017-proton-schuh-image-charge", "liontrap2017-proton", "schuh-image-charge", "M-phys-schuh-image-charge", "interpretation-dependency"],
  ["schuh2019-geometry-context-schuh-geometry-response", "schuh2019-geometry-context", "schuh-geometry-response", "M-phys-schuh-geometry-response", "interpretation-dependency"],
  ["penning-image-charge-geometry-schuh-geometry-response", "penning-image-charge-geometry", "schuh-geometry-response", "M-phys-schuh-geometry-response", "interpretation-dependency"],
  ["schuh-image-charge-schuh-ics-comparison", "schuh-image-charge", "schuh-ics-comparison", "M-phys-schuh-ics-comparison", "interpretation-dependency"],
  ["schuh-geometry-response-schuh-ics-comparison", "schuh-geometry-response", "schuh-ics-comparison", "M-phys-schuh-ics-comparison", "interpretation-dependency"],
  ["penning-image-charge-schuh-ics-comparison", "penning-image-charge", "schuh-ics-comparison", "M-phys-schuh-ics-comparison", "interpretation-dependency"],
  ["rau2020-awg1-context-rau-deuteron", "rau2020-awg1-context", "rau-deuteron", "M-phys-rau-deuteron", "interpretation-dependency"],
  ["rau2020-awg2-context-rau-deuteron", "rau2020-awg2-context", "rau-deuteron", "M-phys-rau-deuteron", "interpretation-dependency"],
  ["rau-carbon-reference-rau-deuteron", "rau-carbon-reference", "rau-deuteron", "M-phys-rau-deuteron", "interpretation-dependency"],
  ["penning-pna-fit-rau-deuteron", "penning-pna-fit", "rau-deuteron", "M-phys-rau-deuteron", "interpretation-dependency"],
  ["penning-image-charge-rau-deuteron", "penning-image-charge", "rau-deuteron", "M-phys-rau-deuteron", "interpretation-dependency"],
  ["rau2020-hd-context-rau-hd-mass", "rau2020-hd-context", "rau-hd-mass", "M-phys-rau-hd-mass", "interpretation-dependency"],
  ["rau-carbon-reference-rau-hd-mass", "rau-carbon-reference", "rau-hd-mass", "M-phys-rau-hd-mass", "interpretation-dependency"],
  ["penning-pna-fit-rau-hd-mass", "penning-pna-fit", "rau-hd-mass", "M-phys-rau-hd-mass", "interpretation-dependency"],
  ["rovibrational-state-boundary-rau-hd-mass", "rovibrational-state-boundary", "rau-hd-mass", "M-phys-rau-hd-mass", "interpretation-dependency"],
  ["korobov2017-hd-context-korobov-hd-energy", "korobov2017-hd-context", "korobov-hd-energy", "M-phys-korobov-hd-energy", "interpretation-dependency"],
  ["molecular-ion-mass-balance-korobov-hd-energy", "molecular-ion-mass-balance", "korobov-hd-energy", "M-phys-korobov-hd-energy", "interpretation-dependency"],
  ["rau-deuteron-rau-hd-closure", "rau-deuteron", "rau-hd-closure", "M-phys-rau-hd-closure", "interpretation-dependency"],
  ["rau-hd-mass-rau-hd-closure", "rau-hd-mass", "rau-hd-closure", "M-phys-rau-hd-closure", "interpretation-dependency"],
  ["liontrap2019-proton-rau-hd-closure", "liontrap2019-proton", "rau-hd-closure", "M-phys-rau-hd-closure", "interpretation-dependency"],
  ["korobov-hd-energy-rau-hd-closure", "korobov-hd-energy", "rau-hd-closure", "M-phys-rau-hd-closure", "interpretation-dependency"],
  ["molecular-ion-mass-balance-rau-hd-closure", "molecular-ion-mass-balance", "rau-hd-closure", "M-phys-rau-hd-closure", "interpretation-dependency"],
  ["rau2020-local-fit-context-rau-local-adjustment", "rau2020-local-fit-context", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["rau-deuteron-rau-local-adjustment", "rau-deuteron", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["rau-hd-mass-rau-local-adjustment", "rau-hd-mass", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["liontrap2019-proton-rau-local-adjustment", "liontrap2019-proton", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["korobov-hd-energy-rau-local-adjustment", "korobov-hd-energy", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["atomic-mass-covariance-rau-local-adjustment", "atomic-mass-covariance", "rau-local-adjustment", "M-phys-rau-local-adjustment", "interpretation-dependency"],
  ["rau2020-joint-fit-context-rau-joint-adjustment", "rau2020-joint-fit-context", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["rau-deuteron-rau-joint-adjustment", "rau-deuteron", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["rau-hd-mass-rau-joint-adjustment", "rau-hd-mass", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["liontrap2019-proton-rau-joint-adjustment", "liontrap2019-proton", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["korobov-hd-energy-rau-joint-adjustment", "korobov-hd-energy", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["fink-deuteron-ratio-rau-joint-adjustment", "fink-deuteron-ratio", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["atomic-mass-covariance-rau-joint-adjustment", "atomic-mass-covariance", "rau-joint-adjustment", "M-phys-rau-joint-adjustment", "interpretation-dependency"],
  ["kessler2017-ill-context-ill2017-spacing", "kessler2017-ill-context", "ill2017-spacing", "M-phys-ill2017-spacing", "interpretation-dependency"],
  ["silicon-lattice-transfer-ill2017-spacing", "silicon-lattice-transfer", "ill2017-spacing", "M-phys-ill2017-spacing", "interpretation-dependency"],
  ["kessler-recalibrated-wavelength-rau-capture-binding", "kessler-recalibrated-wavelength", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["ill2017-spacing-rau-capture-binding", "ill2017-spacing", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["bragg-wavelength-rau-capture-binding", "bragg-wavelength", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["capture-recoil-energy-rau-capture-binding", "capture-recoil-energy", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["binding-unit-conversion-rau-capture-binding", "binding-unit-conversion", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["rau-deuteron-rau-capture-binding", "rau-deuteron", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["rau-joint-adjustment-rau-neutron-mass", "rau-joint-adjustment", "rau-neutron-mass", "M-phys-rau-neutron-mass", "interpretation-dependency"],
  ["rau-capture-binding-rau-neutron-mass", "rau-capture-binding", "rau-neutron-mass", "M-phys-rau-neutron-mass", "interpretation-dependency"],
  ["neutron-mass-balance-rau-neutron-mass", "neutron-mass-balance", "rau-neutron-mass", "M-phys-rau-neutron-mass", "interpretation-dependency"],
  ["fink2020-ratio-context-fink-deuteron-ratio", "fink2020-ratio-context", "fink-deuteron-ratio", "M-phys-fink-deuteron-ratio", "interpretation-dependency"],
  ["rovibrational-state-boundary-fink-deuteron-ratio", "rovibrational-state-boundary", "fink-deuteron-ratio", "M-phys-fink-deuteron-ratio", "interpretation-dependency"],
  ["molecular-ion-mass-balance-fink-deuteron-ratio", "molecular-ion-mass-balance", "fink-deuteron-ratio", "M-phys-fink-deuteron-ratio", "interpretation-dependency"],
  ["penning-cyclotron-ratio-fink-deuteron-ratio", "penning-cyclotron-ratio", "fink-deuteron-ratio", "M-phys-fink-deuteron-ratio", "interpretation-dependency"],
  ["fink-deuteron-ratio-fink-proton-referenced-mass", "fink-deuteron-ratio", "fink-proton-referenced-mass", "M-phys-fink-proton-referenced-mass", "interpretation-dependency"],
  ["liontrap2019-proton-fink-proton-referenced-mass", "liontrap2019-proton", "fink-proton-referenced-mass", "M-phys-fink-proton-referenced-mass", "interpretation-dependency"],
  ["rau2020-figure-replay-context-rau-grouped-replay", "rau2020-figure-replay-context", "rau-grouped-replay", "M-phys-rau-grouped-replay", "interpretation-dependency"],
  ["rau2020-awg1-context-rau-grouped-replay", "rau2020-awg1-context", "rau-grouped-replay", "M-phys-rau-grouped-replay", "interpretation-dependency"],
  ["rau2020-awg2-context-rau-grouped-replay", "rau2020-awg2-context", "rau-grouped-replay", "M-phys-rau-grouped-replay", "interpretation-dependency"],
  ["rau2020-hd-context-rau-grouped-replay", "rau2020-hd-context", "rau-grouped-replay", "M-phys-rau-grouped-replay", "interpretation-dependency"],
  ["penning-pna-fit-rau-grouped-replay", "penning-pna-fit", "rau-grouped-replay", "M-phys-rau-grouped-replay", "interpretation-dependency"],
  ["rau2020-figure-replay-context-rau-printed-arithmetic", "rau2020-figure-replay-context", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["korobov-hd-energy-rau-printed-arithmetic", "korobov-hd-energy", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["ill2017-spacing-rau-printed-arithmetic", "ill2017-spacing", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["kessler-recalibrated-wavelength-rau-printed-arithmetic", "kessler-recalibrated-wavelength", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["rau-hd-mass-rau-printed-arithmetic", "rau-hd-mass", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["rau-deuteron-rau-printed-arithmetic", "rau-deuteron", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["liontrap2019-proton-rau-printed-arithmetic", "liontrap2019-proton", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["capture-recoil-energy-rau-printed-arithmetic", "capture-recoil-energy", "rau-printed-arithmetic", "M-phys-rau-printed-arithmetic", "interpretation-dependency"],
  ["rau2020-capture-recalibration-context-rau-capture-binding", "rau2020-capture-recalibration-context", "rau-capture-binding", "M-phys-rau-capture-binding", "interpretation-dependency"],
  ["fink2021-state-fit-context-fink2021-state-branches", "fink2021-state-fit-context", "fink2021-state-branches", "M-phys-fink2021-state-branches", "interpretation-dependency"],
  ["fink2021-simultaneous-context-fink2021-state-branches", "fink2021-simultaneous-context", "fink2021-state-branches", "M-phys-fink2021-state-branches", "interpretation-dependency"],
  ["state-conditional-mass-fink2021-state-branches", "state-conditional-mass", "fink2021-state-branches", "M-phys-fink2021-state-branches", "interpretation-dependency"],
  ["rovibrational-state-boundary-fink2021-state-branches", "rovibrational-state-boundary", "fink2021-state-branches", "M-phys-fink2021-state-branches", "interpretation-dependency"],
  ["fink2021-drive-control-context-fink2021-drive-extrapolation", "fink2021-drive-control-context", "fink2021-drive-extrapolation", "M-phys-fink2021-drive-extrapolation", "interpretation-dependency"],
  ["fink2021-simultaneous-context-fink2021-drive-extrapolation", "fink2021-simultaneous-context", "fink2021-drive-extrapolation", "M-phys-fink2021-drive-extrapolation", "interpretation-dependency"],
  ["coupled-cyclotron-readout-fink2021-drive-extrapolation", "coupled-cyclotron-readout", "fink2021-drive-extrapolation", "M-phys-fink2021-drive-extrapolation", "interpretation-dependency"],
  ["fink2021-state-branches-fink2021-ground-ratio", "fink2021-state-branches", "fink2021-ground-ratio", "M-phys-fink2021-ground-ratio", "interpretation-dependency"],
  ["fink2021-drive-extrapolation-fink2021-ground-ratio", "fink2021-drive-extrapolation", "fink2021-ground-ratio", "M-phys-fink2021-ground-ratio", "interpretation-dependency"],
  ["coupled-cyclotron-readout-fink2021-ground-ratio", "coupled-cyclotron-readout", "fink2021-ground-ratio", "M-phys-fink2021-ground-ratio", "interpretation-dependency"],
  ["state-conditional-mass-fink2021-ground-ratio", "state-conditional-mass", "fink2021-ground-ratio", "M-phys-fink2021-ground-ratio", "interpretation-dependency"],
  ["korobov2017-h2-context-korobov-h2-energy", "korobov2017-h2-context", "korobov-h2-energy", "M-phys-korobov-h2-energy", "interpretation-dependency"],
  ["molecular-ion-mass-balance-korobov-h2-energy", "molecular-ion-mass-balance", "korobov-h2-energy", "M-phys-korobov-h2-energy", "interpretation-dependency"],
  ["fink2021-ground-ratio-fink2021-deuteron-ratio", "fink2021-ground-ratio", "fink2021-deuteron-ratio", "M-phys-fink2021-deuteron-ratio", "interpretation-dependency"],
  ["korobov-h2-energy-fink2021-deuteron-ratio", "korobov-h2-energy", "fink2021-deuteron-ratio", "M-phys-fink2021-deuteron-ratio", "interpretation-dependency"],
  ["molecular-ion-mass-balance-fink2021-deuteron-ratio", "molecular-ion-mass-balance", "fink2021-deuteron-ratio", "M-phys-fink2021-deuteron-ratio", "interpretation-dependency"],
  ["state-conditional-mass-fink2021-deuteron-ratio", "state-conditional-mass", "fink2021-deuteron-ratio", "M-phys-fink2021-deuteron-ratio", "interpretation-dependency"],
  ["fink2021-deuteron-ratio-fink2021-proton-mass", "fink2021-deuteron-ratio", "fink2021-proton-mass", "M-phys-fink2021-proton-mass", "interpretation-dependency"],
  ["rau-deuteron-fink2021-proton-mass", "rau-deuteron", "fink2021-proton-mass", "M-phys-fink2021-proton-mass", "interpretation-dependency"],
  ["atomic-mass-covariance-fink2021-proton-mass", "atomic-mass-covariance", "fink2021-proton-mass", "M-phys-fink2021-proton-mass", "interpretation-dependency"],
  ["codata2022-mass-inputs-context-codata2022-frequency-inputs", "codata2022-mass-inputs-context", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["liontrap2019-proton-codata2022-frequency-inputs", "liontrap2019-proton", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["rau-deuteron-codata2022-frequency-inputs", "rau-deuteron", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["rau-hd-mass-codata2022-frequency-inputs", "rau-hd-mass", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["fink2021-ground-ratio-codata2022-frequency-inputs", "fink2021-ground-ratio", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["codata2022-ion-covariance-codata2022-frequency-inputs", "codata2022-ion-covariance", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["mass-adjustment-constraint-codata2022-frequency-inputs", "mass-adjustment-constraint", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["korobov-h2-energy-codata2022-frequency-inputs", "korobov-h2-energy", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["korobov-hd-energy-codata2022-frequency-inputs", "korobov-hd-energy", "codata2022-frequency-inputs", "M-phys-codata2022-frequency-inputs", "interpretation-dependency"],
  ["codata2022-mass-inputs-context-codata2022-ion-covariance", "codata2022-mass-inputs-context", "codata2022-ion-covariance", "M-phys-codata2022-ion-covariance", "interpretation-dependency"],
  ["ion-atom-mass-correction-codata2022-ion-covariance", "ion-atom-mass-correction", "codata2022-ion-covariance", "M-phys-codata2022-ion-covariance", "interpretation-dependency"],
  ["atomic-mass-covariance-codata2022-ion-covariance", "atomic-mass-covariance", "codata2022-ion-covariance", "M-phys-codata2022-ion-covariance", "interpretation-dependency"],
  ["codata2022-lattice-context-codata2022-capture-equation", "codata2022-lattice-context", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["neutron-mass-balance-codata2022-capture-equation", "neutron-mass-balance", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["bragg-wavelength-codata2022-capture-equation", "bragg-wavelength", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["kessler-combined-angle-codata2022-capture-equation", "kessler-combined-angle", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["capture-recoil-energy-codata2022-capture-equation", "capture-recoil-energy", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["silicon-lattice-transfer-codata2022-capture-equation", "silicon-lattice-transfer", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["mass-adjustment-constraint-codata2022-capture-equation", "mass-adjustment-constraint", "codata2022-capture-equation", "M-phys-codata2022-capture-equation", "interpretation-dependency"],
  ["codata2022-lattice-context-codata2022-ill-input", "codata2022-lattice-context", "codata2022-ill-input", "M-phys-codata2022-ill-input", "interpretation-dependency"],
  ["ill2017-spacing-codata2022-ill-input", "ill2017-spacing", "codata2022-ill-input", "M-phys-codata2022-ill-input", "interpretation-dependency"],
  ["silicon-lattice-transfer-codata2022-ill-input", "silicon-lattice-transfer", "codata2022-ill-input", "M-phys-codata2022-ill-input", "interpretation-dependency"],
  ["mass-constraint-replay-context-mass-constraint-arithmetic", "mass-constraint-replay-context", "mass-constraint-arithmetic", "M-phys-mass-constraint-arithmetic", "interpretation-dependency"],
  ["fink2021-ground-ratio-mass-constraint-arithmetic", "fink2021-ground-ratio", "mass-constraint-arithmetic", "M-phys-mass-constraint-arithmetic", "interpretation-dependency"],
  ["fink2021-deuteron-ratio-mass-constraint-arithmetic", "fink2021-deuteron-ratio", "mass-constraint-arithmetic", "M-phys-mass-constraint-arithmetic", "interpretation-dependency"],
  ["rau-deuteron-mass-constraint-arithmetic", "rau-deuteron", "mass-constraint-arithmetic", "M-phys-mass-constraint-arithmetic", "interpretation-dependency"],
  ["korobov-h2-energy-mass-constraint-arithmetic", "korobov-h2-energy", "mass-constraint-arithmetic", "M-phys-mass-constraint-arithmetic", "interpretation-dependency"]
];

const inferenceSources = new Map([
  [
    "C-phys-lamoreaux-casimir",
    [
      "lamoreaux1998-note",
      "lambrecht2000",
      "lamoreaux2000-reply"
    ]
  ],
  [
    "M-phys-lamoreaux-casimir",
    [
      "lamoreaux1998-note",
      "lambrecht2000"
    ]
  ],
  [
    "C-phys-lamb-radiative-interpretation",
    [
      "bethe1947"
    ]
  ],
  [
    "M-phys-lamb-radiative-interpretation",
    [
      "bethe1947"
    ]
  ],
  ["C-phys-kessler-capture-wavelength", ["dewey2006-capture", "mohr2025-neutron"]],
  ["C-phys-kessler-binding-energy", ["dewey2006-capture", "mohr2025-neutron"]],
  ["C-phys-kessler-neutron-mass", ["dewey2006-capture", "mohr2025-neutron", "difilippo1994"]],
  ["C-phys-kessler-recalibrated-wavelength", ["dewey2006-capture", "mohr2025-neutron"]],
  ["M-phys-kessler-capture-wavelength", ["dewey2006-capture", "mohr2025-neutron"]],
  ["M-phys-kessler-binding-energy", ["dewey2006-capture", "mohr2025-neutron"]],
  ["M-phys-kessler-neutron-mass", ["dewey2006-capture", "mohr2025-neutron", "difilippo1994"]],
  ["M-phys-kessler-recalibrated-wavelength", ["dewey2006-capture", "mohr2025-neutron"]],
  ["C-phys-schuh-image-charge", ["heisse2017"]],
  ["C-phys-schuh-ics-comparison", ["heisse2017"]],
  ["M-phys-schuh-image-charge", ["heisse2017"]],
  ["M-phys-schuh-ics-comparison", ["heisse2017"]],
  ["C-phys-rau-deuteron", ["rau2020-fig4-data"]],
  ["C-phys-rau-hd-closure", ["heisse2019", "korobov2017"]],
  ["C-phys-rau-local-adjustment", ["heisse2019", "korobov2017"]],
  ["C-phys-rau-joint-adjustment", ["fink2020"]],
  ["C-phys-rau-capture-binding", ["kessler2017"]],
  ["C-phys-fink-proton-referenced-mass", ["heisse2019"]],
  ["C-phys-rau-grouped-replay", ["rau2020-fig3-data", "rau2020-edfig1-data", "rau2020-fig4-data", "deuteron-data-verifier"]],
  ["C-phys-rau-printed-arithmetic", ["korobov2017", "kessler2017", "deuteron-data-verifier"]],
  ["M-phys-rau-deuteron", ["rau2020-fig4-data"]],
  ["M-phys-rau-hd-closure", ["heisse2019", "korobov2017"]],
  ["M-phys-rau-local-adjustment", ["heisse2019", "korobov2017"]],
  ["M-phys-rau-joint-adjustment", ["fink2020"]],
  ["M-phys-rau-capture-binding", ["kessler2017"]],
  ["M-phys-fink-proton-referenced-mass", ["heisse2019"]],
  ["M-phys-rau-grouped-replay", ["rau2020-fig3-data", "rau2020-edfig1-data", "rau2020-fig4-data", "deuteron-data-verifier"]],
  ["M-phys-rau-printed-arithmetic", ["korobov2017", "kessler2017", "deuteron-data-verifier"]],
  ["M-phys-rau2020-capture-recalibration-context", ["kessler2017"]],
  ["C-phys-fink2021-deuteron-ratio", ["korobov2017"]],
  ["M-phys-fink2021-deuteron-ratio", ["korobov2017"]],
  ["C-phys-fink2021-proton-mass", ["rau2020"]],
  ["M-phys-fink2021-proton-mass", ["rau2020"]],
  ["C-phys-codata2022-frequency-inputs", ["heisse2019", "rau2020", "fink2021"]],
  ["M-phys-codata2022-frequency-inputs", ["heisse2019", "rau2020", "fink2021"]],
  ["C-phys-codata2022-ill-input", ["tiesinga2021-lattice"]],
  ["M-phys-codata2022-ill-input", ["tiesinga2021-lattice"]],
  ["C-phys-mass-constraint-arithmetic", ["korobov2017", "rau2020", "mass-constraint-verifier"]],
  ["M-phys-mass-constraint-arithmetic", ["korobov2017", "rau2020", "mass-constraint-verifier"]]
]);

const vacuumAssumptions = new Map([
  [
    "lamoreaux-casimir",
    [
      "Use the corrected local radius R=12.5 +/- 0.3 cm from the erratum and the accepted Lambrecht-Reynaud optical calculation.",
      "The 2000 comment gives eta about 0.87 for Au at 0.6 micrometers and Au/Cu agreement within 1%; the reply accepts this correction.",
      "The reply explicitly reports only minimal testing of systematic errors. Agreement is not a comprehensive 5% uncertainty certification."
    ]
  ],
  [
    "bressi-coefficient",
    [
      "The main coefficient uses the nine closest points, 0.5-1.1 micrometers, selected through chi-square analysis.",
      "The printed dynamic calibration gives V0=+(60.2 +/- 1.7) mV, conflicting with the static -(68.6 +/- 2.2) mV estimate and compensating Vc=-68.6 mV. The sign remains unresolved.",
      "Points at 1-2 micrometers deviate from the main fit. A separate fit with linear time drift gives (1.24 +/- 0.10) x 10^-27 N m^2; it is not the same estimator.",
      "The exponent 5.0 +/- 0.1 belongs to the squared-frequency shift; the corresponding ideal pressure scales as d^-4."
    ]
  ],
  [
    "lamb-separation",
    [
      "The plotted 1000 MHz displacement is an approximate comparison and explicitly not a best fit.",
      "Field calibration and inhomogeneity, line broadening and hyperfine structure limit the measurement; the proposed 10 MHz accuracy is future work in this article.",
      "A measured level separation does not isolate a unique radiative contribution or absolute vacuum energy."
    ]
  ],
  [
    "lamb-radiative-interpretation",
    [
      "Use the approximate 1947 separation without assigning a best-fit error bar.",
      "Apply the bound/free self-energy subtraction and the assumed cutoff K approximately m c^2.",
      "Compare approximate magnitudes; do not identify a unique radiative mechanism from this agreement."
    ]
  ]
]);


const qcdDefinitionLimits = new Map([
  [
    "qcd-renormalization-scale",
    [
      "The renormalization scale is a parameter of a chosen description, not elapsed physical time or an intermediate material carrier.",
      "A hard momentum scale Q and the chosen renormalization scale mu_R are distinct quantities; setting mu_R near Q is a calculation prescription.",
      "The beta function determines scale dependence only after a boundary value and renormalization convention are specified."
    ]
  ],
  [
    "qcd-beta-function",
    [
      "This convention differentiates alpha_s with respect to ln(mu_R^2); differentiation with respect to ln(mu_R) has an additional factor of two.",
      "For SU(3) with fundamental Dirac fermions and no extra colored matter, b0>0 requires n_f<16.5. Pure Yang-Mills theory has n_f=0 and b0=11/(4 pi). Quarks are not necessary for asymptotic freedom.",
      "Flavor number, representation indices and loop coefficients are mathematical inputs; they are not occurrence counts, carrier minima or empirical edge weights.",
      "This is a weak-coupling expansion. Higher-loop coefficients and matter content require their stated conventions; arbitrary non-Abelian matter theories are not all asymptotically free."
    ]
  ],
  [
    "asymptotic-freedom",
    [
      "The ultraviolet limit assumes the trajectory lies in the attraction domain of the zero-coupling fixed point; it does not establish the behavior at arbitrary finite coupling.",
      "The fixed-flavor one-loop formula requires a perturbative domain well above Lambda and no intervening unmatched flavor threshold.",
      "The formal pole at Lambda signals failure of this approximation; it is not a proof of confinement, hadronization or a stable-complexity construction.",
      "Finite-energy jet or scattering results test specified predictions. They do not measure the infinite-scale limit or a population of isolated free quarks."
    ]
  ],
  [
    "qcd-flavor-matching",
    [
      "A flavor is treated as light relative to the chosen scale in the stated effective theory; its inclusion is not a count of particles present in a detector.",
      "Threshold matching requires a heavy-quark mass prescription, matching scale and perturbative order. An unqualified fixed-n_f formula cannot be used across all thresholds.",
      "This QCD matching definition does not establish all Wilsonian coarse-graining, universality or cross-domain effective-theory claims."
    ]
  ]
]);

const cmsAssumptions = new Map([
  [
    "cms-alpha-mz",
    [
      "Use the unfolded 420-1390 GeV R32 data with the statistical covariance and fully bin-correlated individual JES and unfolding systematic sources.",
      "Use NLOJET++/fastNLO NLO matrix elements with five massless flavors, the NNPDF2.1 NNLO PDF family and the stated nonperturbative correction; central mu_r=mu_f=Q.",
      "The final Equation 6 result is alpha_s(M_Z)=0.1148 +/- 0.0014 (experimental) +/- 0.0018 (PDF) +/- 0.0050 (theory). The symmetric theory uncertainty includes the stated residual effects; the one-sided scale envelope alone is insufficient.",
      "Changing PDFs, perturbative order, scale prescription or heavy-flavor treatment changes the inference; a fitted coupling is not a detector observable or a proof of its assumed running equation."
    ]
  ],
  [
    "cms-running-consistency",
    [
      "Fit alpha_s(M_Z) separately in the three Q ranges using the same NLO/PDF construction, then evolve to alpha_s(Q) with the NNPDF2.1 three-loop RGE.",
      "The effective scales 474, 664 and 896 GeV are cross-section-weighted NLO averages for the 420-600, 600-800 and 800-1390 GeV ranges; 1390 GeV is an upper boundary, not a fourth extracted coupling.",
      "Experimental uncertainties across the three extractions are correlated. The combined-fit curve and the three points share data; they are not independent replications.",
      "R32 reduces sensitivity to PDF evolution but does not eliminate it. Agreement is conditional consistency with the specified RGE/PDF calculation, not a theory-independent measurement of the beta function.",
      "The published comparison supplies no independent constant-coupling rejection statistic here; additional experiments plotted in Figure 3 are outside this review."
    ]
  ]
]);


const latticeDefinitionLimits = new Map([
  [
    "lattice-gauge-formulation",
    [
      "Lattice spacing is an ultraviolet regulator, not measured physical granularity, a minimum carrier distance or a generative stage.",
      "Specify the gauge group, link and source representations, action, boundary conditions and dynamical matter. Pure SU(2) is not physical SU(3) QCD.",
      "Euclidean coordinates and Monte Carlo update order are distinct; sampling iterations do not describe real-time physical evolution."
    ]
  ],
  [
    "wilson-loop",
    [
      "The SU(2) observable uses one half of the trace of the ordered product in the fundamental representation; reversing a link uses its inverse.",
      "An ensemble expectation is not a single geometric loop, a material closure or a witnessed persistent object.",
      "A finite-loop value alone establishes neither an asymptotic area law nor continuum confinement."
    ]
  ],
  [
    "static-string-tension",
    [
      "The stated criterion concerns large contours and static fundamental sources in the unscreened pure-gauge theory. Dynamical matter and screening require separate review.",
      "K is a coefficient with units of energy per length; a^2 K is dimensionless in the paper's units. It is not a graph edge weight or constituent count.",
      "Perimeter effects and finite loops can obscure the area contribution. A square-loop fit requires its own model and range restrictions.",
      "This conditional criterion does not establish hadronization, stable hadrons, nuclear or atomic stability, or a downward causal law."
    ]
  ],
  [
    "lattice-continuum-limit",
    [
      "Classical action matching is different from a quantum continuum limit; the latter requires tuning bare parameters while holding declared physical quantities fixed.",
      "The continuum regime requires physical correlation lengths large compared with lattice spacing. A strong-coupling result at fixed cutoff does not by itself establish this regime.",
      "A finite-volume simulation and agreement with a scaling prediction do not supply an infinite-volume limit, a rigorous continuum construction or a universal emergence law."
    ]
  ],
  [
    "lattice-strong-coupling",
    [
      "The leading SU(2) expression uses beta=4/e0^2 and beta approaching zero; Wilson's detailed Abelian expansion has its own normalization.",
      "Minimal area means the fewest plaquettes filling a specified contour in this expansion. It is not minimum constituent count or a universal law selecting stable complexity.",
      "Higher-order corrections and convergence are separate obligations. This leading term is not an all-orders or physical continuum confinement proof.",
      "Bare lattice beta is not a thermodynamic temperature of a measured QCD sample or the renormalized alpha_s extracted by CMS."
    ]
  ]
]);
const latticeReadoutLimits = [
  "The paper studies a statistical lattice ensemble, not detector events or the real-time formation of a flux tube.",
  "At beta=3, the size comparison tests square loops through side six; side five is the largest used in the subsequent analysis. The main beta=2.1-3 data use a 10^4 lattice; other beta values use 8^4.",
  "Figure 3 error bars are standard deviations of fluctuations over five iterations after equilibration, not a documented autocorrelation-corrected uncertainty of independent samples.",
  "Hot/cold convergence and finite-size comparisons are diagnostics within the reported runs; no deposited configuration stream or independent Monte Carlo replay is admitted."
];
const latticeAssumptions = new Map([
  [
    "creutz-string-fit",
    [
      "Fit square-loop expectations with W(S)=exp[-(A+B S+C S^2)] by minimizing mean squared deviations of loop values; identify C=a^2 K only within this fit model.",
      "Below beta=2.1 only sides one and two are significant and the fit includes side zero; below beta=1.6 only side one is significant and area dominance is assumed.",
      "The paper displays fit variants at beta=1.6-1.8 and 2.2/2.25. Above beta=2.5 the area term is too small relative to the perimeter term for an accurate tension determination.",
      "Finite volume, available loop sizes, sampling and fit assumptions limit the inference. The fit is not a direct detector measurement or an independently reproduced asymptotic potential."
    ]
  ],
  [
    "creutz-scaling",
    [
      "Use the fitted a^2 K in a renormalization prescription that holds K fixed; compare with the leading SU(2) form proportional to exp(-6 pi^2 beta/11).",
      "Figure 6 uses an arbitrarily chosen normalization for the weak-coupling comparison. Equation 5.4 estimates Lambda approximately sqrt(K)/200 with uncertainty of roughly a factor of two in that coefficient.",
      "The renormalization prescription is based on confinement and the loop fits have restricted resolving power; the comparison is conditional support, not an independent proof of continuum confinement.",
      "The model contains no dynamical quarks. Its lattice bare coupling and scale normalization cannot be identified with CMS alpha_s, physical QCD string tension or a universal confinement threshold.",
      "The crossover does not identify instantons or any other unique microscopic confinement mechanism; no real-time hadronization or stable-complexity rule is measured."
    ]
  ]
]);


const screeningClaimLimits = new Map([
  [
    "D-phys-static-light-string-basis",
    [
      "Q denotes a string operator for external static quark and antiquark sources; B denotes a pair of static-light mesons. B is not a finite-mass detector B-meson sample.",
      "The reviewed model is SU(3) with two mass-degenerate Wilson sea quarks and the I=0 sector. Its SU(3) trace convention is not the one-half-normalized SU(2) observable of Creutz.",
      "Operator channels and Fock-sector truncations specify an analysis basis, not a universal constituent minimum or a measured formation sequence."
    ]
  ],
  [
    "D-phys-two-state-string-mixing",
    [
      "Use Equation 77: |1>=cos(theta)|Q>+sin(theta)|B>, and Equation 78: |2>=-sin(theta)|Q>+cos(theta)|B>. The Section VII summary interchanges sine and cosine and is not the adopted convention.",
      "The two-state truncation omits higher excitations. Mixing angles depend on the selected basis; fitted source overlaps are not probabilities of an exhaustive Fock decomposition.",
      "The gap minimum defines r_c. Equation 85 gives theta(r_s)=pi/2-c*pi/4, so the text's exact theta(r_s)=pi/4 identity does not hold for fitted c=0.914. No exact identification of r_s, r_c and equal mixing is admitted.",
      "The Euclidean transfer description concerns energy levels. A real-time decay, irreversible hadronization or downward change to quark dynamics requires additional dynamics and evidence."
    ]
  ],
  [
    "D-phys-fractional-charge-residual",
    [
      "q=Q/e is electric charge in electron-charge-magnitude units. It is not QCD color charge or an observable of neutral colored objects.",
      "q_r=q-floor(q) lies in [0,1). The centered residual q_c=q-nearest_integer(q) has a different range; Figure 9's q_c caption is inconsistent with its modulo-one axis and the Section IV B definition.",
      "A charge window is a measurement acceptance condition, not a particle species, minimum constituent count or universal absence statement."
    ]
  ],
  [
    "M-phys-bali2005-context",
    [
      "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
      "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
      "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
      "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph."
    ]
  ],
  [
    "C-phys-bali-correlator-matrix",
    [
      "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
      "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
      "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
      "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph.",
      "The correlation matrix retains Q-Q, Q-B and B-B entries, with disconnected and connected two-meson terms and their flavor factors. The I=1 disconnected comparison is a sector of the same dynamical ensemble, not a separate quenched simulation."
    ]
  ],
  [
    "C-phys-bali-wilson-loop-null",
    [
      "The Wilson-loop-only readout at r greater than r_c and measured Euclidean times t<=9a shows no visible string-breaking signal. This is a sensitivity limitation of that operator and time window.",
      "The null readout does not negate mixing inferred from the full correlation matrix or demonstrate the existence of isolated free quarks.",
      "The energy-spectrum and mixing fits share this ensemble; no independent replication or intervention switching off sea quarks is supplied."
    ]
  ],
  [
    "M-phys-lee2002-context",
    [
      "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
      "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
      "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
      "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
      "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed."
    ]
  ],
  [
    "C-phys-lee-charge-null",
    [
      "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
      "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
      "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
      "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
      "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed.",
      "Section IV B reports no accepted drop farther than 0.15 e from the nearest integer, with no background subtraction. The modulo-one gap is described as 0.15-0.85; the narrower 0.18-0.82 interval is used for the admitted published bound.",
      "The earlier 17.4 mg experiment contained an anomalous drop that this search did not confirm. These samples are not pooled, and the earlier event is not established to be an artifact."
    ]
  ]
]);
const screeningComparisons = [
  {
    "id": "bali-avoided-crossing",
    "sourceId": "bali2005",
    "limits": [
      "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
      "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
      "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
      "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
      "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
      "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold."
    ],
    "result": "conditional-support"
  },
  {
    "id": "bali-mixing-coupling",
    "sourceId": "bali2005",
    "limits": [
      "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
      "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
      "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
      "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims."
    ],
    "result": "not-tested"
  },
  {
    "id": "lee-abundance-limit",
    "sourceId": "lee2002",
    "limits": [
      "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
      "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
      "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
      "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species."
    ],
    "result": "not-tested"
  }
];
const screeningStudyLimits = new Map([
  [
    "bali2005",
    [
      "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
      "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
      "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
      "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph.",
      "The correlation matrix retains Q-Q, Q-B and B-B entries, with disconnected and connected two-meson terms and their flavor factors. The I=1 disconnected comparison is a sector of the same dynamical ensemble, not a separate quenched simulation.",
      "The Wilson-loop-only readout at r greater than r_c and measured Euclidean times t<=9a shows no visible string-breaking signal. This is a sensitivity limitation of that operator and time window.",
      "The null readout does not negate mixing inferred from the full correlation matrix or demonstrate the existence of isolated free quarks.",
      "The energy-spectrum and mixing fits share this ensemble; no independent replication or intervention switching off sea quarks is supplied.",
      "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
      "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
      "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
      "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
      "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
      "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold.",
      "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
      "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
      "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
      "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims.",
      "Use Equation 77: |1>=cos(theta)|Q>+sin(theta)|B>, and Equation 78: |2>=-sin(theta)|Q>+cos(theta)|B>. The Section VII summary interchanges sine and cosine and is not the adopted convention.",
      "The two-state truncation omits higher excitations. Mixing angles depend on the selected basis; fitted source overlaps are not probabilities of an exhaustive Fock decomposition.",
      "The gap minimum defines r_c. Equation 85 gives theta(r_s)=pi/2-c*pi/4, so the text's exact theta(r_s)=pi/4 identity does not hold for fitted c=0.914. No exact identification of r_s, r_c and equal mixing is admitted.",
      "The Euclidean transfer description concerns energy levels. A real-time decay, irreversible hadronization or downward change to quark dynamics requires additional dynamics and evidence."
    ]
  ],
  [
    "lee2002",
    [
      "Stokes drift vx=Q*E/(6*pi*eta*r) supplies electric-charge readout. Hourly integer-peak fits calibrate E/r; Brownian-motion and vertical-velocity estimates provide radius checks.",
      "The complete trajectory fit retains the negative covariance between consecutive velocity estimates caused by shared position measurements. The central residual peak has width approximately 0.021 in units of e.",
      "Table I gives 3,377,477 drops and 12.1 mg in set 1, and 13,430,167 drops and 58.0 mg in set 2. Section IV B identifies the final sample after cuts; do not subtract the reported rejection fractions again.",
      "Selection restricts charge magnitude, charge error, trajectory fit, vertical velocity, horizontal position and interdrop separation. Table II joint rejections are 21.0% and 9.4%; individual cuts overlap and their percentages cannot be added.",
      "The observable is electric charge in processed silicone oil, not color charge. Raw trajectories, hourly calibrations and acceptance have not been independently replayed.",
      "Section IV B reports no accepted drop farther than 0.15 e from the nearest integer, with no background subtraction. The modulo-one gap is described as 0.15-0.85; the narrower 0.18-0.82 interval is used for the admitted published bound.",
      "The earlier 17.4 mg experiment contained an anomalous drop that this search did not confirm. These samples are not pooled, and the earlier event is not established to be an artifact.",
      "Report the published 95% confidence upper limit of 1.17 x 10^-22 particles per nucleon only for 0.18<=q_r<=0.82 in the analyzed silicone oil. Non-detection is not proof of zero abundance.",
      "The abstract and Introduction give the 0.18-0.82 window, whereas Section IV B assigns the same limit to 0.15-0.85. The observed gap and the admitted confidence-limit window remain distinct.",
      "The confidence construction and effective-exposure normalization have not been independently reproduced. The quoted mass and zero count alone do not recover the printed limit under a simple unit-efficiency Poisson model; no unreported efficiency or replacement limit is invented.",
      "Processing may remove fractional-charge particles and their natural concentration is unknown. The authors expressly restrict generalization to other materials; this bound does not establish universal color confinement or the absence of every isolated quark species.",
      "q=Q/e is electric charge in electron-charge-magnitude units. It is not QCD color charge or an observable of neutral colored objects.",
      "q_r=q-floor(q) lies in [0,1). The centered residual q_c=q-nearest_integer(q) has a different range; Figure 9's q_c caption is inconsistent with its modulo-one axis and the Section IV B definition.",
      "A charge window is a measurement acceptance condition, not a particle species, minimum constituent count or universal absence statement."
    ]
  ]
]);


const hadronClaimLimits = new Map([
  [
    "D-phys-hadron-correlator-mass",
    [
      "The correlator is an expectation over a specified Euclidean lattice ensemble with a selected hadronic operator and zero-momentum projection. It is not a detector trace or a real-time hadronization trajectory.",
      "The effective-mass ratio a*M_eff(t)=log(C(t)/C(t+a)) approaches a single-state value only in an appropriate time regime. Finite-time excited states and backward propagation require the stated fit window and cosh/sinh model.",
      "Source and sink operators select quantum numbers and overlaps. Their algebraic field content does not measure an exhaustive Fock decomposition or a universal minimum number of persistent constituents."
    ]
  ],
  [
    "D-phys-hadron-mass-calibration",
    [
      "For this two-plus-one-flavor calculation, experimental pion and kaon inputs and either Xi or Omega set the light/strange mass parameters and physical scale. A selected input mass is not an independent prediction.",
      "The Xi and Omega normalization sets use the same simulation data. Each set has nine predicted channels among twelve studied channels after its three inputs; the two sets are not independent replications.",
      "The experimental comparisons are the paper's isospin averages based on its PDG 2006 reference. Pion/kaon inputs use leading electromagnetic corrections through Dashen's theorem; neglected higher terms are estimated in the paper, not independently checked here."
    ]
  ],
  [
    "D-phys-finite-volume-hadron-resonance",
    [
      "The elastic rho example uses W=2*sqrt(M_pi^2+k^2), q=k*L/(2*pi) and n*pi-delta_11(k)=phi(q), with an effective-range phase parametrization in the I=1, J=1 channel and 0<k<sqrt(3)*M_pi.",
      "The finite-box spectrum is discrete. Its energy levels are not physical infinite-volume resonance lifetimes; a lowest two-particle energy need not identify a resonance mass.",
      "The reviewed report summarizes the finite-volume method; a general proof, arbitrary coupled-channel extension and precise resonance widths require additional sources and data."
    ]
  ],
  [
    "M-phys-durr2008-context",
    [
      "The physical pion mass is reached by extrapolation from a minimum simulated mass of 190 MeV, not by direct simulation at the physical light-quark masses. Three finite lattice spacings support a specified continuum fit, not exact continuum dynamics.",
      "Table S1 has fourteen base parameter rows, including auxiliary volumes for one row and paired strange masses for four rows. Those additional runs must not be collapsed into fourteen identical ensembles or counted as independent full-spectrum replications.",
      "Analysis uses every tenth trajectory and up to eight source timeslices per configuration. Autocorrelation and binning diagnostics, including the long 10000- and 4500-trajectory runs, support the stated sampling; source timeslices do not supply independent simulations.",
      "Spatial extents reach about 4 fm and temporal extents about 8 fm. M_pi*L around four is a finite-volume rule of thumb tested within this analysis, not a universal stability or carrier threshold.",
      "The detailed action and hadronic operators are delegated to cited method papers. This graph records the reported setup without claiming a complete action implementation or independent numerical reproduction."
    ]
  ],
  [
    "C-phys-durr-lattice-masses",
    [
      "The physical pion mass is reached by extrapolation from a minimum simulated mass of 190 MeV, not by direct simulation at the physical light-quark masses. Three finite lattice spacings support a specified continuum fit, not exact continuum dynamics.",
      "Table S1 has fourteen base parameter rows, including auxiliary volumes for one row and paired strange masses for four rows. Those additional runs must not be collapsed into fourteen identical ensembles or counted as independent full-spectrum replications.",
      "Analysis uses every tenth trajectory and up to eight source timeslices per configuration. Autocorrelation and binning diagnostics, including the long 10000- and 4500-trajectory runs, support the stated sampling; source timeslices do not supply independent simulations.",
      "Spatial extents reach about 4 fm and temporal extents about 8 fm. M_pi*L around four is a finite-volume rule of thumb tested within this analysis, not a universal stability or carrier threshold.",
      "The detailed action and hadronic operators are delegated to cited method papers. This graph records the reported setup without claiming a complete action implementation or independent numerical reproduction.",
      "Gaussian sources and sinks of radius about 0.32 fm on Coulomb-gauge-fixed configurations show reduced excited-state contamination relative to point sources in Figure S1. Reduced contamination is not its exact elimination.",
      "The twelve channels are pi, K, rho, K*, N, Lambda, Sigma, Xi, Delta, Sigma*, Xi* and Omega. N denotes the isospin-symmetric nucleon channel, not separately resolved proton and neutron masses.",
      "The published effective-mass plots and finite-lattice fits are reported computational outputs. Underlying correlators, full covariance matrices and the numerical fitting pipeline are not reproduced."
    ]
  ]
]);
const hadronComparisons = [
  {
    "id": "durr-hadron-spectrum",
    "candidate": "Calibrated two-plus-one-flavor QCD predicts the remaining light-hadron masses within the reported uncertainty.",
    "alternative": "The independent predicted channels disagree with the comparison after the same inputs, extrapolations and uncertainty procedure.",
    "discriminator": "Compare only non-input masses against the paper's isospin-averaged experimental values, retaining correlated fits, both normalization sets and the specified error construction.",
    "result": "conditional-support",
    "limit": "Published agreement supports this calibrated spectrum calculation within its domain; neither independent computational replay nor a proton/neutron stability or formation test is supplied.",
    "assumptions": [
      "Pion, kaon and Xi are inputs in the Xi set; pion, kaon and Omega are inputs in the Omega set. The twelve channels yield nine predictions per set. Both sets reuse the same ensembles and do not independently replicate one another.",
      "The mass and continuum extrapolations are correlated. Two normalization methods, two chiral/Taylor strategies, three pion-mass ranges, two continuum forms linear in a or a^2, and eighteen time windows produce 432 analysis variants per hadron in each normalization set, not 432 experiments.",
      "The central value is the fit-quality-weighted distribution median. The central 68% interval of that variant distribution estimates systematic uncertainty; 2000 bootstrap datasets supply the median distribution and its central 68% statistical interval. Statistical and systematic errors are combined in quadrature for final plotted bars.",
      "The fit family estimates selected extrapolation and excited-state effects. Exact fit-quality weights, raw correlators, full covariances and independent fit replay are unavailable here; the paper's description of blind analysis does not establish a separately audited outcome-masking protocol.",
      "Finite-volume image corrections use M_X(L)=M_X+c_X(M_pi)*exp(-M_pi*L)/(M_pi*L)^(3/2), with volume scans at about a=0.125 fm and M_pi=320 MeV. Resonance corrections additionally use a scattering model; no precise width determination is supplied.",
      "The lightest pion-mass point at a about 0.085 fm is excluded for rho and Delta because the lowest level is dominated by a two-particle state and weakly sensitive to the resonance mass. All other mass-range cuts remain part of the analysis.",
      "Table S2 fractions are correlated, non-Gaussian and averaged across Xi/Omega sets. Finite-volume terms are treated as corrections. The fractions must not be summed or normalized as independent probabilities or independent variances.",
      "The comparison uses the paper's PDG 2006 isospin averages. QED and isospin breaking are absent; leading pion/kaon electromagnetic adjustments and the neglected residual effects remain approximations. The result does not resolve the proton-neutron mass difference.",
      "A mass spectrum does not establish stability against weak decay, a neutron lifetime, a real-time hadron formation path, a universal three-constituent minimum, nuclear stability or downward causation. The introductory percentages about visible matter and mass origin are not calculated decompositions in this study.",
      "Figure 3 shaded bands represent experimental decay widths, not mass-measurement uncertainties. Input symbols have no error bars because their values set model parameters; this is not evidence of exact independent prediction."
    ]
  },
  {
    "id": "durr-resonance-exclusion",
    "candidate": "The selected lowest finite-volume level reliably determines the lightest rho or Delta resonance mass.",
    "alternative": "Two-particle-state dominance leaves insufficient sensitivity without additional width information or energy levels.",
    "discriminator": "Inspect the lowest-level resonance-mass sensitivity in the stated scattering model at the two excluded channel/point combinations; preserve their omission from the mass fit.",
    "result": "not-tested",
    "limit": "These resonance-mass extractions are not performed; omission does not establish an absent resonance or a null physical interaction.",
    "assumptions": [
      "The excluded cases are rho and Delta at the lightest pion-mass point at a about 0.085 fm. They are a sensitivity failure of the selected lowest-energy readout, not evidence that the resonances or their interactions are absent.",
      "Extracting a resonance mass from those lowest levels would need precise width information. The authors omit these cases to avoid using an experimental width as an extra mass-inference input.",
      "The remaining fits infer masses and couplings across the simulated volumes and masses; their width sensitivity is limited and errors are large. Multiple levels and cross-correlators for precise widths are outside this paper.",
      "This limitation belongs to the same simulation data as the spectrum. It is neither an independent experiment nor an intervention that removes a hadron or changes a fundamental rule."
    ]
  }
];
const hadronStudyLimits = [
  "The physical pion mass is reached by extrapolation from a minimum simulated mass of 190 MeV, not by direct simulation at the physical light-quark masses. Three finite lattice spacings support a specified continuum fit, not exact continuum dynamics.",
  "Table S1 has fourteen base parameter rows, including auxiliary volumes for one row and paired strange masses for four rows. Those additional runs must not be collapsed into fourteen identical ensembles or counted as independent full-spectrum replications.",
  "Analysis uses every tenth trajectory and up to eight source timeslices per configuration. Autocorrelation and binning diagnostics, including the long 10000- and 4500-trajectory runs, support the stated sampling; source timeslices do not supply independent simulations.",
  "Spatial extents reach about 4 fm and temporal extents about 8 fm. M_pi*L around four is a finite-volume rule of thumb tested within this analysis, not a universal stability or carrier threshold.",
  "The detailed action and hadronic operators are delegated to cited method papers. This graph records the reported setup without claiming a complete action implementation or independent numerical reproduction.",
  "Gaussian sources and sinks of radius about 0.32 fm on Coulomb-gauge-fixed configurations show reduced excited-state contamination relative to point sources in Figure S1. Reduced contamination is not its exact elimination.",
  "The twelve channels are pi, K, rho, K*, N, Lambda, Sigma, Xi, Delta, Sigma*, Xi* and Omega. N denotes the isospin-symmetric nucleon channel, not separately resolved proton and neutron masses.",
  "The published effective-mass plots and finite-lattice fits are reported computational outputs. Underlying correlators, full covariance matrices and the numerical fitting pipeline are not reproduced.",
  "Pion, kaon and Xi are inputs in the Xi set; pion, kaon and Omega are inputs in the Omega set. The twelve channels yield nine predictions per set. Both sets reuse the same ensembles and do not independently replicate one another.",
  "The mass and continuum extrapolations are correlated. Two normalization methods, two chiral/Taylor strategies, three pion-mass ranges, two continuum forms linear in a or a^2, and eighteen time windows produce 432 analysis variants per hadron in each normalization set, not 432 experiments.",
  "The central value is the fit-quality-weighted distribution median. The central 68% interval of that variant distribution estimates systematic uncertainty; 2000 bootstrap datasets supply the median distribution and its central 68% statistical interval. Statistical and systematic errors are combined in quadrature for final plotted bars.",
  "The fit family estimates selected extrapolation and excited-state effects. Exact fit-quality weights, raw correlators, full covariances and independent fit replay are unavailable here; the paper's description of blind analysis does not establish a separately audited outcome-masking protocol.",
  "Finite-volume image corrections use M_X(L)=M_X+c_X(M_pi)*exp(-M_pi*L)/(M_pi*L)^(3/2), with volume scans at about a=0.125 fm and M_pi=320 MeV. Resonance corrections additionally use a scattering model; no precise width determination is supplied.",
  "The lightest pion-mass point at a about 0.085 fm is excluded for rho and Delta because the lowest level is dominated by a two-particle state and weakly sensitive to the resonance mass. All other mass-range cuts remain part of the analysis.",
  "Table S2 fractions are correlated, non-Gaussian and averaged across Xi/Omega sets. Finite-volume terms are treated as corrections. The fractions must not be summed or normalized as independent probabilities or independent variances.",
  "The comparison uses the paper's PDG 2006 isospin averages. QED and isospin breaking are absent; leading pion/kaon electromagnetic adjustments and the neglected residual effects remain approximations. The result does not resolve the proton-neutron mass difference.",
  "A mass spectrum does not establish stability against weak decay, a neutron lifetime, a real-time hadron formation path, a universal three-constituent minimum, nuclear stability or downward causation. The introductory percentages about visible matter and mass origin are not calculated decompositions in this study.",
  "Figure 3 shaded bands represent experimental decay widths, not mass-measurement uncertainties. Input symbols have no error bars because their values set model parameters; this is not evidence of exact independent prediction.",
  "The excluded cases are rho and Delta at the lightest pion-mass point at a about 0.085 fm. They are a sensitivity failure of the selected lowest-energy readout, not evidence that the resonances or their interactions are absent.",
  "Extracting a resonance mass from those lowest levels would need precise width information. The authors omit these cases to avoid using an experimental width as an extra mass-inference input.",
  "The remaining fits infer masses and couplings across the simulated volumes and masses; their width sensitivity is limited and errors are large. Multiple levels and cross-correlators for precise widths are outside this paper.",
  "This limitation belongs to the same simulation data as the spectrum. It is neither an independent experiment nor an intervention that removes a hadron or changes a fundamental rule."
];
const hadronSpectrumStatement = "After the declared mass/scale inputs and correlated physical-mass, finite-volume and continuum treatment, the paper reports light-hadron masses compatible with its experimental comparison. The isospin-symmetric nucleon mass is 0.936 +/- 0.025 (statistical) +/- 0.022 (systematic) GeV with Xi normalization, or 0.953 +/- 0.029 +/- 0.019 GeV with Omega normalization, compared with 0.939 GeV. Table 1 entries below use GeV and statistical then systematic parentheses on the last digits: rho: comparison 0.775; Xi set 0.775(29)(13); Omega set 0.778(30)(33). K*: comparison 0.894; Xi set 0.906(14)(4); Omega set 0.907(15)(8). N: comparison 0.939; Xi set 0.936(25)(22); Omega set 0.953(29)(19). Lambda: comparison 1.116; Xi set 1.114(15)(5); Omega set 1.103(23)(10). Sigma: comparison 1.191; Xi set 1.169(18)(15); Omega set 1.157(25)(15). Xi: comparison 1.318; Xi set 1.318 (input); Omega set 1.317(16)(13). Delta: comparison 1.232; Xi set 1.248(97)(61); Omega set 1.234(82)(81). Sigma*: comparison 1.385; Xi set 1.427(46)(35); Omega set 1.404(38)(27). Xi*: comparison 1.533; Xi set 1.565(26)(15); Omega set 1.561(15)(15). Omega: comparison 1.672; Xi set 1.676(20)(15); Omega set 1.672 (input).";


const neutronClaimLimits = new Map([
  [
    "D-phys-exponential-survival",
    [
      "An exponential survival law assumes a constant effective loss rate in the modeled interval. It is not an exact law at every quantum timescale or a derivation of a particle species.",
      "The mean lifetime tau differs from the half-life tau*log(2), from a detector unloading time and from the duration for which a particular particle was tracked.",
      "Counts after storage sample ensemble survival. A finite fitted lifetime does not establish a universal persistence threshold, a constituent minimum or identity of individual neutrons."
    ]
  ],
  [
    "D-phys-ucn-storage-loss-model",
    [
      "The additive rate model assumes the declared decay and non-decay loss channels and their treatment. Unmodeled disappearance or time-dependent losses can change the inferred lifetime.",
      "Boron-10 capture counts surviving neutrons in these bottle experiments; beta-decay electrons, protons and antineutrinos are not counted by that readout. A beta-channel branching fraction is not identified.",
      "Material contact, gas upscattering, spin depolarization and escape are apparatus-dependent loss mechanisms. Correcting them is necessary to interpret a storage rate as the conventional free-neutron lifetime.",
      "The reviewed papers motivate CKM, radiative-correction and cosmological tests; those further deductions need independent inputs and are not outcomes of these storage measurements."
    ]
  ],
  [
    "M-phys-ucn2017-context",
    [
      "The combined 2017/2018 dataset counts about 38 million surviving UCN, not 38 million beta decays or independently replicated lifetime measurements. The count is not separately assigned to each year.",
      "The 5.5 T polarizer and spin flipper prepare low-field-seeking UCN for an NdFeB Halbach trap with a 60-120 G holding field. Transport energies up to about 180 neV, cleaning near 38 neV and the reported 50 cm/about 51 neV trap boundary refer to different stages.",
      "The primary detector uses boron-10 capture in ZnS scintillator and two-PMT photon coincidences. Background, dead time, pileup and delayed scintillation affect the count; photoelectrons and neutron captures are different counting domains.",
      "Three analyses share these acquisitions. They initially develop separately, compare run-level quantities after sharing blinded fits, and unblind when fitted lifetimes agree within 0.1 s. The timing shift is within a stated +/-15 s window; this is not three independent experiments.",
      "Monitor weighting, spectral normalization and background estimates vary among analyzers and time subsets. Table I prints analysis-C intervals ((m-1)*t_fill,m*t_fill) without a division into twenty within-fill bins; the printed mean-arrival integral also lacks the normalization needed for count-rate input. These expressions require clarification before literal replay.",
      "Original timestamps, detector corrections, regression coefficients, selection decisions, full nuisance-parameter covariance and numerical fitting implementations have not been independently reproduced.",
      "The aluminum-exposed subset accounts for about 34% of the combined 2017/2018 data, not 34% of every year. The reported material-loss correction must remain part of the final lifetime interpretation."
    ]
  ],
  [
    "M-phys-ucn2018-context",
    [
      "The combined 2017/2018 dataset counts about 38 million surviving UCN, not 38 million beta decays or independently replicated lifetime measurements. The count is not separately assigned to each year.",
      "The 5.5 T polarizer and spin flipper prepare low-field-seeking UCN for an NdFeB Halbach trap with a 60-120 G holding field. Transport energies up to about 180 neV, cleaning near 38 neV and the reported 50 cm/about 51 neV trap boundary refer to different stages.",
      "The primary detector uses boron-10 capture in ZnS scintillator and two-PMT photon coincidences. Background, dead time, pileup and delayed scintillation affect the count; photoelectrons and neutron captures are different counting domains.",
      "Three analyses share these acquisitions. They initially develop separately, compare run-level quantities after sharing blinded fits, and unblind when fitted lifetimes agree within 0.1 s. The timing shift is within a stated +/-15 s window; this is not three independent experiments.",
      "Monitor weighting, spectral normalization and background estimates vary among analyzers and time subsets. Table I prints analysis-C intervals ((m-1)*t_fill,m*t_fill) without a division into twenty within-fill bins; the printed mean-arrival integral also lacks the normalization needed for count-rate input. These expressions require clarification before literal replay.",
      "Original timestamps, detector corrections, regression coefficients, selection decisions, full nuisance-parameter covariance and numerical fitting implementations have not been independently reproduced.",
      "Short runs have storage times at most 500 s and long runs exceed 500 s in this analysis. That pairing rule is not the later experiment's 1550 s octet definition."
    ]
  ],
  [
    "M-phys-ucn-al-control-context",
    [
      "The covered block is not the uncoated production contaminant. Its extra-loss component estimates surface incidence; aluminum loss per encounter remains an additional model input.",
      "Diagnostic runs do not augment the nominal lifetime production sample. Their conditional correction must not be applied twice to published corrected lifetimes.",
      "The diagnostic acquisition, energy/angle distribution and surface-loss calculation are not independently reproduced."
    ]
  ],
  [
    "M-phys-ucn2018-uncleaned-context",
    [
      "This deliberately uncleaned preparation differs from the production sample. A shorter storage lifetime does not imply a changed intrinsic neutron decay law.",
      "Scaling observed diagnostic losses to production assumes a linear relation between escape rate and the high-position count; absence of a visible production peak is a sensitivity bound, not exact zero population.",
      "Underlying diagnostic counts and the escape/heating extrapolation are not independently replayed."
    ]
  ],
  [
    "M-phys-ucn2020-context",
    [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "The post-unblinding restoration concerns a roughly 659-run subset in 2020 with a reported 1.0 s lifetime shift. This is a selection correction, not a new independent experiment."
    ]
  ],
  [
    "M-phys-ucn2021-context",
    [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "The Fast/Slow geometry-specific fits are subsets of the 2021 campaign. They must not be pooled again with the yearly result as independent data."
    ]
  ],
  [
    "M-phys-ucn2022-context",
    [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "Strip results and gain-reweighted fits use the same stored-neutron sample. They diagnose readout sensitivity; they do not define four neutron species or four independent lifetime experiments."
    ]
  ],
  [
    "M-phys-ucn2022-uncleaned-context",
    [
      "The 200 s/40 s Pk1 ratio corrects a diagnostic counting tail. It is not a neutron survival probability, a universal counting efficiency or an independent lifetime result.",
      "Production heating and incomplete-cleaning limits additionally assume scaling from this diagnostic high-energy population to the production sample.",
      "The 2025 systematic budget weights cleaning/heating assessments from this work and the earlier paper; raw diagnostic counts and those combination weights are not independently reproduced."
    ]
  ],
  [
    "C-phys-ucn2017-fits",
    [
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count."
    ]
  ],
  [
    "C-phys-ucn2018-fits",
    [
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count."
    ]
  ],
  [
    "C-phys-ucn2020-fits",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced."
    ]
  ],
  [
    "C-phys-ucn2021-fits",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The 2021 Fast-only fit is 879.81+/-1.18 s and Slow-only fit 877.94+/-0.69 s, with statistical errors. These are subsets of the yearly combination."
    ]
  ],
  [
    "C-phys-ucn2022-fits",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced."
    ]
  ],
  [
    "C-phys-ucn-al-loss",
    [
      "The approximately 424 s additional component is produced in the polyethylene-covered-block diagnostic. It is not the uncoated aluminum production loss rate or the intrinsic neutron lifetime.",
      "Translation to aluminum-exposed production data additionally assumes the energy/angle-averaged aluminum loss probability; the diagnostic alone does not measure that probability.",
      "The control supports a material-loss correction in the declared setup. No universal lifetime change under arbitrary matter contact or independent numerical replay follows."
    ]
  ],
  [
    "C-phys-ucn2018-uncleaned-loss",
    [
      "The roughly 15 s reduction belongs to deliberately uncleaned 2018 storage; the inferred escape rate is about 2*10^-5 per second under the stated model.",
      "The production bound assumes a linear relation between escape rate and high-position counts. Nonobservation of a production peak is not exact proof of zero uncleaned or heated neutrons.",
      "This comparison diagnoses apparatus-dependent storage loss. It does not imply that cleaning changes the neutron's intrinsic beta-decay law."
    ]
  ],
  [
    "C-phys-ucn2022-cleaning-tail",
    [
      "The published ratio 1.76+/-0.15 compares background-subtracted Pk1 counts accumulated for 200 s with those in 40 s in uncleaned diagnostic data. It is not a physical neutron lifetime or a fraction bounded by one.",
      "The correction accounts for counts in the long Pk1 tail overlapping the normal Pk2 timing. Scaling to production incomplete-cleaning/heating bounds requires an additional population assumption.",
      "The ratio, background subtraction and weighted combination with earlier diagnostics have not been independently reproduced."
    ]
  ],
  [
    "C-phys-ucn2022-segment-response",
    [
      "Four strip-specific fits in the same 2022 acquisition span about 10 s; the shortest strip 78 gives the shortest fitted lifetime. The fits are not independent samples of four intrinsic lifetimes.",
      "The authors interpret this as phase-space redistribution coupled to position-dependent detector efficiency. Relative gains vary about 20%; balancing photon thresholds shifts the combined fit by -0.22 s.",
      "Laser response mapping and segment reweighting support a stated 0.02 s uniformity uncertainty. These are sensitivity analyses, not a unique microscopic identification of phase-space evolution.",
      "Fast 2.87(0.07), segmented 5.70(0.07) and Slow 8.16(0.10) s in Figure 5 are unloading time constants. They must not replace the approximately 878 s neutron lifetime.",
      "The Sect II segmented summary reports 876.93(0.56) s; final Table III across-analyzer 2022 reporting uses 876.93(0.57) s. These summaries must not be counted twice or silently given one common statistical scope."
    ]
  ],
  [
    "C-phys-ucn2017-2018-lifetime",
    [
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count.",
      "Use the unweighted mean of the three full-data global central estimates and the largest statistical error, 0.28 s. The 2021 publication does not use an error-of-the-mean reduction or the later paper's yearly error-average rule.",
      "The original systematic budget is +0.22/-0.16 s: event definition 0.13, normalization 0.06, depolarization +0.07, uncleaned +0.11, heating +0.08, aluminum 0.05 and gas 0.06 s. The nonzero central corrections +0.06 for aluminum and +0.11 for gas have already entered the reported lifetime.",
      "The aluminum model estimates loss per encounter (2+/-1)*10^-4 and gives +0.15+/-0.07 s for the contaminated subset; its +0.06+/-0.05 s contribution to the combined result has a different scope.",
      "Pressure, composition, loss-cross-section and detailed fit methods delegated to cited sources have not all been independently reconstructed. This is publication-supported storage inference, not a beta-branching or beam/bottle resolution test."
    ]
  ],
  [
    "C-phys-ucn2020-2022-lifetime",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced."
    ]
  ],
  [
    "C-phys-ucntau-global-lifetime",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  ],
  [
    "M-phys-ucn-al-loss",
    [
      "The approximately 424 s additional component is produced in the polyethylene-covered-block diagnostic. It is not the uncoated aluminum production loss rate or the intrinsic neutron lifetime.",
      "Translation to aluminum-exposed production data additionally assumes the energy/angle-averaged aluminum loss probability; the diagnostic alone does not measure that probability.",
      "The control supports a material-loss correction in the declared setup. No universal lifetime change under arbitrary matter contact or independent numerical replay follows."
    ]
  ],
  [
    "M-phys-ucn2018-uncleaned-loss",
    [
      "The roughly 15 s reduction belongs to deliberately uncleaned 2018 storage; the inferred escape rate is about 2*10^-5 per second under the stated model.",
      "The production bound assumes a linear relation between escape rate and high-position counts. Nonobservation of a production peak is not exact proof of zero uncleaned or heated neutrons.",
      "This comparison diagnoses apparatus-dependent storage loss. It does not imply that cleaning changes the neutron's intrinsic beta-decay law."
    ]
  ],
  [
    "M-phys-ucn2022-cleaning-tail",
    [
      "The published ratio 1.76+/-0.15 compares background-subtracted Pk1 counts accumulated for 200 s with those in 40 s in uncleaned diagnostic data. It is not a physical neutron lifetime or a fraction bounded by one.",
      "The correction accounts for counts in the long Pk1 tail overlapping the normal Pk2 timing. Scaling to production incomplete-cleaning/heating bounds requires an additional population assumption.",
      "The ratio, background subtraction and weighted combination with earlier diagnostics have not been independently reproduced."
    ]
  ],
  [
    "M-phys-ucn2022-segment-response",
    [
      "Four strip-specific fits in the same 2022 acquisition span about 10 s; the shortest strip 78 gives the shortest fitted lifetime. The fits are not independent samples of four intrinsic lifetimes.",
      "The authors interpret this as phase-space redistribution coupled to position-dependent detector efficiency. Relative gains vary about 20%; balancing photon thresholds shifts the combined fit by -0.22 s.",
      "Laser response mapping and segment reweighting support a stated 0.02 s uniformity uncertainty. These are sensitivity analyses, not a unique microscopic identification of phase-space evolution.",
      "Fast 2.87(0.07), segmented 5.70(0.07) and Slow 8.16(0.10) s in Figure 5 are unloading time constants. They must not replace the approximately 878 s neutron lifetime.",
      "The Sect II segmented summary reports 876.93(0.56) s; final Table III across-analyzer 2022 reporting uses 876.93(0.57) s. These summaries must not be counted twice or silently given one common statistical scope."
    ]
  ],
  [
    "M-phys-ucn2017-2018-lifetime",
    [
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count.",
      "Use the unweighted mean of the three full-data global central estimates and the largest statistical error, 0.28 s. The 2021 publication does not use an error-of-the-mean reduction or the later paper's yearly error-average rule.",
      "The original systematic budget is +0.22/-0.16 s: event definition 0.13, normalization 0.06, depolarization +0.07, uncleaned +0.11, heating +0.08, aluminum 0.05 and gas 0.06 s. The nonzero central corrections +0.06 for aluminum and +0.11 for gas have already entered the reported lifetime.",
      "The aluminum model estimates loss per encounter (2+/-1)*10^-4 and gives +0.15+/-0.07 s for the contaminated subset; its +0.06+/-0.05 s contribution to the combined result has a different scope.",
      "Pressure, composition, loss-cross-section and detailed fit methods delegated to cited sources have not all been independently reconstructed. This is publication-supported storage inference, not a beta-branching or beam/bottle resolution test."
    ]
  ],
  [
    "M-phys-ucn2020-2022-lifetime",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced."
    ]
  ],
  [
    "M-phys-ucntau-global-lifetime",
    [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  ]
]);
const neutronStatements = new Map([
  [
    "D-phys-exponential-survival",
    "For a constant effective loss rate lambda, the modeled surviving population is N(t)=N(0)*exp(-lambda*t), with mean lifetime tau=1/lambda. Initial-population normalization and background corrections are separate measurement inputs."
  ],
  [
    "D-phys-ucn-storage-loss-model",
    "The Gonzalez storage model sums an intrinsic decay rate and residual-gas upscattering, depolarization and escape rates. A fitted storage-loss rate can identify the conventional free-neutron lifetime only with the declared non-decay-loss corrections and detector model."
  ],
  [
    "M-phys-ucn2017-context",
    "The 2017 UCNtau campaign loads for 150 s, cleans for 50 s, stores for 20-1550 s and counts in three detector positions for 40, 20 and 150 s. Monitor choices and normalization precede the buffer-volume arrangement used in 2018. Part of the production data was exposed to a fallen aluminum component."
  ],
  [
    "M-phys-ucn2018-context",
    "The 2018 UCNtau campaign adds a buffer/precleaning volume and loads for 300 s. After 50 s cleaning, neutrons are stored for 20-1550 s and counted at cleaner, middle and bottom positions for 40, 20 and 150 s. Monitor detectors sample the changed loading arrangement."
  ],
  [
    "M-phys-ucn-al-control-context",
    "A dedicated diagnostic reintroduces the fallen aluminum block, covered in polyethylene foil, at its original trap location. The nearly absorbing covering is used to estimate how often UCN encounter that surface; a separate aluminum-loss model translates this diagnostic to the production contamination."
  ],
  [
    "M-phys-ucn2018-uncleaned-context",
    "In dedicated 2018 runs the cleaner is never lowered before storage. The cleaner detector and primary detector then count UCN above the usual cleaning height; comparison with production conditions is used to assess escaping high-energy neutrons."
  ],
  [
    "M-phys-ucn2020-context",
    "The 2020 UCNtau campaign uses the Fast boron-coated ZnS dagger and roundhouse-dump normalization. An initial dagger with about 1.0 Hz americium-contamination background is replaced by one with about 0.2 Hz background; both belong to the declared campaign analysis."
  ],
  [
    "M-phys-ucn2021-context",
    "The 2021 UCNtau campaign includes a Fast dagger and a Slow variant with one whole side covered by UCN-reflective aluminum. The shared year result combines those declared configurations after rate and normalization corrections."
  ],
  [
    "M-phys-ucn2022-context",
    "The 2022 UCNtau campaign divides the dagger into four vertical strips read by eight PMTs, with additional reflective aluminum strips. Segment photon thresholds are balanced to account for gain differences before the reported combined lifetime is used."
  ],
  [
    "M-phys-ucn2022-uncleaned-context",
    "Dedicated uncleaned 2022 runs compare 40 s and 200 s counting gates at the cleaning-height position Pk1. This measures the long tail missed by the shorter gate before the dagger is lowered to the bottom position Pk2."
  ],
  [
    "C-phys-ucn2017-fits",
    "For the 2017 campaign, Gonzalez Table III reports global-fit neutron lifetimes A 877.68+/-0.30, B 877.78+/-0.34 and C 877.74+/-0.33 seconds. These are three analyses of the same campaign with statistical uncertainties, not three independent experiments."
  ],
  [
    "C-phys-ucn2018-fits",
    "For the 2018 campaign, Gonzalez Table III reports global-fit neutron lifetimes A 878.06+/-0.49, B 877.80+/-0.46 and C 877.55+/-0.55 seconds. These are three analyses of the same campaign with statistical uncertainties, not three independent experiments."
  ],
  [
    "C-phys-ucn2020-fits",
    "For the 2020 campaign, final Musedinovic Table III reports A 879.47+/-0.86, B 879.38+/-0.92 and C 879.32+/-0.90 seconds. The reported yearly average is 879.39+/-0.89 seconds, with statistical uncertainty; the analyzer estimates share the campaign data."
  ],
  [
    "C-phys-ucn2021-fits",
    "For the 2021 campaign, final Musedinovic Table III reports A 878.41+/-0.60, B 878.40+/-0.59 and C 878.41+/-0.55 seconds. The reported yearly average is 878.41+/-0.58 seconds, with statistical uncertainty; the analyzer estimates share the campaign data."
  ],
  [
    "C-phys-ucn2022-fits",
    "For the 2022 campaign, final Musedinovic Table III reports A 876.81+/-0.56, B 876.78+/-0.58, C 877.06+/-0.53 and D 877.08+/-0.63 seconds. The reported yearly average is 876.93+/-0.57 seconds, with statistical uncertainty; the analyzer estimates share the campaign data."
  ],
  [
    "C-phys-ucn-al-loss",
    "Reintroducing the polyethylene-covered block at the contamination location produces an additional approximately 424 s component in the stored-UCN yield. The authors use this diagnostic surface-incidence estimate in a separate aluminum-loss correction."
  ],
  [
    "C-phys-ucn2018-uncleaned-loss",
    "The deliberately uncleaned 2018 runs show high-position UCN counts and an extracted storage lifetime about 15 s shorter. The authors associate the reduction with an escape rate around 2*10^-5 per second under their loss model."
  ],
  [
    "C-phys-ucn2022-cleaning-tail",
    "The 2022 uncleaned diagnostic reports a background-subtracted 200 s/40 s Pk1 count ratio of 1.76+/-0.15. The ratio corrects high-position counts missed by the short gate before the normal bottom-position counting interval."
  ],
  [
    "C-phys-ucn2022-segment-response",
    "Four strip fits from the 2022 dagger span about 10 s. Balancing relative photon thresholds across strips reduces the combined fitted lifetime by 0.22 s; the published 2022 result uses balanced gains."
  ],
  [
    "C-phys-ucn2017-2018-lifetime",
    "Gonzalez reports 877.75+/-0.28 (statistical) +0.22/-0.16 (systematic) seconds for the 2017/2018 data. The central estimate is the unweighted mean of the three full-data global fits, with the largest analyzer statistical uncertainty retained."
  ],
  [
    "C-phys-ucn2020-2022-lifetime",
    "Final Musedinovic Table III reports 877.96+/-0.37 seconds for the new 2020-2022 production campaigns, with statistical uncertainty. This current-data estimate uses the reported yearly averaging and correction procedure."
  ],
  [
    "C-phys-ucntau-global-lifetime",
    "Musedinovic reports a global UCNtau free-neutron lifetime of 877.83+/-0.22 (statistical) +0.20/-0.17 (systematic) seconds from the 2017, 2018, 2020, 2021 and 2022 campaigns. It imports the earlier corrected data and applies the stated current systematic budget."
  ],
  [
    "M-phys-ucn-al-loss",
    "Use the dedicated covered-block diagnostic to estimate surface incidence; keep the separate aluminum loss probability when interpreting production data."
  ],
  [
    "M-phys-ucn2018-uncleaned-loss",
    "Compare deliberately uncleaned storage with the reported production preparation and retain the conditional count-to-escape scaling."
  ],
  [
    "M-phys-ucn2022-cleaning-tail",
    "Use the published background-subtracted gate ratio only for the diagnostic tail correction; production loss bounds need additional population scaling."
  ],
  [
    "M-phys-ucn2022-segment-response",
    "Compare same-acquisition strip fits and the gain-balanced total; preserve the distinction between detector sensitivity and intrinsic lifetime."
  ],
  [
    "M-phys-ucn2017-2018-lifetime",
    "Combine the three full-data global fits with the original unweighted-center/largest-error rule and retain all declared non-decay-loss corrections."
  ],
  [
    "M-phys-ucn2020-2022-lifetime",
    "Combine only the new yearly results with their declared error weighting, detector corrections and post-unblinding selection; do not add the prior production data."
  ],
  [
    "M-phys-ucntau-global-lifetime",
    "Combine the five included production campaigns while retaining reused older data, the updated systematic assignment and unavailable cross-year covariance."
  ]
]);
const neutronComparisons = [
  {
    "id": "ucn-al-loss",
    "candidate": "Contact with an absorbing surface adds a storage-loss component in this preparation.",
    "alternative": "The diagnostic surface has negligible influence on stored-UCN yield.",
    "sourceIds": [
      "gonzalez2021"
    ],
    "discriminator": "Use the dedicated covered-block diagnostic to estimate surface incidence; keep the separate aluminum loss probability when interpreting production data.",
    "result": "conditional-support",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "The approximately 424 s additional component is produced in the polyethylene-covered-block diagnostic. It is not the uncoated aluminum production loss rate or the intrinsic neutron lifetime.",
      "Translation to aluminum-exposed production data additionally assumes the energy/angle-averaged aluminum loss probability; the diagnostic alone does not measure that probability.",
      "The control supports a material-loss correction in the declared setup. No universal lifetime change under arbitrary matter contact or independent numerical replay follows."
    ],
    "claimIds": [
      "C-phys-ucn-al-loss"
    ]
  },
  {
    "id": "ucn2018-uncleaned-loss",
    "candidate": "Retained high-energy UCN introduce extra escape loss during storage.",
    "alternative": "The uncleaned preparation has the same storage-loss behavior as the cleaned production preparation.",
    "sourceIds": [
      "gonzalez2021"
    ],
    "discriminator": "Compare deliberately uncleaned storage with the reported production preparation and retain the conditional count-to-escape scaling.",
    "result": "conditional-support",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "The roughly 15 s reduction belongs to deliberately uncleaned 2018 storage; the inferred escape rate is about 2*10^-5 per second under the stated model.",
      "The production bound assumes a linear relation between escape rate and high-position counts. Nonobservation of a production peak is not exact proof of zero uncleaned or heated neutrons.",
      "This comparison diagnoses apparatus-dependent storage loss. It does not imply that cleaning changes the neutron's intrinsic beta-decay law."
    ],
    "claimIds": [
      "C-phys-ucn2018-uncleaned-loss"
    ]
  },
  {
    "id": "ucn2022-cleaning-tail",
    "candidate": "The extended Pk1 gate supplies a correction for missed high-position counts.",
    "alternative": "The diagnostic ratio alone certifies a production non-decay-loss rate.",
    "sourceIds": [
      "musedinovic2025"
    ],
    "discriminator": "Use the published background-subtracted gate ratio only for the diagnostic tail correction; production loss bounds need additional population scaling.",
    "result": "not-tested",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "The published ratio 1.76+/-0.15 compares background-subtracted Pk1 counts accumulated for 200 s with those in 40 s in uncleaned diagnostic data. It is not a physical neutron lifetime or a fraction bounded by one.",
      "The correction accounts for counts in the long Pk1 tail overlapping the normal Pk2 timing. Scaling to production incomplete-cleaning/heating bounds requires an additional population assumption.",
      "The ratio, background subtraction and weighted combination with earlier diagnostics have not been independently reproduced."
    ],
    "claimIds": [
      "C-phys-ucn2022-cleaning-tail"
    ]
  },
  {
    "id": "ucn2022-segment-response",
    "candidate": "Position-dependent readout efficiency coupled to phase-space redistribution can bias the lifetime fit.",
    "alternative": "Other correlated detector or sampling effects produce the pattern without uniquely identifying phase-space evolution.",
    "sourceIds": [
      "musedinovic2025"
    ],
    "discriminator": "Compare same-acquisition strip fits and the gain-balanced total; preserve the distinction between detector sensitivity and intrinsic lifetime.",
    "result": "conditional-support",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "Four strip-specific fits in the same 2022 acquisition span about 10 s; the shortest strip 78 gives the shortest fitted lifetime. The fits are not independent samples of four intrinsic lifetimes.",
      "The authors interpret this as phase-space redistribution coupled to position-dependent detector efficiency. Relative gains vary about 20%; balancing photon thresholds shifts the combined fit by -0.22 s.",
      "Laser response mapping and segment reweighting support a stated 0.02 s uniformity uncertainty. These are sensitivity analyses, not a unique microscopic identification of phase-space evolution.",
      "Fast 2.87(0.07), segmented 5.70(0.07) and Slow 8.16(0.10) s in Figure 5 are unloading time constants. They must not replace the approximately 878 s neutron lifetime.",
      "The Sect II segmented summary reports 876.93(0.56) s; final Table III across-analyzer 2022 reporting uses 876.93(0.57) s. These summaries must not be counted twice or silently given one common statistical scope."
    ],
    "claimIds": [
      "C-phys-ucn2022-segment-response"
    ]
  },
  {
    "id": "ucn2017-2018-lifetime",
    "candidate": "The corrected storage analysis estimates a conventional free-neutron lifetime.",
    "alternative": "The published fit independently identifies all disappearance mechanisms or resolves the beam/bottle discrepancy.",
    "sourceIds": [
      "gonzalez2021"
    ],
    "discriminator": "Combine the three full-data global fits with the original unweighted-center/largest-error rule and retain all declared non-decay-loss corrections.",
    "result": "not-tested",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count.",
      "Use the unweighted mean of the three full-data global central estimates and the largest statistical error, 0.28 s. The 2021 publication does not use an error-of-the-mean reduction or the later paper's yearly error-average rule.",
      "The original systematic budget is +0.22/-0.16 s: event definition 0.13, normalization 0.06, depolarization +0.07, uncleaned +0.11, heating +0.08, aluminum 0.05 and gas 0.06 s. The nonzero central corrections +0.06 for aluminum and +0.11 for gas have already entered the reported lifetime.",
      "The aluminum model estimates loss per encounter (2+/-1)*10^-4 and gives +0.15+/-0.07 s for the contaminated subset; its +0.06+/-0.05 s contribution to the combined result has a different scope.",
      "Pressure, composition, loss-cross-section and detailed fit methods delegated to cited sources have not all been independently reconstructed. This is publication-supported storage inference, not a beta-branching or beam/bottle resolution test."
    ],
    "claimIds": [
      "C-phys-ucn2017-2018-lifetime"
    ]
  },
  {
    "id": "ucn2020-2022-lifetime",
    "candidate": "The corrected new-year storage analysis supplies a conditional free-neutron lifetime.",
    "alternative": "The fitted result independently certifies the correction model and source selection.",
    "sourceIds": [
      "musedinovic2025"
    ],
    "discriminator": "Combine only the new yearly results with their declared error weighting, detector corrections and post-unblinding selection; do not add the prior production data.",
    "result": "not-tested",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced."
    ],
    "claimIds": [
      "C-phys-ucn2020-2022-lifetime"
    ]
  },
  {
    "id": "ucntau-global-lifetime",
    "candidate": "The five-campaign combination estimates a free-neutron lifetime under the declared shared-systematic treatment.",
    "alternative": "The combination is an independent replication of its constituent studies or a resolved test of alternative decay channels.",
    "sourceIds": [
      "gonzalez2021",
      "musedinovic2025"
    ],
    "discriminator": "Combine the five included production campaigns while retaining reused older data, the updated systematic assignment and unavailable cross-year covariance.",
    "result": "not-tested",
    "limit": "The stated result is limited by its preparation, shared data, correction assumptions and unresolved reproduction requirements.",
    "assumptions": [
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ],
    "claimIds": [
      "C-phys-ucntau-global-lifetime"
    ]
  }
];
const neutronStudies = [
  {
    "id": "gonzalez2021-2017",
    "system": "UCNtau 2017 production preparation",
    "preparation": "The 2017 UCNtau campaign loads for 150 s, cleans for 50 s, stores for 20-1550 s and counts in three detector positions for 40, 20 and 150 s. Monitor choices and normalization precede the buffer-volume arrangement used in 2018. Part of the production data was exposed to a fallen aluminum component.",
    "limitations": [
      "The combined 2017/2018 dataset counts about 38 million surviving UCN, not 38 million beta decays or independently replicated lifetime measurements. The count is not separately assigned to each year.",
      "The 5.5 T polarizer and spin flipper prepare low-field-seeking UCN for an NdFeB Halbach trap with a 60-120 G holding field. Transport energies up to about 180 neV, cleaning near 38 neV and the reported 50 cm/about 51 neV trap boundary refer to different stages.",
      "The primary detector uses boron-10 capture in ZnS scintillator and two-PMT photon coincidences. Background, dead time, pileup and delayed scintillation affect the count; photoelectrons and neutron captures are different counting domains.",
      "Three analyses share these acquisitions. They initially develop separately, compare run-level quantities after sharing blinded fits, and unblind when fitted lifetimes agree within 0.1 s. The timing shift is within a stated +/-15 s window; this is not three independent experiments.",
      "Monitor weighting, spectral normalization and background estimates vary among analyzers and time subsets. Table I prints analysis-C intervals ((m-1)*t_fill,m*t_fill) without a division into twenty within-fill bins; the printed mean-arrival integral also lacks the normalization needed for count-rate input. These expressions require clarification before literal replay.",
      "Original timestamps, detector corrections, regression coefficients, selection decisions, full nuisance-parameter covariance and numerical fitting implementations have not been independently reproduced.",
      "The aluminum-exposed subset accounts for about 34% of the combined 2017/2018 data, not 34% of every year. The reported material-loss correction must remain part of the final lifetime interpretation.",
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count.",
      "Use the unweighted mean of the three full-data global central estimates and the largest statistical error, 0.28 s. The 2021 publication does not use an error-of-the-mean reduction or the later paper's yearly error-average rule.",
      "The original systematic budget is +0.22/-0.16 s: event definition 0.13, normalization 0.06, depolarization +0.07, uncleaned +0.11, heating +0.08, aluminum 0.05 and gas 0.06 s. The nonzero central corrections +0.06 for aluminum and +0.11 for gas have already entered the reported lifetime.",
      "The aluminum model estimates loss per encounter (2+/-1)*10^-4 and gives +0.15+/-0.07 s for the contaminated subset; its +0.06+/-0.05 s contribution to the combined result has a different scope.",
      "Pressure, composition, loss-cross-section and detailed fit methods delegated to cited sources have not all been independently reconstructed. This is publication-supported storage inference, not a beta-branching or beam/bottle resolution test.",
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  },
  {
    "id": "gonzalez2021-2018",
    "system": "UCNtau 2018 production preparation",
    "preparation": "The 2018 UCNtau campaign adds a buffer/precleaning volume and loads for 300 s. After 50 s cleaning, neutrons are stored for 20-1550 s and counted at cleaner, middle and bottom positions for 40, 20 and 150 s. Monitor detectors sample the changed loading arrangement.",
    "limitations": [
      "The combined 2017/2018 dataset counts about 38 million surviving UCN, not 38 million beta decays or independently replicated lifetime measurements. The count is not separately assigned to each year.",
      "The 5.5 T polarizer and spin flipper prepare low-field-seeking UCN for an NdFeB Halbach trap with a 60-120 G holding field. Transport energies up to about 180 neV, cleaning near 38 neV and the reported 50 cm/about 51 neV trap boundary refer to different stages.",
      "The primary detector uses boron-10 capture in ZnS scintillator and two-PMT photon coincidences. Background, dead time, pileup and delayed scintillation affect the count; photoelectrons and neutron captures are different counting domains.",
      "Three analyses share these acquisitions. They initially develop separately, compare run-level quantities after sharing blinded fits, and unblind when fitted lifetimes agree within 0.1 s. The timing shift is within a stated +/-15 s window; this is not three independent experiments.",
      "Monitor weighting, spectral normalization and background estimates vary among analyzers and time subsets. Table I prints analysis-C intervals ((m-1)*t_fill,m*t_fill) without a division into twenty within-fill bins; the printed mean-arrival integral also lacks the normalization needed for count-rate input. These expressions require clarification before literal replay.",
      "Original timestamps, detector corrections, regression coefficients, selection decisions, full nuisance-parameter covariance and numerical fitting implementations have not been independently reproduced.",
      "Short runs have storage times at most 500 s and long runs exceed 500 s in this analysis. That pairing rule is not the later experiment's 1550 s octet definition.",
      "The A/B/C estimates share acquisition and differ in selection, coincidence construction, normalization and background. Their statistical errors are correlated and must not be reduced by treating them as independent experiments.",
      "Paired short/long yields and global fits are alternative analyses of these acquisitions. Global A uses Poisson counts and nuisance marginalization, B uses a quasi-Poisson/profile likelihood, and C uses yield chi-square with variance scaling; no unique raw fit is reproduced.",
      "Loss corrections include the affected 2017 aluminum subset, residual gas, depolarization, incomplete cleaning and heating. The paired and global estimates already include their declared corrections.",
      "A fitted lifetime in the hundreds of seconds limits an unqualified permanence claim for free neutrons within the model; it does not test bound-neutron nuclear stability or determine a quark constituent count.",
      "Use the unweighted mean of the three full-data global central estimates and the largest statistical error, 0.28 s. The 2021 publication does not use an error-of-the-mean reduction or the later paper's yearly error-average rule.",
      "The original systematic budget is +0.22/-0.16 s: event definition 0.13, normalization 0.06, depolarization +0.07, uncleaned +0.11, heating +0.08, aluminum 0.05 and gas 0.06 s. The nonzero central corrections +0.06 for aluminum and +0.11 for gas have already entered the reported lifetime.",
      "The aluminum model estimates loss per encounter (2+/-1)*10^-4 and gives +0.15+/-0.07 s for the contaminated subset; its +0.06+/-0.05 s contribution to the combined result has a different scope.",
      "Pressure, composition, loss-cross-section and detailed fit methods delegated to cited sources have not all been independently reconstructed. This is publication-supported storage inference, not a beta-branching or beam/bottle resolution test.",
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  },
  {
    "id": "gonzalez2021-al-control",
    "system": "Polyethylene-covered block loss diagnostic",
    "preparation": "A dedicated diagnostic reintroduces the fallen aluminum block, covered in polyethylene foil, at its original trap location. The nearly absorbing covering is used to estimate how often UCN encounter that surface; a separate aluminum-loss model translates this diagnostic to the production contamination.",
    "limitations": [
      "The covered block is not the uncoated production contaminant. Its extra-loss component estimates surface incidence; aluminum loss per encounter remains an additional model input.",
      "Diagnostic runs do not augment the nominal lifetime production sample. Their conditional correction must not be applied twice to published corrected lifetimes.",
      "The diagnostic acquisition, energy/angle distribution and surface-loss calculation are not independently reproduced.",
      "The approximately 424 s additional component is produced in the polyethylene-covered-block diagnostic. It is not the uncoated aluminum production loss rate or the intrinsic neutron lifetime.",
      "Translation to aluminum-exposed production data additionally assumes the energy/angle-averaged aluminum loss probability; the diagnostic alone does not measure that probability.",
      "The control supports a material-loss correction in the declared setup. No universal lifetime change under arbitrary matter contact or independent numerical replay follows."
    ]
  },
  {
    "id": "gonzalez2021-uncleaned",
    "system": "2018 uncleaned UCN diagnostic",
    "preparation": "In dedicated 2018 runs the cleaner is never lowered before storage. The cleaner detector and primary detector then count UCN above the usual cleaning height; comparison with production conditions is used to assess escaping high-energy neutrons.",
    "limitations": [
      "This deliberately uncleaned preparation differs from the production sample. A shorter storage lifetime does not imply a changed intrinsic neutron decay law.",
      "Scaling observed diagnostic losses to production assumes a linear relation between escape rate and the high-position count; absence of a visible production peak is a sensitivity bound, not exact zero population.",
      "Underlying diagnostic counts and the escape/heating extrapolation are not independently replayed.",
      "The roughly 15 s reduction belongs to deliberately uncleaned 2018 storage; the inferred escape rate is about 2*10^-5 per second under the stated model.",
      "The production bound assumes a linear relation between escape rate and high-position counts. Nonobservation of a production peak is not exact proof of zero uncleaned or heated neutrons.",
      "This comparison diagnoses apparatus-dependent storage loss. It does not imply that cleaning changes the neutron's intrinsic beta-decay law."
    ]
  },
  {
    "id": "musedinovic2025-2020",
    "system": "UCNtau 2020 production preparation",
    "preparation": "The 2020 UCNtau campaign uses the Fast boron-coated ZnS dagger and roundhouse-dump normalization. An initial dagger with about 1.0 Hz americium-contamination background is replaced by one with about 0.2 Hz background; both belong to the declared campaign analysis.",
    "limitations": [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "The post-unblinding restoration concerns a roughly 659-run subset in 2020 with a reported 1.0 s lifetime shift. This is a selection correction, not a new independent experiment.",
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  },
  {
    "id": "musedinovic2025-2021",
    "system": "UCNtau 2021 Fast and Slow preparations",
    "preparation": "The 2021 UCNtau campaign includes a Fast dagger and a Slow variant with one whole side covered by UCN-reflective aluminum. The shared year result combines those declared configurations after rate and normalization corrections.",
    "limitations": [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "The Fast/Slow geometry-specific fits are subsets of the 2021 campaign. They must not be pooled again with the yearly result as independent data.",
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "The 2021 Fast-only fit is 879.81+/-1.18 s and Slow-only fit 877.94+/-0.69 s, with statistical errors. These are subsets of the yearly combination.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  },
  {
    "id": "musedinovic2025-2022",
    "system": "UCNtau 2022 segmented-dagger preparation",
    "preparation": "The 2022 UCNtau campaign divides the dagger into four vertical strips read by eight PMTs, with additional reflective aluminum strips. Segment photon thresholds are balanced to account for gain differences before the reported combined lifetime is used.",
    "limitations": [
      "The production data are from trapdoor-loaded UCN in 2020, 2021 and 2022. This paper reports a 45 cm/about 45 neV trap depth and cleaning at 38 cm; those numbers must not silently replace the different 2017/2018 preparation description.",
      "Typical loading lasts 300 s, followed by 50 s cleaning. Storage octets use 20,1550,1550,50,100,1550,1550,200 s; surviving-neutron readout first probes cleaning height, then lowers the dagger to about 1 cm above the bottom. Diagnostic timing differs.",
      "Roundhouse-dump normalization and a second, energy-sensitive monitor reduce sensitivity to the loaded spectrum; they do not make its distribution identical to the stored population. Short-hold data fit spectral and rolling normalization corrections.",
      "Coincidences begin with two PMTs within 100 ns, extend until a gap above 1000 ns and use a 20 ns fixed dead time; the standard threshold is ten photons. Detector-live-time and photon-tail/pileup corrections are fitted or simulated, not independently replayed here.",
      "About 90% of production runs pass analyzer-dependent selection. At least three analyses per year share the acquisitions. Timing was blinded with factors 0.99986-1.00171, but wrongly rejected 2020 runs were restored after unblinding; the reported change to the 2020-2022 combination is about -0.14 s. Final selection must not be described as entirely blinded.",
      "Equation 2 uses an empirically scaled yield-error model with DQE factors, including a net-count rather than independent peak-plus-background variance term. DQE parameters are adjusted from short-hold fluctuations and fit quality; reduced chi-square one is partly imposed, not an independent validation of the noise model.",
      "Rolling normalization uses short holds in overlapping blocks, typically fifteen runs within epochs. Its covariance and uncertainty are not independently reconstructed by dividing a printed yield error by the fitted correction factor.",
      "No acquisition-to-event selection, monitor correction, full covariance, Monte Carlo correction or lifetime-fit replay is supplied by this graph.",
      "Strip results and gain-reweighted fits use the same stored-neutron sample. They diagnose readout sensitivity; they do not define four neutron species or four independent lifetime experiments.",
      "Yearly central estimates are averages of analyzer results and yearly statistical errors are averages of their reported errors. Shared analyses do not supply independent neutron samples.",
      "The published final Table III is the admitted numerical source. Different numbers and year labels in the selected preprint passages are not alternate measurements.",
      "Residual-gas corrections assume water for the run-pressure conversion and assign 50% uncertainty for composition and measurement. Statistical-bias corrections use simulated exponential counts with an assumed 877.75 s lifetime; this calibration is not an independent observation of that value.",
      "The fitted uncertainty model, restored post-unblinding runs, detector gain balancing and unresolved systematic-table conventions remain part of the reported result. No exact raw-data fit or confidence calculation is reproduced.",
      "Four strip-specific fits in the same 2022 acquisition span about 10 s; the shortest strip 78 gives the shortest fitted lifetime. The fits are not independent samples of four intrinsic lifetimes.",
      "The authors interpret this as phase-space redistribution coupled to position-dependent detector efficiency. Relative gains vary about 20%; balancing photon thresholds shifts the combined fit by -0.22 s.",
      "Laser response mapping and segment reweighting support a stated 0.02 s uniformity uncertainty. These are sensitivity analyses, not a unique microscopic identification of phase-space evolution.",
      "Fast 2.87(0.07), segmented 5.70(0.07) and Slow 8.16(0.10) s in Figure 5 are unloading time constants. They must not replace the approximately 878 s neutron lifetime.",
      "The Sect II segmented summary reports 876.93(0.56) s; final Table III across-analyzer 2022 reporting uses 876.93(0.57) s. These summaries must not be counted twice or silently given one common statistical scope.",
      "The current result combines 2020, 2021 and 2022 with error-weighted yearly estimates; 2017 and 2018 are not new acquisitions in this combination.",
      "The statistical-bias correction is calibrated with 192 octets/1536 simulated runs, repeated 10000 times, and fitted as 2985.3*N0^(-1.00102+0.855/N0) seconds. Production corrections in Table II vary by configuration (.51,.50,.55,.31 s); simulation repetitions are not experimental replications.",
      "Table II lists a -0.22 s 2022 uniformity correction and zero for other configurations, but a +0.06 s average uniformity correction. A conventional signed average cannot recover that sign; the averaging convention is unresolved. Do not reconstruct the final central value by adding printed table entries.",
      "The printed average correction entries sum to 0.56 s while the stated total is 0.58 s; rounding and averaging details are unavailable. The printed +0.20/-0.17 s systematic budget is likewise not an exact quadrature reconstruction from rounded entries.",
      "Phase-space timing statements and Table II refer to small, scope-dependent shifts; the text gives bounds below 0.01 s and below 0.04 s in different discussions. No universal exact 0.01 s bound is adopted.",
      "The budget combines event-definition variation, detector uniformity, residual gas, bias, depolarization, incomplete cleaning, heating and timing. Acquisition, correction code, covariance and full-precision averaging inputs remain unreproduced.",
      "The global combination includes exactly the production years 2017, 2018, 2020, 2021 and 2022. The displayed 2016 and 2019 comparisons are excluded; current and global values must not be pooled as independent results.",
      "The 2017/2018 central results are imported from the earlier publication and already include its material/gas corrections. The 2025 paper applies its current systematic budget to the earlier data; no full cross-year covariance or separate older aluminum-uncertainty row is supplied.",
      "The 2025 Table III yearly inputs are 877.73(.32), 877.80(.50), 879.39(.89), 878.41(.58) and 876.93(.57) s, with statistical parentheses. Averaging these rounded entries alone does not exactly reproduce every published final digit; the full-precision pipeline is unavailable.",
      "The reported p=0.14 compares year results with their combination. It is not a significance test against infinite lifetime, a beam measurement, a dark-decay model or the Standard Model.",
      "UCNtau+ elevator loading and projected 0.10 s precision are future plans in the paper. They provide no additional observations for this graph."
    ]
  },
  {
    "id": "musedinovic2025-uncleaned",
    "system": "2022 cleaning-tail diagnostic",
    "preparation": "Dedicated uncleaned 2022 runs compare 40 s and 200 s counting gates at the cleaning-height position Pk1. This measures the long tail missed by the shorter gate before the dagger is lowered to the bottom position Pk2.",
    "limitations": [
      "The 200 s/40 s Pk1 ratio corrects a diagnostic counting tail. It is not a neutron survival probability, a universal counting efficiency or an independent lifetime result.",
      "Production heating and incomplete-cleaning limits additionally assume scaling from this diagnostic high-energy population to the production sample.",
      "The 2025 systematic budget weights cleaning/heating assessments from this work and the earlier paper; raw diagnostic counts and those combination weights are not independently reproduced.",
      "The published ratio 1.76+/-0.15 compares background-subtracted Pk1 counts accumulated for 200 s with those in 40 s in uncleaned diagnostic data. It is not a physical neutron lifetime or a fraction bounded by one.",
      "The correction accounts for counts in the long Pk1 tail overlapping the normal Pk2 timing. Scaling to production incomplete-cleaning/heating bounds requires an additional population assumption.",
      "The ratio, background subtraction and weighted combination with earlier diagnostics have not been independently reproduced."
    ]
  }
];

const isospinLimits = [
  "These are reported computational results for the specified action, ensembles and fitting procedure. The 60 TB archive, correlators, covariance matrices and analysis code have not been independently replayed.",
  "Stability in this calculation concerns the included strong and electromagnetic interactions. Weak decays, a neutron lifetime, proton-decay bounds, nuclear stability and real-time hadron formation are outside its calculated scope.",
  "Quark flavors, field components, sources per configuration and fitted states are different counting domains. The calculation establishes no universal constituent minimum or graph-level generative rule.",
  "Weak interactions, dynamical leptons, bottom and top are neglected or absorbed into effective parameters at the precision stated by the authors. This is a scoped effective description, not the full Standard Model.",
  "Sign and channel matter: Delta_Sigma=M_Sigma--M_Sigma+, Delta_Xi=M_Xi--M_Xi0, Delta_D=M_D+-M_D0, and Delta_Xi_cc=M_Xi_cc++-M_Xi_cc+. A label such as charged minus neutral does not have the same sign in every channel.",
  "The primary physical-point inputs are M_pi+=139.570, M_K+=493.68, M_K0=497.61, M_D0=1864.9 and M_Omega=1672.4 MeV, with alpha^-1=137.036. The kaon squared-mass input is 3896 MeV^2. These are the paper's adopted inputs, not independent mass measurements or predictions reproduced here.",
  "Omega sets the final scale. The exploratory w0=0.1755 fm value and charmonium tuning target are preparation aids, not extra predicted observables. The ratio and mass-independent normalization methods reuse the same ensembles.",
  "Equation S37 uses the kaon squared-mass difference, which itself mixes QCD and QED. Its second term is not a pure strong contribution before a separation convention is supplied.",
  "The alternative analysis using the Sigma splitting in place of the kaon difference has a different input set; a quantity used to tune that alternative cannot simultaneously count as its independent prediction.",
  "The Wilson-flow charge is defined at hadronic scales, with final choices 280 and 525 MeV. Matching to the Thomson-limit input neglects effects of order alpha^2 at the stated precision; bare e is not the renormalized physical coupling.",
  "QED_L removes spatial photon zero modes on every time slice. QED_TL removes only the four-momentum zero mode and has an ill-defined T-to-infinity limit at fixed L for the conventional charged-particle mass extraction. This is a regulator distinction, not two experimental forces.",
  "At order alpha, the leading mass correction is -q^2*alpha*kappa/(2*L)*(1+2/(m*L)), with kappa approximately 2.837297 in units hbar=c=1. Universality through 1/L^2 assumes the photon is the only massless asymptotic state and the charged particle is stable and nondegenerate with states sharing its quantum numbers.",
  "Terms of order 1/L^3 can depend on internal structure and spin; a point-fermion coefficient cannot be imposed on every hadron. Vanishing leading q^2 terms for a neutral particle do not prove absence of all finite-volume effects.",
  "In the full QCD+QED theory the paper's continuum prescription retains an extremely small nonzero cutoff because of QED triviality. Its practical extrapolation does not establish a nonperturbative interacting QED limit at exactly zero lattice spacing.",
  "The component split has a convention ambiguity of order alpha*(m_d-m_u). The selected convention sets the electromagnetic Sigma-minus/Sigma-plus splitting to zero; the zero is a definition within the stated accuracy, not a measured null result.",
  "Under the connected-meson alternative, the same article reports a Sigma electromagnetic contribution of 0.18+/-0.12 (statistical) +/-0.06 (systematic) MeV. This motivates an approximate benchmark convention but does not establish exact vanishing in every scheme.",
  "Opposite QCD and QED components describe parameter-dependent contributions to mass differences. They are not separately observed forces, measured shares of the nucleon mass or statistical probabilities.",
  "The tabulated total and component values are separately rounded and correlated. For example 2.52-1.00=1.52 MeV from rounded entries does not justify replacing the reported total 1.51 MeV; marginal errors must not be combined as independent components.",
  "The 41 ensembles comprise 27 zero-electromagnetic-coupling rows and 14 nonzero-coupling rows. They are not 41 detector experiments or 41 replications of the full extrapolation.",
  "Table S2 gives a=0.102, 0.089, 0.077 and 0.064 fm for beta=3.2, 3.3, 3.4 and 3.5. Table S4 has nonzero electromagnetic coupling only at beta=3.2, 3.3 and 3.5; beta=3.4 is represented only in the neutral ensemble table.",
  "The main text lists four bare alpha values including zero, whereas Table S4 lists four nonzero bare e values: sqrt(4*pi/137), 0.71, 1.00 and 1.41. Together with e=0 these are five values. The additional 0.71 row is retained; the prose/table census disagreement is unresolved.",
  "The main text describes the lightest pion mass as about 195 MeV; the lowest rounded Table S3 entries are 197 MeV. Charged ensembles reach 236 MeV in Table S4. The physical pion point is reached through extrapolation, not a simulated physical-pion ensemble.",
  "Configurations are separated by ten unit-length trajectories; the reported topological autocorrelation can reach about 50 trajectories. Hundreds of source positions reduce estimator noise, not the number of independent gauge samples. Fourier acceleration does not eliminate autocorrelation in the coupled quark theory.",
  "Nonnegative determinant weights are checked a posteriori for the chosen parameter region. Algorithmic stability is not a general proof for all masses, volumes or lattice spacings.",
  "The full hadronic calculation is dynamical QCD+QED. The separate point-particle implementation checks in Section 4 use quenched QED; their preparation cannot replace the production ensembles.",
  "These four runs are a subset of the 14 charged production ensembles, not an independent replication of the 41-ensemble result. The temporal extent changes with the spatial box and the QED_L large-time assumptions remain applicable.",
  "The bare coupling e=1.00 is larger than the physical coupling. Figure 1 uses the approximate label bare alpha about 1/10; e^2/(4*pi), the renormalized flow coupling and physical alpha are distinct quantities.",
  "The plotted kaon mass-squared difference is negative at this enhanced coupling. That sign is not the physical kaon mass ordering and is not evidence of a neutron-proton sign reversal.",
  "No significant neutral-kaon volume dependence is resolved in this scan; that does not prove exactly zero corrections. The charged-neutral difference needs a fitted 1/L^3 term in addition to the universal leading terms.",
  "Isospin partners are fitted jointly with their mass difference, mean mass and two amplitudes, retaining time-slice and partner correlations. Only ten time slices are fitted at once for covariance stability.",
  "The fit-window rule uses a Kolmogorov-Smirnov probability greater than 0.3 across ensemble fit qualities and a second start one time slice later. This is an analysis-selection rule, not a probability that the particle model is true.",
  "Table S5 starts are 1.1 fm for N, Sigma and D, 1.3 fm for Xi and 1.2 fm for Xi_cc. Figure S12 points are adjusted to the physical point in other parameters and averaged by lattice spacing; they are not unprocessed correlator measurements.",
  "About 500 fit variants vary normalization, mass dependence, cutoff terms, two correlator starts and two charge-renormalization scales. They reuse simulation data and are not independent replications.",
  "AIC weights are proportional to exp[-(chi^2+2*p)/2]. The weighted mean gives the central estimate, variation among fits estimates systematic uncertainty, and the complete procedure is repeated on 2000 bootstrap samples for statistical uncertainty. AIC weights are not probabilities of physical truth or graph-edge strengths.",
  "The chosen family includes g^2*a or a^2 discretization terms, mass extrapolations, and a fitted 1/L^3 electromagnetic term after the leading finite-volume corrections. Its uncertainty does not exhaust arbitrary omitted models or higher orders.",
  "The primary Coleman-Glashow combination is fitted rather than constrained to zero. One auxiliary cross-check assumes that relation; it cannot independently verify the relation it imposes.",
  "Three auxiliary analyses reuse the data; details are not fully supplied. One masks mass differences by a random factor between 0.7 and 1.3. This is not independent simulation replication or evidence that every analysis was blinded.",
  "The neutron-proton total is reported as about five standard deviations above zero under the selected error construction. The paper does not supply an independently reproduced discovery p-value here. Comparisons with known masses are postdictions; the 2015 statement that some channels were unmeasured is not a current experimental census.",
  "Table parentheses apply to the last digits. The Coleman-Glashow combination is separately fitted with correlations; neither exact cancellation nor its uncertainty follows from adding the independently rounded marginal table entries.",
  "This reported dimensionless ratio additionally uses the experimental neutron-proton difference. It is not the uncalibrated ratio of the rounded 2.52 and -1.00 MeV components, nor an independent prediction of the total mass splitting.",
  "Figure 3 uses this experiment-constrained ratio in its parameter contours. Its contour plot and inverse-beta-decay region are conditional illustrations, not independent simulations of cosmology, atomic survival, neutron lifetime or a new generative graph.",
  "The underlying experimental mass measurement is delegated to the article's PDG reference and has not been independently reviewed here; no primary experimental confirmation or numerical propagation of its covariance is claimed."
];

const isospinClaims = [
  {
    "id": "D-phys-qcd-qed-hadron-theory",
    "statement": "The reviewed low-energy model includes dynamical up, down, strange and charm quarks with nondegenerate masses, gluons and photons. Quark charges are +2/3 for up/charm and -1/3 for down/strange in units of e; both strong and electromagnetic fields enter the Euclidean action.",
    "limits": [
      0,
      1,
      2,
      3
    ]
  },
  {
    "id": "D-phys-isospin-mass-splitting",
    "statement": "A mass splitting is a signed difference between specified isospin partners. Here Delta_N=M_n-M_p; isospin breaking is expanded to first order in the renormalized alpha and delta_m=m_d-m_u. It is distinct from an absolute hadron mass, decay width or lifetime.",
    "limits": [
      0,
      1,
      2,
      4
    ]
  },
  {
    "id": "D-phys-qcd-qed-calibration",
    "statement": "Charged-pion, charged/neutral-kaon and neutral-D masses fix the physical quark-mass point, the Omega mass sets the scale, and the electromagnetic input is alpha^-1=137.036. Experimental inputs and fitted extrapolations precede the reported isospin-splitting comparison.",
    "limits": [
      5,
      6,
      7,
      8,
      9
    ]
  },
  {
    "id": "D-phys-qedl-volume-correction",
    "statement": "QED_L removes photon modes with zero spatial momentum at every Euclidean time. Leading finite-volume mass terms scale as 1/L and 1/L^2 under the stated Ward-identity assumptions; composite-particle terms beyond those orders require additional treatment.",
    "limits": [
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "D-phys-qcd-qed-separation",
    "statement": "Separating an isospin splitting into strong and electromagnetic contributions requires a convention. Borsanyi adopts Delta_QED M_Sigma=0 at the reported precision, then infers the kaon electromagnetic squared-mass contribution and the other channel components.",
    "limits": [
      14,
      15,
      16,
      17
    ]
  },
  {
    "id": "M-phys-borsanyi2015-context",
    "statement": "Dynamical 1+1+1+1-flavor QCD+QED with tree-level Symanzik gluon action, clover-improved Wilson quarks, three HEX gluon-smearing steps and one APE photon-smearing step. The QED_L prescription, 27 neutral and 14 charged ensembles, four overall lattice spacings and declared mass/charge inputs define the production analysis.",
    "limits": [
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      0,
      1,
      2
    ]
  },
  {
    "id": "M-phys-borsanyi-volume-context",
    "statement": "Four Table S4 ensembles at beta=3.2, bare e=1.00, a*m_u=-0.0859, a*m_d=-0.0792 and a*m_s=-0.0522: L^3*T=24^3*48, 32^3*64, 48^3*96 and 80^3*64. The rounded pion masses are 292, 290, 290 and 289 MeV. The common lattice spacing is about 0.102 fm; Figure 1 describes M_K0 as about 450 MeV.",
    "limits": [
      25,
      26,
      27,
      28,
      0
    ]
  },
  {
    "id": "C-phys-borsanyi-lattice-splittings",
    "statement": "The paper extracts finite-lattice mass differences by fitting Euclidean correlators of isospin partners jointly. Ensemble fit-quality distributions and the selected time windows precede physical-point and cutoff extrapolations.",
    "limits": [
      29,
      30,
      31,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      0,
      1,
      2
    ]
  },
  {
    "id": "C-phys-borsanyi-kaon-volume",
    "statement": "For the four enhanced-coupling volumes, Figure 1 reports chi^2/dof=0.86 for the neutral-kaon constant fit and 0.90 for the squared-mass-difference fit with a free 1/L^3 term. The leading 1/L and 1/L^2 terms alone do not describe all four mass-difference points.",
    "limits": [
      25,
      26,
      27,
      28,
      0,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "C-phys-borsanyi-isospin-spectrum",
    "statement": "Table 1 reports total splittings in MeV with statistical then systematic uncertainties: n-p 1.51(16)(23); Sigma--Sigma+ 8.09(16)(11); Xi--Xi0 6.66(11)(09); D+-D0 4.68(10)(13); Xi_cc++-Xi_cc+ 2.16(11)(17); Coleman-Glashow combination Delta_N-Delta_Sigma+Delta_Xi 0.00(11)(06). The neutron-proton total is 1.51+/-0.16 (statistical) +/-0.23 (systematic) MeV.",
    "limits": [
      5,
      6,
      7,
      8,
      9,
      32,
      33,
      34,
      35,
      36,
      37,
      0,
      1,
      2,
      38
    ]
  },
  {
    "id": "C-phys-borsanyi-qcd-qed-components",
    "statement": "In the selected convention, Table 1 gives QCD and QED components in MeV, with statistical then systematic uncertainties: n-p 2.52(17)(24) and -1.00(07)(14); Sigma--Sigma+ 8.09(16)(11) and 0 by convention; Xi--Xi0 5.53(17)(17) and 1.14(16)(09); D+-D0 2.54(08)(10) and 2.14(11)(07); Xi_cc++-Xi_cc+ -2.53(11)(06) and 4.69(10)(17); Coleman-Glashow -0.00(13)(05) and 0.00(06)(02). Equation S38 gives the electromagnetic kaon squared-mass contribution -2250(80)(90) MeV^2.",
    "limits": [
      14,
      15,
      16,
      17,
      32,
      33,
      34,
      35,
      36,
      37,
      0,
      1,
      2
    ]
  },
  {
    "id": "C-phys-borsanyi-calibrated-ratio",
    "statement": "After additionally using the experimental neutron-proton mass difference, Borsanyi reports (M_n-M_p)_QCD/(M_n-M_p)_QED=-2.49+/-0.23 (statistical) +/-0.29 (systematic). This is a dimensionless, convention-dependent calibrated inference.",
    "limits": [
      39,
      40,
      41,
      14,
      15,
      16,
      17,
      0,
      1,
      2
    ]
  },
  {
    "id": "M-phys-borsanyi-kaon-volume",
    "statement": "Compare the declared four-volume scan while retaining its common bare parameters, varying temporal extents and fitted 1/L^3 term.",
    "limits": [
      25,
      26,
      27,
      28,
      0,
      10,
      11,
      12,
      13
    ]
  },
  {
    "id": "M-phys-borsanyi-isospin-spectrum",
    "statement": "Compare the physical-point outputs with the paper's experimental reference while retaining input masses, fitted corrections, analysis selection and correlated uncertainty.",
    "limits": [
      5,
      6,
      7,
      8,
      9,
      32,
      33,
      34,
      35,
      36,
      37,
      0,
      1,
      2
    ]
  },
  {
    "id": "M-phys-borsanyi-qcd-qed-components",
    "statement": "State the convention and compare scheme dependence before treating separate components as physically measured quantities.",
    "limits": [
      14,
      15,
      16,
      17,
      0,
      1,
      2
    ]
  },
  {
    "id": "M-phys-borsanyi-calibrated-ratio",
    "statement": "Track the extra experimental input and its provenance when interpreting the ratio and Figure 3.",
    "limits": [
      39,
      40,
      41,
      14,
      15,
      16,
      17,
      0,
      1,
      2
    ]
  },
  {
    "id": "D-phys-nucleon-ratio-calibration",
    "statement": "The reported nucleon QCD/QED component ratio supplements the lattice calculation with the experimental neutron-proton mass difference. This additional calibration input is separate from the primary mass and charge inputs used for the unconstrained isospin spectrum.",
    "limits": [
      39,
      40,
      41
    ]
  }
];

const isospinStudies = [
  {
    "id": "borsanyi2015",
    "system": "Four-flavor isospin-breaking ensemble",
    "preparation": "Dynamical 1+1+1+1-flavor QCD+QED with tree-level Symanzik gluon action, clover-improved Wilson quarks, three HEX gluon-smearing steps and one APE photon-smearing step. The QED_L prescription, 27 neutral and 14 charged ensembles, four overall lattice spacings and declared mass/charge inputs define the production analysis."
  },
  {
    "id": "borsanyi2015-volume",
    "system": "Enhanced-coupling kaon volume scan",
    "preparation": "Four Table S4 ensembles at beta=3.2, bare e=1.00, a*m_u=-0.0859, a*m_d=-0.0792 and a*m_s=-0.0522: L^3*T=24^3*48, 32^3*64, 48^3*96 and 80^3*64. The rounded pion masses are 292, 290, 290 and 289 MeV. The common lattice spacing is about 0.102 fm; Figure 1 describes M_K0 as about 450 MeV."
  }
];

const isospinComparisons = [
  {
    "id": "borsanyi-kaon-volume",
    "result": "conditional-support"
  },
  {
    "id": "borsanyi-isospin-spectrum",
    "result": "conditional-support"
  },
  {
    "id": "borsanyi-qcd-qed-components",
    "result": "not-tested"
  },
  {
    "id": "borsanyi-calibrated-ratio",
    "result": "not-tested"
  }
];

const captureLimits = [
  "The adopted 1999 ILL2.5 spacing is 1.920155723(96)e-10 m at 22.5 C in vacuum, from Table 3A. Table 3B gives 1.920155760(96)e-10 m using more PTB comparison steps; the authors select A rather than treating both as independent measurements.",
  "PTB and IMGC routes agree more closely than the NRLM route. The authors enlarge the lattice relative uncertainty to 5e-8 by judgment; it is not an independently reproduced statistical fit uncertainty.",
  "Angles were measured near 0.987 atmosphere. The crystal compression coefficient is 0.3452e-6 per atmosphere; omitting the factor 1-epsilon*p changes the inferred wavelength.",
  "The lattice scale is a measured input with its own temperature, pressure, reference-crystal and covariance dependencies, not an exact universal length or a prediction of the gamma-ray experiment.",
  "The later author report uses d220(ILL2.5)=1.920155822(96)e-10 m, retaining a 5e-8 relative uncertainty after enlarging the underlying adjustment uncertainty. Its deuterium row reuses Kessler data and is not a new capture experiment.",
  "The earlier wavelength and mass cannot be combined with a later crystal spacing or conversion constant while retaining their old central values. Recalculation is required; this review does not replay the underlying lattice adjustment.",
  "In the 2022 CODATA adjustment published in 2025, eta_d=2.90430245(49)e-3 is the dimensionless diffraction input with lambda=eta_d*d220(ILL). Table XXV D14 nevertheless prints m after this number. That unit conflicts with Section II.B and Equation 6; the dimensionless definition is used and the table discrepancy remains unresolved.",
  "The 2005 author report notes that erroneous 2004 lattice measurements affected the 2002 adjustment, and uses the 1998 adjustment for this recalculation. Those upstream measurements and their erratum have not been independently reviewed here.",
  "At the stated precision the recoil prescription is E_B approximately E_gamma + E_gamma^2/(2*m_d*c^2), so the energy-equivalent wavelength is shorter than the photon wavelength. It is not a second detected photon.",
  "The recoil mass is the deuteron nuclear mass, not a deuterium atomic mass or the Kapton molecular mass. Thermal capture and the stated prompt-emission conditions limit this approximation; it is not an exact arbitrary-kinematics formula.",
  "The paper reports a 5e-10 relative uncertainty contribution from recoil constants, negligible at its measurement precision. This does not make recoil itself negligible or set omitted kinematic effects identically to zero.",
  "A capture photon, a binding-energy inference and an inferred neutron mass are different observables. None establishes a free-neutron lifetime, proton stability, a universal constituent minimum or a real-time hadron formation mechanism.",
  "The 1999 inverse-meter conversions are 1.331025045(11)e-15 u and 1.239841870(54)e-6 eV per inverse meter. The first is a mass-equivalent conversion h/(m_u*c), the second is hc/e; energy and mass units are not interchangeable without c^2.",
  "The conversions depend on the paper's electron relative mass, fine-structure constant, Rydberg constant and other adopted constants. Their uncertainties are different; changing to modern SI constants is a new calculation, not a silent correction of the published result.",
  "Reported 1999 masses and conversion constants belong to that analysis. They are not current recommended constants or an independently traced input to the Borsanyi calculation.",
  "The adopted atomic relative-mass difference Ar(2H)-Ar(1H)=1.00627674630(71) comes from DiFilippo et al. (1994), cited by Kessler. The primary mass-spectrometry article is reviewed; its unprinted fit covariance and original measurements remain unreproduced.",
  "The paper uses the atomic mass difference plus the mass-equivalent binding energy at its precision. This is not a general exact identification of atomic and nuclear masses; electron binding and charge-state corrections require their own treatment at higher precision.",
  "The published neutron mass is inferred by adding the adopted hydrogen-isotope mass difference and the capture-derived binding-energy mass equivalent. It is not a direct Penning-trap measurement of a neutral neutron.",
  "The quoted uncertainty contributions are 0.42e-9 u from binding energy and 0.71e-9 u from mass spectrometry, with total 0.82e-9 u after rounding. No upstream covariance or raw mass-spectrometry fit is reproduced.",
  "The five configuration groups are combined as two campaign sets because settings within a campaign share an angle calibration. They are not five independent mass experiments.",
  "Each angle determination uses four profiles in the +,-,-,+ sequence. Bragg-angle counts, scan points, detected photons and independent calibration sets are distinct counting domains.",
  "Profiles contain approximately 45 points with 60 or 90 seconds per point. A scan-specific summed pulse-height window precedes fitting dynamical diffraction profiles with Gaussian broadening; a profile width is not a direct neutron mass.",
  "The approximately 6 g Kapton source in three graphite holders is exposed to about 5e14 neutrons per square centimeter per second. Its roughly 450 C environment and about 1.2 percent daily hydrogen loss do not describe isolated stationary free neutrons.",
  "Four optical-polygon calibrations near the campaigns use the sum of 24 exterior angles, 2*pi. One serves 1995 and three serve March 1998; the 1998 humidity dependence is about 0.5e-6 per ten percentage points, with calibration relative uncertainty expanded to 1e-7.",
  "Within each campaign the weighted-mean uncertainty is enlarged by sqrt(chi^2/dof), then the 1e-7 relative calibration uncertainty is added in quadrature. The two campaign means are combined before adding crystal-temperature and vertical-divergence contributions.",
  "The final angle uncertainty includes relative contributions 0.1e-6 from crystal temperature and 0.05e-6 from vertical divergence. The 0.083202194(11) degree intermediate value excludes these final contributions; the final value is 0.083202194(14) degrees.",
  "Table 2 prints final March 1995 result beneath the March 1998 configuration rows. Section 3 and the rows identify the second campaign as March 1998; the inconsistent printed label remains disclosed.",
  "Repeatability across years and settings is an internal consistency check using the same facility and crystals, not independent replication or proof that every systematic effect has been removed.",
  "These are published results for the stated capture source, spectrometer and calibration. Raw count profiles, fringe records, calibration runs and their covariance have not been independently replayed.",
  "The corrected 1986 binding-energy comparison still differs from the 1999 result by about 4.2e-6 relatively. Temperature, alignment and interferometer errors are proposed explanations, not identified and verified causes.",
  "Some older detector comparisons share crystal-derived energy standards. Their corrected central values and expanded uncertainties are the authors' comparisons, not independent confirmations reviewed here."
];

const captureClaims = [
  {
    "id": "D-phys-bragg-wavelength",
    "statement": "For the first-order angle used by Kessler, lambda_gamma=2*d220*(1-epsilon*p)*sin(theta), with d220 the vacuum spacing at 22.5 C and pressure p in atmospheres. The angle and crystal scale are separate inputs.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "D-phys-ill25-calibration",
    "statement": "The 1999 wavelength extraction adopts Table 3A d220(ILL2.5)=1.920155723(96)e-10 m in vacuum at 22.5 C, with the stated pressure correction for measurements in the reactor hall.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "D-phys-capture-recoil-energy",
    "statement": "For capture by an approximately stationary proton, the binding energy includes the measured photon energy and the recoiling deuteron kinetic energy. The leading correction is E_gamma^2/(2*m_d*c^2).",
    "limits": [
      8,
      9,
      10,
      11
    ],
    "sourceIds": [
      "kessler1999",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "D-phys-binding-unit-conversion",
    "statement": "Kessler converts the reciprocal recoil-corrected wavelength using 1.331025045(11)e-15 u per inverse meter or 1.239841870(54)e-6 eV per inverse meter. These are adopted 1999 conversion constants with uncertainties.",
    "limits": [
      12,
      13,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "D-phys-hydrogen-isotope-mass-input",
    "statement": "The neutron-mass extraction adopts Ar(2H)-Ar(1H)=1.00627674630(71), a dimensionless relative atomic-mass difference, from the mass-spectrometry reference cited by Kessler.",
    "limits": [
      15,
      16,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "difilippo1994"
    ]
  },
  {
    "id": "D-phys-neutron-mass-balance",
    "statement": "For nuclear rest masses, m_n=m_d-m_p+E_B(d)/c^2. Kessler implements the inference at the paper's precision with a hydrogen-isotope atomic-mass difference and the measured binding-energy mass equivalent.",
    "limits": [
      15,
      16,
      17,
      18,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "mohr2025-neutron",
      "difilippo1994"
    ]
  },
  {
    "id": "D-phys-ill25-adjusted-calibration",
    "statement": "The selected Dewey author report adopts d220(ILL2.5)=1.920155822(96)e-10 m at 22.5 C in vacuum from the 1998 adjustment with an enlarged uncertainty; this supplies a recalculation of the existing capture data.",
    "limits": [
      4,
      5,
      6,
      7
    ],
    "sourceIds": [
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-kessler1995-context",
    "statement": "February 1995 GAMS4 capture campaign at ILL: the common Kapton source and ILL2.5 silicon crystals, with 44 Bragg-angle determinations in (1,-2)/(1,2) and 8 in (2,-1)/(2,2). The March 6-7, 1995 optical-polygon calibration serves this campaign.",
    "limits": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "M-phys-kessler1998-context",
    "statement": "March 1998 GAMS4 capture campaign at ILL: the common Kapton source and ILL2.5 silicon crystals, with 32 Bragg-angle determinations in (1,-2)/(1,2), 32 in (2,-1)/(2,2) and 25 in (1,-3)/(1,3). Calibrations on March 7-8, 25-26 and 29-30 and a humidity correction serve this campaign.",
    "limits": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "C-phys-kessler1995-angle",
    "statement": "Table 2 gives 0.083202185(11) and 0.083202104(40) degrees for the 44- and 8-determination groups. The campaign estimate is 0.083202180(22) degrees after the stated uncertainty treatment.",
    "limits": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "C-phys-kessler1998-angle",
    "statement": "Table 2 gives 0.083202197(12), 0.083202229(22) and 0.083202190(12) degrees for the 32-, 32- and 25-determination groups. The campaign estimate is 0.083202199(12) degrees.",
    "limits": [
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "C-phys-kessler-combined-angle",
    "statement": "The two-campaign final first-order angle is 0.083202194(14) degrees at 22.5 C, including the stated crystal-temperature and vertical-divergence uncertainty contributions.",
    "limits": [
      24,
      25,
      26,
      27,
      19,
      20,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "C-phys-kessler-capture-wavelength",
    "statement": "Equation 1 reports lambda_gamma=5.57671299(99)e-13 m using the two-campaign angle, adopted ILL2.5 spacing and pressure correction. This is the emitted photon wavelength before recoil conversion.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "C-phys-kessler-binding-energy",
    "statement": "Equations 3, 5 and 7 report the recoil-corrected energy-equivalent wavelength 5.57340978(99)e-13 m, binding-energy mass equivalent 2.38817007(42)e-3 u and binding energy 2224566.14(41) eV.",
    "limits": [
      8,
      9,
      10,
      12,
      13,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "C-phys-kessler-neutron-mass",
    "statement": "Combining the adopted hydrogen-isotope mass difference with the binding-energy mass equivalent gives the reported neutron mass 1.00866491637(82) u. The binding-energy and mass-spectrometry uncertainty contributions are 0.42e-9 u and 0.71e-9 u.",
    "limits": [
      17,
      18,
      29,
      30,
      15,
      16,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron",
      "difilippo1994"
    ]
  },
  {
    "id": "C-phys-kessler-recalibrated-wavelength",
    "statement": "The selected Dewey author report Table VII reuses the Kessler measurement with adjusted lattice input: photon wavelength 5.57671328(99)e-13 m and recoil-corrected energy-equivalent wavelength 5.57341007(99)e-13 m. Its Table VIII binding-energy mass equivalent is 2.38816996(42)e-3 u.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-kessler-combined-angle",
    "statement": "Combine the two campaign means after their within-campaign uncertainty treatment; retain shared calibration and final systematic terms.",
    "limits": [
      24,
      25,
      26,
      27,
      19,
      20,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "M-phys-kessler-capture-wavelength",
    "statement": "Apply the specified vacuum spacing, temperature convention and pressure correction to the combined angle.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-kessler-binding-energy",
    "statement": "Apply the stated nuclear recoil prescription and the 1999 conversion constants, keeping photon and energy-equivalent wavelengths distinct.",
    "limits": [
      8,
      9,
      10,
      12,
      13,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-kessler-neutron-mass",
    "statement": "Combine the declared mass difference and mass-equivalent binding energy with their uncertainty contributions; trace each input separately.",
    "limits": [
      17,
      18,
      29,
      30,
      15,
      16,
      4,
      5,
      6,
      7,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron",
      "difilippo1994"
    ]
  },
  {
    "id": "M-phys-kessler-recalibrated-wavelength",
    "statement": "Retain the original two campaigns while applying the declared adjusted crystal scale; do not count the recalculation as new acquisition.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      28,
      11,
      14
    ],
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  }
];

const captureStudies = [
  {
    "id": "kessler1995",
    "system": "GAMS4 capture campaign in 1995",
    "preparation": "February 1995 GAMS4 capture campaign at ILL: the common Kapton source and ILL2.5 silicon crystals, with 44 Bragg-angle determinations in (1,-2)/(1,2) and 8 in (2,-1)/(2,2). The March 6-7, 1995 optical-polygon calibration serves this campaign."
  },
  {
    "id": "kessler1998",
    "system": "GAMS4 capture campaign in 1998",
    "preparation": "March 1998 GAMS4 capture campaign at ILL: the common Kapton source and ILL2.5 silicon crystals, with 32 Bragg-angle determinations in (1,-2)/(1,2), 32 in (2,-1)/(2,2) and 25 in (1,-3)/(1,3). Calibrations on March 7-8, 25-26 and 29-30 and a humidity correction serve this campaign."
  }
];

const captureComparisons = [
  {
    "id": "kessler-combined-angle",
    "result": "conditional-support",
    "sourceIds": [
      "kessler1999"
    ]
  },
  {
    "id": "kessler-capture-wavelength",
    "result": "conditional-support",
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "kessler-binding-energy",
    "result": "conditional-support",
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  },
  {
    "id": "kessler-neutron-mass",
    "result": "conditional-support",
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron",
      "difilippo1994"
    ]
  },
  {
    "id": "kessler-recalibrated-wavelength",
    "result": "not-tested",
    "sourceIds": [
      "kessler1999",
      "dewey2006-capture",
      "mohr2025-neutron"
    ]
  }
];

const captureSources = [
  {
    "id": "kessler1999",
    "doi": "10.1016/S0375-9601(99)00078-X",
    "url": "https://www.ati.ac.at/~neutropt/team/jericha/nkphSkriptum.pdf#page=37",
    "year": 1999,
    "extent": "full-primary-article"
  },
  {
    "id": "dewey2006-capture",
    "doi": "10.1103/PhysRevC.73.044303",
    "url": "https://arxiv.org/abs/nucl-ex/0507011v1",
    "year": 2006,
    "extent": "selected-primary-author-report"
  },
  {
    "id": "mohr2025-neutron",
    "doi": "10.1103/RevModPhys.97.025002",
    "url": "https://physics.nist.gov/cuu/pdf/RevModPhys.97.025002.pdf",
    "year": 2025,
    "extent": "selected-primary-adjustment-passages"
  }
];

const atomicLimits = [
  "The measured ion has three trap modes. The free cyclotron frequency is reconstructed from their squared frequencies; the trap cyclotron mode alone is not the free frequency.",
  "The paper writes omega_c=q*B/(m*c) in Gaussian units. In SI the expression is omega_c=abs(q)*B/m for the frequency magnitude; an angular frequency differs from cycles per second by 2*pi.",
  "For the same magnetic field, omega_2/omega_1=(m_1/abs(q_1))/(m_2/abs(q_2)). Equal charges permit a mass ratio; the Ar+/Ar++ entry requires the charge factor and is not a literal ratio of almost equal ionic masses.",
  "The ions are loaded and measured alternately, not simultaneously. Removing a fitted magnetic drift does not make all residuals or adjacent ratios statistically independent.",
  "PNP detects the ion after coherent radial-to-axial transfer. Its resonant voltages differ for N+ and N2+, changing equilibrium position in stray fields. The SOF protocol keeps the evolution voltage common and changes it only for detection.",
  "The SOF signal is a classical cyclotron amplitude produced by two separated pulses, not a quantum-state amplitude or an entanglement measurement. Figure 1 uses evolution times up to 50 s for the precision estimate.",
  "Figure 2 compares an N+ ion at approximately 5 V with the same species at 10 V and an N2+ ion at 10 V, with a 22.5 mV axial offset. The approximately 3 ppb unequal-voltage shift disappears at the reported precision with the common-voltage procedure.",
  "Table I bounds residual magnetic, electrostatic and relativistic systematic terms at approximately 0.030, 0.025 and 0.020 ppb for the specified N+/N2+ settings. These are configuration-specific error estimates, not zero corrections or universal bounds.",
  "The first two Table II(a) reference ratios depend on electron mass and binding energies. Their agreement near 0.15 ppb tests those controls; it does not prove absence of every systematic effect in all other ion comparisons.",
  "The carbon-12 neutral-atom reference has mass exactly 12 u by definition. A carbon ion differs by electron mass and ionization energy; treating C+ as exactly 12 u is incorrect.",
  "Converting molecular-ion comparisons to neutral isolated ground-state atoms requires electron, chemical-binding and ionization-energy terms. The 1994 analysis uses ideal-gas heats of formation at 0 K; this is not the trap temperature.",
  "A neutral hydrogen atom is not a bare proton and a neutral deuterium atom is not a deuteron. Nuclear masses require removal of electronic contributions.",
  "Table II(b) of the 1993 paper expresses masses in nu (1e-9 u). Its H and D values become 1.0078250317(7) u and 2.0141017779(6) u; the 1994 H value is 1.0078250316(5) u.",
  "The 1994 result is a global least-squares solution of twenty pairwise comparisons. Its covariance matrix determines uncertainties of correlated atomic masses and mass differences; the short article does not provide that matrix or every input ratio.",
  "For a mass difference, Var(D-H)=Var(D)+Var(H)-2*Cov(D,H). Adding printed marginal errors in quadrature assumes zero covariance and is not a reconstruction of the published fit.",
  "The authors report reduced chi-square 0.74 and redundant routes to the mass table. These internal checks constrain the stated error model; they do not logically exclude every possible common systematic.",
  "The quoted 2.6e-10 relative rms magnetic fluctuation applies to a single frequency measurement in the 1994 analysis. A typical one-night ratio error near 1e-10 and the final fitted mass uncertainties have different averaging domains.",
  "The 1993 treatment describes approximately Gaussian residuals for its example; the 1994 robust estimator downweights non-Gaussian outliers. These are different analysis descriptions, not interchangeable procedures.",
  "These are reported measurements and conditional inferences. Raw phase records, drift fits, chemical-energy inputs and complete covariance have not been independently replayed.",
  "A charged-ion frequency, neutral-atom mass and inferred neutron mass are different quantities. These results do not establish nucleon formation, lifetime, stability or a universal constituent minimum.",
  "The 1993 and 1994 publications belong to the same MIT measurement program. Disjoint acquisition and cross-publication covariance are not established; the two papers cannot be treated as independent replications or averaged as independent results.",
  "Subtracting the printed 1994 D and H central values gives 1.0062767463 u. Kessler adopts the dimensionless relative-mass difference 1.00627674630(71); its 0.71e-9 uncertainty is not independently recovered from the missing mass-fit covariance.",
  "The 1994 neutron value 1.0086649235(23) u already uses the Greene1986 deuteron binding energy. The 1993 neutron value uses the Wapstra1990 binding-energy compilation. Neither is a direct measurement of a neutral neutron in the trap.",
  "The upstream H/D mass information is an input to the capture-based neutron inference. Feeding a neutron mass already derived from capture binding energy back as an independent confirmation would conceal a shared input.",
  "The 1993/1994 mass inputs are historical values. They are not current recommended constants, a new SI kilogram definition or independently traced inputs to the Borsanyi calculation."
];

const atomicClaims = [
  {
    "id": "D-phys-penning-cyclotron-ratio",
    "statement": "The free cyclotron frequency obeys omega_c^2=omega_plus^2+omega_z^2+omega_minus^2 in the stated Penning-trap treatment. A frequency ratio yields a mass-to-charge ratio, with charge state and magnetic-field drift handled explicitly.",
    "limits": [
      0,
      1,
      2,
      3
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "D-phys-penning-sof-protocol",
    "statement": "Two separated cyclotron pulses encode the frequency in a classical amplitude while the compared ions evolve under the same trap voltage. The voltage changes afterward to bring the axial mode into resonance for detection.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      0,
      1,
      2,
      3
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "D-phys-ion-atom-mass-correction",
    "statement": "A measured ionic mass-to-charge ratio is converted to a neutral-atom mass using charge state, electron mass, ionization and chemical binding energies, with neutral carbon-12 fixing the relative-mass scale.",
    "limits": [
      9,
      10,
      11,
      12,
      2
    ],
    "sourceIds": [
      "natarajan1993",
      "difilippo1994"
    ]
  },
  {
    "id": "D-phys-atomic-mass-covariance",
    "statement": "Atomic masses and their differences are inferred from a jointly constrained comparison network. Uncertainty in D-H depends on the covariance as well as both marginal mass errors.",
    "limits": [
      13,
      14,
      15,
      16,
      17,
      9,
      10
    ],
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "M-phys-natarajan1993-sof-context",
    "statement": "The 8.5 T Penning trap at approximately 4.2 K measures single ions alternately. SOF stores the cyclotron phase difference in an amplitude under a common evolution voltage, then changes voltage for axial detection with a superconducting circuit (Q about 25000) and rf SQUID. Table II includes controls and carbon-referenced methane-ion comparisons.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      0,
      1,
      2,
      3,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "M-phys-natarajan1993-pnp-context",
    "statement": "Figure 2 measures N+ with the PNP method at its approximately 5 V resonant trap setting and compares it with common-voltage measurements at 10 V. The same diagnostic uses a 22.5 mV axial offset; an approximately 3 ppb shift remains for the unequal-voltage setting.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "M-phys-difilippo1994-context",
    "statement": "Twenty pairwise comparisons use alternately trapped single ions in an 8.5 T field, axial rf SQUID detection and coupled radial-to-axial phase readout. Robust polynomial fits handle field drift. Corrected molecular-ion comparisons determine a global neutral-atom mass table with carbon-12 as reference.",
    "limits": [
      13,
      14,
      15,
      16,
      17,
      9,
      10,
      11,
      12,
      21,
      22,
      23,
      24,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "C-phys-natarajan-voltage-control",
    "statement": "Figure 2 shows an approximately 3 ppb offset for N+ measured at its own PNP resonant voltage. The offset disappears at the stated precision when N+ evolves at the same 10 V setting as N2+ under the SOF protocol.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      0,
      1,
      2,
      3,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "C-phys-natarajan-frequency-ratios",
    "statement": "Table II(a) reports charge-normalized ratios N2+/N+ 2.00003917561(29), Ar+/Ar++ 2.00002745412(36), CH4+/C+ 1.33595703378(23), CD3+/C+ 1.50354846235(20), CD4+/C+ 1.67139795039(31) and Ar+/Ne+ 1.99890212105(30).",
    "limits": [
      0,
      1,
      2,
      3,
      7,
      8,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "C-phys-natarajan-hydrogen-masses",
    "statement": "Table II(b) gives neutral-atom masses H 1.0078250317(7) u and D 2.0141017779(6) u after binding-energy corrections. The deuterium determination combines carbon comparisons using CD3+ and CD4+.",
    "limits": [
      9,
      10,
      11,
      12,
      0,
      1,
      2,
      3,
      22,
      23,
      24,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "C-phys-difilippo-example-ratio",
    "statement": "Figure 1 reports CO+/N2+ mass ratio 0.99959888760(8) from alternating frequency measurements with a sixth-order polynomial and robust estimation. This is an example within the twenty-comparison analysis.",
    "limits": [
      13,
      14,
      15,
      16,
      17,
      2,
      3,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "C-phys-difilippo-hydrogen-masses",
    "statement": "Table I reports neutral-atom masses H 1.0078250316(5) u and D 2.0141017779(5) u from the global fit after chemical and ionization corrections. Their covariance matters when forming D-H.",
    "limits": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      21,
      22,
      23,
      24,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "C-phys-difilippo-capture-input",
    "statement": "The printed 1994 atomic masses give D-H=1.0062767463 u. Kessler adopts Ar(2H)-Ar(1H)=1.00627674630(71) from that source for the neutron-mass calculation; its uncertainty is retained as an adopted input, not a reproduced covariance result.",
    "limits": [
      21,
      22,
      23,
      24,
      13,
      14,
      15,
      9,
      10,
      11,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994",
      "kessler1999"
    ]
  },
  {
    "id": "M-phys-natarajan-voltage-control",
    "statement": "Compare the declared N+/N2+ settings while retaining the axial offset, field corrections and charge-aware frequency construction.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      0,
      1,
      2,
      3,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "M-phys-natarajan-hydrogen-masses",
    "statement": "Apply electron, ionization and chemical-energy corrections to the stated carbon comparisons; preserve the two deuterium routes and historical uncertainty.",
    "limits": [
      9,
      10,
      11,
      12,
      0,
      1,
      2,
      3,
      22,
      23,
      24,
      18,
      19,
      20
    ],
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "M-phys-difilippo-hydrogen-masses",
    "statement": "Use the declared neutral-atom conversion and joint least-squares covariance, preserving redundant-route checks and unresolved raw-data replay.",
    "limits": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      21,
      22,
      23,
      24,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "M-phys-difilippo-capture-input",
    "statement": "Trace the H/D mass input into the capture calculation while keeping the missing covariance and the older neutron row's binding-energy dependence explicit.",
    "limits": [
      21,
      22,
      23,
      24,
      13,
      14,
      15,
      9,
      10,
      11,
      18,
      19,
      20
    ],
    "sourceIds": [
      "difilippo1994",
      "kessler1999"
    ]
  }
];

const atomicStudies = [
  {
    "id": "natarajan1993-sof",
    "system": "MIT common-voltage nondoublet measurements",
    "preparation": "The 8.5 T Penning trap at approximately 4.2 K measures single ions alternately. SOF stores the cyclotron phase difference in an amplitude under a common evolution voltage, then changes voltage for axial detection with a superconducting circuit (Q about 25000) and rf SQUID. Table II includes controls and carbon-referenced methane-ion comparisons."
  },
  {
    "id": "natarajan1993-pnp",
    "system": "MIT unequal-voltage PNP control",
    "preparation": "Figure 2 measures N+ with the PNP method at its approximately 5 V resonant trap setting and compares it with common-voltage measurements at 10 V. The same diagnostic uses a 22.5 mV axial offset; an approximately 3 ppb shift remains for the unequal-voltage setting."
  },
  {
    "id": "difilippo1994",
    "system": "MIT twenty-comparison atomic-mass fit",
    "preparation": "Twenty pairwise comparisons use alternately trapped single ions in an 8.5 T field, axial rf SQUID detection and coupled radial-to-axial phase readout. Robust polynomial fits handle field drift. Corrected molecular-ion comparisons determine a global neutral-atom mass table with carbon-12 as reference."
  }
];

const atomicComparisons = [
  {
    "id": "natarajan-voltage-control",
    "result": "specified-alternative-disfavored",
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "natarajan-hydrogen-masses",
    "result": "conditional-support",
    "sourceIds": [
      "natarajan1993"
    ]
  },
  {
    "id": "difilippo-hydrogen-masses",
    "result": "conditional-support",
    "sourceIds": [
      "difilippo1994"
    ]
  },
  {
    "id": "difilippo-capture-input",
    "result": "not-tested",
    "sourceIds": [
      "difilippo1994",
      "kessler1999"
    ]
  }
];

const atomicSources = [
  {
    "id": "natarajan1993",
    "doi": "10.1103/PhysRevLett.71.1998",
    "url": "https://doi.org/10.1103/PhysRevLett.71.1998",
    "year": 1993
  },
  {
    "id": "difilippo1994",
    "doi": "10.1103/PhysRevLett.73.1481",
    "url": "https://doi.org/10.1103/PhysRevLett.73.1481",
    "year": 1994
  }
];

const liontrapLimits = [
  "Neutral carbon-12 has mass exactly 12 u; C-12(6+) instead has mass 12 u minus six electron masses plus the six positive ionization energies divided by c^2. The sixfold charge factor in m_p=R*m_C/6 cannot be omitted.",
  "Hei\u00dfe 2019 uses m_e=0.000548579909069(15) u and historical electronic-energy inputs. The electron mass is inferred using a bound-electron g factor and QED; it is not an independently reproduced direct weighing in this review.",
  "Hei\u00dfe 2017 prints m_C=11.9967096264139(10) u and 0.08 ppt relative uncertainty. Hei\u00dfe 2019 prints 11.99670962641385(8) u but still states 0.08 ppt; the printed (8) corresponds to about 0.00667 ppt. This unresolved uncertainty discrepancy is not silently repaired.",
  "The proton-electron ratio in Hei\u00dfe 2019 assumes zero covariance because the dominant proton and electron systematic uncertainties differ. That assumption is not proof of complete statistical independence.",
  "The stored ions are measured alternately under the same trap voltages, using separate axial resonators. Randomized species order reduces linear drift; it does not make sequential measurements simultaneous or statistically independent.",
  "The proton dataset comprises thirteen runs and three ion pairs, with about 300 hours of acquisition over two months. Runs, cycles, ion pairs and publications are not independent replications.",
  "The planar fit extrapolates the deliberately excited cyclotron motion to zero using R_i=R_stat+a*S_p^2+b*S_C^2. Thermal axial and cyclotron motion still requires systematic corrections.",
  "The 2019 reanalysis corrects the estimated ion temperatures and a minor measurement-program flaw in the 2017 datasets. The two publications cannot be averaged as independent proton-mass experiments.",
  "Hei\u00dfe 2017 Figure 3 lists phase-unwrapping times 0.1, 1, 2 and 5 s; Hei\u00dfe 2019 describes 0.5, 1, 2 and 5 s. The four final 10 s phase evolutions are distinct from those unwrapping stages; the differing descriptions are retained.",
  "The 2017 abbreviation MT denotes the measurement trap; in 2019 PT denotes the precision trap and MT the magnetometer trap. The proposed simultaneous three-ion readout and magnetic shim coils were not used in the reported proton campaign.",
  "The proton campaign had C4=(0 +/- 6.3)e-6 and C6=(-6.8 +/- 0.4)e-4. The improved Table VI tuning and proposed millikelvin cooling describe other conditions, not the acquisition used for the reported mass.",
  "Table VII revises feedback-cooled axial temperatures to 1.5(1.0) K for p and 4.5(1.4) K for C-12(6+), replacing the 2017 common 1.7(1.0) K estimate. No-feedback values are 3.4(1.0) K and 6.4(1.0) K. These are inferred temperatures, not zero thermal energies.",
  "The reanalysis uses B2=-0.270(15) microtesla/mm^2. Reduced chi-square 1.17 for ten degrees of freedom and a 30 percent tail do not logically exclude common systematic effects.",
  "For ion charge n*e, Schuh 2019 defines radial actual-minus-ideal shifts Delta_nu_plus/minus=opposite-sign n*E_rho/(2*pi*B0). The correction added to the measured cyclotron estimate is +n*(2*E_rho+E_z)/(4*pi*B0), in Hz. The change of sign convention is explicit in footnote 2.",
  "The infinitely long cylindrical-electrode approximation gives a relative cyclotron correction approximately m/(4*pi*epsilon0*B0^2*rho0^3). Real gaps, electrode shape, displacements and axial fields require a scoped geometry calculation.",
  "The invariance-based cyclotron estimate retains an image-charge correction. Cancellation of the opposite radial shifts in nu_plus+nu_minus does not establish that the squared-frequency reconstruction is unshifted.",
  "The proton reports use C_IC=1.97(10) for their correction. The later, more detailed Schuh calculation is not silently substituted into the published mass as though that re-fit had been performed.",
  "Hei\u00dfe 2019 Equation 21 prints a frequency shift with a dimensionless right side; the relative form in Hei\u00dfe 2017 Equation 2 and the explicit conventions in Schuh 2019 are used instead. The positive E/(m*c^2) beside a negative relativistic shift on page 13 is not adopted as a physical identity.",
  "COMSOL 5.2 with the AC/DC module represents a point charge and perfectly conducting grounded electrode surfaces. Twenty-one ion positions from -0.5 to +0.5 mm are fitted with odd polynomials to extract field gradients.",
  "Agreement between finite-element and semianalytical calculations is tested on the same simplified geometry. Full electrode geometry changes the LIONTRAP correction by 2.7(4) percent; horizontal and azimuthal slit effects are separately reported.",
  "Numerical/fit and geometry uncertainties have different meanings. The geometry estimate assumes manufacturing deviations up to 10 micrometers; higher-order effects are treated as small under a displacement assumption below 50 micrometers.",
  "The cylinder reference, polynomial order and matrix-truncation checks constrain numerical error. Increasing resolution or expansion order alone does not prove convergence or exact reproduction of the manufactured trap.",
  "The calculation and experiment have shared geometry and calibration assumptions. Their agreement is conditional evidence for an image-charge correction in the stated trap, not a universal graph-generation rule or an independent mass measurement.",
  "Schuh uses 120 cycles over 23 days, with 73 cycles at 40 s and the others at 20 s, and approximately 140 minutes per full cycle. Two 4.6 ms magnetron pulses and an intentionally deformed readout potential distinguish this experiment from proton-mass PnA acquisition.",
  "The readout uses C2=-0.5997, C4=-0.00223(18), C6=0.014(4) and a maximal magnetron radius near 274 micrometers. Harmonic potential during phase evolution and deformed potential during readout must not be conflated.",
  "The 43 microhertz statistical error is enlarged by sqrt(2) to 61 microhertz because the reduced chi-square is 2. Tilt fluctuations cannot be separated from voltage fluctuations by the axial signal alone.",
  "The image-charge difference subtracts ideal 390.723(1) mHz, magnetic 0.056(21) mHz and tilt/ellipticity 0.188(37) mHz from 393.258(61)(77) mHz. The resulting 2.291(61)(111) mHz combines correlated correction uncertainties.",
  "The 73 and 37 microhertz tilt contributions are correlated and add to 110 microhertz. The two 21 microhertz magnetic contributions cancel in the stated analysis; quadrature of all marginal errors would misrepresent that covariance.",
  "Appendix A uses the 2017 proton mass and compares an axial calibration ratio over 1000 measurements drawn from both the image-charge and proton campaigns. This shared input prevents a claim of fully independent proton-mass validation.",
  "The page 6 prose labels a ratio of magnetron frequencies as axial; Appendix A explicitly defines the required ratio using nu_z. The calibration follows the axial observable and retains the printed discrepancy.",
  "These are reported measurements or calculations with scoped interpretations. Original acquisition records, analysis code, thermal corrections and full covariance have not been independently replayed.",
  "A bare proton, a charged carbon or oxygen nucleus, and a neutral atom have different masses and charge factors. These mass results do not establish nucleon formation, lifetime, stability or a universal carrier minimum.",
  "The quoted CODATA 2014 and AME 2016 comparisons are historical reference values. They are not current recommended constants or independent experiments reconstructed by this review.",
  "Hei\u00dfe 2019 Table VIII reports corrections in parts per trillion: image charge 91.0(4.6), image current -1.9(0.3), line shape 3.1(3.0), magnetron determination 0.0(0.6), magnetic inhomogeneity -20.9(27.4), relativity -8.9(7.1), and electrostatic terms much smaller than 0.1. Its total is 59.5(28.8).",
  "Adding all finite displayed rows gives 62.4 ppt. The line-shape correction varies by ion pair; the 2017 Table I caption explicitly excludes its pair-specific term from that earlier total. Omitting the 2019 line-shape row gives 59.3 ppt. The final weighting and application to the reanalysis have not been reconstructed; a naive sum is not evidence that the mass result is invalid.",
  "The 2019 Table VIII header is (R_stat-R_cor)/R_stat, but Equations 20 and 23 increase R, giving (R_cor-R_stat)/R_stat about +59.55 ppt from rounded values. The printed sign convention remains unresolved.",
  "For positive deuteron binding energy, m_n=m_d-m_p+E_B/c^2. The subtraction wording on Hei\u00dfe 2019 page 14 is not an independent neutron-mass determination or a replacement for that mass balance.",
  "The double-dip result uses frequencies acquired in the same cycles as the PnA result. Their agreement is an internal method comparison, not an independent replication.",
  "The oxygen conversion uses m(O-16(8+))=8*m_p/R(O,p), then adds eight electron masses and subtracts electronic binding energy to obtain the neutral atom. Its third uncertainty component comes from the proton input; the oxygen result cannot independently verify that input.",
  "The carbon C-12(6+)/C-12(3+) control doubles the precision-trap voltage to match the two axial detectors. Its preparation is not the common-voltage proton/carbon production comparison. The 2019 paper reports agreement within 0.2 sigma at relative uncertainty 1.1e-10, versus 0.5 sigma in 2017. Disjoint control acquisition or independent replication between the accounts is not established.",
  "Schuh Table I gives an experimental image-charge magnetron difference 2.291(126) mHz and a simulated difference 2.377(21) mHz. Table II separately prints an experimental free-cyclotron correction 471.9(23.9) microhertz per charge state and a full-geometry value 475.4(2.1)(3.6).",
  "Dividing the Table I difference by the charge-state difference of five gives 458.2 microhertz, before the small axial contribution, rather than Table II 471.9. The conversion between these printed entries has not been recovered. Both tables are preserved; neither is silently rewritten or claimed to be an exact replay of the other."
];

const liontrapClaims = [
  {
    "id": "D-phys-liontrap-carbon-reference",
    "statement": "For R=nu_c(C-12(6+))/nu_c(p), m_p=R*m_C/6 with m_C=12 u-6*m_e+sum(E_ion)/c^2. The nuclear reference retains its electronic-energy inputs and their stated uncertainty.",
    "limits": [
      0,
      1,
      2,
      3
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "D-phys-penning-pna-fit",
    "statement": "A phase-sensitive cyclotron comparison is extrapolated to zero deliberate excitation using a joint quadratic fit in the two species excitation strengths. Thermal-motion and apparatus corrections remain necessary.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "D-phys-penning-image-charge",
    "statement": "The ion induces charge on trap electrodes; the resulting field shifts the measured motion. A correction to the free cyclotron estimate must specify the field model, units and whether it maps ideal to measured or measured to ideal frequency.",
    "limits": [
      13,
      14,
      15,
      16,
      17
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019",
      "schuh2019"
    ]
  },
  {
    "id": "D-phys-penning-image-charge-geometry",
    "statement": "A finite-element or semianalytical boundary-value model predicts the local image field for a specified electrode geometry. Geometry tolerances, fitted gradients and numerical convergence limit its frequency correction.",
    "limits": [
      18,
      19,
      20,
      21,
      22,
      13,
      14,
      15
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "D-phys-penning-magnetron-control",
    "statement": "Two separated radial pulses encode the magnetron phase in a classical motional amplitude. A changed electrostatic readout potential maps that amplitude to an axial-frequency shift; comparing single ions then constrains the image-charge contribution.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      13,
      14,
      15
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "M-phys-liontrap2017-pna-context",
    "statement": "Single protons and C-12(6+) ions are alternated in a 5 mm-radius trap near 3.8 T and 4 K with separate axial detectors and common trapping voltages. Thirteen runs use three ion pairs. PnA and double-dip frequencies are acquired in each cycle; the original report fits excitation-dependent ratios and applies its stated corrections.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017"
    ]
  },
  {
    "id": "M-phys-liontrap2019-reanalysis-context",
    "statement": "The proton dataset reported in 2017 is reanalyzed with corrected temperature estimates and a measurement-program correction. A planar fit gives the zero-driven-excitation ratio, followed by the published systematic corrections. This is a revised analysis of the same acquisition, not a new independent experiment.",
    "limits": [
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      33,
      34,
      35,
      11,
      12,
      17,
      36,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap2019-double-dip-context",
    "statement": "Double-dip cyclotron frequencies recorded in the same proton/carbon cycles are used instead of the PnA frequencies. The shared apparatus, ions, mass reference and corrections remain part of the comparison.",
    "limits": [
      37,
      4,
      5,
      6,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap2019-oxygen-context",
    "statement": "The oxygen campaign reported in 2017 compares O-16(8+) with a proton using a retuned axial resonator and the same measurement-cycle design. Revised temperature corrections and the reanalyzed proton mass enter the neutral-oxygen inference.",
    "limits": [
      38,
      7,
      0,
      1,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap2019-carbon-control-context",
    "statement": "The reported C-12(6+)/C-12(3+) comparison doubles the precision-trap voltages to match the axial resonators. Its reference uses electron masses and electronic binding energies. Independent acquisition relative to the control described in 2017 is not established.",
    "limits": [
      39,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-schuh2019-magnetron-context",
    "statement": "Alternating single p and C-12(6+) ions undergo a Ramsey-like magnetron measurement with two 4.6 ms pulses and deformed-potential axial readout. The 120 cycles over 23 days use 20 or 40 s precision phase evolution. Voltage and tilt corrections enter the extracted image-charge difference.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "M-phys-schuh2019-geometry-context",
    "statement": "COMSOL 5.2 finite-element electrostatics and a semianalytical expansion compare simplified electrode models and full LIONTRAP geometry. Field gradients are inferred from 21 ion positions; a long-cylinder reference and geometry perturbations estimate numerical and manufacturing uncertainty.",
    "limits": [
      18,
      19,
      20,
      21,
      22,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "C-phys-liontrap2017-proton",
    "statement": "The 2017 analysis reports R_stat=0.5037763676431(77), R_final=0.5037763676624(77)(146), and m_p=1.007276466583(15)(29) u. The uncertainties on the corrected result are statistical then systematic, on the final digits.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017"
    ]
  },
  {
    "id": "C-phys-liontrap2019-proton",
    "statement": "The 2019 reanalysis reports R_stat=0.5037763676401(81), R_cor=0.5037763676701(81)(144), and m_p=1.007276466598(16)(29) u. The mass shifts upward by 1.5e-11 u relative to the 2017 report of the same data.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      33,
      34,
      35,
      11,
      12,
      17,
      36,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-liontrap-correction-budget",
    "statement": "The 2019 proton correction budget reports a total 59.5(28.8) ppt. The displayed pair-specific terms, the total and the printed sign convention do not by themselves supply a reproducible global correction recipe.",
    "limits": [
      33,
      34,
      35,
      11,
      12,
      17,
      36,
      2,
      7,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-liontrap-double-dip",
    "statement": "Using the same-cycle double-dip readout, the 2019 account reports R_DD=0.50377636768(3)(5) and m_p=1.00727646661(6)(10) u. Agreement with the PnA result is an internal comparison with about fourfold lower precision.",
    "limits": [
      37,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-liontrap-oxygen",
    "statement": "The reanalyzed oxygen campaign reports R_stat(O,p)=0.503936558242(17) and neutral m(O-16)=15.99491461937(54)(45)(51) u after corrections. The three uncertainties are statistical, systematic and the adopted proton-mass contribution.",
    "limits": [
      38,
      0,
      1,
      7,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-liontrap-carbon-control",
    "statement": "The 2019 C-12(6+)/C-12(3+) control agrees with its electronic-energy reference within 0.2 sigma at relative uncertainty 1.1e-10. Its doubled-voltage preparation tests a distinct charge-state comparison.",
    "limits": [
      39,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-schuh-magnetron-difference",
    "statement": "The dedicated image-charge experiment reports nu_minus(C-12(6+))-nu_minus(p)=393.258(61)(77) mHz after voltage correction. This includes the ideal-trap mass dependence and other apparatus shifts, not only the image-charge contribution.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "C-phys-schuh-image-charge",
    "statement": "Subtracting the stated ideal, magnetic and tilt/ellipticity contributions gives an image-charge magnetron difference 2.291(61)(111) mHz, or 2.291(126) mHz with combined uncertainty, in Schuh Table I and Equation 23.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019",
      "heisse2017"
    ]
  },
  {
    "id": "C-phys-schuh-geometry-response",
    "statement": "For LIONTRAP at B0=3.764 T, the full-geometry calculation reports a cyclotron correction 475.4(2.1)(3.6) microhertz per charge state, with numerical and geometry uncertainties. The simplified calculations give 488.416(58) and 488.7(2.1); including electrode gaps changes the prediction.",
    "limits": [
      18,
      19,
      20,
      21,
      22,
      13,
      14,
      15,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "C-phys-schuh-ics-comparison",
    "statement": "Schuh Table I compares the extracted 2.291(126) mHz magnetron difference with 2.377(21) mHz from the geometry calculation. This supports the correction at roughly five-percent experimental precision, while the conversion to the distinct Table II experimental value remains unresolved.",
    "limits": [
      25,
      26,
      27,
      28,
      29,
      18,
      19,
      20,
      21,
      22,
      13,
      14,
      15,
      16,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019",
      "heisse2017"
    ]
  },
  {
    "id": "M-phys-liontrap2017-proton",
    "statement": "Use the carbon nuclear reference, explicit charge factor and reported excitation extrapolation and systematic corrections for the original acquisition.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017"
    ]
  },
  {
    "id": "M-phys-liontrap2019-proton",
    "statement": "Retain the original acquisition and revised thermal and program corrections, then convert the corrected ratio through the same carbon nuclear reference. Treat the result as a reanalysis.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      33,
      34,
      35,
      11,
      12,
      17,
      36,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap-correction-budget",
    "statement": "Trace each correction through its ion-pair scope, units, sign convention and covariance. Preserve the published discrepancies until the original weighting and correction application can be recovered.",
    "limits": [
      33,
      34,
      35,
      11,
      12,
      17,
      36,
      2,
      7,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap-double-dip",
    "statement": "Compare the two cyclotron readouts obtained in the same cycles while retaining their shared reference, detector conditions and systematic inputs.",
    "limits": [
      37,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap-oxygen",
    "statement": "Convert the corrected O-16(8+)/p ratio with the adopted proton mass and electronic-energy terms, retaining the uncertainty contributed by that input.",
    "limits": [
      38,
      0,
      1,
      7,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-liontrap-carbon-control",
    "statement": "Compare the two carbon charge states at the explicitly doubled trap voltage using the electron and binding-energy reference, without treating this as the proton production preparation.",
    "limits": [
      39,
      0,
      1,
      2,
      3,
      30,
      31,
      32
    ],
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-schuh-magnetron-difference",
    "statement": "Infer magnetron phases from separated-pulse motional amplitudes, correct the axial voltage proxy and apply the stated statistical-error inflation.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "M-phys-schuh-image-charge",
    "statement": "Subtract the ideal-trap, magnetic and tilt/ellipticity components with their reported covariance and proton-mass input before identifying the residual as an image-charge shift.",
    "limits": [
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019",
      "heisse2017"
    ]
  },
  {
    "id": "M-phys-schuh-geometry-response",
    "statement": "Solve the specified electrostatic boundary problem, fit local gradients, compare a matched simplified geometry and bound numerical and manufacturing effects.",
    "limits": [
      18,
      19,
      20,
      21,
      22,
      13,
      14,
      15,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019"
    ]
  },
  {
    "id": "M-phys-schuh-ics-comparison",
    "statement": "Compare the Table I magnetron residual and prediction with their declared uncertainties; retain shared mass/calibration inputs and the unresolved conversion to Table II.",
    "limits": [
      25,
      26,
      27,
      28,
      29,
      18,
      19,
      20,
      21,
      22,
      13,
      14,
      15,
      16,
      40,
      41,
      30,
      31,
      32
    ],
    "sourceIds": [
      "schuh2019",
      "heisse2017"
    ]
  }
];

const liontrapStudies = [
  {
    "id": "liontrap2017-pna",
    "system": "Original LIONTRAP proton campaign",
    "preparation": "Single protons and C-12(6+) ions are alternated in a 5 mm-radius trap near 3.8 T and 4 K with separate axial detectors and common trapping voltages. Thirteen runs use three ion pairs. PnA and double-dip frequencies are acquired in each cycle; the original report fits excitation-dependent ratios and applies its stated corrections.",
    "studyType": "primary-experiment"
  },
  {
    "id": "liontrap2019-reanalysis",
    "system": "LIONTRAP proton data reanalysis",
    "preparation": "The proton dataset reported in 2017 is reanalyzed with corrected temperature estimates and a measurement-program correction. A planar fit gives the zero-driven-excitation ratio, followed by the published systematic corrections. This is a revised analysis of the same acquisition, not a new independent experiment.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "liontrap2019-double-dip",
    "system": "LIONTRAP same-cycle double-dip check",
    "preparation": "Double-dip cyclotron frequencies recorded in the same proton/carbon cycles are used instead of the PnA frequencies. The shared apparatus, ions, mass reference and corrections remain part of the comparison.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "liontrap2019-oxygen",
    "system": "LIONTRAP oxygen data reanalysis",
    "preparation": "The oxygen campaign reported in 2017 compares O-16(8+) with a proton using a retuned axial resonator and the same measurement-cycle design. Revised temperature corrections and the reanalyzed proton mass enter the neutral-oxygen inference.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "liontrap2019-carbon-control",
    "system": "LIONTRAP carbon charge-state check",
    "preparation": "The reported C-12(6+)/C-12(3+) comparison doubles the precision-trap voltages to match the axial resonators. Its reference uses electron masses and electronic binding energies. Independent acquisition relative to the control described in 2017 is not established.",
    "studyType": "primary-experiment"
  },
  {
    "id": "schuh2019-magnetron",
    "system": "LIONTRAP dedicated magnetron experiment",
    "preparation": "Alternating single p and C-12(6+) ions undergo a Ramsey-like magnetron measurement with two 4.6 ms pulses and deformed-potential axial readout. The 120 cycles over 23 days use 20 or 40 s precision phase evolution. Voltage and tilt corrections enter the extracted image-charge difference.",
    "studyType": "primary-experiment"
  },
  {
    "id": "schuh2019-geometry",
    "system": "LIONTRAP electrode-geometry calculation",
    "preparation": "COMSOL 5.2 finite-element electrostatics and a semianalytical expansion compare simplified electrode models and full LIONTRAP geometry. Field gradients are inferred from 21 ion positions; a long-cylinder reference and geometry perturbations estimate numerical and manufacturing uncertainty.",
    "studyType": "computational-analysis"
  }
];

const liontrapComparisons = [
  {
    "id": "liontrap2017-proton",
    "result": "conditional-support",
    "sourceIds": [
      "heisse2017"
    ]
  },
  {
    "id": "liontrap2019-proton",
    "result": "conditional-support",
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "liontrap-correction-budget",
    "result": "not-tested",
    "sourceIds": [
      "heisse2017",
      "heisse2019"
    ]
  },
  {
    "id": "liontrap-double-dip",
    "result": "conditional-support",
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "liontrap-oxygen",
    "result": "not-tested",
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "liontrap-carbon-control",
    "result": "conditional-support",
    "sourceIds": [
      "heisse2019"
    ]
  },
  {
    "id": "schuh-ics-comparison",
    "result": "conditional-support",
    "sourceIds": [
      "schuh2019",
      "heisse2017"
    ]
  }
];

const liontrapSources = [
  {
    "id": "heisse2017",
    "doi": "10.1103/PhysRevLett.119.033001",
    "url": "https://doi.org/10.1103/PhysRevLett.119.033001",
    "year": 2017
  },
  {
    "id": "heisse2019",
    "doi": "10.1103/PhysRevA.100.022518",
    "url": "https://doi.org/10.1103/PhysRevA.100.022518",
    "year": 2019
  },
  {
    "id": "schuh2019",
    "doi": "10.1103/PhysRevA.100.023411",
    "url": "https://doi.org/10.1103/PhysRevA.100.023411",
    "year": 2019
  }
];

/** Enforce formal, computational and empirical boundaries; this does not verify physics. */
export function validatePhysicsDefinitions({ graph, physics }, { sources, claims, entities, relations }) {
  const admitted = new Set([...definitions.keys(), ...observations.map(([id]) => `phys:${id}`), ...contexts.map(([id]) => `phys:${id}`)]);
  for (const entity of entities.values()) if (entity.id.startsWith("phys:")) {
    assert.ok(admitted.has(entity.id), `Physical record lacks a reviewed admission contract: ${entity.id}`);
    assert.equal(entity.level, 1, "Physical display group changed");
  }
  for (const [id, claimId] of definitions) {
    const entity = entities.get(id);
    const claim = claims.get(claimId);
    assert.equal(entity?.kind, "definition", `Physics definition became an occurrence: ${id}`);
    assert.equal(entity.status, "definition", `Physics definition became experimental evidence: ${id}`);
    assert.ok(entity.claimIds.includes(claimId), `Missing physical definition: ${id}`);
    assert.equal(claim?.status, "definition", `Formal theory became an experimental result: ${claimId}`);
    assert.equal(claim.contextIds, undefined, `Definition acquired an experimental preparation: ${claimId}`);
    assert.equal(claim.experimentalContextIds, undefined, `Definition acquired a measurement context: ${claimId}`);
    assert.deepEqual(claim.checkIds, [], `Source reading became independent reproduction: ${claimId}`);
    assert.ok(claim.citations.some((c) => c.role === "supports" && sources.get(c.sourceId)?.kind === "research-publication"),
      `Definition lacks a published formal source: ${claimId}`);
    for (const c of claim.citations) assert.ok(sources.get(c.sourceId)?.review.locators.includes(c.locator),
      `Unreviewed physics passage: ${c.sourceId} ${c.locator}`);
  }

  const dependencyIds = new Set(dependencies.map(([id]) => `physics:${id}`));
  for (const id of formalDependencies.keys()) assert.ok(relations.has(id), `Missing physical definition dependency: ${id}`);
  for (const relation of graph.relations) {
    if (dependencyIds.has(relation.id)) continue;
    if (!relation.source.startsWith("phys:") && !relation.target.startsWith("phys:") && !relation.id.startsWith("physics:")) continue;
    assert.ok(definitions.has(relation.source) && definitions.has(relation.target),
      `Unreviewed cross-domain physical construction: ${relation.id}`);
    assert.deepEqual([relation.source, relation.target], formalDependencies.get(relation.id),
      `Unreviewed physical definition dependency: ${relation.id}`);
    assert.equal(relation.kind, "descriptive", `Definition acquired a measured causal edge: ${relation.id}`);
    assert.equal(relation.role, "definition-dependency");
    assert.equal(relation.contextIds, undefined, "Formal classification acquired an experimental preparation");
    assert.equal(relation.carrier, undefined, "Representation dimensions acquired carrier semantics");
    assert.ok(relation.claimIds.includes(definitions.get(relation.target)), "Physical relation lost its definition");
  }

  const studies = new Map(physics.studies.map((s) => [s.id, s]));
  const reproductionClaims = new Map([...BELL_CHECKS].map(([check, claim]) => [claim, check]));
  for (const [year, doi] of [
    [2015, "10.4121/uuid:6e19e9b2-4a2d-40b5-8dd3-a660bf3c0a31"],
    [2016, "10.4121/uuid:53644d31-d862-4f9f-9ad2-0b571874b829"]
  ]) {
    const source = sources.get(`hensen${year}-data`);
    assert.equal(source?.kind, "research-dataset");
    assert.equal(source.doi, doi, "Bell replay borrowed another deposited dataset");
    assert.equal(source.path, `references/canonical/data/hensen${year}-data.zip`);
    assert.equal(source.review.extent, "complete-deposited-event-table-replay");
  }
  assert.equal(sources.get("bell-data-verifier")?.kind, "executable-check");
  assert.equal(sources.get("bell-data-verifier").path, "models/causal-emergence/canonical/verify-bell-data.py");
  assert.deepEqual([...studies.keys()], [
  "breidenbach1969",
  "tasso1979",
  "webber2011-r06",
  "webber2011-r07",
  "hensen2015",
  "hensen2016",
  "lamoreaux1997",
  "bressi2002",
  "lamb1947",
  "cms2013-r32",
  "creutz1980",
  "bali2005",
  "lee2002",
  "durr2008",
  "gonzalez2021-2017",
  "gonzalez2021-2018",
  "gonzalez2021-al-control",
  "gonzalez2021-uncleaned",
  "musedinovic2025-2020",
  "musedinovic2025-2021",
  "musedinovic2025-2022",
  "musedinovic2025-uncleaned",
  "borsanyi2015",
  "borsanyi2015-volume",
  "kessler1995",
  "kessler1998",
  "natarajan1993-sof",
  "natarajan1993-pnp",
  "difilippo1994",
  "liontrap2017-pna",
  "liontrap2019-reanalysis",
  "liontrap2019-double-dip",
  "liontrap2019-oxygen",
  "liontrap2019-carbon-control",
  "schuh2019-magnetron",
  "schuh2019-geometry",
  "rau2020-awg1",
  "rau2020-awg2",
  "rau2020-hd",
  "rau2020-local-fit",
  "rau2020-joint-fit",
  "korobov2017-hd",
  "kessler2017-ill",
  "fink2020-ratio",
  "rau2020-figure-replay",
  "rau2020-capture-recalibration",
  "fink2021-simultaneous",
  "fink2021-state-fit",
  "fink2021-drive-control",
  "korobov2017-h2",
  "codata2022-mass-inputs",
  "codata2022-lattice",
  "mass-constraint-replay"
]);
  for (const [id, sourceId, doi, extent] of [
    ["breidenbach1969", "breidenbach1969", "10.1103/PhysRevLett.23.935", "full-primary-article"],
    ["tasso1979", "tasso1979", "10.1016/0370-2693(79)90830-X", "full-primary-author-report"],
    ["webber2011-r06", "webber2011", "10.1103/PhysRevLett.106.041803", "full-primary-article"],
    ["webber2011-r07", "webber2011", "10.1103/PhysRevLett.106.041803", "full-primary-article"],
    ["hensen2015", "hensen2015", "10.1038/nature15759", "full-primary-article-and-selected-supplement"],
    ["hensen2016", "hensen2016", "10.1038/srep30289", "full-primary-article"],
  ["lamoreaux1997", "lamoreaux1997", "10.1103/PhysRevLett.78.5", "full-primary-article"],
  ["bressi2002", "bressi2002", "10.1103/PhysRevLett.88.041804", "full-primary-article"],
  ["lamb1947", "lamb1947", "10.1103/PhysRev.72.241", "full-primary-article"],
  ["cms2013-r32", "cms2013-r32", "10.1140/epjc/s10052-013-2604-6", "full-primary-author-report"],
  ["creutz1980", "creutz1980", "10.1103/PhysRevD.21.2308", "full-primary-article"],
  ["bali2005", "bali2005", "10.1103/PhysRevD.71.114513", "full-primary-author-report"],
  ["lee2002", "lee2002", "10.1103/PhysRevD.66.012002", "full-primary-article"],
  ["durr2008", "durr2008", "10.1126/science.1163233", "full-primary-author-report"],
  ["gonzalez2021-2017", "gonzalez2021", "10.1103/PhysRevLett.127.162501", "full-primary-article"],
  ["gonzalez2021-2018", "gonzalez2021", "10.1103/PhysRevLett.127.162501", "full-primary-article"],
  ["gonzalez2021-al-control", "gonzalez2021", "10.1103/PhysRevLett.127.162501", "full-primary-article"],
  ["gonzalez2021-uncleaned", "gonzalez2021", "10.1103/PhysRevLett.127.162501", "full-primary-article"],
  ["musedinovic2025-2020", "musedinovic2025", "10.1103/PhysRevC.111.045501", "full-primary-article"],
  ["musedinovic2025-2021", "musedinovic2025", "10.1103/PhysRevC.111.045501", "full-primary-article"],
  ["musedinovic2025-2022", "musedinovic2025", "10.1103/PhysRevC.111.045501", "full-primary-article"],
  ["musedinovic2025-uncleaned", "musedinovic2025", "10.1103/PhysRevC.111.045501", "full-primary-article"],
  ["borsanyi2015", "borsanyi2015", "10.1126/science.1257050", "full-primary-author-report"],
  ["borsanyi2015-volume", "borsanyi2015", "10.1126/science.1257050", "full-primary-author-report"],
  ["kessler1995", "kessler1999", "10.1016/S0375-9601(99)00078-X", "full-primary-article"],
  ["kessler1998", "kessler1999", "10.1016/S0375-9601(99)00078-X", "full-primary-article"],
  ["natarajan1993-sof", "natarajan1993", "10.1103/PhysRevLett.71.1998", "full-primary-article"],
  ["natarajan1993-pnp", "natarajan1993", "10.1103/PhysRevLett.71.1998", "full-primary-article"],
  ["difilippo1994", "difilippo1994", "10.1103/PhysRevLett.73.1481", "full-primary-article"],
  ["liontrap2017-pna", "heisse2017", "10.1103/PhysRevLett.119.033001", "full-primary-article"],
  ["liontrap2019-reanalysis", "heisse2019", "10.1103/PhysRevA.100.022518", "full-primary-article"],
  ["liontrap2019-double-dip", "heisse2019", "10.1103/PhysRevA.100.022518", "full-primary-article"],
  ["liontrap2019-oxygen", "heisse2019", "10.1103/PhysRevA.100.022518", "full-primary-article"],
  ["liontrap2019-carbon-control", "heisse2019", "10.1103/PhysRevA.100.022518", "full-primary-article"],
  ["schuh2019-magnetron", "schuh2019", "10.1103/PhysRevA.100.023411", "full-primary-article"],
  ["schuh2019-geometry", "schuh2019", "10.1103/PhysRevA.100.023411", "full-primary-article"],
  ["rau2020-awg1", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["rau2020-awg2", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["rau2020-hd", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["rau2020-local-fit", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["rau2020-joint-fit", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["korobov2017-hd", "korobov2017", "10.1103/PhysRevLett.118.233001", "full-author-manuscript"],
  ["kessler2017-ill", "kessler2017", "10.6028/jres.122.024", "full-primary-article"],
  ["fink2020-ratio", "fink2020", "10.1103/PhysRevLett.124.013001", "full-accepted-main-article"],
  ["rau2020-figure-replay", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["rau2020-capture-recalibration", "rau2020", "10.1038/s41586-020-2628-7", "full-author-manuscript"],
  ["fink2021-simultaneous", "fink2021", "10.1103/PhysRevLett.127.243001", "full-accepted-main-article"],
  ["fink2021-state-fit", "fink2021", "10.1103/PhysRevLett.127.243001", "full-accepted-main-article"],
  ["fink2021-drive-control", "fink2021", "10.1103/PhysRevLett.127.243001", "full-accepted-main-article"],
  ["korobov2017-h2", "korobov2017", "10.1103/PhysRevLett.118.233001", "full-author-manuscript"],
  ["codata2022-mass-inputs", "mohr2025-neutron", "10.1103/RevModPhys.97.025002", "selected-primary-adjustment-passages"],
  ["codata2022-lattice", "mohr2025-neutron", "10.1103/RevModPhys.97.025002", "selected-primary-adjustment-passages"],
  ["mass-constraint-replay", "fink2021", "10.1103/PhysRevLett.127.243001", "full-accepted-main-article"]
  ]) {
    const s = studies.get(id);
    assert.equal(s?.sourceId, sourceId, "Physical measurement borrowed a different publication");
    assert.equal(s.studyType, ["creutz1980", "bali2005", "durr2008", "borsanyi2015", "borsanyi2015-volume", "schuh2019-geometry", "korobov2017-hd", "rau2020-figure-replay", "korobov2017-h2", "mass-constraint-replay"].includes(id) ? "computational-analysis" : ["liontrap2019-reanalysis", "liontrap2019-double-dip", "liontrap2019-oxygen", "rau2020-local-fit", "rau2020-joint-fit", "kessler2017-ill", "rau2020-capture-recalibration", "fink2021-state-fit", "codata2022-mass-inputs", "codata2022-lattice"].includes(id) ? "experimental-reanalysis" : "primary-experiment", "A computational lattice result became an experiment");
    assert.equal(s.doi, doi);
    assert.equal(s.readExtent, extent, "Author report and published PDF are distinct reading extents");
  }
  assert.match(studies.get("webber2011-r06").preparation, /^AK-3 /);
  assert.match(studies.get("webber2011-r07").preparation, /^Quartz /);
  assert.equal(sources.get("webber2011-note")?.doi, "10.1103/PhysRevLett.106.079901");
  for (const [id, cid, scope] of [...observations, ...contexts]) {
    const e = entities.get(`phys:${id}`), c = claims.get(cid);
    const isContext = contexts.some(([contextId]) => contextId === id);
    assert.equal(e?.kind, isContext ? "context" : id === "tasso-three-jets" ? "scoped-structure" : "scoped-process");
    assert.equal(e.status, isContext ? "definition" : "evidence-scoped");
    assert.ok(e.claimIds.includes(cid));
    assert.deepEqual(c?.contextIds, scope, "Physical finding changed preparation or dropped a combined run");
    assert.equal(c.status, isContext ? "method-contract" : scope.length > 1 ? "literature-synthesis" : "publication-supported");
  }
  for (const [id, source, target, cid, role] of dependencies) {
    const r = relations.get(`physics:${id}`), c = claims.get(cid);
    assert.equal(r?.source, `phys:${source}`);
    assert.equal(r.target, `phys:${target}`);
    assert.equal(r.kind, "descriptive", "Measurement/inference dependency became physical causation");
    assert.equal(r.role, role);
    assert.deepEqual(r.claimIds, [cid]);
    assert.equal(c?.status, "method-contract");
    assert.equal(c.kind, "method");
    assert.deepEqual(r.contextIds, c.contextIds);
    const targetClaim = claims.get(observations.find(([id]) => id === target)[1]);
    assert.deepEqual(c.contextIds, targetClaim.contextIds, "Inference method dropped its target preparation");
    assert.equal(r.carrier, undefined, "Detector, event or jet counts became universal carrier minima");
    assert.equal(r.experimentalContextIds, undefined);
  }
  for (const c of claims.values()) if (c.id.startsWith("C-phys-") || c.id.startsWith("M-phys-")) {
    const check = reproductionClaims.get(c.id);
    const deuteronCheck = [...DEUTERON_CHECKS, ...MASS_CONSTRAINT_CHECKS].find(([, id]) => id === c.id)?.[0];
    assert.deepEqual(c.checkIds, check ? [check] : deuteronCheck ? [deuteronCheck] : [], "Physical reproduction changed its verified scope");
    if (c.id === "C-phys-l0-bridge") continue;
    const datasetId = check ? `${c.contextIds[0]}-data` : null;
    if (check) for (const sourceId of [datasetId, "bell-data-verifier"]) {
      assert.ok(c.citations.some((ref) => ref.sourceId === sourceId && ref.role === "supports"), "Bell calculation lost its data or executable evidence");
    }
    for (const ref of c.citations) {
      assert.ok(sources.get(ref.sourceId)?.review.locators.includes(ref.locator), "Unreviewed physics passage");
      if (["supports", "method"].includes(ref.role)) assert.ok(
        c.contextIds.some((id) => studies.get(id)?.sourceId === ref.sourceId)
        || check && [datasetId, "bell-data-verifier"].includes(ref.sourceId)
        || inferenceSources.get(c.id)?.includes(ref.sourceId),
        "A lecture or correction notice replaced primary particle evidence");
    }
  }
  const comparisons = new Map(physics.comparisons.map((c) => [c.id, c]));
  assert.deepEqual([...comparisons.keys()], [
  "slac-scaling",
  "tasso-gluon",
  "mulan-fermi",
  "hensen2015-bell",
  "hensen2016-bell",
  "lamoreaux-casimir",
  "bressi-coefficient",
  "lamb-separation",
  "lamb-radiative-interpretation",
  "cms-alpha-mz",
  "cms-running-consistency",
  "creutz-string-fit",
  "creutz-scaling",
  "bali-avoided-crossing",
  "bali-mixing-coupling",
  "lee-abundance-limit",
  "durr-hadron-spectrum",
  "durr-resonance-exclusion",
  "ucn-al-loss",
  "ucn2018-uncleaned-loss",
  "ucn2022-cleaning-tail",
  "ucn2022-segment-response",
  "ucn2017-2018-lifetime",
  "ucn2020-2022-lifetime",
  "ucntau-global-lifetime",
  "borsanyi-kaon-volume",
  "borsanyi-isospin-spectrum",
  "borsanyi-qcd-qed-components",
  "borsanyi-calibrated-ratio",
  "kessler-combined-angle",
  "kessler-capture-wavelength",
  "kessler-binding-energy",
  "kessler-neutron-mass",
  "kessler-recalibrated-wavelength",
  "natarajan-voltage-control",
  "natarajan-hydrogen-masses",
  "difilippo-hydrogen-masses",
  "difilippo-capture-input",
  "liontrap2017-proton",
  "liontrap2019-proton",
  "liontrap-correction-budget",
  "liontrap-double-dip",
  "liontrap-oxygen",
  "liontrap-carbon-control",
  "schuh-ics-comparison",
  "rau-hd-closure",
  "rau-local-adjustment",
  "rau-joint-adjustment",
  "ill2017-spacing",
  "fink-proton-referenced-mass",
  "rau-grouped-replay",
  "rau-printed-arithmetic",
  "fink2021-state-branches",
  "fink2021-drive-extrapolation",
  "fink2021-deuteron-ratio",
  "fink2021-proton-mass",
  "codata2022-frequency-inputs",
  "codata2022-ill-input",
  "mass-constraint-arithmetic"
]);
  for (const [id, sourceId, claimId, methodId, result, assumptions] of [
    ["slac-scaling", "breidenbach1969", "C-phys-slac-scaling", "M-phys-slac-scaling", "conditional-support", [
      "Use the stated small-angle cross-section decomposition and kinematic domain.",
      "Assume transverse dominance (R approximately zero); do not claim a separately measured W1/W2 separation."
    ]],
    ["tasso-gluon", "tasso1979", "C-phys-tasso-gluon", "M-phys-tasso-gluon", "specified-alternative-disfavored", [
      "Use accepted charged-track momenta and the specified event-shape selection.",
      "Compare the declared collinear fragmentation variants and randomization procedure.",
      "Interpret jets through hard noncollinear gluon emission followed by limited-transverse-momentum fragmentation."
    ]],
    ["mulan-fermi", "webber2011", "C-phys-mulan-fermi", "M-phys-mulan-fermi", "not-tested", [
      "Use the combined R06/R07 lifetime with correlated uncertainties.",
      "Apply the muon-mass, phase-space, QED and hadronic corrections in Equation 1.",
      "Assume universality to name the inferred muon-decay coupling G_F."
    ]],
    ["hensen2015-bell", "hensen2015", "C-phys-hensen2015-bell-test", "M-phys-hensen2015-bell-test", "specified-alternative-disfavored", bellAssumptions],
    ["hensen2016-bell", "hensen2016", "C-phys-hensen2016-bell-test", "M-phys-hensen2016-bell-test", "inconclusive", bellAssumptions]
  ]) {
    const c = comparisons.get(id);
    assert.deepEqual(c.sourceIds, [sourceId]);
    assert.deepEqual(c.claimIds, [claimId]);
    assert.equal(c.result, result, "Conditional particle comparison became a universal identification");
    assert.deepEqual(c.assumptions, assumptions, "Physical inference lost a required assumption");
    for (const assumption of assumptions) assert.ok(claims.get(methodId).limitations.includes(assumption), "Graph inference lost a reviewed assumption");
  }

  for (const [claimId, sourceIds] of inferenceSources) {
    const c = claims.get(claimId);
    for (const sourceId of sourceIds) assert.ok(c.citations.some((r) => r.sourceId === sourceId && r.role === (c.kind === "method" ? "method" : "supports")),
      `Conditional physical interpretation lost its correction or theory input: ${claimId}`);
  }
  for (const [id, assumptions] of vacuumAssumptions) {
    const c = comparisons.get(id);
    assert.deepEqual(c.assumptions, assumptions, "Vacuum-related inference lost a reviewed assumption");
    assert.deepEqual(c.claimIds, [`C-phys-${id}`]);
    assert.equal(c.result, id === "lamb-separation" ? "specified-alternative-disfavored" : "conditional-support");
    const studyId = id.startsWith("lamoreaux") ? "lamoreaux1997" : id.startsWith("bressi") ? "bressi2002" : "lamb1947";
    const extraSources = inferenceSources.get(`C-phys-${id}`) ?? [];
    assert.deepEqual(c.sourceIds, [studyId, ...extraSources]);
    for (const a of assumptions) assert.ok(claims.get(`M-phys-${id}`).limitations.includes(a));
  }
  for (const [id, doi, extent] of [
    ["lamoreaux1998-note", "10.1103/PhysRevLett.81.5475", "full-publisher-erratum"],
    ["lambrecht2000", "10.1103/PhysRevLett.84.5672", "full-published-comment"],
    ["lamoreaux2000-reply", "10.1103/PhysRevLett.84.5673", "full-published-reply"],
    ["bethe1947", "10.1103/PhysRev.72.339", "full-primary-article"],
    ["jaffe2005", "10.1103/PhysRevD.72.021301", "full-primary-article"]
  ]) {
    assert.equal(sources.get(id)?.doi, doi);
    assert.equal(sources.get(id).review.extent, extent);
    assert.ok(!studies.has(id), "A theoretical paper or correction became an experimental preparation");
  }
  assert.equal(sources.get("casimir1948")?.doi, null, "The original Casimir paper acquired a reprint DOI");
  assert.equal(sources.get("casimir1948").url, "https://dwc.knaw.nl/DL/publications/PU00018547.pdf");

  for (const [id, limits] of qcdDefinitionLimits) {
    const c = claims.get(`D-phys-${id}`);
    for (const limit of limits) assert.ok(c.limitations.includes(limit), "QCD definition lost its scale, matter-content or perturbative restriction");
  }
  for (const [id, assumptions] of cmsAssumptions) {
    const c = comparisons.get(id);
    assert.deepEqual(c.sourceIds, ["cms2013-r32"]);
    assert.deepEqual(c.claimIds, [`C-phys-${id}`]);
    assert.equal(c.result, id === "cms-alpha-mz" ? "not-tested" : "conditional-support", "A conditional coupling fit became an independent theory test");
    assert.deepEqual(c.assumptions, assumptions, "CMS inference lost the published uncertainty or shared-data assumptions");
    for (const a of assumptions) assert.ok(claims.get(`M-phys-${id}`).limitations.includes(a));
  }
  assert.equal(sources.get("cms2013-r32").url, "https://arxiv.org/abs/1304.7498v2", "CMS final result lost the reviewed published-replacement text");
  for (const [id, doi] of [["gross1973", "10.1103/PhysRevLett.30.1343"], ["politzer1973", "10.1103/PhysRevLett.30.1346"]]) {
    assert.equal(sources.get(id)?.doi, doi);
    assert.equal(sources.get(id).review.extent, "full-primary-article");
    assert.ok(!studies.has(id), "An ultraviolet theoretical calculation became a measured preparation");
  }

  assert.equal(sources.get("wilson1974")?.doi, "10.1103/PhysRevD.10.2445");
  assert.equal(sources.get("wilson1974").review.extent, "full-primary-article");
  assert.ok(!studies.has("wilson1974"), "A formal strong-coupling construction became a simulation or experiment");
  for (const [id, limits] of latticeDefinitionLimits) {
    for (const limit of limits) assert.ok(claims.get(`D-phys-${id}`).limitations.includes(limit), "Lattice definition lost its regulator, matter or asymptotic restriction");
  }
  for (const id of ["M-phys-creutz1980-context", "C-phys-creutz-wilson-loops"]) {
    for (const limit of latticeReadoutLimits) assert.ok(claims.get(id).limitations.includes(limit), "Lattice readout lost its sampling and finite-size limits");
  }
  for (const [id, assumptions] of latticeAssumptions) {
    const c = comparisons.get(id);
    assert.deepEqual(c.sourceIds, ["creutz1980"]);
    assert.deepEqual(c.claimIds, [`C-phys-${id}`]);
    assert.equal(c.result, id === "creutz-string-fit" ? "not-tested" : "conditional-support", "A conditional lattice inference became independent confinement proof");
    assert.deepEqual(c.assumptions, assumptions, "Lattice inference lost its fit or scale-setting assumptions");
    for (const a of assumptions) {
      assert.ok(claims.get(`M-phys-${id}`).limitations.includes(a));
      assert.ok(claims.get(`C-phys-${id}`).limitations.includes(a));
    }
  }
  const latticeStudy = studies.get("creutz1980");
  assert.equal(latticeStudy.system, "Pure SU(2) Euclidean lattice gauge theory without dynamical quarks");
  for (const limit of [...latticeReadoutLimits, ...latticeAssumptions.values()].flat()) assert.ok(latticeStudy.limitations.includes(limit));

  assert.equal(sources.get("bali2005").url, "https://arxiv.org/abs/hep-lat/0505012v2", "String-breaking evidence lost its reviewed source version");
  assert.equal(studies.get("bali2005").system, "SU(3) static-source spectrum with two degenerate Wilson sea quarks at one lattice spacing and mass");
  assert.equal(studies.get("lee2002").system, "Processed silicone-oil drops in a horizontal alternating electric field");
  for (const [id, limits] of screeningClaimLimits) {
    for (const limit of limits) assert.ok(claims.get(id).limitations.includes(limit), "String-breaking or electric-charge evidence lost its reviewed boundary");
  }
  for (const {id, sourceId, limits, result} of screeningComparisons) {
    const c = comparisons.get(id);
    assert.deepEqual(c.sourceIds, [sourceId]);
    assert.deepEqual(c.claimIds, [`C-phys-${id}`]);
    assert.equal(c.result, result, "Scoped screening inference became an independent universal test");
    assert.deepEqual(c.assumptions, limits, "Screening inference lost its model, readout or source inconsistencies");
    for (const prefix of ["C-phys-", "M-phys-"]) for (const limit of limits) {
      assert.ok(claims.get(prefix + id).limitations.includes(limit), "Screening claim lost its fit, confidence or generalization boundary");
    }
  }
  for (const [id, limits] of screeningStudyLimits) {
    for (const limit of limits) assert.ok(studies.get(id).limitations.includes(limit), "Study lost a reviewed sampling or inference restriction");
  }

  assert.equal(sources.get("durr2008").url, "https://arxiv.org/abs/0906.3599v1", "Hadron evidence lost its reviewed author version");
  assert.equal(sources.get("durr2008").year, 2008, "Author deposit year replaced publication year");
  const hadronStudy = studies.get("durr2008");
  assert.equal(hadronStudy.system, "Isospin-symmetric two-plus-one-flavor SU(3) light-hadron spectrum at three lattice spacings");
  assert.equal(hadronStudy.preparation, "Two-plus-one-flavor SU(3) lattice QCD with degenerate up/down masses and a strange quark, without QED or isospin breaking. Tree-level Symanzik gauge and clover-improved Wilson fermion actions use six stout-link averaging levels. Three gauge couplings beta=3.3, 3.57 and 3.7 give spacings about 0.125, 0.085 and 0.065 fm; simulated pion masses reach 190 MeV.");
  assert.equal(claims.get("C-phys-durr-hadron-spectrum").statement, hadronSpectrumStatement, "Reported mass table, calibration or uncertainty convention changed");
  for (const [id, limits] of hadronClaimLimits) {
    for (const limit of limits) assert.ok(claims.get(id).limitations.includes(limit), "Hadron evidence lost its model, observable or calibration boundary");
  }
  for (const {id, assumptions, result} of hadronComparisons) {
    const c = comparisons.get(id);
    assert.deepEqual(c.sourceIds, ["durr2008"]);
    assert.deepEqual(c.claimIds, [`C-phys-${id}`]);
    assert.equal(c.result, result, "Conditional spectrum or unresolved resonance became an independent physical proof");
    assert.deepEqual(c.assumptions, assumptions, "Hadron inference lost inputs, fit restrictions or uncertainty meaning");
    for (const prefix of ["C-phys-", "M-phys-"]) for (const limit of assumptions) {
      assert.ok(claims.get(prefix + id).limitations.includes(limit), "Hadron claim lost calibration, exclusions or scope");
    }
  }
  for (const limit of hadronStudyLimits) assert.ok(hadronStudy.limitations.includes(limit), "Hadron study lost its reviewed restriction");

  for (const [id, year, doi] of [["gonzalez2021", 2021, "10.1103/PhysRevLett.127.162501"], ["musedinovic2025", 2025, "10.1103/PhysRevC.111.045501"]]) {
    assert.equal(sources.get(id).year, year, "Neutron acquisition year replaced publication year");
    assert.equal(sources.get(id).url, "https://doi.org/" + doi, "Neutron result lost its final published source");
    assert.equal(sources.get(id).review.extent, "full-primary-article");
  }
  for (const [id, statement] of neutronStatements) {
    assert.equal(claims.get(id).statement, statement, "Reported neutron quantity, preparation or inference changed");
  }
  for (const [id, limits] of neutronClaimLimits) {
    for (const limit of limits) assert.ok(claims.get(id).limitations.includes(limit), "Neutron evidence lost its preparation, shared-data or loss-model boundary");
  }
  for (const expected of neutronComparisons) {
    const c = comparisons.get(expected.id);
    assert.deepEqual(c.sourceIds, expected.sourceIds, "Neutron inference lost a contributing publication");
    assert.deepEqual(c.claimIds, expected.claimIds);
    assert.equal(c.result, expected.result, "Storage inference became an independent test of intrinsic decay or new physics");
    assert.deepEqual(c.assumptions, expected.assumptions, "Neutron inference lost its diagnostic, correction or covariance restrictions");
  }
  for (const expected of neutronStudies) {
    const study = studies.get(expected.id);
    assert.equal(study.system, expected.system, "Neutron study changed production year or diagnostic preparation");
    assert.equal(study.preparation, expected.preparation, "Neutron study mixed detector, timing or cleaning preparations");
    for (const limit of expected.limitations) assert.ok(study.limitations.includes(limit), "Neutron study lost its reviewed scope");
  }

  assert.equal(sources.get("borsanyi2015").year, 2015);
  assert.equal(sources.get("borsanyi2015").url, "https://arxiv.org/abs/1406.4088v2", "Mass-splitting evidence lost its reviewed author version");
  for (const expected of isospinClaims) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "Isospin quantity, units, sign or input status changed");
    for (const index of expected.limits) assert.ok(claim.limitations.includes(isospinLimits[index]), "Isospin evidence lost its calibration, convention or computational boundary");
  }
  for (const expected of isospinStudies) {
    const study = studies.get(expected.id);
    assert.equal(study.system, expected.system);
    assert.equal(study.preparation, expected.preparation, "Isospin production ensemble and volume diagnostic were mixed");
  }
  for (const expected of isospinComparisons) {
    const comparison = comparisons.get(expected.id);
    const method = isospinClaims.find((c) => c.id === "M-phys-" + expected.id);
    assert.equal(comparison.result, expected.result, "Conditional mass inference became an independent experiment or unique decomposition");
    assert.deepEqual(comparison.sourceIds, ["borsanyi2015"]);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    assert.deepEqual(comparison.assumptions, method.limits.map((index) => isospinLimits[index]));
  }

  for (const expected of captureSources) {
    const source = sources.get(expected.id);
    for (const key of ["doi", "url", "year"]) assert.equal(source?.[key], expected[key], "Capture evidence changed publication or version");
    assert.equal(source.review.extent, expected.extent, "Selected adjustment passages became a complete independent experiment");
  }
  for (const expected of captureClaims) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "Capture observable, calibration, units or mass input changed");
    for (const index of expected.limits) assert.ok(claim.limitations.includes(captureLimits[index]), "Capture inference lost its calibration, recoil or shared-input boundary");
    for (const id of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === id), "Capture interpretation lost its primary calibration or adjustment source");
  }
  for (const expected of captureStudies) {
    const study = studies.get(expected.id);
    assert.equal(study.system, expected.system);
    assert.equal(study.preparation, expected.preparation, "Capture campaigns, configurations or calibration sets were pooled");
  }
  for (const expected of captureComparisons) {
    const comparison = comparisons.get(expected.id);
    const method = captureClaims.find((c) => c.id === "M-phys-" + expected.id);
    assert.equal(comparison.result, expected.result, "Calibrated capture inference became independent replication");
    assert.deepEqual(comparison.sourceIds, expected.sourceIds);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    assert.deepEqual(comparison.assumptions, method.limits.map((index) => captureLimits[index]));
  }

  for (const expected of atomicSources) {
    const source = sources.get(expected.id);
    for (const key of ["doi", "url", "year"]) assert.equal(source?.[key], expected[key], "Atomic mass evidence changed publication");
    assert.equal(source.review.extent, "full-primary-article");
  }
  for (const expected of atomicClaims) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "Atomic mass quantity, charge convention or unit changed");
    for (const index of expected.limits) assert.ok(claim.limitations.includes(atomicLimits[index]), "Atomic mass inference lost a charge, correction or covariance boundary");
    for (const id of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === id), "Mass interpretation lost its primary input");
  }
  for (const expected of atomicStudies) {
    const study = studies.get(expected.id);
    assert.equal(study.system, expected.system);
    assert.equal(study.preparation, expected.preparation, "Atomic mass control and production preparations were pooled");
  }
  for (const expected of atomicComparisons) {
    const comparison = comparisons.get(expected.id);
    const method = atomicClaims.find((c) => c.id === "M-phys-" + expected.id);
    assert.equal(comparison.result, expected.result, "Mass-input tracing became independent experimental validation");
    assert.deepEqual(comparison.sourceIds, expected.sourceIds);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    assert.deepEqual(comparison.assumptions, method.limits.map((index) => atomicLimits[index]));
  }

  for (const expected of liontrapSources) {
    const source = sources.get(expected.id);
    for (const key of ["doi", "url", "year"]) assert.equal(source?.[key], expected[key], "LIONTRAP evidence changed publication");
    assert.equal(source.review.extent, "full-primary-article");
  }
  for (const expected of liontrapClaims) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "LIONTRAP quantity, correction convention or unit changed");
    for (const index of expected.limits) assert.ok(claim.limitations.includes(liontrapLimits[index]), "LIONTRAP inference lost a correction, covariance or shared-data boundary");
    for (const id of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === id), "LIONTRAP interpretation lost a primary input");
  }
  for (const expected of liontrapStudies) {
    const study = studies.get(expected.id);
    for (const key of ["system", "preparation", "studyType"]) assert.equal(study[key], expected[key], "LIONTRAP acquisition, reanalysis or geometry scope changed");
  }
  for (const expected of liontrapComparisons) {
    const comparison = comparisons.get(expected.id);
    const method = liontrapClaims.find((c) => c.id === "M-phys-" + expected.id);
    assert.equal(comparison.result, expected.result, "Conditional LIONTRAP comparison became independent validation");
    assert.deepEqual(comparison.sourceIds, expected.sourceIds);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    assert.deepEqual(comparison.assumptions, method.limits.map((index) => liontrapLimits[index]));
  }

  validateDeuteronContracts({ sources, claims, studies, comparisons });
  validateMassConstraintContracts({ sources, claims, studies, comparisons });

  const bridge = claims.get("C-phys-l0-bridge");
  assert.equal(bridge?.status, "unresolved", "Carrier promotion became a derivation of quantum field theory");
  assert.equal(bridge.contextIds, undefined);
  assert.deepEqual(bridge.checkIds, []);
  assert.equal(entities.get("l0:carrier-promotion").status, "hypothesis");
  assert.ok(entities.get("l0:carrier-promotion").claimIds.includes(bridge.id));
  assert.ok(bridge.citations.some((c) => c.sourceId === "legacy-1" && c.role === "provenance"));
  assert.ok(bridge.citations.every((c) => ["provenance", "limits"].includes(c.role)),
    "An unresolved construction acquired affirmative evidence");
}
