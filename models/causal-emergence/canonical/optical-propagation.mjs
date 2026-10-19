import assert from "node:assert/strict";

export const OPTICAL_PROPAGATION_CHECKS = new Map();
export const OPTICAL_PROPAGATION_ANALYTICAL_SOURCES = new Map();
export const OPTICAL_PROPAGATION_STUDY_TYPES = new Map([]);
export const OPTICAL_PROPAGATION_ADMISSION = {
  "definitions": [
    [
      "phys:linear-optical-propagation",
      "D-phys-linear-optical-propagation"
    ],
    [
      "phys:optical-channel-observable-boundary",
      "D-phys-optical-channel-observable-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:linear-optical-propagation-optical-channel-observable-boundary",
      [
        "phys:linear-optical-propagation",
        "phys:optical-channel-observable-boundary"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "optical-propagation-source-scope",
      "C-phys-optical-propagation-source-scope",
      [
        "hanssen2001"
      ]
    ]
  ],
  "dependencies": [
    [
      "linear-optical-propagation-optical-propagation-source-scope",
      "linear-optical-propagation",
      "optical-propagation-source-scope",
      "M-phys-optical-propagation-source-scope",
      "interpretation-dependency"
    ],
    [
      "optical-channel-observable-boundary-optical-propagation-source-scope",
      "optical-channel-observable-boundary",
      "optical-propagation-source-scope",
      "M-phys-optical-propagation-source-scope",
      "interpretation-dependency"
    ],
    [
      "opt-material-transmission-optical-propagation-source-scope",
      "opt:material-transmission",
      "optical-propagation-source-scope",
      "M-phys-optical-propagation-source-scope",
      "interpretation-dependency"
    ],
    [
      "opt-absorption-coefficient-optical-propagation-source-scope",
      "opt:absorption-coefficient",
      "optical-propagation-source-scope",
      "M-phys-optical-propagation-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "C-phys-optical-propagation-source-scope",
      [
        "hanssen2001",
        "likharev2022-wave-propagation"
      ]
    ],
    [
      "M-phys-optical-propagation-source-scope",
      [
        "hanssen2001",
        "likharev2022-wave-propagation"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-linear-optical-propagation",
      "kind": "review-finding",
      "statement": "In the selected homogeneous isotropic linear medium, use the convention E(z,t)=Re[E0(omega)*exp(i*k(omega)*z-i*omega*t)] with k(omega)=omega*sqrt(epsilon(omega)*mu(omega)) in absolute SI constitutive units. Writing k=k_real+i*k_imag gives amplitude attenuation exp(-k_imag*z) and phase accumulation k_real*z. For the passive forward branch, k_imag>=0; the corresponding fixed-medium intensity attenuation coefficient is alpha_int=2*k_imag in m^-1. Nonlinear real propagation phase across a pulse bandwidth can produce dispersive waveform deformation, whereas a real phase linear in frequency supplies a delay. A wave number proportional to frequency at fixed speed is not by itself dispersive deformation. These phase effects are distinct from imaginary-part attenuation.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.21-7.27 and adjacent text: causal linear polarization response and frequency-dependent absolute permittivity",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /22. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a supplied local, homogeneous, isotropic, linear constitutive model with monochromatic components and a declared causal response. It is not a derivation of all material response from isolated molecular dipoles or a model of every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium.",
        "The harmonic convention is exp(i*k*z-i*omega*t). With the passive forward branch Im(k)>=0, amplitude decays as exp(-Im(k)*z), while intensity has the factor2 in its exponent. The absolute SI epsilon and mu in k=omega*sqrt(epsilon*mu) are not unqualified relative constants.",
        "The intensity factor2 follows algebraically from the squared field amplitude in this fixed homogeneous setting. No new measured attenuation coefficient, optical-index spectrum, independent mathematical proof or numerical fit is supplied.",
        "Relating attenuation of a measured finite-aperture beam to absorption needs an actual collection/energy model. Redistribution by scattering, boundary reflection and detector acceptance can change collected flux without that signal alone identifying bulk heat deposition.",
        "A deterministic frequency response and dispersive waveform deformation do not by themselves quantify statistical coherence loss, image blur, random-path scattering, a diffraction point-spread function or a measured signal-front/group delay."
      ]
    },
    {
      "id": "D-phys-optical-channel-observable-boundary",
      "kind": "review-finding",
      "statement": "Specify a channel input, medium, path/boundaries and receiver acceptance before interpreting transmitted optical flux. Separate a complex field transfer and its phase from an aggregate transmission measurement; separate intensity attenuation in m^-1 from dimensionless transmission and absorptance. Refractive redirection, absorption, angular redistribution, dispersion, diffraction and statistical coherence require their own stated variables and approximations rather than one universal medium-transformation label.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "hanssen2001",
          "locator": "Sections 2 and 4, pp. 3197-3200: sample, beam and measurement geometry",
          "role": "limits",
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
          "note": "Original catalogue JSON pointer: /22. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Dimensionless transmission is an incident/collected-flux ratio, not a bulk coefficient in m^-1. Source/receiver geometry, specimen thickness, interface reflection, collection aperture and possible internal paths must be stated before identifying a bulk model parameter.",
        "The measured aggregate IR transmission does not determine a unique complex refractive index, angular scattering phase function, spatial impulse response, time delay, diffraction pattern or statistical coherence. No inverse propagation operator or phase retrieval is reconstructed.",
        "Refraction, absorption, scattering, dispersion, diffraction and coherence change are distinct questions. Their names are not interchangeable coefficients or effects that every medium must produce simultaneously. The selected uniform plane-wave model does not solve the omitted spatial/random-field cases.",
        "A propagation channel may be specified by its input field and intervening medium without a prior scene-reflection event. Existing surface-reflection evidence does not establish a mandatory chronological parent or a unique information-encoding stage.",
        "The supplied bulk frequency-dependent response is not inferred from the permanent moment of an isolated KRb molecule, N2 axis alignment or static polarization alone. Permanent molecular dipoles are not established as a universal propagation prerequisite."
      ]
    },
    {
      "id": "C-phys-optical-propagation-source-scope",
      "kind": "review-finding",
      "statement": "The existing IR-window experiment supplies a finite measured transmission response under its stated sample and collection conditions. A separately declared homogeneous linear field model makes attenuation and phase conventions explicit and distinguishes dispersive response from absorption. This supports a bounded optical-channel description while retaining the gap between aggregate flux and a uniquely identified bulk propagation, scattering, imaging or coherence operator.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change",
          "role": "supports",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "pope1997",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "quickenden2000",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "fry2000-reply",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /22. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a supplied local, homogeneous, isotropic, linear constitutive model with monochromatic components and a declared causal response. It is not a derivation of all material response from isolated molecular dipoles or a model of every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium.",
        "The harmonic convention is exp(i*k*z-i*omega*t). With the passive forward branch Im(k)>=0, amplitude decays as exp(-Im(k)*z), while intensity has the factor2 in its exponent. The absolute SI epsilon and mu in k=omega*sqrt(epsilon*mu) are not unqualified relative constants.",
        "The intensity factor2 follows algebraically from the squared field amplitude in this fixed homogeneous setting. No new measured attenuation coefficient, optical-index spectrum, independent mathematical proof or numerical fit is supplied.",
        "Relating attenuation of a measured finite-aperture beam to absorption needs an actual collection/energy model. Redistribution by scattering, boundary reflection and detector acceptance can change collected flux without that signal alone identifying bulk heat deposition.",
        "A deterministic frequency response and dispersive waveform deformation do not by themselves quantify statistical coherence loss, image blur, random-path scattering, a diffraction point-spread function or a measured signal-front/group delay.",
        "Dimensionless transmission is an incident/collected-flux ratio, not a bulk coefficient in m^-1. Source/receiver geometry, specimen thickness, interface reflection, collection aperture and possible internal paths must be stated before identifying a bulk model parameter.",
        "The measured aggregate IR transmission does not determine a unique complex refractive index, angular scattering phase function, spatial impulse response, time delay, diffraction pattern or statistical coherence. No inverse propagation operator or phase retrieval is reconstructed.",
        "Refraction, absorption, scattering, dispersion, diffraction and coherence change are distinct questions. Their names are not interchangeable coefficients or effects that every medium must produce simultaneously. The selected uniform plane-wave model does not solve the omitted spatial/random-field cases.",
        "A propagation channel may be specified by its input field and intervening medium without a prior scene-reflection event. Existing surface-reflection evidence does not establish a mandatory chronological parent or a unique information-encoding stage.",
        "The supplied bulk frequency-dependent response is not inferred from the permanent moment of an isolated KRb molecule, N2 axis alignment or static polarization alone. Permanent molecular dipoles are not established as a universal propagation prerequisite.",
        "The finite positive empirical scope reuses the complete original Hanssen IR-window preparation and its aggregate transmission. No source spectrum, measured complex index or jointly fitted propagation law for those samples is newly obtained; the formal chapter is not an independent experiment.",
        "The existing pure-water absorption report remains at its explicitly limited abstract/metadata reading, with the unadjudicated comment/reply and no numerical precision adopted. It is not silently promoted to a newly reviewed full calibration or a separate validated underwater channel.",
        "Atmospheric and underwater visibility, optical-system point-spread degradation and coherence loss are original proposed applications. They are not measured or quantitatively predicted by this selected window experiment and homogeneous field model; their existence is not denied or converted to unsupported universal rules.",
        "Original necessary parents2.1 and2.8, weights0.5/0.5, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance history. The model constitutive response is supplied rather than derived from the original parent chain.",
        "Original carrier group1/type2 with both N_min=N_crit=1 and null N_sat are catalogue defaults, not measured propagation onset or saturation populations. A field mode, photon count, path segment and macroscopic flux sample are different counting domains.",
        "Original Level2, Phase1, TypeRole0 Process, Science[1], established, MustCover[12], ShouldCover[10] and Optional[] remain ontology/display metadata. Channel transformation does not establish autonomous SOMA admissibility, irreducible information degradation or a new universal cross-level rule.",
        "The generic radiative-transfer/wave-optics and atmospheric/underwater/system-characterization Evidence entries have null DOI/URL. This admission supplies only the declared actual formal reading and existing measured window response, not a full radiative-transfer solver, new scattering experiment, imaging replay or universal propagation operator."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "M-phys-optical-propagation-source-scope",
      "kind": "method",
      "statement": "Interpret the existing IR-window transmission only within its complete original preparation, flux normalization, boundaries and collection limits. Use the separate linear homogeneous model to state amplitude/intensity and phase conventions, without fitting it to unavailable phase/scattering data. Retain the limited water-report reading and do not import unreviewed propagation applications, prior reflection or permanent-dipole necessity.",
      "scope": "Selected optical model or prepared-sample evidence with explicit measurement and interpretation boundaries.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change",
          "role": "method",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "pope1997",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "quickenden2000",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "fry2000-reply",
          "locator": "Abstract",
          "role": "limits",
          "note": "The exact declared passage is used with its reading, preparation and inference limits; no new numerical replay is claimed."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "limits",
          "note": "Original catalogue JSON pointer: /22. Draft ontology, parent weights and carrier defaults do not establish physical laws."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a supplied local, homogeneous, isotropic, linear constitutive model with monochromatic components and a declared causal response. It is not a derivation of all material response from isolated molecular dipoles or a model of every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium.",
        "The harmonic convention is exp(i*k*z-i*omega*t). With the passive forward branch Im(k)>=0, amplitude decays as exp(-Im(k)*z), while intensity has the factor2 in its exponent. The absolute SI epsilon and mu in k=omega*sqrt(epsilon*mu) are not unqualified relative constants.",
        "The intensity factor2 follows algebraically from the squared field amplitude in this fixed homogeneous setting. No new measured attenuation coefficient, optical-index spectrum, independent mathematical proof or numerical fit is supplied.",
        "Relating attenuation of a measured finite-aperture beam to absorption needs an actual collection/energy model. Redistribution by scattering, boundary reflection and detector acceptance can change collected flux without that signal alone identifying bulk heat deposition.",
        "A deterministic frequency response and dispersive waveform deformation do not by themselves quantify statistical coherence loss, image blur, random-path scattering, a diffraction point-spread function or a measured signal-front/group delay.",
        "Dimensionless transmission is an incident/collected-flux ratio, not a bulk coefficient in m^-1. Source/receiver geometry, specimen thickness, interface reflection, collection aperture and possible internal paths must be stated before identifying a bulk model parameter.",
        "The measured aggregate IR transmission does not determine a unique complex refractive index, angular scattering phase function, spatial impulse response, time delay, diffraction pattern or statistical coherence. No inverse propagation operator or phase retrieval is reconstructed.",
        "Refraction, absorption, scattering, dispersion, diffraction and coherence change are distinct questions. Their names are not interchangeable coefficients or effects that every medium must produce simultaneously. The selected uniform plane-wave model does not solve the omitted spatial/random-field cases.",
        "A propagation channel may be specified by its input field and intervening medium without a prior scene-reflection event. Existing surface-reflection evidence does not establish a mandatory chronological parent or a unique information-encoding stage.",
        "The supplied bulk frequency-dependent response is not inferred from the permanent moment of an isolated KRb molecule, N2 axis alignment or static polarization alone. Permanent molecular dipoles are not established as a universal propagation prerequisite.",
        "The finite positive empirical scope reuses the complete original Hanssen IR-window preparation and its aggregate transmission. No source spectrum, measured complex index or jointly fitted propagation law for those samples is newly obtained; the formal chapter is not an independent experiment.",
        "The existing pure-water absorption report remains at its explicitly limited abstract/metadata reading, with the unadjudicated comment/reply and no numerical precision adopted. It is not silently promoted to a newly reviewed full calibration or a separate validated underwater channel.",
        "Atmospheric and underwater visibility, optical-system point-spread degradation and coherence loss are original proposed applications. They are not measured or quantitatively predicted by this selected window experiment and homogeneous field model; their existence is not denied or converted to unsupported universal rules.",
        "Original necessary parents2.1 and2.8, weights0.5/0.5, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance history. The model constitutive response is supplied rather than derived from the original parent chain.",
        "Original carrier group1/type2 with both N_min=N_crit=1 and null N_sat are catalogue defaults, not measured propagation onset or saturation populations. A field mode, photon count, path segment and macroscopic flux sample are different counting domains.",
        "Original Level2, Phase1, TypeRole0 Process, Science[1], established, MustCover[12], ShouldCover[10] and Optional[] remain ontology/display metadata. Channel transformation does not establish autonomous SOMA admissibility, irreducible information degradation or a new universal cross-level rule.",
        "The generic radiative-transfer/wave-optics and atmospheric/underwater/system-characterization Evidence entries have null DOI/URL. This admission supplies only the declared actual formal reading and existing measured window response, not a full radiative-transfer solver, new scattering experiment, imaging replay or universal propagation operator."
      ],
      "contextIds": [
        "hanssen2001"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:linear-optical-propagation",
      "name": "Declared linear homogeneous optical-propagation model",
      "kind": "definition",
      "description": "In the selected homogeneous isotropic linear medium, use the convention E(z,t)=Re[E0(omega)*exp(i*k(omega)*z-i*omega*t)] with k(omega)=omega*sqrt(epsilon(omega)*mu(omega)) in absolute SI constitutive units. Writing k=k_real+i*k_imag gives amplitude attenuation exp(-k_imag*z) and phase accumulation k_real*z. For the passive forward branch, k_imag>=0; the corresponding fixed-medium intensity attenuation coefficient is alpha_int=2*k_imag in m^-1. Nonlinear real propagation phase across a pulse bandwidth can produce dispersive waveform deformation, whereas a real phase linear in frequency supplies a delay. A wave number proportional to frequency at fixed speed is not by itself dispersive deformation. These phase effects are distinct from imaginary-part attenuation.",
      "claimIds": [
        "D-phys-linear-optical-propagation"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.21-7.27 and adjacent text: causal linear polarization response and frequency-dependent absolute permittivity"
        },
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change"
        }
      ],
      "openObligations": [
        "This is a supplied local, homogeneous, isotropic, linear constitutive model with monochromatic components and a declared causal response. It is not a derivation of all material response from isolated molecular dipoles or a model of every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium.",
        "The harmonic convention is exp(i*k*z-i*omega*t). With the passive forward branch Im(k)>=0, amplitude decays as exp(-Im(k)*z), while intensity has the factor2 in its exponent. The absolute SI epsilon and mu in k=omega*sqrt(epsilon*mu) are not unqualified relative constants.",
        "The intensity factor2 follows algebraically from the squared field amplitude in this fixed homogeneous setting. No new measured attenuation coefficient, optical-index spectrum, independent mathematical proof or numerical fit is supplied.",
        "Relating attenuation of a measured finite-aperture beam to absorption needs an actual collection/energy model. Redistribution by scattering, boundary reflection and detector acceptance can change collected flux without that signal alone identifying bulk heat deposition.",
        "A deterministic frequency response and dispersive waveform deformation do not by themselves quantify statistical coherence loss, image blur, random-path scattering, a diffraction point-spread function or a measured signal-front/group delay."
      ]
    },
    {
      "id": "phys:optical-channel-observable-boundary",
      "name": "Optical-channel observable and inference boundary",
      "kind": "definition",
      "description": "Specify a channel input, medium, path/boundaries and receiver acceptance before interpreting transmitted optical flux. Separate a complex field transfer and its phase from an aggregate transmission measurement; separate intensity attenuation in m^-1 from dimensionless transmission and absorptance. Refractive redirection, absorption, angular redistribution, dispersion, diffraction and statistical coherence require their own stated variables and approximations rather than one universal medium-transformation label.",
      "claimIds": [
        "D-phys-optical-channel-observable-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change"
        }
      ],
      "openObligations": [
        "Dimensionless transmission is an incident/collected-flux ratio, not a bulk coefficient in m^-1. Source/receiver geometry, specimen thickness, interface reflection, collection aperture and possible internal paths must be stated before identifying a bulk model parameter.",
        "The measured aggregate IR transmission does not determine a unique complex refractive index, angular scattering phase function, spatial impulse response, time delay, diffraction pattern or statistical coherence. No inverse propagation operator or phase retrieval is reconstructed.",
        "Refraction, absorption, scattering, dispersion, diffraction and coherence change are distinct questions. Their names are not interchangeable coefficients or effects that every medium must produce simultaneously. The selected uniform plane-wave model does not solve the omitted spatial/random-field cases.",
        "A propagation channel may be specified by its input field and intervening medium without a prior scene-reflection event. Existing surface-reflection evidence does not establish a mandatory chronological parent or a unique information-encoding stage.",
        "The supplied bulk frequency-dependent response is not inferred from the permanent moment of an isolated KRb molecule, N2 axis alignment or static polarization alone. Permanent molecular dipoles are not established as a universal propagation prerequisite."
      ]
    },
    {
      "id": "phys:optical-propagation-source-scope",
      "name": "Scoped material optical-channel evidence",
      "kind": "scoped-process",
      "description": "The existing IR-window experiment supplies a finite measured transmission response under its stated sample and collection conditions. A separately declared homogeneous linear field model makes attenuation and phase conventions explicit and distinguishes dispersive response from absorption. This supports a bounded optical-channel description while retaining the gap between aggregate flux and a uniquely identified bulk propagation, scattering, imaging or coherence operator.",
      "claimIds": [
        "C-phys-optical-propagation-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "hanssen2001",
          "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations"
        },
        {
          "sourceId": "likharev2022-wave-propagation",
          "locator": "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change"
        }
      ],
      "openObligations": [
        "This is a supplied local, homogeneous, isotropic, linear constitutive model with monochromatic components and a declared causal response. It is not a derivation of all material response from isolated molecular dipoles or a model of every anisotropic, nonlinear, time-dependent, scattering or spatially dispersive medium.",
        "The harmonic convention is exp(i*k*z-i*omega*t). With the passive forward branch Im(k)>=0, amplitude decays as exp(-Im(k)*z), while intensity has the factor2 in its exponent. The absolute SI epsilon and mu in k=omega*sqrt(epsilon*mu) are not unqualified relative constants.",
        "The intensity factor2 follows algebraically from the squared field amplitude in this fixed homogeneous setting. No new measured attenuation coefficient, optical-index spectrum, independent mathematical proof or numerical fit is supplied.",
        "Relating attenuation of a measured finite-aperture beam to absorption needs an actual collection/energy model. Redistribution by scattering, boundary reflection and detector acceptance can change collected flux without that signal alone identifying bulk heat deposition.",
        "A deterministic frequency response and dispersive waveform deformation do not by themselves quantify statistical coherence loss, image blur, random-path scattering, a diffraction point-spread function or a measured signal-front/group delay.",
        "Dimensionless transmission is an incident/collected-flux ratio, not a bulk coefficient in m^-1. Source/receiver geometry, specimen thickness, interface reflection, collection aperture and possible internal paths must be stated before identifying a bulk model parameter.",
        "The measured aggregate IR transmission does not determine a unique complex refractive index, angular scattering phase function, spatial impulse response, time delay, diffraction pattern or statistical coherence. No inverse propagation operator or phase retrieval is reconstructed.",
        "Refraction, absorption, scattering, dispersion, diffraction and coherence change are distinct questions. Their names are not interchangeable coefficients or effects that every medium must produce simultaneously. The selected uniform plane-wave model does not solve the omitted spatial/random-field cases.",
        "A propagation channel may be specified by its input field and intervening medium without a prior scene-reflection event. Existing surface-reflection evidence does not establish a mandatory chronological parent or a unique information-encoding stage.",
        "The supplied bulk frequency-dependent response is not inferred from the permanent moment of an isolated KRb molecule, N2 axis alignment or static polarization alone. Permanent molecular dipoles are not established as a universal propagation prerequisite.",
        "The finite positive empirical scope reuses the complete original Hanssen IR-window preparation and its aggregate transmission. No source spectrum, measured complex index or jointly fitted propagation law for those samples is newly obtained; the formal chapter is not an independent experiment.",
        "The existing pure-water absorption report remains at its explicitly limited abstract/metadata reading, with the unadjudicated comment/reply and no numerical precision adopted. It is not silently promoted to a newly reviewed full calibration or a separate validated underwater channel.",
        "Atmospheric and underwater visibility, optical-system point-spread degradation and coherence loss are original proposed applications. They are not measured or quantitatively predicted by this selected window experiment and homogeneous field model; their existence is not denied or converted to unsupported universal rules.",
        "Original necessary parents2.1 and2.8, weights0.5/0.5, downward direction[1], constraint modes[1], dependency10 and arising roles are not measured causal fractions or a universal formation/maintenance history. The model constitutive response is supplied rather than derived from the original parent chain.",
        "Original carrier group1/type2 with both N_min=N_crit=1 and null N_sat are catalogue defaults, not measured propagation onset or saturation populations. A field mode, photon count, path segment and macroscopic flux sample are different counting domains.",
        "Original Level2, Phase1, TypeRole0 Process, Science[1], established, MustCover[12], ShouldCover[10] and Optional[] remain ontology/display metadata. Channel transformation does not establish autonomous SOMA admissibility, irreducible information degradation or a new universal cross-level rule.",
        "The generic radiative-transfer/wave-optics and atmospheric/underwater/system-characterization Evidence entries have null DOI/URL. This admission supplies only the declared actual formal reading and existing measured window response, not a full radiative-transfer solver, new scattering experiment, imaging replay or universal propagation operator."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:linear-optical-propagation-optical-channel-observable-boundary",
      "source": "phys:linear-optical-propagation",
      "target": "phys:optical-channel-observable-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "claimIds": [
        "D-phys-optical-channel-observable-boundary"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application."
    },
    {
      "id": "physics:linear-optical-propagation-optical-propagation-source-scope",
      "source": "phys:linear-optical-propagation",
      "target": "phys:optical-propagation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-optical-propagation-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "physics:optical-channel-observable-boundary-optical-propagation-source-scope",
      "source": "phys:optical-channel-observable-boundary",
      "target": "phys:optical-propagation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-optical-propagation-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "physics:opt-material-transmission-optical-propagation-source-scope",
      "source": "opt:material-transmission",
      "target": "phys:optical-propagation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-optical-propagation-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001"
      ]
    },
    {
      "id": "physics:opt-absorption-coefficient-optical-propagation-source-scope",
      "source": "opt:absorption-coefficient",
      "target": "phys:optical-propagation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "claimIds": [
        "M-phys-optical-propagation-source-scope"
      ],
      "assertion": "The declared definition or existing scoped result conditions this interpretation; it supplies no physical causal ancestry, new acquisition or unreviewed application.",
      "contextIds": [
        "hanssen2001"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:linear-optical-propagation",
      "role": "definition",
      "denotes": "In the selected homogeneous isotropic linear medium, use the convention E(z,t)=Re[E0(omega)*exp(i*k(omega)*z-i*omega*t)] with k(omega)=omega*sqrt(epsilon(omega)*mu(omega)) in absolute SI constitutive units. Writing k=k_real+i*k_imag gives amplitude attenuation exp(-k_imag*z) and phase accumulation k_real*z. For the passive forward branch, k_imag>=0; the corresponding fixed-medium intensity attenuation coefficient is alpha_int=2*k_imag in m^-1. Nonlinear real propagation phase across a pulse bandwidth can produce dispersive waveform deformation, whereas a real phase linear in frequency supplies a delay. A wave number proportional to frequency at fixed speed is not by itself dispersive deformation. These phase effects are distinct from imaginary-part attenuation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-linear-optical-propagation"
      ]
    },
    {
      "nodeId": "phys:optical-channel-observable-boundary",
      "role": "definition",
      "denotes": "Specify a channel input, medium, path/boundaries and receiver acceptance before interpreting transmitted optical flux. Separate a complex field transfer and its phase from an aggregate transmission measurement; separate intensity attenuation in m^-1 from dimensionless transmission and absorptance. Refractive redirection, absorption, angular redistribution, dispersion, diffraction and statistical coherence require their own stated variables and approximations rather than one universal medium-transformation label.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-optical-channel-observable-boundary"
      ]
    },
    {
      "nodeId": "phys:optical-propagation-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "The existing IR-window experiment supplies a finite measured transmission response under its stated sample and collection conditions. A separately declared homogeneous linear field model makes attenuation and phase conventions explicit and distinguishes dispersive response from absorption. This supports a bounded optical-channel description while retaining the gap between aggregate flux and a uniquely identified bulk propagation, scattering, imaging or coherence operator.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-optical-propagation-source-scope"
      ]
    }
  ],
  "studies": [],
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
      "id": "pope1997",
      "kind": "research-publication",
      "title": "Absorption spectrum (380-700 nm) of pure water. II. Integrating cavity measurements",
      "authors": [
        "Robin M. Pope",
        "Edward S. Fry"
      ],
      "year": 1997,
      "doi": "10.1364/ao.36.008710",
      "url": "https://pubmed.ncbi.nlm.nih.gov/18264420/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "abstract-and-bibliographic-metadata",
        "locators": [
          "Abstract"
        ],
        "limit": "Original report only; full calibration/preparation and the published uncertainty dispute remain unadjudicated. No numerical minimum is admitted."
      }
    },
    {
      "id": "quickenden2000",
      "kind": "research-publication",
      "title": "Some comments on the paper by Edward S. Fry on the visible and near-ultraviolet absorption spectrum of liquid water",
      "authors": [
        "Terence I. Quickenden",
        "Colin G. Freeman",
        "Ronald A. J. Litjens"
      ],
      "year": 2000,
      "doi": "10.1364/ao.39.002740",
      "url": "https://opg.optica.org/ao/abstract.cfm?uri=ao-39-16-2740",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "abstract-and-bibliographic-metadata",
        "locators": [
          "Abstract"
        ],
        "limit": "Criticism of uncertainty and purification; no independent adjudication of its full argument in this review."
      }
    },
    {
      "id": "fry2000-reply",
      "kind": "research-publication",
      "title": "Reply to criticisms of the Pope and Fry paper on pure water absorption made in a comment by Quickenden et al.",
      "authors": [
        "Edward S. Fry"
      ],
      "year": 2000,
      "doi": "10.1364/ao.39.005843",
      "url": "https://pubmed.ncbi.nlm.nih.gov/18354587/",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "abstract-and-bibliographic-metadata",
        "locators": [
          "Abstract"
        ],
        "limit": "The abstract states that the criticisms are answered; the full dispute is not adjudicated here."
      }
    },
    {
      "id": "likharev2022-wave-propagation",
      "kind": "research-publication",
      "title": "Essential Graduate Physics: Classical Electrodynamics, Section 7.2: Attenuation and Dispersion",
      "authors": [
        "Konstantin K. Likharev"
      ],
      "year": 2022,
      "doi": null,
      "url": "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/07%3A_Electromagnetic_Wave_Propagation/7.02%3A_Attenuation_and_Dispersion",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-author-instructional-propagation-passages",
        "locators": [
          "Author instructional Section7.2, Equations7.21-7.27 and adjacent text: causal linear polarization response and frequency-dependent absolute permittivity",
          "Author instructional Section7.2, Equations7.28-7.29 and adjacent text: complex wave number, sign convention, amplitude attenuation and dispersive waveform change"
        ],
        "limit": "Actually read the author-attributed LibreTexts text and rendered equations7.21-7.29; page last-modified5March2022. This is instructional formal authority, not a new empirical publication or a reviewed microscopic calculation for the IR windows. The dilute independent-dipole response argument and its linear generalization are supplied models. Later Lorentz-oscillator, waveguide, scattering, diffraction and full statistical-coherence sections are not admitted. No new experimental index/absorption fit, full-book reading or numerical replay. CC BY-NC-SA4.0 attribution retained by the source link; no copied chapter is redistributed."
      }
    }
  ]
};

/** Keep finite transmission, constitutive phase and unmeasured channel observables distinct. */
export function validateOpticalPropagationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Optical propagation ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
