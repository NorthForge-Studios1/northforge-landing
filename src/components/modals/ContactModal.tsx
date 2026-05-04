import React, { useState, useEffect } from 'react';
import { CONTACT_EMAIL } from '../../data/nf-constants';

const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

interface Props {
  open: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ open, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const copy = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!open) return null;

  return (
    <div
      className="nf-fadein"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(0,0,0,0.82)', backdropFilter: 'blur(14px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20,
      }}
    >
      <div
        className="nf-modalin"
        style={{
          background: 'linear-gradient(180deg, #0d1320, #0a0f17)',
          border: '1px solid rgba(103,232,249,0.22)',
          borderRadius: 18, padding: 44,
          width: '100%', maxWidth: 460, position: 'relative',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(103,232,249,0.08)',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 18, right: 18,
            width: 32, height: 32, borderRadius: 8,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            color: '#64748b', cursor: 'pointer', fontSize: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >✕</button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <img src="/logo-mark.png" alt="NorthForge" style={{ width: 26, height: 26 }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.16em', color: '#67e8f9', textTransform: 'uppercase' }}>
            Contact
          </span>
        </div>

        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#f0f4ff', marginBottom: 22 }}>
          Get in touch
        </h2>

        <div style={{
          background: 'rgba(103,232,249,0.04)',
          border: '1px solid rgba(103,232,249,0.14)',
          borderRadius: 9, padding: '18px 20px', marginBottom: 16,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: '#67e8f9' }}>
            {CONTACT_EMAIL}
          </span>
          <button
            onClick={copy}
            style={{
              background: copied ? 'rgba(52,211,153,0.12)' : 'rgba(103,232,249,0.1)',
              border: `1px solid ${copied ? 'rgba(52,211,153,0.3)' : 'rgba(103,232,249,0.22)'}`,
              borderRadius: 6, padding: '6px 14px',
              color: copied ? '#34d399' : '#67e8f9',
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
              letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.2s',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, letterSpacing: '0.08em',
            padding: '11px 20px', borderRadius: 8,
            background: 'linear-gradient(135deg, rgba(103,232,249,0.18), rgba(59,130,246,0.18))',
            border: '1px solid rgba(103,232,249,0.4)',
            color: '#a5f3fc', textDecoration: 'none', transition: 'all 0.2s',
            display: 'inline-flex', alignItems: 'center', gap: 10,
            boxShadow: '0 0 24px rgba(103,232,249,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          Open email client <ArrowIcon />
        </a>
      </div>
    </div>
  );
};
