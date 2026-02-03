import Link from 'next/link'
import { DOCS } from './docs-config'

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex-1 flex flex-col lg:flex-row gap-6 lg:gap-12">
        {/* Sidebar: horizontal scroll on mobile, vertical sticky on desktop */}
        <aside className="lg:w-52 flex-shrink-0 order-first lg:order-none">
          <h2 className="text-xs font-bold uppercase tracking-wider text-shadow-text-gray mb-3 lg:mb-4">
            Documentation
          </h2>
          <nav
            className="lg:sticky lg:top-24 flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 lg:mx-0 lg:px-0 lg:pb-0 lg:flex-col lg:overflow-visible lg:max-h-[calc(100vh-8rem)] overflow-y-auto"
            aria-label="Documentation menu"
            style={{ scrollbarWidth: 'thin' }}
          >
            <Link
              href="/docs"
              className="flex-shrink-0 lg:flex-shrink px-4 py-2.5 rounded-lg text-sm font-medium text-shadow-text-light hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors whitespace-nowrap border border-transparent hover:border-minimal lg:py-1.5 lg:px-0 lg:border-0"
            >
              Overview
            </Link>
            {DOCS.map((doc) => (
              <Link
                key={doc.slug}
                href={`/docs/${doc.slug}`}
                className="flex-shrink-0 lg:flex-shrink px-4 py-2.5 rounded-lg text-sm font-medium text-shadow-text-light hover:text-white hover:bg-white/5 active:bg-white/10 transition-colors whitespace-nowrap border border-transparent hover:border-minimal lg:py-1.5 lg:px-0 lg:border-0"
              >
                {doc.title}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 min-w-0 docs-content order-last">
          {children}
        </main>
      </div>
    </div>
  )
}
