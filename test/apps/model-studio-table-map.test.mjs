import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { evidenceTint, fitNamesColumns, fitTableMap, levelRangeText, shortDomainName, tableMapRows, tileGap } from "../../apps/model-studio/table-map.js";

// The real counts of the release causal-emergence@2026.11.08.0: phases of levels 0 to 7.
const ROWS = [[5, 7, 10, 3], [15, 14, 7, 1], [3, 9, 14, 0], [3, 4, 35, 6], [1, 3, 27, 4], [0, 4, 29, 1], [1, 6, 19, 2], [1, 4, 14, 7]];
const settings = { rows: ROWS, gap: tileGap, labelWidth: 112, headHeight: 22, minColumn: [122, 94, 132, 148] };

// Room for the grid at each viewport: the stage less its panels and the chrome around the grid.
const VIEWPORTS = [
  ["1280x720 both panels", 702, 380], ["1280x720 collapsed", 1256, 380],
  ["1440x900 both panels", 796, 560], ["1440x900 collapsed", 1412, 560],
  ["1920x1080 both panels", 1276, 740], ["1920x1080 collapsed", 1892, 740],
  ["2560x1440 both panels", 1916, 1100], ["2560x1440 collapsed", 2532, 1100]
];

test("the real table fits one screen at every common viewport, with a usable tile", () => {
  for (const [name, width, height] of VIEWPORTS) {
    const fit = fitTableMap({ ...settings, width, height });
    assert.equal(fit.fits, true, name);
    assert.ok(fit.tile >= 12 && fit.tile <= 40, `${name}: tile ${fit.tile}`);
    assert.ok(fit.height <= height, `${name}: ${fit.height} in ${height}`);
    assert.ok(112 + fit.columns.reduce((sum, value) => sum + value + 4, 0) <= width, `${name}: columns stay inside the width`);
    assert.deepEqual(fit.columns.map((column, index) => column >= settings.minColumn[index]), [true, true, true, true], `${name}: a heading has room`);
  }
});

test("every arising has a seat: tiles per line and row heights hold all counts", () => {
  const fit = fitTableMap({ ...settings, width: 796, height: 560 });
  const step = fit.tile + fit.gap;
  ROWS.forEach((row, rowIndex) => row.forEach((count, phase) => {
    const lines = Math.ceil(count / fit.perLine[phase]);
    if (count > 0) assert.ok(lines * step - fit.gap + 8 <= fit.rowHeights[rowIndex]);
  }));
  assert.equal(fit.gap, tileGap(fit.tile));
});

test("a larger space never gives a smaller tile", () => {
  for (const height of [300, 380, 460, 560, 700, 900]) {
    let previous = 0;
    for (let width = 640; width <= 2600; width += 20) {
      const { tile, fits } = fitTableMap({ ...settings, width, height });
      if (fits) assert.ok(tile >= previous, `width ${width} height ${height}: ${tile} after ${previous}`);
      if (fits) previous = tile;
    }
  }
  for (const width of [702, 796, 1276, 1892]) {
    let previous = 0;
    for (let height = 200; height <= 1200; height += 10) {
      const { tile, fits } = fitTableMap({ ...settings, width, height });
      if (fits) assert.ok(tile >= previous, `height ${height} width ${width}: ${tile} after ${previous}`);
      if (fits) previous = tile;
    }
  }
});

test("a space too small says so and gives the smallest layout, so that the panel may scroll", () => {
  const short = fitTableMap({ ...settings, width: 702, height: 120 });
  assert.equal(short.fits, false);
  assert.equal(short.tile, 10);
  assert.ok(short.height > 120);
  assert.equal(fitTableMap({ ...settings, width: 300, height: 2000 }).fits, false, "Too narrow for the columns");
});

test("a tile stops growing at the largest size", () => {
  assert.equal(fitTableMap({ ...settings, width: 6000, height: 6000 }).tile, 40);
});

test("the counts come from the arisings and skip the levels without any", () => {
  const items = [{ level: 0, phase: "a" }, { level: 0, phase: "b" }, { level: 2, phase: "b" }];
  const rows = tableMapRows(items, [{ value: 0 }, { value: 1 }, { value: 2 }], [{ value: "a" }, { value: "b" }]);
  assert.deepEqual(rows, [[1, 1], [0, 1]]);
});

test("the tile's tint separates no causes, none cited and a first cited cause", () => {
  assert.equal(evidenceTint(null), null);
  assert.equal(evidenceTint({ supported: 0, total: 0 }), null);
  assert.equal(evidenceTint({ supported: 0, total: 5 }), 0);
  assert.ok(evidenceTint({ supported: 1, total: 20 }) >= 15);
  assert.equal(evidenceTint({ supported: 5, total: 5 }), 100);
  assert.ok(evidenceTint({ supported: 2, total: 5 }) < evidenceTint({ supported: 3, total: 5 }));
});

test("short domain names and ranges of levels read plainly", () => {
  assert.equal(shortDomainName("Fields, particles and physical matter"), "Fields");
  assert.equal(shortDomainName("Behaviour, cognition and society"), "Behaviour");
  assert.equal(shortDomainName("Admissibility lineage"), "Admissibility");
  assert.equal(levelRangeText([8, 9, 10, 11, 12, 13]), "levels 8 to 13");
  assert.equal(levelRangeText([8]), "level 8");
  assert.equal(levelRangeText([8, 11]), "levels 8, 11");
  assert.equal(levelRangeText([]), "");
});

test("the Studio's Map sizes are the ones its styles draw", async () => {
  const source = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../../assets/css/model-studio-workbench.css", import.meta.url), "utf8");
  const sizes = source.match(/const TABLE_MAP = Object\.freeze\(\{([^}]*)\}/u)[1];
  const size = (name) => Number(sizes.match(new RegExp(`${name}: (\\d+)`, "u"))[1]);
  const map = (selector) => styles.match(new RegExp(`\\.arising-table\\[data-density="map"\\] ${selector} \\{([^}]*)\\}`, "u"))[1];
  assert.match(map("\\.arising-grid"), new RegExp(`gap: ${size("rowGap")}px`, "u"));
  assert.equal(size("rowGap"), size("columnGap"));
  assert.match(map("\\.arising-table-head span"), new RegExp(`height: ${size("headHeight")}px`, "u"));
  assert.match(map("\\.arising-table-cell"), new RegExp(`padding: ${size("cellChrome") / 2}px; border: 0`, "u"));
  assert.match(styles, new RegExp(`@container arising-panel \\(max-width: ${size("bareWidth")}px\\) \\{[^}]*\\}[^}]*\\.arising-table-phase small \\{ display: none; \\}`, "u"), "The counts leave the headings at the width the fit assumes");
});

test("the Map keeps the guarantees of the table it replaces on the first screen", async () => {
  const source = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const build = source.slice(source.indexOf("function buildArisingTable("), source.indexOf("/* ---------- Inspector ---------- */"));
  assert.match(build, /createElement\("button", "arising-chip"\)/, "A tile is the same element as a chip");
  assert.match(build, /chip\.title = /, "and keeps its native title");
  assert.match(source, /tableDensity: "map"/, "The table opens on the Map");
  assert.match(source, /\nrestorePreferences\(\);\nbindSkipLink\(\);\n\nasync function start\(\)/, "A reader's choices apply before the first render");
  for (const label of ['"Map"', '"Names"', '"Colour"', '"Domain"', '"Evidence"', '"Lineage from the root"']) assert.ok(source.includes(label), label);
});

test("the Map marks its states apart and fits the width it really has", async () => {
  const source = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const styles = await readFile(new URL("../../assets/css/model-studio-workbench.css", import.meta.url), "utf8");
  const rule = (selector) => {
    const start = styles.indexOf(`${selector} {`);
    assert.notEqual(start, -1, selector);
    return styles.slice(start, styles.indexOf("}", start));
  };
  const tile = '.arising-table[data-density="map"] .arising-chip';
  assert.match(rule(`${tile}[data-focus="true"]:not([data-selected="true"])`), /box-shadow:[^;]*var\(--blue-bright\)/u, "A focus that is not selected has its own mark");
  assert.notEqual(rule(`${tile}[data-selected="true"]`).split("{")[1], rule(`${tile}[data-lineage="true"]`).split("{")[1], "The selected tile stands out of its lineage");
  assert.match(rule(`${tile}[data-dimmed="true"]:is([data-selected="true"], [data-focus="true"])`), /opacity: 1/u, "A filter does not fade the selection's ring");
  assert.match(rule('.arising-table[data-density="map"]'), /min-width: 0/u, "The fit measures the panel, not the Names table's minimum");
  assert.match(rule(".arising-readout-meta"), /flex: 1 1 0/u, "The facts take only what the name leaves");
  const fit = source.slice(source.indexOf("function fitArisingMap("), source.indexOf("/** One line under the controls"));
  assert.match(fit, /panel\.dataset\.fits = "true";\s+let fit = measure\(\);/u, "Asked without scrollbars first");
  assert.match(fit, /panel\.dataset\.fits = "false";\s+fit = measure\(\);/u, "and again with the room the scrollbars leave");
});

test("a fresh Open work list starts at its top, the same list keeps its place", async () => {
  const source = await readFile(new URL("../../apps/model-studio/model-studio.js", import.meta.url), "utf8");
  const change = source.slice(source.indexOf("function setWorkFilter("), source.indexOf("function workSelect("));
  assert.match(change, /panel\.scrollTop = 0;\s+panel\.scrollTop = Math\.min\(reached, panel\.querySelector\("\.work-controls"\)\.offsetTop\);/u);
  const render = source.slice(source.indexOf("function renderOpenWork("), source.indexOf("/* ---------- Inspector ---------- */"));
  assert.match(render, /panel\.scrollTop = previous;/u);
});

test("the Names columns keep their widths when they fit, and turn the labels into bands when they do not", () => {
  const columns = [{ min: 138, weight: 1 }, { min: 138, weight: 1 }, { min: 170, weight: 5.83 }, { min: 138, weight: 1.17 }];
  const names = { labelWidth: 104, gap: 6, columns };
  const needed = 104 + 4 * 6 + 584;
  const wide = fitNamesColumns({ ...names, width: needed });
  assert.equal(wide.bands, false);
  assert.equal(wide.template, "104px minmax(138px, 1.00fr) minmax(138px, 1.00fr) minmax(170px, 5.83fr) minmax(138px, 1.17fr)");
  const bands = fitNamesColumns({ ...names, width: needed - 1 });
  assert.equal(bands.bands, true);
  assert.equal(bands.template, "minmax(138px, 1.00fr) minmax(138px, 1.00fr) minmax(170px, 5.83fr) minmax(138px, 1.17fr)", "Without the labels the words still fit");
  // The tracks of a page 1100 wide: 510 px of table with both panels open.
  const narrow = fitNamesColumns({ ...names, width: 510 });
  const sum = [...narrow.template.matchAll(/minmax\((\d+)px/g)].reduce((total, match) => total + Number(match[1]), 0);
  assert.ok(sum + 3 * 6 <= 510, `the columns take ${sum} px`);
  // The table's floor: the phases stop narrowing, and the panel may scroll.
  assert.deepEqual([...fitNamesColumns({ ...names, width: 200 }).template.matchAll(/minmax\((\d+)px/g)].map((match) => Number(match[1])), [92, 92, 92, 92]);
  // Padding goes before words do: without it the columns need 32 px less.
  const tight = fitNamesColumns({ ...names, width: 584 + 3 * 6 - 32 });
  assert.equal(tight.tight, true);
  assert.equal(tight.template, "minmax(130px, 1.00fr) minmax(130px, 1.00fr) minmax(162px, 5.83fr) minmax(130px, 1.17fr)");
  assert.equal(fitNamesColumns({ ...names, width: 584 + 3 * 6 }).tight, false);
});
