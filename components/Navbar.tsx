'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/content', label: 'Content' },
    { href: '/about', label: 'About' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong border-b border-minimal">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center min-w-0">
            <Logo variant="logo-only" size="sm" />
            <span className="ml-2 sm:ml-3 text-base sm:text-lg md:text-xl font-bold uppercase tracking-wider text-glow hidden xs:block truncate">
              SHADOW LABS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-shadow-text-light hover:text-white transition-colors uppercase text-xs xl:text-sm tracking-wider whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/early-access">
              <Button variant="primary" size="sm">
                Early Access
              </Button>
            </Link>
          </div>

          {/* Tablet Navigation */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-shadow-text-light hover:text-white transition-colors uppercase text-xs tracking-wider whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
            <button
              className="text-shadow-text-light hover:text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <Menu size={20} />
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-shadow-text-light hover:text-white p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile/Tablet Navigation */}
        {isOpen && (
          <div className="md:hidden lg:hidden pb-4 space-y-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-shadow-text-light hover:text-white transition-colors uppercase text-sm tracking-wider py-2 px-1"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/early-access" onClick={() => setIsOpen(false)} className="block pt-2">
              <Button variant="primary" size="sm" className="w-full">
                Early Access
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
