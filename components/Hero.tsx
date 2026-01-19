'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Logo from './Logo'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-shadow-dark" />
      
      {/* Animated background elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-4 md:left-10 w-48 h-48 md:w-72 md:h-72 bg-shadow-green/5 rounded-full blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-4 md:right-10 w-64 h-64 md:w-96 md:h-96 bg-shadow-text/3 rounded-full blur-3xl"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { duration: 0.8 }}
        >
          <Logo variant="full" size="xl" className="mb-6 md:mb-8" />
        </motion.div>

        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-glow px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { delay: 0.2, duration: 0.8 }}
        >
          Encrypted Execution for DeFi
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl text-shadow-text-light mb-6 md:mb-8 max-w-2xl mx-auto px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { delay: 0.4, duration: 0.8 }}
        >
          Onchain execution is broken. Your intent leaks before the tx even confirms.
          <br className="hidden sm:block" />
          <span className="text-white font-semibold"> We fix that.</span>
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? {} : { delay: 0.6, duration: 0.8 }}
        >
          <Link href="/early-access" className="w-full sm:w-auto">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Get Early Access
            </Button>
          </Link>
          <Link href="/products" className="w-full sm:w-auto">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Explore Products
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
