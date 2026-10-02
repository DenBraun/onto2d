import assert from "node:assert/strict";

export const ALPHA_GAMMA_CHECKS = new Map([["alpha-gamma-printed-arithmetic", "C-phys-alpha-gamma-arithmetic"]]);

export const ALPHA_GAMMA_ADMISSION = {
  "definitions": [
    [
      "phys:alpha-gamma-transfer",
      "D-phys-alpha-gamma-transfer"
    ],
    [
      "phys:normalized-monitor-response",
      "D-phys-normalized-monitor-response"
    ]
  ],
  "formalDependencies": [
    [
      "physics:beam-ratio-alpha-gamma-transfer",
      [
        "phys:beam-decay-ratio",
        "phys:alpha-gamma-transfer"
      ]
    ],
    [
      "physics:alpha-gamma-normalized-response",
      [
        "phys:alpha-gamma-transfer",
        "phys:normalized-monitor-response"
      ]
    ]
  ],
  "contexts": [
    [
      "yue2011-source-context",
      "M-phys-yue2011-source-context",
      [
        "yue2011-source"
      ]
    ],
    [
      "yue2018-transfer-context",
      "M-phys-yue2018-transfer-context",
      [
        "yue2018-transfer"
      ]
    ],
    [
      "yue2018-normalization-context",
      "M-phys-yue2018-normalization-context",
      [
        "yue2018-normalization"
      ]
    ],
    [
      "alpha-gamma-replay-context",
      "M-phys-alpha-gamma-replay-context",
      [
        "alpha-gamma-replay"
      ]
    ]
  ],
  "observations": [
    [
      "yue2011-source-activity",
      "C-phys-yue2011-source-activity",
      [
        "yue2011-source"
      ]
    ],
    [
      "yue2018-source-activity",
      "C-phys-yue2018-source-activity",
      [
        "yue2018-transfer"
      ]
    ],
    [
      "yue2018-monitor-efficiency",
      "C-phys-yue2018-monitor-efficiency",
      [
        "yue2018-normalization"
      ]
    ],
    [
      "alpha-gamma-arithmetic",
      "C-phys-alpha-gamma-arithmetic",
      [
        "alpha-gamma-replay"
      ]
    ]
  ],
  "dependencies": [
    [
      "yue2011-source-context-yue2011-source-activity",
      "yue2011-source-context",
      "yue2011-source-activity",
      "M-phys-yue2011-source-context",
      "measurement-context"
    ],
    [
      "yue2018-transfer-context-yue2018-source-activity",
      "yue2018-transfer-context",
      "yue2018-source-activity",
      "M-phys-yue2018-transfer-context",
      "measurement-context"
    ],
    [
      "alpha-gamma-transfer-yue2018-monitor-efficiency",
      "alpha-gamma-transfer",
      "yue2018-monitor-efficiency",
      "M-phys-yue2018-monitor-efficiency",
      "interpretation-dependency"
    ],
    [
      "normalized-monitor-response-yue2018-monitor-efficiency",
      "normalized-monitor-response",
      "yue2018-monitor-efficiency",
      "M-phys-yue2018-monitor-efficiency",
      "interpretation-dependency"
    ],
    [
      "yue2018-source-activity-yue2018-monitor-efficiency",
      "yue2018-source-activity",
      "yue2018-monitor-efficiency",
      "M-phys-yue2018-monitor-efficiency",
      "interpretation-dependency"
    ],
    [
      "yue2018-transfer-context-yue2018-monitor-efficiency",
      "yue2018-transfer-context",
      "yue2018-monitor-efficiency",
      "M-phys-yue2018-monitor-efficiency",
      "interpretation-dependency"
    ],
    [
      "yue2018-normalization-context-yue2018-monitor-efficiency",
      "yue2018-normalization-context",
      "yue2018-monitor-efficiency",
      "M-phys-yue2018-monitor-efficiency",
      "interpretation-dependency"
    ],
    [
      "yue2011-source-activity-alpha-gamma-arithmetic",
      "yue2011-source-activity",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ],
    [
      "alpha-gamma-transfer-alpha-gamma-arithmetic",
      "alpha-gamma-transfer",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ],
    [
      "normalized-monitor-response-alpha-gamma-arithmetic",
      "normalized-monitor-response",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ],
    [
      "yue2018-source-activity-alpha-gamma-arithmetic",
      "yue2018-source-activity",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ],
    [
      "alpha-gamma-replay-context-alpha-gamma-arithmetic",
      "alpha-gamma-replay-context",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ],
    [
      "yue2018-monitor-efficiency-alpha-gamma-arithmetic",
      "yue2018-monitor-efficiency",
      "alpha-gamma-arithmetic",
      "M-phys-alpha-gamma-arithmetic",
      "interpretation-dependency"
    ]
  ],
  "studyIds": [
    "yue2011-source",
    "yue2018-transfer",
    "yue2018-normalization",
    "alpha-gamma-replay"
  ],
  "comparisonIds": [
    "yue2018-monitor-efficiency",
    "alpha-gamma-arithmetic"
  ],
  "inferenceSources": [
    [
      "C-phys-yue2018-monitor-efficiency",
      [
        "yue2011-thesis",
        "yue2013"
      ]
    ],
    [
      "C-phys-alpha-gamma-arithmetic",
      [
        "yue2018",
        "alpha-gamma-verifier"
      ]
    ],
    [
      "M-phys-yue2018-monitor-efficiency",
      [
        "yue2011-thesis",
        "yue2013"
      ]
    ],
    [
      "M-phys-alpha-gamma-arithmetic",
      [
        "yue2018",
        "alpha-gamma-verifier"
      ]
    ],
    [
      "M-phys-alpha-gamma-replay-context",
      [
        "yue2018",
        "alpha-gamma-verifier"
      ]
    ]
  ]
};

const limits = [
  "The ideal transfer identity uses R_Pu=r_Pu,stack/Omega_stack, Omega_AG=r_Pu,AG/R_Pu and R_n=r_gamma,thick*r_alpha,thin/(r_gamma,thin*Omega_AG). The boron gamma branching fraction and thin-target absorption normalization cancel only with the stated common detector response and loss corrections. Omega here is a fraction of 4*pi; illuminated alpha-detector area is assumed fully efficient. R_Pu denotes total alpha emission from the source, including its minor 240Pu/241Am contributions, not a separately isolated pure-239Pu decay rate.",
  "The idealized epsilon_0(0,0) is the monitor counting efficiency for an infinitesimally narrow beam striking the deposit center at the 2200 m/s reference speed. Conversion from the monochromatic response uses lambda_0/lambda_mono under the inverse-velocity assumption. Finite beam profile, target absorption and self-shielding corrections separate this quantity from an uncorrected measured count ratio. Both alpha and triton capture products contribute; this is not a neutron survival probability.",
  "The thesis and detailed article describe the calibration associated with the earlier beam-lifetime monitor, not new neutron-lifetime acquisitions. The thesis Table 7.1 lists 27 runs from June-December 2010; the 2018 text repeats that range, while Figure 22 includes a March 2011 point. The exact mapping of runs, ancillary measurements and revised analysis across the 2011 thesis, 2013 lifetime update and 2018 article remains unresolved.",
  "The thesis uses two spacer configurations and the Cu-Cu-1 aperture, diameter 25.6725+/-0.0030 mm. The 2018 article reports a nickel-coated copper aperture of 25.765192+/-0.000240 mm and source distance 87.4226+/-0.0015 mm, with different alpha rates and activity. Their reported source calibrations cannot be substituted or averaged as independent determinations of an identically specified preparation. No cross-version correction or physical source-aging estimate is established.",
  "The thesis separates uncorrelated stacking/counting errors from a common aperture error. Body page 92 gives 0.023 percent, while Appendix B page 150 prints a correlated fraction of 2.3e-5. The latter differs by a factor of ten. Both printed scenarios remain explicit; the body convention reproduces the reported total uncertainty to displayed precision, without establishing which unrounded inputs or implementation were used.",
  "The printed thesis stack estimates 23543.9+/-8.4 and 23545.6+/-5.2 per second give a weighted mean of 23545.129016... per second and uncorrelated uncertainty 4.421378... per second. That central calculation rounds to 23545.1, not the reported 23545.2. A conservative box for rounding of the printed inputs permits values rounding to the reported mean; it does not recover the original digits or prove their values.",
  "The 2018 article reports the corrected alpha count rate 125.740 per second and effective Omega_stack=0.0053415, followed by R_Pu=23538.4 per second. Their printed central quotient is 23540.204... per second, and display-rounding intervals do not include the reported activity center. Additional input or correction reconciliation is unresolved. This is a failure to reconstruct the printed result from those displayed inputs, not evidence that the experimental numerical analysis is wrong.",
  "The beam analysis uses timed beam-on minus beam-off rates, the geometric mean of top and bottom gamma-detector rates, and thin-target/thick-target/thin-target cycles to suppress first-order gamma-efficiency drift. Gamma backgrounds, thresholds, pulse pileup, dead time and silicon-capture contributions remain explicit corrections; a count-rate ratio is not a raw absolute neutron count.",
  "Within-campaign gamma-detector drift controls are distinct from the long-term 6Li-deposit and aperture stability assumptions needed to transfer a later calibration to the 2000-2001 lifetime acquisition. The thesis Chapter 8 treated that transfer as unresolved; the separately reviewed 2013 update adopts its stated temporal-stability model. No deposit-loss posterior or historical transfer is independently reproduced here.",
  "Cancellation of nuclear normalization inputs in the ideal rate identity does not eliminate nuclear data from every correction. The detailed article uses neutron scattering/absorption inputs, radiative-capture cross sections, material attenuation and modeled neutron/gamma transport. Its remaining upstream nuclear data, image records and simulation implementations are not independently reproduced.",
  "The wavelength is inferred from silicon Bragg measurements on the same beam, including a lambda/2 component correction. Unexplained angle excursions are retained and the wavelength uncertainty uses a conservative observed spread, rather than only the uncertainty of the weighted centroid. The wavelength fit and transport simulations are not replayed.",
  "The 27 reported calibration points span three collimations and two gamma detectors with common and configuration-specific corrections. The article describes Gaussian variation of correction inputs followed by weighted constant fits. These points, detector channels and publications do not supply independent replications of the calibration standard; full correction covariance, exact grouping and analysis code are not recovered from printed tables.",
  "Equation 28 in the 2018 article omits the factor 1/2 required to invert Equation 12, which counts both alpha and triton products. Equation 26 defines phi_abs as an absorbed fraction near 0.01016, but the later text labels the transmission correction 0.989846 as phi_abs. These printed formula/notation conflicts are retained; no claim is made that the numerical implementation followed them.",
  "The thesis reports epsilon_0^AG=(3.1116+/-0.0016)e-5, the 2013 lifetime paper uses (3.1098+/-0.0017)e-5, and the detailed 2018 article reports idealized epsilon_0(0,0)=(3.1101+/-0.0018)e-5. Source-specific normalization, metrology, corrections and aggregation must be reconciled before substitution. No new lifetime is calculated from the 2018 value and these reports are not averaged.",
  "The local verifier checks an ideal rate-transfer witness, both printed thesis common-error conventions and a conservative rounding envelope, the 2018 printed source-activity quotient, and Equation 12-based absorption/transmission/self-shielding against the literal Equation 28. Agreement of the latter corrections is only within quoted uncertainty, not an exact reconstruction of the article iteration. The final reported monitor efficiency is an input to that attenuation check, not its reproduced output; the ideal transfer witness uses synthetic rates, not acquired counts. It does not reconstruct acquisition, spectral selection, geometry metrology, absolute calibration, detector response, correction covariance, temporal stability, the 27-point efficiency fit or a neutron lifetime.",
  "Alpha-source activity, monitor count efficiency and a neutron-decay lifetime are different quantities. None establishes nucleon formation, eternal proton stability, a universal constituent minimum or a unique explanation of beam/bottle differences."
];

const sourcesContracts = [
  {
    "id": "yue2011-thesis",
    "kind": "research-publication",
    "title": "Progress Towards a Redetermination of the Neutron Lifetime Through the Absolute Determination of Neutron Flux",
    "authors": [
      "Andrew T. Yue"
    ],
    "year": 2011,
    "doi": null,
    "url": "https://trace.tennessee.edu/server/api/core/bitstreams/9551719b-c489-42d7-a477-594ee978e837/content",
    "path": null,
    "review": {
      "extent": "selected-primary-dissertation-passages",
      "locators": [
        "Dissertation printed pages 90-93, Sections 5.3-5.4: source 49Si-3-3, two counting stacks, common aperture uncertainty, reported activity and internal alpha calibration",
        "Dissertation printed pages 119-130, Chapters 7-8 and Tables 7.1-7.5: calibration runs, corrections, reported efficiency, metrology changes and unresolved historical transfer",
        "Dissertation printed pages 147-151, Appendix B and Equations B.1-B.8: corrected source counts, uncorrelated stack errors, weighted combination and conflicting correlated fraction"
      ],
      "limit": "The university-hosted dissertation title page and the specified source-calibration, result, transfer and Appendix B passages were read. Body page 92 and Appendix B page 150 distinguish the conflicting correlated-error fractions; the latter was visually checked. This is a primary doctoral dissertation, not a peer-reviewed journal article. Raw spectra, metrology records, correction simulations and original code were not recovered. Other thesis chapters are not admitted as reviewed evidence."
    }
  },
  {
    "id": "yue2018",
    "kind": "research-publication",
    "title": "Precision determination of absolute neutron flux",
    "authors": [
      "A. T. Yue",
      "E. S. Anderson",
      "M. S. Dewey",
      "D. M. Gilliam",
      "G. L. Greene",
      "A. B. Laptev",
      "J. S. Nico",
      "W. M. Snow"
    ],
    "year": 2018,
    "doi": "10.1088/1681-7575/aac283",
    "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=923138",
    "path": null,
    "review": {
      "extent": "selected-primary-article-passages",
      "locators": [
        "Published pages 462-466, Sections 2-3 and Equations 1-16: absolute rate-transfer chain, detector geometry, reference-wavelength conversion and idealized central monitor response",
        "Published pages 466-469, Section 4 and Equations 17-18: calibration campaign, timed acquisition, background subtraction, geometric gamma mean and thin/thick/thin cycles",
        "Published pages 470-474, Section 5 and Figures 10-13: Bragg wavelength measurement, unresolved angle excursions and lambda/2 contamination",
        "Published pages 474-475, Section 6.1: alpha-source metrology, loss corrections, printed count rate, effective solid angle and reported absolute activity",
        "Published pages 475-482, Sections 6.2-7, Tables 1-7 and Equations 22-29: configuration-dependent corrections, shared uncertainty, normalized efficiency and printed input/formula conflicts",
        "Published pages 481-483, Sections 7-8 and Figure 22: calibration-point dates, weighted result, correction randomization and relation to the earlier lifetime monitor"
      ],
      "limit": "The NIST-hosted published article was read for the stated calibration, acquisition, wavelength, corrections and result passages. Equations 10-15 and 26-29, the source-activity passages and Figure 22 were visually checked on published pages 464-465, 474-475 and 481-482. The article and NIST record identify publication on 8 June 2018. Raw files, numerical fits, complete shared covariance and upstream calibration/nuclear-data implementations were not independently reproduced. Printed conflicts remain separate from the reported experimental results."
    }
  },
  {
    "id": "alpha-gamma-verifier",
    "kind": "executable-check",
    "title": "Printed AlphaGamma calibration arithmetic verifier",
    "authors": [
      "Onto2D contributors"
    ],
    "year": 2026,
    "doi": null,
    "url": null,
    "path": "models/causal-emergence/canonical/verify-alpha-gamma.py",
    "review": {
      "extent": "scoped-executable-replay",
      "locators": [
        "verify(): formal count-rate transfer, printed source-activity combination, rounding bounds and explicitly separated source conventions"
      ],
      "limit": "The local verifier checks an ideal rate-transfer witness, both printed thesis common-error conventions and a conservative rounding envelope, the 2018 printed source-activity quotient, and Equation 12-based absorption/transmission/self-shielding against the literal Equation 28. Agreement of the latter corrections is only within quoted uncertainty, not an exact reconstruction of the article iteration. The final reported monitor efficiency is an input to that attenuation check, not its reproduced output; the ideal transfer witness uses synthetic rates, not acquired counts. It does not reconstruct acquisition, spectral selection, geometry metrology, absolute calibration, detector response, correction covariance, temporal stability, the 27-point efficiency fit or a neutron lifetime."
    }
  }
];

const claimsContracts = [
  {
    "id": "D-phys-alpha-gamma-transfer",
    "statement": "In the ideal AlphaGamma transfer, a calibrated alpha source fixes Omega_AG=r_Pu,AG/R_Pu. A thin boron target transfers that calibration to the gamma response, giving R_n=r_gamma,thick*r_alpha,thin/(r_gamma,thin*Omega_AG) for the totally absorbing target.",
    "limits": [
      0,
      7,
      9,
      15
    ],
    "sourceIds": [
      "yue2018"
    ]
  },
  {
    "id": "D-phys-normalized-monitor-response",
    "statement": "The idealized monitor response epsilon_0(0,0) refers to a central pointlike beam at the 2200 m/s convention. Under inverse-velocity response, epsilon_0=epsilon_mono*lambda_0/lambda_mono before the stated spatial and finite-target normalization.",
    "limits": [
      1,
      9,
      12,
      13,
      15
    ],
    "sourceIds": [
      "yue2018"
    ]
  },
  {
    "id": "M-phys-yue2011-source-context",
    "statement": "Measure the alpha source with two spacer configurations sharing the Cu-Cu-1 aperture; correct counting losses and combine the source rates with uncorrelated stack errors and a common aperture contribution.",
    "limits": [
      3,
      4,
      5,
      15
    ],
    "sourceIds": [
      "yue2011-thesis"
    ]
  },
  {
    "id": "M-phys-yue2018-transfer-context",
    "statement": "Use the article-specific alpha-source metrology, thin/thick/thin boron counting cycles and timed background-subtracted detector rates to establish the neutron-monitor transfer on the NG-6m beam.",
    "limits": [
      0,
      2,
      3,
      6,
      7,
      8,
      9,
      10,
      15
    ],
    "sourceIds": [
      "yue2018"
    ]
  },
  {
    "id": "M-phys-yue2018-normalization-context",
    "statement": "Normalize the measured monitor ratios to a central thermal beam using configuration-dependent detector, transport and target corrections; fit the reported calibration points while propagating common correction uncertainties.",
    "limits": [
      0,
      1,
      2,
      3,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      15
    ],
    "sourceIds": [
      "yue2018"
    ]
  },
  {
    "id": "M-phys-alpha-gamma-replay-context",
    "statement": "Evaluate the ideal rate-transfer identity, printed thesis source-activity combination and rounding envelope, 2018 printed activity quotient and Equation 12-derived target corrections, retaining conflicting source conventions.",
    "limits": [
      0,
      3,
      4,
      5,
      6,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "yue2011-thesis",
      "yue2018",
      "alpha-gamma-verifier"
    ]
  },
  {
    "id": "C-phys-yue2011-source-activity",
    "statement": "The thesis reports a total alpha-source activity of 23545.2+/-7.0 per second from its two-stack calibration. Its printed stack estimates and common-error conventions do not uniquely reproduce every reported digit.",
    "limits": [
      3,
      4,
      5,
      15
    ],
    "sourceIds": [
      "yue2011-thesis"
    ]
  },
  {
    "id": "C-phys-yue2018-source-activity",
    "statement": "The 2018 article reports R_Pu=23538.4+/-4.6 per second for its stated source-metrology preparation. That reported value remains distinct from the quotient of the displayed corrected rate and effective solid angle.",
    "limits": [
      0,
      3,
      6,
      15
    ],
    "sourceIds": [
      "yue2018"
    ]
  },
  {
    "id": "C-phys-yue2018-monitor-efficiency",
    "statement": "The detailed article reports idealized epsilon_0(0,0)=(3.1101+/-0.0018)e-5, with (3.1101+/-0.0010)e-5 from the statistical weighted fit and 5.8e-4 total relative uncertainty. This is a corrected monitor response, not an independently acquired neutron lifetime.",
    "limits": [
      0,
      1,
      2,
      3,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      15
    ],
    "sourceIds": [
      "yue2018",
      "yue2011-thesis",
      "yue2013"
    ]
  },
  {
    "id": "C-phys-alpha-gamma-arithmetic",
    "statement": "The printed thesis inputs give a weighted activity of 23545.129016... per second and uncorrelated uncertainty 4.421378... per second. The body common-error convention gives 6.99106... per second total uncertainty; the Appendix B fraction gives 4.45442... . Displayed-input rounding permits values rounding to the reported mean. The 2018 printed activity quotient is 23540.204... per second, inconsistent with the reported center even under display rounding; Equation 12-derived target corrections agree only within their quoted uncertainty.",
    "limits": [
      0,
      3,
      4,
      5,
      6,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "yue2011-thesis",
      "yue2018",
      "alpha-gamma-verifier"
    ]
  },
  {
    "id": "M-phys-yue2018-monitor-efficiency",
    "statement": "Interpret the published normalized efficiency through its own source calibration, detector and target corrections, wavelength convention and shared uncertainty, without substituting another publication's activity or lifetime input.",
    "limits": [
      0,
      1,
      2,
      3,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      15
    ],
    "sourceIds": [
      "yue2018",
      "yue2011-thesis",
      "yue2013"
    ]
  },
  {
    "id": "M-phys-alpha-gamma-arithmetic",
    "statement": "Evaluate the declared rate identities and printed source-activity inputs while retaining common-error dependence, display-rounding bounds and unresolved source conflicts.",
    "limits": [
      0,
      3,
      4,
      5,
      6,
      12,
      13,
      14,
      15
    ],
    "sourceIds": [
      "yue2011-thesis",
      "yue2018",
      "alpha-gamma-verifier"
    ]
  }
];

const studiesContracts = [
  {
    "id": "yue2011-source",
    "system": "Yue two-stack source calibration",
    "preparation": "Measure the alpha source with two spacer configurations sharing the Cu-Cu-1 aperture; correct counting losses and combine the source rates with uncorrelated stack errors and a common aperture contribution.",
    "studyType": "primary-experiment",
    "sourceId": "yue2011-thesis",
    "doi": null,
    "readExtent": "selected-primary-dissertation-passages",
    "observable": "The two-stack estimate of total alpha emission rate and its separately declared common and uncorrelated uncertainty.",
    "finding": "The thesis reports 23545.2+/-7.0 per second; its body and Appendix B use conflicting printed common-error fractions."
  },
  {
    "id": "yue2018-transfer",
    "system": "Detailed AlphaGamma measurement preparation",
    "preparation": "Use the article-specific alpha-source metrology, thin/thick/thin boron counting cycles and timed background-subtracted detector rates to establish the neutron-monitor transfer on the NG-6m beam.",
    "studyType": "primary-experiment",
    "sourceId": "yue2018",
    "doi": "10.1088/1681-7575/aac283",
    "readExtent": "selected-primary-article-passages",
    "observable": "Source and detector count rates, source activity, neutron-monitor ratios and the three-collimation calibration campaign described in the article.",
    "finding": "The reported source activity and corrected monitor response depend on the stated metrology, geometry and detector controls; no new neutron-lifetime acquisition is supplied."
  },
  {
    "id": "yue2018-normalization",
    "system": "AlphaGamma normalization and uncertainty analysis",
    "preparation": "Normalize the measured monitor ratios to a central thermal beam using configuration-dependent detector, transport and target corrections; fit the reported calibration points while propagating common correction uncertainties.",
    "studyType": "computational-analysis",
    "sourceId": "yue2018",
    "doi": "10.1088/1681-7575/aac283",
    "readExtent": "selected-primary-article-passages",
    "observable": "The idealized epsilon_0(0,0) and its reported statistical and combined uncertainty.",
    "finding": "The article reports (3.1101+/-0.0018)e-5 after its correction and uncertainty model; this is not a new measured neutron lifetime."
  },
  {
    "id": "alpha-gamma-replay",
    "system": "Printed AlphaGamma arithmetic",
    "preparation": "Evaluate the ideal rate-transfer identity, printed thesis source-activity combination and rounding envelope, 2018 printed activity quotient and Equation 12-derived target corrections, retaining conflicting source conventions.",
    "studyType": "computational-analysis",
    "sourceId": "yue2011-thesis",
    "doi": null,
    "readExtent": "selected-primary-dissertation-passages",
    "observable": "Formal algebra and bounded printed-input arithmetic, distinct from the original source and beam measurement.",
    "finding": "The formal witness and printed calculations separate consistent identities, rounded-input agreement and unreconciled source conflicts without reproducing the experimental calibration."
  }
];

const comparisonsContracts = [
  {
    "id": "yue2018-monitor-efficiency",
    "candidate": "The article supports a preparation-specific normalized monitor efficiency under its declared corrections.",
    "alternative": "The detailed report supplies an independent lifetime experiment, a correction-free neutron count or an interchangeable calibration for every publication.",
    "discriminator": "Interpret the published normalized efficiency through its own source calibration, detector and target corrections, wavelength convention and shared uncertainty, without substituting another publication's activity or lifetime input.",
    "result": "conditional-support",
    "limit": "The source-specific calibration or bounded printed arithmetic is supported only within the stated conventions; unresolved inputs and shared evidence remain explicit.",
    "assumptions": [
      "The ideal transfer identity uses R_Pu=r_Pu,stack/Omega_stack, Omega_AG=r_Pu,AG/R_Pu and R_n=r_gamma,thick*r_alpha,thin/(r_gamma,thin*Omega_AG). The boron gamma branching fraction and thin-target absorption normalization cancel only with the stated common detector response and loss corrections. Omega here is a fraction of 4*pi; illuminated alpha-detector area is assumed fully efficient. R_Pu denotes total alpha emission from the source, including its minor 240Pu/241Am contributions, not a separately isolated pure-239Pu decay rate.",
      "The idealized epsilon_0(0,0) is the monitor counting efficiency for an infinitesimally narrow beam striking the deposit center at the 2200 m/s reference speed. Conversion from the monochromatic response uses lambda_0/lambda_mono under the inverse-velocity assumption. Finite beam profile, target absorption and self-shielding corrections separate this quantity from an uncorrected measured count ratio. Both alpha and triton capture products contribute; this is not a neutron survival probability.",
      "The thesis and detailed article describe the calibration associated with the earlier beam-lifetime monitor, not new neutron-lifetime acquisitions. The thesis Table 7.1 lists 27 runs from June-December 2010; the 2018 text repeats that range, while Figure 22 includes a March 2011 point. The exact mapping of runs, ancillary measurements and revised analysis across the 2011 thesis, 2013 lifetime update and 2018 article remains unresolved.",
      "The thesis uses two spacer configurations and the Cu-Cu-1 aperture, diameter 25.6725+/-0.0030 mm. The 2018 article reports a nickel-coated copper aperture of 25.765192+/-0.000240 mm and source distance 87.4226+/-0.0015 mm, with different alpha rates and activity. Their reported source calibrations cannot be substituted or averaged as independent determinations of an identically specified preparation. No cross-version correction or physical source-aging estimate is established.",
      "The 2018 article reports the corrected alpha count rate 125.740 per second and effective Omega_stack=0.0053415, followed by R_Pu=23538.4 per second. Their printed central quotient is 23540.204... per second, and display-rounding intervals do not include the reported activity center. Additional input or correction reconciliation is unresolved. This is a failure to reconstruct the printed result from those displayed inputs, not evidence that the experimental numerical analysis is wrong.",
      "The beam analysis uses timed beam-on minus beam-off rates, the geometric mean of top and bottom gamma-detector rates, and thin-target/thick-target/thin-target cycles to suppress first-order gamma-efficiency drift. Gamma backgrounds, thresholds, pulse pileup, dead time and silicon-capture contributions remain explicit corrections; a count-rate ratio is not a raw absolute neutron count.",
      "Within-campaign gamma-detector drift controls are distinct from the long-term 6Li-deposit and aperture stability assumptions needed to transfer a later calibration to the 2000-2001 lifetime acquisition. The thesis Chapter 8 treated that transfer as unresolved; the separately reviewed 2013 update adopts its stated temporal-stability model. No deposit-loss posterior or historical transfer is independently reproduced here.",
      "Cancellation of nuclear normalization inputs in the ideal rate identity does not eliminate nuclear data from every correction. The detailed article uses neutron scattering/absorption inputs, radiative-capture cross sections, material attenuation and modeled neutron/gamma transport. Its remaining upstream nuclear data, image records and simulation implementations are not independently reproduced.",
      "The wavelength is inferred from silicon Bragg measurements on the same beam, including a lambda/2 component correction. Unexplained angle excursions are retained and the wavelength uncertainty uses a conservative observed spread, rather than only the uncertainty of the weighted centroid. The wavelength fit and transport simulations are not replayed.",
      "The 27 reported calibration points span three collimations and two gamma detectors with common and configuration-specific corrections. The article describes Gaussian variation of correction inputs followed by weighted constant fits. These points, detector channels and publications do not supply independent replications of the calibration standard; full correction covariance, exact grouping and analysis code are not recovered from printed tables.",
      "Equation 28 in the 2018 article omits the factor 1/2 required to invert Equation 12, which counts both alpha and triton products. Equation 26 defines phi_abs as an absorbed fraction near 0.01016, but the later text labels the transmission correction 0.989846 as phi_abs. These printed formula/notation conflicts are retained; no claim is made that the numerical implementation followed them.",
      "The thesis reports epsilon_0^AG=(3.1116+/-0.0016)e-5, the 2013 lifetime paper uses (3.1098+/-0.0017)e-5, and the detailed 2018 article reports idealized epsilon_0(0,0)=(3.1101+/-0.0018)e-5. Source-specific normalization, metrology, corrections and aggregation must be reconciled before substitution. No new lifetime is calculated from the 2018 value and these reports are not averaged.",
      "Alpha-source activity, monitor count efficiency and a neutron-decay lifetime are different quantities. None establishes nucleon formation, eternal proton stability, a universal constituent minimum or a unique explanation of beam/bottle differences."
    ],
    "sourceIds": [
      "yue2018",
      "yue2011-thesis",
      "yue2013"
    ],
    "claimIds": [
      "C-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "alpha-gamma-arithmetic",
    "candidate": "The printed inputs support only the stated formal and arithmetic consistency checks.",
    "alternative": "Agreement with selected printed numbers reproduces the absolute calibration, original fit, complete covariance or neutron lifetime.",
    "discriminator": "Evaluate the declared rate identities and printed source-activity inputs while retaining common-error dependence, display-rounding bounds and unresolved source conflicts.",
    "result": "conditional-support",
    "limit": "The source-specific calibration or bounded printed arithmetic is supported only within the stated conventions; unresolved inputs and shared evidence remain explicit.",
    "assumptions": [
      "The ideal transfer identity uses R_Pu=r_Pu,stack/Omega_stack, Omega_AG=r_Pu,AG/R_Pu and R_n=r_gamma,thick*r_alpha,thin/(r_gamma,thin*Omega_AG). The boron gamma branching fraction and thin-target absorption normalization cancel only with the stated common detector response and loss corrections. Omega here is a fraction of 4*pi; illuminated alpha-detector area is assumed fully efficient. R_Pu denotes total alpha emission from the source, including its minor 240Pu/241Am contributions, not a separately isolated pure-239Pu decay rate.",
      "The thesis uses two spacer configurations and the Cu-Cu-1 aperture, diameter 25.6725+/-0.0030 mm. The 2018 article reports a nickel-coated copper aperture of 25.765192+/-0.000240 mm and source distance 87.4226+/-0.0015 mm, with different alpha rates and activity. Their reported source calibrations cannot be substituted or averaged as independent determinations of an identically specified preparation. No cross-version correction or physical source-aging estimate is established.",
      "The thesis separates uncorrelated stacking/counting errors from a common aperture error. Body page 92 gives 0.023 percent, while Appendix B page 150 prints a correlated fraction of 2.3e-5. The latter differs by a factor of ten. Both printed scenarios remain explicit; the body convention reproduces the reported total uncertainty to displayed precision, without establishing which unrounded inputs or implementation were used.",
      "The printed thesis stack estimates 23543.9+/-8.4 and 23545.6+/-5.2 per second give a weighted mean of 23545.129016... per second and uncorrelated uncertainty 4.421378... per second. That central calculation rounds to 23545.1, not the reported 23545.2. A conservative box for rounding of the printed inputs permits values rounding to the reported mean; it does not recover the original digits or prove their values.",
      "The 2018 article reports the corrected alpha count rate 125.740 per second and effective Omega_stack=0.0053415, followed by R_Pu=23538.4 per second. Their printed central quotient is 23540.204... per second, and display-rounding intervals do not include the reported activity center. Additional input or correction reconciliation is unresolved. This is a failure to reconstruct the printed result from those displayed inputs, not evidence that the experimental numerical analysis is wrong.",
      "Equation 28 in the 2018 article omits the factor 1/2 required to invert Equation 12, which counts both alpha and triton products. Equation 26 defines phi_abs as an absorbed fraction near 0.01016, but the later text labels the transmission correction 0.989846 as phi_abs. These printed formula/notation conflicts are retained; no claim is made that the numerical implementation followed them.",
      "The thesis reports epsilon_0^AG=(3.1116+/-0.0016)e-5, the 2013 lifetime paper uses (3.1098+/-0.0017)e-5, and the detailed 2018 article reports idealized epsilon_0(0,0)=(3.1101+/-0.0018)e-5. Source-specific normalization, metrology, corrections and aggregation must be reconciled before substitution. No new lifetime is calculated from the 2018 value and these reports are not averaged.",
      "The local verifier checks an ideal rate-transfer witness, both printed thesis common-error conventions and a conservative rounding envelope, the 2018 printed source-activity quotient, and Equation 12-based absorption/transmission/self-shielding against the literal Equation 28. Agreement of the latter corrections is only within quoted uncertainty, not an exact reconstruction of the article iteration. The final reported monitor efficiency is an input to that attenuation check, not its reproduced output; the ideal transfer witness uses synthetic rates, not acquired counts. It does not reconstruct acquisition, spectral selection, geometry metrology, absolute calibration, detector response, correction covariance, temporal stability, the 27-point efficiency fit or a neutron lifetime.",
      "Alpha-source activity, monitor count efficiency and a neutron-decay lifetime are different quantities. None establishes nucleon formation, eternal proton stability, a universal constituent minimum or a unique explanation of beam/bottle differences."
    ],
    "sourceIds": [
      "yue2011-thesis",
      "yue2018",
      "alpha-gamma-verifier"
    ],
    "claimIds": [
      "C-phys-alpha-gamma-arithmetic"
    ]
  }
];

const relationsContracts = [
  {
    "id": "physics:beam-ratio-alpha-gamma-transfer",
    "source": "phys:beam-decay-ratio",
    "target": "phys:alpha-gamma-transfer",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The beam decay-rate ratio needs a neutron-monitor normalization; the AlphaGamma identity specifies one conditional calibration route.",
    "claimIds": [
      "D-phys-alpha-gamma-transfer"
    ]
  },
  {
    "id": "physics:alpha-gamma-normalized-response",
    "source": "phys:alpha-gamma-transfer",
    "target": "phys:normalized-monitor-response",
    "kind": "descriptive",
    "role": "definition-dependency",
    "assertion": "The absolute rate transfer supplies a measured monitor response; wavelength and geometric conventions define its idealized central thermal counterpart.",
    "claimIds": [
      "D-phys-normalized-monitor-response"
    ]
  },
  {
    "id": "physics:yue2011-source-context-yue2011-source-activity",
    "source": "phys:yue2011-source-context",
    "target": "phys:yue2011-source-activity",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The reported thesis activity comes from its two-stack preparation and shared-aperture uncertainty convention.",
    "claimIds": [
      "M-phys-yue2011-source-context"
    ]
  },
  {
    "id": "physics:yue2018-transfer-context-yue2018-source-activity",
    "source": "phys:yue2018-transfer-context",
    "target": "phys:yue2018-source-activity",
    "kind": "descriptive",
    "role": "measurement-context",
    "assertion": "The detailed article reports this activity for its own source metrology and detector corrections.",
    "claimIds": [
      "M-phys-yue2018-transfer-context"
    ]
  },
  {
    "id": "physics:alpha-gamma-transfer-yue2018-monitor-efficiency",
    "source": "phys:alpha-gamma-transfer",
    "target": "phys:yue2018-monitor-efficiency",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The corrected monitor inference uses the source-to-alpha-to-gamma rate-transfer relation under its stated response assumptions.",
    "claimIds": [
      "M-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "physics:normalized-monitor-response-yue2018-monitor-efficiency",
    "source": "phys:normalized-monitor-response",
    "target": "phys:yue2018-monitor-efficiency",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The reported result denotes a central thermal monitor efficiency, rather than an uncorrected finite-beam count ratio.",
    "claimIds": [
      "M-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "physics:yue2018-source-activity-yue2018-monitor-efficiency",
    "source": "phys:yue2018-source-activity",
    "target": "phys:yue2018-monitor-efficiency",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The detailed article uses its own reported source activity in the calibration transfer; the thesis value is not substituted.",
    "claimIds": [
      "M-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "physics:yue2018-transfer-context-yue2018-monitor-efficiency",
    "source": "phys:yue2018-transfer-context",
    "target": "phys:yue2018-monitor-efficiency",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The normalized response is inferred from the article's prepared detector and beam measurements, not from a new neutron-lifetime acquisition.",
    "claimIds": [
      "M-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "physics:yue2018-normalization-context-yue2018-monitor-efficiency",
    "source": "phys:yue2018-normalization-context",
    "target": "phys:yue2018-monitor-efficiency",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The reported efficiency includes configuration-dependent corrections and a shared uncertainty calculation.",
    "claimIds": [
      "M-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "id": "physics:yue2011-source-activity-alpha-gamma-arithmetic",
    "source": "phys:yue2011-source-activity",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The local arithmetic compares the displayed two-stack inputs with this reported activity and retains rounding and common-error limits.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  },
  {
    "id": "physics:alpha-gamma-transfer-alpha-gamma-arithmetic",
    "source": "phys:alpha-gamma-transfer",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The local verifier checks the conditional transfer algebra separately from acquired experimental rates.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  },
  {
    "id": "physics:normalized-monitor-response-alpha-gamma-arithmetic",
    "source": "phys:normalized-monitor-response",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The bounded target-correction calculation uses the Equation 12 normalization and preserves the conflicting literal Equation 28.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  },
  {
    "id": "physics:yue2018-source-activity-alpha-gamma-arithmetic",
    "source": "phys:yue2018-source-activity",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The printed-rate quotient is compared with this article-specific reported activity; their unresolved discrepancy is not replaced with a new experimental result.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  },
  {
    "id": "physics:alpha-gamma-replay-context-alpha-gamma-arithmetic",
    "source": "phys:alpha-gamma-replay-context",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The bounded local calculation supplies arithmetic consistency evidence, not experimental or calibration reproduction.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  },
  {
    "id": "physics:yue2018-monitor-efficiency-alpha-gamma-arithmetic",
    "source": "phys:yue2018-monitor-efficiency",
    "target": "phys:alpha-gamma-arithmetic",
    "kind": "descriptive",
    "role": "interpretation-dependency",
    "assertion": "The final reported monitor efficiency is an input to the bounded attenuation correction check, not a reproduced output of that check.",
    "claimIds": [
      "M-phys-alpha-gamma-arithmetic"
    ]
  }
];

const rolesContracts = [
  {
    "nodeId": "phys:alpha-gamma-transfer",
    "role": "definition",
    "denotes": "The conditional rate identity connecting an alpha-source standard to the neutron rate inferred from thin and thick boron targets.",
    "instanceAdmission": "none",
    "claimIds": [
      "D-phys-alpha-gamma-transfer"
    ]
  },
  {
    "nodeId": "phys:normalized-monitor-response",
    "role": "definition",
    "denotes": "A normalized monitor counting efficiency for a specified reference speed and idealized central beam geometry.",
    "instanceAdmission": "none",
    "claimIds": [
      "D-phys-normalized-monitor-response"
    ]
  },
  {
    "nodeId": "phys:yue2011-source-context",
    "role": "experimental-context",
    "denotes": "The thesis source-activity measurement using two spacer heights and one shared precision aperture.",
    "instanceAdmission": "none",
    "claimIds": [
      "M-phys-yue2011-source-context"
    ]
  },
  {
    "nodeId": "phys:yue2018-transfer-context",
    "role": "experimental-context",
    "denotes": "The measurement preparation reported in the detailed article, including its own source calibration and the earlier monitor campaign.",
    "instanceAdmission": "none",
    "claimIds": [
      "M-phys-yue2018-transfer-context"
    ]
  },
  {
    "nodeId": "phys:yue2018-normalization-context",
    "role": "model-context",
    "denotes": "The article's conversion of acquired monitor ratios into a normalized efficiency and a shared-error estimate.",
    "instanceAdmission": "none",
    "claimIds": [
      "M-phys-yue2018-normalization-context"
    ]
  },
  {
    "nodeId": "phys:alpha-gamma-replay-context",
    "role": "model-context",
    "denotes": "A local computation of declared identities and printed calibration inputs with source conflicts retained.",
    "instanceAdmission": "none",
    "claimIds": [
      "M-phys-alpha-gamma-replay-context"
    ]
  },
  {
    "nodeId": "phys:yue2011-source-activity",
    "role": "scoped-phenomenon",
    "denotes": "The activity reported for the thesis two-stack source calibration, retaining uncertainty and printed-input reconstruction limits.",
    "instanceAdmission": "none",
    "claimIds": [
      "C-phys-yue2011-source-activity"
    ]
  },
  {
    "nodeId": "phys:yue2018-source-activity",
    "role": "scoped-phenomenon",
    "denotes": "The alpha activity reported in the detailed article for its own source geometry and correction procedure.",
    "instanceAdmission": "none",
    "claimIds": [
      "C-phys-yue2018-source-activity"
    ]
  },
  {
    "nodeId": "phys:yue2018-monitor-efficiency",
    "role": "scoped-phenomenon",
    "denotes": "The normalized monitor efficiency inferred in the detailed article after its experiment-specific corrections and uncertainty calculation.",
    "instanceAdmission": "none",
    "claimIds": [
      "C-phys-yue2018-monitor-efficiency"
    ]
  },
  {
    "nodeId": "phys:alpha-gamma-arithmetic",
    "role": "scoped-phenomenon",
    "denotes": "The bounded local rate-identity and printed source-activity calculations, with conflicting conventions kept distinct.",
    "instanceAdmission": "none",
    "claimIds": [
      "C-phys-alpha-gamma-arithmetic"
    ]
  }
];

/** Protect calibration quantities, shared preparation and printed-source conflicts. */
export function validateAlphaGammaContracts({ sources, claims, studies, comparisons, relations, readiness }) {
  for (const expected of sourcesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(sources.get(expected.id)?.[key], value, "AlphaGamma source identity or reviewed extent changed");
  }
  for (const expected of claimsContracts) {
    const claim = claims.get(expected.id);
    assert.equal(claim?.statement, expected.statement, "AlphaGamma source activity, monitor response or arithmetic scope changed");
    for (const i of expected.limits) assert.ok(claim.limitations.includes(limits[i]), "AlphaGamma record lost a calibration, covariance or source-conflict boundary");
    for (const sourceId of expected.sourceIds) assert.ok(claim.citations.some((c) => c.sourceId === sourceId), "AlphaGamma evidence lost its source-specific input");
  }
  for (const expected of studiesContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(studies.get(expected.id)?.[key], value, "AlphaGamma measurement and calculation preparations were conflated");
  }
  for (const expected of comparisonsContracts) assert.deepEqual(comparisons.get(expected.id), expected, "Conditional calibration became independent or complete validation");
  for (const expected of relationsContracts) for (const [key, value] of Object.entries(expected)) {
    assert.deepEqual(relations.get(expected.id)?.[key], value, "AlphaGamma dependency lost its quantity or preparation meaning");
  }
  for (const expected of rolesContracts) assert.deepEqual(readiness.nodeRoles.find((r) => r.nodeId === expected.nodeId), expected, "AlphaGamma record denotation changed");
}
