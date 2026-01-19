'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Card from './Card'
import { Eye, Shield, Zap } from 'lucide-react'

const ProblemStatement = () => {
  const shouldReduceMotion = useReducedMotion()
  
  const problems = [
    {
      icon: Eye,
      title: 'Intent Leaks',
      description: 'Your intent leaks before the transaction even confirms',
    },
    {
      icon: Shield,
      title: 'Cards Face Up',
      description: 'Trading feels like playing with your cards visible to everyone',
    },
    {
      icon: Zap,
      title: 'MEV Bots',
      description: 'Someone is always watching, ready to extract value',
    },
  ]

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={shouldReduceMotion ? {} : { duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Onchain Execution is Broken
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light max-w-3xl mx-auto px-2">
            Every time you place a big order, someone is watching. Your intent leaks before the tx even confirms.
            It feels like trading with your cards face up.
          </p>
        </motion.div>

        {/* Visual metaphor: Poker table */}
        <motion.div
          className="relative mb-8 sm:mb-12 md:mb-16"
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={shouldReduceMotion ? {} : { duration: 0.8 }}
        >
          <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-minimal">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Trading with Cards Face Up</h3>
              <div className="flex justify-center items-center space-x-2 sm:space-x-3 md:space-x-4">
                {/* Cards visible to everyone */}
                {['A', 'K', 'Q'].map((card, idx) => (
                  <motion.div
                    key={card}
                    className="w-12 h-16 sm:w-14 sm:h-20 md:w-16 md:h-24 glass border-minimal rounded-lg flex items-center justify-center text-xl sm:text-2xl font-bold"
                    initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={shouldReduceMotion ? {} : { delay: idx * 0.1 }}
                  >
                    {card}
                  </motion.div>
                ))}
              </div>
              <p className="mt-3 sm:mt-4 text-shadow-text-gray text-xs sm:text-sm px-2">
                Everyone can see your cards — except you
              </p>
            </div>
          </div>
        </motion.div>

        {/* Problem cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={shouldReduceMotion ? {} : { delay: idx * 0.1 }}
              >
                <Card>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-strong border-minimal flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{problem.title}</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{problem.description}</p>
                  </div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProblemStatement
