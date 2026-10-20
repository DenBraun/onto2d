// Exact client-assay and substrate-degradation scopes; no universal quality-control hierarchy.
export const PROTEIN_QUALITY_CONTROL_RECORDS = {
  "sources": [
    {
      "id": "apetri2008-chaperonin-aggregation",
      "kind": "research-publication",
      "title": "Chaperonin chamber accelerates protein folding through passive action of preventing aggregation",
      "authors": [
        "Adrian C. Apetri",
        "Arthur L. Horwich"
      ],
      "year": 2008,
      "doi": "10.1073/pnas.0809794105",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2579888/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-main-article-html-and-four-main-figures-supplement-unread",
        "locators": [
          "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "Complete primary PMC HTML, Results Dihydrofolate Reductase in the Cis Cavity, Figure 4A-D and Methods Production of Refolded DHFR and Thermal Denaturation-Renaturation: stable ADP-aluminum-fluoride cage, thermal inactivation and recovery; supporting Figures S1-S2 not read",
          "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
        ],
        "limit": "Read the complete actual primary PMC HTML main article, including all Results/Discussion/Methods and captions, and visually inspected all four original main figure images. Main published pages 17351-17355 identify the article, but no separate final PDF page image was read. The Supporting Information PDF endpoint returned HTML, not a readable PDF; SI Methods/Figures S1-S2 are not claimed read. PubMed PMID 18987317, PMC2579888 and Crossref agree on the two authors, DOI, title, PNAS105(45):17351-17355 and 11 November 2008 issue. PubMed gives online 5 November2008 whereas Crossref records online 11 November2008; retain this date discrepancy. The PMC article uses assets under internal instance 2582256; these are the actual linked figures, not a second publication. Limited title/DOI/erratum searches on2026-10-20 found no explicit correction linked to this article; empty Crossref relation/update fields do not prove absence. No cited predecessor, raw assay data, new kinetic fit or independent replication is admitted. The broad passive-cage conclusion is conditional and not a universal exclusion of other chaperonin effects."
      }
    },
    {
      "id": "prakash2004-proteasome-initiation",
      "kind": "research-publication",
      "title": "An unstructured initiation site is required for efficient proteasome-mediated degradation",
      "authors": [
        "Sumit Prakash",
        "Lin Tian",
        "Kevin S. Ratliff",
        "Rebecca E. Lehotzky",
        "Andreas Matouschek"
      ],
      "year": 2004,
      "doi": "10.1038/nsmb814",
      "url": "https://groups.molbiosci.northwestern.edu/matouschek/pdf/Prakash_NSMB_2004.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-eight-page-primary-article-and-six-main-figures",
        "locators": [
          "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
        ],
        "limit": "Read all eight actual published PDF pages 830-837, including complete Results/Discussion/Methods, all six captions and references; visually inspected Figures 1-6 and the Methods page through local page renders. The PDF is hosted on the corresponding author laboratory website and reproduces the published title, five authors, journal11(9), page headers and online 15 August2004 DOI. PubMed PMID 15311270, Crossref and publisher metadata agree on identity, 15 August online date and September2004 issue. No explicit correction was found in limited title/DOI/erratum searches on2026-10-20. Crossref lists a has-review relation10.3410/f.1020782.240458, not an erratum; empty update fields do not prove correction absence. The assays are in rabbit reticulocyte lysate with partly purified translated radiolabeled substrates, with a separately E. coli-expressed/purified His6 construct for immunoblotting. They are not a newly purified/reconstituted proteasome system. Data-not-shown controls, unpublished exact tail sequences, direct binding/force/translocation measurements and raw autoradiograms are not reconstructed. Figure 6 is a proposed cycle using an earlier EM reconstruction, not a newly observed structure or complete measured sequence."
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
      "id": "M-bio-apetri2008-rubisco-refolding-context",
      "kind": "method",
      "statement": "Use purified R. rubrum Rubisco at 80 nM and 15 C. Dilute100-fold from 5 M guanidine-HCl,100 mM Tris-HCl pH7.5,1 mM EDTA and 20 mM DTT into 50 mM Tris-HCl pH7.7,10 mM KCl,7 mM MgCl2 and 2 mM DTT, with or without 7.5 micromolar BSA. For chaperonin arms include 2 micromolar GroEL or SR1 during capture, then add 2.5 micromolar GroES and 5 mM ATP. Quench timed aliquots with hexokinase/glucose and assay radiochemical Rubisco activity. SR1 aliquots receive4 C for 10 min to release GroES and permit dimerization. Separately monitor dynamic light scattering and Superose6 elution of 35S-labeled Rubisco in the solution-plus-BSA reaction, with native/BSA controls.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "M-bio-apetri2008-mbp-refolding-context",
      "kind": "method",
      "statement": "Use purified mature DM-MBP V8G/Y283D, normally100 nM at 25 C, plus concentration-series and wild-type controls. The chloride-containing arm dilutes100-fold from 6 M guanidine-HCl into 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2. The chloride-deficient arm dilutes100-fold from 9.5 M urea into 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2. In each chaperonin arm capture with 250 nM GroEL or SR1, then add 250 nM GroES and 5 mM ATP. Record tryptophan fluorescence at 295 nm excitation/345 nm emission and separate dynamic light scattering. The two solution protocols differ in several components.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "M-bio-prakash2004-substrate-degradation-context",
      "kind": "method",
      "statement": "Engineer N-end-rule-tagged E. coli DHFR/cpLys38, selected C-terminally tagged cpLys38, lysine-less unstructured-tail additions, terminal His6 and linear Ub4 variants as defined in Figures 2-5. cpLys38 joins the old termini with six glycines and starts at former Lys38/ends at Asn37. The N-end-rule construct first carries a cleavable N-terminal ubiquitin followed by a40-residue lac-repressor-derived linker; lysate cleavage exposes the specified Arg or control Met, with ubiquitin-acceptor Lys15/Lys17 or Arg substitutions. Translate35S-labeled substrates in reticulocyte lysate with 12 mM Arg-Ala for N-end-rule substrates, then centrifuge and ammonium-sulfate partially purify. The His6 immunoblot substrate is separately E. coli-expressed and Ni-NTA purified. Resuspend in 25% glycerol,25 mM MgCl2,0.25 M Tris-HCl pH7.4 and dilute five-fold into ATP-depleted rabbit reticulocyte lysate supplemented with 1 mM DTT,5 mM methionine and 25 micromolar ubiquitin. Prewarm25 C for 3 min; initiate with 0.5 mM ATP,10 mM creatine phosphate and 0.1mg/ml creatine phosphokinase. Compare320 micromolar methotrexate with equal-DMSO controls where indicated. Quench time points into SDS-PAGE buffer and quantify radiolabeled full-length/ubiquitinated bands, fragments and, for the separate purified His6 substrate, terminal-epitope immunoblots.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "M-bio-prakash2004-substrate-ubiquitination-context",
      "kind": "method",
      "statement": "Compare N-end-rule Usignal-DHFR and the shortened Usignal-delta15 construct in the same source lysate assay at 25 C, retaining0.5 mM ATP/regeneration and 25 micromolar ubiquitin, but add 2 micromolar Ubal to inhibit deubiquitinating enzymes and 320 micromolar methotrexate to block degradation. Quantify ubiquitinated-band accumulation relative to initial nonubiquitinated radiolabeled substrate by SDS-PAGE/electronic autoradiography. The shortened linker deletes residues 25-40 as described in the source; its delta15 name is retained without silently correcting the source numbering.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology."
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    },
    {
      "id": "M-bio-prakash2004-substrate-unfolding-control-context",
      "kind": "method",
      "statement": "For the Figure 2e control, compare cpLys38 with and without a C-terminal tail at 15 C in 50 mM Tris-Cl pH7.5,0.5 mM EDTA,10 mM KCl,100 micromolar methotrexate and 5 mM MgCl2. Initiate by adding1 micromolar GroEL. At time points withdraw10 microliters into GroEL buffer with 0.1mg/ml proteinaseK,100 micromolar methotrexate and 1 mM DTT at 4 C; after 10 min TCA-precipitate and quantify surviving radiolabeled bands. This control uses a different temperature and methotrexate concentration from degradation.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "contextIds": [
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "D-bio-chaperone-readout-boundary",
      "kind": "review-finding",
      "statement": "For this review a chaperone intervention is specified by client, components, nucleotide and solution protocol. Enzyme activity recovery, fluorescence, scattering and size-fractionation signals retain separate meanings; aggregation prevention and intrinsic microscopic folding acceleration are different claims. The selected purified assays do not define a universal integrated damage-surveillance/degradation architecture.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Dihydrofolate Reductase in the Cis Cavity, Figure 4A-D and Methods Production of Refolded DHFR and Thermal Denaturation-Renaturation: stable ADP-aluminum-fluoride cage, thermal inactivation and recovery; supporting Figures S1-S2 not read",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect."
      ]
    },
    {
      "id": "D-bio-proteasome-step-boundary",
      "kind": "review-finding",
      "statement": "For these defined substrates, distinguish a ubiquitination signal or engineered Ub4 fusion, ubiquitin-band accumulation, access to a source-assigned unstructured initiation region, conditional unfolding, loss of full-length substrate, terminal clipping and complete degradation. None is interchangeable with universal misfolding recognition, native-protein exclusion or amino-acid recovery.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations."
      ]
    },
    {
      "id": "C-bio-rubisco-chaperonin-protocol-comparison",
      "kind": "review-finding",
      "statement": "The source compares the same80 nM denatured Rubisco input at 15 C in solution with or without BSA and with GroEL/GroES/ATP or SR1/GroES/ATP, retaining the stated aliquot/quench and SR1 release/dimerization operations. This is a controlled combined protocol intervention, not an isolated ATP-hydrolysis experiment.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "C-bio-rubisco-activity-recovery",
      "kind": "review-finding",
      "statement": "Figure 1A reports apparent activity-recovery rate constants about 0.015/min for solution plus BSA,0.08/min for GroEL/GroES/ATP and 0.14/min for SR1/GroES/ATP. Omitting BSA leaves low solution recovery, while the chaperonin protocols recover activity with or without BSA. These are source bulk activity curves after the specified quench/release/dimerization steps, not an atomic structural determination or a universal folding rate.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "C-bio-rubisco-solution-association",
      "kind": "review-finding",
      "statement": "Refolding Rubisco plus BSA scatters light, whereas native Rubisco plus BSA and BSA alone give negligible scattering. Source35S-Rubisco gel filtration at 10,75 and 140 min shows intermediate-sized, void-volume and native-dimer-sized fractions changing with time. The source interprets part of native recovery as reversal of intermolecular association while other material accumulates in the void peak.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "C-bio-mbp-chaperonin-protocol-comparison",
      "kind": "review-finding",
      "statement": "The source compares DM-MBP solution and GroEL/GroES/ATP or SR1/GroES/ATP fluorescence recovery within each declared buffer protocol, with concentration-series and wild-type solution controls. Its additional low-chloride comparison changes buffer, ionic composition/concentration and starting denaturant together, so that between-protocol effect cannot be assigned to chloride alone.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "C-bio-mbp-fluorescence-and-scattering",
      "kind": "review-finding",
      "statement": "In the chloride-containing protocol Figure 2A gives apparent fluorescence-recovery rates0.03/min in solution,0.25/min with GroEL/GroES/ATP and 0.19/min with SR1/GroES/ATP. DM-MBP solution recovery slows with increasing concentration and scatters light; wild-type controls lack that concentration dependence and substantial scattering. In the changed chloride-deficient protocol Figure 3 shows reduced solution scattering and similar apparent fluorescence rates near 0.1/min for solution and the two chaperonin arms. This is not a direct MBP functional assay.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "M-bio-chaperonin-aggregation-interpretation-method",
      "kind": "method",
      "statement": "Interpret the source activity, fluorescence, light-scattering and size-fractionation comparisons jointly, keeping substrate, solution and release operations explicit. An association signal in free solution plus an apparent rate advantage for a chaperonin protocol supports a conditional aggregation-partition account; it does not independently isolate a microscopic cage mechanism.",
      "scope": "Descriptive inference/measurement dependency; no new acquisition, independent replication or asserted physical ancestry.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "C-bio-chaperonin-aggregation-account",
      "kind": "review-finding",
      "statement": "For these Rubisco and DM-MBP preparations the source evidence supports aggregation as a competing solution fate and chaperonin-dependent recovery under the declared protocols. DM-MBP rate equivalence after changing the solution protocol limits a necessary cage-only acceleration account for that comparison. The source passive-cage interpretation remains conditional; no universal identity of microscopic folding paths or absence of active chaperonin effects follows.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "C-bio-proteasome-defined-substrate-comparison",
      "kind": "review-finding",
      "statement": "The source deliberately changes N-end-rule tag function, tag-adjacent linker, tail presence/location, cpLys38 versus wild-type DHFR and methotrexate stabilization. The linear G76V Ub4-DHFR fusion supplies a separate targeting design. These constructs define the experimental substrate differences, rather than a natural misfolded/native diagnostic.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "C-bio-proteasome-tail-dependent-degradation",
      "kind": "review-finding",
      "statement": "At25 C, adding a C-terminal lysine-less tail permits degradation of N-end-rule-tagged cpLys38 even with 320 micromolar methotrexate; inactivating the N-end residue, replacing acceptor Lys15/Lys17 or deleting the N-tag strongly inhibits it. Shortening the Usignal linker slows DHFR degradation, while either tested C-terminal tail restores faster band loss. Linear Ub4-DHFR without a tail is degraded inefficiently; tail addition accelerates loss. This is a finite tag-and-initiation-region requirement under the lysate protocol, not an all-substrate rule.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "C-bio-proteasome-stabilized-domain-clipping",
      "kind": "review-finding",
      "statement": "For wild-type N-Usignal-DHFR-tail-His6 with 320 micromolar methotrexate, the source autoradiogram retains a shorter DHFR-containing product while the terminal His6 immunoblot signal disappears. The source therefore localizes initial clipping to the C-terminal tail. A tail can be removed while a stabilized folded domain persists; disappearance of the terminal tag is not complete client elimination.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "C-bio-proteasome-tagging-control",
      "kind": "review-finding",
      "statement": "In the separate25 C lysate assay with Ubal and methotrexate, the full Usignal-DHFR and shortened Usignal-delta15-DHFR constructs accumulate ubiquitinated forms at similar source rates and extents. This constrains reduced net ubiquitination as the explanation for slower degradation of the shortened construct, without equating band accumulation to direct proteasome binding.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology."
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    },
    {
      "id": "C-bio-proteasome-unfolding-control",
      "kind": "review-finding",
      "statement": "The Figure 2e GroEL-binding/protease-protection traces for cpLys38 with and without the C-terminal tail are similar at 15 C with 100 micromolar methotrexate. This source control argues against simple global destabilization as the sole explanation under its own conditions. It does not establish equal local unfolding or a measured unfolding rate during the25 C degradation assay.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "contextIds": [
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "M-bio-proteasome-initiation-interpretation-method",
      "kind": "method",
      "statement": "Interpret tail/tag interventions, terminal-epitope clipping, separate ubiquitination accumulation and separate GroEL-binding controls together. Retain the distinct assay temperatures and methotrexate concentrations. The source two-step recognition/initiation scheme is a conditional mechanistic account, rather than newly measured binding, force, translocation or ordered molecular events.",
      "scope": "Descriptive inference/measurement dependency; no new acquisition, independent replication or asserted physical ancestry.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work",
          "role": "method",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "C-bio-proteasome-initiation-account",
      "kind": "review-finding",
      "statement": "In these folded DHFR model substrates, a source targeting signal can be insufficient for efficient full-length degradation, and an accessible source-assigned unstructured segment can promote engagement and initiate sequential proteolysis at a site separate from tagging. Tag controls, matched ubiquitination and clipping constrain this interpretation. The proposed receptor binding, local unfolding, translocation and release cycle is not observed step-by-step, and substrate sequence/structure can still block complete degradation.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "C-bio-chaperone-quality-control-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.20 to the selected purified GroEL/SR1/GroES client protocols, retaining finite activity recovery, fluorescence and solution-association observations. Folding assistance and aggregation prevention are supported within those preparations; cellular monitoring, persistent proteome-wide maintenance, damaged-client degradation routing and adaptive stress reliability remain outside admission.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Dihydrofolate Reductase in the Cis Cavity, Figure 4A-D and Methods Production of Refolded DHFR and Thermal Denaturation-Renaturation: stable ADP-aluminum-fluoride cage, thermal inactivation and recovery; supporting Figures S1-S2 not read",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.20 object/quality-system wording is retained as a representational scope only: purified GroEL/SR1/GroES supplies an identifiable prepared assembly, not a newly demonstrated persistent integrated cellular surveillance, stress-regulation or degradation-routing system.",
        "Original folding assistance and aggregation management are qualified to the declared activity/proxy readouts. Native/aberrant discrimination, damaged-protein recognition, client degradation selection, suppression of toxic accumulation, failure propagation, adaptive resilience and proteome-wide reliability are outside the selected evidence.",
        "Original MustCover0/10 and ShouldCover6/12 and Optional3/4 do not become substrate/constraint/compartment/environment/catalyst/regulation gates. Client, buffer, temperature and supplied ATP are actual context; ATP-flux coupling, regulatory feedback and general resource architecture are not measured.",
        "Original3.20 parents3.0(weight0.35,necessary,dependency10,Nmin1,Ncrit2),3.1(0.30,necessary,dependency3,Nmin1,Ncrit2),3.5(0.20,enabling,dependency4,Nmin2,Ncrit2) point upward;3.6(0.15,contextual,dependency6,Nmin2,Ncrit2) points downward. Modes are cooperation/constraint for 3.0/3.1 and feedback for 3.5/3.6. Neither those stages nor weights/criticalities are experimentally established.",
        "The original3.6 parent is a multi-enzyme assembly with channeling/reaction-sequencing claims. GroEL/GroES refolding is not evidence for a universal prior multienzyme channeling or synchronized catalytic-pathway requirement.",
        "The same one publication supplies Rubisco and MBP assay contexts; these are distinct preparations, not independent confirmations. No allosteric/cooperative ancestor is forced from previous unrelated CAPN research."
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "C-bio-selective-proteasome-degradation-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.36 to defined tag, tail and folded-domain manipulations in the source lysate assays. Efficient substrate band loss depends on the tested initiation context and can stop at a stabilized domain. These finite results qualify selective degradation, while universal misfolding recognition, native-protein exclusion, toxic-aggregate removal, amino-acid recovery and persistent system fidelity are excluded from this evidence scope.",
      "scope": "Only the named purified-client or defined-substrate preparation and assay; no universal proteostasis or ontological construction claim.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work",
          "role": "supports",
          "note": "Actually read primary main article and indicated main figures; finite preparation, measured readout or explicitly conditional source inference, with no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.36 property/persistent-quality-capability wording is a representational scope. The selected assays establish finite substrate susceptibility, not a newly observed persistent whole-cell quality-control property or an ontological acquisition event.",
        "The original identify/tag/dismantle failed conformations claim is qualified to engineered tag/tail-dependent degradation of defined folded models. Universal native-versus-aberrant surveillance and selective elimination of only defective proteins are excluded from admission.",
        "The original toxic-accumulation suppression, amino-acid recovery/reuse, aggregation prevention, maintenance of functional populations and higher-order stabilization are not measured by these band-loss/clipping assays.",
        "Original MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates. Actual lysate, substrate, tag, ligand, ATP and assay conditions are retained; no universal information/gradient variable is measured.",
        "Original3.36 parents3.20(weight0.4,necessary,dependency4,Nmin1,Ncrit2),3.0(0.35,necessary,dependency10,Nmin1,Ncrit1),2.3(0.15,enabling,dependency10,Nmin1,Ncrit1),3.26(0.1,contextual,dependency4,Nmin1,Ncrit2) all point downward. First three use constraint mode;3.26 uses feedback mode. These do not become universal necessary ancestry, quantitative parent laws or operational thresholds.",
        "The source lysate assays do not causally connect GroEL/GroES assistance to proteasome routing. The chaperone client assays and proteasome model substrate assays have separate systems, species preparations and contexts even though both papers use proteins called DHFR in some experiments.",
        "Original3.26 is a broad post-translational-modification card. N-end-rule ubiquitination and an engineered linear Ub4 fusion do not establish every phosphorylation/acetylation/methylation/glycosylation claim, universal reversibility or the original PTM parent hierarchy.",
        "Original2.3 is a quantum-mechanical bonding card; proteolytic band loss is not a new molecular electronic-structure measurement, chemistry-wide bond theory or proof of a downward-causation hierarchy."
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:apetri2008-rubisco-refolding-context",
      "name": "Purified Rubisco chaperonin refolding context",
      "kind": "context",
      "description": "Use purified R. rubrum Rubisco at 80 nM and 15 C. Dilute100-fold from 5 M guanidine-HCl,100 mM Tris-HCl pH7.5,1 mM EDTA and 20 mM DTT into 50 mM Tris-HCl pH7.7,10 mM KCl,7 mM MgCl2 and 2 mM DTT, with or without 7.5 micromolar BSA. For chaperonin arms include 2 micromolar GroEL or SR1 during capture, then add 2.5 micromolar GroES and 5 mM ATP. Quench timed aliquots with hexokinase/glucose and assay radiochemical Rubisco activity. SR1 aliquots receive4 C for 10 min to release GroES and permit dimerization. Separately monitor dynamic light scattering and Superose6 elution of 35S-labeled Rubisco in the solution-plus-BSA reaction, with native/BSA controls.",
      "claimIds": [
        "M-bio-apetri2008-rubisco-refolding-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "level": 3
    },
    {
      "id": "bio:apetri2008-mbp-refolding-context",
      "name": "Purified DM-MBP refolding and aggregation context",
      "kind": "context",
      "description": "Use purified mature DM-MBP V8G/Y283D, normally100 nM at 25 C, plus concentration-series and wild-type controls. The chloride-containing arm dilutes100-fold from 6 M guanidine-HCl into 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2. The chloride-deficient arm dilutes100-fold from 9.5 M urea into 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2. In each chaperonin arm capture with 250 nM GroEL or SR1, then add 250 nM GroES and 5 mM ATP. Record tryptophan fluorescence at 295 nm excitation/345 nm emission and separate dynamic light scattering. The two solution protocols differ in several components.",
      "claimIds": [
        "M-bio-apetri2008-mbp-refolding-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "level": 3
    },
    {
      "id": "bio:prakash2004-substrate-degradation-context",
      "name": "Defined-substrate lysate degradation context",
      "kind": "context",
      "description": "Engineer N-end-rule-tagged E. coli DHFR/cpLys38, selected C-terminally tagged cpLys38, lysine-less unstructured-tail additions, terminal His6 and linear Ub4 variants as defined in Figures 2-5. cpLys38 joins the old termini with six glycines and starts at former Lys38/ends at Asn37. The N-end-rule construct first carries a cleavable N-terminal ubiquitin followed by a40-residue lac-repressor-derived linker; lysate cleavage exposes the specified Arg or control Met, with ubiquitin-acceptor Lys15/Lys17 or Arg substitutions. Translate35S-labeled substrates in reticulocyte lysate with 12 mM Arg-Ala for N-end-rule substrates, then centrifuge and ammonium-sulfate partially purify. The His6 immunoblot substrate is separately E. coli-expressed and Ni-NTA purified. Resuspend in 25% glycerol,25 mM MgCl2,0.25 M Tris-HCl pH7.4 and dilute five-fold into ATP-depleted rabbit reticulocyte lysate supplemented with 1 mM DTT,5 mM methionine and 25 micromolar ubiquitin. Prewarm25 C for 3 min; initiate with 0.5 mM ATP,10 mM creatine phosphate and 0.1mg/ml creatine phosphokinase. Compare320 micromolar methotrexate with equal-DMSO controls where indicated. Quench time points into SDS-PAGE buffer and quantify radiolabeled full-length/ubiquitinated bands, fragments and, for the separate purified His6 substrate, terminal-epitope immunoblots.",
      "claimIds": [
        "M-bio-prakash2004-substrate-degradation-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "level": 3
    },
    {
      "id": "bio:prakash2004-substrate-ubiquitination-context",
      "name": "Separate lysate ubiquitination-control context",
      "kind": "context",
      "description": "Compare N-end-rule Usignal-DHFR and the shortened Usignal-delta15 construct in the same source lysate assay at 25 C, retaining0.5 mM ATP/regeneration and 25 micromolar ubiquitin, but add 2 micromolar Ubal to inhibit deubiquitinating enzymes and 320 micromolar methotrexate to block degradation. Quantify ubiquitinated-band accumulation relative to initial nonubiquitinated radiolabeled substrate by SDS-PAGE/electronic autoradiography. The shortened linker deletes residues 25-40 as described in the source; its delta15 name is retained without silently correcting the source numbering.",
      "claimIds": [
        "M-bio-prakash2004-substrate-ubiquitination-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology."
      ],
      "level": 3
    },
    {
      "id": "bio:prakash2004-substrate-unfolding-control-context",
      "name": "Separate cpLys38 global-unfolding control context",
      "kind": "context",
      "description": "For the Figure 2e control, compare cpLys38 with and without a C-terminal tail at 15 C in 50 mM Tris-Cl pH7.5,0.5 mM EDTA,10 mM KCl,100 micromolar methotrexate and 5 mM MgCl2. Initiate by adding1 micromolar GroEL. At time points withdraw10 microliters into GroEL buffer with 0.1mg/ml proteinaseK,100 micromolar methotrexate and 1 mM DTT at 4 C; after 10 min TCA-precipitate and quantify surviving radiolabeled bands. This control uses a different temperature and methotrexate concentration from degradation.",
      "claimIds": [
        "M-bio-prakash2004-substrate-unfolding-control-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "level": 3
    },
    {
      "id": "bio:chaperone-readout-boundary",
      "name": "Chaperone activity, proxy and aggregation boundary",
      "kind": "definition",
      "description": "For this review a chaperone intervention is specified by client, components, nucleotide and solution protocol. Enzyme activity recovery, fluorescence, scattering and size-fractionation signals retain separate meanings; aggregation prevention and intrinsic microscopic folding acceleration are different claims. The selected purified assays do not define a universal integrated damage-surveillance/degradation architecture.",
      "claimIds": [
        "D-bio-chaperone-readout-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Dihydrofolate Reductase in the Cis Cavity, Figure 4A-D and Methods Production of Refolded DHFR and Thermal Denaturation-Renaturation: stable ADP-aluminum-fluoride cage, thermal inactivation and recovery; supporting Figures S1-S2 not read"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-step-boundary",
      "name": "Proteasome tagging, initiation and proteolysis boundary",
      "kind": "definition",
      "description": "For these defined substrates, distinguish a ubiquitination signal or engineered Ub4 fusion, ubiquitin-band accumulation, access to a source-assigned unstructured initiation region, conditional unfolding, loss of full-length substrate, terminal clipping and complete degradation. None is interchangeable with universal misfolding recognition, native-protein exclusion or amino-acid recovery.",
      "claimIds": [
        "D-bio-proteasome-step-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations."
      ],
      "level": 3
    },
    {
      "id": "bio:rubisco-chaperonin-protocol-comparison",
      "name": "Controlled Rubisco refolding-protocol comparison",
      "kind": "scoped-process",
      "description": "The source compares the same80 nM denatured Rubisco input at 15 C in solution with or without BSA and with GroEL/GroES/ATP or SR1/GroES/ATP, retaining the stated aliquot/quench and SR1 release/dimerization operations. This is a controlled combined protocol intervention, not an isolated ATP-hydrolysis experiment.",
      "claimIds": [
        "C-bio-rubisco-chaperonin-protocol-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "level": 3
    },
    {
      "id": "bio:rubisco-activity-recovery",
      "name": "Protocol-dependent recovery of Rubisco catalytic activity",
      "kind": "scoped-process",
      "description": "Figure 1A reports apparent activity-recovery rate constants about 0.015/min for solution plus BSA,0.08/min for GroEL/GroES/ATP and 0.14/min for SR1/GroES/ATP. Omitting BSA leaves low solution recovery, while the chaperonin protocols recover activity with or without BSA. These are source bulk activity curves after the specified quench/release/dimerization steps, not an atomic structural determination or a universal folding rate.",
      "claimIds": [
        "C-bio-rubisco-activity-recovery"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "level": 3
    },
    {
      "id": "bio:rubisco-solution-association",
      "name": "Rubisco solution association during activity recovery",
      "kind": "scoped-process",
      "description": "Refolding Rubisco plus BSA scatters light, whereas native Rubisco plus BSA and BSA alone give negligible scattering. Source35S-Rubisco gel filtration at 10,75 and 140 min shows intermediate-sized, void-volume and native-dimer-sized fractions changing with time. The source interprets part of native recovery as reversal of intermolecular association while other material accumulates in the void peak.",
      "claimIds": [
        "C-bio-rubisco-solution-association"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors."
      ],
      "level": 3
    },
    {
      "id": "bio:mbp-chaperonin-protocol-comparison",
      "name": "Controlled MBP refolding-protocol comparisons",
      "kind": "scoped-process",
      "description": "The source compares DM-MBP solution and GroEL/GroES/ATP or SR1/GroES/ATP fluorescence recovery within each declared buffer protocol, with concentration-series and wild-type solution controls. Its additional low-chloride comparison changes buffer, ionic composition/concentration and starting denaturant together, so that between-protocol effect cannot be assigned to chloride alone.",
      "claimIds": [
        "C-bio-mbp-chaperonin-protocol-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "level": 3
    },
    {
      "id": "bio:mbp-fluorescence-and-scattering",
      "name": "DM-MBP fluorescence recovery and solution scattering",
      "kind": "scoped-process",
      "description": "In the chloride-containing protocol Figure 2A gives apparent fluorescence-recovery rates0.03/min in solution,0.25/min with GroEL/GroES/ATP and 0.19/min with SR1/GroES/ATP. DM-MBP solution recovery slows with increasing concentration and scatters light; wild-type controls lack that concentration dependence and substantial scattering. In the changed chloride-deficient protocol Figure 3 shows reduced solution scattering and similar apparent fluorescence rates near 0.1/min for solution and the two chaperonin arms. This is not a direct MBP functional assay.",
      "claimIds": [
        "C-bio-mbp-fluorescence-and-scattering"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "level": 3
    },
    {
      "id": "bio:chaperonin-aggregation-account",
      "name": "Conditional aggregation-prevention account of refolding assistance",
      "kind": "scoped-process",
      "description": "For these Rubisco and DM-MBP preparations the source evidence supports aggregation as a competing solution fate and chaperonin-dependent recovery under the declared protocols. DM-MBP rate equivalence after changing the solution protocol limits a necessary cage-only acceleration account for that comparison. The source passive-cage interpretation remains conditional; no universal identity of microscopic folding paths or absence of active chaperonin effects follows.",
      "claimIds": [
        "C-bio-chaperonin-aggregation-account"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-defined-substrate-comparison",
      "name": "Controlled tag, tail and folded-domain substrate series",
      "kind": "scoped-process",
      "description": "The source deliberately changes N-end-rule tag function, tag-adjacent linker, tail presence/location, cpLys38 versus wild-type DHFR and methotrexate stabilization. The linear G76V Ub4-DHFR fusion supplies a separate targeting design. These constructs define the experimental substrate differences, rather than a natural misfolded/native diagnostic.",
      "claimIds": [
        "C-bio-proteasome-defined-substrate-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-tail-dependent-degradation",
      "name": "Source-attributed tail-dependent substrate degradation in lysate",
      "kind": "scoped-process",
      "description": "At25 C, adding a C-terminal lysine-less tail permits degradation of N-end-rule-tagged cpLys38 even with 320 micromolar methotrexate; inactivating the N-end residue, replacing acceptor Lys15/Lys17 or deleting the N-tag strongly inhibits it. Shortening the Usignal linker slows DHFR degradation, while either tested C-terminal tail restores faster band loss. Linear Ub4-DHFR without a tail is degraded inefficiently; tail addition accelerates loss. This is a finite tag-and-initiation-region requirement under the lysate protocol, not an all-substrate rule.",
      "claimIds": [
        "C-bio-proteasome-tail-dependent-degradation"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-stabilized-domain-clipping",
      "name": "C-terminal clipping without complete stabilized-DHFR destruction",
      "kind": "scoped-process",
      "description": "For wild-type N-Usignal-DHFR-tail-His6 with 320 micromolar methotrexate, the source autoradiogram retains a shorter DHFR-containing product while the terminal His6 immunoblot signal disappears. The source therefore localizes initial clipping to the C-terminal tail. A tail can be removed while a stabilized folded domain persists; disappearance of the terminal tag is not complete client elimination.",
      "claimIds": [
        "C-bio-proteasome-stabilized-domain-clipping"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-tagging-control",
      "name": "Ubiquitination control for the shortened N-end-rule linker",
      "kind": "scoped-process",
      "description": "In the separate25 C lysate assay with Ubal and methotrexate, the full Usignal-DHFR and shortened Usignal-delta15-DHFR constructs accumulate ubiquitinated forms at similar source rates and extents. This constrains reduced net ubiquitination as the explanation for slower degradation of the shortened construct, without equating band accumulation to direct proteasome binding.",
      "claimIds": [
        "C-bio-proteasome-tagging-control"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-unfolding-control",
      "name": "Tail and cpLys38 global-unfolding control",
      "kind": "scoped-process",
      "description": "The Figure 2e GroEL-binding/protease-protection traces for cpLys38 with and without the C-terminal tail are similar at 15 C with 100 micromolar methotrexate. This source control argues against simple global destabilization as the sole explanation under its own conditions. It does not establish equal local unfolding or a measured unfolding rate during the25 C degradation assay.",
      "claimIds": [
        "C-bio-proteasome-unfolding-control"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "level": 3
    },
    {
      "id": "bio:proteasome-initiation-account",
      "name": "Conditional separation of targeting and degradation initiation",
      "kind": "scoped-process",
      "description": "In these folded DHFR model substrates, a source targeting signal can be insufficient for efficient full-length degradation, and an accessible source-assigned unstructured segment can promote engagement and initiate sequential proteolysis at a site separate from tagging. Tag controls, matched ubiquitination and clipping constrain this interpretation. The proposed receptor binding, local unfolding, translocation and release cycle is not observed step-by-step, and substrate sequence/structure can still block complete degradation.",
      "claimIds": [
        "C-bio-proteasome-initiation-account"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity."
      ],
      "level": 3
    },
    {
      "id": "bio:chaperone-quality-control-source-scope",
      "name": "Finite chaperone and quality-control source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.20 to the selected purified GroEL/SR1/GroES client protocols, retaining finite activity recovery, fluorescence and solution-association observations. Folding assistance and aggregation prevention are supported within those preparations; cellular monitoring, persistent proteome-wide maintenance, damaged-client degradation routing and adaptive stress reliability remain outside admission.",
      "claimIds": [
        "C-bio-chaperone-quality-control-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Results Dihydrofolate Reductase in the Cis Cavity, Figure 4A-D and Methods Production of Refolded DHFR and Thermal Denaturation-Renaturation: stable ADP-aluminum-fluoride cage, thermal inactivation and recovery; supporting Figures S1-S2 not read"
        },
        {
          "sourceId": "apetri2008-chaperonin-aggregation",
          "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/20"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/20"
        }
      ],
      "openObligations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.20 object/quality-system wording is retained as a representational scope only: purified GroEL/SR1/GroES supplies an identifiable prepared assembly, not a newly demonstrated persistent integrated cellular surveillance, stress-regulation or degradation-routing system.",
        "Original folding assistance and aggregation management are qualified to the declared activity/proxy readouts. Native/aberrant discrimination, damaged-protein recognition, client degradation selection, suppression of toxic accumulation, failure propagation, adaptive resilience and proteome-wide reliability are outside the selected evidence.",
        "Original MustCover0/10 and ShouldCover6/12 and Optional3/4 do not become substrate/constraint/compartment/environment/catalyst/regulation gates. Client, buffer, temperature and supplied ATP are actual context; ATP-flux coupling, regulatory feedback and general resource architecture are not measured.",
        "Original3.20 parents3.0(weight0.35,necessary,dependency10,Nmin1,Ncrit2),3.1(0.30,necessary,dependency3,Nmin1,Ncrit2),3.5(0.20,enabling,dependency4,Nmin2,Ncrit2) point upward;3.6(0.15,contextual,dependency6,Nmin2,Ncrit2) points downward. Modes are cooperation/constraint for 3.0/3.1 and feedback for 3.5/3.6. Neither those stages nor weights/criticalities are experimentally established.",
        "The original3.6 parent is a multi-enzyme assembly with channeling/reaction-sequencing claims. GroEL/GroES refolding is not evidence for a universal prior multienzyme channeling or synchronized catalytic-pathway requirement.",
        "The same one publication supplies Rubisco and MBP assay contexts; these are distinct preparations, not independent confirmations. No allosteric/cooperative ancestor is forced from previous unrelated CAPN research."
      ],
      "level": 3
    },
    {
      "id": "bio:selective-proteasome-degradation-source-scope",
      "name": "Finite selective proteasome-degradation source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.36 to defined tag, tail and folded-domain manipulations in the source lysate assays. Efficient substrate band loss depends on the tested initiation context and can stop at a stabilized domain. These finite results qualify selective degradation, while universal misfolding recognition, native-protein exclusion, toxic-aggregate removal, amino-acid recovery and persistent system fidelity are excluded from this evidence scope.",
      "claimIds": [
        "C-bio-selective-proteasome-degradation-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
        },
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/36"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/36"
        }
      ],
      "openObligations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.36 property/persistent-quality-capability wording is a representational scope. The selected assays establish finite substrate susceptibility, not a newly observed persistent whole-cell quality-control property or an ontological acquisition event.",
        "The original identify/tag/dismantle failed conformations claim is qualified to engineered tag/tail-dependent degradation of defined folded models. Universal native-versus-aberrant surveillance and selective elimination of only defective proteins are excluded from admission.",
        "The original toxic-accumulation suppression, amino-acid recovery/reuse, aggregation prevention, maintenance of functional populations and higher-order stabilization are not measured by these band-loss/clipping assays.",
        "Original MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates. Actual lysate, substrate, tag, ligand, ATP and assay conditions are retained; no universal information/gradient variable is measured.",
        "Original3.36 parents3.20(weight0.4,necessary,dependency4,Nmin1,Ncrit2),3.0(0.35,necessary,dependency10,Nmin1,Ncrit1),2.3(0.15,enabling,dependency10,Nmin1,Ncrit1),3.26(0.1,contextual,dependency4,Nmin1,Ncrit2) all point downward. First three use constraint mode;3.26 uses feedback mode. These do not become universal necessary ancestry, quantitative parent laws or operational thresholds.",
        "The source lysate assays do not causally connect GroEL/GroES assistance to proteasome routing. The chaperone client assays and proteasome model substrate assays have separate systems, species preparations and contexts even though both papers use proteins called DHFR in some experiments.",
        "Original3.26 is a broad post-translational-modification card. N-end-rule ubiquitination and an engineered linear Ub4 fusion do not establish every phosphorylation/acetylation/methylation/glycosylation claim, universal reversibility or the original PTM parent hierarchy.",
        "Original2.3 is a quantum-mechanical bonding card; proteolytic band loss is not a new molecular electronic-structure measurement, chemistry-wide bond theory or proof of a downward-causation hierarchy."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:apetri2008-rubisco-refolding-context-rubisco-chaperonin-protocol-comparison",
      "source": "bio:apetri2008-rubisco-refolding-context",
      "target": "bio:rubisco-chaperonin-protocol-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-apetri2008-rubisco-refolding-context",
        "C-bio-rubisco-chaperonin-protocol-comparison"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "biochemistry:apetri2008-rubisco-refolding-context-rubisco-activity-recovery",
      "source": "bio:apetri2008-rubisco-refolding-context",
      "target": "bio:rubisco-activity-recovery",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-apetri2008-rubisco-refolding-context",
        "C-bio-rubisco-activity-recovery"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "biochemistry:apetri2008-rubisco-refolding-context-rubisco-solution-association",
      "source": "bio:apetri2008-rubisco-refolding-context",
      "target": "bio:rubisco-solution-association",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-apetri2008-rubisco-refolding-context",
        "C-bio-rubisco-solution-association"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "biochemistry:apetri2008-mbp-refolding-context-mbp-chaperonin-protocol-comparison",
      "source": "bio:apetri2008-mbp-refolding-context",
      "target": "bio:mbp-chaperonin-protocol-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-apetri2008-mbp-refolding-context",
        "C-bio-mbp-chaperonin-protocol-comparison"
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:apetri2008-mbp-refolding-context-mbp-fluorescence-and-scattering",
      "source": "bio:apetri2008-mbp-refolding-context",
      "target": "bio:mbp-fluorescence-and-scattering",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-apetri2008-mbp-refolding-context",
        "C-bio-mbp-fluorescence-and-scattering"
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:prakash2004-substrate-degradation-context-proteasome-defined-substrate-comparison",
      "source": "bio:prakash2004-substrate-degradation-context",
      "target": "bio:proteasome-defined-substrate-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-prakash2004-substrate-degradation-context",
        "C-bio-proteasome-defined-substrate-comparison"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "biochemistry:prakash2004-substrate-degradation-context-proteasome-tail-dependent-degradation",
      "source": "bio:prakash2004-substrate-degradation-context",
      "target": "bio:proteasome-tail-dependent-degradation",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-prakash2004-substrate-degradation-context",
        "C-bio-proteasome-tail-dependent-degradation"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "biochemistry:prakash2004-substrate-degradation-context-proteasome-stabilized-domain-clipping",
      "source": "bio:prakash2004-substrate-degradation-context",
      "target": "bio:proteasome-stabilized-domain-clipping",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-prakash2004-substrate-degradation-context",
        "C-bio-proteasome-stabilized-domain-clipping"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "biochemistry:prakash2004-substrate-ubiquitination-context-proteasome-tagging-control",
      "source": "bio:prakash2004-substrate-ubiquitination-context",
      "target": "bio:proteasome-tagging-control",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-prakash2004-substrate-ubiquitination-context",
        "C-bio-proteasome-tagging-control"
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    },
    {
      "id": "biochemistry:prakash2004-substrate-unfolding-control-context-proteasome-unfolding-control",
      "source": "bio:prakash2004-substrate-unfolding-control-context",
      "target": "bio:proteasome-unfolding-control",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The complete declared preparation delimits this measured comparison or response.",
      "claimIds": [
        "M-bio-prakash2004-substrate-unfolding-control-context",
        "C-bio-proteasome-unfolding-control"
      ],
      "contextIds": [
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:rubisco-chaperonin-protocol-comparison-rubisco-activity-recovery",
      "source": "bio:rubisco-chaperonin-protocol-comparison",
      "target": "bio:rubisco-activity-recovery",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "The combined chaperonin refolding protocol changes recovered Rubisco activity under the specified conditions and endpoint operations.",
      "claimIds": [
        "C-bio-rubisco-chaperonin-protocol-comparison",
        "C-bio-rubisco-activity-recovery"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding"
      ]
    },
    {
      "id": "biochemistry:mbp-chaperonin-protocol-comparison-mbp-fluorescence-and-scattering",
      "source": "bio:mbp-chaperonin-protocol-comparison",
      "target": "bio:mbp-fluorescence-and-scattering",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "In the chloride-containing protocol, the combined chaperonin protocol changes fluorescence-recovery rate; similar rates in the changed chloride-deficient protocol qualify that effect. No matched chaperonin light-scattering effect or isolated chloride effect is asserted.",
      "claimIds": [
        "C-bio-mbp-chaperonin-protocol-comparison",
        "C-bio-mbp-fluorescence-and-scattering"
      ],
      "contextIds": [
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:proteasome-defined-substrate-comparison-proteasome-tail-dependent-degradation",
      "source": "bio:proteasome-defined-substrate-comparison",
      "target": "bio:proteasome-tail-dependent-degradation",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "The defined tag/tail/substrate interventions change full-length substrate degradation in the source lysate assay.",
      "claimIds": [
        "C-bio-proteasome-defined-substrate-comparison",
        "C-bio-proteasome-tail-dependent-degradation"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "biochemistry:proteasome-defined-substrate-comparison-proteasome-stabilized-domain-clipping",
      "source": "bio:proteasome-defined-substrate-comparison",
      "target": "bio:proteasome-stabilized-domain-clipping",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "The defined stabilized-DHFR-tail construct comparison distinguishes terminal clipping from complete folded-domain degradation.",
      "claimIds": [
        "C-bio-proteasome-defined-substrate-comparison",
        "C-bio-proteasome-stabilized-domain-clipping"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation"
      ]
    },
    {
      "id": "biochemistry:rubisco-activity-recovery-chaperonin-aggregation-account",
      "source": "bio:rubisco-activity-recovery",
      "target": "bio:chaperonin-aggregation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This readout contributes to the conditional aggregation-partition interpretation while keeping its proxy and preparation limits.",
      "claimIds": [
        "C-bio-rubisco-activity-recovery",
        "C-bio-chaperonin-aggregation-account",
        "M-bio-chaperonin-aggregation-interpretation-method"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:rubisco-solution-association-chaperonin-aggregation-account",
      "source": "bio:rubisco-solution-association",
      "target": "bio:chaperonin-aggregation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This readout contributes to the conditional aggregation-partition interpretation while keeping its proxy and preparation limits.",
      "claimIds": [
        "C-bio-rubisco-solution-association",
        "C-bio-chaperonin-aggregation-account",
        "M-bio-chaperonin-aggregation-interpretation-method"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:mbp-fluorescence-and-scattering-chaperonin-aggregation-account",
      "source": "bio:mbp-fluorescence-and-scattering",
      "target": "bio:chaperonin-aggregation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This readout contributes to the conditional aggregation-partition interpretation while keeping its proxy and preparation limits.",
      "claimIds": [
        "C-bio-mbp-fluorescence-and-scattering",
        "C-bio-chaperonin-aggregation-account",
        "M-bio-chaperonin-aggregation-interpretation-method"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:proteasome-tail-dependent-degradation-proteasome-initiation-account",
      "source": "bio:proteasome-tail-dependent-degradation",
      "target": "bio:proteasome-initiation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This distinct source assay constrains the targeting/initiation interpretation without becoming a newly measured binding or unfolding step.",
      "claimIds": [
        "C-bio-proteasome-tail-dependent-degradation",
        "C-bio-proteasome-initiation-account",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:proteasome-stabilized-domain-clipping-proteasome-initiation-account",
      "source": "bio:proteasome-stabilized-domain-clipping",
      "target": "bio:proteasome-initiation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This distinct source assay constrains the targeting/initiation interpretation without becoming a newly measured binding or unfolding step.",
      "claimIds": [
        "C-bio-proteasome-stabilized-domain-clipping",
        "C-bio-proteasome-initiation-account",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:proteasome-tagging-control-proteasome-initiation-account",
      "source": "bio:proteasome-tagging-control",
      "target": "bio:proteasome-initiation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This distinct source assay constrains the targeting/initiation interpretation without becoming a newly measured binding or unfolding step.",
      "claimIds": [
        "C-bio-proteasome-tagging-control",
        "C-bio-proteasome-initiation-account",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:proteasome-unfolding-control-proteasome-initiation-account",
      "source": "bio:proteasome-unfolding-control",
      "target": "bio:proteasome-initiation-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This distinct source assay constrains the targeting/initiation interpretation without becoming a newly measured binding or unfolding step.",
      "claimIds": [
        "C-bio-proteasome-unfolding-control",
        "C-bio-proteasome-initiation-account",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:chaperone-readout-boundary-chaperone-quality-control-source-scope",
      "source": "bio:chaperone-readout-boundary",
      "target": "bio:chaperone-quality-control-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The readout distinction limits the original chaperone-quality-control scope.",
      "claimIds": [
        "D-bio-chaperone-readout-boundary",
        "C-bio-chaperone-quality-control-source-scope",
        "M-bio-chaperonin-aggregation-interpretation-method"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:chaperonin-aggregation-account-chaperone-quality-control-source-scope",
      "source": "bio:chaperonin-aggregation-account",
      "target": "bio:chaperone-quality-control-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional source account supplies only the declared finite portion of card 3.20.",
      "claimIds": [
        "C-bio-chaperonin-aggregation-account",
        "C-bio-chaperone-quality-control-source-scope",
        "M-bio-chaperonin-aggregation-interpretation-method"
      ],
      "contextIds": [
        "apetri2008-rubisco-refolding",
        "apetri2008-mbp-refolding"
      ]
    },
    {
      "id": "biochemistry:proteasome-step-boundary-selective-proteasome-degradation-source-scope",
      "source": "bio:proteasome-step-boundary",
      "target": "bio:selective-proteasome-degradation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separate targeting/initiation/proteolysis roles limit the original selective-degradation scope.",
      "claimIds": [
        "D-bio-proteasome-step-boundary",
        "C-bio-selective-proteasome-degradation-source-scope",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    },
    {
      "id": "biochemistry:proteasome-initiation-account-selective-proteasome-degradation-source-scope",
      "source": "bio:proteasome-initiation-account",
      "target": "bio:selective-proteasome-degradation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional source account supplies only the declared finite portion of card 3.36.",
      "claimIds": [
        "C-bio-proteasome-initiation-account",
        "C-bio-selective-proteasome-degradation-source-scope",
        "M-bio-proteasome-initiation-interpretation-method"
      ],
      "contextIds": [
        "prakash2004-substrate-degradation",
        "prakash2004-substrate-ubiquitination",
        "prakash2004-substrate-unfolding-control"
      ]
    }
  ],
  "studies": [
    {
      "id": "apetri2008-rubisco-refolding",
      "sourceId": "apetri2008-chaperonin-aggregation",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0809794105",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "105",
      "issue": "45",
      "pages": "17351-17355",
      "system": "Purified R. rubrum Rubisco with E. coli GroEL/SR1/GroES and ATP, solution/BSA controls",
      "preparation": "Use purified R. rubrum Rubisco at 80 nM and 15 C. Dilute100-fold from 5 M guanidine-HCl,100 mM Tris-HCl pH7.5,1 mM EDTA and 20 mM DTT into 50 mM Tris-HCl pH7.7,10 mM KCl,7 mM MgCl2 and 2 mM DTT, with or without 7.5 micromolar BSA. For chaperonin arms include 2 micromolar GroEL or SR1 during capture, then add 2.5 micromolar GroES and 5 mM ATP. Quench timed aliquots with hexokinase/glucose and assay radiochemical Rubisco activity. SR1 aliquots receive4 C for 10 min to release GroES and permit dimerization. Separately monitor dynamic light scattering and Superose6 elution of 35S-labeled Rubisco in the solution-plus-BSA reaction, with native/BSA controls.",
      "observable": "Radiochemical Rubisco activity, dynamic light scattering and 35S size-fractionation versus refolding time",
      "finding": "The chaperonin protocols recover activity faster than the stated solution protocol; solution aggregation/readout controls constrain a conditional aggregation-partition account.",
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.20 object/quality-system wording is retained as a representational scope only: purified GroEL/SR1/GroES supplies an identifiable prepared assembly, not a newly demonstrated persistent integrated cellular surveillance, stress-regulation or degradation-routing system.",
        "Original folding assistance and aggregation management are qualified to the declared activity/proxy readouts. Native/aberrant discrimination, damaged-protein recognition, client degradation selection, suppression of toxic accumulation, failure propagation, adaptive resilience and proteome-wide reliability are outside the selected evidence.",
        "Original MustCover0/10 and ShouldCover6/12 and Optional3/4 do not become substrate/constraint/compartment/environment/catalyst/regulation gates. Client, buffer, temperature and supplied ATP are actual context; ATP-flux coupling, regulatory feedback and general resource architecture are not measured.",
        "Original3.20 parents3.0(weight0.35,necessary,dependency10,Nmin1,Ncrit2),3.1(0.30,necessary,dependency3,Nmin1,Ncrit2),3.5(0.20,enabling,dependency4,Nmin2,Ncrit2) point upward;3.6(0.15,contextual,dependency6,Nmin2,Ncrit2) points downward. Modes are cooperation/constraint for 3.0/3.1 and feedback for 3.5/3.6. Neither those stages nor weights/criticalities are experimentally established.",
        "The original3.6 parent is a multi-enzyme assembly with channeling/reaction-sequencing claims. GroEL/GroES refolding is not evidence for a universal prior multienzyme channeling or synchronized catalytic-pathway requirement.",
        "The same one publication supplies Rubisco and MBP assay contexts; these are distinct preparations, not independent confirmations. No allosteric/cooperative ancestor is forced from previous unrelated CAPN research."
      ],
      "readExtent": "complete-primary-main-article-html-and-four-main-figures-supplement-unread",
      "reviewedLocators": [
        "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
        "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0809794105",
      "correctionCheck": "Read the complete actual primary PMC HTML main article, including all Results/Discussion/Methods and captions, and visually inspected all four original main figure images. Main published pages 17351-17355 identify the article, but no separate final PDF page image was read. The Supporting Information PDF endpoint returned HTML, not a readable PDF; SI Methods/Figures S1-S2 are not claimed read. PubMed PMID 18987317, PMC2579888 and Crossref agree on the two authors, DOI, title, PNAS105(45):17351-17355 and 11 November 2008 issue. PubMed gives online 5 November2008 whereas Crossref records online 11 November2008; retain this date discrepancy. The PMC article uses assets under internal instance 2582256; these are the actual linked figures, not a second publication. Limited title/DOI/erratum searches on2026-10-20 found no explicit correction linked to this article; empty Crossref relation/update fields do not prove absence. No cited predecessor, raw assay data, new kinetic fit or independent replication is admitted. The broad passive-cage conclusion is conditional and not a universal exclusion of other chaperonin effects."
    },
    {
      "id": "apetri2008-mbp-refolding",
      "sourceId": "apetri2008-chaperonin-aggregation",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0809794105",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "105",
      "issue": "45",
      "pages": "17351-17355",
      "system": "Purified mature DM-MBP V8G/Y283D and wild-type MBP with GroEL/SR1/GroES and ATP",
      "preparation": "Use purified mature DM-MBP V8G/Y283D, normally100 nM at 25 C, plus concentration-series and wild-type controls. The chloride-containing arm dilutes100-fold from 6 M guanidine-HCl into 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2. The chloride-deficient arm dilutes100-fold from 9.5 M urea into 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2. In each chaperonin arm capture with 250 nM GroEL or SR1, then add 250 nM GroES and 5 mM ATP. Record tryptophan fluorescence at 295 nm excitation/345 nm emission and separate dynamic light scattering. The two solution protocols differ in several components.",
      "observable": "Tryptophan fluorescence recovery, concentration dependence and dynamic light scattering",
      "finding": "DM-MBP apparent refolding rate and scattering depend on preparation; changing several solution components removes the observed chaperonin rate advantage under that new protocol.",
      "limitations": [
        "Purified, already synthesized clients and purified E. coli GroEL/SR1/GroES are studied in vitro. The selected data do not observe translation, cellular stress adaptation, protein damage surveillance, routing to proteasomes or organismal proteome reliability.",
        "Adding the GroEL/GroES/ATP protocol is a combined intervention. These panels do not by themselves isolate ATP hydrolysis, individual ATPase steps, capture specificity, every component necessity or all possible active folding effects.",
        "Activity recovery, tryptophan fluorescence, light scattering and size-exclusion elution measure different properties. None alone supplies an atomic native structure, a unique folding path or the fraction of every chain in a single native state.",
        "All readouts and fitted rates come from one publication. No raw traces, new fit, covariance, curve digitization, independent replication or analytically-checked status is supplied.",
        "The source interprets these conditions through aggregation prevention. Its broad passive-cage conclusion is retained as conditional, not a proof that all chaperonins are passive or that no client can experience an active conformational effect.",
        "The DM-MBP client is mature V8G/Y283D maltose-binding protein. Tryptophan fluorescence is an environment-sensitive refolding proxy; no maltose-binding affinity, transport activity or enzymatic client assay is measured here.",
        "The chloride-containing protocol uses 20 mM Tris-HCl pH7.5,200 mM KCl and 5 mM Mg(OAc)2 after dilution from 6 M guanidine-HCl. The chloride-deficient protocol uses 100 mM Hepes pH7.5,20 mM KOAc and 5 mM Mg(OAc)2 after dilution from 9.5 M urea. Buffer, salt concentration/anion and starting denaturant all change; chloride alone is not isolated.",
        "Concentration dependence and light scattering support intermolecular association under the tested solution protocol. They do not identify a unique oligomer structure or prove that every fluorescence intermediate is an aggregate.",
        "Rate equivalence in the changed solution protocol constrains a need for a faster intrinsic cage-only step for this client under those conditions. It does not prove an unchanged microscopic route or universal absence of chaperonin active effects.",
        "Rubisco activity requires native-dimer formation. SR1 aliquots are chilled to release GroES and allow released monomers to assemble before the enzyme assay; the readout does not show active Rubisco dimers inside the single-client cis chamber.",
        "Figure 1B compares refolding Rubisco plus BSA with native Rubisco plus BSA and BSA alone in solution; it does not directly measure a matched light-scattering reduction inside GroEL/SR1.",
        "Figure 1 C source inference permits reversible intermediate-sized association plus growth of persistent void-volume material. The data do not show that every aggregate dissolves or that all solution aggregation is reversible.",
        "BSA is a controlled solution additive at 7.5 micromolar, not a missing universal chaperone or a universal concentration threshold. Reported rate constants are apparent source fits without newly reconstructed errors.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.20 object/quality-system wording is retained as a representational scope only: purified GroEL/SR1/GroES supplies an identifiable prepared assembly, not a newly demonstrated persistent integrated cellular surveillance, stress-regulation or degradation-routing system.",
        "Original folding assistance and aggregation management are qualified to the declared activity/proxy readouts. Native/aberrant discrimination, damaged-protein recognition, client degradation selection, suppression of toxic accumulation, failure propagation, adaptive resilience and proteome-wide reliability are outside the selected evidence.",
        "Original MustCover0/10 and ShouldCover6/12 and Optional3/4 do not become substrate/constraint/compartment/environment/catalyst/regulation gates. Client, buffer, temperature and supplied ATP are actual context; ATP-flux coupling, regulatory feedback and general resource architecture are not measured.",
        "Original3.20 parents3.0(weight0.35,necessary,dependency10,Nmin1,Ncrit2),3.1(0.30,necessary,dependency3,Nmin1,Ncrit2),3.5(0.20,enabling,dependency4,Nmin2,Ncrit2) point upward;3.6(0.15,contextual,dependency6,Nmin2,Ncrit2) points downward. Modes are cooperation/constraint for 3.0/3.1 and feedback for 3.5/3.6. Neither those stages nor weights/criticalities are experimentally established.",
        "The original3.6 parent is a multi-enzyme assembly with channeling/reaction-sequencing claims. GroEL/GroES refolding is not evidence for a universal prior multienzyme channeling or synchronized catalytic-pathway requirement.",
        "The same one publication supplies Rubisco and MBP assay contexts; these are distinct preparations, not independent confirmations. No allosteric/cooperative ancestor is forced from previous unrelated CAPN research."
      ],
      "readExtent": "complete-primary-main-article-html-and-four-main-figures-supplement-unread",
      "reviewedLocators": [
        "Complete primary PMC HTML, Results Faster Folding of Double-Mutant Maltose-Binding Protein and Chloride Depletion Blocks DM-MBP Aggregation, Figures 2A-D and 3A-B, Methods Proteins, Protein Refolding/MBP and Assays: fluorescence, concentration and changed solution protocols",
        "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0809794105",
      "correctionCheck": "Read the complete actual primary PMC HTML main article, including all Results/Discussion/Methods and captions, and visually inspected all four original main figure images. Main published pages 17351-17355 identify the article, but no separate final PDF page image was read. The Supporting Information PDF endpoint returned HTML, not a readable PDF; SI Methods/Figures S1-S2 are not claimed read. PubMed PMID 18987317, PMC2579888 and Crossref agree on the two authors, DOI, title, PNAS105(45):17351-17355 and 11 November 2008 issue. PubMed gives online 5 November2008 whereas Crossref records online 11 November2008; retain this date discrepancy. The PMC article uses assets under internal instance 2582256; these are the actual linked figures, not a second publication. Limited title/DOI/erratum searches on2026-10-20 found no explicit correction linked to this article; empty Crossref relation/update fields do not prove absence. No cited predecessor, raw assay data, new kinetic fit or independent replication is admitted. The broad passive-cage conclusion is conditional and not a universal exclusion of other chaperonin effects."
    },
    {
      "id": "prakash2004-substrate-degradation",
      "sourceId": "prakash2004-proteasome-initiation",
      "studyType": "primary-experiment",
      "doi": "10.1038/nsmb814",
      "journal": "Nature Structural & Molecular Biology",
      "volume": "11",
      "issue": "9",
      "pages": "830-837",
      "system": "Engineered DHFR/cpLys38 tag/tail and Ub4 substrates in ATP-supplemented rabbit reticulocyte lysate",
      "preparation": "Engineer N-end-rule-tagged E. coli DHFR/cpLys38, selected C-terminally tagged cpLys38, lysine-less unstructured-tail additions, terminal His6 and linear Ub4 variants as defined in Figures 2-5. cpLys38 joins the old termini with six glycines and starts at former Lys38/ends at Asn37. The N-end-rule construct first carries a cleavable N-terminal ubiquitin followed by a40-residue lac-repressor-derived linker; lysate cleavage exposes the specified Arg or control Met, with ubiquitin-acceptor Lys15/Lys17 or Arg substitutions. Translate35S-labeled substrates in reticulocyte lysate with 12 mM Arg-Ala for N-end-rule substrates, then centrifuge and ammonium-sulfate partially purify. The His6 immunoblot substrate is separately E. coli-expressed and Ni-NTA purified. Resuspend in 25% glycerol,25 mM MgCl2,0.25 M Tris-HCl pH7.4 and dilute five-fold into ATP-depleted rabbit reticulocyte lysate supplemented with 1 mM DTT,5 mM methionine and 25 micromolar ubiquitin. Prewarm25 C for 3 min; initiate with 0.5 mM ATP,10 mM creatine phosphate and 0.1mg/ml creatine phosphokinase. Compare320 micromolar methotrexate with equal-DMSO controls where indicated. Quench time points into SDS-PAGE buffer and quantify radiolabeled full-length/ubiquitinated bands, fragments and, for the separate purified His6 substrate, terminal-epitope immunoblots.",
      "observable": "Time-resolved35S full-length/ubiquitinated SDS-PAGE bands, fragments and terminal-His6 immunoblot",
      "finding": "Tag/tail/structure manipulations change source-attributed proteasome degradation in lysate, while a stabilized wild-type DHFR domain can persist after terminal-tail clipping.",
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.36 property/persistent-quality-capability wording is a representational scope. The selected assays establish finite substrate susceptibility, not a newly observed persistent whole-cell quality-control property or an ontological acquisition event.",
        "The original identify/tag/dismantle failed conformations claim is qualified to engineered tag/tail-dependent degradation of defined folded models. Universal native-versus-aberrant surveillance and selective elimination of only defective proteins are excluded from admission.",
        "The original toxic-accumulation suppression, amino-acid recovery/reuse, aggregation prevention, maintenance of functional populations and higher-order stabilization are not measured by these band-loss/clipping assays.",
        "Original MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates. Actual lysate, substrate, tag, ligand, ATP and assay conditions are retained; no universal information/gradient variable is measured.",
        "Original3.36 parents3.20(weight0.4,necessary,dependency4,Nmin1,Ncrit2),3.0(0.35,necessary,dependency10,Nmin1,Ncrit1),2.3(0.15,enabling,dependency10,Nmin1,Ncrit1),3.26(0.1,contextual,dependency4,Nmin1,Ncrit2) all point downward. First three use constraint mode;3.26 uses feedback mode. These do not become universal necessary ancestry, quantitative parent laws or operational thresholds.",
        "The source lysate assays do not causally connect GroEL/GroES assistance to proteasome routing. The chaperone client assays and proteasome model substrate assays have separate systems, species preparations and contexts even though both papers use proteins called DHFR in some experiments.",
        "Original3.26 is a broad post-translational-modification card. N-end-rule ubiquitination and an engineered linear Ub4 fusion do not establish every phosphorylation/acetylation/methylation/glycosylation claim, universal reversibility or the original PTM parent hierarchy.",
        "Original2.3 is a quantum-mechanical bonding card; proteolytic band loss is not a new molecular electronic-structure measurement, chemistry-wide bond theory or proof of a downward-causation hierarchy."
      ],
      "readExtent": "complete-published-eight-page-primary-article-and-six-main-figures",
      "reviewedLocators": [
        "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
        "Published pages 832-833, Figure 3a-d and associated Results; page 836 Methods Substrate proteins and Proteasome degradation assays: His6-tail clipping versus persistence of stabilized DHFR",
        "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
        "Published pages 830-831 Introduction/Results, page 831 Figure 1, pages 833-835 Internal initiation sites/Discussion and Figures 5-6, page 836 complete Methods and page 837 references: finite substrate evidence versus proposed recognition/unfolding cycle and prior work"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/nsmb814",
      "correctionCheck": "Read all eight actual published PDF pages 830-837, including complete Results/Discussion/Methods, all six captions and references; visually inspected Figures 1-6 and the Methods page through local page renders. The PDF is hosted on the corresponding author laboratory website and reproduces the published title, five authors, journal11(9), page headers and online 15 August2004 DOI. PubMed PMID 15311270, Crossref and publisher metadata agree on identity, 15 August online date and September2004 issue. No explicit correction was found in limited title/DOI/erratum searches on2026-10-20. Crossref lists a has-review relation10.3410/f.1020782.240458, not an erratum; empty update fields do not prove correction absence. The assays are in rabbit reticulocyte lysate with partly purified translated radiolabeled substrates, with a separately E. coli-expressed/purified His6 construct for immunoblotting. They are not a newly purified/reconstituted proteasome system. Data-not-shown controls, unpublished exact tail sequences, direct binding/force/translocation measurements and raw autoradiograms are not reconstructed. Figure 6 is a proposed cycle using an earlier EM reconstruction, not a newly observed structure or complete measured sequence."
    },
    {
      "id": "prakash2004-substrate-ubiquitination",
      "sourceId": "prakash2004-proteasome-initiation",
      "studyType": "primary-experiment",
      "doi": "10.1038/nsmb814",
      "journal": "Nature Structural & Molecular Biology",
      "volume": "11",
      "issue": "9",
      "pages": "830-837",
      "system": "Full versus shortened N-end-rule DHFR linker constructs in rabbit reticulocyte lysate",
      "preparation": "Compare N-end-rule Usignal-DHFR and the shortened Usignal-delta15 construct in the same source lysate assay at 25 C, retaining0.5 mM ATP/regeneration and 25 micromolar ubiquitin, but add 2 micromolar Ubal to inhibit deubiquitinating enzymes and 320 micromolar methotrexate to block degradation. Quantify ubiquitinated-band accumulation relative to initial nonubiquitinated radiolabeled substrate by SDS-PAGE/electronic autoradiography. The shortened linker deletes residues 25-40 as described in the source; its delta15 name is retained without silently correcting the source numbering.",
      "observable": "Accumulating ubiquitinated radiolabeled substrate bands in Ubal/methotrexate lysate control",
      "finding": "Full and shortened N-end-rule constructs show similar source ubiquitination kinetics/extent despite different degradation susceptibility.",
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.36 property/persistent-quality-capability wording is a representational scope. The selected assays establish finite substrate susceptibility, not a newly observed persistent whole-cell quality-control property or an ontological acquisition event.",
        "The original identify/tag/dismantle failed conformations claim is qualified to engineered tag/tail-dependent degradation of defined folded models. Universal native-versus-aberrant surveillance and selective elimination of only defective proteins are excluded from admission.",
        "The original toxic-accumulation suppression, amino-acid recovery/reuse, aggregation prevention, maintenance of functional populations and higher-order stabilization are not measured by these band-loss/clipping assays.",
        "Original MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates. Actual lysate, substrate, tag, ligand, ATP and assay conditions are retained; no universal information/gradient variable is measured.",
        "Original3.36 parents3.20(weight0.4,necessary,dependency4,Nmin1,Ncrit2),3.0(0.35,necessary,dependency10,Nmin1,Ncrit1),2.3(0.15,enabling,dependency10,Nmin1,Ncrit1),3.26(0.1,contextual,dependency4,Nmin1,Ncrit2) all point downward. First three use constraint mode;3.26 uses feedback mode. These do not become universal necessary ancestry, quantitative parent laws or operational thresholds.",
        "The source lysate assays do not causally connect GroEL/GroES assistance to proteasome routing. The chaperone client assays and proteasome model substrate assays have separate systems, species preparations and contexts even though both papers use proteins called DHFR in some experiments.",
        "Original3.26 is a broad post-translational-modification card. N-end-rule ubiquitination and an engineered linear Ub4 fusion do not establish every phosphorylation/acetylation/methylation/glycosylation claim, universal reversibility or the original PTM parent hierarchy.",
        "Original2.3 is a quantum-mechanical bonding card; proteolytic band loss is not a new molecular electronic-structure measurement, chemistry-wide bond theory or proof of a downward-causation hierarchy."
      ],
      "readExtent": "complete-published-eight-page-primary-article-and-six-main-figures",
      "reviewedLocators": [
        "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/nsmb814",
      "correctionCheck": "Read all eight actual published PDF pages 830-837, including complete Results/Discussion/Methods, all six captions and references; visually inspected Figures 1-6 and the Methods page through local page renders. The PDF is hosted on the corresponding author laboratory website and reproduces the published title, five authors, journal11(9), page headers and online 15 August2004 DOI. PubMed PMID 15311270, Crossref and publisher metadata agree on identity, 15 August online date and September2004 issue. No explicit correction was found in limited title/DOI/erratum searches on2026-10-20. Crossref lists a has-review relation10.3410/f.1020782.240458, not an erratum; empty update fields do not prove correction absence. The assays are in rabbit reticulocyte lysate with partly purified translated radiolabeled substrates, with a separately E. coli-expressed/purified His6 construct for immunoblotting. They are not a newly purified/reconstituted proteasome system. Data-not-shown controls, unpublished exact tail sequences, direct binding/force/translocation measurements and raw autoradiograms are not reconstructed. Figure 6 is a proposed cycle using an earlier EM reconstruction, not a newly observed structure or complete measured sequence."
    },
    {
      "id": "prakash2004-substrate-unfolding-control",
      "sourceId": "prakash2004-proteasome-initiation",
      "studyType": "primary-experiment",
      "doi": "10.1038/nsmb814",
      "journal": "Nature Structural & Molecular Biology",
      "volume": "11",
      "issue": "9",
      "pages": "830-837",
      "system": "Engineered cpLys38 with/without tail in the source separate global-unfolding control",
      "preparation": "For the Figure 2e control, compare cpLys38 with and without a C-terminal tail at 15 C in 50 mM Tris-Cl pH7.5,0.5 mM EDTA,10 mM KCl,100 micromolar methotrexate and 5 mM MgCl2. Initiate by adding1 micromolar GroEL. At time points withdraw10 microliters into GroEL buffer with 0.1mg/ml proteinaseK,100 micromolar methotrexate and 1 mM DTT at 4 C; after 10 min TCA-precipitate and quantify surviving radiolabeled bands. This control uses a different temperature and methotrexate concentration from degradation.",
      "observable": "GroEL-capture followed by proteinaseK-protected radiolabeled substrate versus incubation time",
      "finding": "Source cpLys38 tail/no-tail control traces are similar under the separate15 C/100 micromolar-methotrexate protocol.",
      "limitations": [
        "These are engineered E. coli DHFR/cpLys38/barnase substrate constructs in rabbit reticulocyte lysate, not a universal survey of naturally damaged proteins or an intact-cell misfolding-surveillance experiment.",
        "Proteasome attribution follows the source lysate assay. No separately purified proteasome, newly isolated E1/E2/E3 requirement, new receptor-binding measurement, ATPase-step assay, translocation movie, force measurement or proteasome-inhibitor control is supplied by the selected main panels.",
        "SDS-PAGE/autoradiography quantifies remaining full-length plus ubiquitinated forms as defined by each panel; His6 immunoblotting localizes loss of a terminal epitope. Band loss, tail clipping, complete destruction and production/reuse of free amino acids are different outcomes.",
        "The source tests folded and methotrexate-stabilized proteins. The assays do not establish that only misfolded proteins are degraded, that native proteins are excluded, or that the proteasome itself decides whether a client is damaged.",
        "The engineered linear Ub4 tag has four N-to-C fused ubiquitin moieties with G76V substitutions. It is not a newly measured native Lys48-isopeptide-linked polyubiquitin chain or an independently observed covalent ubiquitination reaction.",
        "No universal requirement for ubiquitination is admitted; the paper itself cites ubiquitin-independent cases as background. Recognition, initiation, unfolding and proteolysis remain distinct, with the detailed unfolding/pulling cycle conditional.",
        "No raw autoradiograms, numerical rate fit, binding constant, precise substrate concentration or kinetic uncertainty is reconstructed. Exact engineered tail amino-acid sequences are not printed in the reviewed main Methods, and no universal20-residue minimum is admitted from data-not-shown observations.",
        "The global-unfolding control is a GroEL-binding/protease-protection assay at 15 C with 100 micromolar methotrexate. Degradation uses 25 C and 320 micromolar methotrexate; a similar control trace is not proof of identical local stability or kinetics under every degradation condition.",
        "Nonspecific protease sensitivity and GroEL capture are operational readouts. A similar source global-unfolding trace does not exclude local changes or establish an exact thermodynamic free-energy identity.",
        "Selected degradation panels use 25 C and 0.5 mM ATP with regeneration; Figure 1 two-domain direction assays use 30 C and are not silently treated as the same condition.",
        "C-terminal tail effects differ between cpLys38 and wild-type DHFR under 320 micromolar methotrexate: the former can be degraded whereas the latter can be clipped while the stabilized DHFR remains. A tag or tail does not guarantee complete degradation of every substrate.",
        "Tail disorder is a source assignment supported by the paper separate4 C nonspecific-protease sensitivity assay and a hydrodynamic statement partly data-not-shown. It is not a newly solved structure or an independent measurement of every tail conformation.",
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "Original Level3, Phase2 Self-organization, Science arrays and established status are catalogue declarations, not experimental validation of every original conjunct, an ontological arising, a universal level hierarchy or independent reproduction.",
        "Original carrier group2/type4, parent weights, necessary/enabling/contextual labels, directions, interaction modes and null saturation are not measured quantitative laws. No universal molecule count or critical carrier threshold is inferred from these constructs.",
        "Generic original theoretical and empirical Evidence entries contain no DOI/URL. They supply no extra experiments, genetic perturbations, model implementation or universal proteostasis network validation.",
        "Card3.36 property/persistent-quality-capability wording is a representational scope. The selected assays establish finite substrate susceptibility, not a newly observed persistent whole-cell quality-control property or an ontological acquisition event.",
        "The original identify/tag/dismantle failed conformations claim is qualified to engineered tag/tail-dependent degradation of defined folded models. Universal native-versus-aberrant surveillance and selective elimination of only defective proteins are excluded from admission.",
        "The original toxic-accumulation suppression, amino-acid recovery/reuse, aggregation prevention, maintenance of functional populations and higher-order stabilization are not measured by these band-loss/clipping assays.",
        "Original MustCover0/10, ShouldCover4/12 and Optional5/7 are not universal substrate/constraint/regulation/environment/gradient/information gates. Actual lysate, substrate, tag, ligand, ATP and assay conditions are retained; no universal information/gradient variable is measured.",
        "Original3.36 parents3.20(weight0.4,necessary,dependency4,Nmin1,Ncrit2),3.0(0.35,necessary,dependency10,Nmin1,Ncrit1),2.3(0.15,enabling,dependency10,Nmin1,Ncrit1),3.26(0.1,contextual,dependency4,Nmin1,Ncrit2) all point downward. First three use constraint mode;3.26 uses feedback mode. These do not become universal necessary ancestry, quantitative parent laws or operational thresholds.",
        "The source lysate assays do not causally connect GroEL/GroES assistance to proteasome routing. The chaperone client assays and proteasome model substrate assays have separate systems, species preparations and contexts even though both papers use proteins called DHFR in some experiments.",
        "Original3.26 is a broad post-translational-modification card. N-end-rule ubiquitination and an engineered linear Ub4 fusion do not establish every phosphorylation/acetylation/methylation/glycosylation claim, universal reversibility or the original PTM parent hierarchy.",
        "Original2.3 is a quantum-mechanical bonding card; proteolytic band loss is not a new molecular electronic-structure measurement, chemistry-wide bond theory or proof of a downward-causation hierarchy."
      ],
      "readExtent": "complete-published-eight-page-primary-article-and-six-main-figures",
      "reviewedLocators": [
        "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/nsmb814",
      "correctionCheck": "Read all eight actual published PDF pages 830-837, including complete Results/Discussion/Methods, all six captions and references; visually inspected Figures 1-6 and the Methods page through local page renders. The PDF is hosted on the corresponding author laboratory website and reproduces the published title, five authors, journal11(9), page headers and online 15 August2004 DOI. PubMed PMID 15311270, Crossref and publisher metadata agree on identity, 15 August online date and September2004 issue. No explicit correction was found in limited title/DOI/erratum searches on2026-10-20. Crossref lists a has-review relation10.3410/f.1020782.240458, not an erratum; empty update fields do not prove correction absence. The assays are in rabbit reticulocyte lysate with partly purified translated radiolabeled substrates, with a separately E. coli-expressed/purified His6 construct for immunoblotting. They are not a newly purified/reconstituted proteasome system. Data-not-shown controls, unpublished exact tail sequences, direct binding/force/translocation measurements and raw autoradiograms are not reconstructed. Figure 6 is a proposed cycle using an earlier EM reconstruction, not a newly observed structure or complete measured sequence."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:apetri2008-rubisco-refolding-context",
      "role": "experimental-context",
      "denotes": "Purified Rubisco chaperonin refolding context within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-apetri2008-rubisco-refolding-context"
      ]
    },
    {
      "nodeId": "bio:apetri2008-mbp-refolding-context",
      "role": "experimental-context",
      "denotes": "Purified DM-MBP refolding and aggregation context within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-apetri2008-mbp-refolding-context"
      ]
    },
    {
      "nodeId": "bio:prakash2004-substrate-degradation-context",
      "role": "experimental-context",
      "denotes": "Defined-substrate lysate degradation context within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-prakash2004-substrate-degradation-context"
      ]
    },
    {
      "nodeId": "bio:prakash2004-substrate-ubiquitination-context",
      "role": "experimental-context",
      "denotes": "Separate lysate ubiquitination-control context within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-prakash2004-substrate-ubiquitination-context"
      ]
    },
    {
      "nodeId": "bio:prakash2004-substrate-unfolding-control-context",
      "role": "experimental-context",
      "denotes": "Separate cpLys38 global-unfolding control context within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-prakash2004-substrate-unfolding-control-context"
      ]
    },
    {
      "nodeId": "bio:chaperone-readout-boundary",
      "role": "definition",
      "denotes": "Chaperone activity, proxy and aggregation boundary within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-chaperone-readout-boundary"
      ]
    },
    {
      "nodeId": "bio:proteasome-step-boundary",
      "role": "definition",
      "denotes": "Proteasome tagging, initiation and proteolysis boundary within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-proteasome-step-boundary"
      ]
    },
    {
      "nodeId": "bio:rubisco-chaperonin-protocol-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Controlled Rubisco refolding-protocol comparison within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-rubisco-chaperonin-protocol-comparison"
      ]
    },
    {
      "nodeId": "bio:rubisco-activity-recovery",
      "role": "scoped-phenomenon",
      "denotes": "Protocol-dependent recovery of Rubisco catalytic activity within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-rubisco-activity-recovery"
      ]
    },
    {
      "nodeId": "bio:rubisco-solution-association",
      "role": "scoped-phenomenon",
      "denotes": "Rubisco solution association during activity recovery within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-rubisco-solution-association"
      ]
    },
    {
      "nodeId": "bio:mbp-chaperonin-protocol-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Controlled MBP refolding-protocol comparisons within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-mbp-chaperonin-protocol-comparison"
      ]
    },
    {
      "nodeId": "bio:mbp-fluorescence-and-scattering",
      "role": "scoped-phenomenon",
      "denotes": "DM-MBP fluorescence recovery and solution scattering within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-mbp-fluorescence-and-scattering"
      ]
    },
    {
      "nodeId": "bio:chaperonin-aggregation-account",
      "role": "scoped-phenomenon",
      "denotes": "Conditional aggregation-prevention account of refolding assistance within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-chaperonin-aggregation-account"
      ]
    },
    {
      "nodeId": "bio:proteasome-defined-substrate-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Controlled tag, tail and folded-domain substrate series within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-defined-substrate-comparison"
      ]
    },
    {
      "nodeId": "bio:proteasome-tail-dependent-degradation",
      "role": "scoped-phenomenon",
      "denotes": "Source-attributed tail-dependent substrate degradation in lysate within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-tail-dependent-degradation"
      ]
    },
    {
      "nodeId": "bio:proteasome-stabilized-domain-clipping",
      "role": "scoped-phenomenon",
      "denotes": "C-terminal clipping without complete stabilized-DHFR destruction within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-stabilized-domain-clipping"
      ]
    },
    {
      "nodeId": "bio:proteasome-tagging-control",
      "role": "scoped-phenomenon",
      "denotes": "Ubiquitination control for the shortened N-end-rule linker within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-tagging-control"
      ]
    },
    {
      "nodeId": "bio:proteasome-unfolding-control",
      "role": "scoped-phenomenon",
      "denotes": "Tail and cpLys38 global-unfolding control within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-unfolding-control"
      ]
    },
    {
      "nodeId": "bio:proteasome-initiation-account",
      "role": "scoped-phenomenon",
      "denotes": "Conditional separation of targeting and degradation initiation within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-proteasome-initiation-account"
      ]
    },
    {
      "nodeId": "bio:chaperone-quality-control-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite chaperone and quality-control source scope within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-chaperone-quality-control-source-scope"
      ]
    },
    {
      "nodeId": "bio:selective-proteasome-degradation-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite selective proteasome-degradation source scope within its stated client/substrate and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-selective-proteasome-degradation-source-scope"
      ]
    }
  ]
};
