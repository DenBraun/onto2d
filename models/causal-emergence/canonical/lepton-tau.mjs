import assert from "node:assert/strict";

export const LEPTON_TAU_CHECKS = new Map();
export const LEPTON_TAU_ANALYTICAL_SOURCES = new Map();
export const LEPTON_TAU_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "belle2014-tau-acquisition-context",
      "M-phys-belle2014-tau-acquisition-context",
      [
        "belle2014-tau-acquisition"
      ]
    ],
    [
      "belle2014-tau-response-context",
      "M-phys-belle2014-tau-response-context",
      [
        "belle2014-tau-response"
      ]
    ],
    [
      "belle2014-tau-inference-context",
      "M-phys-belle2014-tau-inference-context",
      [
        "belle2014-tau-inference"
      ]
    ]
  ],
  "observations": [
    [
      "belle2014-tau-decay-lengths",
      "C-phys-belle2014-tau-decay-lengths",
      [
        "belle2014-tau-acquisition"
      ]
    ],
    [
      "belle2014-tau-lifetime",
      "C-phys-belle2014-tau-lifetime",
      [
        "belle2014-tau-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "belle2014-tau-acquisition-context-belle2014-tau-decay-lengths",
      "belle2014-tau-acquisition-context",
      "belle2014-tau-decay-lengths",
      "M-phys-belle2014-tau-decay-lengths",
      "measurement-context"
    ],
    [
      "belle2014-tau-response-context-belle2014-tau-decay-lengths",
      "belle2014-tau-response-context",
      "belle2014-tau-decay-lengths",
      "M-phys-belle2014-tau-decay-lengths",
      "interpretation-dependency"
    ],
    [
      "belle2014-tau-decay-lengths-belle2014-tau-lifetime",
      "belle2014-tau-decay-lengths",
      "belle2014-tau-lifetime",
      "M-phys-belle2014-tau-lifetime",
      "interpretation-dependency"
    ],
    [
      "belle2014-tau-response-context-belle2014-tau-lifetime",
      "belle2014-tau-response-context",
      "belle2014-tau-lifetime",
      "M-phys-belle2014-tau-lifetime",
      "interpretation-dependency"
    ],
    [
      "belle2014-tau-inference-context-belle2014-tau-lifetime",
      "belle2014-tau-inference-context",
      "belle2014-tau-lifetime",
      "M-phys-belle2014-tau-lifetime",
      "interpretation-dependency"
    ],
    [
      "lepton-fields-belle2014-tau-lifetime",
      "lepton-fields",
      "belle2014-tau-lifetime",
      "M-phys-belle2014-tau-lifetime",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "belle2014-tau-acquisition",
    "belle2014-tau-response",
    "belle2014-tau-inference"
  ],
  "comparisonIds": [
    "belle2014-tau-calibration"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "belle2014-tau-lifetime",
      "kind": "research-publication",
      "title": "Measurement of the tau-lepton lifetime at Belle",
      "authors": [
        "Belle Collaboration"
      ],
      "year": 2014,
      "doi": "10.1103/PhysRevLett.112.031801",
      "url": "https://arxiv.org/pdf/1310.8503v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-article",
        "locators": [
          "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
          "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
          "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "Author v1, page 16: combined mean decay length and lifetime with separate statistical and systematic errors"
        ],
        "limit": "Read the abstract and scientific body on author-v1 pages 4-16 and references on page 17; visually checked pages 6 and 10-13, Equations 1-2 and 4, Figures 1-3 and Table I. The sole arXiv version was submitted 31 October 2013; publisher metadata identifies PRL 112, 031801 (2014). The publisher PDF, upstream detector/generator papers and analysis files were not independently reviewed. No event, response, fit, covariance or systematic-error replay is claimed; the separate charge-difference/CPT limit is not admitted."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-belle2014-tau-acquisition-context",
      "kind": "method",
      "statement": "Use 711 fb^-1 of Belle e+e- collisions at the Upsilon(4S) and 60 MeV below it, with asymmetric 3.5 and 8 GeV beams. The SVD1/SVD2 subsets have 157/554 fb^-1. Select six charged pion candidates with total charge zero, three per thrust hemisphere, rejecting reconstructed K0S, Lambda and pi0 candidates and applying the stated photon, thrust, momentum, pseudomass, vertex and direction-solution cuts, including closest-line separation dl<0.03 cm.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The two detector configurations and on/off-resonance subsets contribute to one combined analysis; they are not independent repeats of its final result. Exact acquisition calendar dates are not supplied here."
      ],
      "contextIds": [
        "belle2014-tau-acquisition"
      ]
    },
    {
      "id": "M-phys-belle2014-tau-response-context",
      "kind": "method",
      "statement": "For the paired tau->3pi nu hypothesis, neglect neutrino mass and initially ISR/FSR when solving two possible CM tau directions; use their mean vector, adopted beam energy and tau mass to boost to the lab. Fit each three-track vertex, approximate each tau path as straight and use the closest points of the two paths as production estimates. Reconstruct t=l/(beta*gamma), a length equal to c times proper time. Signal/background simulation and separate dimuon control data inform response and systematic treatment.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Beam energy and tau mass are reconstruction inputs; the adopted mass is 1776.82 +/- 0.16 MeV/c^2, not measured in this fit. ISR/FSR, momentum calibration and detector alignment enter systematic treatment.",
        "The auxiliary e+e-->mu+mu- sample and MC response are distinct from the selected tau data. Figure 2 is a simulated reconstruction-minus-truth distribution, not a measured lifetime."
      ],
      "contextIds": [
        "belle2014-tau-response"
      ]
    },
    {
      "id": "M-phys-belle2014-tau-inference-context",
      "kind": "method",
      "statement": "Fit the reconstructed-length distribution with an exponential convolved with Equation 3 resolution plus fixed MC background shapes and normalizations. Float the signal normalization, exponential scale and five resolution parameters; fix asymmetry A=2.5 cm^-1. Calibrate the fitted scale with generated mean lengths 84, 87.11 and 90 micrometers. Apply the reported alignment, fixed-asymmetry, beam/radiation, fit-range, background and adopted-mass uncertainties before quoting the combined lifetime.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source supplies a distribution fit and MC calibration, not a locally reproduced likelihood or covariance. Its fitted resolution asymmetry is fixed because of its lifetime correlation; simulated background yields/shapes remain model inputs.",
        "The source uses length units for the fit variable and scale. Table I systematic errors are in micrometers; the reported total 0.101 micrometers is rounded to 0.10 in the final c*tau result."
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    },
    {
      "id": "C-phys-belle2014-tau-decay-lengths",
      "kind": "review-finding",
      "statement": "The source reports about 1.1 million selected data events. Figure 3 displays their reconstructed t=l/(beta*gamma) distribution in centimeters, with fitted signal-plus-background response and modeled background components. These are selected paired-decay candidates and reconstructed proper lengths, not direct clock readings or a background-free list of tau decays.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Both reconstructed lengths arise from the same paired event and joint direction/vertex construction; the approximate event count is not a count of independent clock measurements. Negative reconstructed lengths reflect response, not negative physical lifetimes."
      ],
      "contextIds": [
        "belle2014-tau-acquisition"
      ]
    },
    {
      "id": "C-phys-belle2014-tau-lifetime",
      "kind": "review-finding",
      "statement": "Belle reports mean c*tau=86.99 +/- 0.16 statistical +/- 0.10 systematic micrometers, equivalently tau=(290.17 +/- 0.53 statistical +/- 0.33 systematic) fs. This charge-combined mean lifetime is the result of the selected paired-three-pion sample and its calibrated response-convolution fit.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, page 16: combined mean decay length and lifetime with separate statistical and systematic errors",
          "role": "supports",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The same data feed reconstruction, calibration-conditioned fitting and the quoted result; these stages are not independent measurements. No full response, fit or systematic propagation is replayed.",
        "This is a tau-specific mean, not all-lepton stability, a separately measured decay width, exact charge equality or a new test of the separate CPT-difference limit."
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    },
    {
      "id": "M-phys-belle2014-tau-decay-lengths",
      "kind": "method",
      "statement": "Interpret the selected length distribution through the declared paired-decay selection and kinematic/vertex reconstruction. The plotted fit and MC background components are not additional acquired samples.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Both reconstructed lengths arise from the same paired event and joint direction/vertex construction; the approximate event count is not a count of independent clock measurements. Negative reconstructed lengths reflect response, not negative physical lifetimes."
      ],
      "contextIds": [
        "belle2014-tau-acquisition"
      ]
    },
    {
      "id": "M-phys-belle2014-tau-lifetime",
      "kind": "method",
      "statement": "The tau signal hypothesis, selected proper lengths, reconstruction response and calibrated exponential fit jointly condition this mean lifetime. Convert the fitted mean proper length to time using c; do not substitute an intrinsic-width measurement or transfer this result to every lepton.",
      "scope": "The Belle 2014 charge-combined tau lifetime inferred from paired three-pion decays under its reconstruction, response and fit model.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, page 16: combined mean decay length and lifetime with separate statistical and systematic errors",
          "role": "method",
          "note": "Supports the stated stage of the published Belle analysis."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The same data feed reconstruction, calibration-conditioned fitting and the quoted result; these stages are not independent measurements. No full response, fit or systematic propagation is replayed.",
        "This is a tau-specific mean, not all-lepton stability, a separately measured decay width, exact charge equality or a new test of the separate CPT-difference limit."
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:belle2014-tau-acquisition-context",
      "name": "Belle tau-pair acquisition",
      "kind": "context",
      "description": "Use 711 fb^-1 of Belle e+e- collisions at the Upsilon(4S) and 60 MeV below it, with asymmetric 3.5 and 8 GeV beams. The SVD1/SVD2 subsets have 157/554 fb^-1. Select six charged pion candidates with total charge zero, three per thrust hemisphere, rejecting reconstructed K0S, Lambda and pi0 candidates and applying the stated photon, thrust, momentum, pseudomass, vertex and direction-solution cuts, including closest-line separation dl<0.03 cm.",
      "claimIds": [
        "M-phys-belle2014-tau-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation"
        }
      ],
      "openObligations": [
        "The two detector configurations and on/off-resonance subsets contribute to one combined analysis; they are not independent repeats of its final result. Exact acquisition calendar dates are not supplied here."
      ]
    },
    {
      "id": "phys:belle2014-tau-response-context",
      "name": "Belle tau-length reconstruction and response",
      "kind": "context",
      "description": "For the paired tau->3pi nu hypothesis, neglect neutrino mass and initially ISR/FSR when solving two possible CM tau directions; use their mean vector, adopted beam energy and tau mass to boost to the lab. Fit each three-track vertex, approximate each tau path as straight and use the closest points of the two paths as production estimates. Reconstruct t=l/(beta*gamma), a length equal to c times proper time. Signal/background simulation and separate dimuon control data inform response and systematic treatment.",
      "claimIds": [
        "M-phys-belle2014-tau-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
        }
      ],
      "openObligations": [
        "Beam energy and tau mass are reconstruction inputs; the adopted mass is 1776.82 +/- 0.16 MeV/c^2, not measured in this fit. ISR/FSR, momentum calibration and detector alignment enter systematic treatment.",
        "The auxiliary e+e-->mu+mu- sample and MC response are distinct from the selected tau data. Figure 2 is a simulated reconstruction-minus-truth distribution, not a measured lifetime."
      ]
    },
    {
      "id": "phys:belle2014-tau-inference-context",
      "name": "Belle tau-lifetime fit and calibration",
      "kind": "context",
      "description": "Fit the reconstructed-length distribution with an exponential convolved with Equation 3 resolution plus fixed MC background shapes and normalizations. Float the signal normalization, exponential scale and five resolution parameters; fix asymmetry A=2.5 cm^-1. Calibrate the fitted scale with generated mean lengths 84, 87.11 and 90 micrometers. Apply the reported alignment, fixed-asymmetry, beam/radiation, fit-range, background and adopted-mass uncertainties before quoting the combined lifetime.",
      "claimIds": [
        "M-phys-belle2014-tau-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
        }
      ],
      "openObligations": [
        "The source supplies a distribution fit and MC calibration, not a locally reproduced likelihood or covariance. Its fitted resolution asymmetry is fixed because of its lifetime correlation; simulated background yields/shapes remain model inputs.",
        "The source uses length units for the fit variable and scale. Table I systematic errors are in micrometers; the reported total 0.101 micrometers is rounded to 0.10 in the final c*tau result."
      ]
    },
    {
      "id": "phys:belle2014-tau-decay-lengths",
      "name": "Belle reconstructed tau proper lengths",
      "kind": "scoped-process",
      "description": "The source reports about 1.1 million selected data events. Figure 3 displays their reconstructed t=l/(beta*gamma) distribution in centimeters, with fitted signal-plus-background response and modeled background components. These are selected paired-decay candidates and reconstructed proper lengths, not direct clock readings or a background-free list of tau decays.",
      "claimIds": [
        "C-phys-belle2014-tau-decay-lengths"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
        }
      ],
      "openObligations": [
        "Both reconstructed lengths arise from the same paired event and joint direction/vertex construction; the approximate event count is not a count of independent clock measurements. Negative reconstructed lengths reflect response, not negative physical lifetimes."
      ]
    },
    {
      "id": "phys:belle2014-tau-lifetime",
      "name": "Belle charge-combined tau lifetime",
      "kind": "scoped-process",
      "description": "Belle reports mean c*tau=86.99 +/- 0.16 statistical +/- 0.10 systematic micrometers, equivalently tau=(290.17 +/- 0.53 statistical +/- 0.33 systematic) fs. This charge-combined mean lifetime is the result of the selected paired-three-pion sample and its calibrated response-convolution fit.",
      "claimIds": [
        "C-phys-belle2014-tau-lifetime"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
        },
        {
          "sourceId": "belle2014-tau-lifetime",
          "locator": "Author v1, page 16: combined mean decay length and lifetime with separate statistical and systematic errors"
        }
      ],
      "openObligations": [
        "The same data feed reconstruction, calibration-conditioned fitting and the quoted result; these stages are not independent measurements. No full response, fit or systematic propagation is replayed.",
        "This is a tau-specific mean, not all-lepton stability, a separately measured decay width, exact charge equality or a new test of the separate CPT-difference limit."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:belle2014-tau-acquisition-context-belle2014-tau-decay-lengths",
      "source": "phys:belle2014-tau-acquisition-context",
      "target": "phys:belle2014-tau-decay-lengths",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared collider exposure and paired-three-pion selection define the candidate distribution.",
      "claimIds": [
        "M-phys-belle2014-tau-decay-lengths"
      ],
      "contextIds": [
        "belle2014-tau-acquisition"
      ]
    },
    {
      "id": "physics:belle2014-tau-response-context-belle2014-tau-decay-lengths",
      "source": "phys:belle2014-tau-response-context",
      "target": "phys:belle2014-tau-decay-lengths",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Kinematic direction reconstruction and fitted vertices determine the proper-length readout; no direct decay clock is acquired.",
      "claimIds": [
        "M-phys-belle2014-tau-decay-lengths"
      ],
      "contextIds": [
        "belle2014-tau-acquisition"
      ]
    },
    {
      "id": "physics:belle2014-tau-decay-lengths-belle2014-tau-lifetime",
      "source": "phys:belle2014-tau-decay-lengths",
      "target": "phys:belle2014-tau-lifetime",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same selected proper-length distribution is fitted; the approximate event count alone does not determine the lifetime.",
      "claimIds": [
        "M-phys-belle2014-tau-lifetime"
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    },
    {
      "id": "physics:belle2014-tau-response-context-belle2014-tau-lifetime",
      "source": "phys:belle2014-tau-response-context",
      "target": "phys:belle2014-tau-lifetime",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted kinematics, response simulation, auxiliary controls and detector systematics condition the mean-lifetime inference.",
      "claimIds": [
        "M-phys-belle2014-tau-lifetime"
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    },
    {
      "id": "physics:belle2014-tau-inference-context-belle2014-tau-lifetime",
      "source": "phys:belle2014-tau-inference-context",
      "target": "phys:belle2014-tau-lifetime",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The exponential convolution, fixed background model and MC calibration define the reported mean and error treatment.",
      "claimIds": [
        "M-phys-belle2014-tau-lifetime"
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    },
    {
      "id": "physics:lepton-fields-belle2014-tau-lifetime",
      "source": "phys:lepton-fields",
      "target": "phys:belle2014-tau-lifetime",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The tau-lepton species supplies the named signal hypothesis; the result does not measure the lifetimes or stability of all leptons.",
      "claimIds": [
        "M-phys-belle2014-tau-lifetime"
      ],
      "contextIds": [
        "belle2014-tau-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "belle2014-tau-acquisition",
      "sourceId": "belle2014-tau-lifetime",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.112.031801",
      "journal": "Physical Review Letters",
      "volume": "112",
      "issue": "3",
      "pages": "031801",
      "system": "Belle selected e+e-->tau+tau- with both candidates reconstructed as three-pion decays",
      "preparation": "Use 711 fb^-1 of Belle e+e- collisions at the Upsilon(4S) and 60 MeV below it, with asymmetric 3.5 and 8 GeV beams. The SVD1/SVD2 subsets have 157/554 fb^-1. Select six charged pion candidates with total charge zero, three per thrust hemisphere, rejecting reconstructed K0S, Lambda and pi0 candidates and applying the stated photon, thrust, momentum, pseudomass, vertex and direction-solution cuts, including closest-line separation dl<0.03 cm.",
      "observable": "Belle tau-pair acquisition",
      "finding": "The collider exposure and selected paired-three-pion preparation.",
      "limitations": [
        "The two detector configurations and on/off-resonance subsets contribute to one combined analysis; they are not independent repeats of its final result. Exact acquisition calendar dates are not supplied here."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
        "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.031801",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata. No exhaustive later-measurement or correction census is claimed."
    },
    {
      "id": "belle2014-tau-response",
      "sourceId": "belle2014-tau-lifetime",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.112.031801",
      "journal": "Physical Review Letters",
      "volume": "112",
      "issue": "3",
      "pages": "031801",
      "system": "Belle selected e+e-->tau+tau- with both candidates reconstructed as three-pion decays",
      "preparation": "For the paired tau->3pi nu hypothesis, neglect neutrino mass and initially ISR/FSR when solving two possible CM tau directions; use their mean vector, adopted beam energy and tau mass to boost to the lab. Fit each three-track vertex, approximate each tau path as straight and use the closest points of the two paths as production estimates. Reconstruct t=l/(beta*gamma), a length equal to c times proper time. Signal/background simulation and separate dimuon control data inform response and systematic treatment.",
      "observable": "Belle tau-length reconstruction and response",
      "finding": "The kinematic and vertex reconstruction, simulation and auxiliary-control inputs.",
      "limitations": [
        "Beam energy and tau mass are reconstruction inputs; the adopted mass is 1776.82 +/- 0.16 MeV/c^2, not measured in this fit. ISR/FSR, momentum calibration and detector alignment enter systematic treatment.",
        "The auxiliary e+e-->mu+mu- sample and MC response are distinct from the selected tau data. Figure 2 is a simulated reconstruction-minus-truth distribution, not a measured lifetime."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 5-7, Equations 1-2 and Figure 1: paired tau directions, vertices and reconstructed proper lengths",
        "Author v1, pages 7-8: collider exposure, detector configurations, three-pion event selection and simulation",
        "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.031801",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata. No exhaustive later-measurement or correction census is claimed."
    },
    {
      "id": "belle2014-tau-inference",
      "sourceId": "belle2014-tau-lifetime",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.112.031801",
      "journal": "Physical Review Letters",
      "volume": "112",
      "issue": "3",
      "pages": "031801",
      "system": "Belle selected e+e-->tau+tau- with both candidates reconstructed as three-pion decays",
      "preparation": "Fit the reconstructed-length distribution with an exponential convolved with Equation 3 resolution plus fixed MC background shapes and normalizations. Float the signal normalization, exponential scale and five resolution parameters; fix asymmetry A=2.5 cm^-1. Calibrate the fitted scale with generated mean lengths 84, 87.11 and 90 micrometers. Apply the reported alignment, fixed-asymmetry, beam/radiation, fit-range, background and adopted-mass uncertainties before quoting the combined lifetime.",
      "observable": "Belle tau-lifetime fit and calibration",
      "finding": "The conditional exponential-response fit, MC calibration and systematic prescription.",
      "limitations": [
        "The source supplies a distribution fit and MC calibration, not a locally reproduced likelihood or covariance. Its fitted resolution asymmetry is fixed because of its lifetime correlation; simulated background yields/shapes remain model inputs.",
        "The source uses length units for the fit variable and scale. Table I systematic errors are in micrometers; the reported total 0.101 micrometers is rounded to 0.10 in the final c*tau result."
      ],
      "readExtent": "full-primary-author-article",
      "reviewedLocators": [
        "Author v1, pages 9-12, Equations 3-4 and Figures 2-3: response, fitted length distribution and generated-lifetime calibration",
        "Author v1, pages 12-14 and Table I: alignment, auxiliary dimuon control, fit-range, background and adopted-mass uncertainties"
      ],
      "metadataCheckedAt": "2026-10-09",
      "metadataUrl": "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.112.031801",
      "correctionCheck": "Checked the sole arXiv version and publisher metadata. No exhaustive later-measurement or correction census is claimed."
    }
  ],
  "comparisons": [
    {
      "id": "belle2014-tau-calibration",
      "candidate": "The fitted exponential scale tracks the generated mean proper length under the Belle reconstruction and response model.",
      "alternative": "Selection or response produces a bias between generated mean length and the fitted scale.",
      "discriminator": "The authors fit MC samples generated at 84, 87.11 and 90 micrometers, including separate and combined detector configurations and before/after-selection controls. The reported linear slope is 0.97 +/- 0.03 and intercept 0.001 +/- 0.07 micrometers about an 87 micrometer pivot.",
      "result": "conditional-support",
      "limit": "This is a reported MC calibration and bias control, not an independent tau measurement or a local fit reproduction. Compatibility with unit slope and zero intercept does not prove that all detector/background modeling is exact.",
      "assumptions": [
        "The source supplies a distribution fit and MC calibration, not a locally reproduced likelihood or covariance. Its fitted resolution asymmetry is fixed because of its lifetime correlation; simulated background yields/shapes remain model inputs."
      ],
      "sourceIds": [
        "belle2014-tau-lifetime"
      ],
      "claimIds": [
        "M-phys-belle2014-tau-inference-context",
        "C-phys-belle2014-tau-lifetime"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:belle2014-tau-acquisition-context",
      "role": "experimental-context",
      "denotes": "The collider exposure and selected paired-three-pion preparation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-belle2014-tau-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:belle2014-tau-response-context",
      "role": "model-context",
      "denotes": "The kinematic and vertex reconstruction, simulation and auxiliary-control inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-belle2014-tau-response-context"
      ]
    },
    {
      "nodeId": "phys:belle2014-tau-inference-context",
      "role": "model-context",
      "denotes": "The conditional exponential-response fit, MC calibration and systematic prescription.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-belle2014-tau-inference-context"
      ]
    },
    {
      "nodeId": "phys:belle2014-tau-decay-lengths",
      "role": "scoped-phenomenon",
      "denotes": "The selected-candidate reconstructed proper-length distribution, with resolution and background.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-belle2014-tau-decay-lengths"
      ]
    },
    {
      "nodeId": "phys:belle2014-tau-lifetime",
      "role": "scoped-phenomenon",
      "denotes": "The publication-reported tau mean lifetime and its separate statistical/systematic uncertainties.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-belle2014-tau-lifetime"
      ]
    }
  ]
};

/** Preserve the primary lifetime result's length units and response/inference boundaries. */
export function validateLeptonTauContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const actual = records.get(id);
      assert.ok(actual, `Missing tau-lifetime ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(actual[key], value,
        `Tau-lifetime ${kind} changed ${id}.${key}: preserve reconstruction, response and conditional inference`);
    }
  }
}
