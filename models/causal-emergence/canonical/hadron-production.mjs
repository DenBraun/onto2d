import assert from "node:assert/strict";

export const HADRON_PRODUCTION_CHECKS = new Map([["hadron-production-printed-arithmetic", "C-phys-hadron-production-arithmetic"]]);

export const HADRON_PRODUCTION_ANALYTICAL_SOURCES = new Map([["C-phys-hadron-production-arithmetic", "hadron-production-verifier"]]);

export const HADRON_PRODUCTION_ADMISSION = {
  "definitions": [
    [
      "phys:hadron-production-yield",
      "D-phys-hadron-production-yield"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "sld1999-neutral-context",
      "M-phys-sld1999-neutral-context",
      [
        "sld1999-neutral-acquisition"
      ]
    ],
    [
      "sld1999-extrapolation-context",
      "M-phys-sld1999-extrapolation-context",
      [
        "sld1999-neutral-extrapolation"
      ]
    ],
    [
      "hadron-production-replay-context",
      "M-phys-hadron-production-replay-context",
      [
        "hadron-production-replay"
      ]
    ]
  ],
  "observations": [
    [
      "sld1999-neutral-yields",
      "C-phys-sld1999-neutral-yields",
      [
        "sld1999-neutral-acquisition"
      ]
    ],
    [
      "sld1999-neutral-totals",
      "C-phys-sld1999-neutral-totals",
      [
        "sld1999-neutral-extrapolation"
      ]
    ],
    [
      "hadron-production-arithmetic",
      "C-phys-hadron-production-arithmetic",
      [
        "hadron-production-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "sld1999-neutral-context-sld1999-neutral-yields",
      "sld1999-neutral-context",
      "sld1999-neutral-yields",
      "M-phys-sld1999-neutral-yields",
      "measurement-context"
    ],
    [
      "hadron-production-yield-sld1999-neutral-yields",
      "hadron-production-yield",
      "sld1999-neutral-yields",
      "M-phys-sld1999-neutral-yields",
      "interpretation-dependency"
    ],
    [
      "sld1999-neutral-yields-sld1999-neutral-totals",
      "sld1999-neutral-yields",
      "sld1999-neutral-totals",
      "M-phys-sld1999-neutral-totals",
      "interpretation-dependency"
    ],
    [
      "sld1999-extrapolation-context-sld1999-neutral-totals",
      "sld1999-extrapolation-context",
      "sld1999-neutral-totals",
      "M-phys-sld1999-neutral-totals",
      "interpretation-dependency"
    ],
    [
      "qcd-sld1999-neutral-totals",
      "qcd",
      "sld1999-neutral-totals",
      "M-phys-sld1999-neutral-totals",
      "interpretation-dependency"
    ],
    [
      "hadron-production-yield-hadron-production-arithmetic",
      "hadron-production-yield",
      "hadron-production-arithmetic",
      "M-phys-hadron-production-arithmetic",
      "interpretation-dependency"
    ],
    [
      "sld1999-neutral-yields-hadron-production-arithmetic",
      "sld1999-neutral-yields",
      "hadron-production-arithmetic",
      "M-phys-hadron-production-arithmetic",
      "interpretation-dependency"
    ],
    [
      "sld1999-neutral-totals-hadron-production-arithmetic",
      "sld1999-neutral-totals",
      "hadron-production-arithmetic",
      "M-phys-hadron-production-arithmetic",
      "interpretation-dependency"
    ],
    [
      "hadron-production-replay-context-hadron-production-arithmetic",
      "hadron-production-replay-context",
      "hadron-production-arithmetic",
      "M-phys-hadron-production-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "localStudySources": [
    [
      "hadron-production-replay",
      "hadron-production-verifier"
    ]
  ],
  "studyIds": [
    "sld1999-neutral-acquisition",
    "sld1999-neutral-extrapolation",
    "hadron-production-replay"
  ],
  "comparisonIds": [
    "sld1999-neutral-yield-scope",
    "hadron-production-arithmetic-scope"
  ],
  "inferenceSources": [
    [
      "M-phys-sld1999-neutral-context",
      [
        "sld1999-neutral-production"
      ]
    ],
    [
      "M-phys-sld1999-extrapolation-context",
      [
        "sld1999-neutral-production"
      ]
    ],
    [
      "M-phys-hadron-production-replay-context",
      [
        "sld1999-neutral-production",
        "sld1999-neutral-table",
        "hadron-production-verifier"
      ]
    ],
    [
      "C-phys-sld1999-neutral-yields",
      [
        "sld1999-neutral-production",
        "sld1999-neutral-table"
      ]
    ],
    [
      "M-phys-sld1999-neutral-yields",
      [
        "sld1999-neutral-production",
        "sld1999-neutral-table"
      ]
    ],
    [
      "C-phys-sld1999-neutral-totals",
      [
        "sld1999-neutral-production"
      ]
    ],
    [
      "M-phys-sld1999-neutral-totals",
      [
        "sld1999-neutral-production"
      ]
    ],
    [
      "C-phys-hadron-production-arithmetic",
      [
        "sld1999-neutral-production",
        "sld1999-neutral-table",
        "hadron-production-verifier"
      ]
    ],
    [
      "M-phys-hadron-production-arithmetic",
      [
        "sld1999-neutral-production",
        "sld1999-neutral-table",
        "hadron-production-verifier"
      ]
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "sld1999-neutral-production",
      "kind": "research-publication",
      "title": "Production of pi+, K+, K0, K*0, phi, p and Lambda0 in hadronic Z0 decays",
      "authors": [
        "K. Abe",
        "SLD Collaboration"
      ],
      "year": 1999,
      "doi": "10.1103/PhysRevD.59.052001",
      "url": "https://arxiv.org/pdf/hep-ex/9805029v1",
      "path": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation"
        ],
        "limit": "Selected passages of the 24 May 1998 author v1 were read; Tables 6, 7 and 16 were visually inspected. The arXiv record identifies Physical Review D59, 052001 (1999). The publisher PDF and the complete 61-page analysis were not reviewed. Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block."
      }
    },
    {
      "id": "sld2004-charged-update",
      "kind": "research-publication",
      "title": "Production of pi+, pi-, K+, K-, p and pbar in light (uds), c, and b jets from Z0 decays",
      "authors": [
        "K. Abe",
        "SLD Collaboration"
      ],
      "year": 2004,
      "doi": "10.1103/PhysRevD.69.072003",
      "url": "https://arxiv.org/pdf/hep-ex/0310017v1",
      "path": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:hep-ex/0310017v1 pages 1-3 and page 43 reference 12: charged pi/K/p scope, 1996-1998 acquisition and explicit supersession of earlier charged results"
        ],
        "limit": "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made."
      }
    },
    {
      "id": "sld1999-neutral-table",
      "kind": "research-dataset",
      "title": "Selected SLD neutral-hadron production table transcription",
      "authors": [
        "Onto2D contributors; transcribed from SLD Collaboration"
      ],
      "year": 2026,
      "doi": null,
      "url": "https://arxiv.org/pdf/hep-ex/9805029v1",
      "path": "references/canonical/data/sld1998-neutral-production.json",
      "review": {
        "extent": "selected-published-table-transcription",
        "locators": [
          "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46"
        ],
        "limit": "Local transcription, not an author machine-readable release. Printed decimal strings and separate statistical/systematic columns are retained; no raw event data or covariance is supplied. The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature."
      }
    },
    {
      "id": "hadron-production-verifier",
      "kind": "executable-check",
      "title": "SLD neutral-hadron printed-yield arithmetic verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-hadron-production.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): printed differential-bin integrals, coherent display-rounding bounds, synthetic efficiency/branching normalization, shared-normalization and extrapolation identities"
        ],
        "limit": "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-hadron-production-yield",
      "kind": "review-finding",
      "statement": "Define xp=2p/Ecm and the inclusive differential multiplicity (1/N)dn/dxp per hadronic Z0 decay. Integrating a differential multiplicity over xp gives a mean count, which may exceed one; it is not an event probability.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature."
      ]
    },
    {
      "id": "M-phys-sld1999-neutral-context",
      "kind": "method",
      "statement": "SLD uses approximately 150000 hadronic events acquired in 1993-1995. The inclusive event selection retains 90213 events; CRID analyses additionally require detector readiness, leaving 79711. K0S and Lambda use displaced charged vertices; K*0 and phi use charged-pair mass fits with kaon identification. The event denominator is corrected for trigger and selection efficiency.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld2004-charged-update",
          "locator": "arXiv:hep-ex/0310017v1 pages 1-3 and page 43 reference 12: charged pi/K/p scope, 1996-1998 acquisition and explicit supersession of earlier charged results",
          "role": "provenance",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The charged channels are K0S to pi+pi-, Lambda/Lambdabar to p pi-/pbar pi+, K*0/K*0bar to K+pi-/K-pi+, and phi to K+K-. Branching fractions already enter simulated reconstruction efficiencies. The published K0/K0bar yield separately doubles K0S to account for the unobserved K0L component; it is not a direct K0L detection.",
        "The K*0 signal center and width are fixed to world-average inputs; these yields are not new mass, width or lifetime determinations. Fitted mass peaks, resonant reflections, combinatorial backgrounds, detector acceptance, efficiency and event selection corrections are source analysis inputs; raw spectra and original simulation are not replayed.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-acquisition"
      ]
    },
    {
      "id": "M-phys-sld1999-extrapolation-context",
      "kind": "method",
      "statement": "The same measured spectra are integrated with correlated systematic errors, then extrapolated over unmeasured xp using the mean accepted fraction from three specified fragmentation generators. The assigned absolute accepted-fraction uncertainty is 0.01 for K0 and Lambda and 0.015 for K*0 and phi.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Table 16 totals reuse the same measured-range spectra and divide by the mean accepted fraction from JETSET 7.4, UCLA 4.1 and HERWIG 5.8. Experimental and extrapolation errors are combined in quadrature by the authors. These are not directly measured full-range counts, independent replications or a demonstrated unique fragmentation mechanism.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "M-phys-hadron-production-replay-context",
      "kind": "method",
      "statement": "Check the local transcription of 44 neutral-hadron bins, integrals of the displayed densities, coherent display-rounding bounds, and synthetic branching/efficiency and shared-normalization identities.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-table",
          "locator": "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "hadron-production-verifier",
          "locator": "verify(): printed differential-bin integrals, coherent display-rounding bounds, synthetic efficiency/branching normalization, shared-normalization and extrapolation identities",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Central sums of the displayed densities times displayed bin widths do not exactly reproduce the published measured-range centers. Coherent half-last-digit rounding intervals of shared boundaries and densities overlap the published display bins; these are display arithmetic bounds, not measurement errors or confidence intervals.",
        "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature."
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    },
    {
      "id": "C-phys-sld1999-neutral-yields",
      "kind": "review-finding",
      "statement": "Tables 6-7 report corrected differential yields in 44 bins. Measured-range integrals per hadronic Z0 decay are K0/K0bar 1.90 +/- 0.02 +/- 0.07, Lambda/Lambdabar 0.37 +/- 0.01 +/- 0.02, K*0/K*0bar 0.647 +/- 0.022 +/- 0.029 and phi 0.0985 +/- 0.0046 +/- 0.0055, with statistical then systematic errors.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-table",
          "locator": "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld2004-charged-update",
          "locator": "arXiv:hep-ex/0310017v1 pages 1-3 and page 43 reference 12: charged pi/K/p scope, 1996-1998 acquisition and explicit supersession of earlier charged results",
          "role": "provenance",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The charged channels are K0S to pi+pi-, Lambda/Lambdabar to p pi-/pbar pi+, K*0/K*0bar to K+pi-/K-pi+, and phi to K+K-. Branching fractions already enter simulated reconstruction efficiencies. The published K0/K0bar yield separately doubles K0S to account for the unobserved K0L component; it is not a direct K0L detection.",
        "The K*0 signal center and width are fixed to world-average inputs; these yields are not new mass, width or lifetime determinations. Fitted mass peaks, resonant reflections, combinatorial backgrounds, detector acceptance, efficiency and event selection corrections are source analysis inputs; raw spectra and original simulation are not replayed.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-acquisition"
      ]
    },
    {
      "id": "M-phys-sld1999-neutral-yields",
      "kind": "method",
      "statement": "Interpret sld measured-range neutral-hadron yields only through the stated preparation and bounded method.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-table",
          "locator": "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld2004-charged-update",
          "locator": "arXiv:hep-ex/0310017v1 pages 1-3 and page 43 reference 12: charged pi/K/p scope, 1996-1998 acquisition and explicit supersession of earlier charged results",
          "role": "provenance",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The charged channels are K0S to pi+pi-, Lambda/Lambdabar to p pi-/pbar pi+, K*0/K*0bar to K+pi-/K-pi+, and phi to K+K-. Branching fractions already enter simulated reconstruction efficiencies. The published K0/K0bar yield separately doubles K0S to account for the unobserved K0L component; it is not a direct K0L detection.",
        "The K*0 signal center and width are fixed to world-average inputs; these yields are not new mass, width or lifetime determinations. Fitted mass peaks, resonant reflections, combinatorial backgrounds, detector acceptance, efficiency and event selection corrections are source analysis inputs; raw spectra and original simulation are not replayed.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-acquisition"
      ]
    },
    {
      "id": "C-phys-sld1999-neutral-totals",
      "kind": "review-finding",
      "statement": "Table 16 reports all-flavor full-range totals per hadronic Z0 decay: K0/K0bar 2.01 +/- 0.08, Lambda/Lambdabar 0.395 +/- 0.022, K*0/K*0bar 0.707 +/- 0.041 and phi 0.105 +/- 0.008. The quoted errors combine experimental and model-extrapolation contributions.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Table 16 totals reuse the same measured-range spectra and divide by the mean accepted fraction from JETSET 7.4, UCLA 4.1 and HERWIG 5.8. Experimental and extrapolation errors are combined in quadrature by the authors. These are not directly measured full-range counts, independent replications or a demonstrated unique fragmentation mechanism.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "M-phys-sld1999-neutral-totals",
      "kind": "method",
      "statement": "Interpret sld extrapolated neutral-hadron totals only through the stated preparation and bounded method.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Table 16 totals reuse the same measured-range spectra and divide by the mean accepted fraction from JETSET 7.4, UCLA 4.1 and HERWIG 5.8. Experimental and extrapolation errors are combined in quadrature by the authors. These are not directly measured full-range counts, independent replications or a demonstrated unique fragmentation mechanism.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "C-phys-hadron-production-arithmetic",
      "kind": "review-finding",
      "statement": "The 44 displayed differential bins integrate centrally to 1.89787 K0/K0bar, 0.36454 Lambda/Lambdabar, 0.645525 K*0/K*0bar and 0.0980933 phi per decay. These do not exactly equal the displayed measured-range centers, but coherent display-rounding enclosures overlap the reported bins. Synthetic count corrections preserve the once-only branching efficiency and separate neutral-kaon factor two.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-table",
          "locator": "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "hadron-production-verifier",
          "locator": "verify(): printed differential-bin integrals, coherent display-rounding bounds, synthetic efficiency/branching normalization, shared-normalization and extrapolation identities",
          "role": "supports",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [
        "hadron-production-printed-arithmetic"
      ],
      "limitations": [
        "Central sums of the displayed densities times displayed bin widths do not exactly reproduce the published measured-range centers. Coherent half-last-digit rounding intervals of shared boundaries and densities overlap the published display bins; these are display arithmetic bounds, not measurement errors or confidence intervals.",
        "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The observed/total ratios are diagnostics of rounded published numbers, not recovered generator acceptance estimates."
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    },
    {
      "id": "M-phys-hadron-production-arithmetic",
      "kind": "method",
      "statement": "Interpret checked neutral-hadron table arithmetic only through the stated preparation and bounded method.",
      "scope": "Flavor-inclusive hadronic Z0 decays in the specified SLD 1993-1995 analysis, under the stated reconstruction or extrapolation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "sld1999-neutral-table",
          "locator": "Complete local transcription of Table 6 on page 22 and Table 7 on page 27 (44 neutral-hadron bins), with their observed totals and selected Table 16 all-flavor totals on page 46",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        },
        {
          "sourceId": "hadron-production-verifier",
          "locator": "verify(): printed differential-bin integrals, coherent display-rounding bounds, synthetic efficiency/branching normalization, shared-normalization and extrapolation identities",
          "role": "method",
          "note": "Supports only the stated source-specific observable, preparation, scope or finite arithmetic."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Central sums of the displayed densities times displayed bin widths do not exactly reproduce the published measured-range centers. Coherent half-last-digit rounding intervals of shared boundaries and densities overlap the published display bins; these are display arithmetic bounds, not measurement errors or confidence intervals.",
        "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The observed/total ratios are diagnostics of rounded published numbers, not recovered generator acceptance estimates."
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "sld1999-neutral-acquisition",
      "sourceId": "sld1999-neutral-production",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevD.59.052001",
      "journal": "Physical Review D",
      "volume": "59",
      "issue": "",
      "pages": "052001",
      "system": "SLD inclusive neutral-hadron reconstruction",
      "preparation": "SLD uses approximately 150000 hadronic events acquired in 1993-1995. The inclusive event selection retains 90213 events; CRID analyses additionally require detector readiness, leaving 79711. K0S and Lambda use displaced charged vertices; K*0 and phi use charged-pair mass fits with kaon identification. The event denominator is corrected for trigger and selection efficiency.",
      "observable": "SLD measured-range neutral-hadron yields",
      "finding": "Tables 6-7 report corrected differential yields in 44 bins. Measured-range integrals per hadronic Z0 decay are K0/K0bar 1.90 +/- 0.02 +/- 0.07, Lambda/Lambdabar 0.37 +/- 0.01 +/- 0.02, K*0/K*0bar 0.647 +/- 0.022 +/- 0.029 and phi 0.0985 +/- 0.0046 +/- 0.0055, with statistical then systematic errors.",
      "limitations": [
        "Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block.",
        "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
        "The charged channels are K0S to pi+pi-, Lambda/Lambdabar to p pi-/pbar pi+, K*0/K*0bar to K+pi-/K-pi+, and phi to K+K-. Branching fractions already enter simulated reconstruction efficiencies. The published K0/K0bar yield separately doubles K0S to account for the unobserved K0L component; it is not a direct K0L detection.",
        "The K*0 signal center and width are fixed to world-average inputs; these yields are not new mass, width or lifetime determinations. Fitted mass peaks, resonant reflections, combinatorial backgrounds, detector acceptance, efficiency and event selection corrections are source analysis inputs; raw spectra and original simulation are not replayed.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
        "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/9805029v1",
      "correctionCheck": "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made."
    },
    {
      "id": "sld1999-neutral-extrapolation",
      "sourceId": "sld1999-neutral-production",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.59.052001",
      "journal": "Physical Review D",
      "volume": "59",
      "issue": "",
      "pages": "052001",
      "system": "SLD model-dependent momentum extrapolation",
      "preparation": "The same measured spectra are integrated with correlated systematic errors, then extrapolated over unmeasured xp using the mean accepted fraction from three specified fragmentation generators. The assigned absolute accepted-fraction uncertainty is 0.01 for K0 and Lambda and 0.015 for K*0 and phi.",
      "observable": "SLD extrapolated neutral-hadron totals",
      "finding": "Table 16 reports all-flavor full-range totals per hadronic Z0 decay: K0/K0bar 2.01 +/- 0.08, Lambda/Lambdabar 0.395 +/- 0.022, K*0/K*0bar 0.707 +/- 0.041 and phi 0.105 +/- 0.008. The quoted errors combine experimental and model-extrapolation contributions.",
      "limitations": [
        "The Table 16 totals reuse the same measured-range spectra and divide by the mean accepted fraction from JETSET 7.4, UCLA 4.1 and HERWIG 5.8. Experimental and extrapolation errors are combined in quadrature by the authors. These are not directly measured full-range counts, independent replications or a demonstrated unique fragmentation mechanism.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature.",
        "The old card parent weights, Nmin/Ncrit values and fixed emergence order are unsupported by these inclusive production results and are not admitted."
      ],
      "readExtent": "selected-author-manuscript-passages",
      "reviewedLocators": [
        "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/9805029v1",
      "correctionCheck": "The 2003 author paper explicitly supersedes earlier charged pi/K/p measurements using 1996-1998 acquisition, distinct from the 1993-1995 data here. Its scope note supplies no new neutral/resonance measurement in this block. No claim of newest data or exhaustive later-correction search is made."
    },
    {
      "id": "hadron-production-replay",
      "sourceId": "hadron-production-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite neutral-hadron table arithmetic",
      "preparation": "Check the local transcription of 44 neutral-hadron bins, integrals of the displayed densities, coherent display-rounding bounds, and synthetic branching/efficiency and shared-normalization identities.",
      "observable": "Checked neutral-hadron table arithmetic",
      "finding": "The 44 displayed differential bins integrate centrally to 1.89787 K0/K0bar, 0.36454 Lambda/Lambdabar, 0.645525 K*0/K*0bar and 0.0980933 phi per decay. These do not exactly equal the displayed measured-range centers, but coherent display-rounding enclosures overlap the reported bins. Synthetic count corrections preserve the once-only branching efficiency and separate neutral-kaon factor two.",
      "limitations": [
        "Central sums of the displayed densities times displayed bin widths do not exactly reproduce the published measured-range centers. Coherent half-last-digit rounding intervals of shared boundaries and densities overlap the published display bins; these are display arithmetic bounds, not measurement errors or confidence intervals.",
        "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature."
      ],
      "readExtent": "scoped-executable-replay",
      "reviewedLocators": [
        "verify(): printed differential-bin integrals, coherent display-rounding bounds, synthetic efficiency/branching normalization, shared-normalization and extrapolation identities"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction."
    }
  ],
  "comparisons": [
    {
      "id": "sld1999-neutral-yield-scope",
      "candidate": "Inclusive decay-reconstructed yields support species-specific production under a defined detector analysis.",
      "alternative": "Every produced hadron is a persistent stable primary and the yields identify a unique formation mechanism.",
      "discriminator": "Decay reconstruction and feed-down limits distinguish counted species from persistent endpoints; model-dependent full-range extrapolation remains separate.",
      "result": "conditional-support",
      "limit": "Inclusive reconstructed yields are not feed-down-subtracted primary-hadron multiplicities. Daughter and parent species are not disjoint stable end products; a reconstructed unstable state does not establish persistent stability or its unique microscopic formation path.",
      "assumptions": [
        "The charged channels are K0S to pi+pi-, Lambda/Lambdabar to p pi-/pbar pi+, K*0/K*0bar to K+pi-/K-pi+, and phi to K+K-. Branching fractions already enter simulated reconstruction efficiencies. The published K0/K0bar yield separately doubles K0S to account for the unobserved K0L component; it is not a direct K0L detection.",
        "The Table 16 totals reuse the same measured-range spectra and divide by the mean accepted fraction from JETSET 7.4, UCLA 4.1 and HERWIG 5.8. Experimental and extrapolation errors are combined in quadrature by the authors. These are not directly measured full-range counts, independent replications or a demonstrated unique fragmentation mechanism.",
        "Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block."
      ],
      "sourceIds": [
        "sld1999-neutral-production"
      ],
      "claimIds": [
        "C-phys-sld1999-neutral-yields",
        "C-phys-sld1999-neutral-totals"
      ]
    },
    {
      "id": "hadron-production-arithmetic-scope",
      "candidate": "Displayed table arithmetic can be checked within a finite scope.",
      "alternative": "Matching rounded totals reproduces experimental fits, covariance and fragmentation dynamics.",
      "discriminator": "Exact density sums, shared-boundary rounding bounds and explicitly synthetic normalization tests.",
      "result": "conditional-support",
      "limit": "The local verifier checks the 44-bin transcription, finite displayed arithmetic and synthetic correction identities. It does not replay acquisition, mass fits, efficiency calibration, covariance, Monte Carlo extrapolation or primary feed-down subtraction.",
      "assumptions": [
        "Central sums of the displayed densities times displayed bin widths do not exactly reproduce the published measured-range centers. Coherent half-last-digit rounding intervals of shared boundaries and densities overlap the published display bins; these are display arithmetic bounds, not measurement errors or confidence intervals.",
        "The 3.4 percent common normalization uncertainty is excluded from Table 6-7 differential-bin systematic errors and included in the measured-range total systematic errors. Correlated errors and the full integrated covariance are not reconstructed or replaced by independent-bin quadrature."
      ],
      "sourceIds": [
        "sld1999-neutral-production",
        "sld1999-neutral-table",
        "hadron-production-verifier"
      ],
      "claimIds": [
        "C-phys-hadron-production-arithmetic"
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:sld1999-neutral-context-sld1999-neutral-yields",
      "source": "phys:sld1999-neutral-context",
      "target": "phys:sld1999-neutral-yields",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The acquisition, decay-channel selection and corrections specify which inclusive yields are reported.",
      "claimIds": [
        "M-phys-sld1999-neutral-yields"
      ],
      "contextIds": [
        "sld1999-neutral-acquisition"
      ]
    },
    {
      "id": "physics:hadron-production-yield-sld1999-neutral-yields",
      "source": "phys:hadron-production-yield",
      "target": "phys:sld1999-neutral-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The density is a species multiplicity per event and per xp interval, not a probability of stable formation.",
      "claimIds": [
        "M-phys-sld1999-neutral-yields"
      ],
      "contextIds": [
        "sld1999-neutral-acquisition"
      ]
    },
    {
      "id": "physics:sld1999-neutral-yields-sld1999-neutral-totals",
      "source": "phys:sld1999-neutral-yields",
      "target": "phys:sld1999-neutral-totals",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The full-range totals reuse the same measured-range spectra; they are not an independent acquisition.",
      "claimIds": [
        "M-phys-sld1999-neutral-totals"
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:sld1999-extrapolation-context-sld1999-neutral-totals",
      "source": "phys:sld1999-extrapolation-context",
      "target": "phys:sld1999-neutral-totals",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The unmeasured momentum region requires the source-specific generator acceptance and its assigned extrapolation error.",
      "claimIds": [
        "M-phys-sld1999-neutral-totals"
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:qcd-sld1999-neutral-totals",
      "source": "phys:qcd",
      "target": "phys:sld1999-neutral-totals",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reused QCD field specification supplies theoretical context for the fragmentation generators; it does not uniquely derive these extrapolated totals or a microscopic formation path.",
      "claimIds": [
        "M-phys-sld1999-neutral-totals"
      ],
      "contextIds": [
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:hadron-production-yield-hadron-production-arithmetic",
      "source": "phys:hadron-production-yield",
      "target": "phys:hadron-production-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Integrate a density with its bin widths and preserve the event normalization.",
      "claimIds": [
        "M-phys-hadron-production-arithmetic"
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    },
    {
      "id": "physics:sld1999-neutral-yields-hadron-production-arithmetic",
      "source": "phys:sld1999-neutral-yields",
      "target": "phys:hadron-production-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported spectra and measured-range integrals are arithmetic inputs and comparisons, not remeasured outputs.",
      "claimIds": [
        "M-phys-hadron-production-arithmetic"
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    },
    {
      "id": "physics:sld1999-neutral-totals-hadron-production-arithmetic",
      "source": "phys:sld1999-neutral-totals",
      "target": "phys:hadron-production-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported extrapolated totals are inputs to a rounded observed/total diagnostic, not outputs of a rerun generator.",
      "claimIds": [
        "M-phys-hadron-production-arithmetic"
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    },
    {
      "id": "physics:hadron-production-replay-context-hadron-production-arithmetic",
      "source": "phys:hadron-production-replay-context",
      "target": "phys:hadron-production-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite checker establishes displayed arithmetic and synthetic identities only.",
      "claimIds": [
        "M-phys-hadron-production-arithmetic"
      ],
      "contextIds": [
        "hadron-production-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:hadron-production-yield",
      "role": "definition",
      "denotes": "Define xp=2p/Ecm and the inclusive differential multiplicity (1/N)dn/dxp per hadronic Z0 decay. Integrating a differential multiplicity over xp gives a mean count, which may exceed one; it is not an event probability.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-hadron-production-yield"
      ]
    },
    {
      "nodeId": "phys:sld1999-neutral-context",
      "role": "experimental-context",
      "denotes": "SLD uses approximately 150000 hadronic events acquired in 1993-1995. The inclusive event selection retains 90213 events; CRID analyses additionally require detector readiness, leaving 79711. K0S and Lambda use displaced charged vertices; K*0 and phi use charged-pair mass fits with kaon identification. The event denominator is corrected for trigger and selection efficiency.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sld1999-neutral-context"
      ]
    },
    {
      "nodeId": "phys:sld1999-extrapolation-context",
      "role": "model-context",
      "denotes": "The same measured spectra are integrated with correlated systematic errors, then extrapolated over unmeasured xp using the mean accepted fraction from three specified fragmentation generators. The assigned absolute accepted-fraction uncertainty is 0.01 for K0 and Lambda and 0.015 for K*0 and phi.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sld1999-extrapolation-context"
      ]
    },
    {
      "nodeId": "phys:hadron-production-replay-context",
      "role": "model-context",
      "denotes": "Check the local transcription of 44 neutral-hadron bins, integrals of the displayed densities, coherent display-rounding bounds, and synthetic branching/efficiency and shared-normalization identities.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-hadron-production-replay-context"
      ]
    },
    {
      "nodeId": "phys:sld1999-neutral-yields",
      "role": "scoped-phenomenon",
      "denotes": "Tables 6-7 report corrected differential yields in 44 bins. Measured-range integrals per hadronic Z0 decay are K0/K0bar 1.90 +/- 0.02 +/- 0.07, Lambda/Lambdabar 0.37 +/- 0.01 +/- 0.02, K*0/K*0bar 0.647 +/- 0.022 +/- 0.029 and phi 0.0985 +/- 0.0046 +/- 0.0055, with statistical then systematic errors.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sld1999-neutral-yields"
      ]
    },
    {
      "nodeId": "phys:sld1999-neutral-totals",
      "role": "scoped-phenomenon",
      "denotes": "Table 16 reports all-flavor full-range totals per hadronic Z0 decay: K0/K0bar 2.01 +/- 0.08, Lambda/Lambdabar 0.395 +/- 0.022, K*0/K*0bar 0.707 +/- 0.041 and phi 0.105 +/- 0.008. The quoted errors combine experimental and model-extrapolation contributions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sld1999-neutral-totals"
      ]
    },
    {
      "nodeId": "phys:hadron-production-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The 44 displayed differential bins integrate centrally to 1.89787 K0/K0bar, 0.36454 Lambda/Lambdabar, 0.645525 K*0/K*0bar and 0.0980933 phi per decay. These do not exactly equal the displayed measured-range centers, but coherent display-rounding enclosures overlap the reported bins. Synthetic count corrections preserve the once-only branching efficiency and separate neutral-kaon factor two.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hadron-production-arithmetic"
      ]
    }
  ]
};

/** Preserve source-specific inclusive yield, decay and extrapolation boundaries. */
export function validateHadronProductionContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing hadron-production ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Hadron-production ${kind} changed ${id}.${key}: preserve inclusive yield and inference scope`);
      }
    }
  }
}
