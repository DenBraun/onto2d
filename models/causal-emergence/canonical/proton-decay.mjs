import assert from "node:assert/strict";

export const PROTON_DECAY_CHECKS = new Map([["takenaka2020-printed-arithmetic", "C-phys-proton-decay-arithmetic"]]);

export const PROTON_DECAY_ADMISSION = {
  "definitions": [
    [
      "phys:partial-lifetime",
      "D-phys-partial-lifetime"
    ]
  ],
  "formalDependencies": [
    [
      "physics:survival-partial-lifetime",
      [
        "phys:exponential-survival",
        "phys:partial-lifetime"
      ]
    ]
  ],
  "contexts": [
    [
      "takenaka2020-search-context",
      "M-phys-takenaka2020-search-context",
      [
        "takenaka2020-search"
      ]
    ],
    [
      "takenaka2020-response-context",
      "M-phys-takenaka2020-response-context",
      [
        "takenaka2020-response"
      ]
    ],
    [
      "takenaka2020-inference-context",
      "M-phys-takenaka2020-inference-context",
      [
        "takenaka2020-inference"
      ]
    ],
    [
      "proton-decay-replay-context",
      "M-phys-proton-decay-replay-context",
      [
        "proton-decay-replay"
      ]
    ]
  ],
  "observations": [
    [
      "takenaka2020-counts",
      "C-phys-takenaka2020-counts",
      [
        "takenaka2020-search"
      ]
    ],
    [
      "takenaka2020-partial-bounds",
      "C-phys-takenaka2020-partial-bounds",
      [
        "takenaka2020-inference"
      ]
    ],
    [
      "proton-decay-arithmetic",
      "C-phys-proton-decay-arithmetic",
      [
        "proton-decay-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "takenaka2020-search-context-takenaka2020-counts",
      "takenaka2020-search-context",
      "takenaka2020-counts",
      "M-phys-takenaka2020-search-context",
      "measurement-context"
    ],
    [
      "partial-lifetime-takenaka2020-partial-bounds",
      "partial-lifetime",
      "takenaka2020-partial-bounds",
      "M-phys-takenaka2020-partial-bounds",
      "interpretation-dependency"
    ],
    [
      "takenaka2020-counts-takenaka2020-partial-bounds",
      "takenaka2020-counts",
      "takenaka2020-partial-bounds",
      "M-phys-takenaka2020-partial-bounds",
      "interpretation-dependency"
    ],
    [
      "takenaka2020-response-context-takenaka2020-partial-bounds",
      "takenaka2020-response-context",
      "takenaka2020-partial-bounds",
      "M-phys-takenaka2020-partial-bounds",
      "interpretation-dependency"
    ],
    [
      "takenaka2020-inference-context-takenaka2020-partial-bounds",
      "takenaka2020-inference-context",
      "takenaka2020-partial-bounds",
      "M-phys-takenaka2020-partial-bounds",
      "interpretation-dependency"
    ],
    [
      "takenaka2020-counts-proton-decay-arithmetic",
      "takenaka2020-counts",
      "proton-decay-arithmetic",
      "M-phys-proton-decay-arithmetic",
      "interpretation-dependency"
    ],
    [
      "proton-decay-replay-context-proton-decay-arithmetic",
      "proton-decay-replay-context",
      "proton-decay-arithmetic",
      "M-phys-proton-decay-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "takenaka2020-search",
    "takenaka2020-response",
    "takenaka2020-inference",
    "proton-decay-replay"
  ],
  "comparisonIds": [
    "takenaka2020-partial-bounds",
    "proton-decay-arithmetic"
  ],
  "inferenceSources": [
    [
      "C-phys-proton-decay-arithmetic",
      [
        "proton-decay-verifier"
      ]
    ],
    [
      "M-phys-proton-decay-arithmetic",
      [
        "proton-decay-verifier"
      ]
    ]
  ]
};

const limits = [
  "The partial lifetime is tau/B=1/Gamma_channel, where B is the branching fraction of the specified channel. A lower bound on tau/B is not the same bound on the total lifetime tau when B is unknown.",
  "No statistically significant excess in these two selected channels does not establish eternal proton stability, absence of every decay channel, neutron stability, nucleon formation or universal constituent minima.",
  "The April 1996-May 2018 SK-I-IV acquisition is shared by both channel searches. The enlarged fiducial mass is 27.2 kton: 22.5 conventional plus 4.7 additional. The paper reports nominal 450 kton-years, including earlier 306 kton-years and 144 newly analyzed; this is not an independent replication of the earlier search.",
  "Conventional vertices have dwall>200 cm; additional vertices have 100<dwall<=200 cm. The outside region 50<dwall<=100 cm is excluded. The eye scan informed selection changes; no event was rejected solely by scanning.",
  "Selection C1-C8 requires fully contained events, two or three rings, channel-specific showering and Michel-electron tags, a three-ring pion mass of 85-185 MeV/c^2, total mass 800-1050 MeV/c^2 and total momentum below 250 MeV/c. Only SK-IV additionally requires no tagged neutron.",
  "The SK-IV neutron tag uses a 2.2 MeV hydrogen-capture gamma, hits in 18-535 microseconds and a trained classifier. Its estimated efficiency is 25.2+/-2.3 percent with 0.018 false positives per primary event; no tag is not proof that no neutron was emitted.",
  "The signal simulation assumes equal decay probability for each water proton. Free hydrogen and oxygen-bound protons have different modeled response; Fermi motion, binding energy, correlated decay, pion final-state interactions and residual-nucleus emission affect acceptance. Upstream nuclear models and simulation code are not independently reviewed or replayed.",
  "Atmospheric-neutrino backgrounds use HKKM flux and NEUT 5.3.6, with 500 simulated years per detector phase and livetime/oscillation weighting. The reported means 0.59 and 0.94 are model expectations, not measured background counts or zero-background assumptions.",
  "The Bayesian construction separates four detector phases and two momentum regions, using the enlarged-volume rows. It assumes a uniform channel-rate prior, positive-domain Gaussian exposure and efficiency priors and a Gaussian-Poisson background mixture. The paper calls its 90 percent posterior bounds confidence limits; no prior-free guarantee is claimed.",
  "Table IV combines MC statistical and systematic errors; Tables VI-VII provide systematic budgets. Rounded or censored table entries do not recover unrounded MC counts, weighting, shared nuisance covariance or the complete numerical integration. Equation 7 prints a product of individual rate densities without an explicit joint normalization; its implementation and boundary conventions must be resolved before replay. This is not evidence that the published numerical limits are erroneous.",
  "The surviving muon-channel candidate is the earlier SK-IV upper-momentum conventional-volume candidate. A second earlier candidate moved outside the signal region after recalibration; changed selection does not create an independent acquisition.",
  "Hand-transcribed phase exposures sum to 450.7 kton-years, distinct from the paper nominal 450. Summed rounded efficiencies agree only within displayed precision. The printed electron-channel background centers sum to 0.60 before censored cells, while text gives 0.59; rounding intervals admit that total, without replacing <0.01 by zero or alleging a numerical error.",
  "The local verifier checks only printed exposure accounting, phase-weighted efficiency, rounding intervals and 1-exp(-0.94)=0.609372... for a fixed background mean. It does not reproduce the detector analysis, nuclear simulation, nuisance integration or either partial-lifetime limit.",
  "The Poisson probability of at least one event at fixed mean 0.94 is not a posterior probability that the candidate is background, a proton-decay probability, or the 90 percent lifetime calculation."
];

const sourcesContracts = [
  {
    "id": "takenaka2020",
    "kind": "research-publication",
    "title": "Search for proton decay via p -> e+ pi0 and p -> mu+ pi0 with an enlarged fiducial volume in Super-Kamiokande I-IV",
    "authors": [
      "A. Takenaka",
      "Super-Kamiokande Collaboration"
    ],
    "year": 2020,
    "doi": "10.1103/PhysRevD.102.112011",
    "url": "https://www-sk.icrr.u-tokyo.ac.jp/sk/_pdf/articles/PhysRevD.102.112011.pdf",
    "path": null,
    "review": {
      "extent": "selected-primary-article-passages",
      "locators": [
        "Published pages 112011-2 to 5, Sections I-III and Table I: publication identity, overlapping exposure, detector phases, reconstruction, neutron tagging and fiducial boundaries",
        "Published pages 112011-7 to 9, Sections IV-V: free and oxygen-bound proton simulation, atmospheric-neutrino background and channel-dependent cuts C1-C8",
        "Published pages 112011-10 to 11, Sections V-VI and Table IV: phase exposures, selected candidates, reported backgrounds, efficiencies and fixed-mean Poisson probability",
        "Published pages 112011-11 to 14, Sections VI-VII, Tables VI-VII and Equations 3-8: systematic uncertainties, eight-region likelihood and conditional partial-lifetime bounds"
      ],
      "limit": "The official collaboration copy was read for the stated acquisition, selection, simulation, result and inference passages on pages 2-5 and 7-14; Table IV and Equations 3-8 on pages 11 and 14 were visually inspected. Page 2 confirms publication on 22 December 2020. Detector calibration papers, nuclear/interaction models, the Bayesian thesis and numerical analysis code are unreviewed upstream. No full detector or likelihood reproduction is claimed."
    }
  },
  {
    "id": "proton-decay-verifier",
    "kind": "executable-check",
    "title": "Rounded proton-decay table arithmetic verifier",
    "authors": [
      "Onto2D contributors"
    ],
    "year": 2026,
    "doi": null,
    "url": null,
    "path": "models/causal-emergence/canonical/verify-proton-decay.py",
    "review": {
      "extent": "scoped-executable-replay",
      "locators": [
        "verify(): hand-transcribed Table IV exposure/efficiency accounting, censored background rounding intervals and fixed-mean Poisson tail"
      ],
      "limit": "The local verifier checks only printed exposure accounting, phase-weighted efficiency, rounding intervals and 1-exp(-0.94)=0.609372... for a fixed background mean. It does not reproduce the detector analysis, nuclear simulation, nuisance integration or either partial-lifetime limit."
    }
  }
];

const claimsContracts = [
  {
    "id": "D-phys-partial-lifetime",
    "statement": "For a specified decay channel with branching fraction B, the partial decay rate is Gamma_channel=B/tau and its inverse is the partial lifetime tau/B. A search constrains that channel rate through exposure, signal efficiency and background.",
    "limits": [
      0,
      1,
      8
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "M-phys-takenaka2020-search-context",
    "statement": "Apply the stated channel-specific Cherenkov, fiducial, kinematic and tagging selection to the shared April 1996-May 2018 SK-I-IV data, retaining detector phases and momentum regions.",
    "limits": [
      1,
      2,
      3,
      4,
      5,
      10
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "M-phys-takenaka2020-response-context",
    "statement": "Simulate free and oxygen-bound proton response and atmospheric-neutrino backgrounds under the paper nuclear, detector and interaction assumptions, with phase-specific exposure weighting.",
    "limits": [
      5,
      6,
      7,
      9
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "M-phys-takenaka2020-inference-context",
    "statement": "Use the same selected data in the eight-region Bayesian rate construction, marginalizing the stated efficiency, exposure and background uncertainties before inverting each channel-rate bound.",
    "limits": [
      0,
      1,
      2,
      6,
      7,
      8,
      9,
      10
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "M-phys-proton-decay-replay-context",
    "statement": "Evaluate hand-transcribed phase exposure sums, weighted efficiencies, censored background rounding intervals and the fixed-mean Poisson probability of at least one event.",
    "limits": [
      11,
      12,
      13
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "C-phys-takenaka2020-counts",
    "statement": "The shared SK-I-IV search reports zero e+ pi0 candidates and one mu+ pi0 candidate, in the SK-IV conventional-volume upper-momentum region. No significant excess is found over the reported atmospheric-neutrino expectations of 0.59 and 0.94 events.",
    "limits": [
      1,
      2,
      4,
      5,
      7,
      10,
      13
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "C-phys-takenaka2020-partial-bounds",
    "statement": "Under the published Bayesian selection and nuisance model, the reported 90 percent lower bounds are tau/B(p -> e+ pi0)>2.4e34 years and tau/B(p -> mu+ pi0)>1.6e34 years.",
    "limits": [
      0,
      1,
      2,
      6,
      7,
      8,
      9,
      10
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "C-phys-proton-decay-arithmetic",
    "statement": "Printed phase exposures sum to 450.7 kton-years; phase-weighted efficiencies agree with the text within displayed precision, and rounding intervals admit the reported background totals. At fixed background mean 0.94, P(N>=1)=0.609372..., which rounds to the reported 60.9 percent.",
    "limits": [
      11,
      12,
      13
    ],
    "sourceIds": [
      "takenaka2020",
      "proton-decay-verifier"
    ]
  },
  {
    "id": "M-phys-takenaka2020-partial-bounds",
    "statement": "Interpret the selected counts through the phase-specific acceptance, modeled background and stated Bayesian nuisance construction; retain tau/B rather than a total or infinite lifetime.",
    "limits": [
      0,
      1,
      2,
      6,
      7,
      8,
      9,
      10
    ],
    "sourceIds": [
      "takenaka2020"
    ]
  },
  {
    "id": "M-phys-proton-decay-arithmetic",
    "statement": "Use only the printed Table IV central inputs and their display precision for bookkeeping; evaluate the Poisson tail at the reported fixed mean without integrating nuisance parameters.",
    "limits": [
      11,
      12,
      13
    ],
    "sourceIds": [
      "takenaka2020",
      "proton-decay-verifier"
    ]
  }
];

const studiesContracts = [
  {
    "id": "takenaka2020-search",
    "system": "Super-Kamiokande two-channel search",
    "preparation": "Apply the stated channel-specific Cherenkov, fiducial, kinematic and tagging selection to the shared April 1996-May 2018 SK-I-IV data, retaining detector phases and momentum regions.",
    "studyType": "primary-experiment",
    "sourceId": "takenaka2020",
    "readExtent": "selected-primary-article-passages",
    "observable": "Selected e+ pi0 and mu+ pi0 candidate counts in the enlarged fiducial volume.",
    "finding": "Zero electron-channel candidates and one muon-channel candidate are reported; no significant excess over the modeled backgrounds."
  },
  {
    "id": "takenaka2020-response",
    "system": "Super-Kamiokande signal and background model",
    "preparation": "Simulate free and oxygen-bound proton response and atmospheric-neutrino backgrounds under the paper nuclear, detector and interaction assumptions, with phase-specific exposure weighting.",
    "studyType": "computational-analysis",
    "sourceId": "takenaka2020",
    "readExtent": "selected-primary-article-passages",
    "observable": "Modeled signal selection efficiency and background expectation for each channel, phase and momentum region.",
    "finding": "The modeled response and background enter the conditional lifetime inference; they are not additional acquired events."
  },
  {
    "id": "takenaka2020-inference",
    "system": "Super-Kamiokande partial-lifetime inference",
    "preparation": "Use the same selected data in the eight-region Bayesian rate construction, marginalizing the stated efficiency, exposure and background uncertainties before inverting each channel-rate bound.",
    "studyType": "computational-analysis",
    "sourceId": "takenaka2020",
    "readExtent": "selected-primary-article-passages",
    "observable": "Reported 90 percent lower bounds on tau/B for two specific channels.",
    "finding": "Published e+ pi0 and mu+ pi0 partial-lifetime limits remain conditional on the selection and nuisance model."
  },
  {
    "id": "proton-decay-replay",
    "system": "Rounded proton-decay table arithmetic",
    "preparation": "Evaluate hand-transcribed phase exposure sums, weighted efficiencies, censored background rounding intervals and the fixed-mean Poisson probability of at least one event.",
    "studyType": "computational-analysis",
    "sourceId": "takenaka2020",
    "readExtent": "selected-primary-article-passages",
    "observable": "Rounded central bookkeeping and 1-exp(-0.94).",
    "finding": "The local arithmetic supports the stated bookkeeping only; it supplies no replay of a partial-lifetime limit."
  }
];

const comparisonsContracts = [
  {
    "id": "takenaka2020-partial-bounds",
    "candidate": "The published two-channel null search supports conditional lower bounds on partial lifetimes.",
    "alternative": "The same search establishes total proton lifetime, eternal stability, all-channel absence or a formation rule.",
    "discriminator": "Interpret the selected counts through the phase-specific acceptance, modeled background and stated Bayesian nuisance construction; retain tau/B rather than a total or infinite lifetime.",
    "result": "conditional-support",
    "limit": "Only the declared conditional inference or printed arithmetic is supported; no universal stability conclusion or independent detector reproduction follows.",
    "assumptions": [
      "The partial lifetime is tau/B=1/Gamma_channel, where B is the branching fraction of the specified channel. A lower bound on tau/B is not the same bound on the total lifetime tau when B is unknown.",
      "No statistically significant excess in these two selected channels does not establish eternal proton stability, absence of every decay channel, neutron stability, nucleon formation or universal constituent minima.",
      "The April 1996-May 2018 SK-I-IV acquisition is shared by both channel searches. The enlarged fiducial mass is 27.2 kton: 22.5 conventional plus 4.7 additional. The paper reports nominal 450 kton-years, including earlier 306 kton-years and 144 newly analyzed; this is not an independent replication of the earlier search.",
      "The signal simulation assumes equal decay probability for each water proton. Free hydrogen and oxygen-bound protons have different modeled response; Fermi motion, binding energy, correlated decay, pion final-state interactions and residual-nucleus emission affect acceptance. Upstream nuclear models and simulation code are not independently reviewed or replayed.",
      "Atmospheric-neutrino backgrounds use HKKM flux and NEUT 5.3.6, with 500 simulated years per detector phase and livetime/oscillation weighting. The reported means 0.59 and 0.94 are model expectations, not measured background counts or zero-background assumptions.",
      "The Bayesian construction separates four detector phases and two momentum regions, using the enlarged-volume rows. It assumes a uniform channel-rate prior, positive-domain Gaussian exposure and efficiency priors and a Gaussian-Poisson background mixture. The paper calls its 90 percent posterior bounds confidence limits; no prior-free guarantee is claimed.",
      "Table IV combines MC statistical and systematic errors; Tables VI-VII provide systematic budgets. Rounded or censored table entries do not recover unrounded MC counts, weighting, shared nuisance covariance or the complete numerical integration. Equation 7 prints a product of individual rate densities without an explicit joint normalization; its implementation and boundary conventions must be resolved before replay. This is not evidence that the published numerical limits are erroneous.",
      "The surviving muon-channel candidate is the earlier SK-IV upper-momentum conventional-volume candidate. A second earlier candidate moved outside the signal region after recalibration; changed selection does not create an independent acquisition."
    ],
    "sourceIds": [
      "takenaka2020"
    ],
    "claimIds": [
      "C-phys-takenaka2020-partial-bounds"
    ]
  },
  {
    "id": "proton-decay-arithmetic",
    "candidate": "Rounded printed inputs support the declared bookkeeping and fixed-mean tail.",
    "alternative": "Arithmetic agreement reproduces the detector response, background inference or lifetime likelihood.",
    "discriminator": "Use only the printed Table IV central inputs and their display precision for bookkeeping; evaluate the Poisson tail at the reported fixed mean without integrating nuisance parameters.",
    "result": "conditional-support",
    "limit": "Only the declared conditional inference or printed arithmetic is supported; no universal stability conclusion or independent detector reproduction follows.",
    "assumptions": [
      "Hand-transcribed phase exposures sum to 450.7 kton-years, distinct from the paper nominal 450. Summed rounded efficiencies agree only within displayed precision. The printed electron-channel background centers sum to 0.60 before censored cells, while text gives 0.59; rounding intervals admit that total, without replacing <0.01 by zero or alleging a numerical error.",
      "The local verifier checks only printed exposure accounting, phase-weighted efficiency, rounding intervals and 1-exp(-0.94)=0.609372... for a fixed background mean. It does not reproduce the detector analysis, nuclear simulation, nuisance integration or either partial-lifetime limit.",
      "The Poisson probability of at least one event at fixed mean 0.94 is not a posterior probability that the candidate is background, a proton-decay probability, or the 90 percent lifetime calculation."
    ],
    "sourceIds": [
      "takenaka2020",
      "proton-decay-verifier"
    ],
    "claimIds": [
      "C-phys-proton-decay-arithmetic"
    ]
  }
];

/** Protect reviewed channel, acquisition and inference boundaries; not a detector replay. */
export function validateProtonDecayContracts({ sources, claims, studies, comparisons }) {
  for (const expected of sourcesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(sources.get(expected.id)?.[key], value, "Proton-decay source or reviewed passage changed");
  }
  for (const expected of claimsContracts) {
    const claim = claims.get(expected.id);
    assert.equal(claim?.statement, expected.statement, "Proton-decay channel, quantity or inferential meaning changed");
    for (const i of expected.limits) assert.ok(claim.limitations.includes(limits[i]), "Proton-decay record lost selection, shared-data or inference limits");
    for (const sourceId of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === sourceId), "Proton-decay evidence lost a reviewed source");
  }
  for (const expected of studiesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(studies.get(expected.id)?.[key], value, "Proton-decay acquisition, response and reanalysis were conflated");
  }
  for (const expected of comparisonsContracts) {
    assert.deepEqual(comparisons.get(expected.id), expected, "Conditional proton inference became independent validation or universal stability");
  }
}
