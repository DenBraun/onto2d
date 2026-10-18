import assert from "node:assert/strict";

export const GLUON_STRUCTURE_CHECKS = new Map();
export const GLUON_STRUCTURE_ANALYTICAL_SOURCES = new Map();
export const GLUON_STRUCTURE_ADMISSION = {
  "definitions": [
    [
      "phys:source-conditioned-field-structure",
      "D-phys-source-conditioned-field-structure"
    ]
  ],
  "formalDependencies": [
    [
      "physics:gluon-self-coupling-source-conditioned-field-structure",
      [
        "phys:gluon-self-coupling",
        "phys:source-conditioned-field-structure"
      ]
    ],
    [
      "physics:lattice-gauge-formulation-source-conditioned-field-structure",
      [
        "phys:lattice-gauge-formulation",
        "phys:source-conditioned-field-structure"
      ]
    ],
    [
      "physics:static-source-plaquette-density-source-conditioned-field-structure",
      [
        "phys:static-source-plaquette-density",
        "phys:source-conditioned-field-structure"
      ]
    ],
    [
      "physics:transverse-flux-width-source-conditioned-field-structure",
      [
        "phys:transverse-flux-width",
        "phys:source-conditioned-field-structure"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "gauge-field-structure-evidence",
      "C-phys-gauge-field-structure-evidence",
      [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "source-conditioned-field-structure-gauge-field-structure-evidence",
      "source-conditioned-field-structure",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ],
    [
      "creutz-wilson-loops-gauge-field-structure-evidence",
      "creutz-wilson-loops",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ],
    [
      "bali-avoided-crossing-gauge-field-structure-evidence",
      "bali-avoided-crossing",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ],
    [
      "bulava2019-relative-spectrum-gauge-field-structure-evidence",
      "bulava2019-relative-spectrum",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ],
    [
      "bali1995-field-profiles-gauge-field-structure-evidence",
      "bali1995-field-profiles",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ],
    [
      "bali1995-profile-widths-gauge-field-structure-evidence",
      "bali1995-profile-widths",
      "gauge-field-structure-evidence",
      "M-phys-gauge-field-structure-evidence",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-source-conditioned-field-structure",
      "kind": "review-finding",
      "statement": "Gauge-field structure here means spatial dependence of a specified gauge-invariant observable in a declared source-conditioned state or ensemble. Non-Abelian self-coupling specifies interaction terms; a Euclidean lattice formulation specifies an action, gauge group, regulator and sampling measure. The reviewed spatial profiles are vacuum-subtracted expectations of squared-field/action probes conditioned on external static sources, not a directly imaged gluon population or a measured autonomous self-organization process.",
      "scope": "Scoped interpretation of the QCD interaction convention and specified lattice field observables; levels are display groups.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "wilson1974",
          "locator": "Sections I-III, pages 2445-2453: Euclidean cutoff, compact link variables, gauge invariance and fermion-loop assumptions",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The QCD gluon self-coupling definition uses SU(3). The new profile calculation uses pure SU(2), fundamental static sources and no dynamical sea quarks. A formal relation between these gauge-theory concepts does not substitute SU(3) color factors, quark content or numerical predictions into SU(2). Each calculation keeps its actual theory and ensemble.",
        "Closed gauge-index contractions, perturbative diagram loops and Wilson contours do not establish closed feedback through physical time. Monte Carlo updates and source-operator smearing are computational operations; Euclidean time extent controls state projection. None supplies a measured formation trajectory, dissipative attractor or causal maintenance mechanism.",
        "The phrase gluon condensate-like organization is excluded from active scientific claims in this admission. No named renormalized condensate operator, scale/subtraction prescription or reviewed condensate extraction is supplied. The vacuum-subtracted field profile conditions on external sources and does not determine an absolute vacuum condensate or its dynamical origin.",
        "Source card 1.31 contributes the selected nonperturbative formulation and its model choices; source card 1.3 contributes the declared non-Abelian interaction content. The original weights 0.6/0.4, necessary arising/maintenance parents, causal-direction/interaction codes and N_min=N_crit=1 are excluded as physical results. Color components, external-source number and sampled configurations are distinct quantities, not universal carrier minima.",
        "Level 1 organizes presentation. The original SOMA phase 1, pattern TypeRole 2 and established label do not establish a universal temporal stage, unique object/process classification or independent empirical validation. Any broader self-organization mechanism requires operational variables, dynamics and discriminating evidence beyond these records.",
        "Static-source field profiles, finite Wilson-loop fits, screened energy levels and hadron masses retain distinct definitions. They do not establish universal confinement, every hadron lifetime, all-channel nuclear/atomic stability or a derivation of binding from a single gluonic organization rule."
      ]
    },
    {
      "id": "C-phys-gauge-field-structure-evidence",
      "kind": "review-finding",
      "statement": "The reviewed pure-SU(2) Wilson-loop and local field-profile calculations and the two-flavor and two-plus-one-flavor SU(3) static-energy calculations support different, source-conditioned gauge-field observables. The local profile adds spatial information that a potential fit alone does not determine; dynamical-quark screening concerns different theories and channels. Their bounded comparison supplies neither a single universal self-organizing mechanism nor a real-time formation or matter-stability law.",
      "scope": "Literature synthesis of existing finite lattice results and the newly reviewed pure-SU(2) profile study; no new simulation or empirical acquisition.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "supports",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthesis of already admitted computational results. Gauge groups, sea content, lattice actions, scales, operators and statistical samples remain separate. Different observables from one study reuse its configurations; the records are not independent experiments, a combined significance or a common physical ensemble.",
        "Creutz reports finite pure-SU(2) square-loop expectations and restricted area/scaling fits. These do not resolve the spatial field distribution, prove an asymptotic continuum area law or select a unique microscopic confinement mechanism. The new profile result retains its own local probe, source normalization, vacuum subtraction and finite-cutoff controls.",
        "The Bali-Schilling-Schlichter profile and width inferences share a pure-SU(2) ensemble preparation. Width depends on the profile definition, sampled transverse range and assumed tails. Its static spatial structure is not a directly followed formation event, a measured gluon condensate or a radius applying to physical SU(3) QCD.",
        "The Bali 2005 two-flavor SU(3) result uses one spacing and sea quarks near the strange mass; its minimum-gap interpretation and mixing-basis conflicts remain attached to that record. The Bulava 2019 two-plus-one-flavor spectrum uses one nonphysical-mass N200 ensemble. Its relative levels and later model-dependent diagonal crossings are not the same estimator as the Bali gap, a new source of profile data or evidence for universal sea-mass dependence.",
        "A flux profile in the reviewed pure-gauge calculation and a screened dynamical-quark ground state are different observables in different theories. None of these finite results proves continuum physical-mass confinement, real-time hadronization, stable nuclear/atomic matter, or a universal downward-causation constraint. The qualified confinement and nonperturbative-framework scopes retain their existing boundaries.",
        "No additional meaning is assigned to the original evidence placeholders, SOMA phase/type, weighted necessary parents or unit carrier thresholds. Unavailable configurations, correlators, covariance and complete analysis pipelines remain source-specific limits; no local numerical replay or new experimental certification is claimed."
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "M-phys-gauge-field-structure-evidence",
      "kind": "method",
      "statement": "Compare the finite Wilson-loop, local-profile and screened-spectrum statements only with their existing computational contexts. Preserve theory, source, operator, scale, uncertainty and shared-data boundaries. Do not pool numerical outputs, infer a universal feedback/stability law, or use a spectral fit as a direct local field measurement.",
      "scope": "Literature synthesis of existing finite lattice results and the newly reviewed pure-SU(2) profile study; no new simulation or empirical acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "method",
          "note": "Supports only the stated formal convention or source-specific computational interpretation; no independent lattice or real-time replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthesis of already admitted computational results. Gauge groups, sea content, lattice actions, scales, operators and statistical samples remain separate. Different observables from one study reuse its configurations; the records are not independent experiments, a combined significance or a common physical ensemble.",
        "Creutz reports finite pure-SU(2) square-loop expectations and restricted area/scaling fits. These do not resolve the spatial field distribution, prove an asymptotic continuum area law or select a unique microscopic confinement mechanism. The new profile result retains its own local probe, source normalization, vacuum subtraction and finite-cutoff controls.",
        "The Bali-Schilling-Schlichter profile and width inferences share a pure-SU(2) ensemble preparation. Width depends on the profile definition, sampled transverse range and assumed tails. Its static spatial structure is not a directly followed formation event, a measured gluon condensate or a radius applying to physical SU(3) QCD.",
        "The Bali 2005 two-flavor SU(3) result uses one spacing and sea quarks near the strange mass; its minimum-gap interpretation and mixing-basis conflicts remain attached to that record. The Bulava 2019 two-plus-one-flavor spectrum uses one nonphysical-mass N200 ensemble. Its relative levels and later model-dependent diagonal crossings are not the same estimator as the Bali gap, a new source of profile data or evidence for universal sea-mass dependence.",
        "A flux profile in the reviewed pure-gauge calculation and a screened dynamical-quark ground state are different observables in different theories. None of these finite results proves continuum physical-mass confinement, real-time hadronization, stable nuclear/atomic matter, or a universal downward-causation constraint. The qualified confinement and nonperturbative-framework scopes retain their existing boundaries.",
        "No additional meaning is assigned to the original evidence placeholders, SOMA phase/type, weighted necessary parents or unit carrier thresholds. Unavailable configurations, correlators, covariance and complete analysis pipelines remain source-specific limits; no local numerical replay or new experimental certification is claimed."
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:source-conditioned-field-structure",
      "name": "Source-conditioned gauge-field structure",
      "kind": "definition",
      "description": "Gauge-field structure here means spatial dependence of a specified gauge-invariant observable in a declared source-conditioned state or ensemble. Non-Abelian self-coupling specifies interaction terms; a Euclidean lattice formulation specifies an action, gauge group, regulator and sampling measure. The reviewed spatial profiles are vacuum-subtracted expectations of squared-field/action probes conditioned on external static sources, not a directly imaged gluon population or a measured autonomous self-organization process.",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "wilson1974",
          "locator": "Sections I-III, pages 2445-2453: Euclidean cutoff, compact link variables, gauge invariance and fermion-loop assumptions"
        },
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "The QCD gluon self-coupling definition uses SU(3). The new profile calculation uses pure SU(2), fundamental static sources and no dynamical sea quarks. A formal relation between these gauge-theory concepts does not substitute SU(3) color factors, quark content or numerical predictions into SU(2). Each calculation keeps its actual theory and ensemble.",
        "Closed gauge-index contractions, perturbative diagram loops and Wilson contours do not establish closed feedback through physical time. Monte Carlo updates and source-operator smearing are computational operations; Euclidean time extent controls state projection. None supplies a measured formation trajectory, dissipative attractor or causal maintenance mechanism.",
        "The phrase gluon condensate-like organization is excluded from active scientific claims in this admission. No named renormalized condensate operator, scale/subtraction prescription or reviewed condensate extraction is supplied. The vacuum-subtracted field profile conditions on external sources and does not determine an absolute vacuum condensate or its dynamical origin.",
        "Source card 1.31 contributes the selected nonperturbative formulation and its model choices; source card 1.3 contributes the declared non-Abelian interaction content. The original weights 0.6/0.4, necessary arising/maintenance parents, causal-direction/interaction codes and N_min=N_crit=1 are excluded as physical results. Color components, external-source number and sampled configurations are distinct quantities, not universal carrier minima.",
        "Level 1 organizes presentation. The original SOMA phase 1, pattern TypeRole 2 and established label do not establish a universal temporal stage, unique object/process classification or independent empirical validation. Any broader self-organization mechanism requires operational variables, dynamics and discriminating evidence beyond these records.",
        "Static-source field profiles, finite Wilson-loop fits, screened energy levels and hadron masses retain distinct definitions. They do not establish universal confinement, every hadron lifetime, all-channel nuclear/atomic stability or a derivation of binding from a single gluonic organization rule."
      ]
    },
    {
      "id": "phys:gauge-field-structure-evidence",
      "name": "Gauge-field structure and static-source evidence",
      "kind": "scoped-process",
      "description": "The reviewed pure-SU(2) Wilson-loop and local field-profile calculations and the two-flavor and two-plus-one-flavor SU(3) static-energy calculations support different, source-conditioned gauge-field observables. The local profile adds spatial information that a potential fit alone does not determine; dynamical-quark screening concerns different theories and channels. Their bounded comparison supplies neither a single universal self-organizing mechanism nor a real-time formation or matter-stability law.",
      "claimIds": [
        "C-phys-gauge-field-structure-evidence"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "This is a synthesis of already admitted computational results. Gauge groups, sea content, lattice actions, scales, operators and statistical samples remain separate. Different observables from one study reuse its configurations; the records are not independent experiments, a combined significance or a common physical ensemble.",
        "Creutz reports finite pure-SU(2) square-loop expectations and restricted area/scaling fits. These do not resolve the spatial field distribution, prove an asymptotic continuum area law or select a unique microscopic confinement mechanism. The new profile result retains its own local probe, source normalization, vacuum subtraction and finite-cutoff controls.",
        "The Bali-Schilling-Schlichter profile and width inferences share a pure-SU(2) ensemble preparation. Width depends on the profile definition, sampled transverse range and assumed tails. Its static spatial structure is not a directly followed formation event, a measured gluon condensate or a radius applying to physical SU(3) QCD.",
        "The Bali 2005 two-flavor SU(3) result uses one spacing and sea quarks near the strange mass; its minimum-gap interpretation and mixing-basis conflicts remain attached to that record. The Bulava 2019 two-plus-one-flavor spectrum uses one nonphysical-mass N200 ensemble. Its relative levels and later model-dependent diagonal crossings are not the same estimator as the Bali gap, a new source of profile data or evidence for universal sea-mass dependence.",
        "A flux profile in the reviewed pure-gauge calculation and a screened dynamical-quark ground state are different observables in different theories. None of these finite results proves continuum physical-mass confinement, real-time hadronization, stable nuclear/atomic matter, or a universal downward-causation constraint. The qualified confinement and nonperturbative-framework scopes retain their existing boundaries.",
        "No additional meaning is assigned to the original evidence placeholders, SOMA phase/type, weighted necessary parents or unit carrier thresholds. Unavailable configurations, correlators, covariance and complete analysis pipelines remain source-specific limits; no local numerical replay or new experimental certification is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:gluon-self-coupling-source-conditioned-field-structure",
      "source": "phys:gluon-self-coupling",
      "target": "phys:source-conditioned-field-structure",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The QCD non-Abelian interaction terms provide a formal comparison point; they are not numerical SU(2) input or a measured temporal maintenance cause.",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ]
    },
    {
      "id": "physics:lattice-gauge-formulation-source-conditioned-field-structure",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:source-conditioned-field-structure",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A declared Euclidean model and source-conditioned observable give the operational scope; sampling order is not real-time formation.",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ]
    },
    {
      "id": "physics:static-source-plaquette-density-source-conditioned-field-structure",
      "source": "phys:static-source-plaquette-density",
      "target": "phys:source-conditioned-field-structure",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The explicit local-probe and vacuum-subtraction convention bounds what the spatial field structure denotes.",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ]
    },
    {
      "id": "physics:transverse-flux-width-source-conditioned-field-structure",
      "source": "phys:transverse-flux-width",
      "target": "phys:source-conditioned-field-structure",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared transverse-width functional and tail/fit conventions bound the geometric interpretation; width is not a universal physical radius.",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ]
    },
    {
      "id": "physics:source-conditioned-field-structure-gauge-field-structure-evidence",
      "source": "phys:source-conditioned-field-structure",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared operational scope bounds the synthesis without introducing a physical formation or maintenance arrow.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:creutz-wilson-loops-gauge-field-structure-evidence",
      "source": "phys:creutz-wilson-loops",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational result contributes only its own observable, theory and uncertainty boundaries; it does not determine the other ensembles or a universal mechanism.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali-avoided-crossing-gauge-field-structure-evidence",
      "source": "phys:bali-avoided-crossing",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational result contributes only its own observable, theory and uncertainty boundaries; it does not determine the other ensembles or a universal mechanism.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bulava2019-relative-spectrum-gauge-field-structure-evidence",
      "source": "phys:bulava2019-relative-spectrum",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational result contributes only its own observable, theory and uncertainty boundaries; it does not determine the other ensembles or a universal mechanism.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali1995-field-profiles-gauge-field-structure-evidence",
      "source": "phys:bali1995-field-profiles",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational result contributes only its own observable, theory and uncertainty boundaries; it does not determine the other ensembles or a universal mechanism.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali1995-profile-widths-gauge-field-structure-evidence",
      "source": "phys:bali1995-profile-widths",
      "target": "phys:gauge-field-structure-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational result contributes only its own observable, theory and uncertainty boundaries; it does not determine the other ensembles or a universal mechanism.",
      "claimIds": [
        "M-phys-gauge-field-structure-evidence"
      ],
      "contextIds": [
        "creutz1980",
        "bali2005",
        "bulava2019-spectrum",
        "bali1995-field-extraction",
        "bali1995-profile-inference"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:source-conditioned-field-structure",
      "role": "definition",
      "denotes": "An observable-dependent gauge-field scope; no autonomous formation or maintenance stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-source-conditioned-field-structure"
      ]
    },
    {
      "nodeId": "phys:gauge-field-structure-evidence",
      "role": "scoped-phenomenon",
      "denotes": "A bounded comparison of distinct lattice observables and theories; no pooled experiment or universal confinement/stability result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-gauge-field-structure-evidence"
      ]
    }
  ]
};

/** Preserve the operational meaning and theory boundaries of gauge-field structure. */
export function validateGluonStructureContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Gauge-field structure ${kind} changed ${id}: preserve observable and theory boundaries`);
    }
  }
}
