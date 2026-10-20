// Exact reuse of finite pathway and construct-dependent folding evidence.
export const BIOCHEMICAL_SOURCE_REUSE_RECORDS = {
  "sources": [
    {
      "id": "legacy-3",
      "kind": "legacy-catalogue",
      "title": "Original Level 3 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-3.json",
      "sha256": "baf02946627ee18978d017f897d17a1f63c1dee96f641b5b3260d115d7e695c1",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "fung1981",
      "kind": "research-publication",
      "title": "Flow of information in the light-triggered cyclic nucleotide cascade of vision",
      "authors": [
        "B K Fung",
        "J B Hurley",
        "L Stryer"
      ],
      "year": 1981,
      "doi": "10.1073/pnas.78.1.152",
      "url": "https://pubmed.ncbi.nlm.nih.gov/6264430/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "abstract-and-bibliographic-metadata",
        "locators": [
          "Abstract"
        ],
        "limit": "These assays do not measure a complete electrical response or establish a universal cascade gain."
      }
    },
    {
      "id": "tuinstra2008-lymphotactin-folds",
      "kind": "research-publication",
      "title": "Interconversion between two unrelated protein folds in the lymphotactin native state",
      "authors": [
        "Robbyn L. Tuinstra",
        "Francis C. Peterson",
        "Snjezana Kutlesa",
        "E. Sonay Elgin",
        "Michael A. Kron",
        "Brian F. Volkman"
      ],
      "year": 2008,
      "doi": "10.1073/pnas.0709518105",
      "url": "https://acikerisim.mu.edu.tr/xmlui/bitstream/handle/20.500.12809/4972/Elgin.pdf?isAllowed=y&sequence=1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-six-page-main-article-supplement-unread",
        "locators": [
          "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
        ],
        "limit": "Read the full published article, pages 5057-5062, including figure captions and Methods, from the institutional repository PDF carrying the 30 April 2021 library-download stamp. Main text only: online supporting information, original raw NMR data, prior 2001/2002/2007 acquisitions and PDB restraint validation were not newly read/replayed. NMR coordinates are constrained inferences and molecular-dynamics refinement is part of the same structural analysis, not a separate independent experiment. Methods first lists M63A/M72A and then M63V/M72A for the functional construct; this internal difference remains unresolved. The published issue header says 1 April 2008, while PMC reports early online 25 March 2008; Crossref gives April 2008. Crossref title/authors/volume/issue/pages checked on 2026-10-20, and PMC PMID 18364395/PMCID PMC2278211 identity compared. No explicit erratum found in limited title/DOI/publisher searches; Crossref has review relations but no update relation. This is not proof of correction absence."
      }
    }
  ],
  "claims": [
    {
      "id": "D-bio-signal-response-boundary",
      "kind": "review-finding",
      "statement": "Distinguish a supplied biochemical pathway preparation, input-dependent molecular activation, downstream enzyme response and any separate electrical readout. One local response does not identify an entire network or a universal transfer gain.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract",
          "role": "supports",
          "note": "Reuse the existing abstract-only retinal source and the same fung1981 preparation. No full-text extension, new acquisition or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ]
    },
    {
      "id": "M-bio-fung-signal-source-scope",
      "kind": "method",
      "statement": "Reuse only the recorded Fung abstract, preparation and two biochemical observables. Preserve the original reading limit and separate molecular activity from electrical response and any larger pathway model.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract",
          "role": "method",
          "note": "Reuse the existing abstract-only retinal source and the same fung1981 preparation. No full-text extension, new acquisition or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "contextIds": [
        "fung1981"
      ]
    },
    {
      "id": "C-bio-signal-transduction-source-scope",
      "kind": "review-finding",
      "statement": "The existing Fung preparation supports a finite light-dependent transducin/PDE biochemical response. This is a local signal-transduction example; network topology, universal amplification and adaptive control are separate unmeasured claims.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract",
          "role": "supports",
          "note": "Reuse the existing abstract-only retinal source and the same fung1981 preparation. No full-text extension, new acquisition or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "contextIds": [
        "fung1981"
      ]
    },
    {
      "id": "D-bio-sequence-fold-function-boundary",
      "kind": "review-finding",
      "statement": "Distinguish polymer sequence, environment-conditioned conformations, source structural models and functional response assays. A construct comparison can change both sequence and conformation; inherited sequence, catalytic persistence and selective amplification require their own measurements.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "WT sequence supports alternative condition-dependent folds; sequence alone is not a guarantee of one native structure. Temperature, salt, ligand, partner and engineered construct context jointly condition the observations.",
        "CC3 and W55D change sequence and conformation together. These comparisons support finite construct/structure/function associations, not an isolated quantitative sequence-to-fold causal law, a universal prediction bound or every protein/RNA sequence.",
        "No sequence replication, transmission, mutation-rate estimate, heritable biochemical role, repeated selective amplification or prebiotic population is measured. Functional assay differences are not organismal fitness or inherited information.",
        "Template complementarity concerns a separate nucleic-acid preparation and is not a necessary precursor for protein folding. The separate atom/surface dispersion and reaction-energy conventions do not supply matched causal ancestors or measured contributions to this sequence-conditioned fold.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ]
    },
    {
      "id": "M-bio-sequence-fold-function-reuse",
      "kind": "method",
      "statement": "Interpret the existing Tuinstra WT/CC3/W55D structural and response comparisons with their construct, assay, solution and unresolved identity limits. Do not isolate conformation or sequence when both change.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "method",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "method",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "method",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "WT sequence supports alternative condition-dependent folds; sequence alone is not a guarantee of one native structure. Temperature, salt, ligand, partner and engineered construct context jointly condition the observations.",
        "CC3 and W55D change sequence and conformation together. These comparisons support finite construct/structure/function associations, not an isolated quantitative sequence-to-fold causal law, a universal prediction bound or every protein/RNA sequence.",
        "No sequence replication, transmission, mutation-rate estimate, heritable biochemical role, repeated selective amplification or prebiotic population is measured. Functional assay differences are not organismal fitness or inherited information.",
        "Template complementarity concerns a separate nucleic-acid preparation and is not a necessary precursor for protein folding. The separate atom/surface dispersion and reaction-energy conventions do not supply matched causal ancestors or measured contributions to this sequence-conditioned fold.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    },
    {
      "id": "C-bio-sequence-dependent-folding-scope",
      "kind": "review-finding",
      "statement": "The reused lymphotactin study links named WT/engineered constructs, condition-sensitive NMR folds and distinct calcium/heparin responses. This supports a bounded sequence/structure/function association with environment and partners explicit; neither unique-fold determinism nor selective inheritance follows.",
      "scope": "The named reused preparation and original reviewed passages only; no new acquisition or expanded reading.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "supports",
          "note": "Exact reuse of the admitted lymphotactin experiment and its reviewed primary passages; no additional acquisition or independent sequence-only intervention."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "WT sequence supports alternative condition-dependent folds; sequence alone is not a guarantee of one native structure. Temperature, salt, ligand, partner and engineered construct context jointly condition the observations.",
        "CC3 and W55D change sequence and conformation together. These comparisons support finite construct/structure/function associations, not an isolated quantitative sequence-to-fold causal law, a universal prediction bound or every protein/RNA sequence.",
        "No sequence replication, transmission, mutation-rate estimate, heritable biochemical role, repeated selective amplification or prebiotic population is measured. Functional assay differences are not organismal fitness or inherited information.",
        "Template complementarity concerns a separate nucleic-acid preparation and is not a necessary precursor for protein folding. The separate atom/surface dispersion and reaction-energy conventions do not supply matched causal ancestors or measured contributions to this sequence-conditioned fold.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    },
    {
      "id": "P-fung1981",
      "kind": "review-finding",
      "statement": "Light-dependent transducin activation and activated-subunit PDE stimulation support a specified biochemical mechanism.",
      "scope": "Optical/retinal pilot; contexts fung1981",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract",
          "role": "supports",
          "note": "Support is restricted to the recorded preparation, read extent and observable."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These assays do not measure a complete electrical response or establish a universal cascade gain."
      ],
      "contextIds": [
        "fung1981"
      ]
    },
    {
      "id": "M-bio-tuinstra2008-lymphotactin-context",
      "kind": "method",
      "statement": "Use recombinant human lymphotactin for NMR, including Ltn(2-93), and native-N-terminal functional constructs with the source stated methionine substitutions, plus engineered CC3 and W55D variants. Acquire NMR in 20 mM sodium phosphate, pH 6.0, 90% H2O/10% D2O; vary temperature and NaCl as specified. Infer Ltn40 structure at 40 C without added NaCl using chemical shifts, NOEs, isotope-filtered intermonomer contacts and restrained refinement. Compare XCR1-expressing HEK293-cell calcium responses normalized to carbachol, heparin chromatography/titration and WT versus CC3 responses with and without heparin.",
      "scope": "Selected prepared protein system and source-reported observable/inference only.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "method",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "method",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "method",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    },
    {
      "id": "C-bio-lymphotactin-nmr-folds",
      "kind": "review-finding",
      "statement": "The source reports two WT Ltn NMR signal sets and exchange peaks, with temperature/salt shifting the populations. Its NOE-constrained Ltn40 model is a dimeric four-stranded beta-sheet arrangement distinct from the chemokine-like Ltn10 monomer. This supplies a finite example against a universal single-fold assignment, while atomic contacts and secondary-structure rearrangements remain structural inferences from spectra and restraints.",
      "scope": "Selected prepared protein system and source-reported observable/inference only.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "The near-equal populations at 37 C/150 mM NaCl and approximately 100 ms interconversion description include prior-work inputs. No new midpoint, exchange-rate fit or uncertainty is reconstructed here.",
        "The deposited Ltn40 ensemble includes residues 1-60; disordered residues 61-93 were excluded from water refinement. A precise ensemble is not a unique fully resolved conformation of every residue.",
        "Statements about replacement of hydrogen bonds and hydrophobic contacts follow structural comparison; they are not direct real-time measurements of each bond or an isolated energetic partition."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    },
    {
      "id": "C-bio-lymphotactin-functional-readouts",
      "kind": "review-finding",
      "statement": "WT and the chemokine-fold-stabilized CC3 variant elicit the reported XCR1 calcium response; W55D, whose NMR resembles Ltn40, has no reported agonist response over 50-750 nM. Heparin chromatography and mixed-variant titration distinguish stronger W55D/Ltn40-like interaction from CC3/Ltn10-like interaction. These are assay- and construct-bounded function/structure associations, not proof that a conformation has a unique biochemical function in every environment.",
      "scope": "Selected prepared protein system and source-reported observable/inference only.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    },
    {
      "id": "C-bio-lymphotactin-heparin-response",
      "kind": "review-finding",
      "statement": "Adding heparin shifts WT Trp55 fluorescence toward the Ltn40-like spectrum and suppresses the WT XCR1 calcium response in the source comparison; CC3 fluorescence and signaling resist that effect, and subsequent CC3 addition activates the same cells. The ligand intervention therefore changes the measured functional response in this preparation; a shift of the structural equilibrium is the supported source interpretation.",
      "scope": "Selected prepared protein system and source-reported observable/inference only.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references",
          "role": "supports",
          "note": "Actually read primary article passage; published acquisition, fitted inference and stated method limits retain separate roles. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "Fluorescence is an environment-sensitive proxy and calcium flux is a cellular downstream readout, not direct visualization of receptor binding or an atomic movie of folding.",
        "Heparin species, binding/aggregation and solution conditions matter; the source restores the Ltn10-like spectrum by 1 M NaCl, which changes additional solution variables.",
        "The mechanism that releases matrix-bound Ltn40 and converts it to active Ltn10 in vivo is explicitly unresolved; no general allostery law or leukocyte-migration mechanism is inferred."
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:signal-response-boundary",
      "name": "Biochemical signal-response boundary",
      "kind": "definition",
      "description": "Distinguish a supplied biochemical pathway preparation, input-dependent molecular activation, downstream enzyme response and any separate electrical readout. One local response does not identify an entire network or a universal transfer gain.",
      "claimIds": [
        "D-bio-signal-response-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:fung-signal-context",
      "name": "Reused transducin/PDE biochemical context",
      "kind": "context",
      "description": "Reuse only the recorded Fung abstract, preparation and two biochemical observables. Preserve the original reading limit and separate molecular activity from electrical response and any larger pathway model.",
      "claimIds": [
        "M-bio-fung-signal-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "fung1981",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:signal-transduction-source-scope",
      "name": "Scoped transducin/PDE signal transduction",
      "kind": "scoped-process",
      "description": "The existing Fung preparation supports a finite light-dependent transducin/PDE biochemical response. This is a local signal-transduction example; network topology, universal amplification and adaptive control are separate unmeasured claims.",
      "claimIds": [
        "C-bio-signal-transduction-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/15"
        },
        {
          "sourceId": "fung1981",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "The source remains abstract-and-bibliographic-metadata only. Rod species, full concentrations, preparation controls, complete kinetics and uncertainty are not resolved here.",
        "The admitted observations are the existing light-dependent transducin activation and activated-subunit PDE stimulation. They do not measure a complete electrical response, universal gain, branching topology, input integration or adaptive feedback.",
        "Separate spectroscopy, rod electrical recordings, cGMP patch conductance and modern vesicle-energy experiments are not one matched end-to-end preparation. No proto-cellular signalling system, general information channel, reversible-modification cycle or complete regulatory motif is established.",
        "Folded components and biochemical activity occur in the supplied preparation; their formation is not measured. The original folding/catalysis parents do not become universal prerequisites. Metabolic cycles and the separate CAPN allosteric experiments supply no measured mediating pathway in this retinal preparation.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:sequence-fold-function-boundary",
      "name": "Sequence, conformation and function boundary",
      "kind": "definition",
      "description": "Distinguish polymer sequence, environment-conditioned conformations, source structural models and functional response assays. A construct comparison can change both sequence and conformation; inherited sequence, catalytic persistence and selective amplification require their own measurements.",
      "claimIds": [
        "D-bio-sequence-fold-function-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "WT sequence supports alternative condition-dependent folds; sequence alone is not a guarantee of one native structure. Temperature, salt, ligand, partner and engineered construct context jointly condition the observations.",
        "CC3 and W55D change sequence and conformation together. These comparisons support finite construct/structure/function associations, not an isolated quantitative sequence-to-fold causal law, a universal prediction bound or every protein/RNA sequence.",
        "No sequence replication, transmission, mutation-rate estimate, heritable biochemical role, repeated selective amplification or prebiotic population is measured. Functional assay differences are not organismal fitness or inherited information.",
        "Template complementarity concerns a separate nucleic-acid preparation and is not a necessary precursor for protein folding. The separate atom/surface dispersion and reaction-energy conventions do not supply matched causal ancestors or measured contributions to this sequence-conditioned fold.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:sequence-dependent-folding-scope",
      "name": "Conditional sequence/fold/function scope",
      "kind": "scoped-process",
      "description": "The reused lymphotactin study links named WT/engineered constructs, condition-sensitive NMR folds and distinct calcium/heparin responses. This supports a bounded sequence/structure/function association with environment and partners explicit; neither unique-fold determinism nor selective inheritance follows.",
      "claimIds": [
        "C-bio-sequence-dependent-folding-scope",
        "M-bio-sequence-fold-function-reuse"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/42"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "WT sequence supports alternative condition-dependent folds; sequence alone is not a guarantee of one native structure. Temperature, salt, ligand, partner and engineered construct context jointly condition the observations.",
        "CC3 and W55D change sequence and conformation together. These comparisons support finite construct/structure/function associations, not an isolated quantitative sequence-to-fold causal law, a universal prediction bound or every protein/RNA sequence.",
        "No sequence replication, transmission, mutation-rate estimate, heritable biochemical role, repeated selective amplification or prebiotic population is measured. Functional assay differences are not organismal fitness or inherited information.",
        "Template complementarity concerns a separate nucleic-acid preparation and is not a necessary precursor for protein folding. The separate atom/surface dispersion and reaction-energy conventions do not supply matched causal ancestors or measured contributions to this sequence-conditioned fold.",
        "Catalogue level, phase, type/science/status and requirement codes are representation choices. Parent weights, necessity, directions/modes, carrier counts/minima and null saturation are not measured causal fractions, universal thresholds or a verified construction sequence. Generic evidence placeholders supply no additional publication or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:tuinstra2008-lymphotactin-context",
      "name": "Lymphotactin NMR, engineered-variant and heparin-control context",
      "kind": "context",
      "description": "Use recombinant human lymphotactin for NMR, including Ltn(2-93), and native-N-terminal functional constructs with the source stated methionine substitutions, plus engineered CC3 and W55D variants. Acquire NMR in 20 mM sodium phosphate, pH 6.0, 90% H2O/10% D2O; vary temperature and NaCl as specified. Infer Ltn40 structure at 40 C without added NaCl using chemical shifts, NOEs, isotope-filtered intermonomer contacts and restrained refinement. Compare XCR1-expressing HEK293-cell calcium responses normalized to carbachol, heparin chromatography/titration and WT versus CC3 responses with and without heparin.",
      "claimIds": [
        "M-bio-tuinstra2008-lymphotactin-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied."
      ],
      "level": 3
    },
    {
      "id": "bio:lymphotactin-nmr-folds",
      "name": "Condition-dependent lymphotactin spectra and alternative fold inference",
      "kind": "scoped-structure",
      "description": "The source reports two WT Ltn NMR signal sets and exchange peaks, with temperature/salt shifting the populations. Its NOE-constrained Ltn40 model is a dimeric four-stranded beta-sheet arrangement distinct from the chemokine-like Ltn10 monomer. This supplies a finite example against a universal single-fold assignment, while atomic contacts and secondary-structure rearrangements remain structural inferences from spectra and restraints.",
      "claimIds": [
        "C-bio-lymphotactin-nmr-folds"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "The near-equal populations at 37 C/150 mM NaCl and approximately 100 ms interconversion description include prior-work inputs. No new midpoint, exchange-rate fit or uncertainty is reconstructed here.",
        "The deposited Ltn40 ensemble includes residues 1-60; disordered residues 61-93 were excluded from water refinement. A precise ensemble is not a unique fully resolved conformation of every residue.",
        "Statements about replacement of hydrogen bonds and hydrophobic contacts follow structural comparison; they are not direct real-time measurements of each bond or an isolated energetic partition."
      ],
      "level": 3
    },
    {
      "id": "bio:lymphotactin-functional-readouts",
      "name": "Lymphotactin variant-dependent XCR1 and heparin readouts",
      "kind": "scoped-process",
      "description": "WT and the chemokine-fold-stabilized CC3 variant elicit the reported XCR1 calcium response; W55D, whose NMR resembles Ltn40, has no reported agonist response over 50-750 nM. Heparin chromatography and mixed-variant titration distinguish stronger W55D/Ltn40-like interaction from CC3/Ltn10-like interaction. These are assay- and construct-bounded function/structure associations, not proof that a conformation has a unique biochemical function in every environment.",
      "claimIds": [
        "C-bio-lymphotactin-functional-readouts"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset."
      ],
      "level": 3
    },
    {
      "id": "bio:lymphotactin-heparin-response",
      "name": "Controlled heparin-dependent lymphotactin signaling change",
      "kind": "scoped-process",
      "description": "Adding heparin shifts WT Trp55 fluorescence toward the Ltn40-like spectrum and suppresses the WT XCR1 calcium response in the source comparison; CC3 fluorescence and signaling resist that effect, and subsequent CC3 addition activates the same cells. The ligand intervention therefore changes the measured functional response in this preparation; a shift of the structural equilibrium is the supported source interpretation.",
      "claimIds": [
        "C-bio-lymphotactin-heparin-response"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls"
        },
        {
          "sourceId": "tuinstra2008-lymphotactin-folds",
          "locator": "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
        }
      ],
      "openObligations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "Fluorescence is an environment-sensitive proxy and calcium flux is a cellular downstream readout, not direct visualization of receptor binding or an atomic movie of folding.",
        "Heparin species, binding/aggregation and solution conditions matter; the source restores the Ltn10-like spectrum by 1 M NaCl, which changes additional solution variables.",
        "The mechanism that releases matrix-bound Ltn40 and converts it to active Ltn10 in vivo is explicitly unresolved; no general allostery law or leukocyte-migration mechanism is inferred."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:fung-context-signal-scope",
      "source": "bio:fung-signal-context",
      "target": "bio:signal-transduction-source-scope",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The existing abstract-level biochemical preparation bounds the local signal-response interpretation.",
      "claimIds": [
        "M-bio-fung-signal-source-scope",
        "C-bio-signal-transduction-source-scope",
        "D-bio-signal-response-boundary"
      ],
      "contextIds": [
        "fung1981"
      ]
    },
    {
      "id": "biochemistry:lymphotactin-functional-sequence-scope",
      "source": "bio:lymphotactin-functional-readouts",
      "target": "bio:sequence-dependent-folding-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional sequence/fold/function scope reuses the actual construct-bounded response evidence.",
      "claimIds": [
        "C-bio-sequence-dependent-folding-scope",
        "M-bio-sequence-fold-function-reuse"
      ],
      "contextIds": [
        "tuinstra2008-lymphotactin-folds"
      ]
    }
  ],
  "studies": [
    {
      "id": "fung1981",
      "sourceId": "fung1981",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.78.1.152",
      "pmid": "6264430",
      "journal": "Proceedings of the National Academy of Sciences of the United States of America",
      "volume": "78",
      "issue": "1",
      "pages": "152-156",
      "organism": "Rod-derived material; species not resolved from the reviewed abstract",
      "preparation": "Reconstituted membranes, nucleotide binding and isolated activated transducin subunits",
      "observable": "GTP-analogue binding and phosphodiesterase activation",
      "finding": "Light-dependent transducin activation and activated-subunit PDE stimulation support a specified biochemical mechanism.",
      "limitations": [
        "These assays do not measure a complete electrical response or establish a universal cascade gain."
      ],
      "readExtent": "abstract-and-bibliographic-metadata",
      "reviewedLocators": [
        "Abstract"
      ],
      "metadataCheckedAt": "2026-09-12",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/6264430/",
      "correctionCheck": "Returned Europe PMC core metadata inspected for comment/correction links; this is not an exhaustive correction or retraction search."
    },
    {
      "id": "tuinstra2008-lymphotactin-folds",
      "sourceId": "tuinstra2008-lymphotactin-folds",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0709518105",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "105",
      "issue": "13",
      "pages": "5057-5062",
      "system": "Recombinant human lymphotactin, engineered CC3/W55D variants, heparin and XCR1-expressing HEK293 cells",
      "preparation": "Use recombinant human lymphotactin for NMR, including Ltn(2-93), and native-N-terminal functional constructs with the source stated methionine substitutions, plus engineered CC3 and W55D variants. Acquire NMR in 20 mM sodium phosphate, pH 6.0, 90% H2O/10% D2O; vary temperature and NaCl as specified. Infer Ltn40 structure at 40 C without added NaCl using chemical shifts, NOEs, isotope-filtered intermonomer contacts and restrained refinement. Compare XCR1-expressing HEK293-cell calcium responses normalized to carbachol, heparin chromatography/titration and WT versus CC3 responses with and without heparin.",
      "observable": "Solution NMR spectra/exchange peaks/NOE restraints, fluorescence, heparin elution/precipitation and cellular calcium response",
      "finding": "The published spectra/structure analysis supports condition-dependent alternative folds; mutation/ligand-controlled assays constrain their functional interpretation without isolating conformation from every sequence or solution change.",
      "limitations": [
        "Structural and cellular assays use different solution and construct settings. They do not image both WT functional folds acting simultaneously in an intact animal.",
        "The Methods lists M63A/M72A then M63V/M72A; this inconsistency is retained rather than silently choosing a construct. Prior construct validation was cited but not independently read.",
        "Supporting Information Table S1/Figure S1, raw restraint files and earlier 2001/2002/2007 experiments were not independently reviewed. No new NMR structure solution or full statistical uncertainty is supplied.",
        "Observation and inferred structural/kinetic quantities share the same source study. No separate computational replication is created from fitting or molecular refinement.",
        "The near-equal populations at 37 C/150 mM NaCl and approximately 100 ms interconversion description include prior-work inputs. No new midpoint, exchange-rate fit or uncertainty is reconstructed here.",
        "The deposited Ltn40 ensemble includes residues 1-60; disordered residues 61-93 were excluded from water refinement. A precise ensemble is not a unique fully resolved conformation of every residue.",
        "Statements about replacement of hydrogen bonds and hydrophobic contacts follow structural comparison; they are not direct real-time measurements of each bond or an isolated energetic partition.",
        "CC3 adds a disulfide and W55D replaces a core residue; the comparison changes sequence and conformation together, so it does not isolate a pure conformational intervention on identical WT sequence.",
        "In the mixed-variant titration W55D NMR signals disappear through complex precipitation. That result is not a fitted soluble binding constant or proof of literally zero CC3 affinity.",
        "Reported primary T-cell chemotaxis is data-not-shown; the present admission uses the plotted calcium and binding assays, not a newly inspected chemotaxis dataset.",
        "Fluorescence is an environment-sensitive proxy and calcium flux is a cellular downstream readout, not direct visualization of receptor binding or an atomic movie of folding.",
        "Heparin species, binding/aggregation and solution conditions matter; the source restores the Ltn10-like spectrum by 1 M NaCl, which changes additional solution variables.",
        "The mechanism that releases matrix-bound Ltn40 and converts it to active Ltn10 in vivo is explicitly unresolved; no general allostery law or leukocyte-migration mechanism is inferred.",
        "This interpretation neither clones the structural refinement into an independent experiment nor certifies direct physiological switching in vivo."
      ],
      "readExtent": "complete-published-six-page-main-article-supplement-unread",
      "reviewedLocators": [
        "Published pages 5057-5058, Results and Figures 1-2: condition-dependent Ltn NMR spectra, exchange peaks and restrained Ltn40 dimer structure",
        "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
        "Published page 5061, Discussion and Methods: unresolved in-vivo switching mechanism, recombinant constructs, cellular assays, NMR acquisition and computational structure refinement; page 5062 references"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0709518105",
      "correctionCheck": "Read the full published article, pages 5057-5062, including figure captions and Methods, from the institutional repository PDF carrying the 30 April 2021 library-download stamp. Main text only: online supporting information, original raw NMR data, prior 2001/2002/2007 acquisitions and PDB restraint validation were not newly read/replayed. NMR coordinates are constrained inferences and molecular-dynamics refinement is part of the same structural analysis, not a separate independent experiment. Methods first lists M63A/M72A and then M63V/M72A for the functional construct; this internal difference remains unresolved. The published issue header says 1 April 2008, while PMC reports early online 25 March 2008; Crossref gives April 2008. Crossref title/authors/volume/issue/pages checked on 2026-10-20, and PMC PMID 18364395/PMCID PMC2278211 identity compared. No explicit erratum found in limited title/DOI/publisher searches; Crossref has review relations but no update relation. This is not proof of correction absence."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:signal-response-boundary",
      "role": "definition",
      "denotes": "Distinguish a supplied biochemical pathway preparation, input-dependent molecular activation, downstream enzyme response and any separate electrical readout. One local response does not identify an entire network or a universal transfer gain.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-signal-response-boundary"
      ]
    },
    {
      "nodeId": "bio:fung-signal-context",
      "role": "experimental-context",
      "denotes": "Reuse only the recorded Fung abstract, preparation and two biochemical observables. Preserve the original reading limit and separate molecular activity from electrical response and any larger pathway model.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-fung-signal-source-scope"
      ]
    },
    {
      "nodeId": "bio:signal-transduction-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The existing Fung preparation supports a finite light-dependent transducin/PDE biochemical response. This is a local signal-transduction example; network topology, universal amplification and adaptive control are separate unmeasured claims.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-signal-transduction-source-scope"
      ]
    },
    {
      "nodeId": "bio:sequence-fold-function-boundary",
      "role": "definition",
      "denotes": "Distinguish polymer sequence, environment-conditioned conformations, source structural models and functional response assays. A construct comparison can change both sequence and conformation; inherited sequence, catalytic persistence and selective amplification require their own measurements.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-sequence-fold-function-boundary"
      ]
    },
    {
      "nodeId": "bio:sequence-dependent-folding-scope",
      "role": "scoped-phenomenon",
      "denotes": "The reused lymphotactin study links named WT/engineered constructs, condition-sensitive NMR folds and distinct calcium/heparin responses. This supports a bounded sequence/structure/function association with environment and partners explicit; neither unique-fold determinism nor selective inheritance follows.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-sequence-dependent-folding-scope",
        "M-bio-sequence-fold-function-reuse"
      ]
    },
    {
      "nodeId": "bio:tuinstra2008-lymphotactin-context",
      "role": "experimental-context",
      "denotes": "Lymphotactin NMR, engineered-variant and heparin-control context within the declared protein, preparation, readout and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-tuinstra2008-lymphotactin-context"
      ]
    },
    {
      "nodeId": "bio:lymphotactin-nmr-folds",
      "role": "scoped-phenomenon",
      "denotes": "Condition-dependent lymphotactin spectra and alternative fold inference within the declared protein, preparation, readout and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-lymphotactin-nmr-folds"
      ]
    },
    {
      "nodeId": "bio:lymphotactin-functional-readouts",
      "role": "scoped-phenomenon",
      "denotes": "Lymphotactin variant-dependent XCR1 and heparin readouts within the declared protein, preparation, readout and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-lymphotactin-functional-readouts"
      ]
    },
    {
      "nodeId": "bio:lymphotactin-heparin-response",
      "role": "scoped-phenomenon",
      "denotes": "Controlled heparin-dependent lymphotactin signaling change within the declared protein, preparation, readout and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-lymphotactin-heparin-response"
      ]
    }
  ]
};
