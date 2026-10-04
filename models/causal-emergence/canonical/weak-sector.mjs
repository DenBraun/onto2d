import assert from "node:assert/strict";

export const WEAK_SECTOR_CHECKS = new Map();
export const WEAK_SECTOR_ANALYTICAL_SOURCES = new Map();
export const WEAK_SECTOR_ADMISSION = {
  "definitions": [
    [
      "phys:weak-gauge-currents",
      "D-phys-weak-gauge-currents"
    ],
    [
      "phys:low-energy-weak-exchange",
      "D-phys-low-energy-weak-exchange"
    ],
    [
      "phys:inclusive-decay-width-branching",
      "D-phys-inclusive-decay-width-branching"
    ],
    [
      "phys:resonance-lifetime-convention",
      "D-phys-resonance-lifetime-convention"
    ]
  ],
  "formalDependencies": [
    [
      "physics:standard-model-weak-gauge-currents",
      [
        "phys:standard-model",
        "phys:weak-gauge-currents"
      ]
    ],
    [
      "physics:higgs-doublet-background-weak-gauge-currents",
      [
        "phys:higgs-doublet-background",
        "phys:weak-gauge-currents"
      ]
    ],
    [
      "physics:weak-gauge-currents-low-energy-weak-exchange",
      [
        "phys:weak-gauge-currents",
        "phys:low-energy-weak-exchange"
      ]
    ],
    [
      "physics:higgs-doublet-background-low-energy-weak-exchange",
      [
        "phys:higgs-doublet-background",
        "phys:low-energy-weak-exchange"
      ]
    ],
    [
      "physics:internal-propagator-low-energy-weak-exchange",
      [
        "phys:internal-propagator",
        "phys:low-energy-weak-exchange"
      ]
    ],
    [
      "physics:inclusive-decay-width-branching-resonance-lifetime-convention",
      [
        "phys:inclusive-decay-width-branching",
        "phys:resonance-lifetime-convention"
      ]
    ],
    [
      "physics:internal-propagator-resonance-lifetime-convention",
      [
        "phys:internal-propagator",
        "phys:resonance-lifetime-convention"
      ]
    ]
  ],
  "contexts": [],
  "observations": [],
  "dependencies": [],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "pdg2025-resonances",
      "kind": "research-publication",
      "title": "Resonances: Review of Particle Physics, 2025 update",
      "authors": [
        "D. M. Asner",
        "C. Hanhart",
        "M. Mikhasenko"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-resonances.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-passages",
        "locators": [
          "Page 1, Section 50.1: isolated narrow-resonance interpretation and limits from thresholds, backgrounds and broad resonances",
          "Page 10, opening of Section 50.2, Equation 50.20 and the following two paragraphs: energy-plane pole mass/width, threshold-qualified lifetime relation and partial-width caution"
        ],
        "limit": "Read Section 50.1 on page1 and the opening of Section 50.2 on page 10 through the two paragraphs following Equation 50.20; visually checked the page 10 pole definition and qualifications. Revised August 2025; inspected edition footer 1 December 2025. No chapter-specific DOI is asserted. The remaining scattering theory, residues, coupled-channel constructions and example data analyses are not reviewed. The formal pole definition is not a W/Z line-shape or time-domain experimental reconstruction."
      }
    },
    {
      "id": "pdg2025-electroweak",
      "kind": "research-publication",
      "title": "Electroweak Model and Constraints on New Physics: Review of Particle Physics, 2025 update",
      "authors": [
        "J. de Blas",
        "S. Dittmaier",
        "R. Kogler"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-standard-model.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
          "Section 10.4.7, page 31: color multiplicities in fermion decay channels",
          "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses",
          "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary",
          "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis",
          "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization",
          "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries"
        ],
        "limit": "Revised November 2025; inspected PDF produced 15 April 2026. Pages 1-3 and 31 read and visually checked. Page 31 supplies the color convention only; its numerical predictions, global fits and cited experiments are not independently reviewed. The 2024 parent volume and this 2025 chapter update are distinct bibliographic scopes. No chapter-specific DOI is asserted. The weak-sector review additionally reads Section 10.2.4 on pages 9-11 and visually checks Equation 10.11-10.13 on page 10; pages 2-3 current and contact formulas were visually rechecked. Only these formal conventions are added: no global fit, quoted numerical mass/width or complete radiative/off-shell calculation is admitted."
      }
    },
    {
      "id": "pdg2025-kinematics",
      "kind": "research-publication",
      "title": "Kinematics: Review of Particle Physics, 2025 update",
      "authors": [
        "D. Miller",
        "D. R. Tovey",
        "J. D. Jackson"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-kinematics.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-passages",
        "locators": [
          "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "Page 2, Sections 49.3-49.4, Equations 49.10-49.12: narrow-width factorization, relative partial decay rates and rest-frame decay phase space",
          "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units"
        ],
        "limit": "Pages 1-2 were read, including Sections 49.1,49.3,49.4 and 49.4.1 through Equation 49.15; page 2 formulas were visually checked. The chapter says reviewed August 2021 and written January 2000; the inspected 2025 edition has a 1 December 2025 footer. The parent Review of Particle Physics DOI is not assigned as a distinct chapter DOI. Only the selected kinematic, partial-decay and exponential-survival conventions are admitted; no decay amplitude, detector result or fit is reconstructed. The deuteron Q sign remains a separate local inference from formal threshold conditions."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-weak-gauge-currents",
      "kind": "review-finding",
      "statement": "In the declared broken-phase Standard Model, W-plus and W-minus are spin-one fields of electric charge +e and -e; Z is neutral and spin one. With J_W^mu=sum_l nu-bar_l*gamma^mu*(1-gamma5)*l+sum_ij u-bar_i*gamma^mu*(1-gamma5)*V_ij*d_j, L_CC=-g/(2*sqrt(2))*(W-plus_mu*J_W^mu+h.c.). The tree neutral term is L_NC=-g/(2*cos(theta_W))*Z_mu*sum_f f-bar*gamma^mu*(gV_f-gA_f*gamma5)*f, where gV_f=T3_f-2*Q_f*sin(theta_W)^2 and gA_f=T3_f; T3_f is the isospin of the left-handed partner. Thus the stated quark charged current contains CKM mixing, while the tree Z current is flavor diagonal in this minimal mass basis.",
      "scope": "Formal definitions for the declared weak-sector model and unstable-resonance interpretation; experimental observations and fitted parameters remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Field assignments, spin-one and charge labels, chiral representations and the CKM matrix are model inputs. They are not independent spin or coupling measurements, a generated chirality or a derivation of the mass hierarchy. Neutrino mixing or masses require their separately specified extension; the minimal charged-current convention here does not supply that mechanism.",
        "Massive vector fields have three physical polarizations in the stated broken-phase description. The absence of a tree-level flavor-changing Z vertex does not exclude loop-induced flavor-changing neutral processes or nonminimal interactions.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    },
    {
      "id": "D-phys-low-energy-weak-exchange",
      "kind": "review-finding",
      "statement": "For the leading scalar denominator of a massive weak propagator, 1/(q^2-M_V^2)=-M_V^(-2)*[1+O(q^2/M_V^2)] when |q^2| is much smaller than M_V^2. With the declared charged-current normalization this yields the tree relation G_F/sqrt(2)=g^2/(8*M_W^2)=1/(2*v^2) for a local four-fermion approximation. Charged and neutral weak amplitudes retain their different currents; the contact description is distinct from a resonant production and decay process.",
      "scope": "Formal definitions for the declared weak-sector model and unstable-resonance interpretation; experimental observations and fitted parameters remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the leading low-energy tree approximation with light external fermions and |q^2| much smaller than M_W^2 or M_Z^2, away from the resonance. The scalar denominator alone omits vector numerators, external currents, longitudinal/Goldstone terms and radiative corrections needed for a complete gauge-consistent amplitude. It is not a production cross section, an on-shell W/Z event or an instantaneous action rule.",
        "Beta decay and charged-current flavor change use the charged current; neutral-current neutrino scattering uses the neutral current. Actual hadronic/nuclear matrix elements, flavor parameters, kinematic cuts and detector response are separate inputs. Short-range denotes this massive-exchange/low-energy description, not a universal sharp distance cutoff or a population of virtual mediator particles.",
        "The Fermi relation is a tree-level parameter identity, not a fresh measurement of G_F or a precision electroweak input-scheme conversion. The formal expansion is not an executable scientific check.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    },
    {
      "id": "D-phys-inclusive-decay-width-branching",
      "kind": "review-finding",
      "statement": "In the adopted inclusive weak-resonance decay convention, define Gamma_tot=sum_f Gamma_f over a complete, mutually exclusive channel partition and B_f=Gamma_f/Gamma_tot. The Gamma_f and Gamma_tot use the same energy-width and radiation convention; B_f is dimensionless. The LEP Z convention includes final-state QED/QCD corrections and nonfactorisable contributions so that its specified partial widths sum to its total width.",
      "scope": "Formal definitions for the declared weak-sector model and unstable-resonance interpretation; experimental observations and fitted parameters remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Sections 49.3-49.4, Equations 49.10-49.12: narrow-width factorization, relative partial decay rates and rest-frame decay phase space",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 31 and 34, Section 1.5.1, Equations 1.37 and 1.43-1.44; page 172, Section 7.2.1: inclusive total/partial widths and branching fractions",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Gamma values here have energy units; the corresponding decay rate is Gamma/hbar in inverse time. This must not silently redefine the inverse-time channel rate in the existing partial-lifetime convention. Branching fractions are dimensionless and refer to the same inclusive channel partition and total-width convention.",
        "Inclusive final states must specify their radiation and correction prescription and avoid double counting. A complete mutually exclusive set sums to the adopted total width; a selected visible sample need not be complete. Unseen channels, lepton universality and invisible-width subtraction are additional assumptions or inferences, not consequences of B_f=Gamma_f/Gamma_tot.",
        "The LEP Z account explicitly includes final-state QED/QCD and nonfactorisable terms in its partial widths. This supplied inclusive convention does not identify arbitrary complex-pole residues with nonnegative additive decay probabilities for every broad or coupled-channel resonance. Selected counts and detector line spread are not partial or total widths.",
        "These definitions do not reconstruct the source partial widths, total width, branching fractions, correlations or likelihood. Production-times-branching factorization requires its stated narrow-width approximation and selection treatment."
      ]
    },
    {
      "id": "D-phys-resonance-lifetime-convention",
      "kind": "review-finding",
      "statement": "Define the energy-plane resonance pole by sqrt(s_R)=M_E-i*Gamma_E/2 with positive M_E and Gamma_E. In the isolated-resonance exponential approximation, P(t_proper)=exp(-Gamma_E*t_proper/hbar) and tau_proper=hbar/Gamma_E. For fixed Lorentz factor gamma, the corresponding laboratory survival is exp(-Gamma_E*t_lab/(gamma*hbar)). This convention separates an inferred decay timescale from the reported line-shape parametrization.",
      "scope": "Formal definitions for the declared weak-sector model and unstable-resonance interpretation; experimental observations and fitted parameters remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-resonances",
          "locator": "Page 10, opening of Section 50.2, Equation 50.20 and the following two paragraphs: energy-plane pole mass/width, threshold-qualified lifetime relation and partial-width caution",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        },
        {
          "sourceId": "pdg2025-resonances",
          "locator": "Page 1, Section 50.1: isolated narrow-resonance interpretation and limits from thresholds, backgrounds and broad resonances",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries",
          "role": "supports",
          "note": "Supports only the stated formal convention and approximation boundary; no measurement or full amplitude is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The exponential rest-frame approximation applies to an isolated resonance with relevant thresholds well below it; it is not an exact survival law at every time or for broad/threshold-dominated states. A width-derived timescale is not a directly timed W/Z decay or an independent experiment.",
        "The energy-plane width Gamma_E=-2*Im(sqrt(s_R)) is distinct from a constant squared-mass-pole parameter defined by s_R=Mbar^2-i*Mbar*Gammabar; identifying them uses a narrow-width approximation. A running-width line-shape parameter is another convention requiring an explicit conversion. No numerical lifetime, pole conversion or width extraction is performed here.",
        "Gamma values here have energy units; the corresponding decay rate is Gamma/hbar in inverse time. This must not silently redefine the inverse-time channel rate in the existing partial-lifetime convention. Branching fractions are dimensionless and refer to the same inclusive channel partition and total-width convention.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:weak-gauge-currents",
      "name": "Weak vector fields and fermion currents",
      "kind": "definition",
      "description": "In the declared broken-phase Standard Model, W-plus and W-minus are spin-one fields of electric charge +e and -e; Z is neutral and spin one. With J_W^mu=sum_l nu-bar_l*gamma^mu*(1-gamma5)*l+sum_ij u-bar_i*gamma^mu*(1-gamma5)*V_ij*d_j, L_CC=-g/(2*sqrt(2))*(W-plus_mu*J_W^mu+h.c.). The tree neutral term is L_NC=-g/(2*cos(theta_W))*Z_mu*sum_f f-bar*gamma^mu*(gV_f-gA_f*gamma5)*f, where gV_f=T3_f-2*Q_f*sin(theta_W)^2 and gA_f=T3_f; T3_f is the isospin of the left-handed partner. Thus the stated quark charged current contains CKM mixing, while the tree Z current is flavor diagonal in this minimal mass basis.",
      "claimIds": [
        "D-phys-weak-gauge-currents"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis"
        }
      ],
      "openObligations": [
        "Field assignments, spin-one and charge labels, chiral representations and the CKM matrix are model inputs. They are not independent spin or coupling measurements, a generated chirality or a derivation of the mass hierarchy. Neutrino mixing or masses require their separately specified extension; the minimal charged-current convention here does not supply that mechanism.",
        "Massive vector fields have three physical polarizations in the stated broken-phase description. The absence of a tree-level flavor-changing Z vertex does not exclude loop-induced flavor-changing neutral processes or nonminimal interactions.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    },
    {
      "id": "phys:low-energy-weak-exchange",
      "name": "Low-energy massive weak exchange",
      "kind": "definition",
      "description": "For the leading scalar denominator of a massive weak propagator, 1/(q^2-M_V^2)=-M_V^(-2)*[1+O(q^2/M_V^2)] when |q^2| is much smaller than M_V^2. With the declared charged-current normalization this yields the tree relation G_F/sqrt(2)=g^2/(8*M_W^2)=1/(2*v^2) for a local four-fermion approximation. Charged and neutral weak amplitudes retain their different currents; the contact description is distinct from a resonant production and decay process.",
      "claimIds": [
        "D-phys-low-energy-weak-exchange"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 3, Equation 10.6 and the following low-momentum paragraph: effective four-fermion interaction and tree-level Fermi-constant normalization"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries"
        }
      ],
      "openObligations": [
        "Use the leading low-energy tree approximation with light external fermions and |q^2| much smaller than M_W^2 or M_Z^2, away from the resonance. The scalar denominator alone omits vector numerators, external currents, longitudinal/Goldstone terms and radiative corrections needed for a complete gauge-consistent amplitude. It is not a production cross section, an on-shell W/Z event or an instantaneous action rule.",
        "Beta decay and charged-current flavor change use the charged current; neutral-current neutrino scattering uses the neutral current. Actual hadronic/nuclear matrix elements, flavor parameters, kinematic cuts and detector response are separate inputs. Short-range denotes this massive-exchange/low-energy description, not a universal sharp distance cutoff or a population of virtual mediator particles.",
        "The Fermi relation is a tree-level parameter identity, not a fresh measurement of G_F or a precision electroweak input-scheme conversion. The formal expansion is not an executable scientific check.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    },
    {
      "id": "phys:inclusive-decay-width-branching",
      "name": "Inclusive decay widths and branching fractions",
      "kind": "definition",
      "description": "In the adopted inclusive weak-resonance decay convention, define Gamma_tot=sum_f Gamma_f over a complete, mutually exclusive channel partition and B_f=Gamma_f/Gamma_tot. The Gamma_f and Gamma_tot use the same energy-width and radiation convention; B_f is dimensionless. The LEP Z convention includes final-state QED/QCD corrections and nonfactorisable contributions so that its specified partial widths sum to its total width.",
      "claimIds": [
        "D-phys-inclusive-decay-width-branching"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Sections 49.3-49.4, Equations 49.10-49.12: narrow-width factorization, relative partial decay rates and rest-frame decay phase space"
        },
        {
          "sourceId": "lep2006-z-lineshape",
          "locator": "Author v3 PDF pages 31 and 34, Section 1.5.1, Equations 1.37 and 1.43-1.44; page 172, Section 7.2.1: inclusive total/partial widths and branching fractions"
        }
      ],
      "openObligations": [
        "Gamma values here have energy units; the corresponding decay rate is Gamma/hbar in inverse time. This must not silently redefine the inverse-time channel rate in the existing partial-lifetime convention. Branching fractions are dimensionless and refer to the same inclusive channel partition and total-width convention.",
        "Inclusive final states must specify their radiation and correction prescription and avoid double counting. A complete mutually exclusive set sums to the adopted total width; a selected visible sample need not be complete. Unseen channels, lepton universality and invisible-width subtraction are additional assumptions or inferences, not consequences of B_f=Gamma_f/Gamma_tot.",
        "The LEP Z account explicitly includes final-state QED/QCD and nonfactorisable terms in its partial widths. This supplied inclusive convention does not identify arbitrary complex-pole residues with nonnegative additive decay probabilities for every broad or coupled-channel resonance. Selected counts and detector line spread are not partial or total widths.",
        "These definitions do not reconstruct the source partial widths, total width, branching fractions, correlations or likelihood. Production-times-branching factorization requires its stated narrow-width approximation and selection treatment."
      ]
    },
    {
      "id": "phys:resonance-lifetime-convention",
      "name": "Energy-pole width and exponential proper lifetime",
      "kind": "definition",
      "description": "Define the energy-plane resonance pole by sqrt(s_R)=M_E-i*Gamma_E/2 with positive M_E and Gamma_E. In the isolated-resonance exponential approximation, P(t_proper)=exp(-Gamma_E*t_proper/hbar) and tau_proper=hbar/Gamma_E. For fixed Lorentz factor gamma, the corresponding laboratory survival is exp(-Gamma_E*t_lab/(gamma*hbar)). This convention separates an inferred decay timescale from the reported line-shape parametrization.",
      "claimIds": [
        "D-phys-resonance-lifetime-convention"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-resonances",
          "locator": "Page 10, opening of Section 50.2, Equation 50.20 and the following two paragraphs: energy-plane pole mass/width, threshold-qualified lifetime relation and partial-width caution"
        },
        {
          "sourceId": "pdg2025-resonances",
          "locator": "Page 1, Section 50.1: isolated narrow-resonance interpretation and limits from thresholds, backgrounds and broad resonances"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units"
        },
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.2.4, pages 9-11, Equations 10.11-10.13: momentum-dependent width, complex squared-mass pole, LEP mass/width convention and finite-width approximation boundaries"
        }
      ],
      "openObligations": [
        "The exponential rest-frame approximation applies to an isolated resonance with relevant thresholds well below it; it is not an exact survival law at every time or for broad/threshold-dominated states. A width-derived timescale is not a directly timed W/Z decay or an independent experiment.",
        "The energy-plane width Gamma_E=-2*Im(sqrt(s_R)) is distinct from a constant squared-mass-pole parameter defined by s_R=Mbar^2-i*Mbar*Gammabar; identifying them uses a narrow-width approximation. A running-width line-shape parameter is another convention requiring an explicit conversion. No numerical lifetime, pole conversion or width extraction is performed here.",
        "Gamma values here have energy units; the corresponding decay rate is Gamma/hbar in inverse time. This must not silently redefine the inverse-time channel rate in the existing partial-lifetime convention. Branching fractions are dimensionless and refer to the same inclusive channel partition and total-width convention.",
        "W/Z denote unstable resonance species or field excitations in these descriptions, not stable asymptotic carrier units, bounded objects with persistent classical tracks or an observed field-formation sequence. Original parent weights, universal carrier minima, SOMA type/phase order and generic arising or maintenance necessity are not admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:standard-model-weak-gauge-currents",
      "source": "phys:standard-model",
      "target": "phys:weak-gauge-currents",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared electroweak field representations and coupling conventions define these currents; this is not a measured sector-formation process.",
      "claimIds": [
        "D-phys-weak-gauge-currents"
      ]
    },
    {
      "id": "physics:higgs-doublet-background-weak-gauge-currents",
      "source": "phys:higgs-doublet-background",
      "target": "phys:weak-gauge-currents",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The supplied broken-phase single-doublet construction specifies the massive weak-field basis used in these current assignments; it does not independently establish observed spin or production.",
      "claimIds": [
        "D-phys-weak-gauge-currents"
      ]
    },
    {
      "id": "physics:weak-gauge-currents-low-energy-weak-exchange",
      "source": "phys:weak-gauge-currents",
      "target": "phys:low-energy-weak-exchange",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The current and coupling normalization determines the stated leading contact interaction; no selected detector events are generated by this definitional relation.",
      "claimIds": [
        "D-phys-low-energy-weak-exchange"
      ]
    },
    {
      "id": "physics:higgs-doublet-background-low-energy-weak-exchange",
      "source": "phys:higgs-doublet-background",
      "target": "phys:low-energy-weak-exchange",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The tree mass relation M_W=g*v/2 supplies the equality between the two declared Fermi-constant expressions, without a fit or renormalized-parameter identification.",
      "claimIds": [
        "D-phys-low-energy-weak-exchange"
      ]
    },
    {
      "id": "physics:internal-propagator-low-energy-weak-exchange",
      "source": "phys:internal-propagator",
      "target": "phys:low-energy-weak-exchange",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The internal-kernel role distinguishes a low-momentum amplitude factor from an observed mediator population; its massive weak denominator is specified here.",
      "claimIds": [
        "D-phys-low-energy-weak-exchange"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-resonance-lifetime-convention",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:resonance-lifetime-convention",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The energy-width versus inverse-time convention must be fixed before a width defines a decay timescale; inclusive fitted widths are not automatically the energy-plane pole width.",
      "claimIds": [
        "D-phys-resonance-lifetime-convention"
      ]
    },
    {
      "id": "physics:internal-propagator-resonance-lifetime-convention",
      "source": "phys:internal-propagator",
      "target": "phys:resonance-lifetime-convention",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The resonance pole belongs to an amplitude/kernel parametrization and does not supply a directly tracked unstable particle or a time-domain measurement.",
      "claimIds": [
        "D-phys-resonance-lifetime-convention"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:weak-gauge-currents",
      "role": "definition",
      "denotes": "In the declared broken-phase Standard Model, W-plus and W-minus are spin-one fields of electric charge +e and -e; Z is neutral and spin one. With J_W^mu=sum_l nu-bar_l*gamma^mu*(1-gamma5)*l+sum_ij u-bar_i*gamma^mu*(1-gamma5)*V_ij*d_j, L_CC=-g/(2*sqrt(2))*(W-plus_mu*J_W^mu+h.c.). The tree neutral term is L_NC=-g/(2*cos(theta_W))*Z_mu*sum_f f-bar*gamma^mu*(gV_f-gA_f*gamma5)*f, where gV_f=T3_f-2*Q_f*sin(theta_W)^2 and gA_f=T3_f; T3_f is the isospin of the left-handed partner. Thus the stated quark charged current contains CKM mixing, while the tree Z current is flavor diagonal in this minimal mass basis.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-weak-gauge-currents"
      ]
    },
    {
      "nodeId": "phys:low-energy-weak-exchange",
      "role": "definition",
      "denotes": "For the leading scalar denominator of a massive weak propagator, 1/(q^2-M_V^2)=-M_V^(-2)*[1+O(q^2/M_V^2)] when |q^2| is much smaller than M_V^2. With the declared charged-current normalization this yields the tree relation G_F/sqrt(2)=g^2/(8*M_W^2)=1/(2*v^2) for a local four-fermion approximation. Charged and neutral weak amplitudes retain their different currents; the contact description is distinct from a resonant production and decay process.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-low-energy-weak-exchange"
      ]
    },
    {
      "nodeId": "phys:inclusive-decay-width-branching",
      "role": "definition",
      "denotes": "In the adopted inclusive weak-resonance decay convention, define Gamma_tot=sum_f Gamma_f over a complete, mutually exclusive channel partition and B_f=Gamma_f/Gamma_tot. The Gamma_f and Gamma_tot use the same energy-width and radiation convention; B_f is dimensionless. The LEP Z convention includes final-state QED/QCD corrections and nonfactorisable contributions so that its specified partial widths sum to its total width.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-inclusive-decay-width-branching"
      ]
    },
    {
      "nodeId": "phys:resonance-lifetime-convention",
      "role": "definition",
      "denotes": "Define the energy-plane resonance pole by sqrt(s_R)=M_E-i*Gamma_E/2 with positive M_E and Gamma_E. In the isolated-resonance exponential approximation, P(t_proper)=exp(-Gamma_E*t_proper/hbar) and tau_proper=hbar/Gamma_E. For fixed Lorentz factor gamma, the corresponding laboratory survival is exp(-Gamma_E*t_lab/(gamma*hbar)). This convention separates an inferred decay timescale from the reported line-shape parametrization.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-resonance-lifetime-convention"
      ]
    }
  ]
};

/** Preserve formal current, low-energy and resonance conventions without invented evidence. */
export function validateWeakSectorContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing weak-sector ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Weak-sector ${kind} changed ${id}.${key}: preserve declared model and width scope`);
    }
  }
}
