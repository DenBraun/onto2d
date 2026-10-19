import assert from "node:assert/strict";

export const IONIC_INTERACTIONS_CHECKS = new Map();
export const IONIC_INTERACTIONS_ANALYTICAL_SOURCES = new Map();
export const IONIC_INTERACTIONS_STUDY_TYPES = new Map([]);
export const IONIC_INTERACTIONS_ADMISSION = {
  "definitions": [
    [
      "phys:ionic-charge-state",
      "D-phys-ionic-charge-state"
    ],
    [
      "phys:ion-formation-interaction-boundary",
      "D-phys-ion-formation-interaction-boundary"
    ],
    [
      "phys:dilute-electrolyte-screening",
      "D-phys-dilute-electrolyte-screening"
    ]
  ],
  "formalDependencies": [
    [
      "physics:ionic-charge-state-ion-formation-interaction-boundary",
      [
        "phys:ionic-charge-state",
        "phys:ion-formation-interaction-boundary"
      ]
    ],
    [
      "physics:coulomb-effective-potential-ion-formation-interaction-boundary",
      [
        "phys:coulomb-effective-potential",
        "phys:ion-formation-interaction-boundary"
      ]
    ],
    [
      "physics:ionic-charge-state-dilute-electrolyte-screening",
      [
        "phys:ionic-charge-state",
        "phys:dilute-electrolyte-screening"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "liu2009-pfi-ion-readout",
      "C-phys-liu2009-pfi-ion-readout",
      [
        "liu2009-h2"
      ]
    ],
    [
      "ionic-source-scope",
      "C-phys-ionic-source-scope",
      [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    ]
  ],
  "dependencies": [
    [
      "liu2009-h2-context-liu2009-pfi-ion-readout",
      "liu2009-h2-context",
      "liu2009-pfi-ion-readout",
      "M-phys-liu2009-pfi-ion-readout",
      "measurement-context"
    ],
    [
      "ionic-charge-state-ionic-source-scope",
      "ionic-charge-state",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "ion-formation-interaction-boundary-ionic-source-scope",
      "ion-formation-interaction-boundary",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "dilute-electrolyte-screening-ionic-source-scope",
      "dilute-electrolyte-screening",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "liu2009-pfi-ion-readout-ionic-source-scope",
      "liu2009-pfi-ion-readout",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "liu-h2-ionization-ionic-source-scope",
      "liu-h2-ionization",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "rau-hd-mass-ionic-source-scope",
      "rau-hd-mass",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ],
    [
      "korobov-h2-energy-ionic-source-scope",
      "korobov-h2-energy",
      "ionic-source-scope",
      "M-phys-ionic-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-liu2009-pfi-ion-readout",
      [
        "liu2009-h2"
      ]
    ],
    [
      "C-phys-ionic-source-scope",
      [
        "debye-huckel1923-electrolytes",
        "korobov2017",
        "liu2009-h2",
        "rau2020"
      ]
    ],
    [
      "M-phys-liu2009-pfi-ion-readout",
      [
        "liu2009-h2"
      ]
    ],
    [
      "M-phys-ionic-source-scope",
      [
        "debye-huckel1923-electrolytes",
        "korobov2017",
        "liu2009-h2",
        "rau2020"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-ionic-charge-state",
      "kind": "review-finding",
      "statement": "Define an atomic or molecular ion by nonzero net species charge q=z*e, with e>0 the positive elementary-charge magnitude and signed integer charge state z. Given supplied nuclear charge numbers Z_a and electron inventory N_e, z=sum_a(Z_a)-N_e is charge bookkeeping for the chosen isolated species. Positive z labels a cation and negative z an anion. In the stated two-center one-electron cases H2+ and HD+, two Z=1 nuclei and one electron give z=+1. Charge state, isotope composition, internal quantum state and preparation are different descriptors.",
      "scope": "Atomic and molecular ion charge-state convention within the selected primary source and stated model/preparation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 192-193, Sections 3b-4, Equations 17-23: closest-approach limitation, electroneutral multicomponent electrolyte and generalized screening parameter",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The nuclear and electron charge assignments are supplied model inputs, not new absolute-charge measurements. A mass-to-charge readout with an assigned charge state does not independently determine both mass and charge.",
        "Isolated-species net charge is distinct from a partial-charge partition, formal oxidation number, screened effective charge or a local electronic population inside a material. A stable bound anion does not follow simply by adding an electron to an arbitrary species.",
        "Charge labels do not specify a formation route or a universal lifetime. A single trapped positive ion is still an ion without a nearby anion, molecular precursor or crystalline lattice."
      ]
    },
    {
      "id": "D-phys-ion-formation-interaction-boundary",
      "kind": "review-finding",
      "statement": "Changing the charge state of a selected atomic or molecular subsystem requires electron removal, attachment or redistribution under a specified channel and preparation. Donor-acceptor electron transfer is one possible process, distinct from direct above-threshold photoionization, electron-impact ionization and electric-field ionization of a prepared Rydberg state. These channel labels do not themselves supply a rate. Once charge states are specified, the leading vacuum Coulomb pair model distinguishes like-sign repulsion from opposite-sign attraction; a many-ion medium response is a further model. A bound-state energy, ion signal, formation rate and screened interaction are separate quantities.",
      "scope": "Ion formation, binding and electrostatic interaction distinction within the selected primary source and stated model/preparation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Liu preparation uses subthreshold optical excitation followed by a delayed field-ionization pulse, not direct above-threshold photoionization or a neutral donor-acceptor electron-transfer assay. No electron-transfer rate, electron-impact cross section or general photoionization yield is admitted.",
        "Rau describes in-trap electron-beam source production and target interaction, not a resolved elementary HD+ creation reaction network. Source preparation and stored-ion mass measurement do not identify every ion-production pathway.",
        "The vacuum Coulomb potential is the existing leading nonrelativistic rationalized-natural-unit model. It does not directly equal a material effective potential, calculate screening, or prove that any energetically labelled charge-transfer channel occurs.",
        "Ion charge and covalent electronic binding are compatible descriptors. This finite classification does not establish a mutually exclusive universal ionic-versus-covalent bond taxonomy."
      ]
    },
    {
      "id": "D-phys-dilute-electrolyte-screening",
      "kind": "review-finding",
      "statement": "Adopt the selected equilibrium continuum-solvent ion-atmosphere model in its original electrostatic-cgs units. Let n_i be bulk ion-species number density, z_i signed valence, D the dimensionless solvent dielectric constant, kT thermal energy and e the positive charge magnitude. For electroneutral bulk sum_i(n_i*z_i)=0, the Boltzmann density n_i(r)=n_i*exp[-z_i*e*psi(r)/(kT)] gives, after weak-potential linearization, nabla^2*psi=kappa^2*psi outside the tagged source, with kappa^2=4*pi*e^2*sum_i(n_i*z_i^2)/(D*kT). In the dilute point-ion limiting model the tagged-charge mean potential is psi(r)=q*exp(-kappa*r)/(D*r). The screening length 1/kappa depends on composition, temperature and solvent response; it represents statistical ion-atmosphere structure rather than an ion-formation event.",
      "scope": "Equilibrium dilute-electrolyte screened-potential model within the selected primary source and stated model/preparation limits.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 192-193, Sections 3b-4, Equations 17-23: closest-approach limitation, electroneutral multicomponent electrolyte and generalized screening parameter",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Number densities are per cm^3, distance in cm, kappa in cm^-1, charge in electrostatic-cgs units and kT in erg. These equations do not use the same numerical e or potential normalization as the rationalized hbar=c=1 QED pair potential; no numerical conversion or screening-length calculation is reproduced.",
        "The input ion species, valences, concentrations, continuum solvent and thermal equilibrium are supplied. Linearization needs |z_i*e*psi| small relative to kT; the point-ion law is a dilute limiting model, not a controlled microscopic near-core or concentrated-electrolyte potential.",
        "The source finite closest-approach parameter describes coarse-grained approach/hydration effects rather than a measured bare-ion radius. No detailed hydration-shell, solvent molecular structure or universally calibrated effective diameter is inferred.",
        "The source explicitly distinguishes statistical opposite-sign excess around an ion in solution from a literal salt-crystal lattice. The model does not independently establish solid order, ion-production kinetics, conductivity, diffusion, phase transitions or reaction rates.",
        "This primary theoretical result and its later comparisons with inherited osmotic/freezing data are not a new direct screening measurement, independent acquisition or locally replayed statistical-mechanical calculation."
      ]
    },
    {
      "id": "C-phys-liu2009-pfi-ion-readout",
      "kind": "review-finding",
      "statement": "In the selected Liu H2 beam preparation, two-step laser excitation reaches Rydberg states below the specified ionic limit. A voltage pulse delayed by 150 ns after the 397 nm excitation ionizes and extracts H2+, which is detected by a microchannel plate. The resulting field-ionization spectrum records ion signal versus excitation wavenumber in arbitrary units. It supplies a positive source-specific ion-production/readout example; the ion signal is not itself the assembled ground-state ionization energy.",
      "scope": "H2+ readout after prepared-Rydberg field ionization within the selected primary source and stated model/preparation limits.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This reuses the same Liu acquisition and response as the measured EF-to-Rydberg interval and assembled thresholds. It is not another independent experiment or an absolute ion-yield, branching-ratio or production-rate determination.",
        "The initial molecules and excited-state preparation are supplied. Pulse timing is an apparatus condition, not an ion-count threshold or universal ionization time. The subthreshold Rydberg state and the final charged product are distinct stages.",
        "The selected line assignment does not imply every weak spectral feature was assigned. No detector-efficiency reconstruction, pulse-field amplitude replay or new electronic-state tomography is performed."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "C-phys-ionic-source-scope",
      "kind": "review-finding",
      "statement": "The selected literature supplies a prepared-H2 field-ionization ion readout, a stored charged HD+ mass/state preparation, calculated molecular-ion binding quantities and an equilibrium screened-electrolyte model. These retain real atomic/molecular ions and collective ionic interactions under different conditions. Ion production, persistence in a trap, bound-state energetics and statistical solution screening are not one common formation or maintenance experiment.",
      "scope": "Scoped ion preparation and electrolyte interaction evidence within the selected primary source and stated model/preparation limits.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations",
          "role": "supports",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parent 2.2 supplies atomic electronic/nuclear concepts but its selected static Z=1 atom or cosmological formation history is not a necessary ancestry for every ion. Original parent 2.3 supplies relevant molecular structure for H2+/HD+, but atomic ions and bare nuclei do not require a previously formed molecule.",
        "Original equal weights 0.5/0.5, lateral direction [2], cooperation/constraint modes [0,1], necessary/dependency-10/arising labels have no matched causal estimator or universal necessity authority.",
        "Original parent 2.2 carrier 1/0 N_min=N_crit=1 and parent 2.3 carrier 1/0 N_min=N_crit=2, with N_sat=null, are not measured ion-formation or screening thresholds. Species electron/nucleus counts, detector signals and bulk number densities are separate counting domains.",
        "Pattern, Phase 1, TypeRole 2, Level 2, Science [0,1,2], established status and MustCover/ShouldCover codes are catalogue/display classifications. Recurring use of ionic descriptions does not establish an autonomous physical emergence stage or universal ionic permanence.",
        "Electron-transfer chemistry, solvation, salts and ionic crystals are real distinct domains, but the selected field/trap records and dilute continuum model do not derive their complete mechanisms. Microscopic donor-acceptor kinetics, detailed solvent coordination, crystal structure, transport, phase behavior and reactivity need their own specified states and evidence.",
        "Generic theoretical and empirical source-card paragraphs with null DOI/URL are not publications. No unnamed electrolysis, ion-lattice, solvation or charge-transfer observation is admitted as independent support.",
        "Liu ion signal and threshold assembly share the same measurement chain. Rau mass/state evidence is reused from its existing acquisition; the molecular mass-closure output is not an input here. Korobov total ionization energy remains a theoretical state quantity with its existing approximations and omitted constant uncertainties.",
        "No new acquisition, common likelihood, molecular-ion solver, equilibrium solution calculation, independent reproduction or universal electromagnetic-only organization law is introduced."
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "M-phys-liu2009-pfi-ion-readout",
      "kind": "method",
      "statement": "Interpret the Liu detector signal through its supplied neutral beam, two-step Rydberg preparation, delayed field-ionization/extraction pulse and microchannel-plate response. Reusing this readout does not add another measurement to the existing optical interval and threshold chain.",
      "scope": "Field-ionization preparation and ion detection boundary within the selected primary source and stated model/preparation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The detector response does not independently measure direct above-threshold photoionization, chemical electron transfer, a full ion-production rate or absolute detection efficiency."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "M-phys-ionic-source-scope",
      "kind": "method",
      "statement": "Compare the specified charged-species definitions, Liu field-ionization readout, Rau stored-ion preparation, Korobov state-energy calculation and Debye-Huckel equilibrium model within their original units, preparations and shared-source limits. Use model definitions to delimit interpretation rather than treating them as measured universal physical causes.",
      "scope": "Separate ion charge, preparation, state energy and medium response within the selected primary source and stated model/preparation limits.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations",
          "role": "method",
          "note": "Supports only the declared charge-state, preparation, source-reported result or finite model; no independent replay or universal ion-formation law."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These heterogeneous contexts do not form one causal cascade, independent replications of an ion-formation law, a complete salt/electrolyte material theory or a universal carrier-count construction."
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:ionic-charge-state",
      "name": "Atomic and molecular ion charge-state convention",
      "kind": "definition",
      "description": "Define an atomic or molecular ion by nonzero net species charge q=z*e, with e>0 the positive elementary-charge magnitude and signed integer charge state z. Given supplied nuclear charge numbers Z_a and electron inventory N_e, z=sum_a(Z_a)-N_e is charge bookkeeping for the chosen isolated species. Positive z labels a cation and negative z an anion. In the stated two-center one-electron cases H2+ and HD+, two Z=1 nuclei and one electron give z=+1. Charge state, isotope composition, internal quantum state and preparation are different descriptors.",
      "claimIds": [
        "D-phys-ionic-charge-state"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 192-193, Sections 3b-4, Equations 17-23: closest-approach limitation, electroneutral multicomponent electrolyte and generalized screening parameter"
        }
      ],
      "openObligations": [
        "The nuclear and electron charge assignments are supplied model inputs, not new absolute-charge measurements. A mass-to-charge readout with an assigned charge state does not independently determine both mass and charge.",
        "Isolated-species net charge is distinct from a partial-charge partition, formal oxidation number, screened effective charge or a local electronic population inside a material. A stable bound anion does not follow simply by adding an electron to an arbitrary species.",
        "Charge labels do not specify a formation route or a universal lifetime. A single trapped positive ion is still an ion without a nearby anion, molecular precursor or crystalline lattice."
      ]
    },
    {
      "id": "phys:ion-formation-interaction-boundary",
      "name": "Ion formation, binding and electrostatic interaction distinction",
      "kind": "definition",
      "description": "Changing the charge state of a selected atomic or molecular subsystem requires electron removal, attachment or redistribution under a specified channel and preparation. Donor-acceptor electron transfer is one possible process, distinct from direct above-threshold photoionization, electron-impact ionization and electric-field ionization of a prepared Rydberg state. These channel labels do not themselves supply a rate. Once charge states are specified, the leading vacuum Coulomb pair model distinguishes like-sign repulsion from opposite-sign attraction; a many-ion medium response is a further model. A bound-state energy, ion signal, formation rate and screened interaction are separate quantities.",
      "claimIds": [
        "D-phys-ion-formation-interaction-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        }
      ],
      "openObligations": [
        "The Liu preparation uses subthreshold optical excitation followed by a delayed field-ionization pulse, not direct above-threshold photoionization or a neutral donor-acceptor electron-transfer assay. No electron-transfer rate, electron-impact cross section or general photoionization yield is admitted.",
        "Rau describes in-trap electron-beam source production and target interaction, not a resolved elementary HD+ creation reaction network. Source preparation and stored-ion mass measurement do not identify every ion-production pathway.",
        "The vacuum Coulomb potential is the existing leading nonrelativistic rationalized-natural-unit model. It does not directly equal a material effective potential, calculate screening, or prove that any energetically labelled charge-transfer channel occurs.",
        "Ion charge and covalent electronic binding are compatible descriptors. This finite classification does not establish a mutually exclusive universal ionic-versus-covalent bond taxonomy."
      ]
    },
    {
      "id": "phys:dilute-electrolyte-screening",
      "name": "Equilibrium dilute-electrolyte screened-potential model",
      "kind": "definition",
      "description": "Adopt the selected equilibrium continuum-solvent ion-atmosphere model in its original electrostatic-cgs units. Let n_i be bulk ion-species number density, z_i signed valence, D the dimensionless solvent dielectric constant, kT thermal energy and e the positive charge magnitude. For electroneutral bulk sum_i(n_i*z_i)=0, the Boltzmann density n_i(r)=n_i*exp[-z_i*e*psi(r)/(kT)] gives, after weak-potential linearization, nabla^2*psi=kappa^2*psi outside the tagged source, with kappa^2=4*pi*e^2*sum_i(n_i*z_i^2)/(D*kT). In the dilute point-ion limiting model the tagged-charge mean potential is psi(r)=q*exp(-kappa*r)/(D*r). The screening length 1/kappa depends on composition, temperature and solvent response; it represents statistical ion-atmosphere structure rather than an ion-formation event.",
      "claimIds": [
        "D-phys-dilute-electrolyte-screening"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential"
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 192-193, Sections 3b-4, Equations 17-23: closest-approach limitation, electroneutral multicomponent electrolyte and generalized screening parameter"
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations"
        }
      ],
      "openObligations": [
        "Number densities are per cm^3, distance in cm, kappa in cm^-1, charge in electrostatic-cgs units and kT in erg. These equations do not use the same numerical e or potential normalization as the rationalized hbar=c=1 QED pair potential; no numerical conversion or screening-length calculation is reproduced.",
        "The input ion species, valences, concentrations, continuum solvent and thermal equilibrium are supplied. Linearization needs |z_i*e*psi| small relative to kT; the point-ion law is a dilute limiting model, not a controlled microscopic near-core or concentrated-electrolyte potential.",
        "The source finite closest-approach parameter describes coarse-grained approach/hydration effects rather than a measured bare-ion radius. No detailed hydration-shell, solvent molecular structure or universally calibrated effective diameter is inferred.",
        "The source explicitly distinguishes statistical opposite-sign excess around an ion in solution from a literal salt-crystal lattice. The model does not independently establish solid order, ion-production kinetics, conductivity, diffusion, phase transitions or reaction rates.",
        "This primary theoretical result and its later comparisons with inherited osmotic/freezing data are not a new direct screening measurement, independent acquisition or locally replayed statistical-mechanical calculation."
      ]
    },
    {
      "id": "phys:liu2009-pfi-ion-readout",
      "name": "H2+ readout after prepared-Rydberg field ionization",
      "kind": "scoped-process",
      "description": "In the selected Liu H2 beam preparation, two-step laser excitation reaches Rydberg states below the specified ionic limit. A voltage pulse delayed by 150 ns after the 397 nm excitation ionizes and extracts H2+, which is detected by a microchannel plate. The resulting field-ionization spectrum records ion signal versus excitation wavenumber in arbitrary units. It supplies a positive source-specific ion-production/readout example; the ion signal is not itself the assembled ground-state ionization energy.",
      "claimIds": [
        "C-phys-liu2009-pfi-ion-readout"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        }
      ],
      "openObligations": [
        "This reuses the same Liu acquisition and response as the measured EF-to-Rydberg interval and assembled thresholds. It is not another independent experiment or an absolute ion-yield, branching-ratio or production-rate determination.",
        "The initial molecules and excited-state preparation are supplied. Pulse timing is an apparatus condition, not an ion-count threshold or universal ionization time. The subthreshold Rydberg state and the final charged product are distinct stages.",
        "The selected line assignment does not imply every weak spectral feature was assigned. No detector-efficiency reconstruction, pulse-field amplitude replay or new electronic-state tomography is performed."
      ]
    },
    {
      "id": "phys:ionic-source-scope",
      "name": "Scoped ion preparation and electrolyte interaction evidence",
      "kind": "scoped-process",
      "description": "The selected literature supplies a prepared-H2 field-ionization ion readout, a stored charged HD+ mass/state preparation, calculated molecular-ion binding quantities and an equilibrium screened-electrolyte model. These retain real atomic/molecular ions and collective ionic interactions under different conditions. Ion production, persistence in a trap, bound-state energetics and statistical solution screening are not one common formation or maintenance experiment.",
      "claimIds": [
        "C-phys-ionic-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential"
        },
        {
          "sourceId": "debye-huckel1923-electrolytes",
          "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original parent 2.2 supplies atomic electronic/nuclear concepts but its selected static Z=1 atom or cosmological formation history is not a necessary ancestry for every ion. Original parent 2.3 supplies relevant molecular structure for H2+/HD+, but atomic ions and bare nuclei do not require a previously formed molecule.",
        "Original equal weights 0.5/0.5, lateral direction [2], cooperation/constraint modes [0,1], necessary/dependency-10/arising labels have no matched causal estimator or universal necessity authority.",
        "Original parent 2.2 carrier 1/0 N_min=N_crit=1 and parent 2.3 carrier 1/0 N_min=N_crit=2, with N_sat=null, are not measured ion-formation or screening thresholds. Species electron/nucleus counts, detector signals and bulk number densities are separate counting domains.",
        "Pattern, Phase 1, TypeRole 2, Level 2, Science [0,1,2], established status and MustCover/ShouldCover codes are catalogue/display classifications. Recurring use of ionic descriptions does not establish an autonomous physical emergence stage or universal ionic permanence.",
        "Electron-transfer chemistry, solvation, salts and ionic crystals are real distinct domains, but the selected field/trap records and dilute continuum model do not derive their complete mechanisms. Microscopic donor-acceptor kinetics, detailed solvent coordination, crystal structure, transport, phase behavior and reactivity need their own specified states and evidence.",
        "Generic theoretical and empirical source-card paragraphs with null DOI/URL are not publications. No unnamed electrolysis, ion-lattice, solvation or charge-transfer observation is admitted as independent support.",
        "Liu ion signal and threshold assembly share the same measurement chain. Rau mass/state evidence is reused from its existing acquisition; the molecular mass-closure output is not an input here. Korobov total ionization energy remains a theoretical state quantity with its existing approximations and omitted constant uncertainties.",
        "No new acquisition, common likelihood, molecular-ion solver, equilibrium solution calculation, independent reproduction or universal electromagnetic-only organization law is introduced."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:ionic-charge-state-ion-formation-interaction-boundary",
      "source": "phys:ionic-charge-state",
      "target": "phys:ion-formation-interaction-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify subsystem charge and electron inventory before distinguishing charge-changing preparations from interactions of already supplied ions.",
      "claimIds": [
        "D-phys-ion-formation-interaction-boundary"
      ]
    },
    {
      "id": "physics:coulomb-effective-potential-ion-formation-interaction-boundary",
      "source": "phys:coulomb-effective-potential",
      "target": "phys:ion-formation-interaction-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The vacuum pair-potential definition describes an interaction approximation; it does not determine charge-changing preparation or a screened material response.",
      "claimIds": [
        "D-phys-ion-formation-interaction-boundary"
      ]
    },
    {
      "id": "physics:ionic-charge-state-dilute-electrolyte-screening",
      "source": "phys:ionic-charge-state",
      "target": "phys:dilute-electrolyte-screening",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Signed ion valences and bulk densities are supplied inputs to the selected continuum equilibrium model, not predicted microscopic charge-transfer outcomes.",
      "claimIds": [
        "D-phys-dilute-electrolyte-screening"
      ]
    },
    {
      "id": "physics:liu2009-h2-context-liu2009-pfi-ion-readout",
      "source": "phys:liu2009-h2-context",
      "target": "phys:liu2009-pfi-ion-readout",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The supplied optical Rydberg preparation and delayed pulse define the measured ion-readout boundary in the same Liu acquisition.",
      "claimIds": [
        "M-phys-liu2009-pfi-ion-readout"
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:ionic-charge-state-ionic-source-scope",
      "source": "phys:ionic-charge-state",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Charge-state bookkeeping delimits the isolated-ion descriptions; it is not a separate absolute-charge measurement.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:ion-formation-interaction-boundary-ionic-source-scope",
      "source": "phys:ion-formation-interaction-boundary",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Formation, state energy and interactions remain distinct despite sharing the same charged-species vocabulary.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:dilute-electrolyte-screening-ionic-source-scope",
      "source": "phys:dilute-electrolyte-screening",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "A selected equilibrium screening model preserves a positive collective ionic example without turning solution correlations into a solid lattice or production law.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:liu2009-pfi-ion-readout-ionic-source-scope",
      "source": "phys:liu2009-pfi-ion-readout",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The ion readout reuses one existing optical preparation and does not become an independent ion-formation experiment.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:liu-h2-ionization-ionic-source-scope",
      "source": "phys:liu-h2-ionization",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The assembled ground-state ionization threshold is a state-specific energy constraint, not the delayed field-ionization signal or its production rate.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:rau-hd-mass-ionic-source-scope",
      "source": "phys:rau-hd-mass",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The charged-ion mass finding retains its existing trap, assigned charge state, inferred internal-state preparation and response limits.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    },
    {
      "id": "physics:korobov-h2-energy-ionic-source-scope",
      "source": "phys:korobov-h2-energy",
      "target": "phys:ionic-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The molecular-ion total ionization energy remains a computational state result rather than an observed ion-production channel.",
      "claimIds": [
        "M-phys-ionic-source-scope"
      ],
      "contextIds": [
        "liu2009-h2",
        "rau2020-hd",
        "korobov2017-h2"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:ionic-charge-state",
      "role": "definition",
      "denotes": "Atomic and molecular ion charge-state convention; a scoped description rather than an independently identified universal physical stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ionic-charge-state"
      ]
    },
    {
      "nodeId": "phys:ion-formation-interaction-boundary",
      "role": "definition",
      "denotes": "Ion formation, binding and electrostatic interaction distinction; a scoped description rather than an independently identified universal physical stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ion-formation-interaction-boundary"
      ]
    },
    {
      "nodeId": "phys:dilute-electrolyte-screening",
      "role": "definition",
      "denotes": "Equilibrium dilute-electrolyte screened-potential model; a scoped description rather than an independently identified universal physical stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-dilute-electrolyte-screening"
      ]
    },
    {
      "nodeId": "phys:liu2009-pfi-ion-readout",
      "role": "scoped-phenomenon",
      "denotes": "H2+ readout after prepared-Rydberg field ionization; a scoped description rather than an independently identified universal physical stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-liu2009-pfi-ion-readout"
      ]
    },
    {
      "nodeId": "phys:ionic-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped ion preparation and electrolyte interaction evidence; a scoped description rather than an independently identified universal physical stage.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ionic-source-scope"
      ]
    }
  ],
  "studies": [],
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
      "id": "rau2020",
      "kind": "research-publication",
      "title": "Penning trap mass measurements of the deuteron and the HD+ molecular ion",
      "authors": [
        "S. Rau",
        "F. Heiße",
        "F. Köhler-Langes",
        "S. Sasidharan",
        "R. Haas",
        "D. Renisch",
        "Ch. E. Düllmann",
        "W. Quint",
        "S. Sturm",
        "K. Blaum"
      ],
      "year": 2020,
      "doi": "10.1038/s41586-020-2628-7",
      "url": "https://arxiv.org/pdf/2203.05971v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-author-manuscript",
        "locators": [
          "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
          "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion"
        ],
        "limit": "All ten pages of the post-peer-review, pre-copyedit author version were read; pages 1, 3, 4, 5, 7, 8, 9 and 10 were visually inspected. Publisher metadata and deposited figure tables were checked. The full publisher record was not obtained. Source-version notation conflicts remain explicit; acquisition, full covariance and adjustment are not reproduced."
      }
    },
    {
      "id": "korobov2017",
      "kind": "research-publication",
      "title": "Fundamental Transitions and Ionization Energies of the Hydrogen Molecular Ions with Few ppt Uncertainty",
      "authors": [
        "V. I. Korobov",
        "L. Hilico",
        "J.-Ph. Karr"
      ],
      "year": 2017,
      "doi": "10.1103/PhysRevLett.118.233001",
      "url": "https://arxiv.org/pdf/1703.07972v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-author-manuscript",
        "locators": [
          "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
        ],
        "limit": "All five author-manuscript pages were read and Table V visually inspected; publisher metadata was checked. The record establishes the stated theoretical energy and its uncertainty exclusions, not a replay of the NRQED calculation."
      }
    },
    {
      "id": "tong-qft-free-maxwell",
      "kind": "research-publication",
      "title": "Quantum Field Theory: selected electromagnetic gauge-field and QED sections (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        ],
        "limit": "Author lecture notes for the Cambridge 2006-2007 course, in the HTML edition generated on 15 October 2021. Only the listed body passages were reviewed for this admission. This is an instructional formal source, not a primary photon experiment. The graph declares a smeared one-photon state using the reviewed mode algebra and a fixed-frame normalization; it does not report a new numerical replay, experimental preparation, mass/charge bound, interacting-field construction or all-orders QED result. Scalar-field sections are not substituted for the gauge-field constraint analysis. The additional Coulomb passage is a leading nonrelativistic scattering calculation, not a static-force experiment or evidence for a population of real exchanged photons."
      }
    },
    {
      "id": "liu2009-h2",
      "kind": "research-publication",
      "title": "Determination of the ionization and dissociation energies of the hydrogen molecule",
      "authors": [
        "Jinjun Liu",
        "Edcel J. Salumbides",
        "Urs Hollenstein",
        "Jeroen C. J. Koelemeij",
        "Kjeld S. E. Eikema",
        "Wim Ubachs",
        "Frédéric Merkt"
      ],
      "year": 2009,
      "doi": "10.1063/1.3120443",
      "url": "https://research.vu.nl/ws/files/2485538/JCP-IonPot.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text",
        "locators": [
          "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "Published pages 174306-6 to 174306-7, Section IV, Table III and Figure 6: historical comparisons and experimental versus hybrid result distinction"
        ],
        "limit": "Read published scientific main text 174306-1 through 174306-7, Sections I-IV, Equations 1-14, Tables I-III and Figures 1-6/captions. Visually checked Figures 1-5, Tables I-II and Equations 9-14 on PDF pages 3-7 (the institutional cover adds one PDF page). Reference list was inspected to identify inputs; the cited interval, atomic and molecular-ion publications were not thereby separately reviewed or admitted. No raw acquisition data, supplementary reanalysis, covariance reconstruction or local numerical replay. DOI registration and the published title block were compared; Crossref showed no update-to item and an empty relation object. No exhaustive later-correction or modern-best-value claim."
      }
    },
    {
      "id": "debye-huckel1923-electrolytes",
      "kind": "research-publication",
      "title": "Zur Theorie der Elektrolyte. I. Gefrierpunktserniedrigung und verwandte Erscheinungen",
      "authors": [
        "P. Debye",
        "E. Hückel"
      ],
      "year": 1923,
      "doi": null,
      "url": "https://knowledge.electrochem.org/estir/hist/hist-12-Debye-1.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-formal-passages",
        "locators": [
          "Printed pages 190-191, Section 3, Equations 9-14: Boltzmann ion densities, weak-potential Poisson equation and dilute point-ion screened potential",
          "Printed pages 192-193, Sections 3b-4, Equations 17-23: closest-approach limitation, electroneutral multicomponent electrolyte and generalized screening parameter",
          "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations"
        ],
        "limit": "Read printed pages 190-193 and the Section 10 ion-atmosphere/crystal and solvent discussion on pages 204-205; equations on 190-193 visually checked. Original electrostatic-cgs units are retained. This is a finite equilibrium mean-potential model, not a new direct screening experiment, microscopic electron-transfer theory, complete osmotic/freezing-point refit or conductivity calculation. The original title block identifies Physikalische Zeitschrift 24, 185-206, 1 May 1923; no original-article DOI or exhaustive later correction search was verified. The later experimental comparisons are not independently acquired or replayed here."
      }
    }
  ]
};

/** Preserve charge bookkeeping, field-ionization readout and equilibrium screening limits. */
export function validateIonicInteractionsContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Ionic interactions ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
