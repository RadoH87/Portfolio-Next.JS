export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fadeInR = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    // rotate: 360,
    transition: {
      duration: 1,
    },
  },
};

export const stagger = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const routeAnimation = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.1,
      duration: 0.1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.1,
      ease: "easeInOut",
    },
  },
};

export const cardVariants = {
  offscreen: { y: 150 },
  onscreen: {
    y: 0,

    transition: {
      type: "spring",

      bounce: 0.4,
      duration: 1,
    },
  },
};

export const charAnimation = {
  initial: {
    opacity: 0,
    x: -200,
  },
  animate: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.8,
    },
  },
};
