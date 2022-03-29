export const sectionVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.2,
      duration: 3
    }
  }
}

export const chatVariants = {
  offscreen: {
    opacity: 0,
    y: 300,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      mass: 0.2,
      damping: 20,
    }
  }
}

export const howItWorksContainerVariants = {
  offscreen: { opacity: 1, scale: 0 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  }
};

export const howItWorksItemVariants = {
  offscreen: { y: 10, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.3
    }
  }
};

export const navBarVariants = {
  offscreen: {
    opacity: 0,
    y: "-15%"
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 125,
      mass: 0.2,
      damping: 20,
    }
  }
}
