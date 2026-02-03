'use client'

import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { DOCS, OVERVIEW, getPrevNext } from '../docs-config'

type Doc = (typeof DOCS)[number]
type PrevItem = Doc | typeof OVERVIEW

function isOverview(item: PrevItem | null): item is typeof OVERVIEW {
  return item !== null && 'href' in item && item.href === '/docs'
}

export default function DocNav({ currentSlug }: { currentSlug: string }) {
  const { prev, next } = getPrevNext(currentSlug)

  const prevHref = prev && isOverview(prev) ? prev.href : prev ? `/docs/${(prev as Doc).slug}` : null
  const prevLabel = prev ? (isOverview(prev) ? prev.title : (prev as Doc).title) : null
  const nextHref = next ? `/docs/${next.slug}` : null
  const nextLabel = next ? next.title : null

  if (!prevHref && !nextHref) return null

  return (
    <nav
      className="mt-10 pt-8 border-t border-minimal flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-between"
      aria-label="Document navigation"
    >
      {prevHref ? (
        <Link
          href={prevHref}
          className="group flex items-center gap-3 rounded-xl p-4 border border-minimal hover:border-shadow-green/30 hover:bg-white/[0.02] transition-colors min-w-0 sm:max-w-[48%]"
        >
          <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center">
            <ChevronLeft className="w-4 h-4 text-shadow-green group-hover:-translate-x-0.5 transition-transform" />
          </span>
          <span className="min-w-0">
            <span className="text-shadow-text-gray text-xs uppercase tracking-wider block mb-0.5">Previous</span>
            <span className="text-sm font-medium text-shadow-text-light group-hover:text-white truncate block">{prevLabel}</span>
          </span>
        </Link>
      ) : (
        <span className="sm:order-2" />
      )}
      {nextHref ? (
        <Link
          href={nextHref}
          className="group flex items-center gap-3 rounded-xl p-4 border border-minimal hover:border-shadow-green/30 hover:bg-white/[0.02] transition-colors min-w-0 sm:max-w-[48%] sm:flex-row-reverse sm:text-right sm:order-2"
        >
          <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center sm:order-2">
            <ChevronRight className="w-4 h-4 text-shadow-green group-hover:translate-x-0.5 transition-transform" />
          </span>
          <span className="min-w-0 sm:order-1">
            <span className="text-shadow-text-gray text-xs uppercase tracking-wider block mb-0.5">Next</span>
            <span className="text-sm font-medium text-shadow-text-light group-hover:text-white truncate block">{nextLabel}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
    </nav>
  )
}
