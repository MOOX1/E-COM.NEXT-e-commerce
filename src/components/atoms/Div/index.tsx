'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { AnimationProps } from 'framer-motion';
import React, { CSSProperties } from 'react';

interface IDivProps extends AnimationProps {
  className: string;
  children: React.ReactNode;
  handleClick?: () => void;
  style: CSSProperties;
}

export default function Div({
  children,
  className,
  animate,
  exit,
  initial,
  transition,
  variants,
  style,
  handleClick,
}: Partial<IDivProps>) {
  return (
    <AnimatePresence>
      <motion.div
        style={style}
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
