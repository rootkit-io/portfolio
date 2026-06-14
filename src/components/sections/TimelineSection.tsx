'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import type { TimelineEntry } from '@/lib/portfolio-types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const entryVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

export function TimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="timeline"
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
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '680px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <p className="eyebrow">Background</p>
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
            Where I&apos;ve been
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem',
          }}
        >
          {portfolio.timeline.map((item: TimelineEntry, index: number) => (
            <motion.div
              key={`${item.company}-${index}`}
              variants={entryVariants}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.35rem',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.3rem',
                    fontWeight: 400,
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.company}
                </h3>
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'baseline',
                    gap: '0.75rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    {item.role}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.7rem',
                      color: 'var(--text-quaternary)',
                    }}
                  >
                    {item.period}
                  </span>
                </div>
              </div>

              <p
                style={{
                  margin: '0.75rem 0 0',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  fontWeight: 300,
                }}
              >
                {item.summary}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.35rem',
                  marginTop: '0.75rem',
                }}
              >
                {item.focus.map((f: string) => (
                  <span
                    key={f}
                    style={{
                      display: 'inline-flex',
                      padding: '0.15rem 0.6rem',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      color: 'var(--text-quaternary)',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>

              {index < portfolio.timeline.length - 1 && (
                <div
                  style={{
                    height: '1px',
                    background: 'var(--border-subtle)',
                    marginTop: '2.5rem',
                    opacity: 0.5,
                  }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
