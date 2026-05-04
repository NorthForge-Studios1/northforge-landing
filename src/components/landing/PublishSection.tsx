import React from 'react';
import { HOW_IT_WORKS, OFFERS } from '../../data/nf-constants';
import { useModal } from '../../context/ModalContext';

const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

export const PublishSection: React.FC = () => {
  const { openSubmit } = useModal();

  return (
    <section
      id="publish"
      style={{
        padding: '110px 56px',
        borderTop: '1px solid rgba(103,232,249,0.06)',
        borderBottom: '1px solid rgba(103,232,249,0.06)',
        background: 'linear-gradient(180deg, rgba(103,232,249,0.02), transparent 40%, rgba(59,130,246,0.025))',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#67e8f9', marginBottom: 16,
          display: 'flex', alignItems: 'center', gap: 10,
        }}>
          <span style={{ width: 24, height: 1, background: 'linear-gradient(to right, #67e8f9, transparent)', display: 'inline-block' }} />
          Publish With Us
        </p>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700,
          letterSpacing: '-0.03em', color: '#f0f4ff',
          marginBottom: 14, lineHeight: 1.08,
        }}>
          Get your product in front<br />
          of the right people.
        </h2>
        <p style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, lineHeight: 1.7,
          color: '#94a3b8', maxWidth: 560, marginBottom: 72,
        }}>
          Whether you're an indie shipping your first tool or an established studio launching a new product —
          if it's real and solves a real problem, we want to amplify it. We evaluate every submission
          individually. No automated listings.
        </p>

        {/* Steps */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 32, marginBottom: 72,
        }}>
          {HOW_IT_WORKS.map(({ step, title, desc }) => (
            <div key={step} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                letterSpacing: '0.12em', color: 'rgba(103,232,249,0.55)',
              }}>{step}</div>
              <div style={{ width: 36, height: 1, background: 'linear-gradient(to right, #67e8f9, transparent)' }} />
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700,
                color: '#e2e8f0', letterSpacing: '-0.02em',
              }}>{title}</h3>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                lineHeight: 1.7, color: '#94a3b8',
              }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* What we offer */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 1, background: 'rgba(103,232,249,0.08)',
          border: '1px solid rgba(103,232,249,0.08)', borderRadius: 12,
          overflow: 'hidden', marginBottom: 56,
        }}>
          {OFFERS.map(({ glyph, label, desc }) => (
            <div key={label} style={{ background: '#080b12', padding: '26px 28px' }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: 18,
                color: '#67e8f9', marginBottom: 10,
              }}>{glyph}</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 14,
                fontWeight: 600, color: '#e2e8f0', marginBottom: 6,
              }}>{label}</div>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif", fontSize: 13,
                color: '#64748b', lineHeight: 1.55,
              }}>{desc}</div>
            </div>
          ))}
        </div>

        <button
          onClick={openSubmit}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: '0.08em',
            padding: '15px 28px', borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(103,232,249,0.18), rgba(59,130,246,0.18))',
            border: '1px solid rgba(103,232,249,0.4)',
            color: '#a5f3fc', cursor: 'pointer', transition: 'all 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            boxShadow: '0 0 24px rgba(103,232,249,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          Submit your project <ArrowIcon />
        </button>
      </div>
    </section>
  );
};
