import assert from "node:assert/strict";

export const ENTANGLEMENT_FORMAL_CHECKS = new Map();
export const ENTANGLEMENT_FORMAL_ANALYTICAL_SOURCES = new Map();
export const ENTANGLEMENT_FORMAL_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [],
  "observations": [],
  "dependencies": [],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "werner1989",
      "kind": "research-publication",
      "title": "Quantum states with Einstein-Podolsky-Rosen correlations admitting a hidden-variable model",
      "authors": [
        "Reinhard F. Werner"
      ],
      "year": 1989,
      "doi": "10.1103/PhysRevA.40.4277",
      "url": "https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevA.40.4277/fulltext",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-theory-article",
        "locators": [
          "Page 4277: product states and convex mixtures; Equation 1",
          "Page 4278: local response functions and projective quantum probabilities; Equation 2",
          "Pages 4278-4280: invariant mixed states and hidden-variable construction; Equations 3-9",
          "Page 4280: positive-operator measurement extension remains a conjecture"
        ],
        "limit": "All five pages read; equations on pages 4277-4280 visually checked. The construction covers local projective measurements. No independent verification of the full hidden-variable integral or its extensions is claimed. Publisher metadata identifies volume 40, issue 8; its online date is 1 October, while the printed issue says 15 October 1989."
      }
    },
    {
      "id": "chsh1969",
      "kind": "research-publication",
      "title": "Proposed Experiment to Test Local Hidden-Variable Theories",
      "authors": [
        "John F. Clauser",
        "Michael A. Horne",
        "Abner Shimony",
        "Richard A. Holt"
      ],
      "year": 1969,
      "doi": "10.1103/PhysRevLett.23.880",
      "url": "https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevLett.23.880/fulltext",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-theory-article",
        "locators": [
          "Page 881: local responses, setting-independent hidden variables and Equation 1a",
          "Pages 881-884: photon-detection assumption, proposed test, Figure 1 and footnote 8"
        ],
        "limit": "Article pages 880-884 read; page 881 equations visually checked. Adjacent unrelated articles are excluded. The photon proposal adds a detection assumption in footnote 8; this is not a performed experiment. The linked 1970 erratum changes acknowledgments only."
      }
    },
    {
      "id": "chsh1970-note",
      "kind": "research-publication",
      "title": "Erratum: Proposed Experiment to Test Local Hidden Variable Theories",
      "authors": [
        "John F. Clauser",
        "Michael A. Horne",
        "Abner Shimony",
        "Richard A. Holt"
      ],
      "year": 1970,
      "doi": "10.1103/PhysRevLett.24.549",
      "url": "https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevLett.24.549/fulltext",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-publisher-note",
        "locators": [
          "Page 549: CHSH acknowledgment correction"
        ],
        "limit": "The CHSH notice on page 549 was read and visually checked. It adds NSF support; the other notice on that page concerns a different article."
      }
    },
    {
      "id": "hensen2015",
      "kind": "research-publication",
      "title": "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres",
      "authors": [
        "B. Hensen",
        "H. Bernien",
        "A. E. Dréau",
        "A. Reiserer",
        "N. Kalb",
        "M. S. Blok",
        "J. Ruitenberg",
        "R. F. L. Vermeulen",
        "R. N. Schouten",
        "C. Abellán",
        "W. Amaya",
        "V. Pruneri",
        "M. W. Mitchell",
        "M. Markham",
        "D. J. Twitchen",
        "D. Elkouss",
        "S. Wehner",
        "T. H. Taminiau",
        "R. Hanson"
      ],
      "year": 2015,
      "doi": "10.1038/nature15759",
      "url": "https://www.nature.com/articles/nature15759",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article-and-selected-supplement",
        "locators": [
          "Pages 682-684: CHSH definition, spin preparation and spacetime conditions; Figures 1-2",
          "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4",
          "Supplementary pages 1-11: sections A-K, preparation, filtering, timing and recording",
          "Supplementary pages 13-16: statistical introduction and sections N-P, score and null assumptions",
          "Supplementary pages 21 and 24-26: Lemma 3 statement, sections R-S and references",
          "Supplementary pages 17-23: section Q, single-attempt bound, history conditioning and binomial-tail induction; Equations 21-86"
        ],
        "limit": "Published five-page PDF and supplementary pages 1-11 and 13-26 read. The narrowly relevant statistical sections N-S are fully read; score/null Equations 5-13, recording section K and the page-23 induction were visually checked. Publisher supplement: https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnature15759/MediaObjects/41586_2015_BFnature15759_MOESM113_ESM.pdf. The admitted numerical replay uses the stated Equation 7 tail and Equation 8 bound. Supplementary Equation 83 prints equality after the inequality in Equations 75-77; the induction also has inconsistent n versus n-1 subscripts. These printed proof steps are not independently certified by the table calculation. Acquisition, stopping decisions and instrument/RNG calibration are not independently verified. The 0.92 fidelity estimate uses an interference input from another NV pair, not tomography of the Bell-trial sample. The deposited preselected-table replay retains its separate extent."
      }
    },
    {
      "id": "hensen2016",
      "kind": "research-publication",
      "title": "Loophole-free Bell test using electron spins in diamond: second experiment and additional analysis",
      "authors": [
        "B. Hensen",
        "N. Kalb",
        "M. S. Blok",
        "A. E. Dréau",
        "A. Reiserer",
        "R. F. L. Vermeulen",
        "R. N. Schouten",
        "M. Markham",
        "D. J. Twitchen",
        "K. Goodenough",
        "D. Elkouss",
        "S. Wehner",
        "T. H. Taminiau",
        "R. Hanson"
      ],
      "year": 2016,
      "doi": "10.1038/srep30289",
      "url": "https://www.nature.com/articles/srep30289",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
          "Pages 3-6: combination assumptions, window scans and setting tests; Figures 3-4 and Table 1",
          "Pages 6-10: conditional local-model assumptions, RNG analysis and conclusion"
        ],
        "limit": "All eleven published pages read; Figures 1-4 and Table 1 visually checked. Raw acquisition, Monte Carlo tests and the full RNG-bound proof are not independently reproduced. Figure 2 identifies psi-plus data as blue but one caption clause calls its counts orange; state tags and equations define the scoring. This is a second run by the same group and apparatus, not an independent laboratory replication. Deposited event-table calculations are separately checked through the linked dataset and executable source."
      }
    },
    {
      "id": "bell-data-verifier",
      "kind": "executable-check",
      "title": "Delft deposited event-table and conditional null-tail verification",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-bell-data.py",
      "sha256": "0a322fa0b462167be60f1b897f0a86f8c74999ee838f1ae34c9ebccd51fd44d2",
      "review": {
        "extent": "replayed-by-canonical-verifier",
        "locators": [
          "verify(): bell-event-table-2015",
          "verify(): bell-null-tail-2015",
          "verify(): bell-event-table-2016",
          "verify(): bell-null-tail-2016"
        ],
        "limit": "Recomputes the deposited, preselected 17-column event tables and the specified fixed-n null bound. Recorded marker ages, clock synchronization, missed events, original stopping decisions and the external predictability bound are not independently verified. Conventional S uncertainties retain their independent-trial interpretation; arithmetic agreement is not a new physical experiment."
      }
    },
    {
      "id": "hensen2015-data",
      "kind": "research-dataset",
      "title": "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres: deposited event tables",
      "authors": [
        "B. Hensen",
        "H. Bernien",
        "A. E. Dréau",
        "A. Reiserer",
        "N. Kalb",
        "M. S. Blok",
        "J. Ruitenberg",
        "R. F. L. Vermeulen",
        "R. N. Schouten",
        "C. Abellán",
        "W. Amaya",
        "V. Pruneri",
        "M. W. Mitchell",
        "M. Markham",
        "D. J. Twitchen",
        "D. Elkouss",
        "S. Wehner",
        "T. H. Taminiau",
        "R. Hanson"
      ],
      "year": 2015,
      "doi": "10.4121/uuid:6e19e9b2-4a2d-40b5-8dd3-a660bf3c0a31",
      "url": "https://data.4tu.nl/articles/_/12703235/1",
      "path": "references/canonical/data/hensen2015-data.zip",
      "sha256": "c28eb0f075759aef620a0b2e00a70fd675ce712bc8214d11c103f5a3d29492c0",
      "review": {
        "extent": "complete-deposited-event-table-replay",
        "locators": [
          "Complete deposited event tables: bell_open_data.txt (4746 rows)",
          "bell_open_data_header.ods: all 17 column definitions",
          "bell_open_data_analysis_example.py: complete filtering and CHSH analysis",
          "bell_open_data_readme.rtf: source description and preselection boundary"
        ],
        "limit": "Complete version-1 archive read; all event-table rows parsed and the declared filters, state-tagged scores, conditional correlators and binomial null tail independently recomputed. The archive supplies events already selected by a broad two-photon signature, first-photon times and marker ages; it is not a complete acquisition stream. Original stopping decisions, timing synchronization and the external RNG bound remain unverified. The readme prints nature.15759; the publisher DOI is 10.1038/nature15759. 4TU General Terms of Use apply: attribution and noncommercial reuse; subsequent redistribution must retain the creators' attribution."
      }
    },
    {
      "id": "hensen2016-data",
      "kind": "research-dataset",
      "title": "Loophole-free Bell test using electron spins in diamond: second experiment and additional analysis: deposited event tables",
      "authors": [
        "B. Hensen",
        "N. Kalb",
        "M. S. Blok",
        "A. E. Dréau",
        "A. Reiserer",
        "R. F. L. Vermeulen",
        "R. N. Schouten",
        "M. Markham",
        "D. J. Twitchen",
        "K. Goodenough",
        "D. Elkouss",
        "S. Wehner",
        "T. H. Taminiau",
        "R. Hanson"
      ],
      "year": 2016,
      "doi": "10.4121/uuid:53644d31-d862-4f9f-9ad2-0b571874b829",
      "url": "https://data.4tu.nl/articles/_/12694403/1",
      "path": "references/canonical/data/hensen2016-data.zip",
      "sha256": "876967e1cbe402b775d25392b773386325499b2343b18bf401d1825f2008a176",
      "review": {
        "extent": "complete-deposited-event-table-replay",
        "locators": [
          "Complete deposited event tables: bell_open_data_2_old_detector.txt (1047 rows), bell_open_data_2_new_detector.txt (2871 rows)",
          "bell_open_data_header.ods: all 17 column definitions",
          "bell_open_data_2_analysis_example.py: complete filtering and CHSH analysis",
          "bell_open_data_2_readme.rtf: source description and preselection boundary"
        ],
        "limit": "Complete version-1 archive read; all event-table rows parsed and the declared filters, state-tagged scores, conditional correlators and binomial null tail independently recomputed. The archive supplies events already selected by a broad two-photon signature, first-photon times and marker ages; it is not a complete acquisition stream. Original stopping decisions, timing synchronization and the external RNG bound remain unverified. The readme references arXiv:1603.05705 and leaves a modifications reference as XXX; the published paper specifies the detector replacement and scoring. 4TU General Terms of Use apply: attribution and noncommercial reuse; subsequent redistribution must retain the creators' attribution."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-bipartite-state",
      "kind": "review-finding",
      "statement": "A finite bipartite quantum state is a positive, unit-trace density operator on a declared tensor product H_A tensor H_B. A product state has the form rho_A tensor rho_B.",
      "scope": "finite-bipartite-state-and-measurement-model",
      "status": "definition",
      "citations": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4277: product states and convex mixtures; Equation 1",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The subsystem partition is part of the model. It does not assert a particle census or temporal formation order.",
        "A finite subsystem model does not require a quantum-field construction as its mathematical premise. Field-region algebras and identical-particle partitions need separate treatment.",
        "Local reduced states rho_A=tr_B(rho) and rho_B=tr_A(rho) exist in this finite tensor-product model even when rho is entangled; their product need not reconstruct the joint state."
      ]
    },
    {
      "id": "D-phys-entanglement",
      "kind": "review-finding",
      "statement": "Relative to H_A tensor H_B, a state is separable if rho = sum_i p_i rho_A_i tensor rho_B_i with p_i >= 0 and sum_i p_i = 1; otherwise it is entangled. For a pure state, separability reduces to factorization.",
      "scope": "finite-bipartite-state-and-measurement-model",
      "status": "definition",
      "citations": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4277: product states and convex mixtures; Equation 1",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Nonproduct mixed states can be separable: rho = (|00><00| + |11><11|)/2 has marginals I/2 but differs from their product I/4. This is a direct example of the definition.",
        "Two nontrivial subsystem factors are required for bipartite entanglement. This is not a universal minimum of two elementary particles, a stability threshold or a graph-generation rule.",
        "For the displayed classical mixture, <Z_A Z_B>=1 while <Z_A>=<Z_B>=0. Correlation or failure to factorize a mixed density operator alone does not establish entanglement.",
        "Display level, SOMA pattern/phase labels and requirement lists are editorial. No first nonlocal organizational stage, measured QFT-to-entanglement creation, necessary maintenance cause or parent weight 1.0 is established.",
        "The original N_min=N_crit=2 elementary particles is excluded. The prerequisite is a specified subsystem partition, not a universal particle population or stability threshold.",
        "Unspecified vacuum-linked coherence supplies no entanglement criterion and is excluded. A regulated vacuum-region entropy and a particular teleportation protocol require their separately declared models and evidence."
      ]
    },
    {
      "id": "D-phys-chsh-local",
      "kind": "review-finding",
      "statement": "With binary outcomes, local responses and a hidden-variable distribution independent of measurement settings, S = E00 + E01 + E10 - E11 obeys |S| <= 2. Stochastic local responses are convex mixtures of deterministic ones.",
      "scope": "finite-bipartite-state-and-measurement-model",
      "status": "definition",
      "citations": [
        {
          "sourceId": "chsh1969",
          "locator": "Page 881: local responses, setting-independent hidden variables and Equation 1a",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "chsh1969",
          "locator": "Pages 881-884: photon-detection assumption, proposed test, Figure 1 and footnote 8",
          "role": "limits",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "chsh1970-note",
          "locator": "Page 549: CHSH acknowledgment correction",
          "role": "provenance",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The bound concerns expectation values under the declared assumptions; finite counts require a statistical test.",
        "For a deterministic assignment, A0(B0+B1)+A1(B0-B1) is either +2 or -2; averaging preserves the bound.",
        "The 1969 optical proposal additionally assumes setting-independent joint detection. Its funding erratum does not change the inequality."
      ]
    },
    {
      "id": "D-phys-local-marginals",
      "kind": "review-finding",
      "statement": "For local projectors and the Born rule, sum_b tr[rho (P_a|x tensor Q_b|y)] = tr[rho (P_a|x tensor I)]. Thus the unconditioned marginal at A is independent of the chosen complete measurement at B.",
      "scope": "finite-bipartite-state-and-measurement-model",
      "status": "definition",
      "citations": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2",
          "role": "supports",
          "note": "The project derives the displayed marginal identity from Equation 2 and completeness of the local projectors."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is an algebraic consequence of sum_b Q_b|y = I in the declared tensor-product model.",
        "Conditioning on a selected remote outcome changes the subensemble; this is not an unconditional communication channel.",
        "No empirical proof of every no-signaling model, or claim about arbitrary nonlocal operations, follows."
      ]
    },
    {
      "id": "D-phys-werner-counterexample",
      "kind": "review-finding",
      "statement": "Werner constructs entangled mixed states on C^d tensor C^d, d >= 2, that admit a local hidden-variable model for all local projective measurements. Entanglement and Bell nonlocality are distinct conditions.",
      "scope": "finite-bipartite-state-and-measurement-model",
      "status": "definition",
      "citations": [
        {
          "sourceId": "werner1989",
          "locator": "Pages 4278-4280: invariant mixed states and hidden-variable construction; Equations 3-9",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4280: positive-operator measurement extension remains a conjecture",
          "role": "limits",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The construction uses invariant states, orthogonal projectors and measurement-dependent local response functions. Its extension to arbitrary positive-operator measurements is only conjectured in this paper.",
        "It does not supply a universal classical model for all quantum states, sequential protocols or quantum-information tasks."
      ]
    },
    {
      "id": "M-phys-hensen2015-readout",
      "kind": "method",
      "statement": "Two NV spin qubits in diamond at 4 K, separated by 1280 m. Photon heralding, premeasurement validity filters and 3.7 microsecond binary spin readout define 245 Bell trials. Missing readout clicks give -1, not a discarded trial.",
      "scope": "specified-Bell-test",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "hensen2015",
          "locator": "Supplementary pages 1-11: sections A-K, preparation, filtering, timing and recording",
          "role": "method",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Bell trial uses two levels of each spin-1 NV ground state, not a census of two isolated spin-half particles.",
        "S=2.42 and I=8(196/245-1/2)=2.40 are distinct finite-sample summaries. The quoted 0.20 uncertainty belongs to the conventional analysis.",
        "The complete analysis permits memory and bounded setting predictability; its stopping and timing conditions require the original records for independent verification.",
        "A Bell violation supports entanglement within the quantum measurement model. It does not establish superluminal communication, a unique preparation mechanism or a universal carrier minimum.",
        "Eligibility uses the predeclared herald-photon windows, absence of invalid markers in the preceding 250 attempts and no local excitation-window click. These conditions precede or are spacelike separated from the basis choices; a missing spin-readout click remains outcome -1.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record."
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "C-phys-hensen2015-correlations",
      "kind": "review-finding",
      "statement": "Deposited event-table replay recovers 196 wins in 245 trials from 4746 exported rows; S=2.422499870 with conventional SD 0.203826598.",
      "scope": "specified-Bell-test",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hensen2015",
          "locator": "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2015-data",
          "locator": "Complete deposited event tables: bell_open_data.txt (4746 rows)",
          "role": "supports",
          "note": "The deposited calculation is replayed under the declared filters and assumptions."
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-event-table-2015",
          "role": "supports",
          "note": "Checks only the named numerical result, conditional on the source preparation and external calibration assumptions."
        }
      ],
      "checkIds": [
        "bell-event-table-2015"
      ],
      "limitations": [
        "The Bell trial uses two levels of each spin-1 NV ground state, not a census of two isolated spin-half particles.",
        "S=2.42 and I=8(196/245-1/2)=2.40 are distinct finite-sample summaries. The quoted 0.20 uncertainty belongs to the conventional analysis.",
        "The complete analysis permits memory and bounded setting predictability; its stopping and timing conditions require the original records for independent verification.",
        "A Bell violation supports entanglement within the quantum measurement model. It does not establish superluminal communication, a unique preparation mechanism or a universal carrier minimum.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record."
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "C-phys-hensen2015-bell-test",
      "kind": "review-finding",
      "statement": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.039174643558790. The paper reports the rounded value 0.039; it is not a strict bound of 0.039.",
      "scope": "specified-Bell-test",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hensen2015",
          "locator": "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2015-data",
          "locator": "bell_open_data_analysis_example.py: complete filtering and CHSH analysis",
          "role": "supports",
          "note": "The deposited calculation is replayed under the declared filters and assumptions."
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-null-tail-2015",
          "role": "supports",
          "note": "Checks only the named numerical result, conditional on the source preparation and external calibration assumptions."
        }
      ],
      "checkIds": [
        "bell-null-tail-2015"
      ],
      "limitations": [
        "The Bell trial uses two levels of each spin-1 NV ground state, not a census of two isolated spin-half particles.",
        "S=2.42 and I=8(196/245-1/2)=2.40 are distinct finite-sample summaries. The quoted 0.20 uncertainty belongs to the conventional analysis.",
        "The complete analysis permits memory and bounded setting predictability; its stopping and timing conditions require the original records for independent verification.",
        "A Bell violation supports entanglement within the quantum measurement model. It does not establish superluminal communication, a unique preparation mechanism or a universal carrier minimum.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis.",
        "The adopted tau=1.08e-5 comes from supplementary section I: external QRNG characterization, k=4 tests and a stated two-sigma finite-test estimate, applied to k=32 spacelike raw bits. It is an assumed conditional predictability bound, not inferred from the 245 Bell trials or certified by their table replay; its calibration uncertainty is not separately included in the quoted tail.",
        "The admitted numerical replay uses the stated Equation 7 tail and Equation 8 bound. Supplementary Equation 83 prints equality after the inequality in Equations 75-77; the induction also has inconsistent n versus n-1 subscripts. These printed proof steps are not independently certified by the table calculation."
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "M-phys-hensen2015-bell-test",
      "kind": "method",
      "statement": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "scope": "specified-Bell-test",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "hensen2015",
          "locator": "Supplementary pages 13-16: statistical introduction and sections N-P, score and null assumptions",
          "role": "method",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2015",
          "locator": "Supplementary pages 17-23: section Q, single-attempt bound, history conditioning and binomial-tail induction; Equations 21-86",
          "role": "method",
          "note": "Reviewed proof and its printed limitations for the existing bounded table replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the declared event-ready selection, complete binary readout and spacetime timing conditions.",
        "Condition on the prior trial sequence; require local responses, independent setting generators and independence of the herald from those settings within the stated predictability bounds.",
        "Choose the sample stopping rule independently of observed outcomes; do not optimize the filter or significance after inspecting Bell results.",
        "Interpret P as a null-tail bound, not the probability that local realism is true.",
        "The Bell trial uses two levels of each spin-1 NV ground state, not a census of two isolated spin-half particles.",
        "S=2.42 and I=8(196/245-1/2)=2.40 are distinct finite-sample summaries. The quoted 0.20 uncertainty belongs to the conventional analysis.",
        "The complete analysis permits memory and bounded setting predictability; its stopping and timing conditions require the original records for independent verification.",
        "A Bell violation supports entanglement within the quantum measurement model. It does not establish superluminal communication, a unique preparation mechanism or a universal carrier minimum.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "The adopted tau=1.08e-5 comes from supplementary section I: external QRNG characterization, k=4 tests and a stated two-sigma finite-test estimate, applied to k=32 spacelike raw bits. It is an assumed conditional predictability bound, not inferred from the 245 Bell trials or certified by their table replay; its calibration uncertainty is not separately included in the quoted tail.",
        "The admitted numerical replay uses the stated Equation 7 tail and Equation 8 bound. Supplementary Equation 83 prints equality after the inequality in Equations 75-77; the induction also has inconsistent n versus n-1 subscripts. These printed proof steps are not independently certified by the table calculation."
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "M-phys-hensen2016-readout",
      "kind": "method",
      "statement": "Second run on the Delft apparatus, with 300 trials, changed heralding windows, psi-minus/psi-plus event tags, and QRNG bits combined with stored classical bits. The state tag changes which setting pair requires anticorrelation.",
      "scope": "specified-Bell-test",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
          "role": "method",
          "note": "Supports the scoped assertion in the reviewed passage."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The same group and apparatus supply both runs; the second run has changed heralding windows, psi-minus/psi-plus tags and a replaced detector with recalibrated timing.",
        "The second-run complete P=0.061 does not reject the specified null at 0.05. Nonrejection does not establish a local model.",
        "Combined-run P-values depend on the combination assumptions; they are not a third independent experiment. Post hoc window scans do not yield global significance.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The published sequence delays the readout pulse by 70 ns after XOR processing while retaining its end time. The deposited script uses 10620<t<=14320 ns relative to recorded sync pulses; replay follows those coordinates without independently reconstructing pulse or clock alignment.",
        "The stored Twitter bits provide no fresh spacelike randomness by themselves. Settings uniformity tests do not prove independence from an unobserved local hidden state.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record."
      ],
      "contextIds": [
        "hensen2016"
      ]
    },
    {
      "id": "C-phys-hensen2016-correlations",
      "kind": "review-finding",
      "statement": "Deposited event-table replay recovers 237 wins in 300 trials from 3918 exported rows; S=2.346430516 with conventional SD 0.184162420.",
      "scope": "specified-Bell-test",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2016-data",
          "locator": "Complete deposited event tables: bell_open_data_2_old_detector.txt (1047 rows), bell_open_data_2_new_detector.txt (2871 rows)",
          "role": "supports",
          "note": "The deposited calculation is replayed under the declared filters and assumptions."
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-event-table-2016",
          "role": "supports",
          "note": "Checks only the named numerical result, conditional on the source preparation and external calibration assumptions."
        }
      ],
      "checkIds": [
        "bell-event-table-2016"
      ],
      "limitations": [
        "The same group and apparatus supply both runs; the second run has changed heralding windows, psi-minus/psi-plus tags and a replaced detector with recalibrated timing.",
        "The second-run complete P=0.061 does not reject the specified null at 0.05. Nonrejection does not establish a local model.",
        "Combined-run P-values depend on the combination assumptions; they are not a third independent experiment. Post hoc window scans do not yield global significance.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record."
      ],
      "contextIds": [
        "hensen2016"
      ]
    },
    {
      "id": "C-phys-hensen2016-bell-test",
      "kind": "review-finding",
      "statement": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.060727644566033. This run alone does not reject the specified null at 0.05.",
      "scope": "specified-Bell-test",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
          "role": "supports",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2016-data",
          "locator": "bell_open_data_2_analysis_example.py: complete filtering and CHSH analysis",
          "role": "supports",
          "note": "The deposited calculation is replayed under the declared filters and assumptions."
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-null-tail-2016",
          "role": "supports",
          "note": "Checks only the named numerical result, conditional on the source preparation and external calibration assumptions."
        }
      ],
      "checkIds": [
        "bell-null-tail-2016"
      ],
      "limitations": [
        "The same group and apparatus supply both runs; the second run has changed heralding windows, psi-minus/psi-plus tags and a replaced detector with recalibrated timing.",
        "The second-run complete P=0.061 does not reject the specified null at 0.05. Nonrejection does not establish a local model.",
        "Combined-run P-values depend on the combination assumptions; they are not a third independent experiment. Post hoc window scans do not yield global significance.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ],
      "contextIds": [
        "hensen2016"
      ]
    },
    {
      "id": "M-phys-hensen2016-bell-test",
      "kind": "method",
      "statement": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds and (-1)^(a*(b+1))*x*y=1 for psi-plus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "scope": "specified-Bell-test",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
          "role": "method",
          "note": "Supports the scoped assertion in the reviewed passage."
        },
        {
          "sourceId": "hensen2016",
          "locator": "Pages 6-10: conditional local-model assumptions, RNG analysis and conclusion",
          "role": "limits",
          "note": "The later mathematical extension does not replace the bound used by the deposited replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the declared event-ready selection, complete binary readout and spacetime timing conditions.",
        "Condition on the prior trial sequence; require local responses, independent setting generators and independence of the herald from those settings within the stated predictability bounds.",
        "Choose the sample stopping rule independently of observed outcomes; do not optimize the filter or significance after inspecting Bell results.",
        "Interpret P as a null-tail bound, not the probability that local realism is true.",
        "The same group and apparatus supply both runs; the second run has changed heralding windows, psi-minus/psi-plus tags and a replaced detector with recalibrated timing.",
        "The second-run complete P=0.061 does not reject the specified null at 0.05. Nonrejection does not establish a local model.",
        "Combined-run P-values depend on the combination assumptions; they are not a third independent experiment. Post hoc window scans do not yield global significance.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "The second experiment states n=300 before reporting its outcome. The two archived detector periods, herald-state scores and wider predefined windows retain their own selection; they are one run, not independent replications.",
        "The 2016 theoretical extension permits distributions of bias and early settings under its conditional independence assumptions; it is not a new empirical RNG calibration. The stored replay deliberately retains the older xi=3/4+3*(tau+tau^2) bound used by the deposited script."
      ],
      "contextIds": [
        "hensen2016"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:bipartite-state",
      "name": "Bipartite quantum state",
      "kind": "definition",
      "description": "A finite bipartite quantum state is a positive, unit-trace density operator on a declared tensor product H_A tensor H_B. A product state has the form rho_A tensor rho_B.",
      "claimIds": [
        "D-phys-bipartite-state"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4277: product states and convex mixtures; Equation 1"
        }
      ],
      "openObligations": [
        "Any extension requires its own state space, measurement domain and evidence."
      ]
    },
    {
      "id": "phys:bipartite-entanglement",
      "name": "Bipartite quantum entanglement",
      "kind": "definition",
      "description": "Relative to H_A tensor H_B, a state is separable if rho = sum_i p_i rho_A_i tensor rho_B_i with p_i >= 0 and sum_i p_i = 1; otherwise it is entangled. For a pure state, separability reduces to factorization.",
      "claimIds": [
        "D-phys-entanglement"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4277: product states and convex mixtures; Equation 1"
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2"
        }
      ],
      "openObligations": [
        "Extensions require a specified partition, entanglement criterion and measurement or computational model; no universal generation or carrier-count rule is admitted."
      ]
    },
    {
      "id": "phys:chsh-local-model",
      "name": "CHSH local hidden-variable model",
      "kind": "definition",
      "description": "With binary outcomes, local responses and a hidden-variable distribution independent of measurement settings, S = E00 + E01 + E10 - E11 obeys |S| <= 2. Stochastic local responses are convex mixtures of deterministic ones.",
      "claimIds": [
        "D-phys-chsh-local"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "chsh1969",
          "locator": "Page 881: local responses, setting-independent hidden variables and Equation 1a"
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2"
        },
        {
          "sourceId": "chsh1969",
          "locator": "Pages 881-884: photon-detection assumption, proposed test, Figure 1 and footnote 8"
        },
        {
          "sourceId": "chsh1970-note",
          "locator": "Page 549: CHSH acknowledgment correction"
        }
      ],
      "openObligations": [
        "Any extension requires its own state space, measurement domain and evidence."
      ]
    },
    {
      "id": "phys:local-quantum-marginals",
      "name": "Local projective measurement marginals",
      "kind": "definition",
      "description": "For local projectors and the Born rule, sum_b tr[rho (P_a|x tensor Q_b|y)] = tr[rho (P_a|x tensor I)]. Thus the unconditioned marginal at A is independent of the chosen complete measurement at B.",
      "claimIds": [
        "D-phys-local-marginals"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "werner1989",
          "locator": "Page 4278: local response functions and projective quantum probabilities; Equation 2"
        }
      ],
      "openObligations": [
        "Any extension requires its own state space, measurement domain and evidence."
      ]
    },
    {
      "id": "phys:projective-bell-local-entanglement",
      "name": "Entanglement with a projective local model",
      "kind": "definition",
      "description": "Werner constructs entangled mixed states on C^d tensor C^d, d >= 2, that admit a local hidden-variable model for all local projective measurements. Entanglement and Bell nonlocality are distinct conditions.",
      "claimIds": [
        "D-phys-werner-counterexample"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "werner1989",
          "locator": "Pages 4278-4280: invariant mixed states and hidden-variable construction; Equations 3-9"
        },
        {
          "sourceId": "werner1989",
          "locator": "Page 4280: positive-operator measurement extension remains a conjecture"
        }
      ],
      "openObligations": [
        "Any extension requires its own state space, measurement domain and evidence."
      ]
    },
    {
      "id": "phys:hensen2015-context",
      "name": "Delft Bell-test preparation (2015)",
      "kind": "context",
      "description": "Two NV spin qubits in diamond at 4 K, separated by 1280 m. Photon heralding, premeasurement validity filters and 3.7 microsecond binary spin readout define 245 Bell trials. Missing readout clicks give -1, not a discarded trial.",
      "claimIds": [
        "M-phys-hensen2015-readout"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2015",
          "locator": "Supplementary pages 1-11: sections A-K, preparation, filtering, timing and recording"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    },
    {
      "id": "phys:hensen2015-correlations",
      "name": "Spin correlations (2015)",
      "kind": "scoped-process",
      "description": "Deposited event-table replay recovers 196 wins in 245 trials from 4746 exported rows; S=2.422499870 with conventional SD 0.203826598.",
      "claimIds": [
        "C-phys-hensen2015-correlations"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2015",
          "locator": "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4"
        },
        {
          "sourceId": "hensen2015-data",
          "locator": "Complete deposited event tables: bell_open_data.txt (4746 rows)"
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-event-table-2015"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    },
    {
      "id": "phys:hensen2015-bell-test",
      "name": "Local-model test (2015)",
      "kind": "scoped-process",
      "description": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.039174643558790. The paper reports the rounded value 0.039; it is not a strict bound of 0.039.",
      "claimIds": [
        "C-phys-hensen2015-bell-test"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2015",
          "locator": "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4"
        },
        {
          "sourceId": "hensen2015-data",
          "locator": "bell_open_data_analysis_example.py: complete filtering and CHSH analysis"
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-null-tail-2015"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    },
    {
      "id": "phys:hensen2016-context",
      "name": "Delft Bell-test preparation (2016)",
      "kind": "context",
      "description": "Second run on the Delft apparatus, with 300 trials, changed heralding windows, psi-minus/psi-plus event tags, and QRNG bits combined with stored classical bits. The state tag changes which setting pair requires anticorrelation.",
      "claimIds": [
        "M-phys-hensen2016-readout"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    },
    {
      "id": "phys:hensen2016-correlations",
      "name": "Spin correlations (2016)",
      "kind": "scoped-process",
      "description": "Deposited event-table replay recovers 237 wins in 300 trials from 3918 exported rows; S=2.346430516 with conventional SD 0.184162420.",
      "claimIds": [
        "C-phys-hensen2016-correlations"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2"
        },
        {
          "sourceId": "hensen2016-data",
          "locator": "Complete deposited event tables: bell_open_data_2_old_detector.txt (1047 rows), bell_open_data_2_new_detector.txt (2871 rows)"
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-event-table-2016"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    },
    {
      "id": "phys:hensen2016-bell-test",
      "name": "Local-model test (2016)",
      "kind": "scoped-process",
      "description": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.060727644566033. This run alone does not reject the specified null at 0.05.",
      "claimIds": [
        "C-phys-hensen2016-bell-test"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "hensen2016",
          "locator": "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2"
        },
        {
          "sourceId": "hensen2016-data",
          "locator": "bell_open_data_2_analysis_example.py: complete filtering and CHSH analysis"
        },
        {
          "sourceId": "bell-data-verifier",
          "locator": "verify(): bell-null-tail-2016"
        }
      ],
      "openObligations": [
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:state-entanglement",
      "source": "phys:bipartite-state",
      "target": "phys:bipartite-entanglement",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target uses this stated mathematical definition; no physical formation is asserted.",
      "claimIds": [
        "D-phys-entanglement"
      ]
    },
    {
      "id": "physics:state-marginals",
      "source": "phys:bipartite-state",
      "target": "phys:local-quantum-marginals",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target uses this stated mathematical definition; no physical formation is asserted.",
      "claimIds": [
        "D-phys-local-marginals"
      ]
    },
    {
      "id": "physics:entanglement-local-example",
      "source": "phys:bipartite-entanglement",
      "target": "phys:projective-bell-local-entanglement",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target uses this stated mathematical definition; no physical formation is asserted.",
      "claimIds": [
        "D-phys-werner-counterexample"
      ]
    },
    {
      "id": "physics:bell-local-example",
      "source": "phys:chsh-local-model",
      "target": "phys:projective-bell-local-entanglement",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target uses this stated mathematical definition; no physical formation is asserted.",
      "claimIds": [
        "D-phys-werner-counterexample"
      ]
    },
    {
      "id": "physics:hensen2015-readout",
      "source": "phys:hensen2015-context",
      "target": "phys:hensen2015-correlations",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Two NV spin qubits in diamond at 4 K, separated by 1280 m. Photon heralding, premeasurement validity filters and 3.7 microsecond binary spin readout define 245 Bell trials. Missing readout clicks give -1, not a discarded trial.",
      "claimIds": [
        "M-phys-hensen2015-readout"
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "physics:hensen2015-score",
      "source": "phys:hensen2015-correlations",
      "target": "phys:hensen2015-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "claimIds": [
        "M-phys-hensen2015-bell-test"
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "physics:hensen2015-null",
      "source": "phys:chsh-local-model",
      "target": "phys:hensen2015-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "claimIds": [
        "M-phys-hensen2015-bell-test"
      ],
      "contextIds": [
        "hensen2015"
      ]
    },
    {
      "id": "physics:hensen2016-readout",
      "source": "phys:hensen2016-context",
      "target": "phys:hensen2016-correlations",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Second run on the Delft apparatus, with 300 trials, changed heralding windows, psi-minus/psi-plus event tags, and QRNG bits combined with stored classical bits. The state tag changes which setting pair requires anticorrelation.",
      "claimIds": [
        "M-phys-hensen2016-readout"
      ],
      "contextIds": [
        "hensen2016"
      ]
    },
    {
      "id": "physics:hensen2016-score",
      "source": "phys:hensen2016-correlations",
      "target": "phys:hensen2016-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds and (-1)^(a*(b+1))*x*y=1 for psi-plus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "claimIds": [
        "M-phys-hensen2016-bell-test"
      ],
      "contextIds": [
        "hensen2016"
      ]
    },
    {
      "id": "physics:hensen2016-null",
      "source": "phys:chsh-local-model",
      "target": "phys:hensen2016-bell-test",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Count wins with (-1)^(a*b)*x*y=1 for psi-minus heralds and (-1)^(a*(b+1))*x*y=1 for psi-plus heralds. At fixed accepted-trial n, bound the specified local-model tail by sum(j=k..n) binom(n,j)*xi^j*(1-xi)^(n-j), with xi=3/4+3*(tau+tau^2) and adopted tau=1.08e-5. The Bernoulli tail is a domination bound allowing device memory, not an assertion of independent observed trials.",
      "claimIds": [
        "M-phys-hensen2016-bell-test"
      ],
      "contextIds": [
        "hensen2016"
      ]
    }
  ],
  "studies": [
    {
      "id": "hensen2015",
      "sourceId": "hensen2015",
      "studyType": "primary-experiment",
      "doi": "10.1038/nature15759",
      "journal": "Nature",
      "volume": "526",
      "issue": "7575",
      "pages": "682-686",
      "system": "Electronic spin subspaces of spatially separated nitrogen-vacancy centres in diamond",
      "preparation": "Two NV spin qubits in diamond at 4 K, separated by 1280 m. Photon heralding, premeasurement validity filters and 3.7 microsecond binary spin readout define 245 Bell trials. Missing readout clicks give -1, not a discarded trial.",
      "observable": "Binary setting/outcome records, setting-conditioned correlators and the event-tagged CHSH win count.",
      "finding": "Deposited event-table replay recovers 196 wins in 245 trials from 4746 exported rows; S=2.422499870 with conventional SD 0.203826598. With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.039174643558790.",
      "limitations": [
        "The Bell trial uses two levels of each spin-1 NV ground state, not a census of two isolated spin-half particles.",
        "S=2.42 and I=8(196/245-1/2)=2.40 are distinct finite-sample summaries. The quoted 0.20 uncertainty belongs to the conventional analysis.",
        "The complete analysis permits memory and bounded setting predictability; its stopping and timing conditions require the original records for independent verification.",
        "A Bell violation supports entanglement within the quantum measurement model. It does not establish superluminal communication, a unique preparation mechanism or a universal carrier minimum.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis.",
        "Eligibility uses the predeclared herald-photon windows, absence of invalid markers in the preceding 250 attempts and no local excitation-window click. These conditions precede or are spacelike separated from the basis choices; a missing spin-readout click remains outcome -1.",
        "The adopted tau=1.08e-5 comes from supplementary section I: external QRNG characterization, k=4 tests and a stated two-sigma finite-test estimate, applied to k=32 spacelike raw bits. It is an assumed conditional predictability bound, not inferred from the 245 Bell trials or certified by their table replay; its calibration uncertainty is not separately included in the quoted tail.",
        "The admitted numerical replay uses the stated Equation 7 tail and Equation 8 bound. Supplementary Equation 83 prints equality after the inequality in Equations 75-77; the induction also has inconsistent n versus n-1 subscripts. These printed proof steps are not independently certified by the table calculation."
      ],
      "readExtent": "full-primary-article-and-selected-supplement",
      "reviewedLocators": [
        "Pages 682-684: CHSH definition, spin preparation and spacetime conditions; Figures 1-2",
        "Pages 684-686: characterization, Bell results and interpretation limits; Figures 3-4",
        "Supplementary pages 1-11: sections A-K, preparation, filtering, timing and recording",
        "Supplementary pages 13-16: statistical introduction and sections N-P, score and null assumptions",
        "Supplementary pages 21 and 24-26: Lemma 3 statement, sections R-S and references",
        "Supplementary pages 17-23: section Q, single-attempt bound, history conditioning and binomial-tail induction; Equations 21-86"
      ],
      "metadataCheckedAt": "2026-09-14",
      "metadataUrl": "https://www.nature.com/articles/nature15759",
      "correctionCheck": "Publisher identity and the 2016 follow-up checked. No correction notice was found on the inspected publisher pages; no exhaustive later-reassessment review is claimed."
    },
    {
      "id": "hensen2016",
      "sourceId": "hensen2016",
      "studyType": "primary-experiment",
      "doi": "10.1038/srep30289",
      "journal": "Scientific Reports",
      "volume": "6",
      "issue": "article 30289",
      "pages": "30289, pages 1-11",
      "system": "Electronic spin subspaces of spatially separated nitrogen-vacancy centres in diamond",
      "preparation": "Second run on the Delft apparatus, with 300 trials, changed heralding windows, psi-minus/psi-plus event tags, and QRNG bits combined with stored classical bits. The state tag changes which setting pair requires anticorrelation.",
      "observable": "Binary setting/outcome records, setting-conditioned correlators and the event-tagged CHSH win count.",
      "finding": "Deposited event-table replay recovers 237 wins in 300 trials from 3918 exported rows; S=2.346430516 with conventional SD 0.184162420. With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.060727644566033.",
      "limitations": [
        "The same group and apparatus supply both runs; the second run has changed heralding windows, psi-minus/psi-plus tags and a replaced detector with recalibrated timing.",
        "The second-run complete P=0.061 does not reject the specified null at 0.05. Nonrejection does not establish a local model.",
        "Combined-run P-values depend on the combination assumptions; they are not a third independent experiment. Post hoc window scans do not yield global significance.",
        "This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced.",
        "The deposited archives provide broad two-photon-preselected rows, settings and their times, first readout/excitation clicks, validity-marker ages, day/run labels, column definitions and analysis scripts. They do not provide all failed attempts, full acquisition streams, calibration logs, the long QRNG test files or a complete stopping-decision record.",
        "Sections N-Q require fixed accepted-trial n chosen independently of the observed outcomes. The 45-minute hardware runs, fault stops and stored day/run labels do not prove that the overall stopping decision obeyed this requirement; stopping below a desired p-value would require a different analysis.",
        "The replay retains the deposited state-tagged scoring and original conditional xi bound; the later theoretical RNG extension and settings diagnostics are not a new calibration or an independent run."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Pages 1-3: second-run preparation, state-specific scores and results; Figures 1-2",
        "Pages 3-6: combination assumptions, window scans and setting tests; Figures 3-4 and Table 1",
        "Pages 6-10: conditional local-model assumptions, RNG analysis and conclusion"
      ],
      "metadataCheckedAt": "2026-09-14",
      "metadataUrl": "https://www.nature.com/articles/srep30289",
      "correctionCheck": "Publisher identity and the 2016 follow-up checked. No correction notice was found on the inspected publisher pages; no exhaustive later-reassessment review is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "hensen2015-bell",
      "candidate": "Quantum correlations outside the specified local hidden-variable model.",
      "alternative": "Local responses with the declared setting, timing and stopping conditions.",
      "sourceIds": [
        "hensen2015"
      ],
      "discriminator": "The declared event-tagged CHSH win count and complete finite-sample null test.",
      "result": "specified-alternative-disfavored",
      "limit": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.039174643558790. The published 0.039 is rounded. This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced. The fixed-n stopping and conditional setting-predictability assumptions are external to the deposited-table replay; a reported null tail is not the probability that local realism is true or a universal entanglement detector.",
      "assumptions": [
        "Use the declared event-ready selection, complete binary readout and spacetime timing conditions.",
        "Condition on the prior trial sequence; require local responses, independent setting generators and independence of the herald from those settings within the stated predictability bounds.",
        "Choose the sample stopping rule independently of observed outcomes; do not optimize the filter or significance after inspecting Bell results.",
        "Interpret P as a null-tail bound, not the probability that local realism is true."
      ],
      "claimIds": [
        "C-phys-hensen2015-bell-test"
      ]
    },
    {
      "id": "hensen2016-bell",
      "candidate": "Quantum correlations outside the specified local hidden-variable model.",
      "alternative": "Local responses with the declared setting, timing and stopping conditions.",
      "sourceIds": [
        "hensen2016"
      ],
      "discriminator": "The declared event-tagged CHSH win count and complete finite-sample null test.",
      "result": "inconclusive",
      "limit": "With the declared fixed-n null, tau=0.0000108 and single-trial bound 0.75003240034992, the recomputed binomial upper tail is 0.060727644566033. At 0.05 the result is inconclusive. This checks the deposited table calculations. Original acquisition, marker construction, clock synchronization, the stopping rule and the RNG calibration are not independently reproduced. The fixed-n stopping and conditional setting-predictability assumptions are external to the deposited-table replay; a reported null tail is not the probability that local realism is true or a universal entanglement detector.",
      "assumptions": [
        "Use the declared event-ready selection, complete binary readout and spacetime timing conditions.",
        "Condition on the prior trial sequence; require local responses, independent setting generators and independence of the herald from those settings within the stated predictability bounds.",
        "Choose the sample stopping rule independently of observed outcomes; do not optimize the filter or significance after inspecting Bell results.",
        "Interpret P as a null-tail bound, not the probability that local realism is true."
      ],
      "claimIds": [
        "C-phys-hensen2016-bell-test"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:bipartite-state",
      "role": "definition",
      "denotes": "The stated mathematical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-bipartite-state"
      ]
    },
    {
      "nodeId": "phys:bipartite-entanglement",
      "role": "definition",
      "denotes": "The stated mathematical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-entanglement"
      ]
    },
    {
      "nodeId": "phys:chsh-local-model",
      "role": "definition",
      "denotes": "The stated mathematical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-chsh-local"
      ]
    },
    {
      "nodeId": "phys:local-quantum-marginals",
      "role": "definition",
      "denotes": "The stated mathematical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-local-marginals"
      ]
    },
    {
      "nodeId": "phys:projective-bell-local-entanglement",
      "role": "definition",
      "denotes": "The stated mathematical concept.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-werner-counterexample"
      ]
    },
    {
      "nodeId": "phys:hensen2015-context",
      "role": "experimental-context",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-hensen2015-readout"
      ]
    },
    {
      "nodeId": "phys:hensen2015-correlations",
      "role": "scoped-phenomenon",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hensen2015-correlations"
      ]
    },
    {
      "nodeId": "phys:hensen2015-bell-test",
      "role": "scoped-phenomenon",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hensen2015-bell-test"
      ]
    },
    {
      "nodeId": "phys:hensen2016-context",
      "role": "experimental-context",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-hensen2016-readout"
      ]
    },
    {
      "nodeId": "phys:hensen2016-correlations",
      "role": "scoped-phenomenon",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hensen2016-correlations"
      ]
    },
    {
      "nodeId": "phys:hensen2016-bell-test",
      "role": "scoped-phenomenon",
      "denotes": "The specified preparation or reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-hensen2016-bell-test"
      ]
    }
  ]
};

/** Bind finite-state definitions and the reviewed Delft method limits. */
export function validateEntanglementFormalContracts(context) {
  for (const key of ["sources", "claims", "entities", "relations", "studies", "comparisons"]) {
    for (const expected of contracts[key]) {
      assert.deepEqual(context[key].get(expected.id), expected, `Entanglement/Delft contract drift: ${key} ${expected.id}`);
    }
  }
  const roles = new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]));
  for (const expected of contracts.readiness) {
    assert.deepEqual(roles.get(expected.nodeId), expected, `Entanglement/Delft role drift: ${expected.nodeId}`);
  }
}
