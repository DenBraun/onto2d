import assert from "node:assert/strict";

export const OSCILLATION_FORMAL_CHECKS = new Map();
export const OSCILLATION_FORMAL_ANALYTICAL_SOURCES = new Map();
export const OSCILLATION_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:neutrino-propagation-scope",
      "D-phys-neutrino-propagation-scope"
    ],
    [
      "phys:neutrino-transport-boundary",
      "D-phys-neutrino-transport-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:lepton-charge-flavor-neutrino-propagation-scope",
      [
        "phys:lepton-charge-flavor",
        "phys:neutrino-propagation-scope"
      ]
    ],
    [
      "physics:neutrino-flavor-mixing-neutrino-propagation-scope",
      [
        "phys:neutrino-flavor-mixing",
        "phys:neutrino-propagation-scope"
      ]
    ],
    [
      "physics:neutrino-vacuum-phase-neutrino-propagation-scope",
      [
        "phys:neutrino-vacuum-phase",
        "phys:neutrino-propagation-scope"
      ]
    ],
    [
      "physics:neutrino-production-detection-coherence-neutrino-propagation-scope",
      [
        "phys:neutrino-production-detection-coherence",
        "phys:neutrino-propagation-scope"
      ]
    ],
    [
      "physics:neutrino-propagation-scope-neutrino-transport-boundary",
      [
        "phys:neutrino-propagation-scope",
        "phys:neutrino-transport-boundary"
      ]
    ],
    [
      "physics:neutrino-matter-evolution-neutrino-transport-boundary",
      [
        "phys:neutrino-matter-evolution",
        "phys:neutrino-transport-boundary"
      ]
    ],
    [
      "physics:neutrino-oscillation-averaging-neutrino-transport-boundary",
      [
        "phys:neutrino-oscillation-averaging",
        "phys:neutrino-transport-boundary"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "neutrino-experiment-boundary",
      "C-phys-neutrino-experiment-boundary",
      [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "neutrino-propagation-scope-neutrino-experiment-boundary",
      "neutrino-propagation-scope",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "kamland2005-average-survival-neutrino-experiment-boundary",
      "kamland2005-average-survival",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "kamland2005-oscillation-fit-neutrino-experiment-boundary",
      "kamland2005-oscillation-fit",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "sno2002-active-flavor-components-neutrino-experiment-boundary",
      "sno2002-active-flavor-components",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "superk1998-oscillation-fit-neutrino-experiment-boundary",
      "superk1998-oscillation-fit",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "opera2015-appearance-evidence-neutrino-experiment-boundary",
      "opera2015-appearance-evidence",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ],
    [
      "opera2015-parameter-compatibility-neutrino-experiment-boundary",
      "opera2015-parameter-compatibility",
      "neutrino-experiment-boundary",
      "M-phys-neutrino-experiment-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "stirner2018-transport",
      "kind": "research-publication",
      "title": "Liouville term for neutrinos: Flavor structure and wave interpretation",
      "authors": [
        "Tobias Stirner",
        "Guenter Sigl",
        "Georg Raffelt"
      ],
      "year": 2018,
      "doi": "10.1088/1475-7516/2018/05/016",
      "url": "https://arxiv.org/pdf/1803.04693v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion",
          "arXiv:1803.04693v1 PDF page 7 (printed page 6), Section 2.1.3, Equation 2.5: bilinear Hamiltonian and explicit omission of neutrino-neutrino refraction",
          "arXiv:1803.04693v1 PDF page 9 (printed page 8), Section 2.1.4: mean-field and slow-variation assumptions for the leading Liouville term"
        ],
        "limit": "The introduction on printed pages 1-4, the bilinear-Hamiltonian boundary on page 6 and the mean-field approximation on page 8 were read and visually checked in the 13 March 2018 author v1. Published front matter identifies JCAP 05 (2018) 016; the published body and complete derivation were not reviewed. These passages justify a boundary between coherent trajectory evolution and kinetic transport, not a reproduced collision kernel, self-refraction model, cosmological evolution or complete astrophysical solver. The selected Hamiltonian explicitly omits neutrino-neutrino refraction; the leading phase-space advection uses slow-variation assumptions. No universal Lindblad damping or entropy claim is admitted."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutrino-propagation-scope",
      "kind": "review-finding",
      "statement": "In the declared coherent ultrarelativistic vacuum model, flavor-sensitive preparation and readout are related by interference between distinct mass propagation components. Their relative phases change transition probabilities as L/E varies; a probability is not a continuously measured sequence of flavor jumps. Oscillation is a conditional propagation phenomenon, not an additional bounded object or a universal property of every neutrino state.",
      "scope": "Flavor preparation/readout and conditional coherent propagation; no universal ontological class, formation order or mass-origin inference.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the closed unitary active two- or three-state convention already declared. Oscillatory flavor probabilities require both mixing of contributing components and nonzero relative mass-squared differences, together with the stated production/detection and propagation coherence conditions. A degenerate pair, unmixed channel or suppressed interference need not show an oscillatory signal.",
        "A single vacuum mass eigenstate acquires only a phase in its internal state; its flavor-readout probabilities |U_alpha,i|^2 do not oscillate. An incoherent density matrix diagonal in the vacuum mass basis also has constant vacuum flavor probabilities. These are not statements that vacuum mass states remain instantaneous eigenstates in arbitrary varying matter, or that packet position is stationary.",
        "Leptonic charged-current flavor labels specify preparation/readout; mass differences and mixing specify model inputs. They do not establish necessary physical parents, an arising chronology, weights 0.3/0.7, N_min=N_crit=1, a SOMA phase/type or the claim that flavor identity can never be dynamically autonomous. No causal maintenance or downward constraint is inferred from these definition dependencies.",
        "Within this oscillation model, mass-squared differences constrain differences only. They do not determine the absolute mass scale, require every individual mass to be nonzero, select Dirac versus Majorana character or supply a unique mass-generation extension. Mass origin remains a separate scope.",
        "Continuous weak scattering or repeated projective collapse is not the coherent phase mechanism. A specified source, medium and detector determine which probability or weighted response is appropriate; transport and cosmological claims need additional inputs."
      ]
    },
    {
      "id": "D-phys-neutrino-transport-boundary",
      "kind": "review-finding",
      "statement": "Flavor evolution can affect the interpretation of an astrophysical neutrino signal, but a source-to-detector prediction also needs the emitted flavor composition and spectrum, propagation environment and flavor-dependent detector response. A prescribed coherent trajectory Hamiltonian alone does not supply collisional, absorptive, self-refracting or expanding-universe transport. This graph admits the propagation implication and explicitly excludes quantitative astrophysical transport and cosmological predictions from this reconstruction.",
      "scope": "Qualitative flavor-interpretation implication and explicit boundary of the selected kinetic discussion; no astrophysical or cosmological prediction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF page 7 (printed page 6), Section 2.1.3, Equation 2.5: bilinear Hamiltonian and explicit omission of neutrino-neutrino refraction",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF page 9 (printed page 8), Section 2.1.4: mean-field and slow-variation assumptions for the leading Liouville term",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reviewed kinetic discussion distinguishes a normalized single-particle flavor density matrix from momentum-dependent occupation matrices. Emission, absorption, scattering and mode coupling require process kernels, occupation information and initial/boundary conditions; their normalization is not a universal trace-one probability. No collision coefficients, source spectrum, astrophysical flavor ratio or cosmological initial condition are supplied here.",
        "The selected source describes cosmological expansion through momentum redshift and illustrates why collision integrals couple momentum modes. It does not justify obtaining a cosmological history by reusing a single vacuum L/E probability or a solar density profile. No expansion rate, decoupling prediction, abundance or mass constraint is inferred.",
        "The bilinear Hamiltonian in Equation 2.5 explicitly leaves out neutrino-neutrino refraction. A self-consistent dense-neutrino medium would require additional interaction and angular/occupation inputs. The reviewed leading Liouville term also assumes slow phase-space variation; it is not an unrestricted exact kinetic solver.",
        "Macroscopic phase averaging does not by itself establish environmental scattering, repeated collapse or a universal decoherence rate. Coherent forward matter effects, wave-packet overlap, unresolved-event averaging and collision-induced evolution are different mechanisms and retain their own conditions.",
        "The present exclusions are finite limits of this admission, not a claim that such transport cannot be modeled. No new empirical acquisition, transport simulation, helicity-conversion model, universal thermalization theorem or source-detector fit is admitted."
      ]
    },
    {
      "id": "C-phys-neutrino-experiment-boundary",
      "kind": "review-finding",
      "statement": "The reviewed KamLAND reactor disappearance, SNO active-flavor transformation, Super-Kamiokande atmospheric disappearance and OPERA accelerator tau-appearance results support flavor change compatible with their declared oscillation models across different preparations and responses. Their counts, fluxes, averaged probabilities and conditional fit parameters are distinct observables. This synthesis preserves those boundaries and supplies neither a pooled transition probability nor a new global fit.",
      "scope": "Bounded synthesis of four publication-specific experimental chains with shared-data stages kept explicit.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "supports",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a literature synthesis of already admitted results. Each chain retains its acquisition, selection, adopted flux/cross sections, detector response, backgrounds and inference contexts. Counts are not event-level oscillation probabilities. Reused events, multiple summaries and alternative fits within an acquisition are dependent; this synthesis is not another independent experiment or combined significance.",
        "KamLAND reactor antineutrinos involve changing reactor histories and baselines. The reported period-averaged survival and historical two-flavor rate-and-shape fit use response and background models; the 180 km display baseline is not a single experimental baseline. Shape-only, KamLAND-only and solar-combined fits are distinct, and the solar combination adds a CPT assumption.",
        "SNO reports a joint electron versus combined muon-plus-tau active-flux inference under its B8-shape and weak-response assumptions. This is not a measured oscillation phase, separate muon/tau identification or unique proof of adiabatic MSW conversion. Subtracting channel-flux centers does not reproduce its covariance, joint result or significance; the SK-added and shape-relaxed analyses remain separate.",
        "Super-Kamiokande uses atmospheric flux, zenith distributions and detector/kinematic proxies with a historical two-flavor fit. The 1998 disappearance analysis does not directly identify tau appearance or distinguish its tau interpretation from the stated sterile alternative. Its L/E cross-check reuses the sample and does not resolve an oscillation dip.",
        "OPERA reconstructs tau candidates in a primarily muon-neutrino beam using channel-dependent efficiencies and backgrounds. Its calibrated channel-combination significance, signal strength and full-mixing mass-squared compatibility reuse the same candidate sample. Dividing five candidates by an interaction total does not produce an oscillation probability, and the Fisher-product statistic is not the calibrated tail probability.",
        "Historical effective two-flavor parameters, confidence constructions and adopted external inputs retain their publication-specific meanings; no current three-flavor global fit is inferred. These results do not establish absolute neutrino masses, every individual mass to be nonzero, Dirac/Majorana character, a unique mass-generation mechanism or quantitative astrophysical/cosmological transport."
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "M-phys-neutrino-experiment-boundary",
      "kind": "method",
      "statement": "Compare the stated disappearance, active-flavor and appearance interpretations only through their existing response and inference contexts. Retain neutrino/antineutrino preparation, acquisition overlap and historical model assumptions; do not pool counts, infer a common unaveraged probability, combine significances or refit the parameters.",
      "scope": "Bounded synthesis of four publication-specific experimental chains with shared-data stages kept explicit.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF pages 4-5, channel-flux equations, Table II and note 7: electron-neutrino cross-section normalization, adopted B8 spectrum and systematic/cross-section inputs",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5, direct electron/non-electron flux equations and Figure 3; page 6 note 13: SNO-only joint inference, reported null test and correlated flux-region interpretation",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "sno2002-nc",
          "locator": "Author v2 PDF page 5: separately added Super-Kamiokande solar ES constraint, shape-relaxed NC extraction using only angle and radius, and separate standard-solar-model comparison",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-6, Equations 1-4, Table II and Figure 2 on page 7: corrected event weights, 70-bin fit, nuisance parameters, bounded physical region and conditional oscillation result",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 pages 4-5, Figure 1 on page 7 and corrected Figure 3 on page 8: reconstructed directions, asymmetry definition and measured zenith distributions",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "superk1998-atmospheric",
          "locator": "Author version 2 page 5 and Figure 4 on page 9: reconstructed L/E cross-check, same acquisition, lepton-neutrino correlations and tau-versus-sterile ambiguity",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering",
          "role": "method",
          "note": "Supports only the declared formal scope or publication-specific inference; no new experimental or kinetic calculation is reproduced."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a literature synthesis of already admitted results. Each chain retains its acquisition, selection, adopted flux/cross sections, detector response, backgrounds and inference contexts. Counts are not event-level oscillation probabilities. Reused events, multiple summaries and alternative fits within an acquisition are dependent; this synthesis is not another independent experiment or combined significance.",
        "KamLAND reactor antineutrinos involve changing reactor histories and baselines. The reported period-averaged survival and historical two-flavor rate-and-shape fit use response and background models; the 180 km display baseline is not a single experimental baseline. Shape-only, KamLAND-only and solar-combined fits are distinct, and the solar combination adds a CPT assumption.",
        "SNO reports a joint electron versus combined muon-plus-tau active-flux inference under its B8-shape and weak-response assumptions. This is not a measured oscillation phase, separate muon/tau identification or unique proof of adiabatic MSW conversion. Subtracting channel-flux centers does not reproduce its covariance, joint result or significance; the SK-added and shape-relaxed analyses remain separate.",
        "Super-Kamiokande uses atmospheric flux, zenith distributions and detector/kinematic proxies with a historical two-flavor fit. The 1998 disappearance analysis does not directly identify tau appearance or distinguish its tau interpretation from the stated sterile alternative. Its L/E cross-check reuses the sample and does not resolve an oscillation dip.",
        "OPERA reconstructs tau candidates in a primarily muon-neutrino beam using channel-dependent efficiencies and backgrounds. Its calibrated channel-combination significance, signal strength and full-mixing mass-squared compatibility reuse the same candidate sample. Dividing five candidates by an interaction total does not produce an oscillation probability, and the Fisher-product statistic is not the calibrated tail probability.",
        "Historical effective two-flavor parameters, confidence constructions and adopted external inputs retain their publication-specific meanings; no current three-flavor global fit is inferred. These results do not establish absolute neutrino masses, every individual mass to be nonzero, Dirac/Majorana character, a unique mass-generation mechanism or quantitative astrophysical/cosmological transport."
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutrino-propagation-scope",
      "name": "Neutrino oscillation propagation scope",
      "kind": "definition",
      "description": "In the declared coherent ultrarelativistic vacuum model, flavor-sensitive preparation and readout are related by interference between distinct mass propagation components. Their relative phases change transition probabilities as L/E varies; a probability is not a continuously measured sequence of flavor jumps. Oscillation is a conditional propagation phenomenon, not an additional bounded object or a universal property of every neutrino state.",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 6-8, Section 14.3 and Equations 14.33-14.35: charged-current mixing, rectangular versus closed unitary matrices and flavor-state convention"
        },
        {
          "sourceId": "pdg2025-neutrino-mixing",
          "locator": "2025 review pages 8-10, Section 14.4 and Equations 14.35-14.43: coherent vacuum amplitudes, mass-squared phase differences, antineutrino conjugation, detector averaging and effective two-flavor limit"
        }
      ],
      "openObligations": [
        "Use the closed unitary active two- or three-state convention already declared. Oscillatory flavor probabilities require both mixing of contributing components and nonzero relative mass-squared differences, together with the stated production/detection and propagation coherence conditions. A degenerate pair, unmixed channel or suppressed interference need not show an oscillatory signal.",
        "A single vacuum mass eigenstate acquires only a phase in its internal state; its flavor-readout probabilities |U_alpha,i|^2 do not oscillate. An incoherent density matrix diagonal in the vacuum mass basis also has constant vacuum flavor probabilities. These are not statements that vacuum mass states remain instantaneous eigenstates in arbitrary varying matter, or that packet position is stationary.",
        "Leptonic charged-current flavor labels specify preparation/readout; mass differences and mixing specify model inputs. They do not establish necessary physical parents, an arising chronology, weights 0.3/0.7, N_min=N_crit=1, a SOMA phase/type or the claim that flavor identity can never be dynamically autonomous. No causal maintenance or downward constraint is inferred from these definition dependencies.",
        "Within this oscillation model, mass-squared differences constrain differences only. They do not determine the absolute mass scale, require every individual mass to be nonzero, select Dirac versus Majorana character or supply a unique mass-generation extension. Mass origin remains a separate scope.",
        "Continuous weak scattering or repeated projective collapse is not the coherent phase mechanism. A specified source, medium and detector determine which probability or weighted response is appropriate; transport and cosmological claims need additional inputs."
      ]
    },
    {
      "id": "phys:neutrino-transport-boundary",
      "name": "Astrophysical and cosmological transport boundary",
      "kind": "definition",
      "description": "Flavor evolution can affect the interpretation of an astrophysical neutrino signal, but a source-to-detector prediction also needs the emitted flavor composition and spectrum, propagation environment and flavor-dependent detector response. A prescribed coherent trajectory Hamiltonian alone does not supply collisional, absorptive, self-refracting or expanding-universe transport. This graph admits the propagation implication and explicitly excludes quantitative astrophysical transport and cosmological predictions from this reconstruction.",
      "claimIds": [
        "D-phys-neutrino-transport-boundary"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF pages 2-5 (printed pages 1-4), Section 1, Equations 1.1-1.4 and footnotes 4-5: trajectory coherence, ensemble occupations, collisional transport and cosmic expansion"
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF page 7 (printed page 6), Section 2.1.3, Equation 2.5: bilinear Hamiltonian and explicit omission of neutrino-neutrino refraction"
        },
        {
          "sourceId": "stirner2018-transport",
          "locator": "arXiv:1803.04693v1 PDF page 9 (printed page 8), Section 2.1.4: mean-field and slow-variation assumptions for the leading Liouville term"
        }
      ],
      "openObligations": [
        "The reviewed kinetic discussion distinguishes a normalized single-particle flavor density matrix from momentum-dependent occupation matrices. Emission, absorption, scattering and mode coupling require process kernels, occupation information and initial/boundary conditions; their normalization is not a universal trace-one probability. No collision coefficients, source spectrum, astrophysical flavor ratio or cosmological initial condition are supplied here.",
        "The selected source describes cosmological expansion through momentum redshift and illustrates why collision integrals couple momentum modes. It does not justify obtaining a cosmological history by reusing a single vacuum L/E probability or a solar density profile. No expansion rate, decoupling prediction, abundance or mass constraint is inferred.",
        "The bilinear Hamiltonian in Equation 2.5 explicitly leaves out neutrino-neutrino refraction. A self-consistent dense-neutrino medium would require additional interaction and angular/occupation inputs. The reviewed leading Liouville term also assumes slow phase-space variation; it is not an unrestricted exact kinetic solver.",
        "Macroscopic phase averaging does not by itself establish environmental scattering, repeated collapse or a universal decoherence rate. Coherent forward matter effects, wave-packet overlap, unresolved-event averaging and collision-induced evolution are different mechanisms and retain their own conditions.",
        "The present exclusions are finite limits of this admission, not a claim that such transport cannot be modeled. No new empirical acquisition, transport simulation, helicity-conversion model, universal thermalization theorem or source-detector fit is admitted."
      ]
    },
    {
      "id": "phys:neutrino-experiment-boundary",
      "name": "Neutrino oscillation evidence across preparations",
      "kind": "scoped-process",
      "description": "The reviewed KamLAND reactor disappearance, SNO active-flavor transformation, Super-Kamiokande atmospheric disappearance and OPERA accelerator tau-appearance results support flavor change compatible with their declared oscillation models across different preparations and responses. Their counts, fluxes, averaged probabilities and conditional fit parameters are distinct observables. This synthesis preserves those boundaries and supplies neither a pooled transition probability nor a new global fit.",
      "claimIds": [
        "C-phys-neutrino-experiment-boundary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 2-3, Table I and Figure 1: reactor histories and spectrum inputs, calibration and response, background estimates, no-oscillation prediction and average survival"
        },
        {
          "sourceId": "kamland2005",
          "locator": "Author version 3 pages 4-5, Figures 2-4: unbinned two-flavor rate-and-shape fit, constrained backgrounds, display baseline, goodness-of-fit procedure and separate solar combination"
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
        },
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
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 5\u20136, Results and Equation 1: channel Poisson model, Gaussian background terms, pseudoexperiment-calibrated statistics and original appearance significance"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Page 6, signal-strength compatibility and full-mixing mass-squared interval: same-data interpretation and conclusion"
        },
        {
          "sourceId": "opera2015-appearance",
          "locator": "Pages 3\u20135, signal/background section and Figure 3: simulated beam flux, detected-muon-neutrino normalization, efficiencies, cross section, charm controls, hadronic interactions and revised muon scattering"
        }
      ],
      "openObligations": [
        "This is a literature synthesis of already admitted results. Each chain retains its acquisition, selection, adopted flux/cross sections, detector response, backgrounds and inference contexts. Counts are not event-level oscillation probabilities. Reused events, multiple summaries and alternative fits within an acquisition are dependent; this synthesis is not another independent experiment or combined significance.",
        "KamLAND reactor antineutrinos involve changing reactor histories and baselines. The reported period-averaged survival and historical two-flavor rate-and-shape fit use response and background models; the 180 km display baseline is not a single experimental baseline. Shape-only, KamLAND-only and solar-combined fits are distinct, and the solar combination adds a CPT assumption.",
        "SNO reports a joint electron versus combined muon-plus-tau active-flux inference under its B8-shape and weak-response assumptions. This is not a measured oscillation phase, separate muon/tau identification or unique proof of adiabatic MSW conversion. Subtracting channel-flux centers does not reproduce its covariance, joint result or significance; the SK-added and shape-relaxed analyses remain separate.",
        "Super-Kamiokande uses atmospheric flux, zenith distributions and detector/kinematic proxies with a historical two-flavor fit. The 1998 disappearance analysis does not directly identify tau appearance or distinguish its tau interpretation from the stated sterile alternative. Its L/E cross-check reuses the sample and does not resolve an oscillation dip.",
        "OPERA reconstructs tau candidates in a primarily muon-neutrino beam using channel-dependent efficiencies and backgrounds. Its calibrated channel-combination significance, signal strength and full-mixing mass-squared compatibility reuse the same candidate sample. Dividing five candidates by an interaction total does not produce an oscillation probability, and the Fisher-product statistic is not the calibrated tail probability.",
        "Historical effective two-flavor parameters, confidence constructions and adopted external inputs retain their publication-specific meanings; no current three-flavor global fit is inferred. These results do not establish absolute neutrino masses, every individual mass to be nonzero, Dirac/Majorana character, a unique mass-generation mechanism or quantitative astrophysical/cosmological transport."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lepton-charge-flavor-neutrino-propagation-scope",
      "source": "phys:lepton-charge-flavor",
      "target": "phys:neutrino-propagation-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Charged-current flavor labels define preparation and readout, rather than a necessary material parent or an electric-charge identity.",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ]
    },
    {
      "id": "physics:neutrino-flavor-mixing-neutrino-propagation-scope",
      "source": "phys:neutrino-flavor-mixing",
      "target": "phys:neutrino-propagation-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Mass/mixing assumptions define the model relation between flavor and propagation bases; they do not supply a mass-generation mechanism.",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ]
    },
    {
      "id": "physics:neutrino-vacuum-phase-neutrino-propagation-scope",
      "source": "phys:neutrino-vacuum-phase",
      "target": "phys:neutrino-propagation-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The relative-phase convention bounds the propagation claim and its stationary-state exceptions.",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ]
    },
    {
      "id": "physics:neutrino-production-detection-coherence-neutrino-propagation-scope",
      "source": "phys:neutrino-production-detection-coherence",
      "target": "phys:neutrino-propagation-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A coherent superposition requires indistinguishable production and detection alternatives in the declared process.",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ]
    },
    {
      "id": "physics:neutrino-propagation-scope-neutrino-transport-boundary",
      "source": "phys:neutrino-propagation-scope",
      "target": "phys:neutrino-transport-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The conditional propagation interpretation does not determine a source flux, medium evolution or detector signal.",
      "claimIds": [
        "D-phys-neutrino-transport-boundary"
      ]
    },
    {
      "id": "physics:neutrino-matter-evolution-neutrino-transport-boundary",
      "source": "phys:neutrino-matter-evolution",
      "target": "phys:neutrino-transport-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The prescribed coherent weak potential omits the kinetic inputs required for collisions, absorption and a self-consistent evolving medium.",
      "claimIds": [
        "D-phys-neutrino-transport-boundary"
      ]
    },
    {
      "id": "physics:neutrino-oscillation-averaging-neutrino-transport-boundary",
      "source": "phys:neutrino-oscillation-averaging",
      "target": "phys:neutrino-transport-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A suppressed interference pattern does not identify a collision kernel or justify replacing transport by universal decoherence.",
      "claimIds": [
        "D-phys-neutrino-transport-boundary"
      ]
    },
    {
      "id": "physics:neutrino-propagation-scope-neutrino-experiment-boundary",
      "source": "phys:neutrino-propagation-scope",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared propagation scope bounds interpretation of the experimental synthesis.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:kamland2005-average-survival-neutrino-experiment-boundary",
      "source": "phys:kamland2005-average-survival",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:kamland2005-oscillation-fit-neutrino-experiment-boundary",
      "source": "phys:kamland2005-oscillation-fit",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:sno2002-active-flavor-components-neutrino-experiment-boundary",
      "source": "phys:sno2002-active-flavor-components",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:superk1998-oscillation-fit-neutrino-experiment-boundary",
      "source": "phys:superk1998-oscillation-fit",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-appearance-evidence-neutrino-experiment-boundary",
      "source": "phys:opera2015-appearance-evidence",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    },
    {
      "id": "physics:opera2015-parameter-compatibility-neutrino-experiment-boundary",
      "source": "phys:opera2015-parameter-compatibility",
      "target": "phys:neutrino-experiment-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This already admitted result contributes its own preparation, response and inference limits; it is not an independent new acquisition or a pooled probability.",
      "claimIds": [
        "M-phys-neutrino-experiment-boundary"
      ],
      "contextIds": [
        "kamland2005-response",
        "kamland2005-oscillation-fit",
        "sno2002-flavor-fit",
        "superk1998-oscillation-fit",
        "opera2015-inference"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutrino-propagation-scope",
      "role": "definition",
      "denotes": "Neutrino oscillation propagation scope within its explicit preparation, model and evidence limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-propagation-scope"
      ]
    },
    {
      "nodeId": "phys:neutrino-transport-boundary",
      "role": "definition",
      "denotes": "Astrophysical and cosmological transport boundary within its explicit preparation, model and evidence limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutrino-transport-boundary"
      ]
    },
    {
      "nodeId": "phys:neutrino-experiment-boundary",
      "role": "scoped-phenomenon",
      "denotes": "Neutrino oscillation evidence across preparations within its explicit preparation, model and evidence limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-neutrino-experiment-boundary"
      ]
    }
  ]
};

/** Keep coherent propagation, transport limits and the four experimental chains scoped. */
export function validateOscillationFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Oscillation scope ${kind} changed ${id}: preserve propagation and evidence boundaries`);
    }
  }
}
