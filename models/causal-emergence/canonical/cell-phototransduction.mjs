// Source-bound rod feedback and the corrected biochemical stage boundary.
export const CELL_PHOTOTRANSDUCTION_RECORDS = {
  "sources": [
    {
      "id": "mendez2001-gcap",
      "kind": "research-publication",
      "title": "Role of guanylate cyclase-activating proteins (GCAPs) in setting the flash sensitivity of rod photoreceptors",
      "authors": [
        "Ana Mendez",
        "Marie E. Burns",
        "Izabela Sokal",
        "Alexander M. Dizhoor",
        "Wolfgang Baehr",
        "Krzysztof Palczewski",
        "Denis A. Baylor",
        "Jeannie Chen"
      ],
      "year": 2001,
      "doi": "10.1073/pnas.171308998",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC55558/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-html-main-methods-results-discussion-table-and-caption-reading",
        "locators": [
          "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
          "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2",
          "Results: calcium-dependent guanylate cyclase activity; Figure 3",
          "Results: altered rod flash sensitivity and kinetics; Figures 4-5 and Table 1",
          "Results: steady-background incremental sensitivity; Figure 6; Discussion on residual adaptation and GCAP-specific inference"
        ],
        "limit": "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type."
      }
    },
    {
      "id": "fung1981-correction",
      "kind": "research-publication",
      "title": "Correction: Flow of information in the light-triggered cyclic nucleotide cascade of vision",
      "authors": [
        "B. K. K. Fung",
        "J. B. Hurley",
        "L. Stryer"
      ],
      "year": 1981,
      "doi": "10.1073/pnas.78.8.5260-a",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC320392/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-relevant-correction-notice-visual-reading",
        "locators": [
          "PNAS 78(8), 5260, left-column correction to Fung, Hurley and Stryer: p.155 Discussion fifth sentence"
        ],
        "limit": "The relevant left-column correction notice was visually read from the primary page image. The unrelated IgD notice in the other column is not evidence about phototransduction. The original 1981 paper remains abstract-only in this reconstruction; the correction does not establish its complete Methods or an intact-cell transfer function. Crossmark identifies this correction DOI."
      }
    }
  ],
  "entities": [
    {
      "id": "cell:mendez2001-gcap-expression-preparation",
      "name": "GCAP1/2 knockout and transgenic GCAP2 expression validation preparation",
      "kind": "context",
      "description": "Target both GCAP genes in 129SV/C57BL6-derived mice and compare retinal transcript/protein expression with wild-type, heterozygous and bovine GCAP2 transgenic genotypes.",
      "claimIds": [
        "M-cell-mendez2001-gcap-expression"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-expression-response",
      "name": "GCAP1/2 knockout and transgenic GCAP2 expression validation response",
      "kind": "scoped-process",
      "description": "Double knockout removes detectable GCAP1/2 expression; transgenic GCAP2 is expressed at about twice endogenous GCAP2, so downstream rescue is not a dose-matched single-variable control.",
      "claimIds": [
        "C-cell-mendez2001-gcap-expression"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-expression-scope",
      "name": "GCAP1/2 knockout and transgenic GCAP2 expression validation scope",
      "kind": "definition",
      "description": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-4",
          "locator": "/22"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-enzyme-preparation",
      "name": "Retinal homogenate and rod-outer-segment guanylate cyclase assays preparation",
      "kind": "context",
      "description": "Pool four dark-adapted retinas per genotype for homogenate assays; separately assay rod-outer-segment extracts. Compare low calcium (at most 50 nM) with 2 micromolar calcium, GCAP2 transgene and recombinant GCAP1 addition. Three experiments at least in duplicate are reported.",
      "claimIds": [
        "M-cell-mendez2001-gcap-enzyme"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: calcium-dependent guanylate cyclase activity; Figure 3"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-enzyme-response",
      "name": "Retinal homogenate and rod-outer-segment guanylate cyclase assays response",
      "kind": "scoped-process",
      "description": "Knockout removes detectable calcium dependence of GC activity, rather than removing the GC enzyme or all basal activity; GCAP2 transgene restores maximal homogenate activity and added recombinant GCAP1 restores calcium responsiveness in separate extracts.",
      "claimIds": [
        "C-cell-mendez2001-gcap-enzyme"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: calcium-dependent guanylate cyclase activity; Figure 3"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-enzyme-scope",
      "name": "Retinal homogenate and rod-outer-segment guanylate cyclase assays scope",
      "kind": "definition",
      "description": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-4",
          "locator": "/22"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-current-preparation",
      "name": "Dark-adapted single-rod current and incremental background response preparation",
      "kind": "context",
      "description": "Dark-adapt mice for at least 15 hours; suction-electrode recordings from single rods in perfused retinal pieces at 35-37 C, pH 7.4. Calibrated 500 nm 10 ms flashes; dim responses at most 20 percent of maximum. Estimate mean single-photon response by mean-variance scaling from at least 30 flashes; 520 nm steady backgrounds are applied about one minute before incremental flashes.",
      "claimIds": [
        "M-cell-mendez2001-gcap-current"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: steady-background incremental sensitivity; Figure 6; Discussion on residual adaptation and GCAP-specific inference"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-current-response",
      "name": "Dark-adapted single-rod current and incremental background response response",
      "kind": "scoped-process",
      "description": "GCAP knockout yields larger, slower dim-flash responses; GCAP2-only expression does not restore the early fast recovery even when maximal homogenate activity is restored. Bright-background incremental sensitivity falls sooner, while non-GCAP adaptation remains.",
      "claimIds": [
        "C-cell-mendez2001-gcap-current"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: steady-background incremental sensitivity; Figure 6; Discussion on residual adaptation and GCAP-specific inference"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:mendez2001-gcap-current-scope",
      "name": "Dark-adapted single-rod current and incremental background response scope",
      "kind": "definition",
      "description": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-4",
          "locator": "/22"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:phototransduction-source-scope",
      "name": "Phototransduction cascade: observable boundaries",
      "kind": "definition",
      "description": "The original card is reconstructed through distinct source-bound preparations; full end-to-end transfer remains unresolved.",
      "claimIds": [
        "D-cell-phototransduction-scope",
        "D-cell-fung-correction"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-4",
          "locator": "/22"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    },
    {
      "id": "cell:phototransduction-transfer-unresolved",
      "name": "Complete phototransduction transfer: unresolved",
      "kind": "hypothesis",
      "description": "A complete gain/noise and membrane-voltage transfer function has not been established by the admitted preparations.",
      "claimIds": [
        "C-cell-phototransduction-transfer-unresolved"
      ],
      "status": "hypothesis",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-4",
          "locator": "/22"
        }
      ],
      "openObligations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "level": 4
    }
  ],
  "claims": [
    {
      "id": "D-cell-phototransduction-scope",
      "kind": "review-finding",
      "statement": "Photochemistry, isolated biochemical activation, patch conductance, intact rod current, adaptive feedback, membrane voltage and downstream coding are distinct observables. Separate experiments cannot be concatenated into one measured complete cascade.",
      "scope": "Admission boundary for source card 4.22 and the retained retinal pilot.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "legacy-4",
          "locator": "/22",
          "role": "provenance",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ]
    },
    {
      "id": "C-cell-phototransduction-transfer-unresolved",
      "kind": "review-finding",
      "statement": "The admitted preparations do not identify a unique complete in-vivo gain/noise transfer function or verify every asserted membrane-voltage and downstream robust-coding property.",
      "scope": "Unresolved cross-preparation transfer and attribution.",
      "status": "unresolved",
      "citations": [
        {
          "sourceId": "legacy-4",
          "locator": "/22",
          "role": "provenance",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "The original Burns/Pugh and Rieke/Baylor review references provide orientation rather than a newly reproduced experiment."
      ]
    },
    {
      "id": "D-cell-fung-correction",
      "kind": "review-finding",
      "statement": "The published correction separates two reconstitution stages: the first can proceed without phosphodiesterase, and the second without photolyzed rhodopsin. The original abstract supports a qualitative biochemical stage distinction, not a measured intact-cell cascade.",
      "scope": "Exact corrected sentence and the declared abstract-only original reading.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fung1981-correction",
          "locator": "PNAS 78(8), 5260, left-column correction to Fung, Hurley and Stryer: p.155 Discussion fifth sentence",
          "role": "limits",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ]
    },
    {
      "id": "M-cell-mendez2001-gcap-expression",
      "kind": "method",
      "statement": "Target both GCAP genes in 129SV/C57BL6-derived mice and compare retinal transcript/protein expression with wild-type, heterozygous and bovine GCAP2 transgenic genotypes.",
      "scope": "GCAP1/2 knockout and transgenic GCAP2 expression validation",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
          "role": "method",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "contextIds": [
        "mendez2001-gcap-expression"
      ]
    },
    {
      "id": "C-cell-mendez2001-gcap-expression",
      "kind": "review-finding",
      "statement": "Double knockout removes detectable GCAP1/2 expression; transgenic GCAP2 is expressed at about twice endogenous GCAP2, so downstream rescue is not a dose-matched single-variable control.",
      "scope": "GCAP1/2 knockout and transgenic GCAP2 expression validation",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2",
          "role": "supports",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type."
      ],
      "contextIds": [
        "mendez2001-gcap-expression"
      ]
    },
    {
      "id": "M-cell-mendez2001-gcap-enzyme",
      "kind": "method",
      "statement": "Pool four dark-adapted retinas per genotype for homogenate assays; separately assay rod-outer-segment extracts. Compare low calcium (at most 50 nM) with 2 micromolar calcium, GCAP2 transgene and recombinant GCAP1 addition. Three experiments at least in duplicate are reported.",
      "scope": "Retinal homogenate and rod-outer-segment guanylate cyclase assays",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
          "role": "method",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "contextIds": [
        "mendez2001-gcap-enzyme"
      ]
    },
    {
      "id": "C-cell-mendez2001-gcap-enzyme",
      "kind": "review-finding",
      "statement": "Knockout removes detectable calcium dependence of GC activity, rather than removing the GC enzyme or all basal activity; GCAP2 transgene restores maximal homogenate activity and added recombinant GCAP1 restores calcium responsiveness in separate extracts.",
      "scope": "Retinal homogenate and rod-outer-segment guanylate cyclase assays",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: calcium-dependent guanylate cyclase activity; Figure 3",
          "role": "supports",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type."
      ],
      "contextIds": [
        "mendez2001-gcap-enzyme"
      ]
    },
    {
      "id": "M-cell-mendez2001-gcap-current",
      "kind": "method",
      "statement": "Dark-adapt mice for at least 15 hours; suction-electrode recordings from single rods in perfused retinal pieces at 35-37 C, pH 7.4. Calibrated 500 nm 10 ms flashes; dim responses at most 20 percent of maximum. Estimate mean single-photon response by mean-variance scaling from at least 30 flashes; 520 nm steady backgrounds are applied about one minute before incremental flashes.",
      "scope": "Dark-adapted single-rod current and incremental background response",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
          "role": "method",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function."
      ],
      "contextIds": [
        "mendez2001-gcap-current"
      ]
    },
    {
      "id": "C-cell-mendez2001-gcap-current",
      "kind": "review-finding",
      "statement": "GCAP knockout yields larger, slower dim-flash responses; GCAP2-only expression does not restore the early fast recovery even when maximal homogenate activity is restored. Bright-background incremental sensitivity falls sooner, while non-GCAP adaptation remains.",
      "scope": "Dark-adapted single-rod current and incremental background response",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: altered rod flash sensitivity and kinetics; Figures 4-5 and Table 1",
          "role": "supports",
          "note": "Dark-adapted kinetics and GCAP2-only early-recovery result are read here; the separate Figure 6 passage supplies the background-sensitivity comparison."
        },
        {
          "sourceId": "mendez2001-gcap",
          "locator": "Results: steady-background incremental sensitivity; Figure 6; Discussion on residual adaptation and GCAP-specific inference",
          "role": "supports",
          "note": "Only the declared source passage and preparation are admitted."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Residual non-GCAP adaptation is inferred by comparing measured background sensitivity with the source's no-adaptation model; its molecular mechanism is not directly identified.",
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type."
      ],
      "contextIds": [
        "mendez2001-gcap-current"
      ]
    }
  ],
  "relations": [
    {
      "id": "cellular:mendez2001-gcap-expression-measurement",
      "source": "cell:mendez2001-gcap-expression-preparation",
      "target": "cell:mendez2001-gcap-expression-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation bounds this response and cannot be transferred to another assay.",
      "claimIds": [
        "M-cell-mendez2001-gcap-expression"
      ],
      "contextIds": [
        "mendez2001-gcap-expression"
      ]
    },
    {
      "id": "cellular:mendez2001-gcap-expression-interpretation",
      "source": "cell:mendez2001-gcap-expression-scope",
      "target": "cell:mendez2001-gcap-expression-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This response is interpreted within the declared observable boundary.",
      "claimIds": [
        "D-cell-phototransduction-scope",
        "C-cell-mendez2001-gcap-expression"
      ],
      "contextIds": [
        "mendez2001-gcap-expression"
      ]
    },
    {
      "id": "cellular:mendez2001-gcap-enzyme-measurement",
      "source": "cell:mendez2001-gcap-enzyme-preparation",
      "target": "cell:mendez2001-gcap-enzyme-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation bounds this response and cannot be transferred to another assay.",
      "claimIds": [
        "M-cell-mendez2001-gcap-enzyme"
      ],
      "contextIds": [
        "mendez2001-gcap-enzyme"
      ]
    },
    {
      "id": "cellular:mendez2001-gcap-enzyme-interpretation",
      "source": "cell:mendez2001-gcap-enzyme-scope",
      "target": "cell:mendez2001-gcap-enzyme-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This response is interpreted within the declared observable boundary.",
      "claimIds": [
        "D-cell-phototransduction-scope",
        "C-cell-mendez2001-gcap-enzyme"
      ],
      "contextIds": [
        "mendez2001-gcap-enzyme"
      ]
    },
    {
      "id": "cellular:mendez2001-gcap-current-measurement",
      "source": "cell:mendez2001-gcap-current-preparation",
      "target": "cell:mendez2001-gcap-current-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation bounds this response and cannot be transferred to another assay.",
      "claimIds": [
        "M-cell-mendez2001-gcap-current"
      ],
      "contextIds": [
        "mendez2001-gcap-current"
      ]
    },
    {
      "id": "cellular:mendez2001-gcap-current-interpretation",
      "source": "cell:mendez2001-gcap-current-scope",
      "target": "cell:mendez2001-gcap-current-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This response is interpreted within the declared observable boundary.",
      "claimIds": [
        "D-cell-phototransduction-scope",
        "C-cell-mendez2001-gcap-current"
      ],
      "contextIds": [
        "mendez2001-gcap-current"
      ]
    },
    {
      "id": "cellular:phototransduction-scope-ret-rod-response",
      "source": "cell:phototransduction-source-scope",
      "target": "ret:rod-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Different preparations and inference limits remain explicit; this relation does not assert physical sufficiency.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "id": "cellular:phototransduction-scope-cell-mendez2001-gcap-enzyme-response",
      "source": "cell:phototransduction-source-scope",
      "target": "cell:mendez2001-gcap-enzyme-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Different preparations and inference limits remain explicit; this relation does not assert physical sufficiency.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "id": "cellular:phototransduction-scope-cell-mendez2001-gcap-current-response",
      "source": "cell:phototransduction-source-scope",
      "target": "cell:mendez2001-gcap-current-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Different preparations and inference limits remain explicit; this relation does not assert physical sufficiency.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "id": "cellular:phototransduction-scope-cell-phototransduction-transfer-unresolved",
      "source": "cell:phototransduction-source-scope",
      "target": "cell:phototransduction-transfer-unresolved",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Different preparations and inference limits remain explicit; this relation does not assert physical sufficiency.",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "mendez2001-gcap-expression",
      "sourceId": "mendez2001-gcap",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.171308998",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "98",
      "issue": "17",
      "pages": "9948-9953",
      "system": "GCAP1/2 knockout and transgenic GCAP2 expression validation",
      "preparation": "Target both GCAP genes in 129SV/C57BL6-derived mice and compare retinal transcript/protein expression with wild-type, heterozygous and bovine GCAP2 transgenic genotypes.",
      "observable": "Retinal transcript/protein expression and genotype validation",
      "finding": "Double knockout removes detectable GCAP1/2 expression; transgenic GCAP2 is expressed at about twice endogenous GCAP2, so downstream rescue is not a dose-matched single-variable control.",
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type.",
        "All three contexts share this one publication. Restoration of maximal bulk activity does not imply restoration of single-cell kinetics."
      ],
      "readExtent": "complete-primary-html-main-methods-results-discussion-table-and-caption-reading",
      "reviewedLocators": [
        "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
        "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2"
      ],
      "metadataCheckedAt": "2026-10-21",
      "metadataUrl": "https://doi.org/10.1073/pnas.171308998",
      "correctionCheck": "Primary article and PMID 11493703 metadata were checked. Limited exact-title and DOI correction searches found no specific correction to this article; this is not an exhaustive registry or later-literature audit."
    },
    {
      "id": "mendez2001-gcap-enzyme",
      "sourceId": "mendez2001-gcap",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.171308998",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "98",
      "issue": "17",
      "pages": "9948-9953",
      "system": "Retinal homogenate and rod-outer-segment guanylate cyclase assays",
      "preparation": "Pool four dark-adapted retinas per genotype for homogenate assays; separately assay rod-outer-segment extracts. Compare low calcium (at most 50 nM) with 2 micromolar calcium, GCAP2 transgene and recombinant GCAP1 addition. Three experiments at least in duplicate are reported.",
      "observable": "Calcium-dependent guanylate cyclase activity in homogenate or outer-segment extracts",
      "finding": "Knockout removes detectable calcium dependence of GC activity, rather than removing the GC enzyme or all basal activity; GCAP2 transgene restores maximal homogenate activity and added recombinant GCAP1 restores calcium responsiveness in separate extracts.",
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type.",
        "All three contexts share this one publication. Restoration of maximal bulk activity does not imply restoration of single-cell kinetics."
      ],
      "readExtent": "complete-primary-html-main-methods-results-discussion-table-and-caption-reading",
      "reviewedLocators": [
        "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
        "Results: calcium-dependent guanylate cyclase activity; Figure 3"
      ],
      "metadataCheckedAt": "2026-10-21",
      "metadataUrl": "https://doi.org/10.1073/pnas.171308998",
      "correctionCheck": "Primary article and PMID 11493703 metadata were checked. Limited exact-title and DOI correction searches found no specific correction to this article; this is not an exhaustive registry or later-literature audit."
    },
    {
      "id": "mendez2001-gcap-current",
      "sourceId": "mendez2001-gcap",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.171308998",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "98",
      "issue": "17",
      "pages": "9948-9953",
      "system": "Dark-adapted single-rod current and incremental background response",
      "preparation": "Dark-adapt mice for at least 15 hours; suction-electrode recordings from single rods in perfused retinal pieces at 35-37 C, pH 7.4. Calibrated 500 nm 10 ms flashes; dim responses at most 20 percent of maximum. Estimate mean single-photon response by mean-variance scaling from at least 30 flashes; 520 nm steady backgrounds are applied about one minute before incremental flashes.",
      "observable": "Rod photocurrent, inferred unit response amplitude, peak/integration times and normalized incremental sensitivity",
      "finding": "GCAP knockout yields larger, slower dim-flash responses; GCAP2-only expression does not restore the early fast recovery even when maximal homogenate activity is restored. Bright-background incremental sensitivity falls sooner, while non-GCAP adaptation remains.",
      "limitations": [
        "No independent raw-data replay or new quantitative fit is claimed.",
        "This preparation does not establish a universal generative parent, carrier minimum or full end-to-end cellular transfer function.",
        "Complete published primary main HTML was read, including Methods, Results, Discussion, Table 1 and Figures 1-6 captions. Figure images were not digitized or quantitatively reanalysed; raw currents and supplementary materials were not independently replayed. Single-photon amplitudes are inferred using mean-variance scaling, not direct photon-by-photon event labels. Preparations within this publication are dependent and GCAP2 transgenic expression is not dose-matched to wild type.",
        "All three contexts share this one publication. Restoration of maximal bulk activity does not imply restoration of single-cell kinetics."
      ],
      "readExtent": "complete-primary-html-main-methods-results-discussion-table-and-caption-reading",
      "reviewedLocators": [
        "Materials and Methods: gene targeting, GCAP2 transgene, guanylate cyclase activity, single-rod electrophysiology and background sensitivity",
        "Results: altered rod flash sensitivity and kinetics; Figures 4-5 and Table 1",
        "Results: steady-background incremental sensitivity; Figure 6; Discussion on residual adaptation and GCAP-specific inference"
      ],
      "metadataCheckedAt": "2026-10-21",
      "metadataUrl": "https://doi.org/10.1073/pnas.171308998",
      "correctionCheck": "Primary article and PMID 11493703 metadata were checked. Limited exact-title and DOI correction searches found no specific correction to this article; this is not an exhaustive registry or later-literature audit."
    }
  ],
  "comparisons": [
    {
      "id": "cellular-gcap-bulk-versus-current-rescue",
      "candidate": "Restored maximal homogenate cyclase activity is insufficient to establish restored rod response kinetics.",
      "alternative": "Restoring the bulk enzyme assay necessarily restores the intact-cell response.",
      "sourceIds": [
        "mendez2001-gcap"
      ],
      "discriminator": "Compare GCAP2-only maximal activity in Figure 3 with early recovery and response kinetics in Figures 4-5; retain overexpression and distinct assay preparations.",
      "result": "conditional-support",
      "limit": "One dependent publication, distinct assay contexts and a non-dose-matched rescue. No independent replication or isolated kinetic mechanism is established.",
      "assumptions": [
        "The source-reported observations are accepted within the declared reading extent."
      ],
      "claimIds": [
        "C-cell-mendez2001-gcap-enzyme",
        "C-cell-mendez2001-gcap-current"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "cell:mendez2001-gcap-expression-preparation",
      "role": "experimental-context",
      "denotes": "Target both GCAP genes in 129SV/C57BL6-derived mice and compare retinal transcript/protein expression with wild-type, heterozygous and bovine GCAP2 transgenic genotypes.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-cell-mendez2001-gcap-expression"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-expression-response",
      "role": "scoped-phenomenon",
      "denotes": "Double knockout removes detectable GCAP1/2 expression; transgenic GCAP2 is expressed at about twice endogenous GCAP2, so downstream rescue is not a dose-matched single-variable control.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-cell-mendez2001-gcap-expression"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-expression-scope",
      "role": "definition",
      "denotes": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-enzyme-preparation",
      "role": "experimental-context",
      "denotes": "Pool four dark-adapted retinas per genotype for homogenate assays; separately assay rod-outer-segment extracts. Compare low calcium (at most 50 nM) with 2 micromolar calcium, GCAP2 transgene and recombinant GCAP1 addition. Three experiments at least in duplicate are reported.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-cell-mendez2001-gcap-enzyme"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-enzyme-response",
      "role": "scoped-phenomenon",
      "denotes": "Knockout removes detectable calcium dependence of GC activity, rather than removing the GC enzyme or all basal activity; GCAP2 transgene restores maximal homogenate activity and added recombinant GCAP1 restores calcium responsiveness in separate extracts.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-cell-mendez2001-gcap-enzyme"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-enzyme-scope",
      "role": "definition",
      "denotes": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-current-preparation",
      "role": "experimental-context",
      "denotes": "Dark-adapt mice for at least 15 hours; suction-electrode recordings from single rods in perfused retinal pieces at 35-37 C, pH 7.4. Calibrated 500 nm 10 ms flashes; dim responses at most 20 percent of maximum. Estimate mean single-photon response by mean-variance scaling from at least 30 flashes; 520 nm steady backgrounds are applied about one minute before incremental flashes.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-cell-mendez2001-gcap-current"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-current-response",
      "role": "scoped-phenomenon",
      "denotes": "GCAP knockout yields larger, slower dim-flash responses; GCAP2-only expression does not restore the early fast recovery even when maximal homogenate activity is restored. Bright-background incremental sensitivity falls sooner, while non-GCAP adaptation remains.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-cell-mendez2001-gcap-current"
      ]
    },
    {
      "nodeId": "cell:mendez2001-gcap-current-scope",
      "role": "definition",
      "denotes": "This assay retains its own preparation, observable and inference boundary; a separate biochemical or cell-current result is not the same acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-cell-phototransduction-scope"
      ]
    },
    {
      "nodeId": "cell:phototransduction-source-scope",
      "role": "definition",
      "denotes": "The original card is reconstructed through distinct source-bound preparations; full end-to-end transfer remains unresolved.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-cell-phototransduction-scope",
        "D-cell-fung-correction"
      ]
    },
    {
      "nodeId": "cell:phototransduction-transfer-unresolved",
      "role": "hypothesis",
      "denotes": "A complete gain/noise and membrane-voltage transfer function has not been established by the admitted preparations.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-cell-phototransduction-transfer-unresolved"
      ]
    }
  ]
};
export const CARD_SCOPES = [
  {
    "sourceIndex": 22,
    "originalName": "Phototransduction Cascade",
    "scope": "Separate biochemical activation, channel, intact-current and GCAP-feedback preparations; no universal cascade reconstruction.",
    "nodeIds": [
      "cell:mendez2001-gcap-expression-preparation",
      "cell:mendez2001-gcap-expression-response",
      "cell:mendez2001-gcap-expression-scope",
      "cell:mendez2001-gcap-enzyme-preparation",
      "cell:mendez2001-gcap-enzyme-response",
      "cell:mendez2001-gcap-enzyme-scope",
      "cell:mendez2001-gcap-current-preparation",
      "cell:mendez2001-gcap-current-response",
      "cell:mendez2001-gcap-current-scope",
      "cell:phototransduction-source-scope",
      "cell:phototransduction-transfer-unresolved"
    ],
    "claimIds": [
      "D-cell-phototransduction-scope",
      "C-cell-phototransduction-transfer-unresolved",
      "D-cell-fung-correction",
      "M-cell-mendez2001-gcap-expression",
      "C-cell-mendez2001-gcap-expression",
      "M-cell-mendez2001-gcap-enzyme",
      "C-cell-mendez2001-gcap-enzyme",
      "M-cell-mendez2001-gcap-current",
      "C-cell-mendez2001-gcap-current"
    ],
    "assertions": [
      {
        "topic": "Photochemical initiation, G-protein/enzyme amplification and cGMP conductance",
        "disposition": "qualified",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "D-cell-fung-correction"
        ],
        "reason": "The retained Baylor, Fung and Fesenko pilot sources are abstract-only and arise from separate preparations; the Fung correction explicitly distinguishes reconstitution stages."
      },
      {
        "topic": "Adaptive feedback, gain and temporal shaping",
        "disposition": "supported",
        "claimIds": [
          "C-cell-mendez2001-gcap-current"
        ],
        "reason": "Mouse GCAP knockout and non-dose-matched GCAP2 expression alter scoped current sensitivity and kinetics; residual adaptation remains."
      },
      {
        "topic": "Noise suppression, membrane voltage, robust downstream coding and complete multistage transfer",
        "disposition": "unresolved",
        "claimIds": [
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "Current recordings and the admitted separate component assays do not jointly establish these complete-system properties."
      }
    ],
    "parentDispositions": [
      {
        "parentCode": "3.49",
        "disposition": "qualified",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "A category-level necessary/enabling parent is not admitted. Related molecular functions have preparation-specific evidence; no universal necessity or inherited quantitative dependency follows."
      },
      {
        "parentCode": "3.15",
        "disposition": "qualified",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "A category-level necessary/enabling parent is not admitted. Related molecular functions have preparation-specific evidence; no universal necessity or inherited quantitative dependency follows."
      },
      {
        "parentCode": "3.1",
        "disposition": "qualified",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "A category-level necessary/enabling parent is not admitted. Related molecular functions have preparation-specific evidence; no universal necessity or inherited quantitative dependency follows."
      },
      {
        "parentCode": "3.3",
        "disposition": "qualified",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "A category-level necessary/enabling parent is not admitted. Related molecular functions have preparation-specific evidence; no universal necessity or inherited quantitative dependency follows."
      },
      {
        "parentCode": "4.21",
        "disposition": "unresolved",
        "claimIds": [
          "D-cell-phototransduction-scope",
          "C-cell-phototransduction-transfer-unresolved"
        ],
        "reason": "A category-level necessary/enabling parent is not admitted. Related molecular functions have preparation-specific evidence; no universal necessity or inherited quantitative dependency follows."
      }
    ],
    "excludedDefaults": [
      "Phase, role/science/requirement codes are catalogue metadata, not measured laws.",
      "All inherited parent weights, causal-direction/interaction-mode codes, necessity/dependency labels, carrier codes and N_min/N_crit/N_sat defaults are excluded from active semantics.",
      "Established status does not replace preparation-specific evidence."
    ],
    "unresolved": [
      "Matched end-to-end gain/noise transfer, actual membrane-voltage and downstream coding outcomes.",
      "Specific GCAP1 necessity requires further experiments; GCAP2-only rescue is not expression-matched."
    ]
  }
];
