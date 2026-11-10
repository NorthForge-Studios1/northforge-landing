// Nov 2026: textos de la página de NorthForge en español (principal) e inglés.
// NorthForge ya no promociona productos de otros: la página dice qué hace el estudio.
// Rediseño 2 (10 nov): el razorbill es la imagen de la marca; capítulos de color navy, cian y hielo.
export type Lang = 'es' | 'en';

export const EMAIL = 'contacto@northforgestudios.tech';
export const X_URL = 'https://x.com/NorthForgeHQ';
export const X_HANDLE = '@NorthForgeHQ';
export const MYWORLD_URL = 'https://myworldhistory.site';
export const WASHOP_URL = 'https://washop.duckdns.org/presentacion';

export interface Shot { src: string; cap: string; w: number; h: number; pos?: string }
export interface Example { pedido: string; reemplazo: string; nf: string; donde: string }
export interface Step { name: string; p: string; img?: string; video?: string; poster?: string; alt: string }
/** Párrafo con palabras resaltadas: los trozos entre [[ ]] llevan marcador. */
export type Marked = string;

const es = {
  title: 'NorthForge Studios — Software con IA que no te reemplaza',
  skip: 'Saltar al contenido',
  nav: { trabajo: 'Trabajo', contacto: 'Escríbenos', other: 'EN', otherLabel: 'Read in English' },
  hero: {
    l1: 'Te enseña.',
    l2: 'No te reemplaza.',
    p: 'NorthForge Studios hace software con IA que te ayuda a hacerlo mejor, en vez de hacerlo por ti.',
    cta: 'Ver lo que hacemos',
    birdAlt: 'El razorbill, el ave de NorthForge',
  },
  h1: 'NorthForge Studios, estudio de software con inteligencia artificial que acompaña y no reemplaza',
  intro: {
    slogan1: 'Vendemos el',
    slogan2: 'no reemplazo.',
    word: 'Colombia',
    wordSub: 'Desde donde trabajamos',
    shotAlt: 'Mira, la compañera de MyWorld, respondiendo con las fuentes del canon de una novela',
    p: 'Una forja hace herramientas para la mano que las va a usar, no manos de repuesto. Así hacemos software. La IA te ayuda a pensar, ordenar y revisar; propone, señala y pregunta, pero la última palabra es tuya y el trabajo sigue siendo tuyo. Cada herramienta explica por qué sugiere algo, para que la próxima vez lo veas tú. Con el tiempo necesitas menos ayuda, no más. Es lo contrario de lo que vende casi toda la industria, y por eso lo decimos en voz alta.',
  },
  live: {
    h: 'Pídele lo mismo a las dos.',
    p: 'Toca un pedido y compara. A la izquierda, una IA que te reemplaza. A la derecha, cómo responde MyWorld.',
    a: 'Una IA que te reemplaza',
    b: 'Una herramienta NorthForge',
    other: 'Prueba otro pedido',
    examples: [
      { pedido: 'Escríbeme el capítulo 3', donde: 'Mira, en MyWorld',
        reemplazo: 'Aquí tienes el capítulo 3: «La lluvia caía sobre el pueblo cuando Ana…» (2.400 palabras, listo para pegar).',
        nf: 'No lo escribo por ti. Antes de empezar: ¿qué tiene que haber cambiado para Ana al final de este capítulo? Dímelo y te ayudo a ordenar las escenas que llevan hasta ahí.' },
      { pedido: 'Corrige mi capítulo', donde: 'El estudio, en MyWorld',
        reemplazo: 'Listo, lo reescribí para que suene más fluido. Reemplaza tu versión por esta.',
        nf: 'Te marco seis cosas, cada una con la cita exacta de tu texto y por qué la señalo. Tú decides cuáles cambias; tu versión no se toca.' },
      { pedido: '¿Qué hice mal en esta escena?', donde: 'La biblioteca, en MyWorld',
        reemplazo: 'Ya la arreglé. No te preocupes por eso.',
        nf: 'El cambio de punto de vista confunde al lector en el segundo párrafo. Te dejo una lección corta y un ejercicio para practicarlo sin tocar tu libro.' },
    ] as Example[],
  },
  work: {
    h: 'Trabajo',
    open: 'Abrir MyWorld',
    lead: 'MyWorld es un entorno para escribir novelas y construir mundos. Guarda el canon de tu historia, avisa cuando algo choca y te acompaña con Mira mientras escribes. La IA nunca escribe por ti.',
    shots: [
      { src: '/work/mira-respuesta.jpg', cap: 'Mira responde con tus fuentes', w: 620, h: 387 },
      { src: '/work/estudio-corregir.jpg', cap: 'El estudio: qué corregir, con la cita', w: 620, h: 387, pos: '78% 0' },
      { src: '/work/fichero-ficha.jpg', cap: 'El fichero: la ficha de cada personaje', w: 620, h: 387 },
      { src: '/work/mapa-sugerencias.jpg', cap: 'El observatorio: conexiones posibles', w: 620, h: 387, pos: '12% 0' },
      { src: '/work/mesa-agenda.jpg', cap: 'La mesa: lo que falta decidir', w: 620, h: 387 },
      { src: '/work/imprenta-capitulo.jpg', cap: 'La imprenta: tu libro, listo', w: 620, h: 387 },
    ] as Shot[],
    washop: { name: 'WaShop Admin', p: 'Automatización de WhatsApp con IA para negocios: conectas tu WhatsApp y Airi atiende preguntas, ventas y soporte.', link: 'Ver WaShop Admin' },
    tag: 'MyWorld',
  },
  how: {
    h: 'Cómo trabajamos',
    p: 'Cuatro reglas que cumple todo lo que sale del estudio. Toca cada una.',
    steps: [
      { name: 'Decides tú', p: 'Nada entra a tu trabajo sin que lo apruebes. La IA propone, señala y pregunta; la última palabra es de quien usa la herramienta.', img: '/work/fichero-entrevista.jpg', alt: 'Entrevista del fichero de MyWorld: el Arquitecto pregunta y el autor responde' },
      { name: 'Aprendes', p: 'Cada herramienta explica por qué sugiere algo y deja lecciones y ejercicios hechos con lo que nota. Con el tiempo necesitas menos ayuda, no más.', video: '/work/mira.mp4', poster: '/work/mira.jpg', alt: 'Mira, la compañera de MyWorld, respondiendo con las fuentes del canon' },
      { name: 'Te decimos la verdad', p: 'Somos claros con los límites de la IA, con los datos que guardamos y con lo que cuesta. Una herramienta que defiende el trabajo humano tiene que ser honesta sobre sí misma.', img: '/work/estudio-lector.jpg', alt: 'Reporte del estudio de MyWorld: así le llega el capítulo a un lector' },
      { name: 'Es tuyo', p: 'Tus archivos viven en tu cuenta y puedes llevártelos cuando quieras. Lo que hiciste con nuestras herramientas sigue siendo tuyo.', img: '/work/imprenta-indice.jpg', alt: 'La imprenta de MyWorld mostrando el índice del libro' },
    ] as Step[],
  },
  about: {
    // [[texto|color]] marca una palabra; color: c (cian), w (blanco), s (cielo)
    text: '[[NorthForge Studios|w]] es un estudio pequeño de [[Colombia|c]]. Lo formamos dos personas: [[Deiner David Trelles|s]], que lleva el producto, el diseño y la dirección creativa, y [[Daniel Yadir Perea|s]], que construye el backend y la arquitectura. Empezamos con [[MyWorld|c]] porque queríamos escribir con ayuda de la IA sin dejar de escribir nosotros, y descubrimos que casi nadie estaba haciendo eso: casi todo lo que se vende con IA promete hacer el trabajo por ti. Nosotros creemos que la gente quiere seguir siendo buena en lo suyo. Por eso hacemos herramientas que acompañan, que explican sus razones y que dejan la decisión en tus manos. También hicimos [[WaShop Admin|w]] para negocios que atienden por WhatsApp.',
    cta: '¿Tienes una idea que debería enseñar y no reemplazar? Hablemos.',
    people: [
      { name: 'Deiner David Trelles', x: 'https://x.com/Dei_KiMi' },
      { name: 'Daniel Yadir Perea', x: 'https://x.com/Danielceon0rth' },
    ],
  },
  contact: {
    h: 'Hablemos.',
    p: 'Respondemos en español o en inglés.',
    cells: { mail: 'Correo', x: 'X', myworld: 'Probar MyWorld' },
  },
  footer: { ways: 'Escríbenos', links: 'Enlaces', privacy: 'Privacidad', top: 'Volver arriba', rights: 'NorthForge Studios' },
};

const en: typeof es = {
  title: 'NorthForge Studios — AI software that doesn’t replace you',
  skip: 'Skip to content',
  nav: { trabajo: 'Work', contacto: 'Write to us', other: 'ES', otherLabel: 'Leer en español' },
  hero: {
    l1: 'Teaches you.',
    l2: 'Never replaces you.',
    p: 'NorthForge Studios makes AI software that helps you do it better, instead of doing it for you.',
    cta: 'See what we make',
    birdAlt: 'The razorbill, NorthForge’s bird',
  },
  h1: 'NorthForge Studios, an AI software studio that assists instead of replacing',
  intro: {
    slogan1: 'We sell',
    slogan2: 'non-replacement.',
    word: 'Colombia',
    wordSub: 'Where we work from',
    shotAlt: 'Mira, MyWorld’s companion, answering with sources from a novel’s canon',
    p: 'A forge makes tools for the hand that will use them, not spare hands. That is how we make software. AI helps you think, organize and review; it proposes, points out and asks, but the last word is yours and the work stays yours. Every tool explains why it suggests something, so next time you see it yourself. Over time you need less help, not more. It is the opposite of what most of the industry sells, which is why we say it out loud.',
  },
  live: {
    h: 'Ask both the same thing.',
    p: 'Tap a request and compare. On the left, an AI that replaces you. On the right, how MyWorld responds.',
    a: 'An AI that replaces you',
    b: 'A NorthForge tool',
    other: 'Try another request',
    examples: [
      { pedido: 'Write chapter 3 for me', donde: 'Mira, in MyWorld',
        reemplazo: 'Here is chapter 3: “Rain was falling on the village when Ana…” (2,400 words, ready to paste).',
        nf: 'I won’t write it for you. Before you start: what has to have changed for Ana by the end of this chapter? Tell me and I’ll help you order the scenes that lead there.' },
      { pedido: 'Fix my chapter', donde: 'The study, in MyWorld',
        reemplazo: 'Done, I rewrote it to flow better. Replace your version with this one.',
        nf: 'I’m flagging six things, each with the exact quote from your text and why. You decide which to change; your version stays untouched.' },
      { pedido: 'What did I do wrong in this scene?', donde: 'The library, in MyWorld',
        reemplazo: 'I already fixed it. Don’t worry about it.',
        nf: 'The point-of-view shift confuses the reader in the second paragraph. Here is a short lesson and an exercise to practise it without touching your book.' },
    ],
  },
  work: {
    h: 'Work',
    open: 'Open MyWorld',
    lead: 'MyWorld is an environment for writing novels and building worlds. It keeps your story’s canon, warns you when something clashes, and keeps you company with Mira while you write. The AI never writes for you.',
    shots: [
      { src: '/work/mira-respuesta.jpg', cap: 'Mira answers with your sources', w: 620, h: 387 },
      { src: '/work/estudio-corregir.jpg', cap: 'The study: what to fix, with the quote', w: 620, h: 387, pos: '78% 0' },
      { src: '/work/fichero-ficha.jpg', cap: 'The card file: every character’s sheet', w: 620, h: 387 },
      { src: '/work/mapa-sugerencias.jpg', cap: 'The observatory: possible connections', w: 620, h: 387, pos: '12% 0' },
      { src: '/work/mesa-agenda.jpg', cap: 'The table: what is left to decide', w: 620, h: 387 },
      { src: '/work/imprenta-capitulo.jpg', cap: 'The press: your book, ready', w: 620, h: 387 },
    ],
    washop: { name: 'WaShop Admin', p: 'AI WhatsApp automation for businesses: connect your WhatsApp and Airi handles questions, sales and support.', link: 'See WaShop Admin' },
    tag: 'MyWorld',
  },
  how: {
    h: 'How we work',
    p: 'Four rules everything from the studio follows. Tap each one.',
    steps: [
      { name: 'You decide', p: 'Nothing enters your work without your approval. The AI proposes, points out and asks; the last word belongs to whoever uses the tool.', img: '/work/fichero-entrevista.jpg', alt: 'MyWorld card file interview: the Architect asks and the author answers' },
      { name: 'You learn', p: 'Every tool explains why it suggests something and leaves lessons and exercises built from what it notices. Over time you need less help, not more.', video: '/work/mira.mp4', poster: '/work/mira.jpg', alt: 'Mira, MyWorld’s companion, answering with sources from the canon' },
      { name: 'We tell the truth', p: 'We are clear about AI’s limits, the data we keep and what it costs. A tool that defends human work has to be honest about itself.', img: '/work/estudio-lector.jpg', alt: 'MyWorld study report: how the chapter reads to a reader' },
      { name: 'It’s yours', p: 'Your files live in your account and you can take them whenever you want. What you made with our tools stays yours.', img: '/work/imprenta-indice.jpg', alt: 'MyWorld’s press showing the book’s table of contents' },
    ],
  },
  about: {
    text: '[[NorthForge Studios|w]] is a small studio from [[Colombia|c]]. There are two of us: [[Deiner David Trelles|s]], who leads product, design and creative direction, and [[Daniel Yadir Perea|s]], who builds the backend and architecture. We started with [[MyWorld|c]] because we wanted to write with AI’s help without giving up the writing, and found that almost nobody was making that: nearly everything sold with AI promises to do the work for you. We believe people want to stay good at what they do. So we make tools that keep you company, explain their reasons and leave the decision in your hands. We also made [[WaShop Admin|w]] for businesses that serve customers on WhatsApp.',
    cta: 'Have an idea that should teach rather than replace? Let’s talk.',
    people: [
      { name: 'Deiner David Trelles', x: 'https://x.com/Dei_KiMi' },
      { name: 'Daniel Yadir Perea', x: 'https://x.com/Danielceon0rth' },
    ],
  },
  contact: {
    h: 'Let’s talk.',
    p: 'We answer in Spanish or English.',
    cells: { mail: 'Email', x: 'X', myworld: 'Try MyWorld' },
  },
  footer: { ways: 'Write to us', links: 'Links', privacy: 'Privacy', top: 'Back to top', rights: 'NorthForge Studios' },
};

export const COPY = { es, en };
