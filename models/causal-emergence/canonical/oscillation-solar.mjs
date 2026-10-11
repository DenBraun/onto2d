import assert from "node:assert/strict";

export const OSCILLATION_SOLAR_CHECKS = new Map();
export const OSCILLATION_SOLAR_ANALYTICAL_SOURCES = new Map();
export const OSCILLATION_SOLAR_ADMISSION = {
  "definitions": [
    [
      "phys:solar-matter-profile",
      "D-phys-solar-matter-profile"
    ],
    [
      "phys:solar-adiabatic-survival",
      "D-phys-solar-adiabatic-survival"
    ]
  ],
  "formalDependencies": [
    [
      "physics:neutrino-matter-evolution-solar-matter-profile",
      [
        "phys:neutrino-matter-evolution",
        "phys:solar-matter-profile"
      ]
    ],
    [
      "physics:solar-matter-profile-solar-adiabatic-survival",
      [
        "phys:solar-matter-profile",
        "phys:solar-adiabatic-survival"
      ]
    ],
    [
      "physics:neutrino-matter-mixing-solar-adiabatic-survival",
      [
        "phys:neutrino-matter-mixing",
        "phys:solar-adiabatic-survival"
      ]
    ],
    [
      "physics:neutrino-vacuum-phase-solar-adiabatic-survival",
      [
        "phys:neutrino-vacuum-phase",
        "phys:solar-adiabatic-survival"
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
      "id": "pdg2025-neutrino-mixing",
      "kind": "research-publication",
      "title": "Neutrino Masses, Mixing, and Oscillations: Review of Particle Physics, 2025 update",
      "authors": [
        "M. C. Gonzalez-Garcia",
        "R. Wendell"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-neutrino-mixing.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-review-passages",
        "locators": [
          "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium",
          "2025 review pages 13-15, Section 14.5.1 and Equations 14.66-14.70, ending before Section 14.6: approximate solar electron density, adiabatic phase-averaged survival and limiting regimes"
        ],
        "limit": "Sections 14.3-14.4 on pages 6-10 and Section 14.5 including 14.5.1 on pages 10-15, ending before Section 14.6, were read; pages 8-10 and 12-15 were visually checked. These are selected formal conventions and approximate solar applications, not a review of experimental results or current global fits. The solar exponential profile has a stated radial domain and an externally supplied central density; production and detector weights are supplied inputs, not reconstructed distributions. Page 14 prints A0=2 E G_F n_e,0 without the sqrt(2) in the charged-current potential of Equation 14.53, and also prints the dimensionally inconsistent Delta m^2/E >> L_Sun-Earth. The graph instead uses A=2E V_e with V_e=sqrt(2)G_F n_e and the dimensionless phase/smearing convention of Equations 14.40-14.42. The sin^2(theta) limit in Equation 14.70 is restricted to the preceding high-density and adiabatic assumptions. No matter-profile integration, solar production calculation, numerical global fit, detector likelihood or unique empirical MSW mechanism is reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-solar-matter-profile",
      "kind": "review-finding",
      "statement": "Use the review's approximate radial solar electron density n_e(R)=n_e(0)*exp(-R/r0) for 0<=R<0.9 R_sun, with r0=R_sun/10.54 (quoted approximately as 6.6e7 m or 3.3e14 eV^-1). In the declared ordinary-matter convention V_e(R)=sqrt(2)*G_F*n_e(R) and A(R,E)=2E*V_e(R). A neutrino produced at radius R_p samples n_e(R_p), which is generally different from the central normalization n_e(0).",
      "scope": "Selected formal solar application of the coherent matter model; no new acquisition, numerical propagation or detector fit.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "supports",
          "note": "Supplies the declared model convention and its scoped approximation, not a new observed solar result."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 13-15, Section 14.5.1 and Equations 14.66-14.70, ending before Section 14.6: approximate solar electron density, adiabatic phase-averaged survival and limiting regimes",
          "role": "supports",
          "note": "Supplies the declared model convention and its scoped approximation, not a new observed solar result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a prescribed smooth, spherically symmetric electron-density approximation within the coherent two-active-flavor solar model, with hbar=c=1, E>0 and an initially electron-flavor neutrino. The central density, solar radius and vacuum oscillation parameters are supplied inputs; no fitted central density or solar structure calculation is admitted.",
        "The approximation is stated only for R<0.9 R_sun. It is not a measured density map, an exact full-Sun profile or a neutrino production distribution. A complete numerical trajectory would also require an outer-profile continuation and boundary conditions, neither of which is constructed here.",
        "The solar discussion on page 14 omits sqrt(2) in its displayed A0 definition; the graph retains the charged-current potential from Equation 14.53 and A=2E V_e. This recorded printed inconsistency does not establish an error in any solar data analysis.",
        "The profile is an input to propagation, not an origin of vacuum mass or proof that a particular SNO response uniquely selects this model. Solar and terrestrial preparations, neutrinos and antineutrinos, and coherent forward propagation and incoherent transport retain distinct scopes."
      ]
    },
    {
      "id": "D-phys-solar-adiabatic-survival",
      "kind": "review-finding",
      "statement": "For the declared two-flavor solar model, adiabatic propagation to a vacuum endpoint and sufficient relative-phase averaging give P_ee(E,r)=cos^2(theta_m,p)*cos^2(theta)+sin^2(theta_m,p)*sin^2(theta)=[1+cos(2 theta_m,p)*cos(2 theta)]/2, with theta_m,p evaluated at production position r. For a source component s define a supplied nonnegative production density f_s(r|E), integral d^3r f_s=1, and a supplied nonnegative normalized energy-response weight w_s(E), integral dE w_s=1. The averaged survival is <P_ee>_s=integral dE w_s(E) integral d^3r f_s(r|E) P_ee(E,r). For a specified electron-flavor charged-current response, w_s is proportional to the unoscillated differential neutrino number flux dPhi_s/dE at the detector times its cross section and detection efficiency, with any selected-bin response included and the finite nonzero normalization divided out. Here dPhi_s/dE counts neutrinos per unit area, time and neutrino energy; the transported energy flux E*dPhi_s/dE would introduce an extra energy factor and is not the event weight.",
      "scope": "Selected formal solar application of the coherent matter model; no new acquisition, numerical propagation or detector fit.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supplies the declared model convention and its scoped approximation, not a new observed solar result."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium",
          "role": "supports",
          "note": "Supplies the declared model convention and its scoped approximation, not a new observed solar result."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 13-15, Section 14.5.1 and Equations 14.66-14.70, ending before Section 14.6: approximate solar electron density, adiabatic phase-averaged survival and limiting regimes",
          "role": "supports",
          "note": "Supplies the declared model convention and its scoped approximation, not a new observed solar result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the existing closed nu_e/nu_x approximation with Delta=m2^2-m1^2>0 and 0<theta<pi/4; nu_x is the stated active mu/tau combination. The matter mixing and nonzero gap use A=2sqrt(2)E G_F n_e. This is a formal application, not a precision three-flavor fit or a new empirical survival curve.",
        "Adiabaticity requires the off-diagonal basis-derivative coupling |d theta_m/dx| to be small compared with the instantaneous eigenvalue gap along the actual path, together with smooth evolution to the vacuum endpoint. The exponential profile by itself does not establish that condition. No numerical check over a solar path is claimed.",
        "The interference terms must be sufficiently smeared by the actual source, baseline and detector resolution/weights. A long baseline alone is not a replacement for this averaging condition, and averaged probabilities do not mean that the local forward-scattering Hamiltonian is incoherent. Page 14 prints Delta m^2/E >> L_Sun-Earth; this dimensionally inconsistent statement is not used. The relevant phase is dimensionless Delta m^2 L/(4E), with averaging as in Equations 14.40-14.42.",
        "At fixed mixing angle the low-density limit A_p/Delta -> 0 gives P_ee -> 1-sin^2(2 theta)/2, while A_p/Delta -> infinity gives P_ee -> sin^2(theta) under the same adiabatic and phase-averaging conditions. Merely crossing resonance, A_p>Delta cos(2 theta), does not make the high-density limit exact and does not guarantee adiabaticity.",
        "The production density includes the spatial measure as written, is source-component dependent and may depend on energy; it is not n_e(R), a delta function at the solar center or a fitted distribution in this graph. The source spectrum, production distribution, density normalization and detector weights are all external inputs. No actual production/energy integral, event spectrum, covariance or fit is evaluated.",
        "The endpoint is the exposed Earth surface before terrestrial matter propagation. Earth regeneration, nonadiabatic jump probabilities, absorption, neutrino-neutrino refraction, sterile states and nonstandard interactions require additional models. For elastic scattering or neutral-current channels, the corresponding flavor-dependent response must be folded explicitly; a single electron-flavor charged-current weight is not a universal event-rate formula.",
        "The model is not inferred by subtracting SNO fluxes or by pooling solar, reactor and accelerator acquisitions. It does not establish an absolute mass, mass-generation mechanism, flavor-object identity, necessary formation order, universal parent weight or carrier minimum."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:solar-matter-profile",
      "name": "Approximate solar electron-density input",
      "kind": "definition",
      "description": "Use the review's approximate radial solar electron density n_e(R)=n_e(0)*exp(-R/r0) for 0<=R<0.9 R_sun, with r0=R_sun/10.54 (quoted approximately as 6.6e7 m or 3.3e14 eV^-1). In the declared ordinary-matter convention V_e(R)=sqrt(2)*G_F*n_e(R) and A(R,E)=2E*V_e(R). A neutrino produced at radius R_p samples n_e(R_p), which is generally different from the central normalization n_e(0).",
      "claimIds": [
        "D-phys-solar-matter-profile"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 13-15, Section 14.5.1 and Equations 14.66-14.70, ending before Section 14.6: approximate solar electron density, adiabatic phase-averaged survival and limiting regimes"
        }
      ],
      "openObligations": [
        "This is a prescribed smooth, spherically symmetric electron-density approximation within the coherent two-active-flavor solar model, with hbar=c=1, E>0 and an initially electron-flavor neutrino. The central density, solar radius and vacuum oscillation parameters are supplied inputs; no fitted central density or solar structure calculation is admitted.",
        "The approximation is stated only for R<0.9 R_sun. It is not a measured density map, an exact full-Sun profile or a neutrino production distribution. A complete numerical trajectory would also require an outer-profile continuation and boundary conditions, neither of which is constructed here.",
        "The solar discussion on page 14 omits sqrt(2) in its displayed A0 definition; the graph retains the charged-current potential from Equation 14.53 and A=2E V_e. This recorded printed inconsistency does not establish an error in any solar data analysis.",
        "The profile is an input to propagation, not an origin of vacuum mass or proof that a particular SNO response uniquely selects this model. Solar and terrestrial preparations, neutrinos and antineutrinos, and coherent forward propagation and incoherent transport retain distinct scopes."
      ]
    },
    {
      "id": "phys:solar-adiabatic-survival",
      "name": "Adiabatic solar survival and source averaging",
      "kind": "definition",
      "description": "For the declared two-flavor solar model, adiabatic propagation to a vacuum endpoint and sufficient relative-phase averaging give P_ee(E,r)=cos^2(theta_m,p)*cos^2(theta)+sin^2(theta_m,p)*sin^2(theta)=[1+cos(2 theta_m,p)*cos(2 theta)]/2, with theta_m,p evaluated at production position r. For a source component s define a supplied nonnegative production density f_s(r|E), integral d^3r f_s=1, and a supplied nonnegative normalized energy-response weight w_s(E), integral dE w_s=1. The averaged survival is <P_ee>_s=integral dE w_s(E) integral d^3r f_s(r|E) P_ee(E,r). For a specified electron-flavor charged-current response, w_s is proportional to the unoscillated differential neutrino number flux dPhi_s/dE at the detector times its cross section and detection efficiency, with any selected-bin response included and the finite nonzero normalization divided out. Here dPhi_s/dE counts neutrinos per unit area, time and neutrino energy; the transported energy flux E*dPhi_s/dE would introduce an extra energy factor and is not the event weight.",
      "claimIds": [
        "D-phys-solar-adiabatic-survival"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 13-15, Section 14.5.1 and Equations 14.66-14.70, ending before Section 14.6: approximate solar electron density, adiabatic phase-averaged survival and limiting regimes"
        }
      ],
      "openObligations": [
        "Use the existing closed nu_e/nu_x approximation with Delta=m2^2-m1^2>0 and 0<theta<pi/4; nu_x is the stated active mu/tau combination. The matter mixing and nonzero gap use A=2sqrt(2)E G_F n_e. This is a formal application, not a precision three-flavor fit or a new empirical survival curve.",
        "Adiabaticity requires the off-diagonal basis-derivative coupling |d theta_m/dx| to be small compared with the instantaneous eigenvalue gap along the actual path, together with smooth evolution to the vacuum endpoint. The exponential profile by itself does not establish that condition. No numerical check over a solar path is claimed.",
        "The interference terms must be sufficiently smeared by the actual source, baseline and detector resolution/weights. A long baseline alone is not a replacement for this averaging condition, and averaged probabilities do not mean that the local forward-scattering Hamiltonian is incoherent. Page 14 prints Delta m^2/E >> L_Sun-Earth; this dimensionally inconsistent statement is not used. The relevant phase is dimensionless Delta m^2 L/(4E), with averaging as in Equations 14.40-14.42.",
        "At fixed mixing angle the low-density limit A_p/Delta -> 0 gives P_ee -> 1-sin^2(2 theta)/2, while A_p/Delta -> infinity gives P_ee -> sin^2(theta) under the same adiabatic and phase-averaging conditions. Merely crossing resonance, A_p>Delta cos(2 theta), does not make the high-density limit exact and does not guarantee adiabaticity.",
        "The production density includes the spatial measure as written, is source-component dependent and may depend on energy; it is not n_e(R), a delta function at the solar center or a fitted distribution in this graph. The source spectrum, production distribution, density normalization and detector weights are all external inputs. No actual production/energy integral, event spectrum, covariance or fit is evaluated.",
        "The endpoint is the exposed Earth surface before terrestrial matter propagation. Earth regeneration, nonadiabatic jump probabilities, absorption, neutrino-neutrino refraction, sterile states and nonstandard interactions require additional models. For elastic scattering or neutral-current channels, the corresponding flavor-dependent response must be folded explicitly; a single electron-flavor charged-current weight is not a universal event-rate formula.",
        "The model is not inferred by subtracting SNO fluxes or by pooling solar, reactor and accelerator acquisitions. It does not establish an absolute mass, mass-generation mechanism, flavor-object identity, necessary formation order, universal parent weight or carrier minimum."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:neutrino-matter-evolution-solar-matter-profile",
      "source": "phys:neutrino-matter-evolution",
      "target": "phys:solar-matter-profile",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The approximate solar density supplies the prescribed-medium input under the existing coherent weak-potential convention; it is not a mass-generation mechanism.",
      "claimIds": [
        "D-phys-solar-matter-profile"
      ]
    },
    {
      "id": "physics:solar-matter-profile-solar-adiabatic-survival",
      "source": "phys:solar-matter-profile",
      "target": "phys:solar-adiabatic-survival",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The production-point density enters the instantaneous mixing angle; the approximate profile does not supply the source production weights or establish adiabaticity.",
      "claimIds": [
        "D-phys-solar-adiabatic-survival"
      ]
    },
    {
      "id": "physics:neutrino-matter-mixing-solar-adiabatic-survival",
      "source": "phys:neutrino-matter-mixing",
      "target": "phys:solar-adiabatic-survival",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The survival prescription uses the declared matter-angle branch, nonzero gap and derivative-coupling condition before neglecting transitions between instantaneous eigenstates.",
      "claimIds": [
        "D-phys-solar-adiabatic-survival"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-solar-adiabatic-survival",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:solar-adiabatic-survival",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The endpoint probability additionally assumes sufficient relative-phase averaging with the supplied source and detector weights; it is not obtained by setting the vacuum phase to zero.",
      "claimIds": [
        "D-phys-solar-adiabatic-survival"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:solar-matter-profile",
      "role": "definition",
      "denotes": "A supplied radial electron-density approximation with a stated domain, distinct from the neutrino production distribution.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-solar-matter-profile"
      ]
    },
    {
      "nodeId": "phys:solar-adiabatic-survival",
      "role": "definition",
      "denotes": "A conditional two-flavor survival and averaging prescription; no computed solar distribution or new measured survival probability.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-solar-adiabatic-survival"
      ]
    }
  ]
};

/** A literature model remains conditional on its profile, phase averaging and supplied response. */
export function validateOscillationSolarContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Solar application ${kind} changed ${id}: preserve the prescribed-model and averaging boundary`);
    }
  }
}
