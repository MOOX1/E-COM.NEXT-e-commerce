import { AnimationProps } from 'framer-motion';

type animations = AnimationProps;

export const TopForButtom: animations = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

export const RigthForLeft: animations = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};

export const ButtomForTop: animations = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' }
};
