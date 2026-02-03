'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function DocRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => (
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 mt-8 first:mt-0 text-glow">
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2 className="text-xl sm:text-2xl font-bold mt-8 mb-3 text-white">
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-lg sm:text-xl font-bold mt-6 mb-2 text-white">
            {children}
          </h3>
        ),
        p: ({ children }) => (
          <p className="text-shadow-text-light text-sm sm:text-base leading-relaxed mb-4">
            {children}
          </p>
        ),
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4 space-y-1 text-shadow-text-light text-sm sm:text-base">
            {children}
          </ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4 space-y-1 text-shadow-text-light text-sm sm:text-base">
            {children}
          </ol>
        ),
        li: ({ children }) => <li className="leading-relaxed">{children}</li>,
        strong: ({ children }) => (
          <strong className="font-bold text-white">{children}</strong>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            target={href?.startsWith('http') ? '_blank' : undefined}
            rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="text-shadow-green hover:underline"
          >
            {children}
          </a>
        ),
        code: ({ className, children, ...props }) => {
          const isBlock = className?.includes('language-')
          if (isBlock) {
            return (
              <pre className="bg-shadow-gray rounded-lg p-4 overflow-x-auto mb-4 border border-minimal">
                <code className="text-xs sm:text-sm text-shadow-text-light font-mono" {...props}>
                  {children}
                </code>
              </pre>
            )
          }
          return (
            <code
              className="bg-shadow-gray px-1.5 py-0.5 rounded text-shadow-green font-mono text-xs sm:text-sm"
              {...props}
            >
              {children}
            </code>
          )
        },
        pre: ({ children }) => <>{children}</>,
        blockquote: ({ children }) => (
          <blockquote className="border-l-2 border-shadow-green pl-4 my-4 text-shadow-text-light italic">
            {children}
          </blockquote>
        ),
        table: ({ children }) => (
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse border border-minimal text-sm sm:text-base">
              {children}
            </table>
          </div>
        ),
        thead: ({ children }) => (
          <thead className="bg-shadow-gray border-b border-minimal">
            {children}
          </thead>
        ),
        tbody: ({ children }) => <tbody className="text-shadow-text-light">{children}</tbody>,
        tr: ({ children }) => (
          <tr className="border-b border-minimal">{children}</tr>
        ),
        th: ({ children }) => (
          <th className="text-left p-3 font-bold text-white">{children}</th>
        ),
        td: ({ children }) => <td className="p-3">{children}</td>,
        hr: () => <hr className="border-minimal my-8" />,
      }}
    >
      {content}
    </ReactMarkdown>
  )
}
