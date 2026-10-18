import assert from "node:assert/strict";

export const DIRECTIONAL_STABILITY_SCOPE_CHECKS = new Map();
export const DIRECTIONAL_STABILITY_SCOPE_ANALYTICAL_SOURCES = new Map();
export const DIRECTIONAL_STABILITY_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:directional-excitation-boundary",
      "D-phys-directional-excitation-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:free-scalar-propagation-directional-excitation-boundary",
      [
        "phys:free-scalar-propagation",
        "phys:directional-excitation-boundary"
      ]
    ],
    [
      "physics:field-anisotropy-boundary-directional-excitation-boundary",
      [
        "phys:field-anisotropy-boundary",
        "phys:directional-excitation-boundary"
      ]
    ],
    [
      "physics:photon-polarization-scope-directional-excitation-boundary",
      [
        "phys:photon-polarization-scope",
        "phys:directional-excitation-boundary"
      ]
    ],
    [
      "physics:free-field-time-evolution-directional-excitation-boundary",
      [
        "phys:free-field-time-evolution",
        "phys:directional-excitation-boundary"
      ]
    ],
    [
      "physics:resonance-lifetime-convention-directional-excitation-boundary",
      [
        "phys:resonance-lifetime-convention",
        "phys:directional-excitation-boundary"
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
      "id": "legacy-0",
      "kind": "legacy-catalogue",
      "title": "Original Level 0 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-0.json",
      "sha256": "761dab2265dd9e9275e8ff5feb8447eded7e5ed1fc42c9480e36a70cb8a59988",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/",
          "/14/Description"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "legacy-1",
      "kind": "legacy-catalogue",
      "title": "Original Level 1 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-1.json",
      "sha256": "b1bc5f0fe4b9741f57807d24b638b26a75b2b6e77a32c44b3f3711c8fd30a91a",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/",
          "/0/Description"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "tong-qft-free-fields",
      "kind": "research-publication",
      "title": "Quantum Field Theory: Free Fields (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S2.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "Section 2.3 opening: vacuum and normal ordering",
          "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "Section 2.7 opening before 2.7.1: vacuum two-point function"
        ],
        "limit": "Author lecture notes for the 2006-2007 course, in the HTML edition dated 15 October 2021. Only the listed sections supply support; no complete interacting or gauge-field quantization is reviewed. Formula locators use section names because HTML and PDF equation numbering differ. The separately bound field-dynamics verifier checks finite formal oscillator-mode algebra under declared assumptions; no complete continuum or interacting construction, or experimental reproduction, is claimed."
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
      "id": "D-phys-directional-excitation-boundary",
      "kind": "review-finding",
      "statement": "A directional excitation claim must distinguish dispersion and envelope velocity, damping or attenuation, a localization criterion and intrinsic decay lifetime. They are different observables and require a specified model, state, environment, frame, held-fixed controls and directional comparison. The supplied free scalar propagation and photon polarization definitions establish no anisotropic environment or unequal directional persistence. No measured directional stability, localized transport bias or Level-0-to-field mechanism is admitted.",
      "scope": "Interpretation boundary for source-card 1.34, its proposed parents and conflated directional excitation observables; no observed asymmetry or transport mechanism.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
          "role": "supports",
          "note": "The specified free scalar dispersion supports the model comparison only, not a universal directional persistence law."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
          "role": "supports",
          "note": "Conserved free number sectors and the distinction between sharp momenta and smeared states limit persistence and localization claims."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Free evolution and spacelike commutators do not identify group velocity with a signal front or establish an anisotropic response."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units",
          "role": "supports",
          "note": "The reviewed exponential proper-lifetime and laboratory survival convention supplies a contrast with packet motion; no new width or measurement is inferred."
        },
        {
          "sourceId": "legacy-1",
          "locator": "/",
          "role": "provenance",
          "note": "Original source card /34, including its four proposed parents, numerical defaults and unsupported evidence placeholders."
        },
        {
          "sourceId": "legacy-0",
          "locator": "/",
          "role": "provenance",
          "note": "Original localized-transport-bias proposal /23; its author classification is not physical evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A dispersion relation specifies frequency versus momentum; it is not a damping law, attenuation length, localization length or intrinsic decay width. Each quantity needs its own definition and compatible observable. Packet spreading, redistribution or escape from an observation region can change a detected amplitude or count without particle decay; no localization or retention criterion is supplied by the original property label.",
        "Only within the declared exponential-survival approximation does the PDG convention give tau_proper=1/Gamma and P(t_lab)=exp(-Gamma*t_lab/gamma) in hbar=c=1, with Gamma an energy width and gamma the fixed Lorentz factor. This is a formal decay convention, not an exact survival law at every time, a new complex-pole calculation or a measured lifetime. Detector linewidth, instrumental broadening, scattering and path attenuation cannot automatically become intrinsic decay width.",
        "A unit-modulus free-mode phase and conservation of the full state norm do not alone establish persistence of a selected unstable component or spatially localized packet. Unitary evolution can transfer amplitude out of a selected subspace. The supplied free model preserves its Fock number sector, but this does not freeze the packet shape or generalize to interacting or open subsystems.",
        "Comparing different axes at fixed momentum magnitude is distinct from comparing opposite directions in one specified apparatus. Spatial anisotropy does not by itself establish opposite-direction nonreciprocity, a preferred drift or net transport. A directional comparison must hold the model, frame, preparation and apparatus controls appropriately fixed; no selected anisotropic environment or response protocol is supplied here.",
        "Original parent 1.32 supplies a scoped field-anisotropy interpretation, not a realized anisotropic regime. Parent 1.33 supplies a transverse free-photon polarization state, not a scalar polarization branch or a universal modulation of excitation persistence. Parent 1.26 supplies evolution in an already specified free scalar model, not an enabling causal intervention. These are descriptive definition dependencies; their labels do not establish necessary arising or modulation relations.",
        "Parent 0.23 remains an author-supplied methodological transport-bias proposal without a specified admissibility functional, domain, physical units, map to a field observable or testable drift or transfer prediction. The Level-0 F12 support finding remains unresolved. Neither a localized-bias label nor the neighboring anisotropy and polarization proposals supply the missing physical bridge; no Level-0 causal or construction edge is admitted.",
        "The original weights 0.40, 0.30, 0.20 and 0.10, all Nmin=Ncrit=1, necessary/enabling/contextual and arising/modulation labels, carrier codes, dependency types and direction/interaction-mode codes have no admitted quantitative or causal force. SOMA phase 2, property/type-role 3 and speculative status classify the source proposal; they do not supply a universal threshold, formation mechanism or physical occurrence.",
        "The conceptual and theoretical evidence placeholders identify no retrievable supporting publication or reviewed direction-dependent persistence, localization or transport prediction. This limits the supplied record, not the existence of anisotropic models elsewhere. No primary experiment, anisotropic-vacuum realization, carrier population, numerical replay or new computational study is admitted."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:directional-excitation-boundary",
      "name": "Directional excitation interpretation boundary",
      "kind": "definition",
      "description": "A directional excitation claim must distinguish dispersion and envelope velocity, damping or attenuation, a localization criterion and intrinsic decay lifetime. They are different observables and require a specified model, state, environment, frame, held-fixed controls and directional comparison. The supplied free scalar propagation and photon polarization definitions establish no anisotropic environment or unequal directional persistence. No measured directional stability, localized transport bias or Level-0-to-field mechanism is admitted.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units"
        },
        {
          "sourceId": "legacy-1",
          "locator": "/"
        },
        {
          "sourceId": "legacy-0",
          "locator": "/"
        }
      ],
      "openObligations": [
        "A dispersion relation specifies frequency versus momentum; it is not a damping law, attenuation length, localization length or intrinsic decay width. Each quantity needs its own definition and compatible observable. Packet spreading, redistribution or escape from an observation region can change a detected amplitude or count without particle decay; no localization or retention criterion is supplied by the original property label.",
        "Only within the declared exponential-survival approximation does the PDG convention give tau_proper=1/Gamma and P(t_lab)=exp(-Gamma*t_lab/gamma) in hbar=c=1, with Gamma an energy width and gamma the fixed Lorentz factor. This is a formal decay convention, not an exact survival law at every time, a new complex-pole calculation or a measured lifetime. Detector linewidth, instrumental broadening, scattering and path attenuation cannot automatically become intrinsic decay width.",
        "A unit-modulus free-mode phase and conservation of the full state norm do not alone establish persistence of a selected unstable component or spatially localized packet. Unitary evolution can transfer amplitude out of a selected subspace. The supplied free model preserves its Fock number sector, but this does not freeze the packet shape or generalize to interacting or open subsystems.",
        "Comparing different axes at fixed momentum magnitude is distinct from comparing opposite directions in one specified apparatus. Spatial anisotropy does not by itself establish opposite-direction nonreciprocity, a preferred drift or net transport. A directional comparison must hold the model, frame, preparation and apparatus controls appropriately fixed; no selected anisotropic environment or response protocol is supplied here.",
        "Original parent 1.32 supplies a scoped field-anisotropy interpretation, not a realized anisotropic regime. Parent 1.33 supplies a transverse free-photon polarization state, not a scalar polarization branch or a universal modulation of excitation persistence. Parent 1.26 supplies evolution in an already specified free scalar model, not an enabling causal intervention. These are descriptive definition dependencies; their labels do not establish necessary arising or modulation relations.",
        "Parent 0.23 remains an author-supplied methodological transport-bias proposal without a specified admissibility functional, domain, physical units, map to a field observable or testable drift or transfer prediction. The Level-0 F12 support finding remains unresolved. Neither a localized-bias label nor the neighboring anisotropy and polarization proposals supply the missing physical bridge; no Level-0 causal or construction edge is admitted.",
        "The original weights 0.40, 0.30, 0.20 and 0.10, all Nmin=Ncrit=1, necessary/enabling/contextual and arising/modulation labels, carrier codes, dependency types and direction/interaction-mode codes have no admitted quantitative or causal force. SOMA phase 2, property/type-role 3 and speculative status classify the source proposal; they do not supply a universal threshold, formation mechanism or physical occurrence.",
        "The conceptual and theoretical evidence placeholders identify no retrievable supporting publication or reviewed direction-dependent persistence, localization or transport prediction. This limits the supplied record, not the existence of anisotropic models elsewhere. No primary experiment, anisotropic-vacuum realization, carrier population, numerical replay or new computational study is admitted."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:free-scalar-propagation-directional-excitation-boundary",
      "source": "phys:free-scalar-propagation",
      "target": "phys:directional-excitation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The supplied free scalar envelope has scoped rotation covariance and number-sector conservation, without a directional stability or localization observation.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    },
    {
      "id": "physics:field-anisotropy-boundary-directional-excitation-boundary",
      "source": "phys:field-anisotropy-boundary",
      "target": "phys:directional-excitation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The field-anisotropy boundary specifies controlled directional questions; it does not establish an anisotropic regime or unequal persistence.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    },
    {
      "id": "physics:photon-polarization-scope-directional-excitation-boundary",
      "source": "phys:photon-polarization-scope",
      "target": "phys:directional-excitation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The photon-state polarization definition is distinct from material response, scalar dynamics and an observed directional lifetime effect.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-directional-excitation-boundary",
      "source": "phys:free-field-time-evolution",
      "target": "phys:directional-excitation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Time evolution is defined inside the chosen free scalar model and is not a causal modulation or maintenance link.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    },
    {
      "id": "physics:resonance-lifetime-convention-directional-excitation-boundary",
      "source": "phys:resonance-lifetime-convention",
      "target": "phys:directional-excitation-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing scoped width and proper-lifetime convention distinguishes intrinsic decay from envelope motion and experimental broadening; no new resonance or width is inferred.",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:directional-excitation-boundary",
      "role": "definition",
      "denotes": "A scoped boundary separating directional propagation, attenuation, localization and intrinsic decay while excluding unsupported source-card causes and the unresolved Level-0 transport bridge.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-directional-excitation-boundary"
      ]
    }
  ]
};

/** Preserve directional stability scope model, observable and source boundaries. */
export function validateDirectionalStabilityScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Directional stability scope ${kind} changed ${id}: preserve scoped model and interpretation limits`);
    }
  }
}
