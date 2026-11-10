// Nov 2026: página de presentación de NorthForge Studios. Dirección: el nombre como monumento.
// El estudio vende el no reemplazo: herramientas con IA que enseñan en vez de hacer el trabajo por ti.
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../nf/nf.css';
import { useLang, useReveal } from '../nf/useLang';
import { Wordmark } from '../nf/Wordmark';
import { EMAIL, X_URL, X_HANDLE, MYWORLD_URL, WASHOP_URL } from '../nf/copy';

// Muro desigual: anchos y alturas a mano para que no parezca una cuadrícula de plantilla.
const WALL = [
  { basis: '44%', h: 'clamp(240px, 30vw, 440px)' },
  { basis: '30%', h: 'clamp(240px, 30vw, 440px)' },
  { basis: '20%', h: 'clamp(240px, 30vw, 440px)' },
  { basis: '24%', h: 'clamp(200px, 22vw, 320px)' },
  { basis: '36%', h: 'clamp(200px, 22vw, 320px)' },
  { basis: '34%', h: 'clamp(200px, 22vw, 320px)' },
];

export default function Home() {
  const { lang, t, toggle } = useLang();
  const [ex, setEx] = useState(0);
  useReveal(lang);
  const e = t.live.examples[ex];

  return (
    <div className="nf">
      <a className="nf-skip" href="#contenido">{t.skip}</a>

      <header className="nf-hero">
        <div className="nf-corners">
          <div>
            <p className="nf-lead">{t.heroLine}</p>
            <a className="nf-btn" href="#trabajo">{t.heroCta} <span aria-hidden="true">↓</span></a>
          </div>
          <nav className="nf-nav" aria-label="NorthForge">
            <a href="#trabajo">{t.nav.trabajo}</a>
            <a href="#como">{t.nav.como}</a>
            <a href="#contacto">{t.nav.contacto}</a>
            <button type="button" onClick={toggle} aria-label={t.nav.otherLabel} lang={lang === 'es' ? 'en' : 'es'}>{t.nav.other}</button>
          </nav>
        </div>
        <h1 className="nf-sr">{t.h1}</h1>
        <Wordmark id="nf-name-top" />
        <img className="nf-hero-shot" src="/work/mira-respuesta.jpg" alt="" width={620} height={387} />
        <div className="nf-bottom">
          <span>{t.heroPlace}</span>
          <span className="nf-links">
            <a href={X_URL} target="_blank" rel="noopener noreferrer">{X_HANDLE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </span>
        </div>
      </header>

      <main id="contenido">
        <section className="nf-section" aria-labelledby="nf-intro">
          <div className="nf-intro-row nf-reveal">
            <h2 id="nf-intro">{t.intro.h}</h2>
            <p>{t.intro.p}</p>
          </div>
          <dl className="nf-facts nf-reveal">
            {t.intro.facts.map((f) => (
              <div key={f.k}><dt>{f.k}</dt><dd>{f.v}</dd></div>
            ))}
          </dl>
        </section>

        <section className="nf-section nf-live" aria-labelledby="nf-live">
          <div className="nf-live-head nf-reveal">
            <h2 id="nf-live">{t.live.h}</h2>
            <p>{t.live.p}</p>
          </div>
          <div className="nf-asks" role="group" aria-label={t.live.h}>
            {t.live.examples.map((x, i) => (
              <button key={x.pedido} type="button" className="nf-ask" aria-pressed={i === ex} onClick={() => setEx(i)}>
                «{x.pedido}»
              </button>
            ))}
          </div>
          <div className="nf-answers" aria-live="polite">
            <article className="nf-answer is-replace">
              <h3>{t.live.a}</h3>
              <p key={`a${ex}${lang}`}>{e.reemplazo}</p>
            </article>
            <article className="nf-answer is-nf">
              <h3>{t.live.b}</h3>
              <p key={`b${ex}${lang}`}>{e.nf}</p>
              <span className="nf-where">{e.donde}</span>
            </article>
          </div>
        </section>

        <section id="trabajo" className="nf-section nf-work" aria-labelledby="nf-work">
          <div className="nf-work-head">
            <h2 id="nf-work">{t.work.h}</h2>
            <a href={MYWORLD_URL} target="_blank" rel="noopener noreferrer">{t.work.open} ↗</a>
          </div>
          <p className="nf-work-lead">{t.work.lead}</p>
          <div className="nf-wall">
            {t.work.shots.map((s, i) => (
              <figure key={s.src} className="nf-tile nf-reveal" style={{ flexBasis: WALL[i].basis, ['--h' as string]: WALL[i].h }}>
                <img src={s.src} alt={s.cap} width={s.w} height={s.h} loading="lazy" decoding="async" style={s.pos ? { objectPosition: s.pos } : undefined} />
                <figcaption><span>{s.cap}</span><span>MyWorld · {t.work.year}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="nf-washop nf-reveal">
            <h3>{t.work.washop.name}</h3>
            <p>{t.work.washop.p}</p>
            <a href={WASHOP_URL} target="_blank" rel="noopener noreferrer">{t.work.washop.link} ↗</a>
          </div>
        </section>

        <section id="como" className="nf-section nf-how" aria-labelledby="nf-how">
          <div className="nf-how-col">
            <h2 id="nf-how">{t.how.h}</h2>
            {t.how.steps.map((s) => (
              <div key={s.run} className="nf-step nf-reveal">
                <p><b>{s.run}</b> {s.rest}</p>
                {'video' in s && s.video ? (
                  <video src={s.video} poster={s.poster} muted loop playsInline autoPlay preload="metadata" aria-label={s.alt} width={620} height={388} />
                ) : (
                  <img src={s.img} alt={s.alt} width={620} height={387} loading="lazy" decoding="async" />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="nf-section nf-about" aria-labelledby="nf-about">
          <h2 id="nf-about">{t.about.h}</h2>
          <div className="nf-about-body nf-reveal">
            <p>{t.about.p}</p>
            <div className="nf-people">
              {t.about.people.map((p) => (
                <div key={p.name}>
                  <h3>{p.name}</h3>
                  <p>{p.role}</p>
                  <a href={p.x} target="_blank" rel="noopener noreferrer">X ↗</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="nf-contact" aria-label={t.nav.contacto}>
          <a className="nf-row nf-row-hello" href={`mailto:${EMAIL}`} aria-label={t.contact.aria}>
            <span>{t.contact.hello}</span><span className="nf-round" aria-hidden="true">→</span>
          </a>
          <a className="nf-row" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="nf-row" href={X_URL} target="_blank" rel="noopener noreferrer">X · {X_HANDLE}</a>
          <a className="nf-row" href={MYWORLD_URL} target="_blank" rel="noopener noreferrer">MyWorld ↗</a>
        </section>
      </main>

      <footer className="nf-foot">
        <p className="nf-foot-invite">{t.footer.invite} <span>{t.footer.invite2}</span></p>
        <Wordmark id="nf-name-foot" />
        <div className="nf-foot-bar">
          <span>© {new Date().getFullYear()} {t.footer.rights}</span>
          <Link to="/privacy">{t.footer.privacy}</Link>
        </div>
      </footer>
    </div>
  );
}
