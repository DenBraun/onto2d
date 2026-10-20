// Normative conventions and exact reused KSI preparation limits; no new measurement.
export const BIOCHEMICAL_KINETICS_RECORDS = {
  "sources": [
    {
      "id": "iupac2007-green-book-kinetics-thermodynamics",
      "kind": "research-publication",
      "title": "Quantities, Units and Symbols in Physical Chemistry, IUPAC Green Book, Third Edition",
      "authors": [
        "E. Richard Cohen",
        "Tomislav Cvitaš",
        "Jeremy G. Frey",
        "Bertil Holmström",
        "Kozo Kuchitsu",
        "Roberto Marquardt",
        "Ian Mills",
        "Franco Pavese",
        "Martin Quack",
        "Jürgen Stohner",
        "Herbert L. Strauss",
        "Michio Takami",
        "Anders J Thor"
      ],
      "year": 2007,
      "doi": "10.1039/9781847557889",
      "url": "https://iupac.org/wp-content/uploads/2019/05/IUPAC-GB3-2012-2ndPrinting-PDFsearchable.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-original-pdf-terminology-sections",
        "locators": [
          "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
          "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 63-64, 68: rates, reaction order, transport separation and elementary/composite conventions",
          "Green Book, 3rd ed., section 2.12, pp. 64-66: Arrhenius activation energy; activation quantities and note 18",
          "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium"
        ],
        "limit": "Read selected original PDF text at printed pp. 56, 58, 60-66 and 68, concentrating on the listed definitions, standard-state cautions, rate/transport distinction and note 18. This is not a complete book reading or review of all sections 2.11-2.12.1. PDF text extraction was inspected; attempted screenshots returned reference markers without usable page images, so no visual equation audit is claimed. The title page identifies Third Edition and IUPAC 2007. The IUPAC book index confirms the 2007 edition and corrected 2008/reprinted 2011 history; the hosted filename containing 2012 is not treated as a separate edition. DOI/ISBN metadata were checked against the IUPAC book index and publisher record on 2026-10-20. A newer 2023 abridged fourth edition is listed by IUPAC and was not read. No complete edition comparison, correction audit or later terminology survey is claimed. The inaccessible second-edition PDF and current Gold Book pages were discovery routes, not full-text reads. Additional bioenergetics review on 2026-10-20 read selected original PDF text at printed pp. 70-71, including operational cautions for single-ion quantities and electrochemical-potential note 11. This extends the selected-passage review and does not claim full-section or full-book reading."
      }
    },
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
      "id": "iupac-catalyst",
      "kind": "research-publication",
      "title": "IUPAC Compendium of Chemical Terminology: catalyst (C00876)",
      "authors": [
        "International Union of Pure and Applied Chemistry"
      ],
      "year": 2025,
      "doi": "10.1351/goldbook.C00876",
      "url": "https://goldbook.iupac.org/terms/view/C00876",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-method-passages",
        "locators": [
          "C00876, definition; retrieved 12 September 2026"
        ],
        "limit": "Primary terminology entry, fifth edition. Search-indexed entry text was accessible; the direct page returned HTTP 403. It defines chemical catalysis, not every project use of catalyst."
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
      "id": "D-bio-reaction-gibbs-equilibrium",
      "kind": "review-finding",
      "statement": "For a specified reaction, ΔrG = ΔrG° + RT ln Q and K° = exp(−ΔrG°/RT) = Q at equilibrium. Q uses activities; K° is dimensionless, while concentration- or pressure-based constants can carry units. The reaction equation and standard state determine the quantities.",
      "scope": "Chemical thermodynamic definitions; biochemical reference conventions require separate specification.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
          "role": "supports",
          "note": "Selected original primary terminology passage read; a definition or model convention, not an experimental result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No equilibrium constant or reaction Gibbs energy is measured by the reused KSI assays. This definition does not convert a turnover fit into thermodynamic data.",
        "Solute standard states based on concentration, molality or mole fraction differ. Grouped biochemical species and fixed proton conditions must be declared before using a biochemical reference quantity.",
        "Thermodynamic admissibility does not specify how quickly a preparation approaches its equilibrium, or establish a sustained network flux.",
        "Rate and equilibrium definitions do not arise only after enzymes, cooperativity or metabolic cycles. The selected KSI turnover data contain no cooperative-site, whole-cycle, bulk-liquid-order or network-flux measurement establishing those catalogue parents as necessary causes.",
        "Pathway efficiency, sustained throughput, steady-state maintenance, environmental adaptation and system-level regulatory organization are not measured by the selected variant assays. A driven steady state requires declared supply/removal and coupling conditions; a stationary composition alone does not establish equilibrium.",
        "Original property/phase/level/science labels, established status, substrate/constraint, regulation/environment and gradient/information requirement codes are representation choices. Numerical parent weights 0.40/0.25/0.25/0.10, direction/mode/dependency codes, necessity and one- or two-carrier minima supply no measured hierarchy, criticality or quantitative rate law."
      ]
    },
    {
      "id": "D-bio-elementary-rate-conventions",
      "kind": "review-finding",
      "statement": "At uniform concentration and constant volume, a declared reaction rate is v = νB⁻¹ dcB/dt = (dξ/dt)/V. Reaction and transport contributions are separate. An elementary reaction is one molecular step, conventionally unidirectional; a composite net reaction has no molecularity. In v = k ∏ cB^mB, the units of k depend on overall order.",
      "scope": "Declared concentration-based rate and elementary-step conventions, not a mechanism assignment for every fitted rate.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 63-64, 68: rates, reaction order, transport separation and elementary/composite conventions",
          "role": "supports",
          "note": "Selected original primary terminology passage read; a definition or model convention, not an experimental result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A measured species signal, fitted response coefficient, stoichiometric reaction rate and elementary rate constant are distinct quantities. A model fit alone does not establish an elementary mechanism.",
        "Molecularity counts reactants in a specified elementary step; it does not establish a catalogue carrier minimum, a threshold for an ensemble property, or a minimum number of enzymes or network components.",
        "The reused KSI kcat, KM and kcat/KM retain their existing response-model definitions and units. Neither kcat nor kcat/KM is automatically the elementary k in this definition."
      ]
    },
    {
      "id": "D-bio-activation-gibbs-convention",
      "kind": "review-finding",
      "statement": "For elementary transition-state theory, Δ‡G° = Δ‡H° − TΔ‡S° and k_n = κ(kBT/h)(c°)^(1−n) exp(−Δ‡G°/RT), with the declared concentration/order convention. κ is the transmission coefficient. Arrhenius activation energy, EA = RT² d(ln k)/dT, is a different quantity.",
      "scope": "Elementary-rate model convention with an explicit standard state, temperature and transmission coefficient.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., section 2.12, pp. 64-66: Arrhenius activation energy; activation quantities and note 18",
          "role": "supports",
          "note": "Selected original primary terminology passage read; a definition or model convention, not an experimental result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Green Book restricts these activation quantities to elementary reactions. No microscopic activation Gibbs energy is inferred here from KSI kcat or kcat/KM.",
        "A rate comparison can be expressed as an apparent activation difference only after declaring the same response convention and temperature, compatible baselines and units, and assumptions about transmission and prefactors. It does not isolate one microscopic energetic contribution.",
        "A transition-state model is not direct imaging of a transition configuration. An analogue-bound crystal, a spectroscopic shift and a steady-state rate fit do not independently determine Δ‡G°."
      ]
    },
    {
      "id": "D-bio-catalysis-equilibrium-boundary",
      "kind": "review-finding",
      "statement": "Catalysis changes a reaction rate while preserving its overall standard reaction Gibbs energy. For the same net reaction and standard state, the equilibrium constant therefore remains fixed; this does not require equal changes in every measured kinetic parameter.",
      "scope": "Definition of catalysis and its equilibrium consequence, without a universal enzyme mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac-catalyst",
          "locator": "C00876, definition; retrieved 12 September 2026",
          "role": "supports",
          "note": "Existing exact primary terminology source reused. The selected indexed IUPAC C00876 definition was reread on 20 October 2026; direct Gold Book access returned HTTP 403. No full-compendium reading is claimed."
        },
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
          "role": "supports",
          "note": "Selected original primary terminology passage read; a definition or model convention, not an experimental result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This statement compares the same net reaction at declared conditions; changing reactants, coupled reactions, temperature or solvent cannot be treated as adding only a catalyst.",
        "The reused KSI variant study does not compare the enzyme reaction with an acquired enzyme-free aqueous reference or directly test an equilibrium constant. It therefore does not supply an absolute enzyme-versus-water acceleration."
      ]
    },
    {
      "id": "C-bio-ksi-catalytic-energy-identifiability",
      "kind": "review-finding",
      "statement": "The admitted Kraut 2010 evidence comprises controlled variant turnover, a separate double-mutant analogue structure and a separate phenolate environment probe. Together they support the published conditional solvation interpretation. The turnover losses do not identify an isolated hydrogen-bond energy, a directly observed transition state, or an absolute enzyme-versus-water catalytic acceleration.",
      "scope": "Interpretation boundary of one reused primary publication and its three preparation-specific contexts.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls",
          "role": "supports",
          "note": "Reuse the existing reviewed KSI preparation and primary passage; no new acquisition, reanalysis or expanded reading is implied."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
          "role": "supports",
          "note": "Reuse the existing reviewed KSI preparation and primary passage; no new acquisition, reanalysis or expanded reading is implied."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
          "role": "supports",
          "note": "Reuse the existing reviewed KSI preparation and primary passage; no new acquisition, reanalysis or expanded reading is implied."
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
          "role": "supports",
          "note": "Reuse the existing reviewed KSI preparation and primary passage; no new acquisition, reanalysis or expanded reading is implied."
        }
      ],
      "checkIds": [],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ],
      "limitations": [
        "This is an interpretation of existing records, not a new acquisition, reanalysis, independent reproduction or additional source publication. The three method contexts do not increase the publication count.",
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "The smaller 190-260-fold losses of Y16A/G/S/T versus the 19,000-fold Y16F loss do not isolate a single hydrogen bond. Mutations alter solvation, packing and potentially other energetic contributions; the source emphasizes that comparisons must specify the water-solvated reference reaction.",
        "A water-filled cavity and a more desolvating Phe surface are source-supported mechanistic interpretations, not direct observations of the transient reacting dienolate or an experimental decomposition of transition-state stabilization.",
        "The proposed approximately 200-fold Tyr16 contribution relative to aqueous hydrogen bonding is explicitly crude and assumes cavity-water energetics resemble the solution reference and no propagating structural effects. It is not an admitted exact universal catalytic energy.",
        "No new constant electric field, universal active-site mechanism, cofactor requirement, global conformational coupling, regulatory pathway or proto-life function follows.",
        "The printed Y16F Table S2 conflict is retained in the reused kinetic record: kcat and KM central values do not exactly yield the printed kcat/KM. No repair or new fit is supplied.",
        "The source reports turnover perturbations, not a measured equilibrium constant, calorimetric hydrogen-bond decomposition, full activation-parameter temperature series, metabolic flux or quantum-tunneling effect.",
        "The selected primary source supplies a conditional KSI solvation interpretation, not measured universal electrostatic, hydration, conformational or quantum contributions to transition-state stabilization. Separate ground-state cryogenic tunnelling or molecular-bonding examples are not matched KSI interventions or evidence of a necessary quantum/hydration ancestor.",
        "No isotope effect, complete activation-temperature series, full reaction-path calculation, transition-state movie, mechanism-wide selectivity panel, metabolic regulation or universal catalytic-efficiency law is admitted by this scope.",
        "Original property/phase/level/science/status and requirement classifications are not empirical results. Parent weights 0.45/0.30/0.15/0.10, downward-direction and dependency codes, necessity and unit carrier minima are not calibrated energetic contributions, universal thresholds or a causal construction sequence."
      ]
    },
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
    }
  ],
  "entities": [
    {
      "id": "bio:reaction-gibbs-equilibrium",
      "name": "Reaction Gibbs energy and standard equilibrium conventions",
      "kind": "quantity-definition",
      "description": "Definitions of reaction Gibbs energy, reaction quotient and equilibrium constant under a specified reaction equation and reference state.",
      "claimIds": [
        "D-bio-reaction-gibbs-equilibrium"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/21"
        }
      ],
      "openObligations": [
        "No equilibrium constant or reaction Gibbs energy is measured by the reused KSI assays. This definition does not convert a turnover fit into thermodynamic data.",
        "Solute standard states based on concentration, molality or mole fraction differ. Grouped biochemical species and fixed proton conditions must be declared before using a biochemical reference quantity.",
        "Thermodynamic admissibility does not specify how quickly a preparation approaches its equilibrium, or establish a sustained network flux.",
        "Rate and equilibrium definitions do not arise only after enzymes, cooperativity or metabolic cycles. The selected KSI turnover data contain no cooperative-site, whole-cycle, bulk-liquid-order or network-flux measurement establishing those catalogue parents as necessary causes.",
        "Pathway efficiency, sustained throughput, steady-state maintenance, environmental adaptation and system-level regulatory organization are not measured by the selected variant assays. A driven steady state requires declared supply/removal and coupling conditions; a stationary composition alone does not establish equilibrium.",
        "Original property/phase/level/science labels, established status, substrate/constraint, regulation/environment and gradient/information requirement codes are representation choices. Numerical parent weights 0.40/0.25/0.25/0.10, direction/mode/dependency codes, necessity and one- or two-carrier minima supply no measured hierarchy, criticality or quantitative rate law."
      ]
    },
    {
      "id": "bio:elementary-rate-conventions",
      "name": "Reaction-rate and elementary-step conventions",
      "kind": "quantity-definition",
      "description": "Conventions that separate observed concentration change, reaction rate, reaction order and elementary-step molecularity.",
      "claimIds": [
        "D-bio-elementary-rate-conventions"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 63-64, 68: rates, reaction order, transport separation and elementary/composite conventions"
        }
      ],
      "openObligations": [
        "A measured species signal, fitted response coefficient, stoichiometric reaction rate and elementary rate constant are distinct quantities. A model fit alone does not establish an elementary mechanism.",
        "Molecularity counts reactants in a specified elementary step; it does not establish a catalogue carrier minimum, a threshold for an ensemble property, or a minimum number of enzymes or network components.",
        "The reused KSI kcat, KM and kcat/KM retain their existing response-model definitions and units. Neither kcat nor kcat/KM is automatically the elementary k in this definition."
      ]
    },
    {
      "id": "bio:activation-gibbs-convention",
      "name": "Activation Gibbs energy in elementary transition-state theory",
      "kind": "quantity-definition",
      "description": "Activation Gibbs energy and its rate relation under the stated elementary-rate and standard-state convention.",
      "claimIds": [
        "D-bio-activation-gibbs-convention"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., section 2.12, pp. 64-66: Arrhenius activation energy; activation quantities and note 18"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/32"
        }
      ],
      "openObligations": [
        "The Green Book restricts these activation quantities to elementary reactions. No microscopic activation Gibbs energy is inferred here from KSI kcat or kcat/KM.",
        "A rate comparison can be expressed as an apparent activation difference only after declaring the same response convention and temperature, compatible baselines and units, and assumptions about transmission and prefactors. It does not isolate one microscopic energetic contribution.",
        "A transition-state model is not direct imaging of a transition configuration. An analogue-bound crystal, a spectroscopic shift and a steady-state rate fit do not independently determine Δ‡G°."
      ]
    },
    {
      "id": "bio:catalysis-equilibrium-boundary",
      "name": "Catalytic rate changes and the equilibrium boundary",
      "kind": "definition",
      "description": "The definitional boundary between catalytic rate changes and the net reaction equilibrium at fixed conditions.",
      "claimIds": [
        "D-bio-catalysis-equilibrium-boundary"
      ],
      "status": "definition",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "iupac-catalyst",
          "locator": "C00876, definition; retrieved 12 September 2026"
        },
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states"
        }
      ],
      "openObligations": [
        "This statement compares the same net reaction at declared conditions; changing reactants, coupled reactions, temperature or solvent cannot be treated as adding only a catalyst.",
        "The reused KSI variant study does not compare the enzyme reaction with an acquired enzyme-free aqueous reference or directly test an equilibrium constant. It therefore does not supply an absolute enzyme-versus-water acceleration."
      ]
    },
    {
      "id": "bio:ksi-catalytic-energy-identifiability",
      "name": "KSI limits on microscopic catalytic-energy inference",
      "kind": "hypothesis",
      "description": "A bounded interpretation of the admitted KSI variant, analogue-structure and probe records, retaining their separate preparations and solvation assumptions.",
      "claimIds": [
        "C-bio-ksi-catalytic-energy-identifiability",
        "M-bio-ksi-solvation-interpretation"
      ],
      "status": "evidence-scoped",
      "level": 3,
      "sourceCoordinates": [
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls"
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4"
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2"
        },
        {
          "sourceId": "kraut2010-ksi-oxyanion-mutations",
          "locator": "PNAS 107(5),1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/32"
        }
      ],
      "openObligations": [
        "This is an interpretation of existing records, not a new acquisition, reanalysis, independent reproduction or additional source publication. The three method contexts do not increase the publication count.",
        "The new crystal is the double mutant Y16S/D40N with an intermediate analogue, not the catalytically assayed Y16S single mutant with reacting 5(10)-EST. D40N is introduced to mimic the protonated general-base state ; transferring structural interpretation to catalysis is conditional.",
        "Crystal data are collected at 100 K after crystallization at 20 C. The crystallization reservoir is pH 7.2 in SI, rounded to pH 7 in main text; neither equals a measured catalytic trajectory at room temperature.",
        "Distances are refined model quantities. The 6.4 angstrom Ser16-to-equilenin oxygen separation excludes that direct donor geometry in this crystal, but does not directly observe a transition state, proton transfer, electric field or hydrogen-bond energy.",
        "The smaller 190-260-fold losses of Y16A/G/S/T versus the 19,000-fold Y16F loss do not isolate a single hydrogen bond. Mutations alter solvation, packing and potentially other energetic contributions; the source emphasizes that comparisons must specify the water-solvated reference reaction.",
        "A water-filled cavity and a more desolvating Phe surface are source-supported mechanistic interpretations, not direct observations of the transient reacting dienolate or an experimental decomposition of transition-state stabilization.",
        "The proposed approximately 200-fold Tyr16 contribution relative to aqueous hydrogen bonding is explicitly crude and assumes cavity-water energetics resemble the solution reference and no propagating structural effects. It is not an admitted exact universal catalytic energy.",
        "No new constant electric field, universal active-site mechanism, cofactor requirement, global conformational coupling, regulatory pathway or proto-life function follows.",
        "The printed Y16F Table S2 conflict is retained in the reused kinetic record: kcat and KM central values do not exactly yield the printed kcat/KM. No repair or new fit is supplied.",
        "The source reports turnover perturbations, not a measured equilibrium constant, calorimetric hydrogen-bond decomposition, full activation-parameter temperature series, metabolic flux or quantum-tunneling effect.",
        "The selected primary source supplies a conditional KSI solvation interpretation, not measured universal electrostatic, hydration, conformational or quantum contributions to transition-state stabilization. Separate ground-state cryogenic tunnelling or molecular-bonding examples are not matched KSI interventions or evidence of a necessary quantum/hydration ancestor.",
        "No isotope effect, complete activation-temperature series, full reaction-path calculation, transition-state movie, mechanism-wide selectivity panel, metabolic regulation or universal catalytic-efficiency law is admitted by this scope.",
        "Original property/phase/level/science/status and requirement classifications are not empirical results. Parent weights 0.45/0.30/0.15/0.10, downward-direction and dependency codes, necessity and unit carrier minima are not calibrated energetic contributions, universal thresholds or a causal construction sequence."
      ]
    },
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
    }
  ],
  "relations": [
    {
      "id": "biochemistry:elementary-rate-conventions-activation-gibbs-convention",
      "source": "bio:elementary-rate-conventions",
      "target": "bio:activation-gibbs-convention",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The activation-rate expression uses the declared elementary-step and reaction-order convention.",
      "claimIds": [
        "D-bio-elementary-rate-conventions",
        "D-bio-activation-gibbs-convention"
      ]
    },
    {
      "id": "biochemistry:reaction-gibbs-equilibrium-catalysis-equilibrium-boundary",
      "source": "bio:reaction-gibbs-equilibrium",
      "target": "bio:catalysis-equilibrium-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The catalytic equilibrium boundary refers to the same net reaction and thermodynamic standard state.",
      "claimIds": [
        "D-bio-reaction-gibbs-equilibrium",
        "D-bio-catalysis-equilibrium-boundary"
      ]
    },
    {
      "id": "biochemistry:ksi-solvation-interpretation-ksi-catalytic-energy-identifiability",
      "source": "bio:ksi-solvation-interpretation",
      "target": "bio:ksi-catalytic-energy-identifiability",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared KSI kinetic, analogue and probe comparisons constrain microscopic energy assignments only within their declared solvation and preparation assumptions.",
      "claimIds": [
        "C-bio-ksi-catalytic-energy-identifiability",
        "M-bio-ksi-solvation-interpretation"
      ],
      "contextIds": [
        "kraut2010-ksi-kinetic-context",
        "kraut2010-ksi-structure-context",
        "kraut2010-ksi-probe-context"
      ]
    },
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
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:reaction-gibbs-equilibrium",
      "role": "quantity-definition",
      "denotes": "Definitions of reaction Gibbs energy, reaction quotient and equilibrium constant under a specified reaction equation and reference state.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-reaction-gibbs-equilibrium"
      ]
    },
    {
      "nodeId": "bio:elementary-rate-conventions",
      "role": "quantity-definition",
      "denotes": "Conventions that separate observed concentration change, reaction rate, reaction order and elementary-step molecularity.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-elementary-rate-conventions"
      ]
    },
    {
      "nodeId": "bio:activation-gibbs-convention",
      "role": "quantity-definition",
      "denotes": "Activation Gibbs energy and its rate relation under the stated elementary-rate and standard-state convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-activation-gibbs-convention"
      ]
    },
    {
      "nodeId": "bio:catalysis-equilibrium-boundary",
      "role": "definition",
      "denotes": "The definitional boundary between catalytic rate changes and the net reaction equilibrium at fixed conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-catalysis-equilibrium-boundary"
      ]
    },
    {
      "nodeId": "bio:ksi-catalytic-energy-identifiability",
      "role": "hypothesis",
      "denotes": "A bounded interpretation of the admitted KSI variant, analogue-structure and probe records, retaining their separate preparations and solvation assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ksi-catalytic-energy-identifiability",
        "M-bio-ksi-solvation-interpretation"
      ]
    },
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
    }
  ]
};
