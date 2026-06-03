import logoImage from '../assets/logo.png'

/** Bundled logo — works in dev & production (no reliance on /public copy) */
export const LOGO_URL = logoImage

export const navLinks = [
  { label: 'Welcome', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Choose Rm', href: '#why-rm' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
] as const

export const consultationUrl = 'https://forms.gle/yYEbYRFDaReVjKRYA'

export const luxuryEnhancements = [
  {
    title: 'Destination Weddings',
    description: 'Transforming breathtaking backdrops into the canvas for your love story. We orchestrate comprehensive logistics, custom styling, and multi-day itinerary design for a flawless wedding experience anywhere in the world.',
    tag: 'Bespoke Romance'
  },
  {
    title: 'Destination Celebrations',
    description: 'Milestone birthdays, family reunions, and anniversaries worth traveling for. We combine local destination logistics with immersive themed decor to compose celebrations that linger in conversation for years.',
    tag: 'Milestones & Travel'
  },
  {
    title: 'Corporate Events & Retreats',
    description: 'Elevate your professional gatherings, brand launches, and executive retreats. We provide end-to-end logistics coordination and sophisticated styling that align with your brand identity and culture.',
    tag: 'Corporate & Culture'
  },
  {
    title: 'Bae-cation Romantic Getaways',
    description: 'Indulge in a romantic getaway like no other with our exclusive Bae-cation service. We curate exceptional experiences in breathtaking romantic destinations.',
    tag: 'Premium Romance'
  },
  {
    title: 'Video Book Itinerary',
    description: 'Instead of a paper schedule, our clients receive a Video Book Itinerary, a bespoke keepsake that guides them through the celebration while immersing them in the event’s story. More than an itinerary, it is an innovative way to showcase the journey with elegance.',
    tag: 'Bespoke Keepsake',
    videoUrl: 'https://youtube.com/shorts/-lPxg5bvLu0'
  }
] as const

export const featuredCaseStudies = [
  {
    title: "NMS Ex-Boys Reunion",
    location: "Dallas, Texas",
    client: "NMS Ex-Boys",
    description: "A memorable, high-energy reunion bringing together former classmates in Dallas.",
    images: ["/media/gallery/TRA_3230.jpg"]
  },
  {
    title: "Ebun's 50th Birthday",
    location: "Cabo, Mexico",
    client: "Ebun & Guests",
    description: "An elegant, sun-drenched milestone 50th birthday celebration in Cabo, Mexico.",
    images: ["https://images.unsplash.com/photo-1519167758481-83f29da8c2f3?auto=format&fit=crop&w=1200&q=80"]
  },
  {
    title: "Ranti's 40th Birthday",
    location: "Montego Bay, Jamaica",
    client: "Ranti & Guests",
    description: "An intimate and high-energy luxury destination birthday celebration.",
    images: ["https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80"]
  },
  {
    title: "CAC WOSEM North America Convention",
    location: "Sheraton Norfolk Waterside Hotel, Norfolk, Virginia",
    client: "Youth & Adult Conventions, CAC WOSEM Worldwide",
    guestSize: "Youth: 150, Adults: 500",
    description: "Full-scale convention planning and destination logistics coordination.",
    images: ["https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80"]
  },
  {
    title: "Valentine Ball",
    location: "Sheraton Norfolk Waterside Hotel & Marriott Chesapeake Hotel, Virginia",
    client: "Youth Ministry (Jesus and Me - JAM)",
    guestSize: "40-50 guests",
    description: "Exquisite and intimate themed Valentine's celebrations.",
    images: ["https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80"]
  }
] as const

export const blogPosts = [
  {
    title: "Why RM Events Excels as Your Corporate Events & Destination Planner",
    summary: "Corporate retreats aren’t just a break from the office—they're an investment in your team. Learn how we craft retreats that spark collaboration, innovation, and team spirit.",
    date: "May 2026",
    link: "https://www.rmeventsexperience.com/post/corporate-event-planner",
    readTime: "3 min read"
  },
  {
    title: "Event Expectations: Aligning with the Client",
    summary: "Successful events start with alignment. Discover our approach to capturing client visions and translating them into seamless, stress-free realities.",
    date: "April 2026",
    link: "https://www.rmeventsexperience.com/post/event-expectations-aligning-with-the-client",
    readTime: "4 min read"
  },
  {
    title: "Destination Event Planning: Dos and Don'ts",
    summary: "Planning a celebration in an exotic location or historic setting? Here are the essential rules to ensure a flawless experience for you and your guests.",
    date: "March 2026",
    link: "https://www.rmeventsexperience.com/post/destination-event-planning-dos-and-don-ts",
    readTime: "5 min read"
  }
] as const

export const hero = {
  eyebrow: 'Corporate & destination events',
  title: 'Elevate your',
  titleAccent: 'event experiences',
  subtitle:
    'Occasions worth traveling for, composed with intention, delivered with poise. Every detail, considered.',
  ctaPrimary: 'Begin your consultation',
  ctaSecondary: 'Explore our work',
  image: '/media/gallery/TRA_3230.jpg',
  imageAlt: 'RM Events Experience, elegant celebration setting',
}

export const about = {
  label: 'Welcome',
  title: 'Where vision becomes a lasting impression',
  paragraphs: [
    'At RM Events Experience, we translate your ambitions into gatherings guests remember long after the final toast. From corporate summits and destination celebrations to weddings and milestone moments, our team shapes each occasion with discernment and care.',
    'From first concept to final farewell, we bring creativity, precision, and a genuinely personal touch, so your experience feels seamless, composed, and unmistakably yours.',
  ],
  image: '/media/gallery/TRA_3167.jpg',
  imageAlt: 'RM Events Experience welcome section image',
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
  {
    src: '/media/gallery/TRA_3630.jpg',
    alt: 'Couple seated at evening event lounge',
    span: 'tall' as const,
  },
  {
    src: '/media/gallery/WDZ_6364.jpg',
    alt: 'Elegant outdoor event setup',
    span: 'wide' as const,
  },
  {
    src: '/media/gallery/WDZ_6465.jpg',
    alt: 'Wedding floral arch and ceremony decor',
    span: 'normal' as const,
  },
  { src: '/media/gallery/TRA_3230.jpg', alt: 'Formal reception toast', span: 'normal' as const },
  {
    src: '/media/gallery/WDZ_7275.jpg',
    alt: 'Evening tablescape details',
    span: 'wide' as const,
  },
  {
    src: '/media/gallery/WDZ_6800.jpg',
    alt: 'Garden celebration ambience',
    span: 'tall' as const,
  },
  {
    src: '/media/gallery/WDZ_6647.jpg',
    alt: 'Floral centerpiece closeup',
    span: 'normal' as const,
  },
  {
    src: '/media/gallery/TRA_3141.jpg',
    alt: 'Elegant celebration event',
    span: 'wide' as const,
  },
] as const

export const whyChoose = {
  label: 'Why Choose Rm',
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

export const aboutUs = {
  label: 'About Us',
  title: 'The story behind every unforgettable event',
  paragraphs: [
    'RM Events Experience is a premier destination and corporate event planning studio headquartered in Dallas, Texas. We specialise in orchestrating occasions that transcend the ordinary — from milestone celebrations and destination weddings to executive retreats and large-scale conventions.',
    'Our approach is rooted in intentionality: every timeline, vendor partnership, and design detail is calibrated to reflect each client\'s unique vision. We carry the complexity so our clients remain fully present with the people and moments that matter most.',
    'With a portfolio spanning intimate gatherings of twenty to multi-day conventions of five hundred and beyond, we bring the same standard of excellence and personal attention to every engagement. If you can envision it, we have the expertise and creativity to bring it to life.',
  ],
  founder: {
    name: 'Ranti Mafolasire',
    role: 'CEO & Creative Director',
    bio: 'A visionary leader with an unwavering commitment to crafting meaningful experiences, Ranti combines creative artistry with meticulous precision. Her hands-on approach and dedication to detail have established RM Events Experience as a trusted name in luxury event curation.',
  },
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
    { label: 'Instagram', href: 'https://www.instagram.com/rmeventsexperience', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/rmeventsexperience/', icon: 'facebook' },
    { label: 'YouTube', href: 'https://www.youtube.com/@RMEventsExperience', icon: 'youtube' },
  ],
  siteUrl: 'https://www.rmeventsexperience.com',
}
