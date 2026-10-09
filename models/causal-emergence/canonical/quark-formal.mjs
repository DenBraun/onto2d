import assert from "node:assert/strict";

export const QUARK_FORMAL_CHECKS = new Map();
export const QUARK_FORMAL_ANALYTICAL_SOURCES = new Map();
export const QUARK_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:quark-mass-prescription",
      "D-phys-quark-mass-prescription"
    ],
    [
      "phys:quark-electromagnetic-current",
      "D-phys-quark-electromagnetic-current"
    ],
    [
      "phys:quark-parton-response",
      "D-phys-quark-parton-response"
    ]
  ],
  "formalDependencies": [
    [
      "physics:qcd-quark-mass-prescription",
      [
        "phys:qcd",
        "phys:quark-mass-prescription"
      ]
    ],
    [
      "physics:quark-fields-quark-electromagnetic-current",
      [
        "phys:quark-fields",
        "phys:quark-electromagnetic-current"
      ]
    ],
    [
      "physics:quark-electromagnetic-current-quark-parton-response",
      [
        "phys:quark-electromagnetic-current",
        "phys:quark-parton-response"
      ]
    ],
    [
      "physics:quark-mass-prescription-quark-parton-response",
      [
        "phys:quark-mass-prescription",
        "phys:quark-parton-response"
      ]
    ],
    [
      "physics:inclusive-dis-response-quark-parton-response",
      [
        "phys:inclusive-dis-response",
        "phys:quark-parton-response"
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
  "entities": [
    {
      "id": "phys:quark-fields",
      "name": "Quark fields",
      "kind": "definition",
      "description": "The Standard Model has six spin-one-half quark flavors. Up, charm and top carry charge +2e/3; down, strange and bottom carry -e/3. QCD quark fields transform in the three-dimensional fundamental color representation.",
      "claimIds": [
        "D-phys-quark"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
        }
      ],
      "openObligations": [
        "Scattering, spectroscopy and decay records retain their own selected systems and model inputs. Independent detector/fit reconstruction, other flavor-specific observables and general confinement require separate evidence."
      ]
    },
    {
      "id": "phys:quark-mass-prescription",
      "name": "Quark mass prescription",
      "kind": "definition",
      "description": "A renormalized quark mass requires a prescription. The modified-minimal-subtraction mass mbar_q(mu_R) depends on the renormalization scale mu_R; the referenced summary table quotes u,d,s at 2 GeV and c,b at a scale equal to the respective running mass. A perturbative pole-mass prescription is distinct and has an ambiguity of order the QCD scale when related to observables.",
      "claimIds": [
        "D-phys-quark-mass-prescription"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions"
        }
      ],
      "openObligations": [
        "Any empirical extension requires its own preparation, response and inference scope; these formal conventions do not establish free colored particles or universal stability."
      ]
    },
    {
      "id": "phys:quark-electromagnetic-current",
      "name": "Quark electromagnetic current",
      "kind": "definition",
      "description": "With e>0 the positron charge, define the quark contribution J_em,q^mu=sum_f Q_f*sum_a qbar_fa*gamma^mu*q_fa and L_em,q=-e*A_mu*J_em,q^mu. Here f labels the declared quark flavors, a is a contracted fundamental-color index, and Q_f is +2/3 for u,c,t or -1/3 for d,s,b. This electromagnetic vector current is flavor diagonal in the stated mass basis.",
      "claimIds": [
        "D-phys-quark-electromagnetic-current"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary"
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        }
      ],
      "openObligations": [
        "Any empirical extension requires its own preparation, response and inference scope; these formal conventions do not establish free colored particles or universal stability."
      ]
    },
    {
      "id": "phys:quark-parton-response",
      "name": "Leading electromagnetic quark-parton response",
      "kind": "definition",
      "description": "For unpolarized electromagnetic DIS in the leading massless collinear spin-one-half quark-parton model, use Q2=-q^2>0, x=Q2/(2*P.q), and F2_gamma=x*sum_f Q_f^2*(q_f+qbar_f). The flavor distributions are evaluated at the stated scale; their sum includes quarks and antiquarks rather than net valence alone. In the negligible-target-mass limit the same model gives 2*x*F1_gamma=F2_gamma, hence FL_gamma=F2_gamma-2*x*F1_gamma=0.",
      "claimIds": [
        "D-phys-quark-parton-response"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections"
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response"
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 5-7, opening of Section 18.2.2 through Equation 18.23: QCD corrections, coefficient/PDF convolution, scale dependence and required initial distributions"
        }
      ],
      "openObligations": [
        "Any empirical extension requires its own preparation, response and inference scope; these formal conventions do not establish free colored particles or universal stability."
      ]
    }
  ],
  "sources": [
    {
      "id": "pdg2025-structure-functions",
      "kind": "research-publication",
      "title": "Structure Functions: Review of Particle Physics, 2025 update",
      "authors": [
        "E. C. Aschenauer",
        "R. S. Thorne",
        "R. Yoshida"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-structure-functions.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-passages",
        "locators": [
          "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections",
          "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response",
          "Pages 5-7, opening of Section 18.2.2 through Equation 18.23: QCD corrections, coefficient/PDF convolution, scale dependence and required initial distributions"
        ],
        "limit": "Revised August 2025; inspected PDF footer 1 December 2025. Read pages 1-7 for the listed kinematics, unpolarized response, leading electromagnetic parton expression and correction boundaries; visually checked pages 1, 3-5 and 7. Polarized and weak-current formulas on those pages were read as context but are not admitted here. Figure 18.2 and its fit discussion are not new experimental evidence; its upstream datasets, PDF fits, complete factorization proof and evolution kernels are not independently reviewed or replayed. No chapter-specific DOI is asserted. Only the listed formal passages support this block; later sections and their numerical combinations are outside its scope."
      }
    },
    {
      "id": "pdg2025-qcd",
      "kind": "research-publication",
      "title": "Quantum Chromodynamics: Review of Particle Physics, 2025 update",
      "authors": [
        "J. Huston",
        "K. Rabbertz",
        "G. Zanderighi"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-qcd.pdf",
      "path": null,
      "sha256": null
    },
    {
      "id": "pdg2025-quarks",
      "kind": "research-publication",
      "title": "Quarks: Particle Data Group summary table, 2025 update",
      "authors": [
        "Particle Data Group"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/tables/rpp2025-sum-quarks.pdf",
      "path": null,
      "sha256": null
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
      "sha256": null
    }
  ],
  "claims": [
    {
      "id": "D-phys-quark",
      "kind": "review-finding",
      "statement": "The Standard Model has six spin-one-half quark flavors. Up, charm and top carry charge +2e/3; down, strange and bottom carry -e/3. QCD quark fields transform in the three-dimensional fundamental color representation.",
      "scope": "Quark field classification and quantum numbers; no isolated particle-instance admission.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions",
          "role": "limits",
          "note": "Supports the stated formal definition within the reviewed passage."
        },
        {
          "sourceId": "cdf2013-top-width",
          "locator": "Author v2, page 6 conclusion and page 7 reference 43: reported width/lifetime intervals and adopted typical hadronization-timescale comparison",
          "role": "limits",
          "note": "Species-specific width inference and an adopted timescale qualify the stability claim; no direct timing is supplied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Three color components are a representation dimension, not three constituent objects or a minimum stable assembly.",
        "Quark species labels do not imply universally stable free objects. The separate CDF top-width result is conditional on its fixed mass and detector/fit model; its decay-before-hadronization interpretation additionally adopts a hadronization timescale, with neither time directly measured. No top result is transferred to every flavor.",
        "Field labels do not establish individual trajectories, persistent flavor across all interactions or a unique generative route.",
        "Confinement is not a later temporal stage generated by these labels. A field or representation dependency supplies no universal arising/maintenance necessity, parent weight, carrier minimum or proof of SOMA objecthood."
      ]
    },
    {
      "id": "D-phys-quark-mass-prescription",
      "kind": "review-finding",
      "statement": "A renormalized quark mass requires a prescription. The modified-minimal-subtraction mass mbar_q(mu_R) depends on the renormalization scale mu_R; the referenced summary table quotes u,d,s at 2 GeV and c,b at a scale equal to the respective running mass. A perturbative pole-mass prescription is distinct and has an ambiguity of order the QCD scale when related to observables.",
      "scope": "Specified quark-field parameters and electromagnetic scattering conventions; no isolated particle-instance admission or independent experimental extraction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are definitions and reporting conventions, not new numerical mass determinations. No current quark-mass average, loop conversion or renormalization-group evolution is reproduced.",
        "A running mass, a perturbative pole mass, a constituent-model mass and a reconstructed hadron or top-event mass are not interchangeable without the relevant model and conversion. The direct top reconstruction in the referenced table is not silently identified with a specified short-distance mass.",
        "Neglecting a quark mass compared with a hard momentum transfer is a stated approximation, not evidence that the physical mass parameter vanishes. Scale dependence is not a time evolution or a proof of stable colored particles."
      ]
    },
    {
      "id": "D-phys-quark-electromagnetic-current",
      "kind": "review-finding",
      "statement": "With e>0 the positron charge, define the quark contribution J_em,q^mu=sum_f Q_f*sum_a qbar_fa*gamma^mu*q_fa and L_em,q=-e*A_mu*J_em,q^mu. Here f labels the declared quark flavors, a is a contracted fundamental-color index, and Q_f is +2/3 for u,c,t or -1/3 for d,s,b. This electromagnetic vector current is flavor diagonal in the stated mass basis.",
      "scope": "Specified quark-field parameters and electromagnetic scattering conventions; no isolated particle-instance admission or independent experimental extraction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        },
        {
          "sourceId": "pdg2025-quarks",
          "locator": "Page 1: six quark flavors, spin, electric charge and mass conventions",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The charge assignments and current normalization are model inputs. The color contraction makes this current a color singlet; electric charge, color representation and flavor are different labels. A color-singlet hadron need not be electrically neutral.",
        "Flavor diagonality of this electromagnetic current is not conservation of each flavor under every interaction: the separately specified weak charged current contains flavor mixing. It supplies no permanent individual trajectory or universal quark lifetime.",
        "No isolated colored quark, direct charge measurement of a free quark or electromagnetic vertex calculation is admitted. A bulk-material null search for fractional electric charge is not a measurement of color charge or a universal proof of confinement."
      ]
    },
    {
      "id": "D-phys-quark-parton-response",
      "kind": "review-finding",
      "statement": "For unpolarized electromagnetic DIS in the leading massless collinear spin-one-half quark-parton model, use Q2=-q^2>0, x=Q2/(2*P.q), and F2_gamma=x*sum_f Q_f^2*(q_f+qbar_f). The flavor distributions are evaluated at the stated scale; their sum includes quarks and antiquarks rather than net valence alone. In the negligible-target-mass limit the same model gives 2*x*F1_gamma=F2_gamma, hence FL_gamma=F2_gamma-2*x*F1_gamma=0.",
      "scope": "Specified quark-field parameters and electromagnetic scattering conventions; no isolated particle-instance admission or independent experimental extraction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 5-7, opening of Section 18.2.2 through Equation 18.23: QCD corrections, coefficient/PDF convolution, scale dependence and required initial distributions",
          "role": "supports",
          "note": "Supports only the stated formal convention and its approximation boundaries; no independent measurement is supplied."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a leading electromagnetic, incoherent parton-response approximation with negligible quark masses and transverse momenta at large Q2, not an identity at every measured kinematic point. The target-mass-neglected FL convention must not be silently substituted into the finite-mass R relation. QCD radiation, finite masses and power corrections can change scaling and longitudinal response.",
        "The Q_f^2 weights form one flavor-summed response: it does not by itself separate each flavor, determine charge signs, count exactly three constituents or establish six flavors experimentally. The flavor PDFs already include the color sum; no additional factor of three is applied to this DIS formula.",
        "Beyond the leading model, structure functions involve coefficient/PDF convolutions; Bjorken x is then not an eventwise measured struck-parton momentum fraction. Factorization scale and the requisite distributions remain specified inputs. Evolution does not determine their initial functions here, and no PDF extraction or global fit is reproduced.",
        "A small or nonzero measured longitudinal response is compared with a specified model; it is not forced by this definition. This node is not a premise of the historical electron-spectrum measurement or longitudinal/transverse separation. It admits no free colored trajectory, microscopic fragmentation history, carrier minimum or temporal construction rule."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:qcd-quark-mass-prescription",
      "source": "phys:qcd",
      "target": "phys:quark-mass-prescription",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified QCD model requires a quark-mass prescription; this relation does not determine numerical masses or create a particle.",
      "claimIds": [
        "D-phys-quark-mass-prescription"
      ]
    },
    {
      "id": "physics:quark-fields-quark-electromagnetic-current",
      "source": "phys:quark-fields",
      "target": "phys:quark-electromagnetic-current",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared flavor, charge and color labels specify the electromagnetic current; no current or field population is measured by this definitional relation.",
      "claimIds": [
        "D-phys-quark-electromagnetic-current"
      ]
    },
    {
      "id": "physics:quark-electromagnetic-current-quark-parton-response",
      "source": "phys:quark-electromagnetic-current",
      "target": "phys:quark-parton-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified electromagnetic charges provide the squared flavor weights of the leading response; this is not a free-quark charge measurement.",
      "claimIds": [
        "D-phys-quark-parton-response"
      ]
    },
    {
      "id": "physics:quark-mass-prescription-quark-parton-response",
      "source": "phys:quark-mass-prescription",
      "target": "phys:quark-parton-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The leading model neglects quark masses relative to its hard scale; a mass approximation is not a zero-mass determination or an all-scale identity.",
      "claimIds": [
        "D-phys-quark-parton-response"
      ]
    },
    {
      "id": "physics:inclusive-dis-response-quark-parton-response",
      "source": "phys:inclusive-dis-response",
      "target": "phys:quark-parton-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The inclusive response fixes which structure functions are interpreted by the leading model. The model does not supply the observed longitudinal/transverse separation or its fitted values.",
      "claimIds": [
        "D-phys-quark-parton-response"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:quark-mass-prescription",
      "role": "definition",
      "denotes": "The adopted scale and prescription of a quark mass parameter, distinct from a measured hadron or reconstructed-event mass.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-quark-mass-prescription"
      ]
    },
    {
      "nodeId": "phys:quark-electromagnetic-current",
      "role": "definition",
      "denotes": "The specified color-contracted, charge-weighted quark electromagnetic current, not an observed free-quark population.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-quark-electromagnetic-current"
      ]
    },
    {
      "nodeId": "phys:quark-parton-response",
      "role": "definition",
      "denotes": "A conditional charge-squared-weighted flavor response and massless leading Callan-Gross relation, distinct from measured structure functions or a free-particle count.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-quark-parton-response"
      ]
    }
  ]
};

const reusedLocators = {
  "pdg2025-qcd": [
    "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
    "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
  ],
  "pdg2025-quarks": [
    "Page 1: six quark flavors, spin, electric charge and mass conventions"
  ],
  "pdg2025-electroweak": [
    "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary"
  ]
};

/** Preserve mass, current and conditional parton conventions without invented observations. */
export function validateQuarkFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing quark-formal ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Quark-formal ${kind} changed ${id}.${key}: preserve mass, charge and response scope`);
    }
  }
  for (const [sourceId, locators] of Object.entries(reusedLocators)) {
    const reviewed = context.sources.get(sourceId).review?.locators ?? [];
    for (const locator of locators) assert.ok(reviewed.includes(locator),
      `Quark-formal source lost reviewed support: ${sourceId}: ${locator}`);
  }
}
