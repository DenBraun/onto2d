// Exact source preparations and finite response/interpretation boundaries.
export const REDOX_PH_RECORDS = {
  "sources": [
    {
      "id": "gutscher2008-grx-rogfp2-redox",
      "kind": "research-publication",
      "title": "Real-time imaging of the intracellular glutathione redox potential",
      "authors": [
        "Marcus Gutscher",
        "Anne-Laure Pauleau",
        "Laurent Marty",
        "Thorsten Brach",
        "Guido H. Wabnitz",
        "Yvonne Samstag",
        "Andreas J. Meyer",
        "Tobias P. Dick"
      ],
      "year": 2008,
      "doi": "10.1038/nmeth.1212",
      "url": "https://www.nature.com/articles/nmeth.1212",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-original-main-results-methods-and-figure-captions",
        "locators": [
          "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods"
        ],
        "limit": "Read selected original main scientific text, Results, Discussion, Methods and Figure 1-2 captions from the seven-page original Nature Methods PDF hosted as an author-profile mirror. The source also contains other applications; apoptosis, macrophage, T-cell and inferred disease claims are not admitted here. Supplementary Figures 1-10, Supplementary Methods, movies and raw data were not independently acquired. The main-text pH-insensitivity and additional-selectivity statements that point to supplements remain source reports, not separately audited calibration controls. Text extraction has micro-unit glyph artifacts; no doses, trace-digitized values, absolute potentials or numerical effect sizes are newly admitted. A full visual figure/equation audit and complete supplementary reading are not claimed. Actual mirror: https://www.researchgate.net/profile/Tobias-Dick/publication/5381370_Real-time_imaging_of_the_intracellular_glutathione_redox_potential/links/09e41508a77f5e0d27000000/Real-time-imaging-of-the-intracellular-glutathione-redox-potential.pdf Checked 2026-10-20 against original PDF header, primary Nature indexed publication record and PubMed 18469822. Title, eight authors, DOI 10.1038/nmeth.1212, Nature Methods 5(6),553-559 agree. Published online 11 May 2008 is distinct from June 2008 issue. Limited exact-DOI/title correction/retraction searches surfaced no explicit correction or retraction; this is not proof of absence or exhaustive later-literature coverage. No DOI-registry relation audit is claimed."
      }
    },
    {
      "id": "isom2018-yeast-glucose-ph",
      "kind": "research-publication",
      "title": "Coordinated regulation of intracellular pH by two glucose-sensing pathways in yeast",
      "authors": [
        "Daniel G. Isom",
        "Stephani C. Page",
        "Leonard B. Collins",
        "Nicholas J. Kapolka",
        "Geoffrey J. Taghon",
        "Henrik G. Dohlman"
      ],
      "year": 2018,
      "doi": "10.1074/jbc.RA117.000422",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5818193/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-original-main-results-methods-and-figure-captions",
        "locators": [
          "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
          "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption",
          "J. Biol. Chem. 293(7), 2318-2329, Discussion: proposed Gpa2 positive-feedback interpretation; Results and Methods: essential-gene exclusions, pH standard-curve reference and 30-second dead time"
        ],
        "limit": "Read original PMC scientific text, Results, Discussion, Experimental procedures and Figure 1-5 captions, concentrating on intracellular pH time courses and genetic perturbations. The pH Methods explicitly uses a standard curve and cites its earlier detailed calibration procedure; that upstream procedure and raw calibration points were not newly acquired or independently replayed. Supplemental Tables S1-S4, raw fluorescence traces and source software were not independently reviewed. Structural informatics, purified Gpa2 unfolding, metabolite MS and broad inverse-agonism/feedback models are not newly admitted acquisitions. No absolute pH values or numerical effect-size fits are extracted from figure images. This is selected relevant-passage reading, not a claim that every source or supplement cited by the article has been reviewed. Checked 2026-10-20 against original PMC full-text metadata, primary indexed JBC PDF header and PubMed 29284676. Title, six authors, DOI 10.1074/jbc.RA117.000422, J. Biol. Chem. 293(7),2318-2329 agree. Papers-in-Press date 28 December 2017 is distinct from 16 February 2018 issue. Limited exact-DOI/title correction/retraction searches surfaced no explicit correction or retraction; this does not prove absence or exhaustive later-literature coverage. No DOI-registry relation audit is claimed."
      }
    },
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
    }
  ],
  "claims": [
    {
      "id": "D-bio-grx-redox-reporter",
      "kind": "review-finding",
      "statement": "Grx1-roGFP2 reports the optical oxidation state of a glutathione-coupled fusion sensor in the sampled cellular region. A fluorescence ratio is not a direct GSH or GSSG concentration, intracellular peroxide concentration, or free NAD redox potential. Converting it to glutathione potential requires the declared sensor-equilibration and reference assumptions.",
      "scope": "Declared reporter and inference distinctions for the selected redox study.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected records admit ratio dynamics and qualitative source interpretation. No absolute E_GSH, GSH:GSSG ratio, total-glutathione amount or free NAD+/NADH potential is calculated.",
        "Different redox couples and compartments need not be equilibrated. A cytosolic-region sensor does not establish a global cellular redox potential or the state of every organelle.",
        "The purified-sensor pH/specificity supplement and potential-conversion Supplementary Methods were not independently read; their primary main-text summaries remain reported limits."
      ]
    },
    {
      "id": "M-bio-grx-sensor-characterization",
      "kind": "method",
      "statement": "The source compared purified Grx1-roGFP2 with unfused and catalytic-control reporters using optical ratios during defined redox-buffer changes and glutathione-dependent oxidation controls.",
      "scope": "Qualitative sensor-characterization contract, separate from living-cell observations.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is characterization of purified engineered proteins in defined solutions, not a cellular redox homeostasis assay. Sensor oxidation-state response is distinct from an electron-transfer flux or a feedback-controlled physiological variable.",
        "Figure 1 includes fusion/unfused and catalytic-site controls. Additional selectivity and pH controls are located in unreviewed supplementary figures; no exhaustive specificity guarantee is admitted.",
        "Glutathione buffer purity and residual GSSG affect the sensor. The source explicitly discusses trace GSSG in commercial GSH; nominally reduced solution is not assumed exactly GSSG-free.",
        "No numerical response constants, absolute potentials, physiological concentrations or micro-unit quantities are newly extracted from the PDF text transcription. Independent raw kinetics, fits and uncertainty propagation were not replayed."
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context"
      ]
    },
    {
      "id": "C-bio-grx-sensor-characterization",
      "kind": "review-finding",
      "statement": "The active Grx1 fusion responded rapidly to glutathione redox changes in the source comparisons, whereas unfused or catalytic-control reporters responded differently. Peroxide-induced oxidation of the purified fusion depended on glutathione in the tested mixture.",
      "scope": "Finite purified-reporter response and specificity comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is characterization of purified engineered proteins in defined solutions, not a cellular redox homeostasis assay. Sensor oxidation-state response is distinct from an electron-transfer flux or a feedback-controlled physiological variable.",
        "Figure 1 includes fusion/unfused and catalytic-site controls. Additional selectivity and pH controls are located in unreviewed supplementary figures; no exhaustive specificity guarantee is admitted.",
        "Glutathione buffer purity and residual GSSG affect the sensor. The source explicitly discusses trace GSSG in commercial GSH; nominally reduced solution is not assumed exactly GSSG-free.",
        "No numerical response constants, absolute potentials, physiological concentrations or micro-unit quantities are newly extracted from the PDF text transcription. Independent raw kinetics, fits and uncertainty propagation were not replayed."
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context"
      ]
    },
    {
      "id": "M-bio-hela-redox-response",
      "kind": "method",
      "statement": "The source followed ratiometric fluorescence in Grx1-roGFP2-expressing HeLa cells during an oxidizing challenge, an externally imposed reducing reversal, and separate smaller-challenge time courses; unfused reporter behavior was compared.",
      "scope": "Qualitative live-cell perturbation and response contract for the specified sensor-accessible region.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited."
      ],
      "contextIds": [
        "gutscher2008-hela-redox-response-context"
      ]
    },
    {
      "id": "C-bio-hela-redox-response",
      "kind": "review-finding",
      "statement": "The HeLa fusion-sensor ratio rose after the oxidizing challenge and reversed after added reductant. Separate smaller challenges produced shorter-lived ratio deflections that returned toward baseline. These are finite intracellular reporter trajectories, with imposed reversal distinguished from unassisted recovery.",
      "scope": "Source-reported intracellular optical oxidation/reduction time courses.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited."
      ],
      "contextIds": [
        "gutscher2008-hela-redox-response-context"
      ]
    },
    {
      "id": "D-bio-intracellular-ph-reporter",
      "kind": "review-finding",
      "statement": "In the selected yeast study, intracellular pH is estimated from the pHluorin excitation ratio using a source standard curve. It is distinct from external-medium pH, proton-pump flux, buffering capacity, membrane potential and concentrations of other ions. Recovery of the reporter-derived pH is an observed trajectory; a particular feedback mechanism is a further interpretation.",
      "scope": "Declared pH sensor and physiological-inference convention.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Discussion: proposed Gpa2 positive-feedback interpretation; Results and Methods: essential-gene exclusions, pH standard-curve reference and 30-second dead time",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The main Methods declares a standard curve but refers to an earlier paper for calibration detail. The raw curve, strain-specific calibration transfer and absolute accuracy were not independently audited.",
        "The reported measurement is an ensemble microplate ratio, not a single-cell trajectory or a complete intracellular ionic-composition map. Nonlinearity can limit interpreting it as a simple arithmetic mean of individual-cell pH.",
        "No intrinsic reaction equilibrium constant, buffer capacity, electrical membrane potential or measured proton stoichiometry is obtained from this ratio alone."
      ]
    },
    {
      "id": "M-bio-yeast-glucose-ph-response",
      "kind": "method",
      "statement": "The source measured standard-curve-converted pHluorin ratios after glucose removal and readdition, comparing yeast wild type with sugar-sensing deletions and selected rescue constructs over time and at declared response times.",
      "scope": "Qualitative intracellular-pH perturbation, time-course and genetic-control contract.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source observes pHluorin-expressing S. cerevisiae BY4741 and defined derivative strains in buffered medium after sugar changes. The source uses a standard-curve conversion; its earlier detailed calibration paper and raw points were not newly read.",
        "The source Methods reports a roughly 30-second acquisition dead time followed by a 30-minute trace. Initial sub-dead-time events are not resolved, and a selected 10-minute genotype comparison is not itself a kinetic rate constant.",
        "The pH differences establish a finite regulated response associated with the selected gene perturbations. They do not show all ionic species, a universal fixed setpoint, broad acid/base buffering, or pre-cellular homeostatic control.",
        "PMA1 and other essential/severe-growth-defect genes were excluded from the deletion screen. Direct Pma1 flux and the complete pump-control mechanism are not established by these genotype contrasts.",
        "The authors speculate about positive feedback through Gpa2. Neither a recovery trace nor a genetic endpoint establishes that specific closed feedback loop, gain or dynamical stability.",
        "The study reports typical assay uncertainty and independent-experiment summaries. These are source statements, not an independently replayed calibration or uncertainty budget; no absolute pH values or numerical effect sizes are newly extracted.",
        "The separate metabolite MS, purified Gpa2 unfolding and structural informatics are outside the admitted acquisition here. Total ATP abundance must not be treated as ATP production flux, free nucleotide potential or direct pump activity."
      ],
      "contextIds": [
        "isom2018-yeast-ph-response-context"
      ]
    },
    {
      "id": "C-bio-yeast-glucose-ph-response",
      "kind": "review-finding",
      "statement": "Yeast pH recovery depended on glucose availability. Under limiting glucose, selected sugar-sensing deletions yielded less acidification than wild type, whereas loss of Snf1 yielded more. Combined pathway perturbations and Gpa2 rescue comparisons support a regulated, preparation-specific intracellular-pH response.",
      "scope": "Finite calibrated intracellular-pH trajectories and selected genetic contrasts.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source observes pHluorin-expressing S. cerevisiae BY4741 and defined derivative strains in buffered medium after sugar changes. The source uses a standard-curve conversion; its earlier detailed calibration paper and raw points were not newly read.",
        "The source Methods reports a roughly 30-second acquisition dead time followed by a 30-minute trace. Initial sub-dead-time events are not resolved, and a selected 10-minute genotype comparison is not itself a kinetic rate constant.",
        "The pH differences establish a finite regulated response associated with the selected gene perturbations. They do not show all ionic species, a universal fixed setpoint, broad acid/base buffering, or pre-cellular homeostatic control.",
        "PMA1 and other essential/severe-growth-defect genes were excluded from the deletion screen. Direct Pma1 flux and the complete pump-control mechanism are not established by these genotype contrasts.",
        "The authors speculate about positive feedback through Gpa2. Neither a recovery trace nor a genetic endpoint establishes that specific closed feedback loop, gain or dynamical stability.",
        "The study reports typical assay uncertainty and independent-experiment summaries. These are source statements, not an independently replayed calibration or uncertainty budget; no absolute pH values or numerical effect sizes are newly extracted.",
        "The separate metabolite MS, purified Gpa2 unfolding and structural informatics are outside the admitted acquisition here. Total ATP abundance must not be treated as ATP production flux, free nucleotide potential or direct pump activity.",
        "The selected glucose/genotype comparison measures a regulated intracellular-pH response, not all ionic distributions, narrow-range invariance, enzyme/structural protection, equilibrium stability or pre-cellular physicochemical homeostasis.",
        "Channels, metabolic cycles, redox control and bulk-water organization are separate original parent scopes, not jointly demonstrated necessary mediators in this yeast assay. Source-calibrated pH recovery does not identify their fluxes or a unique feedback architecture.",
        "Catalogue classification, requirements and generic evidence placeholders are not independent empirical support. Original parent weights, directions/modes, necessity, carrier counts/minima and null saturation are not measured causal fractions, critical thresholds or a verified developmental sequence."
      ],
      "contextIds": [
        "isom2018-yeast-ph-response-context"
      ]
    },
    {
      "id": "M-bio-redox-recovery-inference",
      "kind": "method",
      "statement": "Relate the purified reporter characterization to the cell ratio trajectories while preserving glutathione specificity, distinct preparations, imposed-reductant versus unassisted recovery and the unreviewed potential-conversion assumptions.",
      "scope": "Interpretation contract for one source publication and two preparation-specific contexts.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods",
          "role": "method",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected records admit ratio dynamics and qualitative source interpretation. No absolute E_GSH, GSH:GSSG ratio, total-glutathione amount or free NAD+/NADH potential is calculated.",
        "Different redox couples and compartments need not be equilibrated. A cytosolic-region sensor does not establish a global cellular redox potential or the state of every organelle.",
        "The purified-sensor pH/specificity supplement and potential-conversion Supplementary Methods were not independently read; their primary main-text summaries remain reported limits.",
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited.",
        "The purified-sensor and living-cell contexts are linked measurements from one publication, not distinct publications or independent laboratories. The transfer of redox interpretation rests on the sensor mechanism and the stated cellular compartment boundary.",
        "No universal integrated redox network, cofactor recycling cycle, disease mechanism, proton homeostasis, historical primitive state or physical-instance threshold follows."
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context",
        "gutscher2008-hela-redox-response-context"
      ]
    },
    {
      "id": "C-bio-redox-recovery-inference",
      "kind": "review-finding",
      "statement": "Together the source characterization and intracellular trajectories support a bounded glutathione-linked oxidation/reduction interpretation for the sampled HeLa region. The data distinguish reversible sensor response and finite recovery without identifying a universal redox potential, cofactor-regeneration flux or specific feedback mechanism.",
      "scope": "Published reporter-based redox interpretation conditional on sensor and compartment assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods",
          "role": "supports",
          "note": "Selected actual original primary text read through the declared access route. Source-reported finite observation or method; no new reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected records admit ratio dynamics and qualitative source interpretation. No absolute E_GSH, GSH:GSSG ratio, total-glutathione amount or free NAD+/NADH potential is calculated.",
        "Different redox couples and compartments need not be equilibrated. A cytosolic-region sensor does not establish a global cellular redox potential or the state of every organelle.",
        "The purified-sensor pH/specificity supplement and potential-conversion Supplementary Methods were not independently read; their primary main-text summaries remain reported limits.",
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited.",
        "The purified-sensor and living-cell contexts are linked measurements from one publication, not distinct publications or independent laboratories. The transfer of redox interpretation rests on the sensor mechanism and the stated cellular compartment boundary.",
        "No universal integrated redox network, cofactor recycling cycle, disease mechanism, proton homeostasis, historical primitive state or physical-instance threshold follows.",
        "The selected glutathione-coupled reporter experiment does not establish all NAD/FAD redox systems, a universal oxidative-stress defence circuit, integrated metabolic/bioenergetic control or guaranteed biochemical stability. Supplied cells and engineered sensor proteins are preparation inputs, not measured formation from folding, catalysis or metabolic cycles.",
        "The separate modern light-driven phosphorylation assay does not supply a matched mediator for these intracellular redox trajectories. No universal necessary parent chain from folding, enzyme catalysis, metabolic cycles and ATP generation is inferred.",
        "Catalogue classification, requirements and generic evidence placeholders are not independent empirical support. Original parent weights, directions/modes, necessity, carrier counts/minima and null saturation are not measured causal fractions, critical thresholds or a verified developmental sequence."
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context",
        "gutscher2008-hela-redox-response-context"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:grx-redox-reporter",
      "name": "Glutathione-coupled optical redox reporter convention",
      "kind": "quantity-definition",
      "status": "definition",
      "level": 3,
      "description": "Grx1-roGFP2 reports the optical oxidation state of a glutathione-coupled fusion sensor in the sampled cellular region. A fluorescence ratio is not a direct GSH or GSSG concentration, intracellular peroxide concentration, or free NAD redox potential. Converting it to glutathione potential requires the declared sensor-equilibration and reference assumptions.",
      "claimIds": [
        "D-bio-grx-redox-reporter"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state"
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells"
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods"
        }
      ],
      "openObligations": [
        "The selected records admit ratio dynamics and qualitative source interpretation. No absolute E_GSH, GSH:GSSG ratio, total-glutathione amount or free NAD+/NADH potential is calculated.",
        "Different redox couples and compartments need not be equilibrated. A cytosolic-region sensor does not establish a global cellular redox potential or the state of every organelle.",
        "The purified-sensor pH/specificity supplement and potential-conversion Supplementary Methods were not independently read; their primary main-text summaries remain reported limits."
      ]
    },
    {
      "id": "bio:grx-sensor-characterization",
      "name": "Purified Grx1-roGFP2 characterization context",
      "kind": "context",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The source compared purified Grx1-roGFP2 with unfused and catalytic-control reporters using optical ratios during defined redox-buffer changes and glutathione-dependent oxidation controls.",
      "claimIds": [
        "M-bio-grx-sensor-characterization"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state"
        }
      ],
      "openObligations": [
        "This is characterization of purified engineered proteins in defined solutions, not a cellular redox homeostasis assay. Sensor oxidation-state response is distinct from an electron-transfer flux or a feedback-controlled physiological variable.",
        "Figure 1 includes fusion/unfused and catalytic-site controls. Additional selectivity and pH controls are located in unreviewed supplementary figures; no exhaustive specificity guarantee is admitted.",
        "Glutathione buffer purity and residual GSSG affect the sensor. The source explicitly discusses trace GSSG in commercial GSH; nominally reduced solution is not assumed exactly GSSG-free.",
        "No numerical response constants, absolute potentials, physiological concentrations or micro-unit quantities are newly extracted from the PDF text transcription. Independent raw kinetics, fits and uncertainty propagation were not replayed."
      ]
    },
    {
      "id": "bio:grx-sensor-response",
      "name": "Finite glutathione-coupled purified-sensor response",
      "kind": "scoped-process",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The active Grx1 fusion responded rapidly to glutathione redox changes in the source comparisons, whereas unfused or catalytic-control reporters responded differently. Peroxide-induced oxidation of the purified fusion depended on glutathione in the tested mixture.",
      "claimIds": [
        "C-bio-grx-sensor-characterization"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state"
        }
      ],
      "openObligations": [
        "This is characterization of purified engineered proteins in defined solutions, not a cellular redox homeostasis assay. Sensor oxidation-state response is distinct from an electron-transfer flux or a feedback-controlled physiological variable.",
        "Figure 1 includes fusion/unfused and catalytic-site controls. Additional selectivity and pH controls are located in unreviewed supplementary figures; no exhaustive specificity guarantee is admitted.",
        "Glutathione buffer purity and residual GSSG affect the sensor. The source explicitly discusses trace GSSG in commercial GSH; nominally reduced solution is not assumed exactly GSSG-free.",
        "No numerical response constants, absolute potentials, physiological concentrations or micro-unit quantities are newly extracted from the PDF text transcription. Independent raw kinetics, fits and uncertainty propagation were not replayed."
      ]
    },
    {
      "id": "bio:hela-redox-context",
      "name": "Prepared HeLa intracellular reporter context",
      "kind": "context",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The source followed ratiometric fluorescence in Grx1-roGFP2-expressing HeLa cells during an oxidizing challenge, an externally imposed reducing reversal, and separate smaller-challenge time courses; unfused reporter behavior was compared.",
      "claimIds": [
        "M-bio-hela-redox-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells"
        }
      ],
      "openObligations": [
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited."
      ]
    },
    {
      "id": "bio:hela-redox-response",
      "name": "HeLa intracellular reporter oxidation and reversal",
      "kind": "scoped-process",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The HeLa fusion-sensor ratio rose after the oxidizing challenge and reversed after added reductant. Separate smaller challenges produced shorter-lived ratio deflections that returned toward baseline. These are finite intracellular reporter trajectories, with imposed reversal distinguished from unassisted recovery.",
      "claimIds": [
        "C-bio-hela-redox-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells"
        }
      ],
      "openObligations": [
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited."
      ]
    },
    {
      "id": "bio:intracellular-ph-reporter",
      "name": "Calibrated intracellular-pH reporter convention",
      "kind": "quantity-definition",
      "status": "definition",
      "level": 3,
      "description": "In the selected yeast study, intracellular pH is estimated from the pHluorin excitation ratio using a source standard curve. It is distinct from external-medium pH, proton-pump flux, buffering capacity, membrane potential and concentrations of other ions. Recovery of the reporter-derived pH is an observed trajectory; a particular feedback mechanism is a further interpretation.",
      "claimIds": [
        "D-bio-intracellular-ph-reporter"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption"
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Discussion: proposed Gpa2 positive-feedback interpretation; Results and Methods: essential-gene exclusions, pH standard-curve reference and 30-second dead time"
        }
      ],
      "openObligations": [
        "The main Methods declares a standard curve but refers to an earlier paper for calibration detail. The raw curve, strain-specific calibration transfer and absolute accuracy were not independently audited.",
        "The reported measurement is an ensemble microplate ratio, not a single-cell trajectory or a complete intracellular ionic-composition map. Nonlinearity can limit interpreting it as a simple arithmetic mean of individual-cell pH.",
        "No intrinsic reaction equilibrium constant, buffer capacity, electrical membrane potential or measured proton stoichiometry is obtained from this ratio alone."
      ]
    },
    {
      "id": "bio:yeast-glucose-ph-context",
      "name": "Prepared yeast sugar-perturbation pH context",
      "kind": "context",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The source measured standard-curve-converted pHluorin ratios after glucose removal and readdition, comparing yeast wild type with sugar-sensing deletions and selected rescue constructs over time and at declared response times.",
      "claimIds": [
        "M-bio-yeast-glucose-ph-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption"
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption"
        }
      ],
      "openObligations": [
        "The source observes pHluorin-expressing S. cerevisiae BY4741 and defined derivative strains in buffered medium after sugar changes. The source uses a standard-curve conversion; its earlier detailed calibration paper and raw points were not newly read.",
        "The source Methods reports a roughly 30-second acquisition dead time followed by a 30-minute trace. Initial sub-dead-time events are not resolved, and a selected 10-minute genotype comparison is not itself a kinetic rate constant.",
        "The pH differences establish a finite regulated response associated with the selected gene perturbations. They do not show all ionic species, a universal fixed setpoint, broad acid/base buffering, or pre-cellular homeostatic control.",
        "PMA1 and other essential/severe-growth-defect genes were excluded from the deletion screen. Direct Pma1 flux and the complete pump-control mechanism are not established by these genotype contrasts.",
        "The authors speculate about positive feedback through Gpa2. Neither a recovery trace nor a genetic endpoint establishes that specific closed feedback loop, gain or dynamical stability.",
        "The study reports typical assay uncertainty and independent-experiment summaries. These are source statements, not an independently replayed calibration or uncertainty budget; no absolute pH values or numerical effect sizes are newly extracted.",
        "The separate metabolite MS, purified Gpa2 unfolding and structural informatics are outside the admitted acquisition here. Total ATP abundance must not be treated as ATP production flux, free nucleotide potential or direct pump activity."
      ]
    },
    {
      "id": "bio:yeast-glucose-ph-response",
      "name": "Glucose-dependent intracellular-pH regulation in yeast",
      "kind": "scoped-process",
      "status": "evidence-scoped",
      "level": 3,
      "description": "Yeast pH recovery depended on glucose availability. Under limiting glucose, selected sugar-sensing deletions yielded less acidification than wild type, whereas loss of Snf1 yielded more. Combined pathway perturbations and Gpa2 rescue comparisons support a regulated, preparation-specific intracellular-pH response.",
      "claimIds": [
        "C-bio-yeast-glucose-ph-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption"
        },
        {
          "sourceId": "isom2018-yeast-glucose-ph",
          "locator": "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/28"
        }
      ],
      "openObligations": [
        "The source observes pHluorin-expressing S. cerevisiae BY4741 and defined derivative strains in buffered medium after sugar changes. The source uses a standard-curve conversion; its earlier detailed calibration paper and raw points were not newly read.",
        "The source Methods reports a roughly 30-second acquisition dead time followed by a 30-minute trace. Initial sub-dead-time events are not resolved, and a selected 10-minute genotype comparison is not itself a kinetic rate constant.",
        "The pH differences establish a finite regulated response associated with the selected gene perturbations. They do not show all ionic species, a universal fixed setpoint, broad acid/base buffering, or pre-cellular homeostatic control.",
        "PMA1 and other essential/severe-growth-defect genes were excluded from the deletion screen. Direct Pma1 flux and the complete pump-control mechanism are not established by these genotype contrasts.",
        "The authors speculate about positive feedback through Gpa2. Neither a recovery trace nor a genetic endpoint establishes that specific closed feedback loop, gain or dynamical stability.",
        "The study reports typical assay uncertainty and independent-experiment summaries. These are source statements, not an independently replayed calibration or uncertainty budget; no absolute pH values or numerical effect sizes are newly extracted.",
        "The separate metabolite MS, purified Gpa2 unfolding and structural informatics are outside the admitted acquisition here. Total ATP abundance must not be treated as ATP production flux, free nucleotide potential or direct pump activity.",
        "The selected glucose/genotype comparison measures a regulated intracellular-pH response, not all ionic distributions, narrow-range invariance, enzyme/structural protection, equilibrium stability or pre-cellular physicochemical homeostasis.",
        "Channels, metabolic cycles, redox control and bulk-water organization are separate original parent scopes, not jointly demonstrated necessary mediators in this yeast assay. Source-calibrated pH recovery does not identify their fluxes or a unique feedback architecture.",
        "Catalogue classification, requirements and generic evidence placeholders are not independent empirical support. Original parent weights, directions/modes, necessity, carrier counts/minima and null saturation are not measured causal fractions, critical thresholds or a verified developmental sequence."
      ]
    },
    {
      "id": "bio:redox-recovery-inference",
      "name": "Bounded glutathione-linked redox recovery interpretation",
      "kind": "hypothesis",
      "status": "evidence-scoped",
      "level": 3,
      "description": "Together the source characterization and intracellular trajectories support a bounded glutathione-linked oxidation/reduction interpretation for the sampled HeLa region. The data distinguish reversible sensor response and finite recovery without identifying a universal redox potential, cofactor-regeneration flux or specific feedback mechanism.",
      "claimIds": [
        "C-bio-redox-recovery-inference",
        "M-bio-redox-recovery-inference"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state"
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells"
        },
        {
          "sourceId": "gutscher2008-grx-rogfp2-redox",
          "locator": "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/25"
        }
      ],
      "openObligations": [
        "The selected records admit ratio dynamics and qualitative source interpretation. No absolute E_GSH, GSH:GSSG ratio, total-glutathione amount or free NAD+/NADH potential is calculated.",
        "Different redox couples and compartments need not be equilibrated. A cytosolic-region sensor does not establish a global cellular redox potential or the state of every organelle.",
        "The purified-sensor pH/specificity supplement and potential-conversion Supplementary Methods were not independently read; their primary main-text summaries remain reported limits.",
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited.",
        "The purified-sensor and living-cell contexts are linked measurements from one publication, not distinct publications or independent laboratories. The transfer of redox interpretation rests on the sensor mechanism and the stated cellular compartment boundary.",
        "No universal integrated redox network, cofactor recycling cycle, disease mechanism, proton homeostasis, historical primitive state or physical-instance threshold follows.",
        "The selected glutathione-coupled reporter experiment does not establish all NAD/FAD redox systems, a universal oxidative-stress defence circuit, integrated metabolic/bioenergetic control or guaranteed biochemical stability. Supplied cells and engineered sensor proteins are preparation inputs, not measured formation from folding, catalysis or metabolic cycles.",
        "The separate modern light-driven phosphorylation assay does not supply a matched mediator for these intracellular redox trajectories. No universal necessary parent chain from folding, enzyme catalysis, metabolic cycles and ATP generation is inferred.",
        "Catalogue classification, requirements and generic evidence placeholders are not independent empirical support. Original parent weights, directions/modes, necessity, carrier counts/minima and null saturation are not measured causal fractions, critical thresholds or a verified developmental sequence."
      ]
    }
  ],
  "relations": [
    {
      "id": "biochemistry:grx-characterization-context-response",
      "source": "bio:grx-sensor-characterization",
      "target": "bio:grx-sensor-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared purified-reporter comparison supports this finite response under its specificity and solution assumptions.",
      "claimIds": [
        "M-bio-grx-sensor-characterization",
        "C-bio-grx-sensor-characterization",
        "D-bio-grx-redox-reporter"
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context"
      ]
    },
    {
      "id": "biochemistry:hela-redox-context-response",
      "source": "bio:hela-redox-context",
      "target": "bio:hela-redox-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared cellular imaging and perturbation contract supports this optical time-course response.",
      "claimIds": [
        "M-bio-hela-redox-response",
        "C-bio-hela-redox-response",
        "D-bio-grx-redox-reporter"
      ],
      "contextIds": [
        "gutscher2008-hela-redox-response-context"
      ]
    },
    {
      "id": "biochemistry:yeast-glucose-ph-context-response",
      "source": "bio:yeast-glucose-ph-context",
      "target": "bio:yeast-glucose-ph-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The source pH standard-curve and glucose/genotype comparisons bound this intracellular-pH response.",
      "claimIds": [
        "M-bio-yeast-glucose-ph-response",
        "C-bio-yeast-glucose-ph-response",
        "D-bio-intracellular-ph-reporter"
      ],
      "contextIds": [
        "isom2018-yeast-ph-response-context"
      ]
    },
    {
      "id": "biochemistry:grx-sensor-response-redox-recovery-inference",
      "source": "bio:grx-sensor-response",
      "target": "bio:redox-recovery-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The purified reporter comparison enters the joint redox interpretation only together with the other declared sensor/response context.",
      "claimIds": [
        "M-bio-redox-recovery-inference",
        "C-bio-redox-recovery-inference"
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context",
        "gutscher2008-hela-redox-response-context"
      ]
    },
    {
      "id": "biochemistry:hela-redox-response-redox-recovery-inference",
      "source": "bio:hela-redox-response",
      "target": "bio:redox-recovery-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The intracellular reporter trajectories enters the joint redox interpretation only together with the other declared sensor/response context.",
      "claimIds": [
        "M-bio-redox-recovery-inference",
        "C-bio-redox-recovery-inference"
      ],
      "contextIds": [
        "gutscher2008-grx-characterization-context",
        "gutscher2008-hela-redox-response-context"
      ]
    }
  ],
  "studies": [
    {
      "sourceId": "gutscher2008-grx-rogfp2-redox",
      "studyType": "primary-experiment",
      "doi": "10.1038/nmeth.1212",
      "journal": "Nature Methods",
      "volume": "5",
      "issue": "6",
      "pages": "553-559",
      "readExtent": "selected-original-main-results-methods-and-figure-captions",
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/18469822/",
      "correctionCheck": "Checked 2026-10-20 against original PDF header, primary Nature indexed publication record and PubMed 18469822. Title, eight authors, DOI 10.1038/nmeth.1212, Nature Methods 5(6),553-559 agree. Published online 11 May 2008 is distinct from June 2008 issue. Limited exact-DOI/title correction/retraction searches surfaced no explicit correction or retraction; this is not proof of absence or exhaustive later-literature coverage. No DOI-registry relation audit is claimed.",
      "id": "gutscher2008-grx-characterization-context",
      "system": "Purified engineered glutaredoxin/redox-sensitive GFP proteins in source redox-buffer comparisons",
      "preparation": "The source compared purified Grx1-roGFP2 with unfused and catalytic-control reporters using optical ratios during defined redox-buffer changes and glutathione-dependent oxidation controls.",
      "observable": "Ratiometric reporter fluorescence during source solution changes and selected catalytic/specificity controls.",
      "finding": "The active Grx1 fusion responded rapidly to glutathione redox changes in the source comparisons, whereas unfused or catalytic-control reporters responded differently. Peroxide-induced oxidation of the purified fusion depended on glutathione in the tested mixture.",
      "limitations": [
        "This is characterization of purified engineered proteins in defined solutions, not a cellular redox homeostasis assay. Sensor oxidation-state response is distinct from an electron-transfer flux or a feedback-controlled physiological variable.",
        "Figure 1 includes fusion/unfused and catalytic-site controls. Additional selectivity and pH controls are located in unreviewed supplementary figures; no exhaustive specificity guarantee is admitted.",
        "Glutathione buffer purity and residual GSSG affect the sensor. The source explicitly discusses trace GSSG in commercial GSH; nominally reduced solution is not assumed exactly GSSG-free.",
        "No numerical response constants, absolute potentials, physiological concentrations or micro-unit quantities are newly extracted from the PDF text transcription. Independent raw kinetics, fits and uncertainty propagation were not replayed."
      ],
      "reviewedLocators": [
        "Nature Methods 5(6), 553-559, Results: Grx1-mediated equilibration and specificity, Figure 1 and caption; Methods: In vitro measurements of the roGFP2 redox state"
      ]
    },
    {
      "sourceId": "gutscher2008-grx-rogfp2-redox",
      "studyType": "primary-experiment",
      "doi": "10.1038/nmeth.1212",
      "journal": "Nature Methods",
      "volume": "5",
      "issue": "6",
      "pages": "553-559",
      "readExtent": "selected-original-main-results-methods-and-figure-captions",
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/18469822/",
      "correctionCheck": "Checked 2026-10-20 against original PDF header, primary Nature indexed publication record and PubMed 18469822. Title, eight authors, DOI 10.1038/nmeth.1212, Nature Methods 5(6),553-559 agree. Published online 11 May 2008 is distinct from June 2008 issue. Limited exact-DOI/title correction/retraction searches surfaced no explicit correction or retraction; this is not proof of absence or exhaustive later-literature coverage. No DOI-registry relation audit is claimed.",
      "id": "gutscher2008-hela-redox-response-context",
      "system": "Prepared HeLa cultures expressing Grx1-roGFP2 or unfused reporter, sampled intracellular region",
      "preparation": "The source followed ratiometric fluorescence in Grx1-roGFP2-expressing HeLa cells during an oxidizing challenge, an externally imposed reducing reversal, and separate smaller-challenge time courses; unfused reporter behavior was compared.",
      "observable": "Time-dependent intracellular excitation-ratio response to oxidizing challenge, added reducing reversal and separate smaller-challenge recovery.",
      "finding": "The HeLa fusion-sensor ratio rose after the oxidizing challenge and reversed after added reductant. Separate smaller challenges produced shorter-lived ratio deflections that returned toward baseline. These are finite intracellular reporter trajectories, with imposed reversal distinguished from unassisted recovery.",
      "limitations": [
        "The selected living-cell readout is the cytosolic-region optical ratio in prepared HeLa cultures. It is not a whole-cell extract, universal organelle redox value or measured free-cofactor potential.",
        "DTT-induced reversal in the strong-challenge comparison is imposed externally. It demonstrates reversible reporter response, not spontaneous restoration by a cellular feedback circuit.",
        "Short-lived responses at smaller challenges are consistent with reduction/recovery in the supplied cell culture. Peroxide removal, antioxidant turnover and reporter equilibration can all contribute; no unique endogenous recovery mechanism or feedback gain is identified.",
        "The experiment does not directly measure GSH-regeneration flux, glutathione-reductase activity, NADPH turnover, electron transport, ATP generation or closed metabolic cycles.",
        "No numerical dose, redox potential, compartmental concentration or recovery constant is newly admitted. Figure 2 has source-reported replicate/dispersion summaries, but raw single-cell trajectories, fit covariance and complete imaging artifacts were not independently audited."
      ],
      "reviewedLocators": [
        "Nature Methods 5(6), 553-559, Results: Grx1-roGFP2 facilitates imaging of intracellular redox changes, Figure 2a-c and caption; Methods: Cell culture and imaging of living cells",
        "Nature Methods 5(6), 553-559, Introduction: distinct redox couples and compartments; Discussion: glutathione-coupled versus direct H2O2 sensing; Methods: Additional methods pointer to unreviewed Supplementary Methods"
      ]
    },
    {
      "sourceId": "isom2018-yeast-glucose-ph",
      "studyType": "primary-experiment",
      "doi": "10.1074/jbc.RA117.000422",
      "journal": "Journal of Biological Chemistry",
      "volume": "293",
      "issue": "7",
      "pages": "2318-2329",
      "readExtent": "selected-original-main-results-methods-and-figure-captions",
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/29284676/",
      "correctionCheck": "Checked 2026-10-20 against original PMC full-text metadata, primary indexed JBC PDF header and PubMed 29284676. Title, six authors, DOI 10.1074/jbc.RA117.000422, J. Biol. Chem. 293(7),2318-2329 agree. Papers-in-Press date 28 December 2017 is distinct from 16 February 2018 issue. Limited exact-DOI/title correction/retraction searches surfaced no explicit correction or retraction; this does not prove absence or exhaustive later-literature coverage. No DOI-registry relation audit is claimed.",
      "id": "isom2018-yeast-ph-response-context",
      "system": "Saccharomyces cerevisiae BY4741 and selected sugar-signaling derivative strains expressing pHluorin",
      "preparation": "The source measured standard-curve-converted pHluorin ratios after glucose removal and readdition, comparing yeast wild type with sugar-sensing deletions and selected rescue constructs over time and at declared response times.",
      "observable": "Ensemble pHluorin fluorescence ratios converted through the source standard curve, response time courses and genotype/rescue contrasts.",
      "finding": "Yeast pH recovery depended on glucose availability. Under limiting glucose, selected sugar-sensing deletions yielded less acidification than wild type, whereas loss of Snf1 yielded more. Combined pathway perturbations and Gpa2 rescue comparisons support a regulated, preparation-specific intracellular-pH response.",
      "limitations": [
        "The source observes pHluorin-expressing S. cerevisiae BY4741 and defined derivative strains in buffered medium after sugar changes. The source uses a standard-curve conversion; its earlier detailed calibration paper and raw points were not newly read.",
        "The source Methods reports a roughly 30-second acquisition dead time followed by a 30-minute trace. Initial sub-dead-time events are not resolved, and a selected 10-minute genotype comparison is not itself a kinetic rate constant.",
        "The pH differences establish a finite regulated response associated with the selected gene perturbations. They do not show all ionic species, a universal fixed setpoint, broad acid/base buffering, or pre-cellular homeostatic control.",
        "PMA1 and other essential/severe-growth-defect genes were excluded from the deletion screen. Direct Pma1 flux and the complete pump-control mechanism are not established by these genotype contrasts.",
        "The authors speculate about positive feedback through Gpa2. Neither a recovery trace nor a genetic endpoint establishes that specific closed feedback loop, gain or dynamical stability.",
        "The study reports typical assay uncertainty and independent-experiment summaries. These are source statements, not an independently replayed calibration or uncertainty budget; no absolute pH values or numerical effect sizes are newly extracted.",
        "The separate metabolite MS, purified Gpa2 unfolding and structural informatics are outside the admitted acquisition here. Total ATP abundance must not be treated as ATP production flux, free nucleotide potential or direct pump activity."
      ],
      "reviewedLocators": [
        "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
        "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption",
        "J. Biol. Chem. 293(7), 2318-2329, Discussion: proposed Gpa2 positive-feedback interpretation; Results and Methods: essential-gene exclusions, pH standard-curve reference and 30-second dead time"
      ]
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:grx-redox-reporter",
      "role": "quantity-definition",
      "denotes": "Declared reporter and inference distinctions for the selected redox study.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-grx-redox-reporter"
      ]
    },
    {
      "nodeId": "bio:grx-sensor-characterization",
      "role": "experimental-context",
      "denotes": "Qualitative sensor-characterization contract, separate from living-cell observations.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-grx-sensor-characterization"
      ]
    },
    {
      "nodeId": "bio:grx-sensor-response",
      "role": "scoped-phenomenon",
      "denotes": "Finite purified-reporter response and specificity comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-grx-sensor-characterization"
      ]
    },
    {
      "nodeId": "bio:hela-redox-context",
      "role": "experimental-context",
      "denotes": "Qualitative live-cell perturbation and response contract for the specified sensor-accessible region.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-hela-redox-response"
      ]
    },
    {
      "nodeId": "bio:hela-redox-response",
      "role": "scoped-phenomenon",
      "denotes": "Source-reported intracellular optical oxidation/reduction time courses.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-hela-redox-response"
      ]
    },
    {
      "nodeId": "bio:intracellular-ph-reporter",
      "role": "quantity-definition",
      "denotes": "Declared pH sensor and physiological-inference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-intracellular-ph-reporter"
      ]
    },
    {
      "nodeId": "bio:yeast-glucose-ph-context",
      "role": "experimental-context",
      "denotes": "Qualitative intracellular-pH perturbation, time-course and genetic-control contract.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-yeast-glucose-ph-response"
      ]
    },
    {
      "nodeId": "bio:yeast-glucose-ph-response",
      "role": "scoped-phenomenon",
      "denotes": "Finite calibrated intracellular-pH trajectories and selected genetic contrasts.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-yeast-glucose-ph-response"
      ]
    },
    {
      "nodeId": "bio:redox-recovery-inference",
      "role": "hypothesis",
      "denotes": "Published reporter-based redox interpretation conditional on sensor and compartment assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-redox-recovery-inference",
        "M-bio-redox-recovery-inference"
      ]
    }
  ]
};
