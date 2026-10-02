import assert from "node:assert/strict";

export const PION_DECAY_CHECKS = new Map([["pion-decay-printed-arithmetic", "C-phys-pion-decay-arithmetic"]]);
export const PION_DECAY_ANALYTICAL_SOURCES = new Map([["C-phys-pion-decay-arithmetic", "pion-decay-verifier"]]);

export const PION_DECAY_ADMISSION = {
  "definitions": [
    [
      "phys:pion-inclusive-decay-ratio",
      "D-phys-pion-inclusive-decay-ratio"
    ]
  ],
  "formalDependencies": [
    [
      "physics:partial-lifetime-pion-inclusive-decay-ratio",
      [
        "phys:partial-lifetime",
        "phys:pion-inclusive-decay-ratio"
      ]
    ]
  ],
  "contexts": [
    [
      "pienu2015-acquisition-context",
      "M-phys-pienu2015-acquisition-context",
      [
        "pienu2015-acquisition"
      ]
    ],
    [
      "pienu2015-fit-context",
      "M-phys-pienu2015-fit-context",
      [
        "pienu2015-timing-fit"
      ]
    ],
    [
      "pienu2015-correction-context",
      "M-phys-pienu2015-correction-context",
      [
        "pienu2015-correction"
      ]
    ],
    [
      "pion-decay-replay-context",
      "M-phys-pion-decay-replay-context",
      [
        "pion-decay-replay"
      ]
    ]
  ],
  "observations": [
    [
      "pienu2015-spectra",
      "C-phys-pienu2015-spectra",
      [
        "pienu2015-acquisition"
      ]
    ],
    [
      "pienu2015-raw-ratio",
      "C-phys-pienu2015-raw-ratio",
      [
        "pienu2015-timing-fit"
      ]
    ],
    [
      "pienu2015-corrected-ratio",
      "C-phys-pienu2015-corrected-ratio",
      [
        "pienu2015-correction"
      ]
    ],
    [
      "pion-decay-arithmetic",
      "C-phys-pion-decay-arithmetic",
      [
        "pion-decay-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "pienu2015-acquisition-context-pienu2015-spectra",
      "pienu2015-acquisition-context",
      "pienu2015-spectra",
      "M-phys-pienu2015-spectra",
      "measurement-context"
    ],
    [
      "pienu2015-spectra-pienu2015-raw-ratio",
      "pienu2015-spectra",
      "pienu2015-raw-ratio",
      "M-phys-pienu2015-raw-ratio",
      "interpretation-dependency"
    ],
    [
      "pienu2015-fit-context-pienu2015-raw-ratio",
      "pienu2015-fit-context",
      "pienu2015-raw-ratio",
      "M-phys-pienu2015-raw-ratio",
      "interpretation-dependency"
    ],
    [
      "pion-inclusive-decay-ratio-pienu2015-raw-ratio",
      "pion-inclusive-decay-ratio",
      "pienu2015-raw-ratio",
      "M-phys-pienu2015-raw-ratio",
      "interpretation-dependency"
    ],
    [
      "pienu2015-raw-ratio-pienu2015-corrected-ratio",
      "pienu2015-raw-ratio",
      "pienu2015-corrected-ratio",
      "M-phys-pienu2015-corrected-ratio",
      "interpretation-dependency"
    ],
    [
      "pienu2015-correction-context-pienu2015-corrected-ratio",
      "pienu2015-correction-context",
      "pienu2015-corrected-ratio",
      "M-phys-pienu2015-corrected-ratio",
      "interpretation-dependency"
    ],
    [
      "pion-inclusive-decay-ratio-pienu2015-corrected-ratio",
      "pion-inclusive-decay-ratio",
      "pienu2015-corrected-ratio",
      "M-phys-pienu2015-corrected-ratio",
      "interpretation-dependency"
    ],
    [
      "pion-inclusive-decay-ratio-pion-decay-arithmetic",
      "pion-inclusive-decay-ratio",
      "pion-decay-arithmetic",
      "M-phys-pion-decay-arithmetic",
      "interpretation-dependency"
    ],
    [
      "pienu2015-raw-ratio-pion-decay-arithmetic",
      "pienu2015-raw-ratio",
      "pion-decay-arithmetic",
      "M-phys-pion-decay-arithmetic",
      "interpretation-dependency"
    ],
    [
      "pienu2015-corrected-ratio-pion-decay-arithmetic",
      "pienu2015-corrected-ratio",
      "pion-decay-arithmetic",
      "M-phys-pion-decay-arithmetic",
      "interpretation-dependency"
    ],
    [
      "pienu2015-correction-context-pion-decay-arithmetic",
      "pienu2015-correction-context",
      "pion-decay-arithmetic",
      "M-phys-pion-decay-arithmetic",
      "interpretation-dependency"
    ],
    [
      "pion-decay-replay-context-pion-decay-arithmetic",
      "pion-decay-replay-context",
      "pion-decay-arithmetic",
      "M-phys-pion-decay-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "pienu2015-acquisition",
    "pienu2015-timing-fit",
    "pienu2015-correction",
    "pion-decay-replay"
  ],
  "comparisonIds": [
    "pienu2015-partial-rate-scope",
    "pion-decay-arithmetic-scope"
  ],
  "inferenceSources": [
    [
      "M-phys-pienu2015-acquisition-context",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pienu2015-fit-context",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pienu2015-correction-context",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "C-phys-pienu2015-spectra",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pienu2015-spectra",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "C-phys-pienu2015-raw-ratio",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pienu2015-raw-ratio",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "C-phys-pienu2015-corrected-ratio",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pienu2015-corrected-ratio",
      [
        "aguilar2015-pienu"
      ]
    ],
    [
      "M-phys-pion-decay-replay-context",
      [
        "aguilar2015-pienu",
        "pion-decay-verifier"
      ]
    ],
    [
      "C-phys-pion-decay-arithmetic",
      [
        "aguilar2015-pienu",
        "pion-decay-verifier"
      ]
    ],
    [
      "M-phys-pion-decay-arithmetic",
      [
        "aguilar2015-pienu",
        "pion-decay-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "pion-decay-replay",
      "pion-decay-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "aguilar2015-pienu",
      "kind": "research-publication",
      "title": "Improved measurement of the pi -> e nu branching ratio",
      "authors": [
        "A. Aguilar-Arevalo",
        "M. Aoki",
        "M. Blecher",
        "D. I. Britton",
        "D. A. Bryman",
        "D. vom Bruch",
        "S. Chen",
        "J. Comfort",
        "M. Ding",
        "L. Doria",
        "S. Cuen-Rochin",
        "P. Gumplinger",
        "A. Hussein",
        "Y. Igarashi",
        "S. Ito",
        "S. H. Kettell",
        "L. Kurchaninov",
        "L. S. Littenberg",
        "C. Malbrunot",
        "R. E. Mischke",
        "T. Numao",
        "D. Protopopescu",
        "A. Sher",
        "T. Sullivan",
        "D. Vavilov",
        "K. Yamada"
      ],
      "year": 2015,
      "doi": "10.1103/PhysRevLett.115.071801",
      "url": "https://arxiv.org/pdf/1506.05845v2",
      "path": null,
      "review": {
        "extent": "full-author-manuscript",
        "locators": [
          "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection",
          "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components",
          "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions",
          "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "arXiv:1506.05845v2 pages 4-5: first-result scope, separate universality/new-physics interpretation, prospective larger data sample and references"
        ],
        "limit": "All five pages of the versioned author manuscript were read. Figures 2-3 and Table I were visually inspected. Publisher metadata/abstract confirms PRL 115, 071801 (2015); the publisher PDF, event-level data and referenced detector/theory publications were not reviewed. The paper also gives an electron/muon universality comparison and a hypothetical-neutrino limit, but those require separate theoretical inputs and are not admitted in this block. No newest-data claim, pooling of later overlapping PIENU exposure or exhaustive later-correction search is made."
      }
    },
    {
      "id": "pion-decay-verifier",
      "kind": "executable-check",
      "title": "PIENU printed correction and conditional ratio arithmetic verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-pion-decay.py",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions"
        ],
        "limit": "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-pion-inclusive-decay-ratio",
      "kind": "review-finding",
      "statement": "Define R_e/mu=Gamma(pi+ -> e+ nu(gamma))/Gamma(pi+ -> mu+ nu(gamma)), with associated radiative pion decays included in each partial rate. The dimensionless ratio compares two specified channels; a total decay rate is not measured by this ratio alone.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection",
          "role": "supports",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist.",
        "The numerator and denominator include the associated radiative pion modes. Instrumental energy cuts do not redefine them as photon-exclusive decay channels.",
        "The inclusive convention is retained as stated in the paper. The implementation of inner-bremsstrahlung, structure-dependent and interference contributions is not independently reconstructed or narrowed to an IB-only definition."
      ]
    },
    {
      "id": "M-phys-pienu2015-acquisition-context",
      "kind": "method",
      "statement": "Stop a 75 MeV/c positive-pion beam in the scintillator target. Use the stated positron triggers, extra-activity rejection and 60 mm tracking fiducial cut. The energy plot uses a 5-35 ns region; the low/high timing samples use their specified trigger streams and a 52 MeV split.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        },
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here.",
        "The pion-to-muon chain contains an unstable intermediate daughter. It does not itself demonstrate a shorter-lived daughter or prove any universal monotonic ordering of stability; the muon is longer-lived than the pion. Energy/channel conditions replace the old unrestricted more-stable wording."
      ],
      "contextIds": [
        "pienu2015-acquisition"
      ]
    },
    {
      "id": "M-phys-pienu2015-fit-context",
      "kind": "method",
      "statement": "Fit the low/high timing samples together with L1-L3 and H1-H6 components, a common fixed time origin and the declared nuisance treatment. Use -290 to 520 ns while excluding -19 to 4 ns; preserve the same acquisition and pre-unblinding choice of cuts and corrections.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced.",
        "The sequential pion-muon term assumes exponential decay laws in this fitted model. The paper uses adopted pion/muon lifetime values and only reports a stability check with them free; it does not supply new independent lifetime measurements here."
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "M-phys-pienu2015-correction-context",
      "kind": "method",
      "statement": "Apply the Table I multiplicative factors to the raw fitted ratio: acceptance 0.9991 +/- 0.0003, tail 1.0316 +/- 0.0012 and other 1.0004 +/- 0.0008. Retain the empirical upper/lower tail construction and simulation dependence. A dedicated 70 MeV/c positron-beam sample in a simplified setup constrains the upper tail; 10-70 MeV/c positron-beam and stopped-muon controls constrain timing response. These auxiliary preparations supply response inputs rather than a new pion ratio.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The calorimeter-tail correction uses an empirical response estimate treated as an upper bound and a background-suppressed estimate adjusted with simulation for a lower bound. These bounds and the stated 1.0316 correction are author inferences; they are not independently Gaussian measurements or a reproduced tail-response analysis.",
        "The Table I factors correct acceptance, low-energy tail and other effects of the same fitted ratio. Their published uncertainties and total systematic uncertainty are retained without an independently reconstructed covariance or uncertainty combination.",
        "The numerator and denominator include the associated radiative pion modes. Instrumental energy cuts do not redefine them as photon-exclusive decay channels.",
        "The inclusive convention is retained as stated in the paper. The implementation of inner-bremsstrahlung, structure-dependent and interference contributions is not independently reconstructed or narrowed to an IB-only definition."
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "C-phys-pienu2015-spectra",
      "kind": "review-finding",
      "statement": "Figure 2 reports the selected calorimeter-energy distributions before and after background-suppression cuts. Figure 3 reports the low/high timing distributions separated at 52 MeV, with fitted component curves shown separately. These distinguish direct electronic-pion candidates from the pion-muon-positron chain within the declared response and background model.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components",
          "role": "supports",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The pion-to-muon chain contains an unstable intermediate daughter. It does not itself demonstrate a shorter-lived daughter or prove any universal monotonic ordering of stability; the muon is longer-lived than the pion. Energy/channel conditions replace the old unrestricted more-stable wording."
      ],
      "contextIds": [
        "pienu2015-acquisition"
      ]
    },
    {
      "id": "M-phys-pienu2015-spectra",
      "kind": "method",
      "statement": "Interpret pienu selected positron energy and time spectra only under its declared preparation and same-acquisition analysis stage.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The pion-to-muon chain contains an unstable intermediate daughter. It does not itself demonstrate a shorter-lived daughter or prove any universal monotonic ordering of stability; the muon is longer-lived than the pion. Energy/channel conditions replace the old unrestricted more-stable wording."
      ],
      "contextIds": [
        "pienu2015-acquisition"
      ]
    },
    {
      "id": "C-phys-pienu2015-raw-ratio",
      "kind": "review-finding",
      "statement": "The simultaneous timing fit reports R_raw=(1.1972 +/- 0.0022 statistical +/- 0.0005 systematic) x 10^-4, with chi-square per degree of freedom 1.02 for 673 degrees of freedom. It is a fitted same-acquisition intermediate result.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions",
          "role": "supports",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        },
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "supports",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced.",
        "The sequential pion-muon term assumes exponential decay laws in this fitted model. The paper uses adopted pion/muon lifetime values and only reports a stability check with them free; it does not supply new independent lifetime measurements here.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist."
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "M-phys-pienu2015-raw-ratio",
      "kind": "method",
      "statement": "Interpret pienu ratio before acceptance and tail correction only under its declared preparation and same-acquisition analysis stage.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        },
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced.",
        "The sequential pion-muon term assumes exponential decay laws in this fitted model. The paper uses adopted pion/muon lifetime values and only reports a stability check with them free; it does not supply new independent lifetime measurements here.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist."
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "C-phys-pienu2015-corrected-ratio",
      "kind": "review-finding",
      "statement": "After the published Table I corrections, PIENU reports R_e/mu=(1.2344 +/- 0.0023 statistical +/- 0.0019 systematic) x 10^-4 for the inclusive electronic-to-muonic pion partial-rate ratio.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "supports",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist.",
        "The numerator and denominator include the associated radiative pion modes. Instrumental energy cuts do not redefine them as photon-exclusive decay channels.",
        "The calorimeter-tail correction uses an empirical response estimate treated as an upper bound and a background-suppressed estimate adjusted with simulation for a lower bound. These bounds and the stated 1.0316 correction are author inferences; they are not independently Gaussian measurements or a reproduced tail-response analysis.",
        "The Table I factors correct acceptance, low-energy tail and other effects of the same fitted ratio. Their published uncertainties and total systematic uncertainty are retained without an independently reconstructed covariance or uncertainty combination.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The paper also gives an electron/muon universality comparison and a hypothetical-neutrino limit, but those require separate theoretical inputs and are not admitted in this block. No newest-data claim, pooling of later overlapping PIENU exposure or exhaustive later-correction search is made.",
        "The old card numerical parent weights, Nmin/Ncrit values, necessary lepton/Higgs/EFT/virtual-excitation inputs and universal laboratory-to-cosmology population law are excluded from active semantics.",
        "The inclusive convention is retained as stated in the paper. The implementation of inner-bremsstrahlung, structure-dependent and interference contributions is not independently reconstructed or narrowed to an IB-only definition."
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "M-phys-pienu2015-corrected-ratio",
      "kind": "method",
      "statement": "Interpret pienu corrected inclusive pion ratio only under its declared preparation and same-acquisition analysis stage.",
      "scope": "Specified PIENU stopped-positive-pion preparation and radiatively inclusive electronic-to-muonic partial-rate ratio.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "method",
          "note": "Supports only the stated preparation, detector-level readout or conditional same-acquisition inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist.",
        "The numerator and denominator include the associated radiative pion modes. Instrumental energy cuts do not redefine them as photon-exclusive decay channels.",
        "The calorimeter-tail correction uses an empirical response estimate treated as an upper bound and a background-suppressed estimate adjusted with simulation for a lower bound. These bounds and the stated 1.0316 correction are author inferences; they are not independently Gaussian measurements or a reproduced tail-response analysis.",
        "The Table I factors correct acceptance, low-energy tail and other effects of the same fitted ratio. Their published uncertainties and total systematic uncertainty are retained without an independently reconstructed covariance or uncertainty combination.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The paper also gives an electron/muon universality comparison and a hypothetical-neutrino limit, but those require separate theoretical inputs and are not admitted in this block. No newest-data claim, pooling of later overlapping PIENU exposure or exhaustive later-correction search is made.",
        "The old card numerical parent weights, Nmin/Ncrit values, necessary lepton/Higgs/EFT/virtual-excitation inputs and universal laboratory-to-cosmology population law are excluded from active semantics.",
        "The inclusive convention is retained as stated in the paper. The implementation of inner-bremsstrahlung, structure-dependent and interference contributions is not independently reconstructed or narrowed to an IB-only definition."
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "M-phys-pion-decay-replay-context",
      "kind": "method",
      "statement": "Check the printed PIENU Table I correction product and its display-rounding bounds. Use synthetic forward signal counts to test common-exposure and efficiency cancellation and demonstrate that a two-channel rate ratio alone does not identify absolute branching fractions.",
      "scope": "Printed PIENU correction arithmetic and explicitly synthetic rate-ratio models; no experimental reconstruction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "method",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        },
        {
          "sourceId": "pion-decay-verifier",
          "locator": "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions",
          "role": "method",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference.",
        "The table ratio rows are coefficients of 10^-4; the three correction factors are dimensionless multipliers. Reported statistical and systematic uncertainties are retained as source inputs, not independently reproduced outputs.",
        "The half-last-digit input box is display arithmetic, not a statistical confidence region or a reconstruction of unrounded fitted quantities.",
        "Cancellation requires equal corrected exposure in the synthetic model. PIENU uses distinct trigger streams and fitted time components; a simple selected-count ratio is not a replacement for its acquisition or fit.",
        "Distinct synthetic absolute branching allocations can give the same partial-rate ratio. They are mathematical witnesses, not inferred pion fractions or evidence for a specific additional decay channel."
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "C-phys-pion-decay-arithmetic",
      "kind": "review-finding",
      "statement": "The printed central correction gives 1.1972*0.9991*1.0316*1.0004=1.2344135596286528 in units of 10^-4, which rounds to the reported 1.2344. A positive-factor display-rounding box overlaps the reported display bin. Thirty-two synthetic efficiency/exposure witnesses preserve the ratio under common exposure, while unequal exposure does not cancel; distinct synthetic absolute branching allocations retain the same ratio.",
      "scope": "Printed PIENU correction arithmetic and explicitly synthetic rate-ratio models; no experimental reconstruction.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "supports",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        },
        {
          "sourceId": "pion-decay-verifier",
          "locator": "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions",
          "role": "supports",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        }
      ],
      "checkIds": [
        "pion-decay-printed-arithmetic"
      ],
      "limitations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference.",
        "The table ratio rows are coefficients of 10^-4; the three correction factors are dimensionless multipliers. Reported statistical and systematic uncertainties are retained as source inputs, not independently reproduced outputs.",
        "The half-last-digit input box is display arithmetic, not a statistical confidence region or a reconstruction of unrounded fitted quantities.",
        "Cancellation requires equal corrected exposure in the synthetic model. PIENU uses distinct trigger streams and fitted time components; a simple selected-count ratio is not a replacement for its acquisition or fit.",
        "Distinct synthetic absolute branching allocations can give the same partial-rate ratio. They are mathematical witnesses, not inferred pion fractions or evidence for a specific additional decay channel."
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "M-phys-pion-decay-arithmetic",
      "kind": "method",
      "statement": "Apply only the printed correction factors and declared synthetic ratio identities; keep the experimental intermediate and final ratios as inputs and comparison targets.",
      "scope": "Printed PIENU correction arithmetic and explicitly synthetic rate-ratio models; no experimental reconstruction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio",
          "role": "method",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        },
        {
          "sourceId": "pion-decay-verifier",
          "locator": "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions",
          "role": "method",
          "note": "Supplies printed inputs or the stated finite executable calculation; not experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference.",
        "The table ratio rows are coefficients of 10^-4; the three correction factors are dimensionless multipliers. Reported statistical and systematic uncertainties are retained as source inputs, not independently reproduced outputs.",
        "The half-last-digit input box is display arithmetic, not a statistical confidence region or a reconstruction of unrounded fitted quantities.",
        "Cancellation requires equal corrected exposure in the synthetic model. PIENU uses distinct trigger streams and fitted time components; a simple selected-count ratio is not a replacement for its acquisition or fit.",
        "Distinct synthetic absolute branching allocations can give the same partial-rate ratio. They are mathematical witnesses, not inferred pion fractions or evidence for a specific additional decay channel."
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:pion-inclusive-decay-ratio",
      "name": "Photon-inclusive pion partial-rate ratio",
      "kind": "definition",
      "description": "Define R_e/mu=Gamma(pi+ -> e+ nu(gamma))/Gamma(pi+ -> mu+ nu(gamma)), with associated radiative pion decays included in each partial rate. The dimensionless ratio compares two specified channels; a total decay rate is not measured by this ratio alone.",
      "claimIds": [
        "D-phys-pion-inclusive-decay-ratio"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection"
        }
      ],
      "openObligations": [
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist."
      ]
    },
    {
      "id": "phys:pienu2015-acquisition-context",
      "name": "PIENU stopped-pion acquisition",
      "kind": "context",
      "description": "Stop a 75 MeV/c positive-pion beam in the scintillator target. Use the stated positron triggers, extra-activity rejection and 60 mm tracking fiducial cut. The energy plot uses a 5-35 ns region; the low/high timing samples use their specified trigger streams and a 52 MeV split.",
      "claimIds": [
        "M-phys-pienu2015-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection"
        },
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components"
        }
      ],
      "openObligations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census."
      ]
    },
    {
      "id": "phys:pienu2015-fit-context",
      "name": "PIENU simultaneous timing inference",
      "kind": "context",
      "description": "Fit the low/high timing samples together with L1-L3 and H1-H6 components, a common fixed time origin and the declared nuisance treatment. Use -290 to 520 ns while excluding -19 to 4 ns; preserve the same acquisition and pre-unblinding choice of cuts and corrections.",
      "claimIds": [
        "M-phys-pienu2015-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions"
        }
      ],
      "openObligations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census."
      ]
    },
    {
      "id": "phys:pienu2015-correction-context",
      "name": "PIENU acceptance and tail correction",
      "kind": "context",
      "description": "Apply the Table I multiplicative factors to the raw fitted ratio: acceptance 0.9991 +/- 0.0003, tail 1.0316 +/- 0.0012 and other 1.0004 +/- 0.0008. Retain the empirical upper/lower tail construction and simulation dependence. A dedicated 70 MeV/c positron-beam sample in a simplified setup constrains the upper tail; 10-70 MeV/c positron-beam and stopped-muon controls constrain timing response. These auxiliary preparations supply response inputs rather than a new pion ratio.",
      "claimIds": [
        "M-phys-pienu2015-correction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
        }
      ],
      "openObligations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census."
      ]
    },
    {
      "id": "phys:pienu2015-spectra",
      "name": "PIENU selected positron energy and time spectra",
      "kind": "scoped-process",
      "description": "Figure 2 reports the selected calorimeter-energy distributions before and after background-suppression cuts. Figure 3 reports the low/high timing distributions separated at 52 MeV, with fitted component curves shown separately. These distinguish direct electronic-pion candidates from the pion-muon-positron chain within the declared response and background model.",
      "claimIds": [
        "C-phys-pienu2015-spectra"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components"
        }
      ],
      "openObligations": [
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here."
      ]
    },
    {
      "id": "phys:pienu2015-raw-ratio",
      "name": "PIENU ratio before acceptance and tail correction",
      "kind": "scoped-process",
      "description": "The simultaneous timing fit reports R_raw=(1.1972 +/- 0.0022 statistical +/- 0.0005 systematic) x 10^-4, with chi-square per degree of freedom 1.02 for 673 degrees of freedom. It is a fitted same-acquisition intermediate result.",
      "claimIds": [
        "C-phys-pienu2015-raw-ratio"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions"
        },
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
        }
      ],
      "openObligations": [
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced."
      ]
    },
    {
      "id": "phys:pienu2015-corrected-ratio",
      "name": "PIENU corrected inclusive pion ratio",
      "kind": "scoped-process",
      "description": "After the published Table I corrections, PIENU reports R_e/mu=(1.2344 +/- 0.0023 statistical +/- 0.0019 systematic) x 10^-4 for the inclusive electronic-to-muonic pion partial-rate ratio.",
      "claimIds": [
        "C-phys-pienu2015-corrected-ratio"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
        }
      ],
      "openObligations": [
        "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist."
      ]
    },
    {
      "id": "phys:pion-decay-replay-context",
      "name": "Finite PIENU correction arithmetic",
      "kind": "context",
      "description": "Check the printed PIENU Table I correction product and its display-rounding bounds. Use synthetic forward signal counts to test common-exposure and efficiency cancellation and demonstrate that a two-channel rate ratio alone does not identify absolute branching fractions.",
      "claimIds": [
        "M-phys-pion-decay-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
        },
        {
          "sourceId": "pion-decay-verifier",
          "locator": "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions"
        }
      ],
      "openObligations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference."
      ]
    },
    {
      "id": "phys:pion-decay-arithmetic",
      "name": "Checked PIENU printed ratio arithmetic",
      "kind": "scoped-process",
      "description": "The printed central correction gives 1.1972*0.9991*1.0316*1.0004=1.2344135596286528 in units of 10^-4, which rounds to the reported 1.2344. A positive-factor display-rounding box overlaps the reported display bin. Thirty-two synthetic efficiency/exposure witnesses preserve the ratio under common exposure, while unequal exposure does not cancel; distinct synthetic absolute branching allocations retain the same ratio.",
      "claimIds": [
        "C-phys-pion-decay-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "aguilar2015-pienu",
          "locator": "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
        },
        {
          "sourceId": "pion-decay-verifier",
          "locator": "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions"
        }
      ],
      "openObligations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference."
      ]
    }
  ],
  "studies": [
    {
      "id": "pienu2015-acquisition",
      "sourceId": "aguilar2015-pienu",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.115.071801",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "7",
      "pages": "071801",
      "system": "PIENU stopped-pion acquisition",
      "preparation": "Stop a 75 MeV/c positive-pion beam in the scintillator target. Use the stated positron triggers, extra-activity rejection and 60 mm tracking fiducial cut. The energy plot uses a 5-35 ns region; the low/high timing samples use their specified trigger streams and a 52 MeV split.",
      "observable": "PIENU selected positron energy and time spectra",
      "finding": "Figure 2 reports the selected calorimeter-energy distributions before and after background-suppression cuts. Figure 3 reports the low/high timing distributions separated at 52 MeV, with fitted component curves shown separately. These distinguish direct electronic-pion candidates from the pion-muon-positron chain within the declared response and background model.",
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here.",
        "The pion-to-muon chain contains an unstable intermediate daughter. It does not itself demonstrate a shorter-lived daughter or prove any universal monotonic ordering of stability; the muon is longer-lived than the pion. Energy/channel conditions replace the old unrestricted more-stable wording."
      ],
      "readExtent": "full-author-manuscript",
      "reviewedLocators": [
        "arXiv:1506.05845v2 pages 1-2: photon-inclusive ratio, stopped-pion beam, detector, triggers and event selection",
        "arXiv:1506.05845v2 page 2, Figures 2-3: detector-energy spectra, low/high-energy timing distributions, 52 MeV separation and fit components"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.071801",
      "correctionCheck": "Versioned author v2 and publisher DOI/result were checked. The paper calls this its first result and forecasts a larger sample; no exhaustive later-correction review or newest-data claim is made."
    },
    {
      "id": "pienu2015-timing-fit",
      "sourceId": "aguilar2015-pienu",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.071801",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "7",
      "pages": "071801",
      "system": "PIENU simultaneous timing inference",
      "preparation": "Fit the low/high timing samples together with L1-L3 and H1-H6 components, a common fixed time origin and the declared nuisance treatment. Use -290 to 520 ns while excluding -19 to 4 ns; preserve the same acquisition and pre-unblinding choice of cuts and corrections.",
      "observable": "PIENU ratio before acceptance and tail correction",
      "finding": "The simultaneous timing fit reports R_raw=(1.1972 +/- 0.0022 statistical +/- 0.0005 systematic) x 10^-4, with chi-square per degree of freedom 1.02 for 673 degrees of freedom. It is a fitted same-acquisition intermediate result.",
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced.",
        "The sequential pion-muon term assumes exponential decay laws in this fitted model. The paper uses adopted pion/muon lifetime values and only reports a stability check with them free; it does not supply new independent lifetime measurements here."
      ],
      "readExtent": "full-author-manuscript",
      "reviewedLocators": [
        "arXiv:1506.05845v2 pages 2-3: L1-L3 and H1-H6 time components, simultaneous fit, fit windows, raw ratio and nuisance assumptions",
        "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.071801",
      "correctionCheck": "Versioned author v2 and publisher DOI/result were checked. The paper calls this its first result and forecasts a larger sample; no exhaustive later-correction review or newest-data claim is made."
    },
    {
      "id": "pienu2015-correction",
      "sourceId": "aguilar2015-pienu",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.071801",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "7",
      "pages": "071801",
      "system": "PIENU acceptance and tail correction",
      "preparation": "Apply the Table I multiplicative factors to the raw fitted ratio: acceptance 0.9991 +/- 0.0003, tail 1.0316 +/- 0.0012 and other 1.0004 +/- 0.0008. Retain the empirical upper/lower tail construction and simulation dependence. A dedicated 70 MeV/c positron-beam sample in a simplified setup constrains the upper tail; 10-70 MeV/c positron-beam and stopped-muon controls constrain timing response. These auxiliary preparations supply response inputs rather than a new pion ratio.",
      "observable": "PIENU corrected inclusive pion ratio",
      "finding": "After the published Table I corrections, PIENU reports R_e/mu=(1.2344 +/- 0.0023 statistical +/- 0.0019 systematic) x 10^-4 for the inclusive electronic-to-muonic pion partial-rate ratio.",
      "limitations": [
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The calorimeter-tail correction uses an empirical response estimate treated as an upper bound and a background-suppressed estimate adjusted with simulation for a lower bound. These bounds and the stated 1.0316 correction are author inferences; they are not independently Gaussian measurements or a reproduced tail-response analysis.",
        "The Table I factors correct acceptance, low-energy tail and other effects of the same fitted ratio. Their published uncertainties and total systematic uncertainty are retained without an independently reconstructed covariance or uncertainty combination.",
        "The numerator and denominator include the associated radiative pion modes. Instrumental energy cuts do not redefine them as photon-exclusive decay channels."
      ],
      "readExtent": "full-author-manuscript",
      "reviewedLocators": [
        "arXiv:1506.05845v2 pages 3-4 and Table I: acceptance, empirical tail bounds, timing/other corrections and final reported ratio"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.115.071801",
      "correctionCheck": "Versioned author v2 and publisher DOI/result were checked. The paper calls this its first result and forecasts a larger sample; no exhaustive later-correction review or newest-data claim is made."
    },
    {
      "id": "pion-decay-replay",
      "sourceId": "pion-decay-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite PIENU printed arithmetic",
      "preparation": "Check the printed PIENU Table I correction product and its display-rounding bounds. Use synthetic forward signal counts to test common-exposure and efficiency cancellation and demonstrate that a two-channel rate ratio alone does not identify absolute branching fractions.",
      "observable": "Printed product, display-rounding bounds and synthetic conditional ratio identities.",
      "finding": "The printed central correction gives 1.1972*0.9991*1.0316*1.0004=1.2344135596286528 in units of 10^-4, which rounds to the reported 1.2344. A positive-factor display-rounding box overlaps the reported display bin. Thirty-two synthetic efficiency/exposure witnesses preserve the ratio under common exposure, while unequal exposure does not cancel; distinct synthetic absolute branching allocations retain the same ratio.",
      "limitations": [
        "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference.",
        "The table ratio rows are coefficients of 10^-4; the three correction factors are dimensionless multipliers. Reported statistical and systematic uncertainties are retained as source inputs, not independently reproduced outputs.",
        "The half-last-digit input box is display arithmetic, not a statistical confidence region or a reconstruction of unrounded fitted quantities.",
        "Cancellation requires equal corrected exposure in the synthetic model. PIENU uses distinct trigger streams and fitted time components; a simple selected-count ratio is not a replacement for its acquisition or fit.",
        "Distinct synthetic absolute branching allocations can give the same partial-rate ratio. They are mathematical witnesses, not inferred pion fractions or evidence for a specific additional decay channel."
      ],
      "readExtent": "scoped-executable-replay",
      "reviewedLocators": [
        "verify(): Table I central correction product, positive-factor display-rounding box, synthetic common-exposure/efficiency cancellation and non-identification of absolute branching fractions"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "The local executable is the calculation owner; printed paper values are inputs and comparison targets. No original fit or complete uncertainty replay is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "pienu2015-partial-rate-scope",
      "candidate": "A specified radiatively inclusive partial-rate ratio is inferred from selected spectra with conditional corrections.",
      "alternative": "An above/below-threshold count split directly measures pure decay modes, a total lifetime or universal daughter stability.",
      "discriminator": "Track the measured spectra, timing fit, empirical/simulated correction inputs and final ratio as separate stages of the same acquisition.",
      "result": "conditional-support",
      "limit": "R_e/mu is the ratio of two radiatively inclusive partial rates. It is neither an absolute branching fraction nor a total pion lifetime. Do not convert R to an absolute fraction by assuming that only these two channels exist.",
      "assumptions": [
        "Figures 2-3 are detector-level selected distributions with backgrounds, leakage, radiation, trigger selection and finite resolution. They are not unfolded differential decay-rate tables, pure-channel counts or released event data; no curve or histogram is numerically digitized here.",
        "The raw ratio is already a simultaneous fit of low/high-energy timing distributions with specified components and fixed or constrained nuisance terms. The label raw means before the later corrections, not unprocessed acquisition or a simple above/below-cut count ratio. Original histograms, response simulation, fit implementation and covariance are not reproduced.",
        "The calorimeter-tail correction uses an empirical response estimate treated as an upper bound and a background-suppressed estimate adjusted with simulation for a lower bound. These bounds and the stated 1.0316 correction are author inferences; they are not independently Gaussian measurements or a reproduced tail-response analysis.",
        "The published pion spectra, fitted ratio and corrected ratio reuse the same PIENU pion acquisition. Auxiliary positron-beam response measurements, stopped-muon controls and simulation enter the corrections; they are not extra independent pion branching-ratio measurements. The paper does not state the pion acquisition calendar dates. Approximately 400000 electronic-decay events refers to the specified selection stage, not an exact background-free census.",
        "The pion-to-muon chain contains an unstable intermediate daughter. It does not itself demonstrate a shorter-lived daughter or prove any universal monotonic ordering of stability; the muon is longer-lived than the pion. Energy/channel conditions replace the old unrestricted more-stable wording."
      ],
      "sourceIds": [
        "aguilar2015-pienu"
      ],
      "claimIds": [
        "C-phys-pienu2015-spectra",
        "C-phys-pienu2015-raw-ratio",
        "C-phys-pienu2015-corrected-ratio"
      ]
    },
    {
      "id": "pion-decay-arithmetic-scope",
      "candidate": "Finite printed arithmetic and conditional ratio identities can be checked.",
      "alternative": "A matching rounded central value reconstructs the experiment, correction covariance or absolute branching fractions.",
      "discriminator": "Check the product and explicitly synthetic exposure witnesses while retaining separate source-derived experimental outputs.",
      "result": "conditional-support",
      "limit": "The executable checks printed central correction arithmetic and display-rounding bounds, plus explicitly synthetic common-exposure and efficiency identities. It does not replay acquisition, simultaneous timing fits, auxiliary response measurements, empirical tail-bound combination, correction uncertainties, covariance, lifetime fits or universality inference.",
      "assumptions": [
        "The table ratio rows are coefficients of 10^-4; the three correction factors are dimensionless multipliers. Reported statistical and systematic uncertainties are retained as source inputs, not independently reproduced outputs.",
        "The half-last-digit input box is display arithmetic, not a statistical confidence region or a reconstruction of unrounded fitted quantities.",
        "Cancellation requires equal corrected exposure in the synthetic model. PIENU uses distinct trigger streams and fitted time components; a simple selected-count ratio is not a replacement for its acquisition or fit.",
        "Distinct synthetic absolute branching allocations can give the same partial-rate ratio. They are mathematical witnesses, not inferred pion fractions or evidence for a specific additional decay channel."
      ],
      "sourceIds": [
        "aguilar2015-pienu",
        "pion-decay-verifier"
      ],
      "claimIds": [
        "C-phys-pion-decay-arithmetic"
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:partial-lifetime-pion-inclusive-decay-ratio",
      "source": "phys:partial-lifetime",
      "target": "phys:pion-inclusive-decay-ratio",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The existing partial-rate convention specifies what the numerator and denominator mean; taking their ratio supplies neither a total lifetime nor an absolute branching fraction.",
      "claimIds": [
        "D-phys-pion-inclusive-decay-ratio"
      ]
    },
    {
      "id": "physics:pienu2015-acquisition-context-pienu2015-spectra",
      "source": "phys:pienu2015-acquisition-context",
      "target": "phys:pienu2015-spectra",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "Selection, trigger streams and detector response define these measured distributions.",
      "claimIds": [
        "M-phys-pienu2015-spectra"
      ],
      "contextIds": [
        "pienu2015-acquisition"
      ]
    },
    {
      "id": "physics:pienu2015-spectra-pienu2015-raw-ratio",
      "source": "phys:pienu2015-spectra",
      "target": "phys:pienu2015-raw-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The raw ratio is inferred by fitting the timing distributions from this same acquisition; it is not a separate count sample.",
      "claimIds": [
        "M-phys-pienu2015-raw-ratio"
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "physics:pienu2015-fit-context-pienu2015-raw-ratio",
      "source": "phys:pienu2015-fit-context",
      "target": "phys:pienu2015-raw-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The timing components, adopted lifetimes and nuisance treatment condition the fitted intermediate ratio.",
      "claimIds": [
        "M-phys-pienu2015-raw-ratio"
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "physics:pion-inclusive-decay-ratio-pienu2015-raw-ratio",
      "source": "phys:pion-inclusive-decay-ratio",
      "target": "phys:pienu2015-raw-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted quantity targets the specified electronic/muonic ratio before acceptance and tail corrections.",
      "claimIds": [
        "M-phys-pienu2015-raw-ratio"
      ],
      "contextIds": [
        "pienu2015-timing-fit"
      ]
    },
    {
      "id": "physics:pienu2015-raw-ratio-pienu2015-corrected-ratio",
      "source": "phys:pienu2015-raw-ratio",
      "target": "phys:pienu2015-corrected-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected result reuses the same fitted intermediate ratio, not an independent branching-ratio measurement.",
      "claimIds": [
        "M-phys-pienu2015-corrected-ratio"
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "physics:pienu2015-correction-context-pienu2015-corrected-ratio",
      "source": "phys:pienu2015-correction-context",
      "target": "phys:pienu2015-corrected-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Acceptance, tail and other response corrections transform the intermediate ratio into the published channel definition.",
      "claimIds": [
        "M-phys-pienu2015-corrected-ratio"
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "physics:pion-inclusive-decay-ratio-pienu2015-corrected-ratio",
      "source": "phys:pion-inclusive-decay-ratio",
      "target": "phys:pienu2015-corrected-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The photon-inclusive definition bounds the interpretation of the corrected partial-rate ratio.",
      "claimIds": [
        "M-phys-pienu2015-corrected-ratio"
      ],
      "contextIds": [
        "pienu2015-correction"
      ]
    },
    {
      "id": "physics:pion-inclusive-decay-ratio-pion-decay-arithmetic",
      "source": "phys:pion-inclusive-decay-ratio",
      "target": "phys:pion-decay-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The specified inclusive partial-rate ratio defines the quantity checked; synthetic branch allocations do not supply a total lifetime.",
      "claimIds": [
        "M-phys-pion-decay-arithmetic"
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "physics:pienu2015-raw-ratio-pion-decay-arithmetic",
      "source": "phys:pienu2015-raw-ratio",
      "target": "phys:pion-decay-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The published intermediate fitted ratio is an input to the correction product, not a locally refitted output.",
      "claimIds": [
        "M-phys-pion-decay-arithmetic"
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "physics:pienu2015-corrected-ratio-pion-decay-arithmetic",
      "source": "phys:pienu2015-corrected-ratio",
      "target": "phys:pion-decay-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The published final ratio is a rounded comparison target, not a second local measurement.",
      "claimIds": [
        "M-phys-pion-decay-arithmetic"
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "physics:pienu2015-correction-context-pion-decay-arithmetic",
      "source": "phys:pienu2015-correction-context",
      "target": "phys:pion-decay-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed factors supply arithmetic inputs; auxiliary response measurements, tail bounds and uncertainties remain unreplayed.",
      "claimIds": [
        "M-phys-pion-decay-arithmetic"
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    },
    {
      "id": "physics:pion-decay-replay-context-pion-decay-arithmetic",
      "source": "phys:pion-decay-replay-context",
      "target": "phys:pion-decay-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The finite procedure delimits what the local calculation establishes and keeps synthetic signals separate from acquisition.",
      "claimIds": [
        "M-phys-pion-decay-arithmetic"
      ],
      "contextIds": [
        "pion-decay-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:pion-inclusive-decay-ratio",
      "role": "definition",
      "denotes": "Define R_e/mu=Gamma(pi+ -> e+ nu(gamma))/Gamma(pi+ -> mu+ nu(gamma)), with associated radiative pion decays included in each partial rate. The dimensionless ratio compares two specified channels; a total decay rate is not measured by this ratio alone.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-pion-inclusive-decay-ratio"
      ]
    },
    {
      "nodeId": "phys:pienu2015-acquisition-context",
      "role": "experimental-context",
      "denotes": "Stop a 75 MeV/c positive-pion beam in the scintillator target. Use the stated positron triggers, extra-activity rejection and 60 mm tracking fiducial cut. The energy plot uses a 5-35 ns region; the low/high timing samples use their specified trigger streams and a 52 MeV split.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-pienu2015-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:pienu2015-fit-context",
      "role": "model-context",
      "denotes": "Fit the low/high timing samples together with L1-L3 and H1-H6 components, a common fixed time origin and the declared nuisance treatment. Use -290 to 520 ns while excluding -19 to 4 ns; preserve the same acquisition and pre-unblinding choice of cuts and corrections.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-pienu2015-fit-context"
      ]
    },
    {
      "nodeId": "phys:pienu2015-correction-context",
      "role": "model-context",
      "denotes": "Apply the Table I multiplicative factors to the raw fitted ratio: acceptance 0.9991 +/- 0.0003, tail 1.0316 +/- 0.0012 and other 1.0004 +/- 0.0008. Retain the empirical upper/lower tail construction and simulation dependence. A dedicated 70 MeV/c positron-beam sample in a simplified setup constrains the upper tail; 10-70 MeV/c positron-beam and stopped-muon controls constrain timing response. These auxiliary preparations supply response inputs rather than a new pion ratio.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-pienu2015-correction-context"
      ]
    },
    {
      "nodeId": "phys:pienu2015-spectra",
      "role": "scoped-phenomenon",
      "denotes": "Figure 2 reports the selected calorimeter-energy distributions before and after background-suppression cuts. Figure 3 reports the low/high timing distributions separated at 52 MeV, with fitted component curves shown separately. These distinguish direct electronic-pion candidates from the pion-muon-positron chain within the declared response and background model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-pienu2015-spectra"
      ]
    },
    {
      "nodeId": "phys:pienu2015-raw-ratio",
      "role": "scoped-phenomenon",
      "denotes": "The simultaneous timing fit reports R_raw=(1.1972 +/- 0.0022 statistical +/- 0.0005 systematic) x 10^-4, with chi-square per degree of freedom 1.02 for 673 degrees of freedom. It is a fitted same-acquisition intermediate result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-pienu2015-raw-ratio"
      ]
    },
    {
      "nodeId": "phys:pienu2015-corrected-ratio",
      "role": "scoped-phenomenon",
      "denotes": "After the published Table I corrections, PIENU reports R_e/mu=(1.2344 +/- 0.0023 statistical +/- 0.0019 systematic) x 10^-4 for the inclusive electronic-to-muonic pion partial-rate ratio.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-pienu2015-corrected-ratio"
      ]
    },
    {
      "nodeId": "phys:pion-decay-replay-context",
      "role": "model-context",
      "denotes": "Check the printed PIENU Table I correction product and its display-rounding bounds. Use synthetic forward signal counts to test common-exposure and efficiency cancellation and demonstrate that a two-channel rate ratio alone does not identify absolute branching fractions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-pion-decay-replay-context"
      ]
    },
    {
      "nodeId": "phys:pion-decay-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "The printed central correction gives 1.1972*0.9991*1.0316*1.0004=1.2344135596286528 in units of 10^-4, which rounds to the reported 1.2344. A positive-factor display-rounding box overlaps the reported display bin. Thirty-two synthetic efficiency/exposure witnesses preserve the ratio under common exposure, while unequal exposure does not cancel; distinct synthetic absolute branching allocations retain the same ratio.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-pion-decay-arithmetic"
      ]
    }
  ]
};

/** Preserve partial-rate meaning, auxiliary response inputs and calculation ownership. */
export function validatePionDecayContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing pion-decay ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Pion-decay ${kind} changed ${id}.${key}: preserve same-acquisition and finite-calculation scope`);
      }
    }
  }
}
