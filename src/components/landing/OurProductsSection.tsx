import React from 'react';
import { PRODUCTS } from '../../data/nf-constants';
import type { OwnProduct } from '../../data/nf-constants';

const ArrowIcon = () => (
  <svg width={12} height={12} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

function OwnProductCard({ p, index }: { p: OwnProduct; index: number }) {
  const isLive = p.status === 'live';
  return (
    <div
      style={{
        background: '#080b12', padding: '36px 32px',
        display: 'flex', flexDirection: 'column', gap: 18,
        transition: 'background 0.25s',
      }}
      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(103,232,249,0.025)')}
      onMouseLeave={e => (e.currentTarget.style.background = '#080b12')}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          padding: '4px 10px', borderRadius: 4,
          background: isLive ? 'rgba(52,211,153,0.08)' : 'rgba(103,232,249,0.06)',
          border: `1px solid ${isLive ? 'rgba(52,211,153,0.22)' : 'rgba(103,232,249,0.18)'}`,
          color: isLive ? '#34d399' : '#67e8f9',
        }}>
          {isLive ? '● Live' : '○ Coming Soon'}
        </span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          color: '#374151', letterSpacing: '0.1em',
        }}>
          NF · 0{index + 1}
        </span>
      </div>

      <div>
        <h3 style={{
          fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700,
          letterSpacing: '-0.02em', color: p.accent, marginBottom: 6,
        }}>{p.name}</h3>
        <p style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 9,
          letterSpacing: '0.12em', textTransform: 'uppercase', color: '#475569',
        }}>{p.tag}</p>
      </div>

      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
        lineHeight: 1.7, color: '#94a3b8', flexGrow: 1,
      }}>{p.description}</p>

      {isLive && p.url ? (
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            letterSpacing: '0.06em', color: p.accent, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8, opacity: 0.85,
          }}
        >
          Open {p.name} <ArrowIcon />
        </a>
      ) : (
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          letterSpacing: '0.06em', color: '#475569',
        }}>
          In development →
        </span>
      )}
    </div>
  );
}

export const OurProductsSection: React.FC = () => {
  return (
    <section
      id="products"
      style={{
        padding: '110px 56px', maxWidth: 1280, margin: '0 auto',
        borderTop: '1px solid rgba(103,232,249,0.06)',
      }}
    >
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#67e8f9', marginBottom: 16,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 24, height: 1, background: 'linear-gradient(to right, #67e8f9, transparent)', display: 'inline-block' }} />
        From the Forge · Our Own
      </p>
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700,
        letterSpacing: '-0.03em', color: '#f0f4ff',
        marginBottom: 14, lineHeight: 1.08,
      }}>
        Built at NorthForge.
      </h2>
      <p style={{
        fontFamily: "'Space Grotesk', sans-serif", fontSize: 17, lineHeight: 1.7,
        color: '#94a3b8', maxWidth: 560, marginBottom: 56,
      }}>
        Products we design, build, and ship — solving real problems with AI at the core.
      </p>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
        gap: 1, background: 'rgba(103,232,249,0.08)',
        border: '1px solid rgba(103,232,249,0.08)', borderRadius: 14, overflow: 'hidden',
      }}>
        {PRODUCTS.map((p, i) => <OwnProductCard key={p.name} p={p} index={i} />)}
      </div>
    </section>
  );
};
