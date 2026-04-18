'use client'

import { useState, useEffect } from 'react'
import { X, Truck, ShieldCheck, Leaf } from 'lucide-react'

const MESSAGES = [
  { icon: Truck, text: 'Free shipping on orders over $75' },
  { icon: ShieldCheck, text: '60-day money-back guarantee' },
  { icon: Leaf, text: 'Third-party tested for purity' },
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % MESSAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  if (!isVisible) return null

  const current = MESSAGES[index]
  const Icon = current.icon

  return (
    <div className="relative bg-brand-primary text-primary-foreground">
      <div className="container-custom flex items-center justify-center py-2.5 text-xs sm:text-sm tracking-wide">
        <div key={index} className="flex items-center gap-2 animate-fade-in">
          <Icon className="h-3.5 w-3.5" strokeWidth={2} />
          <p>{current.text}</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-3 sm:right-4 p-1 hover:opacity-70 transition-opacity"
          aria-label="Dismiss announcement"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
