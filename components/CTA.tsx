'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Button from './Button'
import Link from 'next/link'
import { Lock } from 'lucide-react'

const CTA = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-minimal text-center"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={shouldReduceMotion ? {} : { duration: 0.6 }}
        >
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass border-minimal flex items-center justify-center">
              <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Ready to Keep Your Cards Hidden?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Join early access and be among the first to experience encrypted on-chain execution.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
            <Link href="/early-access" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" className="w-full sm:w-auto">
                Get Early Access 🔒
              </Button>
            </Link>
            <Link href="/content" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                See What We&apos;re Building
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
