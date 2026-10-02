import assert from "node:assert/strict";

export const MATTER_NEUTRINO_CHECKS = new Map();
export const MATTER_NEUTRINO_ANALYTICAL_SOURCES = new Map();
export const MATTER_NEUTRINO_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-matter-evolution",
      "D-phys-neutrino-matter-evolution"
    ],
    [
      "phys:neutrino-matter-mixing",
      "D-phys-neutrino-matter-mixing"
    ]
  ],
  "formalDependencies": [
    [
      "physics:neutrino-flavor-mixing-neutrino-matter-evolution",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-matter-evolution"
      ]
    ],
    [
      "physics:neutrino-vacuum-phase-neutrino-matter-evolution",
      [
        "phys:neutrino-vacuum-phase",
        "phys:neutrino-matter-evolution"
      ]
    ],
    [
      "physics:neutrino-matter-evolution-neutrino-matter-mixing",
      [
        "phys:neutrino-matter-evolution",
        "phys:neutrino-matter-mixing"
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
          "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium"
        ],
        "limit": "Sections 14.3-14.4 on pages 6-10 and Section 14.5 on pages 10-13, ending before Section 14.5.1, were read; pages 8-10 and 12-13 were visually checked. These passages supply formal conventions and approximations. The solar density profile/application, experimental review, current global fits, numerical mass limits and the full underlying derivations are not admitted. The graph states its flavor-basis convention explicitly and restricts removal of the neutral-current potential to a common identity term in the active sector. Finite reactor phase checks remain separate from matter propagation; no matter-profile integration or detector likelihood is reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutrino-matter-evolution",
      "kind": "review-finding",
      "statement": "For flavor amplitudes f, i*df/dx=H_f(x)*f with H_f=U diag(m_i^2) U-dagger/(2E)+diag(V_e(x),0,0), after removing a common identity term. For neutrinos V_e=sqrt(2)*G_F*n_e(x); for antineutrinos U is complex-conjugated and V_e changes sign. For neutrinos in neutral ordinary matter the active-sector neutral-current contribution is -G_F*n_n(x)/sqrt(2) times the identity and changes only a common phase; its sign also reverses for antineutrinos before removal.",
      "scope": "Formal coherent propagation in a prescribed ordinary medium and its stated two-flavor approximation; no empirical mass-generation or solar-fit claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "supports",
          "note": "Supports the selected formal convention and its stated model limits; no experimental inference is admitted by this definition."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use a closed unitary three-active-neutrino model with standard weak interactions, hbar=c=1 and fixed positive energy in the ultrarelativistic coherent forward-scattering approximation. The prescribed medium is electrically neutral, unpolarized and locally isotropic, with nonrelativistic electrons, protons and neutrons and no appreciable muon/tau population. Incoherent scattering, absorption, neutrino-neutrino refraction, sterile states and nonstandard interactions require different models.",
        "The vector f contains flavor amplitudes, with the already declared U_alpha,i convention. The review writes its basic evolution equation in the vacuum mass basis; multiplication by the constant U gives the stated flavor-basis Hamiltonian. For antineutrinos both U becomes U* and the charged-current potential changes sign. A merely diagonal potential cannot in general be discarded; the neutral-current term is removable here because it is common to all three active flavors.",
        "Vacuum masses, the mixing matrix, energy and the medium density profile are supplied inputs. Matter-dependent eigenvalues are effective propagation parameters, not newly generated vacuum masses. This model does not determine absolute mass, Dirac/Majorana nature, an origin mechanism, universal carrier minima or a temporal emergence order.",
        "A variable density generally gives noncommuting Hamiltonians at different positions. Its evolution requires the ordered solution with initial conditions; one cannot substitute a single constant-density vacuum phase or assume adiabaticity from an instantaneous mixing angle. No actual solar/Earth profile, scattering experiment, oscillation fit or matter evolution is numerically reproduced here."
      ]
    },
    {
      "id": "D-phys-neutrino-matter-mixing",
      "kind": "review-finding",
      "statement": "In the declared two-flavor approximation set A=2E*(V_e-V_x) and Delta_m=sqrt[(Delta*cos(2 theta)-A)^2+(Delta*sin(2 theta))^2]. The eigenvalue gap is Delta_m/(2E), with cos(2 theta_m)=(Delta*cos(2 theta)-A)/Delta_m and sin(2 theta_m)=Delta*sin(2 theta)/Delta_m. Nonzero mixing is maximal at A=Delta*cos(2 theta). An instantaneous eigenbasis has the additional connection -i*R-dagger*dR/dx; adiabatic following is an approximation that neglects its inter-state coupling relative to the gap.",
      "scope": "Formal coherent propagation in a prescribed ordinary medium and its stated two-flavor approximation; no empirical mass-generation or solar-fit claim.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions",
          "role": "supports",
          "note": "Supports the selected formal convention and its stated model limits; no experimental inference is admitted by this definition."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium",
          "role": "supports",
          "note": "Supports the selected formal convention and its stated model limits; no experimental inference is admitted by this definition."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The two-flavor formula is a separately declared closed nu_e/nu_x approximation, with nu_x an active mu/tau combination, Delta=m2^2-m1^2>0, 0<theta<pi/2, E>0 and a nonzero instantaneous gap. It is not an exact reduction of every three-flavor preparation. The sine and cosine specify the angle branch; tan(2 theta_m) alone is insufficient.",
        "A=Delta*cos(2 theta) gives maximal instantaneous mixing only when the off-diagonal mixing and gap are nonzero. Resonance by itself does not establish adiabatic following, complete flavor conversion, equal observed event rates or an experimentally selected mechanism. Antineutrino propagation uses the opposite matter potential.",
        "If f=R(x)*a in an instantaneous eigenbasis, i*da/dx=[diag(lambda_i)-i*R-dagger*dR/dx]*a. Neglecting the off-diagonal derivative coupling requires it to be small compared with the relevant eigenvalue gap along the path, with nondegenerate and sufficiently smooth evolution. Abrupt changes or a small gap can invalidate that approximation. No solar survival probability or fitted density profile is supplied.",
        "A variable density generally gives noncommuting Hamiltonians at different positions. Its evolution requires the ordered solution with initial conditions; one cannot substitute a single constant-density vacuum phase or assume adiabaticity from an instantaneous mixing angle. No actual solar/Earth profile, scattering experiment, oscillation fit or matter evolution is numerically reproduced here.",
        "Vacuum masses, the mixing matrix, energy and the medium density profile are supplied inputs. Matter-dependent eigenvalues are effective propagation parameters, not newly generated vacuum masses. This model does not determine absolute mass, Dirac/Majorana nature, an origin mechanism, universal carrier minima or a temporal emergence order."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-matter-evolution",
      "name": "Coherent neutrino propagation in matter",
      "kind": "definition",
      "description": "For flavor amplitudes f, i*df/dx=H_f(x)*f with H_f=U diag(m_i^2) U-dagger/(2E)+diag(V_e(x),0,0), after removing a common identity term. For neutrinos V_e=sqrt(2)*G_F*n_e(x); for antineutrinos U is complex-conjugated and V_e changes sign. For neutrinos in neutral ordinary matter the active-sector neutral-current contribution is -G_F*n_n(x)/sqrt(2) times the identity and changes only a common phase; its sign also reverses for antineutrinos before removal.",
      "claimIds": [
        "D-phys-neutrino-matter-evolution"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 10-12, Section 14.5 and Equations 14.49-14.58: coherent forward potentials, neutral matter, propagation basis and particle-sign conventions"
        }
      ],
      "openObligations": [
        "Use a closed unitary three-active-neutrino model with standard weak interactions, hbar=c=1 and fixed positive energy in the ultrarelativistic coherent forward-scattering approximation. The prescribed medium is electrically neutral, unpolarized and locally isotropic, with nonrelativistic electrons, protons and neutrons and no appreciable muon/tau population. Incoherent scattering, absorption, neutrino-neutrino refraction, sterile states and nonstandard interactions require different models.",
        "The vector f contains flavor amplitudes, with the already declared U_alpha,i convention. The review writes its basic evolution equation in the vacuum mass basis; multiplication by the constant U gives the stated flavor-basis Hamiltonian. For antineutrinos both U becomes U* and the charged-current potential changes sign. A merely diagonal potential cannot in general be discarded; the neutral-current term is removable here because it is common to all three active flavors.",
        "Vacuum masses, the mixing matrix, energy and the medium density profile are supplied inputs. Matter-dependent eigenvalues are effective propagation parameters, not newly generated vacuum masses. This model does not determine absolute mass, Dirac/Majorana nature, an origin mechanism, universal carrier minima or a temporal emergence order.",
        "A variable density generally gives noncommuting Hamiltonians at different positions. Its evolution requires the ordered solution with initial conditions; one cannot substitute a single constant-density vacuum phase or assume adiabaticity from an instantaneous mixing angle. No actual solar/Earth profile, scattering experiment, oscillation fit or matter evolution is numerically reproduced here."
      ]
    },
    {
      "id": "phys:neutrino-matter-mixing",
      "name": "Instantaneous matter mixing and adiabatic boundary",
      "kind": "definition",
      "description": "In the declared two-flavor approximation set A=2E*(V_e-V_x) and Delta_m=sqrt[(Delta*cos(2 theta)-A)^2+(Delta*sin(2 theta))^2]. The eigenvalue gap is Delta_m/(2E), with cos(2 theta_m)=(Delta*cos(2 theta)-A)/Delta_m and sin(2 theta_m)=Delta*sin(2 theta)/Delta_m. Nonzero mixing is maximal at A=Delta*cos(2 theta). An instantaneous eigenbasis has the additional connection -i*R-dagger*dR/dx; adiabatic following is an approximation that neglects its inter-state coupling relative to the gap.",
      "claimIds": [
        "D-phys-neutrino-matter-mixing"
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
          "locator": "2025 review pages 12-13, Equations 14.59-14.65 before Section 14.5.1: instantaneous two-flavor mixing, resonance and derivative coupling in an inhomogeneous medium"
        }
      ],
      "openObligations": [
        "The two-flavor formula is a separately declared closed nu_e/nu_x approximation, with nu_x an active mu/tau combination, Delta=m2^2-m1^2>0, 0<theta<pi/2, E>0 and a nonzero instantaneous gap. It is not an exact reduction of every three-flavor preparation. The sine and cosine specify the angle branch; tan(2 theta_m) alone is insufficient.",
        "A=Delta*cos(2 theta) gives maximal instantaneous mixing only when the off-diagonal mixing and gap are nonzero. Resonance by itself does not establish adiabatic following, complete flavor conversion, equal observed event rates or an experimentally selected mechanism. Antineutrino propagation uses the opposite matter potential.",
        "If f=R(x)*a in an instantaneous eigenbasis, i*da/dx=[diag(lambda_i)-i*R-dagger*dR/dx]*a. Neglecting the off-diagonal derivative coupling requires it to be small compared with the relevant eigenvalue gap along the path, with nondegenerate and sufficiently smooth evolution. Abrupt changes or a small gap can invalidate that approximation. No solar survival probability or fitted density profile is supplied.",
        "A variable density generally gives noncommuting Hamiltonians at different positions. Its evolution requires the ordered solution with initial conditions; one cannot substitute a single constant-density vacuum phase or assume adiabaticity from an instantaneous mixing angle. No actual solar/Earth profile, scattering experiment, oscillation fit or matter evolution is numerically reproduced here.",
        "Vacuum masses, the mixing matrix, energy and the medium density profile are supplied inputs. Matter-dependent eigenvalues are effective propagation parameters, not newly generated vacuum masses. This model does not determine absolute mass, Dirac/Majorana nature, an origin mechanism, universal carrier minima or a temporal emergence order."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-matter-evolution",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-matter-evolution",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The adopted flavor and vacuum-mass basis convention fixes the potential and mixing factors in the specified propagation equation; it is not a particle-formation dependency.",
      "claimIds": [
        "D-phys-neutrino-matter-evolution"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-neutrino-matter-evolution",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:neutrino-matter-evolution",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The matter model retains the declared vacuum mass Hamiltonian and adds a prescribed coherent potential. Its zero-density limit does not establish a physical generation sequence.",
      "claimIds": [
        "D-phys-neutrino-matter-evolution"
      ]
    },
    {
      "id": "physics:neutrino-matter-evolution-neutrino-matter-mixing",
      "source": "phys:neutrino-matter-evolution",
      "target": "phys:neutrino-matter-mixing",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The instantaneous diagonalization is a declared two-flavor restriction of the coherent model, with its own mixing, gap and density-gradient assumptions; it does not infer an observed solar mechanism.",
      "claimIds": [
        "D-phys-neutrino-matter-mixing"
      ]
    }
  ],
  "studies": [],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:neutrino-matter-evolution",
      "role": "definition",
      "denotes": "For flavor amplitudes f, i*df/dx=H_f(x)*f with H_f=U diag(m_i^2) U-dagger/(2E)+diag(V_e(x),0,0), after removing a common identity term. For neutrinos V_e=sqrt(2)*G_F*n_e(x); for antineutrinos U is complex-conjugated and V_e changes sign. For neutrinos in neutral ordinary matter the active-sector neutral-current contribution is -G_F*n_n(x)/sqrt(2) times the identity and changes only a common phase; its sign also reverses for antineutrinos before removal.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-matter-evolution"
      ]
    },
    {
      "nodeId": "phys:neutrino-matter-mixing",
      "role": "definition",
      "denotes": "In the declared two-flavor approximation set A=2E*(V_e-V_x) and Delta_m=sqrt[(Delta*cos(2 theta)-A)^2+(Delta*sin(2 theta))^2]. The eigenvalue gap is Delta_m/(2E), with cos(2 theta_m)=(Delta*cos(2 theta)-A)/Delta_m and sin(2 theta_m)=Delta*sin(2 theta)/Delta_m. Nonzero mixing is maximal at A=Delta*cos(2 theta). An instantaneous eigenbasis has the additional connection -i*R-dagger*dR/dx; adiabatic following is an approximation that neglects its inter-state coupling relative to the gap.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-matter-mixing"
      ]
    }
  ]
};

/** Preserve the coherent-medium assumptions and the adiabatic approximation boundary. */
export function validateMatterNeutrinoContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing matter-neutrino ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Matter-neutrino ${kind} changed ${id}.${key}: preserve the declared medium and propagation scope`);
    }
  }
}
