'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

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

const imageSizes = {
  sm: { width: 32, height: 32 },
  md: { width: 64, height: 64 },
  lg: { width: 96, height: 96 },
  xl: { width: 128, height: 128 },
}

const Logo = ({ variant = 'full', size = 'md', className = '' }: LogoProps) => {
  const [imgError, setImgError] = useState(false)
  const { width, height } = imageSizes[size]

  const LogoImage = () => {
    if (imgError) {
      return (
        <span className={`${sizeClasses[size]} flex items-center justify-center font-bold text-white text-glow text-xs sm:text-sm`}>
          prud_Labs
        </span>
      )
    }
    return (
      <Image
        src="/logo.png"
        alt="prud_Labs"
        width={width}
        height={height}
        className={`${sizeClasses[size]} object-contain object-center ${className}`}
        priority
        unoptimized
        onError={() => setImgError(true)}
      />
    )
  }

  if (variant === 'logo-only') {
    return <LogoImage />
  }

  if (variant === 'text-only') {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-white text-glow">
          prud_Labs
        </span>
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-300 mt-1 px-2 text-center">
          — ENCRYPTED EXECUTION FOR DEFI —
        </p>
      </div>
    )
  }

  const FullLogoImage = () => {
    if (imgError) {
      return (
        <motion.span
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-white text-glow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          prud_Labs
        </motion.span>
      )
    }
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center"
      >
        <Image
          src="/logo.png"
          alt="prud_Labs"
          width={imageSizes.xl.width * 1.5}
          height={imageSizes.xl.height * 1.5}
          className="w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 object-contain object-center"
          priority
          unoptimized
          onError={() => setImgError(true)}
        />
      </motion.div>
    )
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <FullLogoImage />
      <motion.p
        className="text-[10px] sm:text-xs md:text-sm uppercase tracking-widest text-gray-300 mt-2 px-4 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        — ENCRYPTED EXECUTION FOR DEFI —
      </motion.p>
    </div>
  )
}

export default Logo
