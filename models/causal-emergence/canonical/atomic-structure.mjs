import assert from "node:assert/strict";

export const ATOMIC_STRUCTURE_CHECKS = new Map();
export const ATOMIC_STRUCTURE_ANALYTICAL_SOURCES = new Map();
export const ATOMIC_STRUCTURE_STUDY_TYPES = new Map([["seager1999-hydrogen-formation", "computational-analysis"]]);
export const ATOMIC_STRUCTURE_ADMISSION = {
  "definitions": [
    [
      "phys:static-nucleus-hydrogen-binding",
      "D-phys-static-nucleus-hydrogen-binding"
    ],
    [
      "phys:atomic-binding-formation-distinction",
      "D-phys-atomic-binding-formation-distinction"
    ]
  ],
  "formalDependencies": [
    [
      "physics:coulomb-effective-potential-static-nucleus-hydrogen-binding",
      [
        "phys:coulomb-effective-potential",
        "phys:static-nucleus-hydrogen-binding"
      ]
    ]
  ],
  "contexts": [
    [
      "seager1999-hydrogen-formation-context",
      "M-phys-seager1999-hydrogen-formation-context",
      [
        "seager1999-hydrogen-formation"
      ]
    ]
  ],
  "observations": [
    [
      "atomic-structure-source-scope",
      "C-phys-atomic-structure-source-scope",
      [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    ],
    [
      "seager1999-hydrogen-neutralization",
      "C-phys-seager1999-hydrogen-neutralization",
      [
        "seager1999-hydrogen-formation"
      ]
    ]
  ],
  "dependencies": [
    [
      "static-nucleus-hydrogen-binding-atomic-structure-source-scope",
      "static-nucleus-hydrogen-binding",
      "atomic-structure-source-scope",
      "M-phys-atomic-structure-source-scope",
      "interpretation-dependency"
    ],
    [
      "atomic-binding-formation-distinction-atomic-structure-source-scope",
      "atomic-binding-formation-distinction",
      "atomic-structure-source-scope",
      "M-phys-atomic-structure-source-scope",
      "interpretation-dependency"
    ],
    [
      "lamb-separation-atomic-structure-source-scope",
      "lamb-separation",
      "atomic-structure-source-scope",
      "M-phys-atomic-structure-source-scope",
      "interpretation-dependency"
    ],
    [
      "lamb-radiative-interpretation-atomic-structure-source-scope",
      "lamb-radiative-interpretation",
      "atomic-structure-source-scope",
      "M-phys-atomic-structure-source-scope",
      "interpretation-dependency"
    ],
    [
      "seager1999-hydrogen-formation-context-seager1999-hydrogen-neutralization",
      "seager1999-hydrogen-formation-context",
      "seager1999-hydrogen-neutralization",
      "M-phys-seager1999-hydrogen-formation-context",
      "computation-context"
    ],
    [
      "seager1999-hydrogen-neutralization-atomic-structure-source-scope",
      "seager1999-hydrogen-neutralization",
      "atomic-structure-source-scope",
      "M-phys-atomic-structure-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "seager1999-hydrogen-formation"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-atomic-structure-source-scope",
      [
        "bethe1947",
        "lamb1947",
        "schrodinger1926-hydrogen",
        "seager1999-recombination"
      ]
    ],
    [
      "M-phys-seager1999-hydrogen-formation-context",
      [
        "seager1999-recombination"
      ]
    ],
    [
      "C-phys-seager1999-hydrogen-neutralization",
      [
        "seager1999-recombination"
      ]
    ],
    [
      "M-phys-atomic-structure-source-scope",
      [
        "bethe1947",
        "lamb1947",
        "schrodinger1926-hydrogen",
        "seager1999-recombination"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-static-nucleus-hydrogen-binding",
      "kind": "review-finding",
      "statement": "Choose a nonrelativistic electron of mass m_e in the Coulomb field of a supplied static point nucleus with charge +e. In rationalized hbar=c=1 units define alpha=e^2/(4*pi) and H=-nabla^2/(2*m_e)-alpha/r. Rewriting the selected primary result in these conventions gives E_n=-m_e*alpha^2/(2*n^2), n=1,2,..., relative to the separated-particle threshold. These are discrete negative bound energies with positive binding energy -E_n. The source describes regular spatial solutions with exponentially decreasing radial tails; the eigenfunctions are not classical electron orbits or compact hard-edged objects.",
      "scope": "Static Z=1 point-source hydrogen spectrum, with the existing Coulomb potential as a supplied effective input.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1059-1061, Section 5: endpoint regularity, bound-state energy selection and the distinction from a finite artificial atomic boundary",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source uses Gaussian units; the displayed rationalized-unit Hamiltonian and energy formula are an explicitly declared convention rewrite, not a quoted equation in those units.",
        "The nucleus is supplied and held fixed. Finite nuclear mass/recoil, spin, fine/hyperfine structure, radiative corrections, nuclear size and external fields are outside this leading model. No new Dirac spectrum or modern precision prediction is derived.",
        "The model concerns one electron and Z=1. It neither derives all many-electron shells nor establishes element-specific chemistry, atom formation rates or universal matter stability. Its state count is a chosen model specification, not the catalogue N_crit."
      ]
    },
    {
      "id": "D-phys-atomic-binding-formation-distinction",
      "kind": "review-finding",
      "statement": "An electronic bound-state spectrum specifies possible atom states under a declared Hamiltonian. A prepared-atom spectroscopic response constrains transitions or energy differences. Formation is a further population-changing process requiring initial matter, radiation or collision conditions and competing capture, de-excitation and ionization rates. The selected cosmological model follows those electronic populations while keeping pre-existing nuclei; it is distinct from primordial nuclear synthesis and from the laboratory microwave-quenching preparation.",
      "scope": "Separate the stationary hydrogen model, the existing Lamb/Bethe inference chain, and one historical cosmological formation model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Lamb and Retherford thermally dissociate molecular hydrogen and then excite an existing atomic beam by electron impact. Their metastable-state detector response is not a free-electron/proton radiative-capture measurement.",
        "The measured microwave response and approximate 1000 MHz displacement do not validate the uncorrected Coulomb degeneracy or directly measure a capture history. Bethe's approximate 1040 MHz correction is conditional on subtraction and an assumed cutoff.",
        "A finite formation scenario does not establish a unique ancestry for every atom, a universal recombination epoch or absolute permanence of ground, excited and metastable populations."
      ]
    },
    {
      "id": "C-phys-atomic-structure-source-scope",
      "kind": "review-finding",
      "statement": "The selected hydrogen model, prepared-atom microwave spectroscopy and historical cosmological recombination calculation address different aspects of atomic structure and formation. The positive result is electronic binding with discrete levels and a source-reported neutralization history under stated conditions. A supplied nuclear charge and electron inventory delimit the model; the selected evidence does not establish all many-electron shell structures, every element identity or the substrate of all later material organization.",
      "scope": "Specified one-electron binding, prepared-hydrogen spectroscopy and one historical cosmological formation model; no all-element construction.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original source card /2 is a catalogue proposal, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parent 2.0 is primordial light-nucleus nucleosynthesis. A supplied hydrogen proton nucleus is sufficient for this bound-state model; the model and laboratory atom do not require the selected BBN calculation as their formation history. No numerical BBN result is substituted for Seager's historical helium-composition input.",
        "Original parent 2.1 can delimit an effective Coulomb interaction, not establish equal causal strength with nuclear ancestry. The original weights 0.5/0.5, upward directions, necessity and interaction/dependency labels have no matched estimator or universal causal authority.",
        "Original 2.0 physical-body N_min=N_crit=1 and 2.1 resonant-mode N_min=N_crit=2 do not count the supplied nucleus and electron. A model constituent count is not a measured critical threshold. Phase 1, TypeRole 1, Science [0,1], MustCover [10], ShouldCover [9] and Level 2 remain catalogue/display choices.",
        "The unnamed Schrodinger/Dirac and spectroscopy placeholders do not themselves identify publications. The selected one-electron result excludes a derivation of many-electron Pauli filling, chemical bonding, elemental/isotopic taxonomy and all-scale material stability."
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "M-phys-seager1999-hydrogen-formation-context",
      "kind": "method",
      "statement": "Use the reported expanding-universe multilevel calculation with populations of 300 hydrogen atomic levels, free electrons and matter temperature, including capture/photoionization and bound-bound transitions. The displayed Figure 1 case adopts Omega_tot=1, Omega_B=0.05, H_0=50 km/s/Mpc, Y_P=0.24 and T_0=2.728 K. The approximate treatment evolves proton fraction x_p=n_p/n_H and helium ionization together with T_M, with x_e=n_e/n_H and supplied expansion and radiation temperature. Ground-state production is bottlenecked by resonance-photon trapping and proceeds through cosmological redshifting of Lyman-alpha photons and the slow 2s-to-1s two-photon channel; electron capture alone does not instantaneously make a persistent ground-state population.",
      "scope": "Reported 1999 standard-CDM hydrogen population calculation and its approximate reduction, not a new cosmology fit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "n_H is total hydrogen-nucleus number density, not neutral-hydrogen density. x_e also includes helium electrons in the coupled model, so it cannot always be identified with x_p or the ionized fraction of hydrogen alone.",
        "These historical cosmological and atomic-rate inputs are not the selected Planck 2018 parameters or the Pitrou 2018 BBN composition. No full companion-Paper-I calculation, rate fit, numerical ODE solution, covariance or experimental capture measurement is reproduced.",
        "The reduced equations are fitted to the authors' multilevel calculation and have a stated cosmology/thermal-history range; Section 3 warns that extreme cosmologies, extra physics and z<=300 chemistry need more complete treatment. No helium-specific modern precision claim is admitted."
      ],
      "contextIds": [
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "C-phys-seager1999-hydrogen-neutralization",
      "kind": "review-finding",
      "statement": "For the supplied historical model, the reported population evolution builds neutral hydrogen as the universe expands and cools while leaving a residual free-electron population. Figure 1 compares the 300-level result with the effective three-level calculation; the source reports faster late hydrogen recombination and approximately 10 percent lower residual x_e than the earlier approximation. This is a computational formation-history comparison, not measured atom-production events or an independent experimental confirmation of the hydrogen spectrum.",
      "scope": "Source-reported historical hydrogen population history and approximation comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity",
          "role": "supports",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The approximate 10 percent difference compares two stated calculations, not an observational error bar, uncertainty on atom existence or a current recombination discrepancy.",
        "The full calculation and its approximate parametrization describe the same modelling program; they are not independent replications. No new ionization history, redshift of first atoms or neutral fraction is numerically inferred here.",
        "The initial nuclear inventory and rates are supplied. This model does not derive the nucleus, nuclear stability, every atomic formation route, many-electron shell order or later molecular chemistry."
      ],
      "contextIds": [
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "M-phys-atomic-structure-source-scope",
      "kind": "method",
      "statement": "Interpret stationary binding, prepared-atom transitions and population-changing formation in their separate model and preparation contexts. The Lamb/Bethe interpretation reuses the same spectroscopy; the historical recombination result is a reported calculation, not an additional atom-formation observation.",
      "scope": "Specified one-electron binding, prepared-hydrogen spectroscopy and one historical cosmological formation model; no all-element construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity",
          "role": "method",
          "note": "Supports the specified model or interpretation only; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No shared acquisition, quantitative formation chain, independent replication, universal parent necessity or many-electron stability theorem follows from this comparison."
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:static-nucleus-hydrogen-binding",
      "name": "Specified one-electron hydrogen bound-state model",
      "kind": "definition",
      "description": "Choose a nonrelativistic electron of mass m_e in the Coulomb field of a supplied static point nucleus with charge +e. In rationalized hbar=c=1 units define alpha=e^2/(4*pi) and H=-nabla^2/(2*m_e)-alpha/r. Rewriting the selected primary result in these conventions gives E_n=-m_e*alpha^2/(2*n^2), n=1,2,..., relative to the separated-particle threshold. These are discrete negative bound energies with positive binding energy -E_n. The source describes regular spatial solutions with exponentially decreasing radial tails; the eigenfunctions are not classical electron orbits or compact hard-edged objects.",
      "claimIds": [
        "D-phys-static-nucleus-hydrogen-binding"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions"
        },
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1059-1061, Section 5: endpoint regularity, bound-state energy selection and the distinction from a finite artificial atomic boundary"
        }
      ],
      "openObligations": [
        "The source uses Gaussian units; the displayed rationalized-unit Hamiltonian and energy formula are an explicitly declared convention rewrite, not a quoted equation in those units.",
        "The nucleus is supplied and held fixed. Finite nuclear mass/recoil, spin, fine/hyperfine structure, radiative corrections, nuclear size and external fields are outside this leading model. No new Dirac spectrum or modern precision prediction is derived.",
        "The model concerns one electron and Z=1. It neither derives all many-electron shells nor establishes element-specific chemistry, atom formation rates or universal matter stability. Its state count is a chosen model specification, not the catalogue N_crit."
      ]
    },
    {
      "id": "phys:atomic-binding-formation-distinction",
      "name": "Atomic binding, spectroscopy and formation distinction",
      "kind": "definition",
      "description": "An electronic bound-state spectrum specifies possible atom states under a declared Hamiltonian. A prepared-atom spectroscopic response constrains transitions or energy differences. Formation is a further population-changing process requiring initial matter, radiation or collision conditions and competing capture, de-excitation and ionization rates. The selected cosmological model follows those electronic populations while keeping pre-existing nuclei; it is distinct from primordial nuclear synthesis and from the laboratory microwave-quenching preparation.",
      "claimIds": [
        "D-phys-atomic-binding-formation-distinction"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions"
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1"
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
        }
      ],
      "openObligations": [
        "Lamb and Retherford thermally dissociate molecular hydrogen and then excite an existing atomic beam by electron impact. Their metastable-state detector response is not a free-electron/proton radiative-capture measurement.",
        "The measured microwave response and approximate 1000 MHz displacement do not validate the uncorrected Coulomb degeneracy or directly measure a capture history. Bethe's approximate 1040 MHz correction is conditional on subtraction and an assumed cutoff.",
        "A finite formation scenario does not establish a unique ancestry for every atom, a universal recombination epoch or absolute permanence of ground, excited and metastable populations."
      ]
    },
    {
      "id": "phys:atomic-structure-source-scope",
      "name": "Scoped atomic binding and formation evidence",
      "kind": "scoped-process",
      "description": "The selected hydrogen model, prepared-atom microwave spectroscopy and historical cosmological recombination calculation address different aspects of atomic structure and formation. The positive result is electronic binding with discrete levels and a source-reported neutralization history under stated conditions. A supplied nuclear charge and electron inventory delimit the model; the selected evidence does not establish all many-electron shell structures, every element identity or the substrate of all later material organization.",
      "claimIds": [
        "C-phys-atomic-structure-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schrodinger1926-hydrogen",
          "locator": "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions"
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1"
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        },
        {
          "sourceId": "bethe1947",
          "locator": "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12"
        },
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original parent 2.0 is primordial light-nucleus nucleosynthesis. A supplied hydrogen proton nucleus is sufficient for this bound-state model; the model and laboratory atom do not require the selected BBN calculation as their formation history. No numerical BBN result is substituted for Seager's historical helium-composition input.",
        "Original parent 2.1 can delimit an effective Coulomb interaction, not establish equal causal strength with nuclear ancestry. The original weights 0.5/0.5, upward directions, necessity and interaction/dependency labels have no matched estimator or universal causal authority.",
        "Original 2.0 physical-body N_min=N_crit=1 and 2.1 resonant-mode N_min=N_crit=2 do not count the supplied nucleus and electron. A model constituent count is not a measured critical threshold. Phase 1, TypeRole 1, Science [0,1], MustCover [10], ShouldCover [9] and Level 2 remain catalogue/display choices.",
        "The unnamed Schrodinger/Dirac and spectroscopy placeholders do not themselves identify publications. The selected one-electron result excludes a derivation of many-electron Pauli filling, chemical bonding, elemental/isotopic taxonomy and all-scale material stability."
      ]
    },
    {
      "id": "phys:seager1999-hydrogen-formation-context",
      "name": "Historical hydrogen recombination model context",
      "kind": "context",
      "description": "Use the reported expanding-universe multilevel calculation with populations of 300 hydrogen atomic levels, free electrons and matter temperature, including capture/photoionization and bound-bound transitions. The displayed Figure 1 case adopts Omega_tot=1, Omega_B=0.05, H_0=50 km/s/Mpc, Y_P=0.24 and T_0=2.728 K. The approximate treatment evolves proton fraction x_p=n_p/n_H and helium ionization together with T_M, with x_e=n_e/n_H and supplied expansion and radiation temperature. Ground-state production is bottlenecked by resonance-photon trapping and proceeds through cosmological redshifting of Lyman-alpha photons and the slow 2s-to-1s two-photon channel; electron capture alone does not instantaneously make a persistent ground-state population.",
      "claimIds": [
        "M-phys-seager1999-hydrogen-formation-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
        }
      ],
      "openObligations": [
        "n_H is total hydrogen-nucleus number density, not neutral-hydrogen density. x_e also includes helium electrons in the coupled model, so it cannot always be identified with x_p or the ionized fraction of hydrogen alone.",
        "These historical cosmological and atomic-rate inputs are not the selected Planck 2018 parameters or the Pitrou 2018 BBN composition. No full companion-Paper-I calculation, rate fit, numerical ODE solution, covariance or experimental capture measurement is reproduced.",
        "The reduced equations are fitted to the authors' multilevel calculation and have a stated cosmology/thermal-history range; Section 3 warns that extreme cosmologies, extra physics and z<=300 chemistry need more complete treatment. No helium-specific modern precision claim is admitted."
      ]
    },
    {
      "id": "phys:seager1999-hydrogen-neutralization",
      "name": "Reported hydrogen neutralization history",
      "kind": "scoped-process",
      "description": "For the supplied historical model, the reported population evolution builds neutral hydrogen as the universe expands and cools while leaving a residual free-electron population. Figure 1 compares the 300-level result with the effective three-level calculation; the source reports faster late hydrogen recombination and approximately 10 percent lower residual x_e than the earlier approximation. This is a computational formation-history comparison, not measured atom-production events or an independent experimental confirmation of the hydrogen spectrum.",
      "claimIds": [
        "C-phys-seager1999-hydrogen-neutralization"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "seager1999-recombination",
          "locator": "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
        }
      ],
      "openObligations": [
        "The approximate 10 percent difference compares two stated calculations, not an observational error bar, uncertainty on atom existence or a current recombination discrepancy.",
        "The full calculation and its approximate parametrization describe the same modelling program; they are not independent replications. No new ionization history, redshift of first atoms or neutral fraction is numerically inferred here.",
        "The initial nuclear inventory and rates are supplied. This model does not derive the nucleus, nuclear stability, every atomic formation route, many-electron shell order or later molecular chemistry."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:coulomb-effective-potential-static-nucleus-hydrogen-binding",
      "source": "phys:coulomb-effective-potential",
      "target": "phys:static-nucleus-hydrogen-binding",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The supplied attractive opposite-charge Coulomb potential becomes the stated static-nucleus electron Hamiltonian only after specifying mass, nuclear charge, quantum kinetic term and regularity domain.",
      "claimIds": [
        "D-phys-static-nucleus-hydrogen-binding"
      ]
    },
    {
      "id": "physics:static-nucleus-hydrogen-binding-atomic-structure-source-scope",
      "source": "phys:static-nucleus-hydrogen-binding",
      "target": "phys:atomic-structure-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The one-electron negative-energy spectrum supplies a finite positive binding construction within the card scope, without deriving a formation rate or all-element shell structure.",
      "claimIds": [
        "M-phys-atomic-structure-source-scope"
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "physics:atomic-binding-formation-distinction-atomic-structure-source-scope",
      "source": "phys:atomic-binding-formation-distinction",
      "target": "phys:atomic-structure-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Keep state existence, spectroscopic inference and population formation as distinct statements under their declared preparations.",
      "claimIds": [
        "M-phys-atomic-structure-source-scope"
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "physics:lamb-separation-atomic-structure-source-scope",
      "source": "phys:lamb-separation",
      "target": "phys:atomic-structure-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing prepared-hydrogen Zeeman/microwave comparison constrains a level separation; it is reused once and does not measure radiative capture or prove the uncorrected Coulomb spectrum complete.",
      "claimIds": [
        "M-phys-atomic-structure-source-scope"
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "physics:lamb-radiative-interpretation-atomic-structure-source-scope",
      "source": "phys:lamb-radiative-interpretation",
      "target": "phys:atomic-structure-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing approximate Lamb/Bethe comparison limits the leading Coulomb model; its conditional correction is not an independent new spectroscopy acquisition.",
      "claimIds": [
        "M-phys-atomic-structure-source-scope"
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "physics:seager1999-hydrogen-formation-context-seager1999-hydrogen-neutralization",
      "source": "phys:seager1999-hydrogen-formation-context",
      "target": "phys:seager1999-hydrogen-neutralization",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The specified initial inventory, cosmological background, atomic transitions and recombination/photoionization rates define the reported population history and approximation comparison.",
      "claimIds": [
        "M-phys-seager1999-hydrogen-formation-context"
      ],
      "contextIds": [
        "seager1999-hydrogen-formation"
      ]
    },
    {
      "id": "physics:seager1999-hydrogen-neutralization-atomic-structure-source-scope",
      "source": "phys:seager1999-hydrogen-neutralization",
      "target": "phys:atomic-structure-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source-reported population history supplies one positive formation scenario for pre-existing hydrogen nuclei and electrons; it does not identify every atom formation route.",
      "claimIds": [
        "M-phys-atomic-structure-source-scope"
      ],
      "contextIds": [
        "lamb1947",
        "seager1999-hydrogen-formation"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:static-nucleus-hydrogen-binding",
      "role": "definition",
      "denotes": "Specified one-electron hydrogen bound-state model in the stated finite model or source-reported comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-static-nucleus-hydrogen-binding"
      ]
    },
    {
      "nodeId": "phys:atomic-binding-formation-distinction",
      "role": "definition",
      "denotes": "Atomic binding, spectroscopy and formation distinction in the stated finite model or source-reported comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-atomic-binding-formation-distinction"
      ]
    },
    {
      "nodeId": "phys:atomic-structure-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "A literature comparison of a specified bound-state model, prepared-atom spectroscopy and a separate computational formation history.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-atomic-structure-source-scope"
      ]
    },
    {
      "nodeId": "phys:seager1999-hydrogen-formation-context",
      "role": "model-context",
      "denotes": "Historical hydrogen recombination model context in the stated finite model or source-reported comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-seager1999-hydrogen-formation-context"
      ]
    },
    {
      "nodeId": "phys:seager1999-hydrogen-neutralization",
      "role": "scoped-phenomenon",
      "denotes": "Reported hydrogen neutralization history in the stated finite model or source-reported comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-seager1999-hydrogen-neutralization"
      ]
    }
  ],
  "studies": [
    {
      "id": "seager1999-hydrogen-formation",
      "sourceId": "seager1999-recombination",
      "studyType": "computational-analysis",
      "doi": "10.1086/312250",
      "journal": "The Astrophysical Journal",
      "volume": "523",
      "issue": "1",
      "pages": "L1-L5",
      "system": "Historical standard-CDM hydrogen recombination",
      "preparation": "Use the reported expanding-universe multilevel calculation with populations of 300 hydrogen atomic levels, free electrons and matter temperature, including capture/photoionization and bound-bound transitions. The displayed Figure 1 case adopts Omega_tot=1, Omega_B=0.05, H_0=50 km/s/Mpc, Y_P=0.24 and T_0=2.728 K. The approximate treatment evolves proton fraction x_p=n_p/n_H and helium ionization together with T_M, with x_e=n_e/n_H and supplied expansion and radiation temperature. Ground-state production is bottlenecked by resonance-photon trapping and proceeds through cosmological redshifting of Lyman-alpha photons and the slow 2s-to-1s two-photon channel; electron capture alone does not instantaneously make a persistent ground-state population.",
      "observable": "Ionization fractions and neutral-hydrogen population versus cosmological redshift",
      "finding": "For the supplied historical model, the reported population evolution builds neutral hydrogen as the universe expands and cools while leaving a residual free-electron population. Figure 1 compares the 300-level result with the effective three-level calculation; the source reports faster late hydrogen recombination and approximately 10 percent lower residual x_e than the earlier approximation. This is a computational formation-history comparison, not measured atom-production events or an independent experimental confirmation of the hydrogen spectrum.",
      "limitations": [
        "n_H is total hydrogen-nucleus number density, not neutral-hydrogen density. x_e also includes helium electrons in the coupled model, so it cannot always be identified with x_p or the ionized fraction of hydrogen alone.",
        "These historical cosmological and atomic-rate inputs are not the selected Planck 2018 parameters or the Pitrou 2018 BBN composition. No full companion-Paper-I calculation, rate fit, numerical ODE solution, covariance or experimental capture measurement is reproduced.",
        "The reduced equations are fitted to the authors' multilevel calculation and have a stated cosmology/thermal-history range; Section 3 warns that extreme cosmologies, extra physics and z<=300 chemistry need more complete treatment. No helium-specific modern precision claim is admitted.",
        "The approximate 10 percent difference compares two stated calculations, not an observational error bar, uncertainty on atom existence or a current recombination discrepancy.",
        "The full calculation and its approximate parametrization describe the same modelling program; they are not independent replications. No new ionization history, redshift of first atoms or neutral fraction is numerically inferred here.",
        "The initial nuclear inventory and rates are supplied. This model does not derive the nucleus, nuclear stability, every atomic formation route, many-electron shell order or later molecular chemistry."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei",
        "Published pages L1-L4, Sections 2.1-3 and 4, especially Figure 1, Equations 1 and 3-5: historical multilevel hydrogen recombination, supplied cosmology, population evolution and approximate-rate validity"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1086/312250",
      "correctionCheck": "Published identity and DOI checked; scientific main text and figures read. This is a historical model, with no current-precision or independently reproduced computation claim."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "lamb1947",
      "kind": "research-publication",
      "title": "Fine Structure of the Hydrogen Atom by a Microwave Method",
      "authors": [
        "Willis E. Lamb, Jr.",
        "Robert C. Retherford"
      ],
      "year": 1947,
      "doi": "10.1103/PhysRev.72.241",
      "url": "https://doi.org/10.1103/PhysRev.72.241",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        ],
        "limit": "Complete article on pages 241-243 read, excluding the unrelated article beginning on page 243; both figures visually inspected. The 1000 MHz displacement is approximate and is explicitly not a best fit."
      }
    },
    {
      "id": "bethe1947",
      "kind": "research-publication",
      "title": "The Electromagnetic Shift of Energy Levels",
      "authors": [
        "H. A. Bethe"
      ],
      "year": 1947,
      "doi": "10.1103/PhysRev.72.339",
      "url": "https://doi.org/10.1103/PhysRev.72.339",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 339-341: bound/free subtraction, assumed relativistic cutoff and approximate shift; Equations 1-12"
        ],
        "limit": "Complete article read, excluding neighboring articles on pages 339 and 341; equations on pages 340-341 visually inspected. Nonrelativistic calculation with an assumed cutoff; no full relativistic calculation or independent numerical reproduction."
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
    },
    {
      "id": "schrodinger1926-hydrogen",
      "kind": "research-publication",
      "title": "An Undulatory Theory of the Mechanics of Atoms and Molecules",
      "authors": [
        "Erwin Schrödinger"
      ],
      "year": 1926,
      "doi": "10.1103/PhysRev.28.1049",
      "url": "https://www.ub.edu/hcub/hfq/sites/default/files/Schr%C3%B6dinger_1926_eng.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-formal-passages",
        "locators": [
          "Published pages 1056-1059, Section 4, Equations 15-19: simplified one-body Coulomb hydrogen equation, discrete negative energies and spatial eigenfunctions",
          "Published pages 1059-1061, Section 5: endpoint regularity, bound-state energy selection and the distinction from a finite artificial atomic boundary"
        ],
        "limit": "Read Sections 4-5 of the 22-page published English primary article, pages 1049-1070; visually checked pages 1057-1058. The paper supplies a simplified one-body hydrogen problem and states the negative-energy series while omitting the full mathematical proof here. Its historical charge-wave ontology, transition/radiation interpretation, many-electron and molecular claims, and incomplete relativistic discussion are not admitted. The proposed graph explicitly rewrites its Gaussian-unit result into the existing rationalized hbar=c=1 convention, without claiming new numerical solution or a capture calculation."
      }
    }
  ]
};

/** Preserve binding, prepared-atom spectroscopy and formation-model limits. */
export function validateAtomicStructureContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Atomic structure ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
