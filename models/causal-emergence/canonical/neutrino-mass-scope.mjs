import assert from "node:assert/strict";

export const NEUTRINO_MASS_SCOPE_CHECKS = new Map();
export const NEUTRINO_MASS_SCOPE_ANALYTICAL_SOURCES = new Map();
export const NEUTRINO_MASS_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-mass-mixing-scope",
      "D-phys-neutrino-mass-mixing-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-charge-flavor-neutrino-mass-mixing-scope",
      [
        "phys:lepton-charge-flavor",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:neutrino-flavor-mixing-neutrino-mass-mixing-scope",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:neutrino-mixing-parameterization-neutrino-mass-mixing-scope",
      [
        "phys:neutrino-mixing-parameterization",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:neutrino-mass-model-boundary-neutrino-mass-mixing-scope",
      [
        "phys:neutrino-mass-model-boundary",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:oscillation-mass-identifiability-neutrino-mass-mixing-scope",
      [
        "phys:oscillation-mass-identifiability",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:neutrino-matter-evolution-neutrino-mass-mixing-scope",
      [
        "phys:neutrino-matter-evolution",
        "phys:neutrino-mass-mixing-scope"
      ]
    ],
    [
      "physics:neutrino-transport-boundary-neutrino-mass-mixing-scope",
      [
        "phys:neutrino-transport-boundary",
        "phys:neutrino-mass-mixing-scope"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "neutrino-mass-mixing-evidence",
      "C-phys-neutrino-mass-mixing-evidence",
      [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "neutrino-mass-mixing-scope-neutrino-mass-mixing-evidence",
      "neutrino-mass-mixing-scope",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ],
    [
      "kamland2005-oscillation-fit-neutrino-mass-mixing-evidence",
      "kamland2005-oscillation-fit",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ],
    [
      "superk1998-oscillation-fit-neutrino-mass-mixing-evidence",
      "superk1998-oscillation-fit",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ],
    [
      "sno2002-active-flavor-components-neutrino-mass-mixing-evidence",
      "sno2002-active-flavor-components",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-appearance-evidence-neutrino-mass-mixing-evidence",
      "opera2015-appearance-evidence",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-parameter-compatibility-neutrino-mass-mixing-evidence",
      "opera2015-parameter-compatibility",
      "neutrino-mass-mixing-evidence",
      "M-phys-neutrino-mass-mixing-evidence",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-neutrino-mass-mixing-evidence",
      [
        "opera2013-beam-method",
        "pdg2025-neutrino-mass-structure",
        "pdg2025-neutrino-mixing",
        "pdg2025-electroweak",
        "stirner2018-transport"
      ]
    ],
    [
      "M-phys-neutrino-mass-mixing-evidence",
      [
        "opera2013-beam-method",
        "pdg2025-neutrino-mass-structure",
        "pdg2025-neutrino-mixing",
        "pdg2025-electroweak",
        "stirner2018-transport"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-neutrino-mass-mixing-scope",
      "kind": "review-finding",
      "statement": "The massive-neutrino description distinguishes charged-current flavor labels from propagation mass eigenstates and supplies a mixing matrix and mass-squared differences. Oscillation probabilities identify only restricted combinations under their preparation, propagation and response assumptions. Their structure requires an extension of the minimal massless-neutrino Standard Model, while its deeper mass-generation mechanism and parameter origin remain unspecified.",
      "scope": "Declared basis/parameter structure and finite evidence boundaries for source-card 1.25; propagation applications and quantitative absolute-mass or cosmological tests remain separately scoped.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A charged-current flavor label is tied to the accompanying charged-lepton preparation/readout; it is not an individual propagation mass, a classical mixture measured simultaneously in two bases or a guarantee that every neutrino state exhibits flavor oscillation. Closed three-active unitarity is a supplied model restriction, not an exclusion of every additional state or nonunitary effective submatrix.",
        "The minimal renormalizable Standard Model with its stated field content has no neutrino mass term. Charged-fermion Higgs/Yukawa relations do not automatically supply neutrino masses. Alternative massive-neutrino field/operator assignments are formal inputs, not a measured Dirac/Majorana choice, a unique origin or a prediction of mixing parameters.",
        "At fixed mixing, baseline and energy in the declared leading coherent ultrarelativistic vacuum phase, an admissible common mass-squared shift leaves oscillation probabilities unchanged. Two unequal nonzero mass-squared differences from a shared reference imply three distinct eigenvalues and at least two positive masses, not three positive masses. Equal nonzero differences are not sufficient for that conclusion. Selected effective two-flavor fits are not automatically exact three-state eigenpair measurements.",
        "Oscillation evidence here does not determine an absolute mass scale, the mass ordering beyond its selected conditional models, Dirac/Majorana character, Majorana phases, sterile content or the origin of the mixing/Yukawa parameters. No beta-endpoint, neutrinoless-double-beta, cosmological mass-sum or modern global-fit bounds are imported.",
        "Propagation, coherence and applications retain the separate scope of card 1.17. The matter Hamiltonian uses vacuum masses/mixing as inputs; its medium potential does not generate those vacuum masses. Source composition, collisions, self-refraction, cosmic expansion and detector response require their own quantitative transport inputs. This admission supplies no astrophysical transport or cosmological prediction.",
        "The original necessary lepton parent is retained only as a descriptive flavor-readout/model dependency. Weight 1, Nmin=Ncrit=1, arising/maintenance and direction/interaction codes do not establish a measured formation threshold, universal causal necessity or temporal emergence sequence. SOMA phase 1, property/type-role 3 and the established label are not scientific evidence.",
        "The original refusal to specify a deeper mass-generation mechanism is preserved. Finite evidence for mass-induced mixing under declared assumptions does not require selecting a speculative mechanism; it also does not validate every flavor-transformation explanation or a universal sector-wide construction."
      ]
    },
    {
      "id": "C-phys-neutrino-mass-mixing-evidence",
      "kind": "review-finding",
      "statement": "KamLAND reactor spectral inference and the historical Super-Kamiokande atmospheric fit constrain their respective effective mass-squared differences and mixing amplitudes. SNO directly infers a joint non-electron active solar component; OPERA supports accelerator tau appearance and supplies a dependent full-mixing parameter comparison. These results support mass-induced flavor mixing within their stated models, while preserving distinct observables, preparations and inference assumptions.",
      "scope": "Literature comparison of the existing KamLAND 2005, Super-Kamiokande 1998, SNO 2002 and OPERA 2015 inference contexts; no new global oscillation fit or absolute-mass measurement.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3\u20134 (PDF 6\u20137), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "KamLAND contributes its reactor-only rate-and-shape two-flavor fit; its shape-only and CPT-assuming solar-combined analyses are not new reactor acquisitions. The 1998 Super-Kamiokande atmospheric fit is a historical effective two-flavor result conditioned on flux, response and nuisance assumptions; it did not directly distinguish tau from sterile disappearance. Their reported characteristic splitting scales are not relabeled as exact modern three-state eigenpairs or combined into a new likelihood.",
        "The SNO-only direct joint electron/non-electron active-flux inference supports solar flavor transformation under its B8-shape and response assumptions. It is not NC-minus-CC subtraction of independent fluxes, a separate muon/tau identification, an oscillation-phase or mass-splitting measurement, or proof of a unique matter-enhanced mechanism. Its SK-added solar constraint is not the distinct 1998 atmospheric exposure.",
        "OPERA appearance significance, signal strength and its full-mixing mass-squared interval reuse the same 2008-2012 acquisition, channel counts and response. The compatibility result is not independent appearance replication or a third distinct oscillation frequency. Its adopted nominal splitting and full-mixing inputs are not additional fitted observations; the reported intervals and significance retain their original confidence construction.",
        "These are four named inference contexts and five outcomes, not five independent experiments or a global three-flavor fit. Event selections, intermediate summaries, alternative analysis implementations and fitted outputs within a campaign share data. No likelihood, nuisance covariance, combined parameter range, mass ordering or confidence coverage is newly reconstructed.",
        "Within a supplied common three-state mass-induced interpretation, distinct nonzero splitting scales motivate the formal identifiability consequence of at least two nonzero masses. This comparison does not independently establish all assumptions of that embedding or measure all three masses, an absolute scale, Dirac/Majorana nature, Majorana phases, sterile content or a unique mechanism. The formal common-shift invariance is not a new experimental bound.",
        "Generic solar, atmospheric, reactor and accelerator evidence placeholders are restricted to these actual admitted sources and analysis stages. Astrophysical/cosmological constraints, beta endpoints, neutrinoless double beta decay and universal parent/formation/maintenance claims remain excluded from this finite evidence comparison."
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "M-phys-neutrino-mass-mixing-evidence",
      "kind": "method",
      "statement": "Map each selected result to the quantity it actually constrains and the study context owning that analysis. Preserve the joint SNO response and the shared OPERA appearance/compatibility data; use formal identifiability only conditionally. Do not pool dependent outputs, turn nominal parameters into measurements, relabel effective eigenpairs or infer an absolute mass or unique generation mechanism.",
      "scope": "Literature comparison of the existing KamLAND 2005, Super-Kamiokande 1998, SNO 2002 and OPERA 2015 inference contexts; no new global oscillation fit or absolute-mass measurement.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3\u20134 (PDF 6\u20137), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal neutrino-mass inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "KamLAND contributes its reactor-only rate-and-shape two-flavor fit; its shape-only and CPT-assuming solar-combined analyses are not new reactor acquisitions. The 1998 Super-Kamiokande atmospheric fit is a historical effective two-flavor result conditioned on flux, response and nuisance assumptions; it did not directly distinguish tau from sterile disappearance. Their reported characteristic splitting scales are not relabeled as exact modern three-state eigenpairs or combined into a new likelihood.",
        "The SNO-only direct joint electron/non-electron active-flux inference supports solar flavor transformation under its B8-shape and response assumptions. It is not NC-minus-CC subtraction of independent fluxes, a separate muon/tau identification, an oscillation-phase or mass-splitting measurement, or proof of a unique matter-enhanced mechanism. Its SK-added solar constraint is not the distinct 1998 atmospheric exposure.",
        "OPERA appearance significance, signal strength and its full-mixing mass-squared interval reuse the same 2008-2012 acquisition, channel counts and response. The compatibility result is not independent appearance replication or a third distinct oscillation frequency. Its adopted nominal splitting and full-mixing inputs are not additional fitted observations; the reported intervals and significance retain their original confidence construction.",
        "These are four named inference contexts and five outcomes, not five independent experiments or a global three-flavor fit. Event selections, intermediate summaries, alternative analysis implementations and fitted outputs within a campaign share data. No likelihood, nuisance covariance, combined parameter range, mass ordering or confidence coverage is newly reconstructed.",
        "Within a supplied common three-state mass-induced interpretation, distinct nonzero splitting scales motivate the formal identifiability consequence of at least two nonzero masses. This comparison does not independently establish all assumptions of that embedding or measure all three masses, an absolute scale, Dirac/Majorana nature, Majorana phases, sterile content or a unique mechanism. The formal common-shift invariance is not a new experimental bound.",
        "Generic solar, atmospheric, reactor and accelerator evidence placeholders are restricted to these actual admitted sources and analysis stages. Astrophysical/cosmological constraints, beta endpoints, neutrinoless double beta decay and universal parent/formation/maintenance claims remain excluded from this finite evidence comparison."
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-mass-mixing-scope",
      "name": "Neutrino mass and mixing scope",
      "kind": "definition",
      "description": "The massive-neutrino description distinguishes charged-current flavor labels from propagation mass eigenstates and supplies a mixing matrix and mass-squared differences. Oscillation probabilities identify only restricted combinations under their preparation, propagation and response assumptions. Their structure requires an extension of the minimal massless-neutrino Standard Model, while its deeper mass-generation mechanism and parameter origin remain unspecified.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions"
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion"
        }
      ],
      "openObligations": [
        "A charged-current flavor label is tied to the accompanying charged-lepton preparation/readout; it is not an individual propagation mass, a classical mixture measured simultaneously in two bases or a guarantee that every neutrino state exhibits flavor oscillation. Closed three-active unitarity is a supplied model restriction, not an exclusion of every additional state or nonunitary effective submatrix.",
        "The minimal renormalizable Standard Model with its stated field content has no neutrino mass term. Charged-fermion Higgs/Yukawa relations do not automatically supply neutrino masses. Alternative massive-neutrino field/operator assignments are formal inputs, not a measured Dirac/Majorana choice, a unique origin or a prediction of mixing parameters.",
        "At fixed mixing, baseline and energy in the declared leading coherent ultrarelativistic vacuum phase, an admissible common mass-squared shift leaves oscillation probabilities unchanged. Two unequal nonzero mass-squared differences from a shared reference imply three distinct eigenvalues and at least two positive masses, not three positive masses. Equal nonzero differences are not sufficient for that conclusion. Selected effective two-flavor fits are not automatically exact three-state eigenpair measurements.",
        "Oscillation evidence here does not determine an absolute mass scale, the mass ordering beyond its selected conditional models, Dirac/Majorana character, Majorana phases, sterile content or the origin of the mixing/Yukawa parameters. No beta-endpoint, neutrinoless-double-beta, cosmological mass-sum or modern global-fit bounds are imported.",
        "Propagation, coherence and applications retain the separate scope of card 1.17. The matter Hamiltonian uses vacuum masses/mixing as inputs; its medium potential does not generate those vacuum masses. Source composition, collisions, self-refraction, cosmic expansion and detector response require their own quantitative transport inputs. This admission supplies no astrophysical transport or cosmological prediction.",
        "The original necessary lepton parent is retained only as a descriptive flavor-readout/model dependency. Weight 1, Nmin=Ncrit=1, arising/maintenance and direction/interaction codes do not establish a measured formation threshold, universal causal necessity or temporal emergence sequence. SOMA phase 1, property/type-role 3 and the established label are not scientific evidence.",
        "The original refusal to specify a deeper mass-generation mechanism is preserved. Finite evidence for mass-induced mixing under declared assumptions does not require selecting a speculative mechanism; it also does not validate every flavor-transformation explanation or a universal sector-wide construction."
      ]
    },
    {
      "id": "phys:neutrino-mass-mixing-evidence",
      "name": "Scoped neutrino mass and mixing evidence",
      "kind": "scoped-process",
      "description": "KamLAND reactor spectral inference and the historical Super-Kamiokande atmospheric fit constrain their respective effective mass-squared differences and mixing amplitudes. SNO directly infers a joint non-electron active solar component; OPERA supports accelerator tau appearance and supplies a dependent full-mixing parameter comparison. These results support mass-induced flavor mixing within their stated models, while preserving distinct observables, preparations and inference assumptions.",
      "claimIds": [
        "C-phys-neutrino-mass-mixing-evidence"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison"
        },
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3\u20134 (PDF 6\u20137), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.25-14.34: charged-current matrix, field rephasings, three-state PMNS parameterization and its unitary approximation"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 1-3, Section 14.1 through the end before Section 14.2: minimal renormalizable Standard Model field content and neutrino-mass exclusion"
        },
        {
          "sourceId": "pdg2025-neutrino-mass-structure",
          "locator": "2025 review pages 3-6, Section 14.2 including Sections 14.2.1-14.2.4 and Equations 14.6-14.24: formal Dirac, Majorana and dimension-five mass alternatives"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions"
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion"
        }
      ],
      "openObligations": [
        "KamLAND contributes its reactor-only rate-and-shape two-flavor fit; its shape-only and CPT-assuming solar-combined analyses are not new reactor acquisitions. The 1998 Super-Kamiokande atmospheric fit is a historical effective two-flavor result conditioned on flux, response and nuisance assumptions; it did not directly distinguish tau from sterile disappearance. Their reported characteristic splitting scales are not relabeled as exact modern three-state eigenpairs or combined into a new likelihood.",
        "The SNO-only direct joint electron/non-electron active-flux inference supports solar flavor transformation under its B8-shape and response assumptions. It is not NC-minus-CC subtraction of independent fluxes, a separate muon/tau identification, an oscillation-phase or mass-splitting measurement, or proof of a unique matter-enhanced mechanism. Its SK-added solar constraint is not the distinct 1998 atmospheric exposure.",
        "OPERA appearance significance, signal strength and its full-mixing mass-squared interval reuse the same 2008-2012 acquisition, channel counts and response. The compatibility result is not independent appearance replication or a third distinct oscillation frequency. Its adopted nominal splitting and full-mixing inputs are not additional fitted observations; the reported intervals and significance retain their original confidence construction.",
        "These are four named inference contexts and five outcomes, not five independent experiments or a global three-flavor fit. Event selections, intermediate summaries, alternative analysis implementations and fitted outputs within a campaign share data. No likelihood, nuisance covariance, combined parameter range, mass ordering or confidence coverage is newly reconstructed.",
        "Within a supplied common three-state mass-induced interpretation, distinct nonzero splitting scales motivate the formal identifiability consequence of at least two nonzero masses. This comparison does not independently establish all assumptions of that embedding or measure all three masses, an absolute scale, Dirac/Majorana nature, Majorana phases, sterile content or a unique mechanism. The formal common-shift invariance is not a new experimental bound.",
        "Generic solar, atmospheric, reactor and accelerator evidence placeholders are restricted to these actual admitted sources and analysis stages. Astrophysical/cosmological constraints, beta endpoints, neutrinoless double beta decay and universal parent/formation/maintenance claims remain excluded from this finite evidence comparison."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-charge-flavor-neutrino-mass-mixing-scope",
      "source": "phys:lepton-charge-flavor",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-mass-mixing-scope",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-mixing-parameterization-neutrino-mass-mixing-scope",
      "source": "phys:neutrino-mixing-parameterization",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-mass-model-boundary-neutrino-mass-mixing-scope",
      "source": "phys:neutrino-mass-model-boundary",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:oscillation-mass-identifiability-neutrino-mass-mixing-scope",
      "source": "phys:oscillation-mass-identifiability",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-matter-evolution-neutrino-mass-mixing-scope",
      "source": "phys:neutrino-matter-evolution",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-transport-boundary-neutrino-mass-mixing-scope",
      "source": "phys:neutrino-transport-boundary",
      "target": "phys:neutrino-mass-mixing-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This declared basis, model or propagation boundary delimits interpretation; it supplies no measured parent necessity, carrier minimum or mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "id": "physics:neutrino-mass-mixing-scope-neutrino-mass-mixing-evidence",
      "source": "phys:neutrino-mass-mixing-scope",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:kamland2005-oscillation-fit-neutrino-mass-mixing-evidence",
      "source": "phys:kamland2005-oscillation-fit",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:superk1998-oscillation-fit-neutrino-mass-mixing-evidence",
      "source": "phys:superk1998-oscillation-fit",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:sno2002-active-flavor-components-neutrino-mass-mixing-evidence",
      "source": "phys:sno2002-active-flavor-components",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-appearance-evidence-neutrino-mass-mixing-evidence",
      "source": "phys:opera2015-appearance-evidence",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-parameter-compatibility-neutrino-mass-mixing-evidence",
      "source": "phys:opera2015-parameter-compatibility",
      "target": "phys:neutrino-mass-mixing-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This scoped definition or named inference constrains only its declared quantity; the descriptive comparison is not independent replication or a combined mass-spectrum determination.",
      "claimIds": [
        "M-phys-neutrino-mass-mixing-evidence"
      ],
      "contextIds": [
        "kamland2005-oscillation-fit",
        "superk1998-oscillation-fit",
        "sno2002-flavor-fit",
        "opera2015-inference"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutrino-mass-mixing-scope",
      "role": "definition",
      "denotes": "A definition boundary for neutrino mass/mixing structure and its identifiable quantities, not a new mechanism or a universal formation rule.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-mass-mixing-scope"
      ]
    },
    {
      "nodeId": "phys:neutrino-mass-mixing-evidence",
      "role": "scoped-phenomenon",
      "denotes": "A scoped comparison of named flavor and conditional mass-splitting evidence; not a combined likelihood or an independently reproduced experiment.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-neutrino-mass-mixing-evidence"
      ]
    }
  ]
};

/** Preserve neutrino mass, mixing and evidence boundaries. */
export function validateNeutrinoMassScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Neutrino mass scope ${kind} changed ${id}: preserve mass-identifiability and distinct inference boundaries`);
    }
  }
}
