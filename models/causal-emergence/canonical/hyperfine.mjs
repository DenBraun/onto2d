import assert from "node:assert/strict";

export const HYPERFINE_CHECKS = new Map();
export const HYPERFINE_ANALYTICAL_SOURCES = new Map();
export const HYPERFINE_STUDY_TYPES = new Map([["rahaman2024-cs-hyperfine", "primary-experiment"], ["marion2003-rb-cs-fountains", "primary-experiment"]]);
export const HYPERFINE_ADMISSION = {
  "definitions": [
    [
      "phys:hyperfine-state-parameters",
      "D-phys-hyperfine-state-parameters"
    ],
    [
      "phys:hyperfine-clock-definition",
      "D-phys-hyperfine-clock-definition"
    ]
  ],
  "formalDependencies": [
    [
      "physics:hyperfine-state-parameters-hyperfine-clock-definition",
      [
        "phys:hyperfine-state-parameters",
        "phys:hyperfine-clock-definition"
      ]
    ]
  ],
  "contexts": [
    [
      "rahaman2024-cs-hyperfine-context",
      "M-phys-rahaman2024-cs-hyperfine-context",
      [
        "rahaman2024-cs-hyperfine"
      ]
    ],
    [
      "marion2003-rb-cs-context",
      "M-phys-marion2003-rb-cs-context",
      [
        "marion2003-rb-cs-fountains"
      ]
    ]
  ],
  "observations": [
    [
      "cs133-hyperfine-intervals",
      "C-phys-cs133-hyperfine-intervals",
      [
        "rahaman2024-cs-hyperfine"
      ]
    ],
    [
      "cs133-hyperfine-couplings",
      "C-phys-cs133-hyperfine-couplings",
      [
        "rahaman2024-cs-hyperfine"
      ]
    ],
    [
      "rb87-hyperfine-clock-frequency",
      "C-phys-rb87-hyperfine-clock-frequency",
      [
        "marion2003-rb-cs-fountains"
      ]
    ],
    [
      "hyperfine-source-scope",
      "C-phys-hyperfine-source-scope",
      [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    ]
  ],
  "dependencies": [
    [
      "rahaman2024-cs-hyperfine-context-cs133-hyperfine-intervals",
      "rahaman2024-cs-hyperfine-context",
      "cs133-hyperfine-intervals",
      "M-phys-cs133-hyperfine-intervals",
      "measurement-context"
    ],
    [
      "rahaman2024-cs-hyperfine-context-cs133-hyperfine-couplings",
      "rahaman2024-cs-hyperfine-context",
      "cs133-hyperfine-couplings",
      "M-phys-cs133-hyperfine-couplings",
      "measurement-context"
    ],
    [
      "marion2003-rb-cs-context-rb87-hyperfine-clock-frequency",
      "marion2003-rb-cs-context",
      "rb87-hyperfine-clock-frequency",
      "M-phys-rb87-hyperfine-clock-frequency",
      "measurement-context"
    ],
    [
      "hyperfine-state-parameters-cs133-hyperfine-intervals",
      "hyperfine-state-parameters",
      "cs133-hyperfine-intervals",
      "M-phys-cs133-hyperfine-intervals",
      "interpretation-dependency"
    ],
    [
      "hyperfine-state-parameters-cs133-hyperfine-couplings",
      "hyperfine-state-parameters",
      "cs133-hyperfine-couplings",
      "M-phys-cs133-hyperfine-couplings",
      "interpretation-dependency"
    ],
    [
      "hyperfine-clock-definition-rb87-hyperfine-clock-frequency",
      "hyperfine-clock-definition",
      "rb87-hyperfine-clock-frequency",
      "M-phys-rb87-hyperfine-clock-frequency",
      "interpretation-dependency"
    ],
    [
      "cs133-hyperfine-intervals-cs133-hyperfine-couplings",
      "cs133-hyperfine-intervals",
      "cs133-hyperfine-couplings",
      "M-phys-cs133-hyperfine-couplings",
      "interpretation-dependency"
    ],
    [
      "hyperfine-state-parameters-hyperfine-source-scope",
      "hyperfine-state-parameters",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "hyperfine-clock-definition-hyperfine-source-scope",
      "hyperfine-clock-definition",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "rahaman2024-cs-hyperfine-context-hyperfine-source-scope",
      "rahaman2024-cs-hyperfine-context",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "cs133-hyperfine-intervals-hyperfine-source-scope",
      "cs133-hyperfine-intervals",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "cs133-hyperfine-couplings-hyperfine-source-scope",
      "cs133-hyperfine-couplings",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "marion2003-rb-cs-context-hyperfine-source-scope",
      "marion2003-rb-cs-context",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ],
    [
      "rb87-hyperfine-clock-frequency-hyperfine-source-scope",
      "rb87-hyperfine-clock-frequency",
      "hyperfine-source-scope",
      "M-phys-hyperfine-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "rahaman2024-cs-hyperfine",
    "marion2003-rb-cs-fountains"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-rahaman2024-cs-hyperfine-context",
      [
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "M-phys-cs133-hyperfine-intervals",
      [
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "C-phys-cs133-hyperfine-intervals",
      [
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "M-phys-cs133-hyperfine-couplings",
      [
        "rahaman2022-cs-hyperfine",
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "C-phys-cs133-hyperfine-couplings",
      [
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "M-phys-marion2003-rb-cs-context",
      [
        "marion2003-rb-cs-fountains"
      ]
    ],
    [
      "M-phys-rb87-hyperfine-clock-frequency",
      [
        "bipm2026-si-hyperfine-second",
        "marion2003-rb-cs-fountains"
      ]
    ],
    [
      "C-phys-rb87-hyperfine-clock-frequency",
      [
        "marion2003-rb-cs-fountains"
      ]
    ],
    [
      "M-phys-hyperfine-source-scope",
      [
        "bipm2026-si-hyperfine-second",
        "herd2021-hyperfine-formalism",
        "marion2003-rb-cs-fountains",
        "rahaman2022-cs-hyperfine",
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ],
    [
      "C-phys-hyperfine-source-scope",
      [
        "bipm2026-si-hyperfine-second",
        "herd2021-hyperfine-formalism",
        "marion2003-rb-cs-fountains",
        "rahaman2022-cs-hyperfine",
        "rahaman2024-cs-hyperfine",
        "rahaman2024-hyperfine-erratum"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-hyperfine-state-parameters",
      "kind": "review-finding",
      "statement": "For a declared isotope and electronic state, let I be nuclear spin, J total electronic angular momentum and F the coupled total angular momentum. Define K=F(F+1)-I(I+1)-J(J+1). With A expressed in frequency units, the first-order magnetic-dipole contribution relative to the state centroid is E_F/h=A*K/2; allowed higher-rank terms have separate state-specific constants, including the electric-quadrupole B term. In the selected Cs1337d2D3/2 assignment, J=3/2 and F=2,3,4,5 correspond to supplied I=7/2. The first-order electric-quadrupole term is absent within a J=1/2 electronic level; the Cs ground-state clock is not evidence that every hyperfine transition has a nonzero quadrupole contribution.",
      "scope": "Selected first-order angular-momentum/frequency convention, not an all-atoms precision Hamiltonian.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "herd2021-hyperfine-formalism",
          "locator": "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured A,B and optional C coupling constants combine nuclear multipoles with state-dependent electronic matrix elements and higher-order corrections. They are not direct independent measurements of bare nuclear magnetic dipole, electric quadrupole or magnetic octupole moments.",
        "E_F/h is a frequency, with interval DeltaE/h in Hz or MHz, not angular frequency in rad/s. If A is instead quoted as an energy, the h conversion must be changed consistently; no extra2*pi or equality of A with each measured interval is admitted.",
        "A first-order parametrization is an approximation within the declared state and field regime. Nuclear spin and state assignments are supplied labels, not newly measured nuclear-spin values; external-field shifts and higher-order level mixing remain separate.",
        "The multipole and angular-momentum conditions do not require every isotope/state to exhibit the same terms or any universal nonzero splitting. Nuclear-moment coupling is distinct from electronic fine structure, the Lamb shift and general radiative/QED corrections.",
        "Neither a free-proton/neutron moment nor the leading static-nucleus Z=1 binding model supplies the composite Cs133 nuclear moments, many-electron wavefunction or a quantitative prediction of these constants."
      ]
    },
    {
      "id": "D-phys-hyperfine-clock-definition",
      "kind": "review-finding",
      "statement": "The SI second fixes the unperturbed Cs133 electronic-ground-state hyperfine transition frequency Delta_nu_Cs to exactly9,192,631,770 Hz, where Hz=s^-1. The selected standard transition connects ground2S1/2 F=4,mF=0 and F=3,mF=0. The definition refers to an isolated atom unperturbed by external fields, including ambient blackbody radiation. This exact assigned number is a normative unit definition; a finite apparatus realizes that reference through measurements, systematic corrections and nonzero uncertainty.",
      "scope": "Current official SI definition, distinct from historical experimental clock realization.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "An exact defining number is not an experimental result with zero error, a measured natural frequency independent of the unit definition, proof of perfect clock accuracy or an additional primary experiment.",
        "The Cs ground-state microwave reference is different from the excited7d3/2 optical-fluorescence interval experiment. Neither the original Cs optical paper nor its2024 correction demonstrates an operating7D optical frequency standard.",
        "The2002 Rb frequency is a historical measured frequency relative to Cs realizations; it is neither an exact defining constant nor automatically recalibrated to a new uncertainty by citing the2026 brochure. The source1999 conventional Rb reference is also distinct.",
        "Selecting mF=0 suppresses leading linear Zeeman response; finite magnetic, blackbody, collision, cavity and relativistic corrections still require the actual realization protocol. No universal clock-accuracy or stability figure is assigned."
      ]
    },
    {
      "id": "M-phys-rahaman2024-cs-hyperfine-context",
      "kind": "method",
      "statement": "Prepare Cs133 vapor-cell Doppler-free two-photon excitation from6s1/2 F=3 or F=4 to7d2D3/2 Fprime=2,3,4,5 with a counterpropagating narrow-linewidth cw laser near767.8 nm. Scan the source AOM2 radio-frequency coordinate in a cat-eye double-pass geometry and record672.5 nm spontaneous fluorescence through a10 nm bandpass centered near670 nm. Stabilize the laser using a separate Cs-cell feedback and stabilize power at the measurement cell. The measurement cell is near135 C with two mu-metal shielding layers and residual field about2 mG; beam1/e^2 radius63+/-3 micrometres and a25 mm collection aperture about67 mm away delimit the observation. Vary theta between incident linear polarization and detection direction, including0+/-2,53+/-2 and90+/-2 degrees.",
      "scope": "One corrected source experimental study with explicit isotope, state, detection geometry and inherited inference inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured record is fluorescence versus a controlled source frequency coordinate. Excited-state hyperfine intervals are inferred from fitted line-center differences after the source two-photon/AOM frequency convention; they are not directly driven microwave transitions or an independently replayed absolute optical frequency calibration.",
        "Theta is the incident-polarization/detection angle, not the counterpropagating beam angle. The theoretical magic angle is about54.7 degrees; the near-magic acquisition53+/-2 degrees and finite collection solid angle do not certify exact cancellation of every residual systematic.",
        "Spectrally resolved peaks still show interference-sensitive asymmetric residuals and apparent shifts when fitted with independent Voigt profiles. The observed effect is not laser-induced excited-state quantum beats, and isolated symmetric fits are not an automatically valid measurement model.",
        "The2024 near-magic-angle measured splittings are inputs to the source simulated spectra. Agreement of those simulations with the same spectra is a conditional line-shape test, not an independent ab-initio prediction of the measured HFS or an additional computational study.",
        "QI-model fitting greatly reduces but does not completely remove angular dependence; uncertainty in the actual fluorescence volume is a proposed explanation, not a completely resolved geometry correction. Line centers, common widths, overall amplitude/offset are fit while relative heights and geometry inputs are fixed as stated.",
        "The source includes inherited second-order hyperfine corrections from earlier calculations. Those calculations and the full published Supplemental Material were not independently read or replayed; no new complete fit covariance, exact frequency-chain calibration or reconstructed uncertainty budget is supplied.",
        "The selected7d3/2 spectra, angular scans, model comparisons and erratum tables belong to one2024 experiment. The2022 precursor,2024 correction and fitted coupling constants are not three independent experimental confirmations, and the7d5/2 branch is outside this admission."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "M-phys-cs133-hyperfine-intervals",
      "kind": "method",
      "statement": "Infer the7d3/2 excited-state intervals from source fitted optical-fluorescence line-center differences while retaining ground-F preparation, polarization/detection geometry, interference and systematic-error controls. Use the actual2024 erratum replacement table, rather than the superseded2022 abstract/table. Treat intervals sharing line centers and fit inputs as dependent quantities within one study.",
      "scope": "Interpretation method for selected corrected Cs133 hyperfine intervals.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured record is fluorescence versus a controlled source frequency coordinate. Excited-state hyperfine intervals are inferred from fitted line-center differences after the source two-photon/AOM frequency convention; they are not directly driven microwave transitions or an independently replayed absolute optical frequency calibration.",
        "Theta is the incident-polarization/detection angle, not the counterpropagating beam angle. The theoretical magic angle is about54.7 degrees; the near-magic acquisition53+/-2 degrees and finite collection solid angle do not certify exact cancellation of every residual systematic.",
        "Spectrally resolved peaks still show interference-sensitive asymmetric residuals and apparent shifts when fitted with independent Voigt profiles. The observed effect is not laser-induced excited-state quantum beats, and isolated symmetric fits are not an automatically valid measurement model.",
        "The2024 near-magic-angle measured splittings are inputs to the source simulated spectra. Agreement of those simulations with the same spectra is a conditional line-shape test, not an independent ab-initio prediction of the measured HFS or an additional computational study.",
        "QI-model fitting greatly reduces but does not completely remove angular dependence; uncertainty in the actual fluorescence volume is a proposed explanation, not a completely resolved geometry correction. Line centers, common widths, overall amplitude/offset are fit while relative heights and geometry inputs are fixed as stated.",
        "The source includes inherited second-order hyperfine corrections from earlier calculations. Those calculations and the full published Supplemental Material were not independently read or replayed; no new complete fit covariance, exact frequency-chain calibration or reconstructed uncertainty budget is supplied.",
        "The selected7d3/2 spectra, angular scans, model comparisons and erratum tables belong to one2024 experiment. The2022 precursor,2024 correction and fitted coupling constants are not three independent experimental confirmations, and the7d5/2 branch is outside this admission."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "C-phys-cs133-hyperfine-intervals",
      "kind": "review-finding",
      "statement": "For Cs1337d2D3/2 excitation from6s1/2 F=3, the2024 erratum reports adjacent positive hyperfine intervals Fprime5-to4=36.760(9) MHz, Fprime4-to3=29.427(5) MHz and Fprime3-to2=22.073(5) MHz. The separate ground-F=4 column gives36.760(10),29.427(5) and22.071(5) MHz. These are source-reported corrected excited-state interval inferences from the optical spectra, with the source parenthesized uncertainties retained.",
      "scope": "Finite corrected Cs1337d3/2 hyperfine intervals in the stated optical preparation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The two ground-F selections are controls within the same acquisition study, not separate independent publications or different intrinsic excited-state Hamiltonians. Pairwise intervals sharing fitted levels are correlated; no independent likelihood for six interval rows or new covariance is supplied.",
        "The erratum explicitly replaces original2022 TableI using new2024 measurements after identifying quantum-interference shifts. Original inconsistent ground-F results are superseded measurement-model inferences, not evidence that the physical7d3/2 splitting depends intrinsically on which ground hyperfine level was excited.",
        "The erratum third column using A,B,C reconstructs intervals from the fitted coupling constants; it is not a new independent spectral observation. The adopted three adjacent intervals do not identify independent nuclear moments without electronic and higher-order inputs.",
        "Parentheses are retained as printed source uncertainties. Full published supplement/calibration/covariance reconstruction is not claimed; the main-text stated ac Stark, collision, magnetic and second-order Doppler systematics remain part of the source inference."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "M-phys-cs133-hyperfine-couplings",
      "kind": "method",
      "statement": "Interpret the source state-specific A,B,C coupling fit conditional on the corrected optical HFS intervals and inherited second-order corrections. Keep the first-order multipole labels and the source2024 fit/systematic uncertainty boundary. The corrected intervals, A,B,C reconstruction and erratum are linked stages of one inference, not independent replications or direct isolated-nucleus moment measurements.",
      "scope": "Interpretation method for selected source-reported Cs133 coupling constants.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured record is fluorescence versus a controlled source frequency coordinate. Excited-state hyperfine intervals are inferred from fitted line-center differences after the source two-photon/AOM frequency convention; they are not directly driven microwave transitions or an independently replayed absolute optical frequency calibration.",
        "Theta is the incident-polarization/detection angle, not the counterpropagating beam angle. The theoretical magic angle is about54.7 degrees; the near-magic acquisition53+/-2 degrees and finite collection solid angle do not certify exact cancellation of every residual systematic.",
        "Spectrally resolved peaks still show interference-sensitive asymmetric residuals and apparent shifts when fitted with independent Voigt profiles. The observed effect is not laser-induced excited-state quantum beats, and isolated symmetric fits are not an automatically valid measurement model.",
        "The2024 near-magic-angle measured splittings are inputs to the source simulated spectra. Agreement of those simulations with the same spectra is a conditional line-shape test, not an independent ab-initio prediction of the measured HFS or an additional computational study.",
        "QI-model fitting greatly reduces but does not completely remove angular dependence; uncertainty in the actual fluorescence volume is a proposed explanation, not a completely resolved geometry correction. Line centers, common widths, overall amplitude/offset are fit while relative heights and geometry inputs are fixed as stated.",
        "The source includes inherited second-order hyperfine corrections from earlier calculations. Those calculations and the full published Supplemental Material were not independently read or replayed; no new complete fit covariance, exact frequency-chain calibration or reconstructed uncertainty budget is supplied.",
        "The selected7d3/2 spectra, angular scans, model comparisons and erratum tables belong to one2024 experiment. The2022 precursor,2024 correction and fitted coupling constants are not three independent experimental confirmations, and the7d5/2 branch is outside this admission.",
        "The two ground-F selections are controls within the same acquisition study, not separate independent publications or different intrinsic excited-state Hamiltonians. Pairwise intervals sharing fitted levels are correlated; no independent likelihood for six interval rows or new covariance is supplied.",
        "The erratum explicitly replaces original2022 TableI using new2024 measurements after identifying quantum-interference shifts. Original inconsistent ground-F results are superseded measurement-model inferences, not evidence that the physical7d3/2 splitting depends intrinsically on which ground hyperfine level was excited.",
        "The erratum third column using A,B,C reconstructs intervals from the fitted coupling constants; it is not a new independent spectral observation. The adopted three adjacent intervals do not identify independent nuclear moments without electronic and higher-order inputs.",
        "Parentheses are retained as printed source uncertainties. Full published supplement/calibration/covariance reconstruction is not claimed; the main-text stated ac Stark, collision, magnetic and second-order Doppler systematics remain part of the source inference."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "C-phys-cs133-hyperfine-couplings",
      "kind": "review-finding",
      "statement": "The2024 published TableI and the actual2024 erratum report Cs1337d2D3/2 hyperfine coupling constants A=7.3547(8) MHz, B=-0.017(7) MHz and C=-0.3(4) kHz. A labels magnetic-dipole, B electric-quadrupole and C magnetic-octupole coupling in the selected state convention. C is consistent with zero at the printed uncertainty; the result does not resolve a precise nuclear magnetic octupole moment.",
      "scope": "Finite corrected state-specific Cs133 hyperfine constants with weak octupole bound.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context",
          "role": "limits",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The original2022 abstract values A=7.3509(9) MHz and B=-0.041(8) MHz are superseded by the actual2024 erratum; they must not be pooled as independent current measurements with the replacement values.",
        "A,B and C are state-specific coupling constants with mixed MHz/kHz units, not directly the nuclear mu,Q or octupole moment. The source nuclear-octupole conversion uses an inherited electronic calculation and has bounds too weak to constrain the nuclear models; no new numerical nuclear moment or electronic matrix element is admitted.",
        "The source includes second-order effects from earlier calculations and does not report perfect agreement of A,B with all theories. No independent theoretical confirmation, complete QED calculation or universal nucleus-electron coupling strength follows.",
        "The fit constants and the intervals reconstructed using them share measured HFS inputs. The updated paper and erratum are one experimental source lineage, not two independent observations; no raw fit, uncertainty coverage or covariance replay is claimed."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "M-phys-marion2003-rb-cs-context",
      "kind": "method",
      "statement": "Use laser-cooled Cs133 and Rb87 atoms in their electronic ground states in the source fountain ensemble: Cs fountains FO1/FOM and a dual fountain DF operated alternately with Rb and Cs. Select mF=0 clock levels with microwave/laser pulses after0.3-0.6 s cooling and upward launch. Atoms undergo two Ramsey microwave interactions; fluorescence gives hyperfine-state populations and transition probability versus microwave detuning, and a digital servo locks the average microwave frequency. Microwave synthesizers share a100 MHz quartz signal phase-locked to one hydrogen-maser flywheel. Record overlapping fountain data within a few minutes to suppress shared-maser fluctuations, while keeping DF alternation and campaign-specific preparations.",
      "scope": "One historical source experiment with shared flywheel and alternating dual-fountain preparations.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The observable is state-population fluorescence/transition probability and servo frequency offset to the shared flywheel, followed by a corrected frequency comparison. It is not an excited7d optical line measurement, direct nuclear-moment acquisition or independent determination of the SI exact Cs number.",
        "The same hydrogen maser distributes the reference to the synthesizers; its fluctuations are common and comparisons are time matched to reject them. The dual fountain alternates species rather than simultaneously measuring independent Rb and Cs preparations. Multiple fountains and campaigns remain one source study.",
        "The2002 budget includes second-order Zeeman, blackbody radiation, cold collisions/cavity pulling and other shifts. TableI values are fractional units of10^-16, not Hz. Selecting mF=0 does not eliminate the second-order Zeeman correction or every external-field systematic.",
        "Figure2 error bars are statistical comparison scatter and exclude the full shift budget. Source Equation2 retains separate statistical and systematic parenthesized uncertainties; do not replace either with an exact SI assignment, assume uncorrelated raw points or silently pool with historical reference values.",
        "The data use historical source calibrations and operating conditions. Current official SI wording does not reduce those uncertainties or imply that the result is a current clock-performance record. No raw servo replay, full covariance reconstruction or new accuracy evaluation is supplied.",
        "The selected nuclear/electronic sensitivity discussion inherits calculations and an oversimplified Schmidt model. A single clock ratio does not independently determine nuclear magnetic moments, alpha, the proton gyromagnetic factor or their separate drifts. No temporal-variation bound is admitted."
      ],
      "contextIds": [
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "M-phys-rb87-hyperfine-clock-frequency",
      "kind": "method",
      "statement": "Use the2002 fountain comparison with the source state-selection, shared-reference timing and clock-dependent frequency-shift corrections to infer Rb87 frequency relative to the average Cs realizations. Preserve the first1-sigma statistical parenthesis and separate systematic parenthesis, rather than the plot-only statistical bars or1999 conventional display reference.",
      "scope": "Interpretation method for the source2002 Rb clock frequency.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The observable is state-population fluorescence/transition probability and servo frequency offset to the shared flywheel, followed by a corrected frequency comparison. It is not an excited7d optical line measurement, direct nuclear-moment acquisition or independent determination of the SI exact Cs number.",
        "The same hydrogen maser distributes the reference to the synthesizers; its fluctuations are common and comparisons are time matched to reject them. The dual fountain alternates species rather than simultaneously measuring independent Rb and Cs preparations. Multiple fountains and campaigns remain one source study.",
        "The2002 budget includes second-order Zeeman, blackbody radiation, cold collisions/cavity pulling and other shifts. TableI values are fractional units of10^-16, not Hz. Selecting mF=0 does not eliminate the second-order Zeeman correction or every external-field systematic.",
        "Figure2 error bars are statistical comparison scatter and exclude the full shift budget. Source Equation2 retains separate statistical and systematic parenthesized uncertainties; do not replace either with an exact SI assignment, assume uncorrelated raw points or silently pool with historical reference values.",
        "The data use historical source calibrations and operating conditions. Current official SI wording does not reduce those uncertainties or imply that the result is a current clock-performance record. No raw servo replay, full covariance reconstruction or new accuracy evaluation is supplied.",
        "The selected nuclear/electronic sensitivity discussion inherits calculations and an oversimplified Schmidt model. A single clock ratio does not independently determine nuclear magnetic moments, alpha, the proton gyromagnetic factor or their separate drifts. No temporal-variation bound is admitted."
      ],
      "contextIds": [
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "C-phys-rb87-hyperfine-clock-frequency",
      "kind": "review-finding",
      "statement": "Marion and colleagues report the2002 Rb87 electronic-ground-state hyperfine frequency relative to their average Cs133 fountain realizations as6,834,682,610.904324(4)(7) Hz. In the source convention the first parenthesis is1-sigma statistical uncertainty and the second is the separate systematic uncertainty including DF_Rb,DF_Cs and FOM. The1999 frequency6,834,682,610.904333 Hz is a conventional reference used in the comparison display, not the new2002 result or an exact SI defining constant.",
      "scope": "Historical source-reported Rb87 ground-state frequency from finite Cs-referenced clock operation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "role": "limits",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The corrected frequency is a finite source experiment relative to realized Cs references with nonzero uncertainty. The exact9,192,631,770 Hz Cs assignment defines the unit, while apparatus accuracy, residual shifts, statistical stability and campaign integration remain empirical questions.",
        "The selected result concerns electronic-ground-state microwave Ramsey spectroscopy and servo stabilization; it does not measure Cs7d3/2 A,B,C, a new nuclear moment, all hyperfine transitions or a universal linewidth/clock-accuracy theorem.",
        "The source uses multiple clocks with a shared flywheel and a dual fountain that alternates species. Their common reference and timing dependencies must be retained; neither every plotted point nor the flywheel is an independent replication.",
        "No temporal drift or fundamental-constant bound is adopted: inherited sensitivity calculations and nuclear-model assumptions are separate from the2002 frequency result. The abstract/Equation3 positive0.2 versus final-summary negative0.2 drift sign is not silently adjudicated or copied as a new result."
      ],
      "contextIds": [
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "M-phys-hyperfine-source-scope",
      "kind": "method",
      "statement": "Synthesize the state-specific hyperfine convention, corrected Cs optical spectral inference and historical ground-state fountain frequency comparison, with full source contexts and the separate normative SI definition retained. Qualify the original nuclear/electronic, cross-level, spectroscopy, parameter-sensitivity and clock assertions without promoting catalogue defaults, dependent fits, corrections or exact unit assignments to new empirical laws.",
      "scope": "Literature-synthesis method for original card2.20.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "herd2021-hyperfine-formalism",
          "locator": "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition",
          "role": "method",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /20. Vocabulary, asserted parents, weights and minima only; not scientific or experimental support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete contexts: corrected Cs1337d3/2 optical-fluorescence intervals/couplings with polarization/interference and inherited correction inputs, and the distinct2002 ground-state Rb/Cs fountain comparison with shared-maser timing and shift corrections. One is not a new realization or replication of the other.",
        "The formal state-specific nuclear-electronic coupling retains the real hyperfine phenomenon. It is distinct from generic fine structure, Lamb/radiative shifts, unresolved molecular hyperfine centroids or a theorem that all atoms/isotopes/states have every nonzero nuclear multipole contribution.",
        "Nuclear magnetic dipole, electric quadrupole and optional octupole couplings require their state/angular-momentum conditions and electronic factors. A,B,C or a single clock frequency do not independently determine bare nuclear moments and electronic wavefunction parameters; selected experimental nuclear-spin assignments are supplied, not measured anew.",
        "Original parent2.2 weight0.55 and parent1.11 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. Supplied bound atomic states and a supplied composite nucleus do not turn the leading Z=1 binding model or free-nucleon moment into a Cs many-electron/nuclear prediction.",
        "Original carrier group1/type0, N_min=N_crit=1 for both parents and N_sat=null are not measured onset populations or sufficient universal physical conditions. Atomic number, nuclear spin, one atom, fitted sublevels, fountain atom count and number of experimental campaigns count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[0,1], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/cross-level-bridge labels are provenance/display classification, not measured ontological stage boundaries or a new universal precursor rule.",
        "High-resolution spectroscopy and frequency stabilization have finite measured examples here. Ultra-high precision, parameter sensitivity and applications remain tied to actual prepared states, line models, systematic budgets and observation protocols; no universal precision, independent parameter inversion or operating7D optical clock is established.",
        "The SI exact assigned Cs reference is normative, not another measurement or zero-uncertainty apparatus. The2002 Rb result,1999 conventional display reference, current2026 definition and source uncertainties remain distinct.",
        "The actual2024 erratum supersedes2022 interval/coupling tables; the new paper and erratum do not provide independent confirmations. Source simulations consume measured HFS, and inherited second-order/electronic/nuclear calculations are not newly reviewed independent model studies.",
        "Original generic QED/atomic-structure and high-resolution spectroscopy/clock evidence paragraphs have null DOI/URL and identify no reviewed primary studies. The selected formal passages and two finite experiments replace that evidential function only within the admitted scope; no full QED theory or general nuclear model is newly derived.",
        "No raw-spectrum, frequency-chain, servo, covariance or numerical model replay is supplied. The full published Cs supplement and later AppendixB derivation are not fully read. Printed uncertainty/version and out-of-scope drift-sign limits remain explicit; no silent source repair or invented acquisition is admitted."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "C-phys-hyperfine-source-scope",
      "kind": "review-finding",
      "statement": "A corrected Cs1337d3/2 optical-fluorescence study supplies finite nuclear-electronic hyperfine intervals and state-specific multipole coupling constants, while a distinct Cs/Rb ground-state fountain study supplies an actual corrected clock-frequency comparison. The SI exact Cs hyperfine reference is a separate definition. These retain measurable hyperfine structure, state sensitivity and clock operation under explicit preparation and inference limits, without universal splitting, parent-weight, population-threshold or independent-parameter claims.",
      "scope": "Complete finite disposition of references/level-2.json /20.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "herd2021-hyperfine-formalism",
          "locator": "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition",
          "role": "supports",
          "note": "Actually read primary passage supports only the declared formal convention, finite preparation or source-reported inference; no raw-data, fit or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /20. Vocabulary, asserted parents, weights and minima only; not scientific or experimental support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete contexts: corrected Cs1337d3/2 optical-fluorescence intervals/couplings with polarization/interference and inherited correction inputs, and the distinct2002 ground-state Rb/Cs fountain comparison with shared-maser timing and shift corrections. One is not a new realization or replication of the other.",
        "The formal state-specific nuclear-electronic coupling retains the real hyperfine phenomenon. It is distinct from generic fine structure, Lamb/radiative shifts, unresolved molecular hyperfine centroids or a theorem that all atoms/isotopes/states have every nonzero nuclear multipole contribution.",
        "Nuclear magnetic dipole, electric quadrupole and optional octupole couplings require their state/angular-momentum conditions and electronic factors. A,B,C or a single clock frequency do not independently determine bare nuclear moments and electronic wavefunction parameters; selected experimental nuclear-spin assignments are supplied, not measured anew.",
        "Original parent2.2 weight0.55 and parent1.11 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. Supplied bound atomic states and a supplied composite nucleus do not turn the leading Z=1 binding model or free-nucleon moment into a Cs many-electron/nuclear prediction.",
        "Original carrier group1/type0, N_min=N_crit=1 for both parents and N_sat=null are not measured onset populations or sufficient universal physical conditions. Atomic number, nuclear spin, one atom, fitted sublevels, fountain atom count and number of experimental campaigns count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[0,1], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/cross-level-bridge labels are provenance/display classification, not measured ontological stage boundaries or a new universal precursor rule.",
        "High-resolution spectroscopy and frequency stabilization have finite measured examples here. Ultra-high precision, parameter sensitivity and applications remain tied to actual prepared states, line models, systematic budgets and observation protocols; no universal precision, independent parameter inversion or operating7D optical clock is established.",
        "The SI exact assigned Cs reference is normative, not another measurement or zero-uncertainty apparatus. The2002 Rb result,1999 conventional display reference, current2026 definition and source uncertainties remain distinct.",
        "The actual2024 erratum supersedes2022 interval/coupling tables; the new paper and erratum do not provide independent confirmations. Source simulations consume measured HFS, and inherited second-order/electronic/nuclear calculations are not newly reviewed independent model studies.",
        "Original generic QED/atomic-structure and high-resolution spectroscopy/clock evidence paragraphs have null DOI/URL and identify no reviewed primary studies. The selected formal passages and two finite experiments replace that evidential function only within the admitted scope; no full QED theory or general nuclear model is newly derived.",
        "No raw-spectrum, frequency-chain, servo, covariance or numerical model replay is supplied. The full published Cs supplement and later AppendixB derivation are not fully read. Printed uncertainty/version and out-of-scope drift-sign limits remain explicit; no silent source repair or invented acquisition is admitted."
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:hyperfine-state-parameters",
      "name": "Isotope- and state-specific hyperfine frequency parameters",
      "kind": "definition",
      "description": "For a declared isotope and electronic state, let I be nuclear spin, J total electronic angular momentum and F the coupled total angular momentum. Define K=F(F+1)-I(I+1)-J(J+1). With A expressed in frequency units, the first-order magnetic-dipole contribution relative to the state centroid is E_F/h=A*K/2; allowed higher-rank terms have separate state-specific constants, including the electric-quadrupole B term. In the selected Cs1337d2D3/2 assignment, J=3/2 and F=2,3,4,5 correspond to supplied I=7/2. The first-order electric-quadrupole term is absent within a J=1/2 electronic level; the Cs ground-state clock is not evidence that every hyperfine transition has a nonzero quadrupole contribution.",
      "claimIds": [
        "D-phys-hyperfine-state-parameters"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "herd2021-hyperfine-formalism",
          "locator": "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2"
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture"
        }
      ],
      "openObligations": [
        "The measured A,B and optional C coupling constants combine nuclear multipoles with state-dependent electronic matrix elements and higher-order corrections. They are not direct independent measurements of bare nuclear magnetic dipole, electric quadrupole or magnetic octupole moments.",
        "E_F/h is a frequency, with interval DeltaE/h in Hz or MHz, not angular frequency in rad/s. If A is instead quoted as an energy, the h conversion must be changed consistently; no extra2*pi or equality of A with each measured interval is admitted.",
        "A first-order parametrization is an approximation within the declared state and field regime. Nuclear spin and state assignments are supplied labels, not newly measured nuclear-spin values; external-field shifts and higher-order level mixing remain separate.",
        "The multipole and angular-momentum conditions do not require every isotope/state to exhibit the same terms or any universal nonzero splitting. Nuclear-moment coupling is distinct from electronic fine structure, the Lamb shift and general radiative/QED corrections.",
        "Neither a free-proton/neutron moment nor the leading static-nucleus Z=1 binding model supplies the composite Cs133 nuclear moments, many-electron wavefunction or a quantitative prediction of these constants."
      ]
    },
    {
      "id": "phys:hyperfine-clock-definition",
      "name": "Assigned Cs133 hyperfine reference and finite clock realization distinction",
      "kind": "definition",
      "description": "The SI second fixes the unperturbed Cs133 electronic-ground-state hyperfine transition frequency Delta_nu_Cs to exactly9,192,631,770 Hz, where Hz=s^-1. The selected standard transition connects ground2S1/2 F=4,mF=0 and F=3,mF=0. The definition refers to an isolated atom unperturbed by external fields, including ambient blackbody radiation. This exact assigned number is a normative unit definition; a finite apparatus realizes that reference through measurements, systematic corrections and nonzero uncertainty.",
      "claimIds": [
        "D-phys-hyperfine-clock-definition"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary"
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition"
        }
      ],
      "openObligations": [
        "An exact defining number is not an experimental result with zero error, a measured natural frequency independent of the unit definition, proof of perfect clock accuracy or an additional primary experiment.",
        "The Cs ground-state microwave reference is different from the excited7d3/2 optical-fluorescence interval experiment. Neither the original Cs optical paper nor its2024 correction demonstrates an operating7D optical frequency standard.",
        "The2002 Rb frequency is a historical measured frequency relative to Cs realizations; it is neither an exact defining constant nor automatically recalibrated to a new uncertainty by citing the2026 brochure. The source1999 conventional Rb reference is also distinct.",
        "Selecting mF=0 suppresses leading linear Zeeman response; finite magnetic, blackbody, collision, cavity and relativistic corrections still require the actual realization protocol. No universal clock-accuracy or stability figure is assigned."
      ]
    },
    {
      "id": "phys:rahaman2024-cs-hyperfine-context",
      "name": "Rahaman Cs133 optical-fluorescence hyperfine context",
      "kind": "context",
      "description": "Prepare Cs133 vapor-cell Doppler-free two-photon excitation from6s1/2 F=3 or F=4 to7d2D3/2 Fprime=2,3,4,5 with a counterpropagating narrow-linewidth cw laser near767.8 nm. Scan the source AOM2 radio-frequency coordinate in a cat-eye double-pass geometry and record672.5 nm spontaneous fluorescence through a10 nm bandpass centered near670 nm. Stabilize the laser using a separate Cs-cell feedback and stabilize power at the measurement cell. The measurement cell is near135 C with two mu-metal shielding layers and residual field about2 mG; beam1/e^2 radius63+/-3 micrometres and a25 mm collection aperture about67 mm away delimit the observation. Vary theta between incident linear polarization and detection direction, including0+/-2,53+/-2 and90+/-2 degrees.",
      "claimIds": [
        "M-phys-rahaman2024-cs-hyperfine-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed"
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants"
        }
      ],
      "openObligations": [
        "The measured record is fluorescence versus a controlled source frequency coordinate. Excited-state hyperfine intervals are inferred from fitted line-center differences after the source two-photon/AOM frequency convention; they are not directly driven microwave transitions or an independently replayed absolute optical frequency calibration.",
        "Theta is the incident-polarization/detection angle, not the counterpropagating beam angle. The theoretical magic angle is about54.7 degrees; the near-magic acquisition53+/-2 degrees and finite collection solid angle do not certify exact cancellation of every residual systematic.",
        "Spectrally resolved peaks still show interference-sensitive asymmetric residuals and apparent shifts when fitted with independent Voigt profiles. The observed effect is not laser-induced excited-state quantum beats, and isolated symmetric fits are not an automatically valid measurement model.",
        "The2024 near-magic-angle measured splittings are inputs to the source simulated spectra. Agreement of those simulations with the same spectra is a conditional line-shape test, not an independent ab-initio prediction of the measured HFS or an additional computational study.",
        "QI-model fitting greatly reduces but does not completely remove angular dependence; uncertainty in the actual fluorescence volume is a proposed explanation, not a completely resolved geometry correction. Line centers, common widths, overall amplitude/offset are fit while relative heights and geometry inputs are fixed as stated.",
        "The source includes inherited second-order hyperfine corrections from earlier calculations. Those calculations and the full published Supplemental Material were not independently read or replayed; no new complete fit covariance, exact frequency-chain calibration or reconstructed uncertainty budget is supplied.",
        "The selected7d3/2 spectra, angular scans, model comparisons and erratum tables belong to one2024 experiment. The2022 precursor,2024 correction and fitted coupling constants are not three independent experimental confirmations, and the7d5/2 branch is outside this admission."
      ]
    },
    {
      "id": "phys:cs133-hyperfine-intervals",
      "name": "Corrected Cs1337d3/2 hyperfine spectral intervals",
      "kind": "scoped-process",
      "description": "For Cs1337d2D3/2 excitation from6s1/2 F=3, the2024 erratum reports adjacent positive hyperfine intervals Fprime5-to4=36.760(9) MHz, Fprime4-to3=29.427(5) MHz and Fprime3-to2=22.073(5) MHz. The separate ground-F=4 column gives36.760(10),29.427(5) and22.071(5) MHz. These are source-reported corrected excited-state interval inferences from the optical spectra, with the source parenthesized uncertainties retained.",
      "claimIds": [
        "C-phys-cs133-hyperfine-intervals"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants"
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants"
        }
      ],
      "openObligations": [
        "The two ground-F selections are controls within the same acquisition study, not separate independent publications or different intrinsic excited-state Hamiltonians. Pairwise intervals sharing fitted levels are correlated; no independent likelihood for six interval rows or new covariance is supplied.",
        "The erratum explicitly replaces original2022 TableI using new2024 measurements after identifying quantum-interference shifts. Original inconsistent ground-F results are superseded measurement-model inferences, not evidence that the physical7d3/2 splitting depends intrinsically on which ground hyperfine level was excited.",
        "The erratum third column using A,B,C reconstructs intervals from the fitted coupling constants; it is not a new independent spectral observation. The adopted three adjacent intervals do not identify independent nuclear moments without electronic and higher-order inputs.",
        "Parentheses are retained as printed source uncertainties. Full published supplement/calibration/covariance reconstruction is not claimed; the main-text stated ac Stark, collision, magnetic and second-order Doppler systematics remain part of the source inference."
      ]
    },
    {
      "id": "phys:cs133-hyperfine-couplings",
      "name": "Conditional corrected Cs133 hyperfine coupling inference",
      "kind": "scoped-process",
      "description": "The2024 published TableI and the actual2024 erratum report Cs1337d2D3/2 hyperfine coupling constants A=7.3547(8) MHz, B=-0.017(7) MHz and C=-0.3(4) kHz. A labels magnetic-dipole, B electric-quadrupole and C magnetic-octupole coupling in the selected state convention. C is consistent with zero at the printed uncertainty; the result does not resolve a precise nuclear magnetic octupole moment.",
      "claimIds": [
        "C-phys-cs133-hyperfine-couplings"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants"
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants"
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context"
        }
      ],
      "openObligations": [
        "The original2022 abstract values A=7.3509(9) MHz and B=-0.041(8) MHz are superseded by the actual2024 erratum; they must not be pooled as independent current measurements with the replacement values.",
        "A,B and C are state-specific coupling constants with mixed MHz/kHz units, not directly the nuclear mu,Q or octupole moment. The source nuclear-octupole conversion uses an inherited electronic calculation and has bounds too weak to constrain the nuclear models; no new numerical nuclear moment or electronic matrix element is admitted.",
        "The source includes second-order effects from earlier calculations and does not report perfect agreement of A,B with all theories. No independent theoretical confirmation, complete QED calculation or universal nucleus-electron coupling strength follows.",
        "The fit constants and the intervals reconstructed using them share measured HFS inputs. The updated paper and erratum are one experimental source lineage, not two independent observations; no raw fit, uncertainty coverage or covariance replay is claimed."
      ]
    },
    {
      "id": "phys:marion2003-rb-cs-context",
      "name": "Marion Cs/Rb ground-state fountain comparison context",
      "kind": "context",
      "description": "Use laser-cooled Cs133 and Rb87 atoms in their electronic ground states in the source fountain ensemble: Cs fountains FO1/FOM and a dual fountain DF operated alternately with Rb and Cs. Select mF=0 clock levels with microwave/laser pulses after0.3-0.6 s cooling and upward launch. Atoms undergo two Ramsey microwave interactions; fluorescence gives hyperfine-state populations and transition probability versus microwave detuning, and a digital servo locks the average microwave frequency. Microwave synthesizers share a100 MHz quartz signal phase-locked to one hydrogen-maser flywheel. Record overlapping fountain data within a few minutes to suppress shared-maser fluctuations, while keeping DF alternation and campaign-specific preparations.",
      "claimIds": [
        "M-phys-marion2003-rb-cs-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission"
        }
      ],
      "openObligations": [
        "The observable is state-population fluorescence/transition probability and servo frequency offset to the shared flywheel, followed by a corrected frequency comparison. It is not an excited7d optical line measurement, direct nuclear-moment acquisition or independent determination of the SI exact Cs number.",
        "The same hydrogen maser distributes the reference to the synthesizers; its fluctuations are common and comparisons are time matched to reject them. The dual fountain alternates species rather than simultaneously measuring independent Rb and Cs preparations. Multiple fountains and campaigns remain one source study.",
        "The2002 budget includes second-order Zeeman, blackbody radiation, cold collisions/cavity pulling and other shifts. TableI values are fractional units of10^-16, not Hz. Selecting mF=0 does not eliminate the second-order Zeeman correction or every external-field systematic.",
        "Figure2 error bars are statistical comparison scatter and exclude the full shift budget. Source Equation2 retains separate statistical and systematic parenthesized uncertainties; do not replace either with an exact SI assignment, assume uncorrelated raw points or silently pool with historical reference values.",
        "The data use historical source calibrations and operating conditions. Current official SI wording does not reduce those uncertainties or imply that the result is a current clock-performance record. No raw servo replay, full covariance reconstruction or new accuracy evaluation is supplied.",
        "The selected nuclear/electronic sensitivity discussion inherits calculations and an oversimplified Schmidt model. A single clock ratio does not independently determine nuclear magnetic moments, alpha, the proton gyromagnetic factor or their separate drifts. No temporal-variation bound is admitted."
      ]
    },
    {
      "id": "phys:rb87-hyperfine-clock-frequency",
      "name": "Finite Rb87 hyperfine clock-frequency comparison",
      "kind": "scoped-process",
      "description": "Marion and colleagues report the2002 Rb87 electronic-ground-state hyperfine frequency relative to their average Cs133 fountain realizations as6,834,682,610.904324(4)(7) Hz. In the source convention the first parenthesis is1-sigma statistical uncertainty and the second is the separate systematic uncertainty including DF_Rb,DF_Cs and FOM. The1999 frequency6,834,682,610.904333 Hz is a conventional reference used in the comparison display, not the new2002 result or an exact SI defining constant.",
      "claimIds": [
        "C-phys-rb87-hyperfine-clock-frequency"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel"
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary"
        }
      ],
      "openObligations": [
        "The corrected frequency is a finite source experiment relative to realized Cs references with nonzero uncertainty. The exact9,192,631,770 Hz Cs assignment defines the unit, while apparatus accuracy, residual shifts, statistical stability and campaign integration remain empirical questions.",
        "The selected result concerns electronic-ground-state microwave Ramsey spectroscopy and servo stabilization; it does not measure Cs7d3/2 A,B,C, a new nuclear moment, all hyperfine transitions or a universal linewidth/clock-accuracy theorem.",
        "The source uses multiple clocks with a shared flywheel and a dual fountain that alternates species. Their common reference and timing dependencies must be retained; neither every plotted point nor the flywheel is an independent replication.",
        "No temporal drift or fundamental-constant bound is adopted: inherited sensitivity calculations and nuclear-model assumptions are separate from the2002 frequency result. The abstract/Equation3 positive0.2 versus final-summary negative0.2 drift sign is not silently adjudicated or copied as a new result."
      ]
    },
    {
      "id": "phys:hyperfine-source-scope",
      "name": "Scoped hyperfine spectral coupling and clock realization",
      "kind": "scoped-process",
      "description": "A corrected Cs1337d3/2 optical-fluorescence study supplies finite nuclear-electronic hyperfine intervals and state-specific multipole coupling constants, while a distinct Cs/Rb ground-state fountain study supplies an actual corrected clock-frequency comparison. The SI exact Cs hyperfine reference is a separate definition. These retain measurable hyperfine structure, state sensitivity and clock operation under explicit preparation and inference limits, without universal splitting, parent-weight, population-threshold or independent-parameter claims.",
      "claimIds": [
        "C-phys-hyperfine-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "herd2021-hyperfine-formalism",
          "locator": "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2"
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum"
        },
        {
          "sourceId": "rahaman2022-cs-hyperfine",
          "locator": "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants"
        },
        {
          "sourceId": "rahaman2024-cs-hyperfine",
          "locator": "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed"
        },
        {
          "sourceId": "rahaman2024-hyperfine-erratum",
          "locator": "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections"
        },
        {
          "sourceId": "marion2003-rb-cs-fountains",
          "locator": "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission"
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary"
        },
        {
          "sourceId": "bipm2026-si-hyperfine-second",
          "locator": "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Retain both complete contexts: corrected Cs1337d3/2 optical-fluorescence intervals/couplings with polarization/interference and inherited correction inputs, and the distinct2002 ground-state Rb/Cs fountain comparison with shared-maser timing and shift corrections. One is not a new realization or replication of the other.",
        "The formal state-specific nuclear-electronic coupling retains the real hyperfine phenomenon. It is distinct from generic fine structure, Lamb/radiative shifts, unresolved molecular hyperfine centroids or a theorem that all atoms/isotopes/states have every nonzero nuclear multipole contribution.",
        "Nuclear magnetic dipole, electric quadrupole and optional octupole couplings require their state/angular-momentum conditions and electronic factors. A,B,C or a single clock frequency do not independently determine bare nuclear moments and electronic wavefunction parameters; selected experimental nuclear-spin assignments are supplied, not measured anew.",
        "Original parent2.2 weight0.55 and parent1.11 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. Supplied bound atomic states and a supplied composite nucleus do not turn the leading Z=1 binding model or free-nucleon moment into a Cs many-electron/nuclear prediction.",
        "Original carrier group1/type0, N_min=N_crit=1 for both parents and N_sat=null are not measured onset populations or sufficient universal physical conditions. Atomic number, nuclear spin, one atom, fitted sublevels, fountain atom count and number of experimental campaigns count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[0,1], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/cross-level-bridge labels are provenance/display classification, not measured ontological stage boundaries or a new universal precursor rule.",
        "High-resolution spectroscopy and frequency stabilization have finite measured examples here. Ultra-high precision, parameter sensitivity and applications remain tied to actual prepared states, line models, systematic budgets and observation protocols; no universal precision, independent parameter inversion or operating7D optical clock is established.",
        "The SI exact assigned Cs reference is normative, not another measurement or zero-uncertainty apparatus. The2002 Rb result,1999 conventional display reference, current2026 definition and source uncertainties remain distinct.",
        "The actual2024 erratum supersedes2022 interval/coupling tables; the new paper and erratum do not provide independent confirmations. Source simulations consume measured HFS, and inherited second-order/electronic/nuclear calculations are not newly reviewed independent model studies.",
        "Original generic QED/atomic-structure and high-resolution spectroscopy/clock evidence paragraphs have null DOI/URL and identify no reviewed primary studies. The selected formal passages and two finite experiments replace that evidential function only within the admitted scope; no full QED theory or general nuclear model is newly derived.",
        "No raw-spectrum, frequency-chain, servo, covariance or numerical model replay is supplied. The full published Cs supplement and later AppendixB derivation are not fully read. Printed uncertainty/version and out-of-scope drift-sign limits remain explicit; no silent source repair or invented acquisition is admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:hyperfine-state-parameters-hyperfine-clock-definition",
      "source": "phys:hyperfine-state-parameters",
      "target": "phys:hyperfine-clock-definition",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A selected ground-state hyperfine reference can define the unit without making every state-specific splitting an exact defining number.",
      "claimIds": [
        "D-phys-hyperfine-clock-definition"
      ]
    },
    {
      "id": "physics:rahaman2024-cs-hyperfine-context-cs133-hyperfine-intervals",
      "source": "phys:rahaman2024-cs-hyperfine-context",
      "target": "phys:cs133-hyperfine-intervals",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, preparation and systematic-control inputs delimit this source-reported inference.",
      "claimIds": [
        "M-phys-cs133-hyperfine-intervals"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "physics:rahaman2024-cs-hyperfine-context-cs133-hyperfine-couplings",
      "source": "phys:rahaman2024-cs-hyperfine-context",
      "target": "phys:cs133-hyperfine-couplings",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, preparation and systematic-control inputs delimit this source-reported inference.",
      "claimIds": [
        "M-phys-cs133-hyperfine-couplings"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "physics:marion2003-rb-cs-context-rb87-hyperfine-clock-frequency",
      "source": "phys:marion2003-rb-cs-context",
      "target": "phys:rb87-hyperfine-clock-frequency",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, preparation and systematic-control inputs delimit this source-reported inference.",
      "claimIds": [
        "M-phys-rb87-hyperfine-clock-frequency"
      ],
      "contextIds": [
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:hyperfine-state-parameters-cs133-hyperfine-intervals",
      "source": "phys:hyperfine-state-parameters",
      "target": "phys:cs133-hyperfine-intervals",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared state/frequency convention or unit-definition distinction constrains interpretation without supplying a new measurement.",
      "claimIds": [
        "M-phys-cs133-hyperfine-intervals"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "physics:hyperfine-state-parameters-cs133-hyperfine-couplings",
      "source": "phys:hyperfine-state-parameters",
      "target": "phys:cs133-hyperfine-couplings",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared state/frequency convention or unit-definition distinction constrains interpretation without supplying a new measurement.",
      "claimIds": [
        "M-phys-cs133-hyperfine-couplings"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "physics:hyperfine-clock-definition-rb87-hyperfine-clock-frequency",
      "source": "phys:hyperfine-clock-definition",
      "target": "phys:rb87-hyperfine-clock-frequency",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared state/frequency convention or unit-definition distinction constrains interpretation without supplying a new measurement.",
      "claimIds": [
        "M-phys-rb87-hyperfine-clock-frequency"
      ],
      "contextIds": [
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:cs133-hyperfine-intervals-cs133-hyperfine-couplings",
      "source": "phys:cs133-hyperfine-intervals",
      "target": "phys:cs133-hyperfine-couplings",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted coupling constants and reconstructed intervals consume the same measured HFS and correction inputs; this is inference dependence, not independent corroboration.",
      "claimIds": [
        "M-phys-cs133-hyperfine-couplings"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine"
      ]
    },
    {
      "id": "physics:hyperfine-state-parameters-hyperfine-source-scope",
      "source": "phys:hyperfine-state-parameters",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:hyperfine-clock-definition-hyperfine-source-scope",
      "source": "phys:hyperfine-clock-definition",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:rahaman2024-cs-hyperfine-context-hyperfine-source-scope",
      "source": "phys:rahaman2024-cs-hyperfine-context",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:cs133-hyperfine-intervals-hyperfine-source-scope",
      "source": "phys:cs133-hyperfine-intervals",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:cs133-hyperfine-couplings-hyperfine-source-scope",
      "source": "phys:cs133-hyperfine-couplings",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:marion2003-rb-cs-context-hyperfine-source-scope",
      "source": "phys:marion2003-rb-cs-context",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    },
    {
      "id": "physics:rb87-hyperfine-clock-frequency-hyperfine-source-scope",
      "source": "phys:rb87-hyperfine-clock-frequency",
      "target": "phys:hyperfine-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named convention, complete preparation or conditional result constrains the joint interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-hyperfine-source-scope"
      ],
      "contextIds": [
        "rahaman2024-cs-hyperfine",
        "marion2003-rb-cs-fountains"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:hyperfine-state-parameters",
      "role": "definition",
      "denotes": "Isotope- and state-specific hyperfine frequency parameters under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hyperfine-state-parameters"
      ]
    },
    {
      "nodeId": "phys:hyperfine-clock-definition",
      "role": "definition",
      "denotes": "Assigned Cs133 hyperfine reference and finite clock realization distinction under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hyperfine-clock-definition"
      ]
    },
    {
      "nodeId": "phys:rahaman2024-cs-hyperfine-context",
      "role": "experimental-context",
      "denotes": "Rahaman Cs133 optical-fluorescence hyperfine context under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-rahaman2024-cs-hyperfine-context"
      ]
    },
    {
      "nodeId": "phys:cs133-hyperfine-intervals",
      "role": "scoped-phenomenon",
      "denotes": "Corrected Cs1337d3/2 hyperfine spectral intervals under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cs133-hyperfine-intervals"
      ]
    },
    {
      "nodeId": "phys:cs133-hyperfine-couplings",
      "role": "scoped-phenomenon",
      "denotes": "Conditional corrected Cs133 hyperfine coupling inference under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cs133-hyperfine-couplings"
      ]
    },
    {
      "nodeId": "phys:marion2003-rb-cs-context",
      "role": "experimental-context",
      "denotes": "Marion Cs/Rb ground-state fountain comparison context under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-marion2003-rb-cs-context"
      ]
    },
    {
      "nodeId": "phys:rb87-hyperfine-clock-frequency",
      "role": "scoped-phenomenon",
      "denotes": "Finite Rb87 hyperfine clock-frequency comparison under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-rb87-hyperfine-clock-frequency"
      ]
    },
    {
      "nodeId": "phys:hyperfine-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped hyperfine spectral coupling and clock realization under the declared isotope, atomic state, frequency convention and preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hyperfine-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "rahaman2024-cs-hyperfine",
      "sourceId": "rahaman2024-cs-hyperfine",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevA.109.042820",
      "journal": "Physical Review A",
      "volume": "109",
      "issue": "4",
      "pages": "042820-1-042820-8",
      "system": "Cs133 vapor-cell6s1/2 to7d2D3/2 two-photon excitation and polarization-resolved detection geometry",
      "preparation": "Prepare Cs133 vapor-cell Doppler-free two-photon excitation from6s1/2 F=3 or F=4 to7d2D3/2 Fprime=2,3,4,5 with a counterpropagating narrow-linewidth cw laser near767.8 nm. Scan the source AOM2 radio-frequency coordinate in a cat-eye double-pass geometry and record672.5 nm spontaneous fluorescence through a10 nm bandpass centered near670 nm. Stabilize the laser using a separate Cs-cell feedback and stabilize power at the measurement cell. The measurement cell is near135 C with two mu-metal shielding layers and residual field about2 mG; beam1/e^2 radius63+/-3 micrometres and a25 mm collection aperture about67 mm away delimit the observation. Vary theta between incident linear polarization and detection direction, including0+/-2,53+/-2 and90+/-2 degrees.",
      "observable": "672.5 nm fluorescence versus source-controlled optical-frequency coordinate, angle-dependent residuals and source-fitted hyperfine line centers.",
      "finding": "For Cs1337d2D3/2 excitation from6s1/2 F=3, the2024 erratum reports adjacent positive hyperfine intervals Fprime5-to4=36.760(9) MHz, Fprime4-to3=29.427(5) MHz and Fprime3-to2=22.073(5) MHz. The separate ground-F=4 column gives36.760(10),29.427(5) and22.071(5) MHz. These are source-reported corrected excited-state interval inferences from the optical spectra, with the source parenthesized uncertainties retained. The2024 published TableI and the actual2024 erratum report Cs1337d2D3/2 hyperfine coupling constants A=7.3547(8) MHz, B=-0.017(7) MHz and C=-0.3(4) kHz. A labels magnetic-dipole, B electric-quadrupole and C magnetic-octupole coupling in the selected state convention. C is consistent with zero at the printed uncertainty; the result does not resolve a precise nuclear magnetic octupole moment.",
      "limitations": [
        "The measured record is fluorescence versus a controlled source frequency coordinate. Excited-state hyperfine intervals are inferred from fitted line-center differences after the source two-photon/AOM frequency convention; they are not directly driven microwave transitions or an independently replayed absolute optical frequency calibration.",
        "Theta is the incident-polarization/detection angle, not the counterpropagating beam angle. The theoretical magic angle is about54.7 degrees; the near-magic acquisition53+/-2 degrees and finite collection solid angle do not certify exact cancellation of every residual systematic.",
        "Spectrally resolved peaks still show interference-sensitive asymmetric residuals and apparent shifts when fitted with independent Voigt profiles. The observed effect is not laser-induced excited-state quantum beats, and isolated symmetric fits are not an automatically valid measurement model.",
        "The2024 near-magic-angle measured splittings are inputs to the source simulated spectra. Agreement of those simulations with the same spectra is a conditional line-shape test, not an independent ab-initio prediction of the measured HFS or an additional computational study.",
        "QI-model fitting greatly reduces but does not completely remove angular dependence; uncertainty in the actual fluorescence volume is a proposed explanation, not a completely resolved geometry correction. Line centers, common widths, overall amplitude/offset are fit while relative heights and geometry inputs are fixed as stated.",
        "The source includes inherited second-order hyperfine corrections from earlier calculations. Those calculations and the full published Supplemental Material were not independently read or replayed; no new complete fit covariance, exact frequency-chain calibration or reconstructed uncertainty budget is supplied.",
        "The selected7d3/2 spectra, angular scans, model comparisons and erratum tables belong to one2024 experiment. The2022 precursor,2024 correction and fitted coupling constants are not three independent experimental confirmations, and the7d5/2 branch is outside this admission.",
        "The two ground-F selections are controls within the same acquisition study, not separate independent publications or different intrinsic excited-state Hamiltonians. Pairwise intervals sharing fitted levels are correlated; no independent likelihood for six interval rows or new covariance is supplied.",
        "The erratum explicitly replaces original2022 TableI using new2024 measurements after identifying quantum-interference shifts. Original inconsistent ground-F results are superseded measurement-model inferences, not evidence that the physical7d3/2 splitting depends intrinsically on which ground hyperfine level was excited.",
        "The erratum third column using A,B,C reconstructs intervals from the fitted coupling constants; it is not a new independent spectral observation. The adopted three adjacent intervals do not identify independent nuclear moments without electronic and higher-order inputs.",
        "Parentheses are retained as printed source uncertainties. Full published supplement/calibration/covariance reconstruction is not claimed; the main-text stated ac Stark, collision, magnetic and second-order Doppler systematics remain part of the source inference.",
        "The original2022 abstract values A=7.3509(9) MHz and B=-0.041(8) MHz are superseded by the actual2024 erratum; they must not be pooled as independent current measurements with the replacement values.",
        "A,B and C are state-specific coupling constants with mixed MHz/kHz units, not directly the nuclear mu,Q or octupole moment. The source nuclear-octupole conversion uses an inherited electronic calculation and has bounds too weak to constrain the nuclear models; no new numerical nuclear moment or electronic matrix element is admitted.",
        "The source includes second-order effects from earlier calculations and does not report perfect agreement of A,B with all theories. No independent theoretical confirmation, complete QED calculation or universal nucleus-electron coupling strength follows.",
        "The fit constants and the intervals reconstructed using them share measured HFS inputs. The updated paper and erratum are one experimental source lineage, not two independent observations; no raw fit, uncertainty coverage or covariance replay is claimed."
      ],
      "readExtent": "published-main-text-experimental-appendix-and-selected-interference-formalism",
      "reviewedLocators": [
        "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
        "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
        "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
        "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevA.109.042820",
      "correctionCheck": "Published22April2024 VoR identity checked. The actual same-date2024 erratum10.1103/PhysRevA.109.049904 replaces2022 TablesI-II using this experiment; no separate erratum study. Old original-abstract values excluded. No explicit correction of the2024 main paper found in a limited check. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
    },
    {
      "id": "marion2003-rb-cs-fountains",
      "sourceId": "marion2003-rb-cs-fountains",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.90.150801",
      "journal": "Physical Review Letters",
      "volume": "90",
      "issue": "15",
      "pages": "150801-1-150801-4",
      "system": "Laser-cooled electronic-ground-state Cs133/Rb87 fountain ensemble with shared hydrogen-maser flywheel",
      "preparation": "Use laser-cooled Cs133 and Rb87 atoms in their electronic ground states in the source fountain ensemble: Cs fountains FO1/FOM and a dual fountain DF operated alternately with Rb and Cs. Select mF=0 clock levels with microwave/laser pulses after0.3-0.6 s cooling and upward launch. Atoms undergo two Ramsey microwave interactions; fluorescence gives hyperfine-state populations and transition probability versus microwave detuning, and a digital servo locks the average microwave frequency. Microwave synthesizers share a100 MHz quartz signal phase-locked to one hydrogen-maser flywheel. Record overlapping fountain data within a few minutes to suppress shared-maser fluctuations, while keeping DF alternation and campaign-specific preparations.",
      "observable": "Hyperfine-state fluorescence populations, Ramsey transition probability and digital-servo frequency offsets used for a corrected Rb/Cs comparison.",
      "finding": "Marion and colleagues report the2002 Rb87 electronic-ground-state hyperfine frequency relative to their average Cs133 fountain realizations as6,834,682,610.904324(4)(7) Hz. In the source convention the first parenthesis is1-sigma statistical uncertainty and the second is the separate systematic uncertainty including DF_Rb,DF_Cs and FOM. The1999 frequency6,834,682,610.904333 Hz is a conventional reference used in the comparison display, not the new2002 result or an exact SI defining constant.",
      "limitations": [
        "The observable is state-population fluorescence/transition probability and servo frequency offset to the shared flywheel, followed by a corrected frequency comparison. It is not an excited7d optical line measurement, direct nuclear-moment acquisition or independent determination of the SI exact Cs number.",
        "The same hydrogen maser distributes the reference to the synthesizers; its fluctuations are common and comparisons are time matched to reject them. The dual fountain alternates species rather than simultaneously measuring independent Rb and Cs preparations. Multiple fountains and campaigns remain one source study.",
        "The2002 budget includes second-order Zeeman, blackbody radiation, cold collisions/cavity pulling and other shifts. TableI values are fractional units of10^-16, not Hz. Selecting mF=0 does not eliminate the second-order Zeeman correction or every external-field systematic.",
        "Figure2 error bars are statistical comparison scatter and exclude the full shift budget. Source Equation2 retains separate statistical and systematic parenthesized uncertainties; do not replace either with an exact SI assignment, assume uncorrelated raw points or silently pool with historical reference values.",
        "The data use historical source calibrations and operating conditions. Current official SI wording does not reduce those uncertainties or imply that the result is a current clock-performance record. No raw servo replay, full covariance reconstruction or new accuracy evaluation is supplied.",
        "The selected nuclear/electronic sensitivity discussion inherits calculations and an oversimplified Schmidt model. A single clock ratio does not independently determine nuclear magnetic moments, alpha, the proton gyromagnetic factor or their separate drifts. No temporal-variation bound is admitted.",
        "The corrected frequency is a finite source experiment relative to realized Cs references with nonzero uncertainty. The exact9,192,631,770 Hz Cs assignment defines the unit, while apparatus accuracy, residual shifts, statistical stability and campaign integration remain empirical questions.",
        "The selected result concerns electronic-ground-state microwave Ramsey spectroscopy and servo stabilization; it does not measure Cs7d3/2 A,B,C, a new nuclear moment, all hyperfine transitions or a universal linewidth/clock-accuracy theorem.",
        "The source uses multiple clocks with a shared flywheel and a dual fountain that alternates species. Their common reference and timing dependencies must be retained; neither every plotted point nor the flywheel is an independent replication.",
        "No temporal drift or fundamental-constant bound is adopted: inherited sensitivity calculations and nuclear-model assumptions are separate from the2002 frequency result. The abstract/Equation3 positive0.2 versus final-summary negative0.2 drift sign is not silently adjudicated or copied as a new result."
      ],
      "readExtent": "full-published-four-page-text-selected-2002-clock-result",
      "reviewedLocators": [
        "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
        "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
        "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.90.150801",
      "correctionCheck": "Published18April2003 four-page text and DOI identity checked; selected2002 frequency agrees with authorv1, whose generated2018 Dated line is not a new experiment. Drift-sign inconsistency is outside admission, not repaired. No explicit erratum found in the limited check. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "herd2021-hyperfine-formalism",
      "kind": "research-publication",
      "title": "Absolute frequency measurement of the6D5/2 level of neutral133Cs using two-photon spectroscopy",
      "authors": [
        "M. T. Herd",
        "E. C. Cook",
        "W. D. Williams"
      ],
      "year": 2021,
      "doi": "10.1103/PhysRevA.104.042812",
      "url": "https://link.aps.org/accepted/10.1103/PhysRevA.104.042812",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-publisher-accepted-formal-hyperfine-passages",
        "locators": [
          "Publisher-hosted accepted manuscript pages6-7 (PDF pages7-8 including CHORUS cover), SectionIII, Equations2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2"
        ],
        "limit": "Read accepted-manuscript scientific pages6-7, specifically Equations2-3 and the following angular-momentum and J=1/2 paragraph; the CHORUS cover is not a scientific page. This is a selected formal source only: no6D5/2 empirical result, independent study, absolute-frequency calibration, Lorentzian fit or experimental accuracy claim is admitted. The accepted manuscript is dated29September2021 and the related publication19October2021; no complete final-text identity is asserted. No explicit correction was found in the limited check. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
      }
    },
    {
      "id": "rahaman2022-cs-hyperfine",
      "kind": "research-publication",
      "title": "High-precision measurement of the hyperfine splitting and ac Stark shift of the7d2D3/2 state in atomic cesium",
      "authors": [
        "Bubai Rahaman",
        "Sourav Dutta"
      ],
      "year": 2022,
      "doi": "10.1103/PhysRevA.106.042811",
      "url": "https://arxiv.org/pdf/2210.01481v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-original-author-version-formalism-and-superseded-table",
        "locators": [
          "Author arXiv2210.01481v1 page7, SectionIV and Equations1-6: state-specific first-order A,B,C interval parametrization; original fitted values are superseded by the2024 erratum",
          "Author arXiv2210.01481v1 pages1-2 and7-8, abstract and original hyperfine table/discrepancy discussion, read only to identify the superseded values and their state/fit context"
        ],
        "limit": "Read the4October2022 authorv1 selected introduction/state assignments and SectionIV formalism, old table and discrepancy discussion; visually checked the page7 equations. The actual2024 publisher erratum replaces original TablesI-II using new2024 measurements. The old abstract A=7.3509(9)MHz and B=-0.041(8)MHz are not current admitted values. No separate2022 study, old spectra reanalysis, ac Stark coefficient or complete original-paper review is created. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
      }
    },
    {
      "id": "rahaman2024-cs-hyperfine",
      "kind": "research-publication",
      "title": "Observation of quantum interference of optical transition pathways in Doppler-free two-photon spectroscopy and implications for precision measurements",
      "authors": [
        "Bubai Rahaman",
        "Sid C. Wright",
        "Sourav Dutta"
      ],
      "year": 2024,
      "doi": "10.1103/PhysRevA.109.042820",
      "url": "https://pure.mpg.de/rest/items/item_3588733_5/component/file_3589797/content",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "published-main-text-experimental-appendix-and-selected-interference-formalism",
        "locators": [
          "Published pages042820-1 to042820-3, SectionsI-II and Figures1-2, and AppendixA on042820-5 to042820-6: Cs6s1/2 to7d3/2 fluorescence acquisition, ground-state selections, polarization/detection geometry and finite collection aperture",
          "Published pages042820-2 to042820-4, SectionsII-III and Figures2,4: independent-Voigt residuals, angle-dependent apparent splittings, coherent-pathway line-shape model and measured HFS supplied to simulations",
          "Published pages042820-3 to042820-5, SectionsIII-IV and TableI: partially reduced angular dependence, remaining geometry uncertainty, stated systematics, inherited second-order corrections and revised7d3/2 coupling constants",
          "Published page042820-6, AppendixB, Figure7 and EquationsB1-B4: selected amplitude sum, excitation/detection axes, electronic intermediate-state and broadening assumptions; later derivation not fully reviewed"
        ],
        "limit": "Read the actual institutional version of record main text042820-1 through5, AppendixA5-6 and selected AppendixB6; visually checked Figure2, TableI and acquisition geometry. The8-page published identity/date22April2024 agrees with the DOI record. AppendixB7-8 and the full published Supplemental Material were not fully read; publisher supplemental endpoints returned401. The source includes inherited second-order corrections whose original calculations were not newly read. Admit only7d3/2 selected source-reported intervals/couplings and interference control, not7d5/2 results, an independently reproduced HFS prediction, complete fit covariance, precise nuclear octupole moment or an operating7D optical clock. The actual2024 erratum of the2022 paper is separately read and does not constitute another experiment. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
      }
    },
    {
      "id": "rahaman2024-hyperfine-erratum",
      "kind": "research-publication",
      "title": "Erratum: High-precision measurement of the hyperfine splitting and ac Stark shift of the7d2D3/2 state in atomic cesium [Phys. Rev. A106,042811(2022)]",
      "authors": [
        "Bubai Rahaman",
        "Sourav Dutta"
      ],
      "year": 2024,
      "doi": "10.1103/PhysRevA.109.049904",
      "url": "https://journals.aps.org/pra/pdf/10.1103/PhysRevA.109.049904",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-one-page-correction",
        "locators": [
          "Complete published page049904-1, replacement TablesI-II and opening explanation: new2024 measurements and quantum interference replace2022 hyperfine intervals and A,B,C constants"
        ],
        "limit": "Read and visually checked the complete one-page publisher erratum, published22April2024. It explicitly replaces2022 TablesI-II using the new Rahaman/Wright/Dutta2024 measurements; neither an empty registry relation nor the unchanged original abstract overrides this correction. The erratum is a correction/secondary presentation of that same2024 experiment, not a third empirical context or independent replication. Parentheses are retained as printed source uncertainties; no new covariance or confidence coverage is reconstructed. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
      }
    },
    {
      "id": "marion2003-rb-cs-fountains",
      "kind": "research-publication",
      "title": "Search for Variations of Fundamental Constants using Atomic Fountain Clocks",
      "authors": [
        "H. Marion",
        "F. Pereira Dos Santos",
        "M. Abgrall",
        "S. Zhang",
        "Y. Sortais",
        "S. Bize",
        "I. Maksimovic",
        "D. Calonico",
        "J. Grünert",
        "C. Mandache",
        "P. Lemonde",
        "G. Santarelli",
        "Ph. Laurent",
        "A. Clairon",
        "C. Salomon"
      ],
      "year": 2003,
      "doi": "10.1103/PhysRevLett.90.150801",
      "url": "https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevLett.90.150801/fulltext",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-four-page-text-selected-2002-clock-result",
        "locators": [
          "Published pages150801-1 to150801-2, fountain-operation paragraphs and Figures1-2: electronic-ground-state Cs/Rb, mF=0 selection, two Ramsey interactions, state-population fluorescence, digital servo and shared hydrogen-maser flywheel",
          "Published pages150801-2 to150801-3, TableI and Equations1-2:2002 Rb frequency relative to average Cs, statistical versus systematic uncertainty, conventional1999 reference and fractional frequency-shift corrections",
          "Published pages150801-3 to150801-4, Equations4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission"
        ],
        "limit": "Read all four published pages150801-1 through4 through the publisher full-text extraction. Visually checked all four author arXivphysics/0212112v1 pages for the same preparation, TableI and Equation2; its generated Dated line2018 is not the2003 publication date or a new experiment. The selected2002 frequency agrees between those reviewed passages; complete version identity is not asserted. The shared-maser/alternating dual-fountain sampling and historical shift budget remain explicit. The abstract/Equation3 positive0.2 versus summary negative0.2 drift sign is outside admission; no temporal-drift or fundamental-constant bound is newly adopted. Inherited electronic/nuclear sensitivity calculations and underlying1999/2000 measurements were not independently reviewed or cloned. No explicit erratum was found in the limited check. DOI registry and primary publisher title, authors, journal, volume, issue, article and publication date checked on2026-10-19. The registry relation field is empty; this does not establish absence of corrections. Limited title/DOI/publisher searches are not an exhaustive later-literature review."
      }
    },
    {
      "id": "bipm2026-si-hyperfine-second",
      "kind": "research-publication",
      "title": "The International System of Units (SI),9th edition2019, version4.01 June2026",
      "authors": [
        "Bureau International des Poids et Mesures"
      ],
      "year": 2026,
      "doi": "10.59161/AUEZ1291",
      "url": "https://www.bipm.org/documents/20126/41483022/SI-Brochure-9-EN.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-current-official-definition-and-historical-state-declaration",
        "locators": [
          "SI Brochure9th edition2019, version4.01 June2026, printed pages123-126 (English PDF pages13-16), defining-constant table and Section2.3.1 The second: exact assigned unperturbed Cs133 hyperfine frequency and isolated-atom external-field boundary",
          "SI Brochure9th edition2019, version4.01 June2026, printed page162 (English PDF page52), Appendix1 CIPM1964 declaration: ground2S1/2 F=4,M=0 to F=3,M=0 frequency-standard transition"
        ],
        "limit": "Read the cover/version, defining-constant/second passages on printed123-126 and the selected historical CIPM declaration on162; visually checked the exact second definition and state labels. This official publication is normative primary evidence for a definition, not an experimental study or a full102-page review. The official page explicitly cites2026,9th edition2019 revisedJune2026, version4.01. Exact assigned frequency is distinct from uncertainty of a finite clock realization. No secondary-frequency table, new realization protocol or updated calibration of the historical2002 fountain result is admitted."
      }
    }
  ]
};

/** Keep state-specific couplings, spectral interference and clock realization distinct. */
export function validateHyperfineContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Hyperfine structure ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
