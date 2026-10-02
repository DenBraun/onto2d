import assert from "node:assert/strict";

export const VIRTUAL_PROCESS_CHECKS = new Map([["virtual-process-kinematic-algebra", "C-phys-virtual-process-arithmetic"]]);
export const VIRTUAL_PROCESS_ANALYTICAL_SOURCES = new Map([["C-phys-virtual-process-arithmetic", "virtual-process-verifier"]]);
export const VIRTUAL_PROCESS_ADMISSION = {
  "definitions": [
    [
      "phys:perturbative-amplitude",
      "D-phys-perturbative-amplitude"
    ],
    [
      "phys:internal-propagator",
      "D-phys-internal-propagator"
    ],
    [
      "phys:external-scattering-state",
      "D-phys-external-scattering-state"
    ]
  ],
  "formalDependencies": [
    [
      "physics:quantum-field-framework-perturbative-amplitude",
      [
        "phys:quantum-field-framework",
        "phys:perturbative-amplitude"
      ]
    ],
    [
      "physics:perturbative-amplitude-internal-propagator",
      [
        "phys:perturbative-amplitude",
        "phys:internal-propagator"
      ]
    ],
    [
      "physics:perturbative-amplitude-external-scattering-state",
      [
        "phys:perturbative-amplitude",
        "phys:external-scattering-state"
      ]
    ]
  ],
  "contexts": [
    [
      "virtual-process-replay-context",
      "M-phys-virtual-process-replay-context",
      [
        "virtual-process-replay"
      ]
    ]
  ],
  "observations": [
    [
      "virtual-process-arithmetic",
      "C-phys-virtual-process-arithmetic",
      [
        "virtual-process-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "perturbative-amplitude-virtual-process-arithmetic",
      "perturbative-amplitude",
      "virtual-process-arithmetic",
      "M-phys-virtual-process-arithmetic",
      "interpretation-dependency"
    ],
    [
      "internal-propagator-virtual-process-arithmetic",
      "internal-propagator",
      "virtual-process-arithmetic",
      "M-phys-virtual-process-arithmetic",
      "interpretation-dependency"
    ],
    [
      "external-scattering-state-virtual-process-arithmetic",
      "external-scattering-state",
      "virtual-process-arithmetic",
      "M-phys-virtual-process-arithmetic",
      "interpretation-dependency"
    ],
    [
      "virtual-process-replay-context-virtual-process-arithmetic",
      "virtual-process-replay-context",
      "virtual-process-arithmetic",
      "M-phys-virtual-process-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "virtual-process-replay"
  ],
  "comparisonIds": [
    "virtual-process-replay"
  ],
  "inferenceSources": [
    [
      "M-phys-virtual-process-replay-context",
      [
        "feynman1949-amplitudes",
        "virtual-process-verifier"
      ]
    ],
    [
      "C-phys-virtual-process-arithmetic",
      [
        "feynman1949-amplitudes",
        "virtual-process-verifier"
      ]
    ],
    [
      "M-phys-virtual-process-arithmetic",
      [
        "feynman1949-amplitudes",
        "virtual-process-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "virtual-process-replay",
      "virtual-process-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "feynman1949-amplitudes",
      "kind": "research-publication",
      "title": "Space-Time Approach to Quantum Electrodynamics",
      "authors": [
        "R. P. Feynman"
      ],
      "year": 1949,
      "doi": "10.1103/PhysRev.76.769",
      "url": "https://puredhamma.net/wp-content/uploads/Feynman-R.P.-Space-Time-Approach-to-Quantum-Electrodynamics-1949.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-amplitude-conventions",
        "locators": [
          "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        ],
        "limit": "Read selected printed pages 769-776, introductory text and Sections 1-4; the beginning of Section 5 only identifies historical regulator limitations. Scan pages 769, 774, 775 and 776 were visually checked; page 775 was independently checked for Dirac-momentum notation and the pole prescription. The publisher metadata supplies Physical Review 76(6), 769-789, published September 15, 1949. The reviewed bytes are a scan hosted at the stated URL, not a retrieved publisher PDF. The scan header gives 1949 despite damaged OCR. Remaining pages, cited derivations and modern all-orders results are outside this reading."
      }
    },
    {
      "id": "virtual-process-verifier",
      "kind": "executable-check",
      "title": "Synthetic on-shell scattering and internal-transfer algebra",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-virtual-process.py",
      "sha256": "2fb8e99edc7ea7510b7d8d8375fc0e5d128e6d7b8a0eb4f6ec15a0092c0502a3",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls"
        ],
        "limit": "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction. The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-perturbative-amplitude",
      "kind": "review-finding",
      "statement": "In the selected QED scattering construction, a perturbative amplitude combines the required terms for specified external states and interaction order before a transition probability is formed. Alternatives can interfere; for identical electrons the direct and exchanged two-electron amplitudes are antisymmetrized.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction.",
        "External and internal are roles in a declared amplitude calculation. Changing the included sources and detectors changes the boundary; this is not a universal particle census. No individual diagram is automatically gauge independent, separately observable or an independently measured alternative."
      ]
    },
    {
      "id": "D-phys-internal-propagator",
      "kind": "review-finding",
      "statement": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Internal four-momenta are not constrained to a free on-shell relation, but an integration includes pole regions: internal does not mean always off shell. Four-momentum conservation is retained. Matrix ordering along a fermion line is not a measured chronology or a license to borrow energy temporarily.",
        "The photon denominator (k^2+i0)^-1 and inverse Dirac operator are schematic kernel factors in the stated historical Fourier convention. Couplings, tensor/spinor indices, normalization, vertex factors and a complete amplitude remain required. No coordinate-space path or cross section is inferred from a denominator alone.",
        "External and internal are roles in a declared amplitude calculation. Changing the included sources and detectors changes the boundary; this is not a universal particle census. No individual diagram is automatically gauge independent, separately observable or an independently measured alternative.",
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "D-phys-external-scattering-state",
      "kind": "review-finding",
      "statement": "External states specify the initial and final boundary of the scattering calculation. In the stated free plane-wave convention external electron momenta satisfy p^2=m^2, while external photons and source normalization require their own prescribed state factors. This definition does not assert general nonperturbative asymptotic completeness.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "External and internal are roles in a declared amplitude calculation. Changing the included sources and detectors changes the boundary; this is not a universal particle census. No individual diagram is automatically gauge independent, separately observable or an independently measured alternative.",
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "M-phys-virtual-process-replay-context",
      "kind": "method",
      "statement": "Use exact rational four-vectors with metric +--- and c=1. Set synthetic mass m=4, incoming (5,3,0,0),(5,-3,0,0) and outgoing (5,9/5,12/5,0),(5,-9/5,-12/5,0); check conservation, external mass shells and s,t,u under two rational proper boosts. Include a forward-transfer boundary and generic complex-number interference controls.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "virtual-process-verifier",
          "locator": "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction.",
        "The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only."
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    },
    {
      "id": "C-phys-virtual-process-arithmetic",
      "kind": "review-finding",
      "statement": "All four synthetic external momenta have p^2=16 and conserved total four-momentum. The exchange q=p1-p3=(0,6/5,-12/5,0) has q^2=t=-36/5, with s=100 and u=-144/5, so s+t+u=64=4m^2. Two rational boosts preserve these invariants. Forward scattering permits t=0; generic amplitudes 1 and -1 cancel before squaring.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "virtual-process-verifier",
          "locator": "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls",
          "role": "supports",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [
        "virtual-process-kinematic-algebra"
      ],
      "limitations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction.",
        "The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only.",
        "Internal four-momenta are not constrained to a free on-shell relation, but an integration includes pole regions: internal does not mean always off shell. Four-momentum conservation is retained. Matrix ordering along a fermion line is not a measured chronology or a license to borrow energy temporarily.",
        "Existing line, magnetic-moment and scattering results support their specified observable models; none counts virtual particles or uniquely establishes a vacuum substance. The original card supplies no derived universal formation/maintenance arrow, parent weights or carrier-count minima."
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    },
    {
      "id": "M-phys-virtual-process-arithmetic",
      "kind": "method",
      "statement": "Apply the declared external-state and internal-transfer distinction to the exact rational kinematic witness. Evaluate invariant mass and momentum conservation, without propagator integration or a spinor amplitude; sum generic complex alternatives before their squared modulus solely as an interference control.",
      "scope": "Selected perturbative QED state and kernel conventions, with a separate finite synthetic kinematic witness.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        },
        {
          "sourceId": "virtual-process-verifier",
          "locator": "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls",
          "role": "method",
          "note": "Supports the stated amplitude convention or bounded synthetic calculation only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction.",
        "The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only.",
        "The photon denominator (k^2+i0)^-1 and inverse Dirac operator are schematic kernel factors in the stated historical Fourier convention. Couplings, tensor/spinor indices, normalization, vertex factors and a complete amplitude remain required. No coordinate-space path or cross section is inferred from a denominator alone."
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:perturbative-amplitude",
      "name": "Perturbative QED amplitude convention",
      "kind": "definition",
      "description": "In the selected QED scattering construction, a perturbative amplitude combines the required terms for specified external states and interaction order before a transition probability is formed. Alternatives can interfere; for identical electrons the direct and exchanged two-electron amplitudes are antisymmetrized.",
      "claimIds": [
        "D-phys-perturbative-amplitude"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude"
        }
      ],
      "openObligations": [
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "phys:internal-propagator",
      "name": "Internal propagator kernel",
      "kind": "definition",
      "description": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "claimIds": [
        "D-phys-internal-propagator"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        }
      ],
      "openObligations": [
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "phys:external-scattering-state",
      "name": "External scattering-state boundary",
      "kind": "definition",
      "description": "External states specify the initial and final boundary of the scattering calculation. In the stated free plane-wave convention external electron momenta satisfy p^2=m^2, while external photons and source normalization require their own prescribed state factors. This definition does not assert general nonperturbative asymptotic completeness.",
      "claimIds": [
        "D-phys-external-scattering-state"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention"
        }
      ],
      "openObligations": [
        "These are selected perturbative QED amplitude conventions for a specified process, state boundary and order. The historical paper announces fuller derivation elsewhere and discusses regulator difficulties; selected pages do not establish modern all-order renormalization, gauge invariance, non-Abelian dynamics or a nonperturbative construction."
      ]
    },
    {
      "id": "phys:virtual-process-replay-context",
      "name": "Synthetic scattering kinematics",
      "kind": "context",
      "description": "Use exact rational four-vectors with metric +--- and c=1. Set synthetic mass m=4, incoming (5,3,0,0),(5,-3,0,0) and outgoing (5,9/5,12/5,0),(5,-9/5,-12/5,0); check conservation, external mass shells and s,t,u under two rational proper boosts. Include a forward-transfer boundary and generic complex-number interference controls.",
      "claimIds": [
        "M-phys-virtual-process-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        },
        {
          "sourceId": "virtual-process-verifier",
          "locator": "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls"
        }
      ],
      "openObligations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction."
      ]
    },
    {
      "id": "phys:virtual-process-arithmetic",
      "name": "External mass shells and exchange-transfer algebra",
      "kind": "scoped-process",
      "description": "All four synthetic external momenta have p^2=16 and conserved total four-momentum. The exchange q=p1-p3=(0,6/5,-12/5,0) has q^2=t=-36/5, with s=100 and u=-144/5, so s+t+u=64=4m^2. Two rational boosts preserve these invariants. Forward scattering permits t=0; generic amplitudes 1 and -1 cancel before squaring.",
      "claimIds": [
        "C-phys-virtual-process-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        },
        {
          "sourceId": "virtual-process-verifier",
          "locator": "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls"
        }
      ],
      "openObligations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:quantum-field-framework-perturbative-amplitude",
      "source": "phys:quantum-field-framework",
      "target": "phys:perturbative-amplitude",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target convention is defined within the specified perturbative framework and process boundary; this is not a physical generation or maintenance arrow.",
      "claimIds": [
        "D-phys-perturbative-amplitude"
      ]
    },
    {
      "id": "physics:perturbative-amplitude-internal-propagator",
      "source": "phys:perturbative-amplitude",
      "target": "phys:internal-propagator",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target convention is defined within the specified perturbative framework and process boundary; this is not a physical generation or maintenance arrow.",
      "claimIds": [
        "D-phys-internal-propagator"
      ]
    },
    {
      "id": "physics:perturbative-amplitude-external-scattering-state",
      "source": "phys:perturbative-amplitude",
      "target": "phys:external-scattering-state",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target convention is defined within the specified perturbative framework and process boundary; this is not a physical generation or maintenance arrow.",
      "claimIds": [
        "D-phys-external-scattering-state"
      ]
    },
    {
      "id": "physics:perturbative-amplitude-virtual-process-arithmetic",
      "source": "phys:perturbative-amplitude",
      "target": "phys:virtual-process-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared convention or synthetic preparation bounds the local kinematic and interference check; no experimental amplitude is reproduced.",
      "claimIds": [
        "M-phys-virtual-process-arithmetic"
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    },
    {
      "id": "physics:internal-propagator-virtual-process-arithmetic",
      "source": "phys:internal-propagator",
      "target": "phys:virtual-process-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared convention or synthetic preparation bounds the local kinematic and interference check; no experimental amplitude is reproduced.",
      "claimIds": [
        "M-phys-virtual-process-arithmetic"
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    },
    {
      "id": "physics:external-scattering-state-virtual-process-arithmetic",
      "source": "phys:external-scattering-state",
      "target": "phys:virtual-process-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared convention or synthetic preparation bounds the local kinematic and interference check; no experimental amplitude is reproduced.",
      "claimIds": [
        "M-phys-virtual-process-arithmetic"
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    },
    {
      "id": "physics:virtual-process-replay-context-virtual-process-arithmetic",
      "source": "phys:virtual-process-replay-context",
      "target": "phys:virtual-process-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This declared convention or synthetic preparation bounds the local kinematic and interference check; no experimental amplitude is reproduced.",
      "claimIds": [
        "M-phys-virtual-process-arithmetic"
      ],
      "contextIds": [
        "virtual-process-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "virtual-process-replay",
      "sourceId": "virtual-process-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Exact synthetic equal-mass elastic scattering",
      "preparation": "Use exact rational four-vectors with metric +--- and c=1. Set synthetic mass m=4, incoming (5,3,0,0),(5,-3,0,0) and outgoing (5,9/5,12/5,0),(5,-9/5,-12/5,0); check conservation, external mass shells and s,t,u under two rational proper boosts. Include a forward-transfer boundary and generic complex-number interference controls.",
      "observable": "External invariant masses, s,t,u, conserved four-momentum and generic interference",
      "finding": "All four synthetic external momenta have p^2=16 and conserved total four-momentum. The exchange q=p1-p3=(0,6/5,-12/5,0) has q^2=t=-36/5, with s=100 and u=-144/5, so s+t+u=64=4m^2. Two rational boosts preserve these invariants. Forward scattering permits t=0; generic amplitudes 1 and -1 cancel before squaring.",
      "limitations": [
        "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction.",
        "The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only.",
        "Internal four-momenta are not constrained to a free on-shell relation, but an integration includes pole regions: internal does not mean always off shell. Four-momentum conservation is retained. Matrix ordering along a fermion line is not a measured chronology or a license to borrow energy temporarily."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): exact synthetic equal-mass elastic kinematics in the +--- convention, two rational boosts, forward transfer and generic complex-amplitude controls"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "A local calculation without publication metadata."
    }
  ],
  "comparisons": [
    {
      "id": "virtual-process-replay",
      "candidate": "Conserved momentum and on-shell external legs are compatible with a spacelike internal transfer in this declared elastic-scattering witness.",
      "alternative": "A virtual transfer requires a temporary failure of energy conservation, or every internal momentum must always be off shell.",
      "discriminator": "Calculate all four external mass squares, exact total momentum and t in a nonforward witness; include a forward boundary and invariant boosts. Generic interference is checked separately from any physical amplitude.",
      "result": "conditional-support",
      "limit": "The witness uses c=1, a synthetic external mass 4 and common arbitrary energy/momentum units. It demonstrates on-shell external legs, conserved total momentum and a spacelike exchange transfer; it is not actual electron-mass data, a spinor amplitude, loop integral, gauge cancellation, cross section or event reconstruction.",
      "assumptions": [
        "Internal four-momenta are not constrained to a free on-shell relation, but an integration includes pole regions: internal does not mean always off shell. Four-momentum conservation is retained. Matrix ordering along a fermion line is not a measured chronology or a license to borrow energy temporarily.",
        "External and internal are roles in a declared amplitude calculation. Changing the included sources and detectors changes the boundary; this is not a universal particle census. No individual diagram is automatically gauge independent, separately observable or an independently measured alternative.",
        "The t and u invariants label the two exchange channels in this equal-mass witness. For identical electrons the full amplitude needs fermionic antisymmetry; the local check calculates no such amplitude. Its complex-number interference control is generic algebra only.",
        "Existing line, magnetic-moment and scattering results support their specified observable models; none counts virtual particles or uniquely establishes a vacuum substance. The original card supplies no derived universal formation/maintenance arrow, parent weights or carrier-count minima."
      ],
      "sourceIds": [
        "feynman1949-amplitudes",
        "virtual-process-verifier"
      ],
      "claimIds": [
        "C-phys-virtual-process-arithmetic"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:perturbative-amplitude",
      "role": "definition",
      "denotes": "In the selected QED scattering construction, a perturbative amplitude combines the required terms for specified external states and interaction order before a transition probability is formed. Alternatives can interfere; for identical electrons the direct and exchanged two-electron amplitudes are antisymmetrized.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-perturbative-amplitude"
      ]
    },
    {
      "nodeId": "phys:internal-propagator",
      "role": "definition",
      "denotes": "An internal line denotes a propagator kernel joining vertices in a specified perturbative amplitude. In the selected Fourier convention the photon includes (k^2+i0)^-1 and the electron an inverse Dirac operator. Vertex momentum conservation is imposed; loop four-momenta are integrated rather than individually restricted to a free mass shell.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-internal-propagator"
      ]
    },
    {
      "nodeId": "phys:external-scattering-state",
      "role": "definition",
      "denotes": "External states specify the initial and final boundary of the scattering calculation. In the stated free plane-wave convention external electron momenta satisfy p^2=m^2, while external photons and source normalization require their own prescribed state factors. This definition does not assert general nonperturbative asymptotic completeness.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-external-scattering-state"
      ]
    },
    {
      "nodeId": "phys:virtual-process-replay-context",
      "role": "model-context",
      "denotes": "Use exact rational four-vectors with metric +--- and c=1. Set synthetic mass m=4, incoming (5,3,0,0),(5,-3,0,0) and outgoing (5,9/5,12/5,0),(5,-9/5,-12/5,0); check conservation, external mass shells and s,t,u under two rational proper boosts. Include a forward-transfer boundary and generic complex-number interference controls.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-virtual-process-replay-context"
      ]
    },
    {
      "nodeId": "phys:virtual-process-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "All four synthetic external momenta have p^2=16 and conserved total four-momentum. The exchange q=p1-p3=(0,6/5,-12/5,0) has q^2=t=-36/5, with s=100 and u=-144/5, so s+t+u=64=4m^2. Two rational boosts preserve these invariants. Forward scattering permits t=0; generic amplitudes 1 and -1 cancel before squaring.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-virtual-process-arithmetic"
      ]
    }
  ]
};

/** Preserve amplitude boundaries and finite kinematic-check ownership. */
export function validateVirtualProcessContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing virtual-process ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Virtual-process ${kind} changed ${id}.${key}: preserve amplitude and kinematic scope`);
    }
  }
}
