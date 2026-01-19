import Link from 'next/link'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="border-t border-minimal glass-strong mt-12 sm:mt-16 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Logo variant="logo-only" size="md" />
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-shadow-text-gray uppercase tracking-wider text-center sm:text-left">
              ENCRYPTED EXECUTION FOR DEFI
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-shadow-text-light">Navigation</h3>
            <Link href="/products" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              Products
            </Link>
            <Link href="/content" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              Content
            </Link>
            <Link href="/about" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              About
            </Link>
            <Link href="/early-access" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              Early Access
            </Link>
          </div>

          {/* Products */}
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-shadow-text-light">Products</h3>
            <Link href="/products/stealthauction" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              StealthAuction
            </Link>
            <Link href="/products/shadowbook" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              ShadowBook
            </Link>
            <Link href="/products/shadowrouter" className="text-xs sm:text-sm text-shadow-text-gray hover:text-white transition-colors">
              ShadowRouter
            </Link>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-minimal text-center text-xs sm:text-sm text-shadow-text-gray">
          <p>&copy; {new Date().getFullYear()} Shadow Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
