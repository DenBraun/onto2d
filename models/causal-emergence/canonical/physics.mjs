import assert from "node:assert/strict";

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
  ["phys:ucn-storage-loss-model", "D-phys-ucn-storage-loss-model"]
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
  ["survival-storage-loss", ["exponential-survival", "ucn-storage-loss-model"]]
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
  ["ucntau-global-lifetime", "C-phys-ucntau-global-lifetime", ["gonzalez2021-2017", "gonzalez2021-2018", "musedinovic2025-2020", "musedinovic2025-2021", "musedinovic2025-2022"]]
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
  ["ucn2022-uncleaned-context", "M-phys-ucn2022-uncleaned-context", ["musedinovic2025-uncleaned"]]
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
  ["survival-ucntau-global-lifetime", "ucn-storage-loss-model", "ucntau-global-lifetime", "M-phys-ucntau-global-lifetime", "interpretation-dependency"]
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
  ]
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
  "musedinovic2025-uncleaned"
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
  ["musedinovic2025-uncleaned", "musedinovic2025", "10.1103/PhysRevC.111.045501", "full-primary-article"]
  ]) {
    const s = studies.get(id);
    assert.equal(s?.sourceId, sourceId, "Physical measurement borrowed a different publication");
    assert.equal(s.studyType, ["creutz1980", "bali2005", "durr2008"].includes(id) ? "computational-analysis" : "primary-experiment", "A computational lattice result became an experiment");
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
    assert.deepEqual(c.checkIds, check ? [check] : [], "Physical reproduction changed its verified scope");
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
  "ucntau-global-lifetime"
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
