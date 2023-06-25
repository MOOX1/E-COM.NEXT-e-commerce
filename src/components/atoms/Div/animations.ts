import { AnimationProps } from 'framer-motion';

type animations = AnimationProps;

export const TopForBottom: animations = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export const RightForLeft: animations = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};

export const BottomForTop: animations = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5, ease: 'easeInOut' },
};
