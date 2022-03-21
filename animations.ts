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
      duration: 0.8,
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
