// Exact reused patch response and distinct scaffold/combined-assay evidence.
export const CHANNELS_COMPLEX_RECORDS = {
  "sources": [
    {
      "id": "zhao2016-dna-nanocaged-enzymes",
      "kind": "research-publication",
      "title": "Nanocaged enzymes with enhanced catalytic activity and increased stability against protease digestion",
      "authors": [
        "Zhao Zhao",
        "Jinglin Fu",
        "Soma Dhakal",
        "Alexander Johnson-Buck",
        "Minghui Liu",
        "Ting Zhang",
        "Neal W. Woodbury",
        "Yan Liu",
        "Nils G. Walter",
        "Hao Yan"
      ],
      "year": 2016,
      "doi": "10.1038/ncomms10619",
      "url": "https://www.nature.com/articles/ncomms10619",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-nine-page-primary-main-article-and-selected-supporting-information",
        "locators": [
          "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        ],
        "limit": "Read the complete actual primary article HTML and published nine-page PDF, including all main Results/Discussion/Methods/References, all six main figures and Table 1. Read selected Supporting Information text/captions: pages S1-S12, S55-S59, S62-S69 up to Note4, and S104-S106; visually inspected SI Figures 10-12/55, Tables 1-3 and the conflicting S105 trypsin method. Full106-page supplement was downloaded but not completely read: detailed staple sequences in Note4, many kinetic traces/alternative-cage designs and other SI figures remain outside admission. No sequence design or optimization is proposed. PubMed PMID 26861509/PMC4749968, publisher title block and Crossref agree on ten authors, title, DOI10.1038/ncomms10619, Nature Communications7:10619, 10 February2016. Limited title/DOI/correction searches on2026-10-20 found no explicit linked correction; empty Crossref update/relation fields do not prove absence. Coupled activity and cage-characterization preparations are distinct and share one publication. Table 1 single-enzyme kinetic fits and the differently prepared single-molecule enzymology are read but not independently reproduced or admitted as new contexts. Main versus SI protease protocols conflict and are not used for a new protection claim. Hydration-layer/proximity/channeling explanations remain hypotheses, not measured water structure or a uniquely identified transfer mechanism."
      }
    },
    {
      "id": "fesenko1985",
      "kind": "research-publication",
      "title": "Induction by cyclic GMP of cationic conductance in plasma membrane of retinal rod outer segment",
      "authors": [
        "E E Fesenko",
        "S S Kolesnikov",
        "A L Lyubarsky"
      ],
      "year": 1985,
      "doi": "10.1038/313310a0",
      "url": "https://pubmed.ncbi.nlm.nih.gov/2578616/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "abstract-and-bibliographic-metadata",
        "locators": [
          "Abstract"
        ],
        "limit": "The reported calcium comparison does not exclude calcium functions elsewhere in phototransduction."
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
      "id": "M-bio-fesenko-rod-patch-context",
      "kind": "method",
      "statement": "Reuse the existing inside-out retinal rod outer-segment plasma-membrane patch context and cytoplasmic cGMP application from the primary abstract. The source record leaves species unresolved and admits only reversible cationic conductance change. Full preparation, buffer and temperature are not inferred from other channel studies.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture."
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "M-bio-zhao2016-cage-characterization-context",
      "kind": "method",
      "statement": "The source prepared DNA half/full cages with nominal internal dimensions20by20by17 nm and designed small pores, carrying supplied Aspergillus niger GOx or horseradish HRP through oligonucleotide attachment. Assembly/purification is checked by agarose gel and negatively stained TEM. Dye-labeled enzyme/cage colocalization and normalized Cy3 photobleaching are assessed separately on immobilized samples in the source room-temperature TIRF preparation. Concentrations use A260 and conjugate absorbance/labeling estimates. These characterization preparations are distinct from the bulk activity wells; no universal exact pair occupancy is assumed.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-cage-characterization"
      ]
    },
    {
      "id": "M-bio-zhao2016-gox-hrp-cascade-context",
      "kind": "method",
      "statement": "For source Figure 3 and SI Figure 12, compare nominal1 nM GOx/HRP enzyme or enzyme-DNA-cage preparations with 1 mM glucose and 2 mM ABTS in 1xTBS, pH7.5; the source bulk Methods specify1 mM MgCl2. Monitor increasing absorbance at 410 nm. The panel includes a co-caged GOx/HRP pair, a mixture of separately full-caged enzymes, a mixture of separate half-cages, free enzymes with an empty cage and free enzymes without cage. SI Figure 12 includes fresh, same-thermal-program and substrate-background controls. Figure 3 reports SD of at least three replicates. Complete base TBS salt composition and an exact common active-enzyme population are not supplied/reconstructed; source concentration/normalization conventions are retained.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "D-bio-ion-channel-structure-measurement-boundary",
      "kind": "review-finding",
      "statement": "For the selected abstract, a reversible cGMP-sensitive patch conductance is a finite functional readout. A channel molecular structure, pore geometry/charge, resolved single-channel event, transporter/pump coupling, origin of a membrane boundary and whole-cell ionic-asymmetry maintenance are different claims and are not established by that response alone.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture."
      ]
    },
    {
      "id": "D-bio-enzyme-assembly-channeling-boundary",
      "kind": "review-finding",
      "statement": "Distinguish scaffold assembly/localization, a coupled two-enzyme product signal, intrinsic/active-fraction changes, intermediate retention and direct substrate channeling. Source-specific activity differences between synthetic cage preparations do not make channeling or a universal efficiency gain follow from assembly, and porous cages are not automatically pathway-insulating compartments.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ]
    },
    {
      "id": "C-bio-gox-hrp-cage-association",
      "kind": "review-finding",
      "statement": "TEM and a native dual-color gel support a DNA cage-associated GOx/HRP population with two nominal enzyme components. Single-enzyme TIRF colocalization yields are high for GOx/HRP in the source calibration, while photobleaching copy estimates depend on labels/detection and are not direct exact stoichiometry of every co-caged pair. This is a prepared synthetic enzyme-scaffold assembly, not a new atom-resolved complex or universal formation stage.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-cage-characterization"
      ]
    },
    {
      "id": "C-bio-gox-hrp-cage-protocol-comparison",
      "kind": "review-finding",
      "statement": "The source compares co-caged, separately full-caged, separately half-caged and uncaged GOx/HRP preparations in the same stated substrate/reporter assay, including free enzyme plus empty-cage and SI thermal/background controls. This is a controlled combined preparation comparison; active fractions and local chemical/physical effects are not individually isolated.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "C-bio-gox-hrp-coupled-activity-response",
      "kind": "review-finding",
      "statement": "Figure 3 reports approximately8 fold normalized activity for a co-caged GOx/HRP pair relative to the stated uncaged pair plus empty-cage reference; separately full-caged and half-caged preparations give about 4 fold and 3 fold in that comparison. SI Figure 12 shows the associated410 nm absorbance traces and controls. These are source-dependent coupled-signal normalizations, not universal enhancements, exact single-enzyme turnover ratios or direct channeling measurements.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "M-bio-gox-hrp-compartment-interpretation-method",
      "kind": "method",
      "statement": "Interpret morphology/label association and bulk coupled activity jointly while retaining their distinct sample preparations and shared publication. Use separate-cage, half-cage, empty-cage, thermal and substrate controls to constrain general activity claims; do not infer direct substrate channeling, water ordering, internal retention or network benefit from assembly or one product signal.",
      "scope": "Descriptive measurement/inference boundary, not another acquisition or physical causal ancestry.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "C-bio-gox-hrp-compartment-account",
      "kind": "review-finding",
      "statement": "The source combination supports a prepared two-enzyme DNA-cage assembly and a larger coupled activity signal under selected conditions. Since separate cages and half-cages also enhance activity, the co-caged advantage is compatible with several local-environment/active-fraction/proximity contributions; it does not uniquely demonstrate an intermediate handoff, retained pathway flux, synchronized feedback or a necessary closed compartment.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "M-bio-ion-channel-scope-interpretation-method",
      "kind": "method",
      "statement": "Reuse P-fesenko1985 and its complete existing study/source boundary to limit card 3.3 to cGMP-sensitive patch conductance. Do not promote the abstract to a full structural channel/reconstitution study, infer species/solutions or replace the calcium and unresolved-single-event limitations with a universal membrane-transport mechanism.",
      "scope": "Descriptive measurement/inference boundary, not another acquisition or physical causal ancestry.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract",
          "role": "method",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture."
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "C-bio-ion-channel-transport-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.3 to the unchanged existing Fesenko abstract-supported conductance finding and its limited patch context. Reversible cGMP-sensitive patch conductance is supported; molecular pore/gating structure, all-channel selectivity/coupled transport, membrane-origin and ionic-maintenance architectures remain outside this evidence scope.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.3 is qualified to the existing reversible conductance response. The original selective small-molecule transport, pore geometry, charge distribution, gating architecture, stable transport objects across varied contexts, coupled transport and controlled ionic-asymmetry maintenance are outside admission.",
        "Phase1 means Integration and TypeRole1 Object in the original dictionary. The patch current does not separately demonstrate formation of a bounded molecular object or a universal membrane-embedded carrier architecture.",
        "Requirements MustCover0/10=Substrate/Constraint, ShouldCover6/12=Compartment/Environment, Optional3/4=Catalyst/Regulation are not universal gates. Actual patch and ligand are context; no feedback, resource or membrane-origin construction is measured.",
        "Original parents2.4(weight0.30, necessary, dependency0), 2.7(0.25, necessary, dependency10), 2.8(0.20, enabling, dependency10), 2.12(0.15, contextual, dependency12), 3.0(0.10, enabling, dependency0) all point upward, have carrier2/4, Nmin=Ncrit1, Nsat=null; modes are cooperation/constraint for 2.4, 2.7, 3.0 and constraint for 2.8, 2.12. The assay does not validate those ancestry, weight or count claims."
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "C-bio-enzymatic-complex-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.6 to the source-supported synthetic GOx/HRP DNA-cage assembly and coupled product response, retaining labeling, calibration, active-fraction and preparation limits. Assembly and larger activity are finite observations; direct substrate channeling, reduced diffusive loss, synchronized feedback and universal multi-enzyme superiority are excluded from admission.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.6 assembly is qualified to an enzyme-DNA scaffold population; it is not a naturally formed protein-only multienzyme complex. Persistence beyond the measured preparation, atom-level interface stability and integrated biochemical regulatory control are not established.",
        "The coupled GOx/HRP signal supports source-specific collective activity. Direct channeling, synchronized reaction sequencing, reduced diffusive loss and a universal advantage beyond isolated enzymes are not identified by this readout.",
        "Original Phase2 Self-organization and TypeRole1 Object are representation labels; no universal object arising or stable lifetime is inferred. Requirements MustCover0/10, ShouldCover6/12, Optional3/4 are not universal substrate/constraint/compartment/environment/catalyst/regulation gates.",
        "Original3.6 parents3.1(weight0.35, necessary, dependency3), 3.2(0.25, necessary, dependency10), 3.5(0.25, enabling, dependency4), 2.6(0.15, contextual, dependency10) all point upward with carrier2/4, Nmin=Ncrit2, Nsat=null. Modes are cooperation/constraint for 3.1, 2.6, constraint for 3.2 and feedback for 3.5. Neither those stages nor numerical thresholds/weights are measured.",
        "A sequential two-enzyme product cascade is not itself an allosteric/cooperative-site or feedback assay. Active-site atomic geometry and separate dispersion-force contributions are not isolated here."
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "C-bio-metabolic-compartment-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.17 to enzyme localization and altered coupled activity within the source synthetic porous DNA-cage preparations. Spatial organization can change this assay response, but pathway insulation, intermediate retention, local gradients, crosstalk suppression, parallel metabolism and sustained network regulation are not demonstrated by the chosen data.",
      "scope": "Only the declared reused patch assay or new synthetic enzyme-cage preparation/readout, with no universal molecular construction or biosynthesis origin.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits",
          "role": "supports",
          "note": "Actually read the declared primary passage and relevant existing canonical record; preserve its exact reading extent, preparation and inference limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.17 is qualified to source-localized enzymes and preparation-dependent coupled activity in a synthetic porous cage. Competing-pathway insulation, crosstalk reduction, intermediate retention, local gradients, parallel metabolism and regulated network throughput are not measured.",
        "Robustness and long-term regulation are not universal consequences of encapsulation. The read trypsin figures have conflicting main/SI protocol annotations and are not used for a new protection or persistence claim in this proposal.",
        "Original Phase2 Self-organization and TypeRole3 Property are representation choices. Requirements MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates.",
        "Original3.17 parents3.0(weight0.30, necessary, dependency0), 3.1(0.30, necessary, dependency3), 3.14(0.25, enabling, dependency4), 3.6(0.15, contextual, dependency6) all point downward with carrier2/4, Nsat=null; Nmin=Ncrit1 for 3.0/3.1 and 2 for 3.14/3.6. Modes are constraint for 3.0/3.1, feedback for 3.14, cooperation/feedback for 3.6. No universal causal stages, weights or count thresholds follow.",
        "The actual3.14 parent is Metabolic Cycles. The GOx/HRP cascade is a supplied linear coupled assay, not a closed regenerating metabolic cycle, so no cycle or sustained feedback ancestry is inferred.",
        "Cards3.6/3.17 share this one source and its characterization/activity contexts. They are not independent confirmations. The separate retinal patch assay provides no matched enzyme-compartment bridge."
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "P-fesenko1985",
      "kind": "review-finding",
      "statement": "cGMP application increases conductance reversibly in the patch assay.",
      "scope": "Optical/retinal pilot; contexts fesenko1985",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract",
          "role": "supports",
          "note": "Support is restricted to the recorded preparation, read extent and observable."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported calcium comparison does not exclude calcium functions elsewhere in phototransduction."
      ],
      "contextIds": [
        "fesenko1985"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:fesenko-rod-patch-context",
      "name": "Reused cGMP rod-patch context",
      "kind": "context",
      "description": "Reuse the existing inside-out retinal rod outer-segment plasma-membrane patch context and cytoplasmic cGMP application from the primary abstract. The source record leaves species unresolved and admits only reversible cationic conductance change. Full preparation, buffer and temperature are not inferred from other channel studies.",
      "claimIds": [
        "M-bio-fesenko-rod-patch-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture."
      ],
      "level": 3
    },
    {
      "id": "bio:zhao2016-cage-characterization-context",
      "name": "DNA-cage enzyme characterization context",
      "kind": "context",
      "description": "The source prepared DNA half/full cages with nominal internal dimensions20by20by17 nm and designed small pores, carrying supplied Aspergillus niger GOx or horseradish HRP through oligonucleotide attachment. Assembly/purification is checked by agarose gel and negatively stained TEM. Dye-labeled enzyme/cage colocalization and normalized Cy3 photobleaching are assessed separately on immobilized samples in the source room-temperature TIRF preparation. Concentrations use A260 and conjugate absorbance/labeling estimates. These characterization preparations are distinct from the bulk activity wells; no universal exact pair occupancy is assumed.",
      "claimIds": [
        "M-bio-zhao2016-cage-characterization-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:zhao2016-gox-hrp-cascade-context",
      "name": "GOx-HRP cage comparison activity context",
      "kind": "context",
      "description": "For source Figure 3 and SI Figure 12, compare nominal1 nM GOx/HRP enzyme or enzyme-DNA-cage preparations with 1 mM glucose and 2 mM ABTS in 1xTBS, pH7.5; the source bulk Methods specify1 mM MgCl2. Monitor increasing absorbance at 410 nm. The panel includes a co-caged GOx/HRP pair, a mixture of separately full-caged enzymes, a mixture of separate half-cages, free enzymes with an empty cage and free enzymes without cage. SI Figure 12 includes fresh, same-thermal-program and substrate-background controls. Figure 3 reports SD of at least three replicates. Complete base TBS salt composition and an exact common active-enzyme population are not supplied/reconstructed; source concentration/normalization conventions are retained.",
      "claimIds": [
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:ion-channel-structure-measurement-boundary",
      "name": "Channel conductance versus transport-object boundary",
      "kind": "definition",
      "description": "For the selected abstract, a reversible cGMP-sensitive patch conductance is a finite functional readout. A channel molecular structure, pore geometry/charge, resolved single-channel event, transporter/pump coupling, origin of a membrane boundary and whole-cell ionic-asymmetry maintenance are different claims and are not established by that response alone.",
      "claimIds": [
        "D-bio-ion-channel-structure-measurement-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture."
      ],
      "level": 3
    },
    {
      "id": "bio:enzyme-assembly-channeling-boundary",
      "name": "Enzyme assembly, coupled activity and channeling boundary",
      "kind": "definition",
      "description": "Distinguish scaffold assembly/localization, a coupled two-enzyme product signal, intrinsic/active-fraction changes, intermediate retention and direct substrate channeling. Source-specific activity differences between synthetic cage preparations do not make channeling or a universal efficiency gain follow from assembly, and porous cages are not automatically pathway-insulating compartments.",
      "claimIds": [
        "D-bio-enzyme-assembly-channeling-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:gox-hrp-cage-association",
      "name": "Source-supported GOx-HRP cage association",
      "kind": "scoped-process",
      "description": "TEM and a native dual-color gel support a DNA cage-associated GOx/HRP population with two nominal enzyme components. Single-enzyme TIRF colocalization yields are high for GOx/HRP in the source calibration, while photobleaching copy estimates depend on labels/detection and are not direct exact stoichiometry of every co-caged pair. This is a prepared synthetic enzyme-scaffold assembly, not a new atom-resolved complex or universal formation stage.",
      "claimIds": [
        "C-bio-gox-hrp-cage-association",
        "M-bio-zhao2016-cage-characterization-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:gox-hrp-cage-protocol-comparison",
      "name": "Controlled GOx-HRP cage preparation comparison",
      "kind": "scoped-process",
      "description": "The source compares co-caged, separately full-caged, separately half-caged and uncaged GOx/HRP preparations in the same stated substrate/reporter assay, including free enzyme plus empty-cage and SI thermal/background controls. This is a controlled combined preparation comparison; active fractions and local chemical/physical effects are not individually isolated.",
      "claimIds": [
        "C-bio-gox-hrp-cage-protocol-comparison",
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:gox-hrp-coupled-activity-response",
      "name": "Preparation-dependent coupled GOx-HRP activity",
      "kind": "scoped-process",
      "description": "Figure 3 reports approximately8 fold normalized activity for a co-caged GOx/HRP pair relative to the stated uncaged pair plus empty-cage reference; separately full-caged and half-caged preparations give about 4 fold and 3 fold in that comparison. SI Figure 12 shows the associated410 nm absorbance traces and controls. These are source-dependent coupled-signal normalizations, not universal enhancements, exact single-enzyme turnover ratios or direct channeling measurements.",
      "claimIds": [
        "C-bio-gox-hrp-coupled-activity-response",
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:gox-hrp-compartment-account",
      "name": "Conditional finite enzyme-compartment account",
      "kind": "scoped-process",
      "description": "The source combination supports a prepared two-enzyme DNA-cage assembly and a larger coupled activity signal under selected conditions. Since separate cages and half-cages also enhance activity, the co-caged advantage is compatible with several local-environment/active-fraction/proximity contributions; it does not uniquely demonstrate an intermediate handoff, retained pathway flux, synchronized feedback or a necessary closed compartment.",
      "claimIds": [
        "C-bio-gox-hrp-compartment-account",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "level": 3
    },
    {
      "id": "bio:ion-channel-transport-source-scope",
      "name": "Finite channel and membrane-transport source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.3 to the unchanged existing Fesenko abstract-supported conductance finding and its limited patch context. Reversible cGMP-sensitive patch conductance is supported; molecular pore/gating structure, all-channel selectivity/coupled transport, membrane-origin and ionic-maintenance architectures remain outside this evidence scope.",
      "claimIds": [
        "C-bio-ion-channel-transport-source-scope",
        "M-bio-ion-channel-scope-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/3"
        }
      ],
      "openObligations": [
        "Reuse the existing fesenko1985 primary-experiment record in the retinal ledger, its source, P-fesenko1985 and ret:cgmp-conductance without changing identity, context or abstract-only reading extent. This is not a new biochemical acquisition or new full-text source review.",
        "Only the actual primary abstract and bibliographic metadata are reviewed. Full pages 310-313, complete solutions, species, temperature, patch selection, current calibration, raw traces and detailed controls are not reconstructed.",
        "The admitted positive finding is the existing reversible conductance increase upon cytoplasmic cGMP application to inside-out rod outer-segment plasma-membrane patches. No new EC50, single-channel conductance, noise fit or specificity panel is admitted.",
        "The abstract explicitly says discrete single-channel current steps were not resolved; its elementary-event and single-channel values depend on current-noise analysis and an assumed event assignment. A conductance response does not determine a pore structure, molecular subunit count or single-channel mechanism.",
        "The source calcium comparison does not exclude calcium functions elsewhere in phototransduction. Its proposed direct action in the absence of nucleoside triphosphates does not newly identify every gating step, protein composition or the full living-rod response.",
        "The selected native patch is not a purified-channel reconstitution, small-molecule transporter assay, coupled pump, protein-folding/biosynthesis experiment, proto-lipid origin or universal membrane-transport architecture.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.3 is qualified to the existing reversible conductance response. The original selective small-molecule transport, pore geometry, charge distribution, gating architecture, stable transport objects across varied contexts, coupled transport and controlled ionic-asymmetry maintenance are outside admission.",
        "Phase1 means Integration and TypeRole1 Object in the original dictionary. The patch current does not separately demonstrate formation of a bounded molecular object or a universal membrane-embedded carrier architecture.",
        "Requirements MustCover0/10=Substrate/Constraint, ShouldCover6/12=Compartment/Environment, Optional3/4=Catalyst/Regulation are not universal gates. Actual patch and ligand are context; no feedback, resource or membrane-origin construction is measured.",
        "Original parents2.4(weight0.30, necessary, dependency0), 2.7(0.25, necessary, dependency10), 2.8(0.20, enabling, dependency10), 2.12(0.15, contextual, dependency12), 3.0(0.10, enabling, dependency0) all point upward, have carrier2/4, Nmin=Ncrit1, Nsat=null; modes are cooperation/constraint for 2.4, 2.7, 3.0 and constraint for 2.8, 2.12. The assay does not validate those ancestry, weight or count claims."
      ],
      "level": 3
    },
    {
      "id": "bio:enzymatic-complex-source-scope",
      "name": "Finite enzymatic-complex source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.6 to the source-supported synthetic GOx/HRP DNA-cage assembly and coupled product response, retaining labeling, calibration, active-fraction and preparation limits. Assembly and larger activity are finite observations; direct substrate channeling, reduced diffusive loss, synchronized feedback and universal multi-enzyme superiority are excluded from admission.",
      "claimIds": [
        "C-bio-enzymatic-complex-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/6"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.6 assembly is qualified to an enzyme-DNA scaffold population; it is not a naturally formed protein-only multienzyme complex. Persistence beyond the measured preparation, atom-level interface stability and integrated biochemical regulatory control are not established.",
        "The coupled GOx/HRP signal supports source-specific collective activity. Direct channeling, synchronized reaction sequencing, reduced diffusive loss and a universal advantage beyond isolated enzymes are not identified by this readout.",
        "Original Phase2 Self-organization and TypeRole1 Object are representation labels; no universal object arising or stable lifetime is inferred. Requirements MustCover0/10, ShouldCover6/12, Optional3/4 are not universal substrate/constraint/compartment/environment/catalyst/regulation gates.",
        "Original3.6 parents3.1(weight0.35, necessary, dependency3), 3.2(0.25, necessary, dependency10), 3.5(0.25, enabling, dependency4), 2.6(0.15, contextual, dependency10) all point upward with carrier2/4, Nmin=Ncrit2, Nsat=null. Modes are cooperation/constraint for 3.1, 2.6, constraint for 3.2 and feedback for 3.5. Neither those stages nor numerical thresholds/weights are measured.",
        "A sequential two-enzyme product cascade is not itself an allosteric/cooperative-site or feedback assay. Active-site atomic geometry and separate dispersion-force contributions are not isolated here."
      ],
      "level": 3
    },
    {
      "id": "bio:metabolic-compartment-source-scope",
      "name": "Finite metabolic-compartment source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.17 to enzyme localization and altered coupled activity within the source synthetic porous DNA-cage preparations. Spatial organization can change this assay response, but pathway insulation, intermediate retention, local gradients, crosstalk suppression, parallel metabolism and sustained network regulation are not demonstrated by the chosen data.",
      "claimIds": [
        "C-bio-metabolic-compartment-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations"
        },
        {
          "sourceId": "zhao2016-dna-nanocaged-enzymes",
          "locator": "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/17"
        }
      ],
      "openObligations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty.",
        "Original level, phase, type-role, Science arrays and established labels are catalogue/display choices, not independent scientific reproduction or a validated ontological arising. No protein-folding/biosynthesis origin is inferred from supplied mature proteins.",
        "Original weights, necessity, directions, modes, dependency codes, carrier group2/type4 and null saturation are not measured causal fractions or quantitative laws. Counted enzyme labels and model assembly stoichiometry do not establish universal molecule minima or critical thresholds.",
        "Generic original Evidence paragraphs have null DOI/URL. They create no extra structural, reconstitution, genetic, scattering, metabolic-flux or theoretical-model studies.",
        "Card3.17 is qualified to source-localized enzymes and preparation-dependent coupled activity in a synthetic porous cage. Competing-pathway insulation, crosstalk reduction, intermediate retention, local gradients, parallel metabolism and regulated network throughput are not measured.",
        "Robustness and long-term regulation are not universal consequences of encapsulation. The read trypsin figures have conflicting main/SI protocol annotations and are not used for a new protection or persistence claim in this proposal.",
        "Original Phase2 Self-organization and TypeRole3 Property are representation choices. Requirements MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates.",
        "Original3.17 parents3.0(weight0.30, necessary, dependency0), 3.1(0.30, necessary, dependency3), 3.14(0.25, enabling, dependency4), 3.6(0.15, contextual, dependency6) all point downward with carrier2/4, Nsat=null; Nmin=Ncrit1 for 3.0/3.1 and 2 for 3.14/3.6. Modes are constraint for 3.0/3.1, feedback for 3.14, cooperation/feedback for 3.6. No universal causal stages, weights or count thresholds follow.",
        "The actual3.14 parent is Metabolic Cycles. The GOx/HRP cascade is a supplied linear coupled assay, not a closed regenerating metabolic cycle, so no cycle or sustained feedback ancestry is inferred.",
        "Cards3.6/3.17 share this one source and its characterization/activity contexts. They are not independent confirmations. The separate retinal patch assay provides no matched enzyme-compartment bridge."
      ],
      "level": 3
    },
    {
      "id": "ret:cgmp-conductance",
      "name": "cGMP-dependent rod conductance",
      "kind": "scoped-process",
      "description": "Cyclic-nucleotide control of conductance in rod outer-segment patches.",
      "claimIds": [
        "P-fesenko1985"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "fesenko1985",
          "locator": "Abstract"
        }
      ],
      "openObligations": [
        "Specify a matched preparation and discriminating observation before strengthening this representation."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:fesenko-rod-patch-context-cgmp-conductance",
      "source": "bio:fesenko-rod-patch-context",
      "target": "ret:cgmp-conductance",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The new representation reuses the unchanged native-patch observation and its original abstract-only context.",
      "claimIds": [
        "M-bio-fesenko-rod-patch-context",
        "P-fesenko1985"
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "biochemistry:cgmp-conductance-ion-channel-transport-source-scope",
      "source": "ret:cgmp-conductance",
      "target": "bio:ion-channel-transport-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing finite conductance evidence supplies only the qualified portion of the original transport-object card.",
      "claimIds": [
        "P-fesenko1985",
        "C-bio-ion-channel-transport-source-scope",
        "M-bio-ion-channel-scope-interpretation-method"
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "biochemistry:ion-channel-structure-measurement-boundary-ion-channel-transport-source-scope",
      "source": "bio:ion-channel-structure-measurement-boundary",
      "target": "bio:ion-channel-transport-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conductance-versus-structure distinction limits the source-card interpretation.",
      "claimIds": [
        "D-bio-ion-channel-structure-measurement-boundary",
        "C-bio-ion-channel-transport-source-scope",
        "M-bio-ion-channel-scope-interpretation-method"
      ],
      "contextIds": [
        "fesenko1985"
      ]
    },
    {
      "id": "biochemistry:zhao2016-cage-characterization-context-gox-hrp-cage-association",
      "source": "bio:zhao2016-cage-characterization-context",
      "target": "bio:gox-hrp-cage-association",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The labeling/imaging preparation delimits the source assembly inference.",
      "claimIds": [
        "M-bio-zhao2016-cage-characterization-context",
        "C-bio-gox-hrp-cage-association"
      ],
      "contextIds": [
        "zhao2016-cage-characterization"
      ]
    },
    {
      "id": "biochemistry:zhao2016-gox-hrp-cascade-context-gox-hrp-cage-protocol-comparison",
      "source": "bio:zhao2016-gox-hrp-cascade-context",
      "target": "bio:gox-hrp-cage-protocol-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The bulk assay defines this controlled preparation comparison.",
      "claimIds": [
        "M-bio-zhao2016-gox-hrp-cascade-context",
        "C-bio-gox-hrp-cage-protocol-comparison"
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:zhao2016-gox-hrp-cascade-context-gox-hrp-coupled-activity-response",
      "source": "bio:zhao2016-gox-hrp-cascade-context",
      "target": "bio:gox-hrp-coupled-activity-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The bulk assay and normalization define this coupled absorbance response.",
      "claimIds": [
        "M-bio-zhao2016-gox-hrp-cascade-context",
        "C-bio-gox-hrp-coupled-activity-response"
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:gox-hrp-cage-protocol-comparison-gox-hrp-coupled-activity-response",
      "source": "bio:gox-hrp-cage-protocol-comparison",
      "target": "bio:gox-hrp-coupled-activity-response",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "The combined co-caged/separate/uncaged preparation intervention changes the measured coupled activity under the stated assay; no isolated channeling mechanism follows.",
      "claimIds": [
        "C-bio-gox-hrp-cage-protocol-comparison",
        "C-bio-gox-hrp-coupled-activity-response"
      ],
      "contextIds": [
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:gox-hrp-cage-association-gox-hrp-compartment-account",
      "source": "bio:gox-hrp-cage-association",
      "target": "bio:gox-hrp-compartment-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement or definition constrains the finite compartment/assembly interpretation.",
      "claimIds": [
        "C-bio-gox-hrp-cage-association",
        "C-bio-gox-hrp-compartment-account",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:gox-hrp-coupled-activity-response-gox-hrp-compartment-account",
      "source": "bio:gox-hrp-coupled-activity-response",
      "target": "bio:gox-hrp-compartment-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement or definition constrains the finite compartment/assembly interpretation.",
      "claimIds": [
        "C-bio-gox-hrp-coupled-activity-response",
        "C-bio-gox-hrp-compartment-account",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:enzyme-assembly-channeling-boundary-gox-hrp-compartment-account",
      "source": "bio:enzyme-assembly-channeling-boundary",
      "target": "bio:gox-hrp-compartment-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement or definition constrains the finite compartment/assembly interpretation.",
      "claimIds": [
        "D-bio-enzyme-assembly-channeling-boundary",
        "C-bio-gox-hrp-compartment-account",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:gox-hrp-compartment-account-enzymatic-complex-source-scope",
      "source": "bio:gox-hrp-compartment-account",
      "target": "bio:enzymatic-complex-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared source interpretation supplies only this card finite admitted scope.",
      "claimIds": [
        "C-bio-gox-hrp-compartment-account",
        "C-bio-enzymatic-complex-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    },
    {
      "id": "biochemistry:gox-hrp-compartment-account-metabolic-compartment-source-scope",
      "source": "bio:gox-hrp-compartment-account",
      "target": "bio:metabolic-compartment-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared source interpretation supplies only this card finite admitted scope.",
      "claimIds": [
        "C-bio-gox-hrp-compartment-account",
        "C-bio-metabolic-compartment-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ],
      "contextIds": [
        "zhao2016-cage-characterization",
        "zhao2016-gox-hrp-cascade"
      ]
    }
  ],
  "studies": [
    {
      "id": "zhao2016-cage-characterization",
      "sourceId": "zhao2016-dna-nanocaged-enzymes",
      "studyType": "primary-experiment",
      "doi": "10.1038/ncomms10619",
      "journal": "Nature Communications",
      "volume": "7",
      "issue": "",
      "pages": "10619",
      "system": "Synthetic DNA-origami cages with supplied GOx/HRP and separately characterized single-enzyme preparations",
      "preparation": "The source prepared DNA half/full cages with nominal internal dimensions20by20by17 nm and designed small pores, carrying supplied Aspergillus niger GOx or horseradish HRP through oligonucleotide attachment. Assembly/purification is checked by agarose gel and negatively stained TEM. Dye-labeled enzyme/cage colocalization and normalized Cy3 photobleaching are assessed separately on immobilized samples in the source room-temperature TIRF preparation. Concentrations use A260 and conjugate absorbance/labeling estimates. These characterization preparations are distinct from the bulk activity wells; no universal exact pair occupancy is assumed.",
      "observable": "Agarose/TEM morphology, dye colocalization and normalized photobleaching/label counts",
      "finding": "The source supports an enzyme-associated DNA-cage population, with proxy/calibration limits rather than universal exact pair occupancy.",
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "readExtent": "complete-nine-page-primary-main-article-and-selected-supporting-information",
      "reviewedLocators": [
        "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
        "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/ncomms10619",
      "correctionCheck": "Read the complete actual primary article HTML and published nine-page PDF, including all main Results/Discussion/Methods/References, all six main figures and Table 1. Read selected Supporting Information text/captions: pages S1-S12, S55-S59, S62-S69 up to Note4, and S104-S106; visually inspected SI Figures 10-12/55, Tables 1-3 and the conflicting S105 trypsin method. Full106-page supplement was downloaded but not completely read: detailed staple sequences in Note4, many kinetic traces/alternative-cage designs and other SI figures remain outside admission. No sequence design or optimization is proposed. PubMed PMID 26861509/PMC4749968, publisher title block and Crossref agree on ten authors, title, DOI10.1038/ncomms10619, Nature Communications7:10619, 10 February2016. Limited title/DOI/correction searches on2026-10-20 found no explicit linked correction; empty Crossref update/relation fields do not prove absence. Coupled activity and cage-characterization preparations are distinct and share one publication. Table 1 single-enzyme kinetic fits and the differently prepared single-molecule enzymology are read but not independently reproduced or admitted as new contexts. Main versus SI protease protocols conflict and are not used for a new protection claim. Hydration-layer/proximity/channeling explanations remain hypotheses, not measured water structure or a uniquely identified transfer mechanism."
    },
    {
      "id": "zhao2016-gox-hrp-cascade",
      "sourceId": "zhao2016-dna-nanocaged-enzymes",
      "studyType": "primary-experiment",
      "doi": "10.1038/ncomms10619",
      "journal": "Nature Communications",
      "volume": "7",
      "issue": "",
      "pages": "10619",
      "system": "Supplied GOx/HRP in co-cage, separate-cage, half-cage and uncaged source assay preparations",
      "preparation": "For source Figure 3 and SI Figure 12, compare nominal1 nM GOx/HRP enzyme or enzyme-DNA-cage preparations with 1 mM glucose and 2 mM ABTS in 1xTBS, pH7.5; the source bulk Methods specify1 mM MgCl2. Monitor increasing absorbance at 410 nm. The panel includes a co-caged GOx/HRP pair, a mixture of separately full-caged enzymes, a mixture of separate half-cages, free enzymes with an empty cage and free enzymes without cage. SI Figure 12 includes fresh, same-thermal-program and substrate-background controls. Figure 3 reports SD of at least three replicates. Complete base TBS salt composition and an exact common active-enzyme population are not supplied/reconstructed; source concentration/normalization conventions are retained.",
      "observable": "Coupled ABTS absorbance at 410 nm and normalized bulk activity across cage/uncaged controls",
      "finding": "Co-caged, separately caged and half-caged preparations have source-dependent activity increases; these do not uniquely identify substrate channeling or a universal benefit.",
      "limitations": [
        "This is a synthetic DNA-origami scaffold carrying commercially supplied enzymes, not a naturally evolved protein-only multienzyme complex, living metabolic network, protein biosynthesis or a cellular-origin experiment. The scaffold DNA is supplied; its sequence-dependent assembly was not independently reconstructed.",
        "Negatively stained TEM, dye colocalization and photobleaching report different preparations/proxies. They support source-defined loading and location, not exact atom-level interfaces, universal pair occupancy, an impermeable shell or a measured protein-protein channel.",
        "Photobleaching copy-number estimates normalize detected Cy3 steps to labels per free enzyme and depend on labeling, detection and six-state HMM assumptions. TableS3 covers HRP, G6pDH and beta-Gal, not direct proof that every cascade cage has exactly one GOx and one HRP.",
        "Bulk cage concentration uses A260 and an adopted extinction coefficient0.109 nM^-1cm^-1; conjugate concentrations/labeling use absorbance deconvolution and inherited coefficients. Calibration, gel-extraction losses, active-enzyme fractions and labeling are not independently reproduced.",
        "GOx/HRP activity is a coupled ABTS absorbance readout. It depends on both enzyme steps, intermediate availability, substrate concentrations and active fractions; it is not an isolated turnover count, direct intermediate trajectory, flux control coefficient or exclusive measure of substrate transfer.",
        "The source nominally matches enzyme/cage concentrations but paired, separately caged and uncaged preparations differ in assembly, conjugation, purification, local environment and total cage/DNA organization. No isolated geometric confinement variable or equal active-site population is proven.",
        "Separate full cages and half-cages also increase the coupled signal. Increased activity of a co-caged pair therefore does not uniquely establish direct substrate channeling, reduced intermediate escape or a proximity-only mechanism.",
        "Hydration-layer ordering, electrostatic stabilization and conformational-substate mechanisms are proposed interpretations. Salt/helix-density comparisons alter more than one property and do not directly measure local water structure, local pH or a unique mechanism.",
        "The single-molecule G6pDH enzymology uses a different enzyme, surface immobilization, PMS/resazurin reporter and 10 percent PEG. It is not the same GOx/HRP bulk cascade preparation or an independent replication of its fold enhancement.",
        "The main/SI trypsin protocol annotations differ in digestion buffer, pH, enzyme concentration and assay ABTS concentration. No new protection/aggregation or persistence claim is admitted from those conflicting annotations.",
        "No crosstalk suppression, competing-pathway insulation, local concentration gradient, intermediate residence/retention, synchronized feedback, closed metabolic cycle, sustained living-system regulation or universal efficiency benefit is measured in the admitted contexts.",
        "The full main article and selected SI passages were read; most individual-enzyme kinetic traces and exact staple-sequence tables were not. Source ratios are approximate reported normalizations, not a new fit, digitization, data replay or independently reconstructed uncertainty."
      ],
      "readExtent": "complete-nine-page-primary-main-article-and-selected-supporting-information",
      "reviewedLocators": [
        "Published page 4, Activity characterization of nanocaged enzymes, Figure 3 and Table 1; Supplementary Figure 12 page S12 and Figure 55 page S55; Supplementary Methods pages S104-S105: coupled GOx/HRP absorbance, full/separate/half/uncaged controls, assay conditions and distinct normalization",
        "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
        "Published pages 7-9, complete main Methods/References; Supplementary Tables 1-4 pages S62-S65, complete Notes 1-3 pages S66-S69, Methods and References pages S104-S106: source identity, preparation/analysis inputs and reading limits"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/ncomms10619",
      "correctionCheck": "Read the complete actual primary article HTML and published nine-page PDF, including all main Results/Discussion/Methods/References, all six main figures and Table 1. Read selected Supporting Information text/captions: pages S1-S12, S55-S59, S62-S69 up to Note4, and S104-S106; visually inspected SI Figures 10-12/55, Tables 1-3 and the conflicting S105 trypsin method. Full106-page supplement was downloaded but not completely read: detailed staple sequences in Note4, many kinetic traces/alternative-cage designs and other SI figures remain outside admission. No sequence design or optimization is proposed. PubMed PMID 26861509/PMC4749968, publisher title block and Crossref agree on ten authors, title, DOI10.1038/ncomms10619, Nature Communications7:10619, 10 February2016. Limited title/DOI/correction searches on2026-10-20 found no explicit linked correction; empty Crossref update/relation fields do not prove absence. Coupled activity and cage-characterization preparations are distinct and share one publication. Table 1 single-enzyme kinetic fits and the differently prepared single-molecule enzymology are read but not independently reproduced or admitted as new contexts. Main versus SI protease protocols conflict and are not used for a new protection claim. Hydration-layer/proximity/channeling explanations remain hypotheses, not measured water structure or a uniquely identified transfer mechanism."
    },
    {
      "id": "fesenko1985",
      "sourceId": "fesenko1985",
      "studyType": "primary-experiment",
      "doi": "10.1038/313310a0",
      "pmid": "2578616",
      "journal": "Nature",
      "volume": "313",
      "issue": "6000",
      "pages": "310-313",
      "organism": "Retinal rods; species not resolved from the reviewed abstract",
      "preparation": "Inside-out outer-segment plasma-membrane patches",
      "observable": "Cationic conductance after cytoplasmic cGMP application",
      "finding": "cGMP application increases conductance reversibly in the patch assay.",
      "limitations": [
        "The reported calcium comparison does not exclude calcium functions elsewhere in phototransduction."
      ],
      "readExtent": "abstract-and-bibliographic-metadata",
      "reviewedLocators": [
        "Abstract"
      ],
      "metadataCheckedAt": "2026-09-12",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/2578616/",
      "correctionCheck": "Returned Europe PMC core metadata inspected for comment/correction links; this is not an exhaustive correction or retraction search."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:fesenko-rod-patch-context",
      "role": "experimental-context",
      "denotes": "Reused cGMP rod-patch context within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-fesenko-rod-patch-context"
      ]
    },
    {
      "nodeId": "bio:zhao2016-cage-characterization-context",
      "role": "experimental-context",
      "denotes": "DNA-cage enzyme characterization context within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-zhao2016-cage-characterization-context"
      ]
    },
    {
      "nodeId": "bio:zhao2016-gox-hrp-cascade-context",
      "role": "experimental-context",
      "denotes": "GOx-HRP cage comparison activity context within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ]
    },
    {
      "nodeId": "bio:ion-channel-structure-measurement-boundary",
      "role": "definition",
      "denotes": "Channel conductance versus transport-object boundary within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-ion-channel-structure-measurement-boundary"
      ]
    },
    {
      "nodeId": "bio:enzyme-assembly-channeling-boundary",
      "role": "definition",
      "denotes": "Enzyme assembly, coupled activity and channeling boundary within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-enzyme-assembly-channeling-boundary"
      ]
    },
    {
      "nodeId": "bio:gox-hrp-cage-association",
      "role": "scoped-phenomenon",
      "denotes": "Source-supported GOx-HRP cage association within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-gox-hrp-cage-association",
        "M-bio-zhao2016-cage-characterization-context"
      ]
    },
    {
      "nodeId": "bio:gox-hrp-cage-protocol-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Controlled GOx-HRP cage preparation comparison within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-gox-hrp-cage-protocol-comparison",
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ]
    },
    {
      "nodeId": "bio:gox-hrp-coupled-activity-response",
      "role": "scoped-phenomenon",
      "denotes": "Preparation-dependent coupled GOx-HRP activity within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-gox-hrp-coupled-activity-response",
        "M-bio-zhao2016-gox-hrp-cascade-context"
      ]
    },
    {
      "nodeId": "bio:gox-hrp-compartment-account",
      "role": "scoped-phenomenon",
      "denotes": "Conditional finite enzyme-compartment account within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-gox-hrp-compartment-account",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:ion-channel-transport-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite channel and membrane-transport source scope within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ion-channel-transport-source-scope",
        "M-bio-ion-channel-scope-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:enzymatic-complex-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite enzymatic-complex source scope within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-enzymatic-complex-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:metabolic-compartment-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite metabolic-compartment source scope within the declared preparation and measurement/interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-metabolic-compartment-source-scope",
        "M-bio-gox-hrp-compartment-interpretation-method"
      ]
    },
    {
      "nodeId": "ret:cgmp-conductance",
      "role": "scoped-phenomenon",
      "denotes": "A description of behavior or structure within the cited study boundaries; not an identified event occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "P-fesenko1985"
      ]
    }
  ]
};
