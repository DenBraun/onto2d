import assert from "node:assert/strict";

export const GLUON_FLUX_CHECKS = new Map();
export const GLUON_FLUX_ANALYTICAL_SOURCES = new Map();
export const GLUON_FLUX_ADMISSION = {
  "definitions": [
    [
      "phys:static-source-plaquette-density",
      "D-phys-static-source-plaquette-density"
    ],
    [
      "phys:transverse-flux-width",
      "D-phys-transverse-flux-width"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lattice-gauge-formulation-static-source-plaquette-density",
      [
        "phys:lattice-gauge-formulation",
        "phys:static-source-plaquette-density"
      ]
    ],
    [
      "physics:wilson-loop-static-source-plaquette-density",
      [
        "phys:wilson-loop",
        "phys:static-source-plaquette-density"
      ]
    ],
    [
      "physics:static-source-plaquette-density-transverse-flux-width",
      [
        "phys:static-source-plaquette-density",
        "phys:transverse-flux-width"
      ]
    ]
  ],
  "contexts": [
    [
      "bali1995-flux-ensemble-context",
      "M-phys-bali1995-flux-ensemble-context",
      [
        "bali1995-flux-ensemble"
      ]
    ],
    [
      "bali1995-field-extraction-context",
      "M-phys-bali1995-field-extraction-context",
      [
        "bali1995-field-extraction"
      ]
    ],
    [
      "bali1995-profile-inference-context",
      "M-phys-bali1995-profile-inference-context",
      [
        "bali1995-profile-inference"
      ]
    ]
  ],
  "observations": [
    [
      "bali1995-field-profiles",
      "C-phys-bali1995-field-profiles",
      [
        "bali1995-field-extraction"
      ]
    ],
    [
      "bali1995-profile-widths",
      "C-phys-bali1995-profile-widths",
      [
        "bali1995-profile-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "bali1995-flux-ensemble-context-bali1995-field-profiles",
      "bali1995-flux-ensemble-context",
      "bali1995-field-profiles",
      "M-phys-bali1995-field-profiles",
      "interpretation-dependency"
    ],
    [
      "bali1995-field-extraction-context-bali1995-field-profiles",
      "bali1995-field-extraction-context",
      "bali1995-field-profiles",
      "M-phys-bali1995-field-profiles",
      "interpretation-dependency"
    ],
    [
      "static-source-plaquette-density-bali1995-field-profiles",
      "static-source-plaquette-density",
      "bali1995-field-profiles",
      "M-phys-bali1995-field-profiles",
      "interpretation-dependency"
    ],
    [
      "bali1995-field-profiles-bali1995-profile-widths",
      "bali1995-field-profiles",
      "bali1995-profile-widths",
      "M-phys-bali1995-profile-widths",
      "interpretation-dependency"
    ],
    [
      "bali1995-profile-inference-context-bali1995-profile-widths",
      "bali1995-profile-inference-context",
      "bali1995-profile-widths",
      "M-phys-bali1995-profile-widths",
      "interpretation-dependency"
    ],
    [
      "bali1995-flux-ensemble-context-bali1995-profile-widths",
      "bali1995-flux-ensemble-context",
      "bali1995-profile-widths",
      "M-phys-bali1995-profile-widths",
      "interpretation-dependency"
    ],
    [
      "bali1995-field-extraction-context-bali1995-profile-widths",
      "bali1995-field-extraction-context",
      "bali1995-profile-widths",
      "M-phys-bali1995-profile-widths",
      "interpretation-dependency"
    ],
    [
      "transverse-flux-width-bali1995-profile-widths",
      "transverse-flux-width",
      "bali1995-profile-widths",
      "M-phys-bali1995-profile-widths",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "bali1995-flux-ensemble",
    "bali1995-field-extraction",
    "bali1995-profile-inference"
  ],
  "comparisonIds": [
    "bali1995-width-dependence"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "bali1995-flux",
      "kind": "research-publication",
      "title": "Observing Long Colour Flux Tubes in SU(2) Lattice Gauge Theory",
      "authors": [
        "G. S. Bali",
        "K. Schilling",
        "Ch. Schlichter"
      ],
      "year": 1995,
      "doi": "10.1103/PhysRevD.51.5165",
      "url": "https://arxiv.org/abs/hep-lat/9409005v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-report-passages",
        "locators": [
          "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
          "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        ],
        "limit": "Read the listed scientific passages of the 66-page extended author report hep-lat/9409005v1 (7 September 1994), published in Physical Review D 51, 5165-5198 (1995). Visually checked PDF pages 4-5, 10-12, 17, 30, 36, 47 and 49-53. The publisher text, appendices and upstream scale/beta-function determinations are not fully reviewed. The selected author version has conflicting scale expressions and names an FWHM formula a half width; those discrepancies are retained. No configurations, covariance fits, tail extrapolations or continuum result are independently reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-static-source-plaquette-density",
      "kind": "review-finding",
      "statement": "For a smeared traced Wilson source W(R,T) and an unsmeared normalized plaquette P_mu_nu=(1/2)Tr[ordered elementary plaquette link product], define C_mu_nu=<W[P(T/2+S)+P(T/2-S)]/2>/<W>-<P>. The reference is the vacuum plaquette expectation. In the large-T projection and leading plaquette matching, E_R,i=(2 beta/a^4) C_i4 and B_R,i=-(2 beta/a^4) C_jk, with |epsilon_ijk|=1. These denote differences of color-contracted squared components between the static-source ground state and vacuum. Sum spatial components to define energy contrast epsilon_R=(E_R+B_R)/2 and action contrast sigma_R=(E_R-B_R)/2.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the source Minkowski sign convention eta=diag(1,-1,-1,-1), beta=4/g^2 and densities of dimension length^-4. A negative subtracted magnetic contrast does not mean a negative absolute squared field. Squared-component expectations determine neither field-vector directions nor individual gluons.",
        "The product of separately traced operators is essential; it is not a single trace with connecting Wilson lines. Source smearing improves ground-state overlap; the local plaquette probe remains unsmeared.",
        "The finite-a plaquette conversion and finite-T projection are approximations. Action-density normalization has an anomalous beta-function factor, and energy sum-rule matching is not an exact common renormalization of both densities. No gauge-invariant vacuum condensate or continuum local-field magnitude is inferred."
      ]
    },
    {
      "id": "D-phys-transverse-flux-width",
      "kind": "review-finding",
      "statement": "For a positive central action profile sigma_R(0,n_perp), a nonzero denominator and a declared transverse cutoff n_cut, define delta_cut^2=integral_0^n_cut dn n^3 sigma_R(0,n)/integral_0^n_cut dn n sigma_R(0,n). The physical cutoff radial rms is a delta_cut. Separately, let d denote the full-plane model rms parameter in the Gaussian and dipole profiles of Equations 59-60. Their full widths at half maximum are rho=2 d sqrt(ln 2) and rho=2 d sqrt(2^(1/3)-1), respectively; physical FWHM is a rho.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The cutoff rms, full-plane fitted parameter d and geometric estimate delta_geom are distinct constructions. Finite n_cut generally makes delta_cut unequal to d even for an exact model profile. Unmeasured tails and extrapolation assumptions control their relation; FWHM is not a radial rms.",
        "The selected author version calls rho a half width, but Equations 72-73 give the full width at half maximum. Preserve that naming conflict instead of dividing the reported rho by two.",
        "Positivity, finite moments and transverse rotational symmetry are conditions of these width constructions, not properties guaranteed for every noisy estimator or arbitrary vacuum-subtracted operator. No universal QCD flux-tube radius is defined."
      ]
    },
    {
      "id": "M-phys-bali1995-flux-ensemble-context",
      "kind": "method",
      "statement": "Simulate pure SU(2) Wilson gauge theory without sea quarks, with periodic boundaries and external static fundamental Q and Qbar. Table 1 specifies beta=2.5 on 16^4 and 32^4 sites, beta=2.635 on 48^3 x 64, and beta=2.74 on 32^4. The printed spacings are a=0.0826(5), 0.0826(14), 0.0541(2) and 0.0408(2) fm in that order. Field measurements number 8680, 2046, 248 and 670 respectively; Wilson-loop and vacuum-plaquette sample counts can differ. Spatial source smearing and time-link integration improve overlap and noise. With dimensionless fitted tension K=a^2 kappa, the adopted sqrt(kappa)=440 MeV supplies only an orientation for physical units.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are quenched two-color finite ensembles, not physical SU(3) QCD with dynamical quarks. Monte Carlo updates and Euclidean source preparation do not simulate real-time self-organization.",
        "Table 1 prints sqrt(K)*a=440 MeV and printed page 4 prints kappa=K*a^2; printed page 23 instead uses the dimensionally consistent a^2=K/kappa. The graph uses the latter convention, preserving the author-version conflict without claiming a numerical error in the original fits. The quoted spacings are table inputs, not an independent reconciliation of its reciprocal-scale columns.",
        "The adopted real-world scale and the beta-function interpolation, partly using earlier studies, are not independently reconstructed. Finite lattice spacings, volumes and source separations do not constitute a physical-QCD or continuum extrapolation."
      ],
      "contextIds": [
        "bali1995-flux-ensemble"
      ]
    },
    {
      "id": "M-phys-bali1995-field-extraction-context",
      "kind": "method",
      "statement": "Form the vacuum-subtracted Wilson-loop/plaquette contrasts with local spatial averaging and time insertions nearest the Wilson-loop midpoint. Extrapolate electric and magnetic components separately in Euclidean T before combining them; integrated observables are integrated at fixed T before extrapolation. Excited-state contamination of a field insertion can decrease as exp[-Delta V(T/2-S)], more slowly than for the Wilson potential. Independently fit the same ensembles' Wilson-loop ratios to the static potential; its fitted tension fixes relative lattice scales and its differences enter the later geometric-width method.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source uses finite-T fit variations and bootstrap errors, not a directly observed exact ground-state field. A potential plateau alone does not certify the field plateau; the correlators, fits and covariance are not replayed.",
        "Near-source self-energy peaks and sites excluded by time-link integration are subject to lattice artifacts. Spacing and 16^4/32^4 volume comparisons test selected profiles at their reported precision, not every tail, separation or infinite-volume limit.",
        "Action-profile comparisons account for the anomalous normalization and retain scale uncertainty. The potential and field profiles share gauge ensembles and scale inputs, so their sum-rule comparison is not independent experimental confirmation."
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "C-phys-bali1995-field-profiles",
      "kind": "review-finding",
      "statement": "The reported local contrasts show an elongated action-density distribution between fixed sources. Figure 12 compares R=20 at beta=2.5 with R=30 at beta=2.635, described by the authors as approximately 1.7 fm under their adopted scale; the plotted action normalization is adjusted between couplings. The selected spacing, volume and T comparisons support this finite-lattice profile extraction within their uncertainties. Energy and action contrasts are separate reported observables.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The claim concerns an ensemble expectation conditioned on external sources, not a snapshot of an autonomous field pattern. Source self-energy peaks do not establish a physical maximum density.",
        "Long-distance action profiles remain visible where energy-profile widths become too noisy near 0.8 fm. Equal precision for both channels, an exact continuum shape or a unique Gaussian tail is not established.",
        "The approximately 1.7 fm conversion is source-reported and scale-conditioned, not an independently calibrated physical-QCD distance. No raw-data or numerical-profile reproduction is claimed."
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "M-phys-bali1995-profile-inference-context",
      "kind": "method",
      "statement": "For beta=2.5 and 2.635, compare Gaussian and dipole interpolations of the central action profile, direct cutoff-dependent moment integrals, and the geometric estimate delta_geom^2=gamma A/(pi h), where h is the central height and A the transverse profile integral. The geometric A uses the differential action sum rule, the same-ensemble potential differences and the adopted beta-function factor. The method assumes that aligned static differences sigma_R-sigma_(R-2) are localized near the center plane and that transverse shapes at different R differ by amplitude and length rescalings. For infinite-plane Gaussian and dipole profiles gamma is 1 and 2.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The aligned differences compare separate fixed-source configurations; their localization near r approximately 0.75 fm is a smooth, resolution-limited diagnostic, not real-time pulling, a phase transition or a minimum formation size.",
        "The geometric method is applied above its stated approximately 0.75 fm range. Tail contributions, finite volume, rotational symmetry and the profile family remain inputs. Good fits over the measured transverse window do not determine the unmeasured tails.",
        "The Gaussian fit can describe central data while underestimating the sum-rule area; dipole tails are also not established throughout the separation range. The sum rule and potential are reused constraints, not an independent derivation of the profile or a measured vacuum condensate."
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "C-phys-bali1995-profile-widths",
      "kind": "review-finding",
      "statement": "For source separations above approximately 1 fm at beta=2.5 and 2.635, the reported geometric action rms estimate is a delta_geom approximately 0.52 fm sqrt(gamma). The authors' plausible-profile estimate spans approximately 0.5-0.75 fm, and the physical FWHM a rho plateaus at approximately 0.7 fm under their formulas. The data are compatible with a constant width and also with logarithmic broadening; the calculation does not select between them.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "supports",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 0.5-0.75 fm interval expresses model and tail dependence, not a statistical confidence interval. The FWHM naming conflict and adopted scale convention remain part of the interpretation.",
        "The width estimates reuse the extracted profiles, potential and beta-function normalization. Finite-cutoff integration has large errors; no complete profile, covariance, force or width analysis is reproduced.",
        "These conditional pure-SU(2) static-source widths are not universal hadron radii, confinement proofs, real-time stability or formation rates. They supply no nuclear/atomic binding mechanism, dynamical string-breaking result or gauge-invariant gluon-condensate measurement."
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "M-phys-bali1995-field-profiles",
      "kind": "method",
      "statement": "The published profiles require the declared pure-gauge ensemble, separately traced vacuum-subtracted plaquette operator, finite-T field extraction and scale/normalization comparisons. The source-smeared Wilson operator and unsmeared local probe have different roles.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "All displayed field components are squared-field expectation contrasts, not vector fields or individual gauge bosons; the computation is not independently replayed."
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "M-phys-bali1995-profile-widths",
      "kind": "method",
      "statement": "The reported widths reuse the extracted central profiles and the same-ensemble potential and normalization inputs, the specified rms/FWHM definitions, the adopted physical scale and the conditional geometric/tail analysis.",
      "scope": "Source-conditioned pure-SU(2) Euclidean lattice fields and conditional transverse widths in the selected Bali author report; hbar=c=1.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference",
          "role": "method",
          "note": "Supports the stated operator, computational preparation or scoped published inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Model-profile and scale dependence, the printed FWHM naming conflict and unresolved constant/logarithmic behavior are retained; there is no independent second acquisition or exact width replay."
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:static-source-plaquette-density",
      "name": "Static-source plaquette density contrast",
      "kind": "definition",
      "description": "For a smeared traced Wilson source W(R,T) and an unsmeared normalized plaquette P_mu_nu=(1/2)Tr[ordered elementary plaquette link product], define C_mu_nu=<W[P(T/2+S)+P(T/2-S)]/2>/<W>-<P>. The reference is the vacuum plaquette expectation. In the large-T projection and leading plaquette matching, E_R,i=(2 beta/a^4) C_i4 and B_R,i=-(2 beta/a^4) C_jk, with |epsilon_ijk|=1. These denote differences of color-contracted squared components between the static-source ground state and vacuum. Sum spatial components to define energy contrast epsilon_R=(E_R+B_R)/2 and action contrast sigma_R=(E_R-B_R)/2.",
      "claimIds": [
        "D-phys-static-source-plaquette-density"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
        }
      ],
      "openObligations": [
        "Use the source Minkowski sign convention eta=diag(1,-1,-1,-1), beta=4/g^2 and densities of dimension length^-4. A negative subtracted magnetic contrast does not mean a negative absolute squared field. Squared-component expectations determine neither field-vector directions nor individual gluons.",
        "The product of separately traced operators is essential; it is not a single trace with connecting Wilson lines. Source smearing improves ground-state overlap; the local plaquette probe remains unsmeared.",
        "The finite-a plaquette conversion and finite-T projection are approximations. Action-density normalization has an anomalous beta-function factor, and energy sum-rule matching is not an exact common renormalization of both densities. No gauge-invariant vacuum condensate or continuum local-field magnitude is inferred."
      ]
    },
    {
      "id": "phys:transverse-flux-width",
      "name": "Transverse action-profile width conventions",
      "kind": "definition",
      "description": "For a positive central action profile sigma_R(0,n_perp), a nonzero denominator and a declared transverse cutoff n_cut, define delta_cut^2=integral_0^n_cut dn n^3 sigma_R(0,n)/integral_0^n_cut dn n sigma_R(0,n). The physical cutoff radial rms is a delta_cut. Separately, let d denote the full-plane model rms parameter in the Gaussian and dipole profiles of Equations 59-60. Their full widths at half maximum are rho=2 d sqrt(ln 2) and rho=2 d sqrt(2^(1/3)-1), respectively; physical FWHM is a rho.",
      "claimIds": [
        "D-phys-transverse-flux-width"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "The cutoff rms, full-plane fitted parameter d and geometric estimate delta_geom are distinct constructions. Finite n_cut generally makes delta_cut unequal to d even for an exact model profile. Unmeasured tails and extrapolation assumptions control their relation; FWHM is not a radial rms.",
        "The selected author version calls rho a half width, but Equations 72-73 give the full width at half maximum. Preserve that naming conflict instead of dividing the reported rho by two.",
        "Positivity, finite moments and transverse rotational symmetry are conditions of these width constructions, not properties guaranteed for every noisy estimator or arbitrary vacuum-subtracted operator. No universal QCD flux-tube radius is defined."
      ]
    },
    {
      "id": "phys:bali1995-flux-ensemble-context",
      "name": "Bali pure-SU(2) flux ensembles",
      "kind": "context",
      "description": "Simulate pure SU(2) Wilson gauge theory without sea quarks, with periodic boundaries and external static fundamental Q and Qbar. Table 1 specifies beta=2.5 on 16^4 and 32^4 sites, beta=2.635 on 48^3 x 64, and beta=2.74 on 32^4. The printed spacings are a=0.0826(5), 0.0826(14), 0.0541(2) and 0.0408(2) fm in that order. Field measurements number 8680, 2046, 248 and 670 respectively; Wilson-loop and vacuum-plaquette sample counts can differ. Spatial source smearing and time-link integration improve overlap and noise. With dimensionless fitted tension K=a^2 kappa, the adopted sqrt(kappa)=440 MeV supplies only an orientation for physical units.",
      "claimIds": [
        "M-phys-bali1995-flux-ensemble-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
        }
      ],
      "openObligations": [
        "These are quenched two-color finite ensembles, not physical SU(3) QCD with dynamical quarks. Monte Carlo updates and Euclidean source preparation do not simulate real-time self-organization.",
        "Table 1 prints sqrt(K)*a=440 MeV and printed page 4 prints kappa=K*a^2; printed page 23 instead uses the dimensionally consistent a^2=K/kappa. The graph uses the latter convention, preserving the author-version conflict without claiming a numerical error in the original fits. The quoted spacings are table inputs, not an independent reconciliation of its reciprocal-scale columns.",
        "The adopted real-world scale and the beta-function interpolation, partly using earlier studies, are not independently reconstructed. Finite lattice spacings, volumes and source separations do not constitute a physical-QCD or continuum extrapolation."
      ]
    },
    {
      "id": "phys:bali1995-field-extraction-context",
      "name": "Bali field and potential extraction",
      "kind": "context",
      "description": "Form the vacuum-subtracted Wilson-loop/plaquette contrasts with local spatial averaging and time insertions nearest the Wilson-loop midpoint. Extrapolate electric and magnetic components separately in Euclidean T before combining them; integrated observables are integrated at fixed T before extrapolation. Excited-state contamination of a field insertion can decrease as exp[-Delta V(T/2-S)], more slowly than for the Wilson potential. Independently fit the same ensembles' Wilson-loop ratios to the static potential; its fitted tension fixes relative lattice scales and its differences enter the later geometric-width method.",
      "claimIds": [
        "M-phys-bali1995-field-extraction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction"
        }
      ],
      "openObligations": [
        "The source uses finite-T fit variations and bootstrap errors, not a directly observed exact ground-state field. A potential plateau alone does not certify the field plateau; the correlators, fits and covariance are not replayed.",
        "Near-source self-energy peaks and sites excluded by time-link integration are subject to lattice artifacts. Spacing and 16^4/32^4 volume comparisons test selected profiles at their reported precision, not every tail, separation or infinite-volume limit.",
        "Action-profile comparisons account for the anomalous normalization and retain scale uncertainty. The potential and field profiles share gauge ensembles and scale inputs, so their sum-rule comparison is not independent experimental confirmation."
      ]
    },
    {
      "id": "phys:bali1995-field-profiles",
      "name": "Bali source-conditioned field profiles",
      "kind": "scoped-process",
      "description": "The reported local contrasts show an elongated action-density distribution between fixed sources. Figure 12 compares R=20 at beta=2.5 with R=30 at beta=2.635, described by the authors as approximately 1.7 fm under their adopted scale; the plotted action normalization is adjusted between couplings. The selected spacing, volume and T comparisons support this finite-lattice profile extraction within their uncertainties. Energy and action contrasts are separate reported observables.",
      "claimIds": [
        "C-phys-bali1995-field-profiles"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "The claim concerns an ensemble expectation conditioned on external sources, not a snapshot of an autonomous field pattern. Source self-energy peaks do not establish a physical maximum density.",
        "Long-distance action profiles remain visible where energy-profile widths become too noisy near 0.8 fm. Equal precision for both channels, an exact continuum shape or a unique Gaussian tail is not established.",
        "The approximately 1.7 fm conversion is source-reported and scale-conditioned, not an independently calibrated physical-QCD distance. No raw-data or numerical-profile reproduction is claimed."
      ]
    },
    {
      "id": "phys:bali1995-profile-inference-context",
      "name": "Bali profile and width inference",
      "kind": "context",
      "description": "For beta=2.5 and 2.635, compare Gaussian and dipole interpolations of the central action profile, direct cutoff-dependent moment integrals, and the geometric estimate delta_geom^2=gamma A/(pi h), where h is the central height and A the transverse profile integral. The geometric A uses the differential action sum rule, the same-ensemble potential differences and the adopted beta-function factor. The method assumes that aligned static differences sigma_R-sigma_(R-2) are localized near the center plane and that transverse shapes at different R differ by amplitude and length rescalings. For infinite-plane Gaussian and dipole profiles gamma is 1 and 2.",
      "claimIds": [
        "M-phys-bali1995-profile-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences"
        },
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "The aligned differences compare separate fixed-source configurations; their localization near r approximately 0.75 fm is a smooth, resolution-limited diagnostic, not real-time pulling, a phase transition or a minimum formation size.",
        "The geometric method is applied above its stated approximately 0.75 fm range. Tail contributions, finite volume, rotational symmetry and the profile family remain inputs. Good fits over the measured transverse window do not determine the unmeasured tails.",
        "The Gaussian fit can describe central data while underestimating the sum-rule area; dipole tails are also not established throughout the separation range. The sum rule and potential are reused constraints, not an independent derivation of the profile or a measured vacuum condensate."
      ]
    },
    {
      "id": "phys:bali1995-profile-widths",
      "name": "Bali conditional action-profile widths",
      "kind": "scoped-process",
      "description": "For source separations above approximately 1 fm at beta=2.5 and 2.635, the reported geometric action rms estimate is a delta_geom approximately 0.52 fm sqrt(gamma). The authors' plausible-profile estimate spans approximately 0.5-0.75 fm, and the physical FWHM a rho plateaus at approximately 0.7 fm under their formulas. The data are compatible with a constant width and also with logarithmic broadening; the calculation does not select between them.",
      "claimIds": [
        "C-phys-bali1995-profile-widths"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali1995-flux",
          "locator": "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
        }
      ],
      "openObligations": [
        "The 0.5-0.75 fm interval expresses model and tail dependence, not a statistical confidence interval. The FWHM naming conflict and adopted scale convention remain part of the interpretation.",
        "The width estimates reuse the extracted profiles, potential and beta-function normalization. Finite-cutoff integration has large errors; no complete profile, covariance, force or width analysis is reproduced.",
        "These conditional pure-SU(2) static-source widths are not universal hadron radii, confinement proofs, real-time stability or formation rates. They supply no nuclear/atomic binding mechanism, dynamical string-breaking result or gauge-invariant gluon-condensate measurement."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lattice-gauge-formulation-static-source-plaquette-density",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:static-source-plaquette-density",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared lattice spacing, SU(2) Wilson action and traced plaquette convention define the regulated local squared-field probe.",
      "claimIds": [
        "D-phys-static-source-plaquette-density"
      ]
    },
    {
      "id": "physics:wilson-loop-static-source-plaquette-density",
      "source": "phys:wilson-loop",
      "target": "phys:static-source-plaquette-density",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The separately traced Wilson source conditions the plaquette expectation on fixed external charges and provides its normalization; no individual field-vector measurement follows.",
      "claimIds": [
        "D-phys-static-source-plaquette-density"
      ]
    },
    {
      "id": "physics:static-source-plaquette-density-transverse-flux-width",
      "source": "phys:static-source-plaquette-density",
      "target": "phys:transverse-flux-width",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The specified source-conditioned scalar action profile is the input to the declared transverse moments and half-maximum convention.",
      "claimIds": [
        "D-phys-transverse-flux-width"
      ]
    },
    {
      "id": "physics:bali1995-flux-ensemble-context-bali1995-field-profiles",
      "source": "phys:bali1995-flux-ensemble-context",
      "target": "phys:bali1995-field-profiles",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared finite pure-SU(2) ensembles and static-source geometry supply the expectation-value samples.",
      "claimIds": [
        "M-phys-bali1995-field-profiles"
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "physics:bali1995-field-extraction-context-bali1995-field-profiles",
      "source": "phys:bali1995-field-extraction-context",
      "target": "phys:bali1995-field-profiles",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The specified midpoint insertions, vacuum subtraction, finite-T fits and normalization comparisons extract these reported profiles.",
      "claimIds": [
        "M-phys-bali1995-field-profiles"
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "physics:static-source-plaquette-density-bali1995-field-profiles",
      "source": "phys:static-source-plaquette-density",
      "target": "phys:bali1995-field-profiles",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The squared-field contrast definition specifies what the local profiles denote; it is not a field-vector or gluon-count observable.",
      "claimIds": [
        "M-phys-bali1995-field-profiles"
      ],
      "contextIds": [
        "bali1995-field-extraction"
      ]
    },
    {
      "id": "physics:bali1995-field-profiles-bali1995-profile-widths",
      "source": "phys:bali1995-field-profiles",
      "target": "phys:bali1995-profile-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same extracted central action profiles, including their measured-window limits, supply the width analysis.",
      "claimIds": [
        "M-phys-bali1995-profile-widths"
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali1995-profile-inference-context-bali1995-profile-widths",
      "source": "phys:bali1995-profile-inference-context",
      "target": "phys:bali1995-profile-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The stated profile families, geometric assumptions and tail treatment define these conditional width estimates.",
      "claimIds": [
        "M-phys-bali1995-profile-widths"
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali1995-flux-ensemble-context-bali1995-profile-widths",
      "source": "phys:bali1995-flux-ensemble-context",
      "target": "phys:bali1995-profile-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted string-tension scale converts the same lattice width estimates into approximate femtometres.",
      "claimIds": [
        "M-phys-bali1995-profile-widths"
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:bali1995-field-extraction-context-bali1995-profile-widths",
      "source": "phys:bali1995-field-extraction-context",
      "target": "phys:bali1995-profile-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Potential differences and relative scale/beta-function normalization from the shared analysis are explicit inputs to the geometric-width constraint.",
      "claimIds": [
        "M-phys-bali1995-profile-widths"
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    },
    {
      "id": "physics:transverse-flux-width-bali1995-profile-widths",
      "source": "phys:transverse-flux-width",
      "target": "phys:bali1995-profile-widths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separate rms and FWHM definitions determine which reported width is meant, retaining the source half-width naming conflict.",
      "claimIds": [
        "M-phys-bali1995-profile-widths"
      ],
      "contextIds": [
        "bali1995-profile-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "bali1995-flux-ensemble",
      "sourceId": "bali1995-flux",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.51.5165",
      "journal": "Physical Review D",
      "volume": "51",
      "issue": "",
      "pages": "5165-5198",
      "system": "Pure-SU(2) gauge ensembles with external static fundamental sources",
      "preparation": "Simulate pure SU(2) Wilson gauge theory without sea quarks, with periodic boundaries and external static fundamental Q and Qbar. Table 1 specifies beta=2.5 on 16^4 and 32^4 sites, beta=2.635 on 48^3 x 64, and beta=2.74 on 32^4. The printed spacings are a=0.0826(5), 0.0826(14), 0.0541(2) and 0.0408(2) fm in that order. Field measurements number 8680, 2046, 248 and 670 respectively; Wilson-loop and vacuum-plaquette sample counts can differ. Spatial source smearing and time-link integration improve overlap and noise. With dimensionless fitted tension K=a^2 kappa, the adopted sqrt(kappa)=440 MeV supplies only an orientation for physical units.",
      "observable": "Finite pure-SU(2) static-source ensembles and scale convention",
      "finding": "The computational preparation used by the field and potential analyses.",
      "limitations": [
        "These are quenched two-color finite ensembles, not physical SU(3) QCD with dynamical quarks. Monte Carlo updates and Euclidean source preparation do not simulate real-time self-organization.",
        "Table 1 prints sqrt(K)*a=440 MeV and printed page 4 prints kappa=K*a^2; printed page 23 instead uses the dimensionally consistent a^2=K/kappa. The graph uses the latter convention, preserving the author-version conflict without claiming a numerical error in the original fits. The quoted spacings are table inputs, not an independent reconciliation of its reciprocal-scale columns.",
        "The adopted real-world scale and the beta-function interpolation, partly using earlier studies, are not independently reconstructed. Finite lattice spacings, volumes and source separations do not constitute a physical-QCD or continuum extrapolation."
      ],
      "readExtent": "selected-primary-author-report-passages",
      "reviewedLocators": [
        "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
        "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/hep-lat/9409005v1",
      "correctionCheck": "Primary author-v1 metadata and selected body checked. Published-version differences, later corrections and upstream analyses are not exhaustively reviewed; printed scale and FWHM conflicts remain explicit."
    },
    {
      "id": "bali1995-field-extraction",
      "sourceId": "bali1995-flux",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.51.5165",
      "journal": "Physical Review D",
      "volume": "51",
      "issue": "",
      "pages": "5165-5198",
      "system": "Pure-SU(2) gauge ensembles with external static fundamental sources",
      "preparation": "Form the vacuum-subtracted Wilson-loop/plaquette contrasts with local spatial averaging and time insertions nearest the Wilson-loop midpoint. Extrapolate electric and magnetic components separately in Euclidean T before combining them; integrated observables are integrated at fixed T before extrapolation. Excited-state contamination of a field insertion can decrease as exp[-Delta V(T/2-S)], more slowly than for the Wilson potential. Independently fit the same ensembles' Wilson-loop ratios to the static potential; its fitted tension fixes relative lattice scales and its differences enter the later geometric-width method.",
      "observable": "Source-conditioned squared-field profiles and shared-ensemble static potential",
      "finding": "The reported local contrasts show an elongated action-density distribution between fixed sources. Figure 12 compares R=20 at beta=2.5 with R=30 at beta=2.635, described by the authors as approximately 1.7 fm under their adopted scale; the plotted action normalization is adjusted between couplings. The selected spacing, volume and T comparisons support this finite-lattice profile extraction within their uncertainties. Energy and action contrasts are separate reported observables.",
      "limitations": [
        "The source uses finite-T fit variations and bootstrap errors, not a directly observed exact ground-state field. A potential plateau alone does not certify the field plateau; the correlators, fits and covariance are not replayed.",
        "Near-source self-energy peaks and sites excluded by time-link integration are subject to lattice artifacts. Spacing and 16^4/32^4 volume comparisons test selected profiles at their reported precision, not every tail, separation or infinite-volume limit.",
        "Action-profile comparisons account for the anomalous normalization and retain scale uncertainty. The potential and field profiles share gauge ensembles and scale inputs, so their sum-rule comparison is not independent experimental confirmation."
      ],
      "readExtent": "selected-primary-author-report-passages",
      "reviewedLocators": [
        "Author v1 printed pages 2-12 (PDF 3-13), Sections 2.1-2.5, Equations 1-30 and Table 1: ensembles, static sources and vacuum-subtracted plaquette field operators",
        "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
        "Author v1 printed pages 25-36 (PDF 26-37), Section 4.2, Figures 8-19 and Equation 58: field profiles, spacing/volume comparisons and Euclidean-time extraction",
        "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/hep-lat/9409005v1",
      "correctionCheck": "Primary author-v1 metadata and selected body checked. Published-version differences, later corrections and upstream analyses are not exhaustively reviewed; printed scale and FWHM conflicts remain explicit."
    },
    {
      "id": "bali1995-profile-inference",
      "sourceId": "bali1995-flux",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.51.5165",
      "journal": "Physical Review D",
      "volume": "51",
      "issue": "",
      "pages": "5165-5198",
      "system": "Pure-SU(2) gauge ensembles with external static fundamental sources",
      "preparation": "For beta=2.5 and 2.635, compare Gaussian and dipole interpolations of the central action profile, direct cutoff-dependent moment integrals, and the geometric estimate delta_geom^2=gamma A/(pi h), where h is the central height and A the transverse profile integral. The geometric A uses the differential action sum rule, the same-ensemble potential differences and the adopted beta-function factor. The method assumes that aligned static differences sigma_R-sigma_(R-2) are localized near the center plane and that transverse shapes at different R differ by amplitude and length rescalings. For infinite-plane Gaussian and dipole profiles gamma is 1 and 2.",
      "observable": "Conditional transverse rms/FWHM and separation dependence",
      "finding": "For source separations above approximately 1 fm at beta=2.5 and 2.635, the reported geometric action rms estimate is a delta_geom approximately 0.52 fm sqrt(gamma). The authors' plausible-profile estimate spans approximately 0.5-0.75 fm, and the physical FWHM a rho plateaus at approximately 0.7 fm under their formulas. The data are compatible with a constant width and also with logarithmic broadening; the calculation does not select between them.",
      "limitations": [
        "The aligned differences compare separate fixed-source configurations; their localization near r approximately 0.75 fm is a smooth, resolution-limited diagnostic, not real-time pulling, a phase transition or a minimum formation size.",
        "The geometric method is applied above its stated approximately 0.75 fm range. Tail contributions, finite volume, rotational symmetry and the profile family remain inputs. Good fits over the measured transverse window do not determine the unmeasured tails.",
        "The Gaussian fit can describe central data while underestimating the sum-rule area; dipole tails are also not established throughout the separation range. The sum rule and potential are reused constraints, not an independent derivation of the profile or a measured vacuum condensate."
      ],
      "readExtent": "selected-primary-author-report-passages",
      "reviewedLocators": [
        "Author v1 printed pages 16-24 (PDF 17-25), Sections 3.3 and 4.1, Equations 39-52 and Tables 5-7: potential, scale setting and action-density normalization",
        "Author v1 printed pages 40-46 (PDF 41-47), Sections 5.1-5.2, Equations 59-62 and Figures 23-25: transverse profile models and aligned static-separation differences",
        "Author v1 printed pages 47-53 (PDF 48-54), Sections 5.3-5.4 and selected summary, Equations 63-73 and Figures 26-29: sum-rule inputs, tail sensitivity and width inference"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/hep-lat/9409005v1",
      "correctionCheck": "Primary author-v1 metadata and selected body checked. Published-version differences, later corrections and upstream analyses are not exhaustively reviewed; printed scale and FWHM conflicts remain explicit."
    }
  ],
  "comparisons": [
    {
      "id": "bali1995-width-dependence",
      "candidate": "A constant action-profile width over the reported large-separation range.",
      "alternative": "Logarithmic broadening within the reviewed effective-string parametrization.",
      "sourceIds": [
        "bali1995-flux"
      ],
      "claimIds": [
        "M-phys-bali1995-profile-inference-context",
        "C-phys-bali1995-profile-widths"
      ],
      "discriminator": "Figures 28-29 and the width discussion compare separation dependence; both behaviors remain compatible at the reported precision and model uncertainty.",
      "result": "inconclusive",
      "limit": "No preferred asymptotic width law, exact physical-QCD scale or universal tail shape follows from this finite-lattice comparison.",
      "assumptions": [
        "Use the same extracted profiles, potential constraints, adopted scale and geometric/tail assumptions."
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:static-source-plaquette-density",
      "role": "definition",
      "denotes": "A vacuum-subtracted, Wilson-source-conditioned expectation of color-contracted squared fields, with explicit finite-lattice matching.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-static-source-plaquette-density"
      ]
    },
    {
      "nodeId": "phys:transverse-flux-width",
      "role": "definition",
      "denotes": "Specified radial rms and full half-maximum widths of a central scalar profile, rather than a formation threshold or universal tube size.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-transverse-flux-width"
      ]
    },
    {
      "nodeId": "phys:bali1995-flux-ensemble-context",
      "role": "model-context",
      "denotes": "The four finite pure-gauge ensembles, their static-source preparation and adopted scale convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bali1995-flux-ensemble-context"
      ]
    },
    {
      "nodeId": "phys:bali1995-field-extraction-context",
      "role": "model-context",
      "denotes": "The specified Euclidean extraction of squared-field contrasts and the shared-ensemble potential used in later normalization.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bali1995-field-extraction-context"
      ]
    },
    {
      "nodeId": "phys:bali1995-field-profiles",
      "role": "scoped-phenomenon",
      "denotes": "The reported finite-lattice action/energy contrasts; especially the long action profile in the common source geometry.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali1995-field-profiles"
      ]
    },
    {
      "nodeId": "phys:bali1995-profile-inference-context",
      "role": "model-context",
      "denotes": "The conditional central-profile fits and geometric width construction using shared potential and normalization inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bali1995-profile-inference-context"
      ]
    },
    {
      "nodeId": "phys:bali1995-profile-widths",
      "role": "scoped-phenomenon",
      "denotes": "Published model-conditioned action rms/FWHM estimates and their unresolved constant-versus-logarithmic dependence.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali1995-profile-widths"
      ]
    }
  ]
};

/** Preserve the source-conditioned field observable and its conditional width inference. */
export function validateGluonFluxContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Gluon flux ${kind} changed ${id}: preserve the source, extraction and width boundary`);
    }
  }
}
