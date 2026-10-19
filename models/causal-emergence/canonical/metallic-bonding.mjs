import assert from "node:assert/strict";

export const METALLIC_BONDING_CHECKS = new Map();
export const METALLIC_BONDING_ANALYTICAL_SOURCES = new Map();
export const METALLIC_BONDING_STUDY_TYPES = new Map([["gaissmaier2020-na-bulk", "computational-analysis"], ["potorochin2022-na-film", "primary-experiment"]]);
export const METALLIC_BONDING_ADMISSION = {
  "definitions": [
    [
      "phys:metal-cohesion-reference",
      "D-phys-metal-cohesion-reference"
    ],
    [
      "phys:metal-spectral-transport-boundary",
      "D-phys-metal-spectral-transport-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:spatial-order-symmetry-boundary-metal-cohesion-reference",
      [
        "phys:spatial-order-symmetry-boundary",
        "phys:metal-cohesion-reference"
      ]
    ],
    [
      "physics:spatial-order-symmetry-boundary-metal-spectral-transport-boundary",
      [
        "phys:spatial-order-symmetry-boundary",
        "phys:metal-spectral-transport-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "gaissmaier2020-na-bulk-context",
      "M-phys-gaissmaier2020-na-bulk-context",
      [
        "gaissmaier2020-na-bulk"
      ]
    ],
    [
      "potorochin2022-na-film-context",
      "M-phys-potorochin2022-na-film-context",
      [
        "potorochin2022-na-film"
      ]
    ]
  ],
  "observations": [
    [
      "gaissmaier2020-na-cohesion",
      "C-phys-gaissmaier2020-na-cohesion",
      [
        "gaissmaier2020-na-bulk"
      ]
    ],
    [
      "potorochin2022-na-spectrum",
      "C-phys-potorochin2022-na-spectrum",
      [
        "potorochin2022-na-film"
      ]
    ],
    [
      "potorochin2022-na-band-inference",
      "C-phys-potorochin2022-na-band-inference",
      [
        "potorochin2022-na-film"
      ]
    ],
    [
      "metallic-bonding-source-scope",
      "C-phys-metallic-bonding-source-scope",
      [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    ]
  ],
  "dependencies": [
    [
      "gaissmaier2020-na-bulk-context-gaissmaier2020-na-cohesion",
      "gaissmaier2020-na-bulk-context",
      "gaissmaier2020-na-cohesion",
      "M-phys-gaissmaier2020-na-bulk-context",
      "computation-context"
    ],
    [
      "potorochin2022-na-film-context-potorochin2022-na-spectrum",
      "potorochin2022-na-film-context",
      "potorochin2022-na-spectrum",
      "M-phys-potorochin2022-na-film-context",
      "measurement-context"
    ],
    [
      "potorochin2022-na-spectrum-potorochin2022-na-band-inference",
      "potorochin2022-na-spectrum",
      "potorochin2022-na-band-inference",
      "M-phys-potorochin2022-na-band-inference",
      "interpretation-dependency"
    ],
    [
      "metal-spectral-transport-boundary-potorochin2022-na-band-inference",
      "metal-spectral-transport-boundary",
      "potorochin2022-na-band-inference",
      "M-phys-potorochin2022-na-band-inference",
      "interpretation-dependency"
    ],
    [
      "gaissmaier2020-na-cohesion-metallic-bonding-source-scope",
      "gaissmaier2020-na-cohesion",
      "metallic-bonding-source-scope",
      "M-phys-metallic-bonding-source-scope",
      "interpretation-dependency"
    ],
    [
      "potorochin2022-na-band-inference-metallic-bonding-source-scope",
      "potorochin2022-na-band-inference",
      "metallic-bonding-source-scope",
      "M-phys-metallic-bonding-source-scope",
      "interpretation-dependency"
    ],
    [
      "metal-cohesion-reference-metallic-bonding-source-scope",
      "metal-cohesion-reference",
      "metallic-bonding-source-scope",
      "M-phys-metallic-bonding-source-scope",
      "interpretation-dependency"
    ],
    [
      "metal-spectral-transport-boundary-metallic-bonding-source-scope",
      "metal-spectral-transport-boundary",
      "metallic-bonding-source-scope",
      "M-phys-metallic-bonding-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "gaissmaier2020-na-bulk",
    "potorochin2022-na-film"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-gaissmaier2020-na-bulk-context",
      [
        "gaissmaier2020-na-cohesion"
      ]
    ],
    [
      "C-phys-gaissmaier2020-na-cohesion",
      [
        "gaissmaier2020-na-cohesion"
      ]
    ],
    [
      "M-phys-potorochin2022-na-film-context",
      [
        "potorochin2022-na-arpes"
      ]
    ],
    [
      "C-phys-potorochin2022-na-spectrum",
      [
        "potorochin2022-na-arpes"
      ]
    ],
    [
      "C-phys-potorochin2022-na-band-inference",
      [
        "potorochin2022-na-arpes"
      ]
    ],
    [
      "M-phys-potorochin2022-na-band-inference",
      [
        "potorochin2022-na-arpes"
      ]
    ],
    [
      "C-phys-metallic-bonding-source-scope",
      [
        "gaissmaier2020-na-cohesion",
        "potorochin2022-na-arpes"
      ]
    ],
    [
      "M-phys-metallic-bonding-source-scope",
      [
        "gaissmaier2020-na-cohesion",
        "potorochin2022-na-arpes"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-metal-cohesion-reference",
      "kind": "review-finding",
      "statement": "For the supplied periodic sodium calculation with N atoms per bulk unit cell, define positive cohesive energy per atom as E_coh=E_atom-E_bulk/N, relative to neutral isolated atoms computed with a compatible electronic method and reference. E_coh in eV/atom is a total-energy difference; the equilibrium lattice parameter and bulk modulus come from a specified fitted energy-volume curve. Ground-state electronic cohesion, quasiparticle band energies and driven charge/heat transport are different quantities.",
      "scope": "Declared neutral-atom reference and equation-of-state convention for a finite selected metallic sodium DFT model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Positive cohesion in one supplied bulk model is not proof of global phase stability, a unique microscopic bond partition, universal non-directional forces or a carrier-number threshold.",
        "A static electronic calculation and finite-temperature measurements require their own zero-point/thermal conventions. A numerical smearing width is not automatically a measured sample temperature.",
        "No universal free-electron cohesion formula or transport law is supplied; electronic kinetic, electron-ion and correlation contributions are not separately measured by this energy difference."
      ]
    },
    {
      "id": "D-phys-metal-spectral-transport-boundary",
      "kind": "review-finding",
      "statement": "For the supplied sodium film, an ARPES map records photoelectron intensity versus binding energy and assigned crystal momentum. A near-Fermi-level intensity contour and a fitted occupied dispersion test a state-specific quasiparticle band description. Intensity, model-assisted momentum assignment, fitted bandwidth, comparison-dependent effective mass and macroscopic electrical/thermal transport remain distinct evidence roles; a spectral map is not a direct real-space electron-density image or a current measurement.",
      "scope": "Working evidence boundary for the selected Na film ARPES experiment and its source band interpretation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A nearly parabolic occupied band in this sodium preparation does not make every metal a free-electron gas or establish universal screening, ductility, malleability or thermal conductivity.",
        "The source discusses matrix elements, film orientation, angular calibration and final-state effects. An occupied spectral contour does not give a unique localized-bond decomposition or an atom-count onset of metallicity.",
        "Different excitation probes and theoretical references need not produce interchangeable effective masses. No new screening-response or universal electron-sharing parameter is reconstructed."
      ]
    },
    {
      "id": "M-phys-gaissmaier2020-na-bulk-context",
      "kind": "method",
      "statement": "Use the source PAW/VASP ground-state electronic calculation for supplied periodic Na bulk structures. The principal functional is PBE-GGA; BEEF-vdW provides a separate functional/ensemble comparison. The reported bulk settings include a 340 eV plane-wave cutoff, 0.15 inverse-Angstrom k-point mesh density, 0.2 eV Methfessel-Paxton smearing and a 1e-5 eV electronic convergence criterion. Uniformly expand/compress each unit cell and fit the stabilized-jellium equation of state to obtain an equilibrium and bulk modulus. Compare bulk energy per atom with an isolated neutral atom under the stated cohesive-energy convention.",
      "scope": "Selected Na bcc periodic bulk-energy calculation and equation-of-state fitting protocol.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the selected Na bcc outputs are admitted; other phases, lithium values, surface energetics, NEB diffusion and battery behavior are outside this admission. The branch is not asserted to be the unique global 0 K phase.",
        "BEEF-vdW functional-ensemble spread is a model uncertainty estimate, not a statistical experimental error or a PBE error bar. The experimental-row parentheses in Table 1 are zero-point corrections, not measurement uncertainties.",
        "The Table 1 experimental reference row is imported from another source that was not read as primary evidence here; it does not create an experimental context or an independent validation dataset.",
        "No VASP inputs, energy-volume data, fitted covariance, atomic reference calculation or independent numerical replay was executed. Static binding and bulk modulus do not measure current, heat flow, ductility or electronic scattering.",
        "The selected bulk passages do not detail a separate isolated-atom spin/cell convergence protocol; no such reference protocol or new atom-energy calculation is reconstructed."
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk"
      ]
    },
    {
      "id": "C-phys-gaissmaier2020-na-cohesion",
      "kind": "review-finding",
      "statement": "For the supplied Na bcc branch, Table 1 reports PBE a0=4.19 Angstrom, E_coh=1.09 eV/atom and B0=7.96 GPa; BEEF-vdW gives a0=4.18 Angstrom, E_coh=1.15 eV/atom and B0=8.48 GPa. The BEEF cohesive-energy parenthesis 0.25 eV/atom represents the source functional-ensemble standard deviation. These are source computational outputs, not independently measured constants.",
      "scope": "Source-predicted Na bcc cohesion and static equilibrium parameters for two declared electronic approximations.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Only the selected Na bcc outputs are admitted; other phases, lithium values, surface energetics, NEB diffusion and battery behavior are outside this admission. The branch is not asserted to be the unique global 0 K phase.",
        "BEEF-vdW functional-ensemble spread is a model uncertainty estimate, not a statistical experimental error or a PBE error bar. The experimental-row parentheses in Table 1 are zero-point corrections, not measurement uncertainties.",
        "The Table 1 experimental reference row is imported from another source that was not read as primary evidence here; it does not create an experimental context or an independent validation dataset.",
        "No VASP inputs, energy-volume data, fitted covariance, atomic reference calculation or independent numerical replay was executed. Static binding and bulk modulus do not measure current, heat flow, ductility or electronic scattering.",
        "The selected bulk passages do not detail a separate isolated-atom spin/cell convergence protocol; no such reference protocol or new atom-energy calculation is reconstructed."
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk"
      ]
    },
    {
      "id": "M-phys-potorochin2022-na-film-context",
      "kind": "method",
      "statement": "Evaporate sodium onto cleaned W(110) held at 20 K, anneal the sample for 15 minutes at room temperature, then measure the approximately 15 nm Na(110) film at 20 K under a base pressure better than 6e-11 mbar. Use horizontally polarized 70 eV photons for the selected maps, the source Scienta R8000/R4000 analyzers at the respective beamlines, 30 meV energy resolution and 0.2 degree angular setting. The source uses photon-energy-dependent spectra to assign the measured normal-momentum plane near Gamma; the Fermi-level map integrates an approximately 0.015 eV energy window and is symmetrized about kx=0.",
      "scope": "Publication-specific Na(110)/W film, optical excitation, finite-resolution photoelectron detection and momentum assignment.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "C-phys-potorochin2022-na-spectrum",
      "kind": "review-finding",
      "statement": "The selected Na(110) energy-momentum map shows a dispersing occupied intensity feature approaching the Fermi level. The source near-Fermi map is nearly circular in the assigned kx-ky plane, with reported ky Fermi wave vector about 0.91 inverse Angstrom. A separate photon-energy scan fitted in Appendix A yields an average about 0.88 inverse Angstrom and maximum near 69 eV photons; these are separate reported cuts/assignments, not a single exact universal radius.",
      "scope": "Source-reported Na film photoemission map and declared near-Fermi momentum cuts.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "C-phys-potorochin2022-na-band-inference",
      "kind": "review-finding",
      "statement": "Fitting the same source ARPES data, shown over the reported 0.103-2.263 eV energy interval, to a finite-resolution spectral function with E(k)=W-gamma1*k^2-gamma2*k^4 gives the occupied bandwidth W=2.78 eV. Comparing with the supplied LDA bandwidth W_LDA=3.18 eV gives the source parabolic-band mass-renormalization estimate m*/m0=1.14. The inferred occupied quasiparticle bandwidth is not the cohesive energy per atom, and the LDA comparison is not a second independent experimental acquisition.",
      "scope": "Source fitted occupied dispersion and reference-dependent mass estimate from the same selected ARPES acquisition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "M-phys-potorochin2022-na-band-inference",
      "kind": "method",
      "statement": "Interpret the Na film intensity map through the source finite-resolution spectral fit, fitted occupied dispersion and the explicitly supplied LDA reference. Keep momentum-assignment assumptions, fit parameters and effective-mass comparison separate from measured count maps and from an independently computed cohesive energy. Reuse the ARPES acquisition once.",
      "scope": "Method contract for the same-data sodium quasiparticle-band inference.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "C-phys-metallic-bonding-source-scope",
      "kind": "review-finding",
      "statement": "The reviewed sources support two distinct finite metallic-sodium results: a supplied periodic electronic model predicts positive cohesion relative to neutral atoms, while a prepared sodium film has a near-Fermi photoemission contour and a source-inferred occupied quasiparticle band. Together these provide explicit energetic and spectral meanings for this selected metallic regime. Their agreement in material name does not turn band mobility into a measured cause of cohesion or supply conductivity, heat-flow and mechanical laws.",
      "scope": "Scoped replacement for original Level 2 card /14 with separate computational binding and experimental spectral evidence.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "supports",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original card /14 supplies draft vocabulary, asserted parent weights and counts only, not empirical support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parents 2.3 and 2.5, weights 0.50/0.50, necessary labels, upward-causation/mode codes and three-body N_min/N_crit values do not follow from this sodium calculation or film spectrum. No alternative atom-count threshold is invented.",
        "The finite positive admission separates a source-predicted neutral-atom cohesion energy from a measured photoemission response and its band inference. It does not show that electron mobility alone causes cohesion, that all metallic bonds are non-directional, or that every metal is a perfect periodic free-electron lattice.",
        "No measured conductivity, heat transport, ductility, malleability, mechanical response or screened interaction curve is admitted. Such properties require their own phase, disorder, scattering, loading and measurement conditions; a band crossing or positive cohesion alone does not fix them.",
        "The supplied periodic Na model and the actual Na film/W preparation are separate systems and evidence roles. No raw-data agreement test, common fitted parameter or universal electron-collectivization variable joins them.",
        "Level 2 is a display grouping. Phase 2, TypeRole 2 Pattern, science tags, established status, SOMA transition and collective stabilization language do not verify a developmental ordering, new rule-generating law or universal material category boundary.",
        "Constraint/resource requirement codes and empty Evidence publication identifiers are draft metadata. Record actual unit-cell, electronic-method, film, field and temperature assumptions; do not infer a universal sustained resource cause from evaporation, annealing or the ARPES probe. No new numerical replay or broad literature survey is claimed."
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "M-phys-metallic-bonding-source-scope",
      "kind": "method",
      "statement": "Compare the sodium bulk calculation and film spectrum only within their own supplied structures, reference energies, temperatures, observables and approximations. Preserve static cohesion versus excited-state quasiparticle energies, model ensemble spread versus zero-point corrections, and acquisition versus same-data band inference. Do not create universal causal parents, free-electron properties, material laws or carrier minima from the comparison.",
      "scope": "Interpretation dependencies for the finite metallic-sodium synthesis.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions",
          "role": "method",
          "note": "Supports the declared source-reported preparation, definition or scoped output only; no local reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parents 2.3 and 2.5, weights 0.50/0.50, necessary labels, upward-causation/mode codes and three-body N_min/N_crit values do not follow from this sodium calculation or film spectrum. No alternative atom-count threshold is invented.",
        "The finite positive admission separates a source-predicted neutral-atom cohesion energy from a measured photoemission response and its band inference. It does not show that electron mobility alone causes cohesion, that all metallic bonds are non-directional, or that every metal is a perfect periodic free-electron lattice.",
        "No measured conductivity, heat transport, ductility, malleability, mechanical response or screened interaction curve is admitted. Such properties require their own phase, disorder, scattering, loading and measurement conditions; a band crossing or positive cohesion alone does not fix them.",
        "The supplied periodic Na model and the actual Na film/W preparation are separate systems and evidence roles. No raw-data agreement test, common fitted parameter or universal electron-collectivization variable joins them.",
        "Level 2 is a display grouping. Phase 2, TypeRole 2 Pattern, science tags, established status, SOMA transition and collective stabilization language do not verify a developmental ordering, new rule-generating law or universal material category boundary.",
        "Constraint/resource requirement codes and empty Evidence publication identifiers are draft metadata. Record actual unit-cell, electronic-method, film, field and temperature assumptions; do not infer a universal sustained resource cause from evaporation, annealing or the ARPES probe. No new numerical replay or broad literature survey is claimed."
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:metal-cohesion-reference",
      "name": "Metal cohesion relative to a declared neutral-atom reference",
      "kind": "definition",
      "description": "For the supplied periodic sodium calculation with N atoms per bulk unit cell, define positive cohesive energy per atom as E_coh=E_atom-E_bulk/N, relative to neutral isolated atoms computed with a compatible electronic method and reference. E_coh in eV/atom is a total-energy difference; the equilibrium lattice parameter and bulk modulus come from a specified fitted energy-volume curve. Ground-state electronic cohesion, quasiparticle band energies and driven charge/heat transport are different quantities.",
      "claimIds": [
        "D-phys-metal-cohesion-reference"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms"
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
        }
      ],
      "openObligations": [
        "Positive cohesion in one supplied bulk model is not proof of global phase stability, a unique microscopic bond partition, universal non-directional forces or a carrier-number threshold.",
        "A static electronic calculation and finite-temperature measurements require their own zero-point/thermal conventions. A numerical smearing width is not automatically a measured sample temperature.",
        "No universal free-electron cohesion formula or transport law is supplied; electronic kinetic, electron-ion and correlation contributions are not separately measured by this energy difference."
      ]
    },
    {
      "id": "phys:metal-spectral-transport-boundary",
      "name": "Metal spectral evidence and transport boundary",
      "kind": "definition",
      "description": "For the supplied sodium film, an ARPES map records photoelectron intensity versus binding energy and assigned crystal momentum. A near-Fermi-level intensity contour and a fitted occupied dispersion test a state-specific quasiparticle band description. Intensity, model-assisted momentum assignment, fitted bandwidth, comparison-dependent effective mass and macroscopic electrical/thermal transport remain distinct evidence roles; a spectral map is not a direct real-space electron-density image or a current measurement.",
      "claimIds": [
        "D-phys-metal-spectral-transport-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
        }
      ],
      "openObligations": [
        "A nearly parabolic occupied band in this sodium preparation does not make every metal a free-electron gas or establish universal screening, ductility, malleability or thermal conductivity.",
        "The source discusses matrix elements, film orientation, angular calibration and final-state effects. An occupied spectral contour does not give a unique localized-bond decomposition or an atom-count onset of metallicity.",
        "Different excitation probes and theoretical references need not produce interchangeable effective masses. No new screening-response or universal electron-sharing parameter is reconstructed."
      ]
    },
    {
      "id": "phys:gaissmaier2020-na-bulk-context",
      "name": "Gaissmaier sodium bulk-energy calculation",
      "kind": "context",
      "description": "Use the source PAW/VASP ground-state electronic calculation for supplied periodic Na bulk structures. The principal functional is PBE-GGA; BEEF-vdW provides a separate functional/ensemble comparison. The reported bulk settings include a 340 eV plane-wave cutoff, 0.15 inverse-Angstrom k-point mesh density, 0.2 eV Methfessel-Paxton smearing and a 1e-5 eV electronic convergence criterion. Uniformly expand/compress each unit cell and fit the stabilized-jellium equation of state to obtain an equilibrium and bulk modulus. Compare bulk energy per atom with an isolated neutral atom under the stated cohesive-energy convention.",
      "claimIds": [
        "M-phys-gaissmaier2020-na-bulk-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms"
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
        }
      ],
      "openObligations": [
        "Only the selected Na bcc outputs are admitted; other phases, lithium values, surface energetics, NEB diffusion and battery behavior are outside this admission. The branch is not asserted to be the unique global 0 K phase.",
        "BEEF-vdW functional-ensemble spread is a model uncertainty estimate, not a statistical experimental error or a PBE error bar. The experimental-row parentheses in Table 1 are zero-point corrections, not measurement uncertainties.",
        "The Table 1 experimental reference row is imported from another source that was not read as primary evidence here; it does not create an experimental context or an independent validation dataset.",
        "No VASP inputs, energy-volume data, fitted covariance, atomic reference calculation or independent numerical replay was executed. Static binding and bulk modulus do not measure current, heat flow, ductility or electronic scattering.",
        "The selected bulk passages do not detail a separate isolated-atom spin/cell convergence protocol; no such reference protocol or new atom-energy calculation is reconstructed."
      ]
    },
    {
      "id": "phys:gaissmaier2020-na-cohesion",
      "name": "Reported Na bcc cohesion and static equilibrium",
      "kind": "scoped-process",
      "description": "For the supplied Na bcc branch, Table 1 reports PBE a0=4.19 Angstrom, E_coh=1.09 eV/atom and B0=7.96 GPa; BEEF-vdW gives a0=4.18 Angstrom, E_coh=1.15 eV/atom and B0=8.48 GPa. The BEEF cohesive-energy parenthesis 0.25 eV/atom represents the source functional-ensemble standard deviation. These are source computational outputs, not independently measured constants.",
      "claimIds": [
        "C-phys-gaissmaier2020-na-cohesion"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
        }
      ],
      "openObligations": [
        "Only the selected Na bcc outputs are admitted; other phases, lithium values, surface energetics, NEB diffusion and battery behavior are outside this admission. The branch is not asserted to be the unique global 0 K phase.",
        "BEEF-vdW functional-ensemble spread is a model uncertainty estimate, not a statistical experimental error or a PBE error bar. The experimental-row parentheses in Table 1 are zero-point corrections, not measurement uncertainties.",
        "The Table 1 experimental reference row is imported from another source that was not read as primary evidence here; it does not create an experimental context or an independent validation dataset.",
        "No VASP inputs, energy-volume data, fitted covariance, atomic reference calculation or independent numerical replay was executed. Static binding and bulk modulus do not measure current, heat flow, ductility or electronic scattering.",
        "The selected bulk passages do not detail a separate isolated-atom spin/cell convergence protocol; no such reference protocol or new atom-energy calculation is reconstructed."
      ]
    },
    {
      "id": "phys:potorochin2022-na-film-context",
      "name": "Potorochin sodium film ARPES preparation",
      "kind": "context",
      "description": "Evaporate sodium onto cleaned W(110) held at 20 K, anneal the sample for 15 minutes at room temperature, then measure the approximately 15 nm Na(110) film at 20 K under a base pressure better than 6e-11 mbar. Use horizontally polarized 70 eV photons for the selected maps, the source Scienta R8000/R4000 analyzers at the respective beamlines, 30 meV energy resolution and 0.2 degree angular setting. The source uses photon-energy-dependent spectra to assign the measured normal-momentum plane near Gamma; the Fermi-level map integrates an approximately 0.015 eV energy window and is symmetrized about kx=0.",
      "claimIds": [
        "M-phys-potorochin2022-na-film-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
        }
      ],
      "openObligations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ]
    },
    {
      "id": "phys:potorochin2022-na-spectrum",
      "name": "Sodium film energy-momentum and near-Fermi intensity",
      "kind": "scoped-process",
      "description": "The selected Na(110) energy-momentum map shows a dispersing occupied intensity feature approaching the Fermi level. The source near-Fermi map is nearly circular in the assigned kx-ky plane, with reported ky Fermi wave vector about 0.91 inverse Angstrom. A separate photon-energy scan fitted in Appendix A yields an average about 0.88 inverse Angstrom and maximum near 69 eV photons; these are separate reported cuts/assignments, not a single exact universal radius.",
      "claimIds": [
        "C-phys-potorochin2022-na-spectrum"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
        }
      ],
      "openObligations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ]
    },
    {
      "id": "phys:potorochin2022-na-band-inference",
      "name": "Sodium occupied quasiparticle-band inference",
      "kind": "scoped-process",
      "description": "Fitting the same source ARPES data, shown over the reported 0.103-2.263 eV energy interval, to a finite-resolution spectral function with E(k)=W-gamma1*k^2-gamma2*k^4 gives the occupied bandwidth W=2.78 eV. Comparing with the supplied LDA bandwidth W_LDA=3.18 eV gives the source parabolic-band mass-renormalization estimate m*/m0=1.14. The inferred occupied quasiparticle bandwidth is not the cohesive energy per atom, and the LDA comparison is not a second independent experimental acquisition.",
      "claimIds": [
        "C-phys-potorochin2022-na-band-inference"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention"
        }
      ],
      "openObligations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ]
    },
    {
      "id": "phys:metallic-bonding-source-scope",
      "name": "Metallic cohesion and electronic spectral evidence in declared sodium contexts",
      "kind": "scoped-process",
      "description": "The reviewed sources support two distinct finite metallic-sodium results: a supplied periodic electronic model predicts positive cohesion relative to neutral atoms, while a prepared sodium film has a near-Fermi photoemission contour and a source-inferred occupied quasiparticle band. Together these provide explicit energetic and spectral meanings for this selected metallic regime. Their agreement in material name does not turn band mobility into a measured cause of cohesion or supply conductivity, heat-flow and mechanical laws.",
      "claimIds": [
        "C-phys-metallic-bonding-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms"
        },
        {
          "sourceId": "gaissmaier2020-na-cohesion",
          "locator": "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention"
        },
        {
          "sourceId": "potorochin2022-na-arpes",
          "locator": "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original parents 2.3 and 2.5, weights 0.50/0.50, necessary labels, upward-causation/mode codes and three-body N_min/N_crit values do not follow from this sodium calculation or film spectrum. No alternative atom-count threshold is invented.",
        "The finite positive admission separates a source-predicted neutral-atom cohesion energy from a measured photoemission response and its band inference. It does not show that electron mobility alone causes cohesion, that all metallic bonds are non-directional, or that every metal is a perfect periodic free-electron lattice.",
        "No measured conductivity, heat transport, ductility, malleability, mechanical response or screened interaction curve is admitted. Such properties require their own phase, disorder, scattering, loading and measurement conditions; a band crossing or positive cohesion alone does not fix them.",
        "The supplied periodic Na model and the actual Na film/W preparation are separate systems and evidence roles. No raw-data agreement test, common fitted parameter or universal electron-collectivization variable joins them.",
        "Level 2 is a display grouping. Phase 2, TypeRole 2 Pattern, science tags, established status, SOMA transition and collective stabilization language do not verify a developmental ordering, new rule-generating law or universal material category boundary.",
        "Constraint/resource requirement codes and empty Evidence publication identifiers are draft metadata. Record actual unit-cell, electronic-method, film, field and temperature assumptions; do not infer a universal sustained resource cause from evaporation, annealing or the ARPES probe. No new numerical replay or broad literature survey is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:spatial-order-symmetry-boundary-metal-cohesion-reference",
      "source": "phys:spatial-order-symmetry-boundary",
      "target": "phys:metal-cohesion-reference",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Declare the selected periodic unit cell and neutral-atom energy reference without treating all crystals as metallic or a unit-cell atom count as an emergence threshold.",
      "claimIds": [
        "D-phys-metal-cohesion-reference"
      ]
    },
    {
      "id": "physics:spatial-order-symmetry-boundary-metal-spectral-transport-boundary",
      "source": "phys:spatial-order-symmetry-boundary",
      "target": "phys:metal-spectral-transport-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify the source film/momentum convention without assuming all metals require perfect periodic order or that diffraction order alone determines a band or conductivity.",
      "claimIds": [
        "D-phys-metal-spectral-transport-boundary"
      ]
    },
    {
      "id": "physics:gaissmaier2020-na-bulk-context-gaissmaier2020-na-cohesion",
      "source": "phys:gaissmaier2020-na-bulk-context",
      "target": "phys:gaissmaier2020-na-cohesion",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The supplied periodic DFT calculation and energy-volume convention define the source-predicted cohesion and equilibrium parameters.",
      "claimIds": [
        "M-phys-gaissmaier2020-na-bulk-context"
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk"
      ]
    },
    {
      "id": "physics:potorochin2022-na-film-context-potorochin2022-na-spectrum",
      "source": "phys:potorochin2022-na-film-context",
      "target": "phys:potorochin2022-na-spectrum",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The finite film, optical probe and source momentum assignment define the measured intensity-map context.",
      "claimIds": [
        "M-phys-potorochin2022-na-film-context"
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:potorochin2022-na-spectrum-potorochin2022-na-band-inference",
      "source": "phys:potorochin2022-na-spectrum",
      "target": "phys:potorochin2022-na-band-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source fits the same finite-resolution spectrum and compares to a declared LDA reference; this is not another acquisition or a cohesive-energy measurement.",
      "claimIds": [
        "M-phys-potorochin2022-na-band-inference"
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:metal-spectral-transport-boundary-potorochin2022-na-band-inference",
      "source": "phys:metal-spectral-transport-boundary",
      "target": "phys:potorochin2022-na-band-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source fits the same finite-resolution spectrum and compares to a declared LDA reference; this is not another acquisition or a cohesive-energy measurement.",
      "claimIds": [
        "M-phys-potorochin2022-na-band-inference"
      ],
      "contextIds": [
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:gaissmaier2020-na-cohesion-metallic-bonding-source-scope",
      "source": "phys:gaissmaier2020-na-cohesion",
      "target": "phys:metallic-bonding-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve energetic, spectral, preparation and interpretation scopes in the finite sodium synthesis; no general transport or causal-parent rule follows.",
      "claimIds": [
        "M-phys-metallic-bonding-source-scope"
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:potorochin2022-na-band-inference-metallic-bonding-source-scope",
      "source": "phys:potorochin2022-na-band-inference",
      "target": "phys:metallic-bonding-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve energetic, spectral, preparation and interpretation scopes in the finite sodium synthesis; no general transport or causal-parent rule follows.",
      "claimIds": [
        "M-phys-metallic-bonding-source-scope"
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:metal-cohesion-reference-metallic-bonding-source-scope",
      "source": "phys:metal-cohesion-reference",
      "target": "phys:metallic-bonding-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve energetic, spectral, preparation and interpretation scopes in the finite sodium synthesis; no general transport or causal-parent rule follows.",
      "claimIds": [
        "M-phys-metallic-bonding-source-scope"
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    },
    {
      "id": "physics:metal-spectral-transport-boundary-metallic-bonding-source-scope",
      "source": "phys:metal-spectral-transport-boundary",
      "target": "phys:metallic-bonding-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Preserve energetic, spectral, preparation and interpretation scopes in the finite sodium synthesis; no general transport or causal-parent rule follows.",
      "claimIds": [
        "M-phys-metallic-bonding-source-scope"
      ],
      "contextIds": [
        "gaissmaier2020-na-bulk",
        "potorochin2022-na-film"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:metal-cohesion-reference",
      "role": "definition",
      "denotes": "Declared neutral-atom reference and equation-of-state convention for a finite selected metallic sodium DFT model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-metal-cohesion-reference"
      ]
    },
    {
      "nodeId": "phys:metal-spectral-transport-boundary",
      "role": "definition",
      "denotes": "Working evidence boundary for the selected Na film ARPES experiment and its source band interpretation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-metal-spectral-transport-boundary"
      ]
    },
    {
      "nodeId": "phys:gaissmaier2020-na-bulk-context",
      "role": "model-context",
      "denotes": "Selected Na bcc periodic bulk-energy calculation and equation-of-state fitting protocol.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-gaissmaier2020-na-bulk-context"
      ]
    },
    {
      "nodeId": "phys:gaissmaier2020-na-cohesion",
      "role": "scoped-phenomenon",
      "denotes": "Source-predicted Na bcc cohesion and static equilibrium parameters for two declared electronic approximations.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-gaissmaier2020-na-cohesion"
      ]
    },
    {
      "nodeId": "phys:potorochin2022-na-film-context",
      "role": "experimental-context",
      "denotes": "Publication-specific Na(110)/W film, optical excitation, finite-resolution photoelectron detection and momentum assignment.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-potorochin2022-na-film-context"
      ]
    },
    {
      "nodeId": "phys:potorochin2022-na-spectrum",
      "role": "scoped-phenomenon",
      "denotes": "Source-reported Na film photoemission map and declared near-Fermi momentum cuts.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-potorochin2022-na-spectrum"
      ]
    },
    {
      "nodeId": "phys:potorochin2022-na-band-inference",
      "role": "scoped-phenomenon",
      "denotes": "Source fitted occupied dispersion and reference-dependent mass estimate from the same selected ARPES acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-potorochin2022-na-band-inference"
      ]
    },
    {
      "nodeId": "phys:metallic-bonding-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped replacement for original Level 2 card /14 with separate computational binding and experimental spectral evidence.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-metallic-bonding-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "gaissmaier2020-na-bulk",
      "sourceId": "gaissmaier2020-na-cohesion",
      "studyType": "computational-analysis",
      "doi": "10.1002/cssc.201902860",
      "journal": "ChemSusChem",
      "volume": "13",
      "issue": "4",
      "pages": "771-783",
      "system": "Selected Na bcc branch in periodic ground-state electronic DFT",
      "preparation": "Use the source PAW/VASP ground-state electronic calculation for supplied periodic Na bulk structures. The principal functional is PBE-GGA; BEEF-vdW provides a separate functional/ensemble comparison. The reported bulk settings include a 340 eV plane-wave cutoff, 0.15 inverse-Angstrom k-point mesh density, 0.2 eV Methfessel-Paxton smearing and a 1e-5 eV electronic convergence criterion. Uniformly expand/compress each unit cell and fit the stabilized-jellium equation of state to obtain an equilibrium and bulk modulus. Compare bulk energy per atom with an isolated neutral atom under the stated cohesive-energy convention.",
      "observable": "Source-computed total-energy differences and fitted Na bulk equilibrium parameters, not primary measured heats or compression data.",
      "finding": "For the supplied Na bcc branch, Table 1 reports PBE a0=4.19 Angstrom, E_coh=1.09 eV/atom and B0=7.96 GPa; BEEF-vdW gives a0=4.18 Angstrom, E_coh=1.15 eV/atom and B0=8.48 GPa. The BEEF cohesive-energy parenthesis 0.25 eV/atom represents the source functional-ensemble standard deviation. These are source computational outputs, not independently measured constants.",
      "limitations": [
        "Only the selected Na bcc outputs are admitted; other phases, lithium values, surface energetics, NEB diffusion and battery behavior are outside this admission. The branch is not asserted to be the unique global 0 K phase.",
        "BEEF-vdW functional-ensemble spread is a model uncertainty estimate, not a statistical experimental error or a PBE error bar. The experimental-row parentheses in Table 1 are zero-point corrections, not measurement uncertainties.",
        "The Table 1 experimental reference row is imported from another source that was not read as primary evidence here; it does not create an experimental context or an independent validation dataset.",
        "No VASP inputs, energy-volume data, fitted covariance, atomic reference calculation or independent numerical replay was executed. Static binding and bulk modulus do not measure current, heat flow, ductility or electronic scattering.",
        "The selected bulk passages do not detail a separate isolated-atom spin/cell convergence protocol; no such reference protocol or new atom-energy calculation is reconstructed."
      ],
      "readExtent": "selected-published-primary-computation-passages",
      "reviewedLocators": [
        "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
        "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1002/cssc.201902860",
      "correctionCheck": "Actual published selected pages 772-773 and final-page publication history on page 783 were read. The final PDF identifies accepted manuscript online 5 December 2019 and version of record online 21 January 2020; the print issue is 21 February 2020. This explains the publisher first-publication date versus Crossref version-of-record date. DOI, authors, issue and pagination match Crossref. Crossref relation is empty and no update-to appears; targeted DOI/erratum searches found no correction record, without implying exhaustive correction coverage. Only the primary computation is admitted, not the borrowed experimental reference row."
    },
    {
      "id": "potorochin2022-na-film",
      "sourceId": "potorochin2022-na-arpes",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevB.106.125138",
      "journal": "Physical Review B",
      "volume": "106",
      "issue": "12",
      "pages": "125138",
      "system": "Na(110) approximately 15 nm film on W(110), measured at 20 K",
      "preparation": "Evaporate sodium onto cleaned W(110) held at 20 K, anneal the sample for 15 minutes at room temperature, then measure the approximately 15 nm Na(110) film at 20 K under a base pressure better than 6e-11 mbar. Use horizontally polarized 70 eV photons for the selected maps, the source Scienta R8000/R4000 analyzers at the respective beamlines, 30 meV energy resolution and 0.2 degree angular setting. The source uses photon-energy-dependent spectra to assign the measured normal-momentum plane near Gamma; the Fermi-level map integrates an approximately 0.015 eV energy window and is symmetrized about kx=0.",
      "observable": "Photoelectron counts versus energy and emission angle, converted to assigned energy-momentum maps; same-acquisition fitted dispersion and near-Fermi contour.",
      "finding": "The selected Na(110) energy-momentum map shows a dispersing occupied intensity feature approaching the Fermi level. The source near-Fermi map is nearly circular in the assigned kx-ky plane, with reported ky Fermi wave vector about 0.91 inverse Angstrom. A separate photon-energy scan fitted in Appendix A yields an average about 0.88 inverse Angstrom and maximum near 69 eV photons; these are separate reported cuts/assignments, not a single exact universal radius. Fitting the same source ARPES data, shown over the reported 0.103-2.263 eV energy interval, to a finite-resolution spectral function with E(k)=W-gamma1*k^2-gamma2*k^4 gives the occupied bandwidth W=2.78 eV. Comparing with the supplied LDA bandwidth W_LDA=3.18 eV gives the source parabolic-band mass-renormalization estimate m*/m0=1.14. The inferred occupied quasiparticle bandwidth is not the cohesive energy per atom, and the LDA comparison is not a second independent experimental acquisition.",
      "limitations": [
        "The primary measured quantity is photoelectron intensity, with polarization-dependent matrix elements and finite instrumental resolution; the bandwidth and effective mass are source fits/comparisons, not direct real-space electron tracking.",
        "The preparation is a finite sodium film on tungsten. Near-circularity does not establish a perfectly spherical free-electron surface for every material, phase, pressure or temperature; orientation and calibration are explicit alternatives for small deviations.",
        "The 0.91 and 0.88 inverse-Angstrom values come from different cuts/fits and are not silently equated. The kz assignment uses a photoelectron final-state convention; no independent carrier-density or electron-per-atom reconstruction is supplied.",
        "The occupied bandwidth and mass inference reuse the same data and supplied LDA reference. No new independent experiment, raw spectral refit, numerical precision beyond the source, conductivity, thermal-current or mechanical measurement is claimed.",
        "The paper also analyses energy-dependent linewidths and alternative impurity/final-state corrections. Those detailed lifetime outputs, Kramers-Kronig effective mass and comparisons with earlier EELS are not admitted here as extra datasets or transport lifetimes."
      ],
      "readExtent": "selected-published-primary-text-and-author-manuscript",
      "reviewedLocators": [
        "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
        "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
        "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1103/PhysRevB.106.125138",
      "correctionCheck": "Read selected actual published full text from the DESY deposited final PDF via the web indexed text, and cross-checked against the actual downloaded arXiv2112.00422v2 PDF; visual checks were of the author version only. The final text includes both R8000 and R4000 analyzer preparations. Publisher title, DOI, authors, issue/article number and 22 September 2022 publication date agree with Crossref; acceptance was 19 August 2022. Crossref relation is empty and no update-to appears; targeted DOI/erratum searches found no correction record, without implying exhaustive correction coverage. No raw-data refit or independently reproduced calculation was performed."
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
      "id": "gaissmaier2020-na-cohesion",
      "kind": "research-publication",
      "title": "Microscopic Properties of Na and Li—A First Principle Study of Metal Battery Anode Materials",
      "authors": [
        "Daniel Gaissmaier",
        "Matthias van den Borg",
        "Donato Fantauzzi",
        "Timo Jacob"
      ],
      "year": 2020,
      "doi": "10.1002/cssc.201902860",
      "url": "https://chemistry-europe.onlinelibrary.wiley.com/doi/10.1002/cssc.201902860",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-primary-computation-passages",
        "locators": [
          "Published page 772, Methodology and Bulk properties, Equation 1: PAW/PBE calculation, uniform-cell equation of state and positive cohesive energy relative to neutral atoms",
          "Published page 773, Table 1 and footnote plus adjoining bulk-property discussion: Na bcc PBE/BEEF-vdW cohesion, lattice parameter, bulk modulus, functional spread and zero-point corrections"
        ],
        "limit": "Actual 13-page published PDF obtained from the German National Library repository https://d-nb.info/1255282606/34. Read selected published pages 772-773 and visually checked Equation 1, Table 1 and its footnote. Selected bulk methodology and sodium output only are admitted; no full surface-diffusion/NEB review, battery performance, mechanical test or primary thermodynamic experiment is claimed. Table 1 experimental values are imported from reference 28, whose primary measurements were not read. Those reference values are not admitted as a new primary empirical dataset. Source table parentheses for the experimental row are zero-point corrections, not uncertainty intervals. The publication-history block on page 783 was also read: accepted manuscript 5 December 2019, version of record 21 January 2020."
      }
    },
    {
      "id": "potorochin2022-na-arpes",
      "kind": "research-publication",
      "title": "Lifetime of quasiparticles in the nearly free electron metal sodium",
      "authors": [
        "D. V. Potorochin",
        "R. Kurleto",
        "O. J. Clark",
        "E. D. L. Rienks",
        "J. Sánchez-Barriga",
        "F. Roth",
        "V. Voroshnin",
        "A. Fedorov",
        "W. Eberhardt",
        "B. Büchner",
        "J. Fink"
      ],
      "year": 2022,
      "doi": "10.1103/PhysRevB.106.125138",
      "url": "https://journals.aps.org/prb/abstract/10.1103/PhysRevB.106.125138",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-primary-text-and-author-manuscript",
        "locators": [
          "Published pages 125138-1 to 125138-2, Sections II-III and Figures 1-2: Na(110) film on W, 20 K, 70 eV photons and measured energy-momentum/Fermi-level maps",
          "Published pages 125138-2 to 125138-4, Section III and Table I: common-data spectral fit, 2.78 eV bandwidth, supplied LDA reference and mass-renormalization convention",
          "Published pages 125138-5 to 125138-6, Appendix A and selected Appendix B paragraphs: photon-energy-dependent momentum assignment, 0.88 inverse-Angstrom fit and separate linewidth-correction assumptions"
        ],
        "limit": "Read selected actual published pages 125138-1 to 125138-6 through indexed full text of the author-institution DESY deposited final PDF, https://bib-pubdb1.desy.de/record/486396/files/Potorochin_Na_PhysRevB.106.125138.pdf?subformat=pdfa&version=1. Cross-checked against the actual seven-page arXiv:2112.00422v2 PDF; visually inspected author-manuscript pages 2-3 including maps and fit text. Local download and screenshot access to the deposited final PDF failed; no visual inspection of the final layout is claimed. Actual final text adds the R4000 analyzer at the second beamline; this revised preparation is retained. Read the selected experimental/results passages, Table I, Appendix A and selected Appendix B assumptions. No raw-data refit, transport measurement, full final-reference review or independently reproduced spectral inversion is supplied."
      }
    }
  ]
};

/** Separate source-predicted cohesion, finite-film spectral acquisition and dependent quasiparticle interpretation without a universal material-property chain. */
export function validateMetallicBondingContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Metallic-bonding ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
