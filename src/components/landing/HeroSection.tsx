import React from 'react';
import { FEATURED } from '../../data/nf-constants';
import { useModal } from '../../context/ModalContext';

const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const CYAN_BTN: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12, letterSpacing: '0.08em',
  padding: '15px 28px', borderRadius: 8,
  background: 'linear-gradient(135deg, rgba(103,232,249,0.18), rgba(59,130,246,0.18))',
  border: '1px solid rgba(103,232,249,0.4)',
  color: '#a5f3fc', cursor: 'pointer', transition: 'all 0.2s',
  display: 'inline-flex', alignItems: 'center', gap: 10,
  boxShadow: '0 0 24px rgba(103,232,249,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
};

const GHOST_BTN: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12, letterSpacing: '0.08em',
  padding: '15px 24px', borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.08)',
  color: '#94a3b8', textDecoration: 'none', transition: 'all 0.2s',
  display: 'inline-flex', alignItems: 'center', gap: 8,
  background: 'transparent',
};

export const HeroSection: React.FC = () => {
  const { openSubmit } = useModal();
  const hasFeatured = FEATURED.length > 0;

  return (
    <section
      id="top"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'grid',
        gridTemplateColumns: '1.1fr 0.9fr',
        alignItems: 'center',
        gap: 64,
        padding: '120px 56px 80px',
        maxWidth: 1280,
        margin: '0 auto',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: -1,
        background: 'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(103,232,249,0.08) 0%, transparent 65%)',
      }} />

      {/* LEFT — main copy */}
      <div style={{ position: 'relative' }}>
        <div style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase',
          color: '#67e8f9', marginBottom: 28,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span
            className="nf-pulse"
            style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#67e8f9', boxShadow: '0 0 10px #67e8f9',
              display: 'inline-block',
            }}
          />
          Technology Studio · Global
        </div>

        <h1 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(48px, 6.5vw, 88px)', fontWeight: 700,
          letterSpacing: '-0.035em', lineHeight: 1.02,
          color: '#f0f4ff', marginBottom: 28,
        }}>
          We build.<br />
          We publish.<br />
          <span style={{
            background: 'linear-gradient(120deg, #67e8f9, #3b82f6)',
            WebkitBackgroundClip: 'text', backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>We amplify.</span>
        </h1>

        <p style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 18, lineHeight: 1.7, color: '#94a3b8',
          maxWidth: 520, marginBottom: 40,
        }}>
          NorthForge Studios is an AI-focused technology studio. We create our own products
          and amplify projects from developers and studios around the world.
        </p>

        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <button onClick={openSubmit} style={CYAN_BTN}>
            Submit your project <ArrowIcon />
          </button>
          <a
            href={hasFeatured ? '#featured' : '#products'}
            style={GHOST_BTN}
            onMouseEnter={e => {
              e.currentTarget.style.color = '#cbd5e1';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
            }}
          >
            {hasFeatured ? 'See featured work' : 'See our products'}
          </a>
        </div>
      </div>

      {/* RIGHT — floating razorbill logo */}
      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: '100%', maxWidth: 520,
        justifySelf: 'end',
      }}>
        <div style={{
          position: 'absolute', inset: '-8%', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(103,232,249,0.28), rgba(59,130,246,0.08) 40%, transparent 70%)',
          filter: 'blur(30px)',
        }} />
        <img
          src="/logo.svg"
          alt="NorthForge"
          className="nf-float"
          style={{
            width: '100%', maxWidth: 460,
            position: 'relative',
            filter: 'drop-shadow(0 8px 40px rgba(103,232,249,0.3)) drop-shadow(0 0 80px rgba(59,130,246,0.15))',
          }}
        />
      </div>
    </section>
  );
};
