import assert from "node:assert/strict";

export const QUANTUM_REACTION_CHECKS = new Map();
export const QUANTUM_REACTION_ANALYTICAL_SOURCES = new Map();
export const QUANTUM_REACTION_STUDY_TYPES = new Map([["schreiner2008-matrix", "primary-experiment"], ["schreiner2008-reaction-path", "computational-analysis"]]);
export const QUANTUM_REACTION_ADMISSION = {
  "definitions": [
    [
      "phys:reaction-path-quantum-model",
      "D-phys-reaction-path-quantum-model"
    ],
    [
      "phys:isotope-kinetics-evidence-boundary",
      "D-phys-isotope-kinetics-evidence-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:molecular-binding-channel-boundary-reaction-path-quantum-model",
      [
        "phys:molecular-binding-channel-boundary",
        "phys:reaction-path-quantum-model"
      ]
    ],
    [
      "physics:reaction-path-quantum-model-isotope-kinetics-evidence-boundary",
      [
        "phys:reaction-path-quantum-model",
        "phys:isotope-kinetics-evidence-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "schreiner2008-matrix-context",
      "M-phys-schreiner2008-matrix-context",
      [
        "schreiner2008-matrix"
      ]
    ],
    [
      "schreiner2008-reaction-path-context",
      "M-phys-schreiner2008-reaction-path-context",
      [
        "schreiner2008-reaction-path"
      ]
    ]
  ],
  "observations": [
    [
      "schreiner2008-matrix-decay",
      "C-phys-schreiner2008-matrix-decay",
      [
        "schreiner2008-matrix"
      ]
    ],
    [
      "schreiner2008-reaction-path-prediction",
      "C-phys-schreiner2008-reaction-path-prediction",
      [
        "schreiner2008-reaction-path"
      ]
    ],
    [
      "quantum-reaction-source-scope",
      "C-phys-quantum-reaction-source-scope",
      [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    ]
  ],
  "dependencies": [
    [
      "schreiner2008-matrix-context-schreiner2008-matrix-decay",
      "schreiner2008-matrix-context",
      "schreiner2008-matrix-decay",
      "M-phys-schreiner2008-matrix-context",
      "measurement-context"
    ],
    [
      "schreiner2008-reaction-path-context-schreiner2008-reaction-path-prediction",
      "schreiner2008-reaction-path-context",
      "schreiner2008-reaction-path-prediction",
      "M-phys-schreiner2008-reaction-path-context",
      "computation-context"
    ],
    [
      "reaction-path-quantum-model-schreiner2008-reaction-path-prediction",
      "reaction-path-quantum-model",
      "schreiner2008-reaction-path-prediction",
      "M-phys-schreiner2008-reaction-path-context",
      "interpretation-dependency"
    ],
    [
      "schreiner2008-matrix-decay-quantum-reaction-source-scope",
      "schreiner2008-matrix-decay",
      "quantum-reaction-source-scope",
      "M-phys-quantum-reaction-source-scope",
      "interpretation-dependency"
    ],
    [
      "schreiner2008-reaction-path-prediction-quantum-reaction-source-scope",
      "schreiner2008-reaction-path-prediction",
      "quantum-reaction-source-scope",
      "M-phys-quantum-reaction-source-scope",
      "interpretation-dependency"
    ],
    [
      "isotope-kinetics-evidence-boundary-quantum-reaction-source-scope",
      "isotope-kinetics-evidence-boundary",
      "quantum-reaction-source-scope",
      "M-phys-quantum-reaction-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "schreiner2008-matrix",
    "schreiner2008-reaction-path"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-schreiner2008-matrix-context",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ],
    [
      "C-phys-schreiner2008-matrix-decay",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ],
    [
      "M-phys-schreiner2008-reaction-path-context",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ],
    [
      "C-phys-schreiner2008-reaction-path-prediction",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ],
    [
      "C-phys-quantum-reaction-source-scope",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ],
    [
      "M-phys-quantum-reaction-source-scope",
      [
        "schreiner2008-hcoh-supplement",
        "schreiner2008-hcoh-tunneling"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-reaction-path-quantum-model",
      "kind": "review-finding",
      "statement": "In the reviewed ground-singlet trans-H-C-OH to H2CO model, supply an electronic potential, an intrinsic reaction path, orthogonal vibrational modes and a declared initial vibrational energy. Zero-point energy changes vibrational state energies and energy-reference conventions; below-barrier transmission is a separate dynamical contribution estimated here by a reduced reaction-path Hamiltonian and WKB penetration. The reported 1220 cm^-1 reaction-mode wavenumber corresponds to zero-point energy h*c*nu_tilde/2 and barrier-attempt frequency c*nu_tilde, with consistent length units; a wavenumber is neither an energy nor a frequency in Hz by itself.",
      "scope": "Working model definition for the specific singlet hydroxymethylene rearrangement; supplied potential and reduced-coordinate dynamics, not a universal reaction generator.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This definition records the published reduced model. No explicit WKB integral formula, new potential, implementation, barrier fit or independent rate calculation is introduced.",
        "Zero-point shifts, tunnelling transmission, excited electronic-state dynamics and isotope substitution are distinct concepts. The selected dark reaction is not evidence for every proposed quantum-reaction mechanism.",
        "The harmonic/anharmonic energy references in Figure 4 and the separate Eckart-model inputs must be kept distinct. No unspecified barrier number is promoted to a universal activation energy."
      ]
    },
    {
      "id": "D-phys-isotope-kinetics-evidence-boundary",
      "kind": "review-finding",
      "statement": "An isotope-dependent infrared loss curve or reported first-order half-life is an observable under its stated preparation and detection conditions; a tunnelling mechanism additionally requires a specified reaction assignment and dynamical model. In this publication, temperature-limited dark kinetics, isotopologue comparison and a source calculation are combined in that interpretation. Deuterium non-decay without a stated observation window cannot supply a numerical deuterated half-life or k_H/k_D; a calculated lifetime is a separate model output.",
      "scope": "Evidence and interpretation boundary for the reviewed matrix experiment and its associated isotope calculation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Isotope substitution also changes zero-point energies and vibrational assignments; an isotope effect alone is not admitted as a unique tunnelling diagnostic.",
        "A finite low-temperature result does not establish failure of every transition-state model, a universal non-Arrhenius law or the dominance of tunnelling at all temperatures.",
        "First-order infrared band disappearance is not a direct image of a hydrogen trajectory or a count of barrier-crossing events."
      ]
    },
    {
      "id": "M-phys-schreiner2008-matrix-context",
      "kind": "method",
      "statement": "Generate hydroxymethylene by high-vacuum flash pyrolysis of glyoxylic acid at 1000 deg C and immediately co-condense the products with excess Ar, Kr, Xe or N2 on a cryogenic window. Unreacted precursor, CO2, formaldehyde and some CO are also present. Assign trans-H-C-OH and H-C-OD using infrared/UV observations and computed vibrational bands. For dark kinetics, shield external light and acquire infrared spectra every 30 min at the reported 11, 15 or 20 K settings, following the approximately 1050 and 1300 cm^-1 H-C-OH bands.",
      "scope": "Publication-specific mixed-product cryogenic matrix preparation and dark infrared acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No uncertainty intervals, replicate counts or detection limit are given in Supplementary Table 1; none is invented. Not-determined cells remain missing, not zero or interpolated.",
        "The deuterated observation window is not numerically stated, so no experimental D half-life, lower bound in years or numerical kinetic isotope ratio is inferred. Over 1200 yr belongs only to the separate calculation.",
        "The 435/470/500 nm irradiation tests and the two-minute 470 nm difference spectra probe a driven photochemical response and species assignment. They are not the shielded dark decay measurement.",
        "The sample is a product mixture in a cryogenic matrix, not a pure isolated-molecule gas. Infrared assignment and dilution arguments do not directly count individual tunnelling events, certify every initial quantum state or exclude every possible loss channel by direct observation.",
        "The reported matrix and temperature dependence does not establish a universal vacuum lifetime, a measured 0 K rate or a carrier-number threshold. No raw spectral refit or independent numerical replay was performed."
      ],
      "contextIds": [
        "schreiner2008-matrix"
      ]
    },
    {
      "id": "C-phys-schreiner2008-matrix-decay",
      "kind": "review-finding",
      "statement": "The source reports first-order H-C-OH loss and the following half-lives in hours: at 11 K Ar 1.8, Kr 2.0, Xe 2.3 and N2 7.0; at 15 K Ar 1.9; at 20 K Ar 1.7 and Kr 2.0. Other temperature/matrix entries in Supplementary Table 1 are explicitly not determined. H-C-OD infrared bands are reported unchanged for an unspecified extended observation period. The approximately two-hour summary applies to the reported noble-gas preparations, while the 11 K nitrogen matrix is slower by more than a factor of three.",
      "scope": "Reported H-C-OH dark first-order infrared decay at the seven stated matrix/temperature settings and qualitative H-C-OD non-decay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No uncertainty intervals, replicate counts or detection limit are given in Supplementary Table 1; none is invented. Not-determined cells remain missing, not zero or interpolated.",
        "The deuterated observation window is not numerically stated, so no experimental D half-life, lower bound in years or numerical kinetic isotope ratio is inferred. Over 1200 yr belongs only to the separate calculation.",
        "The 435/470/500 nm irradiation tests and the two-minute 470 nm difference spectra probe a driven photochemical response and species assignment. They are not the shielded dark decay measurement.",
        "The sample is a product mixture in a cryogenic matrix, not a pure isolated-molecule gas. Infrared assignment and dilution arguments do not directly count individual tunnelling events, certify every initial quantum state or exclude every possible loss channel by direct observation.",
        "The reported matrix and temperature dependence does not establish a universal vacuum lifetime, a measured 0 K rate or a carrier-number threshold. No raw spectral refit or independent numerical replay was performed."
      ],
      "contextIds": [
        "schreiner2008-matrix"
      ]
    },
    {
      "id": "M-phys-schreiner2008-reaction-path-context",
      "kind": "method",
      "statement": "Use the ground-electronic-singlet trans-H-C-OH to H2CO channel with AE-CCSD(T)/cc-pCVQZ stationary structures and focal-point energy corrections. Construct the intrinsic reaction path and orthogonal harmonic frequencies at AE-CCSD/cc-pCVTZ and refine path energies at AE-CCSD(T)/cc-pCVQZ. Apply a reduced reaction-path Hamiltonian with WKB transmission at the reaction-mode zero-point energy, using the 1220 cm^-1 reactant harmonic mode and its corresponding barrier-attempt frequency. The same procedure is applied to H-C-OD; an asymmetric Eckart calculation is a separate qualitative check.",
      "scope": "Supplied ground-singlet molecular channel, electronic-structure approximations and reduced barrier-transmission calculation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is the source-reported calculation associated with the same publication as the experiment; it is not an independent empirical confirmation or an independently reproduced numerical check.",
        "The calculation uses a reduced reaction-path approximation. The paper explicitly leaves full-dimensional quantum dynamics on a semi-global potential surface for future work; neither an exact full-dimensional rate nor a direct trajectory is admitted.",
        "No matrix-specific potential or environmental kinetic fit for all four hosts is supplied by this admission; the 7.0 h nitrogen result does not become a 2.0 h model validation.",
        "The 29.7 kcal/mol Figure 4 harmonic-zero-point schematic difference is not a bare electronic barrier and is not substituted for the separately printed 31.60 kcal/mol Eckart-model input. No unresolved mapping between approximations is invented.",
        "The over-1200-year deuterium prediction has no numerical experimental confirmation in the reported observation period. Quantized energy references and barrier transmission are different parts of the inference."
      ],
      "contextIds": [
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "C-phys-schreiner2008-reaction-path-prediction",
      "kind": "review-finding",
      "statement": "The source reduced reaction-path/WKB calculation predicts a near-0-K H-C-OH half-life of 122 min, reported as 2.0 h, and a H-C-OD half-life over 1200 yr. These are theoretical outputs. Figure 4 uses focal-point plus harmonic zero-point energies relative to CO+H2: trans reactant 54.2 and TS2 83.9 kcal/mol, with the displayed difference 29.7 kcal/mol; the trans anharmonic value is 54.0. A separate Eckart check uses a stated 31.60 kcal/mol barrier, -52.05 kcal/mol reaction energy and 2174i cm^-1 imaginary transition-state wavenumber. These printed model inputs have distinct conventions and are not merged into one experimental barrier.",
      "scope": "Publication-reported reduced-model H/D lifetimes and separately labelled Figure 4 and Eckart energy conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is the source-reported calculation associated with the same publication as the experiment; it is not an independent empirical confirmation or an independently reproduced numerical check.",
        "The calculation uses a reduced reaction-path approximation. The paper explicitly leaves full-dimensional quantum dynamics on a semi-global potential surface for future work; neither an exact full-dimensional rate nor a direct trajectory is admitted.",
        "No matrix-specific potential or environmental kinetic fit for all four hosts is supplied by this admission; the 7.0 h nitrogen result does not become a 2.0 h model validation.",
        "The 29.7 kcal/mol Figure 4 harmonic-zero-point schematic difference is not a bare electronic barrier and is not substituted for the separately printed 31.60 kcal/mol Eckart-model input. No unresolved mapping between approximations is invented.",
        "The over-1200-year deuterium prediction has no numerical experimental confirmation in the reported observation period. Quantized energy references and barrier transmission are different parts of the inference."
      ],
      "contextIds": [
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "C-phys-quantum-reaction-source-scope",
      "kind": "review-finding",
      "statement": "The reviewed primary publication supports a finite positive quantum-reaction case: cryogenic matrix-isolated trans-H-C-OH shows dark first-order infrared loss, with weak temperature dependence over the reported 11-20 K noble-gas points, a slower nitrogen host and qualitatively stable H-C-OD. The associated ground-singlet reaction-path/WKB calculation supplies a hydrogen-tunnelling interpretation and a source-predicted H/D lifetime contrast. Observation, mechanism inference and model prediction remain separate; the primary supplement is part of the same publication rather than a second confirmation.",
      "scope": "Scoped replacement for original Level 2 card /11, with one publication-specific experiment and a distinct computational analysis.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme",
          "role": "supports",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original card /11 supplies the draft vocabulary and asserted metadata only; it is not empirical support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original necessary parents 2.3/2.5/2.8, weights 0.40/0.35/0.25, all two-body minima and critical counts, diagonal-causation code 3 and the cooperation/constraint modes are not established by the selected spectra or computation. A supplied molecular reaction channel is not a measured minimal carrier recipe; no alternative numerical minimum is invented.",
        "The source positively supports nuclear hydrogen-transfer tunnelling as the interpretation of this specific low-temperature ground-singlet rearrangement. It does not establish electronic nonadiabatic coupling, universal reaction-path selection, a universal non-Arrhenius curve, every isotope effect or all proposed quantum chemistry mechanisms.",
        "Constraint and resource categories do not provide measured causal edges: the actual matrix, state, temperature and preparation are recorded as context. The hot pyrolysis preparation and optional visible-light assignment tests are distinct from the shielded dark rearrangement; no sustained external resource threshold is inferred.",
        "Level 2 is a display grouping. Phase 2, TypeRole 4 Effect, science tags, well-supported status and SOMA propagation/irreducibility language are draft classification rather than demonstrated developmental phases, cross-level laws or newly generated rules.",
        "The original theoretical and empirical Evidence entries contain no publication identifiers and do not establish a bibliography or executable quantum-transition-state/path-integral model. The replacement admits the selected primary experiment and its separate source model only; no broad literature survey, raw-data refit or independent numerical replay is claimed."
      ],
      "contextIds": [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "M-phys-quantum-reaction-source-scope",
      "kind": "method",
      "statement": "Compare the dark matrix half-lives with the separately supplied reduced-model predictions while preserving host, temperature, isotopologue, energy convention and evidence role. Count the main article and its supplement as one publication. Use isotope comparison and source calculation together for the stated tunnelling interpretation; do not turn qualitative deuterated non-decay into a measured long lifetime, merge photochemical assignment with dark kinetics, or infer universal old parents and carrier counts.",
      "scope": "Interpretation contract joining a single publication-specific matrix experiment to its associated reduced quantum-reaction calculation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme",
          "role": "method",
          "note": "Supports only the selected reported preparation, result or declared interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original necessary parents 2.3/2.5/2.8, weights 0.40/0.35/0.25, all two-body minima and critical counts, diagonal-causation code 3 and the cooperation/constraint modes are not established by the selected spectra or computation. A supplied molecular reaction channel is not a measured minimal carrier recipe; no alternative numerical minimum is invented.",
        "The source positively supports nuclear hydrogen-transfer tunnelling as the interpretation of this specific low-temperature ground-singlet rearrangement. It does not establish electronic nonadiabatic coupling, universal reaction-path selection, a universal non-Arrhenius curve, every isotope effect or all proposed quantum chemistry mechanisms.",
        "Constraint and resource categories do not provide measured causal edges: the actual matrix, state, temperature and preparation are recorded as context. The hot pyrolysis preparation and optional visible-light assignment tests are distinct from the shielded dark rearrangement; no sustained external resource threshold is inferred.",
        "Level 2 is a display grouping. Phase 2, TypeRole 4 Effect, science tags, well-supported status and SOMA propagation/irreducibility language are draft classification rather than demonstrated developmental phases, cross-level laws or newly generated rules.",
        "The original theoretical and empirical Evidence entries contain no publication identifiers and do not establish a bibliography or executable quantum-transition-state/path-integral model. The replacement admits the selected primary experiment and its separate source model only; no broad literature survey, raw-data refit or independent numerical replay is claimed."
      ],
      "contextIds": [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:reaction-path-quantum-model",
      "name": "State, zero-point energy and reaction-path tunnelling model",
      "kind": "definition",
      "description": "In the reviewed ground-singlet trans-H-C-OH to H2CO model, supply an electronic potential, an intrinsic reaction path, orthogonal vibrational modes and a declared initial vibrational energy. Zero-point energy changes vibrational state energies and energy-reference conventions; below-barrier transmission is a separate dynamical contribution estimated here by a reduced reaction-path Hamiltonian and WKB penetration. The reported 1220 cm^-1 reaction-mode wavenumber corresponds to zero-point energy h*c*nu_tilde/2 and barrier-attempt frequency c*nu_tilde, with consistent length units; a wavenumber is neither an energy nor a frequency in Hz by itself.",
      "claimIds": [
        "D-phys-reaction-path-quantum-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
        }
      ],
      "openObligations": [
        "This definition records the published reduced model. No explicit WKB integral formula, new potential, implementation, barrier fit or independent rate calculation is introduced.",
        "Zero-point shifts, tunnelling transmission, excited electronic-state dynamics and isotope substitution are distinct concepts. The selected dark reaction is not evidence for every proposed quantum-reaction mechanism.",
        "The harmonic/anharmonic energy references in Figure 4 and the separate Eckart-model inputs must be kept distinct. No unspecified barrier number is promoted to a universal activation energy."
      ]
    },
    {
      "id": "phys:isotope-kinetics-evidence-boundary",
      "name": "Isotope kinetics and mechanism evidence boundary",
      "kind": "definition",
      "description": "An isotope-dependent infrared loss curve or reported first-order half-life is an observable under its stated preparation and detection conditions; a tunnelling mechanism additionally requires a specified reaction assignment and dynamical model. In this publication, temperature-limited dark kinetics, isotopologue comparison and a source calculation are combined in that interpretation. Deuterium non-decay without a stated observation window cannot supply a numerical deuterated half-life or k_H/k_D; a calculated lifetime is a separate model output.",
      "claimIds": [
        "D-phys-isotope-kinetics-evidence-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations"
        }
      ],
      "openObligations": [
        "Isotope substitution also changes zero-point energies and vibrational assignments; an isotope effect alone is not admitted as a unique tunnelling diagnostic.",
        "A finite low-temperature result does not establish failure of every transition-state model, a universal non-Arrhenius law or the dominance of tunnelling at all temperatures.",
        "First-order infrared band disappearance is not a direct image of a hydrogen trajectory or a count of barrier-crossing events."
      ]
    },
    {
      "id": "phys:schreiner2008-matrix-context",
      "name": "Schreiner matrix isolation and dark infrared acquisition",
      "kind": "context",
      "description": "Generate hydroxymethylene by high-vacuum flash pyrolysis of glyoxylic acid at 1000 deg C and immediately co-condense the products with excess Ar, Kr, Xe or N2 on a cryogenic window. Unreacted precursor, CO2, formaldehyde and some CO are also present. Assign trans-H-C-OH and H-C-OD using infrared/UV observations and computed vibrational bands. For dark kinetics, shield external light and acquire infrared spectra every 30 min at the reported 11, 15 or 20 K settings, following the approximately 1050 and 1300 cm^-1 H-C-OH bands.",
      "claimIds": [
        "M-phys-schreiner2008-matrix-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations"
        }
      ],
      "openObligations": [
        "No uncertainty intervals, replicate counts or detection limit are given in Supplementary Table 1; none is invented. Not-determined cells remain missing, not zero or interpolated.",
        "The deuterated observation window is not numerically stated, so no experimental D half-life, lower bound in years or numerical kinetic isotope ratio is inferred. Over 1200 yr belongs only to the separate calculation.",
        "The 435/470/500 nm irradiation tests and the two-minute 470 nm difference spectra probe a driven photochemical response and species assignment. They are not the shielded dark decay measurement.",
        "The sample is a product mixture in a cryogenic matrix, not a pure isolated-molecule gas. Infrared assignment and dilution arguments do not directly count individual tunnelling events, certify every initial quantum state or exclude every possible loss channel by direct observation.",
        "The reported matrix and temperature dependence does not establish a universal vacuum lifetime, a measured 0 K rate or a carrier-number threshold. No raw spectral refit or independent numerical replay was performed."
      ]
    },
    {
      "id": "phys:schreiner2008-matrix-decay",
      "name": "Matrix-specific hydroxymethylene dark decay",
      "kind": "scoped-process",
      "description": "The source reports first-order H-C-OH loss and the following half-lives in hours: at 11 K Ar 1.8, Kr 2.0, Xe 2.3 and N2 7.0; at 15 K Ar 1.9; at 20 K Ar 1.7 and Kr 2.0. Other temperature/matrix entries in Supplementary Table 1 are explicitly not determined. H-C-OD infrared bands are reported unchanged for an unspecified extended observation period. The approximately two-hour summary applies to the reported noble-gas preparations, while the 11 K nitrogen matrix is slower by more than a factor of three.",
      "claimIds": [
        "C-phys-schreiner2008-matrix-decay"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations"
        }
      ],
      "openObligations": [
        "No uncertainty intervals, replicate counts or detection limit are given in Supplementary Table 1; none is invented. Not-determined cells remain missing, not zero or interpolated.",
        "The deuterated observation window is not numerically stated, so no experimental D half-life, lower bound in years or numerical kinetic isotope ratio is inferred. Over 1200 yr belongs only to the separate calculation.",
        "The 435/470/500 nm irradiation tests and the two-minute 470 nm difference spectra probe a driven photochemical response and species assignment. They are not the shielded dark decay measurement.",
        "The sample is a product mixture in a cryogenic matrix, not a pure isolated-molecule gas. Infrared assignment and dilution arguments do not directly count individual tunnelling events, certify every initial quantum state or exclude every possible loss channel by direct observation.",
        "The reported matrix and temperature dependence does not establish a universal vacuum lifetime, a measured 0 K rate or a carrier-number threshold. No raw spectral refit or independent numerical replay was performed."
      ]
    },
    {
      "id": "phys:schreiner2008-reaction-path-context",
      "name": "Schreiner ground-singlet reaction-path calculation",
      "kind": "context",
      "description": "Use the ground-electronic-singlet trans-H-C-OH to H2CO channel with AE-CCSD(T)/cc-pCVQZ stationary structures and focal-point energy corrections. Construct the intrinsic reaction path and orthogonal harmonic frequencies at AE-CCSD/cc-pCVTZ and refine path energies at AE-CCSD(T)/cc-pCVQZ. Apply a reduced reaction-path Hamiltonian with WKB transmission at the reaction-mode zero-point energy, using the 1220 cm^-1 reactant harmonic mode and its corresponding barrier-attempt frequency. The same procedure is applied to H-C-OD; an asymmetric Eckart calculation is a separate qualitative check.",
      "claimIds": [
        "M-phys-schreiner2008-reaction-path-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme"
        }
      ],
      "openObligations": [
        "This is the source-reported calculation associated with the same publication as the experiment; it is not an independent empirical confirmation or an independently reproduced numerical check.",
        "The calculation uses a reduced reaction-path approximation. The paper explicitly leaves full-dimensional quantum dynamics on a semi-global potential surface for future work; neither an exact full-dimensional rate nor a direct trajectory is admitted.",
        "No matrix-specific potential or environmental kinetic fit for all four hosts is supplied by this admission; the 7.0 h nitrogen result does not become a 2.0 h model validation.",
        "The 29.7 kcal/mol Figure 4 harmonic-zero-point schematic difference is not a bare electronic barrier and is not substituted for the separately printed 31.60 kcal/mol Eckart-model input. No unresolved mapping between approximations is invented.",
        "The over-1200-year deuterium prediction has no numerical experimental confirmation in the reported observation period. Quantized energy references and barrier transmission are different parts of the inference."
      ]
    },
    {
      "id": "phys:schreiner2008-reaction-path-prediction",
      "name": "Reported reaction-path tunnelling prediction",
      "kind": "scoped-process",
      "description": "The source reduced reaction-path/WKB calculation predicts a near-0-K H-C-OH half-life of 122 min, reported as 2.0 h, and a H-C-OD half-life over 1200 yr. These are theoretical outputs. Figure 4 uses focal-point plus harmonic zero-point energies relative to CO+H2: trans reactant 54.2 and TS2 83.9 kcal/mol, with the displayed difference 29.7 kcal/mol; the trans anharmonic value is 54.0. A separate Eckart check uses a stated 31.60 kcal/mol barrier, -52.05 kcal/mol reaction energy and 2174i cm^-1 imaginary transition-state wavenumber. These printed model inputs have distinct conventions and are not merged into one experimental barrier.",
      "claimIds": [
        "C-phys-schreiner2008-reaction-path-prediction"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme"
        }
      ],
      "openObligations": [
        "This is the source-reported calculation associated with the same publication as the experiment; it is not an independent empirical confirmation or an independently reproduced numerical check.",
        "The calculation uses a reduced reaction-path approximation. The paper explicitly leaves full-dimensional quantum dynamics on a semi-global potential surface for future work; neither an exact full-dimensional rate nor a direct trajectory is admitted.",
        "No matrix-specific potential or environmental kinetic fit for all four hosts is supplied by this admission; the 7.0 h nitrogen result does not become a 2.0 h model validation.",
        "The 29.7 kcal/mol Figure 4 harmonic-zero-point schematic difference is not a bare electronic barrier and is not substituted for the separately printed 31.60 kcal/mol Eckart-model input. No unresolved mapping between approximations is invented.",
        "The over-1200-year deuterium prediction has no numerical experimental confirmation in the reported observation period. Quantized energy references and barrier transmission are different parts of the inference."
      ]
    },
    {
      "id": "phys:quantum-reaction-source-scope",
      "name": "Quantum reaction effects within a declared experiment and model",
      "kind": "scoped-process",
      "description": "The reviewed primary publication supports a finite positive quantum-reaction case: cryogenic matrix-isolated trans-H-C-OH shows dark first-order infrared loss, with weak temperature dependence over the reported 11-20 K noble-gas points, a slower nitrogen host and qualitatively stable H-C-OD. The associated ground-singlet reaction-path/WKB calculation supplies a hydrogen-tunnelling interpretation and a source-predicted H/D lifetime contrast. Observation, mechanism inference and model prediction remain separate; the primary supplement is part of the same publication rather than a second confirmation.",
      "claimIds": [
        "C-phys-quantum-reaction-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay"
        },
        {
          "sourceId": "schreiner2008-hcoh-tunneling",
          "locator": "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations"
        },
        {
          "sourceId": "schreiner2008-hcoh-supplement",
          "locator": "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original necessary parents 2.3/2.5/2.8, weights 0.40/0.35/0.25, all two-body minima and critical counts, diagonal-causation code 3 and the cooperation/constraint modes are not established by the selected spectra or computation. A supplied molecular reaction channel is not a measured minimal carrier recipe; no alternative numerical minimum is invented.",
        "The source positively supports nuclear hydrogen-transfer tunnelling as the interpretation of this specific low-temperature ground-singlet rearrangement. It does not establish electronic nonadiabatic coupling, universal reaction-path selection, a universal non-Arrhenius curve, every isotope effect or all proposed quantum chemistry mechanisms.",
        "Constraint and resource categories do not provide measured causal edges: the actual matrix, state, temperature and preparation are recorded as context. The hot pyrolysis preparation and optional visible-light assignment tests are distinct from the shielded dark rearrangement; no sustained external resource threshold is inferred.",
        "Level 2 is a display grouping. Phase 2, TypeRole 4 Effect, science tags, well-supported status and SOMA propagation/irreducibility language are draft classification rather than demonstrated developmental phases, cross-level laws or newly generated rules.",
        "The original theoretical and empirical Evidence entries contain no publication identifiers and do not establish a bibliography or executable quantum-transition-state/path-integral model. The replacement admits the selected primary experiment and its separate source model only; no broad literature survey, raw-data refit or independent numerical replay is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:molecular-binding-channel-boundary-reaction-path-quantum-model",
      "source": "phys:molecular-binding-channel-boundary",
      "target": "phys:reaction-path-quantum-model",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify the supplied trans-H-C-OH ground-singlet channel and distinguish bound-state structure from a model of rearrangement; no old parent weight or body-count recipe follows.",
      "claimIds": [
        "D-phys-reaction-path-quantum-model"
      ]
    },
    {
      "id": "physics:reaction-path-quantum-model-isotope-kinetics-evidence-boundary",
      "source": "phys:reaction-path-quantum-model",
      "target": "phys:isotope-kinetics-evidence-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Separate quantized energy references, model transmission and inferred mechanism from a measured isotopologue-dependent loss curve.",
      "claimIds": [
        "D-phys-isotope-kinetics-evidence-boundary"
      ]
    },
    {
      "id": "physics:schreiner2008-matrix-context-schreiner2008-matrix-decay",
      "source": "phys:schreiner2008-matrix-context",
      "target": "phys:schreiner2008-matrix-decay",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The shielded matrix preparation and infrared acquisition define the reported dark first-order loss and its host/temperature limits.",
      "claimIds": [
        "M-phys-schreiner2008-matrix-context"
      ],
      "contextIds": [
        "schreiner2008-matrix"
      ]
    },
    {
      "id": "physics:schreiner2008-reaction-path-context-schreiner2008-reaction-path-prediction",
      "source": "phys:schreiner2008-reaction-path-context",
      "target": "phys:schreiner2008-reaction-path-prediction",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The declared reduced singlet-path calculation produces the source-predicted lifetimes, without turning them into measured values.",
      "claimIds": [
        "M-phys-schreiner2008-reaction-path-context"
      ],
      "contextIds": [
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "physics:reaction-path-quantum-model-schreiner2008-reaction-path-prediction",
      "source": "phys:reaction-path-quantum-model",
      "target": "phys:schreiner2008-reaction-path-prediction",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The prediction depends on the supplied state, path and approximate barrier transmission, with zero-point and barrier conventions kept explicit.",
      "claimIds": [
        "M-phys-schreiner2008-reaction-path-context"
      ],
      "contextIds": [
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "physics:schreiner2008-matrix-decay-quantum-reaction-source-scope",
      "source": "phys:schreiner2008-matrix-decay",
      "target": "phys:quantum-reaction-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Join the stated observation/model boundary into a finite tunnelling interpretation without creating an independent dataset or universal causal recipe.",
      "claimIds": [
        "M-phys-quantum-reaction-source-scope"
      ],
      "contextIds": [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "physics:schreiner2008-reaction-path-prediction-quantum-reaction-source-scope",
      "source": "phys:schreiner2008-reaction-path-prediction",
      "target": "phys:quantum-reaction-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Join the stated observation/model boundary into a finite tunnelling interpretation without creating an independent dataset or universal causal recipe.",
      "claimIds": [
        "M-phys-quantum-reaction-source-scope"
      ],
      "contextIds": [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    },
    {
      "id": "physics:isotope-kinetics-evidence-boundary-quantum-reaction-source-scope",
      "source": "phys:isotope-kinetics-evidence-boundary",
      "target": "phys:quantum-reaction-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Join the stated observation/model boundary into a finite tunnelling interpretation without creating an independent dataset or universal causal recipe.",
      "claimIds": [
        "M-phys-quantum-reaction-source-scope"
      ],
      "contextIds": [
        "schreiner2008-matrix",
        "schreiner2008-reaction-path"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:reaction-path-quantum-model",
      "role": "definition",
      "denotes": "Working model definition for the specific singlet hydroxymethylene rearrangement; supplied potential and reduced-coordinate dynamics, not a universal reaction generator.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-reaction-path-quantum-model"
      ]
    },
    {
      "nodeId": "phys:isotope-kinetics-evidence-boundary",
      "role": "definition",
      "denotes": "Evidence and interpretation boundary for the reviewed matrix experiment and its associated isotope calculation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-isotope-kinetics-evidence-boundary"
      ]
    },
    {
      "nodeId": "phys:schreiner2008-matrix-context",
      "role": "experimental-context",
      "denotes": "Publication-specific mixed-product cryogenic matrix preparation and dark infrared acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-schreiner2008-matrix-context"
      ]
    },
    {
      "nodeId": "phys:schreiner2008-matrix-decay",
      "role": "scoped-phenomenon",
      "denotes": "Reported H-C-OH dark first-order infrared decay at the seven stated matrix/temperature settings and qualitative H-C-OD non-decay.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-schreiner2008-matrix-decay"
      ]
    },
    {
      "nodeId": "phys:schreiner2008-reaction-path-context",
      "role": "model-context",
      "denotes": "Supplied ground-singlet molecular channel, electronic-structure approximations and reduced barrier-transmission calculation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-schreiner2008-reaction-path-context"
      ]
    },
    {
      "nodeId": "phys:schreiner2008-reaction-path-prediction",
      "role": "scoped-phenomenon",
      "denotes": "Publication-reported reduced-model H/D lifetimes and separately labelled Figure 4 and Eckart energy conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-schreiner2008-reaction-path-prediction"
      ]
    },
    {
      "nodeId": "phys:quantum-reaction-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped replacement for original Level 2 card /11, with one publication-specific experiment and a distinct computational analysis.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-quantum-reaction-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "schreiner2008-matrix",
      "sourceId": "schreiner2008-hcoh-tunneling",
      "studyType": "primary-experiment",
      "doi": "10.1038/nature07010",
      "journal": "Nature",
      "volume": "453",
      "issue": "7197",
      "pages": "906-909",
      "system": "trans-H-C-OH / H-C-OD cryogenic matrix rearrangement to formaldehyde",
      "preparation": "Generate hydroxymethylene by high-vacuum flash pyrolysis of glyoxylic acid at 1000 deg C and immediately co-condense the products with excess Ar, Kr, Xe or N2 on a cryogenic window. Unreacted precursor, CO2, formaldehyde and some CO are also present. Assign trans-H-C-OH and H-C-OD using infrared/UV observations and computed vibrational bands. For dark kinetics, shield external light and acquire infrared spectra every 30 min at the reported 11, 15 or 20 K settings, following the approximately 1050 and 1300 cm^-1 H-C-OH bands.",
      "observable": "Decrease of assigned hydroxymethylene infrared bands versus elapsed dark-storage time; separate visible-light difference spectra support assignment but are not the dark kinetics.",
      "finding": "The source reports first-order H-C-OH loss and the following half-lives in hours: at 11 K Ar 1.8, Kr 2.0, Xe 2.3 and N2 7.0; at 15 K Ar 1.9; at 20 K Ar 1.7 and Kr 2.0. Other temperature/matrix entries in Supplementary Table 1 are explicitly not determined. H-C-OD infrared bands are reported unchanged for an unspecified extended observation period. The approximately two-hour summary applies to the reported noble-gas preparations, while the 11 K nitrogen matrix is slower by more than a factor of three.",
      "limitations": [
        "No uncertainty intervals, replicate counts or detection limit are given in Supplementary Table 1; none is invented. Not-determined cells remain missing, not zero or interpolated.",
        "The deuterated observation window is not numerically stated, so no experimental D half-life, lower bound in years or numerical kinetic isotope ratio is inferred. Over 1200 yr belongs only to the separate calculation.",
        "The 435/470/500 nm irradiation tests and the two-minute 470 nm difference spectra probe a driven photochemical response and species assignment. They are not the shielded dark decay measurement.",
        "The sample is a product mixture in a cryogenic matrix, not a pure isolated-molecule gas. Infrared assignment and dilution arguments do not directly count individual tunnelling events, certify every initial quantum state or exclude every possible loss channel by direct observation.",
        "The reported matrix and temperature dependence does not establish a universal vacuum lifetime, a measured 0 K rate or a carrier-number threshold. No raw spectral refit or independent numerical replay was performed."
      ],
      "readExtent": "selected-published-main-text-and-methods",
      "reviewedLocators": [
        "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra",
        "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://www.nature.com/articles/nature07010",
      "correctionCheck": "Primary article DOI, title, authors, Nature 453(7197),906-909 and 12 June 2008 title block checked against the actual published PDF and publisher HTML; Crossref metadata checked on 2026-10-19 shows an empty relation object and no update-to entry. No exhaustive correction search or numerical reproduction is implied. The actual publisher supplement was read for the matrix-specific values and energy conventions; it is part of the same publication. The companion supplement has its own source record and exact passage citations; it is part of this same publication, not another independent experiment."
    },
    {
      "id": "schreiner2008-reaction-path",
      "sourceId": "schreiner2008-hcoh-tunneling",
      "studyType": "computational-analysis",
      "doi": "10.1038/nature07010",
      "journal": "Nature",
      "volume": "453",
      "issue": "7197",
      "pages": "906-909",
      "system": "Ground-singlet trans-H-C-OH to H2CO reduced reaction-path tunnelling",
      "preparation": "Use the ground-electronic-singlet trans-H-C-OH to H2CO channel with AE-CCSD(T)/cc-pCVQZ stationary structures and focal-point energy corrections. Construct the intrinsic reaction path and orthogonal harmonic frequencies at AE-CCSD/cc-pCVTZ and refine path energies at AE-CCSD(T)/cc-pCVQZ. Apply a reduced reaction-path Hamiltonian with WKB transmission at the reaction-mode zero-point energy, using the 1220 cm^-1 reactant harmonic mode and its corresponding barrier-attempt frequency. The same procedure is applied to H-C-OD; an asymmetric Eckart calculation is a separate qualitative check.",
      "observable": "Source-computed ground-vibrational-level tunnelling half-lives and explicitly approximation-dependent reaction-profile energies; not a newly measured kinetic curve.",
      "finding": "The source reduced reaction-path/WKB calculation predicts a near-0-K H-C-OH half-life of 122 min, reported as 2.0 h, and a H-C-OD half-life over 1200 yr. These are theoretical outputs. Figure 4 uses focal-point plus harmonic zero-point energies relative to CO+H2: trans reactant 54.2 and TS2 83.9 kcal/mol, with the displayed difference 29.7 kcal/mol; the trans anharmonic value is 54.0. A separate Eckart check uses a stated 31.60 kcal/mol barrier, -52.05 kcal/mol reaction energy and 2174i cm^-1 imaginary transition-state wavenumber. These printed model inputs have distinct conventions and are not merged into one experimental barrier.",
      "limitations": [
        "This is the source-reported calculation associated with the same publication as the experiment; it is not an independent empirical confirmation or an independently reproduced numerical check.",
        "The calculation uses a reduced reaction-path approximation. The paper explicitly leaves full-dimensional quantum dynamics on a semi-global potential surface for future work; neither an exact full-dimensional rate nor a direct trajectory is admitted.",
        "No matrix-specific potential or environmental kinetic fit for all four hosts is supplied by this admission; the 7.0 h nitrogen result does not become a 2.0 h model validation.",
        "The 29.7 kcal/mol Figure 4 harmonic-zero-point schematic difference is not a bare electronic barrier and is not substituted for the separately printed 31.60 kcal/mol Eckart-model input. No unresolved mapping between approximations is invented.",
        "The over-1200-year deuterium prediction has no numerical experimental confirmation in the reported observation period. Quantized energy references and barrier transmission are different parts of the inference."
      ],
      "readExtent": "selected-published-main-text-and-methods",
      "reviewedLocators": [
        "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
        "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://www.nature.com/articles/nature07010",
      "correctionCheck": "Primary article DOI, title, authors, Nature 453(7197),906-909 and 12 June 2008 title block checked against the actual published PDF and publisher HTML; Crossref metadata checked on 2026-10-19 shows an empty relation object and no update-to entry. No exhaustive correction search or numerical reproduction is implied. The actual publisher supplement was read for the matrix-specific values and energy conventions; it is part of the same publication. The companion supplement has its own source record and exact passage citations; it is part of this same publication, not another independent experiment."
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
      "id": "schreiner2008-hcoh-tunneling",
      "kind": "research-publication",
      "title": "Capture of hydroxymethylene and its fast disappearance through tunnelling",
      "authors": [
        "Peter R. Schreiner",
        "Hans Peter Reisenauer",
        "Frank C. Pickard IV",
        "Andrew C. Simmonett",
        "Wesley D. Allen",
        "Edit Mátyus",
        "Attila G. Császár"
      ],
      "year": 2008,
      "doi": "10.1038/nature07010",
      "url": "https://www.nature.com/articles/nature07010",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-main-text-and-methods",
        "locators": [
          "Published pages 906-907, Figures 1-3 and Table 1: glyoxylic-acid pyrolysis, matrix trapping, isotopologue assignment and separate visible-light difference spectra",
          "Published page 908, Figure 4 and tunnelling-analysis paragraphs: singlet reaction path, zero-point conventions, WKB model, 122 min hydrogen prediction and over 1,200 yr deuterium prediction",
          "Online Methods, PDF page 5, Matrix-isolation experiments: dark first-order infrared decay, 30 min acquisition, 11/15/20 K matrix preparations and qualitative deuterated non-decay",
          "Online Methods, PDF page 5, Electronic structure computations and Vibrational computations and tunnelling analysis: focal-point energetics, orthogonal modes and reduced reaction-path assumptions"
        ],
        "limit": "Read the primary published scientific text on pages 906-908, Table 1 and Figures 1-4, plus selected online Methods on PDF page 5; visually inspected published pages 907-908 including Figures 2 and 4. The six-page published PDF was obtained from a third-party copy and checked against the publisher article title, DOI and dated title block. The publisher HTML and actual publisher Supplementary Information were also obtained. The references, all numerical electronic-structure tables and raw spectra were not independently reanalysed. The low-temperature matrix kinetics and the same-publication calculation are distinct evidence roles, not independent experiments."
      }
    },
    {
      "id": "schreiner2008-hcoh-supplement",
      "kind": "research-publication",
      "title": "Supplementary Information to Capture of hydroxymethylene and its fast disappearance through tunnelling",
      "authors": [
        "Peter R. Schreiner",
        "Hans Peter Reisenauer",
        "Frank C. Pickard IV",
        "Andrew C. Simmonett",
        "Wesley D. Allen",
        "Edit Mátyus",
        "Attila G. Császár"
      ],
      "year": 2008,
      "doi": "10.1038/nature07010",
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnature07010/MediaObjects/41586_2008_BFnature07010_MOESM264_ESM.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-supplement-passages",
        "locators": [
          "Supplementary Information page 1: title, authors and linkage to DOI 10.1038/nature07010",
          "Supplementary Information page 4, Supplementary Table 1: all seven reported H-C-OH half-lives and explicitly not-determined temperature/matrix combinations",
          "Supplementary Information pages 9-12, selected Supplementary Table 5 rows and Supplementary Table 6: harmonic/anharmonic zero-point conventions and relative energy references for the printed Figure 4 scheme"
        ],
        "limit": "Actual 15-page publisher Supplementary Information linked from the article; read the title page, all of Supplementary Table 1 on page 4, and the selected energy/reference rows on pages 9-12. Visually checked page 4. This is the same research publication and matrix experiment as the main paper, not independent confirmation. Not-determined entries remain missing; no errors, replicate counts or deuterium lifetime observation window are invented. Most coordinate/energy tables and the final reference pages were not fully reviewed; no reproduction of computed rates is claimed."
      }
    }
  ]
};

/** Retain matrix-specific dark kinetics, qualitative isotope limits and separately modelled reaction-path predictions. */
export function validateQuantumReactionContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Quantum-reaction ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
