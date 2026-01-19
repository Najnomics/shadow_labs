import Logo from '@/components/Logo'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Link from 'next/link'
import { Shield, Eye, Zap, Lock } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Lock,
      title: 'Privacy',
      description: 'We believe in encrypted execution that protects user intent and value.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Building in public, sharing our journey, challenges, and wins.',
    },
    {
      icon: Zap,
      title: 'User-First',
      description: 'Product-focused solutions that solve real problems for real users.',
    },
  ]

  return (
    <div className="pt-16 sm:pt-20 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <Logo variant="full" size="xl" className="mb-6 sm:mb-8" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-glow px-2">
            Encrypted Execution for DeFi
          </h1>
        </div>

        {/* The Problem */}
        <Card className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass-strong border-minimal flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">The Problem</h2>
              <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">
                Onchain execution is broken. Every time you place a big order, someone is watching. 
                Your intent leaks before the transaction even confirms. It feels like trading with 
                your cards face up. MEV bots, sandwichers, copy traders — they all see you coming.
              </p>
            </div>
          </div>
        </Card>

        {/* Our Mission */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed mb-3 sm:mb-4">
            Encrypted execution products for everyone. We build solutions that keep your cards hidden, 
            protecting your intent and value from MEV extraction.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">
            Our products — StealthAuction, ShadowBook, and ShadowRouter — provide encrypted on-chain 
            execution that solves real problems around intent leakage and public execution.
          </p>
        </Card>

        {/* Our Vision */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Our Vision</h2>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">
            A world where you can execute on-chain without leaking intent. Where token launches keep 
            100% of their value. Where market makers can quote real size without signaling inventory. 
            Where encrypted execution is the standard, not the exception.
          </p>
        </Card>

        {/* What Makes Us Different */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">What Makes Us Different</h2>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">
            We&apos;re product-focused, not infrastructure. We build end-user products that solve real 
            problems. Our solutions are composable, trustless, and fully on-chain. We&apos;re building 
            in public, transparent about our progress, challenges, and wins.
          </p>
        </Card>

        {/* Values */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <Card key={value.title}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-strong border-minimal flex items-center justify-center mb-3 sm:mb-4">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{value.description}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 border-minimal text-center">
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Join Us</h3>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
            Ready to experience encrypted on-chain execution? Join early access and be part of the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/early-access">
              <Button variant="primary" size="lg">
                Get Early Access
              </Button>
            </Link>
            <Link href="/content">
              <Button variant="outline" size="lg">
                See What We&apos;re Building
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
