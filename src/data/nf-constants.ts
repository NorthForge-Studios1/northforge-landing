export const CONTACT_EMAIL = 'contacto@northforgestudios.tech';
export const X_URL = 'https://x.com/NorthForgeHQ';
export const GITHUB_URL = 'https://github.com/North-Chive';

export interface FeaturedProduct {
  name: string;
  tagline: string;
  tag: string;
  url: string;
  author: string;
  accent: string;
}

export interface OwnProduct {
  name: string;
  description: string;
  tag: string;
  status: 'live' | 'soon';
  url?: string;
  accent: string;
}

export const FEATURED: FeaturedProduct[] = [];

export const PRODUCTS: OwnProduct[] = [
  {
    name: 'MyWorld',
    description:
      "A creative IDE for writers building fictional worlds. Maps your story, detects contradictions, and asks the questions you haven't thought to ask yourself.",
    tag: 'Creative IDE · AI',
    status: 'live',
    url: 'https://myworldhistory.site',
    accent: '#67e8f9',
  },
  {
    name: 'WaShop Admin',
    description:
      'AI-powered WhatsApp automation for businesses. Connect WhatsApp in minutes and let Airi handle service, sales, and support — 24/7.',
    tag: 'SaaS · WhatsApp · AI',
    status: 'soon',
    accent: '#3b82f6',
  },
];

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Submit',
    desc: "Tell us about your product — what it does, who it's for, and where it lives.",
  },
  {
    step: '02',
    title: 'We Review',
    desc: 'Our team evaluates every submission. We look for real products solving real problems.',
  },
  {
    step: '03',
    title: 'We Amplify',
    desc: 'Featured on our platform, promoted on our networks, and introduced to our community.',
  },
];

export const OFFERS = [
  { glyph: '◆', label: 'Featured listing', desc: 'A dedicated page on northforgestudios.tech' },
  { glyph: '◆', label: 'Social promotion', desc: 'Posts on our X account and channels' },
  { glyph: '◆', label: 'Community intro', desc: 'Introduced to our developer community' },
  { glyph: '◆', label: 'Newsletter', desc: 'Included in our tech digest (coming soon)' },
];

export const TEAM = [
  {
    initials: 'DP',
    name: 'Daniel Yadir Perea',
    role: 'CEO · Technical Director',
    accent: '#67e8f9',
    xUrl: 'https://x.com/Danielceon0rth',
  },
  {
    initials: 'DT',
    name: 'Deiner David Trelles',
    role: 'COO · Operations & Community',
    accent: '#3b82f6',
    xUrl: 'https://x.com/Dei_KiMi',
  },
];
