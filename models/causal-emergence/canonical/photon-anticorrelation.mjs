import assert from "node:assert/strict";

export const PHOTON_ANTICORRELATION_CHECKS = new Map();
export const PHOTON_ANTICORRELATION_ANALYTICAL_SOURCES = new Map();
export const PHOTON_ANTICORRELATION_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [
    [
      "heralded-optical-counting-context",
      "M-phys-heralded-optical-counting-context",
      [
        "grangier1986-counting"
      ]
    ],
    [
      "optical-counting-response-context",
      "M-phys-optical-counting-response-context",
      [
        "grangier1986-counting"
      ]
    ],
    [
      "optical-anticorrelation-inference-context",
      "M-phys-optical-anticorrelation-inference-context",
      [
        "grangier1986-anticorrelation-inference"
      ]
    ]
  ],
  "observations": [
    [
      "triggered-optical-coincidences",
      "C-phys-triggered-optical-coincidences",
      [
        "grangier1986-counting"
      ]
    ],
    [
      "triggered-optical-anticorrelation",
      "C-phys-triggered-optical-anticorrelation",
      [
        "grangier1986-anticorrelation-inference"
      ]
    ]
  ],
  "dependencies": [
    [
      "heralded-optical-counting-context-triggered-optical-coincidences",
      "heralded-optical-counting-context",
      "triggered-optical-coincidences",
      "M-phys-triggered-optical-coincidences",
      "measurement-context"
    ],
    [
      "optical-counting-response-context-triggered-optical-coincidences",
      "optical-counting-response-context",
      "triggered-optical-coincidences",
      "M-phys-triggered-optical-coincidences",
      "measurement-context"
    ],
    [
      "triggered-optical-coincidences-triggered-optical-anticorrelation",
      "triggered-optical-coincidences",
      "triggered-optical-anticorrelation",
      "M-phys-triggered-optical-anticorrelation",
      "interpretation-dependency"
    ],
    [
      "optical-counting-response-context-triggered-optical-anticorrelation",
      "optical-counting-response-context",
      "triggered-optical-anticorrelation",
      "M-phys-triggered-optical-anticorrelation",
      "interpretation-dependency"
    ],
    [
      "optical-anticorrelation-inference-context-triggered-optical-anticorrelation",
      "optical-anticorrelation-inference-context",
      "triggered-optical-anticorrelation",
      "M-phys-triggered-optical-anticorrelation",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "grangier1986-counting",
    "grangier1986-anticorrelation-inference"
  ],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "grangier1986-optical-anticorrelation",
      "kind": "research-publication",
      "title": "Experimental Evidence for a Photon Anticorrelation Effect on a Beam Splitter: A New Light on Single-Photon Interferences",
      "authors": [
        "P. Grangier",
        "G. Roger",
        "A. Aspect"
      ],
      "year": 1986,
      "doi": "10.1209/0295-5075/1/4/004",
      "url": "https://www.cpt.univ-mrs.fr/~verga/pdfs/Grangier-1986.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
        ],
        "limit": "All seven printed pages 173-179 read and visually checked, including every equation and figure. This is the 15 February 1986 journal scan, not the 1991 reprint or the longer conference article. No complete event stream, selected-point transmitted singles count, full detector calibration or statistical likelihood is supplied. The referenced source-construction article is not read; atomic species, wavelengths and level identities are not inferred."
      }
    }
  ],
  "claims": [
    {
      "id": "M-phys-heralded-optical-counting-context",
      "kind": "method",
      "statement": "A two-photon-excited radiative cascade emits distinct frequencies nu_1 and nu_2. Detecting nu_1 triggers a gate for photomultipliers at the transmitted and reflected nu_2 outputs of a beam splitter. The intermediate lifetime is 4.7 ns; the selected gate is approximately 9 ns. The counters register gates, each output and joint output detections. This is a conditional detection preparation, not an ideal deterministic source in a single spatial mode.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The named article refers source construction to an earlier paper. Atomic species, transition wavelengths, collection geometry in full detail and a complete state tomography are not supplied here. The authors explicitly distinguish their preparation from an ideal shuttered, fully collected single-photon source.",
        "Multiple cascades, finite collection, detector inefficiency and dark triggers remain possible. A herald does not guarantee that an emitted nu_2 photon reaches or is detected at either output."
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "M-phys-optical-counting-response-context",
      "kind": "method",
      "statement": "Time-to-amplitude converters and thresholds select output detections after a trigger; the two gates are superimposed within 0.1 ns and monitored by a third converter. The source excitation rate is stabilized within a few percent. Collection solid angle, optical transmission and detector efficiency enter the global efficiencies. In the published cascade model, f(w) combines 1-exp(-w/tau_s) with an angular-correlation factor, while N*w accounts for other cascades within the gate.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The paper describes f(w) as close to one, not exactly one. The selected gate maximizes a source-reported counting-error criterion; that optimization, full efficiency calibration, dead-time response and timing records are not independently replayed.",
        "Selected trigger and reflected-output dark rates are reported with the counts. The complete coincidence-background correction and covariance are not specified. The separate interference dark correction must not be applied to the anticorrelation counts by assumption."
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "C-phys-triggered-optical-coincidences",
      "kind": "review-finding",
      "statement": "At the selected low-excitation setting, the paper reports 9 joint-output coincidences in approximately 5 hours. The gate rate N_1 is approximately 8800 s^-1, including a 300 s^-1 dark rate; the reflected singles rate N_r is approximately 5 s^-1 with dark rate 0.02 s^-1. N_t, N_r and N_c denote gated transmitted singles, reflected singles and coincidences, and the observed probabilities are p_t=N_t/N_1, p_r=N_r/N_1 and p_c=N_c/N_1.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are printed selected-point summaries, not a complete event table. The selected transmitted rate N_t, exact exposure, joint calibration and event stream are absent, so alpha and its uncertainty cannot be exactly reconstructed locally from these rounded values.",
        "The reported dark-rate inclusions do not specify an exhaustive background-subtraction procedure. Nine detections do not imply ideal zero coincidences, unit efficiency or a measured particle trajectory."
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "M-phys-optical-anticorrelation-inference-context",
      "kind": "method",
      "statement": "The estimator is alpha=p_c/(p_t*p_r)=N_c*N_1/(N_t*N_r). For the same ensemble of gates, the tested semiclassical model uses a nonnegative gate-averaged incident intensity, fixed splitter/output efficiencies and the linear low-detection-probability response p_t=a_t*w*<i>, p_r=a_r*w*<i>, p_c=a_t*a_r*w^2*<i^2>. Cauchy-Schwarz gives alpha>=1. The published quantum cascade model instead gives alpha=[2*f(w)*N*w+(N*w)^2]/[f(w)+N*w]^2, including accidental cascades.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The classical bound is conditional on this common-intensity, fixed-response photodetection model, including the factorized conditional output response in its coincidence formula. It does not exclude every imaginable classical detector model. Saturated, nonlinear or spuriously correlated detector responses require separate validation.",
        "N is the cascade-excitation rate, not the trigger rate N_1; the model relates them by N_1=epsilon_1*N. No exact f(w), source intensity, all efficiencies or full likelihood are reconstructed. The published comparison uses the same counted data, not an independent experiment."
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    },
    {
      "id": "C-phys-triggered-optical-anticorrelation",
      "kind": "review-finding",
      "statement": "The selected experiment reports alpha=0.18 +/- 0.06, below the stated semiclassical bound 1; Figure 2 error bars denote one standard deviation. For that setting the publication gives a classical expected coincidence count of at least 50 versus the 9 observed and reports a separation exceeding 13 standard deviations. A pulsed-diode control matched trigger and singles probabilities and satisfied the classical inequality. This supports nonclassical optical counting within the declared response assumptions.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction",
          "role": "supports",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The error distance is source-reported, not an independently recomputed Gaussian tail, exact small-count likelihood, trial-corrected significance or proof of zero systematic error. Rounded 9-versus-at-least-50 counts do not reproduce the full comparison or an uncertainty model.",
        "Using the same source and trigger, a separately configured Mach-Zehnder experiment gave gated fringe visibility above 98 percent, with a dark-count correction below 0.3 percent. The 98.7 +/- 0.5 percent value is its ungated calibration. The arrangements are mutually exclusive; their shared source is not independent replication or a simultaneous which-path/interference measurement.",
        "The result is compatible with a near-single-photon preparation, not proof of a literal unsplit trajectory, a deterministic photon source, electromagnetic-field quantization in every regime, all photon properties or a complete QED-to-macroscopic-light chain."
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    },
    {
      "id": "M-phys-triggered-optical-coincidences",
      "kind": "method",
      "statement": "Use the actual heralded source, matched gates and measured detector-response boundaries to identify the printed count summary. Gate normalization preserves failed detections and dark triggers; it is not a count of all emitted photons.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These descriptive measurement dependencies preserve preparation and response provenance without asserting causation between records."
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "M-phys-triggered-optical-anticorrelation",
      "kind": "method",
      "statement": "Interpret the same gated coincidence and singles data using the stated estimator, intensity-model inequality and finite-response boundaries. Keep the reported uncertainty and classical reference separate from measured counts and from the idealized quantum-source prediction.",
      "scope": "The Grangier-Roger-Aspect 1986 triggered radiative-cascade beam-splitter experiment and its separately configured interference comparison.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "method",
          "note": "Supports this named counting experiment, response model or reported inference; no independent acquisition or exact local replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These descriptive interpretation links add no independent acquisition, universal ontology or exact local statistical replay."
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:heralded-optical-counting-context",
      "name": "Herald-triggered optical counting",
      "kind": "context",
      "description": "A two-photon-excited radiative cascade emits distinct frequencies nu_1 and nu_2. Detecting nu_1 triggers a gate for photomultipliers at the transmitted and reflected nu_2 outputs of a beam splitter. The intermediate lifetime is 4.7 ns; the selected gate is approximately 9 ns. The counters register gates, each output and joint output detections. This is a conditional detection preparation, not an ideal deterministic source in a single spatial mode.",
      "claimIds": [
        "M-phys-heralded-optical-counting-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
        }
      ],
      "openObligations": [
        "The named article refers source construction to an earlier paper. Atomic species, transition wavelengths, collection geometry in full detail and a complete state tomography are not supplied here. The authors explicitly distinguish their preparation from an ideal shuttered, fully collected single-photon source.",
        "Multiple cascades, finite collection, detector inefficiency and dark triggers remain possible. A herald does not guarantee that an emitted nu_2 photon reaches or is detected at either output."
      ]
    },
    {
      "id": "phys:optical-counting-response-context",
      "name": "Optical gate and detector response",
      "kind": "context",
      "description": "Time-to-amplitude converters and thresholds select output detections after a trigger; the two gates are superimposed within 0.1 ns and monitored by a third converter. The source excitation rate is stabilized within a few percent. Collection solid angle, optical transmission and detector efficiency enter the global efficiencies. In the published cascade model, f(w) combines 1-exp(-w/tau_s) with an angular-correlation factor, while N*w accounts for other cascades within the gate.",
      "claimIds": [
        "M-phys-optical-counting-response-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
        }
      ],
      "openObligations": [
        "The paper describes f(w) as close to one, not exactly one. The selected gate maximizes a source-reported counting-error criterion; that optimization, full efficiency calibration, dead-time response and timing records are not independently replayed.",
        "Selected trigger and reflected-output dark rates are reported with the counts. The complete coincidence-background correction and covariance are not specified. The separate interference dark correction must not be applied to the anticorrelation counts by assumption."
      ]
    },
    {
      "id": "phys:triggered-optical-coincidences",
      "name": "Selected triggered coincidence counts",
      "kind": "scoped-process",
      "description": "At the selected low-excitation setting, the paper reports 9 joint-output coincidences in approximately 5 hours. The gate rate N_1 is approximately 8800 s^-1, including a 300 s^-1 dark rate; the reflected singles rate N_r is approximately 5 s^-1 with dark rate 0.02 s^-1. N_t, N_r and N_c denote gated transmitted singles, reflected singles and coincidences, and the observed probabilities are p_t=N_t/N_1, p_r=N_r/N_1 and p_c=N_c/N_1.",
      "claimIds": [
        "C-phys-triggered-optical-coincidences"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control"
        }
      ],
      "openObligations": [
        "These are printed selected-point summaries, not a complete event table. The selected transmitted rate N_t, exact exposure, joint calibration and event stream are absent, so alpha and its uncertainty cannot be exactly reconstructed locally from these rounded values.",
        "The reported dark-rate inclusions do not specify an exhaustive background-subtraction procedure. Nine detections do not imply ideal zero coincidences, unit efficiency or a measured particle trajectory."
      ]
    },
    {
      "id": "phys:optical-anticorrelation-inference-context",
      "name": "Conditional optical anticorrelation criterion",
      "kind": "context",
      "description": "The estimator is alpha=p_c/(p_t*p_r)=N_c*N_1/(N_t*N_r). For the same ensemble of gates, the tested semiclassical model uses a nonnegative gate-averaged incident intensity, fixed splitter/output efficiencies and the linear low-detection-probability response p_t=a_t*w*<i>, p_r=a_r*w*<i>, p_c=a_t*a_r*w^2*<i^2>. Cauchy-Schwarz gives alpha>=1. The published quantum cascade model instead gives alpha=[2*f(w)*N*w+(N*w)^2]/[f(w)+N*w]^2, including accidental cascades.",
      "claimIds": [
        "M-phys-optical-anticorrelation-inference-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors"
        }
      ],
      "openObligations": [
        "The classical bound is conditional on this common-intensity, fixed-response photodetection model, including the factorized conditional output response in its coincidence formula. It does not exclude every imaginable classical detector model. Saturated, nonlinear or spuriously correlated detector responses require separate validation.",
        "N is the cascade-excitation rate, not the trigger rate N_1; the model relates them by N_1=epsilon_1*N. No exact f(w), source intensity, all efficiencies or full likelihood are reconstructed. The published comparison uses the same counted data, not an independent experiment."
      ]
    },
    {
      "id": "phys:triggered-optical-anticorrelation",
      "name": "Reported optical anticorrelation",
      "kind": "scoped-process",
      "description": "The selected experiment reports alpha=0.18 +/- 0.06, below the stated semiclassical bound 1; Figure 2 error bars denote one standard deviation. For that setting the publication gives a classical expected coincidence count of at least 50 versus the 9 observed and reports a separation exceeding 13 standard deviations. A pulsed-diode control matched trigger and singles probabilities and satisfied the classical inequality. This supports nonclassical optical counting within the declared response assumptions.",
      "claimIds": [
        "C-phys-triggered-optical-anticorrelation"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control"
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
        }
      ],
      "openObligations": [
        "The error distance is source-reported, not an independently recomputed Gaussian tail, exact small-count likelihood, trial-corrected significance or proof of zero systematic error. Rounded 9-versus-at-least-50 counts do not reproduce the full comparison or an uncertainty model.",
        "Using the same source and trigger, a separately configured Mach-Zehnder experiment gave gated fringe visibility above 98 percent, with a dark-count correction below 0.3 percent. The 98.7 +/- 0.5 percent value is its ungated calibration. The arrangements are mutually exclusive; their shared source is not independent replication or a simultaneous which-path/interference measurement.",
        "The result is compatible with a near-single-photon preparation, not proof of a literal unsplit trajectory, a deterministic photon source, electromagnetic-field quantization in every regime, all photon properties or a complete QED-to-macroscopic-light chain."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:heralded-optical-counting-context-triggered-optical-coincidences",
      "source": "phys:heralded-optical-counting-context",
      "target": "phys:triggered-optical-coincidences",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The named herald, gate and output counters select the measured events; no photon-number or trajectory guarantee is imposed.",
      "claimIds": [
        "M-phys-triggered-optical-coincidences"
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "physics:optical-counting-response-context-triggered-optical-coincidences",
      "source": "phys:optical-counting-response-context",
      "target": "phys:triggered-optical-coincidences",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The reported timing, dark rates and incomplete calibration bound the interpretation of the selected count summary.",
      "claimIds": [
        "M-phys-triggered-optical-coincidences"
      ],
      "contextIds": [
        "grangier1986-counting"
      ]
    },
    {
      "id": "physics:triggered-optical-coincidences-triggered-optical-anticorrelation",
      "source": "phys:triggered-optical-coincidences",
      "target": "phys:triggered-optical-anticorrelation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same counts supply the reported normalized statistic; this interpretation is not independent evidence or a recreated likelihood.",
      "claimIds": [
        "M-phys-triggered-optical-anticorrelation"
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    },
    {
      "id": "physics:optical-counting-response-context-triggered-optical-anticorrelation",
      "source": "phys:optical-counting-response-context",
      "target": "phys:triggered-optical-anticorrelation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The inequality test retains the actual detector-response boundary and does not borrow the interferometer dark correction.",
      "claimIds": [
        "M-phys-triggered-optical-anticorrelation"
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    },
    {
      "id": "physics:optical-anticorrelation-inference-context-triggered-optical-anticorrelation",
      "source": "phys:optical-anticorrelation-inference-context",
      "target": "phys:triggered-optical-anticorrelation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The classical bound and quantum-source comparison require their stated common-intensity, efficiency and counting assumptions.",
      "claimIds": [
        "M-phys-triggered-optical-anticorrelation"
      ],
      "contextIds": [
        "grangier1986-anticorrelation-inference"
      ]
    }
  ],
  "studies": [
    {
      "id": "grangier1986-counting",
      "sourceId": "grangier1986-optical-anticorrelation",
      "studyType": "primary-experiment",
      "doi": "10.1209/0295-5075/1/4/004",
      "journal": "Europhysics Letters",
      "volume": "1",
      "issue": "4",
      "pages": "173-179",
      "system": "Triggered radiative-cascade beam-splitter counting",
      "preparation": "A two-photon-excited radiative cascade emits distinct frequencies nu_1 and nu_2. Detecting nu_1 triggers a gate for photomultipliers at the transmitted and reflected nu_2 outputs of a beam splitter. The intermediate lifetime is 4.7 ns; the selected gate is approximately 9 ns. The counters register gates, each output and joint output detections. This is a conditional detection preparation, not an ideal deterministic source in a single spatial mode.",
      "observable": "Herald gates, transmitted/reflected singles and joint-output coincidence counts",
      "finding": "At the selected low-excitation setting, the paper reports 9 joint-output coincidences in approximately 5 hours. The gate rate N_1 is approximately 8800 s^-1, including a 300 s^-1 dark rate; the reflected singles rate N_r is approximately 5 s^-1 with dark rate 0.02 s^-1. N_t, N_r and N_c denote gated transmitted singles, reflected singles and coincidences, and the observed probabilities are p_t=N_t/N_1, p_r=N_r/N_1 and p_c=N_c/N_1.",
      "limitations": [
        "Partial printed rates and exposure do not provide a complete event stream, full source-state characterization or independent detector calibration.",
        "The named article refers source construction to an earlier paper. Atomic species, transition wavelengths, collection geometry in full detail and a complete state tomography are not supplied here. The authors explicitly distinguish their preparation from an ideal shuttered, fully collected single-photon source.",
        "Multiple cascades, finite collection, detector inefficiency and dark triggers remain possible. A herald does not guarantee that an emitted nu_2 photon reaches or is detected at either output.",
        "These are printed selected-point summaries, not a complete event table. The selected transmitted rate N_t, exact exposure, joint calibration and event stream are absent, so alpha and its uncertainty cannot be exactly reconstructed locally from these rounded values.",
        "The reported dark-rate inclusions do not specify an exhaustive background-subtraction procedure. Nine detections do not imply ideal zero coincidences, unit efficiency or a measured particle trajectory."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
        "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
        "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://doi.org/10.1209/0295-5075/1/4/004",
      "correctionCheck": "The journal scan identifies 15 February 1986, volume 1(4), pages 173-179 and the three authors; DOI metadata agrees. No linked correction was found in the checked DOI/title search. The seven-page paper, not the later reprint or longer conference account, supplies this bounded reading."
    },
    {
      "id": "grangier1986-anticorrelation-inference",
      "sourceId": "grangier1986-optical-anticorrelation",
      "studyType": "computational-analysis",
      "doi": "10.1209/0295-5075/1/4/004",
      "journal": "Europhysics Letters",
      "volume": "1",
      "issue": "4",
      "pages": "173-179",
      "system": "Triggered radiative-cascade beam-splitter counting",
      "preparation": "The estimator is alpha=p_c/(p_t*p_r)=N_c*N_1/(N_t*N_r). For the same ensemble of gates, the tested semiclassical model uses a nonnegative gate-averaged incident intensity, fixed splitter/output efficiencies and the linear low-detection-probability response p_t=a_t*w*<i>, p_r=a_r*w*<i>, p_c=a_t*a_r*w^2*<i^2>. Cauchy-Schwarz gives alpha>=1. The published quantum cascade model instead gives alpha=[2*f(w)*N*w+(N*w)^2]/[f(w)+N*w]^2, including accidental cascades.",
      "observable": "Count-normalized alpha compared with the specified classical bound and quantum cascade model",
      "finding": "The selected experiment reports alpha=0.18 +/- 0.06, below the stated semiclassical bound 1; Figure 2 error bars denote one standard deviation. For that setting the publication gives a classical expected coincidence count of at least 50 versus the 9 observed and reports a separation exceeding 13 standard deviations. A pulsed-diode control matched trigger and singles probabilities and satisfied the classical inequality. This supports nonclassical optical counting within the declared response assumptions.",
      "limitations": [
        "The same source, acquisition and gate selection underlie both study records. No independent replication, exact statistical replay or proof of all photon properties is supplied.",
        "The classical bound is conditional on this common-intensity, fixed-response photodetection model, including the factorized conditional output response in its coincidence formula. It does not exclude every imaginable classical detector model. Saturated, nonlinear or spuriously correlated detector responses require separate validation.",
        "N is the cascade-excitation rate, not the trigger rate N_1; the model relates them by N_1=epsilon_1*N. No exact f(w), source intensity, all efficiencies or full likelihood are reconstructed. The published comparison uses the same counted data, not an independent experiment.",
        "The error distance is source-reported, not an independently recomputed Gaussian tail, exact small-count likelihood, trial-corrected significance or proof of zero systematic error. Rounded 9-versus-at-least-50 counts do not reproduce the full comparison or an uncertainty model.",
        "Using the same source and trigger, a separately configured Mach-Zehnder experiment gave gated fringe visibility above 98 percent, with a dark-count correction below 0.3 percent. The 98.7 +/- 0.5 percent value is its ungated calibration. The arrangements are mutually exclusive; their shared source is not independent replication or a simultaneous which-path/interference measurement.",
        "The result is compatible with a near-single-photon preparation, not proof of a literal unsplit trajectory, a deterministic photon source, electromagnetic-field quantization in every regime, all photon properties or a complete QED-to-macroscopic-light chain."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
        "Page 176, Equations 7a-8 and Figure 2: collection/detection efficiencies, finite-gate overlap, accidental cascades, timing and reported statistical errors",
        "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
        "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
      ],
      "metadataCheckedAt": "2026-10-18",
      "metadataUrl": "https://doi.org/10.1209/0295-5075/1/4/004",
      "correctionCheck": "The journal scan identifies 15 February 1986, volume 1(4), pages 173-179 and the three authors; DOI metadata agrees. No linked correction was found in the checked DOI/title search. The seven-page paper, not the later reprint or longer conference account, supplies this bounded reading."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:heralded-optical-counting-context",
      "role": "experimental-context",
      "denotes": "The actual source, herald, gate and output counters of one named quantum-optical experiment.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-heralded-optical-counting-context"
      ]
    },
    {
      "nodeId": "phys:optical-counting-response-context",
      "role": "experimental-context",
      "denotes": "Reported hardware timing and source/detector-response boundaries, not a new observation.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-optical-counting-response-context"
      ]
    },
    {
      "nodeId": "phys:triggered-optical-coincidences",
      "role": "scoped-phenomenon",
      "denotes": "A finite measured coincidence and singles-count summary under a declared herald and response.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-triggered-optical-coincidences"
      ]
    },
    {
      "nodeId": "phys:optical-anticorrelation-inference-context",
      "role": "model-context",
      "denotes": "The count normalization and classical/quantum comparison under declared intensity and detector assumptions.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-optical-anticorrelation-inference-context"
      ]
    },
    {
      "nodeId": "phys:triggered-optical-anticorrelation",
      "role": "scoped-phenomenon",
      "denotes": "A published response-conditioned rejection of the stated semiclassical counting bound, with a separate same-source interference comparison.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-triggered-optical-anticorrelation"
      ]
    }
  ]
};

/** Preserve the measured counts, detector assumptions and conditional optical inference. */
export function validatePhotonAnticorrelationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Photon anticorrelation ${kind} changed ${id}: preserve counts, response and conditional interpretation`);
    }
  }
}
