import type { BranchPageContent, HomeBranchContent } from "@/lib/types"

export const homePage = {
  hero: {
    eyebrow: "Junipra",
    title: "Building practical, creative, and digital ventures.",
    description:
      "Junipra is an independent umbrella for web services, creative projects, and small business ventures. We focus on simple, well-crafted solutions that are built to last.",
    primaryCta: {
      label: "Explore Services",
      href: "/web-services",
    },
    secondaryCta: {
      label: "View Ventures",
      href: "#branches",
    },
  },

  intro: {
    title: "A growing collection of focused work.",
    description:
      "Junipra brings together a small set of independent efforts across web, product, and creative spaces. Each branch is intentionally scoped, built with care, and designed to evolve over time.",
  },

  branches: [
    {
      slug: "web-services",
      title: "Web Services",
      description:
        "Modern, straightforward websites for small businesses, creators, and local brands.",
      href: "/web-services",
      status: "active",
    },
    {
      slug: "collective",
      title: "Junipra Collective",
      description:
        "Handmade and thoughtfully designed products for weddings, events, and everyday moments.",
      href: "/collective",
      status: "active",
    },
    {
      slug: "music",
      title: "Junipra Music",
      description:
        "An evolving creative space for sound, production, and future releases.",
      href: "/music",
      status: "coming-soon",
    },
  ] satisfies HomeBranchContent[],

  closingCta: {
    title: "Simple ideas, built well.",
    description:
      "We focus on clarity, quality, and steady progress, with no unnecessary complexity.",
    primaryCta: {
      label: "Get in Touch",
      href: "/contact",
    },
  },
}

export const webServicesPage: BranchPageContent = {
  slug: "web-services",
  title: "Junipra Web Services",
  description:
    "Practical, well-built websites designed to help small businesses and independent creators establish a strong online presence.",

  hero: {
    eyebrow: "Junipra Web Services",
    title: "Clean, reliable websites without the overhead.",
    description:
      "We build modern websites that are easy to manage, fast to load, and designed with clarity in mind. No unnecessary complexity, just solid, dependable work.",
    primaryCta: {
      label: "Start a Project",
      href: "/contact",
    },
  },

  intro: {
    title: "What we focus on",
    description:
      "Our work is centered around simple, effective web experiences for businesses that need a strong foundation online.",
  },

  services: [
    {
      slug: "business-websites",
      title: "Business Websites",
      shortDescription:
        "Custom websites built for credibility, clarity, and long-term use.",
      bullets: [
        "Responsive design",
        "Clear structure and navigation",
        "Launch-ready pages",
      ],
      featured: true,
    },
    {
      slug: "landing-pages",
      title: "Landing Pages",
      shortDescription:
        "Focused pages for offers, campaigns, or lead generation.",
      bullets: [
        "Conversion-focused layout",
        "Fast turnaround",
        "Simple analytics readiness",
      ],
    },
    {
      slug: "site-updates",
      title: "Site Updates & Improvements",
      shortDescription:
        "Ongoing support for updates, refinements, and small improvements.",
      bullets: [
        "Content updates",
        "Design tweaks",
        "Performance improvements",
      ],
    },
  ],

  process: [
    "Understand your goals and requirements",
    "Define a simple and clear structure",
    "Design and build the site",
    "Refine and prepare for launch",
  ],

  faq: [
    {
      question: "What types of clients do you work with?",
      answer:
        "We primarily work with small businesses, independent creators, and local brands looking for a clean and reliable web presence.",
    },
    {
      question: "Do you offer ongoing support?",
      answer:
        "Yes, we can provide ongoing updates and improvements depending on your needs.",
    },
    {
      question: "How complex are your builds?",
      answer:
        "We focus on practical, maintainable solutions rather than overly complex systems.",
    },
  ],

  primaryCta: {
    label: "Contact Us",
    href: "/contact",
  },
}

export const collectivePage: BranchPageContent = {
  slug: "collective",
  title: "Junipra Collective",
  description:
    "A creative product branch focused on handmade and thoughtfully designed items for weddings, events, and meaningful moments.",

  hero: {
    eyebrow: "Junipra Collective",
    title: "Designed for meaningful details.",
    description:
      "Junipra Collective focuses on simple, well-crafted products that add a personal touch to weddings, events, and everyday gifting.",
    primaryCta: {
      label: "Visit Shop",
      href: "#",
    },
  },

  intro: {
    title: "What we create",
    description:
      "Our focus is on small-batch, thoughtful items designed with care and attention to detail.",
  },

  services: [
    {
      slug: "wedding-items",
      title: "Wedding Details",
      shortDescription:
        "Custom items designed for weddings and special events.",
    },
    {
      slug: "event-products",
      title: "Event Products",
      shortDescription:
        "Simple, elegant pieces that enhance gatherings and celebrations.",
    },
    {
      slug: "giftable-items",
      title: "Giftable Pieces",
      shortDescription:
        "Thoughtful items designed for meaningful everyday moments.",
    },
  ],

  primaryCta: {
    label: "Explore Products",
    href: "#",
  },
}

export const musicPage: BranchPageContent = {
  slug: "music",
  title: "Junipra Music",
  description:
    "A developing creative branch focused on music, sound, and future audio projects.",

  hero: {
    eyebrow: "Junipra Music",
    title: "An evolving creative outlet.",
    description:
      "Junipra Music is a space for exploration in sound, production, and creative expression. This branch is currently in development.",
  },

  intro: {
    title: "In progress",
    description:
      "This branch will include future releases, audio projects, and creative experiments as it develops.",
  },

  primaryCta: {
    label: "Check Back Soon",
    href: "/",
  },
}
