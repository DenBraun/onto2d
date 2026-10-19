import assert from "node:assert/strict";

export const SURFACE_SCATTERING_CHECKS = new Map();
export const SURFACE_SCATTERING_ANALYTICAL_SOURCES = new Map();
export const SURFACE_SCATTERING_STUDY_TYPES = new Map([["patrick2021-rosi", "primary-experiment"]]);
export const SURFACE_SCATTERING_ADMISSION = {
  "definitions": [
    [
      "phys:angular-surface-radiometry",
      "D-phys-angular-surface-radiometry"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "patrick2021-rosi-context",
      "M-phys-patrick2021-rosi-context",
      [
        "patrick2021-rosi"
      ]
    ]
  ],
  "observations": [
    [
      "rosi-ptfe-angular-response",
      "C-phys-rosi-ptfe-angular-response",
      [
        "patrick2021-rosi"
      ]
    ],
    [
      "surface-scattering-source-scope",
      "C-phys-surface-scattering-source-scope",
      [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    ]
  ],
  "dependencies": [
    [
      "patrick2021-rosi-context-rosi-ptfe-angular-response",
      "patrick2021-rosi-context",
      "rosi-ptfe-angular-response",
      "M-phys-rosi-ptfe-angular-response",
      "interpretation-dependency"
    ],
    [
      "angular-surface-radiometry-rosi-ptfe-angular-response",
      "angular-surface-radiometry",
      "rosi-ptfe-angular-response",
      "M-phys-rosi-ptfe-angular-response",
      "interpretation-dependency"
    ],
    [
      "angular-surface-radiometry-surface-scattering-source-scope",
      "angular-surface-radiometry",
      "surface-scattering-source-scope",
      "M-phys-surface-scattering-source-scope",
      "interpretation-dependency"
    ],
    [
      "rosi-ptfe-angular-response-surface-scattering-source-scope",
      "rosi-ptfe-angular-response",
      "surface-scattering-source-scope",
      "M-phys-surface-scattering-source-scope",
      "interpretation-dependency"
    ],
    [
      "opt-specular-response-surface-scattering-source-scope",
      "opt:specular-response",
      "surface-scattering-source-scope",
      "M-phys-surface-scattering-source-scope",
      "interpretation-dependency"
    ],
    [
      "opt-brdf-surface-scattering-source-scope",
      "opt:brdf",
      "surface-scattering-source-scope",
      "M-phys-surface-scattering-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "patrick2021-rosi"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-patrick2021-rosi-context",
      [
        "patrick2021-rosi"
      ]
    ],
    [
      "C-phys-rosi-ptfe-angular-response",
      [
        "patrick2021-rosi"
      ]
    ],
    [
      "M-phys-rosi-ptfe-angular-response",
      [
        "patrick2021-rosi"
      ]
    ],
    [
      "C-phys-surface-scattering-source-scope",
      [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    ],
    [
      "M-phys-surface-scattering-source-scope",
      [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-angular-surface-radiometry",
      "kind": "review-finding",
      "statement": "For the selected uniform-sample radiometry, distinguish specular reflected/incident flux ratio, directional BRDF f_r in sr^-1, dimensionless reflectance factor R=pi*f_r and directional-hemispherical reflectance integrated over outgoing directions at fixed incidence. In ROSI under-illumination, f_r equals the corrected reflected/incident flux ratio divided by the effective projected solid angle Omega_prime=(A/D^2)*C_f*C_e*cos(theta_r). Geometry, incident polarization, wavelength and illuminated position are part of the declared observable.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /21. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause."
      ]
    },
    {
      "id": "M-phys-patrick2021-rosi-context",
      "kind": "method",
      "statement": "Use the source ROSI under-illumination method: measure the entire incident-beam flux with the sample translated out, then the reflected flux in the selected viewing aperture with the sample in place. Normalize receiver/monitor signals and relative gain/sensitivity settings and apply finite-aperture/collection corrections. For the selected sintered PTFE scan use 550 nm illumination, incident azimuth180 degrees and incident polar angles70 to0 degrees; the actual viewing polar angle is45 degrees with azimuth90 or135 degrees. The white and gray targets have nominal vendor directional-hemispherical reflectances99 and10 percent, not prescribed constant bidirectional factors.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8780-8782, Section 4.E Equations 16-18 and Sections 5.A-5.D Figures 6-9: sample-specific uncertainty, correlated polarization averaging and same-sample instrument comparisons",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "contextIds": [
        "patrick2021-rosi"
      ]
    },
    {
      "id": "C-phys-rosi-ptfe-angular-response",
      "kind": "review-finding",
      "statement": "At550 nm the reported white and gray sintered-PTFE reflectance factors vary with the selected illumination/viewing geometry and depart from their constant Lambertian reference values, especially at large incident angles. For the gray target at90-degree viewing azimuth, using the nominal Lambertian value would produce a reported reference-value error exceeding30 percent. The source roughly estimates relative expanded uncertainties k=2 of1 percent for white and2 percent for gray in this scan; these are not universal instrument limits.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8780-8782, Section 4.E Equations 16-18 and Sections 5.A-5.D Figures 6-9: sample-specific uncertainty, correlated polarization averaging and same-sample instrument comparisons",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "contextIds": [
        "patrick2021-rosi"
      ]
    },
    {
      "id": "M-phys-rosi-ptfe-angular-response",
      "kind": "method",
      "statement": "Interpret the corrected flux-ratio scans with the declared aperture and angle conventions. Compare measured bidirectional factors with the constant values assumed for ideal Lambertian vendor-reference use; keep nominal hemispherical labels and approximate out-of-plane uncertainties distinct from directly observed raw counts or an independently solved microscopic mechanism.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "contextIds": [
        "patrick2021-rosi"
      ]
    },
    {
      "id": "C-phys-surface-scattering-source-scope",
      "kind": "review-finding",
      "statement": "Existing specified IR samples have an aggregate reflected-light response under their collection setup. The separate PTFE study supplies a finite angular example in which outgoing reflectance factors depend on the stated illumination and viewing geometry. Together with scoped radiometry, these support sample- and geometry-conditioned optical redistribution, while preserving the distinction between an integrated signal, an angular measurement and an unsolved inverse surface/scene problem.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /21. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "Retain the existing specified IR integrating-sphere sample study separately from the new PTFE angular scan. Their wavelength ranges, specimens, collection geometries and estimators differ; neither is a duplicate acquisition or a joint fitted likelihood.",
        "Measured sample response and directional radiometric definitions support a bounded outgoing-light mapping. They do not establish autonomous SOMA scene encoding, every image-formation/sensing/vision application, an optical-to-retinal transfer or uniquely invertible surface characterization.",
        "Original necessary parents2.1 and2.9 with weights0.5/0.5, upward direction[0], constraint mode[1], dependency types10/0 and arising roles do not supply fitted causal fractions or a universal formation history. Crystal periodic order is not established as a necessary premise of every reflectance description or surface response.",
        "Original carrier group0/type2 for2.1 and group1/type0 for2.9, both N_min=N_crit=2 and N_sat=null, are catalogue defaults rather than measured onset populations. Two optical directions, detector positions or particular samples do not validate them.",
        "Original Level2, Phase1, TypeRole2 Pattern, Science[1,41], established, MustCover[10,0], ShouldCover[12] and Optional[] are classification choices. A response map is not independently measured ontological autonomy or a universal emergence stage.",
        "The original generic boundary/scattering/BRDF and experimental placeholders contain null DOI/URL. Only declared formal definitions, the existing IR evidence and this selected primary angular measurement are admitted; no broad rough-surface wave solver, all-material survey, full-hemisphere inversion or new numerical replay is claimed.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    },
    {
      "id": "M-phys-surface-scattering-source-scope",
      "kind": "method",
      "statement": "Synthesize the two original preparations only at the level of bounded material optical response. Preserve full IR and PTFE contexts, integrated versus directional readouts, finite-aperture corrections, unknown microscopic alternatives and source-specific uncertainties. Do not infer a unique scene/surface, prior crystal stage or original carrier thresholds.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /21. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "Retain the existing specified IR integrating-sphere sample study separately from the new PTFE angular scan. Their wavelength ranges, specimens, collection geometries and estimators differ; neither is a duplicate acquisition or a joint fitted likelihood.",
        "Measured sample response and directional radiometric definitions support a bounded outgoing-light mapping. They do not establish autonomous SOMA scene encoding, every image-formation/sensing/vision application, an optical-to-retinal transfer or uniquely invertible surface characterization.",
        "Original necessary parents2.1 and2.9 with weights0.5/0.5, upward direction[0], constraint mode[1], dependency types10/0 and arising roles do not supply fitted causal fractions or a universal formation history. Crystal periodic order is not established as a necessary premise of every reflectance description or surface response.",
        "Original carrier group0/type2 for2.1 and group1/type0 for2.9, both N_min=N_crit=2 and N_sat=null, are catalogue defaults rather than measured onset populations. Two optical directions, detector positions or particular samples do not validate them.",
        "Original Level2, Phase1, TypeRole2 Pattern, Science[1,41], established, MustCover[10,0], ShouldCover[12] and Optional[] are classification choices. A response map is not independently measured ontological autonomy or a universal emergence stage.",
        "The original generic boundary/scattering/BRDF and experimental placeholders contain null DOI/URL. Only declared formal definitions, the existing IR evidence and this selected primary angular measurement are admitted; no broad rough-surface wave solver, all-material survey, full-hemisphere inversion or new numerical replay is claimed.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:angular-surface-radiometry",
      "name": "Directional surface-radiometry and inverse-identification boundary",
      "kind": "definition",
      "description": "For the selected uniform-sample radiometry, distinguish specular reflected/incident flux ratio, directional BRDF f_r in sr^-1, dimensionless reflectance factor R=pi*f_r and directional-hemispherical reflectance integrated over outgoing directions at fixed incidence. In ROSI under-illumination, f_r equals the corrected reflected/incident flux ratio divided by the effective projected solid angle Omega_prime=(A/D^2)*C_f*C_e*cos(theta_r). Geometry, incident polarization, wavelength and illuminated position are part of the declared observable.",
      "claimIds": [
        "D-phys-angular-surface-radiometry"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor"
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration"
        },
        {
          "sourceId": "nicodemus1977",
          "locator": "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)"
        }
      ],
      "openObligations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause."
      ]
    },
    {
      "id": "phys:patrick2021-rosi-context",
      "name": "Prepared PTFE out-of-plane radiometry context",
      "kind": "context",
      "description": "Use the source ROSI under-illumination method: measure the entire incident-beam flux with the sample translated out, then the reflected flux in the selected viewing aperture with the sample in place. Normalize receiver/monitor signals and relative gain/sensitivity settings and apply finite-aperture/collection corrections. For the selected sintered PTFE scan use 550 nm illumination, incident azimuth180 degrees and incident polar angles70 to0 degrees; the actual viewing polar angle is45 degrees with azimuth90 or135 degrees. The white and gray targets have nominal vendor directional-hemispherical reflectances99 and10 percent, not prescribed constant bidirectional factors.",
      "claimIds": [
        "M-phys-patrick2021-rosi-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor"
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration"
        },
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates"
        }
      ],
      "openObligations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ]
    },
    {
      "id": "phys:rosi-ptfe-angular-response",
      "name": "Finite non-Lambertian PTFE angular response",
      "kind": "scoped-process",
      "description": "At550 nm the reported white and gray sintered-PTFE reflectance factors vary with the selected illumination/viewing geometry and depart from their constant Lambertian reference values, especially at large incident angles. For the gray target at90-degree viewing azimuth, using the nominal Lambertian value would produce a reported reference-value error exceeding30 percent. The source roughly estimates relative expanded uncertainties k=2 of1 percent for white and2 percent for gray in this scan; these are not universal instrument limits.",
      "claimIds": [
        "C-phys-rosi-ptfe-angular-response"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates"
        }
      ],
      "openObligations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ]
    },
    {
      "id": "phys:surface-scattering-source-scope",
      "name": "Scoped surface-reflection and angular-scattering evidence",
      "kind": "scoped-process",
      "description": "Existing specified IR samples have an aggregate reflected-light response under their collection setup. The separate PTFE study supplies a finite angular example in which outgoing reflectance factors depend on the stated illumination and viewing geometry. Together with scoped radiometry, these support sample- and geometry-conditioned optical redistribution, while preserving the distinction between an integrated signal, an angular measurement and an unsolved inverse surface/scene problem.",
      "claimIds": [
        "C-phys-surface-scattering-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "patrick2021-rosi",
          "locator": "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates"
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations"
        }
      ],
      "openObligations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "Retain the existing specified IR integrating-sphere sample study separately from the new PTFE angular scan. Their wavelength ranges, specimens, collection geometries and estimators differ; neither is a duplicate acquisition or a joint fitted likelihood.",
        "Measured sample response and directional radiometric definitions support a bounded outgoing-light mapping. They do not establish autonomous SOMA scene encoding, every image-formation/sensing/vision application, an optical-to-retinal transfer or uniquely invertible surface characterization.",
        "Original necessary parents2.1 and2.9 with weights0.5/0.5, upward direction[0], constraint mode[1], dependency types10/0 and arising roles do not supply fitted causal fractions or a universal formation history. Crystal periodic order is not established as a necessary premise of every reflectance description or surface response.",
        "Original carrier group0/type2 for2.1 and group1/type0 for2.9, both N_min=N_crit=2 and N_sat=null, are catalogue defaults rather than measured onset populations. Two optical directions, detector positions or particular samples do not validate them.",
        "Original Level2, Phase1, TypeRole2 Pattern, Science[1,41], established, MustCover[10,0], ShouldCover[12] and Optional[] are classification choices. A response map is not independently measured ontological autonomy or a universal emergence stage.",
        "The original generic boundary/scattering/BRDF and experimental placeholders contain null DOI/URL. Only declared formal definitions, the existing IR evidence and this selected primary angular measurement are admitted; no broad rough-surface wave solver, all-material survey, full-hemisphere inversion or new numerical replay is claimed.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:patrick2021-rosi-context-rosi-ptfe-angular-response",
      "source": "phys:patrick2021-rosi-context",
      "target": "phys:rosi-ptfe-angular-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-rosi-ptfe-angular-response"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "patrick2021-rosi"
      ]
    },
    {
      "id": "physics:angular-surface-radiometry-rosi-ptfe-angular-response",
      "source": "phys:angular-surface-radiometry",
      "target": "phys:rosi-ptfe-angular-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-rosi-ptfe-angular-response"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "patrick2021-rosi"
      ]
    },
    {
      "id": "physics:angular-surface-radiometry-surface-scattering-source-scope",
      "source": "phys:angular-surface-radiometry",
      "target": "phys:surface-scattering-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-surface-scattering-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    },
    {
      "id": "physics:rosi-ptfe-angular-response-surface-scattering-source-scope",
      "source": "phys:rosi-ptfe-angular-response",
      "target": "phys:surface-scattering-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-surface-scattering-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    },
    {
      "id": "physics:opt-specular-response-surface-scattering-source-scope",
      "source": "opt:specular-response",
      "target": "phys:surface-scattering-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-surface-scattering-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    },
    {
      "id": "physics:opt-brdf-surface-scattering-source-scope",
      "source": "opt:brdf",
      "target": "phys:surface-scattering-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-surface-scattering-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001",
        "patrick2021-rosi"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:angular-surface-radiometry",
      "role": "definition",
      "denotes": "For the selected uniform-sample radiometry, distinguish specular reflected/incident flux ratio, directional BRDF f_r in sr^-1, dimensionless reflectance factor R=pi*f_r and directional-hemispherical reflectance integrated over outgoing directions at fixed incidence. In ROSI under-illumination, f_r equals the corrected reflected/incident flux ratio divided by the effective projected solid angle Omega_prime=(A/D^2)*C_f*C_e*cos(theta_r). Geometry, incident polarization, wavelength and illuminated position are part of the declared observable.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-angular-surface-radiometry"
      ]
    },
    {
      "nodeId": "phys:patrick2021-rosi-context",
      "role": "experimental-context",
      "denotes": "Use the source ROSI under-illumination method: measure the entire incident-beam flux with the sample translated out, then the reflected flux in the selected viewing aperture with the sample in place. Normalize receiver/monitor signals and relative gain/sensitivity settings and apply finite-aperture/collection corrections. For the selected sintered PTFE scan use 550 nm illumination, incident azimuth180 degrees and incident polar angles70 to0 degrees; the actual viewing polar angle is45 degrees with azimuth90 or135 degrees. The white and gray targets have nominal vendor directional-hemispherical reflectances99 and10 percent, not prescribed constant bidirectional factors.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-patrick2021-rosi-context"
      ]
    },
    {
      "nodeId": "phys:rosi-ptfe-angular-response",
      "role": "scoped-phenomenon",
      "denotes": "At550 nm the reported white and gray sintered-PTFE reflectance factors vary with the selected illumination/viewing geometry and depart from their constant Lambertian reference values, especially at large incident angles. For the gray target at90-degree viewing azimuth, using the nominal Lambertian value would produce a reported reference-value error exceeding30 percent. The source roughly estimates relative expanded uncertainties k=2 of1 percent for white and2 percent for gray in this scan; these are not universal instrument limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-rosi-ptfe-angular-response"
      ]
    },
    {
      "nodeId": "phys:surface-scattering-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Existing specified IR samples have an aggregate reflected-light response under their collection setup. The separate PTFE study supplies a finite angular example in which outgoing reflectance factors depend on the stated illumination and viewing geometry. Together with scoped radiometry, these support sample- and geometry-conditioned optical redistribution, while preserving the distinction between an integrated signal, an angular measurement and an unsolved inverse surface/scene problem.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-surface-scattering-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "patrick2021-rosi",
      "sourceId": "patrick2021-rosi",
      "studyType": "primary-experiment",
      "doi": "10.1364/AO.435117",
      "journal": "Applied Optics",
      "volume": "60",
      "issue": "28",
      "pages": "8774-8786",
      "system": "Selected550nm out-of-plane reflectance-factor scans of sintered PTFE reference targets",
      "preparation": "Use the source ROSI under-illumination method: measure the entire incident-beam flux with the sample translated out, then the reflected flux in the selected viewing aperture with the sample in place. Normalize receiver/monitor signals and relative gain/sensitivity settings and apply finite-aperture/collection corrections. For the selected sintered PTFE scan use 550 nm illumination, incident azimuth180 degrees and incident polar angles70 to0 degrees; the actual viewing polar angle is45 degrees with azimuth90 or135 degrees. The white and gray targets have nominal vendor directional-hemispherical reflectances99 and10 percent, not prescribed constant bidirectional factors.",
      "observable": "Corrected reflected/incident flux ratios mapped to directional reflectance factors at declared geometries",
      "finding": "At550 nm the reported white and gray sintered-PTFE reflectance factors vary with the selected illumination/viewing geometry and depart from their constant Lambertian reference values, especially at large incident angles. For the gray target at90-degree viewing azimuth, using the nominal Lambertian value would produce a reported reference-value error exceeding30 percent. The source roughly estimates relative expanded uncertainties k=2 of1 percent for white and2 percent for gray in this scan; these are not universal instrument limits.",
      "limitations": [
        "BRDF has units sr^-1, while R=pi*f_r is a dimensionless directional reflectance factor relative to an ideal unit-reflecting Lambertian diffuser. Neither is an integrated reflected-energy fraction; a factor above one is not by itself an energy-conservation violation.",
        "Use the actual finite-spot, finite-aperture, spatial-uniformity and polarization conditions. The effective projected solid angle includes cos(theta_r) and finite-size/collection-efficiency corrections; a raw detector-voltage ratio is not a calibrated BRDF.",
        "Absolute ratio measurement means normalization to measured incident flux rather than a reference sample. It still requires monitor, relative-gain, angle, aperture, collection and sample-uniformity calibration; it is not calibration-free.",
        "Nominal directional-hemispherical reflectance, bidirectional reflectance factor and a whole angular distribution are different. One integral or one direction does not determine the other or uniquely identify microscopic roughness, composition, shape or a scene.",
        "A rough or porous target can have subsurface contributions. These data do not uniquely separate surface from volume scattering, reconstruct a complete electromagnetic boundary solution or measure crystallinity as a necessary cause.",
        "The preceding remote-sensing example mentions viewing near40 degrees; the actual reported Figure11 measurement uses45 degrees. Nominal99/10 percent directional-hemispherical labels are not independent measured Lambertian directional values.",
        "The source uses linearly polarized illumination and supplies a separate s/p averaging rule. Most systematic components are highly correlated between polarizations; unpolarized uncertainty is not automatically reduced by treating s and p as independent replicates.",
        "The out-of-plane uncertainty estimates are rough, target- and geometry-specific, and larger angle/solid-angle contributions are expected than for the tabulated in-plane calibration examples. No full covariance or universal precision is newly reconstructed.",
        "Reference-mirror/PTFE spectral scans and ROSI-STARR comparisons in this publication reuse the same named standards and calibration chain. They are not independent new studies for every wavelength, sample or instrument; the earlier STARR publication was not newly read.",
        "The exact microscopic reason for the Figure11 deviations is not resolved by the source. No raw signal/angle recalibration, curve digitization, fitted surface model, sensor-image experiment or scene-reconstruction accuracy is supplied.",
        "The Figure11 caption and selected Section6.B account do not state whether its curves use s polarization, p polarization or an unpolarized average. The general linear-source/averaging method does not fix that missing preparation detail, and no particular Figure11 polarization state is inferred."
      ],
      "readExtent": "selected-published-primary-radiometry-passages",
      "reviewedLocators": [
        "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor",
        "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration",
        "Published pages 8780-8782, Section 4.E Equations 16-18 and Sections 5.A-5.D Figures 6-9: sample-specific uncertainty, correlated polarization averaging and same-sample instrument comparisons",
        "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1364/AO.435117",
      "correctionCheck": "Actual 13-page published article obtained from NIST; selected Sections2,4.A-B,4.E,5.A-D,6.B read as text. Pages8775 and8782 visually checked; equations and Figure11 on8784 checked separately. No full instrument-design, AppendixA derivation, calibration reconstruction, raw scan or new inverse fit. Source title/authors/DOI and AppliedOptics60(28),8774-8786 checked against primary title block and Crossref: online27September2021, issue1October2021. Empty relation/no update-to and bounded title/DOI correction search found no explicit linked erratum; not exhaustive. Nominal aperture-uncertainty entries and typical budget entries are not reconstructed into a new common covariance or promoted to universal out-of-plane precision."
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
      "id": "nicodemus1977",
      "kind": "research-publication",
      "title": "Geometrical considerations and nomenclature for reflectance",
      "authors": [
        "F. E. Nicodemus",
        "J. C. Richmond",
        "J. J. Hsia",
        "I. W. Ginsberg",
        "T. Limperis"
      ],
      "year": 1977,
      "doi": null,
      "url": "https://nvlpubs.nist.gov/nistpubs/Legacy/MONO/nbsmonograph160.pdf",
      "path": "references/canonical/data/nicodemus-1977.pdf",
      "sha256": "d1f8c489813f812b26c36c4a3b894fe0495b097d4a3e61c884fa816962012f20",
      "review": {
        "extent": "selected-method-passages",
        "locators": [
          "Printed pp. 3-8 (PDF pp. 17-22), scope and Sections II.A-II.B, equations (1)-(18)"
        ],
        "limit": "Ray-optics definitions under declared spatial/illumination assumptions; not a microscopic mechanism or general wave-propagation theory."
      }
    },
    {
      "id": "hanssen2001",
      "kind": "research-publication",
      "title": "Integrating-sphere system and method for absolute measurement of transmittance, reflectance, and absorptance of specular samples",
      "authors": [
        "Leonard M. Hanssen"
      ],
      "year": 2001,
      "doi": "10.1364/ao.40.003196",
      "url": "https://pubmed.ncbi.nlm.nih.gov/11958259/",
      "path": "references/canonical/data/hanssen-2001.pdf",
      "sha256": "88e2fb26540cb075690607d37d38a498a1e7f19dca6639dd243672f962042e6a",
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Abstract",
          "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "Section 7, pp. 3203-3204: discussion and scope"
        ],
        "limit": "Specified IR samples and collection geometry; no full angular inversion, universal precision or carrier minimum."
      }
    },
    {
      "id": "patrick2021-rosi",
      "kind": "research-publication",
      "title": "Bidirectional reflectance capabilities of the NIST Robotic Optical Scattering Instrument",
      "authors": [
        "Heather J. Patrick",
        "Catherine C. Cooksey",
        "Thomas A. Germer",
        "Maria E. Nadal",
        "Clarence J. Zarobila"
      ],
      "year": 2021,
      "doi": "10.1364/AO.435117",
      "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=932541",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-primary-radiometry-passages",
        "locators": [
          "Published pages 8775-8776, Section 2 Equations 1-3 and Figures 1-2: under-illumination, incident/reflected flux, projected solid angle, BRDF and reflectance factor",
          "Published pages 8778-8779, Sections 4.A-4.B Equations 4-10: monitor/gain corrections, finite aperture and collection-efficiency calibration",
          "Published pages 8780-8782, Section 4.E Equations 16-18 and Sections 5.A-5.D Figures 6-9: sample-specific uncertainty, correlated polarization averaging and same-sample instrument comparisons",
          "Published pages 8784-8785, Section 6.B and Figure 11: actual 550 nm out-of-plane PTFE geometries, non-Lambertian response and approximate uncertainty estimates"
        ],
        "limit": "Actual 13-page published article obtained from NIST; selected Sections2,4.A-B,4.E,5.A-D,6.B read as text. Pages8775 and8782 visually checked; equations and Figure11 on8784 checked separately. No full instrument-design, AppendixA derivation, calibration reconstruction, raw scan or new inverse fit. Source title/authors/DOI and AppliedOptics60(28),8774-8786 checked against primary title block and Crossref: online27September2021, issue1October2021. Empty relation/no update-to and bounded title/DOI correction search found no explicit linked erratum; not exhaustive. Nominal aperture-uncertainty entries and typical budget entries are not reconstructed into a new common covariance or promoted to universal out-of-plane precision."
      }
    }
  ]
};

/** Keep angular radiometry, finite collection and inverse interpretation distinct. */
export function validateSurfaceScatteringContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Surface scattering ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
