import assert from "node:assert/strict";

export const HADRON_FAMILY_CHECKS = new Map([["hadron-family-flavor-algebra", "C-phys-hadron-family-arithmetic"]]);
export const HADRON_FAMILY_ANALYTICAL_SOURCES = new Map([["C-phys-hadron-family-arithmetic", "hadron-family-verifier"]]);
export const HADRON_FAMILY_ADMISSION = {
  "definitions": [
    [
      "phys:light-flavor-su3",
      "D-phys-light-flavor-su3"
    ],
    [
      "phys:light-baryon-multiplets",
      "D-phys-light-baryon-multiplets"
    ],
    [
      "phys:baryon-octet-mass-relation",
      "D-phys-baryon-octet-mass-relation"
    ]
  ],
  "formalDependencies": [
    [
      "physics:light-flavor-su3-light-baryon-multiplets",
      [
        "phys:light-flavor-su3",
        "phys:light-baryon-multiplets"
      ]
    ],
    [
      "physics:light-baryon-multiplets-baryon-octet-mass-relation",
      [
        "phys:light-baryon-multiplets",
        "phys:baryon-octet-mass-relation"
      ]
    ]
  ],
  "contexts": [
    [
      "omega-decuplet-expectation",
      "M-phys-omega-decuplet-expectation",
      [
        "barnes1964-reconstruction"
      ]
    ],
    [
      "barnes1964-acquisition-context",
      "M-phys-barnes1964-acquisition-context",
      [
        "barnes1964-acquisition"
      ]
    ],
    [
      "barnes1964-reconstruction-context",
      "M-phys-barnes1964-reconstruction-context",
      [
        "barnes1964-reconstruction"
      ]
    ],
    [
      "hadron-family-replay-context",
      "M-phys-hadron-family-replay-context",
      [
        "hadron-family-replay"
      ]
    ]
  ],
  "observations": [
    [
      "barnes1964-tracks",
      "C-phys-barnes1964-tracks",
      [
        "barnes1964-acquisition"
      ]
    ],
    [
      "barnes1964-cascade",
      "C-phys-barnes1964-cascade",
      [
        "barnes1964-reconstruction"
      ]
    ],
    [
      "barnes1964-omega",
      "C-phys-barnes1964-omega",
      [
        "barnes1964-reconstruction"
      ]
    ],
    [
      "hadron-family-arithmetic",
      "C-phys-hadron-family-arithmetic",
      [
        "hadron-family-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "barnes1964-acquisition-context-barnes1964-tracks",
      "barnes1964-acquisition-context",
      "barnes1964-tracks",
      "M-phys-barnes1964-tracks",
      "measurement-context"
    ],
    [
      "barnes1964-tracks-barnes1964-cascade",
      "barnes1964-tracks",
      "barnes1964-cascade",
      "M-phys-barnes1964-cascade",
      "interpretation-dependency"
    ],
    [
      "barnes1964-reconstruction-context-barnes1964-cascade",
      "barnes1964-reconstruction-context",
      "barnes1964-cascade",
      "M-phys-barnes1964-cascade",
      "interpretation-dependency"
    ],
    [
      "barnes1964-tracks-barnes1964-omega",
      "barnes1964-tracks",
      "barnes1964-omega",
      "M-phys-barnes1964-omega",
      "interpretation-dependency"
    ],
    [
      "barnes1964-cascade-barnes1964-omega",
      "barnes1964-cascade",
      "barnes1964-omega",
      "M-phys-barnes1964-omega",
      "interpretation-dependency"
    ],
    [
      "barnes1964-reconstruction-context-barnes1964-omega",
      "barnes1964-reconstruction-context",
      "barnes1964-omega",
      "M-phys-barnes1964-omega",
      "interpretation-dependency"
    ],
    [
      "omega-decuplet-expectation-barnes1964-omega",
      "omega-decuplet-expectation",
      "barnes1964-omega",
      "M-phys-barnes1964-omega",
      "interpretation-dependency"
    ],
    [
      "light-flavor-su3-hadron-family-arithmetic",
      "light-flavor-su3",
      "hadron-family-arithmetic",
      "M-phys-hadron-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "light-baryon-multiplets-hadron-family-arithmetic",
      "light-baryon-multiplets",
      "hadron-family-arithmetic",
      "M-phys-hadron-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "baryon-octet-mass-relation-hadron-family-arithmetic",
      "baryon-octet-mass-relation",
      "hadron-family-arithmetic",
      "M-phys-hadron-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "omega-decuplet-expectation-hadron-family-arithmetic",
      "omega-decuplet-expectation",
      "hadron-family-arithmetic",
      "M-phys-hadron-family-arithmetic",
      "interpretation-dependency"
    ],
    [
      "hadron-family-replay-context-hadron-family-arithmetic",
      "hadron-family-replay-context",
      "hadron-family-arithmetic",
      "M-phys-hadron-family-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "barnes1964-acquisition",
    "barnes1964-reconstruction",
    "hadron-family-replay"
  ],
  "comparisonIds": [
    "barnes1964-event-identification",
    "hadron-family-replay"
  ],
  "inferenceSources": [
    [
      "M-phys-hadron-family-replay-context",
      [
        "pdg2025-quark-model",
        "gellmann1962-symmetries",
        "barnes1964-omega",
        "hadron-family-verifier"
      ]
    ],
    [
      "C-phys-hadron-family-arithmetic",
      [
        "pdg2025-quark-model",
        "gellmann1962-symmetries",
        "barnes1964-omega",
        "hadron-family-verifier"
      ]
    ],
    [
      "M-phys-hadron-family-arithmetic",
      [
        "pdg2025-quark-model",
        "gellmann1962-symmetries",
        "barnes1964-omega",
        "hadron-family-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "hadron-family-replay",
      "hadron-family-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "gellmann1962-symmetries",
      "kind": "research-publication",
      "title": "Symmetries of Baryons and Mesons",
      "authors": [
        "Murray Gell-Mann"
      ],
      "year": 1962,
      "doi": "10.1103/PhysRev.125.1067",
      "url": "https://authors.library.caltech.edu/records/g1wq6-g9r84/files/GELpr63.pdf?download=1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-theoretical-passages",
        "locators": [
          "Publisher scan pages 1077-1079, Sections VI-VIII: unitary-symmetry limit, meson versus baryon assignments and abstract eightfold-way classification",
          "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation"
        ],
        "limit": "Only printed pages 1077-1080 (PDF 11-14) of the Caltech-hosted publisher scan were visually read, with the institutional abstract and metadata. Equation 8.1 supplies the first-order octet mass relation; the rest of the current-algebra derivation and the historical meson predictions are not admitted. This pre-QCD source is not a color gauge theory, a modern spectroscopy fit or a real-time formation model."
      }
    },
    {
      "id": "barnes1964-omega",
      "kind": "research-publication",
      "title": "Observation of a Hyperon with Strangeness Minus Three",
      "authors": [
        "V. E. Barnes",
        "P. L. Connolly",
        "D. J. Crennell",
        "B. B. Culwick",
        "W. C. Delaney",
        "W. B. Fowler",
        "P. E. Hagerty",
        "E. L. Hart",
        "N. Horwitz",
        "P. V. C. Hough",
        "J. E. Jensen",
        "J. K. Kopp",
        "K. W. Lai",
        "J. Leitner",
        "J. L. Lloyd",
        "G. W. London",
        "T. W. Morris",
        "Y. Oren",
        "R. B. Palmer",
        "A. G. Prodell",
        "D. Radojičić",
        "D. C. Rahm",
        "C. R. Richardson",
        "N. P. Samios",
        "J. R. Sanford",
        "R. P. Shutt",
        "J. R. Smith",
        "D. L. Stonehill",
        "R. C. Strand",
        "A. M. Thorndike",
        "M. S. Webster",
        "W. J. Willis",
        "S. S. Yamamoto"
      ],
      "year": 1964,
      "doi": "10.1103/PhysRevLett.12.204",
      "url": "https://www.osti.gov/servlets/purl/12491965",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "primary-archival-report-with-publisher-metadata",
        "locators": [
          "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures",
          "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics"
        ],
        "limit": "The BNL 7802 submitted report has fourteen PDF pages. Narrative PDF pages 4-8 and references on 12 were read; pages 4-7, Tables I-II on 9-10 and Figures 1-2 on 13-14 were visually checked. The cover identifies the report; publisher metadata supplies the journal date (24 February 1964), DOI and author list. The cover spells N. Horowitz while publisher metadata uses N. Horwitz. Publisher article bytes were not read, so locators refer to this report rather than journal pages. No complete tracking covariance, raw scan analysis or later precision measurements were reviewed."
      }
    },
    {
      "id": "hadron-family-verifier",
      "kind": "executable-check",
      "title": "Finite light-flavor family and supplied mass-relation verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-hadron-family.py",
      "sha256": "7beb6c6ad51f2d0718c6cbde5a674716307516d00eb3d5c94e05647d96ca4859",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing"
        ],
        "limit": "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced. Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-light-flavor-su3",
      "kind": "review-finding",
      "statement": "Use the approximate light-flavor SU(3) classification of u,d,s labels, distinct from local color SU(3). In this restricted sector Y=B+S and Q/e=I3+Y/2. The symmetry limit groups states with related quantum numbers; observed mass splittings do not disappear by a change of labels.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan pages 1077-1079, Sections VI-VIII: unitary-symmetry limit, meson versus baryon assignments and abstract eightfold-way classification",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Approximate light-flavor SU(3) acts on u,d,s labels and is distinct from the local color SU(3) gauge symmetry. Y=B+S and Q/e=I3+Y/2 here exclude heavy-flavor terms. Representation weights and net-flavor labels are not counts of freely observed quarks or complete Fock-state occupations.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "D-phys-light-baryon-multiplets",
      "kind": "review-finding",
      "statement": "For the stated spatially symmetric ground-state three-quark model, the spin-flavor 56 contains the J^P=1/2+ octet N,Lambda,Sigma,Xi and J^P=3/2+ decuplet Delta,Sigma*,Xi*,Omega. Their isospin rows contain 2+1+3+2 and 4+3+2+1 weights. Lambda and Sigma0 share (I3,Y)=(0,0) but have different isospin.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Approximate light-flavor SU(3) acts on u,d,s labels and is distinct from the local color SU(3) gauge symmetry. Y=B+S and Q/e=I3+Y/2 here exclude heavy-flavor terms. Representation weights and net-flavor labels are not counts of freely observed quarks or complete Fock-state occupations.",
        "In the stated ground-state three-quark model the antisymmetric color factor accompanies a symmetric space-spin-flavor factor. Flavor 3 tensor 3 tensor 3 contains 10,8,8,1, but it does not assign four independent ground-state families: the spatially symmetric ground-state spin-flavor 56 contains the J^P=1/2+ octet and J^P=3/2+ decuplet. A flavor-singlet ground state is excluded under these assumptions; excited or exotic assignments are outside scope.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "D-phys-baryon-octet-mass-relation",
      "kind": "review-finding",
      "statement": "Gell-Mann Equation 8.1 states (m_N+m_Xi)/2=(3*m_Lambda+m_Sigma)/4 to first order in unitary-symmetry violation for the baryon octet with common spin and parity. This is a supplied approximate mass relation, not exact equality of all measured masses.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "M-phys-omega-decuplet-expectation",
      "kind": "method",
      "statement": "Keep the report's adopted missing decuplet slot separate from the selected event: I=0, Q=-1, S=-3, predicted J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 compares historical isomultiplet centers 1238,1385,1532 MeV/c^2 with that expectation.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "M-phys-barnes1964-acquisition-context",
      "kind": "method",
      "statement": "Expose the BNL 80-inch hydrogen bubble chamber to a mass-separated 5 GeV/c K- beam. The report describes about 100000 pictures and roughly 10^6 feet of kaon tracks, partially analyzed for characteristic Omega decays; this admission concerns its one selected event.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range.",
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation."
      ],
      "contextIds": [
        "barnes1964-acquisition"
      ]
    },
    {
      "id": "C-phys-barnes1964-tracks",
      "kind": "review-finding",
      "statement": "The selected event has charged-track directions and momenta listed in Table I, gap-density particle-identification information, displaced vertices and two photon conversions shown in Figure 2. These measured inputs precede the neutral cascade and parent-mass interpretation.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range.",
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation."
      ],
      "contextIds": [
        "barnes1964-acquisition"
      ]
    },
    {
      "id": "M-phys-barnes1964-tracks",
      "kind": "method",
      "statement": "Use the reported track, gap-density and vertex information as the observed input, preserving the distinction between measurements and the particle assignments drawn in the event diagram.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range.",
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation."
      ],
      "contextIds": [
        "barnes1964-acquisition"
      ]
    },
    {
      "id": "M-phys-barnes1964-reconstruction-context",
      "kind": "method",
      "statement": "Associate the fitted Lambda, two converted photons and the displaced neutral trajectory under Equation 1; use particle-mass hypotheses, transverse balance, production missing mass and alternative-channel tests to interpret the same event.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation.",
        "The cascade hypothesis is K-+p -> Omega-+K++K0, followed by Omega- -> Xi0+pi-, Xi0 -> Lambda0+pi0, Lambda0 -> p+pi- and pi0 -> gamma+gamma with photon conversions. The Lambda fit, photon pairing, transverse balance and missing-mass checks share this event; they are not independent replications.",
        "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
        "The reported 0.7e-10 s is the reconstructed proper decay time of this event, not an ensemble mean lifetime or a lifetime fit. Neither a branching fraction nor all-channel stability follows.",
        "The report gives 1686 +/- 12 MeV/c^2 while explicitly deferring a detailed mass discussion until more events and better-understood systematic errors. No new confidence-level meaning, independent significance, modern mass combination or numerical reconstruction of that uncertainty is assigned."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "C-phys-barnes1964-cascade",
      "kind": "review-finding",
      "statement": "Under the stated assignments the report finds a Lambda-compatible p+pi- mass of 1116 +/- 2 MeV/c^2, a two-photon mass of 135.1 +/- 1.5 MeV/c^2, and a neutral Xi-compatible mass of 1316 +/- 4 MeV/c^2. Shared vertex geometry and transverse balance support the proposed Xi0+pi- parent decay.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation.",
        "The cascade hypothesis is K-+p -> Omega-+K++K0, followed by Omega- -> Xi0+pi-, Xi0 -> Lambda0+pi0, Lambda0 -> p+pi- and pi0 -> gamma+gamma with photon conversions. The Lambda fit, photon pairing, transverse balance and missing-mass checks share this event; they are not independent replications.",
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "M-phys-barnes1964-cascade",
      "kind": "method",
      "statement": "Condition the neutral cascade on the proton/pion assignments, photon pairing, Lambda fit and common-vertex geometry; these intermediate checks share tracks and fitted inputs.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation.",
        "The cascade hypothesis is K-+p -> Omega-+K++K0, followed by Omega- -> Xi0+pi-, Xi0 -> Lambda0+pi0, Lambda0 -> p+pi- and pi0 -> gamma+gamma with photon conversions. The Lambda fit, photon pairing, transverse balance and missing-mass checks share this event; they are not independent replications.",
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "C-phys-barnes1964-omega",
      "kind": "review-finding",
      "statement": "The report conditionally identifies particle 3 with Omega- from Q=-1, inferred S=-3 and reconstructed mass 1686 +/- 12 MeV/c^2, with a production missing mass of 500 +/- 25 MeV/c^2 compatible with K0. The quoted event proper decay time is 0.7e-10 s; no spin/parity or ensemble-lifetime determination is supplied.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "The reported 0.7e-10 s is the reconstructed proper decay time of this event, not an ensemble mean lifetime or a lifetime fit. Neither a branching fraction nor all-channel stability follows.",
        "The report gives 1686 +/- 12 MeV/c^2 while explicitly deferring a detailed mass discussion until more events and better-understood systematic errors. No new confidence-level meaning, independent significance, modern mass combination or numerical reconstruction of that uncertainty is assigned.",
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "M-phys-barnes1964-omega",
      "kind": "method",
      "statement": "Combine the same-event cascade and parent kinematics with the Delta S=1 weak-decay assumption, alternative-channel exclusions and the separate decuplet expectation. Retain the authors' deferred systematic-mass assessment.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "The reported 0.7e-10 s is the reconstructed proper decay time of this event, not an ensemble mean lifetime or a lifetime fit. Neither a branching fraction nor all-channel stability follows.",
        "The report gives 1686 +/- 12 MeV/c^2 while explicitly deferring a detailed mass discussion until more events and better-understood systematic errors. No new confidence-level meaning, independent significance, modern mass combination or numerical reconstruction of that uncertainty is assigned.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "M-phys-hadron-family-replay-context",
      "kind": "method",
      "statement": "Enumerate supplied light-baryon isospin/hypercharge weights and charges, compare degree-three symmetric flavor monomial weights, evaluate three synthetic positive-mass examples of the supplied octet relation, and compare the historical Figure 1 mass spacings.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "hadron-family-verifier",
          "locator": "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "C-phys-hadron-family-arithmetic",
      "kind": "review-finding",
      "statement": "The supplied octet has eight states at seven distinct (I3,Y) positions; the decuplet has ten weights, with Omega at I=I3=0,Y=-2,S=-3,Q=-1. Ten symmetric flavor monomials match the decuplet weights, and nine synthetic mass-relation checks pass. The printed centers give two 147 MeV spacings and continuation 1679 MeV, compared only with the approximate 1680 MeV expectation.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "hadron-family-verifier",
          "locator": "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing",
          "role": "supports",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [
        "hadron-family-flavor-algebra"
      ],
      "limitations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "M-phys-hadron-family-arithmetic",
      "kind": "method",
      "statement": "Check exact rational weight/charge bookkeeping and the algebra of the supplied relation using labeled synthetic masses. Use the historical centers only for a finite spacing calculation; do not substitute that calculation for a representation-theory proof, mass fit or discovery reconstruction.",
      "scope": "Selected light-flavor model conventions, the first-order baryon-octet relation and the Barnes1964 reported Omega event; each calculation and inference retains its declared inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        },
        {
          "sourceId": "hadron-family-verifier",
          "locator": "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing",
          "role": "method",
          "note": "Supports only the declared flavor convention, historical report stage or finite calculation; no independent dynamics or full experimental replay is implied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:light-flavor-su3",
      "name": "Light-flavor SU(3) convention",
      "kind": "definition",
      "description": "Use the approximate light-flavor SU(3) classification of u,d,s labels, distinct from local color SU(3). In this restricted sector Y=B+S and Q/e=I3+Y/2. The symmetry limit groups states with related quantum numbers; observed mass splittings do not disappear by a change of labels.",
      "claimIds": [
        "D-phys-light-flavor-su3"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions"
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan pages 1077-1079, Sections VI-VIII: unitary-symmetry limit, meson versus baryon assignments and abstract eightfold-way classification"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:light-baryon-multiplets",
      "name": "Ground-state light-baryon multiplets",
      "kind": "definition",
      "description": "For the stated spatially symmetric ground-state three-quark model, the spin-flavor 56 contains the J^P=1/2+ octet N,Lambda,Sigma,Xi and J^P=3/2+ decuplet Delta,Sigma*,Xi*,Omega. Their isospin rows contain 2+1+3+2 and 4+3+2+1 weights. Lambda and Sigma0 share (I3,Y)=(0,0) but have different isospin.",
      "claimIds": [
        "D-phys-light-baryon-multiplets"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:baryon-octet-mass-relation",
      "name": "First-order baryon-octet mass relation",
      "kind": "definition",
      "description": "Gell-Mann Equation 8.1 states (m_N+m_Xi)/2=(3*m_Lambda+m_Sigma)/4 to first order in unitary-symmetry violation for the baryon octet with common spin and parity. This is a supplied approximate mass relation, not exact equality of all measured masses.",
      "claimIds": [
        "D-phys-baryon-octet-mass-relation"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:omega-decuplet-expectation",
      "name": "Historical Omega decuplet expectation",
      "kind": "context",
      "description": "Keep the report's adopted missing decuplet slot separate from the selected event: I=0, Q=-1, S=-3, predicted J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 compares historical isomultiplet centers 1238,1385,1532 MeV/c^2 with that expectation.",
      "claimIds": [
        "M-phys-omega-decuplet-expectation"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:barnes1964-acquisition-context",
      "name": "Barnes kaon bubble-chamber acquisition",
      "kind": "context",
      "description": "Expose the BNL 80-inch hydrogen bubble chamber to a mass-separated 5 GeV/c K- beam. The report describes about 100000 pictures and roughly 10^6 feet of kaon tracks, partially analyzed for characteristic Omega decays; this admission concerns its one selected event.",
      "claimIds": [
        "M-phys-barnes1964-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:barnes1964-tracks",
      "name": "Barnes selected event track observations",
      "kind": "scoped-process",
      "description": "The selected event has charged-track directions and momenta listed in Table I, gap-density particle-identification information, displaced vertices and two photon conversions shown in Figure 2. These measured inputs precede the neutral cascade and parent-mass interpretation.",
      "claimIds": [
        "C-phys-barnes1964-tracks"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:barnes1964-reconstruction-context",
      "name": "Barnes cascade reconstruction assumptions",
      "kind": "context",
      "description": "Associate the fitted Lambda, two converted photons and the displaced neutral trajectory under Equation 1; use particle-mass hypotheses, transverse balance, production missing mass and alternative-channel tests to interpret the same event.",
      "claimIds": [
        "M-phys-barnes1964-reconstruction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:barnes1964-cascade",
      "name": "Barnes reconstructed neutral cascade",
      "kind": "scoped-process",
      "description": "Under the stated assignments the report finds a Lambda-compatible p+pi- mass of 1116 +/- 2 MeV/c^2, a two-photon mass of 135.1 +/- 1.5 MeV/c^2, and a neutral Xi-compatible mass of 1316 +/- 4 MeV/c^2. Shared vertex geometry and transverse balance support the proposed Xi0+pi- parent decay.",
      "claimIds": [
        "C-phys-barnes1964-cascade"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:barnes1964-omega",
      "name": "Barnes conditional Omega identification",
      "kind": "scoped-process",
      "description": "The report conditionally identifies particle 3 with Omega- from Q=-1, inferred S=-3 and reconstructed mass 1686 +/- 12 MeV/c^2, with a production missing mass of 500 +/- 25 MeV/c^2 compatible with K0. The quoted event proper decay time is 0.7e-10 s; no spin/parity or ensemble-lifetime determination is supplied.",
      "claimIds": [
        "C-phys-barnes1964-omega"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass"
        }
      ],
      "openObligations": [
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ]
    },
    {
      "id": "phys:hadron-family-replay-context",
      "name": "Light-flavor and mass-relation calculation",
      "kind": "context",
      "description": "Enumerate supplied light-baryon isospin/hypercharge weights and charges, compare degree-three symmetric flavor monomial weights, evaluate three synthetic positive-mass examples of the supplied octet relation, and compare the historical Figure 1 mass spacings.",
      "claimIds": [
        "M-phys-hadron-family-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model"
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass"
        },
        {
          "sourceId": "hadron-family-verifier",
          "locator": "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing"
        }
      ],
      "openObligations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced."
      ]
    },
    {
      "id": "phys:hadron-family-arithmetic",
      "name": "Supplied flavor weights and mass-spacing algebra",
      "kind": "scoped-process",
      "description": "The supplied octet has eight states at seven distinct (I3,Y) positions; the decuplet has ten weights, with Omega at I=I3=0,Y=-2,S=-3,Q=-1. Ten symmetric flavor monomials match the decuplet weights, and nine synthetic mass-relation checks pass. The printed centers give two 147 MeV spacings and continuation 1679 MeV, compared only with the approximate 1680 MeV expectation.",
      "claimIds": [
        "C-phys-hadron-family-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 1-3, Sections 15.1-15.2 and Table 15.1: model scope, additive baryon number and flavor charges"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, page 13, Section 15.5.1 and Equations 15.25-15.28: distinct color and approximate light-flavor representations, permutation symmetry and spin-flavor restrictions"
        },
        {
          "sourceId": "pdg2025-quark-model",
          "locator": "2025 Quark Model review, pages 14-15, Equation 15.29a and ground-state rows of Table 15.6: spin-one-half octet and spin-three-halves decuplet within the spatially symmetric ground-state model"
        },
        {
          "sourceId": "gellmann1962-symmetries",
          "locator": "Publisher scan page 1080, Section VIII and Equation 8.1: baryon octet, common spin/parity and mass relation to first order in unitary-symmetry violation"
        },
        {
          "sourceId": "barnes1964-omega",
          "locator": "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass"
        },
        {
          "sourceId": "hadron-family-verifier",
          "locator": "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing"
        }
      ],
      "openObligations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:light-flavor-su3-light-baryon-multiplets",
      "source": "phys:light-flavor-su3",
      "target": "phys:light-baryon-multiplets",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The light-flavor convention defines the quantum-number axes for the selected baryon multiplets; color singletness is a separate condition.",
      "claimIds": [
        "D-phys-light-flavor-su3",
        "D-phys-light-baryon-multiplets"
      ]
    },
    {
      "id": "physics:light-baryon-multiplets-baryon-octet-mass-relation",
      "source": "phys:light-baryon-multiplets",
      "target": "phys:baryon-octet-mass-relation",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The supplied first-order relation applies to the declared same-spin/parity octet; it is not a cross-multiplet or exact all-hadron mass law.",
      "claimIds": [
        "D-phys-light-baryon-multiplets",
        "D-phys-baryon-octet-mass-relation"
      ]
    },
    {
      "id": "physics:barnes1964-acquisition-context-barnes1964-tracks",
      "source": "phys:barnes1964-acquisition-context",
      "target": "phys:barnes1964-tracks",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The chamber exposure and selected event delimit the measured tracks and vertices.",
      "claimIds": [
        "M-phys-barnes1964-tracks"
      ],
      "contextIds": [
        "barnes1964-acquisition"
      ]
    },
    {
      "id": "physics:barnes1964-tracks-barnes1964-cascade",
      "source": "phys:barnes1964-tracks",
      "target": "phys:barnes1964-cascade",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The neutral cascade reuses these tracks and conversions under explicit particle hypotheses.",
      "claimIds": [
        "M-phys-barnes1964-cascade"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:barnes1964-reconstruction-context-barnes1964-cascade",
      "source": "phys:barnes1964-reconstruction-context",
      "target": "phys:barnes1964-cascade",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Particle assignments, the Lambda fit and common-vertex geometry condition the reconstructed cascade.",
      "claimIds": [
        "M-phys-barnes1964-cascade"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:barnes1964-tracks-barnes1964-omega",
      "source": "phys:barnes1964-tracks",
      "target": "phys:barnes1964-omega",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same event supplies the charged parent/daughter geometry, kaon identification and production missing-mass check.",
      "claimIds": [
        "M-phys-barnes1964-omega"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:barnes1964-cascade-barnes1964-omega",
      "source": "phys:barnes1964-cascade",
      "target": "phys:barnes1964-omega",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reconstructed Xi0 decay channel supplies a shared input to the parent mass and strangeness interpretation.",
      "claimIds": [
        "M-phys-barnes1964-omega"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:barnes1964-reconstruction-context-barnes1964-omega",
      "source": "phys:barnes1964-reconstruction-context",
      "target": "phys:barnes1964-omega",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The weak-decay assumption and alternative-channel reasoning delimit the reported identification.",
      "claimIds": [
        "M-phys-barnes1964-omega"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:omega-decuplet-expectation-barnes1964-omega",
      "source": "phys:omega-decuplet-expectation",
      "target": "phys:barnes1964-omega",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separately stated decuplet expectation is a comparison hypothesis for the reconstructed charge, strangeness and mass; it does not turn predicted spin into measured spin.",
      "claimIds": [
        "M-phys-barnes1964-omega"
      ],
      "contextIds": [
        "barnes1964-reconstruction"
      ]
    },
    {
      "id": "physics:light-flavor-su3-hadron-family-arithmetic",
      "source": "phys:light-flavor-su3",
      "target": "phys:hadron-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared light-flavor labels fix the exact electric-charge convention for the supplied weights.",
      "claimIds": [
        "M-phys-hadron-family-arithmetic"
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "physics:light-baryon-multiplets-hadron-family-arithmetic",
      "source": "phys:light-baryon-multiplets",
      "target": "phys:hadron-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The supplied multiplet rows are inputs to finite weight enumeration, not locally established spectroscopy.",
      "claimIds": [
        "M-phys-hadron-family-arithmetic"
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "physics:baryon-octet-mass-relation-hadron-family-arithmetic",
      "source": "phys:baryon-octet-mass-relation",
      "target": "phys:hadron-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The first-order relation supplies the linear formula tested with explicitly synthetic masses; no measured equality is inferred.",
      "claimIds": [
        "M-phys-hadron-family-arithmetic"
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "physics:omega-decuplet-expectation-hadron-family-arithmetic",
      "source": "phys:omega-decuplet-expectation",
      "target": "phys:hadron-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The historical printed mass centers and approximate expectation supply the bounded spacing comparison, independently of the discovery-event mass fit.",
      "claimIds": [
        "M-phys-hadron-family-arithmetic"
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    },
    {
      "id": "physics:hadron-family-replay-context-hadron-family-arithmetic",
      "source": "phys:hadron-family-replay-context",
      "target": "phys:hadron-family-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The local procedure bounds the result to exact bookkeeping and supplied-formula arithmetic.",
      "claimIds": [
        "M-phys-hadron-family-arithmetic"
      ],
      "contextIds": [
        "hadron-family-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "barnes1964-acquisition",
      "sourceId": "barnes1964-omega",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.12.204",
      "journal": "Physical Review Letters",
      "volume": "12",
      "issue": "8",
      "pages": "204-206",
      "system": "BNL negative-kaon hydrogen bubble-chamber event",
      "preparation": "Expose the BNL 80-inch hydrogen bubble chamber to a mass-separated 5 GeV/c K- beam. The report describes about 100000 pictures and roughly 10^6 feet of kaon tracks, partially analyzed for characteristic Omega decays; this admission concerns its one selected event.",
      "observable": "Selected charged-track directions, momenta, ionization proxies and displaced-vertex geometry.",
      "finding": "The selected event has charged-track directions and momenta listed in Table I, gap-density particle-identification information, displaced vertices and two photon conversions shown in Figure 2. These measured inputs precede the neutral cascade and parent-mass interpretation.",
      "limitations": [
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range.",
        "Table I supplies printed track angles and momenta but no full tracking covariance or complete digitized event. Track 3 has no measured momentum entry there. Particle assignments and neutral trajectories require the declared reconstruction; a plotted line diagram is already an interpreted representation."
      ],
      "readExtent": "primary-archival-report-with-publisher-metadata",
      "reviewedLocators": [
        "BNL 7802 archival report PDF page 4 (report page 2): 5 GeV/c negative-kaon exposure, 80-inch hydrogen bubble chamber and partially analyzed pictures",
        "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.12.204",
      "correctionCheck": "Publisher identity checked and archival report read; no publisher-byte equivalence, exhaustive subsequent correction search or modern precision comparison is claimed."
    },
    {
      "id": "barnes1964-reconstruction",
      "sourceId": "barnes1964-omega",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.12.204",
      "journal": "Physical Review Letters",
      "volume": "12",
      "issue": "8",
      "pages": "204-206",
      "system": "BNL negative-kaon hydrogen bubble-chamber event",
      "preparation": "Associate the fitted Lambda, two converted photons and the displaced neutral trajectory under Equation 1; use particle-mass hypotheses, transverse balance, production missing mass and alternative-channel tests to interpret the same event.",
      "observable": "Same-event cascade, parent mass/strangeness inference and conditional comparison with the adopted decuplet expectation.",
      "finding": "The report conditionally identifies particle 3 with Omega- from Q=-1, inferred S=-3 and reconstructed mass 1686 +/- 12 MeV/c^2, with a production missing mass of 500 +/- 25 MeV/c^2 compatible with K0. The quoted event proper decay time is 0.7e-10 s; no spin/parity or ensemble-lifetime determination is supplied.",
      "limitations": [
        "The cascade hypothesis is K-+p -> Omega-+K++K0, followed by Omega- -> Xi0+pi-, Xi0 -> Lambda0+pi0, Lambda0 -> p+pi- and pi0 -> gamma+gamma with photon conversions. The Lambda fit, photon pairing, transverse balance and missing-mass checks share this event; they are not independent replications.",
        "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "The reported 0.7e-10 s is the reconstructed proper decay time of this event, not an ensemble mean lifetime or a lifetime fit. Neither a branching fraction nor all-channel stability follows.",
        "The report gives 1686 +/- 12 MeV/c^2 while explicitly deferring a detailed mass discussion until more events and better-understood systematic errors. No new confidence-level meaning, independent significance, modern mass combination or numerical reconstruction of that uncertainty is assigned.",
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range."
      ],
      "readExtent": "primary-archival-report-with-publisher-metadata",
      "reviewedLocators": [
        "BNL 7802 archival report PDF pages 5-6 (report pages 3-4), page 9 Table I and page 14 Figure 2: measured track directions/momenta, gap densities, converted photons and event geometry",
        "BNL 7802 archival report PDF pages 5-7 (report pages 3-5), Equation 1 and page 10 Table II: decay-chain reconstruction, particle hypotheses, alternative channels and inferred proper decay time",
        "BNL 7802 archival report PDF pages 6-7 (report pages 4-5): conditional charge/strangeness/mass identification, missing-mass check and deferred mass systematics",
        "BNL 7802 archival report PDF page 4 (report page 2) and page 13 Figure 1: adopted decuplet hypothesis, predicted quantum numbers and approximate mass"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.12.204",
      "correctionCheck": "Publisher identity checked and archival report read; no publisher-byte equivalence, exhaustive subsequent correction search or modern precision comparison is claimed."
    },
    {
      "id": "hadron-family-replay",
      "sourceId": "hadron-family-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite light-flavor calculation",
      "preparation": "Enumerate supplied light-baryon isospin/hypercharge weights and charges, compare degree-three symmetric flavor monomial weights, evaluate three synthetic positive-mass examples of the supplied octet relation, and compare the historical Figure 1 mass spacings.",
      "observable": "Supplied light-flavor weights, synthetic octet-relation identities and printed historical spacings.",
      "finding": "The supplied octet has eight states at seven distinct (I3,Y) positions; the decuplet has ten weights, with Omega at I=I3=0,Y=-2,S=-3,Q=-1. Ten symmetric flavor monomials match the decuplet weights, and nine synthetic mass-relation checks pass. The printed centers give two 147 MeV spacings and continuation 1679 MeV, compared only with the approximate 1680 MeV expectation.",
      "limitations": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): supplied light-baryon weight and charge enumeration, symmetric flavor monomial weights, synthetic octet-relation identities and historical Figure 1 mass spacing"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "A local calculation without publication metadata."
    }
  ],
  "comparisons": [
    {
      "id": "barnes1964-event-identification",
      "candidate": "The selected event supports the reported conditional Omega identification through charge, cascade kinematics, inferred strangeness and approximate mass agreement.",
      "alternative": "The event directly measures spin/parity, a population lifetime, the entire multiplet or a unique formation mechanism.",
      "discriminator": "Keep observed tracks, dependent cascade reconstruction, declared weak-decay assumptions and the separate family expectation inspectable.",
      "result": "conditional-support",
      "limit": "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
      "assumptions": [
        "Strangeness -3 is inferred using the reconstructed Xi0 channel, the weak-decay Delta S=1 assumption and competing-channel reasoning. Charge and mass support a conditional Omega identification; the one-event evidence does not measure J^P=3/2+ or establish the full decuplet dynamics.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "The reported 0.7e-10 s is the reconstructed proper decay time of this event, not an ensemble mean lifetime or a lifetime fit. Neither a branching fraction nor all-channel stability follows.",
        "The report gives 1686 +/- 12 MeV/c^2 while explicitly deferring a detailed mass discussion until more events and better-understood systematic errors. No new confidence-level meaning, independent significance, modern mass combination or numerical reconstruction of that uncertainty is assigned.",
        "The report presents one selected event from partially analyzed pictures. Approximately 100000 photographs and 10^6 feet of kaon tracks are exposure descriptions, not Omega counts or a measured production rate. The archive stamp and publication date do not establish an acquisition date range."
      ],
      "sourceIds": [
        "barnes1964-omega"
      ],
      "claimIds": [
        "C-phys-barnes1964-tracks",
        "C-phys-barnes1964-cascade",
        "C-phys-barnes1964-omega"
      ]
    },
    {
      "id": "hadron-family-replay",
      "candidate": "Exact supplied-weight and linear-formula checks agree under their declared conventions.",
      "alternative": "A finite weight count proves irreducibility, dynamical formation, an exact physical mass relation or the historical event fit.",
      "discriminator": "Compare exact rational bookkeeping and synthetic perturbation controls while retaining all printed historical inputs as inputs.",
      "result": "conditional-support",
      "limit": "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
      "assumptions": [
        "The executable checks supplied weights, their electric charges, three synthetic positive-mass relation examples and historical printed-center spacing. The equal-weight bookkeeping is not a proof of an irreducible decomposition or a construction of spin-space-color wave functions. No first-order breaking derivation, measured mass relation, discovery fit/covariance or dynamics is reproduced.",
        "The octet mass relation is supplied only to first order in the stated symmetry violation for a common-spin/parity multiplet. No general breaking Hamiltonian, precision mass fit, uncertainty or covariance is derived. Historical meson formulas in the same paper are not imported as modern mass-squared or mixing results.",
        "Barnes adopts the decuplet expectation I=0, Q=-1, S=-3, J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 uses historical centers 1238,1385,1532; their arithmetic continuation is 1679. These are an approximate comparison hypothesis, not a modern fitted mass prediction or a measurement of Omega spin/parity.",
        "Multiplet classification and conditional event identification do not establish a real-time hadron formation path, a universal constituent minimum, nuclear or weak-decay stability, or a causal generation rule between source cards."
      ],
      "sourceIds": [
        "pdg2025-quark-model",
        "gellmann1962-symmetries",
        "barnes1964-omega",
        "hadron-family-verifier"
      ],
      "claimIds": [
        "C-phys-hadron-family-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:light-flavor-su3",
      "role": "definition",
      "denotes": "Use the approximate light-flavor SU(3) classification of u,d,s labels, distinct from local color SU(3). In this restricted sector Y=B+S and Q/e=I3+Y/2. The symmetry limit groups states with related quantum numbers; observed mass splittings do not disappear by a change of labels.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-light-flavor-su3"
      ]
    },
    {
      "nodeId": "phys:light-baryon-multiplets",
      "role": "definition",
      "denotes": "For the stated spatially symmetric ground-state three-quark model, the spin-flavor 56 contains the J^P=1/2+ octet N,Lambda,Sigma,Xi and J^P=3/2+ decuplet Delta,Sigma*,Xi*,Omega. Their isospin rows contain 2+1+3+2 and 4+3+2+1 weights. Lambda and Sigma0 share (I3,Y)=(0,0) but have different isospin.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-light-baryon-multiplets"
      ]
    },
    {
      "nodeId": "phys:baryon-octet-mass-relation",
      "role": "definition",
      "denotes": "Gell-Mann Equation 8.1 states (m_N+m_Xi)/2=(3*m_Lambda+m_Sigma)/4 to first order in unitary-symmetry violation for the baryon octet with common spin and parity. This is a supplied approximate mass relation, not exact equality of all measured masses.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-baryon-octet-mass-relation"
      ]
    },
    {
      "nodeId": "phys:omega-decuplet-expectation",
      "role": "model-context",
      "denotes": "Keep the report's adopted missing decuplet slot separate from the selected event: I=0, Q=-1, S=-3, predicted J^P=3/2+ and mass about 1680 MeV/c^2. Figure 1 compares historical isomultiplet centers 1238,1385,1532 MeV/c^2 with that expectation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-omega-decuplet-expectation"
      ]
    },
    {
      "nodeId": "phys:barnes1964-acquisition-context",
      "role": "experimental-context",
      "denotes": "Expose the BNL 80-inch hydrogen bubble chamber to a mass-separated 5 GeV/c K- beam. The report describes about 100000 pictures and roughly 10^6 feet of kaon tracks, partially analyzed for characteristic Omega decays; this admission concerns its one selected event.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-barnes1964-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:barnes1964-tracks",
      "role": "scoped-phenomenon",
      "denotes": "The selected event has charged-track directions and momenta listed in Table I, gap-density particle-identification information, displaced vertices and two photon conversions shown in Figure 2. These measured inputs precede the neutral cascade and parent-mass interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-barnes1964-tracks"
      ]
    },
    {
      "nodeId": "phys:barnes1964-reconstruction-context",
      "role": "model-context",
      "denotes": "Associate the fitted Lambda, two converted photons and the displaced neutral trajectory under Equation 1; use particle-mass hypotheses, transverse balance, production missing mass and alternative-channel tests to interpret the same event.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-barnes1964-reconstruction-context"
      ]
    },
    {
      "nodeId": "phys:barnes1964-cascade",
      "role": "scoped-phenomenon",
      "denotes": "Under the stated assignments the report finds a Lambda-compatible p+pi- mass of 1116 +/- 2 MeV/c^2, a two-photon mass of 135.1 +/- 1.5 MeV/c^2, and a neutral Xi-compatible mass of 1316 +/- 4 MeV/c^2. Shared vertex geometry and transverse balance support the proposed Xi0+pi- parent decay.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-barnes1964-cascade"
      ]
    },
    {
      "nodeId": "phys:barnes1964-omega",
      "role": "scoped-phenomenon",
      "denotes": "The report conditionally identifies particle 3 with Omega- from Q=-1, inferred S=-3 and reconstructed mass 1686 +/- 12 MeV/c^2, with a production missing mass of 500 +/- 25 MeV/c^2 compatible with K0. The quoted event proper decay time is 0.7e-10 s; no spin/parity or ensemble-lifetime determination is supplied.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-barnes1964-omega"
      ]
    },
    {
      "nodeId": "phys:hadron-family-replay-context",
      "role": "model-context",
      "denotes": "Enumerate supplied light-baryon isospin/hypercharge weights and charges, compare degree-three symmetric flavor monomial weights, evaluate three synthetic positive-mass examples of the supplied octet relation, and compare the historical Figure 1 mass spacings.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-hadron-family-replay-context"
      ]
    },
    {
      "nodeId": "phys:hadron-family-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The supplied octet has eight states at seven distinct (I3,Y) positions; the decuplet has ten weights, with Omega at I=I3=0,Y=-2,S=-3,Q=-1. Ten symmetric flavor monomials match the decuplet weights, and nine synthetic mass-relation checks pass. The printed centers give two 147 MeV spacings and continuation 1679 MeV, compared only with the approximate 1680 MeV expectation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hadron-family-arithmetic"
      ]
    }
  ]
};

/** Preserve flavor/color, historical acquisition and bounded algebra distinctions. */
export function validateHadronFamilyContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing hadron-family ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Hadron-family ${kind} changed ${id}.${key}: preserve flavor, inference and finite-check scope`);
    }
  }
}
