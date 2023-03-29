export const menuExpanded = {
  hide: {
    scale: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  show: {
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
    },
  },
  exit: {
    scale: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      delay: 1,
    },
  },
}

export const menuLinks = {
  hide: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: -20,
  },
}

export const menuStagger = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
      staggerDirection: 1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.3,
      staggerDirection: -1,
      delay: 0.5,
    },
  },
}

export const dropdownStagger = {
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
}

export const pageTransition = {
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
    x: '100vw',
    transition: {
      type: 'spring',
      stiffness: 100,
      bounce: 10,
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
}

export const welcomeAnimation = {
  hide: {
    width: 0,
  },
  show: {
    width: '100%',
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}

export const welcomeContent = {
  hide: {
    opacity: 0,
    display: 'none',
  },
  show: {
    opacity: 1,
    display: 'flex',
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.5,
    },
  },
}

export const profileImageAnim = {
  hide: {
    opacity: 0,
    y: -20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
}
