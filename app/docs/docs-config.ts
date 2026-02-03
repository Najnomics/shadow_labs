export const DOCS = [
  {
    slug: 'technical-overview',
    title: 'Technical Overview',
    description: 'One-page summary: purpose, mechanism, FHE advantage, security status, and performance.',
  },
  {
    slug: 'quickstart',
    title: 'Quick Start',
    description: 'Integration guide, testnet contract addresses, and a simple example.',
  },
  {
    slug: 'security',
    title: 'Security',
    description: 'Security architecture, audit status, and best practices for integrators.',
  },
  {
    slug: 'whitepaper',
    title: 'White Paper',
    description: 'Problem statement, solution design, and technical deep dive.',
  },
] as const

export type DocSlug = (typeof DOCS)[number]['slug']

export function getDocBySlug(slug: string): (typeof DOCS)[number] | undefined {
  return DOCS.find((d) => d.slug === slug)
}

export const OVERVIEW = { slug: '', title: 'Overview', href: '/docs' } as const

export function getPrevNext(slug: string): {
  prev: (typeof DOCS)[number] | typeof OVERVIEW | null
  next: (typeof DOCS)[number] | null
} {
  const index = DOCS.findIndex((d) => d.slug === slug)
  if (index === -1) return { prev: null, next: null }
  return {
    prev: index > 0 ? DOCS[index - 1] : index === 0 ? OVERVIEW : null,
    next: index < DOCS.length - 1 && index >= 0 ? DOCS[index + 1] : null,
  }
}
