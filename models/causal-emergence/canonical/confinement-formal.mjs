import assert from "node:assert/strict";

export const CONFINEMENT_FORMAL_CHECKS = new Map();
export const CONFINEMENT_FORMAL_ANALYTICAL_SOURCES = new Map();
export const CONFINEMENT_FORMAL_ADMISSION = {
  "definitions": [
    [
      "phys:confinement-criteria",
      "D-phys-confinement-criteria"
    ]
  ],
  "formalDependencies": [
    [
      "physics:qcd-confinement-criteria",
      [
        "phys:qcd",
        "phys:confinement-criteria"
      ]
    ],
    [
      "physics:lattice-gauge-formulation-confinement-criteria",
      [
        "phys:lattice-gauge-formulation",
        "phys:confinement-criteria"
      ]
    ],
    [
      "physics:static-string-tension-confinement-criteria",
      [
        "phys:static-string-tension",
        "phys:confinement-criteria"
      ]
    ],
    [
      "physics:static-light-string-basis-confinement-criteria",
      [
        "phys:static-light-string-basis",
        "phys:confinement-criteria"
      ]
    ],
    [
      "physics:qcd-renormalization-scale-confinement-criteria",
      [
        "phys:qcd-renormalization-scale",
        "phys:confinement-criteria"
      ]
    ],
    [
      "physics:gluon-self-coupling-confinement-criteria",
      [
        "phys:gluon-self-coupling",
        "phys:confinement-criteria"
      ]
    ]
  ],
  "contexts": [],
  "observations": [
    [
      "confinement-evidence-boundary",
      "C-phys-confinement-evidence-boundary",
      [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    ]
  ],
  "dependencies": [
    [
      "confinement-criteria-confinement-evidence-boundary",
      "confinement-criteria",
      "confinement-evidence-boundary",
      "M-phys-confinement-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "durr-hadron-spectrum-confinement-evidence-boundary",
      "durr-hadron-spectrum",
      "confinement-evidence-boundary",
      "M-phys-confinement-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "tasso-gluon-interpretation-confinement-evidence-boundary",
      "tasso-gluon-interpretation",
      "confinement-evidence-boundary",
      "M-phys-confinement-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "sld1999-neutral-yields-confinement-evidence-boundary",
      "sld1999-neutral-yields",
      "confinement-evidence-boundary",
      "M-phys-confinement-evidence-boundary",
      "interpretation-dependency"
    ],
    [
      "sld1999-neutral-totals-confinement-evidence-boundary",
      "sld1999-neutral-totals",
      "confinement-evidence-boundary",
      "M-phys-confinement-evidence-boundary",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [],
  "comparisonIds": [],
  "inferenceSources": [],
  "localStudySources": []
};

const contracts = {
  "sources": [
    {
      "id": "sld1999-neutral-production",
      "kind": "research-publication",
      "title": "Production of pi+, K+, K0, K*0, phi, p and Lambda0 in hadronic Z0 decays",
      "authors": [
        "K. Abe",
        "SLD Collaboration"
      ],
      "year": 1999,
      "doi": "10.1103/PhysRevD.59.052001",
      "url": "https://arxiv.org/pdf/hep-ex/9805029v1",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "selected-author-manuscript-passages",
        "locators": [
          "arXiv:hep-ex/9805029v1 pages 2-4 and 10, Sections 1 and 3: inclusive 1993-1995 acquisition, event selection and model/decay distinctions",
          "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation"
        ],
        "limit": "Selected passages of the 24 May 1998 author v1 were read; Tables 6, 7 and 16 were visually inspected. The arXiv record identifies Physical Review D59, 052001 (1999). The publisher PDF and the complete 62-page analysis were not reviewed. Only the inclusive reconstructed K0/K0bar, Lambda/Lambdabar, K*0/K*0bar and phi results are admitted. Flavor-tagged spectra, leading-particle asymmetries and charged pi/K/p results are outside this block."
      }
    },
    {
      "id": "tasso1979",
      "kind": "research-publication",
      "title": "Evidence for Planar Events in e+e- Annihilation at High Energies",
      "authors": [
        "R. Brandelik",
        "TASSO Collaboration"
      ],
      "year": 1979,
      "doi": "10.1016/0370-2693(79)90830-X",
      "url": "https://www-library.desy.de/preparch/desy/postpr/1979/desy79-053.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-report-and-published-article",
        "locators": [
          "DESY 79/53, PDF page 4: printed pages 2-3, selection and jet definitions",
          "DESY 79/53, PDF pages 5-6: printed pages 4-7, transverse broadening and planarity tests",
          "DESY 79/53, PDF page 7: printed pages 8-9, three-jet interpretation and conclusion",
          "DESY 79/53, PDF pages 9-15: captions and Figures 1-6",
          "Published pages 244-245: PETRA charged-track selection, detector simulation checks, jet axes and transverse broadening",
          "Published pages 246-248, Figures 3-6: charged-momentum tensor, planarity selection and collinear-fragmentation comparisons",
          "Published pages 248-249, Figure 6 and conclusion: three-jet interpretation and deferred quantitative QCD comparison"
        ],
        "limit": "The full 15-page DESY 79/53 author report (https://lib-extopc.kek.jp/preprints/PDF/1979/7909/7909123.pdf) and the open DESY copy of the final published article, pages 243-249, have been read. Report and published locators identify their respective versions. Published pages 246-247 and 249 were visually checked; a line-by-line comparison of the two versions is not supplied. Detector Monte Carlo, event tracks, significance and the deferred quantitative first-order QCD comparison are not independently reproduced."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-confinement-criteria",
      "kind": "review-finding",
      "statement": "Confinement is specified relative to a theory and observable. In an unscreened pure-gauge theory, asymptotic fundamental Wilson-loop area behavior defines a static string-tension criterion. With dynamical quarks, the reviewed Euclidean static-source spectra instead include mixing and screening by color-singlet meson pairs. The QCD interpretation of hadronic final states is a separate phenomenological statement, not an equivalent finite-loop test or a proof that separation energy grows without bound.",
      "scope": "Declared zero-temperature or low-temperature/vacuum static-source and hadronic regimes only; separate the unscreened pure-gauge criterion from dynamical-quark screening and scattering interpretations.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "creutz1980",
          "locator": "Section III, pages 2311-2312: classical matching, fundamental Wilson loops, fixed-tension renormalization and coupling limits; Equations 3.1-3.24",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "wilson1974",
          "locator": "Sections V-VI, pages 2455-2459: weak-coupling and continuum-limit obligations; correlation length versus lattice spacing",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction",
          "role": "supports",
          "note": "The reviewed two-plus-one-flavor calculation explicitly includes a static-strange pair channel; its finite-ensemble limitations remain separate."
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection",
          "role": "limits",
          "note": "The fractional electric-charge search assumes a color-singlet signal; it cannot supply a free-color absence test."
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check",
          "role": "limits",
          "note": "The existing finite bare-deuteron energy check excludes one declared beta-breakup channel only; it is not a general nuclear or atomic stability result."
        }
      ],
      "checkIds": [],
      "limitations": [
        "A criterion must declare the gauge theory, dynamical matter, state or temperature regime, operator, separation/time limits and regulator. Pure-gauge fundamental Wilson-loop area law, screened static-source energies with dynamical quarks and phenomenological color-singlet final states are not interchangeable definitions.",
        "The area-law criterion takes large contours and static-source limits in an unscreened theory. Wilson strong-coupling surfaces and Creutz finite SU(2) loops do not prove continuum SU(3) confinement with physical quark masses. Their finite-volume, finite-loop and extrapolation restrictions remain explicit.",
        "Pair creation in the reviewed dynamical-quark calculations permits color-singlet static-light or static-strange channels. The screened ground-state energy need not grow indefinitely with separation. A metastable string branch, an operator overlap and the true ground state are different quantities; Euclidean mixing energies do not measure real-time hadronization rates.",
        "Source card 1.31 supplies possible nonperturbative formulations, including a chosen lattice action and operator basis; it is not an observed universal organization stage. Source card 1.30 supplies a renormalization prescription and scale, not physical elapsed time or a demonstrated temporal maintenance cause. Source card 1.3 supplies the non-Abelian gluon sector within QCD, not an independently measured universal maintenance arrow.",
        "The original parent weights 0.55, 0.20 and 0.25, N_min=N_crit=1 elementary-particle counts, necessary-parent labels, TypeRole/SOMA phase placement and macro-to-micro causal story are unsupported. They have no active scientific semantics. Classification as a regime-level pattern is descriptive, not a verified universal phase sequence or material carrier.",
        "The excluded universal downward constraint from source card 1.15 remains excluded. No intervention, closed effective dynamics or universal generating rule is established by the static-source results.",
        "Electrical fractional-charge bounds constrain a declared material or particle search. Electric charge is not color charge; a null result cannot establish absence of all free colored objects. In particular, the CMS fractional-charge benchmark explicitly uses color-singlet particles.",
        "Color-singlet tensor algebra is a representation constraint, not a dynamical formation proof. Asymptotic freedom concerns ultraviolet running and does not prove the infrared criterion. The high-temperature phase diagram, physical-point continuum completion and a mathematical all-channel confinement theorem are outside this admission.",
        "No universal nuclear or atomic stability follows from the definition or the selected hadron results. Nuclear binding, decay channels and electromagnetic atomic binding require distinct systems and inputs; the existing deuteron beta threshold excludes one specified bare-nucleus breakup channel, not all decays, nuclei or atomic states."
      ]
    },
    {
      "id": "C-phys-confinement-evidence-boundary",
      "kind": "review-finding",
      "statement": "The calibrated Durr light-hadron spectrum, TASSO charged-track jet interpretation and SLD reconstructed neutral-hadron yields are consistent with their stated QCD/hadronic descriptions. They test selected masses, event shapes and decay-reconstructed production observables under distinct assumptions. Together they delimit the phenomenological use of confinement; they do not form a single all-channel exclusion of free color or a derivation of nuclear and atomic stability.",
      "scope": "Bounded cross-study interpretation of existing Durr, TASSO and flavor-inclusive SLD neutral-hadron records, preserving their separate preparations.",
      "status": "literature-synthesis",
      "citations": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 248-249, Figure 6 and conclusion: three-jet interpretation and deferred quantitative QCD comparison",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 246-248, Figures 3-6: charged-momentum tensor, planarity selection and collinear-fragmentation comparisons",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "supports",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a literature synthesis of already admitted records, not a new acquisition, a combined likelihood, a measured confidence level or an independent replication. The different calculations and experiments retain their own preparations and discriminators; they are not pooled.",
        "The Durr spectrum uses two-plus-one-flavor isospin-symmetric QCD without QED. Pion/kaon masses and a Xi or Omega mass calibrate parameters; the two normalizations reuse configurations. Agreement in selected remaining channels, conditional on finite-volume, chiral and continuum treatment, is not a test of every color channel, a real-time formation history or a lifetime measurement.",
        "TASSO uses selected charged tracks, detector/fragmentation assumptions and a specified collinear two-jet comparison. Planarity and the hard-gluon interpretation do not provide a complete final-state census, a free stable gluon observation or a universal confinement theorem.",
        "SLD neutral-hadron results reconstruct specified decay channels through acceptance, branching and background models. Full-range totals reuse the measured spectra with fragmentation-model extrapolation; their shared normalization and covariance are retained. Reconstructed parents and daughters are not disjoint stable end products or feed-down-subtracted primary populations.",
        "Neither a selected hadron spectrum nor inclusive jet/decay yields uniquely identify a microscopic hadronization mechanism or prove the absence of all colored final states. Fractional electric-charge searches are a distinct inference and are not pooled with these hadronic records.",
        "Hadronic consistency does not establish stable nuclear matter or atomic structures. The admitted nuclear capture, mass and deuteron-threshold records have separate calibration and channel limits. Their bounded results do not supply an all-channel stability proof; atomic electronic binding lies outside the QCD-only spectrum."
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "M-phys-confinement-evidence-boundary",
      "kind": "method",
      "statement": "Interpret each admitted mass, event-shape or neutral-hadron production result within its own calculation, detector and inference contract; compare their scopes without combining data, likelihoods or significance. The confinement definition supplies a domain boundary, not an additional observation.",
      "scope": "Bounded cross-study interpretation of existing Durr, TASSO and flavor-inclusive SLD neutral-hadron records, preserving their separate preparations.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands",
          "role": "method",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 248-249, Figure 6 and conclusion: three-jet interpretation and deferred quantitative QCD comparison",
          "role": "method",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 246-248, Figures 3-6: charged-momentum tensor, planarity selection and collinear-fragmentation comparisons",
          "role": "limits",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra",
          "role": "method",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation",
          "role": "method",
          "note": "Support is limited to the stated model, preparation and inference; this synthesis is not a new experiment."
        }
      ],
      "checkIds": [],
      "limitations": [
        "This is a literature synthesis of already admitted records, not a new acquisition, a combined likelihood, a measured confidence level or an independent replication. The different calculations and experiments retain their own preparations and discriminators; they are not pooled.",
        "The Durr spectrum uses two-plus-one-flavor isospin-symmetric QCD without QED. Pion/kaon masses and a Xi or Omega mass calibrate parameters; the two normalizations reuse configurations. Agreement in selected remaining channels, conditional on finite-volume, chiral and continuum treatment, is not a test of every color channel, a real-time formation history or a lifetime measurement.",
        "TASSO uses selected charged tracks, detector/fragmentation assumptions and a specified collinear two-jet comparison. Planarity and the hard-gluon interpretation do not provide a complete final-state census, a free stable gluon observation or a universal confinement theorem.",
        "SLD neutral-hadron results reconstruct specified decay channels through acceptance, branching and background models. Full-range totals reuse the measured spectra with fragmentation-model extrapolation; their shared normalization and covariance are retained. Reconstructed parents and daughters are not disjoint stable end products or feed-down-subtracted primary populations.",
        "Neither a selected hadron spectrum nor inclusive jet/decay yields uniquely identify a microscopic hadronization mechanism or prove the absence of all colored final states. Fractional electric-charge searches are a distinct inference and are not pooled with these hadronic records.",
        "Hadronic consistency does not establish stable nuclear matter or atomic structures. The admitted nuclear capture, mass and deuteron-threshold records have separate calibration and channel limits. Their bounded results do not supply an all-channel stability proof; atomic electronic binding lies outside the QCD-only spectrum."
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:confinement-criteria",
      "name": "Confinement criteria and their domains",
      "kind": "definition",
      "description": "Confinement is specified relative to a theory and observable. In an unscreened pure-gauge theory, asymptotic fundamental Wilson-loop area behavior defines a static string-tension criterion. With dynamical quarks, the reviewed Euclidean static-source spectra instead include mixing and screening by color-singlet meson pairs. The QCD interpretation of hadronic final states is a separate phenomenological statement, not an equivalent finite-loop test or a proof that separation energy grows without bound.",
      "claimIds": [
        "D-phys-confinement-criteria"
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
          "locator": "Sections V-VI, pages 2455-2459: weak-coupling and continuum-limit obligations; correlation length versus lattice spacing"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Sections IV-V A, pages 14-19: implicit mixing, Wilson-loop null result, spectral fits and basis convention; Figures 10-14, Table I and Equations 66-82"
        },
        {
          "sourceId": "bali2005",
          "locator": "Author report hep-lat/0505012v2, Section V B, pages 19-20: avoided crossing, mixing-angle parametrization and minimum-gap fit; Figures 15-17 and Equations 85-93"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Section 9.1, pages 1-2: QCD Lagrangian, representations and vertices"
        },
        {
          "sourceId": "pdg2025-qcd",
          "locator": "Sections 9.1.1-9.1.2, pages 2-4: running coupling and quark-mass prescriptions"
        },
        {
          "sourceId": "bulava2019-string-breaking",
          "locator": "Published pages 493-495, Sections 1-3, Equations 1-6 and Table 1: static sources, operator basis, N200 ensemble, sampling and spectral extraction"
        },
        {
          "sourceId": "cms2013-fcp",
          "locator": "Author v2 printed pages 1-3, Sections 1-4: signal quantum numbers and lifetime assumption, 2011 acquisition, unit-charge momentum convention and event selection"
        },
        {
          "sourceId": "nuclear-energetics-verifier",
          "locator": "verify(): bare-state Q, exact shared-binding cancellation, rounded neutron comparison, adjusted mass-pair covariance and display-rounding sign check"
        }
      ],
      "openObligations": [
        "A criterion must declare the gauge theory, dynamical matter, state or temperature regime, operator, separation/time limits and regulator. Pure-gauge fundamental Wilson-loop area law, screened static-source energies with dynamical quarks and phenomenological color-singlet final states are not interchangeable definitions.",
        "The area-law criterion takes large contours and static-source limits in an unscreened theory. Wilson strong-coupling surfaces and Creutz finite SU(2) loops do not prove continuum SU(3) confinement with physical quark masses. Their finite-volume, finite-loop and extrapolation restrictions remain explicit.",
        "Pair creation in the reviewed dynamical-quark calculations permits color-singlet static-light or static-strange channels. The screened ground-state energy need not grow indefinitely with separation. A metastable string branch, an operator overlap and the true ground state are different quantities; Euclidean mixing energies do not measure real-time hadronization rates.",
        "Source card 1.31 supplies possible nonperturbative formulations, including a chosen lattice action and operator basis; it is not an observed universal organization stage. Source card 1.30 supplies a renormalization prescription and scale, not physical elapsed time or a demonstrated temporal maintenance cause. Source card 1.3 supplies the non-Abelian gluon sector within QCD, not an independently measured universal maintenance arrow.",
        "The original parent weights 0.55, 0.20 and 0.25, N_min=N_crit=1 elementary-particle counts, necessary-parent labels, TypeRole/SOMA phase placement and macro-to-micro causal story are unsupported. They have no active scientific semantics. Classification as a regime-level pattern is descriptive, not a verified universal phase sequence or material carrier.",
        "The excluded universal downward constraint from source card 1.15 remains excluded. No intervention, closed effective dynamics or universal generating rule is established by the static-source results.",
        "Electrical fractional-charge bounds constrain a declared material or particle search. Electric charge is not color charge; a null result cannot establish absence of all free colored objects. In particular, the CMS fractional-charge benchmark explicitly uses color-singlet particles.",
        "Color-singlet tensor algebra is a representation constraint, not a dynamical formation proof. Asymptotic freedom concerns ultraviolet running and does not prove the infrared criterion. The high-temperature phase diagram, physical-point continuum completion and a mathematical all-channel confinement theorem are outside this admission.",
        "No universal nuclear or atomic stability follows from the definition or the selected hadron results. Nuclear binding, decay channels and electromagnetic atomic binding require distinct systems and inputs; the existing deuteron beta threshold excludes one specified bare-nucleus breakup channel, not all decays, nuclei or atomic states."
      ]
    },
    {
      "id": "phys:confinement-evidence-boundary",
      "name": "Hadronic evidence and confinement limits",
      "kind": "scoped-process",
      "description": "The calibrated Durr light-hadron spectrum, TASSO charged-track jet interpretation and SLD reconstructed neutral-hadron yields are consistent with their stated QCD/hadronic descriptions. They test selected masses, event shapes and decay-reconstructed production observables under distinct assumptions. Together they delimit the phenomenological use of confinement; they do not form a single all-channel exclusion of free color or a derivation of nuclear and atomic stability.",
      "claimIds": [
        "C-phys-confinement-evidence-boundary"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, pages 7-8, Table 1 and Figure 3: input masses, predicted spectrum, isospin averages, uncertainties and resonance-width bands"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 14-16: calibration, pion-mass ranges, chiral/Taylor fits and correlated continuum extrapolations"
        },
        {
          "sourceId": "durr2008",
          "locator": "Author report 0906.3599v1, Supporting Online Material, pages 16-18 and 21, Table S2 and Figure S5: 432 analysis variants, bootstrap, uncertainty fractions and electromagnetic/isospin limits"
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 248-249, Figure 6 and conclusion: three-jet interpretation and deferred quantitative QCD comparison"
        },
        {
          "sourceId": "tasso1979",
          "locator": "Published pages 246-248, Figures 3-6: charged-momentum tensor, planarity selection and collinear-fragmentation comparisons"
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 pages 18-23 and 25-28, Sections 4.2-4.4, Figures 7 and 11, Tables 6-7: decay reconstruction, efficiency/normalization corrections and inclusive spectra"
        },
        {
          "sourceId": "sld1999-neutral-production",
          "locator": "arXiv:hep-ex/9805029v1 page 46, Section 7 and Table 16, all-flavor column for K0, K*0, phi and Lambda: measured-range integrals and model-dependent extrapolation"
        }
      ],
      "openObligations": [
        "This is a literature synthesis of already admitted records, not a new acquisition, a combined likelihood, a measured confidence level or an independent replication. The different calculations and experiments retain their own preparations and discriminators; they are not pooled.",
        "The Durr spectrum uses two-plus-one-flavor isospin-symmetric QCD without QED. Pion/kaon masses and a Xi or Omega mass calibrate parameters; the two normalizations reuse configurations. Agreement in selected remaining channels, conditional on finite-volume, chiral and continuum treatment, is not a test of every color channel, a real-time formation history or a lifetime measurement.",
        "TASSO uses selected charged tracks, detector/fragmentation assumptions and a specified collinear two-jet comparison. Planarity and the hard-gluon interpretation do not provide a complete final-state census, a free stable gluon observation or a universal confinement theorem.",
        "SLD neutral-hadron results reconstruct specified decay channels through acceptance, branching and background models. Full-range totals reuse the measured spectra with fragmentation-model extrapolation; their shared normalization and covariance are retained. Reconstructed parents and daughters are not disjoint stable end products or feed-down-subtracted primary populations.",
        "Neither a selected hadron spectrum nor inclusive jet/decay yields uniquely identify a microscopic hadronization mechanism or prove the absence of all colored final states. Fractional electric-charge searches are a distinct inference and are not pooled with these hadronic records.",
        "Hadronic consistency does not establish stable nuclear matter or atomic structures. The admitted nuclear capture, mass and deuteron-threshold records have separate calibration and channel limits. Their bounded results do not supply an all-channel stability proof; atomic electronic binding lies outside the QCD-only spectrum."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:qcd-confinement-criteria",
      "source": "phys:qcd",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The gauge group and matter content specify which confinement question is being asked.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:lattice-gauge-formulation-confinement-criteria",
      "source": "phys:lattice-gauge-formulation",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A chosen regulator and action define a nonperturbative calculation, not a universally necessary temporal stage.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:static-string-tension-confinement-criteria",
      "source": "phys:static-string-tension",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The asymptotic area-law specification supplies the unscreened static-source criterion.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:static-light-string-basis-confinement-criteria",
      "source": "phys:static-light-string-basis",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "The reviewed variational extraction of screening uses the declared string and meson-pair operator sectors.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:qcd-renormalization-scale-confinement-criteria",
      "source": "phys:qcd-renormalization-scale",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "A renormalization convention defines the coupling scale; it is not elapsed time or a maintenance process.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:gluon-self-coupling-confinement-criteria",
      "source": "phys:gluon-self-coupling",
      "target": "phys:confinement-criteria",
      "kind": "descriptive",
      "role": "definition-dependency",
      "assertion": "Non-Abelian gauge interactions belong to the QCD model specification; they do not certify a universal causal parent weight.",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "id": "physics:confinement-criteria-confinement-evidence-boundary",
      "source": "phys:confinement-criteria",
      "target": "phys:confinement-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared criteria restrict the interpretation of these hadronic results without equating them to an area-law or free-color null test.",
      "claimIds": [
        "M-phys-confinement-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:durr-hadron-spectrum-confinement-evidence-boundary",
      "source": "phys:durr-hadron-spectrum",
      "target": "phys:confinement-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The calibrated selected spectrum contributes its QCD consistency result with the same mass inputs and extrapolation limits.",
      "claimIds": [
        "M-phys-confinement-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:tasso-gluon-interpretation-confinement-evidence-boundary",
      "source": "phys:tasso-gluon-interpretation",
      "target": "phys:confinement-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The charged-track jet interpretation contributes a conditional comparison with the specified fragmentation alternative.",
      "claimIds": [
        "M-phys-confinement-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:sld1999-neutral-yields-confinement-evidence-boundary",
      "source": "phys:sld1999-neutral-yields",
      "target": "phys:confinement-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The selected decay-reconstructed spectra contribute their detector, branching and common-normalization boundaries.",
      "claimIds": [
        "M-phys-confinement-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    },
    {
      "id": "physics:sld1999-neutral-totals-confinement-evidence-boundary",
      "source": "phys:sld1999-neutral-totals",
      "target": "phys:confinement-evidence-boundary",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The full-range totals contribute only a dependent model extrapolation of the same SLD spectra.",
      "claimIds": [
        "M-phys-confinement-evidence-boundary"
      ],
      "contextIds": [
        "durr2008",
        "tasso1979",
        "sld1999-neutral-acquisition",
        "sld1999-neutral-extrapolation"
      ]
    }
  ],
  "studies": [
    {
      "id": "tasso1979",
      "sourceId": "tasso1979",
      "studyType": "primary-experiment",
      "doi": "10.1016/0370-2693(79)90830-X",
      "journal": "Physics Letters B",
      "volume": "86",
      "issue": "2",
      "pages": "243-249",
      "system": "Hadronic electron-positron annihilation at PETRA",
      "preparation": "TASSO charged-track sample: 75 events at 13 GeV, 40 at 17 GeV, 118 pooled at 27.4/27.7 GeV, 135 at 30 GeV and 40 at 31.6 GeV. Tracks satisfy the stated drift-chamber and transverse-momentum cuts. Low and high energy groups are compared with Field-Feynman fragmentation variants and azimuthal randomization.",
      "observable": "Momentum-tensor event plane, in-plane/out-of-plane transverse momentum, aplanarity A, sphericity S and three fitted jet axes.",
      "finding": "At high energy, A<0.04 and S>0.25 select 18 planar events versus 4.5 expected in the stated two-jet comparison and 4 in the randomization estimate. Selected events admit three-jet fits.",
      "limitations": [
        "Selected charged tracks define the momentum tensor and event plane; neutral hadrons and detector acceptance are not a complete final-state census.",
        "Trigger multiplicity changes with energy; the report describes simulation checks. The data and simulation have not been replayed here.",
        "Three fitted jet axes, charged-track counts, primary partons and color representations are distinct counting domains. No universal minimum or stable free-gluon occurrence follows.",
        "The report rejects the specified collinear fragmentation comparison; quantitative first-order QCD comparisons are assigned to a subsequent paper."
      ],
      "readExtent": "full-primary-author-report-and-published-article",
      "reviewedLocators": [
        "DESY 79/53, PDF page 4: printed pages 2-3, selection and jet definitions",
        "DESY 79/53, PDF pages 5-6: printed pages 4-7, transverse broadening and planarity tests",
        "DESY 79/53, PDF page 7: printed pages 8-9, three-jet interpretation and conclusion",
        "DESY 79/53, PDF pages 9-15: captions and Figures 1-6",
        "Published pages 244-245: PETRA charged-track selection, detector simulation checks, jet axes and transverse broadening",
        "Published pages 246-248, Figures 3-6: charged-momentum tensor, planarity selection and collinear-fragmentation comparisons",
        "Published pages 248-249, Figure 6 and conclusion: three-jet interpretation and deferred quantitative QCD comparison"
      ],
      "metadataCheckedAt": "2026-10-10",
      "metadataUrl": "https://bib-pubdb1.desy.de/record/322261",
      "correctionCheck": "DOI, title, journal and report identity agree with the open final published article and DESY catalogue. The author report and published article have separately identified locators. No exhaustive later-correction or replication review is claimed."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "phys:confinement-criteria",
      "role": "definition",
      "denotes": "A scoped criterion and its non-equivalent applications.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-confinement-criteria"
      ]
    },
    {
      "nodeId": "phys:confinement-evidence-boundary",
      "role": "scoped-phenomenon",
      "denotes": "A bounded interpretation of existing, separately prepared hadronic results; no new acquisition or pooled test.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-confinement-evidence-boundary"
      ]
    }
  ]
};

/** Criteria and scoped synthesis cannot acquire universal physical causation. */
export function validateConfinementFormalContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const records = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((record) => [record.nodeId, record])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      assert.deepEqual(records.get(id), expected, `Confinement criteria ${kind} changed ${id}: preserve the model and evidence boundary`);
    }
  }
}
