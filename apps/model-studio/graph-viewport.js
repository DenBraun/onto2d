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
   */
  function fit({ padding = 28, maxFitScale = 1, readableScale = 0.62, anchor = null, bottomInset = 0 } = {}) {
    const { width, height } = size();
    const available = { width: Math.max(1, width - padding * 2), height: Math.max(1, height - padding * 2 - bottomInset) };
    const fitted = Math.min(available.width / content.width, available.height / content.height, maxFitScale);
    if (fitted < readableScale && anchor) {
      scale = clamp(readableScale);
      x = width / 2 - anchor.x * scale;
      y = (height - bottomInset) / 2 - anchor.y * scale;
      // Keep the drawing's top-left edge inside the stage when it fits horizontally or vertically.
      if (content.width * scale <= width) x = (width - content.width * scale) / 2;
      if (content.height * scale <= height - bottomInset) y = (height - bottomInset - content.height * scale) / 2;
    } else {
      scale = clamp(fitted);
      x = (width - content.width * scale) / 2;
      y = (height - bottomInset - content.height * scale) / 2;
    }
    apply();
  }

  function setContent(width, height) {
    content = { width: Math.max(1, width), height: Math.max(1, height) };
  }

  const onWheel = (event) => {
    if (svg.dataset.disabled === "true") return;
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
    if (svg.dataset.disabled === "true" || event.button !== 0 || !interactive(event.target)) return;
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
  svg.addEventListener("wheel", onWheel, { passive: false });
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
    panBy,
    centerOn,
    get scale() { return scale; },
    /** The visible content rectangle, in drawing coordinates. */
    view() {
      const { width, height } = size();
      return { x: -x / scale, y: -y / scale, width: width / scale, height: height / scale };
    },
    reset() {
      scale = 1;
      x = 0;
      y = 0;
      apply();
    }
  });
}
