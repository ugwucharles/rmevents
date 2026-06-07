import logoImage from '../assets/logo.png'

/** Bundled logo — works in dev & production (no reliance on /public copy) */
export const LOGO_URL = logoImage

export const navLinks = [
  { label: 'Welcome', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Signature Endeavours', href: '#signature-endeavours' },
  { label: 'Why Choose Rm', href: '#why-rm' },
  { label: 'About Us', href: '#about-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
] as const

export const consultationUrl = 'https://forms.gle/yYEbYRFDaReVjKRYA'

export const luxuryEnhancements = [
  {
    title: 'Destination Weddings',
    description: 'Transforming breathtaking backdrops into the canvas for your love story. We orchestrate comprehensive logistics, custom styling, and multi-day itinerary design for a flawless wedding experience anywhere in the world.',
    tag: 'Bespoke Romance',
    image: '/media/services/wedding.jpg'
  },
  {
    title: 'Destination Celebrations',
    description: 'Milestone birthdays, family reunions, and anniversaries worth traveling for. We combine local destination logistics with immersive themed decor to compose celebrations that linger in conversation for years.',
    tag: 'Milestones & Travel',
    image: '/media/services/celebration.jpg'
  },
  {
    title: 'Corporate Events & Retreats',
    description: 'Elevate your professional gatherings, brand launches, and executive retreats. We provide end-to-end logistics coordination and sophisticated styling that align with your brand identity and culture.',
    tag: 'Corporate & Culture',
    image: '/media/services/corporate-new.jpg'
  },
  {
    title: 'Bae-cation Romantic Getaways',
    description: 'Indulge in a romantic getaway like no other with our exclusive Bae-cation service. We curate exceptional experiences in breathtaking romantic destinations.',
    tag: 'Premium Romance',
    image: '/media/services/baecation.jpg'
  },
  {
    title: 'Video Book Itinerary',
    description: 'Instead of a paper schedule, we offer our clients a Video Book Itinerary, a bespoke keepsake that guides them through the celebration while immersing them in the event’s story. More than an itinerary, it is an innovative way to showcase the journey with elegance.',
    tag: 'Bespoke Keepsake',
    videoUrl: 'https://youtube.com/shorts/-lPxg5bvLu0'
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
  eyebrow: 'Destination & Corporate Events',
  title: 'Elevate your',
  titleAccent: 'event experiences',
  subtitle:
    'Occasions worth traveling for, composed with intention, delivered with poise. Every detail, considered.',
  ctaPrimary: 'Begin your consultation',
  ctaSecondary: 'Explore our work',
  image: '/media/gallery/formal-party/formal-party-24.jpg',
  imageAlt: 'RM Events Experience, elegant celebration setting',
}

export const about = {
  label: 'Welcome',
  title: 'Where vision becomes a lasting impression',
  paragraphs: [
    'At RM Events Experience, we translate your ambitions into gatherings guests remember long after the final toast. From destination events to corporate summits and celebrations to weddings and milestone moments, our team shapes each occasion with discernment and care.',
    'From first concept to final farewell, we bring creativity, precision, and a genuinely personal touch, so your experience feels seamless, composed, and unmistakably yours.',
  ],
  image: '/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.42 PM (1).jpeg',
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

/** Portfolio projects — grouped gallery system with multi-day support */
export const portfolioProjects = [
  {
    title: "Ebun's 50th Birthday",
    subtitle: "An elegant milestone celebration",
    description: "An elegant, sun-drenched milestone 50th birthday celebration in Cabo, Mexico.",
    location: "Cabo, Mexico",
    client: "Ebun & Guests",
    coverImage: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.40 PM (3).jpeg",
    days: [
      {
        label: "Arrival",
        title: "Arrival in Paradise",
        images: [
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.32 PM (1).jpeg", alt: "Arrival image 1" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.32 PM (2).jpeg", alt: "Arrival image 2" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.32 PM.jpeg", alt: "Arrival image 3" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.33 PM (1).jpeg", alt: "Arrival image 4" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.33 PM (2).jpeg", alt: "Arrival image 5" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.33 PM (3).jpeg", alt: "Arrival image 6" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.33 PM (4).jpeg", alt: "Arrival image 7" },
          { src: "/events/EBUN 50th Birthday/Arrival/WhatsApp Image 2026-06-05 at 2.53.33 PM.jpeg", alt: "Arrival image 8" }
        ]
      },
      {
        label: "Day 1",
        title: "Meet & Greet",
        images: [
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.34 PM (1).jpeg", alt: "Meet & Greet image 1" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.34 PM (2).jpeg", alt: "Meet & Greet image 2" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.34 PM (3).jpeg", alt: "Meet & Greet image 3" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.34 PM.jpeg", alt: "Meet & Greet image 4" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM (1).jpeg", alt: "Meet & Greet image 5" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM (2).jpeg", alt: "Meet & Greet image 6" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM (3).jpeg", alt: "Meet & Greet image 7" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM (4).jpeg", alt: "Meet & Greet image 8" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM (5).jpeg", alt: "Meet & Greet image 9" },
          { src: "/events/EBUN 50th Birthday/Day 1 (Meet & Greet)/WhatsApp Image 2026-06-05 at 2.53.35 PM.jpeg", alt: "Meet & Greet image 10" }
        ]
      },
      {
        label: "Day 2",
        title: "Welcome Cocktail",
        images: [
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.36 PM (1).jpeg", alt: "Welcome Cocktail image 1" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.36 PM.jpeg", alt: "Welcome Cocktail image 3" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.37 PM (1).jpeg", alt: "Welcome Cocktail image 4" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.37 PM (2).jpeg", alt: "Welcome Cocktail image 5" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.37 PM (4).jpeg", alt: "Welcome Cocktail image 7" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.37 PM (5).jpeg", alt: "Welcome Cocktail image 8" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.37 PM.jpeg", alt: "Welcome Cocktail image 9" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.38 PM (1).jpeg", alt: "Welcome Cocktail image 10" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.38 PM (2).jpeg", alt: "Welcome Cocktail image 11" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.38 PM (3).jpeg", alt: "Welcome Cocktail image 12" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.38 PM (4).jpeg", alt: "Welcome Cocktail image 13" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.38 PM.jpeg", alt: "Welcome Cocktail image 14" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.39 PM (1).jpeg", alt: "Welcome Cocktail image 15" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.39 PM (2).jpeg", alt: "Welcome Cocktail image 16" },
          { src: "/events/EBUN 50th Birthday/Day 2 (Welcome Cocktail)/WhatsApp Image 2026-06-05 at 2.53.39 PM.jpeg", alt: "Welcome Cocktail image 17" }
        ]
      },
      {
        label: "Day 3",
        title: "Yatch Tour",
        images: [
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.39 PM (1).jpeg", alt: "Yatch Tour image 1" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.39 PM.jpeg", alt: "Yatch Tour image 2" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.40 PM (1).jpeg", alt: "Yatch Tour image 3" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.40 PM (2).jpeg", alt: "Yatch Tour image 4" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.40 PM (3).jpeg", alt: "Yatch Tour image 5" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.40 PM.jpeg", alt: "Yatch Tour image 6" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.41 PM (1).jpeg", alt: "Yatch Tour image 8" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.41 PM (2).jpeg", alt: "Yatch Tour image 9" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.41 PM (3).jpeg", alt: "Yatch Tour image 10" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.41 PM (4).jpeg", alt: "Yatch Tour image 11" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.41 PM.jpeg", alt: "Yatch Tour image 12" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.42 PM (1).jpeg", alt: "Yatch Tour image 13" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.42 PM (2).jpeg", alt: "Yatch Tour image 14" },
          { src: "/events/EBUN 50th Birthday/Day 3 (Yatch Tour)/WhatsApp Image 2026-06-05 at 2.53.42 PM.jpeg", alt: "Yatch Tour image 15" }
        ]
      },
      {
        label: "Day 4",
        title: "Birthday Dinner",
        images: [
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.43 PM (1).jpeg", alt: "Birthday Dinner image 1" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.43 PM (2).jpeg", alt: "Birthday Dinner image 2" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.43 PM (3).jpeg", alt: "Birthday Dinner image 3" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.43 PM (4).jpeg", alt: "Birthday Dinner image 4" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.43 PM.jpeg", alt: "Birthday Dinner image 5" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.44 PM (1).jpeg", alt: "Birthday Dinner image 6" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.44 PM (2).jpeg", alt: "Birthday Dinner image 7" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.44 PM (3).jpeg", alt: "Birthday Dinner image 8" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.44 PM (4).jpeg", alt: "Birthday Dinner image 9" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.44 PM.jpeg", alt: "Birthday Dinner image 10" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.45 PM.jpeg", alt: "Birthday Dinner image 11" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.52 PM.jpeg", alt: "Birthday Dinner image 12" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.53 PM (1).jpeg", alt: "Birthday Dinner image 13" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.53 PM.jpeg", alt: "Birthday Dinner image 14" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.54 PM (1).jpeg", alt: "Birthday Dinner image 15" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.54 PM.jpeg", alt: "Birthday Dinner image 16" },
          { src: "/events/EBUN 50th Birthday/Day 4 (Birthday Dinner)/WhatsApp Image 2026-06-05 at 2.53.55 PM.jpeg", alt: "Birthday Dinner image 17" }
        ]
      }
    ]
  },
  {
    title: "NMS EX BOYS Reunion",
    subtitle: "A memorable reunion celebration",
    description: "A memorable, high-energy reunion bringing together former classmates.",
    location: "Dallas, Texas",
    client: "NMS Ex-Boys",
    coverImage: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.09 PM.jpeg",
    days: [
      {
        label: "Day 1",
        title: "Welcome Event",
        images: [
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.09 PM (1).jpeg", alt: "Welcome Event image 1" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.09 PM (2).jpeg", alt: "Welcome Event image 2" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.09 PM (3).jpeg", alt: "Welcome Event image 3" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.09 PM.jpeg", alt: "Welcome Event image 4" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (1).jpeg", alt: "Welcome Event image 5" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (2).jpeg", alt: "Welcome Event image 6" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (3).jpeg", alt: "Welcome Event image 7" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (4).jpeg", alt: "Welcome Event image 8" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (5).jpeg", alt: "Welcome Event image 9" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (6).jpeg", alt: "Welcome Event image 10" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM (7).jpeg", alt: "Welcome Event image 11" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.10 PM.jpeg", alt: "Welcome Event image 12" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.11 PM (1).jpeg", alt: "Welcome Event image 13" },
          { src: "/events/NMS EX BOYS/Day 1 Welcome Event/WhatsApp Image 2026-06-05 at 11.44.11 PM.jpeg", alt: "Welcome Event image 14" }
        ]
      },
      {
        label: "Day 2",
        title: "Diversity Night",
        images: [
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.56 PM (1).jpeg", alt: "Diversity Night image 1" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.56 PM.jpeg", alt: "Diversity Night image 2" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.57 PM (1).jpeg", alt: "Diversity Night image 3" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.57 PM (2).jpeg", alt: "Diversity Night image 4" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.57 PM (3).jpeg", alt: "Diversity Night image 5" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.57 PM (4).jpeg", alt: "Diversity Night image 6" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.57 PM.jpeg", alt: "Diversity Night image 7" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.58 PM (1).jpeg", alt: "Diversity Night image 8" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.58 PM.jpeg", alt: "Diversity Night image 9" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.59 PM (1).jpeg", alt: "Diversity Night image 10" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.59 PM (2).jpeg", alt: "Diversity Night image 11" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.59 PM (3).jpeg", alt: "Diversity Night image 12" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.59 PM (4).jpeg", alt: "Diversity Night image 13" },
          { src: "/events/NMS EX BOYS/Day 2 Diversity Night/WhatsApp Image 2026-06-05 at 11.49.59 PM.jpeg", alt: "Diversity Night image 14" }
        ]
      },
      {
        label: "Day 3",
        title: "Picnic",
        images: [
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.15 AM.jpeg", alt: "Picnic image 1" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.18 AM (1).jpeg", alt: "Picnic image 2" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.18 AM (2).jpeg", alt: "Picnic image 3" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.18 AM.jpeg", alt: "Picnic image 4" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.19 AM.jpeg", alt: "Picnic image 5" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.20 AM (1).jpeg", alt: "Picnic image 6" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.20 AM (2).jpeg", alt: "Picnic image 7" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.20 AM (3).jpeg", alt: "Picnic image 8" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.20 AM.jpeg", alt: "Picnic image 9" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (1).jpeg", alt: "Picnic image 10" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (10).jpeg", alt: "Picnic image 11" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (11).jpeg", alt: "Picnic image 12" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (2).jpeg", alt: "Picnic image 13" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (3).jpeg", alt: "Picnic image 14" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (4).jpeg", alt: "Picnic image 15" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (5).jpeg", alt: "Picnic image 16" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (6).jpeg", alt: "Picnic image 17" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (7).jpeg", alt: "Picnic image 18" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (8).jpeg", alt: "Picnic image 19" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM (9).jpeg", alt: "Picnic image 20" },
          { src: "/events/NMS EX BOYS/Day 3 Picnic/WhatsApp Image 2026-06-06 at 12.20.21 AM.jpeg", alt: "Picnic image 21" }
        ]
      },
      {
        label: "Day 3",
        title: "Dinner",
        images: [
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.25 AM (1).jpeg", alt: "Dinner image 1" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.25 AM (2).jpeg", alt: "Dinner image 2" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.25 AM.jpeg", alt: "Dinner image 3" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (1).jpeg", alt: "Dinner image 4" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (2).jpeg", alt: "Dinner image 5" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (3).jpeg", alt: "Dinner image 6" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (4).jpeg", alt: "Dinner image 7" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (5).jpeg", alt: "Dinner image 8" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM (6).jpeg", alt: "Dinner image 9" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.26 AM.jpeg", alt: "Dinner image 10" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.30 AM.jpeg", alt: "Dinner image 11" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.31 AM (1).jpeg", alt: "Dinner image 12" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.31 AM (2).jpeg", alt: "Dinner image 13" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.31 AM (3).jpeg", alt: "Dinner image 14" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.31 AM (4).jpeg", alt: "Dinner image 15" },
          { src: "/events/NMS EX BOYS/Day 3 Gala night/WhatsApp Image 2026-06-06 at 12.10.31 AM.jpeg", alt: "Dinner image 16" }
        ]
      }
    ]
  },
  {
    title: "Ranti's 40th Birthday",
    subtitle: "Luxury destination celebration",
    description: "An intimate and high-energy luxury destination birthday celebration.",
    location: "Montego Bay, Jamaica",
    client: "Ranti & Guests",
    coverImage: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.42 PM (1).jpeg",
    days: [
      {
        label: "Day 1",
        title: "Welcome Party",
        images: [
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.25 PM (1).jpeg", alt: "Welcome Party image 1" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.25 PM.jpeg", alt: "Welcome Party image 2" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.26 PM (1).jpeg", alt: "Welcome Party image 3" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.26 PM (2).jpeg", alt: "Welcome Party image 4" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.26 PM.jpeg", alt: "Welcome Party image 5" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.27 PM.jpeg", alt: "Welcome Party image 6" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.30 PM.jpeg", alt: "Welcome Party image 7" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.32 PM (1).jpeg", alt: "Welcome Party image 9" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.32 PM.jpeg", alt: "Welcome Party image 10" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.35 PM.jpeg", alt: "Welcome Party image 11" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.38 PM (1).jpeg", alt: "Welcome Party image 12" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.38 PM.jpeg", alt: "Welcome Party image 13" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.39 PM (1).jpeg", alt: "Welcome Party image 14" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.39 PM.jpeg", alt: "Welcome Party image 15" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.40 PM.jpeg", alt: "Welcome Party image 16" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.42 PM (1).jpeg", alt: "Welcome Party image 17" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.42 PM.jpeg", alt: "Welcome Party image 18" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.43 PM (1).jpeg", alt: "Welcome Party image 19" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.43 PM (2).jpeg", alt: "Welcome Party image 20" },
          { src: "/events/Ranti's 40th Birthday/Day 1 (Welcome party)/WhatsApp Image 2026-06-05 at 3.03.43 PM.jpeg", alt: "Welcome Party image 21" }
        ]
      },
      {
        label: "Day 2",
        title: "Boat Party",
        images: [
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.42 PM (1).jpeg", alt: "Boat Party image 1" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.42 PM.jpeg", alt: "Boat Party image 2" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.43 PM (1).jpeg", alt: "Boat Party image 3" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.43 PM.jpeg", alt: "Boat Party image 4" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.44 PM (1).jpeg", alt: "Boat Party image 5" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.44 PM.jpeg", alt: "Boat Party image 6" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.45 PM (1).jpeg", alt: "Boat Party image 7" },
          { src: "/events/Ranti's 40th Birthday/Day 2 (Boat Party)/WhatsApp Image 2026-06-05 at 3.07.45 PM.jpeg", alt: "Boat Party image 8" }
        ]
      },
      {
        label: "Day 3",
        title: "Cocktail Hour",
        images: [
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.02 PM.jpeg", alt: "Cocktail Hour image 1" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.03 PM (1).jpeg", alt: "Cocktail Hour image 2" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.03 PM.jpeg", alt: "Cocktail Hour image 3" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.04 PM (2).jpeg", alt: "Cocktail Hour image 4" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.04 PM.jpeg", alt: "Cocktail Hour image 6" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.05 PM.jpeg", alt: "Cocktail Hour image 7" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.06 PM (1).jpeg", alt: "Cocktail Hour image 8" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.06 PM.jpeg", alt: "Cocktail Hour image 9" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.07 PM.jpeg", alt: "Cocktail Hour image 10" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.08 PM (1).jpeg", alt: "Cocktail Hour image 11" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.08 PM.jpeg", alt: "Cocktail Hour image 12" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.09 PM (1).jpeg", alt: "Cocktail Hour image 13" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.09 PM.jpeg", alt: "Cocktail Hour image 14" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.10 PM (1).jpeg", alt: "Cocktail Hour image 15" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.10 PM.jpeg", alt: "Cocktail Hour image 16" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.11 PM (1).jpeg", alt: "Cocktail Hour image 17" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Cocktail Hour)/WhatsApp Image 2026-06-05 at 3.10.11 PM.jpeg", alt: "Cocktail Hour image 18" }
        ]
      },
      {
        label: "Day 3",
        title: "Dinner",
        images: [
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.12 PM (1).jpeg", alt: "Main Event image 1" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.12 PM.jpeg", alt: "Main Event image 2" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.13 PM (1).jpeg", alt: "Main Event image 3" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.13 PM.jpeg", alt: "Main Event image 4" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.14 PM (1).jpeg", alt: "Main Event image 5" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.14 PM.jpeg", alt: "Main Event image 6" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.15 PM (1).jpeg", alt: "Main Event image 7" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.15 PM.jpeg", alt: "Main Event image 8" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.16 PM (1).jpeg", alt: "Main Event image 9" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.16 PM.jpeg", alt: "Main Event image 10" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.17 PM (1).jpeg", alt: "Main Event image 11" },
          { src: "/events/Ranti's 40th Birthday/Day 3 (Main Event)/WhatsApp Image 2026-06-05 at 3.10.17 PM.jpeg", alt: "Main Event image 12" }
        ]
      }
    ]
  }
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

export const testimonials = {
  label: 'Reviews',
  title: 'Praise from our clients & partners',
  lead: 'RM Events Experience holds a 5.0-star rating based on customer feedback. Read what our clients and vendor partners say about their experience working with us.',
  items: [
    {
      author: 'Adeleke Ogunbela',
      role: 'Client',
      text: 'RM events planned and managed the ExBoys 2024 reunion in Dallas and it was fantastic. They did everything to ensure all attendees had memorable experiences.',
      rating: 5,
    },
    {
      author: 'Rose Frisco-Garzon',
      role: 'Client',
      text: 'RM Events Experience made our event smooth sailing from start to finish, the owner is very kind as well! Highly recommend for a stress-free, unforgettable event.',
      rating: 5,
    },
    {
      author: 'Michael Duru',
      role: 'Client',
      text: 'An extremely well organized and run event, by a very professional and detail-oriented Event planner. RM events was meticulous in their attention to detail.',
      rating: 5,
    },
    {
      author: 'DJ MIKEONZ',
      role: 'Fellow Vendor',
      text: 'Working with RM Events Experience as a fellow vendor was an absolute pleasure. Her team\'s exceptional communication and meticulous planning made the event a huge success.',
      rating: 5,
    },
    {
      author: 'Funmi The Host',
      role: 'MC / Host',
      text: 'RM events had an excellent attention to detail and her warm personality makes events less stressful. As a MC/host, working with a diligent, thorough planner is always a pleasure.',
      rating: 5,
    },
  ],
} as const

export const signatureEndeavours = {
  label: 'Signature Endeavours',
  title: 'Curated collection of exclusive experiences',
  lead: 'A selection of landmark events we have had the privilege of orchestrating — each one a testament to our commitment to precision, scale, and elegance.',
  events: [
    {
      name: 'CAC WOSEM North America Convention',
      edition: 'Edition I',
      venue: 'Sheraton Norfolk Waterside Hotel, Norfolk, Virginia',
      guestSize: 'Youth – 150 · Adults – 500',
      client: 'CAC WOSEM Worldwide & CAC WOSEM Norfolk, Virginia',
      image: '/media/signature/sheraton.jpg',
    },
    {
      name: 'CAC WOSEM North America Convention',
      edition: 'Edition II',
      venue: 'Sheraton Norfolk Waterside Hotel, Norfolk, Virginia',
      guestSize: 'Youth – 150 · Adults – 500',
      client: 'CAC WOSEM Worldwide & CAC WOSEM Norfolk, Virginia',
      image: '/media/signature/sheraton-2.jpg',
    },
    {
      name: 'Valentine Ball',
      edition: 'Edition I',
      venue: 'Sheraton Norfolk Waterside Hotel, Norfolk, Virginia',
      guestSize: '50 Guests',
      client: 'Youth Ministry (Jesus and Me – JAM), CAC WOSEM Norfolk, Virginia',
      image: '/media/signature/sheraton-3.jpg',
    },
    {
      name: 'Valentine Ball',
      edition: 'Edition II',
      venue: 'Marriott Chesapeake Hotel, Chesapeake, Virginia',
      guestSize: '40 Guests',
      client: 'Youth Ministry (Jesus and Me – JAM), CAC WOSEM Norfolk, Virginia',
      image: '/media/signature/marriott.avif',
    },
  ],
} as const
