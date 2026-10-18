import assert from "node:assert/strict";

export const NUCLEAR_STATE_REVIEW_CHECKS = new Map();
export const NUCLEAR_STATE_REVIEW_ANALYTICAL_SOURCES = new Map();
export const NUCLEAR_STATE_REVIEW_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "detmold2026-state-identification-context",
      "M-phys-detmold2026-state-identification-context",
      [
        "detmold2026-state-identification"
      ]
    ]
  ],
  "observations": [
    [
      "two-nucleon-state-identification-review",
      "C-phys-two-nucleon-state-identification-review",
      [
        "detmold2026-state-identification"
      ]
    ]
  ],
  "dependencies": [
    [
      "detmold2026-state-identification-context-two-nucleon-state-identification-review",
      "detmold2026-state-identification-context",
      "two-nucleon-state-identification-review",
      "M-phys-two-nucleon-state-identification-review",
      "interpretation-dependency"
    ],
    [
      "beane2013-two-nucleon-binding-two-nucleon-state-identification-review",
      "beane2013-two-nucleon-binding",
      "two-nucleon-state-identification-review",
      "M-phys-two-nucleon-state-identification-review",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "detmold2026-state-identification"
  ],
  "comparisonIds": [
    "detmold2026-bound-state-identification"
  ],
  "inferenceSources": [
    [
      "C-phys-two-nucleon-state-identification-review",
      [
        "detmold2026-state-bounds",
        "detmold2026-state-summary"
      ]
    ],
    [
      "M-phys-two-nucleon-state-identification-review",
      [
        "detmold2026-state-bounds",
        "detmold2026-state-summary"
      ]
    ]
  ],
  "localStudySources": [],
  "preprintStudySources": [
    [
      "detmold2026-state-identification",
      "detmold2026-state-bounds"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "detmold2026-state-bounds",
      "kind": "research-publication",
      "title": "Excited-state uncertainties in lattice-QCD calculations of multi-hadron systems",
      "authors": [
        "William Detmold",
        "Anthony V. Grebe",
        "Daniel C. Hackett",
        "Marc Illa",
        "Robert J. Perry",
        "Phiala E. Shanahan",
        "Michael L. Wagman"
      ],
      "year": 2026,
      "doi": "10.48550/arXiv.2601.22272",
      "url": "https://arxiv.org/abs/2601.22272v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-preprint-passages",
        "locators": [
          "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
          "Author v1 pages 22-25, Sections VI-VII; page 58, reference 10: ensemble, operator choices, reused gauge fields and spectral-gap inputs",
          "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
          "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
          "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation"
        ],
        "limit": "Read the listed passages of the 62-page arXiv:2601.22272v1 preprint submitted 29 January 2026; visually checked pages 22, 37, 44, 50 and 53-54. Its archival DOI is not a journal-publication claim. Metadata checked 18 October 2026 shows this version and no journal reference. The complete bound derivations, solvable-field-theory tests, all operator-by-operator tables and appendices are not reviewed. No gauge configurations, correlators, covariance, gap construction or phase analysis are independently reproduced. The companion 2601.22273v1 summarizes the same analysis."
      }
    },
    {
      "id": "detmold2026-state-summary",
      "kind": "research-publication",
      "title": "Excited-state uncertainties in lattice-QCD calculations of hadron masses and scattering phase shifts",
      "authors": [
        "William Detmold",
        "Anthony V. Grebe",
        "Daniel C. Hackett",
        "Marc Illa",
        "Robert J. Perry",
        "Phiala E. Shanahan",
        "Michael L. Wagman"
      ],
      "year": 2026,
      "doi": "10.48550/arXiv.2601.22273",
      "url": "https://arxiv.org/abs/2601.22273v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-preprint-passages",
        "locators": [
          "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions"
        ],
        "limit": "Read the five-page scientific main text of the 12-page arXiv:2601.22273v1 preprint submitted 29 January 2026 and visually checked pages 4-5. Its archival DOI is not a journal-publication claim; metadata checked 18 October 2026 shows no journal reference. References and the near-physical-mass appendix are not independently reviewed. This is a companion account of 2601.22272v1, not independent sampling or replication. No numerical replay or physical-mass conclusion is admitted."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-detmold2026-state-identification-context",
      "kind": "method",
      "statement": "The reported calculation uses a 24^3 x 48 lattice, a=0.145 fm, three degenerate clover flavors and a tree-level-improved Luscher-Weisz gauge action at pion mass approximately 800 MeV. It analyzes 16,368 configurations from 17 streams, bins 50 saved configurations for residual autocorrelation, and computes approximately 2.12 x 10^7 sparse-source propagators. A subset of gauge fields was also used in Beane2013. Zero-total-momentum dibaryon and local hexaquark operators probe I=1 A1+ and I=0 T1+ sectors. The source compares GEVP, symmetric/block Lanczos and asymmetric-correlator analyses of these related correlators.",
      "scope": "Two-nucleon state identification in the reported single-spacing, single-volume heavy-mass SU(3)-flavor calculation; literature review, not a new simulation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 22-25, Sections VI-VII; page 58, reference 10: ensemble, operator choices, reused gauge fields and spectral-gap inputs",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 2026 calculation is not a new independent repeat of all three 2013 volumes. Shared gauge fields, action and scale coexist with changed propagator sampling, operators and analysis. Configurations and propagators are not independent experimental events.",
        "Treating finite-time energy estimators as eigenvalues requires the stated N-state-saturation assumption. Symmetric variational upper bounds do not exclude missed lower levels. Residual bounds require a Hermitian transfer matrix and delimit a window containing some eigenvalue, not necessarily the ground state; for this improved action the source restricts Hermiticity to its low-energy sector, E much less than 1/a.",
        "Tighter gap bounds require the stated no-missing-states threshold and negligible thermal effects. Estimates based on noninteracting NN level counts below NDelta or DeltaDelta thresholds can fail if extra low states are present. Source errors and bound widths are distinct; one-sided upper bounds cannot supply two-sided phase errors.",
        "The selected phase comparison truncates to the lowest S wave, neglects lattice artifacts and does not determine a complete coupled-channel amplitude. Raw correlators, residual/gap calculations, operator completeness, continuum/infinite-volume extrapolations and physical-mass nuclear binding are not reproduced here."
      ],
      "contextIds": [
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "C-phys-two-nucleon-state-identification-review",
      "kind": "review-finding",
      "statement": "The paired 2026 preprints leave the nature of the lowest I=1 and I=0 two-nucleon states at these heavy-mass action parameters unresolved without additional spectral assumptions. GEVP and Lanczos agree for the same correlator data, while different operator choices under N-state saturation yield inconsistent energy estimates; the wider two-sided bounds remain compatible. The authors find no positive I=1 bound-state evidence from those bounds, and the I=0 level is too near the bound-state threshold to settle its nature from this one volume. This does not exclude a missed bound state or validate the earlier binding assignment as consensus.",
      "scope": "Two-nucleon state identification in the reported single-spacing, single-volume heavy-mass SU(3)-flavor calculation; literature review, not a new simulation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
          "role": "supports",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
          "role": "supports",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
          "role": "supports",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation",
          "role": "supports",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-summary",
          "locator": "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions",
          "role": "supports",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This record synthesizes the reported primary numerical analysis and its methodological conclusion. It is neither a new measured energy nor an independent simulation; the two preprints describe the same work and are not pooled confirmations.",
        "A negative finite-volume energy shift relative to two nucleons is not by itself an infinite-volume bound-state determination. Residual/gap intervals can contain an eigenvalue without establishing its ground-state index or excluding additional levels outside the interval. The source tables distinguish statistical confidence from assumption-dependent spectral windows.",
        "The asymmetric-correlator diagnostics show changing left/right state overlaps over accessible Euclidean times. They question the eigenstate interpretation of apparently stable estimators without proving that every such energy estimate is wrong or that a bound state cannot exist.",
        "The reported synthetic small-gap examples use chosen spectra, overlaps and a noise model related to the lattice data. Their statistically similar bound/scattering outputs illustrate an inverse-problem ambiguity; they are not additional QCD measurements or a unique reconstruction of the true spectrum.",
        "Neither the single-volume 2026 analysis nor the conditional 2013 interpretation establishes continuum physical-mass nuclear binding, all nuclei, atomic binding, a real-time formation rate or permanent matter stability."
      ],
      "contextIds": [
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "M-phys-two-nucleon-state-identification-review",
      "kind": "method",
      "statement": "Interpret the historical Beane2013 two-nucleon binding assignment alongside the later spectral-assumption analysis. The historical outcome is the comparison target, not a numerical input to the later correlator estimators. The later context supplies its own ensemble, operator and inference limits; the paired summary supplies no independent evidence.",
      "scope": "Two-nucleon state identification in the reported single-spacing, single-volume heavy-mass SU(3)-flavor calculation; literature review, not a new simulation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 22-25, Sections VI-VII; page 58, reference 10: ensemble, operator choices, reused gauge fields and spectral-gap inputs",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        },
        {
          "sourceId": "detmold2026-state-summary",
          "locator": "Author v1 pages 1-5, main text, Table I and Figures 1-2: paired summary of the same spectral-bound analysis and its assumptions",
          "role": "method",
          "note": "Supports only the stated source-specific spectral analysis or interpretation boundary; no local numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The descriptive links preserve different calculations and their shared-subset provenance. They establish neither a causal influence between publications nor numerical agreement, a refit of the 2013 dataset or a resolved bound/unbound verdict."
      ],
      "contextIds": [
        "detmold2026-state-identification"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:detmold2026-state-identification-context",
      "name": "Detmold heavy-mass state-identification analysis",
      "kind": "context",
      "description": "The reported calculation uses a 24^3 x 48 lattice, a=0.145 fm, three degenerate clover flavors and a tree-level-improved Luscher-Weisz gauge action at pion mass approximately 800 MeV. It analyzes 16,368 configurations from 17 streams, bins 50 saved configurations for residual autocorrelation, and computes approximately 2.12 x 10^7 sparse-source propagators. A subset of gauge fields was also used in Beane2013. Zero-total-momentum dibaryon and local hexaquark operators probe I=1 A1+ and I=0 T1+ sectors. The source compares GEVP, symmetric/block Lanczos and asymmetric-correlator analyses of these related correlators.",
      "claimIds": [
        "M-phys-detmold2026-state-identification-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 22-25, Sections VI-VII; page 58, reference 10: ensemble, operator choices, reused gauge fields and spectral-gap inputs"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference"
        },
        {
          "sourceId": "detmold2026-state-bounds",
          "locator": "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions"
        }
      ],
      "openObligations": [
        "The 2026 calculation is not a new independent repeat of all three 2013 volumes. Shared gauge fields, action and scale coexist with changed propagator sampling, operators and analysis. Configurations and propagators are not independent experimental events.",
        "Treating finite-time energy estimators as eigenvalues requires the stated N-state-saturation assumption. Symmetric variational upper bounds do not exclude missed lower levels. Residual bounds require a Hermitian transfer matrix and delimit a window containing some eigenvalue, not necessarily the ground state; for this improved action the source restricts Hermiticity to its low-energy sector, E much less than 1/a.",
        "Tighter gap bounds require the stated no-missing-states threshold and negligible thermal effects. Estimates based on noninteracting NN level counts below NDelta or DeltaDelta thresholds can fail if extra low states are present. Source errors and bound widths are distinct; one-sided upper bounds cannot supply two-sided phase errors.",
        "The selected phase comparison truncates to the lowest S wave, neglects lattice artifacts and does not determine a complete coupled-channel amplitude. Raw correlators, residual/gap calculations, operator completeness, continuum/infinite-volume extrapolations and physical-mass nuclear binding are not reproduced here."
      ]
    },
    {
      "id": "phys:two-nucleon-state-identification-review",
      "name": "Unresolved heavy-mass two-nucleon state identification",
      "kind": "scoped-process",
      "description": "The paired 2026 preprints leave the nature of the lowest I=1 and I=0 two-nucleon states at these heavy-mass action parameters unresolved without additional spectral assumptions. GEVP and Lanczos agree for the same correlator data, while different operator choices under N-state saturation yield inconsistent energy estimates; the wider two-sided bounds remain compatible. The authors find no positive I=1 bound-state evidence from those bounds, and the I=0 level is too near the bound-state threshold to settle its nature from this one volume. This does not exclude a missed bound state or validate the earlier binding assignment as consensus.",
      "claimIds": [
        "C-phys-two-nucleon-state-identification-review"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
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
        "This record synthesizes the reported primary numerical analysis and its methodological conclusion. It is neither a new measured energy nor an independent simulation; the two preprints describe the same work and are not pooled confirmations.",
        "A negative finite-volume energy shift relative to two nucleons is not by itself an infinite-volume bound-state determination. Residual/gap intervals can contain an eigenvalue without establishing its ground-state index or excluding additional levels outside the interval. The source tables distinguish statistical confidence from assumption-dependent spectral windows.",
        "The asymmetric-correlator diagnostics show changing left/right state overlaps over accessible Euclidean times. They question the eigenstate interpretation of apparently stable estimators without proving that every such energy estimate is wrong or that a bound state cannot exist.",
        "The reported synthetic small-gap examples use chosen spectra, overlaps and a noise model related to the lattice data. Their statistically similar bound/scattering outputs illustrate an inverse-problem ambiguity; they are not additional QCD measurements or a unique reconstruction of the true spectrum.",
        "Neither the single-volume 2026 analysis nor the conditional 2013 interpretation establishes continuum physical-mass nuclear binding, all nuclei, atomic binding, a real-time formation rate or permanent matter stability."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:detmold2026-state-identification-context-two-nucleon-state-identification-review",
      "source": "phys:detmold2026-state-identification-context",
      "target": "phys:two-nucleon-state-identification-review",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported ensemble, correlators, operator choices and spectral assumptions delimit the later state-identification conclusion.",
      "claimIds": [
        "M-phys-two-nucleon-state-identification-review"
      ],
      "contextIds": [
        "detmold2026-state-identification"
      ]
    },
    {
      "id": "physics:beane2013-two-nucleon-binding-two-nucleon-state-identification-review",
      "source": "phys:beane2013-two-nucleon-binding",
      "target": "phys:two-nucleon-state-identification-review",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The historical conditional binding assignment is the interpretation being qualified by the later review, not an independent datum or numerical input to its new correlator analysis.",
      "claimIds": [
        "M-phys-two-nucleon-state-identification-review"
      ],
      "contextIds": [
        "detmold2026-state-identification"
      ]
    }
  ],
  "studies": [
    {
      "id": "detmold2026-state-identification",
      "sourceId": "detmold2026-state-bounds",
      "studyType": "computational-analysis",
      "doi": "10.48550/arXiv.2601.22272",
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Heavy-mass three-degenerate-flavor lattice QCD; I=1 and I=0 two-nucleon sectors at one spacing and volume",
      "preparation": "The reported calculation uses a 24^3 x 48 lattice, a=0.145 fm, three degenerate clover flavors and a tree-level-improved Luscher-Weisz gauge action at pion mass approximately 800 MeV. It analyzes 16,368 configurations from 17 streams, bins 50 saved configurations for residual autocorrelation, and computes approximately 2.12 x 10^7 sparse-source propagators. A subset of gauge fields was also used in Beane2013. Zero-total-momentum dibaryon and local hexaquark operators probe I=1 A1+ and I=0 T1+ sectors. The source compares GEVP, symmetric/block Lanczos and asymmetric-correlator analyses of these related correlators.",
      "observable": "Source-reported correlator-dependent energy estimators, spectral-bound windows and state-identification diagnostics",
      "finding": "The paired 2026 preprints leave the nature of the lowest I=1 and I=0 two-nucleon states at these heavy-mass action parameters unresolved without additional spectral assumptions. GEVP and Lanczos agree for the same correlator data, while different operator choices under N-state saturation yield inconsistent energy estimates; the wider two-sided bounds remain compatible. The authors find no positive I=1 bound-state evidence from those bounds, and the I=0 level is too near the bound-state threshold to settle its nature from this one volume. This does not exclude a missed bound state or validate the earlier binding assignment as consensus.",
      "limitations": [
        "The 2026 calculation is not a new independent repeat of all three 2013 volumes. Shared gauge fields, action and scale coexist with changed propagator sampling, operators and analysis. Configurations and propagators are not independent experimental events.",
        "Treating finite-time energy estimators as eigenvalues requires the stated N-state-saturation assumption. Symmetric variational upper bounds do not exclude missed lower levels. Residual bounds require a Hermitian transfer matrix and delimit a window containing some eigenvalue, not necessarily the ground state; for this improved action the source restricts Hermiticity to its low-energy sector, E much less than 1/a.",
        "Tighter gap bounds require the stated no-missing-states threshold and negligible thermal effects. Estimates based on noninteracting NN level counts below NDelta or DeltaDelta thresholds can fail if extra low states are present. Source errors and bound widths are distinct; one-sided upper bounds cannot supply two-sided phase errors.",
        "The selected phase comparison truncates to the lowest S wave, neglects lattice artifacts and does not determine a complete coupled-channel amplitude. Raw correlators, residual/gap calculations, operator completeness, continuum/infinite-volume extrapolations and physical-mass nuclear binding are not reproduced here.",
        "This record synthesizes the reported primary numerical analysis and its methodological conclusion. It is neither a new measured energy nor an independent simulation; the two preprints describe the same work and are not pooled confirmations.",
        "A negative finite-volume energy shift relative to two nucleons is not by itself an infinite-volume bound-state determination. Residual/gap intervals can contain an eigenvalue without establishing its ground-state index or excluding additional levels outside the interval. The source tables distinguish statistical confidence from assumption-dependent spectral windows.",
        "The asymmetric-correlator diagnostics show changing left/right state overlaps over accessible Euclidean times. They question the eigenstate interpretation of apparently stable estimators without proving that every such energy estimate is wrong or that a bound state cannot exist.",
        "The reported synthetic small-gap examples use chosen spectra, overlaps and a noise model related to the lattice data. Their statistically similar bound/scattering outputs illustrate an inverse-problem ambiguity; they are not additional QCD measurements or a unique reconstruction of the true spectrum.",
        "Neither the single-volume 2026 analysis nor the conditional 2013 interpretation establishes continuum physical-mass nuclear binding, all nuclei, atomic binding, a real-time formation rate or permanent matter stability."
      ],
      "readExtent": "selected-primary-preprint-passages",
      "reviewedLocators": [
        "Author v1 pages 2-5, Sections I-II: N-state saturation, variational/residual bounds and the no-missing-states assumption",
        "Author v1 pages 22-25, Sections VI-VII; page 58, reference 10: ensemble, operator choices, reused gauge fields and spectral-gap inputs",
        "Author v1 pages 37-39, Tables III-V, Section IX and Figure 27: statistical versus spectral bounds and S-wave-truncated phase inference",
        "Author v1 pages 42-46, Sections X C-E and Figures 30-35: asymmetric correlator diagnostics and alternative gap assumptions",
        "Author v1 pages 48-54, Sections XI B-C and XII, Table VIII, Figures 37-38 and Tables IX-XIII: synthetic ambiguity examples and unresolved ground-state interpretation"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/2601.22272v1",
      "correctionCheck": "Checked the actual arXiv v1 preprint and its version metadata; no journal publication or later revision is listed. Companion 2601.22273v1 is the same analysis. Earlier papers are not retroactively corrected by this record; statistical and spectral assumptions remain explicit."
    }
  ],
  "comparisons": [
    {
      "id": "detmold2026-bound-state-identification",
      "candidate": "A low-lying heavy-mass two-nucleon bound state compatible with the earlier asymmetric-correlator interpretation.",
      "alternative": "A near-threshold scattering spectrum, or additional unresolved near-threshold states, compatible with the reviewed finite data under different spectral assumptions.",
      "sourceIds": [
        "detmold2026-state-bounds",
        "detmold2026-state-summary"
      ],
      "claimIds": [
        "M-phys-detmold2026-state-identification-context",
        "C-phys-two-nucleon-state-identification-review"
      ],
      "discriminator": "The source compares operator-dependent estimators, residual and gap windows, asymmetric state overlaps and deliberately constructed small-gap synthetic examples.",
      "result": "inconclusive",
      "limit": "This selected analysis does not choose a unique bound/unbound ground-state spectrum; the synthetic examples and companion report are not independent QCD acquisitions.",
      "assumptions": [
        "Retain the declared heavy-mass action, single spacing/volume and shared gauge-field subset.",
        "Distinguish N-state saturation from no-missing-states gap assumptions and from bounds requiring only the stated Hermiticity/thermal conditions."
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:detmold2026-state-identification-context",
      "role": "model-context",
      "denotes": "The source-reported 2026 lattice calculation and its explicit state-identification assumptions, not a local numerical replay.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-detmold2026-state-identification-context"
      ]
    },
    {
      "nodeId": "phys:two-nucleon-state-identification-review",
      "role": "scoped-phenomenon",
      "denotes": "A literature synthesis of unresolved heavy-mass bound-state identification; neither proof of binding nor proof of its absence.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-two-nucleon-state-identification-review"
      ]
    }
  ]
};

/** Preserve primary preprint ownership and the unresolved finite-spectrum interpretation. */
export function validateNuclearStateReviewContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Nuclear state review ${kind} changed ${id}: preserve preprint scope, spectral assumptions and unresolved state identity`);
    }
  }
}
