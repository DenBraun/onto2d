// Exact primary observations, explicitly bounded preparation reports and qualified interpretations.
export const NETWORK_CYCLE_RECORDS = {
  "sources": [
    {
      "id": "lincoln2009-cross-catalytic-rna",
      "kind": "research-publication",
      "title": "Self-Sustained Replication of an RNA Enzyme",
      "authors": [
        "Tracey A. Lincoln",
        "Gerald F. Joyce"
      ],
      "year": 2009,
      "doi": "10.1126/science.1167856",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2652413/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
        "locators": [
          "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge"
        ],
        "limit": "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here. The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary. Identity agrees between actual title block, Crossref and Europe PMC core metadata. Lincoln: Science 323(5918):1229-1232, online 8 January 2009 and issue 27 February 2009, PMID 19131595. Checked on 2026-10-20. Crossref has review links but no correction/update relation; Limited title/DOI correction searches found no explicit linked correction; this is not proof that none exists."
      }
    },
    {
      "id": "schwander2016-cetch-cycle",
      "kind": "research-publication",
      "title": "A synthetic pathway for the fixation of carbon dioxide in vitro",
      "authors": [
        "Thomas Schwander",
        "Lennart Schada von Borzyskowski",
        "Simon Burgener",
        "Niña Socorro Cortina",
        "Tobias J. Erb"
      ],
      "year": 2016,
      "doi": "10.1126/science.aah5237",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5892708/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
        "locators": [
          "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
          "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        ],
        "limit": "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence. The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction. Identity agrees between actual title block, Crossref and Europe PMC core metadata. Schwander: Science 354(6314):900-904, 18 November 2016, PMID 27856910. Checked on 2026-10-20. Crossref has review links but no correction/update relation; Europe PMC lists a CETCH perspective as Comment in, not a correction. Limited title/DOI correction searches found no explicit linked correction; this is not proof that none exists."
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
      "id": "M-bio-lincoln2009-pair-serial-transfer-context",
      "kind": "method",
      "statement": "Main-text paired E/E-prime RNA ligation/amplification assay: supplied seed RNA pair and four sequence-specific component substrates, 25 mM MgCl2, EPPS buffer pH 8.5, 42 degrees C. Newly ligated radiolabeled products are separated by denaturing PAGE and product accumulation is fit to logistic growth. Figure 2 includes batch depletion and six successive five-hour incubations with 4 percent carryover into fresh substrate, totaling 30 hours. Only these main-text-defined boundaries are admitted; complete preparative methods, calibration and supplementary controls are unread.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "M-bio-schwander2016-cetch54-isotope-product-context",
      "kind": "method",
      "statement": "CETCH 5.4 supplied in vitro enzyme network and source Figure 2 assay: initiate from supplied propionyl-CoA with NaH13CO3 and externally supplied cofactors/regeneration/protection resources. Follow six CoA intermediates and their fractional isotope labeling over 90 minutes; couple glyoxylate output to malate synthase and externally added acetyl-CoA. Source final volume is 0.52 ml with 2.3 mg/ml core cycle proteins plus 0.8 mg/ml auxiliary proteins. Full buffer, temperature, enzyme concentrations/calibration and supplemental controls remain unread and are not invented.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "D-bio-autocatalytic-network-measurement-boundary",
      "kind": "review-finding",
      "statement": "For this finite case, distinguish reciprocal ligation-based production of two RNA catalysts from synthesis of all substrates/resources, arbitrary genome copying, protein enzyme ancestry, formal RAF/food-generated closure and indefinite autonomous persistence. Observed externally replenished amplification does not establish all of those broader properties.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ]
    },
    {
      "id": "D-bio-metabolic-cycle-measurement-boundary",
      "kind": "review-finding",
      "statement": "Distinguish a designed cyclic topology, stepwise conversion, repeated intermediate labeling, coupled product output, stoichiometric accounting and autonomous regulated metabolism. The supplied CETCH network can support finite recurrent operation without reproducing its enzyme catalysts or proving every steady-state/energy/feedback claim.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ]
    },
    {
      "id": "M-bio-rna-network-interpretation-method",
      "kind": "method",
      "statement": "Use the reciprocal reaction topology and full-length labeled ligation-product accumulation to interpret finite catalyst production. Preserve substrate depletion, fresh-substrate transfers and the distinction between published and author-manuscript figure numbering. Do not promote the finite series or logistic fit to indefinite operation, arbitrary-function heredity or a general RAF theorem.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "M-bio-cetch-cycle-interpretation-method",
      "kind": "method",
      "statement": "Interpret intermediate isotopologue time courses and the malate readout jointly under the source CETCH topology, supplied acetyl-CoA trap and two-CO2-per-glyoxylate accounting. Preserve changing intermediate pools, protein normalization, finite duration and inaccessible methods. Do not substitute calculated photon/ATP comparisons or a stepwise sequence for measured ongoing cycling.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "method",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "C-bio-rna-reciprocal-catalyst-production",
      "kind": "review-finding",
      "statement": "The selected R3C-derived RNA enzymes each catalyze ligation of two supplied oligoribonucleotide substrates to produce the reciprocal enzyme. The source paired amplification vessel contains no protein catalyst; this supports a particular cross-catalytic RNA organization rather than a universal protein-first reaction network.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "C-bio-rna-finite-serial-amplification",
      "kind": "review-finding",
      "statement": "The source paired RNA products increase with logistic-shaped batch growth that levels as substrates deplete. Six five-hour incubations with 4 percent carryover and fresh substrate sustain amplification for 30 hours; the source reports cumulative dilution-corrected amplification greater than 10^8 for each enzyme. This finite observation supports replenishment-dependent cross-catalysis, with no observed infinite duration or complete resource autonomy.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "C-bio-cetch-intermediate-product-observation",
      "kind": "review-finding",
      "statement": "For source CETCH 5.4, six intermediate abundance/isotopologue time courses become progressively labeled over 90 minutes while the coupled trap yields source-reported 540 micromolar malate. The authors assign this to 1080 micromolar fixed CO2 and approximately 5 nmol CO2 per minute per mg core protein using their topology and stoichiometry. Malate also incorporates externally supplied acetyl-CoA carbon, and these printed values/uncertainties are not independently reconstructed.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "C-bio-cetch-finite-cyclic-operation",
      "kind": "review-finding",
      "statement": "The joint isotope-label/product evidence supports recurrent carbon-fixation operation in the supplied CETCH 5.4 network over the measured 90-minute interval. This goes beyond isolated stepwise conversion, which had not assured operation of CETCH 1.0, but remains a conditional source interpretation of finite cyclic flux rather than autonomous catalyst synthesis, complete mass balance, global steady state or adaptive regulation.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "C-bio-autocatalytic-network-source-scope",
      "kind": "review-finding",
      "statement": "Card 3.13 is qualified to a defined protein-free pair of mutually catalytic RNA ligation reactions with observed substrate-dependent batch/serial amplification. The source supports a finite prepared network organization; formal RAF generality, historical early-life stage, unrestricted component self-production, universal protein/cooperativity prerequisites and indefinite autonomous persistence are outside admission.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed.",
        "Original Level 3, phase, type-role, science arrays and scientific-status labels are catalogue classifications, not independent empirical reproduction or proof of an ontological arising. Instance admission remains none.",
        "Original generic Evidence paragraphs with null DOI/URL create no additional theory papers, RAF proofs, isotope experiments, kinetic studies or comparative replications.",
        "Original parent weights, necessity labels, directions, modes, dependency codes, ontological arising labels, carrier group/type, minima, critical counts and null saturation are not measured causal fractions, experimental laws or universal construction rules.",
        "Card 3.13 parents are 3.0 Protein Folding, 3.1 Enzymatic Catalysis, 3.5 Cooperativity and 3.7 RNA Folding. The observed protein-free RNA amplification does not require the first two parents' protein-centric descriptions or the stated protein carrier counts; RNA catalytic activity is a finite contextual dependency rather than a universal weighted ancestry. All four original edges and defaults are disposed in the reading report."
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "C-bio-metabolic-cycle-source-scope",
      "kind": "review-finding",
      "statement": "Card 3.14 is qualified to repeated intermediate transformation/regeneration and product output in an externally assembled and resourced CETCH 5.4 assay. A supplied enzyme cycle does not establish autocatalytic enzyme production, allosteric feedback stabilization, adaptive persistence, universal energy superiority or unbounded operation. Its relationship to the RNA network is conceptual and supplies no measured cross-system causal edge.",
      "scope": "Only the declared source system, preparation and finite observable or its explicit measurement/definition boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "supports",
          "note": "Actual primary main passage read, with source-version mapping and unreviewed supplement limits preserved. No independent reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed.",
        "Original Level 3, phase, type-role, science arrays and scientific-status labels are catalogue classifications, not independent empirical reproduction or proof of an ontological arising. Instance admission remains none.",
        "Original generic Evidence paragraphs with null DOI/URL create no additional theory papers, RAF proofs, isotope experiments, kinetic studies or comparative replications.",
        "Original parent weights, necessity labels, directions, modes, dependency codes, ontological arising labels, carrier group/type, minima, critical counts and null saturation are not measured causal fractions, experimental laws or universal construction rules.",
        "Card 3.14 parents are 3.0 Protein Folding, 3.1 Enzymatic Catalysis, 3.13 Autocatalytic Networks and 3.12 Allostery. Supplied catalysts do not measure folding history; metabolite regeneration does not produce those catalysts; no allosteric feedback experiment or universal carrier threshold is admitted. All four original edges and defaults are disposed in the report."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "M-bio-schwander2016-cetch10-stepwise-context",
      "kind": "method",
      "statement": "The CETCH 1.0 main-text stepwise preparation starts from chemically supplied propionyl-CoA, cofactors and bicarbonate-containing buffer. Propionyl-CoA carboxylase is added first, followed by eleven other enzymes; ferrocenium is added with methylsuccinyl-CoA dehydrogenase. HPLC-MS is the reported intermediate readout. Only this described order and input boundary is reconstructed; complete conditions and duration remain unknown.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "method",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source reports HPLC-MS transformation into key pathway intermediates and cites Figure S5. The unread supplement is required for exact sampling traces, each conversion yield and full protocol. This record does not assert a complete recurrent turn, every isolated reaction independently reproduced or indefinitely continuous operation."
      ],
      "contextIds": [
        "schwander2016-cetch10-stepwise"
      ]
    },
    {
      "id": "M-bio-schwander2016-cetch10-combined-context",
      "kind": "method",
      "statement": "For the source CETCH 1.0 combined-operation test, enzymes, cofactors and ferrocenium are present from the start; added propionyl-CoA initiates conversion and NaH13CO3 supplies labeled inorganic carbon. The main text reports ferrocenium limited to 0.1 mM because higher concentrations precipitated other assay enzymes. Full protocol, sampling duration, calibration and controls remain unread; this preparation is separate from stepwise addition and CETCH 5.4.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "method",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    },
    {
      "id": "C-bio-cetch10-stepwise-conversion",
      "kind": "review-finding",
      "statement": "The source reports HPLC-MS evidence that successive enzyme additions in CETCH 1.0 convert supplied propionyl-CoA into key pathway intermediates. This establishes source-reported stepwise conversion within the described preparation; it does not establish recurrent operation when all components are present together.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source reports HPLC-MS transformation into key pathway intermediates and cites Figure S5. The unread supplement is required for exact sampling traces, each conversion yield and full protocol. This record does not assert a complete recurrent turn, every isolated reaction independently reproduced or indefinitely continuous operation."
      ],
      "contextIds": [
        "schwander2016-cetch10-stepwise"
      ]
    },
    {
      "id": "C-bio-cetch10-combined-stall",
      "kind": "review-finding",
      "statement": "In the source CETCH 1.0 all-components-from-start test, CoA-ester conversion stopped at methylsuccinyl-CoA before a complete cycle turn. This is an explicit reported non-completion result, distinct from unknown assay details and from the authors’ proposed electron-acceptor explanation. The underlying Figure S6 traces and numerical observation window remain unread.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    },
    {
      "id": "C-bio-cetch10-electron-acceptor-attribution",
      "kind": "review-finding",
      "statement": "The authors interpret the CETCH 1.0 combined-operation stall as a methylsuccinyl-CoA dehydrogenase bottleneck. They propose that, at the usable 0.1 mM ferrocenium level, reduction by NADPH together with slow ferrocene reoxidation most likely prevented effective cycling; higher starting ferrocenium is reported to precipitate other enzymes. This is the source’s mechanism attribution, unresolved by the presently reviewed controls, rather than a newly verified causal identification.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "unresolved",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    },
    {
      "id": "C-bio-cetch54-supplied-assembly",
      "kind": "review-finding",
      "statement": "The admitted CETCH 5.4 preparation is an externally assembled enzyme network supplied with propionyl-CoA, labeled bicarbonate and cofactors/regeneration/protection resources. The source reports thirteen core reactions with auxiliary proofreading and cofactor regeneration, catalyzed by seventeen enzymes, plus a malate-synthase/externally supplied acetyl-CoA product trap. This record describes the supplied system and its material boundary; individual resource necessity and an arrangement-only intervention are not established.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is the supplied composition of the existing CETCH 5.4 assay, not an added resource-removal experiment. Presence of a supplied input or auxiliary enzyme does not establish its individual necessity, effect size, minimal amount or sufficiency.",
        "The source main text describes ATP/NADPH regeneration, chemical/enzymatic protection and proofreading during optimization. Exact component identities, amounts, removal controls and version-specific protocols require the unread supplement. These resources are not an inferred 1.0 protocol.",
        "Seventeen enzymes and thirteen core reactions are distinct source counts, not an independently reconstructed enzyme stoichiometry or a universal minimum. The coupled malate output also consumes externally supplied acetyl-CoA.",
        "The admitted CETCH 5.4 isotope/product context remains finite at 90 minutes. The input/auxiliary composition does not itself measure long-term maintenance, catalyst replacement, adaptive regulation or resource autonomy."
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "C-bio-cetch-composition-nonsufficiency",
      "kind": "review-finding",
      "statement": "Within this one source, reported stepwise intermediate conversion in CETCH 1.0 coexists with a reported failure to complete one turn under its combined preparation, while redesigned CETCH 5.4 supports finite recurrent isotope/product output. Thus stepwise conversion alone is insufficient evidence for recurrent combined operation. The comparison does not identify a unique redesign cause, a common quantitative flux contrast, an isolated resource effect or a universal law of network composition.",
      "scope": "Only the source-reported CETCH preparation, observation or explicitly qualified interpretation; no independent experimental replication or complete protocol reconstruction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism",
          "role": "supports",
          "note": "Primary published main-text passage reread; referenced supplementary methods/traces/controls remain unread. Source report and mechanism attribution are distinguished; no independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "This is the supplied composition of the existing CETCH 5.4 assay, not an added resource-removal experiment. Presence of a supplied input or auxiliary enzyme does not establish its individual necessity, effect size, minimal amount or sufficiency.",
        "The source main text describes ATP/NADPH regeneration, chemical/enzymatic protection and proofreading during optimization. Exact component identities, amounts, removal controls and version-specific protocols require the unread supplement. These resources are not an inferred 1.0 protocol.",
        "Seventeen enzymes and thirteen core reactions are distinct source counts, not an independently reconstructed enzyme stoichiometry or a universal minimum. The coupled malate output also consumes externally supplied acetyl-CoA.",
        "The admitted CETCH 5.4 isotope/product context remains finite at 90 minutes. The input/auxiliary composition does not itself measure long-term maintenance, catalyst replacement, adaptive regulation or resource autonomy."
      ],
      "contextIds": [
        "schwander2016-cetch10-stepwise",
        "schwander2016-cetch10-combined",
        "schwander2016-cetch54-isotope-product"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:lincoln2009-pair-serial-transfer-context",
      "name": "RNA cross-catalytic pair transfer context",
      "kind": "context",
      "description": "Main-text paired E/E-prime RNA ligation/amplification assay: supplied seed RNA pair and four sequence-specific component substrates, 25 mM MgCl2, EPPS buffer pH 8.5, 42 degrees C. Newly ligated radiolabeled products are separated by denaturing PAGE and product accumulation is fit to logistic growth. Figure 2 includes batch depletion and six successive five-hour incubations with 4 percent carryover into fresh substrate, totaling 30 hours. Only these main-text-defined boundaries are admitted; complete preparative methods, calibration and supplementary controls are unread.",
      "claimIds": [
        "M-bio-lincoln2009-pair-serial-transfer-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "level": 3
    },
    {
      "id": "bio:schwander2016-cetch54-isotope-product-context",
      "name": "CETCH finite isotope/product context",
      "kind": "context",
      "description": "CETCH 5.4 supplied in vitro enzyme network and source Figure 2 assay: initiate from supplied propionyl-CoA with NaH13CO3 and externally supplied cofactors/regeneration/protection resources. Follow six CoA intermediates and their fractional isotope labeling over 90 minutes; couple glyoxylate output to malate synthase and externally added acetyl-CoA. Source final volume is 0.52 ml with 2.3 mg/ml core cycle proteins plus 0.8 mg/ml auxiliary proteins. Full buffer, temperature, enzyme concentrations/calibration and supplemental controls remain unread and are not invented.",
      "claimIds": [
        "M-bio-schwander2016-cetch54-isotope-product-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "level": 3
    },
    {
      "id": "bio:autocatalytic-network-measurement-boundary",
      "name": "Catalytic closure and resource boundary",
      "kind": "definition",
      "description": "For this finite case, distinguish reciprocal ligation-based production of two RNA catalysts from synthesis of all substrates/resources, arbitrary genome copying, protein enzyme ancestry, formal RAF/food-generated closure and indefinite autonomous persistence. Observed externally replenished amplification does not establish all of those broader properties.",
      "claimIds": [
        "D-bio-autocatalytic-network-measurement-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "level": 3
    },
    {
      "id": "bio:metabolic-cycle-measurement-boundary",
      "name": "Cyclic regeneration and flux boundary",
      "kind": "definition",
      "description": "Distinguish a designed cyclic topology, stepwise conversion, repeated intermediate labeling, coupled product output, stoichiometric accounting and autonomous regulated metabolism. The supplied CETCH network can support finite recurrent operation without reproducing its enzyme catalysts or proving every steady-state/energy/feedback claim.",
      "claimIds": [
        "D-bio-metabolic-cycle-measurement-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "level": 3
    },
    {
      "id": "bio:rna-reciprocal-catalyst-production",
      "name": "Reciprocal RNA catalyst production",
      "kind": "scoped-structure",
      "description": "The selected R3C-derived RNA enzymes each catalyze ligation of two supplied oligoribonucleotide substrates to produce the reciprocal enzyme. The source paired amplification vessel contains no protein catalyst; this supports a particular cross-catalytic RNA organization rather than a universal protein-first reaction network.",
      "claimIds": [
        "C-bio-rna-reciprocal-catalyst-production",
        "M-bio-rna-network-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "level": 3
    },
    {
      "id": "bio:rna-finite-serial-amplification",
      "name": "Finite RNA serial amplification",
      "kind": "scoped-process",
      "description": "The source paired RNA products increase with logistic-shaped batch growth that levels as substrates deplete. Six five-hour incubations with 4 percent carryover and fresh substrate sustain amplification for 30 hours; the source reports cumulative dilution-corrected amplification greater than 10^8 for each enzyme. This finite observation supports replenishment-dependent cross-catalysis, with no observed infinite duration or complete resource autonomy.",
      "claimIds": [
        "C-bio-rna-finite-serial-amplification",
        "M-bio-rna-network-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch-intermediate-product-observation",
      "name": "CETCH labeling and coupled output",
      "kind": "scoped-process",
      "description": "For source CETCH 5.4, six intermediate abundance/isotopologue time courses become progressively labeled over 90 minutes while the coupled trap yields source-reported 540 micromolar malate. The authors assign this to 1080 micromolar fixed CO2 and approximately 5 nmol CO2 per minute per mg core protein using their topology and stoichiometry. Malate also incorporates externally supplied acetyl-CoA carbon, and these printed values/uncertainties are not independently reconstructed.",
      "claimIds": [
        "C-bio-cetch-intermediate-product-observation",
        "M-bio-cetch-cycle-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch-finite-cyclic-operation",
      "name": "Finite supplied CETCH cyclic operation",
      "kind": "scoped-process",
      "description": "The joint isotope-label/product evidence supports recurrent carbon-fixation operation in the supplied CETCH 5.4 network over the measured 90-minute interval. This goes beyond isolated stepwise conversion, which had not assured operation of CETCH 1.0, but remains a conditional source interpretation of finite cyclic flux rather than autonomous catalyst synthesis, complete mass balance, global steady state or adaptive regulation.",
      "claimIds": [
        "C-bio-cetch-finite-cyclic-operation",
        "M-bio-cetch-cycle-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "level": 3
    },
    {
      "id": "bio:autocatalytic-network-source-scope",
      "name": "Finite cross-catalytic network scope",
      "kind": "scoped-process",
      "description": "Card 3.13 is qualified to a defined protein-free pair of mutually catalytic RNA ligation reactions with observed substrate-dependent batch/serial amplification. The source supports a finite prepared network organization; formal RAF generality, historical early-life stage, unrestricted component self-production, universal protein/cooperativity prerequisites and indefinite autonomous persistence are outside admission.",
      "claimIds": [
        "C-bio-autocatalytic-network-source-scope",
        "M-bio-rna-network-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers"
        },
        {
          "sourceId": "lincoln2009-cross-catalytic-rna",
          "locator": "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/13"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed.",
        "Original Level 3, phase, type-role, science arrays and scientific-status labels are catalogue classifications, not independent empirical reproduction or proof of an ontological arising. Instance admission remains none.",
        "Original generic Evidence paragraphs with null DOI/URL create no additional theory papers, RAF proofs, isotope experiments, kinetic studies or comparative replications.",
        "Original parent weights, necessity labels, directions, modes, dependency codes, ontological arising labels, carrier group/type, minima, critical counts and null saturation are not measured causal fractions, experimental laws or universal construction rules.",
        "Card 3.13 parents are 3.0 Protein Folding, 3.1 Enzymatic Catalysis, 3.5 Cooperativity and 3.7 RNA Folding. The observed protein-free RNA amplification does not require the first two parents' protein-centric descriptions or the stated protein carrier counts; RNA catalytic activity is a finite contextual dependency rather than a universal weighted ancestry. All four original edges and defaults are disposed in the reading report."
      ],
      "level": 3
    },
    {
      "id": "bio:metabolic-cycle-source-scope",
      "name": "Finite metabolic-cycle scope",
      "kind": "scoped-process",
      "description": "Card 3.14 is qualified to repeated intermediate transformation/regeneration and product output in an externally assembled and resourced CETCH 5.4 assay. A supplied enzyme cycle does not establish autocatalytic enzyme production, allosteric feedback stabilization, adaptive persistence, universal energy superiority or unbounded operation. Its relationship to the RNA network is conceptual and supplies no measured cross-system causal edge. Source CETCH 1.0 stepwise success and combined non-completion are represented separately, with unknown protocol details retained and the electron-acceptor explanation unresolved.",
      "claimIds": [
        "C-bio-metabolic-cycle-source-scope",
        "M-bio-cetch-cycle-interpretation-method",
        "C-bio-cetch-composition-nonsufficiency"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/14"
        }
      ],
      "openObligations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed.",
        "Original Level 3, phase, type-role, science arrays and scientific-status labels are catalogue classifications, not independent empirical reproduction or proof of an ontological arising. Instance admission remains none.",
        "Original generic Evidence paragraphs with null DOI/URL create no additional theory papers, RAF proofs, isotope experiments, kinetic studies or comparative replications.",
        "Original parent weights, necessity labels, directions, modes, dependency codes, ontological arising labels, carrier group/type, minima, critical counts and null saturation are not measured causal fractions, experimental laws or universal construction rules.",
        "Card 3.14 parents are 3.0 Protein Folding, 3.1 Enzymatic Catalysis, 3.13 Autocatalytic Networks and 3.12 Allostery. Supplied catalysts do not measure folding history; metabolite regeneration does not produce those catalysts; no allosteric feedback experiment or universal carrier threshold is admitted. All four original edges and defaults are disposed in the report."
      ],
      "level": 3
    },
    {
      "id": "bio:schwander2016-cetch10-stepwise-context",
      "name": "CETCH 1.0 stepwise-addition context",
      "kind": "context",
      "description": "The CETCH 1.0 main-text stepwise preparation starts from chemically supplied propionyl-CoA, cofactors and bicarbonate-containing buffer. Propionyl-CoA carboxylase is added first, followed by eleven other enzymes; ferrocenium is added with methylsuccinyl-CoA dehydrogenase. HPLC-MS is the reported intermediate readout. Only this described order and input boundary is reconstructed; complete conditions and duration remain unknown.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-stepwise-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        }
      ],
      "openObligations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source reports HPLC-MS transformation into key pathway intermediates and cites Figure S5. The unread supplement is required for exact sampling traces, each conversion yield and full protocol. This record does not assert a complete recurrent turn, every isolated reaction independently reproduced or indefinitely continuous operation."
      ],
      "level": 3
    },
    {
      "id": "bio:schwander2016-cetch10-combined-context",
      "name": "CETCH 1.0 combined-operation context",
      "kind": "context",
      "description": "For the source CETCH 1.0 combined-operation test, enzymes, cofactors and ferrocenium are present from the start; added propionyl-CoA initiates conversion and NaH13CO3 supplies labeled inorganic carbon. The main text reports ferrocenium limited to 0.1 mM because higher concentrations precipitated other assay enzymes. Full protocol, sampling duration, calibration and controls remain unread; this preparation is separate from stepwise addition and CETCH 5.4.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-combined-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        }
      ],
      "openObligations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch10-stepwise-conversion",
      "name": "CETCH 1.0 reported stepwise conversion",
      "kind": "scoped-process",
      "description": "The source reports HPLC-MS evidence that successive enzyme additions in CETCH 1.0 convert supplied propionyl-CoA into key pathway intermediates. This establishes source-reported stepwise conversion within the described preparation; it does not establish recurrent operation when all components are present together.",
      "claimIds": [
        "C-bio-cetch10-stepwise-conversion"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        }
      ],
      "openObligations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source reports HPLC-MS transformation into key pathway intermediates and cites Figure S5. The unread supplement is required for exact sampling traces, each conversion yield and full protocol. This record does not assert a complete recurrent turn, every isolated reaction independently reproduced or indefinitely continuous operation."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch10-combined-stall",
      "name": "CETCH 1.0 reported incomplete combined turn",
      "kind": "scoped-process",
      "description": "In the source CETCH 1.0 all-components-from-start test, CoA-ester conversion stopped at methylsuccinyl-CoA before a complete cycle turn. This is an explicit reported non-completion result, distinct from unknown assay details and from the authors’ proposed electron-acceptor explanation. The underlying Figure S6 traces and numerical observation window remain unread.",
      "claimIds": [
        "C-bio-cetch10-combined-stall"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        }
      ],
      "openObligations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch10-electron-acceptor-attribution",
      "name": "CETCH 1.0 proposed electron-acceptor bottleneck",
      "kind": "hypothesis",
      "description": "The authors interpret the CETCH 1.0 combined-operation stall as a methylsuccinyl-CoA dehydrogenase bottleneck. They propose that, at the usable 0.1 mM ferrocenium level, reduction by NADPH together with slow ferrocene reoxidation most likely prevented effective cycling; higher starting ferrocenium is reported to precipitate other enzymes. This is the source’s mechanism attribution, unresolved by the presently reviewed controls, rather than a newly verified causal identification.",
      "claimIds": [
        "C-bio-cetch10-electron-acceptor-attribution"
      ],
      "status": "hypothesis",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
        }
      ],
      "openObligations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "level": 3
    },
    {
      "id": "bio:cetch54-supplied-assembly",
      "name": "CETCH 5.4 supplied enzyme and resource assembly",
      "kind": "scoped-structure",
      "description": "The admitted CETCH 5.4 preparation is an externally assembled enzyme network supplied with propionyl-CoA, labeled bicarbonate and cofactors/regeneration/protection resources. The source reports thirteen core reactions with auxiliary proofreading and cofactor regeneration, catalyzed by seventeen enzymes, plus a malate-synthase/externally supplied acetyl-CoA product trap. This record describes the supplied system and its material boundary; individual resource necessity and an arrangement-only intervention are not established.",
      "claimIds": [
        "C-bio-cetch54-supplied-assembly"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization"
        },
        {
          "sourceId": "schwander2016-cetch-cycle",
          "locator": "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
        }
      ],
      "openObligations": [
        "This is the supplied composition of the existing CETCH 5.4 assay, not an added resource-removal experiment. Presence of a supplied input or auxiliary enzyme does not establish its individual necessity, effect size, minimal amount or sufficiency.",
        "The source main text describes ATP/NADPH regeneration, chemical/enzymatic protection and proofreading during optimization. Exact component identities, amounts, removal controls and version-specific protocols require the unread supplement. These resources are not an inferred 1.0 protocol.",
        "Seventeen enzymes and thirteen core reactions are distinct source counts, not an independently reconstructed enzyme stoichiometry or a universal minimum. The coupled malate output also consumes externally supplied acetyl-CoA.",
        "The admitted CETCH 5.4 isotope/product context remains finite at 90 minutes. The input/auxiliary composition does not itself measure long-term maintenance, catalyst replacement, adaptive regulation or resource autonomy."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:autocatalytic-network-measurement-boundary-autocatalytic-network-source-scope",
      "source": "bio:autocatalytic-network-measurement-boundary",
      "target": "bio:autocatalytic-network-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The definition separates finite reciprocal production from stronger closure/autonomy claims.",
      "claimIds": [
        "D-bio-autocatalytic-network-measurement-boundary"
      ]
    },
    {
      "id": "biochemistry:metabolic-cycle-measurement-boundary-metabolic-cycle-source-scope",
      "source": "bio:metabolic-cycle-measurement-boundary",
      "target": "bio:metabolic-cycle-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The definition separates finite cyclic operation from autonomous regulated metabolism.",
      "claimIds": [
        "D-bio-metabolic-cycle-measurement-boundary"
      ]
    },
    {
      "id": "biochemistry:lincoln2009-pair-serial-transfer-context-rna-reciprocal-catalyst-production",
      "source": "bio:lincoln2009-pair-serial-transfer-context",
      "target": "bio:rna-reciprocal-catalyst-production",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The reciprocal RNA account belongs to the declared paired assay.",
      "claimIds": [
        "M-bio-lincoln2009-pair-serial-transfer-context",
        "C-bio-rna-reciprocal-catalyst-production"
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "biochemistry:lincoln2009-pair-serial-transfer-context-rna-finite-serial-amplification",
      "source": "bio:lincoln2009-pair-serial-transfer-context",
      "target": "bio:rna-finite-serial-amplification",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The finite transfer readout retains the main-text paired context.",
      "claimIds": [
        "M-bio-lincoln2009-pair-serial-transfer-context",
        "C-bio-rna-finite-serial-amplification"
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "biochemistry:rna-reciprocal-catalyst-production-rna-finite-serial-amplification",
      "source": "bio:rna-reciprocal-catalyst-production",
      "target": "bio:rna-finite-serial-amplification",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reciprocal topology and product accumulation inform the finite cross-catalytic interpretation; no new isolated intervention edge is inferred.",
      "claimIds": [
        "M-bio-rna-network-interpretation-method",
        "C-bio-rna-reciprocal-catalyst-production",
        "C-bio-rna-finite-serial-amplification"
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "biochemistry:rna-finite-serial-amplification-autocatalytic-network-source-scope",
      "source": "bio:rna-finite-serial-amplification",
      "target": "bio:autocatalytic-network-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Observed finite replenished amplification bounds the network card.",
      "claimIds": [
        "M-bio-rna-network-interpretation-method",
        "C-bio-rna-finite-serial-amplification",
        "C-bio-autocatalytic-network-source-scope"
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "biochemistry:rna-reciprocal-catalyst-production-autocatalytic-network-source-scope",
      "source": "bio:rna-reciprocal-catalyst-production",
      "target": "bio:autocatalytic-network-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Protein-free reciprocal ligation bounds the network organization and parent interpretation.",
      "claimIds": [
        "M-bio-rna-network-interpretation-method",
        "C-bio-rna-reciprocal-catalyst-production",
        "C-bio-autocatalytic-network-source-scope"
      ],
      "contextIds": [
        "lincoln2009-pair-serial-transfer"
      ]
    },
    {
      "id": "biochemistry:schwander2016-cetch54-isotope-product-context-cetch-intermediate-product-observation",
      "source": "bio:schwander2016-cetch54-isotope-product-context",
      "target": "bio:cetch-intermediate-product-observation",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The label/product readouts retain the supplied CETCH assay and external trap.",
      "claimIds": [
        "M-bio-schwander2016-cetch54-isotope-product-context",
        "C-bio-cetch-intermediate-product-observation"
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "biochemistry:cetch-intermediate-product-observation-cetch-finite-cyclic-operation",
      "source": "bio:cetch-intermediate-product-observation",
      "target": "bio:cetch-finite-cyclic-operation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Cycling is interpreted jointly from isotope enrichment and product accounting under topology assumptions.",
      "claimIds": [
        "M-bio-cetch-cycle-interpretation-method",
        "C-bio-cetch-intermediate-product-observation",
        "C-bio-cetch-finite-cyclic-operation"
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "biochemistry:cetch-finite-cyclic-operation-metabolic-cycle-source-scope",
      "source": "bio:cetch-finite-cyclic-operation",
      "target": "bio:metabolic-cycle-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite cycling account qualifies the original cycle promises and defaults.",
      "claimIds": [
        "M-bio-cetch-cycle-interpretation-method",
        "C-bio-cetch-finite-cyclic-operation",
        "C-bio-metabolic-cycle-source-scope"
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "biochemistry:cetch10-stepwise-context-conversion",
      "source": "bio:schwander2016-cetch10-stepwise-context",
      "target": "bio:cetch10-stepwise-conversion",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The source-reported stepwise HPLC-MS result retains its addition order and unknown full protocol.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-stepwise-context",
        "C-bio-cetch10-stepwise-conversion"
      ],
      "contextIds": [
        "schwander2016-cetch10-stepwise"
      ]
    },
    {
      "id": "biochemistry:cetch10-combined-context-stall",
      "source": "bio:schwander2016-cetch10-combined-context",
      "target": "bio:cetch10-combined-stall",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The reported incomplete turn belongs to the combined CETCH 1.0 preparation, with the unreviewed supplemental trace explicit.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-combined-context",
        "C-bio-cetch10-combined-stall"
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    },
    {
      "id": "biochemistry:cetch10-stall-electron-acceptor-attribution",
      "source": "bio:cetch10-combined-stall",
      "target": "bio:cetch10-electron-acceptor-attribution",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The stall informs the source’s proposed electron-acceptor explanation; the dependency is not a verified mechanism or direct causal intervention.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-combined-context",
        "C-bio-cetch10-combined-stall",
        "C-bio-cetch10-electron-acceptor-attribution"
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    },
    {
      "id": "biochemistry:cetch54-context-supplied-assembly",
      "source": "bio:schwander2016-cetch54-isotope-product-context",
      "target": "bio:cetch54-supplied-assembly",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The supplied assembly retains the existing 5.4 assay boundary; presence of resources is not an omission control or proof of necessity.",
      "claimIds": [
        "M-bio-schwander2016-cetch54-isotope-product-context",
        "C-bio-cetch54-supplied-assembly"
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "biochemistry:cetch54-supplied-assembly-finite-operation",
      "source": "bio:cetch54-supplied-assembly",
      "target": "bio:cetch-finite-cyclic-operation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite recurrent-operation interpretation is bounded by the supplied preparation; no autonomous maintenance or isolated component effect follows.",
      "claimIds": [
        "M-bio-cetch-cycle-interpretation-method",
        "C-bio-cetch54-supplied-assembly",
        "C-bio-cetch-finite-cyclic-operation"
      ],
      "contextIds": [
        "schwander2016-cetch54-isotope-product"
      ]
    },
    {
      "id": "biochemistry:cetch10-stepwise-metabolic-scope",
      "source": "bio:cetch10-stepwise-conversion",
      "target": "bio:metabolic-cycle-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The stepwise report contributes to the same-source composition comparison, not an independently confirmed general construction law.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-stepwise-context",
        "C-bio-cetch10-stepwise-conversion",
        "C-bio-cetch-composition-nonsufficiency"
      ],
      "contextIds": [
        "schwander2016-cetch10-stepwise"
      ]
    },
    {
      "id": "biochemistry:cetch10-stall-metabolic-scope",
      "source": "bio:cetch10-combined-stall",
      "target": "bio:metabolic-cycle-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Explicit combined non-completion qualifies the inference from working steps to recurrent network operation.",
      "claimIds": [
        "M-bio-schwander2016-cetch10-combined-context",
        "C-bio-cetch10-combined-stall",
        "C-bio-cetch-composition-nonsufficiency"
      ],
      "contextIds": [
        "schwander2016-cetch10-combined"
      ]
    }
  ],
  "studies": [
    {
      "id": "lincoln2009-pair-serial-transfer",
      "sourceId": "lincoln2009-cross-catalytic-rna",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.1167856",
      "journal": "Science",
      "volume": "323",
      "issue": "5918",
      "pages": "1229-1232",
      "system": "Prepared reciprocal RNA ligase pair with supplied oligoribonucleotide fragments",
      "preparation": "Main-text paired E/E-prime RNA ligation/amplification assay: supplied seed RNA pair and four sequence-specific component substrates, 25 mM MgCl2, EPPS buffer pH 8.5, 42 degrees C. Newly ligated radiolabeled products are separated by denaturing PAGE and product accumulation is fit to logistic growth. Figure 2 includes batch depletion and six successive five-hour incubations with 4 percent carryover into fresh substrate, totaling 30 hours. Only these main-text-defined boundaries are admitted; complete preparative methods, calibration and supplementary controls are unread.",
      "observable": "Radiolabeled full-length ligation-product accumulation, logistic growth fit and finite serial-transfer yields",
      "finding": "The source reports finite substrate-replenished amplification of a mutually catalytic RNA pair.",
      "limitations": [
        "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here.",
        "The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary.",
        "The catalysts are RNA ligases supplied as a starting seed and assembled from supplied sequence-specific oligoribonucleotide fragments with activated 5-prime triphosphates. This is not nucleotide-by-nucleotide copying, arbitrary genome replication, de novo nucleotide/fragment synthesis, or self-production of every resource.",
        "The pair assay contains no proteins during amplification. Prior laboratory synthesis/evolution/preparation can use biological machinery; absence of proteins in the amplification vessel does not mean the entire experimental production history was protein-free.",
        "A denaturing gel separates labeled substrates and full-length ligation products; the source fits product accumulation to a logistic growth model. That fit and the reciprocal reaction topology support finite cross-catalytic amplification, not an independently reconstructed fold/tertiary structure or proof of every catalytic-closure axiom of an arbitrary RAF network.",
        "Single-batch growth levels off as substrates are depleted. Six successive five-hour incubations with 4 percent carryover and fresh substrate demonstrate 30 hours of operation; the reported cumulative amplification greater than 10^8 accounts for serial dilution and is not the final vessel concentration. Indefinite continuation is conditional extrapolation beyond the observed series.",
        "The mixed population is a different preparation with 15 mM rather than 25 mM MgCl2, many supplied substrates and 5 percent transfer. Its finite 100-hour result is read but not a second independent publication or the same paired-assay context. It is not admitted here as open-ended evolution or a new arbitrary-function genetic system.",
        "No protein-folding prerequisite, universal protein catalytic ancestry, site cooperativity, allosteric feedback, physical compartment requirement, spontaneous prebiotic origin, unrestricted food generation, living autonomy or universal network persistence is established.",
        "No raw gel acquisition, independent fit, isotope/radiolabel calibration, numerical replay, experimental replication or new experimental optimization was performed."
      ],
      "readExtent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
      "reviewedLocators": [
        "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
        "Published pages 1229-1231 and Figure 2A-B; PMC author manuscript Figure 2A-B and paragraphs beginning A reaction mixture was prepared and Exponential growth can be continued: radiolabeled gel readout, logistic fit and six successive five-hour transfers",
        "Published pages 1230-1232 and Figure 3A-D; PMC author manuscript Figures 3-5 and final discussion: finite mixed-population transfers, substrate inhibition/recombination, simplified genetic scope and future open-ended-function challenge"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1126/science.1167856",
      "correctionCheck": "The complete actual published article pages 1229-1232 and complete PMC author main text were read. The published version has three figures, whereas the longer author manuscript has five; locators retain both mappings. The published PDF also contains portions of unrelated adjacent articles, which supply no evidence here. The Supporting Online Material was not read: direct archive endpoints returned small HTML challenges and publisher access failed. Complete RNA preparation, calibration, background/no-enzyme controls, replicate definitions and supplementary figures S1-S2 are not reconstructed. Main-text assay details and its observed finite transfer series are the admitted boundary. Identity agrees between actual title block, Crossref and Europe PMC core metadata. Lincoln: Science 323(5918):1229-1232, online 8 January 2009 and issue 27 February 2009, PMID 19131595. Schwander: Science 354(6314):900-904, 18 November 2016, PMID 27856910. Checked on 2026-10-20. Crossref has review links but no correction/update relation; Europe PMC lists a CETCH perspective as Comment in, not a correction. Limited title/DOI correction searches found no explicit linked correction; this is not proof that none exists."
    },
    {
      "id": "schwander2016-cetch54-isotope-product",
      "sourceId": "schwander2016-cetch-cycle",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.aah5237",
      "journal": "Science",
      "volume": "354",
      "issue": "6314",
      "pages": "900-904",
      "system": "Supplied cell-free CETCH 5.4 protein-enzyme carbon-fixation network",
      "preparation": "CETCH 5.4 supplied in vitro enzyme network and source Figure 2 assay: initiate from supplied propionyl-CoA with NaH13CO3 and externally supplied cofactors/regeneration/protection resources. Follow six CoA intermediates and their fractional isotope labeling over 90 minutes; couple glyoxylate output to malate synthase and externally added acetyl-CoA. Source final volume is 0.52 ml with 2.3 mg/ml core cycle proteins plus 0.8 mg/ml auxiliary proteins. Full buffer, temperature, enzyme concentrations/calibration and supplemental controls remain unread and are not invented.",
      "observable": "CoA-intermediate abundances/fractional 13C labeling and coupled malate production over 90 minutes",
      "finding": "Joint source isotope/product evidence supports finite recurrent operation of supplied CETCH 5.4.",
      "limitations": [
        "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence.",
        "The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction.",
        "The admitted case is a supplied and externally assembled in vitro enzyme network. Mature enzymes, cofactors, chemical starting acceptor and resource/regeneration inputs are supplied; it does not synthesize its enzyme catalysts, produce an autonomous cell, or demonstrate collectively autocatalytic production of all network components.",
        "Stepwise conversion in CETCH 1.0 did not establish continuous cycling: the simultaneously combined version stalled before a complete turn at methylsuccinyl-CoA. The main text attributes this to electron-acceptor limitations; the underlying supplementary controls are not newly verified.",
        "CETCH 5.4 has 13 named core reactions plus auxiliary proofreading/cofactor regeneration, with 17 enzymes from nine organisms in the complete source system. Reaction count, enzyme count and biological origins are distinct; they are not universal carrier minima or independently verified assembly stoichiometry.",
        "The principal evidence combines six intermediate abundance/isotopologue time courses with a source-topology interpretation and a coupled malate assay. Glyoxylate is trapped by supplied malate synthase using externally added acetyl-CoA. Malate contains externally supplied carbon and is not itself a product composed solely of the fixed CO2.",
        "Source Figure 2C reports 540 micromolar malate over 90 minutes, corresponding in its two-CO2-per-glyoxylate stoichiometric accounting to 1080 micromolar fixed CO2. The cited approximately 5 nmol CO2 per minute per mg uses core cycle protein, not all supplied proteins. These are source-reported values, not independently reproduced quantities or uncertainties.",
        "Progressive 13C enrichment constrains repeated pathway passage under the declared topology. It does not directly track every individual molecule, prove a global steady state, reveal all side fluxes, certify complete mass balance or establish unbounded throughput. Finite intermediate levels change over the same assay.",
        "Thermodynamic profiles, ATP equivalents and hypothetical photon costs in Table 1 are calculations under adopted stoichiometry, P/O and photophosphorylation assumptions. No calorimetry, complete energy balance, realized photosynthetic coupling or universal energetic superiority follows.",
        "Different CETCH versions alter enzymes, regeneration, protection and side-reaction handling together. No isolated allosteric feedback variable, universally adaptive stabilization mechanism, matched direct comparison with a natural in vivo cycle, or unique causal contribution of each change is admitted.",
        "No long-term robustness under varying conditions, homeostatic flux control, adaptive persistence, membrane transport, autonomous catalyst replacement, origin-of-life sequence or universal requirement for a prior autocatalytic RNA network is measured.",
        "No raw HPLC-MS data replay, model fitting, calibration reconstruction, independent acquisition or laboratory optimization is claimed."
      ],
      "readExtent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
      "reviewedLocators": [
        "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
        "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation",
        "Published pages 902-903 and Figure 2A-C; corresponding PMC author main text from After successful demonstration through In total: CETCH 5.4 intermediate isotope labeling, coupled malate readout, supplied cofactors/acceptor, finite 90-minute output and protein normalization",
        "Published pages 902-904, Discussion, acknowledgments and references; corresponding complete PMC author main text: external assembly/proofreading/cofactor regeneration, unmatched cell-extract comparison and future self-sustained metabolism"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1126/science.aah5237",
      "correctionCheck": "The complete actual published article pages 900-904 and complete PMC author main text, both figures and Table 1 were read. The downloaded six-page university PDF includes an additional references page and adjacent article text; only the identified CETCH article supplies evidence. The supplement containing detailed Methods, supplementary text, Figures S1-S14 and Tables S1-S8 was not read. Archive files were HTML challenges; publisher access failed and the author repository exposes only a publisher link. Complete buffer, temperature, enzyme preparation, calibration, raw mass spectra, replicate counts and supplementary controls remain outside reconstruction. Identity agrees between actual title block, Crossref and Europe PMC core metadata. Lincoln: Science 323(5918):1229-1232, online 8 January 2009 and issue 27 February 2009, PMID 19131595. Schwander: Science 354(6314):900-904, 18 November 2016, PMID 27856910. Checked on 2026-10-20. Crossref has review links but no correction/update relation; Europe PMC lists a CETCH perspective as Comment in, not a correction. Limited title/DOI correction searches found no explicit linked correction; this is not proof that none exists."
    },
    {
      "id": "schwander2016-cetch10-stepwise",
      "sourceId": "schwander2016-cetch-cycle",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.aah5237",
      "journal": "Science",
      "volume": "354",
      "issue": "6314",
      "pages": "900-904",
      "system": "Source-reported CETCH 1.0 sequential enzyme-addition preparation",
      "preparation": "The CETCH 1.0 main-text stepwise preparation starts from chemically supplied propionyl-CoA, cofactors and bicarbonate-containing buffer. Propionyl-CoA carboxylase is added first, followed by eleven other enzymes; ferrocenium is added with methylsuccinyl-CoA dehydrogenase. HPLC-MS is the reported intermediate readout. Only this described order and input boundary is reconstructed; complete conditions and duration remain unknown.",
      "observable": "Source-reported HPLC-MS detection of key intermediates during sequential addition; supplementary traces unread",
      "finding": "The source reports stepwise conversion of propionyl-CoA into key pathway intermediates, without establishing recurrent all-components-from-start operation.",
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source reports HPLC-MS transformation into key pathway intermediates and cites Figure S5. The unread supplement is required for exact sampling traces, each conversion yield and full protocol. This record does not assert a complete recurrent turn, every isolated reaction independently reproduced or indefinitely continuous operation."
      ],
      "readExtent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
      "reviewedLocators": [
        "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1126/science.aah5237",
      "correctionCheck": "The source identity and metadata retain the existing 2026-10-20 main-article review. Published page 901 preparation/result paragraphs were reread against the local published article and the primary PMC indexed text. Publisher and PMC supplement retrievals remained inaccessible. No new correction search, complete supplementary protocol review, raw-data review or independent replication was performed."
    },
    {
      "id": "schwander2016-cetch10-combined",
      "sourceId": "schwander2016-cetch-cycle",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.aah5237",
      "journal": "Science",
      "volume": "354",
      "issue": "6314",
      "pages": "900-904",
      "system": "Source-reported CETCH 1.0 all-components-from-start preparation",
      "preparation": "For the source CETCH 1.0 combined-operation test, enzymes, cofactors and ferrocenium are present from the start; added propionyl-CoA initiates conversion and NaH13CO3 supplies labeled inorganic carbon. The main text reports ferrocenium limited to 0.1 mM because higher concentrations precipitated other assay enzymes. Full protocol, sampling duration, calibration and controls remain unread; this preparation is separate from stepwise addition and CETCH 5.4.",
      "observable": "Source-reported CoA-ester conversion stopping at methylsuccinyl-CoA before one complete turn; detailed traces and duration unread",
      "finding": "The source reports incomplete combined operation. Its electron-acceptor explanation remains a separately qualified interpretation, not an independently reviewed causal identification.",
      "limitations": [
        "The CETCH 1.0 paragraphs on published page 901 and the CETCH 5.4 main-text passage and Figure 2 were reread on 2026-10-20. Supporting Methods, Supplementary Text and Figures S5-S8 were not read. Publisher and PMC supplement retrievals remained inaccessible. A main-text report is retained without representing its referenced supplementary acquisition as newly inspected.",
        "The two CETCH 1.0 contexts are preparation descriptions from one primary publication, not independent replications or newly reconstructed complete protocols. Buffer composition, pH, temperature, individual concentrations, sampling schedule, reaction duration, replicate definition, uncertainty and raw HPLC-MS calibration remain unknown here; no values are inherited from the 5.4 assay.",
        "Sequential enzyme addition and simultaneous all-components-from-start operation differ in preparation and electron-acceptor timing. Their contrast does not isolate a single organization variable or quantify an arrangement-only causal effect.",
        "CETCH versions are externally assembled enzyme preparations. Neither source-reported stepwise conversion nor the later 90-minute isotope/product assay establishes autonomous enzyme production, resource self-sufficiency, complete mass balance, universal stability or a minimal carrier count.",
        "No source figure was digitized, raw mass spectrum replayed, laboratory experiment repeated or quantitative model fit reconstructed.",
        "The source main text reports CoA-ester conversion stopping at methylsuccinyl-CoA before a complete cycle turn and cites Figure S6. The observation window, detailed traces and complete controls are unread; no numerical flux or exact zero microscopic rate is inferred.",
        "The main text separately reports an upper ferrocenium concentration constraint from precipitation and proposes rapid NADPH reduction plus slow acceptor reoxidation as the explanation for failed effective cycling. The stall observation does not uniquely identify this mechanism; the underlying controls and inherited reference 29 were not newly checked."
      ],
      "readExtent": "complete-published-primary-main-article-and-author-main-text-supplement-unread",
      "reviewedLocators": [
        "Published pages 901-902 and Figure 1; corresponding PMC author main text paragraphs on stepwise CETCH 1.0, its stalled combined reaction and CETCH 2.0 isotope-label interpretation: incomplete versus recurrent pathway operation"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1126/science.aah5237",
      "correctionCheck": "The source identity and metadata retain the existing 2026-10-20 main-article review. Published page 901 preparation/result paragraphs were reread against the local published article and the primary PMC indexed text. Publisher and PMC supplement retrievals remained inaccessible. No new correction search, complete supplementary protocol review, raw-data review or independent replication was performed."
    }
  ],
  "comparisons": [
    {
      "id": "cetch-stepwise-conversion-versus-recurrent-operation",
      "candidate": "Stepwise conversion can be realized without demonstrating recurrent operation of the combined CETCH 1.0 preparation.",
      "alternative": "Successful sequential conversion into intermediates by itself establishes recurrent all-components-from-start operation.",
      "sourceIds": [
        "schwander2016-cetch-cycle"
      ],
      "discriminator": "The same primary main text reports HPLC-MS stepwise conversion, followed by combined CETCH 1.0 stopping at methylsuccinyl-CoA before a complete turn. CETCH 5.4 provides a separate finite isotope/product case, not a matched single-change control.",
      "result": "conditional-support",
      "limit": "This is a source-report-based sufficiency distinction, not an independently replayed acquisition, a quantitative matched preparation contrast or a universal incompatibility theorem.",
      "assumptions": [
        "Accept the explicitly delimited main-text result reports while retaining unread Figures S5-S6 and complete protocols.",
        "Treat all CETCH versions and their derivative records as one dependent publication group; do not count version rows as independent replications.",
        "Do not transfer 5.4 assay concentrations, duration or output to either 1.0 preparation."
      ],
      "claimIds": [
        "C-bio-cetch-composition-nonsufficiency",
        "C-bio-cetch10-stepwise-conversion",
        "C-bio-cetch10-combined-stall",
        "C-bio-cetch-finite-cyclic-operation"
      ]
    },
    {
      "id": "cetch10-electron-acceptor-explanation-identification",
      "candidate": "Electron-acceptor incompatibility uniquely explains the reported CETCH 1.0 combined-operation stall.",
      "alternative": "The observed stall alone leaves the unique contribution of acceptor chemistry, enzyme constraints and other preparation differences unidentified.",
      "sourceIds": [
        "schwander2016-cetch-cycle"
      ],
      "discriminator": "Source main-text bottleneck attribution and its qualitative precipitation/reduction/reoxidation account; the underlying supplementary controls and reference 29 are not newly reviewed.",
      "result": "inconclusive",
      "limit": "Inconclusive describes the present evidence review, not a claim that the original authors performed no controls. No isolated redesign cause is transferred from later working CETCH versions.",
      "assumptions": [
        "Preserve the source’s probabilistic explanation separately from its reported failure observation.",
        "A specific mechanism requires appropriate read controls rather than inferring causality from the shared stall endpoint."
      ],
      "claimIds": [
        "C-bio-cetch10-electron-acceptor-attribution",
        "C-bio-cetch10-combined-stall"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "bio:lincoln2009-pair-serial-transfer-context",
      "role": "experimental-context",
      "denotes": "RNA cross-catalytic pair transfer context within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-lincoln2009-pair-serial-transfer-context"
      ]
    },
    {
      "nodeId": "bio:schwander2016-cetch54-isotope-product-context",
      "role": "experimental-context",
      "denotes": "CETCH finite isotope/product context within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-schwander2016-cetch54-isotope-product-context"
      ]
    },
    {
      "nodeId": "bio:autocatalytic-network-measurement-boundary",
      "role": "definition",
      "denotes": "Catalytic closure and resource boundary within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-autocatalytic-network-measurement-boundary"
      ]
    },
    {
      "nodeId": "bio:metabolic-cycle-measurement-boundary",
      "role": "definition",
      "denotes": "Cyclic regeneration and flux boundary within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-metabolic-cycle-measurement-boundary"
      ]
    },
    {
      "nodeId": "bio:rna-reciprocal-catalyst-production",
      "role": "scoped-phenomenon",
      "denotes": "Reciprocal RNA catalyst production within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-rna-reciprocal-catalyst-production",
        "M-bio-rna-network-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:rna-finite-serial-amplification",
      "role": "scoped-phenomenon",
      "denotes": "Finite RNA serial amplification within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-rna-finite-serial-amplification",
        "M-bio-rna-network-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:cetch-intermediate-product-observation",
      "role": "scoped-phenomenon",
      "denotes": "CETCH labeling and coupled output within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch-intermediate-product-observation",
        "M-bio-cetch-cycle-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:cetch-finite-cyclic-operation",
      "role": "scoped-phenomenon",
      "denotes": "Finite supplied CETCH cyclic operation within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch-finite-cyclic-operation",
        "M-bio-cetch-cycle-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:autocatalytic-network-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite cross-catalytic network scope within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-autocatalytic-network-source-scope",
        "M-bio-rna-network-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:metabolic-cycle-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite metabolic-cycle scope within the stated finite preparation and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-metabolic-cycle-source-scope",
        "M-bio-cetch-cycle-interpretation-method",
        "C-bio-cetch-composition-nonsufficiency"
      ]
    },
    {
      "nodeId": "bio:schwander2016-cetch10-stepwise-context",
      "role": "experimental-context",
      "denotes": "CETCH 1.0 stepwise-addition context within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-schwander2016-cetch10-stepwise-context"
      ]
    },
    {
      "nodeId": "bio:schwander2016-cetch10-combined-context",
      "role": "experimental-context",
      "denotes": "CETCH 1.0 combined-operation context within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-schwander2016-cetch10-combined-context"
      ]
    },
    {
      "nodeId": "bio:cetch10-stepwise-conversion",
      "role": "scoped-phenomenon",
      "denotes": "CETCH 1.0 reported stepwise conversion within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch10-stepwise-conversion"
      ]
    },
    {
      "nodeId": "bio:cetch10-combined-stall",
      "role": "scoped-phenomenon",
      "denotes": "CETCH 1.0 reported incomplete combined turn within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch10-combined-stall"
      ]
    },
    {
      "nodeId": "bio:cetch10-electron-acceptor-attribution",
      "role": "hypothesis",
      "denotes": "CETCH 1.0 proposed electron-acceptor bottleneck within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch10-electron-acceptor-attribution"
      ]
    },
    {
      "nodeId": "bio:cetch54-supplied-assembly",
      "role": "scoped-phenomenon",
      "denotes": "CETCH 5.4 supplied enzyme and resource assembly within its source-reported preparation or explicitly unresolved interpretation boundary; no physical token or completed construction rule is admitted.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cetch54-supplied-assembly"
      ]
    }
  ]
};
