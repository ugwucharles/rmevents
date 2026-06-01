import logoImage from '../assets/logo.png'

/** Bundled logo — works in dev & production (no reliance on /public copy) */
export const LOGO_URL = logoImage

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why RM', href: '#why-rm' },
  { label: 'Contact', href: '#contact' },
] as const

export const hero = {
  eyebrow: 'Corporate & destination events',
  title: 'Elevate your',
  titleAccent: 'event experiences',
  subtitle:
    'Occasions worth traveling for, composed with intention, delivered with poise. Every detail, considered.',
  ctaPrimary: 'Begin your consultation',
  ctaSecondary: 'Explore our work',
  image: '/media/gallery/rm-01.jpg',
  imageAlt: 'RM Events Experience, elegant celebration setting',
}

export const about = {
  label: 'Welcome',
  title: 'Where vision becomes a lasting impression',
  paragraphs: [
    'At RM Events Experience, we translate your ambitions into gatherings guests remember long after the final toast. From corporate summits and destination celebrations to weddings and milestone moments, our team shapes each occasion with discernment and care.',
    'From first concept to final farewell, we bring creativity, precision, and a genuinely personal touch, so your experience feels seamless, composed, and unmistakably yours.',
  ],
  image: '/media/gallery/rm-04.jpg',
  imageAlt: 'RM Events Experience, refined event design and atmosphere',
}

export const servicesIntro = {
  label: 'Services',
  title: 'Celebrations of every scale',
  lead: 'Planning should feel composed, not chaotic. We carry the details; you remain present with the people who matter most.',
  highlight: {
    title: 'Milestone moments, impeccably staged',
    body: 'A birthday on the horizon? An anniversary, shower, or reunion? We refine your ideas into an experience that feels effortless for you and extraordinary for your guests.',
  },
}

export const serviceCategories = [
  {
    title: 'Milestones & romance',
    items: ['Anniversaries', 'Engagements', 'Graduations', 'Retirement celebrations'],
  },
  {
    title: 'Gatherings with heart',
    items: ['Baby & bridal showers', 'Family reunions', 'Intimate home celebrations'],
  },
  {
    title: 'Corporate & culture',
    items: ['Conferences', 'Cultural festivals', 'Brand activations', 'Executive retreats'],
  },
  {
    title: 'Bespoke by design',
    items: ['Custom concepts', 'Destination logistics', 'Weddings & vow renewals'],
  },
] as const

/** Client photos from Drive zip — run `npm run import:media` after updating the zip */
export const galleryImages = [
  { src: '/media/gallery/rm-01.jpg', alt: 'RM Events, celebration atmosphere', span: 'tall' as const },
  { src: '/media/gallery/rm-02.jpg', alt: 'RM Events, curated event styling', span: 'wide' as const },
  { src: '/media/gallery/rm-03.jpg', alt: 'RM Events, guest experience', span: 'normal' as const },
  { src: '/media/gallery/rm-04.jpg', alt: 'RM Events, refined tablescape', span: 'normal' as const },
  { src: '/media/gallery/rm-05.jpg', alt: 'RM Events, destination gathering', span: 'wide' as const },
  { src: '/media/gallery/rm-06.jpg', alt: 'RM Events, milestone celebration', span: 'tall' as const },
  { src: '/media/gallery/rm-07.jpg', alt: 'RM Events, evening reception', span: 'normal' as const },
] as const

export const whyChoose = {
  label: 'Why RM',
  title: 'More than coordination, crafted experience',
  intro:
    'When you entrust RM Events Experience, you choose a studio devoted to bringing your vision forward with creativity, precision, and quiet confidence.',
  pillars: [
    {
      title: 'Vision, refined',
      description:
        'We listen closely, then elevate your ideas with thoughtful design, never overwhelming, always intentional.',
    },
    {
      title: 'Precision in execution',
      description:
        'Timelines, vendors, and guest flow managed with composure, so the day unfolds as gracefully as it looks.',
    },
    {
      title: 'A personal standard',
      description:
        'No two events are alike; our approach is tailored, attentive, and rooted in genuine partnership.',
    },
    {
      title: 'Memories that endure',
      description:
        'We do not simply plan events. We compose experiences that linger in conversation and photograph alike.',
    },
  ],
}

export const contact = {
  label: 'Contact',
  title: 'Let us shape what is next',
  lead: 'Share your occasion, timeline, and vision. We will respond with care and clarity.',
  email: 'hello@rmeventsexperience.com',
  phone: '(214) 814-4851',
  phoneTel: '+12148144851',
  location: {
    city: 'Dallas, Texas',
    country: 'United States',
  },
  socialNote: 'Have inquiries? You can also message us on our social media pages.',
  /* Update hrefs from Wix footer (Site → Social links) when you have exact URLs */
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'youtube' },
  ],
  siteUrl: 'https://www.rmeventsexperience.com',
}
