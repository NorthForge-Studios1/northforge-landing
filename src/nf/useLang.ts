// Nov 2026: idioma de la página. Español por defecto; inglés si el navegador lo pide o la persona lo elige.
import { useEffect, useState } from 'react';
import { COPY, type Lang } from './copy';

function initial(): Lang {
  try {
    const q = new URLSearchParams(window.location.search).get('lang');
    if (q === 'en' || q === 'es') return q;
    const saved = localStorage.getItem('nf-lang');
    if (saved === 'en' || saved === 'es') return saved;
  } catch { /* sin almacenamiento: seguimos */ }
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : (navigator.language ? 'en' : 'es');
}

export function useLang() {
  const [lang, setLang] = useState<Lang>(initial);
  const t = COPY[lang];
  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = t.title;
    try { localStorage.setItem('nf-lang', lang); } catch { /* nada */ }
  }, [lang, t.title]);
  return { lang, t, toggle: () => setLang((l) => (l === 'es' ? 'en' : 'es')) };
}

/** Marca .is-in cuando un bloque .nf-reveal entra en pantalla. */
export function useReveal(dep: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.nf-reveal:not(.is-in)'));
    if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('is-in')); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}
