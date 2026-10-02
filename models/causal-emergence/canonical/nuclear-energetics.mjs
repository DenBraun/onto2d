import assert from "node:assert/strict";

export const NUCLEAR_ENERGETICS_CHECKS = new Map([["deuteron-beta-threshold-arithmetic", "C-phys-deuteron-beta-threshold"]]);
export const NUCLEAR_ENERGETICS_ANALYTICAL_SOURCES = new Map([["C-phys-deuteron-beta-threshold", "nuclear-energetics-verifier"]]);

export const NUCLEAR_ENERGETICS_ADMISSION = {
  "definitions": [
    [
      "phys:decay-energy-threshold",
      "D-phys-decay-energy-threshold"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "deuteron-beta-context",
      "M-phys-deuteron-beta-context",
      [
        "deuteron-beta-energetics"
      ]
    ]
  ],
  "observations": [
    [
      "deuteron-beta-threshold",
      "C-phys-deuteron-beta-threshold",
      [
        "deuteron-beta-energetics"
      ]
    ]
  ],
  "dependencies": [
    [
      "decay-energy-threshold-deuteron-beta-threshold",
      "decay-energy-threshold",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ],
    [
      "deuteron-beta-context-deuteron-beta-threshold",
      "deuteron-beta-context",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ],
    [
      "rau-joint-adjustment-deuteron-beta-threshold",
      "rau-joint-adjustment",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ],
    [
      "neutron-mass-balance-deuteron-beta-threshold",
      "neutron-mass-balance",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ],
    [
      "rau-capture-binding-deuteron-beta-threshold",
      "rau-capture-binding",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ],
    [
      "rau-neutron-mass-deuteron-beta-threshold",
      "rau-neutron-mass",
      "deuteron-beta-threshold",
      "M-phys-deuteron-beta-threshold",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "deuteron-beta-energetics"
  ],
  "comparisonIds": [
    "deuteron-beta-threshold"
  ],
  "inferenceSources": [
    [
      "M-phys-deuteron-beta-context",
      [
        "pdg2025-kinematics",
        "rau2020",
        "codata2018-constants",
        "nuclear-energetics-verifier"
      ]
    ],
    [
      "C-phys-deuteron-beta-threshold",
      [
        "pdg2025-kinematics",
        "rau2020",
        "codata2018-constants",
        "nuclear-energetics-verifier"
      ]
    ],
    [
      "M-phys-deuteron-beta-threshold",
      [
        "pdg2025-kinematics",
        "rau2020",
        "codata2018-constants",
        "nuclear-energetics-verifier"
      ]
    ]
  ],
  "localStudySources": [
    [
      "deuteron-beta-energetics",
      "nuclear-energetics-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "pdg2025-kinematics",
      "kind": "research-publication",
      "title": "Kinematics: Review of Particle Physics, 2025 update",
      "authors": [
        "D. Miller",
        "D. R. Tovey",
        "J. D. Jackson"
      ],
      "year": 2025,
      "doi": null,
      "url": "https://pdg.lbl.gov/2025/reviews/rpp2025-rev-kinematics.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-formal-passages",
        "locators": [
          "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space"
        ],
        "limit": "Pages 1-2, Sections 49.1, 49.3 and 49.4 through Equation 49.12 were read. The chapter says reviewed August 2021 and written January 2000; the inspected 2025 edition has a 1 December 2025 footer. The parent Review of Particle Physics DOI is not assigned as a distinct chapter DOI. Remaining sections, decay amplitudes and experimental evidence are not reviewed. The deuteron Q sign is a local inference from these formal conditions, not an experimental result of this chapter."
      }
    },
    {
      "id": "codata2018-constants",
      "kind": "research-dataset",
      "title": "2018 CODATA adjustment: Fundamental Physical Constants, Extensive Listing",
      "authors": [
        "CODATA Task Group on Fundamental Constants",
        "National Institute of Standards and Technology"
      ],
      "year": 2018,
      "doi": null,
      "url": "https://physics.nist.gov/cuu/pdf/all_2018.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-official-constant-table-entries",
        "locators": [
          "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention"
        ],
        "limit": "Only the electron-mass entries on page 2 and atomic-mass-constant entries and unit footnote on page 6 were read. The year identifies the 2018 adjustment, not a newly established PDF publication date. These are adopted reference values with standard uncertainties, not independent measurements; the original adjustment, covariance and underlying experiments are not replayed."
      }
    },
    {
      "id": "nuclear-energetics-verifier",
      "kind": "executable-check",
      "title": "Conditional deuteron beta-breakup energy verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-nuclear-energetics.py",
      "sha256": "7d2cda4e343b38f09a43d099d3cc16b41234ffd277e08f318723d37f8f38cd53",
      "review": {
        "extent": "declared-local-calculation",
        "locators": [
          "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
        ],
        "limit": "Decimal calculations test the selected bare-state rest-energy difference, shared-binding identity, rounded-input distinction and one covariance contribution. They do not replay a mass fit, full covariance or a decay rate and do not establish all-channel stability."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-decay-energy-threshold",
      "kind": "review-finding",
      "statement": "For an isolated particle at rest and declared asymptotically free final particles with positive on-shell energies, energy conservation requires initial rest energy at least the sum of final rest energies. A negative Q=(M-sum(mi))*c^2 excludes that final state; a nonnegative Q alone supplies no decay amplitude or lifetime.",
      "scope": "Positive-energy on-shell kinematics for a specified isolated decay channel; this is a necessary threshold condition, not a decay-rate model.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ]
    },
    {
      "id": "M-phys-deuteron-beta-context",
      "kind": "method",
      "statement": "Specify ground-state bare d -> free p+p+e-+electron-antineutrino, adopt the Rau joint adjusted proton/deuteron pair and CODATA 2018 electron and unit inputs, and evaluate the rest-energy excess with zero neutrino mass as the most permissive threshold.",
      "scope": "The declared isolated bare-deuteron beta-breakup channel and a bounded calculation using the Rau joint adjusted masses and adopted CODATA 2018 constants.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The channel is an isolated ground-state bare deuteron with no supplied energy and asymptotically free p+p+e-+electron-antineutrino final particles. Its net charge is +1 on both sides. Neutral atoms, electronic bound final states, molecular ions and externally driven breakup are different state specifications.",
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "The calculation uses the one Rau joint adjusted pair mp=1.007276466580(17)u and md=2.013553212537(16)u with correlation +0.26. These reuse the published mass measurements and molecular/reference inputs; the local adjustment, direct deuteron and earlier proton values are not substituted or pooled as independent replicas.",
        "The adopted CODATA 2018 inputs are me=0.000548579909065(16)u and u*c^2=931494102.42(28)eV. They are external adjustment values, not new electron-mass or energy-conversion measurements; this calculation does not update them to a later adjustment.",
        "The admitted neutron mass was inferred as mn=md-mp+Bd/c^2 using the same adjusted masses and capture binding. Substitution into (mn-mp-me)c^2-Bd cancels Bd identically. Capture-derived mn and Bd are not independent confirmation of the reduced Q and cannot be assigned independent errors in that expression.",
        "Separately inserting printed mn=1.00866491604u and Bd/c^2=0.00238817008u gives a Q larger by 0.0027944823...eV than the reduced expression. The identity gives mn=1.008664916037u, compatible with the printed neutron rounding; the difference is not a source-analysis error or a second acquisition. The display-rounding box is not a confidence interval.",
        "The published +0.26 mass-pair correlation enters var(md-2mp)=var(md)+4var(mp)-4cov(md,mp), giving about 0.0313eV standard uncertainty for this contribution alone. Electron/reference cross-covariances and the full adjustment are not reconstructed; no complete Q uncertainty, discovery significance or calibrated coverage is supplied.",
        "Bare nuclear masses cannot be replaced by neutral hydrogen-isotope masses. For positive electronic binding energies IH and ID, Q0=[M(D)-2M(H)]c^2+ID-2IH. This identity retains the declared bare-particle channel; it does not import a neutral-atom decay or its final electronic states.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "C-phys-deuteron-beta-threshold",
      "kind": "review-finding",
      "statement": "For the declared bare-deuteron channel, the local calculation gives Q0=(md-2mp-me)*c^2=-1.44223 MeV approximately. The printed-input rounding box remains negative, excluding this spontaneous final state under the stated kinematic conditions; the capture-derived neutron route cancels the shared binding input.",
      "scope": "The declared isolated bare-deuteron beta-breakup channel and a bounded calculation using the Rau joint adjusted masses and adopted CODATA 2018 constants.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "supports",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        }
      ],
      "checkIds": [
        "deuteron-beta-threshold-arithmetic"
      ],
      "limitations": [
        "The channel is an isolated ground-state bare deuteron with no supplied energy and asymptotically free p+p+e-+electron-antineutrino final particles. Its net charge is +1 on both sides. Neutral atoms, electronic bound final states, molecular ions and externally driven breakup are different state specifications.",
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "The calculation uses the one Rau joint adjusted pair mp=1.007276466580(17)u and md=2.013553212537(16)u with correlation +0.26. These reuse the published mass measurements and molecular/reference inputs; the local adjustment, direct deuteron and earlier proton values are not substituted or pooled as independent replicas.",
        "The adopted CODATA 2018 inputs are me=0.000548579909065(16)u and u*c^2=931494102.42(28)eV. They are external adjustment values, not new electron-mass or energy-conversion measurements; this calculation does not update them to a later adjustment.",
        "The admitted neutron mass was inferred as mn=md-mp+Bd/c^2 using the same adjusted masses and capture binding. Substitution into (mn-mp-me)c^2-Bd cancels Bd identically. Capture-derived mn and Bd are not independent confirmation of the reduced Q and cannot be assigned independent errors in that expression.",
        "Separately inserting printed mn=1.00866491604u and Bd/c^2=0.00238817008u gives a Q larger by 0.0027944823...eV than the reduced expression. The identity gives mn=1.008664916037u, compatible with the printed neutron rounding; the difference is not a source-analysis error or a second acquisition. The display-rounding box is not a confidence interval.",
        "The published +0.26 mass-pair correlation enters var(md-2mp)=var(md)+4var(mp)-4cov(md,mp), giving about 0.0313eV standard uncertainty for this contribution alone. Electron/reference cross-covariances and the full adjustment are not reconstructed; no complete Q uncertainty, discovery significance or calibrated coverage is supplied.",
        "Bare nuclear masses cannot be replaced by neutral hydrogen-isotope masses. For positive electronic binding energies IH and ID, Q0=[M(D)-2M(H)]c^2+ID-2IH. This identity retains the declared bare-particle channel; it does not import a neutral-atom decay or its final electronic states.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "M-phys-deuteron-beta-threshold",
      "kind": "method",
      "statement": "Compute Q0 from the adjusted nuclear masses, retain their +0.26 correlation for the mass-pair variance term, and use mn=md-mp+Bd/c^2 only to check exact binding cancellation and the separately rounded neutron expression.",
      "scope": "The declared isolated bare-deuteron beta-breakup channel and a bounded calculation using the Rau joint adjusted masses and adopted CODATA 2018 constants.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "method",
          "note": "Supports only the specified formal threshold, adopted input or declared local calculation; no new decay or mass acquisition is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The channel is an isolated ground-state bare deuteron with no supplied energy and asymptotically free p+p+e-+electron-antineutrino final particles. Its net charge is +1 on both sides. Neutral atoms, electronic bound final states, molecular ions and externally driven breakup are different state specifications.",
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "The calculation uses the one Rau joint adjusted pair mp=1.007276466580(17)u and md=2.013553212537(16)u with correlation +0.26. These reuse the published mass measurements and molecular/reference inputs; the local adjustment, direct deuteron and earlier proton values are not substituted or pooled as independent replicas.",
        "The adopted CODATA 2018 inputs are me=0.000548579909065(16)u and u*c^2=931494102.42(28)eV. They are external adjustment values, not new electron-mass or energy-conversion measurements; this calculation does not update them to a later adjustment.",
        "The admitted neutron mass was inferred as mn=md-mp+Bd/c^2 using the same adjusted masses and capture binding. Substitution into (mn-mp-me)c^2-Bd cancels Bd identically. Capture-derived mn and Bd are not independent confirmation of the reduced Q and cannot be assigned independent errors in that expression.",
        "Separately inserting printed mn=1.00866491604u and Bd/c^2=0.00238817008u gives a Q larger by 0.0027944823...eV than the reduced expression. The identity gives mn=1.008664916037u, compatible with the printed neutron rounding; the difference is not a source-analysis error or a second acquisition. The display-rounding box is not a confidence interval.",
        "The published +0.26 mass-pair correlation enters var(md-2mp)=var(md)+4var(mp)-4cov(md,mp), giving about 0.0313eV standard uncertainty for this contribution alone. Electron/reference cross-covariances and the full adjustment are not reconstructed; no complete Q uncertainty, discovery significance or calibrated coverage is supplied.",
        "Bare nuclear masses cannot be replaced by neutral hydrogen-isotope masses. For positive electronic binding energies IH and ID, Q0=[M(D)-2M(H)]c^2+ID-2IH. This identity retains the declared bare-particle channel; it does not import a neutral-atom decay or its final electronic states.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    }
  ],
  "studies": [
    {
      "id": "deuteron-beta-energetics",
      "sourceId": "nuclear-energetics-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Isolated ground-state bare-deuteron beta-breakup energy",
      "preparation": "Specify ground-state bare d -> free p+p+e-+electron-antineutrino, adopt the Rau joint adjusted proton/deuteron pair and CODATA 2018 electron and unit inputs, and evaluate the rest-energy excess with zero neutrino mass as the most permissive threshold.",
      "observable": "Conditional rest-energy excess and sign, exact shared-binding cancellation and one correlated mass-pair uncertainty contribution.",
      "finding": "For the declared bare-deuteron channel, the local calculation gives Q0=(md-2mp-me)*c^2=-1.44223 MeV approximately. The printed-input rounding box remains negative, excluding this spontaneous final state under the stated kinematic conditions; the capture-derived neutron route cancels the shared binding input.",
      "limitations": [
        "The channel is an isolated ground-state bare deuteron with no supplied energy and asymptotically free p+p+e-+electron-antineutrino final particles. Its net charge is +1 on both sides. Neutral atoms, electronic bound final states, molecular ions and externally driven breakup are different state specifications.",
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "The calculation uses the one Rau joint adjusted pair mp=1.007276466580(17)u and md=2.013553212537(16)u with correlation +0.26. These reuse the published mass measurements and molecular/reference inputs; the local adjustment, direct deuteron and earlier proton values are not substituted or pooled as independent replicas.",
        "The adopted CODATA 2018 inputs are me=0.000548579909065(16)u and u*c^2=931494102.42(28)eV. They are external adjustment values, not new electron-mass or energy-conversion measurements; this calculation does not update them to a later adjustment.",
        "The admitted neutron mass was inferred as mn=md-mp+Bd/c^2 using the same adjusted masses and capture binding. Substitution into (mn-mp-me)c^2-Bd cancels Bd identically. Capture-derived mn and Bd are not independent confirmation of the reduced Q and cannot be assigned independent errors in that expression.",
        "Separately inserting printed mn=1.00866491604u and Bd/c^2=0.00238817008u gives a Q larger by 0.0027944823...eV than the reduced expression. The identity gives mn=1.008664916037u, compatible with the printed neutron rounding; the difference is not a source-analysis error or a second acquisition. The display-rounding box is not a confidence interval.",
        "The published +0.26 mass-pair correlation enters var(md-2mp)=var(md)+4var(mp)-4cov(md,mp), giving about 0.0313eV standard uncertainty for this contribution alone. Electron/reference cross-covariances and the full adjustment are not reconstructed; no complete Q uncertainty, discovery significance or calibrated coverage is supplied.",
        "Bare nuclear masses cannot be replaced by neutral hydrogen-isotope masses. For positive electronic binding energies IH and ID, Q0=[M(D)-2M(H)]c^2+ID-2IH. This identity retains the declared bare-particle channel; it does not import a neutral-atom decay or its final electronic states.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ],
      "readExtent": "declared-local-calculation",
      "reviewedLocators": [
        "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "Local calculation checked against the specified published inputs and selected formal passages; original mass adjustments and complete covariance are not reproduced."
    }
  ],
  "comparisons": [
    {
      "id": "deuteron-beta-threshold",
      "candidate": "The specified isolated bare-deuteron final state is energetically excluded by the adopted nuclear mass difference.",
      "alternative": "The finite calculation establishes a nuclear lifetime, universal bound-neutron stability or independent corroboration by capture-derived quantities.",
      "discriminator": "Use positive-energy on-shell kinematics and the reduced mass combination; verify the shared-binding cancellation, printed rounding and the published mass-pair correlation.",
      "result": "conditional-support",
      "limit": "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced.",
      "assumptions": [
        "The channel is an isolated ground-state bare deuteron with no supplied energy and asymptotically free p+p+e-+electron-antineutrino final particles. Its net charge is +1 on both sides. Neutral atoms, electronic bound final states, molecular ions and externally driven breakup are different state specifications.",
        "Q0 neglects the antineutrino rest mass; any nonnegative final neutrino mass raises the required rest energy. Positive-energy on-shell final particles and four-momentum conservation make Q0<0 an exclusion for this channel. Q0>=0 alone would not establish a nonzero matrix element or rate.",
        "The calculation uses the one Rau joint adjusted pair mp=1.007276466580(17)u and md=2.013553212537(16)u with correlation +0.26. These reuse the published mass measurements and molecular/reference inputs; the local adjustment, direct deuteron and earlier proton values are not substituted or pooled as independent replicas.",
        "The adopted CODATA 2018 inputs are me=0.000548579909065(16)u and u*c^2=931494102.42(28)eV. They are external adjustment values, not new electron-mass or energy-conversion measurements; this calculation does not update them to a later adjustment.",
        "The admitted neutron mass was inferred as mn=md-mp+Bd/c^2 using the same adjusted masses and capture binding. Substitution into (mn-mp-me)c^2-Bd cancels Bd identically. Capture-derived mn and Bd are not independent confirmation of the reduced Q and cannot be assigned independent errors in that expression.",
        "Separately inserting printed mn=1.00866491604u and Bd/c^2=0.00238817008u gives a Q larger by 0.0027944823...eV than the reduced expression. The identity gives mn=1.008664916037u, compatible with the printed neutron rounding; the difference is not a source-analysis error or a second acquisition. The display-rounding box is not a confidence interval.",
        "The published +0.26 mass-pair correlation enters var(md-2mp)=var(md)+4var(mp)-4cov(md,mp), giving about 0.0313eV standard uncertainty for this contribution alone. Electron/reference cross-covariances and the full adjustment are not reconstructed; no complete Q uncertainty, discovery significance or calibrated coverage is supplied.",
        "Bare nuclear masses cannot be replaced by neutral hydrogen-isotope masses. For positive electronic binding energies IH and ID, Q0=[M(D)-2M(H)]c^2+ID-2IH. This identity retains the declared bare-particle channel; it does not import a neutral-atom decay or its final electronic states.",
        "This is a new bounded calculation from published inputs, not a beta-decay measurement reported by Rau. It establishes neither all-channel deuteron permanence, a nuclear or individual bound-neutron lifetime, nor stability of arbitrary nuclei. No weak amplitude, phase-space rate, raw mass fit, instrument calibration or complete covariance is reproduced."
      ],
      "sourceIds": [
        "pdg2025-kinematics",
        "rau2020",
        "codata2018-constants",
        "nuclear-energetics-verifier"
      ],
      "claimIds": [
        "C-phys-deuteron-beta-threshold"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:decay-energy-threshold",
      "name": "Specified-channel decay energy threshold",
      "kind": "definition",
      "description": "For an isolated particle at rest and declared asymptotically free final particles with positive on-shell energies, energy conservation requires initial rest energy at least the sum of final rest energies. A negative Q=(M-sum(mi))*c^2 excludes that final state; a nonnegative Q alone supplies no decay amplitude or lifetime.",
      "claimIds": [
        "D-phys-decay-energy-threshold"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space"
        }
      ],
      "openObligations": [
        "Keep this specified-channel threshold separate from a lifetime or all-channel stability claim."
      ]
    },
    {
      "id": "phys:deuteron-beta-context",
      "name": "Bare-deuteron energy calculation",
      "kind": "context",
      "description": "Specify ground-state bare d -> free p+p+e-+electron-antineutrino, adopt the Rau joint adjusted proton/deuteron pair and CODATA 2018 electron and unit inputs, and evaluate the rest-energy excess with zero neutrino mass as the most permissive threshold.",
      "claimIds": [
        "M-phys-deuteron-beta-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention"
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
        }
      ],
      "openObligations": [
        "The published input adjustment and full covariance remain unreproduced; no lifetime follows from this calculation."
      ]
    },
    {
      "id": "phys:deuteron-beta-threshold",
      "name": "Negative bare-deuteron beta-breakup energy",
      "kind": "scoped-process",
      "description": "For the declared bare-deuteron channel, the local calculation gives Q0=(md-2mp-me)*c^2=-1.44223 MeV approximately. The printed-input rounding box remains negative, excluding this spontaneous final state under the stated kinematic conditions; the capture-derived neutron route cancels the shared binding input.",
      "claimIds": [
        "C-phys-deuteron-beta-threshold"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Pages 1-2, Sections 49.1 and 49.3, Equation 49.9: on-shell four-momentum, positive energy and c=1 convention"
        },
        {
          "sourceId": "pdg2025-kinematics",
          "locator": "Page 2, Section 49.4 and Equations 49.11-49.12: n-body decay rate and energy-momentum-conserving phase space"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript pages 4-7, Table 2 and Methods: local and joint mass adjustments, correlations and remaining mass-combination tension"
        },
        {
          "sourceId": "rau2020",
          "locator": "Author manuscript page 7, Methods: ILL lattice rescaling, capture wavelength, recoil and binding-energy conversion"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 2, Electron section: adopted 2018 electron mass in u and its standard uncertainty"
        },
        {
          "sourceId": "codata2018-constants",
          "locator": "Page 6, atomic mass constant entries and footnote: adopted 2018 u*c^2 in MeV and relative-mass convention"
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
        }
      ],
      "openObligations": [
        "The published input adjustment and full covariance remain unreproduced; no lifetime follows from this calculation."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:decay-energy-threshold-deuteron-beta-threshold",
      "source": "phys:decay-energy-threshold",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Positive-energy kinematics makes the negative rest-energy excess an exclusion for this specified final state, not a lifetime prediction.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "physics:deuteron-beta-context-deuteron-beta-threshold",
      "source": "phys:deuteron-beta-context",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The bare initial and free final states, adopted constants and no-external-energy convention delimit this conditional calculation.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "physics:rau-joint-adjustment-deuteron-beta-threshold",
      "source": "phys:rau-joint-adjustment",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The one published adjusted proton/deuteron pair and its +0.26 correlation supply the mass inputs; no independent re-fit is claimed.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "physics:neutron-mass-balance-deuteron-beta-threshold",
      "source": "phys:neutron-mass-balance",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The nuclear mass identity justifies eliminating the common binding term from the alternative neutron expression.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "physics:rau-capture-binding-deuteron-beta-threshold",
      "source": "phys:rau-capture-binding",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The same capture binding enters only the alternative-expression cancellation and rounded-input diagnostic; it is not an independent confirmation of the reduced Q.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    },
    {
      "id": "physics:rau-neutron-mass-deuteron-beta-threshold",
      "source": "phys:rau-neutron-mass",
      "target": "phys:deuteron-beta-threshold",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The capture-derived neutron mass supplies a rounded-equivalence comparison, not an independent neutron measurement or an additional Q constraint.",
      "claimIds": [
        "M-phys-deuteron-beta-threshold"
      ],
      "contextIds": [
        "deuteron-beta-energetics"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:decay-energy-threshold",
      "role": "definition",
      "denotes": "For an isolated particle at rest and declared asymptotically free final particles with positive on-shell energies, energy conservation requires initial rest energy at least the sum of final rest energies. A negative Q=(M-sum(mi))*c^2 excludes that final state; a nonnegative Q alone supplies no decay amplitude or lifetime.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-decay-energy-threshold"
      ]
    },
    {
      "nodeId": "phys:deuteron-beta-context",
      "role": "model-context",
      "denotes": "Specify ground-state bare d -> free p+p+e-+electron-antineutrino, adopt the Rau joint adjusted proton/deuteron pair and CODATA 2018 electron and unit inputs, and evaluate the rest-energy excess with zero neutrino mass as the most permissive threshold.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-deuteron-beta-context"
      ]
    },
    {
      "nodeId": "phys:deuteron-beta-threshold",
      "role": "scoped-phenomenon",
      "denotes": "For the declared bare-deuteron channel, the local calculation gives Q0=(md-2mp-me)*c^2=-1.44223 MeV approximately. The printed-input rounding box remains negative, excluding this spontaneous final state under the stated kinematic conditions; the capture-derived neutron route cancels the shared binding input.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-deuteron-beta-threshold"
      ]
    }
  ]
};

/** Keep the local threshold conditional and the adopted/capture inputs dependent. */
export function validateNuclearEnergeticsContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing nuclear energetics ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Nuclear energetics ${kind} changed ${id}.${key}: preserve threshold, state and input-dependence scope`);
      }
    }
  }
}
