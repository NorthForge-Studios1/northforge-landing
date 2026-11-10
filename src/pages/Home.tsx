// Nov 2026 (rediseño 2): página de presentación de NorthForge Studios.
// El razorbill es la imagen de la marca; cada sección es un capítulo de un color del ave.
// El estudio vende el no reemplazo: herramientas con IA que enseñan en vez de hacer el trabajo por ti.
import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../nf/nf.css';
import { useLang, useReveal } from '../nf/useLang';
import { EMAIL, X_URL, X_HANDLE, MYWORLD_URL, WASHOP_URL } from '../nf/copy';

// Muro desigual: filas de alturas distintas para que no parezca una cuadrícula de plantilla.
const WALL = [
  { basis: '46%', h: 'clamp(240px, 28vw, 420px)' },
  { basis: '30%', h: 'clamp(240px, 28vw, 420px)' },
  { basis: '20%', h: 'clamp(240px, 28vw, 420px)' },
  { basis: '22%', h: 'clamp(200px, 20vw, 300px)' },
  { basis: '36%', h: 'clamp(200px, 20vw, 300px)' },
  { basis: '36%', h: 'clamp(200px, 20vw, 300px)' },
];
const STRIP = ['mira-inicio', 'estudio-corregir', 'mapa-lista', 'fichero-ficha', 'mesa-retomar', 'imprenta-indice', 'mira-respuesta', 'mesa-agenda', 'estudio-lector', 'imprenta-capitulo'];

/** «[[texto|c]]» → palabra resaltada en cian (c), blanco (w) o cielo (s). */
function marked(text: string): ReactNode[] {
  return text.split(/(\[\[[^\]]+\]\])/g).map((part, i) => {
    const m = part.match(/^\[\[(.+)\|([cws])\]\]$/);
    return m ? <mark key={i} className={`nf-mark ${m[2]}`}>{m[1]}</mark> : part;
  });
}

export default function Home() {
  const { lang, t, toggle } = useLang();
  const [ex, setEx] = useState(0);
  const [stage, setStage] = useState(0);
  useReveal(lang);
  // Los videos decorativos no se reproducen solos si la persona pidió menos movimiento.
  const calm = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const e = t.live.examples[ex];

  return (
    <div className="nf">
      <a className="nf-skip" href="#contenido">{t.skip}</a>

      {/* 1 · Portada */}
      <header className="nf-hero">
        <div className="nf-top">
          <a className="nf-brand" href="/" aria-label="NorthForge Studios">
            <img src="/logo-mark.png" alt="" width={30} height={30} /> <span translate="no">NorthForge</span>
          </a>
          <nav aria-label="NorthForge">
            <a className="nf-work-link" href="#trabajo">{t.nav.trabajo}</a>
            <button type="button" onClick={toggle} aria-label={t.nav.otherLabel} lang={lang === 'es' ? 'en' : 'es'}>{t.nav.other}</button>
            <a className="nf-btn" href="#contacto">{t.nav.contacto}</a>
          </nav>
        </div>
        <h1 className="nf-statement"><span className="nf-sr">NorthForge Studios: </span><span className="l1">{t.hero.l1}</span><span>{t.hero.l2}</span></h1>
        <div className="nf-bird"><img src="/logo-mark.png" alt={t.hero.birdAlt} width={634} height={620} fetchPriority="high" /></div>
        <div className="nf-hero-foot">
          <p>{t.hero.p}</p>
          <a className="nf-btn" href="#trabajo">{t.hero.cta} <span aria-hidden="true">↓</span></a>
        </div>
      </header>

      <main id="contenido">
        {/* 2 · Intro */}
        <section className="nf-intro" aria-labelledby="nf-intro">
          <div className="nf-board">
            <div className="nf-tile-a nf-reveal"><h2 id="nf-intro">{t.intro.slogan1}<br />{t.intro.slogan2}</h2></div>
            <div className="nf-tile-b nf-reveal"><strong>{t.intro.word}</strong><span>{t.intro.wordSub}</span></div>
            <div className="nf-tile-c nf-reveal"><video src="/work/mira.mp4" poster="/work/mira.jpg" muted loop playsInline autoPlay={!calm} preload="metadata" aria-label={t.intro.shotAlt} width={620} height={388} /></div>
          </div>
          <div className="nf-intro-text"><p className="nf-reveal">{t.intro.p}</p></div>
        </section>

        {/* 3 · El mismo pedido, dos respuestas */}
        <section className="nf-chapter nf-live nf-on-cyan" aria-labelledby="nf-live">
          <div className="nf-live-head nf-reveal">
            <h2 id="nf-live">{t.live.h}</h2>
            <p>{t.live.p}</p>
          </div>
          <p className="nf-ask-line" aria-live="polite">«{e.pedido}»<span className="nf-caret" aria-hidden="true" /></p>
          <div className="nf-answers">
            <article className="nf-answer is-replace">
              <h3>{t.live.a}</h3>
              <p key={`a${ex}${lang}`}>{e.reemplazo}</p>
            </article>
            <article className="nf-answer is-nf" aria-live="polite">
              <h3>{t.live.b}</h3>
              <p key={`b${ex}${lang}`}>{e.nf}</p>
              <span className="nf-where">{e.donde}</span>
            </article>
          </div>
          <div className="nf-asks" role="group" aria-label={t.live.other}>
            <span>{t.live.other}:</span>
            {t.live.examples.map((x, i) => (
              <button key={x.pedido} type="button" className="nf-ask" aria-pressed={i === ex} onClick={() => setEx(i)}>{x.pedido}</button>
            ))}
          </div>
        </section>

        {/* 4 · Trabajo */}
        <section id="trabajo" className="nf-chapter nf-work" aria-labelledby="nf-work">
          <div className="nf-work-head">
            <h2 id="nf-work">{t.work.h}</h2>
            <a href={MYWORLD_URL} target="_blank" rel="noopener noreferrer">{t.work.open} ↗</a>
          </div>
          <p className="nf-work-lead">{t.work.lead}</p>
          <div className="nf-wall">
            {t.work.shots.map((s, i) => (
              <figure key={s.src} className="nf-shot nf-reveal" style={{ flexBasis: WALL[i].basis, ['--h' as string]: WALL[i].h }}>
                <img src={s.src} alt={s.cap} width={s.w} height={s.h} loading="lazy" decoding="async" style={s.pos ? { objectPosition: s.pos } : undefined} />
                <figcaption><span>{s.cap}</span><span>{t.work.tag}</span></figcaption>
              </figure>
            ))}
          </div>
          <div className="nf-washop nf-reveal">
            <h3>{t.work.washop.name}</h3>
            <p>{t.work.washop.p}</p>
            <a href={WASHOP_URL} target="_blank" rel="noopener noreferrer">{t.work.washop.link} ↗</a>
          </div>
        </section>

        {/* 5 · Cómo trabajamos */}
        <section className="nf-chapter nf-how" aria-labelledby="nf-how">
          <div className="nf-how-head nf-reveal">
            <h2 id="nf-how">{t.how.h}</h2>
            <p>{t.how.p}</p>
          </div>
          <div className="nf-acc">
            {t.how.steps.map((s, i) => (
              <div key={s.name} className={`nf-stage t${i + 1}${i === stage ? ' is-open' : ''}`}>
                <button type="button" aria-expanded={i === stage} aria-controls={`nf-stage-${i}`} onClick={() => setStage(i)}>
                  <span className="nf-stage-name">{s.name}</span>
                </button>
                <div className="nf-stage-body" id={`nf-stage-${i}`}>
                  <div className="nf-stage-text">
                    <h3>{s.name}</h3>
                    <p>{s.p}</p>
                  </div>
                  {s.video ? (
                    i === stage && <video src={s.video} poster={s.poster} muted loop playsInline autoPlay={!calm} controls={calm} preload="metadata" aria-label={s.alt} width={620} height={388} />
                  ) : (
                    <img src={s.img} alt={s.alt} width={620} height={387} loading="lazy" decoding="async" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6 · Quiénes */}
        <section className="nf-chapter nf-about" aria-label={lang === 'es' ? 'Quiénes somos' : 'Who we are'}>
          <p className="nf-about-text nf-reveal">
            {marked(t.about.text)}{' '}
            <a className="nf-about-cta" href="#contacto">{t.about.cta}</a>
          </p>
          <div className="nf-people">
            {t.about.people.map((p) => <a key={p.name} href={p.x} target="_blank" rel="noopener noreferrer">{p.name} {lang === 'es' ? 'en' : 'on'} X ↗</a>)}
          </div>
        </section>

        {/* 7 · Contacto */}
        <section id="contacto" className="nf-chapter nf-contact nf-on-cyan" aria-labelledby="nf-contact">
          <div aria-hidden="true">
            <div className="nf-strip">
              {[...STRIP, ...STRIP].map((n, i) => <img key={i} src={`/work/${n}.jpg`} alt="" width={240} height={150} loading="lazy" decoding="async" />)}
            </div>
          </div>
          <div className="nf-contact-body">
            <h2 id="nf-contact" className="nf-reveal">{t.contact.h}</h2>
            <p>{t.contact.p}</p>
            <div className="nf-cells">
              <a className="nf-cell is-main" href={`mailto:${EMAIL}`}><span>{t.contact.cells.mail}</span><span>{EMAIL}</span></a>
              <a className="nf-cell" href={X_URL} target="_blank" rel="noopener noreferrer"><span>{t.contact.cells.x}</span><span>{X_HANDLE} ↗</span></a>
              <a className="nf-cell" href={MYWORLD_URL} target="_blank" rel="noopener noreferrer"><span>{t.contact.cells.myworld}</span><span>myworldhistory.site ↗</span></a>
            </div>
          </div>
        </section>
      </main>

      {/* 8 · Pie */}
      <footer className="nf-foot">
        <p className="nf-foot-name"><img src="/logo-mark.png" alt="" width={634} height={620} loading="lazy" /> <span translate="no">NorthForge</span></p>
        <div className="nf-foot-row">
          <div className="nf-foot-ways">
            <p className="nf-label">{t.footer.ways}</p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={X_URL} target="_blank" rel="noopener noreferrer">{X_HANDLE}</a>
          </div>
          <div className="nf-foot-links">
            <p className="nf-label" style={{ gridColumn: '1 / -1' }}>{t.footer.links}</p>
            <a href="#trabajo">{t.nav.trabajo}</a>
            <a href={MYWORLD_URL} target="_blank" rel="noopener noreferrer">MyWorld</a>
            <a href={WASHOP_URL} target="_blank" rel="noopener noreferrer">WaShop Admin</a>
            <Link to="/privacy">{t.footer.privacy}</Link>
          </div>
        </div>
        <div className="nf-foot-legal">
          <span>© {new Date().getFullYear()} {t.footer.rights} · Colombia</span>
          <a href="#">{t.footer.top} ↑</a>
        </div>
      </footer>
    </div>
  );
}
