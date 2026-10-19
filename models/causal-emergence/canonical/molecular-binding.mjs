import assert from "node:assert/strict";

export const MOLECULAR_BINDING_CHECKS = new Map();
export const MOLECULAR_BINDING_ANALYTICAL_SOURCES = new Map();
export const MOLECULAR_BINDING_STUDY_TYPES = new Map([["liu2009-h2", "primary-experiment"]]);
export const MOLECULAR_BINDING_ADMISSION = {
  "definitions": [
    [
      "phys:two-center-molecular-ion-model",
      "D-phys-two-center-molecular-ion-model"
    ],
    [
      "phys:molecular-binding-channel-boundary",
      "D-phys-molecular-binding-channel-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:coulomb-effective-potential-two-center-molecular-ion-model",
      [
        "phys:coulomb-effective-potential",
        "phys:two-center-molecular-ion-model"
      ]
    ]
  ],
  "contexts": [
    [
      "liu2009-h2-context",
      "M-phys-liu2009-h2-context",
      [
        "liu2009-h2"
      ]
    ]
  ],
  "observations": [
    [
      "liu-h2-transition",
      "C-phys-liu-h2-transition",
      [
        "liu2009-h2"
      ]
    ],
    [
      "liu-h2-ionization",
      "C-phys-liu-h2-ionization",
      [
        "liu2009-h2"
      ]
    ],
    [
      "liu-h2-dissociation",
      "C-phys-liu-h2-dissociation",
      [
        "liu2009-h2"
      ]
    ],
    [
      "molecular-source-scope",
      "C-phys-molecular-source-scope",
      [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    ]
  ],
  "dependencies": [
    [
      "liu2009-h2-context-liu-h2-transition",
      "liu2009-h2-context",
      "liu-h2-transition",
      "M-phys-liu2009-h2-context",
      "measurement-context"
    ],
    [
      "liu2009-h2-context-liu-h2-ionization",
      "liu2009-h2-context",
      "liu-h2-ionization",
      "M-phys-liu-h2-ionization",
      "interpretation-dependency"
    ],
    [
      "liu-h2-transition-liu-h2-ionization",
      "liu-h2-transition",
      "liu-h2-ionization",
      "M-phys-liu-h2-ionization",
      "interpretation-dependency"
    ],
    [
      "molecular-binding-channel-boundary-liu-h2-ionization",
      "molecular-binding-channel-boundary",
      "liu-h2-ionization",
      "M-phys-liu-h2-ionization",
      "interpretation-dependency"
    ],
    [
      "liu-h2-ionization-liu-h2-dissociation",
      "liu-h2-ionization",
      "liu-h2-dissociation",
      "M-phys-liu-h2-dissociation",
      "interpretation-dependency"
    ],
    [
      "molecular-binding-channel-boundary-liu-h2-dissociation",
      "molecular-binding-channel-boundary",
      "liu-h2-dissociation",
      "M-phys-liu-h2-dissociation",
      "interpretation-dependency"
    ],
    [
      "two-center-molecular-ion-model-molecular-source-scope",
      "two-center-molecular-ion-model",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "molecular-binding-channel-boundary-molecular-source-scope",
      "molecular-binding-channel-boundary",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "liu-h2-dissociation-molecular-source-scope",
      "liu-h2-dissociation",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "korobov-h2-energy-molecular-source-scope",
      "korobov-h2-energy",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "korobov-hd-energy-molecular-source-scope",
      "korobov-hd-energy",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "rau-hd-mass-molecular-source-scope",
      "rau-hd-mass",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ],
    [
      "rau-hd-closure-molecular-source-scope",
      "rau-hd-closure",
      "molecular-source-scope",
      "M-phys-molecular-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "liu2009-h2"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-liu2009-h2-context",
      [
        "liu2009-h2"
      ]
    ],
    [
      "C-phys-liu-h2-transition",
      [
        "liu2009-h2"
      ]
    ],
    [
      "M-phys-liu-h2-ionization",
      [
        "liu2009-h2"
      ]
    ],
    [
      "C-phys-liu-h2-ionization",
      [
        "liu2009-h2"
      ]
    ],
    [
      "M-phys-liu-h2-dissociation",
      [
        "liu2009-h2"
      ]
    ],
    [
      "C-phys-liu-h2-dissociation",
      [
        "liu2009-h2"
      ]
    ],
    [
      "M-phys-molecular-source-scope",
      [
        "heisse2019",
        "korobov2017",
        "liu2009-h2",
        "rau2020"
      ]
    ],
    [
      "C-phys-molecular-source-scope",
      [
        "heisse2019",
        "korobov2017",
        "liu2009-h2",
        "rau2020"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-two-center-molecular-ion-model",
      "kind": "review-finding",
      "statement": "In the reviewed atomic-unit model, supply two nuclei with Z1=Z2=1 and one electron. The clamped-nuclei electronic Hamiltonian is H_el=p^2/(2*m)-1/r1-1/r2+1/R; its electronic energy E_el(R) enters the relative nuclear equation [-nabla_R^2/(2*mu_n)+E_el(R)]*chi=E0*chi. The electronic wavefunction and nuclear wavefunction are factorized for this adiabatic treatment. H2+ and HD+ differ in supplied nuclear masses. The two-center coordinate and coupled electronic/nuclear states specify a finite molecular-ion problem.",
      "scope": "Formal model in Korobov author page 1, Equations 1-3; two-center electronic and nuclear degrees, with a supplied Coulomb interaction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Atomic units are used here; this is not a verbatim rationalized-unit continuation of the one-center hydrogen formula. The supplied 1/R repulsion and the nuclear equation matter for molecular binding.",
        "The source uses the adiabatic/Born-Oppenheimer treatment for corrections of order m*alpha^6 and higher. Its full precision energies include accurate lower-order three-body terms and further corrections; this displayed leading model does not reproduce that calculation.",
        "Neutral H2 has two electrons and is not described by this one-electron Hamiltonian. No measured equilibrium distance, angular geometry, electron-density map, bond-order taxonomy or formation rate follows from writing the model.",
        "Two nuclear centers and one electron are a chosen finite composition, not a measured critical number of pre-existing neutral atoms or a universal molecular carrier threshold."
      ]
    },
    {
      "id": "D-phys-molecular-binding-channel-boundary",
      "kind": "review-finding",
      "statement": "A molecular binding statement must name the charge, isotope, internal state and separated-fragment channel. D0(H2) is the energy from its ground rovibrational level to two ground-state neutral hydrogen atoms; it differs from an electronic potential well depth and from total ionization to free nuclei and electrons. A measured transition between states of supplied H2 constrains an energy difference. It does not specify an association history, product yield, collision or radiation conditions, energy-disposal channel or molecular formation rate.",
      "scope": "State and threshold boundary for the neutral H2 energy cycle and existing hydrogen molecular-ion mass/ionization records.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Liu convention uses para-H2 X 1Sigma_g+ (v=0,N=0) and hyperfineless atomic/ionic inputs; its newly measured EF-to-Rydberg line is instead in ortho-H2 with N=1. These endpoints cannot be silently interchanged.",
        "Positive D0 establishes binding relative to the named channel. It does not establish a compact hard spatial boundary, infinite lifetime, thermal survival in all environments or a bond-formation kinetic mechanism.",
        "The existing HD+/H2+ total ionization corrections are not neutral-molecule dissociation energies. A state-labelled energy cycle is required to convert between different fragment channels."
      ]
    },
    {
      "id": "M-phys-liu2009-h2-context",
      "kind": "method",
      "statement": "Use the supplied supersonic H2 beam and two-step excitation: near-202 nm two-photon preparation from X 1Sigma_g+ (v=0,N=1) to EF 1Sigma_g+ (v=0,N=1), then near-397 nm excitation to the selected 54p1_1(0) Rydberg level. Delayed pulsed-field ionization yields detected H2+ signal versus frequency. Iodine references and a Fabry-Perot etalon calibrate the fundamental frequency; Gaussian fits and sixteen counterpropagating-beam pairs on four days determine line centers while cancelling the first-order Doppler offset. Amplifier, frequency-doubling, Stark and pressure contributions enter the source error budget.",
      "scope": "Liu 2009 prepared ortho-H2 experiment, published Sections II and III.A.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This acquisition begins with molecular hydrogen. Optical excitation and field ionization do not observe two hydrogen atoms forming a bond.",
        "Only the selected low-power 54p1_1(0) line is used. Four extra high-power lines remain unassigned, and the selected Rydberg hyperfine components are unresolved.",
        "The source calibrates a fundamental frequency and frequency-doubles it for the transition. No raw scan refit, calibration-step arithmetic replay, full covariance or independently repeated acquisition is supplied here."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "C-phys-liu-h2-transition",
      "kind": "review-finding",
      "statement": "The source reports the ortho-H2 EF 1Sigma_g+ (v=0,N=1) to 54p1_1(0) interval as 25209.99756 +/- 0.00022 statistical +/- 0.00007 systematic cm^-1. The authors add these two final contributions linearly and quote 25209.99756(29) cm^-1. This calibrated state-labelled transition is the new measured interval; it is not by itself the ground-state ionization or dissociation energy.",
      "scope": "Historical source-reported optical interval in prepared molecular hydrogen; spectroscopic cm^-1 means energy divided by h*c.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table I uses quadrature within its uncertainty categories, while the final statistical/systematic contributions are added. Do not silently replace (29) by a quadrature combination.",
        "Parentheses denote the source last-digit uncertainty convention; conservative systematic-shift estimates and unresolved structure remain. A complete Gaussian likelihood or raw-data covariance is not supplied.",
        "The molecule is supplied before spectroscopy. No observed molecular assembly, equilibrium bond length or electron-density distribution is inferred."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "M-phys-liu-h2-ionization",
      "kind": "method",
      "statement": "Assemble the state-specific ionization threshold from the measured EF-to-Rydberg interval and the reviewed Table II input intervals: neutral X-to-EF excitation, the connection to the ionic limit, hyperfine-center offsets and neutral/ionic rotational intervals. The source adds interval uncertainties in quadrature, using the already reported (29) uncertainty for the new optical interval. Distinguish the ortho N=1 to ionic N+=1-center threshold from the para ground-rovibrational threshold.",
      "scope": "Published interval assembly in Liu Section III.B; no new independent experiment or least-squares adjustment.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The prior interval publications are inputs reported by the reviewed Liu study; they have not been separately refitted or admitted as newly reviewed studies.",
        "Rydberg hyperfine components are unresolved. The source uses their mean and assumes the EF hyperfine splitting is negligible at its precision; no new covariance reconstruction is claimed."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "C-phys-liu-h2-ionization",
      "kind": "review-finding",
      "statement": "The published interval assembly gives Ei(ortho-H2)=124357.23797(36) cm^-1 to the hyperfine center of the v+=0,N+=1 ionic level. Including the neutral N=1-to-0 interval 118.48684(10) cm^-1 and ionic N+=1-to-0 interval 58.2336751(1) cm^-1 gives Ei(para-H2)=124417.49113(37) cm^-1 for the ground-rovibrational neutral-to-ion threshold. The latter is an assembled threshold using the new optical measurement and the stated prior inputs.",
      "scope": "Two distinct historical ionization endpoints under the Table II state and hyperfine conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The ortho and para thresholds are different quantities; the N=1 optical interval is not a direct measurement of the N=0 ionization edge.",
        "Quoted uncertainties are the source assembled interval uncertainties, including the new interval and external connections. No new raw-data analysis, independent replication or current best value is asserted."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "M-phys-liu-h2-dissociation",
      "kind": "method",
      "statement": "Use the energy cycle D0(H2)=Ei(H2)+D0(H2+)-Ei(H)=Ei(H2)+Ei(H2+)-2*Ei(H). Retain the source historical calculated inputs Ei(H)=109678.7717426(10) cm^-1 and Ei(H2+)=131058.121975(49) cm^-1, equivalently D0(H2+)=21379.350232(49) cm^-1. These use the reported CODATA 2006 constants and hyperfineless ground-state conventions. The final neutral dissociation result therefore combines the spectroscopic ionization assembly with atomic and molecular-ion theory.",
      "scope": "Published hybrid H2 energy cycle in Liu Section III.C, Equations 9-14.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The H2+ theoretical error is limited by neglected higher orders. The final neutral D0 uncertainty is dominated by the assembled experimental Ei(H2), rather than by a fully supplied new covariance calculation.",
        "Both forms of the energy cycle reuse the same atomic input and are not independent estimates. Do not substitute the existing 2017 Korobov H2+ value into this historical result without declaring a separate recalculation.",
        "Theoretical inputs follow the source then-available Korobov calculations, not a new primary admission of all the papers in its reference list."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "C-phys-liu-h2-dissociation",
      "kind": "review-finding",
      "statement": "The source reports D0(H2)=36118.06962(37) cm^-1 for para-H2 X 1Sigma_g+ (v=0,N=0) relative to the separated H(1s)+H(1s) channel under its hyperfine conventions. The positive energy supplies a finite neutral-molecule binding result. It is a hybrid experimental/theoretical determination obtained through the ionization energy cycle; it is neither a directly scanned dissociation onset nor a measured energy release from a bond-forming event.",
      "scope": "Historical ground-rovibrational dissociation energy and its source error, not a universal chemical-bond strength.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-6 to 174306-7, Section IV, Table III and Figure 6: historical comparisons and experimental versus hybrid result distinction",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "D0 starts at v=0 and includes zero-point energy; it is not the electronic well depth De. The printed cm^-1 values are spectroscopic energy units.",
        "The quoted 0.00037 cm^-1 uncertainty is dominated by the assembled Ei(H2). The same optical interval and prior inputs underlie the ionization and dissociation outputs, so they cannot be counted as independent confirmations.",
        "Figure 5 is a potential-curve/threshold illustration. No new numerical geometry, bond density, molecular production rate or later-chemistry prediction is extracted."
      ],
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "M-phys-molecular-source-scope",
      "kind": "method",
      "statement": "Compare the distinct two-center model, prepared-H2 interval/threshold/energy-cycle chain and already admitted HD+ mass/ionization records while retaining their separate species, quantities, states and shared inputs. This is a scoped literature synthesis, not a joint likelihood, neutral-H2 electronic solution, independent replication count or local numerical replay.",
      "scope": "Interpretation boundary for the finite reconstruction of original card 2.3.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "method",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue card 2.3 is provenance for the scope being reconstructed, not independent scientific evidence."
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "role": "method",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
          "role": "method",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The one-electron H2+/HD+ model and the two-electron neutral-H2 spectroscopic study are distinct systems. Their comparison does not solve neutral-H2 binding from the displayed one-electron Hamiltonian.",
        "The existing Rau mass closure shares the AWG1/AWG2 deuteron acquisitions, the supplied proton/electron mass references and calculated binding corrections with its modelling program. The two generators are retained separately, not pooled into independent molecular-formation confirmations. The closure is not independent evidence for every theoretical input or a measurement of molecular assembly.",
        "Original claims about all bond types, electron sharing/transfer/delocalization classes, polarity, bond architecture, crystallographic geometry, reactivity and biochemical/material substrates exceed these selected passages. They remain open scientific obligations rather than admitted generic conclusions.",
        "Original parent 2.2 can supply atomic constituents and a previous effective Coulomb description, but its selected static hydrogen, Lamb spectrum or cosmological formation model is not a unique molecular formation history. Parent weight 1, necessary, direction 0, modes [0,1], dependency 10 and role arising have no matched quantitative estimator here.",
        "Original CarrierGroup 1, CarrierType 0, N_min=N_crit=2 and N_sat=null are catalogue choices. Two nuclear centers are a chosen composition, not a measured critical count of previously formed neutral atoms or a saturation law.",
        "Original Level 2, Phase 1, TypeRole 1, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display provenance. The generic MO/VB, crystallography and reproducible-synthesis placeholders identify no independently reviewed experiment.",
        "No molecular association kinetics, formation yield, lifetime in all environments, compact boundary, universal molecule definition or all-scale substrate claim is admitted. Positive formation-kinetics evidence would require identified initial/product populations and explicit competing channels."
      ],
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "C-phys-molecular-source-scope",
      "kind": "review-finding",
      "statement": "The selected sources support finite molecular binding and discrete internal-state energy structure: a two-center electronic/nuclear model for one-electron molecular ions, a calibrated state-labelled optical interval in prepared H2, an assembled neutral ionization threshold and a hybrid dissociation energy relative to two hydrogen atoms. Existing H2+/HD+ theoretical ionization and HD+ mass records provide complementary state-conditional molecular-ion results. Isotope, charge, internal state and breakup channel identify each finite case; none of these prepared-molecule spectra or mass balances measures a universal molecular formation route.",
      "scope": "Finite molecular binding/state evidence from identified primary studies, with formation kinetics and general chemical taxonomy left open.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Reviewed primary passage supports this finite statement; no new numerical or experimental replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original catalogue card 2.3 is provenance for the scope being reconstructed, not independent scientific evidence."
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "role": "supports",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections",
          "role": "supports",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The one-electron H2+/HD+ model and the two-electron neutral-H2 spectroscopic study are distinct systems. Their comparison does not solve neutral-H2 binding from the displayed one-electron Hamiltonian.",
        "The existing Rau mass closure shares the AWG1/AWG2 deuteron acquisitions, the supplied proton/electron mass references and calculated binding corrections with its modelling program. The two generators are retained separately, not pooled into independent molecular-formation confirmations. The closure is not independent evidence for every theoretical input or a measurement of molecular assembly.",
        "Original claims about all bond types, electron sharing/transfer/delocalization classes, polarity, bond architecture, crystallographic geometry, reactivity and biochemical/material substrates exceed these selected passages. They remain open scientific obligations rather than admitted generic conclusions.",
        "Original parent 2.2 can supply atomic constituents and a previous effective Coulomb description, but its selected static hydrogen, Lamb spectrum or cosmological formation model is not a unique molecular formation history. Parent weight 1, necessary, direction 0, modes [0,1], dependency 10 and role arising have no matched quantitative estimator here.",
        "Original CarrierGroup 1, CarrierType 0, N_min=N_crit=2 and N_sat=null are catalogue choices. Two nuclear centers are a chosen composition, not a measured critical count of previously formed neutral atoms or a saturation law.",
        "Original Level 2, Phase 1, TypeRole 1, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display provenance. The generic MO/VB, crystallography and reproducible-synthesis placeholders identify no independently reviewed experiment.",
        "No molecular association kinetics, formation yield, lifetime in all environments, compact boundary, universal molecule definition or all-scale substrate claim is admitted. Positive formation-kinetics evidence would require identified initial/product populations and explicit competing channels."
      ],
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:two-center-molecular-ion-model",
      "name": "Specified two-center one-electron molecular model",
      "kind": "definition",
      "description": "In the reviewed atomic-unit model, supply two nuclei with Z1=Z2=1 and one electron. The clamped-nuclei electronic Hamiltonian is H_el=p^2/(2*m)-1/r1-1/r2+1/R; its electronic energy E_el(R) enters the relative nuclear equation [-nabla_R^2/(2*mu_n)+E_el(R)]*chi=E0*chi. The electronic wavefunction and nuclear wavefunction are factorized for this adiabatic treatment. H2+ and HD+ differ in supplied nuclear masses. The two-center coordinate and coupled electronic/nuclear states specify a finite molecular-ion problem.",
      "claimIds": [
        "D-phys-two-center-molecular-ion-model"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        }
      ],
      "openObligations": [
        "Atomic units are used here; this is not a verbatim rationalized-unit continuation of the one-center hydrogen formula. The supplied 1/R repulsion and the nuclear equation matter for molecular binding.",
        "The source uses the adiabatic/Born-Oppenheimer treatment for corrections of order m*alpha^6 and higher. Its full precision energies include accurate lower-order three-body terms and further corrections; this displayed leading model does not reproduce that calculation.",
        "Neutral H2 has two electrons and is not described by this one-electron Hamiltonian. No measured equilibrium distance, angular geometry, electron-density map, bond-order taxonomy or formation rate follows from writing the model.",
        "Two nuclear centers and one electron are a chosen finite composition, not a measured critical number of pre-existing neutral atoms or a universal molecular carrier threshold."
      ]
    },
    {
      "id": "phys:molecular-binding-channel-boundary",
      "name": "Molecular state, dissociation channel and formation distinction",
      "kind": "definition",
      "description": "A molecular binding statement must name the charge, isotope, internal state and separated-fragment channel. D0(H2) is the energy from its ground rovibrational level to two ground-state neutral hydrogen atoms; it differs from an electronic potential well depth and from total ionization to free nuclei and electrons. A measured transition between states of supplied H2 constrains an energy difference. It does not specify an association history, product yield, collision or radiation conditions, energy-disposal channel or molecular formation rate.",
      "claimIds": [
        "D-phys-molecular-binding-channel-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds"
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
        }
      ],
      "openObligations": [
        "The Liu convention uses para-H2 X 1Sigma_g+ (v=0,N=0) and hyperfineless atomic/ionic inputs; its newly measured EF-to-Rydberg line is instead in ortho-H2 with N=1. These endpoints cannot be silently interchanged.",
        "Positive D0 establishes binding relative to the named channel. It does not establish a compact hard spatial boundary, infinite lifetime, thermal survival in all environments or a bond-formation kinetic mechanism.",
        "The existing HD+/H2+ total ionization corrections are not neutral-molecule dissociation energies. A state-labelled energy cycle is required to convert between different fragment channels."
      ]
    },
    {
      "id": "phys:liu2009-h2-context",
      "name": "Prepared H2 optical-transition acquisition context",
      "kind": "context",
      "description": "Use the supplied supersonic H2 beam and two-step excitation: near-202 nm two-photon preparation from X 1Sigma_g+ (v=0,N=1) to EF 1Sigma_g+ (v=0,N=1), then near-397 nm excitation to the selected 54p1_1(0) Rydberg level. Delayed pulsed-field ionization yields detected H2+ signal versus frequency. Iodine references and a Fabry-Perot etalon calibrate the fundamental frequency; Gaussian fits and sixteen counterpropagating-beam pairs on four days determine line centers while cancelling the first-order Doppler offset. Amplifier, frequency-doubling, Stark and pressure contributions enter the source error budget.",
      "claimIds": [
        "M-phys-liu2009-h2-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        }
      ],
      "openObligations": [
        "This acquisition begins with molecular hydrogen. Optical excitation and field ionization do not observe two hydrogen atoms forming a bond.",
        "Only the selected low-power 54p1_1(0) line is used. Four extra high-power lines remain unassigned, and the selected Rydberg hyperfine components are unresolved.",
        "The source calibrates a fundamental frequency and frequency-doubles it for the transition. No raw scan refit, calibration-step arithmetic replay, full covariance or independently repeated acquisition is supplied here."
      ]
    },
    {
      "id": "phys:liu-h2-transition",
      "name": "Measured prepared-H2 EF-to-Rydberg interval",
      "kind": "scoped-process",
      "description": "The source reports the ortho-H2 EF 1Sigma_g+ (v=0,N=1) to 54p1_1(0) interval as 25209.99756 +/- 0.00022 statistical +/- 0.00007 systematic cm^-1. The authors add these two final contributions linearly and quote 25209.99756(29) cm^-1. This calibrated state-labelled transition is the new measured interval; it is not by itself the ground-state ionization or dissociation energy.",
      "claimIds": [
        "C-phys-liu-h2-transition"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        }
      ],
      "openObligations": [
        "Table I uses quadrature within its uncertainty categories, while the final statistical/systematic contributions are added. Do not silently replace (29) by a quadrature combination.",
        "Parentheses denote the source last-digit uncertainty convention; conservative systematic-shift estimates and unresolved structure remain. A complete Gaussian likelihood or raw-data covariance is not supplied.",
        "The molecule is supplied before spectroscopy. No observed molecular assembly, equilibrium bond length or electron-density distribution is inferred."
      ]
    },
    {
      "id": "phys:liu-h2-ionization",
      "name": "Assembled state-specific H2 ionization thresholds",
      "kind": "scoped-process",
      "description": "The published interval assembly gives Ei(ortho-H2)=124357.23797(36) cm^-1 to the hyperfine center of the v+=0,N+=1 ionic level. Including the neutral N=1-to-0 interval 118.48684(10) cm^-1 and ionic N+=1-to-0 interval 58.2336751(1) cm^-1 gives Ei(para-H2)=124417.49113(37) cm^-1 for the ground-rovibrational neutral-to-ion threshold. The latter is an assembled threshold using the new optical measurement and the stated prior inputs.",
      "claimIds": [
        "C-phys-liu-h2-ionization"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds"
        }
      ],
      "openObligations": [
        "The ortho and para thresholds are different quantities; the N=1 optical interval is not a direct measurement of the N=0 ionization edge.",
        "Quoted uncertainties are the source assembled interval uncertainties, including the new interval and external connections. No new raw-data analysis, independent replication or current best value is asserted."
      ]
    },
    {
      "id": "phys:liu-h2-dissociation",
      "name": "Hybrid ground-state H2 dissociation energy",
      "kind": "scoped-process",
      "description": "The source reports D0(H2)=36118.06962(37) cm^-1 for para-H2 X 1Sigma_g+ (v=0,N=0) relative to the separated H(1s)+H(1s) channel under its hyperfine conventions. The positive energy supplies a finite neutral-molecule binding result. It is a hybrid experimental/theoretical determination obtained through the ionization energy cycle; it is neither a directly scanned dissociation onset nor a measured energy release from a bond-forming event.",
      "claimIds": [
        "C-phys-liu-h2-dissociation"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy"
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-6 to 174306-7, Section IV, Table III and Figure 6: historical comparisons and experimental versus hybrid result distinction"
        }
      ],
      "openObligations": [
        "D0 starts at v=0 and includes zero-point energy; it is not the electronic well depth De. The printed cm^-1 values are spectroscopic energy units.",
        "The quoted 0.00037 cm^-1 uncertainty is dominated by the assembled Ei(H2). The same optical interval and prior inputs underlie the ionization and dissociation outputs, so they cannot be counted as independent confirmations.",
        "Figure 5 is a potential-curve/threshold illustration. No new numerical geometry, bond density, molecular production rate or later-chemistry prediction is extracted."
      ]
    },
    {
      "id": "phys:molecular-source-scope",
      "name": "Scoped molecular binding and spectroscopy evidence",
      "kind": "scoped-process",
      "description": "The selected sources support finite molecular binding and discrete internal-state energy structure: a two-center electronic/nuclear model for one-electron molecular ions, a calibrated state-labelled optical interval in prepared H2, an assembled neutral ionization threshold and a hybrid dissociation energy relative to two hydrogen atoms. Existing H2+/HD+ theoretical ionization and HD+ mass records provide complementary state-conditional molecular-ion results. Isotope, charge, internal state and breakup channel identify each finite case; none of these prepared-molecule spectra or mass balances measures a universal molecular formation route.",
      "claimIds": [
        "C-phys-molecular-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval"
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds"
        },
        {
          "sourceId": "liu2009-h2",
          "locator": "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript page 4, Table V: H2+ total ionization energy, theoretical uncertainty and excluded constant uncertainties"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
        }
      ],
      "openObligations": [
        "The one-electron H2+/HD+ model and the two-electron neutral-H2 spectroscopic study are distinct systems. Their comparison does not solve neutral-H2 binding from the displayed one-electron Hamiltonian.",
        "The existing Rau mass closure shares the AWG1/AWG2 deuteron acquisitions, the supplied proton/electron mass references and calculated binding corrections with its modelling program. The two generators are retained separately, not pooled into independent molecular-formation confirmations. The closure is not independent evidence for every theoretical input or a measurement of molecular assembly.",
        "Original claims about all bond types, electron sharing/transfer/delocalization classes, polarity, bond architecture, crystallographic geometry, reactivity and biochemical/material substrates exceed these selected passages. They remain open scientific obligations rather than admitted generic conclusions.",
        "Original parent 2.2 can supply atomic constituents and a previous effective Coulomb description, but its selected static hydrogen, Lamb spectrum or cosmological formation model is not a unique molecular formation history. Parent weight 1, necessary, direction 0, modes [0,1], dependency 10 and role arising have no matched quantitative estimator here.",
        "Original CarrierGroup 1, CarrierType 0, N_min=N_crit=2 and N_sat=null are catalogue choices. Two nuclear centers are a chosen composition, not a measured critical count of previously formed neutral atoms or a saturation law.",
        "Original Level 2, Phase 1, TypeRole 1, Science [0,1,2], established, MustCover [10], ShouldCover [9] and Optional [] remain catalogue/display provenance. The generic MO/VB, crystallography and reproducible-synthesis placeholders identify no independently reviewed experiment.",
        "No molecular association kinetics, formation yield, lifetime in all environments, compact boundary, universal molecule definition or all-scale substrate claim is admitted. Positive formation-kinetics evidence would require identified initial/product populations and explicit competing channels."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:coulomb-effective-potential-two-center-molecular-ion-model",
      "source": "phys:coulomb-effective-potential",
      "target": "phys:two-center-molecular-ion-model",
      "kind": "descriptive",
      "claimIds": [
        "D-phys-two-center-molecular-ion-model"
      ],
      "role": "definition-dependency",
      "assertion": "Supply the Coulomb interaction while explicitly changing to the primary atomic-unit two-center model; this is not a solved derivation of a molecule from the one-center atomic spectrum."
    },
    {
      "id": "physics:liu2009-h2-context-liu-h2-transition",
      "source": "phys:liu2009-h2-context",
      "target": "phys:liu-h2-transition",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu2009-h2-context"
      ],
      "role": "measurement-context",
      "assertion": "The supplied beam, optical preparation, delayed field-ionization readout and calibrated frequency determine the reported state-labelled transition interval.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:liu2009-h2-context-liu-h2-ionization",
      "source": "phys:liu2009-h2-context",
      "target": "phys:liu-h2-ionization",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu-h2-ionization"
      ],
      "role": "interpretation-dependency",
      "assertion": "The prepared-molecule interval is one measured input to an ionization-threshold assembly that also requires the stated prior intervals and hyperfine conventions.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:liu-h2-transition-liu-h2-ionization",
      "source": "phys:liu-h2-transition",
      "target": "phys:liu-h2-ionization",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu-h2-ionization"
      ],
      "role": "interpretation-dependency",
      "assertion": "Combine the new EF-to-Rydberg interval with the source Table II inputs; this does not independently measure the ground-state ionization edge.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:molecular-binding-channel-boundary-liu-h2-ionization",
      "source": "phys:molecular-binding-channel-boundary",
      "target": "phys:liu-h2-ionization",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu-h2-ionization"
      ],
      "role": "interpretation-dependency",
      "assertion": "Keep ortho and para rotational endpoints and the hyperfine-center convention distinct when interpreting the assembled ionization thresholds.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:liu-h2-ionization-liu-h2-dissociation",
      "source": "phys:liu-h2-ionization",
      "target": "phys:liu-h2-dissociation",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu-h2-dissociation"
      ],
      "role": "interpretation-dependency",
      "assertion": "Use the assembled para-H2 threshold in the historical energy cycle with supplied atomic and molecular-ion theory; the resulting D0 is a dependent hybrid inference.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:molecular-binding-channel-boundary-liu-h2-dissociation",
      "source": "phys:molecular-binding-channel-boundary",
      "target": "phys:liu-h2-dissociation",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-liu-h2-dissociation"
      ],
      "role": "interpretation-dependency",
      "assertion": "D0 refers to the ground rovibrational level and named neutral-atom fragments; it is not the electronic well depth or a bond-formation rate.",
      "contextIds": [
        "liu2009-h2"
      ]
    },
    {
      "id": "physics:two-center-molecular-ion-model-molecular-source-scope",
      "source": "phys:two-center-molecular-ion-model",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The one-electron two-center definition delimits molecular-ion interpretation without solving the distinct neutral two-electron H2 system.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:molecular-binding-channel-boundary-molecular-source-scope",
      "source": "phys:molecular-binding-channel-boundary",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "Charge, isotope, internal state and fragment channel delimit the binding comparison; none specifies a universal association history.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:liu-h2-dissociation-molecular-source-scope",
      "source": "phys:liu-h2-dissociation",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The hybrid neutral-H2 binding result retains its measured interval, historical theory inputs and shared-source limits.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:korobov-h2-energy-molecular-source-scope",
      "source": "phys:korobov-h2-energy",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "Reuse the existing theoretical H2+ total ionization result under its original state, approximation and omitted-constant-uncertainty limits; do not substitute it into the historical Liu energy cycle.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:korobov-hd-energy-molecular-source-scope",
      "source": "phys:korobov-hd-energy",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "Reuse the existing HD+ total ionization calculation as a different isotope-specific theoretical result, not a neutral-H2 dissociation measurement.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:rau-hd-mass-molecular-source-scope",
      "source": "phys:rau-hd-mass",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The stored-HD+ mass retains its assigned charge, preparation and inferred internal-state limits; the acquisition starts with molecular ions.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    },
    {
      "id": "physics:rau-hd-closure-molecular-source-scope",
      "source": "phys:rau-hd-closure",
      "target": "phys:molecular-source-scope",
      "kind": "descriptive",
      "claimIds": [
        "M-phys-molecular-source-scope"
      ],
      "role": "interpretation-dependency",
      "assertion": "The dependent molecular mass closure retains the deuteron AWG1/AWG2 acquisitions, constituent mass references and theoretical binding correction; it is not an independent formation observation.",
      "contextIds": [
        "liu2009-h2",
        "korobov2017-h2",
        "korobov2017-hd",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:two-center-molecular-ion-model",
      "role": "definition",
      "denotes": "Specified two-center one-electron molecular model under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-two-center-molecular-ion-model"
      ]
    },
    {
      "nodeId": "phys:molecular-binding-channel-boundary",
      "role": "definition",
      "denotes": "Molecular state, dissociation channel and formation distinction under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-molecular-binding-channel-boundary"
      ]
    },
    {
      "nodeId": "phys:liu2009-h2-context",
      "role": "experimental-context",
      "denotes": "Prepared H2 optical-transition acquisition context under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-liu2009-h2-context"
      ]
    },
    {
      "nodeId": "phys:liu-h2-transition",
      "role": "scoped-phenomenon",
      "denotes": "Measured prepared-H2 EF-to-Rydberg interval under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-liu-h2-transition"
      ]
    },
    {
      "nodeId": "phys:liu-h2-ionization",
      "role": "scoped-phenomenon",
      "denotes": "Assembled state-specific H2 ionization thresholds under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-liu-h2-ionization"
      ]
    },
    {
      "nodeId": "phys:liu-h2-dissociation",
      "role": "scoped-phenomenon",
      "denotes": "Hybrid ground-state H2 dissociation energy under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-liu-h2-dissociation"
      ]
    },
    {
      "nodeId": "phys:molecular-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped molecular binding and spectroscopy evidence under the specified source, state and channel conventions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-molecular-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "liu2009-h2",
      "sourceId": "liu2009-h2",
      "studyType": "primary-experiment",
      "doi": "10.1063/1.3120443",
      "journal": "The Journal of Chemical Physics",
      "volume": "130",
      "issue": "17",
      "pages": "174306",
      "system": "Prepared ortho-H2 optical interval with conditional para-H2 threshold and hybrid dissociation-energy assembly",
      "preparation": "Use the supplied supersonic H2 beam and two-step excitation: near-202 nm two-photon preparation from X 1Sigma_g+ (v=0,N=1) to EF 1Sigma_g+ (v=0,N=1), then near-397 nm excitation to the selected 54p1_1(0) Rydberg level. Delayed pulsed-field ionization yields detected H2+ signal versus frequency. Iodine references and a Fabry-Perot etalon calibrate the fundamental frequency; Gaussian fits and sixteen counterpropagating-beam pairs on four days determine line centers while cancelling the first-order Doppler offset. Amplifier, frequency-doubling, Stark and pressure contributions enter the source error budget.",
      "observable": "Field-ionized H2+ signal versus calibrated laser frequency; fitted EF-to-Rydberg optical interval",
      "finding": "The reported new interval is 25209.99756(29) cm^-1. With stated prior intervals it gives Ei(para-H2)=124417.49113(37) cm^-1, and with calculated atomic/molecular-ion inputs D0(H2)=36118.06962(37) cm^-1. These are related outputs of one published analysis, not three independent acquisitions.",
      "limitations": [
        "This acquisition begins with molecular hydrogen. Optical excitation and field ionization do not observe two hydrogen atoms forming a bond.",
        "Only the selected low-power 54p1_1(0) line is used. Four extra high-power lines remain unassigned, and the selected Rydberg hyperfine components are unresolved.",
        "The source calibrates a fundamental frequency and frequency-doubles it for the transition. No raw scan refit, calibration-step arithmetic replay, full covariance or independently repeated acquisition is supplied here.",
        "D0 is hybrid and uses historical CODATA 2006 inputs. Formation kinetics, geometry determination and all-bond generalizations are outside this study.",
        "The quoted interval error adds statistical and systematic contributions linearly; the later threshold interval assembly uses quadrature. No local reanalysis is performed."
      ],
      "readExtent": "full-published-scientific-main-text",
      "reviewedLocators": [
        "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
        "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
        "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
        "Published pages 174306-6 to 174306-7, Section IV, Table III and Figure 6: historical comparisons and experimental versus hybrid result distinction"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1063/1.3120443",
      "correctionCheck": "Published title block, DOI, author order, journal, volume, article number and online date compared with DOI Crossref registration. The registration has no update-to item and an empty relation object. This limited check is not an exhaustive search for later revisions or newer determinations."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "heisse2019",
      "kind": "research-publication",
      "title": "High-precision mass spectrometer for light ions",
      "authors": [
        "F. Heiße",
        "S. Rau",
        "F. Köhler-Langes",
        "W. Quint",
        "G. Werth",
        "S. Sturm",
        "K. Blaum"
      ],
      "year": 2019,
      "doi": "10.1103/PhysRevA.100.022518",
      "url": "https://doi.org/10.1103/PhysRevA.100.022518",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 022518-2-3, Table II and Equations 2-8: carbon nuclear reference, electronic energies, charge factors and cyclotron-frequency ratio",
          "Pages 022518-3-11, Sections II-III, Tables VI-VII and Figure 7: trap geometry, separate resonators, motion, field calibration and revised ion temperatures",
          "Pages 022518-11-12, Section IV, Figures 8-9 and Equations 18-20: alternating acquisition, planar extrapolation, shared data and corrected measurement program",
          "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "Pages 022518-16-21, Appendices A-F, Table IX and references: simulation-dependent radius calibration, detector line shape and shim coils not used in the campaign"
        ],
        "limit": "All 21 pages of the publisher article were read, including appendices and references; pages 2, 3, 10, 12, 13, 14, 16, 18 and 19 were visually inspected. The proton and oxygen results reanalyze the 2017 data. Printed uncertainty, sign, dimensional and correction-aggregation issues are retained explicitly. No original acquisition, fit, covariance or thermal-correction replay is claimed."
      }
    },
    {
      "id": "rau2020",
      "kind": "research-publication",
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
      "year": 2020,
      "doi": "10.1038/s41586-020-2628-7",
      "url": "https://arxiv.org/pdf/2203.05971v1",
      "path": null,
      "sha256": null,
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
      "kind": "research-publication",
      "title": "Fundamental Transitions and Ionization Energies of the Hydrogen Molecular Ions with Few ppt Uncertainty",
      "authors": [
        "V. I. Korobov",
        "L. Hilico",
        "J.-Ph. Karr"
      ],
      "year": 2017,
      "doi": "10.1103/PhysRevLett.118.233001",
      "url": "https://arxiv.org/pdf/1703.07972v2",
      "path": null,
      "sha256": null,
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
      "id": "liu2009-h2",
      "kind": "research-publication",
      "title": "Determination of the ionization and dissociation energies of the hydrogen molecule",
      "authors": [
        "Jinjun Liu",
        "Edcel J. Salumbides",
        "Urs Hollenstein",
        "Jeroen C. J. Koelemeij",
        "Kjeld S. E. Eikema",
        "Wim Ubachs",
        "Frédéric Merkt"
      ],
      "year": 2009,
      "doi": "10.1063/1.3120443",
      "url": "https://research.vu.nl/ws/files/2485538/JCP-IonPot.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text",
        "locators": [
          "Published pages 174306-1 to 174306-4, Sections II and III.A, Figures 1-4 and Table I: supplied molecular beam, two-step excitation, ion readout, calibration and measured interval",
          "Published pages 174306-4 to 174306-5, Section III.B, Figure 1 and Table II: interval assembly, unresolved hyperfine convention and ortho/para ionization thresholds",
          "Published pages 174306-5 to 174306-6, Section III.C, Figure 5 and Equations 9-14: CODATA 2006 atomic/molecular-ion inputs, fragment channels and hybrid H2 dissociation energy",
          "Published pages 174306-6 to 174306-7, Section IV, Table III and Figure 6: historical comparisons and experimental versus hybrid result distinction"
        ],
        "limit": "Read published scientific main text 174306-1 through 174306-7, Sections I-IV, Equations 1-14, Tables I-III and Figures 1-6/captions. Visually checked Figures 1-5, Tables I-II and Equations 9-14 on PDF pages 3-7 (the institutional cover adds one PDF page). Reference list was inspected to identify inputs; the cited interval, atomic and molecular-ion publications were not thereby separately reviewed or admitted. No raw acquisition data, supplementary reanalysis, covariance reconstruction or local numerical replay. DOI registration and the published title block were compared; Crossref showed no update-to item and an empty relation object. No exhaustive later-correction or modern-best-value claim."
      }
    }
  ]
};

/** Preserve distinct molecular states, fragment channels and dependent energy inferences. */
export function validateMolecularBindingContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Molecular binding ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
