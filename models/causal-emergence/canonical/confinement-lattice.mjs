import assert from "node:assert/strict";

export const CONFINEMENT_LATTICE_CHECKS = new Map();
export const CONFINEMENT_LATTICE_ANALYTICAL_SOURCES = new Map();
export const CONFINEMENT_LATTICE_ADMISSION = {
  "definitions": [],
  "formalDependencies": [],
  "contexts": [],
  "observations": [],
  "dependencies": [],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "wilson1974",
      "kind": "research-publication",
      "title": "Confinement of quarks",
      "authors": [
        "Kenneth G. Wilson"
      ],
      "year": 1974,
      "doi": "10.1103/PhysRevD.10.2445",
      "url": "https://doi.org/10.1103/PhysRevD.10.2445",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Sections I-III, pages 2445-2453: Euclidean cutoff, compact link variables, gauge invariance and fermion-loop assumptions",
          "Section IV, pages 2453-2455: strong-coupling expansion, minimal plaquette surfaces and higher-order limitations; Equations 4.1-4.6",
          "Sections V-VI, pages 2455-2459: weak-coupling and continuum-limit obligations; correlation length versus lattice spacing"
        ],
        "limit": "Published pages 2445-2459 read; adjacent articles excluded. The finite-cutoff warning, non-Abelian extension, minimal-surface cancellation and correlation-length requirement were visually checked. The detailed strong-coupling illustration is compact Abelian; the non-Abelian extension is not a full physical SU(3) calculation. Higher-order convergence, weak-coupling completion, mean-field phase arguments and physical continuum confinement are not certified. No independent path-integral reproduction."
      }
    },
    {
      "id": "creutz1980",
      "kind": "research-publication",
      "title": "Monte Carlo study of quantized SU(2) gauge theory",
      "authors": [
        "Michael Creutz"
      ],
      "year": 1980,
      "doi": "10.1103/PhysRevD.21.2308",
      "url": "https://doi.org/10.1103/PhysRevD.21.2308",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-article",
        "locators": [
          "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
          "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "Section V, page 2314: conditional scaling interpretation, approximate normalization and its uncertainty; Equations 5.1-5.4"
        ],
        "limit": "Published pages 2308-2315 read, including references. Equations 2.1-2.7, 3.12-3.24, 4.1-4.4 and 5.1-5.4, all six figures and fit restrictions visually checked. This is a finite-lattice computational study without dynamical quarks, not an experiment or a complete continuum extrapolation. Figure error bars use fluctuations over five iterations. Reference 1 interchanges the 1973 Gross-Wilczek and Politzer starting pages; canonical identities use the original publications. Configurations, random streams, fitted loop values and covariance have not been independently reproduced."
      }
    },
    {
      "id": "bali2005",
      "kind": "research-publication",
      "title": "Observation of String Breaking in QCD",
      "authors": [
        "Gunnar S. Bali",
        "Hartmut Neff",
        "Thomas Duessel",
        "Thomas Lippert",
        "Klaus Schilling",
        "SESAM Collaboration"
      ],
      "year": 2005,
      "doi": "10.1103/PhysRevD.71.114513",
      "url": "https://arxiv.org/abs/hep-lat/0505012v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-report",
        "locators": [
          "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
          "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96",
          "Author report hep-lat/0505012v2, Sections VI-VII, pages 23-25: physical-mass speculation, finite-range parametrization, quarkonium interpretation and summary convention"
        ],
        "limit": "Complete 27-page author v2 read, including references; pages 6, 16-18, 20-21 and 24-25 visually checked. Table I uses the reviewed v2 uncertainty values; the regenerated PDF header date is not the publication year. The Section VII component convention conflicts with Equation 77, and the stated equal-mixing identity is not exact in Equation 85 for fitted c unequal to one. These restrictions remain explicit. No configuration, correlator, covariance or spectral-fit replay."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-lattice-gauge-formulation",
      "kind": "review-finding",
      "statement": "A lattice gauge theory assigns compact-group variables U_ij to oriented neighboring links, with U_ji=U_ij inverse. Gauge-invariant plaquette actions and invariant group integration define a regulated Euclidean path integral.",
      "scope": "Wilson's compact-group construction and the pure SU(2) Wilson action used by Creutz.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson1974",
          "locator": "Sections I-III, pages 2445-2453: Euclidean cutoff, compact link variables, gauge invariance and fermion-loop assumptions",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        },
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Lattice spacing is an ultraviolet regulator, not measured physical granularity, a minimum carrier distance or a generative stage.",
        "Specify the gauge group, link and source representations, action, boundary conditions and dynamical matter. Pure SU(2) is not physical SU(3) QCD.",
        "Euclidean coordinates and Monte Carlo update order are distinct; sampling iterations do not describe real-time physical evolution."
      ]
    },
    {
      "id": "D-phys-wilson-loop",
      "kind": "review-finding",
      "statement": "For a closed lattice contour C, W(C)=<one half Tr(product of U along C)> in the SU(2) fundamental representation, with path ordering and orientation retained. The expectation is taken in a specified lattice ensemble.",
      "scope": "Creutz Equation 3.18 and the associated finite-lattice ensemble.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The SU(2) observable uses one half of the trace of the ordered product in the fundamental representation; reversing a link uses its inverse.",
        "An ensemble expectation is not a single geometric loop, a material closure or a witnessed persistent object.",
        "A finite-loop value alone establishes neither an asymptotic area law nor continuum confinement."
      ]
    },
    {
      "id": "D-phys-static-string-tension",
      "kind": "review-finding",
      "statement": "For unscreened fundamental sources, an asymptotically linear potential has string-tension coefficient K. Its large-contour criterion is ln W(C)=-K A(C)+O(perimeter), with A=a^2 times the minimal plaquette count.",
      "scope": "Conditional relation between large Wilson contours and static-source energy in the specified pure-gauge theory; Creutz Equations 3.20-3.21.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The stated criterion concerns large contours and static fundamental sources in the unscreened pure-gauge theory. Dynamical matter and screening require separate review.",
        "K is a coefficient with units of energy per length; a^2 K is dimensionless in the paper's units. It is not a graph edge weight or constituent count.",
        "Perimeter effects and finite loops can obscure the area contribution. A square-loop fit requires its own model and range restrictions.",
        "This conditional criterion does not establish hadronization, stable hadrons, nuclear or atomic stability, or a downward causal law."
      ]
    },
    {
      "id": "D-phys-lattice-continuum-limit",
      "kind": "review-finding",
      "statement": "To approach a quantum continuum description, reduce lattice spacing while adjusting bare parameters to hold specified physical quantities fixed. Creutz chooses fixed string tension; Wilson requires correlation lengths much larger than a.",
      "scope": "Renormalization prescription and domain requirement, with no completed continuum extrapolation asserted.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "wilson1974",
          "locator": "Sections V-VI, pages 2455-2459: weak-coupling and continuum-limit obligations; correlation length versus lattice spacing",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        },
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Classical action matching is different from a quantum continuum limit; the latter requires tuning bare parameters while holding declared physical quantities fixed.",
        "The continuum regime requires physical correlation lengths large compared with lattice spacing. A strong-coupling result at fixed cutoff does not by itself establish this regime.",
        "A finite-volume simulation and agreement with a scaling prediction do not supply an infinite-volume limit, a rigorous continuum construction or a universal emergence law."
      ]
    },
    {
      "id": "D-phys-lattice-strong-coupling",
      "kind": "review-finding",
      "statement": "In the SU(2) Wilson action convention beta=4/e0^2, the leading strong-coupling term for a simple planar fundamental contour tiled by N plaquettes is W(C) approximately (beta/4)^N. The corresponding leading area coefficient is a^2 K approximately -ln(beta/4).",
      "scope": "Creutz Equations 3.23-3.24 and Wilson's surface-cancellation construction; a finite-cutoff expansion around beta=0.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        },
        {
          "sourceId": "wilson1974",
          "locator": "Section IV, pages 2453-2455: strong-coupling expansion, minimal plaquette surfaces and higher-order limitations; Equations 4.1-4.6",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The leading SU(2) expression uses beta=4/e0^2 and beta approaching zero; Wilson's detailed Abelian expansion has its own normalization.",
        "Minimal area means the fewest plaquettes filling a specified contour in this expansion. It is not minimum constituent count or a universal law selecting stable complexity.",
        "Higher-order corrections and convergence are separate obligations. This leading term is not an all-orders or physical continuum confinement proof.",
        "Bare lattice beta is not a thermodynamic temperature of a measured QCD sample or the renormalized alpha_s extracted by CMS."
      ]
    },
    {
      "id": "M-phys-creutz1980-context",
      "kind": "method",
      "statement": "Pure SU(2) Wilson gauge fields without dynamical quarks on four-dimensional periodic Euclidean hypercubic lattices. Local heat-bath updates sample Z=integral dU exp(-beta S), S=sum[1-one half Tr U_plaquette], beta=4/e0^2. Runs compare random and ordered starts and lattice sizes up to 10^4 sites.",
      "scope": "The declared lattice action, sampling algorithm and loop readout.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
          "role": "method",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        },
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "method",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The paper studies a statistical lattice ensemble, not detector events or the real-time formation of a flux tube.",
        "At beta=3, the size comparison tests square loops through side six; side five is the largest used in the subsequent analysis. The main beta=2.1-3 data use a 10^4 lattice; other beta values use 8^4.",
        "Figure 3 error bars are standard deviations of fluctuations over five iterations after equilibration, not a documented autocorrelation-corrected uncertainty of independent samples.",
        "Hot/cold convergence and finite-size comparisons are diagnostics within the reported runs; no deposited configuration stream or independent Monte Carlo replay is admitted."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "C-phys-creutz-wilson-loops",
      "kind": "review-finding",
      "statement": "The study reports square Wilson-loop expectations across bare couplings and lattice sizes. At beta=3, loops through side five appear stable against the tested size increase to 10^4 sites; larger loops show stronger finite-size effects.",
      "scope": "Reported computational result in the Creutz pure SU(2) ensemble; no independent replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The paper studies a statistical lattice ensemble, not detector events or the real-time formation of a flux tube.",
        "At beta=3, the size comparison tests square loops through side six; side five is the largest used in the subsequent analysis. The main beta=2.1-3 data use a 10^4 lattice; other beta values use 8^4.",
        "Figure 3 error bars are standard deviations of fluctuations over five iterations after equilibration, not a documented autocorrelation-corrected uncertainty of independent samples.",
        "Hot/cold convergence and finite-size comparisons are diagnostics within the reported runs; no deposited configuration stream or independent Monte Carlo replay is admitted."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "C-phys-creutz-string-fit",
      "kind": "review-finding",
      "statement": "A constant-plus-perimeter-plus-area fit to finite square loops yields a dimensionless coefficient interpreted as a^2 K. Strong-coupling points require reduced fit assumptions, and above beta=2.5 the area contribution is not accurately resolved.",
      "scope": "Reported computational result in the Creutz pure SU(2) ensemble; no independent replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Fit square-loop expectations with W(S)=exp[-(A+B S+C S^2)] by minimizing mean squared deviations of loop values; identify C=a^2 K only within this fit model.",
        "Below beta=2.1 only sides one and two are significant and the fit includes side zero; below beta=1.6 only side one is significant and area dominance is assumed.",
        "The paper displays fit variants at beta=1.6-1.8 and 2.2/2.25. Above beta=2.5 the area term is too small relative to the perimeter term for an accurate tension determination.",
        "Finite volume, available loop sizes, sampling and fit assumptions limit the inference. The fit is not a direct detector measurement or an independently reproduced asymptotic potential."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "C-phys-creutz-scaling",
      "kind": "review-finding",
      "statement": "The fitted area coefficients show a crossover near beta=2 and a decrease compatible with the leading SU(2) asymptotic-freedom slope under fixed-string-tension renormalization. This is evidence within the finite pure-gauge model.",
      "scope": "Reported computational result in the Creutz pure SU(2) ensemble; no independent replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section V, page 2314: conditional scaling interpretation, approximate normalization and its uncertainty; Equations 5.1-5.4",
          "role": "supports",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the fitted a^2 K in a renormalization prescription that holds K fixed; compare with the leading SU(2) form proportional to exp(-6 pi^2 beta/11).",
        "Figure 6 uses an arbitrarily chosen normalization for the weak-coupling comparison. Equation 5.4 estimates Lambda approximately sqrt(K)/200 with uncertainty of roughly a factor of two in that coefficient.",
        "The renormalization prescription is based on confinement and the loop fits have restricted resolving power; the comparison is conditional support, not an independent proof of continuum confinement.",
        "The model contains no dynamical quarks. Its lattice bare coupling and scale normalization cannot be identified with CMS alpha_s, physical QCD string tension or a universal confinement threshold.",
        "The crossover does not identify instantons or any other unique microscopic confinement mechanism; no real-time hadronization or stable-complexity rule is measured."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "M-phys-creutz-string-fit",
      "kind": "method",
      "statement": "Infer an area coefficient from the finite square-loop fit, retaining perimeter terms, selected loop sizes and the beta-dependent reductions of the fit.",
      "scope": "Conditional interpretation of the declared computational output.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
          "role": "method",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Fit square-loop expectations with W(S)=exp[-(A+B S+C S^2)] by minimizing mean squared deviations of loop values; identify C=a^2 K only within this fit model.",
        "Below beta=2.1 only sides one and two are significant and the fit includes side zero; below beta=1.6 only side one is significant and area dominance is assumed.",
        "The paper displays fit variants at beta=1.6-1.8 and 2.2/2.25. Above beta=2.5 the area term is too small relative to the perimeter term for an accurate tension determination.",
        "Finite volume, available loop sizes, sampling and fit assumptions limit the inference. The fit is not a direct detector measurement or an independently reproduced asymptotic potential."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "M-phys-creutz-scaling",
      "kind": "method",
      "statement": "Compare the inferred dimensionless tension with the leading perturbative scale dependence under fixed K, retaining normalization, finite-lattice and fit limitations.",
      "scope": "Conditional interpretation of the declared computational output.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section V, page 2314: conditional scaling interpretation, approximate normalization and its uncertainty; Equations 5.1-5.4",
          "role": "method",
          "note": "Support is restricted to this reviewed model, observable and calculation domain."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use the fitted a^2 K in a renormalization prescription that holds K fixed; compare with the leading SU(2) form proportional to exp(-6 pi^2 beta/11).",
        "Figure 6 uses an arbitrarily chosen normalization for the weak-coupling comparison. Equation 5.4 estimates Lambda approximately sqrt(K)/200 with uncertainty of roughly a factor of two in that coefficient.",
        "The renormalization prescription is based on confinement and the loop fits have restricted resolving power; the comparison is conditional support, not an independent proof of continuum confinement.",
        "The model contains no dynamical quarks. Its lattice bare coupling and scale normalization cannot be identified with CMS alpha_s, physical QCD string tension or a universal confinement threshold.",
        "The crossover does not identify instantons or any other unique microscopic confinement mechanism; no real-time hadronization or stable-complexity rule is measured."
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "D-phys-static-light-string-basis",
      "kind": "review-finding",
      "statement": "An I=0 correlation matrix combines a static quark-antiquark string operator Q and a static-light meson-antimeson operator B. Its off-diagonal entries permit mixing in the specified theory with dynamical quarks.",
      "scope": "Bali operator construction and flavor-singlet sector.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Q denotes a string operator for external static quark and antiquark sources; B denotes a pair of static-light mesons. B is not a finite-mass detector B-meson sample.",
        "The reviewed model is SU(3) with two mass-degenerate Wilson sea quarks and the I=0 sector. Its SU(3) trace convention is not the one-half-normalized SU(2) observable of Creutz.",
        "Operator channels and Fock-sector truncations specify an analysis basis, not a universal constituent minimum or a measured formation sequence."
      ]
    },
    {
      "id": "D-phys-two-state-string-mixing",
      "kind": "review-finding",
      "statement": "Within the two-state approximation, orthonormal string and two-meson basis states mix into energy states |1>=cos(theta)|Q>+sin(theta)|B> and |2>=-sin(theta)|Q>+cos(theta)|B>. A nonzero off-diagonal coupling can produce an avoided energy crossing.",
      "scope": "Bali Equations 66-78 and 94-95; a basis-dependent effective description.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "limits",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections VI-VII, pages 23-25: physical-mass speculation, finite-range parametrization, quarkonium interpretation and summary convention",
          "role": "limits",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Use Equation 77: |1>=cos(theta)|Q>+sin(theta)|B>, and Equation 78: |2>=-sin(theta)|Q>+cos(theta)|B>. The Section VII summary interchanges sine and cosine and is not the adopted convention.",
        "The two-state truncation omits higher excitations. Mixing angles depend on the selected basis; fitted source overlaps are not probabilities of an exhaustive Fock decomposition.",
        "The gap minimum defines r_c. Equation 85 gives theta(r_s)=pi/2-c*pi/4, so the text's exact theta(r_s)=pi/4 identity does not hold for fitted c=0.914. No exact identification of r_s, r_c and equal mixing is admitted.",
        "The Euclidean transfer description concerns energy levels. A real-time decay, irreversible hadronization or downward change to quark dynamics requires additional dynamics and evidence."
      ]
    },
    {
      "id": "M-phys-bali2005-context",
      "kind": "method",
      "statement": "Four-dimensional Euclidean SU(3) lattice gauge theory with two mass-degenerate Wilson sea quarks, external static sources and the I=0 string/two-meson sector. The 24^3 x 40 ensemble uses beta=5.6, kappa=0.1575 and r0/a=6.009(53); choosing r0=0.5 fm gives a approximately 0.083 fm. The sea-quark mass is slightly below the physical strange-quark mass.",
      "scope": "Declared preparation, sampling and readout.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
        "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
        "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
        "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "C-phys-bali-correlator-matrix",
      "kind": "review-finding",
      "statement": "The study estimates the string, two-meson and cross-channel Euclidean correlators in the shared two-flavor ensemble. The nonzero mixing channel and operator overlaps support a joint spectral analysis.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "supports",
          "note": "The reviewed methods and result passage supplies the correlated readout and fitting context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
        "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
        "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
        "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph.",
        "The correlation matrix retains Q-Q, Q-B and B-B entries, with disconnected and connected two-meson terms and their flavor factors. The I=1 disconnected comparison is a sector of the same dynamical ensemble, not a separate quenched simulation."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "C-phys-bali-wilson-loop-null",
      "kind": "review-finding",
      "statement": "At separations beyond the fitted string-breaking region, the Wilson-loop-only data at t<=9a show no visible departure toward the lower two-meson threshold. The full operator matrix is needed to resolve the reported spectrum.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The Wilson-loop-only readout at r greater than r_c and measured Euclidean times t<=9a shows no visible string-breaking signal. This is a sensitivity limitation of that operator and time window.",
        "The null readout does not negate mixing inferred from the full correlation matrix or demonstrate the existence of isolated free quarks.",
        "The energy-spectrum and mixing fits share this ensemble; no independent replication or intervention switching off sea quarks is supplied."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "C-phys-bali-avoided-crossing",
      "kind": "review-finding",
      "statement": "The two-state fit gives an avoided crossing, with the lower energy approaching the two-static-light-meson threshold over the measured range. A quadratic gap fit reports r_c/a=15.00(8) and a*DeltaE_c=0.0217(9); physical-unit conversion and uncertainties retain their declared scale and ensemble.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
        "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
        "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
        "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
        "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
        "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "C-phys-bali-mixing-coupling",
      "kind": "review-finding",
      "statement": "The fitted energy gap and mixing angle determine g=DeltaE*sin(2*theta)/2 in the chosen two-state basis. This energy-dimension coupling describes mixing and Euclidean relaxation; real-time evolution of the closed two-state model is oscillatory.",
      "scope": "Reported result in the named study; no independent acquisition or fit replay.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96",
          "role": "supports",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
        "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
        "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
        "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "M-phys-bali-avoided-crossing",
      "kind": "method",
      "statement": "Joint string/two-meson correlator fits and the separation-dependent level gap; operator-only comparisons share the same ensemble.",
      "scope": "Conditional interpretation of the declared computational or experimental output.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "method",
          "note": "The reviewed methods and result passage supplies the correlated readout and fitting context."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
        "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
        "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
        "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
        "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
        "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold."
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "M-phys-bali-mixing-coupling",
      "kind": "method",
      "statement": "The coupling is converted from the same fit; the additional ratio reuses its gap and correlators. No real-time experiment is supplied.",
      "scope": "Conditional interpretation of the declared computational or experimental output.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96",
          "role": "method",
          "note": "Support is restricted to the declared theoretical model, computational ensemble or measured preparation."
        }
      ],
      "checkIds": [],
      "limitations": [
        "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
        "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
        "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
        "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims."
      ],
      "contextIds": [
        "bali2005"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:lattice-gauge-formulation",
      "name": "Euclidean lattice gauge formulation",
      "kind": "definition",
      "description": "A lattice gauge theory assigns compact-group variables U_ij to oriented neighboring links, with U_ji=U_ij inverse. Gauge-invariant plaquette actions and invariant group integration define a regulated Euclidean path integral.",
      "claimIds": [
        "D-phys-lattice-gauge-formulation"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "wilson1974",
          "locator": "Sections I-III, pages 2445-2453: Euclidean cutoff, compact link variables, gauge invariance and fermion-loop assumptions"
        },
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:wilson-loop",
      "name": "Fundamental SU(2) Wilson-loop expectation",
      "kind": "definition",
      "description": "For a closed lattice contour C, W(C)=<one half Tr(product of U along C)> in the SU(2) fundamental representation, with path ordering and orientation retained. The expectation is taken in a specified lattice ensemble.",
      "claimIds": [
        "D-phys-wilson-loop"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:static-string-tension",
      "name": "Static-source area-law criterion",
      "kind": "definition",
      "description": "For unscreened fundamental sources, an asymptotically linear potential has string-tension coefficient K. Its large-contour criterion is ln W(C)=-K A(C)+O(perimeter), with A=a^2 times the minimal plaquette count.",
      "claimIds": [
        "D-phys-static-string-tension"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:lattice-continuum-limit",
      "name": "Quantum lattice continuum-limit prescription",
      "kind": "definition",
      "description": "To approach a quantum continuum description, reduce lattice spacing while adjusting bare parameters to hold specified physical quantities fixed. Creutz chooses fixed string tension; Wilson requires correlation lengths much larger than a.",
      "claimIds": [
        "D-phys-lattice-continuum-limit"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "wilson1974",
          "locator": "Sections V-VI, pages 2455-2459: weak-coupling and continuum-limit obligations; correlation length versus lattice spacing"
        },
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:lattice-strong-coupling",
      "name": "Leading strong-coupling surface expansion",
      "kind": "definition",
      "description": "In the SU(2) Wilson action convention beta=4/e0^2, the leading strong-coupling term for a simple planar fundamental contour tiled by N plaquettes is W(C) approximately (beta/4)^N. The corresponding leading area coefficient is a^2 K approximately -ln(beta/4).",
      "claimIds": [
        "D-phys-lattice-strong-coupling"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24"
        },
        {
          "sourceId": "wilson1974",
          "locator": "Section IV, pages 2453-2455: strong-coupling expansion, minimal plaquette surfaces and higher-order limitations; Equations 4.1-4.6"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:creutz1980-context",
      "name": "Creutz pure SU(2) computational context",
      "kind": "context",
      "description": "Pure SU(2) Wilson gauge fields without dynamical quarks on four-dimensional periodic Euclidean hypercubic lattices. Local heat-bath updates sample Z=integral dU exp(-beta S), S=sum[1-one half Tr U_plaquette], beta=4/e0^2. Runs compare random and ordered starts and lattice sizes up to 10^4 sites.",
      "claimIds": [
        "M-phys-creutz1980-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21"
        },
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:creutz-wilson-loops",
      "name": "Creutz simulated square-loop expectations",
      "kind": "scoped-process",
      "description": "The study reports square Wilson-loop expectations across bare couplings and lattice sizes. At beta=3, loops through side five appear stable against the tested size increase to 10^4 sites; larger loops show stronger finite-size effects.",
      "claimIds": [
        "C-phys-creutz-wilson-loops"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:creutz-string-fit",
      "name": "Creutz conditional string-tension fit",
      "kind": "scoped-process",
      "description": "A constant-plus-perimeter-plus-area fit to finite square loops yields a dimensionless coefficient interpreted as a^2 K. Strong-coupling points require reduced fit assumptions, and above beta=2.5 the area contribution is not accurately resolved.",
      "claimIds": [
        "C-phys-creutz-string-fit"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:creutz-scaling",
      "name": "Creutz conditional lattice scaling comparison",
      "kind": "scoped-process",
      "description": "The fitted area coefficients show a crossover near beta=2 and a decrease compatible with the leading SU(2) asymptotic-freedom slope under fixed-string-tension renormalization. This is evidence within the finite pure-gauge model.",
      "claimIds": [
        "C-phys-creutz-scaling"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "creutz1980",
          "locator": "Section V, page 2314: conditional scaling interpretation, approximate normalization and its uncertainty; Equations 5.1-5.4"
        }
      ],
      "openObligations": [
        "Extend this record only with reviewed evidence for the specified theory, regulator, matter content and inference. No physical carrier or universal occurrence minimum is admitted."
      ]
    },
    {
      "id": "phys:static-light-string-basis",
      "name": "Static string and two-meson operator basis",
      "kind": "definition",
      "description": "An I=0 correlation matrix combines a static quark-antiquark string operator Q and a static-light meson-antimeson operator B. Its off-diagonal entries permit mixing in the specified theory with dynamical quarks.",
      "claimIds": [
        "D-phys-static-light-string-basis"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:two-state-string-mixing",
      "name": "Two-state static-string mixing model",
      "kind": "definition",
      "description": "Within the two-state approximation, orthonormal string and two-meson basis states mix into energy states |1>=cos(theta)|Q>+sin(theta)|B> and |2>=-sin(theta)|Q>+cos(theta)|B>. A nonzero off-diagonal coupling can produce an avoided energy crossing.",
      "claimIds": [
        "D-phys-two-state-string-mixing"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections VI-VII, pages 23-25: physical-mass speculation, finite-range parametrization, quarkonium interpretation and summary convention"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:bali2005-context",
      "name": "Bali two-flavor static-source computational context",
      "kind": "context",
      "description": "Four-dimensional Euclidean SU(3) lattice gauge theory with two mass-degenerate Wilson sea quarks, external static sources and the I=0 string/two-meson sector. The 24^3 x 40 ensemble uses beta=5.6, kappa=0.1575 and r0/a=6.009(53); choosing r0=0.5 fm gives a approximately 0.083 fm. The sea-quark mass is slightly below the physical strange-quark mass.",
      "claimIds": [
        "M-phys-bali2005-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:bali-correlator-matrix",
      "name": "Bali static string/two-meson correlators",
      "kind": "scoped-process",
      "description": "The study estimates the string, two-meson and cross-channel Euclidean correlators in the shared two-flavor ensemble. The nonzero mixing channel and operator overlaps support a joint spectral analysis.",
      "claimIds": [
        "C-phys-bali-correlator-matrix"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:bali-wilson-loop-null",
      "name": "Bali Wilson-loop-only string-breaking null",
      "kind": "scoped-process",
      "description": "At separations beyond the fitted string-breaking region, the Wilson-loop-only data at t<=9a show no visible departure toward the lower two-meson threshold. The full operator matrix is needed to resolve the reported spectrum.",
      "claimIds": [
        "C-phys-bali-wilson-loop-null"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:bali-avoided-crossing",
      "name": "Bali conditional static-energy avoided crossing",
      "kind": "scoped-process",
      "description": "The two-state fit gives an avoided crossing, with the lower energy approaching the two-static-light-meson threshold over the measured range. A quadratic gap fit reports r_c/a=15.00(8) and a*DeltaE_c=0.0217(9); physical-unit conversion and uncertainties retain their declared scale and ensemble.",
      "claimIds": [
        "C-phys-bali-avoided-crossing"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    },
    {
      "id": "phys:bali-mixing-coupling",
      "name": "Bali conditional Euclidean mixing coupling",
      "kind": "scoped-process",
      "description": "The fitted energy gap and mixing angle determine g=DeltaE*sin(2*theta)/2 in the chosen two-state basis. This energy-dimension coupling describes mixing and Euclidean relaxation; real-time evolution of the closed two-state model is oscillatory.",
      "claimIds": [
        "C-phys-bali-mixing-coupling"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96"
        }
      ],
      "openObligations": [
        "Extend only with reviewed evidence matching the stated model, preparation, observable and inference. No universal carrier count, generative ordering or downward causal constraint follows from this record."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:framework-lattice",
      "source": "phys:quantum-field-framework",
      "target": "phys:lattice-gauge-formulation",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target definition uses this mathematical framework or observable within its stated assumptions.",
      "claimIds": [
        "D-phys-lattice-gauge-formulation"
      ]
    },
    {
      "id": "physics:lattice-wilson-loop",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:wilson-loop",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target definition uses this mathematical framework or observable within its stated assumptions.",
      "claimIds": [
        "D-phys-wilson-loop"
      ]
    },
    {
      "id": "physics:wilson-loop-string-tension",
      "source": "phys:wilson-loop",
      "target": "phys:static-string-tension",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target definition uses this mathematical framework or observable within its stated assumptions.",
      "claimIds": [
        "D-phys-static-string-tension"
      ]
    },
    {
      "id": "physics:lattice-continuum",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:lattice-continuum-limit",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target definition uses this mathematical framework or observable within its stated assumptions.",
      "claimIds": [
        "D-phys-lattice-continuum-limit"
      ]
    },
    {
      "id": "physics:lattice-strong-expansion",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:lattice-strong-coupling",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target definition uses this mathematical framework or observable within its stated assumptions.",
      "claimIds": [
        "D-phys-lattice-strong-coupling"
      ]
    },
    {
      "id": "physics:creutz-computation",
      "source": "phys:creutz1980-context",
      "target": "phys:creutz-wilson-loops",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz1980-context"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:wilson-loop-creutz",
      "source": "phys:wilson-loop",
      "target": "phys:creutz-wilson-loops",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz1980-context"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:creutz-loop-fit",
      "source": "phys:creutz-wilson-loops",
      "target": "phys:creutz-string-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz-string-fit"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:static-tension-creutz",
      "source": "phys:static-string-tension",
      "target": "phys:creutz-string-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz-string-fit"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:creutz-fit-scaling",
      "source": "phys:creutz-string-fit",
      "target": "phys:creutz-scaling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz-scaling"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:continuum-creutz",
      "source": "phys:lattice-continuum-limit",
      "target": "phys:creutz-scaling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz-scaling"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:asymptotic-freedom-creutz",
      "source": "phys:asymptotic-freedom",
      "target": "phys:creutz-scaling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This computational readout or interpretation depends on the declared ensemble, observable or inference prescription.",
      "claimIds": [
        "M-phys-creutz-scaling"
      ],
      "contextIds": [
        "creutz1980"
      ]
    },
    {
      "id": "physics:qcd-static-basis",
      "source": "phys:qcd",
      "target": "phys:static-light-string-basis",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target construction uses this specified theory or operator basis.",
      "claimIds": [
        "D-phys-static-light-string-basis"
      ]
    },
    {
      "id": "physics:lattice-static-basis",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:static-light-string-basis",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target construction uses this specified theory or operator basis.",
      "claimIds": [
        "D-phys-static-light-string-basis"
      ]
    },
    {
      "id": "physics:basis-string-mixing",
      "source": "phys:static-light-string-basis",
      "target": "phys:two-state-string-mixing",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The target construction uses this specified theory or operator basis.",
      "claimIds": [
        "D-phys-two-state-string-mixing"
      ]
    },
    {
      "id": "physics:bali-matrix",
      "source": "phys:bali2005-context",
      "target": "phys:bali-correlator-matrix",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali2005-context"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:basis-bali-matrix",
      "source": "phys:static-light-string-basis",
      "target": "phys:bali-correlator-matrix",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali2005-context"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:bali-loop-readout",
      "source": "phys:bali2005-context",
      "target": "phys:bali-wilson-loop-null",
      "kind": "descriptive",
      "role": "computation-context",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali2005-context"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:bali-matrix-spectrum",
      "source": "phys:bali-correlator-matrix",
      "target": "phys:bali-avoided-crossing",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali-avoided-crossing"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:mixing-bali-spectrum",
      "source": "phys:two-state-string-mixing",
      "target": "phys:bali-avoided-crossing",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali-avoided-crossing"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:bali-spectrum-coupling",
      "source": "phys:bali-avoided-crossing",
      "target": "phys:bali-mixing-coupling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali-mixing-coupling"
      ],
      "contextIds": [
        "bali2005"
      ]
    },
    {
      "id": "physics:mixing-bali-coupling",
      "source": "phys:two-state-string-mixing",
      "target": "phys:bali-mixing-coupling",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported output or inference depends on this declared context, observable or model; no physical generative necessity is asserted.",
      "claimIds": [
        "M-phys-bali-mixing-coupling"
      ],
      "contextIds": [
        "bali2005"
      ]
    }
  ],
  "studies": [
    {
      "id": "creutz1980",
      "sourceId": "creutz1980",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.21.2308",
      "journal": "Physical Review D",
      "volume": "21",
      "issue": "8",
      "pages": "2308-2315",
      "system": "Pure SU(2) Euclidean lattice gauge theory without dynamical quarks",
      "preparation": "Pure SU(2) Wilson gauge fields without dynamical quarks on four-dimensional periodic Euclidean hypercubic lattices. Local heat-bath updates sample Z=integral dU exp(-beta S), S=sum[1-one half Tr U_plaquette], beta=4/e0^2. Runs compare random and ordered starts and lattice sizes up to 10^4 sites.",
      "observable": "Ensemble square-loop expectations and a conditional area coefficient as functions of beta and finite lattice size.",
      "finding": "The fitted area coefficients show a crossover near beta=2 and a decrease compatible with the leading SU(2) asymptotic-freedom slope under fixed-string-tension renormalization. This is evidence within the finite pure-gauge model.",
      "limitations": [
        "The paper studies a statistical lattice ensemble, not detector events or the real-time formation of a flux tube.",
        "At beta=3, the size comparison tests square loops through side six; side five is the largest used in the subsequent analysis. The main beta=2.1-3 data use a 10^4 lattice; other beta values use 8^4.",
        "Figure 3 error bars are standard deviations of fluctuations over five iterations after equilibration, not a documented autocorrelation-corrected uncertainty of independent samples.",
        "Hot/cold convergence and finite-size comparisons are diagnostics within the reported runs; no deposited configuration stream or independent Monte Carlo replay is admitted.",
        "Fit square-loop expectations with W(S)=exp[-(A+B S+C S^2)] by minimizing mean squared deviations of loop values; identify C=a^2 K only within this fit model.",
        "Below beta=2.1 only sides one and two are significant and the fit includes side zero; below beta=1.6 only side one is significant and area dominance is assumed.",
        "The paper displays fit variants at beta=1.6-1.8 and 2.2/2.25. Above beta=2.5 the area term is too small relative to the perimeter term for an accurate tension determination.",
        "Finite volume, available loop sizes, sampling and fit assumptions limit the inference. The fit is not a direct detector measurement or an independently reproduced asymptotic potential.",
        "Use the fitted a^2 K in a renormalization prescription that holds K fixed; compare with the leading SU(2) form proportional to exp(-6 pi^2 beta/11).",
        "Figure 6 uses an arbitrarily chosen normalization for the weak-coupling comparison. Equation 5.4 estimates Lambda approximately sqrt(K)/200 with uncertainty of roughly a factor of two in that coefficient.",
        "The renormalization prescription is based on confinement and the loop fits have restricted resolving power; the comparison is conditional support, not an independent proof of continuum confinement.",
        "The model contains no dynamical quarks. Its lattice bare coupling and scale normalization cannot be identified with CMS alpha_s, physical QCD string tension or a universal confinement threshold.",
        "The crossover does not identify instantons or any other unique microscopic confinement mechanism; no real-time hadronization or stable-complexity rule is measured."
      ],
      "readExtent": "full-primary-article",
      "reviewedLocators": [
        "Sections I-II, pages 2308-2311: pure SU(2), periodic Euclidean lattice and local heat-bath sampling; Equations 2.1-2.21",
        "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
        "Section IV, pages 2312-2314: hot/cold starts, finite-size dependence and square-loop fits; Figures 1-6 and Equations 4.1-4.4",
        "Section V, page 2314: conditional scaling interpretation, approximate normalization and its uncertainty; Equations 5.1-5.4"
      ],
      "metadataCheckedAt": "2026-09-14",
      "metadataUrl": "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.21.2308",
      "correctionCheck": "Publisher identity and listed comment checked. Bachas, Physical Review D 23, 1037-1041 (1981), DOI 10.1103/PhysRevD.23.1037, concerns an approximate instanton cutoff interpretation, not replacement Monte Carlo data or an erratum to the loop fits. The original Reference 1 swaps the Gross-Wilczek and Politzer page numbers; use their original DOI identities. No separately identified erratum found in the consulted publisher record and DOI/title searches; this is not an exhaustive guarantee."
    },
    {
      "id": "bali2005",
      "sourceId": "bali2005",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevD.71.114513",
      "journal": "Physical Review D",
      "volume": "71",
      "issue": "11",
      "pages": "114513",
      "system": "SU(3) static-source spectrum with two degenerate Wilson sea quarks at one lattice spacing and mass",
      "preparation": "Four-dimensional Euclidean SU(3) lattice gauge theory with two mass-degenerate Wilson sea quarks, external static sources and the I=0 string/two-meson sector. The 24^3 x 40 ensemble uses beta=5.6, kappa=0.1575 and r0/a=6.009(53); choosing r0=0.5 fm gives a approximately 0.083 fm. The sea-quark mass is slightly below the physical strange-quark mass.",
      "observable": "Euclidean string/two-meson correlation matrix, fitted static energies and basis mixing.",
      "finding": "The two-state fit gives an avoided crossing, with the lower energy approaching the two-static-light-meson threshold over the measured range. A quadratic gap fit reports r_c/a=15.00(8) and a*DeltaE_c=0.0217(9); physical-unit conversion and uncertainties retain their declared scale and ensemble.",
      "limitations": [
        "One lattice spacing and one sea-quark mass are studied; these are not physical up/down masses or a two-plus-one-flavor ensemble. Finite-volume diagnostics are not an infinite-volume or continuum extrapolation.",
        "Quark-propagator matrix entries use 20 thermalized configurations separated by 125 HMC trajectories. Wilson loops use 184 configurations separated by 25 trajectories and aligned into 20 bins; the two sample counts are correlated, not independent replications.",
        "Smearing, a modified static action, low-mode eigenvectors and residual stochastic estimators improve overlap and noise. Low-mode truncation alone is biased; finite stochastic estimates are not exact propagators.",
        "Monte Carlo sampling and Euclidean separation are not real-time string formation. No underlying configuration stream, correlator covariance or independent numerical fit is available in this graph.",
        "The correlation matrix retains Q-Q, Q-B and B-B entries, with disconnected and connected two-meson terms and their flavor factors. The I=1 disconnected comparison is a sector of the same dynamical ensemble, not a separate quenched simulation.",
        "The Wilson-loop-only readout at r greater than r_c and measured Euclidean times t<=9a shows no visible string-breaking signal. This is a sensitivity limitation of that operator and time window.",
        "The null readout does not negate mixing inferred from the full correlation matrix or demonstrate the existence of isolated free quarks.",
        "The energy-spectrum and mixing fits share this ensemble; no independent replication or intervention switching off sea quarks is supplied.",
        "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
        "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
        "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
        "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
        "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
        "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold.",
        "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
        "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
        "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
        "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims.",
        "Use Equation 77: |1>=cos(theta)|Q>+sin(theta)|B>, and Equation 78: |2>=-sin(theta)|Q>+cos(theta)|B>. The Section VII summary interchanges sine and cosine and is not the adopted convention.",
        "The two-state truncation omits higher excitations. Mixing angles depend on the selected basis; fitted source overlaps are not probabilities of an exhaustive Fock decomposition.",
        "The gap minimum defines r_c. Equation 85 gives theta(r_s)=pi/2-c*pi/4, so the text's exact theta(r_s)=pi/4 identity does not hold for fitted c=0.914. No exact identification of r_s, r_c and equal mixing is admitted.",
        "The Euclidean transfer description concerns energy levels. A real-time decay, irreversible hadronization or downward change to quark dynamics requires additional dynamics and evidence."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "Author report hep-lat/0505012v2, Sections II-III, pages 2-14: SU(3) static-source operators, two-flavor ensemble, sampling and noise reduction; Equations 13-26 and 53-65",
        "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
        "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
        "Author report hep-lat/0505012v2, Section V C, pages 20-22: Euclidean mixing coupling, Minkowski oscillations and shared-data ratio check; Figures 18-19 and Equations 94-96",
        "Author report hep-lat/0505012v2, Sections VI-VII, pages 23-25: physical-mass speculation, finite-range parametrization, quarkonium interpretation and summary convention"
      ],
      "metadataCheckedAt": "2026-09-14",
      "metadataUrl": "https://arxiv.org/abs/hep-lat/0505012v2",
      "correctionCheck": "Author v2 and publisher identity checked; journal publication is 28 June 2005. The reviewed v2 includes corrected Table I uncertainties. Section VII reverses the Equation 77 basis coefficients, and Equation 85 does not give the stated exact equal-mixing identity at fitted c unequal to one. No separately identified erratum found in consulted publisher/DOI/title records; the search is not exhaustive."
    }
  ],
  "comparisons": [
    {
      "id": "creutz-string-fit",
      "candidate": "An area coefficient conditional on the stated finite-loop fit.",
      "alternative": "A directly measured asymptotic potential or model-free confinement proof.",
      "sourceIds": [
        "creutz1980"
      ],
      "discriminator": "Fit square-loop values with the declared perimeter and area terms; low-beta fit variants and high-beta loss of area sensitivity limit identification.",
      "result": "not-tested",
      "limit": "Parameter inference within a chosen fit does not independently prove its asymptotic interpretation.",
      "assumptions": [
        "Fit square-loop expectations with W(S)=exp[-(A+B S+C S^2)] by minimizing mean squared deviations of loop values; identify C=a^2 K only within this fit model.",
        "Below beta=2.1 only sides one and two are significant and the fit includes side zero; below beta=1.6 only side one is significant and area dominance is assumed.",
        "The paper displays fit variants at beta=1.6-1.8 and 2.2/2.25. Above beta=2.5 the area term is too small relative to the perimeter term for an accurate tension determination.",
        "Finite volume, available loop sizes, sampling and fit assumptions limit the inference. The fit is not a direct detector measurement or an independently reproduced asymptotic potential."
      ],
      "claimIds": [
        "C-phys-creutz-string-fit"
      ]
    },
    {
      "id": "creutz-scaling",
      "candidate": "Coexistence of confinement-based scale setting and the leading SU(2) ultraviolet slope in this computational model.",
      "alternative": "An incompatible cutoff dependence within the same action and renormalization prescription.",
      "sourceIds": [
        "creutz1980"
      ],
      "discriminator": "Compare inferred a^2 K with the strong- and weak-coupling behaviors in Figure 6; no independent alternative-model rejection statistic is supplied.",
      "result": "conditional-support",
      "limit": "Finite-lattice, sampling, fit and normalization assumptions preclude a rigorous continuum or physical QCD claim.",
      "assumptions": [
        "Use the fitted a^2 K in a renormalization prescription that holds K fixed; compare with the leading SU(2) form proportional to exp(-6 pi^2 beta/11).",
        "Figure 6 uses an arbitrarily chosen normalization for the weak-coupling comparison. Equation 5.4 estimates Lambda approximately sqrt(K)/200 with uncertainty of roughly a factor of two in that coefficient.",
        "The renormalization prescription is based on confinement and the loop fits have restricted resolving power; the comparison is conditional support, not an independent proof of continuum confinement.",
        "The model contains no dynamical quarks. Its lattice bare coupling and scale normalization cannot be identified with CMS alpha_s, physical QCD string tension or a universal confinement threshold.",
        "The crossover does not identify instantons or any other unique microscopic confinement mechanism; no real-time hadronization or stable-complexity rule is measured."
      ],
      "claimIds": [
        "C-phys-creutz-scaling"
      ]
    },
    {
      "id": "bali-avoided-crossing",
      "candidate": "The fitted two-state spectrum has an avoided crossing and approaches the two-meson threshold.",
      "alternative": "An indefinitely rising lower static energy in this same dynamical-quark setup.",
      "sourceIds": [
        "bali2005"
      ],
      "discriminator": "Joint string/two-meson correlator fits and the separation-dependent level gap; operator-only comparisons share the same ensemble.",
      "result": "conditional-support",
      "limit": "This supports the finite-ensemble spectral interpretation under the declared fit, not a rigorous continuum or physical-mass confinement proof.",
      "assumptions": [
        "Fit the common 2 x 2 correlation matrix with five parameters theta, a_Q, a_B, E1 and E2, retaining the separation-dependent time windows in Equations 71-75 and the two-state truncation.",
        "Divide matrix correlators by the squared static-light correlator to infer E1-2m_B and E2-2m_B. Static self-energies cancel in these differences; absolute static energies are cutoff-dependent.",
        "The lower fitted energy approaches the two-meson threshold within the sampled separation range. A Cornell fit below the breaking region is not a linearly rising ground-state potential at all distances.",
        "The quadratic gap fit uses 14a<=r_bar<=16a and reports r_c/a=15.00(8), a*DeltaE_c=0.0217(9), r_c/r0=2.496(26), r_c=1.248(13) fm and DeltaE_c=51(3) MeV with r0=0.5 fm. Quoted errors are statistical; scale-setting, sea-mass and continuum uncertainties are not included.",
        "Figure 17's no-mixing comparison uses operator sectors from the same two-flavor ensemble. It is not a separately sampled quenched control or an intervention experiment.",
        "Figure 22's two-plus-one-flavor bands are explicitly speculative. The finite-window parametrization has an incorrect large-distance asymptote; neither supplies a physical-mass calculation or universal string-breaking threshold."
      ],
      "claimIds": [
        "C-phys-bali-avoided-crossing"
      ]
    },
    {
      "id": "bali-mixing-coupling",
      "candidate": "A coupling inferred from the fitted two-state spectrum and basis angle.",
      "alternative": "An independently measured real-time hadronization rate.",
      "sourceIds": [
        "bali2005"
      ],
      "discriminator": "The coupling is converted from the same fit; the additional ratio reuses its gap and correlators. No real-time experiment is supplied.",
      "result": "not-tested",
      "limit": "The inferred Euclidean coupling does not independently test an irreversible decay or downward causal mechanism.",
      "assumptions": [
        "In the declared two-state basis, g(r)=DeltaE(r)*sin(2*theta(r))/2 has units of energy. It is a mixing coupling and Euclidean relaxation quantity, not a measured stochastic real-time decay rate.",
        "Use the Equation 77 basis convention. The summary sine/cosine swap and the Equation 85 equal-mixing mismatch remain unresolved source inconsistencies; an exact theta(r_c)=pi/4 is not assumed.",
        "The Equation 96 consistency ratio reuses correlators and the fitted energy gap. Agreement is not independent replication; small-separation corrections limit its plateau.",
        "Finite-mass quarkonium, irreversible hadronization, stable nuclear or atomic organization and a downward causal rule are not computed. A static spectral description does not establish those claims."
      ],
      "claimIds": [
        "C-phys-bali-mixing-coupling"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:lattice-gauge-formulation",
      "role": "definition",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lattice-gauge-formulation"
      ]
    },
    {
      "nodeId": "phys:wilson-loop",
      "role": "definition",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-wilson-loop"
      ]
    },
    {
      "nodeId": "phys:static-string-tension",
      "role": "definition",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-static-string-tension"
      ]
    },
    {
      "nodeId": "phys:lattice-continuum-limit",
      "role": "definition",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lattice-continuum-limit"
      ]
    },
    {
      "nodeId": "phys:lattice-strong-coupling",
      "role": "definition",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-lattice-strong-coupling"
      ]
    },
    {
      "nodeId": "phys:creutz1980-context",
      "role": "model-context",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-creutz1980-context"
      ]
    },
    {
      "nodeId": "phys:creutz-wilson-loops",
      "role": "scoped-phenomenon",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-creutz-wilson-loops"
      ]
    },
    {
      "nodeId": "phys:creutz-string-fit",
      "role": "scoped-phenomenon",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-creutz-string-fit"
      ]
    },
    {
      "nodeId": "phys:creutz-scaling",
      "role": "scoped-phenomenon",
      "denotes": "A mathematical specification or a reported computational result within the declared lattice model.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-creutz-scaling"
      ]
    },
    {
      "nodeId": "phys:static-light-string-basis",
      "role": "definition",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-static-light-string-basis"
      ]
    },
    {
      "nodeId": "phys:two-state-string-mixing",
      "role": "definition",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-two-state-string-mixing"
      ]
    },
    {
      "nodeId": "phys:bali2005-context",
      "role": "model-context",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-bali2005-context"
      ]
    },
    {
      "nodeId": "phys:bali-correlator-matrix",
      "role": "scoped-phenomenon",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali-correlator-matrix"
      ]
    },
    {
      "nodeId": "phys:bali-wilson-loop-null",
      "role": "scoped-phenomenon",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali-wilson-loop-null"
      ]
    },
    {
      "nodeId": "phys:bali-avoided-crossing",
      "role": "scoped-phenomenon",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali-avoided-crossing"
      ]
    },
    {
      "nodeId": "phys:bali-mixing-coupling",
      "role": "scoped-phenomenon",
      "denotes": "A specified mathematical object, study context or scoped reported result.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-bali-mixing-coupling"
      ]
    }
  ]
};

/** Preserve the reviewed lattice records; additional scoped interpretation links remain possible. */
export function validateConfinementLatticeContracts(context) {
  for (const key of ["sources", "claims", "entities", "relations", "studies", "comparisons"]) {
    for (const expected of contracts[key]) {
      assert.deepEqual(context[key].get(expected.id), expected, `Confinement lattice contract drift: ${key} ${expected.id}`);
    }
  }
  const roles = new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record]));
  for (const expected of contracts.readiness) {
    assert.deepEqual(roles.get(expected.nodeId), expected, `Confinement lattice role drift: ${expected.nodeId}`);
  }
}
