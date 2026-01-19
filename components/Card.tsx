'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card = ({ children, className = '', hover = true, onClick }: CardProps) => {
  const shouldReduceMotion = useReducedMotion()
  
  return (
    <motion.div
      className={`minimal-card rounded-lg p-4 sm:p-5 md:p-6 border-minimal ${className}`}
      whileHover={hover && !shouldReduceMotion ? { y: -2, boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)' } : {}}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  )
}

export default Card
