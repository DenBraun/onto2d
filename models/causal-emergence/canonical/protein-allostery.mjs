// Exact reviewed scientific records; shared preparations remain one acquisition.
export const PROTEIN_ALLOSTERY_RECORDS = {
  "sources": [
    {
      "id": "popovych2006-capn-allostery",
      "kind": "research-publication",
      "title": "Dynamically driven protein allostery",
      "authors": [
        "Nataliya Popovych",
        "Shangjin Sun",
        "Richard H. Ebright",
        "Charalampos G. Kalodimos"
      ],
      "year": 2006,
      "doi": "10.1038/nsmb1132",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2757644/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-nih-author-manuscript-html-and-nine-main-figures-supplement-unread",
        "locators": [
          "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        ],
        "limit": "Read the complete actual NIH author manuscript HTML main article, all Results/Discussion/Methods, Equations 1-3 and references, and visually inspected all nine main figure images from the article CDN. The underlying source is Popovych et al. 2006, not a later review. Published pages 831-838 are bibliographic metadata; manuscript PDF page identity was not read because the PDF endpoint returned a download challenge. Supporting Information including additional assignments, buffer/detail and exchange-contamination arguments, original NMR/ITC data, Origin model implementation and full covariance were not newly read or replayed. Crossref, PubMed PMID16906160/PMC2757644 and the publisher issue listing agree on the four authors, title, DOI, journal13(9):831-838, online13August2006 and September2006 issue. No linked correction was found in limited title/DOI/publisher searches on2026-10-20; empty Crossref relation/update fields do not establish correction absence. The manuscript body prints an enthalpy difference with a repeated index; Figure7 supplies distinct first/second terms. The Figure4 Leu29 caption has an anomalous printed exchange-rate string; no numerical Leu29 rate is admitted. No complete identity with a separately inspected final publisher PDF is claimed."
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
      "id": "M-bio-popovych2006-capn-nmr-context",
      "kind": "method",
      "statement": "Express and purify His6-tagged CAPN residues1-138 from E. coli CAP, using isotope labeling and nickel/size-exclusion purification as stated. At30C and600MHz record apo, nominal1:1 cAMP:CAPN-dimer and nominal2:1 preparations; the source typically uses0.4mM protein and checks representative relaxation data at0.05,0.4 and1.05mM. Measure backbone chemical shifts, relaxation/dispersion and amide H/D exchange after transfer to D2O. Use the source pD adjustment and identical exchange conditions across ligation states. The complete NMR solution composition and numeric exchange pD are not supplied in the reviewed main-method passages and are not inferred from the separate ITC buffer.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process."
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "M-bio-popovych2006-capn-itc-context",
      "kind": "method",
      "statement": "At30C titrate0.6mM cAMP into a30micromolar CAPN preparation using a VP-ITC instrument after dialysis into50mM potassium phosphate pH6.0,500mM KCl and1mM TCEP. Ligand is prepared in the final buffer-exchange flow-through. Discard the preliminary2microliter injection and use the subsequent30 eight-microliter injections. Fit the integrated isotherm using the sequential binding-site model in Origin7.0; NMR preparations use different stated protein concentrations and are not treated as the same physical sample.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "contextIds": [
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "D-bio-cooperativity-fit-boundary",
      "kind": "review-finding",
      "statement": "For this review, binding cooperativity denotes occupancy-dependent binding preference within a declared molecular preparation. A nonlinear curve, a sequential-fit constant, a phenomenological Hill coefficient and a molecular site count have different roles. No Hill coefficient is fitted in the selected CAPN paper, so no Hill value, Hill-to-site-count conversion or Hill-based mechanism assignment is admitted. Its negative-cooperativity interpretation uses the two-site dimer model together with NMR and calorimetry.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ]
    },
    {
      "id": "D-bio-allostery-response-boundary",
      "kind": "review-finding",
      "statement": "Use allostery here for a declared distal response to ligand binding in the same connected CAPN assembly, while keeping the measured response separate from the communication mechanism. The source binding affinity, chemical shift, relaxation and amide-exchange readouts differ. A change in exchange protection is not an intrinsic bond-dissociation energy, electronic interaction potential, catalytic turnover or proof that every allosteric response requires a large mean conformational change.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "This operational definition does not equate allostery with positive cooperativity, switch-like amplification, an ordered SOMA level transition or a temporal feedback loop."
      ]
    },
    {
      "id": "C-bio-capn-ligation-comparison",
      "kind": "review-finding",
      "statement": "The controlled series changes supplied cAMP while retaining the source CAPN construct and NMR protocol. Apo and doubly liganded preparations show one principal set of subunit signals, whereas the nominal singly liganded preparation shows distinct liganded/unliganded signal sets. These are the source occupancy assignments used to compare local and remote responses, without a newly asserted100-percent pure state population.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "C-bio-capn-sequential-binding",
      "kind": "review-finding",
      "statement": "The biphasic CAPN ITC isotherm is fitted with a sequential-site model. Figure7 reports first/second step Kd=0.04 and4micromolar and corresponding rounded deltaG=-10.3 and-7.5kcal/mol. It reports deltaH=-1.8 and-2.9kcal/mol and total -T*deltaS=-8.5 and-4.6kcal/mol. Thus the second step is less favorable overall in the source interpretation despite a more favorable enthalpy; its relative total entropic penalty is about4kcal/mol. This is negative cooperativity, not sensitivity amplification inferred from a positive Hill slope.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "The manuscript prose prints an enthalpy-difference expression with a repeated first index; the distinct Figure7 entries are the admitted source values. Rounded displayed free-energy, heat and entropy entries do not supply exact covariance or separate microscopic coupling energy.",
        "Both binding steps have favorable total entropy terms in Figure7. A less favorable second-step entropy is not the same as unfavorable total entropy of that step."
      ],
      "contextIds": [
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "C-bio-capn-distal-nmr-response",
      "kind": "review-finding",
      "statement": "Relative to apo CAPN, the nominal singly liganded preparation shows increased slow-exchange contributions in both subunits, including remote residues mapped up to about35angstrom from bound cAMP in the adopted structural model. Adding the second ligand suppresses the measured slow/fast-motion signatures more widely. The unliganded pocket has small mean chemical-shift perturbations in the first-step comparison, so the source supports a distal dynamic response without resolving a unique communication pathway.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "The plotted maps and representative dispersion curves are source analyses of backbone signals; they do not directly count conformations, measure energy transmission along a unique atom chain or prove absence of every structural contribution.",
        "The source Figure4 Leu29 caption contains an anomalous rate string; no specific Leu29 numerical rate or excited-state population is adopted."
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "C-bio-capn-amide-exchange-response",
      "kind": "review-finding",
      "statement": "The source measures amide-proton exchange from HSQC intensity time courses under identical exchange conditions for the three assigned ligation states. The first cAMP comparison gives limited protection largely in the liganded subunit; the second gives a broader decrease in exchange rates, particularly around the dimer interface. This is a finite ligand-dependent change in local exchange/protection, rather than direct measurement of stronger individual covalent or hydrogen bonds.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "An H/D exchange rate depends on access, opening/closing, solvent and chemical-exchange conditions. Increased protection does not by itself uniquely determine hydration structure, intrinsic bond strength, an energetic barrier or native conformational population.",
        "No new kinetic fit, absolute residue-rate table, intrinsic exchange calibration or numeric pD is reconstructed. The main-text common-condition statement supports the within-study comparison."
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "C-bio-capn-entropic-interpretation",
      "kind": "review-finding",
      "statement": "The source combines ITC total thermodynamics with NMR motion changes to interpret the negative cooperativity as dynamics-mediated. Its backbone-order-parameter model estimates first/second conformational penalties -T*deltaSconf=3.2 and18.1kcal/mol. These are upper-bound model estimates under uncorrelated-motion assumptions; their difference is not the same quantity as the about4kcal/mol total entropy difference from ITC. The data support a conditional dynamic/entropic account, not exclusive identification of an entropy-only microscopic mechanism.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "Conformational entropy is inferred using reduced spectral densities, exchange-corrected T2, local rotational times and the source order-parameter-to-entropy mapping. Backbone amplitudes, correlations, unmeasured motions and solvent/ligand entropy restrict quantitative interpretation.",
        "The article expressly treats its conformational entropy estimate as an upper bound because it assumes motions are uncorrelated. Its own discussion invokes favorable solvation entropy; total ITC entropy is not a direct measurement of protein-only entropy.",
        "A dynamic response, an entropic balance and an undetected mean-shift response do not uniquely rule out all structural, solvent or electrostatic contributions, prove a universal mechanism, or discriminate all MWC/KNF/landscape descriptions."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "M-bio-capn-response-interpretation-method",
      "kind": "method",
      "statement": "Interpret the controlled ligand-series NMR, exchange and separate ITC fits jointly, retaining state assignment, concentration, model and entropy boundaries. Do not replace statistical site conventions with Hill counts or treat a source structural/dynamic interpretation as independently measured microscopic dynamics.",
      "scope": "Descriptive analysis dependency, not an additional acquisition, independent replication or physical cause.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "C-bio-cooperativity-source-scope",
      "kind": "review-finding",
      "statement": "Card3.5 is qualified to negative sequential cAMP-binding cooperativity in prepared dimeric CAPN, with site-assigned NMR and separate calorimetry. Coupled binding/dynamic behavior is retained without inferring positive amplification, a universal Hill/site-count rule, catalytic turnover or a unique allosteric mechanism.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original site/subunit energetic coupling is qualified to source-defined CAPN binding/dynamics. The selected result is negative homotropic coupling; positive cooperativity, sensitivity amplification, sigmoid switching, threshold response and generalized catalytic coordination are not measured by this case.",
        "A nonlinear response is not sufficient by itself to establish cooperativity. No Hill coefficient, integer site inference from a Hill exponent, mutational coupling pathway or validated mechanical propagation chain is supplied.",
        "Original parents3.0 folding(weight0.4,necessary,constraint),3.1 enzymatic catalysis(0.3,enabling,regulation),3.2 active sites(0.2,enabling,constraint),2.7 hydrogen bonds(0.1,contextual,constraint) have horizontal direction[2] and cooperation/feedback/constraint modes as catalogued. Prepared CAPN supplies no universal necessity or those weights; cAMP binding in the isolated fragment is not catalytic turnover.",
        "Every3.5 parent uses functional-material/molecule carrier2/4,N_min=N_crit=1,N_sat=null. No operational carrier threshold is measured, and a recurrent equilibrium interaction is not proof of a temporal feedback cycle."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "C-bio-protein-allostery-source-scope",
      "kind": "review-finding",
      "statement": "Card3.12 is qualified to controlled cAMP-dependent changes in remote CAPN relaxation and exchange readouts, combined with source-inferred binding preference. The finite result supports distal regulation within the prepared assembly while leaving microscopic communication, structural exclusivity and biological function outside the selected measurements.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original ligand-induced distal response is qualified to CAPN binding, relaxation and exchange in the selected construct. Covalent regulatory modification, catalytic accessibility, altered catalytic activity, general conformational stability, adaptive response, multi-signal integration and living-system regulation are not measured here.",
        "The source supports effects on motions with limited remote mean-shift response. It does not establish that all allostery requires a large conformational change, that one particular microscopic pathway is necessary, or that every folded protein has this regulatory property.",
        "Original parents3.0 folding(weight0.35,necessary,constraint),3.1 catalysis(0.3,enabling,regulation),3.5 cooperativity(0.25,necessary,regulation),2.7 hydrogen bonds(0.1,contextual,constraint) have downward direction[1] and constraint/feedback modes as catalogued. They are not established universal stages by this one dimer experiment.",
        "All3.12 parents use carrier2/4,N_min=1,N_sat=null; N_crit=1 except the3.5 edge hasN_crit=2. Neither that two-carrier criticality nor a universal requirement for multiple molecules is operationalized. Homotropic coupling here does not prove that every allosteric response requires prior cooperativity or catalysis."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "C-bio-allosteric-local-response-source-scope",
      "kind": "review-finding",
      "statement": "Card3.33 is qualified to ligand-dependent binding-preference inference and local amide-exchange protection in CAPN. These readouts show finite local chemical/interaction response without measuring intrinsic bond strength, electronic interaction potential, catalytic competence or a general global-to-local chemical law.",
      "scope": "Specified isolated CAPN construct, ligation preparation and readout; no universal protein mechanism.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "supports",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original distant binding-propensity/local reactivity claims are qualified to sequential cAMP binding inference and amide H/D exchange protection. Catalytic competence, bond strengths, reaction-pathway preference and electronic interaction potentials are not measured and are excluded from the admitted finite result.",
        "The ligand intervention does not intentionally alter CAPN covalent connectivity; that protocol fact is not a proof that every covalent bond or electronic distribution remains exactly unchanged. H/D exchange itself is an isotope-exchange readout, not an independent bond-energy measurement.",
        "Original global structure reshaping local conditions is an interpretation boundary, not evidence for a universal cross-scale/downward-causation law. A hydrophobic/ionic/solvent mechanism is not isolated by the chosen results.",
        "Original parents3.12 allostery(weight0.4,necessary,regulation),2.3 chemical bonding(0.35,necessary,constraint),2.8 polarization(0.15,enabling,constraint),3.31 hydration/ionic microenvironments(0.1,contextual,environment) have downward direction[1] and feedback/constraint modes as catalogued. No source intervention identifies those weights or establishes their independent necessity; an HDX interpretation is not a newly measured hydration-shell or dipole prerequisite.",
        "Every3.33 parent uses carrier2/4,N_min=N_crit=1,N_sat=null. No counted carrier, threshold or universal saturation witness is supplied."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "M-bio-capn-card-synthesis-method",
      "kind": "method",
      "statement": "Map the shared CAPN experiments into the three finite card scopes while retaining negative versus positive coupling, actual assays, distinct NMR/ITC preparations and the exclusion of numerical/default ontological ancestry.",
      "scope": "Descriptive analysis dependency, not an additional acquisition, independent replication or physical cause.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis",
          "role": "method",
          "note": "Actually read primary author-manuscript passage and main figures; finite prepared-system observation, fitted quantity or conditional interpretation only, with no independent numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition."
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:popovych2006-capn-nmr-context",
      "name": "CAPN ligand-series NMR and exchange context",
      "kind": "context",
      "description": "Express and purify His6-tagged CAPN residues1-138 from E. coli CAP, using isotope labeling and nickel/size-exclusion purification as stated. At30C and600MHz record apo, nominal1:1 cAMP:CAPN-dimer and nominal2:1 preparations; the source typically uses0.4mM protein and checks representative relaxation data at0.05,0.4 and1.05mM. Measure backbone chemical shifts, relaxation/dispersion and amide H/D exchange after transfer to D2O. Use the source pD adjustment and identical exchange conditions across ligation states. The complete NMR solution composition and numeric exchange pD are not supplied in the reviewed main-method passages and are not inferred from the separate ITC buffer.",
      "claimIds": [
        "M-bio-popovych2006-capn-nmr-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process."
      ],
      "level": 3
    },
    {
      "id": "bio:popovych2006-capn-itc-context",
      "name": "CAPN sequential-binding calorimetry context",
      "kind": "context",
      "description": "At30C titrate0.6mM cAMP into a30micromolar CAPN preparation using a VP-ITC instrument after dialysis into50mM potassium phosphate pH6.0,500mM KCl and1mM TCEP. Ligand is prepared in the final buffer-exchange flow-through. Discard the preliminary2microliter injection and use the subsequent30 eight-microliter injections. Fit the integrated isotherm using the sequential binding-site model in Origin7.0; NMR preparations use different stated protein concentrations and are not treated as the same physical sample.",
      "claimIds": [
        "M-bio-popovych2006-capn-itc-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "level": 3
    },
    {
      "id": "bio:cooperativity-fit-boundary",
      "name": "Cooperativity, sequential binding and site-count boundary",
      "kind": "definition",
      "description": "For this review, binding cooperativity denotes occupancy-dependent binding preference within a declared molecular preparation. A nonlinear curve, a sequential-fit constant, a phenomenological Hill coefficient and a molecular site count have different roles. No Hill coefficient is fitted in the selected CAPN paper, so no Hill value, Hill-to-site-count conversion or Hill-based mechanism assignment is admitted. Its negative-cooperativity interpretation uses the two-site dimer model together with NMR and calorimetry.",
      "claimIds": [
        "D-bio-cooperativity-fit-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "level": 3
    },
    {
      "id": "bio:allostery-response-boundary",
      "name": "Distal allostery and local chemical-readout boundary",
      "kind": "definition",
      "description": "Use allostery here for a declared distal response to ligand binding in the same connected CAPN assembly, while keeping the measured response separate from the communication mechanism. The source binding affinity, chemical shift, relaxation and amide-exchange readouts differ. A change in exchange protection is not an intrinsic bond-dissociation energy, electronic interaction potential, catalytic turnover or proof that every allosteric response requires a large mean conformational change.",
      "claimIds": [
        "D-bio-allostery-response-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "This operational definition does not equate allostery with positive cooperativity, switch-like amplification, an ordered SOMA level transition or a temporal feedback loop."
      ],
      "level": 3
    },
    {
      "id": "bio:capn-ligation-comparison",
      "name": "Prepared CAPN ligation-state comparison",
      "kind": "scoped-process",
      "description": "The controlled series changes supplied cAMP while retaining the source CAPN construct and NMR protocol. Apo and doubly liganded preparations show one principal set of subunit signals, whereas the nominal singly liganded preparation shows distinct liganded/unliganded signal sets. These are the source occupancy assignments used to compare local and remote responses, without a newly asserted100-percent pure state population.",
      "claimIds": [
        "C-bio-capn-ligation-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee."
      ],
      "level": 3
    },
    {
      "id": "bio:capn-sequential-binding",
      "name": "Source-fitted CAPN sequential binding and thermodynamics",
      "kind": "scoped-process",
      "description": "The biphasic CAPN ITC isotherm is fitted with a sequential-site model. Figure7 reports first/second step Kd=0.04 and4micromolar and corresponding rounded deltaG=-10.3 and-7.5kcal/mol. It reports deltaH=-1.8 and-2.9kcal/mol and total -T*deltaS=-8.5 and-4.6kcal/mol. Thus the second step is less favorable overall in the source interpretation despite a more favorable enthalpy; its relative total entropic penalty is about4kcal/mol. This is negative cooperativity, not sensitivity amplification inferred from a positive Hill slope.",
      "claimIds": [
        "C-bio-capn-sequential-binding"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "The manuscript prose prints an enthalpy-difference expression with a repeated first index; the distinct Figure7 entries are the admitted source values. Rounded displayed free-energy, heat and entropy entries do not supply exact covariance or separate microscopic coupling energy.",
        "Both binding steps have favorable total entropy terms in Figure7. A less favorable second-step entropy is not the same as unfavorable total entropy of that step."
      ],
      "level": 3
    },
    {
      "id": "bio:capn-distal-nmr-response",
      "name": "Ligand-dependent distal CAPN relaxation response",
      "kind": "scoped-process",
      "description": "Relative to apo CAPN, the nominal singly liganded preparation shows increased slow-exchange contributions in both subunits, including remote residues mapped up to about35angstrom from bound cAMP in the adopted structural model. Adding the second ligand suppresses the measured slow/fast-motion signatures more widely. The unliganded pocket has small mean chemical-shift perturbations in the first-step comparison, so the source supports a distal dynamic response without resolving a unique communication pathway.",
      "claimIds": [
        "C-bio-capn-distal-nmr-response"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "The plotted maps and representative dispersion curves are source analyses of backbone signals; they do not directly count conformations, measure energy transmission along a unique atom chain or prove absence of every structural contribution.",
        "The source Figure4 Leu29 caption contains an anomalous rate string; no specific Leu29 numerical rate or excited-state population is adopted."
      ],
      "level": 3
    },
    {
      "id": "bio:capn-amide-exchange-response",
      "name": "Ligand-dependent CAPN amide H/D exchange protection",
      "kind": "scoped-process",
      "description": "The source measures amide-proton exchange from HSQC intensity time courses under identical exchange conditions for the three assigned ligation states. The first cAMP comparison gives limited protection largely in the liganded subunit; the second gives a broader decrease in exchange rates, particularly around the dimer interface. This is a finite ligand-dependent change in local exchange/protection, rather than direct measurement of stronger individual covalent or hydrogen bonds.",
      "claimIds": [
        "C-bio-capn-amide-exchange-response"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "An H/D exchange rate depends on access, opening/closing, solvent and chemical-exchange conditions. Increased protection does not by itself uniquely determine hydration structure, intrinsic bond strength, an energetic barrier or native conformational population.",
        "No new kinetic fit, absolute residue-rate table, intrinsic exchange calibration or numeric pD is reconstructed. The main-text common-condition statement supports the within-study comparison."
      ],
      "level": 3
    },
    {
      "id": "bio:capn-entropic-interpretation",
      "name": "Conditional CAPN conformational-entropy interpretation",
      "kind": "scoped-process",
      "description": "The source combines ITC total thermodynamics with NMR motion changes to interpret the negative cooperativity as dynamics-mediated. Its backbone-order-parameter model estimates first/second conformational penalties -T*deltaSconf=3.2 and18.1kcal/mol. These are upper-bound model estimates under uncorrelated-motion assumptions; their difference is not the same quantity as the about4kcal/mol total entropy difference from ITC. The data support a conditional dynamic/entropic account, not exclusive identification of an entropy-only microscopic mechanism.",
      "claimIds": [
        "C-bio-capn-entropic-interpretation"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "Conformational entropy is inferred using reduced spectral densities, exchange-corrected T2, local rotational times and the source order-parameter-to-entropy mapping. Backbone amplitudes, correlations, unmeasured motions and solvent/ligand entropy restrict quantitative interpretation.",
        "The article expressly treats its conformational entropy estimate as an upper bound because it assumes motions are uncorrelated. Its own discussion invokes favorable solvation entropy; total ITC entropy is not a direct measurement of protein-only entropy.",
        "A dynamic response, an entropic balance and an undetected mean-shift response do not uniquely rule out all structural, solvent or electrostatic contributions, prove a universal mechanism, or discriminate all MWC/KNF/landscape descriptions."
      ],
      "level": 3
    },
    {
      "id": "bio:cooperativity-source-scope",
      "name": "Scoped CAPN binding cooperativity",
      "kind": "scoped-process",
      "description": "Card3.5 is qualified to negative sequential cAMP-binding cooperativity in prepared dimeric CAPN, with site-assigned NMR and separate calorimetry. Coupled binding/dynamic behavior is retained without inferring positive amplification, a universal Hill/site-count rule, catalytic turnover or a unique allosteric mechanism.",
      "claimIds": [
        "C-bio-cooperativity-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/5"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/5"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original site/subunit energetic coupling is qualified to source-defined CAPN binding/dynamics. The selected result is negative homotropic coupling; positive cooperativity, sensitivity amplification, sigmoid switching, threshold response and generalized catalytic coordination are not measured by this case.",
        "A nonlinear response is not sufficient by itself to establish cooperativity. No Hill coefficient, integer site inference from a Hill exponent, mutational coupling pathway or validated mechanical propagation chain is supplied.",
        "Original parents3.0 folding(weight0.4,necessary,constraint),3.1 enzymatic catalysis(0.3,enabling,regulation),3.2 active sites(0.2,enabling,constraint),2.7 hydrogen bonds(0.1,contextual,constraint) have horizontal direction[2] and cooperation/feedback/constraint modes as catalogued. Prepared CAPN supplies no universal necessity or those weights; cAMP binding in the isolated fragment is not catalytic turnover.",
        "Every3.5 parent uses functional-material/molecule carrier2/4,N_min=N_crit=1,N_sat=null. No operational carrier threshold is measured, and a recurrent equilibrium interaction is not proof of a temporal feedback cycle."
      ],
      "level": 3
    },
    {
      "id": "bio:protein-allostery-source-scope",
      "name": "Scoped distal CAPN allosteric response",
      "kind": "scoped-process",
      "description": "Card3.12 is qualified to controlled cAMP-dependent changes in remote CAPN relaxation and exchange readouts, combined with source-inferred binding preference. The finite result supports distal regulation within the prepared assembly while leaving microscopic communication, structural exclusivity and biological function outside the selected measurements.",
      "claimIds": [
        "C-bio-protein-allostery-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/12"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/12"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original ligand-induced distal response is qualified to CAPN binding, relaxation and exchange in the selected construct. Covalent regulatory modification, catalytic accessibility, altered catalytic activity, general conformational stability, adaptive response, multi-signal integration and living-system regulation are not measured here.",
        "The source supports effects on motions with limited remote mean-shift response. It does not establish that all allostery requires a large conformational change, that one particular microscopic pathway is necessary, or that every folded protein has this regulatory property.",
        "Original parents3.0 folding(weight0.35,necessary,constraint),3.1 catalysis(0.3,enabling,regulation),3.5 cooperativity(0.25,necessary,regulation),2.7 hydrogen bonds(0.1,contextual,constraint) have downward direction[1] and constraint/feedback modes as catalogued. They are not established universal stages by this one dimer experiment.",
        "All3.12 parents use carrier2/4,N_min=1,N_sat=null; N_crit=1 except the3.5 edge hasN_crit=2. Neither that two-carrier criticality nor a universal requirement for multiple molecules is operationalized. Homotropic coupling here does not prove that every allosteric response requires prior cooperativity or catalysis."
      ],
      "level": 3
    },
    {
      "id": "bio:allosteric-local-response-source-scope",
      "name": "Scoped allosteric binding and amide-exchange modulation",
      "kind": "scoped-process",
      "description": "Card3.33 is qualified to ligand-dependent binding-preference inference and local amide-exchange protection in CAPN. These readouts show finite local chemical/interaction response without measuring intrinsic bond strength, electronic interaction potential, catalytic competence or a general global-to-local chemical law.",
      "claimIds": [
        "C-bio-allosteric-local-response-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound"
        },
        {
          "sourceId": "popovych2006-capn-allostery",
          "locator": "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/33"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/33"
        }
      ],
      "openObligations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original distant binding-propensity/local reactivity claims are qualified to sequential cAMP binding inference and amide H/D exchange protection. Catalytic competence, bond strengths, reaction-pathway preference and electronic interaction potentials are not measured and are excluded from the admitted finite result.",
        "The ligand intervention does not intentionally alter CAPN covalent connectivity; that protocol fact is not a proof that every covalent bond or electronic distribution remains exactly unchanged. H/D exchange itself is an isotope-exchange readout, not an independent bond-energy measurement.",
        "Original global structure reshaping local conditions is an interpretation boundary, not evidence for a universal cross-scale/downward-causation law. A hydrophobic/ionic/solvent mechanism is not isolated by the chosen results.",
        "Original parents3.12 allostery(weight0.4,necessary,regulation),2.3 chemical bonding(0.35,necessary,constraint),2.8 polarization(0.15,enabling,constraint),3.31 hydration/ionic microenvironments(0.1,contextual,environment) have downward direction[1] and feedback/constraint modes as catalogued. No source intervention identifies those weights or establishes their independent necessity; an HDX interpretation is not a newly measured hydration-shell or dipole prerequisite.",
        "Every3.33 parent uses carrier2/4,N_min=N_crit=1,N_sat=null. No counted carrier, threshold or universal saturation witness is supplied."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:cooperativity-fit-boundary-allostery-response-boundary",
      "source": "bio:cooperativity-fit-boundary",
      "target": "bio:allostery-response-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The source-specific coupling and distal-response definitions have different measurement roles.",
      "claimIds": [
        "D-bio-cooperativity-fit-boundary",
        "D-bio-allostery-response-boundary"
      ]
    },
    {
      "id": "biochemistry:popovych2006-capn-nmr-context-capn-ligation-comparison",
      "source": "bio:popovych2006-capn-nmr-context",
      "target": "bio:capn-ligation-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The full NMR preparation delimits this ligation-state or response comparison.",
      "claimIds": [
        "M-bio-popovych2006-capn-nmr-context",
        "C-bio-capn-ligation-comparison"
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "biochemistry:popovych2006-capn-nmr-context-capn-distal-nmr-response",
      "source": "bio:popovych2006-capn-nmr-context",
      "target": "bio:capn-distal-nmr-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The full NMR preparation delimits this ligation-state or response comparison.",
      "claimIds": [
        "M-bio-popovych2006-capn-nmr-context",
        "C-bio-capn-distal-nmr-response"
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "biochemistry:popovych2006-capn-nmr-context-capn-amide-exchange-response",
      "source": "bio:popovych2006-capn-nmr-context",
      "target": "bio:capn-amide-exchange-response",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The full NMR preparation delimits this ligation-state or response comparison.",
      "claimIds": [
        "M-bio-popovych2006-capn-nmr-context",
        "C-bio-capn-amide-exchange-response"
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "biochemistry:popovych2006-capn-itc-context-capn-sequential-binding",
      "source": "bio:popovych2006-capn-itc-context",
      "target": "bio:capn-sequential-binding",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated ITC buffer, concentration and sequential model delimit reported stepwise fit parameters.",
      "claimIds": [
        "M-bio-popovych2006-capn-itc-context",
        "C-bio-capn-sequential-binding"
      ],
      "contextIds": [
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-ligation-comparison-capn-distal-nmr-response",
      "source": "bio:capn-ligation-comparison",
      "target": "bio:capn-distal-nmr-response",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "Changing supplied cAMP in the matched source NMR protocol changes remote relaxation readouts; no unique communication mechanism is inferred.",
      "claimIds": [
        "C-bio-capn-distal-nmr-response"
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "biochemistry:capn-ligation-comparison-capn-amide-exchange-response",
      "source": "bio:capn-ligation-comparison",
      "target": "bio:capn-amide-exchange-response",
      "kind": "functional-support",
      "role": "scoped-operating-support",
      "assertion": "The source ligand-series comparison changes amide-exchange protection under its stated identical exchange conditions.",
      "claimIds": [
        "C-bio-capn-amide-exchange-response"
      ],
      "contextIds": [
        "popovych2006-capn-nmr"
      ]
    },
    {
      "id": "biochemistry:capn-sequential-binding-capn-entropic-interpretation",
      "source": "bio:capn-sequential-binding",
      "target": "bio:capn-entropic-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement/fit contributes to the same-publication conditional entropy interpretation; total and backbone-model entropy remain distinct.",
      "claimIds": [
        "C-bio-capn-entropic-interpretation",
        "M-bio-capn-response-interpretation-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-distal-nmr-response-capn-entropic-interpretation",
      "source": "bio:capn-distal-nmr-response",
      "target": "bio:capn-entropic-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement/fit contributes to the same-publication conditional entropy interpretation; total and backbone-model entropy remain distinct.",
      "claimIds": [
        "C-bio-capn-entropic-interpretation",
        "M-bio-capn-response-interpretation-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-amide-exchange-response-capn-entropic-interpretation",
      "source": "bio:capn-amide-exchange-response",
      "target": "bio:capn-entropic-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement/fit contributes to the same-publication conditional entropy interpretation; total and backbone-model entropy remain distinct.",
      "claimIds": [
        "C-bio-capn-entropic-interpretation",
        "M-bio-capn-response-interpretation-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-sequential-binding-cooperativity-source-scope",
      "source": "bio:capn-sequential-binding",
      "target": "bio:cooperativity-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-cooperativity-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-distal-nmr-response-cooperativity-source-scope",
      "source": "bio:capn-distal-nmr-response",
      "target": "bio:cooperativity-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-cooperativity-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-distal-nmr-response-protein-allostery-source-scope",
      "source": "bio:capn-distal-nmr-response",
      "target": "bio:protein-allostery-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-protein-allostery-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-amide-exchange-response-protein-allostery-source-scope",
      "source": "bio:capn-amide-exchange-response",
      "target": "bio:protein-allostery-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-protein-allostery-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-entropic-interpretation-protein-allostery-source-scope",
      "source": "bio:capn-entropic-interpretation",
      "target": "bio:protein-allostery-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-protein-allostery-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-sequential-binding-allosteric-local-response-source-scope",
      "source": "bio:capn-sequential-binding",
      "target": "bio:allosteric-local-response-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-allosteric-local-response-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    },
    {
      "id": "biochemistry:capn-amide-exchange-response-allosteric-local-response-source-scope",
      "source": "bio:capn-amide-exchange-response",
      "target": "bio:allosteric-local-response-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The shared primary study supplies only its declared finite result and interpretation boundaries.",
      "claimIds": [
        "C-bio-allosteric-local-response-source-scope",
        "M-bio-capn-card-synthesis-method"
      ],
      "contextIds": [
        "popovych2006-capn-nmr",
        "popovych2006-capn-itc"
      ]
    }
  ],
  "studies": [
    {
      "id": "popovych2006-capn-nmr",
      "sourceId": "popovych2006-capn-allostery",
      "studyType": "primary-experiment",
      "doi": "10.1038/nsmb1132",
      "journal": "Nature Structural & Molecular Biology",
      "volume": "13",
      "issue": "9",
      "pages": "831-838",
      "system": "Isolated His6 CAPN(1-138) dimer in source ligand-series NMR/amide-exchange preparations",
      "preparation": "Express and purify His6-tagged CAPN residues1-138 from E. coli CAP, using isotope labeling and nickel/size-exclusion purification as stated. At30C and600MHz record apo, nominal1:1 cAMP:CAPN-dimer and nominal2:1 preparations; the source typically uses0.4mM protein and checks representative relaxation data at0.05,0.4 and1.05mM. Measure backbone chemical shifts, relaxation/dispersion and amide H/D exchange after transfer to D2O. Use the source pD adjustment and identical exchange conditions across ligation states. The complete NMR solution composition and numeric exchange pD are not supplied in the reviewed main-method passages and are not inferred from the separate ITC buffer.",
      "observable": "Backbone HSQC chemical shifts/intensities, relaxation/dispersion and H/D-exchange time courses, followed by spectral-density/order-parameter inference",
      "finding": "The source ligand series changes remote relaxation and exchange-protection readouts while showing limited remote mean-shift perturbations; exclusive dynamics-only causation and pure-state occupancy are not newly established.",
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "The plotted maps and representative dispersion curves are source analyses of backbone signals; they do not directly count conformations, measure energy transmission along a unique atom chain or prove absence of every structural contribution.",
        "The source Figure4 Leu29 caption contains an anomalous rate string; no specific Leu29 numerical rate or excited-state population is adopted.",
        "An H/D exchange rate depends on access, opening/closing, solvent and chemical-exchange conditions. Increased protection does not by itself uniquely determine hydration structure, intrinsic bond strength, an energetic barrier or native conformational population.",
        "No new kinetic fit, absolute residue-rate table, intrinsic exchange calibration or numeric pD is reconstructed. The main-text common-condition statement supports the within-study comparison.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Conformational entropy is inferred using reduced spectral densities, exchange-corrected T2, local rotational times and the source order-parameter-to-entropy mapping. Backbone amplitudes, correlations, unmeasured motions and solvent/ligand entropy restrict quantitative interpretation.",
        "The article expressly treats its conformational entropy estimate as an upper bound because it assumes motions are uncorrelated. Its own discussion invokes favorable solvation entropy; total ITC entropy is not a direct measurement of protein-only entropy.",
        "A dynamic response, an entropic balance and an undetected mean-shift response do not uniquely rule out all structural, solvent or electrostatic contributions, prove a universal mechanism, or discriminate all MWC/KNF/landscape descriptions.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original site/subunit energetic coupling is qualified to source-defined CAPN binding/dynamics. The selected result is negative homotropic coupling; positive cooperativity, sensitivity amplification, sigmoid switching, threshold response and generalized catalytic coordination are not measured by this case.",
        "A nonlinear response is not sufficient by itself to establish cooperativity. No Hill coefficient, integer site inference from a Hill exponent, mutational coupling pathway or validated mechanical propagation chain is supplied.",
        "Original parents3.0 folding(weight0.4,necessary,constraint),3.1 enzymatic catalysis(0.3,enabling,regulation),3.2 active sites(0.2,enabling,constraint),2.7 hydrogen bonds(0.1,contextual,constraint) have horizontal direction[2] and cooperation/feedback/constraint modes as catalogued. Prepared CAPN supplies no universal necessity or those weights; cAMP binding in the isolated fragment is not catalytic turnover.",
        "Every3.5 parent uses functional-material/molecule carrier2/4,N_min=N_crit=1,N_sat=null. No operational carrier threshold is measured, and a recurrent equilibrium interaction is not proof of a temporal feedback cycle.",
        "Original ligand-induced distal response is qualified to CAPN binding, relaxation and exchange in the selected construct. Covalent regulatory modification, catalytic accessibility, altered catalytic activity, general conformational stability, adaptive response, multi-signal integration and living-system regulation are not measured here.",
        "The source supports effects on motions with limited remote mean-shift response. It does not establish that all allostery requires a large conformational change, that one particular microscopic pathway is necessary, or that every folded protein has this regulatory property.",
        "Original parents3.0 folding(weight0.35,necessary,constraint),3.1 catalysis(0.3,enabling,regulation),3.5 cooperativity(0.25,necessary,regulation),2.7 hydrogen bonds(0.1,contextual,constraint) have downward direction[1] and constraint/feedback modes as catalogued. They are not established universal stages by this one dimer experiment.",
        "All3.12 parents use carrier2/4,N_min=1,N_sat=null; N_crit=1 except the3.5 edge hasN_crit=2. Neither that two-carrier criticality nor a universal requirement for multiple molecules is operationalized. Homotropic coupling here does not prove that every allosteric response requires prior cooperativity or catalysis.",
        "Original distant binding-propensity/local reactivity claims are qualified to sequential cAMP binding inference and amide H/D exchange protection. Catalytic competence, bond strengths, reaction-pathway preference and electronic interaction potentials are not measured and are excluded from the admitted finite result.",
        "The ligand intervention does not intentionally alter CAPN covalent connectivity; that protocol fact is not a proof that every covalent bond or electronic distribution remains exactly unchanged. H/D exchange itself is an isotope-exchange readout, not an independent bond-energy measurement.",
        "Original global structure reshaping local conditions is an interpretation boundary, not evidence for a universal cross-scale/downward-causation law. A hydrophobic/ionic/solvent mechanism is not isolated by the chosen results.",
        "Original parents3.12 allostery(weight0.4,necessary,regulation),2.3 chemical bonding(0.35,necessary,constraint),2.8 polarization(0.15,enabling,constraint),3.31 hydration/ionic microenvironments(0.1,contextual,environment) have downward direction[1] and feedback/constraint modes as catalogued. No source intervention identifies those weights or establishes their independent necessity; an HDX interpretation is not a newly measured hydration-shell or dipole prerequisite.",
        "Every3.33 parent uses carrier2/4,N_min=N_crit=1,N_sat=null. No counted carrier, threshold or universal saturation witness is supplied.",
        "The NMR and ITC contexts belong to one publication and use distinct preparations; they are not independent replications."
      ],
      "readExtent": "complete-nih-author-manuscript-html-and-nine-main-figures-supplement-unread",
      "reviewedLocators": [
        "NIH author-manuscript HTML Introduction (CAP versus isolated CAPN), Results cAMP binding to CAPN yields distinct conformational states, Figure 1 and Methods Sample preparation: construct, nominal ligation ratios and site-state assignments",
        "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
        "NIH author-manuscript HTML Results Effect of cAMP binding on the native-state ensemble, Figure 6, and Methods Determination of exchange rates: amide H/D exchange and ligation-dependent protection",
        "NIH author-manuscript HTML Results Conformational entropy change upon cAMP binding, Figure 8, Discussion and Figure 9, and Methods Assessment of conformational entropy from order parameters, Equations 1-3: inference and uncorrelated-motion upper bound",
        "NIH author-manuscript HTML Methods Sample preparation, NMR assignment, Relaxation measurement and analysis: His6 CAPN residues 1-138, isotope labeling, 30 C NMR, concentration controls, fitted relaxation and spectral-density analysis"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/nsmb1132",
      "correctionCheck": "Read the complete actual NIH author manuscript HTML main article, all Results/Discussion/Methods, Equations 1-3 and references, and visually inspected all nine main figure images from the article CDN. The underlying source is Popovych et al. 2006, not a later review. Published pages 831-838 are bibliographic metadata; manuscript PDF page identity was not read because the PDF endpoint returned a download challenge. Supporting Information including additional assignments, buffer/detail and exchange-contamination arguments, original NMR/ITC data, Origin model implementation and full covariance were not newly read or replayed. Crossref, PubMed PMID16906160/PMC2757644 and the publisher issue listing agree on the four authors, title, DOI, journal13(9):831-838, online13August2006 and September2006 issue. No linked correction was found in limited title/DOI/publisher searches on2026-10-20; empty Crossref relation/update fields do not establish correction absence. The manuscript body prints an enthalpy difference with a repeated index; Figure7 supplies distinct first/second terms. The Figure4 Leu29 caption has an anomalous printed exchange-rate string; no numerical Leu29 rate is admitted. No complete identity with a separately inspected final publisher PDF is claimed."
    },
    {
      "id": "popovych2006-capn-itc",
      "sourceId": "popovych2006-capn-allostery",
      "studyType": "primary-experiment",
      "doi": "10.1038/nsmb1132",
      "journal": "Nature Structural & Molecular Biology",
      "volume": "13",
      "issue": "9",
      "pages": "831-838",
      "system": "Isolated CAPN/cAMP calorimetric titration in high-salt pH6 phosphate buffer",
      "preparation": "At30C titrate0.6mM cAMP into a30micromolar CAPN preparation using a VP-ITC instrument after dialysis into50mM potassium phosphate pH6.0,500mM KCl and1mM TCEP. Ligand is prepared in the final buffer-exchange flow-through. Discard the preliminary2microliter injection and use the subsequent30 eight-microliter injections. Fit the integrated isotherm using the sequential binding-site model in Origin7.0; NMR preparations use different stated protein concentrations and are not treated as the same physical sample.",
      "observable": "Injection heat versus time and integrated heat per injectant/protein ratio, fitted with a sequential-site binding model",
      "finding": "The source reports first/second sequential Kd0.04/4micromolar and enthalpy/total-entropy compensation favoring weaker second-step binding; these are fitted, convention-dependent quantities with no reconstructed uncertainties.",
      "limitations": [
        "This source studies an expressed, purified His6-tagged E. coli CAP N-terminal fragment comprising residues1-138. It lacks the C-terminal DNA-binding domain of full-length CAP; no DNA binding, transcription, catalytic turnover, cellular adaptation or physiological response is measured in this selected study.",
        "The protein is supplied as a prepared homodimer. Its composition and two cAMP-binding positions are system-specific inputs/assignments, not a universal two-molecule threshold or proof that all allostery requires oligomerization.",
        "The source supplies a ligand-series experiment at30C and fixed assay protocols. It does not measure a universal folding, hydrogen-bond, electrostatic, hydration or feedback ancestry, and it does not operationalize original parent weights or carrier minima.",
        "The supporting information, raw NMR/ITC acquisition, complete concentration calibration, original fitting implementation and covariance are not independently reviewed or reproduced. All admitted quantities retain publication-supported status.",
        "Figure7 constants are source sequential-binding fit parameters, not a Hill coefficient, direct atom-count measurement or new microscopic site-specific constants. Sequential constants require their combinatorial/state convention before translating them into intrinsic coupling energies; no statistical-factor correction is newly calculated here.",
        "A biphasic isotherm or nonlinearity alone does not uniquely establish intersite communication rather than fixed site heterogeneity. The source interpretation also uses the symmetric-dimer preparation and site-resolved ligand-series NMR.",
        "The reported0.04 and4micromolar constants have no printed uncertainty in Figure7; none is invented. The100-fold ratio and rounded thermodynamic entries are source statements, not a new fit or uncertainty reconstruction.",
        "The main manuscript gives protein concentrations without a separately reconstructed monomer/dimer concentration calibration. Its intended dimer ligation states are retained, but the Figure7 molar-ratio axis is not used as an independent site-count determination.",
        "Nominal cAMP:CAPN dimer ratios1:1 and2:1 enrich the source-assigned ligation states; finite affinities and stoichiometric mixing do not demonstrate mathematically pure occupancy populations. The source complete-saturation phrasing is not promoted to a new measured purity guarantee.",
        "The manuscript prose prints an enthalpy-difference expression with a repeated first index; the distinct Figure7 entries are the admitted source values. Rounded displayed free-energy, heat and entropy entries do not supply exact covariance or separate microscopic coupling energy.",
        "Both binding steps have favorable total entropy terms in Figure7. A less favorable second-step entropy is not the same as unfavorable total entropy of that step.",
        "Chemical shifts report local electronic environments and population averages. Small shifts at the remote cAMP pocket constrain a large mean-environment change under this method; they do not prove exact structural identity, an absence of every atom displacement or purely entropy-only causation.",
        "Existing cAMP-bound CAP structure1G6N supplies molecular models, mapping coordinates and distances; it is not a new three-state atomic structure determination. Unread earlier structure data are not cloned as new experiments.",
        "Relaxation-derived spectral densities, exchange rates and order parameters are model-dependent inferences from NMR signals. In the fast-exchange analysis only kex and pA*pB*(deltaomega)^2 are separately accessible; the excited-state population and shift difference are not independently identified.",
        "The nominal ligation-state comparison is controlled within the source experiment, but exact purity of the assigned singly/doubly liganded populations has not been independently measured here. Concentration controls constrain aggregation under tested conditions, not every alternative process.",
        "Conformational entropy is inferred using reduced spectral densities, exchange-corrected T2, local rotational times and the source order-parameter-to-entropy mapping. Backbone amplitudes, correlations, unmeasured motions and solvent/ligand entropy restrict quantitative interpretation.",
        "The article expressly treats its conformational entropy estimate as an upper bound because it assumes motions are uncorrelated. Its own discussion invokes favorable solvation entropy; total ITC entropy is not a direct measurement of protein-only entropy.",
        "A dynamic response, an entropic balance and an undetected mean-shift response do not uniquely rule out all structural, solvent or electrostatic contributions, prove a universal mechanism, or discriminate all MWC/KNF/landscape descriptions.",
        "Original Level3, Phase2(Self-organization), TypeRole3(Property), Science arrays and established/well-supported labels are catalogue/display declarations. They do not validate a separate arising, persistent ontological disposition, global-to-local causal hierarchy or ordered molecular construction.",
        "Original MustCover substrate/constraint [0,10], ShouldCover regulation/environment [4,12], Optional gradient/information [5,7] are not empirical gates. Actual construct, ligand, salt, pH and temperature are retained; no universal maintained gradient, information variable, feedback loop or resource architecture is demonstrated.",
        "Generic original MWC, KNF, conformational-selection and landscape references carry no specific publication identity. These mechanisms are not equated and none is newly selected, fitted or proven. The chosen experiment does not identify a unique microscopic pathway.",
        "No numerical parent weight, universal necessity, counted molecule minimum, critical threshold or saturation count is admitted. A dimer and two ligands in this case specify a preparation/model, not a universal hierarchy or minimal carrier theorem.",
        "The same publication and two distinct assay preparations support all three card scopes. They are not independent confirmations, and NMR model-based entropy is not a third independent acquisition.",
        "Original site/subunit energetic coupling is qualified to source-defined CAPN binding/dynamics. The selected result is negative homotropic coupling; positive cooperativity, sensitivity amplification, sigmoid switching, threshold response and generalized catalytic coordination are not measured by this case.",
        "A nonlinear response is not sufficient by itself to establish cooperativity. No Hill coefficient, integer site inference from a Hill exponent, mutational coupling pathway or validated mechanical propagation chain is supplied.",
        "Original parents3.0 folding(weight0.4,necessary,constraint),3.1 enzymatic catalysis(0.3,enabling,regulation),3.2 active sites(0.2,enabling,constraint),2.7 hydrogen bonds(0.1,contextual,constraint) have horizontal direction[2] and cooperation/feedback/constraint modes as catalogued. Prepared CAPN supplies no universal necessity or those weights; cAMP binding in the isolated fragment is not catalytic turnover.",
        "Every3.5 parent uses functional-material/molecule carrier2/4,N_min=N_crit=1,N_sat=null. No operational carrier threshold is measured, and a recurrent equilibrium interaction is not proof of a temporal feedback cycle.",
        "Original ligand-induced distal response is qualified to CAPN binding, relaxation and exchange in the selected construct. Covalent regulatory modification, catalytic accessibility, altered catalytic activity, general conformational stability, adaptive response, multi-signal integration and living-system regulation are not measured here.",
        "The source supports effects on motions with limited remote mean-shift response. It does not establish that all allostery requires a large conformational change, that one particular microscopic pathway is necessary, or that every folded protein has this regulatory property.",
        "Original parents3.0 folding(weight0.35,necessary,constraint),3.1 catalysis(0.3,enabling,regulation),3.5 cooperativity(0.25,necessary,regulation),2.7 hydrogen bonds(0.1,contextual,constraint) have downward direction[1] and constraint/feedback modes as catalogued. They are not established universal stages by this one dimer experiment.",
        "All3.12 parents use carrier2/4,N_min=1,N_sat=null; N_crit=1 except the3.5 edge hasN_crit=2. Neither that two-carrier criticality nor a universal requirement for multiple molecules is operationalized. Homotropic coupling here does not prove that every allosteric response requires prior cooperativity or catalysis.",
        "Original distant binding-propensity/local reactivity claims are qualified to sequential cAMP binding inference and amide H/D exchange protection. Catalytic competence, bond strengths, reaction-pathway preference and electronic interaction potentials are not measured and are excluded from the admitted finite result.",
        "The ligand intervention does not intentionally alter CAPN covalent connectivity; that protocol fact is not a proof that every covalent bond or electronic distribution remains exactly unchanged. H/D exchange itself is an isotope-exchange readout, not an independent bond-energy measurement.",
        "Original global structure reshaping local conditions is an interpretation boundary, not evidence for a universal cross-scale/downward-causation law. A hydrophobic/ionic/solvent mechanism is not isolated by the chosen results.",
        "Original parents3.12 allostery(weight0.4,necessary,regulation),2.3 chemical bonding(0.35,necessary,constraint),2.8 polarization(0.15,enabling,constraint),3.31 hydration/ionic microenvironments(0.1,contextual,environment) have downward direction[1] and feedback/constraint modes as catalogued. No source intervention identifies those weights or establishes their independent necessity; an HDX interpretation is not a newly measured hydration-shell or dipole prerequisite.",
        "Every3.33 parent uses carrier2/4,N_min=N_crit=1,N_sat=null. No counted carrier, threshold or universal saturation witness is supplied.",
        "The NMR and ITC contexts belong to one publication and use distinct preparations; they are not independent replications."
      ],
      "readExtent": "complete-nih-author-manuscript-html-and-nine-main-figures-supplement-unread",
      "reviewedLocators": [
        "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1038/nsmb1132",
      "correctionCheck": "Read the complete actual NIH author manuscript HTML main article, all Results/Discussion/Methods, Equations 1-3 and references, and visually inspected all nine main figure images from the article CDN. The underlying source is Popovych et al. 2006, not a later review. Published pages 831-838 are bibliographic metadata; manuscript PDF page identity was not read because the PDF endpoint returned a download challenge. Supporting Information including additional assignments, buffer/detail and exchange-contamination arguments, original NMR/ITC data, Origin model implementation and full covariance were not newly read or replayed. Crossref, PubMed PMID16906160/PMC2757644 and the publisher issue listing agree on the four authors, title, DOI, journal13(9):831-838, online13August2006 and September2006 issue. No linked correction was found in limited title/DOI/publisher searches on2026-10-20; empty Crossref relation/update fields do not establish correction absence. The manuscript body prints an enthalpy difference with a repeated index; Figure7 supplies distinct first/second terms. The Figure4 Leu29 caption has an anomalous printed exchange-rate string; no numerical Leu29 rate is admitted. No complete identity with a separately inspected final publisher PDF is claimed."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:popovych2006-capn-nmr-context",
      "role": "experimental-context",
      "denotes": "CAPN ligand-series NMR and exchange context in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-popovych2006-capn-nmr-context"
      ]
    },
    {
      "nodeId": "bio:popovych2006-capn-itc-context",
      "role": "experimental-context",
      "denotes": "CAPN sequential-binding calorimetry context in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-popovych2006-capn-itc-context"
      ]
    },
    {
      "nodeId": "bio:cooperativity-fit-boundary",
      "role": "definition",
      "denotes": "Cooperativity, sequential binding and site-count boundary in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-cooperativity-fit-boundary"
      ]
    },
    {
      "nodeId": "bio:allostery-response-boundary",
      "role": "definition",
      "denotes": "Distal allostery and local chemical-readout boundary in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-allostery-response-boundary"
      ]
    },
    {
      "nodeId": "bio:capn-ligation-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Prepared CAPN ligation-state comparison in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-capn-ligation-comparison"
      ]
    },
    {
      "nodeId": "bio:capn-sequential-binding",
      "role": "scoped-phenomenon",
      "denotes": "Source-fitted CAPN sequential binding and thermodynamics in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-capn-sequential-binding"
      ]
    },
    {
      "nodeId": "bio:capn-distal-nmr-response",
      "role": "scoped-phenomenon",
      "denotes": "Ligand-dependent distal CAPN relaxation response in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-capn-distal-nmr-response"
      ]
    },
    {
      "nodeId": "bio:capn-amide-exchange-response",
      "role": "scoped-phenomenon",
      "denotes": "Ligand-dependent CAPN amide H/D exchange protection in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-capn-amide-exchange-response"
      ]
    },
    {
      "nodeId": "bio:capn-entropic-interpretation",
      "role": "scoped-phenomenon",
      "denotes": "Conditional CAPN conformational-entropy interpretation in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-capn-entropic-interpretation"
      ]
    },
    {
      "nodeId": "bio:cooperativity-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped CAPN binding cooperativity in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-cooperativity-source-scope"
      ]
    },
    {
      "nodeId": "bio:protein-allostery-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped distal CAPN allosteric response in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-protein-allostery-source-scope"
      ]
    },
    {
      "nodeId": "bio:allosteric-local-response-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped allosteric binding and amide-exchange modulation in the declared CAPN, ligand and assay boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-allosteric-local-response-source-scope"
      ]
    }
  ]
};
