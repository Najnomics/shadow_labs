import ProductShowcase from '@/components/ProductShowcase'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products - Shadow Labs',
  description: 'Explore Shadow Labs encrypted execution products: StealthAuction, ShadowBook, and ShadowRouter.',
}

export default function ProductsPage() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Our Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light max-w-3xl mx-auto px-2">
            Encrypted execution products that solve real problems around MEV extraction and intent leakage
          </p>
        </div>
      </div>
      <ProductShowcase />
    </div>
  )
}
