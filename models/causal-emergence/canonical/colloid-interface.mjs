import assert from "node:assert/strict";

export const COLLOID_INTERFACE_CHECKS = new Map();
export const COLLOID_INTERFACE_ANALYTICAL_SOURCES = new Map();
export const COLLOID_INTERFACE_STUDY_TYPES = new Map([["crocker1994-colloid-pair", "primary-experiment"], ["gasser2001-colloid-nucleation", "primary-experiment"]]);
export const COLLOID_INTERFACE_ADMISSION = {
  "definitions": [
    [
      "phys:colloid-interface-stability-boundary",
      "D-phys-colloid-interface-stability-boundary"
    ],
    [
      "phys:screened-colloid-pair-model",
      "D-phys-screened-colloid-pair-model"
    ]
  ],
  "formalDependencies": [
    [
      "physics:colloid-interface-stability-boundary-screened-colloid-pair-model",
      [
        "phys:colloid-interface-stability-boundary",
        "phys:screened-colloid-pair-model"
      ]
    ]
  ],
  "contexts": [
    [
      "crocker1994-colloid-pair-context",
      "M-phys-crocker1994-colloid-pair-context",
      [
        "crocker1994-colloid-pair"
      ]
    ],
    [
      "gasser2001-colloid-context",
      "M-phys-gasser2001-colloid-context",
      [
        "gasser2001-colloid-nucleation"
      ]
    ]
  ],
  "observations": [
    [
      "colloid-pair-repulsion",
      "C-phys-colloid-pair-repulsion",
      [
        "crocker1994-colloid-pair"
      ]
    ],
    [
      "colloid-nucleus-growth",
      "C-phys-colloid-nucleus-growth",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "colloid-interface-free-energy",
      "C-phys-colloid-interface-free-energy",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "colloid-interface-source-scope",
      "C-phys-colloid-interface-source-scope",
      [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    ]
  ],
  "dependencies": [
    [
      "crocker1994-colloid-pair-context-colloid-pair-repulsion",
      "crocker1994-colloid-pair-context",
      "colloid-pair-repulsion",
      "M-phys-colloid-pair-repulsion",
      "measurement-context"
    ],
    [
      "screened-colloid-pair-model-colloid-pair-repulsion",
      "screened-colloid-pair-model",
      "colloid-pair-repulsion",
      "M-phys-colloid-pair-repulsion",
      "interpretation-dependency"
    ],
    [
      "gasser2001-colloid-context-colloid-nucleus-growth",
      "gasser2001-colloid-context",
      "colloid-nucleus-growth",
      "M-phys-colloid-nucleus-growth",
      "measurement-context"
    ],
    [
      "colloid-interface-stability-boundary-colloid-nucleus-growth",
      "colloid-interface-stability-boundary",
      "colloid-nucleus-growth",
      "M-phys-colloid-nucleus-growth",
      "interpretation-dependency"
    ],
    [
      "gasser2001-colloid-context-colloid-interface-free-energy",
      "gasser2001-colloid-context",
      "colloid-interface-free-energy",
      "M-phys-colloid-interface-free-energy",
      "measurement-context"
    ],
    [
      "colloid-nucleus-growth-colloid-interface-free-energy",
      "colloid-nucleus-growth",
      "colloid-interface-free-energy",
      "M-phys-colloid-interface-free-energy",
      "interpretation-dependency"
    ],
    [
      "colloid-interface-stability-boundary-colloid-interface-source-scope",
      "colloid-interface-stability-boundary",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "screened-colloid-pair-model-colloid-interface-source-scope",
      "screened-colloid-pair-model",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "crocker1994-colloid-pair-context-colloid-interface-source-scope",
      "crocker1994-colloid-pair-context",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "colloid-pair-repulsion-colloid-interface-source-scope",
      "colloid-pair-repulsion",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "gasser2001-colloid-context-colloid-interface-source-scope",
      "gasser2001-colloid-context",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "colloid-nucleus-growth-colloid-interface-source-scope",
      "colloid-nucleus-growth",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ],
    [
      "colloid-interface-free-energy-colloid-interface-source-scope",
      "colloid-interface-free-energy",
      "colloid-interface-source-scope",
      "M-phys-colloid-interface-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "crocker1994-colloid-pair",
    "gasser2001-colloid-nucleation"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-crocker1994-colloid-pair-context",
      [
        "crocker1994-colloid-pair"
      ]
    ],
    [
      "M-phys-colloid-pair-repulsion",
      [
        "crocker1994-colloid-pair"
      ]
    ],
    [
      "C-phys-colloid-pair-repulsion",
      [
        "crocker1994-colloid-pair"
      ]
    ],
    [
      "M-phys-gasser2001-colloid-context",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "M-phys-colloid-nucleus-growth",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "C-phys-colloid-nucleus-growth",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "M-phys-colloid-interface-free-energy",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "C-phys-colloid-interface-free-energy",
      [
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "M-phys-colloid-interface-source-scope",
      [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    ],
    [
      "C-phys-colloid-interface-source-scope",
      [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-colloid-interface-stability-boundary",
      "kind": "review-finding",
      "statement": "Specify the dispersed material, continuous medium, interaction model, preparation and observation time when describing colloid stability or an interface. Persistence over an observation window, a thermodynamic phase preference and a kinetic barrier to a particular change are different propositions. For the source spherical-crystallite approximation, DeltaG(r)=4*pi*r^2*gamma-(4*pi/3)*r^3*n*DeltaMu, where gamma is crystal-liquid interfacial free energy per area, n is crystallite particle-number density and DeltaMu is liquid-minus-solid chemical potential. The positive surface cost competes with a bulk growth term when DeltaMu>0.",
      "scope": "Operational stability/interface distinctions and the selected classical-nucleation expression; no universal material law.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The spherical nucleation expression is a declared model, not a measured sharp surface, a proof of equilibrium sampling after shear melting or a DLVO pair-coagulation barrier. The actual source nuclei are nonspherical and have diffuse rough interfaces.",
        "An interfacial free energy is energy per area, not an electrostatic pair energy or a universal barrier height. The relevant small-nucleus area statistics require their own statistical and geometric assumptions.",
        "Real droplets, emulsions, solvent-mediated forces, boundary layers, rheology, scattering and transport remain system-dependent phenomena; neither a surface-to-volume ratio nor these two experiments calculates all such responses."
      ]
    },
    {
      "id": "D-phys-screened-colloid-pair-model",
      "kind": "review-finding",
      "statement": "For the source isolated identical spheres in the far-separation Debye-Huckel regime, use U(x)/(kB*T)=Zeff^2*lambdaB*[exp(kappa*a)/(1+kappa*a)]^2*exp(-kappa*x)/x. Here x is center-to-center separation, a is sphere radius, Zeff is effective charge in units of the positive elementary-charge magnitude, kappa is inverse screening length and lambdaB=e^2/(epsilon*kB*T) in the source electrostatic-cgs convention. This is a screened repulsive pair term, with finite-sphere amplitude and an effective charge that need not equal titratable charge.",
      "scope": "Dimensionless rewrite of Crocker-Grier Equation1, retaining its source units, effective-charge meaning and range.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "lambdaB and x,a are lengths, kappa is inverse length and U/(kB*T) is dimensionless. Rationalized SI would require e^2/(4*pi*epsilon0*epsilonr*kB*T); silently mixing that normalization with the source equation is invalid. The rewrite is algebraic, not a new numerical calculation.",
        "The selected equation omits van der Waals and hydrodynamic contributions in the declared highly charged, resolved regime. It is not a complete repulsion-plus-attraction DLVO potential, near-contact model, coagulation barrier, aggregation-rate law or stability theorem.",
        "A fitted dilute isolated-pair potential is not automatically an exact pair-additive description of a dense suspension, phase boundary or many-body structure. Walls, charge regulation, ionic contamination and nonlinearity require separate checks.",
        "The existing dilute point-ion screening definition has different source and particle assumptions. Its mean potential is not silently substituted for this finite-sphere pair energy."
      ]
    },
    {
      "id": "M-phys-crocker1994-colloid-pair-context",
      "kind": "method",
      "statement": "Prepare the source dilute aqueous polystyrene-sulfate spheres of radius326 nm, monodisperse within1%, in a glass cell with3-4 micrometre gap, ion-exchange reservoirs and argon flushing to limit ionic contamination. Trap two isolated spheres initially1.5 or1.7 micrometres apart with dual optical tweezers, release when no other particles are nearby, and record796 pair trajectories. Use the source relative-coordinate projection,57 nm bins and a transition-time interval1/30 s; the source pools6502 initial/final separation samples to estimate a transition matrix.",
      "scope": "Source acquisition and preparation of isolated colloid-pair trajectories.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The acquired data are finite non-equilibrium release trajectories. Infer a stationary distribution under the source time-homogeneous Smoluchowski model and then U=-kB*T*log(p_eq) up to an additive constant; this is not direct equilibrium-histogram sampling or a new force-sensor readout.",
        "The source model assumes a spherically symmetric separation potential and omits hydrodynamic coupling. The trajectory projection, finite bins and boundary condition are analysis choices; reflecting-boundary inference requires the upper separation bound to lie beyond the interaction.",
        "The reported mean separation uncertainty is50 nm; source estimates effective charge as a lower limit because localization errors broaden the potential. Reported fit uncertainties have no newly verified coverage convention or full covariance here.",
        "The separate concentrated-cell crystals persisting for months are an ionic-purity control under a different preparation, not the lifetime of an isolated pair or an independent replication of the dilute-pair measurement.",
        "No raw video, calibration replay, new independent effective-charge assay or universal temperature is supplied. The source reference value of Bjerrum length at25 C does not establish the actual experimental temperature."
      ],
      "contextIds": [
        "crocker1994-colloid-pair"
      ]
    },
    {
      "id": "M-phys-colloid-pair-repulsion",
      "kind": "method",
      "statement": "Estimate the stationary probability vector of the measured transition matrix, convert it to a potential using U=-kB*T*log(p_eq) up to an additive constant, and fit only the declared screened-pair model. Preserve the difference between observed trajectories, inferred potential and fitted effective charge/screening parameters.",
      "scope": "Transition-matrix inference contract for the selected isolated-pair result.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The acquired data are finite non-equilibrium release trajectories. Infer a stationary distribution under the source time-homogeneous Smoluchowski model and then U=-kB*T*log(p_eq) up to an additive constant; this is not direct equilibrium-histogram sampling or a new force-sensor readout.",
        "The source model assumes a spherically symmetric separation potential and omits hydrodynamic coupling. The trajectory projection, finite bins and boundary condition are analysis choices; reflecting-boundary inference requires the upper separation bound to lie beyond the interaction.",
        "The reported mean separation uncertainty is50 nm; source estimates effective charge as a lower limit because localization errors broaden the potential. Reported fit uncertainties have no newly verified coverage convention or full covariance here.",
        "The separate concentrated-cell crystals persisting for months are an ionic-purity control under a different preparation, not the lifetime of an isolated pair or an independent replication of the dilute-pair measurement.",
        "No raw video, calibration replay, new independent effective-charge assay or universal temperature is supplied. The source reference value of Bjerrum length at25 C does not establish the actual experimental temperature."
      ],
      "contextIds": [
        "crocker1994-colloid-pair"
      ]
    },
    {
      "id": "C-phys-colloid-pair-repulsion",
      "kind": "review-finding",
      "statement": "The source isolated-pair transition-matrix analysis reports a screened repulsive potential fitted with Zeff=1991+/-150 elementary-charge units and screening length kappa^-1=161+/-10 nm. It finds no statistically significant long-range attraction in its resolved preparation and separation range. These are conditional parameters and a finite negative bound, not the fully dissociated surface charge or an all-colloid exclusion of attraction.",
      "scope": "Finite source-reported aqueous isolated-pair inference.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The potential and fit parameters share the same finite release trajectories; they are not independent confirmations. The equivalent1:1 electrolyte concentration quoted from the fitted screening length is an inference, not a separately acquired concentration assay.",
        "The stated uncertainties are source-reported fit estimates, with position-error and lower-limit caveats retained. No new likelihood, absolute potential offset, error coverage or independent numerical reproduction is supplied.",
        "No statistically significant attraction in the resolved range does not exclude short-range dispersion, other geometries, wall effects, different charge states or concentrated collective behavior. No full DLVO barrier or universal dispersion lifetime is measured."
      ],
      "contextIds": [
        "crocker1994-colloid-pair"
      ]
    },
    {
      "id": "M-phys-gasser2001-colloid-context",
      "kind": "method",
      "statement": "Use source PMMA spheres sterically stabilized with poly-12-hydroxystearic acid, radius a=1.26 micrometres and polydispersity below5%, in density- and index-matched decahydronaphthalene/cyclohexylbromide. Rhodamine dye imparts a small charge, so these are nearly hard spheres rather than an exact hard-sphere model. Shear melt the50 microlitre sample by magnetically agitating an embedded wire; acquire a58 by55 by20 cubic-micrometre confocal volume containing about4000 particles, at least8 and typically15 particle diameters from treated walls. Classify local order from particle centers with approximately0.04 micrometre accuracy.",
      "scope": "Source finite concentrated-PMMA preparation and confocal classification.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Radius and volume fractions inherit the source calibration from volume per particle at assigned random-close-packed0.64 and rhcp0.74 reference states; these are not an independent absolute size/packing measurement here.",
        "The source l=6 normalized bond-order classifier uses neighbor separation below2.83*a, inner-product threshold above0.5 and at least8 crystal-like bonds per crystal-like particle. Bond denotes a neighbor direction, not a chemical bond; these thresholds are operational classification choices, not universal critical populations.",
        "Growth/shrink analysis excludes nuclei with particles closer than0.8*a to the observation-volume edge. Source note27 reports1500-2500 fully visible tracked nuclei per typical measurement, without specifying its duration, frame count or unique-track/repeated-observation accounting. This is not a simultaneous population or a known number of independent events. Visibility and tracking impose selection rather than complete sampling of all nuclei.",
        "The acquisition starts after shear melting. At higher volume fractions0.47-0.53, immediate growth left little equilibration time and prevented complete observation of critical-nucleus formation. No globally equilibrated sampling or universal homogeneous-nucleation rate is established.",
        "Nucleus counts, geometry, inferred interface cost and structure fits share the same experimental study. Computer-generated order-reference histograms matched to experimental broadening are analysis inputs, not independent measured crystals or a separate new computational study."
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "M-phys-colloid-nucleus-growth",
      "kind": "method",
      "statement": "Identify crystal-like particles by the source local-order algorithm, follow fully visible crystallites, and compare growth and shrinkage probabilities as a function of their size. Keep the classifier, observation window, volume fraction and post-shear preparation attached to the inferred critical range.",
      "scope": "Kinetic classification contract for finite colloidal nucleus evolution.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Radius and volume fractions inherit the source calibration from volume per particle at assigned random-close-packed0.64 and rhcp0.74 reference states; these are not an independent absolute size/packing measurement here.",
        "The source l=6 normalized bond-order classifier uses neighbor separation below2.83*a, inner-product threshold above0.5 and at least8 crystal-like bonds per crystal-like particle. Bond denotes a neighbor direction, not a chemical bond; these thresholds are operational classification choices, not universal critical populations.",
        "Growth/shrink analysis excludes nuclei with particles closer than0.8*a to the observation-volume edge. Source note27 reports1500-2500 fully visible tracked nuclei per typical measurement, without specifying its duration, frame count or unique-track/repeated-observation accounting. This is not a simultaneous population or a known number of independent events. Visibility and tracking impose selection rather than complete sampling of all nuclei.",
        "The acquisition starts after shear melting. At higher volume fractions0.47-0.53, immediate growth left little equilibration time and prevented complete observation of critical-nucleus formation. No globally equilibrated sampling or universal homogeneous-nucleation rate is established.",
        "Nucleus counts, geometry, inferred interface cost and structure fits share the same experimental study. Computer-generated order-reference histograms matched to experimental broadening are analysis inputs, not independent measured crystals or a separate new computational study."
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "C-phys-colloid-nucleus-growth",
      "kind": "review-finding",
      "statement": "In the source post-shear PMMA suspension, finite subcritical nuclei frequently shrink and larger nuclei can grow. For volume fraction0.47 the growth-minus-shrink probability changes sign across60<M<160 particles, giving a preparation- and classifier-dependent critical range. The source rc approximately6.2*a is a spherical-equivalent interpretation. Snapshots at volume fraction0.45 span20,43,66 and89 minutes after shear melting, illustrating finite kinetic evolution rather than permanent interface stabilization.",
      "scope": "Finite source-reported colloid nucleus growth/shrinkage under specified preparation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The critical range is conditional on the local-order classifier and visible finite trajectories; it is not the original catalogue minimum2 or3, a universal colloid nucleation number or the threshold of all supramolecular organization.",
        "The radius interpretation assumes spherical nuclei, while the observed nuclei are nonspherical with rough surfaces. The interface between ordered cores and liquid exterior is not sharp.",
        "These are kinetic post-shear observations, not a demonstration that every sample was equilibrated before nucleation or that persistence over minutes proves global thermodynamic stability. The source high-density equilibration limitation remains.",
        "Neither exact hard-sphere behavior nor chemical aggregation/coagulation is inferred from this structural order classifier. No universal rate or material transport response is admitted."
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "M-phys-colloid-interface-free-energy",
      "kind": "method",
      "statement": "For source small subcritical nuclei r much less than rc, adopt dominance of the interfacial term and fit the nucleus area distribution with N(A) proportional to exp[-A*gamma/(kB*T)], estimating A from ellipsoidal geometry. Interpret gamma as an effective crystal-fluid interfacial free energy per area in that statistical and geometric regime; retain its dependence on the same classified particles and preparation.",
      "scope": "Source theory-assisted interface inference contract.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The area-distribution fit assumes the small-nucleus population can be described by the stated Boltzmann form and neglects the bulk term in its selected regime. It is not direct mechanical tensiometry, globally verified equilibrium or an exact all-size free-energy reconstruction.",
        "A spherical critical-radius estimate and an ellipsoidal area fit are distinct approximations. A rough diffuse boundary is not replaced by a permanent sharp material shell.",
        "The fit and observed nuclei share the same confocal data; older simulations cited for comparison were not newly reproduced or promoted to an independent acquisition."
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "C-phys-colloid-interface-free-energy",
      "kind": "review-finding",
      "statement": "The source PMMA nuclei have ordered cores, disordered rough exteriors and a diffuse crystal-fluid interface. Using the small-subcritical-nucleus area fit with ellipsoidal areas, the source reports effective gamma approximately0.027*kB*T/a^2 across its samples; the Figure5 example at volume fraction0.445 gives0.026*kB*T/a^2. These are a general approximate summary and a specified sample fit, not competing independent measurements or a universal hard-sphere constant.",
      "scope": "Finite source-reported statistical inference of a rough colloidal crystal-fluid interface.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "gamma has units of energy per area and is conditional on particle radius, temperature scale, shape assignment, local-order classification and the small-nucleus statistical model. No conversion to an absolute SI value is newly performed.",
        "This is theory-assisted inference from nucleus statistics, not a directly measured liquid-liquid or emulsion interfacial tension, force-balance measurement, exact equilibrium surface tension or all-colloid stability criterion.",
        "Weak charge softens the nearly-hard-sphere interaction. The source notes disagreement with some older hard-sphere calculations, approximately a factor four, so no exact hard-sphere universality or independent theory agreement is asserted.",
        "No sharp permanent interface, universal surface-over-bulk dominance, complete DLVO coagulation barrier, rheology, scattering spectrum, transport coefficient or universal supramolecular growth law is derived."
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "M-phys-colloid-interface-source-scope",
      "kind": "method",
      "statement": "Synthesize the isolated-pair and concentrated-nucleation cases while keeping their complete preparations, observables and inference chains separate. Preserve finite positive screened repulsion, nucleus growth and rough-interface free-energy results, and explicitly qualify every original stability, response, parent and catalogue assertion.",
      "scope": "Literature-synthesis method for original card2.13.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit",
          "role": "method",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /13. Original vocabulary, asserted parents, weights and carrier minima only; not experimental or theoretical support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete experimental contexts: dilute aqueous isolated polystyrene pairs and concentrated sterically stabilized weakly charged PMMA after shear melting. They do not share particles, solvents, preparation, concentration or a single inferred pair potential.",
        "Release trajectories, stationary pair-potential inference and fit parameters form one data path. Gasser nucleus classification, growth probabilities, shape/structure inference and interface fit form another shared-data path, not several independent experiments.",
        "The screened pair equation supplies only the selected far-field repulsive term. It does not validate a full repulsion-plus-attraction DLVO barrier, a near-contact aggregation law, all dense-phase behavior or a universal dispersion lifetime; omitted forces remain real system-dependent possibilities.",
        "The post-shear finite observation, the conditional stationary-inference model and the small-nucleus Boltzmann-fit assumption are distinct. No observation-time persistence is equated with global thermodynamic stability, and the high-density equilibration caveat is retained.",
        "Rough diffuse crystal-fluid boundaries and a conditional effective interfacial free energy are positive finite interface results. They do not require a sharp permanent interface, and no universal inequality making surface effects dominate bulk cohesion at every mesoscopic scale is admitted.",
        "Original parents2.8 polarization/dipoles and2.9 crystals each weight0.35, direction[1], modes[1], and parent2.12 molecular self-organization/liquids weight0.30, direction[1], modes[0,1], all necessary/dependency10/arising, are not measured causal fractions or universal precursor histories. Neither permanent molecular dipoles nor pre-existing crystallinity is shown necessary for every dispersion or interface.",
        "Original carrier group1/type0 with N_min=N_crit=2 for2.8/2.9,3 for2.12 and N_sat=null are catalogue defaults, not validated critical populations. An isolated pair, at least8 order-classification bonds, roughly4000 imaged particles and60<M<160 critical nuclei count different domains.",
        "The source continuous liquids and their preparation are supplied experimental conditions; the earlier liquid/self-organization and microscopic polarization studies are not newly replayed or cloned as independent support. The finite nucleation experiment is not a theorem about all molecular-to-macroscopic emergence.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/active-organizational-determinant/bridge labels remain catalogue classifications, not independently measured ontology or universal physical-stage boundaries.",
        "Real droplets, controlled emulsions, solvent-mediated forces, boundary layers, aggregation, rheology, optical scattering and transport need their own stated preparations and response evidence. Their existence is not blanket-excluded, but these outputs are not calculated or measured by this finite scope.",
        "Original generic DLVO/thermodynamic and direct-observation paragraphs have null DOI/URL and identify no read publication. The original1941/1948 DLVO works, modern complete coagulation theory, later debate main texts and raw-data numerical replays are not newly admitted."
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "C-phys-colloid-interface-source-scope",
      "kind": "review-finding",
      "statement": "A dilute charged-sphere experiment supports a conditional screened repulsive isolated-pair potential. A separate concentrated PMMA experiment follows post-shear crystal nuclei and infers a rough crystal-fluid interfacial free energy under stated classification and statistical assumptions. These finite cases retain real colloidal interactions, kinetic structural evolution and interfaces without a universal stability, sharp-boundary, precursor-chain or supramolecular-growth theorem.",
      "scope": "Complete finite disposition of references/level-2.json /13.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit",
          "role": "supports",
          "note": "Actually read published primary passage supports only the stated finite preparation, inference or formal boundary; no raw-data replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue JSON pointer: /13. Original vocabulary, asserted parents, weights and carrier minima only; not experimental or theoretical support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Retain both complete experimental contexts: dilute aqueous isolated polystyrene pairs and concentrated sterically stabilized weakly charged PMMA after shear melting. They do not share particles, solvents, preparation, concentration or a single inferred pair potential.",
        "Release trajectories, stationary pair-potential inference and fit parameters form one data path. Gasser nucleus classification, growth probabilities, shape/structure inference and interface fit form another shared-data path, not several independent experiments.",
        "The screened pair equation supplies only the selected far-field repulsive term. It does not validate a full repulsion-plus-attraction DLVO barrier, a near-contact aggregation law, all dense-phase behavior or a universal dispersion lifetime; omitted forces remain real system-dependent possibilities.",
        "The post-shear finite observation, the conditional stationary-inference model and the small-nucleus Boltzmann-fit assumption are distinct. No observation-time persistence is equated with global thermodynamic stability, and the high-density equilibration caveat is retained.",
        "Rough diffuse crystal-fluid boundaries and a conditional effective interfacial free energy are positive finite interface results. They do not require a sharp permanent interface, and no universal inequality making surface effects dominate bulk cohesion at every mesoscopic scale is admitted.",
        "Original parents2.8 polarization/dipoles and2.9 crystals each weight0.35, direction[1], modes[1], and parent2.12 molecular self-organization/liquids weight0.30, direction[1], modes[0,1], all necessary/dependency10/arising, are not measured causal fractions or universal precursor histories. Neither permanent molecular dipoles nor pre-existing crystallinity is shown necessary for every dispersion or interface.",
        "Original carrier group1/type0 with N_min=N_crit=2 for2.8/2.9,3 for2.12 and N_sat=null are catalogue defaults, not validated critical populations. An isolated pair, at least8 order-classification bonds, roughly4000 imaged particles and60<M<160 critical nuclei count different domains.",
        "The source continuous liquids and their preparation are supplied experimental conditions; the earlier liquid/self-organization and microscopic polarization studies are not newly replayed or cloned as independent support. The finite nucleation experiment is not a theorem about all molecular-to-macroscopic emergence.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/active-organizational-determinant/bridge labels remain catalogue classifications, not independently measured ontology or universal physical-stage boundaries.",
        "Real droplets, controlled emulsions, solvent-mediated forces, boundary layers, aggregation, rheology, optical scattering and transport need their own stated preparations and response evidence. Their existence is not blanket-excluded, but these outputs are not calculated or measured by this finite scope.",
        "Original generic DLVO/thermodynamic and direct-observation paragraphs have null DOI/URL and identify no read publication. The original1941/1948 DLVO works, modern complete coagulation theory, later debate main texts and raw-data numerical replays are not newly admitted."
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:colloid-interface-stability-boundary",
      "name": "Preparation- and time-specific colloid stability and interface boundary",
      "kind": "definition",
      "description": "Specify the dispersed material, continuous medium, interaction model, preparation and observation time when describing colloid stability or an interface. Persistence over an observation window, a thermodynamic phase preference and a kinetic barrier to a particular change are different propositions. For the source spherical-crystallite approximation, DeltaG(r)=4*pi*r^2*gamma-(4*pi/3)*r^3*n*DeltaMu, where gamma is crystal-liquid interfacial free energy per area, n is crystallite particle-number density and DeltaMu is liquid-minus-solid chemical potential. The positive surface cost competes with a bulk growth term when DeltaMu>0.",
      "claimIds": [
        "D-phys-colloid-interface-stability-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier"
        }
      ],
      "openObligations": [
        "The spherical nucleation expression is a declared model, not a measured sharp surface, a proof of equilibrium sampling after shear melting or a DLVO pair-coagulation barrier. The actual source nuclei are nonspherical and have diffuse rough interfaces.",
        "An interfacial free energy is energy per area, not an electrostatic pair energy or a universal barrier height. The relevant small-nucleus area statistics require their own statistical and geometric assumptions.",
        "Real droplets, emulsions, solvent-mediated forces, boundary layers, rheology, scattering and transport remain system-dependent phenomena; neither a surface-to-volume ratio nor these two experiments calculates all such responses."
      ]
    },
    {
      "id": "phys:screened-colloid-pair-model",
      "name": "Finite-sphere screened repulsive pair model",
      "kind": "definition",
      "description": "For the source isolated identical spheres in the far-separation Debye-Huckel regime, use U(x)/(kB*T)=Zeff^2*lambdaB*[exp(kappa*a)/(1+kappa*a)]^2*exp(-kappa*x)/x. Here x is center-to-center separation, a is sphere radius, Zeff is effective charge in units of the positive elementary-charge magnitude, kappa is inverse screening length and lambdaB=e^2/(epsilon*kB*T) in the source electrostatic-cgs convention. This is a screened repulsive pair term, with finite-sphere amplitude and an effective charge that need not equal titratable charge.",
      "claimIds": [
        "D-phys-screened-colloid-pair-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions"
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound"
        }
      ],
      "openObligations": [
        "lambdaB and x,a are lengths, kappa is inverse length and U/(kB*T) is dimensionless. Rationalized SI would require e^2/(4*pi*epsilon0*epsilonr*kB*T); silently mixing that normalization with the source equation is invalid. The rewrite is algebraic, not a new numerical calculation.",
        "The selected equation omits van der Waals and hydrodynamic contributions in the declared highly charged, resolved regime. It is not a complete repulsion-plus-attraction DLVO potential, near-contact model, coagulation barrier, aggregation-rate law or stability theorem.",
        "A fitted dilute isolated-pair potential is not automatically an exact pair-additive description of a dense suspension, phase boundary or many-body structure. Walls, charge regulation, ionic contamination and nonlinearity require separate checks.",
        "The existing dilute point-ion screening definition has different source and particle assumptions. Its mean potential is not silently substituted for this finite-sphere pair energy."
      ]
    },
    {
      "id": "phys:crocker1994-colloid-pair-context",
      "name": "Crocker-Grier isolated-pair release context",
      "kind": "context",
      "description": "Prepare the source dilute aqueous polystyrene-sulfate spheres of radius326 nm, monodisperse within1%, in a glass cell with3-4 micrometre gap, ion-exchange reservoirs and argon flushing to limit ionic contamination. Trap two isolated spheres initially1.5 or1.7 micrometres apart with dual optical tweezers, release when no other particles are nearby, and record796 pair trajectories. Use the source relative-coordinate projection,57 nm bins and a transition-time interval1/30 s; the source pools6502 initial/final separation samples to estimate a transition matrix.",
      "claimIds": [
        "M-phys-crocker1994-colloid-pair-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling"
        }
      ],
      "openObligations": [
        "The acquired data are finite non-equilibrium release trajectories. Infer a stationary distribution under the source time-homogeneous Smoluchowski model and then U=-kB*T*log(p_eq) up to an additive constant; this is not direct equilibrium-histogram sampling or a new force-sensor readout.",
        "The source model assumes a spherically symmetric separation potential and omits hydrodynamic coupling. The trajectory projection, finite bins and boundary condition are analysis choices; reflecting-boundary inference requires the upper separation bound to lie beyond the interaction.",
        "The reported mean separation uncertainty is50 nm; source estimates effective charge as a lower limit because localization errors broaden the potential. Reported fit uncertainties have no newly verified coverage convention or full covariance here.",
        "The separate concentrated-cell crystals persisting for months are an ionic-purity control under a different preparation, not the lifetime of an isolated pair or an independent replication of the dilute-pair measurement.",
        "No raw video, calibration replay, new independent effective-charge assay or universal temperature is supplied. The source reference value of Bjerrum length at25 C does not establish the actual experimental temperature."
      ]
    },
    {
      "id": "phys:colloid-pair-repulsion",
      "name": "Conditional isolated-colloid screened pair repulsion",
      "kind": "scoped-process",
      "description": "The source isolated-pair transition-matrix analysis reports a screened repulsive potential fitted with Zeff=1991+/-150 elementary-charge units and screening length kappa^-1=161+/-10 nm. It finds no statistically significant long-range attraction in its resolved preparation and separation range. These are conditional parameters and a finite negative bound, not the fully dissociated surface charge or an all-colloid exclusion of attraction.",
      "claimIds": [
        "C-phys-colloid-pair-repulsion"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound"
        }
      ],
      "openObligations": [
        "The potential and fit parameters share the same finite release trajectories; they are not independent confirmations. The equivalent1:1 electrolyte concentration quoted from the fitted screening length is an inference, not a separately acquired concentration assay.",
        "The stated uncertainties are source-reported fit estimates, with position-error and lower-limit caveats retained. No new likelihood, absolute potential offset, error coverage or independent numerical reproduction is supplied.",
        "No statistically significant attraction in the resolved range does not exclude short-range dispersion, other geometries, wall effects, different charge states or concentrated collective behavior. No full DLVO barrier or universal dispersion lifetime is measured."
      ]
    },
    {
      "id": "phys:gasser2001-colloid-context",
      "name": "Gasser post-shear colloidal crystallization context",
      "kind": "context",
      "description": "Use source PMMA spheres sterically stabilized with poly-12-hydroxystearic acid, radius a=1.26 micrometres and polydispersity below5%, in density- and index-matched decahydronaphthalene/cyclohexylbromide. Rhodamine dye imparts a small charge, so these are nearly hard spheres rather than an exact hard-sphere model. Shear melt the50 microlitre sample by magnetically agitating an embedded wire; acquire a58 by55 by20 cubic-micrometre confocal volume containing about4000 particles, at least8 and typically15 particle diameters from treated walls. Classify local order from particle centers with approximately0.04 micrometre accuracy.",
      "claimIds": [
        "M-phys-gasser2001-colloid-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit"
        }
      ],
      "openObligations": [
        "Radius and volume fractions inherit the source calibration from volume per particle at assigned random-close-packed0.64 and rhcp0.74 reference states; these are not an independent absolute size/packing measurement here.",
        "The source l=6 normalized bond-order classifier uses neighbor separation below2.83*a, inner-product threshold above0.5 and at least8 crystal-like bonds per crystal-like particle. Bond denotes a neighbor direction, not a chemical bond; these thresholds are operational classification choices, not universal critical populations.",
        "Growth/shrink analysis excludes nuclei with particles closer than0.8*a to the observation-volume edge. Source note27 reports1500-2500 fully visible tracked nuclei per typical measurement, without specifying its duration, frame count or unique-track/repeated-observation accounting. This is not a simultaneous population or a known number of independent events. Visibility and tracking impose selection rather than complete sampling of all nuclei.",
        "The acquisition starts after shear melting. At higher volume fractions0.47-0.53, immediate growth left little equilibration time and prevented complete observation of critical-nucleus formation. No globally equilibrated sampling or universal homogeneous-nucleation rate is established.",
        "Nucleus counts, geometry, inferred interface cost and structure fits share the same experimental study. Computer-generated order-reference histograms matched to experimental broadening are analysis inputs, not independent measured crystals or a separate new computational study."
      ]
    },
    {
      "id": "phys:colloid-nucleus-growth",
      "name": "Post-shear colloidal nucleus growth and critical range",
      "kind": "scoped-process",
      "description": "In the source post-shear PMMA suspension, finite subcritical nuclei frequently shrink and larger nuclei can grow. For volume fraction0.47 the growth-minus-shrink probability changes sign across60<M<160 particles, giving a preparation- and classifier-dependent critical range. The source rc approximately6.2*a is a spherical-equivalent interpretation. Snapshots at volume fraction0.45 span20,43,66 and89 minutes after shear melting, illustrating finite kinetic evolution rather than permanent interface stabilization.",
      "claimIds": [
        "C-phys-colloid-nucleus-growth"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat"
        }
      ],
      "openObligations": [
        "The critical range is conditional on the local-order classifier and visible finite trajectories; it is not the original catalogue minimum2 or3, a universal colloid nucleation number or the threshold of all supramolecular organization.",
        "The radius interpretation assumes spherical nuclei, while the observed nuclei are nonspherical with rough surfaces. The interface between ordered cores and liquid exterior is not sharp.",
        "These are kinetic post-shear observations, not a demonstration that every sample was equilibrated before nucleation or that persistence over minutes proves global thermodynamic stability. The source high-density equilibration limitation remains.",
        "Neither exact hard-sphere behavior nor chemical aggregation/coagulation is inferred from this structural order classifier. No universal rate or material transport response is admitted."
      ]
    },
    {
      "id": "phys:colloid-interface-free-energy",
      "name": "Conditional colloid crystal-fluid interface free energy",
      "kind": "scoped-process",
      "description": "The source PMMA nuclei have ordered cores, disordered rough exteriors and a diffuse crystal-fluid interface. Using the small-subcritical-nucleus area fit with ellipsoidal areas, the source reports effective gamma approximately0.027*kB*T/a^2 across its samples; the Figure5 example at volume fraction0.445 gives0.026*kB*T/a^2. These are a general approximate summary and a specified sample fit, not competing independent measurements or a universal hard-sphere constant.",
      "claimIds": [
        "C-phys-colloid-interface-free-energy"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit"
        }
      ],
      "openObligations": [
        "gamma has units of energy per area and is conditional on particle radius, temperature scale, shape assignment, local-order classification and the small-nucleus statistical model. No conversion to an absolute SI value is newly performed.",
        "This is theory-assisted inference from nucleus statistics, not a directly measured liquid-liquid or emulsion interfacial tension, force-balance measurement, exact equilibrium surface tension or all-colloid stability criterion.",
        "Weak charge softens the nearly-hard-sphere interaction. The source notes disagreement with some older hard-sphere calculations, approximately a factor four, so no exact hard-sphere universality or independent theory agreement is asserted.",
        "No sharp permanent interface, universal surface-over-bulk dominance, complete DLVO coagulation barrier, rheology, scattering spectrum, transport coefficient or universal supramolecular growth law is derived."
      ]
    },
    {
      "id": "phys:colloid-interface-source-scope",
      "name": "Scoped colloid pair interactions and evolving crystal-fluid interfaces",
      "kind": "scoped-process",
      "description": "A dilute charged-sphere experiment supports a conditional screened repulsive isolated-pair potential. A separate concentrated PMMA experiment follows post-shear crystal nuclei and infers a rough crystal-fluid interfacial free energy under stated classification and statistical assumptions. These finite cases retain real colloidal interactions, kinetic structural evolution and interfaces without a universal stability, sharp-boundary, precursor-chain or supramolecular-growth theorem.",
      "claimIds": [
        "C-phys-colloid-interface-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions"
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling"
        },
        {
          "sourceId": "crocker1994-colloid-pair",
          "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat"
        },
        {
          "sourceId": "gasser2001-colloid-nucleation",
          "locator": "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Retain both complete experimental contexts: dilute aqueous isolated polystyrene pairs and concentrated sterically stabilized weakly charged PMMA after shear melting. They do not share particles, solvents, preparation, concentration or a single inferred pair potential.",
        "Release trajectories, stationary pair-potential inference and fit parameters form one data path. Gasser nucleus classification, growth probabilities, shape/structure inference and interface fit form another shared-data path, not several independent experiments.",
        "The screened pair equation supplies only the selected far-field repulsive term. It does not validate a full repulsion-plus-attraction DLVO barrier, a near-contact aggregation law, all dense-phase behavior or a universal dispersion lifetime; omitted forces remain real system-dependent possibilities.",
        "The post-shear finite observation, the conditional stationary-inference model and the small-nucleus Boltzmann-fit assumption are distinct. No observation-time persistence is equated with global thermodynamic stability, and the high-density equilibration caveat is retained.",
        "Rough diffuse crystal-fluid boundaries and a conditional effective interfacial free energy are positive finite interface results. They do not require a sharp permanent interface, and no universal inequality making surface effects dominate bulk cohesion at every mesoscopic scale is admitted.",
        "Original parents2.8 polarization/dipoles and2.9 crystals each weight0.35, direction[1], modes[1], and parent2.12 molecular self-organization/liquids weight0.30, direction[1], modes[0,1], all necessary/dependency10/arising, are not measured causal fractions or universal precursor histories. Neither permanent molecular dipoles nor pre-existing crystallinity is shown necessary for every dispersion or interface.",
        "Original carrier group1/type0 with N_min=N_crit=2 for2.8/2.9,3 for2.12 and N_sat=null are catalogue defaults, not validated critical populations. An isolated pair, at least8 order-classification bonds, roughly4000 imaged particles and60<M<160 critical nuclei count different domains.",
        "The source continuous liquids and their preparation are supplied experimental conditions; the earlier liquid/self-organization and microscopic polarization studies are not newly replayed or cloned as independent support. The finite nucleation experiment is not a theorem about all molecular-to-macroscopic emergence.",
        "Original Level2, Phase2, TypeRole3, Science[1,2,41], established, MustCover[10], ShouldCover[9], Optional[] and SOMA property/arising/active-organizational-determinant/bridge labels remain catalogue classifications, not independently measured ontology or universal physical-stage boundaries.",
        "Real droplets, controlled emulsions, solvent-mediated forces, boundary layers, aggregation, rheology, optical scattering and transport need their own stated preparations and response evidence. Their existence is not blanket-excluded, but these outputs are not calculated or measured by this finite scope.",
        "Original generic DLVO/thermodynamic and direct-observation paragraphs have null DOI/URL and identify no read publication. The original1941/1948 DLVO works, modern complete coagulation theory, later debate main texts and raw-data numerical replays are not newly admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:colloid-interface-stability-boundary-screened-colloid-pair-model",
      "source": "phys:colloid-interface-stability-boundary",
      "target": "phys:screened-colloid-pair-model",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A selected effective pair model is distinguished from global stability, interface thermodynamics and kinetic persistence.",
      "claimIds": [
        "D-phys-screened-colloid-pair-model"
      ]
    },
    {
      "id": "physics:crocker1994-colloid-pair-context-colloid-pair-repulsion",
      "source": "phys:crocker1994-colloid-pair-context",
      "target": "phys:colloid-pair-repulsion",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The isolated-pair release preparation and transition analysis condition the inferred potential and fit parameters.",
      "claimIds": [
        "M-phys-colloid-pair-repulsion"
      ],
      "contextIds": [
        "crocker1994-colloid-pair"
      ]
    },
    {
      "id": "physics:screened-colloid-pair-model-colloid-pair-repulsion",
      "source": "phys:screened-colloid-pair-model",
      "target": "phys:colloid-pair-repulsion",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite-sphere far-field model limits the repulsion inference without supplying a full attraction/barrier curve.",
      "claimIds": [
        "M-phys-colloid-pair-repulsion"
      ],
      "contextIds": [
        "crocker1994-colloid-pair"
      ]
    },
    {
      "id": "physics:gasser2001-colloid-context-colloid-nucleus-growth",
      "source": "phys:gasser2001-colloid-context",
      "target": "phys:colloid-nucleus-growth",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The post-shear preparation, local-order classifier and visibility selection condition finite growth/shrink probabilities.",
      "claimIds": [
        "M-phys-colloid-nucleus-growth"
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-interface-stability-boundary-colloid-nucleus-growth",
      "source": "phys:colloid-interface-stability-boundary",
      "target": "phys:colloid-nucleus-growth",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Finite kinetic nucleus growth is distinguished from all-system equilibrium and permanence.",
      "claimIds": [
        "M-phys-colloid-nucleus-growth"
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:gasser2001-colloid-context-colloid-interface-free-energy",
      "source": "phys:gasser2001-colloid-context",
      "target": "phys:colloid-interface-free-energy",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The same confocal study supplies the classified small nuclei and shape-dependent area distribution.",
      "claimIds": [
        "M-phys-colloid-interface-free-energy"
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-nucleus-growth-colloid-interface-free-energy",
      "source": "phys:colloid-nucleus-growth",
      "target": "phys:colloid-interface-free-energy",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The subcritical-nucleus regime and classifier delimit the area-statistics inference; this is shared-data dependence, not independent confirmation or a causal growth edge.",
      "claimIds": [
        "M-phys-colloid-interface-free-energy"
      ],
      "contextIds": [
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-interface-stability-boundary-colloid-interface-source-scope",
      "source": "phys:colloid-interface-stability-boundary",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:screened-colloid-pair-model-colloid-interface-source-scope",
      "source": "phys:screened-colloid-pair-model",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:crocker1994-colloid-pair-context-colloid-interface-source-scope",
      "source": "phys:crocker1994-colloid-pair-context",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-pair-repulsion-colloid-interface-source-scope",
      "source": "phys:colloid-pair-repulsion",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:gasser2001-colloid-context-colloid-interface-source-scope",
      "source": "phys:gasser2001-colloid-context",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-nucleus-growth-colloid-interface-source-scope",
      "source": "phys:colloid-nucleus-growth",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    },
    {
      "id": "physics:colloid-interface-free-energy-colloid-interface-source-scope",
      "source": "phys:colloid-interface-free-energy",
      "target": "phys:colloid-interface-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named finite definition, complete preparation or derived result constrains the joint literature interpretation; both full experimental contexts are retained.",
      "claimIds": [
        "M-phys-colloid-interface-source-scope"
      ],
      "contextIds": [
        "crocker1994-colloid-pair",
        "gasser2001-colloid-nucleation"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:colloid-interface-stability-boundary",
      "role": "definition",
      "denotes": "Preparation- and time-specific colloid stability and interface boundary under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-colloid-interface-stability-boundary"
      ]
    },
    {
      "nodeId": "phys:screened-colloid-pair-model",
      "role": "definition",
      "denotes": "Finite-sphere screened repulsive pair model under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-screened-colloid-pair-model"
      ]
    },
    {
      "nodeId": "phys:crocker1994-colloid-pair-context",
      "role": "experimental-context",
      "denotes": "Crocker-Grier isolated-pair release context under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-crocker1994-colloid-pair-context"
      ]
    },
    {
      "nodeId": "phys:colloid-pair-repulsion",
      "role": "scoped-phenomenon",
      "denotes": "Conditional isolated-colloid screened pair repulsion under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-colloid-pair-repulsion"
      ]
    },
    {
      "nodeId": "phys:gasser2001-colloid-context",
      "role": "experimental-context",
      "denotes": "Gasser post-shear colloidal crystallization context under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-gasser2001-colloid-context"
      ]
    },
    {
      "nodeId": "phys:colloid-nucleus-growth",
      "role": "scoped-phenomenon",
      "denotes": "Post-shear colloidal nucleus growth and critical range under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-colloid-nucleus-growth"
      ]
    },
    {
      "nodeId": "phys:colloid-interface-free-energy",
      "role": "scoped-phenomenon",
      "denotes": "Conditional colloid crystal-fluid interface free energy under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-colloid-interface-free-energy"
      ]
    },
    {
      "nodeId": "phys:colloid-interface-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped colloid pair interactions and evolving crystal-fluid interfaces under the declared finite system, preparation and inference conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-colloid-interface-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "crocker1994-colloid-pair",
      "sourceId": "crocker1994-colloid-pair",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.73.352",
      "journal": "Physical Review Letters",
      "volume": "73",
      "issue": "2",
      "pages": "352-355",
      "system": "Isolated aqueous charged-polystyrene-sulfate colloid pairs in a controlled thin glass cell",
      "preparation": "Prepare the source dilute aqueous polystyrene-sulfate spheres of radius326 nm, monodisperse within1%, in a glass cell with3-4 micrometre gap, ion-exchange reservoirs and argon flushing to limit ionic contamination. Trap two isolated spheres initially1.5 or1.7 micrometres apart with dual optical tweezers, release when no other particles are nearby, and record796 pair trajectories. Use the source relative-coordinate projection,57 nm bins and a transition-time interval1/30 s; the source pools6502 initial/final separation samples to estimate a transition matrix.",
      "observable": "Finite relative-coordinate release trajectories and their estimated transition probabilities; potential and effective parameters are inferred.",
      "finding": "The source isolated-pair transition-matrix analysis reports a screened repulsive potential fitted with Zeff=1991+/-150 elementary-charge units and screening length kappa^-1=161+/-10 nm. It finds no statistically significant long-range attraction in its resolved preparation and separation range. These are conditional parameters and a finite negative bound, not the fully dissociated surface charge or an all-colloid exclusion of attraction.",
      "limitations": [
        "The acquired data are finite non-equilibrium release trajectories. Infer a stationary distribution under the source time-homogeneous Smoluchowski model and then U=-kB*T*log(p_eq) up to an additive constant; this is not direct equilibrium-histogram sampling or a new force-sensor readout.",
        "The source model assumes a spherically symmetric separation potential and omits hydrodynamic coupling. The trajectory projection, finite bins and boundary condition are analysis choices; reflecting-boundary inference requires the upper separation bound to lie beyond the interaction.",
        "The reported mean separation uncertainty is50 nm; source estimates effective charge as a lower limit because localization errors broaden the potential. Reported fit uncertainties have no newly verified coverage convention or full covariance here.",
        "The separate concentrated-cell crystals persisting for months are an ionic-purity control under a different preparation, not the lifetime of an isolated pair or an independent replication of the dilute-pair measurement.",
        "No raw video, calibration replay, new independent effective-charge assay or universal temperature is supplied. The source reference value of Bjerrum length at25 C does not establish the actual experimental temperature.",
        "The potential and fit parameters share the same finite release trajectories; they are not independent confirmations. The equivalent1:1 electrolyte concentration quoted from the fitted screening length is an inference, not a separately acquired concentration assay.",
        "The stated uncertainties are source-reported fit estimates, with position-error and lower-limit caveats retained. No new likelihood, absolute potential offset, error coverage or independent numerical reproduction is supplied.",
        "No statistically significant attraction in the resolved range does not exclude short-range dispersion, other geometries, wall effects, different charge states or concentrated collective behavior. No full DLVO barrier or universal dispersion lifetime is measured."
      ],
      "readExtent": "full-published-scientific-main-text-selected-pair-result",
      "reviewedLocators": [
        "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
        "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
        "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.73.352",
      "correctionCheck": "Identity and printed date checked against the actual published PDF and DOI registry. Registry relation is empty and no update-to item was returned. Limited DOI/title and publisher correction searches found no explicit erratum; this is not an exhaustive later-literature audit. A 2000 Grier/Crocker Comment and Tata/Ise Reply were located by their publisher-indexed abstracts; main bodies were not read and are not newly admitted. No claim of resolving that dispute or universal failure of competing theories is made."
    },
    {
      "id": "gasser2001-colloid-nucleation",
      "sourceId": "gasser2001-colloid-nucleation",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.1058457",
      "journal": "Science",
      "volume": "292",
      "issue": "5515",
      "pages": "258-262",
      "system": "Concentrated sterically stabilized weakly charged PMMA suspension after controlled shear melting",
      "preparation": "Use source PMMA spheres sterically stabilized with poly-12-hydroxystearic acid, radius a=1.26 micrometres and polydispersity below5%, in density- and index-matched decahydronaphthalene/cyclohexylbromide. Rhodamine dye imparts a small charge, so these are nearly hard spheres rather than an exact hard-sphere model. Shear melt the50 microlitre sample by magnetically agitating an embedded wire; acquire a58 by55 by20 cubic-micrometre confocal volume containing about4000 particles, at least8 and typically15 particle diameters from treated walls. Classify local order from particle centers with approximately0.04 micrometre accuracy.",
      "observable": "Confocal particle positions classified into crystal-like nuclei; finite growth/shrink histories and shape-dependent small-nucleus area statistics.",
      "finding": "In the source post-shear PMMA suspension, finite subcritical nuclei frequently shrink and larger nuclei can grow. For volume fraction0.47 the growth-minus-shrink probability changes sign across60<M<160 particles, giving a preparation- and classifier-dependent critical range. The source rc approximately6.2*a is a spherical-equivalent interpretation. Snapshots at volume fraction0.45 span20,43,66 and89 minutes after shear melting, illustrating finite kinetic evolution rather than permanent interface stabilization. The source PMMA nuclei have ordered cores, disordered rough exteriors and a diffuse crystal-fluid interface. Using the small-subcritical-nucleus area fit with ellipsoidal areas, the source reports effective gamma approximately0.027*kB*T/a^2 across its samples; the Figure5 example at volume fraction0.445 gives0.026*kB*T/a^2. These are a general approximate summary and a specified sample fit, not competing independent measurements or a universal hard-sphere constant.",
      "limitations": [
        "Radius and volume fractions inherit the source calibration from volume per particle at assigned random-close-packed0.64 and rhcp0.74 reference states; these are not an independent absolute size/packing measurement here.",
        "The source l=6 normalized bond-order classifier uses neighbor separation below2.83*a, inner-product threshold above0.5 and at least8 crystal-like bonds per crystal-like particle. Bond denotes a neighbor direction, not a chemical bond; these thresholds are operational classification choices, not universal critical populations.",
        "Growth/shrink analysis excludes nuclei with particles closer than0.8*a to the observation-volume edge. Source note27 reports1500-2500 fully visible tracked nuclei per typical measurement, without specifying its duration, frame count or unique-track/repeated-observation accounting. This is not a simultaneous population or a known number of independent events. Visibility and tracking impose selection rather than complete sampling of all nuclei.",
        "The acquisition starts after shear melting. At higher volume fractions0.47-0.53, immediate growth left little equilibration time and prevented complete observation of critical-nucleus formation. No globally equilibrated sampling or universal homogeneous-nucleation rate is established.",
        "Nucleus counts, geometry, inferred interface cost and structure fits share the same experimental study. Computer-generated order-reference histograms matched to experimental broadening are analysis inputs, not independent measured crystals or a separate new computational study.",
        "The critical range is conditional on the local-order classifier and visible finite trajectories; it is not the original catalogue minimum2 or3, a universal colloid nucleation number or the threshold of all supramolecular organization.",
        "The radius interpretation assumes spherical nuclei, while the observed nuclei are nonspherical with rough surfaces. The interface between ordered cores and liquid exterior is not sharp.",
        "These are kinetic post-shear observations, not a demonstration that every sample was equilibrated before nucleation or that persistence over minutes proves global thermodynamic stability. The source high-density equilibration limitation remains.",
        "Neither exact hard-sphere behavior nor chemical aggregation/coagulation is inferred from this structural order classifier. No universal rate or material transport response is admitted.",
        "gamma has units of energy per area and is conditional on particle radius, temperature scale, shape assignment, local-order classification and the small-nucleus statistical model. No conversion to an absolute SI value is newly performed.",
        "This is theory-assisted inference from nucleus statistics, not a directly measured liquid-liquid or emulsion interfacial tension, force-balance measurement, exact equilibrium surface tension or all-colloid stability criterion.",
        "Weak charge softens the nearly-hard-sphere interaction. The source notes disagreement with some older hard-sphere calculations, approximately a factor four, so no exact hard-sphere universality or independent theory agreement is asserted.",
        "No sharp permanent interface, universal surface-over-bulk dominance, complete DLVO coagulation barrier, rheology, scattering spectrum, transport coefficient or universal supramolecular growth law is derived."
      ],
      "readExtent": "full-published-scientific-main-text-selected-nucleation-interface-results",
      "reviewedLocators": [
        "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
        "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
        "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
        "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://www.science.org/doi/10.1126/science.1058457",
      "correctionCheck": "Identity and printed date checked against the actual published PDF and DOI registry. Registry relation is empty and no update-to item was returned. Limited DOI/title and publisher correction searches found no explicit erratum; this is not an exhaustive later-literature audit."
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
      "id": "crocker1994-colloid-pair",
      "kind": "research-publication",
      "title": "Microscopic Measurement of the Pair Interaction Potential of Charge-Stabilized Colloid",
      "authors": [
        "John C. Crocker",
        "David G. Grier"
      ],
      "year": 1994,
      "doi": "10.1103/PhysRevLett.73.352",
      "url": "https://crocker.engineering.upenn.edu/CrockerGrier1994.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text-selected-pair-result",
        "locators": [
          "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
          "Published pages 353-354, Equations 2-6 and Figure 1: Smoluchowski transition-matrix stationary inference, cell preparation, optical release, trajectory projection and sampling",
          "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound"
        ],
        "limit": "Visually read all four published scientific pages352-355 in the author-hosted published scan; the fifth PDF page repeats Figure1. Admission is restricted to the isolated dilute-pair preparation and inference, not the separate dense-crystal purity control, cited private communications, full nonlinear-charge theory, concentrated-phase law or complete DLVO attraction/barrier validation. No local trajectory reconstruction or independent numerical witness. Identity and printed date checked against the actual published PDF and DOI registry. Registry relation is empty and no update-to item was returned. Limited DOI/title and publisher correction searches found no explicit erratum; this is not an exhaustive later-literature audit. A 2000 Grier/Crocker Comment and Tata/Ise Reply were located by their publisher-indexed abstracts; main bodies were not read and are not newly admitted. No claim of resolving that dispute or universal failure of competing theories is made."
      }
    },
    {
      "id": "gasser2001-colloid-nucleation",
      "kind": "research-publication",
      "title": "Real-Space Imaging of Nucleation and Growth in Colloidal Crystallization",
      "authors": [
        "U. Gasser",
        "Eric R. Weeks",
        "Andrew Schofield",
        "P. N. Pusey",
        "D. A. Weitz"
      ],
      "year": 2001,
      "doi": "10.1126/science.1058457",
      "url": "https://www2.ph.ed.ac.uk/~abs/crystallization.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text-selected-nucleation-interface-results",
        "locators": [
          "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
          "Published pages 259-260 and notes 20,25-28 on page 261: PMMA preparation, shear melting, confocal geometry, particle classification, visibility selection and growth/shrink probabilities",
          "Published page 260, Figures 1-3 and nucleation discussion: finite post-shear evolution, critical-size range at volume fraction 0.47 and high-density equilibration caveat",
          "Published pages 260-261, Figures 3-5, Table 1 and note 34 on page 262: diffuse rough interface, structure/shape inference and small-nucleus area-distribution surface-tension fit"
        ],
        "limit": "Read the complete article body258-261 and its references/notes through262, checking figures, Table1 and operational thresholds visually. Unrelated preceding references on PDF page1 and the following photoexcited-molecule article on PDF page5 are excluded. Admit finite nucleus-growth and interfacial-fit results, not every rate, packing fraction comparison, simulation claim or derived barrier number. No confocal-image replay or independent thermodynamic calculation. Identity and printed date checked against the actual published PDF and DOI registry. Registry relation is empty and no update-to item was returned. Limited DOI/title and publisher correction searches found no explicit erratum; this is not an exhaustive later-literature audit."
      }
    }
  ]
};

/** Retain finite pair-potential inference, post-shear nucleus classification and theory-assisted rough-interface free energy as separate data paths. */
export function validateColloidInterfaceContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Colloid-interface ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
