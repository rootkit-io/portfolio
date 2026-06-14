'use client';

import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const charVariants: Variants = {
  hidden: {
    filter: 'blur(8px)',
    y: 20,
    opacity: 0,
  },
  visible: (i: number) => ({
    filter: 'blur(0px)',
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: i,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export function TextReveal({
  children,
  className = '',
  delay = 0,
  as = 'h1',
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const characters = children.split('');

  // Use motion components mapped by tag name
  const MotionTag = motion[as] as typeof motion.h1;

  return (
    <MotionTag
      ref={ref as any}
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
      aria-label={children}
    >
      {characters.map((char, index) => {
        if (char === ' ') {
          return (
            <span
              key={`space-${index}`}
              style={{
                display: 'inline-block',
                width: '0.3em',
              }}
            />
          );
        }

        return (
          <motion.span
            key={`char-${index}`}
            custom={delay + index * 0.03}
            variants={charVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{
              display: 'inline-block',
              willChange: 'transform, filter, opacity',
            }}
            aria-hidden="true"
          >
            {char}
          </motion.span>
        );
      })}
    </MotionTag>
  );
}
