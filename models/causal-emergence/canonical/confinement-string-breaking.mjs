import assert from "node:assert/strict";

export const CONFINEMENT_STRING_BREAKING_CHECKS = new Map();
export const CONFINEMENT_STRING_BREAKING_ANALYTICAL_SOURCES = new Map();
export const CONFINEMENT_STRING_BREAKING_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "bulava2019-ensemble-context",
      "M-phys-bulava2019-ensemble-context",
      [
        "bulava2019-ensemble"
      ]
    ],
    [
      "bulava2019-spectral-context",
      "M-phys-bulava2019-spectral-context",
      [
        "bulava2019-spectrum"
      ]
    ],
    [
      "bulava2019-mixing-context",
      "M-phys-bulava2019-mixing-context",
      [
        "bulava2019-mixing"
      ]
    ]
  ],
  "observations": [
    [
      "bulava2019-relative-spectrum",
      "C-phys-bulava2019-relative-spectrum",
      [
        "bulava2019-spectrum"
      ]
    ],
    [
      "bulava2019-string-breaking-scales",
      "C-phys-bulava2019-string-breaking-scales",
      [
        "bulava2019-mixing"
      ]
    ]
  ],
  "dependencies": [
    [
      "bulava2019-ensemble-context-bulava2019-relative-spectrum",
      "bulava2019-ensemble-context",
      "bulava2019-relative-spectrum",
      "M-phys-bulava2019-relative-spectrum",
      "interpretation-dependency"
    ],
    [
      "bulava2019-spectral-context-bulava2019-relative-spectrum",
      "bulava2019-spectral-context",
      "bulava2019-relative-spectrum",
      "M-phys-bulava2019-relative-spectrum",
      "interpretation-dependency"
    ],
    [
      "static-light-string-basis-bulava2019-relative-spectrum",
      "static-light-string-basis",
      "bulava2019-relative-spectrum",
      "M-phys-bulava2019-relative-spectrum",
      "interpretation-dependency"
    ],
    [
      "bulava2019-relative-spectrum-bulava2019-string-breaking-scales",
      "bulava2019-relative-spectrum",
      "bulava2019-string-breaking-scales",
      "M-phys-bulava2019-string-breaking-scales",
      "interpretation-dependency"
    ],
    [
      "bulava2019-mixing-context-bulava2019-string-breaking-scales",
      "bulava2019-mixing-context",
      "bulava2019-string-breaking-scales",
      "M-phys-bulava2019-string-breaking-scales",
      "interpretation-dependency"
    ],
    [
      "bulava2019-ensemble-context-bulava2019-string-breaking-scales",
      "bulava2019-ensemble-context",
      "bulava2019-string-breaking-scales",
      "M-phys-bulava2019-string-breaking-scales",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "bulava2019-ensemble",
    "bulava2019-spectrum",
    "bulava2019-mixing"
  ],
  "comparisonIds": [
    "bulava2019-crossing-definition"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "bulava2019-string-breaking",
      "kind": "research-publication",
      "title": "String breaking by light and strange quarks in QCD",
      "authors": [
        "John Bulava",
        "Ben Hörz",
        "Francesco Knechtli",
        "Vanessa Koch",
        "Graham Moir",
        "Colin Morningstar",
        "Mike Peardon"
      ],
      "year": 2019,
      "doi": "10.1016/j.physletb.2019.05.018",
      "url": "https://findresearcher.sdu.dk/ws/portalfiles/portal/154786868/1_s2.0_S0370269319303284_main.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-published-article",
        "locators": [
          "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        ],
        "limit": "Read all six published pages 493-498 in the SDU copy (PDF pages 2-7 after its cover); visually checked Equations 1-10, Table 1 and Figures 1-3 on pages 494-496. The quarkonium illustration is not admitted. Ensemble generation, adopted scale, upstream methods, configurations, correlators and analysis code are not independently reproduced. This is the 2019 single-ensemble result, not a review of later mass-dependence studies."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-bulava2019-ensemble-context",
      "kind": "method",
      "statement": "Use the N200 CLS ensemble with Nf=2+1 nonperturbatively O(a)-improved Wilson sea quarks, 128 x 48^3 sites, m_pi=280 MeV and m_K=460 MeV. Open temporal boundaries restrict measurements to the central half. Wilson loops on 1664 configurations are averaged into 104 bins aligned with the 104-configuration subset carrying light/strange propagators. The adopted spacing is a=0.06426(76) fm.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is one finite lattice and mass point: light quarks are heavier and the strange quark lighter than in nature. No physical-mass, continuum or infinite-volume extrapolation is supplied.",
        "The configurations, bins and propagator subset are shared inputs, not independent experiments. The quoted lattice scale is adopted from reference 29; its upstream determination is not replayed."
      ],
      "contextIds": [
        "bulava2019-ensemble"
      ]
    },
    {
      "id": "M-phys-bulava2019-spectral-context",
      "kind": "method",
      "statement": "For external static Q and Qbar at fixed separation, combine a string interpolator, an I=0 two-static-light-meson interpolator and a two-static-strange-meson interpolator in the Sigma_g^+ sector after heavy-spin decoupling. Two string smearings (15 and 20 levels) make the variational matrix 4 x 4. HYP2 links and stochastic LapH quark propagators supply the correlators. With t0/a=5 and td/a=10, the fixed GEVP rotation gives C_hat_nn(t); correlated single-exponential fits to C_hat_nn(t)/C_B(t)^2 extract V_n(r)-2E_B.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The three physical channels in Equation 3 are not the four-operator numerical basis or four observed energy levels. Operator overlaps and smearing do not measure particle populations.",
        "Subtracting twice the static-light energy removes the common divergent static-source mass contribution. The zero is a reference threshold, not an absolute static-quark mass.",
        "The paper uses 800 bootstrap resamples and one fixed covariance estimate for these exponential fits. Basis/time variations probe residual excited-state effects; omitted states and the full correlator/covariance analysis are not independently reconstructed."
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "C-phys-bulava2019-relative-spectrum",
      "kind": "review-finding",
      "statement": "Figures 1-2 report the lowest three relative static energies V_n(r)-2E_B, n=0,1,2. They display light- and strange-channel avoided crossings; beyond the breaking region the ground level approaches the two-static-light threshold. The separately estimated two-static-strange threshold is 2E_Bs-2E_B=0.028(5)/a=85(16) MeV. Off-axis separations resolve the narrow strange-channel mixing region.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "supports",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "supports",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "supports",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are fitted Euclidean energies from one shared computational ensemble, with reported one-sigma bootstrap errors, not independent detector events or a locally reproduced numerical spectrum.",
        "Threshold saturation describes screening of external sources by color-singlet meson pairs. It supplies no isolated colored asymptotic particle, real-time pair-production rate or proof of continuum confinement. A rising unbroken-string branch is not indefinite growth of the screened ground-state energy."
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "M-phys-bulava2019-mixing-context",
      "kind": "method",
      "statement": "Fit the three extracted levels over 11<=r/a<=25 to eigenvalues of H(r)=[[V_hat0+sigma*r,g1,g2],[g1,E_hat1,0],[g2,0,E_hat2]], using an uncorrelated six-parameter fit. E_hat1, E_hat2, g1 and g2 are constant in r. Define r_c by V_hat0+sigma*r_c=E_hat1 and r_cs by V_hat0+sigma*r_cs=E_hat2; these are diagonal-branch crossing conventions.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This model fit is distinct from the preceding correlated exponential fits. Its basis convention sets direct light-pair/strange-pair mixing to zero; the energy spectrum alone cannot identify that matrix element as a physical absence of interaction.",
        "The fitted diagonal constants approximate asymptotic levels; they are not replacements for the separately estimated two-meson thresholds. The linear string branch is fitted near breaking, not a small-distance potential or the full screened ground state.",
        "A minimum of V_1-V_0 need not exist here. These distances cannot be substituted for the Bali two-flavor minimum-gap definition to infer sea-quark-mass dependence. No real-time decay width follows from g1 or g2."
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    },
    {
      "id": "C-phys-bulava2019-string-breaking-scales",
      "kind": "review-finding",
      "statement": "The three-state fit reports a*E_hat1=0.0019(2), a*E_hat2=0.0262(6), a*g1=0.0154(4), a*g2=0.0080(5), a^2*sigma=0.0229(3) and a*V_hat0=-0.434(5). Under its diagonal-crossing definition, r_c/a=19.053(82) and r_cs/a=20.114(87), converted to 1.224(15) fm and 1.293(16) fm using a=0.06426(76) fm.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "supports",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted physical-distance errors include the adopted scale uncertainty; all levels, model parameters and distances reuse the same ensemble and fits. Rounded parameter values do not reproduce the fit or its covariance.",
        "These are conditional 2019 single-ensemble scales, not universal confinement radii, particle-number minima or physical-mass/continuum predictions. The source does not provide a nuclear/atomic stability derivation, real-time string-breaking rate or unrestricted hadron-formation mechanism."
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    },
    {
      "id": "M-phys-bulava2019-relative-spectrum",
      "kind": "method",
      "statement": "The N200 sampling and extended static string/light/strange operator basis, followed by the stated variational ratio fits, define the three relative energy estimates and screening interpretation.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Publication-reported Euclidean calculation; no local ensemble, correlator, bootstrap or energy-fit replay."
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "M-phys-bulava2019-string-breaking-scales",
      "kind": "method",
      "statement": "The relative spectrum and the declared three-state model define the fitted parameters and crossing distances; the adopted N200 spacing supplies the physical-unit conversion.",
      "scope": "Publication-reported static-source energies and three-state interpretation on the single Nf=2+1 CLS N200 ensemble.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits",
          "role": "method",
          "note": "Supports this ensemble, extraction or conditional model result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The model and scale are explicit inputs. The distances are not additional experiments or minima of the observed ground-to-first energy gap."
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:bulava2019-ensemble-context",
      "name": "Bulava N200 static-source ensemble",
      "kind": "context",
      "description": "Use the N200 CLS ensemble with Nf=2+1 nonperturbatively O(a)-improved Wilson sea quarks, 128 x 48^3 sites, m_pi=280 MeV and m_K=460 MeV. Open temporal boundaries restrict measurements to the central half. Wilson loops on 1664 configurations are averaged into 104 bins aligned with the 104-configuration subset carrying light/strange propagators. The adopted spacing is a=0.06426(76) fm.",
      "claimIds": [
        "M-phys-bulava2019-ensemble-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        }
      ],
      "openObligations": [
        "This is one finite lattice and mass point: light quarks are heavier and the strange quark lighter than in nature. No physical-mass, continuum or infinite-volume extrapolation is supplied.",
        "The configurations, bins and propagator subset are shared inputs, not independent experiments. The quoted lattice scale is adopted from reference 29; its upstream determination is not replayed."
      ]
    },
    {
      "id": "phys:bulava2019-spectral-context",
      "name": "Bulava variational static-energy extraction",
      "kind": "context",
      "description": "For external static Q and Qbar at fixed separation, combine a string interpolator, an I=0 two-static-light-meson interpolator and a two-static-strange-meson interpolator in the Sigma_g^+ sector after heavy-spin decoupling. Two string smearings (15 and 20 levels) make the variational matrix 4 x 4. HYP2 links and stochastic LapH quark propagators supply the correlators. With t0/a=5 and td/a=10, the fixed GEVP rotation gives C_hat_nn(t); correlated single-exponential fits to C_hat_nn(t)/C_B(t)^2 extract V_n(r)-2E_B.",
      "claimIds": [
        "M-phys-bulava2019-spectral-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations"
        }
      ],
      "openObligations": [
        "The three physical channels in Equation 3 are not the four-operator numerical basis or four observed energy levels. Operator overlaps and smearing do not measure particle populations.",
        "Subtracting twice the static-light energy removes the common divergent static-source mass contribution. The zero is a reference threshold, not an absolute static-quark mass.",
        "The paper uses 800 bootstrap resamples and one fixed covariance estimate for these exponential fits. Basis/time variations probe residual excited-state effects; omitted states and the full correlator/covariance analysis are not independently reconstructed."
      ]
    },
    {
      "id": "phys:bulava2019-relative-spectrum",
      "name": "Bulava light and strange screening spectrum",
      "kind": "scoped-process",
      "description": "Figures 1-2 report the lowest three relative static energies V_n(r)-2E_B, n=0,1,2. They display light- and strange-channel avoided crossings; beyond the breaking region the ground level approaches the two-static-light threshold. The separately estimated two-static-strange threshold is 2E_Bs-2E_B=0.028(5)/a=85(16) MeV. Off-axis separations resolve the narrow strange-channel mixing region.",
      "claimIds": [
        "C-phys-bulava2019-relative-spectrum"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        }
      ],
      "openObligations": [
        "These are fitted Euclidean energies from one shared computational ensemble, with reported one-sigma bootstrap errors, not independent detector events or a locally reproduced numerical spectrum.",
        "Threshold saturation describes screening of external sources by color-singlet meson pairs. It supplies no isolated colored asymptotic particle, real-time pair-production rate or proof of continuum confinement. A rising unbroken-string branch is not indefinite growth of the screened ground-state energy."
      ]
    },
    {
      "id": "phys:bulava2019-mixing-context",
      "name": "Bulava three-state mixing model",
      "kind": "context",
      "description": "Fit the three extracted levels over 11<=r/a<=25 to eigenvalues of H(r)=[[V_hat0+sigma*r,g1,g2],[g1,E_hat1,0],[g2,0,E_hat2]], using an uncorrelated six-parameter fit. E_hat1, E_hat2, g1 and g2 are constant in r. Define r_c by V_hat0+sigma*r_c=E_hat1 and r_cs by V_hat0+sigma*r_cs=E_hat2; these are diagonal-branch crossing conventions.",
      "claimIds": [
        "M-phys-bulava2019-mixing-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        }
      ],
      "openObligations": [
        "This model fit is distinct from the preceding correlated exponential fits. Its basis convention sets direct light-pair/strange-pair mixing to zero; the energy spectrum alone cannot identify that matrix element as a physical absence of interaction.",
        "The fitted diagonal constants approximate asymptotic levels; they are not replacements for the separately estimated two-meson thresholds. The linear string branch is fitted near breaking, not a small-distance potential or the full screened ground state.",
        "A minimum of V_1-V_0 need not exist here. These distances cannot be substituted for the Bali two-flavor minimum-gap definition to infer sea-quark-mass dependence. No real-time decay width follows from g1 or g2."
      ]
    },
    {
      "id": "phys:bulava2019-string-breaking-scales",
      "name": "Bulava conditional string-breaking scales",
      "kind": "scoped-process",
      "description": "The three-state fit reports a*E_hat1=0.0019(2), a*E_hat2=0.0262(6), a*g1=0.0154(4), a*g2=0.0080(5), a^2*sigma=0.0229(3) and a*V_hat0=-0.434(5). Under its diagonal-crossing definition, r_c/a=19.053(82) and r_cs/a=20.114(87), converted to 1.224(15) fm and 1.293(16) fm using a=0.06426(76) fm.",
      "claimIds": [
        "C-phys-bulava2019-string-breaking-scales"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
        }
      ],
      "openObligations": [
        "The quoted physical-distance errors include the adopted scale uncertainty; all levels, model parameters and distances reuse the same ensemble and fits. Rounded parameter values do not reproduce the fit or its covariance.",
        "These are conditional 2019 single-ensemble scales, not universal confinement radii, particle-number minima or physical-mass/continuum predictions. The source does not provide a nuclear/atomic stability derivation, real-time string-breaking rate or unrestricted hadron-formation mechanism."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:bulava2019-ensemble-context-bulava2019-relative-spectrum",
      "source": "phys:bulava2019-ensemble-context",
      "target": "phys:bulava2019-relative-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared common ensemble and aligned correlation-function sampling supply this finite-lattice spectrum.",
      "claimIds": [
        "M-phys-bulava2019-relative-spectrum"
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "physics:bulava2019-spectral-context-bulava2019-relative-spectrum",
      "source": "phys:bulava2019-spectral-context",
      "target": "phys:bulava2019-relative-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The four-operator rotation and correlated ratio fits extract energies relative to twice the static-light meson energy.",
      "claimIds": [
        "M-phys-bulava2019-relative-spectrum"
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "physics:static-light-string-basis-bulava2019-relative-spectrum",
      "source": "phys:static-light-string-basis",
      "target": "phys:bulava2019-relative-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The static string/two-light-meson construction is extended here by a strange-meson pair and a second string smearing; the old two-flavor spectrum is not reused as numerical input.",
      "claimIds": [
        "M-phys-bulava2019-relative-spectrum"
      ],
      "contextIds": [
        "bulava2019-spectrum"
      ]
    },
    {
      "id": "physics:bulava2019-relative-spectrum-bulava2019-string-breaking-scales",
      "source": "phys:bulava2019-relative-spectrum",
      "target": "phys:bulava2019-string-breaking-scales",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same three extracted levels are inputs to the later six-parameter model fit.",
      "claimIds": [
        "M-phys-bulava2019-string-breaking-scales"
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    },
    {
      "id": "physics:bulava2019-mixing-context-bulava2019-string-breaking-scales",
      "source": "phys:bulava2019-mixing-context",
      "target": "phys:bulava2019-string-breaking-scales",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared model and diagonal-crossing convention define these conditional scales.",
      "claimIds": [
        "M-phys-bulava2019-string-breaking-scales"
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    },
    {
      "id": "physics:bulava2019-ensemble-context-bulava2019-string-breaking-scales",
      "source": "phys:bulava2019-ensemble-context",
      "target": "phys:bulava2019-string-breaking-scales",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted N200 spacing and its uncertainty convert fitted lattice-unit distances to femtometres.",
      "claimIds": [
        "M-phys-bulava2019-string-breaking-scales"
      ],
      "contextIds": [
        "bulava2019-mixing"
      ]
    }
  ],
  "studies": [
    {
      "id": "bulava2019-ensemble",
      "sourceId": "bulava2019-string-breaking",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2019.05.018",
      "journal": "Physics Letters B",
      "volume": "793",
      "issue": "",
      "pages": "493-498",
      "system": "Static color sources in the Nf=2+1 CLS N200 lattice ensemble",
      "preparation": "Use the N200 CLS ensemble with Nf=2+1 nonperturbatively O(a)-improved Wilson sea quarks, 128 x 48^3 sites, m_pi=280 MeV and m_K=460 MeV. Open temporal boundaries restrict measurements to the central half. Wilson loops on 1664 configurations are averaged into 104 bins aligned with the 104-configuration subset carrying light/strange propagators. The adopted spacing is a=0.06426(76) fm.",
      "observable": "Shared static-source correlation-function ensemble and scale",
      "finding": "The chosen finite N200 computational preparation.",
      "limitations": [
        "This is one finite lattice and mass point: light quarks are heavier and the strange quark lighter than in nature. No physical-mass, continuum or infinite-volume extrapolation is supplied.",
        "The configurations, bins and propagator subset are shared inputs, not independent experiments. The quoted lattice scale is adopted from reference 29; its upstream determination is not replayed."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
        "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2019.05.018",
      "correctionCheck": "Published journal copy and institutional publication record checked; no exhaustive correction or later-result census. No upstream ensemble/scale or numerical-analysis replay."
    },
    {
      "id": "bulava2019-spectrum",
      "sourceId": "bulava2019-string-breaking",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2019.05.018",
      "journal": "Physics Letters B",
      "volume": "793",
      "issue": "",
      "pages": "493-498",
      "system": "Static color sources in the Nf=2+1 CLS N200 lattice ensemble",
      "preparation": "For external static Q and Qbar at fixed separation, combine a string interpolator, an I=0 two-static-light-meson interpolator and a two-static-strange-meson interpolator in the Sigma_g^+ sector after heavy-spin decoupling. Two string smearings (15 and 20 levels) make the variational matrix 4 x 4. HYP2 links and stochastic LapH quark propagators supply the correlators. With t0/a=5 and td/a=10, the fixed GEVP rotation gives C_hat_nn(t); correlated single-exponential fits to C_hat_nn(t)/C_B(t)^2 extract V_n(r)-2E_B.",
      "observable": "V_n(r)-2E_B for n=0,1,2 and the two-meson threshold difference",
      "finding": "Figures 1-2 report the lowest three relative static energies V_n(r)-2E_B, n=0,1,2. They display light- and strange-channel avoided crossings; beyond the breaking region the ground level approaches the two-static-light threshold. The separately estimated two-static-strange threshold is 2E_Bs-2E_B=0.028(5)/a=85(16) MeV. Off-axis separations resolve the narrow strange-channel mixing region.",
      "limitations": [
        "The three physical channels in Equation 3 are not the four-operator numerical basis or four observed energy levels. Operator overlaps and smearing do not measure particle populations.",
        "Subtracting twice the static-light energy removes the common divergent static-source mass contribution. The zero is a reference threshold, not an absolute static-quark mass.",
        "The paper uses 800 bootstrap resamples and one fixed covariance estimate for these exponential fits. Basis/time variations probe residual excited-state effects; omitted states and the full correlator/covariance analysis are not independently reconstructed."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
        "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
        "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2019.05.018",
      "correctionCheck": "Published journal copy and institutional publication record checked; no exhaustive correction or later-result census. No upstream ensemble/scale or numerical-analysis replay."
    },
    {
      "id": "bulava2019-mixing",
      "sourceId": "bulava2019-string-breaking",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physletb.2019.05.018",
      "journal": "Physics Letters B",
      "volume": "793",
      "issue": "",
      "pages": "493-498",
      "system": "Static color sources in the Nf=2+1 CLS N200 lattice ensemble",
      "preparation": "Fit the three extracted levels over 11<=r/a<=25 to eigenvalues of H(r)=[[V_hat0+sigma*r,g1,g2],[g1,E_hat1,0],[g2,0,E_hat2]], using an uncorrelated six-parameter fit. E_hat1, E_hat2, g1 and g2 are constant in r. Define r_c by V_hat0+sigma*r_c=E_hat1 and r_cs by V_hat0+sigma*r_cs=E_hat2; these are diagonal-branch crossing conventions.",
      "observable": "Six model parameters and diagonal-branch crossing distances",
      "finding": "The three-state fit reports a*E_hat1=0.0019(2), a*E_hat2=0.0262(6), a*g1=0.0154(4), a*g2=0.0080(5), a^2*sigma=0.0229(3) and a*V_hat0=-0.434(5). Under its diagonal-crossing definition, r_c/a=19.053(82) and r_cs/a=20.114(87), converted to 1.224(15) fm and 1.293(16) fm using a=0.06426(76) fm.",
      "limitations": [
        "This model fit is distinct from the preceding correlated exponential fits. Its basis convention sets direct light-pair/strange-pair mixing to zero; the energy spectrum alone cannot identify that matrix element as a physical absence of interaction.",
        "The fitted diagonal constants approximate asymptotic levels; they are not replacements for the separately estimated two-meson thresholds. The linear string branch is fitted near breaking, not a small-distance potential or the full screened ground state.",
        "A minimum of V_1-V_0 need not exist here. These distances cannot be substituted for the Bali two-flavor minimum-gap definition to infer sea-quark-mass dependence. No real-time decay width follows from g1 or g2."
      ],
      "readExtent": "full-primary-published-article",
      "reviewedLocators": [
        "Published page 495, Section 3 and Figure 1: three relative energy levels, two-meson thresholds and variational limitations",
        "Published pages 495-497, Section 4, Equations 7-10 and Figures 2-3; Section 5: three-state fit, crossing-distance convention, scale and physical limits"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://doi.org/10.1016/j.physletb.2019.05.018",
      "correctionCheck": "Published journal copy and institutional publication record checked; no exhaustive correction or later-result census. No upstream ensemble/scale or numerical-analysis replay."
    }
  ],
  "comparisons": [
    {
      "id": "bulava2019-crossing-definition",
      "candidate": "Define the two breaking scales by crossings of the fitted unmixed string branch and its light/strange asymptotic branches.",
      "alternative": "Identify the light breaking distance with a minimum of the lowest energy gap, as in a two-level treatment.",
      "sourceIds": [
        "bulava2019-string-breaking"
      ],
      "claimIds": [
        "M-phys-bulava2019-mixing-context",
        "C-phys-bulava2019-string-breaking-scales"
      ],
      "discriminator": "Figure 3 reports no minimum of V_1-V_0 in this three-level case; Equations 7-10 specify a different operational definition.",
      "result": "conditional-support",
      "limit": "This compares distance conventions for the reported spectrum, not universal confinement theories. Different flavors, masses and definitions prevent a sea-mass trend from the Bali comparison.",
      "assumptions": [
        "Use the reported finite-ensemble spectrum and the constant-parameter three-state model in its fitted separation range."
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:bulava2019-ensemble-context",
      "role": "model-context",
      "denotes": "The finite N200 sea-quark ensemble, common sampling and adopted lattice scale.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bulava2019-ensemble-context"
      ]
    },
    {
      "nodeId": "phys:bulava2019-spectral-context",
      "role": "model-context",
      "denotes": "The extended operator basis, relative-energy observable and correlated Euclidean extraction.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bulava2019-spectral-context"
      ]
    },
    {
      "nodeId": "phys:bulava2019-relative-spectrum",
      "role": "scoped-phenomenon",
      "denotes": "The three reported static-energy levels relative to the common two-static-light threshold.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bulava2019-relative-spectrum"
      ]
    },
    {
      "nodeId": "phys:bulava2019-mixing-context",
      "role": "model-context",
      "denotes": "The specified six-parameter model and its diagonal-crossing distance convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bulava2019-mixing-context"
      ]
    },
    {
      "nodeId": "phys:bulava2019-string-breaking-scales",
      "role": "scoped-phenomenon",
      "denotes": "Reported model parameters and light/strange crossing distances on the same ensemble.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bulava2019-string-breaking-scales"
      ]
    }
  ]
};

/** Keep the finite static spectrum separate from its conditional three-state model. */
export function validateConfinementStringBreakingContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `String-breaking ${kind} changed ${id}: preserve the ensemble, extraction and model boundary`);
    }
  }
}
