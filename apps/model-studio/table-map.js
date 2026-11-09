/**
 * The Map density of the table of arisings: every arising is a small square tile, and the whole
 * table fits one screen. This module answers one question, how large a tile can be.
 *
 * A column's width is counted in tiles per line. Those are handed out one at a time, always to the
 * phase with the most tiles per line still owed for its largest cell, so widths stay proportional
 * to each phase's largest cell. More room only ever adds to that sequence, which keeps the answer
 * monotonic: a larger space never gives a smaller tile.
 */

const asGap = (gap) => (typeof gap === "function" ? gap : () => gap);

/** The fewest tiles per line that make a column at least `minimum` pixels wide. */
function floorSeats(minimum, step, gap, chrome) {
  return Math.max(1, Math.ceil((minimum - chrome + gap) / step));
}

/** Tiles per line for each column: the floors first, then one at a time to the largest quotient, never beyond the largest cell. */
function handOutSeats(weights, floors, budget) {
  const seats = [...floors];
  let left = budget - seats.reduce((sum, value) => sum + value, 0);
  while (left > 0) {
    let best = -1;
    let bestQuotient = 0;
    weights.forEach((weight, index) => {
      if (seats[index] >= weight) return;
      const quotient = weight / (seats[index] + 1);
      if (quotient > bestQuotient) {
        best = index;
        bestQuotient = quotient;
      }
    });
    if (best < 0) break;
    seats[best] += 1;
    left -= 1;
  }
  return seats;
}

/** What is left of the width goes to the columns by the same weights, so that the columns fill the grid. */
function spread(widths, weights, available) {
  const spare = available - widths.reduce((sum, value) => sum + value, 0);
  if (spare <= 0) return widths;
  const total = weights.reduce((sum, value) => sum + value, 0);
  const extra = weights.map((weight) => Math.floor((spare * weight) / total));
  let rest = spare - extra.reduce((sum, value) => sum + value, 0);
  for (let index = extra.length - 1; rest > 0; index = (index + extra.length - 1) % extra.length) {
    extra[index] += 1;
    rest -= 1;
  }
  return widths.map((width, index) => width + extra[index]);
}

/** The layout of one tile size: columns, tiles per line, row heights and the height of the whole grid. */
function layoutAt(tile, { counts, weights, phases, width, gapOf, labelWidth, headHeight, columnGap, rowGap, cellChrome, minRowHeight, minColumns }) {
  const gap = gapOf(tile);
  const step = tile + gap;
  const available = width - labelWidth - columnGap * phases;
  const floors = minColumns.map((minimum) => floorSeats(minimum, step, gap, cellChrome));
  const budget = Math.floor((available + phases * (gap - cellChrome)) / step);
  const roomy = budget >= floors.reduce((sum, value) => sum + value, 0);
  const perLine = roomy ? handOutSeats(weights, floors, budget) : floors;
  const needed = perLine.map((seats, index) => Math.max(seats * step - gap + cellChrome, minColumns[index]));
  const columns = spread(needed, weights, available);
  const rowHeights = counts.map((row) => Math.max(minRowHeight, ...row.map((count, index) => (
    count === 0 ? 0 : Math.ceil(count / perLine[index]) * step - gap + cellChrome
  ))));
  const height = headHeight + rowHeights.reduce((sum, value) => sum + value + rowGap, 0);
  return { tile, gap, columns, perLine, rowHeights, height, roomy };
}

/**
 * The largest whole tile for which every row fits.
 *
 * `rows` holds per-phase counts per level, `width` and `height` the room for the grid with its
 * heading row. `gap` is a number or a function of the tile. `minColumn` is a number or one number
 * per phase. When even `minTile` does not fit, `fits` is false and the result is the layout at
 * `minTile`, with the height and width it needs, so that the panel may scroll.
 */
export function fitTableMap({
  rows, width, height, gap = 3, labelWidth = 112, headHeight = 26, minTile = 10, maxTile = 40,
  columnGap = 4, rowGap = 4, cellChrome = 8, minRowHeight = 34, minColumn = 0
}) {
  const phases = Math.max(0, ...rows.map((row) => row.length));
  const counts = rows.map((row) => Array.from({ length: phases }, (_, index) => row[index] ?? 0));
  const weights = Array.from({ length: phases }, (_, index) => Math.max(1, ...counts.map((row) => row[index])));
  const minColumns = Array.from({ length: phases }, (_, index) => (Array.isArray(minColumn) ? minColumn[index] ?? 0 : minColumn));
  const settings = { counts, weights, phases, width, gapOf: asGap(gap), labelWidth, headHeight, columnGap, rowGap, cellChrome, minRowHeight, minColumns };
  for (let tile = maxTile; tile >= minTile; tile -= 1) {
    const layout = layoutAt(tile, settings);
    if (layout.roomy && layout.height <= height) {
      const { roomy: _roomy, ...result } = layout;
      return { fits: true, ...result };
    }
  }
  const { roomy: _roomy, ...result } = layoutAt(minTile, settings);
  return { fits: false, ...result };
}

/** The tile's gap: a few pixels that grow slowly with it. */
export function tileGap(tile) {
  return Math.max(2, Math.round(tile / 7));
}

/** Per-phase counts per level, for `fitTableMap`: only levels that hold arisings get a row. */
export function tableMapRows(items, levels, phases) {
  const rows = [];
  for (const level of levels) {
    const row = phases.map((phase) => items.filter((node) => node.level === level.value && node.phase === phase.value).length);
    if (row.some((count) => count > 0)) rows.push(row);
  }
  return rows;
}

/**
 * How strongly a tile is tinted, in percent of the evidence colour. A tile with no cited cause keeps
 * the neutral surface, and a single cited cause must already differ from it, so the scale starts at
 * 15. `null` means the arising has no causes in the graph.
 */
export function evidenceTint(evidence) {
  if (!evidence || evidence.total === 0) return null;
  if (evidence.supported === 0) return 0;
  return Math.round(15 + 85 * (evidence.supported / evidence.total));
}

/** The first word of a domain's name, for a chip that has no room for all of it. */
export function shortDomainName(name) {
  return String(name).trim().split(/\s+/u)[0].replace(/[,;:.]+$/u, "");
}

/** Numbers of levels as a reader says them: `levels 8 to 13`, or a list when they are not consecutive. */
export function levelRangeText(values) {
  if (values.length === 0) return "";
  if (values.length === 1) return `level ${values[0]}`;
  const consecutive = values.every((value, index) => index === 0 || value === values[index - 1] + 1);
  return consecutive ? `levels ${values[0]} to ${values.at(-1)}` : `levels ${values.join(", ")}`;
}

/**
 * The columns of the Names density for a table `width` wide. Each phase asks for `min`, enough for its longest word, and
 * shares what is left by `weight`. When that does not fit beside the level labels, the labels become bands above their rows
 * (`bands`). A width that still falls short first takes `tightChrome` pixels of padding from each column (`tight`), then narrows
 * the phases in proportion, down to `floor`, and only below that may the table scroll.
 */
export function fitNamesColumns({ width, labelWidth, gap, columns, tightChrome = 8, floor = 92 }) {
  const needed = columns.reduce((sum, column) => sum + column.min, 0);
  const track = (min, weight) => `minmax(${min}px, ${weight.toFixed(2)}fr)`;
  if (labelWidth + gap * columns.length + needed <= width) {
    return { bands: false, tight: false, template: [`${labelWidth}px`, ...columns.map((column) => track(column.min, column.weight))].join(" ") };
  }
  const room = width - gap * (columns.length - 1);
  if (needed <= room) return { bands: true, tight: false, template: columns.map((column) => track(column.min, column.weight)).join(" ") };
  const scale = Math.min(1, room / (needed - tightChrome * columns.length));
  return { bands: true, tight: true, template: columns.map((column) => track(Math.max(floor, Math.floor((column.min - tightChrome) * scale)), column.weight)).join(" ") };
}
