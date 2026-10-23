// Optical, sampling, circuit and output evidence retain distinct preparations.
const sources = [], entities = [], claims = [], relations = [], studies = [], comparisons = [], readiness = [];
const publications = new Map(), acquisitions = new Map();
const commonLimit = "Published source interpretation; no independent experiment, raw-data replay, universal organism construction rule, carrier minimum or causal weight is admitted.";
const extent = "selected-primary-main-methods-results-discussion-and-figure-legends-supplements-unread";
const cite = (sourceId, locator, role = "supports") => ({ sourceId, locator, role,
  note: "Only the named primary passage and preparation support this statement; shared publication or acquisition does not create independent replication." });

function publication(meta, locators, limit, correctionCheck) {
  const { id, title, authors, year, doi, url, journal, volume, issue, pages } = meta;
  const source = { id, kind: "research-publication", title, authors, year, doi, url,
    path: null, sha256: null, review: { extent, locators, limit } };
  sources.push(source);
  publications.set(id, { source, journal, volume, issue, pages, correctionCheck });
}
function node(id, name, kind, description, claimIds, coordinates, obligations = [], status = "evidence-scoped") {
  const key = `org:${id}`;
  entities.push({ id: key, name, kind, description, claimIds, status, level: 5,
    sourceCoordinates: coordinates, openObligations: [...obligations, commonLimit] });
  readiness.push({ nodeId: key, role: kind === "context" ? "experimental-context"
    : kind === "definition" ? "definition" : kind === "hypothesis" ? "hypothesis" : "scoped-phenomenon",
    denotes: description, instanceAdmission: "none", claimIds });
  return key;
}
function study(id, sourceId, studyType, system, preparation, observable, finding, limits, locatorIndexes) {
  const meta = publications.get(sourceId);
  const locators = locatorIndexes.map((index) => meta.source.review.locators[index]);
  const limitations = [...limits, meta.source.review.limit, commonLimit];
  const methodId = `M-org-${id}`, findingId = `C-org-${id}`;
  claims.push({ id: methodId, kind: "method", statement: preparation, scope: system,
    status: "method-contract", citations: locators.map((locator) => cite(sourceId, locator, "method")),
    contextIds: [id], checkIds: [], limitations });
  claims.push({ id: findingId, kind: "review-finding", statement: finding, scope: system,
    status: "publication-supported", citations: locators.map((locator) => cite(sourceId, locator)),
    contextIds: [id], checkIds: [], limitations });
  const coordinates = locators.map((locator) => ({ sourceId, locator }));
  node(`${id}-context`, `${id}: preparation`, "context", preparation, [methodId], coordinates, limits, "definition");
  if (studyType === "computational-analysis") readiness.at(-1).role = "model-context";
  node(`${id}-response`, `${id}: bounded result`, "scoped-process", finding, [findingId, methodId], coordinates, limits);
  relations.push({ id: `organismal:${id}-context-response`, source: `org:${id}-context`, target: `org:${id}-response`,
    kind: "descriptive", role: studyType === "computational-analysis" ? "computation-context" : "measurement-context",
    assertion: "The source result retains this acquisition or model, observable and interpretation boundary.",
    claimIds: [methodId, findingId], contextIds: [id] });
  const record = { id, sourceId, studyType, doi: meta.source.doi, journal: meta.journal, volume: meta.volume,
    issue: meta.issue, pages: meta.pages, system, preparation, observable, finding, limitations,
    readExtent: meta.source.review.extent, reviewedLocators: locators, metadataCheckedAt: "2026-10-22",
    metadataUrl: `https://doi.org/${meta.source.doi}`, correctionCheck: meta.correctionCheck };
  studies.push(record);
  acquisitions.set(id, { record, methodId, findingId, coordinates });
}
function effect(studyId, name, input, assertion) {
  const context = acquisitions.get(studyId);
  const id = node(`${studyId}-input`, name, "scoped-process", input,
    [context.findingId, context.methodId], context.coordinates, context.record.limitations);
  relations.push({ id: `organismal:${studyId}-input-response`, source: id, target: `org:${studyId}-response`,
    kind: "functional-support", role: "scoped-operating-support", assertion,
    claimIds: [context.findingId, context.methodId], contextIds: [studyId] });
}
const limitedCorrectionCheck = "The primary article record, Crossref and Europe PMC metadata were checked on 2026-10-22; no relevant correction was identified in those inspected records. This is not an exhaustive correction or retraction audit.";

publication({ id: "artal2001-ocular-compensation", title: "Compensation of corneal aberrations by the internal optics in the human eye",
  authors: ["Pablo Artal", "Antonio Guirao", "Esther Berrio", "David R. Williams"], year: 2001, doi: "10.1167/1.1.1",
  url: "https://aria.cvs.rochester.edu/papers/artal_jov2001.pdf", journal: "Journal of Vision", volume: "1", issue: "1", pages: "1-8" },
  ["Published author PDF, pp. 2-3, Methods and Figures 1-5: wavefront sensing, corneal topography and saline-goggle validation",
    "Published author PDF, pp. 4-5, Results and Figures 6-12: component wavefront estimates and calculated point-spread functions",
    "Published author PDF, pp. 6-7, Discussion and Figure 13: candidate compensation mechanisms and their limits"],
  "The scientific main text, Methods, Results, Discussion and figure legends were read in the eight-page published PDF hosted by an author institution. Images and raw wavefronts were not digitized or replayed. The main six-subject comparison and five-subject saline preparation are distinct, with two validation subjects. Internal optics includes posterior cornea and ocular media as well as the lens. Methods names the pupil geometric center for registration whereas Discussion says corneal measurements reference the corneal pole and argues the centers are close; that unresolved reference difference constrains component attribution. Crossref supplies page/article number 1; the printed paper and NLM give pages 1-8.", limitedCorrectionCheck);

publication({ id: "hofer2005-cone-mosaic", title: "Organization of the Human Trichromatic Cone Mosaic",
  authors: ["Heidi Hofer", "Joseph Carroll", "Jay Neitz", "Maureen Neitz", "David R. Williams"], year: 2005,
  doi: "10.1523/jneurosci.2414-05.2005", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6725723/",
  journal: "The Journal of Neuroscience", volume: "25", issue: "42", pages: "9669-9679" },
  ["Materials and Methods: Subjects, High-resolution retinal imaging and cone classification; Figures 1-3 and Table 1",
    "Results: Retinal mosaics, Arrangement of S cones, Ratio and arrangement of L and M cones; Figures 4, 6 and 9 and Tables 1-3",
    "Materials and Methods: Flicker photometric electroretinogram; Results: Comparison with ERG-derived estimates; Figure 7",
    "Results and Methods: random-label simulations, optical-blur classification limits; Figures 8-9; Discussion"],
  "Selected primary main Methods, Results, Discussion, tables and figure legends were read in PMC HTML. Supplementary blur analyses, raw images and cone assignments were not replayed. The official 2006 erratum and its corrected Figures 6 and 9 were read and visually inspected separately; a duplicated original figure is not counted as independent evidence. Nine retinal patches come from eight selected observers, with seven men and one protan carrier. These are local adult observations, not a developmental intervention or population prevalence sample.",
  "PubMed identifies J Neurosci. 2006;26(2):722. The official unsigned PMC6674404 notice says Figure 6 duplicated Figure 9 and supplies corrected figures and legends; those corrected images were visually inspected. Original and corrected images are not independent acquisitions.");

sources.push({ id: "hofer2006-mosaic-erratum", kind: "research-publication", title: "Erratum", authors: [], year: 2006,
  doi: null, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6674404/", path: null, sha256: null,
  review: { extent: "complete-unsigned-correction-text-captions-and-corrected-figure-inspection",
    locators: ["J Neurosci. 2006;26(2):722, complete correction text and corrected Figures 6 and 9 with legends"],
    limit: "The complete notice, captions and both corrected figures were read and visually inspected; no image coordinates were digitized. The notice is unsigned and displays no DOI; original-article authors named in its body are not assigned notice authorship. It corrects figure duplication, not every methodological limitation or the unread supplementary blur analysis." } });

publication({ id: "triplett2011-topographic-competition", title: "Competition is a driving force in topographic mapping",
  authors: ["Jason W. Triplett", "Cory Pfeiffenberger", "Jena Yamada", "Ben K. Stafford", "Neal T. Sweeney", "Alan M. Litke", "Alexander Sher", "Alexei A. Koulakov", "David A. Feldheim"],
  year: 2011, doi: "10.1073/pnas.1102834108", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3223436/",
  journal: "Proceedings of the National Academy of Sciences", volume: "108", issue: "47", pages: "19060-19065" },
  ["Results: RGC Axons in Math5 Mutants Are Restricted to the Anteromedial SC; Figure 3; Materials and Methods: axon tracing and fluorescence quantification",
    "Results: Anatomical Tracing of the Retinocollicular Projection; Figure 4; Materials and Methods: P8-P10 retrograde tracing",
    "Results: Different Mapping Models Predict Different Outcomes; Figures 1-2; Computational Procedures; Discussion: model discrepancies and alternatives"],
  "Selected primary main Results, Methods, Discussion and figure legends were read in PMC HTML. The SI Appendix, detailed simulation parameters, deposited images and numerical fits were not inspected or replayed. Math5/Atoh7 mutation changes development and surviving input populations; it is not a selective manipulation of an otherwise fixed competition parameter. Collicular projections are distinct from photoreceptor sampling geometry and from direct behavioral acuity.", limitedCorrectionCheck);

publication({ id: "rivlinetzion2012-direction-reversal", title: "Visual Stimulation Reverses the Directional Preference of Direction-Selective Retinal Ganglion Cells",
  authors: ["Michal Rivlin-Etzion", "Wei Wei", "Marla B. Feller"], year: 2012, doi: "10.1016/j.neuron.2012.08.041",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3496185/", journal: "Neuron", volume: "76", issue: "3", pages: "518-525" },
  ["Results: Short visual stimulation and alternative adaptation protocols; Figures 1-2; Experimental procedures",
    "Results: Reversal alters timing and On pathway blockade; Figures 4-5; Discussion: possible crossover circuit"],
  "Selected primary main Results, Experimental procedures, Discussion and figure legends were read in the PMC author manuscript. Supplementary grating details, figures, tables, recording traces and source data were not inspected. Selected mouse On-Off direction-selective cells can reverse, lose sharp tuning or remain stable; the result does not establish every retinal computation, enduring memory or ecological use. Anatomical wiring and an inferred functional pathway are distinct.", limitedCorrectionCheck);

publication({ id: "vlasits2014-starburst-polarity", title: "Visual Stimulation Switches the Polarity of Excitatory Input to Starburst Amacrine Cells",
  authors: ["Anna L. Vlasits", "Rémi Bos", "Ryan D. Morrie", "Cécile Fortuny", "John G. Flannery", "Marla B. Feller", "Michal Rivlin-Etzion"],
  year: 2014, doi: "10.1016/j.neuron.2014.07.037", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4161675/",
  journal: "Neuron", volume: "83", issue: "5", pages: "1172-1184" },
  ["Results: Reversible Inactivation of SACs Abolishes Direction Selectivity; Figure 1; Experimental Procedures: Animals, calcium imaging and PSAM-PSEM silencing",
    "Results: Starburst cells switch polarity; Figures 2-4; Experimental Procedures: targeted electrophysiology and Visual Stimulation of SACs",
    "Results: SAC Polarity Switch Could Mediate Reversed Tuning; Figure 8; Discussion and main simulation description"],
  "Selected main Results, Experimental Procedures, Discussion and figure legends were read in the PMC author manuscript. Extended Experimental Procedures, supplementary tables/figures and raw recordings were not inspected. Main text summarizes a wild-type ligand control whose full supplementary evidence remains unread. Silencing calcium imaging, patch-clamp polarity measurements and the simplified phase simulation are separate contexts. Modeled reversal does not establish a unique biological implementation.", limitedCorrectionCheck);

publication({ id: "murphy2006-retinal-timing", title: "Network Variability Limits Stimulus-Evoked Spike Timing Precision in Retinal Ganglion Cells",
  authors: ["Gabe J. Murphy", "Fred Rieke"], year: 2006, doi: "10.1016/j.neuron.2006.09.014",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2032021/", journal: "Neuron", volume: "52", issue: "3", pages: "511-524" },
  ["Results: temporal precision of light-evoked action potentials; Figures 1-3; Experimental Procedures: Tissue Preparation, Light Stimuli and Data Collection, Data Analysis",
    "Results: synaptic conductances and roles of excitation/inhibition; Figures 4-6; Experimental Procedures: voltage and conductance clamp",
    "Results: intrinsic and network variability; Figures 7-9; Experimental Procedures: conductance clamp and spike-distance analysis"],
  "Selected primary main Results, Experimental Procedures, Discussion and figure legends were read in PMC HTML. Supplementary filters, raw traces and the MATLAB analysis were not replayed. Functionally classified On, Off transient and Off sustained mouse cells, light-evoked recordings, voltage-clamp extraction and somatic conductance injection remain distinct preparations. Somatic injection does not reproduce spatial dendritic input; precision depends on the stimulus and comparison metric.", limitedCorrectionCheck);

publication({ id: "berry1997-retinal-spike-trains", title: "The structure and precision of retinal spike trains",
  authors: ["Michael J. Berry", "David K. Warland", "Markus Meister"], year: 1997, doi: "10.1073/pnas.94.10.5411",
  url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC24692/", journal: "Proceedings of the National Academy of Sciences",
  volume: "94", issue: "10", pages: "5411-5416" },
  ["Methods and Analysis: Recording and Stimulation, Firing Event Identification; Results and Figures 1-3: salamander and rabbit repeated-flicker responses",
    "Results and Figure 4: contrast-dependent timing jitter, Fano factor and firing fraction in salamander fast OFF cells",
    "Methods and Analysis: Information Calculations; Figure 5; Discussion: independence, Gaussian approximation and downstream-readout caveats"],
  "Selected primary Methods and Analysis, Results, Discussion and figure legends were read in PMC HTML. Raw spike trains and event parsing were not independently replayed. Salamander and rabbit preparations are separate; contrast groups contain different numbers of cells and retinas. First-event timing, count variance, firing fraction and model-derived information are different observables. The paper explicitly leaves whether the brain uses the estimated information unanswered.", limitedCorrectionCheck);

study("artal2001-wavefronts", "artal2001-ocular-compensation", "primary-observation", "Six young subjects with normal corrected vision",
  "Measure anterior corneal topography and whole-eye Hartmann-Shack wavefronts in the six-subject comparison. Subjects are 24-38 years old; accommodation is paralyzed with 1 percent cyclopentholate, sensing uses 780 nm light and the comparison uses a 5.9 mm pupil. Methods names the pupil geometric center for registration, whereas Discussion describes corneal-pole referencing and argues that the centers are close; no unique registration is reconstructed here. Remove defocus for the reported RMS comparison.",
  "Corneal and whole-eye wavefront coefficients; internal-component and point-spread estimates are separate model outputs",
  "In the six-eye comparison, the reconstructed corneal component has larger aberration than the complete eye after the stated defocus removal; the assembled optical response is not determined by isolated-component optical quality alone.",
  ["These are supplied adult eyes, not organogenesis or direct observations of an active compensation controller.",
    "The internal component is partly obtained by subtracting the complete-eye estimate; component correlations are not independent causal measurements of lens alignment.",
    "The preparation does not measure full spectral transfer, accommodation dynamics, retinal transduction or perceived image quality."], [0, 1, 2]);
study("artal2001-saline", "artal2001-ocular-compensation", "primary-experiment", "Five young subjects in the saline-goggle preparation",
  "Neutralize the anterior corneal refracting surface using saline-filled goggles and measure wavefronts with accommodation paralyzed, infrared sensing, a Badal optometer and the specified apparatus/reference and window corrections. The goggle estimate uses a 4.7 mm pupil; corneal topography is additionally available in two validation subjects.",
  "Wavefront estimates with the anterior surface neutralized and comparison with corneal-topography estimates",
  "The neutralization experiment provides a bounded estimate of internal optical aberration, with the two-subject topography comparison supporting the source's approximate component-addition procedure.",
  ["This is an intervention on optical boundary conditions, not isolation of a living lens or a test of neural transduction.",
    "Optometer, window aberrations, pupil registration and the posterior cornea constrain the internal-optics attribution.",
    "The five-subject goggle group and the six-subject main comparison are not one eleven-eye matched decomposition."], [0]);
effect("artal2001-saline", "Saline neutralization of the anterior cornea", "Change the ocular boundary with saline-filled goggles while retaining the source's optometer and instrument corrections.",
  "In the saline-goggle preparation, changing the anterior refracting boundary changes the measured optical component; attribution remains limited by the stated instrument and component model.");
study("artal2001-component-model", "artal2001-ocular-compensation", "computational-analysis", "Wavefront decomposition of the same ocular acquisitions",
  "Treat corneal and complete-eye Zernike coefficients as additive in an approximately common plane, derive internal coefficients by subtraction and compute point-spread functions from the wavefronts. Keep the additional random-coma simulation and proposed alignment mechanisms separate from direct measurements.",
  "Inferred internal aberration, component compensation and calculated point-spread functions",
  "The source decomposition represents partial compensation between ocular components; its model and goggle cross-check do not identify whether developmental or adult active adjustment produces that compensation.",
  ["No new optical simulation, regression or pupil-dependent reconstruction is replayed here. Methods pupil-center registration versus Discussion corneal-pole referencing remains an unresolved source inconsistency; the authors' close-centers argument is not an independent alignment measurement.",
    "Calculated point-spread functions are not independently captured retinal images, and negative component correlations reuse subtraction inputs.",
    "Mechanisms involving lens tilt, decentration and posterior cornea are proposed alternatives rather than an experimentally identified universal control law."], [0, 1, 2]);

study("hofer2005-local-mosaic", "hofer2005-cone-mosaic", "primary-observation", "Nine near-foveal retinal patches in eight selected human observers",
  "Use adaptive optics and retinal densitometry after full and wavelength-selective pigment bleaching to classify cones near one degree eccentricity. Imaging uses 4 ms flashes and repeated registered images interleaved over 1-3 days; spectral classification uses fitted absorptance distributions and local criteria. Seven men and one protan carrier pass the source's color-vision tests; some subjects were selected for extreme ratios.",
  "Locally inferred L/M/S identities, proportions and spatial arrangement; source color-vision test classifications",
  "Human local cone-class composition varies substantially despite normal scores on the named color-vision tests; a geometrically packed mosaic does not imply a fixed repeating L/M label lattice or a universal class ratio.",
  ["Optical classification is not direct gene expression or simultaneous recording of each cone's electrical response.",
    "Nine patches are not nine independent participants, and this selected adult sample is not a prevalence or developmental study.",
    "Normal performance on these tests does not establish equal acuity, equal chromatic sensitivity or a uniquely compensating downstream circuit."], [0, 1]);
study("hofer2005-mosaic-analysis", "hofer2005-cone-mosaic", "computational-analysis", "Spatial analyses of the same classified human cone mosaics",
  "Compare observed inter-cone separations against 100 random-label simulations and the source's cumulative-histogram statistics. Interpret S-cone and L/M-cone results with the official corrected Figures 6 and 9, preserving classification uncertainty and the unread supplementary optical-blur analysis.",
  "Source comparisons with random cone-class placement and blur-sensitive apparent clumping",
  "The source separates S-cone spatial regularity from broadly irregular L/M labeling; apparent local clumping can depend on optical identification error. These null comparisons do not measure a developmental sorting mechanism.",
  ["Corrected figures replace a duplicated image; they supply no additional participants or replication.",
    "The supplementary blur correction is described in main text but its full analysis was not inspected or reproduced.",
    "Failure to distinguish a mosaic from the chosen random-label ensemble does not prove exact randomness or independence of developmental mechanisms."], [1, 3]);
study("hofer2005-erg-comparison", "hofer2005-cone-mosaic", "primary-observation", "ERG and local optical measurements in the same eight human observers",
  "Compare the local adaptive-optics classifications with flicker-photometric ERG estimates using an approximately 70 degree retinal field, 31.25 Hz alternating lights and source pigment/lens corrections. The same eight current observers provide the fitted comparison; older comparison points and a broader historical histogram are separate datasets.",
  "Association between local optically estimated L:M ratio and model-derived ERG L:M weighting",
  "The local optical and wide-field ERG estimates correlate, but their fitted relation is not unit slope; the proposed greater M-cone contribution is an interpretation under the spectral-weighting model rather than a direct measurement of every cone's gain.",
  ["Local image patches and the approximately 70 degree ERG field have different spatial supports.",
    "The primary mechanism of the discrepancy remains unresolved; the comparison does not directly measure a full spatial acuity map or cognitive normalization.",
    "Shared observers, classification fits and pigment templates do not supply independent replication."], [0, 2]);

study("triplett2011-collicular-projection", "triplett2011-topographic-competition", "primary-experiment", "Wild-type, heterozygous and Math5-null mouse retinocollicular projections",
  "Trace whole-eye projections to the superior colliculus in adult and P2 mouse preparations, keeping the source genotype groups and ages separate. Quantify spatial fluorescence after background subtraction and the declared anatomical region selection; adult groups contain 4 WT, 7 heterozygous and 8 null mice, whereas P2 compares 3 heterozygous with 2 null mice.",
  "Anatomical distribution of labeled retinal projections across the superior colliculus",
  "Math5-null projections are concentrated in an anteromedial collicular region rather than filling the target like the source controls. This is a genotype-dependent projection result, not direct proof that cell number alone or a unique competition law determines every map.",
  ["Math5/Atoh7 loss changes development and the surviving input population; source-reported input reduction is not an independently varied scalar.",
    "Fluorescence distribution is not a complete synapse count, functional visual map or behavioral acuity measurement.",
    "Some expression, wave-activity and double-mutant controls are summarized in the main text but their SI evidence remains unread."], [0]);
effect("triplett2011-collicular-projection", "Math5 genotype in a developing projection", "Compare the source WT/heterozygous and Math5-null developmental preparations rather than imposing an abstract cell-count threshold.",
  "Within the source's anatomical tracing preparations, Math5 genotype changes the distribution of labeled projections; the effect does not isolate interaxon competition from all developmental consequences.");
study("triplett2011-retrograde-tracing", "triplett2011-topographic-competition", "primary-experiment", "P8-P10 mouse superior-colliculus tracer injections",
  "Inject 0.2-1 microlitre CTB-555 or CTB-488 at focal collicular sites in P8-P10 mice and inspect the contralateral retinal flat mount two days later. Compare retinal origins of labeled cells for the source control and Math5-null preparations.",
  "Spatial retinal origins of cells labeled from a focal target location",
  "A focal collicular injection labels a relatively clustered retinal origin in controls but a dispersed origin in the null preparation; compressed target coverage is distinct from preservation of detailed retinal-to-target order.",
  ["Tracer spread, sparse surviving inputs and histological detection constrain the anatomical inference.",
    "The assay is distinct from whole-eye fluorescence, photoreceptor sampling and a simultaneous receptive-field or acuity map.",
    "No new tracing image quantification or full supplementary control review is claimed."], [1]);
study("triplett2011-map-model", "triplett2011-topographic-competition", "computational-analysis", "Source models of two-axis retinocollicular mapping",
  "Compare the source's competition, dual-gradient and servomechanism alternatives across two axes under supplied label/activity assumptions and reduced modeled input. Treat the published simulations and qualitative comparison as source results; detailed SI parameterization and optimization are not reconstructed.",
  "Model-predicted target occupancy compared with the source's anatomical projection distributions",
  "The modeled competition account reproduces important aspects of reduced-input target compression, while discrepancies and alternative weak influences remain; successful restricted comparison does not uniquely identify a universal topographic construction mechanism.",
  ["Modeling and anatomy from this paper are dependent evidence, not separate replications.",
    "Uniform modeled deletion and biological Math5 loss are different interventions.",
    "The source describes mismatches near boundaries and posterior widening; numerical SI fits and cross-species single-axon tests are not independently verified here."], [0, 2]);

study("rivlin2012-adaptation", "rivlinetzion2012-direction-reversal", "primary-experiment", "Selected mouse On-Off direction-selective ganglion cells ex vivo",
  "In DRD4-GFP, TRHR-GFP and selected non-GFP recordings from P14-P88 mice, establish tuning using 3 second gratings in 12 directions repeated 3-5 times. Present the named preferred-null protocol, 40 seconds in each direction, and retest; keep alternative protocols, selected sharp-tuning criteria and finite follow-up separate.",
  "Cell-attached spike tuning, loss of sharp selectivity and changes in preferred direction",
  "The preferred-null protocol produces reversed, ambiguous and stable cells in the same reported comparison: 9, 9 and 6 of 24, respectively. Thus selected circuit responses can change with recent stimulation even though the anatomical substrate is supplied.",
  ["Exclusion of poorly tuned baseline cells and retest classification constrain the population.",
    "The 10 and 23 minute persistence examples are recording-limited histories, not proof of permanent memory, recovery kinetics or a hysteresis loop.",
    "Exact supplementary grating/calibration controls remain unread; light-response reversal does not identify a unique crossover circuit or demonstrate downstream behavioral use."], [0]);
effect("rivlin2012-adaptation", "Recent drifting-grating history", "Apply the source's preferred-null adaptation protocol to previously characterized On-Off direction-selective cells.",
  "In this selected retinal preparation, recent grating stimulation changes later spike-direction tuning, with stable and ambiguous outcomes retained alongside reversals.");
study("rivlin2012-on-blockade", "rivlinetzion2012-direction-reversal", "primary-experiment", "Mouse On-Off ganglion-cell adaptation with On-pathway blockade",
  "Use the source 5-20 micromolar L-AP4 comparison with spot and grating tests, then apply the preferred-null adaptation protocol. Preserve the distinction between the 24-cell initial blockade characterization and the 21 adapting cells, of which 6 cease responding and 15 remain for the stated post-adaptation comparison.",
  "On/Off spot responses, directional tuning and loss of grating responsiveness under pharmacological conditions",
  "On-pathway blockade changes response classes and does not eliminate every adaptation-associated reversal; loss of responsiveness and recovered On components constrain a simple independent-channel interpretation.",
  ["The experiment constrains candidate crossover explanations; it does not selectively identify every contributing synapse.",
    "The source's Figure 4 timing curves are separately normalized before and after adaptation and cannot establish preserved absolute firing rate.",
    "Subset attrition and unread supplementary traces remain part of the uncertainty."], [0, 1]);

study("vlasits2014-silencing", "vlasits2014-starburst-polarity", "primary-experiment", "PSAM-expressing starburst networks in mouse retinal preparations",
  "Express PSAM-GlyR through source intravitreal AAV in P6-P8 ChAT-Cre mice and assay the isolated adult retinal preparation. Apply 20 micromolar PSEM89S for at least 15 minutes and measure direction-selective calcium responses to moving UV bars before, during and after ligand exposure; keep the main-text WT ligand control separate from the unread supplementary evidence.",
  "Calcium-derived direction selectivity in 68 cells from 5 retinas and finite washout recovery",
  "Ligand activation of the targeted chloride conductance reduces direction selectivity, and washout increases it again. The post-washout mean remains below the starting mean; this is finite recovery of a defined calcium response, not proof of exact restoration or universal direction-selective circuitry.",
  ["These are calcium-imaging responses, not simultaneous spike, perception or behavioral measurements.",
    "Cells nested in five retinas are not 68 independent animals, and supplementary WT controls were not independently inspected.",
    "The source intervention supports a preparation-specific role for starburst signaling without proving that wiring alone fixes computation."], [0]);
effect("vlasits2014-silencing", "Targeted starburst conductance manipulation", "Activate the expressed PSAM conductance with PSEM89S in the declared retinal calcium-imaging preparation.",
  "Targeted conductance activation reduces the measured direction-selective calcium response; the bounded washout increase is retained without claiming complete recovery.");
study("vlasits2014-polarity", "vlasits2014-starburst-polarity", "primary-experiment", "Patch-clamped mouse starburst amacrine cells under defined illumination",
  "In isolated P21-P40 retinal preparations, estimate excitatory and inhibitory conductances from five sweeps at four holding potentials. Compare 2 second spot responses before and after the main grating sequence, including its 40 second nasal and temporal segments; retain dorsal/ventral cone activation and spectral comparisons as distinct controls.",
  "Light-onset and light-offset synaptic currents and conductance estimates in starburst cells",
  "Adapted On-starburst cells can lose onset excitation and gain offset excitation. The appearance of the offset component depends on cone activation in the source's spectral/retinal-location comparisons; one fixed wiring diagram is insufficient to specify these responses.",
  ["Conductances are inferred from voltage-clamp measurements and assumed reversal potentials rather than recorded directly at every synapse.",
    "Extended methods and supplementary sample/control tables remain unread; dorsal versus ventral location cannot be replaced by an unconditional species-wide response rule.",
    "A starburst polarity response and ganglion directional reversal are distinct readouts; their mechanistic relation requires the separate model and additional discrimination."], [1]);
study("vlasits2014-phase-model", "vlasits2014-starburst-polarity", "computational-analysis", "Simplified source model of an On-pathway ganglion response",
  "Use the reported rectified-sinusoid excitatory/inhibitory input model with excitation held fixed while inhibitory phase changes. The source calculates direction selectivity from 100 stochastic spike trains for the preferred/null comparison; illustrative traces and biological recordings remain separate.",
  "Simulated directional index as a function of relative inhibitory phase",
  "A conditional phase shift can reverse the modeled directional index. This establishes a possible implementation under the source assumptions rather than a unique experimentally identified cause of biological reversal.",
  ["The simplified model omits the full On-Off circuit and supplies its waveforms and spike-generation rule.",
    "No source simulation, parameter sensitivity or stochastic spike ensemble is replayed here.",
    "The calculation cannot be counted as an independent physiological observation or a universal circuit generator."], [2]);

study("murphy2006-light-response", "murphy2006-retinal-timing", "primary-experiment", "Functionally classified On, Off transient and Off sustained mouse ganglion cells",
  "Use flat-mounted retinas from overnight dark-adapted 6-8 week C57/BL6 mice, warmed oxygenated Ames perfusion and repeated spatially uniform 470 nm Gaussian flicker with 0-60 Hz bandwidth and a source mean near 2.5 photoisomerizations per rod per second. Record spikes cell-attached and distinguish burst-first-spike and spike-distance analyses.",
  "Spike-time variation under repeated light stimuli and cell-type-specific input/output responses",
  "The recorded spike responses are temporally more precise than the slow rod response alone suggests, while precision and excitation/inhibition differ across the named cell classes. The burst-first-spike metric samples fewer than five percent of spikes; the source distance-based comparison covers more than 85 percent under its pairing rule.",
  ["Photoisomerization rates use spectral calibration and an assumed rod collecting area, not direct counts in every cell.",
    "Different precision metrics, pairing windows and sampled cells cannot be pooled into a universal timing constant.",
    "The experiment supplies an existing retina and does not measure end-to-end human perception or general noise-resistant communication."], [0, 1]);
study("murphy2006-conductance-clamp", "murphy2006-retinal-timing", "primary-experiment", "Somatic conductance injection into the same classes of mouse ganglion cells",
  "Measure light-evoked excitatory/inhibitory waveforms and compare repeated fixed or averaged waveform pairs with randomly selected trial-varying pairs during somatic conductance clamp. Block AMPA/kainate, NMDA and GABA/glycine input with the source NBQX, MK-801 and high-concentration strychnine conditions. Representative waveforms come from one example cell per class; the current feedback is computed at 10 kHz.",
  "Spike-distance timing distributions under fixed versus trial-varying injected input",
  "Fixed injected inputs yield more precise spikes than natural light responses, while trial-varying measured inputs recover much of the observed variability. Under these conditions, variable network input is an important timing limitation; this does not show that intrinsic noise is universally absent.",
  ["Somatic input bypasses the spatial dendritic distribution of natural synapses and the blocker condition changes the network background.",
    "The source uses representative measured input waveforms and pharmacological assumptions; the comparison does not identify all upstream sources of variability.",
    "Repeated-light, voltage-clamp and conductance-injection acquisitions share publication and preparation history; they are not independent replications."], [1, 2]);
effect("murphy2006-conductance-clamp", "Fixed versus varying synaptic input waveforms", "Change the trial-to-trial waveform variation while retaining the source conductance-clamp and synaptic-blocker conditions.",
  "In the declared somatic injection preparation, input variability changes the distribution of spike timing; this bounded intervention does not equate injected and physiological spatial inputs.");

study("berry1997-salamander", "berry1997-retinal-spike-trains", "primary-experiment", "Isolated larval tiger-salamander retina under repeated flicker",
  "Record ganglion spikes with a multielectrode array in oxygenated Ringer's solution. Repeat spatially uniform Gaussian flicker updated every 30 ms at the reported photopic mean, using 100 repeats of 20 seconds or 30 repeats of 800 seconds. For the fast-OFF contrast comparison, retain the changing cell/retina membership of the six contrast groups rather than treating all contrasts as paired measurements in one population.",
  "Event-first-spike jitter, event count variance and firing fraction across contrast conditions",
  "Timing precision depends on contrast and cell class; fast-OFF jitter increases as contrast falls, and its Fano factor can rise above one at low contrast. The source therefore does not support uniformly low-noise or uniformly sub-Poisson output from every ganglion cell under every input.",
  ["Event boundaries, smoothing and threshold rules condition the result; trials with no event spike are excluded from event timing but retained as zero counts.",
    "A short event jitter is not a direct measurement of phototransduction speed, an information rate or downstream decoding.",
    "The analyzed contrast populations have unequal cell/retina counts; artificial flicker is not a complete natural-scene ensemble."], [0, 1]);
effect("berry1997-salamander", "Visual contrast in a salamander preparation", "Change the source flicker contrast in the specified salamander fast-OFF comparisons, retaining unequal sample membership and event-analysis rules.",
  "Changing the source stimulus contrast changes timing/count variability in the reported retinal comparisons; the result is conditional on cell selection, sampling and event definitions.");
study("berry1997-rabbit", "berry1997-retinal-spike-trains", "primary-experiment", "Isolated Dutch-belted rabbit retina in warmed Ames medium",
  "Use the same reported repeated-flicker framework but preserve the rabbit preparation, Ames medium at 37 degrees Celsius and its separate cell sample. The source report contains 45 cells from two rabbit retinas; the Figure 3 9-percent-contrast histogram uses 30 cells from two retinas rather than the entire recorded sample.",
  "Rabbit ganglion event timing, count variability and heterogeneous firing fractions",
  "Rabbit cells exhibit diverse response patterns and sparseness under the source stimulus; some are not very sparse and some have count Fano factor above one. The source does not establish a single invariant mammalian spike symbol or communication reliability law.",
  ["Rabbit and salamander results are different species/preparations, not a pooled organ-level measurement.",
    "Two retinas do not establish population-wide invariance; cell counts and within-retina repeated trials are not independent animal replication.",
    "Behavioral use of timing or count information is not assayed."], [0]);
study("berry1997-information", "berry1997-retinal-spike-trains", "computational-analysis", "Information estimates from the source's parsed retinal firing events",
  "Apply the reported heuristic entropy comparison to event-first-spike timing and count distributions from the repeated-flicker recordings. Retain the Gaussian approximation, independence assumptions and separate treatment of event-time and count information; the source notes deviations from those assumptions.",
  "Conditional estimates of stimulus information attributed to timing and count",
  "Under the source's event and ensemble definitions, estimated timing information exceeds count information in the illustrated comparisons; this is an analytical interpretation of shared recordings, not direct evidence that the brain uses the full estimate or that multiplexing is optimal.",
  ["Non-Gaussian distributions, interevent dependence and neighboring-cell synchrony constrain additive information interpretations.",
    "No new entropy estimator, neural decoder or raw-event analysis is reproduced.",
    "The inferred information measure is distinct from physical spike timing and from a demonstrated biological communication function."], [0, 2]);

const correctionClaim = "D-org-hofer-figure-correction";
claims.push({ id: correctionClaim, kind: "review-finding", status: "definition",
  statement: "The official Hofer correction replaces a duplicated Figure 6 with the corrected S-cone comparison and also prints the correct Figure 9 for L/M-cone comparisons. They remain analyses of the original observations rather than new data.",
  scope: "Source-reading and figure-identity boundary", citations: [cite("hofer2006-mosaic-erratum",
    "J Neurosci. 2006;26(2):722, complete correction text and corrected Figures 6 and 9 with legends", "method")],
  checkIds: [], limitations: ["The notice is unsigned, has no displayed DOI and does not resolve all classification or supplementary-analysis limitations.", commonLimit] });
node("hofer-corrected-figures", "Corrected cone-mosaic figure identities", "definition",
  claims.at(-1).statement, [correctionClaim], [{ sourceId: "hofer2006-mosaic-erratum",
    locator: "J Neurosci. 2006;26(2):722, complete correction text and corrected Figures 6 and 9 with legends" }], [], "definition");

function scope(card, slug, name, statement, studyIds, gap, reusedClaims = []) {
  const definitionId = `D-org-${slug}`, unknownId = `C-org-${slug}-unresolved`;
  const sourceCoordinates = [{ sourceId: "legacy-5", locator: `/${card}` }];
  const support = studyIds.flatMap((id) => [acquisitions.get(id).findingId, acquisitions.get(id).methodId]);
  const citations = [cite("legacy-5", `/${card}`, "provenance"), ...studyIds.map((id) => {
    const context = acquisitions.get(id);
    return cite(context.record.sourceId, context.record.reviewedLocators[0], "method");
  })];
  claims.push({ id: definitionId, kind: "review-finding", status: "definition", statement,
    scope: "A source-bound topic definition, not a universal arising or generative law", citations,
    checkIds: [], limitations: [gap, commonLimit] });
  claims.push({ id: unknownId, kind: "review-finding", status: "unresolved", statement: gap,
    scope: "Unestablished mechanisms and transfer beyond the admitted preparations", citations,
    checkIds: [], limitations: ["Definitions and source examples do not establish universal necessity, full quantitative transfer or original SOMA ontology.", commonLimit] });
  node(slug, name, "definition", statement, [definitionId, ...support, ...reusedClaims, unknownId], sourceCoordinates, [gap], "definition");
  node(`${slug}-unresolved`, `${name}: unresolved transfer`, "hypothesis", gap, [unknownId], sourceCoordinates, [], "hypothesis");
  for (const id of studyIds) relations.push({ id: `organismal:${id}-scope-${slug}`,
    source: `org:${id}-response`, target: `org:${slug}`, kind: "descriptive", role: "definition-dependency",
    assertion: "This preparation-specific finding constrains the scope of the topic; it is not a developmental or necessary-parent link.",
    claimIds: [definitionId, acquisitions.get(id).findingId, acquisitions.get(id).methodId], contextIds: [id] });
  relations.push({ id: `organismal:${slug}-unresolved`, source: `org:${slug}`, target: `org:${slug}-unresolved`,
    kind: "descriptive", role: "definition-dependency", assertion: "The definition retains the named unestablished transfer and mechanism questions.", claimIds: [definitionId, unknownId] });
  return { code: `5.${card}`, sourceIndex: card, originalName: name, scope: statement,
    nodeIds: [`org:${slug}`, `org:${slug}-unresolved`, ...studyIds.flatMap((id) => [`org:${id}-context`, `org:${id}-response`])],
    claimIds: [definitionId, ...support, ...reusedClaims, unknownId], assertions: [], parentDispositions: [],
    excludedDefaults: ["Catalogue Phase, TypeRole, Science, Requirements and established status do not establish a scientific ontology or experimental result.",
      "All original parent weights, necessary/enabling labels, causal-direction and interaction codes, carrier codes and N_min/N_crit/N_sat values are excluded from physical semantics."], unresolved: [gap] };
}
const optical = scope(18, "ocular-optical-interface", "Eye Optical Interface",
  "A supplied ocular optical interface is described through whole-eye wavefront measurement, anterior-boundary manipulation and a separate component model. These constrain image-forming optics without establishing organogenesis, every enabling tissue function or an active alignment controller.",
  ["artal2001-wavefronts", "artal2001-saline", "artal2001-component-model"],
  "The reviewed optical measurements do not reconstruct transparency maintenance, pupil-control dynamics, accommodation, developmental assembly, a unique compensation mechanism or a complete spectral-to-neural transfer function.", ["P-liang1997"]);
const sampling = scope(19, "retinal-sampling-organization", "Retinal Sampling Geometry and Ordered Visual Mapping",
  "Retinal sampling is separated into local photoreceptor-class geometry, measurement/classification uncertainty and an independently prepared retinal-to-collicular projection. A registered sampling representation, anatomical topography and visual performance are different claims.",
  ["hofer2005-local-mosaic", "hofer2005-mosaic-analysis", "hofer2005-erg-comparison", "triplett2011-collicular-projection", "triplett2011-retrograde-tracing", "triplett2011-map-model"],
  "Whole-field receptor-density/anisotropy maps, matched local convergence ratios, perceptual acuity and a unique developmental mechanism are not jointly measured in these preparations. Local adult mosaics and developing mouse central projections cannot be combined into one complete visual map.",
  ["P-curcio1990", "D-retinal-sampling", "C-retinal-ocular-optics-spatial-sampling", correctionClaim]);
const circuit = scope(20, "retinal-processing-organization", "Retinal Circuit Preprocessing",
  "Circuit preprocessing is reconstructed through reversible surround/opponency interventions already admitted in primate tissue and new mouse direction/polarity experiments. Stimulus history, cell class, spectral access, readout and model assumptions constrain which transformation is actually supported.",
  ["rivlin2012-adaptation", "rivlin2012-on-blockade", "vlasits2014-silencing", "vlasits2014-polarity", "vlasits2014-phase-model"],
  "The reviewed cases do not identify every preprocessing mechanism, quantify a universal noise/redundancy reduction or establish that anatomy uniquely fixes a stable filter. The proposed phase/crossover implementation and ecological downstream use remain discriminating-test obligations.",
  ["P-crook2011", "C-retinal-cone-drive-retinal-filtering"]);
const encoding = scope(21, "retinal-spike-encoding", "Retinal Ganglion Spike Encoding",
  "Retinal spike encoding is described by measured input-dependent spike timing/counts and separate analytical interpretations. Natural synaptic input, somatic injection, intrinsic ganglion photoreception, downstream relay and hypothetical code use retain their distinct preparations.",
  ["murphy2006-light-response", "murphy2006-conductance-clamp", "berry1997-salamander", "berry1997-rabbit", "berry1997-information"],
  "The admitted retinal measurements do not establish a universal analog-to-digital threshold law, noise-resistant communication guarantee, optimal multiplexing code or complete downstream use of inferred information. Supplied cells and measured conductances are not a de novo spike-generator construction.",
  ["P-do2009", "P-fohlmeister1997", "V-usrey1998", "C-retinal-retinal-filtering-ganglion-spiking", "C-retinal-excitable-membrane-ganglion-spiking"]);

const decision = (topic, disposition, claimIds, reason) => ({ topic, disposition, claimIds, reason });
const parent = (parentCode, disposition, claimIds, reason) => ({ parentCode, disposition, claimIds, reason });
optical.assertions = [
  decision("Integrated refraction and image-forming ocular optics", "qualified", ["C-org-artal2001-wavefronts", "C-org-artal2001-saline"], "Whole-eye and neutralized-boundary measurements provide a specified adult optical preparation, not a reconstruction of every component or species."),
  decision("Cornea, lens and chamber media as one component decomposition", "qualified", ["C-org-artal2001-component-model"], "Internal optics includes posterior cornea and media; subtraction and approximate common-plane assumptions prevent attribution to the lens alone."),
  decision("Focusing, pupil control, transparency and axis stabilization", "unresolved", ["C-org-ocular-optical-interface-unresolved"], "The selected study fixes accommodation/pupil conditions and does not dynamically perturb or measure all these physiological functions."),
  decision("Coupling can improve performance relative to isolated components", "supported", ["C-org-artal2001-wavefronts", "C-org-artal2001-component-model"], "The measured and reconstructed optical comparison supports bounded component compensation, with model dependence and the goggle cross-check retained."),
  decision("An identified developmental or active alignment mechanism", "unresolved", ["C-org-artal2001-component-model", "C-org-ocular-optical-interface-unresolved"], "The paper itself leaves active/passive origin and detailed alignment mechanisms unsettled."),
  decision("Optics supplies retinal illumination without itself proving neural computation", "qualified", ["D-org-ocular-optical-interface", "P-liang1997"], "Optical and tested visual improvements are kept within their own source reading; retinal transduction is not inferred from a wavefront."),
  decision("Universal organ-level object arising and necessary developmental order", "excluded", ["D-org-ocular-optical-interface"], "The supplied anatomical eye and catalogue object label do not establish a universal construction or necessity theorem.")
];
optical.parentDispositions = [
  parent("5.1", "qualified", ["D-org-ocular-optical-interface"], "Existing eyes supply the optical preparation; general organogenesis is not experimentally established as a single necessary parent."),
  parent("5.0", "unresolved", ["C-org-ocular-optical-interface-unresolved"], "These adult measurements do not reconstruct morphogenetic precision or a developmental dependency."),
  parent("4.7", "unresolved", ["C-org-ocular-optical-interface-unresolved"], "Adhesion/contact mechanisms are not independently manipulated in the admitted ocular experiment; the original generic requirement and counts are not retained.")
];
sampling.assertions = [
  decision("Retinal density gradients, anisotropy and individual variation", "qualified", ["P-curcio1990", "C-org-hofer2005-local-mosaic"], "The older Curcio statement remains abstract-only; the new detailed observations are local near-foveal patches, not a new complete density map."),
  decision("Geometric packing differs from a regular cone-class lattice", "supported", ["C-org-hofer2005-local-mosaic", "C-org-hofer2005-mosaic-analysis", correctionClaim], "Class labels and spatial statistics vary; corrected S versus L/M comparisons and blur-sensitive assignments are explicit."),
  decision("Relative cone composition determines visual precision or normal color vision uniquely", "excluded", ["C-org-hofer2005-local-mosaic", "C-org-hofer2005-erg-comparison"], "Selected observers retain normal test scores across markedly different ratios; association and model-derived gain do not uniquely specify performance."),
  decision("Layered circuitry, local convergence ratios and region-specific acuity", "unresolved", ["C-org-retinal-sampling-organization-unresolved"], "These new contexts do not jointly quantify layer organization, local convergence and behavioral acuity at each sampled location."),
  decision("Ordered visual mapping equals photoreceptor geometry", "excluded", ["D-retinal-sampling", "C-org-triplett2011-retrograde-tracing"], "A sampling representation and a central anatomical projection are different measured or defined objects."),
  decision("Retinocollicular order depends on the specified developmental preparation", "supported", ["C-org-triplett2011-collicular-projection", "C-org-triplett2011-retrograde-tracing"], "Genotype and tracing comparisons retain target compression, dispersed origins, ages and assay boundaries."),
  decision("Competition is a uniquely established general map constructor", "unresolved", ["C-org-triplett2011-map-model", "C-org-retinal-sampling-organization-unresolved"], "The mutation is not selective scalar competition control; model assumptions, mismatch and unread SI prevent universal identification."),
  decision("Optical input generates receptor positions or retinal map order", "excluded", ["C-retinal-ocular-optics-spatial-sampling"], "The existing explicit boundary distinguishes an incident field from receptor placement."),
  decision("SOMA pattern identity supplies a stable generative law", "excluded", ["D-org-retinal-sampling-organization"], "The topic definition supplies no independent experimental authority to phase/type or parent-count codes.")
];
sampling.parentDispositions = [
  parent("5.18", "qualified", ["C-retinal-ocular-optics-spatial-sampling"], "Optical transfer can supply an irradiance field to sampling; it does not form the receptor mosaic or determine a central projection."),
  parent("5.10", "qualified", ["D-org-retinal-sampling-organization", "C-org-hofer2005-local-mosaic"], "Named differentiated cone classes are present, but a necessary universal tissue-specialization construction is not tested."),
  parent("4.7", "unresolved", ["C-org-retinal-sampling-organization-unresolved"], "No matched contact/adhesion intervention establishes the inherited necessity or numerical carrier thresholds.")
];
circuit.assertions = [
  decision("Retinal circuits transform photoreceptor-derived responses", "qualified", ["C-retinal-cone-drive-retinal-filtering", "C-org-vlasits2014-polarity"], "Specified primate and mouse preparations support different transformations; they are not pooled into one transfer function."),
  decision("Center-surround and color opponency require generic inhibitory transmitters", "excluded", ["P-crook2011"], "The retained primate pharmacology separates HEPES-sensitive surround from GABA/glycine blockade; lateral inhibition cannot be reduced to one generic transmitter arrow."),
  decision("Anatomical organization fixes a stable direction-selective filter", "excluded", ["C-org-rivlin2012-adaptation", "C-org-vlasits2014-silencing"], "Selected circuits change tuning after stimulation or targeted conductance manipulation, with stable and ambiguous outcomes retained."),
  decision("Temporal response and inhibitory/excitatory interaction are preparation-specific", "supported", ["C-org-rivlin2012-on-blockade", "C-org-vlasits2014-polarity"], "Pathway blockade, response timing and polarity experiments constrain functional organization without identifying every synapse."),
  decision("Gain adjustment, contrast enhancement and noise/redundancy suppression are guaranteed", "unresolved", ["C-org-retinal-processing-organization-unresolved"], "These studies do not measure every proposed gain/noise quantity or a universal efficient-code objective."),
  decision("The phase-shift model establishes the unique biological reversal mechanism", "excluded", ["C-org-vlasits2014-phase-model"], "The model supplies a conditional mechanism and omits the full circuit; it is not another physiological acquisition."),
  decision("Retinal preprocessing establishes cortical interpretation or downstream benefit", "unresolved", ["C-org-retinal-processing-organization-unresolved"], "Ecological and higher-center use is not jointly tested with the retained retinal perturbations."),
  decision("Universal pattern arising and all necessary parent relations", "excluded", ["D-org-retinal-processing-organization"], "A scoped circuit topic does not establish a universal SOMA pattern or construction order.")
];
circuit.parentDispositions = [
  parent("5.19", "qualified", ["D-org-retinal-processing-organization", "C-org-vlasits2014-polarity"], "Spatial and spectral sampling conditions constrain specific responses, but geometric sampling alone does not fix the filter."),
  parent("5.10", "qualified", ["D-org-retinal-processing-organization", "C-org-vlasits2014-silencing"], "Identified cell populations are supplied; necessity and development of all layered tissue types are not reconstructed."),
  parent("4.3", "qualified", ["C-org-vlasits2014-silencing", "C-org-rivlin2012-on-blockade"], "Named conductance and pathway interventions support local effects, not the inherited abstract signaling necessity or weights.")
];
encoding.assertions = [
  decision("Graded input is converted into ganglion action-potential sequences", "qualified", ["C-org-murphy2006-conductance-clamp", "C-retinal-excitable-membrane-ganglion-spiking"], "Controlled input changes measured spike output, while membrane state alone is not a complete spike-generator specification."),
  decision("Every ganglion spike requires preceding retinal circuit preprocessing", "excluded", ["P-do2009", "C-retinal-retinal-filtering-ganglion-spiking"], "Existing intrinsic ganglion photoreception and persistent spiking after surround removal refute that universal necessity."),
  decision("Timing, rate/count and synchrony carry a uniquely identified code", "qualified", ["C-org-berry1997-salamander", "C-org-berry1997-rabbit", "C-org-berry1997-information"], "Timing and count statistics are measured or inferred separately; synchrony and actual decoding need additional population/readout tests."),
  decision("Spike generation makes output universally noise-resistant", "excluded", ["C-org-murphy2006-light-response", "C-org-murphy2006-conductance-clamp", "C-org-berry1997-salamander"], "Input variability, cell selection, contrast and analysis definitions change precision; low-contrast count variability can exceed Poisson."),
  decision("Fine spike timing is limited by an unavoidable fixed intrinsic noise floor", "excluded", ["C-org-murphy2006-conductance-clamp"], "Fixed injected conductances yield greater precision than natural input under the tested blocker conditions; this is a bounded counterexample, not proof of zero intrinsic noise."),
  decision("Axonal propagation and conditional downstream efficacy follow one invariant symbol", "qualified", ["V-usrey1998", "C-org-retinal-spike-encoding-unresolved"], "The existing retinal/thalamic paired-spike association has its own preparation and unidentified mechanism; retinal recordings do not prove an invariant downstream code."),
  decision("Temporal multiplexing, optimality and complete brain use of inferred information", "unresolved", ["C-org-berry1997-information", "C-org-retinal-spike-encoding-unresolved"], "The source information estimate depends on ensemble and independence assumptions and explicitly leaves biological readout open."),
  decision("A universal analog-to-discrete process or numeric threshold construction", "excluded", ["D-org-retinal-spike-encoding"], "The studies use existing cells and preparation-specific dynamics; they do not validate original ontology, universal threshold counts or a general construction recipe.")
];
encoding.parentDispositions = [
  parent("5.20", "qualified", ["C-retinal-retinal-filtering-ganglion-spiking", "P-do2009"], "Preprocessing shapes specified cone-driven responses but is not necessary for every ganglion spike."),
  parent("4.21", "qualified", ["C-retinal-excitable-membrane-ganglion-spiking", "C-org-murphy2006-conductance-clamp"], "Membrane excitability is a scoped context, not a sufficient potential-only generator or an admitted inherited threshold."),
  parent("4.3", "qualified", ["C-org-murphy2006-light-response", "P-do2009"], "Specific synaptic drives modulate output; intrinsic light responses prevent a universal upstream signaling necessity.")
];

for (const [local, external] of [["ocular-optical-interface", "ocular-optics"], ["retinal-sampling-organization", "spatial-sampling"],
  ["retinal-processing-organization", "retinal-filtering"], ["retinal-spike-encoding", "ganglion-spiking"]]) {
  relations.push({ id: `organismal:${local}-existing-${external}`, source: `org:${local}`, target: `ret:${external}`,
    kind: "descriptive", role: "definition-dependency", assertion: "These records address related topics while preserving their actual source readings and distinct preparation boundaries; this link asserts no physical formation or necessity.",
    claimIds: [`D-org-${local}`, `C-org-${local}-unresolved`] });
}
relations.push({ id: "organismal:corrected-figures-sampling-scope", source: "org:hofer-corrected-figures", target: "org:retinal-sampling-organization",
  kind: "descriptive", role: "definition-dependency", assertion: "Source interpretation uses the corrected figure identities without treating the correction as new observations.", claimIds: [correctionClaim, "D-org-retinal-sampling-organization"] });

function testAlternative(id, alternative, candidate, sourceIds, discriminator, result, limit, claimIds) {
  comparisons.push({ id, candidate, alternative, sourceIds, discriminator, result, limit,
    assumptions: ["Preparations and source publications remain distinct; these retrospective comparisons are not a prospective independent transfer test."], claimIds });
}
testAlternative("organismal-ocular-component-quality", "The best isolated component determines assembled ocular image quality.",
  "Relative component wavefronts and boundary conditions can change the assembled response.", ["artal2001-ocular-compensation"],
  "Compare complete-eye aberration with corneal measurements, component estimates and the separate saline cross-check.", "specified-alternative-disfavored",
  "Restricted young-eye measurements and model-dependent component estimates do not identify a universal active optimization mechanism.", ["C-org-artal2001-wavefronts", "C-org-artal2001-component-model"]);
testAlternative("organismal-regular-retinal-labels", "Packed photoreceptor geometry establishes a fixed regular L/M class lattice and common ratio.",
  "Class composition, local assignment uncertainty and S versus L/M spatial statistics differ.", ["hofer2005-cone-mosaic", "hofer2006-mosaic-erratum"],
  "Read the local classifications and corrected S/L/M figure comparisons with the blur limits.", "specified-alternative-disfavored",
  "The selected patches and source analyses do not establish every density gradient or a unique developmental sorting law.", ["C-org-hofer2005-local-mosaic", "C-org-hofer2005-mosaic-analysis", correctionClaim]);
testAlternative("organismal-topographic-mechanism", "An anatomical map fit uniquely establishes a general competition generator.",
  "Mutation, input population, chemical/activity assumptions and target-boundary model choices remain discriminating variables.", ["triplett2011-topographic-competition"],
  "Compare whole-eye distribution, focal tracing and the explicitly mismatched model predictions.", "inconclusive",
  "No independent SI fit or selective intervention on competition alone is reconstructed.", ["C-org-triplett2011-collicular-projection", "C-org-triplett2011-retrograde-tracing", "C-org-triplett2011-map-model"]);
testAlternative("organismal-fixed-direction-filter", "A supplied anatomical circuit fixes directional preference independently of recent stimulus and signaling state.",
  "Functional tuning changes under recent stimulation or targeted conductance manipulation.", ["rivlinetzion2012-direction-reversal", "vlasits2014-starburst-polarity"],
  "Retest defined cells after grating history and compare calcium responses before/during/after targeted ligand exposure.", "specified-alternative-disfavored",
  "The two publications share a research lineage, use different readouts and do not uniquely identify the reversal mechanism or prove behavioral use.", ["C-org-rivlin2012-adaptation", "C-org-vlasits2014-silencing", "C-org-vlasits2014-phase-model"]);
testAlternative("organismal-intrinsic-timing-floor", "A fixed intrinsic spike-generator noise floor necessarily limits the observed light-response precision.",
  "Trial-varying network input is an important limitation in the tested cells and conditions.", ["murphy2006-retinal-timing"],
  "Compare natural light responses with fixed and varying somatic conductance inputs under source blockers.", "specified-alternative-disfavored",
  "Somatic injection and pharmacological isolation do not prove globally noiseless spiking or equivalence to spatial synaptic input.", ["C-org-murphy2006-conductance-clamp"]);
testAlternative("organismal-universal-retinal-code", "Every retinal output is sparse, sub-Poisson, reliably noise-resistant and fully used by downstream circuits.",
  "Cell class, contrast, stimulus ensemble, event definitions and downstream readout matter.", ["berry1997-retinal-spike-trains", "murphy2006-retinal-timing"],
  "Retain low-contrast Fano factors, heterogeneous rabbit firing and the assumptions of inferred information.", "specified-alternative-disfavored",
  "The narrow empirical counterexamples do not identify a unique code or quantify natural-scene communication performance.", ["C-org-berry1997-salamander", "C-org-berry1997-rabbit", "C-org-berry1997-information", "C-org-retinal-spike-encoding-unresolved"]);

export const ORGANISM_RETINAL_RECORDS = { sources, entities, claims, relations, studies, comparisons, readiness };
export const CARD_SCOPES = [optical, sampling, circuit, encoding];
