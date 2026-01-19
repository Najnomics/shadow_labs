'use client'

import { motion } from 'framer-motion'
import Card from './Card'
import Button from './Button'
import Link from 'next/link'
import { Lock, BookOpen, Route } from 'lucide-react'

const ProductShowcase = () => {
  const products = [
    {
      id: 'stealthauction',
      name: 'StealthAuction',
      icon: Lock,
      tagline: 'Keep 100% of token launch value',
      description: 'Encrypted end-to-end auctions using FHE. Launch tokens without losing 15-40% to MEV extraction.',
      href: '/products/stealthauction',
      status: 'Testnet',
    },
    {
      id: 'shadowbook',
      name: 'ShadowBook',
      icon: BookOpen,
      tagline: 'Trade without signaling inventory',
      description: 'Encrypted order book / dark pool. Trade with real size without signaling inventory.',
      href: '/products/shadowbook',
      status: 'Testnet',
    },
    {
      id: 'shadowrouter',
      name: 'ShadowRouter',
      icon: Route,
      tagline: 'Unified encrypted execution',
      description: 'Single access point to all Shadow Labs encrypted products. One integration for all encrypted execution surfaces.',
      href: '/products/shadowrouter',
      status: 'Coming Soon',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Our Products
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light max-w-3xl mx-auto px-2">
            Encrypted execution products that keep your cards hidden
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, idx) => {
            const Icon = product.icon
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-strong border-minimal flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green" />
                      </div>
                      <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider glass border-minimal rounded-full">
                        {product.status}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{product.name}</h3>
                    <p className="text-base sm:text-lg font-semibold text-shadow-green mb-3 sm:mb-4">{product.tagline}</p>
                    <p className="text-sm sm:text-base text-shadow-text-light mb-4 sm:mb-6">{product.description}</p>
                  </div>
                  <Link href={product.href}>
                    <Button variant="outline" size="md" className="w-full text-xs sm:text-sm">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
