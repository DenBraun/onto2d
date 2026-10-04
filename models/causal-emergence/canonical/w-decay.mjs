import assert from "node:assert/strict";

export const W_DECAY_CHECKS = new Map();
export const W_DECAY_ANALYTICAL_SOURCES = new Map();
export const W_DECAY_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "lep2013-w-width-acquisition-context",
      "M-phys-lep2013-w-width-acquisition-context",
      [
        "lep2013-w-width-acquisition"
      ]
    ],
    [
      "lep2013-w-width-response-context",
      "M-phys-lep2013-w-width-response-context",
      [
        "lep2013-w-width-response"
      ]
    ],
    [
      "lep2013-w-width-inference-context",
      "M-phys-lep2013-w-width-inference-context",
      [
        "lep2013-w-width-inference"
      ]
    ],
    [
      "lep2013-w-branching-acquisition-context",
      "M-phys-lep2013-w-branching-acquisition-context",
      [
        "lep2013-w-branching-acquisition"
      ]
    ],
    [
      "lep2013-w-branching-response-context",
      "M-phys-lep2013-w-branching-response-context",
      [
        "lep2013-w-branching-response"
      ]
    ],
    [
      "lep2013-w-branching-inference-context",
      "M-phys-lep2013-w-branching-inference-context",
      [
        "lep2013-w-branching-inference"
      ]
    ]
  ],
  "observations": [
    [
      "lep2013-w-width",
      "C-phys-lep2013-w-width",
      [
        "lep2013-w-width-inference"
      ]
    ],
    [
      "lep2013-w-branching-nonuniversal",
      "C-phys-lep2013-w-branching-nonuniversal",
      [
        "lep2013-w-branching-inference"
      ]
    ],
    [
      "lep2013-w-branching-universal",
      "C-phys-lep2013-w-branching-universal",
      [
        "lep2013-w-branching-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "lep2013-w-width-acquisition-context-lep2013-w-width",
      "lep2013-w-width-acquisition-context",
      "lep2013-w-width",
      "M-phys-lep2013-w-width",
      "measurement-context"
    ],
    [
      "lep2013-w-width-response-context-lep2013-w-width",
      "lep2013-w-width-response-context",
      "lep2013-w-width",
      "M-phys-lep2013-w-width",
      "interpretation-dependency"
    ],
    [
      "lep2013-w-width-inference-context-lep2013-w-width",
      "lep2013-w-width-inference-context",
      "lep2013-w-width",
      "M-phys-lep2013-w-width",
      "interpretation-dependency"
    ],
    [
      "inclusive-decay-width-branching-lep2013-w-width",
      "inclusive-decay-width-branching",
      "lep2013-w-width",
      "M-phys-lep2013-w-width",
      "interpretation-dependency"
    ],
    [
      "lep2013-w-branching-acquisition-context-lep2013-w-branching-nonuniversal",
      "lep2013-w-branching-acquisition-context",
      "lep2013-w-branching-nonuniversal",
      "M-phys-lep2013-w-branching-nonuniversal",
      "measurement-context"
    ],
    [
      "lep2013-w-branching-response-context-lep2013-w-branching-nonuniversal",
      "lep2013-w-branching-response-context",
      "lep2013-w-branching-nonuniversal",
      "M-phys-lep2013-w-branching-nonuniversal",
      "interpretation-dependency"
    ],
    [
      "lep2013-w-branching-inference-context-lep2013-w-branching-nonuniversal",
      "lep2013-w-branching-inference-context",
      "lep2013-w-branching-nonuniversal",
      "M-phys-lep2013-w-branching-nonuniversal",
      "interpretation-dependency"
    ],
    [
      "inclusive-decay-width-branching-lep2013-w-branching-nonuniversal",
      "inclusive-decay-width-branching",
      "lep2013-w-branching-nonuniversal",
      "M-phys-lep2013-w-branching-nonuniversal",
      "interpretation-dependency"
    ],
    [
      "lep2013-w-branching-acquisition-context-lep2013-w-branching-universal",
      "lep2013-w-branching-acquisition-context",
      "lep2013-w-branching-universal",
      "M-phys-lep2013-w-branching-universal",
      "measurement-context"
    ],
    [
      "lep2013-w-branching-response-context-lep2013-w-branching-universal",
      "lep2013-w-branching-response-context",
      "lep2013-w-branching-universal",
      "M-phys-lep2013-w-branching-universal",
      "interpretation-dependency"
    ],
    [
      "lep2013-w-branching-inference-context-lep2013-w-branching-universal",
      "lep2013-w-branching-inference-context",
      "lep2013-w-branching-universal",
      "M-phys-lep2013-w-branching-universal",
      "interpretation-dependency"
    ],
    [
      "inclusive-decay-width-branching-lep2013-w-branching-universal",
      "inclusive-decay-width-branching",
      "lep2013-w-branching-universal",
      "M-phys-lep2013-w-branching-universal",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "lep2013-w-width-acquisition",
    "lep2013-w-width-response",
    "lep2013-w-width-inference",
    "lep2013-w-branching-acquisition",
    "lep2013-w-branching-response",
    "lep2013-w-branching-inference"
  ],
  "comparisonIds": [
    "lep2013-w-width-interpretation",
    "lep2013-w-branching-constraints"
  ],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "lep2013-w-width-branching",
      "kind": "research-publication",
      "title": "Electroweak Measurements in Electron-Positron Collisions at W-Boson-Pair Energies at LEP",
      "authors": [
        "ALEPH Collaboration",
        "DELPHI Collaboration",
        "L3 Collaboration",
        "OPAL Collaboration",
        "LEP Electroweak Working Group"
      ],
      "year": 2013,
      "doi": "10.1016/j.physrep.2013.07.004",
      "url": "https://arxiv.org/pdf/1302.3415v4",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response",
          "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "Section 7.3.5, author pages 134-138, Tables 7.3-7.4: detector, beam energy, hadronisation, radiation and final-state-interaction uncertainties",
          "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention"
        ],
        "limit": "Read selected author-v4 passages on pages 86-89, 93-95, 129-138, 140-141 and 196, plus the Figure 7.3 caption on page 144; visually checked pages 88, 93, 94, 132, 140, 141 and 196. Version 4 is dated 19 September 2013; publisher typesetting and the complete 242-page report were not independently reviewed. The topology-fraction, correlation and OPAL uncertainty discrepancies remain explicit claim limits."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-lep2013-w-width-acquisition-context",
      "kind": "method",
      "statement": "Use the four experiments direct-reconstruction inputs from 1996-2000 at 172-209 GeV, primarily fully hadronic and semileptonic WW selections. Reconstructed jets, charged leptons and assigned missing momentum define the channel inputs.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "contextIds": [
        "lep2013-w-width-acquisition"
      ]
    },
    {
      "id": "M-phys-lep2013-w-width-response-context",
      "kind": "method",
      "statement": "Adopt calibrated jet/lepton response, beam-energy constraints, radiative four-fermion signal and backgrounds, and hadronisation and final-state-interaction models. Kinematic mass estimators include response and unobserved-radiation corrections; the width analysis retains standard jet reconstruction.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 7.3.5, author pages 134-138, Tables 7.3-7.4: detector, beam energy, hadronisation, radiation and final-state-interaction uncertainties",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The width analysis does not use the modified jet reconstruction that suppresses final-state interactions in the mass analysis. Shared hadronisation, radiation, calibration and final-state-interaction uncertainties remain inputs.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "contextIds": [
        "lep2013-w-width-response"
      ]
    },
    {
      "id": "M-phys-lep2013-w-width-inference-context",
      "kind": "method",
      "statement": "Fit mass estimators by experiment-specific reweighting or response convolution, varying m_W and Gamma_W independently for width extraction. Combine experiment, channel and period results with BLUE and shared systematics, using a relativistic Breit-Wigner propagator with s-dependent width.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination."
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "M-phys-lep2013-w-branching-acquisition-context",
      "kind": "method",
      "statement": "Use the four experiments WW channel selections from 1997-2000 at 183-207 GeV. The report distinguishes ten four-fermion final states through jets, charged leptons and missing momentum; Table 5.1 specifies the exposure bins.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "contextIds": [
        "lep2013-w-branching-acquisition"
      ]
    },
    {
      "id": "M-phys-lep2013-w-branching-response-context",
      "kind": "method",
      "statement": "Relate selected channel yields to cross sections through luminosity, acceptance, signal efficiency and expected backgrounds. Retain the source CC03 diagrammatic WW signal convention, explicitly not gauge invariant by itself, and the shared detector and theory uncertainty categories.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "Page 88 prints illustrative topology fractions 0.456, 0.349 and 0.105, summing to 0.910. They are not silently corrected or used as normalized input; this does not establish an error in the experimental fit.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "contextIds": [
        "lep2013-w-branching-response"
      ]
    },
    {
      "id": "M-phys-lep2013-w-branching-inference-context",
      "kind": "method",
      "statement": "Combine experiment branching estimates with the full 12 by 12 covariance. Keep the fit without lepton universality separate from the fit with a common leptonic fraction and the sum-to-unity constraint; lepton-mass effects are neglected in the source treatment.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error."
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "C-phys-lep2013-w-width",
      "kind": "review-finding",
      "statement": "The LEP combination reports Gamma_W = 2.195 +/- 0.063 statistical +/- 0.055 systematic GeV, with total uncertainty 0.083 GeV, in its declared s-dependent Breit-Wigner convention.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention",
          "role": "supports",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "role": "supports",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination.",
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here."
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "M-phys-lep2013-w-width",
      "kind": "method",
      "statement": "Interpret the published combined energy width with its response, freely fitted mass and width, and correlated combination inputs.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination.",
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here."
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "C-phys-lep2013-w-branching-nonuniversal",
      "kind": "review-finding",
      "statement": "Without lepton universality, LEP reports B_e = 10.71 +/- 0.16%, B_mu = 10.63 +/- 0.15% and B_tau = 11.38 +/- 0.21%, with correlated total uncertainties.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "role": "supports",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "M-phys-lep2013-w-branching-nonuniversal",
      "kind": "method",
      "statement": "Interpret the three reported leptonic fractions from the covariance-aware fit without importing the separately constrained hadronic fraction.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "C-phys-lep2013-w-branching-universal",
      "kind": "review-finding",
      "statement": "Assuming lepton universality and neglecting lepton-mass effects, LEP reports B_had = 67.41 +/- 0.18 statistical +/- 0.20 systematic percent and each B_l = 10.86 +/- 0.06 statistical +/- 0.07 systematic percent, with their sum constrained to one.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "role": "supports",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "M-phys-lep2013-w-branching-universal",
      "kind": "method",
      "statement": "Interpret the common-lepton and hadronic fractions under the stated universality and normalization constraints on the same experimental inputs.",
      "scope": "The selected LEP-II W width and branching combinations, with their original acquisition, response, parameter and covariance conventions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality",
          "role": "method",
          "note": "Supports this reported stage; no acquisition or fit replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:lep2013-w-width-acquisition-context",
      "name": "LEP W width data preparation",
      "kind": "context",
      "description": "Use the four experiments direct-reconstruction inputs from 1996-2000 at 172-209 GeV, primarily fully hadronic and semileptonic WW selections. Reconstructed jets, charged leptons and assigned missing momentum define the channel inputs.",
      "claimIds": [
        "M-phys-lep2013-w-width-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs"
        }
      ],
      "openObligations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ]
    },
    {
      "id": "phys:lep2013-w-width-response-context",
      "name": "LEP W width response and corrections",
      "kind": "context",
      "description": "Adopt calibrated jet/lepton response, beam-energy constraints, radiative four-fermion signal and backgrounds, and hadronisation and final-state-interaction models. Kinematic mass estimators include response and unobserved-radiation corrections; the width analysis retains standard jet reconstruction.",
      "claimIds": [
        "M-phys-lep2013-w-width-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs"
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 7.3.5, author pages 134-138, Tables 7.3-7.4: detector, beam energy, hadronisation, radiation and final-state-interaction uncertainties"
        }
      ],
      "openObligations": [
        "The width analysis does not use the modified jet reconstruction that suppresses final-state interactions in the mass analysis. Shared hadronisation, radiation, calibration and final-state-interaction uncertainties remain inputs.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ]
    },
    {
      "id": "phys:lep2013-w-width-inference-context",
      "name": "LEP W width likelihood and combination",
      "kind": "context",
      "description": "Fit mass estimators by experiment-specific reweighting or response convolution, varying m_W and Gamma_W independently for width extraction. Combine experiment, channel and period results with BLUE and shared systematics, using a relativistic Breit-Wigner propagator with s-dependent width.",
      "claimIds": [
        "M-phys-lep2013-w-width-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs"
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention"
        }
      ],
      "openObligations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination."
      ]
    },
    {
      "id": "phys:lep2013-w-branching-acquisition-context",
      "name": "LEP W branching data preparation",
      "kind": "context",
      "description": "Use the four experiments WW channel selections from 1997-2000 at 183-207 GeV. The report distinguishes ten four-fermion final states through jets, charged leptons and missing momentum; Table 5.1 specifies the exposure bins.",
      "claimIds": [
        "M-phys-lep2013-w-branching-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response"
        }
      ],
      "openObligations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ]
    },
    {
      "id": "phys:lep2013-w-branching-response-context",
      "name": "LEP W branching response and signal convention",
      "kind": "context",
      "description": "Relate selected channel yields to cross sections through luminosity, acceptance, signal efficiency and expected backgrounds. Retain the source CC03 diagrammatic WW signal convention, explicitly not gauge invariant by itself, and the shared detector and theory uncertainty categories.",
      "claimIds": [
        "M-phys-lep2013-w-branching-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response"
        }
      ],
      "openObligations": [
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "Page 88 prints illustrative topology fractions 0.456, 0.349 and 0.105, summing to 0.910. They are not silently corrected or used as normalized input; this does not establish an error in the experimental fit.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ]
    },
    {
      "id": "phys:lep2013-w-branching-inference-context",
      "name": "LEP W branching correlated fits",
      "kind": "context",
      "description": "Combine experiment branching estimates with the full 12 by 12 covariance. Keep the fit without lepton universality separate from the fit with a common leptonic fraction and the sum-to-unity constraint; lepton-mass effects are neglected in the source treatment.",
      "claimIds": [
        "M-phys-lep2013-w-branching-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality"
        }
      ],
      "openObligations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error."
      ]
    },
    {
      "id": "phys:lep2013-w-width",
      "name": "LEP combined W decay width",
      "kind": "scoped-process",
      "description": "The LEP combination reports Gamma_W = 2.195 +/- 0.063 statistical +/- 0.055 systematic GeV, with total uncertainty 0.083 GeV, in its declared s-dependent Breit-Wigner convention.",
      "claimIds": [
        "C-phys-lep2013-w-width"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention"
        },
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs"
        }
      ],
      "openObligations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination.",
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here."
      ]
    },
    {
      "id": "phys:lep2013-w-branching-nonuniversal",
      "name": "LEP W leptonic branching without universality",
      "kind": "scoped-process",
      "description": "Without lepton universality, LEP reports B_e = 10.71 +/- 0.16%, B_mu = 10.63 +/- 0.15% and B_tau = 11.38 +/- 0.21%, with correlated total uncertainties.",
      "claimIds": [
        "C-phys-lep2013-w-branching-nonuniversal"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality"
        }
      ],
      "openObligations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ]
    },
    {
      "id": "phys:lep2013-w-branching-universal",
      "name": "LEP W branching with lepton universality",
      "kind": "scoped-process",
      "description": "Assuming lepton universality and neglecting lepton-mass effects, LEP reports B_had = 67.41 +/- 0.18 statistical +/- 0.20 systematic percent and each B_l = 10.86 +/- 0.06 statistical +/- 0.07 systematic percent, with their sum constrained to one.",
      "claimIds": [
        "C-phys-lep2013-w-branching-universal"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lep2013-w-width-branching",
          "locator": "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality"
        }
      ],
      "openObligations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "No CKM extraction, new universality significance, direct proper-time measurement, stable W carrier, universal formation rule or numerical parent/minimum requirement is inferred."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lep2013-w-width-acquisition-context-lep2013-w-width",
      "source": "phys:lep2013-w-width-acquisition-context",
      "target": "phys:lep2013-w-width",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated LEP channel exposure is the experimental context of this reported result.",
      "claimIds": [
        "M-phys-lep2013-w-width"
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-width-response-context-lep2013-w-width",
      "source": "phys:lep2013-w-width-response-context",
      "target": "phys:lep2013-w-width",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted detector and modeled channel response conditions this result; observed spread or event counts alone do not equal the quoted parameter.",
      "claimIds": [
        "M-phys-lep2013-w-width"
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-width-inference-context-lep2013-w-width",
      "source": "phys:lep2013-w-width-inference-context",
      "target": "phys:lep2013-w-width",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corresponding source likelihood, covariance and constraints delimit the published inference.",
      "claimIds": [
        "M-phys-lep2013-w-width"
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-lep2013-w-width",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:lep2013-w-width",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The width and branching convention defines this reported parameter. This formal edge supplies no Z dataset or calibration; adopted auxiliary inputs remain in the W response context.",
      "claimIds": [
        "M-phys-lep2013-w-width"
      ],
      "contextIds": [
        "lep2013-w-width-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-acquisition-context-lep2013-w-branching-nonuniversal",
      "source": "phys:lep2013-w-branching-acquisition-context",
      "target": "phys:lep2013-w-branching-nonuniversal",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated LEP channel exposure is the experimental context of this reported result.",
      "claimIds": [
        "M-phys-lep2013-w-branching-nonuniversal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-response-context-lep2013-w-branching-nonuniversal",
      "source": "phys:lep2013-w-branching-response-context",
      "target": "phys:lep2013-w-branching-nonuniversal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted detector and modeled channel response conditions this result; observed spread or event counts alone do not equal the quoted parameter.",
      "claimIds": [
        "M-phys-lep2013-w-branching-nonuniversal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-inference-context-lep2013-w-branching-nonuniversal",
      "source": "phys:lep2013-w-branching-inference-context",
      "target": "phys:lep2013-w-branching-nonuniversal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corresponding source likelihood, covariance and constraints delimit the published inference.",
      "claimIds": [
        "M-phys-lep2013-w-branching-nonuniversal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-lep2013-w-branching-nonuniversal",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:lep2013-w-branching-nonuniversal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The width and branching convention defines this reported parameter. This formal edge supplies no Z dataset or calibration; adopted auxiliary inputs remain in the W response context.",
      "claimIds": [
        "M-phys-lep2013-w-branching-nonuniversal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-acquisition-context-lep2013-w-branching-universal",
      "source": "phys:lep2013-w-branching-acquisition-context",
      "target": "phys:lep2013-w-branching-universal",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The stated LEP channel exposure is the experimental context of this reported result.",
      "claimIds": [
        "M-phys-lep2013-w-branching-universal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-response-context-lep2013-w-branching-universal",
      "source": "phys:lep2013-w-branching-response-context",
      "target": "phys:lep2013-w-branching-universal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted detector and modeled channel response conditions this result; observed spread or event counts alone do not equal the quoted parameter.",
      "claimIds": [
        "M-phys-lep2013-w-branching-universal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:lep2013-w-branching-inference-context-lep2013-w-branching-universal",
      "source": "phys:lep2013-w-branching-inference-context",
      "target": "phys:lep2013-w-branching-universal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corresponding source likelihood, covariance and constraints delimit the published inference.",
      "claimIds": [
        "M-phys-lep2013-w-branching-universal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    },
    {
      "id": "physics:inclusive-decay-width-branching-lep2013-w-branching-universal",
      "source": "phys:inclusive-decay-width-branching",
      "target": "phys:lep2013-w-branching-universal",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The width and branching convention defines this reported parameter. This formal edge supplies no Z dataset or calibration; adopted auxiliary inputs remain in the W response context.",
      "claimIds": [
        "M-phys-lep2013-w-branching-universal"
      ],
      "contextIds": [
        "lep2013-w-branching-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "lep2013-w-width-acquisition",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Use the four experiments direct-reconstruction inputs from 1996-2000 at 172-209 GeV, primarily fully hadronic and semileptonic WW selections. Reconstructed jets, charged leptons and assigned missing momentum define the channel inputs.",
      "observable": "LEP W width data preparation",
      "finding": "The declared LEP exposures and reconstructed channel preparation, not a released raw event sample.",
      "limitations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    },
    {
      "id": "lep2013-w-width-response",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Adopt calibrated jet/lepton response, beam-energy constraints, radiative four-fermion signal and backgrounds, and hadronisation and final-state-interaction models. Kinematic mass estimators include response and unobserved-radiation corrections; the width analysis retains standard jet reconstruction.",
      "observable": "LEP W width response and corrections",
      "finding": "The adopted detector, radiation and final-state response for the width estimators.",
      "limitations": [
        "The width analysis does not use the modified jet reconstruction that suppresses final-state interactions in the mass analysis. Shared hadronisation, radiation, calibration and final-state-interaction uncertainties remain inputs.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
        "Section 7.3.5, author pages 134-138, Tables 7.3-7.4: detector, beam energy, hadronisation, radiation and final-state-interaction uncertainties"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    },
    {
      "id": "lep2013-w-width-inference",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Fit mass estimators by experiment-specific reweighting or response convolution, varying m_W and Gamma_W independently for width extraction. Combine experiment, channel and period results with BLUE and shared systematics, using a relativistic Breit-Wigner propagator with s-dependent width.",
      "observable": "LEP W width likelihood and combination",
      "finding": "The running-width likelihood and correlated combination, separate from acquisition and detector response.",
      "limitations": [
        "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Sections 7.3.1-7.3.4, author pages 129-133: decay reconstruction, kinematic fits, radiative response, running-width likelihood and 1996-2000 combination inputs",
        "Sections 7.6-7.7, author pages 140-141, Table 7.5 and Equation 7.11; Figure 7.3 caption on author page 144: combined width and parameter convention"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    },
    {
      "id": "lep2013-w-branching-acquisition",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Use the four experiments WW channel selections from 1997-2000 at 183-207 GeV. The report distinguishes ten four-fermion final states through jets, charged leptons and missing momentum; Table 5.1 specifies the exposure bins.",
      "observable": "LEP W branching data preparation",
      "finding": "The declared channel-selection exposure for branching fits, distinct from the wider width data range.",
      "limitations": [
        "Width inputs cover 1996-2000 at 172-209 GeV; branching inputs cover 1997-2000 at 183-207 GeV. Their data overlap, and no joint width/branching covariance is reviewed here.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    },
    {
      "id": "lep2013-w-branching-response",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Relate selected channel yields to cross sections through luminosity, acceptance, signal efficiency and expected backgrounds. Retain the source CC03 diagrammatic WW signal convention, explicitly not gauge invariant by itself, and the shared detector and theory uncertainty categories.",
      "observable": "LEP W branching response and signal convention",
      "finding": "Adopted channel efficiency, background and signal-definition inputs, not directly observed diagrams.",
      "limitations": [
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence.",
        "Page 88 prints illustrative topology fractions 0.456, 0.349 and 0.105, summing to 0.910. They are not silently corrected or used as normalized input; this does not establish an error in the experimental fit.",
        "The collaboration report supplies the selected reconstruction and combination account. Individual detector papers, raw events, calibrations, generator implementations and complete likelihoods are not independently reproduced."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Sections 5.1-5.2.1, author pages 86-89, Table 5.1: WW signal convention, 1997-2000 exposures, channel selections and cross-section response"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    },
    {
      "id": "lep2013-w-branching-inference",
      "sourceId": "lep2013-w-width-branching",
      "studyType": "computational-analysis",
      "doi": "10.1016/j.physrep.2013.07.004",
      "journal": "Physics Reports",
      "volume": "532",
      "issue": "4",
      "pages": "119-244",
      "system": "LEP-II W-pair channels and the declared width or branching analysis stage",
      "preparation": "Combine experiment branching estimates with the full 12 by 12 covariance. Keep the fit without lepton universality separate from the fit with a common leptonic fraction and the sum-to-unity constraint; lepton-mass effects are neglected in the source treatment.",
      "observable": "LEP W branching correlated fits",
      "finding": "Two conditional fits to shared channel inputs, not independent acquisitions.",
      "limitations": [
        "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Table 5.5 and Figure 5.3 on page 94 report OPAL B_tau = 11.14 +/- 0.31%, while Table E.6 on page 196 gives total uncertainty 0.35% and statistical uncertainty 0.31% at that central value. This unresolved input-table discrepancy is not silently resolved and does not establish an experimental-fit error."
      ],
      "readExtent": "selected-full-text-passages",
      "reviewedLocators": [
        "Section 5.2.2, author pages 93-95, Table 5.5 and Figure 5.3; Table E.6 on author page 196: correlated branching fits with and without lepton universality"
      ],
      "metadataCheckedAt": "2026-10-04",
      "metadataUrl": "https://www.sciencedirect.com/science/article/abs/pii/S0370157313002706",
      "correctionCheck": "The reviewed arXiv v4 is identified as the final journal version. The printed topology fractions, electron-muon correlation and OPAL tau uncertainty differ as recorded in the claims; no exhaustive search for later corrections or updated measurements is asserted."
    }
  ],
  "comparisons": [
    {
      "id": "lep2013-w-width-interpretation",
      "candidate": "The combined value is a fitted running-width energy parameter.",
      "alternative": "The observed peak spread directly times stable W objects.",
      "discriminator": "Retain the response convolution, free mass/width fit and correlated combination.",
      "result": "conditional-support",
      "limit": "The quoted energy width uses the source s-dependent Breit-Wigner convention. It is not detector peak spread, a directly timed lifetime or automatically a constant-width pole parameter.",
      "assumptions": [
        "For width extraction both mass and width float; the separate mass-only fit imposes the Standard Model width-mass relation. Four rounded experiment summaries in Table 7.5 do not reconstruct the full period/channel combination.",
        "The width analysis does not use the modified jet reconstruction that suppresses final-state interactions in the mass analysis. Shared hadronisation, radiation, calibration and final-state-interaction uncertainties remain inputs."
      ],
      "sourceIds": [
        "lep2013-w-width-branching"
      ],
      "claimIds": [
        "C-phys-lep2013-w-width"
      ]
    },
    {
      "id": "lep2013-w-branching-constraints",
      "candidate": "Two correlated branching fits use the same selected channel inputs with different constraints.",
      "alternative": "The unconstrained lepton fractions and constrained hadronic fraction form one independent normalized measurement.",
      "discriminator": "Keep the source universality assumption, covariance and mixed Table 5.5 column scopes explicit.",
      "result": "conditional-support",
      "limit": "The constrained and unconstrained fits reuse the same inputs. Table 5.5 juxtaposes nonuniversal leptonic fractions with a universality-constrained hadronic fraction; these columns are not one normalized fitted vector.",
      "assumptions": [
        "The fit retains a full 12 by 12 input covariance. Page 93 reports electron-muon correlation 13.5%, while Table E.6 prints 0.136; this discrepancy remains unresolved and no covariance replay is certified.",
        "Branching fractions come from individual decay-channel fits. Section 5.2.1 total production cross sections assume Standard Model branching values and are not independent branching evidence."
      ],
      "sourceIds": [
        "lep2013-w-width-branching"
      ],
      "claimIds": [
        "C-phys-lep2013-w-branching-nonuniversal",
        "C-phys-lep2013-w-branching-universal"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:lep2013-w-width-acquisition-context",
      "role": "experimental-context",
      "denotes": "The declared LEP exposures and reconstructed channel preparation, not a released raw event sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-width-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-width-response-context",
      "role": "model-context",
      "denotes": "The adopted detector, radiation and final-state response for the width estimators.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-width-response-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-width-inference-context",
      "role": "model-context",
      "denotes": "The running-width likelihood and correlated combination, separate from acquisition and detector response.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-width-inference-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-branching-acquisition-context",
      "role": "experimental-context",
      "denotes": "The declared channel-selection exposure for branching fits, distinct from the wider width data range.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-branching-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-branching-response-context",
      "role": "model-context",
      "denotes": "Adopted channel efficiency, background and signal-definition inputs, not directly observed diagrams.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-branching-response-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-branching-inference-context",
      "role": "model-context",
      "denotes": "Two conditional fits to shared channel inputs, not independent acquisitions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lep2013-w-branching-inference-context"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-width",
      "role": "scoped-phenomenon",
      "denotes": "The source-reported conditional W energy width, not a decay-time observation or raw peak spread.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep2013-w-width"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-branching-nonuniversal",
      "role": "scoped-phenomenon",
      "denotes": "The correlated three-lepton result without universality, not raw decay counts.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep2013-w-branching-nonuniversal"
      ]
    },
    {
      "nodeId": "phys:lep2013-w-branching-universal",
      "role": "scoped-phenomenon",
      "denotes": "The joint constrained branching result, not an independent channel count or proof of universality.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lep2013-w-branching-universal"
      ]
    }
  ]
};

/** Preserve source fit conventions and shared-data boundaries; no fit replay. */
export function validateWDecayContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing W-decay ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `W-decay ${kind} changed ${id}.${key}: preserve response, covariance and parameter conventions`);
    }
  }
}
