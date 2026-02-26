// ─────────────────────────────────────────────────────────────
//  animations.js  —  Shaurya IT Services
//  Reusable Framer Motion variants & transition presets
// ─────────────────────────────────────────────────────────────

/* ── EASING CURVES ─────────────────────────────────────────── */
export const ease = {
  out:     [0.22, 1,    0.36, 1],   // smooth deceleration (default)
  in:      [0.64, 0,    0.78, 0],   // smooth acceleration
  inOut:   [0.65, 0,    0.35, 1],   // symmetric
  spring:  { type: "spring", stiffness: 260, damping: 22 },
  softSpr: { type: "spring", stiffness: 160, damping: 24 },
  bouncySpr: { type: "spring", stiffness: 380, damping: 18 },
};


/* ── SECTION-LEVEL VARIANTS ────────────────────────────────── */

/** Generic fade + rise — use on <section> wrappers */
export const sectionFadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: ease.out },
  },
};

/** Fade only — good for overlays, modals, backdrops */
export const sectionFade = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: ease.out } },
};

/** Slide in from left */
export const sectionSlideLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

/** Slide in from right */
export const sectionSlideRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

/** Scale up from slightly smaller — use on cards, modals */
export const sectionScaleUp = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.spring,
  },
};


/* ── STAGGER CONTAINERS ────────────────────────────────────── */

/** Standard stagger — suitable for grids, card lists */
export const staggerContainer = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Slow stagger — for hero sections, large feature blocks */
export const staggerSlow = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/** Fast stagger — for small chips, tags, pills */
export const staggerFast = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.04 } },
};

/** Stagger with a delayed start — use after a section header */
export const staggerDelayed = (delay = 0.3) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: delay } },
});


/* ── CHILD ITEM VARIANTS ───────────────────────────────────── */

/** Standard fade + rise — primary item animation */
export const fadeUpItem = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

/** Fade + rise with spring — for cards that should feel physical */
export const springUpItem = {
  hidden:  { opacity: 0, y: 28, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: ease.spring,
  },
};

/** Fade in from left — sidebar items, list entries */
export const fadeLeftItem = {
  hidden:  { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: ease.out },
  },
};

/** Fade in from right */
export const fadeRightItem = {
  hidden:  { opacity: 0, x: 16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: ease.out },
  },
};

/** Pop in — chips, badges, small tags */
export const popItem = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: ease.bouncySpr,
  },
};

/** Blur reveal — cinematic text/image entrance */
export const blurReveal = {
  hidden:  { opacity: 0, filter: "blur(8px)", y: 12 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: { duration: 0.65, ease: ease.out },
  },
};


/* ── HERO-SPECIFIC ─────────────────────────────────────────── */

/** Kicker / badge — appears first */
export const heroBadge = {
  hidden:  { opacity: 0, y: -16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: ease.out, delay: 0.1 },
  },
};

/** Main headline */
export const heroTitle = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: ease.out, delay: 0.25 },
  },
};

/** Subtitle / description */
export const heroSubtitle = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.out, delay: 0.45 },
  },
};

/** CTA buttons row */
export const heroCta = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: ease.out, delay: 0.6 },
  },
};

/** Side panel / stats card */
export const heroSide = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out, delay: 0.5 },
  },
};


/* ── HOVER / INTERACTION VARIANTS ──────────────────────────── */

/** Standard card lift */
export const hoverLift = {
  rest:  { y: 0,   scale: 1 },
  hover: { y: -8,  scale: 1.02, transition: { duration: 0.3, ease: ease.out } },
  tap:   { scale: 0.97 },
};

/** Subtle lift — for small chips, links */
export const hoverSubtle = {
  rest:  { y: 0 },
  hover: { y: -4, transition: { duration: 0.25, ease: ease.out } },
};

/** Button press */
export const hoverButton = {
  rest:  { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.22, ease: ease.out } },
  tap:   { scale: 0.97 },
};

/** Icon spin — decorative icons on hover */
export const hoverSpin = {
  rest:  { rotate: 0 },
  hover: { rotate: 15, transition: { duration: 0.3, ease: ease.out } },
};


/* ── MODAL / OVERLAY VARIANTS ──────────────────────────────── */

export const backdropVariant = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:    { opacity: 0, transition: { duration: 0.2 } },
};

export const modalVariant = {
  hidden:  { opacity: 0, scale: 0.88, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: ease.spring,
  },
  exit: {
    opacity: 0,
    scale: 0.88,
    y: 40,
    transition: { duration: 0.2, ease: ease.in },
  },
};

export const drawerVariant = {
  hidden:  { opacity: 0, x: "100%" },
  visible: { opacity: 1, x: 0,      transition: { duration: 0.4, ease: ease.out } },
  exit:    { opacity: 0, x: "100%", transition: { duration: 0.3, ease: ease.in  } },
};


/* ── UTILITY HELPERS ───────────────────────────────────────── */

/**
 * Build a custom fadeUp with configurable delay & duration.
 * @example withDelay(0.3)  →  { hidden, visible }
 */
export const withDelay = (delay = 0, duration = 0.55) => ({
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration, delay, ease: ease.out },
  },
});

/**
 * Build a slide variant from any direction.
 * @param {"up"|"down"|"left"|"right"} dir
 * @param {number} distance  px offset
 * @param {number} delay
 */
export const slideIn = (dir = "up", distance = 30, delay = 0) => {
  const axis  = dir === "left" || dir === "right" ? "x" : "y";
  const sign  = dir === "down" || dir === "right"  ?  1 : -1;
  return {
    hidden:  { opacity: 0, [axis]: sign * distance },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: { duration: 0.65, delay, ease: ease.out },
    },
  };
};

/**
 * Viewport props shorthand — pass directly to whileInView components.
 * @example <motion.div {...viewport()} />
 */
export const viewport = (once = true, amount = 0.15) => ({
  initial:    "hidden",
  whileInView: "visible",
  viewport:   { once, amount },
});