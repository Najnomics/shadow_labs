'use client'

import { motion } from 'framer-motion'

interface LogoProps {
  variant?: 'full' | 'logo-only' | 'text-only'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-6 h-6 sm:w-8 sm:h-8',
  md: 'w-12 h-12 sm:w-16 sm:h-16',
  lg: 'w-20 h-20 sm:w-24 sm:h-24',
  xl: 'w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32',
}

const Logo = ({ variant = 'full', size = 'md', className = '' }: LogoProps) => {
  const ShieldIcon = () => (
    <motion.svg
      className={`${sizeClasses[size]} ${className}`}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Shield shape */}
      <defs>
        <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#2a2a2a" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="highlightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#e0e0e0" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Shield outline */}
      <path
        d="M60 10 L100 30 L100 80 Q100 100 80 110 L60 130 L40 110 Q20 100 20 80 L20 30 Z"
        fill="url(#shieldGradient)"
        stroke="rgba(0, 255, 136, 0.4)"
        strokeWidth="1.5"
      />
      
      {/* Top-left segment (quadrilateral) */}
      <path
        d="M60 10 L100 30 L60 50 L40 30 Z"
        fill="rgba(0, 255, 136, 0.15)"
        stroke="rgba(0, 255, 136, 0.3)"
        strokeWidth="0.5"
      />
      
      {/* Top-right segment (triangle) */}
      <path
        d="M60 10 L100 30 L60 50 Z"
        fill="rgba(0, 255, 136, 0.1)"
        stroke="rgba(0, 255, 136, 0.25)"
        strokeWidth="0.5"
      />
      
      {/* Bottom-left segment (quadrilateral) */}
      <path
        d="M40 30 L60 50 L40 70 L20 50 Z"
        fill="rgba(26, 26, 26, 0.8)"
        stroke="rgba(0, 255, 136, 0.15)"
        strokeWidth="0.5"
      />
      
      {/* Bottom-right segment (triangle) */}
      <path
        d="M60 50 L100 30 L80 50 Z"
        fill="rgba(0, 0, 0, 0.6)"
        stroke="rgba(0, 255, 136, 0.1)"
        strokeWidth="0.5"
      />
      
      {/* Center convergence lines */}
      <line
        x1="60"
        y1="10"
        x2="60"
        y2="70"
        stroke="rgba(0, 255, 136, 0.3)"
        strokeWidth="0.5"
      />
      <line
        x1="40"
        y1="30"
        x2="100"
        y2="30"
        stroke="rgba(0, 255, 136, 0.3)"
        strokeWidth="0.5"
      />
      
      {/* Highlight reflection */}
      <path
        d="M60 10 L100 30 L60 50 L40 30 Z"
        fill="rgba(0, 255, 136, 0.2)"
        opacity="0.4"
      />
    </motion.svg>
  )

  if (variant === 'logo-only') {
    return <ShieldIcon />
  }

  if (variant === 'text-only') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-glow">
          SHADOW LABS
        </h1>
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-300 mt-1 px-2 text-center">
          — ENCRYPTED EXECUTION FOR DEFI —
        </p>
      </div>
    )
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <ShieldIcon />
      <motion.h1
        className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-wider text-glow mt-3 sm:mt-4 px-2 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        SHADOW LABS
      </motion.h1>
      <motion.p
        className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-300 mt-2 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        — ENCRYPTED EXECUTION FOR DEFI —
      </motion.p>
    </div>
  )
}

export default Logo
