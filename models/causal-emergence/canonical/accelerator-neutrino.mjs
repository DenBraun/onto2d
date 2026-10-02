import assert from "node:assert/strict";

export const ACCELERATOR_NEUTRINO_CHECKS = new Map();
export const ACCELERATOR_NEUTRINO_ANALYTICAL_SOURCES = new Map();
export const ACCELERATOR_NEUTRINO_ADMISSION = {
  "definitions": [
    [
      "phys:tau-neutrino-appearance-readout",
      "D-phys-tau-neutrino-appearance-readout"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-tau-neutrino-appearance-readout",
      [
        "phys:lepton-fields",
        "phys:tau-neutrino-appearance-readout"
      ]
    ]
  ],
  "contexts": [
    [
      "opera2015-acquisition-context",
      "M-phys-opera2015-acquisition-context",
      [
        "opera2015-acquisition"
      ]
    ],
    [
      "opera2015-response-context",
      "M-phys-opera2015-response-context",
      [
        "opera2015-response"
      ]
    ],
    [
      "opera2015-inference-context",
      "M-phys-opera2015-inference-context",
      [
        "opera2015-inference"
      ]
    ]
  ],
  "observations": [
    [
      "opera2015-analyzed-sample",
      "C-phys-opera2015-analyzed-sample",
      [
        "opera2015-acquisition"
      ]
    ],
    [
      "opera2015-fifth-candidate",
      "C-phys-opera2015-fifth-candidate",
      [
        "opera2015-acquisition"
      ]
    ],
    [
      "opera2015-decay-candidates",
      "C-phys-opera2015-decay-candidates",
      [
        "opera2015-acquisition"
      ]
    ],
    [
      "opera2015-expected-counts",
      "C-phys-opera2015-expected-counts",
      [
        "opera2015-response"
      ]
    ],
    [
      "opera2015-appearance-evidence",
      "C-phys-opera2015-appearance-evidence",
      [
        "opera2015-inference"
      ]
    ],
    [
      "opera2015-parameter-compatibility",
      "C-phys-opera2015-parameter-compatibility",
      [
        "opera2015-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "opera2015-acquisition-context-opera2015-analyzed-sample",
      "opera2015-acquisition-context",
      "opera2015-analyzed-sample",
      "M-phys-opera2015-analyzed-sample",
      "measurement-context"
    ],
    [
      "opera2015-response-context-opera2015-analyzed-sample",
      "opera2015-response-context",
      "opera2015-analyzed-sample",
      "M-phys-opera2015-analyzed-sample",
      "interpretation-dependency"
    ],
    [
      "opera2015-acquisition-context-opera2015-fifth-candidate",
      "opera2015-acquisition-context",
      "opera2015-fifth-candidate",
      "M-phys-opera2015-fifth-candidate",
      "measurement-context"
    ],
    [
      "opera2015-response-context-opera2015-fifth-candidate",
      "opera2015-response-context",
      "opera2015-fifth-candidate",
      "M-phys-opera2015-fifth-candidate",
      "interpretation-dependency"
    ],
    [
      "opera2015-acquisition-context-opera2015-decay-candidates",
      "opera2015-acquisition-context",
      "opera2015-decay-candidates",
      "M-phys-opera2015-decay-candidates",
      "measurement-context"
    ],
    [
      "opera2015-response-context-opera2015-decay-candidates",
      "opera2015-response-context",
      "opera2015-decay-candidates",
      "M-phys-opera2015-decay-candidates",
      "interpretation-dependency"
    ],
    [
      "tau-neutrino-appearance-readout-opera2015-fifth-candidate",
      "tau-neutrino-appearance-readout",
      "opera2015-fifth-candidate",
      "M-phys-opera2015-fifth-candidate",
      "interpretation-dependency"
    ],
    [
      "tau-neutrino-appearance-readout-opera2015-decay-candidates",
      "tau-neutrino-appearance-readout",
      "opera2015-decay-candidates",
      "M-phys-opera2015-decay-candidates",
      "interpretation-dependency"
    ],
    [
      "opera2015-fifth-candidate-opera2015-decay-candidates",
      "opera2015-fifth-candidate",
      "opera2015-decay-candidates",
      "M-phys-opera2015-decay-candidates",
      "interpretation-dependency"
    ],
    [
      "opera2015-analyzed-sample-opera2015-decay-candidates",
      "opera2015-analyzed-sample",
      "opera2015-decay-candidates",
      "M-phys-opera2015-decay-candidates",
      "interpretation-dependency"
    ],
    [
      "opera2015-acquisition-context-opera2015-expected-counts",
      "opera2015-acquisition-context",
      "opera2015-expected-counts",
      "M-phys-opera2015-expected-counts",
      "interpretation-dependency"
    ],
    [
      "opera2015-response-context-opera2015-expected-counts",
      "opera2015-response-context",
      "opera2015-expected-counts",
      "M-phys-opera2015-expected-counts",
      "interpretation-dependency"
    ],
    [
      "opera2015-decay-candidates-opera2015-appearance-evidence",
      "opera2015-decay-candidates",
      "opera2015-appearance-evidence",
      "M-phys-opera2015-appearance-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-expected-counts-opera2015-appearance-evidence",
      "opera2015-expected-counts",
      "opera2015-appearance-evidence",
      "M-phys-opera2015-appearance-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-inference-context-opera2015-appearance-evidence",
      "opera2015-inference-context",
      "opera2015-appearance-evidence",
      "M-phys-opera2015-appearance-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-decay-candidates-opera2015-parameter-compatibility",
      "opera2015-decay-candidates",
      "opera2015-parameter-compatibility",
      "M-phys-opera2015-parameter-compatibility",
      "interpretation-dependency"
    ],
    [
      "opera2015-expected-counts-opera2015-parameter-compatibility",
      "opera2015-expected-counts",
      "opera2015-parameter-compatibility",
      "M-phys-opera2015-parameter-compatibility",
      "interpretation-dependency"
    ],
    [
      "opera2015-inference-context-opera2015-parameter-compatibility",
      "opera2015-inference-context",
      "opera2015-parameter-compatibility",
      "M-phys-opera2015-parameter-compatibility",
      "interpretation-dependency"
    ],
    [
      "tau-neutrino-appearance-readout-opera2015-appearance-evidence",
      "tau-neutrino-appearance-readout",
      "opera2015-appearance-evidence",
      "M-phys-opera2015-appearance-evidence",
      "interpretation-dependency"
    ],
    [
      "opera2015-acquisition-context-opera2015-appearance-evidence",
      "opera2015-acquisition-context",
      "opera2015-appearance-evidence",
      "M-phys-opera2015-appearance-evidence",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "opera2015-acquisition",
    "opera2015-response",
    "opera2015-inference"
  ],
  "comparisonIds": [
    "opera2015-appearance-interpretation",
    "opera2015-parameter-interpretation"
  ],
  "inferenceSources": [
    [
      "M-phys-opera2015-acquisition-context",
      [
        "opera2013-beam-method",
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-response-context",
      [
        "opera2015-appearance",
        "opera2013-beam-method",
        "opera2014-method-erratum"
      ]
    ],
    [
      "M-phys-opera2015-inference-context",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "C-phys-opera2015-analyzed-sample",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-analyzed-sample",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "C-phys-opera2015-fifth-candidate",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-fifth-candidate",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "C-phys-opera2015-decay-candidates",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-decay-candidates",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "C-phys-opera2015-expected-counts",
      [
        "opera2015-appearance",
        "opera2014-method-erratum"
      ]
    ],
    [
      "M-phys-opera2015-expected-counts",
      [
        "opera2015-appearance",
        "opera2014-method-erratum"
      ]
    ],
    [
      "C-phys-opera2015-appearance-evidence",
      [
        "opera2013-beam-method",
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-appearance-evidence",
      [
        "opera2013-beam-method",
        "opera2015-appearance"
      ]
    ],
    [
      "C-phys-opera2015-parameter-compatibility",
      [
        "opera2015-appearance"
      ]
    ],
    [
      "M-phys-opera2015-parameter-compatibility",
      [
        "opera2015-appearance"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "opera2015-appearance",
      "kind": "research-publication",
      "title": "Discovery of tau neutrino appearance in the CNGS neutrino beam with the OPERA experiment",
      "authors": [
        "OPERA Collaboration"
      ],
      "year": 2015,
      "doi": "10.1103/PhysRevLett.115.121802",
      "url": "https://arxiv.org/abs/1507.01417v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-version",
        "locators": [
          "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        ],
        "limit": "Read all seven pages of author version v2, revised 2 November 2015, including scientific text, tables/captions, references and collective author identification. Visually checked pages 3–6, Tables I–III, Figures 1–3 and Equation 1. Publisher metadata gives 17 September 2015 publication; the regenerated internal date 8 August 2016 is not acquisition or publication date. Earlier candidate articles, upstream detector/beam/calibration papers, exact response, unrounded nuisance inputs and original custom/RooStats pseudoexperiments are not independently reproduced."
      }
    },
    {
      "id": "opera2013-beam-method",
      "kind": "research-publication",
      "title": "New results on nu_mu to nu_tau appearance with the OPERA experiment in the CNGS beam",
      "authors": [
        "OPERA Collaboration"
      ],
      "year": 2013,
      "doi": "10.1007/JHEP11(2013)036",
      "url": "https://arxiv.org/abs/1308.2553v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-method-passages",
        "locators": [
          "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "Printed page 9 (PDF 12), Section 3.3.1: selected control samples and data/MC location-efficiency comparison"
        ],
        "limit": "Read the abstract and selected printed pages 3–4 (PDF 6–7) beam/selection passages, plus the selected opening of the location-efficiency comparison on printed page 9 (PDF 12); visually checked PDF pages 6–7. That comparison continues on the next page, whose full conclusion is not admitted. No full 33-page review is claimed. Only the directly cited beam/method conditions are used, with the 2014 erratum retained. The earlier two-event inference and numerical efficiencies are not admitted as independent outcomes."
      }
    },
    {
      "id": "opera2014-method-erratum",
      "kind": "research-publication",
      "title": "Erratum: new results on nu_mu to nu_tau appearance with the OPERA experiment in the CNGS beam",
      "authors": [
        "OPERA Collaboration"
      ],
      "year": 2014,
      "doi": "10.1007/JHEP04(2014)014",
      "url": "https://link.springer.com/content/pdf/10.1007/JHEP04%282014%29014.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-correction-page",
        "locators": [
          "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization"
        ],
        "limit": "Read and visually checked publisher PDF page 1, including the complete correction list and formulas. The remaining collaboration-roster pages are not used. This corrects the 2013 method source; it neither changes the selected beam-composition passage nor supplies a replay of the 2015 analysis."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-tau-neutrino-appearance-readout",
      "kind": "review-finding",
      "statement": "The OPERA appearance readout identifies charged-current tau-neutrino interaction candidates through the topology and kinematics of the produced tau decay in an emulsion/lead detector. One-hadron, three-hadron, muon and electron decay selections are distinct channels with modeled backgrounds.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here.",
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero."
      ]
    },
    {
      "id": "M-phys-opera2015-acquisition-context",
      "kind": "method",
      "statement": "Use the 2008–2012 CNGS exposure of 17.97e19 protons on target, with a predominantly muon-neutrino beam over 730 km and mean energy about 17 GeV. From target-fiducial interactions, analyze the first and second most probable bricks for 0-muon events and 1-muon events with p_mu<15 GeV/c under the stated timing, tracking and vertex procedures.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected beam passage quotes contamination in terms of interactions, not incident flux fractions: antimuon neutrinos 2.1%, electron plus antielectron neutrinos below 1%, intrinsic tau-neutrino component of order 1e-6. These are adopted beam-composition conditions. The approximately 17 GeV mean is not each event energy.",
        "The 19505 target-fiducial interactions and the 5408 fully analyzed events have different selection boundaries. The latter uses 0-muon events and 1-muon events with p_mu<15 GeV/c, including the first and second most probable bricks. Five divided by either census is not a measured flavor-transition probability.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "M-phys-opera2015-response-context",
      "kind": "method",
      "statement": "Use emulsion vertex/track reconstruction, multiple-scattering momentum estimates and muon identification with the stated scanning and decay-selection response. Model signal and charm, hadronic-reinteraction and large-angle-muon-scattering backgrounds using the reported simulation and auxiliary checks, normalized to detected muon-neutrino interactions. Preserve the earlier method erratum.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Printed page 9 (PDF 12), Section 3.3.1: selected control samples and data/MC location-efficiency comparison",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2014-method-erratum",
          "locator": "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed.",
        "CNGS charm controls share the beam experiment; pion test-beam and external charged-particle scattering measurements are separate auxiliary preparations. Their full datasets, reconstruction and systematic covariance are not reviewed. Data-assisted normalization reduces some flux/efficiency dependence without removing every response uncertainty.",
        "The 2014 publisher erratum changes earlier uncertainties, the track-follow-down discriminator and Equation 4.1 normalization. The selected beam-composition passage is unchanged. No uncorrected older formula or earlier two-event inference is imported; neither the corrected normalization nor the upstream calibration chain is replayed."
      ],
      "contextIds": [
        "opera2015-response"
      ]
    },
    {
      "id": "M-phys-opera2015-inference-context",
      "kind": "method",
      "statement": "Use four channel counts with independent Poisson means mu*s_i+beta_i and the Gaussian background factors of Equation 1. Compare Fisher-product and one-sided profile-likelihood statistics with their pseudoexperiment distributions for background-only mu=0. Use the same acquisition for nominal-signal compatibility and the full-mixing mass-squared interval.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "The Fisher product of channel tail probabilities is a test statistic, not the final calibrated p value. A total-count Poisson tail with background mean 0.25 is not the reported channel-aware 1.1e-7 result. Significance is a background-hypothesis tail comparison, not a posterior probability that oscillations are true.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "The signal-strength errors are a 90% confidence interval, not one-standard-deviation errors. The mass-squared result additionally assumes full mixing and reuses the selected data/model. It is not an absolute mass, a complete three-flavor global fit, a Dirac/Majorana test or a unique mass-generation mechanism.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "C-phys-opera2015-analyzed-sample",
      "kind": "review-finding",
      "statement": "The reported exposure produces 19505 neutrino interactions in the target fiducial volume. Table I gives 5408 fully analyzed selected events: 1144 classified 0-muon and 4264 classified 1-muon with p_mu<15 GeV/c. These are the specified first/second-brick analysis samples.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 19505 target-fiducial interactions and the 5408 fully analyzed events have different selection boundaries. The latter uses 0-muon events and 1-muon events with p_mu<15 GeV/c, including the first and second most probable bricks. Five divided by either census is not a measured flavor-transition probability.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "M-phys-opera2015-analyzed-sample",
      "kind": "method",
      "statement": "Retain the target-interaction and fully analyzed selection censuses as distinct stages; classification and brick finding depend on reconstruction.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 19505 target-fiducial interactions and the 5408 fully analyzed events have different selection boundaries. The latter uses 0-muon events and 1-muon events with p_mu<15 GeV/c, including the first and second most probable bricks. Five divided by either census is not a measured flavor-transition probability.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "C-phys-opera2015-fifth-candidate",
      "kind": "review-finding",
      "statement": "The 14 August 2012 event has a reconstructed 90 +/-2 mrad kink and flight length 960 +/-30 micrometers; the daughter undergoes a hadronic interaction. Its measured central kinematics satisfy the predefined tau-to-1h cuts, including daughter momentum 11(+14/-4) GeV/c and zdec=630 +/-30 micrometers. The stated secondary-vertex fragment and attached-photon searches find none.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reconstructed flight length 960 +/-30 micrometers differs from zdec=630 +/-30 micrometers measured from a lead-plate face; neither is an ensemble tau lifetime. Visible energy, scalar momentum sum and daughter momentum are different observables. Central cut compliance is not a joint acceptance probability or independent-Gaussian uncertainty calculation.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "M-phys-opera2015-fifth-candidate",
      "kind": "method",
      "statement": "Use the reconstructed kink, daughter interaction, fragment search and correlated kinematic estimates to classify this selected event; keep finite acceptance and the geometric coordinate conventions.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reconstructed flight length 960 +/-30 micrometers differs from zdec=630 +/-30 micrometers measured from a lead-plate face; neither is an ensemble tau lifetime. Visible energy, scalar momentum sum and daughter momentum are different observables. Central cut compliance is not a joint acceptance probability or independent-Gaussian uncertainty calculation.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "C-phys-opera2015-decay-candidates",
      "kind": "review-finding",
      "statement": "For tau-to-1h, tau-to-3h, tau-to-muon and tau-to-electron, Table III reports candidate counts 3,1,1,0, respectively, totaling five. This includes the new fifth event and four previously reported candidates from the same accelerator campaign.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "M-phys-opera2015-decay-candidates",
      "kind": "method",
      "statement": "Count candidates within the four stated decay-channel selections, retaining the new event as one member of the total and the earlier same-campaign provenance.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here."
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "C-phys-opera2015-expected-counts",
      "kind": "review-finding",
      "statement": "In the four-channel order, Table III gives signal expectations 0.52 +/-0.10, 0.73 +/-0.14, 0.61 +/-0.12, 0.78 +/-0.16, and background expectations 0.04 +/-0.01, 0.17 +/-0.03, 0.004 +/-0.001, 0.03 +/-0.01. Reported totals are 2.64 +/-0.53 signal and 0.25 +/-0.05 background, under the adopted response and nominal oscillation parameters.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2014-method-erratum",
          "locator": "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "CNGS charm controls share the beam experiment; pion test-beam and external charged-particle scattering measurements are separate auxiliary preparations. Their full datasets, reconstruction and systematic covariance are not reviewed. Data-assisted normalization reduces some flux/efficiency dependence without removing every response uncertainty.",
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero.",
        "The 2014 publisher erratum changes earlier uncertainties, the track-follow-down discriminator and Equation 4.1 normalization. The selected beam-composition passage is unchanged. No uncorrected older formula or earlier two-event inference is imported; neither the corrected normalization nor the upstream calibration chain is replayed."
      ],
      "contextIds": [
        "opera2015-response"
      ]
    },
    {
      "id": "M-phys-opera2015-expected-counts",
      "kind": "method",
      "statement": "Condition the published expectations on detected-muon-neutrino normalization, response, auxiliary controls and the supplied nominal oscillation parameters; preserve corrected older-method boundaries.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2014-method-erratum",
          "locator": "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "CNGS charm controls share the beam experiment; pion test-beam and external charged-particle scattering measurements are separate auxiliary preparations. Their full datasets, reconstruction and systematic covariance are not reviewed. Data-assisted normalization reduces some flux/efficiency dependence without removing every response uncertainty.",
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero.",
        "The 2014 publisher erratum changes earlier uncertainties, the track-follow-down discriminator and Equation 4.1 normalization. The selected beam-composition passage is unchanged. No uncorrected older formula or earlier two-event inference is imported; neither the corrected normalization nor the upstream calibration chain is replayed."
      ],
      "contextIds": [
        "opera2015-response"
      ]
    },
    {
      "id": "C-phys-opera2015-appearance-evidence",
      "kind": "review-finding",
      "statement": "The original channel-based tests report a one-sided significance of 5.1 standard deviations, with the Fisher-method background-fluctuation probability 1.1e-7; the profile-likelihood implementations also report 5.1. Under the stated beam, response and background model, the selected decay candidates support tau-neutrino appearance in the CNGS beam.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected beam passage quotes contamination in terms of interactions, not incident flux fractions: antimuon neutrinos 2.1%, electron plus antielectron neutrinos below 1%, intrinsic tau-neutrino component of order 1e-6. These are adopted beam-composition conditions. The approximately 17 GeV mean is not each event energy.",
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "The Fisher product of channel tail probabilities is a test statistic, not the final calibrated p value. A total-count Poisson tail with background mean 0.25 is not the reported channel-aware 1.1e-7 result. Significance is a background-hypothesis tail comparison, not a posterior probability that oscillations are true.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "M-phys-opera2015-appearance-evidence",
      "kind": "method",
      "statement": "Evaluate the original background-only comparison with channel information, nuisance treatment and pseudoexperiment calibration; report the source result without an independent significance replay.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected beam passage quotes contamination in terms of interactions, not incident flux fractions: antimuon neutrinos 2.1%, electron plus antielectron neutrinos below 1%, intrinsic tau-neutrino component of order 1e-6. These are adopted beam-composition conditions. The approximately 17 GeV mean is not each event energy.",
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "The Fisher product of channel tail probabilities is a test statistic, not the final calibrated p value. A total-count Poisson tail with background mean 0.25 is not the reported channel-aware 1.1e-7 result. Significance is a background-hypothesis tail comparison, not a posterior probability that oscillations are true.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "C-phys-opera2015-parameter-compatibility",
      "kind": "review-finding",
      "statement": "The same analysis reports signal strength mu=1.8(+1.8/-1.1) at 90% confidence, compatible with nominal mu=1. Assuming full mixing, it reports Delta m23^2=3.3e-3 eV^2 with 90% interval [2.0,5.0]e-3 eV^2; the three stated interval methods give negligible differences.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "supports",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The signal-strength errors are a 90% confidence interval, not one-standard-deviation errors. The mass-squared result additionally assumes full mixing and reuses the selected data/model. It is not an absolute mass, a complete three-flavor global fit, a Dirac/Majorana test or a unique mass-generation mechanism.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "M-phys-opera2015-parameter-compatibility",
      "kind": "method",
      "statement": "Infer the reported strength and full-mixing mass-squared interval from the same selected channel data/model; preserve the 90% convention and the distinction from nominal inputs.",
      "scope": "Historical OPERA accelerator tau appearance with explicit preparation, response, channel selection and original inference; no complete experimental replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "method",
          "note": "Supports the specified original acquisition, adopted response, correction boundary or conditional inference only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The signal-strength errors are a 90% confidence interval, not one-standard-deviation errors. The mass-squared result additionally assumes full mixing and reuses the selected data/model. It is not an absolute mass, a complete three-flavor global fit, a Dirac/Majorana test or a unique mass-generation mechanism.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:tau-neutrino-appearance-readout",
      "name": "Emulsion tau-neutrino appearance readout",
      "kind": "definition",
      "description": "The OPERA appearance readout identifies charged-current tau-neutrino interaction candidates through the topology and kinematics of the produced tau decay in an emulsion/lead detector. One-hadron, three-hadron, muon and electron decay selections are distinct channels with modeled backgrounds.",
      "claimIds": [
        "D-phys-tau-neutrino-appearance-readout"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
        }
      ],
      "openObligations": [
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here."
      ]
    },
    {
      "id": "phys:opera2015-acquisition-context",
      "name": "OPERA accelerator beam and analyzed selection",
      "kind": "context",
      "description": "Use the 2008–2012 CNGS exposure of 17.97e19 protons on target, with a predominantly muon-neutrino beam over 730 km and mean energy about 17 GeV. From target-fiducial interactions, analyze the first and second most probable bricks for 0-muon events and 1-muon events with p_mu<15 GeV/c under the stated timing, tracking and vertex procedures.",
      "claimIds": [
        "M-phys-opera2015-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census"
        }
      ],
      "openObligations": [
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ]
    },
    {
      "id": "phys:opera2015-response-context",
      "name": "OPERA reconstruction and expected-count conditions",
      "kind": "context",
      "description": "Use emulsion vertex/track reconstruction, multiple-scattering momentum estimates and muon identification with the stated scanning and decay-selection response. Model signal and charm, hadronic-reinteraction and large-angle-muon-scattering backgrounds using the reported simulation and auxiliary checks, normalized to detected muon-neutrino interactions. Preserve the earlier method erratum.",
      "claimIds": [
        "M-phys-opera2015-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering"
        },
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Printed page 9 (PDF 12), Section 3.3.1: selected control samples and data/MC location-efficiency comparison"
        },
        {
          "sourceId": "opera2014-method-erratum",
          "locator": "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization"
        }
      ],
      "openObligations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed."
      ]
    },
    {
      "id": "phys:opera2015-inference-context",
      "name": "OPERA original channel likelihood and interpretation",
      "kind": "context",
      "description": "Use four channel counts with independent Poisson means mu*s_i+beta_i and the Gaussian background factors of Equation 1. Compare Fisher-product and one-sided profile-likelihood statistics with their pseudoexperiment distributions for background-only mu=0. Use the same acquisition for nominal-signal compatibility and the full-mixing mass-squared interval.",
      "claimIds": [
        "M-phys-opera2015-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
        }
      ],
      "openObligations": [
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced."
      ]
    },
    {
      "id": "phys:opera2015-analyzed-sample",
      "name": "OPERA fully analyzed event sample",
      "kind": "scoped-process",
      "description": "The reported exposure produces 19505 neutrino interactions in the target fiducial volume. Table I gives 5408 fully analyzed selected events: 1144 classified 0-muon and 4264 classified 1-muon with p_mu<15 GeV/c. These are the specified first/second-brick analysis samples.",
      "claimIds": [
        "C-phys-opera2015-analyzed-sample"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census"
        }
      ],
      "openObligations": [
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ]
    },
    {
      "id": "phys:opera2015-fifth-candidate",
      "name": "OPERA fifth reconstructed tau-decay candidate",
      "kind": "scoped-process",
      "description": "The 14 August 2012 event has a reconstructed 90 +/-2 mrad kink and flight length 960 +/-30 micrometers; the daughter undergoes a hadronic interaction. Its measured central kinematics satisfy the predefined tau-to-1h cuts, including daughter momentum 11(+14/-4) GeV/c and zdec=630 +/-30 micrometers. The stated secondary-vertex fragment and attached-photon searches find none.",
      "claimIds": [
        "C-phys-opera2015-fifth-candidate"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts"
        }
      ],
      "openObligations": [
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ]
    },
    {
      "id": "phys:opera2015-decay-candidates",
      "name": "OPERA tau-decay candidate census",
      "kind": "scoped-process",
      "description": "For tau-to-1h, tau-to-3h, tau-to-muon and tau-to-electron, Table III reports candidate counts 3,1,1,0, respectively, totaling five. This includes the new fifth event and four previously reported candidates from the same accelerator campaign.",
      "claimIds": [
        "C-phys-opera2015-decay-candidates"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts"
        }
      ],
      "openObligations": [
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ]
    },
    {
      "id": "phys:opera2015-expected-counts",
      "name": "OPERA conditional signal and background means",
      "kind": "scoped-process",
      "description": "In the four-channel order, Table III gives signal expectations 0.52 +/-0.10, 0.73 +/-0.14, 0.61 +/-0.12, 0.78 +/-0.16, and background expectations 0.04 +/-0.01, 0.17 +/-0.03, 0.004 +/-0.001, 0.03 +/-0.01. Reported totals are 2.64 +/-0.53 signal and 0.25 +/-0.05 background, under the adopted response and nominal oscillation parameters.",
      "claimIds": [
        "C-phys-opera2015-expected-counts"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
        },
        {
          "sourceId": "opera2014-method-erratum",
          "locator": "Publisher PDF page 1: corrected uncertainties, Section 3.6 track-follow-down discriminator and Equation 4.1 signal normalization"
        }
      ],
      "openObligations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed."
      ]
    },
    {
      "id": "phys:opera2015-appearance-evidence",
      "name": "OPERA reported accelerator tau appearance",
      "kind": "scoped-process",
      "description": "The original channel-based tests report a one-sided significance of 5.1 standard deviations, with the Fisher-method background-fluctuation probability 1.1e-7; the profile-likelihood implementations also report 5.1. Under the stated beam, response and background model, the selected decay candidates support tau-neutrino appearance in the CNGS beam.",
      "claimIds": [
        "C-phys-opera2015-appearance-evidence"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2013-beam-method",
          "locator": "Author version 1308.2553v1, printed pages 3–4 (PDF 6–7), end of Section 2 and opening of Section 3: beam baseline, mean energy, interaction composition and initial event classification"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        }
      ],
      "openObligations": [
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced."
      ]
    },
    {
      "id": "phys:opera2015-parameter-compatibility",
      "name": "OPERA same-data signal and mass-squared interpretation",
      "kind": "scoped-process",
      "description": "The same analysis reports signal strength mu=1.8(+1.8/-1.1) at 90% confidence, compatible with nominal mu=1. Assuming full mixing, it reports Delta m23^2=3.3e-3 eV^2 with 90% interval [2.0,5.0]e-3 eV^2; the three stated interval methods give negligible differences.",
      "claimIds": [
        "C-phys-opera2015-parameter-compatibility"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering"
        }
      ],
      "openObligations": [
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-tau-neutrino-appearance-readout",
      "source": "phys:lepton-fields",
      "target": "phys:tau-neutrino-appearance-readout",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared tau-neutrino charged-current readout uses the tau charged-lepton species and its selected decay products; it does not imply a stable tau track or a continuously measured propagating flavor.",
      "claimIds": [
        "D-phys-lepton",
        "D-phys-tau-neutrino-appearance-readout"
      ]
    },
    {
      "id": "physics:opera2015-acquisition-context-opera2015-analyzed-sample",
      "source": "phys:opera2015-acquisition-context",
      "target": "phys:opera2015-analyzed-sample",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This exposure and channel/brick selection delimit the reported processed observation.",
      "claimIds": [
        "M-phys-opera2015-analyzed-sample"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-response-context-opera2015-analyzed-sample",
      "source": "phys:opera2015-response-context",
      "target": "phys:opera2015-analyzed-sample",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reconstruction, muon identification and scanning acceptance determine the selected and classified observable; these conditions are not new independent events.",
      "claimIds": [
        "M-phys-opera2015-analyzed-sample"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-acquisition-context-opera2015-fifth-candidate",
      "source": "phys:opera2015-acquisition-context",
      "target": "phys:opera2015-fifth-candidate",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This exposure and channel/brick selection delimit the reported processed observation.",
      "claimIds": [
        "M-phys-opera2015-fifth-candidate"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-response-context-opera2015-fifth-candidate",
      "source": "phys:opera2015-response-context",
      "target": "phys:opera2015-fifth-candidate",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reconstruction, muon identification and scanning acceptance determine the selected and classified observable; these conditions are not new independent events.",
      "claimIds": [
        "M-phys-opera2015-fifth-candidate"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-acquisition-context-opera2015-decay-candidates",
      "source": "phys:opera2015-acquisition-context",
      "target": "phys:opera2015-decay-candidates",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "This exposure and channel/brick selection delimit the reported processed observation.",
      "claimIds": [
        "M-phys-opera2015-decay-candidates"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-response-context-opera2015-decay-candidates",
      "source": "phys:opera2015-response-context",
      "target": "phys:opera2015-decay-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reconstruction, muon identification and scanning acceptance determine the selected and classified observable; these conditions are not new independent events.",
      "claimIds": [
        "M-phys-opera2015-decay-candidates"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:tau-neutrino-appearance-readout-opera2015-fifth-candidate",
      "source": "phys:tau-neutrino-appearance-readout",
      "target": "phys:opera2015-fifth-candidate",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The tau charged-current decay convention identifies the candidate topology and channels, conditional on response and background discrimination.",
      "claimIds": [
        "M-phys-opera2015-fifth-candidate"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:tau-neutrino-appearance-readout-opera2015-decay-candidates",
      "source": "phys:tau-neutrino-appearance-readout",
      "target": "phys:opera2015-decay-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The tau charged-current decay convention identifies the candidate topology and channels, conditional on response and background discrimination.",
      "claimIds": [
        "M-phys-opera2015-decay-candidates"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-fifth-candidate-opera2015-decay-candidates",
      "source": "phys:opera2015-fifth-candidate",
      "target": "phys:opera2015-decay-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This reconstructed event is one member of the channel census; it must not be counted again as independent evidence.",
      "claimIds": [
        "M-phys-opera2015-decay-candidates"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-analyzed-sample-opera2015-decay-candidates",
      "source": "phys:opera2015-analyzed-sample",
      "target": "phys:opera2015-decay-candidates",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fully analyzed selection supplies the searched event population, not a direct flavor-transition probability denominator.",
      "claimIds": [
        "M-phys-opera2015-decay-candidates"
      ],
      "contextIds": [
        "opera2015-acquisition"
      ]
    },
    {
      "id": "physics:opera2015-acquisition-context-opera2015-expected-counts",
      "source": "phys:opera2015-acquisition-context",
      "target": "phys:opera2015-expected-counts",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The beam and exposure identify the source for the simulated rates and detected-muon-neutrino normalization; mean energy does not substitute for the spectrum.",
      "claimIds": [
        "M-phys-opera2015-expected-counts"
      ],
      "contextIds": [
        "opera2015-response"
      ]
    },
    {
      "id": "physics:opera2015-response-context-opera2015-expected-counts",
      "source": "phys:opera2015-response-context",
      "target": "phys:opera2015-expected-counts",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The response model contains detected-muon-neutrino normalization, auxiliary checks and corrected-method conditions; the analyzed-event census alone is insufficient for numerical reconstruction.",
      "claimIds": [
        "M-phys-opera2015-expected-counts"
      ],
      "contextIds": [
        "opera2015-response"
      ]
    },
    {
      "id": "physics:opera2015-decay-candidates-opera2015-appearance-evidence",
      "source": "phys:opera2015-decay-candidates",
      "target": "phys:opera2015-appearance-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The four-channel counts supply the observed data to this original same-acquisition inference.",
      "claimIds": [
        "M-phys-opera2015-appearance-evidence"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-expected-counts-opera2015-appearance-evidence",
      "source": "phys:opera2015-expected-counts",
      "target": "phys:opera2015-appearance-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The nominal signal/background vectors and their uncertainties condition this inference; fitted parameters are not retroactive inputs to the nominal prediction.",
      "claimIds": [
        "M-phys-opera2015-appearance-evidence"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-inference-context-opera2015-appearance-evidence",
      "source": "phys:opera2015-inference-context",
      "target": "phys:opera2015-appearance-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The original statistical procedure preserves channel information, nuisance treatment and the stated hypothesis or interval convention.",
      "claimIds": [
        "M-phys-opera2015-appearance-evidence"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-decay-candidates-opera2015-parameter-compatibility",
      "source": "phys:opera2015-decay-candidates",
      "target": "phys:opera2015-parameter-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The four-channel counts supply the observed data to this original same-acquisition inference.",
      "claimIds": [
        "M-phys-opera2015-parameter-compatibility"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-expected-counts-opera2015-parameter-compatibility",
      "source": "phys:opera2015-expected-counts",
      "target": "phys:opera2015-parameter-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The nominal signal/background vectors and their uncertainties condition this inference; fitted parameters are not retroactive inputs to the nominal prediction.",
      "claimIds": [
        "M-phys-opera2015-parameter-compatibility"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-inference-context-opera2015-parameter-compatibility",
      "source": "phys:opera2015-inference-context",
      "target": "phys:opera2015-parameter-compatibility",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The original statistical procedure preserves channel information, nuisance treatment and the stated hypothesis or interval convention.",
      "claimIds": [
        "M-phys-opera2015-parameter-compatibility"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:tau-neutrino-appearance-readout-opera2015-appearance-evidence",
      "source": "phys:tau-neutrino-appearance-readout",
      "target": "phys:opera2015-appearance-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected tau-decay readout connects the background comparison to the conditional appearance interpretation; it does not track flavor along the baseline.",
      "claimIds": [
        "M-phys-opera2015-appearance-evidence"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-acquisition-context-opera2015-appearance-evidence",
      "source": "phys:opera2015-acquisition-context",
      "target": "phys:opera2015-appearance-evidence",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The predominantly muon-neutrino beam and negligible adopted intrinsic tau component condition the appearance interpretation separately from detector backgrounds.",
      "claimIds": [
        "M-phys-opera2015-appearance-evidence"
      ],
      "contextIds": [
        "opera2015-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "opera2015-acquisition",
      "sourceId": "opera2015-appearance",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.115.121802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "12",
      "pages": "121802",
      "system": "OPERA 2008–2012 CNGS accelerator exposure",
      "preparation": "Use the 2008–2012 CNGS exposure of 17.97e19 protons on target, with a predominantly muon-neutrino beam over 730 km and mean energy about 17 GeV. From target-fiducial interactions, analyze the first and second most probable bricks for 0-muon events and 1-muon events with p_mu<15 GeV/c under the stated timing, tracking and vertex procedures.",
      "observable": "Selected first/second-brick event census and reconstructed tau-decay candidate topology/channel counts.",
      "finding": "For tau-to-1h, tau-to-3h, tau-to-muon and tau-to-electron, Table III reports candidate counts 3,1,1,0, respectively, totaling five. This includes the new fifth event and four previously reported candidates from the same accelerator campaign.",
      "limitations": [
        "The 19505 target-fiducial interactions and the 5408 fully analyzed events have different selection boundaries. The latter uses 0-muon events and 1-muon events with p_mu<15 GeV/c, including the first and second most probable bricks. Five divided by either census is not a measured flavor-transition probability.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here.",
        "The reconstructed flight length 960 +/-30 micrometers differs from zdec=630 +/-30 micrometers measured from a lead-plate face; neither is an ensemble tau lifetime. Visible energy, scalar momentum sum and daughter momentum are different observables. Central cut compliance is not a joint acceptance probability or independent-Gaussian uncertainty calculation.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 1507.01417v2, pages 2–3 and Table I: 2008–2012 exposure, detector, 0-muon/1-muon classification, first/second-brick selection and analyzed census",
        "Pages 3–4, fifth-candidate section, Figures 1–2 and Table II: 14 August 2012 kink, daughter identification, fragment searches, reconstructed kinematics and predefined cuts",
        "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1507.01417v2",
      "correctionCheck": "Author v2 and publisher identity checked. The directly cited 2013 method has a separately read 2014 publisher erratum. Earlier OPERA outputs reuse this campaign; this is not a later reanalysis or a reproduced likelihood. An exhaustive later correction search is not claimed."
    },
    {
      "id": "opera2015-response",
      "sourceId": "opera2015-appearance",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.121802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "12",
      "pages": "121802",
      "system": "OPERA 2008–2012 CNGS accelerator exposure",
      "preparation": "Use emulsion vertex/track reconstruction, multiple-scattering momentum estimates and muon identification with the stated scanning and decay-selection response. Model signal and charm, hadronic-reinteraction and large-angle-muon-scattering backgrounds using the reported simulation and auxiliary checks, normalized to detected muon-neutrino interactions. Preserve the earlier method erratum.",
      "observable": "Original model-conditioned detectable signal/background expectations, with adopted data-assisted normalization and auxiliary checks.",
      "finding": "In the four-channel order, Table III gives signal expectations 0.52 +/-0.10, 0.73 +/-0.14, 0.61 +/-0.12, 0.78 +/-0.16, and background expectations 0.04 +/-0.01, 0.17 +/-0.03, 0.004 +/-0.001, 0.03 +/-0.01. Reported totals are 2.64 +/-0.53 signal and 0.25 +/-0.05 background, under the adopted response and nominal oscillation parameters.",
      "limitations": [
        "The expected signal uses reconstruction efficiencies and a simulated tau-neutrino rate normalized to detected muon-neutrino interactions; the background uses a similar normalization. The 5408 analyzed-event census alone does not reconstruct these rates or efficiencies. GENIE v2.6, NEGN/TAUOLA and beam/interaction inputs are adopted, not replayed.",
        "CNGS charm controls share the beam experiment; pion test-beam and external charged-particle scattering measurements are separate auxiliary preparations. Their full datasets, reconstruction and systematic covariance are not reviewed. Data-assisted normalization reduces some flux/efficiency dependence without removing every response uncertainty.",
        "The 2014 publisher erratum changes earlier uncertainties, the track-follow-down discriminator and Equation 4.1 normalization. The selected beam-composition passage is unchanged. No uncorrected older formula or earlier two-event inference is imported; neither the corrected normalization nor the upstream calibration chain is replayed.",
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Pages 3–5, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
        "Page 6, Table III: four-channel signal/background expectations and observed tau-decay candidates"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1507.01417v2",
      "correctionCheck": "Author v2 and publisher identity checked. The directly cited 2013 method has a separately read 2014 publisher erratum. Earlier OPERA outputs reuse this campaign; this is not a later reanalysis or a reproduced likelihood. An exhaustive later correction search is not claimed."
    },
    {
      "id": "opera2015-inference",
      "sourceId": "opera2015-appearance",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.115.121802",
      "journal": "Physical Review Letters",
      "volume": "115",
      "issue": "12",
      "pages": "121802",
      "system": "OPERA 2008–2012 CNGS accelerator exposure",
      "preparation": "Use four channel counts with independent Poisson means mu*s_i+beta_i and the Gaussian background factors of Equation 1. Compare Fisher-product and one-sided profile-likelihood statistics with their pseudoexperiment distributions for background-only mu=0. Use the same acquisition for nominal-signal compatibility and the full-mixing mass-squared interval.",
      "observable": "Reported channel-aware appearance evidence and same-data signal-strength/full-mixing mass-squared interpretation.",
      "finding": "The original channel-based tests report a one-sided significance of 5.1 standard deviations, with the Fisher-method background-fluctuation probability 1.1e-7; the profile-likelihood implementations also report 5.1. Under the stated beam, response and background model, the selected decay candidates support tau-neutrino appearance in the CNGS beam.",
      "limitations": [
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "The Fisher product of channel tail probabilities is a test statistic, not the final calibrated p value. A total-count Poisson tail with background mean 0.25 is not the reported channel-aware 1.1e-7 result. Significance is a background-hypothesis tail comparison, not a posterior probability that oscillations are true.",
        "The signal-strength errors are a 90% confidence interval, not one-standard-deviation errors. The mass-squared result additionally assumes full mixing and reuses the selected data/model. It is not an absolute mass, a complete three-flavor global fit, a Dirac/Majorana test or a unique mass-generation mechanism.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Pages 5–6, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
        "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1507.01417v2",
      "correctionCheck": "Author v2 and publisher identity checked. The directly cited 2013 method has a separately read 2014 publisher erratum. Earlier OPERA outputs reuse this campaign; this is not a later reanalysis or a reproduced likelihood. An exhaustive later correction search is not claimed."
    }
  ],
  "comparisons": [
    {
      "id": "opera2015-appearance-interpretation",
      "candidate": "The reported selected tau-decay channels support accelerator tau-neutrino appearance under the beam and response/background conditions.",
      "alternative": "Five counts alone reproduce the discovery significance, or repeated event displays and earlier subset papers independently confirm it.",
      "discriminator": "Separate selected classifications from simulated means and inspect the four-channel pseudoexperiment-calibrated background comparison.",
      "result": "conditional-support",
      "limit": "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
      "assumptions": [
        "The selected beam passage quotes contamination in terms of interactions, not incident flux fractions: antimuon neutrinos 2.1%, electron plus antielectron neutrinos below 1%, intrinsic tau-neutrino component of order 1e-6. These are adopted beam-composition conditions. The approximately 17 GeV mean is not each event energy.",
        "Appearance is inferred through charged-current tau production and selected decay topology, not direct tracking of a neutrino flavor along its flight. Muon tagging, hadronic interactions, fragment searches and kinematic cuts have finite response and acceptance. The collider-specific tau_h convention is not used here.",
        "The four channels are ordered tau-to-1h, tau-to-3h, tau-to-muon, tau-to-electron. Candidate counts are selected classifications, whereas signal/background entries are model-conditioned expected means. Rounded entries need not sum exactly to printed totals, and blank background cells are not new measurements of exact zero.",
        "The Fisher product of channel tail probabilities is a test statistic, not the final calibrated p value. A total-count Poisson tail with background mean 0.25 is not the reported channel-aware 1.1e-7 result. Significance is a background-hypothesis tail comparison, not a posterior probability that oscillations are true.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments."
      ],
      "sourceIds": [
        "opera2015-appearance",
        "opera2013-beam-method"
      ],
      "claimIds": [
        "D-phys-tau-neutrino-appearance-readout",
        "C-phys-opera2015-decay-candidates",
        "C-phys-opera2015-expected-counts",
        "C-phys-opera2015-appearance-evidence"
      ]
    },
    {
      "id": "opera2015-parameter-interpretation",
      "candidate": "The same accelerator data are compatible with the nominal oscillation expectation and supply the published conditional 90% interval.",
      "alternative": "The interval is an independent confirmation of the appearance result, fixes absolute masses or determines a unique mass-generation route.",
      "discriminator": "Retain supplied nominal parameters, full mixing, shared candidate data/model and the 90% rather than one-sigma convention.",
      "result": "conditional-support",
      "limit": "The signal-strength errors are a 90% confidence interval, not one-standard-deviation errors. The mass-squared result additionally assumes full mixing and reuses the selected data/model. It is not an absolute mass, a complete three-flavor global fit, a Dirac/Majorana test or a unique mass-generation mechanism.",
      "assumptions": [
        "The reported 2.64 +/-0.53 expected signal adopts Delta m23^2=2.44e-3 eV^2 and sin^2(2 theta23)=1. Its quoted uncertainty includes model and efficiency inputs. These nominal parameters are not independently determined by the expectation and are not retroactively replaced by the fitted interval.",
        "Equation 1 uses independent channel Poisson factors and Gaussian background nuisance terms as the authors' statistical model. The rounded table does not fully specify nuisance domains, unrounded inputs or pseudoexperiment construction. Neither the likelihood, significance calibration nor confidence coverage is locally reproduced.",
        "Earlier OPERA candidate publications use subsets of this same 2008–2012 exposure. The fifth event contributes to the four-channel total; candidate displays, significance, strength and mass-squared interval are dependent results. The two statistical implementations are not independent experiments.",
        "These source-specific appearance results supply no universal carrier minimum, weighted parent necessity, temporal emergence ordering or SOMA property/level validation. They do not by themselves establish astrophysical transport or cosmological predictions."
      ],
      "sourceIds": [
        "opera2015-appearance"
      ],
      "claimIds": [
        "C-phys-opera2015-expected-counts",
        "C-phys-opera2015-parameter-compatibility"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:tau-neutrino-appearance-readout",
      "role": "definition",
      "denotes": "The OPERA appearance readout identifies charged-current tau-neutrino interaction candidates through the topology and kinematics of the produced tau decay in an emulsion/lead detector. One-hadron, three-hadron, muon and electron decay selections are distinct channels with modeled backgrounds.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-tau-neutrino-appearance-readout"
      ]
    },
    {
      "nodeId": "phys:opera2015-acquisition-context",
      "role": "experimental-context",
      "denotes": "Use the 2008–2012 CNGS exposure of 17.97e19 protons on target, with a predominantly muon-neutrino beam over 730 km and mean energy about 17 GeV. From target-fiducial interactions, analyze the first and second most probable bricks for 0-muon events and 1-muon events with p_mu<15 GeV/c under the stated timing, tracking and vertex procedures.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opera2015-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:opera2015-response-context",
      "role": "model-context",
      "denotes": "Use emulsion vertex/track reconstruction, multiple-scattering momentum estimates and muon identification with the stated scanning and decay-selection response. Model signal and charm, hadronic-reinteraction and large-angle-muon-scattering backgrounds using the reported simulation and auxiliary checks, normalized to detected muon-neutrino interactions. Preserve the earlier method erratum.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opera2015-response-context"
      ]
    },
    {
      "nodeId": "phys:opera2015-inference-context",
      "role": "model-context",
      "denotes": "Use four channel counts with independent Poisson means mu*s_i+beta_i and the Gaussian background factors of Equation 1. Compare Fisher-product and one-sided profile-likelihood statistics with their pseudoexperiment distributions for background-only mu=0. Use the same acquisition for nominal-signal compatibility and the full-mixing mass-squared interval.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-opera2015-inference-context"
      ]
    },
    {
      "nodeId": "phys:opera2015-analyzed-sample",
      "role": "scoped-phenomenon",
      "denotes": "The reported exposure produces 19505 neutrino interactions in the target fiducial volume. Table I gives 5408 fully analyzed selected events: 1144 classified 0-muon and 4264 classified 1-muon with p_mu<15 GeV/c. These are the specified first/second-brick analysis samples.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-analyzed-sample"
      ]
    },
    {
      "nodeId": "phys:opera2015-fifth-candidate",
      "role": "scoped-phenomenon",
      "denotes": "The 14 August 2012 event has a reconstructed 90 +/-2 mrad kink and flight length 960 +/-30 micrometers; the daughter undergoes a hadronic interaction. Its measured central kinematics satisfy the predefined tau-to-1h cuts, including daughter momentum 11(+14/-4) GeV/c and zdec=630 +/-30 micrometers. The stated secondary-vertex fragment and attached-photon searches find none.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-fifth-candidate"
      ]
    },
    {
      "nodeId": "phys:opera2015-decay-candidates",
      "role": "scoped-phenomenon",
      "denotes": "For tau-to-1h, tau-to-3h, tau-to-muon and tau-to-electron, Table III reports candidate counts 3,1,1,0, respectively, totaling five. This includes the new fifth event and four previously reported candidates from the same accelerator campaign.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-decay-candidates"
      ]
    },
    {
      "nodeId": "phys:opera2015-expected-counts",
      "role": "scoped-phenomenon",
      "denotes": "In the four-channel order, Table III gives signal expectations 0.52 +/-0.10, 0.73 +/-0.14, 0.61 +/-0.12, 0.78 +/-0.16, and background expectations 0.04 +/-0.01, 0.17 +/-0.03, 0.004 +/-0.001, 0.03 +/-0.01. Reported totals are 2.64 +/-0.53 signal and 0.25 +/-0.05 background, under the adopted response and nominal oscillation parameters.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-expected-counts"
      ]
    },
    {
      "nodeId": "phys:opera2015-appearance-evidence",
      "role": "scoped-phenomenon",
      "denotes": "The original channel-based tests report a one-sided significance of 5.1 standard deviations, with the Fisher-method background-fluctuation probability 1.1e-7; the profile-likelihood implementations also report 5.1. Under the stated beam, response and background model, the selected decay candidates support tau-neutrino appearance in the CNGS beam.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-appearance-evidence"
      ]
    },
    {
      "nodeId": "phys:opera2015-parameter-compatibility",
      "role": "scoped-phenomenon",
      "denotes": "The same analysis reports signal strength mu=1.8(+1.8/-1.1) at 90% confidence, compatible with nominal mu=1. Assuming full mixing, it reports Delta m23^2=3.3e-3 eV^2 with 90% interval [2.0,5.0]e-3 eV^2; the three stated interval methods give negligible differences.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-opera2015-parameter-compatibility"
      ]
    }
  ]
};

/** Keep selected tau topology, modeled means and original inference distinct. */
export function validateAcceleratorNeutrinoContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing accelerator-neutrino ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Accelerator-neutrino ${kind} changed ${id}.${key}: preserve original appearance scope`);
    }
  }
}
