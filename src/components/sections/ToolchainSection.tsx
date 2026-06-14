'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

export function ToolchainSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="toolchain"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 2rem',
        background: 'var(--bg-primary)',
        contentVisibility: 'auto',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <p className="eyebrow">Stack</p>
          <h2
            style={{
              margin: 0,
              color: 'var(--text-primary)',
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              lineHeight: 1.05,
              fontWeight: 300,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
            }}
          >
            What we work with
          </h2>
          <p
            style={{
              margin: '1rem auto 0',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.6,
              fontWeight: 300,
              fontSize: '0.9rem',
            }}
          >
            Tools grouped by what they do — so you know exactly what you&apos;re getting.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '1rem',
          }}
        >
          {portfolio.toolchain.map((group) => (
            <motion.div
              key={group.label}
              variants={cardVariants}
              style={{
                padding: '1.5rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: '12px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                }}
              >
                {group.label}
              </h3>
              <p
                style={{
                  margin: '0.35rem 0 0',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.75rem',
                  lineHeight: 1.4,
                  fontWeight: 300,
                }}
              >
                {group.responsibility}
              </p>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  marginTop: '1rem',
                }}
              >
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    style={{
                      fontSize: '0.72rem',
                      color: 'var(--text-quaternary)',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {tool}
                    {group.tools.indexOf(tool) < group.tools.length - 1 && (
                      <span style={{ margin: '0 0.35rem', color: 'var(--text-quaternary)', opacity: 0.3 }}>/</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
