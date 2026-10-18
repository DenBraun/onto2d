import assert from "node:assert/strict";

export const NUCLEAR_LATTICE_CHECKS = new Map();
export const NUCLEAR_LATTICE_ANALYTICAL_SOURCES = new Map();
export const NUCLEAR_LATTICE_ADMISSION = {
  "definitions": [
    [
      "phys:nuclear-lattice-energy-shift",
      "D-phys-nuclear-lattice-energy-shift"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lattice-gauge-formulation-nuclear-lattice-energy-shift",
      [
        "phys:lattice-gauge-formulation",
        "phys:nuclear-lattice-energy-shift"
      ]
    ]
  ],
  "contexts": [
    [
      "beane2013-nuclear-ensemble-context",
      "M-phys-beane2013-nuclear-ensemble-context",
      [
        "beane2013-nuclear-ensemble"
      ]
    ],
    [
      "beane2013-nuclear-extraction-context",
      "M-phys-beane2013-nuclear-extraction-context",
      [
        "beane2013-nuclear-extraction"
      ]
    ],
    [
      "beane2013-nuclear-binding-context",
      "M-phys-beane2013-nuclear-binding-context",
      [
        "beane2013-nuclear-binding"
      ]
    ]
  ],
  "observations": [
    [
      "beane2013-two-nucleon-shifts",
      "C-phys-beane2013-two-nucleon-shifts",
      [
        "beane2013-nuclear-extraction"
      ]
    ],
    [
      "beane2013-two-nucleon-binding",
      "C-phys-beane2013-two-nucleon-binding",
      [
        "beane2013-nuclear-binding"
      ]
    ]
  ],
  "dependencies": [
    [
      "beane2013-nuclear-ensemble-context-beane2013-two-nucleon-shifts",
      "beane2013-nuclear-ensemble-context",
      "beane2013-two-nucleon-shifts",
      "M-phys-beane2013-two-nucleon-shifts",
      "interpretation-dependency"
    ],
    [
      "beane2013-nuclear-extraction-context-beane2013-two-nucleon-shifts",
      "beane2013-nuclear-extraction-context",
      "beane2013-two-nucleon-shifts",
      "M-phys-beane2013-two-nucleon-shifts",
      "interpretation-dependency"
    ],
    [
      "nuclear-lattice-energy-shift-beane2013-two-nucleon-shifts",
      "nuclear-lattice-energy-shift",
      "beane2013-two-nucleon-shifts",
      "M-phys-beane2013-two-nucleon-shifts",
      "interpretation-dependency"
    ],
    [
      "beane2013-two-nucleon-shifts-beane2013-two-nucleon-binding",
      "beane2013-two-nucleon-shifts",
      "beane2013-two-nucleon-binding",
      "M-phys-beane2013-two-nucleon-binding",
      "interpretation-dependency"
    ],
    [
      "beane2013-nuclear-binding-context-beane2013-two-nucleon-binding",
      "beane2013-nuclear-binding-context",
      "beane2013-two-nucleon-binding",
      "M-phys-beane2013-two-nucleon-binding",
      "interpretation-dependency"
    ],
    [
      "beane2013-nuclear-extraction-context-beane2013-two-nucleon-binding",
      "beane2013-nuclear-extraction-context",
      "beane2013-two-nucleon-binding",
      "M-phys-beane2013-two-nucleon-binding",
      "interpretation-dependency"
    ],
    [
      "beane2013-nuclear-ensemble-context-beane2013-two-nucleon-binding",
      "beane2013-nuclear-ensemble-context",
      "beane2013-two-nucleon-binding",
      "M-phys-beane2013-two-nucleon-binding",
      "interpretation-dependency"
    ],
    [
      "nuclear-lattice-energy-shift-beane2013-two-nucleon-binding",
      "nuclear-lattice-energy-shift",
      "beane2013-two-nucleon-binding",
      "M-phys-beane2013-two-nucleon-binding",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "beane2013-nuclear-ensemble",
    "beane2013-nuclear-extraction",
    "beane2013-nuclear-binding"
  ],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "beane2013-nuclei",
      "kind": "research-publication",
      "title": "Light Nuclei and Hypernuclei from Quantum Chromodynamics in the Limit of SU(3) Flavor Symmetry",
      "authors": [
        "S. R. Beane",
        "E. Chang",
        "S. D. Cohen",
        "W. Detmold",
        "H. W. Lin",
        "T. C. Luu",
        "K. Orginos",
        "A. Parreño",
        "M. J. Savage",
        "A. Walker-Loud"
      ],
      "year": 2013,
      "doi": "10.1103/PhysRevD.87.034506",
      "url": "https://arxiv.org/abs/1206.5219v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-article",
        "locators": [
          "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
          "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "Author v2 pages 32-35, Appendix B, Equations B1-B2 and references 30-32: noninteracting cluster estimates and unpublished scale/tuning provenance"
        ],
        "limit": "Read all 35 pages of author v2, revised 20 November 2012; visually checked pages 4, 6, 10-11, 13, 15-16, 23, 29 and 32-33. The regenerated PDF title date is 27 November 2024, not a new research version. APS metadata identifies publication on 11 February 2013 in Physical Review D 87, 034506; selected accepted-manuscript metadata and two-body passages were also checked, not the complete publisher text. Admission is restricted to the deuteron/dineutron channels. Higher-body claims, including the inconsistent 3He per-baryon prose, are not imported. Configurations, correlators, covariance, scale setting and fits are not independently reproduced; this is the original conditional result, not a current consensus determination."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-nuclear-lattice-energy-shift",
      "kind": "review-finding",
      "statement": "At total momentum P=0 on a declared lattice, define DeltaE_X(L)=E_X(L)-2M_B(L), where E_X is the extracted energy in a specified two-nucleon channel and M_B is the rest energy of the degenerate octet baryon from the same theory and ensemble. Define the threshold deficit B_L=-DeltaE_X(L). The dimensionless lattice result b*DeltaE is converted to energy using the adopted lattice spacing; b is a length, not a baryon count.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "supports",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "supports",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A negative finite-volume shift is an energy difference relative to the noninteracting two-baryon threshold, not an absolute nuclear mass, a binding proof, a lifetime or a bulk-matter equation of state. Ground-state isolation and infinite-volume interpretation are additional conditions.",
        "The subtraction uses shared gauge configurations and baryon inputs; threshold and channel uncertainties cannot be propagated as independent measurements by default. Moving-frame energies require their own threshold/dispersion treatment and are not defined by substituting E_X(P,L) into this rest-frame formula."
      ]
    },
    {
      "id": "M-phys-beane2013-nuclear-ensemble-context",
      "kind": "method",
      "statement": "Use nf=3 degenerate dynamical quarks in SU(3) color gauge theory without electromagnetism, with tadpole-improved Luscher-Weisz gauge action and isotropic clover fermions. Table I specifies beta=6.1 and bare b*m_q=-0.2450 on 24^3 x 48, 32^3 x 48 and 48^3 x 64 lattices. The reported configuration counts are 3822, 3050 and 1905, with mean source counts per configuration 72, 48 and 54. The adopted Upsilon-spectrum spacing is b=0.1453(16) fm. The degenerate pseudoscalar mass is approximately 806 MeV, with common quark masses described as tuned near the physical strange mass.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 32-35, Appendix B, Equations B1-B2 and references 30-32: noninteracting cluster estimates and unpublished scale/tuning provenance",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Flavor SU(3) degeneracy is distinct from the SU(3) color gauge symmetry. The up/down masses are unphysical; exact isospin and omitted QED prevent direct identification with measured physical nuclei.",
        "The negative quoted mass is the chosen bare Wilson/clover parameter, not a negative physical quark mass or an MSbar value at a specified renormalization scale. No such renormalized mass or detailed tuning reconstruction is provided here.",
        "The Upsilon scale is adopted from reference 32, a private communication; action tuning in reference 30 was in preparation. Their determinations are not independently reviewed. All channels share scale uncertainty; source locations on one configuration are not independent gauge ensembles. No physical-mass or continuum extrapolation is performed."
      ],
      "contextIds": [
        "beane2013-nuclear-ensemble"
      ]
    },
    {
      "id": "M-phys-beane2013-nuclear-extraction-context",
      "kind": "method",
      "statement": "Construct Gaussian-smeared quark sources and point/smeared sinks, baryon blocks projected to sink momentum, and multibaryon operators localized at one source point with upper Dirac components. The deuteron channel has I=0, J^P=1+ and flavor irrep 10bar; the dineutron channel has I=1, J^P=0+ and irrep 27. Fit effective-energy plateaus by correlated constant fits and correlators by exponential fits, using jackknife or bootstrap covariance. Vary accepted fit intervals to estimate fitting systematics. The finite-volume octet-baryon energies supply the shared threshold subtraction.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are restricted interpolating operators and finite Euclidean-time fits, not direct detector energies or a complete variational determination of every state. SP/SS choices and plateau stability do not independently prove asymptotic ground-state isolation.",
        "The same correlators, configurations, threshold and scale are reused across energy shifts and the later binding interpretation. The original fit windows, full covariance, overlap amplitudes and boosted-subtraction implementation are not independently reconstructed.",
        "The reported errors separate statistical, fit-interval systematic and scale contributions. They do not constitute a complete physical-mass, continuum, operator-completeness or excited-state error budget."
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "C-phys-beane2013-two-nucleon-shifts",
      "kind": "review-finding",
      "statement": "For P=0 and the volumes 24^3 x 48, 32^3 x 48 and 48^3 x 64 in that order, Tables V-VII report B_L=-DeltaE_L of 25.4(2.6)(4.7)(0.3), 22.5(2.3)(2.6)(0.2) and 19.7(3.1)(4.1)(0.2) MeV in the deuteron channel, and 17.8(1.7)(2.8)(0.2), 15.1(2.0)(2.0)(0.2) and 13.1(2.8)(4.3)(0.2) MeV in the dineutron channel. Parentheses give statistical, fitting systematic and scale errors respectively.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "supports",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These positive deficits denote reported negative rest-frame energy shifts; they are not three independent physical binding measurements. The two channels share ensemble, baryon-threshold and scale inputs.",
        "The channel labels specify quantum numbers in this heavy flavor-symmetric theory. They do not establish a physical bound dineutron, measured deuteron binding or exact asymptotic levels. No raw-correlator or covariance replay is claimed."
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "M-phys-beane2013-nuclear-binding-context",
      "kind": "method",
      "statement": "Compare rest and moving systems across volumes, using the separately fitted single-baryon dispersion as a control. For an assumed two-body bound state at sufficiently large L, Equation 5 gives kappa(L)=kappa_0+6Z_psi^2 exp(-kappa_0 L)/L+..., with nonrelativistic kappa_0 approximately sqrt(M_B B). The authors find no statistically resolved volume dependence between the two largest boxes and adopt the average of the largest-volume rest and two boosted determinations as their infinite-volume estimate; they do not obtain a refined extrapolation by fitting Equation 5.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The bound-state finite-volume form presupposes the relevant pole and ground-state identification; lack of resolved volume dependence alone is not a proof of binding. A finite operator set and Euclidean-time range can leave unresolved excited-state or scattering contributions.",
        "The moving-system determinations share configurations and thresholds with the rest result. Single-hadron dispersion is a control, not a complete moving-frame multibaryon or spectral replay. Neither independent averaging nor an unpublished covariance model is supplied by the graph.",
        "This is the original conditional interpretation, not a consensus determination of the two-nucleon ground state. The later methodological/variational review remains a separate comparison and cannot be treated as an additional fit input to the 2013 analysis."
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "C-phys-beane2013-two-nucleon-binding",
      "kind": "review-finding",
      "statement": "Table VII reports the original largest-volume rest/boost averages B_d=19.5(3.6)(3.1)(0.2) MeV and B_nn=15.9(2.7)(2.7)(0.2) MeV as estimates of infinite-volume binding at this flavor-symmetric parameter point. Their reported kappa_0 L values on the largest box are 6.3 and 5.7. These are the authors' conditional bound-state assignments, distinct from the finite-volume rest-frame shifts.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "supports",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "supports",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The three uncertainties are statistical, fitting systematic and lattice-scale contributions, not a complete error budget. The original analysis and averaging covariance are not reproduced; common thresholds and scale prohibit treating channels or boosts as independent confirmation.",
        "These values do not establish current consensus, physical deuteron or dineutron binding, a continuum limit, quark-mass derivatives, nuclear lifetimes, saturation density or compressibility. One heavy-mass point cannot determine a universal quark-to-bulk response.",
        "Higher-body and hypernuclear channels are outside this admission. The original paper itself identifies unresolved cluster-state ambiguities for several such channels; their stronger summary language is not transferred to these records."
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "M-phys-beane2013-two-nucleon-shifts",
      "kind": "method",
      "statement": "The finite deficits require the declared action/masses/volumes and common scale, the specified two-nucleon operators and fits, and the rest-frame subtraction from twice the same-ensemble octet-baryon energy.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A reported negative energy shift is not by itself an independently verified infinite-volume bound state."
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "M-phys-beane2013-two-nucleon-binding",
      "kind": "method",
      "statement": "The original binding estimates reuse the finite-volume deficits and additional moving-system fits, the shared baryon threshold and dispersion control, the common scale, and the authors' conditional finite-volume interpretation.",
      "scope": "Reported two-nucleon energies in the Beane nf=3 flavor-SU(3)-symmetric, no-QED calculation at one heavy-quark parameter point and one lattice spacing.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
          "role": "method",
          "note": "Supports the specified computational input, energy convention or original conditional inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Preserve source-reported status, shared uncertainties and unresolved spectral/extrapolation assumptions; no later result is a retrospective numerical input."
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:nuclear-lattice-energy-shift",
      "name": "Finite-volume two-nucleon energy shift",
      "kind": "definition",
      "description": "At total momentum P=0 on a declared lattice, define DeltaE_X(L)=E_X(L)-2M_B(L), where E_X is the extracted energy in a specified two-nucleon channel and M_B is the rest energy of the degenerate octet baryon from the same theory and ensemble. Define the threshold deficit B_L=-DeltaE_X(L). The dimensionless lattice result b*DeltaE is converted to energy using the adopted lattice spacing; b is a length, not a baryon count.",
      "claimIds": [
        "D-phys-nuclear-lattice-energy-shift"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        }
      ],
      "openObligations": [
        "A negative finite-volume shift is an energy difference relative to the noninteracting two-baryon threshold, not an absolute nuclear mass, a binding proof, a lifetime or a bulk-matter equation of state. Ground-state isolation and infinite-volume interpretation are additional conditions.",
        "The subtraction uses shared gauge configurations and baryon inputs; threshold and channel uncertainties cannot be propagated as independent measurements by default. Moving-frame energies require their own threshold/dispersion treatment and are not defined by substituting E_X(P,L) into this rest-frame formula."
      ]
    },
    {
      "id": "phys:beane2013-nuclear-ensemble-context",
      "name": "Beane flavor-symmetric nuclear ensembles",
      "kind": "context",
      "description": "Use nf=3 degenerate dynamical quarks in SU(3) color gauge theory without electromagnetism, with tadpole-improved Luscher-Weisz gauge action and isotropic clover fermions. Table I specifies beta=6.1 and bare b*m_q=-0.2450 on 24^3 x 48, 32^3 x 48 and 48^3 x 64 lattices. The reported configuration counts are 3822, 3050 and 1905, with mean source counts per configuration 72, 48 and 54. The adopted Upsilon-spectrum spacing is b=0.1453(16) fm. The degenerate pseudoscalar mass is approximately 806 MeV, with common quark masses described as tuned near the physical strange mass.",
      "claimIds": [
        "M-phys-beane2013-nuclear-ensemble-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 32-35, Appendix B, Equations B1-B2 and references 30-32: noninteracting cluster estimates and unpublished scale/tuning provenance"
        }
      ],
      "openObligations": [
        "Flavor SU(3) degeneracy is distinct from the SU(3) color gauge symmetry. The up/down masses are unphysical; exact isospin and omitted QED prevent direct identification with measured physical nuclei.",
        "The negative quoted mass is the chosen bare Wilson/clover parameter, not a negative physical quark mass or an MSbar value at a specified renormalization scale. No such renormalized mass or detailed tuning reconstruction is provided here.",
        "The Upsilon scale is adopted from reference 32, a private communication; action tuning in reference 30 was in preparation. Their determinations are not independently reviewed. All channels share scale uncertainty; source locations on one configuration are not independent gauge ensembles. No physical-mass or continuum extrapolation is performed."
      ]
    },
    {
      "id": "phys:beane2013-nuclear-extraction-context",
      "name": "Beane two-nucleon spectral extraction",
      "kind": "context",
      "description": "Construct Gaussian-smeared quark sources and point/smeared sinks, baryon blocks projected to sink momentum, and multibaryon operators localized at one source point with upper Dirac components. The deuteron channel has I=0, J^P=1+ and flavor irrep 10bar; the dineutron channel has I=1, J^P=0+ and irrep 27. Fit effective-energy plateaus by correlated constant fits and correlators by exponential fits, using jackknife or bootstrap covariance. Vary accepted fit intervals to estimate fitting systematics. The finite-volume octet-baryon energies supply the shared threshold subtraction.",
      "claimIds": [
        "M-phys-beane2013-nuclear-extraction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        }
      ],
      "openObligations": [
        "These are restricted interpolating operators and finite Euclidean-time fits, not direct detector energies or a complete variational determination of every state. SP/SS choices and plateau stability do not independently prove asymptotic ground-state isolation.",
        "The same correlators, configurations, threshold and scale are reused across energy shifts and the later binding interpretation. The original fit windows, full covariance, overlap amplitudes and boosted-subtraction implementation are not independently reconstructed.",
        "The reported errors separate statistical, fit-interval systematic and scale contributions. They do not constitute a complete physical-mass, continuum, operator-completeness or excited-state error budget."
      ]
    },
    {
      "id": "phys:beane2013-two-nucleon-shifts",
      "name": "Beane finite-volume two-nucleon deficits",
      "kind": "scoped-process",
      "description": "For P=0 and the volumes 24^3 x 48, 32^3 x 48 and 48^3 x 64 in that order, Tables V-VII report B_L=-DeltaE_L of 25.4(2.6)(4.7)(0.3), 22.5(2.3)(2.6)(0.2) and 19.7(3.1)(4.1)(0.2) MeV in the deuteron channel, and 17.8(1.7)(2.8)(0.2), 15.1(2.0)(2.0)(0.2) and 13.1(2.8)(4.3)(0.2) MeV in the dineutron channel. Parentheses give statistical, fitting systematic and scale errors respectively.",
      "claimIds": [
        "C-phys-beane2013-two-nucleon-shifts"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        }
      ],
      "openObligations": [
        "These positive deficits denote reported negative rest-frame energy shifts; they are not three independent physical binding measurements. The two channels share ensemble, baryon-threshold and scale inputs.",
        "The channel labels specify quantum numbers in this heavy flavor-symmetric theory. They do not establish a physical bound dineutron, measured deuteron binding or exact asymptotic levels. No raw-correlator or covariance replay is claimed."
      ]
    },
    {
      "id": "phys:beane2013-nuclear-binding-context",
      "name": "Beane conditional bound-state interpretation",
      "kind": "context",
      "description": "Compare rest and moving systems across volumes, using the separately fitted single-baryon dispersion as a control. For an assumed two-body bound state at sufficiently large L, Equation 5 gives kappa(L)=kappa_0+6Z_psi^2 exp(-kappa_0 L)/L+..., with nonrelativistic kappa_0 approximately sqrt(M_B B). The authors find no statistically resolved volume dependence between the two largest boxes and adopt the average of the largest-volume rest and two boosted determinations as their infinite-volume estimate; they do not obtain a refined extrapolation by fitting Equation 5.",
      "claimIds": [
        "M-phys-beane2013-nuclear-binding-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits"
        }
      ],
      "openObligations": [
        "The bound-state finite-volume form presupposes the relevant pole and ground-state identification; lack of resolved volume dependence alone is not a proof of binding. A finite operator set and Euclidean-time range can leave unresolved excited-state or scattering contributions.",
        "The moving-system determinations share configurations and thresholds with the rest result. Single-hadron dispersion is a control, not a complete moving-frame multibaryon or spectral replay. Neither independent averaging nor an unpublished covariance model is supplied by the graph.",
        "This is the original conditional interpretation, not a consensus determination of the two-nucleon ground state. The later methodological/variational review remains a separate comparison and cannot be treated as an additional fit input to the 2013 analysis."
      ]
    },
    {
      "id": "phys:beane2013-two-nucleon-binding",
      "name": "Beane conditional two-nucleon binding estimates",
      "kind": "scoped-process",
      "description": "Table VII reports the original largest-volume rest/boost averages B_d=19.5(3.6)(3.1)(0.2) MeV and B_nn=15.9(2.7)(2.7)(0.2) MeV as estimates of infinite-volume binding at this flavor-symmetric parameter point. Their reported kappa_0 L values on the largest box are 6.3 and 5.7. These are the authors' conditional bound-state assignments, distinct from the finite-volume rest-frame shifts.",
      "claimIds": [
        "C-phys-beane2013-two-nucleon-binding"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
        },
        {
          "sourceId": "beane2013-nuclei",
          "locator": "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits"
        }
      ],
      "openObligations": [
        "The three uncertainties are statistical, fitting systematic and lattice-scale contributions, not a complete error budget. The original analysis and averaging covariance are not reproduced; common thresholds and scale prohibit treating channels or boosts as independent confirmation.",
        "These values do not establish current consensus, physical deuteron or dineutron binding, a continuum limit, quark-mass derivatives, nuclear lifetimes, saturation density or compressibility. One heavy-mass point cannot determine a universal quark-to-bulk response.",
        "Higher-body and hypernuclear channels are outside this admission. The original paper itself identifies unresolved cluster-state ambiguities for several such channels; their stronger summary language is not transferred to these records."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lattice-gauge-formulation-nuclear-lattice-energy-shift",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:nuclear-lattice-energy-shift",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared finite lattice, action and ensemble specify the regulator and common theory in which the channel energy and baryon threshold are compared.",
      "claimIds": [
        "D-phys-nuclear-lattice-energy-shift"
      ]
    },
    {
      "id": "physics:beane2013-nuclear-ensemble-context-beane2013-two-nucleon-shifts",
      "source": "phys:beane2013-nuclear-ensemble-context",
      "target": "phys:beane2013-two-nucleon-shifts",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fixed bare masses, action, volumes, configurations and adopted scale supply these same-theory finite-energy results.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-shifts"
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "physics:beane2013-nuclear-extraction-context-beane2013-two-nucleon-shifts",
      "source": "phys:beane2013-nuclear-extraction-context",
      "target": "phys:beane2013-two-nucleon-shifts",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared operators, correlated fits and common baryon threshold determine the reported rest-frame energy deficits.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-shifts"
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "physics:nuclear-lattice-energy-shift-beane2013-two-nucleon-shifts",
      "source": "phys:nuclear-lattice-energy-shift",
      "target": "phys:beane2013-two-nucleon-shifts",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The rest-frame threshold convention fixes the sign and distinguishes the deficit from an absolute mass or an established bound state.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-shifts"
      ],
      "contextIds": [
        "beane2013-nuclear-extraction"
      ]
    },
    {
      "id": "physics:beane2013-two-nucleon-shifts-beane2013-two-nucleon-binding",
      "source": "phys:beane2013-two-nucleon-shifts",
      "target": "phys:beane2013-two-nucleon-binding",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "These finite rest-frame deficits are among the shared inputs to the later binding interpretation; the largest-volume average also uses the declared boosted determinations.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-binding"
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "physics:beane2013-nuclear-binding-context-beane2013-two-nucleon-binding",
      "source": "phys:beane2013-nuclear-binding-context",
      "target": "phys:beane2013-two-nucleon-binding",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The assumed spectral identification and finite-volume/moving-system reasoning define the conditional original binding estimate.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-binding"
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "physics:beane2013-nuclear-extraction-context-beane2013-two-nucleon-binding",
      "source": "phys:beane2013-nuclear-extraction-context",
      "target": "phys:beane2013-two-nucleon-binding",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same fit procedure, baryon threshold and dispersion control supply the boosted and rest inputs, not an independent acquisition.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-binding"
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "physics:beane2013-nuclear-ensemble-context-beane2013-two-nucleon-binding",
      "source": "phys:beane2013-nuclear-ensemble-context",
      "target": "phys:beane2013-two-nucleon-binding",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The common action and heavy-mass parameter point delimit this estimate; the adopted spacing supplies its correlated physical-unit conversion.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-binding"
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    },
    {
      "id": "physics:nuclear-lattice-energy-shift-beane2013-two-nucleon-binding",
      "source": "phys:nuclear-lattice-energy-shift",
      "target": "phys:beane2013-two-nucleon-binding",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reference threshold and sign convention keep a finite deficit distinct from the additional infinite-volume binding interpretation.",
      "claimIds": [
        "M-phys-beane2013-two-nucleon-binding"
      ],
      "contextIds": [
        "beane2013-nuclear-binding"
      ]
    }
  ],
  "studies": [
    {
      "id": "beane2013-nuclear-ensemble",
      "sourceId": "beane2013-nuclei",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.87.034506",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "3",
      "pages": "034506",
      "system": "Three finite-volume nf=3 ensembles at one flavor-SU(3)-symmetric heavy-quark point",
      "preparation": "Use nf=3 degenerate dynamical quarks in SU(3) color gauge theory without electromagnetism, with tadpole-improved Luscher-Weisz gauge action and isotropic clover fermions. Table I specifies beta=6.1 and bare b*m_q=-0.2450 on 24^3 x 48, 32^3 x 48 and 48^3 x 64 lattices. The reported configuration counts are 3822, 3050 and 1905, with mean source counts per configuration 72, 48 and 54. The adopted Upsilon-spectrum spacing is b=0.1453(16) fm. The degenerate pseudoscalar mass is approximately 806 MeV, with common quark masses described as tuned near the physical strange mass.",
      "observable": "Shared gauge ensembles, bare mass and adopted scale",
      "finding": "The specified nf=3 heavy flavor-symmetric preparation at three volumes and one spacing.",
      "limitations": [
        "Flavor SU(3) degeneracy is distinct from the SU(3) color gauge symmetry. The up/down masses are unphysical; exact isospin and omitted QED prevent direct identification with measured physical nuclei.",
        "The negative quoted mass is the chosen bare Wilson/clover parameter, not a negative physical quark mass or an MSbar value at a specified renormalization scale. No such renormalized mass or detailed tuning reconstruction is provided here.",
        "The Upsilon scale is adopted from reference 32, a private communication; action tuning in reference 30 was in preparation. Their determinations are not independently reviewed. All channels share scale uncertainty; source locations on one configuration are not independent gauge ensembles. No physical-mass or continuum extrapolation is performed."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
        "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
        "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits",
        "Author v2 pages 32-35, Appendix B, Equations B1-B2 and references 30-32: noninteracting cluster estimates and unpublished scale/tuning provenance"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://link.aps.org/accepted/10.1103/PhysRevD.87.034506",
      "correctionCheck": "Latest arXiv version history and APS accepted-manuscript metadata checked. The distinct later variational review does not correct or reproduce this original fit; no exhaustive correction census or upstream scale/tuning replay is claimed."
    },
    {
      "id": "beane2013-nuclear-extraction",
      "sourceId": "beane2013-nuclei",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.87.034506",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "3",
      "pages": "034506",
      "system": "Three finite-volume nf=3 ensembles at one flavor-SU(3)-symmetric heavy-quark point",
      "preparation": "Construct Gaussian-smeared quark sources and point/smeared sinks, baryon blocks projected to sink momentum, and multibaryon operators localized at one source point with upper Dirac components. The deuteron channel has I=0, J^P=1+ and flavor irrep 10bar; the dineutron channel has I=1, J^P=0+ and irrep 27. Fit effective-energy plateaus by correlated constant fits and correlators by exponential fits, using jackknife or bootstrap covariance. Vary accepted fit intervals to estimate fitting systematics. The finite-volume octet-baryon energies supply the shared threshold subtraction.",
      "observable": "Rest-frame channel energy deficits and dispersion inputs",
      "finding": "For P=0 and the volumes 24^3 x 48, 32^3 x 48 and 48^3 x 64 in that order, Tables V-VII report B_L=-DeltaE_L of 25.4(2.6)(4.7)(0.3), 22.5(2.3)(2.6)(0.2) and 19.7(3.1)(4.1)(0.2) MeV in the deuteron channel, and 17.8(1.7)(2.8)(0.2), 15.1(2.0)(2.0)(0.2) and 13.1(2.8)(4.3)(0.2) MeV in the dineutron channel. Parentheses give statistical, fitting systematic and scale errors respectively.",
      "limitations": [
        "These are restricted interpolating operators and finite Euclidean-time fits, not direct detector energies or a complete variational determination of every state. SP/SS choices and plateau stability do not independently prove asymptotic ground-state isolation.",
        "The same correlators, configurations, threshold and scale are reused across energy shifts and the later binding interpretation. The original fit windows, full covariance, overlap amplitudes and boosted-subtraction implementation are not independently reconstructed.",
        "The reported errors separate statistical, fit-interval systematic and scale contributions. They do not constitute a complete physical-mass, continuum, operator-completeness or excited-state error budget."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v2 pages 3-6, Section II, Equation 1 and Tables I-II: flavor-symmetric ensembles, scale, sources and two-nucleon operators",
        "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
        "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://link.aps.org/accepted/10.1103/PhysRevD.87.034506",
      "correctionCheck": "Latest arXiv version history and APS accepted-manuscript metadata checked. The distinct later variational review does not correct or reproduce this original fit; no exhaustive correction census or upstream scale/tuning replay is claimed."
    },
    {
      "id": "beane2013-nuclear-binding",
      "sourceId": "beane2013-nuclei",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.87.034506",
      "journal": "Physical Review D",
      "volume": "87",
      "issue": "3",
      "pages": "034506",
      "system": "Three finite-volume nf=3 ensembles at one flavor-SU(3)-symmetric heavy-quark point",
      "preparation": "Compare rest and moving systems across volumes, using the separately fitted single-baryon dispersion as a control. For an assumed two-body bound state at sufficiently large L, Equation 5 gives kappa(L)=kappa_0+6Z_psi^2 exp(-kappa_0 L)/L+..., with nonrelativistic kappa_0 approximately sqrt(M_B B). The authors find no statistically resolved volume dependence between the two largest boxes and adopt the average of the largest-volume rest and two boosted determinations as their infinite-volume estimate; they do not obtain a refined extrapolation by fitting Equation 5.",
      "observable": "Conditional infinite-volume two-nucleon binding estimate",
      "finding": "Table VII reports the original largest-volume rest/boost averages B_d=19.5(3.6)(3.1)(0.2) MeV and B_nn=15.9(2.7)(2.7)(0.2) MeV as estimates of infinite-volume binding at this flavor-symmetric parameter point. Their reported kappa_0 L values on the largest box are 6.3 and 5.7. These are the authors' conditional bound-state assignments, distinct from the finite-volume rest-frame shifts.",
      "limitations": [
        "The bound-state finite-volume form presupposes the relevant pole and ground-state identification; lack of resolved volume dependence alone is not a proof of binding. A finite operator set and Euclidean-time range can leave unresolved excited-state or scattering contributions.",
        "The moving-system determinations share configurations and thresholds with the rest result. Single-hadron dispersion is a control, not a complete moving-frame multibaryon or spectral replay. Neither independent averaging nor an unpublished covariance model is supplied by the graph.",
        "This is the original conditional interpretation, not a consensus determination of the two-nucleon ground state. The later methodological/variational review remains a separate comparison and cannot be treated as an additional fit input to the 2013 analysis."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v2 pages 7-9, Section III, Equations 2-3 and Tables III-IV: shared single-hadron masses and dispersion fits",
        "Author v2 pages 9-13, Section IV, Equations 4-5, Tables V-VIII and Figures 4-5: two-baryon extraction, finite-volume shifts and binding estimates",
        "Author v2 pages 28-31, Section VIII and Table XVIII: stated quark-mass, continuum, operator and interpretation limits"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://link.aps.org/accepted/10.1103/PhysRevD.87.034506",
      "correctionCheck": "Latest arXiv version history and APS accepted-manuscript metadata checked. The distinct later variational review does not correct or reproduce this original fit; no exhaustive correction census or upstream scale/tuning replay is claimed."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:nuclear-lattice-energy-shift",
      "role": "definition",
      "denotes": "A rest-frame finite-volume energy difference and sign convention relative to the same-ensemble two-baryon threshold.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-nuclear-lattice-energy-shift"
      ]
    },
    {
      "nodeId": "phys:beane2013-nuclear-ensemble-context",
      "role": "model-context",
      "denotes": "The fixed action, flavor-degenerate bare masses, three finite volumes, common sampling and adopted physical scale.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-beane2013-nuclear-ensemble-context"
      ]
    },
    {
      "nodeId": "phys:beane2013-nuclear-extraction-context",
      "role": "model-context",
      "denotes": "The restricted two-nucleon operators, correlated energy fits and shared single-baryon threshold.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-beane2013-nuclear-extraction-context"
      ]
    },
    {
      "nodeId": "phys:beane2013-two-nucleon-shifts",
      "role": "scoped-phenomenon",
      "denotes": "Published rest-frame fitted two-nucleon deficits on each finite lattice, before the separate infinite-volume binding interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-beane2013-two-nucleon-shifts"
      ]
    },
    {
      "nodeId": "phys:beane2013-nuclear-binding-context",
      "role": "model-context",
      "denotes": "The original finite-volume and moving-system reasoning used to interpret fitted shifts as a two-nucleon binding estimate.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-beane2013-nuclear-binding-context"
      ]
    },
    {
      "nodeId": "phys:beane2013-two-nucleon-binding",
      "role": "scoped-phenomenon",
      "denotes": "The historical, source-reported two-nucleon binding interpretation at one unphysical mass point, with its finite-state and extrapolation assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-beane2013-two-nucleon-binding"
      ]
    }
  ]
};

/** Preserve finite energy shifts, common inputs and the original conditional binding inference. */
export function validateNuclearLatticeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Nuclear lattice ${kind} changed ${id}: preserve the ensemble, threshold and conditional inference`);
    }
  }
}
