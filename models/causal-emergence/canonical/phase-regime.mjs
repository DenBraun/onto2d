import assert from "node:assert/strict";

export const PHASE_REGIME_CHECKS = new Map();
export const PHASE_REGIME_ANALYTICAL_SOURCES = new Map();
export const PHASE_REGIME_STUDY_TYPES = new Map([]);
export const PHASE_REGIME_ADMISSION = {
  "definitions": [
    [
      "phys:bulk-equilibrium-phase-conditions",
      "D-phys-bulk-equilibrium-phase-conditions"
    ],
    [
      "phys:phase-regime-stability-observable-boundary",
      "D-phys-phase-regime-stability-observable-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:bulk-equilibrium-phase-conditions-phase-regime-stability-observable-boundary",
      [
        "phys:bulk-equilibrium-phase-conditions",
        "phys:phase-regime-stability-observable-boundary"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "phase-regime-source-scope",
      "C-phys-phase-regime-source-scope",
      [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    ]
  ],
  "dependencies": [
    [
      "bulk-equilibrium-phase-conditions-phase-regime-source-scope",
      "bulk-equilibrium-phase-conditions",
      "phase-regime-source-scope",
      "M-phys-phase-regime-source-scope",
      "interpretation-dependency"
    ],
    [
      "phase-regime-stability-observable-boundary-phase-regime-source-scope",
      "phase-regime-stability-observable-boundary",
      "phase-regime-source-scope",
      "M-phys-phase-regime-source-scope",
      "interpretation-dependency"
    ],
    [
      "bernard-hard-disk-ordering-phase-regime-source-scope",
      "bernard-hard-disk-ordering",
      "phase-regime-source-scope",
      "M-phys-phase-regime-source-scope",
      "interpretation-dependency"
    ],
    [
      "shechtman-icosahedral-order-phase-regime-source-scope",
      "shechtman-icosahedral-order",
      "phase-regime-source-scope",
      "M-phys-phase-regime-source-scope",
      "interpretation-dependency"
    ],
    [
      "liquid-organization-source-scope-phase-regime-source-scope",
      "liquid-organization-source-scope",
      "phase-regime-source-scope",
      "M-phys-phase-regime-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-phase-regime-source-scope",
      [
        "bernard2011-hard-disks",
        "gibbs1878-equilibrium-author-abstract",
        "laage-hynes2006-water-reorientation",
        "shechtman1984-icosahedral",
        "skinner2013-water-pair-distribution"
      ]
    ],
    [
      "C-phys-phase-regime-source-scope",
      [
        "bernard2011-hard-disks",
        "gibbs1878-equilibrium-author-abstract",
        "laage-hynes2006-water-reorientation",
        "shechtman1984-icosahedral",
        "skinner2013-water-pair-distribution"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-bulk-equilibrium-phase-conditions",
      "kind": "review-finding",
      "statement": "In the selected hydrostatic bulk thermodynamic framework, equilibrium criteria use allowed variations under explicit constraints: entropy is maximal at fixed total energy, or energy is minimal at fixed entropy. Write A=U-T*S and G=U-T*S+p*V; the relevant potential and stability comparison depend on what is held fixed. For phases in freely exchanging contact without gravity, electrical effects, solid distortion or capillary tension, equilibrium requires equal temperature, pressure and the potential of each freely exchangeable independently variable component. In this setting the intensive degrees of freedom obey f=C+2-N_ph, where C counts independent components and N_ph counts coexisting phases, not specimens.",
      "scope": "Selected Gibbs 1878 bulk equilibrium/coexistence conditions, with explicit notation rewrite.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source uses epsilon,eta,t,v,psi,zeta and component amounts m_i. U,S,T,V,A,G are declared notation rewrites; its component potential is energy per chosen amount, not automatically a per-molecule or molar numerical value.",
        "Equality of temperature, pressure and component potentials applies to the stated exchange/contact assumptions. An impermeable or selective diaphragm changes allowed exchanges and can support unequal pressures; these are not unconditional rules for every interface.",
        "The selected phase rule counts independently variable intensive phase states. It does not count the number of particles, grains, droplets, basis functions, phases required to exist, or their relative amounts. Additional constraints or fields require a newly declared formulation.",
        "A phase equation of state and the admissible competing phases are not determined by the phase rule alone. No material phase-boundary curve, latent heat, critical exponent or kinetic rate follows merely from these identities.",
        "These are bulk hydrostatic assumptions. Finite-interface energy, curvature, gravity, electric fields, nonhydrostatic solids and driven systems are not silently covered by this selected simple coexistence statement."
      ]
    },
    {
      "id": "D-phys-phase-regime-stability-observable-boundary",
      "kind": "review-finding",
      "statement": "A phase-regime claim must specify its system, conserved composition, ensemble or contact constraints, control range and criterion for identifying phases. Local resistance to continuous perturbations is distinct from stability against formation of a different phase; kinetic persistence can occur without global thermodynamic stability. The selected Gibbs fluid critical endpoint is where two coexisting phases become indistinguishable, and is not a universal criterion for every continuous ordering transition. Finite-system coexistence/interface effects, structural correlations, annealing persistence and simulated molecular reorientation are different observables and inferences, rather than interchangeable phase-boundary measurements.",
      "scope": "Finite stability, criticality, kinetics and observable boundary for the selected existing crystal/liquid studies.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Gibbs passage distinguishes adjacent continuous variations from formation of new phases. It does not supply a nucleation barrier, lifetime distribution, kinetic path, transition-state rate or global catalogue of all possible phases.",
        "The hard-disk continuous hexatic-solid transition is not identified with the particular coalescing-fluid critical endpoint described by Gibbs. No universal Landau expansion, renormalization-group universality class or exact exponent is admitted.",
        "A density interval of coexistence at fixed model conditions does not make every overall density a distinct intensive phase state; phase proportions and the phase-rule degrees of freedom are separate variables.",
        "Static ambient-water pair correlations and SPC/E hydrogen-bond exchange do not by themselves locate a liquid-solid coexistence curve, melting temperature, metastability domain or critical point.",
        "Reported finite-size inference is not direct measurement of an infinite limit. An equilibrium finite-box pressure loop is not automatically a nonequilibrium hysteresis loop, and Monte Carlo displacement time is not a physical nucleation clock."
      ]
    },
    {
      "id": "M-phys-phase-regime-source-scope",
      "kind": "method",
      "statement": "Use the selected Gibbs bulk equilibrium criteria to distinguish thermodynamic constraints, local/new-phase stability and phase-rule variables. Reuse the existing hard-disk equilibrium scan for a bounded positive phase organization, the alloy anneal result for protocol-dependent persistence/conversion, and the liquid scope as a boundary on what single-regime spatial and molecular-dynamic information establishes. Preserve the original four study contexts; do not pool their controls or transfer model densities, thermal protocols or microscopic clocks between systems.",
      "scope": "Four-context literature-synthesis method for complete original card /15.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "method",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /15 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The positive phase-regime map retained here is the selected two-dimensional hard-disk equilibrium density scan. Its first-order liquid-hexatic coexistence and continuous hexatic-solid transition have the original model, sampling, correlation and finite-size limits. The model has no distinct liquid-gas phases or temperature-driven boundary at fixed density.",
        "The Al-Mn anneals retain physical protocol-dependent persistence/conversion evidence, not a complete equilibrium phase diagram or a 400-degree-C critical temperature. No continuous metastability domain or physical transformation-rate law is inferred from three treatment points.",
        "The liquid-water structure reanalysis and reorientation model supply positive single-regime structural/dynamical information. They are not new phase-boundary acquisitions, direct measurements of network lifetimes or a validated common phase-transition model.",
        "Bulk equilibrium constraints delimit an interpretation; they do not derive all material regimes, determine an equation of state, or show that every stationary or long-lived state is globally stable.",
        "Critical endpoints, spinodal-like local-stability boundaries, coexistence conditions and kinetic pathways are distinct. No complete critical-point map, universal criticality, all-system symmetry-breaking rule, Landau theory or universality class is admitted.",
        "Original necessary parents 2.9 crystals, 2.12 liquid molecular organization and 2.13 colloidal interfaces are not universal prerequisites of the thermodynamic formalism or every phase transition. The selected sources do not require simultaneous prior crystal, polar liquid and colloid formation.",
        "Original weights 0.4/0.35/0.25, directions [3], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent N_min=N_crit counts 2/3/3 and null N_sat are catalogue defaults. Gibbs independent-component/phase counts, hard-disk N, alloy grains and liquid coordination counts are different domains; none measures those carrier thresholds.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,14], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA global pattern/stability-map label is not an additional measured physical entity or universal causal hierarchy.",
        "The original generic thermodynamics/Landau/critical-framework and calorimetry/diffraction/transport placeholders are replaced only by actually read formal equilibrium conditions and the existing bounded studies. No unread Landau derivation, calorimetric latent heat, transport phase boundary or all-material phase atlas is invented.",
        "The existing studies and source scopes are reused without duplicate studies, another physical acquisition, a new joint likelihood or independent replication. Gibbs 1878 is a selected primary theoretical author summary, not a newly solved material phase diagram or a complete reading of the earlier treatise.",
        "No equation-of-state fit, free-energy reconstruction, phase-rule numerical replay, pressure-loop integration, simulation execution, atomic structural refinement, new anneal experiment or physical kinetic prediction is claimed."
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "C-phys-phase-regime-source-scope",
      "kind": "review-finding",
      "statement": "The selected literature supports a finite phase-regime organization in the specified hard-disk model: distinct liquid, hexatic and solid regimes, first-order coexistence and a continuous upper ordering transition under its declared density scan. Separate Al-Mn treatment observations support protocol-dependent metastability. Bulk equilibrium/coexistence conditions provide a formal interpretation boundary, while the reused ambient-water structure and dynamics records describe one liquid regime without measuring its transition boundaries. These cases support thermodynamic organization with stability and kinetic distinctions, rather than a universal material map or mandatory crystal-liquid-colloid ancestry.",
      "scope": "Literature synthesis reusing four existing study contexts without a new empirical acquisition.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; reused study remains the same acquisition or calculation, without new replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /15 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The positive phase-regime map retained here is the selected two-dimensional hard-disk equilibrium density scan. Its first-order liquid-hexatic coexistence and continuous hexatic-solid transition have the original model, sampling, correlation and finite-size limits. The model has no distinct liquid-gas phases or temperature-driven boundary at fixed density.",
        "The Al-Mn anneals retain physical protocol-dependent persistence/conversion evidence, not a complete equilibrium phase diagram or a 400-degree-C critical temperature. No continuous metastability domain or physical transformation-rate law is inferred from three treatment points.",
        "The liquid-water structure reanalysis and reorientation model supply positive single-regime structural/dynamical information. They are not new phase-boundary acquisitions, direct measurements of network lifetimes or a validated common phase-transition model.",
        "Bulk equilibrium constraints delimit an interpretation; they do not derive all material regimes, determine an equation of state, or show that every stationary or long-lived state is globally stable.",
        "Critical endpoints, spinodal-like local-stability boundaries, coexistence conditions and kinetic pathways are distinct. No complete critical-point map, universal criticality, all-system symmetry-breaking rule, Landau theory or universality class is admitted.",
        "Original necessary parents 2.9 crystals, 2.12 liquid molecular organization and 2.13 colloidal interfaces are not universal prerequisites of the thermodynamic formalism or every phase transition. The selected sources do not require simultaneous prior crystal, polar liquid and colloid formation.",
        "Original weights 0.4/0.35/0.25, directions [3], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent N_min=N_crit counts 2/3/3 and null N_sat are catalogue defaults. Gibbs independent-component/phase counts, hard-disk N, alloy grains and liquid coordination counts are different domains; none measures those carrier thresholds.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,14], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA global pattern/stability-map label is not an additional measured physical entity or universal causal hierarchy.",
        "The original generic thermodynamics/Landau/critical-framework and calorimetry/diffraction/transport placeholders are replaced only by actually read formal equilibrium conditions and the existing bounded studies. No unread Landau derivation, calorimetric latent heat, transport phase boundary or all-material phase atlas is invented.",
        "The existing studies and source scopes are reused without duplicate studies, another physical acquisition, a new joint likelihood or independent replication. Gibbs 1878 is a selected primary theoretical author summary, not a newly solved material phase diagram or a complete reading of the earlier treatise.",
        "No equation-of-state fit, free-energy reconstruction, phase-rule numerical replay, pressure-loop integration, simulation execution, atomic structural refinement, new anneal experiment or physical kinetic prediction is claimed."
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:bulk-equilibrium-phase-conditions",
      "name": "Constrained bulk equilibrium, coexistence and phase-rule conditions",
      "kind": "definition",
      "description": "In the selected hydrostatic bulk thermodynamic framework, equilibrium criteria use allowed variations under explicit constraints: entropy is maximal at fixed total energy, or energy is minimal at fixed entropy. Write A=U-T*S and G=U-T*S+p*V; the relevant potential and stability comparison depend on what is held fixed. For phases in freely exchanging contact without gravity, electrical effects, solid distortion or capillary tension, equilibrium requires equal temperature, pressure and the potential of each freely exchangeable independently variable component. In this setting the intensive degrees of freedom obey f=C+2-N_ph, where C counts independent components and N_ph counts coexisting phases, not specimens.",
      "claimIds": [
        "D-phys-bulk-equilibrium-phase-conditions"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom"
        }
      ],
      "openObligations": [
        "The source uses epsilon,eta,t,v,psi,zeta and component amounts m_i. U,S,T,V,A,G are declared notation rewrites; its component potential is energy per chosen amount, not automatically a per-molecule or molar numerical value.",
        "Equality of temperature, pressure and component potentials applies to the stated exchange/contact assumptions. An impermeable or selective diaphragm changes allowed exchanges and can support unequal pressures; these are not unconditional rules for every interface.",
        "The selected phase rule counts independently variable intensive phase states. It does not count the number of particles, grains, droplets, basis functions, phases required to exist, or their relative amounts. Additional constraints or fields require a newly declared formulation.",
        "A phase equation of state and the admissible competing phases are not determined by the phase rule alone. No material phase-boundary curve, latent heat, critical exponent or kinetic rate follows merely from these identities.",
        "These are bulk hydrostatic assumptions. Finite-interface energy, curvature, gravity, electric fields, nonhydrostatic solids and driven systems are not silently covered by this selected simple coexistence statement."
      ]
    },
    {
      "id": "phys:phase-regime-stability-observable-boundary",
      "name": "Phase stability, criticality, kinetics and observable boundary",
      "kind": "definition",
      "description": "A phase-regime claim must specify its system, conserved composition, ensemble or contact constraints, control range and criterion for identifying phases. Local resistance to continuous perturbations is distinct from stability against formation of a different phase; kinetic persistence can occur without global thermodynamic stability. The selected Gibbs fluid critical endpoint is where two coexisting phases become indistinguishable, and is not a universal criterion for every continuous ordering transition. Finite-system coexistence/interface effects, structural correlations, annealing persistence and simulated molecular reorientation are different observables and inferences, rather than interchangeable phase-boundary measurements.",
      "claimIds": [
        "D-phys-phase-regime-stability-observable-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        }
      ],
      "openObligations": [
        "The Gibbs passage distinguishes adjacent continuous variations from formation of new phases. It does not supply a nucleation barrier, lifetime distribution, kinetic path, transition-state rate or global catalogue of all possible phases.",
        "The hard-disk continuous hexatic-solid transition is not identified with the particular coalescing-fluid critical endpoint described by Gibbs. No universal Landau expansion, renormalization-group universality class or exact exponent is admitted.",
        "A density interval of coexistence at fixed model conditions does not make every overall density a distinct intensive phase state; phase proportions and the phase-rule degrees of freedom are separate variables.",
        "Static ambient-water pair correlations and SPC/E hydrogen-bond exchange do not by themselves locate a liquid-solid coexistence curve, melting temperature, metastability domain or critical point.",
        "Reported finite-size inference is not direct measurement of an infinite limit. An equilibrium finite-box pressure loop is not automatically a nonequilibrium hysteresis loop, and Monte Carlo displacement time is not a physical nucleation clock."
      ]
    },
    {
      "id": "phys:phase-regime-source-scope",
      "name": "Scoped thermodynamic phase-regime organization",
      "kind": "scoped-process",
      "description": "The selected literature supports a finite phase-regime organization in the specified hard-disk model: distinct liquid, hexatic and solid regimes, first-order coexistence and a continuous upper ordering transition under its declared density scan. Separate Al-Mn treatment observations support protocol-dependent metastability. Bulk equilibrium/coexistence conditions provide a formal interpretation boundary, while the reused ambient-water structure and dynamics records describe one liquid regime without measuring its transition boundaries. These cases support thermodynamic organization with stability and kinetic distinctions, rather than a universal material map or mandatory crystal-liquid-colloid ancestry.",
      "claimIds": [
        "C-phys-phase-regime-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom"
        },
        {
          "sourceId": "gibbs1878-equilibrium-author-abstract",
          "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling"
        },
        {
          "sourceId": "bernard2011-hard-disks",
          "locator": "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock"
        },
        {
          "sourceId": "shechtman1984-icosahedral",
          "locator": "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The positive phase-regime map retained here is the selected two-dimensional hard-disk equilibrium density scan. Its first-order liquid-hexatic coexistence and continuous hexatic-solid transition have the original model, sampling, correlation and finite-size limits. The model has no distinct liquid-gas phases or temperature-driven boundary at fixed density.",
        "The Al-Mn anneals retain physical protocol-dependent persistence/conversion evidence, not a complete equilibrium phase diagram or a 400-degree-C critical temperature. No continuous metastability domain or physical transformation-rate law is inferred from three treatment points.",
        "The liquid-water structure reanalysis and reorientation model supply positive single-regime structural/dynamical information. They are not new phase-boundary acquisitions, direct measurements of network lifetimes or a validated common phase-transition model.",
        "Bulk equilibrium constraints delimit an interpretation; they do not derive all material regimes, determine an equation of state, or show that every stationary or long-lived state is globally stable.",
        "Critical endpoints, spinodal-like local-stability boundaries, coexistence conditions and kinetic pathways are distinct. No complete critical-point map, universal criticality, all-system symmetry-breaking rule, Landau theory or universality class is admitted.",
        "Original necessary parents 2.9 crystals, 2.12 liquid molecular organization and 2.13 colloidal interfaces are not universal prerequisites of the thermodynamic formalism or every phase transition. The selected sources do not require simultaneous prior crystal, polar liquid and colloid formation.",
        "Original weights 0.4/0.35/0.25, directions [3], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal estimator or universal necessity.",
        "Original carrier group 1/type 0, parent N_min=N_crit counts 2/3/3 and null N_sat are catalogue defaults. Gibbs independent-component/phase counts, hard-disk N, alloy grains and liquid coordination counts are different domains; none measures those carrier thresholds.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2,14], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA global pattern/stability-map label is not an additional measured physical entity or universal causal hierarchy.",
        "The original generic thermodynamics/Landau/critical-framework and calorimetry/diffraction/transport placeholders are replaced only by actually read formal equilibrium conditions and the existing bounded studies. No unread Landau derivation, calorimetric latent heat, transport phase boundary or all-material phase atlas is invented.",
        "The existing studies and source scopes are reused without duplicate studies, another physical acquisition, a new joint likelihood or independent replication. Gibbs 1878 is a selected primary theoretical author summary, not a newly solved material phase diagram or a complete reading of the earlier treatise.",
        "No equation-of-state fit, free-energy reconstruction, phase-rule numerical replay, pressure-loop integration, simulation execution, atomic structural refinement, new anneal experiment or physical kinetic prediction is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:bulk-equilibrium-phase-conditions-phase-regime-stability-observable-boundary",
      "source": "phys:bulk-equilibrium-phase-conditions",
      "target": "phys:phase-regime-stability-observable-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared bulk constraints and independent-variable conventions delimit the phase-stability and observable distinction.",
      "claimIds": [
        "D-phys-phase-regime-stability-observable-boundary"
      ]
    },
    {
      "id": "physics:bulk-equilibrium-phase-conditions-phase-regime-source-scope",
      "source": "phys:bulk-equilibrium-phase-conditions",
      "target": "phys:phase-regime-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared formal condition or existing finite result contributes to this scoped interpretation without a new acquisition or universal phase/kinetic inference.",
      "claimIds": [
        "M-phys-phase-regime-source-scope"
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:phase-regime-stability-observable-boundary-phase-regime-source-scope",
      "source": "phys:phase-regime-stability-observable-boundary",
      "target": "phys:phase-regime-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared formal condition or existing finite result contributes to this scoped interpretation without a new acquisition or universal phase/kinetic inference.",
      "claimIds": [
        "M-phys-phase-regime-source-scope"
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:bernard-hard-disk-ordering-phase-regime-source-scope",
      "source": "phys:bernard-hard-disk-ordering",
      "target": "phys:phase-regime-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared formal condition or existing finite result contributes to this scoped interpretation without a new acquisition or universal phase/kinetic inference.",
      "claimIds": [
        "M-phys-phase-regime-source-scope"
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:shechtman-icosahedral-order-phase-regime-source-scope",
      "source": "phys:shechtman-icosahedral-order",
      "target": "phys:phase-regime-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared formal condition or existing finite result contributes to this scoped interpretation without a new acquisition or universal phase/kinetic inference.",
      "claimIds": [
        "M-phys-phase-regime-source-scope"
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:liquid-organization-source-scope-phase-regime-source-scope",
      "source": "phys:liquid-organization-source-scope",
      "target": "phys:phase-regime-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared formal condition or existing finite result contributes to this scoped interpretation without a new acquisition or universal phase/kinetic inference.",
      "claimIds": [
        "M-phys-phase-regime-source-scope"
      ],
      "contextIds": [
        "shechtman1984-alloy",
        "bernard2011-hard-disks",
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:bulk-equilibrium-phase-conditions",
      "role": "definition",
      "denotes": "Constrained bulk equilibrium, coexistence and phase-rule conditions under the selected formal constraints and finite reused study boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-bulk-equilibrium-phase-conditions"
      ]
    },
    {
      "nodeId": "phys:phase-regime-stability-observable-boundary",
      "role": "definition",
      "denotes": "Phase stability, criticality, kinetics and observable boundary under the selected formal constraints and finite reused study boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-phase-regime-stability-observable-boundary"
      ]
    },
    {
      "nodeId": "phys:phase-regime-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped thermodynamic phase-regime organization under the selected formal constraints and finite reused study boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-phase-regime-source-scope"
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
      "id": "shechtman1984-icosahedral",
      "kind": "research-publication",
      "title": "Metallic Phase with Long-Range Orientational Order and No Translational Symmetry",
      "authors": [
        "D. Shechtman",
        "I. Blech",
        "D. Gratias",
        "J. W. Cahn"
      ],
      "year": 1984,
      "doi": "10.1103/PhysRevLett.53.1951",
      "url": "https://lipn.univ-paris13.fr/~fernique/qc/shechtman.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Published pages 1951-1952, Figures 1-2: rapidly cooled Al-Mn specimens, finite grains, selected-area diffraction, icosahedral axes and dark-field orientational correlation",
          "Published page 1952, three enumerated tests: dark-field whole-grain contrast, convergent-beam microdiffraction and Cu K-alpha powder diffraction against a multiple-twinning/Bravais-lattice explanation",
          "Published pages 1952-1953: nucleation/growth morphology, segregation, qualitative structural interpretation and protocol-dependent annealing/metastability"
        ],
        "limit": "All published pages 1951-1953 and Figures 1-2 read visually from the original published scan. The university PDF has a fourth page duplicating an enlarged Figure 2; it is not a fourth article page. No raw diffraction, new microscopy, atom-coordinate refinement, calorimetric or time-resolved kinetic replay. Publisher identity and Crossref publication metadata checked; 12 November 1984, PRL 53(20), 1951-1953. No linked correction found in the bounded DOI/title/publisher/Crossref check; not an exhaustive no-correction assertion."
      }
    },
    {
      "id": "bernard2011-hard-disks",
      "kind": "research-publication",
      "title": "Two-Step Melting in Two Dimensions: First-Order Liquid-Hexatic Transition",
      "authors": [
        "Etienne P. Bernard",
        "Werner Krauth"
      ],
      "year": 2011,
      "doi": "10.1103/PhysRevLett.107.155704",
      "url": "https://arxiv.org/pdf/1102.4094v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-author-preprint",
        "locators": [
          "Author arXiv 1102.4094v2 pages 1-2, Figure 1: structureless hard-disk model, radius sigma, packing fraction, orientational order and periodic-box coexistence",
          "Author arXiv 1102.4094v2 pages 2-3, Figure 2: finite-system equilibrium pressure loop, Maxwell construction and interface-free-energy scaling",
          "Author arXiv 1102.4094v2 pages 2-4, Figures 3-4: positional/orientational correlations, hexatic-solid interpretation, equilibration and algorithmic displacement clock",
          "Supplement dated 25 August 2011 pages 1-4, Sections I.A-I.D and Figures S1-S4: SEC global balance, sampling/Gaussian errors, pressure estimator and orientational analysis",
          "Supplement dated 25 August 2011 pages 5-10, Sections II-IV and Figures S7-S9: coexistence, measured structure-factor peak wave vector, positional/orientational correlations and finite-size/density-fluctuation limits",
          "Supplement dated 25 August 2011 pages 10-12, Section V: positional-correlation program and declared configuration-file inputs; read without execution"
        ],
        "limit": "All five author arXiv 1102.4094v2 pages read in full, main Figures 1-4 visually checked, and all twelve pages of the author supplement dated 25 August 2011 read as text, including the unexecuted program. Supplement pages 7-10 and Figures S7-S9 also visually checked; the other supplemental figures were read through text/captions, not all visually inspected. Supplement primary URL: https://arxiv.org/src/1102.4094v2/anc/Bernard_PRL_supplemental.pdf . Configuration files were not downloaded and no Monte Carlo/code, pressure/contact fit or correlation replay was executed. Published full text was not obtained; publisher/Crossref publication metadata verified as 7 October 2011, PRL 107(15), 155704. Author archive v2 is dated 30 August 2011 (v1 20 February 2011). No linked correction found in the bounded DOI/title/publisher/Crossref check; not an exhaustive no-correction assertion."
      }
    },
    {
      "id": "skinner2013-water-pair-distribution",
      "kind": "research-publication",
      "title": "Benchmark oxygen-oxygen pair-distribution function of ambient water from x-ray diffraction measurements with a wide Q-range",
      "authors": [
        "Lawrie B. Skinner",
        "Congcong Huang",
        "Daniel Schlesinger",
        "Lars G. M. Pettersson",
        "Anders Nilsson",
        "Chris J. Benmore"
      ],
      "year": 2013,
      "doi": "10.1063/1.4790861",
      "url": "https://www.researchgate.net/publication/235748631_Benchmark_oxygen-oxygen_pair-distribution_function_of_ambient_water_from_x-ray_diffraction_measurements_with_a_wide_Q-range",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
          "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement"
        ],
        "limit": "Actually read the declared published-page body passages and figure/table captions in the published-text copy uploaded by author Lawrie Skinner. Figures were not visually inspected, the publisher PDF was not obtained, and the supplement/numerical data were not downloaded. The exact analytical mapping was read as text but no full symbolic or raw-data replay is claimed. Selected Section III preparation and Figure 2 caption were read, not every apparatus paragraph in that section. Underlying acquisition/form-factor/neutron/comparison-model publications were not separately read. Publisher identity and Crossref metadata verified: JCP138(7),074506, online20 February2013 (print metadata21 February2013). No update-to/correction relation in the checked Crossref record and no linked correction found in the bounded DOI/title primary-record search; not an exhaustive absence claim."
      }
    },
    {
      "id": "laage-hynes2006-water-reorientation",
      "kind": "research-publication",
      "title": "A Molecular Jump Mechanism of Water Reorientation",
      "authors": [
        "Damien Laage",
        "James T. Hynes"
      ],
      "year": 2006,
      "doi": "10.1126/science.1122154",
      "url": "https://www.researchgate.net/publication/7333288_A_Molecular_Jump_Mechanism_of_Water_Reorientation",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints"
        ],
        "limit": "Read the complete scientific body on published pages832-835, Equations1-3 as text, Figures1-4/Table1 captions and entries, and selected Notes21/27 in the published-text copy uploaded by coauthor James Hynes. Figures were not visually inspected and the exact printed equation typography was not checked from an obtained PDF; no unverified closed-form jump formula is admitted. Exclude the unrelated turbulent-flow article following on page835. Publisher PDF and raw trajectories not obtained; no simulation/correlation replay or separately reviewed earlier experimental datasets. Crossref/published copy metadata agree on Science311(5762),832-835, issue10 February2006 and body says online26 January2006. Crossref has-review relation is an external appraisal, not a correction. No update-to/correction relation or explicit linked erratum found in the bounded check; not an exhaustive absence claim."
      }
    },
    {
      "id": "gibbs1878-equilibrium-author-abstract",
      "kind": "research-publication",
      "title": "On the equilibrium of heterogeneous substances",
      "authors": [
        "J. W. Gibbs"
      ],
      "year": 1878,
      "doi": "10.2475/ajs.s3-16.96.441",
      "url": "https://ajsonline.org/api/v1/articles/63588-on-the-equilibrium-of-heterogeneous-substances.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-published-passages",
        "locators": [
          "Published pages 441-442, Equations 1-4: constrained entropy/energy equilibrium criteria and the constant-temperature potential",
          "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
          "Published pages 445-446, Coexistent phases: composition/state definition independent of specimen size, free coexistence and n+2-r intensive degrees of freedom",
          "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint"
        ],
        "limit": "Read published pages441-448 and the opening449 stability/geometrical passage from the18-page original AJS scan. Visually checked441,443-449;442 read as text. The title explicitly says Abstract by the author: this is Gibbs own18-page theoretical exposition, not a database abstract or a secondary review, and not a full reading of the much longer1876/1878 Transactions treatise cited on441. Pages450-458 and the ideal-gas extension beginning on449 are not admitted. Original symbols are rewritten explicitly; no closed-form critical derivative test, numerical phase calculation, kinetic model or primary experiment is replayed. Publisher and Crossref metadata checked: American Journal of Science third series volume16 (s3-16),issue96,441-458,December1878; registration assigns1December. No update-to or correction relation appears in the bounded publisher/DOI/title check. Earlier treatise errata noted in library metadata were not separately read; no exhaustive historical-correction or full-proof claim."
      }
    }
  ]
};

/** Preserve constrained bulk phase definitions, four existing evidence contexts and the distinction between equilibrium boundaries and finite kinetic persistence. */
export function validatePhaseRegimeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Phase-regime ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
