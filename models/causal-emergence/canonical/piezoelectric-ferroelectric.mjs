import assert from "node:assert/strict";

export const PIEZOELECTRIC_FERROELECTRIC_CHECKS = new Map();
export const PIEZOELECTRIC_FERROELECTRIC_ANALYTICAL_SOURCES = new Map();
export const PIEZOELECTRIC_FERROELECTRIC_STUDY_TYPES = new Map([["ogi2006-quartz-piezoelectric", "primary-experiment"], ["fichtner2019-alscn-ferroelectric", "primary-experiment"]]);
export const PIEZOELECTRIC_FERROELECTRIC_ADMISSION = {
  "definitions": [
    [
      "phys:piezoelectric-tensor-conventions",
      "D-phys-piezoelectric-tensor-conventions"
    ],
    [
      "phys:ferroelectric-switching-boundary",
      "D-phys-ferroelectric-switching-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:piezoelectric-tensor-conventions-ferroelectric-switching-boundary",
      [
        "phys:piezoelectric-tensor-conventions",
        "phys:ferroelectric-switching-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "ogi2006-quartz-context",
      "M-phys-ogi2006-quartz-context",
      [
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "fichtner2019-alscn-context",
      "M-phys-fichtner2019-alscn-context",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ]
  ],
  "observations": [
    [
      "quartz-piezoelectric-response",
      "C-phys-quartz-piezoelectric-response",
      [
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "alscn-switching-evidence",
      "C-phys-alscn-switching-evidence",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "alscn-piezoelectric-inversion",
      "C-phys-alscn-piezoelectric-inversion",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "piezoelectric-ferroelectric-source-scope",
      "C-phys-piezoelectric-ferroelectric-source-scope",
      [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    ]
  ],
  "dependencies": [
    [
      "ogi2006-quartz-context-quartz-piezoelectric-response",
      "ogi2006-quartz-context",
      "quartz-piezoelectric-response",
      "M-phys-quartz-piezoelectric-response",
      "measurement-context"
    ],
    [
      "fichtner2019-alscn-context-alscn-switching-evidence",
      "fichtner2019-alscn-context",
      "alscn-switching-evidence",
      "M-phys-alscn-switching-evidence",
      "measurement-context"
    ],
    [
      "fichtner2019-alscn-context-alscn-piezoelectric-inversion",
      "fichtner2019-alscn-context",
      "alscn-piezoelectric-inversion",
      "M-phys-alscn-piezoelectric-inversion",
      "measurement-context"
    ],
    [
      "piezoelectric-tensor-conventions-quartz-piezoelectric-response",
      "piezoelectric-tensor-conventions",
      "quartz-piezoelectric-response",
      "M-phys-quartz-piezoelectric-response",
      "interpretation-dependency"
    ],
    [
      "ferroelectric-switching-boundary-alscn-switching-evidence",
      "ferroelectric-switching-boundary",
      "alscn-switching-evidence",
      "M-phys-alscn-switching-evidence",
      "interpretation-dependency"
    ],
    [
      "piezoelectric-tensor-conventions-alscn-piezoelectric-inversion",
      "piezoelectric-tensor-conventions",
      "alscn-piezoelectric-inversion",
      "M-phys-alscn-piezoelectric-inversion",
      "interpretation-dependency"
    ],
    [
      "alscn-switching-evidence-alscn-piezoelectric-inversion",
      "alscn-switching-evidence",
      "alscn-piezoelectric-inversion",
      "M-phys-alscn-piezoelectric-inversion",
      "interpretation-dependency"
    ],
    [
      "piezoelectric-tensor-conventions-piezoelectric-ferroelectric-source-scope",
      "piezoelectric-tensor-conventions",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "ferroelectric-switching-boundary-piezoelectric-ferroelectric-source-scope",
      "ferroelectric-switching-boundary",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "ogi2006-quartz-context-piezoelectric-ferroelectric-source-scope",
      "ogi2006-quartz-context",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "quartz-piezoelectric-response-piezoelectric-ferroelectric-source-scope",
      "quartz-piezoelectric-response",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "fichtner2019-alscn-context-piezoelectric-ferroelectric-source-scope",
      "fichtner2019-alscn-context",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "alscn-switching-evidence-piezoelectric-ferroelectric-source-scope",
      "alscn-switching-evidence",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ],
    [
      "alscn-piezoelectric-inversion-piezoelectric-ferroelectric-source-scope",
      "alscn-piezoelectric-inversion",
      "piezoelectric-ferroelectric-source-scope",
      "M-phys-piezoelectric-ferroelectric-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "ogi2006-quartz-piezoelectric",
    "fichtner2019-alscn-ferroelectric"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-ogi2006-quartz-context",
      [
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "M-phys-quartz-piezoelectric-response",
      [
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "C-phys-quartz-piezoelectric-response",
      [
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "M-phys-fichtner2019-alscn-context",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "M-phys-alscn-switching-evidence",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "C-phys-alscn-switching-evidence",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "M-phys-alscn-piezoelectric-inversion",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "C-phys-alscn-piezoelectric-inversion",
      [
        "fichtner2019-alscn-ferroelectric"
      ]
    ],
    [
      "M-phys-piezoelectric-ferroelectric-source-scope",
      [
        "dejong2015-piezoelectric-tensors",
        "fichtner2019-alscn-ferroelectric",
        "ogi2006-quartz-piezoelectric"
      ]
    ],
    [
      "C-phys-piezoelectric-ferroelectric-source-scope",
      [
        "dejong2015-piezoelectric-tensors",
        "fichtner2019-alscn-ferroelectric",
        "ogi2006-quartz-piezoelectric"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-piezoelectric-tensor-conventions",
      "kind": "review-finding",
      "statement": "For the declared isothermal uniform bulk linear response, the proper piezoelectric stress tensor is e_ijk=(partial D_i/partial strain_jk) at fixed E,T, equivalently -(partial stress_jk/partial E_i) at fixed strain,T. Its SI units are C/m^2. The piezoelectric strain tensor d relates strain to electric field at fixed stress,T or displacement D to stress at fixed E,T, with units m/V, equivalently C/N. Converting between e and d requires elastic compliance and matching tensor/shear conventions; they are not interchangeable numerical coefficients.",
      "scope": "Primary tensor definitions applied only under their declared thermodynamic and coordinate conditions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Nonzero uniform bulk linear piezoelectric response must be compatible with the actual point-group tensor constraints. Absence of inversion is not a proof that every noncentrosymmetric class, every tensor component or every prepared specimen has a nonzero response, spontaneous polarization or field-switchability.",
        "The fixed-E and fixed-strain elastic/dielectric conventions, temperature, axis handedness and contracted shear factors are part of the definition. Intrinsic bulk coefficients and substrate-constrained effective thin-film coefficients are different quantities.",
        "This formal linear-response definition is not a measured coefficient, ferroelectric domain history or universal statement about all surfaces, gradients, defects, frequencies and nonlinear electromechanical mechanisms. No new full point-group classification or electronic-structure dataset is admitted."
      ]
    },
    {
      "id": "D-phys-ferroelectric-switching-boundary",
      "kind": "review-finding",
      "statement": "Distinguish a symmetry-allowed piezoelectric coupling, a spontaneous polarization state and demonstrated electric-field switching between stable polarization orientations. For the selected operational ferroelectric classification, the applied field must reversibly change the polarization state within the available breakdown and preparation window. A polarization-electric-field hysteresis loop alone is insufficient: integrated current can contain dielectric charging, conduction, charge injection and electret contributions. Retain stated non-switching controls and independent polarity-sensitive observations.",
      "scope": "Operational classification boundary for finite prepared crystals and oriented polycrystalline films.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Spontaneous polarization and remanent or switched charge per electrode area are not automatically identical absolute bulk quantities. The source comparisons between zincblende and layered-hexagonal polarization references are inherited calculations, not newly reviewed or a direct measurement of pure AlN absolute polarization.",
        "A polar structure, a predicted double-well/barrier or a piezoelectric response alone does not demonstrate accessible reversible switching. Breakdown before switching does not prove absence of all polar states under every condition.",
        "A domain-averaged macroscopic response depends on preparation, electrodes, mechanical boundary conditions, texture and observation time. Crystal symmetry does not require a nonzero macroscopic vector in every multidomain or randomly oriented sample.",
        "The selected experiments do not directly image a time-resolved atomic switching trajectory, determine a universal Landau-Ginzburg functional or establish that every crystal requires a measured ferroelectric phase transition."
      ]
    },
    {
      "id": "M-phys-ogi2006-quartz-context",
      "kind": "method",
      "statement": "Use17 synthetic alpha-quartz specimens,15 from the source Z-growth regions and2 from X-growth regions, with source point group32 and dimensions about4.8 by5.2 by5.8 mm along the crystallographic axes. Measure free-vibration resonances on a needle-transducer tripod under approximately1 Pa vacuum at30 C, replacing each specimen between3 acquisitions. Use laser-Doppler displacement patterns for mode identification and72 identified resonance frequencies per specimen for a Rayleigh-Ritz inverse fit of6 elastic and2 piezoelectric coefficients. Supply the inherited fixed-strain dielectric ratios epsilon11/epsilon0=4.424 and epsilon33/epsilon0=4.632.",
      "scope": "One source experimental study with multiple quartz specimens and inherited dielectric inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The mechanical frequencies depend on combinations of piezoelectric and dielectric coefficients; the dielectric ratios are adopted averages of earlier literature, not independently measured by this acquisition. Those underlying publications were not newly read or cloned as independent studies.",
        "Seventeen specimens,72 resonance modes and3 replacement acquisitions per specimen are distinct sampling levels, not independent publications or a universal minimum number of carriers. Frequency reproducibility below0.001 percent is not an uncertainty of0.001 percent in e.",
        "The source inverse fit includes supplied dimensions, density, axes, dielectric input and basis truncation; piezoelectric sensitivities are small. Mode-shape agreement identifies modes and is part of the same inference chain, not an independent coefficient measurement.",
        "Reported coefficient signs retain the source axes/matrix convention. No independent absolute handedness, spontaneous-polarization direction or field-induced sign reversal is inferred from the quartz resonance fit.",
        "The source chooses a linear coupled model. No raw spectrum replay, new covariance, all-frequency response, switching experiment or measured ferroelectric transition is supplied."
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric"
      ]
    },
    {
      "id": "M-phys-quartz-piezoelectric-response",
      "kind": "method",
      "statement": "Infer the coupled elastic/piezoelectric coefficients from the identified resonance spectrum under the source dielectric, geometry, density and boundary inputs. Interpret the table averages and specimen scatter as distinct from frequency repeatability or a complete uncertainty budget. Keep source coordinate signs without promoting resonance response to polarization switching.",
      "scope": "Inference method for the selected quartz coefficients.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The mechanical frequencies depend on combinations of piezoelectric and dielectric coefficients; the dielectric ratios are adopted averages of earlier literature, not independently measured by this acquisition. Those underlying publications were not newly read or cloned as independent studies.",
        "Seventeen specimens,72 resonance modes and3 replacement acquisitions per specimen are distinct sampling levels, not independent publications or a universal minimum number of carriers. Frequency reproducibility below0.001 percent is not an uncertainty of0.001 percent in e.",
        "The source inverse fit includes supplied dimensions, density, axes, dielectric input and basis truncation; piezoelectric sensitivities are small. Mode-shape agreement identifies modes and is part of the same inference chain, not an independent coefficient measurement.",
        "Reported coefficient signs retain the source axes/matrix convention. No independent absolute handedness, spontaneous-polarization direction or field-induced sign reversal is inferred from the quartz resonance fit.",
        "The source chooses a linear coupled model. No raw spectrum replay, new covariance, all-frequency response, switching experiment or measured ferroelectric transition is supplied."
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric"
      ]
    },
    {
      "id": "C-phys-quartz-piezoelectric-response",
      "kind": "review-finding",
      "statement": "The source quartz resonance analysis reports averaged e11=0.151 C/m^2 and e14=-0.061 C/m^2 at30 C in its tensor/axis convention. TableI gives relative specimen standard deviations4.75 percent and17.8 percent, respectively. These conditional coupled-model coefficient estimates supply a finite piezoelectric example, not a newly measured spontaneous polarization or demonstrated ferroelectric switching.",
      "scope": "Finite source-reported quartz piezoelectric coefficient inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The coefficients retain inherited dielectric input and inverse-fit systematics. Specimen standard deviations are not standard errors of the mean, newly determined confidence intervals or a complete propagated measurement uncertainty.",
        "The present source differs from previous reported piezoelectric coefficients; the underlying measurements were not independently reviewed or pooled here. No precise agreement or universal quartz coefficient at all temperatures is asserted.",
        "The conclusion repeats the label e11 in its statement of the35-percent larger coefficient, whereas TableII and the earlier body identify e14. The selected table values and this printed-label discrepancy are retained; no new correction notice is manufactured.",
        "No nonlinear dielectric measurement, polarization hysteresis, switching lifetime, memory device or settled phonon-damping mechanism follows from the selected resonance coefficients."
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric"
      ]
    },
    {
      "id": "M-phys-fichtner2019-alscn-context",
      "kind": "method",
      "statement": "Use reactive-sputtered c-axis-oriented polycrystalline Al1-xScxN on oxidized Si with an AlN/Pt bottom electrode and patterned Pt top electrodes. The source series uses x=0.27 with400 nm thickness, x=0.32,0.36,0.40 with600 nm, and x=0.43 with1 micrometre. Acquire bipolar current loops at711 Hz and non-switching unipolar controls at711 and411 Hz for the modified leakage correction. The selected x=0.36 direct transverse response uses4-point bending and16 mm^2 electrodes; polarization reversal uses a0.1 Hz unipolar sine waveform reaching-200 V over60 s. Separate switched/as-deposited regions from that wafer undergo electrode removal with50 nm overetch and polarity-selective wet etching. Use the stated2 ms pulse sequence with short-circuited retention intervals for the finite switching/non-switching comparison.",
      "scope": "One author-version AlScN experimental study with explicit composition, geometry and control boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This publication contains multiple compositions, capacitors and readout preparations; they are not all the same specimen. The loop, coefficient, etch and retention observations remain one source study with distinct stated subsamples, not four independent replications.",
        "The loop correction uses5 successive current measurements:1 bipolar and4 non-switching unipolar sweeps across two frequencies, with intervening reversals. It assumes frequency-independent leakage and zero switching contribution in the repeated non-switching sweeps. Small high-field distortions remain; no perfect leakage cancellation or standard-PUND acquisition is asserted.",
        "The source reports coercive-field frequency dependence, which prevents use of ordinary dynamic leakage compensation on full switching loops. The modified controls and compensating current are not a separately measured spontaneous polarization.",
        "The author v2 is the actual full text read, not an obtained final publisher PDF. The paper structural interpretation and earlier barrier/polarization calculations are inherited inputs, not a new primary model study or time-resolved atom trajectory.",
        "The converse longitudinal strain measurement is substrate-sensitive: main text uses0.85 while SI gives0.83, with a14.22 pm/V small-signal estimate distinct from the main-text large-signal slopes. No quantitative longitudinal coefficient, full correction replay or silent reconciliation is admitted."
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "M-phys-alscn-switching-evidence",
      "kind": "method",
      "statement": "Interpret the corrected current-derived P-E response together with switching/non-switching controls, field-induced transverse piezoelectric sign reversal and polarity-selective etching after electrode removal. Distinguish this cross-check from treating a hysteresis loop alone as ferroelectric proof. Treat pulse retention as a finite-time prepared-state result with residual non-switching current retained.",
      "scope": "Finite multi-readout switching inference within the same AlScN study.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This publication contains multiple compositions, capacitors and readout preparations; they are not all the same specimen. The loop, coefficient, etch and retention observations remain one source study with distinct stated subsamples, not four independent replications.",
        "The loop correction uses5 successive current measurements:1 bipolar and4 non-switching unipolar sweeps across two frequencies, with intervening reversals. It assumes frequency-independent leakage and zero switching contribution in the repeated non-switching sweeps. Small high-field distortions remain; no perfect leakage cancellation or standard-PUND acquisition is asserted.",
        "The source reports coercive-field frequency dependence, which prevents use of ordinary dynamic leakage compensation on full switching loops. The modified controls and compensating current are not a separately measured spontaneous polarization.",
        "The author v2 is the actual full text read, not an obtained final publisher PDF. The paper structural interpretation and earlier barrier/polarization calculations are inherited inputs, not a new primary model study or time-resolved atom trajectory.",
        "The converse longitudinal strain measurement is substrate-sensitive: main text uses0.85 while SI gives0.83, with a14.22 pm/V small-signal estimate distinct from the main-text large-signal slopes. No quantitative longitudinal coefficient, full correction replay or silent reconciliation is admitted."
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "C-phys-alscn-switching-evidence",
      "kind": "review-finding",
      "statement": "The source AlScN series reports field-reversible polarization responses for its prepared x=0.27-0.43 films. At x=0.36 the combination of switched/as-deposited polarity-selective etching, transverse piezoelectric sign reversal and switching/non-switching pulse controls supports the source ferroelectric classification beyond a P-E loop alone. With the capacitor short-circuited between2 ms read pulses, the source finds no resolved loss attributable to back-switching over the tested interval up to10^5 s, while non-switching charge is not exactly zero.",
      "scope": "Source-reported finite field-switching evidence in prepared AlScN films.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The retained evidence is a finite prepared-film classification, not an in-situ movie of unit-cell reversal, proof that every grain switched, a complete atomic mechanism or an all-composition theorem. Etch controls suppress residual electrode masking and near-interface alternatives, rather than excluding every imaginable artifact.",
        "Current integration gives charge per electrode area under the stated leakage and reference conventions. Remanent polarization, switched charge and absolute bulk spontaneous polarization must not be silently equated; no pure-AlN absolute polarization or new Berry-phase calculation is admitted.",
        "The10^5 s observation is a finite short-circuit pulse-retention test, not infinite retention, demonstrated memory-device endurance or a universal lifetime. The residual non-switching signal remains attributed by the source to dielectric/leakage contributions.",
        "Breakdown before switching at the source x=0.22 case is a preparation/field-window limit, not a universal composition threshold or evidence that all states of that material lack spontaneous polarization.",
        "The various controls are different readouts/subsamples within one publication. They are not newly acquired independent studies or a common fitted likelihood, and no raw-current/etch-image replay or new uncertainty budget is supplied."
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "M-phys-alscn-piezoelectric-inversion",
      "kind": "method",
      "statement": "Compare the source direct transverse charge/strain response in the same stated thin-film geometry before and after electrical polarization reversal. Retain the effective e31,f definition and its mechanical constraint, and do not substitute the separate longitudinal d33,f result or bulk single-crystal coefficients.",
      "scope": "Interpretation contract for finite direct piezoelectric sign reversal.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The transverse direct coefficient and longitudinal converse slopes have different tensor indices, units and mechanical constraints; substrate corrections and small-signal versus large-signal quantities cannot be silently combined.",
        "The source reports finite repeated and thermal-treatment checks. These are not direct measurements of an equilibrium Curie transition or evidence for an unlimited device memory."
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "C-phys-alscn-piezoelectric-inversion",
      "kind": "review-finding",
      "statement": "For the source Al0.64Sc0.36N thin-film direct bending preparation, the effective transverse coefficient e31,f changes from-2.90 C/m^2 as deposited to+2.76 C/m^2 after the stated one-minute room-temperature polarization reversal. This gives a finite electromechanical sign-control example in the switched film; it is not a longitudinal d33 coefficient or an unconstrained bulk-crystal constant.",
      "scope": "Finite source-reported effective transverse coefficient under stated film constraints.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The two response signs refer to the stated electrode, axis and loading convention before/after field reversal; they do not specify a universal absolute polarization sign or equate the film with quartz.",
        "The source thermal protocol uses consecutive5-minute treatments in ambient atmosphere. Retained response up to600 C is not an observed equilibrium Curie temperature at600 C; electrode degradation prevents higher-temperature electrical characterization.",
        "Reported repeated piezoelectric checks over30 weeks are finite response observations with limited storage details, not a continuously measured zero-field polarization trace, a new independent replication or device endurance qualification.",
        "No new error bars, substrate-model replay or quantitative longitudinal coefficient is supplied. The printed0.85/0.83 strain-correction discrepancy and separate small-signal estimate remain outside this direct transverse result."
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "M-phys-piezoelectric-ferroelectric-source-scope",
      "kind": "method",
      "statement": "Synthesize the primary tensor conventions, quartz coupled-response inference and AlScN switching/control evidence while retaining full preparation, inherited-input and source-version limits. Qualify the original symmetry, polarization, transition, microscopic-mode and memory assertions without turning catalogue defaults into physical laws.",
      "scope": "Literature-synthesis method for original card2.16.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted",
          "role": "method",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /16. Vocabulary, asserted parents, weights and minima only; not scientific or experimental support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete contexts: the quartz resonance inverse analysis with inherited dielectric constants and the AlScN author-version film study with distinct composition/readout subsamples, leakage controls, polarity checks and finite retention. Neither preparation replaces the other.",
        "Piezoelectric coupling, a spontaneous polarization state and demonstrated accessible field switching are distinct. Noncentrosymmetric symmetry compatibility alone, a dielectric loop alone or a predicted structural barrier does not establish ferroelectricity in every crystal.",
        "The finite sources retain actual crystalline order and electromechanical behavior. They do not establish that every piezoelectric material requires one long-range-order definition, a pre-observed thermodynamic phase transition or the particular alloy/hard-disk studies used for card2.9.",
        "Original parent2.9 weight0.55 and parent2.15 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. The quartz and AlScN specimens are supplied physical preparations.",
        "Original carrier group1/type0, N_min=N_crit=2 for both parents and N_sat=null are not measured onset populations. Tensor components, unit cells, grains,17 quartz specimens,72 modes and5 leakage-control sweeps count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/symmetry-governed-functional-attribute labels are provenance/display classification, not newly measured ontology or universal stage boundaries.",
        "Microscopic displacement modes and lattice symmetry are relevant interpretations, but no atom-resolved switching trajectory, universal soft-mode mechanism, complete Landau-Ginzburg functional, universality class or full phase diagram is newly derived.",
        "Hysteresis, dielectric nonlinearity, finite retained states and potential memory functionality require the stated drive, controls and observation window. No unlimited retention, device endurance, universal dielectric nonlinearity, exact600 C Curie point or all-domain switching is admitted.",
        "Generic original lattice/symmetry/Landau and coefficient/hysteresis evidence paragraphs have null DOI/URL and identify no actual reviewed study. The selected primary definitions and two finite experiments replace their evidential function only within the declared scope.",
        "The2015 tensor publication supplies selected formal conventions only, not941 newly admitted computations. Earlier quartz dielectric sources and AlScN structural/barrier/polarization-reference calculations are inherited unreviewed inputs, not cloned independent confirmations.",
        "Source-version and printed discrepancies remain explicit: quartz conclusion e11/e14 label, AlScN author2018 versus publication2019,0.85/0.83 longitudinal correction, and method-dependent polarization references. No numerical/data replay or silent source correction is claimed."
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "C-phys-piezoelectric-ferroelectric-source-scope",
      "kind": "review-finding",
      "statement": "The quartz study supplies a finite resonance-based piezoelectric tensor inference, while a separate oriented AlScN film study supports accessible polarization reversal through corrected electrical response and polarity-sensitive controls, with an effective transverse coefficient sign change. These retain actual electromechanical coupling and prepared ferroelectric states without equating symmetry compatibility, spontaneous polarization and demonstrated switching or asserting universal transition, memory or parent-population laws.",
      "scope": "Complete finite disposition of references/level-2.json /16.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted",
          "role": "supports",
          "note": "Actually read primary passage supports only the stated definition, finite preparation or source-reported inference; no raw-data or numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /16. Vocabulary, asserted parents, weights and minima only; not scientific or experimental support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete contexts: the quartz resonance inverse analysis with inherited dielectric constants and the AlScN author-version film study with distinct composition/readout subsamples, leakage controls, polarity checks and finite retention. Neither preparation replaces the other.",
        "Piezoelectric coupling, a spontaneous polarization state and demonstrated accessible field switching are distinct. Noncentrosymmetric symmetry compatibility alone, a dielectric loop alone or a predicted structural barrier does not establish ferroelectricity in every crystal.",
        "The finite sources retain actual crystalline order and electromechanical behavior. They do not establish that every piezoelectric material requires one long-range-order definition, a pre-observed thermodynamic phase transition or the particular alloy/hard-disk studies used for card2.9.",
        "Original parent2.9 weight0.55 and parent2.15 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. The quartz and AlScN specimens are supplied physical preparations.",
        "Original carrier group1/type0, N_min=N_crit=2 for both parents and N_sat=null are not measured onset populations. Tensor components, unit cells, grains,17 quartz specimens,72 modes and5 leakage-control sweeps count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/symmetry-governed-functional-attribute labels are provenance/display classification, not newly measured ontology or universal stage boundaries.",
        "Microscopic displacement modes and lattice symmetry are relevant interpretations, but no atom-resolved switching trajectory, universal soft-mode mechanism, complete Landau-Ginzburg functional, universality class or full phase diagram is newly derived.",
        "Hysteresis, dielectric nonlinearity, finite retained states and potential memory functionality require the stated drive, controls and observation window. No unlimited retention, device endurance, universal dielectric nonlinearity, exact600 C Curie point or all-domain switching is admitted.",
        "Generic original lattice/symmetry/Landau and coefficient/hysteresis evidence paragraphs have null DOI/URL and identify no actual reviewed study. The selected primary definitions and two finite experiments replace their evidential function only within the declared scope.",
        "The2015 tensor publication supplies selected formal conventions only, not941 newly admitted computations. Earlier quartz dielectric sources and AlScN structural/barrier/polarization-reference calculations are inherited unreviewed inputs, not cloned independent confirmations.",
        "Source-version and printed discrepancies remain explicit: quartz conclusion e11/e14 label, AlScN author2018 versus publication2019,0.85/0.83 longitudinal correction, and method-dependent polarization references. No numerical/data replay or silent source correction is claimed."
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:piezoelectric-tensor-conventions",
      "name": "State- and boundary-specific piezoelectric tensor convention",
      "kind": "definition",
      "description": "For the declared isothermal uniform bulk linear response, the proper piezoelectric stress tensor is e_ijk=(partial D_i/partial strain_jk) at fixed E,T, equivalently -(partial stress_jk/partial E_i) at fixed strain,T. Its SI units are C/m^2. The piezoelectric strain tensor d relates strain to electric field at fixed stress,T or displacement D to stress at fixed E,T, with units m/V, equivalently C/N. Converting between e and d requires elastic compliance and matching tensor/shear conventions; they are not interchangeable numerical coefficients.",
      "claimIds": [
        "D-phys-piezoelectric-tensor-conventions"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions"
        },
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification"
        }
      ],
      "openObligations": [
        "Nonzero uniform bulk linear piezoelectric response must be compatible with the actual point-group tensor constraints. Absence of inversion is not a proof that every noncentrosymmetric class, every tensor component or every prepared specimen has a nonzero response, spontaneous polarization or field-switchability.",
        "The fixed-E and fixed-strain elastic/dielectric conventions, temperature, axis handedness and contracted shear factors are part of the definition. Intrinsic bulk coefficients and substrate-constrained effective thin-film coefficients are different quantities.",
        "This formal linear-response definition is not a measured coefficient, ferroelectric domain history or universal statement about all surfaces, gradients, defects, frequencies and nonlinear electromechanical mechanisms. No new full point-group classification or electronic-structure dataset is admitted."
      ]
    },
    {
      "id": "phys:ferroelectric-switching-boundary",
      "name": "Spontaneous polarization and demonstrated switching distinction",
      "kind": "definition",
      "description": "Distinguish a symmetry-allowed piezoelectric coupling, a spontaneous polarization state and demonstrated electric-field switching between stable polarization orientations. For the selected operational ferroelectric classification, the applied field must reversibly change the polarization state within the available breakdown and preparation window. A polarization-electric-field hysteresis loop alone is insufficient: integrated current can contain dielectric charging, conduction, charge injection and electret contributions. Retain stated non-switching controls and independent polarity-sensitive observations.",
      "claimIds": [
        "D-phys-ferroelectric-switching-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion"
        }
      ],
      "openObligations": [
        "Spontaneous polarization and remanent or switched charge per electrode area are not automatically identical absolute bulk quantities. The source comparisons between zincblende and layered-hexagonal polarization references are inherited calculations, not newly reviewed or a direct measurement of pure AlN absolute polarization.",
        "A polar structure, a predicted double-well/barrier or a piezoelectric response alone does not demonstrate accessible reversible switching. Breakdown before switching does not prove absence of all polar states under every condition.",
        "A domain-averaged macroscopic response depends on preparation, electrodes, mechanical boundary conditions, texture and observation time. Crystal symmetry does not require a nonzero macroscopic vector in every multidomain or randomly oriented sample.",
        "The selected experiments do not directly image a time-resolved atomic switching trajectory, determine a universal Landau-Ginzburg functional or establish that every crystal requires a measured ferroelectric phase transition."
      ]
    },
    {
      "id": "phys:ogi2006-quartz-context",
      "name": "Ogi quartz resonance and mode-identification context",
      "kind": "context",
      "description": "Use17 synthetic alpha-quartz specimens,15 from the source Z-growth regions and2 from X-growth regions, with source point group32 and dimensions about4.8 by5.2 by5.8 mm along the crystallographic axes. Measure free-vibration resonances on a needle-transducer tripod under approximately1 Pa vacuum at30 C, replacing each specimen between3 acquisitions. Use laser-Doppler displacement patterns for mode identification and72 identified resonance frequencies per specimen for a Rayleigh-Ritz inverse fit of6 elastic and2 piezoelectric coefficients. Supply the inherited fixed-strain dielectric ratios epsilon11/epsilon0=4.424 and epsilon33/epsilon0=4.632.",
      "claimIds": [
        "M-phys-ogi2006-quartz-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients"
        }
      ],
      "openObligations": [
        "The mechanical frequencies depend on combinations of piezoelectric and dielectric coefficients; the dielectric ratios are adopted averages of earlier literature, not independently measured by this acquisition. Those underlying publications were not newly read or cloned as independent studies.",
        "Seventeen specimens,72 resonance modes and3 replacement acquisitions per specimen are distinct sampling levels, not independent publications or a universal minimum number of carriers. Frequency reproducibility below0.001 percent is not an uncertainty of0.001 percent in e.",
        "The source inverse fit includes supplied dimensions, density, axes, dielectric input and basis truncation; piezoelectric sensitivities are small. Mode-shape agreement identifies modes and is part of the same inference chain, not an independent coefficient measurement.",
        "Reported coefficient signs retain the source axes/matrix convention. No independent absolute handedness, spontaneous-polarization direction or field-induced sign reversal is inferred from the quartz resonance fit.",
        "The source chooses a linear coupled model. No raw spectrum replay, new covariance, all-frequency response, switching experiment or measured ferroelectric transition is supplied."
      ]
    },
    {
      "id": "phys:quartz-piezoelectric-response",
      "name": "Conditional quartz piezoelectric tensor inference",
      "kind": "scoped-process",
      "description": "The source quartz resonance analysis reports averaged e11=0.151 C/m^2 and e14=-0.061 C/m^2 at30 C in its tensor/axis convention. TableI gives relative specimen standard deviations4.75 percent and17.8 percent, respectively. These conditional coupled-model coefficient estimates supply a finite piezoelectric example, not a newly measured spontaneous polarization or demonstrated ferroelectric switching.",
      "claimIds": [
        "C-phys-quartz-piezoelectric-response"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result"
        }
      ],
      "openObligations": [
        "The coefficients retain inherited dielectric input and inverse-fit systematics. Specimen standard deviations are not standard errors of the mean, newly determined confidence intervals or a complete propagated measurement uncertainty.",
        "The present source differs from previous reported piezoelectric coefficients; the underlying measurements were not independently reviewed or pooled here. No precise agreement or universal quartz coefficient at all temperatures is asserted.",
        "The conclusion repeats the label e11 in its statement of the35-percent larger coefficient, whereas TableII and the earlier body identify e14. The selected table values and this printed-label discrepancy are retained; no new correction notice is manufactured.",
        "No nonlinear dielectric measurement, polarization hysteresis, switching lifetime, memory device or settled phonon-damping mechanism follows from the selected resonance coefficients."
      ]
    },
    {
      "id": "phys:fichtner2019-alscn-context",
      "name": "Fichtner AlScN prepared-capacitor switching context",
      "kind": "context",
      "description": "Use reactive-sputtered c-axis-oriented polycrystalline Al1-xScxN on oxidized Si with an AlN/Pt bottom electrode and patterned Pt top electrodes. The source series uses x=0.27 with400 nm thickness, x=0.32,0.36,0.40 with600 nm, and x=0.43 with1 micrometre. Acquire bipolar current loops at711 Hz and non-switching unipolar controls at711 and411 Hz for the modified leakage correction. The selected x=0.36 direct transverse response uses4-point bending and16 mm^2 electrodes; polarization reversal uses a0.1 Hz unipolar sine waveform reaching-200 V over60 s. Separate switched/as-deposited regions from that wafer undergo electrode removal with50 nm overetch and polarity-selective wet etching. Use the stated2 ms pulse sequence with short-circuited retention intervals for the finite switching/non-switching comparison.",
      "claimIds": [
        "M-phys-fichtner2019-alscn-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted"
        }
      ],
      "openObligations": [
        "This publication contains multiple compositions, capacitors and readout preparations; they are not all the same specimen. The loop, coefficient, etch and retention observations remain one source study with distinct stated subsamples, not four independent replications.",
        "The loop correction uses5 successive current measurements:1 bipolar and4 non-switching unipolar sweeps across two frequencies, with intervening reversals. It assumes frequency-independent leakage and zero switching contribution in the repeated non-switching sweeps. Small high-field distortions remain; no perfect leakage cancellation or standard-PUND acquisition is asserted.",
        "The source reports coercive-field frequency dependence, which prevents use of ordinary dynamic leakage compensation on full switching loops. The modified controls and compensating current are not a separately measured spontaneous polarization.",
        "The author v2 is the actual full text read, not an obtained final publisher PDF. The paper structural interpretation and earlier barrier/polarization calculations are inherited inputs, not a new primary model study or time-resolved atom trajectory.",
        "The converse longitudinal strain measurement is substrate-sensitive: main text uses0.85 while SI gives0.83, with a14.22 pm/V small-signal estimate distinct from the main-text large-signal slopes. No quantitative longitudinal coefficient, full correction replay or silent reconciliation is admitted."
      ]
    },
    {
      "id": "phys:alscn-switching-evidence",
      "name": "Prepared AlScN switching with polarity-sensitive controls",
      "kind": "scoped-process",
      "description": "The source AlScN series reports field-reversible polarization responses for its prepared x=0.27-0.43 films. At x=0.36 the combination of switched/as-deposited polarity-selective etching, transverse piezoelectric sign reversal and switching/non-switching pulse controls supports the source ferroelectric classification beyond a P-E loop alone. With the capacitor short-circuited between2 ms read pulses, the source finds no resolved loss attributable to back-switching over the tested interval up to10^5 s, while non-switching charge is not exactly zero.",
      "claimIds": [
        "C-phys-alscn-switching-evidence"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response"
        }
      ],
      "openObligations": [
        "The retained evidence is a finite prepared-film classification, not an in-situ movie of unit-cell reversal, proof that every grain switched, a complete atomic mechanism or an all-composition theorem. Etch controls suppress residual electrode masking and near-interface alternatives, rather than excluding every imaginable artifact.",
        "Current integration gives charge per electrode area under the stated leakage and reference conventions. Remanent polarization, switched charge and absolute bulk spontaneous polarization must not be silently equated; no pure-AlN absolute polarization or new Berry-phase calculation is admitted.",
        "The10^5 s observation is a finite short-circuit pulse-retention test, not infinite retention, demonstrated memory-device endurance or a universal lifetime. The residual non-switching signal remains attributed by the source to dielectric/leakage contributions.",
        "Breakdown before switching at the source x=0.22 case is a preparation/field-window limit, not a universal composition threshold or evidence that all states of that material lack spontaneous polarization.",
        "The various controls are different readouts/subsamples within one publication. They are not newly acquired independent studies or a common fitted likelihood, and no raw-current/etch-image replay or new uncertainty budget is supplied."
      ]
    },
    {
      "id": "phys:alscn-piezoelectric-inversion",
      "name": "Conditional AlScN transverse piezoelectric sign reversal",
      "kind": "scoped-process",
      "description": "For the source Al0.64Sc0.36N thin-film direct bending preparation, the effective transverse coefficient e31,f changes from-2.90 C/m^2 as deposited to+2.76 C/m^2 after the stated one-minute room-temperature polarization reversal. This gives a finite electromechanical sign-control example in the switched film; it is not a longitudinal d33 coefficient or an unconstrained bulk-crystal constant.",
      "claimIds": [
        "C-phys-alscn-piezoelectric-inversion"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted"
        }
      ],
      "openObligations": [
        "The two response signs refer to the stated electrode, axis and loading convention before/after field reversal; they do not specify a universal absolute polarization sign or equate the film with quartz.",
        "The source thermal protocol uses consecutive5-minute treatments in ambient atmosphere. Retained response up to600 C is not an observed equilibrium Curie temperature at600 C; electrode degradation prevents higher-temperature electrical characterization.",
        "Reported repeated piezoelectric checks over30 weeks are finite response observations with limited storage details, not a continuously measured zero-field polarization trace, a new independent replication or device endurance qualification.",
        "No new error bars, substrate-model replay or quantitative longitudinal coefficient is supplied. The printed0.85/0.83 strain-correction discrepancy and separate small-signal estimate remain outside this direct transverse result."
      ]
    },
    {
      "id": "phys:piezoelectric-ferroelectric-source-scope",
      "name": "Scoped piezoelectric response and demonstrated ferroelectric switching",
      "kind": "scoped-process",
      "description": "The quartz study supplies a finite resonance-based piezoelectric tensor inference, while a separate oriented AlScN film study supports accessible polarization reversal through corrected electrical response and polarity-sensitive controls, with an effective transverse coefficient sign change. These retain actual electromechanical coupling and prepared ferroelectric states without equating symmetry compatibility, spontaneous polarization and demonstrated switching or asserting universal transition, memory or parent-population laws.",
      "claimIds": [
        "C-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions"
        },
        {
          "sourceId": "dejong2015-piezoelectric-tensors",
          "locator": "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients"
        },
        {
          "sourceId": "ogi2006-quartz-piezoelectric",
          "locator": "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response"
        },
        {
          "sourceId": "fichtner2019-alscn-ferroelectric",
          "locator": "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Retain both complete contexts: the quartz resonance inverse analysis with inherited dielectric constants and the AlScN author-version film study with distinct composition/readout subsamples, leakage controls, polarity checks and finite retention. Neither preparation replaces the other.",
        "Piezoelectric coupling, a spontaneous polarization state and demonstrated accessible field switching are distinct. Noncentrosymmetric symmetry compatibility alone, a dielectric loop alone or a predicted structural barrier does not establish ferroelectricity in every crystal.",
        "The finite sources retain actual crystalline order and electromechanical behavior. They do not establish that every piezoelectric material requires one long-range-order definition, a pre-observed thermodynamic phase transition or the particular alloy/hard-disk studies used for card2.9.",
        "Original parent2.9 weight0.55 and parent2.15 weight0.45, each direction[1], modes[1], necessary/dependency10/arising, are catalogue assertions rather than measured causal fractions or universal formation histories. The quartz and AlScN specimens are supplied physical preparations.",
        "Original carrier group1/type0, N_min=N_crit=2 for both parents and N_sat=null are not measured onset populations. Tensor components, unit cells, grains,17 quartz specimens,72 modes and5 leakage-control sweeps count different domains.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/symmetry-governed-functional-attribute labels are provenance/display classification, not newly measured ontology or universal stage boundaries.",
        "Microscopic displacement modes and lattice symmetry are relevant interpretations, but no atom-resolved switching trajectory, universal soft-mode mechanism, complete Landau-Ginzburg functional, universality class or full phase diagram is newly derived.",
        "Hysteresis, dielectric nonlinearity, finite retained states and potential memory functionality require the stated drive, controls and observation window. No unlimited retention, device endurance, universal dielectric nonlinearity, exact600 C Curie point or all-domain switching is admitted.",
        "Generic original lattice/symmetry/Landau and coefficient/hysteresis evidence paragraphs have null DOI/URL and identify no actual reviewed study. The selected primary definitions and two finite experiments replace their evidential function only within the declared scope.",
        "The2015 tensor publication supplies selected formal conventions only, not941 newly admitted computations. Earlier quartz dielectric sources and AlScN structural/barrier/polarization-reference calculations are inherited unreviewed inputs, not cloned independent confirmations.",
        "Source-version and printed discrepancies remain explicit: quartz conclusion e11/e14 label, AlScN author2018 versus publication2019,0.85/0.83 longitudinal correction, and method-dependent polarization references. No numerical/data replay or silent source correction is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:piezoelectric-tensor-conventions-ferroelectric-switching-boundary",
      "source": "phys:piezoelectric-tensor-conventions",
      "target": "phys:ferroelectric-switching-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A specified electromechanical coupling does not by itself demonstrate a stable spontaneous state or accessible reversible switching.",
      "claimIds": [
        "D-phys-ferroelectric-switching-boundary"
      ]
    },
    {
      "id": "physics:ogi2006-quartz-context-quartz-piezoelectric-response",
      "source": "phys:ogi2006-quartz-context",
      "target": "phys:quartz-piezoelectric-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, boundary conditions and controls delimit this source-reported inference.",
      "claimIds": [
        "M-phys-quartz-piezoelectric-response"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric"
      ]
    },
    {
      "id": "physics:fichtner2019-alscn-context-alscn-switching-evidence",
      "source": "phys:fichtner2019-alscn-context",
      "target": "phys:alscn-switching-evidence",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, boundary conditions and controls delimit this source-reported inference.",
      "claimIds": [
        "M-phys-alscn-switching-evidence"
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:fichtner2019-alscn-context-alscn-piezoelectric-inversion",
      "source": "phys:fichtner2019-alscn-context",
      "target": "phys:alscn-piezoelectric-inversion",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete stated acquisition, boundary conditions and controls delimit this source-reported inference.",
      "claimIds": [
        "M-phys-alscn-piezoelectric-inversion"
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:piezoelectric-tensor-conventions-quartz-piezoelectric-response",
      "source": "phys:piezoelectric-tensor-conventions",
      "target": "phys:quartz-piezoelectric-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared response or switching criterion prevents conflating distinct coefficients, evidence roles or polarization claims.",
      "claimIds": [
        "M-phys-quartz-piezoelectric-response"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric"
      ]
    },
    {
      "id": "physics:ferroelectric-switching-boundary-alscn-switching-evidence",
      "source": "phys:ferroelectric-switching-boundary",
      "target": "phys:alscn-switching-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared response or switching criterion prevents conflating distinct coefficients, evidence roles or polarization claims.",
      "claimIds": [
        "M-phys-alscn-switching-evidence"
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:piezoelectric-tensor-conventions-alscn-piezoelectric-inversion",
      "source": "phys:piezoelectric-tensor-conventions",
      "target": "phys:alscn-piezoelectric-inversion",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared response or switching criterion prevents conflating distinct coefficients, evidence roles or polarization claims.",
      "claimIds": [
        "M-phys-alscn-piezoelectric-inversion"
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:alscn-switching-evidence-alscn-piezoelectric-inversion",
      "source": "phys:alscn-switching-evidence",
      "target": "phys:alscn-piezoelectric-inversion",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The response before and after reversal belongs to the same source study and stated film preparation; this is shared interpretation, not an independent replication or universal causal edge.",
      "claimIds": [
        "M-phys-alscn-piezoelectric-inversion"
      ],
      "contextIds": [
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:piezoelectric-tensor-conventions-piezoelectric-ferroelectric-source-scope",
      "source": "phys:piezoelectric-tensor-conventions",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:ferroelectric-switching-boundary-piezoelectric-ferroelectric-source-scope",
      "source": "phys:ferroelectric-switching-boundary",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:ogi2006-quartz-context-piezoelectric-ferroelectric-source-scope",
      "source": "phys:ogi2006-quartz-context",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:quartz-piezoelectric-response-piezoelectric-ferroelectric-source-scope",
      "source": "phys:quartz-piezoelectric-response",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:fichtner2019-alscn-context-piezoelectric-ferroelectric-source-scope",
      "source": "phys:fichtner2019-alscn-context",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:alscn-switching-evidence-piezoelectric-ferroelectric-source-scope",
      "source": "phys:alscn-switching-evidence",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    },
    {
      "id": "physics:alscn-piezoelectric-inversion-piezoelectric-ferroelectric-source-scope",
      "source": "phys:alscn-piezoelectric-inversion",
      "target": "phys:piezoelectric-ferroelectric-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named definition, complete preparation or conditional result constrains the joint literature interpretation with both full source contexts retained.",
      "claimIds": [
        "M-phys-piezoelectric-ferroelectric-source-scope"
      ],
      "contextIds": [
        "ogi2006-quartz-piezoelectric",
        "fichtner2019-alscn-ferroelectric"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:piezoelectric-tensor-conventions",
      "role": "definition",
      "denotes": "State- and boundary-specific piezoelectric tensor convention under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-piezoelectric-tensor-conventions"
      ]
    },
    {
      "nodeId": "phys:ferroelectric-switching-boundary",
      "role": "definition",
      "denotes": "Spontaneous polarization and demonstrated switching distinction under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ferroelectric-switching-boundary"
      ]
    },
    {
      "nodeId": "phys:ogi2006-quartz-context",
      "role": "experimental-context",
      "denotes": "Ogi quartz resonance and mode-identification context under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ogi2006-quartz-context"
      ]
    },
    {
      "nodeId": "phys:quartz-piezoelectric-response",
      "role": "scoped-phenomenon",
      "denotes": "Conditional quartz piezoelectric tensor inference under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-quartz-piezoelectric-response"
      ]
    },
    {
      "nodeId": "phys:fichtner2019-alscn-context",
      "role": "experimental-context",
      "denotes": "Fichtner AlScN prepared-capacitor switching context under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-fichtner2019-alscn-context"
      ]
    },
    {
      "nodeId": "phys:alscn-switching-evidence",
      "role": "scoped-phenomenon",
      "denotes": "Prepared AlScN switching with polarity-sensitive controls under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-alscn-switching-evidence"
      ]
    },
    {
      "nodeId": "phys:alscn-piezoelectric-inversion",
      "role": "scoped-phenomenon",
      "denotes": "Conditional AlScN transverse piezoelectric sign reversal under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-alscn-piezoelectric-inversion"
      ]
    },
    {
      "nodeId": "phys:piezoelectric-ferroelectric-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped piezoelectric response and demonstrated ferroelectric switching under specified state, tensor convention and finite experimental preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-piezoelectric-ferroelectric-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "ogi2006-quartz-piezoelectric",
      "sourceId": "ogi2006-quartz-piezoelectric",
      "studyType": "primary-experiment",
      "doi": "10.1063/1.2335684",
      "journal": "Journal of Applied Physics",
      "volume": "100",
      "issue": "5",
      "pages": "053511-1-053511-7",
      "system": "Finite synthetic alpha-quartz specimens under specified vacuum, temperature and tensor conventions",
      "preparation": "Use17 synthetic alpha-quartz specimens,15 from the source Z-growth regions and2 from X-growth regions, with source point group32 and dimensions about4.8 by5.2 by5.8 mm along the crystallographic axes. Measure free-vibration resonances on a needle-transducer tripod under approximately1 Pa vacuum at30 C, replacing each specimen between3 acquisitions. Use laser-Doppler displacement patterns for mode identification and72 identified resonance frequencies per specimen for a Rayleigh-Ritz inverse fit of6 elastic and2 piezoelectric coefficients. Supply the inherited fixed-strain dielectric ratios epsilon11/epsilon0=4.424 and epsilon33/epsilon0=4.632.",
      "observable": "Mechanical resonance frequencies and laser-Doppler mode shapes; piezoelectric coefficients inferred with supplied dielectric input.",
      "finding": "The source quartz resonance analysis reports averaged e11=0.151 C/m^2 and e14=-0.061 C/m^2 at30 C in its tensor/axis convention. TableI gives relative specimen standard deviations4.75 percent and17.8 percent, respectively. These conditional coupled-model coefficient estimates supply a finite piezoelectric example, not a newly measured spontaneous polarization or demonstrated ferroelectric switching.",
      "limitations": [
        "The mechanical frequencies depend on combinations of piezoelectric and dielectric coefficients; the dielectric ratios are adopted averages of earlier literature, not independently measured by this acquisition. Those underlying publications were not newly read or cloned as independent studies.",
        "Seventeen specimens,72 resonance modes and3 replacement acquisitions per specimen are distinct sampling levels, not independent publications or a universal minimum number of carriers. Frequency reproducibility below0.001 percent is not an uncertainty of0.001 percent in e.",
        "The source inverse fit includes supplied dimensions, density, axes, dielectric input and basis truncation; piezoelectric sensitivities are small. Mode-shape agreement identifies modes and is part of the same inference chain, not an independent coefficient measurement.",
        "Reported coefficient signs retain the source axes/matrix convention. No independent absolute handedness, spontaneous-polarization direction or field-induced sign reversal is inferred from the quartz resonance fit.",
        "The source chooses a linear coupled model. No raw spectrum replay, new covariance, all-frequency response, switching experiment or measured ferroelectric transition is supplied.",
        "The coefficients retain inherited dielectric input and inverse-fit systematics. Specimen standard deviations are not standard errors of the mean, newly determined confidence intervals or a complete propagated measurement uncertainty.",
        "The present source differs from previous reported piezoelectric coefficients; the underlying measurements were not independently reviewed or pooled here. No precise agreement or universal quartz coefficient at all temperatures is asserted.",
        "The conclusion repeats the label e11 in its statement of the35-percent larger coefficient, whereas TableII and the earlier body identify e14. The selected table values and this printed-label discrepancy are retained; no new correction notice is manufactured.",
        "No nonlinear dielectric measurement, polarization hysteresis, switching lifetime, memory device or settled phonon-damping mechanism follows from the selected resonance coefficients."
      ],
      "readExtent": "full-published-main-text-selected-quartz-piezoelectric-result",
      "reviewedLocators": [
        "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
        "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
        "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.2335684",
      "correctionCheck": "Institutional version-of-record title/date and DOI identity checked; online8September2006 differs from registry issue1September. Conclusion duplicated e11 label retained with TableII/body distinction. DOI-registry title, authors, journal, volume, issue and article identity checked. Registry relation is empty and no update-to item was returned. Limited DOI/title/publisher correction searches found no explicit erratum; not an exhaustive later-literature audit."
    },
    {
      "id": "fichtner2019-alscn-ferroelectric",
      "sourceId": "fichtner2019-alscn-ferroelectric",
      "studyType": "primary-experiment",
      "doi": "10.1063/1.5084945",
      "journal": "Journal of Applied Physics",
      "volume": "125",
      "issue": "11",
      "pages": "114103",
      "system": "Prepared c-axis-oriented polycrystalline AlScN capacitor series with explicit composition/readout subsamples",
      "preparation": "Use reactive-sputtered c-axis-oriented polycrystalline Al1-xScxN on oxidized Si with an AlN/Pt bottom electrode and patterned Pt top electrodes. The source series uses x=0.27 with400 nm thickness, x=0.32,0.36,0.40 with600 nm, and x=0.43 with1 micrometre. Acquire bipolar current loops at711 Hz and non-switching unipolar controls at711 and411 Hz for the modified leakage correction. The selected x=0.36 direct transverse response uses4-point bending and16 mm^2 electrodes; polarization reversal uses a0.1 Hz unipolar sine waveform reaching-200 V over60 s. Separate switched/as-deposited regions from that wafer undergo electrode removal with50 nm overetch and polarity-selective wet etching. Use the stated2 ms pulse sequence with short-circuited retention intervals for the finite switching/non-switching comparison.",
      "observable": "Corrected current loops, switching/non-switching pulse responses, direct transverse bending charge and polarity-selective etch contrast.",
      "finding": "The source AlScN series reports field-reversible polarization responses for its prepared x=0.27-0.43 films. At x=0.36 the combination of switched/as-deposited polarity-selective etching, transverse piezoelectric sign reversal and switching/non-switching pulse controls supports the source ferroelectric classification beyond a P-E loop alone. With the capacitor short-circuited between2 ms read pulses, the source finds no resolved loss attributable to back-switching over the tested interval up to10^5 s, while non-switching charge is not exactly zero. For the source Al0.64Sc0.36N thin-film direct bending preparation, the effective transverse coefficient e31,f changes from-2.90 C/m^2 as deposited to+2.76 C/m^2 after the stated one-minute room-temperature polarization reversal. This gives a finite electromechanical sign-control example in the switched film; it is not a longitudinal d33 coefficient or an unconstrained bulk-crystal constant.",
      "limitations": [
        "This publication contains multiple compositions, capacitors and readout preparations; they are not all the same specimen. The loop, coefficient, etch and retention observations remain one source study with distinct stated subsamples, not four independent replications.",
        "The loop correction uses5 successive current measurements:1 bipolar and4 non-switching unipolar sweeps across two frequencies, with intervening reversals. It assumes frequency-independent leakage and zero switching contribution in the repeated non-switching sweeps. Small high-field distortions remain; no perfect leakage cancellation or standard-PUND acquisition is asserted.",
        "The source reports coercive-field frequency dependence, which prevents use of ordinary dynamic leakage compensation on full switching loops. The modified controls and compensating current are not a separately measured spontaneous polarization.",
        "The author v2 is the actual full text read, not an obtained final publisher PDF. The paper structural interpretation and earlier barrier/polarization calculations are inherited inputs, not a new primary model study or time-resolved atom trajectory.",
        "The converse longitudinal strain measurement is substrate-sensitive: main text uses0.85 while SI gives0.83, with a14.22 pm/V small-signal estimate distinct from the main-text large-signal slopes. No quantitative longitudinal coefficient, full correction replay or silent reconciliation is admitted.",
        "The retained evidence is a finite prepared-film classification, not an in-situ movie of unit-cell reversal, proof that every grain switched, a complete atomic mechanism or an all-composition theorem. Etch controls suppress residual electrode masking and near-interface alternatives, rather than excluding every imaginable artifact.",
        "Current integration gives charge per electrode area under the stated leakage and reference conventions. Remanent polarization, switched charge and absolute bulk spontaneous polarization must not be silently equated; no pure-AlN absolute polarization or new Berry-phase calculation is admitted.",
        "The10^5 s observation is a finite short-circuit pulse-retention test, not infinite retention, demonstrated memory-device endurance or a universal lifetime. The residual non-switching signal remains attributed by the source to dielectric/leakage contributions.",
        "Breakdown before switching at the source x=0.22 case is a preparation/field-window limit, not a universal composition threshold or evidence that all states of that material lack spontaneous polarization.",
        "The various controls are different readouts/subsamples within one publication. They are not newly acquired independent studies or a common fitted likelihood, and no raw-current/etch-image replay or new uncertainty budget is supplied.",
        "The two response signs refer to the stated electrode, axis and loading convention before/after field reversal; they do not specify a universal absolute polarization sign or equate the film with quartz.",
        "The source thermal protocol uses consecutive5-minute treatments in ambient atmosphere. Retained response up to600 C is not an observed equilibrium Curie temperature at600 C; electrode degradation prevents higher-temperature electrical characterization.",
        "Reported repeated piezoelectric checks over30 weeks are finite response observations with limited storage details, not a continuously measured zero-field polarization trace, a new independent replication or device endurance qualification.",
        "No new error bars, substrate-model replay or quantitative longitudinal coefficient is supplied. The printed0.85/0.83 strain-correction discrepancy and separate small-signal estimate remain outside this direct transverse result."
      ],
      "readExtent": "author-arxiv-v2-main-text-and-selected-leakage-strain-supporting-information",
      "reviewedLocators": [
        "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations",
        "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
        "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
        "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
        "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
        "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.5084945",
      "correctionCheck": "Authorv2 26November2018 identity and related2019 publication checked. Publisher PDFs403; final-version textual identity not claimed. Printed longitudinal0.85/0.83 correction discrepancy retained without adjudication. DOI-registry title, authors, journal, volume, issue and article identity checked. Registry relation is empty and no update-to item was returned. Limited DOI/title/publisher correction searches found no explicit erratum; not an exhaustive later-literature audit."
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
      "id": "dejong2015-piezoelectric-tensors",
      "kind": "research-publication",
      "title": "A database to enable discovery and design of piezoelectric materials",
      "authors": [
        "Maarten de Jong",
        "Wei Chen",
        "Henry Geerlings",
        "Mark Asta",
        "Kristin Aslaug Persson"
      ],
      "year": 2015,
      "doi": "10.1038/sdata.2015.53",
      "url": "https://www.nature.com/articles/sdata201553",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-tensor-definition-and-symmetry-passages",
        "locators": [
          "Published pages2-3, Background and Summary and Definitions and computational settings, Equation1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
          "Published pages4-5, Figures2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay"
        ],
        "limit": "Read published pages2-5 and visually checked the derivative definitions and shear-convention discussion on2-3. Admission is formal definitions and component-symmetry boundaries only, not the941-material dataset, a new first-principles study, comparison to experiments or a full modern proper/improper-polarization derivation. Do not copy the page3 duplicated13,21 Voigt-index prose as a new canonical mapping. DOI metadata and publisher identity/date29September2015 agree; Crossmark says current. DOI-registry title, authors, journal, volume, issue and article identity checked. Registry relation is empty and no update-to item was returned. Limited DOI/title/publisher correction searches found no explicit erratum; not an exhaustive later-literature audit."
      }
    },
    {
      "id": "ogi2006-quartz-piezoelectric",
      "kind": "research-publication",
      "title": "Elastic, anelastic, and piezoelectric coefficients of α-quartz determined by resonance ultrasound spectroscopy",
      "authors": [
        "Hirotsugu Ogi",
        "Toshinobu Ohmori",
        "Nobutomo Nakamura",
        "Masahiko Hirao"
      ],
      "year": 2006,
      "doi": "10.1063/1.2335684",
      "url": "https://ir.library.osaka-u.ac.jp/repo/ouka/all/84224/JApplPhys_100_5_053511.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-main-text-selected-quartz-piezoelectric-result",
        "locators": [
          "Published pages053511-1 to053511-3, SectionsI-III, Equations1-4 and TableI: quartz point group32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
          "Published pages053511-3 to053511-6, Figures2-7 and TablesI-II: Rayleigh-Ritz inverse fit, piezoelectric sensitivity, specimen variation and selected averaged coefficients",
          "Published page053511-7, conclusion and preceding damping discussion: duplicated e11 label and unsettled damping interpretation, distinguished from the admitted tensor result"
        ],
        "limit": "Read all seven published scientific pages053511-1 through7 from the institutional version of record; the PDF cover page is repository metadata. Visually checked TablesI-II, tensor matrices and conclusion. Admit the resonance-based piezoelectric inference only, not a new dielectric measurement, all elastic/internal-friction outputs or a resolved phonon-damping mechanism. The conclusion repeats e11 in its35-percent comparison, while TableII/body identifies e14; use the stated table rows without silently repairing the source. Printed online8September2006 differs from registry issue/general1September. DOI-registry title, authors, journal, volume, issue and article identity checked. Registry relation is empty and no update-to item was returned. Limited DOI/title/publisher correction searches found no explicit erratum; not an exhaustive later-literature audit."
      }
    },
    {
      "id": "fichtner2019-alscn-ferroelectric",
      "kind": "research-publication",
      "title": "AlScN: A III-V semiconductor based ferroelectric",
      "authors": [
        "Simon Fichtner",
        "Niklas Wolff",
        "Fabian Lofink",
        "Lorenz Kienle",
        "Bernhard Wagner"
      ],
      "year": 2019,
      "doi": "10.1063/1.5084945",
      "url": "https://arxiv.org/pdf/1810.07968v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "author-arxiv-v2-main-text-and-selected-leakage-strain-supporting-information",
        "locators": [
          "Author arXiv1810.07968v2 pages2-3: switchable spontaneous polarization definition, wurtzite polarity and inherited barrier/reference calculations",
          "Author arXiv1810.07968v2 pages4-6, Experimental Details and Figure1: sputtered polycrystalline film series, thickness/composition, electrodes, voltage/frequency and polarization procedure",
          "Author arXiv1810.07968v2 pages14-17, Supporting Information Dynamic Leakage Current Compensation, Equations1-3 and FiguresS1-S3: five-measurement modified correction and remaining finite-conductance distortion",
          "Author arXiv1810.07968v2 pages9-12, Figures3-4 and polarity/retention discussion: matched switched/as-deposited regions, electrode-removal overetch, selective etching and finite short-circuit retention",
          "Author arXiv1810.07968v2 pages8-9, Figure2: direct transverse coefficient inversion, reported repeated measurements, temperature-step boundary and separate converse response",
          "Author arXiv1810.07968v2 page4 and Supporting Information pages17-18, Equations4-5: substrate-deformation correction and inconsistent printed0.85 versus0.83 factors; no quantitative longitudinal coefficient admitted"
        ],
        "limit": "Read author arXiv1810.07968v2 main text1-14 and selected SI14-18; visually checked the retained experimental figures, retention sequence and leakage/strain equations. The archive version is26November2018 corresponding to the2019 JAP125(11)114103 publication; publisher full PDFs returned403, so no final-text identity or full-SI reading is claimed. The main-text strain factor0.85 differs from SI0.83; no longitudinal coefficient is newly admitted or silently corrected. The extra structural/morphology SI and frequency sweep on another composition are not new results here. Registry online18March/print21March2019 retained separately. DOI-registry title, authors, journal, volume, issue and article identity checked. Registry relation is empty and no update-to item was returned. Limited DOI/title/publisher correction searches found no explicit erratum; not an exhaustive later-literature audit."
      }
    }
  ]
};

/** Keep symmetry-allowed tensor response, conditional quartz coefficients and controlled finite-film switching as distinct scientific propositions. */
export function validatePiezoelectricFerroelectricContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Piezoelectric-ferroelectric ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
