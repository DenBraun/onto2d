import assert from "node:assert/strict";

export const MOLECULAR_POLARIZATION_CHECKS = new Map();
export const MOLECULAR_POLARIZATION_ANALYTICAL_SOURCES = new Map();
export const MOLECULAR_POLARIZATION_STUDY_TYPES = new Map([["ni2008-krb-stark", "primary-experiment"], ["yang2016-n2-alignment", "primary-experiment"]]);
export const MOLECULAR_POLARIZATION_ADMISSION = {
  "definitions": [
    [
      "phys:molecular-dipole-response",
      "D-phys-molecular-dipole-response"
    ],
    [
      "phys:point-dipole-interaction",
      "D-phys-point-dipole-interaction"
    ],
    [
      "phys:dipole-ensemble-dielectric-boundary",
      "D-phys-dipole-ensemble-dielectric-boundary"
    ]
  ],
  "formalDependencies": [
    [
      "physics:charged-matter-electromagnetic-regime-molecular-dipole-response",
      [
        "phys:charged-matter-electromagnetic-regime",
        "phys:molecular-dipole-response"
      ]
    ],
    [
      "physics:molecular-dipole-response-point-dipole-interaction",
      [
        "phys:molecular-dipole-response",
        "phys:point-dipole-interaction"
      ]
    ],
    [
      "physics:molecular-dipole-response-dipole-ensemble-dielectric-boundary",
      [
        "phys:molecular-dipole-response",
        "phys:dipole-ensemble-dielectric-boundary"
      ]
    ]
  ],
  "contexts": [
    [
      "ni2008-krb-stark-context",
      "M-phys-ni2008-krb-stark-context",
      [
        "ni2008-krb-stark"
      ]
    ],
    [
      "yang2016-n2-alignment-context",
      "M-phys-yang2016-n2-alignment-context",
      [
        "yang2016-n2-alignment"
      ]
    ]
  ],
  "observations": [
    [
      "ni2008-krb-stark-shifts",
      "C-phys-ni2008-krb-stark-shifts",
      [
        "ni2008-krb-stark"
      ]
    ],
    [
      "ni2008-krb-dipole",
      "C-phys-ni2008-krb-dipole",
      [
        "ni2008-krb-stark"
      ]
    ],
    [
      "yang2016-n2-diffraction-anisotropy",
      "C-phys-yang2016-n2-diffraction-anisotropy",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "yang2016-n2-angular-inference",
      "C-phys-yang2016-n2-angular-inference",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "molecular-polarization-source-scope",
      "C-phys-molecular-polarization-source-scope",
      [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    ]
  ],
  "dependencies": [
    [
      "ni2008-krb-stark-context-ni2008-krb-stark-shifts",
      "ni2008-krb-stark-context",
      "ni2008-krb-stark-shifts",
      "M-phys-ni2008-krb-stark-context",
      "measurement-context"
    ],
    [
      "ni2008-krb-stark-shifts-ni2008-krb-dipole",
      "ni2008-krb-stark-shifts",
      "ni2008-krb-dipole",
      "M-phys-ni2008-krb-dipole",
      "interpretation-dependency"
    ],
    [
      "molecular-dipole-response-ni2008-krb-dipole",
      "molecular-dipole-response",
      "ni2008-krb-dipole",
      "M-phys-ni2008-krb-dipole",
      "interpretation-dependency"
    ],
    [
      "yang2016-n2-alignment-context-yang2016-n2-diffraction-anisotropy",
      "yang2016-n2-alignment-context",
      "yang2016-n2-diffraction-anisotropy",
      "M-phys-yang2016-n2-alignment-context",
      "measurement-context"
    ],
    [
      "yang2016-n2-diffraction-anisotropy-yang2016-n2-angular-inference",
      "yang2016-n2-diffraction-anisotropy",
      "yang2016-n2-angular-inference",
      "M-phys-yang2016-n2-angular-inference",
      "interpretation-dependency"
    ],
    [
      "dipole-ensemble-dielectric-boundary-yang2016-n2-angular-inference",
      "dipole-ensemble-dielectric-boundary",
      "yang2016-n2-angular-inference",
      "M-phys-yang2016-n2-angular-inference",
      "interpretation-dependency"
    ],
    [
      "ni2008-krb-dipole-molecular-polarization-source-scope",
      "ni2008-krb-dipole",
      "molecular-polarization-source-scope",
      "M-phys-molecular-polarization-source-scope",
      "interpretation-dependency"
    ],
    [
      "yang2016-n2-angular-inference-molecular-polarization-source-scope",
      "yang2016-n2-angular-inference",
      "molecular-polarization-source-scope",
      "M-phys-molecular-polarization-source-scope",
      "interpretation-dependency"
    ],
    [
      "point-dipole-interaction-molecular-polarization-source-scope",
      "point-dipole-interaction",
      "molecular-polarization-source-scope",
      "M-phys-molecular-polarization-source-scope",
      "interpretation-dependency"
    ],
    [
      "dipole-ensemble-dielectric-boundary-molecular-polarization-source-scope",
      "dipole-ensemble-dielectric-boundary",
      "molecular-polarization-source-scope",
      "M-phys-molecular-polarization-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "ni2008-krb-stark",
    "yang2016-n2-alignment"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-ni2008-krb-stark-context",
      [
        "ni2008-krb-stark",
        "ni2009-polar-thesis"
      ]
    ],
    [
      "C-phys-ni2008-krb-stark-shifts",
      [
        "ni2008-krb-stark"
      ]
    ],
    [
      "M-phys-ni2008-krb-dipole",
      [
        "ni2008-krb-stark",
        "ni2009-polar-thesis"
      ]
    ],
    [
      "C-phys-ni2008-krb-dipole",
      [
        "ni2008-krb-stark",
        "ni2009-polar-thesis"
      ]
    ],
    [
      "M-phys-yang2016-n2-alignment-context",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "C-phys-yang2016-n2-diffraction-anisotropy",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "M-phys-yang2016-n2-angular-inference",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "C-phys-yang2016-n2-angular-inference",
      [
        "yang2016-n2-alignment"
      ]
    ],
    [
      "C-phys-molecular-polarization-source-scope",
      [
        "likharev2022-dipoles",
        "ni2008-krb-stark",
        "ni2009-polar-thesis",
        "yang2016-n2-alignment"
      ]
    ],
    [
      "M-phys-molecular-polarization-source-scope",
      [
        "likharev2022-dipoles",
        "ni2008-krb-stark",
        "ni2009-polar-thesis",
        "yang2016-n2-alignment"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-molecular-dipole-response",
      "kind": "review-finding",
      "statement": "For a localized neutral molecular charge distribution in SI units, p=integral(rho(r)*r*d^3r) is an electric dipole moment in C m and does not depend on the coordinate origin. A state-specific body-fixed permanent moment can coexist with a zero laboratory vector average. Define electronic induced response at fixed state/geometry by delta p_i=alpha_ij*E_local,j to leading order; alpha_ij has SI units C m^2/V. Electronic deformation and field-dependent rotational orientation are separate contributions. A fixed dipole has field energy -p dot E; a reversible linear induced dipole has energy -(p dot E)/2.",
      "scope": "Neutral finite molecule, specified state/frame and locally linear electric response; SI convention.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The tensor derivative is a declared response definition, not a measured alpha value; the optical response in the nitrogen model is frequency-specific and is not identified numerically with static polarizability.",
        "For a charged subsystem the dipole changes under an origin shift by minus total charge times that shift. This neutral-molecule definition does not require prior ion formation.",
        "Moment, electronic polarizability and orientation-dependent laboratory response are not interchangeable observables. No bond asymmetry alone guarantees a nonzero total molecular vector."
      ]
    },
    {
      "id": "D-phys-point-dipole-interaction",
      "kind": "review-finding",
      "statement": "For two specified, fixed electric dipoles separated by r much larger than their charge-distribution sizes, the leading electrostatic interaction is U=[p1 dot p2-3*(p1 dot r_hat)*(p2 dot r_hat)]/(4*pi*epsilon0*r^3). Its sign depends on orientation. This is a vacuum point-dipole approximation with moments in C m, distance in m and energy in J.",
      "scope": "Fixed-pair nonretarded electrostatic multipole term; supplied dipoles and separation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed page 8, Section 1.3: SI fixed electric dipole-dipole interaction and orientation dependence",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No measured intermolecular force follows from this definition or from single-molecule Stark spectroscopy. Thermal/quantum orientational averaging, induced response, retardation, overlap and the surrounding medium need additional models.",
        "The r^-3 fixed-pair term is not a universal orientation-averaged intermolecular potential or a universal chemical-bond mechanism."
      ]
    },
    {
      "id": "D-phys-dipole-ensemble-dielectric-boundary",
      "kind": "review-finding",
      "statement": "A coarse-grained molecular polarization P=n*<p> is a vector moment per unit volume, with SI units C/m^2. For a specified isotropic linear quasistatic medium, P=epsilon0*chi_e*E_macro and epsilon_r=1+chi_e. The replacement E_local=E_macro and chi_e=n*alpha/epsilon0 require a dilute independent-dipole approximation. The even alignment statistic <cos^2(theta)> has isotropic value 1/3 and does not determine the odd orientation statistic <cos(theta)> or a nonzero P.",
      "scope": "Microscopic moment, ensemble angular statistics and an explicitly conditional macroscopic constitutive relation.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.2, Equations 3.26-3.27: dipole superposition, coarse graining and net electric dipole moment per unit volume",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Constitutive response is material-specific. Dense local fields, correlations, anisotropy, temperature, frequency, preparation and boundaries cannot be inferred from one isolated-molecule moment.",
        "The scalar alpha in the dilute orientational law may include rotational statistical response and is not automatically the fixed-geometry electronic tensor. The quasistatic constitutive equation is not applied to the ultrafast pulse experiment.",
        "The nitrogen data use symmetric axis distributions and four-quadrant processing; they do not resolve a molecular head-to-tail orientation or measure collective dielectric order."
      ]
    },
    {
      "id": "M-phys-ni2008-krb-stark-context",
      "kind": "method",
      "statement": "Supply optically trapped ultracold 40K87Rb molecules and use two-photon dark-resonance spectroscopy between weakly bound Feshbach and selected X1Sigma+ v=0 rotational states. Scan the external dc field over the reported approximately 0-2 kV/cm range using transparent plates outside a glass cell, and record resonance shifts relative to zero field. Rotational-state comparisons supply the rotational constant used in the singlet fit.",
      "scope": "One Ni 2008 acquisition and its author-thesis calibration correction; selected singlet states.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 231-234, Figures 1-2 and 5-6: supplied 40K87Rb Feshbach molecules, Raman spectroscopy and selected singlet rotational states",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source preparation supplies molecules; the Stark response is not a universal molecular formation pathway or a bulk dielectric experiment.",
        "The initial-state Stark contribution is neglected because the weakly bound starting molecules have a negligible moment in this treatment."
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "C-phys-ni2008-krb-stark-shifts",
      "kind": "review-finding",
      "statement": "The selected KRb singlet v=0 N=0 resonance shifts downward with applied dc field, while the N=2 response splits by angular-momentum projection. The zero-field N=0/N=2 interval is reported as 6.6836(5) GHz. These are spectroscopic frequency differences, before identifying a body-fixed moment through a rotational model.",
      "scope": "Published Figure 6 and associated selected-state spectroscopy, sharing one apparatus and field calibration.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No direct charge-density image, force measurement, independently calibrated electric field or local spectral refit is supplied."
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "M-phys-ni2008-krb-dipole",
      "kind": "method",
      "statement": "Interpret the measured Stark shifts with the singlet rigid-rotor Hamiltonian H=h*B_Hz*N_hat^2-d_body*E*cos(theta), where N_hat^2 has eigenvalue N*(N+1). The source uses the measured rotational constant and rotational mixing through N=5. Apply the author-thesis plate-separation correction as a revision of the same measurement, retaining the original published value and shared calibration limits.",
      "scope": "Single-acquisition rotational inference; B_Hz is a frequency and h*B_Hz is the energy constant.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is rotational orientation of an already polar molecular state, not a fit of electronic polarizability. No new matrix diagonalization, uncertainty reconstruction or independent replication is claimed.",
        "The finite N<=5 treatment is used in the stated experimental field regime; no infinite-field or universal saturation fraction is inferred."
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "C-phys-ni2008-krb-dipole",
      "kind": "review-finding",
      "statement": "Ni et al. report B_Hz=1.1139(1) GHz and a body-fixed permanent-moment magnitude 0.566(17) D for 40K87Rb X1Sigma+ v=0, inferred from the N=0 Stark curve. The author thesis corrects the moment to 0.574(17) D after a plate-separation error. Use 1 D approximately 3.336e-30 C m. The N=2 curves test consistency within the same experiment.",
      "scope": "Historical source-reported selected-state moment, with an explicit author correction rather than a current recommended molecular constant.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration",
          "role": "limits",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The result uncertainty is dominated by field calibration, not the statistical uncertainty of an isolated spectral line. Thesis Section 8.3 states 3%, while apparatus Section 3.2 estimates 3-5% and lacks independent field calibration; no reconciled error is invented.",
        "The body-fixed moment does not imply a nonzero laboratory vector average at zero dc field. The thesis correction is not a new dataset or independent confirmation.",
        "The positive dipole values are magnitudes. This selected rotational Stark fit does not determine a signed molecular charge-density map or which atomic end carries the negative charge."
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "M-phys-yang2016-n2-alignment-context",
      "kind": "method",
      "statement": "Supply the pulsed N2 gas jet and excite a rotational wavepacket with a 35 fs FWHM pulse centred at 800 nm. Probe it with 3.7 MeV electron diffraction at 120 Hz and vary the pump-probe delay. The source reports 0.7 bar nozzle backing pressure, approximately 6e-5 torr chamber pressure and an alignment-pulse peak intensity 5e13 W/cm^2, at which very faint plasma remains observable.",
      "scope": "Yang 2016 gas-jet pump-probe acquisition, not a condensed sample or static-field permittivity measurement.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Backing pressure is not molecular sample density or rotational temperature. The pulse is treated as non-resonant in the source model; no perfectly ionization-free preparation is asserted.",
        "The experiment is an axis-alignment response of supplied neutral molecules; it does not require hydrogen bonds or prior ionic charge transfer."
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "C-phys-yang2016-n2-diffraction-anisotropy",
      "kind": "review-finding",
      "statement": "The nitrogen diffraction patterns change with pump-probe delay and show rotational revivals. The reported anisotropy is a ratio of counts in horizontal and vertical angular cones, sampled in 100 fs delay steps with two minutes of accumulation per point. A response near the half revival changes between prolate and oblate angular distributions over about 300 fs.",
      "scope": "Published diffraction response and its stated preprocessing within one acquisition.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Patterns are four-quadrant symmetrized. The stated anisotropy range 3-4.5 inverse Angstrom partly intersects the missing region below 3.5 inverse Angstrom, which the source extrapolates smoothly to zero.",
        "Diffraction anisotropy is not a directly measured permanent or induced electronic dipole magnitude."
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "M-phys-yang2016-n2-angular-inference",
      "kind": "method",
      "statement": "Compare diffraction with a non-resonant polarizability-coupled linear rigid-rotor model, an incoherent orientation-weighted diffraction calculation and Gaussian temporal convolution. The common four-parameter fit supplies initial temperature, fluence, temporal resolution and an overlap factor. The angular-image baseline uses this same overlap factor and simulated reference; the inferred alignment and the fitted response are dependent outputs.",
      "scope": "Published source analysis of the same nitrogen diffraction, not an independent acquisition or local computational replay.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The model assumes all excited molecules receive one intensity and keeps nuclei at equilibrium positions without vibrations. No uncertainty in electronic polarizability was measured or re-fitted here.",
        "Initial estimated temperature 65 K and measured fluence 2.0 J/cm^2 must remain distinct from the four-parameter fitted 54 K and 1.8 J/cm^2."
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "C-phys-yang2016-n2-angular-inference",
      "kind": "review-finding",
      "statement": "The image-derived alignment moments are reported as <cos^2(theta)>=0.41 for the prolate and 0.28 for the oblate distribution. The common fit gives 100 fs RMS temporal resolution and overlap factor 0.42; its angular simulations agree after time averaging. These state- and pulse-specific results support a polarizability-mediated alignment interpretation, without determining an absolute alpha tensor, net vector orientation or bulk dielectric constant.",
      "scope": "Published Figure 5 and dependent model/image extraction, with the original acquisition and fitted baseline retained.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 0.42 overlap parameter is fitted to this preparation, not a universal aligned fraction, carrier minimum, cooperative threshold or independent validation dataset.",
        "A second angular moment can be anisotropic while the first vector moment is zero; this is not evidence of a permanent nitrogen dipole or collective polar phase."
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "C-phys-molecular-polarization-source-scope",
      "kind": "review-finding",
      "statement": "The reviewed sources support a selected KRb body-fixed moment with an explicit calibration correction, a distinct nitrogen pulse-driven angular response, and conditional molecular/ensemble definitions. These establish state- and preparation-specific dipolar response. The fixed-pair interaction and dilute constitutive law remain models; the selected experiments do not measure a collective dielectric curve, solvation structure, permanent field-free order or a universal emergence threshold.",
      "scope": "Scoped replacement for the broad molecular polarization/dipole source card, preserving positive observations and their limits.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization",
          "role": "supports",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "legacy-2",
          "locator": "/",
          "role": "provenance",
          "note": "Original draft vocabulary and asserted parents only; this catalogue is not empirical support."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Original parents 2.3/2.4/2.6/2.7, weights 0.30/0.25/0.25/0.20, necessary labels, downward-causation/mode codes and physical-body counts 1/1/2/2 have no admitted causal or quantitative authority.",
        "An electric dipole is a charge-distribution moment, not a demonstrated pair of integer-charged regional ions. Polarizability does not require a permanent zero-field molecular vector, net sample orientation or stable field-free collective polarization. Solvation structure needs its own species-, phase-, temperature- and measurement-specific evidence.",
        "An isolated molecular observable and a macroscopic material response are separate scopes. A neutral molecule can respond without ion formation, a hydrogen bond or a prior van der Waals assembly.",
        "Level 2 is a reviewed display grouping; Phase 2, property-role irreducibility and SOMA stabilization language do not supply a measured developmental sequence or new rule-generating law.",
        "The theoretical and empirical Evidence placeholders have no publication identifiers and are replaced by the explicit primary citations and formal reading. No new numerical check, dielectric fit, solvation measurement or independent replay is claimed."
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "M-phys-molecular-polarization-source-scope",
      "kind": "method",
      "statement": "Compare the KRb and nitrogen outputs within their own states, external fields, observables and source analyses. Keep the permanent-moment parameter separate from rotational orientation, electronic polarizability and macroscopic P. Reuse each acquisition once; the thesis correction and the nitrogen simulation/image outputs do not create extra independent experiments.",
      "scope": "Interpretation dependencies for the scoped molecular polarization synthesis.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.2, Equations 3.26-3.27: dipole superposition, coarse graining and net electric dipole moment per unit volume",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization",
          "role": "method",
          "note": "Supports only the stated definition, preparation or source-reported result under the declared reading limits."
        }
      ],
      "checkIds": [],
      "limitations": [
        "No universal inter-card causal ancestry, quantitative dielectric prediction, carrier threshold or independent-replication count is assigned."
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:molecular-dipole-response",
      "name": "Molecular electric dipole and induced response",
      "kind": "definition",
      "description": "For a localized neutral molecular charge distribution in SI units, p=integral(rho(r)*r*d^3r) is an electric dipole moment in C m and does not depend on the coordinate origin. A state-specific body-fixed permanent moment can coexist with a zero laboratory vector average. Define electronic induced response at fixed state/geometry by delta p_i=alpha_ij*E_local,j to leading order; alpha_ij has SI units C m^2/V. Electronic deformation and field-dependent rotational orientation are separate contributions. A fixed dipole has field energy -p dot E; a reversible linear induced dipole has energy -(p dot E)/2.",
      "claimIds": [
        "D-phys-molecular-dipole-response"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling"
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment"
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation"
        }
      ],
      "openObligations": [
        "The tensor derivative is a declared response definition, not a measured alpha value; the optical response in the nitrogen model is frequency-specific and is not identified numerically with static polarizability.",
        "For a charged subsystem the dipole changes under an origin shift by minus total charge times that shift. This neutral-molecule definition does not require prior ion formation.",
        "Moment, electronic polarizability and orientation-dependent laboratory response are not interchangeable observables. No bond asymmetry alone guarantees a nonzero total molecular vector."
      ]
    },
    {
      "id": "phys:point-dipole-interaction",
      "name": "Specified fixed electric dipole pair interaction",
      "kind": "definition",
      "description": "For two specified, fixed electric dipoles separated by r much larger than their charge-distribution sizes, the leading electrostatic interaction is U=[p1 dot p2-3*(p1 dot r_hat)*(p2 dot r_hat)]/(4*pi*epsilon0*r^3). Its sign depends on orientation. This is a vacuum point-dipole approximation with moments in C m, distance in m and energy in J.",
      "claimIds": [
        "D-phys-point-dipole-interaction"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed page 8, Section 1.3: SI fixed electric dipole-dipole interaction and orientation dependence"
        }
      ],
      "openObligations": [
        "No measured intermolecular force follows from this definition or from single-molecule Stark spectroscopy. Thermal/quantum orientational averaging, induced response, retardation, overlap and the surrounding medium need additional models.",
        "The r^-3 fixed-pair term is not a universal orientation-averaged intermolecular potential or a universal chemical-bond mechanism."
      ]
    },
    {
      "id": "phys:dipole-ensemble-dielectric-boundary",
      "name": "Molecular orientation, alignment and dielectric boundary",
      "kind": "definition",
      "description": "A coarse-grained molecular polarization P=n*<p> is a vector moment per unit volume, with SI units C/m^2. For a specified isotropic linear quasistatic medium, P=epsilon0*chi_e*E_macro and epsilon_r=1+chi_e. The replacement E_local=E_macro and chi_e=n*alpha/epsilon0 require a dilute independent-dipole approximation. The even alignment statistic <cos^2(theta)> has isotropic value 1/3 and does not determine the odd orientation statistic <cos(theta)> or a nonzero P.",
      "claimIds": [
        "D-phys-dipole-ensemble-dielectric-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.2, Equations 3.26-3.27: dipole superposition, coarse graining and net electric dipole moment per unit volume"
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization"
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment"
        }
      ],
      "openObligations": [
        "Constitutive response is material-specific. Dense local fields, correlations, anisotropy, temperature, frequency, preparation and boundaries cannot be inferred from one isolated-molecule moment.",
        "The scalar alpha in the dilute orientational law may include rotational statistical response and is not automatically the fixed-geometry electronic tensor. The quasistatic constitutive equation is not applied to the ultrafast pulse experiment.",
        "The nitrogen data use symmetric axis distributions and four-quadrant processing; they do not resolve a molecular head-to-tail orientation or measure collective dielectric order."
      ]
    },
    {
      "id": "phys:ni2008-krb-stark-context",
      "name": "Selected KRb dc Stark spectroscopy preparation",
      "kind": "context",
      "description": "Supply optically trapped ultracold 40K87Rb molecules and use two-photon dark-resonance spectroscopy between weakly bound Feshbach and selected X1Sigma+ v=0 rotational states. Scan the external dc field over the reported approximately 0-2 kV/cm range using transparent plates outside a glass cell, and record resonance shifts relative to zero field. Rotational-state comparisons supply the rotational constant used in the singlet fit.",
      "claimIds": [
        "M-phys-ni2008-krb-stark-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 231-234, Figures 1-2 and 5-6: supplied 40K87Rb Feshbach molecules, Raman spectroscopy and selected singlet rotational states"
        },
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration"
        }
      ],
      "openObligations": [
        "The source preparation supplies molecules; the Stark response is not a universal molecular formation pathway or a bulk dielectric experiment.",
        "The initial-state Stark contribution is neglected because the weakly bound starting molecules have a negligible moment in this treatment."
      ]
    },
    {
      "id": "phys:ni2008-krb-stark-shifts",
      "name": "KRb singlet rotational Stark shifts",
      "kind": "scoped-process",
      "description": "The selected KRb singlet v=0 N=0 resonance shifts downward with applied dc field, while the N=2 response splits by angular-momentum projection. The zero-field N=0/N=2 interval is reported as 6.6836(5) GHz. These are spectroscopic frequency differences, before identifying a body-fixed moment through a rotational model.",
      "claimIds": [
        "C-phys-ni2008-krb-stark-shifts"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
        }
      ],
      "openObligations": [
        "No direct charge-density image, force measurement, independently calibrated electric field or local spectral refit is supplied."
      ]
    },
    {
      "id": "phys:ni2008-krb-dipole",
      "name": "Corrected selected-state KRb permanent moment",
      "kind": "scoped-process",
      "description": "Ni et al. report B_Hz=1.1139(1) GHz and a body-fixed permanent-moment magnitude 0.566(17) D for 40K87Rb X1Sigma+ v=0, inferred from the N=0 Stark curve. The author thesis corrects the moment to 0.574(17) D after a plate-separation error. Use 1 D approximately 3.336e-30 C m. The N=2 curves test consistency within the same experiment.",
      "claimIds": [
        "C-phys-ni2008-krb-dipole",
        "M-phys-ni2008-krb-dipole"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration"
        }
      ],
      "openObligations": [
        "The result uncertainty is dominated by field calibration, not the statistical uncertainty of an isolated spectral line. Thesis Section 8.3 states 3%, while apparatus Section 3.2 estimates 3-5% and lacks independent field calibration; no reconciled error is invented.",
        "The body-fixed moment does not imply a nonzero laboratory vector average at zero dc field. The thesis correction is not a new dataset or independent confirmation.",
        "The positive dipole values are magnitudes. This selected rotational Stark fit does not determine a signed molecular charge-density map or which atomic end carries the negative charge."
      ]
    },
    {
      "id": "phys:yang2016-n2-alignment-context",
      "name": "Prepared nitrogen impulsive-alignment diffraction",
      "kind": "context",
      "description": "Supply the pulsed N2 gas jet and excite a rotational wavepacket with a 35 fs FWHM pulse centred at 800 nm. Probe it with 3.7 MeV electron diffraction at 120 Hz and vary the pump-probe delay. The source reports 0.7 bar nozzle backing pressure, approximately 6e-5 torr chamber pressure and an alignment-pulse peak intensity 5e13 W/cm^2, at which very faint plasma remains observable.",
      "claimIds": [
        "M-phys-yang2016-n2-alignment-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation"
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition"
        }
      ],
      "openObligations": [
        "Backing pressure is not molecular sample density or rotational temperature. The pulse is treated as non-resonant in the source model; no perfectly ionization-free preparation is asserted.",
        "The experiment is an axis-alignment response of supplied neutral molecules; it does not require hydrogen bonds or prior ionic charge transfer."
      ]
    },
    {
      "id": "phys:yang2016-n2-diffraction-anisotropy",
      "name": "Nitrogen delay-dependent diffraction anisotropy",
      "kind": "scoped-process",
      "description": "The nitrogen diffraction patterns change with pump-probe delay and show rotational revivals. The reported anisotropy is a ratio of counts in horizontal and vertical angular cones, sampled in 100 fs delay steps with two minutes of accumulation per point. A response near the half revival changes between prolate and oblate angular distributions over about 300 fs.",
      "claimIds": [
        "C-phys-yang2016-n2-diffraction-anisotropy"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition"
        }
      ],
      "openObligations": [
        "Patterns are four-quadrant symmetrized. The stated anisotropy range 3-4.5 inverse Angstrom partly intersects the missing region below 3.5 inverse Angstrom, which the source extrapolates smoothly to zero.",
        "Diffraction anisotropy is not a directly measured permanent or induced electronic dipole magnitude."
      ]
    },
    {
      "id": "phys:yang2016-n2-angular-inference",
      "name": "Conditional nitrogen angular alignment inference",
      "kind": "scoped-process",
      "description": "The image-derived alignment moments are reported as <cos^2(theta)>=0.41 for the prolate and 0.28 for the oblate distribution. The common fit gives 100 fs RMS temporal resolution and overlap factor 0.42; its angular simulations agree after time averaging. These state- and pulse-specific results support a polarizability-mediated alignment interpretation, without determining an absolute alpha tensor, net vector orientation or bulk dielectric constant.",
      "claimIds": [
        "C-phys-yang2016-n2-angular-inference",
        "M-phys-yang2016-n2-angular-inference"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference"
        }
      ],
      "openObligations": [
        "The 0.42 overlap parameter is fitted to this preparation, not a universal aligned fraction, carrier minimum, cooperative threshold or independent validation dataset.",
        "A second angular moment can be anisotropic while the first vector moment is zero; this is not evidence of a permanent nitrogen dipole or collective polar phase."
      ]
    },
    {
      "id": "phys:molecular-polarization-source-scope",
      "name": "Scoped molecular dipole and polarization evidence",
      "kind": "scoped-process",
      "description": "The reviewed sources support a selected KRb body-fixed moment with an explicit calibration correction, a distinct nitrogen pulse-driven angular response, and conditional molecular/ensemble definitions. These establish state- and preparation-specific dipolar response. The fixed-pair interaction and dilute constitutive law remain models; the selected experiments do not measure a collective dielectric curve, solvation structure, permanent field-free order or a universal emergence threshold.",
      "claimIds": [
        "C-phys-molecular-polarization-source-scope",
        "M-phys-molecular-polarization-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "ni2008-krb-stark",
          "locator": "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
        },
        {
          "sourceId": "ni2009-polar-thesis",
          "locator": "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment"
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition"
        },
        {
          "sourceId": "yang2016-n2-alignment",
          "locator": "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference"
        },
        {
          "sourceId": "likharev2022-dipoles",
          "locator": "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Original parents 2.3/2.4/2.6/2.7, weights 0.30/0.25/0.25/0.20, necessary labels, downward-causation/mode codes and physical-body counts 1/1/2/2 have no admitted causal or quantitative authority.",
        "An electric dipole is a charge-distribution moment, not a demonstrated pair of integer-charged regional ions. Polarizability does not require a permanent zero-field molecular vector, net sample orientation or stable field-free collective polarization. Solvation structure needs its own species-, phase-, temperature- and measurement-specific evidence.",
        "An isolated molecular observable and a macroscopic material response are separate scopes. A neutral molecule can respond without ion formation, a hydrogen bond or a prior van der Waals assembly.",
        "Level 2 is a reviewed display grouping; Phase 2, property-role irreducibility and SOMA stabilization language do not supply a measured developmental sequence or new rule-generating law.",
        "The theoretical and empirical Evidence placeholders have no publication identifiers and are replaced by the explicit primary citations and formal reading. No new numerical check, dielectric fit, solvation measurement or independent replay is claimed."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:charged-matter-electromagnetic-regime-molecular-dipole-response",
      "source": "phys:charged-matter-electromagnetic-regime",
      "target": "phys:molecular-dipole-response",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Specify a localized neutral charge distribution and switch explicitly to SI multipole/response conventions; no universal molecular state is constructed from the model label.",
      "claimIds": [
        "D-phys-molecular-dipole-response"
      ]
    },
    {
      "id": "physics:molecular-dipole-response-point-dipole-interaction",
      "source": "phys:molecular-dipole-response",
      "target": "phys:point-dipole-interaction",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Supply two declared moments and a well-separated fixed configuration before using the leading vacuum dipole-pair term.",
      "claimIds": [
        "D-phys-point-dipole-interaction"
      ]
    },
    {
      "id": "physics:molecular-dipole-response-dipole-ensemble-dielectric-boundary",
      "source": "phys:molecular-dipole-response",
      "target": "phys:dipole-ensemble-dielectric-boundary",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Define averaging, density, symmetry, local field and the response regime before identifying a macroscopic constitutive parameter.",
      "claimIds": [
        "D-phys-dipole-ensemble-dielectric-boundary"
      ]
    },
    {
      "id": "physics:ni2008-krb-stark-context-ni2008-krb-stark-shifts",
      "source": "phys:ni2008-krb-stark-context",
      "target": "phys:ni2008-krb-stark-shifts",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The prepared KRb states, frequency readout and supplied plate field delimit one Stark acquisition.",
      "claimIds": [
        "M-phys-ni2008-krb-stark-context"
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "physics:ni2008-krb-stark-shifts-ni2008-krb-dipole",
      "source": "phys:ni2008-krb-stark-shifts",
      "target": "phys:ni2008-krb-dipole",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The rotational fit and author correction interpret the same frequency-shift acquisition; they are not a new experiment.",
      "claimIds": [
        "M-phys-ni2008-krb-dipole"
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "physics:molecular-dipole-response-ni2008-krb-dipole",
      "source": "phys:molecular-dipole-response",
      "target": "phys:ni2008-krb-dipole",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported body-fixed fit parameter must be distinguished from a field-induced laboratory expectation and from electronic polarizability.",
      "claimIds": [
        "M-phys-ni2008-krb-dipole"
      ],
      "contextIds": [
        "ni2008-krb-stark"
      ]
    },
    {
      "id": "physics:yang2016-n2-alignment-context-yang2016-n2-diffraction-anisotropy",
      "source": "phys:yang2016-n2-alignment-context",
      "target": "phys:yang2016-n2-diffraction-anisotropy",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The pulsed gas, optical stimulus, electron probe and preprocessing define the measured angular-count response.",
      "claimIds": [
        "M-phys-yang2016-n2-alignment-context"
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:yang2016-n2-diffraction-anisotropy-yang2016-n2-angular-inference",
      "source": "phys:yang2016-n2-diffraction-anisotropy",
      "target": "phys:yang2016-n2-angular-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The time-dependent rotor/diffraction fit and angular baseline use the same acquisition and fitted overlap.",
      "claimIds": [
        "M-phys-yang2016-n2-angular-inference"
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:dipole-ensemble-dielectric-boundary-yang2016-n2-angular-inference",
      "source": "phys:dipole-ensemble-dielectric-boundary",
      "target": "phys:yang2016-n2-angular-inference",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The second angular moment denotes axis alignment, without declaring a net first-moment orientation or a dielectric constant.",
      "claimIds": [
        "M-phys-yang2016-n2-angular-inference"
      ],
      "contextIds": [
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:ni2008-krb-dipole-molecular-polarization-source-scope",
      "source": "phys:ni2008-krb-dipole",
      "target": "phys:molecular-polarization-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Contributes only the named state/preparation/model boundary to the comparison; no universal physical ancestry or independent acquisition is added.",
      "claimIds": [
        "M-phys-molecular-polarization-source-scope"
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:yang2016-n2-angular-inference-molecular-polarization-source-scope",
      "source": "phys:yang2016-n2-angular-inference",
      "target": "phys:molecular-polarization-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Contributes only the named state/preparation/model boundary to the comparison; no universal physical ancestry or independent acquisition is added.",
      "claimIds": [
        "M-phys-molecular-polarization-source-scope"
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:point-dipole-interaction-molecular-polarization-source-scope",
      "source": "phys:point-dipole-interaction",
      "target": "phys:molecular-polarization-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Contributes only the named state/preparation/model boundary to the comparison; no universal physical ancestry or independent acquisition is added.",
      "claimIds": [
        "M-phys-molecular-polarization-source-scope"
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    },
    {
      "id": "physics:dipole-ensemble-dielectric-boundary-molecular-polarization-source-scope",
      "source": "phys:dipole-ensemble-dielectric-boundary",
      "target": "phys:molecular-polarization-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Contributes only the named state/preparation/model boundary to the comparison; no universal physical ancestry or independent acquisition is added.",
      "claimIds": [
        "M-phys-molecular-polarization-source-scope"
      ],
      "contextIds": [
        "ni2008-krb-stark",
        "yang2016-n2-alignment"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:molecular-dipole-response",
      "role": "definition",
      "denotes": "Neutral finite molecule, specified state/frame and locally linear electric response; SI convention.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-molecular-dipole-response"
      ]
    },
    {
      "nodeId": "phys:point-dipole-interaction",
      "role": "definition",
      "denotes": "Fixed-pair nonretarded electrostatic multipole term; supplied dipoles and separation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-point-dipole-interaction"
      ]
    },
    {
      "nodeId": "phys:dipole-ensemble-dielectric-boundary",
      "role": "definition",
      "denotes": "Microscopic moment, ensemble angular statistics and an explicitly conditional macroscopic constitutive relation.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-dipole-ensemble-dielectric-boundary"
      ]
    },
    {
      "nodeId": "phys:ni2008-krb-stark-context",
      "role": "experimental-context",
      "denotes": "One Ni 2008 acquisition and its author-thesis calibration correction; selected singlet states.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-ni2008-krb-stark-context"
      ]
    },
    {
      "nodeId": "phys:ni2008-krb-stark-shifts",
      "role": "scoped-phenomenon",
      "denotes": "Published Figure 6 and associated selected-state spectroscopy, sharing one apparatus and field calibration.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ni2008-krb-stark-shifts"
      ]
    },
    {
      "nodeId": "phys:ni2008-krb-dipole",
      "role": "scoped-phenomenon",
      "denotes": "Historical source-reported selected-state moment, with an explicit author correction rather than a current recommended molecular constant.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-ni2008-krb-dipole",
        "M-phys-ni2008-krb-dipole"
      ]
    },
    {
      "nodeId": "phys:yang2016-n2-alignment-context",
      "role": "experimental-context",
      "denotes": "Yang 2016 gas-jet pump-probe acquisition, not a condensed sample or static-field permittivity measurement.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-yang2016-n2-alignment-context"
      ]
    },
    {
      "nodeId": "phys:yang2016-n2-diffraction-anisotropy",
      "role": "scoped-phenomenon",
      "denotes": "Published diffraction response and its stated preprocessing within one acquisition.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-yang2016-n2-diffraction-anisotropy"
      ]
    },
    {
      "nodeId": "phys:yang2016-n2-angular-inference",
      "role": "scoped-phenomenon",
      "denotes": "Published Figure 5 and dependent model/image extraction, with the original acquisition and fitted baseline retained.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-yang2016-n2-angular-inference",
        "M-phys-yang2016-n2-angular-inference"
      ]
    },
    {
      "nodeId": "phys:molecular-polarization-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped replacement for the broad molecular polarization/dipole source card, preserving positive observations and their limits.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-molecular-polarization-source-scope",
        "M-phys-molecular-polarization-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "ni2008-krb-stark",
      "sourceId": "ni2008-krb-stark",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.1163861",
      "journal": "Science",
      "volume": "322",
      "issue": "5899",
      "pages": "231-235",
      "system": "Selected singlet 40K87Rb dc Stark spectroscopy",
      "preparation": "Supply optically trapped ultracold 40K87Rb molecules and use two-photon dark-resonance spectroscopy between weakly bound Feshbach and selected X1Sigma+ v=0 rotational states. Scan the external dc field over the reported approximately 0-2 kV/cm range using transparent plates outside a glass cell, and record resonance shifts relative to zero field. Rotational-state comparisons supply the rotational constant used in the singlet fit.",
      "observable": "Two-photon resonance shifts versus dc field and selected-state rotational frequency interval",
      "finding": "The selected KRb singlet v=0 N=0 resonance shifts downward with applied dc field, while the N=2 response splits by angular-momentum projection. The zero-field N=0/N=2 interval is reported as 6.6836(5) GHz. These are spectroscopic frequency differences, before identifying a body-fixed moment through a rotational model. Ni et al. report B_Hz=1.1139(1) GHz and a body-fixed permanent-moment magnitude 0.566(17) D for 40K87Rb X1Sigma+ v=0, inferred from the N=0 Stark curve. The author thesis corrects the moment to 0.574(17) D after a plate-separation error. Use 1 D approximately 3.336e-30 C m. The N=2 curves test consistency within the same experiment.",
      "limitations": [
        "The source preparation supplies molecules; the Stark response is not a universal molecular formation pathway or a bulk dielectric experiment.",
        "The initial-state Stark contribution is neglected because the weakly bound starting molecules have a negligible moment in this treatment.",
        "No direct charge-density image, force measurement, independently calibrated electric field or local spectral refit is supplied.",
        "The result uncertainty is dominated by field calibration, not the statistical uncertainty of an isolated spectral line. Thesis Section 8.3 states 3%, while apparatus Section 3.2 estimates 3-5% and lacks independent field calibration; no reconciled error is invented.",
        "The body-fixed moment does not imply a nonzero laboratory vector average at zero dc field. The thesis correction is not a new dataset or independent confirmation.",
        "The positive dipole values are magnitudes. This selected rotational Stark fit does not determine a signed molecular charge-density map or which atomic end carries the negative charge."
      ],
      "readExtent": "selected-published-main-text-passages",
      "reviewedLocators": [
        "Published pages 231-234, Figures 1-2 and 5-6: supplied 40K87Rb Feshbach molecules, Raman spectroscopy and selected singlet rotational states",
        "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1126/science.1163861",
      "correctionCheck": "Read selected preparation and Stark passages in the published Science 322(5899),231-235 primary paper; visually checked published page 234/Figure 6 and surrounding text in the six-page author-hosted file (one cover plus five article pages). The primary thesis correction is separately cited; the 2008 value remains a historical result. No raw spectra, full covariance, independent electric-field calibration, new Stark fit or collective many-body experiment was reproduced. Crossref metadata shows no update-to record and an empty relation object; the actual author-thesis correction is retained rather than inferring no correction."
    },
    {
      "id": "yang2016-n2-alignment",
      "sourceId": "yang2016-n2-alignment",
      "studyType": "primary-experiment",
      "doi": "10.1038/ncomms11232",
      "journal": "Nature Communications",
      "volume": "7",
      "issue": "",
      "pages": "11232",
      "system": "Pulsed gas-phase N2 optical alignment and MeV diffraction",
      "preparation": "Supply the pulsed N2 gas jet and excite a rotational wavepacket with a 35 fs FWHM pulse centred at 800 nm. Probe it with 3.7 MeV electron diffraction at 120 Hz and vary the pump-probe delay. The source reports 0.7 bar nozzle backing pressure, approximately 6e-5 torr chamber pressure and an alignment-pulse peak intensity 5e13 W/cm^2, at which very faint plasma remains observable.",
      "observable": "Delay-dependent electron diffraction counts and angular-cone anisotropy",
      "finding": "The nitrogen diffraction patterns change with pump-probe delay and show rotational revivals. The reported anisotropy is a ratio of counts in horizontal and vertical angular cones, sampled in 100 fs delay steps with two minutes of accumulation per point. A response near the half revival changes between prolate and oblate angular distributions over about 300 fs. The image-derived alignment moments are reported as <cos^2(theta)>=0.41 for the prolate and 0.28 for the oblate distribution. The common fit gives 100 fs RMS temporal resolution and overlap factor 0.42; its angular simulations agree after time averaging. These state- and pulse-specific results support a polarizability-mediated alignment interpretation, without determining an absolute alpha tensor, net vector orientation or bulk dielectric constant.",
      "limitations": [
        "Backing pressure is not molecular sample density or rotational temperature. The pulse is treated as non-resonant in the source model; no perfectly ionization-free preparation is asserted.",
        "The experiment is an axis-alignment response of supplied neutral molecules; it does not require hydrogen bonds or prior ionic charge transfer.",
        "Patterns are four-quadrant symmetrized. The stated anisotropy range 3-4.5 inverse Angstrom partly intersects the missing region below 3.5 inverse Angstrom, which the source extrapolates smoothly to zero.",
        "Diffraction anisotropy is not a directly measured permanent or induced electronic dipole magnitude.",
        "The 0.42 overlap parameter is fitted to this preparation, not a universal aligned fraction, carrier minimum, cooperative threshold or independent validation dataset.",
        "A second angular moment can be anisotropic while the first vector moment is zero; this is not evidence of a permanent nitrogen dipole or collective polar phase."
      ],
      "readExtent": "full-published-scientific-main-text",
      "reviewedLocators": [
        "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation",
        "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition",
        "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://doi.org/10.1038/ncomms11232",
      "correctionCheck": "Read published scientific main text and Methods on pages 1-8 of the nine-page primary PDF; visually checked pages 4 and 6, Figures 3 and 5 and Equation 6. Source interpretation uses a non-resonant polarizability interaction; the measured observable is electron diffraction, not an electronic dipole value or a dielectric-constant measurement. Quoted fit and image-derived outputs share the acquisition and fitted overlap/baseline. No raw image replay, TDSE integration, intensity-profile correction or numerical polarizability extraction was performed. Publisher/PMC article and Crossref metadata were compared; Crossref showed no update-to record and an empty relation object, without an exhaustive later-correction claim."
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
      "id": "likharev2022-dipoles",
      "kind": "research-publication",
      "title": "Essential Graduate Physics: Classical Electrodynamics, selected dipole and dielectric sections (2022 HTML edition)",
      "authors": [
        "Konstantin K. Likharev"
      ],
      "year": 2022,
      "doi": null,
      "url": "https://phys.libretexts.org/Bookshelves/Electricity_and_Magnetism/Essential_Graduate_Physics_-_Classical_Electrodynamics_(Likharev)/03:_Dipoles_and_Dielectrics",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-full-text-passages",
        "locators": [
          "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling",
          "Section 3.2, Equations 3.26-3.27: dipole superposition, coarse graining and net electric dipole moment per unit volume",
          "Section 3.3, Equations 3.43-3.50 and accompanying low-density/weak-field qualifications, plus final material-specific constitutive-relation paragraph: local versus macroscopic field and linear polarization"
        ],
        "limit": "Author-attributed instructional formal exposition in the LibreTexts HTML edition last modified 5 March 2022, linked to the author EGP site. Read the listed equations and their surrounding assumptions; no primary measurement, numerical replay, phase transition or material-constant dataset is thereby admitted. Sections 3.1-3.3 have separate page URLs beneath this chapter. Illustrative material constants, water charge cartoon, the silicon-anisotropy footnote, the qualitative dispersion discussion and the high-density ferroelectric extrapolation are not used as evidence here."
      }
    },
    {
      "id": "ni2008-krb-stark",
      "kind": "research-publication",
      "title": "A High Phase-Space-Density Gas of Polar Molecules",
      "authors": [
        "K.-K. Ni",
        "S. Ospelkaus",
        "M. H. G. de Miranda",
        "A. Pe'er",
        "B. Neyenhuis",
        "J. J. Zirbel",
        "S. Kotochigova",
        "P. S. Julienne",
        "D. S. Jin",
        "J. Ye"
      ],
      "year": 2008,
      "doi": "10.1126/science.1163861",
      "url": "https://jila.colorado.edu/~junye/yelabsOLD/pubs/scienceArticles/2008/sArticle_2008_10_KRbabsoluteground.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-main-text-passages",
        "locators": [
          "Published pages 231-234, Figures 1-2 and 5-6: supplied 40K87Rb Feshbach molecules, Raman spectroscopy and selected singlet rotational states",
          "Published pages 234-235, Figure 6 and adjacent Stark-spectroscopy text: singlet v=0 N=0/N=2 shifts, rotational constant, permanent-moment fit and field uncertainty"
        ],
        "limit": "Read selected preparation and Stark passages in the published Science 322(5899),231-235 primary paper; visually checked published page 234/Figure 6 and surrounding text in the six-page author-hosted file (one cover plus five article pages). The primary thesis correction is separately cited; the 2008 value remains a historical result. No raw spectra, full covariance, independent electric-field calibration, new Stark fit or collective many-body experiment was reproduced. Crossref metadata shows no update-to record and an empty relation object; the actual author-thesis correction is retained rather than inferring no correction."
      }
    },
    {
      "id": "ni2009-polar-thesis",
      "kind": "research-publication",
      "title": "A Quantum Gas of Polar Molecules (PhD thesis, University of Colorado, 2009)",
      "authors": [
        "Kang-Kuen Ni"
      ],
      "year": 2009,
      "doi": null,
      "url": "https://kni.faculty.chemistry.harvard.edu/sites/g/files/omnuum11346/files/kni/files/nithesis2009.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-thesis-passages",
        "locators": [
          "Thesis printed pages 102-105, Section 8.3, especially page 105 footnote 3 and Figure 8.4: molecular versus laboratory frame, rotational Stark analysis and corrected dipole moment",
          "Thesis printed pages 30-32, Section 3.2, Figure 3.2 and Equation 3.1: updated plate spacing, dielectric-wall/fringe correction and absent independent field calibration",
          "Thesis printed page 8, Section 1.3: SI fixed electric dipole-dipole interaction and orientation dependence"
        ],
        "limit": "Read the specified text and displayed equation transcription from the 190-page author-hosted Harvard PDF, whose title page states 2009; this is not a full-thesis review or a new independent acquisition. Thesis page 105 footnote 3 explicitly corrects the 2008 moment after a plate-separation error. Section 3.2 estimates 3-5% field uncertainty without independent calibration while Section 8.3 gives 3% result uncertainty; these are retained without invented recombination. No visual inspection of the thesis PDF rendering or numerical diagonalization/reanalysis was performed. The superseded JILA file name containing 2010 is not used as the thesis year."
      }
    },
    {
      "id": "yang2016-n2-alignment",
      "kind": "research-publication",
      "title": "Diffractive imaging of a rotational wavepacket in nitrogen molecules with femtosecond megaelectronvolt electron pulses",
      "authors": [
        "Jie Yang",
        "Markus Guehr",
        "Theodore Vecchione",
        "Matthew S. Robinson",
        "Renkai Li",
        "Nick Hartmann",
        "Xiaozhe Shen",
        "Ryan Coffee",
        "Jeff Corbett",
        "Alan Fry",
        "Kelly Gaffney",
        "Tais Gorkhover",
        "Carsten Hast",
        "Keith Jobe",
        "Igor Makasyuk",
        "Alexander Reid",
        "Joseph Robinson",
        "Sharon Vetter",
        "Fenglin Wang",
        "Stephen Weathersby",
        "Charles Yoneda",
        "Martin Centurion",
        "Xijie Wang"
      ],
      "year": 2016,
      "doi": "10.1038/ncomms11232",
      "url": "https://www.nature.com/articles/ncomms11232.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text",
        "locators": [
          "Published pages 2-4 and 7, Figure 1 and Methods Experimental setup: 35 fs 800 nm nitrogen alignment pulse, 3.7 MeV diffraction probe and specified gas-jet preparation",
          "Published pages 3-4 and 7, Figure 3 and Methods Data processing of diffraction patterns and anisotropy: delayed diffraction counts, angular-cone ratio and common acquisition",
          "Published pages 4-8, Figures 3-5, Equation 6 and Methods Alignment simulation, Diffraction pattern simulation, Temporal evolution fitting and Angular distribution: common-data fit and baseline-dependent angular inference"
        ],
        "limit": "Read published scientific main text and Methods on pages 1-8 of the nine-page primary PDF; visually checked pages 4 and 6, Figures 3 and 5 and Equation 6. Source interpretation uses a non-resonant polarizability interaction; the measured observable is electron diffraction, not an electronic dipole value or a dielectric-constant measurement. Quoted fit and image-derived outputs share the acquisition and fitted overlap/baseline. No raw image replay, TDSE integration, intensity-profile correction or numerical polarizability extraction was performed. Publisher/PMC article and Crossref metadata were compared; Crossref showed no update-to record and an empty relation object, without an exhaustive later-correction claim."
      }
    }
  ]
};

/** Preserve molecular-frame moments, induced alignment and ensemble/material response boundaries. */
export function validateMolecularPolarizationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Molecular polarization ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
