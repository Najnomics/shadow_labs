'use client'

import { useState } from 'react'
import Card from '@/components/Card'
import { Calendar, MessageSquare, Heart, Share2 } from 'lucide-react'
import { motion } from 'framer-motion'

type ContentType = 'founder-pov' | 'building-in-public' | 'user-love' | 'poll'

type Post = {
  id: string
  day: number
  contentType: ContentType
  relatedProducts: string[]
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
    action: string
  }
  publishedAt: Date
  engagement?: {
    likes: number
    replies: number
  }
}

// Sample content based on the week 1 content plan
const posts: Post[] = [
  {
    id: '1',
    day: 1,
    contentType: 'founder-pov',
    relatedProducts: ['all'],
    content: 'onchain execution is broken.\nevery time you place a big order, someone is watching.\nyour intent leaks before the tx even confirms.\nfeels like trading with your cards face up.\nanyone else tired of this?',
    publishedAt: new Date('2024-01-01'),
    engagement: { likes: 42, replies: 8 },
  },
  {
    id: '2',
    day: 2,
    contentType: 'building-in-public',
    relatedProducts: ['stealthauction'],
    content: 'just shipped the first version of our stealthauction hook.\nbids encrypted end-to-end with fhe.\nno one sees start price, reserve, or bid size until clearing.\ntestnet coming next week.\nwho wants early access? drop a 🔒 below.',
    publishedAt: new Date('2024-01-02'),
    engagement: { likes: 67, replies: 23 },
  },
  {
    id: '3',
    day: 3,
    contentType: 'founder-pov',
    relatedProducts: ['all'],
    content: 'most profitable defi strategies fail for one boring reason:\nexecution is public.\nmev bots, sandwichers, copy traders — they all see you coming.',
    poll: {
      question: 'Do you think encrypted execution is necessary?',
      options: ['yes', 'no', 'only with encrypted execution'],
      votes: { 'yes': 45, 'no': 12, 'only with encrypted execution': 78 },
    },
    publishedAt: new Date('2024-01-03'),
    engagement: { likes: 89, replies: 15 },
  },
  {
    id: '4',
    day: 4,
    contentType: 'building-in-public',
    relatedProducts: ['shadowbook'],
    content: 'shadowbook update:\nencrypted limit orders now matching gte/min/select without ever decrypting depth.\nmarket makers can quote real size without signaling inventory.\ndark pool integrity, fully on-chain.\nbuilding this in public feels weirdly exposing… but here we are.\nthoughts?',
    publishedAt: new Date('2024-01-04'),
    engagement: { likes: 56, replies: 19 },
  },
  {
    id: '5',
    day: 5,
    contentType: 'user-love',
    relatedProducts: ['stealthauction'],
    content: 'imagine launching a token and keeping 100% of the value instead of losing 15–40% to mev extraction.\nthat\'s what stealthauctions are for.\none treasury manager already told us:\n"this changes everything for governance token events."',
    publishedAt: new Date('2024-01-05'),
    engagement: { likes: 92, replies: 31 },
  },
  {
    id: '6',
    day: 6,
    contentType: 'founder-pov',
    relatedProducts: ['all'],
    content: 'uniswap v4 hooks are powerful.\nbut without encryption, every hook is a new leakage point.\nwe\'re fixing that.\nprivate auctions, private orderbooks, private routing — all composable, no trust needed.\nthe shadows are coming.',
    publishedAt: new Date('2024-01-06'),
    engagement: { likes: 78, replies: 22 },
  },
  {
    id: '7',
    day: 7,
    contentType: 'building-in-public',
    relatedProducts: ['shadowrouter'],
    content: 'shadowrouter milestone:\nintegrators onboard once → access all encrypted execution surfaces.\nno more bespoke engineering per hook.\nwallets, custody providers, aggregators — this is for you.\n\nwhat\'s the biggest friction you face routing protected flow today?\nreply below, we read everything.',
    publishedAt: new Date('2024-01-07'),
    engagement: { likes: 64, replies: 28 },
  },
]

const contentTypeLabels: Record<ContentType, string> = {
  'founder-pov': 'Founder POV',
  'building-in-public': 'Building in Public',
  'user-love': 'User Love',
  'poll': 'Poll',
}

export default function ContentPage() {
  const [selectedFilter, setSelectedFilter] = useState<ContentType | 'all'>('all')
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set())

  const filteredPosts = selectedFilter === 'all' 
    ? posts 
    : posts.filter(post => post.contentType === selectedFilter)

  const toggleLike = (postId: string) => {
    const newLiked = new Set(likedPosts)
    if (newLiked.has(postId)) {
      newLiked.delete(postId)
    } else {
      newLiked.add(postId)
    }
    setLikedPosts(newLiked)
  }

  const getTotalVotes = (votes?: Record<string, number>) => {
    if (!votes) return 0
    return Object.values(votes).reduce((sum, count) => sum + count, 0)
  }

  return (
    <div className="pt-16 sm:pt-20 min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-glow px-2">
            Content Feed
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-shadow-text-light px-2">
            Building in public, sharing our journey
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8 justify-center px-2">
          <button
            onClick={() => setSelectedFilter('all')}
            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border transition-all uppercase text-xs sm:text-sm tracking-wider ${
              selectedFilter === 'all'
                ? 'glass-strong border-shadow-green bg-shadow-green/10'
                : 'glass border-minimal hover:border-shadow-green/50'
            }`}
          >
            All
          </button>
          {(Object.keys(contentTypeLabels) as ContentType[]).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedFilter(type)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg border transition-all uppercase text-xs sm:text-sm tracking-wider ${
                selectedFilter === type
                  ? 'glass-strong border-shadow-green bg-shadow-green/10'
                  : 'glass border-minimal hover:border-shadow-green/50'
              }`}
            >
              {contentTypeLabels[type]}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-4 sm:space-y-6">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05 }}
            >
              <Card>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-3 sm:mb-4">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider glass border-minimal rounded-full">
                      Day {post.day}
                    </span>
                    <span className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs uppercase tracking-wider glass-strong border-shadow-green rounded-full text-shadow-green">
                      {contentTypeLabels[post.contentType]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-shadow-text-gray text-xs sm:text-sm">
                    <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                    {post.publishedAt.toLocaleDateString()}
                  </div>
                </div>

                <div className="mb-4 sm:mb-6">
                  <pre className="whitespace-pre-wrap font-sans text-shadow-text text-sm sm:text-base leading-relaxed overflow-x-auto">
                    {post.content}
                  </pre>
                </div>

                {post.poll && (
                  <div className="mb-4 sm:mb-6 glass rounded-lg p-3 sm:p-4 border-minimal">
                    <p className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{post.poll.question}</p>
                    <div className="space-y-2 sm:space-y-3">
                      {post.poll.options.map((option) => {
                        const votes = post.poll?.votes?.[option] || 0
                        const total = getTotalVotes(post.poll?.votes)
                        const percentage = total > 0 ? (votes / total) * 100 : 0
                        return (
                          <div key={option}>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs sm:text-sm text-shadow-text-light capitalize">{option}</span>
                              <span className="text-xs sm:text-sm text-shadow-text-gray">{votes} votes</span>
                            </div>
                            <div className="w-full glass rounded-full h-1.5 sm:h-2 overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-shadow-green to-shadow-green-dark"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-minimal">
                  <div className="flex items-center gap-4 sm:gap-6">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 sm:gap-2 transition-colors ${
                        likedPosts.has(post.id) ? 'text-shadow-green' : 'text-shadow-text-gray hover:text-white'
                      }`}
                    >
                      <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                      <span className="text-xs sm:text-sm">
                        {post.engagement?.likes || 0 + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex items-center gap-1.5 sm:gap-2 text-shadow-text-gray">
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-xs sm:text-sm">{post.engagement?.replies || 0}</span>
                    </div>
                    <button className="flex items-center gap-1.5 sm:gap-2 text-shadow-text-gray hover:text-white transition-colors">
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
