import assert from "node:assert/strict";

export const COSMOLOGY_CMB_CHECKS = new Map();
export const COSMOLOGY_CMB_ANALYTICAL_SOURCES = new Map();
export const COSMOLOGY_CMB_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "planck2018-cmb-acquisition-context",
      "M-phys-planck2018-cmb-acquisition-context",
      [
        "planck2018-cmb-acquisition"
      ]
    ],
    [
      "planck2018-cmb-response-context",
      "M-phys-planck2018-cmb-response-context",
      [
        "planck2018-cmb-response"
      ]
    ],
    [
      "planck2018-primordial-inference-context",
      "M-phys-planck2018-primordial-inference-context",
      [
        "planck2018-primordial-inference"
      ]
    ]
  ],
  "observations": [
    [
      "planck2018-angular-spectra",
      "C-phys-planck2018-angular-spectra",
      [
        "planck2018-cmb-response"
      ]
    ],
    [
      "planck2018-scalar-spectrum",
      "C-phys-planck2018-scalar-spectrum",
      [
        "planck2018-primordial-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "planck2018-cmb-acquisition-context-planck2018-angular-spectra",
      "planck2018-cmb-acquisition-context",
      "planck2018-angular-spectra",
      "M-phys-planck2018-angular-spectra",
      "interpretation-dependency"
    ],
    [
      "planck2018-cmb-response-context-planck2018-angular-spectra",
      "planck2018-cmb-response-context",
      "planck2018-angular-spectra",
      "M-phys-planck2018-angular-spectra",
      "interpretation-dependency"
    ],
    [
      "planck2018-angular-spectra-planck2018-scalar-spectrum",
      "planck2018-angular-spectra",
      "planck2018-scalar-spectrum",
      "M-phys-planck2018-scalar-spectrum",
      "interpretation-dependency"
    ],
    [
      "planck2018-cmb-response-context-planck2018-scalar-spectrum",
      "planck2018-cmb-response-context",
      "planck2018-scalar-spectrum",
      "M-phys-planck2018-scalar-spectrum",
      "interpretation-dependency"
    ],
    [
      "planck2018-primordial-inference-context-planck2018-scalar-spectrum",
      "planck2018-primordial-inference-context",
      "planck2018-scalar-spectrum",
      "M-phys-planck2018-scalar-spectrum",
      "interpretation-dependency"
    ],
    [
      "primordial-curvature-spectrum-planck2018-scalar-spectrum",
      "primordial-curvature-spectrum",
      "planck2018-scalar-spectrum",
      "M-phys-planck2018-scalar-spectrum",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "planck2018-cmb-acquisition",
    "planck2018-cmb-response",
    "planck2018-primordial-inference"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-planck2018-primordial-inference-context",
      [
        "planck2018-cmb-likelihoods",
        "planck2018-inflation"
      ]
    ],
    [
      "C-phys-planck2018-scalar-spectrum",
      [
        "planck2018-inflation"
      ]
    ],
    [
      "M-phys-planck2018-scalar-spectrum",
      [
        "planck2018-cmb-likelihoods",
        "planck2018-inflation"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "planck2018-cmb-likelihoods",
      "kind": "research-publication",
      "title": "Planck 2018 results. V. CMB power spectra and likelihoods",
      "authors": [
        "Planck Collaboration"
      ],
      "year": 2020,
      "doi": "10.1051/0004-6361/201936386",
      "url": "https://arxiv.org/abs/1907.12875v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v2 pages 2-4, Sections 1-2.1: full-mission maps, likelihood naming and Commander component separation",
          "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
          "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "Author v2 pages 51-53, Section 3.4: Plik foreground, calibration, polarization-efficiency and residual-systematics treatment",
          "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
          "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
        ],
        "limit": "Read the listed passages of the 100-page author v2, dated 15 September 2020 and revised to match A&A 641 A5; visually checked pages 28, 59 and 88. This is selected likelihood-method reading, not complete instrument-paper or pipeline review. Maps, timelines, foreground fits, simulations, covariance and likelihood code are not replayed. The printed Table 13 polarization heading repeats TE; Table 23 and VI identify TE and EE. Coadded figures are not the fitted per-frequency data vector."
      }
    },
    {
      "id": "planck2018-cosmological-parameters",
      "kind": "research-publication",
      "title": "Planck 2018 results. VI. Cosmological parameters",
      "authors": [
        "Planck Collaboration"
      ],
      "year": 2020,
      "doi": "10.1051/0004-6361/201833910",
      "url": "https://arxiv.org/abs/1807.06209v4",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v4 pages 4-5, Sections 2.1-2.2.1: base model, priors, CAMB/CosmoMC, map response and Plik cuts",
          "Author v4 page 11, Sections 2.2.3-2.2.4: exact TT,TE,EE+lowE definition, excluded low-TE and amplitude-optical-depth degeneracy",
          "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "Author v4 page 59, footnote 44 and Equations 87a-87b: incorporated early-reionization percentile corrigendum, outside the selected base-model result"
        ],
        "limit": "Read the listed passages of the 73-page author v4, dated 9 August 2021, of A&A 641 A6. Visually checked Table 2 on page 16 and the page 59 corrigendum. The correction concerns early-reionization 95th percentiles, not the selected Table 2 scalar parameters. Only the TT,TE,EE+lowE base-model column is admitted. Extended cosmologies, external datasets, the complete inherited prior catalogue and numerical inference are not reviewed or reproduced."
      }
    },
    {
      "id": "planck2018-inflation",
      "kind": "research-publication",
      "title": "Planck 2018 results. X. Constraints on inflation",
      "authors": [
        "Planck Collaboration"
      ],
      "year": 2020,
      "doi": "10.1051/0004-6361/201833887",
      "url": "https://arxiv.org/abs/1807.06211v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-passages",
        "locators": [
          "Author v2 pages 4-6, Section 2.1, Equation 3 and Table 1: scalar power-law convention, transfer calculation and pivot scale",
          "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude"
        ],
        "limit": "Read the listed passages of the 67-page author v2, dated 2 August 2019, of A&A 641 A10; visually checked Table 2 on page 10. Only the power-law convention and TT,TE,EE+lowE scalar result are admitted. Other inflation models, BK15, BAO and primordial-tensor claims are outside scope. The unselected TE-only log-amplitude errors differ from VI Table 2; the selected joint column agrees. These reports reuse the same Planck data, not independent acquisitions."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-planck2018-cmb-acquisition-context",
      "kind": "method",
      "statement": "The 2018 release reprocesses full-mission Planck intensity and linear-polarization maps. The selected high-multipole sample uses 100, 143 and 217 GHz HFI half-mission cross-spectra; low-E uses the 100 x 143 GHz full-mission polarization cross-spectrum, with low-temperature Commander estimates. The low-E cleaning uses 353 GHz dust templates and a 30 GHz synchrotron template at 100 GHz. This is selection from an existing sky observation, not a new 2018 experimental preparation.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 2-4, Sections 1-2.1: full-mission maps, likelihood naming and Commander component separation",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Frequency pairs and half missions sample the same CMB sky and share calibration and foreground inputs. Papers V, VI and X are linked analyses of that acquisition; they are not independent replications or independent universes.",
        "The selected branch excludes low-multipole TE, BB, the LFI lowTEB alternative, a separate lensing-reconstruction likelihood, BAO and BICEP/Keck. Detailed timelines, detector operation and the complete upstream LFI/HFI instrument papers are not independently reviewed."
      ],
      "contextIds": [
        "planck2018-cmb-acquisition"
      ]
    },
    {
      "id": "M-phys-planck2018-cmb-response-context",
      "kind": "method",
      "statement": "Commander jointly models low-temperature foregrounds and the CMB. SimAll uses foreground-cleaned 100 x 143 GHz quasi-QML polarization estimates and simulation-based probabilities. High-multipole Plik uses masked, beam-corrected half-mission cross-spectra with noise/covariance models and foreground, calibration, polarization-efficiency and temperature-to-polarization leakage treatment. Its covariance retains correlations between frequency pairs and TT, TE and EE using a fiducial model. Cross-spectra reduce additive noise bias only insofar as the split-map noises are uncorrelated.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 51-53, Section 3.4: Plik foreground, calibration, polarization-efficiency and residual-systematics treatment",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Not all corrections are freely fitted: the baseline fixes EE dust amplitudes, polarization-efficiency corrections and several residual templates, while fitting selected foreground/calibration parameters with priors. Shared scanning systematics can remain correlated between half missions.",
        "Simulations and fiducial covariance approximate noise, foregrounds, sample variance and residual systematics. The source reports finite-simulation and fixed-sky limitations; validation is not proof that all calibration, foreground or likelihood errors vanish. No maps, templates, covariance or end-to-end simulation are locally reconstructed."
      ],
      "contextIds": [
        "planck2018-cmb-response"
      ]
    },
    {
      "id": "C-phys-planck2018-angular-spectra",
      "kind": "review-finding",
      "statement": "The reported data products are angular temperature and E-polarization spectrum estimates: Commander TT and SimAll EE for 2 <= ell <= 29, and Plik per-frequency half-mission TT, TE and EE cross-spectra at higher multipoles. The high-multipole union is TT 30-2508 and TE/EE 30-1996, with narrower pair-specific cuts. These response-conditioned angular correlations are distinct from a primordial curvature spectrum or an observed quantum-vacuum realization.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "supports",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
          "role": "supports",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "supports",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The actual Plik data vector keeps frequency-pair spectra; it is not the frequency-coadded curve in Figures 57-59. Those displays fix foreground/nuisance parameters to a best fit including lensing reconstruction, and their high-multipole diagonal error bars omit foreground-model uncertainty. Displayed low-TE points are not used in the chosen inference.",
        "The sky is one finite, masked realization: multipoles and cross-spectra have correlated sample variance and instrumental/foreground uncertainty. Angular spectra are processed estimates, not independent raw event counts or a direct time series of primordial fluctuations."
      ],
      "contextIds": [
        "planck2018-cmb-response"
      ]
    },
    {
      "id": "M-phys-planck2018-primordial-inference-context",
      "kind": "method",
      "statement": "The selected analysis assumes spatially flat base LambdaCDM with purely adiabatic scalar P_R(k)=A_s*(k/k_*)^(n_s-1), k_*=0.05 Mpc^-1. CAMB (August 2017) maps this prescribed initial spectrum and the adopted background, matter and thermal history to lensed CMB spectra; CosmoMC (July 2018) samples the six-parameter posterior. The base parameters are baryon and cold-dark-matter densities, theta_MC, tau, ln(10^10 A_s) and n_s, with flat base priors; the amplitude prior is 1.61 < ln(10^10 A_s) < 3.91. The adopted neutrino model has two massless states and one 0.06 eV state, BBN-predicted helium and the stated tanh reionization history. The likelihood multiplies Commander low-T, SimAll low-E and high-multipole Plik, exploring the allowed nuisance parameters jointly.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 pages 4-5, Sections 2.1-2.2.1: base model, priors, CAMB/CosmoMC, map response and Plik cuts",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 11, Sections 2.2.3-2.2.4: exact TT,TE,EE+lowE definition, excluded low-TE and amplitude-optical-depth degeneracy",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 4-6, Section 2.1, Equation 3 and Table 1: scalar power-law convention, transfer calculation and pivot scale",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This transfer/likelihood model includes physical lensing of TT/TE/EE but not the separate lensing-reconstruction likelihood. No BAO, BK15 or large-scale-structure likelihood is added. A power-law adiabatic initial spectrum is an assumption of this fit, not a derivation of inflation or of its quantum origin.",
        "The hybrid likelihood neglects low/high-multipole correlations and low-T/low-E correlations; low-TE is excluded. Its high-multipole Gaussian approximation and fixed corrections carry stated limits. High-multipole amplitude is degenerate with tau through A_s*exp(-2*tau); low-E supplies conditional information on tau.",
        "Inherited prior bounds beyond the quoted amplitude range and the full recombination, BBN, nonlinear-lensing, sampler and covariance implementations are not independently reconstructed. Other cosmologies or nuisance choices can change the posterior; no full numerical replay or unique origin mechanism is claimed."
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "C-phys-planck2018-scalar-spectrum",
      "kind": "review-finding",
      "statement": "For TT,TE,EE+lowE in that base model, Planck reports n_s=0.9649 +/- 0.0044 and ln(10^10 A_s)=3.045 +/- 0.016, each as a marginalized 68 percent interval at k_*=0.05 Mpc^-1. These are the selected joint column of VI Table 2 and X Table 2, with the tilt also stated in X Equation 10. The amplitude and tilt are inferred primordial-spectrum parameters, conditional on the specified transfer model, likelihood and priors.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "role": "supports",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude",
          "role": "supports",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These two marginal intervals do not specify their joint posterior or covariance and are not independent detections. The +/-0.0042 tilt uncertainty belongs to the different TT,TE,EE+lowE+lensing combination; it must not replace this result.",
        "The source-reported posterior is neither a local refit nor direct proof of a quantum-vacuum origin, a unique inflationary potential, reheating, primordial tensors, dark-matter microphysics or the construction of late-time structure. Other initial-condition and cosmological models require their own evidence and likelihood comparison.",
        "Papers V, VI and X share the Planck acquisition and analysis chain. Their agreement is a provenance/consistency check, not a statistical multiplication of independent evidence."
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "M-phys-planck2018-angular-spectra",
      "kind": "method",
      "statement": "The selected Planck maps and response treatment supply the processed angular-spectrum estimates. Acquisition, masking, beam/noise treatment and foreground separation are prerequisites for interpreting these estimates; the plotted coadded display is not substituted for the actual likelihood input.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These descriptive dependencies preserve measurement and inference provenance; they neither assert physical causation between records nor add independent observations."
      ],
      "contextIds": [
        "planck2018-cmb-response"
      ]
    },
    {
      "id": "M-phys-planck2018-scalar-spectrum",
      "kind": "method",
      "statement": "Interpret the angular-spectrum data with the stated response/nuisance model, cosmological transfer calculation, priors and TT,TE,EE+lowE likelihood. The same-sky spectrum inputs support the reported conditional posterior, not an observationally unique generation mechanism.",
      "scope": "Selected Planck 2018 TT,TE,EE+lowE analysis in the base spatially flat six-parameter LambdaCDM model; no separate lensing-reconstruction likelihood or external dataset.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 pages 4-5, Sections 2.1-2.2.1: base model, priors, CAMB/CosmoMC, map response and Plik cuts",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude",
          "role": "method",
          "note": "Supports the selected Planck data product, method or conditional parameter result only."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These descriptive dependencies preserve measurement and inference provenance; they neither assert physical causation between records nor add independent observations."
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:planck2018-cmb-acquisition-context",
      "name": "Planck selected CMB observation",
      "kind": "context",
      "description": "The 2018 release reprocesses full-mission Planck intensity and linear-polarization maps. The selected high-multipole sample uses 100, 143 and 217 GHz HFI half-mission cross-spectra; low-E uses the 100 x 143 GHz full-mission polarization cross-spectrum, with low-temperature Commander estimates. The low-E cleaning uses 353 GHz dust templates and a 30 GHz synchrotron template at 100 GHz. This is selection from an existing sky observation, not a new 2018 experimental preparation.",
      "claimIds": [
        "M-phys-planck2018-cmb-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 2-4, Sections 1-2.1: full-mission maps, likelihood naming and Commander component separation"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts"
        }
      ],
      "openObligations": [
        "Frequency pairs and half missions sample the same CMB sky and share calibration and foreground inputs. Papers V, VI and X are linked analyses of that acquisition; they are not independent replications or independent universes.",
        "The selected branch excludes low-multipole TE, BB, the LFI lowTEB alternative, a separate lensing-reconstruction likelihood, BAO and BICEP/Keck. Detailed timelines, detector operation and the complete upstream LFI/HFI instrument papers are not independently reviewed."
      ]
    },
    {
      "id": "phys:planck2018-cmb-response-context",
      "name": "Planck spectral response and foreground model",
      "kind": "context",
      "description": "Commander jointly models low-temperature foregrounds and the CMB. SimAll uses foreground-cleaned 100 x 143 GHz quasi-QML polarization estimates and simulation-based probabilities. High-multipole Plik uses masked, beam-corrected half-mission cross-spectra with noise/covariance models and foreground, calibration, polarization-efficiency and temperature-to-polarization leakage treatment. Its covariance retains correlations between frequency pairs and TT, TE and EE using a fiducial model. Cross-spectra reduce additive noise bias only insofar as the split-map noises are uncorrelated.",
      "claimIds": [
        "M-phys-planck2018-cmb-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 51-53, Section 3.4: Plik foreground, calibration, polarization-efficiency and residual-systematics treatment"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
        }
      ],
      "openObligations": [
        "Not all corrections are freely fitted: the baseline fixes EE dust amplitudes, polarization-efficiency corrections and several residual templates, while fitting selected foreground/calibration parameters with priors. Shared scanning systematics can remain correlated between half missions.",
        "Simulations and fiducial covariance approximate noise, foregrounds, sample variance and residual systematics. The source reports finite-simulation and fixed-sky limitations; validation is not proof that all calibration, foreground or likelihood errors vanish. No maps, templates, covariance or end-to-end simulation are locally reconstructed."
      ]
    },
    {
      "id": "phys:planck2018-angular-spectra",
      "name": "Planck selected angular-spectrum estimates",
      "kind": "scoped-process",
      "description": "The reported data products are angular temperature and E-polarization spectrum estimates: Commander TT and SimAll EE for 2 <= ell <= 29, and Plik per-frequency half-mission TT, TE and EE cross-spectra at higher multipoles. The high-multipole union is TT 30-2508 and TE/EE 30-1996, with narrower pair-specific cuts. These response-conditioned angular correlations are distinct from a primordial curvature spectrum or an observed quantum-vacuum realization.",
      "claimIds": [
        "C-phys-planck2018-angular-spectra"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
        }
      ],
      "openObligations": [
        "The actual Plik data vector keeps frequency-pair spectra; it is not the frequency-coadded curve in Figures 57-59. Those displays fix foreground/nuisance parameters to a best fit including lensing reconstruction, and their high-multipole diagonal error bars omit foreground-model uncertainty. Displayed low-TE points are not used in the chosen inference.",
        "The sky is one finite, masked realization: multipoles and cross-spectra have correlated sample variance and instrumental/foreground uncertainty. Angular spectra are processed estimates, not independent raw event counts or a direct time series of primordial fluctuations."
      ]
    },
    {
      "id": "phys:planck2018-primordial-inference-context",
      "name": "Planck base-model primordial inference",
      "kind": "context",
      "description": "The selected analysis assumes spatially flat base LambdaCDM with purely adiabatic scalar P_R(k)=A_s*(k/k_*)^(n_s-1), k_*=0.05 Mpc^-1. CAMB (August 2017) maps this prescribed initial spectrum and the adopted background, matter and thermal history to lensed CMB spectra; CosmoMC (July 2018) samples the six-parameter posterior. The base parameters are baryon and cold-dark-matter densities, theta_MC, tau, ln(10^10 A_s) and n_s, with flat base priors; the amplitude prior is 1.61 < ln(10^10 A_s) < 3.91. The adopted neutrino model has two massless states and one 0.06 eV state, BBN-predicted helium and the stated tanh reionization history. The likelihood multiplies Commander low-T, SimAll low-E and high-multipole Plik, exploring the allowed nuisance parameters jointly.",
      "claimIds": [
        "M-phys-planck2018-primordial-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 pages 4-5, Sections 2.1-2.2.1: base model, priors, CAMB/CosmoMC, map response and Plik cuts"
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 11, Sections 2.2.3-2.2.4: exact TT,TE,EE+lowE definition, excluded low-TE and amplitude-optical-depth degeneracy"
        },
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions"
        },
        {
          "sourceId": "planck2018-cmb-likelihoods",
          "locator": "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 4-6, Section 2.1, Equation 3 and Table 1: scalar power-law convention, transfer calculation and pivot scale"
        }
      ],
      "openObligations": [
        "This transfer/likelihood model includes physical lensing of TT/TE/EE but not the separate lensing-reconstruction likelihood. No BAO, BK15 or large-scale-structure likelihood is added. A power-law adiabatic initial spectrum is an assumption of this fit, not a derivation of inflation or of its quantum origin.",
        "The hybrid likelihood neglects low/high-multipole correlations and low-T/low-E correlations; low-TE is excluded. Its high-multipole Gaussian approximation and fixed corrections carry stated limits. High-multipole amplitude is degenerate with tau through A_s*exp(-2*tau); low-E supplies conditional information on tau.",
        "Inherited prior bounds beyond the quoted amplitude range and the full recombination, BBN, nonlinear-lensing, sampler and covariance implementations are not independently reconstructed. Other cosmologies or nuisance choices can change the posterior; no full numerical replay or unique origin mechanism is claimed."
      ]
    },
    {
      "id": "phys:planck2018-scalar-spectrum",
      "name": "Planck conditional scalar amplitude and tilt",
      "kind": "scoped-process",
      "description": "For TT,TE,EE+lowE in that base model, Planck reports n_s=0.9649 +/- 0.0044 and ln(10^10 A_s)=3.045 +/- 0.016, each as a marginalized 68 percent interval at k_*=0.05 Mpc^-1. These are the selected joint column of VI Table 2 and X Table 2, with the tilt also stated in X Equation 10. The amplitude and tilt are inferred primordial-spectrum parameters, conditional on the specified transfer model, likelihood and priors.",
      "claimIds": [
        "C-phys-planck2018-scalar-spectrum"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "planck2018-cosmological-parameters",
          "locator": "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions"
        },
        {
          "sourceId": "planck2018-inflation",
          "locator": "Author v2 pages 9-10, Section 3.1, Equation 10 and selected TT,TE,EE+lowE column of Table 2: conditional scalar tilt and amplitude"
        }
      ],
      "openObligations": [
        "These two marginal intervals do not specify their joint posterior or covariance and are not independent detections. The +/-0.0042 tilt uncertainty belongs to the different TT,TE,EE+lowE+lensing combination; it must not replace this result.",
        "The source-reported posterior is neither a local refit nor direct proof of a quantum-vacuum origin, a unique inflationary potential, reheating, primordial tensors, dark-matter microphysics or the construction of late-time structure. Other initial-condition and cosmological models require their own evidence and likelihood comparison.",
        "Papers V, VI and X share the Planck acquisition and analysis chain. Their agreement is a provenance/consistency check, not a statistical multiplication of independent evidence."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:planck2018-cmb-acquisition-context-planck2018-angular-spectra",
      "source": "phys:planck2018-cmb-acquisition-context",
      "target": "phys:planck2018-angular-spectra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected full-mission maps and split-frequency samples supply the angular-spectrum data; the sky observation is shared across the Planck reports.",
      "claimIds": [
        "M-phys-planck2018-angular-spectra"
      ],
      "contextIds": [
        "planck2018-cmb-response"
      ]
    },
    {
      "id": "physics:planck2018-cmb-response-context-planck2018-angular-spectra",
      "source": "phys:planck2018-cmb-response-context",
      "target": "phys:planck2018-angular-spectra",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared cleaning, masks, beam response and noise treatment determine how the maps become processed angular-spectrum estimates.",
      "claimIds": [
        "M-phys-planck2018-angular-spectra"
      ],
      "contextIds": [
        "planck2018-cmb-response"
      ]
    },
    {
      "id": "physics:planck2018-angular-spectra-planck2018-scalar-spectrum",
      "source": "phys:planck2018-angular-spectra",
      "target": "phys:planck2018-scalar-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected angular-spectrum inputs constrain the posterior only through the adopted transfer and likelihood model; plotted coadded curves are not replacement input data.",
      "claimIds": [
        "M-phys-planck2018-scalar-spectrum"
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:planck2018-cmb-response-context-planck2018-scalar-spectrum",
      "source": "phys:planck2018-cmb-response-context",
      "target": "phys:planck2018-scalar-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The foreground, calibration and fixed/fitted correction choices enter the likelihood interpretation of the same spectra and limit the resulting posterior.",
      "claimIds": [
        "M-phys-planck2018-scalar-spectrum"
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:planck2018-primordial-inference-context-planck2018-scalar-spectrum",
      "source": "phys:planck2018-primordial-inference-context",
      "target": "phys:planck2018-scalar-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The stated cosmological model, solver, priors and likelihood combination define the conditional inference of primordial amplitude and tilt.",
      "claimIds": [
        "M-phys-planck2018-scalar-spectrum"
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    },
    {
      "id": "physics:primordial-curvature-spectrum-planck2018-scalar-spectrum",
      "source": "phys:primordial-curvature-spectrum",
      "target": "phys:planck2018-scalar-spectrum",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The dimensionless curvature-power convention identifies the fitted P_R amplitude and tilt. This phenomenological fit does not require the accompanying chosen quantum state or leading slow-roll amplitude formula as an observed premise.",
      "claimIds": [
        "M-phys-planck2018-scalar-spectrum"
      ],
      "contextIds": [
        "planck2018-primordial-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "planck2018-cmb-acquisition",
      "sourceId": "planck2018-cmb-likelihoods",
      "studyType": "primary-observation",
      "doi": "10.1051/0004-6361/201936386",
      "journal": "Astronomy & Astrophysics",
      "volume": "641",
      "issue": "",
      "pages": "A5",
      "system": "Planck selected CMB temperature and E-polarization analysis",
      "preparation": "The 2018 release reprocesses full-mission Planck intensity and linear-polarization maps. The selected high-multipole sample uses 100, 143 and 217 GHz HFI half-mission cross-spectra; low-E uses the 100 x 143 GHz full-mission polarization cross-spectrum, with low-temperature Commander estimates. The low-E cleaning uses 353 GHz dust templates and a 30 GHz synchrotron template at 100 GHz. This is selection from an existing sky observation, not a new 2018 experimental preparation.",
      "observable": "Selected Planck map frequencies and half-mission/full-mission data combinations",
      "finding": "An existing sky observation selected for the specified temperature and E-polarization likelihood.",
      "limitations": [
        "Frequency pairs and half missions sample the same CMB sky and share calibration and foreground inputs. Papers V, VI and X are linked analyses of that acquisition; they are not independent replications or independent universes.",
        "The selected branch excludes low-multipole TE, BB, the LFI lowTEB alternative, a separate lensing-reconstruction likelihood, BAO and BICEP/Keck. Detailed timelines, detector operation and the complete upstream LFI/HFI instrument papers are not independently reviewed."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v2 pages 2-4, Sections 1-2.1: full-mission maps, likelihood naming and Commander component separation",
        "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
        "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/1907.12875v2",
      "correctionCheck": "Exact author version and journal DOI checked. Author v2 matches the published likelihood report; selected printed multipole cuts are retained without substituting the inflation-paper summary."
    },
    {
      "id": "planck2018-cmb-response",
      "sourceId": "planck2018-cmb-likelihoods",
      "studyType": "computational-analysis",
      "doi": "10.1051/0004-6361/201936386",
      "journal": "Astronomy & Astrophysics",
      "volume": "641",
      "issue": "",
      "pages": "A5",
      "system": "Planck selected CMB temperature and E-polarization analysis",
      "preparation": "Commander jointly models low-temperature foregrounds and the CMB. SimAll uses foreground-cleaned 100 x 143 GHz quasi-QML polarization estimates and simulation-based probabilities. High-multipole Plik uses masked, beam-corrected half-mission cross-spectra with noise/covariance models and foreground, calibration, polarization-efficiency and temperature-to-polarization leakage treatment. Its covariance retains correlations between frequency pairs and TT, TE and EE using a fiducial model. Cross-spectra reduce additive noise bias only insofar as the split-map noises are uncorrelated.",
      "observable": "Response-conditioned angular spectra and their joint statistical/nuisance treatment",
      "finding": "The reported data products are angular temperature and E-polarization spectrum estimates: Commander TT and SimAll EE for 2 <= ell <= 29, and Plik per-frequency half-mission TT, TE and EE cross-spectra at higher multipoles. The high-multipole union is TT 30-2508 and TE/EE 30-1996, with narrower pair-specific cuts. These response-conditioned angular correlations are distinct from a primordial curvature spectrum or an observed quantum-vacuum realization.",
      "limitations": [
        "Not all corrections are freely fitted: the baseline fixes EE dust amplitudes, polarization-efficiency corrections and several residual templates, while fitting selected foreground/calibration parameters with priors. Shared scanning systematics can remain correlated between half missions.",
        "Simulations and fiducial covariance approximate noise, foregrounds, sample variance and residual systematics. The source reports finite-simulation and fixed-sky limitations; validation is not proof that all calibration, foreground or likelihood errors vanish. No maps, templates, covariance or end-to-end simulation are locally reconstructed.",
        "The actual Plik data vector keeps frequency-pair spectra; it is not the frequency-coadded curve in Figures 57-59. Those displays fix foreground/nuisance parameters to a best fit including lensing reconstruction, and their high-multipole diagonal error bars omit foreground-model uncertainty. Displayed low-TE points are not used in the chosen inference.",
        "The sky is one finite, masked realization: multipoles and cross-spectra have correlated sample variance and instrumental/foreground uncertainty. Angular spectra are processed estimates, not independent raw event counts or a direct time series of primordial fluctuations."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v2 pages 8-10, Sections 2.2.1-2.2.3: polarization cleaning, cross-spectrum estimation, simulations and low-TE exclusion",
        "Author v2 pages 25-26 and 28, Sections 3.1-3.2.4, Equations 20-21 and Table 13: half-mission spectra, covariance, beam response and multipole cuts",
        "Author v2 pages 51-53, Section 3.4: Plik foreground, calibration, polarization-efficiency and residual-systematics treatment",
        "Author v2 pages 59-61, Figures 57-59 and their captions: coadded display conventions and covariance limitations",
        "Author v2 pages 86-88, Sections 3.12.3-4 and Table 23: simulation limits, hybrid likelihood and omitted correlations"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/1907.12875v2",
      "correctionCheck": "Exact author version and journal DOI checked. Author v2 matches the published likelihood report; selected printed multipole cuts are retained without substituting the inflation-paper summary."
    },
    {
      "id": "planck2018-primordial-inference",
      "sourceId": "planck2018-cosmological-parameters",
      "studyType": "computational-analysis",
      "doi": "10.1051/0004-6361/201833910",
      "journal": "Astronomy & Astrophysics",
      "volume": "641",
      "issue": "",
      "pages": "A6",
      "system": "Planck selected CMB temperature and E-polarization analysis",
      "preparation": "The selected analysis assumes spatially flat base LambdaCDM with purely adiabatic scalar P_R(k)=A_s*(k/k_*)^(n_s-1), k_*=0.05 Mpc^-1. CAMB (August 2017) maps this prescribed initial spectrum and the adopted background, matter and thermal history to lensed CMB spectra; CosmoMC (July 2018) samples the six-parameter posterior. The base parameters are baryon and cold-dark-matter densities, theta_MC, tau, ln(10^10 A_s) and n_s, with flat base priors; the amplitude prior is 1.61 < ln(10^10 A_s) < 3.91. The adopted neutrino model has two massless states and one 0.06 eV state, BBN-predicted helium and the stated tanh reionization history. The likelihood multiplies Commander low-T, SimAll low-E and high-multipole Plik, exploring the allowed nuisance parameters jointly.",
      "observable": "Marginalized primordial log-amplitude and scalar spectral index",
      "finding": "For TT,TE,EE+lowE in that base model, Planck reports n_s=0.9649 +/- 0.0044 and ln(10^10 A_s)=3.045 +/- 0.016, each as a marginalized 68 percent interval at k_*=0.05 Mpc^-1. These are the selected joint column of VI Table 2 and X Table 2, with the tilt also stated in X Equation 10. The amplitude and tilt are inferred primordial-spectrum parameters, conditional on the specified transfer model, likelihood and priors.",
      "limitations": [
        "This transfer/likelihood model includes physical lensing of TT/TE/EE but not the separate lensing-reconstruction likelihood. No BAO, BK15 or large-scale-structure likelihood is added. A power-law adiabatic initial spectrum is an assumption of this fit, not a derivation of inflation or of its quantum origin.",
        "The hybrid likelihood neglects low/high-multipole correlations and low-T/low-E correlations; low-TE is excluded. Its high-multipole Gaussian approximation and fixed corrections carry stated limits. High-multipole amplitude is degenerate with tau through A_s*exp(-2*tau); low-E supplies conditional information on tau.",
        "Inherited prior bounds beyond the quoted amplitude range and the full recombination, BBN, nonlinear-lensing, sampler and covariance implementations are not independently reconstructed. Other cosmologies or nuisance choices can change the posterior; no full numerical replay or unique origin mechanism is claimed.",
        "These two marginal intervals do not specify their joint posterior or covariance and are not independent detections. The +/-0.0042 tilt uncertainty belongs to the different TT,TE,EE+lowE+lensing combination; it must not replace this result.",
        "The source-reported posterior is neither a local refit nor direct proof of a quantum-vacuum origin, a unique inflationary potential, reheating, primordial tensors, dark-matter microphysics or the construction of late-time structure. Other initial-condition and cosmological models require their own evidence and likelihood comparison.",
        "Papers V, VI and X share the Planck acquisition and analysis chain. Their agreement is a provenance/consistency check, not a statistical multiplication of independent evidence."
      ],
      "readExtent": "selected-primary-author-passages",
      "reviewedLocators": [
        "Author v4 pages 4-5, Sections 2.1-2.2.1: base model, priors, CAMB/CosmoMC, map response and Plik cuts",
        "Author v4 page 11, Sections 2.2.3-2.2.4: exact TT,TE,EE+lowE definition, excluded low-TE and amplitude-optical-depth degeneracy",
        "Author v4 page 16, Table 2, TT,TE,EE+lowE column and caption: 68 percent base-parameter intervals and adopted BBN/reionization assumptions",
        "Author v4 page 59, footnote 44 and Equations 87a-87b: incorporated early-reionization percentile corrigendum, outside the selected base-model result"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://arxiv.org/abs/1807.06209v4",
      "correctionCheck": "Exact author version and journal DOI checked. Author v4 incorporates the page 59 early-reionization percentile corrigendum; those outputs are outside this base-model admission."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:planck2018-cmb-acquisition-context",
      "role": "experimental-context",
      "denotes": "A named astronomical observation and map selection, not a controlled intervention on primordial conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-planck2018-cmb-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:planck2018-cmb-response-context",
      "role": "model-context",
      "denotes": "The reported map-to-spectrum response, foreground and calibration treatment; no new independent acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-planck2018-cmb-response-context"
      ]
    },
    {
      "nodeId": "phys:planck2018-angular-spectra",
      "role": "scoped-phenomenon",
      "denotes": "Processed angular-correlation estimates of the observed CMB sky, distinct from an inferred primordial spectrum.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-planck2018-angular-spectra"
      ]
    },
    {
      "nodeId": "phys:planck2018-primordial-inference-context",
      "role": "model-context",
      "denotes": "The adopted base-model transfer, likelihood, nuisance treatment and priors that connect spectra to conditional primordial parameters.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-planck2018-primordial-inference-context"
      ]
    },
    {
      "nodeId": "phys:planck2018-scalar-spectrum",
      "role": "scoped-phenomenon",
      "denotes": "A reported conditional posterior for scalar amplitude and tilt, not a direct observation of a quantum origin.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-planck2018-scalar-spectrum"
      ]
    }
  ]
};

/** Preserve the selected Planck likelihood, shared data and conditional primordial inference. */
export function validateCosmologyCmbContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `CMB ${kind} changed ${id}: preserve data selection, response and conditional inference`);
    }
  }
}
