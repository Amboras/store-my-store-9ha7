'use client'

import Link from 'next/link'
import { Leaf, Instagram, Twitter, Facebook, Youtube } from 'lucide-react'
import { clearConsent } from '@/lib/cookie-consent'
import { usePolicies } from '@/hooks/use-policies'

const footerLinks = {
  shop: [
    { label: 'All Products', href: '/products' },
    { label: 'Best Sellers', href: '/collections/best-sellers' },
    { label: 'New Arrivals', href: '/products?sort=newest' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping & Returns', href: '/shipping' },
    { label: 'Contact Us', href: '/contact' },
  ],
}

export default function Footer() {
  const { policies } = usePolicies()

  const companyLinks = [
    { label: 'Our Science', href: '/about' },
  ]

  if (policies?.privacy_policy) {
    companyLinks.push({ label: 'Privacy Policy', href: '/privacy' })
  }
  if (policies?.terms_of_service) {
    companyLinks.push({ label: 'Terms of Service', href: '/terms' })
  }
  if (policies?.refund_policy) {
    companyLinks.push({ label: 'Refund Policy', href: '/refund-policy' })
  }
  if (policies?.cookie_policy) {
    companyLinks.push({ label: 'Cookie Policy', href: '/cookie-policy' })
  }

  return (
    <footer className="bg-brand-primary text-primary-foreground">
      {/* Newsletter strip */}
      <div className="border-b border-white/10">
        <div className="container-custom py-10 grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="font-heading text-2xl font-bold">Join the Vitality+ Circle</h3>
            <p className="mt-2 text-sm text-primary-foreground/70 max-w-md">
              Protocols, research breakdowns, and exclusive subscriber pricing.
              No spam — just science.
            </p>
          </div>
          <form className="flex gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 border border-white/20 bg-white/5 px-4 py-3 text-sm placeholder:text-primary-foreground/50 focus:border-brand-accent focus:outline-none rounded-sm"
            />
            <button
              type="submit"
              className="bg-brand-accent text-brand-primary px-6 py-3 text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-opacity rounded-sm whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="container-custom py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-brand-primary">
                <Leaf className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="font-heading text-2xl font-bold">
                Vitality<span className="text-brand-accent">+</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed max-w-sm">
              Clinically-dosed supplements made from traceable, premium-grade ingredients.
              Formulated by experts. Tested by independent labs. Trusted by 50,000+ daily.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.15em] text-brand-accent mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Vitality+. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => {
                clearConsent()
                window.dispatchEvent(new Event('manage-cookies'))
              }}
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Manage Cookies
            </button>
            <span className="text-xs text-primary-foreground/60">Powered by Amboras</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
