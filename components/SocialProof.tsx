'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Card from './Card'
import { Quote } from 'lucide-react'

const SocialProof = () => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={shouldReduceMotion ? {} : { duration: 0.6 }}
        >
          <Card className="glass-strong">
            <div className="flex flex-col sm:flex-row items-start">
              <Quote className="w-10 h-10 sm:w-12 sm:h-12 text-shadow-green flex-shrink-0 mb-3 sm:mb-0 sm:mr-4" />
              <div className="flex-1 min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl text-shadow-text mb-3 sm:mb-4 italic">
                  "This changes everything for governance token events."
                </p>
                <p className="text-sm sm:text-base text-shadow-text-gray">
                  — Treasury Manager
                </p>
                <p className="text-xs sm:text-sm text-shadow-text-gray mt-2">
                  Imagine launching a token and keeping 100% of the value instead of losing 15–40% to MEV extraction.
                  That's what StealthAuction is for.
                </p>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

export default SocialProof
