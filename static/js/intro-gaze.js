(() => {
  const stage = document.querySelector(".intro-visual");
  const canvas = stage?.querySelector(".intro-gaze-canvas");
  if (!stage || !canvas) return;

  const atlasUrl = stage.dataset.gazeAtlas;
  if (!atlasUrl) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const hasFineHover = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (!hasFineHover.matches || reduceMotion.matches) return;

  const context = canvas.getContext("2d", { alpha: true, desynchronized: true });
  if (!context) return;

  const framesPerRow = 8;
  const frameSize = 512;
  const frameCount = framesPerRow * framesPerRow;
  const faceX = 0.5;
  const faceY = 0.31;
  const response = 0.65;
  const idleReturnDelay = 1000;
  // These frames follow the observed poses in the Flow atlas: frames 48–63
  // look down, while 24–40 look up. Keep the angle map aligned to those poses.
  const gazeAnchors = [
    [-Math.PI, 16],
    [-3 * Math.PI / 4, 24],
    [-Math.PI / 2, 32],
    [-Math.PI / 4, 40],
    [0, 42],
    [Math.PI / 4, 48],
    [Math.PI / 2, 56],
    [3 * Math.PI / 4, 60],
    [Math.PI, 16],
  ];

  const atlas = new Image();

  let ready = false;
  let canvasWidth = 0;
  let canvasHeight = 0;
  let currentAngle = 0;
  let targetAngle = 0;
  let useCenterFrame = true;
  let animationFrame = 0;
  let idleTimer = 0;
  let lastFrame = -1;

  const shortestAngle = (from, to) =>
    Math.atan2(Math.sin(to - from), Math.cos(to - from));

  const frameForAngle = (angle) => {
    const normalized = Math.atan2(Math.sin(angle), Math.cos(angle));

    for (let i = 0; i < gazeAnchors.length - 1; i += 1) {
      const [startAngle, startFrame] = gazeAnchors[i];
      const [endAngle, endFrame] = gazeAnchors[i + 1];
      if (normalized >= startAngle && normalized <= endAngle) {
        const progress = (normalized - startAngle) / (endAngle - startAngle);
        const wrappedEndFrame = endFrame < startFrame ? endFrame + frameCount : endFrame;
        return startFrame + (wrappedEndFrame - startFrame) * progress;
      }
    }

    return gazeAnchors[0][1];
  };

  const resizeCanvas = () => {
    const bounds = stage.getBoundingClientRect();
    // The atlas frames are 512px wide, so a 1.25x canvas stays crisp while
    // avoiding unnecessary high-DPI redraw work on every gaze change.
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
    const width = Math.max(1, Math.round(bounds.width * pixelRatio));
    const height = Math.max(1, Math.round(bounds.height * pixelRatio));

    if (width === canvasWidth && height === canvasHeight) return;
    canvasWidth = canvas.width = width;
    canvasHeight = canvas.height = height;
    lastFrame = -1;
    if (ready) drawCurrentFrame();
  };

  const drawCurrentFrame = () => {
    if (!ready || !canvasWidth || !canvasHeight) return;

    if (useCenterFrame) {
      // Atlas frame 0 is the straight-ahead resting pose.
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(atlas, 0, 0, frameSize, frameSize, 0, 0, canvasWidth, canvasHeight);
      lastFrame = 0;
      return;
    }

    const index = Math.round(frameForAngle(currentAngle)) % frameCount;
    if (index === lastFrame) return;

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    const sx = (index % framesPerRow) * frameSize;
    const sy = Math.floor(index / framesPerRow) * frameSize;
    context.drawImage(
      atlas,
      sx,
      sy,
      frameSize,
      frameSize,
      0,
      0,
      canvasWidth,
      canvasHeight
    );
    lastFrame = index;
  };

  const animate = () => {
    animationFrame = 0;
    const delta = shortestAngle(currentAngle, targetAngle);
    currentAngle += delta * response;
    if (Math.abs(delta) < 0.004) currentAngle = targetAngle;
    drawCurrentFrame();

    if (Math.abs(delta) >= 0.004) {
      animationFrame = window.requestAnimationFrame(animate);
    }
  };

  const requestAnimation = () => {
    if (!animationFrame) animationFrame = window.requestAnimationFrame(animate);
  };

  const returnToCenter = () => {
    window.clearTimeout(idleTimer);
    idleTimer = 0;
    if (useCenterFrame) return;
    useCenterFrame = true;
    drawCurrentFrame();
  };

  const onPointerMove = (event) => {
    if (event.pointerType === "touch" || reduceMotion.matches) return;

    const bounds = stage.getBoundingClientRect();
    const originX = bounds.left + bounds.width * faceX;
    const originY = bounds.top + bounds.height * faceY;
    const dx = event.clientX - originX;
    const dy = event.clientY - originY;
    const deadZone = Math.min(window.innerWidth, window.innerHeight) * 0.02;

    if (Math.hypot(dx, dy) <= deadZone) {
      returnToCenter();
      return;
    }

    const wasCentered = useCenterFrame;
    window.clearTimeout(idleTimer);
    useCenterFrame = false;
    targetAngle = Math.atan2(dy, dx);
    if (wasCentered) currentAngle = targetAngle;
    requestAnimation();
    idleTimer = window.setTimeout(returnToCenter, idleReturnDelay);
  };

  const activate = () => {
    if (!atlas.complete || !atlas.naturalWidth) return;
    ready = true;
    resizeCanvas();
    drawCurrentFrame();
    stage.classList.add("is-gaze-ready");
  };

  atlas.addEventListener("load", activate, { once: true });
  atlas.src = atlasUrl;
  activate();

  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  window.addEventListener("blur", returnToCenter);
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) returnToCenter();
  });
  reduceMotion.addEventListener?.("change", () => {
    if (reduceMotion.matches) returnToCenter();
  });
})();
