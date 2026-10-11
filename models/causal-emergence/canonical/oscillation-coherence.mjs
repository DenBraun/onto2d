import assert from "node:assert/strict";

export const OSCILLATION_COHERENCE_CHECKS = new Map();
export const OSCILLATION_COHERENCE_ANALYTICAL_SOURCES = new Map();
export const OSCILLATION_COHERENCE_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-production-detection-coherence",
      "D-phys-neutrino-production-detection-coherence"
    ],
    [
      "phys:neutrino-wave-packet-overlap",
      "D-phys-neutrino-wave-packet-overlap"
    ],
    [
      "phys:neutrino-oscillation-averaging",
      "D-phys-neutrino-oscillation-averaging"
    ]
  ],
  "formalDependencies": [
    [
      "physics:neutrino-flavor-mixing-neutrino-production-detection-coherence",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-production-detection-coherence"
      ]
    ],
    [
      "physics:neutrino-vacuum-phase-neutrino-wave-packet-overlap",
      [
        "phys:neutrino-vacuum-phase",
        "phys:neutrino-wave-packet-overlap"
      ]
    ],
    [
      "physics:neutrino-production-detection-coherence-neutrino-wave-packet-overlap",
      [
        "phys:neutrino-production-detection-coherence",
        "phys:neutrino-wave-packet-overlap"
      ]
    ],
    [
      "physics:neutrino-vacuum-phase-neutrino-oscillation-averaging",
      [
        "phys:neutrino-vacuum-phase",
        "phys:neutrino-oscillation-averaging"
      ]
    ],
    [
      "physics:neutrino-wave-packet-overlap-neutrino-oscillation-averaging",
      [
        "phys:neutrino-wave-packet-overlap",
        "phys:neutrino-oscillation-averaging"
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
      "id": "akhmedov2009-coherence",
      "kind": "research-publication",
      "title": "Paradoxes of neutrino oscillations",
      "authors": [
        "Evgeny Kh. Akhmedov",
        "Alexei Yu. Smirnov"
      ],
      "year": 2009,
      "doi": "10.1134/S1063778809080122",
      "url": "https://arxiv.org/abs/0905.1903v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-theory-passages",
        "locators": [
          "Author v2 pages 5-11, Sections 3.1-3.2, Equations 8-33: narrow vacuum packets, production/detection overlap and the coherent limit",
          "Author v2 pages 19-28, Sections 5.1-5.4, Equations 58-71: intrinsic uncertainties, localization, packet separation and detection coherence",
          "Author v2 pages 28-33, Sections 6-7, Equations 72-82: stationary-source averaging and production/detection dependence",
          "Author v2 pages 36-40, Sections 9-10 and Equation 95: packet, observable and standard-probability limits"
        ],
        "limit": "Read the listed sections of arXiv:0905.1903v2 (20 June 2009), published in Physics of Atomic Nuclei 72, 1363-1381 (2009); visually checked pages 8, 10, 23-24, 27, 29 and 38. The accessed regenerated PDF has 46 pages and a 2024 title date, not a new publication year. No publisher-PDF, complete appendix or cited-source review is claimed. The admission is restricted to the stated vacuum approximations and observable averaging; no experimental coherence length, packet shape or likelihood is reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutrino-production-detection-coherence",
      "kind": "review-finding",
      "statement": "Interfering neutrino mass alternatives must remain indistinguishable in the specified production and detection processes. In a declared apparatus frame, |Delta E_ik| << sigma_E and |Delta p_ik| << sigma_p describe a sufficient coherent regime within the reviewed localized-state treatment; the widths are intrinsic process uncertainties, not the beam energy spread or reconstructed-energy bin size.",
      "scope": "Production/detection conditions for the declared closed, unitary vacuum flavor model; longitudinal momentum and hbar=c=1 conventions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 19-28, Sections 5.1-5.4, Equations 58-71: intrinsic uncertainties, localization, packet separation and detection coherence",
          "role": "supports",
          "note": "Sections 5.2-5.3 distinguish intrinsic production/detection uncertainties and localization from the on-shell packet width."
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 28-33, Sections 6-7, Equations 72-82: stationary-source averaging and production/detection dependence",
          "role": "limits",
          "note": "Section 7 separates factorization of an event process from a universal oscillation probability."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Specify the external states and their localization, energy-momentum correlations and process-dependent widths. The two inequalities are a sufficient regime, not a universal necessary-and-sufficient or frame-independent numerical cut.",
        "Do not replace source/absorber localization by a universal requirement that packet length be shorter than the oscillation length. The reviewed quasistationary case can violate that requirement; equal-energy and equal-momentum assignments are not fundamental postulates.",
        "The standard unsuppressed coherent, production/detection-independent oscillation factor additionally needs negligible propagation separation and reaction energy release large compared with the relevant neutrino masses or mass differences. A fully averaged limit can also be universal; near-threshold process dependence is not removed by assuming unitary mixing."
      ]
    },
    {
      "id": "D-phys-neutrino-wave-packet-overlap",
      "kind": "review-finding",
      "statement": "For narrow, nondispersing vacuum packets, v_gi=p_i/E_i with E_i=sqrt(p_i^2+m_i^2). Interference involves the overlap of effective production/detection envelopes G_i(L-v_gi t). With v_g=(v_gi+v_gk)/2 and nonzero Delta v_g=|v_gi-v_gk|, l_coh approximately v_g sigma_x/Delta v_g is a separation scale: L << l_coh leaves that overlap unsuppressed, while substantial separation suppresses its interference term. The effective sigma_x includes both emission and detection coherence.",
      "scope": "A packet-overlap scale estimate in the reviewed vacuum expansion, hbar=c=1; no specified experimental packet or measured coherence length.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 5-11, Sections 3.1-3.2, Equations 8-33: narrow vacuum packets, production/detection overlap and the coherent limit",
          "role": "supports",
          "note": "Equations 19-23 and 32 define the effective overlap and its separation condition."
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 19-28, Sections 5.1-5.4, Equations 58-71: intrinsic uncertainties, localization, packet separation and detection coherence",
          "role": "supports",
          "note": "Section 5.4 explains why detection coherence must be included even after the emitted packets separate."
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 36-40, Sections 9-10 and Equation 95: packet, observable and standard-probability limits",
          "role": "limits",
          "note": "The source confines its derivation to vacuum and distinguishes the packet and interaction coherence conditions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The approximation linearizes the dispersion relation over a narrow momentum distribution and neglects packet spreading. The characteristic length is shape-dependent, not an exact universal damping law or sharp boundary; equal group velocities produce no separation by this mechanism.",
        "A source-only packet width is insufficient. A sufficiently coherent detection process can allow separated emitted components to interfere; the effective overlap already incorporates this condition, not an ordinary detector energy-bin width.",
        "Loss of a local interference term does not establish fundamental nonunitarity, collapse, absorption or neutrino decay. Propagation through varying matter, scattering and environmental dynamics require separately specified evolution and are not derived here."
      ]
    },
    {
      "id": "D-phys-neutrino-oscillation-averaging",
      "kind": "review-finding",
      "statement": "For a specified selected channel in a regime admitting a factored oscillation probability, define P_bar = integral dL dE w(L,E) P(L,E), with L>=0, E>0, w>=0 and integral w=1. The weight represents the stated source/baseline distribution and energy-dependent event response. Unresolved variation of the relative vacuum phase Delta m^2 L/(2E) can suppress the observed oscillatory pattern even when each production-propagation-detection contribution is coherent.",
      "scope": "A normalized event-weight average and its coherence boundary, not an event count, fitted likelihood or experimentally determined weight.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 5-11, Sections 3.1-3.2, Equations 8-33: narrow vacuum packets, production/detection overlap and the coherent limit",
          "role": "supports",
          "note": "Page 9 describes folding the probability with source spectrum, cross section, efficiency, resolution and source/detector volumes; the normalized weight is an explicit graph convention."
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 28-33, Sections 6-7, Equations 72-82: stationary-source averaging and production/detection dependence",
          "role": "supports",
          "note": "Sections 6-7 delimit stationary-source equivalence and the process-independent probability approximation."
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 36-40, Sections 9-10 and Equation 95: packet, observable and standard-probability limits",
          "role": "limits",
          "note": "The summary distinguishes intrinsic packet coherence from spectrum integration in observable predictions."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Actual event predictions retain flux and exposure normalization, cross sections, efficiencies, backgrounds and reconstruction response. No experiment-specific w is supplied; channel-dependent weights cannot be silently used to infer a sum over detected flavors equal to one.",
        "Macroscopic source/detector positions, ensemble energy spread and reconstruction resolution are distinct from intrinsic quantum widths. Distinct incoherent emissions are combined at the probability or event-rate level, not as one coherent amplitude.",
        "The stationary-source equivalence requires absent or irrelevant time structure and the stated time integration. Equal-energy interference components in that calculation are not a universal preparation postulate.",
        "Suppression by averaging or packet separation is not a measured fundamental decoherence mechanism. No universal packet width, new collapse law or claim that every experimental signal is phase averaged follows."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-production-detection-coherence",
      "name": "Neutrino production and detection coherence",
      "kind": "definition",
      "description": "Interfering neutrino mass alternatives must remain indistinguishable in the specified production and detection processes. In a declared apparatus frame, |Delta E_ik| << sigma_E and |Delta p_ik| << sigma_p describe a sufficient coherent regime within the reviewed localized-state treatment; the widths are intrinsic process uncertainties, not the beam energy spread or reconstructed-energy bin size.",
      "claimIds": [
        "D-phys-neutrino-production-detection-coherence"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 19-28, Sections 5.1-5.4, Equations 58-71: intrinsic uncertainties, localization, packet separation and detection coherence"
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 28-33, Sections 6-7, Equations 72-82: stationary-source averaging and production/detection dependence"
        }
      ],
      "openObligations": [
        "Specify the external states and their localization, energy-momentum correlations and process-dependent widths. The two inequalities are a sufficient regime, not a universal necessary-and-sufficient or frame-independent numerical cut.",
        "Do not replace source/absorber localization by a universal requirement that packet length be shorter than the oscillation length. The reviewed quasistationary case can violate that requirement; equal-energy and equal-momentum assignments are not fundamental postulates.",
        "The standard unsuppressed coherent, production/detection-independent oscillation factor additionally needs negligible propagation separation and reaction energy release large compared with the relevant neutrino masses or mass differences. A fully averaged limit can also be universal; near-threshold process dependence is not removed by assuming unitary mixing."
      ]
    },
    {
      "id": "phys:neutrino-wave-packet-overlap",
      "name": "Neutrino wave-packet overlap",
      "kind": "definition",
      "description": "For narrow, nondispersing vacuum packets, v_gi=p_i/E_i with E_i=sqrt(p_i^2+m_i^2). Interference involves the overlap of effective production/detection envelopes G_i(L-v_gi t). With v_g=(v_gi+v_gk)/2 and nonzero Delta v_g=|v_gi-v_gk|, l_coh approximately v_g sigma_x/Delta v_g is a separation scale: L << l_coh leaves that overlap unsuppressed, while substantial separation suppresses its interference term. The effective sigma_x includes both emission and detection coherence.",
      "claimIds": [
        "D-phys-neutrino-wave-packet-overlap"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 5-11, Sections 3.1-3.2, Equations 8-33: narrow vacuum packets, production/detection overlap and the coherent limit"
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 19-28, Sections 5.1-5.4, Equations 58-71: intrinsic uncertainties, localization, packet separation and detection coherence"
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 36-40, Sections 9-10 and Equation 95: packet, observable and standard-probability limits"
        }
      ],
      "openObligations": [
        "The approximation linearizes the dispersion relation over a narrow momentum distribution and neglects packet spreading. The characteristic length is shape-dependent, not an exact universal damping law or sharp boundary; equal group velocities produce no separation by this mechanism.",
        "A source-only packet width is insufficient. A sufficiently coherent detection process can allow separated emitted components to interfere; the effective overlap already incorporates this condition, not an ordinary detector energy-bin width.",
        "Loss of a local interference term does not establish fundamental nonunitarity, collapse, absorption or neutrino decay. Propagation through varying matter, scattering and environmental dynamics require separately specified evolution and are not derived here."
      ]
    },
    {
      "id": "phys:neutrino-oscillation-averaging",
      "name": "Neutrino oscillation averaging",
      "kind": "definition",
      "description": "For a specified selected channel in a regime admitting a factored oscillation probability, define P_bar = integral dL dE w(L,E) P(L,E), with L>=0, E>0, w>=0 and integral w=1. The weight represents the stated source/baseline distribution and energy-dependent event response. Unresolved variation of the relative vacuum phase Delta m^2 L/(2E) can suppress the observed oscillatory pattern even when each production-propagation-detection contribution is coherent.",
      "claimIds": [
        "D-phys-neutrino-oscillation-averaging"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 5-11, Sections 3.1-3.2, Equations 8-33: narrow vacuum packets, production/detection overlap and the coherent limit"
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 28-33, Sections 6-7, Equations 72-82: stationary-source averaging and production/detection dependence"
        },
        {
          "sourceId": "akhmedov2009-coherence",
          "locator": "Author v2 pages 36-40, Sections 9-10 and Equation 95: packet, observable and standard-probability limits"
        }
      ],
      "openObligations": [
        "Actual event predictions retain flux and exposure normalization, cross sections, efficiencies, backgrounds and reconstruction response. No experiment-specific w is supplied; channel-dependent weights cannot be silently used to infer a sum over detected flavors equal to one.",
        "Macroscopic source/detector positions, ensemble energy spread and reconstruction resolution are distinct from intrinsic quantum widths. Distinct incoherent emissions are combined at the probability or event-rate level, not as one coherent amplitude.",
        "The stationary-source equivalence requires absent or irrelevant time structure and the stated time integration. Equal-energy interference components in that calculation are not a universal preparation postulate.",
        "Suppression by averaging or packet separation is not a measured fundamental decoherence mechanism. No universal packet width, new collapse law or claim that every experimental signal is phase averaged follows."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-production-detection-coherence",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-production-detection-coherence",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared flavor/mass superposition supplies the alternatives whose production and detection must not distinguish their masses.",
      "claimIds": [
        "D-phys-neutrino-production-detection-coherence"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-neutrino-wave-packet-overlap",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:neutrino-wave-packet-overlap",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The plane-wave relative phase is retained within overlapping effective packets; its usual probability requires the stated coherence limits.",
      "claimIds": [
        "D-phys-neutrino-wave-packet-overlap"
      ]
    },
    {
      "id": "physics:neutrino-production-detection-coherence-neutrino-wave-packet-overlap",
      "source": "phys:neutrino-production-detection-coherence",
      "target": "phys:neutrino-wave-packet-overlap",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Coherent production and detection and continued packet overlap are separate conditions; emission coherence alone does not ensure a propagation interference signal.",
      "claimIds": [
        "D-phys-neutrino-wave-packet-overlap"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-neutrino-oscillation-averaging",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:neutrino-oscillation-averaging",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The relative L/E-dependent phase is the quantity averaged with a specified event weight; the phase formula does not determine that weight.",
      "claimIds": [
        "D-phys-neutrino-oscillation-averaging"
      ]
    },
    {
      "id": "physics:neutrino-wave-packet-overlap-neutrino-oscillation-averaging",
      "source": "phys:neutrino-wave-packet-overlap",
      "target": "phys:neutrino-oscillation-averaging",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Intrinsic loss of packet overlap and averaging over unresolved event variables are distinct routes to a suppressed interference pattern, not independent measured decoherence processes.",
      "claimIds": [
        "D-phys-neutrino-oscillation-averaging"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutrino-production-detection-coherence",
      "role": "definition",
      "denotes": "Indistinguishability and intrinsic uncertainty conditions for the mass alternatives in a specified production/detection process.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-production-detection-coherence"
      ]
    },
    {
      "nodeId": "phys:neutrino-wave-packet-overlap",
      "role": "definition",
      "denotes": "The effective overlap of mass-component packets and its conditional vacuum separation scale, rather than a measured decoherence rate.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-wave-packet-overlap"
      ]
    },
    {
      "nodeId": "phys:neutrino-oscillation-averaging",
      "role": "definition",
      "denotes": "A declared normalized selected-channel average over unresolved baseline and energy, distinct from intrinsic loss of packet overlap.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-oscillation-averaging"
      ]
    }
  ]
};

/** Preserve process coherence, packet overlap and observable averaging as distinct definitions. */
export function validateOscillationCoherenceContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Oscillation coherence ${kind} changed ${id}: preserve process and averaging conditions`);
    }
  }
}
