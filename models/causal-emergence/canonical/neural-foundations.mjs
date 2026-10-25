// Catalogue scope contracts reuse source-bound evidence without inventing a neural hierarchy.
const sources = [], entities = [], claims = [], relations = [], studies = [], comparisons = [], readiness = [];
export const CARD_SCOPES = [];

const commonLimit = "Internal reconstruction of already admitted evidence, not an independent scientific review, raw-data replay, laboratory replication or universal construction law. Study preparations, reading extents, contrary results and unresolved mechanisms remain those of the cited records.";
const excludedDefaults = [
  "Original Level, Phase and TypeRole values organize the author's catalogue; they do not measure a developmental sequence, physical dimension or necessary stage of emergence. The process/pattern/property distinction is a descriptive choice.",
  "Original Science, ScientificStatus and Requirements classifications are author-supplied indexing; they do not establish scientific consensus, complete coverage or operational success criteria.",
  "Original parent Weight, CausalDirections, InteractionModes, DependencyType, OntologicalRole and Necessity entries are not calibrated causal effects or universally necessary dependencies. Every ordered parent occurrence is assessed separately below; no catalogue parent becomes an active physical edge.",
  "Original Quantization carrier-group/type codes, N_min, N_crit and N_sat do not operationalize physical components, minimal assemblies, critical transitions or saturation laws. Unknown counts remain unknown.",
  "Original abbreviated references are bibliographic leads. The inherited sources retain their actual identities, editions, source roles and limited reading extents; several contexts from one publication are not independent replications."
];

// Explicit references to existing entities and claims; this module adds no replacement observations.
const evidence = new Map();
function existing(key, nodeId, claimIds, references) {
  evidence.set(key, { nodeId, claimIds, references });
}
existing("development", "neur:developmental-connectivity", ["N-witvliet2021"], [["witvliet2021", "Abstract and Results: Uniform growth and stable brain geometry, PDF p. 1"]]);
existing("synaptogenesis", "neur:presynaptic-differentiation", ["N-scheiffele2000", "C-neural-neuroligin-contact-presynaptic-differentiation"], [["scheiffele2000", "Abstract"]]);
existing("potentiation", "neur:dentate-potentiation", ["N-bliss1973"], [["bliss1973", "Numbered abstract 1-6"]]);
existing("nmda-induction", "neur:ca1-potentiation-induction", ["N-collingridge1983", "C-neural-nmda-antagonism-ca1-potentiation-induction"], [["collingridge1983", "Numbered abstract 1-6"]]);
existing("learning-hypothesis", "neur:plasticity-learning", ["N-plasticity-learning"], [["citri2008", "Abstract"]]);
existing("gamma", "neur:gamma-response", ["N-cardin2009"], [["cardin2009", "Abstract and figure legends 1-4"]]);
existing("phase", "neur:sensory-response", ["N-cardin2009-phase"], [["cardin2009", "Abstract and figure legends 1-4"]]);
existing("rhythm-hypothesis", "neur:rhythm-coding", ["N-rhythm-coding"], [["wang2010", "Abstract"]]);
existing("choice-stimulation", "neur:motion-choice-rt", ["C-hanks-choice"], [["hanks2006", "Abstract; Results: LIP microstimulation affects choice and reaction time; Figures 1-3"]]);
existing("choice-correlation", "neur:decision-correlations", ["C-katz-correlations"], [["katz2016", "Abstract; main text and Figures 1-3"]]);
existing("lip-null", "neur:lip-motion-null", ["C-katz-lip-null"], [["katz2016", "Abstract; main text and Figures 1-3"]]);
existing("spatial-choice", "neur:lip-free-choice", ["C-katz-free-choice"], [["katz2016", "Abstract; main text and Figures 1-3"]]);
existing("mt-sensitivity", "neur:mt-motion-sensitivity", ["C-katz-mt"], [["katz2016", "Abstract; main text and Figures 1-3"]]);
existing("choice-timecourse", "neur:motion-bias-timecourse", ["C-jeurissen-motion"], [["jeurissen2022", "Summary, Results, Discussion and Figures 1-4"]]);
existing("accumulator", "neur:accumulator-hypothesis", ["C-accumulator"], [["hanks2006", "Discussion; Methods: Behavioral Task, Electrophysiology and Data Analysis"]]);
existing("cue-combination", "neur:height-cue-combination", ["C-ernst-height"], [["ernst2002", "Main text, equations 1-7 and Figures 1-3, pp. 429-433"]]);
existing("optimality", "neur:perception-optimality", ["C-perception-optimality"], [["ernst2002", "Main text, equations 1-7 and Figures 1-3, pp. 429-433"]]);
existing("localization", "neur:hand-localization", ["C-wolpert-localization"], [["wolpert1995", "Main text and Figures 1-3, pp. 1880-1882"]]);
existing("internal-model", "neur:internal-model-hypothesis", ["C-internal-model"], [["wolpert1995", "References and Notes 8-9: experimental procedure, GAM and model assumptions, p. 1882"]]);
existing("adaptation", "neur:reaching-adaptation", ["C-shadmehr-adaptation"], [["shadmehr1994", "Abstract"]]);
existing("aftereffect", "neur:reaching-aftereffect", ["C-shadmehr-aftereffect"], [["shadmehr1994", "Abstract"]]);
existing("projection", "neur:projection-exploration", ["C-tye-projection"], [["tye2011", "Abstract; main text and Figures 1-4 captions"]]);
existing("somata", "neur:somatic-exploration", ["C-tye-somata"], [["tye2011", "Abstract; main text and Figures 1-4 captions"]]);
existing("projection-inhibition", "neur:inhibited-projection-exploration", ["C-tye-inhibition"], [["tye2011", "Abstract; main text and Figures 1-4 captions"]]);
existing("affect-hypothesis", "neur:affective-property", ["C-affective-property"], [["tye2011", "Abstract; main text and Figures 1-4 captions"]]);
existing("lc-awakening", "neur:lc-awakening", ["C-carter-awakening"], [["carter2010", "Abstract; Results through high-frequency stimulation; Figures 1-4 captions; Discussion: Tuning arousal"]]);
existing("lc-maintenance", "neur:lc-wake-maintenance", ["C-carter-wake-maintenance"], [["carter2010", "Abstract; Results through high-frequency stimulation; Figures 1-4 captions; Discussion: Tuning arousal"]]);
existing("lc-null", "neur:lc-inactive-null", ["C-carter-inactive-null"], [["carter2010", "Abstract; Results through high-frequency stimulation; Figures 1-4 captions; Discussion: Tuning arousal"]]);
existing("global-hypothesis", "neur:global-modulation", ["C-global-modulation"], [["carter2010", "Abstract; Results through high-frequency stimulation; Figures 1-4 captions; Discussion: Tuning arousal"]]);
existing("culture", "neur:culture-avalanches", ["C-beggs-culture"], [["beggs2003", "Abstract; Materials and Methods; Results; Discussion; figure captions"]]);
existing("acute", "neur:acute-avalanches", ["C-beggs-acute"], [["beggs2003", "Abstract; Materials and Methods; Results; Discussion; figure captions"]]);
existing("picrotoxin", "neur:picrotoxin-event-distribution", ["C-beggs-picrotoxin"], [["beggs2003", "Abstract; Materials and Methods; Results; Discussion; figure captions"]]);
existing("criticality", "neur:criticality-hypothesis", ["C-neural-criticality"], [["beggs2003", "Abstract; Materials and Methods; Results; Discussion; figure captions"]]);
existing("synchrony", "neur:synchrony-criticality", ["C-synchrony-criticality"], [["beggs2003", "Abstract; Materials and Methods; Results; Discussion; figure captions"]]);
existing("resting-attractor", "neur:resting-attractor-hypothesis", ["C-resting-attractor"], [["deco2012", "Abstract; Methods: Empirical neuroanatomical and functional connectivity matrix; Global cortical model"]]);
existing("content-decoding", "neur:visual-feature-decoding", ["C-cogitate-decoding"], [["cogitate2025", "Abstract; Main; Preregistered predictions and analyses; Decoding of conscious content"]]);
existing("duration", "neur:visual-duration-readout", ["C-cogitate-duration"], [["cogitate2025", "Maintenance of conscious content; Interareal connectivity; Figures 1-4 captions; Discussion"]]);
existing("phase-consistency", "neur:visual-phase-consistency", ["C-cogitate-ppc"], [["cogitate2025", "Maintenance of conscious content; Interareal connectivity; Figures 1-4 captions; Discussion"]]);
existing("amplitude-connectivity", "neur:visual-amplitude-connectivity", ["C-cogitate-dfc"], [["cogitate2025", "Maintenance of conscious content; Interareal connectivity; Figures 1-4 captions; Discussion"]]);
existing("experience", "neur:conscious-emergence", ["C-conscious-emergence"], [["cogitate2025", "Abstract; Main; Preregistered predictions and analyses; Decoding of conscious content"]]);
existing("iit", "neur:iit-2004", ["C-iit-2004"], [["tononi2004", "Abstract; Background; Presentation of the hypothesis: opening, Information, Integration and Spatio-temporal characteristics"]]);
existing("gnwt", "neur:gnwt-access", ["C-gnwt-access"], [["dehaene2011", "Abstract, Introduction and Conscious State versus Conscious Contents, p. 200"]]);
existing("workspace", "neur:gwt-blackboard", ["C-gwt-blackboard"], [["baars1988", "Section 2.2 and Figure 2.3, printed pp. 86-89 (PDF pp. 111-114), visually inspected"]]);
existing("hcrt-awakening", "neur:hcrt-awakening", ["C-hcrt-awakening"], [["adamantidis2007", "Abstract; main text and Figures 1-4 captions"]]);
existing("hcrt-frequency-null", "neur:hcrt-low-frequency-null", ["C-hcrt-low-frequency-null"], [["adamantidis2007", "Abstract; main text and Figures 1-4 captions"]]);
existing("hcrt-duration-null", "neur:hcrt-duration-null", ["C-hcrt-duration-null"], [["adamantidis2007", "Abstract; main text and Figures 1-4 captions"]]);
existing("hcrt-antagonist", "neur:hcrt-antagonist-latency", ["C-hcrt-antagonist"], [["adamantidis2007", "Abstract; main text and Figures 1-4 captions"]]);
existing("two-process", "neur:sleep-two-process", ["C-sleep-two-process"], [["borbely1982", "PubMed record: Human Neurobiology 1(3), 195-204; PMID 7185792"]]);
existing("sleep-homeostasis", "neur:sleep-homeostasis", ["C-sleep-homeostasis"], [["tononi2014", "Summary and opening rationale"], ["tononi2014", "Conclusions and caveats"]]);
existing("ensemble-observation", "neur:task-calcium-ensembles", ["C-ensemble-observation"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-disruption", "neur:ensemble-disrupted-performance", ["C-ensemble-disruption"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-recall", "neur:ensemble-recalled-performance", ["C-ensemble-recall"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-null", "neur:ensemble-control-null", ["C-ensemble-control-null"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-selection", "neur:ensemble-gray-selection", ["C-ensemble-gray-selection"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-generalization", "neur:ensemble-generalization", ["C-ensemble-generalization"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("ensemble-perception", "neur:ensemble-perception", ["C-ensemble-perception"], [["carrilloreid2019", "Summary; Introduction; Results; Figures 1-7 captions; Discussion"]]);
existing("signal-atlas", "neur:signal-atlas", ["C-signal-atlas"], [["randi2023", "Abstract; Main; Figures 1-6 and Extended Data captions; Discussion"]]);
existing("avdr", "neur:avdr-response", ["C-avjr-avdr"], [["randi2023", "Abstract; Main; Figures 1-6 and Extended Data captions; Discussion"]]);
existing("avar", "neur:avar-response", ["C-aver-avar"], [["randi2023", "Abstract; Main; Figures 1-6 and Extended Data captions; Discussion"]]);
existing("ollr", "neur:ollr-response", ["C-saadl-ollr"], [["randi2023", "Abstract; Main; Figures 1-6 and Extended Data captions; Discussion"]]);
existing("anatomy-function", "neur:connectome-function-identity", ["C-connectome-function-identity"], [["randi2023", "Abstract; Main; Figures 1-6 and Extended Data captions; Discussion"]]);
existing("information", "neur:neural-information-identity", ["C-neural-information-identity"], [["shannon1948", "Combined corrected reprint: Introduction, PDF pp. 1-2; Section 6, PDF pp. 10-11"]]);
existing("retinal-transfer", "vis:retinogeniculate-transfer", ["V-usrey1998", "C-visual-ganglion-spiking-retinogeniculate-transfer"], [["usrey1998", "Results, pp. 384-385: paired-spike recordings and mechanism limitation"]]);
existing("cortical-input", "vis:geniculocortical-input", ["V-reid1995"], [["reid1995", "Abstract"]]);
existing("cortical-response", "vis:v1-simple-response", ["V-reid1995", "C-visual-geniculocortical-input-v1-simple-response"], [["reid1995", "Abstract"]]);
existing("feedback", "vis:dlgn-feedback-response", ["V-denman2015"], [["denman2015", "Abstract"], ["denman2015", "Figure legends 1-3"], ["denman2015", "Materials and Methods: Procedures, Expression of opsins and Acute experiment preparation"]]);
existing("monkey-columns", "vis:primate-feature-organization", ["V-hubel1968"], [["hubel1968", "Abstract"]]);
existing("rat-selectivity", "vis:rat-orientation-selectivity", ["V-ohki2005"], [["ohki2005", "Abstract"]]);
existing("v4-modulation", "vis:v4-modulation", ["V-moore2003"], [["moore2003", "Abstract"]]);
existing("predictive", "vis:predictive-coding-hypothesis", ["V-predictive"], [["rao1999", "Abstract"]]);

function card(index, originalName, slug, scope, keys, assertions, parents, unresolved, hypothesis = false) {
  const selected = keys.map(key => {
    const item = evidence.get(key);
    if (!item) throw new Error(`Unknown neural foundation evidence ${key}`);
    return item;
  });
  const claimId = `D-cog-${slug}-scope`, nodeId = `cog:${slug}`;
  const findingClaims = [...new Set(selected.flatMap(item => item.claimIds))];
  const references = [...new Map(selected.flatMap(item => item.references).map(([sourceId, locator]) =>
    [`${sourceId}\n${locator}`, { sourceId, locator }])).values()];
  const citation = (sourceId, locator, role, note) => ({ sourceId, locator, role, note });
  claims.push({ id: claimId, kind: "author-definition", statement: scope,
    scope: `Catalogue card 6.${index}: an explicit scope contract for the selected source records; measured findings and unresolved interpretations retain their original claims.`,
    status: "definition", citations: [
      citation("legacy-6", `/${index}`, "provenance", "Original author-supplied catalogue wording and ordered parent inventory, not scientific validation."),
      citation("neural-systems-review", `Card 6.${index} scope contract`, "supports", "Internal scoped reconstruction, not independent scientific review"),
      ...references.map(({ sourceId, locator }) => citation(sourceId, locator, "limits", "Use the inherited source reading extent and exact scientific claim; this catalogue scope is not an additional experiment or replication."))
    ], checkIds: [], limitations: [...excludedDefaults, ...unresolved, commonLimit] });
  entities.push({ id: nodeId, name: `${originalName}: reviewed scope`,
    kind: hypothesis ? "hypothesis" : "definition", description: scope,
    claimIds: [claimId, ...findingClaims], status: hypothesis ? "hypothesis" : "definition",
    sourceCoordinates: [{ sourceId: "legacy-6", locator: `/${index}` },
      { sourceId: "neural-systems-review", locator: `Card 6.${index} scope contract` }, ...references],
    openObligations: [...unresolved, commonLimit], level: 6 });
  readiness.push({ nodeId, role: hypothesis ? "hypothesis" : "definition",
    denotes: scope, instanceAdmission: "none", claimIds: [claimId, ...findingClaims] });
  for (const item of selected) relations.push({
    id: `neural-systems:${item.nodeId.replace(":", "-")}-qualifies-${slug}`,
    source: item.nodeId, target: nodeId, kind: "descriptive", role: "definition-dependency",
    assertion: "This existing evidence or explicit hypothesis constrains the reviewed catalogue scope. The relation is representational; it asserts no physiological influence, universal prerequisite or additional independent observation.",
    claimIds: [claimId, ...item.claimIds]
  });
  const qualify = ([topic, disposition, reason, selectedKeys]) => ({ topic, disposition, reason,
    claimIds: selectedKeys ? [claimId, ...new Set(selectedKeys.flatMap(key => {
      const item = evidence.get(key);
      if (!item || !keys.includes(key)) throw new Error(`Evidence outside neural card 6.${index}: ${key}`);
      return item.claimIds;
    }))] : [claimId, ...findingClaims] });
  CARD_SCOPES.push({ sourceIndex: index, code: `6.${index}`, originalName, scope,
    nodeIds: [nodeId, ...selected.map(item => item.nodeId)], claimIds: [claimId, ...findingClaims],
    assertions: assertions.map(qualify), parentDispositions: parents.map(([parentCode, ...rest]) => {
      const { topic: _topic, ...entry } = qualify([parentCode, ...rest]);
      return { parentCode, ...entry };
    }), excludedDefaults: [...excludedDefaults], unresolved });
}

card(0, "Formation of Neural Networks", "neural-network-formation-scope",
  "Neural network formation is reconstructed through anatomical developmental comparisons in different C. elegans individuals and an axon-contact coculture intervention. Similar neurite geometry can coexist with changing chemical connectivity, while neuroligin-expressing nonneuronal contacts can induce local presynaptic differentiation. These are different species/preparations and different endpoints; neither establishes a complete persistent network, its physiological coupling weights, a universal modular architecture or a developmental hierarchy. A structural connection, local differentiation and measured effective propagation remain distinct evidence types.",
  ["development", "synaptogenesis", "signal-atlas", "anatomy-function"],
  [["Reproducible neural connectivity architecture during development", "supported", "Fixed-animal developmental reconstructions show broadly retained neurite geometry with changing chemical connectivity; this is comparative anatomical evidence, not a longitudinal formation intervention.", ["development"]],
   ["Formation among differentiated excitable cells", "qualified", "Neuroligin-expressing nonneuronal contact induces a local presynaptic endpoint in existing axons, demonstrating that the tested contact need not already be a complete neuron-to-neuron circuit.", ["synaptogenesis"]],
   ["Persistence and enduring identity rather than a transient growth episode", "qualified", "Different fixed animals cannot prove within-individual lifelong persistence or exclude continuing structural remodeling; retained geometry and immutable connectivity are different claims.", ["development"]],
   ["Directed pathways and weighted physiological couplings", "qualified", "Chemical synapse annotations and effective calcium responses are separate measures. Anatomical connection weights are not synaptic efficacy or calibrated causal influence.", ["development", "signal-atlas", "anatomy-function"]],
   ["Modularity, hubs, clustering and long-range integration", "unresolved", "The selected developmental and contact results do not jointly establish these topological descriptors, their functional effects or one species-general network architecture."],
   ["Structural substrate determines future propagation", "qualified", "Anatomy constrains candidate paths, but effective propagation can include indirect/extrasynaptic contributions and does not uniquely follow from one anatomical matrix.", ["signal-atlas", "anatomy-function"]],
   ["Network formation entails rhythmic coupling, plastic reweighting and specialization", "excluded", "These require their own interventions and readouts; local synaptic differentiation or a developmental connectome does not demonstrate the whole bundle."],
   ["Pattern role and absence of cognition or behavior", "qualified", "Pattern is the catalogue's description of organization. The sampled assays do not measure learning or behavior, so lack of such measurements is not proof that those capacities are absent."]],
  [["5.7", "qualified", "The nervous-system coordination category supplies context, not an experimentally isolated prerequisite of connectome formation. Anatomical development and local presynaptic differentiation are the admitted endpoints.", ["development", "synaptogenesis"]],
   ["5.5", "unresolved", "Neither experiment isolates whole-organ homeostatic regulation as a necessary parent or measures its proposed maintenance weight."],
   ["4.3", "qualified", "The neuroligin-contact assay supports a particular molecular interaction; it does not establish all cellular signaling as a quantified universal input.", ["synaptogenesis"]]],
  ["Longitudinal connectivity stability, physiological weights, gap-junction coverage, causal developmental mechanisms, general modularity and matched anatomy-to-function prediction remain open."]);

card(1, "Synaptic Plasticity and Learning", "synaptic-plasticity-learning-scope",
  "Activity-dependent plasticity is represented by persistent dentate population-response changes after perforant-path conditioning and NMDA-antagonist sensitivity of CA1 potentiation induction. Behavioral force-field adaptation and aftereffects provide a separate learning-related trajectory, without a directly measured bridge to those hippocampal synapses. Potentiation induction, basal transmission, excitability, behavioral retention and structural remodeling are not interchangeable. The general claim that synaptic history implements learning remains a hypothesis requiring task-specific causal tests.",
  ["potentiation", "nmda-induction", "learning-hypothesis", "adaptation", "aftereffect"],
  [["Prior activation changes subsequent response", "supported", "Conditioning changes later dentate field responses in the reported anesthetized-rabbit assay; persistence concerns that endpoint and observation window.", ["potentiation"]],
   ["Synaptic strength or efficacy changes rather than only excitability", "qualified", "Population EPSP and population spike outcomes are distinct; the abstract-level reading does not identify every contribution as a pure synaptic weight.", ["potentiation"]],
   ["NMDA signaling is necessary for plasticity", "qualified", "DL-APV blocks induction under the sampled CA1 conditions while sparing basal responses at the reported doses; this is not necessity for all plasticity or ongoing transmission.", ["nmda-induction"]],
   ["Potentiation, depression, stabilization, weakening and structural remodeling form one proven process", "qualified", "The selected experiments directly support potentiation-related endpoints. They do not supply a complete comparative set of depression, structural turnover and stabilization assays."],
   ["Persistent synaptic traces establish behavioral learning", "unresolved", "The hippocampal assays contain no adopted behavioral-learning measure. Motor adaptation has behavioral aftereffects but no matched synaptic intervention identifies its storage mechanism.", ["learning-hypothesis", "adaptation", "aftereffect"]],
   ["Experience-sensitive updating of later response dynamics", "supported", "Force-field practice and field-removal aftereffects demonstrate history-dependent reaching trajectories within a separate behavioral task.", ["adaptation", "aftereffect"]],
   ["Process role and no requirement for symbolic or conscious processing", "qualified", "Process describes ordered change. The evidence neither requires symbolic/conscious reports for the measured endpoints nor proves a universal taxonomy of learning."]],
  [["6.0", "qualified", "The tested pathways already exist, but no matched formation manipulation establishes the entire generic formation card as a distinct necessary stage.", ["potentiation", "nmda-induction"]],
   ["5.7", "unresolved", "Whole-organ physiological coordination is not independently varied to test necessity for these local plasticity endpoints."],
   ["4.3", "qualified", "CA1 pharmacology distinguishes induction from basal transmission, supporting a specific signaling condition rather than a universal all-signaling dependency.", ["nmda-induction"]]],
  ["Read full original hippocampal methods and test specific storage mechanisms in matched behavioral tasks; LTD, structural remodeling, general retention and transfer remain outside these assays."]);

card(2, "Brain Oscillations and Rhythms", "brain-rhythms-scope",
  "Rhythmic organization is reconstructed through fast-spiking-cell activation that amplifies local gamma and a phase-sensitive whisker-response assay in barrel cortex. Local field potential, sorted unit response and stimulation timing remain distinct observables. The results support a preparation-bound intervention on temporal organization; they do not establish every frequency band, cross-frequency coupling, whole-brain synchrony, semantic code or universal prerequisite for cognition.",
  ["gamma", "phase", "rhythm-hypothesis"],
  [["Coherent recurrent activity and gamma timing", "supported", "The fast-spiking-cell manipulation increases local gamma in the declared preparation, with cell-type and recording boundaries.", ["gamma"]],
   ["Phase relations change when sensory interaction is effective", "supported", "Whisker-evoked responses vary with phase relative to experimentally induced gamma, providing a specific temporal-interaction example.", ["phase"]],
   ["Distributed cross-network and cross-frequency coupling", "unresolved", "A local induced-gamma preparation does not map coupling across all networks or establish cross-frequency coordination."],
   ["A stable pattern rather than a firing event or physical object", "qualified", "Pattern is a descriptive scale choice. Experimentally imposed rhythmic epochs do not establish permanent autonomous rhythm identity."],
   ["Routing, gating and entrainment as one universal timing architecture", "qualified", "The phase-response contrast supports conditional sensory responsiveness, not every proposed routing function or all natural oscillations.", ["phase", "rhythm-hypothesis"]],
   ["Rhythms imply neural code, cognition or conscious experience", "excluded", "No adopted cognitive-content or subjective-experience assay identifies these interpretations from local gamma.", ["rhythm-hypothesis"]]],
  [["6.0", "qualified", "An existing local circuit carries the induced response, but the experiment does not test the generic developmental network-formation dependency.", ["gamma"]],
   ["6.1", "unresolved", "Synaptic plasticity is not selectively manipulated or shown necessary for the observed induced gamma or phase dependence."],
   ["5.7", "unresolved", "Physiological coordination of organs is not an isolated causal input in this cortical recording assay."]],
  ["Full main preparation and spectral methods, anesthetic state, endogenous versus driven rhythm, cross-area routing and competing nonoscillatory explanations require further tests."]);

card(3, "Cognitive Processing and Decision Making", "decision-making-scope",
  "Decision making is reconstructed through task-specific macaque motion choices, reaction times, spatial free choices and perturbation time courses. LIP stimulation alters choices and response times, while one verified LIP-silencing design shows no detected motion deficit despite strong decision-related correlations; a different design reports early bias with attenuation. MT silencing and spatial control tasks give further contrasts. Evidence accumulation, competitive thresholds and compensation are candidate explanations, not a uniquely identified universal cognitive architecture.",
  ["choice-stimulation", "choice-correlation", "lip-null", "spatial-choice", "mt-sensitivity", "choice-timecourse", "accumulator"],
  [["Distributed activity relates to task choices", "supported", "Recorded decision-related activity and choices covary, while correlation is kept distinct from necessity.", ["choice-correlation"]],
   ["Neural intervention changes selection and response time", "supported", "Response-field-selected LIP microstimulation biases choice and directional response times in the reported task; current spread and connected recruitment remain alternatives.", ["choice-stimulation"]],
   ["Decision-related activity establishes a necessary local decision mechanism", "excluded", "Verified LIP silencing can leave the sampled motion performance without a detected deficit while affecting a spatial task; MT silencing gives a different response.", ["lip-null", "spatial-choice", "mt-sensitivity"]],
   ["Evidence accumulation, inhibition, competition and threshold crossing", "qualified", "These model operations can explain aspects of behavior but are not each directly identified as a uniquely implemented neural stage.", ["accumulator"]],
   ["Persistent deficits are invariant across task and observation time", "excluded", "Different LIP designs and trial/session-resolved attenuation show that targeting, task geometry and observation window matter.", ["lip-null", "choice-timecourse"]],
   ["Attenuation proves synaptic learning or a specific compensation route", "unresolved", "Reported early-bias attenuation does not directly measure synaptic plasticity; initial-bias selection and alternative compensation mechanisms remain open.", ["choice-timecourse"]],
   ["General cognitive control and internal-state selection", "qualified", "The measured alternatives are task choices and timed movements; all internal regulation, abstract cognition and every decision family are not reconstructed."],
   ["Process role without language, symbolic representation or reflective awareness", "qualified", "Those categories are not the measured outcomes. The task evidence cannot establish a universal exclusion or developmental ordering among them."]],
  [["6.0", "qualified", "Area-specific interventions operate in existing networks, without identifying a universal anatomical assembly or formation stage required for all decisions.", ["choice-stimulation", "mt-sensitivity"]],
   ["6.1", "unresolved", "The sampled acute interventions do not isolate synaptic plasticity as a necessary parent, and behavioral compensation is not itself a synaptic assay.", ["choice-timecourse", "accumulator"]],
   ["6.2", "unresolved", "No matched phase/rhythm perturbation establishes oscillations as the generic necessary cause of these task choices."]],
  ["Task-matched perturbation comparisons, unbiased time-course analyses, selective mechanism tests and held-out model predictions are needed before a shared decision rule or general hierarchy."]);

card(4, "Sensory Integration and Perception", "sensory-integration-scope",
  "Sensory integration is represented by a visual-haptic height-discrimination experiment in four adult observers. Manipulated visual reliability and small cue discrepancies alter combined judgments and thresholds in a way resembling a declared maximum-likelihood comparison. The model assumes aligned cues, independent Gaussian estimator noise and a uniform prior. This is bounded behavioral cue combination, not a directly identified neural implementation, every multisensory operation or proof of universally optimal or consciously unified perception.",
  ["cue-combination", "optimality"],
  [["Signals from more than one modality contribute to a judgment", "supported", "Combined visual and haptic height judgments vary with the declared reliability and discrepancy manipulations.", ["cue-combination"]],
   ["Reliability-sensitive weighting under noise", "supported", "Observed weights and thresholds resemble the experiment's maximum-likelihood predictions in its selected range and small sample.", ["cue-combination"]],
   ["Convergence, alignment, disambiguation and temporal stabilization are all established", "qualified", "The task supplies aligned spatial cues and finite judgments, not a causal neural circuit for every listed integration operation."],
   ["Unified coherent perceptual states under arbitrary incompleteness", "unresolved", "The adopted height task does not measure all subjective unity, temporal coherence, missing-cue conditions or large cue conflicts.", ["optimality"]],
   ["One statistically optimal algorithm explains perception", "excluded", "The comparison depends on noise and prior assumptions; no universal optimality or unique biological implementation follows.", ["optimality"]],
   ["Integrated outcomes guide all later cognition and action", "qualified", "A discrimination report is one behavioral output; transfer to every downstream cognitive or motor process is untested."],
   ["Process role without semantics, symbols or conscious awareness", "qualified", "Process is a project description. Absence of a separate awareness assay is not evidence of absence of experience in these human observers."]],
  [["6.0", "unresolved", "The behavioral experiment does not manipulate network formation or establish a minimal anatomical integration architecture."],
   ["6.1", "unresolved", "No matched plasticity blockade establishes synaptic learning as necessary for the measured cue-combination response."],
   ["5.7", "unresolved", "Whole-organ coordination is not an experimentally separated parent of the selected visual-haptic judgments."]],
  ["Correlated-noise, non-Gaussian and robust-integration alternatives, larger discrepancies, temporal alignment, developmental/generalization cohorts and neural necessity require separate tests."]);

card(5, "Motor Coordination and Control", "motor-control-scope",
  "Motor control is reconstructed through force-dependent hand-localization judgments, force-field reaching adaptation and field-removal aftereffects. The localization experiment contrasts assistive, resistive and null forces during constrained movement without arm vision; its tuned state-estimator account remains separate from the measured biases. Reaching adaptation supplies a different behavioral preparation with only abstract-level inherited reading. These examples do not identify one neural Kalman filter, all feedback/gain operations or a complete distributed movement-control circuit.",
  ["localization", "internal-model", "adaptation", "aftereffect"],
  [["Sensory information and movement history influence motor-related estimates", "supported", "Assistive/resistive forces change localization bias differently; this measures hand-position judgments rather than all aspects of movement execution.", ["localization"]],
   ["Practice-dependent adaptation and error-sensitive output", "supported", "Reaching paths approach baseline shape during practice in an imposed force field.", ["adaptation"]],
   ["Changed response persists when the field is removed", "supported", "Oppositely directed aftereffects distinguish the practiced history from the initial exposure response, within the reported task.", ["aftereffect"]],
   ["Predictive internal models uniquely implement the response", "unresolved", "A trial-and-error-tuned state estimator can explain localization patterns, but a unique neural estimator or coordinate system is not directly observed.", ["internal-model"]],
   ["Sequencing, initiation, timing, gain and online feedback correction", "qualified", "The selected force/localization and reaching endpoints test subsets of control. They do not jointly isolate every listed operation or its anatomical route."],
   ["Stable and adaptable movement across arbitrary changing conditions", "qualified", "Finite force-field contrasts demonstrate bounded adaptation, not unlimited robustness or a complete stability proof.", ["adaptation", "aftereffect"]],
   ["Process role and no requirement for intentionality or goal semantics", "qualified", "The process label describes ordered tasks; the experiments do not isolate intentionality or prove universal absence of goal representation."]],
  [["6.0", "unresolved", "The behavioral tasks do not manipulate formation of neural networks or determine a minimum control architecture."],
   ["6.1", "qualified", "Behavioral practice and aftereffects are learning-related, but their synaptic carrier is unmeasured; a generic synaptic-plasticity necessity is not admitted.", ["adaptation", "aftereffect"]],
   ["5.7", "qualified", "Movement involves an organism, but the source tasks do not separately perturb a general organ-coordination parent or calibrate its contribution.", ["localization"]]],
  ["Full force-field methods and participant identities, matched neural interventions, alternative estimator families, causal feedback pathways and cross-task stability bounds remain open."]);

card(6, "Emotional and Affective Processing", "affective-processing-scope",
  "Affective processing is represented by projection-specific changes in mouse open-arm/center exploration under distinct BLA-to-CeA activation and inhibition preparations. Terminal activation and direct BLA somatic activation produce contrasting exploration outcomes; inhibition uses a separate low-stress bilateral preparation. These assays support bounded circuit effects on behavioral proxies. They do not measure subjective feeling, a single system-wide evaluative property or simultaneous control of valence, salience, cognition, perception, learning and motor readiness.",
  ["projection", "somata", "projection-inhibition", "affect-hypothesis"],
  [["Affect-related circuit interventions change behavioral response tendencies", "supported", "The source reports reversible exploration contrasts after targeted projection manipulation, limited to its assay and cohort.", ["projection", "projection-inhibition"]],
   ["One anatomical region has one affective effect", "excluded", "Direct BLA somatic activation and CeA terminal activation change open-arm exploration in opposite directions; recruitment location matters.", ["projection", "somata"]],
   ["Activation and inhibition are interchangeable symmetric controls", "excluded", "High-stress/unilateral activation and low-stress/bilateral inhibition are different preparations, preventing silent pooling into one dose-response curve.", ["projection", "projection-inhibition"]],
   ["System-wide valence, arousal, salience and motivational property", "unresolved", "Exploration proxies do not jointly identify these latent dimensions or a single global state variable.", ["affect-hypothesis"]],
   ["Affective state reallocates resources and changes learning, decision thresholds and perception", "unresolved", "These source experiments do not jointly measure those outputs or identify their causal mediators."],
   ["Behavioral proxy directly establishes conscious feeling", "excluded", "The source-bound exploration measures remain distinct from subjective emotional experience.", ["affect-hypothesis"]],
   ["Property role as a neural regime rather than a process", "qualified", "This is a representational choice; the interventions are temporally structured processes and do not independently validate the catalogue's ontological distinction."]],
  [["6.0", "qualified", "Projection targeting identifies a circuit context but no generic network-formation stage or necessary minimal affect architecture.", ["projection"]],
   ["6.1", "unresolved", "The exploration manipulation does not selectively test synaptic learning as a necessary parent."],
   ["6.3", "unresolved", "A general decision-making process is not independently perturbed or shown necessary for these exploration endpoints."],
   ["4.25", "unresolved", "No matched basal cytokine intervention or immune mediator assay identifies cytokine baseline as the universal prerequisite of these neural effects."],
   ["5.24", "unresolved", "Chronic low-grade inflammation is not an isolated necessary input in these projection-specific preparations; no universal inflammatory requirement is inferred."]],
  ["Full supplemental controls, matched stress/laterality conditions, direct affective-outcome definitions, distributed readouts and separate cytokine/inflammation causal tests remain open."]);

card(7, "Global Neurotransmitter Modulation", "neuromodulatory-state-scope",
  "Neuromodulation is reconstructed through optogenetic LC manipulations and EEG/EMG-defined mouse sleep/wake endpoints. Brief activation promotes awakening; prolonged active-period inhibition reduces wake duration but leaves awakenings possible; inactive-period inhibition has no detected duration effect. These schedule- and state-dependent results support a particular noradrenergic circuit contribution. They do not establish a spatially uniform global transmitter state, identical effects of dopamine/serotonin/acetylcholine or unchanged anatomical topology.",
  ["lc-awakening", "lc-maintenance", "lc-null", "global-hypothesis"],
  [["A transmitter-defined population influences neural operating state", "supported", "LC activation changes EEG/EMG-defined sleep-to-wake transitions in the specified mouse assay.", ["lc-awakening"]],
   ["Neuromodulation supports wake maintenance", "supported", "Active-period hour-long inhibition reduces wakefulness and wake-episode duration, with the inherited preparation and control boundaries.", ["lc-maintenance"]],
   ["The same intervention imposes one state in all contexts", "excluded", "Inactive-period inhibition produces no detected duration effect, and inhibition does not prevent every awakening.", ["lc-maintenance", "lc-null"]],
   ["All dopamine, serotonin, noradrenaline and acetylcholine systems share one property", "unresolved", "Only a particular LC preparation is adopted here; cross-transmitter identity and global uniformity are unmeasured.", ["global-hypothesis"]],
   ["Excitability, gain, learning sensitivity and threshold shifts are jointly established", "qualified", "Sleep-state readouts do not measure all these variables or isolate a common receptor/circuit mediator."],
   ["Operating regimes change without altering core network topology", "unresolved", "The acute protocol does not include a before/after anatomical topology assay; apparent rapidity alone cannot establish topology invariance.", ["global-hypothesis"]],
   ["Attention, reinforcement and state-dependent responsiveness share one global control mechanism", "unresolved", "The measured sleep/wake effects cannot supply all task-specific attention and reinforcement mechanisms."],
   ["Property role for system-wide chemical biasing", "qualified", "Property is a scope label for the proposed state description; it is not a separately measured universal entity."]],
  [["6.0", "qualified", "Genetically targeted LC neurons operate within an existing circuit; generic network formation is not independently tested as a parent.", ["lc-awakening"]],
   ["6.1", "unresolved", "The protocol does not isolate synaptic-plasticity necessity for the acute state transition or duration response."],
   ["5.7", "qualified", "Wakefulness is organismal, but organ-coordination breadth and a common weighted physiological prerequisite are not established by EEG/EMG state scoring.", ["lc-maintenance"]]],
  ["Transmitter/receptor-specific mediation, spatial distribution, endogenous firing-to-release mapping, topology measurements and matched attention/reinforcement tasks require distinct evidence."]);

card(8, "Network Synchronization and Criticality", "synchrony-criticality-scope",
  "Collective dynamics are reconstructed through sampled LFP event cascades in cortical cultures, separate drug-activated acute slices and the distributional response to culture picrotoxin. Event threshold, sampling and binning define an avalanche; phase synchronization and criticality at a specified transition require additional observables. Recovery of an event-size distribution after washout supports a bounded reversible perturbation. Scale-like statistics alone do not prove self-organized criticality, optimal information processing or a necessary organizational condition for cognition.",
  ["culture", "acute", "picrotoxin", "criticality", "synchrony", "resting-attractor"],
  [["Scale-spanning event cascades in recorded neural preparations", "supported", "Thresholded/binned cortical LFP events have the source-reported size statistics, with culture and acute-slice preparations kept distinct.", ["culture", "acute"]],
   ["Changing inhibition changes collective event organization", "supported", "Picrotoxin changes culture event-size distributions toward a bimodal form, with reported washout recovery.", ["picrotoxin"]],
   ["Phase alignment, synchrony and avalanche statistics are one pattern", "excluded", "These are different measurement definitions; neither event grouping nor a power law directly measures phase coordination.", ["synchrony"]],
   ["A power law proves a critical neural mechanism and self-organization", "excluded", "Sampling/binning choices and alternative stochastic mechanisms prevent identification of a unique transition from scaling alone.", ["criticality"]],
   ["Integration-segregation balance, dynamic range and efficient propagation", "qualified", "These are hypotheses or model-dependent performance claims. A simulated optimum is not an independently measured biological optimum.", ["criticality", "resting-attractor"]],
   ["Flexible reconfiguration and rapid transitions across whole neural systems", "unresolved", "The selected culture perturbation does not establish all whole-brain transitions or a universal resting-state attractor mechanism."],
   ["Criticality is a necessary condition for higher integration", "unresolved", "No matched intervention independently measures distance to a specified transition and demonstrates a necessary cognitive consequence.", ["criticality"]],
   ["Pattern role distinct from cognition or subjective experience", "qualified", "Pattern is a description of recorded organization; the source assays do not themselves measure cognition or experience."]],
  [["6.0", "qualified", "Existing cortical tissue supplies a preparation, without identifying a universal topological formation rule or minimum architecture.", ["culture", "acute"]],
   ["6.2", "unresolved", "Rhythms and phase synchronization are not established as necessary inputs to the measured event cascades.", ["synchrony"]],
   ["6.7", "qualified", "The acute preparation includes joint agonist exposure and the culture experiment alters inhibition; these are not isolated evidence for a necessary global neuromodulatory state.", ["acute", "picrotoxin"]]],
  ["Raw event/bin sensitivity, transition-specific order parameters, alternative-model tests, the unresolved Figure 4 refractory discrepancy and independent biological performance measurements remain open."]);

card(9, "Emergence of Conscious Experience", "conscious-experience-scope",
  "Conscious experience remains an explicitly unresolved theoretical scope. IIT, GNWT and conceptual global-workspace architecture are distinct versioned proposals, not one combined physiological rule. The COGITATE visual-task data provide region/feature/modality-dependent decoding, duration-related activity and differing preregistered phase versus exploratory amplitude connectivity results. These recordings neither causally generate experience nor measure Phi or establish a unique necessary integration threshold. Reportable access, neural content readout and subjective experience remain distinct explanatory targets.",
  ["content-decoding", "duration", "phase-consistency", "amplitude-connectivity", "experience", "iit", "gnwt", "workspace"],
  [["Experiential presence is an established emergent property", "unresolved", "The original card is already hypothetical; the admitted neural readouts do not close the explanatory gap or establish a generative mechanism.", ["experience"]],
   ["Integrated availability, recurrence and temporal coherence constitute one sufficient condition", "unresolved", "Theories assign different roles to these terms and require operational mappings and discriminating tests; their conjunction is not a measured sufficient condition.", ["iit", "gnwt", "workspace"]],
   ["Content decoding demonstrates neural representation of selected visual features", "qualified", "Decoding differs by feature, region and modality; it does not establish every consciously experienced feature or a universal generator.", ["content-decoding"]],
   ["Sustained experience requires the predicted prefrontal onset-offset profile", "qualified", "Posterior duration-related responses and failure to detect the preregistered prefrontal profile constrain the specified prediction, while theory-version interpretations remain disputed.", ["duration", "gnwt"]],
   ["Temporal coherence confirms both theories' connectivity predictions", "excluded", "Preregistered phase consistency did not support the specified gamma/beta predictions; exploratory amplitude connectivity is a different analysis and cannot silently replace it.", ["phase-consistency", "amplitude-connectivity"]],
   ["No single band, circuit or structure is a universally accepted mechanism", "qualified", "Multiple competing source interpretations and bounded readouts support retaining uncertainty, not a proof that every possible local mechanism is impossible.", ["experience"]],
   ["Reportable access, conscious content and subjective experience are identical", "excluded", "Task-dependent readouts, conceptual accessibility and experiential explanation require distinct operational/explanatory criteria.", ["experience", "workspace", "gnwt"]],
   ["Property role establishes a new ontological level", "unresolved", "Property is a project representation of the question; no measured ontological transition, minimum carrier count or sufficient physical construction is admitted."]],
  [["6.0", "qualified", "The neural experiments use existing brains but do not identify a universal formation architecture sufficient for experience.", ["content-decoding", "experience"]],
   ["6.3", "unresolved", "Task behavior does not separately establish generic decision making as a universally necessary experiential parent or exclude task/report confounds."],
   ["6.8", "unresolved", "No measured critical transition or generic avalanche/synchrony necessity is established for subjective experience; phase-consistency predictions also remain constrained.", ["phase-consistency", "experience"]],
   ["5.24", "unresolved", "No chronic low-grade inflammation manipulation in the adopted consciousness study establishes this card as a necessary causal parent."],
   ["5.25", "unresolved", "No immune resilience/constraint manipulation or trade-off readout establishes a universal requirement for conscious experience."]],
  ["Theory-version reconciliation and correction notices, matched awareness/report contrasts, causal neural perturbations, held-out discrimination and an operational bridge to subjective experience remain open."], true);

card(10, "Regulation of Sleep–Wake Cycles", "sleep-wake-regulation-scope",
  "Sleep/wake regulation is reconstructed through EEG/EMG-defined mouse transition and duration endpoints under distinct Hcrt and LC interventions. Hcrt stimulation shortens post-stimulation wake latency under specified trains, with low-frequency and total-duration nulls and receptor-blockade contrasts. LC activation and inhibition have schedule- and circadian-period-dependent effects. Transition probability/latency, wake duration and sleep function are separate; two-process and synaptic-homeostasis accounts remain interpretations rather than experimentally closed universal state-control laws.",
  ["hcrt-awakening", "hcrt-frequency-null", "hcrt-duration-null", "hcrt-antagonist", "lc-awakening", "lc-maintenance", "lc-null", "two-process", "sleep-homeostasis"],
  [["Neural interventions change sleep-to-wake transitions", "supported", "Specified Hcrt trains shorten post-stimulation latency and brief LC activation promotes awakening; these are distinct cell populations and schedules.", ["hcrt-awakening", "lc-awakening"]],
   ["Wake initiation and wake maintenance are one outcome", "excluded", "Hcrt transition increases can occur without a detected total-duration change; LC inhibition changes active-period wake duration while awakenings remain possible.", ["hcrt-duration-null", "lc-maintenance"]],
   ["Frequency and state conditions determine whether effects are detected", "supported", "Hcrt 1-Hz and LC inactive-period duration comparisons supply scoped nulls; they are not exact zero effects or thresholds for all brains.", ["hcrt-frequency-null", "lc-null"]],
   ["Peptide/receptor exclusivity or universal necessity", "qualified", "Systemic Hcrt-R1 blockade attenuates the selected effect, but activation, blockade and knockout are distinct interventions and do not prove one exclusive route.", ["hcrt-antagonist"]],
   ["Coordinated changes in all information flow, excitability and oscillatory structure", "qualified", "EEG/EMG state scoring does not map every proposed whole-brain variable or identify one global operating-mode carrier."],
   ["Sleep controls plastic consolidation, metabolic recovery and homeostatic timing", "unresolved", "These functions are not directly established by the transition/duration experiments; two-process and synaptic-homeostasis proposals require their own tests.", ["two-process", "sleep-homeostasis"]],
   ["Sleep/wake regulation gates all consciousness and learning", "unresolved", "The selected experiments contain no matched experience or learning-efficiency assay and cannot establish these universal dependencies."],
   ["Property role separates regime control from conscious content", "qualified", "The graph distinguishes state labels from content and function; that useful distinction is not proof of a universal ontological property."]],
  [["6.0", "qualified", "The experiments identify particular populations in existing networks, not the generic formation card as a separately demonstrated necessary parent.", ["hcrt-awakening", "lc-awakening"]],
   ["6.2", "qualified", "EEG patterns help operationalize state, but a diagnostic signal is not by itself a causal oscillation prerequisite; no general rhythm necessity is established."],
   ["6.7", "qualified", "LC intervention contributes to state regulation under specific conditions, with inactive-period and residual-awakening limits; this does not validate a universal global-transmitter prerequisite.", ["lc-awakening", "lc-maintenance", "lc-null"]]],
  ["Full supplemental data, latency exclusions, receptor-specific causal routes, homeostatic/circadian model equations and independent tests of consolidation, metabolic recovery and experience remain open."]);

card(11, "Functional Specialization of Neural Ensembles", "neural-ensemble-specialization-scope",
  "Functional ensembles are reconstructed as operational calcium co-activation groups in a learned visual licking task. Selected stimulation can disrupt or improve task-associated ensemble recruitment and measured performance, while non-pattern-completion controls do not show the same improvement. Gray-screen behavioral comparisons condition on a small successful-recall subset. These results support task- and selection-specific participation; they do not establish fixed anatomical modules, universal division of labor, minimum functional units or the subjective percept caused by stimulation.",
  ["ensemble-observation", "ensemble-disruption", "ensemble-recall", "ensemble-null", "ensemble-selection", "ensemble-generalization", "ensemble-perception"],
  [["Subsets preferentially participate in a task", "supported", "Thresholded calcium co-activation defines mouse-specific task ensembles; the operational definition is retained.", ["ensemble-observation"]],
   ["Ensemble-related intervention changes measured performance", "supported", "Nonselective-cell activation disrupts Go recruitment/performance, while selected pattern-completion stimulation improves recruitment and the declared performance score under low contrast.", ["ensemble-disruption", "ensemble-recall"]],
   ["Any task-selective neurons are sufficient to recall the ensemble", "excluded", "The non-pattern-completion Go-cell condition lacks the improvement seen with selected cells; selection criteria matter.", ["ensemble-null", "ensemble-recall"]],
   ["Repeated success establishes an unconditional stimulation effect", "qualified", "Gray-screen successful recall occurs in about 5% of stimulation trials and the behavioral contrast conditions on that subset; it is not an all-trial effect.", ["ensemble-selection"]],
   ["Stable recurrent connectivity, inter-ensemble coordination and global coherence", "unresolved", "Calcium co-activation and CRF statistical dependencies are not measured recurrent synapses or a whole-network coordination map.", ["ensemble-observation", "ensemble-generalization"]],
   ["Mesoscopic ensembles are universal minimal functional units", "unresolved", "Task-defined grouping and selected stimulation do not establish unique anatomical membership or physical minimality across tasks/species.", ["ensemble-generalization"]],
   ["Evoked learned action proves subjective perception", "excluded", "A licking response does not uniquely identify visual experience or the proposed recurrent assembly mechanism.", ["ensemble-perception"]],
   ["Pattern role and division of labor without symbols or awareness", "qualified", "Pattern describes preferential participation; broader modular differentiation and absence of awareness are not independently measured."]],
  [["6.0", "qualified", "Existing cortical neurons support a selected task, without an experimentally verified universal network-formation prerequisite.", ["ensemble-observation"]],
   ["6.3", "qualified", "The learned Go/No-Go behavior supplies a task context; a general decision-making node is not separately manipulated as a necessary parent.", ["ensemble-disruption", "ensemble-recall"]],
   ["6.8", "unresolved", "The ensemble study does not measure distance to a critical point or establish a necessary synchrony/criticality regime."]],
  ["Raw trial and membership analyses, success-selection sensitivity, anatomical connectivity, separate-day controls, alternative ensemble definitions and selective cross-task necessity remain open."]);

card(12, "Information Processing in Neural Connectomes", "connectome-information-processing-scope",
  "Connectomic processing is reconstructed through targeted neural stimulation and downstream calcium responses in immobilized C. elegans. AVJR-to-AVDR and AVER-to-AVAR increases and a SAADL-to-OLLR decrease are preparation-bound effective responses, potentially including indirect routes. An anatomical connectome, a perturbation-response atlas, a statistical dependency and a Shannon communication model are distinct objects. The evidence does not identify every path, hub operation, recurrent computation, semantic content or a universal mapping from wiring to function.",
  ["signal-atlas", "avdr", "avar", "ollr", "anatomy-function", "information"],
  [["Physically realized propagation follows targeted stimulation", "supported", "The named upstream activations precede downstream calcium changes in the WT-background TWISP preparation, supporting bounded effective responses.", ["avdr", "avar", "ollr"]],
   ["Anatomical edge and measured effective response are identical", "excluded", "Effective responses can include indirect and extrasynaptic paths; no unique direct synapse follows from downstream calcium.", ["signal-atlas", "anatomy-function"]],
   ["Topology and regime jointly constrain dynamics", "qualified", "Anatomical models and measured propagation provide distinct constraints; unique prediction requires weight/sign/state assumptions and explicit model comparison.", ["anatomy-function"]],
   ["Unmeasured pairs, nonsignificant responses and nonconnections are equivalent", "excluded", "The atlas distinguishes missing measurement, failure to detect and equivalence-tested nonconnection; these cannot be collapsed into absent causal edges.", ["signal-atlas"]],
   ["Parallel routing, convergence, divergence, recurrence and hubs are all measured", "qualified", "Selected effective responses and an atlas do not separately identify every route or demonstrate a complete recurrent/hub-mediated integration mechanism."],
   ["Observed calcium transfer identifies information or computation", "unresolved", "A Shannon analysis needs declared variables, source/channel mapping and estimates; propagation alone identifies no semantic content or optimal code.", ["information"]],
   ["The atlas independently validates existing Structural Geometry analyses", "excluded", "Processed-export aggregation and the publication response classifier/q-values are different procedures; no independent reproduction is claimed.", ["signal-atlas"]],
   ["Process role without symbolic manipulation or abstract computation", "qualified", "Process describes the experimental trajectory; excluding symbolic interpretation does not establish a complete theory of physical information processing."]],
  [["6.0", "qualified", "Existing material connectivity supplies anatomical context, but a developmental formation law and a unique anatomy-to-function map are not demonstrated.", ["anatomy-function"]],
   ["6.8", "unresolved", "Neither phase synchrony nor a critical operating regime is established as a necessary parent of the named calcium responses."],
   ["6.11", "unresolved", "The preparation does not establish task-specialized cortical ensembles as a prerequisite for nematode propagation; cross-species categories cannot be imported as physical causes."]],
  ["Direct versus indirect paths, response-classifier replay, full state/sampling sensitivity, explicit communication variables and held-out anatomy-to-function prediction remain open."]);

card(22, "Thalamic Visual Relay and Gain Control", "thalamic-visual-relay-scope",
  "Thalamic visual transfer is reconstructed through paired-spike retinal efficacy and separate corticogeniculate perturbation results. Closely spaced retinal spikes differ in conditional transfer efficacy; removing layer-6 cortical input can increase or decrease dLGN responses depending on cell and contrast, while driving input reduces evoked counts in the read source. The feedback preparation uses adult GN220 Ntsr1-Cre mice during acute isoflurane-anesthetized recordings, with concentration adjusted around 1.2% using cortical LFP state. These observations distinguish retinal transmission from cortical feedback and exclude one universal positive-gain sign. They do not identify the transfer's unique cellular mechanism or jointly establish awake attention, neuromodulation, noise suppression and oscillatory routing.",
  ["retinal-transfer", "feedback"],
  [["Retinal input undergoes conditional thalamic transfer", "supported", "Closely spaced retinal spikes show different conditional transfer efficacy in the paired extracellular recording preparation.", ["retinal-transfer"]],
   ["The thalamus is only a passive unchanged relay", "qualified", "Timing-dependent efficacy and a response to corticogeniculate manipulation support conditional throughput, without proving all proposed active-control mechanisms.", ["retinal-transfer", "feedback"]],
   ["Cortical feedback has a universally amplifying gain effect", "excluded", "Input removal yields heterogeneous signs depending on cell and contrast; driving input can reduce evoked counts.", ["feedback"]],
   ["The feedback preparation directly demonstrates awake attentional control", "excluded", "The acute recordings use adult GN220 Ntsr1-Cre mice under LFP-adjusted isoflurane around 1.2%; the 2% surgical/injection condition is distinct. An activated cortical LFP pattern is not an awake behaving preparation.", ["feedback"]],
   ["Observed paired-spike efficacy identifies facilitation or integration mechanism", "unresolved", "Extracellular correlations do not distinguish presynaptic facilitation from postsynaptic integration.", ["retinal-transfer"]],
   ["Retinal, feedback and neuromodulatory inputs are jointly isolated", "unresolved", "The selected experiments are separate contexts and do not supply a factorial test of all three input classes."],
   ["Noise suppression, phase precision, synchrony and attentional routing", "unresolved", "These functions are not all measured by spike-transfer efficacy or the read feedback abstract/legends; no general state-control architecture is inferred."],
   ["Early thalamic control precedes every later cortical integration stage", "qualified", "The physiological pathway context does not establish a universal acyclic developmental order; feedback itself runs cortex to thalamus.", ["feedback"]],
   ["Process role for context-sensitive signal flow", "qualified", "Process is an organizational description of the assays, not a validated minimum thalamic construction rule."]],
  [["5.21", "qualified", "The paired retinal/LGN recordings support a specific retinal-spike-to-transfer effect; no scalar weight, population minimum or all-retinal encoding necessity follows.", ["retinal-transfer"]],
   ["6.7", "unresolved", "A generic global-transmitter state is not selectively tested as a necessary input in the adopted relay and feedback observations."],
   ["6.2", "unresolved", "Short interspike timing is not itself an oscillation assay; a generic rhythm requirement is not established by conditional efficacy.", ["retinal-transfer"]]],
  ["Remaining corticogeniculate methods and raw data, matched awake-state experiments, transfer mechanism, neuromodulatory interactions, attention and noise/phase-control outcomes require additional primary evidence."]);

card(23, "Primary Visual Cortex Feature Maps", "visual-cortical-feature-organization-scope",
  "Visual feature organization is reconstructed through a primate striate-cortex column report, rat V1 orientation selectivity without discernible local orientation organization and a separate cat area-18 comparison. Feature selectivity and spatial maps are distinct; a selective population need not display a locally ordered map at the sampled scale. Functionally assigned thalamocortical connections favor matching contrast sign and receptive-field alignment, but correlation-based assignment does not establish map development. The original 1962 cat reference and 1968 monkey study retain their distinct identities.",
  ["monkey-columns", "rat-selectivity", "cortical-input", "cortical-response"],
  [["Orientation and ocular-dominance organization in primate striate cortex", "supported", "The reviewed monkey abstract reports distinct columnar organizations for orientation and ocular dominance; this remains a species/preparation-bound finding.", ["monkey-columns"]],
   ["Feature selectivity requires a spatially ordered local map", "excluded", "Rat V1 cells are orientation selective without discernible local organization at the reported scale, providing a direct counterexample to that universal claim.", ["rat-selectivity"]],
   ["Fine-scale cat maps are evidence about rat V1 or all V1", "excluded", "The fine-scale cat comparison concerns area 18, while the rat finding concerns V1; species and area must remain separate.", ["rat-selectivity"]],
   ["Thalamocortical input is feature-aligned", "qualified", "Reported functional connections favor matching contrast sign and receptive-field subregions, using cross-correlation-based assignment rather than direct anatomical verification.", ["cortical-input", "cortical-response"]],
   ["Input plus intracortical coupling generates stable maps", "unresolved", "The adopted recordings and imaging are not causal developmental map-formation interventions and do not establish long-term stability or the unique coupling mechanism."],
   ["Orientation, edges, spatial frequency, ocular dominance, motion and retinotopy form one complete canonical layout", "qualified", "The selected studies cover subsets and areas; they do not jointly establish every listed feature or a species-general mandatory layout."],
   ["Historical Hubel-Wiesel citation has one interchangeable year and species", "excluded", "The original 1962 title identifies cat cortex; the distinct 1968 monkey record cannot silently replace its bibliographic identity.", ["monkey-columns"]],
   ["Pattern role and obligatory basis for downstream form analysis", "qualified", "Pattern is descriptive, and source selectivity/column findings do not establish necessity for every downstream visual task."]],
  [["6.22", "qualified", "Thalamocortical functional matching supplies one relevant pathway finding, but does not prove that generic gain regulation generates the cortical maps.", ["cortical-input", "cortical-response"]],
   ["5.20", "unresolved", "The selected cortical studies do not selectively perturb a generic retinal-preprocessing card or establish a universal weighted map-formation dependency."],
   ["6.0", "qualified", "Existing circuitry carries observed selectivity, while developmental construction, minimum assembly and a universal network-to-map rule remain unmeasured.", ["monkey-columns", "rat-selectivity"]]],
  ["Complete historical methods, developmental perturbations, spatial-scale sensitivity, direct anatomical matching and causal downstream form-processing tests remain open."]);

card(24, "Predictive and Top-Down Modulation of Visual Attention", "top-down-visual-modulation-scope",
  "Top-down visual modulation is reconstructed through sub-saccadic-threshold FEF stimulation and V4 response changes, complemented by a separate corticogeniculate feedback assay. Retinotopically corresponding FEF stimulation enhances responses while noncorresponding stimulation can suppress them, with dependence on stimulus configuration. This supports a bounded intervention on visual response gain. Predictive coding, expectation comparison, error signals and iterative internal-world-model control remain explicit interpretations requiring task-matched alternatives; top-down modulation and prediction are not synonymous measurements.",
  ["v4-modulation", "feedback", "predictive"],
  [["Higher-order stimulation modulates visual responses", "supported", "FEF electrical stimulation below saccade threshold changes V4 responses in the reported retinotopic/stimulus conditions.", ["v4-modulation"]],
   ["Attention-related enhancement is uniform", "excluded", "Corresponding stimulation can enhance and noncorresponding stimulation can suppress responses; stimulus effectiveness and competition condition the effect.", ["v4-modulation"]],
   ["Top-down physiological effects necessarily identify prediction or expectation", "unresolved", "FEF/V4 and corticogeniculate perturbations do not uniquely identify an internally generated prediction or comparison operation.", ["v4-modulation", "feedback", "predictive"]],
   ["Prediction errors, priors and internally maintained context are directly measured", "unresolved", "The model and secondary syntheses are distinct from physiological intervention; an explicit measurement map and competing-model tests are still required.", ["predictive"]],
   ["One feedback process is independent of any narrow formal doctrine", "qualified", "The broader top-down label is useful for grouping effects, but it cannot turn mutually different mechanisms into one established predictive process.", ["predictive"]],
   ["Iterative thalamocortical and corticocortical feedback causes all amplification, suppression, routing and stabilization", "qualified", "The selected studies test particular feedback/response contrasts in different targets; the dLGN experiment uses anesthetized mice. They do not jointly establish every listed function, awake attentional control or one complete recurrent route.", ["v4-modulation", "feedback"]],
   ["The FEF study measures V1 predictive processing", "excluded", "Its recorded target is V4; V1 predictive-error processing cannot be assigned by transferring the result to a different area.", ["v4-modulation"]],
   ["Process role explains goal-sensitive perceptual construction", "qualified", "Process describes feedback modulation; subjective perception, goal representation and prediction-specific control require separate outcome definitions."]],
  [["6.3", "unresolved", "The FEF intervention does not selectively isolate a generic decision-making process as a universally necessary source of top-down modulation.", ["v4-modulation"]],
   ["6.22", "qualified", "Corticogeniculate feedback is a relevant but separate thalamic case; cortex-to-thalamus perturbation is not evidence that thalamic relay causes every cortical predictive operation.", ["feedback"]],
   ["6.23", "unresolved", "No matched feature-map perturbation proves a locally ordered V1 map necessary for the observed V4 effect or the predictive-coding interpretation.", ["v4-modulation", "predictive"]]],
  ["Full FEF methods and exact species/preparation, matched expectation-versus-attention manipulations, prediction-error observables, causal routes and held-out competing-model tests remain open."]);

export const NEURAL_FOUNDATION_RECORDS = { sources, entities, claims, relations, studies, comparisons, readiness };
