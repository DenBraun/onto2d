// Exact reviewed preparations, observations and interpretation boundaries.
export const RECOGNITION_HYDRATION_RECORDS = {
  "sources": [
    {
      "id": "amit1986-hewl-d13-structure",
      "kind": "research-publication",
      "title": "Three-Dimensional Structure of an Antigen-Antibody Complex at 2.8 Å Resolution",
      "authors": [
        "A. G. Amit",
        "R. A. Mariuzza",
        "S. E. V. Phillips",
        "R. J. Poljak"
      ],
      "year": 1986,
      "doi": "10.1126/science.2426778",
      "url": "https://ptabdata.blob.core.windows.net/files/2017/IPR2017-01373/v61_Exhibit%201059.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-seven-page-primary-article-with-all-six-main-figures-and-three-tables",
        "locators": [
          "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent"
        ],
        "limit": "Read all seven actual published Science pages 747-753, complete article/Discussion/References/Notes, all six main figures and all three tables, with local page renders for figures, geometry and resolution/error statements. The downloaded PDF is a reproduction of the primary article in a public exhibit; the exhibit wrapper is not scientific evidence and no patent interpretation is used. PubMed PMID 2426778 and Crossref agree on four authors, title, DOI10.1126/science.2426778, Science233(4765):747-753 and 15 August1986. Limited exact-title/DOI/erratum and publisher searches on2026-10-20 found no explicit correction; empty Crossref relation/update fields do not establish absence. The earlier6 angstrom paper, cited crystallization/sequence/native coordinates/affinity work, personal communications and later higher-resolution refinements are not independently read or cloned as new studies. The main paper provides only limited specificity-assay description and cites affinity measurements to Reference 25; no new affinity constant, specificity panel, affinity engineering result or kinetic mechanism is admitted. No solvent molecules were located in the refined model, despite a tentative discussion of one possible water-density peak. The absent unliganded D1.3 structure prevents an antibody before/after structural comparison."
      }
    },
    {
      "id": "modig2004-protein-peptide-hydration",
      "kind": "research-publication",
      "title": "Dynamics of Protein and Peptide Hydration",
      "authors": [
        "Kristofer Modig",
        "Edvards Liepinsh",
        "Gottfried Otting",
        "Bertil Halle"
      ],
      "year": 2004,
      "doi": "10.1021/ja038325d",
      "url": "https://www.lth.se/fileadmin/mps/Departments/BPC/Halle_group/Papers/2004_JACS_MRDNOE.pdf",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "complete-published-thirteen-page-primary-article-and-twelve-page-supporting-information",
        "locators": [
          "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts"
        ],
        "limit": "Read all thirteen actual JACS main pages 102-114 and all twelve appended Supporting Information pagesS1-S12 in the author laboratory PDF, including main equations/tables/captions, all five main figures, all three SI figures, TableS1 and SI EquationS1. This is Modig/Liepinsh/Otting/Halle Dynamics of Protein and Peptide Hydration, DOI10.1021/ja038325d, not the separate Halle critical survey. Main PDF header and Crossref agree on online 12 December2003; the print issue is126(1),2004:102-114. PubMed PMID 14709075 gives14 January2004 whereas Crossref print metadata gives1 January2004; the print-day discrepancy is retained. Limited exact-title/DOI/correction and publisher searches on2026-10-20 found no explicit correction linked to this article; empty Crossref relation/update fields do not prove absence. Raw NMR acquisition, original fitting implementation, covariance and earlier primary datasets are not independently reproduced. The proposal admits the actual BPTI supercooled MRD acquisition only; new oxytocin and inherited BPTI NOE data were read in the paper but are not separately admitted. Structural, viscosity, hydrodynamic and water-number inputs remain adopted/model quantities. SI S7 expressly records an unresolved W111 residence-time inconsistency, potentially requiring an unobserved local structural transformation."
      }
    },
    {
      "id": "legacy-3",
      "kind": "legacy-catalogue",
      "title": "Original Level 3 source catalogue",
      "authors": [],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "references/level-3.json",
      "sha256": "baf02946627ee18978d017f897d17a1f63c1dee96f641b5b3260d115d7e695c1",
      "review": {
        "extent": "inventoried",
        "locators": [
          "/"
        ],
        "limit": "Author-supplied source material; its evidence labels and numerical thresholds require scientific review."
      }
    }
  ],
  "claims": [
    {
      "id": "M-bio-amit1986-hewl-d13-crystallography-context",
      "kind": "method",
      "statement": "The source measures X-ray diffraction from a complex of hen egg-white lysozyme and murine monoclonal D1.3 Fab, crystallized in 15-20 percent PEG8000 at pH6.0, monoclinic P21 with one complex per asymmetric unit. Data extend to 2.8 angstrom. Isomorphous/anomalous phases and density modification precede restrained least-squares refinement and omitted-segment model checks. The current R factor is0.28 over20-2.8 angstrom, with approximate coordinate error0.6 angstrom; no solvent molecules were located. Antibody sequence and comparison native-lysozyme coordinates are adopted from cited/personal-communication inputs. Crystal temperature, full solution concentrations and a direct unbound D1.3 control are not supplied in the reviewed article.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "M-bio-modig2004-bpti-supercooled-mrd-context",
      "kind": "method",
      "statement": "The source primary MRD sample is8.3 mM BPTI in water containing52 percent2H and 17 percent17O at pH*5.2, dispersed as aqueous droplets in heptane/nonionic-surfactant emulsion. Longitudinal water relaxation is measured at-10 and-30 C across8-9 field strengths, with 2H frequencies2.5-92 MHz and 17O frequencies2.2-81 MHz; at-30 C only2H is reported because17O sensitivity is inadequate. Same-isotope bulk-water references are recorded at each field/temperature. The source uses inversion recovery, estimates0.5 percent rate uncertainty and 0.1 C temperature accuracy, then fits its spectral-density model and evaluates parameter uncertainty with 1000 Gaussian-noise Monte Carlo datasets at 68.3 percent confidence. Fits exclude the highest-frequency point as described; no new fit is performed here.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "D-bio-antibody-recognition-measurement-boundary",
      "kind": "review-finding",
      "statement": "For this review, a refined antigen-Fab interface provides a structural example of associated protein recognition. Static contacts and geometric complementarity differ from an affinity constant, specificity panel, association/dissociation kinetics, conformational-adjustment route and downstream immune response. None is inferred solely from the bound crystal.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ]
    },
    {
      "id": "D-bio-hydration-mrd-interpretation-boundary",
      "kind": "review-finding",
      "statement": "For the selected source, distinguish measured water-nuclear relaxation, fitted spectral densities, apparent amplitudes/correlation times, model-estimated surface-water numbers and conditional rotation/residence interpretations. These do not directly image spatial ordering or ion distributions. Nonlocal dipolar sampling in NOE theory is not evidence of long-range physical solvent order or a causal effect on binding/catalysis.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ]
    },
    {
      "id": "C-bio-hewl-d13-crystallographic-model",
      "kind": "review-finding",
      "statement": "The source diffraction/refinement supports a bound HEWL-D1.3 Fab model at 2.8 angstrom, with R=0.28 and estimated coordinate error about 0.6 angstrom. It resolves an extended Fab conformation and a protein-protein interface. Contact geometry is inferred from this resolution-limited model; no new solution trajectory, binding rate or energetic partition is obtained.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "C-bio-hewl-d13-interface-geometry",
      "kind": "review-finding",
      "statement": "In the source refined model,16 lysozyme residues and 17 Fab residues contact across a roughly30-by 20 angstrom interface. The contacting lysozyme residues lie within two sequence stretches,18-27 and 116-129, adjacent on the folded surface. All six source-defined CDRs and two adjacent framework residues participate; Table 3 assigns hydrogen-bond-compatible contacts among other close packing. Source calculated buried accessible areas are about 748 square angstrom for lysozyme and 690 for Fab. These counts/areas describe this model and convention, not universal epitope size or energetic contribution.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "C-bio-hewl-d13-conformational-comparison",
      "kind": "review-finding",
      "statement": "Superposition with a cited native tetragonal lysozyme structure gives source C-alpha RMS difference0.64 angstrom, comparable to its approximate0.6 angstrom coordinate-error estimate; differences between native crystal forms are also comparable. The source therefore resolves no significant lysozyme tertiary change at this resolution. Unbound D1.3 was unavailable, so the same data do not establish an unchanged antibody interface or select a binding mechanism.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "M-bio-hewl-d13-structural-interpretation-method",
      "kind": "method",
      "statement": "Use the diffraction/refinement/error boundary to interpret the contact model and comparisons with existing native structures. Keep inherited affinity/specificity discussion, unbound-antibody absence, unassigned solvent and proposed binding mechanisms distinct from the new structural acquisition.",
      "scope": "Descriptive measurement/inference dependency, not an independent acquisition or asserted physical cause.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "C-bio-bpti-water-relaxation-observation",
      "kind": "review-finding",
      "statement": "The source records water 2H and 17O longitudinal-relaxation frequency dependence for the BPTI emulsion at-10 C and 2H at-30 C, with same-condition bulk-water baselines. Figure 4 shows a low-frequency excess that decreases across the measured frequency range and a residual high-frequency excess. These are aggregate water-nuclear relaxation observations, not separately imaged hydration layers or ion positions.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "C-bio-bpti-mrd-source-fit",
      "kind": "review-finding",
      "statement": "With the highest-frequency point excluded, Table 5 reports apparent beta correlation times10.7±0.7 ns for 2H and 8.9±0.9 ns for 17O at-10 C, and 11±1 ns for 2H at-30 C. Apparent Nbeta*Sbeta^2 values are1.7±0.1,1.2±0.2 and 3.3±0.4, respectively. With an adopted surface-water number268, source-derived residual rotational retardation factors are3.3±0.2,3.8±0.2 and 2.1±0.2. These are conditional source fits and derived quantities, with reported68.3 percent uncertainties, not direct site counts or independently reproduced rates.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "C-bio-bpti-hydration-dynamics-interpretation",
      "kind": "review-finding",
      "statement": "The source interprets its supercooled MRD through a small strongly retarded water subpopulation plus a more mobile majority. At-30 C, assigning the low-frequency component to external surface sites gives source residence times about 10-15 ns and an order-weighted amplitude consistent with roughly three or more waters, not an exact count. The residual factor about 2 constrains broadly immobilized hydration for this model/preparation. Surface/internal assignments, the more-than 95 percent interpretation and extrapolation to ordinary temperature remain conditional, especially given SI S7 W111 inconsistency; no universal long-range ordered shell follows.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "M-bio-bpti-mrd-interpretation-method",
      "kind": "method",
      "statement": "Interpret the water-dispersion curves through the stated Lorentzian/exchange model, adopted hydration number and scaled tumbling times. Retain the excluded highest-frequency point, covariance, order-amplitude ambiguity and unresolved internal-water alternative before assigning external surface populations or extending temperature conclusions.",
      "scope": "Descriptive measurement/inference dependency, not an independent acquisition or asserted physical cause.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "method",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "C-bio-antigen-antibody-recognition-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.11 to the actual source bound HEWL-D1.3 interface and its crystallographic uncertainty. Structural association, discontinuous epitope geometry and assigned noncovalent-contact patterns are admitted; quantitative specificity/affinity, adaptive binding route, induced-fit/selection/lock-and-key conclusions and downstream immune function remain outside admission.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.11 recognition is qualified to the refined bound hen-egg-white-lysozyme/Fab interface. Selectivity against closely related targets, affinity tuning, adaptive interface matching, downstream signaling, immune targeting in complex environments and exact electrostatic/dynamic mechanisms are not admitted from this crystal.",
        "The original process-versus-object/property classification is a representation decision. A static associated structure does not observe a time-resolved recognition event regime or all steps of binding.",
        "Original Requirements MustCover0/10, ShouldCover3/9/11 and Optional4/5/6 are not universal substrate/constraint/catalyst/resource/transport/regulation/gradient/compartment gates. Only actual protein/crystal/analysis conditions are retained.",
        "Original3.11 parents3.0(weight0.4,necessary,dependency0),3.5(0.25,enabling,dependency4),2.7(0.2,necessary,dependency10) and 2.8(0.15,enabling,dependency10) are horizontal. All have Nmin=Ncrit2,Nsat=null. Modes are cooperation/constraint for 3.0,cooperation/feedback for 3.5 and constraint for 2.7/2.8. No source experiment validates these counts, weights or a universal causal hierarchy.",
        "Multiple contacting residues and six CDR labels are not a measured cooperativity/Hill result or proof that antibody recognition requires prior coupled-site feedback. Hydrogen-bond-compatible geometry is not a new universal bond-energy ranking, and no permanent/induced electric dipole is measured."
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "C-bio-protein-hydration-source-scope",
      "kind": "review-finding",
      "statement": "Resolve original card 3.31 to the source BPTI supercooled water-relaxation measurement, fitted quantities and conditional heterogeneous-hydration interpretation. Local dynamic perturbation is supported within that model/preparation. Ionic distributions, universal long-range solvent order, electrostatic organization and hydration-caused binding/catalytic/stability effects are excluded from the selected evidence scope.",
      "scope": "Only the named source preparation, signal/refinement and explicitly qualified inference; no general immune mechanism, ionic microenvironment or ontological construction.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts",
          "role": "supports",
          "note": "Actually read primary publication and indicated main/SI material. Observed signals, source refinement/fit and conditional interpretation retain separate roles; no independent acquisition or numerical reproduction."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.31 local water dynamics are supported only through the declared BPTI MRD acquisition and model boundary. No ion distribution, ionic-shell structure, electrostatic organization, long-range water ordering or causal change in catalysis, binding, stability or molecular recognition is measured.",
        "The original property-versus-process/object classification is a representation choice. It does not validate a persistent solvent architecture or a universal folded-protein property beyond direct contact geometry.",
        "Original Requirements MustCover0/10, ShouldCover4/12 and Optional5/7 do not become universal substrate/constraint/regulation/environment/gradient/information gates. Actual protein, isotopes, pH*, temperature and emulsion are context; no regulated gradient or encoded-information variable is tested.",
        "Original3.31 parents3.0(weight0.4,necessary,dependency10),2.7(0.3,necessary,dependency10),2.12(0.2,enabling,dependency12) and 3.25(0.1,contextual,dependency4) all point downward, have carrier2/4,Nmin=Ncrit1,Nsat=null and constraint mode except3.25 feedback. No source intervention identifies these weights, count thresholds or universal parent requirements.",
        "The actual3.25 parent is redox systems and oxidation-reduction regulation, not pH regulation. No electron-transfer/cofactor/redox-feedback experiment occurs in this hydration study, so no redox ancestry is forced.",
        "The earlier hydrogen-bond, molecular-polarization and liquid-organization studies retain their identities and contexts. They are not silently imported as direct protein hydration evidence, and NOE long-range sensitivity is not an observed liquid correlation function or bulk transport law.",
        "The antibody crystal has no assigned solvent model and is a different protein/system. Its geometry cannot supply a measured hydration/ion mechanism for BPTI or a hydration-caused affinity effect."
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    }
  ],
  "entities": [
    {
      "id": "bio:amit1986-hewl-d13-crystallography-context",
      "name": "HEWL-D1.3 crystallographic context",
      "kind": "context",
      "description": "The source measures X-ray diffraction from a complex of hen egg-white lysozyme and murine monoclonal D1.3 Fab, crystallized in 15-20 percent PEG8000 at pH6.0, monoclinic P21 with one complex per asymmetric unit. Data extend to 2.8 angstrom. Isomorphous/anomalous phases and density modification precede restrained least-squares refinement and omitted-segment model checks. The current R factor is0.28 over20-2.8 angstrom, with approximate coordinate error0.6 angstrom; no solvent molecules were located. Antibody sequence and comparison native-lysozyme coordinates are adopted from cited/personal-communication inputs. Crystal temperature, full solution concentrations and a direct unbound D1.3 control are not supplied in the reviewed article.",
      "claimIds": [
        "M-bio-amit1986-hewl-d13-crystallography-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "level": 3
    },
    {
      "id": "bio:modig2004-bpti-supercooled-mrd-context",
      "name": "Supercooled BPTI water-relaxation context",
      "kind": "context",
      "description": "The source primary MRD sample is8.3 mM BPTI in water containing52 percent2H and 17 percent17O at pH*5.2, dispersed as aqueous droplets in heptane/nonionic-surfactant emulsion. Longitudinal water relaxation is measured at-10 and-30 C across8-9 field strengths, with 2H frequencies2.5-92 MHz and 17O frequencies2.2-81 MHz; at-30 C only2H is reported because17O sensitivity is inadequate. Same-isotope bulk-water references are recorded at each field/temperature. The source uses inversion recovery, estimates0.5 percent rate uncertainty and 0.1 C temperature accuracy, then fits its spectral-density model and evaluates parameter uncertainty with 1000 Gaussian-noise Monte Carlo datasets at 68.3 percent confidence. Fits exclude the highest-frequency point as described; no new fit is performed here.",
      "claimIds": [
        "M-bio-modig2004-bpti-supercooled-mrd-context"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "level": 3
    },
    {
      "id": "bio:antibody-recognition-measurement-boundary",
      "name": "Antibody interface versus binding-mechanism boundary",
      "kind": "definition",
      "description": "For this review, a refined antigen-Fab interface provides a structural example of associated protein recognition. Static contacts and geometric complementarity differ from an affinity constant, specificity panel, association/dissociation kinetics, conformational-adjustment route and downstream immune response. None is inferred solely from the bound crystal.",
      "claimIds": [
        "D-bio-antibody-recognition-measurement-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "level": 3
    },
    {
      "id": "bio:hydration-mrd-interpretation-boundary",
      "name": "Hydration relaxation versus structure and ion-distribution boundary",
      "kind": "definition",
      "description": "For the selected source, distinguish measured water-nuclear relaxation, fitted spectral densities, apparent amplitudes/correlation times, model-estimated surface-water numbers and conditional rotation/residence interpretations. These do not directly image spatial ordering or ion distributions. Nonlocal dipolar sampling in NOE theory is not evidence of long-range physical solvent order or a causal effect on binding/catalysis.",
      "claimIds": [
        "D-bio-hydration-mrd-interpretation-boundary"
      ],
      "status": "definition",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "level": 3
    },
    {
      "id": "bio:hewl-d13-crystallographic-model",
      "name": "Source-refined HEWL-D1.3 structural model",
      "kind": "scoped-process",
      "description": "The source diffraction/refinement supports a bound HEWL-D1.3 Fab model at 2.8 angstrom, with R=0.28 and estimated coordinate error about 0.6 angstrom. It resolves an extended Fab conformation and a protein-protein interface. Contact geometry is inferred from this resolution-limited model; no new solution trajectory, binding rate or energetic partition is obtained.",
      "claimIds": [
        "C-bio-hewl-d13-crystallographic-model"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "level": 3
    },
    {
      "id": "bio:hewl-d13-interface-geometry",
      "name": "Finite HEWL-D1.3 interface geometry",
      "kind": "scoped-process",
      "description": "In the source refined model,16 lysozyme residues and 17 Fab residues contact across a roughly30-by 20 angstrom interface. The contacting lysozyme residues lie within two sequence stretches,18-27 and 116-129, adjacent on the folded surface. All six source-defined CDRs and two adjacent framework residues participate; Table 3 assigns hydrogen-bond-compatible contacts among other close packing. Source calculated buried accessible areas are about 748 square angstrom for lysozyme and 690 for Fab. These counts/areas describe this model and convention, not universal epitope size or energetic contribution.",
      "claimIds": [
        "C-bio-hewl-d13-interface-geometry"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "level": 3
    },
    {
      "id": "bio:hewl-d13-conformational-comparison",
      "name": "Resolution-limited HEWL conformational comparison",
      "kind": "scoped-process",
      "description": "Superposition with a cited native tetragonal lysozyme structure gives source C-alpha RMS difference0.64 angstrom, comparable to its approximate0.6 angstrom coordinate-error estimate; differences between native crystal forms are also comparable. The source therefore resolves no significant lysozyme tertiary change at this resolution. Unbound D1.3 was unavailable, so the same data do not establish an unchanged antibody interface or select a binding mechanism.",
      "claimIds": [
        "C-bio-hewl-d13-conformational-comparison"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed."
      ],
      "level": 3
    },
    {
      "id": "bio:bpti-water-relaxation-observation",
      "name": "BPTI water relaxation dispersion",
      "kind": "scoped-process",
      "description": "The source records water 2H and 17O longitudinal-relaxation frequency dependence for the BPTI emulsion at-10 C and 2H at-30 C, with same-condition bulk-water baselines. Figure 4 shows a low-frequency excess that decreases across the measured frequency range and a residual high-frequency excess. These are aggregate water-nuclear relaxation observations, not separately imaged hydration layers or ion positions.",
      "claimIds": [
        "C-bio-bpti-water-relaxation-observation"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "level": 3
    },
    {
      "id": "bio:bpti-mrd-source-fit",
      "name": "Source-fitted BPTI MRD parameters",
      "kind": "scoped-process",
      "description": "With the highest-frequency point excluded, Table 5 reports apparent beta correlation times10.7±0.7 ns for 2H and 8.9±0.9 ns for 17O at-10 C, and 11±1 ns for 2H at-30 C. Apparent Nbeta*Sbeta^2 values are1.7±0.1,1.2±0.2 and 3.3±0.4, respectively. With an adopted surface-water number268, source-derived residual rotational retardation factors are3.3±0.2,3.8±0.2 and 2.1±0.2. These are conditional source fits and derived quantities, with reported68.3 percent uncertainties, not direct site counts or independently reproduced rates.",
      "claimIds": [
        "C-bio-bpti-mrd-source-fit"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "level": 3
    },
    {
      "id": "bio:bpti-hydration-dynamics-interpretation",
      "name": "Conditional heterogeneous BPTI hydration dynamics",
      "kind": "scoped-process",
      "description": "The source interprets its supercooled MRD through a small strongly retarded water subpopulation plus a more mobile majority. At-30 C, assigning the low-frequency component to external surface sites gives source residence times about 10-15 ns and an order-weighted amplitude consistent with roughly three or more waters, not an exact count. The residual factor about 2 constrains broadly immobilized hydration for this model/preparation. Surface/internal assignments, the more-than 95 percent interpretation and extrapolation to ordinary temperature remain conditional, especially given SI S7 W111 inconsistency; no universal long-range ordered shell follows.",
      "claimIds": [
        "C-bio-bpti-hydration-dynamics-interpretation"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred."
      ],
      "level": 3
    },
    {
      "id": "bio:antigen-antibody-recognition-source-scope",
      "name": "Finite antigen-antibody recognition source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.11 to the actual source bound HEWL-D1.3 interface and its crystallographic uncertainty. Structural association, discontinuous epitope geometry and assigned noncovalent-contact patterns are admitted; quantitative specificity/affinity, adaptive binding route, induced-fit/selection/lock-and-key conclusions and downstream immune function remain outside admission.",
      "claimIds": [
        "C-bio-antigen-antibody-recognition-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation"
        },
        {
          "sourceId": "amit1986-hewl-d13-structure",
          "locator": "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/11"
        }
      ],
      "openObligations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.11 recognition is qualified to the refined bound hen-egg-white-lysozyme/Fab interface. Selectivity against closely related targets, affinity tuning, adaptive interface matching, downstream signaling, immune targeting in complex environments and exact electrostatic/dynamic mechanisms are not admitted from this crystal.",
        "The original process-versus-object/property classification is a representation decision. A static associated structure does not observe a time-resolved recognition event regime or all steps of binding.",
        "Original Requirements MustCover0/10, ShouldCover3/9/11 and Optional4/5/6 are not universal substrate/constraint/catalyst/resource/transport/regulation/gradient/compartment gates. Only actual protein/crystal/analysis conditions are retained.",
        "Original3.11 parents3.0(weight0.4,necessary,dependency0),3.5(0.25,enabling,dependency4),2.7(0.2,necessary,dependency10) and 2.8(0.15,enabling,dependency10) are horizontal. All have Nmin=Ncrit2,Nsat=null. Modes are cooperation/constraint for 3.0,cooperation/feedback for 3.5 and constraint for 2.7/2.8. No source experiment validates these counts, weights or a universal causal hierarchy.",
        "Multiple contacting residues and six CDR labels are not a measured cooperativity/Hill result or proof that antibody recognition requires prior coupled-site feedback. Hydrogen-bond-compatible geometry is not a new universal bond-energy ranking, and no permanent/induced electric dipole is measured."
      ],
      "level": 3
    },
    {
      "id": "bio:protein-hydration-source-scope",
      "name": "Finite protein hydration and ionic-microenvironment source scope",
      "kind": "scoped-process",
      "description": "Resolve original card 3.31 to the source BPTI supercooled water-relaxation measurement, fitted quantities and conditional heterogeneous-hydration interpretation. Local dynamic perturbation is supported within that model/preparation. Ionic distributions, universal long-range solvent order, electrostatic organization and hydration-caused binding/catalytic/stability effects are excluded from the selected evidence scope.",
      "claimIds": [
        "C-bio-protein-hydration-source-scope"
      ],
      "status": "evidence-scoped",
      "sourceCoordinates": [
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation"
        },
        {
          "sourceId": "modig2004-protein-peptide-hydration",
          "locator": "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts"
        },
        {
          "sourceId": "legacy-3",
          "locator": "/31"
        }
      ],
      "openObligations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.31 local water dynamics are supported only through the declared BPTI MRD acquisition and model boundary. No ion distribution, ionic-shell structure, electrostatic organization, long-range water ordering or causal change in catalysis, binding, stability or molecular recognition is measured.",
        "The original property-versus-process/object classification is a representation choice. It does not validate a persistent solvent architecture or a universal folded-protein property beyond direct contact geometry.",
        "Original Requirements MustCover0/10, ShouldCover4/12 and Optional5/7 do not become universal substrate/constraint/regulation/environment/gradient/information gates. Actual protein, isotopes, pH*, temperature and emulsion are context; no regulated gradient or encoded-information variable is tested.",
        "Original3.31 parents3.0(weight0.4,necessary,dependency10),2.7(0.3,necessary,dependency10),2.12(0.2,enabling,dependency12) and 3.25(0.1,contextual,dependency4) all point downward, have carrier2/4,Nmin=Ncrit1,Nsat=null and constraint mode except3.25 feedback. No source intervention identifies these weights, count thresholds or universal parent requirements.",
        "The actual3.25 parent is redox systems and oxidation-reduction regulation, not pH regulation. No electron-transfer/cofactor/redox-feedback experiment occurs in this hydration study, so no redox ancestry is forced.",
        "The earlier hydrogen-bond, molecular-polarization and liquid-organization studies retain their identities and contexts. They are not silently imported as direct protein hydration evidence, and NOE long-range sensitivity is not an observed liquid correlation function or bulk transport law.",
        "The antibody crystal has no assigned solvent model and is a different protein/system. Its geometry cannot supply a measured hydration/ion mechanism for BPTI or a hydration-caused affinity effect."
      ],
      "level": 3
    }
  ],
  "relations": [
    {
      "id": "biochemistry:amit1986-hewl-d13-crystallography-context-hewl-d13-crystallographic-model",
      "source": "bio:amit1986-hewl-d13-crystallography-context",
      "target": "bio:hewl-d13-crystallographic-model",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-amit1986-hewl-d13-crystallography-context",
        "C-bio-hewl-d13-crystallographic-model"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:amit1986-hewl-d13-crystallography-context-hewl-d13-interface-geometry",
      "source": "bio:amit1986-hewl-d13-crystallography-context",
      "target": "bio:hewl-d13-interface-geometry",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-amit1986-hewl-d13-crystallography-context",
        "C-bio-hewl-d13-interface-geometry"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:amit1986-hewl-d13-crystallography-context-hewl-d13-conformational-comparison",
      "source": "bio:amit1986-hewl-d13-crystallography-context",
      "target": "bio:hewl-d13-conformational-comparison",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-amit1986-hewl-d13-crystallography-context",
        "C-bio-hewl-d13-conformational-comparison"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:modig2004-bpti-supercooled-mrd-context-bpti-water-relaxation-observation",
      "source": "bio:modig2004-bpti-supercooled-mrd-context",
      "target": "bio:bpti-water-relaxation-observation",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-modig2004-bpti-supercooled-mrd-context",
        "C-bio-bpti-water-relaxation-observation"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:modig2004-bpti-supercooled-mrd-context-bpti-mrd-source-fit",
      "source": "bio:modig2004-bpti-supercooled-mrd-context",
      "target": "bio:bpti-mrd-source-fit",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-modig2004-bpti-supercooled-mrd-context",
        "C-bio-bpti-mrd-source-fit"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:modig2004-bpti-supercooled-mrd-context-bpti-hydration-dynamics-interpretation",
      "source": "bio:modig2004-bpti-supercooled-mrd-context",
      "target": "bio:bpti-hydration-dynamics-interpretation",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared preparation and measurement/analysis boundary delimits this source observation or inference.",
      "claimIds": [
        "M-bio-modig2004-bpti-supercooled-mrd-context",
        "C-bio-bpti-hydration-dynamics-interpretation"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:hewl-d13-crystallographic-model-hewl-d13-interface-geometry",
      "source": "bio:hewl-d13-crystallographic-model",
      "target": "bio:hewl-d13-interface-geometry",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The source contact assignments depend on the refined model and its resolution/error boundary.",
      "claimIds": [
        "C-bio-hewl-d13-crystallographic-model",
        "C-bio-hewl-d13-interface-geometry",
        "M-bio-hewl-d13-structural-interpretation-method"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:hewl-d13-crystallographic-model-hewl-d13-conformational-comparison",
      "source": "bio:hewl-d13-crystallographic-model",
      "target": "bio:hewl-d13-conformational-comparison",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The structural comparison retains model uncertainty and inherited native structures.",
      "claimIds": [
        "C-bio-hewl-d13-crystallographic-model",
        "C-bio-hewl-d13-conformational-comparison",
        "M-bio-hewl-d13-structural-interpretation-method"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:antibody-recognition-measurement-boundary-antigen-antibody-recognition-source-scope",
      "source": "bio:antibody-recognition-measurement-boundary",
      "target": "bio:antigen-antibody-recognition-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This structural/definition boundary supplies only the declared finite portion of card 3.11.",
      "claimIds": [
        "D-bio-antibody-recognition-measurement-boundary",
        "C-bio-antigen-antibody-recognition-source-scope",
        "M-bio-hewl-d13-structural-interpretation-method"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:hewl-d13-interface-geometry-antigen-antibody-recognition-source-scope",
      "source": "bio:hewl-d13-interface-geometry",
      "target": "bio:antigen-antibody-recognition-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This structural/definition boundary supplies only the declared finite portion of card 3.11.",
      "claimIds": [
        "C-bio-hewl-d13-interface-geometry",
        "C-bio-antigen-antibody-recognition-source-scope",
        "M-bio-hewl-d13-structural-interpretation-method"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:hewl-d13-conformational-comparison-antigen-antibody-recognition-source-scope",
      "source": "bio:hewl-d13-conformational-comparison",
      "target": "bio:antigen-antibody-recognition-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This structural/definition boundary supplies only the declared finite portion of card 3.11.",
      "claimIds": [
        "C-bio-hewl-d13-conformational-comparison",
        "C-bio-antigen-antibody-recognition-source-scope",
        "M-bio-hewl-d13-structural-interpretation-method"
      ],
      "contextIds": [
        "amit1986-hewl-d13-crystallography"
      ]
    },
    {
      "id": "biochemistry:bpti-water-relaxation-observation-bpti-mrd-source-fit",
      "source": "bio:bpti-water-relaxation-observation",
      "target": "bio:bpti-mrd-source-fit",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The fitted quantities are inferred from the measured dispersion under the source model and point selection.",
      "claimIds": [
        "C-bio-bpti-water-relaxation-observation",
        "C-bio-bpti-mrd-source-fit",
        "M-bio-bpti-mrd-interpretation-method"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:bpti-mrd-source-fit-bpti-hydration-dynamics-interpretation",
      "source": "bio:bpti-mrd-source-fit",
      "target": "bio:bpti-hydration-dynamics-interpretation",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The heterogeneous surface-water account depends on the fitted quantities, adopted geometry and exchange assumptions.",
      "claimIds": [
        "C-bio-bpti-mrd-source-fit",
        "C-bio-bpti-hydration-dynamics-interpretation",
        "M-bio-bpti-mrd-interpretation-method"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:hydration-mrd-interpretation-boundary-protein-hydration-source-scope",
      "source": "bio:hydration-mrd-interpretation-boundary",
      "target": "bio:protein-hydration-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement/model boundary supplies only the declared finite portion of card 3.31.",
      "claimIds": [
        "D-bio-hydration-mrd-interpretation-boundary",
        "C-bio-protein-hydration-source-scope",
        "M-bio-bpti-mrd-interpretation-method"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    },
    {
      "id": "biochemistry:bpti-hydration-dynamics-interpretation-protein-hydration-source-scope",
      "source": "bio:bpti-hydration-dynamics-interpretation",
      "target": "bio:protein-hydration-source-scope",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "This measurement/model boundary supplies only the declared finite portion of card 3.31.",
      "claimIds": [
        "C-bio-bpti-hydration-dynamics-interpretation",
        "C-bio-protein-hydration-source-scope",
        "M-bio-bpti-mrd-interpretation-method"
      ],
      "contextIds": [
        "modig2004-bpti-supercooled-mrd"
      ]
    }
  ],
  "studies": [
    {
      "id": "amit1986-hewl-d13-crystallography",
      "sourceId": "amit1986-hewl-d13-structure",
      "studyType": "primary-experiment",
      "doi": "10.1126/science.2426778",
      "journal": "Science",
      "volume": "233",
      "issue": "4765",
      "pages": "747-753",
      "system": "Crystalline harmless hen egg-white lysozyme/murine D1.3 Fab complex",
      "preparation": "The source measures X-ray diffraction from a complex of hen egg-white lysozyme and murine monoclonal D1.3 Fab, crystallized in 15-20 percent PEG8000 at pH6.0, monoclinic P21 with one complex per asymmetric unit. Data extend to 2.8 angstrom. Isomorphous/anomalous phases and density modification precede restrained least-squares refinement and omitted-segment model checks. The current R factor is0.28 over20-2.8 angstrom, with approximate coordinate error0.6 angstrom; no solvent molecules were located. Antibody sequence and comparison native-lysozyme coordinates are adopted from cited/personal-communication inputs. Crystal temperature, full solution concentrations and a direct unbound D1.3 control are not supplied in the reviewed article.",
      "observable": "X-ray diffraction intensities/electron density, restrained coordinates, source contact/accessible-area calculations and comparison RMS differences",
      "finding": "A refined HEWL-Fab interface supplies a finite structural recognition example, without direct affinity/specificity kinetics, an unbound D1.3 comparison or a determined binding route.",
      "limitations": [
        "The selected experiment is a crystalline complex of harmless hen egg-white lysozyme and murine D1.3 Fab. It is not intact IgG avidity, an in-vivo immune response, a pathogen case, a clinical diagnostic validation or an affinity-engineering study.",
        "Diffraction intensities and an electron-density/refinement model constrain geometry at 2.8 angstrom resolution; contacts, hydrogen bonds and accessible-area burial are assignments/calculations from that model, not directly measured interaction energies or a kinetic binding pathway.",
        "The source gives R=0.28 over20-2.8 angstrom and an approximate coordinate error0.6 angstrom. Individual close-distance/strong-hydrogen-bond language is not promoted to exact bond lengths, energies, proton positions or independent energetic decomposition.",
        "The unliganded D1.3 Fab structure had not been determined. Comparison with other antibodies does not supply a same-antibody before/after control, prove no loop adjustment or distinguish induced fit from conformational selection or lock-and-key binding.",
        "The lysozyme comparison uses existing native crystal structures from other work. A small difference within error is not exact conformational identity in solution or evidence excluding all dynamic changes.",
        "No solvent molecules were located in the refined model. A tentative density peak discussed as possible water is not a resolved hydration shell, water residence time or ionic distribution.",
        "The printed affinity constant is attributed to Reference 25, an earlier/in-press source not independently read. Avian cross-reactivity discussion has limited assay information. No new binding constant, specificity panel, detection limit, mutational effect or quantitative discrimination claim is admitted.",
        "The sequence assigned to Fab uses cDNA supplied through personal communication/Reference 13. Exact new sequencing, raw diffraction, original coordinates, refinement/covariance, salt effects and a kinetic mechanism are not reconstructed.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.11 recognition is qualified to the refined bound hen-egg-white-lysozyme/Fab interface. Selectivity against closely related targets, affinity tuning, adaptive interface matching, downstream signaling, immune targeting in complex environments and exact electrostatic/dynamic mechanisms are not admitted from this crystal.",
        "The original process-versus-object/property classification is a representation decision. A static associated structure does not observe a time-resolved recognition event regime or all steps of binding.",
        "Original Requirements MustCover0/10, ShouldCover3/9/11 and Optional4/5/6 are not universal substrate/constraint/catalyst/resource/transport/regulation/gradient/compartment gates. Only actual protein/crystal/analysis conditions are retained.",
        "Original3.11 parents3.0(weight0.4,necessary,dependency0),3.5(0.25,enabling,dependency4),2.7(0.2,necessary,dependency10) and 2.8(0.15,enabling,dependency10) are horizontal. All have Nmin=Ncrit2,Nsat=null. Modes are cooperation/constraint for 3.0,cooperation/feedback for 3.5 and constraint for 2.7/2.8. No source experiment validates these counts, weights or a universal causal hierarchy.",
        "Multiple contacting residues and six CDR labels are not a measured cooperativity/Hill result or proof that antibody recognition requires prior coupled-site feedback. Hydrogen-bond-compatible geometry is not a new universal bond-energy ranking, and no permanent/induced electric dipole is measured."
      ],
      "readExtent": "complete-published-seven-page-primary-article-with-all-six-main-figures-and-three-tables",
      "reviewedLocators": [
        "Published pages 747-748, Structure determination and Figure 1: hen egg-white lysozyme/murine Fab D1.3 crystal, diffraction, density modification, restrained refinement, R factor and estimated coordinate error",
        "Published pages 748-750, The antigen-antibody interface, Figures 3-5 and Tables 1-3: refined contact geometry, discontinuous lysozyme interface, CDR/framework contacts and calculated buried accessible surface",
        "Published pages 748-749, Conformation of the complexed antigen and of the Fab and Figure 2; pages 751-753 Discussion: comparisons with other crystal structures, absent unliganded D1.3 structure and limits of lock-and-key interpretation",
        "Published pages 750-753, Antigen variability and antibody specificity, Discussion and References/Notes 13, 19-25, 30 and 49: inherited sequence/native coordinates/affinity data, incomplete assay information, model speculation and unassigned solvent"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1126/science.2426778",
      "correctionCheck": "Read all seven actual published Science pages 747-753, complete article/Discussion/References/Notes, all six main figures and all three tables, with local page renders for figures, geometry and resolution/error statements. The downloaded PDF is a reproduction of the primary article in a public exhibit; the exhibit wrapper is not scientific evidence and no patent interpretation is used. PubMed PMID 2426778 and Crossref agree on four authors, title, DOI10.1126/science.2426778, Science233(4765):747-753 and 15 August1986. Limited exact-title/DOI/erratum and publisher searches on2026-10-20 found no explicit correction; empty Crossref relation/update fields do not establish absence. The earlier6 angstrom paper, cited crystallization/sequence/native coordinates/affinity work, personal communications and later higher-resolution refinements are not independently read or cloned as new studies. The main paper provides only limited specificity-assay description and cites affinity measurements to Reference 25; no new affinity constant, specificity panel, affinity engineering result or kinetic mechanism is admitted. No solvent molecules were located in the refined model, despite a tentative discussion of one possible water-density peak. The absent unliganded D1.3 structure prevents an antibody before/after structural comparison."
    },
    {
      "id": "modig2004-bpti-supercooled-mrd",
      "sourceId": "modig2004-protein-peptide-hydration",
      "studyType": "primary-experiment",
      "doi": "10.1021/ja038325d",
      "journal": "Journal of the American Chemical Society",
      "volume": "126",
      "issue": "1",
      "pages": "102-114",
      "system": "Bovine pancreatic trypsin inhibitor in supercooled isotope-enriched aqueous emulsion droplets",
      "preparation": "The source primary MRD sample is8.3 mM BPTI in water containing52 percent2H and 17 percent17O at pH*5.2, dispersed as aqueous droplets in heptane/nonionic-surfactant emulsion. Longitudinal water relaxation is measured at-10 and-30 C across8-9 field strengths, with 2H frequencies2.5-92 MHz and 17O frequencies2.2-81 MHz; at-30 C only2H is reported because17O sensitivity is inadequate. Same-isotope bulk-water references are recorded at each field/temperature. The source uses inversion recovery, estimates0.5 percent rate uncertainty and 0.1 C temperature accuracy, then fits its spectral-density model and evaluates parameter uncertainty with 1000 Gaussian-noise Monte Carlo datasets at 68.3 percent confidence. Fits exclude the highest-frequency point as described; no new fit is performed here.",
      "observable": "Water2H/17O longitudinal relaxation versus frequency/temperature, followed by Lorentzian/exchange analysis",
      "finding": "The source water-relaxation curves constrain heterogeneous hydration dynamics under model assumptions; precise surface/internal assignments, population counts and ambient extrapolation remain conditional.",
      "limitations": [
        "The admitted primary acquisition is8.3 mM bovine pancreatic trypsin inhibitor at pH*5.2 in isotope-enriched aqueous emulsion droplets at-10 and-30 C. pH* is uncorrected for isotope effects. This is not a physiological-temperature cellular solution or an ionic-shell experiment.",
        "The measured quantities are longitudinal relaxation recovery/dispersion of 2H and 17O water nuclei relative to same-isotope bulk-water references. Hydration water is not separately resolved as an independent resonance because of exchange.",
        "Lorentzian amplitudes/correlation times, water-class assignments and rotational retardation are source-model inferences. The fixed hydration number268 is estimated from existing5PTI solvent-accessible area,1.4 angstrom probe and 15 square-angstrom area per water; it is not a direct counted population.",
        "The reported beta amplitudes are apparent Nbeta*Sbeta^2 products affected by exchange and orientational order. They are not integer water counts, unique hydration-site occupancies or directly measured residence times.",
        "The highest-frequency point is excluded from the source mono-Lorentzian fits. A weak second component is suggested; its amplitude and the frequency-independent term have large covariance. Missing raw data and full covariance prevent an independent fit or unique distribution reconstruction.",
        "Protein rotational times14/70 ns at-10/-30 C are viscosity/isotope/hydrodynamic-scaled adopted estimates from earlier relaxation, not new direct measurements of tumbling in these samples. Surface/internal separation depends on these and exchange assumptions.",
        "SI S7 notes that the expected W111 internal-water behavior at-30 C is inconsistent with the observed dispersion. A local structural transformation causing much slower exchange is proposed but not measured; complete external-surface attribution remains conditional.",
        "The source infers modest mobility retardation for most surface-contact waters, not static long-range ordering, an immobilized shell, a universal no-more-than-two bound at all temperatures, or the same timescale at every residue.",
        "Converting rotational relaxation into residence/translational times requires additional assumptions. The source24 ps estimate at 4 C and room-temperature extrapolations are not direct primary observations at those temperatures and are not admitted as new measurements.",
        "No ion positions, ion number/density, electrostatic potential, hydrogen-bond energy, dielectric shell, catalysis, recognition change, binding thermodynamics or protein-stability perturbation is measured by the selected acquisition.",
        "Long-range dipolar contributions to an NOE measurement describe nonlocal magnetic sampling. They do not establish long-range structural ordering of water or ions. The paper new oxytocin and older BPTI NOE analyses are read but supply no additional admitted acquisition context or independent replication here.",
        "The emulsion-interface control, BPTI self-association estimates, internal-water coordinates and stability/cold-denaturation arguments include earlier-work inputs. No universal absence of aggregation/interface effects or direct new folding/structure determination is inferred.",
        "Original Level3/Phase2, Science arrays, scientific-status strings and SOMA type roles are catalogue classifications, not experimental evidence of universal arising, ontological necessity, independent reproduction or every conjunct in the original descriptions.",
        "Original molecular carrier group2/type4, numerical parent weights, necessary/enabling/contextual labels, directions, modes and null saturation have no operational estimator or universal threshold witness in these sources. No universal minimum/critical count is inferred from a Fab/antigen pair or a model water number.",
        "Original generic theoretical/empirical Evidence entries have null DOI/URL. They create no unreviewed models, primary experiments, mutational series, scattering studies or new replications.",
        "Card3.31 local water dynamics are supported only through the declared BPTI MRD acquisition and model boundary. No ion distribution, ionic-shell structure, electrostatic organization, long-range water ordering or causal change in catalysis, binding, stability or molecular recognition is measured.",
        "The original property-versus-process/object classification is a representation choice. It does not validate a persistent solvent architecture or a universal folded-protein property beyond direct contact geometry.",
        "Original Requirements MustCover0/10, ShouldCover4/12 and Optional5/7 do not become universal substrate/constraint/regulation/environment/gradient/information gates. Actual protein, isotopes, pH*, temperature and emulsion are context; no regulated gradient or encoded-information variable is tested.",
        "Original3.31 parents3.0(weight0.4,necessary,dependency10),2.7(0.3,necessary,dependency10),2.12(0.2,enabling,dependency12) and 3.25(0.1,contextual,dependency4) all point downward, have carrier2/4,Nmin=Ncrit1,Nsat=null and constraint mode except3.25 feedback. No source intervention identifies these weights, count thresholds or universal parent requirements.",
        "The actual3.25 parent is redox systems and oxidation-reduction regulation, not pH regulation. No electron-transfer/cofactor/redox-feedback experiment occurs in this hydration study, so no redox ancestry is forced.",
        "The earlier hydrogen-bond, molecular-polarization and liquid-organization studies retain their identities and contexts. They are not silently imported as direct protein hydration evidence, and NOE long-range sensitivity is not an observed liquid correlation function or bulk transport law.",
        "The antibody crystal has no assigned solvent model and is a different protein/system. Its geometry cannot supply a measured hydration/ion mechanism for BPTI or a hydration-caused affinity effect."
      ],
      "readExtent": "complete-published-thirteen-page-primary-article-and-twelve-page-supporting-information",
      "reviewedLocators": [
        "Published pages 102-104, Introduction and Materials and Methods sections 2.1-2.2; Table 1 page 105: BPTI sample, isotopic composition, emulsified supercooled solution, water reference and frequency-dependent longitudinal relaxation",
        "Published pages 104-106, Interpretation of NMR Data sections 3.1-3.2, Equations 2-8 and Tables 1-2: spectral-density model, estimated surface-water number, exchange regime and nonuniform diffusion interpretation",
        "Published pages 109-112, BPTI Hydration sections 5.1-5.2, Figure 4 and Tables 5-6: observed MRD curves, excluded highest-frequency point, source fits, covariance, apparent amplitudes and conditional surface-water assignment",
        "Published pages 112-114, Concluding Discussion sections 6.1-6.2 and Figures 3/5; Supporting Information pages S4-S7, Equation S1 and Figure S2: hydrodynamic scaling, exchange corrections, W111 inconsistency, limited hydration-dynamics conclusion and extrapolation",
        "Published pages 103-104 and 106-109, oxytocin Methods/Results, Figures 1-3 and Tables 3-4; Supporting Information pages S1-S5 and S8-S12, Figures S1/S3 and Table S1: distinct NOE/peptide preparations, older BPTI NOE reanalysis and model assumptions; not additional admitted acquisition contexts"
      ],
      "metadataCheckedAt": "2026-10-20",
      "metadataUrl": "https://doi.org/10.1021/ja038325d",
      "correctionCheck": "Read all thirteen actual JACS main pages 102-114 and all twelve appended Supporting Information pagesS1-S12 in the author laboratory PDF, including main equations/tables/captions, all five main figures, all three SI figures, TableS1 and SI EquationS1. This is Modig/Liepinsh/Otting/Halle Dynamics of Protein and Peptide Hydration, DOI10.1021/ja038325d, not the separate Halle critical survey. Main PDF header and Crossref agree on online 12 December2003; the print issue is126(1),2004:102-114. PubMed PMID 14709075 gives14 January2004 whereas Crossref print metadata gives1 January2004; the print-day discrepancy is retained. Limited exact-title/DOI/correction and publisher searches on2026-10-20 found no explicit correction linked to this article; empty Crossref relation/update fields do not prove absence. Raw NMR acquisition, original fitting implementation, covariance and earlier primary datasets are not independently reproduced. The proposal admits the actual BPTI supercooled MRD acquisition only; new oxytocin and inherited BPTI NOE data were read in the paper but are not separately admitted. Structural, viscosity, hydrodynamic and water-number inputs remain adopted/model quantities. SI S7 expressly records an unresolved W111 residence-time inconsistency, potentially requiring an unobserved local structural transformation."
    }
  ],
  "comparisons": [],
  "readiness": [
    {
      "nodeId": "bio:amit1986-hewl-d13-crystallography-context",
      "role": "experimental-context",
      "denotes": "HEWL-D1.3 crystallographic context within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-amit1986-hewl-d13-crystallography-context"
      ]
    },
    {
      "nodeId": "bio:modig2004-bpti-supercooled-mrd-context",
      "role": "experimental-context",
      "denotes": "Supercooled BPTI water-relaxation context within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-bio-modig2004-bpti-supercooled-mrd-context"
      ]
    },
    {
      "nodeId": "bio:antibody-recognition-measurement-boundary",
      "role": "definition",
      "denotes": "Antibody interface versus binding-mechanism boundary within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-antibody-recognition-measurement-boundary"
      ]
    },
    {
      "nodeId": "bio:hydration-mrd-interpretation-boundary",
      "role": "definition",
      "denotes": "Hydration relaxation versus structure and ion-distribution boundary within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-bio-hydration-mrd-interpretation-boundary"
      ]
    },
    {
      "nodeId": "bio:hewl-d13-crystallographic-model",
      "role": "scoped-phenomenon",
      "denotes": "Source-refined HEWL-D1.3 structural model within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-hewl-d13-crystallographic-model"
      ]
    },
    {
      "nodeId": "bio:hewl-d13-interface-geometry",
      "role": "scoped-phenomenon",
      "denotes": "Finite HEWL-D1.3 interface geometry within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-hewl-d13-interface-geometry"
      ]
    },
    {
      "nodeId": "bio:hewl-d13-conformational-comparison",
      "role": "scoped-phenomenon",
      "denotes": "Resolution-limited HEWL conformational comparison within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-hewl-d13-conformational-comparison"
      ]
    },
    {
      "nodeId": "bio:bpti-water-relaxation-observation",
      "role": "scoped-phenomenon",
      "denotes": "BPTI water relaxation dispersion within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-bpti-water-relaxation-observation"
      ]
    },
    {
      "nodeId": "bio:bpti-mrd-source-fit",
      "role": "scoped-phenomenon",
      "denotes": "Source-fitted BPTI MRD parameters within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-bpti-mrd-source-fit"
      ]
    },
    {
      "nodeId": "bio:bpti-hydration-dynamics-interpretation",
      "role": "scoped-phenomenon",
      "denotes": "Conditional heterogeneous BPTI hydration dynamics within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-bpti-hydration-dynamics-interpretation"
      ]
    },
    {
      "nodeId": "bio:antigen-antibody-recognition-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite antigen-antibody recognition source scope within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-antigen-antibody-recognition-source-scope"
      ]
    },
    {
      "nodeId": "bio:protein-hydration-source-scope",
      "role": "scoped-phenomenon",
      "denotes": "Finite protein hydration and ionic-microenvironment source scope within the declared structural or solvent-relaxation measurement boundary.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-bio-protein-hydration-source-scope"
      ]
    }
  ]
};
