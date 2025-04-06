export const commonAnimations = {
  containerVariants: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  },

  itemVariants: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },

  imageHover: {
    scale: 1.05,
    transition: { duration: 0.3 },
  },

  buttonTap: {
    scale: 0.95,
  },
};
