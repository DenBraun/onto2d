// Exact reviewed scientific records; shared preparations remain one acquisition.
export const RNA_CATALYSIS_RECORDS = {
  "sources": [
    {
      "id": "penedo2004-hammerhead-folding",
      "kind": "research-publication",
      "title": "Folding of the natural hammerhead ribozyme is enhanced by interaction of auxiliary elements",
      "authors": [
        "J. Carlos Penedo",
        "Timothy J. Wilson",
        "Sumedha D. Jayasena",
        "Anastasia Khvorova",
        "David M. J. Lilley"
      ],
      "year": 2004,
      "doi": "10.1261/rna.5268404",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1370577/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-main-text-methods-and-figure-captions",
        "locators": [
          "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2",
          "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7",
          "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
        ],
        "limit": "Read complete main scientific text, Results, Discussion, Materials and Methods, Equations 1-3 descriptions and Figures 1-7 captions from the original PMC full text. No FRET curves were digitized or raw intensity/progress data refitted. Upstream minimal-hammerhead, crystal and hairpin results in the Introduction/Discussion are background rather than newly admitted studies. Crossref, original PMC full text and primary journal issue record checked on 2026-10-20. Title, five authors, DOI 10.1261/rna.5268404, RNA 10(5), 880-888 agree. Registry online date20 April2004 is distinct from May2004 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or an exhaustive later-literature review."
      }
    },
    {
      "id": "boots2008-hammerhead-ions",
      "kind": "research-publication",
      "title": "Metal ion specificities for folding and cleavage activity in the Schistosoma hammerhead ribozyme",
      "authors": [
        "Jennifer L. Boots",
        "Marella D. Canny",
        "Ehsan Azimi",
        "Arthur Pardi"
      ],
      "year": 2008,
      "doi": "10.1261/rna.1010808",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2553736/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-main-text-methods-and-visually-reviewed-tables",
        "locators": [
          "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
          "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
          "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls",
          "RNA 14(10), 2212-2222, Discussion: two-state model limits, stem-proximity boundary, monovalent-ion limitations, Figure 4 correlations and alternative local/chemical mechanisms"
        ],
        "limit": "Read complete original main scientific text, Results, Discussion, Materials and Methods, Figures 1-4 captions and Equations 1-2 descriptions; Tables 1-2 and their footnotes were visually read from primary PMC images. Supplemental Figures S1-S2 and Table S1 were not directly acquired/read; main-text reports of those checks remain source reports. Main-text data-not-shown controls are not independently audited. No raw traces, gel integrations, FRET correction/covariance or kinetic fit was replayed. Figure 4 uses inherited metal-property inputs and is not an independent experimental acquisition. Crossref, original PMC full text, primary publisher full text and PubMed 18755844 checked on 2026-10-20. Title, four authors, DOI 10.1261/rna.1010808, RNA 14(10), 2212-2222 agree. Online28 August2008 is distinct from October2008 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or complete later-literature review."
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
      "id": "D-bio-rna-folding-cleavage-observables",
      "kind": "review-finding",
      "statement": "In the selected hammerhead assays, an ensemble FRET response is a dye-geometry-dependent proxy for a global helical arrangement. A metal concentration midpoint and Hill coefficient summarize the fitted titration; they are not automatically microscopic ion dissociation constants, bound-ion stoichiometries, folding rate constants or atomic structures. Separately, a substrate-cleaved progress curve defines an apparent first-order response. In Boots 2008 the source explicitly defines kobs as an approach-to-equilibrium rate equal to cleavage plus ligation rates, rather than kcat or isolated chemical cleavage.",
      "scope": "Declared observable and response-model distinctions for the selected RNA preparations.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A good two-state titration fit does not prove a microscopic two-state folding pathway or absence of unresolved intermediate states. Global stem proximity does not establish active-site structure or catalytic competence.",
        "These experiments supply purified RNA strands and then anneal them. Transcription with T7 polymerase is a manufacturing step for some strands; chemically synthesized strands are used in other preparations. The reaction assays do not measure transcription, replication, autonomous RNA production, inheritance or an origin-of-life history.",
        "The selected ribozyme is an engineered two-strand complex derived from a Schistosoma hammerhead sequence. It is not an assertion that every ribozyme is one isolated persistent RNA molecule, that every RNA folds into a catalyst, or that the catalogue unit minimum is experimentally established.",
        "Protein-independent cleavage means no added protein catalyst in these prepared RNA reaction mixtures. It does not mean ion-free, solvent-free, cofactor-free, metabolically autonomous or independent of laboratory preparation enzymes."
      ]
    },
    {
      "id": "M-bio-penedo-hammerhead-fret-preparation",
      "kind": "method",
      "statement": "Assemble Penedo natural-like and loop-disrupted hammerhead constructs from a T7-transcribed long RNA strand and a chemically synthesized fluorescent strand containing deoxy-C17, Cy3 and fluorescein modifications. Purify strands and annealed complexes, record steady-state fluorescence at 4 C, and compare magnesium or sodium concentration titrations using the specified I-III dye vector and two-/three-state response fits.",
      "scope": "Defined prepared noncleavable folding proxy; manufacturing transcription is upstream of the assay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The FRET construct contains a 2-prime-deoxy-C17 to prevent cleavage and dye labels near stems I and III. The catalytic assay restores ribo-C17, removes dyes, shortens stem III and changes salt/temperature conditions. No unqualified matched conformation-to-chemistry rate law is admitted.",
        "Penedo FRET spectra are steady-state measurements at 4 C; titration steps vary ion concentration, not elapsed folding time. The source one-step/two-step language describes fitted transitions across concentration and does not measure temporal folding rate constants.",
        "The fluorophore pair reports relative dye geometry. For this I-III vector, magnesium addition lowers FRET as these arms separate. Higher FRET is not a universal marker of folded or active RNA.",
        "The disrupted FRET construct removes the stem I internal loop, lengthens stem II by3 bp and replaces its terminal loop; the response cannot isolate the energy of one tertiary contact from all accompanying changes.",
        "The source gives RNA construction/annealing in 90 mM Tris-borate pH8.3 but does not print a separate complete FRET measurement-buffer/RNA-concentration prescription in the reviewed Methods. Do not silently use construction buffer as a fully specified measurement solution.",
        "The fitted 160 micromolar midpoint and n 0.85 have no supplied confidence intervals in this report. R0.998 is a fit-correlation statistic, not parameter uncertainty or independent replication."
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context"
      ]
    },
    {
      "id": "C-bio-penedo-hammerhead-fret-response",
      "kind": "review-finding",
      "statement": "For the Penedo noncleavable I-III FRET construct, the loop-carrying form shows a magnesium-dependent decrease in FRET described by a two-state concentration fit with midpoint 160 micromolar and Hill coefficient 0.85. The loop-disrupted construct requires two transitions with fitted midpoints 55 micromolar and 2 mM. Sodium produces two resolved titration transitions even in the loop-carrying form; adding moderate sodium to a 100 micromolar magnesium background first reverses and then restores the FRET shift.",
      "scope": "Preparation-specific global conformation response and fitted ion midpoints; no microscopic folding chronology.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The FRET construct contains a 2-prime-deoxy-C17 to prevent cleavage and dye labels near stems I and III. The catalytic assay restores ribo-C17, removes dyes, shortens stem III and changes salt/temperature conditions. No unqualified matched conformation-to-chemistry rate law is admitted.",
        "Penedo FRET spectra are steady-state measurements at 4 C; titration steps vary ion concentration, not elapsed folding time. The source one-step/two-step language describes fitted transitions across concentration and does not measure temporal folding rate constants.",
        "The fluorophore pair reports relative dye geometry. For this I-III vector, magnesium addition lowers FRET as these arms separate. Higher FRET is not a universal marker of folded or active RNA.",
        "The disrupted FRET construct removes the stem I internal loop, lengthens stem II by3 bp and replaces its terminal loop; the response cannot isolate the energy of one tertiary contact from all accompanying changes.",
        "The source gives RNA construction/annealing in 90 mM Tris-borate pH8.3 but does not print a separate complete FRET measurement-buffer/RNA-concentration prescription in the reviewed Methods. Do not silently use construction buffer as a fully specified measurement solution.",
        "The fitted 160 micromolar midpoint and n 0.85 have no supplied confidence intervals in this report. R0.998 is a fit-correlation statistic, not parameter uncertainty or independent replication."
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context"
      ]
    },
    {
      "id": "M-bio-penedo-hammerhead-cleavage-preparation",
      "kind": "method",
      "statement": "Anneal chemically synthesized hammerhead ribozyme and 32P-labelled substrate strands at pH 7, using a 1000-fold ribozyme excess and a 5-bp stem III. Initiate at 25 C in final 50 mM HEPES pH 7.0, 100 micromolar MgCl2 and 500 mM NaCl. Separate substrate/products by denaturing PAGE with phosphorimaging and fit the fraction-cleaved progress response; compare the internal-loop-complemented substrate under identical conditions.",
      "scope": "Single-turnover prepared RNA cleavage, distinct from FRET and from strand synthesis.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "All RNA strands in the Penedo cleavage assay are chemically synthesized. This directly separates RNA catalytic activity from polymerase-mediated strand manufacture; the assay supplies the RNA rather than producing copies.",
        "The cleavable assay uses a 1000-fold excess of ribozyme over labelled substrate and a stem III shortened to 5 bp. It is a single-turnover progress experiment, not a measured multiple-turnover kcat or persistence through repeated cycles.",
        "The source specifies100 micromolar MgCl2 plus 500 mM NaCl at pH 7.0 and 25 C; the high sodium concentration is part of the preparation. A statement of activity at low magnesium alone must not omit this500 mM sodium background or call the complete solution physiological.",
        "The source does not print absolute RNA concentrations for this assay in the reviewed Methods. The reported0.05 min^-1 comes from a fitted gel progress curve with no supplied error estimate here; no new fit or zero-rate bound for the control is calculated.",
        "The loop-removal catalytic control differs from the more extensively altered FRET control. Virtually no detectable cleavage over 30 min is a finite assay observation, not an exactlyzero microscopic rate or universal requirement for those loops.",
        "Site-specific cleavage and its absence/reduction in a sequence variant support finite RNA functionality; no broad substrate-specificity panel, equilibrium binding constant, regulation or RNA-only metabolism is measured."
      ],
      "contextIds": [
        "penedo2004-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "C-bio-penedo-hammerhead-cleavage-response",
      "kind": "review-finding",
      "statement": "Penedo reports a fitted apparent cleavage response 0.05 min^-1 for the loop-carrying hammerhead at 100 micromolar MgCl2 plus 500 mM NaCl, pH 7.0 and 25 C. The loop-complemented control shows virtually no cleavage during the 30-min observation. These supplied, chemically synthesized RNA strands show sequence-dependent reaction functionality in the stated mixture.",
      "scope": "Source-fitted single-turnover RNA progress response and finite-time control.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "All RNA strands in the Penedo cleavage assay are chemically synthesized. This directly separates RNA catalytic activity from polymerase-mediated strand manufacture; the assay supplies the RNA rather than producing copies.",
        "The cleavable assay uses a 1000-fold excess of ribozyme over labelled substrate and a stem III shortened to 5 bp. It is a single-turnover progress experiment, not a measured multiple-turnover kcat or persistence through repeated cycles.",
        "The source specifies100 micromolar MgCl2 plus 500 mM NaCl at pH 7.0 and 25 C; the high sodium concentration is part of the preparation. A statement of activity at low magnesium alone must not omit this500 mM sodium background or call the complete solution physiological.",
        "The source does not print absolute RNA concentrations for this assay in the reviewed Methods. The reported0.05 min^-1 comes from a fitted gel progress curve with no supplied error estimate here; no new fit or zero-rate bound for the control is calculated.",
        "The loop-removal catalytic control differs from the more extensively altered FRET control. Virtually no detectable cleavage over 30 min is a finite assay observation, not an exactlyzero microscopic rate or universal requirement for those loops.",
        "Site-specific cleavage and its absence/reduction in a sequence variant support finite RNA functionality; no broad substrate-specificity panel, equilibrium binding constant, regulation or RNA-only metabolism is measured."
      ],
      "contextIds": [
        "penedo2004-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "M-bio-boots-hammerhead-fret-preparation",
      "kind": "method",
      "statement": "Anneal chemically synthesized Cy3-labelled hammerhead and Cy5-labelled deoxy-substrate strands, including a UUCG-loop control. Dilute to about 25 nM in 50 mM Tris, pH 7.0, 100 mM NaCl and 0.1 mM EDTA; at 25 C titrate Ca, Mg, Mn, Sr or specified monovalent ions. Use IA/(IA+ID) from 500 nm excitation and 560/660 nm emission, with dilution and source Mn-quenching corrections, to fit a phenomenological metal-dependent response.",
      "scope": "Noncleavable dye-labelled global-folding assay, with source response-model and fluorophore controls.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Boots FRET uses chemically synthesized Cy3/Cy5-labelled complexes with a deoxy cleavage-site substrate, at about 25 nM complex. Main cleavage kinetics use mostly T7-transcribed cleavable RNA at 0.5-1 micromolar ribozyme with a 10:1 strand ratio. They are linked but distinct preparations, not simultaneous structure and chemistry of one molecule.",
        "The I-II dye pair reports global stem proximity. The source explicitly says it cannot establish formation of the specific loop-loop tertiary contact or a unique catalytically active local conformation.",
        "Source two-state/Hill assumptions may not hold microscopically; fitted midpoints compare empirical global-folding responses rather than determine metal-binding mechanisms, microscopicKD or bound-ion counts. n less than 1 is not a fractional ion molecule count.",
        "The labelled construct was selected because its fast-population kobs agreed with unlabelled RNA, reported as data not shown. Chemically synthesized and transcribed strands nevertheless have different cleavage plateaus, so equality of the fast rate does not validate equality of active fractions.",
        "Replacing loop II with UUCG changes the donor position as well as possible tertiary interaction. Different FRET amplitudes cannot alone quantify the same distance or population change across these variants.",
        "The four-ion FRET comparison coversCa, Mg, Mn and Sr. Co, Zn andCd are excluded because of optical interference or solubility; no absent FRET result is filled in from the kinetic series.",
        "Source dye-only controls showed Mn quenching above 10 mM; the source applied a linear correction, about 10% at 60 mM. Raw spectra/corrections were not independently replayed. High-salt and high-ion conditions are in vitro regimes rather than whole-cell measurements.",
        "Table 2 values are source averages of three or more experiments with one-standard-deviation errors. These sampling summaries are not full fit covariance, microscopic binding constants or independently reproduced confidence intervals."
      ],
      "contextIds": [
        "boots2008-hammerhead-fret-context"
      ]
    },
    {
      "id": "C-bio-boots-hammerhead-global-response",
      "kind": "review-finding",
      "statement": "Boots Table 2 reports wild-type global-FRET metal midpoints in mM: Mn 0.87±0.5, Mg 1.2±0.2, Ca 1.4±0.2 and Sr 2.0±0.2; corresponding Hill coefficients 0.41, 0.56, 0.57 and 0.65. The UUCG-loop control requires midpoints 5.2, 6.2, 9.0 and 12 mM. These comparable global stem-proximity responses across the four ions contrast with the much larger variation in the separate cleavable-RNA apparent rates. At 1 mM Mg the noncleavable FRET response changes by less than 3% over 8 h even while a separate cleavable preparation slowly increases its product fraction.",
      "scope": "Source global conformation proxy and empirical fit, separate from catalytic competence.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Boots FRET uses chemically synthesized Cy3/Cy5-labelled complexes with a deoxy cleavage-site substrate, at about 25 nM complex. Main cleavage kinetics use mostly T7-transcribed cleavable RNA at 0.5-1 micromolar ribozyme with a 10:1 strand ratio. They are linked but distinct preparations, not simultaneous structure and chemistry of one molecule.",
        "The I-II dye pair reports global stem proximity. The source explicitly says it cannot establish formation of the specific loop-loop tertiary contact or a unique catalytically active local conformation.",
        "Source two-state/Hill assumptions may not hold microscopically; fitted midpoints compare empirical global-folding responses rather than determine metal-binding mechanisms, microscopicKD or bound-ion counts. n less than 1 is not a fractional ion molecule count.",
        "The labelled construct was selected because its fast-population kobs agreed with unlabelled RNA, reported as data not shown. Chemically synthesized and transcribed strands nevertheless have different cleavage plateaus, so equality of the fast rate does not validate equality of active fractions.",
        "Replacing loop II with UUCG changes the donor position as well as possible tertiary interaction. Different FRET amplitudes cannot alone quantify the same distance or population change across these variants.",
        "The four-ion FRET comparison coversCa, Mg, Mn and Sr. Co, Zn andCd are excluded because of optical interference or solubility; no absent FRET result is filled in from the kinetic series.",
        "Source dye-only controls showed Mn quenching above 10 mM; the source applied a linear correction, about 10% at 60 mM. Raw spectra/corrections were not independently replayed. High-salt and high-ion conditions are in vitro regimes rather than whole-cell measurements.",
        "Table 2 values are source averages of three or more experiments with one-standard-deviation errors. These sampling summaries are not full fit covariance, microscopic binding constants or independently reproduced confidence intervals."
      ],
      "contextIds": [
        "boots2008-hammerhead-fret-context"
      ]
    },
    {
      "id": "M-bio-boots-hammerhead-cleavage-preparation",
      "kind": "method",
      "statement": "Prepare purified transcribed hammerhead/substrate RNA, reduce trace metals by EDTA treatment/buffer exchange and Chelex, and anneal a 10:1 ribozyme:substrate mixture with 0.5-1 micromolar final ribozyme. At 25 C compare1 mM divalent-metal additions in 50 mM Tris pH 7.0, 0.1 M NaCl and 0.1 mM EDTA; measure fast reactions with 2 ms-dead-time quench flow and slower reactions manually. Quantify PAGE bands and fit an approach-to-equilibrium progress curve. Retain the separate 2 M NaCl, pH/metal extrapolation and slow-population/pulse-chase tests.",
      "scope": "Single-turnover kinetic preparation and derived response parameters, distinct from noncleavable FRET.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source defines kobs as the approach-to-equilibrium rate, kcleave+kligate. It reflects the rapidly reacting population and is not kcat, isolated chemical cleavage or a folding rate.",
        "The total cleaved fraction plateaus differ by ion and preparation. In 0.1 M NaCl source plateaus0.36-0.69 include inactive/slowly reacting fractions, so amplitude is not simply the internal cleavage/ligation equilibrium constant.",
        "Mn230±25 min^-1 in 2 M NaCl at 1 mM Mn, pH 7 is a source-calculated extrapolation from a measured3.5 min^-1 at 0.15 mM Mn, pH 6, assuming linear metal and log-linearpH dependence. It is not a directly measured high-salt230 min^-1 trace.",
        "Unresolved source conflict: the visually read Table 1 image prints a high-salt Ca upper entry<=0.50 min^-1, while the prose/abstract state>4600-fold Mn/Ca separation using the 230 min^-1 extrapolation. Those displayed entries alone do not establish that quoted bound. Preserve both without silently replacing0.50 by0.05 or inventing a corrected ratio.",
        "Table 1 nominal values are averages of at least three experiments with one-standard-deviation errors, not fitted covariance or independent laboratories. Gel quantification, quench-flow response and metal-property regressions were not replayed.",
        "Metal stocks were checked by ICP optical emission and buffers treated with Chelex/EDTA; actual free-ion activities were not newly calibrated here. Nominal added-metal concentration is not a directly measured catalytic-site occupancy.",
        "Monovalent-only600 mM Na or NH4 assays give source upper limitskobs<0.02 min^-1, not a universal zero activity or proof of obligatory divalent-metal chemistry for all ribozymes.",
        "Main-text reports of pulse-chase and native-gel controls constrain substrate exchange as an alternative to slow activation. The underlying Supplemental Figure S2 was not directly reviewed; a single native-gel band does not exclude unresolved local conformations."
      ],
      "contextIds": [
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "C-bio-boots-hammerhead-ion-response",
      "kind": "review-finding",
      "statement": "In 0.1 M NaCl at 25 C, pH 7.0 and 1 mM added metal, Boots Table 1 reports apparent kobs values in min^-1 of Mn 200±10, Co 140±20, Zn 82±9, Cd 72±5, Mg 2.6±0.3, Ca 0.14±0.04 and Sr 0.018±0.006. The source defines this response as cleavage-plus-ligation equilibration of the rapidly reacting fraction. In a separate 1 mM Mg slow-population experiment, the cleaved fraction increases from about 0.30 to 0.65 over 8 h with fitted 0.003 min^-1; a different noncleavable FRET preparation remains nearly unchanged globally.",
      "scope": "Source-fitted response and active-fraction limits; no microscopic chemical-rate decomposition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source defines kobs as the approach-to-equilibrium rate, kcleave+kligate. It reflects the rapidly reacting population and is not kcat, isolated chemical cleavage or a folding rate.",
        "The total cleaved fraction plateaus differ by ion and preparation. In 0.1 M NaCl source plateaus0.36-0.69 include inactive/slowly reacting fractions, so amplitude is not simply the internal cleavage/ligation equilibrium constant.",
        "Mn230±25 min^-1 in 2 M NaCl at 1 mM Mn, pH 7 is a source-calculated extrapolation from a measured3.5 min^-1 at 0.15 mM Mn, pH 6, assuming linear metal and log-linearpH dependence. It is not a directly measured high-salt230 min^-1 trace.",
        "Unresolved source conflict: the visually read Table 1 image prints a high-salt Ca upper entry<=0.50 min^-1, while the prose/abstract state>4600-fold Mn/Ca separation using the 230 min^-1 extrapolation. Those displayed entries alone do not establish that quoted bound. Preserve both without silently replacing0.50 by0.05 or inventing a corrected ratio.",
        "Table 1 nominal values are averages of at least three experiments with one-standard-deviation errors, not fitted covariance or independent laboratories. Gel quantification, quench-flow response and metal-property regressions were not replayed.",
        "Metal stocks were checked by ICP optical emission and buffers treated with Chelex/EDTA; actual free-ion activities were not newly calibrated here. Nominal added-metal concentration is not a directly measured catalytic-site occupancy.",
        "Monovalent-only600 mM Na or NH4 assays give source upper limitskobs<0.02 min^-1, not a universal zero activity or proof of obligatory divalent-metal chemistry for all ribozymes.",
        "Main-text reports of pulse-chase and native-gel controls constrain substrate exchange as an alternative to slow activation. The underlying Supplemental Figure S2 was not directly reviewed; a single native-gel band does not exclude unresolved local conformations."
      ],
      "contextIds": [
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "C-bio-hammerhead-folding-catalysis-boundary",
      "kind": "review-finding",
      "statement": "The selected studies support ion- and sequence-dependent RNA conformation and reaction activity in prepared hammerhead complexes. Penedo loop perturbations shift global-FRET titrations and reduce a separate synthetic-RNA cleavage response. Boots finds similar global stem-proximity responses for four divalent ions despite markedly differing apparent reaction rates. Thus a global-folding proxy is insufficient to identify catalytic competence or a unique chemical mechanism; local structure, reactive population and chemistry remain distinct explanations.",
      "scope": "Conditional synthesis of two finite primary preparations; same contexts reused for catalogue 3.7 and 3.8.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Discussion: two-state model limits, stem-proximity boundary, monovalent-ion limitations, Figure 4 correlations and alternative local/chemical mechanisms",
          "role": "supports",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These experiments supply purified RNA strands and then anneal them. Transcription with T7 polymerase is a manufacturing step for some strands; chemically synthesized strands are used in other preparations. The reaction assays do not measure transcription, replication, autonomous RNA production, inheritance or an origin-of-life history.",
        "The selected ribozyme is an engineered two-strand complex derived from a Schistosoma hammerhead sequence. It is not an assertion that every ribozyme is one isolated persistent RNA molecule, that every RNA folds into a catalyst, or that the catalogue unit minimum is experimentally established.",
        "Protein-independent cleavage means no added protein catalyst in these prepared RNA reaction mixtures. It does not mean ion-free, solvent-free, cofactor-free, metabolically autonomous or independent of laboratory preparation enzymes.",
        "FRET and kinetic assays use modified versus cleavable substrates, different strand preparation histories and different active fractions. Similar global optical responses do not prove identical local catalytic structures or complete population matching.",
        "The source-supported interpretation is that global stem proximity alone does not explain the ion-dependent apparent rates. Alternatives include local structural changes, shifts in active/inactive populations and direct transition-state electrostatic effects; the data do not uniquely choose among them.",
        "Correlations of logkobs with metal hydrated-ionpKa, ionic radius or hardness use inherited property values and are mechanistic clues, not causal identification of one acid/base, metal-binding site or chemical mechanism.",
        "The 2004 equilibrium ion titration does not establish a folding trajectory. The 2008 global-FRET readout cannot resolve specific loop docking or active-site rearrangement; neither is a direct atomic structure or barrier measurement.",
        "No ligand-recognition/regulatory switch experiment, cellular phenotype, RNA replication/metabolism or prebiotic history is admitted. Source statements about other ribozyme classes and historical crystal mechanisms require their own reviewed primary scope.",
        "Supplied RNA bonding, complementarity and buffered solvent are preparation/model inputs. The separate H2, benzene, water-dimer, KRb/N2 and bulk-liquid cases do not establish matched RNA force contributions, atomic tertiary contacts, stacking energies or universal causal prerequisites.",
        "Original levels, phases, process/object labels, science/status labels, requirement codes, parent directions, interaction/dependency codes, numerical weights, necessity and one-molecule carrier defaults remain catalogue classifications. The prepared two-strand complexes provide no universal unit minimum, threshold or ordered hierarchy.",
        "The unnamed catalogue evidence does not admit additional crystal, NMR, cryo-EM, chemical-probing or full energy-landscape calculations. No metabolic autonomy, regulatory function, replication, persistent multiple-turnover operation or prebiotic history is established."
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "M-bio-hammerhead-folding-catalysis-boundary",
      "kind": "method",
      "statement": "Compare global FRET and reaction responses only after preserving each strand modification, source, salt, temperature, active fraction and response-model boundary. Reuse each original preparation once across the two catalogue descriptions. Treat global stem proximity as a limited conformation proxy and retain local-structure, population and chemical-mechanism alternatives rather than identifying folding with activity.",
      "scope": "Conditional synthesis of two finite primary preparations; same contexts reused for catalogue 3.7 and 3.8.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Discussion: two-state model limits, stem-proximity boundary, monovalent-ion limitations, Figure 4 correlations and alternative local/chemical mechanisms",
          "role": "method",
          "note": "Actually read original primary passage; preparation, fitted response or conditional interpretation retained within its stated boundary. No new experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These experiments supply purified RNA strands and then anneal them. Transcription with T7 polymerase is a manufacturing step for some strands; chemically synthesized strands are used in other preparations. The reaction assays do not measure transcription, replication, autonomous RNA production, inheritance or an origin-of-life history.",
        "The selected ribozyme is an engineered two-strand complex derived from a Schistosoma hammerhead sequence. It is not an assertion that every ribozyme is one isolated persistent RNA molecule, that every RNA folds into a catalyst, or that the catalogue unit minimum is experimentally established.",
        "Protein-independent cleavage means no added protein catalyst in these prepared RNA reaction mixtures. It does not mean ion-free, solvent-free, cofactor-free, metabolically autonomous or independent of laboratory preparation enzymes.",
        "FRET and kinetic assays use modified versus cleavable substrates, different strand preparation histories and different active fractions. Similar global optical responses do not prove identical local catalytic structures or complete population matching.",
        "The source-supported interpretation is that global stem proximity alone does not explain the ion-dependent apparent rates. Alternatives include local structural changes, shifts in active/inactive populations and direct transition-state electrostatic effects; the data do not uniquely choose among them.",
        "Correlations of logkobs with metal hydrated-ionpKa, ionic radius or hardness use inherited property values and are mechanistic clues, not causal identification of one acid/base, metal-binding site or chemical mechanism.",
        "The 2004 equilibrium ion titration does not establish a folding trajectory. The 2008 global-FRET readout cannot resolve specific loop docking or active-site rearrangement; neither is a direct atomic structure or barrier measurement.",
        "No ligand-recognition/regulatory switch experiment, cellular phenotype, RNA replication/metabolism or prebiotic history is admitted. Source statements about other ribozyme classes and historical crystal mechanisms require their own reviewed primary scope.",
        "Supplied RNA bonding, complementarity and buffered solvent are preparation/model inputs. The separate H2, benzene, water-dimer, KRb/N2 and bulk-liquid cases do not establish matched RNA force contributions, atomic tertiary contacts, stacking energies or universal causal prerequisites.",
        "Original levels, phases, process/object labels, science/status labels, requirement codes, parent directions, interaction/dependency codes, numerical weights, necessity and one-molecule carrier defaults remain catalogue classifications. The prepared two-strand complexes provide no universal unit minimum, threshold or ordered hierarchy.",
        "The unnamed catalogue evidence does not admit additional crystal, NMR, cryo-EM, chemical-probing or full energy-landscape calculations. No metabolic autonomy, regulatory function, replication, persistent multiple-turnover operation or prebiotic history is established."
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:rna-folding-cleavage-observables",
      "name": "Global RNA conformation proxies and cleavage-response parameters",
      "kind": "quantity-definition",
      "description": "In the selected hammerhead assays, an ensemble FRET response is a dye-geometry-dependent proxy for a global helical arrangement. A metal concentration midpoint and Hill coefficient summarize the fitted titration; they are not automatically microscopic ion dissociation constants, bound-ion stoichiometries, folding rate constants or atomic structures. Separately, a substrate-cleaved progress curve defines an apparent first-order response. In Boots 2008 the source explicitly defines kobs as an approach-to-equilibrium rate equal to cleavage plus ligation rates, rather than kcat or isolated chemical cleavage.",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2"
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2"
        }
      ],
      "openObligations": [
        "A good two-state titration fit does not prove a microscopic two-state folding pathway or absence of unresolved intermediate states. Global stem proximity does not establish active-site structure or catalytic competence.",
        "These experiments supply purified RNA strands and then anneal them. Transcription with T7 polymerase is a manufacturing step for some strands; chemically synthesized strands are used in other preparations. The reaction assays do not measure transcription, replication, autonomous RNA production, inheritance or an origin-of-life history.",
        "The selected ribozyme is an engineered two-strand complex derived from a Schistosoma hammerhead sequence. It is not an assertion that every ribozyme is one isolated persistent RNA molecule, that every RNA folds into a catalyst, or that the catalogue unit minimum is experimentally established.",
        "Protein-independent cleavage means no added protein catalyst in these prepared RNA reaction mixtures. It does not mean ion-free, solvent-free, cofactor-free, metabolically autonomous or independent of laboratory preparation enzymes."
      ]
    },
    {
      "id": "bio:penedo-hammerhead-fret-preparation",
      "name": "Prepared noncleavable hammerhead I-III FRET titration",
      "kind": "context",
      "description": "Assemble Penedo natural-like and loop-disrupted hammerhead constructs from a T7-transcribed long RNA strand and a chemically synthesized fluorescent strand containing deoxy-C17, Cy3 and fluorescein modifications. Purify strands and annealed complexes, record steady-state fluorescence at 4 C, and compare magnesium or sodium concentration titrations using the specified I-III dye vector and two-/three-state response fits.",
      "claimIds": [
        "M-bio-penedo-hammerhead-fret-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2"
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7"
        }
      ],
      "openObligations": [
        "The FRET construct contains a 2-prime-deoxy-C17 to prevent cleavage and dye labels near stems I and III. The catalytic assay restores ribo-C17, removes dyes, shortens stem III and changes salt/temperature conditions. No unqualified matched conformation-to-chemistry rate law is admitted.",
        "Penedo FRET spectra are steady-state measurements at 4 C; titration steps vary ion concentration, not elapsed folding time. The source one-step/two-step language describes fitted transitions across concentration and does not measure temporal folding rate constants.",
        "The fluorophore pair reports relative dye geometry. For this I-III vector, magnesium addition lowers FRET as these arms separate. Higher FRET is not a universal marker of folded or active RNA.",
        "The disrupted FRET construct removes the stem I internal loop, lengthens stem II by3 bp and replaces its terminal loop; the response cannot isolate the energy of one tertiary contact from all accompanying changes.",
        "The source gives RNA construction/annealing in 90 mM Tris-borate pH8.3 but does not print a separate complete FRET measurement-buffer/RNA-concentration prescription in the reviewed Methods. Do not silently use construction buffer as a fully specified measurement solution.",
        "The fitted 160 micromolar midpoint and n 0.85 have no supplied confidence intervals in this report. R0.998 is a fit-correlation statistic, not parameter uncertainty or independent replication."
      ]
    },
    {
      "id": "bio:penedo-hammerhead-fret-response",
      "name": "Loop-dependent hammerhead global FRET transitions",
      "kind": "scoped-structure",
      "description": "For the Penedo noncleavable I-III FRET construct, the loop-carrying form shows a magnesium-dependent decrease in FRET described by a two-state concentration fit with midpoint 160 micromolar and Hill coefficient 0.85. The loop-disrupted construct requires two transitions with fitted midpoints 55 micromolar and 2 mM. Sodium produces two resolved titration transitions even in the loop-carrying form; adding moderate sodium to a 100 micromolar magnesium background first reverses and then restores the FRET shift.",
      "claimIds": [
        "C-bio-penedo-hammerhead-fret-response"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7"
        }
      ],
      "openObligations": [
        "The FRET construct contains a 2-prime-deoxy-C17 to prevent cleavage and dye labels near stems I and III. The catalytic assay restores ribo-C17, removes dyes, shortens stem III and changes salt/temperature conditions. No unqualified matched conformation-to-chemistry rate law is admitted.",
        "Penedo FRET spectra are steady-state measurements at 4 C; titration steps vary ion concentration, not elapsed folding time. The source one-step/two-step language describes fitted transitions across concentration and does not measure temporal folding rate constants.",
        "The fluorophore pair reports relative dye geometry. For this I-III vector, magnesium addition lowers FRET as these arms separate. Higher FRET is not a universal marker of folded or active RNA.",
        "The disrupted FRET construct removes the stem I internal loop, lengthens stem II by3 bp and replaces its terminal loop; the response cannot isolate the energy of one tertiary contact from all accompanying changes.",
        "The source gives RNA construction/annealing in 90 mM Tris-borate pH8.3 but does not print a separate complete FRET measurement-buffer/RNA-concentration prescription in the reviewed Methods. Do not silently use construction buffer as a fully specified measurement solution.",
        "The fitted 160 micromolar midpoint and n 0.85 have no supplied confidence intervals in this report. R0.998 is a fit-correlation statistic, not parameter uncertainty or independent replication."
      ]
    },
    {
      "id": "bio:penedo-hammerhead-cleavage-preparation",
      "name": "Prepared synthetic-RNA hammerhead cleavage assay",
      "kind": "context",
      "description": "Anneal chemically synthesized hammerhead ribozyme and 32P-labelled substrate strands at pH 7, using a 1000-fold ribozyme excess and a 5-bp stem III. Initiate at 25 C in final 50 mM HEPES pH 7.0, 100 micromolar MgCl2 and 500 mM NaCl. Separate substrate/products by denaturing PAGE with phosphorimaging and fit the fraction-cleaved progress response; compare the internal-loop-complemented substrate under identical conditions.",
      "claimIds": [
        "M-bio-penedo-hammerhead-cleavage-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
        }
      ],
      "openObligations": [
        "All RNA strands in the Penedo cleavage assay are chemically synthesized. This directly separates RNA catalytic activity from polymerase-mediated strand manufacture; the assay supplies the RNA rather than producing copies.",
        "The cleavable assay uses a 1000-fold excess of ribozyme over labelled substrate and a stem III shortened to 5 bp. It is a single-turnover progress experiment, not a measured multiple-turnover kcat or persistence through repeated cycles.",
        "The source specifies100 micromolar MgCl2 plus 500 mM NaCl at pH 7.0 and 25 C; the high sodium concentration is part of the preparation. A statement of activity at low magnesium alone must not omit this500 mM sodium background or call the complete solution physiological.",
        "The source does not print absolute RNA concentrations for this assay in the reviewed Methods. The reported0.05 min^-1 comes from a fitted gel progress curve with no supplied error estimate here; no new fit or zero-rate bound for the control is calculated.",
        "The loop-removal catalytic control differs from the more extensively altered FRET control. Virtually no detectable cleavage over 30 min is a finite assay observation, not an exactlyzero microscopic rate or universal requirement for those loops.",
        "Site-specific cleavage and its absence/reduction in a sequence variant support finite RNA functionality; no broad substrate-specificity panel, equilibrium binding constant, regulation or RNA-only metabolism is measured."
      ]
    },
    {
      "id": "bio:penedo-hammerhead-cleavage-response",
      "name": "Finite RNA-catalyzed substrate cleavage under supplied ions",
      "kind": "scoped-process",
      "description": "Penedo reports a fitted apparent cleavage response 0.05 min^-1 for the loop-carrying hammerhead at 100 micromolar MgCl2 plus 500 mM NaCl, pH 7.0 and 25 C. The loop-complemented control shows virtually no cleavage during the 30-min observation. These supplied, chemically synthesized RNA strands show sequence-dependent reaction functionality in the stated mixture.",
      "claimIds": [
        "C-bio-penedo-hammerhead-cleavage-response"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
        }
      ],
      "openObligations": [
        "All RNA strands in the Penedo cleavage assay are chemically synthesized. This directly separates RNA catalytic activity from polymerase-mediated strand manufacture; the assay supplies the RNA rather than producing copies.",
        "The cleavable assay uses a 1000-fold excess of ribozyme over labelled substrate and a stem III shortened to 5 bp. It is a single-turnover progress experiment, not a measured multiple-turnover kcat or persistence through repeated cycles.",
        "The source specifies100 micromolar MgCl2 plus 500 mM NaCl at pH 7.0 and 25 C; the high sodium concentration is part of the preparation. A statement of activity at low magnesium alone must not omit this500 mM sodium background or call the complete solution physiological.",
        "The source does not print absolute RNA concentrations for this assay in the reviewed Methods. The reported0.05 min^-1 comes from a fitted gel progress curve with no supplied error estimate here; no new fit or zero-rate bound for the control is calculated.",
        "The loop-removal catalytic control differs from the more extensively altered FRET control. Virtually no detectable cleavage over 30 min is a finite assay observation, not an exactlyzero microscopic rate or universal requirement for those loops.",
        "Site-specific cleavage and its absence/reduction in a sequence variant support finite RNA functionality; no broad substrate-specificity panel, equilibrium binding constant, regulation or RNA-only metabolism is measured."
      ]
    },
    {
      "id": "bio:boots-hammerhead-fret-preparation",
      "name": "Prepared hammerhead I-II FRET and ion controls",
      "kind": "context",
      "description": "Anneal chemically synthesized Cy3-labelled hammerhead and Cy5-labelled deoxy-substrate strands, including a UUCG-loop control. Dilute to about 25 nM in 50 mM Tris, pH 7.0, 100 mM NaCl and 0.1 mM EDTA; at 25 C titrate Ca, Mg, Mn, Sr or specified monovalent ions. Use IA/(IA+ID) from 500 nm excitation and 560/660 nm emission, with dilution and source Mn-quenching corrections, to fit a phenomenological metal-dependent response.",
      "claimIds": [
        "M-bio-boots-hammerhead-fret-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
        }
      ],
      "openObligations": [
        "Boots FRET uses chemically synthesized Cy3/Cy5-labelled complexes with a deoxy cleavage-site substrate, at about 25 nM complex. Main cleavage kinetics use mostly T7-transcribed cleavable RNA at 0.5-1 micromolar ribozyme with a 10:1 strand ratio. They are linked but distinct preparations, not simultaneous structure and chemistry of one molecule.",
        "The I-II dye pair reports global stem proximity. The source explicitly says it cannot establish formation of the specific loop-loop tertiary contact or a unique catalytically active local conformation.",
        "Source two-state/Hill assumptions may not hold microscopically; fitted midpoints compare empirical global-folding responses rather than determine metal-binding mechanisms, microscopicKD or bound-ion counts. n less than 1 is not a fractional ion molecule count.",
        "The labelled construct was selected because its fast-population kobs agreed with unlabelled RNA, reported as data not shown. Chemically synthesized and transcribed strands nevertheless have different cleavage plateaus, so equality of the fast rate does not validate equality of active fractions.",
        "Replacing loop II with UUCG changes the donor position as well as possible tertiary interaction. Different FRET amplitudes cannot alone quantify the same distance or population change across these variants.",
        "The four-ion FRET comparison coversCa, Mg, Mn and Sr. Co, Zn andCd are excluded because of optical interference or solubility; no absent FRET result is filled in from the kinetic series.",
        "Source dye-only controls showed Mn quenching above 10 mM; the source applied a linear correction, about 10% at 60 mM. Raw spectra/corrections were not independently replayed. High-salt and high-ion conditions are in vitro regimes rather than whole-cell measurements.",
        "Table 2 values are source averages of three or more experiments with one-standard-deviation errors. These sampling summaries are not full fit covariance, microscopic binding constants or independently reproduced confidence intervals."
      ]
    },
    {
      "id": "bio:boots-hammerhead-global-response",
      "name": "Similar global folding responses despite different ion identities",
      "kind": "scoped-structure",
      "description": "Boots Table 2 reports wild-type global-FRET metal midpoints in mM: Mn 0.87±0.5, Mg 1.2±0.2, Ca 1.4±0.2 and Sr 2.0±0.2; corresponding Hill coefficients 0.41, 0.56, 0.57 and 0.65. The UUCG-loop control requires midpoints 5.2, 6.2, 9.0 and 12 mM. These comparable global stem-proximity responses across the four ions contrast with the much larger variation in the separate cleavable-RNA apparent rates. At 1 mM Mg the noncleavable FRET response changes by less than 3% over 8 h even while a separate cleavable preparation slowly increases its product fraction.",
      "claimIds": [
        "C-bio-boots-hammerhead-global-response"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
        }
      ],
      "openObligations": [
        "Boots FRET uses chemically synthesized Cy3/Cy5-labelled complexes with a deoxy cleavage-site substrate, at about 25 nM complex. Main cleavage kinetics use mostly T7-transcribed cleavable RNA at 0.5-1 micromolar ribozyme with a 10:1 strand ratio. They are linked but distinct preparations, not simultaneous structure and chemistry of one molecule.",
        "The I-II dye pair reports global stem proximity. The source explicitly says it cannot establish formation of the specific loop-loop tertiary contact or a unique catalytically active local conformation.",
        "Source two-state/Hill assumptions may not hold microscopically; fitted midpoints compare empirical global-folding responses rather than determine metal-binding mechanisms, microscopicKD or bound-ion counts. n less than 1 is not a fractional ion molecule count.",
        "The labelled construct was selected because its fast-population kobs agreed with unlabelled RNA, reported as data not shown. Chemically synthesized and transcribed strands nevertheless have different cleavage plateaus, so equality of the fast rate does not validate equality of active fractions.",
        "Replacing loop II with UUCG changes the donor position as well as possible tertiary interaction. Different FRET amplitudes cannot alone quantify the same distance or population change across these variants.",
        "The four-ion FRET comparison coversCa, Mg, Mn and Sr. Co, Zn andCd are excluded because of optical interference or solubility; no absent FRET result is filled in from the kinetic series.",
        "Source dye-only controls showed Mn quenching above 10 mM; the source applied a linear correction, about 10% at 60 mM. Raw spectra/corrections were not independently replayed. High-salt and high-ion conditions are in vitro regimes rather than whole-cell measurements.",
        "Table 2 values are source averages of three or more experiments with one-standard-deviation errors. These sampling summaries are not full fit covariance, microscopic binding constants or independently reproduced confidence intervals."
      ]
    },
    {
      "id": "bio:boots-hammerhead-cleavage-preparation",
      "name": "Prepared hammerhead ion-series cleavage and controls",
      "kind": "context",
      "description": "Prepare purified transcribed hammerhead/substrate RNA, reduce trace metals by EDTA treatment/buffer exchange and Chelex, and anneal a 10:1 ribozyme:substrate mixture with 0.5-1 micromolar final ribozyme. At 25 C compare1 mM divalent-metal additions in 50 mM Tris pH 7.0, 0.1 M NaCl and 0.1 mM EDTA; measure fast reactions with 2 ms-dead-time quench flow and slower reactions manually. Quantify PAGE bands and fit an approach-to-equilibrium progress curve. Retain the separate 2 M NaCl, pH/metal extrapolation and slow-population/pulse-chase tests.",
      "claimIds": [
        "M-bio-boots-hammerhead-cleavage-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
        }
      ],
      "openObligations": [
        "The source defines kobs as the approach-to-equilibrium rate, kcleave+kligate. It reflects the rapidly reacting population and is not kcat, isolated chemical cleavage or a folding rate.",
        "The total cleaved fraction plateaus differ by ion and preparation. In 0.1 M NaCl source plateaus0.36-0.69 include inactive/slowly reacting fractions, so amplitude is not simply the internal cleavage/ligation equilibrium constant.",
        "Mn230±25 min^-1 in 2 M NaCl at 1 mM Mn, pH 7 is a source-calculated extrapolation from a measured3.5 min^-1 at 0.15 mM Mn, pH 6, assuming linear metal and log-linearpH dependence. It is not a directly measured high-salt230 min^-1 trace.",
        "Unresolved source conflict: the visually read Table 1 image prints a high-salt Ca upper entry<=0.50 min^-1, while the prose/abstract state>4600-fold Mn/Ca separation using the 230 min^-1 extrapolation. Those displayed entries alone do not establish that quoted bound. Preserve both without silently replacing0.50 by0.05 or inventing a corrected ratio.",
        "Table 1 nominal values are averages of at least three experiments with one-standard-deviation errors, not fitted covariance or independent laboratories. Gel quantification, quench-flow response and metal-property regressions were not replayed.",
        "Metal stocks were checked by ICP optical emission and buffers treated with Chelex/EDTA; actual free-ion activities were not newly calibrated here. Nominal added-metal concentration is not a directly measured catalytic-site occupancy.",
        "Monovalent-only600 mM Na or NH4 assays give source upper limitskobs<0.02 min^-1, not a universal zero activity or proof of obligatory divalent-metal chemistry for all ribozymes.",
        "Main-text reports of pulse-chase and native-gel controls constrain substrate exchange as an alternative to slow activation. The underlying Supplemental Figure S2 was not directly reviewed; a single native-gel band does not exclude unresolved local conformations."
      ]
    },
    {
      "id": "bio:boots-hammerhead-ion-response",
      "name": "Metal-dependent apparent hammerhead reaction rates",
      "kind": "scoped-process",
      "description": "In 0.1 M NaCl at 25 C, pH 7.0 and 1 mM added metal, Boots Table 1 reports apparent kobs values in min^-1 of Mn 200±10, Co 140±20, Zn 82±9, Cd 72±5, Mg 2.6±0.3, Ca 0.14±0.04 and Sr 0.018±0.006. The source defines this response as cleavage-plus-ligation equilibration of the rapidly reacting fraction. In a separate 1 mM Mg slow-population experiment, the cleaved fraction increases from about 0.30 to 0.65 over 8 h with fitted 0.003 min^-1; a different noncleavable FRET preparation remains nearly unchanged globally.",
      "claimIds": [
        "C-bio-boots-hammerhead-ion-response"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A"
        }
      ],
      "openObligations": [
        "The source defines kobs as the approach-to-equilibrium rate, kcleave+kligate. It reflects the rapidly reacting population and is not kcat, isolated chemical cleavage or a folding rate.",
        "The total cleaved fraction plateaus differ by ion and preparation. In 0.1 M NaCl source plateaus0.36-0.69 include inactive/slowly reacting fractions, so amplitude is not simply the internal cleavage/ligation equilibrium constant.",
        "Mn230±25 min^-1 in 2 M NaCl at 1 mM Mn, pH 7 is a source-calculated extrapolation from a measured3.5 min^-1 at 0.15 mM Mn, pH 6, assuming linear metal and log-linearpH dependence. It is not a directly measured high-salt230 min^-1 trace.",
        "Unresolved source conflict: the visually read Table 1 image prints a high-salt Ca upper entry<=0.50 min^-1, while the prose/abstract state>4600-fold Mn/Ca separation using the 230 min^-1 extrapolation. Those displayed entries alone do not establish that quoted bound. Preserve both without silently replacing0.50 by0.05 or inventing a corrected ratio.",
        "Table 1 nominal values are averages of at least three experiments with one-standard-deviation errors, not fitted covariance or independent laboratories. Gel quantification, quench-flow response and metal-property regressions were not replayed.",
        "Metal stocks were checked by ICP optical emission and buffers treated with Chelex/EDTA; actual free-ion activities were not newly calibrated here. Nominal added-metal concentration is not a directly measured catalytic-site occupancy.",
        "Monovalent-only600 mM Na or NH4 assays give source upper limitskobs<0.02 min^-1, not a universal zero activity or proof of obligatory divalent-metal chemistry for all ribozymes.",
        "Main-text reports of pulse-chase and native-gel controls constrain substrate exchange as an alternative to slow activation. The underlying Supplemental Figure S2 was not directly reviewed; a single native-gel band does not exclude unresolved local conformations."
      ]
    },
    {
      "id": "bio:hammerhead-folding-catalysis-boundary",
      "name": "Conditional separation of global RNA folding and catalytic response",
      "kind": "hypothesis",
      "description": "The selected studies support ion- and sequence-dependent RNA conformation and reaction activity in prepared hammerhead complexes. Penedo loop perturbations shift global-FRET titrations and reduce a separate synthetic-RNA cleavage response. Boots finds similar global stem-proximity responses for four divalent ions despite markedly differing apparent reaction rates. Thus a global-folding proxy is insufficient to identify catalytic competence or a unique chemical mechanism; local structure, reactive population and chemistry remain distinct explanations.",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ],
      "status": "hypothesis",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7"
        },
        {
          "sourceId": "penedo2004-hammerhead-folding",
          "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison"
        },
        {
          "sourceId": "boots2008-hammerhead-ions",
          "locator": "RNA 14(10), 2212-2222, Discussion: two-state model limits, stem-proximity boundary, monovalent-ion limitations, Figure 4 correlations and alternative local/chemical mechanisms"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/7"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/8"
        }
      ],
      "openObligations": [
        "These experiments supply purified RNA strands and then anneal them. Transcription with T7 polymerase is a manufacturing step for some strands; chemically synthesized strands are used in other preparations. The reaction assays do not measure transcription, replication, autonomous RNA production, inheritance or an origin-of-life history.",
        "The selected ribozyme is an engineered two-strand complex derived from a Schistosoma hammerhead sequence. It is not an assertion that every ribozyme is one isolated persistent RNA molecule, that every RNA folds into a catalyst, or that the catalogue unit minimum is experimentally established.",
        "Protein-independent cleavage means no added protein catalyst in these prepared RNA reaction mixtures. It does not mean ion-free, solvent-free, cofactor-free, metabolically autonomous or independent of laboratory preparation enzymes.",
        "FRET and kinetic assays use modified versus cleavable substrates, different strand preparation histories and different active fractions. Similar global optical responses do not prove identical local catalytic structures or complete population matching.",
        "The source-supported interpretation is that global stem proximity alone does not explain the ion-dependent apparent rates. Alternatives include local structural changes, shifts in active/inactive populations and direct transition-state electrostatic effects; the data do not uniquely choose among them.",
        "Correlations of logkobs with metal hydrated-ionpKa, ionic radius or hardness use inherited property values and are mechanistic clues, not causal identification of one acid/base, metal-binding site or chemical mechanism.",
        "The 2004 equilibrium ion titration does not establish a folding trajectory. The 2008 global-FRET readout cannot resolve specific loop docking or active-site rearrangement; neither is a direct atomic structure or barrier measurement.",
        "No ligand-recognition/regulatory switch experiment, cellular phenotype, RNA replication/metabolism or prebiotic history is admitted. Source statements about other ribozyme classes and historical crystal mechanisms require their own reviewed primary scope.",
        "Supplied RNA bonding, complementarity and buffered solvent are preparation/model inputs. The separate H2, benzene, water-dimer, KRb/N2 and bulk-liquid cases do not establish matched RNA force contributions, atomic tertiary contacts, stacking energies or universal causal prerequisites.",
        "Original levels, phases, process/object labels, science/status labels, requirement codes, parent directions, interaction/dependency codes, numerical weights, necessity and one-molecule carrier defaults remain catalogue classifications. The prepared two-strand complexes provide no universal unit minimum, threshold or ordered hierarchy.",
        "The unnamed catalogue evidence does not admit additional crystal, NMR, cryo-EM, chemical-probing or full energy-landscape calculations. No metabolic autonomy, regulatory function, replication, persistent multiple-turnover operation or prebiotic history is established."
      ]
    }
  ],
  "relations": [
    {
      "id": "biochemistry:penedo-hammerhead-fret-preparation-penedo-hammerhead-fret-response",
      "source": "bio:penedo-hammerhead-fret-preparation",
      "target": "bio:penedo-hammerhead-fret-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This declared preparation supports the bounded optical or kinetic response with its own modification, ion, temperature andinference limits.",
      "claimIds": [
        "M-bio-penedo-hammerhead-fret-preparation",
        "C-bio-penedo-hammerhead-fret-response"
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context"
      ]
    },
    {
      "id": "biochemistry:rna-folding-cleavage-observables-penedo-hammerhead-fret-response",
      "source": "bio:rna-folding-cleavage-observables",
      "target": "bio:penedo-hammerhead-fret-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected response uses this explicit observable andparameter convention.",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ]
    },
    {
      "id": "biochemistry:penedo-hammerhead-fret-response-hammerhead-folding-catalysis-boundary",
      "source": "bio:penedo-hammerhead-fret-response",
      "target": "bio:hammerhead-folding-catalysis-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This finite response enters the conditional comparison without becoming a universal causal parent or an independent replication.",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "biochemistry:penedo-hammerhead-cleavage-preparation-penedo-hammerhead-cleavage-response",
      "source": "bio:penedo-hammerhead-cleavage-preparation",
      "target": "bio:penedo-hammerhead-cleavage-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This declared preparation supports the bounded optical or kinetic response with its own modification, ion, temperature andinference limits.",
      "claimIds": [
        "M-bio-penedo-hammerhead-cleavage-preparation",
        "C-bio-penedo-hammerhead-cleavage-response"
      ],
      "contextIds": [
        "penedo2004-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "biochemistry:rna-folding-cleavage-observables-penedo-hammerhead-cleavage-response",
      "source": "bio:rna-folding-cleavage-observables",
      "target": "bio:penedo-hammerhead-cleavage-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected response uses this explicit observable andparameter convention.",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ]
    },
    {
      "id": "biochemistry:penedo-hammerhead-cleavage-response-hammerhead-folding-catalysis-boundary",
      "source": "bio:penedo-hammerhead-cleavage-response",
      "target": "bio:hammerhead-folding-catalysis-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This finite response enters the conditional comparison without becoming a universal causal parent or an independent replication.",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "biochemistry:boots-hammerhead-fret-preparation-boots-hammerhead-global-response",
      "source": "bio:boots-hammerhead-fret-preparation",
      "target": "bio:boots-hammerhead-global-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This declared preparation supports the bounded optical or kinetic response with its own modification, ion, temperature andinference limits.",
      "claimIds": [
        "M-bio-boots-hammerhead-fret-preparation",
        "C-bio-boots-hammerhead-global-response"
      ],
      "contextIds": [
        "boots2008-hammerhead-fret-context"
      ]
    },
    {
      "id": "biochemistry:rna-folding-cleavage-observables-boots-hammerhead-global-response",
      "source": "bio:rna-folding-cleavage-observables",
      "target": "bio:boots-hammerhead-global-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected response uses this explicit observable andparameter convention.",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ]
    },
    {
      "id": "biochemistry:boots-hammerhead-global-response-hammerhead-folding-catalysis-boundary",
      "source": "bio:boots-hammerhead-global-response",
      "target": "bio:hammerhead-folding-catalysis-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This finite response enters the conditional comparison without becoming a universal causal parent or an independent replication.",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "biochemistry:boots-hammerhead-cleavage-preparation-boots-hammerhead-ion-response",
      "source": "bio:boots-hammerhead-cleavage-preparation",
      "target": "bio:boots-hammerhead-ion-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This declared preparation supports the bounded optical or kinetic response with its own modification, ion, temperature andinference limits.",
      "claimIds": [
        "M-bio-boots-hammerhead-cleavage-preparation",
        "C-bio-boots-hammerhead-ion-response"
      ],
      "contextIds": [
        "boots2008-hammerhead-cleavage-context"
      ]
    },
    {
      "id": "biochemistry:rna-folding-cleavage-observables-boots-hammerhead-ion-response",
      "source": "bio:rna-folding-cleavage-observables",
      "target": "bio:boots-hammerhead-ion-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The selected response uses this explicit observable andparameter convention.",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ]
    },
    {
      "id": "biochemistry:boots-hammerhead-ion-response-hammerhead-folding-catalysis-boundary",
      "source": "bio:boots-hammerhead-ion-response",
      "target": "bio:hammerhead-folding-catalysis-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This finite response enters the conditional comparison without becoming a universal causal parent or an independent replication.",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ],
      "contextIds": [
        "penedo2004-hammerhead-fret-context",
        "penedo2004-hammerhead-cleavage-context",
        "boots2008-hammerhead-fret-context",
        "boots2008-hammerhead-cleavage-context"
      ]
    }
  ],
  "studies": [
    {
      "id": "penedo2004-hammerhead-fret-context",
      "sourceId": "penedo2004-hammerhead-folding",
      "studyType": "primary-experiment",
      "doi": "10.1261/rna.5268404",
      "journal": "RNA",
      "volume": "10",
      "issue": "5",
      "pages": "880-888",
      "system": "Prepared Schistosoma-derived two-strand, deoxy-C17 I-III fluorescent hammerhead complexes",
      "preparation": "Assemble Penedo natural-like and loop-disrupted hammerhead constructs from a T7-transcribed long RNA strand and a chemically synthesized fluorescent strand containing deoxy-C17, Cy3 and fluorescein modifications. Purify strands and annealed complexes, record steady-state fluorescence at 4 C, and compare magnesium or sodium concentration titrations using the specified I-III dye vector and two-/three-state response fits.",
      "observable": "Steady-state fluorescein-Cy3 FRET versus added magnesium/sodium concentration; fitted transition midpoints.",
      "finding": "For the Penedo noncleavable I-III FRET construct, the loop-carrying form shows a magnesium-dependent decrease in FRET described by a two-state concentration fit with midpoint 160 micromolar and Hill coefficient 0.85. The loop-disrupted construct requires two transitions with fitted midpoints 55 micromolar and 2 mM. Sodium produces two resolved titration transitions even in the loop-carrying form; adding moderate sodium to a 100 micromolar magnesium background first reverses and then restores the FRET shift.",
      "limitations": [
        "The FRET construct contains a 2-prime-deoxy-C17 to prevent cleavage and dye labels near stems I and III. The catalytic assay restores ribo-C17, removes dyes, shortens stem III and changes salt/temperature conditions. No unqualified matched conformation-to-chemistry rate law is admitted.",
        "Penedo FRET spectra are steady-state measurements at 4 C; titration steps vary ion concentration, not elapsed folding time. The source one-step/two-step language describes fitted transitions across concentration and does not measure temporal folding rate constants.",
        "The fluorophore pair reports relative dye geometry. For this I-III vector, magnesium addition lowers FRET as these arms separate. Higher FRET is not a universal marker of folded or active RNA.",
        "The disrupted FRET construct removes the stem I internal loop, lengthens stem II by3 bp and replaces its terminal loop; the response cannot isolate the energy of one tertiary contact from all accompanying changes.",
        "The source gives RNA construction/annealing in 90 mM Tris-borate pH8.3 but does not print a separate complete FRET measurement-buffer/RNA-concentration prescription in the reviewed Methods. Do not silently use construction buffer as a fully specified measurement solution.",
        "The fitted 160 micromolar midpoint and n 0.85 have no supplied confidence intervals in this report. R0.998 is a fit-correlation statistic, not parameter uncertainty or independent replication."
      ],
      "readExtent": "complete-main-text-methods-and-figure-captions",
      "reviewedLocators": [
        "RNA 10(5), 880-888, Materials and Methods: Construction of hammerhead species for fluorescence; FRET analysis of folding, Equations 1-2; Figure 2",
        "RNA 10(5), 880-888, Results: loop-carrying magnesium-induced folding, disruption of loop interaction and separate sodium transitions; Figures 3, 5, 6; Discussion and Figure 7"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1261/rna.5268404",
      "correctionCheck": "Crossref, original PMC full text and primary journal issue record checked on 2026-10-20. Title, five authors, DOI 10.1261/rna.5268404, RNA 10(5), 880-888 agree. Registry online date20 April2004 is distinct from May2004 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or an exhaustive later-literature review."
    },
    {
      "id": "penedo2004-hammerhead-cleavage-context",
      "sourceId": "penedo2004-hammerhead-folding",
      "studyType": "primary-experiment",
      "doi": "10.1261/rna.5268404",
      "journal": "RNA",
      "volume": "10",
      "issue": "5",
      "pages": "880-888",
      "system": "Prepared chemically synthesized cleavable hammerhead/substrate complexes with shortened stem III",
      "preparation": "Anneal chemically synthesized hammerhead ribozyme and 32P-labelled substrate strands at pH 7, using a 1000-fold ribozyme excess and a 5-bp stem III. Initiate at 25 C in final 50 mM HEPES pH 7.0, 100 micromolar MgCl2 and 500 mM NaCl. Separate substrate/products by denaturing PAGE with phosphorimaging and fit the fraction-cleaved progress response; compare the internal-loop-complemented substrate under identical conditions.",
      "observable": "32P substrate/product PAGE bands versus reaction time and source-fitted apparent progress rate.",
      "finding": "Penedo reports a fitted apparent cleavage response 0.05 min^-1 for the loop-carrying hammerhead at 100 micromolar MgCl2 plus 500 mM NaCl, pH 7.0 and 25 C. The loop-complemented control shows virtually no cleavage during the 30-min observation. These supplied, chemically synthesized RNA strands show sequence-dependent reaction functionality in the stated mixture.",
      "limitations": [
        "All RNA strands in the Penedo cleavage assay are chemically synthesized. This directly separates RNA catalytic activity from polymerase-mediated strand manufacture; the assay supplies the RNA rather than producing copies.",
        "The cleavable assay uses a 1000-fold excess of ribozyme over labelled substrate and a stem III shortened to 5 bp. It is a single-turnover progress experiment, not a measured multiple-turnover kcat or persistence through repeated cycles.",
        "The source specifies100 micromolar MgCl2 plus 500 mM NaCl at pH 7.0 and 25 C; the high sodium concentration is part of the preparation. A statement of activity at low magnesium alone must not omit this500 mM sodium background or call the complete solution physiological.",
        "The source does not print absolute RNA concentrations for this assay in the reviewed Methods. The reported0.05 min^-1 comes from a fitted gel progress curve with no supplied error estimate here; no new fit or zero-rate bound for the control is calculated.",
        "The loop-removal catalytic control differs from the more extensively altered FRET control. Virtually no detectable cleavage over 30 min is a finite assay observation, not an exactlyzero microscopic rate or universal requirement for those loops.",
        "Site-specific cleavage and its absence/reduction in a sequence variant support finite RNA functionality; no broad substrate-specificity panel, equilibrium binding constant, regulation or RNA-only metabolism is measured."
      ],
      "readExtent": "complete-main-text-methods-and-figure-captions",
      "reviewedLocators": [
        "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1261/rna.5268404",
      "correctionCheck": "Crossref, original PMC full text and primary journal issue record checked on 2026-10-20. Title, five authors, DOI 10.1261/rna.5268404, RNA 10(5), 880-888 agree. Registry online date20 April2004 is distinct from May2004 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or an exhaustive later-literature review."
    },
    {
      "id": "boots2008-hammerhead-fret-context",
      "sourceId": "boots2008-hammerhead-ions",
      "studyType": "primary-experiment",
      "doi": "10.1261/rna.1010808",
      "journal": "RNA",
      "volume": "14",
      "issue": "10",
      "pages": "2212-2222",
      "system": "Prepared Schistosoma-derived noncleavable Cy3/Cy5 hammerheads, wild-type-loop andUUCG-loop variants",
      "preparation": "Anneal chemically synthesized Cy3-labelled hammerhead and Cy5-labelled deoxy-substrate strands, including a UUCG-loop control. Dilute to about 25 nM in 50 mM Tris, pH 7.0, 100 mM NaCl and 0.1 mM EDTA; at 25 C titrate Ca, Mg, Mn, Sr or specified monovalent ions. Use IA/(IA+ID) from 500 nm excitation and 560/660 nm emission, with dilution and source Mn-quenching corrections, to fit a phenomenological metal-dependent response.",
      "observable": "Ensemble dye-intensity ratio versus nominal ion concentration and time; phenomenological global-folding midpoints.",
      "finding": "Boots Table 2 reports wild-type global-FRET metal midpoints in mM: Mn 0.87±0.5, Mg 1.2±0.2, Ca 1.4±0.2 and Sr 2.0±0.2; corresponding Hill coefficients 0.41, 0.56, 0.57 and 0.65. The UUCG-loop control requires midpoints 5.2, 6.2, 9.0 and 12 mM. These comparable global stem-proximity responses across the four ions contrast with the much larger variation in the separate cleavable-RNA apparent rates. At 1 mM Mg the noncleavable FRET response changes by less than 3% over 8 h even while a separate cleavable preparation slowly increases its product fraction.",
      "limitations": [
        "Boots FRET uses chemically synthesized Cy3/Cy5-labelled complexes with a deoxy cleavage-site substrate, at about 25 nM complex. Main cleavage kinetics use mostly T7-transcribed cleavable RNA at 0.5-1 micromolar ribozyme with a 10:1 strand ratio. They are linked but distinct preparations, not simultaneous structure and chemistry of one molecule.",
        "The I-II dye pair reports global stem proximity. The source explicitly says it cannot establish formation of the specific loop-loop tertiary contact or a unique catalytically active local conformation.",
        "Source two-state/Hill assumptions may not hold microscopically; fitted midpoints compare empirical global-folding responses rather than determine metal-binding mechanisms, microscopicKD or bound-ion counts. n less than 1 is not a fractional ion molecule count.",
        "The labelled construct was selected because its fast-population kobs agreed with unlabelled RNA, reported as data not shown. Chemically synthesized and transcribed strands nevertheless have different cleavage plateaus, so equality of the fast rate does not validate equality of active fractions.",
        "Replacing loop II with UUCG changes the donor position as well as possible tertiary interaction. Different FRET amplitudes cannot alone quantify the same distance or population change across these variants.",
        "The four-ion FRET comparison coversCa, Mg, Mn and Sr. Co, Zn andCd are excluded because of optical interference or solubility; no absent FRET result is filled in from the kinetic series.",
        "Source dye-only controls showed Mn quenching above 10 mM; the source applied a linear correction, about 10% at 60 mM. Raw spectra/corrections were not independently replayed. High-salt and high-ion conditions are in vitro regimes rather than whole-cell measurements.",
        "Table 2 values are source averages of three or more experiments with one-standard-deviation errors. These sampling summaries are not full fit covariance, microscopic binding constants or independently reproduced confidence intervals."
      ],
      "readExtent": "complete-main-text-methods-and-visually-reviewed-tables",
      "reviewedLocators": [
        "RNA 14(10), 2212-2222, Results: Global folding of noncleavable HHRz; Figure 2 and Table 2 including footnote; Materials and Methods: Design of FRET constructs and Metal-induced folding, Equation 2",
        "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1261/rna.1010808",
      "correctionCheck": "Crossref, original PMC full text, primary publisher full text and PubMed 18755844 checked on 2026-10-20. Title, four authors, DOI 10.1261/rna.1010808, RNA 14(10), 2212-2222 agree. Online28 August2008 is distinct from October2008 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or complete later-literature review."
    },
    {
      "id": "boots2008-hammerhead-cleavage-context",
      "sourceId": "boots2008-hammerhead-ions",
      "studyType": "primary-experiment",
      "doi": "10.1261/rna.1010808",
      "journal": "RNA",
      "volume": "14",
      "issue": "10",
      "pages": "2212-2222",
      "system": "Prepared cleavable Schistosoma-derived hammerheads across added-metal andsalt regimes",
      "preparation": "Prepare purified transcribed hammerhead/substrate RNA, reduce trace metals by EDTA treatment/buffer exchange and Chelex, and anneal a 10:1 ribozyme:substrate mixture with 0.5-1 micromolar final ribozyme. At 25 C compare1 mM divalent-metal additions in 50 mM Tris pH 7.0, 0.1 M NaCl and 0.1 mM EDTA; measure fast reactions with 2 ms-dead-time quench flow and slower reactions manually. Quantify PAGE bands and fit an approach-to-equilibrium progress curve. Retain the separate 2 M NaCl, pH/metal extrapolation and slow-population/pulse-chase tests.",
      "observable": "PAGE substrate/product progress curves with manual or quench-flow timing, plateaus, and source-fitted cleavage/ligation relaxation parameters.",
      "finding": "In 0.1 M NaCl at 25 C, pH 7.0 and 1 mM added metal, Boots Table 1 reports apparent kobs values in min^-1 of Mn 200±10, Co 140±20, Zn 82±9, Cd 72±5, Mg 2.6±0.3, Ca 0.14±0.04 and Sr 0.018±0.006. The source defines this response as cleavage-plus-ligation equilibration of the rapidly reacting fraction. In a separate 1 mM Mg slow-population experiment, the cleaved fraction increases from about 0.30 to 0.65 over 8 h with fitted 0.003 min^-1; a different noncleavable FRET preparation remains nearly unchanged globally.",
      "limitations": [
        "The source defines kobs as the approach-to-equilibrium rate, kcleave+kligate. It reflects the rapidly reacting population and is not kcat, isolated chemical cleavage or a folding rate.",
        "The total cleaved fraction plateaus differ by ion and preparation. In 0.1 M NaCl source plateaus0.36-0.69 include inactive/slowly reacting fractions, so amplitude is not simply the internal cleavage/ligation equilibrium constant.",
        "Mn230±25 min^-1 in 2 M NaCl at 1 mM Mn, pH 7 is a source-calculated extrapolation from a measured3.5 min^-1 at 0.15 mM Mn, pH 6, assuming linear metal and log-linearpH dependence. It is not a directly measured high-salt230 min^-1 trace.",
        "Unresolved source conflict: the visually read Table 1 image prints a high-salt Ca upper entry<=0.50 min^-1, while the prose/abstract state>4600-fold Mn/Ca separation using the 230 min^-1 extrapolation. Those displayed entries alone do not establish that quoted bound. Preserve both without silently replacing0.50 by0.05 or inventing a corrected ratio.",
        "Table 1 nominal values are averages of at least three experiments with one-standard-deviation errors, not fitted covariance or independent laboratories. Gel quantification, quench-flow response and metal-property regressions were not replayed.",
        "Metal stocks were checked by ICP optical emission and buffers treated with Chelex/EDTA; actual free-ion activities were not newly calibrated here. Nominal added-metal concentration is not a directly measured catalytic-site occupancy.",
        "Monovalent-only600 mM Na or NH4 assays give source upper limitskobs<0.02 min^-1, not a universal zero activity or proof of obligatory divalent-metal chemistry for all ribozymes.",
        "Main-text reports of pulse-chase and native-gel controls constrain substrate exchange as an alternative to slow activation. The underlying Supplemental Figure S2 was not directly reviewed; a single native-gel band does not exclude unresolved local conformations."
      ],
      "readExtent": "complete-main-text-methods-and-visually-reviewed-tables",
      "reviewedLocators": [
        "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
        "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
        "RNA 14(10), 2212-2222, Results: Inactive populations; Figure 3; Materials and Methods: Substrate dissociation assay and FRET construct activity/plateau controls"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1261/rna.1010808",
      "correctionCheck": "Crossref, original PMC full text, primary publisher full text and PubMed 18755844 checked on 2026-10-20. Title, four authors, DOI 10.1261/rna.1010808, RNA 14(10), 2212-2222 agree. Online28 August2008 is distinct from October2008 issue. Crossref relation is empty; no explicit correction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or complete later-literature review."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:rna-folding-cleavage-observables",
      "role": "quantity-definition",
      "denotes": "Global RNA conformation proxies and cleavage-response parameters under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-rna-folding-cleavage-observables"
      ]
    },
    {
      "nodeId": "bio:penedo-hammerhead-fret-preparation",
      "role": "experimental-context",
      "denotes": "Prepared noncleavable hammerhead I-III FRET titration under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-penedo-hammerhead-fret-preparation"
      ]
    },
    {
      "nodeId": "bio:penedo-hammerhead-fret-response",
      "role": "scoped-phenomenon",
      "denotes": "Loop-dependent hammerhead global FRET transitions under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-penedo-hammerhead-fret-response"
      ]
    },
    {
      "nodeId": "bio:penedo-hammerhead-cleavage-preparation",
      "role": "experimental-context",
      "denotes": "Prepared synthetic-RNA hammerhead cleavage assay under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-penedo-hammerhead-cleavage-preparation"
      ]
    },
    {
      "nodeId": "bio:penedo-hammerhead-cleavage-response",
      "role": "scoped-phenomenon",
      "denotes": "Finite RNA-catalyzed substrate cleavage under supplied ions under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-penedo-hammerhead-cleavage-response"
      ]
    },
    {
      "nodeId": "bio:boots-hammerhead-fret-preparation",
      "role": "experimental-context",
      "denotes": "Prepared hammerhead I-II FRET and ion controls under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-boots-hammerhead-fret-preparation"
      ]
    },
    {
      "nodeId": "bio:boots-hammerhead-global-response",
      "role": "scoped-phenomenon",
      "denotes": "Similar global folding responses despite different ion identities under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-boots-hammerhead-global-response"
      ]
    },
    {
      "nodeId": "bio:boots-hammerhead-cleavage-preparation",
      "role": "experimental-context",
      "denotes": "Prepared hammerhead ion-series cleavage and controls under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-boots-hammerhead-cleavage-preparation"
      ]
    },
    {
      "nodeId": "bio:boots-hammerhead-ion-response",
      "role": "scoped-phenomenon",
      "denotes": "Metal-dependent apparent hammerhead reaction rates under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-boots-hammerhead-ion-response"
      ]
    },
    {
      "nodeId": "bio:hammerhead-folding-catalysis-boundary",
      "role": "hypothesis",
      "denotes": "Conditional separation of global RNA folding and catalytic response under the declared strand sequence, chemical modification, ion, concentration, temperature, optical or cleavage response and inference boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-hammerhead-folding-catalysis-boundary",
        "M-bio-hammerhead-folding-catalysis-boundary"
      ]
    }
  ]
};
