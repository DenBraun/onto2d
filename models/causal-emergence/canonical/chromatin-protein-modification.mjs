// Exact reused chromatin and ubiquitination assays; no new acquisition or inherited-memory claim.
export const CHROMATIN_PROTEIN_MODIFICATION_RECORDS = {
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
      "id": "su2017",
      "kind": "research-publication",
      "title": "Neuronal activity modifies the chromatin accessibility landscape in the adult brain",
      "authors": [
        "Yijing Su",
        "Jaehoon Shin",
        "Chun Zhong",
        "Sabrina Wang",
        "Prith Roychowdhury",
        "Jongseuk Lim",
        "David Kim",
        "Guo-li Ming",
        "Hongjun Song"
      ],
      "year": 2017,
      "doi": "10.1038/nn.4494",
      "url": "https://www.med.upenn.edu/minglab/assets/user-content/documents/NatureNeuroscience_Mar2017.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Results: neuronal activity-induced changes in chromatin accessibility; Figure 1; Online Methods: Animals and ATAC-seq",
          "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
          "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
          "Results: role of c-Fos in activity-induced chromatin opening; Figure 4e-g; Online Methods: Animals and DNA constructs",
          "Results: temporal characteristics of activity-induced neuronal chromatin accessibility changes; Figures 5-6",
          "Results and Figure 7c-d; Discussion; Online Methods: ChIP followed by qPCR analysis and Statistical analysis"
        ],
        "limit": "Main experimental results, captions and Online Methods read from the author-hosted published PDF; Figures 5-7 visually inspected. Selected supplementary legends and reporting fields were read separately. Bulk dentate preparations and independent ATAC/RNA samples are not single-cell longitudinal measurements. GEO GSE82015 and GSE86367 sample metadata were inspected, but FASTQ data, analysis code and external ChIP-seq datasets were not replayed. Figure 6c labels 144 shared upregulated genes while the text says 114; Figure 7c caption timepoints conflict with its plot, Results and Methods. Primer and Gabrr1/Gabbr1 labels also contain unresolved inconsistencies."
      }
    },
    {
      "id": "su2017-supplement",
      "kind": "research-publication",
      "title": "Su et al. 2017, Supplementary Figures and Table 2",
      "authors": [
        "Yijing Su",
        "Jaehoon Shin",
        "Chun Zhong",
        "Sabrina Wang",
        "Prith Roychowdhury",
        "Jongseuk Lim",
        "David Kim",
        "Guo-li Ming",
        "Hongjun Song"
      ],
      "year": 2017,
      "doi": null,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnn.4494/MediaObjects/41593_2017_BFnn4494_MOESM57_ESM.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Supplementary Figure 6: c-Fos expression, AAV constructs and knockdown/overexpression validation",
          "Supplementary Figures 8-9: ATAC timepoints and selected c-Fos ChIP-qPCR loci"
        ],
        "limit": "Selected supplementary legends read; no independent quantification of images, complete supplemental-table replay or validation of antibody specificity."
      }
    },
    {
      "id": "su2017-table5",
      "kind": "research-dataset",
      "title": "Su et al. 2017, Supplementary Table 5: differential gene expression",
      "authors": [
        "Yijing Su",
        "Jaehoon Shin",
        "Chun Zhong",
        "Sabrina Wang",
        "Prith Roychowdhury",
        "Jongseuk Lim",
        "David Kim",
        "Guo-li Ming",
        "Hongjun Song"
      ],
      "year": 2017,
      "doi": null,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnn.4494/MediaObjects/41593_2017_BFnn4494_MOESM62_ESM.xlsx",
      "path": "references/canonical/data/41593_2017_BFnn4494_MOESM62_ESM.xlsx",
      "sha256": "ce3501720e3f719f7cd901e8bd090d5009d59494e1c63b0739d815690c9794ed",
      "review": {
        "extent": "selected-spreadsheet-cells",
        "locators": [
          "'Table S5a. E1-E0'!A2:H5144",
          "'Table S5b. E4-E0'!A2:H5931",
          "'Table S5c. E24-E0'!A2:H3834",
          "'Table S5d. sh-Ctrl E1-E0'!A2:H4394",
          "'Table S5e. sh-cFos E1-E0'!A2:H3936",
          "'Table S5f. cFos OE'!A2:H2034"
        ],
        "limit": "Unchanged publisher workbook. Rows, comparison labels and fold-change/probability fields inspected. Literal inf values and Excel #NAME? errors are preserved; neither is silently replaced with zero or discarded to claim complete reproduction. The finite-fold-change subset has 114 shared E1/E4 upregulated test IDs under log2 fold change >1 and reported P<0.05, consistent with the main text but not Figure 6c. This restricted check does not resolve all gene totals, reconstruct missing values or replay RNA-seq."
      }
    },
    {
      "id": "weaver2004",
      "kind": "research-publication",
      "title": "Epigenetic programming by maternal behavior",
      "authors": [
        "Ian C. G. Weaver",
        "Nadia Cervoni",
        "Frances A. Champagne",
        "Ana C. D’Alessio",
        "Shakti Sharma",
        "Jonathan R. Seckl",
        "Sergiy Dymov",
        "Moshe Szyf",
        "Michael J. Meaney"
      ],
      "year": 2004,
      "doi": "10.1038/nn1276",
      "url": "https://www.nature.com/articles/nn1276",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Results: maternal effects on DNA methylation; Figure 1a-c; Methods: Sodium bisulfite mapping",
          "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior",
          "Results: developmental emergence of the maternal effect; Figure 1e",
          "Results: maternal care and chromatin structure; Figure 2; Methods: Chromatin immunoprecipitation assay",
          "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "Results: TSA effects on cytosine methylation; Figure 4; Methods: Sodium bisulfite mapping and Intracerebroventricular infusions",
          "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting",
          "Results: reversal of maternal effect on HPA responses; Figure 5b; Methods: HPA response to restraint stress",
          "Discussion: unresolved causal relationship between DNA methylation, histone acetylation and NGFI-A binding",
          "Publisher correction dated 27 July 2004: figure labels, corticosterone units and bisulfite PCR annealing temperature"
        ],
        "limit": "Experimental Results, Methods, captions and Discussion read in the corrected published PDF at https://pzacad.pitzer.edu/~dmoore/psych155-2019/3_2004_weaver-et-al-w-meane.pdf; the publisher correction was read separately. Figure 2-associated t/P pairs were visually checked in printed p. 850 and remain inconsistent. Figures 2-3 report four animals/group while supplementary fixed-tissue methods specify six; Figure 5a reports five while Western methods specify six. Individual animal measurements, blots and clone sequences have not been independently reanalysed."
      }
    },
    {
      "id": "weaver2004-supplement",
      "kind": "research-publication",
      "title": "Weaver et al. 2004, Supplementary Methods",
      "authors": [
        "Ian C. G. Weaver",
        "Nadia Cervoni",
        "Frances A. Champagne",
        "Ana C. D’Alessio",
        "Shakti Sharma",
        "Jonathan R. Seckl",
        "Sergiy Dymov",
        "Moshe Szyf",
        "Michael J. Meaney"
      ],
      "year": 2004,
      "doi": null,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fnn1276/MediaObjects/41593_2004_BFnn1276_MOESM1_ESM.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Supplementary Methods PDF pp. 1-2: animals and maternal behavior",
          "Supplementary Methods PDF pp. 2-5: developmental cohorts, bisulfite mapping and adoption protocol",
          "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions",
          "Supplementary Methods PDF pp. 9-10: Western blotting and restraint stress"
        ],
        "limit": "All ten pages of methods text read. High:High and Low:Low groups were fostered to other mothers of the same behavioral class; sham return and undisturbed controls belong to earlier studies and were omitted here. General adult testing age (at least 100 days) conflicts with assay sections specifying 90 days. The supplement still states 59.1 degrees C for bisulfite PCR, whereas the corrected main paper and publisher correction specify 56 degrees C. The stated 10-mL micro-syringe for a 2-microliter infusion and other method units require clarification before exact protocol replication."
      }
    },
    {
      "id": "marco2020",
      "kind": "research-publication",
      "title": "Mapping the epigenomic and transcriptomic interplay during memory formation and recall in the hippocampal engram ensemble",
      "authors": [
        "Asaf Marco",
        "Hiruy S. Meharena",
        "Vishnu Dileep",
        "Ravikiran M. Raju",
        "Jose Davila-Velderrain",
        "Amy Letao Zhang",
        "Chinnakkaruppan Adaikkan",
        "Jennie Z. Young",
        "Fan Gao",
        "Manolis Kellis",
        "Li-Huei Tsai"
      ],
      "year": 2020,
      "doi": "10.1038/s41593-020-00717-0",
      "url": "https://compbio.mit.edu/publications/Marco_NatureNeuroscience_20.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Results: temporal and spatial identification; Figure 1a,d-f; Methods: Animals, Behavior and Flow cytometry",
          "Extended Data Figure 1c,e-f: freezing and context comparison; Methods: Behavior",
          "Results: chromatin accessibility; Figure 2a-c; Methods: ATAC-seq and Flow cytometry",
          "Figure 2f: selected enhancer ChIP-qPCR; Methods: ChIP-qPCR",
          "Results and Figure 3: compartment profiles; Methods: Hi-C",
          "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d",
          "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq",
          "Figure 5f: eIF4E shaft and soma puncta; Methods: Quantification of Eif and Gria1 proteins/mRNA",
          "Figure 5g: GRIA1 shaft puncta; Methods: Quantification of Eif and Gria1 proteins/mRNA",
          "Results: transcriptional programs and priming model; Figure 6; Discussion",
          "Published PDF pp. 32-34: selected reporting-summary text on sampling, blinding, animals and flow cytometry"
        ],
        "limit": "Main Results, Discussion and Methods text read from the published author-hosted PDF and PMC author manuscript; Figures 1, 2, 5 and Extended Data 1 visually inspected. Selected other extended-data captions and reporting fields read. Pooled, destructively sampled populations do not track the same cells over time. Figure 1f plots dentate-gyrus cells per slice although its caption refers to hippocampus. Section-level degrees of freedom and unclear freezing sample counts prevent independent animal-level uncertainty estimates. Sequencing, imaging and molecular causal mediation have not been reproduced."
      }
    },
    {
      "id": "marco2020-table8",
      "kind": "research-dataset",
      "title": "Marco et al. 2020, Supplementary Table 8: differential nuclear RNA expression",
      "authors": [
        "Asaf Marco",
        "Hiruy S. Meharena",
        "Vishnu Dileep",
        "Ravikiran M. Raju",
        "Jose Davila-Velderrain",
        "Amy Letao Zhang",
        "Chinnakkaruppan Adaikkan",
        "Jennie Z. Young",
        "Fan Gao",
        "Manolis Kellis",
        "Li-Huei Tsai"
      ],
      "year": 2020,
      "doi": null,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41593-020-00717-0/MediaObjects/41593_2020_717_MOESM9_ESM.xlsx",
      "path": "references/canonical/data/41593_2020_717_MOESM9_ESM.xlsx",
      "sha256": "b89ad90d7baf065d9c19d2dbce8b020ccf6080afc020b3246c75f9195bd7671f",
      "review": {
        "extent": "selected-spreadsheet-cells",
        "locators": [
          "Basal_vs_Early!A1:G93",
          "Early_vs_Late!A1:G975",
          "Late_vs_Reactivated!A1:G517"
        ],
        "limit": "Unchanged publisher workbook. All populated A:G data rows inspected: 88 Basal/Early, 974 Early/Late and 516 Late/Reactivated gene rows. All 88 first-comparison and 516 third-comparison rows have log2FoldChange and stat with opposite signs; their absolute Wald ratios agree within rounding. The 974 middle-comparison rows have consistent signs. The table does not document the apparent contrast reorientation, and the published software omits the RNA contrast/export code. Figure 5a uses absolute log2 fold change >2; the workbook header says Fold>2. Cox7b2 at Late_vs_Reactivated!C167 is -1.996014852, below the plotted magnitude threshold. Excluding that row would leave 515 rows, matching the figure total, but the source is preserved and its full pipeline is not reproduced. No signed gene-specific mechanism or numeric edge weight is inferred."
      }
    },
    {
      "id": "marco2020-software",
      "kind": "research-publication",
      "title": "Marco et al. 2020, Supplementary Software",
      "authors": [
        "Asaf Marco",
        "Hiruy S. Meharena",
        "Vishnu Dileep",
        "Ravikiran M. Raju",
        "Jose Davila-Velderrain",
        "Amy Letao Zhang",
        "Chinnakkaruppan Adaikkan",
        "Jennie Z. Young",
        "Fan Gao",
        "Manolis Kellis",
        "Li-Huei Tsai"
      ],
      "year": 2020,
      "doi": null,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41593-020-00717-0/MediaObjects/41593_2020_717_MOESM15_ESM.docx",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "published-command-snippets",
        "locators": [
          "Supplementary Software: MACS2 and DiffBind commands",
          "Supplementary Software: ChromHMM and HOMER commands"
        ],
        "limit": "All visible command snippets read without execution. The file contains MACS2, DiffBind, ChromHMM and HOMER examples, including 50-kb compartment PCA. It does not provide the nuclear RNA contrast/export script or sample manifest needed to resolve Table 8 direction conventions. Placeholder filenames and omitted inputs prevent a complete executable reproduction."
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
    }
  ],
  "claims": [
    {
      "id": "D-bio-chromatin-assay-boundary",
      "kind": "review-finding",
      "statement": "Distinguish locus bisulfite and histone/factor-associated ChIP, transposase accessibility, population contact profiles, nuclear RNA abundance and protein output. Correlation, broad perturbation, cohort persistence and inherited causal memory are separate claims.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are operational readout boundaries for the reused studies, not a complete molecular theory of chromatin regulation."
      ]
    },
    {
      "id": "M-bio-epigenetic-regulation-source-scope",
      "kind": "method",
      "statement": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests.",
        "Methylation, histone-associated ChIP, factor-associated ChIP, protein immunoreactivity and endocrine responses are different observables. Cross-fostering and broad TSA perturbations do not isolate a unique causal histone/methylation mediator or universal histone code.",
        "Cross-sectional developmental cohorts and adult observations do not establish mitotic or transgenerational chromatin inheritance, continuous persistence in the same cell, lineage stabilization, universal contextual memory or long-range coordinated regulation.",
        "No genome-wide sequence comparison proves absence of all sequence variation. The epigenetic interpretation is bounded by the actual locus assays and environmental/drug contrasts, rather than universal sequence-independent regulation of replication and transcription.",
        "Replication/transcription, protein cooperativity, signalling and hydrogen-bond studies are separate original parent scopes. They are not jointly measured necessary mediators or calibrated contributions to the selected hippocampal outcomes.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-bio-epigenetic-regulation-source-scope",
      "kind": "review-finding",
      "statement": "The reused rat study reports locus-specific methylation/chromatin contrasts and broad TSA-associated molecular responses. These support finite environmentally responsive chromatin observations, while causal mediation, general sequence independence and inherited regulatory memory remain unestablished.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Discussion: unresolved causal relationship between DNA methylation, histone acetylation and NGFI-A binding",
          "role": "limits",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests.",
        "Methylation, histone-associated ChIP, factor-associated ChIP, protein immunoreactivity and endocrine responses are different observables. Cross-fostering and broad TSA perturbations do not isolate a unique causal histone/methylation mediator or universal histone code.",
        "Cross-sectional developmental cohorts and adult observations do not establish mitotic or transgenerational chromatin inheritance, continuous persistence in the same cell, lineage stabilization, universal contextual memory or long-range coordinated regulation.",
        "No genome-wide sequence comparison proves absence of all sequence variation. The epigenetic interpretation is bounded by the actual locus assays and environmental/drug contrasts, rather than universal sequence-independent regulation of replication and transcription.",
        "Replication/transcription, protein cooperativity, signalling and hydrogen-bond studies are separate original parent scopes. They are not jointly measured necessary mediators or calibrated contributions to the selected hippocampal outcomes.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "M-bio-chromatin-packaging-source-scope",
      "kind": "method",
      "statement": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "A 1/4/24-hour comparison across sacrificed cohorts does not demonstrate persistence in the same cell, lifelong memory, inheritance or a universal minimal assembly. RNA abundance is distinct from transcription rate, protein output and behavioral function.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction.",
        "Approximately three-month-old male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background. Training includes a tone paired with footshock in a context; the changed-context comparison alters several environmental cues. It is not a context-only learning protocol or an isolated chromatin intervention.",
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Figure 1f counts are labeled cells per DG slice; the caption refers to hippocampus. Its five versus six mice each contribute six sections, while tests report df=59/57. Extended Data 1e gives n=15 with df=14 without a clear per-group denominator; 1c has n=30 with df=16. Animal-level effects and confidence intervals require source measurements and sample reconciliation.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "eIF4E and GRIA1 puncta measure protein immunoreactivity, not translation rate, receptor current or synaptic efficacy. The Results/caption call the measured shaft dendritic, but Figure 5f labels an axon and Methods describe axon surfaces; exact compartment identity and distance units require clarification. Sections and neurites are nested within mice.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence.",
        "Accessibility and contact-frequency profiles are not direct chromatin-density, unique three-dimensional packing, mechanical force or molecular remodeling trajectories. RNA abundance is not a transcription rate or a direct replication/repair-permissibility measurement.",
        "Separate profiles and populations do not establish that packing causes the expression differences. c-Fos perturbation has multiple possible routes; matching ATAC/RNA effects does not uniquely identify accessibility as their mediator.",
        "Population-level region overlap through sampled windows is not an inherited state, a persistent same-cell trajectory, a universal physical sequence-to-functional-resource transformation or complete spatial control of genomic function.",
        "The original epigenetic, nucleic-acid copying, hydrogen-bond and signal-pathway parents are separate scopes. A named chromatin role does not make them necessary causal ancestors or substitute for a matched packaging intervention.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "su2017",
        "marco2020"
      ]
    },
    {
      "id": "C-bio-chromatin-packaging-source-scope",
      "kind": "review-finding",
      "statement": "The reused mouse studies report accessibility, population contact and RNA-profile differences in their own selected preparations. These supply bounded organization/expression associations and perturbation responses, not a unique physical packing geometry or a demonstrated packaging-to-expression causal mechanism.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "A 1/4/24-hour comparison across sacrificed cohorts does not demonstrate persistence in the same cell, lifelong memory, inheritance or a universal minimal assembly. RNA abundance is distinct from transcription rate, protein output and behavioral function.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction.",
        "Approximately three-month-old male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background. Training includes a tone paired with footshock in a context; the changed-context comparison alters several environmental cues. It is not a context-only learning protocol or an isolated chromatin intervention.",
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Figure 1f counts are labeled cells per DG slice; the caption refers to hippocampus. Its five versus six mice each contribute six sections, while tests report df=59/57. Extended Data 1e gives n=15 with df=14 without a clear per-group denominator; 1c has n=30 with df=16. Animal-level effects and confidence intervals require source measurements and sample reconciliation.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "eIF4E and GRIA1 puncta measure protein immunoreactivity, not translation rate, receptor current or synaptic efficacy. The Results/caption call the measured shaft dendritic, but Figure 5f labels an axon and Methods describe axon surfaces; exact compartment identity and distance units require clarification. Sections and neurites are nested within mice.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence.",
        "Accessibility and contact-frequency profiles are not direct chromatin-density, unique three-dimensional packing, mechanical force or molecular remodeling trajectories. RNA abundance is not a transcription rate or a direct replication/repair-permissibility measurement.",
        "Separate profiles and populations do not establish that packing causes the expression differences. c-Fos perturbation has multiple possible routes; matching ATAC/RNA effects does not uniquely identify accessibility as their mediator.",
        "Population-level region overlap through sampled windows is not an inherited state, a persistent same-cell trajectory, a universal physical sequence-to-functional-resource transformation or complete spatial control of genomic function.",
        "The original epigenetic, nucleic-acid copying, hydrogen-bond and signal-pathway parents are separate scopes. A named chromatin role does not make them necessary causal ancestors or substitute for a matched packaging intervention.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "su2017",
        "marco2020"
      ]
    },
    {
      "id": "D-bio-protein-modification-readout-boundary",
      "kind": "review-finding",
      "statement": "Distinguish post-synthesis substrate conjugate accumulation, an engineered genetic fusion, targeting, initiation and later functional/degradation outcomes. An accumulating ubiquitin-associated band is not an isolated modification rate or a universal reversible protein-control mechanism.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
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
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The selected positive scope is accumulating source-assigned ubiquitinated substrate bands under blocked deubiquitination/degradation. Similar net accumulation in two linker constructs is not an isolated ligation rate, exact attachment-site map or proof of identical chain topology.",
        "The genetically encoded linear Ub4 fusion is not a measured post-translational isopeptide-attachment event. Tagging, initiation and degradation have distinct preparations and readouts; no universal modification-to-function causal effect is isolated.",
        "Phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in this scope. No universal timing after completed synthesis, fast reversibility, combinatorial signalling code or regulated network reprogramming is demonstrated.",
        "The original cooperativity, enzyme-complex and translation parents are not measured formation events or universally necessary prerequisites of this supplied-substrate assay. The separate retinal signalling scope does not provide a matched modification pathway.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ]
    },
    {
      "id": "M-bio-protein-modification-source-scope",
      "kind": "method",
      "statement": "Reuse the original Ubal/methotrexate ubiquitination-control assay separately from degradation and unfolding controls. Retain lysate, net-band accumulation, construct and chain-topology limits.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "method",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
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
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The selected positive scope is accumulating source-assigned ubiquitinated substrate bands under blocked deubiquitination/degradation. Similar net accumulation in two linker constructs is not an isolated ligation rate, exact attachment-site map or proof of identical chain topology.",
        "The genetically encoded linear Ub4 fusion is not a measured post-translational isopeptide-attachment event. Tagging, initiation and degradation have distinct preparations and readouts; no universal modification-to-function causal effect is isolated.",
        "Phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in this scope. No universal timing after completed synthesis, fast reversibility, combinatorial signalling code or regulated network reprogramming is demonstrated.",
        "The original cooperativity, enzyme-complex and translation parents are not measured formation events or universally necessary prerequisites of this supplied-substrate assay. The separate retinal signalling scope does not provide a matched modification pathway.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    },
    {
      "id": "C-bio-protein-modification-source-scope",
      "kind": "review-finding",
      "statement": "The reused lysate control reports ubiquitinated-form accumulation for full and shortened N-end-rule DHFR constructs at similar source rates and extents. This is a finite protein-modification readout; it does not make every modification fast, reversible, site-resolved or sufficient for degradation.",
      "scope": "Only the named existing source preparations and reviewed passages; assays and conditional interpretations retain distinct roles.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "prakash2004-proteasome-initiation",
          "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
          "role": "supports",
          "note": "Exact reuse of the original admitted source and reading boundary. No additional acquisition, expanded reading or independent replication."
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
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The selected positive scope is accumulating source-assigned ubiquitinated substrate bands under blocked deubiquitination/degradation. Similar net accumulation in two linker constructs is not an isolated ligation rate, exact attachment-site map or proof of identical chain topology.",
        "The genetically encoded linear Ub4 fusion is not a measured post-translational isopeptide-attachment event. Tagging, initiation and degradation have distinct preparations and readouts; no universal modification-to-function causal effect is isolated.",
        "Phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in this scope. No universal timing after completed synthesis, fast reversibility, combinatorial signalling code or regulated network reprogramming is demonstrated.",
        "The original cooperativity, enzyme-complex and translation parents are not measured formation events or universally necessary prerequisites of this supplied-substrate assay. The separate retinal signalling scope does not provide a matched modification pathway.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    },
    {
      "id": "C-foster-gr-site16",
      "kind": "review-finding",
      "statement": "After cross-fostering within 12 hours of birth, adult hippocampal bisulfite readouts at the 5-prime NGFI-A-site CpG (site 16) followed foster-mother care class. The comparison supports a postnatal environmental contribution rather than an effect fixed solely by biological-mother class.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 2-5: developmental cohorts, bisulfite mapping and adoption protocol",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-tsa-h3k9-signal",
      "kind": "review-finding",
      "statement": "In adult offspring of low-care mothers, repeated intracerebroventricular TSA increased acetyl-H3K9-associated ChIP signal at the GR exon 1_7 promoter relative to vehicle. The signal is a bulk chromatin assay, not single-cell accessibility or DNA methylation.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-tsa-ngfia-binding",
      "kind": "review-finding",
      "statement": "Repeated TSA increased NGFI-A-associated ChIP signal at the GR exon 1_7 promoter in adult low-care offspring relative to vehicle. This effect does not independently identify which chromatin modification caused the binding change.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-tsa-gr-site16",
      "kind": "review-finding",
      "statement": "TSA reduced the hippocampal bisulfite methylation readout at NGFI-A-site CpG 16 in adult low-care offspring relative to vehicle. The broad drug intervention does not establish locus-specific demethylation as the unique mediator of later outcomes.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: TSA effects on cytosine methylation; Figure 4; Methods: Sodium bisulfite mapping and Intracerebroventricular infusions",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 2-5: developmental cohorts, bisulfite mapping and adoption protocol",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004",
          "locator": "Publisher correction dated 27 July 2004: figure labels, corticosterone units and bisulfite PCR annealing temperature",
          "role": "limits",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-tsa-gr-protein",
      "kind": "review-finding",
      "statement": "TSA increased hippocampal GR protein immunoreactivity normalized to alpha-tubulin in adult low-care offspring relative to vehicle. This is a protein readout, separate from promoter methylation, RNA abundance and the restraint-stress cohort.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 9-10: Western blotting and restraint stress",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-maternal-gr-methylation-association",
      "kind": "review-finding",
      "statement": "Adult high- and low-care offspring differed in bulk hippocampal bisulfite readouts at selected GR promoter CpGs, including NGFI-A-site CpG 16. The unmanipulated group contrast is an association and is distinct from the cross-fostering experiment.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: maternal effects on DNA methylation; Figure 1a-c; Methods: Sodium bisulfite mapping",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 1-2: animals and maternal behavior",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-maternal-gr-chromatin-association",
      "kind": "review-finding",
      "statement": "The publication reports greater acetyl-H3K9- and NGFI-A-associated GR promoter signals in high-care offspring. This observational contrast retains unresolved sample-size and t/P inconsistencies and supplies no independently reproduced effect size or confidence level.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: maternal care and chromatin structure; Figure 2; Methods: Chromatin immunoprecipitation assay",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "weaver2004-supplement",
          "locator": "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions",
          "role": "limits",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "C-ecs-accessibility-rna-association",
      "kind": "review-finding",
      "statement": "Genomic annotations link activity-associated opening preferentially to upregulated genes and closing to downregulated genes. Overlap across bulk assays is an association; it does not demonstrate a unique enhancer-to-transcript causal relation in the same cell.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017",
          "locator": "Results: temporal characteristics of activity-induced neuronal chromatin accessibility changes; Figures 5-6",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017-table5",
          "locator": "'Table S5a. E1-E0'!A2:H5144",
          "role": "limits",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017-table5",
          "locator": "'Table S5b. E4-E0'!A2:H5931",
          "role": "limits",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction."
      ],
      "contextIds": [
        "su2017"
      ]
    },
    {
      "id": "C-cfos-knockdown-accessibility",
      "kind": "review-finding",
      "statement": "AAV c-Fos shRNA attenuated ECS-associated chromatin opening at regions annotated with c-Fos binding sites compared with control shRNA. This supports a contribution to the induction response under this perturbation.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017-supplement",
          "locator": "Supplementary Figure 6: c-Fos expression, AAV constructs and knockdown/overexpression validation",
          "role": "method",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction."
      ],
      "contextIds": [
        "su2017"
      ]
    },
    {
      "id": "C-cfos-knockdown-transcripts",
      "kind": "review-finding",
      "statement": "c-Fos shRNA attenuated induction of RNA for genes associated with the selected activity-responsive regions compared with control shRNA. Parallel accessibility and RNA effects do not uniquely establish that accessibility mediates the RNA response.",
      "scope": "Named rodent preparation, intervention or observation, assay and sampling window; no universal downward-causation rule or biological minimum.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017-table5",
          "locator": "'Table S5d. sh-Ctrl E1-E0'!A2:H4394",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        },
        {
          "sourceId": "su2017-table5",
          "locator": "'Table S5e. sh-cFos E1-E0'!A2:H3936",
          "role": "supports",
          "note": "Only the stated source passage or assay is used; no independent biological reproduction is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction."
      ],
      "contextIds": [
        "su2017"
      ]
    },
    {
      "id": "C-engram-compartment-profile",
      "kind": "review-finding",
      "statement": "Hi-C profiles in Basal, Early and Late populations supported population-level A/B compartment assignments and changes for some genomic segments. These profiles summarize contact frequencies; they do not measure unique spatial coordinates or include a Reactivated whole-genome Hi-C cohort.",
      "scope": "Specified mouse preparation, marker-defined population, assay and sampling interval; no universal biological minimum or proven chromatin-to-memory mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        },
        {
          "sourceId": "marco2020-software",
          "locator": "Supplementary Software: ChromHMM and HOMER commands",
          "role": "method",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence."
      ],
      "contextIds": [
        "marco2020"
      ]
    },
    {
      "id": "C-engram-promoter-contact-profile",
      "kind": "review-finding",
      "statement": "Promoter-capture Hi-C identified population-associated contact sets and stronger reported interaction scores in Reactivated samples. This targeted assay covers selected promoters in four populations; a threshold-defined unique contact is not proof that a physical contact is absent from every other cell.",
      "scope": "Specified mouse preparation, marker-defined population, assay and sampling interval; no universal biological minimum or proven chromatin-to-memory mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence."
      ],
      "contextIds": [
        "marco2020"
      ]
    },
    {
      "id": "C-engram-nuclear-rna-profile",
      "kind": "review-finding",
      "statement": "Pairwise nuclear RNA analysis reported differences among the selected populations, including 88 listed Basal/Early genes. Early transcription was therefore not universally unchanged. Table 8 contains unresolved contrast-direction conventions; no signed gene-specific relation is assigned from those cells.",
      "scope": "Specified mouse preparation, marker-defined population, assay and sampling interval; no universal biological minimum or proven chromatin-to-memory mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        },
        {
          "sourceId": "marco2020-table8",
          "locator": "Basal_vs_Early!A1:G93",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        },
        {
          "sourceId": "marco2020-table8",
          "locator": "Early_vs_Late!A1:G975",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        },
        {
          "sourceId": "marco2020-table8",
          "locator": "Late_vs_Reactivated!A1:G517",
          "role": "supports",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        },
        {
          "sourceId": "marco2020-software",
          "locator": "Supplementary Software: MACS2 and DiffBind commands",
          "role": "limits",
          "note": "Evidence is restricted to this assay and source passage; source inspection is not independent biological reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence."
      ],
      "contextIds": [
        "marco2020"
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
    }
  ],
  "entities": [
    {
      "id": "bio:chromatin-assay-boundary",
      "name": "Chromatin assay and causal interpretation boundary",
      "kind": "definition",
      "description": "Distinguish locus bisulfite and histone/factor-associated ChIP, transposase accessibility, population contact profiles, nuclear RNA abundance and protein output. Correlation, broad perturbation, cohort persistence and inherited causal memory are separate claims.",
      "claimIds": [
        "D-bio-chromatin-assay-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay"
        },
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C"
        }
      ],
      "openObligations": [
        "These are operational readout boundaries for the reused studies, not a complete molecular theory of chromatin regulation."
      ],
      "level": 3
    },
    {
      "id": "bio:epigenetic-regulation-source-scope-context",
      "name": "Scoped chromatin-modification and response evidence context",
      "kind": "context",
      "description": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "claimIds": [
        "M-bio-epigenetic-regulation-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "weaver2004",
          "locator": "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting"
        }
      ],
      "openObligations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests.",
        "Methylation, histone-associated ChIP, factor-associated ChIP, protein immunoreactivity and endocrine responses are different observables. Cross-fostering and broad TSA perturbations do not isolate a unique causal histone/methylation mediator or universal histone code.",
        "Cross-sectional developmental cohorts and adult observations do not establish mitotic or transgenerational chromatin inheritance, continuous persistence in the same cell, lineage stabilization, universal contextual memory or long-range coordinated regulation.",
        "No genome-wide sequence comparison proves absence of all sequence variation. The epigenetic interpretation is bounded by the actual locus assays and environmental/drug contrasts, rather than universal sequence-independent regulation of replication and transcription.",
        "Replication/transcription, protein cooperativity, signalling and hydrogen-bond studies are separate original parent scopes. They are not jointly measured necessary mediators or calibrated contributions to the selected hippocampal outcomes.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:epigenetic-regulation-source-scope",
      "name": "Scoped chromatin-modification and response evidence",
      "kind": "scoped-process",
      "description": "The reused rat study reports locus-specific methylation/chromatin contrasts and broad TSA-associated molecular responses. These support finite environmentally responsive chromatin observations, while causal mediation, general sequence independence and inherited regulatory memory remain unestablished.",
      "claimIds": [
        "C-bio-epigenetic-regulation-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/19"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting"
        },
        {
          "sourceId": "weaver2004",
          "locator": "Discussion: unresolved causal relationship between DNA methylation, histone acetylation and NGFI-A binding"
        }
      ],
      "openObligations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests.",
        "Methylation, histone-associated ChIP, factor-associated ChIP, protein immunoreactivity and endocrine responses are different observables. Cross-fostering and broad TSA perturbations do not isolate a unique causal histone/methylation mediator or universal histone code.",
        "Cross-sectional developmental cohorts and adult observations do not establish mitotic or transgenerational chromatin inheritance, continuous persistence in the same cell, lineage stabilization, universal contextual memory or long-range coordinated regulation.",
        "No genome-wide sequence comparison proves absence of all sequence variation. The epigenetic interpretation is bounded by the actual locus assays and environmental/drug contrasts, rather than universal sequence-independent regulation of replication and transcription.",
        "Replication/transcription, protein cooperativity, signalling and hydrogen-bond studies are separate original parent scopes. They are not jointly measured necessary mediators or calibrated contributions to the selected hippocampal outcomes.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:chromatin-packaging-source-scope-context",
      "name": "Scoped accessibility, contact and expression profiles context",
      "kind": "context",
      "description": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "claimIds": [
        "M-bio-chromatin-packaging-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses"
        },
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq"
        }
      ],
      "openObligations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "A 1/4/24-hour comparison across sacrificed cohorts does not demonstrate persistence in the same cell, lifelong memory, inheritance or a universal minimal assembly. RNA abundance is distinct from transcription rate, protein output and behavioral function.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction.",
        "Approximately three-month-old male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background. Training includes a tone paired with footshock in a context; the changed-context comparison alters several environmental cues. It is not a context-only learning protocol or an isolated chromatin intervention.",
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Figure 1f counts are labeled cells per DG slice; the caption refers to hippocampus. Its five versus six mice each contribute six sections, while tests report df=59/57. Extended Data 1e gives n=15 with df=14 without a clear per-group denominator; 1c has n=30 with df=16. Animal-level effects and confidence intervals require source measurements and sample reconciliation.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "eIF4E and GRIA1 puncta measure protein immunoreactivity, not translation rate, receptor current or synaptic efficacy. The Results/caption call the measured shaft dendritic, but Figure 5f labels an axon and Methods describe axon surfaces; exact compartment identity and distance units require clarification. Sections and neurites are nested within mice.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence.",
        "Accessibility and contact-frequency profiles are not direct chromatin-density, unique three-dimensional packing, mechanical force or molecular remodeling trajectories. RNA abundance is not a transcription rate or a direct replication/repair-permissibility measurement.",
        "Separate profiles and populations do not establish that packing causes the expression differences. c-Fos perturbation has multiple possible routes; matching ATAC/RNA effects does not uniquely identify accessibility as their mediator.",
        "Population-level region overlap through sampled windows is not an inherited state, a persistent same-cell trajectory, a universal physical sequence-to-functional-resource transformation or complete spatial control of genomic function.",
        "The original epigenetic, nucleic-acid copying, hydrogen-bond and signal-pathway parents are separate scopes. A named chromatin role does not make them necessary causal ancestors or substitute for a matched packaging intervention.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:chromatin-packaging-source-scope",
      "name": "Scoped accessibility, contact and expression profiles",
      "kind": "scoped-process",
      "description": "The reused mouse studies report accessibility, population contact and RNA-profile differences in their own selected preparations. These supply bounded organization/expression associations and perturbation responses, not a unique physical packing geometry or a demonstrated packaging-to-expression causal mechanism.",
      "claimIds": [
        "C-bio-chromatin-packaging-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/34"
        },
        {
          "sourceId": "su2017",
          "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses"
        },
        {
          "sourceId": "su2017",
          "locator": "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d"
        },
        {
          "sourceId": "marco2020",
          "locator": "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq"
        }
      ],
      "openObligations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "A 1/4/24-hour comparison across sacrificed cohorts does not demonstrate persistence in the same cell, lifelong memory, inheritance or a universal minimal assembly. RNA abundance is distinct from transcription rate, protein output and behavioral function.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction.",
        "Approximately three-month-old male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background. Training includes a tone paired with footshock in a context; the changed-context comparison alters several environmental cues. It is not a context-only learning protocol or an isolated chromatin intervention.",
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Figure 1f counts are labeled cells per DG slice; the caption refers to hippocampus. Its five versus six mice each contribute six sections, while tests report df=59/57. Extended Data 1e gives n=15 with df=14 without a clear per-group denominator; 1c has n=30 with df=16. Animal-level effects and confidence intervals require source measurements and sample reconciliation.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "eIF4E and GRIA1 puncta measure protein immunoreactivity, not translation rate, receptor current or synaptic efficacy. The Results/caption call the measured shaft dendritic, but Figure 5f labels an axon and Methods describe axon surfaces; exact compartment identity and distance units require clarification. Sections and neurites are nested within mice.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence.",
        "Accessibility and contact-frequency profiles are not direct chromatin-density, unique three-dimensional packing, mechanical force or molecular remodeling trajectories. RNA abundance is not a transcription rate or a direct replication/repair-permissibility measurement.",
        "Separate profiles and populations do not establish that packing causes the expression differences. c-Fos perturbation has multiple possible routes; matching ATAC/RNA effects does not uniquely identify accessibility as their mediator.",
        "Population-level region overlap through sampled windows is not an inherited state, a persistent same-cell trajectory, a universal physical sequence-to-functional-resource transformation or complete spatial control of genomic function.",
        "The original epigenetic, nucleic-acid copying, hydrogen-bond and signal-pathway parents are separate scopes. A named chromatin role does not make them necessary causal ancestors or substitute for a matched packaging intervention.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:protein-modification-readout-boundary",
      "name": "Protein modification and functional readout boundary",
      "kind": "definition",
      "description": "Distinguish post-synthesis substrate conjugate accumulation, an engineered genetic fusion, targeting, initiation and later functional/degradation outcomes. An accumulating ubiquitin-associated band is not an isolated modification rate or a universal reversible protein-control mechanism.",
      "claimIds": [
        "D-bio-protein-modification-readout-boundary"
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
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The selected positive scope is accumulating source-assigned ubiquitinated substrate bands under blocked deubiquitination/degradation. Similar net accumulation in two linker constructs is not an isolated ligation rate, exact attachment-site map or proof of identical chain topology.",
        "The genetically encoded linear Ub4 fusion is not a measured post-translational isopeptide-attachment event. Tagging, initiation and degradation have distinct preparations and readouts; no universal modification-to-function causal effect is isolated.",
        "Phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in this scope. No universal timing after completed synthesis, fast reversibility, combinatorial signalling code or regulated network reprogramming is demonstrated.",
        "The original cooperativity, enzyme-complex and translation parents are not measured formation events or universally necessary prerequisites of this supplied-substrate assay. The separate retinal signalling scope does not provide a matched modification pathway.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
      ],
      "level": 3
    },
    {
      "id": "bio:protein-modification-source-scope",
      "name": "Scoped ubiquitination and protein-modification evidence",
      "kind": "scoped-process",
      "description": "The reused lysate control reports ubiquitinated-form accumulation for full and shortened N-end-rule DHFR constructs at similar source rates and extents. This is a finite protein-modification readout; it does not make every modification fast, reversible, site-resolved or sufficient for degradation.",
      "claimIds": [
        "C-bio-protein-modification-source-scope",
        "M-bio-protein-modification-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/26"
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
        "The ubiquitination control adds2 micromolar Ubal to inhibit deubiquitination and 320 micromolar methotrexate to inhibit degradation. Its accumulating ubiquitin-band signal is a net assay readout under those conditions, not direct matched receptor occupancy or one isolated E1/E2/E3 rate.",
        "Similar source ubiquitination kinetics for full versus shortened N-end-rule tags constrain reduced tagging as the explanation for the deletion effect. They do not prove equal proteasome-binding occupancy or exact chain topology.",
        "The selected positive scope is accumulating source-assigned ubiquitinated substrate bands under blocked deubiquitination/degradation. Similar net accumulation in two linker constructs is not an isolated ligation rate, exact attachment-site map or proof of identical chain topology.",
        "The genetically encoded linear Ub4 fusion is not a measured post-translational isopeptide-attachment event. Tagging, initiation and degradation have distinct preparations and readouts; no universal modification-to-function causal effect is isolated.",
        "Phosphorylation, acetylation, methylation and glycosylation are not additional reviewed experiments in this scope. No universal timing after completed synthesis, fast reversibility, combinatorial signalling code or regulated network reprogramming is demonstrated.",
        "The original cooperativity, enzyme-complex and translation parents are not measured formation events or universally necessary prerequisites of this supplied-substrate assay. The separate retinal signalling scope does not provide a matched modification pathway.",
        "Source catalogue level, phase, role, science/status and requirement labels are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, physical thresholds or a universal construction sequence. Generic evidence placeholders add no unidentified study or independent replication."
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
    }
  ],
  "relations": [
    {
      "id": "biochemistry:epigenetic-regulation-source-scope-context-scope",
      "source": "bio:epigenetic-regulation-source-scope-context",
      "target": "bio:epigenetic-regulation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing preparation-specific assays bound this chromatin interpretation without a new independent acquisition.",
      "claimIds": [
        "D-bio-chromatin-assay-boundary",
        "M-bio-epigenetic-regulation-source-scope",
        "C-bio-epigenetic-regulation-source-scope"
      ],
      "contextIds": [
        "weaver2004"
      ]
    },
    {
      "id": "biochemistry:chromatin-packaging-source-scope-context-scope",
      "source": "bio:chromatin-packaging-source-scope-context",
      "target": "bio:chromatin-packaging-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing preparation-specific assays bound this chromatin interpretation without a new independent acquisition.",
      "claimIds": [
        "D-bio-chromatin-assay-boundary",
        "M-bio-chromatin-packaging-source-scope",
        "C-bio-chromatin-packaging-source-scope"
      ],
      "contextIds": [
        "su2017",
        "marco2020"
      ]
    },
    {
      "id": "biochemistry:ubiquitination-control-modification-scope",
      "source": "bio:prakash2004-substrate-ubiquitination-context",
      "target": "bio:protein-modification-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing net-ubiquitination control bounds the finite modification interpretation, distinct from genetic tagging and later proteolysis.",
      "claimIds": [
        "D-bio-protein-modification-readout-boundary",
        "M-bio-protein-modification-source-scope",
        "C-bio-protein-modification-source-scope"
      ],
      "contextIds": [
        "prakash2004-substrate-ubiquitination"
      ]
    }
  ],
  "studies": [
    {
      "id": "weaver2004",
      "sourceId": "weaver2004",
      "studyType": "primary-experiment",
      "doi": "10.1038/nn1276",
      "pmid": "15220929",
      "journal": "Nature Neuroscience",
      "volume": "7",
      "issue": "8",
      "pages": "847-854",
      "organism": "Long-Evans hooded rats; developmental cohorts and adult offspring; adult infusion, protein and restraint assays specify males",
      "preparation": "Maternal-behavior grouping and cross-fostering, with separate adult TSA/vehicle assays of bulk hippocampus and restraint-associated plasma corticosterone.",
      "observable": "CpG bisulfite readouts, H3K9-acetylation-associated ChIP, NGFI-A ChIP, GR protein and corticosterone response",
      "finding": "Adult CpG site-16 patterns followed foster-care class. TSA altered several molecular readouts and the low-care group stress response, with site-specific and group-specific differences.",
      "limitations": [
        "Long-Evans rat hippocampus is bulk tissue containing neurons and glia. High/low licking-grooming and arched-back nursing groups are selected extremes of continuous maternal behavior, not universal biological classes.",
        "Cross-fostering changes a postnatal care environment. It does not isolate licking from nursing, nutrition or other maternal effects, directly manipulate an abstract neural state, or establish germline inheritance. Same-class foster controls are other mothers, not untouched biological-mother controls.",
        "General adult-age statements conflict with assay-specific 90-day descriptions. ChIP figures report four animals/group but supplementary fixed-tissue methods specify six. GR protein Figure 5a reports five but Western methods specify six. Clones and technical blot replicates are not independent animals; litter dependence remains relevant.",
        "Exon 1_7 is an alternative first exon of the rat glucocorticoid receptor gene. CpG site 16 at the 5-prime end of the NGFI-A binding region and site 17 at its 3-prime end have different outcomes. Bisulfite cytosine readouts, acetyl-H3K9-associated ChIP, NGFI-A ChIP, GR protein and plasma corticosterone are separate observables.",
        "TSA infusion is a broad pharmacological intervention, not a locus-specific methylation edit or cell-specific neural manipulation. The restraint-stress cohort is separate from the GR-protein cohort. Parallel effects do not identify their causal mediation order.",
        "The published Figure 2-associated t/P pairs (2.1/P<0.001 and 3.1/P<0.0001) are inconsistent with ordinary t tests; exact uncertainty is not reproduced. The 27 July 2004 publisher correction fixes labels, corticosterone units to micrograms/dL and bisulfite PCR annealing to 56 degrees C; the supplement retains conflicting text.",
        "Individual animal source values and clone sequences are unavailable in the reviewed materials. Published findings are not an independent reproduction, and nonsignificant contrasts are not equivalence tests."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Results: maternal effects on DNA methylation; Figure 1a-c; Methods: Sodium bisulfite mapping",
        "Results: cross-fostering; Figure 1d; Methods: Animals and maternal behavior",
        "Results: developmental emergence of the maternal effect; Figure 1e",
        "Results: maternal care and chromatin structure; Figure 2; Methods: Chromatin immunoprecipitation assay",
        "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
        "Results: TSA effects on cytosine methylation; Figure 4; Methods: Sodium bisulfite mapping and Intracerebroventricular infusions",
        "Results: reversal of maternal effect on GR expression; Figure 5a; Methods: Western blotting",
        "Results: reversal of maternal effect on HPA responses; Figure 5b; Methods: HPA response to restraint stress",
        "Discussion: unresolved causal relationship between DNA methylation, histone acetylation and NGFI-A binding",
        "Publisher correction dated 27 July 2004: figure labels, corticosterone units and bisulfite PCR annealing temperature"
      ],
      "metadataCheckedAt": "2026-09-13",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/15220929/",
      "correctionCheck": "The publisher correction dated 27 July 2004 was read and the corrected main PDF inspected. It does not resolve the stated sample-size, age and t/P conflicts and is not a retraction notice."
    },
    {
      "id": "su2017",
      "sourceId": "su2017",
      "studyType": "primary-experiment",
      "doi": "10.1038/nn.4494",
      "pmid": "28166220",
      "journal": "Nature Neuroscience",
      "volume": "20",
      "issue": "3",
      "pages": "476-483",
      "organism": "Adult male C57BL/6-background mice, 8-10 weeks",
      "preparation": "Bulk dentate-gyrus ATAC-seq and independent RNA-seq after ECS or sham, with separate AAV c-Fos knockdown and overexpression comparisons.",
      "observable": "Chromatin accessibility, RNA abundance and selected c-Fos protein/ChIP readouts",
      "finding": "ECS altered accessibility and RNA abundance; c-Fos perturbations changed selected responses. Some region-list overlaps persisted through the sampled 24-hour window.",
      "limitations": [
        "Adult male 8-10-week C57BL/6-background mice; rapidly dissected bulk dentate gyri enriched in neurons, not purified neurons or single-cell measurements. ECS is induced synchronous activation, not an explicit learning task or a measured sustained cognitive state.",
        "ATAC-seq and RNA-seq use independent samples. GEO GSE82015 lists four wild-type ATAC replicates at E0/E1/E4 and two sh-cFos E1 ATAC replicates; other AAV ATAC groups and RNA groups have three. GSE86367 lists three E24 ATAC and three RNA samples. Replicate labels do not independently verify animal identity or sample independence.",
        "c-Fos knockdown uses one shRNA and overexpression uses AAV2/9 one week before assay. No reviewed rescue with a second sequence excludes all off-target effects. External KCl-neuron ChIP-seq annotations are not matched in vivo c-Fos occupancy measurements.",
        "A 1/4/24-hour comparison across sacrificed cohorts does not demonstrate persistence in the same cell, lifelong memory, inheritance or a universal minimal assembly. RNA abundance is distinct from transcription rate, protein output and behavioral function.",
        "Figure 6c has a 144/114 gene-count conflict. Figure 7c caption says E0/E4/E24, while plot and experimental text specify E0/E1/E4. Supplementary Tables 4-5 contain conflicting headers, nonfinite values or spreadsheet errors. No global quantitative model is calibrated from these data.",
        "The main Methods report no sample-size predetermination, randomization or blinding. Some qPCR primer labels/sequences conflict. Published findings, metadata inspection and source-cell counts are not independent biological replication or sequencing-pipeline reproduction."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Results: neuronal activity-induced changes in chromatin accessibility; Figure 1; Online Methods: Animals and ATAC-seq",
        "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
        "Results: role of c-Fos in activity-induced chromatin opening; Figure 4a-d; Online Methods: Animals and DNA constructs",
        "Results: role of c-Fos in activity-induced chromatin opening; Figure 4e-g; Online Methods: Animals and DNA constructs",
        "Results: temporal characteristics of activity-induced neuronal chromatin accessibility changes; Figures 5-6",
        "Results and Figure 7c-d; Discussion; Online Methods: ChIP followed by qPCR analysis and Statistical analysis"
      ],
      "metadataCheckedAt": "2026-09-13",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/28166220/",
      "correctionCheck": "Publisher/PubMed information and available source text checked. No resolving notice was identified for the specified label, timepoint and count conflicts; this is not exhaustive correction or replication surveillance."
    },
    {
      "id": "marco2020",
      "sourceId": "marco2020",
      "studyType": "primary-experiment",
      "doi": "10.1038/s41593-020-00717-0",
      "pmid": "33020654",
      "journal": "Nature Neuroscience",
      "volume": "23",
      "issue": "12",
      "pages": "1606-1617",
      "organism": "Adult male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background",
      "preparation": "Fear conditioning and five-day context re-exposure, with separate activity-tagged hippocampal populations for molecular assays and imaging.",
      "observable": "Freezing and Arc/eYFP co-labels; accessibility, histone ChIP, contact profiles, nuclear RNA and protein puncta",
      "finding": "Context re-exposure affected freezing and co-label counts. Molecular profiles differed among selected populations, with some accessibility shared through five days; the proposed priming mechanism remains untested by selective perturbation.",
      "limitations": [
        "Approximately three-month-old male Arc-CreERT2/R26R-eYFP mice on a C57BL/6J background. Training includes a tone paired with footshock in a context; the changed-context comparison alters several environmental cues. It is not a context-only learning protocol or an isolated chromatin intervention.",
        "Basal denotes NeuN+/eYFP- nuclei collected after training, not naive home-cage animals. Early denotes NeuN+/eYFP+ at 1.5-2 hours, Late the tagged population at five days without recall, and Reactivated NeuN+/eYFP+/Arc+ after re-exposure in a different cohort. Marker selection, reporter maturation and a roughly 12-hour labeling window limit cell identity and temporal specificity.",
        "Whole-hippocampus molecular samples pool nuclei across animals and neuronal subtypes. ATAC Methods specify 10,000 nuclei from 8-10 mice per replicate. Table 13 lists three Basal and four Late libraries, while the reporting summary excludes one Basal from 13 and Figure 2a states n=3 per group. The included-library mapping remains unresolved. A library, genomic locus, slice or punctum is not an independent animal. Destructive cohorts are not single-cell longitudinal measurements.",
        "Figure 1f counts are labeled cells per DG slice; the caption refers to hippocampus. Its five versus six mice each contribute six sections, while tests report df=59/57. Extended Data 1e gives n=15 with df=14 without a clear per-group denominator; 1c has n=30 with df=16. Animal-level effects and confidence intervals require source measurements and sample reconciliation.",
        "Hi-C Methods describe two libraries per Basal, Early and Late population, but the reporting summary excludes one Early library. Methods say two animals per sample, whereas reporting specifies four to five. Promoter-capture Hi-C covers four populations and selected promoters. Contact frequencies and inferred A/B compartments are not unique three-dimensional coordinates. Figure 3 specifies a 500-kb Juicer representation, while Methods and software use 50-kb HOMER compartment PCA; their mapping needs explicit reconstruction.",
        "ATAC Figure 2a labels log2 fold-change thresholds, while its caption, Methods and software say fold changes >1.5. RNA Table 8 has undocumented sign reorientation and a near-threshold extra row. The RNA Methods cite an edgeR reference for DESeq2 and the software omits the RNA export code. No sequence analysis, signed gene-specific pathway or edge weight is calibrated.",
        "eIF4E and GRIA1 puncta measure protein immunoreactivity, not translation rate, receptor current or synaptic efficacy. The Results/caption call the measured shaft dendritic, but Figure 5f labels an axon and Methods describe axon surfaces; exact compartment identity and distance units require clarification. Sections and neurites are nested within mice.",
        "Reported group randomization and selected blinded quantification do not resolve all sampling issues. Sequencing sample sizes used observed variability and group differences; ATAC/Hi-C quality exclusions and a plotted ATAC outlier exclusion were not pre-established. Normality was assumed without formal testing. Null tests are not equivalence tests. Separate molecular profiles and behavioral outcomes do not establish a chromatin-to-memory mediation chain or lifelong persistence."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Results: temporal and spatial identification; Figure 1a,d-f; Methods: Animals, Behavior and Flow cytometry",
        "Extended Data Figure 1c,e-f: freezing and context comparison; Methods: Behavior",
        "Results: chromatin accessibility; Figure 2a-c; Methods: ATAC-seq and Flow cytometry",
        "Figure 2f: selected enhancer ChIP-qPCR; Methods: ChIP-qPCR",
        "Results and Figure 3: compartment profiles; Methods: Hi-C",
        "Results and Figure 4a-b,d: promoter-capture contacts; Methods: pc-HiC; Extended Data Figure 3d",
        "Results and Figure 5a: pairwise nuclear RNA comparisons; Methods: RNA-seq",
        "Figure 5f: eIF4E shaft and soma puncta; Methods: Quantification of Eif and Gria1 proteins/mRNA",
        "Figure 5g: GRIA1 shaft puncta; Methods: Quantification of Eif and Gria1 proteins/mRNA",
        "Results: transcriptional programs and priming model; Figure 6; Discussion",
        "Published PDF pp. 32-34: selected reporting-summary text on sampling, blinding, animals and flow cytometry"
      ],
      "metadataCheckedAt": "2026-09-13",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/33020654/",
      "correctionCheck": "Publisher and PubMed records and available article text checked; no notice resolving the specified sample, threshold or contrast-direction issues was identified. This is not exhaustive correction or replication surveillance."
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
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:chromatin-assay-boundary",
      "role": "definition",
      "denotes": "Distinguish locus bisulfite and histone/factor-associated ChIP, transposase accessibility, population contact profiles, nuclear RNA abundance and protein output. Correlation, broad perturbation, cohort persistence and inherited causal memory are separate claims.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-chromatin-assay-boundary"
      ]
    },
    {
      "nodeId": "bio:epigenetic-regulation-source-scope-context",
      "role": "experimental-context",
      "denotes": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-epigenetic-regulation-source-scope"
      ]
    },
    {
      "nodeId": "bio:epigenetic-regulation-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The reused rat study reports locus-specific methylation/chromatin contrasts and broad TSA-associated molecular responses. These support finite environmentally responsive chromatin observations, while causal mediation, general sequence independence and inherited regulatory memory remain unestablished.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-epigenetic-regulation-source-scope"
      ]
    },
    {
      "nodeId": "bio:chromatin-packaging-source-scope-context",
      "role": "experimental-context",
      "denotes": "Reuse only the named original assay contexts and complete source limits. Keep bulk/cohort sampling, drug/genetic perturbations, separate molecular profiles and unresolved source discrepancies explicit.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-chromatin-packaging-source-scope"
      ]
    },
    {
      "nodeId": "bio:chromatin-packaging-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The reused mouse studies report accessibility, population contact and RNA-profile differences in their own selected preparations. These supply bounded organization/expression associations and perturbation responses, not a unique physical packing geometry or a demonstrated packaging-to-expression causal mechanism.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-chromatin-packaging-source-scope"
      ]
    },
    {
      "nodeId": "bio:protein-modification-readout-boundary",
      "role": "definition",
      "denotes": "Distinguish post-synthesis substrate conjugate accumulation, an engineered genetic fusion, targeting, initiation and later functional/degradation outcomes. An accumulating ubiquitin-associated band is not an isolated modification rate or a universal reversible protein-control mechanism.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-protein-modification-readout-boundary"
      ]
    },
    {
      "nodeId": "bio:protein-modification-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The reused lysate control reports ubiquitinated-form accumulation for full and shortened N-end-rule DHFR constructs at similar source rates and extents. This is a finite protein-modification readout; it does not make every modification fast, reversible, site-resolved or sufficient for degradation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-protein-modification-source-scope",
        "M-bio-protein-modification-source-scope"
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
    }
  ]
};
