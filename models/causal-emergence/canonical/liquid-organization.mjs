import assert from "node:assert/strict";

export const LIQUID_ORGANIZATION_CHECKS = new Map();
export const LIQUID_ORGANIZATION_ANALYTICAL_SOURCES = new Map();
export const LIQUID_ORGANIZATION_STUDY_TYPES = new Map([["skinner2013-water-reanalysis", "experimental-reanalysis"], ["laage2006-water-dynamics", "computational-analysis"]]);
export const LIQUID_ORGANIZATION_ADMISSION = {
  "definitions": [
    [
      "phys:liquid-correlation-observable-boundary",
      "D-phys-liquid-correlation-observable-boundary"
    ],
    [
      "phys:spce-water-reorientation-model",
      "D-phys-spce-water-reorientation-model"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "skinner2013-water-context",
      "M-phys-skinner2013-water-context",
      [
        "skinner2013-water-reanalysis"
      ]
    ],
    [
      "laage2006-water-context",
      "M-phys-laage2006-water-context",
      [
        "laage2006-water-dynamics"
      ]
    ]
  ],
  "observations": [
    [
      "skinner-water-pair-order",
      "C-phys-skinner-water-pair-order",
      [
        "skinner2013-water-reanalysis"
      ]
    ],
    [
      "laage-water-reorientation",
      "C-phys-laage-water-reorientation",
      [
        "laage2006-water-dynamics"
      ]
    ],
    [
      "liquid-organization-source-scope",
      "C-phys-liquid-organization-source-scope",
      [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    ]
  ],
  "dependencies": [
    [
      "skinner2013-water-context-skinner-water-pair-order",
      "skinner2013-water-context",
      "skinner-water-pair-order",
      "M-phys-skinner2013-water-context",
      "measurement-context"
    ],
    [
      "liquid-correlation-observable-boundary-skinner-water-pair-order",
      "liquid-correlation-observable-boundary",
      "skinner-water-pair-order",
      "M-phys-skinner-water-pair-order",
      "interpretation-dependency"
    ],
    [
      "laage2006-water-context-laage-water-reorientation",
      "laage2006-water-context",
      "laage-water-reorientation",
      "M-phys-laage2006-water-context",
      "interpretation-dependency"
    ],
    [
      "spce-water-reorientation-model-laage-water-reorientation",
      "spce-water-reorientation-model",
      "laage-water-reorientation",
      "M-phys-laage-water-reorientation",
      "interpretation-dependency"
    ],
    [
      "liquid-correlation-observable-boundary-laage-water-reorientation",
      "liquid-correlation-observable-boundary",
      "laage-water-reorientation",
      "M-phys-laage-water-reorientation",
      "interpretation-dependency"
    ],
    [
      "liquid-correlation-observable-boundary-liquid-organization-source-scope",
      "liquid-correlation-observable-boundary",
      "liquid-organization-source-scope",
      "M-phys-liquid-organization-source-scope",
      "interpretation-dependency"
    ],
    [
      "spce-water-reorientation-model-liquid-organization-source-scope",
      "spce-water-reorientation-model",
      "liquid-organization-source-scope",
      "M-phys-liquid-organization-source-scope",
      "interpretation-dependency"
    ],
    [
      "skinner-water-pair-order-liquid-organization-source-scope",
      "skinner-water-pair-order",
      "liquid-organization-source-scope",
      "M-phys-liquid-organization-source-scope",
      "interpretation-dependency"
    ],
    [
      "laage-water-reorientation-liquid-organization-source-scope",
      "laage-water-reorientation",
      "liquid-organization-source-scope",
      "M-phys-liquid-organization-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "skinner2013-water-reanalysis",
    "laage2006-water-dynamics"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-skinner2013-water-context",
      [
        "skinner2013-water-pair-distribution"
      ]
    ],
    [
      "M-phys-laage2006-water-context",
      [
        "laage-hynes2006-water-reorientation"
      ]
    ],
    [
      "M-phys-skinner-water-pair-order",
      [
        "skinner2013-water-pair-distribution"
      ]
    ],
    [
      "C-phys-skinner-water-pair-order",
      [
        "skinner2013-water-pair-distribution"
      ]
    ],
    [
      "M-phys-laage-water-reorientation",
      [
        "laage-hynes2006-water-reorientation"
      ]
    ],
    [
      "C-phys-laage-water-reorientation",
      [
        "laage-hynes2006-water-reorientation"
      ]
    ],
    [
      "M-phys-liquid-organization-source-scope",
      [
        "laage-hynes2006-water-reorientation",
        "skinner2013-water-pair-distribution"
      ]
    ],
    [
      "C-phys-liquid-organization-source-scope",
      [
        "laage-hynes2006-water-reorientation",
        "skinner2013-water-pair-distribution"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-liquid-correlation-observable-boundary",
      "kind": "review-finding",
      "statement": "For the selected ambient-water structure analysis, the oxygen-oxygen pair-distribution function g_OO(r) describes a radial spatial correlation of oxygen positions. A distance-shell coordination is an integral of 4*pi*rho_O*r^2*g_OO(r) over stated radial bounds. It is distinct from a unique angular hydrogen-bond network, cluster identity or time correlation. In the selected dynamics model, C_n(t)=average P_n[u_OH(0) dot u_OH(t)] characterizes orientational decorrelation, while a completed hydrogen-bond partner exchange uses its own state definition and endpoint conditions. Static pair structure, orientational relaxation, exchange waiting time, angular-event duration and molecular persistence are different quantities.",
      "scope": "Observable and inference definitions for one liquid-water structural reanalysis and one separate dynamics model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A radial two-body distribution does not uniquely determine angular correlations, a hydrogen-bond graph, fluctuating clusters, an interaction potential or a lifetime.",
        "Distance-shell oxygen coordination is not automatically the number of hydrogen bonds or proof of tetrahedral coordination.",
        "A statistical stationary distribution can coexist with changing molecular neighbors. No self-maintaining nonequilibrium mechanism or universal self-organization criterion is inferred from that fact alone."
      ]
    },
    {
      "id": "D-phys-spce-water-reorientation-model",
      "kind": "review-finding",
      "statement": "The selected Laage-Hynes calculation uses 256 rigid SPC/E water molecules in a periodic cubic box, Ewald treatment of long-range forces and a 0.5 fs classical molecular-dynamics step. After 50 ps equilibration at 300 K and density 1 g/cm^3, it analyzes a 75 ps microcanonical trajectory. Hydrogen bonds are assigned by oxygen separation and OH-to-OO angular cutoffs of 3.5 angstrom and 30 degrees. For the ensemble around a successful acceptor switch, these bounds are extended to 4.0 angstrom and 50 degrees. This is a supplied finite classical force-field and event-selection model, rather than an observed trajectory of individual real molecules.",
      "scope": "Specified finite liquid-water dynamics and event-definition model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The geometric state definition and the broader switch-selection bounds must remain distinct; no definition-independent hydrogen-bond lifetime follows.",
        "SPC/E is the explicitly named rigid model. No TIP water model, ab initio force field, bond dissociation, nuclear quantum correction or independently derived potential parameters are substituted.",
        "These simulations precede the Skinner 2013 benchmark. No calibration to that later dataset, common fitted likelihood or raw experimental trajectory is claimed."
      ]
    },
    {
      "id": "M-phys-skinner2013-water-context",
      "kind": "method",
      "statement": "Reanalyze the four reported ambient liquid-H2O X-ray datasets, APS, SPring-8, SSRL1 and SSRL2, with their stated temperatures between 22 and 26 degrees C. Keep the different high-energy/non-Compton-discriminating and lower-energy/analyzer approaches distinct. Use common scattering normalization and the specified quantum molecular form-factor input; subtract the literature O-H contribution in Q space, retain the small H-H approximation and sensitivity checks, and Fourier transform the isolated S_OO(Q) with the declared variable Lorch window and dataset-specific Q range. Retain the source separate statistical error, normalization/calibration limits and between-dataset comparison.",
      "scope": "One publication-level experimental reanalysis of four existing datasets; not a new fifth acquisition.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The underlying acquisition papers and imported neutron O-H, form-factor and comparison simulation sources were not separately read or replayed. They remain declared inputs to this reviewed reanalysis, not newly admitted independent studies.",
        "The four datasets share the reanalysis conventions and imported correction inputs. Their comparison is not four independent likelihoods for every final derived quantity.",
        "Figure 10 compares all four datasets with Q_max=23,18,15.5,13 inverse angstrom for APS,SPring-8,SSRL1,SSRL2 respectively. Figure 11 and Table I use APS,SPring-8,SSRL1; SSRL2 is excluded there because of poorer useful Q range and step.",
        "The text-rendered Table I gives Q_max footnotes 21.8 and 14.8 inverse angstrom, distinct from Figure 10 plotting cutoffs. The table typography and the apparent SPring-8 footnote/cutoff discrepancy were not checked visually or resolved; no common cutoff or inferred extended dataset is invented.",
        "Equation 14 estimates statistical input errors as twice neighboring S_OO(Q) differences. Normalization/calibration uncertainty and between-dataset variation are separate from those bars; no full covariance or universal one-sigma interpretation is reconstructed."
      ],
      "contextIds": [
        "skinner2013-water-reanalysis"
      ]
    },
    {
      "id": "M-phys-laage2006-water-context",
      "kind": "method",
      "statement": "Use the stated rigid-SPC/E trajectory and geometric hydrogen-bond model to collect more than 16000 successful acceptor-switch events. Average paths centered on exchange, with the broader geometric bounds used for that selected ensemble. For the forward completed-switch correlation, use the source absorbing endpoint convention so subsequent back reaction or rupture does not contribute. Analyze orientational correlations over the ensemble of all OH bonds and fit their long-time components separately from the fast librational decay. Compare the original jump model and its extension including slower OO-frame reorientation as interpretations of this same simulation.",
      "scope": "One computational study and dependent analytic interpretation, without a new spectroscopy experiment.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 16000 switches are events within the finite simulated trajectory, not 16000 independent experimental measurements or long-lived molecular clusters.",
        "Absorbing endpoint conditions select a forward completed-switch rate. This differs from transient geometric bond breaking/reforming and is not a unique continuous or intermittent lifetime for every hydrogen-bond definition.",
        "Reported agreement with ranges from earlier spectroscopy and dielectric studies is the authors comparison. Those underlying experimental publications were not separately reviewed, pooled or replayed here.",
        "No per-event confidence distribution, new trajectory, nuclear-quantum correction, potential fit or reproduced correlation analysis is supplied."
      ],
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "M-phys-skinner-water-pair-order",
      "kind": "method",
      "statement": "Interpret the isolated and Fourier-transformed oxygen-oxygen structure as a radial statistical ordering result, preserving form-factor/O-H/H-H approximations, finite Q resolution and the source uncertainty treatment. Keep recommended peak quantities distinct from the averaged three-dataset comparison curve and from distance-integrated coordination. Apply the declared integration bounds before quoting coordination, and do not infer a unique hydrogen-bond angle/network or dynamical lifetime from the radial pair function.",
      "scope": "Structural interpretation method for the publication-level common reanalysis.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source Figure 11 caption and preceding averaging passage identify three datasets, although one later prose sentence refers to variation between four measurements. The proposal preserves the explicit three-dataset construction and does not invent a fourth curve or a new recomputed systematic error.",
        "Short-distance residual intensity around 2.0-2.4 angstrom can be a subtraction artifact. It is not admitted as a newly identified close O-O species.",
        "The source identifies peak changes from finite Q-range/windowing; apparent fine sub-peaks cannot automatically become distinct liquid clusters or species."
      ],
      "contextIds": [
        "skinner2013-water-reanalysis"
      ]
    },
    {
      "id": "C-phys-skinner-water-pair-order",
      "kind": "review-finding",
      "statement": "The common ambient-water X-ray reanalysis supports nonuniform radial oxygen-oxygen correlations, with recommended first-maximum position 2.80(1) angstrom and dimensionless height 2.57(5). The reported oxygen coordination is 4.3(1) when integrating 4*pi*rho_O*r^2*g_OO(r) from 2.4 to 3.30 angstrom. For the APS example it becomes 4.6(1) if the upper cutoff is 3.40 angstrom. This is finite statistical shell structure in the liquid, not a rigid lattice or a unique hydrogen-bond network.",
      "scope": "Publication-supported derived spatial correlations from a common reanalysis of existing measurements.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The parenthesized errors are the publication estimates with statistical and expected normalization/calibration contributions. No new confidence level, raw-data covariance fit or precision beyond the source is assigned.",
        "The recommended first peak is not simply the arithmetic mean of all four datasets. Figure 11 averages the three selected curves; Table I excludes SSRL2 and retains Q-truncation conditions.",
        "The 3.30 angstrom cutoff follows the minimum in r^2*g_OO(r), not the first minimum in g_OO(r). The resulting 4.3 coordination is not a measured number of hydrogen bonds or proof of tetrahedral geometry.",
        "Static pair correlations do not measure how long an individual neighbor, cluster, hydrogen bond or molecule persists, nor do they directly determine viscosity, surface tension, dielectric relaxation or transport."
      ],
      "contextIds": [
        "skinner2013-water-reanalysis"
      ]
    },
    {
      "id": "M-phys-laage-water-reorientation",
      "kind": "method",
      "statement": "Interpret the finite simulation as supporting a concerted acceptor-exchange mechanism in which an old first-shell acceptor departs while a new acceptor approaches from the second shell and a large OH angular jump occurs. Keep the approximately 250 fs duration of the switch-centered angular event distinct from the 1.8 ps forward completed-switch correlation time and the rank-dependent orientational decay. In the extended jump description the inverse orientational decay rates from jumps and slower OO-frame motion are added under the stated statistical-independence and long-time exponential approximations.",
      "scope": "Dependent mechanism/time-correlation interpretation of the same rigid-SPC/E simulation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The angular-event duration is an average over switch-selected, time-centered paths, not a measured waiting time, lifetime distribution or independently observed single-molecule trajectory.",
        "The original jump approximation uses instantaneous fixed-amplitude jumps near 60 degrees and frozen orientation between them; the extension explicitly includes slower OO-frame motion and a factorization/independence assumption.",
        "Long-time orientational fits omit rapid libration. A rank-two reorientation time is not a bond survival time, Debye collective dielectric time or a molecular destruction/formation time."
      ],
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "C-phys-laage-water-reorientation",
      "kind": "review-finding",
      "statement": "For the stated rigid-SPC/E liquid-water model, the reported trajectories and correlations support large, concerted OH reorientation with exchange of hydrogen-bond acceptors, together with a slower between-switch OO-frame contribution. The selected angular event takes about 250 fs; the forward completed-switch correlation gives 1.8 ps; the rank-two long-time orientational decay fitted directly from the MD trajectory is 2.0 ps. Table 1 gives 1.6 ps for the extended-jump-model rank-two prediction. These distinct results describe statistical reconfiguration under the declared simulation/event definitions, not directly measured molecule or cluster lifetimes.",
      "scope": "Publication-supported computational mechanism and distinct model time scales, without a separate physical acquisition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 1.6 ps extended-model and 2.0 ps direct-MD rank-two values are not numerically identical. Their source comparison is not a newly fitted uncertainty-weighted validation or proof of one exact universal time.",
        "The cited experimental rank-two range 1.7-2.6 ps comes from earlier studies, not a new experiment in this paper or independently reviewed data here. Single-molecule rank-one time inferred from collective dielectric relaxation is model dependent, and rank-three time was not then directly measured in the source account.",
        "The completed-switch time depends on its absorbing condition and differs from shorter transient bond-breaking/reforming. Reorientation, hydrogen-bond partner exchange and molecular chemical identity must not be conflated.",
        "Neither this finite classical model nor the static benchmark establishes a universal liquid network, all-temperature rate or measured macroscopic transport coefficient."
      ],
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "M-phys-liquid-organization-source-scope",
      "kind": "method",
      "statement": "Keep the common experimental spatial reanalysis separate from the finite computational dynamics study. Synthesize their positive evidence only at the level of statistical liquid structure and model-dependent reconfiguration, preserving temperatures, correction inputs, distance cutoffs, event endpoints and correlation ranks. Do not turn static pair order into a unique dynamic network, interpret model switches as measured molecular lifetimes, or assign macroscopic response merely from the liquid-organization name.",
      "scope": "Two-context literature-synthesis method for complete original card /12.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints",
          "role": "method",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /12 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The positive scope is ambient-water spatial statistics plus a separately supplied finite model of liquid-water reorientation. Spatial statistics can coexist with changing neighbors. Persistence of an equilibrium distribution is an additional modelling statement, not a measured neighbor or network lifetime.",
        "Original fluctuating clusters, network-like correlations and continuously reconfiguring constraints are narrowed: radial pair data do not uniquely identify a network or cluster, and the trajectory mechanism depends on the supplied geometric/model definitions.",
        "Equilibrium statistical correlation does not by itself prove a driven nonequilibrium self-organization mechanism, universal collective coordination law or a new stable bounded entity.",
        "The selected liquid does not require prior crystallization. There is no necessary crystal-to-liquid causal stage or universal position between isolated motion and crystalline order derived from these two publications.",
        "Viscosity, surface tension, dielectric response and cooperative transport are original proposed consequences. They are not measured or quantitatively derived by the selected reanalysis and reorientation model. Referenced prior relaxation experiments are not imported as newly reviewed studies.",
        "Original necessary parents 2.6 dispersion, 2.7 hydrogen bonds and 2.8 molecular polarization are relevant descriptions for particular liquids, not universal prerequisites proven here. The selected SPC/E model does not estimate their independent causal fractions or prove that every liquid is polar or hydrogen bonded.",
        "Original weights 0.4/0.35/0.25, directions [2], modes [0,1]/[0,1]/[1], dependency type 10 and arising roles remain catalogue provenance without an admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, all N_min=N_crit=3 and null N_sat are catalogue defaults. The coordination integral, three-body switch illustration and finite 256-molecule simulation do not establish a universal three-molecule threshold, three hydrogen bonds or a minimum cluster lifetime.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display choices. The SOMA higher-order pattern label is not an independently measured physical carrier or an additional causal law.",
        "Generic statistical-mechanics/MD and scattering/spectroscopy/viscosity/diffusion/dynamic-structure evidence placeholders are replaced only by the actually read structural reanalysis and computational model. No separate dynamic-structure-factor experiment, spectroscopy acquisition or bulk transport measurement is invented.",
        "The two publications do not share a newly fitted model or jointly validate one unique network. The 2006 dynamics model was not calibrated against the later 2013 benchmark in this reconstruction.",
        "No new acquisition, full underlying-paper review, auxiliary-data download, raw-data refit, diffraction/window replay, molecular-dynamics execution, lifetime distribution, force-field fit or independent empirical reproduction is claimed."
      ],
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "C-phys-liquid-organization-source-scope",
      "kind": "review-finding",
      "statement": "The selected ambient-water X-ray reanalysis supports finite ensemble-averaged radial oxygen shell structure under the reported conditions. A separate rigid-SPC/E simulation and jump/frame model supports a specified picture of hydrogen-bond acceptor exchange and orientational reconfiguration with distinct correlation time scales. Together these provide bounded positive structural and dynamical descriptions of a liquid, while retaining the distinction between measured-derived spatial correlations and computational trajectories. They establish neither universal self-organization, uniquely observed networks, obligatory crystal precursors nor necessary dispersion/hydrogen-bond/dipole fractions for all liquids.",
      "scope": "Literature synthesis of two distinct primary contexts with original /12 fully dispositioned.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints",
          "role": "supports",
          "note": "Actually read primary author-uploaded published-text passage; no new acquisition, raw-data fit or simulation replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /12 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The positive scope is ambient-water spatial statistics plus a separately supplied finite model of liquid-water reorientation. Spatial statistics can coexist with changing neighbors. Persistence of an equilibrium distribution is an additional modelling statement, not a measured neighbor or network lifetime.",
        "Original fluctuating clusters, network-like correlations and continuously reconfiguring constraints are narrowed: radial pair data do not uniquely identify a network or cluster, and the trajectory mechanism depends on the supplied geometric/model definitions.",
        "Equilibrium statistical correlation does not by itself prove a driven nonequilibrium self-organization mechanism, universal collective coordination law or a new stable bounded entity.",
        "The selected liquid does not require prior crystallization. There is no necessary crystal-to-liquid causal stage or universal position between isolated motion and crystalline order derived from these two publications.",
        "Viscosity, surface tension, dielectric response and cooperative transport are original proposed consequences. They are not measured or quantitatively derived by the selected reanalysis and reorientation model. Referenced prior relaxation experiments are not imported as newly reviewed studies.",
        "Original necessary parents 2.6 dispersion, 2.7 hydrogen bonds and 2.8 molecular polarization are relevant descriptions for particular liquids, not universal prerequisites proven here. The selected SPC/E model does not estimate their independent causal fractions or prove that every liquid is polar or hydrogen bonded.",
        "Original weights 0.4/0.35/0.25, directions [2], modes [0,1]/[0,1]/[1], dependency type 10 and arising roles remain catalogue provenance without an admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, all N_min=N_crit=3 and null N_sat are catalogue defaults. The coordination integral, three-body switch illustration and finite 256-molecule simulation do not establish a universal three-molecule threshold, three hydrogen bonds or a minimum cluster lifetime.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display choices. The SOMA higher-order pattern label is not an independently measured physical carrier or an additional causal law.",
        "Generic statistical-mechanics/MD and scattering/spectroscopy/viscosity/diffusion/dynamic-structure evidence placeholders are replaced only by the actually read structural reanalysis and computational model. No separate dynamic-structure-factor experiment, spectroscopy acquisition or bulk transport measurement is invented.",
        "The two publications do not share a newly fitted model or jointly validate one unique network. The 2006 dynamics model was not calibrated against the later 2013 benchmark in this reconstruction.",
        "No new acquisition, full underlying-paper review, auxiliary-data download, raw-data refit, diffraction/window replay, molecular-dynamics execution, lifetime distribution, force-field fit or independent empirical reproduction is claimed."
      ],
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:liquid-correlation-observable-boundary",
      "name": "Static liquid pair structure and dynamic-correlation boundary",
      "kind": "definition",
      "description": "For the selected ambient-water structure analysis, the oxygen-oxygen pair-distribution function g_OO(r) describes a radial spatial correlation of oxygen positions. A distance-shell coordination is an integral of 4*pi*rho_O*r^2*g_OO(r) over stated radial bounds. It is distinct from a unique angular hydrogen-bond network, cluster identity or time correlation. In the selected dynamics model, C_n(t)=average P_n[u_OH(0) dot u_OH(t)] characterizes orientational decorrelation, while a completed hydrogen-bond partner exchange uses its own state definition and endpoint conditions. Static pair structure, orientational relaxation, exchange waiting time, angular-event duration and molecular persistence are different quantities.",
      "claimIds": [
        "D-phys-liquid-correlation-observable-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        }
      ],
      "openObligations": [
        "A radial two-body distribution does not uniquely determine angular correlations, a hydrogen-bond graph, fluctuating clusters, an interaction potential or a lifetime.",
        "Distance-shell oxygen coordination is not automatically the number of hydrogen bonds or proof of tetrahedral coordination.",
        "A statistical stationary distribution can coexist with changing molecular neighbors. No self-maintaining nonequilibrium mechanism or universal self-organization criterion is inferred from that fact alone."
      ]
    },
    {
      "id": "phys:spce-water-reorientation-model",
      "name": "Finite rigid-SPC/E water-reorientation model",
      "kind": "definition",
      "description": "The selected Laage-Hynes calculation uses 256 rigid SPC/E water molecules in a periodic cubic box, Ewald treatment of long-range forces and a 0.5 fs classical molecular-dynamics step. After 50 ps equilibration at 300 K and density 1 g/cm^3, it analyzes a 75 ps microcanonical trajectory. Hydrogen bonds are assigned by oxygen separation and OH-to-OO angular cutoffs of 3.5 angstrom and 30 degrees. For the ensemble around a successful acceptor switch, these bounds are extended to 4.0 angstrom and 50 degrees. This is a supplied finite classical force-field and event-selection model, rather than an observed trajectory of individual real molecules.",
      "claimIds": [
        "D-phys-spce-water-reorientation-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble"
        }
      ],
      "openObligations": [
        "The geometric state definition and the broader switch-selection bounds must remain distinct; no definition-independent hydrogen-bond lifetime follows.",
        "SPC/E is the explicitly named rigid model. No TIP water model, ab initio force field, bond dissociation, nuclear quantum correction or independently derived potential parameters are substituted.",
        "These simulations precede the Skinner 2013 benchmark. No calibration to that later dataset, common fitted likelihood or raw experimental trajectory is claimed."
      ]
    },
    {
      "id": "phys:skinner2013-water-context",
      "name": "Common ambient-water X-ray reanalysis context",
      "kind": "context",
      "description": "Reanalyze the four reported ambient liquid-H2O X-ray datasets, APS, SPring-8, SSRL1 and SSRL2, with their stated temperatures between 22 and 26 degrees C. Keep the different high-energy/non-Compton-discriminating and lower-energy/analyzer approaches distinct. Use common scattering normalization and the specified quantum molecular form-factor input; subtract the literature O-H contribution in Q space, retain the small H-H approximation and sensitivity checks, and Fourier transform the isolated S_OO(Q) with the declared variable Lorch window and dataset-specific Q range. Retain the source separate statistical error, normalization/calibration limits and between-dataset comparison.",
      "claimIds": [
        "M-phys-skinner2013-water-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement"
        }
      ],
      "openObligations": [
        "The underlying acquisition papers and imported neutron O-H, form-factor and comparison simulation sources were not separately read or replayed. They remain declared inputs to this reviewed reanalysis, not newly admitted independent studies.",
        "The four datasets share the reanalysis conventions and imported correction inputs. Their comparison is not four independent likelihoods for every final derived quantity.",
        "Figure 10 compares all four datasets with Q_max=23,18,15.5,13 inverse angstrom for APS,SPring-8,SSRL1,SSRL2 respectively. Figure 11 and Table I use APS,SPring-8,SSRL1; SSRL2 is excluded there because of poorer useful Q range and step.",
        "The text-rendered Table I gives Q_max footnotes 21.8 and 14.8 inverse angstrom, distinct from Figure 10 plotting cutoffs. The table typography and the apparent SPring-8 footnote/cutoff discrepancy were not checked visually or resolved; no common cutoff or inferred extended dataset is invented.",
        "Equation 14 estimates statistical input errors as twice neighboring S_OO(Q) differences. Normalization/calibration uncertainty and between-dataset variation are separate from those bars; no full covariance or universal one-sigma interpretation is reconstructed."
      ]
    },
    {
      "id": "phys:laage2006-water-context",
      "name": "SPC/E switch and orientational-correlation context",
      "kind": "context",
      "description": "Use the stated rigid-SPC/E trajectory and geometric hydrogen-bond model to collect more than 16000 successful acceptor-switch events. Average paths centered on exchange, with the broader geometric bounds used for that selected ensemble. For the forward completed-switch correlation, use the source absorbing endpoint convention so subsequent back reaction or rupture does not contribute. Analyze orientational correlations over the ensemble of all OH bonds and fit their long-time components separately from the fast librational decay. Compare the original jump model and its extension including slower OO-frame reorientation as interpretations of this same simulation.",
      "claimIds": [
        "M-phys-laage2006-water-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints"
        }
      ],
      "openObligations": [
        "The 16000 switches are events within the finite simulated trajectory, not 16000 independent experimental measurements or long-lived molecular clusters.",
        "Absorbing endpoint conditions select a forward completed-switch rate. This differs from transient geometric bond breaking/reforming and is not a unique continuous or intermittent lifetime for every hydrogen-bond definition.",
        "Reported agreement with ranges from earlier spectroscopy and dielectric studies is the authors comparison. Those underlying experimental publications were not separately reviewed, pooled or replayed here.",
        "No per-event confidence distribution, new trajectory, nuclear-quantum correction, potential fit or reproduced correlation analysis is supplied."
      ]
    },
    {
      "id": "phys:skinner-water-pair-order",
      "name": "Ambient-water radial shell correlations and cutoff-dependent coordination",
      "kind": "scoped-process",
      "description": "The common ambient-water X-ray reanalysis supports nonuniform radial oxygen-oxygen correlations, with recommended first-maximum position 2.80(1) angstrom and dimensionless height 2.57(5). The reported oxygen coordination is 4.3(1) when integrating 4*pi*rho_O*r^2*g_OO(r) from 2.4 to 3.30 angstrom. For the APS example it becomes 4.6(1) if the upper cutoff is 3.40 angstrom. This is finite statistical shell structure in the liquid, not a rigid lattice or a unique hydrogen-bond network.",
      "claimIds": [
        "C-phys-skinner-water-pair-order"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement"
        }
      ],
      "openObligations": [
        "The parenthesized errors are the publication estimates with statistical and expected normalization/calibration contributions. No new confidence level, raw-data covariance fit or precision beyond the source is assigned.",
        "The recommended first peak is not simply the arithmetic mean of all four datasets. Figure 11 averages the three selected curves; Table I excludes SSRL2 and retains Q-truncation conditions.",
        "The 3.30 angstrom cutoff follows the minimum in r^2*g_OO(r), not the first minimum in g_OO(r). The resulting 4.3 coordination is not a measured number of hydrogen bonds or proof of tetrahedral geometry.",
        "Static pair correlations do not measure how long an individual neighbor, cluster, hydrogen bond or molecule persists, nor do they directly determine viscosity, surface tension, dielectric relaxation or transport."
      ]
    },
    {
      "id": "phys:laage-water-reorientation",
      "name": "Computed water acceptor exchange and orientational reconfiguration",
      "kind": "scoped-process",
      "description": "For the stated rigid-SPC/E liquid-water model, the reported trajectories and correlations support large, concerted OH reorientation with exchange of hydrogen-bond acceptors, together with a slower between-switch OO-frame contribution. The selected angular event takes about 250 fs; the forward completed-switch correlation gives 1.8 ps; the rank-two long-time orientational decay fitted directly from the MD trajectory is 2.0 ps. Table 1 gives 1.6 ps for the extended-jump-model rank-two prediction. These distinct results describe statistical reconfiguration under the declared simulation/event definitions, not directly measured molecule or cluster lifetimes.",
      "claimIds": [
        "C-phys-laage-water-reorientation"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints"
        }
      ],
      "openObligations": [
        "The 1.6 ps extended-model and 2.0 ps direct-MD rank-two values are not numerically identical. Their source comparison is not a newly fitted uncertainty-weighted validation or proof of one exact universal time.",
        "The cited experimental rank-two range 1.7-2.6 ps comes from earlier studies, not a new experiment in this paper or independently reviewed data here. Single-molecule rank-one time inferred from collective dielectric relaxation is model dependent, and rank-three time was not then directly measured in the source account.",
        "The completed-switch time depends on its absorbing condition and differs from shorter transient bond-breaking/reforming. Reorientation, hydrogen-bond partner exchange and molecular chemical identity must not be conflated.",
        "Neither this finite classical model nor the static benchmark establishes a universal liquid network, all-temperature rate or measured macroscopic transport coefficient."
      ]
    },
    {
      "id": "phys:liquid-organization-source-scope",
      "name": "Scoped liquid-water structure and dynamical-organization evidence",
      "kind": "scoped-process",
      "description": "The selected ambient-water X-ray reanalysis supports finite ensemble-averaged radial oxygen shell structure under the reported conditions. A separate rigid-SPC/E simulation and jump/frame model supports a specified picture of hydrogen-bond acceptor exchange and orientational reconfiguration with distinct correlation time scales. Together these provide bounded positive structural and dynamical descriptions of a liquid, while retaining the distinction between measured-derived spatial correlations and computational trajectories. They establish neither universal self-organization, uniquely observed networks, obligatory crystal precursors nor necessary dispersion/hydrogen-bond/dipole fractions for all liquids.",
      "claimIds": [
        "C-phys-liquid-organization-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination"
        },
        {
          "sourceId": "skinner2013-water-pair-distribution",
          "locator": "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times"
        },
        {
          "sourceId": "laage-hynes2006-water-reorientation",
          "locator": "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The positive scope is ambient-water spatial statistics plus a separately supplied finite model of liquid-water reorientation. Spatial statistics can coexist with changing neighbors. Persistence of an equilibrium distribution is an additional modelling statement, not a measured neighbor or network lifetime.",
        "Original fluctuating clusters, network-like correlations and continuously reconfiguring constraints are narrowed: radial pair data do not uniquely identify a network or cluster, and the trajectory mechanism depends on the supplied geometric/model definitions.",
        "Equilibrium statistical correlation does not by itself prove a driven nonequilibrium self-organization mechanism, universal collective coordination law or a new stable bounded entity.",
        "The selected liquid does not require prior crystallization. There is no necessary crystal-to-liquid causal stage or universal position between isolated motion and crystalline order derived from these two publications.",
        "Viscosity, surface tension, dielectric response and cooperative transport are original proposed consequences. They are not measured or quantitatively derived by the selected reanalysis and reorientation model. Referenced prior relaxation experiments are not imported as newly reviewed studies.",
        "Original necessary parents 2.6 dispersion, 2.7 hydrogen bonds and 2.8 molecular polarization are relevant descriptions for particular liquids, not universal prerequisites proven here. The selected SPC/E model does not estimate their independent causal fractions or prove that every liquid is polar or hydrogen bonded.",
        "Original weights 0.4/0.35/0.25, directions [2], modes [0,1]/[0,1]/[1], dependency type 10 and arising roles remain catalogue provenance without an admitted causal estimator or universal necessity.",
        "Original carrier group 1/type 0, all N_min=N_crit=3 and null N_sat are catalogue defaults. The coordination integral, three-body switch illustration and finite 256-molecule simulation do not establish a universal three-molecule threshold, three hydrogen bonds or a minimum cluster lifetime.",
        "Original Level 2, Phase 2, TypeRole 2, Science [1,2], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display choices. The SOMA higher-order pattern label is not an independently measured physical carrier or an additional causal law.",
        "Generic statistical-mechanics/MD and scattering/spectroscopy/viscosity/diffusion/dynamic-structure evidence placeholders are replaced only by the actually read structural reanalysis and computational model. No separate dynamic-structure-factor experiment, spectroscopy acquisition or bulk transport measurement is invented.",
        "The two publications do not share a newly fitted model or jointly validate one unique network. The 2006 dynamics model was not calibrated against the later 2013 benchmark in this reconstruction.",
        "No new acquisition, full underlying-paper review, auxiliary-data download, raw-data refit, diffraction/window replay, molecular-dynamics execution, lifetime distribution, force-field fit or independent empirical reproduction is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:skinner2013-water-context-skinner-water-pair-order",
      "source": "phys:skinner2013-water-context",
      "target": "phys:skinner-water-pair-order",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-skinner2013-water-context"
      ],
      "role": "measurement-context",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis"
      ]
    },
    {
      "id": "physics:liquid-correlation-observable-boundary-skinner-water-pair-order",
      "source": "phys:liquid-correlation-observable-boundary",
      "target": "phys:skinner-water-pair-order",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-skinner-water-pair-order"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis"
      ]
    },
    {
      "id": "physics:laage2006-water-context-laage-water-reorientation",
      "source": "phys:laage2006-water-context",
      "target": "phys:laage-water-reorientation",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-laage2006-water-context"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:spce-water-reorientation-model-laage-water-reorientation",
      "source": "phys:spce-water-reorientation-model",
      "target": "phys:laage-water-reorientation",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-laage-water-reorientation"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:liquid-correlation-observable-boundary-laage-water-reorientation",
      "source": "phys:liquid-correlation-observable-boundary",
      "target": "phys:laage-water-reorientation",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-laage-water-reorientation"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:liquid-correlation-observable-boundary-liquid-organization-source-scope",
      "source": "phys:liquid-correlation-observable-boundary",
      "target": "phys:liquid-organization-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liquid-organization-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:spce-water-reorientation-model-liquid-organization-source-scope",
      "source": "phys:spce-water-reorientation-model",
      "target": "phys:liquid-organization-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liquid-organization-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:skinner-water-pair-order-liquid-organization-source-scope",
      "source": "phys:skinner-water-pair-order",
      "target": "phys:liquid-organization-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liquid-organization-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    },
    {
      "id": "physics:laage-water-reorientation-liquid-organization-source-scope",
      "source": "phys:laage-water-reorientation",
      "target": "phys:liquid-organization-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liquid-organization-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The declared finite context, model or result conditions this interpretation without transferring static observables into unmeasured lifetimes or counting independent replication.",
      "contextIds": [
        "skinner2013-water-reanalysis",
        "laage2006-water-dynamics"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:liquid-correlation-observable-boundary",
      "role": "definition",
      "denotes": "Static liquid pair structure and dynamic-correlation boundary under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-liquid-correlation-observable-boundary"
      ]
    },
    {
      "nodeId": "phys:spce-water-reorientation-model",
      "role": "definition",
      "denotes": "Finite rigid-SPC/E water-reorientation model under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-spce-water-reorientation-model"
      ]
    },
    {
      "nodeId": "phys:skinner2013-water-context",
      "role": "experimental-context",
      "denotes": "Common ambient-water X-ray reanalysis context under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-skinner2013-water-context"
      ]
    },
    {
      "nodeId": "phys:laage2006-water-context",
      "role": "model-context",
      "denotes": "SPC/E switch and orientational-correlation context under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-laage2006-water-context"
      ]
    },
    {
      "nodeId": "phys:skinner-water-pair-order",
      "role": "scoped-phenomenon",
      "denotes": "Ambient-water radial shell correlations and cutoff-dependent coordination under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-skinner-water-pair-order"
      ]
    },
    {
      "nodeId": "phys:laage-water-reorientation",
      "role": "scoped-phenomenon",
      "denotes": "Computed water acceptor exchange and orientational reconfiguration under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-laage-water-reorientation"
      ]
    },
    {
      "nodeId": "phys:liquid-organization-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped liquid-water structure and dynamical-organization evidence under the stated finite model, reanalysis and interpretation boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-liquid-organization-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "skinner2013-water-reanalysis",
      "sourceId": "skinner2013-water-pair-distribution",
      "studyType": "experimental-reanalysis",
      "doi": "10.1063/1.4790861",
      "journal": "The Journal of Chemical Physics",
      "volume": "138",
      "issue": "7",
      "pages": "074506",
      "system": "Ambient liquid H2O radial oxygen correlations from four previously acquired X-ray datasets",
      "preparation": "Reanalyze the four reported ambient liquid-H2O X-ray datasets, APS, SPring-8, SSRL1 and SSRL2, with their stated temperatures between 22 and 26 degrees C. Keep the different high-energy/non-Compton-discriminating and lower-energy/analyzer approaches distinct. Use common scattering normalization and the specified quantum molecular form-factor input; subtract the literature O-H contribution in Q space, retain the small H-H approximation and sensitivity checks, and Fourier transform the isolated S_OO(Q) with the declared variable Lorch window and dataset-specific Q range. Retain the source separate statistical error, normalization/calibration limits and between-dataset comparison.",
      "observable": "Derived static S_OO(Q),g_OO(r), peak quantities and cutoff-integrated coordination",
      "finding": "The common ambient-water X-ray reanalysis supports nonuniform radial oxygen-oxygen correlations, with recommended first-maximum position 2.80(1) angstrom and dimensionless height 2.57(5). The reported oxygen coordination is 4.3(1) when integrating 4*pi*rho_O*r^2*g_OO(r) from 2.4 to 3.30 angstrom. For the APS example it becomes 4.6(1) if the upper cutoff is 3.40 angstrom. This is finite statistical shell structure in the liquid, not a rigid lattice or a unique hydrogen-bond network.",
      "limitations": [
        "The underlying acquisition papers and imported neutron O-H, form-factor and comparison simulation sources were not separately read or replayed. They remain declared inputs to this reviewed reanalysis, not newly admitted independent studies.",
        "The four datasets share the reanalysis conventions and imported correction inputs. Their comparison is not four independent likelihoods for every final derived quantity.",
        "Figure 10 compares all four datasets with Q_max=23,18,15.5,13 inverse angstrom for APS,SPring-8,SSRL1,SSRL2 respectively. Figure 11 and Table I use APS,SPring-8,SSRL1; SSRL2 is excluded there because of poorer useful Q range and step.",
        "The text-rendered Table I gives Q_max footnotes 21.8 and 14.8 inverse angstrom, distinct from Figure 10 plotting cutoffs. The table typography and the apparent SPring-8 footnote/cutoff discrepancy were not checked visually or resolved; no common cutoff or inferred extended dataset is invented.",
        "Equation 14 estimates statistical input errors as twice neighboring S_OO(Q) differences. Normalization/calibration uncertainty and between-dataset variation are separate from those bars; no full covariance or universal one-sigma interpretation is reconstructed.",
        "The parenthesized errors are the publication estimates with statistical and expected normalization/calibration contributions. No new confidence level, raw-data covariance fit or precision beyond the source is assigned.",
        "The recommended first peak is not simply the arithmetic mean of all four datasets. Figure 11 averages the three selected curves; Table I excludes SSRL2 and retains Q-truncation conditions.",
        "The 3.30 angstrom cutoff follows the minimum in r^2*g_OO(r), not the first minimum in g_OO(r). The resulting 4.3 coordination is not a measured number of hydrogen bonds or proof of tetrahedral geometry.",
        "Static pair correlations do not measure how long an individual neighbor, cluster, hydrogen bond or molecule persists, nor do they directly determine viscosity, surface tension, dielectric relaxation or transport."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Published pages 074506-1 to 074506-4, Introduction and Section II Equations 1-9: pair-distribution meaning, self/intra/intermolecular normalization, form-factor inputs and Fourier relation",
        "Published page 074506-4, selected Section III APS preparation passage, and page 074506-5 Figure 2 caption: four ambient-water X-ray datasets, temperatures and experimental approaches",
        "Published pages 074506-6 to 074506-7, Section IV Equations 10-11 and Figures 3-5 captions: finite Q-range, modification function, peak broadening and truncation artifacts",
        "Published pages 074506-8 to 074506-9, Section V Equations 12-13 and Figures 6-8 captions: removal of intermolecular O-H contribution and small H-H approximation",
        "Published pages 074506-9 to 074506-11, Section VI Equations 14-15, Figures 9-11 captions and Table I: statistical/systematic uncertainty, three-dataset comparison, recommended peak and cutoff-dependent coordination",
        "Published page 074506-11, Section VII: finite-range ambient-water pair-correlation conclusions and supplementary-data statement"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.4790861",
      "correctionCheck": "Actually read the declared published-page body passages and figure/table captions in the published-text copy uploaded by author Lawrie Skinner. Figures were not visually inspected, the publisher PDF was not obtained, and the supplement/numerical data were not downloaded. The exact analytical mapping was read as text but no full symbolic or raw-data replay is claimed. Selected Section III preparation and Figure 2 caption were read, not every apparatus paragraph in that section. Underlying acquisition/form-factor/neutron/comparison-model publications were not separately read. Publisher identity and Crossref metadata verified: JCP138(7),074506, online20 February2013 (print metadata21 February2013). No update-to/correction relation in the checked Crossref record and no linked correction found in the bounded DOI/title primary-record search; not an exhaustive absence claim."
    },
    {
      "id": "laage2006-water-dynamics",
      "sourceId": "laage-hynes2006-water-reorientation",
      "studyType": "computational-analysis",
      "doi": "10.1126/science.1122154",
      "journal": "Science",
      "volume": "311",
      "issue": "5762",
      "pages": "832-835",
      "system": "Finite rigid-SPC/E bulk liquid-water acceptor exchange and orientational correlations",
      "preparation": "Use the stated rigid-SPC/E trajectory and geometric hydrogen-bond model to collect more than 16000 successful acceptor-switch events. Average paths centered on exchange, with the broader geometric bounds used for that selected ensemble. For the forward completed-switch correlation, use the source absorbing endpoint convention so subsequent back reaction or rupture does not contribute. Analyze orientational correlations over the ensemble of all OH bonds and fit their long-time components separately from the fast librational decay. Compare the original jump model and its extension including slower OO-frame reorientation as interpretations of this same simulation.",
      "observable": "Computed switch-centered paths and separately defined forward-exchange/orientational time correlations",
      "finding": "For the stated rigid-SPC/E liquid-water model, the reported trajectories and correlations support large, concerted OH reorientation with exchange of hydrogen-bond acceptors, together with a slower between-switch OO-frame contribution. The selected angular event takes about 250 fs; the forward completed-switch correlation gives 1.8 ps; the rank-two long-time orientational decay fitted directly from the MD trajectory is 2.0 ps. Table 1 gives 1.6 ps for the extended-jump-model rank-two prediction. These distinct results describe statistical reconfiguration under the declared simulation/event definitions, not directly measured molecule or cluster lifetimes.",
      "limitations": [
        "The 16000 switches are events within the finite simulated trajectory, not 16000 independent experimental measurements or long-lived molecular clusters.",
        "Absorbing endpoint conditions select a forward completed-switch rate. This differs from transient geometric bond breaking/reforming and is not a unique continuous or intermittent lifetime for every hydrogen-bond definition.",
        "Reported agreement with ranges from earlier spectroscopy and dielectric studies is the authors comparison. Those underlying experimental publications were not separately reviewed, pooled or replayed here.",
        "No per-event confidence distribution, new trajectory, nuclear-quantum correction, potential fit or reproduced correlation analysis is supplied.",
        "The 1.6 ps extended-model and 2.0 ps direct-MD rank-two values are not numerically identical. Their source comparison is not a newly fitted uncertainty-weighted validation or proof of one exact universal time.",
        "The cited experimental rank-two range 1.7-2.6 ps comes from earlier studies, not a new experiment in this paper or independently reviewed data here. Single-molecule rank-one time inferred from collective dielectric relaxation is model dependent, and rank-three time was not then directly measured in the source account.",
        "The completed-switch time depends on its absorbing condition and differs from shorter transient bond-breaking/reforming. Reorientation, hydrogen-bond partner exchange and molecular chemical identity must not be conflated.",
        "Neither this finite classical model nor the static benchmark establishes a universal liquid network, all-temperature rate or measured macroscopic transport coefficient."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Published page 832, body and Figure 1 caption: rigid SPC/E molecular dynamics, finite cell and trajectory, geometric hydrogen-bond definitions and switch-centered ensemble",
        "Published pages 832-833, body and Figures 1-3 captions: computed concerted acceptor exchange, angular-jump duration and network-coordination interpretation",
        "Published pages 833-834, Equations 1-3, Figure 4 caption and Table 1: absorbing-condition switch correlation, jump/frame model, orientational correlation ranks and distinct relaxation times",
        "Published page 835, conclusion and Notes 21 and 27: conditional simulation support, experimental interpretation limits and distinction from unstable broken-bond endpoints"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1126/science.1122154",
      "correctionCheck": "Read the complete scientific body on published pages832-835, Equations1-3 as text, Figures1-4/Table1 captions and entries, and selected Notes21/27 in the published-text copy uploaded by coauthor James Hynes. Figures were not visually inspected and the exact printed equation typography was not checked from an obtained PDF; no unverified closed-form jump formula is admitted. Exclude the unrelated turbulent-flow article following on page835. Publisher PDF and raw trajectories not obtained; no simulation/correlation replay or separately reviewed earlier experimental datasets. Crossref/published copy metadata agree on Science311(5762),832-835, issue10 February2006 and body says online26 January2006. Crossref has-review relation is an external appraisal, not a correction. No update-to/correction relation or explicit linked erratum found in the bounded check; not an exhaustive absence claim."
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
    }
  ]
};

/** Keep measured-derived spatial statistics separate from finite-model trajectories and all definitions of liquid correlation times. */
export function validateLiquidOrganizationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Liquid-organization ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
