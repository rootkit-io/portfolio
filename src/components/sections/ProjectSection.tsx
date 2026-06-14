'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Magnetic } from '@/components/animate-ui/primitives/effects/magnetic';
import type { ProjectData } from '@/lib/portfolio-types';

interface ProjectSectionProps {
  project: ProjectData;
  index: number;
}

const titleVariants = {
  hidden: { opacity: 0, x: -40, filter: 'blur(4px)' },
  visible: {
    opacity: 1,
    x: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, delay: 0.15 },
  },
};

const contentVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any, delay: 0.35 + i * 0.1 },
  }),
};

const pillVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: 'spring' as const, stiffness: 120, damping: 18, delay: 0.6 + i * 0.06 },
  }),
};

export function ProjectSection({ project, index }: ProjectSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-15%' });

  const statusLabel = project.status.replace('-', ' ');

  return (
    <section
      ref={sectionRef}
      id={project.id}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        contentVisibility: 'auto',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* Full-bleed background image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/project-${index}.jpg`}
          alt=""
          draggable={false}
          onContextMenu={(e) => e.preventDefault()}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
            userSelect: 'none',
          }}
        />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.15 }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: 'linear-gradient(to right, rgba(10, 10, 10, 0.85) 0%, rgba(10, 10, 10, 0.5) 50%, rgba(10, 10, 10, 0.3) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Edge fades — smooth transition between project backgrounds */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '25vh', zIndex: 2, background: 'linear-gradient(to bottom, #0A0A0A 0%, #0A0A0A 15%, transparent 100%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '25vh', zIndex: 2, background: 'linear-gradient(to top, #0A0A0A 0%, #0A0A0A 15%, transparent 100%)', pointerEvents: 'none' }} />

      {/* Left-aligned content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ type: 'spring' as const, stiffness: 80, damping: 22, delay: 0.15 }}
        style={{
          position: 'relative',
          zIndex: 3,
          width: '100%',
          maxWidth: '680px',
          padding: '4rem 3rem',
          marginLeft: '5%',
        }}
      >
        {/* Index label */}
        <motion.span
          custom={0}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.65rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: 'var(--text-tertiary)',
            marginBottom: '1rem',
            display: 'block',
          }}
        >
          Project {String(index + 1).padStart(2, '0')}
        </motion.span>

        {/* Title */}
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          {project.title}
        </motion.h2>

        {/* Role */}
        <motion.p
          custom={1}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            marginTop: '0.75rem',
            fontFamily: 'var(--font-body)',
            fontSize: '0.85rem',
            color: 'var(--text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {project.role}
        </motion.p>

        {/* Description */}
        <motion.p
          custom={2}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            marginTop: '1.25rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            fontSize: '0.95rem',
            fontWeight: 300,
            maxWidth: '480px',
          }}
        >
          {project.description}
        </motion.p>

        {/* Status & Badge */}
        <motion.div
          custom={3}
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginTop: '1.5rem',
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.3rem 0.85rem',
              border: '1px solid var(--border-subtle)',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.68rem',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              letterSpacing: '0.06em',
            }}
          >
            <span
              style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--text-secondary)',
                opacity: 0.5,
              }}
            />
            {statusLabel}
          </span>

          {project.badge && (
            <span
              style={{
                display: 'inline-flex', padding: '0.3rem 0.85rem',
                border: '1px solid var(--border-subtle)',
                borderRadius: '100px', fontFamily: 'var(--font-body)',
                fontSize: '0.68rem', color: 'var(--text-secondary)',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}
            >
              {project.badge}
            </span>
          )}
        </motion.div>

        {/* Stack pills */}
        <motion.div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '2rem',
          }}
        >
          {project.stack.map((tech, techIdx) => (
            <motion.div
              key={tech}
              custom={techIdx}
              variants={pillVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Magnetic strength={0.2} range={50} asChild>
                <span className="tool-pill" style={{ cursor: 'default', fontSize: '0.78rem' }}>
                  {tech}
                </span>
              </Magnetic>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
