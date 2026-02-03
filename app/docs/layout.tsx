import Link from 'next/link'

const docLinks = [
  { href: '/docs', label: 'Overview' },
  { href: '/docs/technical-overview', label: 'Technical Overview' },
  { href: '/docs/quickstart', label: 'Quick Start' },
  { href: '/docs/security', label: 'Security' },
  { href: '/docs/whitepaper', label: 'White Paper' },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="pt-16 sm:pt-20 min-h-screen flex flex-col">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col lg:flex-row gap-8 lg:gap-12">
        <aside className="lg:w-52 flex-shrink-0">
          <nav className="sticky top-24 space-y-1">
            <h2 className="text-xs font-bold uppercase tracking-wider text-shadow-text-gray mb-4">
              Documentation
            </h2>
            {docLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-shadow-text-light hover:text-white transition-colors py-1"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 min-w-0 docs-content">
          {children}
        </main>
      </div>
    </div>
  )
}
