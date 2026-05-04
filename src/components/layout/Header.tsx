import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../context/ModalContext';

const NAV_LINKS = [
  { label: 'Featured', href: '#featured' },
  { label: 'Our Products', href: '#products' },
  { label: 'Publish With Us', href: '#publish' },
  { label: 'About', href: '#about' },
];

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const { openContact } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 40px', height: 64,
        background: scrolled ? 'rgba(8,11,18,0.78)' : 'rgba(8,11,18,0.0)',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(103,232,249,0.08)' : '1px solid transparent',
        transition: 'all 0.3s',
      }}
    >
      <Link
        to="/"
        style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}
      >
        <img src="/logo.svg" alt="NorthForge" style={{ width: 28, height: 28 }} />
        <span style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 15, fontWeight: 600, letterSpacing: '-0.02em', color: '#f0f4ff',
        }}>
          NorthForge<span style={{ color: '#67e8f9' }}>Studios</span>
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#6b7280', textDecoration: 'none', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a5f3fc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6b7280')}
            >
              {label}
            </a>
          ))}
        </div>
        <button
          onClick={openContact}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '8px 18px', borderRadius: 6,
            background: 'rgba(103,232,249,0.08)',
            border: '1px solid rgba(103,232,249,0.25)',
            color: '#67e8f9', cursor: 'pointer', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(103,232,249,0.16)';
            e.currentTarget.style.borderColor = 'rgba(103,232,249,0.45)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(103,232,249,0.08)';
            e.currentTarget.style.borderColor = 'rgba(103,232,249,0.25)';
          }}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
