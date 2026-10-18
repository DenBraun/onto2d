import assert from "node:assert/strict";

export const PHOTON_SCOPE_CHECKS = new Map();
export const PHOTON_SCOPE_ANALYTICAL_SOURCES = new Map();
export const PHOTON_SCOPE_ADMISSION = {
  "definitions": [
    [
      "phys:photon-evidence-scope",
      "D-phys-photon-evidence-scope"
    ]
  ],
  "formalDependencies": [
    [
      "physics:weinberg-gauge-mass-matrix-photon-evidence-scope",
      [
        "phys:weinberg-gauge-mass-matrix",
        "phys:photon-evidence-scope"
      ]
    ],
    [
      "physics:free-field-time-evolution-photon-evidence-scope",
      [
        "phys:free-field-time-evolution",
        "phys:photon-evidence-scope"
      ]
    ],
    [
      "physics:electromagnetic-photon-field-photon-evidence-scope",
      [
        "phys:electromagnetic-photon-field",
        "phys:photon-evidence-scope"
      ]
    ],
    [
      "physics:one-photon-wavepacket-boundary-photon-evidence-scope",
      [
        "phys:one-photon-wavepacket-boundary",
        "phys:photon-evidence-scope"
      ]
    ],
    [
      "physics:internal-propagator-photon-evidence-scope",
      [
        "phys:internal-propagator",
        "phys:photon-evidence-scope"
      ]
    ],
    [
      "physics:external-scattering-state-photon-evidence-scope",
      [
        "phys:external-scattering-state",
        "phys:photon-evidence-scope"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "photon-evidence-boundary",
      "C-phys-photon-evidence-boundary",
      [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    ]
  ],
  "dependencies": [
    [
      "photon-evidence-scope-photon-evidence-boundary",
      "photon-evidence-scope",
      "photon-evidence-boundary",
      "M-phys-photon-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "triggered-optical-coincidences-photon-evidence-boundary",
      "triggered-optical-coincidences",
      "photon-evidence-boundary",
      "M-phys-photon-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "triggered-optical-anticorrelation-photon-evidence-boundary",
      "triggered-optical-anticorrelation",
      "photon-evidence-boundary",
      "M-phys-photon-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "kessler-capture-wavelength-photon-evidence-boundary",
      "kessler-capture-wavelength",
      "photon-evidence-boundary",
      "M-phys-photon-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "kloe2007-radiative-ratio-photon-evidence-boundary",
      "kloe2007-radiative-ratio",
      "photon-evidence-boundary",
      "M-phys-photon-evidence-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-photon-evidence-boundary",
      [
        "dewey2006-capture",
        "mohr2025-neutron",
        "tong-qft-free-maxwell",
        "weinberg1967-leptons",
        "tong-qft-free-fields",
        "feynman1949-amplitudes"
      ]
    ],
    [
      "M-phys-photon-evidence-boundary",
      [
        "dewey2006-capture",
        "mohr2025-neutron",
        "tong-qft-free-maxwell",
        "weinberg1967-leptons",
        "tong-qft-free-fields",
        "feynman1949-amplitudes"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-photon-evidence-scope",
      "kind": "review-finding",
      "statement": "In the declared unbroken electromagnetic U(1) gauge model, constrained free Maxwell modes define two transverse bosonic photon polarizations, formal zero mass and neutral gauge-field transformation. A one-photon wavepacket additionally requires a specified free-state normalization and preparation boundary. Optical counting, radiation observables and internal electromagnetic mediation are distinct evidence and description roles.",
      "scope": "Formal photon-state conventions and the bounded interpretation of original source-card 1.23; no universal photon construction or experimentally exact mass/charge assignment.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Masslessness and electric neutrality are properties of the declared unbroken Abelian electromagnetic gauge model. The historical Weinberg mass-matrix null direction is a formal model assignment, not an experimental upper bound. No photon-mass or photon-charge limit, source version or new confidence level is admitted without a separately reviewed bound experiment.",
        "A bosonic one-photon occupation or normalized wavepacket is not a distinguishable permanent carrier with an identity label through arbitrary interactions. Preparation, free propagation, emission, absorption and a response-dependent detector click have different boundaries; a click is not a complete photon-number measurement or trajectory.",
        "The earlier free-field evolution construction is explicitly a real scalar model. It supplies a framework comparison, not electromagnetic gauge constraints, two photon polarizations, a universal formation or maintenance law, or measured photon dynamics. Its finite oscillator check is not photon data.",
        "The reviewed leading nonrelativistic Coulomb calculation uses the time-component internal propagator to obtain a static effective potential. Atomic binding is not a measured flux of real on-shell photons; an internal line is not a measured particle population. No quantitative atomic binding spectrum, bound-state formation or universal long-range-force measurement is constructed here.",
        "Prepared transverse polarization is defined relative to each nonzero momentum and a basis choice; it does not select a preferred vacuum axis. This does not establish physical field anisotropy or a joint-state entanglement claim; those analyses require their own preparations and evidence.",
        "The source-card parent links to the electromagnetic framework and field dynamics are retained only as scoped definition dependencies. The weights 0.55 and 0.45, necessary/enabling arising/maintenance codes, Nmin=Ncrit=1 and phase/type-role labels are not measured formation thresholds or causal laws.",
        "Radiation and radiative transitions are represented only by the named capture-wavelength and meson radiative-ratio evidence below. Generic Compton, photoelectric and precision-QED placeholders do not admit unreviewed experiments. Aggregate material-optics or retinal response cannot supply single-photon statistics or a universal biological bridge."
      ]
    },
    {
      "id": "C-phys-photon-evidence-boundary",
      "kind": "review-finding",
      "statement": "The triggered optical coincidence summary and response-conditioned anticorrelation support nonclassical counting in one named preparation. Capture-photon wavelength and the corrected meson radiative ratio separately constrain their declared emission observables. This comparison preserves formal photon-state conventions, detector response and dependent analysis stages instead of treating them as one universal photon-property measurement.",
      "scope": "Literature comparison of Grangier-Roger-Aspect 1986, the scoped Kessler capture measurements and the KLOE radiative-ratio response; formal descriptions remain conditional inputs.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 224-225, Section 3 and Tables 2-3: correlated run combination, systematic errors and crystal lattice calibration",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 225-226, Section 3 and Equations 1-7: pressure correction, photon wavelength, recoil, conversion constants and adopted atomic-mass difference",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "dewey2006-capture",
          "locator": "Author report nucl-ex/0507011v1, pages 3-5, Section III.C and Table IV: adjusted ILL2.5 lattice spacing and its enlarged uncertainty",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-6, Section II.B and Equations 6-7: dimensionless diffraction input, recoil and neutron-mass adjustment",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-39, Table XXV entry D14: the printed meter unit conflicts with the dimensionless definition in Section II.B",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "supports",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The optical count summary and its inferred alpha statistic reuse the same acquisition. Their two study records distinguish measurement from interpretation, not independent replications. The same-source Mach-Zehnder visibility uses a changed configuration and cannot demonstrate simultaneous which-path information, a permanent trajectory or independent source confirmation.",
        "The printed Grangier selected point lacks the transmitted singles rate, complete event stream, efficiency calibration and full likelihood. Its alpha uncertainty and greater-than-13-standard-deviation comparison remain publication reports, not an exact replay, trial-corrected significance or a general exclusion of all classical detector models.",
        "The capture wavelength retains the 1999 crystal calibration and the explicitly identified later calibration/adjustment limits. The corrected KLOE radiative branching-ratio ratio retains its efficiency, daughter-branch, interference and statistical/systematic assumptions; it is not an absolute decay width or the conditional pseudoscalar mixing angle.",
        "Optical coincidences, gamma-ray diffraction wavelength and a corrected meson decay ratio have different preparations, response models, units and inference stages. They are not one pooled photon-count sample or joint significance test. No new acquisition, independent raw-data fit, model discrimination beyond the declared counting assumptions or complete QED-to-macroscopic-light chain is claimed.",
        "The measurements do not establish exactly zero photon mass or charge, distinguishable persistent identity, a static Coulomb photon flux, atomic binding, an oriented vacuum or universal photon-driven biological organization. These boundaries remain those of the formal scope definition."
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "M-phys-photon-evidence-boundary",
      "kind": "method",
      "statement": "Compare the actual study contexts of each admitted outcome, retaining shared optical acquisition, selected calibration versions and detector/analysis assumptions. Use the formal scope only to delimit interpretation; do not pool heterogeneous data, infer unmeasured photon properties or promote an internal amplitude role into observed real-photon flux.",
      "scope": "Literature comparison of Grangier-Roger-Aspect 1986, the scoped Kessler capture measurements and the KLOE radiative-ratio response; formal descriptions remain conditional inputs.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 173-174 and Figure 1: radiative cascade, herald detection, 4.7 ns intermediate lifetime and triggered counters",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 174-175, Equations 1-7: gate-normalized probabilities, linear semiclassical detector model and classical anticorrelation bound",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Page 177, first paragraph and footnote 2: selected coincidence counts, rates, dark counts, reported alpha and pulsed-diode control",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 224-225, Section 3 and Tables 2-3: correlated run combination, systematic errors and crystal lattice calibration",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 225-226, Section 3 and Equations 1-7: pressure correction, photon wavelength, recoil, conversion constants and adopted atomic-mass difference",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "dewey2006-capture",
          "locator": "Author report nucl-ex/0507011v1, pages 3-5, Section III.C and Table IV: adjusted ILL2.5 lattice spacing and its enlarged uncertainty",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-6, Section II.B and Equations 6-7: dimensionless diffraction input, recoil and neutron-mass adjustment",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-39, Table XXV entry D14: the printed meter unit conflicts with the dimensionless definition in Section II.B",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention",
          "role": "method",
          "note": "Supports this conditional model or interpretation boundary; no new acquisition, numerical replay or universal photon-property inference."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The optical count summary and its inferred alpha statistic reuse the same acquisition. Their two study records distinguish measurement from interpretation, not independent replications. The same-source Mach-Zehnder visibility uses a changed configuration and cannot demonstrate simultaneous which-path information, a permanent trajectory or independent source confirmation.",
        "The printed Grangier selected point lacks the transmitted singles rate, complete event stream, efficiency calibration and full likelihood. Its alpha uncertainty and greater-than-13-standard-deviation comparison remain publication reports, not an exact replay, trial-corrected significance or a general exclusion of all classical detector models.",
        "The capture wavelength retains the 1999 crystal calibration and the explicitly identified later calibration/adjustment limits. The corrected KLOE radiative branching-ratio ratio retains its efficiency, daughter-branch, interference and statistical/systematic assumptions; it is not an absolute decay width or the conditional pseudoscalar mixing angle.",
        "Optical coincidences, gamma-ray diffraction wavelength and a corrected meson decay ratio have different preparations, response models, units and inference stages. They are not one pooled photon-count sample or joint significance test. No new acquisition, independent raw-data fit, model discrimination beyond the declared counting assumptions or complete QED-to-macroscopic-light chain is claimed.",
        "The measurements do not establish exactly zero photon mass or charge, distinguishable persistent identity, a static Coulomb photon flux, atomic binding, an oriented vacuum or universal photon-driven biological organization. These boundaries remain those of the formal scope definition."
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:photon-evidence-scope",
      "name": "Photon state and evidence scope",
      "kind": "definition",
      "description": "In the declared unbroken electromagnetic U(1) gauge model, constrained free Maxwell modes define two transverse bosonic photon polarizations, formal zero mass and neutral gauge-field transformation. A one-photon wavepacket additionally requires a specified free-state normalization and preparation boundary. Optical counting, radiation observables and internal electromagnetic mediation are distinct evidence and description roles.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention"
        }
      ],
      "openObligations": [
        "Masslessness and electric neutrality are properties of the declared unbroken Abelian electromagnetic gauge model. The historical Weinberg mass-matrix null direction is a formal model assignment, not an experimental upper bound. No photon-mass or photon-charge limit, source version or new confidence level is admitted without a separately reviewed bound experiment.",
        "A bosonic one-photon occupation or normalized wavepacket is not a distinguishable permanent carrier with an identity label through arbitrary interactions. Preparation, free propagation, emission, absorption and a response-dependent detector click have different boundaries; a click is not a complete photon-number measurement or trajectory.",
        "The earlier free-field evolution construction is explicitly a real scalar model. It supplies a framework comparison, not electromagnetic gauge constraints, two photon polarizations, a universal formation or maintenance law, or measured photon dynamics. Its finite oscillator check is not photon data.",
        "The reviewed leading nonrelativistic Coulomb calculation uses the time-component internal propagator to obtain a static effective potential. Atomic binding is not a measured flux of real on-shell photons; an internal line is not a measured particle population. No quantitative atomic binding spectrum, bound-state formation or universal long-range-force measurement is constructed here.",
        "Prepared transverse polarization is defined relative to each nonzero momentum and a basis choice; it does not select a preferred vacuum axis. This does not establish physical field anisotropy or a joint-state entanglement claim; those analyses require their own preparations and evidence.",
        "The source-card parent links to the electromagnetic framework and field dynamics are retained only as scoped definition dependencies. The weights 0.55 and 0.45, necessary/enabling arising/maintenance codes, Nmin=Ncrit=1 and phase/type-role labels are not measured formation thresholds or causal laws.",
        "Radiation and radiative transitions are represented only by the named capture-wavelength and meson radiative-ratio evidence below. Generic Compton, photoelectric and precision-QED placeholders do not admit unreviewed experiments. Aggregate material-optics or retinal response cannot supply single-photon statistics or a universal biological bridge."
      ]
    },
    {
      "id": "phys:photon-evidence-boundary",
      "name": "Scoped photon evidence comparison",
      "kind": "scoped-process",
      "description": "The triggered optical coincidence summary and response-conditioned anticorrelation support nonclassical counting in one named preparation. Capture-photon wavelength and the corrected meson radiative ratio separately constrain their declared emission observables. This comparison preserves formal photon-state conventions, detector response and dependent analysis stages instead of treating them as one universal photon-property measurement.",
      "claimIds": [
        "C-phys-photon-evidence-boundary"
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
        },
        {
          "sourceId": "grangier1986-optical-anticorrelation",
          "locator": "Pages 177-179, Figures 3-5 and footnotes 3-4: separate Mach-Zehnder configuration, ungated calibration, gated visibility and dark correction"
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 224-225, Section 3 and Tables 2-3: correlated run combination, systematic errors and crystal lattice calibration"
        },
        {
          "sourceId": "kessler1999",
          "locator": "Pages 225-226, Section 3 and Equations 1-7: pressure correction, photon wavelength, recoil, conversion constants and adopted atomic-mass difference"
        },
        {
          "sourceId": "dewey2006-capture",
          "locator": "Author report nucl-ex/0507011v1, pages 3-5, Section III.C and Table IV: adjusted ILL2.5 lattice spacing and its enlarged uncertainty"
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-6, Section II.B and Equations 6-7: dimensionless diffraction input, recoil and neutron-mass adjustment"
        },
        {
          "sourceId": "mohr2025-neutron",
          "locator": "Page 025002-39, Table XXV entry D14: the printed meter unit conflicts with the dimensionless definition in Section II.B"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher pages 269 and 271, Equation 7, footnote 2 and Table 2: branching-weighted efficiencies, FLS controls, daughter branches, interference and ratio uncertainties"
        },
        {
          "sourceId": "kloe2007-meson-ratio",
          "locator": "Publisher page 271, Equation 8: corrected radiative branching-ratio ratio and separate statistical/systematic uncertainties"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.3.1 through Equation 6.561: Abelian gauge transformation of the potential and charged matter"
        },
        {
          "sourceId": "tong-qft-free-maxwell",
          "locator": "Section 6.6.1 through Equation 6.591: leading nonrelativistic Coulomb potential from electron/positron scattering and the time-component internal propagator"
        },
        {
          "sourceId": "weinberg1967-leptons",
          "locator": "Publisher page 1265, Equations 7-15: charged/neutral gauge masses, historical field-sign convention and electric charge"
        },
        {
          "sourceId": "tong-qft-free-fields",
          "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 774-776, Section 4, Equations 10-14 and Figure 3; page 775 footnote 12: Fourier kernels, four-momentum integration, pole prescription and matrix ordering"
        },
        {
          "sourceId": "feynman1949-amplitudes",
          "locator": "Printed pages 771 and 773-776, Sections 2-4, Equations 8-9 and 15: separated external states, free plane waves and external-photon scattering convention"
        }
      ],
      "openObligations": [
        "The optical count summary and its inferred alpha statistic reuse the same acquisition. Their two study records distinguish measurement from interpretation, not independent replications. The same-source Mach-Zehnder visibility uses a changed configuration and cannot demonstrate simultaneous which-path information, a permanent trajectory or independent source confirmation.",
        "The printed Grangier selected point lacks the transmitted singles rate, complete event stream, efficiency calibration and full likelihood. Its alpha uncertainty and greater-than-13-standard-deviation comparison remain publication reports, not an exact replay, trial-corrected significance or a general exclusion of all classical detector models.",
        "The capture wavelength retains the 1999 crystal calibration and the explicitly identified later calibration/adjustment limits. The corrected KLOE radiative branching-ratio ratio retains its efficiency, daughter-branch, interference and statistical/systematic assumptions; it is not an absolute decay width or the conditional pseudoscalar mixing angle.",
        "Optical coincidences, gamma-ray diffraction wavelength and a corrected meson decay ratio have different preparations, response models, units and inference stages. They are not one pooled photon-count sample or joint significance test. No new acquisition, independent raw-data fit, model discrimination beyond the declared counting assumptions or complete QED-to-macroscopic-light chain is claimed.",
        "The measurements do not establish exactly zero photon mass or charge, distinguishable persistent identity, a static Coulomb photon flux, atomic binding, an oriented vacuum or universal photon-driven biological organization. These boundaries remain those of the formal scope definition."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:weinberg-gauge-mass-matrix-photon-evidence-scope",
      "source": "phys:weinberg-gauge-mass-matrix",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:free-field-time-evolution-photon-evidence-scope",
      "source": "phys:free-field-time-evolution",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:electromagnetic-photon-field-photon-evidence-scope",
      "source": "phys:electromagnetic-photon-field",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:one-photon-wavepacket-boundary-photon-evidence-scope",
      "source": "phys:one-photon-wavepacket-boundary",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:internal-propagator-photon-evidence-scope",
      "source": "phys:internal-propagator",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:external-scattering-state-photon-evidence-scope",
      "source": "phys:external-scattering-state",
      "target": "phys:photon-evidence-scope",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "This scoped formal input constrains the photon description; it does not establish a measured formation threshold, detector identity or universal maintenance process.",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "id": "physics:photon-evidence-scope-photon-evidence-boundary",
      "source": "phys:photon-evidence-scope",
      "target": "phys:photon-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This bounded input supplies a definition boundary or its own prepared observable; the descriptive comparison supplies neither independent replication nor pooled photon-property inference.",
      "claimIds": [
        "M-phys-photon-evidence-boundary"
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:triggered-optical-coincidences-photon-evidence-boundary",
      "source": "phys:triggered-optical-coincidences",
      "target": "phys:photon-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This bounded input supplies a definition boundary or its own prepared observable; the descriptive comparison supplies neither independent replication nor pooled photon-property inference.",
      "claimIds": [
        "M-phys-photon-evidence-boundary"
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:triggered-optical-anticorrelation-photon-evidence-boundary",
      "source": "phys:triggered-optical-anticorrelation",
      "target": "phys:photon-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This bounded input supplies a definition boundary or its own prepared observable; the descriptive comparison supplies neither independent replication nor pooled photon-property inference.",
      "claimIds": [
        "M-phys-photon-evidence-boundary"
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kessler-capture-wavelength-photon-evidence-boundary",
      "source": "phys:kessler-capture-wavelength",
      "target": "phys:photon-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This bounded input supplies a definition boundary or its own prepared observable; the descriptive comparison supplies neither independent replication nor pooled photon-property inference.",
      "claimIds": [
        "M-phys-photon-evidence-boundary"
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    },
    {
      "id": "physics:kloe2007-radiative-ratio-photon-evidence-boundary",
      "source": "phys:kloe2007-radiative-ratio",
      "target": "phys:photon-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This bounded input supplies a definition boundary or its own prepared observable; the descriptive comparison supplies neither independent replication nor pooled photon-property inference.",
      "claimIds": [
        "M-phys-photon-evidence-boundary"
      ],
      "contextIds": [
        "grangier1986-counting",
        "grangier1986-anticorrelation-inference",
        "kessler1995",
        "kessler1998",
        "kloe2007-meson-response"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:photon-evidence-scope",
      "role": "definition",
      "denotes": "A definition boundary separating free photon states, source/detector events and electromagnetic mediation; not an observed universal formation mechanism.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-photon-evidence-scope"
      ]
    },
    {
      "nodeId": "phys:photon-evidence-boundary",
      "role": "scoped-phenomenon",
      "denotes": "A comparison of named optical and radiative evidence with distinct measurement and inference stages, not a new experiment or combined fit.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-photon-evidence-boundary"
      ]
    }
  ]
};

/** Preserve photon-state, counting and radiative-evidence boundaries. */
export function validatePhotonScopeContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Photon scope ${kind} changed ${id}: preserve state, detector and mediation boundaries`);
    }
  }
}
