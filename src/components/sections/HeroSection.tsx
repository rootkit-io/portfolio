'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SplittingText } from '@/components/animate-ui/primitives/texts/splitting';
import { RollingText } from '@/components/animate-ui/primitives/texts/rolling';
import { LiquidButton } from '@/components/animate-ui/components/buttons/liquid';
import { ScrollIndicator } from '@/components/ui/ScrollIndicator';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.2]);

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        willChange: 'transform',
        transform: 'translateZ(0)',
      }}
    >
      {/* 16:9 cropped background image — never reveals outside the crop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          overflow: 'hidden',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero-bg.jpg"
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
        {/* Overlay to prevent any possible right-click save and improve text readability */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(10, 10, 10, 0.5) 0%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.6) 100%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          padding: '2rem',
          maxWidth: '960px',
          y: contentY,
          opacity: contentOpacity,
        }}
      >
        <div
          style={{
            width: '32px',
            height: '1px',
            background: 'var(--text-tertiary)',
            marginBottom: '2.5rem',
            opacity: 0.5,
          }}
        />

        <SplittingText
          text="Websites that work"
          type="chars"
          stagger={0.02}
          inView={true}
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          style={{
            margin: '0 0 0.25rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        />

        <SplittingText
          text="as hard as you do."
          type="chars"
          stagger={0.02}
          inView={true}
          initial={{ y: 60, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] as any }}
          style={{
            margin: '0 0 1.5rem',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.04em',
            color: 'var(--text-primary)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        />

        <RollingText
          text="Web Development · Web Apps · Technical Partner for Founders"
          delay={800}
          inView={true}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
            color: 'var(--text-secondary)',
            letterSpacing: '0.06em',
            fontWeight: 300,
            maxWidth: '600px',
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginTop: '3rem' }}
        >
          <LiquidButton
            asChild
            variant="ghost"
            size="lg"
            hoverScale={1.02}
            className="border border-white/15 text-white/80 hover:text-white font-mono tracking-widest rounded-md text-xs uppercase"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const target = document.getElementById('projects');
                if (target) {
                  target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              See the work ↓
            </a>
          </LiquidButton>
        </motion.div>
      </motion.div>

      <ScrollIndicator />
    </motion.section>
  );
}
