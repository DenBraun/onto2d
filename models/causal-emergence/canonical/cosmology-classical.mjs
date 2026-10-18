import assert from "node:assert/strict";

export const COSMOLOGY_CLASSICAL_CHECKS = new Map();
export const COSMOLOGY_CLASSICAL_ANALYTICAL_SOURCES = new Map();
export const COSMOLOGY_CLASSICAL_ADMISSION = {
  "definitions": [
    [
      "phys:gaussian-cosmological-mode-statistics",
      "D-phys-gaussian-cosmological-mode-statistics"
    ],
    [
      "phys:cosmological-growing-mode-classical-limit",
      "D-phys-cosmological-growing-mode-classical-limit"
    ]
  ],
  "formalDependencies": [
    [
      "physics:canonical-curvature-mode-gaussian-cosmological-mode-statistics",
      [
        "phys:canonical-curvature-mode",
        "phys:gaussian-cosmological-mode-statistics"
      ]
    ],
    [
      "physics:gaussian-cosmological-mode-statistics-cosmological-growing-mode-classical-limit",
      [
        "phys:gaussian-cosmological-mode-statistics",
        "phys:cosmological-growing-mode-classical-limit"
      ]
    ],
    [
      "physics:superhorizon-curvature-evolution-cosmological-growing-mode-classical-limit",
      [
        "phys:superhorizon-curvature-evolution",
        "phys:cosmological-growing-mode-classical-limit"
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
      "id": "polarski1996-classical",
      "kind": "research-publication",
      "title": "Semiclassicality and Decoherence of Cosmological Perturbations",
      "authors": [
        "David Polarski",
        "Alexei A. Starobinsky"
      ],
      "year": 1996,
      "doi": "10.1088/0264-9381/13/3/006",
      "url": "https://arxiv.org/abs/gr-qc/9504030v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-theory-article",
        "locators": [
          "Author v2 printed pages 2-7 (PDF pages 3-8), Section 2, Equations 1-27: free massless scalar on flat FRW, canonical variables, Gaussian vacuum and equal-time amplitude density",
          "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin"
        ],
        "limit": "Read the scientific body on printed pages 1-15 of author v2 (24 January 1996; PDF pages 2-16) and visually checked the Gaussian, Wigner and long-wave passages on PDF pages 8-9 and 11-15. arXiv metadata identifies Classical and Quantum Gravity 13 (1996), 377-392 and the stated journal DOI; the published body was not separately compared. The bibliography is not an independent review of its cited experiments. Only the stated free-field Gaussian and dominant-mode interpretation is admitted; no environmental master equation, collapse model, entropy calculation, observational fit or current gravitational-wave claim is reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-gaussian-cosmological-mode-statistics",
      "kind": "review-finding",
      "statement": "For the reviewed free real massless scalar on prescribed spatially flat FRW, set y=a phi and p=y'- (a'/a)y. Quadratic evolution of the supplied Gaussian vacuum preserves a Gaussian state. For one discrete nonzero Fourier pair k,-k, its independent complex amplitude y=y1+i y2 has equal-time density P(y1,y2)=exp[-|y|^2/|f_k|^2]/(pi |f_k|^2), with mean zero and <|y|^2>=|f_k|^2. This represents the commuting equal-time field-amplitude statistics; it does not by itself determine a classical trajectory or establish a quantum origin from an observed power spectrum.",
      "scope": "Formal Gaussian-mode and dominant-solution interpretation in the declared linear cosmological model; no experimental preparation, numerical replay or universal classicalization mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 2-7 (PDF pages 3-8), Section 2, Equations 1-27: free massless scalar on flat FRW, canonical variables, Gaussian vacuum and equal-time amplitude density",
          "role": "supports",
          "note": "Supports the declared theoretical approximation and its limits; source reading is not an observational or decoherence experiment."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "role": "supports",
          "note": "Supports the declared theoretical approximation and its limits; source reading is not an observational or decoherence experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the source Fourier and vacuum normalization with hbar=c=1; the real field relates the k and -k amplitudes, so they are not independent complex samples. The homogeneous k=0 mode is outside this formula. This Gaussian construction does not cover arbitrary interacting or non-Gaussian states.",
        "An equal-time amplitude probability does not replace all ordered unequal-time or field-momentum observables. The exact canonical commutator remains nonzero at finite hbar; a positive Gaussian Wigner function or a two-point spectrum alone is not a demonstrated loss of quantum coherence or selection of one realized perturbation.",
        "The illustrative variable y=a phi is not automatically the gauge-invariant curvature variable v or R. Applying the statistical representation to those variables requires their separately declared quadratic action, canonical normalization, background and initial state; no free-scalar mass term is silently substituted for the curvature pump term."
      ]
    },
    {
      "id": "D-phys-cosmological-growing-mode-classical-limit",
      "kind": "review-finding",
      "statement": "In the reviewed large-squeezing, dominant-mode regime, neglect the subleading decaying solution and choose a time-independent phase so the retained f_k is real. The field can then be represented as y(k,eta) approximately f_k(eta)e(k), with time-independent Gaussian e, <e(k)e*(k')>=delta^3(k-k') and e(-k)=e*(k). Where |f_k|>0, with F=Im(conj(f_k) g_k) and g_k=i[f_k'-(a'/a)f_k], the limiting phase-space distribution is concentrated near p=(F/|f_k|^2)y. Random amplitudes then follow the specified classical mode evolution; this stronger approximation requires more than the equal-time Gaussian marginal.",
      "scope": "Formal Gaussian-mode and dominant-solution interpretation in the declared linear cosmological model; no experimental preparation, numerical replay or universal classicalization mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution",
          "role": "supports",
          "note": "Supports the declared theoretical approximation and its limits; source reading is not an observational or decoherence experiment."
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin",
          "role": "supports",
          "note": "Supports the declared theoretical approximation and its limits; source reading is not an observational or decoherence experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The free-scalar long-wave expansion uses k/(aH) much less than one, but dropping its second solution also requires that contribution to be negligible in the specified regime and observables. Horizon crossing alone does not justify the omission. A zero of the retained mode requires care: the ratio F/|f_k|^2 is not defined there, and negligible subleading contributions cannot be assumed uniformly. Curvature-mode conservation retains its own background and nondecaying-solution conditions; the scalar y equation is not identified with the curvature equation.",
        "The source describes omitting the tiny decaying component as phase-space coarse graining that smooths the narrow momentum combination while retaining the leading amplitude. This is an approximate restricted-observable equivalence, not exact removal of the canonical commutator, a physical hbar-to-zero evolution or a derived wavefunction-collapse process.",
        "No environment is required merely to write the equal-time Gaussian density or the source's retained-mode stochastic representation. A claim about environment-induced decoherence requires an interaction, subsystem and coarse-graining prescription. Small environmental effects need not appreciably change the dominant amplitude, but no universal environmental channel, rate or entropy is supplied here; entropy can depend on the omitted component.",
        "The paired-mode correlations and the persistence of a dominant solution are not a stable population of virtual particles. Gaussianity, a quasi-isotropic mode or a compatible observed spectrum alone does not uniquely demonstrate the assumed initial vacuum or quantum origin. No CMB likelihood, cosmological parameter estimate or universal cross-scale formation law is certified by these definitions."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:gaussian-cosmological-mode-statistics",
      "name": "Equal-time Gaussian cosmological-mode statistics",
      "kind": "definition",
      "description": "For the reviewed free real massless scalar on prescribed spatially flat FRW, set y=a phi and p=y'- (a'/a)y. Quadratic evolution of the supplied Gaussian vacuum preserves a Gaussian state. For one discrete nonzero Fourier pair k,-k, its independent complex amplitude y=y1+i y2 has equal-time density P(y1,y2)=exp[-|y|^2/|f_k|^2]/(pi |f_k|^2), with mean zero and <|y|^2>=|f_k|^2. This represents the commuting equal-time field-amplitude statistics; it does not by itself determine a classical trajectory or establish a quantum origin from an observed power spectrum.",
      "claimIds": [
        "D-phys-gaussian-cosmological-mode-statistics"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 2-7 (PDF pages 3-8), Section 2, Equations 1-27: free massless scalar on flat FRW, canonical variables, Gaussian vacuum and equal-time amplitude density"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution"
        }
      ],
      "openObligations": [
        "Use the source Fourier and vacuum normalization with hbar=c=1; the real field relates the k and -k amplitudes, so they are not independent complex samples. The homogeneous k=0 mode is outside this formula. This Gaussian construction does not cover arbitrary interacting or non-Gaussian states.",
        "An equal-time amplitude probability does not replace all ordered unequal-time or field-momentum observables. The exact canonical commutator remains nonzero at finite hbar; a positive Gaussian Wigner function or a two-point spectrum alone is not a demonstrated loss of quantum coherence or selection of one realized perturbation.",
        "The illustrative variable y=a phi is not automatically the gauge-invariant curvature variable v or R. Applying the statistical representation to those variables requires their separately declared quadratic action, canonical normalization, background and initial state; no free-scalar mass term is silently substituted for the curvature pump term."
      ]
    },
    {
      "id": "phys:cosmological-growing-mode-classical-limit",
      "name": "Dominant-mode stochastic classical approximation",
      "kind": "definition",
      "description": "In the reviewed large-squeezing, dominant-mode regime, neglect the subleading decaying solution and choose a time-independent phase so the retained f_k is real. The field can then be represented as y(k,eta) approximately f_k(eta)e(k), with time-independent Gaussian e, <e(k)e*(k')>=delta^3(k-k') and e(-k)=e*(k). Where |f_k|>0, with F=Im(conj(f_k) g_k) and g_k=i[f_k'-(a'/a)f_k], the limiting phase-space distribution is concentrated near p=(F/|f_k|^2)y. Random amplitudes then follow the specified classical mode evolution; this stronger approximation requires more than the equal-time Gaussian marginal.",
      "claimIds": [
        "D-phys-cosmological-growing-mode-classical-limit"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 7-10 (PDF pages 8-11), Section 3, Equations 28-46: stochastic amplitude representation, phase correlations and the limiting Wigner distribution"
        },
        {
          "sourceId": "polarski1996-classical",
          "locator": "Author v2 printed pages 11-15 (PDF pages 12-16), Section 4, Equations 47-56 and coarse-graining discussion: long-wave solutions, decaying-mode omission, environmental qualifications and nonunique quantum origin"
        }
      ],
      "openObligations": [
        "The free-scalar long-wave expansion uses k/(aH) much less than one, but dropping its second solution also requires that contribution to be negligible in the specified regime and observables. Horizon crossing alone does not justify the omission. A zero of the retained mode requires care: the ratio F/|f_k|^2 is not defined there, and negligible subleading contributions cannot be assumed uniformly. Curvature-mode conservation retains its own background and nondecaying-solution conditions; the scalar y equation is not identified with the curvature equation.",
        "The source describes omitting the tiny decaying component as phase-space coarse graining that smooths the narrow momentum combination while retaining the leading amplitude. This is an approximate restricted-observable equivalence, not exact removal of the canonical commutator, a physical hbar-to-zero evolution or a derived wavefunction-collapse process.",
        "No environment is required merely to write the equal-time Gaussian density or the source's retained-mode stochastic representation. A claim about environment-induced decoherence requires an interaction, subsystem and coarse-graining prescription. Small environmental effects need not appreciably change the dominant amplitude, but no universal environmental channel, rate or entropy is supplied here; entropy can depend on the omitted component.",
        "The paired-mode correlations and the persistence of a dominant solution are not a stable population of virtual particles. Gaussianity, a quasi-isotropic mode or a compatible observed spectrum alone does not uniquely demonstrate the assumed initial vacuum or quantum origin. No CMB likelihood, cosmological parameter estimate or universal cross-scale formation law is certified by these definitions."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:canonical-curvature-mode-gaussian-cosmological-mode-statistics",
      "source": "phys:canonical-curvature-mode",
      "target": "phys:gaussian-cosmological-mode-statistics",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The canonical variable and state must be declared before transferring Gaussian statistics to a curvature observable; this conceptual link does not identify the illustrative free scalar y with v or R.",
      "claimIds": [
        "D-phys-gaussian-cosmological-mode-statistics"
      ]
    },
    {
      "id": "physics:gaussian-cosmological-mode-statistics-cosmological-growing-mode-classical-limit",
      "source": "phys:gaussian-cosmological-mode-statistics",
      "target": "phys:cosmological-growing-mode-classical-limit",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The equal-time amplitude density is the statistical input; trajectory factorization additionally requires the stated dominant-mode and phase approximation.",
      "claimIds": [
        "D-phys-cosmological-growing-mode-classical-limit"
      ]
    },
    {
      "id": "physics:superhorizon-curvature-evolution-cosmological-growing-mode-classical-limit",
      "source": "phys:superhorizon-curvature-evolution",
      "target": "phys:cosmological-growing-mode-classical-limit",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The separately declared long-wave and second-solution conditions constrain a curvature application; being outside the Hubble radius alone supplies neither universal conservation nor decoherence.",
      "claimIds": [
        "D-phys-cosmological-growing-mode-classical-limit"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:gaussian-cosmological-mode-statistics",
      "role": "definition",
      "denotes": "A Gaussian equal-time amplitude representation conditional on the supplied free-field state and normalization, not a measured classicalization event.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-gaussian-cosmological-mode-statistics"
      ]
    },
    {
      "nodeId": "phys:cosmological-growing-mode-classical-limit",
      "role": "definition",
      "denotes": "A conditional dominant-mode stochastic interpretation with explicit approximation and decoherence boundaries, not a unique empirical origin mechanism.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-cosmological-growing-mode-classical-limit"
      ]
    }
  ]
};

/** Preserve Gaussian marginals, dominant-mode approximations and the nonunique classical interpretation. */
export function validateCosmologyClassicalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Cosmology classical ${kind} changed ${id}: preserve state, approximation and interpretation boundaries`);
    }
  }
}
