'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { AnimationProps } from 'framer-motion';
import React from 'react';

interface DivProps extends AnimationProps {
  className: string;
  children: React.ReactNode;
  handleClick?: () => void;
}

export default function Div({
  children,
  className,
  animate,
  exit,
  initial,
  transition,
  variants,
  handleClick
}: Partial<DivProps>) {
  return (
    <AnimatePresence>
      <motion.div
        onClick={handleClick}
        animate={animate}
        exit={exit}
        initial={initial}
        transition={transition}
        variants={variants}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
