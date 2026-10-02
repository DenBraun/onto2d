import assert from "node:assert/strict";

export const PROTON_MOMENT_CHECKS = new Map([["proton-moment-printed-arithmetic", "C-phys-proton-moment-arithmetic"]]);

export const PROTON_MOMENT_ADMISSION = {
  "definitions": [
    [
      "phys:proton-moment-normalization",
      "D-phys-proton-moment-normalization"
    ],
    [
      "phys:proton-moment-frequency-ratio",
      "D-phys-proton-moment-frequency-ratio"
    ]
  ],
  "formalDependencies": [
    [
      "physics:proton-moment-normalization-frequency-ratio",
      [
        "phys:proton-moment-normalization",
        "phys:proton-moment-frequency-ratio"
      ]
    ],
    [
      "physics:proton-moment-normalization-sachs",
      [
        "phys:proton-moment-normalization",
        "phys:sachs-form-factors"
      ]
    ]
  ],
  "contexts": [
    [
      "mooser2014-moment-context",
      "M-phys-mooser2014-moment-context",
      [
        "mooser2014-moment"
      ]
    ],
    [
      "schneider2017-moment-context",
      "M-phys-schneider2017-moment-context",
      [
        "schneider2017-moment"
      ]
    ],
    [
      "schneider2017-moment-inference-context",
      "M-phys-schneider2017-moment-inference-context",
      [
        "schneider2017-moment-inference"
      ]
    ],
    [
      "proton-moment-replay-context",
      "M-phys-proton-moment-replay-context",
      [
        "proton-moment-replay"
      ]
    ]
  ],
  "observations": [
    [
      "mooser2014-moment",
      "C-phys-mooser2014-moment",
      [
        "mooser2014-moment"
      ]
    ],
    [
      "schneider2017-moment-statistic",
      "C-phys-schneider2017-moment-statistic",
      [
        "schneider2017-moment"
      ]
    ],
    [
      "schneider2017-moment",
      "C-phys-schneider2017-moment",
      [
        "schneider2017-moment-inference"
      ]
    ],
    [
      "proton-moment-arithmetic",
      "C-phys-proton-moment-arithmetic",
      [
        "proton-moment-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "mooser2014-moment-context-mooser2014-moment",
      "mooser2014-moment-context",
      "mooser2014-moment",
      "M-phys-mooser2014-moment",
      "measurement-context"
    ],
    [
      "proton-moment-frequency-ratio-mooser2014-moment",
      "proton-moment-frequency-ratio",
      "mooser2014-moment",
      "M-phys-mooser2014-moment",
      "interpretation-dependency"
    ],
    [
      "schneider2017-moment-context-schneider2017-moment-statistic",
      "schneider2017-moment-context",
      "schneider2017-moment-statistic",
      "M-phys-schneider2017-moment-statistic",
      "measurement-context"
    ],
    [
      "proton-moment-frequency-ratio-schneider2017-moment-statistic",
      "proton-moment-frequency-ratio",
      "schneider2017-moment-statistic",
      "M-phys-schneider2017-moment-statistic",
      "interpretation-dependency"
    ],
    [
      "schneider2017-moment-statistic-schneider2017-moment",
      "schneider2017-moment-statistic",
      "schneider2017-moment",
      "M-phys-schneider2017-moment",
      "interpretation-dependency"
    ],
    [
      "schneider2017-moment-context-schneider2017-moment",
      "schneider2017-moment-context",
      "schneider2017-moment",
      "M-phys-schneider2017-moment",
      "measurement-context"
    ],
    [
      "schneider2017-moment-inference-context-schneider2017-moment",
      "schneider2017-moment-inference-context",
      "schneider2017-moment",
      "M-phys-schneider2017-moment",
      "interpretation-dependency"
    ],
    [
      "proton-moment-frequency-ratio-schneider2017-moment",
      "proton-moment-frequency-ratio",
      "schneider2017-moment",
      "M-phys-schneider2017-moment",
      "interpretation-dependency"
    ],
    [
      "mooser2014-moment-proton-moment-arithmetic",
      "mooser2014-moment",
      "proton-moment-arithmetic",
      "M-phys-proton-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "schneider2017-moment-statistic-proton-moment-arithmetic",
      "schneider2017-moment-statistic",
      "proton-moment-arithmetic",
      "M-phys-proton-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "schneider2017-moment-proton-moment-arithmetic",
      "schneider2017-moment",
      "proton-moment-arithmetic",
      "M-phys-proton-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "proton-moment-frequency-ratio-proton-moment-arithmetic",
      "proton-moment-frequency-ratio",
      "proton-moment-arithmetic",
      "M-phys-proton-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "proton-moment-replay-context-proton-moment-arithmetic",
      "proton-moment-replay-context",
      "proton-moment-arithmetic",
      "M-phys-proton-moment-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "mooser2014-moment",
    "schneider2017-moment",
    "schneider2017-moment-inference",
    "proton-moment-replay"
  ],
  "comparisonIds": [
    "mooser2014-moment",
    "schneider2017-moment",
    "proton-moment-arithmetic"
  ],
  "inferenceSources": [
    [
      "M-phys-mooser2014-moment-context",
      [
        "mooser2014"
      ]
    ],
    [
      "M-phys-schneider2017-moment-context",
      [
        "schneider2018-thesis"
      ]
    ],
    [
      "M-phys-schneider2017-moment-inference-context",
      [
        "schneider2018-thesis"
      ]
    ],
    [
      "M-phys-proton-moment-replay-context",
      [
        "mooser2014",
        "schneider2018-thesis",
        "proton-moment-verifier"
      ]
    ],
    [
      "C-phys-mooser2014-moment",
      [
        "mooser2014"
      ]
    ],
    [
      "M-phys-mooser2014-moment",
      [
        "mooser2014"
      ]
    ],
    [
      "C-phys-schneider2017-moment-statistic",
      [
        "schneider2018-thesis"
      ]
    ],
    [
      "M-phys-schneider2017-moment-statistic",
      [
        "schneider2018-thesis"
      ]
    ],
    [
      "C-phys-schneider2017-moment",
      [
        "schneider2017",
        "schneider2018-thesis"
      ]
    ],
    [
      "M-phys-schneider2017-moment",
      [
        "schneider2018-thesis"
      ]
    ],
    [
      "C-phys-proton-moment-arithmetic",
      [
        "mooser2014",
        "schneider2018-thesis",
        "proton-moment-verifier"
      ]
    ],
    [
      "M-phys-proton-moment-arithmetic",
      [
        "mooser2014",
        "schneider2018-thesis",
        "proton-moment-verifier"
      ]
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "mooser2014",
      "kind": "research-publication",
      "title": "Direct high-precision measurement of the magnetic moment of the proton",
      "authors": [
        "A. Mooser",
        "S. Ulmer",
        "K. Blaum",
        "K. Franke",
        "H. Kracke",
        "C. Leiteritz",
        "W. Quint",
        "C. C. Rodegheri",
        "C. Smorra",
        "J. Walz"
      ],
      "year": 2014,
      "doi": "10.1038/nature13388",
      "url": "https://arxiv.org/pdf/1406.4888v1",
      "path": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "arXiv:1406.4888v1 pages 4-7 and Equation 2: double-trap preparation, spin detection, frequency reconstruction and unbinned resonance inference",
          "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "arXiv:1406.4888v1 page 14, Figure 3 caption: four-month acquisition, 450 points and visualization-only bins"
        ],
        "limit": "The stated passages of arXiv:1406.4888v1 were read; pages 3, 7, 8 and 16 were visually inspected. The arXiv record identifies Nature 509, 596-599 (2014). The publisher PDF, raw spin/frequency data and original analysis implementation were not reviewed."
      }
    },
    {
      "id": "schneider2017",
      "kind": "research-publication",
      "title": "Double-trap measurement of the proton magnetic moment at 0.3 parts per billion precision",
      "authors": [
        "Georg Schneider",
        "Andreas Mooser",
        "Matthew Bohman",
        "Natalie Schön",
        "James Harrington",
        "Takashi Higuchi",
        "Hiroki Nagahama",
        "Stefan Sellner",
        "Christian Smorra",
        "Klaus Blaum",
        "Yasuyuki Matsuda",
        "Wolfgang Quint",
        "Jochen Walz",
        "Stefan Ulmer"
      ],
      "year": 2017,
      "doi": "10.1126/science.aan0207",
      "url": "https://doi.org/10.1126/science.aan0207",
      "path": null,
      "review": {
        "extent": "publisher-indexed-abstract-and-metadata",
        "locators": [
          "Publisher-indexed abstract and bibliographic metadata, Science 358 (6366), 1081-1084, published 24 November 2017: reported magnetic moment and total precision"
        ],
        "limit": "The Science source is reviewed only through its indexed publisher abstract and metadata; the journal main text and supplementary methods were not obtained. Method and correction details in this admission are attributed separately to the thesis."
      }
    },
    {
      "id": "schneider2018-thesis",
      "kind": "research-publication",
      "title": "300 ppt Measurement of the Proton g-Factor",
      "authors": [
        "Georg Schneider"
      ],
      "year": 2018,
      "doi": "10.25358/openscience-4441",
      "url": "https://openscience.ub.uni-mainz.de/server/api/core/bitstreams/4b84bd7c-fd1b-47e6-a935-6555333d4509/content",
      "path": null,
      "review": {
        "extent": "selected-primary-dissertation-passages",
        "locators": [
          "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
          "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "Dissertation printed pages 83-86, Section 7.1 and Figure 7.1: cooling, spin-analysis series, simultaneous precision-trap excitation and acquisition census",
          "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result"
        ],
        "limit": "The title page is dated 8 December 2017 and the oral examination 12 June 2018. Printed pages 4, 75 and 83-100 were read; the ratio, likelihood, variance and result passages were visually checked. This doctoral dissertation describes the Science 2017 campaign. Other thesis chapters, raw spectra, analysis files and supplementary journal methods are not admitted as independently reviewed evidence."
      }
    },
    {
      "id": "proton-moment-verifier",
      "kind": "executable-check",
      "title": "Printed proton magnetic-moment arithmetic verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-proton-moment.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): formal frequency-ratio, common-clock and spin-variance witnesses, campaign census, signed printed correction sums and displayed-input uncertainty/rounding checks"
        ],
        "limit": "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-proton-moment-normalization",
      "kind": "review-finding",
      "statement": "For the positive spin-1/2 proton, mu_N=e*hbar/(2*m_p) and mu_p/mu_N=g_p/2. In the Sachs convention, GM(0) equals this dimensionless moment in nuclear-magneton units; this specifies normalization without supplying a measured numerical value.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "bernauer2014",
          "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The nuclear magneton uses the proton mass as a unit definition; a dimensionless moment ratio is not a separate absolute proton-mass measurement. No constituent count, hadron-formation law or magnetic-moment shape prediction follows.",
        "The unit relation does not retroactively insert the 2014 or 2017 magnetic-moment value into the Bernauer fit, whose reference normalization remains as published."
      ]
    },
    {
      "id": "D-phys-proton-moment-frequency-ratio",
      "kind": "review-finding",
      "statement": "For the stated same-field proton measurement, g_p/2=nu_L/nu_c and nu_c^2=nu_plus^2+nu_z^2+nu_minus^2. The ideal frequency ratio connects spin response to the free cyclotron motion; finite-trap corrections remain preparation dependent.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ]
    },
    {
      "id": "M-phys-mooser2014-moment-context",
      "kind": "method",
      "statement": "Transport a cooled single proton between a strongly inhomogeneous analysis trap for spin identification and a precision trap for sideband/cyclotron measurements and spin drive. Fit the unbinned normalized spin-response resonance and correct its induced frequency biases.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 4-7 and Equation 2: double-trap preparation, spin detection, frequency reconstruction and unbinned resonance inference",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 page 14, Figure 3 caption: four-month acquisition, 450 points and visualization-only bins",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections.",
        "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections."
      ],
      "contextIds": [
        "mooser2014-moment"
      ]
    },
    {
      "id": "M-phys-schneider2017-moment-context",
      "kind": "method",
      "statement": "Prepare three single protons sequentially, infer initial/final spin states from analysis-trap axial series, and reconstruct free cyclotron frequencies during precision-trap Larmor excitation. Retain selection and shared noise-model assumptions in the reported statistical resonance estimate.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 83-86, Section 7.1 and Figure 7.1: cooling, spin-analysis series, simultaneous precision-trap excitation and acquisition census",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "method",
          "note": "Directly records the printed likelihood normalization whose interval convention remains unresolved."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "The thesis gives August 2016 and December 2016 as acquisition dates: 420, 317 and 577 cycles for three protons, totaling 1314. The final fit uses 1264 ratios after excluding initial frequency-fit failures. These are within-campaign observations with common apparatus and analysis assumptions, not independent replications.",
        "Spin transitions are inferred from axial-frequency series in the analysis trap using an energy-dependent noise/random-walk model; the drive frequency is not itself an observed spin-flip event. In the precision trap, sideband and interpolated axial frequencies reconstruct the free cyclotron frequency during Larmor excitation.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment"
      ]
    },
    {
      "id": "M-phys-schneider2017-moment-inference-context",
      "kind": "method",
      "statement": "Apply the signed preparation-specific corrections to the same campaign statistical center. Keep the linear systematic-bound aggregation separate from the reported statistical uncertainty and final total.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "method",
          "note": "Directly records the printed likelihood normalization whose interval convention remains unresolved."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "M-phys-proton-moment-replay-context",
      "kind": "method",
      "statement": "Evaluate formal free-frequency and same-clock identities, printed campaign counts, bias/correction directions, and rounded systematic/error sums without fitting experimental spectra.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "proton-moment-verifier",
          "locator": "verify(): formal frequency-ratio, common-clock and spin-variance witnesses, campaign census, signed printed correction sums and displayed-input uncertainty/rounding checks",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "C-phys-mooser2014-moment",
      "kind": "review-finding",
      "statement": "The 2014 author report gives statistical mu_p/mu_N=2.792847348(7) and corrected mu_p/mu_N=2.792847350(7)(6), with statistical then systematic uncertainty on the final digits. Its abstract combines these as 2.792847350(9).",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 page 14, Figure 3 caption: four-month acquisition, 450 points and visualization-only bins",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections."
      ],
      "contextIds": [
        "mooser2014-moment"
      ]
    },
    {
      "id": "M-phys-mooser2014-moment",
      "kind": "method",
      "statement": "Infer the moment from the normalized spin-response line center and the source-specific induced-bias corrections.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 page 14, Figure 3 caption: four-month acquisition, 450 points and visualization-only bins",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections."
      ],
      "contextIds": [
        "mooser2014-moment"
      ]
    },
    {
      "id": "C-phys-schneider2017-moment-statistic",
      "kind": "review-finding",
      "statement": "The thesis reports the selected-campaign statistical estimate mu_p/mu_N=2.79284734500(75), before systematic correction, from 1264 selected ratios. The quoted 268 ppt statistical precision is a source inference, not an independently reproduced likelihood result.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis gives August 2016 and December 2016 as acquisition dates: 420, 317 and 577 cycles for three protons, totaling 1314. The final fit uses 1264 ratios after excluding initial frequency-fit failures. These are within-campaign observations with common apparatus and analysis assumptions, not independent replications.",
        "Spin transitions are inferred from axial-frequency series in the analysis trap using an energy-dependent noise/random-walk model; the drive frequency is not itself an observed spin-flip event. In the precision trap, sideband and interpolated axial frequencies reconstruct the free cyclotron frequency during Larmor excitation.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment"
      ]
    },
    {
      "id": "M-phys-schneider2017-moment-statistic",
      "kind": "method",
      "statement": "Interpret the selected resonance through the reported spin-probability model and conditional frequency reconstruction, retaining unresolved printed conventions.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis gives August 2016 and December 2016 as acquisition dates: 420, 317 and 577 cycles for three protons, totaling 1314. The final fit uses 1264 ratios after excluding initial frequency-fit failures. These are within-campaign observations with common apparatus and analysis assumptions, not independent replications.",
        "Spin transitions are inferred from axial-frequency series in the analysis trap using an energy-dependent noise/random-walk model; the drive frequency is not itself an observed spin-flip event. In the precision trap, sideband and interpolated axial frequencies reconstruct the free cyclotron frequency during Larmor excitation.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment"
      ]
    },
    {
      "id": "C-phys-schneider2017-moment",
      "kind": "review-finding",
      "statement": "The Science 2017 abstract reports mu_p/mu_N=2.79284734462+/-0.00000000082. The thesis identifies the same result as 2.79284734462(75)(34), with 68.3 percent statistical and separately stated systematic uncertainty, and total fractional precision 295 ppt.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schneider2017",
          "locator": "Publisher-indexed abstract and bibliographic metadata, Science 358 (6366), 1081-1084, published 24 November 2017: reported magnetic moment and total precision",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "supports",
          "note": "Directly records the printed likelihood normalization whose interval convention remains unresolved."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "The Science source is reviewed only through its indexed publisher abstract and metadata; the journal main text and supplementary methods were not obtained. Method and correction details in this admission are attributed separately to the thesis.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "M-phys-schneider2017-moment",
      "kind": "method",
      "statement": "Combine the reported statistical center with the signed Table 7.2 corrections and stated uncertainty treatment for the same campaign.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schneider2017",
          "locator": "Publisher-indexed abstract and bibliographic metadata, Science 358 (6366), 1081-1084, published 24 November 2017: reported magnetic moment and total precision",
          "role": "provenance",
          "note": "Identifies the published final result; detailed methods are supported by the separate thesis passages."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization",
          "role": "method",
          "note": "Directly records the printed likelihood normalization whose interval convention remains unresolved."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "The Science source is reviewed only through its indexed publisher abstract and metadata; the journal main text and supplementary methods were not obtained. Method and correction details in this admission are attributed separately to the thesis.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "C-phys-proton-moment-arithmetic",
      "kind": "review-finding",
      "statement": "The printed Schneider corrections sum to -133 ppt and their systematic uncertainty bounds sum linearly to 123 ppt. The quoted 75 and 34 final-digit errors combine quadratically to 82.3468... final-digit units, compatible with the abstract error 82. Central correction arithmetic does not exactly recover the final displayed digit, but conservative input-rounding bins overlap.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "proton-moment-verifier",
          "locator": "verify(): formal frequency-ratio, common-clock and spin-variance witnesses, campaign census, signed printed correction sums and displayed-input uncertainty/rounding checks",
          "role": "supports",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [
        "proton-moment-printed-arithmetic"
      ],
      "limitations": [
        "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "M-phys-proton-moment-arithmetic",
      "kind": "method",
      "statement": "Use only declared formal identities and printed inputs, preserving bias/correction signs and the different levels of uncertainty aggregation.",
      "scope": "Free-proton magnetic moment in nuclear-magneton units under the specified double-Penning-trap preparation or definition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "mooser2014",
          "locator": "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "schneider2018-thesis",
          "locator": "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        },
        {
          "sourceId": "proton-moment-verifier",
          "locator": "verify(): formal frequency-ratio, common-clock and spin-variance witnesses, campaign census, signed printed correction sums and displayed-input uncertainty/rounding checks",
          "role": "method",
          "note": "Supports only the stated convention, campaign, conditional result or bounded arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "mooser2014-moment",
      "sourceId": "mooser2014",
      "studyType": "primary-experiment",
      "doi": "10.1038/nature13388",
      "journal": "Nature",
      "volume": "509",
      "issue": "7502",
      "pages": "596-599",
      "system": "Mooser double-trap moment campaign",
      "preparation": "Transport a cooled single proton between a strongly inhomogeneous analysis trap for spin identification and a precision trap for sideband/cyclotron measurements and spin drive. Fit the unbinned normalized spin-response resonance and correct its induced frequency biases.",
      "observable": "Normalized spin-response resonance and reported corrected mu_p/mu_N.",
      "finding": "The author report gives a distinct 450-point campaign and separates statistical and corrected centers.",
      "limitations": [
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections.",
        "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:1406.4888v1 pages 4-7 and Equation 2: double-trap preparation, spin detection, frequency reconstruction and unbinned resonance inference",
        "arXiv:1406.4888v1 pages 7-8, Equations 3-4, and page 16, Table 1: statistical center, induced biases, systematic uncertainty and corrected result",
        "arXiv:1406.4888v1 page 14, Figure 3 caption: four-month acquisition, 450 points and visualization-only bins"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1406.4888v1",
      "correctionCheck": "Selected primary passages and publication identity were checked. Printed notation conflicts remain explicit; no exhaustive later-correction review or independent experimental replication is claimed."
    },
    {
      "id": "schneider2017-moment",
      "sourceId": "schneider2018-thesis",
      "studyType": "primary-experiment",
      "doi": "10.25358/openscience-4441",
      "journal": "Johannes Gutenberg University Mainz doctoral dissertation",
      "volume": "2018",
      "issue": "",
      "pages": "4, 75, 83-100",
      "system": "Schneider 2016 acquisition and spin analysis",
      "preparation": "Prepare three single protons sequentially, infer initial/final spin states from analysis-trap axial series, and reconstruct free cyclotron frequencies during precision-trap Larmor excitation. Retain selection and shared noise-model assumptions in the reported statistical resonance estimate.",
      "observable": "Selected spin probabilities and reconstructed frequency ratios underlying the statistical g_p/2 estimate.",
      "finding": "The thesis reports 1314 cycles and 1264 selected ratios for the campaign published in 2017.",
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "The thesis gives August 2016 and December 2016 as acquisition dates: 420, 317 and 577 cycles for three protons, totaling 1314. The final fit uses 1264 ratios after excluding initial frequency-fit failures. These are within-campaign observations with common apparatus and analysis assumptions, not independent replications.",
        "Spin transitions are inferred from axial-frequency series in the analysis trap using an energy-dependent noise/random-walk model; the drive frequency is not itself an observed spin-flip event. In the precision trap, sideband and interpolated axial frequencies reconstruct the free cyclotron frequency during Larmor excitation.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "readExtent": "selected-primary-dissertation-passages",
      "reviewedLocators": [
        "Dissertation title page and oral-examination page, and printed page 4, Equation 1.3 and reference to Science publication 50: dates, moment convention and same-campaign identity",
        "Dissertation printed pages 83-86, Section 7.1 and Figure 7.1: cooling, spin-analysis series, simultaneous precision-trap excitation and acquisition census",
        "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
        "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.25358/openscience-4441",
      "correctionCheck": "Selected primary passages and publication identity were checked. Printed notation conflicts remain explicit; no exhaustive later-correction review or independent experimental replication is claimed."
    },
    {
      "id": "schneider2017-moment-inference",
      "sourceId": "schneider2018-thesis",
      "studyType": "computational-analysis",
      "doi": "10.25358/openscience-4441",
      "journal": "Johannes Gutenberg University Mainz doctoral dissertation",
      "volume": "2018",
      "issue": "",
      "pages": "4, 75, 83-100",
      "system": "Schneider moment correction and uncertainty",
      "preparation": "Apply the signed preparation-specific corrections to the same campaign statistical center. Keep the linear systematic-bound aggregation separate from the reported statistical uncertainty and final total.",
      "observable": "Corrected dimensionless proton moment and separately quoted statistical/systematic uncertainties.",
      "finding": "The thesis final value and the Science abstract report the same magnetic-moment result.",
      "limitations": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "The thesis prints Gamma=2*nu_c/nu_L,exc in page 85 prose and Equation 7.4 on page 87, conflicting with Equation 1.3 and the g-factor normalization in Equation 7.6. Equation 7.3 omits the square on the spin-jump amplitude under a variance root, whereas Figure 7.2 includes it. These printed conflicts do not establish that the analysis code used those formulas.",
        "Equations 6.8 and 7.1 print L=2*sum(log(...)), while page 89 describes one-sigma limits at a drop of 1/2 in L. This likelihood-normalization discrepancy remains unresolved; the reported simulation checks and statistical uncertainty are source results, not independently calibrated coverage."
      ],
      "readExtent": "selected-primary-dissertation-passages",
      "reviewedLocators": [
        "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
        "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
        "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result",
        "Dissertation printed page 75, Equation 6.8: spin-probability likelihood and its printed factor-of-two normalization"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.25358/openscience-4441",
      "correctionCheck": "Selected primary passages and publication identity were checked. Printed notation conflicts remain explicit; no exhaustive later-correction review or independent experimental replication is claimed."
    },
    {
      "id": "proton-moment-replay",
      "sourceId": "schneider2018-thesis",
      "studyType": "computational-analysis",
      "doi": "10.25358/openscience-4441",
      "journal": "Johannes Gutenberg University Mainz doctoral dissertation",
      "volume": "2018",
      "issue": "",
      "pages": "4, 75, 83-100",
      "system": "Printed proton-moment arithmetic",
      "preparation": "Evaluate formal free-frequency and same-clock identities, printed campaign counts, bias/correction directions, and rounded systematic/error sums without fitting experimental spectra.",
      "observable": "Bounded identities and displayed-input arithmetic, with published final values used as comparisons.",
      "finding": "Printed bookkeeping is compatible within its stated rounding limits; it does not reproduce the original measurement.",
      "limitations": [
        "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ],
      "readExtent": "selected-primary-dissertation-passages",
      "reviewedLocators": [
        "Dissertation printed pages 86-91, Section 7.2, Equations 7.1-7.6, Figures 7.2 and 7.5, and Table 7.1: selected ratios, reported statistical result and printed formula conflicts",
        "Dissertation printed pages 92-96, Section 7.3.1, Equations 7.7-7.14 and Table 7.2: induced shifts, signed corrections and linearly aggregated systematic uncertainty",
        "Dissertation printed pages 96-100, Sections 7.3.2-7.3.3, Equations 7.16-7.23 and Figure 7.10: diagnostic controls, common-clock cancellation and final reported result"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://doi.org/10.25358/openscience-4441",
      "correctionCheck": "Selected primary passages and publication identity were checked. Printed notation conflicts remain explicit; no exhaustive later-correction review or independent experimental replication is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "mooser2014-moment",
      "candidate": "A corrected moment conditional on the reported double-trap analysis.",
      "alternative": "The uncorrected statistical center is already the final moment.",
      "discriminator": "The source separates statistical and final centers and defines induced-bias corrections.",
      "result": "conditional-support",
      "limit": "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
      "assumptions": [
        "The 2014 campaign uses a distinct apparatus preparation and resonance analysis. Its 450 points, binned visualization and deliberately detuned control do not constitute independent replications. No covariance with the later campaign is supplied and the two reported moments are not averaged.",
        "Mooser Equation 3 describes an induced bias of the measured ratio. Subtracting the negative printed Table 1 bias is the correction direction compatible with the reported statistical and final centers; adding that bias again is not a second physical result. Rounded bookkeeping does not reconstruct the individual frequency corrections.",
        "The frequency ratio requires the free cyclotron frequency in the same effective magnetic field as the Larmor response. The modified cyclotron frequency alone is not the free frequency. Imperfect trapping fields, motional energies, detector response and timing require the stated corrections."
      ],
      "sourceIds": [
        "mooser2014"
      ],
      "claimIds": [
        "C-phys-mooser2014-moment"
      ]
    },
    {
      "id": "schneider2017-moment",
      "candidate": "The journal and thesis report the same corrected campaign result.",
      "alternative": "The thesis provides a new independent acquisition or a separate replication.",
      "discriminator": "The thesis explicitly identifies the Science result and details its 2016 acquisition, statistical center and corrections.",
      "result": "conditional-support",
      "limit": "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
      "assumptions": [
        "The thesis explicitly identifies this as the experiment published in Science in 2017. Its 2018 defense date does not denote a new acquisition or a later experimental reanalysis. The journal abstract and thesis final value are two accounts of the same result.",
        "The Science source is reviewed only through its indexed publisher abstract and metadata; the journal main text and supplementary methods were not obtained. Method and correction details in this admission are attributed separately to the thesis.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered."
      ],
      "sourceIds": [
        "schneider2017",
        "schneider2018-thesis"
      ],
      "claimIds": [
        "C-phys-schneider2017-moment"
      ]
    },
    {
      "id": "proton-moment-arithmetic",
      "candidate": "Printed bookkeeping and formal identities can be checked within bounded scope.",
      "alternative": "These checks reproduce the raw measurement and calibrated statistical coverage.",
      "discriminator": "Check signed corrections, aggregation levels and display-rounding compatibility while keeping raw analysis unreplayed.",
      "result": "conditional-support",
      "limit": "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
      "assumptions": [
        "Only formal frequency identities, synthetic common-clock and spin-variance witnesses, campaign census and printed correction/uncertainty arithmetic are checked. Raw spectra, spin classification, frequency interpolation, resonance likelihood, correction metrology, covariance and coverage simulations are not reproduced.",
        "Table 7.2 lists signed corrections, totaling -133 ppt, and adds its component uncertainty bounds linearly to 123 ppt. This conservative systematic bound is distinct from the later combination of the quoted statistical and systematic uncertainties; it is not an independent-component quadrature or a recovered covariance matrix.",
        "Applying the central printed -133 ppt correction to 2.79284734500 gives 2.79284734462855..., which rounds to a different last digit from 2.79284734462. Conservative display-rounding intervals overlap the reported final-value bin; the original unrounded inputs are not recovered.",
        "Cancellation applies to a common multiplicative frequency-reference error under the stated measurement/excitation model. It does not cancel differential drift, separate clocks, field gradients, thermal relaxation or spectral-fitting bias."
      ],
      "sourceIds": [
        "mooser2014",
        "schneider2018-thesis",
        "proton-moment-verifier"
      ],
      "claimIds": [
        "C-phys-proton-moment-arithmetic"
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:proton-moment-normalization-frequency-ratio",
      "source": "phys:proton-moment-normalization",
      "target": "phys:proton-moment-frequency-ratio",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The same-field frequency ratio measures the dimensionless g_p/2 defined in nuclear-magneton units; finite experimental corrections remain separate.",
      "claimIds": [
        "D-phys-proton-moment-normalization",
        "D-phys-proton-moment-frequency-ratio"
      ]
    },
    {
      "id": "physics:proton-moment-normalization-sachs",
      "source": "phys:proton-moment-normalization",
      "target": "phys:sachs-form-factors",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Bernauer normalizes GM(0) to the proton moment expressed in nuclear-magneton units, namely mu_p/mu_N=g_p/2. This relates definitions and supplies no later measured value to the 2014 fit.",
      "claimIds": [
        "D-phys-proton-moment-normalization",
        "D-phys-sachs-form-factors"
      ]
    },
    {
      "id": "physics:mooser2014-moment-context-mooser2014-moment",
      "source": "phys:mooser2014-moment-context",
      "target": "phys:mooser2014-moment",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The 2014 double-trap preparation, spin classification and induced-bias corrections delimit this reported moment.",
      "claimIds": [
        "M-phys-mooser2014-moment"
      ],
      "contextIds": [
        "mooser2014-moment"
      ]
    },
    {
      "id": "physics:proton-moment-frequency-ratio-mooser2014-moment",
      "source": "phys:proton-moment-frequency-ratio",
      "target": "phys:mooser2014-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected spin-to-free-cyclotron ratio sets the moment convention used by this campaign.",
      "claimIds": [
        "M-phys-mooser2014-moment"
      ],
      "contextIds": [
        "mooser2014-moment"
      ]
    },
    {
      "id": "physics:schneider2017-moment-context-schneider2017-moment-statistic",
      "source": "phys:schneider2017-moment-context",
      "target": "phys:schneider2017-moment-statistic",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The selected cycles and common spin/frequency analysis supply this uncorrected statistical estimate.",
      "claimIds": [
        "M-phys-schneider2017-moment-statistic"
      ],
      "contextIds": [
        "schneider2017-moment"
      ]
    },
    {
      "id": "physics:proton-moment-frequency-ratio-schneider2017-moment-statistic",
      "source": "phys:proton-moment-frequency-ratio",
      "target": "phys:schneider2017-moment-statistic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ideal ratio specifies the intended physical observable; the thesis printed inverse-Gamma convention remains unresolved.",
      "claimIds": [
        "M-phys-schneider2017-moment-statistic"
      ],
      "contextIds": [
        "schneider2017-moment"
      ]
    },
    {
      "id": "physics:schneider2017-moment-statistic-schneider2017-moment",
      "source": "phys:schneider2017-moment-statistic",
      "target": "phys:schneider2017-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected result uses this same campaign statistical center; it is not another acquisition.",
      "claimIds": [
        "M-phys-schneider2017-moment"
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "physics:schneider2017-moment-context-schneider2017-moment",
      "source": "phys:schneider2017-moment-context",
      "target": "phys:schneider2017-moment",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Both the journal and thesis final values refer to this same 2016 acquisition, with shared experimental assumptions.",
      "claimIds": [
        "M-phys-schneider2017-moment"
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "physics:schneider2017-moment-inference-context-schneider2017-moment",
      "source": "phys:schneider2017-moment-inference-context",
      "target": "phys:schneider2017-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Signed corrections and the distinct systematic-bound aggregation condition the final moment and uncertainty.",
      "claimIds": [
        "M-phys-schneider2017-moment"
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "physics:proton-moment-frequency-ratio-schneider2017-moment",
      "source": "phys:proton-moment-frequency-ratio",
      "target": "phys:schneider2017-moment",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ratio convention identifies the dimensionless magnetic moment; it does not remove finite-trap corrections.",
      "claimIds": [
        "M-phys-schneider2017-moment"
      ],
      "contextIds": [
        "schneider2017-moment-inference"
      ]
    },
    {
      "id": "physics:mooser2014-moment-proton-moment-arithmetic",
      "source": "phys:mooser2014-moment",
      "target": "phys:proton-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Printed statistical and final centers constrain the bias-versus-correction sign witness; the observed moments are inputs, not reproduced outputs.",
      "claimIds": [
        "M-phys-proton-moment-arithmetic"
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "physics:schneider2017-moment-statistic-proton-moment-arithmetic",
      "source": "phys:schneider2017-moment-statistic",
      "target": "phys:proton-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The published statistical center is an input to the rounded correction check, not a locally refitted result.",
      "claimIds": [
        "M-phys-proton-moment-arithmetic"
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "physics:schneider2017-moment-proton-moment-arithmetic",
      "source": "phys:schneider2017-moment",
      "target": "phys:proton-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported final center and uncertainties are comparison inputs to bounded arithmetic, not independent validation data.",
      "claimIds": [
        "M-phys-proton-moment-arithmetic"
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "physics:proton-moment-frequency-ratio-proton-moment-arithmetic",
      "source": "phys:proton-moment-frequency-ratio",
      "target": "phys:proton-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Formal frequency reconstruction and a common-clock scaling supply synthetic algebraic witnesses only.",
      "claimIds": [
        "M-phys-proton-moment-arithmetic"
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    },
    {
      "id": "physics:proton-moment-replay-context-proton-moment-arithmetic",
      "source": "phys:proton-moment-replay-context",
      "target": "phys:proton-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite scope of the verifier separates printed arithmetic from the original experimental inference.",
      "claimIds": [
        "M-phys-proton-moment-arithmetic"
      ],
      "contextIds": [
        "proton-moment-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:proton-moment-normalization",
      "role": "definition",
      "denotes": "For the positive spin-1/2 proton, mu_N=e*hbar/(2*m_p) and mu_p/mu_N=g_p/2. In the Sachs convention, GM(0) equals this dimensionless moment in nuclear-magneton units; this specifies normalization without supplying a measured numerical value.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-proton-moment-normalization"
      ]
    },
    {
      "nodeId": "phys:proton-moment-frequency-ratio",
      "role": "definition",
      "denotes": "For the stated same-field proton measurement, g_p/2=nu_L/nu_c and nu_c^2=nu_plus^2+nu_z^2+nu_minus^2. The ideal frequency ratio connects spin response to the free cyclotron motion; finite-trap corrections remain preparation dependent.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-proton-moment-frequency-ratio"
      ]
    },
    {
      "nodeId": "phys:mooser2014-moment-context",
      "role": "experimental-context",
      "denotes": "Transport a cooled single proton between a strongly inhomogeneous analysis trap for spin identification and a precision trap for sideband/cyclotron measurements and spin drive. Fit the unbinned normalized spin-response resonance and correct its induced frequency biases.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-mooser2014-moment-context"
      ]
    },
    {
      "nodeId": "phys:schneider2017-moment-context",
      "role": "experimental-context",
      "denotes": "Prepare three single protons sequentially, infer initial/final spin states from analysis-trap axial series, and reconstruct free cyclotron frequencies during precision-trap Larmor excitation. Retain selection and shared noise-model assumptions in the reported statistical resonance estimate.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-schneider2017-moment-context"
      ]
    },
    {
      "nodeId": "phys:schneider2017-moment-inference-context",
      "role": "model-context",
      "denotes": "Apply the signed preparation-specific corrections to the same campaign statistical center. Keep the linear systematic-bound aggregation separate from the reported statistical uncertainty and final total.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-schneider2017-moment-inference-context"
      ]
    },
    {
      "nodeId": "phys:proton-moment-replay-context",
      "role": "model-context",
      "denotes": "Evaluate formal free-frequency and same-clock identities, printed campaign counts, bias/correction directions, and rounded systematic/error sums without fitting experimental spectra.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-proton-moment-replay-context"
      ]
    },
    {
      "nodeId": "phys:mooser2014-moment",
      "role": "scoped-phenomenon",
      "denotes": "The 2014 author report gives statistical mu_p/mu_N=2.792847348(7) and corrected mu_p/mu_N=2.792847350(7)(6), with statistical then systematic uncertainty on the final digits. Its abstract combines these as 2.792847350(9).",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-mooser2014-moment"
      ]
    },
    {
      "nodeId": "phys:schneider2017-moment-statistic",
      "role": "scoped-phenomenon",
      "denotes": "The thesis reports the selected-campaign statistical estimate mu_p/mu_N=2.79284734500(75), before systematic correction, from 1264 selected ratios. The quoted 268 ppt statistical precision is a source inference, not an independently reproduced likelihood result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-schneider2017-moment-statistic"
      ]
    },
    {
      "nodeId": "phys:schneider2017-moment",
      "role": "scoped-phenomenon",
      "denotes": "The Science 2017 abstract reports mu_p/mu_N=2.79284734462+/-0.00000000082. The thesis identifies the same result as 2.79284734462(75)(34), with 68.3 percent statistical and separately stated systematic uncertainty, and total fractional precision 295 ppt.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-schneider2017-moment"
      ]
    },
    {
      "nodeId": "phys:proton-moment-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The printed Schneider corrections sum to -133 ppt and their systematic uncertainty bounds sum linearly to 123 ppt. The quoted 75 and 34 final-digit errors combine quadratically to 82.3468... final-digit units, compatible with the abstract error 82. Central correction arithmetic does not exactly recover the final displayed digit, but conservative input-rounding bins overlap.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-proton-moment-arithmetic"
      ]
    }
  ]
};

/** Protect source-specific moment units, campaign identity and bounded arithmetic. */
export function validateProtonMomentContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing proton-moment ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Proton-moment ${kind} changed ${id}.${key}: preserve units, source extent and inference scope`);
      }
    }
  }
}
