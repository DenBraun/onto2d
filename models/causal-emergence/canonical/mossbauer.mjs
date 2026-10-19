import assert from "node:assert/strict";

export const MOSSBAUER_CHECKS = new Map();
export const MOSSBAUER_ANALYTICAL_SOURCES = new Map();
export const MOSSBAUER_STUDY_TYPES = new Map([["dubiel2020-fe-gluconate", "primary-experiment"]]);
export const MOSSBAUER_ADMISSION = {
  "definitions": [
    [
      "phys:recoilless-nuclear-transition",
      "D-phys-recoilless-nuclear-transition"
    ],
    [
      "phys:mossbauer-observable-model-boundary",
      "D-phys-mossbauer-observable-model-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:recoilless-nuclear-transition-mossbauer-observable-model-boundary",
      [
        "phys:recoilless-nuclear-transition",
        "phys:mossbauer-observable-model-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "dubiel2020-fe-gluconate-context",
      "M-phys-dubiel2020-fe-gluconate-context",
      [
        "dubiel2020-fe-gluconate"
      ]
    ]
  ],
  "observations": [
    [
      "dubiel-fe-gluconate-transmission",
      "C-phys-dubiel-fe-gluconate-transmission",
      [
        "dubiel2020-fe-gluconate"
      ]
    ],
    [
      "dubiel-fe-gluconate-spectral-inference",
      "C-phys-dubiel-fe-gluconate-spectral-inference",
      [
        "dubiel2020-fe-gluconate"
      ]
    ],
    [
      "mossbauer-source-scope",
      "C-phys-mossbauer-source-scope",
      [
        "dubiel2020-fe-gluconate"
      ]
    ]
  ],
  "dependencies": [
    [
      "dubiel2020-fe-gluconate-context-dubiel-fe-gluconate-transmission",
      "dubiel2020-fe-gluconate-context",
      "dubiel-fe-gluconate-transmission",
      "M-phys-dubiel2020-fe-gluconate-context",
      "measurement-context"
    ],
    [
      "mossbauer-observable-model-boundary-dubiel-fe-gluconate-transmission",
      "mossbauer-observable-model-boundary",
      "dubiel-fe-gluconate-transmission",
      "M-phys-dubiel-fe-gluconate-transmission",
      "interpretation-dependency"
    ],
    [
      "dubiel2020-fe-gluconate-context-dubiel-fe-gluconate-spectral-inference",
      "dubiel2020-fe-gluconate-context",
      "dubiel-fe-gluconate-spectral-inference",
      "M-phys-dubiel2020-fe-gluconate-context",
      "measurement-context"
    ],
    [
      "dubiel-fe-gluconate-transmission-dubiel-fe-gluconate-spectral-inference",
      "dubiel-fe-gluconate-transmission",
      "dubiel-fe-gluconate-spectral-inference",
      "M-phys-dubiel-fe-gluconate-spectral-inference",
      "interpretation-dependency"
    ],
    [
      "mossbauer-observable-model-boundary-dubiel-fe-gluconate-spectral-inference",
      "mossbauer-observable-model-boundary",
      "dubiel-fe-gluconate-spectral-inference",
      "M-phys-dubiel-fe-gluconate-spectral-inference",
      "interpretation-dependency"
    ],
    [
      "recoilless-nuclear-transition-mossbauer-source-scope",
      "recoilless-nuclear-transition",
      "mossbauer-source-scope",
      "M-phys-mossbauer-source-scope",
      "interpretation-dependency"
    ],
    [
      "mossbauer-observable-model-boundary-mossbauer-source-scope",
      "mossbauer-observable-model-boundary",
      "mossbauer-source-scope",
      "M-phys-mossbauer-source-scope",
      "interpretation-dependency"
    ],
    [
      "dubiel-fe-gluconate-transmission-mossbauer-source-scope",
      "dubiel-fe-gluconate-transmission",
      "mossbauer-source-scope",
      "M-phys-mossbauer-source-scope",
      "interpretation-dependency"
    ],
    [
      "dubiel-fe-gluconate-spectral-inference-mossbauer-source-scope",
      "dubiel-fe-gluconate-spectral-inference",
      "mossbauer-source-scope",
      "M-phys-mossbauer-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "dubiel2020-fe-gluconate"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-dubiel2020-fe-gluconate-context",
      [
        "dubiel2020-amorphous-fe-gluconate"
      ]
    ],
    [
      "M-phys-dubiel-fe-gluconate-transmission",
      [
        "dubiel2020-amorphous-fe-gluconate"
      ]
    ],
    [
      "C-phys-dubiel-fe-gluconate-transmission",
      [
        "dubiel2020-amorphous-fe-gluconate"
      ]
    ],
    [
      "M-phys-dubiel-fe-gluconate-spectral-inference",
      [
        "dubiel2020-amorphous-fe-gluconate"
      ]
    ],
    [
      "C-phys-dubiel-fe-gluconate-spectral-inference",
      [
        "dubiel2020-amorphous-fe-gluconate"
      ]
    ],
    [
      "M-phys-mossbauer-source-scope",
      [
        "dubiel2020-amorphous-fe-gluconate",
        "mossbauer1961-nobel-lecture"
      ]
    ],
    [
      "C-phys-mossbauer-source-scope",
      [
        "dubiel2020-amorphous-fe-gluconate",
        "mossbauer1961-nobel-lecture"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-recoilless-nuclear-transition",
      "kind": "review-finding",
      "statement": "For a free nucleus of mass M, the leading nonrelativistic recoil energy is E_R=E_gamma^2/(2*M*c^2), displacing emission below and absorption above the nuclear transition energy. In the selected bound-solid oscillator account, a recoilless nuclear gamma event leaves the internal vibrational occupation state unchanged. Momentum is still transferred to the bound body; its whole-body translational recoil energy is negligibly small on the stated spectral scale. This zero-phonon channel is a fraction of events, not absence of binding vibrations, zero momentum transfer or a rule that every emitted gamma ray is resonant.",
      "scope": "Selected primary-author account of free recoil versus the bound-body zero-phonon nuclear-transition channel.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The free-nucleus recoil formula is a leading nonrelativistic expression, not an exact relativistic identity or a replacement for the energy balance of every bound event.",
        "Zero-phonon means no change of the internal vibrational state in this oscillator description, not that the solid was initially at zero temperature, contained no phonons, had no zero-point motion or received no momentum.",
        "Whole-body translational recoil is treated as negligible relative to the relevant linewidth; it is not set identically to zero for an arbitrary finite isolated body.",
        "The Einstein/Debye frequency pictures are qualitative or declared model approximations. The lecture does not supply a full mathematical derivation here; its approximate energy/temperature observability condition is not an exact universal cutoff near 150 keV.",
        "The lecture recounts the author own earlier experiments and formal interpretation. It is not a second independent acquisition or a locally reproduced experiment."
      ]
    },
    {
      "id": "D-phys-mossbauer-observable-model-boundary",
      "kind": "review-finding",
      "statement": "Mossbauer transmission spectra record gamma attenuation as relative source/absorber velocity is varied. A fitted center shift, quadrupole splitting, linewidth and relative spectral area are inferred spectral parameters, distinct from a directly observed atomic geometry, absolute recoilless fraction or complete vibrational density of states. In the selected harmonic displacement convention, write f=exp(-k_gamma^2*mean(u_parallel^2)), where u_parallel is displacement projected along the gamma wave vector. In the selected Debye analysis, center shift contains isomer and second-order-Doppler contributions, while normalized thin-absorber area probes relative f. These two routes need not yield one identical effective Debye temperature.",
      "scope": "Spectral acquisition, fit and vibrational-model interpretation boundary for the selected Fe-57 experiment.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The directional displacement notation is explicit: mean(u_parallel^2) is not silently replaced by an unqualified three-dimensional mean-square displacement. The harmonic Gaussian expression is not claimed as a general anharmonic or anisotropy-independent law.",
        "A no-phonon component can occur at finite temperature. Zero-point and thermally excited motions affect its probability; neither f=1 nor zero temperature is a universal prerequisite.",
        "A suitable bound nuclear transition and sufficient spectral overlap matter. Perfect periodic crystalline order is not established as a universal requirement; the selected experiment reports an XRD-amorphous solid with resonant Fe-57 spectra.",
        "Natural nuclear linewidth, fitted transmission linewidth, overlapping hyperfine structure, source/absorber conditions and instrumental/inhomogeneous broadening are different. Recoilless does not guarantee an observed natural-width line.",
        "Center-shift temperature fitting assumes a Debye spectrum and negligible temperature variation of the isomer shift. Relative area fitting assumes the source thin-absorber and count-normalization procedure; these are interpretations of the same spectra, not independent thermometers."
      ]
    },
    {
      "id": "M-phys-dubiel2020-fe-gluconate-context",
      "kind": "method",
      "statement": "Prepare the Fe-gluconate specimen by dissolving a crystalline sample in distilled water and drying at 50 degrees C in air; characterize the dried sample by Cu K-alpha X-ray diffraction. Record Fe-57 transmission spectra with a constant-acceleration drive and 1024 analyzer channels, using a room-temperature Co-57/Rh source supplying 14.4 keV gamma rays. The powdered absorber, reported as about 10 mg Fe per cm^2, is held between 78 and 295 K with reported temperature stability within plus/minus 0.1 K. Retain the source distinction between measured transmission and the subsequent thin-absorber spectral/model analysis.",
      "scope": "Single primary sample-characterization and Mossbauer-transmission context.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is one primary experiment context containing sample X-ray characterization and finite-temperature transmission spectroscopy. Its spectra, fitted components, relative areas and Debye interpretations share the same specimen/measurements; they are not independent replications.",
        "The measured sample is powdered Fe-gluconate prepared by dissolution and drying at 50 degrees C. XRD-amorphous is the reported finite-sensitivity diffraction classification, not proof that every atomic neighborhood has no order.",
        "The source reports about 10 mg Fe per cm^2, 1024 channels, source at room temperature, 78-295 K absorber range and temperature stability within plus/minus 0.1 K. These preparation/control values are not error bars on fitted shifts or proof of the thin-absorber approximation for every material.",
        "The quoted typical Table 1 errors are source estimates, without a reconstructed confidence convention or complete covariance/systematic budget. No raw counts, background, thickness correction, calibration fit or independent uncertainty replay was obtained.",
        "The earlier crystalline comparison study and imported Debye/isomer-shift references are not separately reviewed or admitted as additional studies. The original 1959 paper was not obtained as actual article text; a seven-page anthology contents PDF is not that article."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "M-phys-dubiel-fe-gluconate-transmission",
      "kind": "method",
      "statement": "Read the separately acquired XRD and velocity-dependent relative-transmission records for the stated specimen and temperature conditions. Use the broad dried-sample XRD pattern as the publication amorphous classification and the resonant attenuation profiles as the measured nuclear-spectroscopy response. Preserve the distinction between the Figure 2 data and its overlaid three-doublet fit components.",
      "scope": "Interpretation of sample diffraction and observed transmission profiles.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The XRD classification and transmission profiles establish a finite observed case; they do not measure a universal ordering threshold, a unique local coordination geometry or an exactly absent crystalline volume fraction.",
        "Figure 2 displays 78 K and 268 K examples. The study range reaches 295 K; the plotted higher-temperature example must not be relabelled 295 K.",
        "The fitted D1,D2,D3 curves are model components overlaid on measured spectra. Their existence as a useful decomposition does not alone establish three unique phases, three distinct atom positions or an independent magnetic-ordering measurement.",
        "The transmission scale is relative; no new absolute absorption cross section, absolute gamma-emission probability, natural linewidth or independent f measurement is inferred."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "C-phys-dubiel-fe-gluconate-transmission",
      "kind": "review-finding",
      "statement": "The selected dried Fe-gluconate specimen has a broad XRD pattern classified as amorphous, in contrast with the crystalline hydrated parent specimen. Fe-57 velocity-dependent transmission spectra show resonant attenuation at finite absorber temperatures across the reported 78-295 K study; Figure 2 displays 78 K and 268 K examples. This is a positive bound-solid Mossbauer case whose absorber is not reported to possess perfect periodic crystal order.",
      "scope": "Finite sample diffraction and measured relative-transmission response.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The XRD classification and transmission profiles establish a finite observed case; they do not measure a universal ordering threshold, a unique local coordination geometry or an exactly absent crystalline volume fraction.",
        "Figure 2 displays 78 K and 268 K examples. The study range reaches 295 K; the plotted higher-temperature example must not be relabelled 295 K.",
        "The fitted D1,D2,D3 curves are model components overlaid on measured spectra. Their existence as a useful decomposition does not alone establish three unique phases, three distinct atom positions or an independent magnetic-ordering measurement.",
        "The transmission scale is relative; no new absolute absorption cross section, absolute gamma-emission probability, natural linewidth or independent f measurement is inferred."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "M-phys-dubiel-fe-gluconate-spectral-inference",
      "kind": "method",
      "statement": "Fit each spectrum with three doublets in the source thin-absorber approximation, retaining fitted center shifts, quadrupole splittings, full widths at half maximum and relative areas as model-dependent quantities. Associate D1,D2 with Fe(II) and D3 with Fe(III) using the source spectral interpretation. Normalize areas using background counts and the 78 K reference before their relative-f analysis. Compare the separate effective Debye estimates from center-shift temperature dependence and area temperature dependence under their distinct assumptions.",
      "scope": "Spectral fit and vibrational-model interpretation of the same measured spectra.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 1 center shifts are relative to the Co-57/Rh source at room temperature, not automatically to metallic alpha-Fe. Its shift, splitting and full-width-at-half-maximum entries are in mm/s; the fitted widths are not natural nuclear energy widths.",
        "At 295 K the table lists a1,a2,a3 as 0.49,0.46,0.52 after normalization to unity at 78 K. These are relative normalized spectral-area quantities under the stated approximation, not absolute probabilities f(295 K).",
        "The text writes a_k=(A_k/B)/a_k(78 K), with B the background counts. This notation reuses a_k on the normalization reference; retain the stated background and 78 K normalization without claiming a new independent absolute normalization or repaired raw-data definition.",
        "Three-doublet fitting associates D1,D2 with Fe(II) and D3 with Fe(III) from their spectral parameters. Relative component areas are not automatically atom-number fractions when component recoilless fractions differ; no new exact Fe(III) population or unique geometry is admitted.",
        "The source Table 1 nominal area row at 268 K sums to 101.0 percent, so its rounded fitted entries are not promoted to an exact probability-normalized mixture. No correction or recalculated row is invented.",
        "Table 2 gives effective Debye temperatures 377(9) K from CS1 and 204(4) K from a1. Parenthesized errors retain the source convention, without an invented confidence level or full shared-data covariance. The two routes are different weightings/assumptions, not independent proof of one exact Debye temperature.",
        "The page 7 prose refers to Table 3 for these values although the adjacent displayed table is Table 2. This is a source cross-reference discrepancy, not an additional unseen table or a reason to silently renumber the source.",
        "No new Debye integral fit, spectrum decomposition, isotope abundance estimate, magnetic-ordering conclusion, complete phonon spectrum or dynamical lifetime is reproduced."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "C-phys-dubiel-fe-gluconate-spectral-inference",
      "kind": "review-finding",
      "statement": "The three-doublet analysis yields finite widths and distinct center shifts and quadrupole splittings under the stated spectral model. At 295 K its normalized area quantities a1,a2,a3 are 0.49,0.46,0.52 relative to 78 K. The model-derived effective Debye temperatures differ: Table 2 reports 377(9) K from CS1 and 204(4) K from a1. These results illustrate finite-temperature spectral and vibrational sensitivity, with fitted hyperfine/electronic-environment interpretation, rather than a natural-width measurement or absolute recoilless probability.",
      "scope": "Published spectral/model inferences from one Fe-57 transmission experiment.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Table 1 center shifts are relative to the Co-57/Rh source at room temperature, not automatically to metallic alpha-Fe. Its shift, splitting and full-width-at-half-maximum entries are in mm/s; the fitted widths are not natural nuclear energy widths.",
        "At 295 K the table lists a1,a2,a3 as 0.49,0.46,0.52 after normalization to unity at 78 K. These are relative normalized spectral-area quantities under the stated approximation, not absolute probabilities f(295 K).",
        "The text writes a_k=(A_k/B)/a_k(78 K), with B the background counts. This notation reuses a_k on the normalization reference; retain the stated background and 78 K normalization without claiming a new independent absolute normalization or repaired raw-data definition.",
        "Three-doublet fitting associates D1,D2 with Fe(II) and D3 with Fe(III) from their spectral parameters. Relative component areas are not automatically atom-number fractions when component recoilless fractions differ; no new exact Fe(III) population or unique geometry is admitted.",
        "The source Table 1 nominal area row at 268 K sums to 101.0 percent, so its rounded fitted entries are not promoted to an exact probability-normalized mixture. No correction or recalculated row is invented.",
        "Table 2 gives effective Debye temperatures 377(9) K from CS1 and 204(4) K from a1. Parenthesized errors retain the source convention, without an invented confidence level or full shared-data covariance. The two routes are different weightings/assumptions, not independent proof of one exact Debye temperature.",
        "The page 7 prose refers to Table 3 for these values although the adjacent displayed table is Table 2. This is a source cross-reference discrepancy, not an additional unseen table or a reason to silently renumber the source.",
        "No new Debye integral fit, spectrum decomposition, isotope abundance estimate, magnetic-ordering conclusion, complete phonon spectrum or dynamical lifetime is reproduced."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "M-phys-mossbauer-source-scope",
      "kind": "method",
      "statement": "Interpret the finite Fe-57 transmission case with the declared recoil/zero-phonon and spectral-inference boundaries. Keep the primary-author lecture as a formal account and the single Fe-gluconate study as the actual positive experiment; retain the same experimental context for its diffraction, spectra and fitted/model outputs. Distinguish bound-body momentum transfer from internal vibrational excitation, and qualify crystal, nuclear-transition, temperature and linewidth conditions without importing generic parent weights or carrier minima.",
      "scope": "Single-study scoped synthesis method for complete original card /17.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures",
          "role": "method",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /17 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite positive evidence is the declared amorphous Fe-gluconate experiment and its spectral analysis. It is not a catalogue of all Mossbauer isotopes, hosts, magnetic phases, line-broadening mechanisms or detector geometries.",
        "The lecture crystal oscillator model and the amorphous-sample experiment have different roles. No perfect periodic crystal is made universally necessary, and an amorphous solid does not imply unbound nuclei or absence of local binding/vibrational response.",
        "An appropriate discrete nuclear transition and bound-body recoil channel are required for this interpretation. Generic proton/neutron existence or stable nucleon identity does not by itself derive a suitable transition, lifetime, overlap, recoilless fraction or measured spectrum.",
        "Hyperfine splittings, center shifts and relative areas are fitted/model-interpreted observables in this finite case. Magnetic ordering, exact site geometry, absolute atom populations and a complete vibrational density of states are not established merely by naming the effect.",
        "Original necessary parents 2.9 crystalline structures and 1.11 protons/neutrons are not transferred as universal operational prerequisites. The nuclear and host binding conditions are specified directly; no prior crystal-formation measurement or generic nucleon record replaces them.",
        "Original parent weights 0.6/0.4, directions [1], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal-fraction estimator or universal necessity proof.",
        "Original carrier group 1/type 0, N_min=N_crit values 2 and 1, and null N_sat are catalogue defaults. Neither Fe-57 nucleon number, three doublets, host-body mass nor vibrational occupation measures those carrier onset/saturation thresholds.",
        "Original Level 2, Phase 2, TypeRole 4, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA effect-level/crystal-constraint label is not a new observed carrier, universal hierarchy or independent mechanism.",
        "The generic original theory and empirical placeholders are replaced only by actually read selected primary passages. The unread 1959 article, a contents-only anthology, cited earlier comparison studies and unrelated magnetic/lattice experiments are not admitted.",
        "One experiment context is retained across observed spectra, fitted parameters and the scoped conclusion; no duplicated acquisition, independent replication, pooled likelihood or new raw-data, Debye or recoil calculation is claimed."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "C-phys-mossbauer-source-scope",
      "kind": "review-finding",
      "statement": "The selected primary account and Fe-57 experiment support a finite Mossbauer regime: bound nuclear gamma transitions can contribute a zero-phonon resonant channel while conserving momentum, and finite-temperature transmission spectra provide model-dependent spectral and vibrational information. The observed amorphous absorber removes perfect periodic crystal order as a universal prerequisite. The declared source, nuclear transition, host, temperature, spectral model and inference limits determine the scope of this case.",
      "scope": "Single-study finite Mossbauer effect and evidence scope.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures",
          "role": "supports",
          "note": "Actually reviewed selected primary passage; no new acquisition or spectrum/phonon-model replay."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Complete original card /17 is catalogue provenance, not independent scientific evidence."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite positive evidence is the declared amorphous Fe-gluconate experiment and its spectral analysis. It is not a catalogue of all Mossbauer isotopes, hosts, magnetic phases, line-broadening mechanisms or detector geometries.",
        "The lecture crystal oscillator model and the amorphous-sample experiment have different roles. No perfect periodic crystal is made universally necessary, and an amorphous solid does not imply unbound nuclei or absence of local binding/vibrational response.",
        "An appropriate discrete nuclear transition and bound-body recoil channel are required for this interpretation. Generic proton/neutron existence or stable nucleon identity does not by itself derive a suitable transition, lifetime, overlap, recoilless fraction or measured spectrum.",
        "Hyperfine splittings, center shifts and relative areas are fitted/model-interpreted observables in this finite case. Magnetic ordering, exact site geometry, absolute atom populations and a complete vibrational density of states are not established merely by naming the effect.",
        "Original necessary parents 2.9 crystalline structures and 1.11 protons/neutrons are not transferred as universal operational prerequisites. The nuclear and host binding conditions are specified directly; no prior crystal-formation measurement or generic nucleon record replaces them.",
        "Original parent weights 0.6/0.4, directions [1], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal-fraction estimator or universal necessity proof.",
        "Original carrier group 1/type 0, N_min=N_crit values 2 and 1, and null N_sat are catalogue defaults. Neither Fe-57 nucleon number, three doublets, host-body mass nor vibrational occupation measures those carrier onset/saturation thresholds.",
        "Original Level 2, Phase 2, TypeRole 4, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA effect-level/crystal-constraint label is not a new observed carrier, universal hierarchy or independent mechanism.",
        "The generic original theory and empirical placeholders are replaced only by actually read selected primary passages. The unread 1959 article, a contents-only anthology, cited earlier comparison studies and unrelated magnetic/lattice experiments are not admitted.",
        "One experiment context is retained across observed spectra, fitted parameters and the scoped conclusion; no duplicated acquisition, independent replication, pooled likelihood or new raw-data, Debye or recoil calculation is claimed."
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:recoilless-nuclear-transition",
      "name": "Bound-body recoil and zero-phonon nuclear transition",
      "kind": "definition",
      "description": "For a free nucleus of mass M, the leading nonrelativistic recoil energy is E_R=E_gamma^2/(2*M*c^2), displacing emission below and absorption above the nuclear transition energy. In the selected bound-solid oscillator account, a recoilless nuclear gamma event leaves the internal vibrational occupation state unchanged. Momentum is still transferred to the bound body; its whole-body translational recoil energy is negligibly small on the stated spectral scale. This zero-phonon channel is a fraction of events, not absence of binding vibrations, zero momentum transfer or a rule that every emitted gamma ray is resonant.",
      "claimIds": [
        "D-phys-recoilless-nuclear-transition"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction"
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy"
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction"
        }
      ],
      "openObligations": [
        "The free-nucleus recoil formula is a leading nonrelativistic expression, not an exact relativistic identity or a replacement for the energy balance of every bound event.",
        "Zero-phonon means no change of the internal vibrational state in this oscillator description, not that the solid was initially at zero temperature, contained no phonons, had no zero-point motion or received no momentum.",
        "Whole-body translational recoil is treated as negligible relative to the relevant linewidth; it is not set identically to zero for an arbitrary finite isolated body.",
        "The Einstein/Debye frequency pictures are qualitative or declared model approximations. The lecture does not supply a full mathematical derivation here; its approximate energy/temperature observability condition is not an exact universal cutoff near 150 keV.",
        "The lecture recounts the author own earlier experiments and formal interpretation. It is not a second independent acquisition or a locally reproduced experiment."
      ]
    },
    {
      "id": "phys:mossbauer-observable-model-boundary",
      "name": "Mossbauer spectral observable and vibrational-model boundary",
      "kind": "definition",
      "description": "Mossbauer transmission spectra record gamma attenuation as relative source/absorber velocity is varied. A fitted center shift, quadrupole splitting, linewidth and relative spectral area are inferred spectral parameters, distinct from a directly observed atomic geometry, absolute recoilless fraction or complete vibrational density of states. In the selected harmonic displacement convention, write f=exp(-k_gamma^2*mean(u_parallel^2)), where u_parallel is displacement projected along the gamma wave vector. In the selected Debye analysis, center shift contains isomer and second-order-Doppler contributions, while normalized thin-absorber area probes relative f. These two routes need not yield one identical effective Debye temperature.",
      "claimIds": [
        "D-phys-mossbauer-observable-model-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy"
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures"
        }
      ],
      "openObligations": [
        "The directional displacement notation is explicit: mean(u_parallel^2) is not silently replaced by an unqualified three-dimensional mean-square displacement. The harmonic Gaussian expression is not claimed as a general anharmonic or anisotropy-independent law.",
        "A no-phonon component can occur at finite temperature. Zero-point and thermally excited motions affect its probability; neither f=1 nor zero temperature is a universal prerequisite.",
        "A suitable bound nuclear transition and sufficient spectral overlap matter. Perfect periodic crystalline order is not established as a universal requirement; the selected experiment reports an XRD-amorphous solid with resonant Fe-57 spectra.",
        "Natural nuclear linewidth, fitted transmission linewidth, overlapping hyperfine structure, source/absorber conditions and instrumental/inhomogeneous broadening are different. Recoilless does not guarantee an observed natural-width line.",
        "Center-shift temperature fitting assumes a Debye spectrum and negligible temperature variation of the isomer shift. Relative area fitting assumes the source thin-absorber and count-normalization procedure; these are interpretations of the same spectra, not independent thermometers."
      ]
    },
    {
      "id": "phys:dubiel2020-fe-gluconate-context",
      "name": "Amorphous Fe-gluconate diffraction and Fe-57 transmission context",
      "kind": "context",
      "description": "Prepare the Fe-gluconate specimen by dissolving a crystalline sample in distilled water and drying at 50 degrees C in air; characterize the dried sample by Cu K-alpha X-ray diffraction. Record Fe-57 transmission spectra with a constant-acceleration drive and 1024 analyzer channels, using a room-temperature Co-57/Rh source supplying 14.4 keV gamma rays. The powdered absorber, reported as about 10 mg Fe per cm^2, is held between 78 and 295 K with reported temperature stability within plus/minus 0.1 K. Retain the source distinction between measured transmission and the subsequent thin-absorber spectral/model analysis.",
      "claimIds": [
        "M-phys-dubiel2020-fe-gluconate-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors"
        }
      ],
      "openObligations": [
        "This is one primary experiment context containing sample X-ray characterization and finite-temperature transmission spectroscopy. Its spectra, fitted components, relative areas and Debye interpretations share the same specimen/measurements; they are not independent replications.",
        "The measured sample is powdered Fe-gluconate prepared by dissolution and drying at 50 degrees C. XRD-amorphous is the reported finite-sensitivity diffraction classification, not proof that every atomic neighborhood has no order.",
        "The source reports about 10 mg Fe per cm^2, 1024 channels, source at room temperature, 78-295 K absorber range and temperature stability within plus/minus 0.1 K. These preparation/control values are not error bars on fitted shifts or proof of the thin-absorber approximation for every material.",
        "The quoted typical Table 1 errors are source estimates, without a reconstructed confidence convention or complete covariance/systematic budget. No raw counts, background, thickness correction, calibration fit or independent uncertainty replay was obtained.",
        "The earlier crystalline comparison study and imported Debye/isomer-shift references are not separately reviewed or admitted as additional studies. The original 1959 paper was not obtained as actual article text; a seven-page anthology contents PDF is not that article."
      ]
    },
    {
      "id": "phys:dubiel-fe-gluconate-transmission",
      "name": "Finite-temperature Fe-57 transmission in amorphous Fe-gluconate",
      "kind": "scoped-process",
      "description": "The selected dried Fe-gluconate specimen has a broad XRD pattern classified as amorphous, in contrast with the crystalline hydrated parent specimen. Fe-57 velocity-dependent transmission spectra show resonant attenuation at finite absorber temperatures across the reported 78-295 K study; Figure 2 displays 78 K and 268 K examples. This is a positive bound-solid Mossbauer case whose absorber is not reported to possess perfect periodic crystal order.",
      "claimIds": [
        "C-phys-dubiel-fe-gluconate-transmission"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors"
        }
      ],
      "openObligations": [
        "The XRD classification and transmission profiles establish a finite observed case; they do not measure a universal ordering threshold, a unique local coordination geometry or an exactly absent crystalline volume fraction.",
        "Figure 2 displays 78 K and 268 K examples. The study range reaches 295 K; the plotted higher-temperature example must not be relabelled 295 K.",
        "The fitted D1,D2,D3 curves are model components overlaid on measured spectra. Their existence as a useful decomposition does not alone establish three unique phases, three distinct atom positions or an independent magnetic-ordering measurement.",
        "The transmission scale is relative; no new absolute absorption cross section, absolute gamma-emission probability, natural linewidth or independent f measurement is inferred."
      ]
    },
    {
      "id": "phys:dubiel-fe-gluconate-spectral-inference",
      "name": "Fe-gluconate fitted spectral and relative vibrational response",
      "kind": "scoped-process",
      "description": "The three-doublet analysis yields finite widths and distinct center shifts and quadrupole splittings under the stated spectral model. At 295 K its normalized area quantities a1,a2,a3 are 0.49,0.46,0.52 relative to 78 K. The model-derived effective Debye temperatures differ: Table 2 reports 377(9) K from CS1 and 204(4) K from a1. These results illustrate finite-temperature spectral and vibrational sensitivity, with fitted hyperfine/electronic-environment interpretation, rather than a natural-width measurement or absolute recoilless probability.",
      "claimIds": [
        "C-phys-dubiel-fe-gluconate-spectral-inference"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures"
        }
      ],
      "openObligations": [
        "Table 1 center shifts are relative to the Co-57/Rh source at room temperature, not automatically to metallic alpha-Fe. Its shift, splitting and full-width-at-half-maximum entries are in mm/s; the fitted widths are not natural nuclear energy widths.",
        "At 295 K the table lists a1,a2,a3 as 0.49,0.46,0.52 after normalization to unity at 78 K. These are relative normalized spectral-area quantities under the stated approximation, not absolute probabilities f(295 K).",
        "The text writes a_k=(A_k/B)/a_k(78 K), with B the background counts. This notation reuses a_k on the normalization reference; retain the stated background and 78 K normalization without claiming a new independent absolute normalization or repaired raw-data definition.",
        "Three-doublet fitting associates D1,D2 with Fe(II) and D3 with Fe(III) from their spectral parameters. Relative component areas are not automatically atom-number fractions when component recoilless fractions differ; no new exact Fe(III) population or unique geometry is admitted.",
        "The source Table 1 nominal area row at 268 K sums to 101.0 percent, so its rounded fitted entries are not promoted to an exact probability-normalized mixture. No correction or recalculated row is invented.",
        "Table 2 gives effective Debye temperatures 377(9) K from CS1 and 204(4) K from a1. Parenthesized errors retain the source convention, without an invented confidence level or full shared-data covariance. The two routes are different weightings/assumptions, not independent proof of one exact Debye temperature.",
        "The page 7 prose refers to Table 3 for these values although the adjacent displayed table is Table 2. This is a source cross-reference discrepancy, not an additional unseen table or a reason to silently renumber the source.",
        "No new Debye integral fit, spectrum decomposition, isotope abundance estimate, magnetic-ordering conclusion, complete phonon spectrum or dynamical lifetime is reproduced."
      ]
    },
    {
      "id": "phys:mossbauer-source-scope",
      "name": "Scoped bound-solid Mossbauer regime and evidence",
      "kind": "scoped-process",
      "description": "The selected primary account and Fe-57 experiment support a finite Mossbauer regime: bound nuclear gamma transitions can contribute a zero-phonon resonant channel while conserving momentum, and finite-temperature transmission spectra provide model-dependent spectral and vibrational information. The observed amorphous absorber removes perfect periodic crystal order as a universal prerequisite. The declared source, nuclear transition, host, temperature, spectral model and inference limits determine the scope of this case.",
      "claimIds": [
        "C-phys-mossbauer-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction"
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy"
        },
        {
          "sourceId": "mossbauer1961-nobel-lecture",
          "locator": "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors"
        },
        {
          "sourceId": "dubiel2020-amorphous-fe-gluconate",
          "locator": "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "The finite positive evidence is the declared amorphous Fe-gluconate experiment and its spectral analysis. It is not a catalogue of all Mossbauer isotopes, hosts, magnetic phases, line-broadening mechanisms or detector geometries.",
        "The lecture crystal oscillator model and the amorphous-sample experiment have different roles. No perfect periodic crystal is made universally necessary, and an amorphous solid does not imply unbound nuclei or absence of local binding/vibrational response.",
        "An appropriate discrete nuclear transition and bound-body recoil channel are required for this interpretation. Generic proton/neutron existence or stable nucleon identity does not by itself derive a suitable transition, lifetime, overlap, recoilless fraction or measured spectrum.",
        "Hyperfine splittings, center shifts and relative areas are fitted/model-interpreted observables in this finite case. Magnetic ordering, exact site geometry, absolute atom populations and a complete vibrational density of states are not established merely by naming the effect.",
        "Original necessary parents 2.9 crystalline structures and 1.11 protons/neutrons are not transferred as universal operational prerequisites. The nuclear and host binding conditions are specified directly; no prior crystal-formation measurement or generic nucleon record replaces them.",
        "Original parent weights 0.6/0.4, directions [1], modes [1], necessary, dependency type 10 and arising roles remain catalogue provenance without a matched causal-fraction estimator or universal necessity proof.",
        "Original carrier group 1/type 0, N_min=N_crit values 2 and 1, and null N_sat are catalogue defaults. Neither Fe-57 nucleon number, three doublets, host-body mass nor vibrational occupation measures those carrier onset/saturation thresholds.",
        "Original Level 2, Phase 2, TypeRole 4, Science [1,2,41], established, MustCover [10], ShouldCover [9] and Optional [] are ontology/display assignments. The SOMA effect-level/crystal-constraint label is not a new observed carrier, universal hierarchy or independent mechanism.",
        "The generic original theory and empirical placeholders are replaced only by actually read selected primary passages. The unread 1959 article, a contents-only anthology, cited earlier comparison studies and unrelated magnetic/lattice experiments are not admitted.",
        "One experiment context is retained across observed spectra, fitted parameters and the scoped conclusion; no duplicated acquisition, independent replication, pooled likelihood or new raw-data, Debye or recoil calculation is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:recoilless-nuclear-transition-mossbauer-observable-model-boundary",
      "source": "phys:recoilless-nuclear-transition",
      "target": "phys:mossbauer-observable-model-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "D-phys-mossbauer-observable-model-boundary"
      ]
    },
    {
      "id": "physics:dubiel2020-fe-gluconate-context-dubiel-fe-gluconate-transmission",
      "source": "phys:dubiel2020-fe-gluconate-context",
      "target": "phys:dubiel-fe-gluconate-transmission",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-dubiel2020-fe-gluconate-context"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:mossbauer-observable-model-boundary-dubiel-fe-gluconate-transmission",
      "source": "phys:mossbauer-observable-model-boundary",
      "target": "phys:dubiel-fe-gluconate-transmission",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-dubiel-fe-gluconate-transmission"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:dubiel2020-fe-gluconate-context-dubiel-fe-gluconate-spectral-inference",
      "source": "phys:dubiel2020-fe-gluconate-context",
      "target": "phys:dubiel-fe-gluconate-spectral-inference",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-dubiel2020-fe-gluconate-context"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:dubiel-fe-gluconate-transmission-dubiel-fe-gluconate-spectral-inference",
      "source": "phys:dubiel-fe-gluconate-transmission",
      "target": "phys:dubiel-fe-gluconate-spectral-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-dubiel-fe-gluconate-spectral-inference"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:mossbauer-observable-model-boundary-dubiel-fe-gluconate-spectral-inference",
      "source": "phys:mossbauer-observable-model-boundary",
      "target": "phys:dubiel-fe-gluconate-spectral-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-dubiel-fe-gluconate-spectral-inference"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:recoilless-nuclear-transition-mossbauer-source-scope",
      "source": "phys:recoilless-nuclear-transition",
      "target": "phys:mossbauer-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-mossbauer-source-scope"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:mossbauer-observable-model-boundary-mossbauer-source-scope",
      "source": "phys:mossbauer-observable-model-boundary",
      "target": "phys:mossbauer-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-mossbauer-source-scope"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:dubiel-fe-gluconate-transmission-mossbauer-source-scope",
      "source": "phys:dubiel-fe-gluconate-transmission",
      "target": "phys:mossbauer-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-mossbauer-source-scope"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    },
    {
      "id": "physics:dubiel-fe-gluconate-spectral-inference-mossbauer-source-scope",
      "source": "phys:dubiel-fe-gluconate-spectral-inference",
      "target": "phys:mossbauer-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared source, formal boundary or finite result contributes only under the target interpretation method and study conditions.",
      "claimIds": [
        "M-phys-mossbauer-source-scope"
      ],
      "contextIds": [
        "dubiel2020-fe-gluconate"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:recoilless-nuclear-transition",
      "role": "definition",
      "denotes": "Bound-body recoil and zero-phonon nuclear transition under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-recoilless-nuclear-transition"
      ]
    },
    {
      "nodeId": "phys:mossbauer-observable-model-boundary",
      "role": "definition",
      "denotes": "Mossbauer spectral observable and vibrational-model boundary under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-mossbauer-observable-model-boundary"
      ]
    },
    {
      "nodeId": "phys:dubiel2020-fe-gluconate-context",
      "role": "experimental-context",
      "denotes": "Amorphous Fe-gluconate diffraction and Fe-57 transmission context under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-dubiel2020-fe-gluconate-context"
      ]
    },
    {
      "nodeId": "phys:dubiel-fe-gluconate-transmission",
      "role": "scoped-phenomenon",
      "denotes": "Finite-temperature Fe-57 transmission in amorphous Fe-gluconate under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-dubiel-fe-gluconate-transmission"
      ]
    },
    {
      "nodeId": "phys:dubiel-fe-gluconate-spectral-inference",
      "role": "scoped-phenomenon",
      "denotes": "Fe-gluconate fitted spectral and relative vibrational response under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-dubiel-fe-gluconate-spectral-inference"
      ]
    },
    {
      "nodeId": "phys:mossbauer-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped bound-solid Mossbauer regime and evidence under the declared finite primary-source and spectral/model conditions.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-mossbauer-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "dubiel2020-fe-gluconate",
      "sourceId": "dubiel2020-amorphous-fe-gluconate",
      "studyType": "primary-experiment",
      "doi": "10.1016/j.ica.2020.119760",
      "journal": "Inorganica Chimica Acta",
      "volume": "510",
      "issue": "",
      "pages": "119760",
      "system": "Prepared XRD-amorphous Fe-gluconate powder, finite-temperature Fe-57 transmission spectroscopy",
      "preparation": "Prepare the Fe-gluconate specimen by dissolving a crystalline sample in distilled water and drying at 50 degrees C in air; characterize the dried sample by Cu K-alpha X-ray diffraction. Record Fe-57 transmission spectra with a constant-acceleration drive and 1024 analyzer channels, using a room-temperature Co-57/Rh source supplying 14.4 keV gamma rays. The powdered absorber, reported as about 10 mg Fe per cm^2, is held between 78 and 295 K with reported temperature stability within plus/minus 0.1 K. Retain the source distinction between measured transmission and the subsequent thin-absorber spectral/model analysis.",
      "observable": "Sample XRD, velocity-dependent relative gamma transmission and model-fitted spectral/vibrational parameters",
      "finding": "The selected dried Fe-gluconate specimen has a broad XRD pattern classified as amorphous, in contrast with the crystalline hydrated parent specimen. Fe-57 velocity-dependent transmission spectra show resonant attenuation at finite absorber temperatures across the reported 78-295 K study; Figure 2 displays 78 K and 268 K examples. This is a positive bound-solid Mossbauer case whose absorber is not reported to possess perfect periodic crystal order. The three-doublet analysis yields finite widths and distinct center shifts and quadrupole splittings under the stated spectral model. At 295 K its normalized area quantities a1,a2,a3 are 0.49,0.46,0.52 relative to 78 K. The model-derived effective Debye temperatures differ: Table 2 reports 377(9) K from CS1 and 204(4) K from a1. These results illustrate finite-temperature spectral and vibrational sensitivity, with fitted hyperfine/electronic-environment interpretation, rather than a natural-width measurement or absolute recoilless probability.",
      "limitations": [
        "This is one primary experiment context containing sample X-ray characterization and finite-temperature transmission spectroscopy. Its spectra, fitted components, relative areas and Debye interpretations share the same specimen/measurements; they are not independent replications.",
        "The measured sample is powdered Fe-gluconate prepared by dissolution and drying at 50 degrees C. XRD-amorphous is the reported finite-sensitivity diffraction classification, not proof that every atomic neighborhood has no order.",
        "The source reports about 10 mg Fe per cm^2, 1024 channels, source at room temperature, 78-295 K absorber range and temperature stability within plus/minus 0.1 K. These preparation/control values are not error bars on fitted shifts or proof of the thin-absorber approximation for every material.",
        "The quoted typical Table 1 errors are source estimates, without a reconstructed confidence convention or complete covariance/systematic budget. No raw counts, background, thickness correction, calibration fit or independent uncertainty replay was obtained.",
        "The earlier crystalline comparison study and imported Debye/isomer-shift references are not separately reviewed or admitted as additional studies. The original 1959 paper was not obtained as actual article text; a seven-page anthology contents PDF is not that article.",
        "The XRD classification and transmission profiles establish a finite observed case; they do not measure a universal ordering threshold, a unique local coordination geometry or an exactly absent crystalline volume fraction.",
        "Figure 2 displays 78 K and 268 K examples. The study range reaches 295 K; the plotted higher-temperature example must not be relabelled 295 K.",
        "The fitted D1,D2,D3 curves are model components overlaid on measured spectra. Their existence as a useful decomposition does not alone establish three unique phases, three distinct atom positions or an independent magnetic-ordering measurement.",
        "The transmission scale is relative; no new absolute absorption cross section, absolute gamma-emission probability, natural linewidth or independent f measurement is inferred.",
        "Table 1 center shifts are relative to the Co-57/Rh source at room temperature, not automatically to metallic alpha-Fe. Its shift, splitting and full-width-at-half-maximum entries are in mm/s; the fitted widths are not natural nuclear energy widths.",
        "At 295 K the table lists a1,a2,a3 as 0.49,0.46,0.52 after normalization to unity at 78 K. These are relative normalized spectral-area quantities under the stated approximation, not absolute probabilities f(295 K).",
        "The text writes a_k=(A_k/B)/a_k(78 K), with B the background counts. This notation reuses a_k on the normalization reference; retain the stated background and 78 K normalization without claiming a new independent absolute normalization or repaired raw-data definition.",
        "Three-doublet fitting associates D1,D2 with Fe(II) and D3 with Fe(III) from their spectral parameters. Relative component areas are not automatically atom-number fractions when component recoilless fractions differ; no new exact Fe(III) population or unique geometry is admitted.",
        "The source Table 1 nominal area row at 268 K sums to 101.0 percent, so its rounded fitted entries are not promoted to an exact probability-normalized mixture. No correction or recalculated row is invented.",
        "Table 2 gives effective Debye temperatures 377(9) K from CS1 and 204(4) K from a1. Parenthesized errors retain the source convention, without an invented confidence level or full shared-data covariance. The two routes are different weightings/assumptions, not independent proof of one exact Debye temperature.",
        "The page 7 prose refers to Table 3 for these values although the adjacent displayed table is Table 2. This is a source cross-reference discrepancy, not an additional unseen table or a reason to silently renumber the source.",
        "No new Debye integral fit, spectrum decomposition, isotope abundance estimate, magnetic-ordering conclusion, complete phonon spectrum or dynamical lifetime is reproduced."
      ],
      "readExtent": "selected-primary-author-preprint-passages",
      "reviewedLocators": [
        "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
        "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
        "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1016/j.ica.2020.119760",
      "correctionCheck": "Read author arXiv1909.03008v2 pages3-10 through Section3.1 as body text, Table1/2 and Equations1-3; Figure1/2/4 visually checked on3/5/9, and Table1/2 visually checked on6/8. The selected model boundary uses the reviewed text/caption of Figure3; that figure was not visually inspected. Opening Section3.2 was seen but its energetics results and pages11-20 were not admitted or reviewed in full. Publisher full text/raw spectra and earlier comparison/model input articles were not separately obtained or replayed. Crossref/publisher/arXiv metadata checked: Inorganica Chimica Acta510(2020)119760; publisher issue24September2020, Crossref assignsSeptember2020; arXivv1=6September2019, v2=5May2020. Table1 typical-error labels have no reconstructed confidence convention; its268K area row sums101.0percent, the page7 Table3 reference points to displayedTable2, and the page9 normalization notation reuses a_k. These source discrepancies are retained, without a corrected table or absolute-f inference. Crossref relation is empty and update-to absent; no explicit linked correction found in the bounded DOI/title/publisher check, not an exhaustive absence claim."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "legacy-2",
      "kind": "legacy-catalogue",
      "title": "Original Level 2 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-2.json",
      "sha256": "0698f7d404a3a56de934dd35b98a9e884e846f51b3e8a55af40b916f258a0a61",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    },
    {
      "id": "mossbauer1961-nobel-lecture",
      "kind": "research-publication",
      "title": "Recoilless nuclear resonance absorption of gamma radiation",
      "authors": [
        "Rudolf L. Mössbauer"
      ],
      "year": 1961,
      "doi": null,
      "url": "https://www.nobelprize.org/uploads/2018/06/mossbauer-lecture.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-lecture-passages",
        "locators": [
          "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction",
          "Nobel lecture printed pages 590-592, Equation 2: quantized internal oscillators, unchanged vibrational states, whole-body momentum and negligible translational energy",
          "Nobel lecture printed pages 593-595, Figure 5, Equation 3 and Figure 6: qualitative Einstein/Debye limits, temperature-dependent recoilless probability and narrow-component distinction"
        ],
        "limit": "Actually read the Nobel lecture scan visually on printed pages584-595 (PDF1-12), including Figures1-6 and Equations1-3. The selected formal citations retain pages584-587 and590-595; intervening588-589 give historical experimental context. Pages596-601 were not reviewed or admitted. The delivered lecture is dated11December1961, and this source is the Nobel-hosted lecture scan, not the separate1962 Science publication or the unread1959 journal article. No DOI is assigned to this exact lecture object. The PDF explicitly develops a qualitative model without its full mathematical formulation, recounts the author earlier work and is not counted as independent experimental replication. The bounded official-title/URL check revealed no linked correction notice; no exhaustive historical correction assertion or full-theory/numerical replay."
      }
    },
    {
      "id": "dubiel2020-amorphous-fe-gluconate",
      "kind": "research-publication",
      "title": "Mössbauer spectroscopic study of amorphous Fe-gluconate",
      "authors": [
        "Stanisław M. Dubiel",
        "Łukasz Gondek",
        "Jan Żukrowski"
      ],
      "year": 2020,
      "doi": "10.1016/j.ica.2020.119760",
      "url": "https://arxiv.org/pdf/1909.03008v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-author-preprint-passages",
        "locators": [
          "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
          "Author arXiv 1909.03008v2 pages 4-6, Section 2.2, Figure 2 and Table 1: finite-temperature transmission acquisition, three-doublet fits, reference-dependent shifts, fitted widths and typical errors",
          "Author arXiv 1909.03008v2 pages 6-10 through Section 3.1, Equations 1-3, Figures 3-4 and Table 2: center shift versus relative spectral area, Debye assumptions and different inferred temperatures"
        ],
        "limit": "Read author arXiv1909.03008v2 pages3-10 through Section3.1 as body text, Table1/2 and Equations1-3; Figure1/2/4 visually checked on3/5/9, and Table1/2 visually checked on6/8. The selected model boundary uses the reviewed text/caption of Figure3; that figure was not visually inspected. Opening Section3.2 was seen but its energetics results and pages11-20 were not admitted or reviewed in full. Publisher full text/raw spectra and earlier comparison/model input articles were not separately obtained or replayed. Crossref/publisher/arXiv metadata checked: Inorganica Chimica Acta510(2020)119760; publisher issue24September2020, Crossref assignsSeptember2020; arXivv1=6September2019, v2=5May2020. Table1 typical-error labels have no reconstructed confidence convention; its268K area row sums101.0percent, the page7 Table3 reference points to displayedTable2, and the page9 normalization notation reuses a_k. These source discrepancies are retained, without a corrected table or absolute-f inference. Crossref relation is empty and update-to absent; no explicit linked correction found in the bounded DOI/title/publisher check, not an exhaustive absence claim."
      }
    }
  ]
};

/** Separate zero-phonon momentum accounting, finite amorphous-host spectra and reference-dependent spectral/vibrational inference. */
export function validateMossbauerContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Mossbauer ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
