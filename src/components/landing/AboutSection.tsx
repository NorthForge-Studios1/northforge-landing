import React from 'react';
import { TEAM, X_URL } from '../../data/nf-constants';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      style={{ padding: '110px 56px', maxWidth: 1280, margin: '0 auto' }}
    >
      <p style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase',
        color: '#67e8f9', marginBottom: 16,
        display: 'flex', alignItems: 'center', gap: 10,
      }}>
        <span style={{ width: 24, height: 1, background: 'linear-gradient(to right, #67e8f9, transparent)', display: 'inline-block' }} />
        About
      </p>
      <h2 style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 700,
        letterSpacing: '-0.03em', color: '#f0f4ff',
        marginBottom: 48, lineHeight: 1.08,
      }}>
        Who we are.
      </h2>

      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 56, alignItems: 'start',
      }}>
        <div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 17,
            lineHeight: 1.8, color: '#94a3b8', marginBottom: 22,
          }}>
            NorthForge Studios is an independent technology studio focused on AI-powered
            products and developer tooling. We build software that solves real problems for real people.
          </p>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif", fontSize: 17,
            lineHeight: 1.8, color: '#94a3b8',
          }}>
            We also believe great projects deserve great visibility. That's why we built a
            publishing arm to amplify developers and studios — anywhere in the world — building things that matter.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {TEAM.map(({ initials, name, role, accent }) => (
            <div
              key={name}
              style={{
                display: 'flex', alignItems: 'center', gap: 18,
                padding: '20px 24px',
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(103,232,249,0.08)',
                borderRadius: 10,
              }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 11,
                background: `${accent}14`,
                border: `1px solid ${accent}33`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12, fontWeight: 600, color: accent, flexShrink: 0,
              }}>{initials}</div>
              <div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontSize: 15,
                  fontWeight: 600, color: '#e2e8f0',
                }}>{name}</div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                  letterSpacing: '0.08em', color: '#64748b', marginTop: 3,
                }}>{role}</div>
              </div>
            </div>
          ))}
          <p style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            color: '#475569', marginTop: 6, letterSpacing: '0.06em',
          }}>
            Follow us on X →{' '}
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#67e8f9', textDecoration: 'none' }}
            >
              @NorthForgeOrg
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
