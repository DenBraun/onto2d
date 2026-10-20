// Separate demixing, tracer/partition, lipid chemistry and membrane-morphology evidence.
export const CONDENSATE_LIPID_RECORDS = {
  "sources": [
    {
      "id": "nott2015-ddx4-demixing",
      "kind": "research-publication",
      "title": "Phase Transition of a Disordered Nuage Protein Generates Environmentally Responsive Membraneless Organelles",
      "authors": [
        "Timothy J. Nott",
        "Evangelia Petsalaki",
        "Patrick Farber",
        "Dylan Jervis",
        "Eden Fussner",
        "Anne Plochowietz",
        "Timothy D. Craggs",
        "David P. Bazett-Jones",
        "Tony Pawson",
        "Julie D. Forman-Kay",
        "Andrew J. Baldwin"
      ],
      "year": 2015,
      "doi": "10.1016/j.molcel.2015.01.013",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4352761/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-main-article-and-selected-supporting-information",
        "locators": [
          "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        ],
        "limit": "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; A later Comment in record is not a correction. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
      }
    },
    {
      "id": "exterkate2018-phospholipid-synthesis",
      "kind": "research-publication",
      "title": "Growing Membranes In Vitro by Continuous Phospholipid Biosynthesis from Free Fatty Acids",
      "authors": [
        "Marten Exterkate",
        "Antonella Caforio",
        "Marc C. A. Stuart",
        "Arnold J. M. Driessen"
      ],
      "year": 2018,
      "doi": "10.1021/acssynbio.7b00265",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5778391/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-main-article-and-complete-six-page-supporting-information",
        "locators": [
          "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        ],
        "limit": "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; No linked comment/correction was found there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
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
      "id": "M-bio-nott2015-ddx4-thermal-demixing-context",
      "kind": "method",
      "statement": "Source Figure 3D supplied purified Ddx4N1 N-terminal disordered protein (residues 1-236), 202 micromolar, 200 mM NaCl, pH 8. The same source sample is imaged through cooling from 50 to 22 degrees C and reheating, with repeated cycles. The figure demonstration uses 4 degrees C/min; the separate SI cloud-point sampling defaults to 2 degrees C/min. Retain onset/disappearance hysteresis and operational image/turbidity detection; no universal equilibrium transition is inferred.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing"
      ]
    },
    {
      "id": "M-bio-nott2015-ddx4-frap-context",
      "kind": "method",
      "statement": "Source in vitro Figure 3C fluorescent recovery in a roughly 10-micrometer dense Ddx4 droplet at 20 degrees C and nominal 150 mM NaCl. The main text gives Ddx4N1:Ddx4YFP 60:1, whereas SI pages 15-16 list 292.5 micromolar Ddx4N1 plus 8.1 micromolar each Ddx4YFP and free CFP before dilution/hanging-drop equilibration. These composition annotations are unresolved. Use only qualitative fluorescence recovery under the reported preparation, without adopting an exact common mixture or new diffusion coefficient.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-frap"
      ]
    },
    {
      "id": "M-bio-nott2015-ddx4-dna-partition-context",
      "kind": "method",
      "statement": "Source Figure 7 and SI Section S8 separate in vitro Ddx4N1 droplet preparation: nominal total protein 162.5 micromolar, 150 mM NaCl after mixing, 1 micromolar total fluorescent 32-base ssDNA or 32-base-paired dsDNA, with a no-DNA fluorescence background. Confocal emission is volume-normalized across ten inside/ten outside regions in each of three fields. Source K is outside/inside. Main paragraph dye annotation differs from caption/method; no exact partition/free-energy or intrinsic binding constant is newly admitted.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "M-bio-exterkate2018-pa-time-course-context",
      "kind": "method",
      "statement": "Source SI Figure S3 PA time course with supplied FadD, PlsB and PlsC in pre-existing liposomes and externally supplied oleic acid, CoA, ATP and glycerol 3-phosphate. The explicit SI procedure uses assay buffer at pH 8 with magnesium, KCl, glycerol and reductant, 2.7 mM oleic acid, 2.67 mM liposomal lipid, 50 micromolar CoA, 5 mM ATP and 1 micromolar PlsB; these are different from the general main PA default. Extracted lipid ion signals are assigned by LC-MS and normalized to DDM. This is a finite three-enzyme PA subsystem, not every eight-enzyme PE/PG assay.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-pa-time-course"
      ]
    },
    {
      "id": "M-bio-exterkate2018-r18-lipid-dilution-context",
      "kind": "method",
      "statement": "Source Figure 6 R18 self-quenching assay in pre-existing 2.67 mM DOPC/DOPG/DOPE liposomes with 5 mole percent R18, supplied 2.7 mM oleic acid and the three PA enzymes/resources. Compare the stated spectra before/after fatty-acid addition and PA conversion, with Triton maximal emission normalization. This preparation is separate from SI S3 chemistry and PG cryo-EM; a dye-dilution signal alone is not isolated synthesis-driven bilayer-area growth.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-r18-lipid-dilution"
      ]
    },
    {
      "id": "M-bio-exterkate2018-membrane-morphology-context",
      "kind": "method",
      "statement": "Source Figure 7 PG-pathway cryo-EM snapshots of pre-existing vesicles: initial material, 1.5 mM oleic-acid addition, subsequent phospholipid-production/stacked states and EDTA-treated material. A second preparation combines lower magnesium with supplied 0.3 mM fatty-acid doses to 1.5 mM total. Exact lower magnesium and some morphological sampling details are unresolved. The two preparations change more than one variable and are not tracked vesicle lineages or the R18 PA sample.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "D-bio-condensate-demixing-measurement-boundary",
      "kind": "review-finding",
      "statement": "Distinguish reversible dense/dilute protein demixing, qualitative tracer mobility, labeled-solute partition and fitted interaction models. One supplied Ddx4 terminal-region preparation family does not establish all coacervates, catalytic enhancement, a unique microscopic force, equilibrium criticality or membrane-like transport/gradient control.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ]
    },
    {
      "id": "D-bio-lipid-synthesis-membrane-growth-boundary",
      "kind": "review-finding",
      "statement": "Distinguish phospholipid chemical conversion, pre-existing membranes, fatty-acid incorporation, dye dequenching, cryo-EM morphology and measured membrane function. Supplied enzymatic lipid synthesis can accompany membrane-material reorganization without showing the origin of a first membrane, selective permeability, stabilized gradients or autonomous division.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ]
    },
    {
      "id": "M-bio-ddx4-condensate-interpretation-method",
      "kind": "method",
      "statement": "Interpret Ddx4 thermal appearance/disappearance, qualitative fluorescent recovery and labeled-DNA partition jointly while retaining all three separate preparations. Treat Flory-Huggins/electrostatic parameters and concentration/free-energy conversions as conditional inferences, not direct molecular measurements; preserve FRAP mixture and dye annotations.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing",
        "nott2015-ddx4-frap",
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "M-bio-lipid-membrane-interpretation-method",
      "kind": "method",
      "statement": "Interpret PA ion-signal conversion, R18 dequenching and PG-pathway morphology together without merging their different enzyme/substrate/assay conditions. Preserve the fatty-acid-triggered optical signal, multi-variable dosing/magnesium changes, pre-existing lipid requirement and unknown permeability/gradient function. Do not turn morphology or a source yield estimate into autonomous boundary formation.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "method",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "C-bio-ddx4-reversible-demixing",
      "kind": "review-finding",
      "statement": "In source Figure 3D the supplied disordered Ddx4N1 sample develops dense droplets/turbidity during cooling and becomes optically dispersed again upon heating; repeated cycles use the same sample. This supports reversible source-specific demixing with onset/disappearance hysteresis, not a universal concentration threshold or a folded-helicase catalytic mechanism.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing"
      ]
    },
    {
      "id": "C-bio-ddx4-qualitative-droplet-mobility",
      "kind": "review-finding",
      "statement": "The source in vitro Ddx4 droplet fluorescence recovers following photobleaching, supporting mobility of the tracer in that reported preparation. The main/SI mixture annotations and diffusion-model assumptions preclude an independently admitted exact diffusion constant or universal viscosity/exchange mechanism.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-frap"
      ]
    },
    {
      "id": "C-bio-ddx4-labeled-dna-partition",
      "kind": "review-finding",
      "statement": "The source background-subtracted confocal images show higher ssDNA-associated signal inside the Ddx4N1 droplets and lower dsDNA-associated signal there relative to surrounding solution. This is a finite fluorescent-solute partition observation under source dye/photophysics and sampling assumptions, not a general DNA-sequence specificity panel, kinetic transport measurement or measured reaction-rate benefit.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "contextIds": [
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "C-bio-condensate-phase-separation-source-scope",
      "kind": "review-finding",
      "statement": "Card 3.18 is qualified to supplied disordered Ddx4 terminal-region reversible demixing, qualitative tracer mobility and labeled-DNA partition in three distinct source preparations. No universal coacervate family, directly resolved fusion or fission mechanism, catalytic/metabolic benefit, measured solvent ordering or first protocellular compartment follows. Original protein-folding, enzyme-catalysis and prior metabolic-compartment necessities are not established.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced.",
        "Original level, phase, type-role, science arrays and scientific-status labels are catalogue declarations, not independent reproduction, universal ontological arising or identified event instances. All node instance admissions remain none.",
        "Generic original Evidence paragraphs with null DOI/URL create no additional polymer-theory papers, microscopic-interaction measurements, coacervate families, permeability studies or lipidomics experiments.",
        "Original weights, necessity, causal directions/modes, dependency types, ontological arising, carrier group/type, numerical minima/critical counts and null saturation are not measured effect fractions, universal gates or molecule-count laws.",
        "The separate folding, enzyme-catalysis, metabolic-compartment and bulk-liquid studies are not matched necessary mediators of this preparation. N-terminal disorder without the helicase prevents a universal folding/catalysis ancestry inference. No original weights, critical molecule counts or biological-origin sequence is admitted."
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing",
        "nott2015-ddx4-frap",
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "C-bio-supplied-pa-chemical-conversion",
      "kind": "review-finding",
      "statement": "In the declared SI Figure S3 source preparation, internal-standard-normalized LC-MS signals show oleic-acid loss and PA product accumulation during the supplied three-enzyme reaction in pre-existing liposomes. This supports finite phospholipid chemical production; absolute conversion yields, species response/uncertainty and resource autonomy are not independently reconstructed.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-pa-time-course"
      ]
    },
    {
      "id": "C-bio-fatty-acid-r18-dequenching",
      "kind": "review-finding",
      "statement": "Source Figure 6 shows R18 fluorescence increasing on addition of oleic acid to pre-existing labeled liposomes; subsequent PA synthesis adds little further fluorescence change. The source uses dye-dilution assumptions to estimate membrane expansion, while the immediate optical response itself does not depend on enzymatic lipid synthesis or uniquely identify increased bilayer surface area.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-r18-lipid-dilution"
      ]
    },
    {
      "id": "C-bio-phospholipid-preparation-morphology",
      "kind": "review-finding",
      "statement": "Source cryo-EM snapshots show initial vesicles, larger/swollen structures after fatty-acid addition, stacked multilamellar-like material during the high-dose PG pathway and vesicles after EDTA. A distinct lower-magnesium/dosed-feed preparation yields larger vesicles without the displayed stacking. The combined preparation changes do not isolate one causal variable or establish continuous single-vesicle growth, division or membrane barrier function.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "C-bio-supplied-lipid-membrane-account",
      "kind": "review-finding",
      "statement": "Joint source chemistry, optical and morphology evidence supports phospholipid production with reorganization/expansion of an already supplied membrane population under selected preparations. The R18 increase precedes chemical conversion and morphology preparations differ, so the account does not identify an isolated synthesis-to-area effect, first boundary origin, controlled permeability or self-maintaining cell.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "C-bio-lipid-biosynthesis-membrane-source-scope",
      "kind": "review-finding",
      "statement": "Card 3.27 is qualified to externally supplied enzyme-mediated phospholipid production and finite changes of pre-existing liposomes. The source explicitly does not achieve de novo membrane formation with this pathway. Selective permeability, maintained gradients, localized competing metabolism, autonomous growth/division and universal boundary-generation ancestry remain outside admission.",
      "scope": "Only the source-defined finite preparation/observable or its explicit interpretation boundary.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
          "role": "supports",
          "note": "Actually read the declared primary passages; preserve preparation, method/model/proxy and unresolved-source limits. No independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established.",
        "Original level, phase, type-role, science arrays and scientific-status labels are catalogue declarations, not independent reproduction, universal ontological arising or identified event instances. All node instance admissions remain none.",
        "Generic original Evidence paragraphs with null DOI/URL create no additional polymer-theory papers, microscopic-interaction measurements, coacervate families, permeability studies or lipidomics experiments.",
        "Original weights, necessity, causal directions/modes, dependency types, ontological arising, carrier group/type, numerical minima/critical counts and null saturation are not measured effect fractions, universal gates or molecule-count laws.",
        "The separate folding, enzyme-catalysis, metabolic-compartment and bulk-liquid studies are not matched necessary mediators of this preparation. Mature enzymes and pre-existing lipids are supplied; no biosynthesis/folding origin, general metabolic efficiency, universal carrier threshold or unbounded continuous production is admitted."
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:nott2015-ddx4-thermal-demixing-context",
      "name": "Ddx4 thermal demixing context",
      "kind": "context",
      "description": "Source Figure 3D supplied purified Ddx4N1 N-terminal disordered protein (residues 1-236), 202 micromolar, 200 mM NaCl, pH 8. The same source sample is imaged through cooling from 50 to 22 degrees C and reheating, with repeated cycles. The figure demonstration uses 4 degrees C/min; the separate SI cloud-point sampling defaults to 2 degrees C/min. Retain onset/disappearance hysteresis and operational image/turbidity detection; no universal equilibrium transition is inferred.",
      "claimIds": [
        "M-bio-nott2015-ddx4-thermal-demixing-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:nott2015-ddx4-frap-context",
      "name": "Ddx4 qualitative FRAP context",
      "kind": "context",
      "description": "Source in vitro Figure 3C fluorescent recovery in a roughly 10-micrometer dense Ddx4 droplet at 20 degrees C and nominal 150 mM NaCl. The main text gives Ddx4N1:Ddx4YFP 60:1, whereas SI pages 15-16 list 292.5 micromolar Ddx4N1 plus 8.1 micromolar each Ddx4YFP and free CFP before dilution/hanging-drop equilibration. These composition annotations are unresolved. Use only qualitative fluorescence recovery under the reported preparation, without adopting an exact common mixture or new diffusion coefficient.",
      "claimIds": [
        "M-bio-nott2015-ddx4-frap-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:nott2015-ddx4-dna-partition-context",
      "name": "Ddx4 labeled-DNA partition context",
      "kind": "context",
      "description": "Source Figure 7 and SI Section S8 separate in vitro Ddx4N1 droplet preparation: nominal total protein 162.5 micromolar, 150 mM NaCl after mixing, 1 micromolar total fluorescent 32-base ssDNA or 32-base-paired dsDNA, with a no-DNA fluorescence background. Confocal emission is volume-normalized across ten inside/ten outside regions in each of three fields. Source K is outside/inside. Main paragraph dye annotation differs from caption/method; no exact partition/free-energy or intrinsic binding constant is newly admitted.",
      "claimIds": [
        "M-bio-nott2015-ddx4-dna-partition-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:exterkate2018-pa-time-course-context",
      "name": "Supplied PA synthesis context",
      "kind": "context",
      "description": "Source SI Figure S3 PA time course with supplied FadD, PlsB and PlsC in pre-existing liposomes and externally supplied oleic acid, CoA, ATP and glycerol 3-phosphate. The explicit SI procedure uses assay buffer at pH 8 with magnesium, KCl, glycerol and reductant, 2.7 mM oleic acid, 2.67 mM liposomal lipid, 50 micromolar CoA, 5 mM ATP and 1 micromolar PlsB; these are different from the general main PA default. Extracted lipid ion signals are assigned by LC-MS and normalized to DDM. This is a finite three-enzyme PA subsystem, not every eight-enzyme PE/PG assay.",
      "claimIds": [
        "M-bio-exterkate2018-pa-time-course-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:exterkate2018-r18-lipid-dilution-context",
      "name": "Membrane R18 dye-dilution context",
      "kind": "context",
      "description": "Source Figure 6 R18 self-quenching assay in pre-existing 2.67 mM DOPC/DOPG/DOPE liposomes with 5 mole percent R18, supplied 2.7 mM oleic acid and the three PA enzymes/resources. Compare the stated spectra before/after fatty-acid addition and PA conversion, with Triton maximal emission normalization. This preparation is separate from SI S3 chemistry and PG cryo-EM; a dye-dilution signal alone is not isolated synthesis-driven bilayer-area growth.",
      "claimIds": [
        "M-bio-exterkate2018-r18-lipid-dilution-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:exterkate2018-membrane-morphology-context",
      "name": "Membrane morphology context",
      "kind": "context",
      "description": "Source Figure 7 PG-pathway cryo-EM snapshots of pre-existing vesicles: initial material, 1.5 mM oleic-acid addition, subsequent phospholipid-production/stacked states and EDTA-treated material. A second preparation combines lower magnesium with supplied 0.3 mM fatty-acid doses to 1.5 mM total. Exact lower magnesium and some morphological sampling details are unresolved. The two preparations change more than one variable and are not tracked vesicle lineages or the R18 PA sample.",
      "claimIds": [
        "M-bio-exterkate2018-membrane-morphology-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:condensate-demixing-measurement-boundary",
      "name": "Demixing, mobility and partition boundary",
      "kind": "definition",
      "description": "Distinguish reversible dense/dilute protein demixing, qualitative tracer mobility, labeled-solute partition and fitted interaction models. One supplied Ddx4 terminal-region preparation family does not establish all coacervates, catalytic enhancement, a unique microscopic force, equilibrium criticality or membrane-like transport/gradient control.",
      "claimIds": [
        "D-bio-condensate-demixing-measurement-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:lipid-synthesis-membrane-growth-boundary",
      "name": "Lipid synthesis and boundary readout boundary",
      "kind": "definition",
      "description": "Distinguish phospholipid chemical conversion, pre-existing membranes, fatty-acid incorporation, dye dequenching, cryo-EM morphology and measured membrane function. Supplied enzymatic lipid synthesis can accompany membrane-material reorganization without showing the origin of a first membrane, selective permeability, stabilized gradients or autonomous division.",
      "claimIds": [
        "D-bio-lipid-synthesis-membrane-growth-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:ddx4-reversible-demixing",
      "name": "Reversible Ddx4 terminal-region demixing",
      "kind": "scoped-process",
      "description": "In source Figure 3D the supplied disordered Ddx4N1 sample develops dense droplets/turbidity during cooling and becomes optically dispersed again upon heating; repeated cycles use the same sample. This supports reversible source-specific demixing with onset/disappearance hysteresis, not a universal concentration threshold or a folded-helicase catalytic mechanism.",
      "claimIds": [
        "C-bio-ddx4-reversible-demixing",
        "M-bio-nott2015-ddx4-thermal-demixing-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:ddx4-qualitative-droplet-mobility",
      "name": "Qualitative Ddx4 droplet fluorescence recovery",
      "kind": "scoped-process",
      "description": "The source in vitro Ddx4 droplet fluorescence recovers following photobleaching, supporting mobility of the tracer in that reported preparation. The main/SI mixture annotations and diffusion-model assumptions preclude an independently admitted exact diffusion constant or universal viscosity/exchange mechanism.",
      "claimIds": [
        "C-bio-ddx4-qualitative-droplet-mobility",
        "M-bio-nott2015-ddx4-frap-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:ddx4-labeled-dna-partition",
      "name": "Ddx4 labeled-DNA partition proxy",
      "kind": "scoped-process",
      "description": "The source background-subtracted confocal images show higher ssDNA-associated signal inside the Ddx4N1 droplets and lower dsDNA-associated signal there relative to surrounding solution. This is a finite fluorescent-solute partition observation under source dye/photophysics and sampling assumptions, not a general DNA-sequence specificity panel, kinetic transport measurement or measured reaction-rate benefit.",
      "claimIds": [
        "C-bio-ddx4-labeled-dna-partition",
        "M-bio-nott2015-ddx4-dna-partition-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "level": 3
    },
    {
      "id": "bio:condensate-phase-separation-source-scope",
      "name": "Finite Ddx4 condensate scope",
      "kind": "scoped-process",
      "description": "Card 3.18 is qualified to supplied disordered Ddx4 terminal-region reversible demixing, qualitative tracer mobility and labeled-DNA partition in three distinct source preparations. No universal coacervate family, directly resolved fusion or fission mechanism, catalytic/metabolic benefit, measured solvent ordering or first protocellular compartment follows. Original protein-folding, enzyme-catalysis and prior metabolic-compartment necessities are not established.",
      "claimIds": [
        "C-bio-condensate-phase-separation-source-scope",
        "M-bio-ddx4-condensate-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention"
        },
        {
          "sourceId": "nott2015-ddx4-demixing",
          "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/18"
        }
      ],
      "openObligations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced.",
        "Original level, phase, type-role, science arrays and scientific-status labels are catalogue declarations, not independent reproduction, universal ontological arising or identified event instances. All node instance admissions remain none.",
        "Generic original Evidence paragraphs with null DOI/URL create no additional polymer-theory papers, microscopic-interaction measurements, coacervate families, permeability studies or lipidomics experiments.",
        "Original weights, necessity, causal directions/modes, dependency types, ontological arising, carrier group/type, numerical minima/critical counts and null saturation are not measured effect fractions, universal gates or molecule-count laws.",
        "The separate folding, enzyme-catalysis, metabolic-compartment and bulk-liquid studies are not matched necessary mediators of this preparation. N-terminal disorder without the helicase prevents a universal folding/catalysis ancestry inference. No original weights, critical molecule counts or biological-origin sequence is admitted."
      ],
      "level": 3
    },
    {
      "id": "bio:supplied-pa-chemical-conversion",
      "name": "Finite supplied phosphatidic-acid production",
      "kind": "scoped-process",
      "description": "In the declared SI Figure S3 source preparation, internal-standard-normalized LC-MS signals show oleic-acid loss and PA product accumulation during the supplied three-enzyme reaction in pre-existing liposomes. This supports finite phospholipid chemical production; absolute conversion yields, species response/uncertainty and resource autonomy are not independently reconstructed.",
      "claimIds": [
        "C-bio-supplied-pa-chemical-conversion",
        "M-bio-exterkate2018-pa-time-course-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:fatty-acid-r18-dequenching",
      "name": "Fatty-acid-associated R18 dequenching",
      "kind": "scoped-process",
      "description": "Source Figure 6 shows R18 fluorescence increasing on addition of oleic acid to pre-existing labeled liposomes; subsequent PA synthesis adds little further fluorescence change. The source uses dye-dilution assumptions to estimate membrane expansion, while the immediate optical response itself does not depend on enzymatic lipid synthesis or uniquely identify increased bilayer surface area.",
      "claimIds": [
        "C-bio-fatty-acid-r18-dequenching",
        "M-bio-exterkate2018-r18-lipid-dilution-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:phospholipid-preparation-morphology",
      "name": "Preparation-dependent membrane morphology",
      "kind": "scoped-process",
      "description": "Source cryo-EM snapshots show initial vesicles, larger/swollen structures after fatty-acid addition, stacked multilamellar-like material during the high-dose PG pathway and vesicles after EDTA. A distinct lower-magnesium/dosed-feed preparation yields larger vesicles without the displayed stacking. The combined preparation changes do not isolate one causal variable or establish continuous single-vesicle growth, division or membrane barrier function.",
      "claimIds": [
        "C-bio-phospholipid-preparation-morphology",
        "M-bio-exterkate2018-membrane-morphology-context"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:supplied-lipid-membrane-account",
      "name": "Conditional supplied lipid-membrane account",
      "kind": "scoped-process",
      "description": "Joint source chemistry, optical and morphology evidence supports phospholipid production with reorganization/expansion of an already supplied membrane population under selected preparations. The R18 increase precedes chemical conversion and morphology preparations differ, so the account does not identify an isolated synthesis-to-area effect, first boundary origin, controlled permeability or self-maintaining cell.",
      "claimIds": [
        "C-bio-supplied-lipid-membrane-account",
        "M-bio-lipid-membrane-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "level": 3
    },
    {
      "id": "bio:lipid-biosynthesis-membrane-source-scope",
      "name": "Finite lipid biosynthesis and membrane scope",
      "kind": "scoped-process",
      "description": "Card 3.27 is qualified to externally supplied enzyme-mediated phospholipid production and finite changes of pre-existing liposomes. The source explicitly does not achieve de novo membrane formation with this pathway. Selective permeability, maintained gradients, localized competing metabolism, autonomous growth/division and universal boundary-generation ancestry remain outside admission.",
      "claimIds": [
        "C-bio-lipid-biosynthesis-membrane-source-scope",
        "M-bio-lipid-membrane-interpretation-method"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation"
        },
        {
          "sourceId": "exterkate2018-phospholipid-synthesis",
          "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/27"
        }
      ],
      "openObligations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established.",
        "Original level, phase, type-role, science arrays and scientific-status labels are catalogue declarations, not independent reproduction, universal ontological arising or identified event instances. All node instance admissions remain none.",
        "Generic original Evidence paragraphs with null DOI/URL create no additional polymer-theory papers, microscopic-interaction measurements, coacervate families, permeability studies or lipidomics experiments.",
        "Original weights, necessity, causal directions/modes, dependency types, ontological arising, carrier group/type, numerical minima/critical counts and null saturation are not measured effect fractions, universal gates or molecule-count laws.",
        "The separate folding, enzyme-catalysis, metabolic-compartment and bulk-liquid studies are not matched necessary mediators of this preparation. Mature enzymes and pre-existing lipids are supplied; no biosynthesis/folding origin, general metabolic efficiency, universal carrier threshold or unbounded continuous production is admitted."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:condensate-demixing-measurement-boundary-condensate-phase-separation-source-scope",
      "source": "bio:condensate-demixing-measurement-boundary",
      "target": "bio:condensate-phase-separation-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Definition separates the finite demixing/mobility/partition observations from broader mechanisms and biological promises.",
      "claimIds": [
        "D-bio-condensate-demixing-measurement-boundary"
      ]
    },
    {
      "id": "biochemistry:lipid-synthesis-membrane-growth-boundary-lipid-biosynthesis-membrane-source-scope",
      "source": "bio:lipid-synthesis-membrane-growth-boundary",
      "target": "bio:lipid-biosynthesis-membrane-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Definition separates chemical production and membrane readouts from first-boundary origin or transport function.",
      "claimIds": [
        "D-bio-lipid-synthesis-membrane-growth-boundary"
      ]
    },
    {
      "id": "biochemistry:nott2015-ddx4-thermal-demixing-context-ddx4-reversible-demixing",
      "source": "bio:nott2015-ddx4-thermal-demixing-context",
      "target": "bio:ddx4-reversible-demixing",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-nott2015-ddx4-thermal-demixing-context",
        "C-bio-ddx4-reversible-demixing"
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing"
      ]
    },
    {
      "id": "biochemistry:nott2015-ddx4-frap-context-ddx4-qualitative-droplet-mobility",
      "source": "bio:nott2015-ddx4-frap-context",
      "target": "bio:ddx4-qualitative-droplet-mobility",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-nott2015-ddx4-frap-context",
        "C-bio-ddx4-qualitative-droplet-mobility"
      ],
      "contextIds": [
        "nott2015-ddx4-frap"
      ]
    },
    {
      "id": "biochemistry:nott2015-ddx4-dna-partition-context-ddx4-labeled-dna-partition",
      "source": "bio:nott2015-ddx4-dna-partition-context",
      "target": "bio:ddx4-labeled-dna-partition",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-nott2015-ddx4-dna-partition-context",
        "C-bio-ddx4-labeled-dna-partition"
      ],
      "contextIds": [
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "biochemistry:exterkate2018-pa-time-course-context-supplied-pa-chemical-conversion",
      "source": "bio:exterkate2018-pa-time-course-context",
      "target": "bio:supplied-pa-chemical-conversion",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-exterkate2018-pa-time-course-context",
        "C-bio-supplied-pa-chemical-conversion"
      ],
      "contextIds": [
        "exterkate2018-pa-time-course"
      ]
    },
    {
      "id": "biochemistry:exterkate2018-r18-lipid-dilution-context-fatty-acid-r18-dequenching",
      "source": "bio:exterkate2018-r18-lipid-dilution-context",
      "target": "bio:fatty-acid-r18-dequenching",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-exterkate2018-r18-lipid-dilution-context",
        "C-bio-fatty-acid-r18-dequenching"
      ],
      "contextIds": [
        "exterkate2018-r18-lipid-dilution"
      ]
    },
    {
      "id": "biochemistry:exterkate2018-membrane-morphology-context-phospholipid-preparation-morphology",
      "source": "bio:exterkate2018-membrane-morphology-context",
      "target": "bio:phospholipid-preparation-morphology",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The observation retains this exact preparation and its measurement/proxy limits.",
      "claimIds": [
        "M-bio-exterkate2018-membrane-morphology-context",
        "C-bio-phospholipid-preparation-morphology"
      ],
      "contextIds": [
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "biochemistry:ddx4-reversible-demixing-condensate-phase-separation-source-scope",
      "source": "bio:ddx4-reversible-demixing",
      "target": "bio:condensate-phase-separation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combined finite condensate scope preserves the separate source preparations and unresolved method annotations.",
      "claimIds": [
        "M-bio-ddx4-condensate-interpretation-method",
        "C-bio-ddx4-reversible-demixing",
        "C-bio-condensate-phase-separation-source-scope"
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing",
        "nott2015-ddx4-frap",
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "biochemistry:ddx4-qualitative-droplet-mobility-condensate-phase-separation-source-scope",
      "source": "bio:ddx4-qualitative-droplet-mobility",
      "target": "bio:condensate-phase-separation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combined finite condensate scope preserves the separate source preparations and unresolved method annotations.",
      "claimIds": [
        "M-bio-ddx4-condensate-interpretation-method",
        "C-bio-ddx4-qualitative-droplet-mobility",
        "C-bio-condensate-phase-separation-source-scope"
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing",
        "nott2015-ddx4-frap",
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "biochemistry:ddx4-labeled-dna-partition-condensate-phase-separation-source-scope",
      "source": "bio:ddx4-labeled-dna-partition",
      "target": "bio:condensate-phase-separation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The combined finite condensate scope preserves the separate source preparations and unresolved method annotations.",
      "claimIds": [
        "M-bio-ddx4-condensate-interpretation-method",
        "C-bio-ddx4-labeled-dna-partition",
        "C-bio-condensate-phase-separation-source-scope"
      ],
      "contextIds": [
        "nott2015-ddx4-thermal-demixing",
        "nott2015-ddx4-frap",
        "nott2015-ddx4-dna-partition"
      ]
    },
    {
      "id": "biochemistry:supplied-pa-chemical-conversion-supplied-lipid-membrane-account",
      "source": "bio:supplied-pa-chemical-conversion",
      "target": "bio:supplied-lipid-membrane-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional lipid account combines distinct readouts without asserting matched same-sample causation.",
      "claimIds": [
        "M-bio-lipid-membrane-interpretation-method",
        "C-bio-supplied-pa-chemical-conversion",
        "C-bio-supplied-lipid-membrane-account"
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "biochemistry:fatty-acid-r18-dequenching-supplied-lipid-membrane-account",
      "source": "bio:fatty-acid-r18-dequenching",
      "target": "bio:supplied-lipid-membrane-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional lipid account combines distinct readouts without asserting matched same-sample causation.",
      "claimIds": [
        "M-bio-lipid-membrane-interpretation-method",
        "C-bio-fatty-acid-r18-dequenching",
        "C-bio-supplied-lipid-membrane-account"
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "biochemistry:phospholipid-preparation-morphology-supplied-lipid-membrane-account",
      "source": "bio:phospholipid-preparation-morphology",
      "target": "bio:supplied-lipid-membrane-account",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional lipid account combines distinct readouts without asserting matched same-sample causation.",
      "claimIds": [
        "M-bio-lipid-membrane-interpretation-method",
        "C-bio-phospholipid-preparation-morphology",
        "C-bio-supplied-lipid-membrane-account"
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    },
    {
      "id": "biochemistry:supplied-lipid-membrane-account-lipid-biosynthesis-membrane-source-scope",
      "source": "bio:supplied-lipid-membrane-account",
      "target": "bio:lipid-biosynthesis-membrane-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The joint account qualifies membrane synthesis/formation promises within the supplied-system boundary.",
      "claimIds": [
        "M-bio-lipid-membrane-interpretation-method",
        "C-bio-supplied-lipid-membrane-account",
        "C-bio-lipid-biosynthesis-membrane-source-scope"
      ],
      "contextIds": [
        "exterkate2018-pa-time-course",
        "exterkate2018-r18-lipid-dilution",
        "exterkate2018-membrane-morphology"
      ]
    }
  ],
  "studies": [
    {
      "id": "nott2015-ddx4-thermal-demixing",
      "sourceId": "nott2015-ddx4-demixing",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.molcel.2015.01.013",
      "journal": "Molecular Cell",
      "volume": "57",
      "issue": "5",
      "pages": "936-947",
      "system": "Supplied purified Ddx4 terminal-region protein droplets and source-specific tracer/solute preparations",
      "preparation": "Source Figure 3D supplied purified Ddx4N1 N-terminal disordered protein (residues 1-236), 202 micromolar, 200 mM NaCl, pH 8. The same source sample is imaged through cooling from 50 to 22 degrees C and reheating, with repeated cycles. The figure demonstration uses 4 degrees C/min; the separate SI cloud-point sampling defaults to 2 degrees C/min. Retain onset/disappearance hysteresis and operational image/turbidity detection; no universal equilibrium transition is inferred.",
      "observable": "Temperature-dependent droplet/turbidity appearance and disappearance in repeated source thermal cycles",
      "finding": "Supplied Ddx4N1 exhibits finite reversible demixing with thermal hysteresis.",
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "readExtent": "complete-primary-main-article-and-selected-supporting-information",
      "reviewedLocators": [
        "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
        "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1016/j.molcel.2015.01.013",
      "correctionCheck": "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    },
    {
      "id": "nott2015-ddx4-frap",
      "sourceId": "nott2015-ddx4-demixing",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.molcel.2015.01.013",
      "journal": "Molecular Cell",
      "volume": "57",
      "issue": "5",
      "pages": "936-947",
      "system": "Supplied purified Ddx4 terminal-region protein droplets and source-specific tracer/solute preparations",
      "preparation": "Source in vitro Figure 3C fluorescent recovery in a roughly 10-micrometer dense Ddx4 droplet at 20 degrees C and nominal 150 mM NaCl. The main text gives Ddx4N1:Ddx4YFP 60:1, whereas SI pages 15-16 list 292.5 micromolar Ddx4N1 plus 8.1 micromolar each Ddx4YFP and free CFP before dilution/hanging-drop equilibration. These composition annotations are unresolved. Use only qualitative fluorescence recovery under the reported preparation, without adopting an exact common mixture or new diffusion coefficient.",
      "observable": "Post-bleach fluorescent recovery in the separately reported in vitro dense droplet",
      "finding": "The source trace supports qualitative mobility with unresolved exact mixture annotation.",
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "readExtent": "complete-primary-main-article-and-selected-supporting-information",
      "reviewedLocators": [
        "Published pages 938-939, Figures 2A and 3C with FRAP Results/Experimental Procedures; Supplemental Section S2 pages 14-16, especially in vitro mixture and diffusion equations S1-S2: qualitative recovery, preparation-annotation discrepancy and diffusion assumptions",
        "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1016/j.molcel.2015.01.013",
      "correctionCheck": "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    },
    {
      "id": "nott2015-ddx4-dna-partition",
      "sourceId": "nott2015-ddx4-demixing",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.molcel.2015.01.013",
      "journal": "Molecular Cell",
      "volume": "57",
      "issue": "5",
      "pages": "936-947",
      "system": "Supplied purified Ddx4 terminal-region protein droplets and source-specific tracer/solute preparations",
      "preparation": "Source Figure 7 and SI Section S8 separate in vitro Ddx4N1 droplet preparation: nominal total protein 162.5 micromolar, 150 mM NaCl after mixing, 1 micromolar total fluorescent 32-base ssDNA or 32-base-paired dsDNA, with a no-DNA fluorescence background. Confocal emission is volume-normalized across ten inside/ten outside regions in each of three fields. Source K is outside/inside. Main paragraph dye annotation differs from caption/method; no exact partition/free-energy or intrinsic binding constant is newly admitted.",
      "observable": "Background-subtracted volume-normalized emission inside/outside Ddx4 droplets for labeled ssDNA/dsDNA",
      "finding": "The source reports differential labeled-DNA partition proxies, with no new calibrated binding/free-energy result.",
      "limitations": [
        "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read.",
        "Ddx4N1 is the supplied isolated disordered N-terminal region (residues 1-236), without the central DEAD-box helicase. Ddx4YFP replaces that helicase with YFP, and cellular/full-length constructs differ. In vitro terminal-region phase separation is not a demonstration of native germ-granule function, helicase catalysis or a universal folded-protein prerequisite.",
        "Thermal Figure 3D reports 202 micromolar Ddx4N1, 200 mM NaCl and pH 8, with cooling/heating and same-sample repeats. Its 4 degrees C/min demonstration differs from the 2 degrees C/min default cloud-point sampling in SI Section S6. Cooling appearance and reheating disappearance differ; an operational image/turbidity threshold is not independently established equilibrium criticality or a universal minimum molecule count.",
        "Cloud-point data and Flory-Huggins/screened-Coulomb fits are separate from direct images. Assumptions about polymer volume fraction, water, effective interaction constants and electrostatic screening underlie fitted enthalpy/entropy, charge spacing and dielectric values. No new direct molecular force, solvent structure, dielectric or calorimetric measurement is admitted.",
        "FRAP main Figure 3C describes a 60:1 Ddx4N1:Ddx4YFP mixture; SI pages 15-16 instead list pre-dilution concentrations 292.5 micromolar Ddx4N1 and 8.1 micromolar each YFP construct and free CFP, with hanging-drop equilibration. No exact common composition or ratio is silently selected. The qualitative recovery trace is admitted, with no new precise diffusion coefficient.",
        "FRAP recovery depends on bleach geometry, imaging, diffusion/exchange assumptions and the fluorescent tracer. It supports mobility in the reported droplet preparation, not all constituent dynamics, DNA transport kinetics, viscosity, universal liquid character or proof that every condensate/coacervate has the same mechanism.",
        "The partition experiment uses source-defined 32-base single-stranded or 32-base-paired double-stranded fluorescent DNA at equal nominal fluorophore concentration in a separate Ddx4N1 preparation. Background-subtracted emission per region volume is a concentration/partition proxy; equal quantum yield/dye behavior across phases and free-energy calibration are not independently verified.",
        "The source defines its partition coefficient as outside/inside, not the inverse. The main Results paragraph names atto657N whereas Figure 7 and Experimental Procedures name Atto647N. No numerical partition/free-energy value, unlabeled-DNA binding constant, universal sequence specificity or corrected dye identity is independently admitted.",
        "Ten inside/ten outside regions in each of three fields of view are sampling regions, not automatically sixty independent preparation replications. SD of emission regions and model-fit SE are different uncertainties. No independent replication or raw-image replay is performed.",
        "Cellular cold/osmotic response, methylated/splice/charge/aromatic variants and genome enrichment were read but are not new admitted assay contexts. Cellular osmotic changes alter volume/concentration and environment together; sequence/general-mechanism hypotheses do not become universal proof for all condensates.",
        "The admitted thermal, FRAP and DNA-partition contexts do not directly resolve fusion or fission dynamics, transfer/exchange rates for every component or one unique intermolecular/solvent mechanism. No direct catalytic reaction modulation, metabolic throughput/benefit, universal reaction sequestration, membrane-like selectivity, gradient maintenance, prebiotic coacervate ancestry or origin-of-life event is measured in the admitted contexts.",
        "Source fits, calibration and raw measurements are not independently reconstructed or reproduced."
      ],
      "readExtent": "complete-primary-main-article-and-selected-supporting-information",
      "reviewedLocators": [
        "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
        "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1016/j.molcel.2015.01.013",
      "correctionCheck": "Read the complete published primary article pages 936-947, complete PMC main HTML and all seven main figures/captions. The author-lab PDF has a graphical cover plus twelve published pages. Read selected actual 29-page publisher supplement: title page, Figure S4 page 5, Figure S7 pages 10-11, Section S2 relevant in vitro/FRAP pages 14-16, Section S6 pages 21-25, and Section S8 pages 27-28. Other SI preparation/statistical/genome-analysis pages, full sequence details, raw data and movies were not completely read. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    },
    {
      "id": "exterkate2018-pa-time-course",
      "sourceId": "exterkate2018-phospholipid-synthesis",
      "studyType": "primary-experiment",
      "doi": "10.1021/acssynbio.7b00265",
      "journal": "ACS Synthetic Biology",
      "volume": "7",
      "issue": "1",
      "pages": "153-165",
      "system": "Supplied purified lipid enzymes and pre-existing phospholipid liposomes",
      "preparation": "Source SI Figure S3 PA time course with supplied FadD, PlsB and PlsC in pre-existing liposomes and externally supplied oleic acid, CoA, ATP and glycerol 3-phosphate. The explicit SI procedure uses assay buffer at pH 8 with magnesium, KCl, glycerol and reductant, 2.7 mM oleic acid, 2.67 mM liposomal lipid, 50 micromolar CoA, 5 mM ATP and 1 micromolar PlsB; these are different from the general main PA default. Extracted lipid ion signals are assigned by LC-MS and normalized to DDM. This is a finite three-enzyme PA subsystem, not every eight-enzyme PE/PG assay.",
      "observable": "DDM-normalized assigned oleic-acid/intermediate/PA LC-MS signals over the finite source time course",
      "finding": "The source supports finite PA production in a supplied three-enzyme pre-existing-liposome preparation.",
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "readExtent": "complete-primary-main-article-and-complete-six-page-supporting-information",
      "reviewedLocators": [
        "Published pages 156-158, Figures 2-4 and Results Reconstitution of Phosphatidic Acid Formation; Methods pages 162-164; complete six-page Supporting Information, especially Figure S3 page 4 and its explicit procedure page 6: supplied three-enzyme PA conversion and internal-standard LC-MS readout",
        "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1021/acssynbio.7b00265",
      "correctionCheck": "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    },
    {
      "id": "exterkate2018-r18-lipid-dilution",
      "sourceId": "exterkate2018-phospholipid-synthesis",
      "studyType": "primary-experiment",
      "doi": "10.1021/acssynbio.7b00265",
      "journal": "ACS Synthetic Biology",
      "volume": "7",
      "issue": "1",
      "pages": "153-165",
      "system": "Supplied purified lipid enzymes and pre-existing phospholipid liposomes",
      "preparation": "Source Figure 6 R18 self-quenching assay in pre-existing 2.67 mM DOPC/DOPG/DOPE liposomes with 5 mole percent R18, supplied 2.7 mM oleic acid and the three PA enzymes/resources. Compare the stated spectra before/after fatty-acid addition and PA conversion, with Triton maximal emission normalization. This preparation is separate from SI S3 chemistry and PG cryo-EM; a dye-dilution signal alone is not isolated synthesis-driven bilayer-area growth.",
      "observable": "R18 emission spectra before/after fatty-acid addition, PA conversion and Triton reference",
      "finding": "The immediate dye-dilution response follows fatty-acid addition and is not an isolated synthesis-dependent growth signal.",
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "readExtent": "complete-primary-main-article-and-complete-six-page-supporting-information",
      "reviewedLocators": [
        "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
        "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1021/acssynbio.7b00265",
      "correctionCheck": "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    },
    {
      "id": "exterkate2018-membrane-morphology",
      "sourceId": "exterkate2018-phospholipid-synthesis",
      "studyType": "primary-experiment",
      "doi": "10.1021/acssynbio.7b00265",
      "journal": "ACS Synthetic Biology",
      "volume": "7",
      "issue": "1",
      "pages": "153-165",
      "system": "Supplied purified lipid enzymes and pre-existing phospholipid liposomes",
      "preparation": "Source Figure 7 PG-pathway cryo-EM snapshots of pre-existing vesicles: initial material, 1.5 mM oleic-acid addition, subsequent phospholipid-production/stacked states and EDTA-treated material. A second preparation combines lower magnesium with supplied 0.3 mM fatty-acid doses to 1.5 mM total. Exact lower magnesium and some morphological sampling details are unresolved. The two preparations change more than one variable and are not tracked vesicle lineages or the R18 PA sample.",
      "observable": "Cryo-EM morphology across source high-dose/EDTA and separate lower-magnesium/dosed-feed preparations",
      "finding": "Vesicle, stacked and larger-vesicle morphologies depend on combined preparation; no unique mechanism or barrier function is established.",
      "limitations": [
        "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges.",
        "This reconstitution supplies purified mature enzymes and pre-existing phospholipid liposomes; enzymes and substrates are added externally. The source explicitly says this pathway does not support de novo membrane synthesis because PlsB and other components require existing phospholipids/membranes. No first membrane, protein biosynthesis origin, self-reproducing cell or self-made enzyme complement is established.",
        "The selected chemistry context is the three-enzyme PA time course in SI Figure S3. It is distinct from the full eight-enzyme headgroup pathway and the PE/PG endpoint/calibration assays. SI specifies different PlsB/ATP concentrations for that time course than the general main PA procedure; these are retained as different preparations, not silently pooled.",
        "LC-MS records internal-standard-normalized ion counts and source-assigned lipid identities. Species-dependent response, extraction recovery, peak integration and external calibration govern concentration/yield inference. The main text refers to PE/PG standards in Supporting Information, but the retrieved six-page supplement contains no explicit PE/PG calibration curve; no independent absolute-yield or uncertainty reconstruction is made.",
        "Limiting-CoA conversion supports source-specific cofactor recycling, with supplied ATP and substrates. It does not close energy/resource supply, synthesize fatty-acid chains from carbon feedstock, make every phospholipid or show indefinite throughput. Small PA signal without PlsC is source-attributed to possible PlsC contamination of PlsB; omission effects are not treated as perfectly pure single-enzyme controls.",
        "R18 self-quenching is a membrane dye-dilution proxy. In Figure 6 the immediate fluorescence increase follows oleic-acid addition and does not require phospholipid biosynthesis; subsequent PA conversion adds little further fluorescence change. Thus the signal alone cannot isolate synthesis-driven area growth from fatty-acid partition, swelling, fusion or dye redistribution.",
        "The source reports an approximate 25-30 percent expansion from R18 assumptions. No new exact area/volume expansion, vesicle number, leaflet distribution, size distribution or calibrated membrane material balance is independently admitted. Triton-normalized maximal emission is not a direct bilayer surface-area standard.",
        "R18 PA conversion uses 2.7 mM oleic acid and three enzymes. Figure 7 morphology follows a different PG-pathway preparation and a 1.5 mM total fatty-acid feed. These are not matched single-vesicle samples or an interchangeable protocol. Cryo-EM snapshots are not longitudinal lineage/continuous growth tracking.",
        "High-dose material forms stacked multilamellar-like structures that resolve after EDTA. The dosed-feed comparison also lowers magnesium; exact lower magnesium concentration is not resolved in the reviewed main/SI descriptions. Feeding and magnesium are changed together, so an isolated feeding or magnesium causal effect is not established.",
        "The PA-divalent-cation/outer-leaflet imbalance/slow-flip-flop explanation is a source hypothesis. No direct leaflet-resolved synthesis, flip-flop kinetics, cation binding map, complete membrane retention, permeability/selectivity panel, electrochemical gradient or transport activity is measured here.",
        "The title continuous refers to CoA reuse and finite precursor conversion; the conclusion proposes a future continuously controlled feeding system. Finite time courses/endpoints and supplied doses do not demonstrate indefinite membrane production, balanced division, autonomous enzyme renewal or population self-reproduction.",
        "No universal efficiency/robustness benefit, compartmentalized competing metabolism, spontaneous origin sequence, adaptive regulation or required prior metabolic compartment is established."
      ],
      "readExtent": "complete-primary-main-article-and-complete-six-page-supporting-information",
      "reviewedLocators": [
        "Published pages 161-162, Figure 7A-B and membrane-expansion discussion; Cryotransmission Electron Microscopy page 164: pre-existing vesicles, swelling/stacking/EDTA states and unmatched lower-magnesium/dosed-feed preparation",
        "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1021/acssynbio.7b00265",
      "correctionCheck": "Read the complete actual primary main article pages 153-165 and complete PMC HTML, all seven figures, all three tables, Methods/References, plus the complete six-page publisher Supporting Information with all four figures and procedures. The university PDF adds a repository cover. Primary supplement identity is verified by ACS figshare DOI 10.1021/acssynbio.7b00265.s001 and file 9445870; original PMC files were unread HTML challenges. Nott identity: Molecular Cell 57(5):936-947, 5 March 2015, PMID 25747659, eleven authors. Exterkate identity: ACS Synthetic Biology 7(1):153-165, issue 19 January 2018, PMID 28922922, four authors. The original Exterkate PDF, Crossref and PMC give online 18 September 2017, whereas the current publisher metadata page reports 2 October 2017; retain this date-annotation difference without inventing a new publication or correction. Title/DOI/authors/issue identity agree. Crossref updates/relation fields and Europe PMC comments checked on 2026-10-20; Nott has a later Comment in record, not a correction, and Exterkate no linked comment/correction there. Limited searches found no explicit linked correction; no exhaustive absence claim is made."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:nott2015-ddx4-thermal-demixing-context",
      "role": "experimental-context",
      "denotes": "Ddx4 thermal demixing context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-nott2015-ddx4-thermal-demixing-context"
      ]
    },
    {
      "nodeId": "bio:nott2015-ddx4-frap-context",
      "role": "experimental-context",
      "denotes": "Ddx4 qualitative FRAP context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-nott2015-ddx4-frap-context"
      ]
    },
    {
      "nodeId": "bio:nott2015-ddx4-dna-partition-context",
      "role": "experimental-context",
      "denotes": "Ddx4 labeled-DNA partition context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-nott2015-ddx4-dna-partition-context"
      ]
    },
    {
      "nodeId": "bio:exterkate2018-pa-time-course-context",
      "role": "experimental-context",
      "denotes": "Supplied PA synthesis context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-exterkate2018-pa-time-course-context"
      ]
    },
    {
      "nodeId": "bio:exterkate2018-r18-lipid-dilution-context",
      "role": "experimental-context",
      "denotes": "Membrane R18 dye-dilution context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-exterkate2018-r18-lipid-dilution-context"
      ]
    },
    {
      "nodeId": "bio:exterkate2018-membrane-morphology-context",
      "role": "experimental-context",
      "denotes": "Membrane morphology context within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-exterkate2018-membrane-morphology-context"
      ]
    },
    {
      "nodeId": "bio:condensate-demixing-measurement-boundary",
      "role": "definition",
      "denotes": "Demixing, mobility and partition boundary within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-condensate-demixing-measurement-boundary"
      ]
    },
    {
      "nodeId": "bio:lipid-synthesis-membrane-growth-boundary",
      "role": "definition",
      "denotes": "Lipid synthesis and boundary readout boundary within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-lipid-synthesis-membrane-growth-boundary"
      ]
    },
    {
      "nodeId": "bio:ddx4-reversible-demixing",
      "role": "scoped-phenomenon",
      "denotes": "Reversible Ddx4 terminal-region demixing within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ddx4-reversible-demixing",
        "M-bio-nott2015-ddx4-thermal-demixing-context"
      ]
    },
    {
      "nodeId": "bio:ddx4-qualitative-droplet-mobility",
      "role": "scoped-phenomenon",
      "denotes": "Qualitative Ddx4 droplet fluorescence recovery within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ddx4-qualitative-droplet-mobility",
        "M-bio-nott2015-ddx4-frap-context"
      ]
    },
    {
      "nodeId": "bio:ddx4-labeled-dna-partition",
      "role": "scoped-phenomenon",
      "denotes": "Ddx4 labeled-DNA partition proxy within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-ddx4-labeled-dna-partition",
        "M-bio-nott2015-ddx4-dna-partition-context"
      ]
    },
    {
      "nodeId": "bio:condensate-phase-separation-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite Ddx4 condensate scope within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-condensate-phase-separation-source-scope",
        "M-bio-ddx4-condensate-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:supplied-pa-chemical-conversion",
      "role": "scoped-phenomenon",
      "denotes": "Finite supplied phosphatidic-acid production within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-supplied-pa-chemical-conversion",
        "M-bio-exterkate2018-pa-time-course-context"
      ]
    },
    {
      "nodeId": "bio:fatty-acid-r18-dequenching",
      "role": "scoped-phenomenon",
      "denotes": "Fatty-acid-associated R18 dequenching within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-fatty-acid-r18-dequenching",
        "M-bio-exterkate2018-r18-lipid-dilution-context"
      ]
    },
    {
      "nodeId": "bio:phospholipid-preparation-morphology",
      "role": "scoped-phenomenon",
      "denotes": "Preparation-dependent membrane morphology within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-phospholipid-preparation-morphology",
        "M-bio-exterkate2018-membrane-morphology-context"
      ]
    },
    {
      "nodeId": "bio:supplied-lipid-membrane-account",
      "role": "scoped-phenomenon",
      "denotes": "Conditional supplied lipid-membrane account within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-supplied-lipid-membrane-account",
        "M-bio-lipid-membrane-interpretation-method"
      ]
    },
    {
      "nodeId": "bio:lipid-biosynthesis-membrane-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite lipid biosynthesis and membrane scope within the declared preparation, proxy and inference limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-lipid-biosynthesis-membrane-source-scope",
        "M-bio-lipid-membrane-interpretation-method"
      ]
    }
  ]
};
