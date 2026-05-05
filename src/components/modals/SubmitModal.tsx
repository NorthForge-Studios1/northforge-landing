import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ArrowIcon = () => (
  <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const SpinnerIcon = () => (
  <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ animation: 'spin 0.8s linear infinite' }}>
    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
    <path d="M12 2a10 10 0 0 1 10 10" />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </svg>
);

const INPUT: React.CSSProperties = {
  width: '100%', padding: '11px 14px', borderRadius: 7,
  background: 'rgba(255,255,255,0.025)',
  border: '1px solid rgba(103,232,249,0.12)',
  color: '#e2e8f0',
  fontFamily: "'JetBrains Mono', monospace", fontSize: 13,
  outline: 'none', transition: 'all 0.2s',
};

const CYAN_BTN: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12, letterSpacing: '0.08em',
  padding: '14px 28px', borderRadius: 8,
  background: 'linear-gradient(135deg, rgba(103,232,249,0.18), rgba(59,130,246,0.18))',
  border: '1px solid rgba(103,232,249,0.4)',
  color: '#a5f3fc', cursor: 'pointer', transition: 'all 0.2s',
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
  boxShadow: '0 0 24px rgba(103,232,249,0.1), inset 0 1px 0 rgba(255,255,255,0.06)',
  width: '100%',
};

interface Props {
  open: boolean;
  onClose: () => void;
}

type FormKey = 'name' | 'project' | 'url' | 'email';

const FIELDS: { key: FormKey; label: string; placeholder: string }[] = [
  { key: 'name', label: 'Your name', placeholder: 'Jane Smith' },
  { key: 'project', label: 'Project name', placeholder: 'MyApp' },
  { key: 'url', label: 'Project URL', placeholder: 'https://myapp.com' },
  { key: 'email', label: 'Your email', placeholder: 'you@email.com' },
];

const EMPTY_FORM = { name: '', project: '', url: '', email: '', message: '' };

export const SubmitModal: React.FC<Props> = ({ open, onClose }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!open) {
      setStatus('idle');
      setForm(EMPTY_FORM);
      setErrorMsg('');
    }
  }, [open]);

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

  const handleSubmit = async () => {
    if (!form.name || !form.project || !form.email) return;
    setStatus('loading');
    try {
      // TODO: replace with your Firebase project ID after deploy
      // e.g. https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/send_submission
      const apiUrl = import.meta.env.VITE_API_URL ?? 'http://localhost:5001';
      await axios.post(`${apiUrl}/send_submission`, form);
      setStatus('sent');
    } catch (e: unknown) {
      const msg = axios.isAxiosError(e)
        ? (e.response?.data?.detail ?? e.message)
        : 'Unexpected error';
      setErrorMsg(msg);
      setStatus('error');
    }
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
          width: '100%', maxWidth: 520, position: 'relative',
          boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(103,232,249,0.08)',
          maxHeight: '90vh', overflowY: 'auto',
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

        {/* SUCCESS */}
        {status === 'sent' && (
          <div style={{ textAlign: 'center', padding: '12px 0' }}>
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'rgba(52,211,153,0.1)',
              border: '1px solid rgba(52,211,153,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 22px', color: '#34d399', fontSize: 26,
            }}>✓</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: '#f0f4ff', marginBottom: 12 }}>
              Submission sent!
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, color: '#94a3b8', lineHeight: 1.7 }}>
              We received your submission for <span style={{ color: '#67e8f9' }}>{form.project}</span>.<br />
              We'll review it and get back to you at <span style={{ color: '#67e8f9' }}>{form.email}</span>.
            </p>
            <button onClick={onClose} style={{ ...CYAN_BTN, width: 'auto', marginTop: 26, padding: '10px 22px', fontSize: 11 }}>
              Close
            </button>
          </div>
        )}

        {/* FORM */}
        {status !== 'sent' && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
              <img src="/logo-mark.png" alt="NorthForge" style={{ width: 26, height: 26 }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: '0.16em', color: '#67e8f9', textTransform: 'uppercase' }}>
                NorthForge · Submission
              </span>
            </div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 26, fontWeight: 700, color: '#f0f4ff', marginBottom: 8, letterSpacing: '-0.02em' }}>
              Submit your project
            </h2>
            <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 14, color: '#94a3b8', marginBottom: 28, lineHeight: 1.6 }}>
              Tell us about your product. We review every submission personally.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {FIELDS.map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: 7 }}>
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={form[key]}
                    disabled={status === 'loading'}
                    onChange={(e) => setForm(f => ({ ...f, [key]: e.target.value }))}
                    style={{ ...INPUT, opacity: status === 'loading' ? 0.6 : 1 }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#64748b', display: 'block', marginBottom: 7 }}>
                  Tell us about it
                </label>
                <textarea
                  placeholder="What does your product do? Who is it for?"
                  value={form.message}
                  disabled={status === 'loading'}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                  rows={4}
                  style={{ ...INPUT, resize: 'vertical', fontFamily: "'Space Grotesk', sans-serif", opacity: status === 'loading' ? 0.6 : 1 }}
                />
              </div>

              {/* ERROR */}
              {status === 'error' && (
                <div style={{
                  padding: '12px 16px', borderRadius: 8,
                  background: 'rgba(239,68,68,0.08)',
                  border: '1px solid rgba(239,68,68,0.25)',
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
                  color: '#fca5a5',
                }}>
                  ✕ {errorMsg || 'Something went wrong. Please try again.'}
                </div>
              )}

              <button
                onClick={handleSubmit}
                disabled={status === 'loading'}
                style={{
                  ...CYAN_BTN, marginTop: 8,
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                }}
              >
                {status === 'loading' ? <><SpinnerIcon /> Sending…</> : <>Send submission <ArrowIcon /></>}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
