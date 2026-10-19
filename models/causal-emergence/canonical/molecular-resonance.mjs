import assert from "node:assert/strict";

export const MOLECULAR_RESONANCE_CHECKS = new Map();
export const MOLECULAR_RESONANCE_ANALYTICAL_SOURCES = new Map();
export const MOLECULAR_RESONANCE_STUDY_TYPES = new Map([["pauling1933-benzene", "computational-analysis"]]);
export const MOLECULAR_RESONANCE_ADMISSION = {
  "definitions": [
    [
      "phys:stationary-vb-resonance-representation",
      "D-phys-stationary-vb-resonance-representation"
    ],
    [
      "phys:resonance-energy-reference-boundary",
      "D-phys-resonance-energy-reference-boundary"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "pauling1933-benzene-context",
      "M-phys-pauling1933-benzene-context",
      [
        "pauling1933-benzene"
      ]
    ]
  ],
  "observations": [
    [
      "pauling-benzene-vb-lowering",
      "C-phys-pauling-benzene-vb-lowering",
      [
        "pauling1933-benzene"
      ]
    ],
    [
      "resonance-source-scope",
      "C-phys-resonance-source-scope",
      [
        "pauling1933-benzene"
      ]
    ]
  ],
  "dependencies": [
    [
      "pauling1933-benzene-context-pauling-benzene-vb-lowering",
      "pauling1933-benzene-context",
      "pauling-benzene-vb-lowering",
      "M-phys-pauling1933-benzene-context",
      "computation-context"
    ],
    [
      "stationary-vb-resonance-representation-pauling-benzene-vb-lowering",
      "stationary-vb-resonance-representation",
      "pauling-benzene-vb-lowering",
      "M-phys-pauling1933-benzene-context",
      "interpretation-dependency"
    ],
    [
      "resonance-energy-reference-boundary-pauling-benzene-vb-lowering",
      "resonance-energy-reference-boundary",
      "pauling-benzene-vb-lowering",
      "M-phys-pauling1933-benzene-context",
      "interpretation-dependency"
    ],
    [
      "stationary-vb-resonance-representation-resonance-source-scope",
      "stationary-vb-resonance-representation",
      "resonance-source-scope",
      "M-phys-resonance-source-scope",
      "interpretation-dependency"
    ],
    [
      "resonance-energy-reference-boundary-resonance-source-scope",
      "resonance-energy-reference-boundary",
      "resonance-source-scope",
      "M-phys-resonance-source-scope",
      "interpretation-dependency"
    ],
    [
      "pauling-benzene-vb-lowering-resonance-source-scope",
      "pauling-benzene-vb-lowering",
      "resonance-source-scope",
      "M-phys-resonance-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "pauling1933-benzene"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-pauling1933-benzene-context",
      [
        "pauling1933-resonance",
        "pauling1934-resonance-erratum"
      ]
    ],
    [
      "C-phys-pauling-benzene-vb-lowering",
      [
        "pauling1933-resonance",
        "pauling1934-resonance-erratum"
      ]
    ],
    [
      "M-phys-resonance-source-scope",
      [
        "pauling1933-resonance",
        "pauling1934-resonance-erratum"
      ]
    ],
    [
      "C-phys-resonance-source-scope",
      [
        "pauling1933-resonance",
        "pauling1934-resonance-erratum"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-stationary-vb-resonance-representation",
      "kind": "review-finding",
      "statement": "In the selected benzene model, five independent many-electron valence-bond functions describe different spin-pairing patterns on the same supplied framework: two Kekule functions A/B and three Dewar-type functions C/D/E. The stationary normal-state eigenfunction is a linear combination of these functions. This representation does not describe an observed sequence of bond drawings, a molecule hopping between five species or an incoherent mixture of isolable isomers. The canonical functions have nonzero overlaps; expansion coefficients are not by themselves probabilities or time fractions.",
      "scope": "Formal interpretation of the five-function secular problem and stationary eigenfunction on primary pages 364-365.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are six-electron valence-bond functions, not five one-electron molecular orbitals. A molecular-orbital calculation or its orbital populations is not admitted through this result.",
        "Neglecting the source orbital exchange integrals of unity does not make all canonical many-electron functions orthogonal; the displayed secular determinant retains overlap terms.",
        "The time-independent interpretation is the declared formal reading of the source eigenfunction, not a claim that the 1933 work measured molecular dynamics, local electron trajectories or structure populations."
      ]
    },
    {
      "id": "D-phys-resonance-energy-reference-boundary",
      "kind": "review-finding",
      "statement": "Define a resonance-model energy comparison only after fixing the Hamiltonian approximation, geometry/framework, active-electron space and restricted reference function. In this source rewrite the nearest-neighbor molecular exchange integral as J_ex=alpha_source<0, with units of energy; it is distinct from the positive dimensionless electromagnetic fine-structure constant alpha_EM=e^2/(4*pi). Compare the coupled-function energy W with the one-Kekule-function value W_single under the same Q and J_ex convention. W-W_single is a model-space energy difference, not an independently measured heat, a molecular dissociation energy, an energy released by switching drawings or an operational universal aromaticity criterion.",
      "scope": "Declared energy, notation and observable boundary for the finite historical benzene calculation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The named single-function reference is not a separately isolated chemical species. Changing the reference or approximations changes the meaning of the comparison.",
        "The source gives no modern statistical or model-truncation uncertainty for these energies. Printed algebraic decimal places are not physical error bars.",
        "The source separately calibrates its exchange parameter from a cited thermochemical estimate and questions the transfer of aliphatic bond energies. That external dataset was not read and its approximate -1.5 eV calibration is not admitted here.",
        "Geometrical bond equivalence, an extended orbital representation and this model energy lowering do not individually supply magnetic, kinetic, optical or transport evidence or a complete aromaticity classification."
      ]
    },
    {
      "id": "M-phys-pauling1933-benzene-context",
      "kind": "method",
      "statement": "Supply a neutral planar six-carbon benzene framework with one active perpendicular p-like electron/orbital per carbon. Treat its six-electron spin-coupling problem with the two Kekule and three Dewar-type canonical functions. Omit in-plane/core contributions as common terms in the comparison, neglect the stated orbital overlap/exchange terms except equal nearest-neighbor exchange, and retain the nonorthogonal canonical-function secular matrix. Solve the five-function model for its stationary lowest energy and compare with restrictions to one or two Kekule functions using the same parameters. This records the source calculation, not a new solver execution.",
      "scope": "One computational-analysis study: benzene assumptions and five-function calculation in Pauling-Wheland 1933, with linked correction checked.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "method",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "method",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "method",
          "note": "The attached primary correction was read: it corrects radical results and leaves the selected benzene result unchanged; it is not a second study."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The supplied framework, active-electron space and common-contribution omission are assumptions; this is not an all-electron optimized benzene geometry, modern ab initio calculation or measured density.",
        "J_ex explicitly rewrites the source molecular alpha and has units of energy with negative sign. It must not be silently identified with the existing electromagnetic fine-structure alpha.",
        "No external ionization, cation/anion pair, ionic lattice or screening regime is a prerequisite of this neutral model. No universal count threshold is estimated from its six electrons or five functions.",
        "The linked 1934 erratum corrects radical results on original pages 370-373, not the selected benzene determinant and Table I. No radical output or empirical radical agreement is admitted.",
        "No numerical determinant replay, external thermochemical calibration, full error budget or matched experimental response calculation is supplied."
      ],
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "C-phys-pauling-benzene-vb-lowering",
      "kind": "review-finding",
      "statement": "Under the declared source model, W=Q+(sqrt(13)-1)*J_ex is approximately Q+2.6055*J_ex, while W_single=Q+1.5*J_ex for one Kekule function. Thus Delta W=W-W_single is approximately 1.1055*J_ex<0 for J_ex<0; the positive stabilization magnitude is -1.1055*J_ex. The source gives the unnormalized eigenfunction proportional to Psi_A+Psi_B+0.4341*(Psi_C+Psi_D+Psi_E). Table I also reports Q+2.4*J_ex for the two-Kekule restriction. These are positive finite results of the specified many-electron model and reference comparison.",
      "scope": "Historical parameterized stationary-state benzene model, source rounded algebraic result rather than an experimental absolute energy.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "supports",
          "note": "The attached primary correction was read: it corrects radical results and leaves the selected benzene result unchanged; it is not a second study."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The unnormalized amplitudes 1, 1 and 0.4341 are not normalized probabilities. Their squares are not measured structure fractions, time occupancy or uniquely defined experimental contributions.",
        "All compared energies use the same Q/J_ex convention and supplied framework. No physical transition between the reference functions, isolated reference molecule or bond-formation rate is observed.",
        "The source approximate empirical exchange calibration and external thermochemical estimate are omitted. No absolute stabilization in eV, uncertainty bar, modern best value or independent theory/experiment agreement is asserted.",
        "The primary linked erratum concerns radical tables and comparisons; it does not alter this benzene Table I result. No new local algebraic or numerical replay is claimed."
      ],
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "M-phys-resonance-source-scope",
      "kind": "method",
      "statement": "Interpret the source result as a stationary six-electron VB model and a reference-defined energy comparison, retaining its approximation, representation and linked-correction limits. Separate this calculated lowering from a physical interconversion, molecular-orbital construction, ion-formation pathway and measured charge, magnetic, optical or transport response. No new empirical result, joint likelihood, numerical replay or independent replication is created.",
      "scope": "Scoped literature synthesis method for the finite reconstruction of original card 2.5.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "method",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "method",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration",
          "role": "method",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "method",
          "note": "The attached primary correction was read: it corrects radical results and leaves the selected benzene result unchanged; it is not a second study."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "The complete original catalogue card 2.5 is scope provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The retained result concerns one six-electron benzene VB model. It is not a one-electron H2+/HD+ result, and those existing molecular-ion calculations cannot substitute for every many-electron resonance claim.",
        "No new empirical acquisition is admitted. The reviewed passages do not supply a fitted charge density, spectroscopic response, magnetic ring current, reaction rate, optical spectrum or transport function. Observable inference needs a named response model and matched experiment.",
        "The future aromaticity card may reuse this same study and benzene system, but must name its own energetic, magnetic, electronic or structural criterion. Delocalized representation, cyclic geometry or bond-length equality alone does not establish all aromaticity claims.",
        "Original parent 2.3 can supply a molecular framework and electronic degrees; the particular earlier H2 binding/spectroscopy study is not a necessary benzene history. The neutral calculation does not require original parent 2.4 ionic interaction/ion formation as a universal prerequisite.",
        "Original parent weights 0.6/0.4, directions [2], modes [0,1], necessary, dependency type 10 and role arising have no matched quantitative causal estimator. No such weight or necessity is promoted to the graph.",
        "Original carrier group 1/type 0, parent counts 2 and 1 for N_min=N_crit and null saturation are catalogue provenance. Six active electrons and five basis functions are distinct model choices, not measured universal atom, ion, mode or energy thresholds.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9], Optional [] and generic theoretical/empirical placeholders remain catalogue choices. They do not admit all charge, conjugation, response, optical, reactivity or transport claims.",
        "No broad chemical transformation rule or all-system stabilization theorem follows. The source historical aromatic language is not used as an independent operational aromaticity measurement."
      ],
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "C-phys-resonance-source-scope",
      "kind": "review-finding",
      "statement": "A finite positive molecular-resonance result is supported by the specified six-electron benzene VB model: a coherent stationary combination of canonical functions lowers the model energy relative to the one-Kekule-function reference. The source assumptions and exchange parameter delimit the result. This treats resonance drawings as a representation of one state, with no observed interconversion or new molecule. General delocalized charge, conjugation, aromaticity, reactivity, optical and transport conclusions require additional identified models or measurements.",
      "scope": "Positive parameterized many-electron model evidence, with observations and broad chemical generalizations left outside this admission.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite formal/model statement; no new experimental or numerical replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "supports",
          "note": "The attached primary correction was read: it corrects radical results and leaves the selected benzene result unchanged; it is not a second study."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "The complete original catalogue card 2.5 is scope provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The retained result concerns one six-electron benzene VB model. It is not a one-electron H2+/HD+ result, and those existing molecular-ion calculations cannot substitute for every many-electron resonance claim.",
        "No new empirical acquisition is admitted. The reviewed passages do not supply a fitted charge density, spectroscopic response, magnetic ring current, reaction rate, optical spectrum or transport function. Observable inference needs a named response model and matched experiment.",
        "The future aromaticity card may reuse this same study and benzene system, but must name its own energetic, magnetic, electronic or structural criterion. Delocalized representation, cyclic geometry or bond-length equality alone does not establish all aromaticity claims.",
        "Original parent 2.3 can supply a molecular framework and electronic degrees; the particular earlier H2 binding/spectroscopy study is not a necessary benzene history. The neutral calculation does not require original parent 2.4 ionic interaction/ion formation as a universal prerequisite.",
        "Original parent weights 0.6/0.4, directions [2], modes [0,1], necessary, dependency type 10 and role arising have no matched quantitative causal estimator. No such weight or necessity is promoted to the graph.",
        "Original carrier group 1/type 0, parent counts 2 and 1 for N_min=N_crit and null saturation are catalogue provenance. Six active electrons and five basis functions are distinct model choices, not measured universal atom, ion, mode or energy thresholds.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9], Optional [] and generic theoretical/empirical placeholders remain catalogue choices. They do not admit all charge, conjugation, response, optical, reactivity or transport claims.",
        "No broad chemical transformation rule or all-system stabilization theorem follows. The source historical aromatic language is not used as an independent operational aromaticity measurement."
      ],
      "contextIds": [
        "pauling1933-benzene"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:stationary-vb-resonance-representation",
      "name": "Stationary many-electron valence-bond representation",
      "kind": "definition",
      "description": "In the selected benzene model, five independent many-electron valence-bond functions describe different spin-pairing patterns on the same supplied framework: two Kekule functions A/B and three Dewar-type functions C/D/E. The stationary normal-state eigenfunction is a linear combination of these functions. This representation does not describe an observed sequence of bond drawings, a molecule hopping between five species or an incoherent mixture of isolable isomers. The canonical functions have nonzero overlaps; expansion coefficients are not by themselves probabilities or time fractions.",
      "claimIds": [
        "D-phys-stationary-vb-resonance-representation"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        }
      ],
      "openObligations": [
        "These are six-electron valence-bond functions, not five one-electron molecular orbitals. A molecular-orbital calculation or its orbital populations is not admitted through this result.",
        "Neglecting the source orbital exchange integrals of unity does not make all canonical many-electron functions orthogonal; the displayed secular determinant retains overlap terms.",
        "The time-independent interpretation is the declared formal reading of the source eigenfunction, not a claim that the 1933 work measured molecular dynamics, local electron trajectories or structure populations."
      ]
    },
    {
      "id": "phys:resonance-energy-reference-boundary",
      "name": "Reference-defined resonance energy and observable boundary",
      "kind": "definition",
      "description": "Define a resonance-model energy comparison only after fixing the Hamiltonian approximation, geometry/framework, active-electron space and restricted reference function. In this source rewrite the nearest-neighbor molecular exchange integral as J_ex=alpha_source<0, with units of energy; it is distinct from the positive dimensionless electromagnetic fine-structure constant alpha_EM=e^2/(4*pi). Compare the coupled-function energy W with the one-Kekule-function value W_single under the same Q and J_ex convention. W-W_single is a model-space energy difference, not an independently measured heat, a molecular dissociation energy, an energy released by switching drawings or an operational universal aromaticity criterion.",
      "claimIds": [
        "D-phys-resonance-energy-reference-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
        }
      ],
      "openObligations": [
        "The named single-function reference is not a separately isolated chemical species. Changing the reference or approximations changes the meaning of the comparison.",
        "The source gives no modern statistical or model-truncation uncertainty for these energies. Printed algebraic decimal places are not physical error bars.",
        "The source separately calibrates its exchange parameter from a cited thermochemical estimate and questions the transfer of aliphatic bond energies. That external dataset was not read and its approximate -1.5 eV calibration is not admitted here.",
        "Geometrical bond equivalence, an extended orbital representation and this model energy lowering do not individually supply magnetic, kinetic, optical or transport evidence or a complete aromaticity classification."
      ]
    },
    {
      "id": "phys:pauling1933-benzene-context",
      "name": "Historical six-electron benzene calculation context",
      "kind": "context",
      "description": "Supply a neutral planar six-carbon benzene framework with one active perpendicular p-like electron/orbital per carbon. Treat its six-electron spin-coupling problem with the two Kekule and three Dewar-type canonical functions. Omit in-plane/core contributions as common terms in the comparison, neglect the stated orbital overlap/exchange terms except equal nearest-neighbor exchange, and retain the nonorthogonal canonical-function secular matrix. Solve the five-function model for its stationary lowest energy and compare with restrictions to one or two Kekule functions using the same parameters. This records the source calculation, not a new solver execution.",
      "claimIds": [
        "M-phys-pauling1933-benzene-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        }
      ],
      "openObligations": [
        "The supplied framework, active-electron space and common-contribution omission are assumptions; this is not an all-electron optimized benzene geometry, modern ab initio calculation or measured density.",
        "J_ex explicitly rewrites the source molecular alpha and has units of energy with negative sign. It must not be silently identified with the existing electromagnetic fine-structure alpha.",
        "No external ionization, cation/anion pair, ionic lattice or screening regime is a prerequisite of this neutral model. No universal count threshold is estimated from its six electrons or five functions.",
        "The linked 1934 erratum corrects radical results on original pages 370-373, not the selected benzene determinant and Table I. No radical output or empirical radical agreement is admitted.",
        "No numerical determinant replay, external thermochemical calibration, full error budget or matched experimental response calculation is supplied."
      ]
    },
    {
      "id": "phys:pauling-benzene-vb-lowering",
      "name": "Source-reported finite benzene valence-bond energy lowering",
      "kind": "scoped-process",
      "description": "Under the declared source model, W=Q+(sqrt(13)-1)*J_ex is approximately Q+2.6055*J_ex, while W_single=Q+1.5*J_ex for one Kekule function. Thus Delta W=W-W_single is approximately 1.1055*J_ex<0 for J_ex<0; the positive stabilization magnitude is -1.1055*J_ex. The source gives the unnormalized eigenfunction proportional to Psi_A+Psi_B+0.4341*(Psi_C+Psi_D+Psi_E). Table I also reports Q+2.4*J_ex for the two-Kekule restriction. These are positive finite results of the specified many-electron model and reference comparison.",
      "claimIds": [
        "C-phys-pauling-benzene-vb-lowering"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        }
      ],
      "openObligations": [
        "The unnormalized amplitudes 1, 1 and 0.4341 are not normalized probabilities. Their squares are not measured structure fractions, time occupancy or uniquely defined experimental contributions.",
        "All compared energies use the same Q/J_ex convention and supplied framework. No physical transition between the reference functions, isolated reference molecule or bond-formation rate is observed.",
        "The source approximate empirical exchange calibration and external thermochemical estimate are omitted. No absolute stabilization in eV, uncertainty bar, modern best value or independent theory/experiment agreement is asserted.",
        "The primary linked erratum concerns radical tables and comparisons; it does not alter this benzene Table I result. No new local algebraic or numerical replay is claimed."
      ]
    },
    {
      "id": "phys:resonance-source-scope",
      "name": "Scoped many-electron molecular resonance model evidence",
      "kind": "scoped-process",
      "description": "A finite positive molecular-resonance result is supported by the specified six-electron benzene VB model: a coherent stationary combination of canonical functions lowers the model energy relative to the one-Kekule-function reference. The source assumptions and exchange parameter delimit the result. This treats resonance drawings as a representation of one state, with no observed interconversion or new molecule. General delocalized charge, conjugation, aromaticity, reactivity, optical and transport conclusions require additional identified models or measurements.",
      "claimIds": [
        "C-phys-resonance-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The retained result concerns one six-electron benzene VB model. It is not a one-electron H2+/HD+ result, and those existing molecular-ion calculations cannot substitute for every many-electron resonance claim.",
        "No new empirical acquisition is admitted. The reviewed passages do not supply a fitted charge density, spectroscopic response, magnetic ring current, reaction rate, optical spectrum or transport function. Observable inference needs a named response model and matched experiment.",
        "The future aromaticity card may reuse this same study and benzene system, but must name its own energetic, magnetic, electronic or structural criterion. Delocalized representation, cyclic geometry or bond-length equality alone does not establish all aromaticity claims.",
        "Original parent 2.3 can supply a molecular framework and electronic degrees; the particular earlier H2 binding/spectroscopy study is not a necessary benzene history. The neutral calculation does not require original parent 2.4 ionic interaction/ion formation as a universal prerequisite.",
        "Original parent weights 0.6/0.4, directions [2], modes [0,1], necessary, dependency type 10 and role arising have no matched quantitative causal estimator. No such weight or necessity is promoted to the graph.",
        "Original carrier group 1/type 0, parent counts 2 and 1 for N_min=N_crit and null saturation are catalogue provenance. Six active electrons and five basis functions are distinct model choices, not measured universal atom, ion, mode or energy thresholds.",
        "Original Level 2, Phase 1, TypeRole 2, Science [0,1,2], established, MustCover [10], ShouldCover [9], Optional [] and generic theoretical/empirical placeholders remain catalogue choices. They do not admit all charge, conjugation, response, optical, reactivity or transport claims.",
        "No broad chemical transformation rule or all-system stabilization theorem follows. The source historical aromatic language is not used as an independent operational aromaticity measurement."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:pauling1933-benzene-context-pauling-benzene-vb-lowering",
      "source": "phys:pauling1933-benzene-context",
      "target": "phys:pauling-benzene-vb-lowering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-pauling1933-benzene-context"
      ],
      "role": "computation-context",
      "assertion": "The supplied neutral framework, six-electron space, exchange approximation and nonorthogonal secular problem define the reported model-space energy comparison.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "physics:stationary-vb-resonance-representation-pauling-benzene-vb-lowering",
      "source": "phys:stationary-vb-resonance-representation",
      "target": "phys:pauling-benzene-vb-lowering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-pauling1933-benzene-context"
      ],
      "role": "interpretation-dependency",
      "assertion": "Interpret the coupled canonical functions as one stationary state rather than physical hopping, a mixture of isomers or measured structure probabilities.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "physics:resonance-energy-reference-boundary-pauling-benzene-vb-lowering",
      "source": "phys:resonance-energy-reference-boundary",
      "target": "phys:pauling-benzene-vb-lowering",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-pauling1933-benzene-context"
      ],
      "role": "interpretation-dependency",
      "assertion": "The sign and magnitude of energy lowering refer to the same negative exchange integral and declared one-Kekule reference; no absolute empirical calibration is supplied.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "physics:stationary-vb-resonance-representation-resonance-source-scope",
      "source": "phys:stationary-vb-resonance-representation",
      "target": "phys:resonance-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-resonance-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The stationary representation limits what the source calculation establishes about delocalization, without inventing a new species or transition process.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "physics:resonance-energy-reference-boundary-resonance-source-scope",
      "source": "phys:resonance-energy-reference-boundary",
      "target": "phys:resonance-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-resonance-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "A reference-defined model energy is distinct from measured density, response, reaction kinetics or a universal aromaticity criterion.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    },
    {
      "id": "physics:pauling-benzene-vb-lowering-resonance-source-scope",
      "source": "phys:pauling-benzene-vb-lowering",
      "target": "phys:resonance-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-resonance-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The finite benzene model comparison preserves its supplied framework, parameter convention, unnormalized coefficients and linked erratum limits.",
      "contextIds": [
        "pauling1933-benzene"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:stationary-vb-resonance-representation",
      "role": "definition",
      "denotes": "Stationary many-electron valence-bond representation in the declared six-electron benzene model and reference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-stationary-vb-resonance-representation"
      ]
    },
    {
      "nodeId": "phys:resonance-energy-reference-boundary",
      "role": "definition",
      "denotes": "Reference-defined resonance energy and observable boundary in the declared six-electron benzene model and reference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-resonance-energy-reference-boundary"
      ]
    },
    {
      "nodeId": "phys:pauling1933-benzene-context",
      "role": "model-context",
      "denotes": "Historical six-electron benzene calculation context in the declared six-electron benzene model and reference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-pauling1933-benzene-context"
      ]
    },
    {
      "nodeId": "phys:pauling-benzene-vb-lowering",
      "role": "scoped-phenomenon",
      "denotes": "Source-reported finite benzene valence-bond energy lowering in the declared six-electron benzene model and reference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-pauling-benzene-vb-lowering"
      ]
    },
    {
      "nodeId": "phys:resonance-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped many-electron molecular resonance model evidence in the declared six-electron benzene model and reference convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-resonance-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "pauling1933-benzene",
      "sourceId": "pauling1933-resonance",
      "studyType": "computational-analysis",
      "doi": "10.1063/1.1749304",
      "journal": "The Journal of Chemical Physics",
      "volume": "1",
      "issue": "6",
      "pages": "362-374",
      "system": "Historical six-electron benzene valence-bond model",
      "preparation": "Supply a neutral planar six-carbon benzene framework with one active perpendicular p-like electron/orbital per carbon. Treat its six-electron spin-coupling problem with the two Kekule and three Dewar-type canonical functions. Omit in-plane/core contributions as common terms in the comparison, neglect the stated orbital overlap/exchange terms except equal nearest-neighbor exchange, and retain the nonorthogonal canonical-function secular matrix. Solve the five-function model for its stationary lowest energy and compare with restrictions to one or two Kekule functions using the same parameters. This records the source calculation, not a new solver execution.",
      "observable": "No empirical observable acquired; stationary model energy and canonical-function expansion under declared approximations",
      "finding": "The five-function source result is W≈Q+2.6055*J_ex versus W_single=Q+1.5*J_ex, so W-W_single≈1.1055*J_ex<0. The printed eigenfunction is unnormalized. These are one source calculation and nested restrictions, not independent replications.",
      "limitations": [
        "The supplied framework, active-electron space and common-contribution omission are assumptions; this is not an all-electron optimized benzene geometry, modern ab initio calculation or measured density.",
        "J_ex explicitly rewrites the source molecular alpha and has units of energy with negative sign. It must not be silently identified with the existing electromagnetic fine-structure alpha.",
        "No external ionization, cation/anion pair, ionic lattice or screening regime is a prerequisite of this neutral model. No universal count threshold is estimated from its six electrons or five functions.",
        "The linked 1934 erratum corrects radical results on original pages 370-373, not the selected benzene determinant and Table I. No radical output or empirical radical agreement is admitted.",
        "No numerical determinant replay, external thermochemical calibration, full error budget or matched experimental response calculation is supplied.",
        "No absolute empirical exchange calibration is admitted; no physical uncertainty is supplied for omitted interactions.",
        "The separate 1934 correction is a linked publication for the same work, not another benzene calculation or experiment."
      ],
      "readExtent": "selected-primary-published-passages",
      "reviewedLocators": [
        "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
        "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
        "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.1749304",
      "correctionCheck": "Read the institution-linked Pauling/Wheland erratum, JCP 2(8),482 (1934), DOI 10.1063/1.1749514. It corrects radical Tables III-IV and discussion on original 370-373, not selected benzene Table I. Crossref relation metadata alone did not expose the correction; no exhaustive later assessment search is claimed."
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
      "id": "pauling1933-resonance",
      "kind": "research-publication",
      "title": "The Nature of the Chemical Bond. V. The Quantum-Mechanical Calculation of the Resonance Energy of Benzene and Naphthalene and the Hydrocarbon Free Radicals",
      "authors": [
        "Linus Pauling",
        "G. W. Wheland"
      ],
      "year": 1933,
      "doi": "10.1063/1.1749304",
      "url": "https://authors.library.caltech.edu/records/0123d-s6q38/files/PAUjcp33c.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-published-passages",
        "locators": [
          "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
        ],
        "limit": "Read printed pages 362-367 visually from the published primary scan; scientific admission is limited to benzene assumptions and calculation on 363-365. Pages 366-367 were inspected for boundaries; naphthalene numbers and radical results are not admitted. Pages 368-374 were not read. No separate thermochemical publication/data, experimental benzene acquisition, modern benchmark or local determinant replay. The Caltech record explicitly attaches the separately reviewed 1934 erratum. DOI/title/author order/journal/volume/issue/pages compared with DOI registration; an empty Crossref relation object does not mean no correction exists."
      }
    },
    {
      "id": "pauling1934-resonance-erratum",
      "kind": "research-publication",
      "title": "The Nature of the Chemical Bond. V",
      "authors": [
        "Linus Pauling",
        "G. W. Wheland"
      ],
      "year": 1934,
      "doi": "10.1063/1.1749514",
      "url": "https://authors.library.caltech.edu/records/0123d-s6q38/files/PAUjcp33ccorr.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-erratum",
        "locators": [
          "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        ],
        "limit": "Read the complete upper Pauling/Wheland erratum on page 482 visually. The separate keto-enol-tautomerism erratum below it is outside this admission. Corrections affect original radical tables/comparisons, not the selected benzene determinant, eigenfunction or Table I. This review does not admit the original radical calculation, which was not read in full. Published correction identity and DOI registration compared; linked correction checked through the institutional primary record, not inferred from Crossref relation metadata alone."
      }
    }
  ]
};

/** Preserve the stationary six-electron model, reference energy and linked correction limits. */
export function validateMolecularResonanceContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Molecular resonance ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
