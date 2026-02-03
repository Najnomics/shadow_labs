import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation - prud_Labs',
  description: 'Technical documentation for prud_Labs encrypted execution products: StealthAuction, ShadowBook, ShadowRouter.',
}

const docs = [
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
]

export default function DocsPage() {
  return (
    <div className="max-w-3xl">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-glow">
        Documentation
      </h1>
      <p className="text-shadow-text-light mb-8">
        Technical documentation for prud_Labs encrypted execution products on Fhenix and Uniswap v4.
      </p>
      <div className="space-y-6">
        {docs.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block glass-strong rounded-xl p-4 sm:p-6 border-minimal hover:border-shadow-green/30 transition-colors"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-2 text-white">
              {doc.title}
            </h2>
            <p className="text-sm sm:text-base text-shadow-text-light">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
