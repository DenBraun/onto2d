// Exact reviewed preparations, observations and interpretation boundaries.
export const BIOENERGETICS_RECORDS = {
  "sources": [
    {
      "id": "racker1974-purple-vesicle-energy-transduction",
      "kind": "research-publication",
      "title": "Reconstitution of Purple Membrane Vesicles Catalyzing Light-driven Proton Uptake and Adenosine Triphosphate Formation",
      "authors": [
        "Efraim Racker",
        "Walther Stoeckenius"
      ],
      "year": 1974,
      "doi": "10.1016/S0021-9258(19)43080-9",
      "url": "https://www.sciencedirect.com/science/article/pii/S0021925819430809",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-original-article-text-and-captions-through-mirror-no-image-audit",
        "locators": [
          "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations"
        ],
        "limit": "Read the original two-page article scientific text, Materials and Methods, Results and Discussion, Figures 1-2 captions, Table I caption and qualitative control comparisons through an original-article mirror on ResearchGate. The mirror includes the original JBC header and a 2011 JBC-download footer. Original publisher full-text/PDF and mirror PDF fetches were unavailable; table/figure images were not visually audited. No numerical Table I cells, trace-derived rates, protein counts, stoichiometries or efficiencies are newly admitted from the text transcription. The source cites earlier preparation/ATP-assay papers; those upstream methods and the original raw observations were not independently acquired or replayed. Only the original article text up to References was used; the mirror recommendations/citing-paper text were excluded. Metadata checked 2026-10-20 against the original article header, primary publisher indexed record and PubMed 4272126. Title, Efraim Racker and Walther Stoeckenius, J. Biol. Chem. 249(2), 662-663 and 25 January 1974 agree; mirror February metadata is not used in place of the original issue date. DOI 10.1016/S0021-9258(19)43080-9 is supplied by the primary publisher record. A Crossref API fetch was unavailable; no registry relation audit is claimed. No explicit correction or retraction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or a complete later-literature review. Actual article mirror: https://www.researchgate.net/publication/18893966_Reconstitution_of_Purple_Membrane_Vesicles_Catalyzing_Light-Driven_Proton_Uptake_and_Adenosine_Triphosphate_Formation"
      }
    },
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
      "id": "D-bio-electrochemical-gradient-coupling",
      "kind": "review-finding",
      "statement": "The ion electrochemical potential includes chemical activity and electric potential: μ̃B = μB° + RT ln aB + zBFφ. Transfer equilibrium requires equal electrochemical potentials. Pump-driven activities, reaction quotients and potentials can change while the intrinsic standard equilibrium constant of the same net reaction at fixed conditions remains unchanged.",
      "scope": "Thermodynamic bookkeeping convention, distinct from an experimental gradient or energy-yield measurement.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
          "role": "supports",
          "note": "Selected original IUPAC PDF pp. 70-71 read; source note 11 retains standard-potential differences between distinct phases and cautions against independently measuring single-ion activity and inner-potential components."
        },
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
          "role": "supports",
          "note": "Reuse the admitted standard-reaction Gibbs-energy and equilibrium conventions under the same source identity."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The simplified displayed expression applies within a declared phase and reference convention; distinct phases can have different standard chemical potentials. Sign conventions and the direction of transfer must be declared before calculating an energy.",
        "External bulk pH alone does not determine internal pH, membrane potential, the total proton electrochemical potential difference, proton/ATP stoichiometry or energy-conversion efficiency.",
        "A driven steady state and chemical equilibrium are different conditions. Pumping can sustain a composition or electrochemical difference without changing the intrinsic equilibrium constant of an unchanged net reaction. A grouped biochemical apparent constant requires its own proton, metal and reference conventions.",
        "The original equilibrium-shaping language is qualified to imposed activities, electrochemical differences and explicitly coupled reactions. The intrinsic equilibrium constant of the same net reaction at fixed reference conditions does not change merely because a pump operates nearby.",
        "The selected proton trace does not measure every neighbouring reaction quotient, kinetic bias, ATP/redox pump class, stable internal pH, ionic homeostasis or robust network operation. Channel conductance, ion-formation studies and separate pH-regulation systems are not matched causal prerequisites of this prepared pump.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ]
    },
    {
      "id": "D-bio-racker-bioenergetic-readouts",
      "kind": "review-finding",
      "statement": "The Racker proton readout is calibrated external-medium pH. Its phosphorylation readout is radiolabelled glucose-6-phosphate formed through a hexokinase trap, with ATP supplied initially. These report different responses; neither alone is a direct measurement of a complete membrane gradient or an accumulating free ATP pool.",
      "scope": "Declared observable identities for the two source preparations.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The pH and ATP-trapping measurements use different protein additions, solution conditions and temperature. They are not simultaneous measurements of the same vesicles.",
        "The source describes excess hexokinase as suppressing phosphate-ATP exchange. Its upstream detailed assay reference was not independently read; no new validation of isotope specificity, recovery or trap stoichiometry is claimed.",
        "The source Table I is an endpoint reporter assay. It does not alone establish an initial rate, long-term constant flux, complete ATP energy balance or self-sustaining metabolic cycle."
      ]
    },
    {
      "id": "M-bio-racker-proton-response",
      "kind": "method",
      "statement": "The source reconstituted purple membrane in phospholipid vesicles and recorded external pH during light/dark changes with acid-pulse calibration and transport-disrupting controls.",
      "scope": "Qualitative assay and control contract; no new operating recipe.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "role": "method",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electrode measures external medium pH. Transmembrane proton uptake is a source interpretation supported by reversibility and ionophore/uncoupler controls, not an independent inside-pH or electrical-potential measurement.",
        "The source models the illuminated plateau as pumping balanced by passive back diffusion. A plateau is not thermodynamic equilibrium, an exact zero proton flux or feedback regulation toward a physiological pH setpoint.",
        "Low buffering increases pH sensitivity. Buffering and lipid composition affect the trace; neither a microscopic proton count per pump cycle nor exact per-vesicle protein occupancy is determined.",
        "This modern bacteriorhodopsin-containing preparation uses supplied biological membrane protein and phospholipid. It does not establish a protein-free primitive boundary, an origin-of-life history, redox pumping or ATP generation by these pump-only vesicles.",
        "No new numerical curve values or fit errors are admitted. Original raw traces, repeat counts, calibration uncertainty and full reproducibility were not independently audited."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context"
      ]
    },
    {
      "id": "C-bio-racker-proton-response",
      "kind": "review-finding",
      "statement": "Illumination raised external pH in the reconstituted purple-membrane vesicles, and darkness reversed the response. Transport-disrupting controls suppressed it. The authors interpret this as inward proton translocation opposed by passive leakage.",
      "scope": "Finite calibrated bulk-pH response and source pump/leak interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The electrode measures external medium pH. Transmembrane proton uptake is a source interpretation supported by reversibility and ionophore/uncoupler controls, not an independent inside-pH or electrical-potential measurement.",
        "The source models the illuminated plateau as pumping balanced by passive back diffusion. A plateau is not thermodynamic equilibrium, an exact zero proton flux or feedback regulation toward a physiological pH setpoint.",
        "Low buffering increases pH sensitivity. Buffering and lipid composition affect the trace; neither a microscopic proton count per pump cycle nor exact per-vesicle protein occupancy is determined.",
        "This modern bacteriorhodopsin-containing preparation uses supplied biological membrane protein and phospholipid. It does not establish a protein-free primitive boundary, an origin-of-life history, redox pumping or ATP generation by these pump-only vesicles.",
        "No new numerical curve values or fit errors are admitted. Original raw traces, repeat counts, calibration uncertainty and full reproducibility were not independently audited."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context"
      ]
    },
    {
      "id": "M-bio-racker-phosphorylation-response",
      "kind": "method",
      "statement": "The source assayed illuminated vesicles containing purple membrane, mitochondrial membrane proteins and coupling factors using phosphate radiolabelling and hexokinase trapping; omission and inhibition controls were compared with the complete preparation.",
      "scope": "Qualitative endpoint phosphorylation-reporter contract, separate from the pH assay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "method",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The preparation contains a bovine-heart mitochondrial hydrophobic protein fraction and added coupling factors, in addition to bacteriorhodopsin and lipids. It is not a protein-free membrane or a chemically minimal known-count ATP synthase preparation.",
        "Radiolabelled glucose-6-phosphate is a coupled phosphorylation reporter. ATP is supplied initially and participates in the trap cycle; a larger reporter signal is not a direct free-ATP concentration increase or de novo synthesis of the adenine nucleotide scaffold.",
        "The source explicitly supplies upstream method references and an exchange-suppression rationale. Those references and raw isotope-separation/recovery controls were not independently reviewed, so the operational reporter boundary remains explicit.",
        "Darkness and coupling-factor omission reduce the reporter, but omission of coupling factors does not produce an exact zero in Table I. Source zero entries for other controls are finite assay observations, not proven zero microscopic rates.",
        "The pump-only pH experiment is separate from this ATP-machinery endpoint assay. No matched complete proton-motive-force measurement, photon/ATP efficiency, H+/ATP stoichiometry, direct redox flux or maintained network turnover is admitted.",
        "The source reports lipid dependence of coupling. Pumping in one lipid preparation cannot be equated automatically with phosphorylation in every lipid composition.",
        "No numerical Table I effect size is admitted from OCR. The full table image, replicate/error statistics, raw tracer data and complete energy accounting were not independently audited."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "C-bio-racker-phosphorylation-response",
      "kind": "review-finding",
      "statement": "The complete illuminated preparation produced a higher phosphorylation-reporter signal than darkness. Coupling-factor omission or rutamycin reduced the signal; purple-membrane omission or uncoupler addition abolished detectable reporter formation in the reported comparison.",
      "scope": "Finite source-reported phosphate-to-trapped-product response with controlled omissions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The preparation contains a bovine-heart mitochondrial hydrophobic protein fraction and added coupling factors, in addition to bacteriorhodopsin and lipids. It is not a protein-free membrane or a chemically minimal known-count ATP synthase preparation.",
        "Radiolabelled glucose-6-phosphate is a coupled phosphorylation reporter. ATP is supplied initially and participates in the trap cycle; a larger reporter signal is not a direct free-ATP concentration increase or de novo synthesis of the adenine nucleotide scaffold.",
        "The source explicitly supplies upstream method references and an exchange-suppression rationale. Those references and raw isotope-separation/recovery controls were not independently reviewed, so the operational reporter boundary remains explicit.",
        "Darkness and coupling-factor omission reduce the reporter, but omission of coupling factors does not produce an exact zero in Table I. Source zero entries for other controls are finite assay observations, not proven zero microscopic rates.",
        "The pump-only pH experiment is separate from this ATP-machinery endpoint assay. No matched complete proton-motive-force measurement, photon/ATP efficiency, H+/ATP stoichiometry, direct redox flux or maintained network turnover is admitted.",
        "The source reports lipid dependence of coupling. Pumping in one lipid preparation cannot be equated automatically with phosphorylation in every lipid composition.",
        "No numerical Table I effect size is admitted from OCR. The full table image, replicate/error statistics, raw tracer data and complete energy accounting were not independently audited."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "M-bio-racker-coupling-interpretation",
      "kind": "method",
      "statement": "Interpret the separate pH and phosphorylation comparisons jointly only within their declared reporter and protein-composition boundaries; keep source pump/leak and chemiosmotic models separate from directly observed signals.",
      "scope": "Method of evidence interpretation for one source and two contexts.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "role": "method",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "method",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations",
          "role": "method",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "One source publication supplies two linked preparation-specific contexts. Multiple readouts and controls do not constitute independent publications or independent laboratory replications.",
        "The joint chemiosmotic interpretation is conditional on the source reporter, orientation and permeability assumptions. Pump-only external-pH traces and ATP-machinery product trapping do not directly measure the same microscopic proton trajectory.",
        "No complete gradient, energy-conversion efficiency, steady ATP synthesis flux, biochemical homeostasis, metabolic-cycle closure or origin-of-life claim follows.",
        "The proteins are obtained from modern biological systems. Their reconstitution supports a finite modern energy-transduction model; it does not demonstrate how a primitive membrane without those proteins could couple a gradient to chemistry."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context",
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "C-bio-racker-coupling-interpretation",
      "kind": "review-finding",
      "statement": "The separate proton-response and phosphorylation controls support the authors’ finite chemiosmotic energy-transduction interpretation in reconstituted protein-containing vesicles. They do not identify an altered intrinsic reaction equilibrium constant or demonstrate protein-free primordial coupling.",
      "scope": "Published model interpretation bounded by the source observations and preparations.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations",
          "role": "supports",
          "note": "Original primary scientific passage read through the declared article mirror; preserve the preparation, observable and inference limits. No independent reproduction or raw-data reanalysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "One source publication supplies two linked preparation-specific contexts. Multiple readouts and controls do not constitute independent publications or independent laboratory replications.",
        "The joint chemiosmotic interpretation is conditional on the source reporter, orientation and permeability assumptions. Pump-only external-pH traces and ATP-machinery product trapping do not directly measure the same microscopic proton trajectory.",
        "No complete gradient, energy-conversion efficiency, steady ATP synthesis flux, biochemical homeostasis, metabolic-cycle closure or origin-of-life claim follows.",
        "The proteins are obtained from modern biological systems. Their reconstitution supports a finite modern energy-transduction model; it does not demonstrate how a primitive membrane without those proteins could couple a gradient to chemistry.",
        "The positive scope is supplied modern protein machinery under externally supplied illumination and assay reagents. It does not establish universal ATP dependence, complete redox or metabolic cycling, regulated energy redistribution, robust supply or a universal energetic backbone for all higher biochemical organization.",
        "Folded proteins and phosphorylation machinery are supplied preparation components; the experiment does not measure their formation or prove a universal necessary sequence from folding, enzyme catalysis and metabolic cycles. General kinetics/thermodynamics supply bookkeeping, not an additional acquired parent mechanism.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context",
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "C-bio-primitive-chemiosmotic-coupling-open",
      "kind": "review-finding",
      "statement": "The catalogue hypothesis that a primitive boundary can couple an electrochemical gradient to internal chemistry remains unestablished by the primary evidence reviewed here. The modern protein-containing Racker preparation does not supply direct evidence for that protein-free primitive coupling claim.",
      "scope": "Explicit unresolved interpretation of original card 3.47, not a claim that such coupling is impossible.",
      "status": "unresolved",
      "citations": [
        {
          "sourceId": "legacy-3",
          "locator": "/",
          "role": "provenance",
          "note": "Original author-supplied hypothesis inventoried in full with its actual parents; its generic empirical label is not a reviewed primary result."
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
          "role": "limits",
          "note": "The actual source preparation includes modern membrane proteins and coupling factors; it cannot instantiate the primitive protein-free claim."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected review contains no directly observed gradient-to-reaction coupling in a protein-free primitive boundary. This is an evidence-scope gap, not an exhaustive absence-of-literature result or proof of impossibility.",
        "Gradient formation, retention or passive equilibration alone does not establish productive coupling to an internal reaction, regulation of a network, self-maintenance or a historical primordial pathway.",
        "No carrier count, protocell threshold, necessary developmental hierarchy or physical instance is admitted. No experimental design or optimization is proposed.",
        "The original claims of enduring primitive boundary-to-interior regulation, otherwise unfavourable chemistry and stabilized internal networks remain hypotheses. Passive permeability, supplied pH conditions, modern phosphorylation machinery and driven-state definitions do not jointly instantiate a primitive transduction system.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ]
    },
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
    }
  ],
  "entities": [
    {
      "id": "bio:electrochemical-gradient-coupling",
      "name": "Ion electrochemical potential and driven-state bookkeeping",
      "kind": "quantity-definition",
      "status": "definition",
      "level": 3,
      "description": "The ion electrochemical potential includes chemical activity and electric potential: μ̃B = μB° + RT ln aB + zBFφ. Transfer equilibrium requires equal electrochemical potentials. Pump-driven activities, reaction quotients and potentials can change while the intrinsic standard equilibrium constant of the same net reaction at fixed conditions remains unchanged.",
      "claimIds": [
        "D-bio-electrochemical-gradient-coupling"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium"
        },
        {
          "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
          "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/38"
        }
      ],
      "openObligations": [
        "The simplified displayed expression applies within a declared phase and reference convention; distinct phases can have different standard chemical potentials. Sign conventions and the direction of transfer must be declared before calculating an energy.",
        "External bulk pH alone does not determine internal pH, membrane potential, the total proton electrochemical potential difference, proton/ATP stoichiometry or energy-conversion efficiency.",
        "A driven steady state and chemical equilibrium are different conditions. Pumping can sustain a composition or electrochemical difference without changing the intrinsic equilibrium constant of an unchanged net reaction. A grouped biochemical apparent constant requires its own proton, metal and reference conventions.",
        "The original equilibrium-shaping language is qualified to imposed activities, electrochemical differences and explicitly coupled reactions. The intrinsic equilibrium constant of the same net reaction at fixed reference conditions does not change merely because a pump operates nearby.",
        "The selected proton trace does not measure every neighbouring reaction quotient, kinetic bias, ATP/redox pump class, stable internal pH, ionic homeostasis or robust network operation. Channel conductance, ion-formation studies and separate pH-regulation systems are not matched causal prerequisites of this prepared pump.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ]
    },
    {
      "id": "bio:racker-bioenergetic-readouts",
      "name": "External pH and trapped-phosphorylation readout definitions",
      "kind": "quantity-definition",
      "status": "definition",
      "level": 3,
      "description": "The Racker proton readout is calibrated external-medium pH. Its phosphorylation readout is radiolabelled glucose-6-phosphate formed through a hexokinase trap, with ATP supplied initially. These report different responses; neither alone is a direct measurement of a complete membrane gradient or an accumulating free ATP pool.",
      "claimIds": [
        "D-bio-racker-bioenergetic-readouts"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions"
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons"
        }
      ],
      "openObligations": [
        "The pH and ATP-trapping measurements use different protein additions, solution conditions and temperature. They are not simultaneous measurements of the same vesicles.",
        "The source describes excess hexokinase as suppressing phosphate-ATP exchange. Its upstream detailed assay reference was not independently read; no new validation of isotope specificity, recovery or trap stoichiometry is claimed.",
        "The source Table I is an endpoint reporter assay. It does not alone establish an initial rate, long-term constant flux, complete ATP energy balance or self-sustaining metabolic cycle."
      ]
    },
    {
      "id": "bio:racker-proton-context",
      "name": "Prepared purple-membrane vesicle pH-response context",
      "kind": "context",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The source reconstituted purple membrane in phospholipid vesicles and recorded external pH during light/dark changes with acid-pulse calibration and transport-disrupting controls.",
      "claimIds": [
        "M-bio-racker-proton-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions"
        }
      ],
      "openObligations": [
        "The electrode measures external medium pH. Transmembrane proton uptake is a source interpretation supported by reversibility and ionophore/uncoupler controls, not an independent inside-pH or electrical-potential measurement.",
        "The source models the illuminated plateau as pumping balanced by passive back diffusion. A plateau is not thermodynamic equilibrium, an exact zero proton flux or feedback regulation toward a physiological pH setpoint.",
        "Low buffering increases pH sensitivity. Buffering and lipid composition affect the trace; neither a microscopic proton count per pump cycle nor exact per-vesicle protein occupancy is determined.",
        "This modern bacteriorhodopsin-containing preparation uses supplied biological membrane protein and phospholipid. It does not establish a protein-free primitive boundary, an origin-of-life history, redox pumping or ATP generation by these pump-only vesicles.",
        "No new numerical curve values or fit errors are admitted. Original raw traces, repeat counts, calibration uncertainty and full reproducibility were not independently audited."
      ]
    },
    {
      "id": "bio:racker-proton-response",
      "name": "Light-dependent external-pH response of reconstituted vesicles",
      "kind": "scoped-process",
      "status": "evidence-scoped",
      "level": 3,
      "description": "Illumination raised external pH in the reconstituted purple-membrane vesicles, and darkness reversed the response. Transport-disrupting controls suppressed it. The authors interpret this as inward proton translocation opposed by passive leakage.",
      "claimIds": [
        "C-bio-racker-proton-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions"
        }
      ],
      "openObligations": [
        "The electrode measures external medium pH. Transmembrane proton uptake is a source interpretation supported by reversibility and ionophore/uncoupler controls, not an independent inside-pH or electrical-potential measurement.",
        "The source models the illuminated plateau as pumping balanced by passive back diffusion. A plateau is not thermodynamic equilibrium, an exact zero proton flux or feedback regulation toward a physiological pH setpoint.",
        "Low buffering increases pH sensitivity. Buffering and lipid composition affect the trace; neither a microscopic proton count per pump cycle nor exact per-vesicle protein occupancy is determined.",
        "This modern bacteriorhodopsin-containing preparation uses supplied biological membrane protein and phospholipid. It does not establish a protein-free primitive boundary, an origin-of-life history, redox pumping or ATP generation by these pump-only vesicles.",
        "No new numerical curve values or fit errors are admitted. Original raw traces, repeat counts, calibration uncertainty and full reproducibility were not independently audited."
      ]
    },
    {
      "id": "bio:racker-phosphorylation-context",
      "name": "Prepared protein-containing phosphorylation-reporter context",
      "kind": "context",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The source assayed illuminated vesicles containing purple membrane, mitochondrial membrane proteins and coupling factors using phosphate radiolabelling and hexokinase trapping; omission and inhibition controls were compared with the complete preparation.",
      "claimIds": [
        "M-bio-racker-phosphorylation-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons"
        }
      ],
      "openObligations": [
        "The preparation contains a bovine-heart mitochondrial hydrophobic protein fraction and added coupling factors, in addition to bacteriorhodopsin and lipids. It is not a protein-free membrane or a chemically minimal known-count ATP synthase preparation.",
        "Radiolabelled glucose-6-phosphate is a coupled phosphorylation reporter. ATP is supplied initially and participates in the trap cycle; a larger reporter signal is not a direct free-ATP concentration increase or de novo synthesis of the adenine nucleotide scaffold.",
        "The source explicitly supplies upstream method references and an exchange-suppression rationale. Those references and raw isotope-separation/recovery controls were not independently reviewed, so the operational reporter boundary remains explicit.",
        "Darkness and coupling-factor omission reduce the reporter, but omission of coupling factors does not produce an exact zero in Table I. Source zero entries for other controls are finite assay observations, not proven zero microscopic rates.",
        "The pump-only pH experiment is separate from this ATP-machinery endpoint assay. No matched complete proton-motive-force measurement, photon/ATP efficiency, H+/ATP stoichiometry, direct redox flux or maintained network turnover is admitted.",
        "The source reports lipid dependence of coupling. Pumping in one lipid preparation cannot be equated automatically with phosphorylation in every lipid composition.",
        "No numerical Table I effect size is admitted from OCR. The full table image, replicate/error statistics, raw tracer data and complete energy accounting were not independently audited."
      ]
    },
    {
      "id": "bio:racker-phosphorylation-response",
      "name": "Light-dependent trapped-phosphorylation response",
      "kind": "scoped-process",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The complete illuminated preparation produced a higher phosphorylation-reporter signal than darkness. Coupling-factor omission or rutamycin reduced the signal; purple-membrane omission or uncoupler addition abolished detectable reporter formation in the reported comparison.",
      "claimIds": [
        "C-bio-racker-phosphorylation-response"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons"
        }
      ],
      "openObligations": [
        "The preparation contains a bovine-heart mitochondrial hydrophobic protein fraction and added coupling factors, in addition to bacteriorhodopsin and lipids. It is not a protein-free membrane or a chemically minimal known-count ATP synthase preparation.",
        "Radiolabelled glucose-6-phosphate is a coupled phosphorylation reporter. ATP is supplied initially and participates in the trap cycle; a larger reporter signal is not a direct free-ATP concentration increase or de novo synthesis of the adenine nucleotide scaffold.",
        "The source explicitly supplies upstream method references and an exchange-suppression rationale. Those references and raw isotope-separation/recovery controls were not independently reviewed, so the operational reporter boundary remains explicit.",
        "Darkness and coupling-factor omission reduce the reporter, but omission of coupling factors does not produce an exact zero in Table I. Source zero entries for other controls are finite assay observations, not proven zero microscopic rates.",
        "The pump-only pH experiment is separate from this ATP-machinery endpoint assay. No matched complete proton-motive-force measurement, photon/ATP efficiency, H+/ATP stoichiometry, direct redox flux or maintained network turnover is admitted.",
        "The source reports lipid dependence of coupling. Pumping in one lipid preparation cannot be equated automatically with phosphorylation in every lipid composition.",
        "No numerical Table I effect size is admitted from OCR. The full table image, replicate/error statistics, raw tracer data and complete energy accounting were not independently audited."
      ]
    },
    {
      "id": "bio:racker-coupling-interpretation",
      "name": "Bounded modern-vesicle chemiosmotic interpretation",
      "kind": "hypothesis",
      "status": "evidence-scoped",
      "level": 3,
      "description": "The separate proton-response and phosphorylation controls support the authors’ finite chemiosmotic energy-transduction interpretation in reconstituted protein-containing vesicles. They do not identify an altered intrinsic reaction equilibrium constant or demonstrate protein-free primordial coupling.",
      "claimIds": [
        "C-bio-racker-coupling-interpretation",
        "M-bio-racker-coupling-interpretation"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions"
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons"
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/24"
        }
      ],
      "openObligations": [
        "One source publication supplies two linked preparation-specific contexts. Multiple readouts and controls do not constitute independent publications or independent laboratory replications.",
        "The joint chemiosmotic interpretation is conditional on the source reporter, orientation and permeability assumptions. Pump-only external-pH traces and ATP-machinery product trapping do not directly measure the same microscopic proton trajectory.",
        "No complete gradient, energy-conversion efficiency, steady ATP synthesis flux, biochemical homeostasis, metabolic-cycle closure or origin-of-life claim follows.",
        "The proteins are obtained from modern biological systems. Their reconstitution supports a finite modern energy-transduction model; it does not demonstrate how a primitive membrane without those proteins could couple a gradient to chemistry.",
        "The positive scope is supplied modern protein machinery under externally supplied illumination and assay reagents. It does not establish universal ATP dependence, complete redox or metabolic cycling, regulated energy redistribution, robust supply or a universal energetic backbone for all higher biochemical organization.",
        "Folded proteins and phosphorylation machinery are supplied preparation components; the experiment does not measure their formation or prove a universal necessary sequence from folding, enzyme catalysis and metabolic cycles. General kinetics/thermodynamics supply bookkeeping, not an additional acquired parent mechanism.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ]
    },
    {
      "id": "bio:primitive-chemiosmotic-coupling-open",
      "name": "Primitive gradient-to-chemistry coupling remains unresolved",
      "kind": "hypothesis",
      "status": "hypothesis",
      "level": 3,
      "description": "The catalogue hypothesis that a primitive boundary can couple an electrochemical gradient to internal chemistry remains unestablished by the primary evidence reviewed here. The modern protein-containing Racker preparation does not supply direct evidence for that protein-free primitive coupling claim.",
      "claimIds": [
        "C-bio-primitive-chemiosmotic-coupling-open"
      ],
      "sourceCoordinates": [
        {
          "sourceId": "legacy-3",
          "locator": "/47"
        },
        {
          "sourceId": "racker1974-purple-vesicle-energy-transduction",
          "locator": "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons"
        }
      ],
      "openObligations": [
        "The selected review contains no directly observed gradient-to-reaction coupling in a protein-free primitive boundary. This is an evidence-scope gap, not an exhaustive absence-of-literature result or proof of impossibility.",
        "Gradient formation, retention or passive equilibration alone does not establish productive coupling to an internal reaction, regulation of a network, self-maintenance or a historical primordial pathway.",
        "No carrier count, protocell threshold, necessary developmental hierarchy or physical instance is admitted. No experimental design or optimization is proposed.",
        "The original claims of enduring primitive boundary-to-interior regulation, otherwise unfavourable chemistry and stabilized internal networks remain hypotheses. Passive permeability, supplied pH conditions, modern phosphorylation machinery and driven-state definitions do not jointly instantiate a primitive transduction system.",
        "Catalogue level, phase, process/property role, science/status strings and requirement categories are representation choices. Original parent weights, necessity, directions/modes, carrier minima/critical counts and null saturation are not measured causal fractions, universal thresholds or independent evidence. Generic evidence placeholders supply no additional primary result."
      ]
    },
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
    }
  ],
  "relations": [
    {
      "id": "biochemistry:reaction-gibbs-equilibrium-electrochemical-gradient-coupling",
      "source": "bio:reaction-gibbs-equilibrium",
      "target": "bio:electrochemical-gradient-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Driven ion activity and electrochemical-potential changes retain the declared standard-reaction equilibrium convention.",
      "claimIds": [
        "D-bio-reaction-gibbs-equilibrium",
        "D-bio-electrochemical-gradient-coupling"
      ]
    },
    {
      "id": "biochemistry:racker-proton-context-response",
      "source": "bio:racker-proton-context",
      "target": "bio:racker-proton-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared pH method and its controls support this finite external-medium response.",
      "claimIds": [
        "M-bio-racker-proton-response",
        "C-bio-racker-proton-response",
        "D-bio-racker-bioenergetic-readouts"
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context"
      ]
    },
    {
      "id": "biochemistry:racker-phosphorylation-context-response",
      "source": "bio:racker-phosphorylation-context",
      "target": "bio:racker-phosphorylation-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared radiophosphorylation trap and its controls support this finite endpoint reporter response.",
      "claimIds": [
        "M-bio-racker-phosphorylation-response",
        "C-bio-racker-phosphorylation-response",
        "D-bio-racker-bioenergetic-readouts"
      ],
      "contextIds": [
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "biochemistry:racker-proton-coupling-interpretation",
      "source": "bio:racker-proton-response",
      "target": "bio:racker-coupling-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional source coupling interpretation jointly depends on both declared preparation-specific responses.",
      "claimIds": [
        "M-bio-racker-coupling-interpretation",
        "C-bio-racker-coupling-interpretation"
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context",
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    },
    {
      "id": "biochemistry:racker-phosphorylation-coupling-interpretation",
      "source": "bio:racker-phosphorylation-response",
      "target": "bio:racker-coupling-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The conditional source coupling interpretation jointly depends on both declared preparation-specific responses.",
      "claimIds": [
        "M-bio-racker-coupling-interpretation",
        "C-bio-racker-coupling-interpretation"
      ],
      "contextIds": [
        "racker1974-purple-vesicle-proton-context",
        "racker1974-purple-vesicle-phosphorylation-context"
      ]
    }
  ],
  "studies": [
    {
      "sourceId": "racker1974-purple-vesicle-energy-transduction",
      "studyType": "primary-experiment",
      "doi": "10.1016/S0021-9258(19)43080-9",
      "journal": "Journal of Biological Chemistry",
      "volume": "249",
      "issue": "2",
      "pages": "662-663",
      "readExtent": "complete-original-article-text-and-captions-through-mirror-no-image-audit",
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/4272126/",
      "correctionCheck": "Metadata checked 2026-10-20 against the original article header, primary publisher indexed record and PubMed 4272126. Title, Efraim Racker and Walther Stoeckenius, J. Biol. Chem. 249(2), 662-663 and 25 January 1974 agree; mirror February metadata is not used in place of the original issue date. DOI 10.1016/S0021-9258(19)43080-9 is supplied by the primary publisher record. A Crossref API fetch was unavailable; no registry relation audit is claimed. No explicit correction or retraction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or a complete later-literature review.",
      "id": "racker1974-purple-vesicle-proton-context",
      "system": "Modern bacteriorhodopsin-containing phospholipid vesicles, distinct from the phosphorylation preparation",
      "preparation": "The source reconstituted purple membrane in phospholipid vesicles and recorded external pH during light/dark changes with acid-pulse calibration and transport-disrupting controls.",
      "observable": "Calibrated external-medium glass-electrode pH response to illumination and darkness, with transport-disrupting controls.",
      "finding": "Illumination raised external pH in the reconstituted purple-membrane vesicles, and darkness reversed the response. Transport-disrupting controls suppressed it. The authors interpret this as inward proton translocation opposed by passive leakage.",
      "limitations": [
        "The electrode measures external medium pH. Transmembrane proton uptake is a source interpretation supported by reversibility and ionophore/uncoupler controls, not an independent inside-pH or electrical-potential measurement.",
        "The source models the illuminated plateau as pumping balanced by passive back diffusion. A plateau is not thermodynamic equilibrium, an exact zero proton flux or feedback regulation toward a physiological pH setpoint.",
        "Low buffering increases pH sensitivity. Buffering and lipid composition affect the trace; neither a microscopic proton count per pump cycle nor exact per-vesicle protein occupancy is determined.",
        "This modern bacteriorhodopsin-containing preparation uses supplied biological membrane protein and phospholipid. It does not establish a protein-free primitive boundary, an origin-of-life history, redox pumping or ATP generation by these pump-only vesicles.",
        "No new numerical curve values or fit errors are admitted. Original raw traces, repeat counts, calibration uncertainty and full reproducibility were not independently audited."
      ],
      "reviewedLocators": [
        "J. Biol. Chem. 249(2), 662-663, Materials and Methods: pH measurement and HCl calibration; Results and Discussion: light/dark and ionophore controls; Figures 1-2 captions",
        "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations"
      ]
    },
    {
      "sourceId": "racker1974-purple-vesicle-energy-transduction",
      "studyType": "primary-experiment",
      "doi": "10.1016/S0021-9258(19)43080-9",
      "journal": "Journal of Biological Chemistry",
      "volume": "249",
      "issue": "2",
      "pages": "662-663",
      "readExtent": "complete-original-article-text-and-captions-through-mirror-no-image-audit",
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://pubmed.ncbi.nlm.nih.gov/4272126/",
      "correctionCheck": "Metadata checked 2026-10-20 against the original article header, primary publisher indexed record and PubMed 4272126. Title, Efraim Racker and Walther Stoeckenius, J. Biol. Chem. 249(2), 662-663 and 25 January 1974 agree; mirror February metadata is not used in place of the original issue date. DOI 10.1016/S0021-9258(19)43080-9 is supplied by the primary publisher record. A Crossref API fetch was unavailable; no registry relation audit is claimed. No explicit correction or retraction surfaced in limited exact-title/DOI searches. This is not proof of absence of corrections or a complete later-literature review.",
      "id": "racker1974-purple-vesicle-phosphorylation-context",
      "system": "Modern bacteriorhodopsin/phospholipid vesicles with bovine-heart mitochondrial proteins and added coupling factors",
      "preparation": "The source assayed illuminated vesicles containing purple membrane, mitochondrial membrane proteins and coupling factors using phosphate radiolabelling and hexokinase trapping; omission and inhibition controls were compared with the complete preparation.",
      "observable": "Radiolabelled glucose-6-phosphate endpoint from the supplied ATP/glucose/hexokinase phosphate-trapping system and omission/inhibition comparisons.",
      "finding": "The complete illuminated preparation produced a higher phosphorylation-reporter signal than darkness. Coupling-factor omission or rutamycin reduced the signal; purple-membrane omission or uncoupler addition abolished detectable reporter formation in the reported comparison.",
      "limitations": [
        "The preparation contains a bovine-heart mitochondrial hydrophobic protein fraction and added coupling factors, in addition to bacteriorhodopsin and lipids. It is not a protein-free membrane or a chemically minimal known-count ATP synthase preparation.",
        "Radiolabelled glucose-6-phosphate is a coupled phosphorylation reporter. ATP is supplied initially and participates in the trap cycle; a larger reporter signal is not a direct free-ATP concentration increase or de novo synthesis of the adenine nucleotide scaffold.",
        "The source explicitly supplies upstream method references and an exchange-suppression rationale. Those references and raw isotope-separation/recovery controls were not independently reviewed, so the operational reporter boundary remains explicit.",
        "Darkness and coupling-factor omission reduce the reporter, but omission of coupling factors does not produce an exact zero in Table I. Source zero entries for other controls are finite assay observations, not proven zero microscopic rates.",
        "The pump-only pH experiment is separate from this ATP-machinery endpoint assay. No matched complete proton-motive-force measurement, photon/ATP efficiency, H+/ATP stoichiometry, direct redox flux or maintained network turnover is admitted.",
        "The source reports lipid dependence of coupling. Pumping in one lipid preparation cannot be equated automatically with phosphorylation in every lipid composition.",
        "No numerical Table I effect size is admitted from OCR. The full table image, replicate/error statistics, raw tracer data and complete energy accounting were not independently audited."
      ],
      "reviewedLocators": [
        "J. Biol. Chem. 249(2), 662-663, Materials and Methods: ATP formation assay; Results and Discussion: mitochondrial fraction/coupling-factor and lipid dependence; Table I caption and qualitative control comparisons",
        "J. Biol. Chem. 249(2), 662-663, Results and Discussion: preferential orientation, pump/back-diffusion steady-state interpretation and chemiosmotic conclusion; distinct Figures 1-2 versus Table I preparations"
      ]
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:electrochemical-gradient-coupling",
      "role": "quantity-definition",
      "denotes": "Thermodynamic bookkeeping convention, distinct from an experimental gradient or energy-yield measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-electrochemical-gradient-coupling"
      ]
    },
    {
      "nodeId": "bio:racker-bioenergetic-readouts",
      "role": "quantity-definition",
      "denotes": "Declared observable identities for the two source preparations.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-racker-bioenergetic-readouts"
      ]
    },
    {
      "nodeId": "bio:racker-proton-context",
      "role": "experimental-context",
      "denotes": "Qualitative assay and control contract; no new operating recipe.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-racker-proton-response"
      ]
    },
    {
      "nodeId": "bio:racker-proton-response",
      "role": "scoped-phenomenon",
      "denotes": "Finite calibrated bulk-pH response and source pump/leak interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-racker-proton-response"
      ]
    },
    {
      "nodeId": "bio:racker-phosphorylation-context",
      "role": "experimental-context",
      "denotes": "Qualitative endpoint phosphorylation-reporter contract, separate from the pH assay.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-racker-phosphorylation-response"
      ]
    },
    {
      "nodeId": "bio:racker-phosphorylation-response",
      "role": "scoped-phenomenon",
      "denotes": "Finite source-reported phosphate-to-trapped-product response with controlled omissions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-racker-phosphorylation-response"
      ]
    },
    {
      "nodeId": "bio:racker-coupling-interpretation",
      "role": "hypothesis",
      "denotes": "Published model interpretation bounded by the source observations and preparations.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-racker-coupling-interpretation",
        "M-bio-racker-coupling-interpretation"
      ]
    },
    {
      "nodeId": "bio:primitive-chemiosmotic-coupling-open",
      "role": "hypothesis",
      "denotes": "Explicit unresolved interpretation of original card 3.47, not a claim that such coupling is impossible.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-primitive-chemiosmotic-coupling-open"
      ]
    },
    {
      "nodeId": "bio:reaction-gibbs-equilibrium",
      "role": "quantity-definition",
      "denotes": "Definitions of reaction Gibbs energy, reaction quotient and equilibrium constant under a specified reaction equation and reference state.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-reaction-gibbs-equilibrium"
      ]
    }
  ]
};
