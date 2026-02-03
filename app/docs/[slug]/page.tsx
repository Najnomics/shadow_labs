import { notFound } from 'next/navigation'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import DocRenderer from './DocRenderer'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'

const ALLOWED_SLUGS = [
  'technical-overview',
  'quickstart',
  'security',
  'whitepaper',
] as const

type Slug = (typeof ALLOWED_SLUGS)[number]

const titles: Record<Slug, string> = {
  'technical-overview': 'Technical Overview',
  quickstart: 'Quick Start',
  security: 'Security',
  whitepaper: 'White Paper',
}

export async function generateStaticParams() {
  return ALLOWED_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const slug = params.slug as Slug
  if (!ALLOWED_SLUGS.includes(slug)) {
    return { title: 'Not Found - prud_Labs' }
  }
  return {
    title: `${titles[slug]} - prud_Labs`,
    description: `prud_Labs documentation: ${titles[slug]}.`,
  }
}

export default async function DocPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug as Slug
  if (!ALLOWED_SLUGS.includes(slug)) {
    notFound()
  }

  const filePath = join(process.cwd(), 'docs', `${slug}.md`)
  if (!existsSync(filePath)) {
    notFound()
  }

  const content = readFileSync(filePath, 'utf-8')

  return (
    <article className="pb-12">
      <Link
        href="/docs"
        className="inline-flex items-center text-shadow-text-gray hover:text-white mb-6 text-sm transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Documentation
      </Link>
      <DocRenderer content={content} />
    </article>
  )
}
