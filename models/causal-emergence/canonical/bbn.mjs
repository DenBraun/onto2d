import assert from "node:assert/strict";

export const BBN_CHECKS = new Map();
export const BBN_ANALYTICAL_SOURCES = new Map();
export const BBN_STUDY_TYPES = new Map([
  ["pitrou2018-network", "computational-analysis"],
  ["cooke2018-absorption", "primary-observation"],
  ["cooke2018-columns", "computational-analysis"],
  ["cooke2018-pooling", "experimental-reanalysis"],
  ["aver2015-helium", "experimental-reanalysis"]
]);
export const BBN_ADMISSION = {
  "definitions": [
    [
      "phys:primordial-nuclear-network",
      "D-phys-primordial-nuclear-network"
    ],
    [
      "phys:bbn-recombination-boundary",
      "D-phys-bbn-recombination-boundary"
    ],
    [
      "phys:bbn-source-scope",
      "D-phys-bbn-source-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:primordial-nuclear-network-bbn-source-scope",
      [
        "phys:primordial-nuclear-network",
        "phys:bbn-source-scope"
      ]
    ],
    [
      "physics:bbn-recombination-boundary-bbn-source-scope",
      [
        "phys:bbn-recombination-boundary",
        "phys:bbn-source-scope"
      ]
    ]
  ],
  "contexts": [
    [
      "bbn2018-network-context",
      "M-phys-bbn2018-network-context",
      [
        "pitrou2018-network"
      ]
    ],
    [
      "cooke2018-absorption-context",
      "M-phys-cooke2018-absorption-context",
      [
        "cooke2018-absorption"
      ]
    ],
    [
      "cooke2018-column-context",
      "M-phys-cooke2018-column-context",
      [
        "cooke2018-columns"
      ]
    ],
    [
      "cooke2018-pooling-context",
      "M-phys-cooke2018-pooling-context",
      [
        "cooke2018-pooling"
      ]
    ],
    [
      "aver2015-helium-context",
      "M-phys-aver2015-helium-context",
      [
        "aver2015-helium"
      ]
    ]
  ],
  "observations": [
    [
      "cooke2018-absorption-readout",
      "C-phys-cooke2018-absorption-readout",
      [
        "cooke2018-absorption"
      ]
    ],
    [
      "cooke2018-deuterium-column",
      "C-phys-cooke2018-deuterium-column",
      [
        "cooke2018-columns"
      ]
    ],
    [
      "cooke2018-primordial-deuterium",
      "C-phys-cooke2018-primordial-deuterium",
      [
        "cooke2018-pooling"
      ]
    ],
    [
      "aver2015-primordial-helium",
      "C-phys-aver2015-primordial-helium",
      [
        "aver2015-helium"
      ]
    ],
    [
      "bbn2018-abundance-compatibility",
      "C-phys-bbn2018-abundance-compatibility",
      [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    ]
  ],
  "dependencies": [
    [
      "cooke2018-absorption-context-cooke2018-absorption-readout",
      "cooke2018-absorption-context",
      "cooke2018-absorption-readout",
      "M-phys-cooke2018-absorption-readout",
      "measurement-context"
    ],
    [
      "cooke2018-absorption-readout-cooke2018-deuterium-column",
      "cooke2018-absorption-readout",
      "cooke2018-deuterium-column",
      "M-phys-cooke2018-deuterium-column",
      "interpretation-dependency"
    ],
    [
      "cooke2018-column-context-cooke2018-deuterium-column",
      "cooke2018-column-context",
      "cooke2018-deuterium-column",
      "M-phys-cooke2018-deuterium-column",
      "interpretation-dependency"
    ],
    [
      "cooke2018-deuterium-column-cooke2018-primordial-deuterium",
      "cooke2018-deuterium-column",
      "cooke2018-primordial-deuterium",
      "M-phys-cooke2018-primordial-deuterium",
      "interpretation-dependency"
    ],
    [
      "cooke2018-pooling-context-cooke2018-primordial-deuterium",
      "cooke2018-pooling-context",
      "cooke2018-primordial-deuterium",
      "M-phys-cooke2018-primordial-deuterium",
      "interpretation-dependency"
    ],
    [
      "aver2015-helium-context-aver2015-primordial-helium",
      "aver2015-helium-context",
      "aver2015-primordial-helium",
      "M-phys-aver2015-primordial-helium",
      "interpretation-dependency"
    ],
    [
      "bbn2018-network-context-bbn2018-abundance-compatibility",
      "bbn2018-network-context",
      "bbn2018-abundance-compatibility",
      "M-phys-bbn2018-abundance-compatibility",
      "computation-context"
    ],
    [
      "primordial-nuclear-network-bbn2018-abundance-compatibility",
      "primordial-nuclear-network",
      "bbn2018-abundance-compatibility",
      "M-phys-bbn2018-abundance-compatibility",
      "interpretation-dependency"
    ],
    [
      "cooke2018-primordial-deuterium-bbn2018-abundance-compatibility",
      "cooke2018-primordial-deuterium",
      "bbn2018-abundance-compatibility",
      "M-phys-bbn2018-abundance-compatibility",
      "interpretation-dependency"
    ],
    [
      "aver2015-primordial-helium-bbn2018-abundance-compatibility",
      "aver2015-primordial-helium",
      "bbn2018-abundance-compatibility",
      "M-phys-bbn2018-abundance-compatibility",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "pitrou2018-network",
    "cooke2018-absorption",
    "cooke2018-columns",
    "cooke2018-pooling",
    "aver2015-helium"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-bbn2018-network-context",
      [
        "pitrou2018-bbn"
      ]
    ],
    [
      "M-phys-cooke2018-absorption-context",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-cooke2018-column-context",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-cooke2018-pooling-context",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-aver2015-helium-context",
      [
        "aver2015-helium"
      ]
    ],
    [
      "C-phys-cooke2018-absorption-readout",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "C-phys-cooke2018-deuterium-column",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "C-phys-cooke2018-primordial-deuterium",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "C-phys-aver2015-primordial-helium",
      [
        "aver2015-helium"
      ]
    ],
    [
      "C-phys-bbn2018-abundance-compatibility",
      [
        "aver2015-helium",
        "cooke2018-deuterium",
        "pitrou2018-bbn"
      ]
    ],
    [
      "M-phys-cooke2018-absorption-readout",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-cooke2018-deuterium-column",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-cooke2018-primordial-deuterium",
      [
        "cooke2018-deuterium"
      ]
    ],
    [
      "M-phys-aver2015-primordial-helium",
      [
        "aver2015-helium"
      ]
    ],
    [
      "M-phys-bbn2018-abundance-compatibility",
      [
        "aver2015-helium",
        "cooke2018-deuterium",
        "pitrou2018-bbn"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "pitrou2018-bbn",
      "kind": "research-publication",
      "title": "Precision big bang nucleosynthesis with improved Helium-4 predictions",
      "authors": [
        "Cyril Pitrou",
        "Alain Coc",
        "Jean-Philippe Uzan",
        "Elisabeth Vangioni"
      ],
      "year": 2018,
      "doi": "10.1016/j.physrep.2018.04.005",
      "url": "https://www2.iap.fr/users/pitrou/publi/PhysReptBBN.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
          "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
          "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
          "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
          "Author June 25 2018 PDF, page 52, Appendix C.2 and Appendix D, Table X: atomic-mass conversion and adopted cosmological and neutron-lifetime inputs"
        ],
        "limit": "Selected model and abundance passages in the 56-page author manuscript dated 25 June 2018, not all weak-rate corrections or the complete PRIMAT implementation. Its adopted D/H and helium observations reuse Cooke 2018 and Aver 2015; they are not independent observations made by this calculation. Historical inputs and predictions are retained, not presented as a current global fit."
      }
    },
    {
      "id": "cooke2018-deuterium",
      "kind": "research-publication",
      "title": "One percent determination of the primordial deuterium abundance",
      "authors": [
        "Ryan J. Cooke",
        "Max Pettini",
        "Charles C. Steidel"
      ],
      "year": 2018,
      "doi": "10.3847/1538-4357/aaab53",
      "url": "https://arxiv.org/abs/1710.11129v3",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
          "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
          "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
        ],
        "limit": "Selected acquisition, profile-model, systematic, pooling and BBN interpretation passages of the 19-page author v3. New and archived exposures are combined; the seven-system estimate includes the selected absorber. Section 2.1 and Figure 5 give 30 March 2016 and 13800 s, whereas Table 1 gives 31 March and 14400 s. This internal discrepancy is not silently resolved. No raw-spectrum reduction, line fit, covariance or baryon-density calculation is reproduced."
      }
    },
    {
      "id": "aver2015-helium",
      "kind": "research-publication",
      "title": "The effects of He I lambda10830 on helium abundance determinations",
      "authors": [
        "Erik Aver",
        "Keith A. Olive",
        "Evan D. Skillman"
      ],
      "year": 2015,
      "doi": "10.1088/1475-7516/2015/07/011",
      "url": "https://arxiv.org/abs/1503.08146v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling",
          "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions",
          "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
        ],
        "limit": "Selected model, screening and helium-regression passages of author v1. This is a reanalysis of published optical/infrared observations, not a new spectral acquisition. Sixteen qualifying observations become 15 distinct objects after combining two observations of SBS 0335-052E. No emissivity calculation, full Markov chain or new primordial-helium fit is reproduced."
      }
    },
    {
      "id": "seager1999-recombination",
      "kind": "research-publication",
      "title": "A New Calculation of the Recombination Epoch",
      "authors": [
        "Sara Seager",
        "Dimitar D. Sasselov",
        "Douglas Scott"
      ],
      "year": 1999,
      "doi": "10.1086/312250",
      "url": "https://www.saraseager.com/_files/ugd/92999e_bc8bac335cfd40e2bf96856f118ec346.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei",
          "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
        ],
        "limit": "The scientific main text on L1-L4 was read, and Figures 1-2 and the equations on L3-L4 visually checked. Admission is limited to a historical hydrogen formation model and its stated approximation, not a new observation or a modern precision ionization history. The detailed multilevel implementation in companion Paper I and the independently sourced atomic rates were not separately reviewed or replayed. Historical helium-specific accuracy claims, CMB parameter fits and molecular chemistry are outside this admission."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-primordial-nuclear-network",
      "kind": "review-finding",
      "statement": "In the selected homogeneous hot-expanding model, weak neutron/proton interconversion, expansion and thermodynamics set a reaction history for free nucleons and light nuclei. Abundances may be expressed per baryon as Y_i=n_i/n_b; a nuclear species balance has dilution dn_i/dt+3*H*n_i and a sum of reaction production and destruction terms. The deuterium photodissociation bottleneck delays effective light-nucleus assembly; nuclear reactions then produce deuterium, helium-3 and helium-4 and mass-seven species including beryllium-7, which later feeds lithium-7. These model equations require a supplied cosmological background, baryon density, weak rates, neutron lifetime and thermonuclear cross sections.",
      "scope": "Specified primordial nuclear reaction network within the selected source reading and declared interpretation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a specified reaction-network framework, not a locally integrated PRIMAT solution or direct observation of the early universe. Freeze-out is a competition of rates and expansion, not one universal sharp temperature or a minimum of two catalogue carriers.",
        "The network includes unstable intermediates and destruction as well as formation. An eventual stable isotope abundance does not imply every intermediate persists. No elementary-particle permanence or universal firstness is inferred.",
        "Y_i is a number abundance per baryon, while Y_P denotes a helium mass fraction in the cited inference. D/H and Li/H are number ratios to hydrogen; these quantities cannot be interchanged."
      ]
    },
    {
      "id": "D-phys-bbn-recombination-boundary",
      "kind": "review-finding",
      "statement": "Primordial nuclear synthesis changes light-nucleus composition. Later atomic recombination changes bound-electron and ionization populations of existing nuclei in an expanding radiation background. Formation of helium or hydrogen nuclei is therefore distinct from formation of neutral helium or hydrogen atoms. The selected atomic-recombination calculation supplies a separate electron-population model, not another nuclear-synthesis channel.",
      "scope": "Nuclear synthesis and atomic recombination boundary within the selected source reading and declared interpretation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A dominant cosmological recombination epoch is not a universal prohibition of any earlier bound-electron population, nor a sharp date at which all atoms become stable. Ionization and recombination depend on density, temperature, radiation and rates.",
        "No numerical recombination history, complete atomic-shell construction, molecular chemistry or universal SOMA order is established by this distinction."
      ]
    },
    {
      "id": "D-phys-bbn-source-scope",
      "kind": "review-finding",
      "statement": "Source card 2.0 is represented by a specified expanding nuclear network, selected absorption and helium-emission analyses, and conditional abundance comparisons. Spectra are not direct recordings of nuclear formation. Astrophysical primordial-abundance inferences depend on line response, chemical evolution and selection; comparison with BBN predictions additionally requires a supplied cosmological background and weak/nuclear inputs. The light-element comparison must retain the lithium discrepancy rather than asserting universal concordance.",
      "scope": "Primordial nucleosynthesis source boundary within the selected source reading and declared interpretation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original source card /0; parent metadata and evidence placeholders are author proposals, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parents 1.7 (confinement) and 1.8 (electroweak symmetry breaking) are not two measured BBN inputs with equal causal strengths. A nuclear description and weak rates are model inputs here; neither parent label derives the reaction network, thermal history, observed abundances or its necessary arising chain.",
        "The original weights 0.5/0.5, N_min=N_crit=2, carrier classes, direction/mode and dependency codes, phase 0, process/type-role 0 and requirements categories have no admitted physical threshold, estimator or causal authority. Level 2 is a display choice.",
        "The supplied theoretical and empirical placeholders identify no publication. The selected named papers replace their generic support only within the recorded scopes. Deuterium and helium findings do not independently confirm every isotope, all thermal histories or a unique origin model.",
        "Helium-3 is a network product in this model, not a separately admitted pristine-abundance measurement. Mass-seven synthesis includes beryllium-7 and later lithium; the reviewed lithium mismatch remains unresolved. No quantitative chemical enrichment model, lithium-depletion mechanism, nonstandard BBN exclusion or universal stable-matter hierarchy is admitted."
      ]
    },
    {
      "id": "M-phys-bbn2018-network-context",
      "kind": "method",
      "statement": "The selected Pitrou 2018 calculation evolves a homogeneous standard BBN network using its supplied expansion and plasma history, adopted baryon-density and neutron-lifetime inputs, weak-rate corrections and nuclear rates. Adopted historical inputs include Omega_b*h^2=0.022250 +/- 0.00016, tau_n=879.5 +/- 0.8 s and T_0=2.7255 +/- 0.0006 K from its Table X. The cosmological density input uses the stated Ade 2016/Planck 2015 analysis, not the separately represented Planck 2018 result. Section V.E assigns Table VIII to CMB-prior marginalization in addition to nuclear-rate and neutron-lifetime variation. Its quoted errors are source-reported one-standard-deviation uncertainties, not locally verified propagation. The table also lists adopted observed comparators; the calculation does not collect primordial spectra.",
      "scope": "Historical BBN prediction context within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, page 52, Appendix C.2 and Appendix D, Table X: atomic-mass conversion and adopted cosmological and neutron-lifetime inputs",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Input-rate uncertainties, neutron lifetime, baryon density and thermodynamic assumptions are part of the prediction. The full solver, rate covariance and error propagation have not been reproduced.",
        "The observed comparison values reuse Cooke and Aver analyses. Table agreement is not independent evidence, and historical predictions are not updated silently to a later cosmological fit."
      ],
      "contextIds": [
        "pitrou2018-network"
      ]
    },
    {
      "id": "M-phys-cooke2018-absorption-context",
      "kind": "method",
      "statement": "Cooke and colleagues combine new and archived Keck HIRES observations of the low-metallicity absorber at z_abs=2.52564 toward Q1243+307. Echelle reduction and response characterization precede a joint analysis of three data sets. Eight neutral-deuterium Lyman-series lines and neutral-hydrogen absorption constrain the later column-density fit.",
      "scope": "Q1243+307 absorption observation context within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a selected high-redshift absorption system observed much later than BBN, not a direct early-universe reaction measurement.",
        "Section 2.1 and Figure 5 state 30 March 2016 and 13800 s for the new observations; Table 1 states 31 March and 14400 s. Both source descriptions are retained as an unresolved acquisition discrepancy.",
        "The measured instrumental FWHM of 6.28 +/- 0.02 km/s is response characterization, not a primordial-velocity or abundance uncertainty. No raw reduction is replayed."
      ],
      "contextIds": [
        "cooke2018-absorption"
      ]
    },
    {
      "id": "M-phys-cooke2018-column-context",
      "kind": "method",
      "statement": "The alis chi-square model fits the three spectra jointly with absorption-component structure, continuum, zero level, relative velocities, instrumental response and blends. A common N(D I)/N(H I) is imposed across the selected components. The column ratio is then identified with elemental D/H under the explicitly stated ionization assumption.",
      "scope": "Absorption response and column-density inference within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Fit intervals are conditional on the component and response model. Neighboring-pixel correlations are omitted; no covariance reconstruction or raw-spectrum refit is supplied.",
        "A wider Lyman-alpha window changes the quoted error by 2.7 percent. Adding four metal components changes it from 0.015 to 0.016 dex (6.4 percent); these model variations are not included in the quoted main error budget.",
        "Neutral-column ratio, elemental abundance and primordial abundance are three different inference stages. The D/H equality requires the stated ionization approximation; low metallicity alone does not prove a pristine gas history."
      ],
      "contextIds": [
        "cooke2018-columns"
      ]
    },
    {
      "id": "M-phys-cooke2018-pooling-context",
      "kind": "method",
      "statement": "The published precision sample combines the reanalyzed Q1243+307 system with six previously analyzed systems under a common analysis procedure. A weighted logarithmic mean and an intrinsic-scatter likelihood estimate the selected sample abundance, interpreted as primordial D/H. The same paper then uses a chosen BBN rate prescription for a separate baryon-density interpretation.",
      "scope": "Seven-absorber primordial deuterium inference within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The seven-system sample includes the newly fitted absorber and reuses earlier spectroscopy; its outputs are not seven independent analysis methods or an independent confirmation of the single-system estimate.",
        "Maximum-likelihood intrinsic scatter is zero, with a 95 percent upper limit of 0.027 dex; this does not prove zero astrophysical or common systematic scatter.",
        "D/H-to-baryon-density inference depends on the d(p,gamma)3He rate and other BBN assumptions. No baryon-density value, Planck likelihood, full chemical-evolution correction or new combined fit is admitted here."
      ],
      "contextIds": [
        "cooke2018-pooling"
      ]
    },
    {
      "id": "M-phys-aver2015-helium-context",
      "kind": "method",
      "statement": "Aver and colleagues reanalyze published hydrogen and helium emission lines in metal-poor extragalactic H II regions. He I 10830 infrared data are scaled to the optical data using the observed-to-theoretical Paschen-gamma ratio. The line model fits density, temperature, optical depth, reddening, underlying absorption, neutral-hydrogen fraction and helium abundance, retaining the weak [O III] temperature prior; screened object estimates are regressed to zero metallicity.",
      "scope": "Helium line-response and metallicity extrapolation within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is an experimental reanalysis of published spectra, not new acquisition or direct observation of primordial gas. Infrared/optical scaling and emissivity assumptions remain external response inputs.",
        "Sixteen qualifying observations correspond to 15 distinct H II regions after combining two SBS 0335-052E observations. Observation count and independent-object count cannot be substituted for one another.",
        "Parameter degeneracies, sample screening and the assumed helium-metallicity regression affect the inferred intercept. Its uncertainty does not establish universal agreement among all helium analyses."
      ],
      "contextIds": [
        "aver2015-helium"
      ]
    },
    {
      "id": "C-phys-cooke2018-absorption-readout",
      "kind": "review-finding",
      "statement": "The selected Q1243+307 spectra contain eight D I absorption lines used together with H I absorption in the source analysis. These wavelength-dependent spectra are the measured input to the column-density model; they do not directly report a primordial abundance or observe BBN.",
      "scope": "Selected neutral-deuterium absorption profiles within the selected source reading and declared interpretation limits.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Line identification, blends, continuum and instrumental response remain part of the analysis. No pixel data product, flux covariance, fresh line detection significance or raw reduction is reproduced.",
        "New and archived HIRES exposures share the target and inference chain; their combination is not independent confirmation of an early-universe model."
      ],
      "contextIds": [
        "cooke2018-absorption"
      ]
    },
    {
      "id": "C-phys-cooke2018-deuterium-column",
      "kind": "review-finding",
      "statement": "For the selected z_abs=2.52564 absorber, the joint absorption-profile analysis reports log10[N(D I)/N(H I)]=-4.622 +/- 0.015. The source treats N(D I)/N(H I)=D/H under its ionization approximation. Quoted intervals are 68 percent confidence unless stated otherwise.",
      "scope": "Model-conditioned deuterium column ratio within the selected source reading and declared interpretation limits.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The value is a fitted column ratio under a common component abundance, not a model-free detector count, a direct primordial ratio or an independent repetition of the spectral observation.",
        "Omitted pixel correlations and the stated continuum/component variations are not absorbed into an invented total systematic uncertainty. No fit or uncertainty propagation has been independently reproduced."
      ],
      "contextIds": [
        "cooke2018-columns"
      ]
    },
    {
      "id": "C-phys-cooke2018-primordial-deuterium",
      "kind": "review-finding",
      "statement": "The selected seven-system analysis reports log10(D/H)_P=-4.5974 +/- 0.0052, equivalently (D/H)_P=(2.527 +/- 0.030)*10^-5, at the reported 68 percent confidence level. The logarithmic and linear forms describe one pooled estimate, not independent measurements.",
      "scope": "Seven-system primordial deuterium estimate within the selected source reading and declared interpretation limits.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The estimate is conditional on sample selection, shared analysis, ionization assumptions and interpretation of low-metallicity systems as proxies for primordial abundance. Its precision does not remove common model or astrophysical uncertainties.",
        "The Q1243+307 value is one input to this estimate. This pooling does not independently measure nuclear reaction rates, helium or lithium abundance, cosmological baryon density or every aspect of standard BBN."
      ],
      "contextIds": [
        "cooke2018-pooling"
      ]
    },
    {
      "id": "C-phys-aver2015-primordial-helium",
      "kind": "review-finding",
      "statement": "The helium regression for the 15 distinct qualifying H II regions reports a zero-metallicity intercept Y_P=0.2449 +/- 0.0040. Y_P is a helium mass fraction inferred from response-corrected emission-line abundances and a metallicity regression, not the helium number ratio or a direct measurement at the BBN epoch.",
      "scope": "Selected zero-metallicity helium estimate within the selected source reading and declared interpretation limits.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source uncertainty belongs to its adopted line model, selected observations and regression. The 16 qualifying observations include two combined observations of one object; they are not 16 distinct regions.",
        "Infrared scaling, emissivities, parameter degeneracies and screening remain analysis assumptions. No new line acquisition, full chain replay or independent helium refit is claimed."
      ],
      "contextIds": [
        "aver2015-helium"
      ]
    },
    {
      "id": "C-phys-bbn2018-abundance-compatibility",
      "kind": "review-finding",
      "statement": "Pitrou Table VIII reports Y_P=0.24709 +/- 0.00017 and D/H=(2.459 +/- 0.036)*10^-5 for its selected BBN inputs, alongside the adopted helium and deuterium estimates represented separately here. It also predicts Li/H=(5.623 +/- 0.247)*10^-10 against an adopted stellar estimate 1.58(+0.35,-0.28)*10^-10. The selected deuterium and helium comparisons support the model conditionally; the lithium discrepancy prevents blanket concordance for all light elements.",
      "scope": "Historical conditional light-element comparison within the selected source reading and declared interpretation limits.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "supports",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The model prediction and astrophysical abundance inference have different uncertainty meanings and assumptions. The quoted marginal errors do not supply a joint covariance, local likelihood, combined significance or a universal parameter interval. Section V.E distinguishes fixed-density distributions in Table VII from the CMB-prior procedure assigned to Table VIII, although the displayed widths repeat; their propagation is not independently reconstructed.",
        "Pitrou reuses the Cooke and Aver abundance estimates: agreement with the same cited numbers is not independent acquisition or replication. No local reaction-network run, nuclear-rate fit, stellar-abundance reanalysis or full source likelihood is reproduced.",
        "The lithium comparator is adopted by Pitrou from stellar work, whose primary acquisition is not separately reviewed here. It records the reported discrepancy only; lithium depletion, new physics or a unique resolution is not inferred.",
        "Table VIII is the selected numerical source: the helium discussion also prints 0.24705 +/- 0.00019 instead of the table value. Table VII prints an inconsistent mass-seven scaling, while Table VIII explicitly uses 10^-10. Neither source discrepancy is silently resolved or used to alter the chosen numbers.",
        "The network includes helium-3 and unstable intermediates, but this comparison admits no independent primordial helium-3 measurement, universal first stable composition, subsequent atom-formation mechanism or complete cosmological history."
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    },
    {
      "id": "M-phys-cooke2018-absorption-readout",
      "kind": "method",
      "statement": "Preserve the specified input, preparation, response and shared-data boundaries when interpreting Selected neutral-deuterium absorption profiles within the selected source reading and declared interpretation limits.",
      "scope": "Selected neutral-deuterium absorption profiles within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are descriptive analysis dependencies, not measured physical causes or statistically independent confirmations."
      ],
      "contextIds": [
        "cooke2018-absorption"
      ]
    },
    {
      "id": "M-phys-cooke2018-deuterium-column",
      "kind": "method",
      "statement": "Preserve the specified input, preparation, response and shared-data boundaries when interpreting Model-conditioned deuterium column ratio within the selected source reading and declared interpretation limits.",
      "scope": "Model-conditioned deuterium column ratio within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are descriptive analysis dependencies, not measured physical causes or statistically independent confirmations."
      ],
      "contextIds": [
        "cooke2018-columns"
      ]
    },
    {
      "id": "M-phys-cooke2018-primordial-deuterium",
      "kind": "method",
      "statement": "Preserve the specified input, preparation, response and shared-data boundaries when interpreting Seven-system primordial deuterium estimate within the selected source reading and declared interpretation limits.",
      "scope": "Seven-system primordial deuterium estimate within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are descriptive analysis dependencies, not measured physical causes or statistically independent confirmations."
      ],
      "contextIds": [
        "cooke2018-pooling"
      ]
    },
    {
      "id": "M-phys-aver2015-primordial-helium",
      "kind": "method",
      "statement": "Preserve the specified input, preparation, response and shared-data boundaries when interpreting Selected zero-metallicity helium estimate within the selected source reading and declared interpretation limits.",
      "scope": "Selected zero-metallicity helium estimate within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are descriptive analysis dependencies, not measured physical causes or statistically independent confirmations."
      ],
      "contextIds": [
        "aver2015-helium"
      ]
    },
    {
      "id": "M-phys-bbn2018-abundance-compatibility",
      "kind": "method",
      "statement": "Preserve the specified input, preparation, response and shared-data boundaries when interpreting Historical conditional light-element comparison within the selected source reading and declared interpretation limits.",
      "scope": "Historical conditional light-element comparison within the selected source reading and declared interpretation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits",
          "role": "method",
          "note": "Supports only this specified historical model, preparation or inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are descriptive analysis dependencies, not measured physical causes or statistically independent confirmations."
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:primordial-nuclear-network",
      "name": "Specified primordial nuclear reaction network",
      "kind": "definition",
      "description": "In the selected homogeneous hot-expanding model, weak neutron/proton interconversion, expansion and thermodynamics set a reaction history for free nucleons and light nuclei. Abundances may be expressed per baryon as Y_i=n_i/n_b; a nuclear species balance has dilution dn_i/dt+3*H*n_i and a sum of reaction production and destruction terms. The deuterium photodissociation bottleneck delays effective light-nucleus assembly; nuclear reactions then produce deuterium, helium-3 and helium-4 and mass-seven species including beryllium-7, which later feeds lithium-7. These model equations require a supplied cosmological background, baryon density, weak rates, neutron lifetime and thermonuclear cross sections.",
      "claimIds": [
        "D-phys-primordial-nuclear-network"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping"
        }
      ],
      "openObligations": [
        "This is a specified reaction-network framework, not a locally integrated PRIMAT solution or direct observation of the early universe. Freeze-out is a competition of rates and expansion, not one universal sharp temperature or a minimum of two catalogue carriers.",
        "The network includes unstable intermediates and destruction as well as formation. An eventual stable isotope abundance does not imply every intermediate persists. No elementary-particle permanence or universal firstness is inferred.",
        "Y_i is a number abundance per baryon, while Y_P denotes a helium mass fraction in the cited inference. D/H and Li/H are number ratios to hydrogen; these quantities cannot be interchanged."
      ]
    },
    {
      "id": "phys:bbn-recombination-boundary",
      "name": "Nuclear synthesis and atomic recombination boundary",
      "kind": "definition",
      "description": "Primordial nuclear synthesis changes light-nucleus composition. Later atomic recombination changes bound-electron and ionization populations of existing nuclei in an expanding radiation background. Formation of helium or hydrogen nuclei is therefore distinct from formation of neutral helium or hydrogen atoms. The selected atomic-recombination calculation supplies a separate electron-population model, not another nuclear-synthesis channel.",
      "claimIds": [
        "D-phys-bbn-recombination-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out"
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei"
        }
      ],
      "openObligations": [
        "A dominant cosmological recombination epoch is not a universal prohibition of any earlier bound-electron population, nor a sharp date at which all atoms become stable. Ionization and recombination depend on density, temperature, radiation and rates.",
        "No numerical recombination history, complete atomic-shell construction, molecular chemistry or universal SOMA order is established by this distinction."
      ]
    },
    {
      "id": "phys:bbn-source-scope",
      "name": "Primordial nucleosynthesis source boundary",
      "kind": "definition",
      "description": "Source card 2.0 is represented by a specified expanding nuclear network, selected absorption and helium-emission analyses, and conditional abundance comparisons. Spectra are not direct recordings of nuclear formation. Astrophysical primordial-abundance inferences depend on line response, chemical evolution and selection; comparison with BBN predictions additionally requires a supplied cosmological background and weak/nuclear inputs. The light-element comparison must retain the lithium discrepancy rather than asserting universal concordance.",
      "claimIds": [
        "D-phys-bbn-source-scope"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances"
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original parents 1.7 (confinement) and 1.8 (electroweak symmetry breaking) are not two measured BBN inputs with equal causal strengths. A nuclear description and weak rates are model inputs here; neither parent label derives the reaction network, thermal history, observed abundances or its necessary arising chain.",
        "The original weights 0.5/0.5, N_min=N_crit=2, carrier classes, direction/mode and dependency codes, phase 0, process/type-role 0 and requirements categories have no admitted physical threshold, estimator or causal authority. Level 2 is a display choice.",
        "The supplied theoretical and empirical placeholders identify no publication. The selected named papers replace their generic support only within the recorded scopes. Deuterium and helium findings do not independently confirm every isotope, all thermal histories or a unique origin model.",
        "Helium-3 is a network product in this model, not a separately admitted pristine-abundance measurement. Mass-seven synthesis includes beryllium-7 and later lithium; the reviewed lithium mismatch remains unresolved. No quantitative chemical enrichment model, lithium-depletion mechanism, nonstandard BBN exclusion or universal stable-matter hierarchy is admitted."
      ]
    },
    {
      "id": "phys:bbn2018-network-context",
      "name": "Historical BBN prediction context",
      "kind": "context",
      "description": "The selected Pitrou 2018 calculation evolves a homogeneous standard BBN network using its supplied expansion and plasma history, adopted baryon-density and neutron-lifetime inputs, weak-rate corrections and nuclear rates. Adopted historical inputs include Omega_b*h^2=0.022250 +/- 0.00016, tau_n=879.5 +/- 0.8 s and T_0=2.7255 +/- 0.0006 K from its Table X. The cosmological density input uses the stated Ade 2016/Planck 2015 analysis, not the separately represented Planck 2018 result. Section V.E assigns Table VIII to CMB-prior marginalization in addition to nuclear-rate and neutron-lifetime variation. Its quoted errors are source-reported one-standard-deviation uncertainties, not locally verified propagation. The table also lists adopted observed comparators; the calculation does not collect primordial spectra.",
      "claimIds": [
        "M-phys-bbn2018-network-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, page 52, Appendix C.2 and Appendix D, Table X: atomic-mass conversion and adopted cosmological and neutron-lifetime inputs"
        }
      ],
      "openObligations": [
        "Input-rate uncertainties, neutron lifetime, baryon density and thermodynamic assumptions are part of the prediction. The full solver, rate covariance and error propagation have not been reproduced.",
        "The observed comparison values reuse Cooke and Aver analyses. Table agreement is not independent evidence, and historical predictions are not updated silently to a later cosmological fit."
      ]
    },
    {
      "id": "phys:cooke2018-absorption-context",
      "name": "Q1243+307 absorption observation context",
      "kind": "context",
      "description": "Cooke and colleagues combine new and archived Keck HIRES observations of the low-metallicity absorber at z_abs=2.52564 toward Q1243+307. Echelle reduction and response characterization precede a joint analysis of three data sets. Eight neutral-deuterium Lyman-series lines and neutral-hydrogen absorption constrain the later column-density fit.",
      "claimIds": [
        "M-phys-cooke2018-absorption-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction"
        }
      ],
      "openObligations": [
        "This is a selected high-redshift absorption system observed much later than BBN, not a direct early-universe reaction measurement.",
        "Section 2.1 and Figure 5 state 30 March 2016 and 13800 s for the new observations; Table 1 states 31 March and 14400 s. Both source descriptions are retained as an unresolved acquisition discrepancy.",
        "The measured instrumental FWHM of 6.28 +/- 0.02 km/s is response characterization, not a primordial-velocity or abundance uncertainty. No raw reduction is replayed."
      ]
    },
    {
      "id": "phys:cooke2018-column-context",
      "name": "Absorption response and column-density inference",
      "kind": "context",
      "description": "The alis chi-square model fits the three spectra jointly with absorption-component structure, continuum, zero level, relative velocities, instrumental response and blends. A common N(D I)/N(H I) is imposed across the selected components. The column ratio is then identified with elemental D/H under the explicitly stated ionization assumption.",
      "claimIds": [
        "M-phys-cooke2018-column-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations"
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption"
        }
      ],
      "openObligations": [
        "Fit intervals are conditional on the component and response model. Neighboring-pixel correlations are omitted; no covariance reconstruction or raw-spectrum refit is supplied.",
        "A wider Lyman-alpha window changes the quoted error by 2.7 percent. Adding four metal components changes it from 0.015 to 0.016 dex (6.4 percent); these model variations are not included in the quoted main error budget.",
        "Neutral-column ratio, elemental abundance and primordial abundance are three different inference stages. The D/H equality requires the stated ionization approximation; low metallicity alone does not prove a pristine gas history."
      ]
    },
    {
      "id": "phys:cooke2018-pooling-context",
      "name": "Seven-absorber primordial deuterium inference",
      "kind": "context",
      "description": "The published precision sample combines the reanalyzed Q1243+307 system with six previously analyzed systems under a common analysis procedure. A weighted logarithmic mean and an intrinsic-scatter likelihood estimate the selected sample abundance, interpreted as primordial D/H. The same paper then uses a chosen BBN rate prescription for a separate baryon-density interpretation.",
      "claimIds": [
        "M-phys-cooke2018-pooling-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
        }
      ],
      "openObligations": [
        "The seven-system sample includes the newly fitted absorber and reuses earlier spectroscopy; its outputs are not seven independent analysis methods or an independent confirmation of the single-system estimate.",
        "Maximum-likelihood intrinsic scatter is zero, with a 95 percent upper limit of 0.027 dex; this does not prove zero astrophysical or common systematic scatter.",
        "D/H-to-baryon-density inference depends on the d(p,gamma)3He rate and other BBN assumptions. No baryon-density value, Planck likelihood, full chemical-evolution correction or new combined fit is admitted here."
      ]
    },
    {
      "id": "phys:aver2015-helium-context",
      "name": "Helium line-response and metallicity extrapolation",
      "kind": "context",
      "description": "Aver and colleagues reanalyze published hydrogen and helium emission lines in metal-poor extragalactic H II regions. He I 10830 infrared data are scaled to the optical data using the observed-to-theoretical Paschen-gamma ratio. The line model fits density, temperature, optical depth, reddening, underlying absorption, neutral-hydrogen fraction and helium abundance, retaining the weak [O III] temperature prior; screened object estimates are regressed to zero metallicity.",
      "claimIds": [
        "M-phys-aver2015-helium-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
        }
      ],
      "openObligations": [
        "This is an experimental reanalysis of published spectra, not new acquisition or direct observation of primordial gas. Infrared/optical scaling and emissivity assumptions remain external response inputs.",
        "Sixteen qualifying observations correspond to 15 distinct H II regions after combining two SBS 0335-052E observations. Observation count and independent-object count cannot be substituted for one another.",
        "Parameter degeneracies, sample screening and the assumed helium-metallicity regression affect the inferred intercept. Its uncertainty does not establish universal agreement among all helium analyses."
      ]
    },
    {
      "id": "phys:cooke2018-absorption-readout",
      "name": "Selected neutral-deuterium absorption profiles",
      "kind": "scoped-process",
      "description": "The selected Q1243+307 spectra contain eight D I absorption lines used together with H I absorption in the source analysis. These wavelength-dependent spectra are the measured input to the column-density model; they do not directly report a primordial abundance or observe BBN.",
      "claimIds": [
        "C-phys-cooke2018-absorption-readout"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction"
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations"
        }
      ],
      "openObligations": [
        "Line identification, blends, continuum and instrumental response remain part of the analysis. No pixel data product, flux covariance, fresh line detection significance or raw reduction is reproduced.",
        "New and archived HIRES exposures share the target and inference chain; their combination is not independent confirmation of an early-universe model."
      ]
    },
    {
      "id": "phys:cooke2018-deuterium-column",
      "name": "Model-conditioned deuterium column ratio",
      "kind": "scoped-process",
      "description": "For the selected z_abs=2.52564 absorber, the joint absorption-profile analysis reports log10[N(D I)/N(H I)]=-4.622 +/- 0.015. The source treats N(D I)/N(H I)=D/H under its ionization approximation. Quoted intervals are 68 percent confidence unless stated otherwise.",
      "claimIds": [
        "C-phys-cooke2018-deuterium-column"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations"
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption"
        }
      ],
      "openObligations": [
        "The value is a fitted column ratio under a common component abundance, not a model-free detector count, a direct primordial ratio or an independent repetition of the spectral observation.",
        "Omitted pixel correlations and the stated continuum/component variations are not absorbed into an invented total systematic uncertainty. No fit or uncertainty propagation has been independently reproduced."
      ]
    },
    {
      "id": "phys:cooke2018-primordial-deuterium",
      "name": "Seven-system primordial deuterium estimate",
      "kind": "scoped-process",
      "description": "The selected seven-system analysis reports log10(D/H)_P=-4.5974 +/- 0.0052, equivalently (D/H)_P=(2.527 +/- 0.030)*10^-5, at the reported 68 percent confidence level. The logarithmic and linear forms describe one pooled estimate, not independent measurements.",
      "claimIds": [
        "C-phys-cooke2018-primordial-deuterium"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
        }
      ],
      "openObligations": [
        "The estimate is conditional on sample selection, shared analysis, ionization assumptions and interpretation of low-metallicity systems as proxies for primordial abundance. Its precision does not remove common model or astrophysical uncertainties.",
        "The Q1243+307 value is one input to this estimate. This pooling does not independently measure nuclear reaction rates, helium or lithium abundance, cosmological baryon density or every aspect of standard BBN."
      ]
    },
    {
      "id": "phys:aver2015-primordial-helium",
      "name": "Selected zero-metallicity helium estimate",
      "kind": "scoped-process",
      "description": "The helium regression for the 15 distinct qualifying H II regions reports a zero-metallicity intercept Y_P=0.2449 +/- 0.0040. Y_P is a helium mass fraction inferred from response-corrected emission-line abundances and a metallicity regression, not the helium number ratio or a direct measurement at the BBN epoch.",
      "claimIds": [
        "C-phys-aver2015-primordial-helium"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
        }
      ],
      "openObligations": [
        "The source uncertainty belongs to its adopted line model, selected observations and regression. The 16 qualifying observations include two combined observations of one object; they are not 16 distinct regions.",
        "Infrared scaling, emissivities, parameter degeneracies and screening remain analysis assumptions. No new line acquisition, full chain replay or independent helium refit is claimed."
      ]
    },
    {
      "id": "phys:bbn2018-abundance-compatibility",
      "name": "Historical conditional light-element comparison",
      "kind": "scoped-process",
      "description": "Pitrou Table VIII reports Y_P=0.24709 +/- 0.00017 and D/H=(2.459 +/- 0.036)*10^-5 for its selected BBN inputs, alongside the adopted helium and deuterium estimates represented separately here. It also predicts Li/H=(5.623 +/- 0.247)*10^-10 against an adopted stellar estimate 1.58(+0.35,-0.28)*10^-10. The selected deuterium and helium comparisons support the model conditionally; the lithium discrepancy prevents blanket concordance for all light elements.",
      "claimIds": [
        "C-phys-bbn2018-abundance-compatibility"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy"
        },
        {
          "sourceId": "pitrou2018-bbn",
          "locator": "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances"
        },
        {
          "sourceId": "cooke2018-deuterium",
          "locator": "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
        },
        {
          "sourceId": "aver2015-helium",
          "locator": "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
        }
      ],
      "openObligations": [
        "The model prediction and astrophysical abundance inference have different uncertainty meanings and assumptions. The quoted marginal errors do not supply a joint covariance, local likelihood, combined significance or a universal parameter interval. Section V.E distinguishes fixed-density distributions in Table VII from the CMB-prior procedure assigned to Table VIII, although the displayed widths repeat; their propagation is not independently reconstructed.",
        "Pitrou reuses the Cooke and Aver abundance estimates: agreement with the same cited numbers is not independent acquisition or replication. No local reaction-network run, nuclear-rate fit, stellar-abundance reanalysis or full source likelihood is reproduced.",
        "The lithium comparator is adopted by Pitrou from stellar work, whose primary acquisition is not separately reviewed here. It records the reported discrepancy only; lithium depletion, new physics or a unique resolution is not inferred.",
        "Table VIII is the selected numerical source: the helium discussion also prints 0.24705 +/- 0.00019 instead of the table value. Table VII prints an inconsistent mass-seven scaling, while Table VIII explicitly uses 10^-10. Neither source discrepancy is silently resolved or used to alter the chosen numbers.",
        "The network includes helium-3 and unstable intermediates, but this comparison admits no independent primordial helium-3 measurement, universal first stable composition, subsequent atom-formation mechanism or complete cosmological history."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:cooke2018-absorption-context-cooke2018-absorption-readout",
      "source": "phys:cooke2018-absorption-context",
      "target": "phys:cooke2018-absorption-readout",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-cooke2018-absorption-readout"
      ],
      "contextIds": [
        "cooke2018-absorption"
      ]
    },
    {
      "id": "physics:cooke2018-absorption-readout-cooke2018-deuterium-column",
      "source": "phys:cooke2018-absorption-readout",
      "target": "phys:cooke2018-deuterium-column",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-cooke2018-deuterium-column"
      ],
      "contextIds": [
        "cooke2018-columns"
      ]
    },
    {
      "id": "physics:cooke2018-column-context-cooke2018-deuterium-column",
      "source": "phys:cooke2018-column-context",
      "target": "phys:cooke2018-deuterium-column",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-cooke2018-deuterium-column"
      ],
      "contextIds": [
        "cooke2018-columns"
      ]
    },
    {
      "id": "physics:cooke2018-deuterium-column-cooke2018-primordial-deuterium",
      "source": "phys:cooke2018-deuterium-column",
      "target": "phys:cooke2018-primordial-deuterium",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-cooke2018-primordial-deuterium"
      ],
      "contextIds": [
        "cooke2018-pooling"
      ]
    },
    {
      "id": "physics:cooke2018-pooling-context-cooke2018-primordial-deuterium",
      "source": "phys:cooke2018-pooling-context",
      "target": "phys:cooke2018-primordial-deuterium",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-cooke2018-primordial-deuterium"
      ],
      "contextIds": [
        "cooke2018-pooling"
      ]
    },
    {
      "id": "physics:aver2015-helium-context-aver2015-primordial-helium",
      "source": "phys:aver2015-helium-context",
      "target": "phys:aver2015-primordial-helium",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-aver2015-primordial-helium"
      ],
      "contextIds": [
        "aver2015-helium"
      ]
    },
    {
      "id": "physics:bbn2018-network-context-bbn2018-abundance-compatibility",
      "source": "phys:bbn2018-network-context",
      "target": "phys:bbn2018-abundance-compatibility",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-bbn2018-abundance-compatibility"
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    },
    {
      "id": "physics:primordial-nuclear-network-bbn2018-abundance-compatibility",
      "source": "phys:primordial-nuclear-network",
      "target": "phys:bbn2018-abundance-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-bbn2018-abundance-compatibility"
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    },
    {
      "id": "physics:cooke2018-primordial-deuterium-bbn2018-abundance-compatibility",
      "source": "phys:cooke2018-primordial-deuterium",
      "target": "phys:bbn2018-abundance-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-bbn2018-abundance-compatibility"
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    },
    {
      "id": "physics:aver2015-primordial-helium-bbn2018-abundance-compatibility",
      "source": "phys:aver2015-primordial-helium",
      "target": "phys:bbn2018-abundance-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This input restricts the specified observation or interpretation; it supplies no universal formation law or additional independent evidence.",
      "claimIds": [
        "M-phys-bbn2018-abundance-compatibility"
      ],
      "contextIds": [
        "pitrou2018-network",
        "cooke2018-pooling",
        "aver2015-helium"
      ]
    },
    {
      "id": "physics:primordial-nuclear-network-bbn-source-scope",
      "source": "phys:primordial-nuclear-network",
      "target": "phys:bbn-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This definition restricts the scope of source card 2.0; it is not an observed causal formation step.",
      "claimIds": [
        "D-phys-bbn-source-scope"
      ]
    },
    {
      "id": "physics:bbn-recombination-boundary-bbn-source-scope",
      "source": "phys:bbn-recombination-boundary",
      "target": "phys:bbn-source-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This definition restricts the scope of source card 2.0; it is not an observed causal formation step.",
      "claimIds": [
        "D-phys-bbn-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "pitrou2018-network",
      "sourceId": "pitrou2018-bbn",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2018.04.005",
      "journal": "Physics Reports",
      "volume": "754",
      "issue": "",
      "pages": "1-66",
      "system": "Historical BBN prediction context",
      "preparation": "The selected Pitrou 2018 calculation evolves a homogeneous standard BBN network using its supplied expansion and plasma history, adopted baryon-density and neutron-lifetime inputs, weak-rate corrections and nuclear rates. Adopted historical inputs include Omega_b*h^2=0.022250 +/- 0.00016, tau_n=879.5 +/- 0.8 s and T_0=2.7255 +/- 0.0006 K from its Table X. The cosmological density input uses the stated Ade 2016/Planck 2015 analysis, not the separately represented Planck 2018 result. Section V.E assigns Table VIII to CMB-prior marginalization in addition to nuclear-rate and neutron-lifetime variation. Its quoted errors are source-reported one-standard-deviation uncertainties, not locally verified propagation. The table also lists adopted observed comparators; the calculation does not collect primordial spectra.",
      "observable": "Historical conditional light-element comparison",
      "finding": "Pitrou Table VIII reports Y_P=0.24709 +/- 0.00017 and D/H=(2.459 +/- 0.036)*10^-5 for its selected BBN inputs, alongside the adopted helium and deuterium estimates represented separately here. It also predicts Li/H=(5.623 +/- 0.247)*10^-10 against an adopted stellar estimate 1.58(+0.35,-0.28)*10^-10. The selected deuterium and helium comparisons support the model conditionally; the lithium discrepancy prevents blanket concordance for all light elements.",
      "limitations": [
        "Input-rate uncertainties, neutron lifetime, baryon density and thermodynamic assumptions are part of the prediction. The full solver, rate covariance and error propagation have not been reproduced.",
        "The observed comparison values reuse Cooke and Aver analyses. Table agreement is not independent evidence, and historical predictions are not updated silently to a later cosmological fit."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
        "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
        "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
        "Author June 25 2018 PDF, pages 33-35, Sections V.E-F, Table VIII and Figure 26: source-specific uncertainty, predicted and adopted observed abundances",
        "Author June 25 2018 PDF, page 52, Appendix C.2 and Appendix D, Table X: atomic-mass conversion and adopted cosmological and neutron-lifetime inputs"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1016/j.physrep.2018.04.005",
      "correctionCheck": "Author manuscript identity and journal DOI checked against the primary author/archive metadata. Selected reading and internal source discrepancies are recorded; no full raw-data or computation replay is claimed."
    },
    {
      "id": "cooke2018-absorption",
      "sourceId": "cooke2018-deuterium",
      "studyType": "primary-observation",
      "doi": "10.3847/1538-4357/aaab53",
      "journal": "The Astrophysical Journal",
      "volume": "855",
      "issue": "2",
      "pages": "102",
      "system": "Q1243+307 absorption observation context",
      "preparation": "Cooke and colleagues combine new and archived Keck HIRES observations of the low-metallicity absorber at z_abs=2.52564 toward Q1243+307. Echelle reduction and response characterization precede a joint analysis of three data sets. Eight neutral-deuterium Lyman-series lines and neutral-hydrogen absorption constrain the later column-density fit.",
      "observable": "Selected neutral-deuterium absorption profiles",
      "finding": "The selected Q1243+307 spectra contain eight D I absorption lines used together with H I absorption in the source analysis. These wavelength-dependent spectra are the measured input to the column-density model; they do not directly report a primordial abundance or observe BBN.",
      "limitations": [
        "This is a selected high-redshift absorption system observed much later than BBN, not a direct early-universe reaction measurement.",
        "Section 2.1 and Figure 5 state 30 March 2016 and 13800 s for the new observations; Table 1 states 31 March and 14400 s. Both source descriptions are retained as an unresolved acquisition discrepancy.",
        "The measured instrumental FWHM of 6.28 +/- 0.02 km/s is response characterization, not a primordial-velocity or abundance uncertainty. No raw reduction is replayed."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
        "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
        "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
        "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.3847/1538-4357/aaab53",
      "correctionCheck": "Author manuscript identity and journal DOI checked against the primary author/archive metadata. Selected reading and internal source discrepancies are recorded; no full raw-data or computation replay is claimed."
    },
    {
      "id": "cooke2018-columns",
      "sourceId": "cooke2018-deuterium",
      "studyType": "computational-analysis",
      "doi": "10.3847/1538-4357/aaab53",
      "journal": "The Astrophysical Journal",
      "volume": "855",
      "issue": "2",
      "pages": "102",
      "system": "Absorption response and column-density inference",
      "preparation": "The alis chi-square model fits the three spectra jointly with absorption-component structure, continuum, zero level, relative velocities, instrumental response and blends. A common N(D I)/N(H I) is imposed across the selected components. The column ratio is then identified with elemental D/H under the explicitly stated ionization assumption.",
      "observable": "Model-conditioned deuterium column ratio",
      "finding": "For the selected z_abs=2.52564 absorber, the joint absorption-profile analysis reports log10[N(D I)/N(H I)]=-4.622 +/- 0.015. The source treats N(D I)/N(H I)=D/H under its ionization approximation. Quoted intervals are 68 percent confidence unless stated otherwise.",
      "limitations": [
        "Fit intervals are conditional on the component and response model. Neighboring-pixel correlations are omitted; no covariance reconstruction or raw-spectrum refit is supplied.",
        "A wider Lyman-alpha window changes the quoted error by 2.7 percent. Adding four metal components changes it from 0.015 to 0.016 dex (6.4 percent); these model variations are not included in the quoted main error budget.",
        "Neutral-column ratio, elemental abundance and primordial abundance are three different inference stages. The D/H equality requires the stated ionization approximation; low metallicity alone does not prove a pristine gas history."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
        "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
        "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
        "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.3847/1538-4357/aaab53",
      "correctionCheck": "Author manuscript identity and journal DOI checked against the primary author/archive metadata. Selected reading and internal source discrepancies are recorded; no full raw-data or computation replay is claimed."
    },
    {
      "id": "cooke2018-pooling",
      "sourceId": "cooke2018-deuterium",
      "studyType": "experimental-reanalysis",
      "doi": "10.3847/1538-4357/aaab53",
      "journal": "The Astrophysical Journal",
      "volume": "855",
      "issue": "2",
      "pages": "102",
      "system": "Seven-absorber primordial deuterium inference",
      "preparation": "The published precision sample combines the reanalyzed Q1243+307 system with six previously analyzed systems under a common analysis procedure. A weighted logarithmic mean and an intrinsic-scatter likelihood estimate the selected sample abundance, interpreted as primordial D/H. The same paper then uses a chosen BBN rate prescription for a separate baryon-density interpretation.",
      "observable": "Seven-system primordial deuterium estimate",
      "finding": "The selected seven-system analysis reports log10(D/H)_P=-4.5974 +/- 0.0052, equivalently (D/H)_P=(2.527 +/- 0.030)*10^-5, at the reported 68 percent confidence level. The logarithmic and linear forms describe one pooled estimate, not independent measurements.",
      "limitations": [
        "The seven-system sample includes the newly fitted absorber and reuses earlier spectroscopy; its outputs are not seven independent analysis methods or an independent confirmation of the single-system estimate.",
        "Maximum-likelihood intrinsic scatter is zero, with a 95 percent upper limit of 0.027 dex; this does not prove zero astrophysical or common systematic scatter.",
        "D/H-to-baryon-density inference depends on the d(p,gamma)3He rate and other BBN assumptions. No baryon-density value, Planck likelihood, full chemical-evolution correction or new combined fit is admitted here."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v3, pages 2-4, Section 2 and Table 1: Q1243+307 observations, HIRES response and reduction",
        "Author v3, pages 4, 7-8 and 11-12, Sections 3-3.2, Equation 2 and footnote 14: joint profile fit, column ratio and omitted pixel correlations",
        "Author v3, Section 4.2: neutral-column ratio and deuterium abundance assumption",
        "Author v3, pages 12-14, Sections 4.1-4.3 and 5.1-5.2, Table 3 and Equations 8-14: seven-system pooling, intrinsic scatter and rate-dependent baryon inference"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.3847/1538-4357/aaab53",
      "correctionCheck": "Author manuscript identity and journal DOI checked against the primary author/archive metadata. Selected reading and internal source discrepancies are recorded; no full raw-data or computation replay is claimed."
    },
    {
      "id": "aver2015-helium",
      "sourceId": "aver2015-helium",
      "studyType": "experimental-reanalysis",
      "doi": "10.1088/1475-7516/2015/07/011",
      "journal": "Journal of Cosmology and Astroparticle Physics",
      "volume": "2015",
      "issue": "07",
      "pages": "011",
      "system": "Helium line-response and metallicity extrapolation",
      "preparation": "Aver and colleagues reanalyze published hydrogen and helium emission lines in metal-poor extragalactic H II regions. He I 10830 infrared data are scaled to the optical data using the observed-to-theoretical Paschen-gamma ratio. The line model fits density, temperature, optical depth, reddening, underlying absorption, neutral-hydrogen fraction and helium abundance, retaining the weak [O III] temperature prior; screened object estimates are regressed to zero metallicity.",
      "observable": "Selected zero-metallicity helium estimate",
      "finding": "The helium regression for the 15 distinct qualifying H II regions reports a zero-metallicity intercept Y_P=0.2449 +/- 0.0040. Y_P is a helium mass fraction inferred from response-corrected emission-line abundances and a metallicity regression, not the helium number ratio or a direct measurement at the BBN epoch.",
      "limitations": [
        "This is an experimental reanalysis of published spectra, not new acquisition or direct observation of primordial gas. Infrared/optical scaling and emissivity assumptions remain external response inputs.",
        "Sixteen qualifying observations correspond to 15 distinct H II regions after combining two SBS 0335-052E observations. Observation count and independent-object count cannot be substituted for one another.",
        "Parameter degeneracies, sample screening and the assumed helium-metallicity regression affect the inferred intercept. Its uncertainty does not establish universal agreement among all helium analyses."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v1, printed pages 1-2, Section 1 and Equation 1.1; pages 8-9, Section 4 and Equation 4.1: line model, weak temperature prior and infrared scaling",
        "Author v1, printed pages 9-10, Section 5: screening, 16 qualifying observations and 15 distinct H II regions",
        "Author v1, printed pages 15-17, Sections 6-7, Equation 6.1, Figure 6 and Tables 4-5: zero-metallicity regression and emissivity/scaling limits"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1088/1475-7516/2015/07/011",
      "correctionCheck": "Author manuscript identity and journal DOI checked against the primary author/archive metadata. Selected reading and internal source discrepancies are recorded; no full raw-data or computation replay is claimed."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:primordial-nuclear-network",
      "role": "definition",
      "denotes": "Specified primordial nuclear reaction network; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-primordial-nuclear-network"
      ]
    },
    {
      "nodeId": "phys:bbn-recombination-boundary",
      "role": "definition",
      "denotes": "Nuclear synthesis and atomic recombination boundary; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-bbn-recombination-boundary"
      ]
    },
    {
      "nodeId": "phys:bbn-source-scope",
      "role": "definition",
      "denotes": "Primordial nucleosynthesis source boundary; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-bbn-source-scope"
      ]
    },
    {
      "nodeId": "phys:bbn2018-network-context",
      "role": "model-context",
      "denotes": "Historical BBN prediction context; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bbn2018-network-context"
      ]
    },
    {
      "nodeId": "phys:cooke2018-absorption-context",
      "role": "experimental-context",
      "denotes": "Q1243+307 absorption observation context; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cooke2018-absorption-context"
      ]
    },
    {
      "nodeId": "phys:cooke2018-column-context",
      "role": "model-context",
      "denotes": "Absorption response and column-density inference; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cooke2018-column-context"
      ]
    },
    {
      "nodeId": "phys:cooke2018-pooling-context",
      "role": "experimental-context",
      "denotes": "Seven-absorber primordial deuterium inference; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-cooke2018-pooling-context"
      ]
    },
    {
      "nodeId": "phys:aver2015-helium-context",
      "role": "experimental-context",
      "denotes": "Helium line-response and metallicity extrapolation; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-aver2015-helium-context"
      ]
    },
    {
      "nodeId": "phys:cooke2018-absorption-readout",
      "role": "scoped-phenomenon",
      "denotes": "Selected neutral-deuterium absorption profiles; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cooke2018-absorption-readout"
      ]
    },
    {
      "nodeId": "phys:cooke2018-deuterium-column",
      "role": "scoped-phenomenon",
      "denotes": "Model-conditioned deuterium column ratio; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cooke2018-deuterium-column"
      ]
    },
    {
      "nodeId": "phys:cooke2018-primordial-deuterium",
      "role": "scoped-phenomenon",
      "denotes": "Seven-system primordial deuterium estimate; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-cooke2018-primordial-deuterium"
      ]
    },
    {
      "nodeId": "phys:aver2015-primordial-helium",
      "role": "scoped-phenomenon",
      "denotes": "Selected zero-metallicity helium estimate; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-aver2015-primordial-helium"
      ]
    },
    {
      "nodeId": "phys:bbn2018-abundance-compatibility",
      "role": "scoped-phenomenon",
      "denotes": "Historical conditional light-element comparison; the record does not assert a universal construction stage or an independently reproduced instance.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bbn2018-abundance-compatibility"
      ]
    }
  ]
};

/** Preserve the selected BBN model, observations and dependent inference. */
export function validateBbnContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `BBN ${kind} changed ${id}: preserve source, preparation and interpretation limits`);
    }
  }
}
