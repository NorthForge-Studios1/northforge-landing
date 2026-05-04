import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Header } from './Header';
import { useModal } from '../../context/ModalContext';
import { X_URL, GITHUB_URL } from '../../data/nf-constants';

const XIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.727-8.85L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" style={{ width: 14, height: 14 }} fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const FOOTER_LINK: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
  letterSpacing: '0.1em', textTransform: 'uppercase',
  color: '#475569', textDecoration: 'none', transition: 'color 0.2s',
  display: 'inline-flex', alignItems: 'center', gap: 6,
};

export const MainLayout: React.FC = () => {
  const { openContact } = useModal();

  return (
    <div style={{ minHeight: '100vh', background: '#080b12', color: '#f0f4ff', fontFamily: "'Space Grotesk', sans-serif" }}>
      <Header />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Outlet />
      </main>
      <footer style={{
        borderTop: '1px solid rgba(103,232,249,0.06)',
        padding: '40px 56px',
        background: 'linear-gradient(180deg, transparent, rgba(103,232,249,0.02))',
        position: 'relative', zIndex: 1,
      }}>
        <div style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 18,
        }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
            <img src="/logo-mark.png" alt="NorthForge" style={{ width: 22, height: 22 }} />
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 14, fontWeight: 600, letterSpacing: '-0.02em', color: '#f0f4ff',
            }}>
              NorthForge<span style={{ color: '#67e8f9' }}>Studios</span>
            </span>
          </Link>

          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
            letterSpacing: '0.08em', color: '#475569',
          }}>
            © {new Date().getFullYear()} NorthForge Studios
          </span>

          <div style={{ display: 'flex', gap: 26 }}>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={FOOTER_LINK}
              onMouseEnter={e => (e.currentTarget.style.color = '#67e8f9')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              <XIcon /> X / Twitter
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={FOOTER_LINK}
              onMouseEnter={e => (e.currentTarget.style.color = '#67e8f9')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              <GithubIcon /> GitHub
            </a>
            <button
              onClick={openContact}
              style={{ ...FOOTER_LINK, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
              onMouseEnter={e => (e.currentTarget.style.color = '#67e8f9')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              Contact
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
