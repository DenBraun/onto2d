import assert from "node:assert/strict";

export const MASS_CONSTRAINT_CHECKS = new Map([["fink2021-printed-arithmetic", "C-phys-mass-constraint-arithmetic"]]);

const limits = [
  "The 2021 FSU experiment measures both ions simultaneously in coupled magnetron orbits. It is distinct from the 2020 alternation between a central ion and a 2 mm parked ion.",
  "At 8.5 T the separation radius is 0.79-0.82 mm and the common-mode radius is below 0.03 mm. Orbits about 0.4 mm from the central gas beam improve collision survival; this is not an intrinsic molecular lifetime.",
  "Cooling is alternating on the detector resonance, but PnP phase readout is simultaneous. Phase fits and the cited Thompson thesis equations convert trap-modified frequencies to the free ratio; those upstream equations and raw phases are not independently replayed.",
  "Field-noise rejection is not total-uncertainty reduction. Thermal relativistic noise remains and the reported gain per mass-2 run is only slightly above a factor of two.",
  "Three H2+ ions give eleven plateaus (2, 6 and 3). The final three conditional branch means use five ratios with unique level assignments within each branch, not eleven independently assigned ground-state measurements.",
  "Assignments use theoretical level spacings, polarizability and E2 selection rules. The discarded high branch requires initial N>=7 and is rejected using a population prior, not direct state readout. Moss 1993, Korobov 2018 and the population/polarizability inputs remain unreviewed upstream.",
  "The three uncorrected R00(5 ms) values are 0.9992316599712(21), 0.9992316599589(29) and 0.9992316599550(27). Relative branch probabilities are estimated between 1:0.012:0.058 and 1:0.13:0.27; the missing supplement prevents replay of those probabilities.",
  "The published mass ratio assumes the most probable assignment. The other two branches lower it by 2.7 or 3.6 quoted standard uncertainties. These discrete alternatives are not included in the stated conditional Gaussian uncertainty and are not uniquely excluded.",
  "CODATA 2022 input D15 uses the Heiße 2019 reanalysis, D16 and D18 the direct Rau 2020 ratios, and D17 the Fink 2021 ground-state frequency ratio. Derived absolute masses and adjusted ratios are not additional independent input data.",
  "Replacing the Fink 2020 ratio in this later adjustment does not replace it in the historical Rau 2020 joint fit. Different acquisitions and publication-specific input sets remain distinct.",
  "Table XXXI uses D15=6*A_r(p)/A_r(C6+), D16=6*A_r(d)/A_r(C6+), D17=A_r(d)/(2*A_r(p)+A_r(e)-E_H2/(m_u*c^2)) and D18=4*(A_r(p)+A_r(d)+A_r(e)-E_HD/(m_u*c^2))/A_r(C4+). Ionic carbon denominators include removed electrons and positive ionization energy.",
  "Table XXVI gives r(D8,D23)=0.9968, r(D8,D24)=1.0000 and r(D23,D24)=0.9968 for carbon ionization inputs. The absence of listed D15-D18 ratio correlations is not proof of complete physical independence.",
  "Only the selected observational equations, inputs and calibration passages were reviewed. The upstream ASD 2022 ionization data, remaining spectroscopy, fitted constants and full covariance are not independently reconstructed.",
  "Page 6 prints an extra hbar in the cyclotron-frequency expression; the charge-aware ratio in Equation 8 is retained. Page 54 labels the Van Dyck 2006 input as C4+/HD+, while Section II.C and Table XXV D21 identify He2+/C6+. These printed conflicts do not prove either misprint entered the numerical adjustment.",
  "Published inferences retain their preparation, calibration and model assumptions. Source reading and central arithmetic do not reproduce acquisition, covariance or propagated uncertainty.",
  "These records do not establish nucleon formation, intrinsic particle stability or universal carrier minima. Publication-date constants are not automatically current recommendations.",
  "The usual 5 ms cyclotron drive produces about 21 micrometers of motion. Fits versus drive time squared extrapolate the driven contribution; 6 ms data are excluded from the final correction estimates.",
  "Zero drive does not remove thermal imbalance. The 2.9(2.9) correction in absolute ratio units of 1e-12 comes from a phase-noise diagnostic with 100 percent assigned uncertainty, equivalent to a 0.66 K axial-temperature difference.",
  "Table I corrections in absolute ratio units of 1e-12 are 29.5(1.4), 2.9(2.9), ion-ion <0.1, -1.1(0.2) and +0.5(0.5), with total 31.8(3.7). Naive independent quadrature of the listed nonzero errors gives about 3.265, not 3.7. Full covariance and rounding details are unavailable; no erroneous published uncertainty is established.",
  "H2+ ground-state ionization energy is 131058.1219937(6) cm^-1 in Korobov 2017 Table V. It is distinct from the HD+ entry and from the older binding calculations cited in Fink 2020.",
  "The NRQED calculation uses CODATA 2014 constants and spin-averaged energies. The quoted uncertainty is theoretical; the separate Rydberg and mass-ratio uncertainties are excluded. Wavefunctions, higher-order approximations and code are not replayed.",
  "Use m_H2=2*m_p+m_e-E_ion(H2+)/c^2. Since both ions carry one positive charge, R=nu(H2+)/nu(D+)=m_d/m_H2. A reciprocal ratio or positive binding addition is a different equation.",
  "The capture input eta_d=lambda_gamma/d220(ILL)=2.90430245(49)e-3 is dimensionless. Table XXV D14 prints a meter label, conflicting with Section II.B. The observational equation uses recoil and links neutron mass to the ILL specimen calibration.",
  "The neutron mass occurs in no other CODATA 2022 observational equation. The capture constraint therefore does not independently determine d220(ILL); the six adjusted silicon spacings remain those of 2018.",
  "CODATA 2018 and 2022 Table XXVII E13 is labelled d220(ILL)/d220(W04)-1=-20(22)e-9. Kessler 2017 Table 4 assigns -20(9)e-9 to WS1/NW04 and +20(14)e-9 to ILL/NW04; Table 5 gives +3(17)e-9 for ILL/W04. The input identity is unresolved, not silently relabelled or sign-corrected.",
  "The 2018 report adds 20e-9 impurity uncertainty in quadrature and calls E13 uncorrelated with earlier inputs. Kessler uses separate NW04/W04 transfers and sample variability. The numerical match sqrt(9^2+20^2) approximately 22 does not establish which physical comparison was used.",
  "No complete lattice adjustment or replacement value is admitted. The Kessler final ILL spacing used by Rau remains a distinct publication-specific input; this comparison does not establish an error in the CODATA numerical adjustment.",
  "The verifier uses printed branch centers and a shared 31.8e-12 correction, Korobov H2+ energy and rounded historical m_e, m_p and mass-energy conversion constants. It does not estimate state assignments or branch probabilities.",
  "The proton quotient uses the printed direct deuteron mass and printed mass ratio. Its agreement with the rounded reported value verifies central arithmetic only; uncertainty propagation and independence are not established.",
  "The lower branch shifts are measured in the published 9e-12 mass-ratio uncertainty. They remain discrete alternatives; the verifier does not average them or construct a new recommended uncertainty.",
  "The derived proton mass uses the direct Rau value m_d=2.013553212535(17) u, not its locally or jointly adjusted masses. It therefore shares that deuteron acquisition and carbon reference.",
  "The 2021 result reverses the inference direction used for the Fink 2020 absolute deuteron mass: proton mass now follows from direct deuteron mass and the conditional ratio. Neither direction supplies independent validation of its adopted absolute input."
];

const claimContracts = [
  {
    "id": "D-phys-coupled-cyclotron-readout",
    "statement": "Two ions in coupled magnetron orbits can share a simultaneous phase readout, but obtaining the free cyclotron ratio still requires the trap and interaction model.",
    "limits": [
      0,
      1,
      2,
      3
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "D-phys-state-conditional-mass",
    "statement": "A mass result conditional on a discrete rovibrational assignment retains separate alternative assignments. The within-branch statistical uncertainty alone does not represent uncertainty over state identity.",
    "limits": [
      4,
      5,
      6,
      7
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "D-phys-mass-adjustment-constraint",
    "statement": "A mass adjustment relates measured frequency ratios to masses, binding energies and shared reference constants through explicit observational equations and covariance. Adjusted outputs do not supply additional independent acquisitions.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-fink2021-simultaneous-context",
    "statement": "Prepare three H2+/D+ pairs in coupled magnetron orbits, cool each ion alternately, and measure both PnP phases simultaneously in the 8.5 T apparatus.",
    "limits": [
      0,
      1,
      2,
      3,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-fink2021-state-fit-context",
    "statement": "Group the same runs into eleven plateaus, fit allowed rovibrational assignments, and retain five uniquely assignable ratios within each of three branches.",
    "limits": [
      4,
      5,
      6,
      7,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-fink2021-drive-control-context",
    "statement": "Vary drive time within a molecular state, extrapolate versus squared drive time, and estimate residual thermal imbalance from phase noise.",
    "limits": [
      16,
      17,
      18,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-korobov2017-h2-context",
    "statement": "Read the H2+ ground-state ionization calculation under the paper's spin and constant conventions; retain theoretical and constant uncertainties separately.",
    "limits": [
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-codata2022-mass-inputs-context",
    "statement": "Use the selected 2022 adjustment input ratios and observational equations, with explicit shared ionic references and theoretical binding inputs.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-codata2022-lattice-context",
    "statement": "Trace the dimensionless capture input and published lattice comparisons through their observational equations, without reproducing the full adjustment.",
    "limits": [
      22,
      23,
      24,
      25,
      26,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-mass-constraint-replay-context",
    "statement": "Convert the three printed frequency branches through the positive-binding mass balance and evaluate the printed direct-deuteron proton quotient.",
    "limits": [
      27,
      28,
      29,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "C-phys-fink2021-state-branches",
    "statement": "The state analysis retains three R00(5 ms) branches: 0.9992316599712(21), 0.9992316599589(29) and 0.9992316599550(27). The highest branch is adopted conditionally; the other two remain possible.",
    "limits": [
      4,
      5,
      6,
      7,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-fink2021-state-branches",
    "statement": "Separate plateau assignment, population priors and within-branch weighted means; retain all three branch centers without converting the reported relative probabilities into unique state identification.",
    "limits": [
      4,
      5,
      6,
      7,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "C-phys-fink2021-drive-extrapolation",
    "statement": "The 5 ms ratio receives a 29.5(1.4)e-12 driven-motion correction and a separate 2.9(2.9)e-12 thermal correction. The total reported systematic correction is 31.8(3.7)e-12.",
    "limits": [
      0,
      1,
      2,
      3,
      16,
      17,
      18,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-fink2021-drive-extrapolation",
    "statement": "Distinguish the same-state drive-time-squared extrapolation from the phase-noise thermal diagnostic and preserve the unresolved full uncertainty combination.",
    "limits": [
      0,
      1,
      2,
      3,
      16,
      17,
      18,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "C-phys-fink2021-ground-ratio",
    "statement": "For the adopted molecular-state branch, the corrected ratio is nu(H2+(0,0))/nu(D+)=0.9992316600030(21)(37)(43), with statistical, systematic and total uncertainties.",
    "limits": [
      4,
      5,
      6,
      7,
      16,
      17,
      18,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "M-phys-fink2021-ground-ratio",
    "statement": "Apply the reported systematic corrections to the adopted branch; distinguish this conditional ground-state frequency ratio from a uniquely identified state and from the nuclear mass ratio.",
    "limits": [
      4,
      5,
      6,
      7,
      16,
      17,
      18,
      14,
      15
    ],
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "C-phys-korobov-h2-energy",
    "statement": "Korobov Table V gives H2+ ground-state ionization energy 131058.1219937(6) cm^-1 under CODATA 2014 and spin-averaged conventions; (6) is the theoretical component only.",
    "limits": [
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-korobov-h2-energy",
    "statement": "Use the H2+ entry of Table V with its stated theoretical and constant uncertainty exclusions; do not substitute the HD+ entry or treat this reading as a replay of NRQED.",
    "limits": [
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "C-phys-fink2021-deuteron-ratio",
    "statement": "Using the adopted state branch and H2+ binding correction, Fink/Myers reports m_d/m_p=1.999007501272(9). The two alternative state branches lower this result by 2.7 or 3.6 quoted standard uncertainties.",
    "limits": [
      4,
      5,
      6,
      7,
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-fink2021-deuteron-ratio",
    "statement": "Convert the frequency ratio with the electron and positive H2+ binding terms; preserve discrete state alternatives outside the quoted conditional uncertainty.",
    "limits": [
      4,
      5,
      6,
      7,
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "korobov2017"
    ]
  },
  {
    "id": "C-phys-fink2021-proton-mass",
    "statement": "Combining m_d/m_p=1.999007501272(9) with the direct Rau deuteron mass 2.013553212535(17) u gives the reported proton mass 1.007276466574(10) u.",
    "limits": [
      4,
      5,
      6,
      7,
      30,
      31,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "rau2020"
    ]
  },
  {
    "id": "M-phys-fink2021-proton-mass",
    "statement": "Divide the direct deuteron mass by the conditional nuclear mass ratio; do not use Rau adjusted masses or treat reuse of the direct deuteron input as independent absolute-scale validation.",
    "limits": [
      4,
      5,
      6,
      7,
      30,
      31,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "rau2020"
    ]
  },
  {
    "id": "C-phys-codata2022-frequency-inputs",
    "statement": "CODATA D15-D18 use 0.503776367670(17), 1.0070527379117(85), 0.9992316600030(43) and 1.0073102639050(200), respectively. Their observational equations retain ionic charge factors, molecular binding and shared mass references.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13,
      7,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron",
      "heisse2019",
      "rau2020",
      "fink2021"
    ]
  },
  {
    "id": "M-phys-codata2022-frequency-inputs",
    "statement": "Trace the four published corrected frequency ratios to their acquisitions and charge-aware observational equations; retain Fink state conditioning and exclude adjusted masses as independent extra inputs.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13,
      7,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron",
      "heisse2019",
      "rau2020",
      "fink2021"
    ]
  },
  {
    "id": "C-phys-codata2022-ion-covariance",
    "statement": "CODATA Table XXVI correlates the carbon ionization inputs D8/D23, D8/D24 and D23/D24 by 0.9968, 1.0000 and 0.9968. The D15 and D16 equations share the C6+ denominator.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-codata2022-ion-covariance",
    "statement": "Preserve the published ionization-input covariance and shared electronic reference without inferring independence from omitted small correlations or substituting older fixed ionic masses.",
    "limits": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "C-phys-codata2022-capture-equation",
    "statement": "CODATA uses dimensionless eta_d=2.90430245(49)e-3 to connect neutron mass, recoil and d220(ILL). Because neutron mass occurs in no other observational equation, this datum does not independently constrain the ILL lattice spacing.",
    "limits": [
      22,
      23,
      26,
      12,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "M-phys-codata2022-capture-equation",
    "statement": "Use the capture observational equation with an explicit ILL lattice parameter and recoil; distinguish an underdetermined coupled constraint from an independent calibration or a reproduced neutron-mass fit.",
    "limits": [
      22,
      23,
      26,
      12,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron"
    ]
  },
  {
    "id": "C-phys-codata2022-ill-input",
    "statement": "CODATA 2018 and 2022 label E13 as ILL/W04 minus one, -20(22)e-9. The cited Kessler tables assign the negative -20(9)e-9 comparison to WS1/NW04 and report different ILL comparisons. The physical identity of E13 has not been reconciled.",
    "limits": [
      24,
      25,
      26,
      12,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron",
      "tiesinga2021-lattice",
      "kessler2017"
    ]
  },
  {
    "id": "M-phys-codata2022-ill-input",
    "statement": "Compare the published specimen labels, reference crystals and uncertainty rules. Retain the mismatch as unresolved; do not relabel E13, infer a corrected adjustment, or replace the ILL value adopted by Rau.",
    "limits": [
      24,
      25,
      26,
      12,
      14,
      15
    ],
    "sourceIds": [
      "mohr2025-neutron",
      "tiesinga2021-lattice",
      "kessler2017"
    ]
  },
  {
    "id": "C-phys-mass-constraint-arithmetic",
    "statement": "Rounded historical inputs reproduce the reported Fink 2021 central mass ratio and direct-deuteron proton quotient; the two lower branch shifts are approximately -2.734 and -3.601 in units of the published 9e-12 mass-ratio uncertainty.",
    "limits": [
      27,
      28,
      29,
      18,
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "korobov2017",
      "rau2020",
      "mass-constraint-verifier"
    ]
  },
  {
    "id": "M-phys-mass-constraint-arithmetic",
    "statement": "Evaluate positive-binding mass conversion for every printed branch and the direct-deuteron quotient; compare central correction sums and naive independent quadrature without certifying the unavailable covariance.",
    "limits": [
      27,
      28,
      29,
      18,
      19,
      20,
      21,
      14,
      15
    ],
    "sourceIds": [
      "fink2021",
      "korobov2017",
      "rau2020",
      "mass-constraint-verifier"
    ]
  }
];

const studyContracts = [
  {
    "id": "fink2021-simultaneous",
    "system": "Simultaneous FSU H2+/D+ acquisition",
    "preparation": "Prepare three H2+/D+ pairs in coupled magnetron orbits, cool each ion alternately, and measure both PnP phases simultaneously in the 8.5 T apparatus.",
    "studyType": "primary-experiment"
  },
  {
    "id": "fink2021-state-fit",
    "system": "FSU discrete molecular-state analysis",
    "preparation": "Group the same runs into eleven plateaus, fit allowed rovibrational assignments, and retain five uniquely assignable ratios within each of three branches.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "fink2021-drive-control",
    "system": "FSU drive and thermal controls",
    "preparation": "Vary drive time within a molecular state, extrapolate versus squared drive time, and estimate residual thermal imbalance from phase noise.",
    "studyType": "primary-experiment"
  },
  {
    "id": "korobov2017-h2",
    "system": "H2+ ground-state binding calculation",
    "preparation": "Read the H2+ ground-state ionization calculation under the paper's spin and constant conventions; retain theoretical and constant uncertainties separately.",
    "studyType": "computational-analysis"
  },
  {
    "id": "codata2022-mass-inputs",
    "system": "CODATA light-ion mass constraints",
    "preparation": "Use the selected 2022 adjustment input ratios and observational equations, with explicit shared ionic references and theoretical binding inputs.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "codata2022-lattice",
    "system": "CODATA capture and lattice constraints",
    "preparation": "Trace the dimensionless capture input and published lattice comparisons through their observational equations, without reproducing the full adjustment.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "mass-constraint-replay",
    "system": "Conditional mass arithmetic replay",
    "preparation": "Convert the three printed frequency branches through the positive-binding mass balance and evaluate the printed direct-deuteron proton quotient.",
    "studyType": "computational-analysis"
  }
];

const sourceContracts = [
  {
    "id": "fink2021",
    "title": "Deuteron-to-Proton Mass Ratio from Simultaneous Measurement of the Cyclotron Frequencies of H2+ and D+",
    "authors": [
      "David J. Fink",
      "Edmund G. Myers"
    ],
    "doi": "10.1103/PhysRevLett.127.243001",
    "url": "https://link.aps.org/accepted/10.1103/PhysRevLett.127.243001",
    "year": 2021,
    "path": null,
    "review": {
      "extent": "full-accepted-main-article",
      "locators": [
        "Accepted manuscript article pages 1-3: simultaneous PnP readout, coupled magnetron geometry, ion survival, cooling and phase analysis",
        "Accepted manuscript article pages 3-5, Equation 1 and Figures 1-2: eleven plateaus, five retained ratios, three state-assignment branches and conditional interpretation",
        "Accepted manuscript article pages 3-4, Table I: drive extrapolation, thermal correction and unresolved systematic uncertainty combination",
        "Accepted manuscript article pages 4-6, Tables II-III and references: corrected frequency ratio, conditional mass ratio, direct-deuteron proton inference and upstream theory"
      ],
      "limit": "All seven accepted-manuscript PDF pages (cover and six article pages, including references) were read; article pages 3-5 were visually inspected. Publisher metadata confirms publication on 7 December 2021. The supplement was not obtained. Raw phase records, state-assignment search, branch probabilities and full uncertainty propagation remain unreproduced."
    }
  },
  {
    "id": "tiesinga2021-lattice",
    "title": "CODATA recommended values of the fundamental physical constants: 2018",
    "authors": [
      "Eite Tiesinga",
      "Peter J. Mohr",
      "David B. Newell",
      "Barry N. Taylor"
    ],
    "doi": "10.1103/RevModPhys.93.025010",
    "url": "https://pml.nist.gov/cuu/pdf/RevModPhys.93.025010.pdf",
    "year": 2021,
    "path": null,
    "review": {
      "extent": "selected-primary-adjustment-passages",
      "locators": [
        "Pages 025010-41 to 42, Section XVIII and Tables XXVII-XXVIII: E13 ILL/W04 label, added impurity uncertainty and stated absence of correlation with earlier data"
      ],
      "limit": "The official NIST copy was read only for Section XVIII and Tables XXVII-XXVIII on pages 41-42, which were visually inspected. Page 1 confirms authors, DOI and publication on 30 June 2021. The full 63-page report and its adjustment computation were not reviewed or reproduced."
    }
  },
  {
    "id": "mass-constraint-verifier",
    "title": "Conditional mass-constraint arithmetic verifier",
    "authors": [
      "Onto2D contributors"
    ],
    "doi": null,
    "url": null,
    "year": 2026,
    "path": "models/causal-emergence/canonical/verify-mass-constraints.py",
    "review": {
      "extent": "scoped-executable-replay",
      "locators": [
        "verify(): three printed Fink 2021 branches, H2+ mass balance, direct-deuteron proton quotient and correction-budget diagnostic"
      ],
      "limit": "Printed central-value arithmetic and an independent-quadrature diagnostic only. No original acquisition, state assignment, branch likelihood, molecular calculation, covariance propagation or CODATA adjustment is reproduced."
    }
  },
  {
    "id": "korobov2017",
    "title": "Fundamental Transitions and Ionization Energies of the Hydrogen Molecular Ions with Few ppt Uncertainty",
    "authors": [
      "V. I. Korobov",
      "L. Hilico",
      "J.-Ph. Karr"
    ],
    "doi": "10.1103/PhysRevLett.118.233001",
    "url": "https://arxiv.org/pdf/1703.07972v2",
    "year": 2017,
    "path": null,
    "review": {
      "extent": "full-author-manuscript",
      "locators": [
        "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
        "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
      ],
      "limit": "All five author-manuscript pages were read and Table V visually inspected; publisher metadata was checked. The record establishes the stated theoretical energy and its uncertainty exclusions, not a replay of the NRQED calculation."
    }
  },
  {
    "id": "mohr2025-neutron",
    "title": "CODATA recommended values of the fundamental physical constants: 2022",
    "authors": [
      "Peter J. Mohr",
      "David B. Newell",
      "Barry N. Taylor",
      "Eite Tiesinga"
    ],
    "doi": "10.1103/RevModPhys.97.025002",
    "url": "https://physics.nist.gov/cuu/pdf/RevModPhys.97.025002.pdf",
    "year": 2025,
    "path": null,
    "review": {
      "extent": "selected-primary-adjustment-passages",
      "locators": [
        "Page 025002-6, Section II.B and Equations 6-7: dimensionless diffraction input, recoil and neutron-mass adjustment",
        "Page 025002-39, Table XXV entry D14: the printed meter unit conflicts with the dimensionless definition in Section II.B",
        "Pages 025002-6 to 7 and 39, Section II.C, Equations 8-13 and Table XXV D15-D26: mass-ratio inputs, molecular conversion and superseded measurements",
        "Pages 025002-40 and 43, Table XXVI and Table XXXI D8, D14-D26: ionization-energy covariance and mass observational equations",
        "Pages 025002-40 to 44, Section XIII, Tables XXVII-XXIX and selected Section XV.A lattice paragraphs: ILL input E13, correlated calibration and neutron coupling",
        "Page 025002-54, light-nucleus summary: Van Dyck 2006 ratio label conflicts with Section II.C and Table XXV D21"
      ],
      "limit": "Selected neutron, light-ion mass, lattice-calibration and adjustment passages on pages 6-7, 39-44 and 54 were read; pages 6-7, 39-40, 43-44 and 54 were visually inspected. Page 1 confirms publication on 30 April 2025 and the 31 December 2022 input cutoff. The full 62-page report, upstream ionization database and least-squares computation are not reviewed or reproduced. The D14 meter label, extra hbar in the cyclotron expression, duplicated Van Dyck ratio label and E13 calibration identity remain explicit source conflicts."
    }
  }
];

const comparisonContracts = [
  {
    "id": "fink2021-state-branches",
    "result": "inconclusive",
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "fink2021-drive-extrapolation",
    "result": "not-tested",
    "sourceIds": [
      "fink2021"
    ]
  },
  {
    "id": "fink2021-deuteron-ratio",
    "result": "conditional-support",
    "sourceIds": [
      "fink2021",
      "korobov2017"
    ]
  },
  {
    "id": "fink2021-proton-mass",
    "result": "not-tested",
    "sourceIds": [
      "fink2021",
      "rau2020"
    ]
  },
  {
    "id": "codata2022-frequency-inputs",
    "result": "conditional-support",
    "sourceIds": [
      "mohr2025-neutron",
      "heisse2019",
      "rau2020",
      "fink2021"
    ]
  },
  {
    "id": "codata2022-ill-input",
    "result": "inconclusive",
    "sourceIds": [
      "mohr2025-neutron",
      "tiesinga2021-lattice",
      "kessler2017"
    ]
  },
  {
    "id": "mass-constraint-arithmetic",
    "result": "conditional-support",
    "sourceIds": [
      "fink2021",
      "korobov2017",
      "rau2020",
      "mass-constraint-verifier"
    ]
  }
];

/** Preserve reviewed meanings; this does not reproduce the source experiments. */
export function validateMassConstraintContracts({ sources, claims, studies, comparisons }) {
  for (const expected of sourceContracts) {
    const source = sources.get(expected.id);
    for (const key of ["title", "authors", "doi", "url", "year", "path", "review"]) assert.deepEqual(source?.[key], expected[key], "Mass-constraint source or reading boundary changed");
  }
  for (const expected of claimContracts) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "Conditional mass quantity or input identity changed");
    for (const i of expected.limits) assert.ok(claim.limitations.includes(limits[i]), "Mass constraint lost a state, reference, covariance or unresolved-source boundary");
    for (const id of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === id), "Mass constraint lost a reviewed upstream source");
  }
  for (const expected of studyContracts) for (const key of ["system", "preparation", "studyType"]) assert.equal(studies.get(expected.id)?.[key], expected[key], "Mass acquisition, inference or adjustment scope changed");
  for (const expected of comparisonContracts) {
    const comparison = comparisons.get(expected.id);
    assert.equal(comparison.result, expected.result, "Conditional or unresolved inference became independent validation");
    assert.deepEqual(comparison.sourceIds, expected.sourceIds);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    const method = claimContracts.find((c) => c.id === "M-phys-" + expected.id);
    assert.deepEqual(comparison.assumptions, method.limits.map((i) => limits[i]));
  }
}
