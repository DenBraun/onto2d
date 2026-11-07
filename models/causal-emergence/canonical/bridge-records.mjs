// Reviewed bridge records. references/canonical/graph.json holds identical copies;
// bridges.mjs admits only these exact records.
export const BRIDGE_SOURCES = [
  {
    "id": "draper2004-ions-rna",
    "kind": "research-publication",
    "title": "A guide to ions and RNA structure",
    "authors": [
      "David E Draper"
    ],
    "year": 2004,
    "doi": "10.1261/rna.5205404",
    "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC1370927/",
    "path": null,
    "sha256": null,
    "review": {
      "extent": "selected-review-sections-ion-interactions-diffuse-ions-ion-interdependence-sites-and-hill-analysis-html-figures-not-audited",
      "locators": [
        "RNA 10(3), 335-343, sections Ion interactions with RNA negative charges and Diffuse ions with Figures 2-3 captions: crystal-versus-solution counter-ion arrangement, polyelectrolyte ion retention and the diffuse ion atmosphere",
        "RNA 10(3), 335-343, section Interdependence of RNA-associated ions: Mg2+/K+ competition through long-range electrostatic interactions rather than shared discrete sites",
        "RNA 10(3), 335-343, sections Ions and sites and Hill plot analysis of Mg2+-RNA titrations: diffuse versus chelated ion association and limits of site-binding and Hill-fit interpretation"
      ],
      "limit": "Read the PMC HTML text of the sections on ion interactions with RNA negative charges, diffuse ions, interdependence of RNA-associated ions, ions and sites and Hill-plot analysis; other sections, figure images and the cited NLPB calculations were not examined. The read passages do not cite Debye-Hueckel, so equating their ion atmosphere with the Debye-Hueckel concept is a stated bridge inference."
    }
  },
  {
    "id": "ghahramani1997-sensorimotor-observer",
    "kind": "research-publication",
    "title": "Computational Models of Sensorimotor Integration",
    "authors": [
      "Zoubin Ghahramani",
      "Daniel M. Wolpert",
      "Michael I. Jordan"
    ],
    "year": 1997,
    "doi": null,
    "url": "https://mlg.eng.cam.ac.uk/zoubin/zoubin/compmod.abstract.html",
    "path": null,
    "sha256": null,
    "review": {
      "extent": "author-hosted-abstract-only-chapter-text-unread",
      "locators": [
        "Author-hosted abstract page"
      ],
      "limit": "Only the abstract on the first author's Cambridge page was read; the 31-page chapter PDF (Morasso & Sanguineti, eds., Self-Organization, Computational Maps and Motor Control, Elsevier, pp. 117-147, as cited by Ernst & Banks 2002) did not render here, so models, data and derivations are unread and only abstract-level statements are used. No DOI was verified."
    }
  }
];
export const BRIDGE_CLAIMS = [
  {
    "id": "B-omega-compensation",
    "kind": "author-definition",
    "statement": "In the topology manuscript a local deviation of the proto-field Ω is written δΩ, and compensation is introduced as a minimal structural condition for preserving admissibility under repeated comparison, with C the minimal compensation function and E = C(δΩ) (Eq. 1, PDF page 4). The compensation record is therefore defined with a deviation of the admissibility context as the argument of C.",
    "scope": "Author definition dependency inside Level 0 (PDF pages 3-4); notational, because C has no specified form.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 3-4: proto-field Omega, local deviation and compensation function, Equation 1",
        "role": "provenance",
        "note": "Origin of the author definition E = C(δΩ); not independent confirmation, and no functional form of C is given."
      },
      {
        "sourceId": "review",
        "locator": "What the sources contribute",
        "role": "limits",
        "note": "The internal review lists pp. 3-5 as formal context and definitions whose explicit operational domains remain necessary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: manuscript PDF pages 3-5 in full (local PDF with the source-lock SHA-256). C(δΩ) is introduced without a functional form, domain, measure or units, so the dependency fixes only the argument of an otherwise unspecified function.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript's wording that a deviation 'induces a requirement of compensation' is the author's formulation, not a tested mechanism.",
      "Ω is stated to be neither a physical vacuum nor a material substrate (PDF page 3), and the E of Eq. 1 is the author's structural measure, not a measured physical energy."
    ]
  },
  {
    "id": "B-compensation-oscillatory-mode",
    "kind": "author-definition",
    "statement": "On PDF page 5 the manuscript lets ψ(x,t) = A e^{i(kx−ωt)} (Eq. 3) denote a minimal stable compensatory form and describes it as the simplest oscillatory configuration capable of preserving admissible compensation under repeated distinguishability. The oscillatory mode record is thus defined with the compensation relation, while the canonical record binds actual mode eligibility to a declared wave operator, domain and boundary conditions.",
    "scope": "Author definition dependency inside Level 0 (PDF pages 4-5).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 4-5: compensation measure, primitive difference operators, aggregation of distortion and minimal stable compensatory form, Equations 1-4",
        "role": "provenance",
        "note": "Origin of the author's description of Eq. 3 as a compensatory form; not independent confirmation."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F01 and F02 keep operator choice and sign convention as separate open conditions on mode eligibility."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: PDF pages 4-5 in full, with Eq. 3 checked on the rendered page. Because C is unspecified, 'preserving admissible compensation' has no checkable predicate; the dependency is definitional wording only.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript itself states that Eq. 3 does not yet represent a physical wave in the standard sense.",
      "Mode eligibility still requires a declared operator and sign convention (F01, F02); preserving compensation does not establish stability, localization or objecthood."
    ]
  },
  {
    "id": "B-compensation-hyperbolic-frame",
    "kind": "author-definition",
    "statement": "In the signature proposition (PDF pages 6-8) the manuscript lists compensatory boundedness, that admissible oscillatory modes must allow compensatory balance rather than unidirectional accumulation of all quadratic contributions, among five conditions on the bilinear form g, and rejects the definite signatures because same-sign accumulation is incompatible with the required compensatory balance between ordered variation and directional localization. The hyperbolic frame's explicit assumptions therefore include a compensation condition on the derivative contributions of the two primitive directions.",
    "scope": "Author definition dependency inside Level 0 (signature argument, PDF pages 6-8).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 6-8: five admissibility conditions and signature proposition, Equations 5-9",
        "role": "provenance",
        "note": "Origin of condition 4 and of its use in rejecting definite signatures; not independent confirmation of the proposition."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F01: the compensatory-boundedness assumption lacks a mathematical predicate and does not by itself force the indefinite class."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: PDF pages 6-8 in full, with Eqs. 6-9 checked on the rendered pages. The internal review (F01) notes that ordered asymmetry and compensatory boundedness still need mathematical predicates before they can establish that the indefinite class is forced.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript states that the result does not yet claim the full empirical geometry of physical spacetime (PDF page 8).",
      "The compensatory-balance condition is informal and its relation to the unspecified function C of Eq. 1 is not stated; the dependency records the role of the condition in the argument only."
    ]
  },
  {
    "id": "B-compensation-discrete-scale",
    "kind": "author-definition",
    "statement": "Under the heading 'Discrete compensation scale' (PDF pages 12-13) the manuscript states that a scale parameter ℏ appears as a marker of discrete compensatory action, expressed through E = ℏω and p = ℏk (Eqs. 20-21), and states that its role is to mark the discreteness of admissible compensation in oscillatory regimes. The discrete-scale record is thus defined with the compensation relation; the internal review (F10) records that these relations do not themselves make frequencies or wave numbers discrete.",
    "scope": "Author definition dependency inside Level 0 (PDF pages 12-13); the hypothesis status is unchanged.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "provenance",
        "note": "Origin of the discrete compensation scale and of Eqs. 20-21; not independent confirmation of discreteness."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F10: E = hbar omega and p = hbar k do not by themselves make continuous frequencies or wave numbers discrete."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: PDF pages 12-13 in full, with Eqs. 20-26 checked on the rendered pages. No spectrum, boundary condition, quantization rule or admissibility predicate selecting discrete values is given, and ℏ is neither assigned a value nor identified with the established constant.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. It does not show that compensation is discrete."
    ]
  },
  {
    "id": "B-oscillatory-mode-discrete-scale",
    "kind": "author-definition",
    "statement": "Eqs. 20-21 (PDF page 12) relate E and p to the frequency ω and wave number k of the plane-wave mode of Eq. 3, and PDF page 15 states that a stable oscillatory configuration ψ = A e^{i(kx−ωt)} remains stable only within a bounded range of parameters (k, ω, ℏ). The discrete-scale record is therefore defined with the oscillatory mode's parameters. The bounded range is asserted without a stability calculation, and no spectrum or boundary condition makes ω or k discrete (F10).",
    "scope": "Author definition dependency inside Level 0 (PDF pages 12-15).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "provenance",
        "note": "Eqs. 20-21 use the mode frequency and wave number; not independent confirmation."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 14-15: first closure segment and stability parameter range of the oscillatory mode, Equations 27-29",
        "role": "provenance",
        "note": "PDF page 15 names (k, omega, hbar) as the stability parameters of the mode; the range is asserted, not computed."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F10: the discrete-scale hypothesis needs a separate spectrum or admissibility rule."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: PDF pages 12-15 in full. The manuscript gives no calculation of the asserted stability range of (k, ω, ℏ) and no domain or boundary condition for the mode.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. Writing E = ℏω with a continuous ω does not derive a discrete spectrum."
    ]
  },
  {
    "id": "B-anisotropy-field-anisotropy-boundary",
    "kind": "method",
    "statement": "Evaluation contract: the Level-0 anisotropy hypothesis is assessed by the L1 field-anisotropy boundary, which requires a model, state or preparation, directional comparison, observable and setup transformation, and compares against the free real scalar Klein-Gordon model, whose mode frequency ω_p = +sqrt(p²+m²) depends on momentum only through p². The topology manuscript supplies no input to that comparison: the term anisotropy does not occur in its 36 pages, its only defined directional asymmetry is the ordered asymmetry of the two primitive directions used for the signature (PDF pages 6-8), and its minimal operator and scalar term exclude first-order drift terms and any new preferred direction beyond the metric structure (PDF pages 9-12). The hypothesis therefore stays an unresolved proposal (F12).",
    "scope": "Evaluation boundary for the Level-0 anisotropy proposal against a specified free-field comparison; no anisotropic regime, observable or Level-0 mechanism is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "method",
        "note": "The Klein-Gordon mode frequency depends on p only through p squared; this is the isotropic comparison model the evaluation uses."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 6-8: five admissibility conditions and signature proposition, Equations 5-9",
        "role": "limits",
        "note": "The only directional asymmetry the manuscript defines is between the sequential and spatial primitives (signature), from which the anisotropy record says not to infer the directional branch."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "limits",
        "note": "The minimal operator and scalar term exclude drift terms and new preferred directions; no anisotropy term is defined."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F12: the directional branch has no sufficiently specific derivation in the fully reviewed topology paper."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: the manuscript's full text (36 PDF pages; term search after joining hyphenated line breaks finds no 'anisotrop', 'gradient', 'transport' or 'isotrop') and Tong Sections 2.1-2.2; the boundary record's other inputs (Tong Sections 0, 2.3 opening, 2.6) were read for this seam but supply no anisotropy result. No experiment or numerical replay is involved.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis.",
      "The Level-0 formalism has one spatial direction (PDF pages 25 and 33), so a rotational comparison of the three-dimensional free-scalar kind has no direct counterpart in it; only the reflection k to -k is available there."
    ]
  },
  {
    "id": "B-directional-gradient-field-anisotropy-boundary",
    "kind": "method",
    "statement": "Evaluation contract: a directional-gradient claim must name an admissibility functional, its domain, a gradient operator, units and a map to a field observable before it can be compared with a specified field model such as the free real scalar Klein-Gordon field, whose dynamics are fixed by a quadratic Lagrangian with linear equations of motion. The topology manuscript defines no gradient construct (the term does not occur). Its admissibility functionals, the quadratic action S[ψ] called the minimal admissibility functional (Eq. 18, PDF page 11) and the frame-dependent selection functional F[ψ] with open χ metrics and coefficients (Eqs. 59-60), are used for stationarity and argmin selection; no gradient of admissibility along a direction is defined. The L1 boundary accordingly admits no directional-admissibility law (F11, F12).",
    "scope": "Evaluation boundary for the Level-0 directional-gradient proposal; no gradient operator, observable or Level-0 field mechanism is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "method",
        "note": "A specified free field model fixes its Lagrangian and linear equations of motion; the evaluation asks the gradient proposal for the corresponding specification."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "limits",
        "note": "The action S[psi] is called the minimal admissibility functional; it is used for stationarity, and no directional gradient of admissibility is defined."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 33-34: alternative admissible forms, admissibility functional and argmin selection, Equations 56-60",
        "role": "limits",
        "note": "The selection functional F[psi] is defined for argmin selection; its chi terms are formal descriptors, not observables, and no gradient of it is defined."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F11 leaves the selector's metrics and coefficients open; F12 keeps the directional branch unresolved."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: the manuscript's full text (term search) with PDF pages 9-12 and 33-34 in full, and Tong Sections 2.1-2.2. No experiment, numerical replay or alternative anisotropy model is reviewed.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis.",
      "The record evaluates missing specification; it does not show that no directional-gradient model can be constructed."
    ]
  },
  {
    "id": "B-directional-gradient-photon-polarization-scope",
    "kind": "method",
    "statement": "Evaluation contract: in the free Maxwell field each nonzero momentum p has two orthonormal transverse polarization vectors, and the normal-ordered Hamiltonian H = ∫d³p/(2π)³ |p| Σ_r a^{r†}_p a^r_p assigns every quantum the energy |p| independently of polarization, so the specified model offers no polarization-dependent propagation against which a directional admissibility gradient could be read. The topology manuscript's fields (ψ, Ψ, the node fields Ψa, the internal fields ϕp and the effective field Φ) carry no vector index or polarization degree of freedom in a 1+1 dimensional structure (PDF pages 25-27), and it defines neither polarization nor a gradient construct; the L1 record therefore keeps the proposal unresolved (F12).",
    "scope": "Evaluation boundary for the Level-0 directional-gradient proposal in the free-photon polarization setting; no polarization response or Level-0 mechanism is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-maxwell",
        "locator": "Section 6.2.1: transverse polarization basis, constrained commutator, bosonic mode algebra and normal-ordered free Hamiltonian",
        "role": "method",
        "note": "Transverse basis and normal-ordered free Hamiltonian with equal energy |p| for both polarizations: the comparison used by the evaluation."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 25-27: CRT Lagrangian, emergent node parameter M and particle-like unit in 1+1 dimensions, Equations 46-50",
        "role": "limits",
        "note": "The Level-0 node formalism is 1+1 dimensional and its fields carry no vector index or polarization degree of freedom."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F12: the directional branch has no sufficiently specific derivation in the topology paper."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: Tong Section 6.2.1 and the manuscript's full text (term search finds no 'polariz' or 'gradient'). No polarization measurement, material response or numerical replay is involved.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis.",
      "Equal free-mode frequencies concern the free Maxwell model only; they do not exclude anisotropic responses of other models, media or interacting vacua."
    ]
  },
  {
    "id": "B-transport-bias-directional-excitation-boundary",
    "kind": "method",
    "statement": "Evaluation contract: a transport-bias claim would need a displacement or flux observable compared in a specified model; in the free scalar model momentum eigenstates are not localized, normalizable states are smeared wavepackets that are only partially localized, and particle number is conserved in the free theory. The topology manuscript defines no transport-bias effect, and its only bias and drift passages exclude them: first-order drift terms are excluded from the minimal operator because they would introduce a preferred propagation bias (PDF pages 9-12), and the triadic closure conditions are said to eliminate net drift (PDF pages 19-20). A bias of the first-order drift kind is therefore excluded from the manuscript's minimal operator class, no other source of bias is defined, and the proposal remains unresolved (F12).",
    "scope": "Evaluation boundary for the Level-0 transport-bias proposal against the free-scalar excitation description; no transport effect, drift observable or Level-0 mechanism is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
        "role": "method",
        "note": "Delocalized momentum eigenstates, smeared wavepackets and conserved free particle number: the comparison description used by the evaluation."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "limits",
        "note": "First-order drift terms are excluded from the minimal operator as an ungrounded propagation bias."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 19-20: configurational density, triadic closure conditions and net-drift elimination, Equations 36-40",
        "role": "limits",
        "note": "The closure conditions are described as eliminating net drift; no transport-bias effect is defined."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F12: the transport-bias proposal has no sufficiently specific derivation in the topology paper."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: the manuscript's full text with PDF pages 9-12 and 19-20 in full, and Tong Section 2.4 before 2.4.1. The boundary record's PDG lifetime source was not re-read; no transport measurement or numerical replay is involved.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis.",
      "The manuscript's exclusion of drift terms is a stated restriction of its minimal class (subject to F01), not a proof that no directional bias can occur in an extended model."
    ]
  },
  {
    "id": "B-anisotropy-scalar-dispersion-isotropy",
    "kind": "method",
    "statement": "Evaluation contract: in the chosen free real scalar model the positive mode frequency ω_p = +sqrt(p²+m²) depends on p only through p², so E(Rk) = E(k) for proper rotations at fixed |k| and mass; this isotropic null is what a directional anisotropy claim would have to break with a specified model, state and observable. The manuscript provides no such model: its formalism has one spatial direction (PDF pages 25-27), where the dispersion ω² = k² + m² of the declared case convention is even in k, and its minimal operator excludes added preferred directions (PDF pages 9-12).",
    "scope": "Formal isotropic-null comparison for the Level-0 anisotropy proposal; no measured anisotropy or Level-0 mechanism.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "method",
        "note": "The positive Klein-Gordon frequency as a function of p squared is the input of the isotropic null comparison."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "limits",
        "note": "No anisotropic term: the minimal construction excludes new preferred directions."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 25-27: CRT Lagrangian, emergent node parameter M and particle-like unit in 1+1 dimensions, Equations 46-50",
        "role": "limits",
        "note": "The Level-0 node formalism is 1+1 dimensional, so rotations of a spatial wave vector have no counterpart."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F12 keeps the anisotropy proposal unresolved."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: Tong Sections 2.1-2.2 (and the record's Sections 2.3 opening and 2.6) and the manuscript's full text. The rotational null concerns the chosen free scalar in infinite flat space and its Fock vacuum only.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis.",
      "Isotropy of one free model does not show that every state, interaction or vacuum is isotropic, and the one-dimensional Level-0 dispersion supplies no directional test of its own."
    ]
  },
  {
    "id": "B-carrier-promotion-quantum-field-framework",
    "kind": "method",
    "statement": "Evaluation contract: the carrier-promotion contract's target is quantum-field organization, with ensemble-quanta as basic units described by an effective field Φ(X,t) with L_eff = ½(∂Φ)² − V(Φ) and the hierarchy φp → ensemble-quantum → Φ (PDF pages 35-36). The framework record defines quantum field theory by quantum fields, states and dynamics; in its sources a quantum field theory is the quantization of a classical field, whose field and conjugate momentum become operator valued functions obeying commutation relations, with states evolving under a Hamiltonian. The contract specifies no operator algebra, state space, symmetry representation, explicit potential V or field content, and the manuscript states that what is completed is not yet a theory of quantum fields.",
    "scope": "Evaluation boundary for the Level-0 carrier-promotion proposal against the quantum-field framework definition; no Level-0-to-quantum-field derivation is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-introduction",
        "locator": "Section 0: field-theory framework and interaction principles",
        "role": "method",
        "note": "Quantum field theory as quantization of a classical field with operator valued degrees of freedom: the target specification used by the evaluation."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "method",
        "note": "Canonical quantization promotes a field and its conjugate momentum to operators with commutation relations."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "limits",
        "note": "The proposed Level-1 effective field and hierarchy, with the author's statement that no quantum-field theory is completed."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F09: an ensemble and a promoted carrier are distinct objects of evaluation; coupling alone does not demonstrate a new regime."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: manuscript PDF pages 27-36 in full, Tong Section 0 and Sections 2.1-2.2. No interacting, gauge or effective-field quantization source was reviewed for this bridge.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis. It concerns the specified carrier construction and does not claim that every possible emergent quantum theory is impossible.",
      "No admitted CRT or ensemble instance exists (F07, F09), so the promotion rule has no inputs to evaluate beyond its specification."
    ]
  },
  {
    "id": "B-free-scalar-quantization-discrete-scale",
    "kind": "method",
    "statement": "Evaluation contract: the manuscript introduces ℏ as a marker of discreteness via E = ℏω and p = ℏk (PDF pages 12-13). In the free real scalar construction the oscillator commutator [a, a†] = 1 yields a ladder of states with energies separated by ω, a one-particle state a†_p|0⟩ carries energy ω_p and momentum p, and ω_p = +sqrt(p²+m²) varies with continuous p; momenta become discrete when boundary conditions are imposed, as for the Casimir plates. The relations themselves therefore select no discrete ω or k, and the hypothesis needs a separately specified quantization or spectrum rule (F10). The L1 record states the same distinction: integer occupation is distinct from discrete allowed momenta.",
    "scope": "Interpretation of the Level-0 discrete-scale hypothesis with one specified quantized free field; no Level-0 spectrum or quantization rule is admitted.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "method",
        "note": "Oscillator ladder spectrum from [a, a-dagger] = 1 at fixed frequency, and continuous mode frequencies of the Klein-Gordon field."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
        "role": "method",
        "note": "One-particle Fock states with energy omega_p and momentum p, and a number operator with integer eigenvalues."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.3.2: Casimir plates, boundary-quantized momentum and regulated 1+1 energy sum",
        "role": "method",
        "note": "Discrete momenta arise from imposed plate boundary conditions, not from the energy-frequency relation."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "limits",
        "note": "The manuscript's discrete-scale statements, with hbar explicitly not identified with the established constant."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F10: the discrete-scale hypothesis needs a separate spectrum or admissibility rule."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: Tong Sections 2.1-2.2, 2.3 (opening and 2.3.2) and 2.4 before 2.4.1, and manuscript PDF pages 12-15. Interacting, bound-state and finite-volume spectra are not reviewed here.",
      "A described evaluation dependency is not a physical creation order, a causal effect or a claim of universal necessity; it records what the evaluation requires and does not confirm or refute the hypothesis. The free-field comparison neither confirms nor excludes a Level-0 discrete admissible spectrum.",
      "The direction runs from the L1 model to the Level-0 hypothesis because the L1 record makes no statement about Level 0; it is the hypothesis whose interpretation uses the free-field result."
    ]
  },
  {
    "id": "B-free-field-time-evolution-closure-parameter",
    "kind": "review-finding",
    "statement": "Formal identity: the free scalar Heisenberg equations dφ/dt = π and dπ/dt = ∇²φ − m²φ combine to the Klein-Gordon equation ∂μ∂^μφ + m²φ = 0, written in Fourier modes as (∂²t + p² + m²)φ(p,t) = 0 with ω_p = +sqrt(p²+m²). With one spatial coordinate this is the operator ∂²t − ∂²x + m² of the Level-0 case convention, and substituting Ψ = A e^{i(kx−ωt)} gives (−ω² + k² + m²)Ψ = 0, i.e. m² = ω² − k², the one-dimensional form of E_p² = p² + m² (ħ = c = 1) with ω ↔ E_p and k ↔ p. The same linear equation holds for a complex field and its conjugate. It does not hold for the manuscript's literal Eqs. 24-25 (□ = −∂²t + ∂²x), which give m² = k² − ω² against Eq. 26 (F02).",
    "scope": "Formal identity of a declared one-space-dimension linear equation and its plane-wave dispersion with the free Klein-Gordon form; no physical identification of Ψ, ω, k or m.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
        "role": "supports",
        "note": "Eqs. 2.155-2.157: the Heisenberg field satisfies the Klein-Gordon equation, with positive-frequency phases exp(-i E_p t)."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "supports",
        "note": "Eqs. 2.79-2.82 fix the sign convention: Fourier modes obey (d_t^2 + p^2 + m^2) phi = 0 with omega_p = +sqrt(p^2+m^2)."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.5: complex scalar Lagrangian, equations of motion, particle and antiparticle operators and conserved charge",
        "role": "supports",
        "note": "Eqs. 2.142-2.143: a complex scalar obeys the same Klein-Gordon equation, and the conjugate equation is its complex conjugate."
      },
      {
        "sourceId": "witnesses",
        "locator": "mathematical_witnesses()",
        "role": "supports",
        "note": "Finite check for k=1, omega=2, m2=3: zero residual for the declared +d_tt-d_xx convention and residual 6 for the source operator; it checks this convention only."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "limits",
        "note": "Eqs. 24-26 of the source are mutually inconsistent in sign; the identity applies to the declared case convention, not to Eqs. 24-25 as written."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F02 records the operator/mass sign conflict and that the Phase-B case verifies its own declared convention."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: Tong Sections 2.1-2.2, 2.5 and 2.6 (2021 HTML edition) and manuscript PDF pages 5-14, with Eqs. 4-26 checked on rendered pages; the identity was re-derived by direct substitution and agrees with the finite witness. No numerical replay of the Phase-B case was run for this bridge.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The direction records that the declared Level-0 convention adopts the Klein-Gordon operator form; it does not state that the Klein-Gordon field is derived from Level 0.",
      "Interpretations differ: the Level-0 field is a classical complex trial field in normalized 1+1 units, the L1 field a quantized real scalar in 3+1 flat spacetime with ħ = c = 1. Equal form does not identify m with a measured particle mass, ω with a physical energy or k with a physical momentum."
    ]
  },
  {
    "id": "B-free-field-time-evolution-sequential-axis",
    "kind": "author-definition",
    "statement": "Author correspondence: the manuscript introduces ∂t as representing sequential distinguishability and thereby opening the condition for temporal directionality, says the primitive operators acquire analytical interpretation only later, and concludes that time and space first appear as directional conditions of distinguishability; its central claim lists time among notions not to be treated as primitive givens (PDF pages 1-2, 4, 36). On the physical side, the L1 record evolves operators in real Hamiltonian time t by O_H(t) = e^{iHt} O_S e^{−iHt} with dO_H/dt = i[H, O_H].",
    "scope": "Author-proposed reading of the Level-0 sequential primitive in terms of physical time; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 4-5: compensation measure, primitive difference operators, aggregation of distortion and minimal stable compensatory form, Equations 1-4",
        "role": "provenance",
        "note": "The author's statement that the sequential operator opens the condition for temporal directionality."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "provenance",
        "note": "The conclusion's reading of time as a directional condition of distinguishability."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 1-2: abstract and introduction, time, space, energy, mass and particle-like form as non-primitive notions",
        "role": "provenance",
        "note": "The central claim listing time among non-primitive notions."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
        "role": "supports",
        "note": "Defines the physical side: time dependence of operators generated by the Hamiltonian."
      },
      {
        "sourceId": "review",
        "locator": "What the sources contribute",
        "role": "limits",
        "note": "The review keeps the directional primitives as formal context whose operational domains remain necessary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. The manuscript supplies no clock, units, ordering operator acting on configurations or map from ∂t to a measured time; identifying the sequential primitive with physical time requires an additional model (open obligation of l0:sequential-axis: separate a structural ordering operator from physical time and from its later analytic realization).",
      "The L1 time is the parameter of a declared Hamiltonian in 3+1 flat spacetime; the manuscript's 'temporal directionality' is not an arrow-of-time result, and the L1 record supplies none.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript's thesis that time is not a primitive given is recorded as the author's proposal, not as an admitted derivation.",
      "Read: manuscript PDF pages 1-2, 4-5 and 36 within a full-text reading, and Tong Section 2.6; no measurement or clock model was reviewed."
    ]
  },
  {
    "id": "B-free-scalar-propagation-spatial-axis",
    "kind": "author-definition",
    "statement": "Author correspondence: ∂x represents directional distinguishability and thereby opening the condition for spatial localization; spatial interpretation becomes admissible only after localization achieves structural stability (stated on PDF pages 5 and 23); and time and space first appear as directional conditions of distinguishability (PDF pages 4-5, 21-24, 36). On the physical side, the free scalar envelope record describes envelopes in infinite homogeneous flat space: momentum eigenstates are not localized in space, and a smeared wavepacket is partially localized in both position and momentum space.",
    "scope": "Author-proposed reading of the Level-0 spatial primitive in terms of physical space and spatial localization; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 4-5: compensation measure, primitive difference operators, aggregation of distortion and minimal stable compensatory form, Equations 1-4",
        "role": "provenance",
        "note": "The author's statement that the directional operator opens the condition for spatial localization."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 21-24: objecthood conditions, CRT-node status, localization and bound-state analogy, Equations 41-45",
        "role": "provenance",
        "note": "PDF page 23 repeats that spatial interpretation becomes admissible only after localization."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "provenance",
        "note": "The conclusion's reading of space as a directional condition of distinguishability."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
        "role": "supports",
        "note": "Defines the physical side: free-field particles are delocalized momentum eigenstates, and localization requires smeared wavepackets."
      },
      {
        "sourceId": "review",
        "locator": "What the sources contribute",
        "role": "limits",
        "note": "The review keeps the directional primitives as formal context whose operational domains remain necessary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. The Level-0 spatial primitive is one direction of separability without metric, distance or dimension, while the L1 record assumes three-dimensional flat space; identification requires separating directional distinguishability from coordinates and a physical metric (open obligation of l0:spatial-axis) and a localization criterion met by an admitted localized carrier, of which none exists (F07).",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The bridge does not state that space is constructed from the Level-0 primitive.",
      "Read: manuscript PDF pages 4-5, 21-24 and 36 within a full-text reading, and Tong Section 2.4 before 2.4.1; the envelope record's group-velocity derivation was not re-derived here."
    ]
  },
  {
    "id": "B-free-field-time-evolution-compensation",
    "kind": "author-definition",
    "statement": "Author correspondence: under the heading 'Compensation and the emergence of energy' the manuscript defines energy as the structural measure of compensatory requirement, E = C(δΩ), adding that at this stage energy is neither a substance nor an externally supplied quantity; Eq. 2 writes the aggregation of distortion symbolically as E ≈ ∫f², and the conclusion reads energy as a compensatory measure of admissible deviation (PDF pages 3-5, 36). On the physical side, the free scalar record specifies energy as the Hamiltonian H = ½∫d³x [π² + (∇φ)² + m²φ²], whose spectrum gives the energies of states and whose commutator with an operator fixes that operator's Heisenberg time derivative.",
    "scope": "Author-proposed reading of the Level-0 compensation measure in terms of physical energy; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 3-4: proto-field Omega, local deviation and compensation function, Equation 1",
        "role": "provenance",
        "note": "The author's definition of energy as the compensation measure, Eq. 1."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 4-5: compensation measure, primitive difference operators, aggregation of distortion and minimal stable compensatory form, Equations 1-4",
        "role": "provenance",
        "note": "Eq. 2, the symbolic aggregation of distortion written as an energy."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "provenance",
        "note": "The conclusion's reading of energy as a compensatory measure."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "supports",
        "note": "Defines the physical side: the Hamiltonian and its spectrum of energy eigenstates."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.6 and 2.6.1: Heisenberg evolution and spacelike commutators",
        "role": "supports",
        "note": "Defines the physical side: the Hamiltonian generates time dependence of operators."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. C(δΩ) has no specified functional, measure or units (open obligation of l0:compensation), Eq. 2 is a symbolic representation, and the Level-0 E is not shown to be conserved, additive or the generator of time translations, so no comparison with a Hamiltonian is possible yet.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The section title's 'emergence of energy' is the author's thesis, not an admitted result.",
      "Read: manuscript PDF pages 1-5 and 36 within a full-text reading, Tong Sections 2.1-2.2 and 2.6."
    ]
  },
  {
    "id": "B-free-scalar-quantization-closure-parameter",
    "kind": "author-definition",
    "statement": "Author correspondence: m² should not yet be read as empirical particle mass, and only once localized resonant configurations and persistent node-like units become admissible can this closure parameter be reinterpreted as the precursor of what physical theory will later describe as mass (PDF page 12); the section 'Emergent mass as an integrability condition' gives m² = ω² − k² in normalized units (page 13); the node parameter M² is called the emergent mass of the node as a configurational parameter (page 25); and the conclusion reads mass as an integrability condition of oscillatory closure (page 36). On the physical side, a free scalar one-particle state has ω_p² = p² + m², recognized as the relativistic dispersion relation for a particle of mass m.",
    "scope": "Author-proposed reading of the Level-0 closure parameter as a precursor of physical mass; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "provenance",
        "note": "PDF pages 10 and 12: the author's statements that m2 is not yet empirical mass but its later precursor."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "provenance",
        "note": "PDF page 13: 'Emergent mass as an integrability condition' and Eq. 26 in normalized units."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 25-27: CRT Lagrangian, emergent node parameter M and particle-like unit in 1+1 dimensions, Equations 46-50",
        "role": "provenance",
        "note": "PDF page 25: M2 named the emergent mass of the node."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "provenance",
        "note": "The conclusion's reading of mass as an integrability condition."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
        "role": "supports",
        "note": "Defines the physical side: m as the mass of the free scalar's one-particle states."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F02 sign conflict and F07 absence of an admitted CRT instance bound the reading."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. The manuscript itself defers the mass reading until localized node-like units are admissible, and no CRT instance is admitted (F07); a physical identification would require such an instance, a quantization of its fluctuations and a map from the normalized m² to a measured mass with units.",
      "The source's literal Eqs. 24-25 give m² = k² − ω², the opposite sign to Eq. 26 (F02); the mass reading presupposes the reconciled case convention.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. 'Emergent mass' is the author's heading, not an admitted result.",
      "Read: manuscript PDF pages 9-13, 25-27 and 36 with equations checked on rendered pages, within a full-text reading, and Tong Section 2.4 before 2.4.1."
    ]
  },
  {
    "id": "B-free-scalar-quantization-crt-node",
    "kind": "author-definition",
    "statement": "Author correspondence: a coherently stabilized resonant node is said to behave, at the level of admissibility, as a particle-like unit in 1+1 dimensions that represents a persistent bounded excitation, carries an emergent configurational parameter M and exhibits discrete internal modes, with the caveat that this does not assert the existence of physical particles (PDF pages 26-27); the CRT-node is not yet a classical particle nor an empirically established microscopic constituent (page 22); and particle-like form is among the notions the central claim does not treat as primitive givens (pages 1-2). On the physical side, quantizing the free real scalar gives states a†_p|0⟩ interpreted as single spin-0 particles of mass m and momentum p, which are momentum eigenstates not localized in space.",
    "scope": "Author-proposed reading of the Level-0 CRT carrier class as a particle-like unit; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 25-27: CRT Lagrangian, emergent node parameter M and particle-like unit in 1+1 dimensions, Equations 46-50",
        "role": "provenance",
        "note": "PDF pages 26-27: the node as a particle-like unit, with the author's disclaimer about physical particles."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 21-24: objecthood conditions, CRT-node status, localization and bound-state analogy, Equations 41-45",
        "role": "provenance",
        "note": "PDF page 22: the CRT-node is not yet a classical particle or established microscopic constituent."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 1-2: abstract and introduction, time, space, energy, mass and particle-like form as non-primitive notions",
        "role": "provenance",
        "note": "The central claim listing particle-like form among non-primitive notions."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.4 before 2.4.1: particles, Fock space and operator-valued distributions",
        "role": "supports",
        "note": "Defines the physical side: one-particle Fock states of a quantized field, delocalized in space."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F05-F07: balance does not localize and the tested completions admit no object-qualified CRT."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. The CRT carrier class has no admitted instance: tested completions in the declared portable model admit no object-qualified CRT (F07), and balance conditions alone do not localize (F05-F06); the asserted discrete internal modes and bounded stable solutions are not demonstrated in the manuscript.",
      "The notions differ structurally: the Level-0 unit is a proposed localized nonlinear classical configuration in 1+1 dimensions, whereas the L1 particle is a delocalized momentum eigenstate of a quantized free field that needs smearing to form a normalizable wavepacket. A correspondence would require an admitted CRT instance, its quantization and a map to particle states and quantum numbers.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript's heading 'Emergent transition from node to particle-like unit' is the author's thesis, not an admitted result.",
      "Read: manuscript PDF pages 1-2 and 21-27 within a full-text reading, and Tong Section 2.4 before 2.4.1."
    ]
  },
  {
    "id": "B-free-scalar-quantization-quadratic-action",
    "kind": "author-definition",
    "statement": "Author correspondence: the minimal operator is the hyperbolic d'Alembertian class, and the Level-0 transition to oscillatory dynamics is said not to require importing the d'Alembertian from later physics (PDF page 10); the mass term is said not to be inserted by analogy with familiar relativistic field theory (page 12); and variation of the action yields a Klein-Gordon-type form □ψ + m²ψ = 0 with □ = −∂²t + ∂²x, to be read rather than as the already constituted spacetime wave operator of later physical theory (page 13). On the physical side, the free scalar record rests on the classical Klein-Gordon equation ∂μ∂^μφ + m²φ = 0, whose Fourier modes oscillate at ω_p = +sqrt(p²+m²); for a complex field the Lagrangian is ∂μψ*∂^μψ − M²ψ*ψ.",
    "scope": "Author-proposed reading of the Level-0 quadratic action as yielding a Klein-Gordon-type equation; not derived or tested, and valid as a type statement only up to the unresolved sign convention.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
        "role": "provenance",
        "note": "PDF pages 10 and 12: the d'Alembertian class and the author's statement that nothing is imported by analogy."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
        "role": "provenance",
        "note": "PDF page 13: the Klein-Gordon-type form, Eqs. 24-25."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Sections 2.1-2.2: canonical quantization and free real scalar field",
        "role": "supports",
        "note": "Defines the physical side: the classical Klein-Gordon equation of the free real scalar."
      },
      {
        "sourceId": "tong-qft-free-fields",
        "locator": "Section 2.5: complex scalar Lagrangian, equations of motion, particle and antiparticle operators and conserved charge",
        "role": "supports",
        "note": "Defines the physical side for a complex field: its Lagrangian and Klein-Gordon equations of motion."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F01 conditional operator uniqueness and F02 operator/mass sign conflict."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. With η = diag(−1,+1) (PDF pages 7 and 25) and the mass term −½m²ψ*ψ, the source action's kinetic sign is reversed relative to ∂μψ*∂^μψ − M²ψ*ψ, in which ∂μ∂^μ = ∂²t − ∇² (Tong Eqs. 2.79 and 2.81), while its mass term is not, so its Euler-Lagrange equation (Eqs. 24-25) is the Klein-Gordon form with m² replaced by −m²; plane waves then give m² = k² − ω² against Eq. 26 (F02). A consistent correspondence requires reconciling metric, action, equation and dispersion together, as the declared case convention does in the formal-identity bridge.",
      "Operator uniqueness is conditional on the declared two directions, bilinear class and exclusion rules (F01); the author's statement that nothing is imported from later physics is recorded, not evaluated.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The manuscript states that the action is not introduced as a ready-made physical law.",
      "Read: manuscript PDF pages 5-14 with Eqs. 4-26 checked on rendered pages, and Tong Sections 2.1-2.2 and 2.5; the Euler-Lagrange sign was re-derived by hand from Eqs. 4 and 22."
    ]
  },
  {
    "id": "B-quantum-field-framework-ensemble-quantum",
    "kind": "author-definition",
    "statement": "Author correspondence: Level 1 is said to begin when ensemble-quanta interact as newly constituted basic units, thereby establishing the ontological preconditions for quantum-field organization; an effective field Φ(X,t) with L_eff = ½(∂Φ)² − V(Φ) and the hierarchy φp → ensemble-quantum → Φ are offered as the ontological foundation of the first quantum-field level (PDF page 35). The manuscript also states that an ensemble-quantum denotes an indivisible configurational whole rather than a particle or an excitation of a microscopic physical field (page 33), and that what is completed is not yet a theory of quantum fields (page 36). On the physical side, quantum field theory is the quantization of a classical field, with operator valued functions of space and time as its degrees of freedom.",
    "scope": "Author-proposed reading of the Level-0 promoted carrier class as the carrier basis of quantum-field organization at Level 1; not derived or tested.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "topology",
        "locator": "PDF pages 32-33: cycle of arising, ensemble-quantum definition and multiplicity of structural quanta, Equations 55-58",
        "role": "provenance",
        "note": "PDF page 33: what the author means, and does not mean, by an ensemble-quantum."
      },
      {
        "sourceId": "topology",
        "locator": "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62",
        "role": "provenance",
        "note": "PDF pages 35-36: the proposed Level-1 effective field, hierarchy (62) and the author's statement that no quantum-field theory is completed."
      },
      {
        "sourceId": "tong-qft-introduction",
        "locator": "Section 0: field-theory framework and interaction principles",
        "role": "supports",
        "note": "Defines the physical side: quantum field theory as quantization of a classical field with operator valued degrees of freedom."
      },
      {
        "sourceId": "review",
        "locator": "F01–F12; What the sources contribute",
        "role": "limits",
        "note": "F09: ensemble and promoted carrier are distinct objects of evaluation; coupling alone does not demonstrate a new regime."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This is the author's proposed reading, stated in the manuscript; it is not derived or tested here. No ensemble or promoted-carrier instance exists because no qualified CRT inputs exist (F07, F09); Φ(X,t) is a classical effective field over an abstract coordinate with unspecified V, and no operator algebra, state space, symmetry representation, dynamics or field content is specified (C-phys-l0-bridge).",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity. The bridge records the author's proposed target notion and does not state that quantum fields are constructed from Level-0 carriers.",
      "Read: manuscript PDF pages 27-36 within a full-text reading, and Tong Section 0; Standard Model and interacting-field sources were not reviewed for this bridge."
    ]
  },
  {
    "id": "B-inclusive-width-branching-partial-lifetime",
    "kind": "review-finding",
    "statement": "Super-Kamiokande obtains the partial-lifetime bound as tau/B=1/Gamma_limit from a posterior on the decay rate Gamma of one specified mode, with B the branching ratio of that mode. This uses the branching-ratio convention of the C001 inclusive width record: B_f is the relative partial decay rate Gamma_f/Gamma_tot, and the mean proper lifetime is tau=1/Gamma_tot in natural units. With widths in energy units the channel's inverse-time rate is Gamma_f/hbar=B_f/tau, so a bound on tau/B bounds one partial rate only.",
    "scope": "Definitional link between the PDG relative-partial-decay-rate and mean-lifetime conventions adopted by the C001 inclusive width record and the C012 channel-specific partial-lifetime convention of Takenaka et al. (2020); no decay rate, branching fraction or total lifetime is computed.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "takenaka2020",
        "locator": "Published pages 112011-11 to 14, Sections VI-VII, Tables VI-VII and Equations 3-8: systematic uncertainties, eight-region likelihood and conditional partial-lifetime bounds",
        "role": "supports",
        "note": "Section VII and Equation 8 define the reported partial-lifetime bound as the inverse of the channel decay-rate limit, with B the branching ratio of that mode."
      },
      {
        "sourceId": "pdg2025-kinematics",
        "locator": "Page 2, Sections 49.3-49.4, Equations 49.10-49.12: narrow-width factorization, relative partial decay rates and rest-frame decay phase space",
        "role": "supports",
        "note": "Branching ratios are stated as relative partial decay rates, and partial decay rates are defined for a decaying particle in its rest frame."
      },
      {
        "sourceId": "pdg2025-kinematics",
        "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units",
        "role": "supports",
        "note": "The mean proper lifetime is tau=1/Gamma in the declared natural units."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Takenaka et al. published pages 112011-13 to 112011-14 (Section VII, Equations 3-8) and PDG Kinematics page 2 (Sections 49.3 to 49.4.1). The Bayesian rate construction, exposures, efficiencies and any complete nucleon-decay channel partition are not reproduced or assessed.",
      "The C001 width convention is scoped to inclusive weak-resonance widths; carrying its B_f=Gamma_f/Gamma_tot bookkeeping over to a hypothetical proton channel is a definitional transfer. A lower bound on tau/B is not a bound on the total proton lifetime, and no observed proton decay, complete channel set or energy-width value is implied.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-lifetime-convention-exponential-survival",
    "kind": "review-finding",
    "statement": "PDG Kinematics gives the survival probability of a particle with mean proper lifetime tau=1/Gamma as an exponential in elapsed time, which the C001 convention writes as P=exp(-Gamma_E*t_proper/hbar). The UCNtau analysis models expected counts after storage as N_j*exp(-lambda*t_j)+B_j, with lambda the sum of the beta-decay rate 1/tau_n and up-scattering, depolarization and escape rates. The C012 record N(t)=N(0)*exp(-lambda*t), tau=1/lambda, is this ensemble use of the same exponential mean-lifetime convention.",
    "scope": "Definitional link between the C001 exponential proper-lifetime convention (PDG Kinematics Section 49.4.1) and the C012 ensemble survival convention used in the UCNtau storage fits (Gonzalez et al. 2021, author version).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pdg2025-kinematics",
        "locator": "Page 2, Section 49.4.1, Equations 49.14-49.15: exponential survival, proper lifetime, total width and time dilation in the declared natural units",
        "role": "supports",
        "note": "Exponential survival probability for a particle with mean proper lifetime tau=1/Gamma."
      },
      {
        "sourceId": "gonzalez2021",
        "locator": "Author arXiv:2106.10375v2 pages 1 and 4: beta-decay introduction and mean neutron lifetime; paired and global extraction, Equations 1-2, loss rate including beta decay and exponential mean-count model",
        "role": "supports",
        "note": "The global storage fit uses an exponential mean-count model whose loss rate is the beta-decay rate 1/tau_n plus named non-decay loss rates."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: PDG Kinematics page 2, Section 49.4.1, and the author arXiv:2106.10375v2 version of Gonzalez et al., pages 1 and 4. The published PRL pages were not re-read for this bridge, and no fit, correction or lifetime value is reproduced.",
      "The resonance-pole, line-shape and time-dilation parts of the C001 convention are not used by the storage fits. The effective rate lambda is an apparatus-dependent storage loss rate, not a decay width; counts after storage sample a population rather than the proper time of individual neutrons, and no beta-decay branching or beam/bottle comparison follows.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-penning-cyclotron-proton-moment-ratio",
    "kind": "review-finding",
    "statement": "Mooser et al. determine g_p/2 as the ratio of the Larmor frequency to the cyclotron frequency nu_c=q_p*B0/(2*pi*m_p), both measured in the same field, obtain nu_c from the modified cyclotron, axial and magnetron frequencies through the Brown-Gabrielse invariance theorem, and use the proton cyclotron frequency as the field calibration. The C001 charge-aware cyclotron record declares the same three-mode reconstruction omega_c^2=omega_plus^2+omega_z^2+omega_minus^2 for mass-to-charge comparisons. The C025 frequency-ratio definition therefore uses that free-cyclotron convention.",
    "scope": "Definitional link between the C001 Penning-trap free-cyclotron convention (MIT ion comparisons) and the C025 proton g-factor frequency-ratio definition of Mooser et al. (2014).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "mooser2014",
        "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
        "role": "supports",
        "note": "States g/2=nu_L/nu_c with both frequencies in the same field and obtains nu_c from the three trap frequencies by the Brown-Gabrielse invariance theorem."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Mooser et al. arXiv:1406.4888v1 pages 2-3 (Equation 1 and the frequency-ratio paragraph); in this version the invariance-theorem formula and Equation 1 are embedded images, and reference [15] and the Natarajan source of the C001 record were not re-read.",
      "Only the free-cyclotron reconstruction convention is shared. Trap imperfections, image-charge, motional and line-shape corrections are preparation specific; no proton or ion mass, mass ratio, moment value or correction is transferred between the C001 mass measurements and the C025 moment measurements.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-quark-current-sachs-form-factors",
    "kind": "review-finding",
    "statement": "Bernauer et al. define GE=F1-tau*kappa*F2 and GM=F1+kappa*F2 from the Dirac and Pauli form factors of the one-photon proton cross section. Brodsky, Pauli and Pinsky state that form factors are hadronic matrix elements of the current, that the nucleon F1 and F2 are spin-conserving and spin-flip vector-current matrix elements, and that in the light-front interaction picture the full current equals the free quark current, each struck quark entering with its charge e_f. The C001 record J_em,q=sum_f Q_f*qbar_f*gamma*q_f is that current, so the Sachs definition uses it as the probed operator.",
    "scope": "Definitional link between the C001 quark electromagnetic current and the C025 Sachs form-factor convention, read through Bernauer et al. (2014) and the light-front review of Brodsky, Pauli and Pinsky (1998).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "bernauer2014",
        "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "role": "supports",
        "note": "Equations 3-7: Dirac/Pauli form factors in the one-photon cross section and their translation into GE and GM."
      },
      {
        "sourceId": "brodsky1998-light-front",
        "locator": "arXiv:hep-ph/9705477v1 pages 9-10, Section 1: form factors as hadronic current matrix elements and light-cone wavefunction overlaps",
        "role": "supports",
        "note": "Form factors are constructed from hadronic matrix elements of the current, identified with the free current at x=0 in the interaction picture."
      },
      {
        "sourceId": "brodsky1998-light-front",
        "locator": "arXiv:hep-ph/9705477v1 pages 40-41, Section 3B, Equations 3.21-3.24 and Figure 3: free quark current at x+=0, Drell-frame J+ matrix elements and Fock-state overlap sum weighted by struck-quark charge",
        "role": "supports",
        "note": "The full current is equated to the free quark current at x+=0; the form factor is a Fock-state overlap sum weighted by the struck-quark charge."
      },
      {
        "sourceId": "brodsky1998-light-front",
        "locator": "arXiv:hep-ph/9705477v1 pages 106-107, Section 5B, Equations 5.15-5.16: nucleon Dirac and Pauli form factors as vector-current matrix elements in an effective three-quark light-cone description",
        "role": "supports",
        "note": "Nucleon Dirac and Pauli form factors are spin-conserving and spin-flip vector-current matrix elements; the subsequent moments are three-quark model outputs."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Bernauer et al. arXiv:1307.6227v2 pages 6-7 (Equations 3-7) and Brodsky, Pauli and Pinsky arXiv:hep-ph/9705477v1 pages 9-10, 40-41 and 106-107. The Drell-Yan-West derivation and the review's three-quark model inputs are not checked, and no form factor is computed.",
      "The identification concerns the operator whose proton matrix element the form factors parametrize. The MAMI cross sections and fits determine GE and GM only; they determine no Fock-state amplitude, flavor separation, quark count or three-dimensional geometry, and the review's three-quark model moments are model outputs, not data.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-sachs-neutron-sachs-ratio",
    "kind": "review-finding",
    "statement": "Bernauer et al. write the one-photon elastic cross section with Sachs form factors as the Mott cross section times (GE^2+tau*GM^2)/(1+tau)+2*tau*GM^2*tan^2(theta/2), normalized at Q^2=0 to the proton charge and moment. Lachniet et al. use the one-photon exchange approximation to express the numerator of their deuterium ratio in this form with GE_n and GM_n, and describe the magnetic responses by the dipole with GM_p/mu_p and GM_n/mu_n. The C033 neutron Sachs-response definition therefore uses the Sachs decomposition and moment normalization convention of the C025 record.",
    "scope": "Definitional link between the C025 Sachs form-factor convention (Bernauer et al. 2014) and the C033 neutron Sachs response and normalized quantities (Lachniet et al. 2009).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "lachniet2009",
        "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
        "role": "supports",
        "note": "Equation 1 and its text: one-photon neutron numerator in GE_n and GM_n, dipole normalization and the adopted proton cross section in the denominator."
      },
      {
        "sourceId": "bernauer2014",
        "locator": "arXiv:1307.6227v2 pages 1-7, Sections I-III A, Table I and Equations 1-7: reused 2006-2007 acquisition, kinematics, squared Sachs response and imposed normalization",
        "role": "supports",
        "note": "Equation 7 and the Q^2=0 normalization of the Sachs form factors."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Lachniet et al. arXiv:0811.1716v2 pages 2-3 (introduction and Equation 1) and Bernauer et al. arXiv:1307.6227v2 pages 6-7 (Equations 5-7 and the static-limit normalization); the Riordan polarized-3He relation for gn was not re-read for this bridge.",
      "Only the response decomposition and normalization convention are shared. The CLAS denominator uses an adopted proton cross-section parameterization, not the MAMI data or fits; nuclear corrections, the sign of GMn, the value of mu_n and the free-neutron interpretation remain separate inputs, and no density or constituent picture follows.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-penning-cyclotron-electron-moment-ratio",
    "kind": "review-finding",
    "statement": "Fan et al. state that the Brown-Gabrielse invariance theorem, nu_c=(nu_bar_c^2+nu_bar_z^2+nu_bar_m^2)^(1/2), supplies the nu_c and nu_a=nu_s-nu_c needed to determine mu/mu_B, that it is invariant under misalignment and elliptic distortion of the trap, and that the electron serves as its own magnetometer because B cancels in the frequency ratios. The C001 charge-aware cyclotron record declares the same three-mode free-cyclotron reconstruction for ion mass ratios. The C034 frequency-ratio definition therefore uses that convention.",
    "scope": "Definitional link between the C001 Penning-trap free-cyclotron convention and the C034 single-electron anomaly/cyclotron frequency-ratio definition of Fan et al. (2023).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fan2023",
        "locator": "Physical Review Letters 130, 071801-2, Equations 4-5 and Figure 2: cryogenic Penning preparation, modified-to-free frequency conversion, relativistic/trap terms and separate cavity correction",
        "role": "supports",
        "note": "Equation 4 (invariance theorem) supplies the free cyclotron and anomaly frequencies used in Equation 3."
      },
      {
        "sourceId": "fan2023",
        "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
        "role": "supports",
        "note": "Equations 1-3: frequency definitions and the common-field cancellation in g/2=1+nu_a/nu_c."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Fan et al. pages 071801-1 and 071801-2 (Equations 1-5); the invariance-theorem reference [53] and the Natarajan source of the C001 record were not re-read, and no line fit or cavity correction is replayed.",
      "Only the free-cyclotron reconstruction convention is shared; the electron's relativistic shift, line-shape fits and cavity correction are separate. No ion mass, electron mass or moment value is transferred between the records, and alternating anomaly and cyclotron trials still require field stability.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-lepton-charge-electron-moment-normalization",
    "kind": "review-finding",
    "statement": "Fan et al. define the reported quantity as the electron magnetic moment in Bohr magnetons, -mu/mu_B=g/2, with mu_B=e*hbar/(2m) for electron charge -e, and write the moment operator as -(g/2)*mu_B*S/(hbar/2). PDG defines e=g*sin(theta_W) as the positron electric charge. The C034 normalization record therefore uses the C001 lepton charge convention: e is positive, the electron carries -e, mu_B is positive and the reported positive g/2 is the magnitude ratio -mu/mu_B.",
    "scope": "Definitional link between the C001 charged-lepton charge convention and the C034 signed electron moment and Bohr-magneton normalization (Fan et al. 2023).",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fan2023",
        "locator": "Physical Review Letters 130, 071801-1, Equations 1-3: signed electron moment, positive Bohr magneton, spin/anomaly/free-cyclotron frequency conventions and common-field cancellation",
        "role": "supports",
        "note": "Defines -mu/mu_B=g/2 and mu_B=e*hbar/(2m) for electron charge -e, and the signed moment operator."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
        "role": "supports",
        "note": "States that e=g*sin(theta_W) is the positron electric charge."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Fan et al. page 071801-1 (abstract and Equations 1-3) and PDG Electroweak Section 10.1 pages 2-3; the Standard Model prediction for g/2 and the PDG lepton listings are not used for this bridge.",
      "The charge convention fixes signs and units only. It does not supply the measured g/2, a fine-structure-constant value, an electron-substructure test or a charge-equality measurement, and no positron moment is inferred.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-higgs-rate-modifiers-atlas2012-strength",
    "kind": "method",
    "statement": "ATLAS defines its parameter of interest as a global signal strength mu that scales the total number of events predicted by the Standard Model for the Higgs signal, with mu=0 background-only and mu=1 the SM signal, and reports mu=1.4+/-0.3 at the fitted mass. The C001 rate-modifier record, from the LHC Higgs cross-section framework, writes each narrow-resonance rate as sigma_i*Gamma_f/Gamma_H and normalizes modifiers to the fixed-mass SM reference, recovered when all scale factors equal one. The ATLAS value is read as the common-modifier case of that convention.",
    "scope": "Interpretation of the reported ATLAS 2012 combined signal strength (atlas2012-inference) under the C001 narrow-width rate-modifier convention; no likelihood, channel weight or coupling fit is reproduced.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed pages 15-17, Sections 7-8 and Table 6: profile likelihood, prior channel inputs and correlated nuisance parameters",
        "role": "method",
        "note": "Section 7 defines the global signal strength used as the parameter of interest of the profile-likelihood fit."
      },
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed pages 17-20, Table 7 and Sections 9.2-10: local/global significance distinction and reported signal strength",
        "role": "supports",
        "note": "Reports mu=1.4+/-0.3 at the fitted mass, consistent with mu=1."
      },
      {
        "sourceId": "higgs2013-coupling-framework",
        "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers",
        "role": "method",
        "note": "Zero-width rate factorization, SM-normalized scale factors and the role of published ATLAS/CMS signal strengths."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: ATLAS arXiv:1207.7214v2 printed pages 15 and 20 and the LHC Higgs Cross Section Working Group handbook printed pages 130-133 (PDF 142-145). The 2013 framework postdates the 2012 analysis, ATLAS did not apply its kappa benchmarks in this paper, and no fit is replayed.",
      "A common mu assumes the SM ratios among production and decay channels and the narrow-width factorization; it does not separate production from decay, determine the total width or any single coupling, or establish the SM nature of the particle.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "B-dilepton-mass-atlas2012-four-lepton",
    "kind": "method",
    "statement": "In the ATLAS H->ZZ(*)->4l selection, the same-flavour, opposite-charge pair with invariant mass closest to the Z mass is the leading pair with m12 between 50 and 106 GeV, the sub-leading pair mass m34 must lie between a four-lepton-mass-dependent minimum and 115 GeV, all such pairs need m_ll>5 GeV, and the selected quadruplets are displayed in the four-lepton invariant mass m4l. These pair masses are the C001 quantity M_ll^2=(p_l+ + p_l-)^2 evaluated on reconstructed lepton four-momenta, and m4l applies the same construction to the quadruplet.",
    "scope": "Reconstruction convention used by the ATLAS 2011-2012 four-lepton acquisition and selection (atlas2012-acquisition); no candidate, mass fit or calibration is reproduced.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed pages 3-7, Section 4, Figures 1-3 and Table 3: lepton selection, constrained mass, control backgrounds and selected candidates",
        "role": "method",
        "note": "Section 4: lepton-pair invariant-mass windows, J/psi veto, four-lepton invariant mass and the Z-mass constrained fit."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: ATLAS arXiv:1207.7214v2 printed pages 3-4 (Section 4 selection and mass-resolution paragraphs); the UA1 source of the C001 convention was not re-read for this bridge, and no event, calibration or kinematic fit is replayed.",
      "Using the invariant-mass convention does not identify a Z boson or a Higgs decay for any event: the leading-pair Z-mass constraint, lepton calibration and background models are separate analysis inputs, and selected candidates in a mass window are not identified signal counts.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "atlas2012-acquisition"
    ]
  },
  {
    "id": "B-higgs-doublet-atlas2012-compatibility",
    "kind": "method",
    "statement": "ATLAS states that the SM symmetry-breaking mechanism implies a scalar particle, the SM Higgs boson, and concludes that its results are compatible with the hypothesis that the new particle is that boson while more data are needed to assess its nature. PDG describes the declared complex doublet whose vacuum expectation value leaves one neutral physical scalar H, and the LHC Higgs framework notes that in the SM all Higgs couplings are specified once the mass is given. The C052 compatibility statement is therefore interpreted relative to the H of the C001 single-doublet background at the fitted mass.",
    "scope": "Interpretation of the ATLAS 2012 compatibility statement (atlas2012-inference) relative to the C001 single-doublet Higgs background; no coupling, potential or spin-parity fit is reproduced.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed pages 1-3, Sections 1-3: 2011/April-June 2012 acquisition, detector, simulation and data control corrections",
        "role": "method",
        "note": "Introduction: the SM symmetry-breaking mechanism implies the SM Higgs boson that the search tests."
      },
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility",
        "role": "supports",
        "note": "Conclusion: compatibility with the SM Higgs hypothesis, with more data needed to assess the particle's nature."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses",
        "role": "supports",
        "note": "Declared doublet potential, vacuum expectation value and the single remaining neutral scalar H."
      },
      {
        "sourceId": "higgs2013-coupling-framework",
        "locator": "Author version 1307.1347v2, printed pages 130–134 (PDF 142–146), Sections 10.1–10.2.2, Equations 92–93 and Table 36: narrow-width rate factorization and leading coupling modifiers",
        "role": "supports",
        "note": "In the SM all Higgs couplings are specified once the Higgs mass is given; the framework assumes the state is the excitation of the symmetry-breaking field."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: ATLAS arXiv:1207.7214v2 printed pages 1 and 20, PDG Electroweak Section 10.1 page 2 and the LHC Higgs handbook printed pages 130-132; the original symmetry-breaking papers cited by ATLAS as [5-10] were not read.",
      "Compatibility with SM production and decay at one mass does not determine the doublet potential parameters, every Yukawa coupling or spin-parity, and does not exclude the additional scalars that PDG notes for non-minimal models; it is not a general test of a mass-generation mechanism.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "B-weak-currents-atlas2012-neutrality",
    "kind": "method",
    "statement": "ATLAS concludes that the decays to pairs of vector bosons whose net electric charge is zero identify the new particle as a neutral boson, and that the diphoton observation disfavours spin one. The C001 weak-field record assigns electric charges +e and -e to W+ and W- and none to Z, following the PDG distinction between the photon field, the neutral Z field and the charged W fields. The neutral-boson part of the C052 compatibility statement is therefore interpreted through these charge assignments for the ZZ(*), WW(*) and diphoton final states.",
    "scope": "Interpretation of the neutral-boson identification in the ATLAS 2012 conclusion (atlas2012-inference) through the C001 weak vector-field charge assignments.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "atlas2012-higgs-observation",
        "locator": "Author version 1207.7214v2, printed page 20, Section 10: neutral-boson observation and limited Standard Model Higgs compatibility",
        "role": "method",
        "note": "Neutral-boson identification from decays to vector-boson pairs with zero net charge."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis",
        "role": "supports",
        "note": "Photon, neutral Z and charged W fields and their currents in the declared broken-phase model."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: ATLAS arXiv:1207.7214v2 printed page 20 (Section 10) and PDG Electroweak Section 10.1 pages 2-3; the spin-one exclusion argument and its references [140, 141] were not read.",
      "The inference assumes charge conservation in the decay and the identification of the reconstructed final states with the stated vector-boson channels; no charge, spin or CP measurement of the new particle beyond this neutrality reading is implied.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "B-inclusive-dis-slac-scaling",
    "kind": "method",
    "statement": "Breidenbach et al. write the electron-only cross section as the Mott cross section times W2+2*W1*tan^2(theta/2), relate W2/W1 to R, the ratio of longitudinal to transverse virtual-photon absorption cross sections, and bound nu*W2 under the extreme assumptions R=0 and R=infinity; scaling in omega=2M*nu/q^2 holds for transverse dominance. The C001 inclusive-response record defines the equivalent Born decomposition in F1/F2 notation with R=sigma_L/sigma_T and x=Q^2/(2M*nu), and Whitlow et al. note that structure-function extraction otherwise assumes a constant R. The C072 scaling record is interpreted through that R-dependent extraction.",
    "scope": "Interpretation of the conditional 1969 SLAC scaling record (breidenbach1969) through the C001 inclusive one-photon response convention; no structure function, R value or radiative correction is reproduced.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "breidenbach1969",
        "locator": "SLAC-PUB-650 author preprint (August 1969, submitted to Phys. Rev. Letters) pages 1-6: abstract, W1/W2 cross-section form, R-dependent nu*W2 limits for R=0 and R=infinity, scaling observations and model discussion",
        "role": "method",
        "note": "Author preprint text of the letter: W1/W2 cross-section form, R-dependent nu*W2 and the R=0 and R=infinity limits."
      },
      {
        "sourceId": "whitlow1990-r",
        "locator": "SLAC-PUB-5284 pages 2-3 and 9-10: eight archived experiments, 5835 cross sections and response definitions",
        "role": "supports",
        "note": "Definition of R=sigma_L/sigma_T, first-Born response and the practice of assuming constant R when extracting structure functions."
      },
      {
        "sourceId": "pdg2025-structure-functions",
        "locator": "Pages 1-3, Sections 18.1-18.2, Equations 18.1-18.8: DIS kinematics, lepton/hadron tensors and unpolarized cross sections",
        "role": "supports",
        "note": "DIS kinematic definitions, including x=Q^2/(2M*nu)."
      },
      {
        "sourceId": "breidenbach1969",
        "locator": "Pages 936-937: R-dependent structure function and scaling; Figure 2",
        "role": "method",
        "note": "The bridged record's own preparation passage, reused within its existing review extent; the bridge adds no new acquisition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: the SLAC-PUB-650 author preprint (August 1969) pages 1-6 through its OCR text layer, Whitlow et al. SLAC-PUB-5284 pages 1-3 and 9-10, and PDG Structure Functions page 1. The published Physical Review Letters pages were not openly retrievable, and OCR symbols (nu, infinity, sigma_S) were normalized in the quotes.",
      "The convention does not choose R: the 1969 data do not separate W1 and W2, the Whitlow archive covers experiments from 1970 to 1985 rather than this acquisition, and the scaling statement remains conditional on transverse dominance. No parton, quark-charge or free-quark interpretation follows from this dependency.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "breidenbach1969"
    ]
  },
  {
    "id": "B-lepton-charge-borexino-electron-decay",
    "kind": "method",
    "statement": "Borexino searches for the hypothetical charge non-conserving decay of the electron, the lightest known charged particle, into a neutrino and a single photon, and reports tau>=6.6e28 yr at 90% C.L. for that two-body channel. Calling the channel charge non-conserving uses the C001 lepton convention, in which e- carries charge -e (e>0 being the positron charge) and the active neutrino is electrically neutral, so that with a neutral photon the final state carries no charge. The C073 lifetime bound is therefore interpreted as a test of electric-charge conservation in this channel only.",
    "scope": "Interpretation of the Borexino Phase-2 electron-decay bound (borexino2015-electron-inference) through the C001 charged-lepton and neutrino charge assignments.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "borexino2015-electron-decay",
        "locator": "Author v2, pages 1-2: abstract and introduction, charge-conservation motivation and the searched electron-to-neutrino-plus-photon channel",
        "role": "method",
        "note": "Abstract and introduction: the searched channel is the charge non-conserving decay of the electron into a neutrino and a photon."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
        "role": "supports",
        "note": "e=g*sin(theta_W) is the positron electric charge in the declared electroweak model."
      },
      {
        "sourceId": "borexino2015-electron-decay",
        "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
        "role": "method",
        "note": "The bridged record's own preparation passage, reused within its existing review extent; the bridge adds no new acquisition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Borexino author v2 pages 1-2 (abstract and introduction) and PDG Electroweak Section 10.1 page 2; the spectral fit, response model and limit construction on pages 3-5 were not re-read for this bridge.",
      "The bound is a lower limit on the mean lifetime for e -> nu_e + gamma only; it does not exclude other electron-disappearance channels, measure the electron or neutrino charge, or identify a neutrino mass or flavor. The authors state that no presently viable theory predicts such a decay.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "borexino2015-electron-inference"
    ]
  },
  {
    "id": "B-photon-scope-borexino-charge-conservation",
    "kind": "method",
    "statement": "Borexino describes electric-charge conservation as fundamental to the Standard Model as a direct consequence of Maxwell's equations and the unbroken U(1) gauge symmetry, and treats a search for e -> nu_e + gamma as an experimental test of it. PDG describes electroweak symmetry breaking down to the remaining U(1)em of QED with a massless photon. The C001 photon record declares this unbroken electromagnetic U(1) model, with a massless and electrically neutral photon; the C073 bound is interpreted within that model as a search for a channel the declared model excludes.",
    "scope": "Interpretation of the Borexino electron-decay bound (borexino2015-electron-inference) through the C001 unbroken electromagnetic U(1) photon model.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "borexino2015-electron-decay",
        "locator": "Author v2, pages 1-2: abstract and introduction, charge-conservation motivation and the searched electron-to-neutrino-plus-photon channel",
        "role": "method",
        "note": "Introduction: charge conservation tied to Maxwell's equations and unbroken U(1) gauge symmetry; tests of it as searches beyond the Standard Model."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, page 2, Equations 10.1 and 10.3-10.5: declared Higgs-doublet potential, unitary-gauge background and tree-level gauge/scalar masses",
        "role": "supports",
        "note": "Symmetry breaking down to U(1)em of QED and the tree-level massless photon."
      },
      {
        "sourceId": "borexino2015-electron-decay",
        "locator": "Author v2, page 5: correlated systematic profiles and final electron-decay channel bound",
        "role": "method",
        "note": "The bridged record's own preparation passage, reused within its existing review extent; the bridge adds no new acquisition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Borexino author v2 pages 1-2 and PDG Electroweak Section 10.1 page 2; the Tong photon-field sections behind the C001 record were not re-read for this bridge.",
      "The search tests one charge-violating channel. It is not a photon-charge or photon-mass limit, does not test gauge symmetry in general, and no model in which charge conservation fails is reviewed here.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "borexino2015-electron-inference"
    ]
  },
  {
    "id": "B-chsh-local-model-shalm2015",
    "kind": "method",
    "statement": "Shalm et al. define local realism through preexisting outcome values that depend only on events in the past light cone, note that local hidden-variable theories obey it, and require measurement choices independent of each other and of the particles. Their null hypothesis is that the measured probabilities are constrained by local realism, tested through the Clauser-Horne-type inequality P(++|ab)<=P(+0|ab')+P(0+|a'b)+P(++|a'b') with binary outcomes + and 0. The C001 record defines this local hidden-variable model class (binary local responses, setting-independent hidden variables) through its CHSH bound, and the C074 result is interpreted against that model.",
    "scope": "Interpretation of the Shalm et al. (2015) photonic Bell test (shalm2015-inference) against the C001 local hidden-variable model.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "shalm2015-bell",
        "locator": "Publisher pages 250402-1 to 250402-2: Bell's theorem, local realism and local hidden-variable theories, CHSH and Clauser-Horne forms, locality and freedom-of-choice requirements",
        "role": "method",
        "note": "Introduction: local realism, local hidden-variable theories, CHSH and Clauser-Horne forms, locality and freedom-of-choice requirements."
      },
      {
        "sourceId": "shalm2015-bell",
        "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
        "role": "method",
        "note": "Equation 1 and the stated null hypothesis of local realism."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Shalm et al. publisher pages 250402-1 to 250402-4 (introduction, Equations 1-2 and the Figure 1 caption); the supplement's martingale construction and the CHSH and Clauser-Horne source papers were not re-read for this bridge.",
      "The tested statistic is the Clauser-Horne-type count, not the CHSH correlator S, and no conversion between the two inequalities is made. Rejecting the specified local model is conditional on the timing, setting-predictability and outcome-fixation assumptions and does not establish superluminal signalling or certify a particular quantum state.",
      "A described interpretation or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "shalm2015-inference"
    ]
  },
  {
    "id": "B-entanglement-shalm2015-source-state",
    "kind": "review-finding",
    "statement": "Shalm et al. choose, for their detection efficiencies and backgrounds, a source state that is not maximally entangled, |psi>=0.961|H_A H_B>+0.276|V_A V_B>, prepared by interfering two down-conversion paths, with the idler photon sent to Alice and the signal photon to Bob. Relative to the Alice/Bob polarization factorization this pure state is not a product state, so it is entangled under the C001 definition, where pure-state separability reduces to factorization. The C074 acquisition context uses this definition when it describes the pairs as nonmaximally polarization-entangled.",
    "scope": "Definitional link between the C001 bipartite entanglement criterion and the C074 Shalm source-state description in the acquisition context.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "shalm2015-bell",
        "locator": "Publisher pages 250402-3 to 250402-5, Equations 1-2 and Figures 1-3: source, local trials, settings and detection",
        "role": "supports",
        "note": "Equation 2 and the Figure 1 caption: designed nonmaximally entangled polarization state and its distribution to Alice and Bob."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Shalm et al. publisher pages 250402-3 to 250402-4 (Figure 1 caption and Equation 2); the reported state characterization and visibility measurements were not re-read, and the Werner source of the C001 definition was not re-read for this bridge.",
      "Equation 2 is the designed target state; the realized state is mixed and imperfect, its entanglement is not separately certified here, and entanglement alone does not imply a Bell violation (the C001 Werner record gives local models for some entangled states).",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-neutral-current-cms2013-benchmark",
    "kind": "review-finding",
    "statement": "CMS takes as benchmark new massive spin-1/2 particles of fractional charge q, neutral under SU(3)C and SU(2)L and coupling only to the photon and the Z, pair produced through a modified Drell-Yan mechanism with weak isospin t3L=0, Z axial coupling gA=0 and vector coupling gV=-2q*sin^2(theta_W). These are the neutral-current couplings gV=T3-2Q*sin^2(theta_W) and gA=T3 of the C001 weak-current record evaluated for T3=0 and Q=q, so the C075 signal-response context uses that convention to define its signal.",
    "scope": "Definitional link between the C001 tree-level neutral-current coupling convention and the C075 CMS fractional-charge benchmark signal model; no cross section, efficiency or limit is recomputed.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "cms2013-fcp",
        "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
        "role": "supports",
        "note": "Sections 1-2: benchmark quantum numbers and the modified Drell-Yan couplings gA=0 and gV=-2q*sin^2(theta_W)."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, pages 1-3, Equations 10.2-10.3 and 10.6-10.7: weak vector-field charges/polarizations, charged and neutral currents and the stated quark mixing basis",
        "role": "supports",
        "note": "Equations 10.2 and 10.7: electromagnetic and neutral-current terms with gV=T3-2Q*sin^2(theta_W) and gA=T3."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: CMS author v2 printed page 1 (Sections 1-2) and PDG Electroweak Section 10.1 pages 2-3 (Equations 10.2 and 10.7); the PYTHIA implementation, the cross-section values and the cited benchmark source [5] were not checked.",
      "The coupling convention defines the benchmark's photon and Z interactions only. It does not imply that fractionally charged particles exist, assign a color charge, test confinement or make the CMS mass exclusions model independent; the quirk variant mentioned by CMS is a separate hypothesis.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-lepton-charge-unit-fractional-residual",
    "kind": "review-finding",
    "statement": "Lee et al. search for stable particles whose charge Q deviates from N*e, with N an integer including zero and e the magnitude of the charge on the electron, and define the residual drop charge Q_r=Q-N_l*e with N_l the largest integer below Q/e. The C001 lepton record fixes this unit: e>0 is the positron charge and the electron carries -e; PDG writes e=g*sin(theta_W) for the positron charge and bounds |q(e+)+q(e-)|/e below 4e-8. The C082 residual definition therefore uses the C001 charge unit as its integer reference.",
    "scope": "Definitional link between the C001 lepton charge convention and the C082 Lee modulo-one electric-charge residual; no drop measurement or abundance bound is recomputed.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "lee2002",
        "locator": "Author arXiv:hep-ex/0204003v2 pages 1 and 6-10, Tables I-III and Section IV B: sample, overlapping cuts, residual-window inconsistency and reported confidence bound",
        "role": "supports",
        "note": "Abstract and Introduction: integer charge N*e with e the magnitude of the electron charge, and the residual definition."
      },
      {
        "sourceId": "pdg2025-electroweak",
        "locator": "Section 10.1, pages 1-3: fields, electroweak interactions and minimal neutrino-mass boundary",
        "role": "supports",
        "note": "e=g*sin(theta_W) is the positron electric charge."
      },
      {
        "sourceId": "pdg2025-leptons",
        "locator": "Pages 1-2: charged-lepton and antiparticle labels, charge-conjugate muon modes and spin assignments",
        "role": "supports",
        "note": "Electron entry: bound on the sum of positron and electron charges in units of e."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read in this session: Lee et al. author arXiv:hep-ex/0204003v2 pages 1 and 10 (abstract, Introduction, the Section IV B residual paragraph and Section V A), PDG Electroweak Section 10.1 page 2 and the PDG lepton summary page 1; the published PRD pages were not re-read for this bridge.",
      "The unit convention defines what counts as integer charge. It does not motivate the search by quarks (the paper does not discuss them), test color charge or confinement, or measure the elementary charge; the PDG charge-equality bound is cited only for the equality of electron and positron charge magnitudes and plays no role in the drop analysis.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-exponential-survival-bbn-weak-normalization",
    "kind": "review-finding",
    "statement": "In the selected Pitrou 2018 network, the prefactor K of the n<->p weak rates is calibrated from free-neutron decay: at low temperature Gamma_n->p must equal the free neutron decay rate 1/tau_n, so K=1/(tau_n*lambda_0*m_e^5) replaces the parameter-based expression. The tau_n entering this definition is the mean lifetime tau=1/lambda of a constant-rate exponential survival law, as defined in the C012 survival record.",
    "scope": "Definitional input of the free-neutron decay rate into the selected homogeneous BBN weak-rate normalization; no measurement selection, uncertainty propagation or network solution is reproduced.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
        "role": "supports",
        "note": "Section III.C on PDF page 16: calibration of K from the free neutron decay rate, Equations 88-91 and footnote 11."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. Radiative, finite-mass and plasma corrections to the weak rates and the numerical lambda_0 were not replayed.",
      "The bridge records which lifetime quantity the rate definition uses; it does not identify which neutron-lifetime experiments enter the adopted 879.5 s average.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-ucn-storage-model-bbn-lifetime-input",
    "kind": "method",
    "statement": "Pitrou 2018 distinguishes beam experiments, which detect dying neutrons, from bottle experiments, which count neutrons surviving storage, and adopts tau_n=879.5+/-0.8 s, a post-2000 average (Serebrov et al. 2017) described as extremely close to the bottle average. It adds that, if the beam-bottle difference reflected an undetected dark-sector decay, the surviving-neutron results would be the important ones for BBN. In the C012 storage-loss model, such a storage rate identifies the free-neutron lifetime only after upscattering, depolarization and escape losses are corrected.",
    "scope": "Interpretation of the selected historical BBN neutron-lifetime input relative to the storage-measurement definition; no lifetime from the 2017-2022 UCNtau campaigns is used.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
        "role": "method",
        "note": "Section IV.C neutron-lifetime paragraph on PDF page 26: beam versus bottle methods, dark-sector caveat and adopted post-2000 average."
      },
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, page 52, Appendix C.2 and Appendix D, Table X: atomic-mass conversion and adopted cosmological and neutron-lifetime inputs",
        "role": "method",
        "note": "Appendix D: tau_n=879.5(+/-0.8) s from Serebrov et al. (2017, Fig. 22), post-2000 experiments only; Table X."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. The Serebrov average, its experiment list and the Czarnecki bottle average were not read, so which storage or beam results enter 879.5 s is not established here.",
      "The UCNtau lifetimes in C012 (877.75-877.96 s) postdate or differ from the adopted input and are not substituted; the dark-decay remark is the source's conditional possibility, not an admitted decay channel.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "pitrou2018-network"
    ]
  },
  {
    "id": "B-beam-decay-ratio-bbn-lifetime-input",
    "kind": "method",
    "statement": "Pitrou 2018 names beam experiments as detecting dying neutrons through their decay rate and notes that beam and bottle results differ slightly, most probably through systematics but possibly through an undetected dark-sector decay, in which case the bottle results would matter for BBN. The C012 beam definition obtains tau from detected proton-producing decays relative to a monitored neutron density, R_p=epsilon_p*N_n/tau. The interpretation of the adopted post-2000 input therefore depends on what the beam definition counts.",
    "scope": "Interpretation boundary of the selected historical BBN neutron-lifetime input relative to the beam-count definition; the beam lifetimes in C012 (886.3 and 887.7 s) are neither used nor compared.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
        "role": "method",
        "note": "Section IV.C neutron-lifetime paragraph on PDF page 26: beam/bottle distinction and dark-sector caveat."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. The beam-bottle literature the source cites (Young et al. 2014; Fornal and Grinstein 2018) was not read; no beam correction or dark-decay branching fraction is evaluated.",
      "The C012 beam relation is an ideal corrected count model whose decay-channel assumption must itself be tested before a total lifetime is inferred.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "pitrou2018-network"
    ]
  },
  {
    "id": "B-fermi-coupling-bbn-weak-rates",
    "kind": "review-finding",
    "statement": "In the selected Pitrou 2018 network the weak interaction rates are proportional to a factor K that is proportional to G_W^2=G_F^2 cos^2(theta_C), with G_F the Fermi constant and theta_C a CKM angle, and to 1+3g_A^2 with g_A the nucleon axial coupling. G_F is the low-energy contact coupling of charged-current weak exchange defined in the C001 record (tree level G_F/sqrt(2)=g^2/(8 M_W^2)). Because of parameter uncertainties the source calibrates K from free-neutron decay rather than computing it from G_F, cos(theta_C) and g_A.",
    "scope": "Definitional use of the low-energy charged-current Fermi coupling in the selected BBN weak-rate expressions; radiative, finite-mass and plasma corrections are not reproduced.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
        "role": "supports",
        "note": "Section III.C on PDF page 16: K proportional to G_F^2 cos^2(theta_C)(1+3g_A^2), then calibrated from free neutron decay."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. The Section III.A Fermi-theory matrix elements (Equation 73) and Appendix B couplings lie outside the cited locator and are not claimed.",
      "The C001 tree relation is a parameter identity, not a measurement used by the source, and the Table X G_F value is a PDG input rather than the MuLan record.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-capture-binding-bbn-deuterium-bottleneck",
    "kind": "review-finding",
    "statement": "Pitrou 2018 states that while T>~0.078 MeV deuterium dissociation is too efficient for deuterium synthesis: although the deuterium binding energy is about 2.2 MeV, the high-energy tail of the photon Bose-Einstein distribution destroys deuterium because the baryon-to-photon ratio is below 10^-9. The network contains the 1H(n,gamma)2H radiative capture, with its cross section taken from effective-field-theory calculations. The binding energy invoked is that of the capture channel which the C001 record defines as photon energy plus the leading deuteron recoil E_gamma^2/(2 m_d c^2).",
    "scope": "Definitional use of the deuteron binding energy of the n+p->d+gamma channel in the selected network's bottleneck description; the eV-level capture values are neither used nor tested by the BBN source.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 6-7 and 10, Sections I.C-II.D, Equations 34-43; pages 16-17, Sections III.C-D, Equations 89-98: expansion, weak rates and freeze-out",
        "role": "supports",
        "note": "Section I.C item 4 on PDF page 6: deuterium binding energy and photodissociation bottleneck."
      },
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 24-29, Sections IV.A-C and V.B, Equations 124 and 128-142, Table III and Figure 22: network, deuterium bottleneck, mass-seven flow and decay bookkeeping",
        "role": "supports",
        "note": "Section IV.C on PDF page 26: 1H(n,gamma)2H cross section from effective-field-theory calculations as a Y_P uncertainty source."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. The reverse-rate and Q-value machinery and the cited effective-field-theory capture papers (Ando et al. 2006) were not reconstructed or read.",
      "Sharing the binding-energy quantity does not make the laboratory capture measurement an input of the BBN calculation.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-coulomb-barrier-bbn-charged-rates",
    "kind": "review-finding",
    "statement": "Pitrou 2018 defines the thermonuclear rate as a Maxwell-Boltzmann average of the cross section and states that, for reactions between charged particles at kinetic energies below the Coulomb barrier, the energy dependence is dominated by tunnelling through the Coulomb plus centrifugal barrier; it introduces the Sommerfeld parameter eta=Z1 Z2 e^2/(hbar v) and the S-factor through sigma(E)=S(E) exp(-2 pi eta)/E. The barrier is the equal-sign Coulomb repulsion of the C001 pair-potential record, generalized to nuclear charge numbers and written in Gaussian e^2 normalization rather than the rationalized e^2/(4 pi r).",
    "scope": "Definitional use of the repulsive Coulomb interaction in the charged-particle rate parametrization of the selected network; nuclear radii, resonances and rate evaluations are separate inputs.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "arXiv 1801.08023v2 (dated June 28, 2018), PDF page 24, Section IV.A, Equations 123-127: Maxwell-Boltzmann thermonuclear rate, Coulomb-plus-centrifugal barrier penetration, Sommerfeld parameter and astrophysical S-factor",
        "role": "supports",
        "note": "Section IV.A on PDF page 24 of arXiv v2: Coulomb-barrier tunnelling, Equations 125-127."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Section IV.A on PDF page 24 of arXiv 1801.08023v2 was read for this dependency (the recorded IAP host refused connections); the cited Coulomb-function and S-factor evaluations and the rate tables were not read or replayed.",
      "The C001 record is a leading nonrelativistic unit-charge pair potential; the nuclear application adds charge numbers, finite nuclear size and strong-interaction cross sections that the record does not supply.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-seager-recombination-bbn-boundary",
    "kind": "review-finding",
    "statement": "The C035 boundary separates primordial nuclear synthesis from later atomic recombination of existing nuclei and names a selected recombination calculation as a separate electron-population model. Seager, Sasselov and Scott describe the recombination epoch as the time when the universe became cool enough for protons to capture electrons and form neutral hydrogen, and they take the primordial helium abundance Y_P=0.24 by mass as an input. The boundary's atomic-recombination member is therefore defined with this C001 recombination context.",
    "scope": "Definition of the atomic-recombination side of the selected BBN/recombination boundary by the historical Seager multilevel calculation; no cosmology update, helium-recombination result or ionization history is admitted.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "seager1999-recombination",
        "locator": "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei",
        "role": "supports",
        "note": "Re-read the Section 2.1 opening on page L1 and the Section 3 parameter paragraph on page L4."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited L1 and L4 passages were re-read; the companion Paper I level-by-level calculation, the RECFAST code and the helium-specific results were not read or run.",
      "Recombination of pre-existing nuclei is an electron-population model and not a continuation of nuclear synthesis; the boundary keeps the two processes distinct.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-bbn-helium-fraction-seager-input",
    "kind": "review-finding",
    "statement": "Pitrou 2018 defines the (pseudo-)mass fraction X_i=A_i n_i/n_b and, for 4He, Y_P=X_4He; the C035 BBN source scope organizes predicted and inferred primordial abundances in these terms. Seager, Sasselov and Scott take the primordial He abundance to be Y_P=0.24 by mass, citing Schramm and Turner (1998), as an input of their recombination calculation alongside the present CMB temperature. The C001 recombination context therefore uses a primordial helium mass fraction defined as in the BBN scope.",
    "scope": "Definitional use of the primordial helium mass fraction as a fixed composition input of the historical recombination calculation; no numerical BBN result (0.24709) or emission-line estimate (0.2449) is substituted.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pitrou2018-bbn",
        "locator": "Author June 25 2018 PDF, pages 2-5, Introduction and Section I.A, Equations 1-6: abundance definitions, observed inputs and lithium discrepancy",
        "role": "supports",
        "note": "Page 3 (arXiv v2), Equations 1-2: mass fraction X_i and Y_P=X_4He."
      },
      {
        "sourceId": "seager1999-recombination",
        "locator": "Published pages L1-L2, Introduction and Section 2.1; L3-L4, Section 3: atomic levels, electron fractions and pre-existing hydrogen/helium nuclei",
        "role": "supports",
        "note": "Page L4, Section 3 parameter list: Y_P=0.24 by mass from Schramm & Turner 1998."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pitrou was re-read in arXiv 1801.08023v2 (dated June 28, 2018) because the recorded IAP host refused connections; its pagination, section and equation numbering matched the existing 'Author June 25 2018 PDF' locators. Schramm and Turner (1998), the origin of the adopted 0.24, was not read.",
      "A shared abundance definition does not make the recombination model a consequence of the selected BBN calculation; the Seager context's own limitation that its inputs are not the Pitrou composition remains.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-maxwell-modes-ideal-plate-casimir",
    "kind": "review-finding",
    "statement": "Casimir obtains the ideal-plate result by comparing, for two plate positions in a perfectly conducting cubic cavity, the divergent sums of hbar*omega/2 over the cavity resonance frequencies; their difference, regulated by a cutoff for very short waves, is interpreted as the plate interaction, giving the force per area pi^2 hbar c/(240 a^4). Each (k_x,k_y,k_z) carries two standing waves unless one component is zero. In the C001 free Maxwell definition the gauge field has two physical degrees of freedom identified with the photon's two polarization states, which is the mode count the cavity sum uses.",
    "scope": "Definitional use of the source-free electromagnetic field and its two transverse polarizations in the ideal conducting-plate Casimir calculation; real-material response, temperature and measured forces are excluded.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "casimir1948",
        "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
        "role": "supports",
        "note": "Re-read the three-page note from the recorded KNAW PDF."
      },
      {
        "sourceId": "tong-qft-free-maxwell",
        "locator": "Sections 6.1 and 6.1.1: source-free Maxwell action, gauge equivalence, Gauss constraint and two radiation-gauge degrees of freedom",
        "role": "supports",
        "note": "Section 6.1.1: two degrees of freedom identified with the two photon polarization states."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Casimir's note and Tong Sections 6.1-6.1.1 were re-read; the Euler-Maclaurin evaluation, the cutoff-function choice and Casimir's Colloque derivation were not replayed or read.",
      "Perfect-conductor boundaries need their own constraint solution beyond the unbounded free field, and the zero-point mode sum is a calculational route, not a measurement of absolute vacuum energy; Jaffe's external-source formulation remains a separate reading.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-charged-matter-coupling-casimir-material-model",
    "kind": "review-finding",
    "statement": "Jaffe argues that interactions enter when metallic plates are idealized as perfect conductors imposing boundary conditions on the electromagnetic field. In a Drude description the plasma frequency and skin depth depend on alpha and vanish as alpha->0, so at fixed separation the Casimir force disappears, and the standard result is the alpha->infinity limit of a material-dependent result. The C028 material model therefore uses the charged-matter electromagnetic coupling of the C001 Maxwell-Dirac regime, in which the charge e couples the field to charged matter.",
    "scope": "Definitional use of electromagnetic coupling to charged matter in the selected material-response Casimir formulation; Lifshitz, Drude and external-source calculations are named but not reproduced.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "jaffe2005",
        "locator": "Sections II-III: material response, coupling limits and external-source calculation",
        "role": "supports",
        "note": "Read in arXiv hep-th/0503158v1, whose unnumbered sections on the fine-structure-constant dependence and on the Casimir effect without the vacuum correspond to published Sections II-III."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Jaffe was read in the arXiv author version hep-th/0503158v1 and not compared with the published layout; the Lifshitz theory, Drude treatments and the Schwinger-DeRaad-Milton derivation it cites were not read.",
      "The C001 regime is a Maxwell-Dirac field model; the Drude plasma description of conduction electrons is an effective material model that the regime does not derive.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-polarizability-casimir-polder-limits",
    "kind": "review-finding",
    "statement": "Casimir restates the Casimir-Polder results for an atom or molecule with static polarizability a: in the large-distance limit the interaction with a perfectly conducting plate is -3 hbar c a/(8 pi R^4) and that between two particles is -23 hbar c a1 a2/(4 pi R^7). Jaffe identifies a_j as the static polarizability of the jth molecule, p=aE. The C028 limits therefore use the induced electronic dipole response defined in the C001 record (delta p_i=alpha_ij E_local,j at fixed state), here in Gaussian volume normalization for isotropic ground-state particles.",
    "scope": "Definitional use of the static induced-dipole polarizability in the selected retarded dispersion limits; the nonretarded C6, frequency-dependent polarizabilities and anisotropic response are outside this relation.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "casimir1948",
        "locator": "Pages 793-795: cavity comparison, cutoff, mode sum and ideal-plate force",
        "role": "supports",
        "note": "Page 793 opening: Polder-Casimir limits written with static polarizabilities."
      },
      {
        "sourceId": "jaffe2005",
        "locator": "Sections II-III: material response, coupling limits and external-source calculation",
        "role": "supports",
        "note": "Section on the Casimir effect without the vacuum (published III): a_j static polarizability, p=aE, fourth-order perturbation theory."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The Casimir-Polder 1948 paper itself was not re-read (the recorded MIT copy is an image-only scan); the limits are taken from Casimir's 1948 restatement and Jaffe's summary.",
      "Gaussian volume polarizability and the SI tensor alpha_ij differ by convention, and a static isotropic limit does not identify optical-frequency or orientational response.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hyperfine-coupling-litvinov-ec-states",
    "kind": "review-finding",
    "statement": "Herd and colleagues define hyperfine levels through nuclear spin I, total electronic angular momentum J and total atomic angular momentum F, with K=F(F+1)-I(I+1)-J(J+1) and a magnetic-dipole constant A. Litvinov and colleagues state that a 140Pr nucleus with spin I_i=1 and one bound K-electron of spin 1/2 has hyperfine states F_i=1/2 or 3/2, that only F_i=1/2 contributes to allowed EC into the F_f=1/2 final state, and that a positive nuclear moment makes F_i=1/2 the lower level. This interpretation uses the C061 coupled-angular-momentum convention for a hydrogenlike ion.",
    "scope": "Definitional use of the I-J-F hyperfine coupling convention in the selected stored-ion EC interpretation; no hyperfine constant, splitting or state population is measured in the Litvinov experiment.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "herd2021-hyperfine-formalism",
        "locator": "Publisher-hosted accepted manuscript pages 6-7 (PDF pages 7-8 including CHORUS cover), Section III, Equations 2-3 and following paragraph: angular momenta, first-order magnetic-dipole/electric-quadrupole parametrization and absence of the first-order quadrupole term for J=1/2",
        "role": "supports",
        "note": "Section III, Equations 2-3 and the following paragraph (PDF pages 7-8)."
      },
      {
        "sourceId": "litvinov2007-pr-ec",
        "locator": "Author manuscript arXiv:0711.3709v1 pages 3-4, Figure 3 and hyperfine-state discussion: nuclear/lepton angular momentum, inferred moment sign, relaxation assumption and conditional 3/2 statistical factor",
        "role": "supports",
        "note": "Hyperfine-state discussion on pages 3-4 and Figure 3."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Herd Section III and the Litvinov hyperfine-state discussion were re-read; the EC theory papers cited by Litvinov (Refs. 34-35) and the 140Pr moment estimate from neighbouring nuclei were not read.",
      "No Cs133 A, B, C value or Rb/Cs clock frequency is transferred to 140Pr58+, and the lower-F assignment remains the source's conditional inference.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-nuclear-magneton-marion-hyperfine-sensitivity",
    "kind": "method",
    "statement": "Marion and colleagues approximate an alkali hyperfine transition frequency as proportional to alpha^2 (mu/mu_N)(m_e/m_p) R_inf c F_rel(Z alpha), with mu the nuclear magnetic moment and mu_N the nuclear magneton, and note that in the Schmidt model the 87Rb and 133Cs moments depend only on g_p, while cautioning that this model is oversimplified. Mooser and colleagues define g_p as the dimensionless measure of the proton moment in units of the nuclear magneton. The Marion context's sensitivity interpretation therefore depends on the C025 normalization mu_N=e hbar/(2 m_p), mu_p/mu_N=g_p/2.",
    "scope": "Interpretive sensitivity model attached to the Marion Rb/Cs fountain comparison; the 2002 frequency result, any fundamental-constant drift bound and any nuclear-moment value are excluded.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "marion2003-rb-cs-fountains",
        "locator": "Published pages 150801-3 to 150801-4, Equations 4-6 and following discussion: inherited electronic/nuclear sensitivity models, oversimplified Schmidt model and inseparability of single-parameter variation attribution; drift results are outside admission",
        "role": "method",
        "note": "Re-read in arXiv physics/0212112v1 pages 3-4 (Equations 4-6 and the Schmidt-model paragraph); the recorded APS harvest URL did not return article text."
      },
      {
        "sourceId": "mooser2014",
        "locator": "arXiv:1406.4888v1 pages 1-3 and Equation 1: author identity, nuclear-magneton convention, spin-to-cyclotron ratio and free cyclotron frequency",
        "role": "supports",
        "note": "Page 3: g_p as the proton moment in nuclear-magneton units."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Marion was read in the arXiv author version physics/0212112v1, not the published PRL pages; the inherited sensitivity calculations (Refs. 11, 22, 27) were not read and no Schmidt moment is evaluated.",
      "A single Rb/Cs ratio does not determine mu/mu_N, g_p or alpha separately, and the source states that the Schmidt model does not agree accurately with the actual moments.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "marion2003-rb-cs-fountains"
    ]
  },
  {
    "id": "B-natural-width-mossbauer-resonance",
    "kind": "review-finding",
    "statement": "Mossbauer's lecture states that a free nucleus emitting a gamma quantum takes up recoil energy E^2/(2Mc^2), shifting emission below and absorption above the transition energy, and that lines between an excited and the ground state have a natural width connected with the excited-state lifetime by the Heisenberg uncertainty principle; because recoil shifts are very large compared with these natural widths, free-nucleus resonance absorption escapes detection. The C068 zero-phonon definition is stated against this width, the energy width of an isolated exponentially decaying level defined in the C001 convention.",
    "scope": "Definitional use of the natural-width/lifetime relation for isolated nuclear levels in the selected Mossbauer resonance account; fitted transmission linewidths, broadening mechanisms and W/Z pole conventions are excluded.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "mossbauer1961-nobel-lecture",
        "locator": "Nobel lecture printed pages 584-587, Figure 1, Equation 1 and Figure 2: nuclear resonance, free-nucleus recoil, natural width and line-overlap distinction",
        "role": "supports",
        "note": "Re-read printed pages 584-587 from the Nobel Prize PDF."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only lecture pages 584-587 were re-read for this dependency; the PDG resonance passages behind the C001 convention were not re-read, and no Fe-57 or Ir-191 lifetime or natural width is computed.",
      "The C001 convention was reviewed for particle resonances; here only its narrow isolated-level relation is used, not a pole-mass or running-width convention.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-diffraction-order-amorphous-mossbauer-absorber",
    "kind": "method",
    "statement": "Dubiel and colleagues index the reflections of crystalline hydrated Fe-gluconate to the monoclinic I2 space group, but report that the dried sample shows no signs of that crystalline order, only a very broad maximum near 20 degrees 2theta (d about 4.6 angstrom) and a smaller one near 37 degrees. The C068 record interprets this absorber as not reported to possess perfect periodic crystal order. That interpretation uses the C022 boundary, which specifies order through diffraction and correlations and treats periodic Bravais-lattice translation as one possible description, so finite-sensitivity XRD amorphousness is not absence of local order.",
    "scope": "Interpretation of the selected XRD classification of the Fe-57 absorber; no structural refinement of the amorphous sample, local coordination or crystalline-fraction bound is inferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "dubiel2020-amorphous-fe-gluconate",
        "locator": "Author arXiv 1909.03008v2 pages 3-4, Section 2.1 and Figure 1: preparation and X-ray distinction of crystalline hydrated and amorphous dried Fe-gluconate",
        "role": "method",
        "note": "Section 2.1 on PDF page 4: XRD comparison of crystalline and amorphous specimens."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Dubiel Section 2.1 was re-read; Figure 1 was not digitized, and the Shechtman and Bernard passages behind the C022 boundary were not re-read in this session.",
      "The C022 boundary was built from icosahedral Al-Mn and hard-disk evidence; it supplies the ordering vocabulary, not evidence about Fe-gluconate structure.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "dubiel2020-fe-gluconate"
    ]
  },
  {
    "id": "B-coulomb-repulsion-benzene-vb-integrals",
    "kind": "review-finding",
    "statement": "Pauling and Wheland treat benzene as a six-electron system with one pure p-orbit per carbon, express energies through a Coulomb integral Q and nearest-neighbour single exchange integrals alpha (rewritten J_ex in C045), and justify their orbital and bond choice because each single exchange integral between a pure p-orbit and an in-plane orbit is positive, arising from the e^2/r_ij term in the Hamiltonian only. The resonance-energy comparison is therefore defined with a Hamiltonian that contains the equal-sign Coulomb repulsion of the C001 pair-potential record, written as e^2/r rather than the rationalized e^2/(4 pi r).",
    "scope": "Definitional use of the electron-electron Coulomb term in the selected six-electron valence-bond matrix elements; Q and J_ex remain parameters and are not computed from the pair potential.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "pauling1933-resonance",
        "locator": "Published pages 363-364: six active perpendicular p-electron restriction, omitted common contributions, equal nearest-neighbor exchange approximation and Figure 1 canonical functions",
        "role": "supports",
        "note": "Re-read scanned pages 362-364: six-electron setup, e^2/r_ij exchange-sign argument and definitions of alpha and Q."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Pages 362-364 were re-read from the Caltech scan; the Slater (1931) and Pauling (1933) matrix-element rule papers and the thermochemical calibration of alpha were not read.",
      "The 'Coulomb integral' Q is a diagonal Hamiltonian matrix element, not the pair potential itself, and J_ex is distinct from the fine-structure constant.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-debye-huckel-screening-colloid-pair-model",
    "kind": "review-finding",
    "statement": "Crocker and Grier state that dissociated surface groups give a screened electrostatic interaction and that, for separations large enough for the Debye-Huckel approximation, DLVO theory gives U(x)=(Z*^2 e^2/epsilon)[e^(kappa a)/(1+kappa a)]^2 e^(-kappa x)/x, with kappa^-1 the solution's Debye-Huckel screening length set by the counterion concentration. The C059 model thus takes its screening parameter and validity regime from the C001 equilibrium dilute-electrolyte model, in which kappa^2 depends on ion densities and valences, solvent dielectric constant and kT; its finite-sphere prefactor and renormalized Z* are colloid-specific.",
    "scope": "Definitional use of the Debye-Huckel screening parameter in the selected isolated-pair repulsion model; van der Waals, hydrodynamic and near-contact terms remain excluded as in the source.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "crocker1994-colloid-pair",
        "locator": "Published page 352, introductory isolated-pair scope and Equation 1: screened Coulomb potential, effective charge, far-separation Debye-Huckel regime and omitted contributions",
        "role": "supports",
        "note": "Re-read scanned page 352, including Equation 1 and the omitted-contribution sentence."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Page 352 was re-read from the scanned PDF; the DLVO monographs and the Debye-Huckel 1923 passages behind the C001 record were not re-read in this session.",
      "The C001 point-ion mean potential and the finite-sphere pair energy rest on different particle assumptions and are not interchanged.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-debye-huckel-length-colloid-electrolyte-reading",
    "kind": "method",
    "statement": "Crocker and Grier fit their measured pair potential to Eq. (1), obtaining Z*=1991+/-150 electronic charges and a Debye-Huckel screening length kappa^-1=161+/-10 nm, which they describe as considerably smaller than the maximum screening length of 960 nm in pure water and consistent with a 3.6x10^-6 M concentration of a 1:1 electrolyte. Converting a fitted range into an electrolyte concentration uses the C001 dilute-electrolyte relation in which kappa depends on ion densities, valences, dielectric constant and temperature.",
    "scope": "Interpretation of the fitted screening parameter of the selected isolated-pair experiment; the equivalent concentration is an inference, not an independent ionic assay.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "crocker1994-colloid-pair",
        "locator": "Published pages 354-355, Figure 2 and charge/screening discussion: source fit, position-error limitation and resolved long-range-attraction bound",
        "role": "method",
        "note": "Re-read scanned page 354 (fit values and electrolyte comparison); page 355 was not re-read."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only scanned page 354 was re-read; page 355 and the ion-exchange/contamination controls were not, and the conversion constants behind the 960 nm and 3.6e-6 M figures are not printed in the read passage.",
      "The equivalent-concentration statement assumes the dilute equilibrium screening model and a 1:1 electrolyte; it is not a separately acquired concentration.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "crocker1994-colloid-pair"
    ]
  },
  {
    "id": "B-phase-stability-colloid-nucleation-boundary",
    "kind": "review-finding",
    "statement": "Gasser and colleagues describe homogeneous nucleation in a liquid cooled below its freezing point as a competition between a bulk free-energy decrease favouring growth and a surface free-energy increase favouring shrinkage, so that small crystallites usually shrink and growth becomes favourable only beyond a critical size (Equation 1). The C059 boundary's separation of phase preference (Delta mu>0) from a kinetic barrier to forming the crystal therefore uses the C022 distinction between local resistance to continuous perturbations, stability against formation of a different phase and kinetic persistence without global thermodynamic stability.",
    "scope": "Definitional use of the phase-stability distinction in the selected colloid nucleation/stability boundary; no equilibrium phase boundary, nucleation rate or hard-sphere universality is inferred.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "gasser2001-colloid-nucleation",
        "locator": "Published page 258, Equation 1: spherical crystallite surface-versus-volume free-energy competition and critical radius, distinct from a colloid pair-coagulation barrier",
        "role": "supports",
        "note": "Re-read page 258 introduction and Equation 1."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Gasser page 258 was re-read; the Gibbs 1878 passages underlying the C022 record could not be re-read because the recorded URL now returns a 404 page.",
      "The post-shear sample is not shown to be equilibrated before nucleation, and the spherical-crystallite expression is a declared model rather than a measured sharp interface.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-polarization-piezoelectric-tensor",
    "kind": "review-finding",
    "statement": "De Jong and colleagues describe piezoelectricity as a reversible process in which an electric dipole moment appears in some materials when a stress is applied, and define the isothermal piezoelectric stress constants as derivatives of the electric displacement field with respect to strain at fixed field and temperature, equivalently minus stress derivatives with respect to the field. The C060 convention, with SI units C/m^2, therefore uses the macroscopic polarization and linear-dielectric concepts of the C001 dielectric boundary (polarization as dipole moment per unit volume in C/m^2).",
    "scope": "Definitional use of macroscopic electric polarization/displacement in the selected bulk linear piezoelectric convention; dilute independent-dipole formulas and a molecular origin of crystal polarization are not implied.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "dejong2015-piezoelectric-tensors",
        "locator": "Published pages 2-3, Background and Summary and Definitions and computational settings, Equation 1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
        "role": "supports",
        "note": "Background and Summary on published page 2: direct effect and Equation 1 definitions."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only de Jong pages 2 and 4-5 were re-read; the DFPT polarization calculations and the polarization theory of crystalline solids the source cites were not read.",
      "The C001 dilute-dipole relation chi_e=n*alpha/epsilon0 does not apply to dense crystals; only the shared macroscopic quantity is used.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-crystal-symmetry-piezoelectric-constraints",
    "kind": "review-finding",
    "statement": "De Jong and colleagues state that in principle all materials with a finite bandgap that lack inversion symmetry can be piezoelectric, and that certain classes of point groups constrain the tensor by setting components identically to zero or equal to each other. Ogi and colleagues note that alpha-quartz, with 32-point-group symmetry, has two independent piezoelectric coefficients e_ij. The C060 convention thus uses the crystallographic point-group symmetry of an ordered specimen, the diffraction-specified spatial-order and symmetry description of the C022 boundary.",
    "scope": "Definitional use of crystallographic point-group symmetry to constrain piezoelectric tensor components; the icosahedral Al-Mn and hard-disk evidence behind the C022 record supply no piezoelectric data.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "dejong2015-piezoelectric-tensors",
        "locator": "Published pages 2-3, Background and Summary and Definitions and computational settings, Equation 1: isothermal proper piezoelectric stress/strain derivatives, units and tensor-to-matrix shear conventions",
        "role": "supports",
        "note": "Published page 2: lack of inversion symmetry as the condition for possible piezoelectricity."
      },
      {
        "sourceId": "dejong2015-piezoelectric-tensors",
        "locator": "Published pages 4-5, Figures 2-3 and Workflow symmetry discussion: component constraints, symmetry-allowed response and non-piezoelectric cubic cases; no dataset replay",
        "role": "supports",
        "note": "Published page 4: point-group constraints on tensor components."
      },
      {
        "sourceId": "ogi2006-quartz-piezoelectric",
        "locator": "Published pages 053511-1 to 053511-3, Sections I-III, Equations 1-4 and Table I: quartz point group 32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
        "role": "supports",
        "note": "Page 053511-1: 32-point-group symmetry and two independent e_ij."
      }
    ],
    "checkIds": [],
    "limitations": [
      "de Jong pages 2 and 4-5 and Ogi pages 053511-1 to 053511-2 were re-read; the point-group tables of de Jong Figures 2-3 were not transcribed, and the Shechtman and Bernard passages behind the C022 record were not re-read.",
      "Symmetry allows or forbids tensor components; it does not by itself establish a nonzero coefficient, a spontaneous polarization or switching.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-dielectric-constants-quartz-piezoelectric-inversion",
    "kind": "method",
    "statement": "Ogi and colleagues state that all coefficients contribute to the free-vibration resonance frequencies but that e_ij and epsilon_ij^S cannot be determined separately because their combinations affect the mechanical vibrations; they therefore adopt averaged literature values epsilon11S/epsilon0=4.424 and epsilon33S/epsilon0=4.632, noting that low-frequency capacitance determinations agree. The reported e11 and e14 are thus conditional on a supplied linear dielectric permittivity relative to epsilon0, the constitutive concept of the C001 dielectric boundary generalized to an anisotropic clamped tensor.",
    "scope": "Interpretation of the selected quartz piezoelectric inversion through its supplied dielectric input; no new permittivity measurement or uncertainty propagation is made.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "ogi2006-quartz-piezoelectric",
        "locator": "Published pages 053511-1 to 053511-3, Sections I-III, Equations 1-4 and Table I: quartz point group 32, specimen preparation, inherited dielectric constants, vacuum resonance acquisition and mode identification",
        "role": "method",
        "note": "Re-read pages 053511-1 to 053511-2: point group 32, Equation 3 permittivity matrix and adopted dielectric constants."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Ogi pages 053511-1 to 053511-2 were re-read; the Bechmann, James and Kushibiki dielectric sources were not read, and the sensitivity of e11 and e14 to the adopted permittivities was not evaluated.",
      "The C001 record is isotropic and quasistatic; the quartz values are clamped anisotropic constants, so only the constitutive concept is shared.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "ogi2006-quartz-piezoelectric"
    ]
  },
  {
    "id": "B-hanssen-reflectance-em-material-evidence",
    "kind": "review-finding",
    "statement": "Hanssen's integrating-sphere system measures transmittance and reflectance of window materials in the same geometry and derives absorptance by subtraction; Section 6 reports Si, ZnSe, KRS-5 and MgF2 windows and the reflectance of an Au electroplated mirror. The C001 electromagnetic-material evidence scope summarizes specimen-specific infrared reflectance and transmittance for window materials and an Au mirror; its reflectance clause is organized from the C032 specular-response record of this preparation.",
    "scope": "Topic-scope organization of the existing Hanssen reflectance finding within the C001 electromagnetic material evidence; no spectrum digitization, model fit or independent replication.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "hanssen2001",
        "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
        "role": "supports",
        "note": "Re-read from the repository copy references/canonical/data/hanssen-2001.pdf."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Hanssen Section 6 was re-read from the repository PDF; Figures 6-8 were not digitized and the Section 5 uncertainty analysis was not re-read for this relation.",
      "Both records reuse one preparation (hanssen2001); the link is organization of the same finding, not independent confirmation or cross-scale formation evidence.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hanssen-transmittance-em-material-evidence",
    "kind": "review-finding",
    "statement": "Hanssen characterizes four common infrared window materials, Si (0.5 mm), ZnSe (3 mm), KRS-5 (5 mm) and MgF2 (5 mm), plotting transmittance, reflectance and absorptance over 2-18 micrometres (1-18 for Si), with transmittance between 0.55 and 0.95 in their nonabsorbing regions. The C001 electromagnetic-material evidence scope summarizes specimen-specific infrared transmittance for window materials; that clause is organized from the C032 material-transmission record of this preparation.",
    "scope": "Topic-scope organization of the existing Hanssen transmittance finding within the C001 electromagnetic material evidence; no spectrum digitization, optical-constant fit or independent replication.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "hanssen2001",
        "locator": "Section 6, pp. 3201-3203, Figures 6-8: results and limitations",
        "role": "supports",
        "note": "Re-read from the repository copy references/canonical/data/hanssen-2001.pdf."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Hanssen Section 6 was re-read from the repository PDF; Figures 6-7 were not digitized and the handbook n,k comparison was not reproduced.",
      "Transmittance and reflectance share one geometry and the absorptance is their balance; the link does not count them as independent experiments.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-polarization-response-optical-permittivity",
    "kind": "review-finding",
    "statement": "Likharev starts Section 7.2 from the polarization P(t)=n p(t) of a dilute non-polar medium with non-interacting elementary dipoles, writes it as a causal integral over past fields with a temporal Green's function, and keeps the Fourier analogue P_omega=chi_e(omega) epsilon0 E_omega of the static linear relation P=chi_e epsilon0 E, defining epsilon(omega)=epsilon0+P_omega/E_omega. The propagation model's k(omega)=omega sqrt(epsilon(omega) mu(omega)) thus uses the C001 coarse-grained polarization and linear constitutive concepts, extended to frequency dependence.",
    "scope": "Definitional use of linear polarization response in the frequency-dependent permittivity of the selected homogeneous optical-propagation model; Lorentz-oscillator parameters and specific material spectra are excluded.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "likharev2022-wave-propagation",
        "locator": "Author instructional Section 7.2, Equations 7.21-7.27 and adjacent text: causal linear polarization response and frequency-dependent absolute permittivity",
        "role": "supports",
        "note": "Re-read Section 7.2 text and Equations 7.21-7.27 from the LibreTexts page."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Section 7.2 through Equation 7.29 was re-read; Section 3.3 itself (behind the C001 record) and the Lorentz-oscillator passages were not re-read for this relation.",
      "The independent-dipole start is a dilute-medium illustration; Likharev notes that epsilon(omega) may be introduced for any linearly related variables, so dense-medium local fields remain unspecified.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-london-r6-water-dimer-led",
    "kind": "method",
    "statement": "Altun, Neese and Bistoni report that the remaining LED correlation term, London dispersion, is always attractive and decays as r^-6 at long range in distance scans of water-dimer Conf1, and that the LED London dispersion consists of a doubles part decaying as r^-6 and a negligible singles part decaying as r^-3. This identification of the LED term as London dispersion uses the nonretarded ground-state dispersion law U=-C6/R^6 that the C028 record defines for separated neutral atoms.",
    "scope": "Interpretation of the LED London-dispersion component of the selected isolated water-dimer calculation by its long-range power law; no C6, retarded R^-7 regime or unique dispersion energy is inferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "altun2018-water-dimer",
        "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
        "role": "method",
        "note": "Re-read pages 925-926: Figure 4 discussion, r^-6 London-dispersion decay and singles/doubles composition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Altun pages 921-926 were re-read; Figure 4 data were not digitized and no fitted exponent or C6 coefficient is reported or reproduced.",
      "The C028 law is for isotropic lowest-state atoms; water monomers are anisotropic and the LED partition is method-dependent, as the existing water-dimer record notes.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "altun2018-water-dimer"
    ]
  },
  {
    "id": "B-permanent-dipole-water-dimer-electrostatics",
    "kind": "method",
    "statement": "In LED distance scans of water-dimer Conf1, Altun and colleagues find that at long range the only significant term is the electrostatic energy, with a slow polynomial decay they consider unsurprising given water's strong dipole; at short range the repulsive electronic preparation nearly cancels electrostatics at equilibrium, and the attractive exchange term (-3.76 kcal/mol) is a fundamental stabilizing component. The C065 statement that the model retains contributions beyond a bare permanent-dipole pair term is made against the C001 fixed point-dipole interaction, proportional to r^-3.",
    "scope": "Interpretation of the long-range LED electrostatic term and of the contributions beyond it in the selected isolated water-dimer calculation; no multipole decomposition or fitted power is inferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "altun2018-water-dimer",
        "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
        "role": "method",
        "note": "Re-read the page 925 HF-component discussion (Figure 4 top)."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Altun pages 921-926 were re-read; the source states a slow polynomial decay without printing the exponent, so the r^-3 dipole-dipole power is the C001 definition, not a reported fit.",
      "The LED electrostatic term is the interaction of the full fragment charge distributions, not only a point-dipole term.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "altun2018-water-dimer"
    ]
  },
  {
    "id": "B-elementary-rate-conventions-ksi-initial-rate-parameters",
    "kind": "review-finding",
    "statement": "The KSI initial-rate parameter definition uses the declared rate conventions: a reaction rate is defined only for a specified reaction equation, and the Michaelis constant belongs to a treatment of an enzyme-catalysis mechanism with a limiting rate. The source fits kcat and KM for a substrate whose chemical steps it reports as cleanly rate-limiting; that fit is a response model, not an identified elementary rate constant.",
    "scope": "Declared concentration-based rate conventions and the selected pKSI initial-rate fit; no mechanism assignment for any fitted parameter.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 63-64, 68: rates, reaction order, transport separation and elementary/composite conventions",
        "role": "supports",
        "note": "Re-read the rate and elementary/composite definitions in the declared IUPAC PDF; a terminology convention, not an experimental result."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 67, 69: Michaelis constant and limiting rate with note 20, and the catalyzed-reaction stoichiometric-equation example",
        "role": "supports",
        "note": "Newly declared passage of the same source, read in this session; supplies the Michaelis-constant and limiting-rate convention."
      },
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
        "role": "supports",
        "note": "Re-read the main-text Rate Effects passage only; the five-page supplement was not re-read in this session."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book kinetics sections and the Kraut main-text Rate Effects passage were re-read in this session; Table S2, the supplement and the original fits were not re-read or recomputed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-elementary-rate-conventions-rna-cleavage-observables",
    "kind": "review-finding",
    "statement": "The hammerhead observable definition uses the declared distinction between an elementary reaction and a composite net reaction: one source defines its observed rate constant as an approach to equilibrium equal to the sum of cleavage and ligation rate constants, and the other fits a single exponential progress curve. Both are fitted response coefficients of composite reactions, which have no molecularity under the cited convention.",
    "scope": "Declared elementary/composite rate conventions and the two selected hammerhead cleavage assays; no microscopic step assignment.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 63-64, 68: rates, reaction order, transport separation and elementary/composite conventions",
        "role": "supports",
        "note": "Re-read elementary-reaction, molecularity and composite-mechanism conventions in the declared IUPAC PDF."
      },
      {
        "sourceId": "boots2008-hammerhead-ions",
        "locator": "RNA 14(10), 2212-2222, Materials and Methods: Sample preparation; Single-turnover cleavage experiments, Equation 1; Figure 1A",
        "role": "supports",
        "note": "Re-read the single-turnover Methods passage defining the observed rate constant; no trace was refitted."
      },
      {
        "sourceId": "penedo2004-hammerhead-folding",
        "locator": "RNA 10(5), 880-888, Results: natural hammerhead activity at low magnesium; Figure 4 including caption; Materials and Methods: Ribozyme cleavage assay, Equation 3",
        "role": "supports",
        "note": "Re-read the cleavage Results and Methods passage with the fitted single-exponential rate; figure images were not re-digitized."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book kinetics sections and the two cited hammerhead Methods/Results passages were re-read in this session; no progress curve, table value or uncertainty was recomputed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-activation-gibbs-convention-ksi-energy-identifiability",
    "kind": "review-finding",
    "statement": "Converting the KSI variant turnover losses into kcal/mol uses the declared activation-quantity convention, which the cited terminology source restricts to elementary reactions and to a declared standard state and transmission coefficient. The energy identifiability record therefore inherits that restriction: a reported kcal/mol reduction in catalysis is an apparent difference under the source response model, not a measured microscopic activation Gibbs energy.",
    "scope": "Elementary-rate transition-state convention and the selected KSI variant turnover comparison; no microscopic energetic decomposition.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.12, pp. 64-66: Arrhenius activation energy; activation quantities and note 18",
        "role": "supports",
        "note": "Re-read note 18 and the activation-quantity table entries in the declared IUPAC PDF."
      },
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
        "role": "supports",
        "note": "Re-read the main-text Rate Effects passage where fitted turnover changes are expressed in kcal/mol; the supplement was not re-read."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book activation-quantity passage and the Kraut main-text Rate Effects passage were re-read in this session; the supplement's energetic comparison was not re-read and no activation quantity was computed here.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-catalysis-equilibrium-boundary-ksi-solvation-interpretation",
    "kind": "method",
    "statement": "Interpret the cavity-water solvation account only with a declared reference reaction: the source itself requires that the energetic benefit of an enzymatic hydrogen bond be specified relative to hydrogen bonds donated by water in the nonenzymatic reaction. Under the cited thermodynamic convention the comparison concerns rates for the same net reaction and standard state, so no equilibrium constant or absolute enzyme-versus-water acceleration is obtained from the variant assay.",
    "scope": "The selected pKSI variant/structure/probe comparison and its declared water-solvated reference; no equilibrium measurement and no universal catalytic mechanism.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
        "role": "method",
        "note": "Reviewed locator of the cited kinetic preparation: re-read the main-text Rate Effects passage whose turnover comparisons the interpretation uses; the supplement was not re-read."
      },
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls",
        "role": "method",
        "note": "Re-read the Conclusions and Implications passage stating the water-solvated reference requirement; the supplement was not re-read."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "method",
        "note": "Re-read the standard reaction Gibbs energy and equilibrium-constant relation used to keep rate comparisons separate from equilibrium quantities."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Kraut main-text Conclusions passage and the Green Book thermodynamics sections were re-read in this session; the IUPAC catalyst definition page returned HTTP 403 and was not re-read, and no energetic value was recomputed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "kraut2010-ksi-kinetic-context"
    ]
  },
  {
    "id": "B-reaction-gibbs-equilibrium-metabolic-cycle-boundary",
    "kind": "review-finding",
    "statement": "The metabolic-cycle measurement boundary is stated with the declared reaction Gibbs energy and equilibrium conventions, because the source selects its candidate cycles by calculating a reaction Gibbs free energy profile under stated conditions and by counting cofactor consumption per fixed carbon. A calculated thermodynamic profile for a specified set of reaction equations is a bookkeeping result and is distinct from the separately reported isotope-labelling and product observations.",
    "scope": "Declared thermodynamic conventions and the source's calculated cycle comparison; no measured equilibrium constant and no demonstrated autonomous metabolism.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "supports",
        "note": "Re-read the reaction Gibbs energy, equilibrium-constant and standard-state conventions, including the requirement to specify the reaction."
      },
      {
        "sourceId": "schwander2016-cetch-cycle",
        "locator": "Published pages 900-901, Table 1 and corresponding complete PMC author main text: designed regeneration topology, calculated thermodynamic/energy comparisons and distinction from realized operation",
        "role": "supports",
        "note": "Re-read the PMC author main-text paragraph on thermodynamic feasibility and the Table 1 caption; the supplementary text was not re-read."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book thermodynamics sections and the Schwander main-text thermodynamic-feasibility paragraph with its Table 1 caption were re-read in this session; the supplementary energy calculations were not re-read or recomputed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-electrochemical-gradient-coupling-racker-readouts",
    "kind": "review-finding",
    "statement": "The external-pH and trapped-phosphorylation readout definitions depend on the declared electrochemical conventions, under which pH is defined from hydrogen-ion activity and ion transfer between phases reaches equilibrium when electrochemical potentials are equal. The convention also states that single-ion activities and inner-potential differences are not separately measurable, so an external bulk-pH trace alone does not supply a complete membrane electrochemical difference.",
    "scope": "Declared pH and ion electrochemical-potential conventions as used by the reconstituted-vesicle readout definitions; no gradient magnitude or energy yield.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
        "role": "supports",
        "note": "Re-read the pH definition, the electrochemical-potential expression and note 11 on transfer equilibrium in the declared IUPAC PDF."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "supports",
        "note": "Re-read the standard-state and equilibrium conventions that keep a driven composition separate from an equilibrium constant."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book electrochemistry and thermodynamics passages were re-read in this session; the Racker and Stoeckenius article itself could not be re-read because both publisher routes returned HTTP 403 and no abstract is indexed, so only the convention side is cited here.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-reaction-gibbs-equilibrium-racker-coupling-interpretation",
    "kind": "review-finding",
    "statement": "The chemiosmotic energy-transduction interpretation uses the declared convention in which the reaction Gibbs energy combines a standard term with a reaction quotient and the standard equilibrium constant follows from the standard reaction Gibbs energy for a specified reaction equation. Under that convention a driven or illuminated preparation can change activities and quotients without identifying a changed intrinsic equilibrium constant, which is exactly the distinction the interpretation record retains.",
    "scope": "Declared standard reaction Gibbs energy and equilibrium conventions as used by the vesicle coupling interpretation; no energy-yield or stoichiometry claim.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "supports",
        "note": "Re-read the reaction Gibbs energy, reaction quotient and equilibrium-constant relations with their reaction-specification requirement."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
        "role": "supports",
        "note": "Re-read the electrochemical-potential convention used when a pumped ion distribution is described."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book thermodynamics and electrochemistry passages were re-read in this session; the Racker and Stoeckenius text was not re-readable through the recorded mirror or publisher routes, so no new statement about its measurements is admitted here.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-electrochemical-gradient-coupling-primitive-coupling-open",
    "kind": "review-finding",
    "statement": "The open hypothesis about a primitive boundary coupling an electrochemical gradient to internal chemistry is stated in the declared convention, under which an ion's electrochemical potential combines activity and electric potential and transfer equilibrium requires equal electrochemical potentials in all phases. The convention fixes what would have to be declared and measured; it is bookkeeping and provides no positive evidence for the hypothesis.",
    "scope": "Declared ion electrochemical-potential convention as the vocabulary of an explicitly unresolved coupling hypothesis; no claim that such coupling is impossible.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
        "role": "supports",
        "note": "Re-read the electrochemical-potential definition and note 11 on phase transfer equilibrium in the declared IUPAC PDF."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "limits",
        "note": "The same source's standard-state requirements show that a coupling claim needs a specified reaction and reference state before any energy is calculated."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book electrochemistry and thermodynamics passages were re-read in this session; no protein-free primitive-boundary experiment was read, and the hypothesis remains unresolved rather than refuted.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-signal-response-boundary-signal-transduction-scope",
    "kind": "review-finding",
    "statement": "The scoped signal-transduction record uses the declared boundary between a supplied biochemical preparation, input-dependent molecular activation and a downstream enzyme response. The reused abstract reports that photolyzed rhodopsin catalyses nucleotide exchange, that reconstituted transducin-containing membranes show illumination-dependent analogue binding, and that phosphodiesterase on unilluminated membranes can be activated by the isolated nucleotide-bound alpha subunit; it reports no electrical response and no network transfer gain.",
    "scope": "The reused abstract-only transducin/phosphodiesterase preparation and its two biochemical observables; no electrical readout and no pathway model.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fung1981",
        "locator": "Abstract",
        "role": "supports",
        "note": "Re-read the complete abstract through the Europe PMC indexed record for PMID 6264430; the source remains abstract-only."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the abstract was re-read in this session, through the Europe PMC indexed record; preparation details, concentrations, controls and kinetics remain unread, and no full text was acquired.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-signal-response-boundary-retinal-catalytic-machinery",
    "kind": "review-finding",
    "statement": "The retinal catalytic-machinery record is defined with the declared signal-response distinction. In the reused abstract, reconstituted membranes containing transducin and rhodopsin but no phosphodiesterase show GTPase activity and amplified binding of a nonhydrolysable analogue on illumination; phosphodiesterase activation is a separate observation. The record therefore names a supplied biochemical activity, not an end-to-end pathway or an electrical response.",
    "scope": "The reused abstract-only reconstituted preparation and its named biochemical observables; no electrical or cellular readout.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fung1981",
        "locator": "Abstract",
        "role": "supports",
        "note": "Re-read the complete abstract through the Europe PMC indexed record for PMID 6264430; reuse of the existing abstract-only boundary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the abstract was re-read in this session; species, concentrations, controls and complete kinetics are unresolved and no full text was acquired.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-sequence-fold-function-boundary-protein-folding-scope",
    "kind": "review-finding",
    "statement": "The scoped folding, functional-readout and kinetic-stability evidence uses the declared separation of polymer sequence, environment-conditioned conformations and functional response assays. The reused lymphotactin study states the paradigm in which each sequence maps to a single tertiary fold, reports a natural protein that breaks it, and compares a disulfide-stabilised variant with a core substitution that abolishes the measured receptor response; these comparisons change sequence and conformation together.",
    "scope": "The reused lymphotactin constructs and assays as read, plus the declared sequence/fold/function separation; no unique-fold determinism and no inheritance claim.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "tuinstra2008-lymphotactin-folds",
        "locator": "Published page 5057, Introduction: Anfinsen's thermodynamic hypothesis, the one sequence, one fold paradigm and the reported Ltn conformational equilibrium",
        "role": "supports",
        "note": "Newly declared passage of the same source, read in this session from the declared author-upload PDF."
      },
      {
        "sourceId": "tuinstra2008-lymphotactin-folds",
        "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
        "role": "supports",
        "note": "Re-read the CC3/W55D variant Results and receptor-response comparison; figure images were not re-digitised."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Introduction and the variant Results passages were re-read in this session; the Supporting Information, restraint files and earlier construct-validation papers were not read, and the Methods construct inconsistency is retained.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-rnase-refolding-readouts-chaperonin-aggregation-account",
    "kind": "method",
    "statement": "Interpret the aggregation-prevention account only against the reference it names: the source concludes that the cis cavity behaves as a passive chamber allowing a chain to fold according to its primary structure, as observed originally by Anfinsen and co-workers, while the reused ribonuclease reoxidation record supplies that spontaneous-recovery reference with its own lagged activity readout. The two preparations share no components, buffers or clients.",
    "scope": "The selected purified chaperonin protocols and the separate reduced-ribonuclease reoxidation experiment; no shared preparation and no universal folding mechanism.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "apetri2008-chaperonin-aggregation",
        "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
        "role": "method",
        "note": "Re-read the Introduction and the passive-cage Results/Discussion section in the primary PMC HTML."
      },
      {
        "sourceId": "anfinsen1961-rnase-refolding",
        "locator": "Published pages 1310-1312, Results, Figure 1 and Table 1: different temporal readouts, activity lag, variable synthetic-substrate recovery and spectral evolution",
        "role": "supports",
        "note": "Re-read the Results passage reporting restoration of native properties with the separate activity lag."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The passage cites a later Anfinsen review rather than the 1961 kinetics paper admitted here, and only the cited Results/Discussion passages were re-read in this session; no rate, trace or supplementary figure was re-analysed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "apetri2008-rubisco-refolding",
      "apetri2008-mbp-refolding"
    ]
  },
  {
    "id": "B-chaperonin-aggregation-account-proteasome-unfolding-control",
    "kind": "method",
    "statement": "The separate global-unfolding control assesses stability with a GroEL binding assay followed by protease treatment, so its readout relies on the chaperonin principle that nonnative polypeptide is bound through exposed hydrophobic surfaces by an open GroEL ring. The control therefore reports capture of globally unfolded molecules under its own temperature and ligand conditions, not an unfolding rate during the degradation assay.",
    "scope": "The cpLys38 global-unfolding control at its stated temperature and methotrexate concentration, read through the chaperonin capture principle; no local-unfolding or degradation rate.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "prakash2004-proteasome-initiation",
        "locator": "Published page 832 Figure 2e and associated Results, page 836 Methods Stability assays: 15 C GroEL-binding/protease-protection control in 100 micromolar methotrexate, distinct from degradation at 25 C and 320 micromolar methotrexate",
        "role": "method",
        "note": "Re-read the Stability assays Methods paragraph and the associated Figure 2e Results text in the declared author-lab PDF."
      },
      {
        "sourceId": "apetri2008-chaperonin-aggregation",
        "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
        "role": "method",
        "note": "Re-read the Introduction passage stating that nonnative polypeptide is bound via the hydrophobic cavity lining of an open GroEL ring."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Methods and Introduction passages were re-read in this session; the upstream GroEL-binding-assay reference, raw autoradiograms and any rate fit were not read or recomputed.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "prakash2004-substrate-unfolding-control"
    ]
  },
  {
    "id": "B-protein-modification-boundary-protein-modification-scope",
    "kind": "review-finding",
    "statement": "The scoped protein-modification record is defined by the declared readout boundary. Its source control runs the same lysate assay as degradation but adds an inhibitor of deubiquitinating enzymes and methotrexate to block degradation, so the accumulating ubiquitinated band is a net readout under those conditions and is distinct from an attachment-site map, a ligation rate or a demonstrated chain topology.",
    "scope": "The engineered N-end-rule DHFR constructs in the cited lysate ubiquitination control; no modification rate and no universal regulatory mechanism.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "prakash2004-proteasome-initiation",
        "locator": "Published pages 833-834, Results Requirement for unstructured initiation sites and Figure 4a-e; page 836 Methods Substrate proteins, Proteasome degradation assays and Ubiquitination assays: deleted linker, matched ubiquitination, two tails and linear Ub4 fusion",
        "role": "supports",
        "note": "Re-read the Ubiquitination assays Methods paragraph and the associated Results text in the declared author-lab PDF."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Methods and Results passages were re-read in this session; gels, quantifications and the linear ubiquitin-fusion construct details were not re-analysed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-translation-source-scope-prakash-substrate-context",
    "kind": "method",
    "statement": "The substrate preparation of the lysate degradation assay relies on cell-free polypeptide synthesis: radioactive proteins are expressed from a promoter by in vitro transcription and translation in reticulocyte lysate with labelled methionine, then partially purified before the degradation reaction. This is the same class of cell-free template-dependent polypeptide production that the admitted translation scope delimits; no identity between the bacterial and reticulocyte systems is asserted.",
    "scope": "The cited substrate-preparation step of the lysate degradation assay, named as cell-free template-dependent polypeptide synthesis; no codon, fidelity or mechanism claim.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "prakash2004-proteasome-initiation",
        "locator": "Published pages 831-832, Results Separating ubiquitination and initiation sites, Figure 2a-f; page 836 Methods Substrate proteins, Proteasome degradation assays and Protease sensitivity assay: cpLys38 orientation, lysine-less tail, methotrexate and tag controls",
        "role": "method",
        "note": "Re-read the Methods Substrate proteins and Proteasome degradation assays paragraphs, including the in vitro transcription/translation step."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Prakash Methods and associated Results passages were re-read in this session; the bacterial cell-free translation source was not re-read, so no quantitative or mechanistic equivalence between the two systems is claimed.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "prakash2004-substrate-degradation"
    ]
  },
  {
    "id": "B-rnai-readout-boundary-rnai-source-inference",
    "kind": "review-finding",
    "statement": "The bounded interference interpretation is defined with the declared readout convention, under which phenotype, reporter fluorescence and transcript staining remain separate readouts. The source reports that no endogenous transcript was observed for embryos from parents injected with the corresponding double-stranded segment, and states that RNA-targeted processes cannot be ruled out while interference at the level of chromatin structure or transcription could also be involved.",
    "scope": "The selected prepared C. elegans injections and their three separate readouts; no modern small-RNA pathway and no resolved mechanism.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fire1998-celegans-dsrna-interference",
        "locator": "Nature 391, 807-810: estimated dose/dilution argument, residual expression, sequence-family specificity, unresolved RNA-targeted versus chromatin/transcription mechanisms; Methods: preparation purity, approximate injected amounts and temporal progeny patterns",
        "role": "supports",
        "note": "Re-read the Discussion passage leaving RNA-targeted versus chromatin/transcription mechanisms open, in the declared author-lab PDF."
      },
      {
        "sourceId": "fire1998-celegans-dsrna-interference",
        "locator": "Nature 391, 809: endogenous mex-3 transcript comparison, Figure 3 and caption",
        "role": "supports",
        "note": "Re-read the endogenous transcript comparison text and figure caption."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Discussion and transcript-comparison passages were re-read in this session; tables, supplementary material, upstream methods papers and later mechanistic literature were not read.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-chromatin-assay-boundary-epigenetic-regulation-scope",
    "kind": "review-finding",
    "statement": "The scoped chromatin-modification evidence is defined with the declared assay boundary, which keeps locus bisulfite readouts, histone- and factor-associated immunoprecipitation and protein output distinct. The source performed its chromatin immunoprecipitation with a kit protocol on dissected tissue and states in its own Discussion that the exact causal relationship between methylation, histone acetylation and factor binding remains to be defined.",
    "scope": "The reused rat locus-level methylation, immunoprecipitation and expression readouts; correlation and broad perturbation only, no causal mediation.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "weaver2004",
        "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
        "role": "supports",
        "note": "Re-read the reversal Results text and the chromatin immunoprecipitation Methods paragraph in the declared corrected PDF."
      },
      {
        "sourceId": "weaver2004",
        "locator": "Discussion: unresolved causal relationship between DNA methylation, histone acetylation and NGFI-A binding",
        "role": "limits",
        "note": "Re-read the Discussion sentence leaving the causal relationship undefined."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results, Methods and Discussion passages were re-read in this session; individual animal measurements, blots and clone sequences were not re-analysed and the known figure/method count inconsistencies remain.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-chromatin-assay-boundary-chromatin-packaging-scope",
    "kind": "review-finding",
    "statement": "The scoped packaging and expression record is defined with the declared assay distinctions. One reused study compares accessibility peaks with separately sequenced RNA profiles and reports overlap statistics between gained-open regions and upregulated genes; the other computes compartments from contact maps at a stated bin resolution. Neither readout is a unique physical packing geometry, and the overlap is an association between distinct assays.",
    "scope": "The reused mouse accessibility, contact and RNA profiles as read; associations between separate assays, not a packaging-to-expression mechanism.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "su2017",
        "locator": "Results: chromatin accessibility and gene expression; Figure 2d; Online Methods: RNA-seq and data analyses",
        "role": "supports",
        "note": "Re-read the accessibility/expression overlap Results passage and the RNA-seq Methods paragraph in the declared author-hosted PDF."
      },
      {
        "sourceId": "marco2020",
        "locator": "Results and Figure 3: compartment profiles; Methods: Hi-C",
        "role": "supports",
        "note": "Re-read the compartment-switching Results passage, the Figure 3 caption and the Hi-C Methods paragraph in the declared author-hosted PDF."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results, caption and Methods passages were re-read in this session; sequencing data, analysis code and external datasets were not replayed, and the recorded label inconsistencies remain.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-chromatin-assay-boundary-rnai-source-inference",
    "kind": "method",
    "statement": "Keep the interference interpretation open as the source leaves it: it states that RNA-targeted processes cannot be ruled out and that interference at the level of chromatin structure or transcription could be involved. Deciding between those alternatives requires the separate locus-level chromatin readouts defined for the reused chromatin studies, such as factor- and histone-associated immunoprecipitation, which the injection experiments do not include.",
    "scope": "The selected C. elegans injection readouts and the distinct chromatin assays named in the boundary; no mechanism assignment and no shared preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "fire1998-celegans-dsrna-interference",
        "locator": "Nature 391, 807-810: estimated dose/dilution argument, residual expression, sequence-family specificity, unresolved RNA-targeted versus chromatin/transcription mechanisms; Methods: preparation purity, approximate injected amounts and temporal progeny patterns",
        "role": "method",
        "note": "Re-read the Discussion passage naming the chromatin/transcription alternative in the declared author-lab PDF."
      },
      {
        "sourceId": "weaver2004",
        "locator": "Results: reversal of maternal effects on chromatin structure; Figure 3; Methods: Intracerebroventricular infusions and ChIP assay",
        "role": "method",
        "note": "Re-read the chromatin immunoprecipitation Methods paragraph that defines the locus-level chromatin readout."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Discussion and Methods passages were re-read in this session; no chromatin assay was performed on the worm preparation and no later mechanistic literature was read, so the alternative stays open rather than resolved.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-grx-redox-reporter-grx-sensor-response",
    "kind": "review-finding",
    "statement": "The glutathione-coupled sensor response record is defined by the declared reporter convention: the source reports that fusing human glutaredoxin-1 to the redox-sensitive fluorescent protein facilitates specific real-time equilibration between the sensor protein and the glutathione redox couple, and that conventional sensors are limited by undefined specificity and slow response. The ratio therefore denotes the coupled sensor oxidation state, not a glutathione or peroxide concentration.",
    "scope": "The declared glutathione-coupling reporter convention and the sensor-response record defined with it; no absolute potential, concentration or preparation detail.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "gutscher2008-grx-rogfp2-redox",
        "locator": "Abstract",
        "role": "supports",
        "note": "Newly declared passage of the same source: the complete abstract was read in this session through the Europe PMC indexed record for the article DOI."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the abstract was read in this session, through the Europe PMC indexed record; the reviewed Results and Methods passages of the purified-sensor preparation were not accessible (the publisher page requires a cookie flow and the institutional copy returned HTTP 404), so this bridge is stated as a definition dependency without preparation contexts.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-intracellular-ph-reporter-yeast-glucose-ph-response",
    "kind": "method",
    "statement": "The reported glucose-dependent intracellular-pH trajectories depend on the declared reporter convention: the biosensor provides a ratiometric readout from which pH values are calculated with a standard curve, using emission at one wavelength under two excitation wavelengths, measured in a plate reader with a stated dead time. The quantity is therefore a calibrated ensemble reporter estimate, distinct from external pH, pump flux or buffering capacity.",
    "scope": "The cited yeast glucose-removal and readdition measurements read through the declared pHluorin calibration; no proton flux, membrane potential or single-cell trajectory.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "isom2018-yeast-glucose-ph",
        "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
        "role": "method",
        "note": "Re-read the Measurement of intracellular pH procedure and the Figure 2 caption through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Experimental procedures passage and figure caption were re-read in this session; the upstream calibration procedure, raw fluorescence traces and supplemental tables were not read or replayed.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "isom2018-yeast-ph-response-context"
    ]
  },
  {
    "id": "B-cooperativity-fit-boundary-capn-sequential-binding",
    "kind": "review-finding",
    "statement": "The sequential-binding record is defined with the declared cooperativity boundary. The source fits a biphasic calorimetric isotherm with a sequential binding-site model and reports a free-energy difference between the two steps corresponding to a hundredfold lower affinity for the second ligand. That stepwise fit is occupancy-dependent binding preference within the declared preparation; no Hill coefficient is fitted and no site count is measured.",
    "scope": "The selected isolated construct and calorimetric titration with its sequential-site fit; no Hill analysis, catalytic turnover or unique allosteric mechanism.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "popovych2006-capn-allostery",
        "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
        "role": "supports",
        "note": "Re-read the thermodynamic Results passage, the Figure 7 caption and the calorimetry Methods in the primary author-manuscript record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results, figure caption and Methods passages were re-read in this session; raw calorimetry, the fitting implementation and the supplement were not re-read or refitted.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-allostery-response-boundary-capn-distal-response",
    "kind": "review-finding",
    "statement": "The distal response record is defined with the declared allostery boundary, which uses allostery for a declared distal response within the same connected assembly while keeping the measured readout separate from the communication mechanism. The source reports that residues of the unliganded subunit as far as about 35 angstrom from the bound ligand show enhanced dynamics, with the remote binding site only slightly perturbed in mean conformation.",
    "scope": "The selected ligation-state series and its relaxation readouts; no microscopic communication pathway and no functional response.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "popovych2006-capn-allostery",
        "locator": "NIH author-manuscript HTML Results Effect of sequential cAMP binding on the structure of CAPN and Effect of sequential cAMP binding on slow protein motions, Both subunits undergo the same conformational exchange, Effect of sequential cAMP binding on fast protein motions; Figures 2-5",
        "role": "supports",
        "note": "Re-read the structure and slow-motion Results passages, including the distance mapping, in the primary author-manuscript record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results passages were re-read in this session; relaxation dispersion data, order parameters and the supplement were not re-read or refitted, and the mapped distances come from an adopted structural model.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-elementary-rate-conventions-enzyme-assembly-boundary",
    "kind": "review-finding",
    "statement": "The cage assembly and activity boundary is stated with the declared rate and rate-constant conventions. The source reports that the Michaelis constant varies little between encapsulated and free enzyme while turnover numbers increase several-fold, and separately reports a normalised coupled two-enzyme absorbance signal. Under the cited convention these are fitted parameters of specified reactions, so neither a turnover ratio nor a coupled absorbance normalisation identifies an elementary step or substrate channeling.",
    "scope": "The selected synthetic cage preparations with their kinetic parameters and coupled absorbance readout; no channeling measurement and no universal efficiency gain.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 67, 69: Michaelis constant and limiting rate with note 20, and the catalyzed-reaction stoichiometric-equation example",
        "role": "supports",
        "note": "Newly declared passage of the same source, read in this session; supplies the Michaelis-constant, limiting-rate and catalysed-reaction conventions."
      },
      {
        "sourceId": "zhao2016-dna-nanocaged-enzymes",
        "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
        "role": "supports",
        "note": "Re-read the Results/Discussion kinetic-parameter statements through the PMC copy of the same article; the supplement was not re-read."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Green Book kinetics passages and the Zhao Results/Discussion kinetic statements were re-read in this session, the latter through the PMC copy of the article rather than the recorded publisher URL; individual kinetic traces and the supplement were not read.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hydration-boundary-gox-hrp-compartment-account",
    "kind": "method",
    "statement": "Treat the cage activity account's hydration proposal as an interpretation bounded by the hydration-readout distinction. The cage source expects a strongly bound hydration layer of hydrogen-bonded water inside the cavity and offers it as a model for the activity change; the hydration source states that water-protein relaxation and transfer measurements are dominated by long-range couplings to bulk water and yield correlation and residence times only within a fitted model, so neither experiment images ordered water in the other's preparation.",
    "scope": "The cage activity comparison and the separate supercooled water-relaxation study; no measured local water structure in either preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "zhao2016-dna-nanocaged-enzymes",
        "locator": "Published pages 5-7, Figures 4-6 and Discussion; Supplementary Note 3 pages S68-S69 and Methods S104-S105: proposed hydration/proximity mechanisms, active-fraction versus turnover distinction, unmatched single-molecule preparations and conflicting trypsin annotations",
        "role": "method",
        "note": "Re-read the proposed hydration-layer mechanism passages through the PMC copy of the same article."
      },
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
        "role": "method",
        "note": "Re-read the Introduction passages on long-range dipolar contributions and on inferring residence times from correlation times."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited cage Results/Discussion passages and the hydration-study Introduction were re-read in this session; neither source's supplement, traces nor fits were re-analysed, and no reference list was checked for a citation link between them.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hydration-boundary-antibody-recognition-boundary",
    "kind": "review-finding",
    "statement": "The antibody-interface boundary is stated with the hydration-readout distinction. The crystallographic source reports that no attempt was made to locate solvent molecules and that one interface hole is probably filled by a water molecule suggested by an electron-density peak, while other holes appear unfilled. The separate relaxation study defines residence times as quantities inferred from correlation times, so a tentative density peak is neither a hydration shell nor a residence time.",
    "scope": "The refined antigen-antibody interface model and the separate water-relaxation conventions; no solvent model in the crystal and no structural imaging in the relaxation study.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "amit1986-hewl-d13-structure",
        "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
        "role": "supports",
        "note": "Re-read the Structure determination passage stating that no attempt was made to locate solvent molecules."
      },
      {
        "sourceId": "amit1986-hewl-d13-structure",
        "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
        "role": "supports",
        "note": "Re-read the Discussion passage on interface holes and the tentative water assignment."
      },
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
        "role": "supports",
        "note": "Re-read the Introduction passage defining how correlation times are converted into implied residence times."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited crystallographic and relaxation passages were re-read in this session; no electron density, map or relaxation dataset was re-analysed, and the two sources concern different proteins and preparations.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-phage-observation-boundaries-capsid-assembly-scope",
    "kind": "review-finding",
    "statement": "The bounded capsid-assembly scope is defined with the declared separation of assembly dynamics from structure, maturation and infection. The assembly source states that it does not claim the observed features must be present in assembly in vivo, cautions against models based primarily on static measurements, and reports that the nucleation barrier height and critical nucleus size were not determined directly. Its optical trajectories are therefore cell-free assembly observations only.",
    "scope": "The selected cell-free optical assembly measurements and their stated inference limits; no in-cell assembly, maturation or infectious competence.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "garmann2019-ms2-assembly-traces",
        "locator": "PNAS 116(45), 22487-22489: Discussion limits on in-vitro versus in-vivo inference, static structure versus dynamic pathways, and unresolved nucleus size/barrier and growth mechanisms",
        "role": "supports",
        "note": "Re-read the Discussion limitation passages through the primary PMC record for the article."
      },
      {
        "sourceId": "garmann2019-ms2-assembly-traces",
        "locator": "PNAS 116(45), 22485-22487: selected Results on optical assembly traces, Figures 1-2 and captions, separate TEM comparison reported in main text",
        "role": "supports",
        "note": "Re-read the Results description of individual intensity traces through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results and Discussion passages were re-read in this session, through the PMC record; the supplementary appendix, movies, raw traces and calibration were not read or replayed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-phage-observation-boundaries-genome-organization-scope",
    "kind": "review-finding",
    "statement": "The bounded genome-organization scope is defined with the declared separation of structure from assembly dynamics and lifecycle steps. The structural source states that single RNA strands are not clearly resolved in its map, that higher resolution would be required to investigate individual stem-loop contacts, and labels its assembly sequence a proposed model. Ordered density and asymmetric contacts are therefore structural observations, not packaging functions.",
    "scope": "The selected asymmetric reconstruction with its stated resolution limits; no sequence assignment, packaging function or lifecycle coupling.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "koning2016-ms2-asymmetric-genome",
        "locator": "Nature Communications 7, 12524: Results, The RNA resolution limits; Figure 2c caption as proposed model only; Discussion on possible assembly implications and limits of generalization",
        "role": "supports",
        "note": "Re-read the RNA resolution-limit Results passage, the Figure 2c caption and the Discussion generalisation caveat through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results, caption and Discussion passages were re-read in this session, through the PMC record; deposited maps, raw particles and supplementary material were not reprocessed.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-viral-entry-scope-ms2-isolated-receptor-association",
    "kind": "method",
    "statement": "Interpret the particle-receptor association within the entry boundary that the source itself draws: because the pili were sheared off the cells that expressed them during purification, the preparation dissects initial binding of virus to receptor from any downstream structural rearrangement, and the authors state that the molecular mechanisms by which genome entry occurs remain to be discovered. The structure therefore supports association, not boundary crossing or delivery.",
    "scope": "The cited isolated-pilus tomographic preparation; no intact host, no genome delivery and no replication initiation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "dent2013-ms2-receptor-structure",
        "locator": "Structure 21(7), 1227-1229: isolated pili separate initial binding from downstream rearrangement; limited resolution, averaging and flexible receptor-particle association",
        "role": "method",
        "note": "Re-read the passage on sheared, isolated pili and the Discussion statement on unknown entry mechanisms through the primary PMC record."
      },
      {
        "sourceId": "dent2013-ms2-receptor-structure",
        "locator": "Structure 21(7), 1227-1228: selected opening Results on isolated MS2-pilus complexes and asymmetric reconstruction, Figures 2-3 and captions",
        "role": "method",
        "note": "Re-read the opening Results on the purified pili and particle attachment through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Results and Discussion passages were re-read in this session, through the PMC record; tomograms, movies and later genome-release studies were not read or reprocessed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "dent2013-ms2-isolated-receptor-context"
    ]
  },
  {
    "id": "B-vesicle-fed-growth-supplied-lipid-membrane-account",
    "kind": "method",
    "statement": "Read the supplied-lipid membrane account against the fed fatty-acid precedent it cites: large multilamellar fatty-acid vesicles could be grown by feeding micelles until the structures divided, a result obtained with a dye-based surface-area assay. In the newer preparation the immediate dye-dequenching increase is attributed to added fatty acid swelling pre-existing liposomes rather than to phospholipid synthesis, so the two preparations share a dye-based area proxy but not an inference about membrane formation.",
    "scope": "The fed oleate growth/division cycles and the separate phospholipid-synthesis preparation on pre-existing liposomes; no shared sample and no de novo membrane formation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "exterkate2018-phospholipid-synthesis",
        "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
        "role": "method",
        "note": "Re-read the Introduction passage citing fed fatty-acid vesicle growth and division, and the reference entry naming that study, through the primary PMC record."
      },
      {
        "sourceId": "exterkate2018-phospholipid-synthesis",
        "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
        "role": "method",
        "note": "Re-read the membrane-expansion Results passage attributing the immediate fluorescence increase to fatty-acid addition."
      },
      {
        "sourceId": "zhu2009-growth-division",
        "locator": "JACS 131(15), 5705-5713, Materials and Methods: FRET Assay and Vesicle Growth and Division; Results: Vesicle Growth and Division and Cycles of Growth and Division; Figure 2A; Supporting Information pages S2-S4 Model for Vesicle Shape Transformations",
        "role": "supports",
        "note": "Re-read the dye-based surface-area assay description and the growth/division cycles Results through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited main-text passages were re-read in this session; neither supplement was re-analysed, no area calibration was recomputed, and the citation link establishes a stated precedent rather than a shared experiment.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-condensate-boundary-model-vesicle-readout-boundary",
    "kind": "review-finding",
    "statement": "The model-vesicle readout boundary uses the condensate case when it declares vesicles and coacervates alternative compartment realizations. The condensate source frames membrane encapsulation as one strategy and membraneless proteinaceous organelles as an alternative, and reports that its droplet phase can largely exclude double-stranded while concentrating single-stranded labelled DNA. Solute partition without a membrane and membrane-bounded retention therefore remain distinct observables.",
    "scope": "The declared compartment alternatives in the two boundaries, with the condensate partition and vesicle retention readouts kept separate; neither is a prerequisite for the other.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
        "role": "supports",
        "note": "Re-read the introductory passage contrasting membrane encapsulation with membraneless organelles through the primary PMC record."
      },
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
        "role": "supports",
        "note": "Re-read the labelled-DNA partition passage describing exclusion of double-stranded and concentration of single-stranded DNA."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited main-text passages were re-read in this session; the supplement sections, image data and fitted phase models were not re-analysed, and no vesicle preparation was read here.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-rna-reciprocal-catalysis-nonenzymatic-extension-scope",
    "kind": "method",
    "statement": "Interpret the nonenzymatic extension scope against the RNA-catalysed alternative that its source names: the extension source states that if rates and fidelities were sufficiently high the need for a ribozyme polymerase might be circumvented, and the separate cross-catalytic study reports two RNA enzymes that each ligate two supplied substrates to produce the other. Catalyst-free templated extension and RNA-catalysed ligation remain separate preparations with separate readouts.",
    "scope": "The selected nonenzymatic primer-extension experiments and the separate reciprocal RNA ligation pair; no shared preparation and no demonstrated replication cycle.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "prywes2016-helper-rna-copying",
        "locator": "eLife 5:e17756, Discussion mechanistic alternatives and final reactivation/energy-source paragraph; Results and Figure 6 caption distinguishing partial bead-assisted hammerhead synthesis; Materials and methods: Bead-immobilized reactions",
        "role": "method",
        "note": "Re-read the Discussion paragraph on circumventing a ribozyme polymerase through the primary PMC record."
      },
      {
        "sourceId": "lincoln2009-cross-catalytic-rna",
        "locator": "Published pages 1229-1230 and Figure 1; PMC author manuscript Figure 1 and paragraphs on the reciprocal E/E-prime ligation reactions: reaction topology, supplied RNA components and protein-free amplification",
        "role": "method",
        "note": "Re-read the reciprocal ligation scheme and Figure 1 caption through the primary PMC record."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the cited Discussion and scheme passages were re-read in this session; neither supplement was read, no gel or growth curve was re-analysed, and no rate comparison between the two systems is admitted.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-orbital-ec-channel-biochemical-transfer-boundary",
    "kind": "review-finding",
    "statement": "The L3 admission boundary for biochemical electron-capture claims uses the orbital EC channel definition of the L2 stored-ion record: in the selected 140Pr channel a bound electron is captured with emission of an electron neutrino (p + e- -> n + nu_e), the beta+ branch is a separate channel, and EC changes the nuclear charge while the atomic charge state is preserved. 'Specified isotope and nuclear channel' in the boundary refers to this channel specification.",
    "scope": "Definitional dependency of one L3 evidence-admission boundary on one L2 channel/charge-state definition drawn from the same primary storage-ring source; no biochemical preparation is involved.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "litvinov2007-pr-ec",
        "locator": "Author manuscript arXiv:0711.3709v1 pages 1-2: isotope-specific orbital EC and beta+ channels, selected Pr charge states, SIS/FRS/ESR production, cooling and Schottky readout",
        "role": "supports",
        "note": "Re-read in this session (arXiv v1 PDF pages 1-2): the two weak channels of 140Pr and the statement that EC preserves the atomic charge state; the passage describes no chemical or biochemical preparation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the arXiv v1 author-manuscript pages 1-2 were re-read; the published PRL version, the cited Refs. 17 and 35 and any chemical or biochemical decay-rate literature were not read.",
      "The bridge specifies what a biochemical EC claim must name; it neither establishes nor excludes a biochemical modulation of nuclear decay and supplies no electron-density coefficient.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-electronic-decay-scope-biochemical-ec-hypothesis",
    "kind": "method",
    "statement": "Evaluate the biochemical electron-capture hypothesis against the finite stored-ion result only: in the selected 140Pr channel, orbital EC of H-like 140Pr58+ exceeds that of He-like 140Pr57+ by the reported factor 1.49(8), while beta+ partial rates agree within errors. The hypothesis record cites this electronic-state dependence of highly stripped ions as the boundary of the admitted evidence and keeps the biochemical extension unsupported.",
    "scope": "Interpretation-boundary dependency between one L2 stored-ion evidence scope and one L3 unsupported hypothesis; same primary source, no biochemical preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "litvinov2007-pr-ec",
        "locator": "Author manuscript arXiv:0711.3709v1 page 3, Table I and adjoining rate-comparison paragraphs: charge-state-specific rest-frame beta+/EC constants, reported 1.49(8) ratio and mean loss term",
        "role": "method",
        "note": "Re-read in this session: Table I rest-frame constants, the 1.49(8) EC increase from He-like to H-like ions and the ionization-independent beta+ rate, all in the ESR storage-ring preparation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the arXiv v1 manuscript pages 1-4 were re-read; the theoretical treatment of Ref. 35 and any chemical/biochemical EC literature were not read, so no statement on the existence or absence of biochemical EC effects is made.",
      "The contrast concerns highly ionized ions in ultra-high vacuum with a conditional hyperfine explanation; it supplies no molecular, enzymatic or cellular comparison.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "litvinov2007-pr-charge-states"
    ]
  },
  {
    "id": "B-hydrogen-bond-definition-ksi-analogue-geometry",
    "kind": "review-finding",
    "statement": "The localized pKSI Y16S/D40N-equilenin geometry uses the evidence-based hydrogen-bond classification of X-H donors and electron-rich acceptors (here hydroxyl or carboxyl donors and oxygen acceptors). The source excludes a Ser16-equilenin bond at 6.4 angstrom, assigns a Ser16-to-Met13 carbonyl bond at 2.7 angstrom and uses 3.5 angstrom as hydrogen-bonding distance. The IUPAC definition treats geometry as one diagnostic and does not recommend a van der Waals distance criterion as an infallible indicator.",
    "scope": "Definitional dependency of one crystallographic L3 structural record on the L2 hydrogen-bond classification; no energetic, kinetic or catalytic inference.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "arunan2011-hbond-definition",
        "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
        "role": "supports",
        "note": "Re-read in this session through the Internet Archive copy of the recorded IUPAC PDF (publisher URL blocked): definition, donor/acceptor notation, criterion E3 and footnote F5 on distance criteria."
      },
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Results and Discussion: X-Ray Structure; Figure 3A-C; Methods; Supporting Information page 2 KSI X-ray Crystallography and page 5 Table S3",
        "role": "supports",
        "note": "Main-text X-ray structure section, Figure 3 caption and Methods re-read; SI page 2 and Table S3 not re-read in this session."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only IUPAC pages 1638-1640 and the Kraut main-text X-ray section/Methods were re-read; the IUPAC technical report, Kraut SI page 2 and Table S3 and the deposited 3IPT coordinates were not read or re-analysed.",
      "Hydrogen positions are not resolved; the 3.5 angstrom O...O cutoff is the source's operational geometric criterion, not an IUPAC threshold, and the assignment supplies no hydrogen-bond energy or catalytic contribution.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hydrogen-bond-energy-boundary-ksi-energy-identifiability",
    "kind": "method",
    "statement": "Interpret the KSI residue-16 variant turnover losses with the L2 rule that a hydrogen-bond energy needs a specified system, reference fragments or states and energy convention. Kraut specify the comparison as enzymatic versus water-donated hydrogen bonds in the solvated nonenzymatic reaction and describe the ~200-fold Tyr16 contribution as net of several favorable and unfavorable terms; the water-dimer model shows dimerization and interaction energies differ by fragment preparation and that energy-term definitions are not unique.",
    "scope": "Interpretation of one L3 KSI identifiability record with one L2 hydrogen-bond energy-convention boundary; no water-dimer number is transferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Results and Discussion: Rate Effects; Figure 2; Supporting Information pages 1-2 KSI Kinetics and page 5 Table S2",
        "role": "method",
        "note": "Main-text Rate Effects section re-read (Ser/Thr/Ala/Gly versus Phe comparison); SI kinetics pages and Table S2 not re-read."
      },
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Conclusions and Implications and Figure 5; Supporting Information page 1 energetic comparison and page 2 diffuse density and urea controls",
        "role": "method",
        "note": "Main-text Conclusions and Implications and Figure 5 caption re-read; SI pages 1-2 not re-read."
      },
      {
        "sourceId": "altun2018-water-dimer",
        "locator": "Published pages 921-923, Computational Details and Theoretical Aspects, Equations 1-11: RI-MP2 geometry, DLPNO-CCSD(T)/LED, basis corrections and DFT-SAPT conventions",
        "role": "supports",
        "note": "Re-read: supramolecular dimerization energy relative to noninteracting fragments, split into geometric preparation and interaction energy."
      },
      {
        "sourceId": "altun2018-water-dimer",
        "locator": "Published pages 923-927, Table 1 and Figures 3-5: selected water-dimer geometry and energies, harmonic versus inherited ZPE, asymptotic scans and nonunique energy components",
        "role": "limits",
        "note": "Re-read: the source states the non-uniqueness of interaction-energy term definitions."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Kraut's main-text Rate Effects and Conclusions/Figure 5 and Altun pages 921-927 were re-read; Kraut SI pages 1-2, the IUPAC technical report (recorded URL blocked) and Rocher-Casterline 2011 were not read, and no energy is recomputed.",
      "Water-dimer energies are not transferred to KSI; the shared element is the reference/convention requirement, not a hydrogen-bond strength, and the KSI cavity-water interpretation remains the source's conditional model.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "kraut2010-ksi-kinetic-context"
    ]
  },
  {
    "id": "B-nics-criterion-ksi-probe-response",
    "kind": "method",
    "statement": "Interpret the ~2 ppm 19F shift difference between fluorophenolate bound to Y16F/D40N and Y16S/D40N only after considering aromatic ring-current shielding from Phe16. Kraut place the ortho-F about 4.5 angstrom from the Phe16 ring and cite computed benzene-ring shielding contributions as negligible beyond 4.0 angstrom. The L2 NICS criterion supplies the corresponding concept, computed diatropic ring-current magnetic shielding at a non-nuclear point, but only at the ring center.",
    "scope": "Interpretive dependency of one L3 spectroscopic record on one L2 magnetic aromaticity criterion; no shielding value is transferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "kraut2010-ksi-oxyanion-mutations",
        "locator": "PNAS 107(5), 1960-1965, Probing the Local Solvation Environment; Figure 4; Supporting Information page 2 NMR and UV-vis methods; Figures S1-S2 pages 3-4",
        "role": "method",
        "note": "Main-text 19F NMR section and Figure 4 caption re-read; SI pages 2-4 and the cited Ref. 27 shielding calculation were not read."
      },
      {
        "sourceId": "schleyer1996-nics",
        "locator": "Published page 6317, ring-center absolute-shielding proposal and sign convention: unweighted heavy-atom coordinate center, computed NICS and stated aromaticity probe",
        "role": "supports",
        "note": "Re-read: diatropic ring current as the defining aromatic characteristic, chemical shifts as ring-current indicators and the computed ring-center absolute-shielding proposal."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Kraut's main-text 19F section and Schleyer page 6317 were re-read; the Ref. 27 hexafluorobenzene calculation on which the exclusion rests, Kraut SI pages 2-4 and later NICS scan papers were not read.",
      "A ring-center NICS value is not a shielding at the off-center 19F position about 4.5 angstrom away; no electric field, dielectric constant or solvation energy is inferred from either source.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "kraut2010-ksi-probe-context"
    ]
  },
  {
    "id": "B-hydrogen-bond-definition-hewl-d13-interface",
    "kind": "review-finding",
    "statement": "The HEWL-D1.3 interface geometry uses the hydrogen-bond classification for its Table 3 assignments: donor and acceptor heavy atoms of antibody and lysozyme in the refined model, including side-chain to main-chain contacts and main-chain contacts the source compares with beta-sheet hydrogen bonds. The IUPAC definition supplies the X-H...Y-Z donor/acceptor concept, lists geometry and crystal packing among qualified characteristics and admits borderline cases.",
    "scope": "Definitional dependency of one L3 crystallographic interface record on the L2 hydrogen-bond classification; no affinity, specificity or energetic inference.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "arunan2011-hbond-definition",
        "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
        "role": "supports",
        "note": "Re-read through the Internet Archive copy of the recorded IUPAC PDF: definition, donor/acceptor notation and characteristic C4."
      },
      {
        "sourceId": "amit1986-hewl-d13-structure",
        "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
        "role": "supports",
        "note": "Re-read from the recorded exhibit scan (OCR text layer); quotations corrected only for OCR glyph errors."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only IUPAC pages 1638-1640 and Amit pages 748-750 (interface text and Table 3) were re-read; coordinates, structure factors and refinement were not re-analysed, and the scan's OCR required glyph correction.",
      "At 2.8 angstrom with R=0.28 and ~0.6 angstrom coordinate error, Table 3 contacts are model-based classifications without hydrogen positions or energies and do not quantify affinity or specificity.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hydrogen-bond-definition-lymphotactin-folds",
    "kind": "review-finding",
    "statement": "The alternative-fold inference for lymphotactin is stated with the hydrogen-bond classification: beta-strand pairings are represented by backbone N-H donor to C=O acceptor hydrogen bonds (X-H...Y-Z with X = N, Y = O, Z = C), and Ltn10/Ltn40 interconversion breaks every secondary-structure hydrogen bond and replaces it with a different residue pair. The patterns are assigned from NOE-restrained ensembles; NMR signatures are among the IUPAC diagnostics, but no per-bond diagnostic is reported in the read passage.",
    "scope": "Definitional dependency of one L3 NMR-structure record on the L2 hydrogen-bond classification; no folding energetics or kinetics.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "arunan2011-hbond-definition",
        "locator": "Published pages 1638-1640, Section 2, criteria E1-E6, characteristics C2-C6 and footnotes F1-F9: evidence-based intra/intermolecular definition and qualified diagnostics",
        "role": "supports",
        "note": "Re-read through the Internet Archive copy: definition and criterion E5 on NMR signatures."
      },
      {
        "sourceId": "tuinstra2008-lymphotactin-folds",
        "locator": "Published pages 5058-5060, Figures 3-4 and Results: alternative structural contacts, CC3/W55D variants, XCR1 calcium-flux readouts, heparin interactions and WT/CC3 heparin controls",
        "role": "supports",
        "note": "Re-read: Results text on strand inversion and Figure 3E caption on the rearranged backbone hydrogen-bond pattern."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Tuinstra pages 5058-5059 (Results and Figure 3 caption) and IUPAC pages 1638-1640 were re-read; restraint lists, SI Table S1/Figure S1 and deposited ensembles were not examined.",
      "The hydrogen-bond patterns are structural-model assignments from restrained ensembles, not per-bond measurements, energies or interconversion rates.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-dilute-electrolyte-screening-ddx4-demixing",
    "kind": "method",
    "statement": "Interpret the NaCl dependence of the fitted Flory-Huggins enthalpy for Ddx4N1 cloud points with the equilibrium screened-potential model: Nott represent the ionic interaction of two single charge groups by a potential proportional to exp(-r/rd)/(epsilon_r r), with rd the Debye length set by epsilon_r, RT and I = [NaCl], and fit a condensed-phase relative permittivity of 45 +/- 13 and charge spacing of 13 +/- 2 angstrom. The Debye-Hueckel record supplies the ion-atmosphere thickness that depends on electrolyte concentration.",
    "scope": "Interpretation of one L3 condensate record's conditional phase-diagram fit with one L2 equilibrium screening model; fitted parameters remain source-conditional.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
        "role": "method",
        "note": "Re-read Supplemental Section S6 pages 23-25 (Equations S15-S20) and main-text Figure 3D thermal-cycle paragraph."
      },
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
        "role": "method",
        "note": "Re-read main-text Results 'Ddx4N1 Organelles Are Stabilized Predominantly by Electrostatic Interactions' and Figure 4 caption."
      },
      {
        "sourceId": "debye-huckel1923-electrolytes",
        "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations",
        "role": "supports",
        "note": "Re-read from the recorded OCR scan (umlauts restored): the characteristic length as ion-atmosphere thickness depending on electrolyte concentration."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Nott SI pages 23-25, the main-text Figure 4 Results/caption and Debye-Hueckel printed page 204 (OCR scan) were re-read; cloud-point raw data, the Figure S4 detection procedure and Shammas et al. 2011 were not read, and no fit is reproduced.",
      "Nott apply the screened form inside a concentrated protein condensate with a fitted permittivity, outside the dilute point-ion limit stated for the L2 model; the fitted permittivity and spacing are conditional parameters, not measured molecular forces.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "nott2015-ddx4-thermal-demixing"
    ]
  },
  {
    "id": "B-gibbs-coexistence-ddx4-binodal",
    "kind": "method",
    "statement": "Interpret the Ddx4N1 transition temperatures TP through the source Flory-Huggins binodal model, which obtains coexistence from a constrained transfer of component between phases A and B and imposes the twin conditions delta-mu1(A) = delta-mu1(B) and delta-mu2(A) = delta-mu2(B) before solving numerically for TP from fitted enthalpy and entropy. This uses the Gibbs condition that phases in free contact share the potential of every independently variable component.",
    "scope": "Interpretation of one L3 condensate record's binodal model with the L2 bulk coexistence condition; the model is the source's conditional fit.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
        "role": "method",
        "note": "Re-read Supplemental Section S6 pages 23-24 (Equations S15-S18 and the numerical TP solution)."
      },
      {
        "sourceId": "gibbs1878-equilibrium-author-abstract",
        "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
        "role": "supports",
        "note": "Re-read printed page 443 (OCR glyphs corrected): equality of temperature, pressure and component potentials for masses in contact."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Nott SI pages 23-24 and Gibbs printed pages 443 and 445-446 were re-read; Flory 1942/Huggins 1942 and the numerical solution were not examined, and no phase diagram is recomputed.",
      "Gibbs's stated bulk conditions exclude gravity, electrical effects and capillary tension, whereas the Ddx4 droplets are finite, charged and interfacial; coexistence is a premise of the fit, not a measured equilibrium.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "nott2015-ddx4-thermal-demixing"
    ]
  },
  {
    "id": "B-phase-regime-boundary-condensate-demixing-boundary",
    "kind": "review-finding",
    "statement": "The Ddx4 demixing/mobility/partition boundary uses the L2 phase-regime vocabulary. Nott's model separates a spinodal limit from the binodal, identifies the measured cloud point with the binodal and describes droplet condensation as nucleated; Gibbs distinguishes stability to infinitesimal change from stability to new-phase formation and defines critical phases by the vanishing difference between coexistent phases. An image or turbidity transition with cooling/heating hysteresis is therefore not by itself equilibrium criticality.",
    "scope": "Definitional dependency of one L3 observable boundary on one L2 phase-stability/criticality boundary; no critical point, barrier or rate is measured.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "gibbs1878-equilibrium-author-abstract",
        "locator": "Published pages 447-449, Equation 14, continuous-change stability and Critical phases, plus opening geometrical illustration: new-phase versus local stability and the selected fluid critical endpoint",
        "role": "supports",
        "note": "Re-read printed pages 447-448 (OCR glyphs corrected): continuous-change versus new-phase stability and critical phases."
      },
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 938-940, Figure 3A-D and Results Ddx4 Disordered Regions Reversibly Form Structures In Vitro; Supplemental Figure S4 page 5 and Section S6 pages 21-25: construct distinction, thermal demixing, image-variance transition detection and conditional phase-diagram model",
        "role": "supports",
        "note": "Re-read Supplemental page 23 spinodal/binodal/cloud-point passage and main-text Figure 3D thermal cycle."
      },
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
        "role": "supports",
        "note": "Re-read main-text statement that droplets condense via a nucleated mechanism under the Flory-Huggins description."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Gibbs printed pages 447-448, Nott SI page 23 and the cited main-text passages were re-read; no cloud-point data, image-variance detection or hysteresis loop was re-analysed.",
      "Gibbs's critical-phase statement concerns coexistent fluid phases; Nott does not locate a critical point, and neither source supplies a nucleation barrier or lifetime.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-precession-frequency-ratio-bpti-mrd-context",
    "kind": "method",
    "statement": "Read the supercooled BPTI relaxation dispersion R1(omega0) on a frequency axis given by the 2H (2.5-92 MHz) or 17O (2.2-81 MHz) resonance frequency at each of 8-9 magnetic field strengths, with omega0 = 2*pi*nu0 entering the spectral density. That axis relies on Larmor precession f = (gamma/2*pi)*B0, under which nuclei in one field precess at frequencies in the ratio of their gyromagnetic-ratio magnitudes, as stated for the neutron/199Hg comparison and its NMR-in-water field calibration.",
    "scope": "Measurement-principle dependency of one L3 NMR relaxation preparation on one L1 precession-frequency definition; no relaxation theory is supplied by the L1 record.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
        "role": "method",
        "note": "Re-read Materials and Methods section 2.2: field strengths, 2H/17O resonance-frequency ranges and same-isotope water reference."
      },
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
        "role": "method",
        "note": "Re-read section 3.1, Equations 2-3: R1 as a function of the angular resonance frequency."
      },
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
        "role": "method",
        "note": "Re-read section 5.1 opening: BPTI R1 measured as a function of resonance frequency."
      },
      {
        "sourceId": "afach2014",
        "locator": "arXiv:1410.8259v2 pages 1-3, Sections 1-2 and Equations 1-4: quoted external references, PSI 2012 preparation and positive Ramsey-frequency ratio",
        "role": "method",
        "note": "Re-read: Larmor precession frequencies f = (gamma/2pi)B0 for neutrons and 199Hg in a common field, the ratio R = fn/fHg and field calibration by NMR in water."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Afach pages 1-3 and Modig sections 2.2, 3.1 and 5.1 were re-read; field-cycling hardware, raw R1 data and the quadrupolar relaxation theory references were not read.",
      "The L1 record supplies only the precession-frequency/field relation; quadrupole coupling, spectral-density models, exchange regimes and hydration interpretations are separate source models, and no gyromagnetic ratio of 2H or 17O is taken from the L1 sources.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "modig2004-bpti-supercooled-mrd"
    ]
  },
  {
    "id": "B-liquid-correlation-boundary-hydration-mrd-boundary",
    "kind": "review-finding",
    "statement": "The MRD interpretation boundary uses the observable distinctions of the L2 liquid-correlation boundary: orientational decorrelation characterized by Legendre-rank correlation functions, with NMR measuring the rank-2 time, versus exchange or residence times and static spatial correlations. Modig separate orientational randomization by protein tumbling from exchange with bulk water (residence time tau_W) and contrast rank-1 and rank-2 rotational correlation times, so fitted correlation times do not image spatial water order.",
    "scope": "Definitional dependency of one L3 relaxation-interpretation boundary on one L2 liquid observable boundary; no bulk-water simulation result is imported.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
        "role": "supports",
        "note": "Re-read section 3.1: orientational randomization by rotational diffusion versus exchange with bulk water."
      },
      {
        "sourceId": "modig2004-protein-peptide-hydration",
        "locator": "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts",
        "role": "supports",
        "note": "Re-read the oxytocin results paragraph stating that NMR measures the rank-2 (P2) correlation time and relating it to the rank-1 time."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Modig section 3.1 and the oxytocin rank-1/rank-2 paragraph were re-read; the Laage-Hynes 2006 source of the L2 C_n definition could not be retrieved through its recorded ResearchGate URL in this session and was not re-read.",
      "No SPC/E trajectory, jump mechanism or bulk-water time is imported as BPTI hydration evidence; the protein-hydration scope's exclusion of liquid-organization evidence remains intact.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-ionic-charge-state-electrochemical-potential",
    "kind": "review-finding",
    "statement": "The electrochemical-potential bookkeeping mu~_B = mu_B(standard) + RT ln a_B + z_B F phi is defined with the charge number of an ion, z_B = Q_B/e, i.e. the species charge as a signed integer multiple of the elementary charge, which is the q = z*e convention of the L2 ion record. The same Green Book passage identifies mu~_B as the ion's partial molar Gibbs energy and states transfer equilibrium as equal mu~_B in all phases.",
    "scope": "Definitional dependency of one L3 thermodynamic bookkeeping convention on one L2 charge-state convention.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
        "role": "supports",
        "note": "Re-read the original IUPAC PDF printed pages 70-71: charge-number row, electrochemical-potential row and note 11."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Green Book pages 70-71 were re-read; the sources of the L2 charge-state record (Korobov 2017, Rau 2020, Debye-Hueckel 1923) were not re-read for this bridge.",
      "The net species charge number is distinct from partial or effective screened charges, and the source notes that single-ion activity and inner potential are not separately measurable.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-gibbs-equilibrium-reaction-gibbs-energy",
    "kind": "review-finding",
    "statement": "The L3 reaction Gibbs conventions use Gibbs's thermodynamic potentials: the Green Book writes G = H - TS, defines mu_B = (dG/dn_B) at fixed T, p and other amounts (equivalently from U, H or A) and the affinity A = -(dG/dxi) at fixed p, T = -sum(nu_B mu_B), with the equilibrium constant equal to Q when the affinity is zero. Gibbs defines a substance's potential as the energy increase per added quantity at fixed entropy and volume, the component potential of the L2 record.",
    "scope": "Definitional dependency of one L3 reaction-thermodynamics convention on one L2 equilibrium/potential definition.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.11, pp. 56-57: Gibbs energy G=H-TS, partial molar quantities, chemical potential as partial molar Gibbs energy and note 11",
        "role": "supports",
        "note": "Read printed pages 56-57 of the original IUPAC PDF: Gibbs energy row, partial molar quantity, chemical potential row and note 11."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "supports",
        "note": "Re-read printed page 58: affinity row and note 18 (K equals Q when affinity is zero)."
      },
      {
        "sourceId": "gibbs1878-equilibrium-author-abstract",
        "locator": "Published pages 443-445, mass-contact and osmotic passages and Equations 5-13: hydrostatic bulk assumptions, component potential, constraints and thermodynamic potentials",
        "role": "supports",
        "note": "Re-read printed page 443 (OCR glyphs corrected): definition of the potential of a substance in a homogeneous mass."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Green Book pages 56-58 and Gibbs printed page 443 were re-read; standard-state pages 60-62 were not re-read for this bridge.",
      "Gibbs's potential is an energy per chosen amount of substance under hydrostatic bulk assumptions; biochemical apparent constants, proton/metal conventions and standard states need their own specification.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-ionic-charge-state-nucleotide-permeability",
    "kind": "method",
    "statement": "Interpret the selected myristoleate:GMM vesicle nucleotide leakage by the signed net charge state of each solute species at pH 8.5: Mansy report negligible 24 h leakage of AMP, ADP and ATP (2, 3 and 4 negative charges), slow AMP/ADP permeation with 3 mM Mg2+ attributed to complexes of reduced net charge, and readier permeation of phosphorimidazolides bearing a single negative charge. These labels use the ion charge-state convention (q = z*e, negative z for anions).",
    "scope": "Interpretation of one L3 permeability record with one L2 charge-state convention; size, polarity and membrane composition remain co-varying factors.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "mansy2008-model-protocell",
        "locator": "Nature 454(7200), 122-125, nucleotide-permeation main text and Figure 3A-D; Methods: Nucleotide permeability; Supplementary Information pages 2-3 Figures S1-S2, page 5 Figure S4 and pages 9-10 Supporting Online Text",
        "role": "method",
        "note": "Main-text nucleotide-permeation paragraphs, Figure 3 caption and Methods re-read; SI pages 2-5 and 9-10 not re-read."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.13, pp. 70-71: pH, electrochemical potential and note 11 on phase transfer equilibrium",
        "role": "supports",
        "note": "Re-read printed page 70: charge number of an ion, z_B = Q_B/e."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Mansy's main-text nucleotide-permeation paragraphs, Figure 3 caption and Methods and Green Book page 70 were re-read; SI permeation data, protonation equilibria and the cited Mg2+-complex references were not read.",
      "The charge numbers are source-assigned dominant protonation/complexation states at pH 8.5, not measured partial or effective charges, and the source also invokes molecular size and polarity.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "mansy2008-nucleotide-permeability"
    ]
  },
  {
    "id": "B-ionic-charge-state-prywes-esi-ms",
    "kind": "method",
    "statement": "Read the 2-MeImpAGC identity check (negative-mode ESI/MS, m/z = 996) as a mass-to-charge observable of a negatively charged molecular ion. Converting it to a molecular mass requires the ion's assigned signed charge number, the charge-state bookkeeping of the L2 ion record, which notes that a mass-to-charge readout with an assigned charge state does not independently determine both. The source prints the m/z value but not the assigned charge state or ion formula.",
    "scope": "Measurement-principle dependency of one L3 preparation readout on one L2 charge-state convention; no mass is inferred here.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "prywes2016-helper-rna-copying",
        "locator": "eLife 5:e17756, Figure 1a; Materials and methods: Chemicals and Activated monomer and oligomer synthesis; Results first paragraph on supplied 2-methylimidazole activation",
        "role": "method",
        "note": "Re-read Materials and methods 'Activated monomer and oligomer synthesis' (Europe PMC full text): HPLC purification, negative-mode ESI/MS m/z = 996 and UV concentration."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the Prywes activation Methods paragraph was re-read; no mass spectrum, instrument settings or charge-state assignment is printed, and the L2 record's own sources were not re-read for this bridge.",
      "The bridge identifies the readout principle only; it does not assert which charge state produced m/z 996 or verify the product identity.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "prywes2016-activation-preparation"
    ]
  },
  {
    "id": "B-absorption-coefficient-dna-cage-concentration",
    "kind": "method",
    "statement": "Read the Zhao DNA-origami cage concentration from A260 with the adopted extinction coefficient 0.109 nM^-1 cm^-1, and conjugate concentrations from A260/A280 with supplied coefficients. This relies on the absorption-coefficient convention: the Green Book defines the linear decadic absorption coefficient a = A10/l (m^-1) and molar coefficient epsilon = a/c = A10/(c l), with the Beer-Lambert form for internal transmittance, the length-reciprocal coefficient that the L2 record keeps separate from dimensionless transmission and absorptance.",
    "scope": "Measurement-principle dependency of one L3 characterization readout on one L2 optical coefficient definition.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "zhao2016-dna-nanocaged-enzymes",
        "locator": "Published pages 2-3, Results Enzyme encapsulation strategy/Characterization of enzyme encapsulation and Figures 1-2; Supplementary Figures 1-12, Tables 1-3 and Notes 1-2 pages S62-S68: morphology, labeling, colocalization, copy-number inference and concentration calibration",
        "role": "method",
        "note": "Re-read Supplementary Note 1 pages S66-S67: A260/A280 quantification and the 0.109 nM^-1 cm^-1 cage extinction coefficient."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.7, pp. 36-37: transmittance, absorptance, decadic and napierian absorbance, linear and molar absorption coefficients and notes 17-21 on the Beer-Lambert form",
        "role": "method",
        "note": "Read printed pages 36-37 of the original IUPAC PDF: absorbance and absorption-coefficient rows and notes 17-21."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Zhao SI pages S66-S67 and Green Book pages 36-37 were re-read; the IDT-supplied coefficients, gel-extraction losses and Nanodrop calibration were not examined, and pope1997/hanssen2001 behind the L2 record were not re-read for this bridge.",
      "The conversion assumes negligible scattering and luminescence and a valid adopted coefficient for the assembled cage; it gives concentration, not cage occupancy or enzyme activity.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "zhao2016-cage-characterization"
    ]
  },
  {
    "id": "B-induced-dipole-response-ms2-iscat-readout",
    "kind": "method",
    "statement": "Read each MS2 assembly trace through the interference term of reflected and scattered waves: neglecting the dim scattered intensity, the normalized intensity I/Ir - 1 is proportional to the particle's total polarizability, approximately a protein plus an RNA component, so after calibration with RNA strands and wild-type virions the intensity is approximately linear in bound protein number. The polarizability term relies on the induced-dipole response of the L2 record (p proportional to the applied field for an induced dipole).",
    "scope": "Measurement-principle dependency of one L3 optical assembly readout on one L2 induced-dipole definition; no molecular polarizability value is transferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "garmann2019-ms2-assembly-traces",
        "locator": "PNAS 116(45), 22489: Image Intensity and Microscope Calibration explanatory passages only",
        "role": "method",
        "note": "Re-read the Image Intensity and Microscope Calibration passages (PMC full text)."
      },
      {
        "sourceId": "likharev2022-dipoles",
        "locator": "Section 3.1, Equations 3.1-3.9 and 3.13-3.17: localized neutral charge distribution, origin-independent electric dipole, field energy, induced-dipole one-half factor and fixed-pair coupling",
        "role": "supports",
        "note": "Re-read the Section 3.1 passage distinguishing a fixed dipole from a field-induced dipole p proportional to E_ext."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Garmann's Image Intensity/Microscope Calibration passages and Likharev Section 3.1 were re-read; Garmann SI Figure S2, Ref. 15 and the optical phase model were not examined.",
      "The particle polarizability at the optical frequency is a coarse-grained response of a protein/RNA assembly, not the static polarizability tensor of a single molecule; linearity and calibration are source assumptions.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "garmann2019-ms2-optical-assembly-context"
    ]
  },
  {
    "id": "B-ion-atmosphere-hammerhead-high-salt",
    "kind": "method",
    "statement": "Interpret the 2 M NaCl plus 1 mM divalent-metal cleavage comparison with the electrostatic ion-atmosphere picture: Boots note that 2 M NaCl globally folds the ribozyme and can compete with divalent-ion binding, citing Draper 2004; Draper describes diffuse ions as an ion atmosphere following the RNA electrostatic field, with Mg2+ and K+ competing through long-range electrostatic interactions, and contrasts solution counter-ion excess with an ionic crystal, the ion-atmosphere versus lattice distinction of Debye-Hueckel.",
    "scope": "Interpretation of one L3 hammerhead rate record's high-salt arm with the L2 ion-atmosphere model, mediated by one added authoritative review; no catalytic site or rate mechanism is inferred.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "boots2008-hammerhead-ions",
        "locator": "RNA 14(10), 2212-2222, Results: Cleavage activity with different metal ions and globally folded HHRz; Table 1 with footnotes a-c; Discussion on high-salt comparison",
        "role": "method",
        "note": "Re-read the Results paragraph on cleavage in globally folded HHRz (2 M NaCl) and the Discussion paragraph on monovalent-divalent competition."
      },
      {
        "sourceId": "draper2004-ions-rna",
        "locator": "RNA 10(3), 335-343, sections Ion interactions with RNA negative charges and Diffuse ions with Figures 2-3 captions: crystal-versus-solution counter-ion arrangement, polyelectrolyte ion retention and the diffuse ion atmosphere",
        "role": "method",
        "note": "Read in this session (PMC HTML): crystal-versus-solution counter-ion arrangement, polyelectrolyte retention and diffuse ions."
      },
      {
        "sourceId": "draper2004-ions-rna",
        "locator": "RNA 10(3), 335-343, section Interdependence of RNA-associated ions: Mg2+/K+ competition through long-range electrostatic interactions rather than shared discrete sites",
        "role": "method",
        "note": "Read in this session: Mg2+/K+ competition through long-range electrostatic interactions."
      },
      {
        "sourceId": "debye-huckel1923-electrolytes",
        "locator": "Printed pages 204-205, Section 10: statistical ion-atmosphere order versus a literal crystal lattice and concentrated-solvent limitations",
        "role": "supports",
        "note": "Re-read printed page 205 from the OCR scan (umlauts restored): opposite-charge excess around each ion compared with an NaCl-type lattice, ordered by thermal equilibrium."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Boots's high-salt Results/Discussion paragraphs, Draper's named sections and Debye-Hueckel printed pages 204-205 were re-read; Misra and Draper 2002, NLPB calculations and Boots Table 1 values were not re-analysed. Draper does not cite Debye-Hueckel in the read passages; identifying the two ion-atmosphere descriptions is an explicit bridge inference.",
      "At 2 M NaCl the dilute linearized Debye-Hueckel potential is outside its stated validity; the shared element is the ion-atmosphere concept, which neither identifies a catalytic metal site nor explains the >4600-fold divalent-ion rate differences.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ],
    "contextIds": [
      "boots2008-hammerhead-cleavage-context"
    ]
  },
  {
    "id": "B-reaction-path-model-activation-gibbs-convention",
    "kind": "method",
    "statement": "Apply the transition-state activation convention k = kappa (kB T/h) exp(-Delta-G(activation)/RT) only with its declared threshold and transmission assumptions: the Green Book distinguishes an electronic barrier height from a threshold energy that may or may not include zero-point corrections, defines E0 as the zero-point-level difference below which no reaction is assumed and often sets kappa = 1. The L2 reaction-path model is a bounded counterexample in which H-C-OH rearranges at 11 K by hydrogen tunnelling through the barrier.",
    "scope": "Interpretation-boundary dependency of one L3 kinetic convention on one L2 reaction-path/tunnelling model; no transmission coefficient is assigned to any L3 reaction.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.12, pp. 64-66: Arrhenius activation energy; activation quantities and note 18",
        "role": "method",
        "note": "Re-read printed pages 64-66: note 9 on threshold energy and zero-point corrections, note 18 with the transmission coefficient and kappa = 1 assumption."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., section 2.12, p. 67: note 18 continued, bimolecular transition-state expression with transmission coefficient and threshold energy as zero-point-level difference",
        "role": "method",
        "note": "Read printed page 67: note 18 continued, E0 as zero-point-level difference below which no reaction is assumed."
      },
      {
        "sourceId": "schreiner2008-hcoh-tunneling",
        "locator": "Abstract",
        "role": "method",
        "note": "Publisher abstract read in this session; the paywalled page 908 tunnelling analysis and Online Methods were not re-read."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Green Book pages 64-67 and the Schreiner 2008 publisher abstract were re-read; Schreiner's page 908 tunnelling analysis, Online Methods and supplement were not re-read in this session.",
      "The H-C-OH case is a cryogenic matrix-isolated unimolecular reaction, not an enzyme or solution reaction; it bounds use of the convention without supplying a transmission coefficient or tunnelling contribution for any L3 assay.",
      "A described definition, measurement or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity."
    ]
  },
  {
    "id": "B-tonic-ifn-stat1-immune-response-scope",
    "kind": "review-finding",
    "statement": "In the reviewed mouse fibroblast cultures a constitutively secreted type-I interferon maintains STAT1 expression, and restoring STAT1 in receptor-deficient cells restores tested IFNgamma-induced gene responses and improves protection against a cytopathic virus. This cytokine-signalling case is organized under the reviewed cellular immune-response scope alongside the separately measured necrotic IL-1alpha and primed inflammasome preparations; shared organization does not make the preparations interchangeable or establish one mechanism across them.",
    "scope": "Membership of the gough2010 mouse-fibroblast cytokine-signalling case in the reviewed cellular immune-response scope; cultured fibroblasts only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "gough2010-tonic-ifnb-stat1",
        "locator": "Results and Figures 1-5: c-Jun/IFNAR-deficient fibroblasts, conditioned medium, neutralizing antibodies and IFNbeta RNAi",
        "role": "supports",
        "note": "Re-read in this session: constitutive fibroblast type-I interferon secretion maintaining basal STAT1 expression."
      },
      {
        "sourceId": "gough2010-tonic-ifnb-stat1",
        "locator": "Results and Figures 6-8: STAT1 re-expression and EMCV protection; Materials and Methods: cells, conditioned media, PCR, EMSA and viral protection assays",
        "role": "supports",
        "note": "Re-read in this session: STAT1 re-expression restoring IFNgamma-induced gene expression and enhancing protection from virus-induced lysis."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the two already-declared Results passages of the fibroblast source were re-read in this session; the necrotic-lysate and inflammasome sources that the target scope admits were not re-read and are not cited here, and no supplementary material or blot was replayed.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; nothing here shows that fibroblast cytokine signalling is needed for any other admitted immune preparation."
    ]
  },
  {
    "id": "B-nk-plasticity-immune-response-scope",
    "kind": "review-finding",
    "statement": "In the reviewed mouse adoptive-transfer preparations, mature NK cells become hyporesponsive to receptor stimulation after transfer into MHC-class-I-deficient hosts and more responsive in MHC-class-I-sufficient recipients, with the change present in cells that have not divided, and the downward-reset hosts fail to reject MHC-class-I-deficient grafts. This conditional recognition and effector case is organized under the reviewed cellular immune-response scope without being merged with its other admitted preparations.",
    "scope": "Membership of the joncker2010 mouse NK-transfer case in the reviewed cellular immune-response scope; splenocyte transfer into irradiated recipients only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "joncker2010-nk-resetting",
        "locator": "Results and Figures 1-3: congenic WT/MHC-I-deficient splenocyte transfers, receptor-triggered IFNgamma and target-graft rejection",
        "role": "supports",
        "note": "Re-read in this session: downward and upward resetting of receptor responsiveness and failure to reject MHC-I-deficient grafts."
      },
      {
        "sourceId": "joncker2010-nk-resetting",
        "locator": "Results on CFSE-undivided mature NK cells; Materials and Methods: mice, adoptive transfers, antibodies/flow cytometry and functional assays",
        "role": "supports",
        "note": "Re-read in this session: the responsiveness change occurring in nondividing mature NK cells."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the two already-declared passages were re-read in this session; figure images, supplementary material and flow-cytometry data were not replayed, and the other sources admitted by the target scope were not re-read.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; no surveillance guarantee or tumour or viral outcome follows from scope membership."
    ]
  },
  {
    "id": "B-cmv-tcell-function-immune-response-scope",
    "kind": "review-finding",
    "statement": "In the reviewed cohorts, CMV-specific T-cell functional diversity measured by five simultaneous activation readouts is not reduced in usual older United Kingdom participants relative to young participants, while a separately selected oldest-old sample shows a lower polyfunctionality index and the index tracks response size and target-protein specificity. This human effector-function case is organized under the reviewed cellular immune-response scope and remains a cross-sectional ex-vivo observation within it.",
    "scope": "Membership of the bajwa2016 human ex-vivo CMV functional case in the reviewed cellular immune-response scope; cross-sectional peripheral-blood samples only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "bajwa2016-cmv-tcell-function",
        "locator": "Results and Figures 1-2; Discussion: preserved young/older UK polyfunctionality, lower oldest-old Italian index and survivor/cohort limits",
        "role": "supports",
        "note": "Re-read in this session: preserved functional diversity in older United Kingdom participants, lower index in the oldest-old sample and the response-size association."
      },
      {
        "sourceId": "bajwa2016-cmv-tcell-function",
        "locator": "Methods and Tables 1-2: UK and Italian cohorts, CMV peptide pools, intracellular cytokine/degranulation assays and polyfunctionality index",
        "role": "supports",
        "note": "Re-read in this session: the five simultaneous activation readouts that define the functional-diversity observable."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the two already-declared passages were re-read in this session; the mouse chronic-infection source of this component could not be re-read because the publisher page requires authentication, so it is not cited here.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; cross-sectional cohort comparisons carry no individual trajectory and no clinical protection claim."
    ]
  },
  {
    "id": "B-macrophage-spectrum-immune-response-scope",
    "kind": "review-finding",
    "statement": "In the reviewed human monocyte-derived macrophage panel, transcriptional programs under twenty-eight stimuli including pattern-recognition-receptor ligands, cytokines and metabolic cues extend beyond a single bipolar activation axis. This stimulus-dependent recognition and signalling case is organized under the reviewed cellular immune-response scope, where it stays an in-vitro expression measurement and is not equated with the other admitted recognition or effector preparations.",
    "scope": "Membership of the xue2014 human macrophage activation panel in the reviewed cellular immune-response scope; donor monocyte-derived cultures only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "xue2014-macrophage-spectrum",
        "locator": "Results and Figure 1: human monocyte-derived macrophages, 28 activation conditions and spectrum representation",
        "role": "supports",
        "note": "Re-read in this session: the twenty-eight-stimulus panel including pattern-recognition-receptor ligands and the spectrum beyond the bipolar axis."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results and Figure 1 passage was re-read in this session; the Experimental Procedures, the network analysis, the trained-immunity sources of this component and the sources of the target scope were not re-read.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; expression programs in culture establish no tissue function and no causal network."
    ]
  },
  {
    "id": "B-mtor-sasp-output-sasp-scope",
    "kind": "review-finding",
    "statement": "In the reviewed senescent human fibroblast preparations, rapamycin selectively lowers secretion of named inflammatory proteins and the translational efficiency of IL1A, while the damage-response preparation of the same scope reports damage-associated interleukin-6 secretion that depends on DNA-damage-response proteins. The mTOR-sensitive output is organized under the reviewed secretory-phenotype scope as one preparation-dependent case, and its selectivity is not a property of every senescent secretome.",
    "scope": "Membership of the laberge2015 mTOR-sensitive secretory output in the reviewed senescence-associated secretory-phenotype scope; primary human fibroblast cultures only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "laberge2015-mtor-sasp",
        "locator": "Results: Rapamycin suppresses the SASP; Figures 1-3",
        "role": "supports",
        "note": "Re-read in this session: rapamycin lowering interleukin-6 and interleukin-8 secretion by senescent fibroblast strains, with unaffected proteins noted."
      },
      {
        "sourceId": "laberge2015-mtor-sasp",
        "locator": "Results on IL1A translation and recombinant IL1A rescue; Figures 4-5",
        "role": "supports",
        "note": "Re-read in this session: reduced IL1A translational efficiency and restoration of interleukin-6 secretion by recombinant IL1A."
      },
      {
        "sourceId": "rodier2009-ddr-senescence-secretion",
        "locator": "Primary main Results and Figures 4-5: ATM/NBS1/CHK2 depletion, IL-6 secretion and conditioned-medium invasion; Material and Methods: cells, irradiation, BrdU, ELISA, invasion and statistics",
        "role": "supports",
        "note": "Re-read in this session: the damage-associated interleukin-6 secretion of the scope's own fibroblast preparation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Selected primary Results and figure legends of both fibroblast sources were re-read in this session; supplementary tables, original blots, the in-vivo experiments and the multi-context secretome atlas of the target scope were not re-read or replayed, and the 2021 author correction to Figure 6 control labels is retained separately rather than merged into these passages.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; lowered secretion is not reversal of arrest and not rejuvenation."
    ]
  },
  {
    "id": "B-synthetic-circuit-regulatory-architecture-scope",
    "kind": "review-finding",
    "statement": "In the reviewed synthetic yeast circuits, single-cell fluorescence under a constitutively expressed activator is distributed approximately unimodally, whereas the autoregulatory circuit splits the population into two pools, and bistability enters as an inference from the accompanying mathematical model. This architecture-dependent response is organized under the reviewed regulatory-architecture and dynamics scope as one more preparation-specific feedback case, without transfer to endogenous chromatin or post-transcriptional control.",
    "scope": "Membership of the becskei2001 engineered-circuit response-distribution contrast in the reviewed regulatory-architecture and dynamics scope; inducible yeast reporter strains only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "becskei2001-positive-feedback",
        "locator": "EMBO J 20(10), 2528-2535, Results Approach and Activation/Autocatalytically expressed activator, Figures 1-4; Theoretical underpinnings and Discussion; Methods Growth conditions and microscopy, Analysis of bistability",
        "role": "supports",
        "note": "Re-read in this session through the published article on PubMed Central (PMC125456): the graded single-cell distribution, the two-pool autoregulatory distribution and the model-based bistability inference."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The published article text was re-read in this session through PubMed Central rather than the course-archive PDF recorded as the source location; supplementary data, plasmid sequences, raw fluorescence images and the noise model were not reviewed, and the source's inconsistent plasmid labels remain unresolved.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; a reporter distribution is not a transcript count and the modelled bistability is not an independent measurement."
    ]
  },
  {
    "id": "B-atp-heterogeneity-cell-state-scope",
    "kind": "review-finding",
    "statement": "In the reviewed bacterial culture, noise-corrected single-cell reporter ratios give a mean ATP concentration of about 1.54 millimolar with a standard deviation of about 1.22 millimolar, and the source reads this as individual cells holding very different intracellular ATP concentrations. This measured metabolite-availability variation is organized under the reviewed cell-state-dependence scope, which separately admits pH, kinase state and nutrient conditioning, and a reporter-derived concentration remains distinct from flux, adenylate ratio or energy charge.",
    "scope": "Membership of the yaginuma2014 single-cell ATP distribution in the reviewed cell-state-dependence-of-biochemical-rates scope; glucose-limited continuous culture of the reporter strain only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "yaginuma2014-single-cell-atp",
        "locator": "Scientific Reports 4,6522, Results Distribution of ATP concentration in E. coli population, Figure 4 with 216-cell and eight-zero-assignment caption, Discussion; Methods Microscopic observation and Cell growth conditions",
        "role": "supports",
        "note": "Re-read in this session: the corrected mean and standard deviation of estimated ATP concentration and the source reading of cell-to-cell difference."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared distribution passage was re-read in this session; the supplementary note, supplementary methods, calibration data and source images were not acquired or replayed, so the correction pipeline behind the quoted statistics was not independently checked.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; the distribution does not show that ATP level governs any measured rate, and the source leaves the origin of the spread unidentified."
    ]
  },
  {
    "id": "B-break-repair-persistent-damage-arrest",
    "kind": "review-finding",
    "statement": "In the reviewed human-cell assay, outcomes of a nuclease-induced double-strand break are assigned to end-joining or donor-dependent homologous repair, and the reported share of breaks available for donor-dependent repair depends on probe design, drug selection and donor template. The fibroblast senescence record uses that repaired-versus-unrepaired distinction when it separates transient low-dose damage signalling from persistent foci and durable arrest, while neither record measures the other's endpoint.",
    "scope": "Definitional use of the double-strand-break repair-outcome distinction by the reviewed fibroblast persistent-damage arrest record; engineered-break repair assays and irradiated fibroblast preparations remain separate acquisitions.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "zaboikin2017-dna-repair-assays",
        "locator": "PLOS ONE 12(1),e0169931, PDF pages 3 and 5 Cells/Transfection and selection; pages 15-21 F8-S2 HRMA/TaqMan Results, Figures 4-6, Measurement of true HDR and Table 6",
        "role": "supports",
        "note": "Re-read in this session: assignment of break outcomes to end-joining or donor-dependent repair and the approximately 43 percent donor-dependent share in the selected condition."
      },
      {
        "sourceId": "rodier2009-ddr-senescence-secretion",
        "locator": "Primary main Introduction paragraph on the DNA-damage response: ATM, 53BP1, gammaH2AX, CHK2, NBS1 and p53, and double-strand breaks that cannot be repaired leading to constitutive damage signalling and senescence arrest",
        "role": "supports",
        "note": "Newly read passage of an existing source: the source's own definitional framing of irreparable double-strand breaks behind its persistent-foci and arrest readouts."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The repair-assay Results pages and the senescence source's introductory framing were read in this session; whole-article sequencing, the other cell lines, supplementary appendices and code of the repair source were not reviewed, and no figure was digitised or refitted.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity; the repair fractions are not counts of all breaks or of endogenous lesions, and nothing here establishes that repair failure produces the arrest."
    ]
  },
  {
    "id": "B-ap1-golgi-carrier-chromatophore-import",
    "kind": "method",
    "statement": "The chromatophore proteomics source proposes transit-peptide-mediated trafficking through the Golgi on the basis of putative adaptor-binding sites followed by a predicted transmembrane helix, and states that the processing peptidase and the sorting or fusion steps remain unidentified. That model is interpreted with the yeast measurement in which deleting an adaptor subunit removes cargo recovery at the maturation transition and the adaptor is read as mediating intra-Golgi recycling; the yeast result constrains the model's plausibility only and supplies no chromatophore measurement.",
    "scope": "Interpretive dependence of the proposed chromatophore import model on the yeast adaptor-dependent Golgi recycling measurement; isolated chromatophore N-terminal proteomics and engineered yeast cargo imaging remain separate preparations.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "oberleitner2022-chromatophore-processing",
        "locator": "Plant Physiology 189(1), 152-164, Results Identification of N-termini, processing of crTP proteins and other nucleus-encoded proteins; Figures 1 and 3-5; Discussion N-terminal processing/model; Methods isolation, HUNTER and mass-spectrometric identification",
        "role": "method",
        "note": "Re-read in this session: the adaptor-binding-site observation, the proposed Golgi trafficking model and the explicit statement that the processing peptidase remains unknown."
      },
      {
        "sourceId": "casler2019-golgi-cargo",
        "locator": "JCB 218(5), 1582-1601, Results Visualizing behavior during maturation and Probing mechanism between cisternae; Figures 7-8; Discussion mechanism of soluble-cargo recycling; Methods FRAP",
        "role": "method",
        "note": "Re-read in this session: loss of cargo recovery in the adaptor-deletion strain and the intra-Golgi recycling reading of the adaptor."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The declared Results and Discussion passages of both sources were re-read in this session; the chromatophore mass-spectrometry raw data, the yeast image series and both supplements were not replayed, and the chromatophore source's own transcriptome reference was not re-derived.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity; the yeast carrier result does not demonstrate the chromatophore route, and the proposed import model remains a hypothesis in its own record."
    ],
    "contextIds": [
      "oberleitner2022-chromatophore-n-termini"
    ]
  },
  {
    "id": "B-gcap-expression-cyclase-activity",
    "kind": "method",
    "statement": "In the reviewed retinal preparations, the expression validation reports complete loss of both guanylate-cyclase-activating proteins in the knockout and a transgene estimated at twice the endogenous level of one of them. The homogenate cyclase assay is interpreted on that frame: loss of calcium-dependent stimulation is attributed to absent activator proteins rather than to loss of the enzyme, and the transgenic restoration of calcium dependence is read as a non-dose-matched rescue of a single activator.",
    "scope": "Interpretive dependence of the guanylate-cyclase activity comparison on the expression validation of the same mouse lines; retinal homogenate and outer-segment extracts only.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "mendez2001-gcap",
        "locator": "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2",
        "role": "method",
        "note": "Re-read in this session: complete loss of expression in the knockout retinas and the transgene estimated at twice endogenous level."
      },
      {
        "sourceId": "mendez2001-gcap",
        "locator": "Results: calcium-dependent guanylate cyclase activity; Figure 3",
        "role": "method",
        "note": "Re-read in this session: absent low-calcium stimulation in knockout homogenates and full restoration of calcium dependence by the transgene."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The published primary Results passages were re-read in this session; figure images were not digitised or refitted, and raw assay data and supplementary materials were not replayed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity; the transgene is not dose-matched to wild type, so the rescue is not a single-variable control, and no end-to-end cascade transfer follows."
    ],
    "contextIds": [
      "mendez2001-gcap-enzyme"
    ]
  },
  {
    "id": "B-gcap-expression-rod-flash-response",
    "kind": "method",
    "statement": "In the reviewed suction-electrode recordings, knockout rods show larger and slower dim-flash responses and transgene-only rods do not recover the early rapid decline, although the same transgene is read elsewhere as sufficient for maximal cyclase activation. These current readouts are interpreted on the expression validation of the same lines, which reports complete loss of both activator proteins and a transgene at about twice the endogenous level of one of them, so the comparison is between unmatched expression states rather than a graded dose series.",
    "scope": "Interpretive dependence of the dark-adapted single-rod current comparison on the expression validation of the same mouse lines; perfused retinal pieces at 35 to 37 degrees only.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "mendez2001-gcap",
        "locator": "Results: targeted GCAP1/GCAP2 deletion and expression; Figures 1-2",
        "role": "method",
        "note": "Re-read in this session: the knockout expression loss and the twofold transgene estimate that frame the current comparison."
      },
      {
        "sourceId": "mendez2001-gcap",
        "locator": "Results: altered rod flash sensitivity and kinetics; Figures 4-5 and Table 1",
        "role": "method",
        "note": "Re-read in this session: the transgene not being sufficient for the rapid feedback while remaining capable of maximal cyclase activation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The published primary Results passages and Table 1 text were re-read in this session; single-photon amplitudes rest on the source's mean-variance scaling, and raw currents, figure images and supplementary material were not replayed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity; the source itself reports variable transgene expression between cells, and no complete gain or noise transfer function follows."
    ],
    "contextIds": [
      "mendez2001-gcap-current"
    ]
  },
  {
    "id": "B-dsrna-interference-shrna-depletion",
    "kind": "method",
    "statement": "The fibroblast damage and secretion preparation depletes damage-response proteins with lentivirally expressed short hairpin RNAs and reads the resulting loss of cytokine response against a control hairpin. That readout relies on the sequence-directed double-stranded-RNA interference principle reported in the worm study, where double-stranded RNA produced potent and specific interference while single strands had at most a modest effect. The worm abstract supports the principle and its reported specificity only, not the mammalian pathway, the achieved depletion level or the absence of off-target effects.",
    "scope": "Methodological reliance of the rodier2009 hairpin depletion readout on introduced double-stranded-RNA interference; human diploid fibroblast cultures with the declared hairpin constructs.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "fire1998-celegans-dsrna-interference",
        "locator": "Nature 391(6669), 806: abstract",
        "role": "method",
        "note": "Newly read passage of an existing source, read as the indexed abstract record: double-stranded RNA producing potent and specific interference relative to single strands."
      },
      {
        "sourceId": "rodier2009-ddr-senescence-secretion",
        "locator": "Primary main Results and Figures 4-5: ATM/NBS1/CHK2 depletion, IL-6 secretion and conditioned-medium invasion; Material and Methods: cells, irradiation, BrdU, ELISA, invasion and statistics",
        "role": "method",
        "note": "Re-read in this session: lentiviral hairpin constructs against the damage-response proteins and the control hairpin, with the associated cytokine readouts."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The worm source was read only as its abstract in this session, so nothing beyond what that abstract states is admitted, and its declared main-text passages were not re-read; the fibroblast passage was re-read without replaying blots, depletion quantifications or supplementary figures.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity; worm interference does not establish the mammalian silencing machinery, and reduced cytokine output under a hairpin is not by itself proof of specific protein loss."
    ],
    "contextIds": [
      "rodier2009-fibroblast-arrest-secretion"
    ]
  },
  {
    "id": "B-fed-vesicle-shear-division-minimal-cell-gap",
    "kind": "method",
    "statement": "The minimal-cell source isolates propagation in shear-shielded microfluidic chemostats because shear has been proposed to facilitate scission of primordial cells, states that mechanisms of force transduction remain to be understood, and reads its filamentation and pearling against theories and observations of abiotic vesicles. The model-protocell preparation supplies that comparison basis by reporting externally fed membrane growth into thread-like vesicles that divide into daughter vesicles upon gentle agitation; the chemical preparation constrains the interpretation without supplying any molecular mechanism for the minimized cells.",
    "scope": "Interpretive dependence of the unresolved minimal-cell division mechanism on model-membrane growth and shear-associated fission; multilamellar oleate vesicles and shear-shielded mycoplasma chemostats remain separate preparations.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "pelletier2021-minimal-cell-division",
        "locator": "Author in-press PDF, printed main pages 2-4 and 7-8, Results Dynamic propagation and Discussion; Figures 1 and 3; STAR Methods e3-e4; appended Figure S1 caption",
        "role": "method",
        "note": "Re-read in this session from the author PDF: the shear-shielding rationale citing proposed scission of primordial cells, the unresolved force transduction and the abiotic-vesicle comparison."
      },
      {
        "sourceId": "zhu2009-growth-division",
        "locator": "JACS 131(15), 5705-5713, Materials and Methods: FRET Assay and Vesicle Growth and Division; Results: Vesicle Growth and Division and Cycles of Growth and Division; Figure 2A; Supporting Information pages S2-S4 Model for Vesicle Shape Transformations",
        "role": "method",
        "note": "Re-read in this session: fed membrane growth into thread-like vesicles and their division into daughter vesicles after gentle agitation, over two cycles."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The minimal-cell source was read in this session as the author in-press PDF with text extracted locally, and the vesicle source through its published Results and Methods; no image series, supplementary video or quantitative fit was replayed, and the extracted PDF text required local reconstruction of ligatures and line breaks.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity; vesicle shape changes under applied agitation are not cell division, and nothing here shows that a physical route operates in the minimized cells."
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "B-vesicle-macromolecule-barrier-enclosure-readout",
    "kind": "method",
    "statement": "The minimal-cell preparation infers that reporter-negative forms remain membrane-bounded because they take the membrane dye yet exclude conjugated dextran from the medium. That inference uses the passive-permeability contrast measured in model fatty-acid membranes, where small solutes permeate while charged nucleotides show negligible leakage over a day because they are too large or too highly charged to cross. The principle licenses a statement about a macromolecule-impermeable boundary and not about reporter expression, metabolism or division.",
    "scope": "Methodological reliance of the dextran-exclusion enclosure readout on measured model-membrane permeability limits; prepared fatty-acid vesicles and minimized mycoplasma cultures remain separate preparations.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "mansy2008-model-protocell",
        "locator": "Nature 454(7200), 122-125, nucleotide-permeation main text and Figure 3A-D; Methods: Nucleotide permeability; Supplementary Information pages 2-3 Figures S1-S2, page 5 Figure S4 and pages 9-10 Supporting Online Text",
        "role": "method",
        "note": "Re-read in this session: negligible leakage of charged nucleotides over 24 hours and the size or charge reading of that limit."
      },
      {
        "sourceId": "pelletier2021-minimal-cell-division",
        "locator": "Author in-press PDF, printed main pages 2-4 and 7-8, Results Dynamic propagation and Discussion; Figures 1 and 3; STAR Methods e3-e4; appended Figure S1 caption",
        "role": "method",
        "note": "Re-read in this session from the author PDF, including the appended Figure S1 caption: a vesicle lacking the cytoplasmic reporter while excluding conjugated dextran."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The vesicle permeability passage was re-read as published main text and Methods, and the minimal-cell passage as the author in-press PDF with locally extracted text; no permeability trace, image series or supplementary dataset was replayed.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity; the model-membrane compositions differ from the mycoplasma membrane, and tracer exclusion does not establish that a given macromolecule is retained inside."
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "B-supplied-lipid-growth-minimal-cell-propagation",
    "kind": "method",
    "statement": "The minimal-cell source interprets the irregular propagation of its minimized strains with an extrusion-resolution model that turns on excess membrane synthesis and notes that membrane components from the medium can change mycoplasmal morphology. The in-vitro lipid source supplies the corresponding measured account: supplied purified enzymes convert externally added fatty acids into phospholipid and expand pre-existing liposomes, while the pathway does not support membrane formation without pre-existing phospholipid. The in-vitro account bounds the interpretation and measures nothing in the minimized cells.",
    "scope": "Interpretive dependence of the minimal-cell propagation morphology on the supplied-enzyme lipid-membrane growth account; reconstituted liposome preparations and minimized mycoplasma cultures remain separate acquisitions.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "pelletier2021-minimal-cell-division",
        "locator": "Author in-press PDF, printed main pages 2-4 and 7-8, Results Dynamic propagation and Discussion; Figures 1 and 3; STAR Methods e3-e4; appended Figure S1 caption",
        "role": "method",
        "note": "Re-read in this session from the author PDF: the extrusion-resolution reading that turns on excess membrane synthesis, within the Discussion of propagation morphology."
      },
      {
        "sourceId": "exterkate2018-phospholipid-synthesis",
        "locator": "Published pages 160-161, Figure 6 and Membrane Expansion by Phospholipid Biosynthesis; Fluorescent Assays for Membrane Expansion page 164: fatty-acid-triggered R18 dequenching, retained signal during PA conversion and calibration assumptions",
        "role": "method",
        "note": "Re-read in this session: fatty-acid-driven swelling and expansion of pre-existing liposomes with the expansion maintained through phospholipid conversion."
      },
      {
        "sourceId": "exterkate2018-phospholipid-synthesis",
        "locator": "Published pages 153-165, complete primary main text, all seven figures/three tables/Methods/References; complete six-page Supporting Information including Figures S1-S4/procedures: source identity, supplied enzymes/pre-existing lipids, distinct pathway/preparation annotations and future continuous feeding",
        "role": "method",
        "note": "Re-read in this session: the explicit statement that the in-vitro pathway did not support membrane synthesis without pre-existing phospholipid."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The minimal-cell Discussion was read from the author in-press PDF with locally extracted text, and the lipid passages from the published article; mass-spectrometry traces, cryo-electron-microscopy images and supplementary procedures were not replayed.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity; expansion of supplied liposomes is not cell growth, and nothing here shows which lipid route operates in the minimized cells."
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "B-transducin-pde-stage-rod-response",
    "kind": "review-finding",
    "statement": "The reviewed biochemical abstract reports that reconstituted membranes holding transducin and rhodopsin but no phosphodiesterase show light-dependent nucleotide exchange and that phosphodiesterase on unilluminated membranes can be activated by the isolated nucleotide-bound transducin subunit. The rod-response record uses exactly this catalytic stage as one of its components alongside photochemistry and cyclic-nucleotide-dependent conductance, while the two records remain separate preparations and the stage carries no electrical readout.",
    "scope": "Definitional use of the scoped transducin and phosphodiesterase biochemical stage by the reviewed rod-response synthesis; reconstituted rod-outer-segment membrane preparations only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "fung1981",
        "locator": "Abstract",
        "role": "supports",
        "note": "Re-read in this session through the indexed abstract record: reconstituted transducin and rhodopsin membranes without phosphodiesterase, and activation of phosphodiesterase by the nucleotide-bound transducin subunit."
      }
    ],
    "checkIds": [],
    "limitations": [
      "This source is admitted as an abstract only and was re-read in this session as the indexed abstract record, so no Methods detail, figure or amplification estimate is cited; the separately bound correction to the original Discussion sentence is retained in the existing records and not merged here.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity; the biochemical stage does not measure a rod membrane current and the separate preparations cannot be concatenated into one measured cascade."
    ]
  },
  {
    "id": "B-glucose-ph-cell-state-scope",
    "kind": "review-finding",
    "statement": "In the reviewed yeast preparation, intracellular pH measured as a ratiometric reporter signal converted through a standard curve drops by up to a log unit when glucose is limiting, recovers on glucose readdition, and shifts differently in sugar-sensing deletion strains, with loss of one kinase giving further acidification. This condition-dependent pH case is organized under the reviewed cell-state-dependence scope, which already admits a separate yeast pH and growth preparation, and remains an ensemble reporter estimate rather than a rate measurement.",
    "scope": "Membership of the isom2018 glucose-dependent intracellular-pH case in the reviewed cell-state-dependence-of-biochemical-rates scope; yeast strains with the declared reporter only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "isom2018-yeast-glucose-ph",
        "locator": "J. Biol. Chem. 293(7), 2318-2329, Results: Intracellular acidification in response to glucose stress; Figure 2A-C; Sugar sensors and G proteins couple carbon stress to intracellular acidity; Figure 5A-C and caption",
        "role": "supports",
        "note": "Re-read in this session: the glucose-dependent pH drop and recovery and the deletion-strain contrasts including further acidification without the kinase."
      },
      {
        "sourceId": "isom2018-yeast-glucose-ph",
        "locator": "J. Biol. Chem. 293(7), 2318-2329, Experimental procedures: Yeast strains, Plasmids, Media and Measurement of intracellular pH; Figure 2A-C including caption",
        "role": "supports",
        "note": "Re-read in this session: the ratiometric reporter readout converted to pH through a standard curve."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The declared Results and Experimental-procedures passages were re-read in this session; the upstream calibration procedure, raw fluorescence traces, supplemental tables and the structural and metabolite analyses were not acquired or replayed, and no absolute pH value is extracted from figure images.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; a measured pH shift does not establish control of any particular reaction rate or growth outcome."
    ]
  },
  {
    "id": "B-ddx4-droplet-partition-compartmentalization-scope",
    "kind": "review-finding",
    "statement": "In the reviewed in-vitro preparation, labelled single-stranded DNA is concentrated inside protein droplets while double-stranded DNA is largely excluded, and the source frames such droplets as membraneless organelles whose interior is distinct from the aqueous background. This selective partition without a membrane is organized under the reviewed compartmentalization scope beside measured nuclear-pore permeability and dynamic organelle identity, and the partition proxy neither measures a pore nor shows a common selectivity mechanism.",
    "scope": "Membership of the nott2015 droplet solute-partition case in the reviewed eukaryotic compartmentalization scope; purified disordered-protein droplets in vitro only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 943-945, Figure 7A-B and DNA-uptake Experimental Procedures Equation 1; Supplemental Figure S7 pages 10-11 and Section S8 pages 27-28, Equation S21: labeled DNA fluorescence partition proxy and outside/inside convention",
        "role": "supports",
        "note": "Re-read in this session: single-stranded DNA concentrated inside the droplets with double-stranded DNA largely excluded."
      },
      {
        "sourceId": "nott2015-ddx4-demixing",
        "locator": "Published pages 936-947, complete primary main text, all seven figures/captions and main Experimental Procedures/References: prepared constructs, cellular versus in vitro scope, hypotheses and limits of generalization",
        "role": "supports",
        "note": "Re-read in this session: the membraneless-organelle framing and the droplet interior described as distinct from the aqueous background."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The declared partition passage and the main text were re-read in this session; supplementary sections, the fitted interaction model and the partition equations were not recomputed, and the source's own annotation discrepancies between main text and supplement remain unresolved.",
      "A described definition or topic-scope dependency is not a physical creation order, a causal effect or a claim of universal necessity; a fluorescent-solute partition in purified droplets is not a cellular compartment measurement and establishes no catalytic or transport function."
    ]
  },
  {
    "id": "B-chaperone-client-account-hsf1-feedback",
    "kind": "review-finding",
    "statement": "The reviewed yeast record reads chaperone binding to a defined element of the transcription factor as repressing its activity, and reads a temperature shift as raising unfolded protein above chaperone capacity so that the chaperone is titrated away and the factor becomes active. That reading is defined with the chaperone-client account measured in purified systems, where a non-native client associates with itself in free solution and the chaperonin chamber prevents that association while folding proceeds. The purified protocols bound the concept and provide no measurement of the yeast feedback.",
    "scope": "Definitional use of the measured chaperone-client and aggregation-prevention account by the reviewed yeast heat-shock feedback record; purified chaperonin refolding protocols and yeast reporter strains remain separate preparations.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "apetri2008-chaperonin-aggregation",
        "locator": "Complete primary PMC HTML, Results Faster Folding of Rubisco in the Cis Cavity vs. Free Solution, Figure 1A-C and Methods Proteins, Protein Refolding/Rubisco and Assays: purified client, ATP protocol, activity, light scattering and gel filtration",
        "role": "supports",
        "note": "Re-read in this session: the chaperonin cavity preventing multimolecular association by confining the folding client as a monomer."
      },
      {
        "sourceId": "apetri2008-chaperonin-aggregation",
        "locator": "Complete primary PMC HTML, Introduction, Results/Discussion GroEL-GroES Cis Cavity Functions as a Passive Anfinsen Cage and all main Methods: passive interpretation, prior-work dependence and limits",
        "role": "supports",
        "note": "Re-read in this session: the passive-chamber conclusion that frames the chaperone as preventing association rather than actively folding."
      },
      {
        "sourceId": "krakowiak2018-hsf1-hsp70",
        "locator": "Results: Hsp70 transcriptional feedback is required for Hsf1 deactivation; Figure 1",
        "role": "supports",
        "note": "Re-read in this session: unfolded protein exceeding chaperone capacity and the chaperone being titrated away from the transcription factor."
      },
      {
        "sourceId": "krakowiak2018-hsf1-hsp70",
        "locator": "Results: CE2 is necessary for Hsf1 to bind to Hsp70; CE2 is sufficient to bind to Hsp70; Hsp70 affinity tunes the dynamics of the heat shock response; Figures 4-6; Materials and methods",
        "role": "supports",
        "note": "Re-read in this session: the defined element through which the chaperone binds and represses the transcription factor."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Selected Results and Discussion passages of both sources were re-read in this session; supporting figures of the chaperonin source, the supplement of the yeast source and all raw traces were not reviewed or replayed, and the yeast titration statement is the source's own reading of its reporter data rather than a direct occupancy measurement.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity; the chaperonin studied in the purified protocols is a different chaperone from the one in the yeast feedback, and no affinity or capacity value transfers between them."
    ]
  },
  {
    "id": "B-furman-metabolite-chronic-inflammation-scope",
    "kind": "review-finding",
    "statement": "The reviewed chronic low-grade inflammation scope organizes the same source's differentiated-THP-1 result, in which N4-acetylcytidine with adenine raised secreted IL-1beta and IL-18 while caspase-1 inhibition and NLRC4 silencing lowered IL-1beta, as one assay-defined inflammatory readout alongside the cohort expression strata; no single universal inflammatory scalar follows.",
    "scope": "Furman 2017 differentiated THP-1 nucleotide-metabolite exposure as organized under the reviewed chronic-inflammation topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "furman2017-inflammasome-aging-subgroups",
        "locator": "Results and Figures 2-3; Online Methods: human primary monocyte/THP-1 nucleotide-metabolite stimulation and inflammasome readouts",
        "role": "supports",
        "note": "Read passage: combined N4A and adenine raised IL-1beta/IL-18, with caspase-1 inhibitor and NLRC4 knockdown/knockout controls."
      },
      {
        "sourceId": "furman2017-inflammasome-aging-subgroups",
        "locator": "Results and Figure 1: longitudinal older high/low inflammasome-module groups and circulating IL-1beta",
        "role": "limits",
        "note": "The cohort strata are an association in older adults; the cell-line exposure is a separate preparation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-3 and Online Methods passages were re-read in PMC full text; supplementary tables, raw metabolomics and the mouse hypertension experiments were not read or replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "A cell-line metabolite exposure at the stated concentrations is not a measurement of any individual's circulating metabolite history."
    ]
  },
  {
    "id": "B-arnold-myeloid-surveillance-repair-scope",
    "kind": "review-finding",
    "statement": "The reviewed surveillance/repair allocation scope organizes the traced transition of recruited Ly6C-positive inflammatory monocytes into later anti-inflammatory macrophage-associated cells in injured mouse muscle; this sequence is read as timing- and context-dependent coordination and not as a conserved immune-resource budget or a fixed antagonism between defense and repair.",
    "scope": "Arnold 2007 notexin-injury monocyte/macrophage tracing as organized under the reviewed surveillance-repair topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "arnold2007-monocyte-myogenesis",
        "locator": "Results, Figures 1-3 and Materials and Methods: notexin injury, monocyte subset tracing and mouse sampling",
        "role": "supports",
        "note": "Read passage: bead-labelled Ly6C-positive monocytes are the recruited population and convert to Ly6C-negative cells within muscle."
      },
      {
        "sourceId": "arnold2007-monocyte-myogenesis",
        "locator": "Results, Figures 4-5 and Methods: separate human macrophage/debris and myogenic precursor co-cultures",
        "role": "limits",
        "note": "The human macrophage/myogenic co-cultures are a separate preparation from the mouse tissue tracing."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-5 and Methods passages were re-read in PMC full text; supplementary data, raw histological counts and whole-organ force recovery were not read.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Subset markers and bead labelling are not a universal M1/M2 taxonomy or a complete clonal lineage history."
    ]
  },
  {
    "id": "B-thevar-correction-anti-tnf-permeability",
    "kind": "method",
    "statement": "The adalimumab-versus-IgG permeability readout in this preparation is read out through the publisher correction, which states that the gavage used 80 mg/mL rather than 0.8 mg/mL FITC-dextran and that the permeability and ELISA experiments were performed simultaneously with statistics computed over the whole dataset; the archived main-text concentration is therefore not used as the protocol value.",
    "scope": "Thevaranjan 2017 anti-TNF old-mouse permeability readout under the 2018 correction notice",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "thevaranjan2018-permeability-correction",
        "locator": "Entire correction notice: simultaneous experiments/statistical datasets; common blinded pathology scale; 80 mg/mL FITC-dextran correction",
        "role": "method",
        "note": "Correction states the 80 mg/mL FITC-dextran value and the simultaneous permeability/ELISA datasets and shared blinded pathology scale."
      },
      {
        "sourceId": "thevaranjan2017-age-microbiota-inflammation",
        "locator": "Results and Figures 4-5; STAR Methods: co-housing recolonization, Ussing chambers, FITC-dextran, MDP reporter and conflicting adalimumab regimens",
        "role": "limits",
        "note": "The archived STAR Methods print 0.8 mg/ml and the anti-TNF dose/duration remain internally inconsistent in the primary text."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the correction notice in full and the already-declared Thevaranjan Results/Figures 4-5 and STAR Methods passages were read; supplementary files and raw permeability data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "A correction notice adds no independent replicate and does not resolve the conflicting adalimumab dose and duration reported in the primary article."
    ],
    "contextIds": [
      "orginfl-thevar-anti-tnf"
    ]
  },
  {
    "id": "B-thevar-correction-germfree-permeability",
    "kind": "method",
    "statement": "The young/old, TNF-knockout and germ-free tracer permeability and histology readouts of this preparation are read out through the publisher correction, which gives 80 mg/mL FITC-dextran, reports that permeability and ELISA panels were acquired simultaneously and states that the displayed histology panels were scored by a blinded reviewer on one common pathology scale.",
    "scope": "Thevaranjan 2017 age and germ-free permeability and histology readouts under the 2018 correction notice",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "thevaranjan2018-permeability-correction",
        "locator": "Entire correction notice: simultaneous experiments/statistical datasets; common blinded pathology scale; 80 mg/mL FITC-dextran correction",
        "role": "method",
        "note": "Correction fixes the tracer concentration and declares the shared datasets and one blinded pathology scale across panels."
      },
      {
        "sourceId": "thevaranjan2017-age-microbiota-inflammation",
        "locator": "Results and Figures 1-3: old/young, TNF knockout and germ-free mice; macrophage bacterial killing, cytokines, permeability and MDP reporter",
        "role": "limits",
        "note": "Tracer, Ussing and MDP readouts remain distinct assays; germ-free housing is a lifelong separate preparation."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the correction notice in full and the already-declared Thevaranjan Results/Figures 1-3 passages were read; Ussing-chamber traces, supplementary files and raw histology were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Shared statistical datasets across panels mean the panels are not independent replications of one another."
    ],
    "contextIds": [
      "orginfl-thevar-age-germfree"
    ]
  },
  {
    "id": "B-hall-slice-vascular-scope",
    "kind": "review-finding",
    "statement": "The reviewed vascular-organization and perfusion scope organizes the cerebellar-slice finding that selected capillaries dilate to glutamate or parallel-fibre stimulation under noradrenaline preconstriction, with the dilation reduced by EP4-receptor block and the stimulation-evoked current and dilation blocked by TTX; diameter change, perfusion and oxygen delivery remain separate properties.",
    "scope": "Hall 2014 juvenile rat cerebellar-slice capillary diameter results as organized under the reviewed vascular-perfusion topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figures 1-2; Methods: juvenile rat cerebellar slice diameter, preconstriction, oxygenation and pathway blockade",
        "role": "supports",
        "note": "Read passage: glutamate and fibre-stimulation dilations at pericyte locations, oxygen dependence, EP4 and TTX blockade."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figure 3; Methods: adult anesthetized NG2-DsRed mice, whisker-pad stimulation and vascular response timing",
        "role": "limits",
        "note": "The in-vivo whisker experiments are a separate anaesthetised preparation with its own vessel classification."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-3 and listed Methods passages were re-read in PMC full text; supplementary videos, raw images and extended data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Capillaries that did not constrict to noradrenaline were excluded, and the drug effects do not identify which cell type first receives the released messenger."
    ]
  },
  {
    "id": "B-hall-slice-pathway-invivo-attribution",
    "kind": "method",
    "statement": "The source reads its anaesthetised in-vivo capillary responses against its own slice result, in which stimulation evokes an outward pericyte current and an EP4-dependent dilation; the discussion states that activity releases messengers that act on pericytes and that capillaries dilate before penetrating arterioles, so the in-vivo attribution depends on the slice pathway identification rather than on diameter timing alone.",
    "scope": "Hall 2014 slice pharmacology as the interpretive basis of its in-vivo pericyte attribution boundary",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figures 1-2; Methods: juvenile rat cerebellar slice diameter, preconstriction, oxygenation and pathway blockade",
        "role": "method",
        "note": "Slice preparation identifies the EP4-dependent, TTX-sensitive dilation and the pericyte outward current."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Discussion: messenger release, EP4-dependent pericyte dilation and capillary-before-arteriole timing in vivo",
        "role": "method",
        "note": "Discussion states the inference from messenger release and pericyte current to the in-vivo dilation sequence."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figure 3; Methods: adult anesthetized NG2-DsRed mice, whisker-pad stimulation and vascular response timing",
        "role": "limits",
        "note": "The in-vivo comparison has its own anaesthesia, vessel-order classification and responder selection."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-3, listed Methods and the newly declared Discussion passage were read; supplementary videos and the extended data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Slice pharmacology and in-vivo timing are different preparations, and the later smooth-muscle-marker study offers a contrary attribution rather than a resolved consensus."
    ],
    "contextIds": [
      "hall2014-slice-dilation"
    ]
  },
  {
    "id": "B-tan-warmth-neural-coordination-scope",
    "kind": "review-finding",
    "statement": "The reviewed scope for neural physiological coordination organizes the photometry finding that the selected preoptic PACAP population raises calcium signals within seconds of ambient warmth, with no comparable response to cooling, to an adjacent galanin population or to unrelated stimuli; population fluorescence remains distinct from spike counts and from thermoregulatory output.",
    "scope": "Tan 2016 VMPO PACAP fiber-photometry warmth response as organized under the reviewed neural-organ-coordination topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "tan2016-warmth-coordination",
        "locator": "Results and Figure 2: ambient warmth and VMPO PACAP-neuron calcium dynamics",
        "role": "supports",
        "note": "Read passage: ambient ramps and steps raise calcium signals; cold, adjacent and unrelated-stimulus controls are negative."
      },
      {
        "sourceId": "tan2016-warmth-coordination",
        "locator": "Results and Figure 3: SSFO stimulation, rectal core temperature, tail thermography and interscapular temperature",
        "role": "limits",
        "note": "The optogenetic effector measurements are a separate acquisition with their own instruments."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 2-3 passages and the related displayed figure legends were re-read in PMC full text; supplemental files, raw sequencing and projection experiments were not reconstructed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Population calcium fluorescence is neither a single-cell spike count nor a thermoregulatory effector measurement, and intrinsic versus afferent sensing is unresolved."
    ]
  },
  {
    "id": "B-tan-warmth-effector-interpretation",
    "kind": "method",
    "statement": "The source interprets its optogenetic effector coordination by reference to the measured warm activation of the same population: brief stimulation is described as replaying that natural activation, and prior ambient-heat exposure occludes the stimulation-evoked temperature change, so the effector readout is read through the photometry result rather than as an independent effector mapping.",
    "scope": "Tan 2016 stabilized-step-function-opsin effector readouts interpreted through the measured warmth response",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "tan2016-warmth-coordination",
        "locator": "Results and Figure 3: SSFO stimulation, rectal core temperature, tail thermography and interscapular temperature",
        "role": "method",
        "note": "Stimulation is introduced as a replay of natural activation; prior heat exposure occludes the hypothermic effect."
      },
      {
        "sourceId": "tan2016-warmth-coordination",
        "locator": "Results and Figure 2: ambient warmth and VMPO PACAP-neuron calcium dynamics",
        "role": "method",
        "note": "The photometry result supplies the natural activation pattern being replayed."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 2-3 passages were read; supplemental figures, projection-specific experiments and raw telemetry were not reconstructed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Occlusion by prior warmth and coordinated effector changes do not establish a complete feedback loop, a universal set point or necessity of this population."
    ],
    "contextIds": [
      "tan2016-warmth-activity"
    ]
  },
  {
    "id": "B-brownell-lineage-repair-scope",
    "kind": "review-finding",
    "statement": "The reviewed repair and regeneration scope organizes the skin result that closure and early labelled-cell contribution persist after cutaneous denervation while two-month retention of labelled cells in the regenerated epidermis falls from about 16 percent to about 3 percent of the wound area; closure, contribution and lineage retention are therefore distinct measured outcomes.",
    "scope": "Brownell 2011 denervated-skin wound lineage results as organized under the reviewed repair-regeneration topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "brownell2011-neural-hair-niche",
        "locator": "Results and Figures 3 and 6: pre/post-label denervation, depilation, acute wound repair and two-month lineage retention",
        "role": "supports",
        "note": "Read passage: healing is complete and early contribution is similar after denervation, while two-month retention is reduced."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 3 and 6 passages were re-read in PMC full text; supplementary figures and raw quantification were not replayed, and the groups are small (n = 4 denervated mice).",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Reduced reporter expression after denervation and loss of pre-labelled descendants are different observables; incomplete nerve ablation is acknowledged by the source."
    ]
  },
  {
    "id": "B-hofer-mosaic-midget-cone-weights",
    "kind": "method",
    "statement": "The primate midget study reads its measured distribution of L and M cone input weights, about 50 percent L in the broad surround against 0 to 100 percent L in small receptive-field centres, as consistent with the separately measured patchy local variation of L and M cone proportions in human foveal mosaics; the two preparations stay distinct and no cone-selective inhibitory wiring is inferred.",
    "scope": "Crook 2011 macaque midget cone-weight distribution interpreted with Hofer 2005 human adaptive-optics mosaics",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "crook2011",
        "locator": "Discussion: center versus surround L and M cone input weights compared with Buzas et al. 2006 and the local cone mosaic",
        "role": "method",
        "note": "Discussion cites the local mosaic variability when reading the 0-100 percent centre L-weight range against the about-even surround."
      },
      {
        "sourceId": "hofer2005-cone-mosaic",
        "locator": "Results: Retinal mosaics, Arrangement of S cones, Ratio and arrangement of L and M cones; Figures 4, 6 and 9 and Tables 1-3",
        "role": "supports",
        "note": "Measured L:M ratios range from 1.1:1 to 16.5:1 across colour-normal observers with largely disordered L/M arrangement."
      },
      {
        "sourceId": "crook2011",
        "locator": "Materials and Methods, pp. 1763–1764",
        "role": "limits",
        "note": "The midget measurements are bounded to the stated macaque preparation and pharmacology."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The Crook discussion passage was newly declared and read in PMC full text, and only the already-declared Hofer Results passage was read; the Hofer supplementary optical-blur analysis and the Crook supplementary material were not read.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Human foveal mosaics near one degree and macaque near-peripheral midget recordings are different species, eccentricities and observables; neither measures the other's cone-weight map."
    ],
    "contextIds": [
      "crook2011",
      "hofer2005-local-mosaic"
    ]
  },
  {
    "id": "B-incident-light-primate-off-drive",
    "kind": "method",
    "statement": "The rod-preferring drive of this primate preparation is read out through the source's illumination specification, in which 405 and 640 nm LED output is converted into photoisomerisation rates using estimated rod and cone collecting areas, the LED emission spectra and the photoreceptor absorption spectra; the nominal background labels are therefore calibrated estimates of absorbed-photon rate.",
    "scope": "Grimes 2018 primate OFF parasol rod-preferring drive protocol and its photoisomerisation-rate calibration",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "grimes2018",
        "locator": "Materials and methods: Electrophysiology, Cell selection criteria, Visual stimuli and Analysis (s4-1 to s4-4)",
        "role": "method",
        "note": "Methods state the LED set, the conversion to photoisomerisation rates and the collecting areas used."
      },
      {
        "sourceId": "grimes2018",
        "locator": "Results: Routing of rod signals in Off retinal circuits (s2-5); Figure 6D-G and mouse comparison paragraph",
        "role": "limits",
        "note": "Backgrounds are reported as nominal R*/rod/s values in the OFF-circuit comparisons."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Methods and OFF-circuit Results passages were re-read in PMC full text; the figure source workbook and supplementary files were not re-extracted here.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Photoisomerisation rates are calibrated estimates from radiometric intensity, assumed collecting areas and absorption spectra, not counted absorption events.",
      "The L3 illumination convention and the L5 preparation are two levels apart; the dependency is the stated calibration only and carries no claim about intermediate retinal processes."
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "B-incident-light-mouse-sustained-drive",
    "kind": "method",
    "statement": "The rod-preferring drive of the mouse preparation is read out through the source's illumination specification, which converts LED intensity into photoisomerisation rates with a mouse rod collecting area of 0.5 square micrometres and the stated emission and absorption spectra; the mouse and primate background labels are therefore separately calibrated quantities and not interchangeable stimulus units.",
    "scope": "Grimes 2018 mouse OFF sustained alpha rod-preferring drive protocol and its photoisomerisation-rate calibration",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "grimes2018",
        "locator": "Materials and methods: Electrophysiology, Cell selection criteria, Visual stimuli and Analysis (s4-1 to s4-4)",
        "role": "method",
        "note": "Methods give the species-specific collecting areas used for the conversion."
      },
      {
        "sourceId": "grimes2018",
        "locator": "Results: Routing of rod signals in Off retinal circuits (s2-5); Figure 6D-G and mouse comparison paragraph",
        "role": "limits",
        "note": "Mouse backgrounds of 0.5, 5 and 50 R*/rod/s are reported for the LY/APB comparison."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Methods and OFF-circuit Results passages were re-read in PMC full text; the figure source workbook and supplementary files were not re-extracted here.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Photoisomerisation rates are calibrated estimates from radiometric intensity, assumed collecting areas and absorption spectra, not counted absorption events.",
      "The L3 illumination convention and the L5 preparation are two levels apart; the dependency is the stated calibration only."
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "B-incident-light-mouse-transient-drive",
    "kind": "method",
    "statement": "The drive of this dark-adapted mouse preparation is read out through the source's illumination specification, in which a 500 nm narrowband stimulus of stated radiant intensity, attenuated by calibrated neutral-density filters, is converted into photoisomerisation rates for the reported intensity series; the intensity axis is therefore a calibrated absorbed-photon estimate for a 500 ms full-field flash.",
    "scope": "Jin 2022 transient OFF alpha light-drive protocol and its photoisomerisation-rate calibration",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "jin2022",
        "locator": "Materials and Methods: Animals; Minimizing the influence of light/dark adaptation and circadian time; Preparation of the retinal tissue; Light stimulus; Single-cell recording of alpha RGCs; Data analysis",
        "role": "method",
        "note": "Methods give the unattenuated 500 nm intensity, the filter-based attenuation and the conversion to R*/rod/s."
      },
      {
        "sourceId": "jin2022",
        "locator": "Results: Light responses of tOFF alpha RGCs; Figure 3A-F",
        "role": "limits",
        "note": "Response amplitudes are baseline-subtracted peak firing values across the calibrated intensity series."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Methods and Figure 3 Results passages were re-read in PMC full text; supplementary files and original traces were not reanalysed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Photoisomerisation rates are calibrated estimates from radiometric intensity, assumed collecting areas and absorption spectra, not counted absorption events.",
      "The L3 illumination convention and the L5 preparation are two levels apart; the dependency is the stated calibration only."
    ],
    "contextIds": [
      "jin2022"
    ]
  },
  {
    "id": "B-recording-context-primate-off-readout",
    "kind": "method",
    "statement": "The measured excitatory synaptic input of this preparation is read out through its stated electrical recording conditions, namely caesium-methanesulfonate internal solution with QX-314 and a holding potential near the estimated reversal potential for inhibitory input that was adjusted per cell to maximise isolation; the reported control and drug amplitudes are therefore conditioned on that isolation and are not absolute conductances.",
    "scope": "Grimes 2018 primate OFF parasol voltage-clamp excitatory-input readout and its recording conditions",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "grimes2018",
        "locator": "Materials and methods: Electrophysiology, Cell selection criteria, Visual stimuli and Analysis (s4-1 to s4-4)",
        "role": "method",
        "note": "Methods state the internal solutions and the per-cell holding potential used to isolate excitatory input."
      },
      {
        "sourceId": "grimes2018",
        "locator": "Results: Routing of rod signals in Off retinal circuits (s2-5); Figure 6D-G and mouse comparison paragraph",
        "role": "limits",
        "note": "The reported quantity is a response ratio between drug and control conditions in the same cells."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Methods and OFF-circuit Results passages were re-read in PMC full text; liquid-junction corrections were not applied by the source and raw traces were not reanalysed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Isolation at an estimated reversal potential does not exclude residual inhibitory contributions, and the drug mixture acts on all ON bipolar cells."
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "B-recording-context-mouse-sustained-readout",
    "kind": "method",
    "statement": "The measured excitatory synaptic input of the mouse preparation is read out through the same stated electrical recording conditions as the primate recordings, with caesium-based internal solution and a per-cell holding potential at the estimated inhibitory reversal; the species comparison therefore compares similarly conditioned readouts rather than absolute synaptic conductances.",
    "scope": "Grimes 2018 mouse OFF sustained alpha voltage-clamp excitatory-input readout and its recording conditions",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "grimes2018",
        "locator": "Materials and methods: Electrophysiology, Cell selection criteria, Visual stimuli and Analysis (s4-1 to s4-4)",
        "role": "method",
        "note": "Methods describe one electrophysiology protocol applied to both species' whole-mount recordings."
      },
      {
        "sourceId": "grimes2018",
        "locator": "Results: Routing of rod signals in Off retinal circuits (s2-5); Figure 6D-G and mouse comparison paragraph",
        "role": "limits",
        "note": "Mouse and primate results are reported as separate comparisons under identical experimental conditions."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Methods and OFF-circuit Results passages were re-read in PMC full text; supplementary controls for the mouse experiments were not reanalysed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Matched recording conditions do not make the two species' preparations one dataset; cell selection criteria and adaptation protocols differ by species."
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "B-macrophage-spectrum-tissue-niches",
    "kind": "review-finding",
    "statement": "The tissue inflammatory-niche scope reads macrophage functional state with the human monocyte-derived activation spectrum rather than a compulsory M1/M2 binary, because the adipose and splenic macrophage transcriptomes of its own source were mapped by support-vector regression onto that panel of in-vitro activation signatures and showed no single enriched polarisation state; cell abundance and activation state stay separate measurements.",
    "scope": "Use of the human macrophage activation spectrum in reading aged adipose-tissue macrophage states",
    "status": "definition",
    "citations": [
      {
        "sourceId": "xue2014-macrophage-spectrum",
        "locator": "Results and Figure 1: human monocyte-derived macrophages, 28 activation conditions and spectrum representation",
        "role": "supports",
        "note": "The spectrum model is built from 28 stimulation conditions in human monocyte-derived macrophages and extends the M1/M2 axis."
      },
      {
        "sourceId": "camell2017-catecholamine-catabolism",
        "locator": "Main Results and Figures 1-4: aged adipose explants, macrophage co-cultures, Nlrp3/Gdf3 perturbations, MAOA inhibition and nerve-associated macrophages",
        "role": "supports",
        "note": "Aged adipose and splenic macrophages were mapped onto the in-vitro activation signatures and lacked an M1/M2 state."
      },
      {
        "sourceId": "camell2017-catecholamine-catabolism",
        "locator": "Methods Bioinformatics: Comparison of VAT and spleen macrophages to human in vitro activated monocyte-derived cells (29-signature CIBERSORT matrix)",
        "role": "limits",
        "note": "The mapping is a deconvolution against a 29-signature matrix with one-to-one ortholog translation, not a functional assay."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Xue Results/Figure 1 passage, the declared Camell main Results and the newly declared Camell bioinformatics passage were read; supplementary tables, raw arrays and sequencing data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Signature deconvolution across species is an analytical association; it does not measure any tissue macrophage function, and the human culture panel is not a tissue environment."
    ]
  },
  {
    "id": "B-inflammasome-scope-metabolite-output",
    "kind": "review-finding",
    "statement": "The reading of the THP-1 metabolite result as inflammasome-associated output uses the inflammasome and IL-1-family conventions in which transcriptional priming of receptor and pro-cytokine is separate from a second activating signal, and in which caspase-1 processing and secreted IL-1-family cytokines are distinct readouts; on that convention N4-acetylcytidine behaves as a priming input, adenine or ATP as a second signal, and secretion is reported alongside caspase-1 processing.",
    "scope": "Inflammasome priming, caspase-1 processing and secretion conventions as used by the Furman THP-1 metabolite readout",
    "status": "definition",
    "citations": [
      {
        "sourceId": "munozplanillo2013-nlrp3-potassium",
        "locator": "Introduction: two-signal priming and activation model of the NLRP3 inflammasome and caspase-1 substrates",
        "role": "supports",
        "note": "Two-signal convention: priming is NF-kB-dependent transcription of receptor and pro-IL-1beta; a second signal activates the sensor; caspase-1 processes pro-IL-1beta and pro-IL-18."
      },
      {
        "sourceId": "munozplanillo2013-nlrp3-potassium",
        "locator": "Results and Figures 4-7: isosmotic extracellular-ion manipulation, ASC oligomerization, Nlrp3 R258W and AIM2 controls; Experimental Procedures: elemental and metabolic analyses",
        "role": "limits",
        "note": "The ionic requirement identified there is specific to NLRP3 and is not shared by AIM2, so the convention does not transfer one activation mechanism to all sensors."
      },
      {
        "sourceId": "furman2017-inflammasome-aging-subgroups",
        "locator": "Results and Figures 2-3; Online Methods: human primary monocyte/THP-1 nucleotide-metabolite stimulation and inflammasome readouts",
        "role": "supports",
        "note": "Priming-like receptor upregulation, caspase-1 p10 recovery, caspase inhibition and sensor silencing are reported as separate readouts."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The two-signal introduction passage was newly declared and read in PMC full text alongside the already-declared Results passages; supplementary figures and immunoblot raw data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "The convention was established in LPS-primed mouse macrophages for NLRP3, whereas the metabolite experiment uses a human monocytic cell line and implicates NLRC4; sensor-specific mechanisms are not transferred."
    ]
  },
  {
    "id": "B-sasp-composition-adipose-explant",
    "kind": "review-finding",
    "statement": "The explant result that treated human adipose tissue secretes less of a selected factor set is read with the senescence-associated secretory concept in which composition is heterogeneous across inducers and cell types; the atlas comparison found only partial overlap of increased proteins between inducers and classical fibroblast factors absent or oppositely changed in epithelial cells, so naming particular analytes as SASP components in one tissue does not define a fixed factor list.",
    "scope": "Context-dependent SASP composition as used to classify the measured human adipose explant secretome",
    "status": "definition",
    "citations": [
      {
        "sourceId": "basisty2020-sasp-proteomics",
        "locator": "Results and Figures 1-5: inducer/cell-type-dependent soluble and extracellular-vesicle secretomes",
        "role": "supports",
        "note": "Inducer comparison shows largely distinct soluble secretomes with limited overlap of increased proteins."
      },
      {
        "sourceId": "xu2018-senolytics-function",
        "locator": "Results and Figures 4 and 6; Online Methods: human adipose explants and separate naturally aged mouse drug regimens",
        "role": "supports",
        "note": "The explant readout classifies measured analytes as key SASP components versus non-SASP-related factors and separately reports adipokines."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Basisty Results/Figures 1-5 and Xu Results/Figures 4 and 6 passages were read; supplementary proteomics tables and raw mass-spectrometry data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Conditioned-medium analyte panels from one obese-donor explant series and cultured-cell proteomics are different preparations; neither establishes which secreted factors act in tissue."
    ]
  },
  {
    "id": "B-atp-ratio-energy-charge",
    "kind": "method",
    "statement": "The finding that a plasma-like medium leaves the calculated energy charge unchanged while other metabolite readouts shift is interpreted as an ensemble adenylate-ratio statement: single-cell imaging in a bacterial culture estimated a broad, skewed ATP-concentration distribution and its authors note that cells may differ in ATP concentration while keeping a similar ATP:ADP ratio, so a stable average ratio does not report per-cell uniformity.",
    "scope": "Population-averaged energy charge in cultured human cell lines read against single-cell ATP heterogeneity in bacteria",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "cantor2017-plasma-like-medium",
        "locator": "Results and Figures 1-5: plasma-like medium, multi-line metabolic changes, retained energy charge and urate dropout",
        "role": "method",
        "note": "Energy charge is calculated from pooled extracts and reported as unchanged in every line, with n = 3."
      },
      {
        "sourceId": "yaginuma2014-single-cell-atp",
        "locator": "Scientific Reports 4,6522, Results Distribution of ATP concentration in E. coli population, Figure 4 with 216-cell and eight-zero-assignment caption, Discussion; Methods Microscopic observation and Cell growth conditions",
        "role": "method",
        "note": "Single-cell distribution is broad and skewed, and the authors state that similar ATP:ADP ratios with different ATP concentrations are not excluded."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Cantor Results/Figures 1-5 and Yaginuma distribution/Discussion passages were read; supplementary methods, raw spectra and the noise-correction derivation were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "The single-cell measurements are bacterial and the energy-charge measurements are mammalian cell lines in defined media; the comparison concerns the observable, an averaged adenylate ratio, not a shared mechanism."
    ],
    "contextIds": [
      "yaginuma2014-atp-population",
      "cantor2017-medium-landscape"
    ]
  },
  {
    "id": "B-age-cmv-subsets-immune-setpoint",
    "kind": "review-finding",
    "statement": "The reviewed immune set-point scope organizes the cross-sectional blood result in which total and naive CD8 counts fall with age in seronegative donors, from about 200 to about 24 naive CD8 cells per microlitre between 21 and 80 years, while memory subset numbers change little and the loss rate is not altered by serostatus; relative subset shifts are therefore not an organism-wide operating point.",
    "scope": "Wertheimer 2014 cross-sectional absolute and relative T-cell subset counts as organized under the reviewed immune set-point scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "wertheimer2014-age-cmv-subsets",
        "locator": "Results and Figures 1-5: absolute and relative T-cell subset counts separated by age and CMV serostatus",
        "role": "supports",
        "note": "Absolute naive CD8 loss with age in seronegative donors, with relative memory increases explained by that loss."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-5 passage was read in PMC full text; supplementary figures, the frozen-PBMC replication detail and raw flow data were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "A cross-sectional cohort measures composition at one time per donor; subset counts are distinct from per-cell function and from any longitudinal trajectory."
    ]
  },
  {
    "id": "B-nk-resetting-immune-architecture",
    "kind": "review-finding",
    "statement": "The reviewed organism-scale defense scope organizes the transfer result in which mature NK cells become hyporesponsive in a class-I-deficient host and fail to reject class-I-deficient grafts, with the same pattern in cells that had not divided after transfer; recognition state, effector readout and graft rejection remain separate measurements rather than one surveillance capacity.",
    "scope": "Joncker 2010 adoptive-transfer NK resetting as organized under the reviewed organism-scale immune-architecture scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "joncker2010-nk-resetting",
        "locator": "Results and Figures 1-3: congenic WT/MHC-I-deficient splenocyte transfers, receptor-triggered IFNgamma and target-graft rejection",
        "role": "supports",
        "note": "Transferred wild-type NK cells become hyporesponsive in class-I-deficient hosts and those hosts fail to reject deficient grafts."
      },
      {
        "sourceId": "joncker2010-nk-resetting",
        "locator": "Results on CFSE-undivided mature NK cells; Materials and Methods: mice, adoptive transfers, antibodies/flow cytometry and functional assays",
        "role": "limits",
        "note": "Resetting is seen in undivided cells, but 10-30 percent undivided fractions and irradiated hosts bound the comparison."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results/Figures 1-3 and the undivided-cell passages were read in PMC full text; unpublished observations referenced by the authors and raw flow data were not available or replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "Responsiveness assays use plate-bound receptor antibodies and a graft-rejection endpoint; neither measures tissue surveillance in an intact organ, and the responsible host cell type is left unresolved."
    ]
  },
  {
    "id": "B-synthetic-contact-sorting-patterning-scope",
    "kind": "review-finding",
    "statement": "The reviewed tissue-patterning scope organizes the synthetic result in which a juxtacrine receptor circuit coupled to cadherin expression produces layered and polarised multicellular structures from engineered cell lines, including bifurcation from a single genotype; the authors state that these circuits contain no diffusible morphogens, irreversible fate commitment or direct control of proliferation, death or motility, so the case bounds what layer and boundary formation alone demonstrates.",
    "scope": "Toda 2018 synthetic juxtacrine-adhesion structures as organized under the reviewed tissue-patterning topic scope",
    "status": "definition",
    "citations": [
      {
        "sourceId": "toda2018-synthetic-contacts",
        "locator": "Using a bidirectional signaling cascade to engineer a self-organizing three-layer structure; Synthetic assembly is robust, reversible, and self-repairing; Figures 2-3",
        "role": "supports",
        "note": "Bidirectional signaling cascade yields reproducible self-organised multilayer spheroids."
      },
      {
        "sourceId": "toda2018-synthetic-contacts",
        "locator": "Results: single-genotype fate-bifurcation circuit, spherically asymmetric structures and the minimal intercellular communication summary; Figures 4-6",
        "role": "limits",
        "note": "The authors list the natural components the circuits omit, and the structures are engineered cell-line aggregates."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Results passages and the newly declared Figures 4-6 Results passages were read in PMC full text; supplementary materials, movies and quantification were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "An engineered aggregate of cell lines is not a tissue and not an evolutionary prototissue stage; no embryonic patterning mechanism follows from the synthetic circuit."
    ]
  },
  {
    "id": "B-graded-binary-fate-choice",
    "kind": "review-finding",
    "statement": "The micropattern result that blocking one pathway leaves two marker territories and is described as a binary fate choice based on the level of response to the remaining signal is read with the single-cell distinction between a graded unimodal response, reported for constitutive activator expression, and a separated low/high distribution, reported for positive autoregulation; marker territories in fixed colonies do not identify such a circuit.",
    "scope": "Graded versus separated single-cell expression distributions as used to read binary fate territories on micropatterned colonies",
    "status": "definition",
    "citations": [
      {
        "sourceId": "becskei2001-positive-feedback",
        "locator": "EMBO J 20(10), 2528-2535, Results Approach and Activation/Autocatalytically expressed activator, Figures 1-4; Theoretical underpinnings and Discussion; Methods Growth conditions and microscopy, Analysis of bistability",
        "role": "supports",
        "note": "Constitutive activator expression gives an approximately Gaussian unimodal reporter distribution; autocatalytic expression gives distinct off and on pools."
      },
      {
        "sourceId": "warmflash2014-geometric-patterning",
        "locator": "Results: self-organized signaling and inhibitor knockdown; Figures 5-6; Online Methods: siRNA knockdown",
        "role": "supports",
        "note": "With Activin/Nodal blocked the colony contains two territories and the authors call this a binary fate choice based on response level."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only the already-declared Becskei Results and Warmflash signalling/knockdown passages were read; the Becskei supplementary analysis and the Warmflash supplementary figures were not replayed.",
      "A described definition or measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity.",
      "A synthetic yeast circuit and a human colony immunofluorescence map are different systems and observables; the marker territories do not identify a bistable mechanism, and the yeast model's bistability remains an interpretation."
    ]
  },
  {
    "id": "B-cardin-pv-targeting-dentate-protocol",
    "kind": "review-finding",
    "statement": "Song et al. 2012 target dentate parvalbumin interneurons with PV-Cre mice and Cre-dependent AAV vectors carrying an inverted, double-floxed opsin cassette 'as described previously', citing reference 17, Cardin et al. 2009. Cardin et al. define their fast-spiking-cell activation by targeting ChR2 to PV-positive interneurons with AAV DIO ChR2-mCherry in adult PV-Cre mice. The dentate PV activation protocol therefore uses the cell-type targeting concept of the fast-spiking activation preparation.",
    "scope": "Cell-type targeting method shared by the adult mouse dentate PV-activation protocol and the barrel-cortex fast-spiking activation preparation; no physiological finding is shared.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "song2012",
        "locator": "Online Methods: Animals, housing, administration of tamoxifen, EdU and AAV, and optogenetic manipulations",
        "role": "supports",
        "note": "Mouse lines, opsin vectors and the in vivo light regime of the dentate PV protocol; the PV-Cre line and AAV cassette design are attributed to reference 17."
      },
      {
        "sourceId": "song2012",
        "locator": "Reference list, page 153: reference 17 (Cardin et al. 2009)",
        "role": "supports",
        "note": "Identifies reference 17 as Cardin et al. 2009."
      },
      {
        "sourceId": "cardin2009",
        "locator": "Abstract and figure legends 1-4",
        "role": "supports",
        "note": "Figure 1 legend: Cre-dependent AAV DIO ChR2-mCherry gives cell-type-specific expression in PV+ interneurons of adult PV-Cre mice."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Song 2012 Online Methods, Results and reference list were re-read in the author-lab PDF and the Cardin 2009 abstract and figure legends in PMC3655711; Cardin's full methods, Song's supplementary opsin validation (Supplementary Fig. 4) and all raw data were not replayed.",
      "The dentate protocol uses 472-nm, 5-ms pulses at 8 Hz for 30 s every 5 min, 8 h daily, with EdU/MCM2 endpoints; Cardin drives barrel-cortex fast-spiking cells at 8-200 Hz during acute recordings. No gamma rhythm or sensory gating is measured in dentate gyrus, and the RGL cycle-marker effects are not rhythm effects.",
      "A shared reagent and targeting rule does not show that the same PV population, firing pattern or mechanism operates in both regions. A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-reid-correlogram-retinogeniculate-efficacy",
    "kind": "method",
    "statement": "In Usrey et al. 1998, monosynaptic retina-to-LGN pairs are identified by statistically significant narrow cross-correlogram peaks, their significance is assessed using the method of reference 11 (Reid and Alonso 1995) with a 350-2,100 Hz bandpass filter, and retinal spike efficacy is defined as peak integral over total retinal spikes. Reid and Alonso infer thalamocortical monosynaptic connections by cross-correlation analysis. The retinogeniculate transfer readout therefore relies on the correlogram-significance convention of the geniculocortical preparation.",
    "scope": "Analysis convention for identifying monosynaptic pairs in simultaneous extracellular recordings in anaesthetized cat; retinogeniculate efficacy readout only.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "usrey1998",
        "locator": "Methods, p. 386",
        "role": "method",
        "note": "Correlogram significance by the ref. 11 method with a modified bandpass; efficacy defined from the unfiltered peak integral."
      },
      {
        "sourceId": "usrey1998",
        "locator": "Results, pp. 384-385: paired-spike recordings and mechanism limitation",
        "role": "method",
        "note": "Twelve of 205 retina-LGN pairs had significant narrow correlogram peaks indicative of monosynaptic connections."
      },
      {
        "sourceId": "usrey1998",
        "locator": "References and Notes, p. 387: references 3 and 11",
        "role": "supports",
        "note": "Reference 11 is Reid and Alonso 1995."
      },
      {
        "sourceId": "reid1995",
        "locator": "Abstract",
        "role": "supports",
        "note": "Thalamocortical connectivity inferred by cross-correlation analysis in simultaneous LGN and area 17 recordings."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Usrey 1998 main text, Methods and reference list were re-read in the repository PDF, but Reid and Alonso 1995 only at abstract level, so the original significance criterion, binning and filter settings were not checked here.",
      "Usrey et al. modify the referenced method with a 350-2,100 Hz bandpass; correlogram-inferred connections are functional, not anatomically verified synapses. The bridge does not relate paired-spike enhancement to geniculocortical receptive-field alignment, orientation selectivity or map development.",
      "A described measurement dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ],
    "contextIds": [
      "usrey1998"
    ]
  },
  {
    "id": "B-anatomical-functional-module-boundary",
    "kind": "method",
    "statement": "Sporns and Betzel distinguish structural networks of anatomical connections from functional networks assembled from statistical dependencies, report that C. elegans connectome communities resemble functional organization 'at some level' while noting shortcomings and that spatial embedding can confound community interpretation, and describe module detection as a compact description of functional neuronal assemblies in activity recordings. The universal functional-assembly boundary for task ensembles is therefore interpreted with the same anatomical/functional non-identity that keeps the connectome structure-to-function mapping unresolved.",
    "scope": "Network-analysis interpretation boundary for anatomical connectomes, functional modules and calcium-defined ensembles; no mapping between the C. elegans and mouse V1 preparations is measured.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "sporns2016",
        "locator": "Abstract; Introduction: Structural and Functional Brain Networks; Network Analysis and Modularity",
        "role": "method",
        "note": "Definitions of structural versus functional brain networks and of modules."
      },
      {
        "sourceId": "sporns2016",
        "locator": "Evidence for Modules in Brain Networks: Brain Networks in Model Organisms",
        "role": "method",
        "note": "C. elegans community analyses, the spatial-embedding confound and module detection for functional neuronal assemblies."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Sporns and Betzel abstract, introduction and model-organism evidence subsection were read in PMC4782188; equations, the cited community analyses (for example Varshney 2011, Jarrell 2012) and all datasets were not reproduced.",
      "The review does not analyse the Witvliet or Randi C. elegans data or the Carrillo-Reid V1 ensembles and does not show that any calcium ensemble corresponds to an anatomical community; modularity partitions depend on null model, resolution and optimization.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-hebbian-imprinting-ensemble-recall",
    "kind": "method",
    "statement": "Carrillo-Reid et al. explain pattern completion by stating that it could occur when an activity pattern is imprinted in a set of neurons via the strengthening of its connections, after which activating one or a few neurons can set off the group, an ability they attribute to theorists including Hebb (1949). The perceptual-state and recurrent-mechanism interpretation of recalled ensembles therefore depends on the historical plasticity-to-learning hypothesis.",
    "scope": "Interpretive premise of the mouse V1 ensemble-recall Discussion; no synaptic or plasticity measurement in that preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "carrilloreid2019",
        "locator": "Summary; Introduction; Results; Figures 1-7 captions; Discussion",
        "role": "method",
        "note": "Discussion 'Pattern Completion in Neocortical Circuits': imprinting by strengthening of connections and the Hebbian attribution."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Carrillo-Reid 2019 Introduction and Discussion were re-read in PMC6747687; Hebb 1949 remains unread beyond publisher metadata, so the Hebbian attribution is Carrillo-Reid's, and the cited imprinting study (Carrillo-Reid et al. 2016) and Seung and Yuste (2010) were not read.",
      "Synaptic strength, connectivity and plasticity were not measured in the recall preparation; the dentate and CA1 potentiation assays in the plasticity component measure neither ensemble recall nor learned licking, and neither preparation measures subjective perception.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-plasticity-premise-synaptic-homeostasis",
    "kind": "review-finding",
    "statement": "Tononi and Cirelli state that SHY proposes sleep as the price the brain pays for plasticity: during wake, learning statistical regularities requires strengthening connections throughout the brain, and sleep restores synaptic homeostasis that is challenged by synaptic strengthening triggered by learning during wake and by synaptogenesis. The synaptic-homeostasis hypothesis record is therefore defined with the historical plasticity-to-learning hypothesis.",
    "scope": "Conceptual formulation of the synaptic homeostasis hypothesis; no sleep/wake transition, LC or Hcrt endpoint and no potentiation assay is linked.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "tononi2014",
        "locator": "Summary and opening rationale",
        "role": "supports",
        "note": "Summary and opening rationale defining SHY through learning-driven synaptic strengthening in wake."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Tononi and Cirelli Summary and opening rationale were re-read in PMC3921176; the molecular, electrophysiological and structural evidence the review cites was not reconstructed.",
      "Both records remain unresolved hypotheses. The dentate and CA1 potentiation assays and the optogenetic Hcrt/LC sleep-wake endpoints do not test SHY, and SHY does not identify the measured LC or Hcrt effects with synaptic renormalization.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-plasticity-interpretation-engram-gria1",
    "kind": "method",
    "statement": "Marco et al. state that increased translation machinery facilitates spine changes resulting in enhanced synaptic plasticity, report increased Gria1 mRNA and shaft protein only in reactivated neurons, and summarize these data as supporting temporally separated programs that maintain excitability, structural changes, protein translation and synaptic plasticity across the lifespan of the engram ensemble. The interpretation of the GRIA1 shaft record therefore depends on the plasticity-to-learning hypothesis.",
    "scope": "Interpretation of immunostaining readouts in pooled, destructively sampled activity-tagged dentate populations; no electrophysiological plasticity assay.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "marco2020",
        "locator": "Figure 5g: GRIA1 shaft puncta; Methods: Quantification of Eif and Gria1 proteins/mRNA",
        "role": "method",
        "note": "Results paragraph accompanying Figure 5f-g: translation machinery, spine heads, Gria1 mRNA/protein and the synaptic-plasticity summary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Marco 2020 Results passage on translation machinery, spines and Gria1 was re-read in the PMC author manuscript; Extended Data spine counts, sequencing and imaging data were not reproduced, and the cited spine-plasticity studies (refs 39-42) were not read.",
      "GRIA1 puncta per shaft length do not measure AMPA receptor current, synaptic efficacy or learning; the dentate and CA1 potentiation assays of the plasticity component do not measure engram labels or transcription, and pooled cross-sectional populations do not follow the same cells.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-astrocyte-dentate-ltp-plasticity-scope",
    "kind": "review-finding",
    "statement": "De Ceglia et al. state that they examined putative roles for glutamatergic astrocytes in synaptic plasticity at dentate perforant path-granule cell synapses by comparing theta-burst-evoked LTP induced by medial perforant-path stimulation in paired synaptic fields, and conclude that astrocyte VGLUT1 exerts positive control on theta-LTP within astrocyte territories. The paired dentate potentiation record is thus an instance of the activity-dependent plasticity topic represented by persistent dentate responses after perforant-path conditioning.",
    "scope": "Topic organization of an adult mouse hippocampal-slice fEPSP potentiation finding; its astrocyte-manipulation context is retained.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "deceglia2023",
        "locator": "Main: Roles in hippocampal function and dysfunction; Figure 3a-f and caption",
        "role": "supports",
        "note": "Main-text framing of the dentate theta-LTP experiment as a test of astrocyte roles in synaptic plasticity, and the Figure 3d-f caption."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the de Ceglia 2023 passage 'Roles in hippocampal function and dysfunction' and the Figure 3 caption were re-read in PMC10550825; LTP methods, Extended Data Figure 9 controls and source data were not reanalysed.",
      "Slice theta-LTP beside sparsely recombined astrocytes differs in species, preparation and induction protocol from Bliss and Lomo's anaesthetized-rabbit potentiation; membership does not pool them, establish NMDA dependence here or measure learning.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-microglial-complement-neuroimmune-scope",
    "kind": "review-finding",
    "statement": "Schafer et al. motivate their CR3/C3 test by noting that phagocytic cells of the peripheral immune system use classical complement proteins bound by phagocytic receptors, and propose that activated C3 tags weak synapses 'similar to the immune system'. The reduced engulfment of labelled RGC inputs by CR3-deficient P5 microglia is therefore an instance of interaction between immune signalling and neural circuitry, admissible under the neuro-immune interactions topic alongside its body-brain cytokine assays.",
    "scope": "Topic organization of a postnatal mouse dLGN microglial engulfment finding; distinct from the vagal and cNST body-brain preparations.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "schafer2012",
        "locator": "Results: CR3/C3 deletion; Figure 6 and caption",
        "role": "supports",
        "note": "Results: immune complement signalling as the tested phagocytic pathway; CR3 knockout engulfment comparison."
      },
      {
        "sourceId": "schafer2012",
        "locator": "Results: synaptic connectivity; Figure 8 and caption; Experimental Procedures: Array Tomography; Discussion",
        "role": "supports",
        "note": "Discussion: C3 function in the immune system and the proposed tagging of weak synapses."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Schafer 2012 Results on CR3/C3 deletion and the Discussion were re-read in PMC3528177; images, supplementary methods and the updated supplement were not read.",
      "CNS-resident microglial complement signalling during postnatal pruning is not peripheral cytokine signalling: the bridge does not relate this pathway to the LPS, vagal, nodose or cNST records, to circulating cytokines or to inflammation, and engulfed labelled material is not a direct count of eliminated synapses.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-conditioned-immunosuppression-neuroimmune-scope",
    "kind": "review-finding",
    "statement": "Albring et al. state that the learned immune response to cyclosporine A has been reported to be mediated centrally via insular cortex, amygdala and ventromedial hypothalamus and steered via splenic sympathetic innervation, and that the mechanisms behind this CNS-immune system interaction require further study. Wager and Atlas describe such pharmacological conditioning as the most compelling demonstration that autonomic and neuroendocrine systems interact with the immune system. The four-re-exposure conditioned IL-2 response is therefore an instance of the neuro-immune interactions topic.",
    "scope": "Topic organization of a human conditioned ex-vivo IL-2 endpoint; the proposed routes are cited rodent findings, not measured in this cohort.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "albring2012-immune-placebo",
        "locator": "Discussion and displayed supporting-table captions: prior-data reuse, assay identity, extinction and proposed neural/autonomic pathways",
        "role": "supports",
        "note": "Discussion paragraph on neurobiological mechanisms of learned immunosuppression and CNS-immune interaction."
      },
      {
        "sourceId": "wager2015-placebo-context",
        "locator": "Clinical and laboratory placebo effects: Immune responses",
        "role": "supports",
        "note": "Immune-response placebo effects framed as autonomic/neuroendocrine-immune interaction."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Albring 2012 Discussion and the Wager and Atlas 2015 'Immune responses' subsection were re-read in PMC; the rodent studies cited for insular, amygdala, hypothalamic and splenic sympathetic mediation were not read.",
      "Experiment A re-expresses previously published observations; no neural, autonomic or noradrenaline measure was obtained, and the bridge does not identify the vagal-cNST circuit or any descending path as the mediator of conditioned IL-2 suppression.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-working-memory-span-sequence-deviants",
    "kind": "method",
    "statement": "Al Roumi et al. report that participants missed fewer than 10% of deviants in the simplest but more than 50% in the most complex equal-length sequence, consistent with the latter exceeding their working-memory span, and contrast their compression account with associative-chain and slot models of working memory for serial order. The interpretation of the sequence recognition and violation behaviour record therefore depends on the working-memory task construct.",
    "scope": "Interpretation of adult behavioural readouts in the MEG eight-location sequence task; no delay, load or span manipulation in the working-memory sense.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "alroumi2021",
        "locator": "Author-hosted in-press PDF, pages 1-4; Figures 1-2: sequence language, tasks and behavioral contrasts",
        "role": "method",
        "note": "Behavioural results for violation detection and the working-memory-span interpretation."
      },
      {
        "sourceId": "alroumi2021",
        "locator": "Author-hosted in-press PDF, Discussion opening paragraphs: serial-order working-memory models and LoT complexity as memory load",
        "role": "method",
        "note": "Discussion contrasting serial-order working-memory models with compression and LoT complexity as memory load."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Al Roumi 2021 behavioural results and opening Discussion were re-read in the author-hosted in-press PDF via text extraction, whose first page did not extract; the cited serial-order models (Lewandowsky and Murdock; Botvinick and Watanabe; Hurlstone et al.) were not read.",
      "All sequences have equal length, so span is not measured directly, and the missed-deviant pattern is also compatible with the prediction accounts the authors discuss. Storage, processing and executive components of the working-memory construct are not separately tested.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-global-workspace-episodic-buffer",
    "kind": "review-finding",
    "statement": "Baddeley introduces the episodic buffer as a limited-capacity store binding information into integrated episodes, controlled by the executive and accessible to conscious awareness, and regards it as a crucial feature of the capacity of working memory to act as a global workspace accessed by conscious awareness along the lines suggested by Baars (reference 126, A Cognitive Theory of Consciousness, 1988). The episodic-buffer hypothesis therefore uses the conceptual global-workspace architecture.",
    "scope": "Functional working-memory vocabulary and a conceptual consciousness architecture; no neural or behavioural measurement links them.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "baddeley2003",
        "locator": "Pages 835-836; Figure 5: proposed episodic buffer and activated long-term memory alternative",
        "role": "supports",
        "note": "Episodic-buffer proposal and its characterization as a global workspace accessed by conscious awareness."
      },
      {
        "sourceId": "baddeley2003",
        "locator": "References 124-128, page 839",
        "role": "supports",
        "note": "Reference 126 is Baars 1988, A Cognitive Theory of Consciousness."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Baddeley 2003 pages 835-836 and the reference list were re-read in the hosted PDF via text extraction; Baars 1988 was not re-read for this bridge, and Baars 2002 and Dehaene and Naccache 2001, also cited there, were not read.",
      "Both records are unresolved proposals: the buffer may be activated long-term memory rather than a distinct store, the workspace diagram is not an observed anatomical graph, and accessibility to awareness does not make working memory and consciousness identical.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-working-memory-lip-null-interpretation",
    "kind": "method",
    "statement": "Jeurissen et al. frame decision formation as computation over time scales associated with working memory, attention and planning, and state that unless the animal integrates information over time, relies on working memory or evaluates an interval, there is little reason to expect LIP to play a role, offering this among explanations for the absent bias reported by Katz et al. The interpretation of the Katz LIP motion-choice null therefore depends on the working-memory task construct.",
    "scope": "Interpretive account of a macaque LIP-inactivation null across task designs; working-memory demand was not manipulated.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "jeurissen2022",
        "locator": "Summary, Results, Discussion and Figures 1-4",
        "role": "method",
        "note": "Summary framing and the Discussion paragraph reconciling the Katz et al. null."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Jeurissen 2022 Summary, mapping results and Discussion were re-read in PMC9233071; Constantinidis et al. 2018 and Leon and Shadlen 2003 were not read, and Katz et al. do not themselves attribute their null to working-memory demand.",
      "Jeurissen et al. also cite inactivation volume, target jitter, difficulty and motion-display differences; the working-memory clause is one candidate explanation, not a tested determinant. LIP persistent activity is not identified with the prefrontal delay activity of the working-memory component.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-neuronal-workspace-conscious-feeling",
    "kind": "method",
    "statement": "LeDoux states that there is considerable support for states of consciousness depending on representation of experience in a cognitive workspace involving prefrontal and parietal areas, citing Dehaene and Changeux, Baars and others, and proposes that conscious feelings result when global organismic states initiated by survival circuits are represented in that workspace. The affective-property hypothesis, which leaves the relation of affective states to conscious feeling unresolved, is therefore interpreted with the neuronal-workspace conscious-access hypothesis.",
    "scope": "Conceptual interpretation linking survival-circuit states and conscious feelings; no neural measurement of feelings or workspace activity.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "ledoux2012",
        "locator": "Survival Circuits and Human Feelings: What Is An Emotional State? (cognitive-workspace proposal for conscious feelings)",
        "role": "method",
        "note": "Cognitive-workspace account of consciousness and the proposal that conscious feelings are workspace-represented global organismic states."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the LeDoux 2012 section 'Survival Circuits and Human Feelings' was read in the PMC author manuscript; the workspace papers it cites (Dehaene and Changeux 2004, Baars 2005 and others), which differ in version from the graph's Dehaene and Changeux 2011 record, were not read.",
      "LeDoux pools several workspace accounts and his proposal is itself a hypothesis; the BLA-CeA exploration assays and the COGITATE recordings measure neither feelings nor their workspace representation, and workspace-version differences are retained.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-empathic-pain-affective-scope",
    "kind": "review-finding",
    "statement": "Singer et al. conclude that empathizing with another's pain activates not the whole pain matrix but second-order re-representations containing the subjective affective dimension of pain, which they propose underlie representing feelings and understanding the emotional importance of a stimulus for another person. Their shared-affective-representation hypothesis is thus an instance of the emotional and affective processing topic.",
    "scope": "Topic organization of a human fMRI interpretation; no mouse amygdala circuit or exploration measure is linked.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "singer2004",
        "locator": "Pages 1160-1161: affective representation and re-representation interpretation",
        "role": "supports",
        "note": "Interpretation of shared ACC/AI responses as re-representations of the affective dimension of pain."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Singer 2004 pages 1160-1161 were re-read in the hosted article copy via text extraction; the supporting methods, Figure S1 and Tables S1-S5 remain unread.",
      "The affective-processing scope is represented by projection-specific BLA-CeA exploration assays in mice; membership does not pool human BOLD contrasts with those assays, establish a single evaluative property or show that partner-pain responses are subjective feelings.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-shannon-model-avalanche-information-optimality",
    "kind": "method",
    "statement": "Beggs and Plenz compute information transmission as I(S;R) = H(R) - H(R/S) over all binary input patterns and output responses of simulated feedforward branching networks and report that transmission peaks near a branching parameter of 1, which their Figure 8 caption calls a state of optimal information transmission; H is Shannon's entropy. Because source and channel are specified only for the model, the boundary on universal information-processing optimality is interpreted with the neural communication-model hypothesis.",
    "scope": "Interpretation of a model-network information calculation attached to cortical-culture and slice LFP avalanche statistics; no information is measured in the recorded preparations.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "beggs2003",
        "locator": "Abstract; Materials and Methods; Results; Discussion; figure captions",
        "role": "method",
        "note": "Network-simulation methods, 'Information transmission and criticality' Results and Figure 8 caption."
      },
      {
        "sourceId": "shannon1948",
        "locator": "Combined corrected reprint: Introduction, PDF pp. 1-2; Section 6, PDF pp. 10-11",
        "role": "supports",
        "note": "Section 6 definition of entropy and conditional entropy used in the mutual-information expression."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Beggs and Plenz 2003 simulation methods, information-transmission Results and Figure 8 caption were re-read in PMC6741045, and Shannon 1948 Section 6 in the repository reprint via text extraction; the simulations were not replayed.",
      "The recorded cultures and acute slices supply branching-parameter estimates, not stimulus-response information, and the feedforward architecture is justified by refractoriness arguments; the C. elegans signal atlas is unrelated to these networks, and no optimal code or semantic content follows.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-observer-framework-visual-haptic-integration",
    "kind": "method",
    "statement": "Ernst and Banks propose that a principle minimizing variance in the final estimate determines visual or haptic dominance and realize it by maximum-likelihood estimation, citing references 8-15 including reference 11, Ghahramani, Wolpert and Jordan 1997. That chapter's abstract treats sensorimotor integration as an observer integrating multiple information sources, with variance-reducing visual-auditory integration and a linear dynamic observer for the hand's state. Wolpert et al. 1995 weight forward-model and sensory corrections by a Kalman gain for optimal state estimates. The visual-haptic MLE interpretation and the internal-model hypothesis thus use one estimation framework.",
    "scope": "Shared optimal-estimation framework for static cue combination and dynamic hand-state estimation; no shared preparation, modality pair or neural measurement.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "ernst2002",
        "locator": "Main text, equations 1-7 and Figures 1-3, pp. 429-433",
        "role": "method",
        "note": "Opening principle and the maximum-likelihood integrator construction (equations 1-7)."
      },
      {
        "sourceId": "ernst2002",
        "locator": "Reference list, p. 433: references 8-15 cited for maximum-likelihood estimation",
        "role": "supports",
        "note": "References 8-15, including Ghahramani, Wolpert and Jordan 1997 (ref. 11)."
      },
      {
        "sourceId": "ghahramani1997-sensorimotor-observer",
        "locator": "Author-hosted abstract page",
        "role": "supports",
        "note": "Abstract: observer framework covering variance-reducing integration and hand-state estimation."
      },
      {
        "sourceId": "wolpert1995",
        "locator": "Main text and Figures 1-3, pp. 1880-1882",
        "role": "supports",
        "note": "Kalman-gain weighting of forward-model prediction and sensory correction for optimal state estimates."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Ernst and Banks 2002 main text and reference list and the Wolpert 1995 main text were re-read; for Ghahramani, Wolpert and Jordan 1997 only the author-hosted abstract was read because the chapter PDF did not render here.",
      "The chapter's integration result concerns visual-auditory localization, not visual-haptic height, and Wolpert et al. combine motor outflow with proprioception rather than two sensory cues; a common estimation framework does not identify a shared neural implementation, universal optimality or the necessity of an internal model.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-ltp-synapse-formation-motor-spine-memory",
    "kind": "method",
    "statement": "Xu et al. treat spine changes as indicators of synaptic plasticity, relate learning-induced spine formation to rapid synapse formation observed during long-term potentiation in vitro, and state that new spines persisting for months provide a long-lasting structural basis for enhanced synaptic strength and a potential cellular mechanism for consolidating lasting motor memories. The persistent-spine memory hypothesis is therefore interpreted with the historical plasticity-to-learning hypothesis.",
    "scope": "Interpretation of transcranial two-photon spine imaging in mouse motor cortex during reaching and capellini-handling skill learning; no synaptic-strength or LTP measurement in that preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "xu2009",
        "locator": "Figure 1 and associated Results: first-session selection and controls",
        "role": "method",
        "note": "Results opening: spine morphology and dynamism as indicators of synaptic plasticity."
      },
      {
        "sourceId": "xu2009",
        "locator": "Figure 3 and associated Results: new and pre-existing spine survival",
        "role": "method",
        "note": "Results on retained learning-induced spines as a potential mechanism for consolidating motor memories."
      },
      {
        "sourceId": "xu2009",
        "locator": "Discussion: synaptic strength, memory interpretation and proposed homeostatic balance",
        "role": "method",
        "note": "Discussion relating learning-induced synapse formation to LTP-associated synapse formation and retained synaptic strength."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Xu 2009 Results and Discussion passages were re-read in the PMC author manuscript; the separate full Methods file and movie remain unread, and the in vitro LTP studies (refs 19-20) and the new-spine glutamate-current study (ref. 23) that the authors cite were not read.",
      "Spine imaging measures structure, not synaptic strength or efficacy; the dentate and CA1 potentiation assays of the plasticity component neither image spines nor measure motor memory, and retention of new spines does not establish their necessity or disjoint storage of different skills.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-gamma-synchrony-null-rhythm-coding",
    "kind": "method",
    "statement": "The COGITATE consortium derive predictions of sustained posterior gamma-band connectivity for IIT and brief long-range gamma- or beta-band synchronization with prefrontal cortex for GNWT, chose pairwise phase consistency on the basis of the theories' mechanistic considerations because it assesses oscillatory phase, and report that this preregistered metric supported neither theory. The general rhythm-coding hypothesis, which already denies that a local rhythm intervention establishes a general cognitive code, is therefore interpreted with this preregistered null for an oscillatory-synchrony account of conscious content.",
    "scope": "Interpretation boundary for rhythm-coding claims from human iEEG/MEG phase-consistency tests in one visual consciousness paradigm; no rhythm is manipulated.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "cogitate2025",
        "locator": "Maintenance of conscious content; Interareal connectivity; Figures 1-4 captions; Discussion",
        "role": "method",
        "note": "Interareal connectivity section: theory-specified gamma/beta synchrony predictions, PPC rationale and preregistered null."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the COGITATE 'Interareal connectivity' section was re-read in PMC12137136; analysis code, the supplementary task-relevant and preregistration-deviation sections and raw data were not replayed.",
      "Phase estimation from macroscopic recordings is noisy, and the exploratory amplitude-based DFC analysis found brief content-selective connectivity predominantly in the gamma band; the null concerns the preregistered PPC predictions in this paradigm, not every rhythm function, and the barrel-cortex fast-spiking gamma intervention is a different preparation.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-pv-activation-cycle-scope-reuse",
    "kind": "review-finding",
    "statement": "Song et al. report that, compared with sham treatment without light, EdU incorporation and MCM2 expression by RGLs decreased after activation of ChR2-expressing PV interneurons, a 53% decrease in RGL activation at the population level (Figure 4d). The organismal reuse record distinguishes this PV activation-associated suppression and carries the same claim; it is therefore defined with the Level-6 PV-activation cycle-marker finding.",
    "scope": "Descriptive reuse of the adult mouse dentate PV-activation population result in the organismal neural proliferative-control scope; no new acquisition.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "song2012",
        "locator": "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers",
        "role": "supports",
        "note": "PV ChR2 activation versus sham: EdU and MCM2 RGL measures (Figure 4d)."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Song 2012 Results pages 152-153 and the Figure 4 and 5 legends were re-read in the author-lab PDF; supplementary figures, animal-level counts and images were not replayed.",
      "EdU and MCM2 are cycle-related markers, not completed neuron production; three or four animals per condition, unreported delivered light power and no opsin-negative illumination control remain, and the organismal reuse adds no independent replication.",
      "A definitional reuse dependency is not a physical creation order, a causal effect or a claim of universal neural control of proliferation."
    ]
  },
  {
    "id": "B-pv-inhibition-cycle-scope-reuse",
    "kind": "review-finding",
    "statement": "Song et al. report that suppression of eNpHR-expressing PV interneurons led to a 95% increase in RGL activation (Figure 4d). The organismal reuse record distinguishes this PV inhibition-associated increase from the activation-associated suppression and carries the same claim; it is therefore defined with the Level-6 PV-inhibition cycle-marker finding.",
    "scope": "Descriptive reuse of the adult mouse dentate PV-inhibition population result in the organismal neural proliferative-control scope; no new acquisition.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "song2012",
        "locator": "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers",
        "role": "supports",
        "note": "PV eNpHR inhibition versus sham: increased RGL activation (Figure 4d)."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Song 2012 Results pages 152-153 and the Figure 4 and 5 legends were re-read in the author-lab PDF; supplementary figures, animal-level counts and images were not replayed.",
      "EdU and MCM2 are cycle-related markers, not completed neuron production; three or four animals per condition, unreported delivered light power and no opsin-negative illumination control remain, and the organismal reuse adds no independent replication.",
      "A definitional reuse dependency is not a physical creation order, a causal effect or a claim of universal neural control of proliferation."
    ]
  },
  {
    "id": "B-pv-isolation-residual-scope-reuse",
    "kind": "review-finding",
    "statement": "Song et al. state that PV activation abolished the isolation-induced increase in RGL activation, while their Figure 5c quantification, as read in the existing Level-6 record, retains higher EdU-positive RGL density in isolated than group-housed mice under PV stimulation (P < 0.05). The organismal reuse record names this retained EdU residual and carries the same claim; it is therefore defined with the Level-6 residual-EdU finding.",
    "scope": "Descriptive reuse of the adult mouse dentate housing-by-PV-stimulation population comparison; no new acquisition.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "song2012",
        "locator": "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons",
        "role": "supports",
        "note": "Housing-by-PV-stimulation EdU and MCM2 comparisons (Figure 5c) and the main-text summary."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: Song 2012 Results pages 152-153 and the Figure 4 and 5 legends were re-read in the author-lab PDF; supplementary figures, animal-level counts and images were not replayed.",
      "The main-text wording 'abolished' and the plotted Figure 5c residual differ; the bridge follows the existing record's figure-based reading, and four animals per group with Student's t-tests provide no factorial interaction test or equivalence margin.",
      "A definitional reuse dependency is not a physical creation order, a causal effect or a claim of universal neural control of proliferation."
    ]
  },
  {
    "id": "B-capillary-timing-diameter-null-boundary",
    "kind": "method",
    "statement": "Longden et al. note that Attwell and colleagues reported capillaries dilating before upstream arterioles after stimulation (reference 43, Hall et al. 2014) and state that, although they detected no capillary dilation, the continuous segments they measured lacked pericytes, so overlying pericytes could regulate local diameter elsewhere. Hall et al. report earlier dilation of first-order capillaries than penetrating arterioles and more frequent dilation at pericyte locations. The stimulated capillary diameter null is therefore interpreted with the Hall sensory-evoked vascular timing record.",
    "scope": "Interpretation boundary between an anaesthetized mouse focal-potassium capillary-diameter null and an anaesthetized mouse whisker-pad vascular timing result.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "longden2017",
        "locator": "Figure 4e and Discussion: unchanged diameter at sampled capillary sites",
        "role": "method",
        "note": "Discussion on unchanged diameter at pericyte-free measured segments versus the Hall et al. report."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figure 3; Methods: adult anesthetized NG2-DsRed mice, whisker-pad stimulation and vascular response timing",
        "role": "supports",
        "note": "In vivo vessel-order timing and pericyte-location dilation frequency (Figure 3)."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Longden 2017 Discussion and the Hall 2014 in vivo Results were re-read in PMC; supplementary videos, raw images and animal-level diameter data were not replayed.",
      "Hall uses electrical whisker-pad stimulation in NG2-DsRed mice with branch-order and pericyte-proximity classification, Longden focal 10 mM potassium at pericyte-free segments, and Hill 2015 contests the pericyte attribution; neither finding shows that potassium signalling dilates pericyte-covered capillaries.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-pericyte-pge2-route-alternative",
    "kind": "method",
    "statement": "Hall et al. report in cerebellar slices that parallel-fibre-evoked capillary dilation is blocked by TTX and by EP4-receptor blockade, propose that capillaries may pass a hyperpolarizing vasodilatory signal back to arterioles, and leave open whether arterioles are signalled by pericytes. Longden et al. cite the PGE2-pericyte proposal and state it is conceivable that pericytes amplify electrical signals relayed to the upstream arteriole. The complete-route hypothesis therefore retains the slice pericyte route as an alternative or contributing segment.",
    "scope": "Interpretation of the unresolved potassium/connexin route hypothesis; juvenile rat cerebellar-slice pathway data are not an in vivo route test.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "longden2017",
        "locator": "Discussion: The capillary sensory web in context (pericyte and PGE2 proposals, refs 43-45)",
        "role": "method",
        "note": "Discussion subsection on the PGE2/pericyte proposal and possible pericyte amplification of conducted signals."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Results and Figures 1-2; Methods: juvenile rat cerebellar slice diameter, preconstriction, oxygenation and pathway blockade",
        "role": "supports",
        "note": "Slice pathway blockade: TTX- and EP4-sensitive capillary dilation."
      },
      {
        "sourceId": "hall2014-brain-mural-flow",
        "locator": "Discussion: capillary-first dilation, arteriole signalling and EP4/NO mechanisms",
        "role": "supports",
        "note": "Discussion: possible signalling from capillaries back to arterioles and the open arteriole-signal question."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Hall 2014 slice Results and Discussion and the Longden 2017 Discussion subsection were re-read in PMC; Extended Data, the retinal pericyte-coupling studies (Longden refs 44-45) and Krolak 2025 were not read for this bridge.",
      "Slice dilation depends on preconstriction, oxygen level and responder selection; neither study tests pericyte participation in Kir2.1-dependent conduction, and EP4 and potassium mechanisms are not shown to act in one sequence.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-awake-smc-hyperemia-neurovascular-scope",
    "kind": "review-finding",
    "statement": "Hill et al. image vascular responses to whisker stimulation in awake mice to determine which vessels respond to increased neuronal activity and thus regulate functional hyperemia, and conclude that in awake cortex functional hyperemia is mediated by calcium-dependent arteriolar smooth-muscle contractility rather than direct capillary pericyte contractility. The awake sensory response record is therefore an instance of the neurovascular coupling topic.",
    "scope": "Topic organization of an awake mouse two-photon mural-cell and diameter result; it contrasts with, and is not pooled with, the anaesthetized Hall preparation.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "hill2015-brain-mural-flow",
        "locator": "Results and Figure 6: awake-mouse whisker stimulation, smooth-muscle-positive versus negative segments",
        "role": "supports",
        "note": "Results framing and conclusion of the awake whisker-stimulation experiment."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Hill 2015 Results for Figure 6 were re-read in PMC4487786; the supplemental DOCX, movies and vessel-level raw data were not read.",
      "The pericyte null is bounded by SMA/morphology classification, NG2-Cre GCaMP3 labelling with ectopic neuronal expression, the stimulus and the temporal window; it does not test the capillary potassium route or show zero contractility in all pericytes.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-brainstem-inflammation-organ-coordination-scope",
    "kind": "review-finding",
    "statement": "Jin et al. report that chemogenetic activation of LPS-TRAPed cNST neurons inhibited the pro-inflammatory and increased the anti-inflammatory cytokine response, concluding that these brainstem neurons can bidirectionally regulate peripheral inflammation. Their Discussion describes the brain as a long-proposed master modulator of body biology including organ function and the circuit as ensuring homeostatic balance between pro- and anti-inflammatory states. The finding is thus an instance of the nervous-system coordination of body physiology topic.",
    "scope": "Topic organization of a genetically targeted mouse brainstem-circuit perturbation with circulating-cytokine endpoints.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "jin2024",
        "locator": "Figure 2b-c: LPS-TRAP2 inhibition and activation; Methods: Genetic access and Chemogenetic manipulation experiments and measurement of cytokines",
        "role": "supports",
        "note": "Results: LPS-TRAPed cNST activation lowers pro-inflammatory and raises anti-inflammatory cytokines."
      },
      {
        "sourceId": "jin2024",
        "locator": "Discussion, opening paragraphs: brain modulation of body biology and the proposed inflammatory rheostat",
        "role": "supports",
        "note": "Discussion: brain modulation of body biology and homeostatic inflammatory balance."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Jin 2024 Results section 'cNST activation suppresses inflammation' and the Discussion were re-read in PMC11186780; raw data and custom code were not obtained.",
      "Circulating cytokines after LPS are a systemic immune readout rather than an organ function; the descending efferent path and immune effector cells remain unidentified, and the thermoregulatory, thirst and cerebral-vascular cases of the scope are separate preparations that are not pooled.",
      "Topic-scope organization is a descriptive membership, not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-shannon-model-retinal-timing-information",
    "kind": "method",
    "statement": "Berry et al. calculate the Shannon information conveyed by the first-spike time and spike count of retinal firing events with a Gaussian entropy heuristic, assume independently generated events, and state that analysis of retinal recordings alone cannot answer whether the brain uses this information but establishes bounds for downstream visual computation. The interpretation of the timing-information record therefore depends on the explicit source, channel and variable mapping that the neural communication-model hypothesis leaves to be tested.",
    "scope": "Interpretation of an information estimate from repeated-flicker retinal recordings; no downstream readout is measured.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "berry1997-retinal-spike-trains",
        "locator": "Methods and Analysis: Information Calculations; Figure 5; Discussion: independence, Gaussian approximation and downstream-readout caveats",
        "role": "method",
        "note": "Information calculation for event timing and count, and the Discussion caveats on independence and downstream use."
      },
      {
        "sourceId": "shannon1948",
        "locator": "Combined corrected reprint: Introduction, PDF pp. 1-2; Section 6, PDF pp. 10-11",
        "role": "supports",
        "note": "Entropy definition underlying the information measure; Berry cites the 1949 Shannon and Weaver book edition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Reading limit: the Berry 1997 information methods and Discussion were re-read in PMC HTML and Shannon 1948 Section 6 in the repository reprint; Berry's reference 32 is the 1949 Shannon and Weaver book, and the non-Poisson calculation of reference 33 was not read.",
      "The estimate uses Gaussian approximations and event independence that the authors note are violated; the C. elegans signal atlas and Shannon's formalism do not identify a retinal code, and no transfer of information to LGN or cortex is measured.",
      "A described interpretation dependency is not a physical creation order, a causal effect or a claim of universal necessity."
    ]
  },
  {
    "id": "B-auction-rules-under-institutional-change",
    "kind": "review-finding",
    "statement": "Smith states that he varied the experimental design to study the effect of changes in the rules of market organization on market-price behavior, and tentatively concludes that markets whose institutional organization lets only sellers quote prices may show weaker equilibrium tendencies than two-sided markets. The rule-bound auction record therefore qualifies the institutional-change scope's category of specified rules whose alteration accompanies different short laboratory outcomes, alongside but separate from the common-pool and public-goods treatments already organized there.",
    "scope": "Topic-scope organization of the Smith 1962 classroom-auction record under 'Evolution of Complex Social Institutions'; market trading rules as researcher-specified laboratory institutions only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "smith1962-experimental-market",
        "locator": "Section II, pp. 112-116: Experimental Procedure",
        "role": "supports",
        "note": "Page 114, note 5: the design was varied to study changes in the rules of market organization on market-price behavior."
      },
      {
        "sourceId": "smith1962-experimental-market",
        "locator": "Section VI, pp. 134-135: Summary and qualified convergence conclusions",
        "role": "supports",
        "note": "Page 134, conclusion 4: markets whose institutional organization admits only seller quotations may show weaker equilibrium tendencies; conclusions are declared tentative."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Evolution of Complex Social Institutions",
        "role": "provenance",
        "note": "Reviewed scope defining institutions as specified rules, offices and practices and their alteration, with short laboratory treatments as bounded evidence."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Dynamics of Economic Markets",
        "role": "limits",
        "note": "The market scope keeps Smith's conditional price/volume behavior separate from production, crisis, trust or a universal decentralized regime."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Only Smith's Section II procedure (pp. 112-116) and Section VI summary (pp. 134-135) were read in the published scan; individual trading charts, the seller-only treatment data and the excess-rent regressions were not reconstructed. Smith himself calls broad generalization premature and his conclusions tentative.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. Organizing the auction record under the institutional scope does not establish that trading rules alone fix prices, that classroom rules are historical institutions, or any path dependence, reproduction or autonomous institutional force.",
      "Classroom markets with assigned reservation values and imagined profits, CPR token-allocation designs and public-goods punishment games are distinct preparations; they are not pooled, and no common institutional effect size is admitted."
    ]
  },
  {
    "id": "B-convention-game-model-under-norms",
    "kind": "review-finding",
    "statement": "To test whether their spatial result generalizes, Couzin et al. use reduced models, one of which is a convention game of self-reinforcing normative opinion dynamics in which individuals probabilistically adopt the perceived local-majority opinion and preference strength acts as intransigence; in all their models an entrenched minority can exert influence by biasing the perceived consensus. The model-bound minority/majority transition therefore qualifies the norms-and-conventions scope as a declared model setting of convention dynamics, kept separate from the observed naming convention and from punishment records.",
    "scope": "Topic-scope organization of the Couzin 2011 model record under 'Social Norms and Conventions'; model-bound coordination dynamics only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "couzin2011-consensus",
        "locator": "Main paper pp. 1578-1580 and Figures 1-3: spatial/network predictions, golden-shiner choice and reversed-target null",
        "role": "supports",
        "note": "Page 1579: reduced network and convention-game models with local-majority adoption and intransigence; entrenched minorities bias perceived consensus in all models."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Social Norms and Conventions",
        "role": "provenance",
        "note": "Reviewed scope: a convention is represented through its particular coordination and incentive setting; moral norms and expectations need separate measurement."
      },
      {
        "sourceId": "centola2018-convention-tipping",
        "locator": "Main pp. 1116-1118: naming protocol, committed-minority trials, Figures 1-3 and scope limits",
        "role": "limits",
        "note": "The scope's observed convention case is a payoff-coordinated naming game; its approximately 25% critical mass is explicitly not universal and is not the modeled transition."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The convention-game description was read only in the main paper (p. 1579, citing H. P. Young's evolutionary theory of institutions); its equations, parameters and results in the unread supporting pages were not read or replayed, and the cited Young book was not read.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. The organization does not show that fish or humans follow conventions, that conformity produces consensus, or that the modeled transition calibrates human convention change.",
      "'Normative' in the model denotes majority-reinforcing opinion adoption; no normative expectation, obligation, reputation or sanction is modeled or measured, and fish target choice is not reclassified as a convention."
    ]
  },
  {
    "id": "B-bird-conformity-norm-under-norms",
    "kind": "review-finding",
    "statement": "Aplin et al. frame their experiment against human cultural norms arising from high-fidelity social learning, state that the stability of the seeded arbitrary traditions appeared to result from informational conformity, and conclude that they demonstrate conformist transmission and cultural norms in foraging techniques in a wild animal. The conformity record therefore qualifies the norms-and-conventions scope with a descriptive, conformity-maintained majority technique; under the scope's own distinctions this is neither a payoff-coordinated convention nor a prescriptive norm.",
    "scope": "Topic-scope organization of the Aplin 2015 conformity record under 'Social Norms and Conventions'; source-labelled cultural norm as a population-level technique regularity.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "aplin2015-bird-traditions",
        "locator": "Abstract and opening main-text paragraph: human cultural norms, social transmission and tradition framing",
        "role": "supports",
        "note": "Abstract: human cultural norms arise through social learning in networks; the study presents conformity and cultural norms in foraging techniques."
      },
      {
        "sourceId": "aplin2015-bird-traditions",
        "locator": "Concluding summary paragraph before Materials and Methods: arbitrary traditions, informational conformity and cultural norms",
        "role": "supports",
        "note": "Concluding paragraph: stability attributed to informational conformity; first experimental demonstration of conformist transmission and cultural norms in a wild animal."
      },
      {
        "sourceId": "aplin2015-bird-traditions",
        "locator": "Main results and Figures 1-2: seeded diffusion, controls and conformity inference",
        "role": "limits",
        "note": "The conformity inference is a fitted statistical interpretation of acquisition order and association networks, with both techniques equally rewarded."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Social Norms and Conventions",
        "role": "provenance",
        "note": "Reviewed scope: shared expectations, reputation, exclusion and moral obligation require separate measurements."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The abstract, opening and concluding main-text paragraphs were read in Europe PMC XML in addition to the existing results/methods readings; supplementary files, RFID records and network/model code were not replayed.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. The organization does not establish that conformity produces norms, that birds hold expectations or obligations, or a general route from animal social learning to human norms.",
      "Both puzzle techniques were equally rewarded, so matching the local majority carries no coordination payoff; the bird 'cultural norm' stays distinct from Centola's payoff-coordinated naming convention and from Herrmann's sanctioned cooperation."
    ]
  },
  {
    "id": "B-bird-diffusion-under-variant-propagation",
    "kind": "review-finding",
    "statement": "Aplin et al. describe socially learned novel behaviours that spread between individuals to form group-level behaviours termed cultural traditions, with spread and persistence shaped by social transmission between interacting individuals, and report that the seeded information spread through social network ties to most individuals. The seeded-diffusion record therefore qualifies the cultural-variant-propagation scope with a chosen behavioural variant, its observed transmission and its retention in a wild animal population.",
    "scope": "Topic-scope organization of the Aplin 2015 seeded-diffusion record under 'Cultural Transmission, Recombination, and Idea Propagation'; animal behavioural variant only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "aplin2015-bird-traditions",
        "locator": "Abstract and opening main-text paragraph: human cultural norms, social transmission and tradition framing",
        "role": "supports",
        "note": "Opening paragraph and abstract: social learning spreads novel behaviours into cultural traditions; seeded information spread through social network ties."
      },
      {
        "sourceId": "aplin2015-bird-traditions",
        "locator": "Main results and Figures 1-2: seeded diffusion, controls and conformity inference",
        "role": "supports",
        "note": "Seeded versus control diffusion and technique bias, as already admitted for the diffusion record."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Cultural Transmission, Recombination, and Idea Propagation",
        "role": "provenance",
        "note": "Reviewed scope separating a chosen content variant, its observable transmission, a reconstructed cascade and a meme hypothesis."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The abstract and opening paragraph were read in Europe PMC XML together with the existing main-results reading; RFID records, network inference code and supplementary analyses were not replayed.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. The organization does not admit a universal memetic unit, a fixed cultural fitness, a source-independent replication mechanism or equivalence between bird foraging techniques and human language or news.",
      "Puzzle solutions logged by RFID, laboratory language outputs and reconstructed retweet cascades are different observables and preparations; no common propagation rate or carrier minimum is inferred."
    ]
  },
  {
    "id": "B-naming-convention-under-linguistic-change",
    "kind": "review-finding",
    "statement": "Centola et al. describe their naming task as pairwise coordination in the real-time exchange of linguistic alternatives, compare their critical mass with simulations of linguistic conventions, and study whether a committed minority replaces an established convention. The bounded success and failure of convention replacement therefore qualifies the cultural-linguistic-change scope as a finite laboratory case of lexical-convention change produced by peer coordination rather than by learner-to-learner transmission.",
    "scope": "Topic-scope organization of the Centola 2018 naming-convention record under 'Cultural and Linguistic Evolutionary Change'; one name-to-face convention in finite online groups.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "centola2018-convention-tipping",
        "locator": "Main pp. 1116-1118: naming protocol, committed-minority trials, Figures 1-3 and scope limits",
        "role": "supports",
        "note": "Pages 1116-1117: names as linguistic alternatives, comparison with simulations of linguistic conventions, committed-minority replacement of an established convention."
      },
      {
        "sourceId": "centola2018-convention-tipping",
        "locator": "Main pp. 1116-1118: naming protocol, committed-minority trials, Figures 1-3 and scope limits",
        "role": "limits",
        "note": "Page 1118: the 25% critical mass is not expected to be universal; applicability to specific settings requires further work."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Cultural and Linguistic Evolutionary Change",
        "role": "provenance",
        "note": "Reviewed scope representing cultural change through finite laboratory language experiments with distinct observables."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The main text and figure legends were read in the university-hosted PDF; the supplementary Methods, individual data and the calibrated model were not replayed.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. The organization does not establish historical language change, compositional or structural evolution, a progression from conventions or institutions to language, or a universal tipping value.",
      "Pairwise payoff-coordinated naming in online groups with confederates and Kirby's iterated learning of structured labels are different preparations and observables; they are not pooled."
    ]
  },
  {
    "id": "B-empathy-instrument-boundary-for-group-sensitivity",
    "kind": "method",
    "statement": "In Woolley et al.'s second study, individuals completed social sensitivity tests before group work; the corrected supporting material identifies the measure as the 'Reading the Mind in the Eyes' test, in which participants choose which of four words best describes what a photographed person is thinking or feeling, and calls it an advanced theory of mind test of mental-state attribution. The reported correlation of c with average social sensitivity (r = 0.26) is therefore read as an association with this instrument-specific score. Under the Level-6 boundary, emotion recognition and interpersonal accuracy are observables distinct from self-reported affect and helping, and Decety and Jackson leave the overlap of empathy and mentalizing unresolved.",
    "scope": "Interpretation of the social-sensitivity predictor in the woolley2010-variable-groups preparation; instrument identity and construct boundary only.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "woolley2010-collective-factor",
        "locator": "Corrected Supporting Online Material, 29 October 2010: Studies 1-2 participants, procedures and measures; Table S4 correction notice",
        "role": "method",
        "note": "Study 2 individual measures and the Social Sensitivity paragraph: Eyes test administration and its description as a theory-of-mind test; Study 1 lists only a brief intelligence test."
      },
      {
        "sourceId": "woolley2010-collective-factor",
        "locator": "Main article pp. 686-688: Studies 1-2, Table 1 and Figures 1-2",
        "role": "method",
        "note": "Page 688: correlation of c with average social sensitivity measured by the Eyes test (r = 0.26, P = 0.002), reported alongside speaking-turn and sex-composition correlates."
      },
      {
        "sourceId": "decety2004",
        "locator": "Pages 71-75: empathy definitions, distinctions and proposed functional components",
        "role": "supports",
        "note": "Page 74: mentalizing attributes mental states including emotions; whether empathy and mentalizing overlap is unresolved."
      },
      {
        "sourceId": "decety2004",
        "locator": "Pages 80-84; Figure 3: self-other awareness, agency and executive-function dissociations",
        "role": "supports",
        "note": "Page 82: judging the emotion in another person's gaze is listed among mentalizing tasks."
      },
      {
        "sourceId": "neural-systems-review",
        "locator": "Scope contract: Neural Mechanisms of Social Recognition and Empathy",
        "role": "provenance",
        "note": "Level-6 scope listing mental-state attribution separately from affect sharing and helping, with instrument identity explicit."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Woolley's main text and corrected supporting material were read; the cited Baron-Cohen et al. 2001 test publication, its item key and the relation of the reported 35-photograph administration to the published test version were not checked, and raw individual or group scores were not reproduced.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. Random team allocation does not randomize social sensitivity; the association does not show that mental-state attribution, any neural mechanism or any individual capacity produces collective intelligence or is a minimal requirement for it.",
      "The supporting material's suggestion that the Eyes test measures a fundamental property of individual brain function is the authors' interpretation based on other cited studies; no neural readout was taken in this preparation."
    ],
    "contextIds": [
      "woolley2010-variable-groups"
    ]
  },
  {
    "id": "B-isolation-housing-under-social-neural-feedback",
    "kind": "review-finding",
    "statement": "Song et al. subject mice to a social isolation regime to test experience-dependent regulation of radial glia-like stem cells and compare RGL EdU and MCM2 measures between isolated and group-housed mice with and without PV-interneuron activation. The residual isolation contrast in EdU density under PV activation therefore qualifies the 'Societal Feedback on Individual Neurodynamics' scope as a mouse social-housing condition associated with a neural stem-cell marker difference, alongside but separate from the acute exclusion imaging and rat maternal-care observations.",
    "scope": "Topic-scope organization of one Song 2012 housing-contrast record under the Level-7 societal-feedback scope; mouse housing condition and dentate RGL markers only.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "song2012",
        "locator": "Results, pages 152-153; Figure 5a-b: social isolation and seven-day clone composition",
        "role": "supports",
        "note": "Page 152: social isolation regime introduced to test experience-dependent regulation; clonal activation versus group housing."
      },
      {
        "sourceId": "song2012",
        "locator": "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons",
        "role": "supports",
        "note": "Page 152 and Figure 5 legend: population EdU/MCM2 comparisons across housing and PV stimulation; the existing record keeps the residual EdU contrast under PV activation."
      },
      {
        "sourceId": "social-systems-review",
        "locator": "Scope contract: Societal Feedback on Individual Neurodynamics",
        "role": "provenance",
        "note": "Reviewed scope bounded by acute exclusion imaging and admitted rat maternal-environment records; no universal downward/diagonal law or minimum neural carrier."
      }
    ],
    "checkIds": [],
    "limitations": [
      "The Results text for Figure 5 and the Figure 5 legend were read in the hosted PDF; Online Methods, Supplementary Figure 7 timelines and animal-level counts were not re-read or replayed in this session.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. Single housing changes contact, activity and stress together; the organization does not identify a social or societal cause, complete PV mediation (the residual EdU contrast contradicts complete rescue) or a long-term plasticity outcome.",
      "Mouse housing, human Cyberball exclusion and rat maternal-care cohorts retain different species, times and evidence types; they are not pooled, and no human institutional variable is inferred from a laboratory housing condition."
    ]
  },
  {
    "id": "B-exclusion-distress-in-partner-pain-interpretation",
    "kind": "method",
    "statement": "In interpreting shared self- and partner-pain ACC and anterior-insula responses as second-order re-representations of the subjective affective dimension of pain, Singer et al. note that activation in these regions accompanies subjective feelings including distress resulting from social exclusion, citing as reference 37 Eisenberger, Lieberman and Williams 2003. Eisenberger et al. read their exclusion-related dorsal ACC response through the affective rather than sensory component of pain. The partner-pain hypothesis's interpretation thus uses the exclusion-distress association as one of four cited subjective-feeling examples.",
    "scope": "Interpretive use of the Eisenberger 2003 exclusion-distress association within Singer 2004's affective re-representation hypothesis; cited context only, no pooled preparation.",
    "status": "method-contract",
    "citations": [
      {
        "sourceId": "singer2004",
        "locator": "Pages 1160-1161: affective representation and re-representation interpretation",
        "role": "method",
        "note": "Interpretation passage listing subjective-feeling imaging associations (references 34-37) before the second-order re-representation proposal."
      },
      {
        "sourceId": "singer2004",
        "locator": "Reference list entries 34-37 (Europe PMC reference metadata for PMID 14976305)",
        "role": "method",
        "note": "Reference 37 identified as Eisenberger NI, Lieberman MD, Williams KD, Science 302:290-292 (2003) in Europe PMC reference metadata."
      },
      {
        "sourceId": "eisenberger2003-social-exclusion",
        "locator": "Pages 290-292: Cyberball scan sequence, BOLD/distress results, Figures 1-2 and explicit design limitations",
        "role": "supports",
        "note": "Dorsal ACC read as the affectively distressing pain component; distress correlates with ACC; anterior insula active but not distress-associated; fixed scan order."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Singer's interpretation passage, the reference identity (through Europe PMC metadata, because the PDF reference list was not machine-readable here) and Eisenberger's main article were read; supplementary methods of both studies were not read and no imaging data were reanalysed.",
      "A described topic-scope or interpretation dependency is not a physical creation order, a causal effect, a construction of one level from another or a claim of universal necessity. A cited example is not a test: Eisenberger's preparation has no physical-pain condition and Singer's has no exclusion condition, so neither shared affective coding nor identity of social and physical pain is established.",
      "Regional labels are not voxel-level overlap: Singer refers to rostral ACC and anterior insula, while Eisenberger reports distress associations for dorsal ACC and RVPFC and an anterior-insula response not associated with distress."
    ]
  },
  {
    "id": "B-gibbs-equilibrium-capn-sequential-binding",
    "kind": "review-finding",
    "statement": "Popovych et al. use ITC to measure the association free energy of each cAMP binding step with its enthalpic and entropic components; Figure 7 gives stepwise dissociation constants of 0.04 and 4 micromolar, and the text states that the free-energy difference of -2.8 kcal/mol between the steps corresponds to a 100-fold lower affinity for the second cAMP. These quantities are related through the standard equilibrium constant K = exp(-deltaG/RT) of the reaction-Gibbs convention (at 30 C, RT ln 100 is about 2.8 kcal/mol), so the record's free energies are defined with that convention.",
    "scope": "Definition of reported binding thermodynamic quantities in one calorimetric preparation; no binding mechanism, cooperativity model or universal binding law.",
    "status": "definition",
    "citations": [
      {
        "sourceId": "popovych2006-capn-allostery",
        "locator": "NIH author-manuscript HTML Results Thermodynamic basis of the negatively cooperative binding, Figure 7, and Methods ITC experiments: biphasic heat curve, sequential-site model, stepwise constants and thermodynamic terms",
        "role": "supports",
        "note": "Re-read in PMC HTML for this bridge: ITC measures the association free energy and its components, Figure 7 gives the stepwise dissociation constants, and the free-energy difference is stated as a 100-fold affinity difference."
      },
      {
        "sourceId": "iupac2007-green-book-kinetics-thermodynamics",
        "locator": "Green Book, 3rd ed., sections 2.11-2.11.1, pp. 58, 60-62: standard reaction Gibbs energy, reaction quotient, equilibrium constant and standard states",
        "role": "supports",
        "note": "Re-read in the recorded IUPAC PDF for this bridge: the standard equilibrium constant is defined as exp(-standard reaction Gibbs energy/RT), with the inverse relation in the notes."
      }
    ],
    "checkIds": [],
    "limitations": [
      "Read: the Popovych Results section on the thermodynamic basis of negatively cooperative binding, the Figure 7 caption and the Methods ITC section in PMC HTML, and Green Book pp. 58 and 60-62. ITC raw data, fit residuals, supplementary material and the standard state behind the printed free energies were not reproduced.",
      "Agreement of the rounded printed free energies with RT ln Kd at 30 C is a reading check only; the fitted sequential-site model, its uncertainties and the entropic interpretation keep the source's limits.",
      "A described definition dependency is not a physical creation order, a causal effect or a claim of universal necessity, and it does not pool this calorimetric preparation with any other."
    ]
  }
];
export const BRIDGE_RELATIONS = [
  {
    "id": "bridge:omega-compensation",
    "source": "l0:omega",
    "target": "l0:compensation",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The compensation relation is defined on a local deviation δΩ of the admissibility context Ω: the manuscript writes E = C(δΩ), with C the minimal compensation function. This is an argument dependency of an author definition, not a process in which Ω produces compensation or energy.",
    "claimIds": [
      "B-omega-compensation"
    ]
  },
  {
    "id": "bridge:compensation-oscillatory-mode",
    "source": "l0:compensation",
    "target": "l0:oscillatory-mode",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The oscillatory mode class is introduced as a minimal stable compensatory form: ψ = A e^{i(kx−ωt)} denotes the simplest oscillatory configuration said to preserve admissible compensation. The mode definition uses the compensation notion; equation satisfaction, stability and objecthood remain separate tests.",
    "claimIds": [
      "B-compensation-oscillatory-mode"
    ]
  },
  {
    "id": "bridge:compensation-hyperbolic-frame",
    "source": "l0:compensation",
    "target": "l0:hyperbolic-frame",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The assumed hyperbolic frame is argued from five stated admissibility conditions, one of which is compensatory boundedness; definite signatures are rejected as incompatible with compensatory balance between ordered variation and directional localization. The frame's stated assumptions use the compensation notion; this does not force the signature.",
    "claimIds": [
      "B-compensation-hyperbolic-frame"
    ]
  },
  {
    "id": "bridge:compensation-discrete-scale",
    "source": "l0:compensation",
    "target": "l0:discrete-scale",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The discrete-scale hypothesis is stated as a discrete compensation scale: ℏ is introduced as a marker of discrete compensatory action and of the discreteness of admissible compensation in oscillatory regimes. The hypothesis is defined with the compensation notion; no discrete spectrum follows from that wording.",
    "claimIds": [
      "B-compensation-discrete-scale"
    ]
  },
  {
    "id": "bridge:oscillatory-mode-discrete-scale",
    "source": "l0:oscillatory-mode",
    "target": "l0:discrete-scale",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The discrete-scale relations E = ℏω and p = ℏk are written with the frequency ω and wave number k of the oscillatory mode ψ = A e^{i(kx−ωt)}, and the manuscript lists (k, ω, ℏ) as the parameters within whose bounded range such a mode is said to remain stable. The hypothesis uses the mode parameters; no rule selecting discrete values is supplied.",
    "claimIds": [
      "B-oscillatory-mode-discrete-scale"
    ]
  },
  {
    "id": "bridge:anisotropy-field-anisotropy-boundary",
    "source": "l0:anisotropy",
    "target": "phys:field-anisotropy-boundary",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The field-anisotropy interpretation boundary evaluates the Level-0 anisotropy proposal: it lists what an anisotropy assertion must specify, uses the free real scalar dispersion as an isotropic comparison and admits no anisotropic field regime or directional-admissibility law. Neither record establishes anisotropy, and F12 remains unresolved.",
    "claimIds": [
      "B-anisotropy-field-anisotropy-boundary"
    ]
  },
  {
    "id": "bridge:directional-gradient-field-anisotropy-boundary",
    "source": "l0:directional-gradient",
    "target": "phys:field-anisotropy-boundary",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The field-anisotropy boundary evaluates the directional-gradient proposal: it records that no admissibility functional, domain, gradient operator, units, field-observable map or testable anisotropy prediction is supplied, so the gradient name cannot connect Level 0 to a field model. F12 remains unresolved.",
    "claimIds": [
      "B-directional-gradient-field-anisotropy-boundary"
    ]
  },
  {
    "id": "bridge:directional-gradient-photon-polarization-scope",
    "source": "l0:directional-gradient",
    "target": "phys:photon-polarization-scope",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The photon polarization scope evaluates the directional-gradient proposal as a polarization-response question: in the free Maxwell model the two transverse polarization modes have the same free frequency and no preferred vacuum axis, and the record states that the directional admissibility gradient has no functional, domain, operator, units or field-response map.",
    "claimIds": [
      "B-directional-gradient-photon-polarization-scope"
    ]
  },
  {
    "id": "bridge:transport-bias-directional-excitation-boundary",
    "source": "l0:transport-bias",
    "target": "phys:directional-excitation-boundary",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The directional excitation boundary evaluates the transport-bias proposal: it separates dispersion and envelope velocity, damping, localization and decay, treats free-scalar group velocity as no net directed current, and records that the proposal has no admissibility functional, units, field observable or testable drift prediction. F12 remains unresolved.",
    "claimIds": [
      "B-transport-bias-directional-excitation-boundary"
    ]
  },
  {
    "id": "bridge:anisotropy-scalar-dispersion-isotropy",
    "source": "l0:anisotropy",
    "target": "phys:scalar-dispersion-isotropy",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The isotropic free-scalar dispersion record supplies the formal null against which a proposed directional anisotropy is evaluated: rotation-related wave vectors of equal magnitude have equal energy at fixed mass, and the record states that its inputs neither yield anisotropy nor supply a Level-0 admissibility-gradient mechanism.",
    "claimIds": [
      "B-anisotropy-scalar-dispersion-isotropy"
    ]
  },
  {
    "id": "bridge:carrier-promotion-quantum-field-framework",
    "source": "l0:carrier-promotion",
    "target": "phys:quantum-field-framework",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The quantum-field framework definition is scoped against a construction from Level 0 and states what a quantum-field target must specify: quantum fields, states and dynamics with chosen fields, symmetries and interactions. That specification is what C-phys-l0-bridge records as missing from the carrier-promotion contract; the bridge evaluates the proposal and derives nothing.",
    "claimIds": [
      "B-carrier-promotion-quantum-field-framework"
    ]
  },
  {
    "id": "bridge:free-scalar-quantization-discrete-scale",
    "source": "phys:free-scalar-quantization",
    "target": "l0:discrete-scale",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The discrete-scale hypothesis is interpreted with the free real scalar quantization: there, discreteness enters through the canonical commutators as integer occupation of each mode, with energy steps ω_p in ħ = 1 units, while ω_p ranges over continuous momenta unless boundaries are imposed. E = ℏω and p = ℏk therefore do not by themselves make ω or k discrete.",
    "claimIds": [
      "B-free-scalar-quantization-discrete-scale"
    ]
  },
  {
    "id": "bridge:free-field-time-evolution-closure-parameter",
    "source": "phys:free-field-time-evolution",
    "target": "l0:closure-parameter",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The declared Level-0 case convention ∂²tΨ − ∂²xΨ + m²Ψ = 0 with m² = ω² − k² is the free Klein-Gordon equation of the free real scalar evolution record restricted to one spatial dimension, with the same plane-wave dispersion ω² = k² + m². The identity is mathematical; it does not identify Ψ with a quantum field or m with a measured mass.",
    "claimIds": [
      "B-free-field-time-evolution-closure-parameter"
    ]
  },
  {
    "id": "bridge:free-field-time-evolution-sequential-axis",
    "source": "phys:free-field-time-evolution",
    "target": "l0:sequential-axis",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript proposes that the sequential operator ∂t opens the condition for temporal directionality and that time first appears as a directional condition of distinguishability; the physical notion referred to is the time parameter of Hamiltonian evolution in the free scalar record. This records the author's proposed reading; it does not identify the sequential primitive with measured time.",
    "claimIds": [
      "B-free-field-time-evolution-sequential-axis"
    ]
  },
  {
    "id": "bridge:free-scalar-propagation-spatial-axis",
    "source": "phys:free-scalar-propagation",
    "target": "l0:spatial-axis",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript proposes that the operator ∂x opens the condition for spatial localization and that spatial interpretation becomes admissible only after localization stabilizes; the physical notion referred to is spatial localization of free-field excitations, which in L1 requires smeared wavepackets moving in flat space. This records the author's proposed reading, not a derivation of space.",
    "claimIds": [
      "B-free-scalar-propagation-spatial-axis"
    ]
  },
  {
    "id": "bridge:free-field-time-evolution-compensation",
    "source": "phys:free-field-time-evolution",
    "target": "l0:compensation",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript defines energy at Level 0 as the structural measure of compensatory requirement, E = C(δΩ), and concludes that energy appears as a compensatory measure of admissible deviation; the physical notion referred to is energy as the Hamiltonian of a specified field. This records the author's proposed reading only; C has no specified form to compare.",
    "claimIds": [
      "B-free-field-time-evolution-compensation"
    ]
  },
  {
    "id": "bridge:free-scalar-quantization-closure-parameter",
    "source": "phys:free-scalar-quantization",
    "target": "l0:closure-parameter",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript proposes the scalar closure parameter m² as the precursor of what physical theory will later describe as mass, to be reinterpreted only once localized node-like units are admissible; the physical notion referred to is the mass m of the free scalar's particle states, E_p² = p² + m². This records the author's proposed reading; no mass identification is established.",
    "claimIds": [
      "B-free-scalar-quantization-closure-parameter"
    ]
  },
  {
    "id": "bridge:free-scalar-quantization-crt-node",
    "source": "phys:free-scalar-quantization",
    "target": "l0:crt-node",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript proposes that a coherently stabilized resonant node behaves, at the level of admissibility, as a particle-like unit in 1+1 dimensions while not asserting physical particles; the physical notion referred to is the particle of a quantized field, a Fock excitation of definite momentum and mass. This records the author's proposed reading; no CRT instance or particle identification is admitted.",
    "claimIds": [
      "B-free-scalar-quantization-crt-node"
    ]
  },
  {
    "id": "bridge:free-scalar-quantization-quadratic-action",
    "source": "phys:free-scalar-quantization",
    "target": "l0:quadratic-action",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript names the variational equation of its quadratic action a Klein-Gordon-type form and its operator the hyperbolic d'Alembertian class, while reading both as Level-0 admissibility devices rather than the wave operator of later physics; the physical notion referred to is the free Klein-Gordon field. As written, the source's operator and mass signs do not match that form (F02).",
    "claimIds": [
      "B-free-scalar-quantization-quadratic-action"
    ]
  },
  {
    "id": "bridge:quantum-field-framework-ensemble-quantum",
    "source": "phys:quantum-field-framework",
    "target": "l0:ensemble-quantum",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The manuscript proposes ensemble-quanta as the basic carriers of a Level-1 effective field Φ and calls the hierarchy φp → ensemble-quantum → Φ the ontological foundation of the first quantum-field level, while stating that an ensemble-quantum is not a particle or field excitation and that no quantum-field theory is completed; the physical notion referred to is the quantum-field framework.",
    "claimIds": [
      "B-quantum-field-framework-ensemble-quantum"
    ]
  },
  {
    "id": "bridge:inclusive-decay-width-branching-partial-lifetime",
    "source": "phys:inclusive-decay-width-branching",
    "target": "phys:partial-lifetime",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The partial-lifetime convention tau/B=1/Gamma_channel uses the branching fraction of the inclusive width convention, B_f=Gamma_f/Gamma_tot over a complete channel partition, with tau the inverse total decay rate; in inverse-time units the channel rate is Gamma_f/hbar=B_f/tau. This is a definitional transfer, not evidence that the proton decays or that its channel partition is known.",
    "claimIds": [
      "B-inclusive-width-branching-partial-lifetime"
    ]
  },
  {
    "id": "bridge:resonance-lifetime-convention-exponential-survival",
    "source": "phys:resonance-lifetime-convention",
    "target": "phys:exponential-survival",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The ensemble survival record applies the exponential survival law and the mean-lifetime-as-inverse-decay-rate convention of the C001 lifetime record to a stored neutron population; its effective loss rate adds non-decay losses to the beta-decay rate 1/tau_n, so 1/lambda equals the conventional lifetime only after those losses are corrected.",
    "claimIds": [
      "B-lifetime-convention-exponential-survival"
    ]
  },
  {
    "id": "bridge:penning-cyclotron-ratio-proton-moment-frequency-ratio",
    "source": "phys:penning-cyclotron-ratio",
    "target": "phys:proton-moment-frequency-ratio",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The proton spin-to-cyclotron ratio g_p/2=nu_L/nu_c uses the free cyclotron frequency reconstructed from the three trap eigenfrequencies by the invariance relation declared in the C001 cyclotron-comparison record; the ratio gives the moment in nuclear magnetons but transfers no mass value or trap correction between the experiments.",
    "claimIds": [
      "B-penning-cyclotron-proton-moment-ratio"
    ]
  },
  {
    "id": "bridge:quark-electromagnetic-current-sachs-form-factors",
    "source": "phys:quark-electromagnetic-current",
    "target": "phys:sachs-form-factors",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The Sachs form factors are combinations of the Dirac and Pauli form factors that parametrize the proton's elastic electromagnetic-current response; in the light-front treatment that current is identified at x+=0 with the free quark current weighted by quark charges, the C001 quark electromagnetic current. The MAMI fit determines no quark amplitudes, flavor separation or geometry.",
    "claimIds": [
      "B-quark-current-sachs-form-factors"
    ]
  },
  {
    "id": "bridge:sachs-form-factors-neutron-sachs-ratio",
    "source": "phys:sachs-form-factors",
    "target": "phys:neutron-sachs-ratio",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The CLAS neutron response is defined with the same one-photon Sachs decomposition that the C025 record states for the proton, now with GE_n and GM_n and the dipole and magnetic-moment normalization; no MAMI cross section or fit enters the CLAS or Hall A extractions.",
    "claimIds": [
      "B-sachs-neutron-sachs-ratio"
    ]
  },
  {
    "id": "bridge:penning-cyclotron-ratio-electron-moment-frequency-ratio",
    "source": "phys:penning-cyclotron-ratio",
    "target": "phys:electron-moment-frequency-ratio",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The electron anomaly ratio g/2=1+nu_a/nu_c uses the free cyclotron frequency obtained from the trap-modified cyclotron, axial and magnetron frequencies by the invariance relation declared in the C001 cyclotron-comparison record; the relativistic shift and cavity correction remain separate electron-specific terms.",
    "claimIds": [
      "B-penning-cyclotron-electron-moment-ratio"
    ]
  },
  {
    "id": "bridge:lepton-charge-flavor-electron-moment-normalization",
    "source": "phys:lepton-charge-flavor",
    "target": "phys:electron-moment-normalization",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The signed electron-moment normalization -mu/mu_B=g/2 with positive mu_B=e*hbar/(2m) uses the declared charge convention in which e>0 is the positron charge and the electron carries -e; the convention fixes signs and units, not the measured g/2.",
    "claimIds": [
      "B-lepton-charge-electron-moment-normalization"
    ]
  },
  {
    "id": "bridge:higgs-rate-modifiers-atlas2012-combined-excess",
    "source": "phys:higgs-rate-modifiers",
    "target": "phys:atlas2012-combined-excess",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The ATLAS common signal strength 1.4+/-0.3 is interpreted with the narrow-resonance rate convention: it scales every SM-predicted signal yield by one factor relative to the fixed-mass SM reference, the special case of equal mu_if across channels; it is not a coupling, width or Yukawa determination.",
    "claimIds": [
      "B-higgs-rate-modifiers-atlas2012-strength"
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "bridge:dilepton-invariant-mass-atlas2012-four-lepton-candidates",
    "source": "phys:dilepton-invariant-mass",
    "target": "phys:atlas2012-four-lepton-candidates",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The ATLAS four-lepton candidate readout is built from same-flavour, opposite-charge lepton pairs whose reconstructed invariant masses m12 and m34 define the selection windows, with the four-lepton invariant mass as the displayed observable; it uses the C001 pair invariant-mass convention on calibrated lepton four-momenta.",
    "claimIds": [
      "B-dilepton-mass-atlas2012-four-lepton"
    ],
    "contextIds": [
      "atlas2012-acquisition"
    ]
  },
  {
    "id": "bridge:higgs-doublet-background-atlas2012-higgs-compatibility",
    "source": "phys:higgs-doublet-background",
    "target": "phys:atlas2012-higgs-compatibility",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "ATLAS reads its excess against the SM Higgs hypothesis, the scalar implied by the electroweak symmetry-breaking mechanism, which in the declared single-doublet background is the one neutral physical scalar H whose couplings are fixed once its mass is specified; compatibility does not establish the doublet structure or exclude extended Higgs sectors.",
    "claimIds": [
      "B-higgs-doublet-atlas2012-compatibility"
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "bridge:weak-gauge-currents-atlas2012-higgs-compatibility",
    "source": "phys:weak-gauge-currents",
    "target": "phys:atlas2012-higgs-compatibility",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "ATLAS identifies the new particle as neutral from its decays to vector-boson pairs of zero net charge; that reading uses the declared charges of the weak vector fields, W+ and W- with +e and -e and a neutral Z, together with the neutral photon, and is not a direct charge measurement of the new state.",
    "claimIds": [
      "B-weak-currents-atlas2012-neutrality"
    ],
    "contextIds": [
      "atlas2012-inference"
    ]
  },
  {
    "id": "bridge:inclusive-dis-response-slac-scaling",
    "source": "phys:inclusive-dis-response",
    "target": "phys:slac-scaling",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The 1969 nu*W2 values are extracted from electron-only cross sections through the one-photon W1/W2 decomposition with the unknown ratio R of longitudinal to transverse virtual-photon absorption; the C001 inclusive response defines that R and the variable x, so the scaling record's transverse dominance is the R=0 choice and omega=1/x.",
    "claimIds": [
      "B-inclusive-dis-slac-scaling"
    ],
    "contextIds": [
      "breidenbach1969"
    ]
  },
  {
    "id": "bridge:lepton-charge-flavor-borexino2015-electron-decay-limit",
    "source": "phys:lepton-charge-flavor",
    "target": "phys:borexino2015-electron-decay-limit",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Borexino reads e- -> nu + gamma as a charge non-conserving decay of the lightest known charged particle; that reading uses the declared lepton assignments, the electron with charge -e and the active neutrino electrically neutral. The bound constrains this one channel and is not a charge or neutrino-flavor measurement.",
    "claimIds": [
      "B-lepton-charge-borexino-electron-decay"
    ],
    "contextIds": [
      "borexino2015-electron-inference"
    ]
  },
  {
    "id": "bridge:photon-evidence-scope-borexino2015-electron-decay-limit",
    "source": "phys:photon-evidence-scope",
    "target": "phys:borexino2015-electron-decay-limit",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Borexino frames its search as a test of electric-charge conservation, which it ties to Maxwell's equations and the unbroken U(1) gauge symmetry; the searched final-state photon is the neutral gauge quantum of the declared unbroken electromagnetic U(1) model. The limit is not a photon-charge or photon-mass bound.",
    "claimIds": [
      "B-photon-scope-borexino-charge-conservation"
    ],
    "contextIds": [
      "borexino2015-electron-inference"
    ]
  },
  {
    "id": "bridge:chsh-local-model-shalm2015-bell-test",
    "source": "phys:chsh-local-model",
    "target": "phys:shalm2015-bell-test",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The Shalm p-values bound a null hypothesis of local realism, local hidden-variable responses with settings chosen independently of the hidden variables, the model class of the C001 CHSH record. Shalm tests it with a Clauser-Horne-type probability inequality rather than the CHSH correlator S, so the CHSH bound itself is not the tested statistic.",
    "claimIds": [
      "B-chsh-local-model-shalm2015"
    ],
    "contextIds": [
      "shalm2015-inference"
    ]
  },
  {
    "id": "bridge:bipartite-entanglement-shalm2015-acquisition-context",
    "source": "phys:bipartite-entanglement",
    "target": "phys:shalm2015-acquisition-context",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The acquisition context's nonmaximally polarization-entangled pairs are the designed pure state 0.961|H_A H_B>+0.276|V_A V_B> on Alice's and Bob's polarization factors; with both amplitudes nonzero it does not factorize, which is the C001 pure-state entanglement criterion. Entanglement of the designed state is not itself the Bell-test result.",
    "claimIds": [
      "B-entanglement-shalm2015-source-state"
    ]
  },
  {
    "id": "bridge:weak-gauge-currents-cms2013-fcp-response-context",
    "source": "phys:weak-gauge-currents",
    "target": "phys:cms2013-fcp-response-context",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The CMS benchmark couples to the Z through the declared neutral-current convention: with weak isospin zero and charge q, g_A=T3=0 and g_V=T3-2Q*sin^2(theta_W)=-2q*sin^2(theta_W), which fixes its modified Drell-Yan photon/Z signal model. The convention defines the benchmark couplings and is not evidence that such particles exist.",
    "claimIds": [
      "B-neutral-current-cms2013-benchmark"
    ]
  },
  {
    "id": "bridge:lepton-charge-flavor-fractional-charge-residual",
    "source": "phys:lepton-charge-flavor",
    "target": "phys:fractional-charge-residual",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The Lee residual is defined for drop charge in units of e, the magnitude of the electron charge, which is the positive unit of the declared lepton charge convention (electron -e, positron +e); integer multiples of e are the reference from which fractional residuals are measured. No quark or color interpretation follows.",
    "claimIds": [
      "B-lepton-charge-unit-fractional-residual"
    ]
  },
  {
    "id": "bridge:exponential-survival-bbn-weak-normalization",
    "source": "phys:exponential-survival",
    "target": "phys:primordial-nuclear-network",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The primordial network's weak-rate normalization is defined with the free-neutron decay rate 1/tau_n, the inverse mean lifetime of the exponential-survival convention. This is a definitional use of the lifetime quantity; it imports no particular storage or beam measurement and makes neutron decay no formation step.",
    "claimIds": [
      "B-exponential-survival-bbn-weak-normalization"
    ]
  },
  {
    "id": "bridge:ucn-storage-model-bbn-lifetime-input",
    "source": "phys:ucn-storage-loss-model",
    "target": "phys:bbn2018-network-context",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The historical BBN context interprets its adopted neutron-lifetime input against storage ('bottle') determinations, which count surviving neutrons and must correct non-decay losses. The relation records which lifetime definition the source treats as BBN-relevant; no UCNtau value is adopted or compared.",
    "claimIds": [
      "B-ucn-storage-model-bbn-lifetime-input"
    ],
    "contextIds": [
      "pitrou2018-network"
    ]
  },
  {
    "id": "bridge:beam-decay-ratio-bbn-lifetime-input",
    "source": "phys:beam-decay-ratio",
    "target": "phys:bbn2018-network-context",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The BBN context contrasts its lifetime input with the beam method, which infers tau from detected proton-producing decays of a monitored beam. Under the source's conditional dark-decay reading, that decay-product count would not be the BBN-relevant total rate; no beam lifetime is adopted.",
    "claimIds": [
      "B-beam-decay-ratio-bbn-lifetime-input"
    ],
    "contextIds": [
      "pitrou2018-network"
    ]
  },
  {
    "id": "bridge:fermi-coupling-bbn-weak-rates",
    "source": "phys:low-energy-weak-exchange",
    "target": "phys:primordial-nuclear-network",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The network's Born n<->p weak rates are defined in the low-energy four-fermion description: their prefactor is proportional to G_F^2 cos^2(theta_C)(1+3g_A^2). The source then fixes the overall normalization from the free-neutron lifetime rather than from G_F; no electroweak parameter is fitted.",
    "claimIds": [
      "B-fermi-coupling-bbn-weak-rates"
    ]
  },
  {
    "id": "bridge:capture-binding-bbn-deuterium-bottleneck",
    "source": "phys:capture-recoil-energy",
    "target": "phys:primordial-nuclear-network",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The network's deuterium bottleneck is described through the binding energy of the same n+p<->d+gamma channel whose energy balance (photon energy plus deuteron recoil) the C001 capture record defines. The network uses an approximate 2.2 MeV value; no capture measurement is adopted.",
    "claimIds": [
      "B-capture-binding-bbn-deuterium-bottleneck"
    ]
  },
  {
    "id": "bridge:coulomb-barrier-bbn-charged-rates",
    "source": "phys:coulomb-effective-potential",
    "target": "phys:primordial-nuclear-network",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The network's charged-particle thermonuclear rates are parametrized with Coulomb-barrier penetration: Coulomb functions, the Sommerfeld parameter Z1*Z2*e^2/(hbar*v) and an astrophysical S-factor. This uses the like-sign Coulomb repulsion between nuclear charges; it is not a fitted nuclear potential.",
    "claimIds": [
      "B-coulomb-barrier-bbn-charged-rates"
    ]
  },
  {
    "id": "bridge:seager-recombination-bbn-boundary",
    "source": "phys:seager1999-hydrogen-formation-context",
    "target": "phys:bbn-recombination-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The nuclear-synthesis/recombination boundary defines its atomic-recombination member with the Seager calculation, in which existing protons capture electrons and the helium composition is a supplied input. The relation fixes which model the boundary refers to; it adds no numerical recombination history.",
    "claimIds": [
      "B-seager-recombination-bbn-boundary"
    ]
  },
  {
    "id": "bridge:bbn-helium-fraction-seager-input",
    "source": "phys:bbn-source-scope",
    "target": "phys:seager1999-hydrogen-formation-context",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The Seager recombination context uses, as a supplied composition input, the primordial helium mass fraction Y_P (0.24 by mass), the abundance quantity defined in the BBN source scope as the 4He mass fraction. The input comes from an earlier BBN review, not from the Pitrou prediction or the Aver estimate.",
    "claimIds": [
      "B-bbn-helium-fraction-seager-input"
    ]
  },
  {
    "id": "bridge:maxwell-modes-ideal-plate-casimir",
    "source": "phys:electromagnetic-photon-field",
    "target": "phys:ideal-plate-casimir",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The ideal-plate Casimir energy is defined with the electromagnetic field's cavity modes: Casimir compares sums of hbar*omega/2 over the standing waves between perfectly conducting walls, two per wave vector. The free Maxwell field supplies those polarization modes; conducting boundaries and the cutoff are added inputs.",
    "claimIds": [
      "B-maxwell-modes-ideal-plate-casimir"
    ]
  },
  {
    "id": "bridge:charged-matter-coupling-casimir-material-model",
    "source": "phys:charged-matter-electromagnetic-regime",
    "target": "phys:casimir-material-model",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The material-dependent Casimir model is formulated with the coupling of the electromagnetic field to the charged constituents of the plates: plasma frequency and skin depth depend on the fine-structure constant, the force vanishes as alpha->0, and the ideal-plate result is the alpha->infinity limit.",
    "claimIds": [
      "B-charged-matter-coupling-casimir-material-model"
    ]
  },
  {
    "id": "bridge:polarizability-casimir-polder-limits",
    "source": "phys:molecular-dipole-response",
    "target": "phys:ground-state-dispersion-limits",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The retarded atom-wall and atom-atom dispersion limits are written with each particle's static electric polarizability, the induced-dipole response coefficient (p=aE) that the C001 molecular dipole response record defines in SI form. Unit conventions differ and no polarizability value is supplied.",
    "claimIds": [
      "B-polarizability-casimir-polder-limits"
    ]
  },
  {
    "id": "bridge:hyperfine-coupling-litvinov-ec-states",
    "source": "phys:hyperfine-state-parameters",
    "target": "phys:litvinov2007-pr-hyperfine-inference",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Litvinov's EC interpretation labels hydrogenlike 140Pr states by the hyperfine total angular momentum F obtained by coupling nuclear spin I=1 with the bound-electron spin 1/2, the I-J-F convention of the C061 hyperfine record; the moment-sign ordering argument uses the same magnetic-dipole coupling.",
    "claimIds": [
      "B-hyperfine-coupling-litvinov-ec-states"
    ]
  },
  {
    "id": "bridge:nuclear-magneton-marion-hyperfine-sensitivity",
    "source": "phys:proton-moment-normalization",
    "target": "phys:marion2003-rb-cs-context",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Marion's sensitivity discussion of the Rb/Cs hyperfine ratio writes each alkali hyperfine frequency with the nuclear moment in nuclear-magneton units and, in an oversimplified Schmidt model, relates both moments to the proton gyromagnetic factor g_p. That reading uses the C025 nuclear-magneton/g_p convention; no moment or drift is admitted.",
    "claimIds": [
      "B-nuclear-magneton-marion-hyperfine-sensitivity"
    ],
    "contextIds": [
      "marion2003-rb-cs-fountains"
    ]
  },
  {
    "id": "bridge:natural-width-mossbauer-resonance",
    "source": "phys:resonance-lifetime-convention",
    "target": "phys:recoilless-nuclear-transition",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The Mossbauer resonance definition compares the free-nucleus recoil displacement with line widths, and the lecture ties the natural width of an excited nuclear level to its lifetime through the uncertainty relation, the isolated-resonance width-lifetime convention of C001 (tau=hbar/Gamma). No lifetime or width is computed.",
    "claimIds": [
      "B-natural-width-mossbauer-resonance"
    ]
  },
  {
    "id": "bridge:diffraction-order-amorphous-mossbauer-absorber",
    "source": "phys:spatial-order-symmetry-boundary",
    "target": "phys:dubiel-fe-gluconate-transmission",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The Mossbauer absorber's 'XRD-amorphous' status is a diffraction-based order classification: indexed reflections for the crystalline parent versus a broad maximum for the dried sample. Reading it as lacking perfect periodic order uses the C022 boundary, in which periodic Bravais translation is one diffraction-specified description.",
    "claimIds": [
      "B-diffraction-order-amorphous-mossbauer-absorber"
    ],
    "contextIds": [
      "dubiel2020-fe-gluconate"
    ]
  },
  {
    "id": "bridge:coulomb-repulsion-benzene-vb-integrals",
    "source": "phys:coulomb-effective-potential",
    "target": "phys:resonance-energy-reference-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The reference-defined valence-bond resonance energy is built from matrix elements of a molecular electronic Hamiltonian; Pauling and Wheland justify the sign pattern of the p-orbit/in-plane exchange integrals by its electron-electron e^2/r_ij term, the like-sign Coulomb pair interaction in historical Gaussian normalization.",
    "claimIds": [
      "B-coulomb-repulsion-benzene-vb-integrals"
    ]
  },
  {
    "id": "bridge:debye-huckel-screening-colloid-pair-model",
    "source": "phys:dilute-electrolyte-screening",
    "target": "phys:screened-colloid-pair-model",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The isolated-pair colloid model is defined in the far-separation Debye-Huckel regime: its exponential range is the Debye-Huckel screening length of the solution, set by the counterion concentration. The finite-sphere amplitude and effective charge are separate, and the point-ion mean potential is not substituted.",
    "claimIds": [
      "B-debye-huckel-screening-colloid-pair-model"
    ]
  },
  {
    "id": "bridge:debye-huckel-length-colloid-electrolyte-reading",
    "source": "phys:dilute-electrolyte-screening",
    "target": "phys:colloid-pair-repulsion",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The fitted screening length kappa^-1=161 nm is read as a Debye-Huckel length, compared with the 960 nm maximum in pure water and converted to an equivalent 1:1 electrolyte concentration of 3.6e-6 M. That reading uses the composition dependence of the C001 screening parameter; no concentration was assayed.",
    "claimIds": [
      "B-debye-huckel-length-colloid-electrolyte-reading"
    ],
    "contextIds": [
      "crocker1994-colloid-pair"
    ]
  },
  {
    "id": "bridge:phase-stability-colloid-nucleation-boundary",
    "source": "phys:phase-regime-stability-observable-boundary",
    "target": "phys:colloid-interface-stability-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The colloid stability boundary separates observation-window persistence, thermodynamic phase preference and a nucleation barrier, using the C022 phase-stability boundary's distinction between local stability, stability against formation of a different phase and kinetic persistence. The relation adds no colloid phase diagram.",
    "claimIds": [
      "B-phase-stability-colloid-nucleation-boundary"
    ]
  },
  {
    "id": "bridge:polarization-piezoelectric-tensor",
    "source": "phys:dipole-ensemble-dielectric-boundary",
    "target": "phys:piezoelectric-tensor-conventions",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The piezoelectric tensor convention couples strain to the electric displacement: in the direct effect an electric dipole moment appears under applied stress, and e_ijk=(dD_i/d strain_jk) carries the C/m^2 units of polarization, the moment-per-volume quantity of the C001 dielectric boundary. Crystal polarization is not reduced to independent molecular dipoles.",
    "claimIds": [
      "B-polarization-piezoelectric-tensor"
    ]
  },
  {
    "id": "bridge:crystal-symmetry-piezoelectric-constraints",
    "source": "phys:spatial-order-symmetry-boundary",
    "target": "phys:piezoelectric-tensor-conventions",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The piezoelectric tensor convention depends on the specimen's crystallographic point-group symmetry: materials lacking inversion symmetry can be piezoelectric, and point groups set zero or equal components (quartz 32 has two independent e_ij). That symmetry specification is the spatial-order description declared in the C022 boundary.",
    "claimIds": [
      "B-crystal-symmetry-piezoelectric-constraints"
    ]
  },
  {
    "id": "bridge:dielectric-constants-quartz-piezoelectric-inversion",
    "source": "phys:dipole-ensemble-dielectric-boundary",
    "target": "phys:ogi2006-quartz-context",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The quartz resonance inversion cannot separate e_ij from the clamped permittivities, so it supplies literature dielectric constants (epsilon11S/epsilon0=4.424, epsilon33S/epsilon0=4.632). The inferred piezoelectric coefficients therefore depend on the linear permittivity concept of the C001 dielectric boundary, here as an anisotropic clamped tensor.",
    "claimIds": [
      "B-dielectric-constants-quartz-piezoelectric-inversion"
    ],
    "contextIds": [
      "ogi2006-quartz-piezoelectric"
    ]
  },
  {
    "id": "bridge:hanssen-reflectance-em-material-evidence",
    "source": "opt:specular-response",
    "target": "phys:electromagnetic-material-evidence",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The C001 atomic, molecular and optical evidence scope includes specimen-specific infrared reflectance of window materials and an Au mirror; that clause is organized from the Hanssen reflected-response record of the same preparation. The relation is representational and adds no acquisition or optical model.",
    "claimIds": [
      "B-hanssen-reflectance-em-material-evidence"
    ]
  },
  {
    "id": "bridge:hanssen-transmittance-em-material-evidence",
    "source": "opt:material-transmission",
    "target": "phys:electromagnetic-material-evidence",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The C001 evidence scope's infrared transmittance clause for window materials is organized from the Hanssen transmitted-light record of the same integrating-sphere preparation. The relation is representational: one measurement chain, no new acquisition, no channel operator and no formation claim.",
    "claimIds": [
      "B-hanssen-transmittance-em-material-evidence"
    ]
  },
  {
    "id": "bridge:polarization-response-optical-permittivity",
    "source": "phys:dipole-ensemble-dielectric-boundary",
    "target": "phys:linear-optical-propagation",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The optical-propagation model's epsilon(omega) is defined from the causal linear polarization response of a medium of dipoles, P_omega=chi_e(omega)*epsilon0*E_omega, the Fourier analogue of the quasistatic relation P=chi_e*epsilon0*E in the C001 dielectric boundary. Static and optical susceptibilities are not identified numerically.",
    "claimIds": [
      "B-polarization-response-optical-permittivity"
    ]
  },
  {
    "id": "bridge:london-r6-water-dimer-led",
    "source": "phys:ground-state-dispersion-limits",
    "target": "phys:water-dimer-model",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Altun's LED analysis identifies the water-dimer London-dispersion component by its attractive r^-6 long-range decay, the nonretarded ground-state dispersion form of the C028 atom-pair limits. No C6 value, retarded tail or scheme-independent component magnitude follows.",
    "claimIds": [
      "B-london-r6-water-dimer-led"
    ],
    "contextIds": [
      "altun2018-water-dimer"
    ]
  },
  {
    "id": "bridge:permanent-dipole-water-dimer-electrostatics",
    "source": "phys:point-dipole-interaction",
    "target": "phys:water-dimer-model",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Altun reads the slow polynomial long-range decay of the water-dimer LED electrostatic term through water's strong permanent dipole, while near equilibrium electronic preparation, exchange and dispersion terms matter. The water-dimer model is thus interpreted against the C001 fixed-dipole pair term; no exponent is fitted.",
    "claimIds": [
      "B-permanent-dipole-water-dimer-electrostatics"
    ],
    "contextIds": [
      "altun2018-water-dimer"
    ]
  },
  {
    "id": "bridge:elementary-rate-conventions-ksi-initial-rate-parameters",
    "source": "bio:elementary-rate-conventions",
    "target": "bio:ksi-initial-rate-parameters",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The selected KSI initial-rate parameters are defined with the declared concentration-based reaction-rate, reaction-order and rate-constant conventions; kcat and KM remain fitted response coefficients for one assay, and neither an elementary step nor a mechanism follows from the fit.",
    "claimIds": [
      "B-elementary-rate-conventions-ksi-initial-rate-parameters"
    ]
  },
  {
    "id": "bridge:elementary-rate-conventions-rna-cleavage-observables",
    "source": "bio:elementary-rate-conventions",
    "target": "bio:rna-folding-cleavage-observables",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The hammerhead cleavage-response parameters are defined with the declared rate and elementary-step conventions: the fitted apparent rate is an approach-to-equilibrium coefficient for a net reaction, so it carries no molecularity and is not an elementary rate constant.",
    "claimIds": [
      "B-elementary-rate-conventions-rna-cleavage-observables"
    ]
  },
  {
    "id": "bridge:activation-gibbs-convention-ksi-energy-identifiability",
    "source": "bio:activation-gibbs-convention",
    "target": "bio:ksi-catalytic-energy-identifiability",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The KSI limit on microscopic catalytic-energy inference is stated with the activation-quantity convention: the source expresses fitted turnover ratios as kcal/mol differences, while the cited convention restricts activation quantities to elementary reactions.",
    "claimIds": [
      "B-activation-gibbs-convention-ksi-energy-identifiability"
    ]
  },
  {
    "id": "bridge:catalysis-equilibrium-boundary-ksi-solvation-interpretation",
    "source": "bio:catalysis-equilibrium-boundary",
    "target": "bio:ksi-solvation-interpretation",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The conditional KSI solvation interpretation is read against the catalysis/equilibrium boundary: the source states that an active-site interaction's catalytic contribution must be specified relative to the water-solvated nonenzymatic reaction for the same transformation.",
    "claimIds": [
      "B-catalysis-equilibrium-boundary-ksi-solvation-interpretation"
    ],
    "contextIds": [
      "kraut2010-ksi-kinetic-context"
    ]
  },
  {
    "id": "bridge:reaction-gibbs-equilibrium-metabolic-cycle-boundary",
    "source": "bio:reaction-gibbs-equilibrium",
    "target": "bio:metabolic-cycle-measurement-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The cyclic-regeneration and flux boundary uses the declared standard reaction Gibbs energy convention: the cycle's design stage evaluates calculated Gibbs free energy profiles, which the boundary keeps separate from measured recurrent operation.",
    "claimIds": [
      "B-reaction-gibbs-equilibrium-metabolic-cycle-boundary"
    ]
  },
  {
    "id": "bridge:electrochemical-gradient-coupling-racker-readouts",
    "source": "bio:electrochemical-gradient-coupling",
    "target": "bio:racker-bioenergetic-readouts",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The reconstituted-vesicle readout definitions use the declared pH and ion electrochemical-potential conventions: a calibrated external-medium pH is an activity-based quantity, and transfer equilibrium between phases is stated in electrochemical potentials.",
    "claimIds": [
      "B-electrochemical-gradient-coupling-racker-readouts"
    ]
  },
  {
    "id": "bridge:reaction-gibbs-equilibrium-racker-coupling-interpretation",
    "source": "bio:reaction-gibbs-equilibrium",
    "target": "bio:racker-coupling-interpretation",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The bounded chemiosmotic interpretation of the reconstituted vesicles is stated with the declared standard reaction Gibbs energy and equilibrium-constant convention, which separates an imposed or pumped composition from the intrinsic equilibrium constant of an unchanged net reaction.",
    "claimIds": [
      "B-reaction-gibbs-equilibrium-racker-coupling-interpretation"
    ]
  },
  {
    "id": "bridge:electrochemical-gradient-coupling-primitive-coupling-open",
    "source": "bio:electrochemical-gradient-coupling",
    "target": "bio:primitive-chemiosmotic-coupling-open",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The unresolved primitive gradient-to-chemistry hypothesis is formulated with the declared ion electrochemical-potential and driven-state bookkeeping; the convention states what such a coupling claim would have to specify and supplies no evidence that it holds.",
    "claimIds": [
      "B-electrochemical-gradient-coupling-primitive-coupling-open"
    ]
  },
  {
    "id": "bridge:signal-response-boundary-signal-transduction-scope",
    "source": "bio:signal-response-boundary",
    "target": "bio:signal-transduction-source-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The scoped transducin/phosphodiesterase result is delimited by the signal-response boundary: the reused abstract reports light-dependent nucleotide exchange, a reconstituted GTPase activity and activation of the downstream enzyme as separate molecular readouts, with no electrical measurement.",
    "claimIds": [
      "B-signal-response-boundary-signal-transduction-scope"
    ]
  },
  {
    "id": "bridge:signal-response-boundary-retinal-catalytic-machinery",
    "source": "bio:signal-response-boundary",
    "target": "ret:catalytic-machinery",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The reconstituted transducin and phosphodiesterase activity record is delimited by the signal-response boundary: the reused abstract reports illumination-dependent nucleotide binding in membranes lacking phosphodiesterase, so molecular activation and downstream enzyme response remain distinct readouts.",
    "claimIds": [
      "B-signal-response-boundary-retinal-catalytic-machinery"
    ]
  },
  {
    "id": "bridge:sequence-fold-function-boundary-protein-folding-scope",
    "source": "bio:sequence-fold-function-boundary",
    "target": "bio:protein-folding-source-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The scoped folding evidence is organized by the sequence/conformation/function boundary: the reused study states the one-sequence-one-fold expectation it breaks and compares engineered variants that change sequence and conformation together with distinct receptor responses.",
    "claimIds": [
      "B-sequence-fold-function-boundary-protein-folding-scope"
    ]
  },
  {
    "id": "bridge:rnase-refolding-readouts-chaperonin-aggregation-account",
    "source": "bio:rnase-refolding-readouts",
    "target": "bio:chaperonin-aggregation-account",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The passive-chamber account of chaperonin assistance is interpreted against spontaneous sequence-directed refolding: the source concludes that the cavity lets a chain fold according to its primary structure, as originally observed for reduced ribonuclease reoxidation.",
    "claimIds": [
      "B-rnase-refolding-readouts-chaperonin-aggregation-account"
    ],
    "contextIds": [
      "apetri2008-rubisco-refolding",
      "apetri2008-mbp-refolding"
    ]
  },
  {
    "id": "bridge:chaperonin-aggregation-account-proteasome-unfolding-control",
    "source": "bio:chaperonin-aggregation-account",
    "target": "bio:proteasome-unfolding-control",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The proteasome global-unfolding control is read out through chaperonin capture of nonnative chains: its stability assay scores substrate protected or lost after adding GroEL, which the chaperonin source describes as binding nonnative polypeptide through exposed hydrophobic surfaces.",
    "claimIds": [
      "B-chaperonin-aggregation-account-proteasome-unfolding-control"
    ],
    "contextIds": [
      "prakash2004-substrate-unfolding-control"
    ]
  },
  {
    "id": "bridge:protein-modification-boundary-protein-modification-scope",
    "source": "bio:protein-modification-readout-boundary",
    "target": "bio:protein-modification-source-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The scoped ubiquitination evidence uses the protein-modification readout boundary: the cited control blocks deubiquitination and degradation, so its accumulating band is a net assay readout rather than an isolated modification rate.",
    "claimIds": [
      "B-protein-modification-boundary-protein-modification-scope"
    ]
  },
  {
    "id": "bridge:translation-source-scope-prakash-substrate-context",
    "source": "bio:translation-source-scope",
    "target": "bio:prakash2004-substrate-degradation-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The defined-substrate degradation preparation obtains its labelled clients by cell-free transcription and translation in lysate, so the admitted cell-free RNA-dependent polypeptide-synthesis scope names the readout class on which this preparation depends.",
    "claimIds": [
      "B-translation-source-scope-prakash-substrate-context"
    ],
    "contextIds": [
      "prakash2004-substrate-degradation"
    ]
  },
  {
    "id": "bridge:rnai-readout-boundary-rnai-source-inference",
    "source": "bio:rnai-readout-boundary",
    "target": "bio:rnai-source-inference",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The bounded introduced-dsRNA interpretation uses the source-specific readout convention: the source reports a lost transcript signal for one target while leaving RNA-targeted and chromatin or transcription mechanisms explicitly open.",
    "claimIds": [
      "B-rnai-readout-boundary-rnai-source-inference"
    ]
  },
  {
    "id": "bridge:chromatin-assay-boundary-epigenetic-regulation-scope",
    "source": "bio:chromatin-assay-boundary",
    "target": "bio:epigenetic-regulation-source-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The scoped chromatin-modification record uses the assay boundary: its locus-level immunoprecipitation and methylation readouts are separate measurements, and the source states that the causal relationship among them remains to be defined.",
    "claimIds": [
      "B-chromatin-assay-boundary-epigenetic-regulation-scope"
    ]
  },
  {
    "id": "bridge:chromatin-assay-boundary-chromatin-packaging-scope",
    "source": "bio:chromatin-assay-boundary",
    "target": "bio:chromatin-packaging-source-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The scoped accessibility, contact and expression profiles use the assay boundary: transposase accessibility, population contact compartments computed at a stated resolution and RNA abundance are separate readouts from independent samples.",
    "claimIds": [
      "B-chromatin-assay-boundary-chromatin-packaging-scope"
    ]
  },
  {
    "id": "bridge:chromatin-assay-boundary-rnai-source-inference",
    "source": "bio:chromatin-assay-boundary",
    "target": "bio:rnai-source-inference",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The bounded interference interpretation depends on the chromatin-assay boundary for its open alternative: the source names chromatin or transcription as a possible level of action, and separating that from an RNA-targeted process would need the locus-level chromatin readouts this preparation does not include.",
    "claimIds": [
      "B-chromatin-assay-boundary-rnai-source-inference"
    ]
  },
  {
    "id": "bridge:grx-redox-reporter-grx-sensor-response",
    "source": "bio:grx-redox-reporter",
    "target": "bio:grx-sensor-response",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The finite glutathione-coupled sensor response is defined with the reporter convention: the source states that fusing glutaredoxin to the redox-sensitive protein gives specific real-time equilibration between the sensor and the glutathione redox couple, so the optical ratio reports that coupled state.",
    "claimIds": [
      "B-grx-redox-reporter-grx-sensor-response"
    ]
  },
  {
    "id": "bridge:intracellular-ph-reporter-yeast-glucose-ph-response",
    "source": "bio:intracellular-ph-reporter",
    "target": "bio:yeast-glucose-ph-response",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The glucose-dependent yeast pH response is read out through the calibrated reporter convention: intracellular pH values are calculated from a ratiometric emission measurement using the source standard curve.",
    "claimIds": [
      "B-intracellular-ph-reporter-yeast-glucose-ph-response"
    ],
    "contextIds": [
      "isom2018-yeast-ph-response-context"
    ]
  },
  {
    "id": "bridge:cooperativity-fit-boundary-capn-sequential-binding",
    "source": "bio:cooperativity-fit-boundary",
    "target": "bio:capn-sequential-binding",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The fitted sequential-binding thermodynamics use the declared cooperativity convention: a biphasic isotherm fitted with a sequential-site model yields stepwise constants and a free-energy difference between steps, not a Hill coefficient or a site count.",
    "claimIds": [
      "B-cooperativity-fit-boundary-capn-sequential-binding"
    ]
  },
  {
    "id": "bridge:allostery-response-boundary-capn-distal-response",
    "source": "bio:allostery-response-boundary",
    "target": "bio:capn-distal-nmr-response",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The distal relaxation record uses the declared allostery boundary: remote residues of the unliganded subunit show enhanced dynamics while the measured response stays separate from any identified communication pathway.",
    "claimIds": [
      "B-allostery-response-boundary-capn-distal-response"
    ]
  },
  {
    "id": "bridge:elementary-rate-conventions-enzyme-assembly-boundary",
    "source": "bio:elementary-rate-conventions",
    "target": "bio:enzyme-assembly-channeling-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The enzyme-assembly and coupled-activity boundary uses the declared rate conventions: the source reports turnover-number changes with little change in the Michaelis constant, which are fitted response parameters rather than elementary rate constants or a channeling measurement.",
    "claimIds": [
      "B-elementary-rate-conventions-enzyme-assembly-boundary"
    ]
  },
  {
    "id": "bridge:hydration-boundary-gox-hrp-compartment-account",
    "source": "bio:hydration-mrd-interpretation-boundary",
    "target": "bio:gox-hrp-compartment-account",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The finite enzyme-compartment account is bounded by the hydration-readout distinction: its proposed bound hydration layer inside the cage is an interpretation, and water-relaxation measurements of protein hydration do not image spatial solvent ordering.",
    "claimIds": [
      "B-hydration-boundary-gox-hrp-compartment-account"
    ]
  },
  {
    "id": "bridge:hydration-boundary-antibody-recognition-boundary",
    "source": "bio:hydration-mrd-interpretation-boundary",
    "target": "bio:antibody-recognition-measurement-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The antibody-interface boundary uses the hydration-readout distinction: the crystallographic source located no solvent molecules and describes one interface hole as probably filled by a water molecule, which is not a resolved hydration shell or a water residence time.",
    "claimIds": [
      "B-hydration-boundary-antibody-recognition-boundary"
    ]
  },
  {
    "id": "bridge:phage-observation-boundaries-capsid-assembly-scope",
    "source": "bio:phage-observation-boundaries",
    "target": "bio:viral-capsid-assembly-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The bounded capsid self-organization scope uses the observable distinctions: the assembly source states that it does not claim its measured features must be present in assembly inside cells and cautions against models built mainly on static measurements.",
    "claimIds": [
      "B-phage-observation-boundaries-capsid-assembly-scope"
    ]
  },
  {
    "id": "bridge:phage-observation-boundaries-genome-organization-scope",
    "source": "bio:phage-observation-boundaries",
    "target": "bio:viral-genome-organization-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The bounded genome-organization scope uses the observable distinctions: the structural source reports that single RNA strands are not clearly resolved and presents its assembly sequence as a proposed model rather than an observed process.",
    "claimIds": [
      "B-phage-observation-boundaries-genome-organization-scope"
    ]
  },
  {
    "id": "bridge:viral-entry-scope-ms2-isolated-receptor-association",
    "source": "bio:viral-entry-scope",
    "target": "bio:ms2-isolated-receptor-association",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The isolated-pilus association observation is interpreted within the unresolved-entry boundary: the source sheared its receptors off the cells precisely to separate initial virus-receptor binding from any downstream structural rearrangement.",
    "claimIds": [
      "B-viral-entry-scope-ms2-isolated-receptor-association"
    ],
    "contextIds": [
      "dent2013-ms2-isolated-receptor-context"
    ]
  },
  {
    "id": "bridge:vesicle-fed-growth-supplied-lipid-membrane-account",
    "source": "bio:vesicle-fed-membrane-growth",
    "target": "bio:supplied-lipid-membrane-account",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The supplied-lipid membrane account is interpreted against fed fatty-acid vesicle growth and division, which its own source cites as the precedent; the new preparation adds phospholipid synthesis on pre-existing liposomes and reports no de novo membrane formation.",
    "claimIds": [
      "B-vesicle-fed-growth-supplied-lipid-membrane-account"
    ]
  },
  {
    "id": "bridge:condensate-boundary-model-vesicle-readout-boundary",
    "source": "bio:condensate-demixing-measurement-boundary",
    "target": "bio:model-vesicle-readout-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The model-vesicle readout boundary states its compartment alternative with the membraneless-condensate case: the condensate source contrasts membrane encapsulation with membraneless proteinaceous organelles that partition solutes without a bounding membrane.",
    "claimIds": [
      "B-condensate-boundary-model-vesicle-readout-boundary"
    ]
  },
  {
    "id": "bridge:rna-reciprocal-catalysis-nonenzymatic-extension-scope",
    "source": "bio:rna-reciprocal-catalyst-production",
    "target": "bio:nonenzymatic-extension-source-scope",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The nonenzymatic templated-extension scope is interpreted against RNA-catalysed copying: its own source argues that sufficiently fast and accurate nonenzymatic copying could remove the need for a polymerase ribozyme, while the separate cross-catalytic preparation shows reciprocal RNA-catalysed ligation.",
    "claimIds": [
      "B-rna-reciprocal-catalysis-nonenzymatic-extension-scope"
    ]
  },
  {
    "id": "bridge:orbital-ec-channel-biochemical-ec-transfer-boundary",
    "source": "phys:orbital-ec-channel-boundary",
    "target": "bio:biochemical-ec-transfer-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The biochemical electron-capture transfer boundary requires a specified isotope and nuclear channel; that clause is defined with the stored-ion orbital EC channel convention (bound electron consumed, proton converted to neutron, ionic charge preserved). No biochemical channel or rate change follows.",
    "claimIds": [
      "B-orbital-ec-channel-biochemical-transfer-boundary"
    ]
  },
  {
    "id": "bridge:electronic-decay-scope-biochemical-ec-hypothesis",
    "source": "phys:electronic-decay-source-scope",
    "target": "bio:biochemical-ec-hypothesis",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The unsupported status of the biochemical EC-modulation hypothesis is interpreted with the stored-ion electronic-state sensitivity result, used only as a limit of transfer: the H-like/He-like 140Pr rate contrast is not evidence for a biochemical intervention.",
    "claimIds": [
      "B-electronic-decay-scope-biochemical-ec-hypothesis"
    ],
    "contextIds": [
      "litvinov2007-pr-charge-states"
    ]
  },
  {
    "id": "bridge:hydrogen-bond-definition-ksi-analogue-geometry",
    "source": "phys:hydrogen-bond-evidence-definition",
    "target": "bio:ksi-local-analogue-geometry",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The KSI analogue-structure record's presence and absence of Ser16, Asp103 and Met13 hydrogen bonds are classified with the donor-acceptor hydrogen-bond definition, applied through refined O...O distances with a source-chosen 3.5 angstrom cutoff.",
    "claimIds": [
      "B-hydrogen-bond-definition-ksi-analogue-geometry"
    ]
  },
  {
    "id": "bridge:hydrogen-bond-energy-boundary-ksi-energy-identifiability",
    "source": "phys:hydrogen-bond-state-energy-boundary",
    "target": "bio:ksi-catalytic-energy-identifiability",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The KSI limit on reading turnover losses as one hydrogen-bond energy is interpreted with the hydrogen-bond energy boundary: an energy is defined only relative to stated fragments, states and conventions, here water-donated hydrogen bonds in the solvated reference reaction.",
    "claimIds": [
      "B-hydrogen-bond-energy-boundary-ksi-energy-identifiability"
    ],
    "contextIds": [
      "kraut2010-ksi-kinetic-context"
    ]
  },
  {
    "id": "bridge:nics-criterion-ksi-probe-response",
    "source": "phys:ring-center-nics-criterion",
    "target": "bio:ksi-local-probe-response",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The KSI 19F probe interpretation first weighs and sets aside an aromatic ring-current shielding contribution from Phe16, the diatropic benzene-ring magnetic-shielding effect that the ring-center NICS criterion probes as computed shielding at a point without a nucleus.",
    "claimIds": [
      "B-nics-criterion-ksi-probe-response"
    ],
    "contextIds": [
      "kraut2010-ksi-probe-context"
    ]
  },
  {
    "id": "bridge:hydrogen-bond-definition-hewl-d13-interface",
    "source": "phys:hydrogen-bond-evidence-definition",
    "target": "bio:hewl-d13-interface-geometry",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The HEWL-D1.3 interface record's Table 3 hydrogen-bonded antibody-lysozyme contacts are classified with the evidence-based donor-acceptor hydrogen-bond definition, here from a 2.8 angstrom refined model without hydrogen positions.",
    "claimIds": [
      "B-hydrogen-bond-definition-hewl-d13-interface"
    ]
  },
  {
    "id": "bridge:hydrogen-bond-definition-lymphotactin-folds",
    "source": "phys:hydrogen-bond-evidence-definition",
    "target": "bio:lymphotactin-nmr-folds",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The lymphotactin fold-interconversion record describes the Ltn10 and Ltn40 secondary structures through mutually exclusive backbone N-H...O=C hydrogen-bond patterns, using the evidence-based donor-acceptor hydrogen-bond classification.",
    "claimIds": [
      "B-hydrogen-bond-definition-lymphotactin-folds"
    ]
  },
  {
    "id": "bridge:dilute-electrolyte-screening-ddx4-demixing",
    "source": "phys:dilute-electrolyte-screening",
    "target": "bio:ddx4-reversible-demixing",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The salt dependence of the Ddx4 conditional phase-diagram interpretation is modelled with a screened Coulomb potential whose Debye length depends on NaCl ionic strength and medium permittivity, the concentration-dependent ion-atmosphere thickness of the dilute-electrolyte model.",
    "claimIds": [
      "B-dilute-electrolyte-screening-ddx4-demixing"
    ],
    "contextIds": [
      "nott2015-ddx4-thermal-demixing"
    ]
  },
  {
    "id": "bridge:gibbs-coexistence-ddx4-binodal",
    "source": "phys:bulk-equilibrium-phase-conditions",
    "target": "bio:ddx4-reversible-demixing",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The Ddx4 cloud-point model computes binodal transition temperatures from equal chemical potentials of each component in the coexisting dense and dispersed phases, the Gibbs coexistence condition for freely exchanging bulk phases.",
    "claimIds": [
      "B-gibbs-coexistence-ddx4-binodal"
    ],
    "contextIds": [
      "nott2015-ddx4-thermal-demixing"
    ]
  },
  {
    "id": "bridge:phase-regime-boundary-condensate-demixing-boundary",
    "source": "phys:phase-regime-stability-observable-boundary",
    "target": "bio:condensate-demixing-measurement-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The condensate demixing boundary separates operational reversible demixing and cloud points from equilibrium criticality using the phase-regime distinctions between stability to continuous change, new-phase formation, kinetic persistence and critical phases.",
    "claimIds": [
      "B-phase-regime-boundary-condensate-demixing-boundary"
    ]
  },
  {
    "id": "bridge:precession-frequency-ratio-bpti-mrd-context",
    "source": "phys:frequency-moment-ratio",
    "target": "bio:modig2004-bpti-supercooled-mrd-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The BPTI magnetic-relaxation-dispersion readout indexes each water 2H/17O longitudinal relaxation rate by the nuclear resonance frequency set by one of 8-9 field strengths, relying on the precession principle that a nucleus precesses at its gyromagnetic ratio times the field.",
    "claimIds": [
      "B-precession-frequency-ratio-bpti-mrd-context"
    ],
    "contextIds": [
      "modig2004-bpti-supercooled-mrd"
    ]
  },
  {
    "id": "bridge:liquid-correlation-boundary-hydration-mrd-boundary",
    "source": "phys:liquid-correlation-observable-boundary",
    "target": "bio:hydration-mrd-interpretation-boundary",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The BPTI hydration-relaxation boundary separates rank-2 rotational correlation times, residence (exchange) times and spatial ordering, the orientational-correlation, exchange and static-structure distinctions declared by the liquid-water observable boundary.",
    "claimIds": [
      "B-liquid-correlation-boundary-hydration-mrd-boundary"
    ]
  },
  {
    "id": "bridge:ionic-charge-state-electrochemical-potential",
    "source": "phys:ionic-charge-state",
    "target": "bio:electrochemical-gradient-coupling",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The ion electrochemical-potential definition's z_B*F*phi term uses the ion charge number z_B = Q_B/e, the signed integer charge-state convention of the atomic and molecular ion record.",
    "claimIds": [
      "B-ionic-charge-state-electrochemical-potential"
    ]
  },
  {
    "id": "bridge:gibbs-equilibrium-reaction-gibbs-energy",
    "source": "phys:bulk-equilibrium-phase-conditions",
    "target": "bio:reaction-gibbs-equilibrium",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The reaction Gibbs energy, affinity and equilibrium-constant conventions are defined with the Gibbs energy G and component chemical potentials whose constrained-equilibrium role the Gibbs bulk-equilibrium record declares.",
    "claimIds": [
      "B-gibbs-equilibrium-reaction-gibbs-energy"
    ]
  },
  {
    "id": "bridge:ionic-charge-state-nucleotide-permeability",
    "source": "phys:ionic-charge-state",
    "target": "bio:vesicle-nucleotide-permeability",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The vesicle nucleotide-permeation comparison is interpreted by net species charge: AMP, ADP and ATP with 2, 3 and 4 negative charges, magnesium complexes of reduced net charge and singly negatively charged activated nucleotides.",
    "claimIds": [
      "B-ionic-charge-state-nucleotide-permeability"
    ],
    "contextIds": [
      "mansy2008-nucleotide-permeability"
    ]
  },
  {
    "id": "bridge:ionic-charge-state-prywes-esi-ms",
    "source": "phys:ionic-charge-state",
    "target": "bio:prywes2016-activation-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The activated-trimer identity check in the Prywes activation preparation is read out as a negative-mode ESI mass-to-charge value, which relies on detecting a molecular anion with an assigned signed charge state; m/z alone does not fix mass and charge separately.",
    "claimIds": [
      "B-ionic-charge-state-prywes-esi-ms"
    ],
    "contextIds": [
      "prywes2016-activation-preparation"
    ]
  },
  {
    "id": "bridge:absorption-coefficient-dna-cage-concentration",
    "source": "opt:absorption-coefficient",
    "target": "bio:zhao2016-cage-characterization-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The DNA-cage concentration readout converts measured 260 nm absorbance into concentration with an adopted extinction coefficient, relying on a decadic absorption coefficient per path length and concentration rather than on a dimensionless transmitted-flux fraction.",
    "claimIds": [
      "B-absorption-coefficient-dna-cage-concentration"
    ],
    "contextIds": [
      "zhao2016-cage-characterization"
    ]
  },
  {
    "id": "bridge:induced-dipole-response-ms2-iscat-readout",
    "source": "phys:molecular-dipole-response",
    "target": "bio:ms2-optical-assembly-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The MS2 interferometric-scattering readout treats the normalized spot intensity as proportional to the assembling particle's total polarizability, a field-induced dipole response of its protein and RNA components, which the source calibrates to bound coat-protein number.",
    "claimIds": [
      "B-induced-dipole-response-ms2-iscat-readout"
    ],
    "contextIds": [
      "garmann2019-ms2-optical-assembly-context"
    ]
  },
  {
    "id": "bridge:ion-atmosphere-hammerhead-high-salt",
    "source": "phys:dilute-electrolyte-screening",
    "target": "bio:boots-hammerhead-ion-response",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The hammerhead high-salt comparison is interpreted with monovalent-divalent ion competition around RNA, which Boots attribute to Draper's diffuse ion-atmosphere account; that atmosphere is the statistical counter-ion excess of the Debye-Hueckel model, not discrete-site binding.",
    "claimIds": [
      "B-ion-atmosphere-hammerhead-high-salt"
    ],
    "contextIds": [
      "boots2008-hammerhead-cleavage-context"
    ]
  },
  {
    "id": "bridge:reaction-path-model-activation-gibbs-convention",
    "source": "phys:reaction-path-quantum-model",
    "target": "bio:activation-gibbs-convention",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The activation-Gibbs convention's threshold, zero-point and transmission-coefficient assumptions are interpreted with the reaction-path model, in which hydroxymethylene reacts by hydrogen tunnelling through a barrier above 30 kcal/mol at 11 K.",
    "claimIds": [
      "B-reaction-path-model-activation-gibbs-convention"
    ]
  },
  {
    "id": "bridge:tonic-ifn-stat1-immune-response-scope",
    "source": "cell:stat1-ifng-response-competence",
    "target": "cell:immune-response-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The STAT1-dependent later cytokine-competence finding is organized under the reviewed cellular immune-response scope as one of its mammalian-cell signalling and effector cases. Membership is an editorial organization of separately admitted preparations and does not transfer the fibroblast result to the necrotic-lysate or inflammasome preparations.",
    "claimIds": [
      "B-tonic-ifn-stat1-immune-response-scope"
    ]
  },
  {
    "id": "bridge:nk-plasticity-immune-response-scope",
    "source": "cell:nk-plasticity-and-tolerance",
    "target": "cell:immune-response-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The plastic mature-NK responsiveness and scoped rejection finding is organized under the reviewed cellular immune-response scope as one of its recognition and effector cases. Grouping records the editorial family membership only; the transfer preparation remains distinct from the lysate and inflammasome preparations in that scope.",
    "claimIds": [
      "B-nk-plasticity-immune-response-scope"
    ]
  },
  {
    "id": "bridge:cmv-tcell-function-immune-response-scope",
    "source": "cell:older-cmv-function-counterexample",
    "target": "cell:immune-response-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The human ex-vivo CMV-response comparison is organized under the reviewed cellular immune-response scope as one of its effector-function cases, measured as per-cell cytokine and degranulation readouts. Scope membership does not align the human cohort comparison with the mouse infection or macrophage preparations it sits beside.",
    "claimIds": [
      "B-cmv-tcell-function-immune-response-scope"
    ]
  },
  {
    "id": "bridge:macrophage-spectrum-immune-response-scope",
    "source": "cell:macrophage-activation-spectrum",
    "target": "cell:immune-response-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The stimulus-dependent macrophage activation spectrum is organized under the reviewed cellular immune-response scope as one of its recognition and signalling cases, since the panel includes pattern-recognition-receptor ligands alongside cytokines and metabolic cues. The grouping leaves the transcriptome geometry a culture measurement and does not couple it to the lysate or inflammasome readouts.",
    "claimIds": [
      "B-macrophage-spectrum-immune-response-scope"
    ]
  },
  {
    "id": "bridge:mtor-sasp-output-sasp-scope",
    "source": "cell:laberge2015-sasp-translation-response",
    "target": "cell:sasp-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The mTOR-sensitive secretory-output finding is organized under the reviewed senescence-associated secretory-phenotype scope: the measured interleukin output of senescent fibroblasts is one preparation-dependent instance of that phenotype. Membership does not fix a universal secretome composition or extend mTOR sensitivity to every senescent preparation in the scope.",
    "claimIds": [
      "B-mtor-sasp-output-sasp-scope"
    ]
  },
  {
    "id": "bridge:synthetic-circuit-regulatory-architecture-scope",
    "source": "cell:gene-expression-architecture-response",
    "target": "cell:regulatory-architecture-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The engineered-yeast finding that single-cell reporter distributions differ between a constitutively expressed activator and positive autoregulation is organized under the reviewed regulatory-architecture and dynamics scope, which already holds other preparation-specific feedback and switching cases. The grouping does not merge these circuits into one cell-wide controller or carry the modelled bistability into natural regulation.",
    "claimIds": [
      "B-synthetic-circuit-regulatory-architecture-scope"
    ]
  },
  {
    "id": "bridge:atp-heterogeneity-cell-state-scope",
    "source": "cell:cellular-atp-heterogeneity",
    "target": "cell:state-dependent-biochemistry-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Calibrated single-cell ATP estimates that differ widely within one bacterial culture are organized under the reviewed cell-state-dependence scope, which names metabolite availability among the state variables that can condition local biochemical activity. The reporter distribution is organized there as a measured state variable and sets no reaction rate and no energy budget.",
    "claimIds": [
      "B-atp-heterogeneity-cell-state-scope"
    ]
  },
  {
    "id": "bridge:break-repair-persistent-damage-arrest",
    "source": "cell:genome-maintenance",
    "target": "cell:senescence-damage-arrest",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The persistent-damage arrest record is defined with the repaired-versus-unrepaired double-strand-break distinction that the targeted-break assays operationalize: foci count as persistent when induced breaks are not resolved by a repair pathway. The repair fractions stay readout-dependent estimates in an engineered human-cell assay and carry no senescence endpoint.",
    "claimIds": [
      "B-break-repair-persistent-damage-arrest"
    ]
  },
  {
    "id": "bridge:ap1-golgi-carrier-chromatophore-import",
    "source": "cell:golgi-ap1-recycling-response",
    "target": "cell:chromatophore-import-route-hypothesis",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The proposed Golgi-mediated chromatophore import route is interpreted with the adaptor-dependent Golgi carrier function measured in yeast: predicted adaptor-binding sites and processing patterns are read as trafficking evidence only under that carrier account. The yeast cargo measurement identifies neither the chromatophore route nor its processing peptidase.",
    "claimIds": [
      "B-ap1-golgi-carrier-chromatophore-import"
    ],
    "contextIds": [
      "oberleitner2022-chromatophore-n-termini"
    ]
  },
  {
    "id": "bridge:gcap-expression-cyclase-activity",
    "source": "cell:mendez2001-gcap-expression-response",
    "target": "cell:mendez2001-gcap-enzyme-response",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The calcium-dependent guanylate-cyclase result is interpreted with the expression-validation result from the same animals: absent calcium dependence is read against undetectable expression of both activator proteins, and the transgenic restoration is read against a transgene level about twice the endogenous one. The expression assay supplies the genotype and dose frame, not the activity measurement.",
    "claimIds": [
      "B-gcap-expression-cyclase-activity"
    ],
    "contextIds": [
      "mendez2001-gcap-enzyme"
    ]
  },
  {
    "id": "bridge:gcap-expression-rod-flash-response",
    "source": "cell:mendez2001-gcap-expression-response",
    "target": "cell:mendez2001-gcap-current-response",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The single-rod flash-response comparison is interpreted with the same expression validation: larger and slower dim-flash responses are read against undetectable activator proteins, and the failure of transgene-only rods to restore the early rapid recovery is read against a transgene expressed above the endogenous level rather than a dose-matched control.",
    "claimIds": [
      "B-gcap-expression-rod-flash-response"
    ],
    "contextIds": [
      "mendez2001-gcap-current"
    ]
  },
  {
    "id": "bridge:dsrna-interference-shrna-depletion",
    "source": "bio:rnai-source-inference",
    "target": "cell:rodier2009-fibroblast-arrest-secretion-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The depletion arm of the fibroblast damage and secretion preparation is read out through sequence-directed double-stranded-RNA interference: hairpin constructs against damage-response proteins stand for reduced protein level on that principle. The worm study supports introduced double-stranded-RNA interference only and settles neither the mammalian machinery nor knockdown efficiency or off-target behaviour in these cells.",
    "claimIds": [
      "B-dsrna-interference-shrna-depletion"
    ],
    "contextIds": [
      "rodier2009-fibroblast-arrest-secretion"
    ]
  },
  {
    "id": "bridge:fed-vesicle-shear-division-minimal-cell-gap",
    "source": "bio:vesicle-fed-membrane-growth",
    "target": "cell:minimal-cell-mechanism-gap",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The unresolved division mechanism of the minimized cells is interpreted with model-membrane physics: the source shields its cells from shear because shear has been proposed to facilitate scission of primordial cells, and reads the observed filamentous and pearled forms against predictions for abiotic vesicles. Fed fatty-acid vesicles are a separate chemical preparation and identify no gene or protein in the minimal cell.",
    "claimIds": [
      "B-fed-vesicle-shear-division-minimal-cell-gap"
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "bridge:vesicle-macromolecule-barrier-enclosure-readout",
    "source": "bio:vesicle-permeability-scope",
    "target": "cell:membrane-enclosure-without-reporter",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "Enclosure of the reporter-negative vesicles is read out through exclusion of an external fluorescent macromolecule, a readout that rests on the model-membrane result that large or highly charged solutes do not cross a fatty-acid bilayer while small solutes permeate. Exclusion marks a macromolecule-impermeable boundary only and shows no self-maintaining cell.",
    "claimIds": [
      "B-vesicle-macromolecule-barrier-enclosure-readout"
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "bridge:supplied-lipid-growth-minimal-cell-propagation",
    "source": "bio:supplied-lipid-membrane-account",
    "target": "cell:minimal-cell-propagation",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The heterogeneous propagation morphologies are interpreted with a membrane-synthesis account: the source reads its branching and pearled forms against an extrusion-resolution model that turns on excess membrane synthesis and against the lipid composition of the medium. The in-vitro cascade shows supplied-enzyme phospholipid production expanding pre-existing liposomes and explicitly not forming membranes without them.",
    "claimIds": [
      "B-supplied-lipid-growth-minimal-cell-propagation"
    ],
    "contextIds": [
      "pelletier2021-propagation"
    ]
  },
  {
    "id": "bridge:transducin-pde-stage-rod-response",
    "source": "bio:signal-transduction-source-scope",
    "target": "ret:rod-response",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The rod-response synthesis uses the light-dependent transducin and phosphodiesterase step that the scoped signal-transduction record bounds: the reconstituted-membrane result supplies the catalytic stage named in the rod description. That biochemical stage is admitted from an abstract only and supplies no membrane current, no gain and no end-to-end transfer.",
    "claimIds": [
      "B-transducin-pde-stage-rod-response"
    ]
  },
  {
    "id": "bridge:glucose-ph-cell-state-scope",
    "source": "bio:yeast-glucose-ph-response",
    "target": "cell:state-dependent-biochemistry-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Glucose-dependent cytosolic-pH regulation in yeast is organized under the reviewed cell-state-dependence scope, which names pH among the state variables that can condition local biochemical activity. The ratiometric reporter gives a calibrated ensemble pH estimate and quantifies no reaction rate and no universal set point.",
    "claimIds": [
      "B-glucose-ph-cell-state-scope"
    ]
  },
  {
    "id": "bridge:ddx4-droplet-partition-compartmentalization-scope",
    "source": "bio:ddx4-labeled-dna-partition",
    "target": "cell:eukaryotic-compartmentalization",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The droplet partition result is organized under the reviewed compartmentalization scope as a membraneless case of selective exchange, in which solute partition distinguishes an interior from the surrounding solution without a bilayer or a pore. Nothing in the in-vitro droplet result transfers to nuclear-pore permeability or indicates a shared selectivity mechanism.",
    "claimIds": [
      "B-ddx4-droplet-partition-compartmentalization-scope"
    ]
  },
  {
    "id": "bridge:chaperone-client-account-hsf1-feedback",
    "source": "bio:chaperonin-aggregation-account",
    "target": "cell:krakowiak2018-heat-feedback-response",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The heat-shock feedback finding is defined with a chaperone-client account: the chaperone is read as bound either to the transcription factor or to non-native client protein, so that client load changes how much of it is available. The purified chaperonin protocols measure aggregation prevention for their own clients and settle nothing about the yeast reporter dynamics.",
    "claimIds": [
      "B-chaperone-client-account-hsf1-feedback"
    ]
  },
  {
    "id": "bridge:furman-metabolite-chronic-inflammation-scope",
    "source": "org:infl-metabolite-inflammasome-output",
    "target": "org:infl-chronic-inflammation-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The THP-1 nucleotide-metabolite cytokine finding is organized under the chronic low-grade inflammation scope as one assay-defined inflammatory elevation; the scope uses it without treating a cell-line exposure as an organism-wide inflammatory state.",
    "claimIds": [
      "B-furman-metabolite-chronic-inflammation-scope"
    ]
  },
  {
    "id": "bridge:arnold-myeloid-surveillance-repair-scope",
    "source": "org:infl-injury-myeloid-state-transition",
    "target": "org:infl-surveillance-repair-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The injury-associated myeloid state trajectory is organized under the surveillance-and-repair allocation scope, which already uses the same source's depletion and co-culture results; timing dependence is retained instead of a universal inverse relation.",
    "claimIds": [
      "B-arnold-myeloid-surveillance-repair-scope"
    ]
  },
  {
    "id": "bridge:thevar-correction-anti-tnf-permeability",
    "source": "org:infl-thevar-correction-boundary",
    "target": "org:infl-orginfl-thevar-anti-tnf-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The anti-TNF preparation's FITC-dextran permeability readout is read through the corrected tracer concentration and the correction's statement that permeability and ELISA panels come from simultaneously performed datasets.",
    "claimIds": [
      "B-thevar-correction-anti-tnf-permeability"
    ],
    "contextIds": [
      "orginfl-thevar-anti-tnf"
    ]
  },
  {
    "id": "bridge:thevar-correction-germfree-permeability",
    "source": "org:infl-thevar-correction-boundary",
    "target": "org:infl-orginfl-thevar-age-germfree-context",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The age and germ-free comparison's tracer permeability readout is read through the same corrected FITC-dextran concentration and the shared-dataset and common blinded pathology-scale statements of the correction.",
    "claimIds": [
      "B-thevar-correction-germfree-permeability"
    ],
    "contextIds": [
      "orginfl-thevar-age-germfree"
    ]
  },
  {
    "id": "bridge:hall-slice-vascular-scope",
    "source": "org:slice-capillary-dilation",
    "target": "org:vascular-development-perfusion-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The oxygen- and pathway-dependent slice capillary dilation finding is organized under the vascular organization and perfusion scope, whose own reading already covers this slice passage, while mural-cell attribution stays preparation-dependent.",
    "claimIds": [
      "B-hall-slice-vascular-scope"
    ]
  },
  {
    "id": "bridge:hall-slice-pathway-invivo-attribution",
    "source": "org:slice-capillary-dilation",
    "target": "org:hall-pericyte-attribution-boundary",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The in-vivo mural attribution boundary is interpreted with the slice pharmacology: the identification of an EP4-dependent, TTX-sensitive dilation at pericyte locations is what the in-vivo timing and position data are read against.",
    "claimIds": [
      "B-hall-slice-pathway-invivo-attribution"
    ],
    "contextIds": [
      "hall2014-slice-dilation"
    ]
  },
  {
    "id": "bridge:tan-warmth-neural-coordination-scope",
    "source": "org:warmth-neural-response",
    "target": "org:neural-organ-coordination-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The warm-sensitive population response is organized under the neural coordination of organs scope, whose own reading already covers this photometry passage, with calcium fluorescence kept distinct from effector output.",
    "claimIds": [
      "B-tan-warmth-neural-coordination-scope"
    ]
  },
  {
    "id": "bridge:tan-warmth-effector-interpretation",
    "source": "org:warmth-neural-response",
    "target": "org:coordinated-thermal-effectors",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The coordinated tail-warming and brown-fat cooling readout is interpreted as a replay of the measured natural warm activation, so the effector result depends on the photometry finding and on the heat-occlusion control.",
    "claimIds": [
      "B-tan-warmth-effector-interpretation"
    ],
    "contextIds": [
      "tan2016-warmth-activity"
    ]
  },
  {
    "id": "bridge:brownell-lineage-repair-scope",
    "source": "org:acute-repair-versus-lineage-retention",
    "target": "org:repair-regeneration-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The denervation wound result is organized under the repair and regeneration scope, which keeps wound closure, cell contribution and lasting lineage retention as separate outcomes rather than one repair variable.",
    "claimIds": [
      "B-brownell-lineage-repair-scope"
    ]
  },
  {
    "id": "bridge:hofer-mosaic-midget-cone-weights",
    "source": "org:hofer2005-local-mosaic-response",
    "target": "ret:retinal-filtering",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The midget-pathway cone-weight result is interpreted with the measured local variability of the human L and M cone mosaic, which the primate study cites for the wide range of centre cone weights beside an about-even surround.",
    "claimIds": [
      "B-hofer-mosaic-midget-cone-weights"
    ],
    "contextIds": [
      "crook2011",
      "hofer2005-local-mosaic"
    ]
  },
  {
    "id": "bridge:incident-light-primate-off-drive",
    "source": "ret:incident-light",
    "target": "ret:primate-off-drive",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The primate OFF light-drive protocol is specified through the illumination convention: LED spectra and estimated photoreceptor collecting areas convert radiometric intensity into the stated photoisomerisation rate per rod per second.",
    "claimIds": [
      "B-incident-light-primate-off-drive"
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "bridge:incident-light-mouse-sustained-drive",
    "source": "ret:incident-light",
    "target": "ret:mouse-sustained-drive",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The mouse OFF sustained alpha light-drive protocol is specified through the same illumination convention, with the mouse rod collecting area supplying its own conversion to photoisomerisation rate.",
    "claimIds": [
      "B-incident-light-mouse-sustained-drive"
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "bridge:incident-light-mouse-transient-drive",
    "source": "ret:incident-light",
    "target": "ret:mouse-transient-drive",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The transient OFF alpha light-drive protocol is specified through the illumination convention: a calibrated 500 nm source intensity is converted into a stated photoisomerisation rate per rod per second.",
    "claimIds": [
      "B-incident-light-mouse-transient-drive"
    ],
    "contextIds": [
      "jin2022"
    ]
  },
  {
    "id": "bridge:recording-context-primate-off-readout",
    "source": "ret:recording-context",
    "target": "ret:primate-off-readout",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The primate OFF excitatory-input readout relies on declared membrane-recording conditions: the caesium-based internal solution and a per-cell holding potential at the estimated inhibitory reversal define what the reported amplitudes isolate.",
    "claimIds": [
      "B-recording-context-primate-off-readout"
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "bridge:recording-context-mouse-sustained-readout",
    "source": "ret:recording-context",
    "target": "ret:mouse-sustained-readout",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The mouse OFF sustained alpha excitatory-input readout relies on the same declared voltage-clamp conditions, so its reported drug-to-control ratios are conditioned on the per-cell isolation of excitatory input.",
    "claimIds": [
      "B-recording-context-mouse-sustained-readout"
    ],
    "contextIds": [
      "grimes2018"
    ]
  },
  {
    "id": "bridge:macrophage-spectrum-tissue-niches",
    "source": "cell:macrophage-activation-spectrum",
    "target": "org:infl-tissue-niches-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The tissue inflammatory-microenvironment scope uses the human macrophage activation spectrum as its activation vocabulary: the aged adipose macrophage transcriptomes were scored against that 29-condition signature set and matched no single polarisation state.",
    "claimIds": [
      "B-macrophage-spectrum-tissue-niches"
    ]
  },
  {
    "id": "bridge:inflammasome-scope-metabolite-output",
    "source": "cell:inflammasome-il1-scope",
    "target": "org:infl-metabolite-inflammasome-output",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The nucleotide-metabolite cytokine readout is defined with the inflammasome and IL-1-family conventions: a priming step, a separate activating step, caspase-1 processing and cytokine secretion are kept as distinct observables.",
    "claimIds": [
      "B-inflammasome-scope-metabolite-output"
    ]
  },
  {
    "id": "bridge:sasp-composition-adipose-explant",
    "source": "cell:sasp-universal-signature-boundary",
    "target": "org:infl-human-explant-secretory-change",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The human adipose explant secretion readout is defined with the senescence-associated secretory concept, whose measured composition depends on inducer and cell type, so the explant's split into SASP and non-SASP factors is a context-bound classification.",
    "claimIds": [
      "B-sasp-composition-adipose-explant"
    ]
  },
  {
    "id": "bridge:atp-ratio-energy-charge",
    "source": "cell:atp-heterogeneity-mechanism",
    "target": "org:metabolic-reorganization-retained-charge",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The unchanged energy charge under a plasma-like medium is interpreted with the single-cell result that a maintained adenylate ratio is compatible with widely different per-cell nucleotide concentrations.",
    "claimIds": [
      "B-atp-ratio-energy-charge"
    ],
    "contextIds": [
      "yaginuma2014-atp-population",
      "cantor2017-medium-landscape"
    ]
  },
  {
    "id": "bridge:age-cmv-subsets-immune-setpoint",
    "source": "cell:age-cmv-tcell-composition",
    "target": "org:infl-immune-setpoint-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The cross-sectional age and serostatus subset composition is organized under the age-shifted immune set-point scope, which requires an observable, compartment and assay before any set point is asserted.",
    "claimIds": [
      "B-age-cmv-subsets-immune-setpoint"
    ]
  },
  {
    "id": "bridge:nk-resetting-immune-architecture",
    "source": "cell:nk-plasticity-and-tolerance",
    "target": "org:infl-immune-architecture-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The environment-dependent resetting of mature NK responsiveness is organized under the organism-scale defense architecture scope, which keeps recognition, effector function and tissue compatibility as separate readouts.",
    "claimIds": [
      "B-nk-resetting-immune-architecture"
    ]
  },
  {
    "id": "bridge:synthetic-contact-sorting-patterning-scope",
    "source": "cell:toda2018-contact-sorting-response",
    "target": "org:tissue-patterning-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The engineered contact-signaling and adhesion result is organized under the tissue patterning scope as a manipulated-condition case in which layers and poles form without diffusible morphogens, while an engineered aggregate stays distinct from tissue.",
    "claimIds": [
      "B-synthetic-contact-sorting-patterning-scope"
    ]
  },
  {
    "id": "bridge:graded-binary-fate-choice",
    "source": "cell:gene-expression-architecture-response",
    "target": "org:pattern-signaling-readout",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The reading of a binary fate choice from a graded signalling level uses the single-cell distinction between graded unimodal and separated two-state expression distributions established in a synthetic positive-feedback circuit.",
    "claimIds": [
      "B-graded-binary-fate-choice"
    ]
  },
  {
    "id": "bridge:cardin-pv-targeting-dentate-protocol",
    "source": "neur:fs-activation",
    "target": "neur:pv-rgl-activation-protocol",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The five-day dentate PV-interneuron activation protocol is defined with the PV-Cre line and Cre-dependent inverted-cassette AAV opsin targeting that Song et al. attribute to Cardin et al. 2009, the barrel-cortex fast-spiking activation preparation; only the targeting method is shared.",
    "claimIds": [
      "B-cardin-pv-targeting-dentate-protocol"
    ]
  },
  {
    "id": "bridge:reid-correlogram-retinogeniculate-efficacy",
    "source": "vis:geniculocortical-input",
    "target": "vis:retinogeniculate-transfer",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The retinogeniculate spike-efficacy readout identifies monosynaptic retina-to-LGN pairs by narrow cross-correlogram peaks whose significance Usrey et al. assess with the method of their reference 11, the Reid and Alonso geniculocortical connectivity study; the analysis convention, not any cortical finding, is shared.",
    "claimIds": [
      "B-reid-correlogram-retinogeniculate-efficacy"
    ],
    "contextIds": [
      "usrey1998"
    ]
  },
  {
    "id": "bridge:anatomical-functional-module-boundary",
    "source": "neur:connectome-function-identity",
    "target": "neur:ensemble-generalization",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The boundary that a calcium-defined ensemble or modularity partition does not fix an anatomical minimum unit is interpreted with the structural-versus-functional network distinction that also leaves the anatomical-topology-to-function mapping a model-selection question; Sporns and Betzel treat both together.",
    "claimIds": [
      "B-anatomical-functional-module-boundary"
    ]
  },
  {
    "id": "bridge:hebbian-imprinting-ensemble-recall",
    "source": "neur:plasticity-learning",
    "target": "neur:ensemble-perception",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The interpretation of holographically recalled V1 ensembles as pattern-completing assemblies uses the plasticity-to-learning premise that an imprinted activity pattern strengthens connections among its members; the recall experiments do not measure that synaptic change.",
    "claimIds": [
      "B-hebbian-imprinting-ensemble-recall"
    ]
  },
  {
    "id": "bridge:plasticity-premise-synaptic-homeostasis",
    "source": "neur:plasticity-learning",
    "target": "neur:sleep-homeostasis",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The synaptic-homeostasis sleep-function hypothesis is formulated with the plasticity-to-learning premise that learning during wake strengthens synapses; Tononi and Cirelli define the proposed function of sleep as renormalizing that learning-driven strengthening.",
    "claimIds": [
      "B-plasticity-premise-synaptic-homeostasis"
    ]
  },
  {
    "id": "bridge:plasticity-interpretation-engram-gria1",
    "source": "neur:plasticity-learning",
    "target": "neur:engram-gria1-shaft",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Marco et al. interpret higher GRIA1 and eIF4E shaft signals in reactivated engram-labelled neurons as part of transcriptional programs maintaining synaptic plasticity across memory; that reading uses the plasticity-to-learning premise and is not a synaptic-efficacy measurement.",
    "claimIds": [
      "B-plasticity-interpretation-engram-gria1"
    ]
  },
  {
    "id": "bridge:astrocyte-dentate-ltp-plasticity-scope",
    "source": "neur:astro-vglut1-ltp",
    "target": "cog:synaptic-plasticity-learning-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "De Ceglia et al. treat the paired dentate theta-burst LTP comparison near VGLUT1-deficient astrocytes as a test of astrocyte roles in synaptic plasticity at perforant path-granule cell synapses, so the finding is organized under the synaptic plasticity and learning scope.",
    "claimIds": [
      "B-astrocyte-dentate-ltp-plasticity-scope"
    ]
  },
  {
    "id": "bridge:microglial-complement-neuroimmune-scope",
    "source": "neur:cr3-engulfment",
    "target": "cog:neuroimmune-interactions-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Schafer et al. treat microglial engulfment of developing retinogeniculate inputs as use of an immune-system phagocytic pathway, complement C3 and its receptor CR3, so the CR3-dependent engulfment finding is organized under the neuro-immune interactions scope.",
    "claimIds": [
      "B-microglial-complement-neuroimmune-scope"
    ]
  },
  {
    "id": "bridge:conditioned-immunosuppression-neuroimmune-scope",
    "source": "cog:immune-four-reexposures-response",
    "target": "cog:neuroimmune-interactions-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Albring et al. treat behaviourally conditioned suppression of stimulated IL-2 output as a CNS-immune system interaction with proposed central and sympathetic routes, and Wager and Atlas cite such conditioning as autonomic and neuroendocrine interaction with the immune system; the four-re-exposure response is organized under the neuro-immune scope.",
    "claimIds": [
      "B-conditioned-immunosuppression-neuroimmune-scope"
    ]
  },
  {
    "id": "bridge:working-memory-span-sequence-deviants",
    "source": "neur:wm-task-construct",
    "target": "neur:meg-sequence-behavior",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Al Roumi et al. interpret complexity-dependent missed deviants in the MEG spatial-sequence task as the most complex sequences exceeding working-memory span and argue against slot-based working-memory models; that reading uses the working-memory construct of temporary retention with a storage limit.",
    "claimIds": [
      "B-working-memory-span-sequence-deviants"
    ]
  },
  {
    "id": "bridge:global-workspace-episodic-buffer",
    "source": "neur:gwt-blackboard",
    "target": "neur:wm-episodic-buffer",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Baddeley characterizes the proposed episodic buffer as the working-memory feature that lets working memory act as a global workspace accessed by conscious awareness along the lines suggested by Baars, citing Baars 1988; the buffer hypothesis uses the global-workspace architecture concept.",
    "claimIds": [
      "B-global-workspace-episodic-buffer"
    ]
  },
  {
    "id": "bridge:working-memory-lip-null-interpretation",
    "source": "neur:wm-task-construct",
    "target": "neur:lip-motion-null",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Jeurissen et al. interpret why some LIP inactivations, including the Katz et al. design, show weak or absent motion-choice effects by arguing that LIP should matter only when the decision integrates evidence over time, relies on working memory or evaluates an interval; that interpretation of the null uses the working-memory construct.",
    "claimIds": [
      "B-working-memory-lip-null-interpretation"
    ]
  },
  {
    "id": "bridge:neuronal-workspace-conscious-feeling",
    "source": "neur:gnwt-access",
    "target": "neur:affective-property",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "LeDoux proposes that conscious feelings result when global organismic states are represented in a prefrontal-parietal cognitive workspace, citing workspace accounts including Dehaene and Changeux; the unresolved relation of affective states to conscious feeling is interpreted with the neuronal-workspace access proposal.",
    "claimIds": [
      "B-neuronal-workspace-conscious-feeling"
    ]
  },
  {
    "id": "bridge:empathic-pain-affective-scope",
    "source": "neur:partner-pain-shared-affect-hypothesis",
    "target": "cog:affective-processing-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Singer et al. interpret the shared ACC and anterior-insula response to a partner's pain as activation of second-order re-representations of the subjective affective dimension of pain, so their shared-affect hypothesis is organized under the emotional and affective processing scope.",
    "claimIds": [
      "B-empathic-pain-affective-scope"
    ]
  },
  {
    "id": "bridge:shannon-model-avalanche-information-optimality",
    "source": "neur:neural-information-identity",
    "target": "neur:criticality-hypothesis",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The information-optimality part of the avalanche criticality interpretation rests on a Shannon-entropy mutual information computed for input and output patterns of simulated feedforward networks, so it depends on the explicit source, channel and variable mapping that the communication-model hypothesis leaves untested for measured neural data.",
    "claimIds": [
      "B-shannon-model-avalanche-information-optimality"
    ]
  },
  {
    "id": "bridge:observer-framework-visual-haptic-integration",
    "source": "neur:internal-model-hypothesis",
    "target": "neur:height-cue-combination",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Ernst and Banks realize their variance-minimizing cue-combination principle by maximum-likelihood estimation citing, among others, Ghahramani, Wolpert and Jordan's sensorimotor observer framework, whose hand-state component is the state-estimator account of unseen-hand localization; the height judgments are interpreted within that estimation framework.",
    "claimIds": [
      "B-observer-framework-visual-haptic-integration"
    ]
  },
  {
    "id": "bridge:ltp-synapse-formation-motor-spine-memory",
    "source": "neur:plasticity-learning",
    "target": "neur:motor-spine-memory",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Xu et al. interpret learning-induced, persistently retained motor-cortex spines as a long-lasting structural basis for enhanced synaptic strength and a candidate mechanism of durable motor memory, relating them to synapse formation seen during LTP in vitro; the persistent-spine memory hypothesis uses the plasticity-to-learning premise.",
    "claimIds": [
      "B-ltp-synapse-formation-motor-spine-memory"
    ]
  },
  {
    "id": "bridge:gamma-synchrony-null-rhythm-coding",
    "source": "neur:visual-phase-consistency",
    "target": "neur:rhythm-coding",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "COGITATE tested theory-specified interareal gamma- and beta-band phase synchronization as a candidate oscillatory carrier of conscious visual content and found that the preregistered phase-consistency metric supported neither theory; the general rhythm-coding hypothesis is interpreted with this preregistered null.",
    "claimIds": [
      "B-gamma-synchrony-null-rhythm-coding"
    ]
  },
  {
    "id": "bridge:pv-activation-cycle-scope-reuse",
    "source": "neur:pv-rgl-cycle-suppression",
    "target": "org:existing-neural-cycle-evidence",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The organismal 'existing PV-RGL evidence' reuse record is defined with the Level-6 dentate finding that five-day PV activation lowers EdU- and MCM2-positive RGL measures relative to no-light sham; it carries that finding's claim without a relation to its entity.",
    "claimIds": [
      "B-pv-activation-cycle-scope-reuse"
    ]
  },
  {
    "id": "bridge:pv-inhibition-cycle-scope-reuse",
    "source": "neur:pv-rgl-cycle-increase",
    "target": "org:existing-neural-cycle-evidence",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The organismal 'existing PV-RGL evidence' reuse record is defined with the Level-6 dentate finding that five-day PV inhibition increases EdU- and MCM2-positive RGL measures relative to no-light sham, the opposite-direction contrast it names explicitly.",
    "claimIds": [
      "B-pv-inhibition-cycle-scope-reuse"
    ]
  },
  {
    "id": "bridge:pv-isolation-residual-scope-reuse",
    "source": "neur:pv-isolation-residual-edu",
    "target": "org:existing-neural-cycle-evidence",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The organismal 'existing PV-RGL evidence' reuse record is defined with the Level-6 housing-by-PV-stimulation finding that isolated mice retain higher EdU-positive RGL density than group-housed mice under PV light stimulation, the residual it cites as incomplete rescue.",
    "claimIds": [
      "B-pv-isolation-residual-scope-reuse"
    ]
  },
  {
    "id": "bridge:capillary-timing-diameter-null-boundary",
    "source": "org:hall-sensory-perfusion-response",
    "target": "neur:cap-k-local-diameter-null",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Longden et al. bound their null for local capillary dilation after focal potassium with Hall et al.'s in vivo report that capillaries dilate before upstream arterioles, noting that their measured segments lacked pericytes; the null's interpretation depends on the Hall sensory-timing finding.",
    "claimIds": [
      "B-capillary-timing-diameter-null-boundary"
    ]
  },
  {
    "id": "bridge:pericyte-pge2-route-alternative",
    "source": "org:slice-capillary-dilation",
    "target": "neur:neurovascular-complete-route",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The unresolved complete neural-to-vascular route is interpreted alongside Hall et al.'s slice evidence that activity-evoked capillary dilation depends on EP4 (PGE2) signalling to pericytes; Longden et al. treat this pericyte route as a possible, untested contributor to or amplifier of capillary-to-arteriole signalling.",
    "claimIds": [
      "B-pericyte-pge2-route-alternative"
    ]
  },
  {
    "id": "bridge:awake-smc-hyperemia-neurovascular-scope",
    "source": "org:hill-awake-neurovascular-response",
    "target": "cog:neurovascular-coupling-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Hill et al. treat their awake whisker-evoked vasomotion comparison as a test of which mural cells regulate functional hyperemia during neurovascular coupling, so the smooth-muscle-favouring awake response is organized under the neurovascular coupling scope as a primary test of the pericyte route.",
    "claimIds": [
      "B-awake-smc-hyperemia-neurovascular-scope"
    ]
  },
  {
    "id": "bridge:brainstem-inflammation-organ-coordination-scope",
    "source": "neur:trap-activation-cytokines",
    "target": "org:neural-organ-coordination-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Jin et al. place their bidirectional brainstem regulation of LPS-evoked cytokines within the brain's long-proposed modulation of body biology and organ function and describe the circuit as maintaining homeostatic inflammatory balance, so the TRAP-activation cytokine finding is organized under the organismal neural coordination scope.",
    "claimIds": [
      "B-brainstem-inflammation-organ-coordination-scope"
    ]
  },
  {
    "id": "bridge:shannon-model-retinal-timing-information",
    "source": "neur:neural-information-identity",
    "target": "org:berry1997-information-response",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Berry et al. compute the information in retinal firing-event timing and spike count as Shannon information under a Gaussian heuristic and caution that retinal recordings alone cannot show whether the brain uses it; the timing-versus-count result is interpreted with the communication-model mapping hypothesis.",
    "claimIds": [
      "B-shannon-model-retinal-timing-information"
    ]
  },
  {
    "id": "bridge:auction-rules-under-institutional-change",
    "source": "soc:auction-rule-sensitive-coordination",
    "target": "soc:institutional-change-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Smith's rule-variant classroom-auction finding is organized under the institutional-change scope as a laboratory case in which specified rules of market organization (who may quote prices) accompany different price behavior; trading rules are read as researcher-specified institutions, not as historical institutional change.",
    "claimIds": [
      "B-auction-rules-under-institutional-change"
    ]
  },
  {
    "id": "bridge:convention-game-model-under-norms",
    "source": "soc:collective-choice-model",
    "target": "soc:social-norms-conventions-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Couzin et al.'s reduced convention-game analogue of their collective-choice model is organized under the norms-and-conventions scope as a declared model setting of self-reinforcing majority-opinion coordination in which an entrenched minority can bias perceived consensus; it is not an observed convention, a moral norm or a sanction.",
    "claimIds": [
      "B-convention-game-model-under-norms"
    ]
  },
  {
    "id": "bridge:bird-conformity-norm-under-norms",
    "source": "soc:bird-conformity-inference",
    "target": "soc:social-norms-conventions-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Aplin et al.'s conformity inference for seeded, equally rewarded great-tit techniques is organized under the norms-and-conventions scope as a source-labelled 'cultural norm', that is a conformity-maintained arbitrary tradition, without measured expectations, sanctions, coordination payoffs or obligations.",
    "claimIds": [
      "B-bird-conformity-norm-under-norms"
    ]
  },
  {
    "id": "bridge:bird-diffusion-under-variant-propagation",
    "source": "soc:bird-tradition-diffusion",
    "target": "soc:cultural-variant-propagation-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Aplin et al.'s seeded technique diffusion is organized under the cultural-variant-propagation scope as an experimenter-chosen behavioural variant whose transmission through observed social-network ties and later retention are measured in a wild bird population, separate from language chains and platform cascades.",
    "claimIds": [
      "B-bird-diffusion-under-variant-propagation"
    ]
  },
  {
    "id": "bridge:naming-convention-under-linguistic-change",
    "source": "soc:naming-convention-transition",
    "target": "soc:cultural-linguistic-change-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Centola et al.'s bounded replacement of an established face name is organized under the cultural-linguistic-change scope as a finite peer-coordination case of lexical-convention change, distinct from learner-to-learner transmission chains and migrant profiles.",
    "claimIds": [
      "B-naming-convention-under-linguistic-change"
    ]
  },
  {
    "id": "bridge:empathy-instrument-boundary-for-group-sensitivity",
    "source": "neur:empathy-measurement-boundary",
    "target": "soc:woolley2010-variable-groups-factor",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The social-sensitivity correlate of the Study-2 collective-intelligence factor is interpreted with the Level-6 empathy outcome and instrument boundary: it is the group average of an identified 'Reading the Mind in the Eyes' score, a mental-state-attribution test, not a measure of affect sharing, self-reported empathy or helping.",
    "claimIds": [
      "B-empathy-instrument-boundary-for-group-sensitivity"
    ],
    "contextIds": [
      "woolley2010-variable-groups"
    ]
  },
  {
    "id": "bridge:isolation-housing-under-social-neural-feedback",
    "source": "neur:pv-isolation-residual-edu",
    "target": "soc:social-neural-feedback-scope",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "Song et al.'s social-isolation versus group-housing contrast in dentate RGL EdU density is organized under the societal-feedback scope as a bounded mouse social-housing condition accompanied by a neural stem-cell marker difference; no societal mechanism, carrier minimum or universal social-to-neural law follows.",
    "claimIds": [
      "B-isolation-housing-under-social-neural-feedback"
    ]
  },
  {
    "id": "bridge:exclusion-distress-in-partner-pain-interpretation",
    "source": "soc:social-exclusion-bold-association",
    "target": "neur:partner-pain-shared-affect-hypothesis",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "Singer et al.'s affective re-representation interpretation of the shared ACC/insula response cites the Cyberball exclusion-distress association among prior imaging associations of these regions with subjective feelings; the citation frames the interpretation and is not a joint test or a common neural code for social and physical pain.",
    "claimIds": [
      "B-exclusion-distress-in-partner-pain-interpretation"
    ]
  },
  {
    "id": "bridge:gibbs-equilibrium-capn-sequential-binding",
    "source": "bio:reaction-gibbs-equilibrium",
    "target": "bio:capn-sequential-binding",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The CAPN sequential-binding record reports stepwise association free energies beside fitted dissociation constants; the two are related by the standard reaction Gibbs energy and equilibrium-constant convention, which the source uses to read a -2.8 kcal/mol free-energy difference as a 100-fold lower second-step affinity. The convention defines the reported quantities, not the cooperativity mechanism.",
    "claimIds": [
      "B-gibbs-equilibrium-capn-sequential-binding"
    ]
  }
];
export const BRIDGE_READINGS = {
  "topology": [
    "PDF pages 1-2: abstract and introduction, time, space, energy, mass and particle-like form as non-primitive notions",
    "PDF pages 3-4: proto-field Omega, local deviation and compensation function, Equation 1",
    "PDF pages 4-5: compensation measure, primitive difference operators, aggregation of distortion and minimal stable compensatory form, Equations 1-4",
    "PDF pages 6-8: five admissibility conditions and signature proposition, Equations 5-9",
    "PDF pages 9-12: operator uniqueness, excluded drift terms and minimal scalar closure term, Equations 10-21",
    "PDF pages 12-13: discrete compensation scale, Klein-Gordon-type equation and dispersion relation, Equations 19-26",
    "PDF pages 14-15: first closure segment and stability parameter range of the oscillatory mode, Equations 27-29",
    "PDF pages 19-20: configurational density, triadic closure conditions and net-drift elimination, Equations 36-40",
    "PDF pages 21-24: objecthood conditions, CRT-node status, localization and bound-state analogy, Equations 41-45",
    "PDF pages 25-27: CRT Lagrangian, emergent node parameter M and particle-like unit in 1+1 dimensions, Equations 46-50",
    "PDF pages 32-33: cycle of arising, ensemble-quantum definition and multiplicity of structural quanta, Equations 55-58",
    "PDF pages 33-34: alternative admissible forms, admissibility functional and argmin selection, Equations 56-60",
    "PDF pages 35-36: completion of Level 0, effective field at Level 1 and conclusion, Equations 61-62"
  ],
  "tong-qft-free-fields": [
    "Section 2.3.2: Casimir plates, boundary-quantized momentum and regulated 1+1 energy sum",
    "Section 2.5: complex scalar Lagrangian, equations of motion, particle and antiparticle operators and conserved charge"
  ],
  "gonzalez2021": [
    "Author arXiv:2106.10375v2 pages 1 and 4: beta-decay introduction and mean neutron lifetime; paired and global extraction, Equations 1-2, loss rate including beta decay and exponential mean-count model"
  ],
  "brodsky1998-light-front": [
    "arXiv:hep-ph/9705477v1 pages 9-10, Section 1: form factors as hadronic current matrix elements and light-cone wavefunction overlaps",
    "arXiv:hep-ph/9705477v1 pages 40-41, Section 3B, Equations 3.21-3.24 and Figure 3: free quark current at x+=0, Drell-frame J+ matrix elements and Fock-state overlap sum weighted by struck-quark charge",
    "arXiv:hep-ph/9705477v1 pages 106-107, Section 5B, Equations 5.15-5.16: nucleon Dirac and Pauli form factors as vector-current matrix elements in an effective three-quark light-cone description"
  ],
  "breidenbach1969": [
    "SLAC-PUB-650 author preprint (August 1969, submitted to Phys. Rev. Letters) pages 1-6: abstract, W1/W2 cross-section form, R-dependent nu*W2 limits for R=0 and R=infinity, scaling observations and model discussion"
  ],
  "borexino2015-electron-decay": [
    "Author v2, pages 1-2: abstract and introduction, charge-conservation motivation and the searched electron-to-neutrino-plus-photon channel"
  ],
  "shalm2015-bell": [
    "Publisher pages 250402-1 to 250402-2: Bell's theorem, local realism and local hidden-variable theories, CHSH and Clauser-Horne forms, locality and freedom-of-choice requirements"
  ],
  "pitrou2018-bbn": [
    "arXiv 1801.08023v2 (dated June 28, 2018), PDF page 24, Section IV.A, Equations 123-127: Maxwell-Boltzmann thermonuclear rate, Coulomb-plus-centrifugal barrier penetration, Sommerfeld parameter and astrophysical S-factor"
  ],
  "iupac2007-green-book-kinetics-thermodynamics": [
    "Green Book, 3rd ed., sections 2.12-2.12.1, pp. 67, 69: Michaelis constant and limiting rate with note 20, and the catalyzed-reaction stoichiometric-equation example",
    "Green Book, 3rd ed., section 2.11, pp. 56-57: Gibbs energy G=H-TS, partial molar quantities, chemical potential as partial molar Gibbs energy and note 11",
    "Green Book, 3rd ed., section 2.7, pp. 36-37: transmittance, absorptance, decadic and napierian absorbance, linear and molar absorption coefficients and notes 17-21 on the Beer-Lambert form",
    "Green Book, 3rd ed., section 2.12, p. 67: note 18 continued, bimolecular transition-state expression with transmission coefficient and threshold energy as zero-point-level difference"
  ],
  "gutscher2008-grx-rogfp2-redox": [
    "Abstract"
  ],
  "tuinstra2008-lymphotactin-folds": [
    "Published page 5057, Introduction: Anfinsen's thermodynamic hypothesis, the one sequence, one fold paradigm and the reported Ltn conformational equilibrium"
  ],
  "schreiner2008-hcoh-tunneling": [
    "Abstract"
  ],
  "rodier2009-ddr-senescence-secretion": [
    "Primary main Introduction paragraph on the DNA-damage response: ATM, 53BP1, gammaH2AX, CHK2, NBS1 and p53, and double-strand breaks that cannot be repaired leading to constitutive damage signalling and senescence arrest"
  ],
  "fire1998-celegans-dsrna-interference": [
    "Nature 391(6669), 806: abstract"
  ],
  "hall2014-brain-mural-flow": [
    "Discussion: messenger release, EP4-dependent pericyte dilation and capillary-before-arteriole timing in vivo",
    "Discussion: capillary-first dilation, arteriole signalling and EP4/NO mechanisms"
  ],
  "crook2011": [
    "Discussion: center versus surround L and M cone input weights compared with Buzas et al. 2006 and the local cone mosaic"
  ],
  "camell2017-catecholamine-catabolism": [
    "Methods Bioinformatics: Comparison of VAT and spleen macrophages to human in vitro activated monocyte-derived cells (29-signature CIBERSORT matrix)"
  ],
  "munozplanillo2013-nlrp3-potassium": [
    "Introduction: two-signal priming and activation model of the NLRP3 inflammasome and caspase-1 substrates"
  ],
  "toda2018-synthetic-contacts": [
    "Results: single-genotype fate-bifurcation circuit, spherically asymmetric structures and the minimal intercellular communication summary; Figures 4-6"
  ],
  "song2012": [
    "Reference list, page 153: reference 17 (Cardin et al. 2009)"
  ],
  "usrey1998": [
    "References and Notes, p. 387: references 3 and 11"
  ],
  "sporns2016": [
    "Evidence for Modules in Brain Networks: Brain Networks in Model Organisms"
  ],
  "alroumi2021": [
    "Author-hosted in-press PDF, Discussion opening paragraphs: serial-order working-memory models and LoT complexity as memory load"
  ],
  "baddeley2003": [
    "References 124-128, page 839"
  ],
  "ledoux2012": [
    "Survival Circuits and Human Feelings: What Is An Emotional State? (cognitive-workspace proposal for conscious feelings)"
  ],
  "wager2015-placebo-context": [
    "Clinical and laboratory placebo effects: Immune responses"
  ],
  "ernst2002": [
    "Reference list, p. 433: references 8-15 cited for maximum-likelihood estimation"
  ],
  "longden2017": [
    "Discussion: The capillary sensory web in context (pericyte and PGE2 proposals, refs 43-45)"
  ],
  "jin2024": [
    "Discussion, opening paragraphs: brain modulation of body biology and the proposed inflammatory rheostat"
  ],
  "aplin2015-bird-traditions": [
    "Abstract and opening main-text paragraph: human cultural norms, social transmission and tradition framing",
    "Concluding summary paragraph before Materials and Methods: arbitrary traditions, informational conformity and cultural norms"
  ],
  "singer2004": [
    "Reference list entries 34-37 (Europe PMC reference metadata for PMID 14976305)"
  ]
};
