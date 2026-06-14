'use client';

import { useScroll, type MotionValue } from 'framer-motion';

interface SectionProgress {
  /** Scroll progress from 0 (top) to 1 (bottom) */
  scrollYProgress: MotionValue<number>;
}

/**
 * Tracks overall page scroll progress using framer-motion's useScroll.
 * Returns scrollYProgress as a MotionValue<number> (0–1).
 */
export function useSectionProgress(): SectionProgress {
  const { scrollYProgress } = useScroll();

  return { scrollYProgress };
}
