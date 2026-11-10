// Nov 2026: textos de la página de NorthForge en español (principal) e inglés.
// NorthForge ya no promociona productos de otros: la página dice qué hace el estudio.
export type Lang = 'es' | 'en';

export const EMAIL = 'contacto@northforgestudios.tech';
export const X_URL = 'https://x.com/NorthForgeHQ';
export const X_HANDLE = '@NorthForgeHQ';
export const MYWORLD_URL = 'https://myworldhistory.site';
export const WASHOP_URL = 'https://washop.duckdns.org/presentacion';

export interface Shot { src: string; cap: string; w: number; h: number; pos?: string }
export interface Example { pedido: string; reemplazo: string; nf: string; donde: string }

const es = {
  title: 'NorthForge Studios — Software con IA que no te reemplaza',
  skip: 'Saltar al contenido',
  nav: { trabajo: 'Trabajo', como: 'Cómo trabajamos', contacto: 'Contacto', other: 'EN', otherLabel: 'Read in English' },
  heroLine: 'Hacemos software con IA que te enseña a hacerlo mejor, en vez de hacerlo por ti.',
  heroCta: 'Ver lo que hacemos',
  heroPlace: 'Estudio independiente · Colombia',
  h1: 'NorthForge Studios, estudio de software con inteligencia artificial que acompaña y no reemplaza',
  intro: {
    h: 'Vendemos el no reemplazo.',
    p: 'Una forja hace herramientas para la mano que las va a usar. Así hacemos software: la IA te ayuda a pensar, ordenar y revisar, y el trabajo sigue siendo tuyo. Aprendes mientras la usas, y ganas flexibilidad sin perder el oficio.',
    facts: [
      { k: 'MyWorld', v: 'Beta abierta, para escritores' },
      { k: 'WaShop Admin', v: 'WhatsApp con IA para negocios' },
      { k: 'Español e inglés', v: 'Los idiomas de nuestras herramientas' },
      { k: 'Colombia', v: 'Desde donde trabajamos' },
    ],
  },
  live: {
    h: 'Pídele lo mismo a las dos.',
    p: 'Elige un pedido y mira la diferencia entre una IA que te reemplaza y una herramienta hecha por NorthForge. La respuesta en oscuro resume cómo responde MyWorld.',
    a: 'Una IA que te reemplaza',
    b: 'Una herramienta NorthForge',
    examples: [
      { pedido: 'Escríbeme el capítulo 3.', donde: 'Mira, en MyWorld',
        reemplazo: 'Aquí tienes el capítulo 3: «La lluvia caía sobre el pueblo cuando Ana…» (2.400 palabras, listo para pegar).',
        nf: 'No lo escribo por ti. Antes de empezar: ¿qué tiene que haber cambiado para Ana al final de este capítulo? Dímelo y te ayudo a ordenar las escenas que llevan hasta ahí.' },
      { pedido: 'Corrige mi capítulo.', donde: 'El estudio, en MyWorld',
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
    shots: ([
      { src: '/work/mira-respuesta.jpg', cap: 'Mira responde con tus fuentes', w: 620, h: 387 },
      { src: '/work/estudio-corregir.jpg', cap: 'El estudio: qué corregir, con la cita', w: 620, h: 387, pos: '78% 0' },
      { src: '/work/mapa-sugerencias.jpg', cap: 'El observatorio: conexiones posibles', w: 620, h: 387, pos: '12% 0' },
      { src: '/work/fichero-ficha.jpg', cap: 'El fichero: la ficha de cada personaje', w: 620, h: 387 },
      { src: '/work/mesa-agenda.jpg', cap: 'La mesa: lo que falta decidir', w: 620, h: 387 },
      { src: '/work/imprenta-capitulo.jpg', cap: 'La imprenta: tu libro, listo', w: 620, h: 387 },
    ] as Shot[]),
    washop: { name: 'WaShop Admin', p: 'Automatización de WhatsApp con IA para negocios: conectas tu WhatsApp y Airi atiende preguntas, ventas y soporte.', link: 'Ver WaShop Admin' },
    year: '2026',
  },
  how: {
    h: 'Cómo trabajamos',
    steps: [
      { run: 'Primero, la persona decide.', rest: 'Nada entra a su trabajo sin que lo apruebe. La IA propone, señala y pregunta; la última palabra es de quien usa la herramienta.', img: '/work/fichero-entrevista.jpg', alt: 'Entrevista del fichero de MyWorld: el Arquitecto pregunta y el autor responde' },
      { run: 'Mientras trabaja, aprende.', rest: 'Cada herramienta explica por qué sugiere algo y deja lecciones y ejercicios hechos con lo que nota. Con el tiempo se necesita menos ayuda, no más.', video: '/work/mira.mp4', poster: '/work/mira.jpg', alt: 'Mira, la compañera de MyWorld, respondiendo con las fuentes del canon' },
      { run: 'Cuando algo falla, lo decimos.', rest: 'Somos honestos con los límites de la IA, con los datos que guardamos y con lo que cuesta. Una herramienta que defiende el trabajo humano tiene que ser clara sobre sí misma.', img: '/work/estudio-lector.jpg', alt: 'Reporte del estudio de MyWorld: así le llega el capítulo a un lector' },
      { run: 'Al final, el trabajo es tuyo.', rest: 'Tus archivos viven en tu cuenta y puedes llevártelos cuando quieras. Lo que hiciste con nuestras herramientas sigue siendo tuyo.', img: '/work/imprenta-indice.jpg', alt: 'La imprenta de MyWorld mostrando el índice del libro' },
    ],
  },
  about: {
    h: 'Quiénes',
    people: [
      { name: 'Deiner David Trelles', role: 'Producto, diseño y dirección creativa', x: 'https://x.com/Dei_KiMi' },
      { name: 'Daniel Yadir Perea', role: 'Backend y arquitectura', x: 'https://x.com/Danielceon0rth' },
    ],
    p: 'Somos un estudio pequeño de Colombia. Empezamos con MyWorld porque queríamos escribir con ayuda de la IA sin dejar de escribir nosotros.',
  },
  contact: { hello: 'Escríbenos', aria: 'Escribir un correo a NorthForge' },
  footer: { invite: '¿Tienes una idea que debería enseñar y no reemplazar?', invite2: 'Hablemos.', privacy: 'Privacidad', rights: 'NorthForge Studios' },
};

const en: typeof es = {
  title: 'NorthForge Studios — AI software that doesn’t replace you',
  skip: 'Skip to content',
  nav: { trabajo: 'Work', como: 'How we work', contacto: 'Contact', other: 'ES', otherLabel: 'Leer en español' },
  heroLine: 'We make AI software that teaches you to do it better, instead of doing it for you.',
  heroCta: 'See what we make',
  heroPlace: 'Independent studio · Colombia',
  h1: 'NorthForge Studios, an AI software studio that assists instead of replacing',
  intro: {
    h: 'We sell non-replacement.',
    p: 'A forge makes tools for the hand that will use them. That is how we make software: AI helps you think, organize and review, and the work stays yours. You learn while you use it, and gain flexibility without losing your craft.',
    facts: [
      { k: 'MyWorld', v: 'Open beta, for writers' },
      { k: 'WaShop Admin', v: 'AI WhatsApp for businesses' },
      { k: 'Spanish & English', v: 'The languages of our tools' },
      { k: 'Colombia', v: 'Where we work from' },
    ],
  },
  live: {
    h: 'Ask both the same thing.',
    p: 'Pick a request and see the difference between an AI that replaces you and a tool made by NorthForge. The dark answer sums up how MyWorld responds.',
    a: 'An AI that replaces you',
    b: 'A NorthForge tool',
    examples: [
      { pedido: 'Write chapter 3 for me.', donde: 'Mira, in MyWorld',
        reemplazo: 'Here is chapter 3: “Rain was falling on the village when Ana…” (2,400 words, ready to paste).',
        nf: 'I won’t write it for you. Before you start: what has to have changed for Ana by the end of this chapter? Tell me and I’ll help you order the scenes that lead there.' },
      { pedido: 'Fix my chapter.', donde: 'The study, in MyWorld',
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
      { src: '/work/mapa-sugerencias.jpg', cap: 'The observatory: possible connections', w: 620, h: 387, pos: '12% 0' },
      { src: '/work/fichero-ficha.jpg', cap: 'The card file: every character’s sheet', w: 620, h: 387 },
      { src: '/work/mesa-agenda.jpg', cap: 'The table: what is left to decide', w: 620, h: 387 },
      { src: '/work/imprenta-capitulo.jpg', cap: 'The press: your book, ready', w: 620, h: 387 },
    ],
    washop: { name: 'WaShop Admin', p: 'AI WhatsApp automation for businesses: connect your WhatsApp and Airi handles questions, sales and support.', link: 'See WaShop Admin' },
    year: '2026',
  },
  how: {
    h: 'How we work',
    steps: [
      { run: 'First, the person decides.', rest: 'Nothing enters their work without their approval. The AI proposes, points out and asks; the last word belongs to whoever uses the tool.', img: '/work/fichero-entrevista.jpg', alt: 'MyWorld card file interview: the Architect asks and the author answers' },
      { run: 'While working, they learn.', rest: 'Every tool explains why it suggests something and leaves lessons and exercises built from what it notices. Over time you need less help, not more.', video: '/work/mira.mp4', poster: '/work/mira.jpg', alt: 'Mira, MyWorld’s companion, answering with sources from the canon' },
      { run: 'When something fails, we say so.', rest: 'We are honest about AI’s limits, the data we keep and what it costs. A tool that defends human work has to be clear about itself.', img: '/work/estudio-lector.jpg', alt: 'MyWorld study report: how the chapter reads to a reader' },
      { run: 'In the end, the work is yours.', rest: 'Your files live in your account and you can take them whenever you want. What you made with our tools stays yours.', img: '/work/imprenta-indice.jpg', alt: 'MyWorld’s press showing the book’s table of contents' },
    ],
  },
  about: {
    h: 'Who',
    people: [
      { name: 'Deiner David Trelles', role: 'Product, design and creative direction', x: 'https://x.com/Dei_KiMi' },
      { name: 'Daniel Yadir Perea', role: 'Backend and architecture', x: 'https://x.com/Danielceon0rth' },
    ],
    p: 'We are a small studio from Colombia. We started with MyWorld because we wanted to write with AI’s help without giving up the writing.',
  },
  contact: { hello: 'Write to us', aria: 'Email NorthForge' },
  footer: { invite: 'Have an idea that should teach rather than replace?', invite2: 'Let’s talk.', privacy: 'Privacy', rights: 'NorthForge Studios' },
};

export const COPY = { es, en };
