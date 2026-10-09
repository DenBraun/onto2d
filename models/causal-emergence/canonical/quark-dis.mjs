import assert from "node:assert/strict";

export const QUARK_DIS_CHECKS = new Map();
export const QUARK_DIS_ANALYTICAL_SOURCES = new Map();
export const QUARK_DIS_ADMISSION = {
  "definitions": [
    [
      "phys:inclusive-dis-response",
      "D-phys-inclusive-dis-response"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "bloom1969-response-context",
      "M-phys-bloom1969-response-context",
      [
        "bloom1969-response"
      ]
    ],
    [
      "whitlow1990-archive-context",
      "M-phys-whitlow1990-archive-context",
      [
        "whitlow1990-reanalysis"
      ]
    ],
    [
      "whitlow1990-response-context",
      "M-phys-whitlow1990-response-context",
      [
        "whitlow1990-reanalysis"
      ]
    ],
    [
      "whitlow1990-separation-context",
      "M-phys-whitlow1990-separation-context",
      [
        "whitlow1990-separation"
      ]
    ],
    [
      "whitlow1990-comparison-context",
      "M-phys-whitlow1990-comparison-context",
      [
        "whitlow1990-comparison"
      ]
    ]
  ],
  "observations": [
    [
      "bloom1969-corrected-crosssections",
      "C-phys-bloom1969-corrected-crosssections",
      [
        "bloom1969-response"
      ]
    ],
    [
      "whitlow1990-normalized-crosssections",
      "C-phys-whitlow1990-normalized-crosssections",
      [
        "whitlow1990-reanalysis"
      ]
    ],
    [
      "whitlow1990-separated-r",
      "C-phys-whitlow1990-separated-r",
      [
        "whitlow1990-separation"
      ]
    ],
    [
      "whitlow1990-target-difference",
      "C-phys-whitlow1990-target-difference",
      [
        "whitlow1990-separation"
      ]
    ],
    [
      "whitlow1990-model-comparison",
      "C-phys-whitlow1990-model-comparison",
      [
        "whitlow1990-comparison"
      ]
    ]
  ],
  "dependencies": [
    [
      "slac-context-bloom1969-corrected-crosssections",
      "slac-context",
      "bloom1969-corrected-crosssections",
      "M-phys-bloom1969-corrected-crosssections",
      "measurement-context"
    ],
    [
      "bloom1969-response-context-bloom1969-corrected-crosssections",
      "bloom1969-response-context",
      "bloom1969-corrected-crosssections",
      "M-phys-bloom1969-corrected-crosssections",
      "interpretation-dependency"
    ],
    [
      "bloom1969-corrected-crosssections-slac-spectrum",
      "bloom1969-corrected-crosssections",
      "slac-spectrum",
      "M-phys-bloom1969-slac-interpretation",
      "interpretation-dependency"
    ],
    [
      "bloom1969-corrected-crosssections-slac-scaling",
      "bloom1969-corrected-crosssections",
      "slac-scaling",
      "M-phys-bloom1969-slac-interpretation",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-archive-context-whitlow1990-normalized-crosssections",
      "whitlow1990-archive-context",
      "whitlow1990-normalized-crosssections",
      "M-phys-whitlow1990-normalized-crosssections",
      "measurement-context"
    ],
    [
      "whitlow1990-response-context-whitlow1990-normalized-crosssections",
      "whitlow1990-response-context",
      "whitlow1990-normalized-crosssections",
      "M-phys-whitlow1990-normalized-crosssections",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-normalized-crosssections-whitlow1990-target-difference",
      "whitlow1990-normalized-crosssections",
      "whitlow1990-target-difference",
      "M-phys-whitlow1990-target-difference",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-separation-context-whitlow1990-target-difference",
      "whitlow1990-separation-context",
      "whitlow1990-target-difference",
      "M-phys-whitlow1990-target-difference",
      "interpretation-dependency"
    ],
    [
      "inclusive-dis-response-whitlow1990-target-difference",
      "inclusive-dis-response",
      "whitlow1990-target-difference",
      "M-phys-whitlow1990-target-difference",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-normalized-crosssections-whitlow1990-separated-r",
      "whitlow1990-normalized-crosssections",
      "whitlow1990-separated-r",
      "M-phys-whitlow1990-separated-r",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-separation-context-whitlow1990-separated-r",
      "whitlow1990-separation-context",
      "whitlow1990-separated-r",
      "M-phys-whitlow1990-separated-r",
      "interpretation-dependency"
    ],
    [
      "inclusive-dis-response-whitlow1990-separated-r",
      "inclusive-dis-response",
      "whitlow1990-separated-r",
      "M-phys-whitlow1990-separated-r",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-target-difference-whitlow1990-separated-r",
      "whitlow1990-target-difference",
      "whitlow1990-separated-r",
      "M-phys-whitlow1990-separated-r",
      "interpretation-dependency"
    ],
    [
      "quark-parton-response-whitlow1990-model-comparison",
      "quark-parton-response",
      "whitlow1990-model-comparison",
      "M-phys-whitlow1990-model-comparison",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-separated-r-whitlow1990-model-comparison",
      "whitlow1990-separated-r",
      "whitlow1990-model-comparison",
      "M-phys-whitlow1990-model-comparison",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-target-difference-whitlow1990-model-comparison",
      "whitlow1990-target-difference",
      "whitlow1990-model-comparison",
      "M-phys-whitlow1990-model-comparison",
      "interpretation-dependency"
    ],
    [
      "whitlow1990-comparison-context-whitlow1990-model-comparison",
      "whitlow1990-comparison-context",
      "whitlow1990-model-comparison",
      "M-phys-whitlow1990-model-comparison",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "bloom1969-response",
    "whitlow1990-reanalysis",
    "whitlow1990-separation",
    "whitlow1990-comparison"
  ],
  "comparisonIds": [
    "bloom1969-radiative-response",
    "whitlow1990-target-consistency",
    "whitlow1990-parton-interpretation"
  ],
  "inferenceSources": [
    [
      "M-phys-bloom1969-response-context",
      [
        "bloom1969"
      ]
    ],
    [
      "C-phys-bloom1969-corrected-crosssections",
      [
        "bloom1969"
      ]
    ],
    [
      "M-phys-whitlow1990-archive-context",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-response-context",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "C-phys-whitlow1990-normalized-crosssections",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-separation-context",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "C-phys-whitlow1990-separated-r",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "C-phys-whitlow1990-target-difference",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-comparison-context",
      [
        "whitlow1990-r",
        "pdg2025-structure-functions"
      ]
    ],
    [
      "C-phys-whitlow1990-model-comparison",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-bloom1969-corrected-crosssections",
      [
        "bloom1969"
      ]
    ],
    [
      "M-phys-bloom1969-slac-interpretation",
      [
        "bloom1969",
        "breidenbach1969"
      ]
    ],
    [
      "M-phys-whitlow1990-normalized-crosssections",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-separated-r",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-target-difference",
      [
        "whitlow1990-r"
      ]
    ],
    [
      "M-phys-whitlow1990-model-comparison",
      [
        "whitlow1990-r",
        "pdg2025-structure-functions"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "bloom1969",
      "kind": "research-publication",
      "title": "High-Energy Inelastic e-p Scattering at 6 Degrees and 10 Degrees",
      "authors": [
        "E. D. Bloom",
        "D. H. Coward",
        "H. DeStaebler",
        "J. Drees",
        "G. Miller",
        "L. W. Mo",
        "R. E. Taylor",
        "M. Breidenbach",
        "J. I. Friedman",
        "G. C. Hartmann",
        "H. W. Kendall"
      ],
      "year": 1969,
      "doi": "10.1103/PhysRevLett.23.930",
      "url": "https://www.slac.stanford.edu/pubs/slacpubs/0500/slac-pub-0642.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-report",
        "locators": [
          "SLAC-PUB-642 pages 2-4: electron-only acquisition, spectrometer response, target-density and background corrections",
          "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions",
          "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance"
        ],
        "limit": "Read all 12 pages of the August 1969 SLAC-PUB-642 author report, including references, Table I and both figure captions. Visually checked pages 9-12, the table and both figures. Publisher metadata and companion-paper identity checked; the publisher PDF and upstream correction papers are not independently read. The abstract rounds incident energies to 7-17 GeV; the actual settings include 17.696 GeV. The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed."
      }
    },
    {
      "id": "whitlow1990-r",
      "kind": "research-publication",
      "title": "A Precise Extraction of R = sigma_L/sigma_T from a Global Analysis of the SLAC Deep Inelastic e-p and e-d Scattering Cross Sections",
      "authors": [
        "L. W. Whitlow",
        "S. Rock",
        "A. Bodek",
        "E. M. Riordan",
        "S. Dasu"
      ],
      "year": 1990,
      "doi": "10.1016/0370-2693(90)91176-C",
      "url": "https://www.slac.stanford.edu/pubs/slacpubs/5250/slac-pub-5284.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-report",
        "locators": [
          "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
          "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits"
        ],
        "limit": "Read all 17 pages of the June 1990 SLAC-PUB-5284/UR-1102 author report, including references and captions; visually checked pages 3, 5, 7-8, 12-13 and 16-17. Figure 2 has scan defects; no point-by-point digitization is claimed. Publisher metadata checked; its PDF and the thesis numerical tables were not retrieved. Author order follows the inspected report (the publisher landing page reverses the last two names). The reviewed author report prints Equation 1 without the cos^2(theta/2) factor and its epsilon line without the factor 2. The declared response convention is the equivalent first-Born form derived from the separately cited PDG equations; this textual mismatch does not establish an error in the authors' numerical analysis. The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair. The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-inclusive-dis-response",
      "kind": "review-finding",
      "statement": "For unpolarized one-photon electron-nucleon scattering with negligible electron mass, use Q^2=4EEprime sin^2(theta/2)>0, nu=E-Eprime and x=Q^2/(2M nu). R=sigmaL/sigmaT=F2(1+4M^2*x^2/Q^2)/(2xF1)-1. The equivalent polarization convention is epsilon=[1+2(1+nu^2/Q^2)tan^2(theta/2)]^-1, Gamma=alpha*Eprime*(1/x-1)/[4*pi^2*M*E*(1-epsilon)], and Y=(d^2sigma/dOmega dEprime)/Gamma=sigmaT+epsilon*sigmaL. At fixed x,Q^2, the reduced-response intercept and slope determine R; nonzero intercept and a span in epsilon are required.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reviewed author report prints Equation 1 without the cos^2(theta/2) factor and its epsilon line without the factor 2. The declared response convention is the equivalent first-Born form derived from the separately cited PDG equations; this textual mismatch does not establish an error in the authors' numerical analysis.",
        "Use hbar=c=1, the target-nucleon rest frame, inelastic 0<x<1, Eprime>0 and nonzero sigmaT; the Hand flux vanishes at the elastic endpoint x=1. This is a declared Born response, before the separately specified radiative and detector treatment. A finite-Q^2 response relation is not the massless leading-parton Callan-Gross limit or a theory-free gluon/quark census."
      ]
    },
    {
      "id": "M-phys-bloom1969-response-context",
      "kind": "method",
      "statement": "For the existing SLAC electron-only acquisition, Bloom describes a 7 cm liquid-hydrogen target, beam-current monitors, a magnetic spectrometer and electron/pion discrimination. Correct dead time, tracking and identification efficiency, target-density changes, empty-target yields and positron-estimated backgrounds. Subtract the calculated elastic radiative tail, then unfold all spectra at each angle in two dimensions using the peaking approximation, interpolation and some extrapolation. SLAC and MIT analyses of the same data are averaged.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 2-4: electron-only acquisition, spectrometer response, target-density and background corrections",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "Table I errors are one-standard-deviation counting and electron-detection uncertainties propagated through unfolding; combined systematic errors are excluded and estimated as 5% above scattered energy 5 GeV, rising to 10% near 3 GeV.",
        "The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed."
      ],
      "contextIds": [
        "bloom1969-response"
      ]
    },
    {
      "id": "C-phys-bloom1969-corrected-crosssections",
      "kind": "review-finding",
      "statement": "The report gives corrected d^2sigma/(dOmega dEprime) for W>=2 GeV at 6 and 10 degrees. Table I spans incident settings 7.000-17.696 GeV; its 6-degree and 10-degree columns use 10^-31 and 10^-32 cm^2/(sr GeV), respectively. Figure 1 separates pre-radiative spectra, the elastic tail and corrected spectra; Figure 2 shows the continuum changing much less with momentum transfer than the resonances. These are the companion data underlying the admitted Breidenbach interpretation.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "Table I errors are one-standard-deviation counting and electron-detection uncertainties propagated through unfolding; combined systematic errors are excluded and estimated as 5% above scattered energy 5 GeV, rising to 10% near 3 GeV.",
        "The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed."
      ],
      "contextIds": [
        "bloom1969-response"
      ]
    },
    {
      "id": "M-phys-whitlow1990-archive-context",
      "kind": "method",
      "statement": "The 1990 analysis reuses 5835 electron-proton and electron-deuteron cross-section measurements from eight 1970-1985 SLAC experiments using the 1.6, 8 and 20 GeV spectrometers. The archive supplies varied beam/scattering settings spanning 0.1<=x<=0.9 and 0.6<=Q^2<=20 (GeV/c)^2; this record identifies the reused input sample, not a fresh 1990 exposure.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here."
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "M-phys-whitlow1990-response-context",
      "kind": "method",
      "statement": "Recalculate internal Bardin and external Tsai radiative corrections with experiment-specific target models. Fit smooth cross-section models with floating relative normalizations anchored to E140; E89a instead uses elastic comparisons because its kinematics are disjoint. Anchor hydrogen through the assumed common E49b proton/deuteron normalization. Preserve normalization correlations, correction uncertainty versus epsilon, and bin-centering adjustments.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "C-phys-whitlow1990-normalized-crosssections",
      "kind": "review-finding",
      "statement": "Table 1 reports fitted relative cross-section multipliers, not independent luminosity measurements: E139 deuterium is 1.008 +/-0.004 statistical +/-0.002 systematic relative to E140=1.000; E49b hydrogen uses the common 0.981 normalization fixed by its deuterium fit. The corrected, mutually normalized and bin-centered cross sections supply the subsequent separation; the complete input table and covariance are not reconstructed here.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "M-phys-whitlow1990-separation-context",
      "kind": "method",
      "statement": "At fixed x,Q^2, regress the flux-divided cross sections against epsilon and propagate the known statistical/systematic correlations. The report gives 176 R regressions, typically using six measurements from four experiments across an epsilon range about 0.5. Separately regress deuterium/proton ratios against epsilonPrime=1/(1+epsilon*Rp), adopting a model for Rp, and average the resulting target differences over Q^2. Exclude E140 deuterium from the global Rd regressions while retaining its normalization-anchor role.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair.",
        "The reviewed author report prints Equation 1 without the cos^2(theta/2) factor and its epsilon line without the factor 2. The declared response convention is the equivalent first-Born form derived from the separately cited PDG equations; this textual mismatch does not establish an error in the authors' numerical analysis."
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "C-phys-whitlow1990-separated-r",
      "kind": "review-finding",
      "statement": "The 176 regressions report mean chi^2 per degree of freedom 0.91 and nonconstant R values across the stated x,Q^2 range. After comparing target differences, the authors combine Rp and Rd within bins, respecting asymmetric parent distributions; Figure 2 displays these global results separately from improved E140 averages of Rd and RFe. A constant R=0 or R=0.18 is an adopted extraction approximation, not what all these separated data measure.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair.",
        "No numerical point set, slope/intercept covariance, fit code or full likelihood has been replayed. The combined R points are dependent transformations, not additional acquisitions."
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "C-phys-whitlow1990-target-difference",
      "kind": "review-finding",
      "statement": "The separate 86 target-ratio regressions have reported mean chi^2 per degree of freedom 0.99. Their full-range average is Rd-Rp=-0.001 +/-0.009 statistical +/-0.009 systematic, compatible with zero over the reviewed kinematics. This finite-precision consistency result does not establish exact target equality or independently measure a free-neutron response.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair.",
        "The target-difference regression adopts an Rp model; it is not a subtraction of independent already-combined R points. Converting deuteron response into a neutron equality additionally requires a nuclear treatment not admitted here."
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "M-phys-whitlow1990-comparison-context",
      "kind": "method",
      "statement": "Compare the separated R dependence with the report's specified perturbative-QCD curves using CDHS quark distributions, with and without kinematic target-mass contributions. Keep its spin-zero diquark alternatives and preliminary-data-fitted twist-4 phenomenology distinct. The separately declared leading charge-weighted parton response clarifies what a massless spin-one-half limit means; it is not a retroactive PDF input or a reconstruction of these historical curves.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The compared curves adopt the cited perturbative calculation, CDHS quark distributions and optionally kinematic target-mass terms. These are specified model inputs, not a unique prediction of all QCD or a direct count/spin measurement of isolated quarks.",
        "The twist-4 phenomenology had used preliminary Rd results; its agreement is not an independent prediction. No higher-twist parameter, primordial transverse momentum or universal exclusion of every diquark correlation is admitted.",
        "The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here."
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    },
    {
      "id": "C-phys-whitlow1990-model-comparison",
      "kind": "review-finding",
      "statement": "In the studied SLAC range the report finds R systematically above the displayed perturbative calculation, including its target-mass variant, while the selected spin-zero diquark curves disagree with the target/kinematic pattern. The finite-Q^2 longitudinal response therefore qualifies a strict zero-R picture. Higher-twist effects are a proposed explanation, not a uniquely identified microscopic constituent population or proof against complete QCD.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits",
          "role": "supports",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The compared curves adopt the cited perturbative calculation, CDHS quark distributions and optionally kinematic target-mass terms. These are specified model inputs, not a unique prediction of all QCD or a direct count/spin measurement of isolated quarks.",
        "The twist-4 phenomenology had used preliminary Rd results; its agreement is not an independent prediction. No higher-twist parameter, primordial transverse momentum or universal exclusion of every diquark correlation is admitted.",
        "The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here."
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    },
    {
      "id": "M-phys-bloom1969-corrected-crosssections",
      "kind": "method",
      "statement": "The corrected continuum cross sections use the existing 1969 SLAC acquisition and Bloom's detector/background and radiative treatment; both analysis teams process the same measured spectra.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 2-4: electron-only acquisition, spectrometer response, target-density and background corrections",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "Table I errors are one-standard-deviation counting and electron-detection uncertainties propagated through unfolding; combined systematic errors are excluded and estimated as 5% above scattered energy 5 GeV, rising to 10% near 3 GeV.",
        "The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed."
      ],
      "contextIds": [
        "bloom1969-response"
      ]
    },
    {
      "id": "M-phys-bloom1969-slac-interpretation",
      "kind": "method",
      "statement": "Bloom's companion corrected cross sections supply the same-data experimental input to the admitted Breidenbach continuum/scaling interpretation. The historical transverse-dominance assumption remains conditional; the later global R analysis does not retrospectively supply an independently measured R for each 1969 point.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "breidenbach1969",
          "locator": "Pages 935-936: electron-only spectra and cross-section decomposition; Figure 1",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "breidenbach1969",
          "locator": "Pages 936-937: R-dependent structure function and scaling; Figure 2",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "This is a same-acquisition evidence relation, not independent replication or a temporal formation requirement."
      ],
      "contextIds": [
        "breidenbach1969"
      ]
    },
    {
      "id": "M-phys-whitlow1990-normalized-crosssections",
      "kind": "method",
      "statement": "The archived measurements and radiative/normalization model jointly determine the reported normalized separation inputs. The floating factors are fitted with shared anchors and correlations.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "M-phys-whitlow1990-separated-r",
      "kind": "method",
      "statement": "The normalized cross-section ensemble, declared inclusive response and separation procedure determine the reported R ratios; the within-bin proton/deuteron average additionally uses the separately estimated target-difference compatibility.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "M-phys-whitlow1990-target-difference",
      "kind": "method",
      "statement": "The target-difference result uses the normalized proton/deuteron cross-section ratios and its Rp-model-dependent regression, not a difference of two independent final R averages.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "M-phys-whitlow1990-model-comparison",
      "kind": "method",
      "statement": "The reported model comparison uses the separated R/target-difference results and the specified historical curves. The leading-parton definition supplies an interpretation boundary only, with no influence on the empirical separation inputs.",
      "scope": "The specified SLAC electron-only responses and the 1990 archived-data longitudinal/transverse separation; no free-quark census or complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response",
          "role": "method",
          "note": "Supports the specified response, convention or reported inference within the reviewed source extent."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The compared curves adopt the cited perturbative calculation, CDHS quark distributions and optionally kinematic target-mass terms. These are specified model inputs, not a unique prediction of all QCD or a direct count/spin measurement of isolated quarks.",
        "The twist-4 phenomenology had used preliminary Rd results; its agreement is not an independent prediction. No higher-twist parameter, primordial transverse momentum or universal exclusion of every diquark correlation is admitted.",
        "The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here."
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:inclusive-dis-response",
      "name": "Inclusive electromagnetic DIS response",
      "kind": "definition",
      "description": "For unpolarized one-photon electron-nucleon scattering with negligible electron mass, use Q^2=4EEprime sin^2(theta/2)>0, nu=E-Eprime and x=Q^2/(2M nu). R=sigmaL/sigmaT=F2(1+4M^2*x^2/Q^2)/(2xF1)-1. The equivalent polarization convention is epsilon=[1+2(1+nu^2/Q^2)tan^2(theta/2)]^-1, Gamma=alpha*Eprime*(1/x-1)/[4*pi^2*M*E*(1-epsilon)], and Y=(d^2sigma/dOmega dEprime)/Gamma=sigmaT+epsilon*sigmaL. At fixed x,Q^2, the reduced-response intercept and slope determine R; nonzero intercept and a span in epsilon are required.",
      "claimIds": [
        "D-phys-inclusive-dis-response"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections"
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:bloom1969-response-context",
      "name": "SLAC 1969 response and radiative correction",
      "kind": "context",
      "description": "For the existing SLAC electron-only acquisition, Bloom describes a 7 cm liquid-hydrogen target, beam-current monitors, a magnetic spectrometer and electron/pion discrimination. Correct dead time, tracking and identification efficiency, target-density changes, empty-target yields and positron-estimated backgrounds. Subtract the calculated elastic radiative tail, then unfold all spectra at each angle in two dimensions using the peaking approximation, interpolation and some extrapolation. SLAC and MIT analyses of the same data are averaged.",
      "claimIds": [
        "M-phys-bloom1969-response-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 2-4: electron-only acquisition, spectrometer response, target-density and background corrections"
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:bloom1969-corrected-crosssections",
      "name": "SLAC 1969 corrected continuum cross sections",
      "kind": "scoped-process",
      "description": "The report gives corrected d^2sigma/(dOmega dEprime) for W>=2 GeV at 6 and 10 degrees. Table I spans incident settings 7.000-17.696 GeV; its 6-degree and 10-degree columns use 10^-31 and 10^-32 cm^2/(sr GeV), respectively. Figure 1 separates pre-radiative spectra, the elastic tail and corrected spectra; Figure 2 shows the continuum changing much less with momentum transfer than the resonances. These are the companion data underlying the admitted Breidenbach interpretation.",
      "claimIds": [
        "C-phys-bloom1969-corrected-crosssections"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance"
        },
        {
          "sourceId": "bloom1969",
          "locator": "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-archive-context",
      "name": "SLAC archived DIS sample",
      "kind": "context",
      "description": "The 1990 analysis reuses 5835 electron-proton and electron-deuteron cross-section measurements from eight 1970-1985 SLAC experiments using the 1.6, 8 and 20 GeV spectrometers. The archive supplies varied beam/scattering settings spanning 0.1<=x<=0.9 and 0.6<=Q^2<=20 (GeV/c)^2; this record identifies the reused input sample, not a fresh 1990 exposure.",
      "claimIds": [
        "M-phys-whitlow1990-archive-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-response-context",
      "name": "SLAC correlated correction and normalization",
      "kind": "context",
      "description": "Recalculate internal Bardin and external Tsai radiative corrections with experiment-specific target models. Fit smooth cross-section models with floating relative normalizations anchored to E140; E89a instead uses elastic comparisons because its kinematics are disjoint. Anchor hydrogen through the assumed common E49b proton/deuteron normalization. Preserve normalization correlations, correction uncertainty versus epsilon, and bin-centering adjustments.",
      "claimIds": [
        "M-phys-whitlow1990-response-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-normalized-crosssections",
      "name": "SLAC normalized separation inputs",
      "kind": "scoped-process",
      "description": "Table 1 reports fitted relative cross-section multipliers, not independent luminosity measurements: E139 deuterium is 1.008 +/-0.004 statistical +/-0.002 systematic relative to E140=1.000; E49b hydrogen uses the common 0.981 normalization fixed by its deuterium fit. The corrected, mutually normalized and bin-centered cross sections supply the subsequent separation; the complete input table and covariance are not reconstructed here.",
      "claimIds": [
        "C-phys-whitlow1990-normalized-crosssections"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-separation-context",
      "name": "SLAC longitudinal/transverse regressions",
      "kind": "context",
      "description": "At fixed x,Q^2, regress the flux-divided cross sections against epsilon and propagate the known statistical/systematic correlations. The report gives 176 R regressions, typically using six measurements from four experiments across an epsilon range about 0.5. Separately regress deuterium/proton ratios against epsilonPrime=1/(1+epsilon*Rp), adopting a model for Rp, and average the resulting target differences over Q^2. Exclude E140 deuterium from the global Rd regressions while retaining its normalization-anchor role.",
      "claimIds": [
        "M-phys-whitlow1990-separation-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits"
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-separated-r",
      "name": "Separated SLAC longitudinal/transverse response",
      "kind": "scoped-process",
      "description": "The 176 regressions report mean chi^2 per degree of freedom 0.91 and nonconstant R values across the stated x,Q^2 range. After comparing target differences, the authors combine Rp and Rd within bins, respecting asymmetric parent distributions; Figure 2 displays these global results separately from improved E140 averages of Rd and RFe. A constant R=0 or R=0.18 is an adopted extraction approximation, not what all these separated data measure.",
      "claimIds": [
        "C-phys-whitlow1990-separated-r"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points"
        },
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-target-difference",
      "name": "SLAC proton-deuteron response difference",
      "kind": "scoped-process",
      "description": "The separate 86 target-ratio regressions have reported mean chi^2 per degree of freedom 0.99. Their full-range average is Rd-Rp=-0.001 +/-0.009 statistical +/-0.009 systematic, compatible with zero over the reviewed kinematics. This finite-precision consistency result does not establish exact target equality or independently measure a free-neutron response.",
      "claimIds": [
        "C-phys-whitlow1990-target-difference"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-comparison-context",
      "name": "SLAC conditional parton comparison",
      "kind": "context",
      "description": "Compare the separated R dependence with the report's specified perturbative-QCD curves using CDHS quark distributions, with and without kinematic target-mass contributions. Keep its spin-zero diquark alternatives and preliminary-data-fitted twist-4 phenomenology distinct. The separately declared leading charge-weighted parton response clarifies what a massless spin-one-half limit means; it is not a retroactive PDF input or a reconstruction of these historical curves.",
      "claimIds": [
        "M-phys-whitlow1990-comparison-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits"
        },
        {
          "sourceId": "pdg2025-structure-functions",
          "locator": "Pages 4-5, Section 18.2.1, Equations 18.16-18.18 and the following Callan-Gross statement: negligible-target-mass convention and the electromagnetic quark-parton response"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    },
    {
      "id": "phys:whitlow1990-model-comparison",
      "name": "SLAC response versus selected parton calculations",
      "kind": "scoped-process",
      "description": "In the studied SLAC range the report finds R systematically above the displayed perturbative calculation, including its target-mass variant, while the selected spin-zero diquark curves disagree with the target/kinematic pattern. The finite-Q^2 longitudinal response therefore qualifies a strict zero-R picture. Higher-twist effects are a proposed explanation, not a uniquely identified microscopic constituent population or proof against complete QCD.",
      "claimIds": [
        "C-phys-whitlow1990-model-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "whitlow1990-r",
          "locator": "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits"
        }
      ],
      "openObligations": [
        "Extend only with matched primary sources and the stated response, covariance and interpretation boundaries."
      ],
      "level": 1
    }
  ],
  "relations": [
    {
      "id": "physics:slac-context-bloom1969-corrected-crosssections",
      "source": "phys:slac-context",
      "target": "phys:bloom1969-corrected-crosssections",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The existing SLAC electron-only preparation supplies the shared spectra corrected in the companion report.",
      "claimIds": [
        "M-phys-bloom1969-corrected-crosssections"
      ],
      "contextIds": [
        "bloom1969-response"
      ]
    },
    {
      "id": "physics:bloom1969-response-context-bloom1969-corrected-crosssections",
      "source": "phys:bloom1969-response-context",
      "target": "phys:bloom1969-corrected-crosssections",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Detector/background response, elastic-tail subtraction and radiative unfolding condition these cross sections.",
      "claimIds": [
        "M-phys-bloom1969-corrected-crosssections"
      ],
      "contextIds": [
        "bloom1969-response"
      ]
    },
    {
      "id": "physics:bloom1969-corrected-crosssections-slac-spectrum",
      "source": "phys:bloom1969-corrected-crosssections",
      "target": "phys:slac-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The companion corrected cross sections underlie the Breidenbach continuum comparison from the same acquisition.",
      "claimIds": [
        "M-phys-bloom1969-slac-interpretation"
      ],
      "contextIds": [
        "breidenbach1969"
      ]
    },
    {
      "id": "physics:bloom1969-corrected-crosssections-slac-scaling",
      "source": "phys:bloom1969-corrected-crosssections",
      "target": "phys:slac-scaling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The companion data support the historical scaling extraction only with its separate transverse-dominance assumption.",
      "claimIds": [
        "M-phys-bloom1969-slac-interpretation"
      ],
      "contextIds": [
        "breidenbach1969"
      ]
    },
    {
      "id": "physics:whitlow1990-archive-context-whitlow1990-normalized-crosssections",
      "source": "phys:whitlow1990-archive-context",
      "target": "phys:whitlow1990-normalized-crosssections",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The archived 1970-1985 measurements supply the reused cross-section inputs.",
      "claimIds": [
        "M-phys-whitlow1990-normalized-crosssections"
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "physics:whitlow1990-response-context-whitlow1990-normalized-crosssections",
      "source": "phys:whitlow1990-response-context",
      "target": "phys:whitlow1990-normalized-crosssections",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Radiative treatment and correlated fitted normalization factors determine the adjusted separation inputs.",
      "claimIds": [
        "M-phys-whitlow1990-normalized-crosssections"
      ],
      "contextIds": [
        "whitlow1990-reanalysis"
      ]
    },
    {
      "id": "physics:whitlow1990-normalized-crosssections-whitlow1990-target-difference",
      "source": "phys:whitlow1990-normalized-crosssections",
      "target": "phys:whitlow1990-target-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted target difference uses the normalized deuterium/proton cross-section ratios.",
      "claimIds": [
        "M-phys-whitlow1990-target-difference"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:whitlow1990-separation-context-whitlow1990-target-difference",
      "source": "phys:whitlow1990-separation-context",
      "target": "phys:whitlow1990-target-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The target-ratio regression adopts an Rp model and preserves its shared-error treatment.",
      "claimIds": [
        "M-phys-whitlow1990-target-difference"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:inclusive-dis-response-whitlow1990-target-difference",
      "source": "phys:inclusive-dis-response",
      "target": "phys:whitlow1990-target-difference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The response convention defines the target ratio being separated; the fit remains conditional on its selected response model.",
      "claimIds": [
        "M-phys-whitlow1990-target-difference"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:whitlow1990-normalized-crosssections-whitlow1990-separated-r",
      "source": "phys:whitlow1990-normalized-crosssections",
      "target": "phys:whitlow1990-separated-r",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected and mutually normalized cross sections supply the reduced-response regressions.",
      "claimIds": [
        "M-phys-whitlow1990-separated-r"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:whitlow1990-separation-context-whitlow1990-separated-r",
      "source": "phys:whitlow1990-separation-context",
      "target": "phys:whitlow1990-separated-r",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The correlated epsilon regressions determine the reported R values.",
      "claimIds": [
        "M-phys-whitlow1990-separated-r"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:inclusive-dis-response-whitlow1990-separated-r",
      "source": "phys:inclusive-dis-response",
      "target": "phys:whitlow1990-separated-r",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The stated Born convention fixes the separation meaning without imposing R=0.",
      "claimIds": [
        "M-phys-whitlow1990-separated-r"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:whitlow1990-target-difference-whitlow1990-separated-r",
      "source": "phys:whitlow1990-target-difference",
      "target": "phys:whitlow1990-separated-r",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Compatibility of the separate target-difference result motivates combining Rp and Rd within bins; it does not create an independent measurement.",
      "claimIds": [
        "M-phys-whitlow1990-separated-r"
      ],
      "contextIds": [
        "whitlow1990-separation"
      ]
    },
    {
      "id": "physics:quark-parton-response-whitlow1990-model-comparison",
      "source": "phys:quark-parton-response",
      "target": "phys:whitlow1990-model-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The leading electromagnetic parton definition clarifies the spin-one-half and finite-Q^2 interpretation boundary; it is not an input to the historical separation or a substitute for its CDHS distributions.",
      "claimIds": [
        "M-phys-whitlow1990-model-comparison"
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    },
    {
      "id": "physics:whitlow1990-separated-r-whitlow1990-model-comparison",
      "source": "phys:whitlow1990-separated-r",
      "target": "phys:whitlow1990-model-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The measured kinematic R pattern is the response compared with the specified theory curves.",
      "claimIds": [
        "M-phys-whitlow1990-model-comparison"
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    },
    {
      "id": "physics:whitlow1990-target-difference-whitlow1990-model-comparison",
      "source": "phys:whitlow1990-target-difference",
      "target": "phys:whitlow1990-model-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The separate target-difference result constrains only the named target-asymmetric alternatives.",
      "claimIds": [
        "M-phys-whitlow1990-model-comparison"
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    },
    {
      "id": "physics:whitlow1990-comparison-context-whitlow1990-model-comparison",
      "source": "phys:whitlow1990-comparison-context",
      "target": "phys:whitlow1990-model-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The interpretation retains the adopted model curves and their dependence on earlier data and PDFs.",
      "claimIds": [
        "M-phys-whitlow1990-model-comparison"
      ],
      "contextIds": [
        "whitlow1990-comparison"
      ]
    }
  ],
  "studies": [
    {
      "id": "bloom1969-response",
      "sourceId": "bloom1969",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.23.930",
      "journal": "Physical Review Letters",
      "volume": "23",
      "issue": "16",
      "pages": "930-934",
      "system": "SLAC inclusive electron-nucleon scattering",
      "preparation": "For the existing SLAC electron-only acquisition, Bloom describes a 7 cm liquid-hydrogen target, beam-current monitors, a magnetic spectrometer and electron/pion discrimination. Correct dead time, tracking and identification efficiency, target-density changes, empty-target yields and positron-estimated backgrounds. Subtract the calculated elastic radiative tail, then unfold all spectra at each angle in two dimensions using the peaking approximation, interpolation and some extrapolation. SLAC and MIT analyses of the same data are averaged.",
      "observable": "Corrected electron-only continuum spectra and differential cross sections",
      "finding": "The report gives corrected d^2sigma/(dOmega dEprime) for W>=2 GeV at 6 and 10 degrees. Table I spans incident settings 7.000-17.696 GeV; its 6-degree and 10-degree columns use 10^-31 and 10^-32 cm^2/(sr GeV), respectively. Figure 1 separates pre-radiative spectra, the elastic tail and corrected spectra; Figure 2 shows the continuum changing much less with momentum transfer than the resonances. These are the companion data underlying the admitted Breidenbach interpretation.",
      "limitations": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "Table I errors are one-standard-deviation counting and electron-detection uncertainties propagated through unfolding; combined systematic errors are excluded and estimated as 5% above scattered energy 5 GeV, rising to 10% near 3 GeV.",
        "The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "SLAC-PUB-642 pages 2-4: electron-only acquisition, spectrometer response, target-density and background corrections",
        "SLAC-PUB-642 pages 4-6: elastic radiative-tail subtraction, two-dimensional unfolding and error conventions",
        "SLAC-PUB-642 pages 6-12, Table I and Figures 1-2: corrected spectra, differential cross sections and companion-paper provenance"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.23.930",
      "correctionCheck": "Primary author report and publisher metadata checked. The review preserves stated author-version discrepancies and does not claim a comprehensive later-correction search or reproduction of the underlying analysis."
    },
    {
      "id": "whitlow1990-reanalysis",
      "sourceId": "whitlow1990-r",
      "studyType": "experimental-reanalysis",
      "doi": "10.1016/0370-2693(90)91176-C",
      "journal": "Physics Letters B",
      "volume": "250",
      "issue": "1-2",
      "pages": "193-198",
      "system": "SLAC inclusive electron-nucleon scattering",
      "preparation": "The 1990 analysis reuses 5835 electron-proton and electron-deuteron cross-section measurements from eight 1970-1985 SLAC experiments using the 1.6, 8 and 20 GeV spectrometers. The archive supplies varied beam/scattering settings spanning 0.1<=x<=0.9 and 0.6<=Q^2<=20 (GeV/c)^2; this record identifies the reused input sample, not a fresh 1990 exposure. Recalculate internal Bardin and external Tsai radiative corrections with experiment-specific target models. Fit smooth cross-section models with floating relative normalizations anchored to E140; E89a instead uses elastic comparisons because its kinematics are disjoint. Anchor hydrogen through the assumed common E49b proton/deuteron normalization. Preserve normalization correlations, correction uncertainty versus epsilon, and bin-centering adjustments.",
      "observable": "Radiatively corrected and mutually normalized archived cross-section inputs",
      "finding": "Table 1 reports fitted relative cross-section multipliers, not independent luminosity measurements: E139 deuterium is 1.008 +/-0.004 statistical +/-0.002 systematic relative to E140=1.000; E49b hydrogen uses the common 0.981 normalization fixed by its deuterium fit. The corrected, mutually normalized and bin-centered cross sections supply the subsequent separation; the complete input table and covariance are not reconstructed here.",
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
        "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/037026939091176C",
      "correctionCheck": "Primary author report and publisher metadata checked. The review preserves stated author-version discrepancies and does not claim a comprehensive later-correction search or reproduction of the underlying analysis."
    },
    {
      "id": "whitlow1990-separation",
      "sourceId": "whitlow1990-r",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(90)91176-C",
      "journal": "Physics Letters B",
      "volume": "250",
      "issue": "1-2",
      "pages": "193-198",
      "system": "SLAC inclusive electron-nucleon scattering",
      "preparation": "At fixed x,Q^2, regress the flux-divided cross sections against epsilon and propagate the known statistical/systematic correlations. The report gives 176 R regressions, typically using six measurements from four experiments across an epsilon range about 0.5. Separately regress deuterium/proton ratios against epsilonPrime=1/(1+epsilon*Rp), adopting a model for Rp, and average the resulting target differences over Q^2. Exclude E140 deuterium from the global Rd regressions while retaining its normalization-anchor role.",
      "observable": "Separated R ratios and the distinct target-ratio regression",
      "finding": "The 176 regressions report mean chi^2 per degree of freedom 0.91 and nonconstant R values across the stated x,Q^2 range. After comparing target differences, the authors combine Rp and Rd within bins, respecting asymmetric parent distributions; Figure 2 displays these global results separately from improved E140 averages of Rd and RFe. A constant R=0 or R=0.18 is an adopted extraction approximation, not what all these separated data measure. The separate 86 target-ratio regressions have reported mean chi^2 per degree of freedom 0.99. Their full-range average is Rd-Rp=-0.001 +/-0.009 statistical +/-0.009 systematic, compatible with zero over the reviewed kinematics. This finite-precision consistency result does not establish exact target equality or independently measure a free-neutron response.",
      "limitations": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair.",
        "The reviewed author report prints Equation 1 without the cos^2(theta/2) factor and its epsilon line without the factor 2. The declared response convention is the equivalent first-Born form derived from the separately cited PDG equations; this textual mismatch does not establish an error in the authors' numerical analysis."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
        "SLAC-PUB-5284 pages 3-5 and 12-13, Table 1: radiative corrections, correlated relative normalizations and absolute-scale limits",
        "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/037026939091176C",
      "correctionCheck": "Primary author report and publisher metadata checked. The review preserves stated author-version discrepancies and does not claim a comprehensive later-correction search or reproduction of the underlying analysis."
    },
    {
      "id": "whitlow1990-comparison",
      "sourceId": "whitlow1990-r",
      "studyType": "computational-analysis",
      "doi": "10.1016/0370-2693(90)91176-C",
      "journal": "Physics Letters B",
      "volume": "250",
      "issue": "1-2",
      "pages": "193-198",
      "system": "SLAC inclusive electron-nucleon scattering",
      "preparation": "Compare the separated R dependence with the report's specified perturbative-QCD curves using CDHS quark distributions, with and without kinematic target-mass contributions. Keep its spin-zero diquark alternatives and preliminary-data-fitted twist-4 phenomenology distinct. The separately declared leading charge-weighted parton response clarifies what a massless spin-one-half limit means; it is not a retroactive PDF input or a reconstruction of these historical curves.",
      "observable": "Finite-Q^2 response dependence compared with specified theory curves",
      "finding": "In the studied SLAC range the report finds R systematically above the displayed perturbative calculation, including its target-mass variant, while the selected spin-zero diquark curves disagree with the target/kinematic pattern. The finite-Q^2 longitudinal response therefore qualifies a strict zero-R picture. Higher-twist effects are a proposed explanation, not a uniquely identified microscopic constituent population or proof against complete QCD.",
      "limitations": [
        "The compared curves adopt the cited perturbative calculation, CDHS quark distributions and optionally kinematic target-mass terms. These are specified model inputs, not a unique prediction of all QCD or a direct count/spin measurement of isolated quarks.",
        "The twist-4 phenomenology had used preliminary Rd results; its agreement is not an independent prediction. No higher-twist parameter, primordial transverse momentum or universal exclusion of every diquark correlation is admitted.",
        "The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "SLAC-PUB-5284 pages 5-6 and 14-16, Equation 5 and Figures 1-2: epsilon regressions, target difference and separate E140 points",
        "SLAC-PUB-5284 pages 6-10 and 14-17, Figures 2-3: specified parton calculations, dependent phenomenology and interpolation limits"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://www.sciencedirect.com/science/article/pii/037026939091176C",
      "correctionCheck": "Primary author report and publisher metadata checked. The review preserves stated author-version discrepancies and does not claim a comprehensive later-correction search or reproduction of the underlying analysis."
    }
  ],
  "comparisons": [
    {
      "id": "bloom1969-radiative-response",
      "candidate": "The two-step radiative procedure changes the shape and errors of the measured electron spectrum.",
      "alternative": "The same spectrum before radiative correction, retaining its elastic radiative tail.",
      "sourceIds": [
        "bloom1969"
      ],
      "discriminator": "Figure 1 shows the same 10 GeV, 6-degree spectrum before and after radiative correction and their ratio; the elastic peak display is reduced by a factor of six.",
      "result": "conditional-support",
      "limit": "The uncorrected panel is already detector/background corrected and is only before radiative correction. Raw events, response calibration and radiative programs are not replayed.",
      "assumptions": [
        "Only the scattered electron is selected; the hadronic recoil mass is inferred from electron kinematics. The corrected cross sections reuse the acquisition underlying the admitted Breidenbach spectrum/scaling, not an independent experiment.",
        "Table I errors are one-standard-deviation counting and electron-detection uncertainties propagated through unfolding; combined systematic errors are excluded and estimated as 5% above scattered energy 5 GeV, rising to 10% near 3 GeV."
      ],
      "claimIds": [
        "C-phys-bloom1969-corrected-crosssections"
      ]
    },
    {
      "id": "whitlow1990-target-consistency",
      "candidate": "The fitted proton-deuteron response difference is compatible with zero over the stated kinematics.",
      "alternative": "The selected diquark model predicts the nonzero target-difference pattern drawn in Figure 1.",
      "sourceIds": [
        "whitlow1990-r"
      ],
      "discriminator": "The 86 target-ratio regressions give Rd-Rp=-0.001 +/-0.009 statistical +/-0.009 systematic; Figure 1 compares the selected model curve.",
      "result": "conditional-support",
      "limit": "Finite-precision consistency is not exact equality or a separately extracted free-neutron response; the Rp-model and nuclear-response conditions remain separate.",
      "assumptions": [
        "This is a reanalysis of archived 1970-1985 SLAC measurements, not a new acquisition. The individual upstream experiments, target models and radiative programs are described inputs, not independently reconstructed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence."
      ],
      "claimIds": [
        "C-phys-whitlow1990-target-difference"
      ]
    },
    {
      "id": "whitlow1990-parton-interpretation",
      "candidate": "The separated R pattern is systematically above the specified perturbative curves, even after their kinematic target-mass correction.",
      "alternative": "The displayed perturbative and perturbative-plus-target-mass calculations, with the adopted CDHS distributions, describe the full measured pattern.",
      "sourceIds": [
        "whitlow1990-r"
      ],
      "discriminator": "Figures 2-3 compare the finite-Q^2 and x dependence; the report gives chi^2 values 465 and 207 for the two calculations against 100 SLAC global/E140 measurements. These goodness-of-fit summaries are reported, not recalculated.",
      "result": "conditional-support",
      "limit": "The compared curves adopt the cited perturbative calculation, CDHS quark distributions and optionally kinematic target-mass terms. These are specified model inputs, not a unique prediction of all QCD or a direct count/spin measurement of isolated quarks.",
      "assumptions": [
        "The twist-4 phenomenology had used preliminary Rd results; its agreement is not an independent prediction. No higher-twist parameter, primordial transverse momentum or universal exclusion of every diquark correlation is admitted.",
        "The report's Rfit is a dependent interpolation to 139 lepton-scattering measurements; it is not a new observation. The author report prints b1=0.635; that parameterization and the underlying numerical tables/covariance are not implemented or replayed here.",
        "Relative normalizations and epsilon-dependent errors are correlated. E140 deuterium points are excluded from the global Rd regressions but E140 remains their normalization anchor; separately plotted points do not remove every shared calibration or correction dependence.",
        "The plotted SLAC R errors exclude the additional +/-0.025 radiative-correction systematic. Absolute common normalization errors do not propagate into R; the report gives deuterium 1.7% in its body and 1.8% in the Table 1 caption, retained without choosing a repair."
      ],
      "claimIds": [
        "C-phys-whitlow1990-model-comparison"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:inclusive-dis-response",
      "role": "definition",
      "denotes": "The one-photon inclusive response and longitudinal/transverse separation convention, not a separated measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-inclusive-dis-response"
      ]
    },
    {
      "nodeId": "phys:bloom1969-response-context",
      "role": "experimental-context",
      "denotes": "The detector/background response and two-stage radiative procedure applied to the shared 1969 electron sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bloom1969-response-context"
      ]
    },
    {
      "nodeId": "phys:bloom1969-corrected-crosssections",
      "role": "scoped-phenomenon",
      "denotes": "The companion report's response-corrected electron continuum spectra/cross sections and their selected uncertainties.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bloom1969-corrected-crosssections"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-archive-context",
      "role": "experimental-context",
      "denotes": "The archived cross-section ensemble and kinematic coverage reused by the published global analysis.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-whitlow1990-archive-context"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-response-context",
      "role": "experimental-context",
      "denotes": "The adopted radiative model, correlated relative/absolute normalization anchors and bin-centering response.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-whitlow1990-response-context"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-normalized-crosssections",
      "role": "scoped-phenomenon",
      "denotes": "The reported fitted normalization factors and corrected cross-section ensemble used as the separation inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-whitlow1990-normalized-crosssections"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-separation-context",
      "role": "model-context",
      "denotes": "The correlated reduced-cross-section regressions and distinct Rp-model-dependent target-difference analysis.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-whitlow1990-separation-context"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-separated-r",
      "role": "scoped-phenomenon",
      "denotes": "The reported kinematic longitudinal/transverse ratios, including the dependent within-bin proton/deuteron combination.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-whitlow1990-separated-r"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-target-difference",
      "role": "scoped-phenomenon",
      "denotes": "The reported model-dependent target-response difference with separate statistical/systematic errors, not exact equality.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-whitlow1990-target-difference"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-comparison-context",
      "role": "model-context",
      "denotes": "The named historical model comparisons and an explicitly separate leading-parton interpretation convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-whitlow1990-comparison-context"
      ]
    },
    {
      "nodeId": "phys:whitlow1990-model-comparison",
      "role": "scoped-phenomenon",
      "denotes": "The published conditional disagreement/compatibility pattern for the selected response models, not a direct quark spin measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-whitlow1990-model-comparison"
      ]
    }
  ]
};

/** Preserve shared acquisition, radiative response and conditional separation. */
export function validateQuarkDisContracts(context) {
  for (const [kind, records] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of records) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing quark DIS ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Quark DIS ${kind} changed ${id}.${key}: preserve response, separation and source-version boundaries`);
    }
  }
  const targets = new Set([
    ...QUARK_DIS_ADMISSION.observations.map(([id]) => `phys:${id}`)
  ]);
  const incoming = new Set(contracts.relations.filter((r) => targets.has(r.target)).map((r) => r.id));
  for (const relation of context.relations.values()) {
    if (targets.has(relation.target)) assert.ok(incoming.has(relation.id),
      `Unreviewed incoming quark DIS inference: ${relation.id}`);
  }
}
