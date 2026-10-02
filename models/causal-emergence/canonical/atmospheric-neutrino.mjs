import assert from "node:assert/strict";

export const ATMOSPHERIC_NEUTRINO_CHECKS = new Map();
export const ATMOSPHERIC_NEUTRINO_ANALYTICAL_SOURCES = new Map();

export const ATMOSPHERIC_NEUTRINO_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "superk1998-acquisition-context",
      "M-phys-superk1998-acquisition-context",
      [
        "superk1998-acquisition"
      ]
    ],
    [
      "superk1998-response-context",
      "M-phys-superk1998-response-context",
      [
        "superk1998-response"
      ]
    ],
    [
      "superk1998-fit-context",
      "M-phys-superk1998-fit-context",
      [
        "superk1998-oscillation-fit"
      ]
    ]
  ],
  "observations": [
    [
      "superk1998-selected-samples",
      "C-phys-superk1998-selected-samples",
      [
        "superk1998-acquisition"
      ]
    ],
    [
      "superk1998-unoscillated-response",
      "C-phys-superk1998-unoscillated-response",
      [
        "superk1998-response"
      ]
    ],
    [
      "superk1998-flavor-ratios",
      "C-phys-superk1998-flavor-ratios",
      [
        "superk1998-response"
      ]
    ],
    [
      "superk1998-zenith-asymmetry",
      "C-phys-superk1998-zenith-asymmetry",
      [
        "superk1998-response"
      ]
    ],
    [
      "superk1998-oscillation-fit",
      "C-phys-superk1998-oscillation-fit",
      [
        "superk1998-oscillation-fit"
      ]
    ]
  ],
  "dependencies": [
    [
      "superk1998-acquisition-context-superk1998-selected-samples",
      "superk1998-acquisition-context",
      "superk1998-selected-samples",
      "M-phys-superk1998-selected-samples",
      "measurement-context"
    ],
    [
      "superk1998-response-context-superk1998-selected-samples",
      "superk1998-response-context",
      "superk1998-selected-samples",
      "M-phys-superk1998-selected-samples",
      "interpretation-dependency"
    ],
    [
      "superk1998-acquisition-context-superk1998-unoscillated-response",
      "superk1998-acquisition-context",
      "superk1998-unoscillated-response",
      "M-phys-superk1998-unoscillated-response",
      "interpretation-dependency"
    ],
    [
      "superk1998-response-context-superk1998-unoscillated-response",
      "superk1998-response-context",
      "superk1998-unoscillated-response",
      "M-phys-superk1998-unoscillated-response",
      "interpretation-dependency"
    ],
    [
      "superk1998-selected-samples-superk1998-flavor-ratios",
      "superk1998-selected-samples",
      "superk1998-flavor-ratios",
      "M-phys-superk1998-flavor-ratios",
      "interpretation-dependency"
    ],
    [
      "superk1998-unoscillated-response-superk1998-flavor-ratios",
      "superk1998-unoscillated-response",
      "superk1998-flavor-ratios",
      "M-phys-superk1998-flavor-ratios",
      "interpretation-dependency"
    ],
    [
      "superk1998-response-context-superk1998-flavor-ratios",
      "superk1998-response-context",
      "superk1998-flavor-ratios",
      "M-phys-superk1998-flavor-ratios",
      "interpretation-dependency"
    ],
    [
      "superk1998-selected-samples-superk1998-zenith-asymmetry",
      "superk1998-selected-samples",
      "superk1998-zenith-asymmetry",
      "M-phys-superk1998-zenith-asymmetry",
      "interpretation-dependency"
    ],
    [
      "superk1998-unoscillated-response-superk1998-zenith-asymmetry",
      "superk1998-unoscillated-response",
      "superk1998-zenith-asymmetry",
      "M-phys-superk1998-zenith-asymmetry",
      "interpretation-dependency"
    ],
    [
      "superk1998-response-context-superk1998-zenith-asymmetry",
      "superk1998-response-context",
      "superk1998-zenith-asymmetry",
      "M-phys-superk1998-zenith-asymmetry",
      "interpretation-dependency"
    ],
    [
      "neutrino-flavor-mixing-superk1998-oscillation-fit",
      "neutrino-flavor-mixing",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "neutrino-vacuum-phase-superk1998-oscillation-fit",
      "neutrino-vacuum-phase",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "superk1998-selected-samples-superk1998-oscillation-fit",
      "superk1998-selected-samples",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "superk1998-unoscillated-response-superk1998-oscillation-fit",
      "superk1998-unoscillated-response",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "superk1998-response-context-superk1998-oscillation-fit",
      "superk1998-response-context",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ],
    [
      "superk1998-fit-context-superk1998-oscillation-fit",
      "superk1998-fit-context",
      "superk1998-oscillation-fit",
      "M-phys-superk1998-oscillation-fit",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "superk1998-acquisition",
    "superk1998-response",
    "superk1998-oscillation-fit"
  ],
  "comparisonIds": [
    "superk1998-response-scope",
    "superk1998-zenith-scope",
    "superk1998-fit-scope"
  ],
  "inferenceSources": [
    [
      "M-phys-superk1998-acquisition-context",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-response-context",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-fit-context",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "C-phys-superk1998-selected-samples",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-selected-samples",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "C-phys-superk1998-unoscillated-response",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-unoscillated-response",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "C-phys-superk1998-flavor-ratios",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-flavor-ratios",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "C-phys-superk1998-zenith-asymmetry",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-zenith-asymmetry",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "C-phys-superk1998-oscillation-fit",
      [
        "superk1998-atmospheric"
      ]
    ],
    [
      "M-phys-superk1998-oscillation-fit",
      [
        "superk1998-atmospheric"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "superk1998-atmospheric",
      "kind": "research-publication",
      "title": "Evidence for oscillation of atmospheric neutrinos",
      "authors": [
        "Super-Kamiokande Collaboration"
      ],
      "year": 1998,
      "doi": "10.1103/PhysRevLett.81.1562",
      "url": "https://arxiv.org/pdf/hep-ex/9807003v2",
      "path": null,
      "review": {
        "extent": "full-primary-author-version",
        "locators": [
          "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        ],
        "limit": "All nine pages of arXiv:hep-ex/9807003v2, revised 31 August 1998 and linked to Physical Review Letters 81, 1562-1567, were read. Tables I-II, corrected Equation 4 and Figures 1-4 were visually checked. The version metadata identifies corrections to Equation 4 and Figure 3; version 1 is not used. The collective authorship precedes the individual roster on page 1. The cited flux, apparatus, calibration and earlier-analysis papers are not independently reconstructed. Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed. The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-superk1998-acquisition-context",
      "kind": "method",
      "statement": "Use the reported 33.0 kiloton-year, 535-day exposure in the 22.5 kiloton fiducial volume, with reconstructed vertices more than 2 m from the inner photomultiplier wall. Separate fully contained (FC) from exiting, partially contained (PC) events; use single-ring FC electron-like and muon-like classifications and the stated visible-energy division.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-acquisition"
      ]
    },
    {
      "id": "M-phys-superk1998-response-context",
      "kind": "method",
      "statement": "Use the report's atmospheric-flux and full-detector Monte Carlo predictions with neutrino interactions, visible-energy response, ring classification and containment. Compare control and alternative-flux inputs; retain flavor contamination, geomagnetic effects and neutrino-lepton angular/energy correlations when interpreting selected ratios and zenith patterns.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "M-phys-superk1998-fit-context",
      "kind": "method",
      "statement": "Compare the same selected samples with weighted Monte Carlo in five zenith bins and seven momentum bins for each of two particle-type samples. Minimize the 70-bin chi-squared over the oscillation parameters and eight normalization/shape nuisance parameters in corrected Equations 2-4, with alpha free and the seven other nuisance penalties specified in Table II.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "C-phys-superk1998-selected-samples",
      "kind": "review-finding",
      "statement": "The report contains 4353 FC and 301 PC events. The FC single-ring samples used in the oscillation analysis contain 1231 electron-like and 1158 muon-like sub-GeV events, plus 290 electron-like and 230 muon-like multi-GeV events. All 301 PC candidates enter the mu-like class without a single-ring requirement.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-acquisition"
      ]
    },
    {
      "id": "M-phys-superk1998-selected-samples",
      "kind": "method",
      "statement": "Retain observed reconstructed counts separately from Monte Carlo categories and distinguish the full FC census from its single-ring analysis subset.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-acquisition"
      ]
    },
    {
      "id": "C-phys-superk1998-unoscillated-response",
      "kind": "review-finding",
      "statement": "Table I reports no-oscillation Monte Carlo expectations of 1049.1 electron-like and 1573.6 muon-like sub-GeV single-ring events, 236.0 electron-like and 295.7 muon-like multi-GeV single-ring events, and 371.6 PC events. These are predicted event means conditioned on the atmospheric flux and detector/interaction response.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "M-phys-superk1998-unoscillated-response",
      "kind": "method",
      "statement": "Use the source Monte Carlo as the conditional no-oscillation reference, keeping livetime normalization distinct from the free normalization in the oscillation fit.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "C-phys-superk1998-flavor-ratios",
      "kind": "review-finding",
      "statement": "For R=(mu/e)_data/(mu/e)_MC, Table I reports sub-GeV R=0.63 +/- 0.03 statistical +/- 0.05 systematic and multi-GeV R_FC+PC=0.65 +/- 0.05 statistical +/- 0.08 systematic. The multi-GeV mu-like count includes the partially contained sample.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R=(mu/e)_data/(mu/e)_MC is a selected-event double ratio with response and flux assumptions; it is not an absolute flux or directly measured survival probability. The multi-GeV value includes PC in the mu-like numerator in both data and Monte Carlo. Reported statistical and systematic uncertainties remain separate and are not recomputed from rounded counts.",
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "M-phys-superk1998-flavor-ratios",
      "kind": "method",
      "statement": "Form the source-specific selected-event double ratio against the modeled reference; preserve PC inclusion and the published uncertainty components without inferring an absolute flux or survival probability.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R=(mu/e)_data/(mu/e)_MC is a selected-event double ratio with response and flux assumptions; it is not an absolute flux or directly measured survival probability. The multi-GeV value includes PC in the mu-like numerator in both data and Monte Carlo. Reported statistical and systematic uncertainties remain separate and are not recomputed from rounded counts.",
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "C-phys-superk1998-zenith-asymmetry",
      "kind": "review-finding",
      "statement": "The selected mu-like sample shows a zenith-dependent deficit while electron-like distributions are compatible with the no-oscillation expectation. For multi-GeV FC+PC mu-like events the paper reports A=(U-D)/(U+D)=-0.296 +/- 0.048 +/- 0.01, retaining its two quoted uncertainty components. The multi-GeV electron-like comparison is -0.036 +/- 0.067 +/- 0.02.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "M-phys-superk1998-zenith-asymmetry",
      "kind": "method",
      "statement": "Compare the reconstructed up/down selections and source uncertainties with the flux/response prediction; neither the angular distribution nor its repeated L/E display is an observed flavor trajectory.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "C-phys-superk1998-oscillation-fit",
      "kind": "review-finding",
      "statement": "Within the physical two-flavor nu_mu-to-nu_tau model, the reported best fit is sin^2(2 theta)=1.0 and Delta m^2=2.2e-3 eV^2, with chi-squared 65.2 for 67 degrees of freedom. The reported 90% confidence region has sin^2(2 theta)>0.82 and 5e-4<Delta m^2<6e-3 eV^2. These are conditional fit results from the same selected atmospheric acquisition.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "supports",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "M-phys-superk1998-oscillation-fit",
      "kind": "method",
      "statement": "Infer the effective two-flavor splitting and bounded confidence region using the stated Monte Carlo weights and nuisance procedure; do not promote disappearance to measured tau appearance or absolute mass.",
      "scope": "The 33.0 kiloton-year Super-Kamiokande atmospheric-neutrino report in corrected author version 2; source-specific response and two-flavor interpretation.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports only the specified selected-sample, response or conditional-inference stage of this 1998 report."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:superk1998-acquisition-context",
      "name": "Super-Kamiokande atmospheric acquisition",
      "kind": "context",
      "description": "Use the reported 33.0 kiloton-year, 535-day exposure in the 22.5 kiloton fiducial volume, with reconstructed vertices more than 2 m from the inner photomultiplier wall. Separate fully contained (FC) from exiting, partially contained (PC) events; use single-ring FC electron-like and muon-like classifications and the stated visible-energy division.",
      "claimIds": [
        "M-phys-superk1998-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
        }
      ],
      "openObligations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ]
    },
    {
      "id": "phys:superk1998-response-context",
      "name": "Atmospheric flux and Cherenkov response",
      "kind": "context",
      "description": "Use the report's atmospheric-flux and full-detector Monte Carlo predictions with neutrino interactions, visible-energy response, ring classification and containment. Compare control and alternative-flux inputs; retain flavor contamination, geomagnetic effects and neutrino-lepton angular/energy correlations when interpreting selected ratios and zenith patterns.",
      "claimIds": [
        "M-phys-superk1998-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        }
      ],
      "openObligations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ]
    },
    {
      "id": "phys:superk1998-fit-context",
      "name": "Super-Kamiokande two-flavor fit context",
      "kind": "context",
      "description": "Compare the same selected samples with weighted Monte Carlo in five zenith bins and seven momentum bins for each of two particle-type samples. Minimize the 70-bin chi-squared over the oscillation parameters and eight normalization/shape nuisance parameters in corrected Equations 2-4, with alpha free and the seven other nuisance penalties specified in Table II.",
      "claimIds": [
        "M-phys-superk1998-fit-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        }
      ],
      "openObligations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ]
    },
    {
      "id": "phys:superk1998-selected-samples",
      "name": "Super-Kamiokande selected FC and PC samples",
      "kind": "scoped-process",
      "description": "The report contains 4353 FC and 301 PC events. The FC single-ring samples used in the oscillation analysis contain 1231 electron-like and 1158 muon-like sub-GeV events, plus 290 electron-like and 230 muon-like multi-GeV events. All 301 PC candidates enter the mu-like class without a single-ring requirement.",
      "claimIds": [
        "C-phys-superk1998-selected-samples"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples"
        }
      ],
      "openObligations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ]
    },
    {
      "id": "phys:superk1998-unoscillated-response",
      "name": "Super-Kamiokande no-oscillation event prediction",
      "kind": "scoped-process",
      "description": "Table I reports no-oscillation Monte Carlo expectations of 1049.1 electron-like and 1573.6 muon-like sub-GeV single-ring events, 236.0 electron-like and 295.7 muon-like multi-GeV single-ring events, and 371.6 PC events. These are predicted event means conditioned on the atmospheric flux and detector/interaction response.",
      "claimIds": [
        "C-phys-superk1998-unoscillated-response"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        }
      ],
      "openObligations": [
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ]
    },
    {
      "id": "phys:superk1998-flavor-ratios",
      "name": "Super-Kamiokande event double ratios",
      "kind": "scoped-process",
      "description": "For R=(mu/e)_data/(mu/e)_MC, Table I reports sub-GeV R=0.63 +/- 0.03 statistical +/- 0.05 systematic and multi-GeV R_FC+PC=0.65 +/- 0.05 statistical +/- 0.08 systematic. The multi-GeV mu-like count includes the partially contained sample.",
      "claimIds": [
        "C-phys-superk1998-flavor-ratios"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
        }
      ],
      "openObligations": [
        "R=(mu/e)_data/(mu/e)_MC is a selected-event double ratio with response and flux assumptions; it is not an absolute flux or directly measured survival probability. The multi-GeV value includes PC in the mu-like numerator in both data and Monte Carlo. Reported statistical and systematic uncertainties remain separate and are not recomputed from rounded counts.",
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ]
    },
    {
      "id": "phys:superk1998-zenith-asymmetry",
      "name": "Super-Kamiokande mu-like zenith asymmetry",
      "kind": "scoped-process",
      "description": "The selected mu-like sample shows a zenith-dependent deficit while electron-like distributions are compatible with the no-oscillation expectation. For multi-GeV FC+PC mu-like events the paper reports A=(U-D)/(U+D)=-0.296 +/- 0.048 +/- 0.01, retaining its two quoted uncertainty components. The multi-GeV electron-like comparison is -0.036 +/- 0.067 +/- 0.02.",
      "claimIds": [
        "C-phys-superk1998-zenith-asymmetry"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        }
      ],
      "openObligations": [
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ]
    },
    {
      "id": "phys:superk1998-oscillation-fit",
      "name": "Super-Kamiokande conditional atmospheric splitting",
      "kind": "scoped-process",
      "description": "Within the physical two-flavor nu_mu-to-nu_tau model, the reported best fit is sin^2(2 theta)=1.0 and Delta m^2=2.2e-3 eV^2, with chi-squared 65.2 for 67 degrees of freedom. The reported 90% confidence region has sin^2(2 theta)>0.82 and 5e-4<Delta m^2<6e-3 eV^2. These are conditional fit results from the same selected atmospheric acquisition.",
      "claimIds": [
        "C-phys-superk1998-oscillation-fit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions"
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
        }
      ],
      "openObligations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:superk1998-acquisition-context-superk1998-selected-samples",
      "source": "phys:superk1998-acquisition-context",
      "target": "phys:superk1998-selected-samples",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The fiducial, containment and ring selections define these reconstructed candidate samples.",
      "claimIds": [
        "M-phys-superk1998-selected-samples"
      ],
      "contextIds": [
        "superk1998-acquisition"
      ]
    },
    {
      "id": "physics:superk1998-response-context-superk1998-selected-samples",
      "source": "phys:superk1998-response-context",
      "target": "phys:superk1998-selected-samples",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Detector reconstruction and particle-identification conditions define the event labels; simulated purities are not measured incoming-flavor counts.",
      "claimIds": [
        "M-phys-superk1998-selected-samples"
      ],
      "contextIds": [
        "superk1998-acquisition"
      ]
    },
    {
      "id": "physics:superk1998-acquisition-context-superk1998-unoscillated-response",
      "source": "phys:superk1998-acquisition-context",
      "target": "phys:superk1998-unoscillated-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Exposure and selected categories delimit the simulated event expectation.",
      "claimIds": [
        "M-phys-superk1998-unoscillated-response"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-response-context-superk1998-unoscillated-response",
      "source": "phys:superk1998-response-context",
      "target": "phys:superk1998-unoscillated-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Atmospheric flux, interaction and detector models supply the no-oscillation event prediction.",
      "claimIds": [
        "M-phys-superk1998-unoscillated-response"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-selected-samples-superk1998-flavor-ratios",
      "source": "phys:superk1998-selected-samples",
      "target": "phys:superk1998-flavor-ratios",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Observed e-like and mu-like counts supply the data ratio, including PC only in the stated multi-GeV combination.",
      "claimIds": [
        "M-phys-superk1998-flavor-ratios"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-unoscillated-response-superk1998-flavor-ratios",
      "source": "phys:superk1998-unoscillated-response",
      "target": "phys:superk1998-flavor-ratios",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The modeled event ratio supplies the double-ratio denominator.",
      "claimIds": [
        "M-phys-superk1998-flavor-ratios"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-response-context-superk1998-flavor-ratios",
      "source": "phys:superk1998-response-context",
      "target": "phys:superk1998-flavor-ratios",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Response and source uncertainties condition the reported double ratios.",
      "claimIds": [
        "M-phys-superk1998-flavor-ratios"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-selected-samples-superk1998-zenith-asymmetry",
      "source": "phys:superk1998-selected-samples",
      "target": "phys:superk1998-zenith-asymmetry",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same reconstructed events supply upward and downward selections; no new exposure is introduced.",
      "claimIds": [
        "M-phys-superk1998-zenith-asymmetry"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-unoscillated-response-superk1998-zenith-asymmetry",
      "source": "phys:superk1998-unoscillated-response",
      "target": "phys:superk1998-zenith-asymmetry",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The modeled zenith distribution supplies the no-oscillation comparison, separately from the fitted curve.",
      "claimIds": [
        "M-phys-superk1998-zenith-asymmetry"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:superk1998-response-context-superk1998-zenith-asymmetry",
      "source": "phys:superk1998-response-context",
      "target": "phys:superk1998-zenith-asymmetry",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Direction reconstruction, geomagnetic effects and detector controls condition the asymmetry interpretation.",
      "claimIds": [
        "M-phys-superk1998-zenith-asymmetry"
      ],
      "contextIds": [
        "superk1998-response"
      ]
    },
    {
      "id": "physics:neutrino-flavor-mixing-superk1998-oscillation-fit",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing flavor/propagation distinction identifies the effective two-state interpretation without proving the final flavor experimentally.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-superk1998-oscillation-fit",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared relative phase supplies the two-flavor propagation convention used in the nu_mu-to-nu_tau interpretation; detector and atmospheric averaging remain explicit.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "physics:superk1998-selected-samples-superk1998-oscillation-fit",
      "source": "phys:superk1998-selected-samples",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fit uses the same selected type, momentum and zenith data, not an independent measurement of a mass splitting.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "physics:superk1998-unoscillated-response-superk1998-oscillation-fit",
      "source": "phys:superk1998-unoscillated-response",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The atmospheric and detector simulation supplies events to be oscillation- and nuisance-weighted.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "physics:superk1998-response-context-superk1998-oscillation-fit",
      "source": "phys:superk1998-response-context",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Flavor response, production heights and neutrino-lepton correlations condition the fitted templates.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    },
    {
      "id": "physics:superk1998-fit-context-superk1998-oscillation-fit",
      "source": "phys:superk1998-fit-context",
      "target": "phys:superk1998-oscillation-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Corrected weights, nuisance penalties and the physical-region prescription delimit the reported inference.",
      "claimIds": [
        "M-phys-superk1998-oscillation-fit"
      ],
      "contextIds": [
        "superk1998-oscillation-fit"
      ]
    }
  ],
  "studies": [
    {
      "id": "superk1998-acquisition",
      "sourceId": "superk1998-atmospheric",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.81.1562",
      "journal": "Physical Review Letters",
      "volume": "81",
      "issue": "",
      "pages": "1562-1567",
      "system": "Super-Kamiokande 33.0 kiloton-year atmospheric-neutrino sample",
      "preparation": "Use the reported 33.0 kiloton-year, 535-day exposure in the 22.5 kiloton fiducial volume, with reconstructed vertices more than 2 m from the inner photomultiplier wall. Separate fully contained (FC) from exiting, partially contained (PC) events; use single-ring FC electron-like and muon-like classifications and the stated visible-energy division.",
      "observable": "Super-Kamiokande selected FC and PC samples",
      "finding": "The report contains 4353 FC and 301 PC events. The FC single-ring samples used in the oscillation analysis contain 1231 electron-like and 1158 muon-like sub-GeV events, plus 290 electron-like and 230 muon-like multi-GeV events. All 301 PC candidates enter the mu-like class without a single-ring requirement.",
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
        "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/9807003v2",
      "correctionCheck": "Author version 2 of 31 August 1998 explicitly identifies corrections to Equation 4 and Figure 3; both were visually checked. No version-1 values, later Super-Kamiokande results or independently reconstructed apparatus/flux calculations are imported."
    },
    {
      "id": "superk1998-response",
      "sourceId": "superk1998-atmospheric",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.81.1562",
      "journal": "Physical Review Letters",
      "volume": "81",
      "issue": "",
      "pages": "1562-1567",
      "system": "Super-Kamiokande 33.0 kiloton-year atmospheric-neutrino sample",
      "preparation": "Use the report's atmospheric-flux and full-detector Monte Carlo predictions with neutrino interactions, visible-energy response, ring classification and containment. Compare control and alternative-flux inputs; retain flavor contamination, geomagnetic effects and neutrino-lepton angular/energy correlations when interpreting selected ratios and zenith patterns.",
      "observable": "Super-Kamiokande mu-like zenith asymmetry",
      "finding": "The selected mu-like sample shows a zenith-dependent deficit while electron-like distributions are compatible with the no-oscillation expectation. For multi-GeV FC+PC mu-like events the paper reports A=(U-D)/(U+D)=-0.296 +/- 0.048 +/- 0.01, retaining its two quoted uncertainty components. The multi-GeV electron-like comparison is -0.036 +/- 0.067 +/- 0.02.",
      "limitations": [
        "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed.",
        "E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure.",
        "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 2 pages 2-3 and Table I: 33.0 kiloton-year exposure, fiducial containment, single-ring FC selection, PC classification and visible-energy samples",
        "Author version 2 pages 2-4, Table I and Figure 1 on page 7: flux and detector simulation, flavor response, calibration controls, double-ratio and up-down uncertainties",
        "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
        "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/9807003v2",
      "correctionCheck": "Author version 2 of 31 August 1998 explicitly identifies corrections to Equation 4 and Figure 3; both were visually checked. No version-1 values, later Super-Kamiokande results or independently reconstructed apparatus/flux calculations are imported."
    },
    {
      "id": "superk1998-oscillation-fit",
      "sourceId": "superk1998-atmospheric",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.81.1562",
      "journal": "Physical Review Letters",
      "volume": "81",
      "issue": "",
      "pages": "1562-1567",
      "system": "Super-Kamiokande 33.0 kiloton-year atmospheric-neutrino sample",
      "preparation": "Compare the same selected samples with weighted Monte Carlo in five zenith bins and seven momentum bins for each of two particle-type samples. Minimize the 70-bin chi-squared over the oscillation parameters and eight normalization/shape nuisance parameters in corrected Equations 2-4, with alpha free and the seven other nuisance penalties specified in Table II.",
      "observable": "Super-Kamiokande conditional atmospheric splitting",
      "finding": "Within the physical two-flavor nu_mu-to-nu_tau model, the reported best fit is sin^2(2 theta)=1.0 and Delta m^2=2.2e-3 eV^2, with chi-squared 65.2 for 67 degrees of freedom. The reported 90% confidence region has sin^2(2 theta)>0.82 and 5e-4<Delta m^2<6e-3 eV^2. These are conditional fit results from the same selected atmospheric acquisition.",
      "limitations": [
        "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed.",
        "The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism.",
        "The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
        "Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure."
      ],
      "readExtent": "full-primary-author-version",
      "reviewedLocators": [
        "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
        "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
        "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/hep-ex/9807003v2",
      "correctionCheck": "Author version 2 of 31 August 1998 explicitly identifies corrections to Equation 4 and Figure 3; both were visually checked. No version-1 values, later Super-Kamiokande results or independently reconstructed apparatus/flux calculations are imported."
    }
  ],
  "comparisons": [
    {
      "id": "superk1998-response-scope",
      "candidate": "Selected FC/PC labels and double ratios retain their detector and flux conditions.",
      "alternative": "Event categories directly count pure neutrino flavors or the ratio is an absolute survival measurement.",
      "discriminator": "Inspect the FC single-ring restriction, unrestricted PC selection and modeled reference.",
      "result": "conditional-support",
      "limit": "The 4353 fully contained events include multiple-ring samples listed in Table I; the oscillation analysis uses only single-ring FC events. The 301 partially contained events have no single-ring requirement and are assigned mu-like on the simulated 98% muon-neutrino charged-current composition. These are reconstructed and selected candidates, not original photomultiplier records or pure incoming-flavor counts. Detailed selection/reconstruction references [6,7] are not independently replayed. R=(mu/e)_data/(mu/e)_MC is a selected-event double ratio with response and flux assumptions; it is not an absolute flux or directly measured survival probability. The multi-GeV value includes PC in the mu-like numerator in both data and Monte Carlo. Reported statistical and systematic uncertainties remain separate and are not recomputed from rounded counts. The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed.",
      "assumptions": [
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed."
      ],
      "sourceIds": [
        "superk1998-atmospheric"
      ],
      "claimIds": [
        "C-phys-superk1998-selected-samples",
        "C-phys-superk1998-flavor-ratios"
      ]
    },
    {
      "id": "superk1998-zenith-scope",
      "candidate": "The same selected acquisition has a response-conditioned mu-like up/down asymmetry.",
      "alternative": "Repeated zenith and reconstructed L/E plots independently observe a microscopic oscillation path.",
      "discriminator": "Keep direction proxies, source normalization conventions and shared-data cross-checks explicit.",
      "result": "conditional-support",
      "limit": "A=(U-D)/(U+D) uses reconstructed upward events with -1<cos(Theta)<-0.2 and downward events with 0.2<cos(Theta)<1, omitting the near-horizontal interval. Approximate no-oscillation up-down symmetry is conditioned on flux/geomagnetic and detector assumptions. Figure 3 shows a no-oscillation band normalized to data livetime with statistical errors, while the fitted oscillation curve uses a free overall flux normalization. The zenith pattern is not an event-by-event flavor trajectory or a directly observed oscillation cycle. E_vis is the energy of an electron producing the same Cherenkov light, not the incoming neutrino energy; the sub-GeV/multi-GeV boundary is 1330 MeV in that visible variable. Charged-lepton direction and momentum are imperfect proxies for neutrino direction/energy. The mean neutrino-lepton angle quoted by the source changes from 55 degrees at 400 MeV/c to 20 degrees at 1.5 GeV/c; low-momentum angular structure is smeared. Figure 4 uses only FC events with momentum above 400 MeV/c and a reconstructed L/E estimate from lepton kinematics and modeled production heights. PC events have no assigned momentum in Figure 1. The L/E display is a same-acquisition cross-check, not an independently reconstructed neutrino path, a resolved oscillation dip or a new exposure. Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
      "assumptions": [
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed."
      ],
      "sourceIds": [
        "superk1998-atmospheric"
      ],
      "claimIds": [
        "C-phys-superk1998-zenith-asymmetry"
      ]
    },
    {
      "id": "superk1998-fit-scope",
      "candidate": "The source supports a conditional two-flavor atmospheric mass-squared splitting.",
      "alternative": "The fit proves tau appearance, a unique mechanism, absolute masses or a complete modern oscillation model.",
      "discriminator": "Retain physical-region fitting, nuisance treatment and the source tau-versus-sterile ambiguity.",
      "result": "conditional-support",
      "limit": "The reported fit uses 70 particle-type, momentum and zenith bins, weighted Monte Carlo statistics and nuisance penalties from Equations 2-4 and Table II. Overall normalization alpha floats freely despite an estimated 25% prior uncertainty; it is not included as a 25% Gaussian constraint. The v2 multi-GeV FC mu-like weight contains (1-rho*N_PC/(2*N_mu)), whereas PC has (1+rho/2). Neither weights, response, minimization, contour coverage nor significance are locally reconstructed. The physical best fit has sin^2(2 theta)=1 and Delta m^2=2.2e-3 eV^2; the unconstrained minimum at sin^2(2 theta)=1.05 lies outside the physical region. Reported confidence contours are referenced to the physical minimum with the authors' bounded-region prescription, not generic two-parameter thresholds supplied locally. This is a historical effective two-flavor mass-squared difference, not an absolute mass, a modern three-flavor global fit or a mass-generation mechanism. The nu_mu-to-nu_tau simulation neglects tau appearance and decay because of the small expected yield. The source explicitly says this sample cannot distinguish nu_mu-to-nu_tau from disappearance into a non-interacting sterile species; it does not directly observe tau appearance. Its separate nu_mu-to-nu_e comparison includes Earth matter effects and is disfavored within the tested model, not an exclusion of every alternative theory.",
      "assumptions": [
        "Selected counts, double ratios, asymmetries, zenith distributions, reconstructed L/E and the fitted interpretation reuse this 535-day acquisition. The two analysis groups and the R-versus-shape cross-checks are not independent exposures. Figure 2 also displays earlier Kamiokande limits, and the paper mentions preliminary upward-muon studies; neither is admitted as a separate dataset here. No latest-result or complete later-Super-Kamiokande review is claimed.",
        "The atmospheric flux, neutrino-nucleus interactions, particle identification and detector response condition the predicted event samples. Table I uses the flux calculation cited as reference [2]; alternative flux calculations and control samples constrain source-specific uncertainties. The quoted flavor purities and roughly 20% variation of absolute flux predictions are model-dependent inputs, not directly measured neutrino populations. No flux, interaction generator, control data, raw response or covariance is reconstructed."
      ],
      "sourceIds": [
        "superk1998-atmospheric"
      ],
      "claimIds": [
        "C-phys-superk1998-oscillation-fit"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:superk1998-acquisition-context",
      "role": "experimental-context",
      "denotes": "Use the reported 33.0 kiloton-year, 535-day exposure in the 22.5 kiloton fiducial volume, with reconstructed vertices more than 2 m from the inner photomultiplier wall. Separate fully contained (FC) from exiting, partially contained (PC) events; use single-ring FC electron-like and muon-like classifications and the stated visible-energy division.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-superk1998-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:superk1998-response-context",
      "role": "model-context",
      "denotes": "Use the report's atmospheric-flux and full-detector Monte Carlo predictions with neutrino interactions, visible-energy response, ring classification and containment. Compare control and alternative-flux inputs; retain flavor contamination, geomagnetic effects and neutrino-lepton angular/energy correlations when interpreting selected ratios and zenith patterns.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-superk1998-response-context"
      ]
    },
    {
      "nodeId": "phys:superk1998-fit-context",
      "role": "model-context",
      "denotes": "Compare the same selected samples with weighted Monte Carlo in five zenith bins and seven momentum bins for each of two particle-type samples. Minimize the 70-bin chi-squared over the oscillation parameters and eight normalization/shape nuisance parameters in corrected Equations 2-4, with alpha free and the seven other nuisance penalties specified in Table II.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-superk1998-fit-context"
      ]
    },
    {
      "nodeId": "phys:superk1998-selected-samples",
      "role": "scoped-phenomenon",
      "denotes": "The report contains 4353 FC and 301 PC events. The FC single-ring samples used in the oscillation analysis contain 1231 electron-like and 1158 muon-like sub-GeV events, plus 290 electron-like and 230 muon-like multi-GeV events. All 301 PC candidates enter the mu-like class without a single-ring requirement.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-superk1998-selected-samples"
      ]
    },
    {
      "nodeId": "phys:superk1998-unoscillated-response",
      "role": "scoped-phenomenon",
      "denotes": "Table I reports no-oscillation Monte Carlo expectations of 1049.1 electron-like and 1573.6 muon-like sub-GeV single-ring events, 236.0 electron-like and 295.7 muon-like multi-GeV single-ring events, and 371.6 PC events. These are predicted event means conditioned on the atmospheric flux and detector/interaction response.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-superk1998-unoscillated-response"
      ]
    },
    {
      "nodeId": "phys:superk1998-flavor-ratios",
      "role": "scoped-phenomenon",
      "denotes": "For R=(mu/e)_data/(mu/e)_MC, Table I reports sub-GeV R=0.63 +/- 0.03 statistical +/- 0.05 systematic and multi-GeV R_FC+PC=0.65 +/- 0.05 statistical +/- 0.08 systematic. The multi-GeV mu-like count includes the partially contained sample.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-superk1998-flavor-ratios"
      ]
    },
    {
      "nodeId": "phys:superk1998-zenith-asymmetry",
      "role": "scoped-phenomenon",
      "denotes": "The selected mu-like sample shows a zenith-dependent deficit while electron-like distributions are compatible with the no-oscillation expectation. For multi-GeV FC+PC mu-like events the paper reports A=(U-D)/(U+D)=-0.296 +/- 0.048 +/- 0.01, retaining its two quoted uncertainty components. The multi-GeV electron-like comparison is -0.036 +/- 0.067 +/- 0.02.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-superk1998-zenith-asymmetry"
      ]
    },
    {
      "nodeId": "phys:superk1998-oscillation-fit",
      "role": "scoped-phenomenon",
      "denotes": "Within the physical two-flavor nu_mu-to-nu_tau model, the reported best fit is sin^2(2 theta)=1.0 and Delta m^2=2.2e-3 eV^2, with chi-squared 65.2 for 67 degrees of freedom. The reported 90% confidence region has sin^2(2 theta)>0.82 and 5e-4<Delta m^2<6e-3 eV^2. These are conditional fit results from the same selected atmospheric acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-superk1998-oscillation-fit"
      ]
    }
  ]
};

/** Preserve selected atmospheric events, modeled response and conditional fits. */
export function validateAtmosphericNeutrinoContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing atmospheric-neutrino ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Atmospheric-neutrino ${kind} changed ${id}.${key}: preserve selection, response and inference boundaries`);
      }
    }
  }
}
