import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Button from '@/components/Button'
import Card from '@/components/Card'
import Link from 'next/link'
import { Lock, BookOpen, Route, ArrowLeft, Check, Code, Zap, Shield, Link as LinkIcon } from 'lucide-react'

const products = {
  stealthauction: {
    name: 'StealthAuction',
    icon: Lock,
    tagline: 'Keep 100% of token launch value',
    description: 'Production-ready Uniswap v4 Hook with Fhenix FHE integration. A fully homomorphic encryption (FHE) powered Dutch auction system enabling completely confidential trading with privacy preservation throughout the entire auction lifecycle.',
    status: 'Testnet',
    problem: 'Traditional DEX auctions suffer from critical MEV vulnerabilities that cost traders billions annually: Front-running by MEV bots extracting value from pending bid transactions, strategy leakage revealing institutional trading intentions, sandwich attacks exploiting predictable price movements, bid sniping undermining fair price discovery, information asymmetry favoring large traders, and complete privacy erosion through transaction transparency. Impact: $1.4B+ in MEV extraction (2023), reduced market efficiency, and barriers to institutional DeFi adoption.',
    solution: 'StealthAuction achieves unprecedented privacy by keeping all auction data encrypted throughout the entire lifecycle using Fhenix Protocol\'s CoFHE infrastructure. Built as a Uniswap v4 hook with 4/4 essential hook permissions enabled, it provides production-ready FHE operations, Solidity-native encrypted types (euint128, euint64, ebool), gas-optimized homomorphic operations, and audited cryptographic implementations. All auction parameters, bids, and price comparisons stay encrypted - MEV bots see zero actionable data.',
    features: [
      'Complete FHE integration with Fhenix CoFHE',
      '4/4 Uniswap v4 hook permissions enabled',
      'End-to-end encryption of auction parameters',
      'Encrypted bid submission and validation',
      'MEV-resistant design through encrypted handling',
      'Production-ready with 200+ passing tests',
      'Gas-optimized (<300k gas per operation)',
      'Security audited (Slither clean)',
      '90-95% test coverage',
      'CREATE2 deterministic deployment',
    ],
    useCases: [
      'Token launches without MEV extraction',
      'Governance token events',
      'Treasury auctions',
      'NFT collection drops',
      'Institutional DeFi adoption',
      'Private price discovery mechanisms',
    ],
    targetUsers: [
      'Treasury managers',
      'Project founders launching tokens',
      'Token launch organizers',
      'Institutional DeFi participants',
      'Developers building private auctions',
    ],
    architecture: {
      components: [
        { name: 'StealthAuction.sol', purpose: 'Main hook contract with 4 enabled Uniswap v4 hooks' },
        { name: 'StealthAuctionToken.sol', purpose: 'FHE-enabled ERC20 with encrypted transfer functions' },
        { name: 'AuctionLibrary.sol', purpose: 'Price calculation engine with linear & exponential decay models' },
        { name: 'BidQueue.sol', purpose: 'Encrypted bid management with FIFO queue and priority support' },
        { name: 'FHEPermissions.sol', purpose: 'Access control system with role-based FHE access' },
      ],
      integration: {
        fhenix: 'Built on Fhenix Protocol\'s CoFHE infrastructure providing production-ready FHE operations, Solidity-native encrypted types, gas-optimized homomorphic operations, and audited cryptographic implementations.',
        uniswap: 'Integrated with Uniswap v4\'s hook system with 4/4 essential hook permissions, CREATE2 deterministic deployment, PoolManager integration via BaseHook, and MEV-resistant design through encrypted parameter handling.',
      },
    },
    performance: {
      testCoverage: '90-95% across all contracts',
      tests: '200+ tests passing (117 unit tests, 83 integration tests)',
      gasOptimization: '<300k gas per auction operation',
      security: 'Slither static analysis clean',
      fheCompliance: '100% Fhenix CoFHE integration with 50+ permission calls',
    },
    technicalHighlights: [
      'Complete privacy: Auction parameters, bids, and price comparisons stay encrypted throughout',
      'MEV immunity: No actionable information visible to front-runners or sandwich attackers',
      'Hook integration: 4/4 essential Uniswap v4 permissions working with FHE operations',
      'Production ready: Core contracts deployed and tested',
      'Pool interception protection: Immediate encryption prevents MEV extraction even during pool calls',
    ],
  },
  shadowbook: {
    name: 'ShadowBook',
    icon: BookOpen,
    tagline: 'Trade without signaling inventory',
    description: 'Fully encrypted dark order book on Uniswap v4 using Fully Homomorphic Encryption (FHE). A dark-pool style, fully encrypted limit-order engine where prices, amounts, and sides are encrypted end-to-end via FHE, preventing information leakage while enabling on-chain matching.',
    status: 'Testnet',
    problem: 'Open order books leak intent: visible prices/sizes enable MEV, front-running, and slippage. Large traders avoid size on DEXes, fragmenting liquidity and blocking institutional flow. Today\'s pain includes front-running & MEV on visible orders, slippage (0.5–2% typical on size), strategy leakage (positions/depth exposed), and institutional reluctance due to transparency.',
    solution: 'ShadowBook keeps orders encrypted while matching on-chain. Orders are submitted encrypted (euint64 price/amount, euint8 side), matched using encrypted operations (FHE.gte, FHE.min, FHE.select), depth remains hidden with no public view of book state, and settlement occurs via Uniswap v4 PoolManager + encrypted FHERC20 transfers. Financial impact: 50–80% slippage reduction on block-sized trades, 0.1–0.5% MEV savings per trade, privacy unlocks institutional flow (est. +$500M TVL), with aggregate value of ~$650M/yr potential.',
    features: [
      'Encrypted orders (price, amount, side) with FHE',
      'Encrypted matching (gte/min/select) without decryption',
      'FIFO + fair-share matching',
      'Supports partial fills',
      'Integrates directly via Uniswap v4 hooks',
      'Comprehensive unit, integration, fuzz, and invariant tests',
      'Hybrid FHERC20 with encrypted balances',
      'Hidden depth: no public view of book state',
    ],
    useCases: [
      'Market making without signaling inventory',
      'Large block-sized trades',
      'Private order execution',
      'Institutional trading',
      'Dark pool operations',
      'MEV-resistant limit orders',
    ],
    targetUsers: [
      'Market makers',
      'Large traders',
      'Institutional investors',
      'DeFi protocols requiring private order execution',
      'Traders avoiding slippage',
    ],
    architecture: {
      components: [
        { name: 'ShadowBookHook.sol', purpose: 'v4 hook; encrypted order storage, matching, lifecycle' },
        { name: 'OrderBookLib.sol', purpose: 'Helpers for encrypted comparisons and sizing' },
        { name: 'HybridFHERC20.sol', purpose: 'Hybrid ERC20 with encrypted balances and transfers' },
        { name: 'IShadowBookHook.sol', purpose: 'Interface for integrations' },
      ],
      integration: {
        fhenix: 'Built on Fhenix Protocol\'s CoFHE infrastructure providing encrypted order submission, matching operations (gte/min/select), and encrypted balance management.',
        uniswap: 'Integrated with Uniswap v4\'s hook system via PoolManager, enabling automatic order matching during swaps through beforeSwap hook integration.',
      },
      encryptedOrder: {
        structure: 'EncryptedOrder struct includes euint64 price, euint64 amount, euint8 side (0=buy, 1=sell), address trader, uint256 timestamp (FIFO), euint64 filledAmount, and bool isActive.',
      },
    },
    performance: {
      testCoverage: 'Comprehensive test suite with unit, integration, fuzz, and invariant tests',
      tests: 'Multiple test files covering all core functionality',
      gasOptimization: 'Optimized for production use',
      security: 'FHE-based security with encrypted operations',
      fheCompliance: 'Full Fhenix CoFHE integration',
    },
    technicalHighlights: [
      'Encrypted order submission: All order parameters encrypted before storage',
      'Encrypted matching: Price comparisons and order matching happen in FHE space',
      'FIFO + fair-share: Ensures fair order execution while maintaining privacy',
      'Partial fills: Supports partial order execution with encrypted fill tracking',
      'Hook integration: Seamless integration with Uniswap v4 swap flow',
      'Hidden depth: No public visibility into order book state',
    ],
    financialImpact: {
      slippageReduction: '50–80% reduction on block-sized trades',
      mevSavings: '0.1–0.5% per trade',
      liquidityUplift: 'Privacy unlocks institutional flow (est. +$500M TVL)',
      aggregateValue: '~$650M/yr potential (MEV + slippage + liquidity)',
    },
  },
  shadowrouter: {
    name: 'ShadowRouter',
    icon: Route,
    tagline: 'Unified encrypted execution',
    description: 'Single integration point for all Shadow Labs encrypted execution products. A unified router that enables wallets, custody providers, and aggregators to access StealthAuction, ShadowBook, and future encrypted hooks through one simple interface. No more bespoke engineering per hook.',
    status: 'Coming Soon',
    problem: 'Integrating multiple encrypted execution surfaces requires bespoke engineering per hook. Each Shadow Labs product (StealthAuction, ShadowBook, future hooks) requires separate integration work. Wallets, custody providers, and aggregators face significant friction routing protected flows. This fragmentation prevents widespread adoption and creates maintenance overhead for integrators.',
    solution: 'ShadowRouter provides a unified interface that abstracts away the complexity of individual hook integrations. Integrate once and access all encrypted execution surfaces through a single, standardized API. The router handles FHE permissions, hook interactions, and encrypted parameter management automatically. This enables seamless access to StealthAuction auctions, ShadowBook order matching, and future encrypted execution primitives.',
    features: [
      'Single integration point for all Shadow Labs products',
      'Unified API for encrypted execution',
      'Automatic FHE permission management',
      'Simplified routing across encrypted hooks',
      'Composable architecture with modular design',
      'No trust required - fully on-chain',
      'Gas-optimized routing paths',
      'Future-proof extensibility for new hooks',
      'Developer-friendly SDK and documentation',
      'Support for batch operations',
    ],
    useCases: [
      'Wallet integrations with encrypted execution',
      'Custody provider routing to private markets',
      'Aggregator platforms accessing dark pools',
      'Unified user experience across products',
      'Multi-product DeFi strategies',
      'Institutional trading infrastructure',
    ],
    targetUsers: [
      'Wallet developers',
      'Custody providers',
      'Aggregator platforms',
      'DeFi protocol integrators',
      'Institutional infrastructure providers',
      'End users seeking unified access',
    ],
    architecture: {
      components: [
        { name: 'ShadowRouter.sol', purpose: 'Main router contract managing all hook integrations and routing logic' },
        { name: 'HookRegistry.sol', purpose: 'Registry for managing available encrypted hooks and their capabilities' },
        { name: 'FHEPermissionManager.sol', purpose: 'Centralized FHE permission management across all hooks' },
        { name: 'RoutingEngine.sol', purpose: 'Intelligent routing engine for optimal execution paths' },
        { name: 'IShadowRouter.sol', purpose: 'Unified interface for integrators' },
      ],
      integration: {
        shadowLabs: 'Unified access to StealthAuction (encrypted auctions), ShadowBook (encrypted order book), and future Shadow Labs encrypted execution products through a single integration point.',
        fhenix: 'Centralized FHE permission management leveraging Fhenix Protocol\'s CoFHE infrastructure, ensuring seamless encrypted operations across all integrated hooks.',
        uniswap: 'Built on Uniswap v4 architecture, enabling composable integration with all Shadow Labs hooks while maintaining compatibility with the broader Uniswap ecosystem.',
      },
    },
    performance: {
      testCoverage: 'Comprehensive test suite covering all routing scenarios',
      tests: 'Unit, integration, and end-to-end tests for multi-hook scenarios',
      gasOptimization: 'Optimized routing paths to minimize gas costs',
      security: 'Security audited with focus on permission management',
      extensibility: 'Designed for easy addition of new encrypted hooks',
    },
    technicalHighlights: [
      'Unified API: Single interface for all Shadow Labs encrypted products',
      'Permission abstraction: Automatic FHE permission handling across hooks',
      'Intelligent routing: Optimal execution path selection',
      'Composable design: Modular architecture for easy extension',
      'Developer experience: Comprehensive SDK and documentation',
      'Future-proof: Extensible design for new encrypted execution primitives',
      'Gas efficiency: Optimized routing reduces overall transaction costs',
    ],
    roadmap: {
      phase1: 'Core router implementation with StealthAuction and ShadowBook integration',
      phase2: 'SDK development and developer tooling',
      phase3: 'Advanced routing features and batch operations',
      phase4: 'Cross-chain routing and governance integration',
    },
  },
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products[params.slug as keyof typeof products]
  
  if (!product) {
    return {
      title: 'Product Not Found - Shadow Labs',
    }
  }

  return {
    title: `${product.name} - Shadow Labs`,
    description: product.description,
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products[params.slug as keyof typeof products]

  if (!product) {
    notFound()
  }

  const Icon = product.icon

  return (
    <div className="pt-16 sm:pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Back button */}
        <Link href="/products" className="inline-flex items-center text-shadow-text-gray hover:text-white mb-6 sm:mb-8 transition-colors text-sm sm:text-base">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>

        {/* Hero */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg glass-strong border-minimal flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-glow break-words">{product.name}</h1>
                <span className="px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm uppercase tracking-wider glass border-minimal rounded-full self-start sm:self-auto">
                  {product.status}
                </span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-shadow-green font-semibold mt-2">{product.tagline}</p>
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light max-w-3xl">{product.description}</p>
        </div>

        {/* The Problem */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">The Problem</h2>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">{product.problem}</p>
        </Card>

        {/* How It Works */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">How It Works</h2>
          <p className="text-sm sm:text-base md:text-lg text-shadow-text-light leading-relaxed">{product.solution}</p>
        </Card>

        {/* Features */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 sm:gap-3 glass rounded-lg p-3 sm:p-4 border-minimal">
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-shadow-green flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-shadow-text-light">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Use Cases</h2>
          <ul className="space-y-2">
            {product.useCases.map((useCase, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-shadow-text-light">
                <div className="w-2 h-2 rounded-full bg-shadow-green flex-shrink-0 mt-1.5" />
                <span>{useCase}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Who It's For */}
        <Card className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Who It's For</h2>
          <ul className="space-y-2">
            {product.targetUsers.map((user, idx) => (
              <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-shadow-text-light">
                <div className="w-2 h-2 rounded-full bg-shadow-green flex-shrink-0 mt-1.5" />
                <span>{user}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Architecture & Components - For StealthAuction and ShadowBook */}
        {(params.slug === 'stealthauction' || params.slug === 'shadowbook') && product.architecture && (
          <>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-shadow-green" />
                <h2 className="text-3xl font-bold">Architecture & Components</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {product.architecture.components.map((component: { name: string; purpose: string }, idx: number) => (
                  <Card key={idx}>
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg glass-strong border-minimal flex items-center justify-center flex-shrink-0">
                        <Code className="w-5 h-5 text-shadow-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{component.name}</h3>
                        <p className="text-shadow-text-light text-sm">{component.purpose}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Integration Details */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                <h2 className="text-2xl sm:text-3xl font-bold">Integration</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <Card>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-lg sm:text-xl font-bold">Fhenix Protocol</h3>
                  </div>
                  <p className="text-sm sm:text-base text-shadow-text-light">{product.architecture.integration.fhenix}</p>
                </Card>
                <Card>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-lg sm:text-xl font-bold">Uniswap v4</h3>
                  </div>
                  <p className="text-sm sm:text-base text-shadow-text-light">{product.architecture.integration.uniswap}</p>
                </Card>
              </div>
            </div>

            {/* Encrypted Order Structure - ShadowBook only */}
            {params.slug === 'shadowbook' && product.architecture.encryptedOrder && (
              <Card className="mb-8 sm:mb-12">
                <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Encrypted Order Structure</h2>
                <div className="glass rounded-lg p-3 sm:p-4 border-minimal mb-3 sm:mb-4 overflow-x-auto">
                  <code className="text-shadow-text-light text-xs sm:text-sm whitespace-pre-wrap font-mono">
                    {product.architecture.encryptedOrder.structure}
                  </code>
                </div>
              </Card>
            )}

            {/* Financial Impact - ShadowBook only */}
            {params.slug === 'shadowbook' && product.financialImpact && (
              <Card className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Financial Impact</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Slippage Reduction</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{product.financialImpact.slippageReduction}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">MEV Savings</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{product.financialImpact.mevSavings}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Liquidity Uplift</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{product.financialImpact.liquidityUplift}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Aggregate Value</h3>
                    <p className="text-sm sm:text-base text-shadow-text-light">{product.financialImpact.aggregateValue}</p>
                  </div>
                </div>
              </Card>
            )}

            {/* Roadmap - ShadowRouter only */}
            {params.slug === 'shadowrouter' && product.roadmap && (
              <Card className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Roadmap</h2>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-shadow-green font-bold text-sm sm:text-base">1</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-1">Phase 1</h3>
                      <p className="text-sm sm:text-base text-shadow-text-light">{product.roadmap.phase1}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-shadow-green font-bold text-sm sm:text-base">2</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-1">Phase 2</h3>
                      <p className="text-sm sm:text-base text-shadow-text-light">{product.roadmap.phase2}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-shadow-green font-bold text-sm sm:text-base">3</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-1">Phase 3</h3>
                      <p className="text-sm sm:text-base text-shadow-text-light">{product.roadmap.phase3}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-shadow-green font-bold text-sm sm:text-base">4</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-base sm:text-lg mb-1">Phase 4</h3>
                      <p className="text-sm sm:text-base text-shadow-text-light">{product.roadmap.phase4}</p>
                    </div>
                  </div>
                </div>
              </Card>
            )}

            {/* Performance Metrics */}
            {product.performance && (
              <Card className="mb-8 sm:mb-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                  <h2 className="text-2xl sm:text-3xl font-bold">Performance & Quality</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Test Coverage</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.testCoverage} overall coverage</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.tests}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.gasOptimization}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Security & Compliance</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.security}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.fheCompliance}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Technical Highlights */}
            {product.technicalHighlights && (
              <Card className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
                  {params.slug === 'shadowrouter' ? 'Key Features' : 'Technical Breakthrough'}
                </h2>
                <div className="space-y-3 sm:space-y-4">
                  {product.technicalHighlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-shadow-green" />
                      </div>
                      <p className="text-sm sm:text-base text-shadow-text-light">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </>
        )}

        {/* Architecture & Components - For ShadowRouter */}
        {params.slug === 'shadowrouter' && product.architecture && (
          <>
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                <h2 className="text-2xl sm:text-3xl font-bold">Architecture & Components</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {product.architecture.components.map((component: { name: string; purpose: string }, idx: number) => (
                  <Card key={idx}>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-lg glass-strong border-minimal flex items-center justify-center flex-shrink-0">
                        <Code className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-shadow-green" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-bold text-base sm:text-lg mb-1 break-words">{component.name}</h3>
                        <p className="text-shadow-text-light text-xs sm:text-sm">{component.purpose}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* Integration Details for ShadowRouter */}
            <div className="mb-8 sm:mb-12">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                <h2 className="text-2xl sm:text-3xl font-bold">Integration</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <Card>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-lg sm:text-xl font-bold">Shadow Labs</h3>
                  </div>
                  <p className="text-sm sm:text-base text-shadow-text-light">{product.architecture.integration.shadowLabs}</p>
                </Card>
                <Card>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-lg sm:text-xl font-bold">Fhenix Protocol</h3>
                  </div>
                  <p className="text-sm sm:text-base text-shadow-text-light">{product.architecture.integration.fhenix}</p>
                </Card>
                <Card>
                  <div className="flex items-start gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-shadow-green flex-shrink-0 mt-0.5 sm:mt-1" />
                    <h3 className="text-lg sm:text-xl font-bold">Uniswap v4</h3>
                  </div>
                  <p className="text-sm sm:text-base text-shadow-text-light">{product.architecture.integration.uniswap}</p>
                </Card>
              </div>
            </div>

            {/* Performance Metrics for ShadowRouter */}
            {product.performance && (
              <Card className="mb-8 sm:mb-12">
                <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-shadow-green" />
                  <h2 className="text-2xl sm:text-3xl font-bold">Performance & Quality</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Test Coverage</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.testCoverage}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.tests}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.gasOptimization}</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-base sm:text-lg mb-2 sm:mb-3 text-shadow-green">Security & Extensibility</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.security}</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm sm:text-base text-shadow-text-light">
                        <Check className="w-4 h-4 text-shadow-green flex-shrink-0 mt-0.5" />
                        <span>{product.performance.extensibility}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>
            )}

            {/* Technical Highlights for ShadowRouter */}
            {product.technicalHighlights && (
              <Card className="mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Key Features</h2>
                <div className="space-y-3 sm:space-y-4">
                  {product.technicalHighlights.map((highlight: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2 sm:gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-shadow-green/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-shadow-green" />
                      </div>
                      <p className="text-sm sm:text-base text-shadow-text-light">{highlight}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </>
        )}

        {/* CTA */}
        <div className="glass-strong rounded-xl sm:rounded-2xl p-6 sm:p-8 border-minimal text-center">
          <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h3>
          <p className="text-sm sm:text-base text-shadow-text-light mb-4 sm:mb-6 px-2">Join early access to be among the first to use {product.name}</p>
          <Link href="/early-access" className="inline-block">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Request Early Access
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
