import assert from "node:assert/strict";

export const NEUTRON_MOMENT_CHECKS = new Map([["afach2014-printed-arithmetic", "C-phys-neutron-moment-arithmetic"]]);

export const NEUTRON_MOMENT_ADMISSION = {
  "definitions": [
    [
      "phys:frequency-moment-ratio",
      "D-phys-frequency-moment-ratio"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "afach2014-precession-context",
      "M-phys-afach2014-precession-context",
      [
        "afach2014-precession"
      ]
    ],
    [
      "afach2014-conversion-context",
      "M-phys-afach2014-conversion-context",
      [
        "afach2014-conversion"
      ]
    ],
    [
      "neutron-moment-replay-context",
      "M-phys-neutron-moment-replay-context",
      [
        "neutron-moment-replay"
      ]
    ]
  ],
  "observations": [
    [
      "afach2014-ratio",
      "C-phys-afach2014-ratio",
      [
        "afach2014-precession"
      ]
    ],
    [
      "afach2014-hg-reference",
      "C-phys-afach2014-hg-reference",
      [
        "afach2014-conversion"
      ]
    ],
    [
      "afach2014-neutron-frequency",
      "C-phys-afach2014-neutron-frequency",
      [
        "afach2014-conversion"
      ]
    ],
    [
      "neutron-moment-arithmetic",
      "C-phys-neutron-moment-arithmetic",
      [
        "neutron-moment-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "frequency-moment-ratio-afach2014-ratio",
      "frequency-moment-ratio",
      "afach2014-ratio",
      "M-phys-afach2014-ratio",
      "interpretation-dependency"
    ],
    [
      "afach2014-precession-context-afach2014-ratio",
      "afach2014-precession-context",
      "afach2014-ratio",
      "M-phys-afach2014-ratio",
      "measurement-context"
    ],
    [
      "afach2014-conversion-context-afach2014-hg-reference",
      "afach2014-conversion-context",
      "afach2014-hg-reference",
      "M-phys-afach2014-hg-reference",
      "interpretation-dependency"
    ],
    [
      "frequency-moment-ratio-afach2014-neutron-frequency",
      "frequency-moment-ratio",
      "afach2014-neutron-frequency",
      "M-phys-afach2014-neutron-frequency",
      "interpretation-dependency"
    ],
    [
      "afach2014-ratio-afach2014-neutron-frequency",
      "afach2014-ratio",
      "afach2014-neutron-frequency",
      "M-phys-afach2014-neutron-frequency",
      "interpretation-dependency"
    ],
    [
      "afach2014-hg-reference-afach2014-neutron-frequency",
      "afach2014-hg-reference",
      "afach2014-neutron-frequency",
      "M-phys-afach2014-neutron-frequency",
      "interpretation-dependency"
    ],
    [
      "afach2014-conversion-context-afach2014-neutron-frequency",
      "afach2014-conversion-context",
      "afach2014-neutron-frequency",
      "M-phys-afach2014-neutron-frequency",
      "interpretation-dependency"
    ],
    [
      "afach2014-ratio-neutron-moment-arithmetic",
      "afach2014-ratio",
      "neutron-moment-arithmetic",
      "M-phys-neutron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "afach2014-hg-reference-neutron-moment-arithmetic",
      "afach2014-hg-reference",
      "neutron-moment-arithmetic",
      "M-phys-neutron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "afach2014-neutron-frequency-neutron-moment-arithmetic",
      "afach2014-neutron-frequency",
      "neutron-moment-arithmetic",
      "M-phys-neutron-moment-arithmetic",
      "interpretation-dependency"
    ],
    [
      "neutron-moment-replay-context-neutron-moment-arithmetic",
      "neutron-moment-replay-context",
      "neutron-moment-arithmetic",
      "M-phys-neutron-moment-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "afach2014-precession",
    "afach2014-conversion",
    "neutron-moment-replay"
  ],
  "comparisonIds": [
    "afach2014-ratio",
    "afach2014-neutron-frequency",
    "neutron-moment-arithmetic"
  ],
  "inferenceSources": [
    [
      "M-phys-neutron-moment-replay-context",
      [
        "neutron-moment-verifier"
      ]
    ],
    [
      "C-phys-neutron-moment-arithmetic",
      [
        "neutron-moment-verifier"
      ]
    ],
    [
      "M-phys-neutron-moment-arithmetic",
      [
        "neutron-moment-verifier"
      ]
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "afach2014",
      "kind": "research-publication",
      "title": "A measurement of the neutron to 199Hg magnetic moment ratio",
      "authors": [
        "S. Afach",
        "C. A. Baker",
        "G. Ban",
        "G. Bison",
        "K. Bodek",
        "M. Burghoff",
        "Z. Chowdhuri",
        "M. Daum",
        "M. Fertl",
        "B. Franke",
        "P. Geltenbort",
        "K. Green",
        "M. G. D. van der Grinten",
        "Z. Grujic",
        "P. G. Harris",
        "W. Heil",
        "V. Hélaine",
        "R. Henneck",
        "M. Horras",
        "P. Iaydjiev",
        "S. N. Ivanov",
        "M. Kasprzak",
        "Y. Kermaïdic",
        "K. Kirch",
        "A. Knecht",
        "H.-C. Koch",
        "J. Krempel",
        "M. Kuźniak",
        "B. Lauss",
        "T. Lefort",
        "Y. Lemière",
        "A. Mtchedlishvili",
        "O. Naviliat-Cuncic",
        "J. M. Pendlebury",
        "M. Perkowski",
        "E. Pierre",
        "F. M. Piegsa",
        "G. Pignol",
        "P. N. Prashanth",
        "G. Quéméner",
        "D. Rebreyend",
        "D. Ries",
        "S. Roccia",
        "P. Schmidt-Wellenburg",
        "A. Schnabel",
        "N. Severijns",
        "D. Shiers",
        "K. F. Smith",
        "J. Voigt",
        "A. Weis",
        "G. Wyszynski",
        "J. Zejma",
        "J. Zenner",
        "G. Zsigmond"
      ],
      "year": 2014,
      "doi": "10.1016/j.physletb.2014.10.046",
      "url": "https://arxiv.org/pdf/1410.8259v2",
      "path": null,
      "review": {
        "extent": "full-primary-author-report",
        "locators": [
          "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        ],
        "limit": "The complete six-page arXiv version 2 of 31 October 2014 was read, with Equations 5-18 and Tables 1-2 visually inspected. The regenerated PDF footer date does not change the archive version. Publisher bytes and the upstream Cagnac/Greene experiments were not reviewed. The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration."
      }
    },
    {
      "id": "neutron-moment-verifier",
      "kind": "executable-check",
      "title": "Finite neutron/mercury ratio and conditional calibration verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-neutron-moment.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic"
        ],
        "limit": "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration. The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-frequency-moment-ratio",
      "kind": "review-finding",
      "statement": "In a common homogeneous static field, the positive neutron and 199Hg atomic precession-frequency ratio f_n/f_Hg equals |gamma_n|/|gamma_Hg|. Recovering that ratio from this experiment requires its stated field-sampling and frequency-shift corrections; the positive ratio alone carries no sign information.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction."
      ]
    },
    {
      "id": "M-phys-afach2014-precession-context",
      "kind": "method",
      "statement": "Store polarized UCN and 199Hg atoms together, fit neutron Ramsey fringes against the optically read mercury frequency, and correct the selected field-up/down data for unequal field sampling and frequency shifts.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "contextIds": [
        "afach2014-precession"
      ]
    },
    {
      "id": "M-phys-afach2014-conversion-context",
      "kind": "method",
      "statement": "Adopt the quoted external 199Hg atomic frequency-per-field magnitude and multiply it by the corrected PSI ratio; preserve its shielded-proton-in-water reference chain and the distinct alternative calibration direction.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "M-phys-neutron-moment-replay-context",
      "kind": "method",
      "statement": "Check the 16 grouped run entries, printed directional correction arithmetic and the maximum-error rule; compare the adopted-reference product and explicitly conditional first-order uncertainty with the displayed result.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "neutron-moment-verifier",
          "locator": "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic",
          "role": "method",
          "note": "This executable checks the stated printed arithmetic without replaying acquisition or full covariance."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
        "The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    },
    {
      "id": "C-phys-afach2014-ratio",
      "kind": "review-finding",
      "statement": "The selected PSI analysis reports the positive neutron/199Hg frequency-ratio magnitude 3.8424574(30), or 0.78 ppm relative uncertainty, after the stated corrections. The final uncertainty is the larger of the field-up and field-down errors.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "contextIds": [
        "afach2014-precession"
      ]
    },
    {
      "id": "C-phys-afach2014-hg-reference",
      "kind": "review-finding",
      "statement": "For the absolute conversion, Afach Equation 2 adopts gamma_Hg/(2*pi)=7.590118(13) MHz/T from an external Hg-to-shielded-proton-in-water calibration and reference value. This is a quoted input, not a new PSI measurement of that absolute reference.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other."
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "C-phys-afach2014-neutron-frequency",
      "kind": "review-finding",
      "statement": "Multiplying the corrected PSI ratio by the adopted Hg atomic reference gives the published |gamma_n|/(2*pi)=29.164705(55) MHz/T. The absolute scale therefore depends on the external reference as well as the measured ratio.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "C-phys-neutron-moment-arithmetic",
      "kind": "review-finding",
      "statement": "The 16 grouped table entries split into seven field-down and nine field-up cases. Subtracting the printed Table 1 shifts gives 3.8424583 and 3.8424562; the reported final error uses max(2.6,3.0)e-6. The adopted-reference product is 29.1647050759732 MHz/T, compatible with the displayed conditional result.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "supports",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "neutron-moment-verifier",
          "locator": "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic",
          "role": "supports",
          "note": "This executable checks the stated printed arithmetic without replaying acquisition or full covariance."
        }
      ],
      "checkIds": [
        "afach2014-printed-arithmetic"
      ],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
        "The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    },
    {
      "id": "M-phys-afach2014-ratio",
      "kind": "method",
      "statement": "Interpret the positive frequency ratio only after the declared field and frequency-shift corrections; retain the common gradient analysis and conservative directional uncertainty.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm."
      ],
      "contextIds": [
        "afach2014-precession"
      ]
    },
    {
      "id": "M-phys-afach2014-hg-reference",
      "kind": "method",
      "statement": "Represent Equation 2 as an adopted external atomic reference with a shielded-proton-in-water calibration chain, rather than a new absolute response measured by the PSI acquisition.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other."
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "M-phys-afach2014-neutron-frequency",
      "kind": "method",
      "statement": "Multiply the corrected positive ratio by the adopted Hg atomic frequency-per-field magnitude and preserve both input uncertainties and their conditional calibration direction.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other."
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "M-phys-neutron-moment-arithmetic",
      "kind": "method",
      "statement": "Use the printed table entries and quoted reference values for finite algebra and rounding checks; distinguish the reported maximum-error rule from independent averaging and declare the covariance assumption in product propagation.",
      "scope": "The PSI 2012 neutron/199Hg spin-precession analysis reported in Afach et al., arXiv:1410.8259v2; positive frequency magnitudes and explicitly conditional reference calibration.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value",
          "role": "method",
          "note": "The reviewed author-version passage supports only the declared preparation, reported quantity or conditional calculation."
        },
        {
          "sourceId": "neutron-moment-verifier",
          "locator": "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic",
          "role": "method",
          "note": "This executable checks the stated printed arithmetic without replaying acquisition or full covariance."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
        "The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "afach2014-precession",
      "sourceId": "afach2014",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physletb.2014.10.046",
      "journal": "Physics Letters B",
      "volume": "739",
      "issue": "",
      "pages": "128-132",
      "system": "PSI neutron/mercury precession preparation",
      "preparation": "Store polarized UCN and 199Hg atoms together, fit neutron Ramsey fringes against the optically read mercury frequency, and correct the selected field-up/down data for unequal field sampling and frequency shifts.",
      "observable": "Positive frequency ratios, selected run summaries and a corrected neutron/199Hg magnitude ratio.",
      "finding": "The paper reports 3.8424574(30), keeping the larger directional uncertainty after the common gradient treatment.",
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
        "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
        "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1410.8259v2",
      "correctionCheck": "The versioned arXiv author report was read. Publisher bytes, exhaustive later corrections and upstream calibration experiments were not independently reviewed."
    },
    {
      "id": "afach2014-conversion",
      "sourceId": "afach2014",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2014.10.046",
      "journal": "Physics Letters B",
      "volume": "739",
      "issue": "",
      "pages": "128-132",
      "system": "Conditional atomic-reference calibration",
      "preparation": "Adopt the quoted external 199Hg atomic frequency-per-field magnitude and multiply it by the corrected PSI ratio; preserve its shielded-proton-in-water reference chain and the distinct alternative calibration direction.",
      "observable": "Conditional |gamma_n|/(2*pi) in MHz/T, with the adopted Hg reference and its uncertainty explicit.",
      "finding": "Equation 19 reports 29.164705(55) MHz/T conditional on Equation 2, rather than a reference-free absolute moment.",
      "limitations": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "This spin-precession result supplies no neutron electric or magnetic form factor, free-neutron survival estimate, bound-neutron stability, hadronization mechanism or universal construction rule."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
        "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1410.8259v2",
      "correctionCheck": "The versioned arXiv author report was read. Publisher bytes, exhaustive later corrections and upstream calibration experiments were not independently reviewed."
    },
    {
      "id": "neutron-moment-replay",
      "sourceId": "afach2014",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2014.10.046",
      "journal": "Physics Letters B",
      "volume": "739",
      "issue": "",
      "pages": "128-132",
      "system": "Printed neutron-ratio arithmetic",
      "preparation": "Check the 16 grouped run entries, printed directional correction arithmetic and the maximum-error rule; compare the adopted-reference product and explicitly conditional first-order uncertainty with the displayed result.",
      "observable": "Finite table census, ratio corrections, uncertainty-rule distinction and conditional reference conversion.",
      "finding": "The printed directional results and conditional calibration agree with these bounded calculations; no raw fit or full covariance is reproduced.",
      "limitations": [
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
        "The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
        "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions",
        "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty",
        "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1410.8259v2",
      "correctionCheck": "The versioned arXiv author report was read. Publisher bytes, exhaustive later corrections and upstream calibration experiments were not independently reviewed."
    }
  ],
  "comparisons": [
    {
      "id": "afach2014-ratio",
      "candidate": "The corrected preparation supports the reported positive neutron/mercury ratio.",
      "alternative": "The positive ratio directly establishes a signed neutron moment or needs no field-sampling corrections.",
      "discriminator": "Interpret the positive frequency ratio only after the declared field and frequency-shift corrections; retain the common gradient analysis and conservative directional uncertainty.",
      "result": "conditional-support",
      "limit": "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
      "assumptions": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "Cohabiting the chamber does not guarantee identical sampled fields: UCN gravity shifts the mean height, and the neutron response averages field magnitude while the fast-moving mercury atoms average the field vector. Gradient, transverse-field, light and Earth-rotation corrections remain part of the extraction.",
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm."
      ],
      "sourceIds": [
        "afach2014"
      ],
      "claimIds": [
        "C-phys-afach2014-ratio"
      ]
    },
    {
      "id": "afach2014-neutron-frequency",
      "candidate": "The absolute frequency-per-field magnitude is conditional on the quoted Hg atomic reference.",
      "alternative": "The measured ratio alone supplies an independent absolute calibration or a signed nuclear-magneton moment.",
      "discriminator": "Multiply the corrected positive ratio by the adopted Hg atomic frequency-per-field magnitude and preserve both input uncertainties and their conditional calibration direction.",
      "result": "conditional-support",
      "limit": "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
      "assumptions": [
        "The fitted frequencies and the admitted ratio are positive magnitudes. The opposite signed neutron and 199Hg gyromagnetic ratios are assumptions in the Earth-rotation correction; the positive ratio is not an independent determination of those signs or of a signed neutron moment in nuclear magnetons.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "The neutron frequency-per-field magnitude is conditional on the adopted Hg atomic reference. The positive product does not determine a signed magnetic moment, a new nuclear-magneton conversion or a constituent count. The later free-proton trap result is not substituted for the shielded-proton-in-water reference.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other."
      ],
      "sourceIds": [
        "afach2014"
      ],
      "claimIds": [
        "C-phys-afach2014-neutron-frequency"
      ]
    },
    {
      "id": "neutron-moment-arithmetic",
      "candidate": "The printed corrections, conservative error rule and conditional product admit bounded arithmetic checks.",
      "alternative": "The finite checks independently reconstruct the original spin fits, full covariance or upstream absolute reference.",
      "discriminator": "Use the printed table entries and quoted reference values for finite algebra and rounding checks; distinguish the reported maximum-error rule from independent averaging and declare the covariance assumption in product propagation.",
      "result": "conditional-support",
      "limit": "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
      "assumptions": [
        "Table 2 contains 16 selected analysis entries, seven field-down and nine field-up; labels 6027-8 and 6040-1 remain grouped. The 200 pT/cm gradient restriction selects this analysis, not a universal neutron condition or independent count of 18 replicates.",
        "The field directions share the combined gradient analysis. Equation 18 deliberately keeps the larger directional uncertainty, 3.0e-6, to avoid double use of data. An independent inverse-variance uncertainty of about 1.965e-6 would not implement that rule. Compatibility of a weighted central value does not establish the paper's exact combination algorithm.",
        "The 199Hg atomic response 7.590118(13) MHz/T is adopted from Equation 2, which quotes an external Hg-to-shielded-proton-in-water calibration and reference value. The upstream Cagnac experiment and fundamental-constant adjustment are not reviewed or reproduced here. This is not the moment of an isolated bare Hg nucleus or a new absolute calibration from the PSI counts.",
        "Equation 20 instead combines the same ratio with an adopted neutron value to infer Hg. Substituting that inferred Hg back into the ratio returns the adopted neutron input; these alternative calibrations cannot be counted as independent confirmations of each other.",
        "The local check transcribes Tables 1-2, checks finite correction identities and published rounding, and evaluates the conditional product. It does not reproduce raw spin counts, Ramsey fits, field maps, the common gradient fit, light-shift tests, full covariance or upstream Hg calibration.",
        "The uncertainty comparison for Equation 19 uses first-order product propagation with an explicitly assumed zero correlation between the ratio and adopted reference. Agreement with the printed error does not recover their full covariance or establish independence of every upstream reference."
      ],
      "sourceIds": [
        "afach2014",
        "neutron-moment-verifier"
      ],
      "claimIds": [
        "C-phys-neutron-moment-arithmetic"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:frequency-moment-ratio",
      "name": "Neutron/mercury precession-magnitude ratio",
      "kind": "definition",
      "description": "In a common homogeneous static field, the positive neutron and 199Hg atomic precession-frequency ratio f_n/f_Hg equals |gamma_n|/|gamma_Hg|. Recovering that ratio from this experiment requires its stated field-sampling and frequency-shift corrections; the positive ratio alone carries no sign information.",
      "claimIds": [
        "D-phys-frequency-moment-ratio"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions"
        }
      ],
      "openObligations": [
        "Keep atomic reference, field-sampling and signed versus magnitude conventions explicit."
      ]
    },
    {
      "id": "phys:afach2014-precession-context",
      "name": "PSI neutron/mercury precession preparation",
      "kind": "context",
      "description": "Store polarized UCN and 199Hg atoms together, fit neutron Ramsey fringes against the optically read mercury frequency, and correct the selected field-up/down data for unequal field sampling and frequency shifts.",
      "claimIds": [
        "M-phys-afach2014-precession-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty"
        }
      ],
      "openObligations": [
        "Keep the declared inputs and limits explicit; independent acquisition or covariance replay has separate requirements."
      ]
    },
    {
      "id": "phys:afach2014-conversion-context",
      "name": "Conditional atomic-reference calibration",
      "kind": "context",
      "description": "Adopt the quoted external 199Hg atomic frequency-per-field magnitude and multiply it by the corrected PSI ratio; preserve its shielded-proton-in-water reference chain and the distinct alternative calibration direction.",
      "claimIds": [
        "M-phys-afach2014-conversion-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        }
      ],
      "openObligations": [
        "Keep the declared inputs and limits explicit; independent acquisition or covariance replay has separate requirements."
      ]
    },
    {
      "id": "phys:neutron-moment-replay-context",
      "name": "Printed neutron-ratio arithmetic",
      "kind": "context",
      "description": "Check the 16 grouped run entries, printed directional correction arithmetic and the maximum-error rule; compare the adopted-reference product and explicitly conditional first-order uncertainty with the displayed result.",
      "claimIds": [
        "M-phys-neutron-moment-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        },
        {
          "sourceId": "neutron-moment-verifier",
          "locator": "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic"
        }
      ],
      "openObligations": [
        "Keep the declared inputs and limits explicit; independent acquisition or covariance replay has separate requirements."
      ]
    },
    {
      "id": "phys:afach2014-ratio",
      "name": "Corrected neutron/mercury ratio",
      "kind": "scoped-process",
      "description": "The selected PSI analysis reports the positive neutron/199Hg frequency-ratio magnitude 3.8424574(30), or 0.78 ppm relative uncertainty, after the stated corrections. The final uncertainty is the larger of the field-up and field-down errors.",
      "claimIds": [
        "C-phys-afach2014-ratio"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty"
        }
      ],
      "openObligations": [
        "Obtain original spin and field records before claiming independent Ramsey or gradient-fit reproduction."
      ]
    },
    {
      "id": "phys:afach2014-hg-reference",
      "name": "Adopted mercury atomic reference",
      "kind": "scoped-process",
      "description": "For the absolute conversion, Afach Equation 2 adopts gamma_Hg/(2*pi)=7.590118(13) MHz/T from an external Hg-to-shielded-proton-in-water calibration and reference value. This is a quoted input, not a new PSI measurement of that absolute reference.",
      "claimIds": [
        "C-phys-afach2014-hg-reference"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        }
      ],
      "openObligations": [
        "Review the upstream atomic calibration separately before making claims about its acquisition or replacing its reference convention."
      ]
    },
    {
      "id": "phys:afach2014-neutron-frequency",
      "name": "Conditional neutron frequency-per-field magnitude",
      "kind": "scoped-process",
      "description": "Multiplying the corrected PSI ratio by the adopted Hg atomic reference gives the published |gamma_n|/(2*pi)=29.164705(55) MHz/T. The absolute scale therefore depends on the external reference as well as the measured ratio.",
      "claimIds": [
        "C-phys-afach2014-neutron-frequency"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        }
      ],
      "openObligations": [
        "Retain the conditional reference scale and obtain upstream calibration covariance before stronger independent absolute-moment validation."
      ]
    },
    {
      "id": "phys:neutron-moment-arithmetic",
      "name": "Checked neutron-ratio correction and calibration arithmetic",
      "kind": "scoped-process",
      "description": "The 16 grouped table entries split into seven field-down and nine field-up cases. Subtracting the printed Table 1 shifts gives 3.8424583 and 3.8424562; the reported final error uses max(2.6,3.0)e-6. The adopted-reference product is 29.1647050759732 MHz/T, compatible with the displayed conditional result.",
      "claimIds": [
        "C-phys-neutron-moment-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 pages 3-4, Section 3 and Equations 5-17: gravity and transverse-field averages, light and Earth-rotation shifts, signed versus positive-frequency conventions"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Tables 1-2 and Equation 18: 16 grouped analysis entries, directional correction budget and conservative final uncertainty"
        },
        {
          "sourceId": "afach2014",
          "locator": "arXiv:1410.8259v2 page 5, Section 4, Equations 19-20 and Figure 4: conditional neutron calibration and the alternative Hg inference using an adopted neutron value"
        },
        {
          "sourceId": "neutron-moment-verifier",
          "locator": "verify(): printed Table 1 shifts, 16 grouped Table 2 entries, final uncertainty rule and conditional Equations 19-20 arithmetic"
        }
      ],
      "openObligations": [
        "The local checks cover printed finite arithmetic; they do not supply raw acquisitions, fitted covariance or a new absolute reference."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:frequency-moment-ratio-afach2014-ratio",
      "source": "phys:frequency-moment-ratio",
      "target": "phys:afach2014-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected positive frequency ratio has the magnitude convention declared in the definition.",
      "claimIds": [
        "M-phys-afach2014-ratio"
      ],
      "contextIds": [
        "afach2014-precession"
      ]
    },
    {
      "id": "physics:afach2014-precession-context-afach2014-ratio",
      "source": "phys:afach2014-precession-context",
      "target": "phys:afach2014-ratio",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The PSI preparation, Ramsey extraction and correction procedure delimit this ratio measurement.",
      "claimIds": [
        "M-phys-afach2014-ratio"
      ],
      "contextIds": [
        "afach2014-precession"
      ]
    },
    {
      "id": "physics:afach2014-conversion-context-afach2014-hg-reference",
      "source": "phys:afach2014-conversion-context",
      "target": "phys:afach2014-hg-reference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conversion explicitly adopts this externally calibrated atomic input rather than measuring it again.",
      "claimIds": [
        "M-phys-afach2014-hg-reference"
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "physics:frequency-moment-ratio-afach2014-neutron-frequency",
      "source": "phys:frequency-moment-ratio",
      "target": "phys:afach2014-neutron-frequency",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The magnitude-ratio relation defines the conditional frequency-per-field conversion.",
      "claimIds": [
        "M-phys-afach2014-neutron-frequency"
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "physics:afach2014-ratio-afach2014-neutron-frequency",
      "source": "phys:afach2014-ratio",
      "target": "phys:afach2014-neutron-frequency",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected PSI ratio is the measured multiplicative input to this absolute-scale inference.",
      "claimIds": [
        "M-phys-afach2014-neutron-frequency"
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "physics:afach2014-hg-reference-afach2014-neutron-frequency",
      "source": "phys:afach2014-hg-reference",
      "target": "phys:afach2014-neutron-frequency",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted atomic reference supplies the external scale and its calibration uncertainty.",
      "claimIds": [
        "M-phys-afach2014-neutron-frequency"
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "physics:afach2014-conversion-context-afach2014-neutron-frequency",
      "source": "phys:afach2014-conversion-context",
      "target": "phys:afach2014-neutron-frequency",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared reference convention and conversion direction condition the absolute result.",
      "claimIds": [
        "M-phys-afach2014-neutron-frequency"
      ],
      "contextIds": [
        "afach2014-conversion"
      ]
    },
    {
      "id": "physics:afach2014-ratio-neutron-moment-arithmetic",
      "source": "phys:afach2014-ratio",
      "target": "phys:neutron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported ratio and directional shifts supply the finite printed inputs, not raw fitted spin records.",
      "claimIds": [
        "M-phys-neutron-moment-arithmetic"
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    },
    {
      "id": "physics:afach2014-hg-reference-neutron-moment-arithmetic",
      "source": "phys:afach2014-hg-reference",
      "target": "phys:neutron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The quoted Hg input supplies the adopted scale and uncertainty for the bounded product check.",
      "claimIds": [
        "M-phys-neutron-moment-arithmetic"
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    },
    {
      "id": "physics:afach2014-neutron-frequency-neutron-moment-arithmetic",
      "source": "phys:afach2014-neutron-frequency",
      "target": "phys:neutron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The published conditional value is the comparison target, not another independent measurement.",
      "claimIds": [
        "M-phys-neutron-moment-arithmetic"
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    },
    {
      "id": "physics:neutron-moment-replay-context-neutron-moment-arithmetic",
      "source": "phys:neutron-moment-replay-context",
      "target": "phys:neutron-moment-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The local procedure checks finite table arithmetic under explicit covariance and non-reproduction boundaries.",
      "claimIds": [
        "M-phys-neutron-moment-arithmetic"
      ],
      "contextIds": [
        "neutron-moment-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:frequency-moment-ratio",
      "role": "definition",
      "denotes": "In a common homogeneous static field, the positive neutron and 199Hg atomic precession-frequency ratio f_n/f_Hg equals |gamma_n|/|gamma_Hg|. Recovering that ratio from this experiment requires its stated field-sampling and frequency-shift corrections; the positive ratio alone carries no sign information.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-frequency-moment-ratio"
      ]
    },
    {
      "nodeId": "phys:afach2014-precession-context",
      "role": "experimental-context",
      "denotes": "Store polarized UCN and 199Hg atoms together, fit neutron Ramsey fringes against the optically read mercury frequency, and correct the selected field-up/down data for unequal field sampling and frequency shifts.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-afach2014-precession-context"
      ]
    },
    {
      "nodeId": "phys:afach2014-conversion-context",
      "role": "model-context",
      "denotes": "Adopt the quoted external 199Hg atomic frequency-per-field magnitude and multiply it by the corrected PSI ratio; preserve its shielded-proton-in-water reference chain and the distinct alternative calibration direction.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-afach2014-conversion-context"
      ]
    },
    {
      "nodeId": "phys:neutron-moment-replay-context",
      "role": "model-context",
      "denotes": "Check the 16 grouped run entries, printed directional correction arithmetic and the maximum-error rule; compare the adopted-reference product and explicitly conditional first-order uncertainty with the displayed result.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-neutron-moment-replay-context"
      ]
    },
    {
      "nodeId": "phys:afach2014-ratio",
      "role": "scoped-phenomenon",
      "denotes": "The selected PSI analysis reports the positive neutron/199Hg frequency-ratio magnitude 3.8424574(30), or 0.78 ppm relative uncertainty, after the stated corrections. The final uncertainty is the larger of the field-up and field-down errors.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-afach2014-ratio"
      ]
    },
    {
      "nodeId": "phys:afach2014-hg-reference",
      "role": "scoped-phenomenon",
      "denotes": "For the absolute conversion, Afach Equation 2 adopts gamma_Hg/(2*pi)=7.590118(13) MHz/T from an external Hg-to-shielded-proton-in-water calibration and reference value. This is a quoted input, not a new PSI measurement of that absolute reference.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-afach2014-hg-reference"
      ]
    },
    {
      "nodeId": "phys:afach2014-neutron-frequency",
      "role": "scoped-phenomenon",
      "denotes": "Multiplying the corrected PSI ratio by the adopted Hg atomic reference gives the published |gamma_n|/(2*pi)=29.164705(55) MHz/T. The absolute scale therefore depends on the external reference as well as the measured ratio.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-afach2014-neutron-frequency"
      ]
    },
    {
      "nodeId": "phys:neutron-moment-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The 16 grouped table entries split into seven field-down and nine field-up cases. Subtracting the printed Table 1 shifts gives 3.8424583 and 3.8424562; the reported final error uses max(2.6,3.0)e-6. The adopted-reference product is 29.1647050759732 MHz/T, compatible with the displayed conditional result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-neutron-moment-arithmetic"
      ]
    }
  ]
};

/** Preserve magnitude, external calibration and shared-analysis boundaries. */
export function validateNeutronMomentContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing neutron moment ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Neutron moment ${kind} changed ${id}.${key}: preserve sign, reference and inference scope`);
      }
    }
  }
}
