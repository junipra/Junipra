export interface CtaLink {
  label: string
  href: string
}

export interface HeroContent {
  eyebrow: string
  title: string
  description: string
  primaryCta?: CtaLink
  secondaryCta?: CtaLink
}

export interface IntroContent {
  title: string
  description: string
}

export interface HomeBranchContent {
  slug: string
  title: string
  description: string
  href: string
  status: "active" | "coming-soon"
}

export interface ServiceItem {
  slug: string
  title: string
  shortDescription: string
  bullets?: string[]
  featured?: boolean
}

export interface FaqItem {
  question: string
  answer: string
}

export interface BranchPageContent {
  slug: string
  title: string
  description: string
  hero: HeroContent
  intro: IntroContent
  services?: ServiceItem[]
  process?: string[]
  faq?: FaqItem[]
  primaryCta?: CtaLink
}
