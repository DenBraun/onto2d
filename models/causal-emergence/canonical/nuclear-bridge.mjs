import assert from "node:assert/strict";

export const NUCLEAR_BRIDGE_CHECKS = new Map();
export const NUCLEAR_BRIDGE_ANALYTICAL_SOURCES = new Map();
export const NUCLEAR_BRIDGE_ADMISSION = {
  "definitions": [
    [
      "phys:qcd-nuclear-energy-bridge",
      "D-phys-qcd-nuclear-energy-bridge"
    ]
  ],
  "formalDependencies": [
    [
      "physics:qcd-qcd-nuclear-energy-bridge",
      [
        "phys:qcd",
        "phys:qcd-nuclear-energy-bridge"
      ]
    ],
    [
      "physics:quark-mass-prescription-qcd-nuclear-energy-bridge",
      [
        "phys:quark-mass-prescription",
        "phys:qcd-nuclear-energy-bridge"
      ]
    ],
    [
      "physics:hadron-mass-calibration-qcd-nuclear-energy-bridge",
      [
        "phys:hadron-mass-calibration",
        "phys:qcd-nuclear-energy-bridge"
      ]
    ],
    [
      "physics:nuclear-lattice-energy-shift-qcd-nuclear-energy-bridge",
      [
        "phys:nuclear-lattice-energy-shift",
        "phys:qcd-nuclear-energy-bridge"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "qcd-nuclear-evidence-boundary",
      "C-phys-qcd-nuclear-evidence-boundary",
      [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    ]
  ],
  "dependencies": [
    [
      "qcd-nuclear-energy-bridge-qcd-nuclear-evidence-boundary",
      "qcd-nuclear-energy-bridge",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "durr-hadron-spectrum-qcd-nuclear-evidence-boundary",
      "durr-hadron-spectrum",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "borsanyi-isospin-spectrum-qcd-nuclear-evidence-boundary",
      "borsanyi-isospin-spectrum",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "borsanyi-qcd-qed-components-qcd-nuclear-evidence-boundary",
      "borsanyi-qcd-qed-components",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "rau-joint-adjustment-qcd-nuclear-evidence-boundary",
      "rau-joint-adjustment",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "rau-capture-binding-qcd-nuclear-evidence-boundary",
      "rau-capture-binding",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "deuteron-beta-threshold-qcd-nuclear-evidence-boundary",
      "deuteron-beta-threshold",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "beane2013-two-nucleon-shifts-qcd-nuclear-evidence-boundary",
      "beane2013-two-nucleon-shifts",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "beane2013-two-nucleon-binding-qcd-nuclear-evidence-boundary",
      "beane2013-two-nucleon-binding",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "two-nucleon-state-identification-review-qcd-nuclear-evidence-boundary",
      "two-nucleon-state-identification-review",
      "qcd-nuclear-evidence-boundary",
      "M-phys-qcd-nuclear-evidence-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-qcd-nuclear-evidence-boundary",
      [
        "fink2020",
        "kessler2017",
        "pdg2025-kinematics",
        "codata2018-constants",
        "detmold2026-state-summary"
      ]
    ],
    [
      "M-phys-qcd-nuclear-evidence-boundary",
      [
        "fink2020",
        "kessler2017",
        "pdg2025-kinematics",
        "codata2018-constants",
        "detmold2026-state-summary"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-qcd-nuclear-energy-bridge",
      "kind": "review-finding",
      "statement": "A QCD-to-nuclear-energy calculation declares its color gauge theory, quark-mass parameters, regulator, scale calibration, interpolating operators and energy-extraction procedure. Binding compares a specified nuclear channel with its compatible hadronic threshold, after state and volume inference. A calculation at one input point is a conditional result, not a measured derivative with respect to a renormalized quark mass or a complete prediction for bulk matter.",
      "scope": "Operational scope of the finite nuclear bridge admitted for source card 1.19; levels are display groups.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 1-6: two-plus-one-flavor QCD, three physical inputs, ensembles, extrapolation and spectrum interpretation",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A renormalized quark mass needs a prescription and scale. The new flavor-symmetric calculation specifies one action-dependent bare mass; it does not determine an MSbar mass or its response derivative. Flavor SU(3), with degenerate up, down and strange masses, is distinct from the SU(3) color gauge symmetry of QCD.",
        "Controlled quark-mass sensitivity requires a defined input variation or derivative and a declaration of what is held fixed, including the gauge coupling or QCD scale, cutoff, strange/sea masses and unit calibration. A comparison with physical nuclear data alone is not such a controlled calculation. An input hadron mass used to set the scale cannot simultaneously count as an independent prediction.",
        "Hadron masses, nuclear binding differences, bulk density, compressibility and astrophysical matter are different observables. No reviewed many-body equation of state, composition, thermodynamic state, pressure response or astrophysical inference is supplied here. Direct quark-to-density/compressibility edges and a demonstrated uninterrupted chain to macroscopic materials are excluded, without asserting that the underlying physical influence is zero.",
        "A later material model must declare how it treats electromagnetic, electronic and environmental inputs as well as its nuclear interactions and calibration. Neither a QCD-only two-nucleon spectrum nor a hadron mass table specifies atomic bonding, material phase or mechanical response.",
        "The original 1.1 and 1.11 parents supply field/parameter and nucleon concepts, not experimentally established arising or maintenance interventions. Their equal 0.5 weights, necessary-parent labels, interaction/causal-direction codes and N_min=N_crit=1 are excluded as scientific results. Color, flavor, baryon number and sample count are distinct quantities, not universal carrier minima.",
        "The original SOMA phase 2, effect TypeRole 4 and well-supported label do not establish a universal temporal stage or empirical cross-scale law. Generic nuclear-model, observation and astrophysical evidence placeholders identify no preparation or discriminator and supply no additional evidence. Qualified neighboring cards keep their existing scopes."
      ]
    },
    {
      "id": "C-phys-qcd-nuclear-evidence-boundary",
      "kind": "review-finding",
      "statement": "The calibrated hadron spectra, convention-dependent isospin components, measured-input deuteron energetics and the new nonphysical-mass two-nucleon calculation address different stages of nuclear-energy reasoning. The latter reports finite-volume shifts and a conditional bound-state interpretation at one flavor-symmetric input point. State-identification limitations remain explicit. This finite evidence does not supply a controlled quark-mass sensitivity, ordinary-matter density, compressibility or an astrophysical equation of state.",
      "scope": "Literature synthesis of specified computational results and existing measured-input nuclear energetics; no pooled experiment or new numerical replay.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 11-13 and 21, Figure S4: finite-volume corrections, elastic resonance model and omitted rho/Delta lightest point",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 4 and 9-11, Figures 2-3 and Table 1: total mass splittings, convention-dependent components and experiment-calibrated ratio",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 33-35, Sections 10.1-10.4 and Equations S37-S40: physical inputs, QCD/QED convention and Coleman-Glashow fit",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 32 and 35-37, Sections 9 and 11-12, pages 51-52 and 57, Figures S11-S12 and Table S5: time windows, AIC weighting, bootstrap and analysis variants",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 8, 15, 18-27 and 42-46, Figure 1, Sections 3-5 and Equation S26: finite-volume prescriptions, point-particle controls and composite-particle corrections",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "fink2020",
          "locator": "Accepted manuscript article pages 1-5, Figures 1-2 and Tables I-III: ion preparation, vibrational selection, rotational correction, frequency ratio and derived masses",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "kessler2017",
          "locator": "Pages 7-9 and 22-23, Section 5, Tables 4-5 and 16: two ILL calibration paths, shared standards, sample variability and final adopted spacing",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-summary",
          "locator": "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions",
          "role": "supports",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "D\u00fcrr uses physical hadronic calibration and extrapolation in two-plus-one-flavor QCD. Borsanyi adds QED and convention-dependent isospin components. Their hadron results do not determine a nuclear binding observable, an exhaustive visible-matter mass decomposition or a unique contribution of quark masses.",
        "The newly reviewed nuclear calculation uses three degenerate heavy flavors without QED, one spacing and its own scale and threshold masses. These are different from the physical masses in the Rau adjustment and capture analysis; numerical inputs and uncertainties cannot be transferred between the theories as though they were one ensemble.",
        "Published finite-volume energy shifts and their binding interpretation reuse the same correlators, baryon thresholds and scale. They are not independent evidence. A plateau or a subthreshold finite-volume level is not by itself a proven infinite-volume bound state; the reviewed methodological alternatives keep their stated assumptions.",
        "Rau joint masses and capture binding reuse specified calibration and adjustment inputs. The beta-threshold witness uses those published masses and excludes one declared final state; it does not derive binding from quark masses, measure a nuclear lifetime or independently corroborate the shared binding input.",
        "No complete lattice or experimental replay, renormalized mass scan, physical-light-mass nuclear extrapolation, continuum nuclear calculation or common cross-study covariance is supplied. The comparison is not a pooled significance, an all-channel stability law, a universal formation/maintenance rule or a validated quarks-to-macroscopic-matter chain."
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "M-phys-qcd-nuclear-evidence-boundary",
      "kind": "method",
      "statement": "Compare each result only with its declared theory, mass regime, operators, threshold, calibration and uncertainty. Keep fixed-input spectra separate from controlled sensitivity calculations, measured nuclear masses and later many-body material models. Do not pool shared observations or promote a conditional level assignment to a universal formation, maintenance or bulk-property law.",
      "scope": "Literature synthesis of specified computational results and existing measured-input nuclear energetics; no pooled experiment or new numerical replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 11-13 and 21, Figure S4: finite-volume corrections, elastic resonance model and omitted rho/Delta lightest point",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 4 and 9-11, Figures 2-3 and Table 1: total mass splittings, convention-dependent components and experiment-calibrated ratio",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 33-35, Sections 10.1-10.4 and Equations S37-S40: physical inputs, QCD/QED convention and Coleman-Glashow fit",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 32 and 35-37, Sections 9 and 11-12, pages 51-52 and 57, Figures S11-S12 and Table S5: time windows, AIC weighting, bootstrap and analysis variants",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 8, 15, 18-27 and 42-46, Figure 1, Sections 3-5 and Equation S26: finite-volume prescriptions, point-particle controls and composite-particle corrections",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "fink2020",
          "locator": "Accepted manuscript article pages 1-5, Figures 1-2 and Tables I-III: ion preparation, vibrational selection, rotational correction, frequency ratio and derived masses",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "kessler2017",
          "locator": "Pages 7-9 and 22-23, Section 5, Tables 4-5 and 16: two ILL calibration paths, shared standards, sample variability and final adopted spacing",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        },
        {
          "sourceId": "detmold2026-state-summary",
          "locator": "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions",
          "role": "method",
          "note": "Supports the stated formal scope or source-specific inference; no new simulation, experimental acquisition or cross-scale material prediction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "D\u00fcrr uses physical hadronic calibration and extrapolation in two-plus-one-flavor QCD. Borsanyi adds QED and convention-dependent isospin components. Their hadron results do not determine a nuclear binding observable, an exhaustive visible-matter mass decomposition or a unique contribution of quark masses.",
        "The newly reviewed nuclear calculation uses three degenerate heavy flavors without QED, one spacing and its own scale and threshold masses. These are different from the physical masses in the Rau adjustment and capture analysis; numerical inputs and uncertainties cannot be transferred between the theories as though they were one ensemble.",
        "Published finite-volume energy shifts and their binding interpretation reuse the same correlators, baryon thresholds and scale. They are not independent evidence. A plateau or a subthreshold finite-volume level is not by itself a proven infinite-volume bound state; the reviewed methodological alternatives keep their stated assumptions.",
        "Rau joint masses and capture binding reuse specified calibration and adjustment inputs. The beta-threshold witness uses those published masses and excludes one declared final state; it does not derive binding from quark masses, measure a nuclear lifetime or independently corroborate the shared binding input.",
        "No complete lattice or experimental replay, renormalized mass scan, physical-light-mass nuclear extrapolation, continuum nuclear calculation or common cross-study covariance is supplied. The comparison is not a pooled significance, an all-channel stability law, a universal formation/maintenance rule or a validated quarks-to-macroscopic-matter chain."
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:qcd-nuclear-energy-bridge",
      "name": "Specified QCD-to-nuclear-energy map",
      "kind": "definition",
      "description": "A QCD-to-nuclear-energy calculation declares its color gauge theory, quark-mass parameters, regulator, scale calibration, interpolating operators and energy-extraction procedure. Binding compares a specified nuclear channel with its compatible hadronic threshold, after state and volume inference. A calculation at one input point is a conditional result, not a measured derivative with respect to a renormalized quark mass or a complete prediction for bulk matter.",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 1-6: two-plus-one-flavor QCD, three physical inputs, ensembles, extrapolation and spectrum interpretation"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        }
      ],
      "openObligations": [
        "A renormalized quark mass needs a prescription and scale. The new flavor-symmetric calculation specifies one action-dependent bare mass; it does not determine an MSbar mass or its response derivative. Flavor SU(3), with degenerate up, down and strange masses, is distinct from the SU(3) color gauge symmetry of QCD.",
        "Controlled quark-mass sensitivity requires a defined input variation or derivative and a declaration of what is held fixed, including the gauge coupling or QCD scale, cutoff, strange/sea masses and unit calibration. A comparison with physical nuclear data alone is not such a controlled calculation. An input hadron mass used to set the scale cannot simultaneously count as an independent prediction.",
        "Hadron masses, nuclear binding differences, bulk density, compressibility and astrophysical matter are different observables. No reviewed many-body equation of state, composition, thermodynamic state, pressure response or astrophysical inference is supplied here. Direct quark-to-density/compressibility edges and a demonstrated uninterrupted chain to macroscopic materials are excluded, without asserting that the underlying physical influence is zero.",
        "A later material model must declare how it treats electromagnetic, electronic and environmental inputs as well as its nuclear interactions and calibration. Neither a QCD-only two-nucleon spectrum nor a hadron mass table specifies atomic bonding, material phase or mechanical response.",
        "The original 1.1 and 1.11 parents supply field/parameter and nucleon concepts, not experimentally established arising or maintenance interventions. Their equal 0.5 weights, necessary-parent labels, interaction/causal-direction codes and N_min=N_crit=1 are excluded as scientific results. Color, flavor, baryon number and sample count are distinct quantities, not universal carrier minima.",
        "The original SOMA phase 2, effect TypeRole 4 and well-supported label do not establish a universal temporal stage or empirical cross-scale law. Generic nuclear-model, observation and astrophysical evidence placeholders identify no preparation or discriminator and supply no additional evidence. Qualified neighboring cards keep their existing scopes."
      ]
    },
    {
      "id": "phys:qcd-nuclear-evidence-boundary",
      "name": "Conditional QCD and nuclear-energy evidence",
      "kind": "scoped-process",
      "description": "The calibrated hadron spectra, convention-dependent isospin components, measured-input deuteron energetics and the new nonphysical-mass two-nucleon calculation address different stages of nuclear-energy reasoning. The latter reports finite-volume shifts and a conditional bound-state interpretation at one flavor-symmetric input point. State-identification limitations remain explicit. This finite evidence does not supply a controlled quark-mass sensitivity, ordinary-matter density, compressibility or an astrophysical equation of state.",
      "claimIds": [
        "C-phys-qcd-nuclear-evidence-boundary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 11-13 and 21, Figure S4: finite-volume corrections, elastic resonance model and omitted rho/Delta lightest point"
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 4 and 9-11, Figures 2-3 and Table 1: total mass splittings, convention-dependent components and experiment-calibrated ratio"
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 33-35, Sections 10.1-10.4 and Equations S37-S40: physical inputs, QCD/QED convention and Coleman-Glashow fit"
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 32 and 35-37, Sections 9 and 11-12, pages 51-52 and 57, Figures S11-S12 and Table S5: time windows, AIC weighting, bootstrap and analysis variants"
        },
        {
          "sourceId": "borsanyi2015",
          "locator": "Author report 1406.4088v2, pages 8, 15, 18-27 and 42-46, Figure 1, Sections 3-5 and Equation S26: finite-volume prescriptions, point-particle controls and composite-particle corrections"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension"
        },
        {
          "sourceId": "fink2020",
          "locator": "Accepted manuscript article pages 1-5, Figures 1-2 and Tables I-III: ion preparation, vibrational selection, rotational correction, frequency ratio and derived masses"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion"
        },
        {
          "sourceId": "kessler2017",
          "locator": "Pages 7-9 and 22-23, Section 5, Tables 4-5 and 16: two ILL calibration paths, shared standards, sample variability and final adopted spacing"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention"
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation"
        },
        {
          "sourceId": "detmold2026-state-summary",
          "locator": "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions"
        }
      ],
      "openObligations": [
        "D\u00fcrr uses physical hadronic calibration and extrapolation in two-plus-one-flavor QCD. Borsanyi adds QED and convention-dependent isospin components. Their hadron results do not determine a nuclear binding observable, an exhaustive visible-matter mass decomposition or a unique contribution of quark masses.",
        "The newly reviewed nuclear calculation uses three degenerate heavy flavors without QED, one spacing and its own scale and threshold masses. These are different from the physical masses in the Rau adjustment and capture analysis; numerical inputs and uncertainties cannot be transferred between the theories as though they were one ensemble.",
        "Published finite-volume energy shifts and their binding interpretation reuse the same correlators, baryon thresholds and scale. They are not independent evidence. A plateau or a subthreshold finite-volume level is not by itself a proven infinite-volume bound state; the reviewed methodological alternatives keep their stated assumptions.",
        "Rau joint masses and capture binding reuse specified calibration and adjustment inputs. The beta-threshold witness uses those published masses and excludes one declared final state; it does not derive binding from quark masses, measure a nuclear lifetime or independently corroborate the shared binding input.",
        "No complete lattice or experimental replay, renormalized mass scan, physical-light-mass nuclear extrapolation, continuum nuclear calculation or common cross-study covariance is supplied. The comparison is not a pooled significance, an all-channel stability law, a universal formation/maintenance rule or a validated quarks-to-macroscopic-matter chain."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:qcd-qcd-nuclear-energy-bridge",
      "source": "phys:qcd",
      "target": "phys:qcd-nuclear-energy-bridge",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The color gauge theory and declared parameter convention define a calculation, not a measured upward causal intervention.",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ]
    },
    {
      "id": "physics:quark-mass-prescription-qcd-nuclear-energy-bridge",
      "source": "phys:quark-mass-prescription",
      "target": "phys:qcd-nuclear-energy-bridge",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A renormalized mass, an action-dependent bare parameter and a constituent mass are distinct inputs; a fixed-point spectrum does not provide their derivative.",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ]
    },
    {
      "id": "physics:hadron-mass-calibration-qcd-nuclear-energy-bridge",
      "source": "phys:hadron-mass-calibration",
      "target": "phys:qcd-nuclear-energy-bridge",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing calibration definition illustrates the distinction between inputs and predictions; its numerical D\u00fcrr inputs are not imported into the separate nuclear ensembles.",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ]
    },
    {
      "id": "physics:nuclear-lattice-energy-shift-qcd-nuclear-energy-bridge",
      "source": "phys:nuclear-lattice-energy-shift",
      "target": "phys:qcd-nuclear-energy-bridge",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The compatible threshold and state/volume limits specify the nuclear observable; finite negative energy alone does not establish an infinite-volume bound state.",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ]
    },
    {
      "id": "physics:qcd-nuclear-energy-bridge-qcd-nuclear-evidence-boundary",
      "source": "phys:qcd-nuclear-energy-bridge",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:durr-hadron-spectrum-qcd-nuclear-evidence-boundary",
      "source": "phys:durr-hadron-spectrum",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:borsanyi-isospin-spectrum-qcd-nuclear-evidence-boundary",
      "source": "phys:borsanyi-isospin-spectrum",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:borsanyi-qcd-qed-components-qcd-nuclear-evidence-boundary",
      "source": "phys:borsanyi-qcd-qed-components",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:rau-joint-adjustment-qcd-nuclear-evidence-boundary",
      "source": "phys:rau-joint-adjustment",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:rau-capture-binding-qcd-nuclear-evidence-boundary",
      "source": "phys:rau-capture-binding",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:deuteron-beta-threshold-qcd-nuclear-evidence-boundary",
      "source": "phys:deuteron-beta-threshold",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:beane2013-two-nucleon-shifts-qcd-nuclear-evidence-boundary",
      "source": "phys:beane2013-two-nucleon-shifts",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:beane2013-two-nucleon-binding-qcd-nuclear-evidence-boundary",
      "source": "phys:beane2013-two-nucleon-binding",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:two-nucleon-state-identification-review-qcd-nuclear-evidence-boundary",
      "source": "phys:two-nucleon-state-identification-review",
      "target": "phys:qcd-nuclear-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This is an interpretation input with its own scope, calibration and uncertainty; it is not a numerical transfer between theories or an empirical maintenance arrow.",
      "claimIds": [
        "M-phys-qcd-nuclear-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "borsanyi2015",
        "rau2020-joint-fit",
        "rau2020-capture-recalibration",
        "deuteron-beta-energetics",
        "beane2013-nuclear-extraction",
        "beane2013-nuclear-binding",
        "detmold2026-state-identification"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:qcd-nuclear-energy-bridge",
      "role": "definition",
      "denotes": "A declared conditional map from specified QCD inputs to a nuclear energy observable; no universal bulk-property effect.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-qcd-nuclear-energy-bridge"
      ]
    },
    {
      "nodeId": "phys:qcd-nuclear-evidence-boundary",
      "role": "scoped-phenomenon",
      "denotes": "A bounded comparison preserving distinct theories, inputs and state-identification limits; no bulk-material prediction.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-qcd-nuclear-evidence-boundary"
      ]
    }
  ]
};

/** Preserve the finite nuclear bridge and the exclusion of unmodeled bulk claims. */
export function validateNuclearBridgeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Nuclear bridge ${kind} changed ${id}: preserve theory, input and cross-scale boundaries`);
    }
  }
}
