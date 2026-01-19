'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { Lock, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const formSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  role: z.string().min(1, 'Please select a role'),
  productInterest: z.array(z.string()).min(1, 'Please select at least one product'),
  useCase: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const roles = [
  'Treasury Manager',
  'Market Maker',
  'Project Founder',
  'Trader',
  'Other',
]

const products = [
  'StealthAuction',
  'ShadowBook',
  'ShadowRouter',
  'All Products',
]

export default function EarlyAccessPage() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      productInterest: [],
    },
  })

  const selectedProducts = watch('productInterest')

  const toggleProduct = (product: string) => {
    const current = selectedProducts || []
    if (current.includes(product)) {
      setValue('productInterest', current.filter((p) => p !== product))
    } else {
      setValue('productInterest', [...current, product])
    }
  }

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form data:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full"
        >
          <Card className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-shadow-green/20 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-shadow-green" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4">Thank You!</h2>
            <p className="text-shadow-text-light mb-6">
              We&apos;ve received your early access request. We&apos;ll be in touch soon with testnet access details.
            </p>
            <Button variant="primary" onClick={() => (window.location.href = '/')}>
              Back to Home
            </Button>
          </Card>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-16 sm:pt-20 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full glass-strong border-minimal flex items-center justify-center">
              <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Early Access
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light px-2">
            Join early access and be among the first to experience encrypted on-chain execution
          </p>
        </div>

        <Card>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                Email *
              </label>
              <input
                id="email"
                type="email"
                {...register('email')}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass border-minimal rounded-lg focus:outline-none focus:ring-2 focus:ring-shadow-green focus:border-transparent bg-transparent text-white"
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                Role / Use Case *
              </label>
              <select
                id="role"
                {...register('role')}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass border-minimal rounded-lg focus:outline-none focus:ring-2 focus:ring-shadow-green focus:border-transparent bg-transparent text-white"
              >
                <option value="">Select your role</option>
                {roles.map((role) => (
                  <option key={role} value={role} className="bg-shadow-dark">
                    {role}
                  </option>
                ))}
              </select>
              {errors.role && (
                <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.role.message}</p>
              )}
            </div>

            {/* Product Interest */}
            <div>
              <label className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                Product Interest *
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                {products.map((product) => (
                  <button
                    key={product}
                    type="button"
                    onClick={() => toggleProduct(product)}
                    className={`px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border transition-all text-left ${
                      selectedProducts?.includes(product)
                        ? 'glass-strong border-shadow-green bg-shadow-green/10'
                        : 'glass border-minimal hover:border-shadow-green/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base text-white">{product}</span>
                      {selectedProducts?.includes(product) && (
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-shadow-green flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              {errors.productInterest && (
                <p className="mt-1 text-xs sm:text-sm text-red-400">{errors.productInterest.message}</p>
              )}
            </div>

            {/* Use Case Description */}
            <div>
              <label htmlFor="useCase" className="block text-xs sm:text-sm font-bold uppercase tracking-wider mb-2">
                Use Case Description (Optional)
              </label>
              <textarea
                id="useCase"
                {...register('useCase')}
                rows={4}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base glass border-minimal rounded-lg focus:outline-none focus:ring-2 focus:ring-shadow-green focus:border-transparent bg-transparent text-white resize-none"
                placeholder="Tell us about your use case..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {isSubmitting ? 'Submitting...' : 'Request Early Access 🔒'}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
