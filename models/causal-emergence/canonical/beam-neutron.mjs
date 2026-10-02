import assert from "node:assert/strict";

export const BEAM_NEUTRON_CHECKS = new Map([["yue2013-printed-arithmetic", "C-phys-beam-neutron-arithmetic"]]);

export const BEAM_NEUTRON_ADMISSION = {
  "definitions": [
    [
      "phys:beam-decay-ratio",
      "D-phys-beam-decay-ratio"
    ]
  ],
  "formalDependencies": [
    [
      "physics:survival-beam-decay-ratio",
      [
        "phys:exponential-survival",
        "phys:beam-decay-ratio"
      ]
    ]
  ],
  "contexts": [
    [
      "nico2005-beam-context",
      "M-phys-nico2005-beam-context",
      [
        "nico2005-beam"
      ]
    ],
    [
      "yue2013-calibration-context",
      "M-phys-yue2013-calibration-context",
      [
        "yue2013-calibration"
      ]
    ],
    [
      "yue2013-update-context",
      "M-phys-yue2013-update-context",
      [
        "yue2013-update"
      ]
    ],
    [
      "beam-neutron-replay-context",
      "M-phys-beam-neutron-replay-context",
      [
        "beam-neutron-replay"
      ]
    ]
  ],
  "observations": [
    [
      "nico2005-lifetime",
      "C-phys-nico2005-lifetime",
      [
        "nico2005-beam"
      ]
    ],
    [
      "yue2013-efficiency",
      "C-phys-yue2013-efficiency",
      [
        "yue2013-calibration"
      ]
    ],
    [
      "yue2013-lifetime",
      "C-phys-yue2013-lifetime",
      [
        "yue2013-update"
      ]
    ],
    [
      "beam-neutron-arithmetic",
      "C-phys-beam-neutron-arithmetic",
      [
        "beam-neutron-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "nico2005-beam-context-nico2005-lifetime",
      "nico2005-beam-context",
      "nico2005-lifetime",
      "M-phys-nico2005-beam-context",
      "measurement-context"
    ],
    [
      "beam-decay-ratio-nico2005-lifetime",
      "beam-decay-ratio",
      "nico2005-lifetime",
      "M-phys-nico2005-beam-context",
      "interpretation-dependency"
    ],
    [
      "yue2013-calibration-context-yue2013-efficiency",
      "yue2013-calibration-context",
      "yue2013-efficiency",
      "M-phys-yue2013-calibration-context",
      "measurement-context"
    ],
    [
      "nico2005-lifetime-yue2013-lifetime",
      "nico2005-lifetime",
      "yue2013-lifetime",
      "M-phys-yue2013-lifetime",
      "interpretation-dependency"
    ],
    [
      "yue2013-efficiency-yue2013-lifetime",
      "yue2013-efficiency",
      "yue2013-lifetime",
      "M-phys-yue2013-lifetime",
      "interpretation-dependency"
    ],
    [
      "yue2013-update-context-yue2013-lifetime",
      "yue2013-update-context",
      "yue2013-lifetime",
      "M-phys-yue2013-lifetime",
      "interpretation-dependency"
    ],
    [
      "nico2005-lifetime-beam-neutron-arithmetic",
      "nico2005-lifetime",
      "beam-neutron-arithmetic",
      "M-phys-beam-neutron-arithmetic",
      "interpretation-dependency"
    ],
    [
      "yue2013-efficiency-beam-neutron-arithmetic",
      "yue2013-efficiency",
      "beam-neutron-arithmetic",
      "M-phys-beam-neutron-arithmetic",
      "interpretation-dependency"
    ],
    [
      "yue2013-lifetime-beam-neutron-arithmetic",
      "yue2013-lifetime",
      "beam-neutron-arithmetic",
      "M-phys-beam-neutron-arithmetic",
      "interpretation-dependency"
    ],
    [
      "beam-neutron-replay-context-beam-neutron-arithmetic",
      "beam-neutron-replay-context",
      "beam-neutron-arithmetic",
      "M-phys-beam-neutron-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "nico2005-beam",
    "yue2013-calibration",
    "yue2013-update",
    "beam-neutron-replay"
  ],
  "comparisonIds": [
    "yue2013-lifetime",
    "beam-neutron-arithmetic"
  ],
  "inferenceSources": [
    [
      "C-phys-yue2013-lifetime",
      [
        "nico2005"
      ]
    ],
    [
      "C-phys-beam-neutron-arithmetic",
      [
        "nico2005",
        "beam-neutron-verifier"
      ]
    ],
    [
      "M-phys-yue2013-lifetime",
      [
        "nico2005"
      ]
    ],
    [
      "M-phys-beam-neutron-arithmetic",
      [
        "nico2005",
        "beam-neutron-verifier"
      ]
    ]
  ]
};

const limits = [
  "The measured beam observable is a proton-producing decay rate relative to the monitored neutron population in the trapping region. Identifying its inverse with the total free-neutron lifetime requires the stated decay-channel and detection assumptions. Storage disappearance and proton counting are distinct observables; no branching fraction or explanation of their difference is inferred here.",
  "Nico 2005 refines the earlier report of the June 2000-February 2001 acquisition. Yue 2013 applies a new monitor calibration completed in 2011 to that same acquisition. These publications are not independent neutron-lifetime replications and cannot be averaged as such.",
  "Cancellation of the neutron velocity distribution assumes a thin monitor with inverse-velocity response and unchanged beam between the trap and monitor. Finite absorption, spatial profiles, scattering and beam transport still require the original corrections.",
  "The effective trap length is L=n*l+L_end. A fit of the proton-to-monitor count-rate ratio versus electrode number removes a constant end contribution only under the common-end-region assumption; the paper separately corrects nonlinearity from field, geometry and beam divergence. Proton trapping for milliseconds is not neutron storage for a lifetime.",
  "The acquisition counts released decay protons in an accelerated silicon-detector readout and alpha/triton products from the downstream 6LiF monitor. Live time, timing-dependent backgrounds, dead time, proton backscatter, dead-layer loss and neutron corrections remain part of the analysis. The selected count files, geometry simulation and SRIM loss extrapolation are not independently replayed.",
  "The published Nico 2005 result is 886.3+/-1.2 statistical +/-3.2 systematic seconds. The older preprint value is not substituted for this published result. Its absolute monitor calibration uses deposit characterization and an evaluated capture cross section; the old lifetime and that efficiency share calibration uncertainty.",
  "The 2011 AlphaGamma calibration measures the same physical fluence monitor against an absolute neutron-rate transfer involving an absorbing 10B4C target, prompt gamma detectors and an alpha-source calibration chain. It removes evaluated 6Li cross-section and deposit-mass dependence from that monitor-calibration step, not all assumptions or corrections in the lifetime analysis. The raw absolute-calibration data and full correction covariance remain unreproduced.",
  "Yue 2013 author manuscript v2 Equation 1 requires epsilon_0=epsilon_measured*lambda_0/lambda_mono. Equation 2 prints the opposite wavelength ratio, inconsistent with Equation 1 and its reported numerical value. The local conversion uses Equation 1 and preserves this author-version conflict; the publisher PDF was not reviewed and an error in the published numerical analysis is not established.",
  "The calibration gives epsilon_measured=(8.5797+/-0.0048)e-5 at lambda_mono=0.49605+/-0.00012 nm; lambda_0=0.1798 nm corresponds to the stated 2200 m/s convention. The paper reports epsilon_0=(3.1098+/-0.0017)e-5, versus the previous calculated (3.1148+/-0.0094)e-5. These are monitor counting efficiencies, not neutron survival probabilities or unit charged-particle detection efficiencies.",
  "Transfer of the 2011 efficiency to the earlier acquisition assumes temporal stability. New aperture metrology is attributed to improved measurement rather than physical change, with adopted DeltaOmega=0 and no added uncertainty. A three-hypothesis Bayesian deposit-loss comparison uses three foils, older activity data, Gaussian observations and a loss-only prior. The authors adopt DeltaRho=0 with 0.1 percent density uncertainty. These controls do not prove zero drift; the stability posterior and upstream measurements are not replayed.",
  "Equation 4 rescales the old central lifetime by epsilon_0_old/epsilon_0_new and the adopted (1+DeltaOmega)*(1+DeltaRho) factors. Yue adds no proton-counting systematic correction beyond Nico 2005. Independence of the two neutron-fluence calibrations does not make the resulting lifetime estimates independent. The old full lifetime uncertainty and old efficiency must not be independently propagated as unrelated inputs.",
  "The updated central lifetime is reported as 887.7 seconds, with 1.2 statistical and 1.9 systematic seconds in the abstract and 2.3 seconds total in the body and Table II. The displayed five-component budget and abstract split contain rounded values. Their central quadratures do not reconstruct unrounded errors or shared covariance, and their small rounding differences do not establish an error.",
  "The local verifier checks only thermal-efficiency direction from Equation 1, the central Equation 4 rescaling with adopted zero drifts and the diagonal quadrature of printed Table II components. It does not reproduce acquisition, selection, proton-loss fitting, absolute calibration, temporal stability, full uncertainty propagation or a beam/bottle comparison.",
  "The neutron-lifetime results do not establish neutron formation, proton stability, a universal constituent minimum or a present-day beam/bottle discrepancy. The 2013 historical world averages are not admitted without review of their components."
];

const sourcesContracts = [
  {
    "id": "nico2005",
    "kind": "research-publication",
    "title": "Measurement of the neutron lifetime by counting trapped protons in a cold neutron beam",
    "authors": [
      "J. S. Nico",
      "M. S. Dewey",
      "D. M. Gilliam",
      "F. E. Wietfeldt",
      "X. Fei",
      "W. M. Snow",
      "G. L. Greene",
      "J. Pauwels",
      "R. Eykens",
      "A. Lamberty",
      "J. Van Gestel",
      "R. D. Scott"
    ],
    "year": 2005,
    "doi": "10.1103/PhysRevC.71.055502",
    "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=103276",
    "path": null,
    "review": {
      "extent": "selected-primary-article-passages",
      "locators": [
        "Published PDF pages 1-5, Sections I-II and Equations 3-8: publication identity, decay counting, neutron population, inverse-velocity monitor and trap-length slope",
        "Published PDF pages 6-14, Sections II-III and IV.A, Tables III-V: proton and monitor detection, June 2000-February 2001 acquisition, live time, backgrounds, dead time and correction budget",
        "Published PDF pages 24-26, Sections IV.D-V and Equation 38: proton-loss extrapolation and final published lifetime with statistical and systematic errors"
      ],
      "limit": "The NIST-hosted published PDF was read for the selected method, acquisition, correction and final-result passages on pages 1-14 and 24-26; pages 3, 5 and 26 were visually inspected. The publisher identifies publication on 25 May 2005. Detailed intermediate spectrum and trap simulations, raw data, SRIM implementation and upstream calibration papers are not independently reviewed or reproduced. The older preprint is not the reviewed numerical source."
    }
  },
  {
    "id": "yue2013",
    "kind": "research-publication",
    "title": "Improved Determination of the Neutron Lifetime",
    "authors": [
      "A. T. Yue",
      "M. S. Dewey",
      "D. M. Gilliam",
      "G. L. Greene",
      "A. B. Laptev",
      "J. S. Nico",
      "W. M. Snow",
      "F. E. Wietfeldt"
    ],
    "year": 2013,
    "doi": "10.1103/PhysRevLett.111.222501",
    "url": "https://arxiv.org/pdf/1309.2623v2",
    "path": null,
    "review": {
      "extent": "full-author-manuscript",
      "locators": [
        "Author manuscript arXiv:1309.2623v2 pages 1-2, abstract and Equation 1: earlier acquisition, neutron-counting monitor and absolute 2011 fluence calibration",
        "Author manuscript arXiv:1309.2623v2 pages 2-3, Equations 1-4: wavelength conversion, printed Equation 2 conflict, efficiencies and same-acquisition lifetime rescaling",
        "Author manuscript arXiv:1309.2623v2 pages 3-4 and Table I: aperture metrology, deposit-loss hypotheses and adopted temporal-stability corrections",
        "Author manuscript arXiv:1309.2623v2 page 4 and Table II: rounded uncertainty budget, retained proton corrections and independence limited to fluence calibration"
      ],
      "limit": "The complete four-page author manuscript arXiv:1309.2623v2 was read; equations and tables on pages 2-4 were visually inspected. Publisher metadata identifies Physical Review Letters 111, 222501, published 27 November 2013. The publisher PDF, raw calibration data and stability-analysis code were not reviewed. The selected thesis and detailed-article calibration passages are reviewed separately in their own records. The Equation 2 wavelength-ratio conflict is specific to the reviewed author version."
    }
  },
  {
    "id": "beam-neutron-verifier",
    "kind": "executable-check",
    "title": "Printed beam neutron lifetime calibration arithmetic verifier",
    "authors": [
      "Onto2D contributors"
    ],
    "year": 2026,
    "doi": null,
    "url": null,
    "path": "models/causal-emergence/canonical/verify-beam-neutron.py",
    "review": {
      "extent": "scoped-executable-replay",
      "locators": [
        "verify(): Equation 1 thermal-efficiency conversion, Equation 4 central lifetime rescaling and printed Table II diagonal budget"
      ],
      "limit": "The local verifier checks only thermal-efficiency direction from Equation 1, the central Equation 4 rescaling with adopted zero drifts and the diagonal quadrature of printed Table II components. It does not reproduce acquisition, selection, proton-loss fitting, absolute calibration, temporal stability, full uncertainty propagation or a beam/bottle comparison."
    }
  }
];

const claimsContracts = [
  {
    "id": "D-phys-beam-decay-ratio",
    "statement": "In the ideal corrected beam model, R_p=epsilon_p*N_n/tau and R_monitor=epsilon_0*v_0*N_n/L, so tau=L*epsilon_p*R_monitor/(epsilon_0*v_0*R_p). R_p counts detected proton-producing decays, and epsilon_0 is the monitor efficiency at the reference speed v_0.",
    "limits": [
      0,
      2,
      3,
      13
    ],
    "sourceIds": [
      "nico2005"
    ]
  },
  {
    "id": "M-phys-nico2005-beam-context",
    "statement": "Count released protons and downstream 6Li capture products in the June 2000-February 2001 acquisition, fit their rate ratio versus trap length, and apply the published background, transport and detector-loss corrections.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      13
    ],
    "sourceIds": [
      "nico2005"
    ]
  },
  {
    "id": "M-phys-yue2013-calibration-context",
    "statement": "Use the absolute calibration completed in 2011 for the same 6LiF monitor against the AlphaGamma neutron-rate transfer, convert its monochromatic response to the thermal reference, and assess transfer to the earlier acquisition through the stated aperture and deposit controls.",
    "limits": [
      1,
      6,
      7,
      8,
      9,
      13
    ],
    "sourceIds": [
      "yue2013"
    ]
  },
  {
    "id": "M-phys-yue2013-update-context",
    "statement": "Rescale the published Nico lifetime by the old-to-new thermal monitor efficiency ratio and adopted aperture and deposit drift factors, retaining the earlier proton corrections and acquisition.",
    "limits": [
      0,
      1,
      2,
      4,
      6,
      7,
      8,
      9,
      10,
      11,
      13
    ],
    "sourceIds": [
      "yue2013"
    ]
  },
  {
    "id": "M-phys-beam-neutron-replay-context",
    "statement": "Evaluate the Equation 1 thermal conversion, Equation 4 central lifetime rescaling with adopted zero drifts, and diagonal quadrature of the five rounded Table II uncertainty components.",
    "limits": [
      1,
      7,
      9,
      10,
      11,
      12,
      13
    ],
    "sourceIds": [
      "yue2013"
    ]
  },
  {
    "id": "C-phys-nico2005-lifetime",
    "statement": "The published Nico analysis reports 886.3+/-1.2 statistical +/-3.2 systematic seconds from the June 2000-February 2001 proton-counting beam acquisition.",
    "limits": [
      0,
      1,
      2,
      3,
      4,
      5,
      13
    ],
    "sourceIds": [
      "nico2005"
    ]
  },
  {
    "id": "C-phys-yue2013-efficiency",
    "statement": "The 2011 calibration reports epsilon_0=(3.1098+/-0.0017)e-5 at the 2200 m/s convention. Applying this monitor response to the earlier acquisition uses adopted DeltaOmega=0 and DeltaRho=0, with 0.1 percent deposit-density uncertainty.",
    "limits": [
      1,
      6,
      7,
      8,
      9,
      13
    ],
    "sourceIds": [
      "yue2013"
    ]
  },
  {
    "id": "C-phys-yue2013-lifetime",
    "statement": "Recalibrating the same beam acquisition gives a reported lifetime of 887.7 seconds: 1.2 statistical and 1.9 systematic seconds in the abstract, with 2.3 seconds total in the body and Table II. This is a conditional updated inference from the existing acquisition.",
    "limits": [
      0,
      1,
      2,
      4,
      6,
      7,
      8,
      9,
      10,
      11,
      13
    ],
    "sourceIds": [
      "yue2013",
      "nico2005"
    ]
  },
  {
    "id": "C-phys-beam-neutron-arithmetic",
    "statement": "Equation 1 converts the printed monitor response to 3.109827...e-5. With the adopted zero drifts, the central efficiency-ratio rescaling gives 887.725... seconds, a +1.425... second shift. Diagonal quadrature of the five printed Table II entries gives 2.32379... seconds, rounding to 2.3.",
    "limits": [
      1,
      7,
      9,
      10,
      11,
      12,
      13
    ],
    "sourceIds": [
      "yue2013",
      "nico2005",
      "beam-neutron-verifier"
    ]
  },
  {
    "id": "M-phys-yue2013-lifetime",
    "statement": "Interpret the updated lifetime through the measured monitor response, adopted temporal-transfer model and retained proton corrections, preserving the original acquisition and decay-channel scope.",
    "limits": [
      0,
      1,
      2,
      4,
      6,
      7,
      8,
      9,
      10,
      11,
      13
    ],
    "sourceIds": [
      "yue2013",
      "nico2005"
    ]
  },
  {
    "id": "M-phys-beam-neutron-arithmetic",
    "statement": "Use Equation 1 for the thermal conversion, retain the conflicting author-version Equation 2, and compute only the printed central rescaling and rounded diagonal uncertainty budget.",
    "limits": [
      1,
      7,
      9,
      10,
      11,
      12,
      13
    ],
    "sourceIds": [
      "yue2013",
      "nico2005",
      "beam-neutron-verifier"
    ]
  }
];

const studiesContracts = [
  {
    "id": "nico2005-beam",
    "system": "Nico beam acquisition and corrected analysis",
    "preparation": "Count released protons and downstream 6Li capture products in the June 2000-February 2001 acquisition, fit their rate ratio versus trap length, and apply the published background, transport and detector-loss corrections.",
    "studyType": "primary-experiment",
    "sourceId": "nico2005",
    "doi": "10.1103/PhysRevC.71.055502",
    "readExtent": "selected-primary-article-passages",
    "observable": "Proton-to-neutron-monitor count-rate slope versus electrode number, with proton-loss extrapolation and neutron-fluence normalization.",
    "finding": "The published corrected acquisition gives 886.3+/-1.2 statistical +/-3.2 systematic seconds under the stated decay and detector assumptions."
  },
  {
    "id": "yue2013-calibration",
    "system": "Yue absolute fluence calibration",
    "preparation": "Use the absolute calibration completed in 2011 for the same 6LiF monitor against the AlphaGamma neutron-rate transfer, convert its monochromatic response to the thermal reference, and assess transfer to the earlier acquisition through the stated aperture and deposit controls.",
    "studyType": "primary-experiment",
    "sourceId": "yue2013",
    "doi": "10.1103/PhysRevLett.111.222501",
    "readExtent": "full-author-manuscript",
    "observable": "Absolute monitor counting efficiency and the controls used to bound changes between acquisition and recalibration.",
    "finding": "The reported thermal efficiency is (3.1098+/-0.0017)e-5; temporal transfer uses adopted zero aperture and deposit shifts with the stated density uncertainty."
  },
  {
    "id": "yue2013-update",
    "system": "Yue same-acquisition lifetime reanalysis",
    "preparation": "Rescale the published Nico lifetime by the old-to-new thermal monitor efficiency ratio and adopted aperture and deposit drift factors, retaining the earlier proton corrections and acquisition.",
    "studyType": "experimental-reanalysis",
    "sourceId": "yue2013",
    "doi": "10.1103/PhysRevLett.111.222501",
    "readExtent": "full-author-manuscript",
    "observable": "A recalibrated lifetime conditional on monitor transfer and the original proton-counting analysis.",
    "finding": "The updated central value is 887.7 seconds, with published 1.2 statistical and 1.9 systematic seconds in the abstract and 2.3 seconds total in the body."
  },
  {
    "id": "beam-neutron-replay",
    "system": "Printed beam calibration arithmetic",
    "preparation": "Evaluate the Equation 1 thermal conversion, Equation 4 central lifetime rescaling with adopted zero drifts, and diagonal quadrature of the five rounded Table II uncertainty components.",
    "studyType": "computational-analysis",
    "sourceId": "yue2013",
    "doi": "10.1103/PhysRevLett.111.222501",
    "readExtent": "full-author-manuscript",
    "observable": "Printed-input thermal efficiency, lifetime shift and uncertainty-budget bookkeeping.",
    "finding": "The arithmetic gives 3.109827...e-5, 887.725... seconds and 2.32379... seconds, without reproducing detector or calibration inference."
  }
];

const comparisonsContracts = [
  {
    "id": "yue2013-lifetime",
    "candidate": "The monitor recalibration supports a conditional update of the same beam lifetime acquisition.",
    "alternative": "The later publication is an independent neutron-lifetime replication or an assumption-free measurement of every neutron-disappearance channel.",
    "discriminator": "Interpret the updated lifetime through the measured monitor response, adopted temporal-transfer model and retained proton corrections, preserving the original acquisition and decay-channel scope.",
    "result": "conditional-support",
    "limit": "Only the stated conditional update or printed arithmetic is supported; the shared acquisition, transfer assumptions and distinct observables remain explicit.",
    "assumptions": [
      "The measured beam observable is a proton-producing decay rate relative to the monitored neutron population in the trapping region. Identifying its inverse with the total free-neutron lifetime requires the stated decay-channel and detection assumptions. Storage disappearance and proton counting are distinct observables; no branching fraction or explanation of their difference is inferred here.",
      "Nico 2005 refines the earlier report of the June 2000-February 2001 acquisition. Yue 2013 applies a new monitor calibration completed in 2011 to that same acquisition. These publications are not independent neutron-lifetime replications and cannot be averaged as such.",
      "Cancellation of the neutron velocity distribution assumes a thin monitor with inverse-velocity response and unchanged beam between the trap and monitor. Finite absorption, spatial profiles, scattering and beam transport still require the original corrections.",
      "The acquisition counts released decay protons in an accelerated silicon-detector readout and alpha/triton products from the downstream 6LiF monitor. Live time, timing-dependent backgrounds, dead time, proton backscatter, dead-layer loss and neutron corrections remain part of the analysis. The selected count files, geometry simulation and SRIM loss extrapolation are not independently replayed.",
      "The 2011 AlphaGamma calibration measures the same physical fluence monitor against an absolute neutron-rate transfer involving an absorbing 10B4C target, prompt gamma detectors and an alpha-source calibration chain. It removes evaluated 6Li cross-section and deposit-mass dependence from that monitor-calibration step, not all assumptions or corrections in the lifetime analysis. The raw absolute-calibration data and full correction covariance remain unreproduced.",
      "Yue 2013 author manuscript v2 Equation 1 requires epsilon_0=epsilon_measured*lambda_0/lambda_mono. Equation 2 prints the opposite wavelength ratio, inconsistent with Equation 1 and its reported numerical value. The local conversion uses Equation 1 and preserves this author-version conflict; the publisher PDF was not reviewed and an error in the published numerical analysis is not established.",
      "The calibration gives epsilon_measured=(8.5797+/-0.0048)e-5 at lambda_mono=0.49605+/-0.00012 nm; lambda_0=0.1798 nm corresponds to the stated 2200 m/s convention. The paper reports epsilon_0=(3.1098+/-0.0017)e-5, versus the previous calculated (3.1148+/-0.0094)e-5. These are monitor counting efficiencies, not neutron survival probabilities or unit charged-particle detection efficiencies.",
      "Transfer of the 2011 efficiency to the earlier acquisition assumes temporal stability. New aperture metrology is attributed to improved measurement rather than physical change, with adopted DeltaOmega=0 and no added uncertainty. A three-hypothesis Bayesian deposit-loss comparison uses three foils, older activity data, Gaussian observations and a loss-only prior. The authors adopt DeltaRho=0 with 0.1 percent density uncertainty. These controls do not prove zero drift; the stability posterior and upstream measurements are not replayed.",
      "Equation 4 rescales the old central lifetime by epsilon_0_old/epsilon_0_new and the adopted (1+DeltaOmega)*(1+DeltaRho) factors. Yue adds no proton-counting systematic correction beyond Nico 2005. Independence of the two neutron-fluence calibrations does not make the resulting lifetime estimates independent. The old full lifetime uncertainty and old efficiency must not be independently propagated as unrelated inputs.",
      "The updated central lifetime is reported as 887.7 seconds, with 1.2 statistical and 1.9 systematic seconds in the abstract and 2.3 seconds total in the body and Table II. The displayed five-component budget and abstract split contain rounded values. Their central quadratures do not reconstruct unrounded errors or shared covariance, and their small rounding differences do not establish an error.",
      "The neutron-lifetime results do not establish neutron formation, proton stability, a universal constituent minimum or a present-day beam/bottle discrepancy. The 2013 historical world averages are not admitted without review of their components."
    ],
    "sourceIds": [
      "nico2005",
      "yue2013"
    ],
    "claimIds": [
      "C-phys-yue2013-lifetime"
    ]
  },
  {
    "id": "beam-neutron-arithmetic",
    "candidate": "The stated printed inputs support the bounded calibration arithmetic.",
    "alternative": "Arithmetic agreement reproduces raw rate measurements, detector losses, the absolute calibration chain, stability analysis or a complete covariance propagation.",
    "discriminator": "Use Equation 1 for the thermal conversion, retain the conflicting author-version Equation 2, and compute only the printed central rescaling and rounded diagonal uncertainty budget.",
    "result": "conditional-support",
    "limit": "Only the stated conditional update or printed arithmetic is supported; the shared acquisition, transfer assumptions and distinct observables remain explicit.",
    "assumptions": [
      "Nico 2005 refines the earlier report of the June 2000-February 2001 acquisition. Yue 2013 applies a new monitor calibration completed in 2011 to that same acquisition. These publications are not independent neutron-lifetime replications and cannot be averaged as such.",
      "Yue 2013 author manuscript v2 Equation 1 requires epsilon_0=epsilon_measured*lambda_0/lambda_mono. Equation 2 prints the opposite wavelength ratio, inconsistent with Equation 1 and its reported numerical value. The local conversion uses Equation 1 and preserves this author-version conflict; the publisher PDF was not reviewed and an error in the published numerical analysis is not established.",
      "Transfer of the 2011 efficiency to the earlier acquisition assumes temporal stability. New aperture metrology is attributed to improved measurement rather than physical change, with adopted DeltaOmega=0 and no added uncertainty. A three-hypothesis Bayesian deposit-loss comparison uses three foils, older activity data, Gaussian observations and a loss-only prior. The authors adopt DeltaRho=0 with 0.1 percent density uncertainty. These controls do not prove zero drift; the stability posterior and upstream measurements are not replayed.",
      "Equation 4 rescales the old central lifetime by epsilon_0_old/epsilon_0_new and the adopted (1+DeltaOmega)*(1+DeltaRho) factors. Yue adds no proton-counting systematic correction beyond Nico 2005. Independence of the two neutron-fluence calibrations does not make the resulting lifetime estimates independent. The old full lifetime uncertainty and old efficiency must not be independently propagated as unrelated inputs.",
      "The updated central lifetime is reported as 887.7 seconds, with 1.2 statistical and 1.9 systematic seconds in the abstract and 2.3 seconds total in the body and Table II. The displayed five-component budget and abstract split contain rounded values. Their central quadratures do not reconstruct unrounded errors or shared covariance, and their small rounding differences do not establish an error.",
      "The local verifier checks only thermal-efficiency direction from Equation 1, the central Equation 4 rescaling with adopted zero drifts and the diagonal quadrature of printed Table II components. It does not reproduce acquisition, selection, proton-loss fitting, absolute calibration, temporal stability, full uncertainty propagation or a beam/bottle comparison.",
      "The neutron-lifetime results do not establish neutron formation, proton stability, a universal constituent minimum or a present-day beam/bottle discrepancy. The 2013 historical world averages are not admitted without review of their components."
    ],
    "sourceIds": [
      "nico2005",
      "yue2013",
      "beam-neutron-verifier"
    ],
    "claimIds": [
      "C-phys-beam-neutron-arithmetic"
    ]
  }
];

/** Protect acquisition, recalibration and channel scope; not an experimental replay. */
export function validateBeamNeutronContracts({ sources, claims, studies, comparisons }) {
  for (const expected of sourcesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(sources.get(expected.id)?.[key], value, "Beam source or reviewed version changed");
  }
  for (const expected of claimsContracts) {
    const claim = claims.get(expected.id);
    assert.equal(claim?.statement, expected.statement, "Beam count ratio, calibration or lifetime meaning changed");
    for (const i of expected.limits) assert.ok(claim.limitations.includes(limits[i]), "Beam record lost shared-acquisition, channel or calibration limits");
    for (const sourceId of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === sourceId), "Beam evidence lost a reviewed source");
  }
  for (const expected of studiesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(studies.get(expected.id)?.[key], value, "Beam acquisition, calibration and same-data inference were conflated");
  }
  for (const expected of comparisonsContracts) {
    assert.deepEqual(comparisons.get(expected.id), expected, "Conditional beam inference became independent or complete validation");
  }
}
