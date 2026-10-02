import assert from "node:assert/strict";

export const VACUUM_POLARIZATION_CHECKS = new Map([["vacuum-polarization-shape-algebra", "C-phys-vacuum-polarization-arithmetic"]]);
export const VACUUM_POLARIZATION_ANALYTICAL_SOURCES = new Map([["C-phys-vacuum-polarization-arithmetic", "vacuum-polarization-verifier"]]);
export const VACUUM_POLARIZATION_ADMISSION = {
  "definitions": [
    [
      "phys:qed-effective-coupling",
      "D-phys-qed-effective-coupling"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "l3-small-angle-context",
      "M-phys-l3-small-angle-context",
      [
        "l3-2000-small-angle"
      ]
    ],
    [
      "l3-running-model",
      "M-phys-l3-running-model",
      [
        "l3-2000-running-fit"
      ]
    ],
    [
      "vacuum-polarization-replay-context",
      "M-phys-vacuum-polarization-replay-context",
      [
        "vacuum-polarization-replay"
      ]
    ]
  ],
  "observations": [
    [
      "l3-angular-shape",
      "C-phys-l3-angular-shape",
      [
        "l3-2000-small-angle"
      ]
    ],
    [
      "l3-running-slope",
      "C-phys-l3-running-slope",
      [
        "l3-2000-running-fit"
      ]
    ],
    [
      "l3-running-difference",
      "C-phys-l3-running-difference",
      [
        "l3-2000-running-fit"
      ]
    ],
    [
      "vacuum-polarization-arithmetic",
      "C-phys-vacuum-polarization-arithmetic",
      [
        "vacuum-polarization-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "l3-small-angle-context-l3-angular-shape",
      "l3-small-angle-context",
      "l3-angular-shape",
      "M-phys-l3-angular-shape",
      "measurement-context"
    ],
    [
      "l3-running-model-l3-angular-shape",
      "l3-running-model",
      "l3-angular-shape",
      "M-phys-l3-angular-shape",
      "interpretation-dependency"
    ],
    [
      "qed-effective-coupling-l3-running-slope",
      "qed-effective-coupling",
      "l3-running-slope",
      "M-phys-l3-running-slope",
      "interpretation-dependency"
    ],
    [
      "l3-angular-shape-l3-running-slope",
      "l3-angular-shape",
      "l3-running-slope",
      "M-phys-l3-running-slope",
      "interpretation-dependency"
    ],
    [
      "l3-running-model-l3-running-slope",
      "l3-running-model",
      "l3-running-slope",
      "M-phys-l3-running-slope",
      "interpretation-dependency"
    ],
    [
      "qed-effective-coupling-l3-running-difference",
      "qed-effective-coupling",
      "l3-running-difference",
      "M-phys-l3-running-difference",
      "interpretation-dependency"
    ],
    [
      "l3-running-slope-l3-running-difference",
      "l3-running-slope",
      "l3-running-difference",
      "M-phys-l3-running-difference",
      "interpretation-dependency"
    ],
    [
      "l3-running-model-l3-running-difference",
      "l3-running-model",
      "l3-running-difference",
      "M-phys-l3-running-difference",
      "interpretation-dependency"
    ],
    [
      "qed-effective-coupling-vacuum-polarization-arithmetic",
      "qed-effective-coupling",
      "vacuum-polarization-arithmetic",
      "M-phys-vacuum-polarization-arithmetic",
      "interpretation-dependency"
    ],
    [
      "l3-running-model-vacuum-polarization-arithmetic",
      "l3-running-model",
      "vacuum-polarization-arithmetic",
      "M-phys-vacuum-polarization-arithmetic",
      "interpretation-dependency"
    ],
    [
      "l3-running-slope-vacuum-polarization-arithmetic",
      "l3-running-slope",
      "vacuum-polarization-arithmetic",
      "M-phys-vacuum-polarization-arithmetic",
      "interpretation-dependency"
    ],
    [
      "vacuum-polarization-replay-context-vacuum-polarization-arithmetic",
      "vacuum-polarization-replay-context",
      "vacuum-polarization-arithmetic",
      "M-phys-vacuum-polarization-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "l3-2000-small-angle",
    "l3-2000-running-fit",
    "vacuum-polarization-replay"
  ],
  "comparisonIds": [
    "l3-small-angle-running",
    "vacuum-polarization-replay"
  ],
  "inferenceSources": [
    [
      "M-phys-l3-small-angle-context",
      [
        "l3-2000-running"
      ]
    ],
    [
      "C-phys-l3-angular-shape",
      [
        "l3-2000-running"
      ]
    ],
    [
      "M-phys-l3-angular-shape",
      [
        "l3-2000-running"
      ]
    ],
    [
      "M-phys-l3-running-model",
      [
        "l3-2000-running"
      ]
    ],
    [
      "C-phys-l3-running-slope",
      [
        "l3-2000-running"
      ]
    ],
    [
      "M-phys-l3-running-slope",
      [
        "l3-2000-running"
      ]
    ],
    [
      "C-phys-l3-running-difference",
      [
        "l3-2000-running"
      ]
    ],
    [
      "M-phys-l3-running-difference",
      [
        "l3-2000-running"
      ]
    ],
    [
      "M-phys-vacuum-polarization-replay-context",
      [
        "l3-2000-running",
        "vacuum-polarization-verifier"
      ]
    ],
    [
      "C-phys-vacuum-polarization-arithmetic",
      [
        "l3-2000-running",
        "vacuum-polarization-verifier"
      ]
    ],
    [
      "M-phys-vacuum-polarization-arithmetic",
      [
        "l3-2000-running",
        "vacuum-polarization-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "vacuum-polarization-replay",
      "vacuum-polarization-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "l3-2000-running",
      "kind": "research-publication",
      "title": "Measurement of the Running of the Fine-Structure Constant",
      "authors": [
        "L3 Collaboration"
      ],
      "year": 2000,
      "doi": "10.1016/S0370-2693(00)00122-2",
      "url": "https://arxiv.org/pdf/hep-ex/0002035v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-small-angle-analysis",
        "locators": [
          "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets",
          "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "arXiv:hep-ex/0002035v1 pages 4-5, Results and Figure 1: 1994 measured-to-predicted fractional event weights under two theoretical denominators",
          "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor"
        ],
        "limit": "Author-v1 pages 1-6 were read through the small-angle result; pages 7 and 9-10 were read for its interpretation and display convention, and page 11 for the named simulation versions. Equations 2-4 and Figures 1 and 3 were visually inspected. The cover and arXiv metadata name the collective L3 Collaboration author; the individual roster appears on page 12. The indexed arXiv abstract compresses the beam-energy description, whereas the PDF explicitly distinguishes 1993-1995 near-Z and 1998 large-angle data. The latter analysis and referenced theory/detector publications are not admitted; publisher bytes, raw data and code were not reviewed."
      }
    },
    {
      "id": "vacuum-polarization-verifier",
      "kind": "executable-check",
      "title": "Bounded effective-alpha shape and parameterization algebra",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-vacuum-polarization.py",
      "sha256": "9774d75a8e3275ac163a8699e9bfc96eeea52223103a8b00838152cbe661f46e",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints"
        ],
        "limit": "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation. No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-qed-effective-coupling",
      "kind": "review-finding",
      "statement": "In the L3 QED convention alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)), where DeltaAlpha parameterizes vacuum-polarization corrections. The Bhabha analysis uses signed Q^2=t=-s*(1-cos(theta))/2<0 in the spacelike region; this alpha is the electromagnetic coupling, not alpha_s.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval."
      ]
    },
    {
      "id": "M-phys-l3-small-angle-context",
      "kind": "method",
      "statement": "Select L3 Bhabha events near the Z resonance in 1993-1995 with BGO energy thresholds of 0.8 and 0.4 times beam energy. Use silicon/BGO coordinates and the 32-54 mrad fiducial region with boundaries 32,35,40,46,54 mrad; enter four coordinates per event with weight 0.25. The retained sample is 6.7 million events, grouped into seven year/energy sets.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "The luminosity monitor also supplies the small-angle data, so the analysis uses normalized angular shape rather than an independent absolute cross section or alpha value. Figure 1 contains two model denominators applied to the same 1994 subset, not two acquisitions; neither event weights nor the plotted fractions are numerically transcribed here."
      ],
      "contextIds": [
        "l3-2000-small-angle"
      ]
    },
    {
      "id": "C-phys-l3-angular-shape",
      "kind": "review-finding",
      "statement": "The analysis measures weighted four-bin angular fractions in seven 1993-1995 year/energy data sets after the stated detector corrections. Figure 1 displays the 1994 subset as ratios to the normal-running and no-running predictions: two theoretical denominators for the same subset, not independent measurements or absolute cross sections.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4-5, Results and Figure 1: 1994 measured-to-predicted fractional event weights under two theoretical denominators",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "The luminosity monitor also supplies the small-angle data, so the analysis uses normalized angular shape rather than an independent absolute cross section or alpha value. Figure 1 contains two model denominators applied to the same 1994 subset, not two acquisitions; neither event weights nor the plotted fractions are numerically transcribed here.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets."
      ],
      "contextIds": [
        "l3-2000-small-angle"
      ]
    },
    {
      "id": "M-phys-l3-angular-shape",
      "kind": "method",
      "statement": "Interpret the weighted angular distribution through the specified event selection, binwise detector correction and theoretical denominator; keep the plotted 1994 subset separate from the combined fit over seven data sets.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4-5, Results and Figure 1: 1994 measured-to-predicted fractional event weights under two theoretical denominators",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "The luminosity monitor also supplies the small-angle data, so the analysis uses normalized angular shape rather than an independent absolute cross section or alpha value. Figure 1 contains two model denominators applied to the same 1994 subset, not two acquisitions; neither event weights nor the plotted fractions are numerically transcribed here.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets."
      ],
      "contextIds": [
        "l3-2000-small-angle"
      ]
    },
    {
      "id": "M-phys-l3-running-model",
      "kind": "method",
      "statement": "Use the corrected angular fractions and the multinomial shape likelihood of Equation 2 with modified BHLUMI 4.04. Equation 3 uses alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)-S*(Q^2-Q0^2)), with Q0^2=-2.1 GeV^2, nominal running as the reference and unchanged timelike running.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets.",
        "The opposite detector sides give S=-6.7e-4 and -0.5e-4 GeV^-2. The authors attribute their discrepancy to incomplete beam-pipe material simulation and assign half the difference, 3.1e-4 GeV^-2, as a dominant systematic contribution. This is retained, not averaged into independent precision measurements.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "C-phys-l3-running-slope",
      "kind": "review-finding",
      "statement": "The combined small-angle analysis reports S=(-3.6 +/- 2.7 statistical +/- 3.5 systematic)*10^-4 GeV^-2 in Equation 4. S is a fitted deformation of nominal spacelike running; zero slope does not mean a constant coupling.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The opposite detector sides give S=-6.7e-4 and -0.5e-4 GeV^-2. The authors attribute their discrepancy to incomplete beam-pipe material simulation and assign half the difference, 3.1e-4 GeV^-2, as a dominant systematic contribution. This is retained, not averaged into independent precision measurements.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "M-phys-l3-running-slope",
      "kind": "method",
      "statement": "Fit the same seven angular data sets under the specified normalized theory and correction model, retaining shared simulation uncertainties and the beam-pipe material systematic.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The opposite detector sides give S=-6.7e-4 and -0.5e-4 GeV^-2. The authors attribute their discrepancy to incomplete beam-pipe material simulation and assign half the difference, 3.1e-4 GeV^-2, as a dominant systematic contribution. This is retained, not averaged into independent precision measurements.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "C-phys-l3-running-difference",
      "kind": "review-finding",
      "statement": "L3 interprets the same small-angle fit as alpha^-1(-2.1 GeV^2)-alpha^-1(-6.25 GeV^2)=0.78 +/- 0.26, with total experimental uncertainty. This is a conditional running-coupling difference, not an additional acquisition or two absolute coupling measurements.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "M-phys-l3-running-difference",
      "kind": "method",
      "statement": "Translate the fitted spacelike deformation and nominal DeltaAlpha prediction into the reported inverse-coupling difference. Preserve the same acquisition and the theory-fixed lower-scale anchor used for Figure 3.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "M-phys-vacuum-polarization-replay-context",
      "kind": "method",
      "statement": "Use exact rational arithmetic for synthetic four-bin cross-section integrals, common positive rescaling and Equation 3. Adopt only the printed central alpha^-1(0)=137.03599976, S=-0.00036 GeV^-2 and endpoints -2.1,-6.25 GeV^2 for the added-deformation calculation.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "vacuum-polarization-verifier",
          "locator": "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    },
    {
      "id": "C-phys-vacuum-polarization-arithmetic",
      "kind": "review-finding",
      "statement": "Nine synthetic common-scale checks preserve normalized four-bin fractions, while three nonuniform controls change the shape. Equation 3 gives an added inverse-alpha difference of 0.20473178364144 for the printed reference and slope; the nominal contribution and full reported difference are not calculated.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "vacuum-polarization-verifier",
          "locator": "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints",
          "role": "supports",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [
        "vacuum-polarization-shape-algebra"
      ],
      "limitations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    },
    {
      "id": "M-phys-vacuum-polarization-arithmetic",
      "kind": "method",
      "statement": "Check only normalization invariance and the signed deformation identity alpha0^-1*S*(Q^2-Q0^2); the published slope is an input and the nominal DeltaAlpha values used for the identity witness are explicitly synthetic.",
      "scope": "The selected L3 small-angle preparation and conditional electromagnetic running analysis; bounded local algebra is separate from experimental inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        },
        {
          "sourceId": "vacuum-polarization-verifier",
          "locator": "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints",
          "role": "method",
          "note": "Supports only this specified convention, selected L3 analysis stage or bounded local algebra."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:qed-effective-coupling",
      "name": "QED effective coupling convention",
      "kind": "definition",
      "description": "In the L3 QED convention alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)), where DeltaAlpha parameterizes vacuum-polarization corrections. The Bhabha analysis uses signed Q^2=t=-s*(1-cos(theta))/2<0 in the spacelike region; this alpha is the electromagnetic coupling, not alpha_s.",
      "claimIds": [
        "D-phys-qed-effective-coupling"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:l3-small-angle-context",
      "name": "L3 weighted small-angle acquisition",
      "kind": "context",
      "description": "Select L3 Bhabha events near the Z resonance in 1993-1995 with BGO energy thresholds of 0.8 and 0.4 times beam energy. Use silicon/BGO coordinates and the 32-54 mrad fiducial region with boundaries 32,35,40,46,54 mrad; enter four coordinates per event with weight 0.25. The retained sample is 6.7 million events, grouped into seven year/energy sets.",
      "claimIds": [
        "M-phys-l3-small-angle-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:l3-angular-shape",
      "name": "L3 normalized angular response",
      "kind": "scoped-process",
      "description": "The analysis measures weighted four-bin angular fractions in seven 1993-1995 year/energy data sets after the stated detector corrections. Figure 1 displays the 1994 subset as ratios to the normal-running and no-running predictions: two theoretical denominators for the same subset, not independent measurements or absolute cross sections.",
      "claimIds": [
        "C-phys-l3-angular-shape"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4-5, Results and Figure 1: 1994 measured-to-predicted fractional event weights under two theoretical denominators"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:l3-running-model",
      "name": "L3 normalized running-coupling model",
      "kind": "context",
      "description": "Use the corrected angular fractions and the multinomial shape likelihood of Equation 2 with modified BHLUMI 4.04. Equation 3 uses alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)-S*(Q^2-Q0^2)), with Q0^2=-2.1 GeV^2, nominal running as the reference and unchanged timelike running.",
      "claimIds": [
        "M-phys-l3-running-model"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:l3-running-slope",
      "name": "L3 fitted spacelike deformation",
      "kind": "scoped-process",
      "description": "The combined small-angle analysis reports S=(-3.6 +/- 2.7 statistical +/- 3.5 systematic)*10^-4 GeV^-2 in Equation 4. S is a fitted deformation of nominal spacelike running; zero slope does not mean a constant coupling.",
      "claimIds": [
        "C-phys-l3-running-slope"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:l3-running-difference",
      "name": "L3 conditional inverse-alpha difference",
      "kind": "scoped-process",
      "description": "L3 interprets the same small-angle fit as alpha^-1(-2.1 GeV^2)-alpha^-1(-6.25 GeV^2)=0.78 +/- 0.26, with total experimental uncertainty. This is a conditional running-coupling difference, not an additional acquisition or two absolute coupling measurements.",
      "claimIds": [
        "C-phys-l3-running-difference"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor"
        }
      ],
      "openObligations": [
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ]
    },
    {
      "id": "phys:vacuum-polarization-replay-context",
      "name": "Effective-alpha algebra calculation",
      "kind": "context",
      "description": "Use exact rational arithmetic for synthetic four-bin cross-section integrals, common positive rescaling and Equation 3. Adopt only the printed central alpha^-1(0)=137.03599976, S=-0.00036 GeV^-2 and endpoints -2.1,-6.25 GeV^2 for the added-deformation calculation.",
      "claimIds": [
        "M-phys-vacuum-polarization-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope"
        },
        {
          "sourceId": "vacuum-polarization-verifier",
          "locator": "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints"
        }
      ],
      "openObligations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation."
      ]
    },
    {
      "id": "phys:vacuum-polarization-arithmetic",
      "name": "Normalized shape and alpha deformation algebra",
      "kind": "scoped-process",
      "description": "Nine synthetic common-scale checks preserve normalized four-bin fractions, while three nonuniform controls change the shape. Equation 3 gives an added inverse-alpha difference of 0.20473178364144 for the printed reference and slope; the nominal contribution and full reported difference are not calculated.",
      "claimIds": [
        "C-phys-vacuum-polarization-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
        },
        {
          "sourceId": "l3-2000-running",
          "locator": "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope"
        },
        {
          "sourceId": "vacuum-polarization-verifier",
          "locator": "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints"
        }
      ],
      "openObligations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:l3-small-angle-context-l3-angular-shape",
      "source": "phys:l3-small-angle-context",
      "target": "phys:l3-angular-shape",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Selection and quarter-weighted coordinates delimit the observed angular shape.",
      "claimIds": [
        "M-phys-l3-angular-shape"
      ],
      "contextIds": [
        "l3-2000-small-angle"
      ]
    },
    {
      "id": "physics:l3-running-model-l3-angular-shape",
      "source": "phys:l3-running-model",
      "target": "phys:l3-angular-shape",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The displayed ratios already use detector corrections and theoretical denominators; they are not unprocessed counts.",
      "claimIds": [
        "M-phys-l3-angular-shape"
      ],
      "contextIds": [
        "l3-2000-small-angle"
      ]
    },
    {
      "id": "physics:qed-effective-coupling-l3-running-slope",
      "source": "phys:qed-effective-coupling",
      "target": "phys:l3-running-slope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The signed spacelike effective-coupling convention fixes what the fitted deformation means.",
      "claimIds": [
        "M-phys-l3-running-slope"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-angular-shape-l3-running-slope",
      "source": "phys:l3-angular-shape",
      "target": "phys:l3-running-slope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted result uses the same angular acquisition; Figure 1 shows only its 1994 subset.",
      "claimIds": [
        "M-phys-l3-running-slope"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-running-model-l3-running-slope",
      "source": "phys:l3-running-model",
      "target": "phys:l3-running-slope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The normalized likelihood, nominal running and correlated corrections condition the reported slope.",
      "claimIds": [
        "M-phys-l3-running-slope"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:qed-effective-coupling-l3-running-difference",
      "source": "phys:qed-effective-coupling",
      "target": "phys:l3-running-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The effective-alpha convention distinguishes a difference from an absolute coupling measurement.",
      "claimIds": [
        "M-phys-l3-running-difference"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-running-slope-l3-running-difference",
      "source": "phys:l3-running-slope",
      "target": "phys:l3-running-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported inverse-alpha difference interprets this same fitted deformation; it is not an independent acquisition.",
      "claimIds": [
        "M-phys-l3-running-difference"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:l3-running-model-l3-running-difference",
      "source": "phys:l3-running-model",
      "target": "phys:l3-running-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The nominal DeltaAlpha prediction and lower-scale theoretical anchor remain inputs to the running interpretation.",
      "claimIds": [
        "M-phys-l3-running-difference"
      ],
      "contextIds": [
        "l3-2000-running-fit"
      ]
    },
    {
      "id": "physics:qed-effective-coupling-vacuum-polarization-arithmetic",
      "source": "phys:qed-effective-coupling",
      "target": "phys:vacuum-polarization-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Equation 1 fixes the coupling convention for the bounded inversion identity.",
      "claimIds": [
        "M-phys-vacuum-polarization-arithmetic"
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    },
    {
      "id": "physics:l3-running-model-vacuum-polarization-arithmetic",
      "source": "phys:l3-running-model",
      "target": "phys:vacuum-polarization-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Equations 2-3 supply normalized-fraction and deformation formulas; the nominal prediction and likelihood are not replayed.",
      "claimIds": [
        "M-phys-vacuum-polarization-arithmetic"
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    },
    {
      "id": "physics:l3-running-slope-vacuum-polarization-arithmetic",
      "source": "phys:l3-running-slope",
      "target": "phys:vacuum-polarization-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed slope is a numerical input to the deformation calculation, not a locally fitted output.",
      "claimIds": [
        "M-phys-vacuum-polarization-arithmetic"
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    },
    {
      "id": "physics:vacuum-polarization-replay-context-vacuum-polarization-arithmetic",
      "source": "phys:vacuum-polarization-replay-context",
      "target": "phys:vacuum-polarization-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared synthetic inputs and finite procedure bound the local result.",
      "claimIds": [
        "M-phys-vacuum-polarization-arithmetic"
      ],
      "contextIds": [
        "vacuum-polarization-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "l3-2000-small-angle",
      "sourceId": "l3-2000-running",
      "studyType": "primary-experiment",
      "doi": "10.1016/S0370-2693(00)00122-2",
      "journal": "Physics Letters B",
      "volume": "476",
      "issue": "1-2",
      "pages": "40-48",
      "system": "L3 small-angle Bhabha scattering near the Z resonance",
      "preparation": "Select L3 Bhabha events near the Z resonance in 1993-1995 with BGO energy thresholds of 0.8 and 0.4 times beam energy. Use silicon/BGO coordinates and the 32-54 mrad fiducial region with boundaries 32,35,40,46,54 mrad; enter four coordinates per event with weight 0.25. The retained sample is 6.7 million events, grouped into seven year/energy sets.",
      "observable": "Weighted angular response and conditional spacelike running",
      "finding": "The analysis measures weighted four-bin angular fractions in seven 1993-1995 year/energy data sets after the stated detector corrections. Figure 1 displays the 1994 subset as ratios to the normal-running and no-running predictions: two theoretical denominators for the same subset, not independent measurements or absolute cross sections.",
      "limitations": [
        "This admission concerns the 1993-1995 small-angle data near the Z resonance. The separate 1998 large-angle acquisition at 188.7 GeV is not imported. Four coordinate measurements weighted 0.25 belong to each event; seven year/energy data sets do not supply seven independent instruments or uncorrelated replicas.",
        "The luminosity monitor also supplies the small-angle data, so the analysis uses normalized angular shape rather than an independent absolute cross section or alpha value. Figure 1 contains two model denominators applied to the same 1994 subset, not two acquisitions; neither event weights nor the plotted fractions are numerically transcribed here.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets."
      ],
      "readExtent": "selected-primary-small-angle-analysis",
      "reviewedLocators": [
        "arXiv:hep-ex/0002035v1 pages 2-3, Small-angle Bhabha Scattering, Data Analysis: 1993-1995 selection, four weighted coordinates, angular bins and seven data sets",
        "arXiv:hep-ex/0002035v1 pages 4-5, Results and Figure 1: 1994 measured-to-predicted fractional event weights under two theoretical denominators",
        "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0002035v1",
      "correctionCheck": "Versioned author report and journal identity checked; selected small-angle analysis only, not an exhaustive later-correction or latest-result review."
    },
    {
      "id": "l3-2000-running-fit",
      "sourceId": "l3-2000-running",
      "studyType": "computational-analysis",
      "doi": "10.1016/S0370-2693(00)00122-2",
      "journal": "Physics Letters B",
      "volume": "476",
      "issue": "1-2",
      "pages": "40-48",
      "system": "L3 small-angle Bhabha scattering near the Z resonance",
      "preparation": "Use the corrected angular fractions and the multinomial shape likelihood of Equation 2 with modified BHLUMI 4.04. Equation 3 uses alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)-S*(Q^2-Q0^2)), with Q0^2=-2.1 GeV^2, nominal running as the reference and unchanged timelike running.",
      "observable": "Weighted angular response and conditional spacelike running",
      "finding": "The combined small-angle analysis reports S=(-3.6 +/- 2.7 statistical +/- 3.5 systematic)*10^-4 GeV^-2 in Equation 4. S is a fitted deformation of nominal spacelike running; zero slope does not mean a constant coupling. L3 interprets the same small-angle fit as alpha^-1(-2.1 GeV^2)-alpha^-1(-6.25 GeV^2)=0.78 +/- 0.26, with total experimental uncertainty. This is a conditional running-coupling difference, not an additional acquisition or two absolute coupling measurements.",
      "limitations": [
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "The correction sample contains 2.6 million simulated and reconstructed BHLUMI events. Bin corrections differ from unity by at most 0.4 percent, with quoted statistical errors about 4e-4. Shared detector-correction errors are assumed fully correlated between corresponding bins of different data sets; prediction errors are correlated across parameter choices but uncorrelated between data sets.",
        "The opposite detector sides give S=-6.7e-4 and -0.5e-4 GeV^-2. The authors attribute their discrepancy to incomplete beam-pipe material simulation and assign half the difference, 3.1e-4 GeV^-2, as a dominant systematic contribution. This is retained, not averaged into independent precision measurements.",
        "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "readExtent": "selected-primary-small-angle-analysis",
      "reviewedLocators": [
        "arXiv:hep-ex/0002035v1 page 2, Introduction and Equation 1: effective alpha, adopted alpha(0), vacuum polarization and signed spacelike momentum transfer",
        "arXiv:hep-ex/0002035v1 pages 3-4, Equations 2-3, and page 11, References 13-14: normalized BHLUMI fractions, detector corrections, fixed timelike running and slope parameterization",
        "arXiv:hep-ex/0002035v1 pages 4 and 6, small-angle systematic assessment and Equation 4: shared correction errors, opposite-side material discrepancy and fitted slope",
        "arXiv:hep-ex/0002035v1 pages 7 and 9-10, Interpretation of Results and Figure 3: small-angle inverse-alpha difference and theoretical lower-scale anchor"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/0002035v1",
      "correctionCheck": "Versioned author report and journal identity checked; selected small-angle analysis only, not an exhaustive later-correction or latest-result review."
    },
    {
      "id": "vacuum-polarization-replay",
      "sourceId": "vacuum-polarization-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Bounded effective-alpha algebra",
      "preparation": "Use exact rational arithmetic for synthetic four-bin cross-section integrals, common positive rescaling and Equation 3. Adopt only the printed central alpha^-1(0)=137.03599976, S=-0.00036 GeV^-2 and endpoints -2.1,-6.25 GeV^2 for the added-deformation calculation.",
      "observable": "Synthetic normalized fractions and added inverse-alpha deformation",
      "finding": "Nine synthetic common-scale checks preserve normalized four-bin fractions, while three nonuniform controls change the shape. Equation 3 gives an added inverse-alpha difference of 0.20473178364144 for the printed reference and slope; the nominal contribution and full reported difference are not calculated.",
      "limitations": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): synthetic normalized-bin rescaling and signed inverse-alpha deformation from the printed historical reference, slope and spacelike endpoints"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "A local calculation without publication metadata."
    }
  ],
  "comparisons": [
    {
      "id": "l3-small-angle-running",
      "candidate": "The selected angular shape constrains spacelike effective-alpha running under its normalized QED and response model.",
      "alternative": "The same data provide model-free absolute couplings, independent measurements of virtual constituents or a separately isolated hadronic contribution.",
      "discriminator": "Keep the normalized angular response, slope fit and inverse-coupling interpretation in separate records with the same acquisition and explicit model inputs.",
      "result": "conditional-support",
      "limit": "The inferred difference is conditional on the stated QED vacuum-polarization and detector model. It does not separately determine leptonic and hadronic components, measure a virtual-particle population or unique vacuum substance, or establish that every radiative correction is vacuum polarization. QED alpha and the QCD coupling alpha_s are distinct.",
      "assumptions": [
        "The luminosity monitor also supplies the small-angle data, so the analysis uses normalized angular shape rather than an independent absolute cross section or alpha value. Figure 1 contains two model denominators applied to the same 1994 subset, not two acquisitions; neither event weights nor the plotted fractions are numerically transcribed here.",
        "Modified BHLUMI 4.04 varies the spacelike running about the nominal Eidelman-Jegerlehner prediction while keeping timelike running unchanged. Photon-Z interference and other radiative terms remain part of that model; S=0 means nominal running, not no running. The linear deformation is restricted to the stated small-angle interval.",
        "The opposite detector sides give S=-6.7e-4 and -0.5e-4 GeV^-2. The authors attribute their discrepancy to incomplete beam-pipe material simulation and assign half the difference, 3.1e-4 GeV^-2, as a dominant systematic contribution. This is retained, not averaged into independent precision measurements.",
        "The value 0.78 +/- 0.26 is a reported difference with total experimental uncertainty. Figure 3 fixes the lower-scale alpha value to theory for display; neither plotted endpoint is an independent absolute-alpha determination. The adopted alpha^-1(0)=137.03599976(50) is the historical reference printed in this paper, not a new measurement or a later electron-moment input.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "sourceIds": [
        "l3-2000-running"
      ],
      "claimIds": [
        "C-phys-l3-angular-shape",
        "C-phys-l3-running-slope",
        "C-phys-l3-running-difference"
      ]
    },
    {
      "id": "vacuum-polarization-replay",
      "candidate": "Common normalization cancels from synthetic bin fractions and the signed deformation identity holds.",
      "alternative": "The bounded algebra reproduces the L3 likelihood, nominal vacuum polarization or full reported coupling difference.",
      "discriminator": "Compare exact rational normalized fractions and inverse parameterizations while retaining synthetic values and published slope as inputs.",
      "result": "conditional-support",
      "limit": "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
      "assumptions": [
        "The local check uses synthetic bin integrals and synthetic nominal DeltaAlpha values to test normalization and parameterization identities. Its 0.20473178364144 deformation is only the added inverse-alpha difference from the printed S and historical reference; it is not the reported full 0.78 difference or a reconstructed nominal vacuum-polarization calculation.",
        "No event-level acquisition, corrected bin table, BHLUMI prediction, detector/material simulation, multinomial likelihood, significance calibration, stochastic systematic propagation or covariance is independently reproduced. The paper's hypothesis-significance statement is not certified or admitted as a local result."
      ],
      "sourceIds": [
        "l3-2000-running",
        "vacuum-polarization-verifier"
      ],
      "claimIds": [
        "C-phys-vacuum-polarization-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:qed-effective-coupling",
      "role": "definition",
      "denotes": "In the L3 QED convention alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)), where DeltaAlpha parameterizes vacuum-polarization corrections. The Bhabha analysis uses signed Q^2=t=-s*(1-cos(theta))/2<0 in the spacelike region; this alpha is the electromagnetic coupling, not alpha_s.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-qed-effective-coupling"
      ]
    },
    {
      "nodeId": "phys:l3-small-angle-context",
      "role": "experimental-context",
      "denotes": "Select L3 Bhabha events near the Z resonance in 1993-1995 with BGO energy thresholds of 0.8 and 0.4 times beam energy. Use silicon/BGO coordinates and the 32-54 mrad fiducial region with boundaries 32,35,40,46,54 mrad; enter four coordinates per event with weight 0.25. The retained sample is 6.7 million events, grouped into seven year/energy sets.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-l3-small-angle-context"
      ]
    },
    {
      "nodeId": "phys:l3-angular-shape",
      "role": "scoped-phenomenon",
      "denotes": "The analysis measures weighted four-bin angular fractions in seven 1993-1995 year/energy data sets after the stated detector corrections. Figure 1 displays the 1994 subset as ratios to the normal-running and no-running predictions: two theoretical denominators for the same subset, not independent measurements or absolute cross sections.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-l3-angular-shape"
      ]
    },
    {
      "nodeId": "phys:l3-running-model",
      "role": "model-context",
      "denotes": "Use the corrected angular fractions and the multinomial shape likelihood of Equation 2 with modified BHLUMI 4.04. Equation 3 uses alpha(Q^2)=alpha(0)/(1-DeltaAlpha(Q^2)-S*(Q^2-Q0^2)), with Q0^2=-2.1 GeV^2, nominal running as the reference and unchanged timelike running.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-l3-running-model"
      ]
    },
    {
      "nodeId": "phys:l3-running-slope",
      "role": "scoped-phenomenon",
      "denotes": "The combined small-angle analysis reports S=(-3.6 +/- 2.7 statistical +/- 3.5 systematic)*10^-4 GeV^-2 in Equation 4. S is a fitted deformation of nominal spacelike running; zero slope does not mean a constant coupling.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-l3-running-slope"
      ]
    },
    {
      "nodeId": "phys:l3-running-difference",
      "role": "scoped-phenomenon",
      "denotes": "L3 interprets the same small-angle fit as alpha^-1(-2.1 GeV^2)-alpha^-1(-6.25 GeV^2)=0.78 +/- 0.26, with total experimental uncertainty. This is a conditional running-coupling difference, not an additional acquisition or two absolute coupling measurements.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-l3-running-difference"
      ]
    },
    {
      "nodeId": "phys:vacuum-polarization-replay-context",
      "role": "model-context",
      "denotes": "Use exact rational arithmetic for synthetic four-bin cross-section integrals, common positive rescaling and Equation 3. Adopt only the printed central alpha^-1(0)=137.03599976, S=-0.00036 GeV^-2 and endpoints -2.1,-6.25 GeV^2 for the added-deformation calculation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-vacuum-polarization-replay-context"
      ]
    },
    {
      "nodeId": "phys:vacuum-polarization-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "Nine synthetic common-scale checks preserve normalized four-bin fractions, while three nonuniform controls change the shape. Equation 3 gives an added inverse-alpha difference of 0.20473178364144 for the printed reference and slope; the nominal contribution and full reported difference are not calculated.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-vacuum-polarization-arithmetic"
      ]
    }
  ]
};

/** Preserve normalized acquisition, conditional running and finite-check ownership. */
export function validateVacuumPolarizationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing vacuum-polarization ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Vacuum-polarization ${kind} changed ${id}.${key}: preserve shape, acquisition and interpretation scope`);
    }
  }
}
