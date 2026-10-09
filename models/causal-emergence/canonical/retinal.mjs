import { LEPTON_FORMAL_ADMISSION } from "./lepton-formal.mjs";
import { LEPTON_TAU_ADMISSION } from "./lepton-tau.mjs";
import { LEPTON_ELECTRON_ADMISSION } from "./lepton-electron.mjs";
import { QUARK_FORMAL_ADMISSION } from "./quark-formal.mjs";
import { QUARK_DIS_ADMISSION } from "./quark-dis.mjs";
import { QUARK_TOP_WIDTH_ADMISSION } from "./quark-top-width.mjs";
import { WEAK_SECTOR_ADMISSION } from "./weak-sector.mjs";
import { Z_LINESHAPE_ADMISSION } from "./z-lineshape.mjs";
import { W_DECAY_ADMISSION } from "./w-decay.mjs";
import { ACCELERATOR_NEUTRINO_ADMISSION } from "./accelerator-neutrino.mjs";
import { WEAK_BOSON_ADMISSION } from "./weak-boson.mjs";
import { HIGGS_COUPLING_ADMISSION } from "./higgs-coupling.mjs";
import { SOLAR_NEUTRINO_ADMISSION } from "./solar-neutrino.mjs";
import { ATMOSPHERIC_NEUTRINO_ADMISSION } from "./atmospheric-neutrino.mjs";
import { MATTER_NEUTRINO_ADMISSION } from "./matter-neutrino.mjs";
import { HIGGS_TAU_ADMISSION } from "./higgs-tau.mjs";
import { FIELD_DYNAMICS_ADMISSION } from "./field-dynamics.mjs";
import { ELECTROWEAK_ADMISSION } from "./electroweak.mjs";
import { NEUTRINO_ADMISSION } from "./neutrino.mjs";
import { HADRON_FAMILY_ADMISSION } from "./hadron-family.mjs";
import { MESON_FAMILY_ADMISSION } from "./meson-family.mjs";
import { VIRTUAL_PROCESS_ADMISSION } from "./virtual-process.mjs";
import { PION_DECAY_ADMISSION } from "./pion-decay.mjs";
import { ELECTRON_MOMENT_ADMISSION } from "./electron-moment.mjs";
import { VACUUM_POLARIZATION_ADMISSION } from "./vacuum-polarization.mjs";
import { NUCLEON_ALGEBRA_ADMISSION } from "./nucleon-algebra.mjs";
import { NEUTRON_FORM_FACTOR_ADMISSION } from "./neutron-form-factor.mjs";
import { NUCLEAR_ENERGETICS_ADMISSION } from "./nuclear-energetics.mjs";
import { HADRON_PRODUCTION_ADMISSION } from "./hadron-production.mjs";
import assert from "node:assert/strict";
const localStudySources = new Map([...NUCLEON_ALGEBRA_ADMISSION.localStudySources, ...NEUTRON_FORM_FACTOR_ADMISSION.localStudySources, ...NUCLEAR_ENERGETICS_ADMISSION.localStudySources, ...HADRON_PRODUCTION_ADMISSION.localStudySources, ...PION_DECAY_ADMISSION.localStudySources, ...ELECTRON_MOMENT_ADMISSION.localStudySources, ...VACUUM_POLARIZATION_ADMISSION.localStudySources, ...HADRON_FAMILY_ADMISSION.localStudySources, ...MESON_FAMILY_ADMISSION.localStudySources, ...VIRTUAL_PROCESS_ADMISSION.localStudySources, ...FIELD_DYNAMICS_ADMISSION.localStudySources, ...ELECTROWEAK_ADMISSION.localStudySources, ...NEUTRINO_ADMISSION.localStudySources, ...SOLAR_NEUTRINO_ADMISSION.localStudySources, ...ATMOSPHERIC_NEUTRINO_ADMISSION.localStudySources, ...MATTER_NEUTRINO_ADMISSION.localStudySources, ...HIGGS_TAU_ADMISSION.localStudySources, ...ACCELERATOR_NEUTRINO_ADMISSION.localStudySources, ...WEAK_BOSON_ADMISSION.localStudySources, ...HIGGS_COUPLING_ADMISSION.localStudySources, ...WEAK_SECTOR_ADMISSION.localStudySources, ...Z_LINESHAPE_ADMISSION.localStudySources, ...W_DECAY_ADMISSION.localStudySources, ...QUARK_FORMAL_ADMISSION.localStudySources, ...QUARK_DIS_ADMISSION.localStudySources, ...QUARK_TOP_WIDTH_ADMISSION.localStudySources, ...LEPTON_FORMAL_ADMISSION.localStudySources, ...LEPTON_TAU_ADMISSION.localStudySources, ...LEPTON_ELECTRON_ADMISSION.localStudySources]);
const sorted = (values) => [...values].sort();

export function validateRetinalPilot({ graph, pilot, routing, optics, visual, neural, physics }, { sources, claims, entities, relations }) {
  for (const [source, target] of [
    ["pigment-preparation", "photochemistry"], ["photochemistry", "rod-response"],
    ["catalytic-machinery", "rod-response"], ["cgmp-conductance", "rod-response"],
    ["recording-context", "rod-response"], ["ocular-optics", "spatial-sampling"],
    ["retinal-circuit", "retinal-filtering"], ["cone-drive", "retinal-filtering"],
    ["retinal-filtering", "ganglion-spiking"], ["excitable-membrane", "ganglion-spiking"],
    ["cone-drive", "ganglion-spiking"]
  ]) {
    const relation = relations.get(`retinal:${source}-${target}`);
    assert.equal(relation?.source, `ret:${source}`, "Retinal intervention or boundary changed");
    assert.equal(relation.target, `ret:${target}`, "Retinal observable changed");
    assert.deepEqual(relation.claimIds, [`C-retinal-${source}-${target}`], "Retinal evidence binding changed");
  }
  const studyRecords = [...pilot.studies, ...routing.studies, ...optics.studies, ...visual.studies, ...neural.studies, ...physics.studies];
  const studies = new Map(studyRecords.map((s) => [s.id, s]));
  assert.equal(studies.size, studyRecords.length, "Duplicate study");
  for (const s of studies.values()) {
    const source = sources.get(s.sourceId);
    if (localStudySources.has(s.id)) {
      assert.equal(s.sourceId, localStudySources.get(s.id), `Local calculation changed executable owner ${s.id}`);
      assert.equal(source?.kind, "executable-check", `Local study lacks executable evidence ${s.id}`);
      assert.equal(s.studyType, "computational-analysis", `Local calculation became an experiment ${s.id}`);
      for (const key of ["journal", "volume", "pages", "doi", "metadataUrl"]) assert.equal(s[key], null, `Local calculation acquired publication metadata ${s.id}: ${key}`);
      assert.equal(s.issue, "");
    } else {
      assert.equal(source?.kind, "research-publication", `Missing study publication ${s.id}`);
      for (const key of ["journal", "volume", "pages"]) assert.ok(typeof s[key] === "string" && s[key].length, `Published study lacks metadata ${s.id}: ${key}`);
    }
    assert.equal(source.doi, s.doi, `Study DOI differs ${s.id}`);
    assert.equal(source.review.extent, s.readExtent);
    if (s.id === s.sourceId) assert.deepEqual(source.review.locators, s.reviewedLocators);
    else assert.ok(s.reviewedLocators.every((locator) => source.review.locators.includes(locator)),
      `Assay reading exceeds its publication review: ${s.id}`);
  }
  const admittedStatuses = new Set(["publication-supported", "literature-synthesis"]);
  for (const c of claims.values()) {
    if (admittedStatuses.has(c.status)) assert.ok(c.contextIds?.length, `Published claim lacks study context ${c.id}`);
    if (!c.contextIds) continue;
    for (const id of c.contextIds) {
      const s = studies.get(id);
      assert.ok(s?.studyType === "computational-analysis" && ["pajot2026-quadrilaterals", "pajot2026-memory", "pajot2026-cross-format", "tan2024-decoder", "creutz1980", "bali2005", "durr2008", "borsanyi2015", "borsanyi2015-volume", "schuh2019-geometry", "korobov2017-hd", "rau2020-figure-replay", "korobov2017-h2", "mass-constraint-replay", "takenaka2020-response", "proton-decay-replay", "takenaka2020-inference", "beam-neutron-replay", "yue2018-normalization", "alpha-gamma-replay", "bernauer2014-mainz-fit", "bernauer2014-rosenbluth", "bernauer-data-replay", "schneider2017-moment-inference", "proton-moment-replay", "afach2014-conversion", "neutron-moment-replay", "nucleon-algebra", "neutron-form-factor-replay", "lachniet2009-extraction", "riordan2010-extraction", "deuteron-beta-energetics", "sld1999-neutral-extrapolation", "hadron-production-replay", "pienu2015-timing-fit", "pienu2015-correction", "pion-decay-replay", "fan2023-moment-inference", "electron-moment-replay", "l3-2000-running-fit", "vacuum-polarization-replay", "barnes1964-reconstruction", "hadron-family-replay", "kloe2007-meson-response", "kloe2007-meson-mixing", "meson-family-replay", "virtual-process-replay", "field-dynamics-replay", "atlas2012-inference", "electroweak-replay", "kamland2005-response", "kamland2005-oscillation-fit", "neutrino-replay", "sno2002-response", "sno2002-channel-fit", "sno2002-flavor-fit", "superk1998-response", "superk1998-oscillation-fit", "cms2016-tau-rate-inference", "cms2016-tau-coupling-inference", "opera2015-response", "opera2015-inference", "ua1-1983-w-response", "ua1-1983-w-inference", "ua1-1983-z-response", "ua1-1983-z-inference", "lep1-z-response", "lep1-z-combination", "lep2013-w-width-response", "lep2013-w-width-inference", "lep2013-w-branching-response", "lep2013-w-branching-inference", "whitlow1990-separation", "whitlow1990-comparison", "cdf2013-top-response", "cdf2013-top-inference", "belle2014-tau-response", "belle2014-tau-inference", "borexino2015-electron-response", "borexino2015-electron-inference"].includes(id) || s?.studyType === "experimental-reanalysis" && ["liontrap2019-reanalysis", "liontrap2019-double-dip", "liontrap2019-oxygen", "rau2020-local-fit", "rau2020-joint-fit", "kessler2017-ill", "rau2020-capture-recalibration", "fink2021-state-fit", "codata2022-mass-inputs", "codata2022-lattice", "yue2013-update", "whitlow1990-reanalysis"].includes(id) || s?.studyType === "primary-experiment" || s?.studyType === "primary-observation" && ["witvliet2021", "disouky2026", "eriksson1998", "spalding2013", "kornack1999", "gould1999-primate", "rakic1985", "eckenhoff1988", "miller1996", "rose2016-pooled-behavior", "gallese1996-f5", "gallese1996-emg", "gallese1996-f1", "singer2004-partner-pain", "mukamel2010-action-units", "tan2024-ieeg", "tan2024-ratings"].includes(id), `Claim lacks reviewed primary evidence ${c.id}: ${id}`);
      assert.ok(c.citations.some((ref) => ref.sourceId === s.sourceId && s.reviewedLocators.includes(ref.locator)), `Unreviewed or missing study locator ${c.id}: ${id}`);
    }
    if (admittedStatuses.has(c.status)) {
      assert.ok(c.citations.some((ref) => ref.role === "supports" && c.contextIds.some((id) => {
        const study = studies.get(id);
        return study.sourceId === ref.sourceId && study.reviewedLocators.includes(ref.locator);
      })), `Publication support missing ${c.id}`);
      if (c.contextIds.length > 1) assert.equal(c.status, "literature-synthesis", `Multiple preparations presented as one experiment ${c.id}`);
    }
  }
  for (const r of relations.values()) {
    if ((r.id.startsWith("optical:") || r.id.startsWith("visual:") || r.id.startsWith("neural:") || r.id.startsWith("physics:"))) continue; // Checked by the respective domain contracts.
    if (!r.id.startsWith("retinal:")) {
      assert.equal(r.kind, "descriptive", "This pilot does not promote Level-0 definitions to physical support");
      continue;
    }
    assert.ok(r.source.startsWith("ret:") && r.target.startsWith("ret:"), "No empirical Level-0 bridge has been admitted");
    assert.ok(r.contextIds?.length, `Relation lacks contexts ${r.id}`);
    const supported = r.claimIds.filter((id) => r.kind === "descriptive" ? claims.get(id).status === "definition" : admittedStatuses.has(claims.get(id).status));
    assert.ok(supported.length, `Relation lacks an appropriate claim ${r.id}`);
    for (const id of r.contextIds) assert.ok(supported.some((cid) => claims.get(cid).contextIds?.includes(id)), `Relation context is not supported ${r.id}`);
    for (const cid of supported) assert.deepEqual(sorted(claims.get(cid).contextIds), sorted(r.contextIds), `Relation drops claim context ${r.id}`);
  }
  for (const e of entities.values()) {
    if ((e.id.startsWith("opt:") || e.id.startsWith("vis:") || e.id.startsWith("neur:") || e.id.startsWith("phys:"))) continue; // Checked by the respective domain contracts.
    if (!e.id.startsWith("ret:")) { assert.equal(e.level, 0); continue; }
    if (e.status === "evidence-scoped") assert.ok(e.claimIds.some((id) => admittedStatuses.has(claims.get(id).status)), `Entity lacks scoped evidence ${e.id}`);
  }
  for (const c of pilot.comparisons) {
    for (const id of c.sourceIds) assert.equal(studies.get(id)?.studyType, "primary-experiment");
    if (c.result !== "not-tested") assert.ok(c.sourceIds.length, "Comparison result lacks evidence");
  }

}
