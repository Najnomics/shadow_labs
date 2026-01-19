# Shadow Labs Frontend Specification

## Overview
Shadow Labs is a product company focused on encrypted on-chain execution solutions. We build end-user products that solve real problems around MEV extraction, intent leakage, and public execution. The frontend application will serve as the primary interface for showcasing our products, building community, and engaging with users through content marketing.

## Core Products

### 1. StealthAuction
- **Product Type**: Encrypted auction platform
- **Value Proposition**: Launch tokens without losing 15-40% to MEV extraction
- **Features**: 
  - Encrypted end-to-end auctions using FHE (Fully Homomorphic Encryption)
  - Encrypted bids, start price, reserve, and bid size
  - No intent leakage before clearing
- **Target Users**: 
  - Treasury managers launching governance tokens
  - Projects doing token launches
  - Anyone running on-chain auctions

### 2. ShadowBook
- **Product Type**: Encrypted order book / dark pool
- **Value Proposition**: Trade with real size without signaling inventory
- **Features**: 
  - Encrypted limit orders
  - Matching without decryption (gte/min/select)
  - Dark pool integrity, fully on-chain
- **Target Users**: 
  - Market makers
  - Large traders
  - Anyone needing private order execution

### 3. ShadowRouter
- **Product Type**: Unified encrypted execution interface
- **Value Proposition**: Single access point to all Shadow Labs encrypted products
- **Features**: 
  - One integration for all encrypted execution surfaces
  - Simplified access to StealthAuction, ShadowBook, and future products
- **Target Users**: 
  - Wallets integrating Shadow Labs products
  - Custody providers
  - Aggregators
  - End users wanting unified access

## Design System

### Brand Identity

#### Logo
- **Primary Logo**: Metallic shield logo with geometric segments
  - **Shape**: Shield form, wider at top, tapering to rounded point at bottom
  - **Structure**: Four distinct geometric segments (quadrilaterals and triangles) converging toward center
  - **Material**: Polished chrome/brushed steel appearance
  - **Finish**: Highly reflective, 3D, glossy, premium metallic
  - **Lighting**: Light source from top-left creating highlights and shadows
  - **Colors**: Dark silver, chrome, grey, black with bright white highlights
  - **Usage**: 
    - Centered placement on dark backgrounds
    - Maintain reflective/metallic appearance in digital formats
    - Ensure sufficient contrast against backgrounds

#### Tagline
- **Text**: "ENCRYPTED EXECUTION FOR DEFI"
- **Styling**: Uppercase, sans-serif, smaller than main brand name
- **Decoration**: Flanked by short horizontal dashes on both sides
- **Placement**: Below "SHADOW LABS" text, centered

### Visual Identity

#### Color Palette
- **Primary Background**: 
  - Deep dark gray/black (`#000000` or `#0a0a0a`)
  - Solid, no textures or patterns
  
- **Logo Colors**:
  - Dark silver/chrome: `#2a2a2a` to `#4a4a4a`
  - Reflective highlights: `#ffffff` to `#e0e0e0`
  - Shadow areas: `#000000` to `#1a1a1a`
  - Gradient range: Light to dark metallic grays

- **Text Colors**:
  - Primary text: Pure white (`#ffffff`)
  - Secondary text: Off-white (`#f5f5f5` to `#e0e0e0`)
  - Accent text: Same as logo highlights

- **Accent Colors** (for UI elements):
  - Glowing blue circuits: `#00a8ff` to `#0077be` (for tech elements)
  - Subtle highlights: Match logo metallic tones

#### Typography
- **Brand Name**: "SHADOW LABS"
  - Font: Bold, uppercase, geometric sans-serif
  - Weight: 700-900 (Bold to Black)
  - Style: Clean, sharp edges, modern
  - Effect: Subtle glow/blur for depth against dark backgrounds
  - Examples: Inter Bold, Space Grotesk Bold, or similar geometric sans-serif

- **Tagline**: "ENCRYPTED EXECUTION FOR DEFI"
  - Font: Same family as brand name, lighter weight
  - Weight: 400-600 (Regular to Semi-bold)
  - Style: Uppercase, clean
  - Decoration: Horizontal dashes flanking text

- **Body Text**:
  - Font: Same sans-serif family
  - Weight: 400-500 (Regular to Medium)
  - Style: Sentence case for readability
  - Size: Responsive scaling

- **Headings**:
  - H1: Bold, uppercase (matching brand name style)
  - H2-H6: Decreasing weights, maintaining geometric sans-serif

#### Visual Style Guidelines

**Overall Aesthetic**:
- Modern, technological, security-focused
- Sophisticated and mysterious ("shadowy")
- Premium, polished feel
- Clean, minimal with ample negative space

**Key Visual Elements**:
- **Logo Treatment**: 
  - Always maintain metallic/reflective appearance
  - Use subtle animations for logo reveals (optional)
  - Ensure high contrast against backgrounds
  
- **Backgrounds**:
  - Solid dark backgrounds (no patterns/textures)
  - Deep black or near-black grays
  - Ample negative space around elements
  
- **Imagery Style**:
  - Dark backgrounds with glowing elements
  - Circuit patterns (blue glow)
  - Tunnel/tech visualizations
  - Blurred/redacted numbers for encrypted data visualization
  - Poker table metaphor (cards visible to everyone except player)
  - Encrypted orderbook depth (blurred/redacted numbers)
  - Shadow Labs shield logo integration

**Layout Principles**:
- Centered alignment for hero sections
- Ample negative space
- Clean, focused presentation
- Geometric, structured layouts
- Asymmetric balance (inspired by logo's segmented structure)

**Effects & Animations**:
- Subtle glow effects on text (matching logo treatment)
- Metallic reflections (where appropriate)
- Smooth transitions
- Hover effects: Subtle lift/glow
- Loading states: Metallic shimmer effects

### Component Styling

#### Buttons
- Primary: Metallic/chrome appearance with subtle reflection
- Hover: Increased glow, slight lift
- Text: Uppercase, bold, geometric sans-serif
- Colors: Match logo metallic tones or white on dark

#### Cards
- Dark backgrounds with subtle borders
- Hover: Subtle glow effect
- Shadows: Deep, soft shadows for depth

#### Forms
- Dark inputs with subtle borders
- Focus: Subtle glow matching brand colors
- Labels: Uppercase, geometric sans-serif

## Page Structure

### 1. Homepage / Landing Page
**Purpose**: Product showcase, value proposition, problem-solution fit

**Sections**:
- **Hero Section**:
  - Large Shadow Labs shield logo (centered, upper portion)
  - "SHADOW LABS" brand name below logo
  - Tagline "ENCRYPTED EXECUTION FOR DEFI" with dashes
  - Subheading: Problem statement or value proposition
  - CTA: Early access / Testnet access
  - Visual: Dark background, logo prominently displayed

- **Problem Statement**: "Onchain execution is broken"
  - Visual: Poker table with cards visible to everyone
  - Key pain points:
    - Intent leaks before tx confirms
    - Trading with cards face up
    - MEV bots watching every move
  
- **Solution**: Shadow Labs products
- **Product Showcase Cards**:
  - StealthAuction: "Keep 100% of token launch value"
  - ShadowBook: "Trade without signaling inventory"
  - ShadowRouter: "Unified encrypted execution"
  - Each card: Dark background, subtle metallic accents, product icon/visual
  
- **Social Proof**: "One treasury manager already told us: 'this changes everything'"
- **CTA**: Early access signup / Testnet access

**Visual**: Dark background, logo treatment, metallic accents, clean spacing

### 2. Products Page
**Purpose**: Detailed product information and use cases

**Sections per Product**:
- **Hero**: Product name, tagline, key benefit
- **The Problem**: What it solves (MEV, intent leakage, etc.)
- **How It Works**: User-friendly explanation
  - Visual: Screenshots, diagrams, or animations
- **Key Features**: Bullet points of capabilities
- **Use Cases**: Real-world scenarios
  - StealthAuction: Token launches, governance events
  - ShadowBook: Market making, large trades
  - ShadowRouter: Unified access
- **Who It's For**: Target user personas
- **Status**: Testnet / Mainnet / Coming Soon
- **CTA**: Try it / Request access / Join waitlist

**Visual**: 
- Product-specific screenshots/mockups
- Use case diagrams
- Before/after comparisons (public vs encrypted)
- Maintain dark theme with metallic accents

### 3. Content Feed / Blog
**Purpose**: Community building, product updates, thought leadership

**Content Types**:
- **Founder POV**: Personal insights, problem statements, vision
- **Building in Public**: Product updates, milestones, feature releases
- **User Love**: Testimonials, use cases, success stories
- **Polls**: Interactive engagement (yes/no/multiple choice)

**Features**:
- Post cards with:
  - Date/day indicator (Day 1-7 for weekly content)
  - Content type badge
  - Visual attachment support
  - Poll component (if applicable)
  - Engagement metrics (likes, replies)
  - Reply/comment section
- Filter by content type
- Search functionality
- Social sharing
- Product tags (which product the post relates to)

**Visual**: Card-based layout, dark theme, subtle hover effects, metallic accents

### 4. Early Access / Waitlist
**Purpose**: Collect interest, manage testnet access, build community

**Form Fields**:
- Email (required)
- Role/Use Case (dropdown):
  - Treasury Manager
  - Market Maker
  - Project Founder
  - Trader
  - Other
- Product Interest (multi-select):
  - StealthAuction
  - ShadowBook
  - ShadowRouter
  - All Products
- Use Case Description (optional text area)
- 🔒 emoji engagement (as mentioned in content plan)

**Post-Submit**:
- Confirmation message
- Email confirmation sent
- Option to share on social media
- Link to content feed

**Visual**: 
- Centered form on dark background
- Shadow Labs logo at top
- Form inputs with subtle metallic borders
- Submit button with metallic/chrome styling

### 5. About / Mission
**Purpose**: Company story, vision, why we exist

**Content**:
- Shadow Labs logo and brand name prominently displayed
- The problem: Onchain execution is broken
- Our mission: Encrypted execution products for everyone
- Our vision: A world where you can execute on-chain without leaking intent
- What makes us different: Product-focused, not infrastructure
- Values: Privacy, transparency (building in public), user-first

**Visual**: 
- Logo treatment
- Mission-focused imagery
- Dark backgrounds with metallic accents
- Team (if applicable)

## Interactive Components

### Logo Component
- **Variants**:
  - Full logo with text (logo + "SHADOW LABS" + tagline)
  - Logo only (shield)
  - Text only (for small spaces)
- **Sizes**: Responsive scaling
- **Animations**: 
  - Subtle shimmer on load (optional)
  - Hover: Slight glow effect
- **Placement**: Centered in hero sections, top-left in navigation

### Product Cards
- Dark background cards
- Subtle metallic borders/accents
- Hover effects: Increased glow, slight lift
- Status badges (Testnet, Mainnet, Coming Soon)
- Quick CTA buttons with metallic styling
- Visual previews

### Poll Component
- Multiple choice options
- Real-time vote display
- Visual progress bars (metallic styling)
- Vote confirmation
- Results view
- Example: "Most profitable defi strategies fail for one boring reason: execution is public. MEV bots, sandwichers, copy traders — they all see you coming. Poll: yes / no / only with encrypted execution"

### CTA Components
- **Primary CTAs**: Metallic/chrome button styling
- Early access buttons
- Testnet signup
- Product demo requests
- Social engagement prompts ("drop a 🔒 below")
- "Who wants early access?" prompts
- Hover: Glow effect, slight lift

### Visual Attachments
- Image gallery support
- Screenshot viewer (for encrypted orderbook depth, etc.)
- Diagram renderer
- Blur/redaction effects for encrypted data visualization
- Animated product demos

### Product Status Indicators
- Testnet badges (metallic styling)
- Coming soon badges
- Live/mainnet indicators
- Feature flags for early access users

## Technical Requirements

### Frontend Stack (Recommended)
- **Framework**: Next.js 14+ (React) or similar modern framework
- **Styling**: Tailwind CSS or styled-components
- **State Management**: React Context / Zustand (lightweight)
- **Forms**: React Hook Form + Zod validation
- **Animations**: Framer Motion or CSS animations
- **Icons**: Lucide React or similar
- **Logo**: SVG format for scalability and metallic effects

### Key Features
- **Responsive Design**: Mobile-first, works on all devices
- **Dark Mode**: Primary theme (dark by default)
- **Performance**: Fast loading, optimized images
- **SEO**: Meta tags, Open Graph, structured data
- **Analytics**: Track engagement, conversions, product interest
- **Accessibility**: WCAG 2.1 AA compliance
- **Logo Rendering**: Ensure metallic/reflective appearance maintained across devices

### Integrations
- **Email Service**: For waitlist/early access (SendGrid, Mailchimp, etc.)
- **CMS**: For content management (optional: Sanity, Contentful, or markdown files)
- **Social**: Share buttons, embed support
- **Analytics**: Google Analytics / Plausible / Mixpanel
- **Product Analytics**: Track which products users are interested in

## Content Management

### Content Structure
- Weekly content plan (Day 1-7)
- Post metadata:
  - Day number
  - Content type
  - Related product(s)
  - Date published
  - Visual attachments
  - Poll data (if applicable)
  - Engagement metrics

### Content Types Schema
```typescript
type ContentType = 'founder-pov' | 'building-in-public' | 'user-love' | 'poll'

type Product = 'stealthauction' | 'shadowbook' | 'shadowrouter' | 'all'

type Post = {
  id: string
  day: number
  contentType: ContentType
  relatedProducts: Product[]
  title?: string
  content: string
  visual?: {
    type: 'image' | 'screenshot' | 'diagram'
    url: string
    alt: string
  }
  poll?: {
    question: string
    options: string[]
    votes?: Record<string, number>
  }
  cta?: {
    text: string
    action: 'early-access' | 'testnet' | 'product-page'
  }
  publishedAt: Date
  engagement?: {
    likes: number
    replies: number
  }
}
```

## User Flows

### Product Discovery Flow
1. User lands on homepage
2. Sees Shadow Labs logo and brand name
3. Reads problem statement
4. Browses product cards
5. Clicks on product of interest
6. Reads product details
7. Clicks "Request Access" or "Try Testnet"
8. Fills out early access form

### Early Access Flow
1. User sees CTA on homepage/content/product page
2. Clicks "Get Early Access" / "🔒"
3. Fills out waitlist form (selects product interest)
4. Confirmation message
5. Email confirmation sent
6. Redirected to content feed or product page

### Content Engagement Flow
1. User browses content feed
2. Reads post (may be product-related)
3. Interacts (like, reply, vote in poll)
4. Sees product mention → clicks to product page
5. Optionally shares content

### Product Trial Flow (Future)
1. Early access user receives testnet invite
2. Logs in / accesses testnet
3. Uses product (StealthAuction, ShadowBook, etc.)
4. Provides feedback
5. Shares experience (user love content)

## Messaging & Positioning

### Key Messages
- **Problem**: "Onchain execution is broken. Your intent leaks before the tx even confirms."
- **Solution**: "Encrypted execution products that keep your cards hidden."
- **Value**: "Keep 100% of token launch value instead of losing 15-40% to MEV."
- **Differentiation**: "Product-focused encrypted execution, not infrastructure."
- **Tagline**: "ENCRYPTED EXECUTION FOR DEFI"

### Tone of Voice
- Technical but accessible
- Direct and honest about problems
- Building in public transparency
- Community-driven
- Product-focused (not dev tool focused)
- Sophisticated and mysterious (matching brand identity)

## Performance Targets

- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Lighthouse Score**: > 90
- **Mobile Performance**: Optimized for 3G networks
- **Logo Loading**: Ensure logo renders quickly with metallic effects

## Security Considerations

- HTTPS only
- Form validation and sanitization
- Rate limiting on forms
- CSRF protection
- Secure email handling (no sensitive data in forms)
- Privacy-first analytics (if applicable)

## Success Metrics

- Early access signups (by product interest)
- Content engagement (likes, replies, shares)
- Poll participation rates
- Product page views
- Time on site
- Bounce rate
- Conversion rate (visitor → signup)
- Product interest distribution

## Launch Phases

### Phase 1: MVP (Week 1)
- Homepage with hero (logo + brand name + tagline), problem statement, and product cards
- Content feed with Day 1-7 posts
- Early access form with product selection
- Basic product pages (StealthAuction, ShadowBook, ShadowRouter)
- About/Mission page
- Logo implementation with metallic styling

### Phase 2: Enhanced Engagement
- Poll component
- Comment/reply system
- Social sharing
- Product filtering in content feed
- Analytics integration
- Enhanced logo animations

### Phase 3: Product Features
- Product status indicators
- Testnet access portal (for early access users)
- Product demos/screenshots
- Use case galleries
- Metallic UI component library

### Phase 4: Community Features
- User accounts (for testnet users)
- Product feedback system
- Success stories/user testimonials
- Newsletter

## Notes

- **Brand Identity**: The metallic shield logo is central to the brand - maintain its premium, reflective appearance across all implementations
- **Product Focus**: We're building products, not infrastructure. Messaging should emphasize end-user value.
- **Building in Public**: Transparency is key - share progress, challenges, wins.
- **Community-Driven**: Engage with users, respond to feedback, build together.
- **Visual Storytelling**: Dark, futuristic aesthetic with metallic accents reinforces the "shadows" brand and security focus.
- **Problem-Solution Fit**: Always lead with the problem users face, then show how our products solve it.
- **Logo Usage**: Ensure logo is always rendered with sufficient quality to maintain metallic/reflective appearance
- **Typography Consistency**: Maintain geometric sans-serif family throughout for brand cohesion
