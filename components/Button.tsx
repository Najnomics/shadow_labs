'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
  href?: string
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  type = 'button',
  className = '',
  href,
}: ButtonProps) => {
  const shouldReduceMotion = useReducedMotion()
  const baseClasses = 'font-bold uppercase tracking-wider transition-all duration-300 relative overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-white text-black hover:bg-shadow-text-light border border-white active:bg-gray-200',
    secondary: 'glass text-white hover:glass-strong border-minimal active:opacity-80',
    outline: 'border-2 border-green text-white hover:bg-shadow-green/10 hover:border-shadow-green active:bg-shadow-green/20',
  }

  const sizeClasses = {
    sm: 'px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs',
    md: 'px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm',
    lg: 'px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base',
  }

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  )

  if (href) {
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    )
  }

  return buttonContent
}

export default Button
