import React from 'react';
import { FEATURED, FeaturedProduct } from '../../data/nf-constants';
import { useModal } from '../../context/ModalContext';

const ArrowIcon = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const SECTION_H2: React.CSSProperties = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700,
  letterSpacing: '-0.03em', color: '#f0f4ff',
  marginBottom: 14, lineHeight: 1.08,
};

function EmptyFeatured({ onSubmit }: { onSubmit: () => void }) {
  return (
    <div style={{
      border: '1px dashed rgba(103,232,249,0.2)', borderRadius: 14,
      padding: '60px 40px', textAlign: 'center',
      background: 'linear-gradient(180deg, rgba(103,232,249,0.02), transparent)',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        letterSpacing: '0.18em', color: '#67e8f9', textTransform: 'uppercase',
        marginBottom: 18,
      }}>◆ Spot Available ◆</div>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700,
        color: '#f0f4ff', marginBottom: 12,
      }}>This is where the next great product lives.</h3>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
        color: '#94a3b8', maxWidth: 460, margin: '0 auto 24px', lineHeight: 1.7,
      }}>
        We're hand-curating the first cohort of projects to feature here.
        If you're shipping something real, we'd like to talk.
      </p>
      <button
        onClick={onSubmit}
        style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.08em',
          padding: '12px 22px', borderRadius: 8,
          background: 'linear-gradient(135deg, rgba(103,232,249,0.18), rgba(59,130,246,0.18))',
          border: '1px solid rgba(103,232,249,0.4)',
          color: '#a5f3fc', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', gap: 10,
        }}
      >
        Submit your project <ArrowIcon />
      </button>
    </div>
  );
}

function FeaturedCard({ p }: { p: FeaturedProduct }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: '#080b12', padding: '32px 30px',
        display: 'flex', flexDirection: 'column', gap: 16,
        textDecoration: 'none', transition: 'background 0.25s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(103,232,249,0.025)')}
      onMouseLeave={e => (e.currentTarget.style.background = '#080b12')}
    >
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: '#67e8f9', display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span>◆ Featured</span>
        <span style={{ color: '#374151' }}>·</span>
        <span style={{ color: '#94a3b8' }}>{p.author}</span>
      </div>
      <h3 style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700,
        letterSpacing: '-0.02em', color: '#f0f4ff', marginTop: 4,
      }}>{p.name}</h3>
      <p style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
        letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569', marginTop: -8,
      }}>{p.tag}</p>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
        lineHeight: 1.7, color: '#94a3b8', flexGrow: 1,
      }}>{p.tagline}</p>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
        color: p.accent, display: 'flex', alignItems: 'center', gap: 8, opacity: 0.85,
      }}>
        Open {p.name} <ArrowIcon />
      </div>
    </a>
  );
}

export const FeaturedSection: React.FC = () => {
  const { openSubmit } = useModal();

  return (
    <section
      id="featured"
      style={{
        padding: '110px 56px',
        maxWidth: 1280, margin: '0 auto',
        borderTop: '1px solid rgba(103,232,249,0.06)',
        position: 'relative',
      }}
    >
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
        marginBottom: 56, flexWrap: 'wrap', gap: 24,
      }}>
        <div>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#67e8f9', marginBottom: 16,
            display: 'flex', alignItems: 'center', gap: 10,
          }}>
            <span style={{ width: 24, height: 1, background: 'linear-gradient(to right, #67e8f9, transparent)', display: 'inline-block' }} />
            Featured · Published With Us
          </p>
          <h2 style={SECTION_H2}>
            Built by the community.<br />
            <span style={{ color: '#67e8f9' }}>Amplified by NorthForge.</span>
          </h2>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, lineHeight: 1.7, color: '#94a3b8', maxWidth: 560 }}>
            Real products from indie developers and studios around the world.
            Hand-picked, individually reviewed, never auto-listed.
          </p>
        </div>
        <a
          href="#publish"
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: '12px 18px', borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8', textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8, transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#cbd5e1'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
        >
          Publish your project →
        </a>
      </div>

      {FEATURED.length === 0 ? (
        <EmptyFeatured onSubmit={openSubmit} />
      ) : (
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 1, background: 'rgba(103,232,249,0.1)',
          border: '1px solid rgba(103,232,249,0.1)', borderRadius: 14, overflow: 'hidden',
        }}>
          {FEATURED.map(p => <FeaturedCard key={p.name} p={p} />)}
        </div>
      )}
    </section>
  );
};
