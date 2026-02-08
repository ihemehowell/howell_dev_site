'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SiCheckmarx } from 'react-icons/si'

const models = [
  {
    name: 'Starter',
    price: 'From $500',
    desc: 'Simple websites and landing pages.',
    features: [
      'Single-page or small website',
      'Responsive design',
      'Basic SEO setup',
      '2 weeks delivery',
    ],
  },
  {
    name: 'Growth',
    price: 'From $1,500',
    desc: 'For startups and growing businesses.',
    features: [
      'Multi-page website or web app',
      'Custom UI components',
      'Performance optimization',
      '4–6 weeks delivery',
    ],
  },
  {
    name: 'Custom',
    price: 'Let’s Talk',
    desc: 'For complex products and platforms.',
    features: [
      'Product architecture',
      'Advanced integrations',
      'Ongoing support',
      'Flexible timeline',
    ],
  },
]

export default function EngagementModels() {
  return (
    <section className="py-28 px-6 border-t border-white/5 bg-grid">
      <div className="max-w-6xl mx-auto text-center">

        <p className="text-sm uppercase tracking-widest text-neutral-400">
          Engagement
        </p>

        <h2 className="mt-4 text-5xl font-semibold">
          How We Can Work Together
        </h2>

        <motion.div
          className="mt-16 grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {models.map((model, i) => (
            <motion.div
              key={i}
              className="glow-card relative p-10 rounded-2xl bg-neutral-900/60 border border-white/10
                         hover:border-white/25 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]
                         transition-transform duration-300"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <h3 className="text-2xl font-medium">{model.name}</h3>
              <p className="mt-2 text-neutral-400">{model.desc}</p>
              <p className="mt-6 text-3xl font-semibold">{model.price}</p>

              <ul className="mt-6 space-y-3 text-neutral-400 mb-8">
                {model.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-white/50 font-bold"><SiCheckmarx className="w-4 h-4" /></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl bg-white text-black font-medium transition-all
                           hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
