'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShimmeringText } from '@/components/animate-ui/primitives/texts/shimmering';
import { portfolio } from '@/data/portfolio';

export function BuildPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <motion.section
      ref={sectionRef}
      id="approach"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        contentVisibility: 'auto',
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 0.05, scale: 1 } : {}}
        transition={{ duration: 1.5 }}
        style={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255,255,255,0.04), transparent 70%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '900px',
          textAlign: 'center',
          width: '100%',
          padding: '0 1rem',
        }}
      >
        <div style={{ marginBottom: '1.5rem' }}>
          <ShimmeringText
            text="APPROACH"
            duration={3}
            color="var(--text-tertiary)"
            shimmeringColor="var(--text-primary)"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.7rem',
              letterSpacing: '0.2em',
              fontWeight: 500,
            }}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
            fontWeight: 300,
            lineHeight: 1.4,
            color: 'var(--text-primary)',
            maxWidth: '780px',
            margin: '0 auto',
            hyphens: 'none',
          }}
        >
          {portfolio.philosophy.text}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ delay: 1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '1px',
            background: 'linear-gradient(90deg, transparent, var(--text-tertiary), transparent)',
            margin: '3rem auto 0',
            maxWidth: '300px',
            width: '100%',
            transformOrigin: 'center',
            opacity: 0.6,
          }}
        />
      </div>
    </motion.section>
  );
}
