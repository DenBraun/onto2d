import assert from "node:assert/strict";

export const HIGGS_COUPLING_CHECKS = new Map();
export const HIGGS_COUPLING_ANALYTICAL_SOURCES = new Map();
export const HIGGS_COUPLING_ADMISSION = {
  "definitions": [
    [
      "phys:higgs-doublet-background",
      "D-phys-higgs-doublet-background"
    ],
    [
      "phys:charged-fermion-higgs-coupling",
      "D-phys-charged-fermion-higgs-coupling"
    ]
  ],
  "formalDependencies": [
    [
      "physics:standard-model-higgs-doublet-background",
      [
        "phys:standard-model",
        "phys:higgs-doublet-background"
      ]
    ],
    [
      "physics:higgs-doublet-background-charged-fermion-higgs-coupling",
      [
        "phys:higgs-doublet-background",
        "phys:charged-fermion-higgs-coupling"
      ]
    ],
    [
      "physics:lepton-fields-charged-fermion-higgs-coupling",
      [
        "phys:lepton-fields",
        "phys:charged-fermion-higgs-coupling"
      ]
    ],
    [
      "physics:quark-fields-charged-fermion-higgs-coupling",
      [
        "phys:quark-fields",
        "phys:charged-fermion-higgs-coupling"
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
    }
  ],
  "claims": [
    {
      "id": "D-phys-higgs-doublet-background",
      "kind": "review-finding",
      "statement": "Write rho=phi-dagger*phi and V=mu2*rho+(lambda_P^2/2)*rho^2 with mu2<0 and lambda_P>0. In unitary gauge choose phi=(0,(v+H)/sqrt(2)), v^2=-2*mu2/lambda_P^2. The tree-level relations are M_H^2=lambda_P^2*v^2, M_W=g*v/2, M_Z=sqrt(g^2+gprime^2)*v/2 and M_photon=0.",
      "scope": "Formal tree-level single-doublet construction in the stated PDG convention; publication-supported collider inferences remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses",
          "role": "supports",
          "note": "Supports the declared mass/coupling convention and its model boundaries, not a measured all-species coupling or a universal emergence rule."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is the minimal single-doublet model at tree level with supplied mu2<0, lambda_P>0 and positive gauge couplings, in units hbar=c=1. lambda_P denotes the PDG parameter whose square enters the quartic term; it is not the background lambda_W used in the historical Weinberg1967 convention.",
        "The chosen doublet orientation and unitary-gauge coordinates are model conventions. The scalar background is distinct from the propagating H excitation; would-be Goldstone components supply longitudinal vector polarizations rather than additional physical particles. A gauge choice or scalar minimum is not an independently measured spatial medium, an additional particle population or a causal maintenance process.",
        "The specified classical potential has a nonzero minimum and positive radial curvature. This does not establish absolute stability of the interacting quantum vacuum, a cosmological transition history or continuous physical regeneration. Radiative corrections, renormalization prescription and possible extra fields require separate treatment; these tree-level parameters are not silently equated with fitted resonance masses.",
        "Field assignments, gauge couplings and model parameters are premises of this construction. They do not derive chirality, universal carrier minima, parent weights, SOMA phase order or a general stability/formation law for later composite matter."
      ]
    },
    {
      "id": "D-phys-charged-fermion-higgs-coupling",
      "kind": "review-finding",
      "statement": "For each supplied charged-fermion mass m_i in the declared mass basis, the tree-level term is -m_i*psi-bar_i*psi_i-(m_i/v)*H*psi-bar_i*psi_i. Defining y_i=sqrt(2)*m_i/v gives m_i=y_i*v/sqrt(2) and the one-Higgs coefficient y_i/sqrt(2)=m_i/v. This reparametrizes independent mass/Yukawa inputs; it does not calculate their numerical hierarchy.",
      "scope": "Formal tree-level single-doublet construction in the stated PDG convention; publication-supported collider inferences remain separate records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary",
          "role": "supports",
          "note": "Supports the declared mass/coupling convention and its model boundaries, not a measured all-species coupling or a universal emergence rule."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use charged Dirac fermions in the mass basis of the minimal one-doublet theory at tree level. The Higgs coefficient is flavor diagonal in this declared model. Mass parameters, or equivalently Yukawa parameters after choosing v, are supplied inputs; the proportionality does not predict their numerical hierarchy, prove that all species couplings have been measured or fix a fit from one decay channel.",
        "This is the minimal single-doublet model at tree level with supplied mu2<0, lambda_P>0 and positive gauge couplings, in units hbar=c=1. lambda_P denotes the PDG parameter whose square enters the quartic term; it is not the background lambda_W used in the historical Weinberg1967 convention.",
        "The minimal field content has no right-handed neutrinos and no renormalizable neutrino mass term. Its charged-fermion formula must not be used as a demonstrated neutrino-mass mechanism. Nonminimal flavor structures, neutrino-mass extensions and additional scalar states need explicit specifications.",
        "Quark mass parameters require their scale and renormalization convention beyond tree level. This formula is not an assertion that the mass of a composite hadron equals a sum of Higgs-generated constituent masses; QCD dynamics and separately reviewed hadron calculations retain their own definitions.",
        "Field assignments, gauge couplings and model parameters are premises of this construction. They do not derive chirality, universal carrier minima, parent weights, SOMA phase order or a general stability/formation law for later composite matter."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:higgs-doublet-background",
      "name": "Single-doublet Higgs background and tree masses",
      "kind": "definition",
      "description": "Write rho=phi-dagger*phi and V=mu2*rho+(lambda_P^2/2)*rho^2 with mu2<0 and lambda_P>0. In unitary gauge choose phi=(0,(v+H)/sqrt(2)), v^2=-2*mu2/lambda_P^2. The tree-level relations are M_H^2=lambda_P^2*v^2, M_W=g*v/2, M_Z=sqrt(g^2+gprime^2)*v/2 and M_photon=0.",
      "claimIds": [
        "D-phys-higgs-doublet-background"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses"
        }
      ],
      "openObligations": [
        "This is the minimal single-doublet model at tree level with supplied mu2<0, lambda_P>0 and positive gauge couplings, in units hbar=c=1. lambda_P denotes the PDG parameter whose square enters the quartic term; it is not the background lambda_W used in the historical Weinberg1967 convention.",
        "The chosen doublet orientation and unitary-gauge coordinates are model conventions. The scalar background is distinct from the propagating H excitation; would-be Goldstone components supply longitudinal vector polarizations rather than additional physical particles. A gauge choice or scalar minimum is not an independently measured spatial medium, an additional particle population or a causal maintenance process.",
        "The specified classical potential has a nonzero minimum and positive radial curvature. This does not establish absolute stability of the interacting quantum vacuum, a cosmological transition history or continuous physical regeneration. Radiative corrections, renormalization prescription and possible extra fields require separate treatment; these tree-level parameters are not silently equated with fitted resonance masses.",
        "Field assignments, gauge couplings and model parameters are premises of this construction. They do not derive chirality, universal carrier minima, parent weights, SOMA phase order or a general stability/formation law for later composite matter."
      ]
    },
    {
      "id": "phys:charged-fermion-higgs-coupling",
      "name": "Charged-fermion mass and Higgs coupling convention",
      "kind": "definition",
      "description": "For each supplied charged-fermion mass m_i in the declared mass basis, the tree-level term is -m_i*psi-bar_i*psi_i-(m_i/v)*H*psi-bar_i*psi_i. Defining y_i=sqrt(2)*m_i/v gives m_i=y_i*v/sqrt(2) and the one-Higgs coefficient y_i/sqrt(2)=m_i/v. This reparametrizes independent mass/Yukawa inputs; it does not calculate their numerical hierarchy.",
      "claimIds": [
        "D-phys-charged-fermion-higgs-coupling"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-electroweak",
          "locator": "Section 10.1, pages 1-3, Equation 10.2 and fermion/neutrino paragraphs: mass-basis charged-fermion Higgs coupling and minimal-model neutrino boundary"
        }
      ],
      "openObligations": [
        "Use charged Dirac fermions in the mass basis of the minimal one-doublet theory at tree level. The Higgs coefficient is flavor diagonal in this declared model. Mass parameters, or equivalently Yukawa parameters after choosing v, are supplied inputs; the proportionality does not predict their numerical hierarchy, prove that all species couplings have been measured or fix a fit from one decay channel.",
        "This is the minimal single-doublet model at tree level with supplied mu2<0, lambda_P>0 and positive gauge couplings, in units hbar=c=1. lambda_P denotes the PDG parameter whose square enters the quartic term; it is not the background lambda_W used in the historical Weinberg1967 convention.",
        "The minimal field content has no right-handed neutrinos and no renormalizable neutrino mass term. Its charged-fermion formula must not be used as a demonstrated neutrino-mass mechanism. Nonminimal flavor structures, neutrino-mass extensions and additional scalar states need explicit specifications.",
        "Quark mass parameters require their scale and renormalization convention beyond tree level. This formula is not an assertion that the mass of a composite hadron equals a sum of Higgs-generated constituent masses; QCD dynamics and separately reviewed hadron calculations retain their own definitions.",
        "Field assignments, gauge couplings and model parameters are premises of this construction. They do not derive chirality, universal carrier minima, parent weights, SOMA phase order or a general stability/formation law for later composite matter."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:standard-model-higgs-doublet-background",
      "source": "phys:standard-model",
      "target": "phys:higgs-doublet-background",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified minimal field content admits the declared scalar-doublet potential and gauge convention. This definition does not infer a temporal transition or a physical maintenance relation.",
      "claimIds": [
        "D-phys-higgs-doublet-background"
      ]
    },
    {
      "id": "physics:higgs-doublet-background-charged-fermion-higgs-coupling",
      "source": "phys:higgs-doublet-background",
      "target": "phys:charged-fermion-higgs-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The same declared background v fixes the mass-to-Higgs coefficient relation for supplied charged-fermion inputs; it does not determine those independent inputs.",
      "claimIds": [
        "D-phys-charged-fermion-higgs-coupling"
      ]
    },
    {
      "id": "physics:lepton-fields-charged-fermion-higgs-coupling",
      "source": "phys:lepton-fields",
      "target": "phys:charged-fermion-higgs-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The stated chiral charged-lepton assignments delimit this tree-level Dirac mass term. The minimal neutrino fields do not acquire mass through this formula.",
      "claimIds": [
        "D-phys-charged-fermion-higgs-coupling"
      ]
    },
    {
      "id": "physics:quark-fields-charged-fermion-higgs-coupling",
      "source": "phys:quark-fields",
      "target": "phys:charged-fermion-higgs-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Quark field assignments delimit the quark mass-basis term; the formula supplies neither a nonperturbative hadron mass nor a constituent-counting rule.",
      "claimIds": [
        "D-phys-charged-fermion-higgs-coupling"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:higgs-doublet-background",
      "role": "definition",
      "denotes": "Write rho=phi-dagger*phi and V=mu2*rho+(lambda_P^2/2)*rho^2 with mu2<0 and lambda_P>0. In unitary gauge choose phi=(0,(v+H)/sqrt(2)), v^2=-2*mu2/lambda_P^2. The tree-level relations are M_H^2=lambda_P^2*v^2, M_W=g*v/2, M_Z=sqrt(g^2+gprime^2)*v/2 and M_photon=0.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-higgs-doublet-background"
      ]
    },
    {
      "nodeId": "phys:charged-fermion-higgs-coupling",
      "role": "definition",
      "denotes": "For each supplied charged-fermion mass m_i in the declared mass basis, the tree-level term is -m_i*psi-bar_i*psi_i-(m_i/v)*H*psi-bar_i*psi_i. Defining y_i=sqrt(2)*m_i/v gives m_i=y_i*v/sqrt(2) and the one-Higgs coefficient y_i/sqrt(2)=m_i/v. This reparametrizes independent mass/Yukawa inputs; it does not calculate their numerical hierarchy.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-charged-fermion-higgs-coupling"
      ]
    }
  ]
};

/** Keep declared mass/coupling conventions separate from empirical inference. */
export function validateHiggsCouplingContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing Higgs-coupling ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Higgs-coupling ${kind} changed ${id}.${key}: preserve model parameters and inference boundaries`);
    }
  }
}
