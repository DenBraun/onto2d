# Source measurements

Marco et al. (2020) supplies the unchanged publisher
[Supplementary Table 8](41593_2020_717_MOESM9_ESM.xlsx), linked through
[the publication](https://doi.org/10.1038/s41593-020-00717-0). The graph cites
`Basal_vs_Early!A1:G93`, `Early_vs_Late!A1:G975` and
`Late_vs_Reactivated!A1:G517`. The first and third comparisons retain their
opposite fold-change/statistic signs and the third retains its near-threshold
Cox7b2 row. Counts and source-cell checks do not establish contrast direction
or reproduce the sequencing pipeline.

Su et al. (2017) supplies unchanged publisher workbooks
[Supplementary Table 4](41593_2017_BFnn4494_MOESM61_ESM.xlsx) and
[Supplementary Table 5](41593_2017_BFnn4494_MOESM62_ESM.xlsx), linked through
[the publication](https://doi.org/10.1038/nn.4494). The graph cites explicit
worksheet ranges for chromatin-region lists and RNA comparisons. Conflicting
24-hour headers, the repeated header row, nonfinite values and Excel errors
remain in the original bytes. Their meaning and limits are described with the
source records; no sequencing-pipeline reproduction is claimed.

Source records in [graph.json](../graph.json) bind local files by SHA-256 and
identify the reviewed passages or cell ranges. Numerical values retain the
measurement and replication limits of their original experiments.

## Selected reactor-antineutrino energies

[kamland2005-selected-energies.dat](kamland2005-selected-energies.dat) and
[kamland2005-description.html](kamland2005-description.html) preserve the
unchanged numeric list and official description from the
[KamLAND second-result release](https://www.awa.tohoku.ac.jp/KamLAND/datarelease/2ndresult.html).
Attribution: KamLAND Collaboration, *Measurement of Neutrino Oscillation with
KamLAND: Evidence of Spectral Distortion*,
[Physical Review Letters 94, 081801 (2005)](https://doi.org/10.1103/PhysRevLett.94.081801).
The inspected description declares no additional open-content license;
these source assets do not acquire the project's software license.

The list contains 258 sorted, rounded prompt energies in MeV, including
positron annihilation energy. Repeated values are retained. The
[verifier](../../../models/causal-emergence/canonical/verify-neutrino.py)
checks both files' bytes, energy summaries and printed central arithmetic,
with separate synthetic phase examples. The files do not supply raw detector
records, reactor histories, response covariance or a reproduced likelihood.
The linked background-shape and chi-squared files are outside this extraction.

## Printed pion-decay correction inputs

The [PIENU verifier](../../../models/causal-emergence/canonical/verify-pion-decay.py)
contains the selected printed values from Table I of the
[versioned author manuscript](https://arxiv.org/pdf/1506.05845v2), published
as [Physical Review Letters 115, 071801 (2015)](https://doi.org/10.1103/PhysRevLett.115.071801).
It keeps ratio coefficients in units of `10^-4` distinct from dimensionless
correction factors. This is a local transcription, not an author data release.

The exact central product rounds to the reported result. Display-rounding
bounds and synthetic exposure/efficiency checks do not reconstruct the
experimental timing fit, auxiliary calibration, tail-bound combination or
uncertainty covariance. The publication's energy/time figures are not digitized
or represented as event-level data.

## Printed electron-moment and effective-alpha inputs

The [electron-moment verifier](../../../models/causal-emergence/canonical/verify-electron-moment.py)
and [effective-alpha verifier](../../../models/causal-emergence/canonical/verify-vacuum-polarization.py)
declare their selected printed inputs and synthetic witnesses in code. They
are local calculations, not released detector tables or event data. The
electron spectra, correlated cavity response, L3 angular fractions and
likelihood are not reconstructed. L3's historical zero-momentum reference
remains an adopted input to its own convention.

## Finite family and scattering witnesses

The [baryon-family verifier](../../../models/causal-emergence/canonical/verify-hadron-family.py)
checks supplied flavor weights, synthetic mass-relation identities and printed
historical mass spacing. The [meson-family verifier](../../../models/causal-emergence/canonical/verify-meson-family.py)
checks trace projectors, synthetic cascade-response identities and printed
background subtraction. Neither reconstructs particle discovery, physical
mixing, an experimental transition ratio or hadron formation.

The [scattering verifier](../../../models/causal-emergence/canonical/verify-virtual-process.py)
uses synthetic rational momenta with conserved four-momentum and on-shell
external legs. Its spacelike transfer, forward boundary and Lorentz-invariant
checks do not calculate a QED amplitude, loop integral or measured event.
These executable sources contain no released detector dataset.

## Proton elastic form-factor tables

The [versioned author archive](https://arxiv.org/src/1307.6227v2) for Bernauer
et al., *The electric and magnetic form factors of the proton*,
[Physical Review C 90, 015206](https://doi.org/10.1103/PhysRevC.90.015206),
supplies these unchanged members:

| Local file | Archive member | Scope |
| --- | --- | --- |
| [Cross-section ratios](bernauer2014-cross-sections.dat) | `aux/CrossSections/CrossSections.dat` | 1422 corrected, spline-normalized ratios with scaled point errors and shared normalization identifiers |
| [Rosenbluth values](bernauer2014-rosenbluth.dat) | `aux/Rosenbluth/Rosenbluth.dat` | 77 unconstrained pairs and four additional constrained electric-form-factor ranges |
| [Mainz-only spline](bernauer2014-mainz-spline.dat) | `aux/fits/MainzOnly/Spline.dat` | 1000 fitted grid evaluations with separate pointwise bands |
| [Author column description](bernauer2014-ancillary-description.pdf) | `aux/explanation.pdf` | Five-page description dated 24 March 2014 |

The [verifier](../../../models/causal-emergence/canonical/verify-bernauer-data.py)
checks byte identity, finite-table conventions and normalized form-factor
identities. The spline stores `GM/mu_p`; the Rosenbluth table stores `GM`.
Constrained electric ranges are not paired with magnetic assumptions by endpoint
and are not ordinary confidence intervals. Multiplying by the cross-section
table's column 9 undoes the Coulomb correction. The central angle is descriptive;
kinematics use the acceptance-averaged momentum transfer.

The reports reuse the 2006-2007 acquisition, and the separated values reuse
spline-fit normalization. Pointwise bands do not supply independent observations
or full covariance. The Table IV Friedrich-Walcher parameter-count arithmetic
does not reproduce its printed reduced chi-square within display rounding;
the discrepancy remains explicit. No raw acquisition, acceptance simulation,
optimization, covariance or radius extraction is reproduced.

## Deuteron and molecular-ion figure tables

[Figure 3](rau2020-fig3.xlsx), [Extended Data Figure 1](rau2020-edfig1.xlsx)
and [Figure 4](rau2020-fig4.xlsx) retain the unchanged publisher workbooks for
S. Rau et al., *Penning trap mass measurements of the deuteron and the HD+
molecular ion*, Nature 585, 43–47 (2020),
[article and source downloads](https://doi.org/10.1038/s41586-020-2628-7).
The source records bind each download URL and SHA-256.

The [verifier](../../../models/causal-emergence/canonical/verify-deuteron-data.py)
reads ten AWG1 points, ten AWG2 points and seven HD+ points by worksheet name.
It preserves erroneous species headers and distinguishes absolute ratio
increments of 1e-12 from mass differences in pu (1e-12 u). Figure 4 gives
18 pu for the reported mass uncertainty, while the article gives 17 pu.
Grouped means and diagonal-weight fits do not reproduce the original
acquisition, covariance, mass adjustment or uncertainty propagation.

## Retinal response ratios

[elife-38281-fig6-data1-v2.xlsx](elife-38281-fig6-data1-v2.xlsx) is the
unchanged publisher download of Grimes, Baudin, Azevedo and Rieke (2018),
[Figure 6 source data 1](https://doi.org/10.7554/eLife.38281.019), retrieved
2026-09-12 from the eLife CDN. Attribution: the authors, *Range, routing and
kinetics of rod signaling in primate retina*, eLife 7:e38281,
[article DOI](https://doi.org/10.7554/eLife.38281). The publisher supplies the
article and its data under the [CC0 dedication](https://creativecommons.org/publicdomain/zero/1.0/).
The canonical source records the download URL and SHA-256.

Only `Sheet1!C14:F19` supplies canonical measurements. It contains the Figure 6F
labels and three mouse and three primate summary response ratios. Figure 6C
is present in the original workbook but outside the extraction. No original
workbook metadata or cells have been rewritten.

The [extractor](../../../models/causal-emergence/canonical/verify-routing-data.py)
checks sheet identity and column labels, reads explicit numeric cells and
compares all six rows with the [review ledger](../routing-review.json).
It neither evaluates workbook formulas nor derives missing observations.
The paper presents mean and SEM graphically, but this workbook supplies no
SEM, sample counts or individual responses. Those quantities remain missing.

## Microglial and purinergic assays

[41586_2020_2777_MOESM11_ESM.xlsx](41586_2020_2777_MOESM11_ESM.xlsx) is the
unchanged [publisher Figure 4 source workbook](https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-020-2777-8/MediaObjects/41586_2020_2777_MOESM11_ESM.xlsx)
for Badimon et al., *Negative feedback control of neuronal activity by microglia*,
Nature 586, 417–423 (2020), [article DOI](https://doi.org/10.1038/s41586-020-2777-8).

| Cited range | Observable and boundary |
| --- | --- |
| `4a!B2:R6` | Neonatal culture adenosine; three wells per condition, donor independence and detection-limit treatment of zeros unresolved |
| `4c!A1:J16` | Anesthetized striatal dialysate, five mice per group; ng/mL and a separate nM conversion, unpaired groups |
| `4h!B1:C11` | Striatal tissue adenosine-assay fluorescence, five values per group; relative fluorescence units, not concentration |
| `4i!A1:G7` | CD39-deletion challenge and co-treatment seizure counts; the sheet's `4j` heading conflicts with its identity |
| `4f!A1:C8` | P2ry12-genotype challenge seizure counts |
| `4k!B1:D8` | Neuronal Adora1-genotype challenge seizure counts |
| `4m!B2:H9` | Il34-deletion challenge and co-treatment seizure counts; co-treatment sample counts conflict with the caption |

The [neural evidence](../NEURAL_REVIEW.md) keeps these assays separate.
Workbook arithmetic and publication reading do not reproduce the experiments
or resolve discrepancies with their captions.

## Human neurogenesis cohort tables

[Supplementary Table 1](STable1_Human_cohorts_used_in_the_study.xlsx) and
[Supplementary Table 8](STable8_Cell_type_abundance_copy.xlsx) are unmodified
workbooks from the [Disouky et al. publisher archive](https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41586-026-10169-4/MediaObjects/41586_2026_10169_MOESM9_ESM.zip).
Only these two small source workbooks are retained locally.

The [check](../../../models/causal-emergence/canonical/verify-neurogenesis-data.py)
compares both cohort sheets and all 39 sample IDs, recounts the 13-label matrix
and checks its per-sample library totals. It reads named contrasts in `diff`
rows 2-4, preserving comparison direction and adjusted-P thresholds. It does not
reproduce sequencing, cell labels or statistical fitting. The discrepancy with
the main text's 38 participants remains unresolved.


## Geometric sequence syntax

[amalric2017-syntax.pdf](amalric2017-syntax.pdf) is the unchanged
[S1 Text](https://doi.org/10.1371/journal.pcbi.1005273.s007) accompanying
Amalric, Wang, Pica, Figueira, Sigman and Dehaene (2017), *The language of geometry*.
The parent publication is distributed under CC BY. This four-page supplement
defines a finite octagon language; it is not participant-level data or a second
experiment. Its printed examples and costs have unresolved inconsistencies
described with the current source claims.

## Geometric-model readouts

[pajot2026-model-check.json](pajot2026-model-check.json) contains selected numeric
values and de-identified sufficient statistics from Pajot et al. (2026),
[article DOI](https://doi.org/10.1371/journal.pcbi.1014554), at
[the inspected repository commit](https://github.com/MaxencePajot/geometry_in_neural_networks/tree/204a4d6daa3b09df416aaa78d67d80772b2615f0).
It identifies 139 extraction inputs by path and SHA-256. No upstream software,
weights or participant identifiers are included.

The extract contains 55 unordered quadrilateral pairs, 68 target-mean response
times and distractor frequencies derived from 8500 matched trials, three
shape-memory distance matrices, and two 72-image cross-format matrices. Each
shape target has 125 trials and five distractors per trial. Thus its mean
inverse-distance sum can be recomputed from distractor counts without individual
responses. Cross-format scoring excludes words and uses six directed format
pairs, each with 24 queries. The human identity benchmark is stipulated.

The [verifier](../../../models/causal-emergence/canonical/geometric-model-data.mjs)
runs during canonical evidence validation without extra dependencies. It checks
selected regression coefficients, layer-specific correlations, joint fits and
object ranks. It does not authenticate the remote inputs afresh, recreate
network outputs, search all models or layers, reproduce uncertainty estimates,
or resolve the quadrilateral participant exclusions. These are numerical
readouts of deposited model outputs, not biological measurements of a generating
mechanism.

## Delft Bell event tables

[hensen2015-data.zip](hensen2015-data.zip) is the unchanged version-1 deposit by
B. Hensen et al. (2015), *Loophole-free Bell-inequality violation using electron
spins separated by 1.3 kilometres*, 4TU.ResearchData,
[dataset DOI](https://doi.org/10.4121/uuid:6e19e9b2-4a2d-40b5-8dd3-a660bf3c0a31).
[hensen2016-data.zip](hensen2016-data.zip) is the unchanged version-1 deposit by
B. Hensen et al. (2016), *Loophole-free Bell test using electron spins in diamond:
second experiment and additional analysis*, 4TU.ResearchData,
[dataset DOI](https://doi.org/10.4121/uuid:53644d31-d862-4f9f-9ad2-0b571874b829).

The deposits use the [4TU General Terms of Use](https://doi.org/10.4121/resource:terms_of_use):
reuse is noncommercial and must credit the creators; subsequent redistribution
must retain this attribution. Source records contain SHA-256 hashes and reading
limits. The downloaded archives match the repository's sizes and MD5 checksums.

The [verifier](../../../models/causal-emergence/canonical/verify-bell-data.py)
reads all 4746 first-run rows and 1047/2871 second-run rows before/after detector
replacement. It applies the documented herald windows, prior-marker and
excitation exclusions, binary readout and state-specific score. All 17 source
columns, table order and separate detector parameters are checked. It recovers
245/300 accepted trials and the correlation counts in the published figures.
The canonical evidence includes all filtering counts, outcome matrices,
conventional S uncertainties and the conditional binomial tails.

The files contain events preselected by a broad two-photon signature. First-click
times and prior-marker ages are already extracted fields. The check therefore
does not recreate acquisition, missed events, synchronization, stopping decisions
or the external RNG predictability bound. The archive's Python examples are
read as methods; the project implements the calculation independently.

Source citations: Hensen et al. (2015),
[4TU dataset](https://doi.org/10.4121/uuid:6e19e9b2-4a2d-40b5-8dd3-a660bf3c0a31);
Hensen et al. (2016),
[4TU dataset](https://doi.org/10.4121/uuid:53644d31-d862-4f9f-9ad2-0b571874b829).

## Selected neutron magnetic-response data

[lachniet2009-e111m1.tsv](lachniet2009-e111m1.tsv) and
[its description](lachniet2009-e111m1-description.html) preserve the downloaded
26-point CLAS table and descriptive page from the
[CLAS physics database mirror](https://clas.sinp.msu.ru/cgi-bin/jlab/msm.cgi?eid=111&mid=1&data=on).
They are attributed to J. Lachniet et al., *Precise Measurement of the Neutron
Magnetic Form Factor in the Few-GeV2 Region*,
[Physical Review Letters 102, 192001 (2009)](https://doi.org/10.1103/PhysRevLett.102.192001).
[lachniet2009-v2-figure3.eps](lachniet2009-v2-figure3.eps) is the unchanged
selected figure from the [versioned author source](https://arxiv.org/src/0811.1716v2).
No separate reuse license was declared in the inspected data description;
these source assets do not acquire the project's software license.

The [verifier](../../../models/causal-emergence/canonical/verify-neutron-form-factor.py)
checks table order, units, normalization and the plotted centers against the
versioned figure. It retains the final two systematic-error fractions even
though they conflict with the article's stated range. The mirror description
links an older manuscript, so version identity is checked against the final
figure instead of inferred from that link. The selected tables do not contain
raw event records, acceptance simulations or covariance.

## Selected inclusive neutral-hadron yields

[sld1998-neutral-production.json](sld1998-neutral-production.json) is a local
transcription of 44 bins and the selected inclusive integral/extrapolation
entries in Tables 6, 7 and 16 of the
[SLD author manuscript](https://arxiv.org/pdf/hep-ex/9805029v1), published as
[Physical Review D 59, 052001 (1999)](https://doi.org/10.1103/PhysRevD.59.052001).
It retains the original species, momentum intervals, central values and
uncertainty conventions. It contains neither event-level data nor a fitted
fragmentation model.

The [verifier](../../../models/causal-emergence/canonical/verify-hadron-production.py)
checks these bound bytes, finite bin integrals, display-rounding intervals and
printed acceptance arithmetic. Shared normalization and model extrapolation
remain separate from independently measured yields. The selected charged
spectra and flavor-tagged analyses are outside this transcription.
