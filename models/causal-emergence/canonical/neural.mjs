import assert from "node:assert/strict";

const effects = [
  ["neural:neuroligin-contact-presynaptic-differentiation", "neuroligin-contact", "presynaptic-differentiation", "scheiffele2000", "C-neural-neuroligin-contact-presynaptic-differentiation"],
  ["neural:nmda-antagonism-ca1-potentiation-induction", "nmda-antagonism", "ca1-potentiation-induction", "collingridge1983", "C-neural-nmda-antagonism-ca1-potentiation-induction"],
  ["neural:conditioning-potentiation", "perforant-conditioning", "dentate-potentiation", "bliss1973", "N-bliss1973"],
  ["neural:fs-gamma", "fs-activation", "gamma-response", "cardin2009", "N-cardin2009"],
  ["neural:phase-response", "gamma-phase-input", "sensory-response", "cardin2009", "N-cardin2009-phase"],
  ["neural:lip-motion-choice", "lip-microstimulation", "motion-choice-rt", "hanks2006", "C-hanks-choice"],
  ["neural:lip-spatial-choice", "lip-inactivation-katz", "lip-free-choice", "katz2016", "C-katz-free-choice"],
  ["neural:mt-motion-discrimination", "mt-inactivation", "mt-motion-sensitivity", "katz2016", "C-katz-mt"],
  ["neural:lip-motion-bias-timecourse", "lip-inactivation-jeurissen", "motion-bias-timecourse", "jeurissen2022", "C-jeurissen-motion"],
  ["neural:visual-haptic-height", "visual-haptic-protocol", "height-cue-combination", "ernst2002", "C-ernst-height"],
  ["neural:force-localization", "external-hand-forces", "hand-localization", "wolpert1995", "C-wolpert-localization"],
  ["neural:practice-adaptation", "force-field-practice", "reaching-adaptation", "shadmehr1994", "C-shadmehr-adaptation"],
  ["neural:field-removal-aftereffect", "force-field-removal", "reaching-aftereffect", "shadmehr1994", "C-shadmehr-aftereffect"],
  ["neural:bla-projection-exploration", "bla-terminal-activation", "projection-exploration", "tye2011", "C-tye-projection"],
  ["neural:bla-somatic-exploration", "bla-somatic-activation", "somatic-exploration", "tye2011", "C-tye-somata"],
  ["neural:bla-inhibition-exploration", "bla-terminal-inhibition", "inhibited-projection-exploration", "tye2011", "C-tye-inhibition"],
  ["neural:lc-sleep-to-wake", "lc-brief-activation", "lc-awakening", "carter2010", "C-carter-awakening"],
  ["neural:lc-wake-duration", "lc-active-inhibition", "lc-wake-maintenance", "carter2010", "C-carter-wake-maintenance"],
  ["neural:culture-inhibition-blockade", "culture-picrotoxin", "picrotoxin-event-distribution", "beggs2003", "C-beggs-picrotoxin"],
  ["neural:hcrt-sleep-to-wake", "hcrt-photostimulation", "hcrt-awakening", "adamantidis2007", "C-hcrt-awakening"],
  ["neural:hcrt-blockade-latency", "hcrt-antagonist-context", "hcrt-antagonist-latency", "adamantidis2007", "C-hcrt-antagonist"],
  ["neural:ensemble-disruption-performance", "ensemble-disrupt-context", "ensemble-disrupted-performance", "carrilloreid2019", "C-ensemble-disruption"],
  ["neural:ensemble-recall-performance", "ensemble-recall-context", "ensemble-recalled-performance", "carrilloreid2019", "C-ensemble-recall"],
  ["neural:avjr-avdr", "avjr-activation", "avdr-response", "randi2023", "C-avjr-avdr"],
  ["neural:aver-avar", "aver-activation", "avar-response", "randi2023", "C-aver-avar"],
  ["neural:saadl-ollr", "saadl-activation", "ollr-response", "randi2023", "C-saadl-ollr"],
  ["neural:astro-ablation-passivity", "radial-astro-ablation", "astro-ablation-passivity", "mu2019", "C-astro-ablation-passivity"],
  ["neural:astro-gq-swimming", "radial-astro-gq-activation", "astro-gq-swimming", "mu2019", "C-astro-gq-swimming"],
  ["neural:astro-trpv1-passivity", "radial-astro-trpv1", "astro-trpv1-passivity", "mu2019", "C-astro-trpv1-passivity"],
  ["neural:ne-mo-astro-calcium", "ne-mo-activation", "ne-mo-astro-calcium", "mu2019", "C-ne-mo-astro-calcium"],
  ["neural:ne-mo-swimming", "ne-mo-activation", "ne-mo-swimming", "mu2019", "C-ne-mo-swimming"],
  ["neural:alpha1b-astro-calcium", "cyclazosin-ne-mo-protocol", "alpha1b-astro-calcium", "mu2019", "C-alpha1b-astro-calcium"],
  ["neural:feedback-astro-calcium", "probabilistic-visual-feedback", "feedback-astro-calcium", "mu2019", "C-feedback-astro-calcium"],
  ["neural:astro-vglut1-glutamate", "astro-vglut1-imaging", "astro-vglut1-glutamate", "deceglia2023", "C-astro-vglut1-glutamate"],
  ["neural:astro-vglut1-ltp", "astro-vglut1-ltp-protocol", "astro-vglut1-ltp", "deceglia2023", "C-astro-vglut1-ltp"],
  ["neural:kir4-potassium-current", "kir4-uptake-protocol", "kir4-potassium-current", "djukic2007", "C-kir4-potassium-current"],
  ["neural:kir4-glutamate-current", "kir4-uptake-protocol", "kir4-glutamate-current", "djukic2007", "C-kir4-glutamate-current"],
  ["neural:kir4-early-potentiation", "kir4-tetanic-protocol", "kir4-early-potentiation", "djukic2007", "C-kir4-early-potentiation"],
  ["neural:mct4-retention", "mct4-antisense-protocol", "mct4-retention", "suzuki2011", "C-mct4-retention"],
  ["neural:mct4-lactate-rescue", "mct4-lactate-protocol", "mct4-lactate-rescue", "suzuki2011", "C-mct4-lactate-rescue"],
  ["neural:mct2-retention", "mct2-antisense-protocol", "mct2-retention", "suzuki2011", "C-mct2-retention"],
  ["neural:md-oligodendrocytes", "md-cell-count-protocol", "md-oligodendrocytes", "etxeberria2016", "C-md-oligodendrocytes"],
  ["neural:md-internodes", "md-internode-protocol", "md-internodes", "etxeberria2016", "C-md-internodes"],
  ["neural:md-conduction", "md-conduction-protocol", "md-conduction", "etxeberria2016", "C-md-conduction"],
  ["neural:ttx-engulfment", "ttx-retinal-protocol", "ttx-engulfment", "schafer2012", "C-ttx-engulfment"],
  ["neural:forskolin-engulfment", "forskolin-retinal-protocol", "forskolin-engulfment", "schafer2012", "C-forskolin-engulfment"],
  ["neural:cr3-engulfment", "cr3-engulfment-protocol", "cr3-engulfment", "schafer2012", "C-cr3-engulfment"],
  ["neural:c3-engulfment", "c3-engulfment-protocol", "c3-engulfment", "schafer2012", "C-c3-engulfment"],
  ["neural:cr3-eye-overlap", "cr3-segregation-protocol", "cr3-eye-overlap", "schafer2012", "C-cr3-eye-overlap"],
  ["neural:cr3-synaptic-puncta", "cr3-puncta-protocol", "cr3-synaptic-puncta", "schafer2012", "C-cr3-synaptic-puncta"],
  ["neural:microglial-injury-recruitment", "capillary-laser-protocol", "microglial-injury-recruitment", "nimmerjahn2005", "C-microglial-injury-recruitment"],
  ["neural:microglial-cd39-culture-ado", "microglial-cd39-culture-ado-protocol", "microglial-cd39-culture-ado", "badimon2020", "C-microglial-cd39-culture-ado"],
  ["neural:microglial-cd73-culture-ado", "microglial-cd73-culture-ado-protocol", "microglial-cd73-culture-ado", "badimon2020", "C-microglial-cd73-culture-ado"],
  ["neural:plx-striatal-synchrony", "plx-calcium-protocol", "plx-striatal-synchrony", "badimon2020", "C-plx-striatal-synchrony"],
  ["neural:plx-striatal-dialysate", "plx-dialysis-protocol", "plx-striatal-dialysate", "badimon2020", "C-plx-striatal-dialysate"],
  ["neural:cd39-striatal-fluorescence", "cd39-tissue-assay", "cd39-striatal-fluorescence", "badimon2020", "C-cd39-striatal-fluorescence"],
  ["neural:cd39-d1-seizures", "cd39-d1-protocol", "cd39-d1-seizures", "badimon2020", "C-cd39-d1-seizures"],
  ["neural:cd39-cpa-rescue", "cd39-cpa-protocol", "cd39-cpa-rescue", "badimon2020", "C-cd39-cpa-rescue"],
  ["neural:p2ry12-d1-seizures", "p2ry12-d1-protocol", "p2ry12-d1-seizures", "badimon2020", "C-p2ry12-d1-seizures"],
  ["neural:adora1-d1-seizures", "adora1-d1-protocol", "adora1-d1-seizures", "badimon2020", "C-adora1-d1-seizures"],
  ["neural:il34-d1-seizures", "il34-d1-protocol", "il34-d1-seizures", "badimon2020", "C-il34-d1-seizures"],
  ["neural:il34-cpa-rescue", "il34-cpa-protocol", "il34-cpa-rescue", "badimon2020", "C-il34-cpa-rescue"],
  ["neural:microglial-bouton-proximity", "microglial-cortical-cno-protocol", "microglial-bouton-proximity", "badimon2020", "C-microglial-bouton-proximity"],
  ["neural:microglial-cortical-tip-velocity", "microglial-cortical-cno-protocol", "microglial-cortical-tip-velocity", "badimon2020", "C-microglial-cortical-tip-velocity"],
  ["neural:ecs-accessibility-1h", "ecs-dentate-protocol", "ecs-accessibility-1h", "su2017", "C-ecs-accessibility-1h"],
  ["neural:ecs-transcripts-1h", "ecs-dentate-protocol", "ecs-transcripts-1h", "su2017", "C-ecs-transcripts-1h"],
  ["neural:ecs-accessibility-persistence", "ecs-dentate-protocol", "ecs-accessibility-persistence", "su2017", "C-ecs-accessibility-persistence"],
  ["neural:cfos-knockdown-accessibility", "cfos-knockdown-protocol", "cfos-knockdown-accessibility", "su2017", "C-cfos-knockdown-accessibility"],
  ["neural:cfos-knockdown-transcripts", "cfos-knockdown-protocol", "cfos-knockdown-transcripts", "su2017", "C-cfos-knockdown-transcripts"],
  ["neural:cfos-overexpression-accessibility", "cfos-overexpression-protocol", "cfos-overexpression-accessibility", "su2017", "C-cfos-overexpression-accessibility"],
  ["neural:cfos-overexpression-transcripts", "cfos-overexpression-protocol", "cfos-overexpression-transcripts", "su2017", "C-cfos-overexpression-transcripts"],
  ["neural:foster-gr-site16", "maternal-crossfoster-protocol", "foster-gr-site16", "weaver2004", "C-foster-gr-site16"],
  ["neural:tsa-h3k9-signal", "tsa-chromatin-protocol", "tsa-h3k9-signal", "weaver2004", "C-tsa-h3k9-signal"],
  ["neural:tsa-ngfia-binding", "tsa-chromatin-protocol", "tsa-ngfia-binding", "weaver2004", "C-tsa-ngfia-binding"],
  ["neural:tsa-gr-site16", "tsa-methylation-protocol", "tsa-gr-site16", "weaver2004", "C-tsa-gr-site16"],
  ["neural:tsa-gr-site17", "tsa-methylation-protocol", "tsa-gr-site17", "weaver2004", "C-tsa-gr-site17"],
  ["neural:tsa-gr-protein", "tsa-protein-protocol", "tsa-gr-protein", "weaver2004", "C-tsa-gr-protein"],
  ["neural:tsa-restraint-corticosterone", "tsa-restraint-protocol", "tsa-restraint-corticosterone", "weaver2004", "C-tsa-restraint-corticosterone"],
  ["neural:engram-context-colabels", "engram-context-reexposure", "engram-context-colabels", "marco2020", "C-engram-context-colabels"],
  ["neural:engram-context-freezing", "engram-context-reexposure", "engram-context-freezing", "marco2020", "C-engram-context-freezing"],
  ["neural:lps-cnst-fos", "lps-fos-protocol", "lps-cnst-fos", "jin2024", "C-lps-cnst-fos"],
  ["neural:lps-cnst-calcium", "lps-photometry-protocol", "lps-cnst-calcium", "jin2024", "C-lps-cnst-calcium"],
  ["neural:vagotomy-cnst-calcium", "vagotomy-lps-protocol", "vagotomy-cnst-calcium", "jin2024", "C-vagotomy-cnst-calcium"],
  ["neural:trap-inhibition-cytokines", "trap-inhibition-lps-protocol", "trap-inhibition-cytokines", "jin2024", "C-trap-inhibition-cytokines"],
  ["neural:trap-activation-cytokines", "trap-activation-lps-protocol", "trap-activation-cytokines", "jin2024", "C-trap-activation-cytokines"],
  ["neural:dbh-activation-cytokines", "dbh-activation-lps-protocol", "dbh-activation-cytokines", "jin2024", "C-dbh-activation-cytokines"],
  ["neural:trpa1-activation-cytokines", "trpa1-activation-lps-protocol", "trpa1-activation-cytokines", "jin2024", "C-trpa1-activation-cytokines"],
  ["neural:calca-activation-cytokines", "calca-activation-lps-protocol", "calca-activation-cytokines", "jin2024", "C-calca-activation-cytokines"],
  ["neural:trpa1-endotoxin-survival", "trpa1-endotoxin-protocol", "trpa1-endotoxin-survival", "jin2024", "C-trpa1-endotoxin-survival"],
  ["neural:dbh-endotoxin-survival", "dbh-endotoxin-protocol", "dbh-endotoxin-survival", "jin2024", "C-dbh-endotoxin-survival"],
  ["neural:trpa1-salmonella-burden", "trpa1-salmonella-protocol", "trpa1-salmonella-burden", "jin2024", "C-trpa1-salmonella-burden"],
  ["neural:injected-cytokine-nodose-calcium", "injected-cytokine-imaging-protocol", "injected-cytokine-nodose-calcium", "jin2024", "C-injected-cytokine-nodose-calcium"],
  ["neural:perfused-cytokine-nodose-calcium", "perfused-cytokine-imaging-protocol", "perfused-cytokine-nodose-calcium", "jin2024", "C-perfused-cytokine-nodose-calcium"],
  ["neural:kir21-cec-current", "kir21-patch-protocol", "kir21-cec-current", "longden2017", "C-kir21-cec-current"],
  ["neural:cap-k-arteriole-dilation", "cap-k-myography-protocol", "cap-k-arteriole-dilation", "longden2017", "C-cap-k-arteriole-dilation"],
  ["neural:cap-k-sm-voltage", "cap-k-voltage-protocol", "cap-k-sm-voltage", "longden2017", "C-cap-k-sm-voltage"],
  ["neural:cap-severing-dilation", "cap-severing-protocol", "cap-severing-dilation", "longden2017", "C-cap-severing-dilation"],
  ["neural:cap-k-rbc-flux", "cap-k-flux-protocol", "cap-k-rbc-flux", "longden2017", "C-cap-k-rbc-flux"],
  ["neural:cap-k-rbc-velocity", "cap-k-velocity-protocol", "cap-k-rbc-velocity", "longden2017", "C-cap-k-rbc-velocity"],
  ["neural:cap-k-feed-diameter", "cap-k-feed-protocol", "cap-k-feed-diameter", "longden2017", "C-cap-k-feed-diameter"],
  ["neural:kir21-surface-k-hyperemia", "surface-k-flow-protocol", "kir21-surface-k-hyperemia", "longden2017", "C-kir21-surface-k-hyperemia"],
  ["neural:kir21-whisker-hyperemia", "kir21-whisker-protocol", "kir21-whisker-hyperemia", "longden2017", "C-kir21-whisker-hyperemia"],
  ["neural:cap-k-ttx-flux", "cap-k-ttx-protocol", "cap-k-ttx-flux", "longden2017", "C-cap-k-ttx-flux"],
  ["neural:arf6-kinase-proxy", "arf6-kinase-protocol", "arf6-kinase-proxy", "noterman2026", "C-arf6-kinase-proxy"],
  ["neural:arf6-nav-kir-current", "arf6-nav-patch-protocol", "arf6-nav-kir-current", "noterman2026", "C-arf6-nav-kir-current"],
  ["neural:arf6-genetic-kir-current", "arf6-genetic-patch-protocol", "arf6-genetic-kir-current", "noterman2026", "C-arf6-genetic-kir-current"],
  ["neural:arf6-pip2-kir-current", "arf6-pip2-patch-protocol", "arf6-pip2-kir-current", "noterman2026", "C-arf6-pip2-kir-current"],
  ["neural:arf6-nav-dilation", "arf6-nav-myography-protocol", "arf6-nav-dilation", "noterman2026", "C-arf6-nav-dilation"],
  ["neural:arf6-nav-hyperemia", "arf6-nav-flow-protocol", "arf6-nav-hyperemia", "noterman2026", "C-arf6-nav-hyperemia"],
  ["neural:arf6-genetic-hyperemia", "arf6-genetic-flow-protocol", "arf6-genetic-hyperemia", "noterman2026", "C-arf6-genetic-hyperemia"],
  ["neural:arf6-pip2-hyperemia", "arf6-pip2-flow-protocol", "arf6-pip2-hyperemia", "noterman2026", "C-arf6-pip2-hyperemia"],
  ["neural:cx-aortic-electrical", "cx-aortic-electrical-protocol", "cx-aortic-electrical", "krolak2025", "C-cx-aortic-electrical"],
  ["neural:cx-aortic-tracer", "cx-aortic-tracer-protocol", "cx-aortic-tracer", "krolak2025", "C-cx-aortic-tracer"],
  ["neural:cx-retinal-arterial-tracer", "cx-retinal-arterial-tracer-protocol", "cx-retinal-arterial-tracer", "krolak2025", "C-cx-retinal-arterial-tracer"],
  ["neural:cx-focal-diameter", "cx-focal-diameter-protocol", "cx-focal-diameter", "krolak2025", "C-cx-focal-diameter"],
  ["neural:cx-focal-hbt", "cx-focal-hbt-protocol", "cx-focal-hbt", "krolak2025", "C-cx-focal-hbt"],
  ["neural:cx-opto-hbt", "cx-opto-hbt-protocol", "cx-opto-hbt", "krolak2025", "C-cx-opto-hbt"],
  ["neural:cx-opto-propagation", "cx-opto-propagation-protocol", "cx-opto-propagation", "krolak2025", "C-cx-opto-propagation"],
  ["neural:cx-opto-peak", "cx-opto-peak-protocol", "cx-opto-peak", "krolak2025", "C-cx-opto-peak"],
  ["neural:cx-fullfield-hbt", "cx-fullfield-hbt-protocol", "cx-fullfield-hbt", "krolak2025", "C-cx-fullfield-hbt"],
  ["neural:cx-fullfield-peak", "cx-fullfield-peak-protocol", "cx-fullfield-peak", "krolak2025", "C-cx-fullfield-peak"],
  ["neural:ng-current-spikes", "ng-current-spikes-protocol", "ng-current-spikes", "vanpraag2002", "C-ng-current-spikes"],
  ["neural:ng-perforant-input", "ng-perforant-input-protocol", "ng-perforant-input", "vanpraag2002", "C-ng-perforant-input"],
  ["neural:ng-running-brdu", "ng-running-brdu-protocol", "ng-running-brdu", "vanpraag2002", "C-ng-running-brdu"],
  ["neural:toni-light-spikes", "toni-light-spikes-protocol", "toni-light-spikes", "toni2008", "C-toni-light-spikes"],
  ["neural:toni-target-psc", "toni-target-psc-protocol", "toni-target-psc", "toni2008", "C-toni-target-psc"],
  ["neural:toni-kyn-blockade", "toni-kyn-blockade-protocol", "toni-kyn-blockade", "toni2008", "C-toni-kyn-blockade"],
  ["neural:toni-dcg-blockade", "toni-dcg-blockade-protocol", "toni-dcg-blockade", "toni2008", "C-toni-dcg-blockade"],
  ["neural:bax-dcx-eightweek", "bax-dcx-eightweek-protocol", "bax-dcx-eightweek", "sahay2011", "C-bax-dcx-eightweek"],
  ["neural:bax-brdu-retention", "bax-brdu-retention-protocol", "bax-brdu-retention", "sahay2011", "C-bax-brdu-retention"],
  ["neural:bax-weak-ltp", "bax-weak-ltp-protocol", "bax-weak-ltp", "sahay2011", "C-bax-weak-ltp"],
  ["neural:bax-context-discrimination", "bax-context-discrimination-protocol", "bax-context-discrimination", "sahay2011", "C-bax-context-discrimination"],
  ["neural:bax-running-exploration", "bax-running-exploration-protocol", "bax-running-exploration", "sahay2011", "C-bax-running-exploration"],
  ["neural:irradiation-dcx", "irradiation-dcx-protocol", "irradiation-dcx", "sahay2011", "C-irradiation-dcx"],
  ["neural:motor-young-turnover", "motor-young-turnover-protocol", "motor-young-turnover", "xu2009", "C-motor-young-turnover"],
  ["neural:motor-novel-reaching-turnover", "motor-novel-reaching-turnover-protocol", "motor-novel-reaching-turnover", "xu2009", "C-motor-novel-reaching-turnover"],
  ["neural:motor-novel-capellini-turnover", "motor-novel-capellini-turnover-protocol", "motor-novel-capellini-turnover", "xu2009", "C-motor-novel-capellini-turnover"],
  ["neural:motor-cross-training-turnover", "motor-cross-training-turnover-protocol", "motor-cross-training-turnover", "xu2009", "C-motor-cross-training-turnover"],
  ["neural:motor-new-spine-retention", "motor-new-spine-retention-protocol", "motor-new-spine-retention", "xu2009", "C-motor-new-spine-retention"],
  ["neural:stroke-spine-formation-1w", "stroke-spine-formation-1w-protocol", "stroke-spine-formation-1w", "brown2007", "C-stroke-spine-formation-1w"],
  ["neural:stroke-spine-formation-2w", "stroke-spine-formation-2w-protocol", "stroke-spine-formation-2w", "brown2007", "C-stroke-spine-formation-2w"],
  ["neural:stroke-spine-formation-6w", "stroke-spine-formation-6w-protocol", "stroke-spine-formation-6w", "brown2007", "C-stroke-spine-formation-6w"],
  ["neural:stroke-spine-density-1w", "stroke-spine-density-1w-protocol", "stroke-spine-density-1w", "brown2007", "C-stroke-spine-density-1w"],
  ["neural:stroke-vascular-fraction-6w", "stroke-vascular-fraction-6w-protocol", "stroke-vascular-fraction-6w", "brown2007", "C-stroke-vascular-fraction-6w"],
  ["neural:learning-trace-retained", "learning-trace-protocol", "learning-trace-retained", "gould1999-learning", "C-learning-trace-retained"],
  ["neural:learning-trace-pyknosis", "learning-trace-protocol", "learning-trace-pyknosis", "gould1999-learning", "C-learning-trace-pyknosis"],
  ["neural:learning-place-retained", "learning-place-protocol", "learning-place-retained", "gould1999-learning", "C-learning-place-retained"],
  ["neural:learning-place-pyknosis", "learning-place-protocol", "learning-place-pyknosis", "gould1999-learning", "C-learning-place-pyknosis"],
  ["neural:pv-rgl-tonic-current", "pv-rgl-slice-protocol", "pv-rgl-tonic-current", "song2012", "C-pv-rgl-tonic-current"],
  ["neural:pv-rgl-cycle-suppression", "pv-rgl-activation-protocol", "pv-rgl-cycle-suppression", "song2012", "C-pv-rgl-cycle-suppression"],
  ["neural:pv-rgl-cycle-increase", "pv-rgl-inhibition-protocol", "pv-rgl-cycle-increase", "song2012", "C-pv-rgl-cycle-increase"],
  ["neural:rgl-gamma2-clone-activation", "rgl-gamma2-deletion-protocol", "rgl-gamma2-clone-activation", "song2012", "C-rgl-gamma2-clone-activation"],
  ["neural:rgl-gamma2-late-composition", "rgl-gamma2-deletion-protocol", "rgl-gamma2-late-composition", "song2012", "C-rgl-gamma2-late-composition"],
  ["neural:rgl-diazepam-cycle-markers", "rgl-diazepam-protocol", "rgl-diazepam-cycle-markers", "song2012", "C-rgl-diazepam-cycle-markers"],
  ["neural:pv-isolation-cycle-suppression", "pv-isolation-protocol", "pv-isolation-cycle-suppression", "song2012", "C-pv-isolation-cycle-suppression"],
  ["neural:pv-isolation-residual-edu", "pv-isolation-protocol", "pv-isolation-residual-edu", "song2012", "C-pv-isolation-residual-edu"],
  ["neural:spatial-adults-continuation", "spatial-adults-protocol", "spatial-adults-continuation", "amalric2017-adults", "C-spatial-adults-continuation"],
  ["neural:spatial-children-continuation", "spatial-children-protocol", "spatial-children-continuation", "amalric2017-children", "C-spatial-children-continuation"],
  ["neural:spatial-preview-continuation", "spatial-preview-protocol", "spatial-preview-continuation", "amalric2017-preview", "C-spatial-preview-continuation"],
  ["neural:spatial-munduruku-continuation", "spatial-munduruku-protocol", "spatial-munduruku-continuation", "amalric2017-munduruku", "C-spatial-munduruku-continuation"],
  ["neural:meg-sequence-behavior", "meg-sequence-protocol", "meg-sequence-behavior", "alroumi2021-sequences", "C-meg-sequence-behavior"],
  ["neural:meg-primitive-behavior", "meg-primitive-protocol", "meg-primitive-behavior", "alroumi2021-primitives", "C-meg-primitive-behavior"],
  ["neural:spatial-gaze-anticipation", "spatial-gaze-protocol", "spatial-gaze-anticipation", "wang2019-behavior", "C-spatial-gaze-anticipation"],
  ["neural:binary-detection", "binary-detection-protocol", "binary-detection", "alroumi2023-behavior", "C-binary-detection"]
];

/** Enforce current evidence roles, preparation and interpretation boundaries. */
export function validateNeuralReview({ graph, neural }, { sources, claims, entities, relations }) {
  const studies = new Map(neural.studies.map((s) => [s.id, s]));
  assert.deepEqual([...studies.keys()], ["witvliet2021", "scheiffele2000", "bliss1973", "collingridge1983", "cardin2009", "hanks2006", "katz2016", "jeurissen2022", "ernst2002", "wolpert1995", "shadmehr1994", "tye2011", "carter2010", "beggs2003", "cogitate2025", "adamantidis2007", "carrilloreid2019", "randi2023", "mu2019", "agulhon2010", "deceglia2023", "djukic2007", "suzuki2011", "etxeberria2016", "schafer2012", "nimmerjahn2005", "badimon2020", "su2017", "weaver2004", "marco2020", "jin2024", "longden2017", "noterman2026", "krolak2025", "vanpraag2002", "disouky2026", "toni2008", "sahay2011", "xu2009", "brown2007", "eriksson1998", "spalding2013", "kornack1999", "gould1999-primate", "gould1999-learning", "rakic1985", "eckenhoff1988", "song2012", "suh2007", "miller1996", "rose2016-fmri", "rose2016-eeg-targets", "rose2016-eeg-priority", "rose2016-behavior", "rose2016-pooled-behavior", "amalric2017-adults", "amalric2017-children", "amalric2017-preview", "amalric2017-munduruku", "alroumi2021-sequences", "alroumi2021-primitives", "wang2019-behavior", "wang2019-scanner", "alroumi2023-behavior", "alroumi2023-fmri", "alroumi2023-meg", "pajot2026-quadrilaterals", "pajot2026-memory", "pajot2026-cross-format", "gallese1996-f5", "gallese1996-emg", "gallese1996-f1", "singer2004-partner-pain", "mukamel2010-action-units", "tan2024-ieeg", "tan2024-ratings", "tan2024-decoder"]);
  for (const s of studies.values()) assert.equal(s.studyType, ["pajot2026-quadrilaterals", "pajot2026-memory", "pajot2026-cross-format", "tan2024-decoder"].includes(s.id) ? "computational-analysis" : ["witvliet2021", "disouky2026", "eriksson1998", "spalding2013", "kornack1999", "gould1999-primate", "rakic1985", "eckenhoff1988", "miller1996", "rose2016-pooled-behavior", "gallese1996-f5", "gallese1996-emg", "gallese1996-f1", "singer2004-partner-pain", "mukamel2010-action-units", "tan2024-ieeg", "tan2024-ratings"].includes(s.id) ? "primary-observation" : "primary-experiment", "Observation promoted to intervention");
  for (const [id, year, doi] of [["sporns2010", 2010, "10.7551/mitpress/8476.001.0001"], ["hebb1949", 1949, null], ["bliss1973", 1973, "10.1113/jphysiol.1973.sp010273"], ["collingridge1983", 1983, "10.1113/jphysiol.1983.sp014478"], ["wang2010", 2010, "10.1152/physrev.00035.2008"]]) {
    assert.equal(sources.get(id).year, year); assert.equal(sources.get(id).doi, doi, "Wrong neural publication identifier");
  }
  for (const id of ["plasticity-learning", "rhythm-coding"]) {
    assert.equal(entities.get(`neur:${id}`).status, "hypothesis");
    assert.equal(entities.get(`neur:${id}`).kind, "hypothesis");
    const c = claims.get(`N-${id}`);
    assert.equal(c.status, "unresolved", "Neural interpretation promoted without a discriminating assay");
    assert.equal(c.contextIds, undefined);
    assert.ok(c.citations.every((x) => x.role === "provenance"));
  }
  for (const [entityId, claimId] of [["accumulator-hypothesis", "C-accumulator"], ["perception-optimality", "C-perception-optimality"], ["internal-model-hypothesis", "C-internal-model"], ["affective-property", "C-affective-property"], ["global-modulation", "C-global-modulation"], ["criticality-hypothesis", "C-neural-criticality"], ["synchrony-criticality", "C-synchrony-criticality"], ["resting-attractor-hypothesis", "C-resting-attractor"], ["conscious-emergence", "C-conscious-emergence"], ["iit-2004", "C-iit-2004"], ["gnwt-access", "C-gnwt-access"], ["gwt-blackboard", "C-gwt-blackboard"], ["sleep-two-process", "C-sleep-two-process"], ["sleep-homeostasis", "C-sleep-homeostasis"], ["ensemble-generalization", "C-ensemble-generalization"], ["ensemble-perception", "C-ensemble-perception"], ["connectome-function-identity", "C-connectome-function-identity"], ["neural-information-identity", "C-neural-information-identity"], ["glial-accumulation", "C-glial-accumulation"], ["microglial-surveillance-protection", "C-microglial-surveillance-protection"], ["microglial-purinergic-feedback", "C-microglial-purinergic-feedback"], ["cfos-maintenance-hypothesis", "C-cfos-maintenance-hypothesis"], ["maternal-chromatin-mediation", "C-maternal-chromatin-mediation"], ["neural-gene-programming", "C-neural-gene-programming"], ["engram-chromatin-priming", "C-engram-chromatin-priming"], ["neuroimmune-circuit-closure", "C-neuroimmune-circuit-closure"], ["neuroimmune-generalization", "C-neuroimmune-generalization"], ["neurovascular-complete-route", "C-neurovascular-complete-route"], ["neurovascular-neural-readout", "C-neurovascular-neural-readout"], ["arf6-pip2-exclusive-mediation", "C-arf6-pip2-exclusive-mediation"], ["cx-electrical-carrier", "C-cx-electrical-carrier"], ["cx-zonation-routing", "C-cx-zonation-routing"], ["ng-memory-route", "C-ng-memory-route"], ["ng-regulatory-geometry", "C-ng-regulatory-geometry"], ["toni-target-recruitment", "C-toni-target-recruitment"], ["bax-count-mediation", "C-bax-count-mediation"], ["motor-spine-memory", "C-motor-spine-memory"], ["motor-homeostatic-construction", "C-motor-homeostatic-construction"], ["stroke-remodeling-function", "C-stroke-remodeling-function"], ["stroke-neurovascular-geometry", "C-stroke-neurovascular-geometry"], ["human-brdu-functional-integration", "C-human-brdu-functional-integration"], ["human-radiocarbon-renewal-model", "C-human-radiocarbon-renewal-model"], ["human-radiocarbon-survival-model", "C-human-radiocarbon-survival-model"]]) {
    assert.equal(entities.get(`neur:${entityId}`).status, "hypothesis");
    assert.equal(entities.get(`neur:${entityId}`).kind, "hypothesis");
    const c = claims.get(claimId);
    assert.equal(c.status, "unresolved", "Task model acquired unique biological implementation");
    assert.equal(c.contextIds, undefined);
    assert.ok(c.citations.every((x) => x.role === "provenance"));
  }
  for (const [id, doi] of [["hanks2006", "10.1038/nn1683"], ["katz2016", "10.1038/nature18617"], ["jeurissen2022", "10.1016/j.neuron.2022.03.022"], ["ernst2002", "10.1038/415429a"], ["wolpert1995", "10.1126/science.7569931"], ["shadmehr1994", "10.1523/JNEUROSCI.14-05-03208.1994"], ["helmholtz1867", null], ["bernstein1967", null]]) assert.equal(sources.get(id).doi, doi, "Wrong task-study or edition identifier");
  for (const [cid, context] of [["C-katz-correlations", "katz2016"], ["C-katz-lip-null", "katz2016"], ["C-katz-free-choice", "katz2016"], ["C-katz-mt", "katz2016"], ["C-jeurissen-motion", "jeurissen2022"]]) {
    assert.equal(claims.get(cid).status, "publication-supported");
    assert.deepEqual(claims.get(cid).contextIds, [context], "Different LIP protocols silently merged");
  }
  for (const id of ["damasio1994", "tye2011", "carter2010", "beggs2003", "deco2012", "bak1987", "ledoux2012", "ledoux2012-erratum", "touboul2017"]) {
    const expectedDoi = {
      damasio1994: null, tye2011: "10.1038/nature09820", carter2010: "10.1038/nn.2682",
      beggs2003: "10.1523/JNEUROSCI.23-35-11167.2003", deco2012: "10.1523/JNEUROSCI.2523-11.2012",
      bak1987: "10.1103/PhysRevLett.59.381", ledoux2012: "10.1016/j.neuron.2012.02.004",
      "ledoux2012-erratum": "10.1016/j.neuron.2012.02.018", touboul2017: "10.1103/PhysRevE.95.012413"
    }[id];
    assert.equal(sources.get(id).doi, expectedDoi, "Affect/criticality source identity changed");
  }
  assert.equal(sources.get("damasio1994").year, 1994, "Original book edition replaced by a reprint");
  for (const [id, year, doi] of [
    ["tononi2004", 2004, "10.1186/1471-2202-5-42"], ["dehaene2011", 2011, "10.1016/j.neuron.2011.03.018"],
    ["baars1988", 1988, null], ["saper2005", 2005, "10.1038/nature04284"],
    ["tononi2014", 2014, "10.1016/j.neuron.2013.12.025"], ["borbely1982", 1982, null],
    ["yuste2015", 2015, "10.1038/nrn3962"], ["sporns2016", 2016, "10.1146/annurev-psych-122414-033634"],
    ["cogitate2025", 2025, "10.1038/s41586-025-08888-1"], ["cogitate2025-supplement", 2025, null],
    ["naccache2025", 2025, "10.1093/nc/niaf037"], ["naccache2026-correction", 2026, "10.1093/nc/niag020"],
    ["adamantidis2007", 2007, "10.1038/nature06310"], ["carrilloreid2019", 2019, "10.1016/j.cell.2019.05.045"]
  ]) {
    assert.equal(sources.get(id).year, year); assert.equal(sources.get(id).doi, doi, "Consciousness, sleep or ensemble source identity changed");
  }
  for (const [sid, cids] of [
    ["cogitate2025", ["C-cogitate-decoding", "C-cogitate-duration", "C-cogitate-ppc", "C-cogitate-dfc"]],
    ["adamantidis2007", ["C-hcrt-low-frequency-null", "C-hcrt-duration-null"]],
    ["carrilloreid2019", ["C-ensemble-observation", "C-ensemble-control-null", "C-ensemble-gray-selection"]]
  ]) for (const cid of cids) {
    assert.equal(claims.get(cid).status, "publication-supported");
    assert.deepEqual(claims.get(cid).contextIds, [sid], "Neural readout assigned to a different preparation");
    assert.deepEqual(claims.get(cid).checkIds, [], "Publication reading became an executable witness");
  }
  assert.deepEqual(sources.get("naccache2026-correction").authors, [], "Unsigned notice acquired an invented byline");
  for (const [cid, sid] of [["C-carter-inactive-null", "carter2010"], ["C-beggs-culture", "beggs2003"], ["C-beggs-acute", "beggs2003"]]) {
    assert.equal(claims.get(cid).status, "publication-supported");
    assert.deepEqual(claims.get(cid).contextIds, [sid]);
  }
  for (const id of ["lc-inactive-null", "culture-avalanches", "acute-avalanches", "visual-feature-decoding", "visual-duration-readout", "visual-phase-consistency", "visual-amplitude-connectivity", "hcrt-low-frequency-null", "hcrt-duration-null", "task-calcium-ensembles", "ensemble-control-null", "ensemble-gray-selection", "signal-atlas", "astro-ablation-control-null", "ne-mo-glia-ablated-null", "ca1-astro-gq-null", "ca1-ip3r2-null", "glutamatergic-astro-transcripts"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${id}` || r.target === `neur:${id}`), "Null or observational event record acquired a causal edge");
  }
  for (const id of ["deco2012", "bak1987", "touboul2017"]) {
    assert.ok(!studies.has(id), "Computational paper became an experimental preparation");
    for (const c of graph.claims.filter((c) => c.citations.some((x) => x.sourceId === id))) {
      assert.equal(c.status, "unresolved", "Unreproduced model acquired active scientific support");
      assert.deepEqual(c.checkIds, [], "Model reading became an executable witness");
      assert.ok(c.citations.filter((x) => x.sourceId === id).every((x) => ["provenance", "limits"].includes(x.role)));
    }
  }
  const domainRelations = graph.relations.filter((r) => r.id.startsWith("neural:") || r.source.startsWith("neur:") || r.target.startsWith("neur:"));
  assert.deepEqual(domainRelations.map((r) => r.id), effects.map((e) => e[0]), "Unreviewed neural connection or observational causation");
  for (const [id, src, tgt, context, cid] of effects) {
    const r = relations.get(id);
    assert.equal(r.source, `neur:${src}`); assert.equal(r.target, `neur:${tgt}`);
    assert.equal(r.kind, "functional-support"); assert.deepEqual(r.contextIds, [context]);
    assert.deepEqual(r.claimIds, [cid]);
    assert.equal(claims.get(cid).status, "publication-supported"); assert.deepEqual(claims.get(cid).contextIds, [context]);
    for (const eid of [r.source, r.target]) assert.ok(entities.get(eid).claimIds.some((c) => claims.get(c)?.status === "publication-supported" && claims.get(c).contextIds?.includes(context)), "Neural endpoint lacks matched experimental support");
  }
  for (const e of graph.entities.filter((e) => e.id.startsWith("neur:"))) {
    assert.equal(e.level, 6);
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => ["publication-supported", "literature-synthesis"].includes(claims.get(id).status)));
    for (const id of e.claimIds) for (const c of claims.get(id).citations) if (["research-publication", "research-dataset", "research-software"].includes(sources.get(c.sourceId).kind)) assert.ok(sources.get(c.sourceId).review.locators.includes(c.locator), "Neural citation exceeds reading");
  }
  assert.deepEqual(neural.comparisons.map((r) => [r.id, r.sourceIds, r.result]), [
    ["neural-geometry-construction", ["morales2026"], "not-tested"],
    ["neural-lip-causality", ["hanks2006", "katz2016", "jeurissen2022"], "unresolved-across-preparations"],
    ["neural-height-optimality", ["ernst2002"], "not-tested"],
    ["neural-internal-model-identity", ["wolpert1995"], "not-tested"],
    ["neural-affect-proxy", ["tye2011", "pessoa2008", "ledoux2012"], "not-tested"],
    ["neural-lc-global-control", ["carter2010"], "not-tested"],
    ["neural-avalanche-criticality", ["beggs2003", "touboul2017", "bak1987"], "not-tested"],
    ["neural-resting-model-identity", ["deco2012"], "not-tested"],
    ["neural-conscious-predictions", ["cogitate2025", "cogitate2025-supplement", "tononi2004", "dehaene2011", "naccache2025"], "publication-reported-mixed-outcomes"],
    ["neural-sleep-endpoints", ["adamantidis2007", "carter2010", "borbely1982", "tononi2014"], "unresolved-across-preparations"],
    ["neural-ensemble-units", ["carrilloreid2019", "sporns2016", "yuste2015", "hebb1949"], "not-tested"],
    ["neural-connectome-construction", ["randi2023", "sporns2013", "bullmore2009"], "not-tested"],
    ["neural-information-mapping", ["shannon1948", "randi2023"], "not-tested"],
    ["glial-information-exclusion", ["mu2019", "araque2014"], "universal-claim-contradicted-in-reviewed-preparation"],
    ["glial-plasticity-preparations", ["agulhon2010", "deceglia2023", "araque2014"], "unresolved-across-preparations"],
    ["glial-algorithm-identity", ["mu2019"], "not-tested"],
    ["glial-kir4-mediation", ["djukic2007"], "not-tested"],
    ["glial-lactate-mechanism", ["suzuki2011"], "not-tested"],
    ["glial-myelin-conduction", ["etxeberria2016"], "not-tested"],
    ["glial-pruning-sequence", ["schafer2012"], "not-tested"],
    ["glial-surveillance-protection", ["nimmerjahn2005"], "not-tested"],
    ["glial-purinergic-feedback", ["badimon2020"], "not-tested"],
    ["neural-cfos-maintenance", ["su2017"], "not-tested"],
    ["neural-maternal-chromatin-mediation", ["weaver2004", "meaney2005-environment", "meaney2005-chromatin"], "not-tested"],
    ["neural-physiological-gene-programming", ["su2017", "weaver2004", "sweatt2013", "noble2006", "marco2020"], "not-tested"],
    ["neural-engram-chromatin-priming", ["marco2020"], "not-tested"],
    ["neural-immune-circuit-closure", ["jin2024", "tracey2002"], "not-tested"],
    ["neural-immune-protection-generalization", ["jin2024", "dantzer2008", "besedovsky2007"], "not-tested"],
    ["neural-vascular-conduction", ["longden2017", "iadecola2017", "krolak2025"], "not-tested"],
    ["neural-vascular-readout", ["attwell2002", "iadecola2017", "roy1890", "longden2017"], "not-tested"],
    ["neural-vascular-development", ["longden2017"], "not-tested"],
    ["neural-arf6-lipid-mediation", ["noterman2026"], "not-tested"],
    ["neural-cx-signal-carrier", ["krolak2025"], "not-tested"],
    ["neural-cx-zonation-routing", ["krolak2025"], "not-tested"],
    ["neural-ng-memory", ["vanpraag2002", "disouky2026", "aimone2014", "toni2008", "toni2008-supplement", "sahay2011", "sahay2011-supplement", "eriksson1998", "spalding2013", "kornack1999", "gould1999-primate", "gould1999-learning", "rakic1985", "eckenhoff1988"], "not-tested"],
    ["neural-ng-geometry", ["disouky2026"], "not-tested"],
    ["neural-ng-target-recruitment", ["toni2008", "toni2008-supplement"], "not-tested"],
    ["neural-ng-count-mediation", ["sahay2011", "sahay2011-supplement"], "not-tested"],
    ["neural-motor-spine-memory", ["xu2009", "xu2009-supplement"], "not-tested"],
    ["neural-motor-construction", ["xu2009", "xu2009-supplement"], "not-tested"],
    ["neural-stroke-function", ["brown2007"], "not-tested"],
    ["neural-stroke-geometry", ["brown2007"], "not-tested"],
    ["neural-human-birth-function", ["eriksson1998", "spalding2013"], "not-tested"],
    ["neural-radiocarbon-model-selection", ["spalding2013", "spalding2013-supplement"], "not-tested"],
    ["neural-radiocarbon-population-control", ["spalding2013", "spalding2013-supplement"], "not-tested"],
    ["neural-macaque-rate-identification", ["kornack1999"], "not-tested"],
    ["neural-macaque-common-progenitor", ["kornack1999"], "not-tested"],
    ["neural-macaque-migration", ["kornack1999"], "not-tested"],
    ["neural-macaque-replacement", ["kornack1999"], "not-tested"],
    ["neural-primate-aged-differentiation", ["gould1999-primate"], "not-tested"],
    ["neural-primate-labeling-agreement", ["gould1999-primate", "kornack1999"], "not-tested"],
    ["neural-primate-hormonal-aging", ["gould1999-primate"], "not-tested"],
    ["neural-primate-olfactory-lineage", ["gould1999-primate"], "not-tested"],
    ["neural-learning-survival-identification", ["gould1999-learning"], "not-tested"],
    ["neural-learning-neurogenesis-necessity", ["gould1999-learning", "gould1999-primate", "sahay2011"], "not-tested"],
    ["neural-primate-null-positive-methods", ["rakic1985", "eckenhoff1988", "kornack1999", "gould1999-primate"], "unresolved-across-preparations"],
    ["neural-autoradiographic-independence", ["rakic1985", "eckenhoff1988"], "unresolved-across-preparations"],
    ["neural-dentate-founder-identity", ["eckenhoff1988", "kornack1999"], "not-tested"],
    ["neural-primate-cessation-bound", ["rakic1985", "eckenhoff1988", "kornack1999", "gould1999-primate"], "unresolved-across-preparations"],
    ["neural-ng-function-theories", ["aimone2014", "kempermann2015"], "not-tested"],
    ["neural-rgl-feedback-closure", ["song2012", "song2012-supplement"], "not-tested"],
    ["neural-rgl-gaba-mediation", ["song2012", "song2012-supplement"], "not-tested"],
    ["neural-sox2-single-founder", ["suh2007", "suh2007-supplement"], "not-tested"],
    ["neural-sox2-pool-control", ["suh2007", "suh2007-supplement"], "not-tested"],
    ["neural-sox2-radial-transition", ["suh2007", "suh2007-supplement"], "not-tested"],
    ["neural-wm-buffer", ["baddeley2003"], "not-tested"],
    ["neural-wm-maintenance", ["miller2001", "baddeley2003", "miller1996", "rose2016"], "not-tested"],
    ["neural-wm-gating", ["miller2001"], "not-tested"],
    ["neural-wm-item-reactivation", ["rose2016"], "not-tested"],
    ["neural-wm-latent-carrier", ["rose2016"], "not-tested"],
    ["neural-symbol-nesting", ["dehaene2015-sequences", "dehaene2022-symbols", "amalric2017", "alroumi2021", "wang2019", "alroumi2023"], "not-tested"],
    ["neural-symbol-binding", ["dehaene2015-sequences", "dehaene2022-symbols", "alroumi2021"], "not-tested"],
    ["neural-symbol-geometry", ["dehaene2022-symbols", "pajot2026"], "not-tested"],
    ["neural-symbol-development", ["carey2009", "carey2011-precis"], "not-tested"],
    ["neural-spatial-prefix-fit", ["amalric2017", "amalric2017-syntax"], "publication-reported-mixed-outcomes"],
    ["neural-spatial-resource-identification", ["amalric2017", "amalric2017-syntax"], "publication-reported-mixed-outcomes"],
    ["neural-spatial-schooling", ["amalric2017"], "unresolved-across-preparations"],
    ["neural-meg-description-cost", ["alroumi2021", "alroumi2021-supplement", "amalric2017-syntax"], "publication-reported-mixed-outcomes"],
    ["neural-meg-primitive-transfer", ["alroumi2021", "alroumi2021-supplement"], "publication-reported-mixed-outcomes"],
    ["neural-meg-ordinal-timing", ["alroumi2021", "alroumi2021-supplement"], "not-tested"],
    ["neural-spatial-fmri-selectivity", ["wang2019", "wang2019-supplement"], "publication-reported-mixed-outcomes"],
    ["neural-spatial-nesting-code", ["wang2019", "wang2019-supplement", "amalric2017", "alroumi2021"], "not-tested"],
    ["neural-spatial-language-necessity", ["wang2019", "wang2019-supplement"], "not-tested"],
    ["neural-binary-compression-fit", ["alroumi2023", "alroumi2023-sequences"], "publication-reported-mixed-outcomes"],
    ["neural-binary-neural-code", ["alroumi2023", "alroumi2023-meg-code", "alroumi2023-stimulus-code", "alroumi2023-meg-data", "alroumi2023-fmri-data"], "not-tested"],
    ["neural-binary-language-necessity", ["alroumi2023"], "not-tested"],
    ["neural-geometric-model-fit", ["pajot2026", "pajot2026-code", "pajot2026-data", "pajot2026-selected-data"], "publication-reported-mixed-outcomes"],
    ["neural-geometric-training-cause", ["pajot2026", "pajot2026-models", "pajot2026-code"], "not-tested"],
    ["neural-mirror-recognition", ["gallese1996", "rizzolatti2004", "mukamel2010"], "not-tested"],
    ["neural-empathy-components", ["decety2004", "rizzolatti2004", "singer2004"], "not-tested"],
    ["neural-human-action-agency", ["mukamel2010", "mukamel2010-supplement"], "not-tested"],
    ["neural-partner-pain-specificity", ["singer2004", "tan2024", "tan2024-supplement"], "not-tested"],
    ["neural-vicarious-minimality", ["tan2024", "tan2024-code", "tan2024-source-data", "tan2024-supplement"], "not-tested"],
    ["neural-vicarious-routing", ["tan2024", "tan2024-supplement", "tan2024-code", "tan2024-channel-data"], "not-tested"],
    ["neural-empathy-perceptual-necessity", ["decety2004", "singer2004", "tan2024"], "not-tested"],
    ["neural-empathy-affective-necessity", ["decety2004", "singer2004", "tan2024"], "not-tested"],
    ["neural-empathy-working-memory", ["decety2004"], "not-tested"],
    ["neural-shared-simulation", ["gallese2003-roots", "gallese2003-manifold", "decety2004"], "not-tested"],
    ["neural-shared-manifold-geometry", ["gallese2003-roots", "gallese2003-manifold"], "not-tested"]
  ]);
  for (const [id, doi] of [["randi2023", "10.1038/s41586-023-06683-4"], ["sporns2013", "10.1016/j.conb.2012.11.015"], ["bullmore2009", "10.1038/nrn2575"], ["bullmore2009-erratum", "10.1038/nrn2618"], ["shannon1948", null]]) assert.equal(sources.get(id).doi, doi, "Wrong connectome or composite-publication identifier");
  for (const id of ["C-signal-atlas", "C-avjr-avdr", "C-aver-avar", "C-saadl-ollr"]) {
    assert.deepEqual(claims.get(id).contextIds, ["randi2023"]);
    assert.deepEqual(claims.get(id).checkIds, [], "Publication reading became independent reproduction");
  }
  for (const [id, year, doi] of [
    ["mu2019", 2019, "10.1016/j.cell.2019.05.050"], ["agulhon2010", 2010, "10.1126/science.1184821"],
    ["deceglia2023", 2023, "10.1038/s41586-023-06502-w"], ["araque2014", 2014, "10.1016/j.neuron.2014.02.007"],
    ["fields2009", 2009, null], ["kandel2013", 2013, null]
  ]) {
    assert.equal(sources.get(id).year, year);
    assert.equal(sources.get(id).doi, doi, "Glial source identity changed");
  }
  for (const [cid, sid] of [
    ["C-astro-ablation-control-null", "mu2019"], ["C-ne-mo-glia-ablated-null", "mu2019"],
    ["C-ca1-astro-gq-null", "agulhon2010"], ["C-ca1-ip3r2-null", "agulhon2010"],
    ["C-glutamatergic-astro-transcripts", "deceglia2023"]
  ]) {
    assert.equal(claims.get(cid).status, "publication-supported");
    assert.deepEqual(claims.get(cid).contextIds, [sid], "Glial null or observation assigned to a different preparation");
    assert.deepEqual(claims.get(cid).checkIds, [], "Publication reading became an independent witness");
  }
  for (const [id, src, tgt, sid, cid] of effects.filter((e) => ["mu2019", "deceglia2023"].includes(e[3]))) {
    assert.deepEqual(claims.get(cid).checkIds, [], "Glial source reading became independent reproduction");
  }
  for (const [sid, year, doi] of [
    ["djukic2007", 2007, "10.1523/JNEUROSCI.0723-07.2007"],
    ["suzuki2011", 2011, "10.1016/j.cell.2011.02.018"],
    ["etxeberria2016", 2016, "10.1523/JNEUROSCI.0908-16.2016"],
    ["schafer2012", 2012, "10.1016/j.neuron.2012.03.026"],
    ["nimmerjahn2005", 2005, "10.1126/science.1110647"],
    ["badimon2020", 2020, "10.1038/s41586-020-2777-8"]
  ]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Glial functional source identity changed");
    for (const c of graph.claims.filter((c) => c.contextIds?.includes(sid))) {
      assert.deepEqual(c.checkIds, [], "Glial publication became independent reproduction");
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Unmatched glial preparations pooled");
    }
  }
  for (const [eid, sid, cid] of [["kir4-late-plasticity-null", "djukic2007", "C-kir4-late-plasticity-null"], ["mct4-glucose-rescue-null", "suzuki2011", "C-mct4-glucose-rescue-null"], ["mct2-rescue-null", "suzuki2011", "C-mct2-rescue-null"], ["mct2-short-retention-null", "suzuki2011", "C-mct2-short-retention-null"], ["md-ultrastructure-null", "etxeberria2016", "C-md-ultrastructure-null"], ["md-refractory-null", "etxeberria2016", "C-md-refractory-null"], ["microglial-rgc-material", "schafer2012", "C-microglial-rgc-material"], ["cr3-contralateral-territory-null", "schafer2012", "C-cr3-contralateral-territory-null"], ["microglial-process-motility", "nimmerjahn2005", "C-microglial-process-motility"], ["microglial-soma-migration-null", "nimmerjahn2005", "C-microglial-soma-migration-null"], ["plx-calcium-magnitude-null", "badimon2020", "C-plx-calcium-magnitude-null"], ["plx-rate-interaction-null", "badimon2020", "C-plx-rate-interaction-null"], ["cd39-microglial-density-null", "badimon2020", "C-cd39-microglial-density-null"], ["adora1-cpa-rescue-null", "badimon2020", "C-adora1-cpa-rescue-null"], ["il34-other-challenge-null", "badimon2020", "C-il34-other-challenge-null"], ["microglial-cno-control-null", "badimon2020", "C-microglial-cno-control-null"], ["microglial-cd73-expression", "badimon2020", "C-microglial-cd73-expression"]]) {
    assert.deepEqual(claims.get(cid).contextIds, [sid]);
    assert.equal(claims.get(cid).status, "publication-supported");
    assert.ok(!graph.relations.some((r) => r.source === `neur:${eid}` || r.target === `neur:${eid}`),
      "Glial null or anatomical observation acquired a causal edge");
  }
  assert.ok(claims.get("C-astro-vglut1-ltp").citations.some((c) => c.sourceId === "deceglia2023-fig3-data" && c.locator === "Fig3!AR3:AS21"), "Missing paired LTP source data");
  for (const [locator, keys] of [
    ["4a!B2:R6", ["microglial-cd39-culture-ado", "microglial-cd73-culture-ado"]],
    ["4c!A1:J16", ["plx-striatal-dialysate"]],
    ["4h!B1:C11", ["cd39-striatal-fluorescence"]],
    ["4i!A1:G7", ["cd39-d1-seizures", "cd39-cpa-rescue"]],
    ["4f!A1:C8", ["p2ry12-d1-seizures"]],
    ["4k!B1:D8", ["adora1-d1-seizures"]],
    ["4m!B2:H9", ["il34-d1-seizures", "il34-cpa-rescue"]]
  ]) for (const key of keys) {
    const citations = claims.get(`C-${key}`).citations.filter((c) => sources.get(c.sourceId).kind === "research-dataset");
    assert.deepEqual(citations.map((c) => [c.sourceId, c.locator, c.role]),
      [["badimon2020-fig4-data", locator, "supports"]], "Microglial claim lost its assay-specific source cells");
  }
  for (const [sid, year, doi] of [
    ["su2017", 2017, "10.1038/nn.4494"], ["weaver2004", 2004, "10.1038/nn1276"],
    ["sweatt2013", 2013, "10.1016/j.neuron.2013.10.023"],
    ["meaney2005-environment", 2005, "10.31887/DCNS.2005.7.2/mmeaney"],
    ["meaney2005-chromatin", 2005, "10.1016/j.tins.2005.07.006"],
    ["noble2006", 2006, "10.1093/oso/9780199295739.001.0001"]
  ]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Gene-regulation source identity changed");
  }
  for (const sid of ["su2017", "weaver2004"]) {
    for (const c of graph.claims.filter((c) => c.contextIds?.includes(sid))) {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Unmatched gene-regulation preparations pooled");
      assert.deepEqual(c.checkIds, [], "Source reading became independent sequencing or biological reproduction");
      assert.ok(c.citations.some((x) => x.sourceId === sid && x.role === "supports"),
        "Primary result replaced by secondary interpretation");
    }
  }
  for (const [eid, sid] of [
    ["ecs-accessibility-rna-association", "su2017"], ["cfos-late-binding-null", "su2017"],
    ["maternal-gr-methylation-association", "weaver2004"], ["foster-gr-site17-null", "weaver2004"],
    ["maternal-gr-developmental-association", "weaver2004"], ["maternal-gr-chromatin-association", "weaver2004"],
    ["tsa-high-care-corticosterone-null", "weaver2004"]
  ]) {
    assert.deepEqual(claims.get(`C-${eid}`).contextIds, [sid]);
    assert.equal(claims.get(`C-${eid}`).status, "publication-supported");
    assert.ok(!graph.relations.some((r) => r.source === `neur:${eid}` || r.target === `neur:${eid}`),
      "Gene-regulation association or null acquired a causal edge");
  }
  for (const sid of ["sweatt2013", "meaney2005-environment", "meaney2005-chromatin", "noble2006"]) {
    assert.ok(!studies.has(sid), "Review or conceptual book became a primary experiment");
    for (const c of graph.claims.filter((c) => c.citations.some((x) => x.sourceId === sid))) {
      assert.equal(c.status, "unresolved", "Contextual reading became empirical mechanism support");
      assert.ok(c.citations.filter((x) => x.sourceId === sid).every((x) => x.role === "provenance"));
    }
  }
  for (const [key, sid, locators] of [
    ["ecs-accessibility-1h", "su2017-table4", ["'E1-E0 gained-open'!A3:M11440", "'E1-E0 gained-closed'!A3:M1741"]],
    ["ecs-accessibility-persistence", "su2017-table4", ["'4h_sustained gained-open'!A3:M4177", "'4h_sustained gained-closed'!A3:M486", "'24h_sustained gained-open'!A3:M599", "'24h_sustained gained-closed'!A4:M25"]],
    ["ecs-transcripts-1h", "su2017-table5", ["'Table S5a. E1-E0'!A2:H5144"]],
    ["cfos-knockdown-transcripts", "su2017-table5", ["'Table S5d. sh-Ctrl E1-E0'!A2:H4394", "'Table S5e. sh-cFos E1-E0'!A2:H3936"]],
    ["cfos-overexpression-transcripts", "su2017-table5", ["'Table S5f. cFos OE'!A2:H2034"]]
  ]) {
    const citations = claims.get(`C-${key}`).citations.filter((c) => sources.get(c.sourceId).kind === "research-dataset");
    assert.deepEqual(citations.map((c) => [c.sourceId, c.locator, c.role]), locators.map((loc) => [sid, loc, "supports"]),
      "Gene-regulation readout lost its assay- and timepoint-specific source cells");
  }
  for (const [key, sid, locator] of [
    ["foster-gr-site16", "weaver2004-supplement", "Supplementary Methods PDF pp. 2-5: developmental cohorts, bisulfite mapping and adoption protocol"],
    ["tsa-h3k9-signal", "weaver2004-supplement", "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions"],
    ["tsa-ngfia-binding", "weaver2004-supplement", "Supplementary Methods PDF pp. 5-8: ChIP and intracerebroventricular infusions"],
    ["tsa-gr-protein", "weaver2004-supplement", "Supplementary Methods PDF pp. 9-10: Western blotting and restraint stress"],
    ["tsa-restraint-corticosterone", "weaver2004-supplement", "Supplementary Methods PDF pp. 9-10: Western blotting and restraint stress"]
  ]) assert.ok(claims.get(`C-${key}`).citations.some((c) => c.sourceId === sid && c.locator === locator && c.role === "method"),
    "Maternal-care result lost its reviewed assay or foster-control methods");
  assert.equal(sources.get("marco2020").year, 2020);
  assert.equal(sources.get("marco2020").doi, "10.1038/s41593-020-00717-0", "Engram study identity changed");
  for (const c of graph.claims.filter((c) => c.contextIds?.includes("marco2020"))) {
    assert.equal(c.status, "publication-supported");
    assert.deepEqual(c.contextIds, ["marco2020"], "Conditioning and induced-activation preparations pooled");
    assert.deepEqual(c.checkIds, [], "Engram source inspection became independent biological reproduction");
    assert.ok(c.citations.some((x) => x.sourceId === "marco2020" && x.role === "supports"),
      "Engram primary experiment replaced by interpretation or code");
  }
  for (const key of ["engram-context-tagged-null", "engram-labelled-populations", "engram-accessibility-profile", "engram-histone-acetylation", "engram-h3k4me1-null", "engram-compartment-profile", "engram-promoter-contact-profile", "engram-nuclear-rna-profile", "engram-eif4e-shaft", "engram-eif4e-soma-null", "engram-gria1-shaft"]) {
    assert.equal(claims.get(`C-${key}`).status, "publication-supported");
    assert.deepEqual(claims.get(`C-${key}`).contextIds, ["marco2020"]);
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Engram population profile or null acquired a causal edge");
  }
  assert.ok(!graph.relations.some((r) => r.source === "neur:engram-chromatin-priming" || r.target === "neur:engram-chromatin-priming"),
    "Chromatin priming acquired an experimentally supported mechanism edge");
  for (const [key, sid, locators, role] of [
    ["engram-nuclear-rna-profile", "marco2020-table8", ["Basal_vs_Early!A1:G93", "Early_vs_Late!A1:G975", "Late_vs_Reactivated!A1:G517"], "supports"],
    ["engram-labelled-populations", "marco2020-table1", ["Sheet1!A1:J18", "Sheet1!A19:J45"], "method"],
    ["engram-accessibility-profile", "marco2020-table13", ["ATAC!A1:O17"], "limits"]
  ]) {
    const citations = claims.get(`C-${key}`).citations.filter((c) => sources.get(c.sourceId).kind === "research-dataset");
    assert.deepEqual(citations.map((c) => [c.sourceId, c.locator, c.role]), locators.map((loc) => [sid, loc, role]),
      "Engram assay lost its source cells or their evidence role");
  }
  for (const [sid, year, doi] of [
    ["jin2024", 2024, "10.1038/s41586-024-07469-y"], ["jin2024-reporting", 2024, null],
    ["dantzer2008", 2008, "10.1038/nrn2297"], ["tracey2002", 2002, "10.1038/nature01321"],
    ["besedovsky2007", 2007, "10.1016/j.bbi.2006.09.008"]
  ]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Neuroimmune source identity changed");
  }
  for (const sid of ["dantzer2008", "tracey2002", "besedovsky2007"]) {
    assert.ok(!studies.has(sid), "Neuroimmune review became a primary experiment");
    for (const c of graph.claims.filter((c) => c.citations.some((x) => x.sourceId === sid))) {
      assert.equal(c.status, "unresolved", "Neuroimmune review became primary mechanism evidence");
      assert.ok(c.citations.filter((x) => x.sourceId === sid).every((x) => x.role === "provenance"));
    }
  }
  for (const c of graph.claims.filter((c) => c.contextIds?.includes("jin2024"))) {
    assert.equal(c.status, "publication-supported");
    assert.deepEqual(c.contextIds, ["jin2024"], "Unmatched neuroimmune preparations pooled");
    assert.deepEqual(c.checkIds, [], "Publication reading became independent neuroimmune reproduction");
    assert.ok(c.citations.some((x) => x.sourceId === "jin2024-reporting" && x.role === "limits"),
      "Neuroimmune finding lost its study-design limits");
  }
  for (const [key, locator] of [
    [
        "lps-cnst-fos",
        "Figure 1b: cNST FOS; Methods: Animals and FOS stimulation and histology"
    ],
    [
        "lps-cnst-calcium",
        "Figure 1c: bulk calcium and vagotomy; Methods: Fibre photometry and subdiaphragmatic vagotomy"
    ],
    [
        "vagotomy-cnst-calcium",
        "Figure 1c: bulk calcium and vagotomy; Methods: Fibre photometry and subdiaphragmatic vagotomy"
    ],
    [
        "trap-inhibition-cytokines",
        "Figure 2b-c: LPS-TRAP2 inhibition and activation; Methods: Genetic access and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "trap-activation-cytokines",
        "Figure 2b-c: LPS-TRAP2 inhibition and activation; Methods: Genetic access and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "dbh-activation-cytokines",
        "Figure 3c-d: Dbh-cre activation; Methods: Stereotaxic surgery and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "trpa1-activation-cytokines",
        "Figure 5a-b,d-e: Trpa1-cre and Calca-cre cytokine assays; Methods: Nodose ganglion injection experiments and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "calca-activation-cytokines",
        "Figure 5a-b,d-e: Trpa1-cre and Calca-cre cytokine assays; Methods: Nodose ganglion injection experiments and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "trpa1-endotoxin-survival",
        "Figure 6a-c: high-dose LPS survival; Methods: Modulation of survival in LPS-induced endotoxaemia"
    ],
    [
        "dbh-endotoxin-survival",
        "Figure 6a-c: high-dose LPS survival; Methods: Modulation of survival in LPS-induced endotoxaemia"
    ],
    [
        "trpa1-salmonella-burden",
        "Extended Data Figure 13a-c: Salmonella tissue load; Methods: S. enterica serovar Typhimurium infection and chemogenetic activation of TRPA1 vagal neurons"
    ],
    [
        "injected-cytokine-nodose-calcium",
        "Figure 4a-b: injected cytokines and rapid LPS null; Methods: Vagal calcium imaging and Calcium imaging data collection and analysis"
    ],
    [
        "perfused-cytokine-nodose-calcium",
        "Figure 4c and Extended Data Figure 8b-e: intestinal perfusion and stimulus overlap; Methods: Vagal calcium imaging and Calcium imaging data collection and analysis"
    ],
    [
        "immune-trap-colabels",
        "Figure 2a: TRAP/FOS co-labels; Methods: Genetic access to LPS-activated neurons in the brain"
    ],
    [
        "immune-cnst-transcripts",
        "Figure 3a-c: transcript-defined clusters; Methods: scRNA-seq of cNST and LPS-TRAPed cells and scRNA-seq data analysis"
    ],
    [
        "trap-saline-cytokine-null",
        "Extended Data Figure 3a-b and Figure 2c: saline chemogenetic controls"
    ],
    [
        "vgat-lps-cytokine-null",
        "Extended Data Figure 4b: Vgat-cre activation and cytokine nulls"
    ],
    [
        "calca-il10-null",
        "Figure 5a-b,d-e: Trpa1-cre and Calca-cre cytokine assays; Methods: Nodose ganglion injection experiments and Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "rapid-lps-nodose-null",
        "Figure 4a-b: injected cytokines and rapid LPS null; Methods: Vagal calcium imaging and Calcium imaging data collection and analysis"
    ],
    [
        "nodose-stimulus-overlap",
        "Figure 4c and Extended Data Figure 8b-e: intestinal perfusion and stimulus overlap; Methods: Vagal calcium imaging and Calcium imaging data collection and analysis"
    ],
    [
        "vagal-cnst-tracing",
        "Extended Data Figure 12a-d: retrograde labeling; Methods: Mapping vagal-to-cNST circuit"
    ],
    [
        "dbh-corticosterone-null",
        "Extended Data Figure 13d-e: corticosterone nulls; Methods: Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "trpa1-corticosterone-null",
        "Extended Data Figure 13d-e: corticosterone nulls; Methods: Chemogenetic manipulation experiments and measurement of cytokines"
    ],
    [
        "neuroimmune-circuit-closure",
        "Discussion: descending pathways and immune effector cells; Extended Data Figures 8e and 9c: specificity limits"
    ],
    [
        "neuroimmune-generalization",
        "Discussion: descending pathways and immune effector cells; Extended Data Figures 8e and 9c: specificity limits"
    ]
]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.filter((x) => x.sourceId === "jin2024").map((x) => [x.locator, x.role]),
      [[locator, c.status === "unresolved" ? "provenance" : "supports"]],
      "Neuroimmune claim lost its assay-specific primary passage");
  }
  for (const key of ["immune-trap-colabels", "immune-cnst-transcripts", "trap-saline-cytokine-null", "vgat-lps-cytokine-null", "calca-il10-null", "rapid-lps-nodose-null", "nodose-stimulus-overlap", "vagal-cnst-tracing", "dbh-corticosterone-null", "trpa1-corticosterone-null", "neuroimmune-circuit-closure", "neuroimmune-generalization"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Neuroimmune observation, null or untested mechanism acquired a causal edge");
  }
  for (const [sid, year, doi] of [
    ["longden2017", 2017, "10.1038/nn.4533"], ["longden2017-supplement", 2017, null],
    ["longden2017-reporting", 2017, null], ["noterman2026", 2026, "10.1073/pnas.2615120123"],
    ["attwell2002", 2002, "10.1016/S0166-2236(02)02264-6"],
    ["iadecola2017", 2017, "10.1016/j.neuron.2017.07.030"], ["roy1890", 1890, "10.1113/jphysiol.1890.sp000321"], ["krolak2025", 2025, "10.1016/j.cell.2025.06.030"]
  ]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Neurovascular source identity changed");
  }
  for (const sid of ["attwell2002", "iadecola2017", "roy1890"]) {
    assert.ok(!studies.has(sid), "Contextual vascular citation became an admitted primary assay");
    for (const c of graph.claims.filter((c) => c.citations.some((x) => x.sourceId === sid))) {
      assert.equal(c.status, "unresolved", "Contextual vascular citation became active mechanism evidence");
      assert.ok(c.citations.filter((x) => x.sourceId === sid).every((x) => x.role === "provenance"));
    }
  }
  for (const [key, sid, passages] of [
    ["kir21-cec-current", "longden2017", [["longden2017", "Figure 1b-f: capillary endothelial currents; Online Methods: Generation of EC KIR2.1 knockout mice and Electrophysiology", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-arteriole-dilation", "longden2017", [["longden2017", "Figure 2c-f: capillary potassium and upstream diameter; Online Methods: Isolated pressurized parenchymal arterioles and CaPA preparation", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-sm-voltage", "longden2017", [["longden2017", "Figure 2g-h: upstream smooth-muscle membrane potential; Online Methods: Membrane potential", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-severing-dilation", "longden2017", [["longden2017", "Figure 2c-f: capillary potassium and upstream diameter; Online Methods: Isolated pressurized parenchymal arterioles and CaPA preparation", "supports"], ["longden2017-supplement", "Supplementary Figure 8", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-rbc-flux", "longden2017", [["longden2017", "Figure 3e-j: capillary RBC flux; Online Methods: In vivo imaging of cerebral hemodynamics and Data analysis", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-rbc-velocity", "longden2017", [["longden2017", "Figure 3e-j: capillary RBC flux; Online Methods: In vivo imaging of cerebral hemodynamics and Data analysis", "supports"], ["longden2017-supplement", "Supplementary Figure 9", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-feed-diameter", "longden2017", [["longden2017", "Figure 4a-d: upstream arteriole diameter; Online Methods: In vivo imaging of cerebral hemodynamics", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-surface-k-hyperemia", "longden2017", [["longden2017", "Figure 5a: surface potassium and relative blood flow; Online Methods: Laser Doppler flowmetry", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-whisker-hyperemia", "longden2017", [["longden2017", "Figure 5b-c: whisker-evoked relative blood flow; Online Methods: Laser Doppler flowmetry and Data analysis", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-ttx-flux", "longden2017", [["longden2017", "Figure 3e-j: capillary RBC flux; Online Methods: In vivo imaging of cerebral hemodynamics and Data analysis", "supports"], ["longden2017-supplement", "Supplementary Figure 11", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-skik-null", "longden2017", [["longden2017", "Figure 1g-i: capillary versus pial SK/IK currents; Online Methods: Electrophysiology", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-high-dose-response", "longden2017", [["longden2017", "Figure 2i-j: high-potassium capillary stimulation; Online Methods: Isolated pressurized parenchymal arterioles and CaPA preparation", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-local-diameter-null", "longden2017", [["longden2017", "Figure 4e and Discussion: unchanged diameter at sampled capillary sites", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["cap-k-pressure-null", "longden2017", [["longden2017", "Figure 3e-j: capillary RBC flux; Online Methods: In vivo imaging of cerebral hemodynamics and Data analysis", "supports"], ["longden2017-supplement", "Supplementary Figure 10", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-lfp-null", "longden2017", [["longden2017", "Online Methods: Animal Husbandry, Statistics, In vivo electrophysiology and Data analysis", "supports"], ["longden2017-supplement", "Supplementary Figure 12", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-sm-current-null", "longden2017", [["longden2017", "Figure 1b-f: capillary endothelial currents; Online Methods: Generation of EC KIR2.1 knockout mice and Electrophysiology", "supports"], ["longden2017-supplement", "Supplementary Figure 2", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["kir21-dose-curve", "longden2017", [["longden2017", "Figure 2c-f: capillary potassium and upstream diameter; Online Methods: Isolated pressurized parenchymal arterioles and CaPA preparation", "supports"], ["longden2017-supplement", "Supplementary Figure 5", "supports"], ["longden2017-reporting", "Reporting Checklist pp. 4-5: study design, animals and exclusions", "limits"]]],
    ["neurovascular-complete-route", "longden2017", [["longden2017", "Discussion: proposed conducted mechanism and possible potassium sources", "provenance"], ["iadecola2017", "Figures 6-9 and accompanying text: regional and segment-specific mechanisms, conducted signals and knowledge gaps", "provenance"], ["longden2017-supplement", "Supplementary Figure 13", "provenance"], ["krolak2025", "Discussion, Figure 7 caption and Limitations of the Study", "provenance"]]],
    ["neurovascular-neural-readout", "longden2017", [["longden2017", "Discussion: proposed conducted mechanism and possible potassium sources", "provenance"], ["attwell2002", "PubMed PMID 12446129: metadata and abstract", "provenance"], ["iadecola2017", "Abstract and sections: Neurovascular coupling; Why does CBF increase during neural activity?; Endothelial cells; Conclusions and future directions", "provenance"], ["roy1890", "Printed pp. 85-90: pressure controls and brain-volume recording method", "provenance"], ["roy1890", "Printed pp. 104-106: brain-extract injection and proposed local metabolic regulation", "provenance"]]],
    ["arf6-kinase-proxy", "noterman2026", [["noterman2026", "Figure 1b-c, pp. 2-3: microvessel ATP-depletion assay; p. 8: PIP5KI Activity Assay", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-nav-kir-current", "noterman2026", [["noterman2026", "Figure 2b-c, pp. 3-4: NAV-2729 and diC16-PIP2 current time courses; p. 8: Electrophysiology", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-genetic-kir-current", "noterman2026", [["noterman2026", "Figure 2d-e, pp. 3-4: Arf6 knockdown and diC16-PIP2 currents; p. 8: Animal Models and Electrophysiology", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-pip2-kir-current", "noterman2026", [["noterman2026", "Figure 2d-e, pp. 3-4: Arf6 knockdown and diC16-PIP2 currents; p. 8: Animal Models and Electrophysiology", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-nav-dilation", "noterman2026", [["noterman2026", "Figure 3a-c, pp. 3-5: capillary potassium and upstream dilation; p. 8: Myography", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-nav-hyperemia", "noterman2026", [["noterman2026", "Figure 4b-c, pp. 4-6: NAV-2729 and concurrent diC16-PIP2 flow responses; p. 8: In Vivo Laser-Doppler Flowmetry", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-genetic-hyperemia", "noterman2026", [["noterman2026", "Figure 4d-f, pp. 5-6: genotype and barium flow responses; p. 8: Animal Models and In Vivo Laser-Doppler Flowmetry", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-pip2-hyperemia", "noterman2026", [["noterman2026", "Figure 4g-h, pp. 5-6: diC16-PIP2 and flow in a separate genotype cohort; p. 8: In Vivo Laser-Doppler Flowmetry", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-tone-null", "noterman2026", [["noterman2026", "Figure 3d, pp. 4-5: resting tone null; p. 8: Myography", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-control-pip2-current-null", "noterman2026", [["noterman2026", "Figure 2d-e, pp. 3-4: Arf6 knockdown and diC16-PIP2 currents; p. 8: Animal Models and Electrophysiology", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-capacitance-null", "noterman2026", [["noterman2026", "p. 3: whole-cell capacitance comparison; p. 8: Electrophysiology", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-vehicle-hyperemia", "noterman2026", [["noterman2026", "Figure 4b-c, pp. 4-6: NAV-2729 and concurrent diC16-PIP2 flow responses; p. 8: In Vivo Laser-Doppler Flowmetry", "supports"], ["noterman2026", "p. 8: Chemicals, Animal Models, Statistical Analysis, Data, Materials, and Software Availability", "limits"]]],
    ["arf6-pip2-exclusive-mediation", "noterman2026", [["noterman2026", "Discussion pp. 6-7: PIP2 proxy, alternative pathways and disease hypotheses", "provenance"]]],
    ["cx-aortic-electrical", "krolak2025", [["krolak2025", "Figure 3D-F; Methods: Aortic Endothelial Cell Electrophysiology & Neurobiotin Tracer Experiments", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-aortic-tracer", "krolak2025", [["krolak2025", "Figure 3D-F; Methods: Aortic Endothelial Cell Electrophysiology & Neurobiotin Tracer Experiments", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-retinal-arterial-tracer", "krolak2025", [["krolak2025", "Figure 3G and Figure S5B; Methods: Non-Invasive Gap Junction Tracing", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-focal-diameter", "krolak2025", [["krolak2025", "Figure 4E; Methods: Visual Stimulus Presentation, Two-Photon Microscopy and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-focal-hbt", "krolak2025", [["krolak2025", "Figure 4F-H; Methods: Quantification of Simultaneously Acquired GCaMP / IOS Measurements and Stimulus-Evoked Neural Response Mapping", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-opto-hbt", "krolak2025", [["krolak2025", "Figure 5A-C and Figure S7A-D; Methods: Optogenetic Stimulation and Quantification of Simultaneously Acquired GCaMP / IOS Measurements", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-opto-propagation", "krolak2025", [["krolak2025", "Figure 5D-F; Methods: Derived Vasomotion Parameter Quantification and Calculation of Propagation Velocity", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-opto-peak", "krolak2025", [["krolak2025", "Figure S7E-H; Methods: Derived Vasomotion Parameter Quantification and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-fullfield-hbt", "krolak2025", [["krolak2025", "Figure 6A-D; Methods: Visual Stimulus Presentation, Quantification of Simultaneously Acquired GCaMP / IOS Measurements and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-fullfield-peak", "krolak2025", [["krolak2025", "Figure 6A-D; Methods: Visual Stimulus Presentation, Quantification of Simultaneously Acquired GCaMP / IOS Measurements and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-reporter-zonation", "krolak2025", [["krolak2025", "Figure 2 and Figure S3; Results: Connexin isoforms are differentially expressed in CNS endothelial cells along the arterio-venous axis", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-retinal-small-tracer", "krolak2025", [["krolak2025", "Figure 3G and Figure S5B; Methods: Non-Invasive Gap Junction Tracing", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-diving-diameter-null", "krolak2025", [["krolak2025", "Figure 4E; Methods: Visual Stimulus Presentation, Two-Photon Microscopy and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-resting-diameter", "krolak2025", [["krolak2025", "Figure S6C-G; Methods: Two-Photon Microscopy and Blood Pressure Recordings", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-resting-rbc-null", "krolak2025", [["krolak2025", "Figure S6C-G; Methods: Two-Photon Microscopy and Blood Pressure Recordings", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-tail-pressure-null", "krolak2025", [["krolak2025", "Figure S6C-G; Methods: Two-Photon Microscopy and Blood Pressure Recordings", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-opto-far-peak-null", "krolak2025", [["krolak2025", "Figure S7E-H; Methods: Derived Vasomotion Parameter Quantification and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-fullfield-far-peak-null", "krolak2025", [["krolak2025", "Figure 6A-D; Methods: Visual Stimulus Presentation, Quantification of Simultaneously Acquired GCaMP / IOS Measurements and Linear Mixed-Effect Modeling", "supports"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "limits"]]],
    ["cx-electrical-carrier", "krolak2025", [["krolak2025", "Discussion, Figure 7 caption and Limitations of the Study", "provenance"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "provenance"]]],
    ["cx-zonation-routing", "krolak2025", [["krolak2025", "Discussion, Figure 7 caption and Limitations of the Study", "provenance"], ["krolak2025", "Animals; Trajectory Filtering & Behavioral Correction; Post-Hoc Arterial Network Registration; Resource Availability", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Neurovascular claim lost its assay passage or preparation limits");
    assert.deepEqual(c.checkIds, [], "Publication reading became independent vascular reproduction");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Unmatched vascular preparations pooled or dropped");
    }
  }
  for (const key of ["kir21-skik-null", "cap-k-high-dose-response", "cap-k-local-diameter-null", "cap-k-pressure-null", "kir21-lfp-null", "kir21-sm-current-null", "kir21-dose-curve", "arf6-tone-null", "arf6-control-pip2-current-null", "arf6-capacitance-null", "arf6-vehicle-hyperemia", "neurovascular-complete-route", "neurovascular-neural-readout", "arf6-pip2-exclusive-mediation", "cx-reporter-zonation", "cx-retinal-small-tracer", "cx-diving-diameter-null", "cx-resting-diameter", "cx-resting-rbc-null", "cx-tail-pressure-null", "cx-opto-far-peak-null", "cx-fullfield-far-peak-null", "cx-electrical-carrier", "cx-zonation-routing"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Vascular null, observation or incomplete mechanism acquired a causal edge");
  }
  for (const [sid, year, doi] of [
    ["aimone2014", 2014, "10.1152/physrev.00004.2014"],
    ["kempermann2015", 2015, "10.1101/cshperspect.a018812"],
    ["rakic1985", 1985, "10.1126/science.3975601"],
    ["vanpraag2002", 2002, "10.1038/4151030a"],
    ["disouky2026", 2026, "10.1038/s41586-026-10169-4"]
  ]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Neurogenesis publication identity changed");
  }
  assert.equal(sources.get("song2012").doi, "10.1038/nature11306");
  assert.equal(studies.get("song2012").pmid, "22842902");
  assert.equal(sources.get("song2012-supplement").doi, null, "Supplement acquired an independent publication DOI");
  assert.equal(sources.get("song2012-supplement").review.extent, "all-supplementary-text-and-figures");
  for (const [key, kind, passages] of [
    ["pv-rgl-slice-protocol", "context", [["song2012", "Results, pages 152-153; Figure 4a-c: PV proximity and optogenetic slice currents", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 4a-e: PV opsin expression and physiological controls", "supports"], ["song2012-supplement", "Supplementary Figure 6a-g: SST and VIP tools, slice controls and in vivo protocols", "limits"]]],
    ["pv-rgl-tonic-current", "scoped-process", [["song2012", "Results, pages 152-153; Figure 4a-c: PV proximity and optogenetic slice currents", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 4a-e: PV opsin expression and physiological controls", "supports"], ["song2012-supplement", "Supplementary Figure 1: RGL markers, GABA pharmacology and synaptic-current nulls", "limits"]]],
    ["rgl-synaptic-null", "scoped-process", [["song2012", "Results, page 150; Figure 1: tonic GABA responses and pharmacology", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 1: RGL markers, GABA pharmacology and synaptic-current nulls", "supports"]]],
    ["pv-rgl-activation-protocol", "context", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 4a-e: PV opsin expression and physiological controls", "supports"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "supports"]]],
    ["pv-rgl-cycle-suppression", "scoped-process", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "supports"]]],
    ["pv-rgl-inhibition-protocol", "context", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 4a-e: PV opsin expression and physiological controls", "supports"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "supports"]]],
    ["pv-rgl-cycle-increase", "scoped-process", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "supports"]]],
    ["sst-rgl-cycle-null", "scoped-process", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 6a-g: SST and VIP tools, slice controls and in vivo protocols", "supports"]]],
    ["vip-rgl-cycle-null", "scoped-process", [["song2012", "Results, page 152; Figure 4d-f: PV, SST and VIP manipulation and RGL cycle markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 6a-g: SST and VIP tools, slice controls and in vivo protocols", "supports"]]],
    ["rgl-gamma2-deletion-protocol", "context", [["song2012", "Results, page 151; Figure 2c-e: conditional gamma2 deletion and clone activation", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "supports"], ["song2012-supplement", "Supplementary Figure 3a-e: thirty-day clone composition and denominators", "limits"]]],
    ["rgl-gamma2-clone-activation", "scoped-process", [["song2012", "Results, page 151; Figure 2c-e: conditional gamma2 deletion and clone activation", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "supports"], ["song2012", "Results, pages 151-152; Figure 3: seven-day and thirty-day clone composition", "supports"]]],
    ["rgl-gamma2-late-composition", "scoped-process", [["song2012", "Results, pages 151-152; Figure 3: seven-day and thirty-day clone composition", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 3a-e: thirty-day clone composition and denominators", "supports"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "limits"]]],
    ["rgl-diazepam-protocol", "context", [["song2012", "Results, pages 150-151; Figure 2a-b: five-day systemic diazepam and population markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "supports"]]],
    ["rgl-diazepam-cycle-markers", "scoped-process", [["song2012", "Results, pages 150-151; Figure 2a-b: five-day systemic diazepam and population markers", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "supports"]]],
    ["rgl-diazepam-genotype-response", "scoped-process", [["song2012", "Results, page 151; Figure 2c-e: conditional gamma2 deletion and clone activation", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 2a-g: diazepam schedules, clone units and gamma2-deletion characterization", "supports"], ["song2012", "Results, pages 151-152; Figure 3: seven-day and thirty-day clone composition", "supports"]]],
    ["pv-isolation-protocol", "context", [["song2012", "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 7a-c: isolation, clonal and population timelines", "supports"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "supports"]]],
    ["pv-isolation-cycle-suppression", "scoped-process", [["song2012", "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 7a-c: isolation, clonal and population timelines", "supports"], ["song2012-supplement", "Supplementary Figure 5a-b: five-day PV stimulation, EdU schedule and RGL scoring", "limits"]]],
    ["pv-isolation-residual-edu", "scoped-process", [["song2012", "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 7a-c: isolation, clonal and population timelines", "supports"]]],
    ["pv-isolation-mcm-null", "scoped-process", [["song2012", "Results, pages 152-153; Figure 5c: housing-by-PV-stimulation population comparisons", "supports"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "limits"], ["song2012-supplement", "Supplementary Figure 7a-c: isolation, clonal and population timelines", "supports"]]],
    ["rgl-homeostatic-loop", "hypothesis", [["song2012", "Discussion, page 153: proposed adaptive circuit regulation and RGL coverage", "provenance"], ["song2012", "Online Methods: Immunohistochemistry, confocal imaging, processing and quantification", "provenance"], ["song2012-supplement", "Supplementary Figure 8a-b: circuit schematic and proposed activity-dependent regulation", "provenance"], ["song2012-supplement", "Supplementary Movie 1-3 legends, page 9: reconstructions and reported RGL coverage", "provenance"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(`C-${key}`);
    const hypothesis = kind === "hypothesis";
    assert.equal(e.kind, kind, "RGL record changed its scientific role");
    assert.equal(e.status, hypothesis ? "hypothesis" : "evidence-scoped");
    assert.deepEqual(e.claimIds, [c.id]);
    assert.equal(c.status, hypothesis ? "unresolved" : "publication-supported");
    assert.deepEqual(c.contextIds, hypothesis ? undefined : ["song2012"], "RGL endpoint inherited a different preparation");
    assert.deepEqual(c.checkIds, [], "RGL publication reading became independent reproduction");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "RGL endpoint lost its specific assay, comparator or method limits");
    if (hypothesis) assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "Circuit schematic became measured feedback closure");
  }
  assert.equal(sources.get("suh2007").doi, "10.1016/j.stem.2007.09.002");
  assert.equal(sources.get("suh2007").year, 2007);
  assert.equal(studies.get("suh2007").pmid, "18371391");
  assert.equal(sources.get("suh2007-supplement").doi, null, "Supplement acquired an independent publication DOI");
  assert.equal(sources.get("suh2007-supplement").review.extent, "all-supplementary-text-and-figures");
  for (const [key, kind, passages] of [
    ["sox2-reporter-population", "scoped-process", [["suh2007", "Results, pages 516-517; Figure 1: radial and nonradial reporter phenotypes", "supports"], ["suh2007", "Experimental Procedures, pages 526-527: Animal Husbandry, Lentivirus and Retrovirus", "limits"], ["suh2007-supplement", "Figure S1, page 3: reporter phenotypes in the SVZ", "limits"], ["suh2007-supplement", "Figure S2, pages 4-5: dividing SGZ cells and hilar phenotypes", "supports"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-culture-expansion", "scoped-process", [["suh2007", "Results, pages 518-519; Figure 2: culture expansion and differentiation", "supports"], ["suh2007", "Experimental Procedures, page 527: Isolation of NSCs by FACS", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, page 12: preparation, culture and differentiation", "supports"]]],
    ["sox2-culture-fates", "scoped-process", [["suh2007", "Results, pages 518-519; Figure 2: culture expansion and differentiation", "supports"], ["suh2007", "Experimental Procedures, page 527: Isolation of NSCs by FACS", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, page 12: preparation, culture and differentiation", "supports"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-lentiviral-specificity", "scoped-process", [["suh2007", "Results, pages 519-521; Figure 3 and Table 1: lentiviral population fate mapping", "supports"], ["suh2007", "Experimental Procedures, pages 526-527: Animal Husbandry, Lentivirus and Retrovirus", "limits"], ["suh2007-supplement", "Supplemental Results, pages 1-2; Figure S3, pages 6-7: lentiviral targeting and controls", "supports"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-population-fates", "scoped-process", [["suh2007", "Results, pages 519-521; Figure 3 and Table 1: lentiviral population fate mapping", "supports"], ["suh2007", "Experimental Procedures, pages 526-527: Animal Husbandry, Lentivirus and Retrovirus", "limits"], ["suh2007-supplement", "Supplemental Results, pages 1-2; Figure S3, pages 6-7: lentiviral targeting and controls", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-cluster-census", "scoped-process", [["suh2007", "Results, pages 519-522; Figure 4 and Table 2: sparse retroviral clusters", "supports"], ["suh2007", "Experimental Procedures, pages 526-527: Animal Husbandry, Lentivirus and Retrovirus", "limits"], ["suh2007-supplement", "Figure S4, pages 8-9: optical-depth series of mixed clusters", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-mixed-clusters", "scoped-process", [["suh2007", "Results, pages 519-522; Figure 4 and Table 2: sparse retroviral clusters", "supports"], ["suh2007", "Experimental Procedures, pages 526-527: Animal Husbandry, Lentivirus and Retrovirus", "limits"], ["suh2007-supplement", "Figure S4, pages 8-9: optical-depth series of mixed clusters", "supports"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-running-markers", "scoped-process", [["suh2007", "Results, pages 521 and 523; Figure 5: running comparisons and marker densities", "supports"], ["suh2007", "Experimental Procedures, page 527: Running Experiment and Quantification", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-running-pool-null", "scoped-process", [["suh2007", "Results, pages 521 and 523; Figure 5: running comparisons and marker densities", "supports"], ["suh2007", "Experimental Procedures, page 527: Running Experiment and Quantification", "limits"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "limits"]]],
    ["sox2-clonal-selfrenewal", "hypothesis", [["suh2007", "Results, pages 519-522; Figure 4 and Table 2: sparse retroviral clusters", "provenance"], ["suh2007", "Discussion, pages 524-526; Figure 6: lineage and population-maintenance models", "provenance"], ["suh2007-supplement", "Figure S4, pages 8-9: optical-depth series of mixed clusters", "provenance"]]],
    ["sox2-radial-lineage-loop", "hypothesis", [["suh2007", "Discussion, pages 524-526; Figure 6: lineage and population-maintenance models", "provenance"], ["suh2007", "Results, pages 519-522; Figure 4 and Table 2: sparse retroviral clusters", "provenance"], ["suh2007-supplement", "Figure S4, pages 8-9: optical-depth series of mixed clusters", "provenance"]]],
    ["sox2-population-homeostasis", "hypothesis", [["suh2007", "Discussion, pages 524-526; Figure 6: lineage and population-maintenance models", "provenance"], ["suh2007", "Experimental Procedures, page 527: Running Experiment and Quantification", "provenance"], ["suh2007-supplement", "Supplemental Experimental Procedures, pages 10-11: immunohistochemistry and imaging", "provenance"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(`C-${key}`);
    const hypothesis = kind === "hypothesis";
    assert.equal(e.kind, kind, "Sox2 assay changed its scientific role");
    assert.equal(e.status, hypothesis ? "hypothesis" : "evidence-scoped");
    assert.deepEqual(e.claimIds, [c.id]);
    assert.equal(c.status, hypothesis ? "unresolved" : "publication-supported");
    assert.deepEqual(c.contextIds, hypothesis ? undefined : ["suh2007"], "Sox2 record inherited a different preparation");
    assert.deepEqual(c.checkIds, [], "Publication reading became independent lineage reproduction");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "Sox2 assay lost its specific source, control or sampling limits");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "Sox2 profile or conditional lineage model acquired an unreviewed transition");
  }
  for (const [sid, doi, extent] of [
    ["baddeley2003", "10.1038/nrn1201", "main-text-and-figures"],
    ["baddeley2003-language", "10.1016/S0021-9924(03)00019-4", "metadata-and-abstract-only"],
    ["miller2001", "10.1146/annurev.neuro.24.1.167", "main-text-and-figures"],
    ["fuster2008", "10.1016/B978-0-12-373644-4.X0001-1", "publisher-metadata-only"]
  ]) {
    assert.equal(sources.get(sid).doi, doi, "Working-memory references lost their distinct publication identities");
    assert.equal(sources.get(sid).review.extent, extent);
    assert.ok(!studies.has(sid), "A theoretical review or unread book became an experimental preparation");
  }
  assert.ok(!graph.claims.some((c) => c.citations.some((r) => r.sourceId === "fuster2008" && r.role !== "provenance")),
    "Unread book chapters acquired scientific support");
  for (const [key, kind, passages] of [
    ["wm-task-construct", "definition", [["baddeley2003", "Page 829; Box 1, page 830: temporary storage, processing and task measures", "supports"], ["baddeley2003", "Pages 836-837; Figure 6: tentative anatomical mapping and task interpretation limits", "limits"], ["baddeley2003-language", "Bibliographic metadata and abstract", "provenance"]]],
    ["wm-multicomponent-model", "definition", [["baddeley2003", "Pages 829-835; Figures 1-4: multicomponent vocabulary and storage/control distinctions", "supports"], ["baddeley2003", "Pages 832-834; Figure 3: visual and spatial task distinctions and caption wording", "limits"], ["baddeley2003", "Pages 836-837; Figure 6: tentative anatomical mapping and task interpretation limits", "limits"]]],
    ["wm-control-requirements", "definition", [["miller2001", "Pages 169-173; Figure 2: guided activation and theory-relative control requirements", "supports"], ["miller2001", "Pages 187-190: dopamine gating, reinforcement, learning and unresolved mechanisms", "limits"], ["miller2001", "Pages 190-194; Figure 5: conflict monitoring, maintenance mechanisms and planning limits", "limits"]]],
    ["wm-episodic-buffer", "hypothesis", [["baddeley2003", "Pages 835-836; Figure 5: proposed episodic buffer and activated long-term memory alternative", "provenance"], ["baddeley2003", "Pages 836-837; Figure 6: tentative anatomical mapping and task interpretation limits", "provenance"]]],
    ["wm-pfc-guided-activation", "hypothesis", [["miller2001", "Pages 169-173; Figure 2: guided activation and theory-relative control requirements", "provenance"], ["miller2001", "Pages 183-186; Figure 4: modulatory bias, maintenance and local competition", "provenance"], ["miller2001", "Pages 190-194; Figure 5: conflict monitoring, maintenance mechanisms and planning limits", "provenance"], ["miller1996", "Pages 5165-5166: interpretation and proposed PF feedback to IT", "provenance"]]],
    ["wm-adaptive-gating", "hypothesis", [["miller2001", "Pages 187-190: dopamine gating, reinforcement, learning and unresolved mechanisms", "provenance"], ["miller2001", "Pages 190-194; Figure 5: conflict monitoring, maintenance mechanisms and planning limits", "provenance"]]]
  ]) {
    const hypothesis = kind === "hypothesis";
    const e = entities.get(`neur:${key}`), c = claims.get(`${hypothesis ? "C" : "D"}-${key}`);
    assert.equal(e.kind, kind, "A working-memory construct changed its scientific role");
    assert.equal(e.status, hypothesis ? "hypothesis" : "definition");
    assert.deepEqual(e.claimIds, [c.id]);
    assert.equal(c.status, hypothesis ? "unresolved" : "definition");
    assert.equal(c.contextIds, undefined, "A theory inherited an experimental preparation");
    assert.deepEqual(c.checkIds, [], "Source reading became independent model reproduction");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "A construct lost its source-specific definition or theoretical boundary");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "A working-memory schematic acquired an unreviewed physical dependency");
  }
  for (const [sid, sourceId, doi] of [
    ["miller1996", "miller1996", "10.1523/JNEUROSCI.16-16-05154.1996"],
    ["rose2016-fmri", "rose2016", "10.1126/science.aah7011"],
    ["rose2016-eeg-targets", "rose2016", "10.1126/science.aah7011"],
    ["rose2016-eeg-priority", "rose2016", "10.1126/science.aah7011"],
    ["rose2016-behavior", "rose2016", "10.1126/science.aah7011"],
    ["rose2016-pooled-behavior", "rose2016", "10.1126/science.aah7011"]
  ]) {
    assert.equal(studies.get(sid).sourceId, sourceId, "A working-memory assay lost its publication identity");
    assert.equal(studies.get(sid).doi, doi);
    assert.equal(sources.get(sourceId).doi, doi);
  }
  for (const [key, kind, context, passages] of [
    ["wm-dms-sample", "context", "miller1996", [["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "supports"]]],
    ["wm-pfc-delay-selectivity", "scoped-process", "miller1996", [["miller1996", "Pages 5156-5161; Figures 4-8: delay selectivity, classification and visual coding", "supports"], ["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "limits"]]],
    ["wm-pfc-delay-dynamics", "scoped-process", "miller1996", [["miller1996", "Pages 5160-5163; Figures 9-10: within-delay and across-delay dynamics", "supports"], ["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "limits"]]],
    ["wm-pfc-match-enhancement", "scoped-process", "miller1996", [["miller1996", "Pages 5161-5165; Figures 11-13 and Table 1: match and repetition responses", "supports"], ["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "limits"]]],
    ["wm-pfc-repetition-suppression", "scoped-process", "miller1996", [["miller1996", "Pages 5161-5165; Figures 11-13 and Table 1: match and repetition responses", "supports"], ["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "limits"]]],
    ["wm-pfc-it-delay-comparison", "scoped-process", "miller1996", [["miller1996", "Pages 5159-5160 and 5163-5164; Figure 7 and Table 1: PF-IT comparison", "supports"], ["miller1996", "Pages 5154-5156; Figures 1-2: DMS protocols, screening, recording and analysis", "limits"]]],
    ["wm-fmri-priority", "scoped-process", "rose2016-fmri", [["rose2016", "Pages 1136-1137; Figures 1-2: category decoding and attentional priority", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"], ["rose2016", "Combined PDF pages 8-12; Figure S2: MRI, decoding, task timing and TMS methods", "limits"]]],
    ["wm-eeg-target-reactivation", "scoped-process", "rose2016-eeg-targets", [["rose2016", "Page 1138; Figure 3: category-targeted TMS-EEG decoding", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"], ["rose2016", "Combined PDF pages 8-12; Figure S2: MRI, decoding, task timing and TMS methods", "limits"], ["rose2016", "Combined PDF pages 12-18; Figure S3: EEG preprocessing and classification", "limits"], ["rose2016", "Combined PDF pages 18-19; Figures S4-S5: pooled behavior and frequency-resolved decoding", "supports"]]],
    ["wm-eeg-relevance-contrast", "scoped-process", "rose2016-eeg-priority", [["rose2016", "Pages 1138-1139; Figure 4B: TMS-EEG after the first and second cues", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"], ["rose2016", "Combined PDF pages 8-12; Figure S2: MRI, decoding, task timing and TMS methods", "limits"], ["rose2016", "Combined PDF pages 12-18; Figure S3: EEG preprocessing and classification", "limits"]]],
    ["wm-lure-behavior", "scoped-process", "rose2016-behavior", [["rose2016", "Pages 1138-1139; Figure 4C: lure-probe behavior with and without TMS", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"], ["rose2016", "Combined PDF pages 8-12; Figure S2: MRI, decoding, task timing and TMS methods", "limits"], ["rose2016", "Combined PDF pages 19-20: Experiment 4 lure-probe analyses", "supports"]]],
    ["wm-pooled-behavior-null", "scoped-process", "rose2016-pooled-behavior", [["rose2016", "Combined PDF pages 18-19; Figures S4-S5: pooled behavior and frequency-resolved decoding", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"]]],
    ["wm-global-complexity-null", "scoped-process", "rose2016-eeg-targets", [["rose2016", "Combined PDF pages 20-23; Figure S6 and Table S1: source-level complexity and spread analyses", "supports"], ["rose2016", "Combined PDF pages 6-8: Participants and General Procedure", "limits"], ["rose2016", "Combined PDF pages 12-18; Figure S3: EEG preprocessing and classification", "limits"]]],
    ["wm-latent-synaptic-trace", "hypothesis", null, [["rose2016", "Page 1139: latent storage and category-context alternative", "provenance"], ["rose2016", "Combined PDF pages 12-18; Figure S3: EEG preprocessing and classification", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`), e = entities.get(`neur:${key}`);
    const hypothesis = kind === "hypothesis";
    assert.equal(e.kind, kind);
    assert.equal(e.status, hypothesis ? "hypothesis" : "evidence-scoped");
    assert.deepEqual(e.claimIds, [c.id]);
    assert.equal(c.status, hypothesis ? "unresolved" : "publication-supported");
    assert.deepEqual(c.contextIds, context ? [context] : undefined,
      "Working-memory observations crossed task, cohort or readout boundaries");
    assert.deepEqual(c.checkIds, [], "Published working-memory results became independent reproduction");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "A working-memory readout lost its assay-specific methods or interpretation limits");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "Working-memory readouts acquired an untested carrier or feedback connection");
  }
  for (const [sid, doi, extent] of [
    ["dehaene2015-sequences", "10.1016/j.neuron.2015.09.019", "main-text-and-figures"],
    ["dehaene2022-symbols", "10.1016/j.tics.2022.06.010", "main-text-and-figures"],
    ["carey2009", "10.1093/acprof:oso/9780195367638.001.0001", "selected-full-text-passages"],
    ["carey2011-precis", "10.1017/S0140525X10000919", "selected-full-text-passages"],
    ["pajot2026", "10.1371/journal.pcbi.1014554", "selected-full-text-passages"]
  ]) {
    assert.equal(sources.get(sid).doi, doi, "Symbolic representation sources lost their publication identities");
    assert.equal(sources.get(sid).review.extent, extent, "Selected reading became a complete source review");
    assert.ok(![...studies.values()].some((s) => s.sourceId === sid && s.studyType !== "computational-analysis"),
      "Conceptual or computational source reading became an admitted neural assay");
  }
  for (const [key, kind, passages] of [
    ["sequence-transition-code", "definition", [["dehaene2015-sequences", "Pages 2-3; Figure 1: proposed taxonomy of sequence codes", "supports"], ["dehaene2015-sequences", "Pages 3-5; Figure 2: timing, transitions and competing mismatch explanations", "supports"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "limits"]]],
    ["sequence-chunk-code", "definition", [["dehaene2015-sequences", "Pages 2-3; Figure 1: proposed taxonomy of sequence codes", "supports"], ["dehaene2015-sequences", "Pages 5-7; Figure 3: chunking and unresolved chunk allocation", "supports"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "limits"]]],
    ["sequence-ordinal-code", "definition", [["dehaene2015-sequences", "Pages 2-3; Figure 1: proposed taxonomy of sequence codes", "supports"], ["dehaene2015-sequences", "Pages 6-8; Figure 4: ordinal information and item-position conjunctions", "supports"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "limits"]]],
    ["sequence-algebraic-code", "definition", [["dehaene2015-sequences", "Pages 2-3; Figure 1: proposed taxonomy of sequence codes", "supports"], ["dehaene2015-sequences", "Pages 8-10; Figure 5: algebraic patterns and stimulus substitution", "supports"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "limits"]]],
    ["sequence-nested-code", "definition", [["dehaene2015-sequences", "Pages 2-3; Figure 1: proposed taxonomy of sequence codes", "supports"], ["dehaene2015-sequences", "Pages 9-14; Figures 6-7: nested constituents, neural interpretations and limits", "supports"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "limits"]]],
    ["symbol-composition", "definition", [["dehaene2022-symbols", "Author proof pages 2-4; Glossary and Figure 2: scoped symbols, programs and composition", "supports"], ["dehaene2022-symbols", "Author proof pages 12-13: concluding hypotheses and unresolved neural implementation", "limits"]]],
    ["symbol-description-cost", "definition", [["dehaene2022-symbols", "Author proof pages 3-7; Figure 3: fixed-language description length and spatial sequences", "supports"], ["pajot2026", "Materials and methods, pages 16-18: behavioral cohorts, feature baseline and drawing-language cost", "supports"], ["pajot2026", "Discussion, pages 13-16: training confounds, generation and neural interpretation", "limits"]]],
    ["symbol-development-contrast", "definition", [["carey2009", "Chapter 1, pages 3-5 (PDF pages 14-16): conceptual repertoire, timescales and content assumptions", "supports"], ["carey2009", "Chapter 11, pages 413-415 (PDF pages 424-426): conceptual change and limits of social or contradiction accounts", "limits"], ["carey2011-precis", "Abstract and Introduction, page 113: initial repertoire, target system and learning mechanism", "supports"], ["carey2011-precis", "Sections 6.2-7, pages 119-120: expressive power and local incommensurability", "limits"]]],
    ["symbol-role-filler-binding", "hypothesis", [["dehaene2015-sequences", "Pages 14-15: proposed vector binding and recursive reuse", "provenance"], ["dehaene2015-sequences", "Page 15; Boxes 1-2: experimental ambiguity and model discrimination", "provenance"], ["dehaene2022-symbols", "Author proof pages 12-13: concluding hypotheses and unresolved neural implementation", "provenance"], ["alroumi2021", "Author-hosted in-press PDF, pages 10-11: model limitations, binding alternatives and absence of joint nested decoding", "provenance"]]],
    ["symbol-program-induction", "hypothesis", [["dehaene2022-symbols", "Author proof pages 2-4; Glossary and Figure 2: scoped symbols, programs and composition", "provenance"], ["dehaene2022-symbols", "Author proof pages 3-7; Figure 3: fixed-language description length and spatial sequences", "provenance"], ["dehaene2022-symbols", "Author proof pages 9-11; Figure 5: geometric primitives, program induction and model comparisons", "provenance"], ["dehaene2022-symbols", "Author proof pages 12-13: concluding hypotheses and unresolved neural implementation", "provenance"], ["pajot2026", "Results 2.2, pages 7-10; Figure 3: choice time, distractors and model combination", "provenance"], ["pajot2026", "Discussion, pages 13-16: training confounds, generation and neural interpretation", "provenance"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "provenance"], ["amalric2017", "Pages 20-24; Figure 7: prefix model, fitted noise, resource availability and identifiability", "provenance"], ["alroumi2021", "Author-hosted in-press PDF, pages 10-11: model limitations, binding alternatives and absence of joint nested decoding", "provenance"], ["wang2019", "Pages 253-254, Discussion: proposed nested representation, anatomical hierarchy and temporal-resolution limits", "provenance"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "provenance"]]],
    ["symbol-bootstrapping", "hypothesis", [["carey2009", "Chapter 1, pages 3-5 (PDF pages 14-16): conceptual repertoire, timescales and content assumptions", "provenance"], ["carey2009", "Chapter 11, pages 413-415 (PDF pages 424-426): conceptual change and limits of social or contradiction accounts", "provenance"], ["carey2011-precis", "Sections 6.2-7, pages 119-120: expressive power and local incommensurability", "provenance"], ["carey2011-precis", "Section 8, pages 120-122: placeholders, mapping, induction and bootstrapping examples", "provenance"]]]
  ]) {
    const hypothesis = kind === "hypothesis";
    const e = entities.get(`neur:${key}`), c = claims.get(`${hypothesis ? "C" : "D"}-${key}`);
    assert.equal(e.kind, kind, "A symbolic construct changed its scientific role");
    assert.equal(e.status, hypothesis ? "hypothesis" : "definition");
    assert.deepEqual(e.claimIds, [c.id]);
    assert.equal(c.status, hypothesis ? "unresolved" : "definition");
    assert.equal(c.contextIds, undefined, "A symbolic theory inherited an experimental preparation");
    assert.deepEqual(c.checkIds, [], "Source reading became independent model reproduction");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "A symbolic construct lost its definition or theoretical boundary");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "A taxonomy or program schematic acquired an unreviewed physical dependency");
  }
  for (const sid of ["aimone2014", "kempermann2015"]) {
    assert.equal(sources.get(sid).review.extent, "main-text-and-figures");
    assert.ok(!studies.has(sid), "Review synthesis became a primary preparation");
  }
  for (const [sid, doi, extent] of [
    ["renzel2013", "10.1002/glia.22505", "metadata-and-abstract-only"]
  ]) {
    assert.equal(sources.get(sid).doi, doi);
    assert.equal(sources.get(sid).review.extent, extent);
    assert.ok(!studies.has(sid), "Selected terminology check became a reviewed experiment");
  }
  for (const [key, passages] of [
    ["ng-stage-framework", [["kempermann2015", "Pages 3-5: Distinct Steps of Neuronal Development; Figure 1; The Precursor Cell Phase", "supports"], ["aimone2014", "II NSCs and the Neurogenic Niche: introduction and A-C", "limits"], ["kempermann2015", "Page 6: precursor receptor localization and DCX expression", "limits"], ["kempermann2015", "Page 9: Control of Neuronal Development, Sox2 classification", "limits"], ["suh2007", "Introduction, page 515: Sox2 HMG DNA-binding motif", "limits"], ["renzel2013", "Abstract: somatic membrane versus radial processes", "limits"], ["aimone2014", "IV.A Network Level Regulation: contrasting descriptions of Song et al. (reference 314)", "limits"], ["song2012", "Abstract, page 150: GABA, PV interneurons and RGL quiescence", "limits"]]],
    ["ng-pattern-separation", [["aimone2014", "V.A.1 What is pattern separation?", "supports"], ["aimone2014", "V Function of Neurogenesis: A-C; Figures 5-7", "limits"]]]
  ]) {
    const c = claims.get(`D-${key}`), e = entities.get(`neur:${key}`);
    assert.equal(c.status, "definition", "Review vocabulary became measured biology");
    assert.equal(c.kind, "review-finding");
    assert.equal(e.kind, "definition");
    assert.equal(e.status, "definition");
    assert.equal(c.contextIds, undefined, "Definition acquired an experimental preparation");
    assert.deepEqual(c.checkIds, [], "Reading became an independent biological witness");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages,
      "Staging or function terminology lost its source boundaries");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
      "Review scheme acquired an untested transition or functional edge");
  }
  for (const [key, sid, passages] of [
    ["ng-current-spikes", "vanpraag2002", [["vanpraag2002", "Figures 4-5 and Table 3; Methods: electrophysiology", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-perforant-input", "vanpraag2002", [["vanpraag2002", "Figures 4-5 and Table 3; Methods: electrophysiology", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-running-brdu", "vanpraag2002", [["vanpraag2002", "Methods: animals, running and BrdU labeling", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-marker-profile", "vanpraag2002", [["vanpraag2002", "Figures 1-2 and Table 1; Methods: retroviral labeling and immunohistochemistry", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-morphology-profile", "vanpraag2002", [["vanpraag2002", "Figure 3 and Table 2; Methods: morphology and electron microscopy", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-synaptic-contacts", "vanpraag2002", [["vanpraag2002", "Figure 3 and Table 2; Methods: morphology and electron microscopy", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-electrical-profile", "vanpraag2002", [["vanpraag2002", "Figures 4-5 and Table 3; Methods: electrophysiology", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["ng-labeled-population", "vanpraag2002", [["vanpraag2002", "Figures 4-5 and Table 3; Methods: electrophysiology", "supports"], ["vanpraag2002", "Methods: animals, running and BrdU labeling", "limits"]]],
    ["human-ng-annotation", "disouky2026", [["disouky2026", "Main pages 1264-1267; Extended Data Figure 1; Methods: annotation and trajectory inference", "supports"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "limits"]]],
    ["human-ng-cohort-census", "disouky2026", [["disouky2026", "Main pages 1264-1267 and Discussion page 1272", "supports"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "limits"], ["disouky2026-table1", "By ID number A1:O40; By diagnosis A1:O40", "supports"], ["disouky2026-table8", "metadata A1:B40; filter_counts A1:AN14; lib A1:C40", "supports"]]],
    ["human-ng-abundance", "disouky2026", [["disouky2026", "Extended Data Figure 4; Methods: differential abundance", "supports"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "limits"], ["disouky2026-table8", "diff rows 2-4: PCI/HA, AD/HA, SA/HA and SA/AD; README", "supports"]]],
    ["human-ng-sa-null", "disouky2026", [["disouky2026", "Extended Data Figure 4; Methods: differential abundance", "supports"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "limits"], ["disouky2026-table8", "diff: AB4/AE4, AJ4/AM4, P4/S4 and AN4/AQ4; README", "supports"]]],
    ["ng-memory-route", "disouky2026", [["disouky2026", "Discussion page 1272", "provenance"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "provenance"], ["vanpraag2002", "Figures 4-5 and Table 3; Methods: electrophysiology", "provenance"], ["aimone2014", "V Function of Neurogenesis: A-C; Figures 5-7", "provenance"], ["kempermann2015", "Pages 8-10: maturation, transcriptional control, regulation and functional interpretations", "provenance"], ["rakic1985", "Discussion, page 1055: developmental restriction and stable-neuron memory hypothesis", "provenance"], ["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "provenance"], ["toni2008-supplement", "Supplementary Figure 2; Supplementary Table 1", "provenance"], ["sahay2011", "Figure 2; Methods: Contextual fear conditioning and Contextual fear discrimination learning", "provenance"], ["sahay2011-supplement", "Supplementary Figures 14-15, pages 16-19", "provenance"], ["eriksson1998", "Discussion, pages 1315-1316: functional significance and lifespan interpretation", "provenance"], ["spalding2013", "Results and Discussion, pages 1223-1225: integrated model and functional interpretation; Figure 6", "provenance"], ["kornack1999", "Discussion: neuronal accumulation, replacement and functional significance", "provenance"], ["gould1999-primate", "Discussion: age, glucocorticoids, survival and learning interpretations", "provenance"], ["gould1999-learning", "Discussion, pages 262-263: survival, sensitive period, integration and memory hypotheses", "provenance"], ["eckenhoff1988", "Discussion, pages 2744-2746: precursor identity, detection limits and stable-neuron memory hypothesis", "provenance"]]],
    ["ng-regulatory-geometry", "disouky2026", [["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "provenance"], ["disouky2026", "Methods: Donor cohorts and tissues; nuclei isolation, sequencing, annotation, differential abundance and regulatory-network analyses", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Neurogenesis claim lost its assay or workbook locator");
    assert.deepEqual(c.checkIds, [], "Workbook census became independent biological validation");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Mouse and human preparations were pooled or dropped");
    }
  }
  for (const key of ["ng-marker-profile", "ng-morphology-profile", "ng-synaptic-contacts", "ng-electrical-profile", "ng-labeled-population", "human-ng-annotation", "human-ng-cohort-census", "human-ng-abundance", "human-ng-sa-null", "ng-memory-route", "ng-regulatory-geometry"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Neurogenesis observation, null or hypothesis acquired a causal edge");
  }
  for (const [sid, year, doi] of [["toni2008", 2008, "10.1038/nn.2156"], ["sahay2011", 2011, "10.1038/nature09817"]]) {
    assert.equal(sources.get(sid).year, year);
    assert.equal(sources.get(sid).doi, doi, "Neuronal output or behavior publication identity changed");
  }
  for (const [key, sid, passages] of [
    ["toni-light-spikes", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"], ["toni2008-supplement", "Supplementary Figure 2 and caption", "supports"]]],
    ["toni-target-psc", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"], ["toni2008-supplement", "Supplementary Table 1 and cell-classification methods", "supports"]]],
    ["toni-kyn-blockade", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"]]],
    ["toni-dcg-blockade", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"]]],
    ["toni-ca3-bouton-profile", "toni2008", [["toni2008", "Figures 1-3; Methods: Confocal analysis of mossy fiber boutons and Electron microscopy", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"], ["toni2008-supplement", "Supplementary Figure 1 and caption", "supports"]]],
    ["toni-hilar-bouton-null", "toni2008", [["toni2008", "Figures 1-3; Methods: Confocal analysis of mossy fiber boutons and Electron microscopy", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"]]],
    ["toni-bmi-response-profile", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"]]],
    ["toni-response-classification", "toni2008", [["toni2008", "Figures 4-5; Methods: Electrophysiology and Analysis of postsynaptic responses", "supports"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "limits"], ["toni2008-supplement", "Supplementary Figure 2; Supplementary Table 1", "supports"]]],
    ["toni-target-recruitment", "toni2008", [["toni2008", "Figures 1-3; Methods: Confocal analysis of mossy fiber boutons and Electron microscopy", "provenance"], ["toni2008", "Methods: Animals, Retroviral vectors and Statistics and data presentation", "provenance"], ["toni2008-supplement", "Supplementary Figure 1 and caption", "provenance"]]],
    ["bax-dcx-eightweek", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figures 1-4", "supports"]]],
    ["bax-brdu-retention", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 5a-c, page 5", "supports"]]],
    ["bax-weak-ltp", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 9: separate four-to-six-week comparison", "supports"]]],
    ["bax-context-discrimination", "sahay2011", [["sahay2011", "Figure 2; Methods: Contextual fear conditioning and Contextual fear discrimination learning", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 15: separate discrimination variants", "supports"]]],
    ["bax-running-exploration", "sahay2011", [["sahay2011", "Figures 3-4; Methods: Behavioural testing and Tests for anxiety-like and depression-like behaviors", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figures 20-21, pages 26-28", "supports"]]],
    ["irradiation-dcx", "sahay2011", [["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 14a-b, page 16", "supports"]]],
    ["bax-proliferation-null", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 3", "supports"]]],
    ["bax-dcx-fourweek-profile", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 4", "supports"]]],
    ["bax-bicuculline-ltp-null", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"]]],
    ["bax-context-recall-null", "sahay2011", [["sahay2011", "Figure 2; Methods: Contextual fear conditioning and Contextual fear discrimination learning", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 13", "supports"]]],
    ["bax-other-task-nulls", "sahay2011", [["sahay2011", "Figure 2; Methods: Contextual fear conditioning and Contextual fear discrimination learning", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figures 10-12 and 16-17", "supports"]]],
    ["bax-affect-nulls", "sahay2011", [["sahay2011", "Figures 3-4; Methods: Behavioural testing and Tests for anxiety-like and depression-like behaviors", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figures 18-19, pages 23-25", "supports"]]],
    ["bax-running-comparison-nulls", "sahay2011", [["sahay2011", "Figures 3-4; Methods: Behavioural testing and Tests for anxiety-like and depression-like behaviors", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 21, pages 27-28", "supports"]]],
    ["irradiation-discrimination-profile", "sahay2011", [["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 14c-g, pages 16-17", "supports"]]],
    ["bax-discrimination-variants", "sahay2011", [["sahay2011", "Figure 2; Methods: Contextual fear conditioning and Contextual fear discrimination learning", "supports"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "limits"], ["sahay2011-supplement", "Supplementary Figure 15, pages 18-19", "supports"]]],
    ["bax-count-mediation", "sahay2011", [["sahay2011", "Figure 1; Methods: Generation of mouse lines, Immunohistochemistry and confocal microscopy, and Electrophysiological recordings", "provenance"], ["sahay2011", "Methods: Generation of mouse lines, Focal x-irradiation of hippocampus, Behavioural testing and Statistical analysis", "provenance"], ["sahay2011-supplement", "Supplementary Figures 1-8 and 14-15", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Output or behavior claim lost its specific assay and supplement");
    assert.deepEqual(c.checkIds, [], "Publication reading became experimental reproduction");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Output physiology and behavioral preparations were pooled");
    }
  }
  for (const key of ["toni-ca3-bouton-profile", "toni-hilar-bouton-null", "toni-bmi-response-profile", "toni-response-classification", "bax-proliferation-null", "bax-dcx-fourweek-profile", "bax-bicuculline-ltp-null", "bax-context-recall-null", "bax-other-task-nulls", "bax-affect-nulls", "bax-running-comparison-nulls", "irradiation-discrimination-profile", "bax-discrimination-variants", "toni-target-recruitment", "bax-count-mediation"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "A route classification, null or mediation hypothesis acquired a causal edge");
  }
  assert.equal(sources.get("xu2009").year, 2009);
  assert.equal(sources.get("xu2009").doi, "10.1038/nature08389", "Motor remodeling publication identity changed");
  assert.equal(sources.get("xu2009-supplement").doi, null, "Supplement substituted for the primary publication");
  for (const [key, sid, passages] of [
    ["motor-young-turnover", "xu2009", [["xu2009", "Figure 2 and associated Results: adolescent turnover and relative total spine number", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: young mice, four-day control and training rows", "supports"]]],
    ["motor-novel-reaching-turnover", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: adult mice, four-day control and reaching-training rows", "supports"]]],
    ["motor-novel-capellini-turnover", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: adult mice, four-day control and capellini-training rows", "supports"]]],
    ["motor-cross-training-turnover", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: adult mice, four-day control and capellini-retraining rows", "supports"]]],
    ["motor-new-spine-retention", "xu2009", [["xu2009", "Figure 3 and associated Results: new and pre-existing spine survival", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Note 5 and Figure S3: separate classification intervals and learning phases", "limits"]]],
    ["motor-first-session-profile", "xu2009", [["xu2009", "Figure 1 and associated Results: first-session selection and controls", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: one-day rows and successful-reach selection footnote", "supports"]]],
    ["motor-region-controls", "xu2009", [["xu2009", "Figure 2 and associated Results: adolescent turnover and relative total spine number", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: young four-day regional and fail-to-learn rows; Supplementary Note 1", "supports"]]],
    ["motor-success-association", "xu2009", [["xu2009", "Figure 1 and associated Results: first-session selection and controls", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: first-day selection footnote; Supplementary Note 4", "limits"]]],
    ["motor-spine-population-balance", "xu2009", [["xu2009", "Figure 2 and associated Results: adolescent turnover and relative total spine number", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: young two-, four-, eight- and sixteen-day rows", "supports"]]],
    ["motor-retraining-null", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Table S1, page 12: adult four- and eight-day reaching-retraining and control rows", "supports"]]],
    ["motor-filopodia-null", "xu2009", [["xu2009", "Results: filopodial turnover and filopodium-to-spine conversion", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Figure S4, page 10: filopodia and pooled protrusions", "supports"]]],
    ["motor-maintenance-null", "xu2009", [["xu2009", "Figure 3 and associated Results: new and pre-existing spine survival", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Note 5, page 4; Figure S3, page 9", "supports"]]],
    ["motor-dendrite-tip-null", "xu2009", [["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Notes 2-3, pages 2-3: neuron sampling and dendritic branching", "supports"]]],
    ["motor-cross-spine-size-null", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Note 6, pages 4-5: calibrated spine-head diameter", "supports"]]],
    ["motor-functional-map", "xu2009", [["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "supports"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "limits"], ["xu2009-supplement", "Supplementary Note 1, pages 1-2; Figure S2, page 8", "supports"]]],
    ["motor-spine-memory", "xu2009", [["xu2009", "Figure 4 and associated Results: naive, retrained and cross-trained adults", "provenance"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "provenance"], ["xu2009-supplement", "Supplementary Note 6, pages 4-5: morphological measurement and direct-recording limit", "provenance"]]],
    ["motor-homeostatic-construction", "xu2009", [["xu2009", "Discussion: synaptic strength, memory interpretation and proposed homeostatic balance", "provenance"], ["xu2009", "Methods Summary: animals, imaging depth, repeated sessions, denominators and statistics", "provenance"], ["xu2009-supplement", "Table S1, page 12: interval-specific formation and elimination; Supplementary Note 1", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Motor remodeling claim lost its assay, denominator or reading boundary");
    assert.deepEqual(c.checkIds, [], "Published imaging became independently reproduced evidence");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Cortical imaging inherited an unrelated preparation");
    }
  }
  for (const key of ["motor-first-session-profile", "motor-region-controls", "motor-success-association", "motor-spine-population-balance", "motor-retraining-null", "motor-filopodia-null", "motor-maintenance-null", "motor-dendrite-tip-null", "motor-cross-spine-size-null", "motor-functional-map", "motor-spine-memory", "motor-homeostatic-construction"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Motor association, null or construction hypothesis acquired a causal edge");
  }
  assert.equal(sources.get("brown2007").year, 2007);
  assert.equal(sources.get("brown2007").doi, "10.1523/JNEUROSCI.4295-06.2007", "Injury remodeling publication identity changed");
  for (const [key, sid, passages] of [
    ["stroke-spine-formation-1w", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-spine-formation-2w", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-spine-formation-6w", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-spine-density-1w", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-vascular-fraction-6w", "brown2007", [["brown2007", "Results: Reorganization of apical dendrites and vasculature in peri-infarct cortex; Figure 3G-I", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-spine-elimination-null", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-density-late-null", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-near-far-profile", "brown2007", [["brown2007", "Results: near/far spine comparison; Figure 5", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-orientation-profile", "brown2007", [["brown2007", "Results: Reorganization of apical dendrites and vasculature in peri-infarct cortex; Figure 3G-I", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-capillary-velocity-null", "brown2007", [["brown2007", "Results: Reorganization of apical dendrites and vasculature in peri-infarct cortex; Figure 3G-I", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-optical-map", "brown2007", [["brown2007", "Results: lesion and sensory maps; Figures 1-2", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-imaging-controls", "brown2007", [["brown2007", "Results: Dendritic spine turnover in peri-infarct cortex; Figure 4D-E", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-infarct-profile", "brown2007", [["brown2007", "Results: lesion and sensory maps; Figures 1-2", "supports"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "limits"]]],
    ["stroke-remodeling-function", "brown2007", [["brown2007", "Discussion: functional recovery, mechanical deformation and photothrombotic-model limits", "provenance"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "provenance"]]],
    ["stroke-neurovascular-geometry", "brown2007", [["brown2007", "Discussion: functional recovery, mechanical deformation and photothrombotic-model limits", "provenance"], ["brown2007", "Materials and Methods: photothrombosis, acute imaging, scoring criteria and statistical analysis", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Injury remodeling lost its specific assay or protocol boundary");
    assert.deepEqual(c.checkIds, [], "Published injury imaging became independent reproduction");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Injury and learning preparations were conflated");
    }
  }
  for (const key of ["stroke-spine-elimination-null", "stroke-density-late-null", "stroke-near-far-profile", "stroke-orientation-profile", "stroke-capillary-velocity-null", "stroke-optical-map", "stroke-imaging-controls", "stroke-infarct-profile", "stroke-remodeling-function", "stroke-neurovascular-geometry"]) {
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "An injury null, spatial comparison or recovery hypothesis acquired a causal edge");
  }
  assert.equal(sources.get("eriksson1998").year, 1998);
  assert.equal(sources.get("eriksson1998").doi, "10.1038/3305", "Human birth-label publication identity changed");
  for (const [key, sid, passages] of [
    ["human-brdu-neuronal-colabels", "eriksson1998", [["eriksson1998", "Results: BrdU-labeled cells co-express neuronal markers; Figures 3-5", "supports"], ["eriksson1998", "Methods, pages 1316-1317: Autopsy material, Tissue preparation, Histology and Quantitation", "limits"]]],
    ["human-brdu-density-profile", "eriksson1998", [["eriksson1998", "Results: Cell genesis and survival; Figure 2", "supports"], ["eriksson1998", "Methods, pages 1316-1317: Autopsy material, Tissue preparation, Histology and Quantitation", "limits"]]],
    ["human-brdu-svz-profile", "eriksson1998", [["eriksson1998", "Results: BrdU labeling in the subventricular zone; Figure 1", "supports"], ["eriksson1998", "Methods, pages 1316-1317: Autopsy material, Tissue preparation, Histology and Quantitation", "limits"]]],
    ["human-brdu-staining-controls", "eriksson1998", [["eriksson1998", "Results: control patient and autofluorescence; Figures 3 and 5", "supports"], ["eriksson1998", "Methods, pages 1316-1317: Autopsy material, Tissue preparation, Histology and Quantitation", "limits"]]],
    ["human-brdu-functional-integration", "eriksson1998", [["eriksson1998", "Discussion, pages 1315-1316: functional significance and lifespan interpretation", "provenance"], ["eriksson1998", "Methods, pages 1316-1317: Autopsy material, Tissue preparation, Histology and Quantitation", "provenance"], ["spalding2013", "Results and Discussion, pages 1223-1225: integrated model and functional interpretation; Figure 6", "provenance"]]]
  ]) {
    const c = claims.get(`C-${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Human birth labeling lost its assay or sampling boundary");
    assert.deepEqual(c.checkIds, [], "Human histology reading became independent reproduction");
    if (passages[0][2] === "provenance") {
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined);
    } else {
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Human birth labels inherited a different preparation");
    }
    assert.ok(!graph.relations.some((r) => r.source === `neur:${key}` || r.target === `neur:${key}`),
      "Human histology or untested function acquired a causal edge");
  }
  assert.equal(sources.get("spalding2013").year, 2013);
  assert.equal(sources.get("spalding2013").doi, "10.1016/j.cell.2013.05.002", "Human radiocarbon publication identity changed");
  assert.equal(sources.get("spalding2013-supplement").doi, null, "Accepted supplement acquired a separate invented DOI");
  for (const [key, passages, status] of [
    ["human-radiocarbon-neuronal-dna", [["spalding2013", "Results, pages 1220-1222: retrospective dating and neuronal DNA; Figures 1 and 3", "supports"], ["spalding2013", "Experimental Procedures, pages 1225-1226: tissue collection, nuclei isolation, FACS, DNA purification, AMS and statistics", "limits"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 60-71: Table S1, sample metadata, isotope values, purity and carbon mass", "limits"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 45-52: Extended Experimental Procedures, model equations, sample selection and fitting criterion", "limits"]], "evidence-scoped"],
    ["human-radiocarbon-nonneuronal-dna", [["spalding2013", "Results, pages 1221-1222: nonneuronal DNA and heterogeneous cell populations; Figures 2 and 4", "supports"], ["spalding2013", "Experimental Procedures, pages 1225-1226: tissue collection, nuclei isolation, FACS, DNA purification, AMS and statistics", "limits"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 60-71: Table S1, sample metadata, isotope values, purity and carbon mass", "limits"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 45-52: Extended Experimental Procedures, model equations, sample selection and fitting criterion", "limits"]], "evidence-scoped"],
    ["human-radiocarbon-renewal-model", [["spalding2013", "Results, pages 1222-1224: renewing fractions and turnover estimates; Figures 4-5", "provenance"], ["spalding2013", "Experimental Procedures, pages 1225-1226: tissue collection, nuclei isolation, FACS, DNA purification, AMS and statistics", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 43-44: Tables S2-S3, global model fits", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 45-52: Extended Experimental Procedures, model equations, sample selection and fitting criterion", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 50-51: individual and paired turnover analyses", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 52-55: identifiability, MCMC bounds and model comparison", "provenance"]], "hypothesis"],
    ["human-radiocarbon-survival-model", [["spalding2013", "Results and Discussion, pages 1223-1225: integrated model and functional interpretation; Figure 6", "provenance"], ["spalding2013", "Experimental Procedures, pages 1225-1226: tissue collection, nuclei isolation, FACS, DNA purification, AMS and statistics", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 39-42 and 56-59: Figures S1-S4 and legends", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 45-52: Extended Experimental Procedures, model equations, sample selection and fitting criterion", "provenance"], ["spalding2013-supplement", "Accepted-manuscript compilation, PDF pages 52-55: identifiability, MCMC bounds and model comparison", "provenance"]], "hypothesis"]
  ]) {
    const c = claims.get(`C-${key}`);
    const e = entities.get(`neur:${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Radiocarbon evidence lost its measurement, model or sample-selection boundary");
    assert.equal(e.status, status);
    assert.deepEqual(c.checkIds, [], "Radiocarbon reading became numerical or biological reproduction");
    if (status === "hypothesis") {
      assert.equal(e.kind, "hypothesis");
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined, "Fitted renewal model became an observed biological process");
    } else {
      assert.equal(e.kind, "scoped-process");
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, ["spalding2013"], "Human isotope fractions inherited another assay");
    }
    assert.ok(!graph.relations.some((edge) => edge.source === e.id || edge.target === e.id),
      "Observational isotope data or a population model acquired a causal edge");
  }
  assert.equal(sources.get("kornack1999").year, 1999);
  assert.equal(sources.get("kornack1999").doi, "10.1073/pnas.96.10.5768", "Macaque birth-label publication identity changed");
  for (const [key, passages, status] of [
  [
    "macaque-brdu-regional-labeling",
    [
      [
        "kornack1999",
        "Results: Neural Progenitor Cells in the Macaque Dentate Gyrus; Figure 1",
        "supports"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "limits"
      ]
    ],
    "evidence-scoped"
  ],
  [
    "macaque-pcna-profiles",
    [
      [
        "kornack1999",
        "Results: Neural Progenitor Cells in the Macaque Dentate Gyrus; Figure 1",
        "supports"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "limits"
      ]
    ],
    "evidence-scoped"
  ],
  [
    "macaque-brdu-neuronal-colabels",
    [
      [
        "kornack1999",
        "Results: New Neurons; Figure 2",
        "supports"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "limits"
      ]
    ],
    "evidence-scoped"
  ],
  [
    "macaque-brdu-oligodendroglial-colabels",
    [
      [
        "kornack1999",
        "Results: New Glia; Figure 3",
        "supports"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "limits"
      ]
    ],
    "evidence-scoped"
  ],
  [
    "macaque-brdu-staining-controls",
    [
      [
        "kornack1999",
        "Materials and Methods: fluorescence reversal and primary-antibody omission; Figure 2c-d",
        "supports"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "limits"
      ]
    ],
    "evidence-scoped"
  ],
  [
    "macaque-neurogenesis-rate-model",
    [
      [
        "kornack1999",
        "Results: New Neurons, numerical extrapolation; Discussion: provisional rate and cross-species comparisons",
        "provenance"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "provenance"
      ]
    ],
    "hypothesis"
  ],
  [
    "macaque-multipotent-progenitor",
    [
      [
        "kornack1999",
        "Discussion: progenitor identity and migration interpretation",
        "provenance"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "provenance"
      ]
    ],
    "hypothesis"
  ],
  [
    "macaque-neuron-migration-model",
    [
      [
        "kornack1999",
        "Discussion: progenitor identity and migration interpretation",
        "provenance"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "provenance"
      ]
    ],
    "hypothesis"
  ],
  [
    "macaque-neuron-replacement-model",
    [
      [
        "kornack1999",
        "Discussion: neuronal accumulation, replacement and functional significance",
        "provenance"
      ],
      [
        "kornack1999",
        "Materials and Methods: BrdU Injections and Immunohistochemistry",
        "provenance"
      ]
    ],
    "hypothesis"
  ]
]) {
    const c = claims.get(`C-${key}`);
    const e = entities.get(`neur:${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Macaque birth labeling lost its assay, scope or interpretation boundary");
    assert.equal(e.status, status);
    assert.deepEqual(c.checkIds, [], "Macaque histology reading became independent reproduction");
    if (status === "hypothesis") {
      assert.equal(e.kind, "hypothesis");
      assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined, "Inferred macaque construction became an observed process");
    } else {
      assert.equal(e.kind, "scoped-process");
      assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, ["kornack1999"], "Macaque histology inherited another preparation");
    }
    assert.ok(!graph.relations.some((edge) => edge.source === e.id || edge.target === e.id),
      "Macaque marker observation or untested construction acquired a causal edge");
  }
  for (const [sid, doi] of [["gould1999-primate", "10.1073/pnas.96.9.5263"], ["gould1999-learning", "10.1038/6365"]]) {
    assert.equal(sources.get(sid).year, 1999);
    assert.equal(sources.get(sid).doi, doi, "Distinct Gould studies acquired the same publication identity");
  }
  for (const [key, sid, passages, status] of [
    ["primate-brdu-census", "gould1999-primate", [["gould1999-primate", "Results: regional BrdUrd profiles and short-survival age comparison; Table 1; Figure 1A-C", "supports"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "limits"]], "evidence-scoped"],
    ["primate-neuronal-colabels", "gould1999-primate", [["gould1999-primate", "Results: neuronal marker colabeling after multiple injections; Figure 1D-E", "supports"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "limits"]], "evidence-scoped"],
    ["primate-toad-age-profiles", "gould1999-primate", [["gould1999-primate", "Results: TOAD-64 age comparison; Table 2; Figure 1F", "supports"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "limits"]], "evidence-scoped"],
    ["primate-rms-profiles", "gould1999-primate", [["gould1999-primate", "Results and Discussion: putative rostral migratory stream; Figure 1B", "supports"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "limits"]], "evidence-scoped"],
    ["primate-aged-neuron-production", "gould1999-primate", [["gould1999-primate", "Results: TOAD-64 age comparison; Table 2; Figure 1F", "provenance"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "provenance"]], "hypothesis"],
    ["primate-glucocorticoid-aging", "gould1999-primate", [["gould1999-primate", "Discussion: age, glucocorticoids, survival and learning interpretations", "provenance"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "provenance"]], "hypothesis"],
    ["primate-olfactory-route", "gould1999-primate", [["gould1999-primate", "Results and Discussion: putative rostral migratory stream; Figure 1B", "provenance"], ["gould1999-primate", "Materials and Methods: Animal Treatments, Histological Procedures and Data Analysis; Table 1", "provenance"]], "hypothesis"],
    ["learning-trace-protocol", "gould1999-learning", [["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "supports"], ["gould1999-learning", "Results, pages 260-262; Figure 1a-b: pretraining labeling and trace conditioning", "limits"]], "evidence-scoped"],
    ["learning-trace-retained", "gould1999-learning", [["gould1999-learning", "Results, pages 260-262; Figure 1a-b: pretraining labeling and trace conditioning", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-trace-pyknosis", "gould1999-learning", [["gould1999-learning", "Results, page 262: pyknotic and BrdU-labeled pyknotic profiles", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-delay-null", "gould1999-learning", [["gould1999-learning", "Results, page 262; Figure 1c-d: delay conditioning and unpaired controls", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-late-label-null", "gould1999-learning", [["gould1999-learning", "Results, page 262; Figure 1g-h: labeling on the last training day", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-place-protocol", "gould1999-learning", [["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "supports"], ["gould1999-learning", "Results, pages 260-262; Figure 1e-f: place, cue and time-yoked swimming", "limits"]], "evidence-scoped"],
    ["learning-place-retained", "gould1999-learning", [["gould1999-learning", "Results, pages 260-262; Figure 1e-f: place, cue and time-yoked swimming", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-place-pyknosis", "gould1999-learning", [["gould1999-learning", "Results, page 262: pyknotic and BrdU-labeled pyknotic profiles", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-cue-null", "gould1999-learning", [["gould1999-learning", "Results, pages 260-262; Figure 1e-f: place, cue and time-yoked swimming", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-swim-null", "gould1999-learning", [["gould1999-learning", "Results, pages 260-262; Figure 1e-f: place, cue and time-yoked swimming", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-svz-null", "gould1999-learning", [["gould1999-learning", "Results, page 261: sampled SVZ counts", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-volume-null", "gould1999-learning", [["gould1999-learning", "Results, pages 261-262: granule-cell-layer volume", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-marker-profiles", "gould1999-learning", [["gould1999-learning", "Results, page 261; Figure 2: marker colabels and seven-day post-training retention", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-seven-day-retention", "gould1999-learning", [["gould1999-learning", "Results, page 261; Figure 2: marker colabels and seven-day post-training retention", "supports"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "limits"]], "evidence-scoped"],
    ["learning-survival-mechanism", "gould1999-learning", [["gould1999-learning", "Discussion, pages 262-263: survival, sensitive period, integration and memory hypotheses", "provenance"], ["gould1999-learning", "Methods, pages 263-264: animals, labeling, behavioral protocols, histology and stereology", "provenance"]], "hypothesis"]
  ]) {
    const c = claims.get(`C-${key}`), e = entities.get(`neur:${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Birth-label result lost its assay, timing or interpretation boundary");
    assert.equal(e.status, status);
    assert.deepEqual(c.checkIds, [], "Publication reading became independent reproduction");
    if (status === "hypothesis") {
      assert.equal(e.kind, "hypothesis"); assert.equal(c.status, "unresolved");
      assert.equal(c.contextIds, undefined, "Unresolved lineage or survival became a measured mechanism");
    } else {
      assert.equal(e.kind, key.endsWith("-protocol") ? "context" : "scoped-process"); assert.equal(c.status, "publication-supported");
      assert.deepEqual(c.contextIds, [sid], "Macaque observation and rat training preparations were pooled");
    }
    if (!effects.some(([, src, tgt]) => src === key || tgt === key)) {
      assert.ok(!graph.relations.some((edge) => edge.source === e.id || edge.target === e.id),
        "Marker observation, null or hypothesis acquired a causal edge");
    }
  }
  for (const [sid, year, doi] of [["rakic1985", 1985, "10.1126/science.3975601"], ["eckenhoff1988", 1988, "10.1523/JNEUROSCI.08-08-02729.1988"]]) {
    assert.equal(sources.get(sid).year, year, "Conference reprint changed publication identity");
    assert.equal(sources.get(sid).doi, doi);
    assert.equal(sources.get(sid).review.extent, "selected-full-text-passages");
  }
  for (const [key, sid, passages, status] of [
    ["rhesus-autoradiographic-neuronal-null", "rakic1985", [["rakic1985", "Results, pages 1054-1055: neuronal null, weak grains and dentate phenotyping", "supports"], ["rakic1985", "Methods, pages 1054-1055; Table 1: animals, injection dates, survival, sampling and labeling threshold", "limits"]], "evidence-scoped"],
    ["rhesus-glial-label-profiles", "rakic1985", [["rakic1985", "Results, page 1054; Figure 1D-E and Figure 2: glial and endothelial profiles", "supports"], ["rakic1985", "Methods, pages 1054-1055; Table 1: animals, injection dates, survival, sampling and labeling threshold", "limits"]], "evidence-scoped"],
    ["rhesus-labeling-positive-controls", "rakic1985", [["rakic1985", "Methods and Results, page 1054; Figure 1A-C: offspring and peripheral labeling controls", "supports"], ["rakic1985", "Methods, pages 1054-1055; Table 1: animals, injection dates, survival, sampling and labeling threshold", "limits"]], "evidence-scoped"],
    ["rhesus-juvenile-ambiguous-profiles", "rakic1985", [["rakic1985", "Results, page 1055: ambiguous juvenile caudate and dentate profiles", "supports"], ["rakic1985", "Methods, pages 1054-1055; Table 1: animals, injection dates, survival, sampling and labeling threshold", "limits"]], "evidence-scoped"],
    ["primate-developmental-cessation", "rakic1985", [["rakic1985", "Discussion, page 1055: developmental restriction and stable-neuron memory hypothesis", "provenance"], ["rakic1985", "Methods, pages 1054-1055; Table 1: animals, injection dates, survival, sampling and labeling threshold", "provenance"], ["eckenhoff1988", "Discussion, pages 2744-2746: precursor identity, detection limits and stable-neuron memory hypothesis", "provenance"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "provenance"]], "hypothesis"],
    ["dentate-developmental-labeling", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2731-2736; Figures 1-5: developmental labeling and neuronal phenotype", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-early-neuronal-profiles", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2731-2736; Figures 1-5: developmental labeling and neuronal phenotype", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-adult-neuronal-null", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2733-2739; Figure 6: juvenile and adult retained-label profiles", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-gfap-composition", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2736-2741; Figures 7-10: GFAP composition without birth-label selection", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-label-gfap-profiles", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2738-2739; Figures 4C-D, 5B and 6B-D: combined light-microscopic GFAP and autoradiography", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-label-ultrastructure", "eckenhoff1988", [["eckenhoff1988", "Results, pages 2739-2743; Figures 11-12: combined electron microscopy, GFAP and autoradiography", "supports"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "limits"]], "evidence-scoped"],
    ["dentate-committed-precursors", "eckenhoff1988", [["eckenhoff1988", "Discussion, pages 2744-2746: precursor identity, detection limits and stable-neuron memory hypothesis", "provenance"], ["eckenhoff1988", "Materials and Methods, pages 2729-2731; Table 1: animals, autoradiography, GFAP and electron microscopy", "provenance"]], "hypothesis"]
  ]) {
    const c = claims.get(`C-${key}`), e = entities.get(`neur:${key}`);
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Autoradiographic observation lost its age, phenotype or method boundary");
    assert.equal(e.status, status);
    assert.equal(e.kind, status === "hypothesis" ? "hypothesis" : "scoped-process");
    assert.deepEqual(c.checkIds, [], "Source reading became numerical reproduction");
    assert.equal(c.status, status === "hypothesis" ? "unresolved" : "publication-supported");
    assert.deepEqual(c.contextIds, status === "hypothesis" ? undefined : [sid],
      "Cessation interpretation or cross-study evidence became a single observed preparation");
    assert.ok(!graph.relations.some((edge) => edge.source === e.id || edge.target === e.id),
      "Autoradiographic null, phenotype or untested lineage acquired a causal edge");
  }

  // Behavioral task success, cohort comparisons and cognitive models are distinct.
  assert.equal(sources.get("amalric2017").doi, "10.1371/journal.pcbi.1005273");
  assert.equal(sources.get("amalric2017").year, 2017);
  assert.equal(sources.get("amalric2017").review.extent, "main-text-and-supplementary-figures");
  assert.equal(sources.get("amalric2017-syntax").doi, "10.1371/journal.pcbi.1005273.s007");
  assert.equal(sources.get("amalric2017-syntax").review.extent, "full-supplementary-text-and-figures");
  assert.ok(!studies.has("amalric2017-syntax"), "Formal syntax became another behavioral experiment");
  for (const [id, locators, organism, preparation] of [
  [
    "amalric2017-adults",
    [
      "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics",
      "Experiment 1, pages 8-12; Figures 2-3: adult continuation, boundary errors and reported complexity associations"
    ],
    "23 French adults with college-level education, ages 20-46; 12 female",
    "Experiment 1: mouse-click predictions on an eight-location octagon, starting with two shown locations and continuing through 16 positions with correction after errors. A repeat sequence is always first; subsequent blocks are randomized."
  ],
  [
    "amalric2017-children",
    [
      "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics",
      "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls"
    ],
    "24 French preschoolers, ages 5.33-6.29, mean 5.83 years",
    "Experiment 2: children point to animal locations and the experimenter clicks. Show five locations then predict three; after a break show three then predict five. Errors trigger correction. One exemplar per category except four axial-symmetry exemplars."
  ],
  [
    "amalric2017-preview",
    [
      "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics",
      "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls",
      "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2"
    ],
    "23 French preschoolers, ages 4.67-5.85, mean 5.41 years; a separate cohort from Experiment 2",
    "Experiment 3: the Experiment 2 task begins each block with two complete previews of its eight-location sequence. The comparison with Experiment 2 uses different children with a different age range; random allocation to preview conditions is not reported."
  ],
  [
    "amalric2017-munduruku",
    [
      "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics",
      "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls",
      "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2",
      "Experiment 4, pages 18-20; Figure 6: Munduruku participants, adapted task and sequence-specific results"
    ],
    "20 Munduruku volunteers in Wariri: 14 participants aged 10-14 and six adults aged 30-67",
    "Experiment 4: the shorter Experiment 3 task, including two full previews, collected during 2014 and 2015 field trips. Participants have limited access to schooling; this is not an age-, schooling- or task-matched comparison with the French college cohort."
  ]
]) {
    const study = studies.get(id);
    assert.equal(study.sourceId, "amalric2017");
    assert.equal(study.pmid, "28125595");
    assert.deepEqual(study.reviewedLocators, locators, "Spatial cohort lost its procedure or result");
    assert.equal(study.organism, organism, "Spatial sample or age range changed");
    assert.equal(study.preparation, preparation, "Feedback, task or preview allocation changed");
  }
  for (const [key, cid, kind, status, contexts, passages] of [
    ["spatial-adults-continuation", "C-spatial-adults-continuation", "scoped-process", "publication-supported", ["amalric2017-adults"], [["amalric2017", "Experiment 1, pages 8-12; Figures 2-3: adult continuation, boundary errors and reported complexity associations", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-adults-protocol", "C-spatial-adults-continuation", "context", "publication-supported", ["amalric2017-adults"], [["amalric2017", "Experiment 1, pages 8-12; Figures 2-3: adult continuation, boundary errors and reported complexity associations", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-children-continuation", "C-spatial-children-continuation", "scoped-process", "publication-supported", ["amalric2017-children"], [["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-children-protocol", "C-spatial-children-continuation", "context", "publication-supported", ["amalric2017-children"], [["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-preview-continuation", "C-spatial-preview-continuation", "scoped-process", "publication-supported", ["amalric2017-preview"], [["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "supports"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-preview-protocol", "C-spatial-preview-continuation", "context", "publication-supported", ["amalric2017-preview"], [["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "supports"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-munduruku-continuation", "C-spatial-munduruku-continuation", "scoped-process", "publication-supported", ["amalric2017-munduruku"], [["amalric2017", "Experiment 4, pages 18-20; Figure 6: Munduruku participants, adapted task and sequence-specific results", "supports"], ["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "limits"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-munduruku-protocol", "C-spatial-munduruku-continuation", "context", "publication-supported", ["amalric2017-munduruku"], [["amalric2017", "Experiment 4, pages 18-20; Figure 6: Munduruku participants, adapted task and sequence-specific results", "supports"], ["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "limits"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-adult-rectangle-null", "C-spatial-adult-rectangle-null", "scoped-process", "publication-supported", ["amalric2017-adults"], [["amalric2017", "Experiment 1, pages 8-12; Figures 2-3: adult continuation, boundary errors and reported complexity associations", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-child-complex-null", "C-spatial-child-complex-null", "scoped-process", "publication-supported", ["amalric2017-children"], [["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "supports"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-preview-complex-null", "C-spatial-preview-complex-null", "scoped-process", "publication-supported", ["amalric2017-preview"], [["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "supports"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-preview-benefit-null", "C-spatial-preview-benefit-null", "scoped-process", "literature-synthesis", ["amalric2017-children", "amalric2017-preview"], [["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "supports"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-munduruku-crosses-null", "C-spatial-munduruku-crosses-null", "scoped-process", "publication-supported", ["amalric2017-munduruku"], [["amalric2017", "Experiment 4, pages 18-20; Figure 6: Munduruku participants, adapted task and sequence-specific results", "supports"], ["amalric2017", "Experiment 3, pages 15-17; Figure 5: separate preschool cohort, two previews and comparison with Experiment 2", "limits"], ["amalric2017", "Experiment 2, pages 12-15; Figure 4: preschool participants, pointing task, positive contrasts and nulls", "limits"], ["amalric2017", "Pages 1-7; Figure 1: language, stimulus selection, adult participants, feedback procedure and statistics", "limits"]]],
    ["spatial-octagon-language", "D-spatial-octagon-language", "definition", "definition", null, [["amalric2017-syntax", "S1 Text, pages 1-2; Figure 1: octagon alphabet, primitive maps and three loop semantics", "supports"], ["amalric2017-syntax", "S1 Text, page 3: evaluated examples, program cost and fixed-input definition", "supports"], ["amalric2017-syntax", "S1 Text, page 4; Figure 2: example strings, listed programs and stated minimum costs", "limits"], ["amalric2017", "Pages 24-27: interpretation, memory and exposure alternatives, and limited geometric scope", "limits"], ["alroumi2021-supplement", "Supplemental information, page 2, Table S1: assigned sequence costs, listed descriptions and nesting labels", "limits"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"]]],
    ["spatial-resource-availability", "C-spatial-resource-availability", "hypothesis", "unresolved", null, [["amalric2017", "Pages 20-24; Figure 7: prefix model, fitted noise, resource availability and identifiability", "provenance"], ["amalric2017", "Supplementary Figures S4-S6; captions on pages 27-28: noise and resource-availability fits in children and Munduruku participants", "provenance"], ["amalric2017", "Pages 24-27: interpretation, memory and exposure alternatives, and limited geometric scope", "provenance"], ["amalric2017-syntax", "S1 Text, page 3: evaluated examples, program cost and fixed-input definition", "provenance"], ["amalric2017-syntax", "S1 Text, page 4; Figure 2: example strings, listed programs and stated minimum costs", "provenance"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind, "Spatial formal construct became a physical mechanism");
    assert.deepEqual(e.claimIds, [cid]);
    assert.equal(e.status, kind === "definition" ? "definition" : kind === "hypothesis" ? "hypothesis" : "evidence-scoped");
    assert.equal(c.status, status, "Spatial result changed its evidence status");
    assert.deepEqual(c.contextIds, contexts ?? undefined, "Spatial task cohorts were merged or exchanged");
    assert.deepEqual(c.checkIds, [], "Publication reading became independent behavioral or model reproduction");
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Spatial result lost its methods or formal interpretation boundary");
    if (!effects.some(([, src, tgt]) => src === key || tgt === key)) {
      assert.ok(!graph.relations.some((edge) => edge.source === e.id || edge.target === e.id),
        "Spatial null, cross-cohort comparison or model acquired a causal edge");
    }
  }

  // Task manipulation, decoder readout and a proposed neural program have different roles.
  assert.equal(sources.get("alroumi2021").doi, "10.1016/j.neuron.2021.06.009");
  assert.equal(sources.get("alroumi2021").review.extent, "main-text-and-methods-and-figures");
  assert.equal(sources.get("alroumi2021-supplement").review.extent, "full-supplementary-text-and-figures");
  assert.ok(!studies.has("alroumi2021-supplement"), "Supplement became an independent cohort");
  for (const [id, preparation] of [["alroumi2021-sequences", "The sequence part comes first: four runs of nine analyzed eight-location templates, with 12 successive repetitions per block at 433 ms SOA. Participants report recognition and detect a displaced item during repetition 11 or 12. Prior slower training repeats sequences until correct continuation; the later primitive and localizer blocks use the same participants."], ["alroumi2021-primitives", "The primitive part follows the sequence part in the same 20 adults: four runs of 12 conditions, each with 32 pairs, including 11 geometric rules and an unrelated-pair control. Items within a pair have 433 ms SOA; the inter-pair interval is reported as 1100 ms. Participants report rule recognition and detect late pair violations. The unpredictable-location localizer follows."]]) {
    const study = studies.get(id);
    assert.equal(study.sourceId, "alroumi2021");
    assert.equal(study.pmid, "34228961");
    assert.equal(study.organism, "20 adults with normal vision, nine men, mean age 24.6 years (SD 3.7); selected from 25 recruits by successful sequence training");
    assert.equal(study.preparation, preparation, "MEG task order or selected cohort changed");
    assert.ok(study.reviewedLocators.includes(sources.get("alroumi2021").review.locators[5]));
    assert.ok(study.reviewedLocators.includes(sources.get("alroumi2021").review.locators[6]));
  }
  for (const [key, cid, kind, contexts, passages] of [
    ["meg-sequence-behavior", "C-meg-sequence-behavior", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 1-4; Figures 1-2: sequence language, tasks and behavioral contrasts", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 2, Table S1: assigned sequence costs, listed descriptions and nesting labels", "limits"]]],
    ["meg-sequence-protocol", "C-meg-sequence-behavior", "context", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 1-4; Figures 1-2: sequence language, tasks and behavioral contrasts", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 2, Table S1: assigned sequence costs, listed descriptions and nesting labels", "limits"]]],
    ["meg-primitive-behavior", "C-meg-primitive-behavior", "scoped-process", ["alroumi2021-primitives"], [["alroumi2021", "Author-hosted in-press PDF, pages 1-4; Figures 1-2: sequence language, tasks and behavioral contrasts", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021-supplement", "Supplemental information, page 2, Table S1: assigned sequence costs, listed descriptions and nesting labels", "limits"]]],
    ["meg-primitive-protocol", "C-meg-primitive-behavior", "context", ["alroumi2021-primitives"], [["alroumi2021", "Author-hosted in-press PDF, pages 1-4; Figures 1-2: sequence language, tasks and behavioral contrasts", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021-supplement", "Supplemental information, page 2, Table S1: assigned sequence costs, listed descriptions and nesting labels", "limits"]]],
    ["meg-location-decoding", "C-meg-location-decoding", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 4-5; Figures 3-4 on pages 5-6: location decoding and anticipation", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 3, Figure S1: eye-tracking controls and unresolved microsaccades", "limits"], ["alroumi2021-supplement", "Supplemental information, page 9, Figure S7: sensor-subset decoding maps", "limits"]]],
    ["meg-sequence-anticipation", "C-meg-sequence-anticipation", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 4-5; Figures 3-4 on pages 5-6: location decoding and anticipation", "supports"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021-supplement", "Supplemental information, page 3, Figure S1: eye-tracking controls and unresolved microsaccades", "limits"]]],
    ["meg-primitive-pair-decoding", "C-meg-primitive-pair-decoding", "scoped-process", ["alroumi2021-primitives"], [["alroumi2021", "Author-hosted in-press PDF, pages 5-7; Figure 5: primitive decoding, matched visual pairs and transfer nulls", "supports"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 4, Figure S2: RSA predictors, block dependence and transfer nulls", "limits"], ["alroumi2021-supplement", "Supplemental information, page 9, Figure S7: sensor-subset decoding maps", "limits"]]],
    ["meg-sequence-primitive-decoding", "C-meg-sequence-primitive-decoding", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 5-7; Figure 5: primitive decoding, matched visual pairs and transfer nulls", "supports"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 4, Figure S2: RSA predictors, block dependence and transfer nulls", "limits"], ["alroumi2021-supplement", "Supplemental information, page 9, Figure S7: sensor-subset decoding maps", "limits"]]],
    ["meg-ordinal-grouping", "C-meg-ordinal-grouping", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 7-10; Figure 6 on page 9: ordinal grouping, generalization and temporal ambiguity", "supports"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, pages 5-6, Figures S3-S4: ordinal positions, fourth-position null and group-size transfer", "limits"], ["alroumi2021-supplement", "Supplemental information, pages 7-8, Figures S5-S6: pseudo-ordinal controls and distinct repeat/irregular spectra", "limits"]]],
    ["meg-constituent-null", "C-meg-constituent-null", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 4-5; Figures 3-4 on pages 5-6: location decoding and anticipation", "supports"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021", "Author-hosted in-press PDF, pages 10-11: model limitations, binding alternatives and absence of joint nested decoding", "limits"]]],
    ["meg-matched-sequence-null", "C-meg-matched-sequence-null", "scoped-process", ["alroumi2021-sequences"], [["alroumi2021", "Author-hosted in-press PDF, pages 5-7; Figure 5: primitive decoding, matched visual pairs and transfer nulls", "supports"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"]]],
    ["meg-primitive-transfer-null", "C-meg-primitive-transfer-null", "scoped-process", ["alroumi2021-sequences", "alroumi2021-primitives"], [["alroumi2021", "Author-hosted in-press PDF, pages 5-7; Figure 5: primitive decoding, matched visual pairs and transfer nulls", "supports"], ["alroumi2021", "Author-hosted in-press PDF, pages 10-11: model limitations, binding alternatives and absence of joint nested decoding", "limits"], ["alroumi2021", "STAR Methods, pages e1-e2: participant selection, training, task order, MEG acquisition and eye tracking", "limits"], ["alroumi2021", "STAR Methods, pages e3-e4: decoders, anticipation selection, smoothing, ordinal spectra, RSA and statistics", "limits"], ["alroumi2021-supplement", "Supplemental information, page 4, Figure S2: RSA predictors, block dependence and transfer nulls", "limits"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind);
    assert.equal(e.status, "evidence-scoped");
    assert.deepEqual(e.claimIds, [cid]);
    assert.equal(c.status, contexts.length > 1 ? "literature-synthesis" : "publication-supported");
    assert.deepEqual(c.contextIds, contexts, "MEG readout moved to a different task or cohort");
    assert.deepEqual(c.checkIds, [], "MEG reading became independent numerical reproduction");
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "MEG claim lost its assay, null or interpretation boundary");
    if (!effects.some(([, src, tgt]) => src === key || tgt === key)) {
      assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
        "MEG decoder or null result became a causal construction edge");
    }
  }

  // Gaze measures, neural correlations and a proposed code retain separate roles.
  assert.equal(sources.get("wang2019").doi, "10.1016/j.neuroimage.2018.10.061");
  assert.equal(sources.get("wang2019").year, 2019);
  assert.equal(sources.get("wang2019").review.extent, "main-text-and-methods-and-figures");
  assert.equal(sources.get("wang2019-supplement").review.extent, "full-supplementary-text-and-figures");
  assert.ok(!studies.has("wang2019-supplement"), "Supplement became an independent experiment");
  for (const [id, organism, preparation] of [["wang2019-behavior", "44 healthy adults, 29 women, reported mean age 26 years", "Forty-four adults follow a flashing target among eight octagon locations. Nine sequence categories are presented in randomized blocks, each eight-location sequence repeated four times without a pause: 1000 ms target display plus 150 ms interstimulus interval (1150 ms SOA). Six runs are reported; the four segment-axis variants are averaged in the behavioral summaries."], ["wang2019-scanner", "20 analyzed adults from 22 recruits; usable eye tracking for 12; localizer in the same 20", "Twenty adults complete the spatial saccade task during fMRI after two of 22 recruits cannot complete it. The scanner task adds one-point, two-point and four-point memory controls, yielding twelve categories and fifteen modeled conditions when segment axes are separate. Usable eye tracking is reported for twelve of the twenty; the other eight are video-monitored. The same twenty perform the independent six-minute language/calculation localizer. Imaging uses 3 T EPI, TR 2.4 s and 3 x 3 x 3 mm voxels; four to six runs per person and a separate forty-two-run statement require reconciliation."]]) {
    const study = studies.get(id);
    assert.equal(study.sourceId, "wang2019");
    assert.equal(study.pmid, "30449729");
    assert.equal(study.organism, organism, "Gaze subset or localizer cohort changed");
    assert.equal(study.preparation, preparation, "Spatial task or scanner subset changed");
    assert.ok(study.reviewedLocators.includes(sources.get("wang2019").review.locators[0]));
  }
  assert.equal(claims.get("D-spatial-gaze-index").statement, "For a nonzero target displacement, Wang et al. define anticipation index as gaze-to-current-target distance at target onset divided by previous-to-current-target distance. Zero means gaze at the upcoming target; gaze at the previous target gives one, although other gaze positions can also give one. Lower values indicate greater anticipation. This ratio is not the percentage of anticipatory movements and is not generally bounded above by one.", "Normalized gaze error was inverted or became a percentage");
  for (const [key, cid, kind, status, contexts, passages] of [
    ["spatial-gaze-index", "D-spatial-gaze-index", "definition", "definition", null, [["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "supports"], ["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019-supplement", "Supplement, pages 1-2, Figures S1-S2: nearest-target accuracy, reaction-time radius and distinct anticipation measures", "limits"], ["wang2019-supplement", "Supplement, page 3, Figure S3: scanner gaze outcomes, stationary control and second/third-level nulls", "limits"], ["dehaene2022-symbols", "Author proof pages 3-7; Figure 3: fixed-language description length and spatial sequences", "limits"]]],
    ["spatial-gaze-anticipation", "C-spatial-gaze-anticipation", "scoped-process", "publication-supported", ["wang2019-behavior"], [["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 1-2, Figures S1-S2: nearest-target accuracy, reaction-time radius and distinct anticipation measures", "limits"], ["wang2019-supplement", "Supplement, page 4, Figure S4: within-trial slope, learning groups and reported statistical pairs", "limits"]]],
    ["spatial-gaze-protocol", "C-spatial-gaze-anticipation", "context", "publication-supported", ["wang2019-behavior"], [["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 1-2, Figures S1-S2: nearest-target accuracy, reaction-time radius and distinct anticipation measures", "limits"], ["wang2019-supplement", "Supplement, page 4, Figure S4: within-trial slope, learning groups and reported statistical pairs", "limits"]]],
    ["spatial-gaze-boundaries", "C-spatial-gaze-boundaries", "scoped-process", "publication-supported", ["wang2019-behavior"], [["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 1-2, Figures S1-S2: nearest-target accuracy, reaction-time radius and distinct anticipation measures", "limits"], ["wang2019-supplement", "Supplement, page 4, Figure S4: within-trial slope, learning groups and reported statistical pairs", "limits"]]],
    ["spatial-gaze-deep-null", "C-spatial-gaze-deep-null", "scoped-process", "publication-supported", ["wang2019-behavior"], [["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, page 4, Figure S4: within-trial slope, learning groups and reported statistical pairs", "limits"]]],
    ["spatial-scanner-gaze", "C-spatial-scanner-gaze", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019-supplement", "Supplement, page 3, Figure S3: scanner gaze outcomes, stationary control and second/third-level nulls", "supports"], ["wang2019", "Pages 248-250; Figure 2: anticipation, assigned description cost, within-sequence boundaries and incomplete deep learning", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019", "Pages 250-252; Figure 4: behavior-derived nesting contrast, regional responses and memory-control nulls", "limits"], ["wang2019-supplement", "Supplement, pages 9-10, Statistical Analysis: GLM, smoothing, ROI selection and fixed contrast weights", "limits"]]],
    ["spatial-fmri-complexity", "C-spatial-fmri-complexity", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019", "Pages 250-251; Figure 3: complexity association, exclusive masks and saccade/memory controls", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 5-6, Figures S5-S6: distance, angle, memory contrasts and different threshold/masking procedures", "limits"], ["wang2019-supplement", "Supplement, page 8, Tables S1-S2: contrast-specific activation peaks and threshold wording", "limits"], ["wang2019-supplement", "Supplement, pages 9-10, Statistical Analysis: GLM, smoothing, ROI selection and fixed contrast weights", "limits"]]],
    ["spatial-fmri-nesting", "C-spatial-fmri-nesting", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019", "Pages 250-252; Figure 4: behavior-derived nesting contrast, regional responses and memory-control nulls", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, page 8, Tables S1-S2: contrast-specific activation peaks and threshold wording", "limits"], ["wang2019-supplement", "Supplement, pages 9-10, Statistical Analysis: GLM, smoothing, ROI selection and fixed contrast weights", "limits"], ["wang2019", "Pages 253-254, Discussion: proposed nested representation, anatomical hierarchy and temporal-resolution limits", "limits"]]],
    ["spatial-fmri-memory-controls", "C-spatial-fmri-memory-controls", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019", "Pages 250-252; Figure 4: behavior-derived nesting contrast, regional responses and memory-control nulls", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 9-10, Statistical Analysis: GLM, smoothing, ROI selection and fixed contrast weights", "limits"]]],
    ["spatial-fmri-localizer", "C-spatial-fmri-localizer", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019", "Pages 251-253; Figure 5: independent localizer, sentence/calculation contrasts and spatial-task responses", "supports"], ["wang2019", "Pages 246-248; Figure 1: cohorts, sequence templates, task timing, gaze acquisition and anticipation-index definition", "limits"], ["wang2019-supplement", "Supplement, pages 10-11: independent functional localizer and subject-specific language/mathematics ROIs", "limits"], ["wang2019", "Pages 253-254, Discussion: proposed nested representation, anatomical hierarchy and temporal-resolution limits", "limits"]]],
    ["spatial-fmri-patterns", "C-spatial-fmri-patterns", "scoped-process", "publication-supported", ["wang2019-scanner"], [["wang2019", "Page 253, section 3.5: multivoxel pattern similarity, learning groups and regional interaction results", "supports"], ["wang2019-supplement", "Supplement, page 7, Figure S7: normalized similarity across learning groups and regions", "supports"], ["wang2019-supplement", "Supplement, page 11, Representational similarity analysis: correlation distances, ROI selection and category membership", "limits"], ["wang2019-supplement", "Supplement, pages 9-10, Statistical Analysis: GLM, smoothing, ROI selection and fixed contrast weights", "limits"], ["wang2019", "Pages 253-254, Discussion: proposed nested representation, anatomical hierarchy and temporal-resolution limits", "limits"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind);
    assert.equal(e.status, kind === "definition" ? "definition" : "evidence-scoped");
    assert.deepEqual(e.claimIds, [cid]);
    assert.equal(c.status, status);
    assert.deepEqual(c.contextIds ?? null, contexts, "Spatial gaze and imaging samples were pooled");
    assert.deepEqual(c.checkIds, [], "Publication reading became numerical reproduction");
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Spatial result lost its measurement or interpretation boundary");
    if (!effects.some(([, src, tgt]) => src === key || tgt === key)) {
      assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
        "Spatial definition, neural correlation or null became a causal construction edge");
    }
  }

  // Binary task behavior, formal descriptions and neural readouts are distinct.
  assert.equal(sources.get("alroumi2023").doi, "10.7554/eLife.84376");
  assert.equal(sources.get("alroumi2023").year, 2023);
  assert.deepEqual(sources.get("alroumi2023").authors, ["Fosca Al Roumi", "Samuel Planton", "Liping Wang", "Stanislas Dehaene"]);
  for (const [id, organism, preparation] of [["alroumi2023-behavior", "23 adults, 11 men, mean age 26.1 years (SD 4.7); all included in behavioral summaries", "Twenty-three adults detect single-tone violations in ten 16-tone templates during fMRI. Tones last 50 ms with 250 ms SOA. Each template and its swapped A/B version has ten habituation sequences and eighteen test sequences, six containing a violation; button responses are required during test blocks. Twenty mini-sessions span five runs. Post-experimental visual bracketing allows repeated auditory re-exposure."], ["alroumi2023-fmri", "22 adults analyzed from the 23-person behavioral cohort after one motion exclusion; localizer in the same imaging sample", "Twenty-two of the 23 behavioral participants enter fMRI analysis after one motion exclusion. The ten-template button-response task uses 3 T EPI with TR 1.81 s; SPM12 models habituation, standard and deviant events. The same imaging participants perform an independent language/calculation localizer. Task-defined group search volumes and within-person A/B voxel selection are not completely independent."], ["alroumi2023-meg", "19 separate adults, 10 men, mean age 27.6 years (SD 4.7)", "Nineteen separate adults listen attentively to seven 16-tone templates with no online detection button. Tones last 50 ms with 250 ms SOA. Each template and swapped A/B version has ten habituation sequences and thirty-six test sequences, twenty-four containing a violation. Fourteen runs are planned; inspected code omits two runs for sub-03 and one for sub-07. General questions follow mini-sessions, and visual bracketing follows MEG."]]) {
    const study = studies.get(id);
    assert.equal(study.sourceId, "alroumi2023");
    assert.equal(study.pmid, "37910588");
    assert.equal(study.organism, organism, "Binary behavior, imaging and MEG cohorts were conflated");
    assert.equal(study.preparation, preparation, "Binary task or missing-run procedure changed");
    assert.deepEqual(study.reviewedLocators, sources.get("alroumi2023").review.locators);
  }
  for (const [id, kind, url, extent] of [["alroumi2023", "research-publication", "https://pmc.ncbi.nlm.nih.gov/articles/PMC10619979/", "main-text-and-methods-and-figures"], ["alroumi2023-sequences", "research-publication", "https://cdn.elifesciences.org/articles/84376/elife-84376-supp1-v2.docx", "full-supplementary-table"], ["alroumi2023-standard-table", "research-publication", "https://cdn.elifesciences.org/articles/84376/elife-84376-supp2-v2.docx", "full-supplementary-table"], ["alroumi2023-deviant-table", "research-publication", "https://cdn.elifesciences.org/articles/84376/elife-84376-supp3-v2.docx", "full-supplementary-table"], ["alroumi2023-reporting", "research-publication", "https://cdn.elifesciences.org/articles/84376/elife-84376-mdarchecklist1-v2.docx", "reporting-checklist-text"], ["alroumi2023-fmri-data", "research-dataset", "https://openneuro.org/datasets/ds004482/versions/1.0.0", "metadata-and-file-inventory"], ["alroumi2023-meg-data", "research-dataset", "https://openneuro.org/datasets/ds004483/versions/1.0.0", "metadata-and-file-inventory"], ["alroumi2023-meg-code", "research-software", "https://github.com/Fosca/Binary_Sequences/tree/9528a5a749f707861aff91eedc3fe9f05c806ca3", "selected-source-code"], ["alroumi2023-stimulus-code", "research-software", "https://github.com/sam-planton/ABseqfMRI_scripts/tree/ef5f4ea6e4433cfc83a817452a24b30ffe022cf2", "selected-source-code"]]) {
    const source = sources.get(id);
    assert.equal(source.kind, kind, "Supporting code or metadata became a primary experiment");
    assert.equal(source.url, url, "Reviewed binary source version changed");
    assert.equal(source.review.extent, extent, "Selected source reading became full reproduction");
    assert.ok(!studies.has(id), "Supporting material became an independent cohort");
  }
  for (const [key, cid, kind, status, contexts, passages] of [
    ["binary-sequence-language", "D-binary-sequence-language", "definition", "definition", null, [["alroumi2023", "Pages 3-5; Figure 1: binary templates, repetition language, constrained description cost and sequence selection", "supports"], ["alroumi2023-sequences", "Supplementary file 1: complete embedded table of ten binary sequences, formal descriptions and verbal programs", "supports"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"], ["alroumi2023-meg-code", "Commit 9528a5a749f707861aff91eedc3fe9f05c806ca3: README; config.py lines 1-68; functions/SVM_funcs.py lines 1-215", "limits"], ["alroumi2023-stimulus-code", "Commit ef5f4ea6e4433cfc83a817452a24b30ffe022cf2: README and complete ExperimentScripts_&_Stimuli/utils/sequences_and_violations_list.m", "limits"]]],
    ["binary-detection", "C-binary-detection", "scoped-process", "publication-supported", ["alroumi2023-behavior"], [["alroumi2023", "Pages 6-8; Figure 2 and its supplements 1-2: detection, model comparison and post-experimental bracketing", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023-reporting", "MDAR checklist: human participants, sample-size planning, allocation, exclusions and availability statements", "limits"], ["alroumi2023-fmri-data", "OpenNeuro ds004482 1.0.0: README, dataset_description.json, participants.tsv and recursive file inventory at Git commit a3334164854a1afad2c4939115110f9e9dc37df7", "limits"]]],
    ["binary-detection-protocol", "C-binary-detection", "context", "publication-supported", ["alroumi2023-behavior"], [["alroumi2023", "Pages 6-8; Figure 2 and its supplements 1-2: detection, model comparison and post-experimental bracketing", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023-reporting", "MDAR checklist: human participants, sample-size planning, allocation, exclusions and availability statements", "limits"], ["alroumi2023-fmri-data", "OpenNeuro ds004482 1.0.0: README, dataset_description.json, participants.tsv and recursive file inventory at Git commit a3334164854a1afad2c4939115110f9e9dc37df7", "limits"]]],
    ["binary-description-fit", "C-binary-description-fit", "scoped-process", "publication-supported", ["alroumi2023-behavior"], [["alroumi2023", "Pages 6-8; Figure 2 and its supplements 1-2: detection, model comparison and post-experimental bracketing", "supports"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"], ["alroumi2023-sequences", "Supplementary file 1: complete embedded table of ten binary sequences, formal descriptions and verbal programs", "limits"]]],
    ["binary-bracketing", "C-binary-bracketing", "scoped-process", "literature-synthesis", ["alroumi2023-behavior", "alroumi2023-meg"], [["alroumi2023", "Pages 6-8; Figure 2 and its supplements 1-2: detection, model comparison and post-experimental bracketing", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023-sequences", "Supplementary file 1: complete embedded table of ten binary sequences, formal descriptions and verbal programs", "limits"]]],
    ["binary-alternate-bracketing-null", "C-binary-alternate-bracketing-null", "scoped-process", "literature-synthesis", ["alroumi2023-behavior", "alroumi2023-meg"], [["alroumi2023", "Pages 6-8; Figure 2 and its supplements 1-2: detection, model comparison and post-experimental bracketing", "supports"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023-sequences", "Supplementary file 1: complete embedded table of ten binary sequences, formal descriptions and verbal programs", "limits"]]],
    ["binary-fmri-habituation", "C-binary-fmri-habituation", "scoped-process", "publication-supported", ["alroumi2023-fmri"], [["alroumi2023", "Pages 8-12; Figures 3-4, Table 1 and Figure 3 supplement 1: habituation, standards, deviants and hit-only fMRI contrasts", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023-reporting", "MDAR checklist: human participants, sample-size planning, allocation, exclusions and availability statements", "limits"], ["alroumi2023-fmri-data", "OpenNeuro ds004482 1.0.0: README, dataset_description.json, participants.tsv and recursive file inventory at Git commit a3334164854a1afad2c4939115110f9e9dc37df7", "limits"]]],
    ["binary-fmri-standards", "C-binary-fmri-standards", "scoped-process", "publication-supported", ["alroumi2023-fmri"], [["alroumi2023", "Pages 8-12; Figures 3-4, Table 1 and Figure 3 supplement 1: habituation, standards, deviants and hit-only fMRI contrasts", "supports"], ["alroumi2023-standard-table", "Supplementary file 2: complete positive and negative standard-trial peak tables and threshold caption", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"]]],
    ["binary-fmri-deviants", "C-binary-fmri-deviants", "scoped-process", "publication-supported", ["alroumi2023-fmri"], [["alroumi2023", "Pages 8-12; Figures 3-4, Table 1 and Figure 3 supplement 1: habituation, standards, deviants and hit-only fMRI contrasts", "supports"], ["alroumi2023-deviant-table", "Supplementary file 3: complete all-deviant and correctly detected-deviant peak tables and threshold caption", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"]]],
    ["binary-fmri-hit-controls", "C-binary-fmri-hit-controls", "scoped-process", "publication-supported", ["alroumi2023-fmri"], [["alroumi2023", "Pages 8-12; Figures 3-4, Table 1 and Figure 3 supplement 1: habituation, standards, deviants and hit-only fMRI contrasts", "supports"], ["alroumi2023-deviant-table", "Supplementary file 3: complete all-deviant and correctly detected-deviant peak tables and threshold caption", "supports"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"]]],
    ["binary-fmri-localizer", "C-binary-fmri-localizer", "scoped-process", "publication-supported", ["alroumi2023-fmri"], [["alroumi2023", "Pages 12-14; Figure 5: independent mathematics/language localizer and regional exceptions", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 25-27, Materials and methods: fMRI preprocessing, GLMs, ROI selection, localizer and behavioral analyses", "limits"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"]]],
    ["binary-meg-field-power", "C-binary-meg-field-power", "scoped-process", "publication-supported", ["alroumi2023-meg"], [["alroumi2023", "Pages 14-16; Figure 6 and its supplements 1-4: MEG field power, sensor regressions and transition-statistics controls", "supports"], ["alroumi2023", "Pages 23-25, Materials and methods: participants, different fMRI/MEG tasks, bracketing and acquisition", "limits"], ["alroumi2023", "Pages 27-29, Materials and methods: MEG preprocessing, source estimates, transition regressors and twofold decoding", "limits"], ["alroumi2023-meg-data", "OpenNeuro ds004483 1.0.0: README, dataset_description.json, participants.tsv and recursive file inventory at Git commit 28bf34182e3d90bedcb80e9d05859d08730aa1c4", "limits"], ["alroumi2023-meg-code", "Commit 9528a5a749f707861aff91eedc3fe9f05c806ca3: README; config.py lines 1-68; functions/SVM_funcs.py lines 1-215", "limits"]]],
    ["binary-meg-transition-controls", "C-binary-meg-transition-controls", "scoped-process", "publication-supported", ["alroumi2023-meg"], [["alroumi2023", "Pages 14-16; Figure 6 and its supplements 1-4: MEG field power, sensor regressions and transition-statistics controls", "supports"], ["alroumi2023", "Pages 27-29, Materials and methods: MEG preprocessing, source estimates, transition regressors and twofold decoding", "limits"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"]]],
    ["binary-meg-decoding", "C-binary-meg-decoding", "scoped-process", "publication-supported", ["alroumi2023-meg"], [["alroumi2023", "Pages 16-19; Figures 7-8: violation decoding, decision-vector projections, temporal transfer and position-specific nulls", "supports"], ["alroumi2023", "Pages 27-29, Materials and methods: MEG preprocessing, source estimates, transition regressors and twofold decoding", "limits"], ["alroumi2023-meg-code", "Commit 9528a5a749f707861aff91eedc3fe9f05c806ca3: README; config.py lines 1-68; functions/SVM_funcs.py lines 1-215", "limits"], ["alroumi2023-meg-data", "OpenNeuro ds004483 1.0.0: README, dataset_description.json, participants.tsv and recursive file inventory at Git commit 28bf34182e3d90bedcb80e9d05859d08730aa1c4", "limits"]]],
    ["binary-meg-position-response", "C-binary-meg-position-response", "scoped-process", "publication-supported", ["alroumi2023-meg"], [["alroumi2023", "Pages 16-19; Figures 7-8: violation decoding, decision-vector projections, temporal transfer and position-specific nulls", "supports"], ["alroumi2023", "Pages 19-23, Discussion: compression alternatives, bracketing exception, regional interpretation and predictive-coding proposal", "limits"], ["alroumi2023", "Pages 27-29, Materials and methods: MEG preprocessing, source estimates, transition regressors and twofold decoding", "limits"], ["alroumi2023-stimulus-code", "Commit ef5f4ea6e4433cfc83a817452a24b30ffe022cf2: README and complete ExperimentScripts_&_Stimuli/utils/sequences_and_violations_list.m", "limits"], ["alroumi2023-meg-code", "Commit 9528a5a749f707861aff91eedc3fe9f05c806ca3: README; config.py lines 1-68; functions/SVM_funcs.py lines 1-215", "limits"]]]
  ]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind);
    assert.equal(e.status, kind === "definition" ? "definition" : "evidence-scoped");
    assert.deepEqual(e.claimIds, [cid]);
    assert.equal(c.status, status);
    assert.deepEqual(c.contextIds ?? null, contexts, "Binary assay or pooled sample changed");
    assert.deepEqual(c.checkIds, [], "Binary publication reading became numerical reproduction");
    assert.deepEqual(c.citations.map((x) => [x.sourceId, x.locator, x.role]), passages,
      "Binary result lost its protocol, code or interpretation boundary");
    if (!effects.some(([, src, tgt]) => src === key || tgt === key)) {
      assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id),
        "Binary model, association, decoder or null became a causal construction edge");
    }
  }


  for (const [id, organism, preparation] of [["pajot2026-quadrilaterals", "45 neural model configurations; reused adult behavior, published N=330, deposited N=342", "Eleven quadrilateral types have 36 scale/rotation variants each. Reused adults perform 110 ordered-pair oddball trials with eight same-type items and one intruder. Behavioral dissimilarity symmetrizes mean success divided by mean response time. Model comparison uses 55 unordered off-diagonal pairs. RDMs_avgdist averages 1296 cross-instance distances per shape pair; RDMs instead measures distance between averaged embeddings. All available layers of 45 configurations were checked against both branches."], ["pajot2026-memory", "45 neural model configurations; reused behavior from 125 adults", "Sixty-eight program-generated shapes have assigned costs from 1 to 12. Participants encode a target, wait through a two-second blank and choose among six images. Deposited data contain 125 people, 9250 task rows and 8500 nontraining rows matched to metadata, 125 per target. Five distractors enter each inverse-distance sum. Target-mean choice time is residualized against grey level, or eight specified controls; self-paced encoding time is a separate unmodeled endpoint."], ["pajot2026-cross-format", "43 neural model configurations; no measured human cross-format matching sample", "Twenty-four named objects appear as photographs, line drawings and geometric sketches. Deposited matrices contain a fourth word format, which is excluded from the scored 72-image subset. Each of six directed image-format pairs supplies 24 correct-object ranks among 24 targets, totaling 144 queries per layer. The perfect mean rank of one is stipulated. A separate ten-person naming screen above 90 percent is not a measured matching benchmark."]]) {
    assert.equal(studies.get(id).organism, organism, "Computational comparison acquired another sample");
    assert.equal(studies.get(id).preparation, preparation, "Computational protocol or benchmark changed");
  }
  for (const [key, cid, kind, status, contextIds, passages] of [["geom-quadrilateral-rdm", "C-geom-quadrilateral-rdm", "scoped-process", "publication-supported", ["pajot2026-quadrilaterals"], [["pajot2026", "Results 2.1, pages 4-7; Figure 2: quadrilateral dissimilarity and layer selection", "supports"], ["pajot2026", "Materials and methods, pages 16-18: behavioral cohorts, feature baseline and drawing-language cost", "limits"], ["pajot2026-metrics", "Cosine and correlation distance comparisons in the quadrilateral task", "limits"], ["pajot2026-correlations", "Pearson versus Spearman model correlations in the quadrilateral task", "limits"], ["pajot2026-layers", "Reported best layers in the three model comparisons", "limits"], ["pajot2026-data", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: 1_quadrilaterals RDMs, RDMs_avgdist, behavioral_data and all_cors.csv; 2_shape_LoT RDMs, language_shapes, metadata and all_cors.csv; 3_abstract_drawings RDMs and all_cors.csv", "supports"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-quadrilateral-symbolic-null", "C-geom-quadrilateral-symbolic-null", "scoped-process", "publication-supported", ["pajot2026-quadrilaterals"], [["pajot2026", "Results 2.1, pages 4-7; Figure 2: quadrilateral dissimilarity and layer selection", "supports"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-code", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: README, get_model.py, all three make_RDMs.py files; quadrilateral analysis RDM selection and OLS; shape-memory analysis cells 13 and 27; cross-format rank and theoretical-RDM cells", "limits"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-shape-memory-fit", "C-geom-shape-memory-fit", "scoped-process", "publication-supported", ["pajot2026-memory"], [["pajot2026", "Results 2.2, pages 7-10; Figure 3: choice time, distractors and model combination", "supports"], ["pajot2026", "Materials and methods, pages 16-18: behavioral cohorts, feature baseline and drawing-language cost", "limits"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-controls", "Shape-memory correlations after eight specified image controls", "limits"], ["pajot2026-data", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: 1_quadrilaterals RDMs, RDMs_avgdist, behavioral_data and all_cors.csv; 2_shape_LoT RDMs, language_shapes, metadata and all_cors.csv; 3_abstract_drawings RDMs and all_cors.csv", "supports"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-shape-memory-joint", "C-geom-shape-memory-joint", "scoped-process", "publication-supported", ["pajot2026-memory"], [["pajot2026", "Results 2.2, pages 7-10; Figure 3: choice time, distractors and model combination", "supports"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-code", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: README, get_model.py, all three make_RDMs.py files; quadrilateral analysis RDM selection and OLS; shape-memory analysis cells 13 and 27; cross-format rank and theoretical-RDM cells", "limits"], ["pajot2026-data", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: 1_quadrilaterals RDMs, RDMs_avgdist, behavioral_data and all_cors.csv; 2_shape_LoT RDMs, language_shapes, metadata and all_cors.csv; 3_abstract_drawings RDMs and all_cors.csv", "supports"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-cross-format-rank", "C-geom-cross-format-rank", "scoped-process", "publication-supported", ["pajot2026-cross-format"], [["pajot2026", "Results 2.3, pages 10-12; Figure 4: cross-format ranks and theoretical identity matrix", "supports"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-layers", "Reported best layers in the three model comparisons", "limits"], ["pajot2026-data", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: 1_quadrilaterals RDMs, RDMs_avgdist, behavioral_data and all_cors.csv; 2_shape_LoT RDMs, language_shapes, metadata and all_cors.csv; 3_abstract_drawings RDMs and all_cors.csv", "supports"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-comparison-noise-ceiling", "C-geom-comparison-noise-ceiling", "scoped-process", "literature-synthesis", ["pajot2026-quadrilaterals", "pajot2026-memory"], [["pajot2026", "Results 2.1, pages 4-7; Figure 2: quadrilateral dissimilarity and layer selection", "supports"], ["pajot2026", "Results 2.2, pages 7-10; Figure 3: choice time, distractors and model combination", "supports"], ["pajot2026-noise", "Entire one-page supplement: participant split-half and leave-one-subject-out estimates", "supports"], ["pajot2026-code", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: README, get_model.py, all three make_RDMs.py files; quadrilateral analysis RDM selection and OLS; shape-memory analysis cells 13 and 27; cross-format rank and theoretical-RDM cells", "limits"]]], ["geom-training-associations", "C-geom-training-associations", "scoped-process", "literature-synthesis", ["pajot2026-quadrilaterals", "pajot2026-memory", "pajot2026-cross-format"], [["pajot2026", "Results 2.1, pages 4-7; Figure 2: quadrilateral dissimilarity and layer selection", "supports"], ["pajot2026", "Results 2.2, pages 7-10; Figure 3: choice time, distractors and model combination", "supports"], ["pajot2026", "Results 2.3, pages 10-12; Figure 4: cross-format ranks and theoretical identity matrix", "supports"], ["pajot2026", "Discussion, pages 13-16: training confounds, generation and neural interpretation", "limits"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-models", "Architecture, training method, dataset, parameter count and dataset size for 45 models", "limits"], ["pajot2026-code", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: README, get_model.py, all three make_RDMs.py files; quadrilateral analysis RDM selection and OLS; shape-memory analysis cells 13 and 27; cross-format rank and theoretical-RDM cells", "limits"]]], ["geom-identity-benchmark", "D-geom-identity-benchmark", "definition", "definition", null, [["pajot2026", "Results 2.3, pages 10-12; Figure 4: cross-format ranks and theoretical identity matrix", "supports"], ["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "limits"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]], ["geom-distraction-score", "D-geom-distraction-score", "definition", "definition", null, [["pajot2026", "Materials and methods, pages 18-20: cumulative distraction, recognizability, models and validation folds", "supports"], ["pajot2026-code", "Commit 204a4d6daa3b09df416aaa78d67d80772b2615f0: README, get_model.py, all three make_RDMs.py files; quadrilateral analysis RDM selection and OLS; shape-memory analysis cells 13 and 27; cross-format rank and theoretical-RDM cells", "supports"], ["pajot2026-selected-data", "Complete pajot2026-model-check.json: 55 quadrilateral pairs, 68 shape targets and 144 directed cross-format queries", "supports"]]]]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind); assert.deepEqual(e.claimIds, [cid]);
    assert.equal(c.status, status); assert.deepEqual(c.contextIds, contextIds ?? undefined);
    assert.deepEqual(c.checkIds, [], "Deposited numeric readouts became a physical construction witness");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages, "Geometric comparison lost its data or selection boundary");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id), "Model fit acquired an untested physical dependency");
  }
  assert.equal(sources.get("pajot2026-metrics").kind, "research-publication");
  assert.equal(sources.get("pajot2026-metrics").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-correlations").kind, "research-publication");
  assert.equal(sources.get("pajot2026-correlations").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-controls").kind, "research-publication");
  assert.equal(sources.get("pajot2026-controls").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-models").kind, "research-publication");
  assert.equal(sources.get("pajot2026-models").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-layers").kind, "research-publication");
  assert.equal(sources.get("pajot2026-layers").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-noise").kind, "research-publication");
  assert.equal(sources.get("pajot2026-noise").review.extent, "complete-supplement");
  assert.equal(sources.get("pajot2026-code").kind, "research-software");
  assert.equal(sources.get("pajot2026-code").review.extent, "selected-source-code");
  assert.equal(sources.get("pajot2026-data").kind, "research-dataset");
  assert.equal(sources.get("pajot2026-data").review.extent, "selected-numerical-recomputation");
  assert.equal(sources.get("pajot2026-selected-data").kind, "research-dataset");
  assert.equal(sources.get("pajot2026-selected-data").review.extent, "selected-numerical-recomputation");

  for (const [id, organism, preparation] of [["gallese1996-f5", "Two Macaca nemestrina; 532 recorded F5 neurons", "Single-unit F5 recordings during observed experimenter actions and monkey execution. Hand-object interactions, object-only presentation, tool actions and pantomime are compared. Fourteen mirror neurons were formally tested during execution in light and darkness; other tests use different subsets."], ["gallese1996-emg", "Macaque study; separate EMG sessions with unspecified animal-level allocation", "Surface EMG in sessions devoted to control testing, using the same behavioral procedures as the unit sessions. Three hand muscles and orbicularis oris were monitored; Figure 11 shows six successive trials."], ["gallese1996-f1", "Macaque study; 49 F1 hand-field neurons with unspecified animal-level allocation", "Separate single-unit control recordings from the hand field of primary motor cortex F1 while the monkey observes experimenter actions."]]) {
    assert.equal(studies.get(id).organism, organism, "Mirror assay sample changed");
    assert.equal(studies.get(id).preparation, preparation, "Separate motor controls became simultaneous recordings");
  }
  for (const [key, cid, kind, status, contextIds, passages] of [["mirror-f5-responses", "C-mirror-f5-responses", "scoped-process", "publication-supported", ["gallese1996-f5"], [["gallese1996", "Pages 593 and 595-598; Table 1 and Figure 1: F5 action responses and observation-only units", "supports"], ["gallese1996", "Pages 594-595: animals, behavioral testing, unit recording, EMG and histological methods", "method"], ["gallese1996", "Page 604; Figure 12: MK8 histology and MK9 functional localization", "limits"]]], ["mirror-visual-only", "C-mirror-visual-only", "scoped-process", "publication-supported", ["gallese1996-f5"], [["gallese1996", "Pages 593 and 595-598; Table 1 and Figure 1: F5 action responses and observation-only units", "supports"], ["gallese1996", "Pages 600-603; Tables 2-3 and Figures 8-10: light/dark control and visuomotor congruence", "limits"]]], ["mirror-visuomotor-congruence", "C-mirror-visuomotor-congruence", "scoped-process", "publication-supported", ["gallese1996-f5"], [["gallese1996", "Pages 600-603; Tables 2-3 and Figures 8-10: light/dark control and visuomotor congruence", "supports"], ["gallese1996", "Pages 604-607: action selectivity, alternative interpretations and proposed recognition function", "limits"]]], ["mirror-dark-execution", "C-mirror-dark-execution", "scoped-process", "publication-supported", ["gallese1996-f5"], [["gallese1996", "Pages 600-603; Tables 2-3 and Figures 8-10: light/dark control and visuomotor congruence", "supports"], ["gallese1996", "Pages 594-595: animals, behavioral testing, unit recording, EMG and histological methods", "method"]]], ["mirror-emg-control", "C-mirror-emg-control", "scoped-process", "publication-supported", ["gallese1996-emg"], [["gallese1996", "Pages 603-604; Figure 11: separate EMG sessions and F1 unit control", "supports"], ["gallese1996", "Pages 594-595: animals, behavioral testing, unit recording, EMG and histological methods", "method"]]], ["mirror-f1-control", "C-mirror-f1-control", "scoped-process", "publication-supported", ["gallese1996-f1"], [["gallese1996", "Pages 603-604; Figure 11: separate EMG sessions and F1 unit control", "supports"], ["gallese1996", "Page 604; Figure 12: MK8 histology and MK9 functional localization", "limits"]]], ["mirror-recognition-mechanism", "C-mirror-recognition-mechanism", "hypothesis", "unresolved", null, [["gallese1996", "Pages 604-607: action selectivity, alternative interpretations and proposed recognition function", "provenance"], ["rizzolatti2004", "Pages 170-174: mirror response criteria, monkey preparations and proposed action understanding", "provenance"], ["rizzolatti2004", "Pages 174-180: human recording proxies, homology and stimulus dependence", "provenance"], ["rizzolatti2004", "Pages 180-187: imitation, proposed recombination and language; Figures 1-4", "provenance"]]], ["empathy-self-other", "D-empathy-self-other", "definition", "definition", null, [["decety2004", "Pages 71-75: empathy definitions, distinctions and proposed functional components", "supports"], ["decety2004", "Pages 92-94: conclusion, simulation, self-other distinction and regulation", "limits"], ["decety2004", "Pages 80-84; Figure 3: self-other awareness, agency and executive-function dissociations", "limits"], ["gallese2003-roots", "Pages 175-177: broadened empathy, three descriptive levels, self-other distinction and untested hypothesis", "limits"]]], ["empathy-functional-architecture", "C-empathy-functional-architecture", "hypothesis", "unresolved", null, [["decety2004", "Pages 71-75: empathy definitions, distinctions and proposed functional components", "provenance"], ["decety2004", "Pages 92-94: conclusion, simulation, self-other distinction and regulation", "provenance"], ["decety2004", "Pages 75-80; Figures 1-2: perception-action and emotion-sharing accounts", "provenance"], ["decety2004", "Pages 80-84; Figure 3: self-other awareness, agency and executive-function dissociations", "provenance"], ["decety2004", "Pages 84-88; Figures 4-6: perspective taking, regulation and alternative frontal interpretations", "provenance"], ["decety2004", "Pages 88-91; Box 1: different outcome instruments, lesion-study limits and nonprimitive constructs", "provenance"]]]]) {
    const e = entities.get(`neur:${key}`), c = claims.get(cid);
    assert.equal(e.kind, kind); assert.deepEqual(e.claimIds, [cid]);
    assert.equal(c.status, status); assert.deepEqual(c.contextIds, contextIds ?? undefined);
    assert.deepEqual(c.checkIds, [], "Read action responses became reproduced experiments");
    assert.deepEqual(c.citations.map((r) => [r.sourceId, r.locator, r.role]), passages, "Social claim lost its assay or interpretation boundary");
    assert.ok(!graph.relations.some((r) => r.source === e.id || r.target === e.id), "Action observation or empathy theory acquired an untested dependency");
  }
  assert.equal(sources.get("gallese1996").doi, "10.1093/brain/119.2.593");
  assert.equal(sources.get("gallese1996").review.extent, "selected-main-text-and-figures");
  assert.equal(sources.get("rizzolatti2004").doi, "10.1146/annurev.neuro.27.070203.144230");
  assert.equal(sources.get("rizzolatti2004").review.extent, "main-text-and-figures");
  assert.equal(sources.get("decety2004").doi, "10.1177/1534582304267187");
  assert.equal(sources.get("decety2004").review.extent, "main-text-and-figures");

  for (const [id, organism, preparation] of [["singer2004-partner-pain", "Sixteen human couples; sixteen female partners scanned", "The female participant sees both right hands and randomized cues indicating individually calibrated low or high electrical stimulation to herself or her partner. The partner sits beside the scanner. This is a cued hand-stimulation task, not observation of pain faces or a neural perturbation."], ["mukamel2010-action-units", "Twenty-one epilepsy patients; forty-three sessions; 1177 units comprising 665 single and 512 multiunit recordings", "Bedside face-expression and hand-grasp observation/execution tasks with corresponding no-movement controls. Five participants use auditory execution cues and separated observation/execution blocks; sixteen use written cues. Published results pool both protocols. Electrodes are placed for clinical need in sampled medial frontal and temporal regions."]]) {
    assert.equal(studies.get(id).organism, organism, "Human imaging or unit sample changed");
    assert.equal(studies.get(id).preparation, preparation, "Human task or protocol cohorts silently pooled");
  }
  for (const [key, cid, kind, status, contextIds, passages] of [["human-action-matching", "C-human-action-matching", "scoped-process", "publication-supported", ["mukamel2010-action-units"], [["mukamel2010", "Pages 750-753; Table 1 and Figure 1: recorded units, matching criteria and regional response counts", "supports"], ["mukamel2010-supplement", "Pages 2-3 and 13-15; Figure S1: task design, clinical recording and the five auditory-cued versus sixteen word-cued participants", "method"], ["mukamel2010-supplement", "Pages 6 and 9-12; Figure S3 and Tables S2-S3: unit types, action profiles, response directions and peak latencies", "supports"], ["mukamel2010-supplement", "Pages 16-18: spike sorting, normalization and effector-congruency definitions", "method"]]], ["human-action-regional-reference", "C-human-action-regional-reference", "scoped-process", "publication-supported", ["mukamel2010-action-units"], [["mukamel2010", "Pages 752-753; Figure 2: conditional null comparisons and entorhinal chi-square statement", "supports"], ["mukamel2010-supplement", "Pages 4-5 and 16-17; Figure S2: response tests, condition-label shuffling and simulated reference", "method"], ["mukamel2010", "Pages 750-753; Table 1 and Figure 1: recorded units, matching criteria and regional response counts", "limits"], ["mukamel2010-manuscript", "Table 1B: PHG execution row; manuscript and final-publication metadata", "limits"]]], ["human-action-response-profiles", "C-human-action-response-profiles", "scoped-process", "publication-supported", ["mukamel2010-action-units"], [["mukamel2010", "Pages 753-754; Figure 3: excitation, inhibition and population response profiles", "supports"], ["mukamel2010-supplement", "Pages 6 and 9-12; Figure S3 and Tables S2-S3: unit types, action profiles, response directions and peak latencies", "supports"], ["mukamel2010-supplement", "Pages 16-18: spike sorting, normalization and effector-congruency definitions", "method"]]], ["human-action-agency-hypothesis", "C-human-action-agency-hypothesis", "hypothesis", "unresolved", null, [["mukamel2010", "Pages 754-755: memory reactivation, motor suppression and self-other interpretation", "provenance"], ["mukamel2010-supplement", "Pages 6 and 9-12; Figure S3 and Tables S2-S3: unit types, action profiles, response directions and peak latencies", "provenance"]]], ["partner-pain-shared-bold", "C-partner-pain-shared-bold", "scoped-process", "publication-supported", ["singer2004-partner-pain"], [["singer2004", "Page 1159; Figure 2: self/other conjunction, masking and BOLD time courses", "supports"], ["singer2004", "Pages 1158-1159; Figure 1: sixteen couples, scanned female partners, cue/stimulation task and unpleasantness ratings", "method"], ["singer2004", "Page 1162: separate supporting methods, Figure S1 and Tables S1-S5 listed", "limits"]]], ["partner-pain-self-contrast", "C-partner-pain-self-contrast", "scoped-process", "publication-supported", ["singer2004-partner-pain"], [["singer2004", "Pages 1159-1160; Figure 3: self-by-pain interaction and sensory-region contrasts", "supports"], ["singer2004", "Pages 1158-1159; Figure 1: sixteen couples, scanned female partners, cue/stimulation task and unpleasantness ratings", "method"], ["singer2004", "Page 1159; Figure 2: self/other conjunction, masking and BOLD time courses", "limits"]]], ["partner-pain-trait-correlation", "C-partner-pain-trait-correlation", "scoped-process", "publication-supported", ["singer2004-partner-pain"], [["singer2004", "Pages 1159 and 1161; Figure 4: Empathic Concern and BEES regressions", "supports"], ["singer2004", "Pages 1158-1159; Figure 1: sixteen couples, scanned female partners, cue/stimulation task and unpleasantness ratings", "method"], ["singer2004", "Page 1162: separate supporting methods, Figure S1 and Tables S1-S5 listed", "limits"]]], ["partner-pain-shared-affect-hypothesis", "C-partner-pain-shared-affect-hypothesis", "hypothesis", "unresolved", null, [["singer2004", "Pages 1160-1161: affective representation and re-representation interpretation", "provenance"], ["singer2004", "Page 1159; Figure 2: self/other conjunction, masking and BOLD time courses", "provenance"], ["singer2004", "Pages 1159 and 1161; Figure 4: Empathic Concern and BEES regressions", "provenance"]]]]) {
    const entity = entities.get(`neur:${key}`), claim = claims.get(cid);
    assert.equal(entity.kind, kind); assert.deepEqual(entity.claimIds, [cid]);
    assert.equal(claim.status, status); assert.deepEqual(claim.contextIds, contextIds ?? undefined);
    assert.deepEqual(claim.checkIds, [], "Human source reading became independent reproduction");
    assert.deepEqual(claim.citations.map((r) => [r.sourceId, r.locator, r.role]), passages, "Human social evidence lost its method or interpretation boundary");
    assert.ok(!graph.relations.some((r) => r.source === entity.id || r.target === entity.id), "Human task association acquired an untested dependency");
  }
  assert.equal(sources.get("singer2004").doi, "10.1126/science.1093535");
  assert.equal(sources.get("singer2004").review.extent, "main-text-and-figures");
  assert.equal(sources.get("mukamel2010").doi, "10.1016/j.cub.2010.02.045");
  assert.equal(sources.get("mukamel2010").review.extent, "main-text-and-figures");
  assert.equal(sources.get("mukamel2010-supplement").doi, "10.1016/j.cub.2010.02.045");
  assert.equal(sources.get("mukamel2010-supplement").review.extent, "supplementary-text-and-figures");
  assert.equal(sources.get("mukamel2010-manuscript").doi, "10.1016/j.cub.2010.02.045");
  assert.equal(sources.get("mukamel2010-manuscript").review.extent, "selected-table-and-metadata");

  for (const [id, organism, preparation] of [["tan2024-ieeg", "Twenty-two epilepsy patients with clinically selected intracranial electrodes", "Ten painful hand pictures and ten context-matched neutral pictures are each shown once for 500 ms in randomized order. Patients are instructed to understand and empathize, then judge pain after image offset. Regional recordings contain AI 98 channels from 18 patients, ACC 40 from 7, amygdala 68 from 17 and IFG 91 from 15; these participant subsets overlap."], ["tan2024-ratings", "Sixteen post-recording raters drawn from the twenty-two clinical participants", "After iEEG, sixteen patients rate the twenty pictures in separate randomized blocks for empathy strength, perceived pain, own unpleasantness and arousal. Ratings are min-max normalized within participant and dimension. Associations use matched painful-minus-neutral differences, with channels and patients included in mixed models."], ["tan2024-decoder", "Pooled channel and channel-pair summaries from the twenty-two-patient picture task", "The paper splits channels or channel pairs 70/30 percent for feature selection and decoding. Thirteen selected features are averaged over equally sized random channel/pair samples, repeated 200 times. A linear SVM classifies the twenty stimulus trials using five-fold trial cross-validation; features are sequentially removed in descending classifier-weight order."]]) {
    assert.equal(studies.get(id).organism, organism, "iEEG patients, raters or pooled model samples changed");
    assert.equal(studies.get(id).preparation, preparation, "iEEG sampling or decoding folds silently changed");
  }
  for (const [key, cid, kind, status, contextIds, passages] of [["vicarious-regional-power", "C-vicarious-regional-power", "scoped-process", "publication-supported", ["tan2024-ieeg"], [["tan2024", "Pages 4-5 and 13; Figure 2: regional power and detected temporal contrasts", "supports"], ["tan2024", "Pages 2-4 and 11-13; Figure 1: clinical sample, picture task, post-recording ratings and preprocessing", "method"], ["tan2024-channel-data", "Sheet1 A1:K28: twenty-two patient rows, regional counts, within-patient pair counts and totals", "method"], ["tan2024-supplement", "Pages 11-14; Figures S10-S13: nested mixed models and power-arousal nulls", "method"], ["tan2024-supplement", "Pages 17-19; Figures S16-S18: nearest-white-matter reference sensitivity", "limits"], ["tan2024-reporting", "Pages 1-3: software, sampling, exclusions, replication, randomization, blinding and human participants", "limits"]]], ["vicarious-detection-timing", "C-vicarious-detection-timing", "scoped-process", "publication-supported", ["tan2024-ieeg"], [["tan2024", "Pages 4-5 and 13; Figure 2: regional power and detected temporal contrasts", "supports"], ["tan2024-supplement", "Page 20; Figure S19: 50 ms smoothing and threshold-dependent temporal detection", "limits"], ["tan2024-code", "Commit f96ef160130fcd2c31d82fc065dc67687188f616: Time_frequency_analysis_wavelet_transform.m, compute_PC.m and compute_PAC.m", "method"]]], ["vicarious-power-correlation", "C-vicarious-power-correlation", "scoped-process", "publication-supported", ["tan2024-ieeg"], [["tan2024", "Pages 5-6 and 13-14; Figure 3: beta power correlation and transfer entropy", "supports"], ["tan2024-code", "Commit f96ef160130fcd2c31d82fc065dc67687188f616: Time_frequency_analysis_wavelet_transform.m, compute_PC.m and compute_PAC.m", "method"], ["tan2024-channel-data", "Sheet1 A1:K28: twenty-two patient rows, regional counts, within-patient pair counts and totals", "method"], ["tan2024-supplement", "Pages 11-14; Figures S10-S13: nested mixed models and power-arousal nulls", "method"], ["tan2024-supplement", "Pages 17-19; Figures S16-S18: nearest-white-matter reference sensitivity", "limits"]]], ["vicarious-transfer-entropy", "C-vicarious-transfer-entropy", "scoped-process", "publication-supported", ["tan2024-ieeg"], [["tan2024", "Pages 5-6 and 13-14; Figure 3: beta power correlation and transfer entropy", "supports"], ["tan2024-supplement", "Page 8; Figure S7: transfer-entropy directions and frequency-specific nulls", "supports"], ["tan2024-channel-data", "Sheet1 A1:K28: twenty-two patient rows, regional counts, within-patient pair counts and totals", "method"]]], ["vicarious-phase-amplitude", "C-vicarious-phase-amplitude", "scoped-process", "publication-supported", ["tan2024-ieeg"], [["tan2024", "Pages 6-7 and 14; Figure 4: phase-amplitude coupling", "supports"], ["tan2024-code", "Commit f96ef160130fcd2c31d82fc065dc67687188f616: Time_frequency_analysis_wavelet_transform.m, compute_PC.m and compute_PAC.m", "method"], ["tan2024-channel-data", "Sheet1 A1:K28: twenty-two patient rows, regional counts, within-patient pair counts and totals", "method"], ["tan2024-supplement", "Pages 17-19; Figures S16-S18: nearest-white-matter reference sensitivity", "limits"], ["tan2024-source-data", "6.2 Source Data_SI/FigS18_PAC_closest_WM_data.mat: data_summary regional array dimensions", "limits"]]], ["vicarious-rating-associations", "C-vicarious-rating-associations", "scoped-process", "publication-supported", ["tan2024-ratings"], [["tan2024", "Pages 8-9 and 15; Figure 5d-f: mixed models of ratings and neural differences", "supports"], ["tan2024", "Pages 2-4 and 11-13; Figure 1: clinical sample, picture task, post-recording ratings and preprocessing", "method"], ["tan2024-supplement", "Pages 11-14; Figures S10-S13: nested mixed models and power-arousal nulls", "limits"]]], ["vicarious-feature-removal", "C-vicarious-feature-removal", "scoped-process", "publication-supported", ["tan2024-decoder"], [["tan2024", "Pages 7-8 and 14-15; Figure 5a-c: feature selection, trial cross-validation and sequential feature removal", "supports"], ["tan2024-code", "Commit f96ef160130fcd2c31d82fc065dc67687188f616: README.md and SVM_model.m", "method"], ["tan2024-source-data", "6.1 Source Data_Main/Fig5a_class_weight.mat, Fig5b_results_of_step_classification.mat and Fig5c_test_accuracy_permutation_distribution.mat", "supports"], ["tan2024-supplement", "Page 23; Figure S22: repeated trial-count subsampling", "limits"]]], ["vicarious-neurodynamic-hypothesis", "C-vicarious-neurodynamic-hypothesis", "hypothesis", "unresolved", null, [["tan2024", "Pages 9-11; Figure 6: proposed neurodynamic organization and interpretive limits", "provenance"], ["tan2024", "Pages 7-8 and 14-15; Figure 5a-c: feature selection, trial cross-validation and sequential feature removal", "provenance"], ["tan2024-supplement", "Pages 17-19; Figures S16-S18: nearest-white-matter reference sensitivity", "provenance"], ["tan2024-supplement", "Page 20; Figure S19: 50 ms smoothing and threshold-dependent temporal detection", "provenance"], ["tan2024-code", "Commit f96ef160130fcd2c31d82fc065dc67687188f616: README.md and SVM_model.m", "provenance"]]]]) {
    const entity = entities.get(`neur:${key}`), claim = claims.get(cid);
    assert.equal(entity.kind, kind); assert.deepEqual(entity.claimIds, [cid]);
    assert.equal(claim.status, status); assert.deepEqual(claim.contextIds, contextIds ?? undefined);
    assert.deepEqual(claim.checkIds, [], "Selected iEEG source inspection became full numerical reproduction");
    assert.deepEqual(claim.citations.map((r) => [r.sourceId, r.locator, r.role]), passages, "iEEG finding lost its inspected evidence or analysis boundary");
    assert.ok(!graph.relations.some((r) => r.source === entity.id || r.target === entity.id), "iEEG association or virtual feature removal became a neural dependency");
  }
  assert.equal(sources.get("tan2024").review.extent, "main-text-and-figures");
  assert.equal(sources.get("tan2024-supplement").review.extent, "supplementary-text-and-selected-figures");
  assert.equal(sources.get("tan2024-reporting").review.extent, "complete-reporting-summary");
  assert.equal(sources.get("tan2024-code").review.extent, "complete-repository-source-reading");
  assert.equal(sources.get("tan2024-channel-data").review.extent, "complete-count-table");
  assert.equal(sources.get("tan2024-source-data").review.extent, "selected-array-inspection");
  assert.equal(sources.get("tan2024").doi, "10.1038/s41467-024-49541-1");
  assert.equal(sources.get("tan2024-code").url, "https://github.com/Huixin-Tan/iEEG_empathy/tree/f96ef160130fcd2c31d82fc065dc67687188f616");

  const sharedManifold = claims.get("C-shared-manifold-hypothesis");
  assert.equal(sharedManifold.status, "unresolved", "Conceptual simulation became established mechanism");
  assert.equal(sharedManifold.contextIds, undefined, "Theoretical paper acquired a primary cohort");
  assert.deepEqual(sharedManifold.checkIds, [], "Conceptual manifold became computational reproduction");
  assert.equal(entities.get("neur:shared-manifold-hypothesis").kind, "hypothesis");
  assert.equal(entities.get("neur:shared-manifold-hypothesis").status, "hypothesis");
  assert.ok(!graph.relations.some((r) => r.source === "neur:shared-manifold-hypothesis" || r.target === "neur:shared-manifold-hypothesis"), "Shared-manifold proposal acquired an empirical dependency");
  assert.deepEqual(sharedManifold.citations.map((r) => [r.sourceId, r.locator, r.role]), [["gallese2003-roots", "Pages 175-177: broadened empathy, three descriptive levels, self-other distinction and untested hypothesis", "provenance"], ["gallese2003-manifold", "Pages 524-525: empathy, Section 8 shared manifold and Section 9 conclusions", "provenance"]]);
  assert.equal(sources.get("gallese2003-roots").doi, "10.1159/000072786", "Distinct shared-manifold publications were merged");
  assert.equal(sources.get("gallese2003-roots").review.extent, "main-text-and-references");
  assert.equal(sources.get("gallese2003-manifold").doi, "10.1098/rstb.2002.1234", "Distinct shared-manifold publications were merged");
  assert.equal(sources.get("gallese2003-manifold").review.extent, "selected-full-text-passages");

  const empathyMeasure = claims.get("D-empathy-measurement-boundary");
  assert.equal(empathyMeasure.status, "definition");
  assert.equal(empathyMeasure.contextIds, undefined, "Instrument definition acquired an experimental cohort");
  assert.deepEqual(empathyMeasure.checkIds, [], "Instrument description became psychometric reproduction");
  assert.equal(entities.get("neur:empathy-measurement-boundary").kind, "definition");
  assert.equal(sources.get("mehrabian1996-bees").review.extent, "selected-author-documentation");
  assert.ok(!graph.relations.some((r) => r.source === "neur:empathy-measurement-boundary" || r.target === "neur:empathy-measurement-boundary"), "Measurement distinction became a neural dependency");
  assert.deepEqual(empathyMeasure.citations.map((r) => [r.sourceId, r.locator, r.role]), [["decety2004", "Pages 88-91; Box 1: different outcome instruments, lesion-study limits and nonprimitive constructs", "supports"], ["mehrabian1996-bees", "Scale Description and Test Features: thirty-item questionnaire with nine-point responses", "supports"], ["mehrabian1996-bees", "Background literature, Reliability and Validity Data and References: earlier 1972 scale and 1996 BEES manual identity", "limits"]]);
  assert.equal(sources.get("morales2026").url, "https://arxiv.org/abs/2601.05021v1");
  assert.ok(!graph.claims.some((c) => c.citations.some((x) => x.sourceId === "morales2026")), "Unreproduced generator acquired active graph semantics");

}
