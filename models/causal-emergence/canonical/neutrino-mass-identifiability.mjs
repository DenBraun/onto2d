import assert from "node:assert/strict";

export const NEUTRINO_MASS_IDENTIFIABILITY_CHECKS = new Map();
export const NEUTRINO_MASS_IDENTIFIABILITY_ANALYTICAL_SOURCES = new Map();
export const NEUTRINO_MASS_IDENTIFIABILITY_ADMISSION = {
  "definitions": [
    [
      "phys:oscillation-mass-identifiability",
      "D-phys-oscillation-mass-identifiability"
    ]
  ],
  "formalDependencies": [
    [
      "physics:neutrino-vacuum-phase-oscillation-mass-identifiability",
      [
        "phys:neutrino-vacuum-phase",
        "phys:oscillation-mass-identifiability"
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
  "sources": [],
  "claims": [
    {
      "id": "D-phys-oscillation-mass-identifiability",
      "kind": "review-finding",
      "statement": "In the leading coherent ultrarelativistic vacuum model with hbar=c=1, hold U, L and E fixed. Replacing every m_i^2 by m_i^2+kappa multiplies A_alpha-to-beta by exp[-i kappa L/(2E)], leaving P=|A|^2 unchanged. This holds for shifts preserving m_i^2+kappa>=0 and (m_i^2+kappa)/E^2<<1. For three nonnegative squared masses, Delta21=m_2^2-m_1^2 and Delta31=m_3^2-m_1^2 both nonzero and unequal imply three pairwise distinct values; at most one can be zero, so at least two masses are nonzero.",
      "scope": "Formal identifiability of squared-mass differences in a supplied leading three-state vacuum oscillation model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "The leading vacuum phase and squared-mass-difference dependence support this explicit algebraic consequence; the conditional positivity argument and counterexamples are stated here, not reported as new empirical results."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a conditional algebraic consequence of the declared leading vacuum phase, not a new measurement, global fit or independent replication of mass splittings. Fixed preparation, energy and detector response are assumed; endpoint kinematics, time of flight, coherence conditions and higher-order dispersion are not covered by this invariance.",
        "An admissible common shift changes the absolute mass scale without changing these probabilities. No unique absolute masses, measured upper bound, mass ordering, Dirac versus Majorana character or mass-generation mechanism follows from this statement. Keeping the ultrarelativistic approximation valid is not an experimentally inferred upper bound.",
        "Two nonzero differences alone are insufficient: (m_1^2,m_2^2,m_3^2)=(q,0,0), q>0, gives Delta21=Delta31=-q and only one nonzero mass. The unequal-differences condition excludes this degeneracy. Conversely (0,a,b), with a,b>0 and a!=b, meets the condition while one mass is zero; all three need not be nonzero.",
        "The three-state and nonnegative-mass assumptions are explicit. Separate historical effective two-flavor fits are not automatically a joint closed three-state likelihood; their best-fit numbers are not identified here with exact three-state splittings or pooled into new constraints."
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:oscillation-mass-identifiability",
      "name": "Oscillation mass identifiability",
      "kind": "definition",
      "description": "In the leading coherent ultrarelativistic vacuum model with hbar=c=1, hold U, L and E fixed. Replacing every m_i^2 by m_i^2+kappa multiplies A_alpha-to-beta by exp[-i kappa L/(2E)], leaving P=|A|^2 unchanged. This holds for shifts preserving m_i^2+kappa>=0 and (m_i^2+kappa)/E^2<<1. For three nonnegative squared masses, Delta21=m_2^2-m_1^2 and Delta31=m_3^2-m_1^2 both nonzero and unequal imply three pairwise distinct values; at most one can be zero, so at least two masses are nonzero.",
      "claimIds": [
        "D-phys-oscillation-mass-identifiability"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        }
      ],
      "openObligations": [
        "This is a conditional algebraic consequence of the declared leading vacuum phase, not a new measurement, global fit or independent replication of mass splittings. Fixed preparation, energy and detector response are assumed; endpoint kinematics, time of flight, coherence conditions and higher-order dispersion are not covered by this invariance.",
        "An admissible common shift changes the absolute mass scale without changing these probabilities. No unique absolute masses, measured upper bound, mass ordering, Dirac versus Majorana character or mass-generation mechanism follows from this statement. Keeping the ultrarelativistic approximation valid is not an experimentally inferred upper bound.",
        "Two nonzero differences alone are insufficient: (m_1^2,m_2^2,m_3^2)=(q,0,0), q>0, gives Delta21=Delta31=-q and only one nonzero mass. The unequal-differences condition excludes this degeneracy. Conversely (0,a,b), with a,b>0 and a!=b, meets the condition while one mass is zero; all three need not be nonzero.",
        "The three-state and nonnegative-mass assumptions are explicit. Separate historical effective two-flavor fits are not automatically a joint closed three-state likelihood; their best-fit numbers are not identified here with exact three-state splittings or pooled into new constraints."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:neutrino-vacuum-phase-oscillation-mass-identifiability",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:oscillation-mass-identifiability",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared leading vacuum amplitude supplies the common-phase invariance and the conditional interpretation of squared-mass differences; it is a formal input, not a measured mass-generation event.",
      "claimIds": [
        "D-phys-oscillation-mass-identifiability"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:oscillation-mass-identifiability",
      "role": "definition",
      "denotes": "A conditional algebraic boundary between oscillation squared-mass differences and the unmeasured absolute mass offset, without an observed occurrence.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-oscillation-mass-identifiability"
      ]
    }
  ]
};

/** Preserve the approximation, common-offset invariance and conditional positivity argument. */
export function validateNeutrinoMassIdentifiabilityContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Neutrino mass identifiability ${kind} changed ${id}: preserve the leading vacuum model and conditional mass inference`);
    }
  }
}
