import assert from "node:assert/strict";

export const NEUTRON_FORM_FACTOR_CHECKS = new Map([["neutron-form-factor-printed-arithmetic", "C-phys-neutron-form-factor-arithmetic"]]);

export const NEUTRON_FORM_FACTOR_ANALYTICAL_SOURCES = new Map([["C-phys-neutron-form-factor-arithmetic", "neutron-form-factor-verifier"]]);

export const NEUTRON_FORM_FACTOR_ADMISSION = {
  "definitions": [
    [
      "phys:neutron-sachs-ratio",
      "D-phys-neutron-sachs-ratio"
    ]
  ],
  "formalDependencies": [],
  "contexts": [
    [
      "lachniet2009-acquisition-context",
      "M-phys-lachniet2009-acquisition-context",
      [
        "lachniet2009-acquisition"
      ]
    ],
    [
      "lachniet2009-extraction-context",
      "M-phys-lachniet2009-extraction-context",
      [
        "lachniet2009-extraction"
      ]
    ],
    [
      "riordan2010-acquisition-context",
      "M-phys-riordan2010-acquisition-context",
      [
        "riordan2010-acquisition"
      ]
    ],
    [
      "riordan2010-extraction-context",
      "M-phys-riordan2010-extraction-context",
      [
        "riordan2010-extraction"
      ]
    ],
    [
      "neutron-form-factor-replay-context",
      "M-phys-neutron-form-factor-replay-context",
      [
        "neutron-form-factor-replay"
      ]
    ]
  ],
  "observations": [
    [
      "lachniet2009-ratios",
      "C-phys-lachniet2009-ratios",
      [
        "lachniet2009-acquisition"
      ]
    ],
    [
      "lachniet2009-magnetic-response",
      "C-phys-lachniet2009-magnetic-response",
      [
        "lachniet2009-extraction"
      ]
    ],
    [
      "riordan2010-asymmetries",
      "C-phys-riordan2010-asymmetries",
      [
        "riordan2010-acquisition"
      ]
    ],
    [
      "riordan2010-corrected-asymmetries",
      "C-phys-riordan2010-corrected-asymmetries",
      [
        "riordan2010-extraction"
      ]
    ],
    [
      "riordan2010-normalized-ratio",
      "C-phys-riordan2010-normalized-ratio",
      [
        "riordan2010-extraction"
      ]
    ],
    [
      "riordan2010-electric-response",
      "C-phys-riordan2010-electric-response",
      [
        "riordan2010-extraction"
      ]
    ],
    [
      "neutron-form-factor-arithmetic",
      "C-phys-neutron-form-factor-arithmetic",
      [
        "neutron-form-factor-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "lachniet-acquisition-ratios",
      "lachniet2009-acquisition-context",
      "lachniet2009-ratios",
      "M-phys-lachniet2009-ratios",
      "measurement-context"
    ],
    [
      "lachniet-context-ratios",
      "lachniet2009-extraction-context",
      "lachniet2009-ratios",
      "M-phys-lachniet2009-ratios",
      "interpretation-dependency"
    ],
    [
      "lachniet-ratios-magnetic",
      "lachniet2009-ratios",
      "lachniet2009-magnetic-response",
      "M-phys-lachniet2009-magnetic-response",
      "interpretation-dependency"
    ],
    [
      "lachniet-context-magnetic",
      "lachniet2009-extraction-context",
      "lachniet2009-magnetic-response",
      "M-phys-lachniet2009-magnetic-response",
      "interpretation-dependency"
    ],
    [
      "neutron-definition-magnetic",
      "neutron-sachs-ratio",
      "lachniet2009-magnetic-response",
      "M-phys-lachniet2009-magnetic-response",
      "interpretation-dependency"
    ],
    [
      "riordan-acquisition-asymmetries",
      "riordan2010-acquisition-context",
      "riordan2010-asymmetries",
      "M-phys-riordan2010-asymmetries",
      "measurement-context"
    ],
    [
      "riordan-asymmetries-corrected",
      "riordan2010-asymmetries",
      "riordan2010-corrected-asymmetries",
      "M-phys-riordan2010-corrected-asymmetries",
      "interpretation-dependency"
    ],
    [
      "riordan-context-corrected-asymmetries",
      "riordan2010-extraction-context",
      "riordan2010-corrected-asymmetries",
      "M-phys-riordan2010-corrected-asymmetries",
      "interpretation-dependency"
    ],
    [
      "riordan-corrected-asymmetries-ratio",
      "riordan2010-corrected-asymmetries",
      "riordan2010-normalized-ratio",
      "M-phys-riordan2010-normalized-ratio",
      "interpretation-dependency"
    ],
    [
      "riordan-context-ratio",
      "riordan2010-extraction-context",
      "riordan2010-normalized-ratio",
      "M-phys-riordan2010-normalized-ratio",
      "interpretation-dependency"
    ],
    [
      "neutron-definition-ratio",
      "neutron-sachs-ratio",
      "riordan2010-normalized-ratio",
      "M-phys-riordan2010-normalized-ratio",
      "interpretation-dependency"
    ],
    [
      "riordan-ratio-electric",
      "riordan2010-normalized-ratio",
      "riordan2010-electric-response",
      "M-phys-riordan2010-electric-response",
      "interpretation-dependency"
    ],
    [
      "lachniet-magnetic-riordan-electric",
      "lachniet2009-magnetic-response",
      "riordan2010-electric-response",
      "M-phys-riordan2010-electric-response",
      "interpretation-dependency"
    ],
    [
      "riordan-context-electric",
      "riordan2010-extraction-context",
      "riordan2010-electric-response",
      "M-phys-riordan2010-electric-response",
      "interpretation-dependency"
    ],
    [
      "lachniet-magnetic-arithmetic",
      "lachniet2009-magnetic-response",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ],
    [
      "riordan-ratio-arithmetic",
      "riordan2010-normalized-ratio",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ],
    [
      "riordan-electric-arithmetic",
      "riordan2010-electric-response",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ],
    [
      "riordan-asymmetries-arithmetic",
      "riordan2010-asymmetries",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ],
    [
      "riordan-corrected-asymmetries-arithmetic",
      "riordan2010-corrected-asymmetries",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ],
    [
      "neutron-replay-arithmetic",
      "neutron-form-factor-replay-context",
      "neutron-form-factor-arithmetic",
      "M-phys-neutron-form-factor-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "lachniet2009-acquisition",
    "lachniet2009-extraction",
    "riordan2010-acquisition",
    "riordan2010-extraction",
    "neutron-form-factor-replay"
  ],
  "comparisonIds": [
    "lachniet2009-ratios",
    "lachniet2009-magnetic-response",
    "riordan2010-asymmetries",
    "riordan2010-corrected-asymmetries",
    "riordan2010-normalized-ratio",
    "riordan2010-electric-response",
    "neutron-form-factor-arithmetic"
  ],
  "inferenceSources": [
    [
      "M-phys-neutron-form-factor-replay-context",
      [
        "lachniet2009",
        "riordan2010",
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ]
    ],
    [
      "C-phys-lachniet2009-magnetic-response",
      [
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ]
    ],
    [
      "C-phys-riordan2010-electric-response",
      [
        "lachniet2009",
        "lachniet2009-data",
        "lachniet2009-data-description"
      ]
    ],
    [
      "C-phys-neutron-form-factor-arithmetic",
      [
        "lachniet2009",
        "riordan2010",
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ]
    ],
    [
      "M-phys-lachniet2009-magnetic-response",
      [
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ]
    ],
    [
      "M-phys-riordan2010-electric-response",
      [
        "lachniet2009",
        "lachniet2009-data",
        "lachniet2009-data-description"
      ]
    ],
    [
      "M-phys-neutron-form-factor-arithmetic",
      [
        "lachniet2009",
        "riordan2010",
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ]
    ]
  ],
  "localStudySources": [
    [
      "neutron-form-factor-replay",
      "neutron-form-factor-verifier"
    ]
  ]
};

const contracts = {
  "sources": [
    {
      "id": "lachniet2009",
      "kind": "research-publication",
      "title": "Precise Measurement of the Neutron Magnetic Form Factor GMn in the Few-GeV2 Region",
      "authors": [
        "J. Lachniet",
        "A. Afanasev",
        "H. Arenhövel",
        "W.K. Brooks",
        "G.P. Gilfoyle",
        "D. Higinbotham",
        "S. Jeschonnek",
        "B. Quinn",
        "M.F. Vineyard",
        "G. Adams",
        "K. P. Adhikari",
        "M.J. Amaryan",
        "M. Anghinolfi",
        "B. Asavapibhop",
        "G. Asryan",
        "H. Avakian",
        "H. Bagdasaryan",
        "N. Baillie",
        "J.P. Ball",
        "N.A. Baltzell",
        "S. Barrow",
        "V. Batourine",
        "M. Battaglieri",
        "K. Beard",
        "I. Bedlinskiy",
        "M. Bektasoglu",
        "M. Bellis",
        "N. Benmouna",
        "B.L. Berman",
        "A.S. Biselli",
        "B.E. Bonner",
        "C. Bookwalter",
        "S. Bouchigny",
        "S. Boiarinov",
        "R. Bradford",
        "D. Branford",
        "W.J. Briscoe",
        "S. Bültmann",
        "V.D. Burkert",
        "J.R. Calarco",
        "S.L. Careccia",
        "D.S. Carman",
        "L. Casey",
        "L. Cheng",
        "P.L. Cole",
        "A. Coleman",
        "P. Collins",
        "D. Cords",
        "P. Corvisiero",
        "D. Crabb",
        "V. Crede",
        "J.P. Cummings",
        "D. Dale",
        "A. Daniel",
        "N. Dashyan",
        "R. De Masi",
        "R. De Vita",
        "E. De Sanctis",
        "P.V. Degtyarenko",
        "H. Denizli",
        "L. Dennis",
        "A. Deur",
        "S. Dhamija",
        "K.V. Dharmawardane",
        "K.S. Dhuga",
        "R. Dickson",
        "C. Djalali",
        "G.E. Dodge",
        "D. Doughty",
        "P. Dragovitsch",
        "M. Dugger",
        "S. Dytman",
        "O.P. Dzyubak",
        "H. Egiyan",
        "K.S. Egiyan",
        "L. El Fassi",
        "L. Elouadrhiri",
        "A. Empl",
        "P. Eugenio",
        "R. Fatemi",
        "G. Fedotov",
        "R. Fersch",
        "R.J. Feuerbach",
        "T.A. Forest",
        "A. Fradi",
        "M.Y. Gabrielyan",
        "M. Garçon",
        "G. Gavalian",
        "N. Gevorgyan",
        "K.L. Giovanetti",
        "F.X. Girod",
        "J.T. Goetz",
        "W. Gohn",
        "E. Golovatch",
        "R.W. Gothe",
        "L. Graham",
        "K.A. Griffioen",
        "M. Guidal",
        "M. Guillo",
        "N. Guler",
        "L. Guo",
        "V. Gyurjyan",
        "C. Hadjidakis",
        "K. Hafidi",
        "H. Hakobyan",
        "C. Hanretty",
        "J. Hardie",
        "N. Hassall",
        "D. Heddle",
        "F.W. Hersman",
        "K. Hicks",
        "I. Hleiqawi",
        "M. Holtrop",
        "J. Hu",
        "M. Huertas",
        "C.E. Hyde-Wright",
        "Y. Ilieva",
        "D.G. Ireland",
        "B.S. Ishkhanov",
        "E.L. Isupov",
        "M.M. Ito",
        "D. Jenkins",
        "H.S. Jo",
        "J.R. Johnstone",
        "K. Joo",
        "H.G. Juengst",
        "T. Kageya",
        "N. Kalantarians",
        "D. Keller",
        "J.D. Kellie",
        "M. Khandaker",
        "P. Khetarpal",
        "K.Y. Kim",
        "K. Kim",
        "W. Kim",
        "A. Klein",
        "F.J. Klein",
        "M. Klusman",
        "P. Konczykowski",
        "M. Kossov",
        "L.H. Kramer",
        "V. Kubarovsky",
        "J. Kuhn",
        "S.E. Kuhn",
        "S.V. Kuleshov",
        "V. Kuznetsov",
        "J.M. Laget",
        "J. Langheinrich",
        "D. Lawrence",
        "A.C.S. Lima",
        "K. Livingston",
        "M. Lowry",
        "H.Y. Lu",
        "K. Lukashin",
        "M. MacCormick",
        "S. Malace",
        "J.J. Manak",
        "N. Markov",
        "P. Mattione",
        "S. McAleer",
        "M.E. McCracken",
        "B. McKinnon",
        "J.W.C. McNabb",
        "B.A. Mecking",
        "M.D. Mestayer",
        "C.A. Meyer",
        "T. Mibe",
        "K. Mikhailov",
        "T. Mineeva",
        "R. Minehart",
        "M. Mirazita",
        "R. Miskimen",
        "V. Mokeev",
        "B. Moreno",
        "K. Moriya",
        "S.A. Morrow",
        "M. Moteabbed",
        "J. Mueller",
        "E. Munevar",
        "G.S. Mutchler",
        "P. Nadel-Turonski",
        "R. Nasseripour",
        "S. Niccolai",
        "G. Niculescu",
        "I. Niculescu",
        "B.B. Niczyporuk",
        "M.R. Niroula",
        "R.A. Niyazov",
        "M. Nozar",
        "G.V. O'Rielly",
        "M. Osipenko",
        "A.I. Ostrovidov",
        "K. Park",
        "S. Park",
        "E. Pasyuk",
        "C. Paterson",
        "S. Anefalos Pereira",
        "S.A. Philips",
        "J. Pierce",
        "N. Pivnyuk",
        "D. Pocanic",
        "O. Pogorelko",
        "E. Polli",
        "I. Popa",
        "S. Pozdniakov",
        "B.M. Preedom",
        "J.W. Price",
        "Y. Prok",
        "D. Protopopescu",
        "L.M. Qin",
        "B.A. Raue",
        "G. Riccardi",
        "G. Ricco",
        "M. Ripani",
        "B.G. Ritchie",
        "G. Rosner",
        "P. Rossi",
        "D. Rowntree",
        "P.D. Rubin",
        "F. Sabatié",
        "M.S. Saini",
        "J. Salamanca",
        "C. Salgado",
        "A. Sandorfi",
        "J.P. Santoro",
        "V. Sapunenko",
        "D. Schott",
        "R.A. Schumacher",
        "V.S. Serov",
        "Y.G. Sharabian",
        "D. Sharov",
        "J. Shaw",
        "N.V. Shvedunov",
        "A.V. Skabelin",
        "E.S. Smith",
        "L.C. Smith",
        "D.I. Sober",
        "D. Sokhan",
        "A. Starostin",
        "A. Stavinsky",
        "S. Stepanyan",
        "S.S. Stepanyan",
        "B.E. Stokes",
        "P. Stoler",
        "K. A. Stopani",
        "I.I. Strakovsky",
        "S. Strauch",
        "R. Suleiman",
        "M. Taiuti",
        "S. Taylor",
        "D.J. Tedeschi",
        "R. Thompson",
        "A. Tkabladze",
        "S. Tkachenko",
        "M. Ungaro",
        "A.V. Vlassov",
        "D.P. Watts",
        "X. Wei",
        "L.B. Weinstein",
        "D.P. Weygand",
        "M. Williams",
        "E. Wolin",
        "M.H. Wood",
        "A. Yegneswaran",
        "J. Yun",
        "M. Yurov",
        "L. Zana",
        "J. Zhang",
        "B. Zhao",
        "Z.W. Zhao"
      ],
      "year": 2009,
      "doi": "10.1103/PhysRevLett.102.192001",
      "url": "https://arxiv.org/pdf/0811.1716v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-report-and-author-version",
        "locators": [
          "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        ],
        "limit": "The six-page arXiv version 2 of 13 May 2009 and the six-page publisher article (published 12 May 2009) in the Edinburgh repository PDF were read, with Equation 1, Table I and figures inspected. Publisher PDF: https://www.pure.ed.ac.uk/ws/portalfiles/portal/6022323/PhysRevLett.102.192001.pdf . The regenerated author-PDF footer date is not the version date. The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows. The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded. The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      }
    },
    {
      "id": "riordan2010",
      "kind": "research-publication",
      "title": "Measurements of the Electric Form Factor of the Neutron up to Q2=3.4 GeV2 using the Reaction 3He(e,e'n)pp",
      "authors": [
        "S. Riordan",
        "S. Abrahamyan",
        "B. Craver",
        "A. Kelleher",
        "A. Kolarkar",
        "J. Miller",
        "G.D. Cates",
        "N. Liyanage",
        "B. Wojtsekhowski",
        "A. Acha",
        "K. Allada",
        "B. Anderson",
        "K.A. Aniol",
        "J.R.M. Annand",
        "J. Arrington",
        "T. Averett",
        "A. Beck",
        "M. Bellis",
        "W. Boeglin",
        "H. Breuer",
        "J.R. Calarco",
        "A. Camsonne",
        "J.P. Chen",
        "E. Chudakov",
        "L. Coman",
        "B. Crowe",
        "F. Cusanno",
        "D. Day",
        "P. Degtyarenko",
        "P.A.M. Dolph",
        "C. Dutta",
        "C. Ferdi",
        "C. Fernández-Ramírez",
        "R. Feuerbach",
        "L.M. Fraile",
        "G. Franklin",
        "S. Frullani",
        "S. Fuchs",
        "F. Garibaldi",
        "N. Gevorgyan",
        "R. Gilman",
        "A. Glamazdin",
        "J. Gomez",
        "K. Grimm",
        "J.-O. Hansen",
        "J.L. Herraiz",
        "D.W. Higinbotham",
        "R. Holmes",
        "T. Holmstrom",
        "D. Howell",
        "C.W. de Jager",
        "X. Jiang",
        "M.K. Jones",
        "J. Katich",
        "L.J. Kaufman",
        "M. Khandaker",
        "J.J. Kelly",
        "D. Kiselev",
        "W. Korsch",
        "J. LeRose",
        "R. Lindgren",
        "P. Markowitz",
        "D.J. Margaziotis",
        "S. May-Tal Beck",
        "S. Mayilyan",
        "K. McCormick",
        "Z.-E. Meziani",
        "R. Michaels",
        "B. Moffit",
        "S. Nanda",
        "V. Nelyubin",
        "T. Ngo",
        "D.M. Nikolenko",
        "B. Norum",
        "L. Pentchev",
        "C.F. Perdrisat",
        "E. Piasetzky",
        "R. Pomatsalyuk",
        "D. Protopopescu",
        "A.J.R. Puckett",
        "V.A. Punjabi",
        "X. Qian",
        "Y. Qiang",
        "B. Quinn",
        "I. Rachek",
        "R.D. Ransome",
        "P.E. Reimer",
        "B. Reitz",
        "J. Roche",
        "G. Ron",
        "O. Rondon",
        "G. Rosner",
        "A. Saha",
        "M.M. Sargsian",
        "B. Sawatzky",
        "J. Segal",
        "M. Shabestari",
        "A. Shahinyan",
        "Yu. Shestakov",
        "J. Singh",
        "S. Širca",
        "P. Souder",
        "S. Stepanyan",
        "V. Stibunov",
        "V. Sulkosky",
        "S. Tajima",
        "W.A. Tobias",
        "J.M. Udias",
        "G.M. Urciuoli",
        "B. Vlahovic",
        "H. Voskanyan",
        "K. Wang",
        "F.R. Wesselmann",
        "J.R. Vignote",
        "S.A. Wood",
        "J. Wright",
        "H. Yao",
        "X. Zhu"
      ],
      "year": 2010,
      "doi": "10.1103/PhysRevLett.105.262302",
      "url": "https://arxiv.org/pdf/1008.1738v2",
      "path": null,
      "sha256": null,
      "review": {
        "extent": "full-primary-author-report",
        "locators": [
          "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        ],
        "limit": "The complete five-page arXiv version 2 of 2 November 2010 was read, with Equations 1-2 and Tables I-III visually inspected. Publisher PDF bytes were not read. The current arXiv abstract retains earlier GE values; the reviewed v2 Table III supplies the admitted values. The UNED mirror is byte-identical to the author PDF, not publisher-PDF verification. The regenerated footer date is not the archive date. Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation. The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      }
    },
    {
      "id": "lachniet2009-data",
      "kind": "research-dataset",
      "title": "CLAS E111M1 combined normalized neutron magnetic response table",
      "authors": [
        "J. Lachniet",
        "CLAS Collaboration"
      ],
      "year": 2009,
      "doi": null,
      "url": "https://clas.sinp.msu.ru/cgi-bin/jlab/msm.cgi?text=on&eid=111&mid=1",
      "path": "references/canonical/data/lachniet2009-e111m1.tsv",
      "sha256": "1a624c5e49f39334dbd331dda4470e0a7a9de5e48c5cb85051149db9ba0d7129",
      "review": {
        "extent": "complete-selected-table",
        "locators": [
          "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows"
        ],
        "limit": "The 26 table centers span Q2=0.9848-4.7727 GeV2, within the paper's rounded 1.0-4.8 range. Error columns are absolute errors of the normalized response, not percentages, independent draws or a supplied cross-Q2 covariance. The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance. The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded. Downloaded 2 October 2026 from the CLAS collaborator mirror linked by the JLab physics database. Original CRLF bytes, headers and attribution are unchanged. No explicit open-content license is declared in this selected source file."
      }
    },
    {
      "id": "lachniet2009-data-description",
      "kind": "research-dataset",
      "title": "CLAS E111M1 quantity definition and measurement-page metadata",
      "authors": [
        "CLAS Collaboration"
      ],
      "year": 2009,
      "doi": null,
      "url": "https://clas.sinp.msu.ru/cgi-bin/jlab/msm.cgi?eid=111&mid=1&data=on",
      "path": "references/canonical/data/lachniet2009-e111m1-description.html",
      "sha256": "c6c251614e94b6f994d9dd75ecf720e80d16badd90f4454ba9f43732f23a2e48",
      "review": {
        "extent": "complete-selected-source-page",
        "locators": [
          "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        ],
        "limit": "The unchanged measurement page defines GMn_reduced and names E5, its spokespersons and associated publication. It is not a new experiment or a verified covariance release. Original text, source markup and attribution are retained; no additional redistribution license is asserted. The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance."
      }
    },
    {
      "id": "lachniet2009-figure-source",
      "kind": "research-dataset",
      "title": "Lachniet arXiv v2 Figure 3 vector source",
      "authors": [
        "J. Lachniet",
        "CLAS Collaboration"
      ],
      "year": 2009,
      "doi": null,
      "url": "https://arxiv.org/src/0811.1716v2",
      "path": "references/canonical/data/lachniet2009-v2-figure3.eps",
      "sha256": "fb819bd18ce5f7116d8396ec707dffb63c7ab060e7d030da4bf9dc8aea987bdb",
      "review": {
        "extent": "selected-primary-figure-source",
        "locators": [
          "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path"
        ],
        "limit": "Unchanged gmn_resultsabove1GeV2e.eps from the versioned author archive. The finite check reads labeled-axis integer coordinates and the selected band path without executing PostScript. Attribution remains with the authors; archive access does not establish a separate open-content license. The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance. The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded."
      }
    },
    {
      "id": "neutron-form-factor-verifier",
      "kind": "executable-check",
      "title": "Finite neutron form-factor source and printed-arithmetic verifier",
      "authors": [
        "Onto2D contributors"
      ],
      "year": 2026,
      "doi": null,
      "url": null,
      "path": "models/causal-emergence/canonical/verify-neutron-form-factor.py",
      "sha256": "355119dd963402a9d9e689e285cda0bfa55d24768b3b48b22e31d6790ac8fc5f",
      "review": {
        "extent": "scoped-executable-replay",
        "locators": [
          "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics"
        ],
        "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment. Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm. Table II mixture diagnostics establish only the insufficiency of that simplified calculation, not a demonstrated error in the paper."
      }
    }
  ],
  "claims": [
    {
      "id": "D-phys-neutron-sachs-ratio",
      "kind": "review-finding",
      "statement": "In the one-photon framework the unpolarized neutron response contains GE_n^2 and GM_n^2, while Riordan defines gn=mu_n*GE_n/GM_n for the polarized response. CLAS tabulates GM_n/(mu_n*GD), with GD=(1+Q2/(0.71 GeV2))^-2. These are different normalized quantities; gn is not the magnetic g factor.",
      "scope": "Finite checks of the selected CLAS table/final figure and Riordan v2 printed quantities; source identity, normalization and display-precision arithmetic without full experimental or computational reproduction.",
      "status": "definition",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ]
    },
    {
      "id": "M-phys-lachniet2009-acquisition-context",
      "kind": "method",
      "statement": "Measure deuterium neutron/proton quasielastic coincidences at 2.6 and 4.2 GeV; use the simultaneous hydrogen target for detection-efficiency calibration and EC/TOF neutron detection with matched acceptance cuts.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "R depends on beam energy and electron kinematics as well as Q2; equal-Q2 ratios at 2.6 and 4.2 GeV are not required to agree. Figure 1 supplies reported corrected ratios, but no numeric R table is bound in this admission."
      ],
      "contextIds": [
        "lachniet2009-acquisition"
      ]
    },
    {
      "id": "M-phys-lachniet2009-extraction-context",
      "kind": "method",
      "statement": "Interpret corrected deuterium ratios through Equation 1 with adopted proton and neutron electric responses, AV18/PWIA/Glauber nuclear corrections and a separate Fermi-motion acceptance correction; combine overlapping EC/TOF and energy settings.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The magnetic extraction adopts the Arrington proton cross section and a neutron electric-response model. Arrington/Bosted and Galster/Lomon differences assess input sensitivity; no Bernauer dataset is substituted and the reviewed text does not identify a unique nominal GEn parameterization.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment."
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "M-phys-riordan2010-acquisition-context",
      "kind": "method",
      "statement": "Prepare polarized electrons and a polarized 3He gas target with N2 admixture; measure coincidence helicity yields and beam/target polarizations, then form the reported charge- and polarization-normalized Ameas.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Ameas is already normalized by measured beam and target polarizations and averages the parallel/antiparallel target settings statistically. It is an observable of a prepared 3He target, not a raw count, an isolated free-neutron asymmetry or an independent corrected Aen result.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "contextIds": [
        "riordan2010-acquisition"
      ]
    },
    {
      "id": "M-phys-riordan2010-extraction-context",
      "kind": "method",
      "statement": "Apply the declared target, accidental, inelastic and proton-background treatment, compare corrected neutron asymmetries with GEA/AV18 calculations, and convert the inferred normalized ratio to GE using external linearly interpolated CLAS GMn.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The corrected Aen endpoints reuse the same Ameas acquisition. N2 dilution, accidental and inelastic backgrounds, proton charge exchange and modeled proton asymmetry enter the correction. Table II lists only the most important effects; a simplified algebraic mixture is not the complete reported correction pipeline.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "M-phys-neutron-form-factor-replay-context",
      "kind": "method",
      "statement": "Check exact selected-source bytes and table census, final vector-plot identity, Table III quadrature and normalization arithmetic, and interpolation compatibility under printed rounding; preserve explicit discrepancy diagnostics.",
      "scope": "Finite checks of the selected CLAS table/final figure and Riordan v2 printed quantities; source identity, normalization and display-precision arithmetic without full experimental or computational reproduction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "neutron-form-factor-verifier",
          "locator": "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded."
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "C-phys-lachniet2009-ratios",
      "kind": "review-finding",
      "statement": "Figure 1 reports the cut- and efficiency-treated quasielastic ratio R=sigma[d(e,e'n)p]/sigma[d(e,e'p)n] separately for 2.6 and 4.2 GeV, combining EC/TOF observations within each beam energy.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R depends on beam energy and electron kinematics as well as Q2; equal-Q2 ratios at 2.6 and 4.2 GeV are not required to agree. Figure 1 supplies reported corrected ratios, but no numeric R table is bound in this admission.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated."
      ],
      "contextIds": [
        "lachniet2009-acquisition"
      ]
    },
    {
      "id": "C-phys-lachniet2009-magnetic-response",
      "kind": "review-finding",
      "statement": "E111M1 releases 26 combined GMn/(mu_n*GD) values at Q2 centers 0.9848-4.7727 GeV2, with separate statistical and systematic error columns. These are original conditional inferences from corrected deuterium ratios, not free-neutron or magnetic-moment measurements.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 26 table centers span Q2=0.9848-4.7727 GeV2, within the paper's rounded 1.0-4.8 range. Error columns are absolute errors of the normalized response, not percentages, independent draws or a supplied cross-Q2 covariance.",
        "The magnetic extraction adopts the Arrington proton cross section and a neutron electric-response model. Arrington/Bosted and Galster/Lomon differences assess input sensitivity; no Bernauer dataset is substituted and the reviewed text does not identify a unique nominal GEn parameterization.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "C-phys-riordan2010-asymmetries",
      "kind": "review-finding",
      "statement": "Table II reports Ameas=-0.136, -0.134 and -0.098 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2, after the Equation 1 charge and beam/target polarization normalization. Corrected Aen endpoints are a separate computational outcome.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Ameas is already normalized by measured beam and target polarizations and averages the parallel/antiparallel target settings statistically. It is an observable of a prepared 3He target, not a raw count, an isolated free-neutron asymmetry or an independent corrected Aen result.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "contextIds": [
        "riordan2010-acquisition"
      ]
    },
    {
      "id": "C-phys-riordan2010-corrected-asymmetries",
      "kind": "review-finding",
      "statement": "Table II reports Aen|exp=-0.188, -0.175 and -0.134 after the stated dilution and background treatment of the same three measured asymmetries. Its intermediate Aphys values are -0.148, -0.145 and -0.109. These are correction stages from the same data; the final endpoints are compared with GEA calculations in the ratio extraction.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The corrected Aen endpoints reuse the same Ameas acquisition. N2 dilution, accidental and inelastic backgrounds, proton charge exchange and modeled proton asymmetry enter the correction. Table II lists only the most important effects; a simplified algebraic mixture is not the complete reported correction pipeline.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "C-phys-riordan2010-normalized-ratio",
      "kind": "review-finding",
      "statement": "Table III reports gn=mu_n*GE_n/GM_n of 0.273 +/- 0.020(stat) +/- 0.030(syst), 0.412 +/- 0.048 +/- 0.036 and 0.496 +/- 0.067 +/- 0.046 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "C-phys-riordan2010-electric-response",
      "kind": "review-finding",
      "statement": "Using linearly interpolated Lachniet GMn, Table III reports GE_n=0.0236 +/- 0.0017(stat) +/- 0.0026(syst), 0.0208 +/- 0.0024 +/- 0.0019 and 0.0147 +/- 0.0020 +/- 0.0014 at Q2=1.72, 2.48 and 3.41 GeV2.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "publication-supported",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "C-phys-neutron-form-factor-arithmetic",
      "kind": "review-finding",
      "statement": "All 26 CLAS centers match the final-v2 vector figure within one plotting unit; the three Table III uncertainty decompositions reproduce their displayed totals. Literal GMn interpolation has a first-point central rounding mismatch but overlaps the reported GE display interval when gn rounding is retained. Two endpoint systematic errors remain inconsistent with the paper's stated relative range.",
      "scope": "Finite checks of the selected CLAS table/final figure and Riordan v2 printed quantities; source identity, normalization and display-precision arithmetic without full experimental or computational reproduction.",
      "status": "analytically-checked",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "neutron-form-factor-verifier",
          "locator": "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics",
          "role": "supports",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [
        "neutron-form-factor-printed-arithmetic"
      ],
      "limitations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The Table II row-2 simplified Dt/Db/Ab calculation spans about -0.144256 to -0.142883 under displayed-input rounding and does not reproduce Aphys=-0.145. Since Table II lists only the most important corrections, this is not an established source error or a full correction replay."
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "M-phys-lachniet2009-ratios",
      "kind": "method",
      "statement": "Apply the reported detector, kinematic-selection and acceptance treatment to the simultaneous deuterium reactions; retain beam energy as a condition of R.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "R depends on beam energy and electron kinematics as well as Q2; equal-Q2 ratios at 2.6 and 4.2 GeV are not required to agree. Figure 1 supplies reported corrected ratios, but no numeric R table is bound in this admission.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated."
      ],
      "contextIds": [
        "lachniet2009-acquisition"
      ]
    },
    {
      "id": "M-phys-lachniet2009-magnetic-response",
      "kind": "method",
      "statement": "Use the squared one-photon response with adopted proton and GEn inputs and the two distinct correction treatments, then combine the overlapping method results with their stated dependence.",
      "scope": "The CLAS E5 deuterium/hydrogen quasielastic acquisition and original conditional magnetic-response extraction reported in Lachniet et al. (2009), with the selected E111M1 combined table.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The 26 table centers span Q2=0.9848-4.7727 GeV2, within the paper's rounded 1.0-4.8 range. Error columns are absolute errors of the normalized response, not percentages, independent draws or a supplied cross-Q2 covariance.",
        "The magnetic extraction adopts the Arrington proton cross section and a neutron electric-response model. Arrington/Bosted and Galster/Lomon differences assess input sensitivity; no Bernauer dataset is substituted and the reviewed text does not identify a unique nominal GEn parameterization.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "M-phys-riordan2010-asymmetries",
      "kind": "method",
      "statement": "Normalize helicity yields to beam charge and beam/target polarizations and average target settings as reported in Equation 1.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Ameas is already normalized by measured beam and target polarizations and averages the parallel/antiparallel target settings statistically. It is an observable of a prepared 3He target, not a raw count, an isolated free-neutron asymmetry or an independent corrected Aen result.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "contextIds": [
        "riordan2010-acquisition"
      ]
    },
    {
      "id": "M-phys-riordan2010-corrected-asymmetries",
      "kind": "method",
      "statement": "Transform the same measured asymmetries using the reported target dilution and accidental, inelastic and proton-background calculations; label the result as a computational correction.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The corrected Aen endpoints reuse the same Ameas acquisition. N2 dilution, accidental and inelastic backgrounds, proton charge exchange and modeled proton asymmetry enter the correction. Table II lists only the most important effects; a simplified algebraic mixture is not the complete reported correction pipeline.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "M-phys-riordan2010-normalized-ratio",
      "kind": "method",
      "statement": "Compare corrected neutron endpoints with GEA/AV18 response calculations under actual acceptance, orientation and cut assumptions; do not replace them with ideal free-neutron central-angle algebra.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "M-phys-riordan2010-electric-response",
      "kind": "method",
      "statement": "Convert the inferred normalized ratio using the external linearly interpolated Lachniet magnetic response and its declared normalization; preserve shared acquisition and external-input dependence.",
      "scope": "The Hall A E02-013 polarized-3He acquisition and original nuclear-model neutron response extraction in Riordan et al., arXiv:1008.1738v2; only the three published Table III kinematics and outcomes.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "M-phys-neutron-form-factor-arithmetic",
      "kind": "method",
      "statement": "Bind exact selected source bytes and compare finite tables, figure coordinates, uncertainty arithmetic and explicit interpolation quantities within displayed precision; retain mismatches rather than reconstructing missing events or covariance.",
      "scope": "Finite checks of the selected CLAS table/final figure and Riordan v2 printed quantities; source identity, normalization and display-precision arithmetic without full experimental or computational reproduction.",
      "status": "method-contract",
      "citations": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        },
        {
          "sourceId": "neutron-form-factor-verifier",
          "locator": "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics",
          "role": "method",
          "note": "Supports only the stated source quantity, preparation, conditional interpretation or finite check."
        }
      ],
      "checkIds": [],
      "limitations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The Table II row-2 simplified Dt/Db/Ab calculation spans about -0.144256 to -0.142883 under displayed-input rounding and does not reproduce Aphys=-0.145. Since Table II lists only the most important corrections, this is not an established source error or a full correction replay."
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    }
  ],
  "studies": [
    {
      "id": "lachniet2009-acquisition",
      "sourceId": "lachniet2009",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.102.192001",
      "journal": "Physical Review Letters",
      "volume": "102",
      "issue": "19",
      "pages": "192001",
      "system": "CLAS dual-target quasielastic preparation",
      "preparation": "Measure deuterium neutron/proton quasielastic coincidences at 2.6 and 4.2 GeV; use the simultaneous hydrogen target for detection-efficiency calibration and EC/TOF neutron detection with matched acceptance cuts.",
      "observable": "Corrected quasielastic neutron/proton ratios at two beam energies.",
      "finding": "The reported Figure 1 ratios depend on energy as well as Q2; no numeric R table is bound.",
      "limitations": [
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "R depends on beam energy and electron kinematics as well as Q2; equal-Q2 ratios at 2.6 and 4.2 GeV are not required to agree. Figure 1 supplies reported corrected ratios, but no numeric R table is bound in this admission."
      ],
      "readExtent": "full-primary-report-and-author-version",
      "reviewedLocators": [
        "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
        "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/0811.1716v2",
      "correctionCheck": "The specified primary versions and selected data were reviewed. Source conflicts are retained; exhaustive later correction searches and upstream instrument reconstruction are not claimed."
    },
    {
      "id": "lachniet2009-extraction",
      "sourceId": "lachniet2009",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.102.192001",
      "journal": "Physical Review Letters",
      "volume": "102",
      "issue": "19",
      "pages": "192001",
      "system": "CLAS conditional magnetic-response extraction",
      "preparation": "Interpret corrected deuterium ratios through Equation 1 with adopted proton and neutron electric responses, AV18/PWIA/Glauber nuclear corrections and a separate Fermi-motion acceptance correction; combine overlapping EC/TOF and energy settings.",
      "observable": "Conditional combined GMn/(mu_n*GD) and separate errors.",
      "finding": "The 26 released values are inferred with adopted response and nuclear/acceptance inputs; the highest-Q2 systematic range discrepancy remains explicit.",
      "limitations": [
        "The magnetic extraction adopts the Arrington proton cross section and a neutron electric-response model. Arrington/Bosted and Galster/Lomon differences assess input sensitivity; no Bernauer dataset is substituted and the reviewed text does not identify a unique nominal GEn parameterization.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment."
      ],
      "readExtent": "full-primary-report-and-author-version",
      "reviewedLocators": [
        "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response",
        "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction",
        "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/0811.1716v2",
      "correctionCheck": "The specified primary versions and selected data were reviewed. Source conflicts are retained; exhaustive later correction searches and upstream instrument reconstruction are not claimed."
    },
    {
      "id": "riordan2010-acquisition",
      "sourceId": "riordan2010",
      "studyType": "primary-experiment",
      "doi": "10.1103/PhysRevLett.105.262302",
      "journal": "Physical Review Letters",
      "volume": "105",
      "issue": "26",
      "pages": "262302",
      "system": "Hall A polarized-3He preparation",
      "preparation": "Prepare polarized electrons and a polarized 3He gas target with N2 admixture; measure coincidence helicity yields and beam/target polarizations, then form the reported charge- and polarization-normalized Ameas.",
      "observable": "Three polarization-normalized Ameas observations in prepared polarized 3He.",
      "finding": "Table II gives Ameas=-0.136,-0.134,-0.098 before the separately represented correction outcome.",
      "limitations": [
        "Ameas is already normalized by measured beam and target polarizations and averages the parallel/antiparallel target settings statistically. It is an observable of a prepared 3He target, not a raw count, an isolated free-neutron asymmetry or an independent corrected Aen result.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
        "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1008.1738v2",
      "correctionCheck": "The specified primary versions and selected data were reviewed. Source conflicts are retained; exhaustive later correction searches and upstream instrument reconstruction are not claimed."
    },
    {
      "id": "riordan2010-extraction",
      "sourceId": "riordan2010",
      "studyType": "computational-analysis",
      "doi": "10.1103/PhysRevLett.105.262302",
      "journal": "Physical Review Letters",
      "volume": "105",
      "issue": "26",
      "pages": "262302",
      "system": "Polarized-3He correction and neutron-response extraction",
      "preparation": "Apply the declared target, accidental, inelastic and proton-background treatment, compare corrected neutron asymmetries with GEA/AV18 calculations, and convert the inferred normalized ratio to GE using external linearly interpolated CLAS GMn.",
      "observable": "Corrected neutron endpoints, normalized gn and conditional GE at three acceptance means.",
      "finding": "The original GEA-based extraction and external CLAS conversion report Table III; these are dependent outcomes from the same Hall A acquisition.",
      "limitations": [
        "The corrected Aen endpoints reuse the same Ameas acquisition. N2 dilution, accidental and inelastic backgrounds, proton charge exchange and modeled proton asymmetry enter the correction. Table II lists only the most important effects; a simplified algebraic mixture is not the complete reported correction pipeline.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "readExtent": "full-primary-author-report",
      "reviewedLocators": [
        "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry",
        "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints",
        "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate",
        "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": "https://arxiv.org/abs/1008.1738v2",
      "correctionCheck": "The specified primary versions and selected data were reviewed. Source conflicts are retained; exhaustive later correction searches and upstream instrument reconstruction are not claimed."
    },
    {
      "id": "neutron-form-factor-replay",
      "sourceId": "neutron-form-factor-verifier",
      "studyType": "computational-analysis",
      "doi": null,
      "journal": null,
      "volume": null,
      "issue": "",
      "pages": null,
      "system": "Finite neutron-response verification procedure",
      "preparation": "Check exact selected-source bytes and table census, final vector-plot identity, Table III quadrature and normalization arithmetic, and interpolation compatibility under printed rounding; preserve explicit discrepancy diagnostics.",
      "observable": "Finite source identity, uncertainty decomposition, normalization and discrepancy diagnostics.",
      "finding": "The selected checks pass within their declared rounding scope and preserve the endpoint-systematic and central-interpolation conflicts.",
      "limitations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded."
      ],
      "readExtent": "scoped-executable-replay",
      "reviewedLocators": [
        "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics"
      ],
      "metadataCheckedAt": "2026-10-02",
      "metadataUrl": null,
      "correctionCheck": "The pinned local executable and selected inputs were checked; no journal publication is claimed for this local derivation."
    }
  ],
  "comparisons": [
    {
      "id": "lachniet2009-ratios",
      "candidate": "The reported ratio is a corrected, energy-conditioned deuterium observable.",
      "alternative": "At the same Q2, ratios from different energies must coincide or are raw free-neutron counts.",
      "discriminator": "Apply the reported detector, kinematic-selection and acceptance treatment to the simultaneous deuterium reactions; retain beam energy as a condition of R.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "R depends on beam energy and electron kinematics as well as Q2; equal-Q2 ratios at 2.6 and 4.2 GeV are not required to agree. Figure 1 supplies reported corrected ratios, but no numeric R table is bound in this admission.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated."
      ],
      "sourceIds": [
        "lachniet2009"
      ],
      "claimIds": [
        "C-phys-lachniet2009-ratios"
      ]
    },
    {
      "id": "lachniet2009-magnetic-response",
      "candidate": "The selected table supports conditional neutron magnetic response under declared external and nuclear inputs.",
      "alternative": "The table independently measures a magnetic sign or all its rows satisfy the prose systematic range.",
      "discriminator": "Use the squared one-photon response with adopted proton and GEn inputs and the two distinct correction treatments, then combine the overlapping method results with their stated dependence.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "The 26 table centers span Q2=0.9848-4.7727 GeV2, within the paper's rounded 1.0-4.8 range. Error columns are absolute errors of the normalized response, not percentages, independent draws or a supplied cross-Q2 covariance.",
        "The magnetic extraction adopts the Arrington proton cross section and a neutron electric-response model. Arrington/Bosted and Galster/Lomon differences assess input sensitivity; no Bernauer dataset is substituted and the reviewed text does not identify a unique nominal GEn parameterization.",
        "The deuteron a-factor correction calculated with AV18/PWIA and Glauber final-state interactions is reported below 0.1%; the distinct Fermi-motion acceptance correction multiplies the extracted GMn by roughly 0.9-1.3. These magnitudes must not be conflated.",
        "The EC/TOF and two-energy combinations share acquisition, calibration and model inputs and have semi-independent systematic uncertainties; no four fully independent experiments or full covariance matrix is supplied by the 26 combined rows.",
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The public CLAS mirror links an older arXiv-v1 publication attachment. Its 26 response centers agree with the final arXiv-v2 Figure 3 vector coordinates within integer plotting precision; this does not recover unrounded fit inputs or authenticate an unprovided covariance.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "sourceIds": [
        "lachniet2009",
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source"
      ],
      "claimIds": [
        "C-phys-lachniet2009-magnetic-response"
      ]
    },
    {
      "id": "riordan2010-asymmetries",
      "candidate": "The three Ameas values are polarization-normalized measurements of the prepared 3He reaction.",
      "alternative": "Ameas already is an isolated-neutron corrected endpoint.",
      "discriminator": "Normalize helicity yields to beam charge and beam/target polarizations and average target settings as reported in Equation 1.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "Ameas is already normalized by measured beam and target polarizations and averages the parallel/antiparallel target settings statistically. It is an observable of a prepared 3He target, not a raw count, an isolated free-neutron asymmetry or an independent corrected Aen result.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions."
      ],
      "sourceIds": [
        "riordan2010"
      ],
      "claimIds": [
        "C-phys-riordan2010-asymmetries"
      ]
    },
    {
      "id": "riordan2010-corrected-asymmetries",
      "candidate": "The corrected endpoints are computations from the same Ameas observations.",
      "alternative": "The corrected endpoints are three new independent measurements.",
      "discriminator": "Transform the same measured asymmetries using the reported target dilution and accidental, inelastic and proton-background calculations; label the result as a computational correction.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "The corrected Aen endpoints reuse the same Ameas acquisition. N2 dilution, accidental and inelastic backgrounds, proton charge exchange and modeled proton asymmetry enter the correction. Table II lists only the most important effects; a simplified algebraic mixture is not the complete reported correction pipeline.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ],
      "sourceIds": [
        "riordan2010"
      ],
      "claimIds": [
        "C-phys-riordan2010-corrected-asymmetries"
      ]
    },
    {
      "id": "riordan2010-normalized-ratio",
      "candidate": "The declared nuclear model supports the reported normalized ratio inference.",
      "alternative": "Central-angle free-neutron algebra replaces the GEA/AV18 extraction or gn means magnetic g factor.",
      "discriminator": "Compare corrected neutron endpoints with GEA/AV18 response calculations under actual acceptance, orientation and cut assumptions; do not replace them with ideal free-neutron central-angle algebra.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "Lachniet uses the squared one-photon response, so the cross section alone does not determine the sign of GMn. The adopted magnetic-moment normalization is an input; neither these data nor the normalized gn variable remeasure the neutron magnetic g factor or magnetic moment.",
        "The original ratio inference compares corrected endpoints with GEA calculations using an AV18 3He wave function, spin-dependent final-state interactions, meson-exchange currents, acceptance, cuts and target orientation. The stated 2% model-accuracy estimate cites a private communication; the computational implementation is not supplied here.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "sourceIds": [
        "riordan2010"
      ],
      "claimIds": [
        "C-phys-riordan2010-normalized-ratio"
      ]
    },
    {
      "id": "riordan2010-electric-response",
      "candidate": "The electric response is conditional on both the same Hall A ratio and external CLAS magnetic input.",
      "alternative": "GE independently confirms gn or uses Kelly rather than the Table III Lachniet magnetic input.",
      "discriminator": "Convert the inferred normalized ratio using the external linearly interpolated Lachniet magnetic response and its declared normalization; preserve shared acquisition and external-input dependence.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "The reported gn and GE values reuse the same Hall A data and nuclear extraction. GE additionally depends on external CLAS GMn; they are not independent confirmations of each other. No full covariance or independent external-reference calibration is reconstructed.",
        "Riordan uses Kelly nucleon responses within nuclear calculations and other fitted/model plots, whereas Table III explicitly uses linearly interpolated Lachniet GMn for the final GE conversion. The initial admission excludes the 13-point Galster fit, flavor separation and transverse-density interpretation.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The three Q2 values 1.72, 2.48 and 3.41 GeV2 are acceptance means. Table I widths 0.14, 0.18 and 0.22 GeV2 are RMS acceptance widths, not standard errors of those means or three monochromatic acquisitions.",
        "These finite-Q2 responses do not establish a static three-dimensional density, a unique pion-cloud mechanism, a literal constituent count, hadronization dynamics, nuclear binding or universal stability. A nonzero GE at finite Q2 does not assign a nonzero net neutron charge at Q2=0."
      ],
      "sourceIds": [
        "riordan2010",
        "lachniet2009",
        "lachniet2009-data",
        "lachniet2009-data-description"
      ],
      "claimIds": [
        "C-phys-riordan2010-electric-response"
      ]
    },
    {
      "id": "neutron-form-factor-arithmetic",
      "candidate": "The bounded source and rounding checks reproduce their declared identities while preserving explicit mismatches.",
      "alternative": "Printed centers establish the exact interpolation algorithm, a full correction replay or a repaired endpoint covariance.",
      "discriminator": "Bind exact selected source bytes and compare finite tables, figure coordinates, uncertainty arithmetic and explicit interpolation quantities within displayed precision; retain mismatches rather than reconstructing missing events or covariance.",
      "result": "conditional-support",
      "limit": "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
      "assumptions": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment.",
        "The last two released absolute systematic errors are 0.014 in GMn/(mu_n*GD) units, about 1.26% and 1.28% of their responses. The final-v2 offset band also has approximately this height, conflicting with the prose range 1.7-2.5%. The discrepancy remains unresolved; no error values are repaired or discarded.",
        "Literal interpolation of GMn requires undoing the source-point dipole normalization before interpolation. Printed central inputs give GE=0.0236563393 at 1.72 GeV2, rounding to 0.0237 rather than reported 0.0236; the gn display-rounding interval alone overlaps the reported GE bin. Interpolating the reduced ratio first gives a different central value and is not asserted to be the published algorithm.",
        "At 2.48 and 3.41 GeV2 the corresponding literal central conversions are 0.0208016977 and 0.0146813677, compatible with displayed GE. These three interpolation neighborhoods do not include the two highest-Q2 rows with the unresolved systematic-range discrepancy.",
        "The Table II row-2 simplified Dt/Db/Ab calculation spans about -0.144256 to -0.142883 under displayed-input rounding and does not reproduce Aphys=-0.145. Since Table II lists only the most important corrections, this is not an established source error or a full correction replay."
      ],
      "sourceIds": [
        "lachniet2009",
        "riordan2010",
        "lachniet2009-data",
        "lachniet2009-data-description",
        "lachniet2009-figure-source",
        "neutron-form-factor-verifier"
      ],
      "claimIds": [
        "C-phys-neutron-form-factor-arithmetic"
      ]
    }
  ],
  "entities": [
    {
      "id": "phys:neutron-sachs-ratio",
      "name": "Neutron Sachs response and normalized electric/magnetic ratio",
      "kind": "definition",
      "description": "In the one-photon framework the unpolarized neutron response contains GE_n^2 and GM_n^2, while Riordan defines gn=mu_n*GE_n/GM_n for the polarized response. CLAS tabulates GM_n/(mu_n*GD), with GD=(1+Q2/(0.71 GeV2))^-2. These are different normalized quantities; gn is not the magnetic g factor.",
      "claimIds": [
        "D-phys-neutron-sachs-ratio"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:lachniet2009-acquisition-context",
      "name": "CLAS dual-target quasielastic preparation",
      "kind": "context",
      "description": "Measure deuterium neutron/proton quasielastic coincidences at 2.6 and 4.2 GeV; use the simultaneous hydrogen target for detection-efficiency calibration and EC/TOF neutron detection with matched acceptance cuts.",
      "claimIds": [
        "M-phys-lachniet2009-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:lachniet2009-extraction-context",
      "name": "CLAS conditional magnetic-response extraction",
      "kind": "context",
      "description": "Interpret corrected deuterium ratios through Equation 1 with adopted proton and neutron electric responses, AV18/PWIA/Glauber nuclear corrections and a separate Fermi-motion acceptance correction; combine overlapping EC/TOF and energy settings.",
      "claimIds": [
        "M-phys-lachniet2009-extraction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:riordan2010-acquisition-context",
      "name": "Hall A polarized-3He preparation",
      "kind": "context",
      "description": "Prepare polarized electrons and a polarized 3He gas target with N2 admixture; measure coincidence helicity yields and beam/target polarizations, then form the reported charge- and polarization-normalized Ameas.",
      "claimIds": [
        "M-phys-riordan2010-acquisition-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:riordan2010-extraction-context",
      "name": "Polarized-3He correction and neutron-response extraction",
      "kind": "context",
      "description": "Apply the declared target, accidental, inelastic and proton-background treatment, compare corrected neutron asymmetries with GEA/AV18 calculations, and convert the inferred normalized ratio to GE using external linearly interpolated CLAS GMn.",
      "claimIds": [
        "M-phys-riordan2010-extraction-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:neutron-form-factor-replay-context",
      "name": "Finite neutron-response verification procedure",
      "kind": "context",
      "description": "Check exact selected-source bytes and table census, final vector-plot identity, Table III quadrature and normalization arithmetic, and interpolation compatibility under printed rounding; preserve explicit discrepancy diagnostics.",
      "claimIds": [
        "M-phys-neutron-form-factor-replay-context"
      ],
      "status": "definition",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows"
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path"
        },
        {
          "sourceId": "neutron-form-factor-verifier",
          "locator": "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics"
        }
      ],
      "openObligations": [
        "Keep the declared quantity, preparation and inference boundaries explicit."
      ]
    },
    {
      "id": "phys:lachniet2009-ratios",
      "name": "Corrected deuterium neutron/proton ratios",
      "kind": "scoped-process",
      "description": "Figure 1 reports the cut- and efficiency-treated quasielastic ratio R=sigma[d(e,e'n)p]/sigma[d(e,e'p)n] separately for 2.6 and 4.2 GeV, combining EC/TOF observations within each beam energy.",
      "claimIds": [
        "C-phys-lachniet2009-ratios"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:lachniet2009-magnetic-response",
      "name": "CLAS combined neutron magnetic response",
      "kind": "scoped-process",
      "description": "E111M1 releases 26 combined GMn/(mu_n*GD) values at Q2 centers 0.9848-4.7727 GeV2, with separate statistical and systematic error columns. These are original conditional inferences from corrected deuterium ratios, not free-neutron or magnetic-moment measurements.",
      "claimIds": [
        "C-phys-lachniet2009-magnetic-response"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows"
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:riordan2010-asymmetries",
      "name": "Measured polarized-3He helicity asymmetries",
      "kind": "scoped-process",
      "description": "Table II reports Ameas=-0.136, -0.134 and -0.098 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2, after the Equation 1 charge and beam/target polarization normalization. Corrected Aen endpoints are a separate computational outcome.",
      "claimIds": [
        "C-phys-riordan2010-asymmetries"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:riordan2010-corrected-asymmetries",
      "name": "Corrected neutron-asymmetry endpoints",
      "kind": "scoped-process",
      "description": "Table II reports Aen|exp=-0.188, -0.175 and -0.134 after the stated dilution and background treatment of the same three measured asymmetries. Its intermediate Aphys values are -0.148, -0.145 and -0.109. These are correction stages from the same data; the final endpoints are compared with GEA calculations in the ratio extraction.",
      "claimIds": [
        "C-phys-riordan2010-corrected-asymmetries"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:riordan2010-normalized-ratio",
      "name": "Inferred normalized neutron Sachs ratios",
      "kind": "scoped-process",
      "description": "Table III reports gn=mu_n*GE_n/GM_n of 0.273 +/- 0.020(stat) +/- 0.030(syst), 0.412 +/- 0.048 +/- 0.036 and 0.496 +/- 0.067 +/- 0.046 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2.",
      "claimIds": [
        "C-phys-riordan2010-normalized-ratio"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:riordan2010-electric-response",
      "name": "Conditional neutron electric response",
      "kind": "scoped-process",
      "description": "Using linearly interpolated Lachniet GMn, Table III reports GE_n=0.0236 +/- 0.0017(stat) +/- 0.0026(syst), 0.0208 +/- 0.0024 +/- 0.0019 and 0.0147 +/- 0.0020 +/- 0.0014 at Q2=1.72, 2.48 and 3.41 GeV2.",
      "claimIds": [
        "C-phys-riordan2010-electric-response"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows"
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    },
    {
      "id": "phys:neutron-form-factor-arithmetic",
      "name": "Finite neutron-response source and arithmetic findings",
      "kind": "scoped-process",
      "description": "All 26 CLAS centers match the final-v2 vector figure within one plotting unit; the three Table III uncertainty decompositions reproduce their displayed totals. Literal GMn interpolation has a first-point central rounding mismatch but overlaps the reported GE display interval when gn rounding is retained. Two endpoint systematic errors remain inconsistent with the paper's stated relative range.",
      "claimIds": [
        "C-phys-neutron-form-factor-arithmetic"
      ],
      "status": "evidence-scoped",
      "level": 1,
      "sourceCoordinates": [
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-2 to 192001-3 and arXiv:0811.1716v2 pages 2-3, Equation 1: dipole normalization, corrected deuterium ratio, adopted proton response and conditional squared neutron response"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-3 to 192001-4 and arXiv:0811.1716v2 pages 3-4, Figure 1 and Table I: dual targets, two beam energies, EC/TOF calibration, nuclear correction and separate Fermi acceptance correction"
        },
        {
          "sourceId": "lachniet2009",
          "locator": "Physical Review Letters 102, 192001-4 to 192001-5 and arXiv:0811.1716v2 pages 4-5, Figures 2-3: semi-independent combinations, combined normalized magnetic response and stated systematic range"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 1-3, Table I and Equation 1: polarized 3He preparation, acceptance-mean Q2 with RMS widths and polarization-normalized helicity asymmetry"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 pages 3-4, Equation 2 and Table II: ideal free-neutron asymmetry relation and reported dilution/background-corrected neutron endpoints"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 4 and page 5 References 21-25: MAID backgrounds, GEA/AV18 nuclear extraction, spin-dependent final-state interactions, meson-exchange currents, Kelly inputs and private model-accuracy estimate"
        },
        {
          "sourceId": "riordan2010",
          "locator": "arXiv:1008.1738v2 page 5, Table III and Reference 35: normalized gn ratios, conditional electric response using linearly interpolated Lachniet GMn and separate uncertainty components"
        },
        {
          "sourceId": "lachniet2009-data",
          "locator": "E111M1 unchanged tab-delimited download: eight header lines and all 26 Q2, GMn_reduced, statistical-error and systematic-error rows"
        },
        {
          "sourceId": "lachniet2009-data-description",
          "locator": "E111M1 unchanged measurement page: quantity definition GMn/(mu_n*GD), E5 attribution, publication identity and 26-row data table"
        },
        {
          "sourceId": "lachniet2009-figure-source",
          "locator": "arXiv:0811.1716v2 source member gmn_resultsabove1GeV2e.eps: Figure 3 labeled axes, 26 unique CLAS marker coordinates and offset systematic-band path"
        },
        {
          "sourceId": "neutron-form-factor-verifier",
          "locator": "verify(): pinned CLAS table/definition/final-figure identity, Riordan Table III quadrature and normalization arithmetic, interpolation rounding compatibility and explicit discrepancy diagnostics"
        }
      ],
      "openObligations": [
        "The finite check does not reproduce raw event selection, efficiencies, acceptance simulation, GEA or other nuclear calculations, the full asymmetry correction, fitted response, interpolation implementation or cross-point covariance. Source matching and arithmetic agreement are narrower than reproduction of the reported experiment."
      ]
    }
  ],
  "relations": [
    {
      "id": "physics:lachniet-acquisition-ratios",
      "source": "phys:lachniet2009-acquisition-context",
      "target": "phys:lachniet2009-ratios",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The declared acquisition and efficiency/acceptance preparation support the reported corrected R.",
      "claimIds": [
        "M-phys-lachniet2009-ratios"
      ],
      "contextIds": [
        "lachniet2009-acquisition"
      ]
    },
    {
      "id": "physics:lachniet-context-ratios",
      "source": "phys:lachniet2009-extraction-context",
      "target": "phys:lachniet2009-ratios",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The released ratio inherits cut-dependent acceptance and nuclear treatment; it is not an unprocessed free-neutron count.",
      "claimIds": [
        "M-phys-lachniet2009-ratios"
      ],
      "contextIds": [
        "lachniet2009-acquisition"
      ]
    },
    {
      "id": "physics:lachniet-ratios-magnetic",
      "source": "phys:lachniet2009-ratios",
      "target": "phys:lachniet2009-magnetic-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Corrected R supplies the acquisition-dependent input to the conditional magnetic extraction.",
      "claimIds": [
        "M-phys-lachniet2009-magnetic-response"
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "physics:lachniet-context-magnetic",
      "source": "phys:lachniet2009-extraction-context",
      "target": "phys:lachniet2009-magnetic-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Adopted proton/GEn response and nuclear/acceptance models condition the inferred GMn.",
      "claimIds": [
        "M-phys-lachniet2009-magnetic-response"
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "physics:neutron-definition-magnetic",
      "source": "phys:neutron-sachs-ratio",
      "target": "phys:lachniet2009-magnetic-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The squared-response equation and normalized table convention do not independently determine the magnetic sign.",
      "claimIds": [
        "M-phys-lachniet2009-magnetic-response"
      ],
      "contextIds": [
        "lachniet2009-extraction"
      ]
    },
    {
      "id": "physics:riordan-acquisition-asymmetries",
      "source": "phys:riordan2010-acquisition-context",
      "target": "phys:riordan2010-asymmetries",
      "kind": "descriptive",
      "role": "measurement-context",
      "assertion": "The prepared target, helicity yields and polarization normalization support the measured Ameas outcome.",
      "claimIds": [
        "M-phys-riordan2010-asymmetries"
      ],
      "contextIds": [
        "riordan2010-acquisition"
      ]
    },
    {
      "id": "physics:riordan-asymmetries-corrected",
      "source": "phys:riordan2010-asymmetries",
      "target": "phys:riordan2010-corrected-asymmetries",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected endpoints transform the same Ameas acquisition; they are not additional independent measurements.",
      "claimIds": [
        "M-phys-riordan2010-corrected-asymmetries"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:riordan-context-corrected-asymmetries",
      "source": "phys:riordan2010-extraction-context",
      "target": "phys:riordan2010-corrected-asymmetries",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared dilution and modeled background treatment is required for the reported corrected Aen endpoints.",
      "claimIds": [
        "M-phys-riordan2010-corrected-asymmetries"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:riordan-corrected-asymmetries-ratio",
      "source": "phys:riordan2010-corrected-asymmetries",
      "target": "phys:riordan2010-normalized-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The corrected endpoints are compared with GEA calculations to infer the normalized Sachs ratio.",
      "claimIds": [
        "M-phys-riordan2010-normalized-ratio"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:riordan-context-ratio",
      "source": "phys:riordan2010-extraction-context",
      "target": "phys:riordan2010-normalized-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "GEA/AV18, target orientation and acceptance assumptions condition the inferred ratio.",
      "claimIds": [
        "M-phys-riordan2010-normalized-ratio"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:neutron-definition-ratio",
      "source": "phys:neutron-sachs-ratio",
      "target": "phys:riordan2010-normalized-ratio",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The normalized gn variable means mu_n*GE_n/GM_n rather than the neutron magnetic g factor.",
      "claimIds": [
        "M-phys-riordan2010-normalized-ratio"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:riordan-ratio-electric",
      "source": "phys:riordan2010-normalized-ratio",
      "target": "phys:riordan2010-electric-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The electric response reuses the same inferred Hall A ratio and acquisition.",
      "claimIds": [
        "M-phys-riordan2010-electric-response"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:lachniet-magnetic-riordan-electric",
      "source": "phys:lachniet2009-magnetic-response",
      "target": "phys:riordan2010-electric-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "External interpolated CLAS GMn supplies the conditional magnetic scale for GE_n.",
      "claimIds": [
        "M-phys-riordan2010-electric-response"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:riordan-context-electric",
      "source": "phys:riordan2010-extraction-context",
      "target": "phys:riordan2010-electric-response",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The declared original conversion and reference conventions condition the published electric response.",
      "claimIds": [
        "M-phys-riordan2010-electric-response"
      ],
      "contextIds": [
        "riordan2010-extraction"
      ]
    },
    {
      "id": "physics:lachniet-magnetic-arithmetic",
      "source": "phys:lachniet2009-magnetic-response",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The released normalized magnetic table supplies finite inputs to the source-identity and conversion checks.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "physics:riordan-ratio-arithmetic",
      "source": "phys:riordan2010-normalized-ratio",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The printed ratio and uncertainty components supply the finite arithmetic inputs.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "physics:riordan-electric-arithmetic",
      "source": "phys:riordan2010-electric-response",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The reported conditional GE values are comparison targets, not independent data.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "physics:riordan-asymmetries-arithmetic",
      "source": "phys:riordan2010-asymmetries",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Measured Ameas and the reported dilution/background inputs supply the bounded Table II diagnostic; no full correction replay follows.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "physics:riordan-corrected-asymmetries-arithmetic",
      "source": "phys:riordan2010-corrected-asymmetries",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "Reported corrected-stage values, including Aphys, supply comparison targets for the partial-correction diagnostic, not additional independent observations.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    },
    {
      "id": "physics:neutron-replay-arithmetic",
      "source": "phys:neutron-form-factor-replay-context",
      "target": "phys:neutron-form-factor-arithmetic",
      "kind": "descriptive",
      "role": "interpretation-dependency",
      "assertion": "The local executable supports only its explicit source and printed-arithmetic scope.",
      "claimIds": [
        "M-phys-neutron-form-factor-arithmetic"
      ],
      "contextIds": [
        "neutron-form-factor-replay"
      ]
    }
  ],
  "readiness": [
    {
      "nodeId": "phys:neutron-sachs-ratio",
      "role": "definition",
      "denotes": "In the one-photon framework the unpolarized neutron response contains GE_n^2 and GM_n^2, while Riordan defines gn=mu_n*GE_n/GM_n for the polarized response. CLAS tabulates GM_n/(mu_n*GD), with GD=(1+Q2/(0.71 GeV2))^-2. These are different normalized quantities; gn is not the magnetic g factor.",
      "instanceAdmission": "none",
      "claimIds": [
        "D-phys-neutron-sachs-ratio"
      ]
    },
    {
      "nodeId": "phys:lachniet2009-acquisition-context",
      "role": "experimental-context",
      "denotes": "Measure deuterium neutron/proton quasielastic coincidences at 2.6 and 4.2 GeV; use the simultaneous hydrogen target for detection-efficiency calibration and EC/TOF neutron detection with matched acceptance cuts.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lachniet2009-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:lachniet2009-extraction-context",
      "role": "model-context",
      "denotes": "Interpret corrected deuterium ratios through Equation 1 with adopted proton and neutron electric responses, AV18/PWIA/Glauber nuclear corrections and a separate Fermi-motion acceptance correction; combine overlapping EC/TOF and energy settings.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-lachniet2009-extraction-context"
      ]
    },
    {
      "nodeId": "phys:riordan2010-acquisition-context",
      "role": "experimental-context",
      "denotes": "Prepare polarized electrons and a polarized 3He gas target with N2 admixture; measure coincidence helicity yields and beam/target polarizations, then form the reported charge- and polarization-normalized Ameas.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-riordan2010-acquisition-context"
      ]
    },
    {
      "nodeId": "phys:riordan2010-extraction-context",
      "role": "model-context",
      "denotes": "Apply the declared target, accidental, inelastic and proton-background treatment, compare corrected neutron asymmetries with GEA/AV18 calculations, and convert the inferred normalized ratio to GE using external linearly interpolated CLAS GMn.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-riordan2010-extraction-context"
      ]
    },
    {
      "nodeId": "phys:neutron-form-factor-replay-context",
      "role": "model-context",
      "denotes": "Check exact selected-source bytes and table census, final vector-plot identity, Table III quadrature and normalization arithmetic, and interpolation compatibility under printed rounding; preserve explicit discrepancy diagnostics.",
      "instanceAdmission": "none",
      "claimIds": [
        "M-phys-neutron-form-factor-replay-context"
      ]
    },
    {
      "nodeId": "phys:lachniet2009-ratios",
      "role": "scoped-phenomenon",
      "denotes": "Figure 1 reports the cut- and efficiency-treated quasielastic ratio R=sigma[d(e,e'n)p]/sigma[d(e,e'p)n] separately for 2.6 and 4.2 GeV, combining EC/TOF observations within each beam energy.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lachniet2009-ratios"
      ]
    },
    {
      "nodeId": "phys:lachniet2009-magnetic-response",
      "role": "scoped-phenomenon",
      "denotes": "E111M1 releases 26 combined GMn/(mu_n*GD) values at Q2 centers 0.9848-4.7727 GeV2, with separate statistical and systematic error columns. These are original conditional inferences from corrected deuterium ratios, not free-neutron or magnetic-moment measurements.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-lachniet2009-magnetic-response"
      ]
    },
    {
      "nodeId": "phys:riordan2010-asymmetries",
      "role": "scoped-phenomenon",
      "denotes": "Table II reports Ameas=-0.136, -0.134 and -0.098 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2, after the Equation 1 charge and beam/target polarization normalization. Corrected Aen endpoints are a separate computational outcome.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-riordan2010-asymmetries"
      ]
    },
    {
      "nodeId": "phys:riordan2010-corrected-asymmetries",
      "role": "scoped-phenomenon",
      "denotes": "Table II reports Aen|exp=-0.188, -0.175 and -0.134 after the stated dilution and background treatment of the same three measured asymmetries. Its intermediate Aphys values are -0.148, -0.145 and -0.109. These are correction stages from the same data; the final endpoints are compared with GEA calculations in the ratio extraction.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-riordan2010-corrected-asymmetries"
      ]
    },
    {
      "nodeId": "phys:riordan2010-normalized-ratio",
      "role": "scoped-phenomenon",
      "denotes": "Table III reports gn=mu_n*GE_n/GM_n of 0.273 +/- 0.020(stat) +/- 0.030(syst), 0.412 +/- 0.048 +/- 0.036 and 0.496 +/- 0.067 +/- 0.046 at acceptance-mean Q2=1.72, 2.48 and 3.41 GeV2.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-riordan2010-normalized-ratio"
      ]
    },
    {
      "nodeId": "phys:riordan2010-electric-response",
      "role": "scoped-phenomenon",
      "denotes": "Using linearly interpolated Lachniet GMn, Table III reports GE_n=0.0236 +/- 0.0017(stat) +/- 0.0026(syst), 0.0208 +/- 0.0024 +/- 0.0019 and 0.0147 +/- 0.0020 +/- 0.0014 at Q2=1.72, 2.48 and 3.41 GeV2.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-riordan2010-electric-response"
      ]
    },
    {
      "nodeId": "phys:neutron-form-factor-arithmetic",
      "role": "scoped-phenomenon",
      "denotes": "All 26 CLAS centers match the final-v2 vector figure within one plotting unit; the three Table III uncertainty decompositions reproduce their displayed totals. Literal GMn interpolation has a first-point central rounding mismatch but overlaps the reported GE display interval when gn rounding is retained. Two endpoint systematic errors remain inconsistent with the paper's stated relative range.",
      "instanceAdmission": "none",
      "claimIds": [
        "C-phys-neutron-form-factor-arithmetic"
      ]
    }
  ]
};

/** Preserve measured/corrected roles, adopted response and finite-check limits. */
export function validateNeutronFormFactorContracts(context) {
  for (const [kind, expectedRecords] of Object.entries(contracts)) {
    const actual = kind === "readiness" ? new Map(context.readiness.nodeRoles.map((r) => [r.nodeId, r])) : context[kind];
    for (const expected of expectedRecords) {
      const id = kind === "readiness" ? expected.nodeId : expected.id;
      const found = actual.get(id);
      assert.ok(found, `Missing neutron form-factor ${kind}: ${id}`);
      for (const [key, value] of Object.entries(expected)) {
        assert.deepEqual(found[key], value, `Neutron form-factor ${kind} changed ${id}.${key}: preserve normalization, version and inference scope`);
      }
    }
  }
}
