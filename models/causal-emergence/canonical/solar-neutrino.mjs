import assert from "node:assert/strict";

export const SOLAR_NEUTRINO_CHECKS = new Map();
export const SOLAR_NEUTRINO_ANALYTICAL_SOURCES = new Map();
export const SOLAR_NEUTRINO_ADMISSION = {
  "definitions": [
    [
      "phys:solar-neutrino-channel-response",
      "D-phys-solar-neutrino-channel-response"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-fields-solar-neutrino-channel-response",
      [
        "phys:lepton-fields",
        "phys:solar-neutrino-channel-response"
      ]
    ]
  ],
  "contexts": [
    [
      "sno2002-acquisition-context",
      "M-phys-sno2002-acquisition-context",
      [
        "sno2002-acquisition"
      ]
    ],
    [
      "sno2002-response-context",
      "M-phys-sno2002-response-context",
      [
        "sno2002-response"
      ]
    ],
    [
      "sno2002-channel-fit-context",
      "M-phys-sno2002-channel-fit-context",
      [
        "sno2002-channel-fit"
      ]
    ],
    [
      "sno2002-flavor-fit-context",
      "M-phys-sno2002-flavor-fit-context",
      [
        "sno2002-flavor-fit"
      ]
    ]
  ],
  "observations": [
    [
      "sno2002-selected-events",
      "C-phys-sno2002-selected-events",
      [
        "sno2002-acquisition"
      ]
    ],
    [
      "sno2002-background-estimate",
      "C-phys-sno2002-background-estimate",
      [
        "sno2002-response"
      ]
    ],
    [
      "sno2002-channel-yields",
      "C-phys-sno2002-channel-yields",
      [
        "sno2002-channel-fit"
      ]
    ],
    [
      "sno2002-channel-fluxes",
      "C-phys-sno2002-channel-fluxes",
      [
        "sno2002-channel-fit"
      ]
    ],
    [
      "sno2002-active-flavor-components",
      "C-phys-sno2002-active-flavor-components",
      [
        "sno2002-flavor-fit"
      ]
    ]
  ],
  "dependencies": [
    [
      "sno2002-acquisition-context-sno2002-selected-events",
      "sno2002-acquisition-context",
      "sno2002-selected-events",
      "M-phys-sno2002-selected-events",
      "measurement-context"
    ],
    [
      "sno2002-response-context-sno2002-selected-events",
      "sno2002-response-context",
      "sno2002-selected-events",
      "M-phys-sno2002-selected-events",
      "interpretation-dependency"
    ],
    [
      "sno2002-response-context-sno2002-background-estimate",
      "sno2002-response-context",
      "sno2002-background-estimate",
      "M-phys-sno2002-background-estimate",
      "interpretation-dependency"
    ],
    [
      "sno2002-selected-events-sno2002-channel-yields",
      "sno2002-selected-events",
      "sno2002-channel-yields",
      "M-phys-sno2002-channel-yields",
      "interpretation-dependency"
    ],
    [
      "sno2002-background-estimate-sno2002-channel-yields",
      "sno2002-background-estimate",
      "sno2002-channel-yields",
      "M-phys-sno2002-channel-yields",
      "interpretation-dependency"
    ],
    [
      "solar-neutrino-channel-response-sno2002-channel-yields",
      "solar-neutrino-channel-response",
      "sno2002-channel-yields",
      "M-phys-sno2002-channel-yields",
      "interpretation-dependency"
    ],
    [
      "sno2002-response-context-sno2002-channel-yields",
      "sno2002-response-context",
      "sno2002-channel-yields",
      "M-phys-sno2002-channel-yields",
      "interpretation-dependency"
    ],
    [
      "sno2002-channel-fit-context-sno2002-channel-yields",
      "sno2002-channel-fit-context",
      "sno2002-channel-yields",
      "M-phys-sno2002-channel-yields",
      "interpretation-dependency"
    ],
    [
      "sno2002-channel-yields-sno2002-channel-fluxes",
      "sno2002-channel-yields",
      "sno2002-channel-fluxes",
      "M-phys-sno2002-channel-fluxes",
      "interpretation-dependency"
    ],
    [
      "sno2002-response-context-sno2002-channel-fluxes",
      "sno2002-response-context",
      "sno2002-channel-fluxes",
      "M-phys-sno2002-channel-fluxes",
      "interpretation-dependency"
    ],
    [
      "sno2002-channel-fit-context-sno2002-channel-fluxes",
      "sno2002-channel-fit-context",
      "sno2002-channel-fluxes",
      "M-phys-sno2002-channel-fluxes",
      "interpretation-dependency"
    ],
    [
      "sno2002-selected-events-sno2002-active-flavor-components",
      "sno2002-selected-events",
      "sno2002-active-flavor-components",
      "M-phys-sno2002-active-flavor-components",
      "interpretation-dependency"
    ],
    [
      "sno2002-background-estimate-sno2002-active-flavor-components",
      "sno2002-background-estimate",
      "sno2002-active-flavor-components",
      "M-phys-sno2002-active-flavor-components",
      "interpretation-dependency"
    ],
    [
      "solar-neutrino-channel-response-sno2002-active-flavor-components",
      "solar-neutrino-channel-response",
      "sno2002-active-flavor-components",
      "M-phys-sno2002-active-flavor-components",
      "interpretation-dependency"
    ],
    [
      "sno2002-response-context-sno2002-active-flavor-components",
      "sno2002-response-context",
      "sno2002-active-flavor-components",
      "M-phys-sno2002-active-flavor-components",
      "interpretation-dependency"
    ],
    [
      "sno2002-flavor-fit-context-sno2002-active-flavor-components",
      "sno2002-flavor-fit-context",
      "sno2002-active-flavor-components",
      "M-phys-sno2002-active-flavor-components",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "sno2002-acquisition",
    "sno2002-response",
    "sno2002-channel-fit",
    "sno2002-flavor-fit"
  ],
  "comparisonIds": [
    "sno2002-event-and-channel-boundary",
    "sno2002-active-flavor-inference",
    "sno2002-shape-and-external-input-boundary"
  ],
  "inferenceSources": [
    [
      "M-phys-sno2002-acquisition-context",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-response-context",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-channel-fit-context",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-flavor-fit-context",
      [
        "sno2002-nc"
      ]
    ],
    [
      "C-phys-sno2002-selected-events",
      [
        "sno2002-nc"
      ]
    ],
    [
      "C-phys-sno2002-background-estimate",
      [
        "sno2002-nc"
      ]
    ],
    [
      "C-phys-sno2002-channel-yields",
      [
        "sno2002-nc"
      ]
    ],
    [
      "C-phys-sno2002-channel-fluxes",
      [
        "sno2002-nc"
      ]
    ],
    [
      "C-phys-sno2002-active-flavor-components",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-selected-events",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-background-estimate",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-channel-yields",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-channel-fluxes",
      [
        "sno2002-nc"
      ]
    ],
    [
      "M-phys-sno2002-active-flavor-components",
      [
        "sno2002-nc"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "sno2002-nc",
      "kind": "research-publication",
      "title": "Direct Evidence for Neutrino Flavor Transformation from Neutral-Current Interactions in the Sudbury Neutrino Observatory",
      "authors": [
        "SNO Collaboration"
      ],
      "year": 2002,
      "doi": "10.1103/PhysRevLett.89.011301",
      "url": "https://arxiv.org/abs/nucl-ex/0204008v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-version",
        "locators": [
          "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
          "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison"
        ],
        "limit": "All six pages of arXiv:nucl-ex/0204008v2 were read, including references and final notes; pages 3-6 were visually checked for Tables I-II, Figures 1-3 and note 13. This is the author version revised 9 May 2002, not a retrieved publisher PDF. Its regenerated 3 February 2008 date is neither publication nor acquisition date. The full 179-name author roster was checked on page 1; the source uses the collaboration collective attribution. The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-solar-neutrino-channel-response",
      "kind": "review-finding",
      "statement": "In the stated solar-neutrino weak-response model, nu_e+d->p+p+e-minus is the charged-current channel, nu_x+d->p+n+nu_x is the neutral-current channel and nu_x+e-minus->nu_x+e-minus is elastic scattering. CC is electron-flavor sensitive; NC has equal sensitivity to the three active flavors; ES has reduced muon/tau sensitivity. Reconstructed Cherenkov observables distinguish statistical response templates, not individually labeled incoming flavors.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Teff is reconstructed electron-equivalent kinetic energy, not incident neutrino energy. The 2.2 MeV NC reaction threshold, 6.25 MeV neutron-capture gamma and 5 MeV analysis threshold describe different quantities. The selected sample is not a released event-level table or an eventwise flavor measurement.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism."
      ]
    },
    {
      "id": "M-phys-sno2002-acquisition-context",
      "kind": "method",
      "statement": "Use the pure-D2O first-phase acquisition from 2 November 1999 to 28 May 2001, with 306.4 live days. Reconstruct effective kinetic energy, radius and solar angle from PMT times and hit patterns. Select Teff from 5 to 20 MeV and radius at most 550 cm; include the additional 250 ms veto after events with more than 60 hit PMTs.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Teff is reconstructed electron-equivalent kinetic energy, not incident neutrino energy. The 2.2 MeV NC reaction threshold, 6.25 MeV neutron-capture gamma and 5 MeV analysis threshold describe different quantities. The selected sample is not a released event-level table or an eventwise flavor measurement.",
        "Figure 2a and 2c apply the fiducial cut; Figure 2b displays radii beyond that boundary. Display curves are simulation templates scaled to fit results, not independently measured channel populations. The selected 2928 count must not be assigned to every plotted radial bin.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-acquisition"
      ]
    },
    {
      "id": "M-phys-sno2002-response-context",
      "kind": "method",
      "statement": "Adopt the Cf-252 neutron calibration, N-16 energy calibration and simulation, nuclear cross sections and standard B8 spectral input. Use the separately described in-situ/ex-situ U/Th controls, deployed-source response and simulation to estimate accepted backgrounds. Retain 29.9 +/- 1.1 percent uniform-source neutron capture efficiency and 14.4 percent selected detection efficiency as different response quantities.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Capture efficiency 29.9 +/- 1.1 percent for a uniform neutron source in D2O differs from the 14.4 percent selected detection efficiency. Neutrons produced near the boundary have a lower accepted efficiency. These are adopted calibration/response results, not newly reproduced efficiencies or interchangeable normalization factors.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-response"
      ]
    },
    {
      "id": "M-phys-sno2002-channel-fit-context",
      "kind": "method",
      "statement": "Fit CC, ES and NC amplitudes by the reported extended maximum likelihood in Teff, cos(theta_sun) and (R/600 cm)^3. Use simulation templates for the standard B8 shape and centrally fixed background amplitudes from calibration. Repeat the decomposition with perturbed response templates for systematics; normalize channel rates using the stated electron-neutrino cross-section convention.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "M-phys-sno2002-flavor-fit-context",
      "kind": "method",
      "statement": "Analyze the same selected sample and response model directly in electron and non-electron active-flux variables, assuming the standard B8 shape. Use the joint three-reaction information for the no-flavor-transformation null test. Retain note 13 and the source joint probability contours; this is the SNO-only inference before any external Super-Kamiokande solar-ES constraint.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "C-phys-sno2002-selected-events",
      "kind": "review-finding",
      "statement": "The stated selection yields 2928 events in the reconstructed 5-20 MeV analysis region and fiducial radius at most 550 cm. Their energy, solar-direction and radial response is the shared input to the reported signal decompositions.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Teff is reconstructed electron-equivalent kinetic energy, not incident neutrino energy. The 2.2 MeV NC reaction threshold, 6.25 MeV neutron-capture gamma and 5 MeV analysis threshold describe different quantities. The selected sample is not a released event-level table or an eventwise flavor measurement.",
        "Figure 2a and 2c apply the fiducial cut; Figure 2b displays radii beyond that boundary. Display curves are simulation templates scaled to fit results, not independently measured channel populations. The selected 2928 count must not be assigned to every plotted radial bin.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-acquisition"
      ]
    },
    {
      "id": "C-phys-sno2002-background-estimate",
      "kind": "review-finding",
      "statement": "Table I reports 78 +/- 12 accepted neutron-background events and 45(+18/-12) Cherenkov-background events. These estimates use the stated controls, production locations, response and simulation; they are not additional observed solar-neutrino counts.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "Capture efficiency 29.9 +/- 1.1 percent for a uniform neutron source in D2O differs from the 14.4 percent selected detection efficiency. Neutrons produced near the boundary have a lower accepted efficiency. These are adopted calibration/response results, not newly reproduced efficiencies or interchangeable normalization factors.",
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-response"
      ]
    },
    {
      "id": "C-phys-sno2002-channel-yields",
      "kind": "review-finding",
      "statement": "The three-channel extended likelihood reports CC 1967.7(+61.9/-60.9), ES 263.6(+26.4/-25.6) and NC 576.5(+49.5/-48.9) events. These are fitted channel-yield parameters; the quoted uncertainties here are statistical.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "C-phys-sno2002-channel-fluxes",
      "kind": "review-finding",
      "statement": "In units of 10^6 cm^-2 s^-1, the channel-normalized results are CC 1.76(+0.06/-0.05 statistical)(+/-0.09 systematic), ES 2.39(+0.24/-0.23 statistical)(+/-0.12 systematic), and NC 5.09(+0.44/-0.43 statistical)(+0.46/-0.43 systematic). They use the adopted B8 shape and electron-neutrino cross sections for all three channel normalizations.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "C-phys-sno2002-active-flavor-components",
      "kind": "review-finding",
      "statement": "The SNO-only direct joint analysis reports electron flux 1.76(+/-0.05 statistical)(+/-0.09 systematic) and non-electron active flux 3.41(+/-0.45 statistical)(+0.48/-0.45 systematic), in units of 10^6 cm^-2 s^-1. Under the stated response and B8-shape assumptions, the article reports the non-electron component 5.3 standard deviations above zero, supporting solar flavor transformation compatible with oscillations.",
      "scope": "The SNO pure-D2O 1999-2001 acquisition and original 2002 channel/flavor analyses under declared weak response and B8-shape assumptions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "supports",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "M-phys-sno2002-selected-events",
      "kind": "method",
      "statement": "Apply the calibrated energy and position reconstruction and selection to the declared acquisition; preserve the selected readout and count without assigning per-event incoming flavor or channel identity.",
      "scope": "The declared SNO inference stage and its shared acquisition, response and model inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Teff is reconstructed electron-equivalent kinetic energy, not incident neutrino energy. The 2.2 MeV NC reaction threshold, 6.25 MeV neutron-capture gamma and 5 MeV analysis threshold describe different quantities. The selected sample is not a released event-level table or an eventwise flavor measurement.",
        "Figure 2a and 2c apply the fiducial cut; Figure 2b displays radii beyond that boundary. Display curves are simulation templates scaled to fit results, not independently measured channel populations. The selected 2928 count must not be assigned to every plotted radial bin.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-acquisition"
      ]
    },
    {
      "id": "M-phys-sno2002-background-estimate",
      "kind": "method",
      "statement": "Use the adopted background controls and detector response to infer accepted neutron and Cherenkov components. Preserve separate source regions, auxiliary preparations and systematic treatment.",
      "scope": "The declared SNO inference stage and its shared acquisition, response and model inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "Capture efficiency 29.9 +/- 1.1 percent for a uniform neutron source in D2O differs from the 14.4 percent selected detection efficiency. Neutrons produced near the boundary have a lower accepted efficiency. These are adopted calibration/response results, not newly reproduced efficiencies or interchangeable normalization factors.",
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-response"
      ]
    },
    {
      "id": "M-phys-sno2002-channel-yields",
      "kind": "method",
      "statement": "Infer channel amplitudes from the same selected sample using the calibrated response, adopted backgrounds and stated three-template likelihood. Fitted amplitudes are not an exact integer partition.",
      "scope": "The declared SNO inference stage and its shared acquisition, response and model inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "M-phys-sno2002-channel-fluxes",
      "kind": "method",
      "statement": "Normalize the fitted channel rates using the stated exposure, detector response, spectrum and electron-neutrino cross sections; retain the ES convention and shared uncertainty.",
      "scope": "The declared SNO inference stage and its shared acquisition, response and model inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "M-phys-sno2002-active-flavor-components",
      "kind": "method",
      "statement": "Use the same selected data, backgrounds and weak response in the reported direct joint flavor analysis. Do not replace the joint inference by subtraction of channel-flux centers or silently import the SK-added or shape-relaxed analyses.",
      "scope": "The declared SNO inference stage and its shared acquisition, response and model inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "method",
          "note": "Supports the stated SNO preparation, response convention or original inference; no independent experimental replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:solar-neutrino-channel-response",
      "name": "Solar neutrino CC, NC and ES response",
      "kind": "definition",
      "description": "In the stated solar-neutrino weak-response model, nu_e+d->p+p+e-minus is the charged-current channel, nu_x+d->p+n+nu_x is the neutral-current channel and nu_x+e-minus->nu_x+e-minus is elastic scattering. CC is electron-flavor sensitive; NC has equal sensitivity to the three active flavors; ES has reduced muon/tau sensitivity. Reconstructed Cherenkov observables distinguish statistical response templates, not individually labeled incoming flavors.",
      "claimIds": [
        "D-phys-solar-neutrino-channel-response"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        }
      ],
      "openObligations": [
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-acquisition-context",
      "name": "SNO pure-D2O acquisition and selection",
      "kind": "context",
      "description": "Use the pure-D2O first-phase acquisition from 2 November 1999 to 28 May 2001, with 306.4 live days. Reconstruct effective kinetic energy, radius and solar angle from PMT times and hit patterns. Select Teff from 5 to 20 MeV and radius at most 550 cm; include the additional 250 ms veto after events with more than 60 hit PMTs.",
      "claimIds": [
        "M-phys-sno2002-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-response-context",
      "name": "SNO adopted calibration and response inputs",
      "kind": "context",
      "description": "Adopt the Cf-252 neutron calibration, N-16 energy calibration and simulation, nuclear cross sections and standard B8 spectral input. Use the separately described in-situ/ex-situ U/Th controls, deployed-source response and simulation to estimate accepted backgrounds. Retain 29.9 +/- 1.1 percent uniform-source neutron capture efficiency and 14.4 percent selected detection efficiency as different response quantities.",
      "claimIds": [
        "M-phys-sno2002-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-channel-fit-context",
      "name": "SNO channel decomposition and normalization",
      "kind": "context",
      "description": "Fit CC, ES and NC amplitudes by the reported extended maximum likelihood in Teff, cos(theta_sun) and (R/600 cm)^3. Use simulation templates for the standard B8 shape and centrally fixed background amplitudes from calibration. Repeat the decomposition with perturbed response templates for systematics; normalize channel rates using the stated electron-neutrino cross-section convention.",
      "claimIds": [
        "M-phys-sno2002-channel-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-flavor-fit-context",
      "name": "SNO direct joint active-flavor inference",
      "kind": "context",
      "description": "Analyze the same selected sample and response model directly in electron and non-electron active-flux variables, assuming the standard B8 shape. Use the joint three-reaction information for the no-flavor-transformation null test. Retain note 13 and the source joint probability contours; this is the SNO-only inference before any external Super-Kamiokande solar-ES constraint.",
      "claimIds": [
        "M-phys-sno2002-flavor-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-selected-events",
      "name": "SNO selected Cherenkov events",
      "kind": "scoped-process",
      "description": "The stated selection yields 2928 events in the reconstructed 5-20 MeV analysis region and fiducial radius at most 550 cm. Their energy, solar-direction and radial response is the shared input to the reported signal decompositions.",
      "claimIds": [
        "C-phys-sno2002-selected-events"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-background-estimate",
      "name": "SNO accepted background estimates",
      "kind": "scoped-process",
      "description": "Table I reports 78 +/- 12 accepted neutron-background events and 45(+18/-12) Cherenkov-background events. These estimates use the stated controls, production locations, response and simulation; they are not additional observed solar-neutrino counts.",
      "claimIds": [
        "C-phys-sno2002-background-estimate"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-channel-yields",
      "name": "SNO fitted channel amplitudes",
      "kind": "scoped-process",
      "description": "The three-channel extended likelihood reports CC 1967.7(+61.9/-60.9), ES 263.6(+26.4/-25.6) and NC 576.5(+49.5/-48.9) events. These are fitted channel-yield parameters; the quoted uncertainties here are statistical.",
      "claimIds": [
        "C-phys-sno2002-channel-yields"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-channel-fluxes",
      "name": "SNO response-normalized channel fluxes",
      "kind": "scoped-process",
      "description": "In units of 10^6 cm^-2 s^-1, the channel-normalized results are CC 1.76(+0.06/-0.05 statistical)(+/-0.09 systematic), ES 2.39(+0.24/-0.23 statistical)(+/-0.12 systematic), and NC 5.09(+0.44/-0.43 statistical)(+0.46/-0.43 systematic). They use the adopted B8 shape and electron-neutrino cross sections for all three channel normalizations.",
      "claimIds": [
        "C-phys-sno2002-channel-fluxes"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    },
    {
      "id": "phys:sno2002-active-flavor-components",
      "name": "SNO jointly inferred active-flavor components",
      "kind": "scoped-process",
      "description": "The SNO-only direct joint analysis reports electron flux 1.76(+/-0.05 statistical)(+/-0.09 systematic) and non-electron active flux 3.41(+/-0.45 statistical)(+0.48/-0.45 systematic), in units of 10^6 cm^-2 s^-1. Under the stated response and B8-shape assumptions, the article reports the non-electron component 5.3 standard deviations above zero, supporting solar flavor transformation compatible with oscillations.",
      "claimIds": [
        "C-phys-sno2002-active-flavor-components"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation"
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison"
        }
      ],
      "openObligations": [
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed.",
        "The original parent weights, carrier minima and fixed arising order are not admitted. Atmospheric and accelerator evidence, a matter-evolution construction and the separate application claims remain outside this SNO block; source cards 1.17 and 1.25 remain pending. The invisible-proton-decay footnote is not a new admitted bound."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-fields-solar-neutrino-channel-response",
      "source": "phys:lepton-fields",
      "target": "phys:solar-neutrino-channel-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target specifies the active-neutrino weak readout within the declared lepton field classification; mixing or mass generation is not required for the existence of these detector channels.",
      "claimIds": [
        "D-phys-solar-neutrino-channel-response"
      ]
    },
    {
      "id": "physics:sno2002-acquisition-context-sno2002-selected-events",
      "source": "phys:sno2002-acquisition-context",
      "target": "phys:sno2002-selected-events",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared pure-D2O acquisition and selection define the reported event sample.",
      "claimIds": [
        "M-phys-sno2002-selected-events"
      ],
      "contextIds": [
        "sno2002-acquisition"
      ]
    },
    {
      "id": "physics:sno2002-response-context-sno2002-selected-events",
      "source": "phys:sno2002-response-context",
      "target": "phys:sno2002-selected-events",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibrated reconstructed energy and position define the 5 MeV threshold and 550 cm fiducial selection; the selected sample is not an unprocessed acquisition.",
      "claimIds": [
        "M-phys-sno2002-selected-events"
      ],
      "contextIds": [
        "sno2002-acquisition"
      ]
    },
    {
      "id": "physics:sno2002-response-context-sno2002-background-estimate",
      "source": "phys:sno2002-response-context",
      "target": "phys:sno2002-background-estimate",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Identified background controls and detector response supply the accepted-event estimates; centrally fixed amplitudes are not uncertainty-free.",
      "claimIds": [
        "M-phys-sno2002-background-estimate"
      ],
      "contextIds": [
        "sno2002-response"
      ]
    },
    {
      "id": "physics:sno2002-selected-events-sno2002-channel-yields",
      "source": "phys:sno2002-selected-events",
      "target": "phys:sno2002-channel-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected sample supplies the likelihood data; the fit does not independently observe three disjoint event populations.",
      "claimIds": [
        "M-phys-sno2002-channel-yields"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-background-estimate-sno2002-channel-yields",
      "source": "phys:sno2002-background-estimate",
      "target": "phys:sno2002-channel-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted backgrounds enter the central three-channel likelihood and its stated systematic variations.",
      "claimIds": [
        "M-phys-sno2002-channel-yields"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:solar-neutrino-channel-response-sno2002-channel-yields",
      "source": "phys:solar-neutrino-channel-response",
      "target": "phys:sno2002-channel-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The channel-response convention distinguishes the statistical signal templates.",
      "claimIds": [
        "M-phys-sno2002-channel-yields"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-response-context-sno2002-channel-yields",
      "source": "phys:sno2002-response-context",
      "target": "phys:sno2002-channel-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Calibration, spectrum and response templates constrain the fitted signal amplitudes.",
      "claimIds": [
        "M-phys-sno2002-channel-yields"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-channel-fit-context-sno2002-channel-yields",
      "source": "phys:sno2002-channel-fit-context",
      "target": "phys:sno2002-channel-yields",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported extended likelihood and source assumptions define the fitted yield parameters.",
      "claimIds": [
        "M-phys-sno2002-channel-yields"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-channel-yields-sno2002-channel-fluxes",
      "source": "phys:sno2002-channel-yields",
      "target": "phys:sno2002-channel-fluxes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted channel rates are converted with the adopted response and cross-section normalization; fluxes are not a new acquisition.",
      "claimIds": [
        "M-phys-sno2002-channel-fluxes"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-response-context-sno2002-channel-fluxes",
      "source": "phys:sno2002-response-context",
      "target": "phys:sno2002-channel-fluxes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The exposure, spectrum, detector efficiency and electron-neutrino cross-section convention supply the flux normalization.",
      "claimIds": [
        "M-phys-sno2002-channel-fluxes"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-channel-fit-context-sno2002-channel-fluxes",
      "source": "phys:sno2002-channel-fit-context",
      "target": "phys:sno2002-channel-fluxes",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The original channel-analysis procedure preserves its uncertainty and normalization conventions.",
      "claimIds": [
        "M-phys-sno2002-channel-fluxes"
      ],
      "contextIds": [
        "sno2002-channel-fit"
      ]
    },
    {
      "id": "physics:sno2002-selected-events-sno2002-active-flavor-components",
      "source": "phys:sno2002-selected-events",
      "target": "phys:sno2002-active-flavor-components",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The direct joint flavor analysis uses the same selected data; channel-flux summaries are not substituted as an arithmetic-only input.",
      "claimIds": [
        "M-phys-sno2002-active-flavor-components"
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "physics:sno2002-background-estimate-sno2002-active-flavor-components",
      "source": "phys:sno2002-background-estimate",
      "target": "phys:sno2002-active-flavor-components",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted background components remain inputs to the joint flavor inference.",
      "claimIds": [
        "M-phys-sno2002-active-flavor-components"
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "physics:solar-neutrino-channel-response-sno2002-active-flavor-components",
      "source": "phys:solar-neutrino-channel-response",
      "target": "phys:sno2002-active-flavor-components",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The differently flavor-sensitive weak responses allow the declared joint active-flux inference.",
      "claimIds": [
        "M-phys-sno2002-active-flavor-components"
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "physics:sno2002-response-context-sno2002-active-flavor-components",
      "source": "phys:sno2002-response-context",
      "target": "phys:sno2002-active-flavor-components",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The adopted detector, cross-section and standard-B8-shape model bounds the inferred active components.",
      "claimIds": [
        "M-phys-sno2002-active-flavor-components"
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    },
    {
      "id": "physics:sno2002-flavor-fit-context-sno2002-active-flavor-components",
      "source": "phys:sno2002-flavor-fit-context",
      "target": "phys:sno2002-active-flavor-components",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This context identifies the SNO-only direct joint result and null test, with no external SK constraint or local likelihood replay.",
      "claimIds": [
        "M-phys-sno2002-active-flavor-components"
      ],
      "contextIds": [
        "sno2002-flavor-fit"
      ]
    }
  ],
  "studies": [
    {
      "id": "sno2002-acquisition",
      "sourceId": "sno2002-nc",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.89.011301",
      "journal": "Physical Review Letters",
      "volume": "89",
      "issue": "",
      "pages": "011301",
      "system": "SNO pure-D2O solar-neutrino acquisition and the stated original response/inference stage",
      "preparation": "Use the pure-D2O first-phase acquisition from 2 November 1999 to 28 May 2001, with 306.4 live days. Reconstruct effective kinetic energy, radius and solar angle from PMT times and hit patterns. Select Teff from 5 to 20 MeV and radius at most 550 cm; include the additional 250 ms veto after events with more than 60 hit PMTs.",
      "observable": "SNO selected Cherenkov events",
      "finding": "The stated selection yields 2928 events in the reconstructed 5-20 MeV analysis region and fiducial radius at most 550 cm. Their energy, solar-direction and radial response is the shared input to the reported signal decompositions.",
      "limitations": [
        "Teff is reconstructed electron-equivalent kinetic energy, not incident neutrino energy. The 2.2 MeV NC reaction threshold, 6.25 MeV neutron-capture gamma and 5 MeV analysis threshold describe different quantities. The selected sample is not a released event-level table or an eventwise flavor measurement.",
        "Figure 2a and 2c apply the fiducial cut; Figure 2b displays radii beyond that boundary. Display curves are simulation templates scaled to fit results, not independently measured channel populations. The selected 2928 count must not be assigned to every plotted radial bin.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
        "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
        "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/nucl-ex/0204008v2",
      "correctionCheck": "The reviewed author v2 has the stated author-list/reference corrections. This is not an exhaustive search for later SNO reanalyses or corrections; upstream cited articles remain outside the present reading."
    },
    {
      "id": "sno2002-response",
      "sourceId": "sno2002-nc",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.89.011301",
      "journal": "Physical Review Letters",
      "volume": "89",
      "issue": "",
      "pages": "011301",
      "system": "SNO pure-D2O solar-neutrino acquisition and the stated original response/inference stage",
      "preparation": "Adopt the Cf-252 neutron calibration, N-16 energy calibration and simulation, nuclear cross sections and standard B8 spectral input. Use the separately described in-situ/ex-situ U/Th controls, deployed-source response and simulation to estimate accepted backgrounds. Retain 29.9 +/- 1.1 percent uniform-source neutron capture efficiency and 14.4 percent selected detection efficiency as different response quantities.",
      "observable": "SNO accepted background estimates",
      "finding": "Table I reports 78 +/- 12 accepted neutron-background events and 45(+18/-12) Cherenkov-background events. These estimates use the stated controls, production locations, response and simulation; they are not additional observed solar-neutrino counts.",
      "limitations": [
        "Capture efficiency 29.9 +/- 1.1 percent for a uniform neutron source in D2O differs from the 14.4 percent selected detection efficiency. Neutrons produced near the boundary have a lower accepted efficiency. These are adopted calibration/response results, not newly reproduced efficiencies or interchangeable normalization factors.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author v2 PDF page 2: CC, NC and ES reactions, pure-D2O acquisition dates and livetime, reconstructed quantities, fiducial and energy selection, Cf-252 and N-16 calibration",
        "Author v2 PDF pages 2-3, Figure 1 and Table I: in-situ and ex-situ U/Th controls, time weighting, neutron capture versus detection efficiency, Cherenkov backgrounds and neutron veto",
        "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/nucl-ex/0204008v2",
      "correctionCheck": "The reviewed author v2 has the stated author-list/reference corrections. This is not an exhaustive search for later SNO reanalyses or corrections; upstream cited articles remain outside the present reading."
    },
    {
      "id": "sno2002-channel-fit",
      "sourceId": "sno2002-nc",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.89.011301",
      "journal": "Physical Review Letters",
      "volume": "89",
      "issue": "",
      "pages": "011301",
      "system": "SNO pure-D2O solar-neutrino acquisition and the stated original response/inference stage",
      "preparation": "Fit CC, ES and NC amplitudes by the reported extended maximum likelihood in Teff, cos(theta_sun) and (R/600 cm)^3. Use simulation templates for the standard B8 shape and centrally fixed background amplitudes from calibration. Repeat the decomposition with perturbed response templates for systematics; normalize channel rates using the stated electron-neutrino cross-section convention.",
      "observable": "SNO fitted channel amplitudes; SNO response-normalized channel fluxes",
      "finding": "The three-channel extended likelihood reports CC 1967.7(+61.9/-60.9), ES 263.6(+26.4/-25.6) and NC 576.5(+49.5/-48.9) events. These are fitted channel-yield parameters; the quoted uncertainties here are statistical. In units of 10^6 cm^-2 s^-1, the channel-normalized results are CC 1.76(+0.06/-0.05 statistical)(+/-0.09 systematic), ES 2.39(+0.24/-0.23 statistical)(+/-0.12 systematic), and NC 5.09(+0.44/-0.43 statistical)(+0.46/-0.43 systematic). They use the adopted B8 shape and electron-neutrino cross sections for all three channel normalizations.",
      "limitations": [
        "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
        "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/nucl-ex/0204008v2",
      "correctionCheck": "The reviewed author v2 has the stated author-list/reference corrections. This is not an exhaustive search for later SNO reanalyses or corrections; upstream cited articles remain outside the present reading."
    },
    {
      "id": "sno2002-flavor-fit",
      "sourceId": "sno2002-nc",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.89.011301",
      "journal": "Physical Review Letters",
      "volume": "89",
      "issue": "",
      "pages": "011301",
      "system": "SNO pure-D2O solar-neutrino acquisition and the stated original response/inference stage",
      "preparation": "Analyze the same selected sample and response model directly in electron and non-electron active-flux variables, assuming the standard B8 shape. Use the joint three-reaction information for the no-flavor-transformation null test. Retain note 13 and the source joint probability contours; this is the SNO-only inference before any external Super-Kamiokande solar-ES constraint.",
      "observable": "SNO jointly inferred active-flavor components",
      "finding": "The SNO-only direct joint analysis reports electron flux 1.76(+/-0.05 statistical)(+/-0.09 systematic) and non-electron active flux 3.41(+/-0.45 statistical)(+0.48/-0.45 systematic), in units of 10^6 cm^-2 s^-1. Under the stated response and B8-shape assumptions, the article reports the non-electron component 5.3 standard deviations above zero, supporting solar flavor transformation compatible with oscillations.",
      "limitations": [
        "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author v2 PDF page 4, Table II and Figure 2: selected sample, extended likelihood in energy, solar angle and radial volume coordinate, fixed background amplitudes and fitted channel yields",
        "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
        "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
        "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/nucl-ex/0204008v2",
      "correctionCheck": "The reviewed author v2 has the stated author-list/reference corrections. This is not an exhaustive search for later SNO reanalyses or corrections; upstream cited articles remain outside the present reading."
    }
  ],
  "comparisons": [
    {
      "id": "sno2002-event-and-channel-boundary",
      "candidate": "Selected events and statistically fitted channel amplitudes have different evidential roles.",
      "alternative": "CC, ES and NC fitted yields are three independent measured populations or an exact hard partition of the 2928 events.",
      "discriminator": "The primary source gives a reconstructed event sample and a joint extended likelihood with fixed background amplitudes and calibration-varied templates.",
      "result": "conditional-support",
      "limit": "Channel yields are jointly fitted expectation parameters with statistical errors, not exclusive hard event labels. Adding their rounded centers and displayed background totals is not an exact event partition. Table II includes CC/NC anti-correlated systematics; marginal errors do not supply the full likelihood covariance or justify independent-channel pooling.",
      "assumptions": [
        "Figure 2a and 2c apply the fiducial cut; Figure 2b displays radii beyond that boundary. Display curves are simulation templates scaled to fit results, not independently measured channel populations. The selected 2928 count must not be assigned to every plotted radial bin.",
        "Th combines in-situ and ex-situ estimates with sampling uncertainty; time-dependent radon makes the in-situ U estimate the adopted time-weighted input. Auxiliary radioassays, calibration deployments, low-energy in-situ events and simulation remain different inputs. Centrally fixed background amplitudes retain uncertainty through the stated systematic variations. Entries much less than one are not measured zeros.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "sourceIds": [
        "sno2002-nc"
      ],
      "claimIds": [
        "C-phys-sno2002-selected-events",
        "C-phys-sno2002-channel-yields"
      ]
    },
    {
      "id": "sno2002-active-flavor-inference",
      "candidate": "The SNO-only response comparison supports a non-electron active component within its declared response and spectral-shape assumptions.",
      "alternative": "Only an electron component is required, or the joint result is reproduced by subtracting two independently measured channel-flux centers.",
      "discriminator": "Retain the direct electron/non-electron fit and source null-test convention, jointly informed by CC, NC and reduced non-electron ES sensitivity.",
      "result": "conditional-support",
      "limit": "The reported direct joint electron/non-electron inference uses the same three responses and data. It is not an arithmetic subtraction of independently measured fluxes. The printed NC-minus-CC centers give 3.33, while the separately reported joint non-electron component is 3.41; the exact shift cannot be reconstructed from the published marginal values. No source error, covariance reconstruction or local significance certification is asserted.",
      "assumptions": [
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "sourceIds": [
        "sno2002-nc"
      ],
      "claimIds": [
        "C-phys-sno2002-channel-fluxes",
        "C-phys-sno2002-active-flavor-components"
      ]
    },
    {
      "id": "sno2002-shape-and-external-input-boundary",
      "candidate": "The principal SNO-only result retains its standard-B8-shape and response assumptions.",
      "alternative": "The reported principal precision is shape-independent, or its SK-added and shape-relaxed analyses are independent SNO acquisitions.",
      "discriminator": "The source separately repeats extraction without the undistorted-spectrum constraint using only angle and radius, and separately adds an external SK solar-ES constraint. These procedures must not be merged with the principal inference.",
      "result": "conditional-support",
      "limit": "The article also gives an SK-added solar-ES constraint and a shape-relaxed NC extraction that omits energy information. These are separate analyses, not the SNO-only principal result or new SNO acquisitions. The quoted standard-solar-model total flux is a comparison; agreement does not determine the conversion mechanism or replace the spectral-shape and response assumptions.",
      "assumptions": [
        "The principal templates and flux inferences assume the standard undistorted B8 spectrum and adopted weak cross sections. NC is sensitive to the three active flavors in this model; it does not count arbitrary sterile components. ES has reduced non-electron sensitivity and its channel flux is electron-equivalent, not total active flux. No universal numerical ES sensitivity ratio is inserted.",
        "The pure-D2O acquisition updates earlier CC/ES results from the same phase. Selected events, channel fits, normalized fluxes and joint flavor inference reuse that acquisition. They are not independent experiments; the response includes separate auxiliary preparations and controls.",
        "The non-electron result is a combined muon-plus-tau component. The response comparison supports solar flavor transformation compatible with oscillations; it does not separately identify those two flavors, measure an oscillation phase or mass splitting, fix absolute masses, prove matter enhancement or select a unique mass-generation mechanism.",
        "The cited apparatus, calibration, nuclear cross-section, B8 spectrum, solar-model and earlier SNO/Super-Kamiokande articles are adopted inputs described by this primary account; their bodies and underlying calculations were not independently reviewed here. No complete acquisition, detector simulation, calibration or likelihood reproduction is claimed."
      ],
      "sourceIds": [
        "sno2002-nc"
      ],
      "claimIds": [
        "C-phys-sno2002-active-flavor-components"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:solar-neutrino-channel-response",
      "role": "definition",
      "denotes": "The declared weak reaction responses and reconstructed-observable convention used for SNO solar-flavor inference.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-solar-neutrino-channel-response"
      ]
    },
    {
      "nodeId": "phys:sno2002-acquisition-context",
      "role": "experimental-context",
      "denotes": "The reported solar-neutrino exposure, reconstructed readout and event selection in the pure-D2O detector phase.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sno2002-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:sno2002-response-context",
      "role": "model-context",
      "denotes": "The original analysis model using adopted auxiliary calibration, spectrum, cross-section and background inputs; no new calibration observation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sno2002-response-context"
      ]
    },
    {
      "nodeId": "phys:sno2002-channel-fit-context",
      "role": "model-context",
      "denotes": "The reported three-channel likelihood and subsequent response-normalization procedure for the selected SNO sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sno2002-channel-fit-context"
      ]
    },
    {
      "nodeId": "phys:sno2002-flavor-fit-context",
      "role": "model-context",
      "denotes": "The SNO-only original joint likelihood interpretation in electron and muon-plus-tau flux variables, sharing the channel-analysis acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-sno2002-flavor-fit-context"
      ]
    },
    {
      "nodeId": "phys:sno2002-selected-events",
      "role": "scoped-phenomenon",
      "denotes": "The published selected event count and reconstructed-observable domain, without channel or incoming-flavor labels for individual events.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sno2002-selected-events"
      ]
    },
    {
      "nodeId": "phys:sno2002-background-estimate",
      "role": "scoped-phenomenon",
      "denotes": "The original analysis estimates of selected neutron and Cherenkov backgrounds from identified control and response inputs.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sno2002-background-estimate"
      ]
    },
    {
      "nodeId": "phys:sno2002-channel-yields",
      "role": "scoped-phenomenon",
      "denotes": "The jointly fitted CC, ES and NC template yields, distinguished from an exclusive classification of selected events.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sno2002-channel-yields"
      ]
    },
    {
      "nodeId": "phys:sno2002-channel-fluxes",
      "role": "scoped-phenomenon",
      "denotes": "The response-normalized channel summaries, including electron-equivalent ES flux and shared statistical/systematic dependence.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sno2002-channel-fluxes"
      ]
    },
    {
      "nodeId": "phys:sno2002-active-flavor-components",
      "role": "scoped-phenomenon",
      "denotes": "The source-reported SNO-only joint electron and muon-plus-tau flux inference and conditional null-test result; no mass or oscillation-phase measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-sno2002-active-flavor-components"
      ]
    }
  ]
};

/** Preserve SNO preparation, inferred channel roles and shared joint-fit boundaries. */
export function validateSolarNeutrinoContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing solar-neutrino ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) assert.deepEqual(found[key], value,
        `Solar-neutrino ${kind} changed ${id}.${key}: preserve channel-response and joint-inference scope`);
    }
  }
  const outcomes = new Set(SOLAR_NEUTRINO_ADMISSION.observations.map(([id]) => `phys:${id}`));
  const admittedIncoming = new Set(contracts.relations.filter((r) => outcomes.has(r.target)).map((r) => r.id));
  for (const relation of context.relations.values()) {
    if (outcomes.has(relation.target)) assert.ok(admittedIncoming.has(relation.id),
      `Unreviewed incoming solar-neutrino inference: ${relation.id}`);
  }
}
