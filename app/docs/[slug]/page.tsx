import { notFound } from 'next/navigation'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import DocRenderer from './DocRenderer'
import DocNav from './DocNav'
import Link from 'next/link'
import { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { DOCS, getDocBySlug } from '../docs-config'

const ALLOWED_SLUGS = DOCS.map((d) => d.slug)

export async function generateStaticParams() {
  return ALLOWED_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const doc = getDocBySlug(params.slug)
  if (!doc) {
    return { title: 'Not Found - prud_Labs' }
  }
  return {
    title: `${doc.title} - prud_Labs`,
    description: `prud_Labs documentation: ${doc.description}`,
  }
}

export default async function DocPage({
  params,
}: {
  params: { slug: string }
}) {
  const slug = params.slug
  const doc = getDocBySlug(slug)
  if (!doc) {
    notFound()
  }

  const filePath = join(process.cwd(), 'docs', `${slug}.md`)
  if (!existsSync(filePath)) {
    notFound()
  }

  const content = readFileSync(filePath, 'utf-8')

  return (
    <article className="pb-8 sm:pb-12">
      <Link
        href="/docs"
        className="inline-flex items-center gap-2 text-sm text-shadow-text-gray hover:text-white mb-6 transition-colors py-1 -ml-1"
      >
        <ArrowLeft className="w-4 h-4 flex-shrink-0" aria-hidden />
        Back to Documentation
      </Link>
      <DocRenderer content={content} />
      <DocNav currentSlug={slug} />
    </article>
  )
}
