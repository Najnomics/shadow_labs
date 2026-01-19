import Hero from '@/components/Hero'
import ProblemStatement from '@/components/ProblemStatement'
import ProductShowcase from '@/components/ProductShowcase'
import SocialProof from '@/components/SocialProof'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <ProblemStatement />
      <ProductShowcase />
      <SocialProof />
      <CTA />
    </div>
  )
}
