import { CONDENSATE_LIPID_RECORDS } from "./condensate-lipid.mjs";
import { PHAGE_SCOPE_RECORDS } from "./phage-scope.mjs";
import { GENETIC_INFORMATION_RECORDS } from "./genetic-information.mjs";
import { NETWORK_CYCLE_RECORDS } from "./network-cycle.mjs";
import { CHROMATIN_PROTEIN_MODIFICATION_RECORDS } from "./chromatin-protein-modification.mjs";
import { CHANNELS_COMPLEX_RECORDS } from "./channels-complex.mjs";
import { TEMPLATE_CHEMISTRY_RECORDS } from "./template-chemistry.mjs";
import { REDOX_PH_RECORDS } from "./redox-ph.mjs";
import { BIOCHEMICAL_SOURCE_REUSE_RECORDS } from "./biochemical-source-reuse.mjs";
import { BIOENERGETICS_RECORDS } from "./bioenergetics.mjs";
import { MODEL_VESICLES_RECORDS } from "./model-vesicles.mjs";
import { RECOGNITION_HYDRATION_RECORDS } from "./recognition-hydration.mjs";
import { PROTEIN_FOLDING_RECORDS } from "./protein-folding.mjs";
import { ENZYME_CATALYSIS_RECORDS } from "./enzyme-catalysis.mjs";
import { PROTEIN_ALLOSTERY_RECORDS } from "./protein-allostery.mjs";
import { RNA_CATALYSIS_RECORDS } from "./rna-catalysis.mjs";
import { BIOCHEMICAL_TRANSFER_RECORDS } from "./biochemical-transfer.mjs";
import { PROTEIN_QUALITY_CONTROL_RECORDS } from "./protein-quality-control.mjs";
import { BIOCHEMICAL_KINETICS_RECORDS } from "./biochemical-kinetics.mjs";

// Each reviewed card contributes exact scientific records and admission limits.
// Reused records retain their original identities and complete source contexts.
const groups = [
  { cards: [18, 27], records: CONDENSATE_LIPID_RECORDS, ownStudies: CONDENSATE_LIPID_RECORDS.studies },
  { cards: [9, 10, 16, 29, 30, 35], records: PHAGE_SCOPE_RECORDS, ownStudies: PHAGE_SCOPE_RECORDS.studies },
  { cards: [4, 22, 23], records: GENETIC_INFORMATION_RECORDS, ownStudies: GENETIC_INFORMATION_RECORDS.studies },
  { cards: [13, 14], records: NETWORK_CYCLE_RECORDS, ownStudies: NETWORK_CYCLE_RECORDS.studies },
  { cards: [19, 26, 34], records: CHROMATIN_PROTEIN_MODIFICATION_RECORDS, ownStudies: [] },
  { cards: [3, 6, 17], records: CHANNELS_COMPLEX_RECORDS, ownStudies: CHANNELS_COMPLEX_RECORDS.studies.filter((study) => ["zhao2016-cage-characterization", "zhao2016-gox-hrp-cascade"].includes(study.id)) },
  { cards: [39, 40, 41], records: TEMPLATE_CHEMISTRY_RECORDS, ownStudies: TEMPLATE_CHEMISTRY_RECORDS.studies.filter((study) => ["prywes2016-activation-preparation", "prywes2016-downstream-helper-rate", "prywes2016-match-mismatch-rates", "prywes2016-short-mixed-extension"].includes(study.id)) },
  { cards: [25, 28], records: REDOX_PH_RECORDS, ownStudies: REDOX_PH_RECORDS.studies.filter((study) => ["gutscher2008-grx-characterization-context", "gutscher2008-hela-redox-response-context", "isom2018-yeast-ph-response-context"].includes(study.id)) },
  { cards: [15, 42], records: BIOCHEMICAL_SOURCE_REUSE_RECORDS, ownStudies: [] },
  { cards: [24, 38, 47], records: BIOENERGETICS_RECORDS, ownStudies: BIOENERGETICS_RECORDS.studies.filter((study) => ["racker1974-purple-vesicle-proton-context", "racker1974-purple-vesicle-phosphorylation-context"].includes(study.id)) },
  { cards: [43, 44, 45, 46, 48], records: MODEL_VESICLES_RECORDS, ownStudies: MODEL_VESICLES_RECORDS.studies.filter((study) => ["zhu2009-oleate-assembly-imaging", "mansy2008-ribose-permeability", "mansy2008-nucleotide-permeability", "mansy2008-oligonucleotide-retention", "mansy2008-encapsulated-primer-extension", "zhu2009-fed-oleate-fret-cycles", "zhu2009-short-rna-partition", "chen2004-trna-area-competition"].includes(study.id)) },
  { cards: [11, 31], records: RECOGNITION_HYDRATION_RECORDS, ownStudies: RECOGNITION_HYDRATION_RECORDS.studies.filter((study) => ["amit1986-hewl-d13-crystallography", "modig2004-bpti-supercooled-mrd"].includes(study.id)) },
  { cards: [0], records: PROTEIN_FOLDING_RECORDS, ownStudies: PROTEIN_FOLDING_RECORDS.studies },
  { cards: [1, 2], records: ENZYME_CATALYSIS_RECORDS, ownStudies: ENZYME_CATALYSIS_RECORDS.studies },
  { cards: [5, 12, 33], records: PROTEIN_ALLOSTERY_RECORDS, ownStudies: PROTEIN_ALLOSTERY_RECORDS.studies },
  { cards: [7, 8], records: RNA_CATALYSIS_RECORDS, ownStudies: RNA_CATALYSIS_RECORDS.studies },
  { cards: [20, 36], records: PROTEIN_QUALITY_CONTROL_RECORDS, ownStudies: PROTEIN_QUALITY_CONTROL_RECORDS.studies },
  { cards: [21, 32], records: BIOCHEMICAL_KINETICS_RECORDS, ownStudies: [] },
  { cards: [37, 49], records: BIOCHEMICAL_TRANSFER_RECORDS, ownStudies: [] }
];
export const BIOCHEMISTRY_CARDS = groups.flatMap(({ cards, records }) =>
  cards.map((card) => ({ card, records })));

export const BIOCHEMISTRY_OWN_STUDY_IDS = new Set(groups.flatMap(({ ownStudies }) =>
  ownStudies.map((study) => study.id)));

export const BIOCHEMISTRY_STUDY_TYPES = new Map(BIOCHEMISTRY_CARDS.flatMap(({ records }) =>
  records.studies.map((study) => [study.id, study.studyType])));
export const BIOCHEMISTRY_CLAIM_IDS = new Set(BIOCHEMISTRY_CARDS.flatMap(({ records }) =>
  records.claims.map((claim) => claim.id)));
