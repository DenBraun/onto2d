import assert from "node:assert/strict";

export const EM_REGIME_CHECKS = new Map();
export const EM_REGIME_ANALYTICAL_SOURCES = new Map();
export const EM_REGIME_STUDY_TYPES = new Map();
export const EM_REGIME_ADMISSION = {
  "definitions": [
    [
      "phys:charged-matter-electromagnetic-regime",
      "D-phys-charged-matter-electromagnetic-regime"
    ],
    [
      "phys:coulomb-effective-potential",
      "D-phys-coulomb-effective-potential"
    ],
    [
      "phys:electromagnetic-material-scope",
      "D-phys-electromagnetic-material-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:electromagnetic-photon-field-charged-matter-electromagnetic-regime",
      [
        "phys:electromagnetic-photon-field",
        "phys:charged-matter-electromagnetic-regime"
      ]
    ],
    [
      "physics:lepton-fields-charged-matter-electromagnetic-regime",
      [
        "phys:lepton-fields",
        "phys:charged-matter-electromagnetic-regime"
      ]
    ],
    [
      "physics:charged-matter-electromagnetic-regime-coulomb-effective-potential",
      [
        "phys:charged-matter-electromagnetic-regime",
        "phys:coulomb-effective-potential"
      ]
    ],
    [
      "physics:internal-propagator-coulomb-effective-potential",
      [
        "phys:internal-propagator",
        "phys:coulomb-effective-potential"
      ]
    ],
    [
      "physics:coulomb-effective-potential-electromagnetic-material-scope",
      [
        "phys:coulomb-effective-potential",
        "phys:electromagnetic-material-scope"
      ]
    ],
    [
      "physics:weinberg-gauge-mass-matrix-electromagnetic-material-scope",
      [
        "phys:weinberg-gauge-mass-matrix",
        "phys:electromagnetic-material-scope"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "electromagnetic-material-evidence",
      "C-phys-electromagnetic-material-evidence",
      [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    ]
  ],
  "dependencies": [
    [
      "electromagnetic-material-scope-electromagnetic-material-evidence",
      "electromagnetic-material-scope",
      "electromagnetic-material-evidence",
      "M-phys-electromagnetic-material-evidence",
      "interpretation-dependency"
    ],
    [
      "lamb-separation-electromagnetic-material-evidence",
      "lamb-separation",
      "electromagnetic-material-evidence",
      "M-phys-electromagnetic-material-evidence",
      "interpretation-dependency"
    ],
    [
      "rau-hd-mass-electromagnetic-material-evidence",
      "rau-hd-mass",
      "electromagnetic-material-evidence",
      "M-phys-electromagnetic-material-evidence",
      "interpretation-dependency"
    ],
    [
      "rau-hd-closure-electromagnetic-material-evidence",
      "rau-hd-closure",
      "electromagnetic-material-evidence",
      "M-phys-electromagnetic-material-evidence",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [
    "electromagnetic-material-cross-scale"
  ],
  "inferenceSources": [
    [
      "C-phys-electromagnetic-material-evidence",
      [
        "hanssen2001",
        "heisse2019",
        "korobov2017",
        "lamb1947",
        "rau2020"
      ]
    ],
    [
      "M-phys-electromagnetic-material-evidence",
      [
        "hanssen2001",
        "heisse2019",
        "korobov2017",
        "lamb1947",
        "rau2020"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-charged-matter-electromagnetic-regime",
      "kind": "review-finding",
      "statement": "Adopt the Maxwell-Dirac Lagrangian L=-F_mu_nu*F^mu_nu/4+psi_bar*(i*gamma^mu*D_mu-m)*psi, with F_mu_nu=partial_mu*A_nu-partial_nu*A_mu and D_mu=partial_mu+i*e*A_mu, in rationalized hbar=c=1 units. The current coupling is -e*psi_bar*gamma^mu*A_mu*psi. The declared Abelian gauge transformation acts jointly on A_mu and the charged spinor; it specifies an interacting model rather than deriving a material configuration.",
      "scope": "Declared electromagnetic model and the named hydrogen, HD+ and infrared-sample literature; no universal material-formation or maintenance law.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The local action, charges, masses, quantum representation and chosen states are supplied model inputs. Gauge covariance does not determine their measured values or a complete material state.",
        "This is an interacting charged-matter model, distinct from a source-free transverse photon state. The electrostatic potential is not a count of real photons or of coherent resonant modes.",
        "The retained reading does not construct nonperturbative interacting QED, prove all-orders convergence, or derive every atomic, molecular or material observable."
      ]
    },
    {
      "id": "D-phys-coulomb-effective-potential",
      "kind": "review-finding",
      "statement": "For the selected leading nonrelativistic QED scattering-to-potential comparison, equal-sign charges of magnitude e give U(r)=+e^2/(4*pi*r), and opposite-sign charges give U(r)=-e^2/(4*pi*r), for r>0 in rationalized hbar=c=1 units. Feynman separately formulates an instantaneous Coulomb pair interaction and its relativistic perturbative extension; that amplitude is a model construction, not a detected population of exchanged photons.",
      "scope": "Declared electromagnetic model and the named hydrogen, HD+ and infrared-sample literature; no universal material-formation or maintenance law.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted signs refer to the stated leading, nonrelativistic scattering-to-potential approximation in rationalized natural units. Identical-particle exchange remains part of the full amplitude; this pair-potential term does not replace antisymmetrization.",
        "Feynman uses his historical e^2/r normalization; Tong uses rationalized e^2/(4*pi*r). Numerical charge symbols must not be identified without unit conversion.",
        "Relativistic, radiative, magnetic, finite-size, retardation, material and environmental effects need their own controlled treatment. No potential fit, force measurement, bound-state solution or chemical formation rate is reproduced."
      ]
    },
    {
      "id": "D-phys-electromagnetic-material-scope",
      "kind": "review-finding",
      "statement": "A scoped electromagnetic material regime comprises a declared charged-matter interaction model together with specified atomic, molecular or bulk preparations and their separate observables. Recurring use of the interaction framework does not itself identify a physical emergence stage. In the selected electroweak lepton model, the massless photon combination and e=g*g_prime/sqrt(g^2+g_prime^2) are conditional field and coupling definitions.",
      "scope": "Declared electromagnetic model and the named hydrogen, HD+ and infrared-sample literature; no universal material-formation or maintenance law.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension",
          "role": "limits",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original card /1 supplies the proposal and unsupported parent/weight/minimum claims under assessment; it is not scientific support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Persistent pattern is retained only as a description of a recurring interaction framework under stated conditions. It is not a demonstrated new physical stage, cosmological chronology, temporal stability theorem or autonomous maintenance process.",
        "Atomic and molecular quantum states, kinetics and stability require specified nuclei, electrons, masses, statistics, preparation and environment. A Hamiltonian interaction term alone does not establish bound-state existence or lifetime. A bulk optical spectrum does not independently determine cohesion, crystalline organization, dielectric tensors or a microscopic Hamiltonian.",
        "The limited model and observations preserve real electromagnetic, atomic, molecular and optical phenomena. They do not show that electromagnetism alone is sufficient for all organization of matter or that nuclear, statistical and environmental inputs can be omitted.",
        "Original necessary parent 1.5 Vacuum Fluctuations does not supply the charged-matter current or a two-resonant-mode threshold. Ground-state variance, radiative corrections and material response retain their separate definitions.",
        "Original necessary parent 1.6 Asymptotic Freedom is a QCD scale property, not a premise of the specified Abelian Maxwell-Dirac construction. Its omission from that construction is not a claim that strong interactions have no role in nuclear structure.",
        "Original parent 1.8 Electroweak Symmetry Breaking supplies a conditional model origin for a massless electromagnetic field combination and its charge coupling. It does not establish a measured temporal emergence of the interaction law or a one-mode physical carrier minimum.",
        "Original weights 0.30, 0.30 and 0.40; necessary arising roles; resonant-mode Nmin=Ncrit of 2, 2 and 1; diagonal/constraint labels; Level 2, Phase 1, pattern role and established catalogue status have no admitted quantitative, causal or physical-stage authority.",
        "The original generic theoretical and empirical evidence paragraphs have no identified publication, preparation or locator. Their mentions of Coulomb-law tests, dielectric response and collective organization are qualified to the actual scoped records; no unreviewed universal result is inferred."
      ]
    },
    {
      "id": "C-phys-electromagnetic-material-evidence",
      "kind": "review-finding",
      "statement": "The reviewed literature reports microwave-quenching resonances and an approximate level separation in metastable hydrogen, a corrected trapped-HD+ mass with a dependent molecular mass-closure comparison, and specimen-specific infrared reflectance and transmittance for window materials and an Au mirror. These supply distinct atomic, molecular and bulk optical constraints. They provide no common quantitative measurement of cross-scale formation, universal material stability or electromagnetic-only organization.",
      "scope": "Declared electromagnetic model and the named hydrogen, HD+ and infrared-sample literature; no universal material-formation or maintenance law.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 7, pp. 3203-3204: discussion and scope",
          "role": "supports",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "role": "supports",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
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
        "These are different source-specific preparations and observables, not independent replications of one cross-scale process. Reusing these published results adds no new observation and retains their original acquisition and response boundaries.",
        "The Lamb level separation is approximate; its radiative interpretation and the approximate Bethe model are distinct from the measured microwave-quenching current. No cosmic atomic-formation history is measured.",
        "The HD+ mass and its molecular closure share nuclear/electronic mass references and theoretical binding inputs. The inferred rovibrational state, preparation-dependent corrections, source-version conflicts and unreproduced covariance remain as stated in the existing HD+ records.",
        "Hanssen measures reflectance and transmittance in its specified sphere geometry and derives absorptance by balance. Sample thickness, spectral range, surface contaminants, instrument throughput and calibration limits remain attached; the optical spectra are not digitized or fitted here.",
        "No new acquisition, numerical replay, joint likelihood, common response calibration, universal carrier minimum, independently reproduced experiment or electromagnetic-only formation/maintenance law is admitted."
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    },
    {
      "id": "M-phys-electromagnetic-material-evidence",
      "kind": "method",
      "statement": "Compare the existing hydrogen, HD+ and infrared-sample records using their original preparation, measured variable, derived quantity and shared-input limits. Preserve shared acquisition and source dependencies when reusing each published result. Use the formal electromagnetic regime solely to delimit interpretation, without combining heterogeneous measurements into one causal cascade or a stability test.",
      "scope": "Declared electromagnetic model and the named hydrogen, HD+ and infrared-sample literature; no universal material-formation or maintenance law.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 7, pp. 3203-3204: discussion and scope",
          "role": "method",
          "note": "Supports only the declared model or source-specific observable; no cross-scale formation or stability inference."
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control",
          "role": "method",
          "note": "Reused input to the dependent HD+ mass closure; no new acquisition or independent theoretical calculation."
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy",
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
        "These are different source-specific preparations and observables, not independent replications of one cross-scale process. Reusing these published results adds no new observation and retains their original acquisition and response boundaries.",
        "The Lamb level separation is approximate; its radiative interpretation and the approximate Bethe model are distinct from the measured microwave-quenching current. No cosmic atomic-formation history is measured.",
        "The HD+ mass and its molecular closure share nuclear/electronic mass references and theoretical binding inputs. The inferred rovibrational state, preparation-dependent corrections, source-version conflicts and unreproduced covariance remain as stated in the existing HD+ records.",
        "Hanssen measures reflectance and transmittance in its specified sphere geometry and derives absorptance by balance. Sample thickness, spectral range, surface contaminants, instrument throughput and calibration limits remain attached; the optical spectra are not digitized or fitted here.",
        "No new acquisition, numerical replay, joint likelihood, common response calibration, universal carrier minimum, independently reproduced experiment or electromagnetic-only formation/maintenance law is admitted."
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:charged-matter-electromagnetic-regime",
      "name": "Declared charged-matter electromagnetic regime",
      "kind": "definition",
      "description": "Adopt the Maxwell-Dirac Lagrangian L=-F_mu_nu*F^mu_nu/4+psi_bar*(i*gamma^mu*D_mu-m)*psi, with F_mu_nu=partial_mu*A_nu-partial_nu*A_mu and D_mu=partial_mu+i*e*A_mu, in rationalized hbar=c=1 units. The current coupling is -e*psi_bar*gamma^mu*A_mu*psi. The declared Abelian gauge transformation acts jointly on A_mu and the charged spinor; it specifies an interacting model rather than deriving a material configuration.",
      "claimIds": [
        "D-phys-charged-matter-electromagnetic-regime"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The local action, charges, masses, quantum representation and chosen states are supplied model inputs. Gauge covariance does not determine their measured values or a complete material state.",
        "This is an interacting charged-matter model, distinct from a source-free transverse photon state. The electrostatic potential is not a count of real photons or of coherent resonant modes.",
        "The retained reading does not construct nonperturbative interacting QED, prove all-orders convergence, or derive every atomic, molecular or material observable."
      ],
      "level": 2
    },
    {
      "id": "phys:coulomb-effective-potential",
      "name": "Leading nonrelativistic Coulomb potential",
      "kind": "definition",
      "description": "For the selected leading nonrelativistic QED scattering-to-potential comparison, equal-sign charges of magnitude e give U(r)=+e^2/(4*pi*r), and opposite-sign charges give U(r)=-e^2/(4*pi*r), for r>0 in rationalized hbar=c=1 units. Feynman separately formulates an instantaneous Coulomb pair interaction and its relativistic perturbative extension; that amplitude is a model construction, not a detected population of exchanged photons.",
      "claimIds": [
        "D-phys-coulomb-effective-potential"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The quoted signs refer to the stated leading, nonrelativistic scattering-to-potential approximation in rationalized natural units. Identical-particle exchange remains part of the full amplitude; this pair-potential term does not replace antisymmetrization.",
        "Feynman uses his historical e^2/r normalization; Tong uses rationalized e^2/(4*pi*r). Numerical charge symbols must not be identified without unit conversion.",
        "Relativistic, radiative, magnetic, finite-size, retardation, material and environmental effects need their own controlled treatment. No potential fit, force measurement, bound-state solution or chemical formation rate is reproduced."
      ],
      "level": 2
    },
    {
      "id": "phys:electromagnetic-material-scope",
      "name": "Electromagnetic material interpretation boundary",
      "kind": "definition",
      "description": "A scoped electromagnetic material regime comprises a declared charged-matter interaction model together with specified atomic, molecular or bulk preparations and their separate observables. Recurring use of the interaction framework does not itself identify a physical emergence stage. In the selected electroweak lepton model, the massless photon combination and e=g*g_prime/sqrt(g^2+g_prime^2) are conditional field and coupling definitions.",
      "claimIds": [
        "D-phys-electromagnetic-material-scope"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Persistent pattern is retained only as a description of a recurring interaction framework under stated conditions. It is not a demonstrated new physical stage, cosmological chronology, temporal stability theorem or autonomous maintenance process.",
        "Atomic and molecular quantum states, kinetics and stability require specified nuclei, electrons, masses, statistics, preparation and environment. A Hamiltonian interaction term alone does not establish bound-state existence or lifetime. A bulk optical spectrum does not independently determine cohesion, crystalline organization, dielectric tensors or a microscopic Hamiltonian.",
        "The limited model and observations preserve real electromagnetic, atomic, molecular and optical phenomena. They do not show that electromagnetism alone is sufficient for all organization of matter or that nuclear, statistical and environmental inputs can be omitted.",
        "Original necessary parent 1.5 Vacuum Fluctuations does not supply the charged-matter current or a two-resonant-mode threshold. Ground-state variance, radiative corrections and material response retain their separate definitions.",
        "Original necessary parent 1.6 Asymptotic Freedom is a QCD scale property, not a premise of the specified Abelian Maxwell-Dirac construction. Its omission from that construction is not a claim that strong interactions have no role in nuclear structure.",
        "Original parent 1.8 Electroweak Symmetry Breaking supplies a conditional model origin for a massless electromagnetic field combination and its charge coupling. It does not establish a measured temporal emergence of the interaction law or a one-mode physical carrier minimum.",
        "Original weights 0.30, 0.30 and 0.40; necessary arising roles; resonant-mode Nmin=Ncrit of 2, 2 and 1; diagonal/constraint labels; Level 2, Phase 1, pattern role and established catalogue status have no admitted quantitative, causal or physical-stage authority.",
        "The original generic theoretical and empirical evidence paragraphs have no identified publication, preparation or locator. Their mentions of Coulomb-law tests, dielectric response and collective organization are qualified to the actual scoped records; no unreviewed universal result is inferred."
      ],
      "level": 2
    },
    {
      "id": "phys:electromagnetic-material-evidence",
      "name": "Scoped atomic, molecular and optical evidence",
      "kind": "scoped-process",
      "description": "The reviewed literature reports microwave-quenching resonances and an approximate level separation in metastable hydrogen, a corrected trapped-HD+ mass with a dependent molecular mass-closure comparison, and specimen-specific infrared reflectance and transmittance for window materials and an Au mirror. These supply distinct atomic, molecular and bulk optical constraints. They provide no common quantitative measurement of cross-scale formation, universal material stability or electromagnetic-only organization.",
      "claimIds": [
        "C-phys-electromagnetic-material-evidence"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "lamb1947",
          "locator": "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1"
        },
        {
          "sourceId": "lamb1947",
          "locator": "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4 and 6-10, Methods, Extended Data Figure 1 and Tables 1-2: HD+ preparation, molecular inputs, mass closure and grouped data"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 7, pp. 3203-3204: discussion and scope"
        },
        {
          "sourceId": "heisse2019",
          "locator": "Pages 022518-13-15, Table VIII, Equations 21-36 and Section V: systematic corrections, proton reanalysis, double-dip check, oxygen input and carbon charge-state control"
        },
        {
          "sourceId": "korobov2017",
          "locator": "Author manuscript pages 1-5, Equations 1-13 and Tables I-V: NRQED calculation, approximations, omitted constant uncertainties and HD+ ionization energy"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 1-4, Equation 1, Figures 1-4 and Table 1: deuteron preparation, two excitation generators, ratio fits and corrections"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "These are different source-specific preparations and observables, not independent replications of one cross-scale process. Reusing these published results adds no new observation and retains their original acquisition and response boundaries.",
        "The Lamb level separation is approximate; its radiative interpretation and the approximate Bethe model are distinct from the measured microwave-quenching current. No cosmic atomic-formation history is measured.",
        "The HD+ mass and its molecular closure share nuclear/electronic mass references and theoretical binding inputs. The inferred rovibrational state, preparation-dependent corrections, source-version conflicts and unreproduced covariance remain as stated in the existing HD+ records.",
        "Hanssen measures reflectance and transmittance in its specified sphere geometry and derives absorptance by balance. Sample thickness, spectral range, surface contaminants, instrument throughput and calibration limits remain attached; the optical spectra are not digitized or fitted here.",
        "No new acquisition, numerical replay, joint likelihood, common response calibration, universal carrier minimum, independently reproduced experiment or electromagnetic-only formation/maintenance law is admitted."
      ],
      "level": 2
    }
  ],
  "relations": [
    {
      "id": "physics:electromagnetic-photon-field-charged-matter-electromagnetic-regime",
      "source": "phys:electromagnetic-photon-field",
      "target": "phys:charged-matter-electromagnetic-regime",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing source-free Maxwell sector enters the explicitly coupled charged-matter definition; no necessary chronological arising relation is asserted.",
      "claimIds": [
        "D-phys-charged-matter-electromagnetic-regime"
      ]
    },
    {
      "id": "physics:lepton-fields-charged-matter-electromagnetic-regime",
      "source": "phys:lepton-fields",
      "target": "phys:charged-matter-electromagnetic-regime",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared charged spinor field is a model input, not a measured particle minimum or a complete atomic preparation.",
      "claimIds": [
        "D-phys-charged-matter-electromagnetic-regime"
      ]
    },
    {
      "id": "physics:charged-matter-electromagnetic-regime-coulomb-effective-potential",
      "source": "phys:charged-matter-electromagnetic-regime",
      "target": "phys:coulomb-effective-potential",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified leading nonrelativistic scattering comparison defines the Coulomb potential under its approximation.",
      "claimIds": [
        "D-phys-coulomb-effective-potential"
      ]
    },
    {
      "id": "physics:internal-propagator-coulomb-effective-potential",
      "source": "phys:internal-propagator",
      "target": "phys:coulomb-effective-potential",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "An internal perturbative kernel is distinguished from a real-photon flux or resonant-mode population.",
      "claimIds": [
        "D-phys-coulomb-effective-potential"
      ]
    },
    {
      "id": "physics:coulomb-effective-potential-electromagnetic-material-scope",
      "source": "phys:coulomb-effective-potential",
      "target": "phys:electromagnetic-material-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The pair-potential approximation is one declared interaction input; material states, statistics, environment and response remain separate.",
      "claimIds": [
        "D-phys-electromagnetic-material-scope"
      ]
    },
    {
      "id": "physics:weinberg-gauge-mass-matrix-electromagnetic-material-scope",
      "source": "phys:weinberg-gauge-mass-matrix",
      "target": "phys:electromagnetic-material-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The historical electroweak model supplies conditional field/coupling conventions, without a measured material-emergence chronology.",
      "claimIds": [
        "D-phys-electromagnetic-material-scope"
      ]
    },
    {
      "id": "physics:electromagnetic-material-scope-electromagnetic-material-evidence",
      "source": "phys:electromagnetic-material-scope",
      "target": "phys:electromagnetic-material-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This named formal boundary or existing literature outcome contributes only its scoped interpretation; no common acquisition, material-formation event or physical necessity is inferred.",
      "claimIds": [
        "M-phys-electromagnetic-material-evidence"
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    },
    {
      "id": "physics:lamb-separation-electromagnetic-material-evidence",
      "source": "phys:lamb-separation",
      "target": "phys:electromagnetic-material-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This named formal boundary or existing literature outcome contributes only its scoped interpretation; no common acquisition, material-formation event or physical necessity is inferred.",
      "claimIds": [
        "M-phys-electromagnetic-material-evidence"
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    },
    {
      "id": "physics:rau-hd-mass-electromagnetic-material-evidence",
      "source": "phys:rau-hd-mass",
      "target": "phys:electromagnetic-material-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This named formal boundary or existing literature outcome contributes only its scoped interpretation; no common acquisition, material-formation event or physical necessity is inferred.",
      "claimIds": [
        "M-phys-electromagnetic-material-evidence"
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    },
    {
      "id": "physics:rau-hd-closure-electromagnetic-material-evidence",
      "source": "phys:rau-hd-closure",
      "target": "phys:electromagnetic-material-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This named formal boundary or existing literature outcome contributes only its scoped interpretation; no common acquisition, material-formation event or physical necessity is inferred.",
      "claimIds": [
        "M-phys-electromagnetic-material-evidence"
      ],
      "contextIds": [
        "lamb1947",
        "rau2020-awg1",
        "rau2020-awg2",
        "rau2020-hd",
        "hanssen2001"
      ]
    }
  ],
  "studies": [],
  "comparisons": [
    {
      "id": "electromagnetic-material-cross-scale",
      "candidate": "A declared electromagnetic charged-matter framework interpreted through separate source-specific atomic, molecular and infrared material observations.",
      "alternative": "One universal electromagnetic-only formation/maintenance mechanism or physical SOMA stage inferred from the same heterogeneous observations.",
      "discriminator": "A common cross-scale construction model with compatible states, controlled variation and matched response is needed to test the stronger claim; the current ledger instead preserves the actual preparation and inference boundaries.",
      "result": "not-tested",
      "limit": "The reviewed observations remain admitted on their original scopes; this literature comparison performs no joint causal or stability test and supplies no universal carrier threshold.",
      "assumptions": [
        "Preserve hydrogen microwave, trapped HD+ and FTIR sample preparations and their separate derived quantities.",
        "The Hanssen optical results reuse the same published specimens and response analysis, without an additional acquisition."
      ],
      "sourceIds": [
        "lamb1947",
        "rau2020",
        "hanssen2001"
      ],
      "claimIds": [
        "C-phys-electromagnetic-material-evidence",
        "M-phys-electromagnetic-material-evidence"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:charged-matter-electromagnetic-regime",
      "role": "definition",
      "denotes": "The specified Maxwell-Dirac charged-matter model, without a newly derived material state.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-charged-matter-electromagnetic-regime"
      ]
    },
    {
      "nodeId": "phys:coulomb-effective-potential",
      "role": "definition",
      "denotes": "A leading nonrelativistic pair-potential definition, not a force acquisition or real-photon count.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-coulomb-effective-potential"
      ]
    },
    {
      "nodeId": "phys:electromagnetic-material-scope",
      "role": "definition",
      "denotes": "An interpretation boundary separating recurring electromagnetic descriptions from universal material formation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-electromagnetic-material-scope"
      ]
    },
    {
      "nodeId": "phys:electromagnetic-material-evidence",
      "role": "scoped-phenomenon",
      "denotes": "A literature synthesis of different atomic, molecular and optical preparations, without a common causal experiment.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-electromagnetic-material-evidence"
      ]
    }
  ],
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
      "id": "hanssen2001",
      "kind": "research-publication",
      "title": "Integrating-sphere system and method for absolute measurement of transmittance, reflectance, and absorptance of specular samples",
      "authors": [
        "Leonard M. Hanssen"
      ],
      "year": 2001,
      "doi": "10.1364/ao.40.003196",
      "url": "https://pubmed.ncbi.nlm.nih.gov/11958259/",
      "path": "references/canonical/data/hanssen-2001.pdf",
      "sha256": "88e2fb26540cb075690607d37d38a498a1e7f19dca6639dd243672f962042e6a",
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Abstract",
          "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "Section 7, pp. 3203-3204: discussion and scope"
        ],
        "limit": "Specified IR samples and collection geometry; no full angular inversion, universal precision or carrier minimum."
      }
    },
    {
      "id": "lamb1947",
      "kind": "research-publication",
      "title": "Fine Structure of the Hydrogen Atom by a Microwave Method",
      "authors": [
        "Willis E. Lamb, Jr.",
        "Robert C. Retherford"
      ],
      "year": 1947,
      "doi": "10.1103/PhysRev.72.241",
      "url": "https://doi.org/10.1103/PhysRev.72.241",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 241-242: metastable hydrogen beam and microwave quenching; Figure 1",
          "Pages 242-243: Zeeman comparison, approximate level separation and precision limits; Figure 2"
        ],
        "limit": "Complete article on pages 241-243 read, excluding the unrelated article beginning on page 243; both figures visually inspected. The 1000 MHz displacement is approximate and is explicitly not a best fit."
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
      "id": "feynman1949-amplitudes",
      "kind": "research-publication",
      "title": "Space-Time Approach to Quantum Electrodynamics",
      "authors": [
        "R. P. Feynman"
      ],
      "year": 1949,
      "doi": "10.1103/PhysRev.76.769",
      "url": "https://puredhamma.net/wp-content/uploads/Feynman-R.P.-Space-Time-Approach-to-Quantum-Electrodynamics-1949.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-amplitude-conventions",
        "locators": [
          "Printed pages 769-773, introduction and Sections 1-2, Equation 4 and Figure 1: perturbation amplitudes, summed alternatives and antisymmetrized two-electron amplitude",
          "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        ],
        "limit": "Read selected printed pages 769-776, introductory text and Sections 1-4; the beginning of Section 5 only identifies historical regulator limitations. Scan pages 769, 774, 775 and 776 were visually checked; page 775 was independently checked for Dirac-momentum notation and the pole prescription. The publisher metadata supplies Physical Review 76(6), 769-789, published September 15, 1949. The reviewed bytes are a scan hosted at the stated URL, not a retrieved publisher PDF. The scan header gives 1949 despite damaged OCR. Remaining pages, cited derivations and modern all-orders results are outside this reading."
      }
    },
    {
      "id": "weinberg1967-leptons",
      "kind": "research-publication",
      "title": "A Model of Leptons",
      "authors": [
        "Steven Weinberg"
      ],
      "year": 1967,
      "doi": "10.1103/PhysRevLett.19.1264",
      "url": "https://www2.physik.lmu.de/lehre/vorlesungen/wise_21_22/Neutrino-Mass-and-Grand-Unification/Material/a-model-of-leptons.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-theoretical-passages",
        "locators": [
          "Publisher pages 1264-1265, Equations 1-7: electron-type chiral representations, scalar doublet and chosen real vacuum configuration",
          "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "Publisher pages 1264-1265, Equations 4-7 and text before Equation 8: independent electron coupling and mass",
          "Publisher page 1266, concluding renormalizability question: restriction of the historical model and unproved quantum extension"
        ],
        "limit": "The primary publisher scan on pages 1264-1266 was read and visually checked, excluding adjacent articles. The admission retains the electron-type model, original background and neutral-field signs; its numerical weak-coupling estimate, historical mass bounds, scattering predictions and unproved quantum extension are not admitted. Publisher metadata verifies author, date and DOI."
      }
    },
    {
      "id": "tong-qft-free-maxwell",
      "kind": "research-publication",
      "title": "Quantum Field Theory: selected electromagnetic gauge-field and QED sections (2021 HTML edition)",
      "authors": [
        "David Tong"
      ],
      "year": 2021,
      "doi": null,
      "url": "https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        ],
        "limit": "Author lecture notes for the Cambridge 2006-2007 course, in the HTML edition generated on 15 October 2021. Only the listed body passages were reviewed for this admission. This is an instructional formal source, not a primary photon experiment. The graph declares a smeared one-photon state using the reviewed mode algebra and a fixed-frame normalization; it does not report a new numerical replay, experimental preparation, mass/charge bound, interacting-field construction or all-orders QED result. Scalar-field sections are not substituted for the gauge-field constraint analysis. The additional Coulomb passage is a leading nonrelativistic scattering calculation, not a static-force experiment or evidence for a population of real exchanged photons."
      }
    }
  ]
};

/** Preserve a specified electromagnetic regime and its separate evidence. */
export function validateEmRegimeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Electromagnetic regime ${kind} changed ${id}: preserve model, evidence and interpretation limits`);
    }
  }
}
