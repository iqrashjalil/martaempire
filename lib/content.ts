/**
 * All site copy lives here so pages and sections stay presentational.
 * Copy is adapted from martaempire.com. Variant 2: white + burgundy, one page
 * per subject (home, services, pillars, appointment, FAQ).
 */

export const site = {
  name: "Marta Empire",
  url: "https://www.martaempire.com",
  description:
    "Private identity-level mentoring for established female founders building boutique, premium empires. Higher prices. Fewer clients. Deeper work.",
  mentor: "Marta Szkudlarek",
  email: "info@martaszkudlarek.pl",
  instagram: "https://www.instagram.com/martaempire",
  location: "Poznań, Poland · Clients worldwide",
  truthSessionCheckout: "https://buy.stripe.com/aFaaEXfluh2Fa6DabV3wQ1B",
};

export const routes = {
  home: "/",
  services: "/services",
  truthSession: "/services#truth-session",
  vip: "/services#vip-mentoring",
  pillars: "/pillars",
  appointment: "/appointment",
  faq: "/faq",
  about: "/#about",
  terms: "/terms",
} as const;

export const nav = [
  { label: "Services", href: routes.services },
  { label: "Pillars", href: routes.pillars },
  { label: "FAQ", href: routes.faq },
];

export const applyCta = { label: "Apply", long: "Apply for VIP Mentoring", href: routes.appointment };


/* ── Home ─────────────────────────────────────────────────── */

export const home = {
  hero: {
    titleA: "Queen",
    titleB: "Identity.",
    lead: "You have outgrown the version of you that built this. Private mentoring for established female founders building boutique, premium empires.",
    primary: { label: "Book the Truth Session", href: routes.truthSession },
    secondary: { label: "Apply for VIP Mentoring", href: routes.appointment },
    stats: [
      { k: "Format", v: "Private, 1:1, live" },
      { k: "Clients", v: "A small number at a time" },
      { k: "Model", v: "Fewer clients, higher entry" },
    ],
  },
  truths: {
    titleA: "You built it.",
    titleB: "Now it runs on you.",
    items: [
      "The business works, but it still runs on your energy.",
      "You can sell, and you are still proving.",
      "Your name is recognised, but it does not yet carry weight.",
      "You do not need more information. You need precise confrontation.",
    ],
  },
  offers: {
    titleA: "Two ways",
    titleB: "to begin.",
    body: "Start with one decision, or rebuild the whole model. Both are private and live.",
    link: { label: "See both services", href: routes.services },
  },
  pillars: {
    titleA: "Four pillars",
    titleB: "of the Queen.",
    body: "Who you become, and what you do differently. When the root is solid, the empire holds.",
    link: { label: "Explore the pillars", href: routes.pillars },
  },
  about: {
    titleA: "I do not build fast.",
    titleB: "I build for the next twenty years.",
    body: "Everything I mentor was built in my own body first. Not theory. Ground you can stand on.",
    facts: [
      { k: "Method", v: "Identity, then decisions, then revenue" },
      { k: "Based", v: "Poznań, Poland · clients worldwide" },
      { k: "Sessions", v: "Live on Zoom" },
    ],
  },
  faq: {
    titleA: "Before you",
    titleB: "decide.",
    link: { label: "All questions", href: routes.faq },
  },
  cta: {
    titleA: "The room is small.",
    titleB: "I read every application myself.",
    primary: { label: "Apply for VIP Mentoring", href: routes.appointment },
    secondary: { label: "Or book the Truth Session", href: routes.truthSession },
  },
};

/* ── Services ─────────────────────────────────────────────── */

export const services = {
  meta: {
    title: "Services",
    description: "The Truth Session ($666, 90 minutes, live 1:1) and VIP Mentoring (3 × $4,997, a three-month private container).",
  },
  hero: {
    titleA: "Two ways in.",
    titleB: "One identity being built.",
    lead: "Start with the Truth Session. VIP Mentoring is by application, and applying commits you to nothing.",
  },
  tiers: [
    {
      id: "truth-session",
      index: "01",
      tier: "The Initiation",
      name: "The Truth Session",
      price: "$666",
      terms: "One payment · 90 minutes · Live 1:1 on Zoom",
      body: "We name the pattern running your business, price it, and define the one decision that changes the next thirty days.",
      includes: ["Private 90-minute session, live, 1:1", "Intake read personally before we meet", "Written Truth Map and full recording"],
      after: [
        "Secure checkout on Stripe, in a new tab.",
        "Receipt and invoice by email.",
        "The intake follows by email, and we set the session time from there.",
      ],
      cta: { label: "Book the Truth Session · $666", href: site.truthSessionCheckout, external: true },
      note: "Start here if you are new.",
    },
    {
      id: "vip-mentoring",
      index: "02",
      tier: "The Container",
      name: "VIP Mentoring",
      price: "3 × $4,997",
      terms: "Three payments · 3-month private container",
      body: "Three months to rebuild the identity behind your pricing, positioning, clients and capacity.",
      includes: ["Private 1:1 sessions every two weeks", "Telegram access Monday to Thursday", "Repricing, client criteria and positioning"],
      after: [
        "Seven questions, about four minutes.",
        "I read every application myself.",
        "If it is a yes, you receive the proposed scope, schedule and payment terms by email.",
      ],
      cta: { label: "Apply for VIP Mentoring", href: routes.appointment, external: false },
      note: "By application only. Applying commits you to nothing.",
    },
  ],
  fit: {
    titleA: "Who this is",
    titleB: "built for.",
    forTitle: "This is for her",
    forItems: [
      "An established founder, already earning, already leading.",
      "A business that works and still depends on her energy.",
      "She wants a boutique model: higher prices, fewer clients, deeper work.",
      "She wants precise confrontation, not more information.",
    ],
    notTitle: "This is not for her",
    notItems: [
      "She is looking for a quick fix or a rescue.",
      "She wants a course, templates or a funnel.",
      "She wants agreement more than she wants the truth.",
    ],
  },
  cta: {
    titleA: "Not sure which?",
    titleB: "Start with the truth.",
    primary: { label: "Book the Truth Session · $666", href: site.truthSessionCheckout },
    secondary: { label: "Apply for VIP Mentoring", href: routes.appointment },
  },
};

/* ── Pillars ──────────────────────────────────────────────── */

export const pillars = {
  meta: {
    title: "The Four Pillars",
    description: "Self Concept, The Foundation, Sacred Standards and Shakti: the four pillars of Queen Identity mentoring, and the six decisions where the work lands.",
  },
  hero: {
    titleA: "Four pillars",
    titleB: "of the Queen.",
    lead: "Who you become, and what you do differently. When the root is solid, the empire holds.",
  },
  items: [
    {
      n: "01",
      title: "Self Concept",
      tags: ["Prices", "Authority", "Decisions", "Visibility"],
      becomes:
        "The woman who no longer decides from approval, and knows exactly what she is worth before she opens her mouth.",
      does:
        "Sets prices from the depth she gives, not from what feels safe. Makes the expensive decision without a committee and says the specific thing in public.",
      mantra: "Your identity is the strategy. Everything else is execution.",
    },
    {
      n: "02",
      title: "The Foundation",
      tags: ["Offer", "Capacity", "Rhythm", "Structure"],
      becomes: "The woman who builds one thing for the next ten years instead of a new era every season.",
      does:
        "Defines capacity before she sells. Designs the offer around a real outcome and keeps a rhythm that lets the business compound.",
      mantra: "Structure is the throne. Everything else is decoration.",
    },
    {
      n: "03",
      title: "Sacred Standards",
      tags: ["Client selection", "Access", "Boundaries", "Team"],
      becomes: "The woman who no longer trades parts of herself for closeness, revenue or approval.",
      does:
        "Selects clients on purpose and declines the ones who cost more than they pay. Puts response times and days off in writing, and delegates what was never hers to carry.",
      mantra: "You do not lower your throne. You raise the entry.",
    },
    {
      n: "04",
      title: "Shakti",
      tags: ["Creation", "Expression", "Receiving", "Leadership"],
      becomes: "The woman who creates from fullness, and leads without living inside permanent pressure.",
      does:
        "Creates from her own material, not the market's. Receives money, help and attention without shrinking, and leads with clarity rather than urgency.",
      mantra: "Depth is the differentiator. Presence is the leverage.",
    },
  ],
  decisions: {
    titleA: "We build the woman.",
    titleB: "The business follows.",
    body: "Six places the work lands, on your real numbers and your real calendar.",
    items: [
      {
        title: "Pricing and offer architecture",
        body: "What your prices say about your self-concept, and an offer where price, depth and delivery agree.",
      },
      { title: "Client selection", body: "Who gets access, who does not, and the yeses you say out of fear of an empty calendar." },
      { title: "Positioning and communication", body: "One category, one clear promise, one recognisable voice." },
      { title: "Visibility and authority", body: "How much truth you allow into public view, said consistently in your own register." },
      { title: "Access, boundaries and capacity", body: "Calendar, response times, team. Scale that does not cost your nervous system." },
      { title: "Decision-making and structure", body: "How you decide when it is expensive or unpopular. Structure that compounds." },
    ],
  },
  cta: {
    titleA: "Soul becomes a decision.",
    titleB: "That is the whole method.",
    primary: { label: "Apply for VIP Mentoring", href: routes.appointment },
    secondary: { label: "See the services", href: routes.services },
  },
};

/* ── Stories ──────────────────────────────────────────────── */

export const stories = {
  titleA: "Four women.",
  titleB: "Four decisions.",
  items: [
    {
      who: "A service founder with a full calendar and no room in it.",
      decision: "She rebuilt the offer around a defined outcome instead of availability.",
      change: "A raised entry point, and two days a week protected for creation.",
    },
    {
      who: "A seven-figure founder whose brand was known but generic.",
      decision: "She named the one thing she is willing to be known for.",
      change: "One clear position, and inbound clients who arrive already convinced.",
    },
    {
      who: "A founder who could sell to anyone and still felt she had to prove it.",
      decision: "She priced at the level of the depth she gives, and held it.",
      change: "A selection process before every yes.",
    },
    {
      who: "A founder in expansion with a structure built for an earlier version of her.",
      decision: "She kept one model and deepened it, with capacity defined first.",
      change: "A business that compounds, no longer tied to how much she holds.",
    },
  ],
};

/* ── FAQ ──────────────────────────────────────────────────── */

export type FaqItem = { q: string; a: string };

export const faq = {
  meta: {
    title: "FAQ",
    description: "Honest answers about Queen Identity mentoring: the work, the two offers, applying, sessions and payment.",
  },
  hero: {
    titleA: "The honest",
    titleB: "answers.",
    lead: "What the work is, how the two offers differ, and what happens after you book or apply.",
  },
  groups: [
    {
      id: "the-work",
      title: "The work",
      items: [
        { q: "I have already worked with mentors.", a: "Then you have the strategy. We change the identity making the decisions inside it." },
        {
          q: "I do not have time for another long program.",
          a: "There is no curriculum. We work in real time on the decisions you are facing this month.",
        },
        {
          q: "What exactly will change in my business?",
          a: "Your prices, your client criteria, your availability, your positioning and your rhythm.",
        },
      ],
    },
    {
      id: "the-offers",
      title: "The offers",
      items: [
        {
          q: "What is the actual difference between the two offers?",
          a: "The Truth Session names the pattern and one decision. VIP Mentoring is where that decision becomes your offer, your client list and your position.",
        },
        {
          q: "Does applying commit me to anything?",
          a: "No. An application is an invitation to talk, not a contract. If it is a yes, I send the proposed scope, schedule and payment terms by email, and nothing is agreed until you accept them.",
        },
        {
          q: "Can I be declined?",
          a: "Yes. I read every application personally and accept only when the model, the moment and my room match. You will hear from me either way.",
        },
      ],
    },
    {
      id: "practicalities",
      title: "Practicalities",
      items: [
        {
          q: "What happens after I book the Truth Session?",
          a: "Stripe sends your receipt. The intake follows by email, and we set the session time from there.",
        },
        { q: "Where do sessions happen?", a: "Live on Zoom. You need a stable connection and a quiet room." },
        {
          q: "Can I withdraw after paying?",
          a: "As a consumer you may withdraw within 14 days, as set out in the Terms, except where the service has already been fully delivered with your consent. Write to me and a refund follows within 14 days.",
        },
        { q: "Will I receive an invoice?", a: "Yes. Every purchase is documented by an invoice sent to your email." },
      ],
    },
  ] as { id: string; title: string; items: FaqItem[] }[],
  cta: {
    titleA: "Still deciding?",
    titleB: "Ask me directly.",
    primary: { label: "Apply for VIP Mentoring", href: routes.appointment },
  },
};

/** The three questions previewed on the home page. */
export const faqPreview: FaqItem[] = [faq.groups[1].items[0], faq.groups[1].items[1], faq.groups[0].items[1]];

/* ── Appointment (application) ────────────────────────────── */

export type Question = {
  key: string;
  question: string;
  hint?: string;
  type: "input" | "email" | "textarea";
  placeholder?: string;
  min: number;
  max: number;
};

export const application = {
  meta: {
    title: "Apply for VIP Mentoring",
    description: "Seven questions, about four minutes. Marta reads every application for VIP Mentoring personally.",
  },
  label: "Appointment",
  title: "Write to me.",
  body: "I read every application myself. If your model, your moment and my room match, I will write to you personally.",
  meta2: "7 questions · ~4 minutes · Private",
  steps: [
    { k: "You apply", v: "Seven honest answers. You can review them before they are sent." },
    { k: "I read", v: "Every application, personally, within a few days." },
    { k: "We decide", v: "If it is a yes, you receive scope, schedule and terms by email." },
  ],
  intro: {
    title: "Seven questions. One woman reading.",
    body: "Your name, your email, and five honest answers about what you are building, where it is going, why now, your revenue, and the transformation you are ready for.",
    cta: "Begin the application",
    aside: "Private & confidential",
    reassurance: "Applying commits you to nothing. Your answers stay between us.",
  },
  review: {
    title: "Read it once more.",
    hint: "Everything you wrote, exactly as I will read it.",
    legal: "By sending this you agree to the",
    cta: "Send my application",
  },
  questions: [
    { key: "full_name", question: "What is your full name?", type: "input", placeholder: "Your name", min: 2, max: 100 },
    {
      key: "email",
      question: "Where can I reach you?",
      hint: "Your private email. This is where I will respond personally.",
      type: "email",
      placeholder: "you@example.com",
      min: 5,
      max: 255,
    },
    {
      key: "currently_building",
      question: "What are you currently building?",
      hint: "Your business, your craft, your next move.",
      type: "textarea",
      placeholder: "I am building… / I am expanding… / I am creating…",
      min: 10,
      max: 1000,
    },
    {
      key: "vision_3_6_months",
      question: "What is your vision for the next 3–6 months?",
      hint: "Where are you taking this in the near future?",
      type: "textarea",
      min: 10,
      max: 1000,
    },
    {
      key: "why_now",
      question: "Why now?",
      hint: "What makes this the moment you choose to step forward?",
      type: "textarea",
      min: 10,
      max: 1000,
    },
    {
      key: "current_revenue",
      question: "What is your current revenue?",
      hint: "A range or a number. Your honesty sets the container.",
      type: "textarea",
      min: 2,
      max: 500,
    },
    {
      key: "ready_for_transformation",
      question: "What transformation are you ready for?",
      hint: "Inside you, around you, in the way you lead and receive.",
      type: "textarea",
      min: 10,
      max: 1000,
    },
  ] satisfies Question[],
  success: {
    title: "Received.",
    body: "I read every application personally. You will hear from me either way within a few days.",
    sign: "Thank you for the trust.",
  },
};

/* ── Footer ───────────────────────────────────────────────── */

export const footer = {
  line: "Private identity mentoring for established female founders.",
  columns: [
    {
      title: "Pages",
      links: [
        { label: "Home", href: routes.home },
        { label: "Services", href: routes.services },
        { label: "Pillars", href: routes.pillars },
        { label: "FAQ", href: routes.faq },
      ],
    },
    {
      title: "Begin",
      links: [
        { label: "The Truth Session", href: routes.truthSession },
        { label: "VIP Mentoring", href: routes.vip },
        { label: "Apply", href: routes.appointment },
        { label: "Terms", href: routes.terms },
      ],
    },
  ],
  legal: `© ${new Date().getFullYear()} Marta Empire. All rights reserved.`,
};
