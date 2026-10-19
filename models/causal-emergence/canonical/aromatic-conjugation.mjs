import assert from "node:assert/strict";

export const AROMATIC_CONJUGATION_CHECKS = new Map();
export const AROMATIC_CONJUGATION_ANALYTICAL_SOURCES = new Map();
export const AROMATIC_CONJUGATION_STUDY_TYPES = new Map([["schleyer1996-nics", "computational-analysis"]]);
export const AROMATIC_CONJUGATION_ADMISSION = {
  "definitions": [
    [
      "phys:conjugation-aromaticity-boundary",
      "D-phys-conjugation-aromaticity-boundary"
    ],
    [
      "phys:ring-center-nics-criterion",
      "D-phys-ring-center-nics-criterion"
    ]
  ],
  "formalDependencies": [
    [
      "physics:conjugation-aromaticity-boundary-ring-center-nics-criterion",
      [
        "phys:conjugation-aromaticity-boundary",
        "phys:ring-center-nics-criterion"
      ]
    ]
  ],
  "contexts": [
    [
      "schleyer1996-nics-context",
      "M-phys-schleyer1996-nics-context",
      [
        "schleyer1996-nics"
      ]
    ]
  ],
  "observations": [
    [
      "benzene-ring-center-nics",
      "C-phys-benzene-ring-center-nics",
      [
        "schleyer1996-nics"
      ]
    ],
    [
      "aromatic-conjugation-source-scope",
      "C-phys-aromatic-conjugation-source-scope",
      [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    ]
  ],
  "dependencies": [
    [
      "schleyer1996-nics-context-benzene-ring-center-nics",
      "schleyer1996-nics-context",
      "benzene-ring-center-nics",
      "M-phys-benzene-ring-center-nics",
      "computation-context"
    ],
    [
      "ring-center-nics-criterion-benzene-ring-center-nics",
      "ring-center-nics-criterion",
      "benzene-ring-center-nics",
      "M-phys-benzene-ring-center-nics",
      "interpretation-dependency"
    ],
    [
      "conjugation-aromaticity-boundary-aromatic-conjugation-source-scope",
      "conjugation-aromaticity-boundary",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "ring-center-nics-criterion-aromatic-conjugation-source-scope",
      "ring-center-nics-criterion",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "resonance-energy-reference-boundary-aromatic-conjugation-source-scope",
      "resonance-energy-reference-boundary",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "pauling1933-benzene-context-aromatic-conjugation-source-scope",
      "pauling1933-benzene-context",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "pauling-benzene-vb-lowering-aromatic-conjugation-source-scope",
      "pauling-benzene-vb-lowering",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "schleyer1996-nics-context-aromatic-conjugation-source-scope",
      "schleyer1996-nics-context",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ],
    [
      "benzene-ring-center-nics-aromatic-conjugation-source-scope",
      "benzene-ring-center-nics",
      "aromatic-conjugation-source-scope",
      "M-phys-aromatic-conjugation-source-scope",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "schleyer1996-nics"
  ],
  "comparisonIds": [],
  "inferenceSources": [
    [
      "M-phys-schleyer1996-nics-context",
      [
        "schleyer1996-nics"
      ]
    ],
    [
      "M-phys-benzene-ring-center-nics",
      [
        "schleyer1996-nics"
      ]
    ],
    [
      "C-phys-benzene-ring-center-nics",
      [
        "schleyer1996-nics"
      ]
    ],
    [
      "M-phys-aromatic-conjugation-source-scope",
      [
        "iupac2022-pi-conjugation-aromaticity",
        "pauling1933-resonance",
        "pauling1934-resonance-erratum",
        "schleyer1996-nics"
      ]
    ],
    [
      "C-phys-aromatic-conjugation-source-scope",
      [
        "iupac2022-pi-conjugation-aromaticity",
        "pauling1933-resonance",
        "pauling1934-resonance-erratum",
        "schleyer1996-nics"
      ]
    ]
  ],
  "localStudySources": []
};

const contracts = {
  "claims": [
    {
      "id": "D-phys-conjugation-aromaticity-boundary",
      "kind": "review-finding",
      "statement": "Conjugation describes specified orbital coupling across a molecular framework, including p-orbital interaction across an intervening sigma bond and qualifying lone-pair interactions. It can occur in linear systems such as butadiene. Aromaticity requires a stated cyclic-system criterion; a reference-defined energetic comparison, geometry descriptor and magnetic-response probe answer different questions. Cyclic connectivity, six active electrons or a delocalized representation alone are not a universal aromaticity classification.",
      "scope": "Primary IUPAC terminology applied to distinguish conjugation from criterion-specific aromaticity.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The named glossary entries are semantic authority, not newly observed linear-polyene spectra, a charge-density map or a universal measured stabilization law.",
        "Orbital symmetry requires a defining plane and orbital basis. Phase consistency of a stationary representation is not a measured coherence time, transport phase length or persistent dynamics in all environments.",
        "The familiar Huckel electron-count statement has restricted monocyclic planar/almost-planar model conditions. No all-topology, all-state six-electron or4n+2 theorem is admitted here, and the original1931 paper has not been read.",
        "Real conjugated materials, pigments and conductive polymers require specified structure, state, environment and response evidence; their optical, transport and reactivity properties are not derived from this terminology."
      ]
    },
    {
      "id": "D-phys-ring-center-nics-criterion",
      "kind": "review-finding",
      "statement": "For the selected historical magnetic criterion, define ring-center NICS as the sign-reversed computed absolute magnetic shielding, in ppm, at the unweighted mean of the ring heavy-atom coordinates. The point has no observed nucleus. Specify the molecular geometry and quantum-chemical response method. The descriptor probes magnetic shielding under a chosen aromaticity convention; it is not a measured proton NMR shift, an energy or a direct observation of an electron circulating on a trajectory.",
      "scope": "Schleyer1996 ring-center NICS operational definition; no universal classification theorem.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Local sigma-bond shielding and probe position can affect a center value; the source notes small-ring complications and maxima away from the center. One point is not a full current-density map or an integrated ring-current strength.",
        "A negative sign alone is not sufficient for universal aromaticity: the same source gives a small negative saturated nonaromatic cyclohexane control. No numerical universal cutoff or fused-ring relative ranking is introduced.",
        "Shielding and model-space stabilization energy are different observables. No universal equivalence of magnetic, energetic, geometric, optical and kinetic criteria follows."
      ]
    },
    {
      "id": "M-phys-schleyer1996-nics-context",
      "kind": "method",
      "statement": "Use the source neutral D6h benzene and saturated D3d cyclohexane geometries from Becke3LYP/6-31G*, as specified for these Table1 cases. Evaluate ring-center absolute magnetic shieldings with GIAO-SCF, taking the 6-31+G* column as the selected response basis. Reverse the shielding sign to report NICS in ppm. The source Gaussian94 calculation supplies a finite magnetic-response comparison; no new solver execution is performed.",
      "scope": "Selected source computational preparation and response convention.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is computational-analysis with a model-context, not an observed proton resonance, a sample preparation or an empirical ring-current measurement.",
        "The table also reports a different6-31G* shielding column. Geometry method and response method/basis are distinct; columns are not repeat acquisitions or a statistical uncertainty estimate.",
        "Only the named center descriptor and benzene/cyclohexane cases are admitted. The prior experimental NMR shifts, energetic calibration, other compounds and cited unpublished IGLO results are not separately reviewed or newly acquired evidence.",
        "No raw input deck, convergence study, magnetic-field scan, tensor decomposition, modern uncertainty or independent numerical reproduction is supplied."
      ],
      "contextIds": [
        "schleyer1996-nics"
      ]
    },
    {
      "id": "M-phys-benzene-ring-center-nics",
      "kind": "method",
      "statement": "Interpret the selected ring-center shielding values only under the source geometry, GIAO-SCF basis and sign convention. Compare the benzene result with the saturated cyclohexane control without treating every negative value as a classification theorem. Keep the magnetic response separate from the existing Pauling-Wheland model-space energy lowering and from observed nuclear resonances.",
      "scope": "Interpretation contract for selected source-reported NICS values.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The source-reported rounded values are not new numerical witnesses, independent acquisitions, energy units or a complete magnetic-current measurement."
      ],
      "contextIds": [
        "schleyer1996-nics"
      ]
    },
    {
      "id": "C-phys-benzene-ring-center-nics",
      "kind": "review-finding",
      "statement": "Table1 reports ring-center NICS=-9.7 ppm for neutral D6h benzene and -2.2 ppm for saturated nonaromatic D3d cyclohexane in the selected GIAO-SCF/6-31+G* column. The distinct6-31G* column gives -11.5 and -2.1 ppm, respectively. The declared benzene response supplies a finite positive magnetic aromaticity-probe example, while the saturated control limits a sign-only classification.",
      "scope": "Selected historical source-reported point shielding values, with method/basis/geometry and ppm conventions.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "These are computed point shieldings on supplied model geometries, not measured proton chemical shifts, an observed ring-current trajectory or a newly measured stabilization energy.",
        "The selected -9.7 ppm cannot silently be replaced by the -11.5 ppm value from the other response-basis column. Their difference is not an experimental error bar or independent repeat.",
        "Local shielding, geometry and probe location remain part of interpretation. Negative saturated-control values do not establish aromatic cyclohexane; no all-system negative-sign threshold or relative fused-ring ranking is inferred.",
        "The magnetic result does not derive an absorption spectrum, material conductivity, carrier mobility, reactivity constraint, excited-state lifetime or an all-aromaticity theorem from six electrons."
      ],
      "contextIds": [
        "schleyer1996-nics"
      ]
    },
    {
      "id": "M-phys-aromatic-conjugation-source-scope",
      "kind": "method",
      "statement": "Synthesize the conjugation/aromaticity terminology, the existing benzene VB reference comparison and the new method-specific ring-center shielding case. Retain both complete computational contexts and the linked erratum. Name energetic and magnetic criteria separately, and qualify original optical, transport, reactivity and SOMA assertions without presenting them as new observations.",
      "scope": "Literature-synthesis method for original card2.10.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "method",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing pauling1933-benzene model-context and pauling-benzene-vb-lowering output without cloning a new independent benzene calculation. Its nonorthogonal functions, unnormalized coefficients, negative exchange-energy convention and unreviewed thermochemical calibration limits remain.",
        "The linked1934 erratum corrects original radical tables/discussion and leaves the selected benzene TableI unchanged. It remains part of the same study provenance, not a second replication or a new radical result.",
        "Pauling-Wheland VB energy lowering and Schleyer GIAO-SCF shielding use different methods and response questions. No common fitted likelihood, universal equivalence, independent empirical agreement or newly measured charge-density/phase-coherence map is asserted.",
        "Original parent2.3 weight0.45 and parent2.5 weight0.55, each direction[2], modes[0,1], necessary/dependency10/arising, carrier1/0 N_min=N_crit=3,N_sat=null, are not measured causal fractions, universal prerequisites or carrier thresholds. No replacement normalized weights are introduced.",
        "A supplied molecular framework is relevant, but the earlier H2 formation/spectroscopy experiment is not a necessary history for these benzene calculations. Reuse of the same resonance model is data dependence, not an observed later emergence stage.",
        "Six carbon centers, six active electrons, five VB functions and a coordinate probe point are different supplied counting domains. They neither validate minima3 nor establish a universal six-electron or4n+2 criterion for all states and topologies.",
        "Original Level2, Phase2, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern/arising labels are catalogue/display classifications. Recurring representations do not establish an autonomous physical stage beyond local resonance or a universal object/event boundary.",
        "Conjugation can be linear without satisfying a cyclic aromaticity criterion. Real pigments, polymers, conjugated materials, optical absorption, transport and reactivity require their own stated preparations, response models and evidence; their existence is not blanket-excluded, but those outputs are not inferred here.",
        "Generic original Huckel/MO and spectroscopic/ring-current/stability/transport paragraphs have null DOI/URL and identify no reviewed publications. No unread primary Huckel derivation, observed ring current, optical or transport experiment is manufactured.",
        "The IUPAC reading is confined to named terminology entries, and later NICS tensor/scan papers were not read in full. No numerical scan, full-current-density reconstruction, modern all-criteria classifier or new experimental/numerical replay is supplied."
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "C-phys-aromatic-conjugation-source-scope",
      "kind": "review-finding",
      "statement": "Aromatic-system description is retained through named finite criteria: the existing neutral-benzene VB state lowers the source model energy relative to its one-Kekule-function reference, while a separate GIAO-SCF calculation gives a specified ring-center magnetic shielding probe for benzene with a saturated control. Conjugation is broader than cyclic aromaticity. These model results do not establish universal electron-count thresholds, all-response equivalence or a new physical stage beyond resonance.",
      "scope": "Complete finite disposition of references/level-2.json /10, preserving original parent and application boundaries.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion",
          "role": "supports",
          "note": "Actually read primary passage supports the stated finite definition or model scope; no new numerical or experimental replay."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Reuse the existing pauling1933-benzene model-context and pauling-benzene-vb-lowering output without cloning a new independent benzene calculation. Its nonorthogonal functions, unnormalized coefficients, negative exchange-energy convention and unreviewed thermochemical calibration limits remain.",
        "The linked1934 erratum corrects original radical tables/discussion and leaves the selected benzene TableI unchanged. It remains part of the same study provenance, not a second replication or a new radical result.",
        "Pauling-Wheland VB energy lowering and Schleyer GIAO-SCF shielding use different methods and response questions. No common fitted likelihood, universal equivalence, independent empirical agreement or newly measured charge-density/phase-coherence map is asserted.",
        "Original parent2.3 weight0.45 and parent2.5 weight0.55, each direction[2], modes[0,1], necessary/dependency10/arising, carrier1/0 N_min=N_crit=3,N_sat=null, are not measured causal fractions, universal prerequisites or carrier thresholds. No replacement normalized weights are introduced.",
        "A supplied molecular framework is relevant, but the earlier H2 formation/spectroscopy experiment is not a necessary history for these benzene calculations. Reuse of the same resonance model is data dependence, not an observed later emergence stage.",
        "Six carbon centers, six active electrons, five VB functions and a coordinate probe point are different supplied counting domains. They neither validate minima3 nor establish a universal six-electron or4n+2 criterion for all states and topologies.",
        "Original Level2, Phase2, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern/arising labels are catalogue/display classifications. Recurring representations do not establish an autonomous physical stage beyond local resonance or a universal object/event boundary.",
        "Conjugation can be linear without satisfying a cyclic aromaticity criterion. Real pigments, polymers, conjugated materials, optical absorption, transport and reactivity require their own stated preparations, response models and evidence; their existence is not blanket-excluded, but those outputs are not inferred here.",
        "Generic original Huckel/MO and spectroscopic/ring-current/stability/transport paragraphs have null DOI/URL and identify no reviewed publications. No unread primary Huckel derivation, observed ring current, optical or transport experiment is manufactured.",
        "The IUPAC reading is confined to named terminology entries, and later NICS tensor/scan papers were not read in full. No numerical scan, full-current-density reconstruction, modern all-criteria classifier or new experimental/numerical replay is supplied."
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:conjugation-aromaticity-boundary",
      "name": "Conjugation and criterion-specific aromaticity distinction",
      "kind": "definition",
      "description": "Conjugation describes specified orbital coupling across a molecular framework, including p-orbital interaction across an intervening sigma bond and qualifying lone-pair interactions. It can occur in linear systems such as butadiene. Aromaticity requires a stated cyclic-system criterion; a reference-defined energetic comparison, geometry descriptor and magnetic-response probe answer different questions. Cyclic connectivity, six active electrons or a delocalized representation alone are not a universal aromaticity classification.",
      "claimIds": [
        "D-phys-conjugation-aromaticity-boundary"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries"
        },
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions"
        }
      ],
      "openObligations": [
        "The named glossary entries are semantic authority, not newly observed linear-polyene spectra, a charge-density map or a universal measured stabilization law.",
        "Orbital symmetry requires a defining plane and orbital basis. Phase consistency of a stationary representation is not a measured coherence time, transport phase length or persistent dynamics in all environments.",
        "The familiar Huckel electron-count statement has restricted monocyclic planar/almost-planar model conditions. No all-topology, all-state six-electron or4n+2 theorem is admitted here, and the original1931 paper has not been read.",
        "Real conjugated materials, pigments and conductive polymers require specified structure, state, environment and response evidence; their optical, transport and reactivity properties are not derived from this terminology."
      ]
    },
    {
      "id": "phys:ring-center-nics-criterion",
      "name": "Method-defined ring-center NICS magnetic criterion",
      "kind": "definition",
      "description": "For the selected historical magnetic criterion, define ring-center NICS as the sign-reversed computed absolute magnetic shielding, in ppm, at the unweighted mean of the ring heavy-atom coordinates. The point has no observed nucleus. Specify the molecular geometry and quantum-chemical response method. The descriptor probes magnetic shielding under a chosen aromaticity convention; it is not a measured proton NMR shift, an energy or a direct observation of an electron circulating on a trajectory.",
      "claimIds": [
        "D-phys-ring-center-nics-criterion"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe"
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
        }
      ],
      "openObligations": [
        "Local sigma-bond shielding and probe position can affect a center value; the source notes small-ring complications and maxima away from the center. One point is not a full current-density map or an integrated ring-current strength.",
        "A negative sign alone is not sufficient for universal aromaticity: the same source gives a small negative saturated nonaromatic cyclohexane control. No numerical universal cutoff or fused-ring relative ranking is introduced.",
        "Shielding and model-space stabilization energy are different observables. No universal equivalence of magnetic, energetic, geometric, optical and kinetic criteria follows."
      ]
    },
    {
      "id": "phys:schleyer1996-nics-context",
      "name": "Schleyer ring-center shielding computation context",
      "kind": "context",
      "description": "Use the source neutral D6h benzene and saturated D3d cyclohexane geometries from Becke3LYP/6-31G*, as specified for these Table1 cases. Evaluate ring-center absolute magnetic shieldings with GIAO-SCF, taking the 6-31+G* column as the selected response basis. Reverse the shielding sign to report NICS in ppm. The source Gaussian94 calculation supplies a finite magnetic-response comparison; no new solver execution is performed.",
      "claimIds": [
        "M-phys-schleyer1996-nics-context"
      ],
      "status": "definition",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe"
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
        }
      ],
      "openObligations": [
        "This is computational-analysis with a model-context, not an observed proton resonance, a sample preparation or an empirical ring-current measurement.",
        "The table also reports a different6-31G* shielding column. Geometry method and response method/basis are distinct; columns are not repeat acquisitions or a statistical uncertainty estimate.",
        "Only the named center descriptor and benzene/cyclohexane cases are admitted. The prior experimental NMR shifts, energetic calibration, other compounds and cited unpublished IGLO results are not separately reviewed or newly acquired evidence.",
        "No raw input deck, convergence study, magnetic-field scan, tensor decomposition, modern uncertainty or independent numerical reproduction is supplied."
      ]
    },
    {
      "id": "phys:benzene-ring-center-nics",
      "name": "Finite benzene ring-center NICS with saturated control",
      "kind": "scoped-process",
      "description": "Table1 reports ring-center NICS=-9.7 ppm for neutral D6h benzene and -2.2 ppm for saturated nonaromatic D3d cyclohexane in the selected GIAO-SCF/6-31+G* column. The distinct6-31G* column gives -11.5 and -2.1 ppm, respectively. The declared benzene response supplies a finite positive magnetic aromaticity-probe example, while the saturated control limits a sign-only classification.",
      "claimIds": [
        "C-phys-benzene-ring-center-nics"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
        }
      ],
      "openObligations": [
        "These are computed point shieldings on supplied model geometries, not measured proton chemical shifts, an observed ring-current trajectory or a newly measured stabilization energy.",
        "The selected -9.7 ppm cannot silently be replaced by the -11.5 ppm value from the other response-basis column. Their difference is not an experimental error bar or independent repeat.",
        "Local shielding, geometry and probe location remain part of interpretation. Negative saturated-control values do not establish aromatic cyclohexane; no all-system negative-sign threshold or relative fused-ring ranking is inferred.",
        "The magnetic result does not derive an absorption spectrum, material conductivity, carrier mobility, reactivity constraint, excited-state lifetime or an all-aromaticity theorem from six electrons."
      ]
    },
    {
      "id": "phys:aromatic-conjugation-source-scope",
      "name": "Scoped conjugation and benzene energetic/magnetic criteria",
      "kind": "scoped-process",
      "description": "Aromatic-system description is retained through named finite criteria: the existing neutral-benzene VB state lowers the source model energy relative to its one-Kekule-function reference, while a separate GIAO-SCF calculation gives a specified ring-center magnetic shielding probe for benzene with a saturated control. Conjugation is broader than cyclic aromaticity. These model results do not establish universal electron-count thresholds, all-response equivalence or a new physical stage beyond resonance.",
      "claimIds": [
        "C-phys-aromatic-conjugation-source-scope"
      ],
      "status": "evidence-scoped",
      "level": 2,
      "sourceCoordinates": [
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries"
        },
        {
          "sourceId": "iupac2022-pi-conjugation-aromaticity",
          "locator": "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions"
        },
        {
          "sourceId": "pauling1933-resonance",
          "locator": "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients"
        },
        {
          "sourceId": "pauling1934-resonance-erratum",
          "locator": "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe"
        },
        {
          "sourceId": "schleyer1996-nics",
          "locator": "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
        },
        {
          "sourceId": "legacy-2",
          "locator": "/"
        }
      ],
      "openObligations": [
        "Reuse the existing pauling1933-benzene model-context and pauling-benzene-vb-lowering output without cloning a new independent benzene calculation. Its nonorthogonal functions, unnormalized coefficients, negative exchange-energy convention and unreviewed thermochemical calibration limits remain.",
        "The linked1934 erratum corrects original radical tables/discussion and leaves the selected benzene TableI unchanged. It remains part of the same study provenance, not a second replication or a new radical result.",
        "Pauling-Wheland VB energy lowering and Schleyer GIAO-SCF shielding use different methods and response questions. No common fitted likelihood, universal equivalence, independent empirical agreement or newly measured charge-density/phase-coherence map is asserted.",
        "Original parent2.3 weight0.45 and parent2.5 weight0.55, each direction[2], modes[0,1], necessary/dependency10/arising, carrier1/0 N_min=N_crit=3,N_sat=null, are not measured causal fractions, universal prerequisites or carrier thresholds. No replacement normalized weights are introduced.",
        "A supplied molecular framework is relevant, but the earlier H2 formation/spectroscopy experiment is not a necessary history for these benzene calculations. Reuse of the same resonance model is data dependence, not an observed later emergence stage.",
        "Six carbon centers, six active electrons, five VB functions and a coordinate probe point are different supplied counting domains. They neither validate minima3 nor establish a universal six-electron or4n+2 criterion for all states and topologies.",
        "Original Level2, Phase2, TypeRole2, Science[0,1,2], established, MustCover[10], ShouldCover[9], Optional[] and SOMA pattern/arising labels are catalogue/display classifications. Recurring representations do not establish an autonomous physical stage beyond local resonance or a universal object/event boundary.",
        "Conjugation can be linear without satisfying a cyclic aromaticity criterion. Real pigments, polymers, conjugated materials, optical absorption, transport and reactivity require their own stated preparations, response models and evidence; their existence is not blanket-excluded, but those outputs are not inferred here.",
        "Generic original Huckel/MO and spectroscopic/ring-current/stability/transport paragraphs have null DOI/URL and identify no reviewed publications. No unread primary Huckel derivation, observed ring current, optical or transport experiment is manufactured.",
        "The IUPAC reading is confined to named terminology entries, and later NICS tensor/scan papers were not read in full. No numerical scan, full-current-density reconstruction, modern all-criteria classifier or new experimental/numerical replay is supplied."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:conjugation-aromaticity-boundary-ring-center-nics-criterion",
      "source": "phys:conjugation-aromaticity-boundary",
      "target": "phys:ring-center-nics-criterion",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A named magnetic probe is one declared criterion, distinct from generic conjugation and from a reference-defined energy comparison.",
      "claimIds": [
        "D-phys-ring-center-nics-criterion"
      ]
    },
    {
      "id": "physics:schleyer1996-nics-context-benzene-ring-center-nics",
      "source": "phys:schleyer1996-nics-context",
      "target": "phys:benzene-ring-center-nics",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "Supplied geometry, response basis and probe sign convention condition the calculated center shieldings.",
      "claimIds": [
        "M-phys-benzene-ring-center-nics"
      ],
      "contextIds": [
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:ring-center-nics-criterion-benzene-ring-center-nics",
      "source": "phys:ring-center-nics-criterion",
      "target": "phys:benzene-ring-center-nics",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The named point descriptor does not become measured nuclear NMR or a universal negative-sign classifier.",
      "claimIds": [
        "M-phys-benzene-ring-center-nics"
      ],
      "contextIds": [
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:conjugation-aromaticity-boundary-aromatic-conjugation-source-scope",
      "source": "phys:conjugation-aromaticity-boundary",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Conjugation and criterion-specific cyclic aromaticity remain distinct descriptions.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:ring-center-nics-criterion-aromatic-conjugation-source-scope",
      "source": "phys:ring-center-nics-criterion",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected magnetic descriptor retains its probe and non-universal classification limits.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:resonance-energy-reference-boundary-aromatic-conjugation-source-scope",
      "source": "phys:resonance-energy-reference-boundary",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing energy reference and exchange-parameter convention limit the energetic criterion.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:pauling1933-benzene-context-aromatic-conjugation-source-scope",
      "source": "phys:pauling1933-benzene-context",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The full existing neutral-benzene VB calculation is reused once, including its correction scope.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:pauling-benzene-vb-lowering-aromatic-conjugation-source-scope",
      "source": "phys:pauling-benzene-vb-lowering",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The existing parameterized energy comparison remains one result from the existing computational study.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:schleyer1996-nics-context-aromatic-conjugation-source-scope",
      "source": "phys:schleyer1996-nics-context",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The distinct geometry/response preparation is retained rather than borrowed from the historical VB model.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    },
    {
      "id": "physics:benzene-ring-center-nics-aromatic-conjugation-source-scope",
      "source": "phys:benzene-ring-center-nics",
      "target": "phys:aromatic-conjugation-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The positive finite shielding result and saturated control constrain interpretation without replacing the energetic criterion.",
      "claimIds": [
        "M-phys-aromatic-conjugation-source-scope"
      ],
      "contextIds": [
        "pauling1933-benzene",
        "schleyer1996-nics"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:conjugation-aromaticity-boundary",
      "role": "definition",
      "denotes": "Conjugation and criterion-specific aromaticity distinction under the named finite criteria and source/model boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-conjugation-aromaticity-boundary"
      ]
    },
    {
      "nodeId": "phys:ring-center-nics-criterion",
      "role": "definition",
      "denotes": "Method-defined ring-center NICS magnetic criterion under the named finite criteria and source/model boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-ring-center-nics-criterion"
      ]
    },
    {
      "nodeId": "phys:schleyer1996-nics-context",
      "role": "model-context",
      "denotes": "Schleyer ring-center shielding computation context under the named finite criteria and source/model boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-schleyer1996-nics-context"
      ]
    },
    {
      "nodeId": "phys:benzene-ring-center-nics",
      "role": "scoped-phenomenon",
      "denotes": "Finite benzene ring-center NICS with saturated control under the named finite criteria and source/model boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-benzene-ring-center-nics"
      ]
    },
    {
      "nodeId": "phys:aromatic-conjugation-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Scoped conjugation and benzene energetic/magnetic criteria under the named finite criteria and source/model boundaries.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-aromatic-conjugation-source-scope"
      ]
    }
  ],
  "studies": [
    {
      "id": "schleyer1996-nics",
      "sourceId": "schleyer1996-nics",
      "studyType": "computational-analysis",
      "doi": "10.1021/ja960582d",
      "journal": "Journal of the American Chemical Society",
      "volume": "118",
      "issue": "26",
      "pages": "6317-6318",
      "system": "Selected neutral-benzene and saturated-cyclohexane ring-center magnetic shielding model comparison",
      "preparation": "Use the source neutral D6h benzene and saturated D3d cyclohexane geometries from Becke3LYP/6-31G*, as specified for these Table1 cases. Evaluate ring-center absolute magnetic shieldings with GIAO-SCF, taking the 6-31+G* column as the selected response basis. Reverse the shielding sign to report NICS in ppm. The source Gaussian94 calculation supplies a finite magnetic-response comparison; no new solver execution is performed.",
      "observable": "Computed sign-reversed ring-center absolute shieldings in ppm; no experimental acquisition.",
      "finding": "Table1 reports ring-center NICS=-9.7 ppm for neutral D6h benzene and -2.2 ppm for saturated nonaromatic D3d cyclohexane in the selected GIAO-SCF/6-31+G* column. The distinct6-31G* column gives -11.5 and -2.1 ppm, respectively. The declared benzene response supplies a finite positive magnetic aromaticity-probe example, while the saturated control limits a sign-only classification.",
      "limitations": [
        "This is computational-analysis with a model-context, not an observed proton resonance, a sample preparation or an empirical ring-current measurement.",
        "The table also reports a different6-31G* shielding column. Geometry method and response method/basis are distinct; columns are not repeat acquisitions or a statistical uncertainty estimate.",
        "Only the named center descriptor and benzene/cyclohexane cases are admitted. The prior experimental NMR shifts, energetic calibration, other compounds and cited unpublished IGLO results are not separately reviewed or newly acquired evidence.",
        "No raw input deck, convergence study, magnetic-field scan, tensor decomposition, modern uncertainty or independent numerical reproduction is supplied.",
        "These are computed point shieldings on supplied model geometries, not measured proton chemical shifts, an observed ring-current trajectory or a newly measured stabilization energy.",
        "The selected -9.7 ppm cannot silently be replaced by the -11.5 ppm value from the other response-basis column. Their difference is not an experimental error bar or independent repeat.",
        "Local shielding, geometry and probe location remain part of interpretation. Negative saturated-control values do not establish aromatic cyclohexane; no all-system negative-sign threshold or relative fused-ring ranking is inferred.",
        "The magnetic result does not derive an absorption spectrum, material conductivity, carrier mobility, reactivity constraint, excited-state lifetime or an all-aromaticity theorem from six electrons."
      ],
      "readExtent": "full-published-scientific-main-text-selected-model-results",
      "reviewedLocators": [
        "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
        "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
      ],
      "metadataCheckedAt": "2026-10-19",
      "metadataUrl": "https://pubs.acs.org/doi/pdf/10.1021/ja960582d",
      "correctionCheck": "Title/authors/DOI/journal/volume/issue/pages checked against publisher and registry. Online3July1996 differs from registry print/general1January1996. Empty relation/no update-to item and limited title/DOI search found no explicit erratum; no exhaustive later assessment or modern tensor/scan review claimed."
    }
  ],
  "comparisons": [],
  "sources": [
    {
      "id": "pauling1933-resonance",
      "kind": "research-publication",
      "title": "The Nature of the Chemical Bond. V. The Quantum-Mechanical Calculation of the Resonance Energy of Benzene and Naphthalene and the Hydrocarbon Free Radicals",
      "authors": [
        "Linus Pauling",
        "G. W. Wheland"
      ],
      "year": 1933,
      "doi": "10.1063/1.1749304",
      "url": "https://authors.library.caltech.edu/records/0123d-s6q38/files/PAUjcp33c.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-primary-published-passages",
        "locators": [
          "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
          "Published pages 364-365, benzene secular determinant, normal-state eigenfunction and Table I: nonorthogonal five-function comparison, parameterized energy lowering and unnormalized coefficients",
          "Published page 365, discussion accompanying Table I: uncertainty of transferring aliphatic thermochemical reference energies to the exchange-parameter calibration"
        ],
        "limit": "Read printed pages 362-367 visually from the published primary scan; scientific admission is limited to benzene assumptions and calculation on 363-365. Pages 366-367 were inspected for boundaries; naphthalene numbers and radical results are not admitted. Pages 368-374 were not read. No separate thermochemical publication/data, experimental benzene acquisition, modern benchmark or local determinant replay. The Caltech record explicitly attaches the separately reviewed 1934 erratum. DOI/title/author order/journal/volume/issue/pages compared with DOI registration; an empty Crossref relation object does not mean no correction exists."
      }
    },
    {
      "id": "pauling1934-resonance-erratum",
      "kind": "research-publication",
      "title": "The Nature of the Chemical Bond. V",
      "authors": [
        "Linus Pauling",
        "G. W. Wheland"
      ],
      "year": 1934,
      "doi": "10.1063/1.1749514",
      "url": "https://authors.library.caltech.edu/records/0123d-s6q38/files/PAUjcp33ccorr.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-primary-erratum",
        "locators": [
          "Published page 482, upper Pauling/Wheland erratum: corrections to radical Tables III-IV on original pages 370-371 and radical dissociation discussion on 373; selected benzene Table I unchanged"
        ],
        "limit": "Read the complete upper Pauling/Wheland erratum on page 482 visually. The separate keto-enol-tautomerism erratum below it is outside this admission. Corrections affect original radical tables/comparisons, not the selected benzene determinant, eigenfunction or Table I. This review does not admit the original radical calculation, which was not read in full. Published correction identity and DOI registration compared; linked correction checked through the institutional primary record, not inferred from Crossref relation metadata alone."
      }
    },
    {
      "id": "iupac2022-pi-conjugation-aromaticity",
      "kind": "research-publication",
      "title": "Glossary of terms used in physical organic chemistry (IUPAC Recommendations 2021)",
      "authors": [
        "Charles L. Perrin",
        "Israel Agranat",
        "Alessandro Bagno",
        "Silvia E. Braslavsky",
        "Pedro Alexandrino Fernandes",
        "Jean-François Gal",
        "Guy C. Lloyd-Jones",
        "Herbert Mayr",
        "Joseph R. Murdoch",
        "Norma Sbarbati Nudelman",
        "Leo Radom",
        "Zvi Rappoport",
        "Marie-Françoise Ruasse",
        "Hans-Ullrich Siehl",
        "Yoshito Takeuchi",
        "Thomas T. Tidwell",
        "Einar Uggerud",
        "Ian H. Williams"
      ],
      "year": 2022,
      "doi": "10.1515/pac-2018-1010",
      "url": "https://www.degruyterbrill.com/document/doi/10.1515/pac-2018-1010/html",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-published-terminology-entries",
        "locators": [
          "Publisher primary-text entries conjugated system/conjugation, delocalization, orbital symmetry and sigma/pi: orbital coupling, linear examples and representation boundaries",
          "Publisher primary-text entries aromatic/aromaticity, Huckel (4n+2) rule and Huckel molecular orbital theory: cyclic reference criteria and restricted monocyclic model conditions"
        ],
        "limit": "Read the named publisher-indexed primary glossary entries, not the entire182-page document or a full local PDF. Direct HTML access returned405 and the PDF endpoint returned an empty response. This is primary terminology authority, not experimental acquisition, a primary Huckel1931 reading or a reproduced HMO derivation. Title Recommendations2021 is distinguished from publication2022; DOI registry identity/authors match. Registry empty relation/no update-to plus limited correction search is not exhaustive."
      }
    },
    {
      "id": "schleyer1996-nics",
      "kind": "research-publication",
      "title": "Nucleus-Independent Chemical Shifts: A Simple and Efficient Aromaticity Probe",
      "authors": [
        "Paul von Ragué Schleyer",
        "Christoph Maerker",
        "Alk Dransfeld",
        "Haijun Jiao",
        "Nicolaas J. R. van Eikema Hommes"
      ],
      "year": 1996,
      "doi": "10.1021/ja960582d",
      "url": "https://online.tugraz.at/tug_online/voe_main2.getvolltext?pCurrPk=36676",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-published-scientific-main-text-selected-model-results",
        "locators": [
          "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
          "Published page 6318, Table 1 benzene and cyclohexane rows and footnotes b-c: GIAO-SCF basis columns and Becke3LYP geometries; local sigma-shielding and off-center-maxima discussion"
        ],
        "limit": "Read both scientific pages6317-6318 and visually checked the table, footnotes and local-shielding discussion. Admission is restricted to the ring-center descriptor and specified benzene/cyclohexane rows; no other primary experiment, five-membered calibration, fused-ring ranking or modern tensor/scan result is newly admitted. No Gaussian input/output replay or modern numerical uncertainty is supplied. Publisher title/authors/DOI/volume/issue/pages match DOI registration; online3July1996 differs from registry1January print/general date. Registry empty relation/no update item and limited correction search found no explicit erratum; not an exhaustive later-literature audit."
      }
    }
  ]
};

/** Preserve named energetic and magnetic criteria, saturated controls and shared benzene evidence. */
export function validateAromaticConjugationContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness"
      ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]))
      : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected,
        `Aromatic conjugation ${kind} changed ${id}: preserve model, preparation and interpretation limits`);
    }
  }
}
