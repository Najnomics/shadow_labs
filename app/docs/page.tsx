import Link from 'next/link'
import { Metadata } from 'next'
import { DOCS } from './docs-config'
import { FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - prud_Labs',
  description: 'Technical documentation for prud_Labs encrypted execution products: StealthAuction, ShadowBook, ShadowRouter.',
}

export default function DocsPage() {
  return (
    <div className="max-w-3xl w-full">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-glow">
        Documentation
      </h1>
      <p className="text-shadow-text-light mb-6 sm:mb-8 text-sm sm:text-base">
        Technical documentation for prud_Labs encrypted execution products on Fhenix and Uniswap v4.
      </p>
      <div className="grid gap-3 sm:gap-4">
        {DOCS.map((doc) => (
          <Link
            key={doc.slug}
            href={`/docs/${doc.slug}`}
            className="block glass-strong rounded-xl p-4 sm:p-6 border border-minimal hover:border-shadow-green/30 transition-colors active:scale-[0.99]"
          >
            <h2 className="text-base sm:text-lg font-bold mb-1.5 text-white">
              {doc.title}
            </h2>
            <p className="text-sm text-shadow-text-light leading-relaxed">
              {doc.description}
            </p>
          </Link>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-minimal">
        <a
          href="/prud-labs-documentation-links.html"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl p-4 border border-minimal hover:border-shadow-green/30 transition-colors text-shadow-text-light hover:text-white"
        >
          <FileText className="w-5 h-5 text-shadow-green flex-shrink-0" />
          <span>
            <span className="font-medium block">Documentation links (PDF)</span>
            <span className="text-xs text-shadow-text-gray">Open this page and use Print → Save as PDF for a single PDF with all doc links.</span>
          </span>
        </a>
      </div>
    </div>
  )
}
