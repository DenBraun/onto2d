/**
 * Pan and zoom for one SVG stage. A pinch or Ctrl/Cmd+wheel zooms around the
 * pointer, a plain wheel or a drag on the background pans, and fit() frames the
 * drawing at a readable scale. When `wheelPans()` is false (the page itself
 * scrolls), a plain wheel is left to the page.
 */
export function createGraphViewport(svg, group, {
  minScale = 0.15, maxScale = 2.5, interactive = () => true, onChange = () => {}, wheelPans = () => true
} = {}) {
  let scale = 1;
  let x = 0;
  let y = 0;
  let content = { width: 1, height: 1 };
  let drag = null;
  let suppressClick = false;

  const apply = () => {
    group.setAttribute("transform", `translate(${Math.round(x * 10) / 10} ${Math.round(y * 10) / 10}) scale(${Math.round(scale * 1000) / 1000})`);
    onChange();
  };
  const size = () => {
    const rect = svg.getBoundingClientRect();
    return { width: Math.max(1, rect.width), height: Math.max(1, rect.height) };
  };
  const clamp = (value) => Math.min(maxScale, Math.max(minScale, value));

  function zoomAt(factor, clientX, clientY) {
    const rect = svg.getBoundingClientRect();
    const px = clientX - rect.left;
    const py = clientY - rect.top;
    const next = clamp(scale * factor);
    x = px - ((px - x) * next) / scale;
    y = py - ((py - y) * next) / scale;
    scale = next;
    apply();
  }

  function zoomBy(factor) {
    const rect = svg.getBoundingClientRect();
    zoomAt(factor, rect.left + rect.width / 2, rect.top + rect.height / 2);
  }

  function panBy(dx, dy) {
    x += dx;
    y += dy;
    apply();
  }

  /** Centre a content point, optionally at a given scale. */
  function centerOn(point, nextScale = scale) {
    const { width, height } = size();
    scale = clamp(nextScale);
    x = width / 2 - point.x * scale;
    y = height / 2 - point.y * scale;
    apply();
  }

  /**
   * Fit the whole drawing. Below the readable scale, keep that scale and centre
   * the anchor (the focused card) instead, so labels never become illegible.
   * With `start`, a drawing wider than the stage opens where it starts, with its
   * first column on stage, unless that would leave the anchor off stage. The
   * stage never shows free room beside a drawing that does not fit it.
   */
  function fit({ padding = 28, maxFitScale = 1, readableScale = 0.62, anchor = null, bottomInset = 0, start = false, column = null } = {}) {
    const { width, height } = size();
    const available = { width: Math.max(1, width - padding * 2), height: Math.max(1, height - padding * 2 - bottomInset) };
    const fitted = Math.min(available.width / content.width, available.height / content.height, maxFitScale);
    if (fitted < readableScale && anchor) {
      scale = clamp(readableScale);
      const room = { width, height: height - bottomInset };
      const drawn = { width: content.width * scale, height: content.height * scale };
      x = room.width / 2 - anchor.x * scale;
      y = room.height / 2 - anchor.y * scale;
      if (start && anchor.x * scale < room.width - padding) x = 0;
      if (column && (column.bottom - column.top) * scale > room.height - padding * 2) y = padding - column.top * scale;
      // Keep the drawing's top-left edge inside the stage when it fits horizontally or vertically.
      x = drawn.width <= room.width ? (room.width - drawn.width) / 2 : Math.min(0, Math.max(room.width - drawn.width, x));
      y = drawn.height <= room.height ? (room.height - drawn.height) / 2 : Math.min(0, Math.max(room.height - drawn.height, y));
    } else {
      scale = clamp(fitted);
      x = (width - content.width * scale) / 2;
      y = (height - bottomInset - content.height * scale) / 2;
    }
    apply();
  }

  /**
   * After the drawing changed: keep a card where it was on screen, then bring `box` (the card and what
   * was added to it) on stage as far as it can go without losing the card, zooming out no further than
   * the readable scale. `corner` is an overlay in the stage's lower right: what reaches under it stays above it.
   */
  function hold({ from, to, box = null, padding = 28, readableScale = 0.62, bottomInset = 0, corner = null }) {
    const { width, height } = size();
    const room = { width, height: height - bottomInset };
    const screen = { x: x + from.x * scale, y: y + from.y * scale };
    if (box) {
      const wanted = Math.min((room.width - padding * 2) / box.width, (room.height - padding * 2) / box.height);
      scale = clamp(Math.min(scale, Math.max(readableScale, wanted)));
    }
    x = screen.x - to.x * scale;
    y = screen.y - to.y * scale;
    if (box) {
      const shift = (offset, low, size, extent, point, half) => {
        const start = offset + low * scale;
        const end = start + size * scale;
        let move = end > extent - padding ? extent - padding - end : 0;
        if (start + move < padding) move = padding - start;
        // The card itself comes first when the box does not fit.
        const card = offset + point * scale + move;
        const reach = half * scale + padding;
        if (card > extent - reach) move -= card - (extent - reach);
        if (offset + point * scale + move < reach) move = reach - (offset + point * scale);
        return offset + move;
      };
      x = shift(x, box.x, box.width, room.width, to.x, (to.width ?? 0) / 2);
      if (corner && x + (box.x + box.width) * scale > width - corner.width) room.height = Math.min(room.height, height - corner.height);
      y = shift(y, box.y, box.height, room.height, to.y, (to.height ?? 0) / 2);
    }
    // No free room beside a drawing that does not fit, and nothing off stage of one that does.
    const within = (offset, drawn, extent) => (drawn <= extent ? Math.max(0, Math.min(extent - drawn, offset)) : Math.min(0, Math.max(extent - drawn, offset)));
    x = within(x, content.width * scale, room.width);
    y = within(y, content.height * scale, room.height);
    apply();
  }

  function setContent(width, height) {
    content = { width: Math.max(1, width), height: Math.max(1, height) };
  }

  const onWheel = (event) => {
    // A stage that shows a table or a list instead of the drawing leaves the wheel to them and to the browser.
    if (!svg.getBoundingClientRect().width) return;
    const zoom = event.ctrlKey || event.metaKey;
    if (!zoom && !wheelPans()) return;
    event.preventDefault();
    if (zoom) {
      zoomAt(Math.exp(-event.deltaY * 0.0022), event.clientX, event.clientY);
    } else {
      const unit = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? size().height : 1;
      panBy(-event.deltaX * unit, -event.deltaY * unit);
    }
  };
  const onPointerDown = (event) => {
    if (event.button !== 0 || !interactive(event.target)) return;
    drag = { id: event.pointerId, startX: event.clientX, startY: event.clientY, lastX: event.clientX, lastY: event.clientY, moved: false };
  };
  const onPointerMove = (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    const dx = event.clientX - drag.lastX;
    const dy = event.clientY - drag.lastY;
    if (!drag.moved && Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 3) {
      drag.moved = true;
      svg.setPointerCapture?.(event.pointerId);
      svg.parentElement?.setAttribute("data-dragging", "true");
    }
    if (drag.moved) panBy(dx, dy);
    drag.lastX = event.clientX;
    drag.lastY = event.clientY;
  };
  const onPointerUp = (event) => {
    if (!drag || drag.id !== event.pointerId) return;
    suppressClick = drag.moved;
    drag = null;
    svg.parentElement?.removeAttribute("data-dragging");
  };
  const onClickCapture = (event) => {
    if (!suppressClick) return;
    suppressClick = false;
    event.stopPropagation();
    event.preventDefault();
  };
  // On the stage, so the legend and the minimap lying over the drawing do not swallow a pinch or leave it to the browser's page zoom.
  (svg.parentElement ?? svg).addEventListener("wheel", onWheel, { passive: false });
  svg.addEventListener("pointerdown", onPointerDown);
  svg.addEventListener("pointermove", onPointerMove);
  svg.addEventListener("pointerup", onPointerUp);
  svg.addEventListener("pointercancel", onPointerUp);
  svg.addEventListener("click", onClickCapture, true);
  apply();

  return Object.freeze({
    setContent,
    fit,
    zoomBy,
    centerOn,
    hold,
    get scale() { return scale; },
    /** The visible content rectangle, in drawing coordinates. */
    view() {
      const { width, height } = size();
      return { x: -x / scale, y: -y / scale, width: width / scale, height: height / scale };
    }
  });
}
