import assert from "node:assert/strict";

export const DEUTERON_CHECKS = new Map([["deuteron-grouped-planes", "C-phys-rau-grouped-replay"], ["deuteron-printed-arithmetic", "C-phys-rau-printed-arithmetic"]]);

const limits = [
  "The 2020 reference uses CODATA 2018 m_e=0.000548579909065(16) u, C-12(6+)=11.99670962641246(35) u and C-12(4+)=11.99780583927483(34) u. These differ from the 2019 reference. Neutral carbon-12 is exactly 12 u, but its ions are not.",
  "For the deuteron R=nu_c(C6+)/nu_c(d), m_d=R*m_C6/6; for HD+, R=nu_c(C4+)/nu_c(HD+), m_HD=R*m_C4/4. Charge factors and positive electronic ionization energies cannot be omitted.",
  "The molecular mass balance m_HD=m_p+m_d+m_e-E_ion(HD+)/c^2 uses the total positive ionization energy relative to free nuclei and electron. The predicted/direct comparison shares mass-reference and theoretical inputs; it is not independent-facility validation.",
  "Korobov Table V gives HD+ ionization energy 131224.6841650(6) cm^-1 without a 1e-7 multiplier. The extra factor in Rau author Extended Data Table 2 conflicts with the cited primary table and is not adopted.",
  "This is a spin-averaged NRQED calculation with CODATA 2014 constants, not an energy measurement. Higher-order terms use adiabatic/Born-Oppenheimer approximations and hydrogen/LCAO estimates; the code and wavefunctions have not been replayed.",
  "The quoted (6) is theoretical uncertainty only. The table excludes the Rydberg relative uncertainty 5.9e-12 and describes a mass-ratio contribution below 1e-7 cm^-1. It is not a complete propagated uncertainty or a recalculation with CODATA 2018 constants.",
  "The HD+ rovibrational ground state is inferred after days at 4.2 K using radiative cooling, a 149 s first-excited-state lifetime and a 5.4 meV gap. It is not directly state-resolved certification; spin populations need not be thermalized.",
  "Of 83 runs on 27 H2+ ions, the final analysis uses 33 runs on seven ions. The eight-Gaussian vibrational histogram is not the final mass fit. The supplement needed to audit selection and maximum-likelihood details was not obtained.",
  "Vibrational v=0 does not imply rotational N=0. Long-lived rotational excitation is modeled, not directly measured. A 300 K parent-gas distribution and cascade calculation are assumptions, with uncertain desorption populations.",
  "The adopted rotational correction is 15.8(16.4) ppt. The trend -5.1(12.4) ppt is not a detection of heating. Table III total correction is 65.2(19.0) ppt; the 19.0 includes statistical uncertainty.",
  "The ILL (SERI) 2.5 mm gamma-diffraction crystals are distinct from WS1 and from the general silicon average. Comparator material is adjacent, not a measurement of the exact illuminated volume of every capture crystal.",
  "The W04 reference is 192.0155702(10)e-12 m; NW04=192.0155696(10)e-12 m is transferred through impurity corrections within the same boule. The two ILL paths share absolute-standard inputs.",
  "Table 4 uses ILL-WS1=40(10)e-9 and WS1-NW04=-20(9)e-9; adding 25e-9 material variability gives ILL 192.0155735(56)e-12 m. Table 5 uses three transfer crystals, giving 192.0155707(59)e-12 m.",
  "The reported final ILL spacing is 192.0155721(64)e-12 m at 22.5 C and zero pressure. The final uncertainty is larger than either path uncertainty; the complete combination rule has not been recovered and independent inverse-variance averaging is not justified.",
  "Repeated-comparison scatter uses a standard deviation, not a standard error of the mean. The added 25e-9 material variability is empirical; Table 16 also contains SRM k=2 entries, which are not interchangeable with the ILL k=1 specimen uncertainty.",
  "Raw diffraction profiles, upstream X-ray/optical interferometry and calibration covariance are not replayed. Temperature, pressure, impurity transfer and sample geometry remain conditions on the reference.",
  "Four deuteron/carbon pairs provide 41 runs. Pairs 1-2 use AWG1 and pairs 3-4 use AWG2, with separate excitation-plane fits; alternate ion measurements and randomized species order do not create independent absolute references.",
  "The shim coils are used in this campaign: B2/B0=+6.5(6.5)e-10/mm^2. The magnetometer trap remains unused. This differs from the proton campaign.",
  "Zero driven excitation is not zero thermal energy. Feedback-cooled PnA motion uses 1.2(0.5) K; the no-feedback dip measurement uses 3.7(0.5) K.",
  "Table 1 reports ratio corrections in ppt: image charge 82.1(4.1), relativity -2.9(1.2), magnetic 0.3(0.6), electrostatic <0.1(0.3), line shape 0(4.7), magnetron 0(0.4), total 79.6(6.5). The stated five-percent image-charge uncertainty is retained.",
  "The AWG replacement followed observed double-dip noise; the heating test did not detect a relevant effect. This is not proof that every generator-dependent systematic vanishes.",
  "Reported mass values are conditional on the stated preparation, reference constants and correction model. Raw acquisition, original covariance and uncertainty propagation have not been independently reproduced.",
  "These measurements and calculations do not establish nucleon formation, intrinsic stability or a universal carrier minimum. Historical constants are not present-day recommended values.",
  "The HD+/C4+ acquisition uses one pair over seven weeks and different trapping voltages to match axial frequencies. It is not the common-voltage deuteron preparation.",
  "Extended Data Table 1 reports HD+ ratio correction 54.3(8.1) ppt, including polarization -18.5 ppt, image charge 73.8(3.7), relativity -1.1(0.5), magnetic 0.2(0.3), line shape 0(6.8) and magnetron 0(2.1).",
  "The local LIONTRAP adjustment fits the 2019 proton result, direct deuteron result and HD+ mass constraint. Its m_d/m_p=1.999007501228(59) is a quotient of adjusted masses, not the quotient of the two raw direct central values.",
  "The joint adjustment additionally uses the Fink/Myers 2020 deuteron/proton ratio. Its output masses reuse those experiments and must not be counted as independent measurements.",
  "The local m_p-m_d correlation is -0.13. The joint correlations are m_p-m_d=0.26, m_p-m_n=0.03 and m_d-m_n=-0.03. The original fit covariance and weighting have not been reconstructed.",
  "Table 2 gives Delta_C=0.005897432449(50) u and Delta_FSU=0.005897432191(70) u, so Delta_C-Delta_FSU=+258(86) pu. The author prose reverses that subtraction while keeping its positive sign. The three-sigma tension remains; pu means 1e-12 u, not dimensionless ppt.",
  "Rau rescales the previously recalibrated Kessler/Dewey capture wavelength using d_new/d_old. This reuses the original capture acquisition; it is not a new gamma-ray measurement.",
  "The intended d_old=192.0155822(96)e-12 m and lambda_old=0.557671328(99)e-12 m yield lambda_new=0.557671299(97)e-12 m. The author Methods omits the 1e-12 exponent on d_old; literal meters cannot be used.",
  "The photon energy 2223248.69(0.39) eV is increased by E_gamma^2/(2*m_d*c^2) to binding energy 2224566.35(0.39) eV or 0.00238817008(42) u, using u*c^2=9.3149410242(28)e8 eV. Printed central arithmetic does not reproduce the uncertainty budget.",
  "Fink/Myers uses a separate FSU 8.5 T, 4.2 K trap with two simultaneously stored ions, alternated between the center and a 2 mm cyclotron orbit. Storage is simultaneous; the reported frequency readout is sequential.",
  "The published final ratio uncertainty components are (7) statistical, (7) instrumental, (16) rotational and (19) total. The raw statistical entry is 6.3 ppt; the original weighting is not independently reproduced.",
  "Conversion from H2+ to m_d/m_p uses electron and molecular binding inputs. The cited Olivares-Pilon/Baye and Yan/Zhang/Li binding calculations remain unreviewed upstream sources here; Korobov HD+ theory is not substituted for them.",
  "The absolute m_d=2.013553212586(76) u uses the Heiße 2019 proton mass. Independent ratio acquisition does not make this derived absolute mass independent of that proton input.",
  "The paper also quotes m_n=1.00866491594(42) u with AME 2016 binding 0.00238816995(42) u. That input differs from the Rau recalibration and is not silently replaced.",
  "Only the 27 published grouped means are fitted with independent diagonal weights 1/sigma^2. Their raw acquisition, grouping, original covariance and final uncertainty model are not reconstructed.",
  "Figure 3 is deuteron AWG1 and Extended Data Figure 1 panel a is deuteron AWG2, despite HD+/C4+ column headers. The HD+ sheet is panel b and precedes panel a in workbook order. Original bytes are preserved.",
  "The grouped diagonal intercept errors are about 7.993, 6.454 and 16.265 in absolute ratio units of 1e-12, distinct from the published 8.6, 7.0 and 19 in the same units. Near agreement of central values and residuals does not reproduce the original uncertainty.",
  "Figure 4 source cell C9 gives 18 pu for this-work uncertainty; the article gives 17 pu. The discrepancy is recorded, not repaired or resolved.",
  "The author version also has missing or mismatched reference markers and says to add positive binding energy in the neutral-deuterium conversion. The physical neutral-atom balance subtracts positive ionization energy; these copyediting issues do not license changing reported mass results."
];

const claimContracts = [
  {
    "id": "D-phys-rau-carbon-reference",
    "statement": "The 2020 deuteron and HD+ campaign converts cyclotron ratios with distinct C-12(6+) and C-12(4+) nuclear/electronic references and charge factors, using the stated CODATA 2018 inputs.",
    "limits": [
      0,
      1
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "D-phys-molecular-ion-mass-balance",
    "statement": "A bound molecular-ion mass equals the masses of its free constituent nuclei and electrons minus positive binding energy divided by c^2. The energy must specify the electronic, vibrational, rotational and spin convention.",
    "limits": [
      2,
      3,
      4,
      5
    ],
    "sourceIds": [
      "rau2020",
      "korobov2017"
    ]
  },
  {
    "id": "D-phys-rovibrational-state-boundary",
    "statement": "A vibrational or rotational ground-state assignment requires a preparation or readout model. Vibrational v=0 alone does not imply rotational N=0, and waiting for modeled cooling is not direct state certification.",
    "limits": [
      6,
      7,
      8,
      9
    ],
    "sourceIds": [
      "rau2020",
      "fink2020"
    ]
  },
  {
    "id": "D-phys-silicon-lattice-transfer",
    "statement": "A relative Bragg-angle comparison transfers an absolute lattice-spacing reference to a specified silicon specimen under stated temperature, pressure, impurity and geometry conditions. Shared reference standards retain covariance.",
    "limits": [
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "kessler2017"
    ]
  },
  {
    "id": "M-phys-rau2020-awg1-context",
    "statement": "Pairs 1-2 of the four-pair LIONTRAP deuteron/C6+ campaign use the first excitation generator, alternating ions near 3.8 T and 4.2 K. A separate planar fit extrapolates the squared excitation strengths to zero drive.",
    "limits": [
      0,
      1,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-rau2020-awg2-context",
    "statement": "Pairs 3-4 use a replacement excitation generator and their own excitation-plane fit, with the same LIONTRAP mass reference and corrected trap. The two generator groups share apparatus and systematic inputs.",
    "limits": [
      0,
      1,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-rau2020-hd-context",
    "statement": "One HD+/C4+ pair is compared for seven weeks with changed trap voltage to match axial frequencies. The ground rovibrational state is inferred from cryogenic storage and cooling; excitation and polarizability corrections remain.",
    "limits": [
      0,
      1,
      23,
      6,
      24,
      2,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-rau2020-local-fit-context",
    "statement": "Fit the published 2019 proton mass, direct deuteron mass and HD+ molecular mass balance together, retaining common electronic, molecular and calibration inputs.",
    "limits": [
      25,
      26,
      27,
      28,
      2,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-rau2020-joint-fit-context",
    "statement": "Add the independently acquired FSU deuteron/proton ratio to the LIONTRAP mass constraints. The quoted neutron mass additionally uses the recalibrated capture binding energy.",
    "limits": [
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-korobov2017-hd-context",
    "statement": "Calculate spin-averaged hydrogen molecular-ion energies with high-order NRQED corrections and stated approximations using CODATA 2014 inputs; quote theoretical uncertainty separately from constant uncertainties.",
    "limits": [
      3,
      4,
      5,
      21,
      22
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-kessler2017-ill-context",
    "statement": "Combine existing ILL transfer comparisons with revised W04/NW04 absolute references and WS1 comparisons, retaining two paths, empirical sample variability and the 22.5 C vacuum boundary.",
    "limits": [
      10,
      11,
      12,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "kessler2017"
    ]
  },
  {
    "id": "M-phys-fink2020-ratio-context",
    "statement": "Store H2+ and D+ together in an 8.5 T trap, alternate the measured central ion, select seven ions with inferred vibrational v=0, and apply modeled rotational and instrumental corrections to 33 selected runs.",
    "limits": [
      32,
      7,
      8,
      9,
      33,
      34,
      35,
      36,
      21,
      22
    ],
    "sourceIds": [
      "fink2020"
    ]
  },
  {
    "id": "M-phys-rau2020-figure-replay-context",
    "statement": "Fit the named AWG1, AWG2 and HD+ publisher workbook panels as three weighted planes of grouped mean ratio versus squared radii, using 40-digit decimal arithmetic and independent diagonal errors. Check selected rounded mass and recoil arithmetic separately.",
    "limits": [
      37,
      38,
      39,
      40,
      41,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "C-phys-rau-deuteron",
    "statement": "AWG1 and AWG2 report zero-drive ratios 1.0070527378313(86) and 1.0070527378317(70), combined as 1.0070527378316(54). After corrections, R=1.0070527379117(54)(65)(85) and m_d=2.013553212535(11)(13)(17) u, with statistical, systematic and total uncertainties.",
    "limits": [
      0,
      1,
      16,
      17,
      18,
      19,
      20,
      40,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "rau2020-fig4-data"
    ]
  },
  {
    "id": "C-phys-rau-hd-mass",
    "statement": "The HD+ comparison reports zero-drive ratio 1.007310263850(19), corrected ratio 1.007310263905(19)(8)(20), and m_HD=3.021378241561(56)(24)(61) u, with statistical, systematic and total uncertainties.",
    "limits": [
      0,
      1,
      23,
      6,
      24,
      2,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "C-phys-korobov-hd-energy",
    "statement": "Korobov Table V gives spin-averaged HD+ ionization energy 131224.6841650(6) cm^-1. The final-digit uncertainty is theoretical and omits the separately discussed constant uncertainties.",
    "limits": [
      3,
      4,
      5,
      21,
      22
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "C-phys-rau-hd-closure",
    "statement": "Using the 2019 proton input and direct deuteron mass, the molecular balance predicts m_HD=3.021378241576(37) u. Prediction minus direct HD+ measurement is 15(71) pu, where pu=1e-12 u.",
    "limits": [
      23,
      6,
      24,
      2,
      3,
      4,
      5,
      0,
      1,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "C-phys-rau-local-adjustment",
    "statement": "The local fit gives m_p=1.007276466595(29) u and m_d=2.013553212534(17) u with correlation -0.13; their adjusted ratio is m_d/m_p=1.999007501228(59).",
    "limits": [
      25,
      26,
      27,
      28,
      2,
      3,
      4,
      5,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "C-phys-rau-joint-adjustment",
    "statement": "Including the FSU ratio gives m_p=1.007276466580(17) u and m_d=2.013553212537(16) u with correlation 0.26. These are outputs of the joint adjustment, not new direct acquisitions.",
    "limits": [
      25,
      26,
      27,
      28,
      34,
      35,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "fink2020"
    ]
  },
  {
    "id": "C-phys-ill2017-spacing",
    "statement": "The two-path ILL calibration reports d220=192.0155721(64)e-12 m at 22.5 C and zero pressure. Its two path estimates are 192.0155735(56)e-12 m and 192.0155707(59)e-12 m.",
    "limits": [
      10,
      11,
      12,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "kessler2017"
    ]
  },
  {
    "id": "C-phys-rau-capture-binding",
    "statement": "Rescaling the existing capture wavelength with the revised ILL spacing yields photon wavelength 0.557671299(97)e-12 m and recoil-corrected binding energy 2224566.35(0.39) eV, or 0.00238817008(42) u.",
    "limits": [
      29,
      30,
      31,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "kessler2017"
    ]
  },
  {
    "id": "C-phys-rau-neutron-mass",
    "statement": "The joint proton/deuteron adjustment and recalibrated positive deuteron binding energy give m_n=m_d-m_p+E_B/c^2=1.00866491604(42) u. Its correlations with proton and deuteron are 0.03 and -0.03.",
    "limits": [
      29,
      30,
      31,
      25,
      26,
      27,
      28,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "C-phys-fink-deuteron-ratio",
    "statement": "Fink/Myers reports R=nu_c(H2+)/nu_c(D+)=m_D/m_H2(v=0,N=0)=0.999231660004(7)(7)(16)(19). Electron and molecular binding corrections give m_d/m_p=1.999007501274(38).",
    "limits": [
      32,
      7,
      8,
      9,
      33,
      34,
      35,
      36,
      21,
      22
    ],
    "sourceIds": [
      "fink2020"
    ]
  },
  {
    "id": "C-phys-fink-proton-referenced-mass",
    "statement": "Combining the FSU ratio with the Heiße 2019 proton mass gives m_d=2.013553212586(76) u. This absolute mass is conditional on the same proton input used in the LIONTRAP comparisons.",
    "limits": [
      32,
      7,
      8,
      9,
      33,
      34,
      35,
      36,
      21,
      22
    ],
    "sourceIds": [
      "fink2020",
      "heisse2019"
    ]
  },
  {
    "id": "C-phys-rau-grouped-replay",
    "statement": "Weighted planes of 27 published grouped means give intercepts about 1.007052737831311, 1.007052737831752 and 1.007310263850385 for deuteron AWG1, deuteron AWG2 and HD+. Reconstructed residuals differ from the published values by less than 0.005 in ratio units of 1e-12.",
    "limits": [
      37,
      38,
      39,
      40,
      41,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "rau2020-fig3-data",
      "rau2020-edfig1-data",
      "rau2020-fig4-data",
      "deuteron-data-verifier"
    ]
  },
  {
    "id": "C-phys-rau-printed-arithmetic",
    "statement": "Using the unscaled Korobov HD+ ionization energy gives a molecular prediction-minus-direct difference about 14.731 pu. Rescaling the capture wavelength and adding deuteron recoil gives 2224566.3487 eV from the printed central inputs.",
    "limits": [
      29,
      30,
      31,
      3,
      4,
      5,
      37,
      40,
      41,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "korobov2017",
      "kessler2017",
      "deuteron-data-verifier"
    ]
  },
  {
    "id": "M-phys-rau-deuteron",
    "statement": "Fit the two generator groups separately to zero deliberate excitation, combine the fitted ratios under the reported uncertainty model, apply the campaign corrections, then use m_d=R*m_C6/6.",
    "limits": [
      0,
      1,
      16,
      17,
      18,
      19,
      20,
      40,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "rau2020-fig4-data"
    ]
  },
  {
    "id": "M-phys-rau-hd-mass",
    "statement": "Apply the HD+ preparation-specific systematic and polarizability corrections to the zero-drive ratio, then use m_HD=R*m_C4/4 while retaining the inferred molecular state.",
    "limits": [
      0,
      1,
      23,
      6,
      24,
      2,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-korobov-hd-energy",
    "statement": "Use the spin-averaged NRQED energy expansion and stated higher-order approximations with CODATA 2014 inputs; distinguish theoretical uncertainty from omitted constant contributions.",
    "limits": [
      3,
      4,
      5,
      21,
      22
    ],
    "sourceIds": [
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-rau-hd-closure",
    "statement": "Compute m_p+m_d+m_e-E_ion(HD+)/c^2 from the adopted inputs and subtract the direct HD+ mass; retain shared mass-reference and theoretical covariance.",
    "limits": [
      23,
      6,
      24,
      2,
      3,
      4,
      5,
      0,
      1,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-rau-local-adjustment",
    "statement": "Fit the proton, deuteron and molecular constraints together under the stated covariance model, then form the adjusted m_d/m_p quotient.",
    "limits": [
      25,
      26,
      27,
      28,
      2,
      3,
      4,
      5,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "M-phys-rau-joint-adjustment",
    "statement": "Combine the LIONTRAP mass constraints with the FSU ratio using their stated uncertainties and shared inputs; retain the resulting correlated masses as adjusted outputs.",
    "limits": [
      25,
      26,
      27,
      28,
      34,
      35,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "fink2020"
    ]
  },
  {
    "id": "M-phys-ill2017-spacing",
    "statement": "Transfer W04/NW04 spacing through the two ILL comparison paths, add the reported specimen variability, and retain the published final uncertainty pending recovery of its full combination rule.",
    "limits": [
      10,
      11,
      12,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "kessler2017"
    ]
  },
  {
    "id": "M-phys-rau-capture-binding",
    "statement": "Rescale lambda_new=lambda_old*d_new/d_old for the same capture data, compute E_gamma=h*c/lambda_new, add E_gamma^2/(2*m_d*c^2), then convert with the stated u*c^2.",
    "limits": [
      29,
      30,
      31,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "kessler2017"
    ]
  },
  {
    "id": "M-phys-rau-neutron-mass",
    "statement": "Use the joint adjusted m_d and m_p with positive recalibrated binding mass in m_n=m_d-m_p+E_B/c^2; retain the adopted covariance and capture uncertainty.",
    "limits": [
      29,
      30,
      31,
      25,
      26,
      27,
      28,
      21,
      22
    ],
    "sourceIds": [
      "rau2020"
    ]
  },
  {
    "id": "M-phys-fink-deuteron-ratio",
    "statement": "Select the stated v=0 runs, apply the modeled rotational and instrumental corrections to nu(H2+)/nu(D+), then convert through electron and H2+ binding inputs to m_d/m_p.",
    "limits": [
      32,
      7,
      8,
      9,
      33,
      34,
      35,
      36,
      21,
      22
    ],
    "sourceIds": [
      "fink2020"
    ]
  },
  {
    "id": "M-phys-fink-proton-referenced-mass",
    "statement": "Multiply the corrected FSU m_d/m_p by the adopted Heiße 2019 proton mass and propagate its contribution; this shared absolute reference prevents independent validation of that input.",
    "limits": [
      32,
      7,
      8,
      9,
      33,
      34,
      35,
      36,
      21,
      22
    ],
    "sourceIds": [
      "fink2020",
      "heisse2019"
    ]
  },
  {
    "id": "M-phys-rau-grouped-replay",
    "statement": "Fit three named publisher panels using columns B/C squared, mean ratio E and weights 1/F^2, compare residuals with D, and distinguish diagonal grouped-fit uncertainty from the original fit.",
    "limits": [
      37,
      38,
      39,
      40,
      41,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "rau2020-fig3-data",
      "rau2020-edfig1-data",
      "rau2020-fig4-data",
      "deuteron-data-verifier"
    ]
  },
  {
    "id": "M-phys-rau-printed-arithmetic",
    "statement": "Use Korobov Table V without the spurious 1e-7 multiplier, subtract positive molecular binding mass, rescale the capture wavelength, and add recoil; compare rounded central results without claiming uncertainty reproduction.",
    "limits": [
      29,
      30,
      31,
      3,
      4,
      5,
      37,
      40,
      41,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "korobov2017",
      "kessler2017",
      "deuteron-data-verifier"
    ]
  },
  {
    "id": "M-phys-rau2020-capture-recalibration-context",
    "statement": "Rescale the previously recalibrated capture wavelength by the revised ILL lattice spacing, then apply photon recoil and the stated mass-energy conversion. This analysis reuses the original Kessler capture data.",
    "limits": [
      29,
      30,
      31,
      13,
      14,
      15,
      21,
      22
    ],
    "sourceIds": [
      "rau2020",
      "kessler2017"
    ]
  }
];

const studyContracts = [
  {
    "id": "rau2020-awg1",
    "system": "Deuteron AWG1 acquisition",
    "preparation": "Pairs 1-2 of the four-pair LIONTRAP deuteron/C6+ campaign use the first excitation generator, alternating ions near 3.8 T and 4.2 K. A separate planar fit extrapolates the squared excitation strengths to zero drive.",
    "studyType": "primary-experiment"
  },
  {
    "id": "rau2020-awg2",
    "system": "Deuteron AWG2 acquisition",
    "preparation": "Pairs 3-4 use a replacement excitation generator and their own excitation-plane fit, with the same LIONTRAP mass reference and corrected trap. The two generator groups share apparatus and systematic inputs.",
    "studyType": "primary-experiment"
  },
  {
    "id": "rau2020-hd",
    "system": "HD+ carbon comparison",
    "preparation": "One HD+/C4+ pair is compared for seven weeks with changed trap voltage to match axial frequencies. The ground rovibrational state is inferred from cryogenic storage and cooling; excitation and polarizability corrections remain.",
    "studyType": "primary-experiment"
  },
  {
    "id": "rau2020-local-fit",
    "system": "Local LIONTRAP mass adjustment",
    "preparation": "Fit the published 2019 proton mass, direct deuteron mass and HD+ molecular mass balance together, retaining common electronic, molecular and calibration inputs.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "rau2020-joint-fit",
    "system": "Joint LIONTRAP and FSU adjustment",
    "preparation": "Add the independently acquired FSU deuteron/proton ratio to the LIONTRAP mass constraints. The quoted neutron mass additionally uses the recalibrated capture binding energy.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "korobov2017-hd",
    "system": "HD+ NRQED energy calculation",
    "preparation": "Calculate spin-averaged hydrogen molecular-ion energies with high-order NRQED corrections and stated approximations using CODATA 2014 inputs; quote theoretical uncertainty separately from constant uncertainties.",
    "studyType": "computational-analysis"
  },
  {
    "id": "kessler2017-ill",
    "system": "ILL silicon calibration analysis",
    "preparation": "Combine existing ILL transfer comparisons with revised W04/NW04 absolute references and WS1 comparisons, retaining two paths, empirical sample variability and the 22.5 C vacuum boundary.",
    "studyType": "experimental-reanalysis"
  },
  {
    "id": "fink2020-ratio",
    "system": "FSU H2+ and deuteron ratio",
    "preparation": "Store H2+ and D+ together in an 8.5 T trap, alternate the measured central ion, select seven ions with inferred vibrational v=0, and apply modeled rotational and instrumental corrections to 33 selected runs.",
    "studyType": "primary-experiment"
  },
  {
    "id": "rau2020-figure-replay",
    "system": "Published deuteron figure replay",
    "preparation": "Fit the named AWG1, AWG2 and HD+ publisher workbook panels as three weighted planes of grouped mean ratio versus squared radii, using 40-digit decimal arithmetic and independent diagonal errors. Check selected rounded mass and recoil arithmetic separately.",
    "studyType": "computational-analysis"
  },
  {
    "id": "rau2020-capture-recalibration",
    "system": "Capture binding recalibration",
    "preparation": "Rescale the previously recalibrated capture wavelength by the revised ILL lattice spacing, then apply photon recoil and the stated mass-energy conversion. This analysis reuses the original Kessler capture data.",
    "studyType": "experimental-reanalysis"
  }
];

const sourceContracts = [
  {
    "id": "rau2020",
    "title": "Penning trap mass measurements of the deuteron and the HD+ molecular ion",
    "authors": [
      "S. Rau",
      "F. Heiße",
      "F. Köhler-Langes",
      "S. Sasidharan",
      "R. Haas",
      "D. Renisch",
      "Ch. E. Düllmann",
      "W. Quint",
      "S. Sturm",
      "K. Blaum"
    ],
    "doi": "10.1038/s41586-020-2628-7",
    "url": "https://arxiv.org/pdf/2203.05971v1",
    "year": 2020,
    "path": null,
    "review": {
      "extent": "full-author-manuscript",
      "locators": [
        "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
        "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
        "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
        "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion"
      ],
      "limit": "All ten pages of the post-peer-review, pre-copyedit author version were read; pages 1, 3, 4, 5, 7, 8, 9 and 10 were visually inspected. Publisher metadata and deposited figure tables were checked. The full publisher record was not obtained. Source-version notation conflicts remain explicit; acquisition, full covariance and adjustment are not reproduced."
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
    "id": "fink2020",
    "title": "Deuteron-to-Proton Mass Ratio from the Cyclotron Frequency Ratio of H2+ to D+ with H2+ in a Resolved Vibrational State",
    "authors": [
      "D. J. Fink",
      "E. G. Myers"
    ],
    "doi": "10.1103/PhysRevLett.124.013001",
    "url": "https://link.aps.org/accepted/10.1103/PhysRevLett.124.013001",
    "year": 2020,
    "path": null,
    "review": {
      "extent": "full-accepted-main-article",
      "locators": [
        "Accepted manuscript article pages 1-5, Figures 1-2 and Tables I-III: ion preparation, vibrational selection, rotational correction, frequency ratio and derived masses"
      ],
      "limit": "The official CHORUS accepted manuscript was read in full (cover and five article pages); article pages 2-4 were visually inspected and publisher metadata checked. The supplement was not obtained, so selection, rotational maximum-likelihood details and full uncertainty propagation remain unreproduced."
    }
  },
  {
    "id": "kessler2017",
    "title": "The Lattice Spacing Variability of Intrinsic Float-Zone Silicon",
    "authors": [
      "E. G. Kessler",
      "C. I. Szabo",
      "J. P. Cline",
      "A. Henins",
      "L. T. Hudson",
      "M. H. Mendenhall",
      "M. D. Vaudin"
    ],
    "doi": "10.6028/jres.122.024",
    "url": "https://nvlpubs.nist.gov/nistpubs/jres/122/jres.122.024.pdf",
    "year": 2017,
    "path": null,
    "review": {
      "extent": "full-primary-article",
      "locators": [
        "Pages 2-7, Sections 2-4 and Tables 1-3: relative lattice comparator, environment, W04 reference transfer and material variability",
        "Pages 7-9 and 22-23, Section 5, Tables 4-5 and 16: two ILL calibration paths, shared standards, sample variability and final adopted spacing"
      ],
      "limit": "All 25 pages of the NIST record were read; pages 5, 9 and 22 were visually inspected. Admission is restricted to the comparator method and ILL calibration. The general silicon average differs between Figure 11 and its prose and is not used as the ILL input. Raw profiles, upstream interferometry and final calibration covariance are not reproduced."
    }
  },
  {
    "id": "rau2020-fig3-data",
    "title": "Rau 2020 publisher source data: fig3",
    "authors": [
      "S. Rau",
      "F. Heiße",
      "F. Köhler-Langes",
      "S. Sasidharan",
      "R. Haas",
      "D. Renisch",
      "Ch. E. Düllmann",
      "W. Quint",
      "S. Sturm",
      "K. Blaum"
    ],
    "doi": null,
    "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-020-2628-7/MediaObjects/41586_2020_2628_MOESM2_ESM.xlsx",
    "year": 2020,
    "path": "references/canonical/data/rau2020-fig3.xlsx",
    "review": {
      "extent": "published-figure-table",
      "locators": [
        "Figure 3 source workbook, suface_Plot_AWG, A1:F11: ten grouped deuteron AWG1 points with incorrect molecular species headers"
      ],
      "limit": "Grouped figure values and rounded-input arithmetic only; no acquisition, covariance, joint adjustment, theory or crystal-experiment reproduction. Original workbook bytes retain the documented label and uncertainty discrepancies."
    }
  },
  {
    "id": "rau2020-edfig1-data",
    "title": "Rau 2020 publisher source data: edfig1",
    "authors": [
      "S. Rau",
      "F. Heiße",
      "F. Köhler-Langes",
      "S. Sasidharan",
      "R. Haas",
      "D. Renisch",
      "Ch. E. Düllmann",
      "W. Quint",
      "S. Sturm",
      "K. Blaum"
    ],
    "doi": null,
    "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-020-2628-7/MediaObjects/41586_2020_2628_MOESM4_ESM.xlsx",
    "year": 2020,
    "path": "references/canonical/data/rau2020-edfig1.xlsx",
    "review": {
      "extent": "published-figure-table",
      "locators": [
        "Extended Data Figure 1 source workbook: b) surface_Plot_HD A1:F8 and a) surface_Plot_AWG2 A1:F11; panel order and deuteron header conflict"
      ],
      "limit": "Grouped figure values and rounded-input arithmetic only; no acquisition, covariance, joint adjustment, theory or crystal-experiment reproduction. Original workbook bytes retain the documented label and uncertainty discrepancies."
    }
  },
  {
    "id": "rau2020-fig4-data",
    "title": "Rau 2020 publisher source data: fig4",
    "authors": [
      "S. Rau",
      "F. Heiße",
      "F. Köhler-Langes",
      "S. Sasidharan",
      "R. Haas",
      "D. Renisch",
      "Ch. E. Düllmann",
      "W. Quint",
      "S. Sturm",
      "K. Blaum"
    ],
    "doi": null,
    "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-020-2628-7/MediaObjects/41586_2020_2628_MOESM3_ESM.xlsx",
    "year": 2020,
    "path": "references/canonical/data/rau2020-fig4.xlsx",
    "review": {
      "extent": "published-figure-table",
      "locators": [
        "Figure 4 source workbook, A9:C9: this-work mass difference and 18 pu uncertainty, distinct from the article 17 pu"
      ],
      "limit": "Grouped figure values and rounded-input arithmetic only; no acquisition, covariance, joint adjustment, theory or crystal-experiment reproduction. Original workbook bytes retain the documented label and uncertainty discrepancies."
    }
  },
  {
    "id": "deuteron-data-verifier",
    "title": "Scoped deuteron figure and arithmetic verifier",
    "authors": [
      "Onto2D contributors"
    ],
    "doi": null,
    "url": null,
    "year": 2026,
    "path": "models/causal-emergence/canonical/verify-deuteron-data.py",
    "review": {
      "extent": "scoped-executable-replay",
      "locators": [
        "verify(): named workbook panels, 40-digit decimal weighted planes, published residuals, figure uncertainty conflict and rounded-input mass/recoil arithmetic"
      ],
      "limit": "Grouped figure values and rounded-input arithmetic only; no acquisition, covariance, joint adjustment, theory or crystal-experiment reproduction. Original workbook bytes retain the documented label and uncertainty discrepancies."
    }
  }
];

const comparisonContracts = [
  {
    "id": "rau-hd-closure",
    "result": "conditional-support",
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "rau-local-adjustment",
    "result": "conditional-support",
    "sourceIds": [
      "rau2020",
      "heisse2019",
      "korobov2017"
    ]
  },
  {
    "id": "rau-joint-adjustment",
    "result": "conditional-support",
    "sourceIds": [
      "rau2020",
      "fink2020"
    ]
  },
  {
    "id": "ill2017-spacing",
    "result": "not-tested",
    "sourceIds": [
      "kessler2017"
    ]
  },
  {
    "id": "fink-proton-referenced-mass",
    "result": "not-tested",
    "sourceIds": [
      "fink2020",
      "heisse2019"
    ]
  },
  {
    "id": "rau-grouped-replay",
    "result": "conditional-support",
    "sourceIds": [
      "rau2020",
      "rau2020-fig3-data",
      "rau2020-edfig1-data",
      "rau2020-fig4-data",
      "deuteron-data-verifier"
    ]
  },
  {
    "id": "rau-printed-arithmetic",
    "result": "conditional-support",
    "sourceIds": [
      "rau2020",
      "korobov2017",
      "kessler2017",
      "deuteron-data-verifier"
    ]
  }
];

/** Preserve reviewed meanings; this validation does not reproduce an experiment. */
export function validateDeuteronContracts({ sources, claims, studies, comparisons }) {
  for (const expected of sourceContracts) {
    const source = sources.get(expected.id);
    for (const key of ["title", "authors", "doi", "url", "year", "path", "review"]) assert.deepEqual(source?.[key], expected[key], "Deuteron evidence changed source or reading boundary");
  }
  for (const expected of claimContracts) {
    const claim = claims.get(expected.id);
    assert.equal(claim.statement, expected.statement, "Deuteron quantity, state or inference changed");
    for (const i of expected.limits) assert.ok(claim.limitations.includes(limits[i]), "Deuteron inference lost calibration, state, covariance or replay limits");
    for (const id of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === id), "Deuteron inference lost an upstream source");
  }
  for (const expected of studyContracts) for (const key of ["system", "preparation", "studyType"]) assert.equal(studies.get(expected.id)?.[key], expected[key], "Deuteron preparation changed");
  for (const expected of comparisonContracts) {
    const comparison = comparisons.get(expected.id);
    assert.equal(comparison.result, expected.result, "Bounded mass inference became independent validation");
    assert.deepEqual(comparison.sourceIds, expected.sourceIds);
    assert.deepEqual(comparison.claimIds, ["C-phys-" + expected.id]);
    const method = claimContracts.find((c) => c.id === "M-phys-" + expected.id);
    assert.deepEqual(comparison.assumptions, method.limits.map((i) => limits[i]));
  }
}
