'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/portfolio';
import type { TeamMember } from '@/lib/portfolio-types';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const memberVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 },
  },
};

export function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section
      ref={sectionRef}
      id="team"
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '6rem 2rem',
        background: 'var(--bg-primary)',
        contentVisibility: 'auto',
      }}
    >
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: '960px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem' }}
        >
          <p className="eyebrow">Who we are</p>
          <h2
            style={{
              margin: 0,
              color: 'var(--text-primary)',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              lineHeight: 1.05,
              fontWeight: 300,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.03em',
            }}
          >
            The team
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
          }}
        >
          {portfolio.team.map((member: TeamMember) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              style={{ cursor: 'default' }}
            >
              <h3
                style={{
                  margin: 0,
                  fontSize: 'clamp(1.3rem, 2vw, 1.8rem)',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}
              >
                {member.name}
              </h3>

              <div
                style={{
                  width: '24px',
                  height: '1px',
                  background: 'var(--text-tertiary)',
                  margin: '0.75rem 0 0.75rem',
                  opacity: 0.4,
                }}
              />

              <p
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {member.role}
              </p>

              <p
                style={{
                  margin: '0.75rem 0 0',
                  color: 'var(--text-tertiary)',
                  fontSize: '0.88rem',
                  lineHeight: 1.65,
                  fontWeight: 300,
                  maxWidth: '300px',
                }}
              >
                {member.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
