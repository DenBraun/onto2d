import assert from "node:assert/strict";

export const ELECTRON_MOMENT_CHECKS = new Map([["electron-moment-printed-algebra", "C-phys-electron-moment-arithmetic"]]);

export const ELECTRON_MOMENT_ANALYTICAL_SOURCES = new Map([["C-phys-electron-moment-arithmetic", "electron-moment-verifier"]]);

export const ELECTRON_MOMENT_ADMISSION = {
  "definitions": [
    [
      "phys:electron-moment-normalization",
      "D-phys-electron-moment-normalization"
    ],
    [
      "phys:electron-moment-frequency-ratio",
      "D-phys-electron-moment-frequency-ratio"
    ],
    [
      "phys:schwinger-leading-anomaly",
      "D-phys-schwinger-leading-anomaly"
    ]
  ],
  "formalDependencies": [
    [
      "physics:electron-normalization-frequency-ratio",
      [
        "phys:electron-moment-normalization",
        "phys:electron-moment-frequency-ratio"
      ]
    ],
    [
      "physics:electron-normalization-schwinger-anomaly",
      [
        "phys:electron-moment-normalization",
        "phys:schwinger-leading-anomaly"
      ]
    ]
  ],
  "contexts": [
    [
      "fan2023-moment-context",
      "M-phys-fan2023-moment-context",
      [
        "fan2023-moment-acquisition"
      ]
    ],
    [
      "fan2023-cavity-context",
      "M-phys-fan2023-cavity-context",
      [
        "fan2023-cavity-calibration"
      ]
    ],
    [
      "fan2023-inference-context",
      "M-phys-fan2023-inference-context",
      [
        "fan2023-moment-inference"
      ]
    ],
    [
      "electron-moment-replay-context",
      "M-phys-electron-moment-replay-context",
      [
        "electron-moment-replay"
      ]
    ]
  ],
  "observations": [
    [
      "fan2023-frequency-lines",
      "C-phys-fan2023-frequency-lines",
      [
        "fan2023-moment-acquisition"
      ]
    ],
    [
      "fan2023-cavity-calibration",
      "C-phys-fan2023-cavity-calibration",
      [
        "fan2023-cavity-calibration"
      ]
    ],
    [
      "fan2023-fitted-frequencies",
      "C-phys-fan2023-fitted-frequencies",
      [
        "fan2023-moment-inference"
      ]
    ],
    [
      "fan2023-cavity-shift",
      "C-phys-fan2023-cavity-shift",
      [
        "fan2023-moment-inference"
      ]
    ],
    [
      "fan2023-electron-moment",
      "C-phys-fan2023-electron-moment",
      [
        "fan2023-moment-inference"
      ]
    ],
    [
      "electron-moment-arithmetic",
      "C-phys-electron-moment-arithmetic",
      [
        "electron-moment-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "fan-acquisition-lines",
      "fan2023-moment-context",
      "fan2023-frequency-lines",
      "M-phys-fan2023-frequency-lines",
      "measurement-context"
    ],
    [
      "fan-calibration-modes",
      "fan2023-cavity-context",
      "fan2023-cavity-calibration",
      "M-phys-fan2023-cavity-calibration",
      "measurement-context"
    ],
    [
      "fan-lines-frequencies",
      "fan2023-frequency-lines",
      "fan2023-fitted-frequencies",
      "M-phys-fan2023-fitted-frequencies",
      "interpretation-dependency"
    ],
    [
      "fan-inference-frequencies",
      "fan2023-inference-context",
      "fan2023-fitted-frequencies",
      "M-phys-fan2023-fitted-frequencies",
      "interpretation-dependency"
    ],
    [
      "fan-modes-cavity-shift",
      "fan2023-cavity-calibration",
      "fan2023-cavity-shift",
      "M-phys-fan2023-cavity-shift",
      "interpretation-dependency"
    ],
    [
      "fan-inference-cavity-shift",
      "fan2023-inference-context",
      "fan2023-cavity-shift",
      "M-phys-fan2023-cavity-shift",
      "interpretation-dependency"
    ],
    [
      "fan-frequencies-moment",
      "fan2023-fitted-frequencies",
      "fan2023-electron-moment",
      "M-phys-fan2023-electron-moment",
      "interpretation-dependency"
    ],
    [
      "fan-cavity-shift-moment",
      "fan2023-cavity-shift",
      "fan2023-electron-moment",
      "M-phys-fan2023-electron-moment",
      "interpretation-dependency"
    ],
    [
      "fan-inference-moment",
      "fan2023-inference-context",
      "fan2023-electron-moment",
      "M-phys-fan2023-electron-moment",
      "interpretation-dependency"
    ],
    [
      "electron-frequency-definition-moment",
      "electron-moment-frequency-ratio",
      "fan2023-electron-moment",
      "M-phys-fan2023-electron-moment",
      "interpretation-dependency"
    ],
    [
      "electron-normalization-moment",
      "electron-moment-normalization",
      "fan2023-electron-moment",
      "M-phys-fan2023-electron-moment",
      "interpretation-dependency"
    ],
    [
      "fan-moment-arithmetic",
      "fan2023-electron-moment",
      "electron-moment-arithmetic",
      "M-phys-electron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "electron-normalization-arithmetic",
      "electron-moment-normalization",
      "electron-moment-arithmetic",
      "M-phys-electron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "electron-frequency-definition-arithmetic",
      "electron-moment-frequency-ratio",
      "electron-moment-arithmetic",
      "M-phys-electron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "schwinger-leading-arithmetic",
      "schwinger-leading-anomaly",
      "electron-moment-arithmetic",
      "M-phys-electron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "electron-replay-arithmetic",
      "electron-moment-replay-context",
      "electron-moment-arithmetic",
      "M-phys-electron-moment-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "fan2023-moment-acquisition",
    "fan2023-cavity-calibration",
    "fan2023-moment-inference",
    "electron-moment-replay"
  ],
  "comparisonIds": [
    "fan2023-frequency-lines",
    "fan2023-cavity-calibration",
    "fan2023-fitted-frequencies",
    "fan2023-cavity-shift",
    "fan2023-electron-moment",
    "electron-moment-arithmetic"
  ],
  "inferenceSources": [
    [
      "M-phys-electron-moment-replay-context",
      [
        "fan2023",
        "schwinger1948"
      ]
    ],
    [
      "C-phys-electron-moment-arithmetic",
      [
        "fan2023",
        "schwinger1948"
      ]
    ],
    [
      "M-phys-electron-moment-arithmetic",
      [
        "fan2023",
        "schwinger1948"
      ]
    ]
  ],
  "localStudySources": [
    [
      "electron-moment-replay",
      "electron-moment-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "fan2023",
      "kind": "research-publication",
      "title": "Measurement of the Electron Magnetic Moment",
      "authors": [
        "X. Fan",
        "T. G. Myers",
        "B. A. D. Sukra",
        "G. Gabrielse"
      ],
      "year": 2023,
      "doi": "10.1103/PhysRevLett.130.071801",
      "url": "https://physics.aps.org/featured-article-pdf/10.1103/PhysRevLett.130.071801",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-publisher-report",
        "locators": [
          "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
        ],
        "limit": "The complete six-page published PRL article was read; Equations 1-6, Figures 2-4 and Table I were checked, with the key formula and uncertainty pages visually inspected. Published 13 February 2023; the article labels the Northwestern determination 2022, and exact acquisition dates are not reconstructed. Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission. The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling."
      }
    },
    {
      "id": "schwinger1948",
      "kind": "research-publication",
      "title": "On Quantum-Electrodynamics and the Magnetic Moment of the Electron",
      "authors": [
        "Julian Schwinger"
      ],
      "year": 1948,
      "doi": "10.1103/PhysRev.73.416",
      "url": "https://physics.umd.edu/grt/taj/624c/Schwinger_AnomalousMoment.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-scanned-primary-letter",
        "locators": [
          "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162",
          "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation"
        ],
        "limit": "The actual two-page scan was read and visually inspected only for the Schwinger letter beginning on page 416 and ending on page 417. The neighboring letters on calcium and silver are excluded. The letter is dated 30 December 1947 and was published in 1948. Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed. Atomic-moment and atomic-energy examples mentioned in the letter are not admitted as separately reviewed experiments. The leading anomalous moment is not a statement that all radiative effects are vacuum polarization, that virtual excitations are an observed particle population, or that the vacuum is a material substance. The low-order formula does not reproduce modern higher-order QED, lepton, hadronic or weak contributions, nor does Fan's experimental extraction require the Schwinger term as a calibration input."
      }
    },
    {
      "id": "electron-moment-verifier",
      "kind": "executable-check",
      "title": "Finite electron-moment normalization and printed-algebra verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-electron-moment.py",
      "sha256": "10162e3f2fb1e4aad3bb25bba66b0c7c64c02f8615eee6e4973e581e9d8d5dca",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature"
        ],
        "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling. Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-electron-moment-normalization",
      "kind": "review-finding",
      "statement": "For electron charge -e with e>0, mu_B=e*hbar/(2m)>0 and the spin operator relation is mu_vector=-g*mu_B*S_vector/hbar. Define a_e=g/2-1; the reported positive moment magnitude ratio is -mu/mu_B=g/2, with the signed spin projection kept explicit.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component."
      ]
    },
    {
      "id": "D-phys-electron-moment-frequency-ratio",
      "kind": "review-finding",
      "statement": "For common B, nu_c=e*B/(2*pi*m), nu_s=(g/2)*nu_c and nu_a=nu_s-nu_c, hence g/2=1+nu_a/nu_c. The free cyclotron frequency is distinct from measured trap-modified line centers; Fan uses the invariance relation and its controlled expansion before adding the cavity shift.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ]
    },
    {
      "id": "D-phys-schwinger-leading-anomaly",
      "kind": "review-finding",
      "statement": "The 1948 letter gives delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162 in its Gaussian-unit convention. With alpha=e^2/(hbar*c) this is the positive leading correction a_e^(1)=alpha/(2*pi), or g/2=1+a_e^(1) at that order, using renormalized experimental mass and charge.",
      "scope": "The leading magnetic-moment formula and parameter-renormalization scope announced in Schwinger's Physical Review 73, 416-417 (1948) letter; not a modern precision calculation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed.",
        "The leading anomalous moment is not a statement that all radiative effects are vacuum polarization, that virtual excitations are an observed particle population, or that the vacuum is a material substance. The low-order formula does not reproduce modern higher-order QED, lepton, hadronic or weak contributions, nor does Fan's experimental extraction require the Schwinger term as a calibration input."
      ]
    },
    {
      "id": "M-phys-fan2023-moment-context",
      "kind": "method",
      "statement": "Prepare one electron in a cryogenic cylindrical Penning trap, alternate cyclotron and anomaly quantum-jump trials, and observe spin/cyclotron state changes through axial-frequency shifts; record the axial noise dip separately.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ],
      "contextIds": [
        "fan2023-moment-acquisition"
      ]
    },
    {
      "id": "M-phys-fan2023-cavity-context",
      "kind": "method",
      "statement": "Determine cavity mode frequencies and Q values through parametrically pumped electrons, one-electron first-excited-state lifetimes and high-excitation electron decay; retain these calibration preparations separately from the precision jump trials.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here."
      ],
      "contextIds": [
        "fan2023-cavity-calibration"
      ]
    },
    {
      "id": "M-phys-fan2023-inference-context",
      "kind": "method",
      "statement": "Fit thermal cyclotron line shapes convolved with Gaussian broadening and the nearly symmetric anomaly lines to extract f_bar_c and nu_bar_a; use the measured axial frequency, Equation 5 trap/relativistic terms, calibrated cavity-shift calculation and an eleven-field weighted combination.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023.",
        "Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "M-phys-electron-moment-replay-context",
      "kind": "method",
      "statement": "Evaluate exact g/2-to-anomaly and signed-spin conversions, a synthetic common-field cancellation and nonsimultaneous-field counterexample, a supplied leading-formula substitution, and display-resolution compatibility of Table I quadrature.",
      "scope": "Local finite algebra and printed Table I/Equation 6 arithmetic, with synthetic inputs labeled explicitly and no experimental or loop-calculation replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "electron-moment-verifier",
          "locator": "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed."
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "C-phys-fan2023-frequency-lines",
      "kind": "review-finding",
      "statement": "Figure 3 reports cyclotron and anomaly transition-probability line shapes from alternating quantum-jump trials and an axial Johnson-noise dip. These measured responses precede the separate fitted-frequency record; they are not numerical free-frequency triples.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ],
      "contextIds": [
        "fan2023-moment-acquisition"
      ]
    },
    {
      "id": "C-phys-fan2023-cavity-calibration",
      "kind": "review-finding",
      "statement": "The three distinct calibration methods report mutually consistent mode information; the moment correction uses measured frequencies and Q values for 72 observed cavity modes. No complete 72-row numerical calibration table is bound here.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here."
      ],
      "contextIds": [
        "fan2023-cavity-calibration"
      ]
    },
    {
      "id": "C-phys-fan2023-fitted-frequencies",
      "kind": "review-finding",
      "statement": "The original thermal/Gaussian line analysis extracts f_bar_c and nu_bar_a and uses the axial-frequency measurement for Equation 5. Figure 3 illustrates the fits, while the rounded frequency scales do not supply all unrounded eleven-field estimates.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "C-phys-fan2023-cavity-shift",
      "kind": "review-finding",
      "statement": "The reported renormalized cavity calculation replaces ideal contributions for 72 modes with contributions using measured frequencies and Q values, and gives different Delta_g_cav/2 corrections at eleven magnetic fields as shown in Figure 4.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "C-phys-fan2023-electron-moment",
      "kind": "review-finding",
      "statement": "The eleven-field corrected inference reports -mu/mu_B=g/2=1.00115965218059(13), with one-standard-deviation absolute uncertainty 1.3e-13 (about 0.13 ppt relative). The reported quantity is g/2; g and its absolute uncertainty are twice those values. This is the 2022 Northwestern determination published in 2023 and is not combined with the 2008 determination.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "C-phys-electron-moment-arithmetic",
      "kind": "review-finding",
      "statement": "The reported g/2 gives a_e=0.00115965218059 with the same absolute 1.3e-13 uncertainty. The six Table I components have square-sum 1.8102 and RSS 1.3454367 in 10^-13 units, compatible with the printed total 1.3 under display rounding. Synthetic frequency witnesses distinguish common-field cancellation from anomaly-scaled nonsimultaneous-field bias; the leading formula is evaluated only as supplied algebra.",
      "scope": "Local finite algebra and printed Table I/Equation 6 arithmetic, with synthetic inputs labeled explicitly and no experimental or loop-calculation replay.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "electron-moment-verifier",
          "locator": "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature",
          "role": "supports",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [
        "electron-moment-printed-algebra"
      ],
      "limitations": [
        "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed."
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "M-phys-fan2023-frequency-lines",
      "kind": "method",
      "statement": "Observe single-electron jump fractions versus drive detuning and the axial noise dip under the declared preparation; preserve separation from model-fitted centers.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ],
      "contextIds": [
        "fan2023-moment-acquisition"
      ]
    },
    {
      "id": "M-phys-fan2023-cavity-calibration",
      "kind": "method",
      "statement": "Use the three reported calibration preparations to determine mode frequencies and Q values; do not identify their samples with the precision single-electron trials.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here."
      ],
      "contextIds": [
        "fan2023-cavity-calibration"
      ]
    },
    {
      "id": "M-phys-fan2023-fitted-frequencies",
      "kind": "method",
      "statement": "Fit thermal cyclotron response convolved with Gaussian broadening and the nearly symmetric anomaly response; use the axial measurement without treating approximate explanatory scales as exact fitted inputs.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "M-phys-fan2023-cavity-shift",
      "kind": "method",
      "statement": "Use the reported renormalized cavity calculation and replace contributions of selected ideal modes with measured-frequency/Q contributions, retaining model and alignment uncertainty.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "M-phys-fan2023-electron-moment",
      "kind": "method",
      "statement": "Apply the Equation 5 trap/relativistic conversion and explicit calibrated cavity shifts, then combine eleven fields with the reported nearby-field correlations; do not pool the 2008 result.",
      "scope": "The single-electron 2022 Northwestern determination and distinct cavity calibration reported by Fan et al., Physical Review Letters 130, 071801 (2023), within its stated preparation and inference boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission."
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "M-phys-electron-moment-arithmetic",
      "kind": "method",
      "statement": "Subtract the exact unit reference to obtain a_e, retain sign and factor-of-two conventions, construct synthetic same/different-field witnesses, evaluate the already supplied leading formula and compare Table I RSS with printed display intervals only.",
      "scope": "Local finite algebra and printed Table I/Equation 6 arithmetic, with synthetic inputs labeled explicitly and no experimental or loop-calculation replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        },
        {
          "sourceId": "electron-moment-verifier",
          "locator": "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature",
          "role": "method",
          "note": "Supports only the stated definition, preparation, measured response, conditional inference or finite local check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed."
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "fan2023-moment-acquisition",
      "sourceId": "fan2023",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.130.071801",
      "journal": "Physical Review Letters",
      "volume": "130",
      "issue": "7",
      "pages": "071801",
      "system": "Single-electron cryogenic Penning preparation",
      "preparation": "Prepare one electron in a cryogenic cylindrical Penning trap, alternate cyclotron and anomaly quantum-jump trials, and observe spin/cyclotron state changes through axial-frequency shifts; record the axial noise dip separately.",
      "observable": "Alternating single-electron cyclotron/anomaly transition-probability lines and the axial noise dip.",
      "finding": "Figure 3 reports measured responses for subsequent line-shape inference, not a table of free-frequency measurements.",
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ],
      "readExtent": "full-primary-publisher-report",
      "reviewedLocators": [
        "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
        "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
        "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.130.071801",
      "correctionCheck": "The actual publisher report and selected formulas/table were read. The full underlying analysis and all upstream papers are not independently reproduced; exhaustive later correction searches are not claimed."
    },
    {
      "id": "fan2023-cavity-calibration",
      "sourceId": "fan2023",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.130.071801",
      "journal": "Physical Review Letters",
      "volume": "130",
      "issue": "7",
      "pages": "071801",
      "system": "Distinct cavity-mode calibration preparations",
      "preparation": "Determine cavity mode frequencies and Q values through parametrically pumped electrons, one-electron first-excited-state lifetimes and high-excitation electron decay; retain these calibration preparations separately from the precision jump trials.",
      "observable": "Cavity mode frequencies and quality factors under three distinct electron calibration preparations.",
      "finding": "The reported consistent calibration supports measured inputs for 72 modes; these modes are not 72 independent moment determinations.",
      "limitations": [
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here."
      ],
      "readExtent": "full-primary-publisher-report",
      "reviewedLocators": [
        "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.130.071801",
      "correctionCheck": "The actual publisher report and selected formulas/table were read. The full underlying analysis and all upstream papers are not independently reproduced; exhaustive later correction searches are not claimed."
    },
    {
      "id": "fan2023-moment-inference",
      "sourceId": "fan2023",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.130.071801",
      "journal": "Physical Review Letters",
      "volume": "130",
      "issue": "7",
      "pages": "071801",
      "system": "Line fitting, trap/cavity correction and moment inference",
      "preparation": "Fit thermal cyclotron line shapes convolved with Gaussian broadening and the nearly symmetric anomaly lines to extract f_bar_c and nu_bar_a; use the measured axial frequency, Equation 5 trap/relativistic terms, calibrated cavity-shift calculation and an eleven-field weighted combination.",
      "observable": "Line-fit frequencies, apparatus-dependent cavity shifts and the eleven-field electron moment.",
      "finding": "The original analysis reports g/2=1.00115965218059(13) with declared trap, cavity and shared-field uncertainty conditions.",
      "limitations": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023.",
        "Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission."
      ],
      "readExtent": "full-primary-publisher-report",
      "reviewedLocators": [
        "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
        "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits",
        "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings",
        "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.1103/PhysRevLett.130.071801",
      "correctionCheck": "The actual publisher report and selected formulas/table were read. The full underlying analysis and all upstream papers are not independently reproduced; exhaustive later correction searches are not claimed."
    },
    {
      "id": "electron-moment-replay",
      "sourceId": "electron-moment-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite electron-moment algebra procedure",
      "preparation": "Evaluate exact g/2-to-anomaly and signed-spin conversions, a synthetic common-field cancellation and nonsimultaneous-field counterexample, a supplied leading-formula substitution, and display-resolution compatibility of Table I quadrature.",
      "observable": "Signed normalization, anomaly conversion, synthetic frequency witnesses and Table I display arithmetic.",
      "finding": "The local finite check preserves anomaly-scaled drift bias and six-term RSS compatibility; it is not the original measurement or a radiative calculation.",
      "limitations": [
        "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed."
      ],
      "readExtent": "scoped-executable-replay",
      "reviewedLocators": [
        "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "The local executable was checked; no publication or experimental provenance is claimed for these newly evaluated finite identities."
    }
  ],
  "comparisons": [
    {
      "id": "fan2023-frequency-lines",
      "candidate": "Figure 3 reports cyclotron and anomaly transition-probability line shapes from alternating quantum-jump trials and an axial Johnson-noise dip. These measured responses precede the separate fitted-frequency record; they are not numerical free-frequency triples.",
      "alternative": "The plotted lines directly provide free frequencies or a full acquired trial stream.",
      "discriminator": "Observe single-electron jump fractions versus drive detuning and the axial noise dip under the declared preparation; preserve separation from model-fitted centers.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless."
      ],
      "sourceIds": [
        "fan2023"
      ],
      "claimIds": [
        "C-phys-fan2023-frequency-lines"
      ]
    },
    {
      "id": "fan2023-cavity-calibration",
      "candidate": "The three distinct calibration methods report mutually consistent mode information; the moment correction uses measured frequencies and Q values for 72 observed cavity modes. No complete 72-row numerical calibration table is bound here.",
      "alternative": "The calibration is the same single-electron jump sample, or 72 modes mean 72 independent moment measurements.",
      "discriminator": "Use the three reported calibration preparations to determine mode frequencies and Q values; do not identify their samples with the precision single-electron trials.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here."
      ],
      "sourceIds": [
        "fan2023"
      ],
      "claimIds": [
        "C-phys-fan2023-cavity-calibration"
      ]
    },
    {
      "id": "fan2023-fitted-frequencies",
      "candidate": "The original thermal/Gaussian line analysis extracts f_bar_c and nu_bar_a and uses the axial-frequency measurement for Equation 5. Figure 3 illustrates the fits, while the rounded frequency scales do not supply all unrounded eleven-field estimates.",
      "alternative": "The fitted frequencies are independent new measurements or rounded explanatory scales reproduce the precision moment.",
      "discriminator": "Fit thermal cyclotron response convolved with Gaussian broadening and the nearly symmetric anomaly response; use the axial measurement without treating approximate explanatory scales as exact fitted inputs.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "The measured records are transition-probability line shapes and an axial noise dip, not a released raw trial table or a direct measurement of the free cyclotron frequency. Thermal/Gaussian model fits extract the required centers; the extra cyclotron broadening has a possible magnetic-fluctuation explanation, not an established unique cause.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "sourceIds": [
        "fan2023"
      ],
      "claimIds": [
        "C-phys-fan2023-fitted-frequencies"
      ]
    },
    {
      "id": "fan2023-cavity-shift",
      "candidate": "The reported renormalized cavity calculation replaces ideal contributions for 72 modes with contributions using measured frequencies and Q values, and gives different Delta_g_cav/2 corrections at eleven magnetic fields as shown in Figure 4.",
      "alternative": "The correction is Schwinger's intrinsic anomaly or cancels automatically in a g-2 ratio.",
      "discriminator": "Use the reported renormalized cavity calculation and replace contributions of selected ideal modes with measured-frequency/Q contributions, retaining model and alignment uncertainty.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "Cavity calibration combines parametrically pumped electrons with separate single-electron lifetime and high-excitation decay protocols. These preparations are distinct from the precision single-electron quantum-jump sample. The reported 72 modes are neither 72 electrons nor 72 independent magnetic-moment measurements; their complete frequency/Q table is not supplied in this admission.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023."
      ],
      "sourceIds": [
        "fan2023"
      ],
      "claimIds": [
        "C-phys-fan2023-cavity-shift"
      ]
    },
    {
      "id": "fan2023-electron-moment",
      "candidate": "The eleven-field corrected inference reports -mu/mu_B=g/2=1.00115965218059(13), with one-standard-deviation absolute uncertainty 1.3e-13 (about 0.13 ppt relative). The reported quantity is g/2; g and its absolute uncertainty are twice those values. This is the 2022 Northwestern determination published in 2023 and is not combined with the 2008 determination.",
      "alternative": "The positive quoted value is g itself, a signed positive electron moment, an independent set of eleven uncertainties or a pooled 2008/2022 result.",
      "discriminator": "Apply the Equation 5 trap/relativistic conversion and explicit calibrated cavity shifts, then combine eleven fields with the reported nearby-field correlations; do not pool the 2008 result.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "The explanatory scales near 5.3 T (149 GHz, 173 MHz, 114 MHz and 43 kHz) are rounded trap-modified frequencies, not eleven exact fitted frequency sets. They cannot reproduce the precision moment. Equation 4 and its Equation 5 expansion do not by themselves determine cavity shifts or prove arbitrary trap imperfections harmless.",
        "The correction Delta_g_cav/2 depends on a reported renormalized cavity calculation, damping and measured mode frequencies/Q values. It is an apparatus-dependent shift, separate from Schwinger's intrinsic leading anomaly. Ideal cylindrical contributions are replaced for 72 observed modes; cavity imperfections and misalignment limit the correction. The underlying calculation and upstream references are not independently replayed here.",
        "The eleven field determinations share line-broadening and cavity-shift uncertainties treated as correlated for nearby fields. The full field covariance and unrounded fit inputs are not supplied here. The authors advise against averaging the 2008 and 2022 results because inter-campaign correlations are difficult to determine; this admission uses only the 2022 Northwestern result published in 2023.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Inverse-alpha inference, atomic reference experiments, the complete Standard Model comparison, electron substructure or BSM limits, positron/CPT tests and an independent review of the 2008 experiment are outside this admission."
      ],
      "sourceIds": [
        "fan2023"
      ],
      "claimIds": [
        "C-phys-fan2023-electron-moment"
      ]
    },
    {
      "id": "electron-moment-arithmetic",
      "candidate": "The reported g/2 gives a_e=0.00115965218059 with the same absolute 1.3e-13 uncertainty. The six Table I components have square-sum 1.8102 and RSS 1.3454367 in 10^-13 units, compatible with the printed total 1.3 under display rounding. Synthetic frequency witnesses distinguish common-field cancellation from anomaly-scaled nonsimultaneous-field bias; the leading formula is evaluated only as supplied algebra.",
      "alternative": "Arithmetic compatibility reproduces the full fit/covariance, a radiative calculation or inverse-alpha determination.",
      "discriminator": "Subtract the exact unit reference to obtain a_e, retain sign and factor-of-two conventions, construct synthetic same/different-field witnesses, evaluate the already supplied leading formula and compare Table I RSS with printed display intervals only.",
      "result": "conditional-support",
      "limit": "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
      "assumptions": [
        "The finite local check evaluates supplied algebra and displayed numbers only. It does not replay raw transitions, line-shape fitting, the invariance-theorem proof, cavity calibration or shifts, eleven-field fitting/covariance, a radiative integral, inverse-alpha inference or cross-campaign pooling.",
        "The reported positive g/2 equals -mu/mu_B under the electron charge -e convention with e>0 and mu_B=e*hbar/(2m)>0. It is not g, a signed positive electron moment, an SI moment or a nuclear-magneton normalization. For spin projection m_s=+1/2, mu_z/mu_B=-g/2; the opposite spin projection reverses this component.",
        "Cancellation of B in ideal frequency ratios assumes common sampling of the same field. Fan alternates anomaly and cyclotron trials, so field drift still matters. In a synthetic separated-field ideal witness the anomaly-derived g/2 is 1+a_e*B_a/B_c, not (g/2)*B_a/B_c. The independent cavity shift is outside this cancellation.",
        "Table I lists the largest absolute uncertainties in g/2 in units of 10^-13: 0.29, 0.94, 0.90, 0.12, 0.10 and 0.09. Their central square-sum is 1.8102 and RSS is about 1.3454367, rounding compatibly with the reported 1.3. This is an arithmetic comparison, not evidence of independent components or reproduction of the full eleven-field covariance. Printed-input rounding bounds are not confidence intervals.",
        "Schwinger's two-page 1948 letter announces a leading perturbative magnetic correction with renormalized experimental mass and a separate discussion of charge renormalization. In its Gaussian-unit convention alpha=e^2/(hbar*c), the displayed correction becomes a_e^(1)=alpha/(2*pi). The historical decimal 0.001162 is not a modern precision prediction; no undocumented alpha input or loop calculation is reconstructed."
      ],
      "sourceIds": [
        "fan2023",
        "schwinger1948",
        "electron-moment-verifier"
      ],
      "claimIds": [
        "C-phys-electron-moment-arithmetic"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:electron-moment-normalization",
      "name": "Signed electron moment, Bohr normalization and anomaly",
      "kind": "definition",
      "description": "For electron charge -e with e>0, mu_B=e*hbar/(2m)>0 and the spin operator relation is mu_vector=-g*mu_B*S_vector/hbar. Define a_e=g/2-1; the reported positive moment magnitude ratio is -mu/mu_B=g/2, with the signed spin projection kept explicit.",
      "claimIds": [
        "D-phys-electron-moment-normalization"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:electron-moment-frequency-ratio",
      "name": "Ideal electron anomaly/cyclotron frequency ratio",
      "kind": "definition",
      "description": "For common B, nu_c=e*B/(2*pi*m), nu_s=(g/2)*nu_c and nu_a=nu_s-nu_c, hence g/2=1+nu_a/nu_c. The free cyclotron frequency is distinct from measured trap-modified line centers; Fan uses the invariance relation and its controlled expansion before adding the cavity shift.",
      "claimIds": [
        "D-phys-electron-moment-frequency-ratio"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:schwinger-leading-anomaly",
      "name": "Schwinger leading electron magnetic anomaly",
      "kind": "definition",
      "description": "The 1948 letter gives delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162 in its Gaussian-unit convention. With alpha=e^2/(hbar*c) this is the positive leading correction a_e^(1)=alpha/(2*pi), or g/2=1+a_e^(1) at that order, using renormalized experimental mass and charge.",
      "claimIds": [
        "D-phys-schwinger-leading-anomaly"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162"
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-moment-context",
      "name": "Single-electron cryogenic Penning preparation",
      "kind": "context",
      "description": "Prepare one electron in a cryogenic cylindrical Penning trap, alternate cyclotron and anomaly quantum-jump trials, and observe spin/cyclotron state changes through axial-frequency shifts; record the axial noise dip separately.",
      "claimIds": [
        "M-phys-fan2023-moment-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-cavity-context",
      "name": "Distinct cavity-mode calibration preparations",
      "kind": "context",
      "description": "Determine cavity mode frequencies and Q values through parametrically pumped electrons, one-electron first-excited-state lifetimes and high-excitation electron decay; retain these calibration preparations separately from the precision jump trials.",
      "claimIds": [
        "M-phys-fan2023-cavity-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-inference-context",
      "name": "Line fitting, trap/cavity correction and moment inference",
      "kind": "context",
      "description": "Fit thermal cyclotron line shapes convolved with Gaussian broadening and the nearly symmetric anomaly lines to extract f_bar_c and nu_bar_a; use the measured axial frequency, Equation 5 trap/relativistic terms, calibrated cavity-shift calculation and an eleven-field weighted combination.",
      "claimIds": [
        "M-phys-fan2023-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:electron-moment-replay-context",
      "name": "Finite electron-moment algebra procedure",
      "kind": "context",
      "description": "Evaluate exact g/2-to-anomaly and signed-spin conversions, a synthetic common-field cancellation and nonsimultaneous-field counterexample, a supplied leading-formula substitution, and display-resolution compatibility of Table I quadrature.",
      "claimIds": [
        "M-phys-electron-moment-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162"
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation"
        },
        {
          "sourceId": "electron-moment-verifier",
          "locator": "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-frequency-lines",
      "name": "Single-electron measured transition and axial lines",
      "kind": "scoped-process",
      "description": "Figure 3 reports cyclotron and anomaly transition-probability line shapes from alternating quantum-jump trials and an axial Johnson-noise dip. These measured responses precede the separate fitted-frequency record; they are not numerical free-frequency triples.",
      "claimIds": [
        "C-phys-fan2023-frequency-lines"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-cavity-calibration",
      "name": "Reported cavity-mode frequency and quality-factor calibration",
      "kind": "scoped-process",
      "description": "The three distinct calibration methods report mutually consistent mode information; the moment correction uses measured frequencies and Q values for 72 observed cavity modes. No complete 72-row numerical calibration table is bound here.",
      "claimIds": [
        "C-phys-fan2023-cavity-calibration"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-fitted-frequencies",
      "name": "Conditional line-fit frequency estimates",
      "kind": "scoped-process",
      "description": "The original thermal/Gaussian line analysis extracts f_bar_c and nu_bar_a and uses the axial-frequency measurement for Equation 5. Figure 3 illustrates the fits, while the rounded frequency scales do not supply all unrounded eleven-field estimates.",
      "claimIds": [
        "C-phys-fan2023-fitted-frequencies"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-cavity-shift",
      "name": "Calibration-conditioned cavity correction",
      "kind": "scoped-process",
      "description": "The reported renormalized cavity calculation replaces ideal contributions for 72 modes with contributions using measured frequencies and Q values, and gives different Delta_g_cav/2 corrections at eleven magnetic fields as shown in Figure 4.",
      "claimIds": [
        "C-phys-fan2023-cavity-shift"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:fan2023-electron-moment",
      "name": "Fan 2022 electron moment in Bohr magnetons",
      "kind": "scoped-process",
      "description": "The eleven-field corrected inference reports -mu/mu_B=g/2=1.00115965218059(13), with one-standard-deviation absolute uncertainty 1.3e-13 (about 0.13 ppt relative). The reported quantity is g/2; g and its absolute uncertainty are twice those values. This is the 2022 Northwestern determination published in 2023 and is not combined with the 2008 determination.",
      "claimIds": [
        "C-phys-fan2023-electron-moment"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2 to 071801-3, Figure 3: axial noise dip, alternating single-electron quantum-jump trials, thermal line shapes and Gaussian-broadened fits"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-3 to 071801-4, Figure 4: distinct cavity-calibration methods, 72 observed modes, modeled frequency shifts and eleven field settings"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    },
    {
      "id": "phys:electron-moment-arithmetic",
      "name": "Electron anomaly conversion and finite arithmetic findings",
      "kind": "scoped-process",
      "description": "The reported g/2 gives a_e=0.00115965218059 with the same absolute 1.3e-13 uncertainty. The six Table I components have square-sum 1.8102 and RSS 1.3454367 in 10^-13 units, compatible with the printed total 1.3 under display rounding. Synthetic frequency witnesses distinguish common-field cancellation from anomaly-scaled nonsimultaneous-field bias; the leading formula is evaluated only as supplied algebra.",
      "claimIds": [
        "C-phys-electron-moment-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction"
        },
        {
          "sourceId": "fan2023",
          "locator": "Physical Review Letters 130, 071801-4, Table I and Equation 6: reported moment, component uncertainties, nearby-field correlations and advice against pooling 2008 and 2022"
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, page 416, On Quantum-Electrodynamics and the Magnetic Moment of the Electron: experimental versus mechanical mass, magnetic interaction and displayed delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162"
        },
        {
          "sourceId": "schwinger1948",
          "locator": "Physical Review 73, pages 416-417, continuation of Schwinger letter: separate charge renormalization and vacuum-polarization discussion; detailed account announced as in preparation"
        },
        {
          "sourceId": "electron-moment-verifier",
          "locator": "verify(): signed spin normalization and anomaly conversion; synthetic same-field and nonsimultaneous anomaly/cyclotron identities; supplied leading-formula substitution and six-term Table I display-precision quadrature"
        }
      ],
      "openObligations": [
        "Preserve the declared quantity, preparation, inference and finite-check boundaries."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:electron-normalization-frequency-ratio",
      "source": "phys:electron-moment-normalization",
      "target": "phys:electron-moment-frequency-ratio",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The ideal anomaly/cyclotron ratio yields the defined dimensionless g/2, with signed Bohr normalization and finite apparatus corrections kept explicit.",
      "claimIds": [
        "D-phys-electron-moment-normalization",
        "D-phys-electron-moment-frequency-ratio"
      ]
    },
    {
      "id": "physics:electron-normalization-schwinger-anomaly",
      "source": "phys:electron-moment-normalization",
      "target": "phys:schwinger-leading-anomaly",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The definition a_e=g/2-1 expresses the historical leading magnetic correction in modern normalization; this is not an experimental calibration dependency.",
      "claimIds": [
        "D-phys-electron-moment-normalization",
        "D-phys-schwinger-leading-anomaly"
      ]
    },
    {
      "id": "physics:fan-acquisition-lines",
      "source": "phys:fan2023-moment-context",
      "target": "phys:fan2023-frequency-lines",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The single-electron preparation and alternating jump/axial readout support the measured line responses.",
      "claimIds": [
        "M-phys-fan2023-frequency-lines"
      ],
      "contextIds": [
        "fan2023-moment-acquisition"
      ]
    },
    {
      "id": "physics:fan-calibration-modes",
      "source": "phys:fan2023-cavity-context",
      "target": "phys:fan2023-cavity-calibration",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The distinct cavity-calibration preparations support the reported mode frequency and Q information.",
      "claimIds": [
        "M-phys-fan2023-cavity-calibration"
      ],
      "contextIds": [
        "fan2023-cavity-calibration"
      ]
    },
    {
      "id": "physics:fan-lines-frequencies",
      "source": "phys:fan2023-frequency-lines",
      "target": "phys:fan2023-fitted-frequencies",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted centers reuse the measured line responses; they are computational estimates rather than new acquisitions.",
      "claimIds": [
        "M-phys-fan2023-fitted-frequencies"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-inference-frequencies",
      "source": "phys:fan2023-inference-context",
      "target": "phys:fan2023-fitted-frequencies",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Thermal line theory and Gaussian broadening condition the fitted cyclotron/anomaly frequencies.",
      "claimIds": [
        "M-phys-fan2023-fitted-frequencies"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-modes-cavity-shift",
      "source": "phys:fan2023-cavity-calibration",
      "target": "phys:fan2023-cavity-shift",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Measured mode frequencies and Q values supply calibration inputs to the apparatus-dependent correction.",
      "claimIds": [
        "M-phys-fan2023-cavity-shift"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-inference-cavity-shift",
      "source": "phys:fan2023-inference-context",
      "target": "phys:fan2023-cavity-shift",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported renormalized cavity model and damping treatment convert the calibration into frequency-dependent shifts.",
      "claimIds": [
        "M-phys-fan2023-cavity-shift"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-frequencies-moment",
      "source": "phys:fan2023-fitted-frequencies",
      "target": "phys:fan2023-electron-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Fitted frequency estimates and the measured axial response enter the declared trap conversion for the moment inference.",
      "claimIds": [
        "M-phys-fan2023-electron-moment"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-cavity-shift-moment",
      "source": "phys:fan2023-cavity-shift",
      "target": "phys:fan2023-electron-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The cavity correction is added explicitly and is not removed by the anomaly/cyclotron ratio.",
      "claimIds": [
        "M-phys-fan2023-electron-moment"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-inference-moment",
      "source": "phys:fan2023-inference-context",
      "target": "phys:fan2023-electron-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The original correction and eleven-field combination condition the final published moment and uncertainty.",
      "claimIds": [
        "M-phys-fan2023-electron-moment"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:electron-frequency-definition-moment",
      "source": "phys:electron-moment-frequency-ratio",
      "target": "phys:fan2023-electron-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ideal ratio identifies g/2; the actual extraction retains trap, relativistic and cavity terms rather than substituting rounded frequencies.",
      "claimIds": [
        "M-phys-fan2023-electron-moment"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:electron-normalization-moment",
      "source": "phys:electron-moment-normalization",
      "target": "phys:fan2023-electron-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The result uses the electron signed Bohr-magneton convention, with g/2 distinct from g.",
      "claimIds": [
        "M-phys-fan2023-electron-moment"
      ],
      "contextIds": [
        "fan2023-moment-inference"
      ]
    },
    {
      "id": "physics:fan-moment-arithmetic",
      "source": "phys:fan2023-electron-moment",
      "target": "phys:electron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The published central value, uncertainty and Table I components supply inputs to the bounded local conversion and display check.",
      "claimIds": [
        "M-phys-electron-moment-arithmetic"
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "physics:electron-normalization-arithmetic",
      "source": "phys:electron-moment-normalization",
      "target": "phys:electron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The signed normalization and anomaly definition determine the algebraic conversion, not an independent moment measurement.",
      "claimIds": [
        "M-phys-electron-moment-arithmetic"
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "physics:electron-frequency-definition-arithmetic",
      "source": "phys:electron-moment-frequency-ratio",
      "target": "phys:electron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ideal frequency equations supply the explicit assumptions for the synthetic common-field and drift counterexamples.",
      "claimIds": [
        "M-phys-electron-moment-arithmetic"
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "physics:schwinger-leading-arithmetic",
      "source": "phys:schwinger-leading-anomaly",
      "target": "phys:electron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The supplied leading-order formula is evaluated for a labeled synthetic alpha; no radiative integral or experimental alpha inference is reproduced.",
      "claimIds": [
        "M-phys-electron-moment-arithmetic"
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    },
    {
      "id": "physics:electron-replay-arithmetic",
      "source": "phys:electron-moment-replay-context",
      "target": "phys:electron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The executable supplies only local finite algebra and displayed-number comparisons, with its limits preserved.",
      "claimIds": [
        "M-phys-electron-moment-arithmetic"
      ],
      "contextIds": [
        "electron-moment-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:electron-moment-normalization",
      "role": "definition",
      "denotes": "For electron charge -e with e>0, mu_B=e*hbar/(2m)>0 and the spin operator relation is mu_vector=-g*mu_B*S_vector/hbar. Define a_e=g/2-1; the reported positive moment magnitude ratio is -mu/mu_B=g/2, with the signed spin projection kept explicit.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-electron-moment-normalization"
      ]
    },
    {
      "nodeId": "phys:electron-moment-frequency-ratio",
      "role": "definition",
      "denotes": "For common B, nu_c=e*B/(2*pi*m), nu_s=(g/2)*nu_c and nu_a=nu_s-nu_c, hence g/2=1+nu_a/nu_c. The free cyclotron frequency is distinct from measured trap-modified line centers; Fan uses the invariance relation and its controlled expansion before adding the cavity shift.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-electron-moment-frequency-ratio"
      ]
    },
    {
      "nodeId": "phys:schwinger-leading-anomaly",
      "role": "definition",
      "denotes": "The 1948 letter gives delta_mu/mu=e^2/(2*pi*hbar*c)=0.001162 in its Gaussian-unit convention. With alpha=e^2/(hbar*c) this is the positive leading correction a_e^(1)=alpha/(2*pi), or g/2=1+a_e^(1) at that order, using renormalized experimental mass and charge.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-schwinger-leading-anomaly"
      ]
    },
    {
      "nodeId": "phys:fan2023-moment-context",
      "role": "experimental-context",
      "denotes": "Prepare one electron in a cryogenic cylindrical Penning trap, alternate cyclotron and anomaly quantum-jump trials, and observe spin/cyclotron state changes through axial-frequency shifts; record the axial noise dip separately.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-fan2023-moment-context"
      ]
    },
    {
      "nodeId": "phys:fan2023-cavity-context",
      "role": "experimental-context",
      "denotes": "Determine cavity mode frequencies and Q values through parametrically pumped electrons, one-electron first-excited-state lifetimes and high-excitation electron decay; retain these calibration preparations separately from the precision jump trials.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-fan2023-cavity-context"
      ]
    },
    {
      "nodeId": "phys:fan2023-inference-context",
      "role": "model-context",
      "denotes": "Fit thermal cyclotron line shapes convolved with Gaussian broadening and the nearly symmetric anomaly lines to extract f_bar_c and nu_bar_a; use the measured axial frequency, Equation 5 trap/relativistic terms, calibrated cavity-shift calculation and an eleven-field weighted combination.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-fan2023-inference-context"
      ]
    },
    {
      "nodeId": "phys:electron-moment-replay-context",
      "role": "model-context",
      "denotes": "Evaluate exact g/2-to-anomaly and signed-spin conversions, a synthetic common-field cancellation and nonsimultaneous-field counterexample, a supplied leading-formula substitution, and display-resolution compatibility of Table I quadrature.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-electron-moment-replay-context"
      ]
    },
    {
      "nodeId": "phys:fan2023-frequency-lines",
      "role": "scoped-phenomenon",
      "denotes": "Figure 3 reports cyclotron and anomaly transition-probability line shapes from alternating quantum-jump trials and an axial Johnson-noise dip. These measured responses precede the separate fitted-frequency record; they are not numerical free-frequency triples.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-fan2023-frequency-lines"
      ]
    },
    {
      "nodeId": "phys:fan2023-cavity-calibration",
      "role": "scoped-phenomenon",
      "denotes": "The three distinct calibration methods report mutually consistent mode information; the moment correction uses measured frequencies and Q values for 72 observed cavity modes. No complete 72-row numerical calibration table is bound here.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-fan2023-cavity-calibration"
      ]
    },
    {
      "nodeId": "phys:fan2023-fitted-frequencies",
      "role": "scoped-phenomenon",
      "denotes": "The original thermal/Gaussian line analysis extracts f_bar_c and nu_bar_a and uses the axial-frequency measurement for Equation 5. Figure 3 illustrates the fits, while the rounded frequency scales do not supply all unrounded eleven-field estimates.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-fan2023-fitted-frequencies"
      ]
    },
    {
      "nodeId": "phys:fan2023-cavity-shift",
      "role": "scoped-phenomenon",
      "denotes": "The reported renormalized cavity calculation replaces ideal contributions for 72 modes with contributions using measured frequencies and Q values, and gives different Delta_g_cav/2 corrections at eleven magnetic fields as shown in Figure 4.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-fan2023-cavity-shift"
      ]
    },
    {
      "nodeId": "phys:fan2023-electron-moment",
      "role": "scoped-phenomenon",
      "denotes": "The eleven-field corrected inference reports -mu/mu_B=g/2=1.00115965218059(13), with one-standard-deviation absolute uncertainty 1.3e-13 (about 0.13 ppt relative). The reported quantity is g/2; g and its absolute uncertainty are twice those values. This is the 2022 Northwestern determination published in 2023 and is not combined with the 2008 determination.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-fan2023-electron-moment"
      ]
    },
    {
      "nodeId": "phys:electron-moment-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The reported g/2 gives a_e=0.00115965218059 with the same absolute 1.3e-13 uncertainty. The six Table I components have square-sum 1.8102 and RSS 1.3454367 in 10^-13 units, compatible with the printed total 1.3 under display rounding. Synthetic frequency witnesses distinguish common-field cancellation from anomaly-scaled nonsimultaneous-field bias; the leading formula is evaluated only as supplied algebra.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-electron-moment-arithmetic"
      ]
    }
  ]
};

/** Preserve signed normalization, distinct preparations and finite-check scope. */
export function validateElectronMomentContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing electron-moment ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Electron-moment ${kind} changed ${id}.${key}: preserve measurement, inference and normalization boundaries`);
      }
    }
  }
}
