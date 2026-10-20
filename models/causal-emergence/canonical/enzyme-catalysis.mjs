// Exact reviewed scientific records; source admission does not reproduce the experiments.
export const ENZYME_CATALYSIS_RECORDS = {
  "sources": [
    {
      "id": "kraut2010-ksi-oxyanion-mutations",
      "kind": "research-publication",
      "title": "Dissecting the paradoxical effects of hydrogen bond mutations in the ketosteroid isomerase oxyanion hole",
      "authors": [
        "Daniel A. Kraut",
        "Paul A. Sigala",
        "Timothy D. Fenn",
        "Daniel Herschlag"
      ],
      "year": 2010,
      "doi": "10.1073/pnas.0911168107",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2836627/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-main-text-and-five-page-experimental-supplement",
        "locators": [
          "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls"
        ],
        "limit": "Complete original main scientific text and five-page author-hosted published Supporting Information were read. Table S2 and S3 were visually checked in rendered page 5. The supplement was acquired from the author-lab mirror https://static1.squarespace.com/static/5646260ce4b08fda5b792c61/t/56bbb55b27d4bd23c4d9e1a0/1455142236264/%23176SuppMat.pdf, whose internal DOI is the same. Main article online 11 January 2010; issue date 2 February 2010. Figure 2 and Table S2 are one acquisition lineage, not separate reproductions. Underlying raw time courses, fitted covariance, original diffraction frames, and prior literature cited by the paper were not independently reanalysed. Table S1 is a literature compilation and is not admitted as a set of newly reviewed primary experiments. The separate 2011 KSI paper was downloaded during discovery but is not an admitted source. Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
      }
    },
    {
      "id": "kuroki1999-t4-active-site",
      "kind": "research-publication",
      "title": "Structural basis of the conversion of T4 lysozyme into a transglycosidase by reengineering the active site",
      "authors": [
        "Ryota Kuroki",
        "Larry H. Weaver",
        "Brian W. Matthews"
      ],
      "year": 1999,
      "doi": "10.1073/pnas.96.16.8949",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC17713/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-main-text-tables-and-figure-captions",
        "locators": [
          "PNAS 96(16),8949-8954, Materials and Methods: Materials, Analysis of Enzymatic Products, Enzymatic Activity, X-Ray Crystallography",
          "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4"
        ],
        "limit": "Complete main scientific text, Figures 1-4 captions and Tables 1-4/footnotes were read from original PMC HTML. No original chromatogram integration, MS calibration or crystallographic refinement was replayed. Figure 2b,c and the earlier T26H anomer/structure result are explicitly reused by the source from its cited 1995 paper; that upstream paper was not separately read and is not counted as an independent current study. The 60-min higher-concentration T26H run is distinct from those 5-min lower-concentration comparisons. Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
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
      "id": "D-bio-ksi-initial-rate-parameters",
      "kind": "review-finding",
      "statement": "For the selected initial-rate fit, v0/[E] = kcat*[S]/(KM+[S]) defines the source Michaelis-Menten parameters. kcat has units s^-1 and KM concentration units; kcat/KM has units M^-1 s^-1. The fit is a response model for this preparation and does not by itself identify microscopic steps or make KM an equilibrium binding constant.",
      "scope": "Declared source initial-rate response convention; no universal mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Rate parameters require the declared active-enzyme concentration, substrate, solvent, pH, temperature and fitted initial-rate regime. The reviewed source does not provide all raw curves or covariance."
      ]
    },
    {
      "id": "M-bio-ksi-kinetic-preparation",
      "kind": "method",
      "statement": "Compare purified Pseudomonas putida KSI wild type and Y16A, Y16G, Y16S, Y16T and Y16F variants using 5(10)-estrene-3,17-dione at 25 C in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 2% DMSO. Monitor 248 nm absorbance and fit initial velocity over substrate 2-384 micromolar. The SI reports at least three assays with enzyme concentration varied over at least fourfold; purification/refolding alternatives gave activities agreeing within error.",
      "scope": "Variant-specific preparation and optical initial-rate method.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "method",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The observable is the 248 nm time-dependent absorbance converted using product molar absorptivity 14,800 M^-1 cm^-1. kcat and KM are fitted initial-rate parameters; KM is not automatically a substrate equilibrium dissociation constant and kcat/KM is not kcat.",
        "The SI specifies enzyme concentration varied over at least a fourfold range and at least three assays, but does not print absolute kinetic enzyme concentrations. Do not import the millimolar NMR concentrations or 30 mg/ml crystallization stock as kinetic concentrations.",
        "The reported errors are standard deviations across at least three assays, not full parameter covariance, a confidence interval or proof of independent laboratory reproduction. Values are reported as printed; neither fitted time courses nor uncertainty propagation were replayed.",
        "For 5(10)-EST, the source invokes chemistry-limited turnover based on previous studies; that kinetic assignment was not independently tested here. Earlier 5-AND results have a different rate-limiting-step boundary and cannot be substituted as the same effect size.",
        "The Y16F Table S2 row prints kcat=5.4x10^-4 s^-1, KM=41 micromolar, kcat/KM=8(1) M^-1 s^-1 and ratio 70,000. The central kcat and KM give about 13.2 M^-1 s^-1 rather than 8. Preserve this unresolved printed-table conflict; do not silently repair a cell, recalculate a new fit or claim internal exact agreement.",
        "The experiment compares declared protein variants. No enzyme-free aqueous reaction rate, universal enzyme-versus-water acceleration, in-vivo metabolic flux, allosteric regulation or all-enzyme rate law is measured."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context"
      ]
    },
    {
      "id": "C-bio-ksi-variant-turnover",
      "kind": "review-finding",
      "statement": "For 5(10)-EST under the declared assay, Table S2 reports wild-type kcat=9.9(0.9) s^-1 and KM=19(4) micromolar. Mutant kcat central values are Y16A 4.8x10^-2, Y16G 4.0x10^-2, Y16S 3.8x10^-2, Y16T 5.2x10^-2 and Y16F 5.4x10^-4 s^-1. Printed WT/mutant turnover ratios are 200,250,260,190 and 19,000 respectively. These variant effects concern fitted turnover under one substrate/condition set.",
      "scope": "Source-fitted parameters, with printed rounding and source table conflict retained.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The observable is the 248 nm time-dependent absorbance converted using product molar absorptivity 14,800 M^-1 cm^-1. kcat and KM are fitted initial-rate parameters; KM is not automatically a substrate equilibrium dissociation constant and kcat/KM is not kcat.",
        "The SI specifies enzyme concentration varied over at least a fourfold range and at least three assays, but does not print absolute kinetic enzyme concentrations. Do not import the millimolar NMR concentrations or 30 mg/ml crystallization stock as kinetic concentrations.",
        "The reported errors are standard deviations across at least three assays, not full parameter covariance, a confidence interval or proof of independent laboratory reproduction. Values are reported as printed; neither fitted time courses nor uncertainty propagation were replayed.",
        "For 5(10)-EST, the source invokes chemistry-limited turnover based on previous studies; that kinetic assignment was not independently tested here. Earlier 5-AND results have a different rate-limiting-step boundary and cannot be substituted as the same effect size.",
        "The Y16F Table S2 row prints kcat=5.4x10^-4 s^-1, KM=41 micromolar, kcat/KM=8(1) M^-1 s^-1 and ratio 70,000. The central kcat and KM give about 13.2 M^-1 s^-1 rather than 8. Preserve this unresolved printed-table conflict; do not silently repair a cell, recalculate a new fit or claim internal exact agreement.",
        "The experiment compares declared protein variants. No enzyme-free aqueous reaction rate, universal enzyme-versus-water acceleration, in-vivo metabolic flux, allosteric regulation or all-enzyme rate law is measured."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context"
      ]
    },
    {
      "id": "M-bio-ksi-analogue-crystal-preparation",
      "kind": "method",
      "statement": "Crystallize pKSI Y16S/D40N with one equivalent equilenin by hanging-drop mixing of 2 microlitres 30 mg/ml protein stock and 2 microlitres reservoir containing 0.9 M ammonium sulfate and 40 mM potassium phosphate pH 7.2. Grow at 20 C, cryoprotect using sodium malonate and collect 100 K diffraction. Molecular replacement, refinement and a held-out 5% diffraction subset yield deposited model 3IPT.",
      "scope": "Ligand-analogue crystallographic preparation distinct from kinetic single mutants.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "method",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "Table S3 gives 1.63 angstrom limiting resolution, 82.3% completeness, Rwork 20.7% and Rfree 24.5%. Four monomers in one asymmetric unit and their approximately 0.1 angstrom distance spread are not four independent crystals or a universal coordinate error.",
        "Diffuse triangular density near the ligand is consistent with partially disordered water. SI says two-water split-occupancy modeling was imperfect and the cavity density was left empty in the final model. Do not turn proposed two-to-three waters into resolved occupied water coordinates or an exact molecule count.",
        "The WT equilenin comparison and Y16F apo structures are inherited published coordinates. They are not new WT/Y16F crystal acquisitions or independent repetitions of the current mutation experiment."
      ],
      "contextIds": [
        "kraut2010-ksi-structure-context"
      ]
    },
    {
      "id": "C-bio-ksi-local-analogue-geometry",
      "kind": "review-finding",
      "statement": "The source-refined 1.63 angstrom pKSI Y16S/D40N-equilenin structure places Ser16 hydroxyl and equilenin oxygen 6.4 angstrom apart, with Ser16 directed toward Met13 backbone carbonyl. Asp103 remains close to the ligand oxygen. The overall backbone differs by about 0.4 angstrom RMSD from the inherited WT-analogue structure. Local diffuse density is compatible with cavity water, while a direct Ser16-to-ligand hydrogen bond is absent in this refined structure.",
      "scope": "Finite ligand-analogue geometry, with cryogenic and double-mutant boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "Table S3 gives 1.63 angstrom limiting resolution, 82.3% completeness, Rwork 20.7% and Rfree 24.5%. Four monomers in one asymmetric unit and their approximately 0.1 angstrom distance spread are not four independent crystals or a universal coordinate error.",
        "Diffuse triangular density near the ligand is consistent with partially disordered water. SI says two-water split-occupancy modeling was imperfect and the cavity density was left empty in the final model. Do not turn proposed two-to-three waters into resolved occupied water coordinates or an exact molecule count.",
        "The WT equilenin comparison and Y16F apo structures are inherited published coordinates. They are not new WT/Y16F crystal acquisitions or independent repetitions of the current mutation experiment."
      ],
      "contextIds": [
        "kraut2010-ksi-structure-context"
      ]
    },
    {
      "id": "M-bio-ksi-phenolate-probe-context",
      "kind": "method",
      "statement": "Acquire 19F spectra at 20 C for1 mM 2-fluoro-4-nitrophenolate bound to 2 mM pKSI Y16S/D40N or Y16F/D40N in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 10% D2O, referenced to external trifluoroacetic acid. Compare free probe in water and THF with base. UV-vis confirms bound ligand ionization; labelled-urea refolding/HSQC controls test whether diffuse crystal density is retained urea.",
      "scope": "Probe and solvent/control method separate from turnover and diffraction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "method",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Probe spectra use Y16S/D40N or Y16F/D40N with a fluorinated phenolate analogue, not the kinetic single-mutant/substrate preparation; probe positioning near residue 16 is supported by structural superposition, not directly redetermined for each complex.",
        "A 19F chemical shift is an environment-sensitive spectroscopic observable, not a measured local dielectric constant, dipole moment, electric field or transition-state energy.",
        "The source solvent comparison supports an aqueous-like versus hydrophobic local-environment interpretation; ring-current and ligand-orientation explanations are assessed by inherited calculations/structural models, not exhaustively ruled out by a single spectrum.",
        "UV-vis control spectra support the ligand ionization assignment. A negative 15N-urea HSQC control under the stated sensitivity supports exclusion of bound refolding urea, without proving an exact water population or all possible solute absence."
      ],
      "contextIds": [
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "C-bio-ksi-local-probe-response",
      "kind": "review-finding",
      "statement": "The source reports 19F peaks at -134.7 ppm for phenolate bound to pKSI Y16F/D40N and -136.4 ppm for Y16S/D40N. The water-to-THF probe comparison shifts by 2.2 ppm. These finite spectra support differing local probe environments and enter the water-filled-cavity interpretation together with diffraction and mutation kinetics.",
      "scope": "Measured spectral positions plus conditional local-environment assignment.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Probe spectra use Y16S/D40N or Y16F/D40N with a fluorinated phenolate analogue, not the kinetic single-mutant/substrate preparation; probe positioning near residue 16 is supported by structural superposition, not directly redetermined for each complex.",
        "A 19F chemical shift is an environment-sensitive spectroscopic observable, not a measured local dielectric constant, dipole moment, electric field or transition-state energy.",
        "The source solvent comparison supports an aqueous-like versus hydrophobic local-environment interpretation; ring-current and ligand-orientation explanations are assessed by inherited calculations/structural models, not exhaustively ruled out by a single spectrum.",
        "UV-vis control spectra support the ligand ionization assignment. A negative 15N-urea HSQC control under the stated sensitivity supports exclusion of bound refolding urea, without proving an exact water population or all possible solute absence."
      ],
      "contextIds": [
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "C-bio-ksi-solvation-interpretation",
      "kind": "review-finding",
      "statement": "Combining the variant turnover losses, Y16S/D40N analogue geometry and fluorophenolate solvent comparisons, Kraut and colleagues propose that smaller residue 16 substitutions allow cavity water to mitigate loss of the Tyr donor, whereas Phe16 adds unfavorable desolvation beyond removing the Tyr hydrogen bond. The measured mutation effects therefore do not directly equal the energetic contribution of one hydrogen bond to catalysis.",
      "scope": "Published mechanistic interpretation conditional on analogue, structural and solvation-reference assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "supports",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "supports",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "The smaller 190-260-fold losses of Y16A/G/S/T versus the 19,000-fold Y16F loss do not isolate a single hydrogen bond. Mutations alter solvation, packing and potentially other energetic contributions; the source emphasizes that comparisons must specify the water-solvated reference reaction.",
        "A water-filled cavity and a more desolvating Phe surface are source-supported mechanistic interpretations, not direct observations of the transient reacting dienolate or an experimental decomposition of transition-state stabilization.",
        "The proposed approximately 200-fold Tyr16 contribution relative to aqueous hydrogen bonding is explicitly crude and assumes cavity-water energetics resemble the solution reference and no propagating structural effects. It is not an admitted exact universal catalytic energy.",
        "No new constant electric field, universal active-site mechanism, cofactor requirement, global conformational coupling, regulatory pathway or proto-life function follows."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "M-bio-t4-product-preparation",
      "kind": "method",
      "statement": "Incubate cysteine-free pseudo-WT-derived T26H T4 lysozyme with an E.coli cell-wall-derived peptide tetrasaccharide containing one reduced terminal NAM unit. For the higher-substrate experiment use80 micromolar substrate,0.5 micromolar enzyme,20 mM sodium acetate pH 5.0,0 C and 60 min. Resolve products by reversed-phase HPLC and assign masses by electrospray MS; maintain the source distinct lower-substrate5-min comparisons and qualitative halo assay as separate observations.",
      "scope": "Finite prepared substrate/variant product assay; no single common rate comparison across runs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Materials and Methods: Materials, Analysis of Enzymatic Products, Enzymatic Activity, X-Ray Crystallography",
          "role": "method",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "method",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "T4 WT* denotes the cysteine-free pseudo-wild-type scaffold; the compared proteins are prepared mutants, not all natural lysozymes. Activity in the halo assay is qualitative (+++,++, + or -), not a measured kcat or numerical fractional activity.",
        "The 60-min T26H run uses 80 micromolar substrate and 0.5 micromolar enzyme at 0 C. Figure 2b,c use 2 micromolar substrate,5 min 25 C and different WT*/T26H enzyme concentrations (0.08 versus 0.5 micromolar), and are inherited from1995. No matched rate ratio is inferred across these runs.",
        "The source estimated about 10:1 transglycosylation-to-hydrolysis products after60 min; this is a product ratio at that time and substrate concentration, not an initial-rate constant, kinetic selectivity coefficient or general efficiency ratio. No complete integration uncertainty is supplied.",
        "Higher-mass peaks support longer glycan products, but PMC Table 2 peak numbering(6, 7 for trimer/tetramer) conflicts with main-text assignments (5, 6). Preserve this discrepancy rather than silently changing labels. The probable pentamer is tentative.",
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication."
      ],
      "contextIds": [
        "kuroki1999-t4-product-context"
      ]
    },
    {
      "id": "C-bio-t4-transglycosylation-products",
      "kind": "review-finding",
      "statement": "The source 80 micromolar substrate T26H reaction yields higher-mass glycan products assigned as trimer and tetramer, with a tentative pentamer, and an estimated transglycosylation-to-hydrolysis product ratio about 10:1 after60 min. The lower-substrate inherited comparison gives different anomeric product assignments for WT* and T26H. These data support preparation-dependent product selection without supplying an initial-rate enhancement.",
      "scope": "Product observations with unmatched comparison conditions and source peak-label conflict retained.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "T4 WT* denotes the cysteine-free pseudo-wild-type scaffold; the compared proteins are prepared mutants, not all natural lysozymes. Activity in the halo assay is qualitative (+++,++, + or -), not a measured kcat or numerical fractional activity.",
        "The 60-min T26H run uses 80 micromolar substrate and 0.5 micromolar enzyme at 0 C. Figure 2b,c use 2 micromolar substrate,5 min 25 C and different WT*/T26H enzyme concentrations (0.08 versus 0.5 micromolar), and are inherited from1995. No matched rate ratio is inferred across these runs.",
        "The source estimated about 10:1 transglycosylation-to-hydrolysis products after60 min; this is a product ratio at that time and substrate concentration, not an initial-rate constant, kinetic selectivity coefficient or general efficiency ratio. No complete integration uncertainty is supplied.",
        "Higher-mass peaks support longer glycan products, but PMC Table 2 peak numbering(6, 7 for trimer/tetramer) conflicts with main-text assignments (5, 6). Preserve this discrepancy rather than silently changing labels. The probable pentamer is tentative.",
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication."
      ],
      "contextIds": [
        "kuroki1999-t4-product-context"
      ]
    },
    {
      "id": "C-bio-t4-local-mechanistic-interpretation",
      "kind": "review-finding",
      "statement": "Activity/product observations for T4 mutants and localized structural comparisons support a proposed T26H double-displacement mechanism involving Glu11 proton donation and a His26 covalent intermediate. E11H/T26H has no detected halo activity while D20C/T26H retains qualitative activity. The source discusses competing structural or electronic explanations for preference toward transglycosylation; the catalytic trajectory remains an interpretation.",
      "scope": "Finite protein-variant mechanistic support, not a transition-state or transient-intermediate observation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication.",
        "Mutant crystal structures are broadly similar to WT*, supporting localization of the substitutions. The stated 0.2 angstrom T26H/WT* backbone RMSD and earlier T26H structure are inherited from earlier studies, not independent new current structures.",
        "Table 3 gives refined single-mutant structures; the E11H/T26H and other double-mutant diffraction datasets were not refined and are excluded from the table. Do not present the inactive double mutant as a fully refined structure control.",
        "Glu11 proton donation and His26 covalent catalysis are proposed mechanisms supported by product/variant observations and structural comparison. They are not uniquely established atom-by-atom reaction trajectories or universal glycosidase laws.",
        "Changing Glu11 to His produces no detected activity in the qualitative halo assay for T26H. This limit is not proof of an exactly zero microscopic rate, protein absence, or a universally indispensable residue across enzyme families."
      ],
      "contextIds": [
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "C-bio-enzyme-assay-and-active-site-scope",
      "kind": "review-finding",
      "statement": "Selected KSI mutant assays provide source-fitted reaction turnover and a separate ligand-analogue structure/probe analysis; selected T4 lysozyme experiments provide preparation-dependent glycan products and qualified residue-mechanism interpretations. Together they support finite enzyme transformation and localized active-site functionality while keeping activity, fitted kinetic parameters, structure and mechanistic explanation distinct.",
      "scope": "Finite common disposition of catalogue3.1 and 3.2; publications do not establish universal enzymology.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4",
          "role": "supports",
          "note": "Actually read original primary passage; source-reported acquisition or inference with its stated finite boundary. No independent experimental reproduction or raw-data refit."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "supports",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Enzymatic transformation is represented by declared prepared reaction assays and fitted or endpoint observables; an active site is a localized structural/functional description. Reusing these experiments for both descriptions does not create independent evidence.",
        "The selected studies test protein catalysts only. They do not define every biological catalyst as protein, make every folded protein catalytic, prove one universal fold or active-site architecture, or infer all turnover from static structure.",
        "Only the stated pH/temperature/substrate regimes are admitted. Regulation, cofactor/solvent necessity, conformational coupling, transition-state stabilization magnitude, metabolic-cycle maintenance, global pathway control and proto-life necessity require separate evidence.",
        "Original catalogue level,phase,TypeRole,Science,requirements,established label,parent weights,necessity,causal/interaction codes,dependency types and unit carrier minima are provenance/classification defaults, not measured scientific laws or thresholds.",
        "The assays begin with prepared protein scaffolds and substrates. They do not observe folding, biochemical synthesis or a universal sequence from folded protein to every biological catalyst.",
        "Hydrogen-molecule bonding, the separate benzene resonance model, water-dimer hydrogen-bond energetics and gas-phase KRb/N2 polarization do not supply matched catalytic perturbations in these preparations. No cross-domain causal arrow or quantitative energetic transfer is admitted from those independent systems.",
        "Kinetic definitions constrain the interpretation of fitted rates; they are not an independently acting regulatory process. The source experiments supply no enzyme-free reference rate for an absolute enzyme-versus-water acceleration and no broad substrate-specificity panel or equilibrium binding constant.",
        "Original substrate/constraint, catalyst/resource/transport, regulation/interaction, gradient/compartment and buffering requirement codes remain catalogue classifications. Declared solution and substrate conditions do not prove universal requirements for sustained flux, buffering, compartments or energy supply.",
        "The unnamed theoretical and empirical catalogue paragraphs do not admit additional transition-state calculations, quantum-classical simulations, substrate-channeling, pre-steady-state, cryo-EM or NMR-structure acquisitions. Only the identified kinetics, product, X-ray and environment-sensitive spectroscopy are used."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context",
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "M-bio-ksi-solvation-interpretation",
      "kind": "method",
      "statement": "Combine the source kinetic, analogue-structure and fluorophenolate comparisons as a conditional solvation model. Preserve single-mutant versus double-mutant preparations, the unmodelled diffuse density, and the water-solvated reference assumption. Use the comparison to limit energetic interpretation; do not assign the mutation loss to an isolated hydrogen-bond energy.",
      "scope": "Published mechanistic interpretation conditional on analogue, structural and solvation-reference assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "method",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "method",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "The smaller 190-260-fold losses of Y16A/G/S/T versus the 19,000-fold Y16F loss do not isolate a single hydrogen bond. Mutations alter solvation, packing and potentially other energetic contributions; the source emphasizes that comparisons must specify the water-solvated reference reaction.",
        "A water-filled cavity and a more desolvating Phe surface are source-supported mechanistic interpretations, not direct observations of the transient reacting dienolate or an experimental decomposition of transition-state stabilization.",
        "The proposed approximately 200-fold Tyr16 contribution relative to aqueous hydrogen bonding is explicitly crude and assumes cavity-water energetics resemble the solution reference and no propagating structural effects. It is not an admitted exact universal catalytic energy.",
        "No new constant electric field, universal active-site mechanism, cofactor requirement, global conformational coupling, regulatory pathway or proto-life function follows."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "M-bio-t4-local-mechanistic-interpretation",
      "kind": "method",
      "statement": "Use the source product, qualitative activity and local crystal comparisons to constrain a proposed T26H reaction mechanism. Preserve differing reaction conditions, inherited data, unrefined double-mutant datasets and the distinction between a proposed His26 covalent intermediate and a directly observed transient intermediate.",
      "scope": "Finite protein-variant mechanistic support, not a transition-state or transient-intermediate observation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication.",
        "Mutant crystal structures are broadly similar to WT*, supporting localization of the substitutions. The stated 0.2 angstrom T26H/WT* backbone RMSD and earlier T26H structure are inherited from earlier studies, not independent new current structures.",
        "Table 3 gives refined single-mutant structures; the E11H/T26H and other double-mutant diffraction datasets were not refined and are excluded from the table. Do not present the inactive double mutant as a fully refined structure control.",
        "Glu11 proton donation and His26 covalent catalysis are proposed mechanisms supported by product/variant observations and structural comparison. They are not uniquely established atom-by-atom reaction trajectories or universal glycosidase laws.",
        "Changing Glu11 to His produces no detected activity in the qualitative halo assay for T26H. This limit is not proof of an exactly zero microscopic rate, protein absence, or a universally indispensable residue across enzyme families."
      ],
      "contextIds": [
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "M-bio-enzyme-assay-and-active-site-scope",
      "kind": "method",
      "statement": "Interpret KSI kinetics, separate KSI analogue/probe observations and T4 product/structural comparisons together while retaining every preparation and original acquisition lineage. Treat reaction activity, fitted rate parameters, local structure and mechanistic explanation as separate evidence roles, and do not transfer them into universal catalyst, regulation, folding or carrier-threshold laws.",
      "scope": "Finite common disposition of catalogue3.1 and 3.2; publications do not establish universal enzymology.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4",
          "role": "method",
          "note": "Method for interpreting the actually read source comparisons while preserving their preparation and inference limits; this method contract is not an additional empirical finding."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "method",
          "note": "The actually read preparation-specific passage supplies this component of the conditional interpretation; it is not an additional experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Enzymatic transformation is represented by declared prepared reaction assays and fitted or endpoint observables; an active site is a localized structural/functional description. Reusing these experiments for both descriptions does not create independent evidence.",
        "The selected studies test protein catalysts only. They do not define every biological catalyst as protein, make every folded protein catalytic, prove one universal fold or active-site architecture, or infer all turnover from static structure.",
        "Only the stated pH/temperature/substrate regimes are admitted. Regulation, cofactor/solvent necessity, conformational coupling, transition-state stabilization magnitude, metabolic-cycle maintenance, global pathway control and proto-life necessity require separate evidence.",
        "Original catalogue level,phase,TypeRole,Science,requirements,established label,parent weights,necessity,causal/interaction codes,dependency types and unit carrier minima are provenance/classification defaults, not measured scientific laws or thresholds.",
        "The assays begin with prepared protein scaffolds and substrates. They do not observe folding, biochemical synthesis or a universal sequence from folded protein to every biological catalyst.",
        "Hydrogen-molecule bonding, the separate benzene resonance model, water-dimer hydrogen-bond energetics and gas-phase KRb/N2 polarization do not supply matched catalytic perturbations in these preparations. No cross-domain causal arrow or quantitative energetic transfer is admitted from those independent systems.",
        "Kinetic definitions constrain the interpretation of fitted rates; they are not an independently acting regulatory process. The source experiments supply no enzyme-free reference rate for an absolute enzyme-versus-water acceleration and no broad substrate-specificity panel or equilibrium binding constant.",
        "Original substrate/constraint, catalyst/resource/transport, regulation/interaction, gradient/compartment and buffering requirement codes remain catalogue classifications. Declared solution and substrate conditions do not prove universal requirements for sustained flux, buffering, compartments or energy supply.",
        "The unnamed theoretical and empirical catalogue paragraphs do not admit additional transition-state calculations, quantum-classical simulations, substrate-channeling, pre-steady-state, cryo-EM or NMR-structure acquisitions. Only the identified kinetics, product, X-ray and environment-sensitive spectroscopy are used."
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context",
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:ksi-initial-rate-parameters",
      "name": "Initial-rate kinetic parameters for the selected KSI assay",
      "kind": "quantity-definition",
      "description": "For the selected initial-rate fit, v0/[E] = kcat*[S]/(KM+[S]) defines the source Michaelis-Menten parameters. kcat has units s^-1 and KM concentration units; kcat/KM has units M^-1 s^-1. The fit is a response model for this preparation and does not by itself identify microscopic steps or make KM an equilibrium binding constant.",
      "claimIds": [
        "D-bio-ksi-initial-rate-parameters"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
        }
      ],
      "openObligations": [
        "Rate parameters require the declared active-enzyme concentration, substrate, solvent, pH, temperature and fitted initial-rate regime. The reviewed source does not provide all raw curves or covariance."
      ]
    },
    {
      "id": "bio:ksi-kinetic-preparation",
      "name": "Prepared pKSI variants and 5(10)-EST initial-rate assay",
      "kind": "context",
      "description": "Compare purified Pseudomonas putida KSI wild type and Y16A, Y16G, Y16S, Y16T and Y16F variants using 5(10)-estrene-3,17-dione at 25 C in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 2% DMSO. Monitor 248 nm absorbance and fit initial velocity over substrate 2-384 micromolar. The SI reports at least three assays with enzyme concentration varied over at least fourfold; purification/refolding alternatives gave activities agreeing within error.",
      "claimIds": [
        "M-bio-ksi-kinetic-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
        }
      ],
      "openObligations": [
        "The observable is the 248 nm time-dependent absorbance converted using product molar absorptivity 14,800 M^-1 cm^-1. kcat and KM are fitted initial-rate parameters; KM is not automatically a substrate equilibrium dissociation constant and kcat/KM is not kcat.",
        "The SI specifies enzyme concentration varied over at least a fourfold range and at least three assays, but does not print absolute kinetic enzyme concentrations. Do not import the millimolar NMR concentrations or 30 mg/ml crystallization stock as kinetic concentrations.",
        "The reported errors are standard deviations across at least three assays, not full parameter covariance, a confidence interval or proof of independent laboratory reproduction. Values are reported as printed; neither fitted time courses nor uncertainty propagation were replayed.",
        "For 5(10)-EST, the source invokes chemistry-limited turnover based on previous studies; that kinetic assignment was not independently tested here. Earlier 5-AND results have a different rate-limiting-step boundary and cannot be substituted as the same effect size.",
        "The Y16F Table S2 row prints kcat=5.4x10^-4 s^-1, KM=41 micromolar, kcat/KM=8(1) M^-1 s^-1 and ratio 70,000. The central kcat and KM give about 13.2 M^-1 s^-1 rather than 8. Preserve this unresolved printed-table conflict; do not silently repair a cell, recalculate a new fit or claim internal exact agreement.",
        "The experiment compares declared protein variants. No enzyme-free aqueous reaction rate, universal enzyme-versus-water acceleration, in-vivo metabolic flux, allosteric regulation or all-enzyme rate law is measured."
      ]
    },
    {
      "id": "bio:ksi-variant-turnover",
      "name": "Source-fitted pKSI Y16 variant turnover",
      "kind": "scoped-process",
      "description": "For 5(10)-EST under the declared assay, Table S2 reports wild-type kcat=9.9(0.9) s^-1 and KM=19(4) micromolar. Mutant kcat central values are Y16A 4.8x10^-2, Y16G 4.0x10^-2, Y16S 3.8x10^-2, Y16T 5.2x10^-2 and Y16F 5.4x10^-4 s^-1. Printed WT/mutant turnover ratios are 200,250,260,190 and 19,000 respectively. These variant effects concern fitted turnover under one substrate/condition set.",
      "claimIds": [
        "C-bio-ksi-variant-turnover"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
        }
      ],
      "openObligations": [
        "The observable is the 248 nm time-dependent absorbance converted using product molar absorptivity 14,800 M^-1 cm^-1. kcat and KM are fitted initial-rate parameters; KM is not automatically a substrate equilibrium dissociation constant and kcat/KM is not kcat.",
        "The SI specifies enzyme concentration varied over at least a fourfold range and at least three assays, but does not print absolute kinetic enzyme concentrations. Do not import the millimolar NMR concentrations or 30 mg/ml crystallization stock as kinetic concentrations.",
        "The reported errors are standard deviations across at least three assays, not full parameter covariance, a confidence interval or proof of independent laboratory reproduction. Values are reported as printed; neither fitted time courses nor uncertainty propagation were replayed.",
        "For 5(10)-EST, the source invokes chemistry-limited turnover based on previous studies; that kinetic assignment was not independently tested here. Earlier 5-AND results have a different rate-limiting-step boundary and cannot be substituted as the same effect size.",
        "The Y16F Table S2 row prints kcat=5.4x10^-4 s^-1, KM=41 micromolar, kcat/KM=8(1) M^-1 s^-1 and ratio 70,000. The central kcat and KM give about 13.2 M^-1 s^-1 rather than 8. Preserve this unresolved printed-table conflict; do not silently repair a cell, recalculate a new fit or claim internal exact agreement.",
        "The experiment compares declared protein variants. No enzyme-free aqueous reaction rate, universal enzyme-versus-water acceleration, in-vivo metabolic flux, allosteric regulation or all-enzyme rate law is measured."
      ]
    },
    {
      "id": "bio:ksi-analogue-crystal-preparation",
      "name": "Prepared pKSI Y16S/D40N equilenin crystal",
      "kind": "context",
      "description": "Crystallize pKSI Y16S/D40N with one equivalent equilenin by hanging-drop mixing of 2 microlitres 30 mg/ml protein stock and 2 microlitres reservoir containing 0.9 M ammonium sulfate and 40 mM potassium phosphate pH 7.2. Grow at 20 C, cryoprotect using sodium malonate and collect 100 K diffraction. Molecular replacement, refinement and a held-out 5% diffraction subset yield deposited model 3IPT.",
      "claimIds": [
        "M-bio-ksi-analogue-crystal-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3"
        }
      ],
      "openObligations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "Table S3 gives 1.63 angstrom limiting resolution, 82.3% completeness, Rwork 20.7% and Rfree 24.5%. Four monomers in one asymmetric unit and their approximately 0.1 angstrom distance spread are not four independent crystals or a universal coordinate error.",
        "Diffuse triangular density near the ligand is consistent with partially disordered water. SI says two-water split-occupancy modeling was imperfect and the cavity density was left empty in the final model. Do not turn proposed two-to-three waters into resolved occupied water coordinates or an exact molecule count.",
        "The WT equilenin comparison and Y16F apo structures are inherited published coordinates. They are not new WT/Y16F crystal acquisitions or independent repetitions of the current mutation experiment."
      ]
    },
    {
      "id": "bio:ksi-local-analogue-geometry",
      "name": "Localized pKSI analogue-binding geometry",
      "kind": "scoped-structure",
      "description": "The source-refined 1.63 angstrom pKSI Y16S/D40N-equilenin structure places Ser16 hydroxyl and equilenin oxygen 6.4 angstrom apart, with Ser16 directed toward Met13 backbone carbonyl. Asp103 remains close to the ligand oxygen. The overall backbone differs by about 0.4 angstrom RMSD from the inherited WT-analogue structure. Local diffuse density is compatible with cavity water, while a direct Ser16-to-ligand hydrogen bond is absent in this refined structure.",
      "claimIds": [
        "C-bio-ksi-local-analogue-geometry"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3"
        }
      ],
      "openObligations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "Table S3 gives 1.63 angstrom limiting resolution, 82.3% completeness, Rwork 20.7% and Rfree 24.5%. Four monomers in one asymmetric unit and their approximately 0.1 angstrom distance spread are not four independent crystals or a universal coordinate error.",
        "Diffuse triangular density near the ligand is consistent with partially disordered water. SI says two-water split-occupancy modeling was imperfect and the cavity density was left empty in the final model. Do not turn proposed two-to-three waters into resolved occupied water coordinates or an exact molecule count.",
        "The WT equilenin comparison and Y16F apo structures are inherited published coordinates. They are not new WT/Y16F crystal acquisitions or independent repetitions of the current mutation experiment."
      ]
    },
    {
      "id": "bio:ksi-phenolate-probe-context",
      "name": "Prepared KSI fluorophenolate and solvent controls",
      "kind": "context",
      "description": "Acquire 19F spectra at 20 C for1 mM 2-fluoro-4-nitrophenolate bound to 2 mM pKSI Y16S/D40N or Y16F/D40N in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 10% D2O, referenced to external trifluoroacetic acid. Compare free probe in water and THF with base. UV-vis confirms bound ligand ionization; labelled-urea refolding/HSQC controls test whether diffuse crystal density is retained urea.",
      "claimIds": [
        "M-bio-ksi-phenolate-probe-context"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4"
        }
      ],
      "openObligations": [
        "Probe spectra use Y16S/D40N or Y16F/D40N with a fluorinated phenolate analogue, not the kinetic single-mutant/substrate preparation; probe positioning near residue 16 is supported by structural superposition, not directly redetermined for each complex.",
        "A 19F chemical shift is an environment-sensitive spectroscopic observable, not a measured local dielectric constant, dipole moment, electric field or transition-state energy.",
        "The source solvent comparison supports an aqueous-like versus hydrophobic local-environment interpretation; ring-current and ligand-orientation explanations are assessed by inherited calculations/structural models, not exhaustively ruled out by a single spectrum.",
        "UV-vis control spectra support the ligand ionization assignment. A negative 15N-urea HSQC control under the stated sensitivity supports exclusion of bound refolding urea, without proving an exact water population or all possible solute absence."
      ]
    },
    {
      "id": "bio:ksi-local-probe-response",
      "name": "KSI-bound phenolate environment-sensitive spectrum",
      "kind": "scoped-structure",
      "description": "The source reports 19F peaks at -134.7 ppm for phenolate bound to pKSI Y16F/D40N and -136.4 ppm for Y16S/D40N. The water-to-THF probe comparison shifts by 2.2 ppm. These finite spectra support differing local probe environments and enter the water-filled-cavity interpretation together with diffraction and mutation kinetics.",
      "claimIds": [
        "C-bio-ksi-local-probe-response"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4"
        }
      ],
      "openObligations": [
        "Probe spectra use Y16S/D40N or Y16F/D40N with a fluorinated phenolate analogue, not the kinetic single-mutant/substrate preparation; probe positioning near residue 16 is supported by structural superposition, not directly redetermined for each complex.",
        "A 19F chemical shift is an environment-sensitive spectroscopic observable, not a measured local dielectric constant, dipole moment, electric field or transition-state energy.",
        "The source solvent comparison supports an aqueous-like versus hydrophobic local-environment interpretation; ring-current and ligand-orientation explanations are assessed by inherited calculations/structural models, not exhaustively ruled out by a single spectrum.",
        "UV-vis control spectra support the ligand ionization assignment. A negative 15N-urea HSQC control under the stated sensitivity supports exclusion of bound refolding urea, without proving an exact water population or all possible solute absence."
      ]
    },
    {
      "id": "bio:ksi-solvation-interpretation",
      "name": "Conditional KSI mutation and solvation interpretation",
      "kind": "hypothesis",
      "description": "Combining the variant turnover losses, Y16S/D40N analogue geometry and fluorophenolate solvent comparisons, Kraut and colleagues propose that smaller residue 16 substitutions allow cavity water to mitigate loss of the Tyr donor, whereas Phe16 adds unfavorable desolvation beyond removing the Tyr hydrogen bond. The measured mutation effects therefore do not directly equal the energetic contribution of one hydrogen bond to catalysis.",
      "claimIds": [
        "C-bio-ksi-solvation-interpretation",
        "M-bio-ksi-solvation-interpretation"
      ],
      "status": "hypothesis",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls"
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4"
        }
      ],
      "openObligations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "The smaller 190-260-fold losses of Y16A/G/S/T versus the 19,000-fold Y16F loss do not isolate a single hydrogen bond. Mutations alter solvation, packing and potentially other energetic contributions; the source emphasizes that comparisons must specify the water-solvated reference reaction.",
        "A water-filled cavity and a more desolvating Phe surface are source-supported mechanistic interpretations, not direct observations of the transient reacting dienolate or an experimental decomposition of transition-state stabilization.",
        "The proposed approximately 200-fold Tyr16 contribution relative to aqueous hydrogen bonding is explicitly crude and assumes cavity-water energetics resemble the solution reference and no propagating structural effects. It is not an admitted exact universal catalytic energy.",
        "No new constant electric field, universal active-site mechanism, cofactor requirement, global conformational coupling, regulatory pathway or proto-life function follows."
      ]
    },
    {
      "id": "bio:t4-product-preparation",
      "name": "Prepared T4 lysozyme product-selection assay",
      "kind": "context",
      "description": "Incubate cysteine-free pseudo-WT-derived T26H T4 lysozyme with an E.coli cell-wall-derived peptide tetrasaccharide containing one reduced terminal NAM unit. For the higher-substrate experiment use80 micromolar substrate,0.5 micromolar enzyme,20 mM sodium acetate pH 5.0,0 C and 60 min. Resolve products by reversed-phase HPLC and assign masses by electrospray MS; maintain the source distinct lower-substrate5-min comparisons and qualitative halo assay as separate observations.",
      "claimIds": [
        "M-bio-t4-product-preparation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Materials and Methods: Materials, Analysis of Enzymatic Products, Enzymatic Activity, X-Ray Crystallography"
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption"
        }
      ],
      "openObligations": [
        "T4 WT* denotes the cysteine-free pseudo-wild-type scaffold; the compared proteins are prepared mutants, not all natural lysozymes. Activity in the halo assay is qualitative (+++,++, + or -), not a measured kcat or numerical fractional activity.",
        "The 60-min T26H run uses 80 micromolar substrate and 0.5 micromolar enzyme at 0 C. Figure 2b,c use 2 micromolar substrate,5 min 25 C and different WT*/T26H enzyme concentrations (0.08 versus 0.5 micromolar), and are inherited from1995. No matched rate ratio is inferred across these runs.",
        "The source estimated about 10:1 transglycosylation-to-hydrolysis products after60 min; this is a product ratio at that time and substrate concentration, not an initial-rate constant, kinetic selectivity coefficient or general efficiency ratio. No complete integration uncertainty is supplied.",
        "Higher-mass peaks support longer glycan products, but PMC Table 2 peak numbering(6, 7 for trimer/tetramer) conflicts with main-text assignments (5, 6). Preserve this discrepancy rather than silently changing labels. The probable pentamer is tentative.",
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication."
      ]
    },
    {
      "id": "bio:t4-transglycosylation-products",
      "name": "Finite T26H longer-glycan product formation",
      "kind": "scoped-process",
      "description": "The source 80 micromolar substrate T26H reaction yields higher-mass glycan products assigned as trimer and tetramer, with a tentative pentamer, and an estimated transglycosylation-to-hydrolysis product ratio about 10:1 after60 min. The lower-substrate inherited comparison gives different anomeric product assignments for WT* and T26H. These data support preparation-dependent product selection without supplying an initial-rate enhancement.",
      "claimIds": [
        "C-bio-t4-transglycosylation-products"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption"
        }
      ],
      "openObligations": [
        "T4 WT* denotes the cysteine-free pseudo-wild-type scaffold; the compared proteins are prepared mutants, not all natural lysozymes. Activity in the halo assay is qualitative (+++,++, + or -), not a measured kcat or numerical fractional activity.",
        "The 60-min T26H run uses 80 micromolar substrate and 0.5 micromolar enzyme at 0 C. Figure 2b,c use 2 micromolar substrate,5 min 25 C and different WT*/T26H enzyme concentrations (0.08 versus 0.5 micromolar), and are inherited from1995. No matched rate ratio is inferred across these runs.",
        "The source estimated about 10:1 transglycosylation-to-hydrolysis products after60 min; this is a product ratio at that time and substrate concentration, not an initial-rate constant, kinetic selectivity coefficient or general efficiency ratio. No complete integration uncertainty is supplied.",
        "Higher-mass peaks support longer glycan products, but PMC Table 2 peak numbering(6, 7 for trimer/tetramer) conflicts with main-text assignments (5, 6). Preserve this discrepancy rather than silently changing labels. The probable pentamer is tentative.",
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication."
      ]
    },
    {
      "id": "bio:t4-local-mechanistic-interpretation",
      "name": "Conditional T4 residue and reaction-channel interpretation",
      "kind": "hypothesis",
      "description": "Activity/product observations for T4 mutants and localized structural comparisons support a proposed T26H double-displacement mechanism involving Glu11 proton donation and a His26 covalent intermediate. E11H/T26H has no detected halo activity while D20C/T26H retains qualitative activity. The source discusses competing structural or electronic explanations for preference toward transglycosylation; the catalytic trajectory remains an interpretation.",
      "claimIds": [
        "C-bio-t4-local-mechanistic-interpretation",
        "M-bio-t4-local-mechanistic-interpretation"
      ],
      "status": "hypothesis",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption"
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4"
        }
      ],
      "openObligations": [
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication.",
        "Mutant crystal structures are broadly similar to WT*, supporting localization of the substitutions. The stated 0.2 angstrom T26H/WT* backbone RMSD and earlier T26H structure are inherited from earlier studies, not independent new current structures.",
        "Table 3 gives refined single-mutant structures; the E11H/T26H and other double-mutant diffraction datasets were not refined and are excluded from the table. Do not present the inactive double mutant as a fully refined structure control.",
        "Glu11 proton donation and His26 covalent catalysis are proposed mechanisms supported by product/variant observations and structural comparison. They are not uniquely established atom-by-atom reaction trajectories or universal glycosidase laws.",
        "Changing Glu11 to His produces no detected activity in the qualitative halo assay for T26H. This limit is not proof of an exactly zero microscopic rate, protein absence, or a universally indispensable residue across enzyme families."
      ]
    },
    {
      "id": "bio:enzyme-assay-and-active-site-scope",
      "name": "Scoped enzyme transformation and localized active-site evidence",
      "kind": "scoped-process",
      "description": "Selected KSI mutant assays provide source-fitted reaction turnover and a separate ligand-analogue structure/probe analysis; selected T4 lysozyme experiments provide preparation-dependent glycan products and qualified residue-mechanism interpretations. Together they support finite enzyme transformation and localized active-site functionality while keeping activity, fitted kinetic parameters, structure and mechanistic explanation distinct.",
      "claimIds": [
        "C-bio-enzyme-assay-and-active-site-scope",
        "M-bio-enzyme-assay-and-active-site-scope"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3"
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption"
        },
        {
          "sourceId": "kuroki1999-t4-active-site",
          "locator": "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/1"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/2"
        }
      ],
      "openObligations": [
        "Enzymatic transformation is represented by declared prepared reaction assays and fitted or endpoint observables; an active site is a localized structural/functional description. Reusing these experiments for both descriptions does not create independent evidence.",
        "The selected studies test protein catalysts only. They do not define every biological catalyst as protein, make every folded protein catalytic, prove one universal fold or active-site architecture, or infer all turnover from static structure.",
        "Only the stated pH/temperature/substrate regimes are admitted. Regulation, cofactor/solvent necessity, conformational coupling, transition-state stabilization magnitude, metabolic-cycle maintenance, global pathway control and proto-life necessity require separate evidence.",
        "Original catalogue level,phase,TypeRole,Science,requirements,established label,parent weights,necessity,causal/interaction codes,dependency types and unit carrier minima are provenance/classification defaults, not measured scientific laws or thresholds.",
        "The assays begin with prepared protein scaffolds and substrates. They do not observe folding, biochemical synthesis or a universal sequence from folded protein to every biological catalyst.",
        "Hydrogen-molecule bonding, the separate benzene resonance model, water-dimer hydrogen-bond energetics and gas-phase KRb/N2 polarization do not supply matched catalytic perturbations in these preparations. No cross-domain causal arrow or quantitative energetic transfer is admitted from those independent systems.",
        "Kinetic definitions constrain the interpretation of fitted rates; they are not an independently acting regulatory process. The source experiments supply no enzyme-free reference rate for an absolute enzyme-versus-water acceleration and no broad substrate-specificity panel or equilibrium binding constant.",
        "Original substrate/constraint, catalyst/resource/transport, regulation/interaction, gradient/compartment and buffering requirement codes remain catalogue classifications. Declared solution and substrate conditions do not prove universal requirements for sustained flux, buffering, compartments or energy supply.",
        "The unnamed theoretical and empirical catalogue paragraphs do not admit additional transition-state calculations, quantum-classical simulations, substrate-channeling, pre-steady-state, cryo-EM or NMR-structure acquisitions. Only the identified kinetics, product, X-ray and environment-sensitive spectroscopy are used."
      ]
    }
  ],
  "relations": [
    {
      "id": "biochemistry:ksi-initial-rate-parameters-ksi-variant-turnover",
      "source": "bio:ksi-initial-rate-parameters",
      "target": "bio:ksi-variant-turnover",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The fitted turnover record uses the declared initial-rate parameter convention.",
      "claimIds": [
        "C-bio-ksi-variant-turnover",
        "D-bio-ksi-initial-rate-parameters"
      ]
    },
    {
      "id": "biochemistry:ksi-kinetic-preparation-ksi-variant-turnover",
      "source": "bio:ksi-kinetic-preparation",
      "target": "bio:ksi-variant-turnover",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The optical initial-rate acquisition and fit support these finite variant parameter estimates.",
      "claimIds": [
        "C-bio-ksi-variant-turnover",
        "M-bio-ksi-kinetic-preparation"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context"
      ]
    },
    {
      "id": "biochemistry:ksi-analogue-crystal-preparation-ksi-local-analogue-geometry",
      "source": "bio:ksi-analogue-crystal-preparation",
      "target": "bio:ksi-local-analogue-geometry",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This double-mutant/analogue diffraction preparation supports the refined local geometry.",
      "claimIds": [
        "C-bio-ksi-local-analogue-geometry",
        "M-bio-ksi-analogue-crystal-preparation"
      ],
      "contextIds": [
        "kraut2010-ksi-structure-context"
      ]
    },
    {
      "id": "biochemistry:ksi-phenolate-probe-context-ksi-local-probe-response",
      "source": "bio:ksi-phenolate-probe-context",
      "target": "bio:ksi-local-probe-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Declared fluorinated-probe spectra and solvent controls support the finite spectral comparison.",
      "claimIds": [
        "C-bio-ksi-local-probe-response",
        "M-bio-ksi-phenolate-probe-context"
      ],
      "contextIds": [
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "biochemistry:ksi-variant-turnover-ksi-solvation-interpretation",
      "source": "bio:ksi-variant-turnover",
      "target": "bio:ksi-solvation-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This observable enters the conditional solvation explanation with its own preparation and inference limits.",
      "claimIds": [
        "C-bio-ksi-solvation-interpretation",
        "M-bio-ksi-solvation-interpretation"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "biochemistry:ksi-local-analogue-geometry-ksi-solvation-interpretation",
      "source": "bio:ksi-local-analogue-geometry",
      "target": "bio:ksi-solvation-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This observable enters the conditional solvation explanation with its own preparation and inference limits.",
      "claimIds": [
        "C-bio-ksi-solvation-interpretation",
        "M-bio-ksi-solvation-interpretation"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "biochemistry:ksi-local-probe-response-ksi-solvation-interpretation",
      "source": "bio:ksi-local-probe-response",
      "target": "bio:ksi-solvation-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This observable enters the conditional solvation explanation with its own preparation and inference limits.",
      "claimIds": [
        "C-bio-ksi-solvation-interpretation",
        "M-bio-ksi-solvation-interpretation"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
    {
      "id": "biochemistry:t4-product-preparation-t4-transglycosylation-products",
      "source": "bio:t4-product-preparation",
      "target": "bio:t4-transglycosylation-products",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The specified high-substrate reaction supports the endpoint longer-glycan product record.",
      "claimIds": [
        "C-bio-t4-transglycosylation-products",
        "M-bio-t4-product-preparation"
      ],
      "contextIds": [
        "kuroki1999-t4-product-context"
      ]
    },
    {
      "id": "biochemistry:t4-transglycosylation-products-t4-local-mechanistic-interpretation",
      "source": "bio:t4-transglycosylation-products",
      "target": "bio:t4-local-mechanistic-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Product assignments constrain the proposed mechanism without observing its transient covalent intermediate.",
      "claimIds": [
        "C-bio-t4-local-mechanistic-interpretation",
        "M-bio-t4-local-mechanistic-interpretation"
      ],
      "contextIds": [
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "biochemistry:ksi-variant-turnover-enzyme-assay-and-active-site-scope",
      "source": "bio:ksi-variant-turnover",
      "target": "bio:enzyme-assay-and-active-site-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite evidence supports a bounded source scope while retaining its original acquisition identity.",
      "claimIds": [
        "C-bio-enzyme-assay-and-active-site-scope",
        "M-bio-enzyme-assay-and-active-site-scope"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context",
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "biochemistry:ksi-local-analogue-geometry-enzyme-assay-and-active-site-scope",
      "source": "bio:ksi-local-analogue-geometry",
      "target": "bio:enzyme-assay-and-active-site-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite evidence supports a bounded source scope while retaining its original acquisition identity.",
      "claimIds": [
        "C-bio-enzyme-assay-and-active-site-scope",
        "M-bio-enzyme-assay-and-active-site-scope"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context",
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    },
    {
      "id": "biochemistry:t4-transglycosylation-products-enzyme-assay-and-active-site-scope",
      "source": "bio:t4-transglycosylation-products",
      "target": "bio:enzyme-assay-and-active-site-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite evidence supports a bounded source scope while retaining its original acquisition identity.",
      "claimIds": [
        "C-bio-enzyme-assay-and-active-site-scope",
        "M-bio-enzyme-assay-and-active-site-scope"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context",
        "kuroki1999-t4-product-context",
        "kuroki1999-t4-structure-context"
      ]
    }
  ],
  "studies": [
    {
      "id": "kraut2010-ksi-kinetic-context",
      "sourceId": "kraut2010-ksi-oxyanion-mutations",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0911168107",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "107",
      "issue": "5",
      "pages": "1960-1965",
      "system": "Purified pKSI WT and residue 16 variants;5(10)-EST isomerization",
      "preparation": "Compare purified Pseudomonas putida KSI wild type and Y16A, Y16G, Y16S, Y16T and Y16F variants using 5(10)-estrene-3,17-dione at 25 C in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 2% DMSO. Monitor 248 nm absorbance and fit initial velocity over substrate 2-384 micromolar. The SI reports at least three assays with enzyme concentration varied over at least fourfold; purification/refolding alternatives gave activities agreeing within error.",
      "observable": "248 nm initial optical response versus substrate concentration; fitted kcat and KM.",
      "finding": "For 5(10)-EST under the declared assay, Table S2 reports wild-type kcat=9.9(0.9) s^-1 and KM=19(4) micromolar. Mutant kcat central values are Y16A 4.8x10^-2, Y16G 4.0x10^-2, Y16S 3.8x10^-2, Y16T 5.2x10^-2 and Y16F 5.4x10^-4 s^-1. Printed WT/mutant turnover ratios are 200,250,260,190 and 19,000 respectively. These variant effects concern fitted turnover under one substrate/condition set.",
      "limitations": [
        "The observable is the 248 nm time-dependent absorbance converted using product molar absorptivity 14,800 M^-1 cm^-1. kcat and KM are fitted initial-rate parameters; KM is not automatically a substrate equilibrium dissociation constant and kcat/KM is not kcat.",
        "The SI specifies enzyme concentration varied over at least a fourfold range and at least three assays, but does not print absolute kinetic enzyme concentrations. Do not import the millimolar NMR concentrations or 30 mg/ml crystallization stock as kinetic concentrations.",
        "The reported errors are standard deviations across at least three assays, not full parameter covariance, a confidence interval or proof of independent laboratory reproduction. Values are reported as printed; neither fitted time courses nor uncertainty propagation were replayed.",
        "For 5(10)-EST, the source invokes chemistry-limited turnover based on previous studies; that kinetic assignment was not independently tested here. Earlier 5-AND results have a different rate-limiting-step boundary and cannot be substituted as the same effect size.",
        "The Y16F Table S2 row prints kcat=5.4x10^-4 s^-1, KM=41 micromolar, kcat/KM=8(1) M^-1 s^-1 and ratio 70,000. The central kcat and KM give about 13.2 M^-1 s^-1 rather than 8. Preserve this unresolved printed-table conflict; do not silently repair a cell, recalculate a new fit or claim internal exact agreement.",
        "The experiment compares declared protein variants. No enzyme-free aqueous reaction rate, universal enzyme-versus-water acceleration, in-vivo metabolic flux, allosteric regulation or all-enzyme rate law is measured."
      ],
      "readExtent": "complete-main-text-and-five-page-experimental-supplement",
      "reviewedLocators": [
        "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0911168107",
      "correctionCheck": "Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
    },
    {
      "id": "kraut2010-ksi-structure-context",
      "sourceId": "kraut2010-ksi-oxyanion-mutations",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0911168107",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "107",
      "issue": "5",
      "pages": "1960-1965",
      "system": "pKSI Y16S/D40N-equilenin single crystal; inherited WT/apo-mutant structure comparisons",
      "preparation": "Crystallize pKSI Y16S/D40N with one equivalent equilenin by hanging-drop mixing of 2 microlitres 30 mg/ml protein stock and 2 microlitres reservoir containing 0.9 M ammonium sulfate and 40 mM potassium phosphate pH 7.2. Grow at 20 C, cryoprotect using sodium malonate and collect 100 K diffraction. Molecular replacement, refinement and a held-out 5% diffraction subset yield deposited model 3IPT.",
      "observable": "Diffraction intensities and source-refined ligand/residue coordinates; localized diffuse electron density.",
      "finding": "The source-refined 1.63 angstrom pKSI Y16S/D40N-equilenin structure places Ser16 hydroxyl and equilenin oxygen 6.4 angstrom apart, with Ser16 directed toward Met13 backbone carbonyl. Asp103 remains close to the ligand oxygen. The overall backbone differs by about 0.4 angstrom RMSD from the inherited WT-analogue structure. Local diffuse density is compatible with cavity water, while a direct Ser16-to-ligand hydrogen bond is absent in this refined structure.",
      "limitations": [
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "Table S3 gives 1.63 angstrom limiting resolution, 82.3% completeness, Rwork 20.7% and Rfree 24.5%. Four monomers in one asymmetric unit and their approximately 0.1 angstrom distance spread are not four independent crystals or a universal coordinate error.",
        "Diffuse triangular density near the ligand is consistent with partially disordered water. SI says two-water split-occupancy modeling was imperfect and the cavity density was left empty in the final model. Do not turn proposed two-to-three waters into resolved occupied water coordinates or an exact molecule count.",
        "The WT equilenin comparison and Y16F apo structures are inherited published coordinates. They are not new WT/Y16F crystal acquisitions or independent repetitions of the current mutation experiment."
      ],
      "readExtent": "complete-main-text-and-five-page-experimental-supplement",
      "reviewedLocators": [
        "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0911168107",
      "correctionCheck": "Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
    },
    {
      "id": "kraut2010-ksi-probe-context",
      "sourceId": "kraut2010-ksi-oxyanion-mutations",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.0911168107",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "107",
      "issue": "5",
      "pages": "1960-1965",
      "system": "pKSI Y16S/D40N and Y16F/D40N fluorophenolate complexes and free-probe solvent controls",
      "preparation": "Acquire 19F spectra at 20 C for1 mM 2-fluoro-4-nitrophenolate bound to 2 mM pKSI Y16S/D40N or Y16F/D40N in 40 mM potassium phosphate pH 7.2, 1 mM EDTA, 2 mM DTT and 10% D2O, referenced to external trifluoroacetic acid. Compare free probe in water and THF with base. UV-vis confirms bound ligand ionization; labelled-urea refolding/HSQC controls test whether diffuse crystal density is retained urea.",
      "observable": "19F chemical shifts; UV-vis ionization checks;15N-urea HSQC control.",
      "finding": "The source reports 19F peaks at -134.7 ppm for phenolate bound to pKSI Y16F/D40N and -136.4 ppm for Y16S/D40N. The water-to-THF probe comparison shifts by 2.2 ppm. These finite spectra support differing local probe environments and enter the water-filled-cavity interpretation together with diffraction and mutation kinetics.",
      "limitations": [
        "Probe spectra use Y16S/D40N or Y16F/D40N with a fluorinated phenolate analogue, not the kinetic single-mutant/substrate preparation; probe positioning near residue 16 is supported by structural superposition, not directly redetermined for each complex.",
        "A 19F chemical shift is an environment-sensitive spectroscopic observable, not a measured local dielectric constant, dipole moment, electric field or transition-state energy.",
        "The source solvent comparison supports an aqueous-like versus hydrophobic local-environment interpretation; ring-current and ligand-orientation explanations are assessed by inherited calculations/structural models, not exhaustively ruled out by a single spectrum.",
        "UV-vis control spectra support the ligand ionization assignment. A negative 15N-urea HSQC control under the stated sensitivity supports exclusion of bound refolding urea, without proving an exact water population or all possible solute absence."
      ],
      "readExtent": "complete-main-text-and-five-page-experimental-supplement",
      "reviewedLocators": [
        "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.0911168107",
      "correctionCheck": "Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
    },
    {
      "id": "kuroki1999-t4-product-context",
      "sourceId": "kuroki1999-t4-active-site",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.96.16.8949",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "96",
      "issue": "16",
      "pages": "8949-8954",
      "system": "Cysteine-free pseudo-WT-derived T4 lysozyme variants with prepared peptidic tetrasaccharide",
      "preparation": "Incubate cysteine-free pseudo-WT-derived T26H T4 lysozyme with an E.coli cell-wall-derived peptide tetrasaccharide containing one reduced terminal NAM unit. For the higher-substrate experiment use80 micromolar substrate,0.5 micromolar enzyme,20 mM sodium acetate pH 5.0,0 C and 60 min. Resolve products by reversed-phase HPLC and assign masses by electrospray MS; maintain the source distinct lower-substrate5-min comparisons and qualitative halo assay as separate observations.",
      "observable": "HPLC product profiles, electrospray masses and qualitative halo activity.",
      "finding": "The source 80 micromolar substrate T26H reaction yields higher-mass glycan products assigned as trimer and tetramer, with a tentative pentamer, and an estimated transglycosylation-to-hydrolysis product ratio about 10:1 after60 min. The lower-substrate inherited comparison gives different anomeric product assignments for WT* and T26H. These data support preparation-dependent product selection without supplying an initial-rate enhancement.",
      "limitations": [
        "T4 WT* denotes the cysteine-free pseudo-wild-type scaffold; the compared proteins are prepared mutants, not all natural lysozymes. Activity in the halo assay is qualitative (+++,++, + or -), not a measured kcat or numerical fractional activity.",
        "The 60-min T26H run uses 80 micromolar substrate and 0.5 micromolar enzyme at 0 C. Figure 2b,c use 2 micromolar substrate,5 min 25 C and different WT*/T26H enzyme concentrations (0.08 versus 0.5 micromolar), and are inherited from1995. No matched rate ratio is inferred across these runs.",
        "The source estimated about 10:1 transglycosylation-to-hydrolysis products after60 min; this is a product ratio at that time and substrate concentration, not an initial-rate constant, kinetic selectivity coefficient or general efficiency ratio. No complete integration uncertainty is supplied.",
        "Higher-mass peaks support longer glycan products, but PMC Table 2 peak numbering(6, 7 for trimer/tetramer) conflicts with main-text assignments (5, 6). Preserve this discrepancy rather than silently changing labels. The probable pentamer is tentative.",
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication."
      ],
      "readExtent": "complete-main-text-tables-and-figure-captions",
      "reviewedLocators": [
        "PNAS 96(16),8949-8954, Materials and Methods: Materials, Analysis of Enzymatic Products, Enzymatic Activity, X-Ray Crystallography",
        "PNAS 96(16),8949-8954, Results: Enzymatic Activities and Product Analysis; Tables 1-2 and Figure 2 with its preparation-specific caption"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.96.16.8949",
      "correctionCheck": "Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
    },
    {
      "id": "kuroki1999-t4-structure-context",
      "sourceId": "kuroki1999-t4-active-site",
      "studyType": "primary-experiment",
      "doi": "10.1073/pnas.96.16.8949",
      "journal": "Proceedings of the National Academy of Sciences",
      "volume": "96",
      "issue": "16",
      "pages": "8949-8954",
      "system": "T4 lysozyme single-mutant crystal models and inherited T26H/WT* comparisons",
      "preparation": "Crystallize selected mutant proteins in approximately 2 M phosphate near pH 7; collect diffraction with source instruments and refine single-mutant models as tabulated. Double-mutant diffraction datasets are explicitly not refined. Compare local residue and solvent positions.",
      "observable": "Source-refined single-mutant coordinates and local solvent/residue geometry; qualitative activity controls are in the product/halo context.",
      "finding": "Mutant models broadly preserve the overall fold. Local residue substitutions and solvent-position comparison support the finite proposed T26H reaction mechanism; an actual T26H transient covalent intermediate is not observed.",
      "limitations": [
        "Mass assignment and product stereochemistry constrain a mechanism without directly observing a transient His26 covalent intermediate or transition state. A T26E adduct in this paper is inherited prior work; double-mutant adducts are only inferred from SDS/PAGE as explicitly noted.",
        "The 60-min T26H chromatogram and inherited lower-concentration WT*/T26H comparisons do not provide a fully matched quantitative causal comparison of transglycosylation rates or independent replication.",
        "Mutant crystal structures are broadly similar to WT*, supporting localization of the substitutions. The stated 0.2 angstrom T26H/WT* backbone RMSD and earlier T26H structure are inherited from earlier studies, not independent new current structures.",
        "Table 3 gives refined single-mutant structures; the E11H/T26H and other double-mutant diffraction datasets were not refined and are excluded from the table. Do not present the inactive double mutant as a fully refined structure control.",
        "Glu11 proton donation and His26 covalent catalysis are proposed mechanisms supported by product/variant observations and structural comparison. They are not uniquely established atom-by-atom reaction trajectories or universal glycosidase laws.",
        "Changing Glu11 to His produces no detected activity in the qualitative halo assay for T26H. This limit is not proof of an exactly zero microscopic rate, protein absence, or a universally indispensable residue across enzyme families."
      ],
      "readExtent": "complete-main-text-tables-and-figure-captions",
      "reviewedLocators": [
        "PNAS 96(16),8949-8954, Results: Structure Determination; Table 3 including double-mutant non-refinement footnote; Figure 3; Discussion and Figure 4"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1073/pnas.96.16.8949",
      "correctionCheck": "Metadata and limited correction search checked 2026-10-20 against DOI registry and original PMC full text. Title, authors, DOI, journal, volume, issue and pages agree. Registry relation is empty and no explicit erratum/correction/retraction surfaced in the limited exact-title/DOI searches; this does not prove absence of corrections or complete later-literature coverage."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:ksi-initial-rate-parameters",
      "role": "quantity-definition",
      "denotes": "Initial-rate kinetic parameters for the selected KSI assay within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-ksi-initial-rate-parameters"
      ]
    },
    {
      "nodeId": "bio:ksi-kinetic-preparation",
      "role": "experimental-context",
      "denotes": "Prepared pKSI variants and 5(10)-EST initial-rate assay within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-ksi-kinetic-preparation"
      ]
    },
    {
      "nodeId": "bio:ksi-variant-turnover",
      "role": "scoped-phenomenon",
      "denotes": "Source-fitted pKSI Y16 variant turnover within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ksi-variant-turnover"
      ]
    },
    {
      "nodeId": "bio:ksi-analogue-crystal-preparation",
      "role": "experimental-context",
      "denotes": "Prepared pKSI Y16S/D40N equilenin crystal within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-ksi-analogue-crystal-preparation"
      ]
    },
    {
      "nodeId": "bio:ksi-local-analogue-geometry",
      "role": "scoped-phenomenon",
      "denotes": "Localized pKSI analogue-binding geometry within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ksi-local-analogue-geometry"
      ]
    },
    {
      "nodeId": "bio:ksi-phenolate-probe-context",
      "role": "experimental-context",
      "denotes": "Prepared KSI fluorophenolate and solvent controls within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-ksi-phenolate-probe-context"
      ]
    },
    {
      "nodeId": "bio:ksi-local-probe-response",
      "role": "scoped-phenomenon",
      "denotes": "KSI-bound phenolate environment-sensitive spectrum within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ksi-local-probe-response"
      ]
    },
    {
      "nodeId": "bio:ksi-solvation-interpretation",
      "role": "hypothesis",
      "denotes": "Conditional KSI mutation and solvation interpretation within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ksi-solvation-interpretation",
        "M-bio-ksi-solvation-interpretation"
      ]
    },
    {
      "nodeId": "bio:t4-product-preparation",
      "role": "experimental-context",
      "denotes": "Prepared T4 lysozyme product-selection assay within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-t4-product-preparation"
      ]
    },
    {
      "nodeId": "bio:t4-transglycosylation-products",
      "role": "scoped-phenomenon",
      "denotes": "Finite T26H longer-glycan product formation within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-t4-transglycosylation-products"
      ]
    },
    {
      "nodeId": "bio:t4-local-mechanistic-interpretation",
      "role": "hypothesis",
      "denotes": "Conditional T4 residue and reaction-channel interpretation within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-t4-local-mechanistic-interpretation",
        "M-bio-t4-local-mechanistic-interpretation"
      ]
    },
    {
      "nodeId": "bio:enzyme-assay-and-active-site-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped enzyme transformation and localized active-site evidence within the declared protein variant, substrate/probe, preparation, measured response and source interpretation boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-enzyme-assay-and-active-site-scope",
        "M-bio-enzyme-assay-and-active-site-scope"
      ]
    }
  ]
};
